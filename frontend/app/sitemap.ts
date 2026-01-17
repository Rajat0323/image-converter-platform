import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imageformatconverter.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/png-to-jpg`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jpg-to-png`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/png-to-webp`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jpg-to-webp`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/webp-to-jpg`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
