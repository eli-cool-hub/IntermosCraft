import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const legacy = ["/v1", "/v2", "/v3", "/v4", "/v5", "/preview"];
    return legacy.flatMap((path) => [
      {
        source: `/:locale(en|cs)${path}`,
        destination: "/:locale",
        permanent: true,
      },
    ]);
  },
};

export default withNextIntl(nextConfig);
