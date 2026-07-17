"use client";
import { motion } from "framer-motion";
import { Shield, Bot, TrendingUp, Target, Eye, Gem } from "lucide-react";
import NextImage from "next/image"; // 


export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] -left-[5%] w-[30%] h-[30%] bg-cyan-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-rose-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Visual Side with Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
        >
       <NextImage 
  src="/assets/logo/Metro-Mitra.png" // Use this exact string path
  alt="Metro Infrastructure" 
  fill 
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
          
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          
          <div className="absolute bottom-8 left-8">
            <h3 className="text-2xl font-bold text-white">The Future of Transit</h3>
            <p className="text-cyan-300 font-bold uppercase tracking-widest text-sm">Powered by MetroMitra AI</p>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-cyan-700 font-bold tracking-widest uppercase mb-4 text-sm">About MetroMitra AI</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-slate-950">
              Bridging the Gap Between <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Commuters and Governance</span>
            </h3>
            <p className="text-lg text-slate-600 mt-6 leading-relaxed">
              MetroMitra AI is a comprehensive transit intelligence engine designed to eliminate commuter friction. 
              By merging real-time travel assistance with a high-priority complaint ranking system, 
              we ensure faster resolution for citizens and seamless operations for administration.
            </p>
          </div>

          {/* 3 Interactive Boxes */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Bot, title: "Travel Assistant", desc: "Your personal guide for PNR status, routes, and live train updates." },
              { icon: Shield, title: "Complaint Intelligence", desc: "AI ranks safety & service issues by urgency for immediate action." },
              { icon: TrendingUp, title: "Transparent Tracking", desc: "Follow your report from initial submission to final resolution." }
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10, borderColor: "#cbd5e1" }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm transition-all"
              >
                <div className="bg-cyan-50 p-3 rounded-lg text-cyan-600">
                  <box.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950">{box.title}</h4>
                  <p className="text-sm text-slate-500">{box.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

     {/* --- ADDED: Mission, Vision, and Values Section --- */}
      <div className="max-w-7xl mx-auto mt-20 pt-16 border-t border-slate-200/80 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Eye, title: "Our Vision", desc: "To build a transparent and intelligent metro governance system where every commuter issue is heard, tracked, and resolved efficiently" },
            { icon: Target, title: "Our Mission", desc: "To use AI and digital workflows to simplify complaint submission, prioritize urgent issues, and help metro authorities respond faster with accountability." },
            { icon: Gem, title: "Our Values", desc: "Citizen-first service, Enable authorities to respond faster and more effectively" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "#fb7185" }} // Pink on hover
              className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Blue/Pink Gradient Container */}
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-md">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-slate-950 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* --- END OF ADDED SECTION --- */}

    </section>
  );
}