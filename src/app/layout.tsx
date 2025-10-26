import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Layout/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Layout/Footer";
import { TransitionProvider } from "../context/TransitionContext";
import PageTransition from "../components/Layout/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonderlog Holidays - Build Your Dream Journey With Us",
  description:
    "Discover the world with Wonderlog Holidays. We create unforgettable travel experiences that connect you with cultures, nature, and unique adventures across the globe.",
  keywords:
    "travel agency, tour packages, international travel, domestic travel, visas, pilgrimage tours, travel insurance",
  authors: [{ name: "Wonderlog Holidays" }],
  openGraph: {
    title: "Wonderlog Holidays - Build Your Dream Journey With Us",
    description:
      "Discover the world with Wonderlog Holidays. We create unforgettable travel experiences that connect you with cultures, nature, and unique adventures across the globe.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wonderlog Holidays - Build Your Dream Journey With Us",
    description:
      "Discover the world with Wonderlog Holidays. We create unforgettable travel experiences that connect you with cultures, nature, and unique adventures across the globe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          <Header />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
        </TransitionProvider>
      </body>
    </html>
  );
}
