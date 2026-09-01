import type { Metadata } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeScript } from "@/components/ThemeScript";
import { siteConfig } from "@/data/site";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: siteConfig.name,
  description: siteConfig.description
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
      className={`${firaSans.variable} ${firaCode.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
