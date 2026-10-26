import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "DC",
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#0e0f11",
    theme_color: "#0e0f11",
    icons: [
      { src: "/icon-dc.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
