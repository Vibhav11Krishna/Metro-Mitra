"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Stations", href: "/#stations" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [hoveredPath, setHoveredPath] = useState(navLinks[0].href);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Brand */}
        <a href="/" className="text-xl font-extrabold tracking-tight text-slate-950">
          Metro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Mitra</span>
        </a>

        {/* Sliding Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              onMouseEnter={() => setHoveredPath(link.href)}
            >
              {hoveredPath === link.href && (
                <motion.div
                  className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-cyan-50 to-rose-50"
                  layoutId="navbar-hover"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right Side with Dropdown */}
        <div className="flex items-center gap-6">
          {/* Changed href to #live-demo for in-page navigation */}
          <a href="#live-demo" className="text-sm font-medium text-slate-600 hover:text-cyan-700 transition-colors">
            Live Demo
          </a>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="rounded-full bg-gradient-to-r from-cyan-600 to-rose-500 px-6 py-2 text-sm font-bold text-white shadow-lg hover:shadow-cyan-200 transition-all"
            >
              Get Started
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-48 rounded-2xl bg-white border border-slate-100 shadow-xl overflow-hidden py-1"
                >
                  <a href="/signup" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 border-b border-slate-100">Sign Up (New)</a>
                  <a href="/login" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 border-b border-slate-100">User Login</a>
                  <a href="/admin-login" className="block px-4 py-3 text-sm font-medium text-rose-600 hover:bg-rose-50">Admin Login</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}