

import * as m from "./paraglide/messages.js";
import UCKLogo from './assets/logo.svg'
import MicrosoftKoreaVenueImage from '@assets/hall.png'
import UbuConKoreaLogo from "@assets/UbuntuKorea.svg"

export interface SubMenuItem {
    link: string;
    label: string;
}

export const WebsiteConfig = {
    siteTitle: "UbuCon Korea 2025",
    siteDescription: "Microsoft Korea, Seoul | August 10",
    socialMedia: {
        "twitter": "UbuntuKrOrg"
    },
    faviconPath: UCKLogo.src,
    navigation: (locale: string) => [
        {
            label: m.nav_about(),
            link: `/${locale}/about`,
            childs: []
        },
        {
            label: m.nav_venue_safety(),
            link: `/${locale}/venue-and-safety`,
            childs: []
        },
        {
            label: m.nav_programs(),
            link: "#",
            childs: [
                {
                    label: m.nav_programs_cfp(),
                    link: "/cfp"
                },
                {
                    label: m.nav_programs_timetable(),
                    link: `/${locale}/programs/timetable`
                },
                {
                    label: m.nav_programs_speakers(),
                    link: "https://events.canonical.com/event/126/contributions/speakers"
                },
                {
                    label: m.nav_programs_social(),
                    link: "https://github.com/ubuntu-kr/ksp-toolkits/blob/master/ksp/ksp-20250809/readme.md"
                }
            ]
        },
        {
            label: m.nav_sponsors(),
            link: "#",
            childs: [
                {
                    label: m.nav_sponsors_become(),
                    link: `/${locale}/sponsors/become-a-sponsor/`
                },
                {
                    label: m.nav_sponsors_our(),
                    link: `/${locale}/sponsors/our-sponsors/`
                },
                {
                    label: m.nav_sponsors_patrons(),
                    link: `/${locale}/sponsors/patrons/`
                }
            ]
        },
        {
            label: m.nav_links(),
            link: "#",
            childs: [
                {
                    label: m.nav_links_news(),
                    link: "https://discourse.ubuntu-kr.org/c/notice/9",
                },
                {
                    label: m.nav_links_chat(),
                    link: "https://ubuntu-kr.org/chat/",
                }
            ]
        }
    ],
    subNavigation: [
        {
            label: "🎟️",
            link: "/tickets",
            childs: [

            ]
        }
    ],
    footer: {
        copyright: "© 2024-Present Ubuntu Korea Community. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubuntu-kr.org",
        srcRepoUrl: "https://github.com/ubuntu-kr/2025.ubuntu-kr.org",
        organizers: [
            { name: "Ubuntu Korea Community", logoImage: UbuConKoreaLogo.src, link: "https://www.ubuntu-kr.org" },
        ]
    },
    mainBanner: {
        showFootnote: true,
        buttons: (locale: string) => [
            {
                label: m.nav_register(),
                link: `/tickets`,
                class: "p-button--positive",
                target: "_blank"
            },
            {
                label: m.nav_sponsors_become(),
                link: `/${locale}/sponsors/become-a-sponsor`,
                class: "p-button"
            },
            {
                label: m.mainBanner_earlybird,
                link: `https://discourse.ubuntu-kr.org/t/ubucon-korea-2025/49982`,
                class: "p-button",
                target: "_blank"
            },
        ],
        logo: UCKLogo
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/126.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [27, 5, 16, 9, 2, 8],
        speakerIds: [
            { db_id: 981, user: 3035 }, { db_id: 979, user: 1123 }, { db_id: 978, user: 939 },
            { db_id: 986, user: 4167 }, { db_id: 952, user: 4181 }, { db_id: 532, user: 4182 },
            { db_id: 975, user: 4176 }, { db_id: 999, user: 836 },
        ],
        fullSchedulesUrl: "https://events.canonical.com/event/126/contributions/"
    },
    timetable: {
        halls: ["jeju", "donghae", "dokdo"],
        indicoExportUrl: "https://events.canonical.com/export/timetable/126.json?occ=yes&pretty=yes",
        baseUrl: "https://events.canonical.com",
        showDetails: "https://events.canonical.com/event/126/timetable/?layout=room",
        difficulty: {
            beginner: [11, 4, 5, 19, 13, 6, 8],
            intermediate: [9, 3, 12, 2, 1],
            advanced: [20, 16]
        }
    },
    cityBanner: {
        cityImage: MicrosoftKoreaVenueImage.src
    },
    blog: {
        rssFeedUrl: "https://discourse.ubuntu-kr.org/tags/ubucon-kr-2025.rss",
        viewMoreUrl: "https://discourse.ubuntu-kr.org/tags/c/notice/9/ubucon-kr-2025",
        viewMoreUrlAlternative: "https://discourse.ubuntu-kr.org/tags/ubucon-kr-2025"
    },
}
