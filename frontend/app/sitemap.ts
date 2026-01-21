import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.imageformatconverter.in/",
      lastModified: new Date(),
    },
    {
      url: "https://www.imageformatconverter.in/png-to-jpg",
      lastModified: new Date(),
    },
    {
      url: "https://www.imageformatconverter.in/jpg-to-png",
      lastModified: new Date(),
    },
    {
      url: "https://www.imageformatconverter.in/png-to-webp",
      lastModified: new Date(),
    },
    {
      url: "https://www.imageformatconverter.in/jpg-to-webp",
      lastModified: new Date(),
    },
    {
      url: "https://www.imageformatconverter.in/webp-to-jpg",
      lastModified: new Date(),
    },
  ];
}
