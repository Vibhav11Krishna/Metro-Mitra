"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { TrainFront, AlertTriangle, BarChart3, ShieldCheck, Search, Bot } from "lucide-react";

const features = [
  { icon: AlertTriangle, title: "Complaint Submission", desc: "Users submit metro-related issues through a simple form." },
  { icon: BarChart3, title: "AI Classification", desc: "AI detects issue type, station, and urgency automatically" },
  { icon: Bot, title: "Priority Scoring", desc: "Repeated and critical complaints are ranked first for action" },
  { 
    icon: TrainFront, 
    title: "Department Routing", 
    desc: "The complaint is sent to the correct officer or team..",
    action: "/stations" 
  },
  { icon: ShieldCheck, title: "Resolution Tracking", desc: "Citizens and admins can see current status and updates" },
  { icon: Search, title: "Governance Dashboard", desc: "Officers monitor trends, hotspots, and unresolved issues" }
];

export default function FeaturesSection() {
  const router = useRouter();

  // Explicitly typed animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const 
      } 
    }
  };

  return (
    <section id="features" className="py-24 px-8 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Background Animated Train */}
      <motion.div 
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-[10%] left-0 opacity-[0.04] pointer-events-none"
      >
        <TrainFront size={400} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-600 to-rose-500 rounded-full mb-6" />
        
        <h3 className="text-5xl font-extrabold mb-4 text-slate-950">
          Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Capabilities</span>
        </h3>
        
        <p className="text-slate-600 mb-16 text-lg max-w-2xl">
          Advanced AI-driven modules engineered to streamline transit oversight and enhance the commuter experience.
        </p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              onClick={() => f.action && router.push(f.action)}
              whileHover={{ y: -8 }}
              className={`p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-cyan-100/50 transition-all ${f.action ? "cursor-pointer group" : ""}`}
            >
              <div className="mb-6 inline-flex p-3 rounded-2xl bg-gradient-to-br from-cyan-50 to-rose-50 border border-slate-100 text-cyan-700">
                <f.icon className="w-8 h-8" />
              </div>
              
              <h4 className="text-xl font-bold mb-3 text-slate-950">{f.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{f.desc}</p>
              
              {f.action && (
                <span className="inline-flex items-center gap-2 text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500 uppercase tracking-widest group-hover:gap-3 transition-all">
                  Live Data →
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}