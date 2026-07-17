"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Added for redirection
import NextImage from "next/image";
import { motion } from "framer-motion";
import { User, Mail, Phone, Lock, MapPin } from "lucide-react";

export default function Signup() {
  const router = useRouter(); // Initialize router
  const [formData, setFormData] = useState({ 
    firstName: "", lastName: "", email: "", phone: "", password: "" 
  });

 // Updated submission handler
const handleSignup = (e: React.FormEvent) => {
  e.preventDefault();
  
  // Save the user data to localStorage
  localStorage.setItem("user", JSON.stringify(formData));
  
  alert("Sign up successfully!"); 
  router.push("/login");
};

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans">
      {/* Left Panel: Brand Color Theme */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-cyan-600 to-rose-500 relative items-center justify-center p-12 overflow-hidden">
        <div className="relative z-10 text-center w-full text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-2 rounded-full text-white mb-6 backdrop-blur-sm">
            <MapPin size={16} />
            <span className="text-sm font-semibold tracking-wider uppercase">Metro Mitra Operational Work</span>
          </div>

          <div className="w-32 h-32 mx-auto mb-6 relative bg-white/10 rounded-3xl p-4 backdrop-blur-md shadow-xl">
             <NextImage src="/assets/logo/Metro-Mitra.png" alt="Logo" fill className="object-contain p-2" />
          </div>
          
          <h1 className="text-5xl font-extrabold mb-3 tracking-tight">Join MetroMitra</h1>
          <p className="text-white/80 text-lg max-w-sm mx-auto">Your portal to streamlined city transit and intelligent infrastructure oversight.</p>
        </div>
        
        {/* Animated Accent Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-[500px] h-[500px] border border-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 4, delay: i * 1.3, ease: "linear" }}
                />
            ))}
        </div>
      </div>

      {/* Right Panel: Clean Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-20 bg-white shadow-2xl overflow-y-auto">
      {/* BACK TO HOME LINK */}
  <div className="absolute top-8 left-10">
    <a 
      href="/" 
      className="text-sm font-semibold  hover:text-rose-600 transition-colors flex items-center gap-2"
    >
      ← Back to Home
    </a>
  </div>
        <div className="mb-8 mt-10">
          <h2 className="text-4xl font-extrabold text-slate-950 tracking-tight">Create Account</h2>
          <p className="text-slate-500 mt-2">Enter your details to get started.</p>
        </div>

        {/* Attached handleSignup to onSubmit */}
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex gap-4">
            <div className="relative w-1/2">
              <User className="absolute left-4 top-4 text-slate-400" size={20} />
              <input required placeholder="First Name" onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full pl-12 bg-slate-50 p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 outline-none transition-all" />
            </div>
            <div className="relative w-1/2">
              <User className="absolute left-4 top-4 text-slate-400" size={20} />
              <input required placeholder="Last Name" onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full pl-12 bg-slate-50 p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 outline-none transition-all" />
            </div>
          </div>
          
          <div className="relative"><Mail className="absolute left-4 top-4 text-slate-400" size={20} /><input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 bg-slate-50 p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 outline-none transition-all" /></div>
          <div className="relative"><Phone className="absolute left-4 top-4 text-slate-400" size={20} /><input required type="tel" placeholder="Phone Number" onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-12 bg-slate-50 p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 outline-none transition-all" /></div>
          <div className="relative"><Lock className="absolute left-4 top-4 text-slate-400" size={20} /><input required type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} className="w-full pl-12 bg-slate-50 p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-rose-500/10 focus:border-rose-500 outline-none transition-all" /></div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-rose-500 py-4 rounded-2xl font-bold text-white text-lg mt-4 hover:opacity-90 transition-all shadow-lg shadow-rose-500/20">
            SIGN UP
          </button>
          
          <button type="button" className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5" />
            Continue with Google
          </button>
          
          <p className="text-center text-slate-600">Already have an account? <a href="/login" className="text-rose-500 font-bold hover:underline">Sign In</a></p>

          <div className="mt-12 pt-6 border-t border-stone-100 text-center space-y-4">
            <div className="flex justify-center gap-6 text-xs text-stone-400 font-semibold uppercase tracking-wider">
              <a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-600 transition-colors">Security Docs</a>
            </div>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest">
              &copy; 2026 MetroMitra Transit Systems — Algonauts Team
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}