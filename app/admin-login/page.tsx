"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { Lock, Mail, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleAdminLogin = (e: React.FormEvent) => {
  e.preventDefault();

  // Define admin credentials
  const ADMIN_EMAIL = "admin@metromitra.com";
  const ADMIN_PASS = "admin123";

  // Validate credentials
  if (formData.email === ADMIN_EMAIL && formData.password === ADMIN_PASS) {
    alert("Admin access granted.");
    
    // Redirect to the path that matches your folder structure: app/admin-dashboard
   router.push("/admin-dashboard");
  } else {
    alert("Unauthorized: Invalid admin credentials.");
  }
};

  return (
    <div className="flex h-screen w-full bg-stone-50 overflow-hidden font-sans">
      {/* Left Panel: Branding */}
      <div className="hidden lg:flex w-1/2 bg-stone-900 relative items-center justify-center p-12">
        <div className="relative z-10 text-center text-white">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-3xl flex items-center justify-center backdrop-blur-sm">
             <ShieldCheck size={48} className="text-cyan-400" />
          </div>
          <h1 className="text-5xl font-extrabold mb-3">Admin Portal</h1>
          <p className="text-stone-400 text-lg max-w-sm mx-auto">
            Secure administrative oversight for the <strong>MetroMitra</strong> transit network.
          </p>
        </div>
      </div>
<div className="absolute top-8 left-10">
    <a 
      href="/" 
      className="text-sm font-semibold text-stone-500 hover:text-cyan-600 transition-colors flex items-center gap-2"
    >
      ← Back to Home
    </a>
  </div>
      {/* Right Panel: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-20 bg-white shadow-2xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 relative">
                <NextImage src="/assets/logo/Metro-Mitra.png" alt="MetroMitra" fill className="object-contain" />
             </div>
             <h1 className="text-2xl font-extrabold text-stone-950">Metro<span className="text-rose-500">Mitra</span></h1>
          </div>
          <h2 className="text-3xl font-extrabold text-stone-950">Administrator Login</h2>
          <p className="text-stone-500 mt-2">Restricted access for authorized MetroMitra system administrators only.</p>
        </div>

        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-stone-400" size={20} />
            <input 
              required 
              type="email" 
              placeholder="Admin Email" 
              className="w-full pl-12 bg-stone-50 p-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 outline-none transition-all" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-stone-400" size={20} />
            <input 
              required 
              type="password" 
              placeholder="Password" 
              className="w-full pl-12 bg-stone-50 p-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 outline-none transition-all" 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-rose-500 py-4 rounded-2xl font-bold text-white text-lg mt-6 shadow-lg hover:opacity-90 transition-all">
            LOGIN AS ADMIN
          </button>

          {/* Footer remains unchanged */}
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