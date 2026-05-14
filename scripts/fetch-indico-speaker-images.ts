import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const outputDirectory = "public/speakers";
const outputMapPath = "src/data/speaker-image-map.json";

type IndicoContribution = {
  friendly_id: number;
  url: string;
};

async function readFeaturedSpeakerConfig() {
  const configSource = await readFile("src/config.ts", "utf8");
  const featuredBlock = configSource.match(
    /featuredSpeakers:\s*{([\s\S]*?)\n    },\n    timetable:/,
  )?.[1];

  if (!featuredBlock) {
    throw new Error("Could not locate WebsiteConfig.featuredSpeakers in src/config.ts");
  }

  const exportUrl = featuredBlock.match(/indicoExportUrl:\s*"([^"]+)"/)?.[1];
  const fullSchedulesUrl = featuredBlock.match(/fullSchedulesUrl:\s*"([^"]+)"/)?.[1];
  const contributionIds =
    featuredBlock
      .match(/contributionIds:\s*\[([^\]]+)\]/)?.[1]
      .split(",")
      .map((id) => Number(id.trim()))
      .filter(Boolean) ?? [];

  if (!exportUrl || contributionIds.length === 0) {
    throw new Error("Could not read featured speaker Indico export URL or contribution IDs");
  }

  return {
    baseUrl: new URL(fullSchedulesUrl ?? exportUrl).origin,
    exportUrl,
    contributionIds,
  };
}

function getImageExtension(contentType: string) {
  if (contentType.includes("png")) return "png";
  if (contentType.includes("webp")) return "webp";
  return "jpg";
}

const { baseUrl, exportUrl, contributionIds } = await readFeaturedSpeakerConfig();
await mkdir(outputDirectory, { recursive: true });
await mkdir(path.dirname(outputMapPath), { recursive: true });

const exportResponse = await fetch(exportUrl);
if (!exportResponse.ok) {
  throw new Error(`Indico export failed: ${exportResponse.status} ${exportResponse.statusText}`);
}

const exportJson = await exportResponse.json();
const contributions = (exportJson.results?.[0]?.contributions ?? []) as IndicoContribution[];
const featuredContributions = contributions.filter((item) =>
  contributionIds.includes(item.friendly_id),
);

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  baseURL: baseUrl,
  userAgent:
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome Safari/537.36",
});
const page = await context.newPage();
const imageMap: Record<string, string> = {};

try {
  for (const contribution of featuredContributions) {
    const url = contribution.url.startsWith("http")
      ? contribution.url
      : `${baseUrl}${contribution.url}`;

    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    const imageSources = await page.$$eval(
      'section .speaker-list img[src*="/user/"][src*="/picture-"]',
      (images) => images.map((image) => image.getAttribute("src")).filter(Boolean),
    );

    for (const imageSource of imageSources) {
      const imageUrl = new URL(imageSource as string, baseUrl);
      const userId = imageUrl.pathname.match(/^\/user\/(\d+)\//)?.[1];
      if (!userId || imageMap[userId]) continue;

      const response = await context.request.get(imageUrl.toString(), {
        headers: { referer: url },
        timeout: 60000,
      });

      if (!response.ok()) {
        throw new Error(
          `Image download failed for user ${userId}: ${response.status()} ${response.statusText()}`,
        );
      }

      const extension = getImageExtension(response.headers()["content-type"] ?? "");
      const relativePath = `speakers/${userId}.${extension}`;
      const outputPath = path.join("public", relativePath);

      if (!existsSync(outputPath)) {
        await writeFile(outputPath, Buffer.from(await response.body()));
      }
      imageMap[userId] = `/${relativePath}`;
    }
  }
} finally {
  await browser.close();
}

await writeFile(outputMapPath, `${JSON.stringify(imageMap, null, 2)}\n`);

if (Object.keys(imageMap).length === 0) {
  throw new Error("No speaker images were discovered from Indico contribution pages");
}

console.log(`Prepared ${Object.keys(imageMap).length} Indico speaker images`);
