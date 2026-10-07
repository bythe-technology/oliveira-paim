import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "oliveira-paim.vercel.app" }], destination: "https://www.oliveirapaim.com.br/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "oliveira-paim-bythe-tech.vercel.app" }], destination: "https://www.oliveirapaim.com.br/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "oliveira-paim-git-main-bythe-tech.vercel.app" }], destination: "https://www.oliveirapaim.com.br/:path*", permanent: true },
      { source: "/solucoes/consultoria-empresarial", destination: "/solucoes/assessoria-empresarial", permanent: true },
      { source: "/solucoes/compliance-juridico", destination: "/solucoes/assessoria-juridica-empresarial", permanent: true },
      { source: "/assessoria-juridica", destination: "/solucoes/assessoria-juridica-empresarial", permanent: true },
    ];
  },
};

export default nextConfig;
