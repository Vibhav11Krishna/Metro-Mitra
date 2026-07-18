"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Play } from "lucide-react";

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
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-black tracking-tighter text-slate-950">
          Metro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Mitra</span>
        </a>

        {/* Centered Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="relative px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950" 
              onMouseEnter={() => setHoveredPath(link.href)}
            >
              {hoveredPath === link.href && (
                <motion.div 
                  className="absolute inset-0 z-0 rounded-full bg-slate-100/80" 
                  layoutId="navbar-hover" 
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} 
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenVideo} 
            className="group flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600 transition-all hover:text-cyan-700"
          >
            <div className="p-1.5 rounded-full bg-slate-100 group-hover:bg-cyan-100 transition-colors">
              <Play size={12} className="fill-current" />
            </div>
            Live Demo
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
              className="flex items-center gap-2 bg-slate-950 pl-5 pr-4 py-2.5 text-sm font-bold text-white rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              Get Started
              <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }} 
                  animate={{ opacity: 1, y: 0, scale: 1 }} 
                  exit={{ opacity: 0, y: 10, scale: 0.95 }} 
                  className="absolute right-0 mt-3 w-48 rounded-3xl bg-white border border-slate-100 shadow-2xl p-2 z-50"
                >
                  <a href="/signup" className="block px-4 py-3 text-sm font-bold text-slate-900 rounded-2xl hover:bg-slate-50">Sign Up</a>
                  <a href="/login" className="block px-4 py-3 text-sm font-medium text-slate-600 rounded-2xl hover:bg-slate-50">User Login</a>
                  <div className="h-px bg-slate-100 my-1" />
                  <a href="/admin-login" className="block px-4 py-3 text-sm font-bold text-rose-600 rounded-2xl hover:bg-rose-50">Admin Access</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="md:hidden overflow-hidden border-t border-slate-100 bg-white/95 px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block text-lg font-bold text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}