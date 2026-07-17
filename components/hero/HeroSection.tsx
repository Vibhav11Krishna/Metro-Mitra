"use client";
import { motion } from "framer-motion";
import { MapPin, Train, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const stations = [
    { name: "Danapur Station", top: "10%", left: "10%", crowd: "Low (24%)", status: "text-emerald-600", bg: "bg-emerald-50/80 border-emerald-200" },
    { name: "Rajendra Nagar", top: "10%", left: "90%", crowd: "Heavy (88%)", status: "text-rose-600", bg: "bg-rose-50/80 border-rose-200" },
    { name: "Gandhi Maidan", top: "90%", left: "90%", crowd: "Mod (52%)", status: "text-amber-600", bg: "bg-amber-50/80 border-amber-200" },
    { name: "Patna Junction", top: "90%", left: "10%", crowd: "Heavy (98%)", status: "text-rose-600", bg: "bg-emerald-50/80 border-rose-200" },
  ];

  const roamingMetros = [
    { id: "EXP-104", passengers: "420/500", pathX: ["10%", "90%", "90%", "10%", "10%"], pathY: ["10%", "10%", "90%", "90%", "10%"], duration: 18, delay: 0 },
    { id: "EXP-209", passengers: "180/500", pathX: ["90%", "10%", "10%", "90%", "90%"], pathY: ["90%", "90%", "10%", "10%", "90%"], duration: 22, delay: 3 },
  ];

  return (
    <section className="relative h-screen w-full bg-slate-50 overflow-hidden flex flex-col items-center justify-center text-slate-900 select-none">
      
      {/* --- VIBRANT GRADIENT OVERLAYS --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-200/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-rose-200/20 rounded-full blur-[120px]" />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30">
        <rect x="10%" y="10%" width="80%" height="80%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="8 8" fill="none" />
      </svg>

      {stations.map((st, i) => (
        <div key={i} className="absolute z-10 hidden md:flex flex-col items-center pointer-events-none transform -translate-x-1/2 -translate-y-1/2" style={{ top: st.top, left: st.left }}>
          <div className="relative flex items-center justify-center mb-2">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-rose-400 opacity-40"></span>
            <div className="relative bg-rose-600 text-white p-2.5 rounded-full shadow-lg shadow-rose-500/20"><MapPin size={18} /></div>
          </div>
          <div className={`px-4 py-2 rounded-2xl border ${st.bg} backdrop-blur-md shadow-sm flex flex-col items-center text-center`}>
            <span className="text-xs font-black text-slate-900">{st.name}</span>
            <span className={`text-[10px] font-bold ${st.status} mt-0.5`}>Crowd: {st.crowd}</span>
          </div>
        </div>
      ))}

      {/* --- ROAMING METROS (Updated with Black & Blue Theme) --- */}
{roamingMetros.map((metro) => (
  <motion.div 
    key={metro.id} 
    animate={{ left: metro.pathX, top: metro.pathY }} 
    transition={{ repeat: Infinity, duration: metro.duration, delay: metro.delay, ease: "linear" }} 
    className="absolute z-15 hidden sm:flex items-center gap-3 bg-slate-950 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-cyan-900 pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
  >
    <div className="bg-cyan-950 p-1.5 rounded-lg text-cyan-400">
      <Train size={16} />
    </div>
    <div className="flex flex-col">
      <span className="text-[11px] font-bold tracking-wider leading-none text-white">{metro.id}</span>
      <span className="text-[9px] text-cyan-400 font-medium">{metro.passengers} aboard</span>
    </div>
  </motion.div>
))}

      <div className="relative z-20 text-center px-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-slate-100 text-cyan-800 text-[11px] font-bold mb-8 uppercase tracking-widest shadow-sm">
          <ShieldCheck size={14} className="text-cyan-600" /> MetroMitra Operational Framework
        </div>

        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-slate-950 mb-8">
          Metro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Mitra</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Intelligent autonomous transit oversight for modern cities. <br />
          Seamless connectivity powered by real-time predictive intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="/#features" className="w-full sm:w-auto">
  <button className="w-full bg-slate-950 text-white px-10 py-4 rounded-full font-bold hover:bg-cyan-700 transition-all shadow-xl hover:shadow-cyan-500/30">
    View Features
  </button>
</a>

{/* Link to intelligence page */}
<a href="/#stations" className="w-full sm:w-auto">
  <button className="w-full bg-white border border-slate-200 text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-slate-50 hover:border-cyan-200 transition-all">
    Station Intelligence
  </button>
</a>
        </div>
      </div>
    </section>
  );
}