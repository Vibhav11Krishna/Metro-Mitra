"use client"; // Required because we are using useState
import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import VideoModal from "@/components/VideoModal";

const inter = Inter({ subsets: ["latin"] });

// Note: If you need Metadata, keep it in a separate layout.tsx (Server Component) 
// and move this logic to a child Client Component. 
// For now, this will fix the functionality:

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Pass the function to toggle the modal */}
        <HeaderWrapper onOpenVideo={() => setShowVideo(true)} />
        
        <VideoModal 
          isOpen={showVideo} 
          onClose={() => setShowVideo(false)} 
        />
        
        {children}
      </body>
    </html>
  );
}