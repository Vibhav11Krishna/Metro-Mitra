"use client";
import { useState } from "react";
import { HelpCircle, BookOpen, MessageSquareText, FileQuestion, Search, ArrowRight } from "lucide-react";

export default function HelpCenterPage() {
  const faqs = [
    { q: "How do I manage infrastructure alerts?", a: "Navigate to Infrastructure > Asset Registry to view health statuses." },
    { q: "How to export financial reports?", a: "Visit the Financials section and click the export icon on the transactions table." },
    { q: "How to update station settings?", a: "Go to Settings > Infrastructure to modify station operational parameters." },
    { q: "Who to contact for technical support?", a: "Use the built-in AI Assistant or open a ticket via the Maintenance log." },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black text-slate-950">Help Center</h1>
        <p className="text-slate-500 mt-2">Find answers, browse documentation, and get support for your portal.</p>
      </header>

      {/* Search Bar */}
      <section className="bg-slate-900 p-12 rounded-3xl text-center shadow-2xl">
        <h2 className="text-2xl font-black text-white mb-6">How can we help you, Pulkit?</h2>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search documentation..." 
            className="w-full py-4 pl-12 pr-6 rounded-2xl bg-slate-800 text-white placeholder-slate-500 outline-none border border-slate-700" 
          />
        </div>
      </section>

      {/* Categories */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Documentation", desc: "Read technical guides", icon: BookOpen },
          { title: "AI Assistance", desc: "Chat with the AI", icon: MessageSquareText },
          { title: "System FAQ", desc: "Commonly asked questions", icon: FileQuestion }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
            <item.icon className="text-blue-500 mb-4" size={32} />
            <h3 className="font-black text-lg">{item.title}</h3>
            <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
            <button className="text-blue-600 font-bold text-xs flex items-center gap-1">Learn More <ArrowRight size={12}/></button>
          </div>
        ))}
      </section>

      {/* FAQ Table */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100">
          <h2 className="text-lg font-black flex items-center gap-2"><HelpCircle size={20}/> Frequently Asked Questions</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {faqs.map((f, i) => (
            <div key={i} className="p-8 hover:bg-slate-50">
              <h4 className="font-black text-slate-800 mb-2">{f.q}</h4>
              <p className="text-sm text-slate-500">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}