import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Geist,
  Geist_Mono,
  Urbanist,
  Montserrat_Alternates,
  Rajdhani,
  Lato,
  Inter,
  Nunito,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const tanNimbus = localFont({
  src: "./assets/TAN-Nimbus/TAN-NIMBUS.woff2",
  variable: "--font-tan",
});

export const metadata: Metadata = {
  title: "Ricky — Brand & Product Designer",
  description:
    "Ricky is a brand and product designer — Co-Founder of Kadix Technologies — creating purposeful identities and digital experiences that stand the test of time.",
  openGraph: {
    title: "Ricky — Brand & Product Designer",
    description:
      "A curated portfolio of brand identities and product experiences — each one built with intent, not decoration.",
    url: "https://greatricky.vercel.app",
    siteName: "Ricky Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricky — Brand & Product Designer",
    description:
      "A curated portfolio of brand identities and product experiences — each one built with intent, not decoration.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${montserratAlternates.variable} ${rajdhani.variable} ${lato.variable} ${inter.variable} ${nunito.variable} ${tanNimbus.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
