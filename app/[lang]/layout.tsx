import type { Metadata } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteHeader from "@/components/SiteHeader";
import TrackClicks from "@/components/TrackClicks";
import { siteConfig } from "@/config/site";
import { getDictionary, htmlLang, isLang, langs, pageMetadata } from "@/lib/i18n";

const interTight = localFont({
  src: [
    { path: "../../public/fonts/InterTight-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/InterTight-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/InterTight-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/InterTight-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    { path: "../../public/fonts/JetBrainsMono-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/JetBrainsMono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const themeScript =
  "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}";

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLang(params.lang) ? params.lang : "en";
  const t = getDictionary(lang);
  const base = pageMetadata(lang, "/", { title: t.meta.title, description: t.meta.description });
  return {
    ...base,
    metadataBase: new URL(siteConfig.url),
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      ...base.openGraph,
      type: "website",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: t.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [siteConfig.ogImage],
    },
    robots: { index: true, follow: true },
    /* app/icon.svg and app/apple-icon.png are picked up by file convention too. */
    icons: {
      icon: [
        { url: "/icon-dc.svg", type: "image/svg+xml" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      shortcut: "/favicon-32.png",
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const t = getDictionary(lang);

  return (
    <html
      lang={htmlLang[lang]}
      data-theme="dark"
      suppressHydrationWarning
      className={`${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Apply a stored theme before first paint so a light reload never flashes dark. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="lg font-sans">
        <SiteHeader lang={lang} nav={t.nav} theme={t.theme} />
        <main>{children}</main>
        <TrackClicks lang={lang} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
