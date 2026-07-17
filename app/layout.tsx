import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. REMOVE: import Navbar from "@/components/layout/Navbar"; 
import HeaderWrapper from "@/components/layout/HeaderWrapper"; // 2. ADD THIS

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetroPulse AI",
  description: "Intelligent Transit Command Center",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 3. USE THE WRAPPER, NOT THE NAVBAR DIRECTLY */}
        <HeaderWrapper /> 
        {children}
      </body>
    </html>
  );
}