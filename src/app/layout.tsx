import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TeamAurora.AI — by Ajay",
  description: "Full-Stack Web Development | AI-Powered Design | Real Client Results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-[#0A0A0F] text-slate-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
