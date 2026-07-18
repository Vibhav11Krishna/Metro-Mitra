"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar"; 

export default function HeaderWrapper({ onOpenVideo }: { onOpenVideo: () => void }) {
  const pathname = usePathname();

  const hideNavbarPaths = [
    "/admin-dashboard", 
    "/dashboard", 
    "/signup", 
    "/login", 
    "/admin-login"
  ];

  const shouldHideNavbar = hideNavbarPaths.some(path => pathname.startsWith(path));

  if (shouldHideNavbar) {
    return null;
  }

  // Pass the onOpenVideo function down to the Navbar
  return <Navbar onOpenVideo={onOpenVideo} />;
}