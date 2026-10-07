import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { StructuredData } from "@/components/structured-data";
import { site } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"], display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Brasília e todo o Brasil`, template: `%s | ${site.shortName}` },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  openGraph: { title: site.name, description: site.description, type: "website", locale: "pt_BR", images: ["/images/hero-boardroom.png"] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/images/hero-boardroom.png"] },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "CVslN0wi6BjM-1WmKPKmamtTNthOM0zv5pZ4P7r0YO0" },
};

export const viewport: Viewport = { themeColor: "#071b31" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${serif.variable} ${sans.variable}`}><MotionProvider /><a className="skip-link" href="#conteudo">Ir para o conteúdo</a><Header /><main id="conteudo">{children}</main><Footer /><AnalyticsConsent /><StructuredData data={[organizationSchema(), websiteSchema()]} /></body></html>;
}
