"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar"; 

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Updated: Changed "/user-dashboard" to "/dashboard" to match your app folder structure
  const hideNavbarPaths = [
    "/admin-dashboard", 
    "/dashboard", 
    "/signup", 
    "/login", 
    "/admin-login"
  ];

  // Logic: Hides the Navbar if the URL starts with any of the paths above
  const shouldHideNavbar = hideNavbarPaths.some(path => pathname.startsWith(path));

  if (shouldHideNavbar) {
    return null;
  }

  return <Navbar />;
}