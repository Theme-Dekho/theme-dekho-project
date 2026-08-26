import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthProvider } from "@/lib/auth-context";
import { Inter, Sora } from "next/font/google";
import { SiteProvider } from "@/lib/site-context";
import CustomQuoteModel from "@/components/modal/CustomQuoteModel";
import AnalyticsPageTracker from "@/components/analytics/AnalyticsPageTracker";
import PreviewModal from "@/components/product/PreviewModal";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "@/styles/header.css";
import "@/styles/hero.css";
import "@/styles/category.css";
import "@/styles/product.css";
import "@/styles/sections.css";
import "@/styles/footer.css";
import "@/styles/modal.css";
import "@/styles/responsive.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Theme Dekho — Affordable & Custom Website Development",
  description:
    "10,000+ websites built for Healthcare, Interior Design, E-Commerce, Real Estate & Tour & Travel businesses. Launch your professional website today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    // suppressHydrationWarning
    data-scroll-behavior="smooth"
    className={`${inter.variable} ${sora.variable}`}>
      <body>
       <Suspense fallback={null}>
          <AnalyticsPageTracker />
        </Suspense>

        <AuthProvider>
        <SiteProvider>{children}
        <CustomQuoteModel/>
        <PreviewModal />
        </SiteProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
