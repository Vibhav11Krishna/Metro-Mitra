"use client";
import { motion, Variants } from "framer-motion";
import NextImage from "next/image";
import { Code2, Server, ShieldCheck, BrainCircuit } from "lucide-react";

const teamData = {
  leader: { 
    name: "Pulkit Krishna", 
    role: "Tech Lead", 
    bio: "Worked on Frontend , Backend , AI Model Implementation",
    img: "/assets/members/Pulkit.png"
  },
  members: [
    { name: "Shadique Rahman", role: "Project Coordination & Idea Finalization", bio: "Lead Project Directon , Coordinating Tasks", img: "/assets/members/shadiq.jpeg", icon: Code2 },
    { name: "Khushi Kumari", role: "Presentation & Visual Design Lead", bio: "Designed the Presentation Flow , Slide Content", img: "/assets/members/Khushi.jpeg", icon: Server },
    { name: "Alok Kumar", role: "Feature Ideation & Enhancement Support", bio: "Contributed Feature Idea & Ppt Content Suggestions", img: "/assets/members/Alok.jpeg", icon: ShieldCheck },
    { name: "Mohammad Nazish Alam", role: "Concept & Presentation Support", bio: "Supported Conceptual Ideas", img: "/assets/members/Nazis.jpeg", icon: BrainCircuit },
  ]
};

// Explicitly typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
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

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-8 bg-slate-50">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tighter mb-4 text-slate-950">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-rose-500">Architects</span>
          </h2>
          <p className="text-slate-600 text-lg">The minds driving the future of MetroMitra AI</p>
        </div>

        {/* Leader Card */}
        <motion.div variants={itemVariants} className="flex justify-center mb-24">
          <div className="flex flex-col md:flex-row items-center gap-10 p-12 bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50 w-full max-w-3xl">
            <div className="w-48 h-48 rounded-2xl bg-slate-100 relative overflow-hidden border-4 border-slate-50 shadow-inner shrink-0">
               <NextImage src={teamData.leader.img} alt={teamData.leader.name} fill className="object-cover" />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-block py-1.5 px-4 mb-3 rounded-full bg-cyan-50 text-[11px] font-bold uppercase tracking-widest text-cyan-700">
                {teamData.leader.role}
              </span>
              <h3 className="font-extrabold text-4xl text-slate-950 mb-3">{teamData.leader.name}</h3>
              <p className="text-slate-600 text-base leading-relaxed">{teamData.leader.bio}</p>
            </div>
          </div>
        </motion.div>

        {/* Members Grid */}
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {teamData.members.map((member, i) => {
            const Icon = member.icon;
            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="flex items-center gap-8 p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-2xl bg-slate-100 relative overflow-hidden shrink-0 border border-slate-200">
                  <NextImage src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-slate-100 rounded-xl"><Icon className="w-6 h-6 text-cyan-600" /></div>
                    <h4 className="font-bold text-2xl text-slate-950">{member.name}</h4>
                  </div>
                  <p className="text-[12px] font-bold uppercase tracking-wider text-rose-500 mb-2">{member.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">{member.bio}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}