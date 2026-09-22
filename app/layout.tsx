import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeScript } from "@/components/ThemeScript";
import { MotionProvider } from "@/components/animation";
import { siteConfig } from "@/data/site";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: siteConfig.name,
  description: siteConfig.description
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fa" },
    { media: "(prefers-color-scheme: dark)", color: "#10141d" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${plexSans.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <ThemeScript />
        <noscript>
          <style>{`
            .page-transition-shell,
            .reveal {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#main">
          Bỏ qua để đến nội dung chính
        </a>
        <SiteHeader />
        <main id="main">
          <MotionProvider>{children}</MotionProvider>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
