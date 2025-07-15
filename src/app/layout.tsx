import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Intro from "@/component/ui/intro";
import NavBar from "@/component/layout/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Idris Habeeb | Portfolio",
  description: "portfolio webisite of Idris Habeeb, a front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
