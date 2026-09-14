"use client";

import { useEffect, useState } from "react";

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }
const storageKey = "op_cookie_consent";
const measurementId = process.env.NEXT_PUBLIC_GA_ID;

function loadAnalytics() {
  if (!measurementId || document.querySelector("[data-op-analytics]")) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.opAnalytics = "true";
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });
}

export function AnalyticsConsent() {
  const [choice, setChoice] = useState<string | null>(null);
  useEffect(() => {
    if (!measurementId) return;
    const saved = localStorage.getItem(storageKey);
    setChoice(saved);
    if (saved === "accepted") loadAnalytics();
    const track = (event: Event) => {
      if (localStorage.getItem(storageKey) !== "accepted") return;
      const detail = (event as CustomEvent<{ event: string; parameters?: Record<string, unknown> }>).detail;
      if (detail?.event) window.gtag?.("event", detail.event, detail.parameters);
    };
    const clicks = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>("a");
      if (link?.href.includes("wa.me/")) window.gtag?.("event", "whatsapp_click", { link_url: link.href });
      if (link?.hasAttribute("download") || /\.(pdf|docx?|xlsx?|zip)(\?|$)/i.test(link?.href || "")) window.gtag?.("event", "file_download", { link_url: link?.href });
    };
    const trackedDepths = new Set<number>();
    const scroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const depth = Math.min(100, Math.round((window.scrollY / available) * 100));
      [25, 50, 75, 100].forEach((threshold) => {
        if (depth >= threshold && !trackedDepths.has(threshold)) {
          trackedDepths.add(threshold);
          window.gtag?.("event", "scroll_depth", { percent_scrolled: threshold });
        }
      });
    };
    if (document.querySelector('[data-analytics="article"]')) window.gtag?.("event", "article_view", { page_path: location.pathname });
    window.addEventListener("op:track", track);
    document.addEventListener("click", clicks);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => { window.removeEventListener("op:track", track); document.removeEventListener("click", clicks); window.removeEventListener("scroll", scroll); };
  }, []);
  if (!measurementId || choice) return null;
  const decide = (value: "accepted" | "rejected") => { localStorage.setItem(storageKey, value); setChoice(value); if (value === "accepted") loadAnalytics(); };
  return <aside className="cookie-banner" aria-label="Preferências de cookies"><p>Usamos cookies analíticos opcionais para entender a navegação e melhorar o site. Você pode aceitar ou recusar.</p><div><button className="button button-gold" onClick={() => decide("accepted")}>Aceitar</button><button className="button cookie-reject" onClick={() => decide("rejected")}>Recusar</button></div></aside>;
}
