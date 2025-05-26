import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { description, title } from "@/constants/details";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700", "200"],
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});
export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "MOLIESH B", url: "https://github.com/subashio" }],
  keywords: [
    "MOLIESH Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "UI/UX Designer",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB",
    "Express.js Developer",
    "Web Solutions",
    "Frontend Development",
    "Backend Development",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL! || "https://subashfolio.site",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_BASE_URL! || "https://subashfolio.site",
    title,
    description,
    siteName: title,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1733,
        height: 852,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full !scroll-smooth">
      <body
        className={cn(
          "relative h-full min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          <Navbar />

          {children}
          <Analytics />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
