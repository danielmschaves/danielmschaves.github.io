import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = localFont({
  src: [
    { path: "../public/fonts/Inter-Regular.woff2",   weight: "400", style: "normal" },
    { path: "../public/fonts/Inter-Medium.woff2",    weight: "500", style: "normal" },
    { path: "../public/fonts/Inter-SemiBold.woff2",  weight: "600", style: "normal" },
    { path: "../public/fonts/Inter-Bold.woff2",      weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    { path: "../public/fonts/JetBrainsMono-Regular.woff2",  weight: "400", style: "normal" },
    { path: "../public/fonts/JetBrainsMono-Medium.woff2",   weight: "500", style: "normal" },
    { path: "../public/fonts/JetBrainsMono-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Chaves - Delivery Manager & Data Engineer",
  description:
    "Results-driven Delivery Manager with 6 years of experience leading enterprise data initiatives and cross-functional teams. Specializing in AI/ML solutions, modern data stack implementations, and data platform architecture.",
  keywords: [
    "Daniel Chaves",
    "Delivery Manager",
    "Data Engineer",
    "Data Science",
    "Python",
    "SQL",
    "dbt",
    "Airflow",
    "Snowflake",
    "Data Engineering",
    "AI/ML",
  ],
  authors: [{ name: "Daniel Chaves" }],
  creator: "Daniel Chaves",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielmschaves.github.io",
    title: "Daniel Chaves - Delivery Manager & Data Engineer",
    description:
      "Results-driven Delivery Manager with 6 years of experience leading enterprise data initiatives.",
    siteName: "Daniel Chaves Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Chaves - Delivery Manager & Data Engineer",
    description:
      "Results-driven Delivery Manager with 6 years of experience leading enterprise data initiatives.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon-dc.svg", type: "image/svg+xml" }],
    shortcut: "/icon-dc.svg",
    apple: [{ url: "/icon-dc.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
