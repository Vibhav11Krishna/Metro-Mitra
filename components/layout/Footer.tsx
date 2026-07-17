import Image from "next/image";
import { Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-8 bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-6 gap-12">
        
        {/* Brand Section (Larger) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 p-4 rounded-2xl w-fit border border-white/10">
           <Image 
  src="/assets/logo/Metro-Mitra.png" 
  alt="MetroMitra Logo" 
  width={140} 
  height={50} 
  className="object-contain" 
/>
          </div>
          <a href="/" className="text-3xl font-extrabold tracking-tight text-white block">
            Metro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-rose-500">Mitra</span>
          </a>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            The future of urban transit. MetroMitra leverages advanced AI to provide real-time updates, predictive maintenance, and seamless passenger experiences across metro networks.
          </p>
          
          {/* Newsletter */}
          <div className="pt-2">
            <h4 className="text-white text-sm font-bold mb-3 flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-500" /> Subscribe to Updates</h4>
            <div className="flex bg-slate-900 p-2 rounded-xl border border-slate-800 max-w-xs">
              <input type="email" placeholder="email@domain.com" className="bg-transparent w-full px-2 text-sm outline-none text-white" />
              <button className="p-2 bg-cyan-600 rounded-lg text-white hover:bg-cyan-500"><Send className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About MetroMitra</a></li>
            <li><a href="#team" className="hover:text-cyan-400 transition-colors">Leadership Team</a></li>
            <li><a href="#careers" className="hover:text-cyan-400 transition-colors">Careers</a></li>
            <li><a href="#investors" className="hover:text-cyan-400 transition-colors">Investor Relations</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">AI Routing</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Passenger Analytics</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Safety Systems</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Station Management</a></li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h4 className="text-white font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-rose-400 transition-colors">Data Security</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-4 text-sm">
          <h4 className="text-white font-bold mb-6">Get in Touch</h4>
          <div className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
            <Mail className="w-4 h-4" />
            <span>support@metromitra.ai</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
            <Phone className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-start gap-3 text-slate-400">
            <MapPin className="w-4 h-4 mt-1" />
            <span>Patna, Bihar, India</span>
          </div>
          <div className="pt-4 flex items-center gap-2 text-rose-500 font-semibold text-xs">
            <ShieldCheck className="w-4 h-4" /> Verified AI Service
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-6">
        <p>© {new Date().getFullYear()} MetroMitra. All rights reserved.</p>
        
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Whatsaap</a>
        </div>

        <div className="text-right">
          <p>Built by ALG0NAUTS Team</p>
          
        </div>
      </div>
    </footer>
  );
}