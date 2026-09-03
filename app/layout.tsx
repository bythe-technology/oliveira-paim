import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"], display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.shortName} | Assessoria Empresarial`, template: `%s | ${site.shortName}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: "website", locale: "pt_BR", images: ["/images/hero-boardroom.png"] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/images/hero-boardroom.png"] },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name, description: site.description, areaServed: "Brasil", address: { "@type": "PostalAddress", addressLocality: "Brasília", addressRegion: "DF", addressCountry: "BR" }, telephone: site.phoneDisplay, email: site.email, sameAs: [site.instagram, site.linkedin] };
  return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}><MotionProvider /><a className="skip-link" href="#conteudo">Ir para o conteúdo</a><Header /><main id="conteudo">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
