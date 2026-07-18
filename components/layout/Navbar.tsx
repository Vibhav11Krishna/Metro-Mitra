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

export default function Navbar({ onOpenVideo }: { onOpenVideo: () => void }) {
  const [hoveredPath, setHoveredPath] = useState(navLinks[0].href);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="text-xl font-extrabold tracking-tight text-slate-950">
          Metro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Mitra</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900" onMouseEnter={() => setHoveredPath(link.href)}>
              {hoveredPath === link.href && <motion.div className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-cyan-50 to-rose-50" layoutId="navbar-hover" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={onOpenVideo} className="px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:border-cyan-500 hover:text-cyan-700 transition-all">
            Live Demo
          </button>
          
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="rounded-full bg-gradient-to-r from-cyan-600 to-rose-500 px-6 py-2 text-sm font-bold text-white shadow-lg">Get Started</button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-3 w-48 rounded-2xl bg-white border border-slate-100 shadow-xl overflow-hidden py-1 z-50">
                  <a href="/signup" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 border-b border-slate-100">Sign Up (New)</a>
                  <a href="/login" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 border-b border-slate-100">User Login</a>
                  <a href="/admin-login" className="block px-4 py-3 text-sm font-medium text-rose-600 hover:bg-rose-50">Admin Login</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button onClick={() => { onOpenVideo(); setIsMobileMenuOpen(false); }} className="w-full text-center py-2 border border-slate-200 rounded-lg text-sm font-semibold hover:border-cyan-500 hover:text-cyan-700 transition-all">
              Live Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}