import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chill with me",
    short_name: "Chill with me",
    description:
      "Discover a world of serene sounds on our website! Immerse yourself in soothing lofi music, explore a variety of ambient sounds, enhance focus with tomo focus, and stay organized with our todo list feature. Experience a creative and productive space, all while enjoying the convenience of seamlessly opening your favorite YouTube videos. Dive in now for a unique blend of relaxation and productivity!",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    theme_color: "#1e1e2e",
    background_color: "#a6e3a1",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    related_applications: [
      {
        platform: "webapp",
        url: "https://chillwithme.hongduccodedao.io.vn/manifest.json",
      },
    ],
    scope: "/",
  };
}
