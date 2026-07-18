"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use useRouter for Next.js navigation
import NextImage from "next/image";
import { Mail, Lock, MapPin } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Retrieve the user data saved during the Signup process
    const savedUser = localStorage.getItem("user");
    
    if (savedUser) {
      const user = JSON.parse(savedUser);
      
      // Validate credentials
      if (formData.email === user.email && formData.password === user.password) {
        alert("Login successful! Welcome to your Dashboard.");
        // Redirect to user dashboard
        router.push("/dashboard"); 
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("No account found. Please sign up first.");
      router.push("/signup");
    }
  };

  return (
    <div className="flex h-screen w-full bg-stone-50 overflow-hidden font-sans">
      {/* Left Panel: Branding */}
      <div className="hidden lg:flex w-1/2 bg-stone-900 relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10 text-center w-full text-stone-100">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full text-amber-200 mb-6">
            <MapPin size={16} />
            <span className="text-sm font-semibold tracking-wider uppercase">Managing city transit, one connection at a time</span>
          </div>

          <div className="w-32 h-32 mx-auto mb-6 relative bg-white/5 rounded-3xl p-4 backdrop-blur-sm">
             <NextImage src="/assets/logo/Metro-Mitra.png" alt="Logo" fill className="object-contain p-2" />
          </div>
          
          <h1 className="text-5xl font-extrabold mb-3 tracking-tight text-white">Welcome Back</h1>
          <p className="text-stone-400 text-lg max-w-sm mx-auto">Login to continue your transit management oversight.</p>
        </div>
      </div>
<div className="absolute top-8 left-10">
    <a 
      href="/" 
      className="text-sm font-semibold text-stone-500 hover:text-amber-600 transition-colors flex items-center gap-2"
    >
      ← Back to Home
    </a>
  </div>
      {/* Right Panel: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-20 bg-white shadow-2xl">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-stone-950 tracking-tight">Login</h2>
          <p className="text-stone-500 mt-2">Enter your credentials to access your portal.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-stone-400" size={20} />
            <input required type="email" placeholder="Email Address" className="w-full pl-12 bg-stone-50 p-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-stone-400" size={20} />
            <input required type="password" placeholder="Password" className="w-full pl-12 bg-stone-50 p-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all" onChange={(e) => setFormData({...formData, password: e.target.value})} />
          </div>
          
          <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-rose-500 py-4 rounded-2xl font-bold text-white text-lg mt-6 shadow-lg hover:opacity-90 transition-all">
            Login
          </button>
          
          <p className="text-center text-stone-600 mt-6">
            Don't have an account? <a href="/signup" className="text-rose-600 font-bold hover:underline">Sign Up</a>
          </p>

          <div className="mt-12 pt-6 border-t border-stone-100 text-center">
            <p className="text-xs text-stone-400 font-medium">&copy; 2026 All rights reserved by ALGONAUTS TEAM</p>
          </div>
        </form>
      </div>
    </div>
  );
}