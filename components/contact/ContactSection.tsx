"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3 block">Let's Build Something</span>
          <h2 className="text-6xl font-extrabold tracking-tighter text-slate-950 mb-6">
            Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Us</span>
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Drop us a message, and let's get the conversation started.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-950 text-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Reach Out</h3>
              <div className="space-y-8">
                {[ 
                  { icon: Mail, label: "Email", val: "support@metromitra.ai" },
                  { icon: Phone, label: "Call", val: "+91 98765 43210" },
                  { icon: MapPin, label: "Visit", val: "Patna, Bihar, India" } 
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-cyan-600 transition-colors">
                      <item.icon className="w-6 h-6 text-cyan-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">{item.label}</p>
                      <p className="font-medium text-lg">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side (8 cols) */}
          <form className="lg:col-span-8 bg-white p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-950 ml-1">Full Name</label>
                <input type="text" placeholder="Place your Name" className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-cyan-100 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-950 ml-1">Email Address</label>
                <input type="email" placeholder="place your email" className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-cyan-100 outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-950 ml-1">Your Message</label>
              <textarea placeholder="Tell us about your project..." rows={5} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-cyan-100 outline-none transition-all" />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-5 bg-gradient-to-r from-cyan-600 to-rose-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
            >
              Send Message <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}