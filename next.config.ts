import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/solucoes/consultoria-empresarial", destination: "/solucoes/assessoria-empresarial", permanent: true }];
  },
};

export default nextConfig;
