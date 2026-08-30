import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mubarik Science Academy | Building Minds, Shaping Futures",
  description:
    "Mubarik Science Academy and Mubarik Educare School — providing quality education with a focus on academic excellence, scientific thinking, and character development in Pakistan.",
  keywords: [
    "Mubarik Science Academy",
    "Mubarik Educare School",
    "education Pakistan",
    "science academy",
    "school admissions",
  ],
  authors: [{ name: "Mubarik Science Academy" }],
  icons: {
    icon: "/mubarik-logo.png",
  },
  openGraph: {
    title: "Mubarik Science Academy",
    description:
      "Building Minds, Shaping Futures. A quality educational institution in Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSerif.variable} ${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
