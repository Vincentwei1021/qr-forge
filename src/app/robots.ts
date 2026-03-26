import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host") || "qr.toolboxlite.com";
  const base =
    host === "toolboxlite.com" || host === "www.toolboxlite.com"
      ? "https://toolboxlite.com"
      : "https://qr.toolboxlite.com";

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
