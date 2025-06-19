
import speaker981 from "@assets/speaker_picture/981.png";
import speaker979 from "@assets/speaker_picture/979.jpeg";
import speaker939 from "@assets/speaker_picture/939.jpeg";
import speaker986 from "@assets/speaker_picture/986.png";
import speaker952 from "@assets/speaker_picture/952.png";
import speaker975 from "@assets/speaker_picture/975.png";
import speaker999 from "@assets/speaker_picture/999.png";

export const featuredSessionIds = [
   689
];
export const sessionListApiUrl = "https://events.canonical.com/export/event/126.json?detail=contributions&pretty=yes:";
export const sessionListUrl = "https://events.canonical.com/event/126/contributions/";
interface ImageMapType {
    [key: string]: ImageMetadata
  };

export const speakerPersonIdPictureMap: ImageMapType = {
    k981: speaker981,
    k979: speaker979,
    k939: speaker939,
    k986: speaker986,
    k952: speaker952,
    k975: speaker975,
    k999: speaker999
}