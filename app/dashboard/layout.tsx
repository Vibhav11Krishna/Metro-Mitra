"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { 
  LayoutDashboard, MessageSquareWarning, Search, Train, Bell, 
  User, LogOut, Bot, X, Send, Loader2, Sparkles 
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I am MetroMitra AI. Ask me about the Red/Blue lines, technical specs, or how to report a defect." }
  ]);

  // Knowledge Base: Handles questions about Patna Metro & Project Info
  const getAiResponse = (query: string) => {
    const q = query.toLowerCase();
    const db: Record<string, string> = {
      "hello": "Hi there! Ready to explore Patna Metro with MetroMitra?",
      "who are you": "I am MetroMitra AI, an intelligent monitoring assistant built by Pulkit Krishna.",
      "red line": "The Red Line (Corridor 1) is an East-West route connecting Danapur Cantonment to Khemni Chak.",
      "blue line": "The Blue Line (Corridor 2) is a North-South route connecting Patna Junction to New ISBT.",
      "report": "Head to 'My Complaints', capture a photo of the issue, and select the specific metro corridor.",
      "u-net": "U-Net is our deep learning model used for semantic segmentation to identify structural hazards.",
      "developer": "Pulkit Krishna, a Full Stack Developer & Cybersecurity enthusiast, built this platform.",
      "safe": "Your reports are encrypted and routed directly to the authorized maintenance teams.",
      "help": "I can help with line information, reporting defects, or explaining how our AI works!",
      "logout": "Use the Logout button in the sidebar to securely end your session.",
      "default": "I'm not sure. Try asking about the 'Red Line', 'how to report a defect', or 'who built this'."
    };
    const key = Object.keys(db).find(k => q.includes(k));
    return db[key || "default"];
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    const userMsg = input;
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: "ai", text: getAiResponse(userMsg) }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      {/* Sidebar: Deep Dark Theme with increased spacing */}
<aside className="w-72 bg-slate-950 flex flex-col p-8 shadow-2xl">
  {/* Logo Block */}
  <div className="text-2xl font-black mb-12 flex items-center gap-3 text-white">
    <div className="bg-white p-2 rounded-xl">
      <Train size={22} className="text-rose-600" />
    </div>
    <span>Metro</span>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
      Mitra
    </span>
  </div>

  {/* User Profile Section - ADDED HERE */}
  <div className="mb-8 p-4 bg-slate-900 rounded-2xl flex items-center gap-4 border border-slate-800">
    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 font-bold">
      U
    </div>
    <div>
      <p className="text-white font-bold text-sm">User</p>
      <p className="text-slate-400 text-xs">Authorized Access</p>
    </div>
  </div>
        
       <nav className="flex-1 space-y-4">
  {[
    { name: "Home", href: "/dashboard", icon: LayoutDashboard },
    { name: "Search Metro", href: "/dashboard/search", icon: Search },
    { name: "Live Station", href: "/dashboard/live", icon: Train },
    { name: "My Complaints", href: "/dashboard/complaints", icon: MessageSquareWarning },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ].map((item) => {
    const isActive = pathname === item.href;
    return (
      <Link 
        key={item.name} 
        href={item.href} 
        className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all ${
          isActive 
            ? "bg-slate-900 text-white" 
            : "text-slate-400 hover:text-white"
        }`}
      >
        {/* Gradient Border Effect */}
        {isActive && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-pink-500 p-[2px] -z-10">
            <div className="h-full w-full bg-slate-950 rounded-[14px]"></div>
          </div>
        )}

        <item.icon 
          size={22} 
          className={isActive ? "text-pink-500" : "text-slate-500"} 
        />
        <span className={isActive ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 font-bold" : ""}>
          {item.name}
        </span>
      </Link>
    );
  })}
</nav>

        {/* Integrated AI Assistant Card */}
        <div className="mt-auto space-y-4">
          <button onClick={() => setIsChatOpen(true)} className="flex w-full items-center gap-4 p-4 bg-slate-800 text-white rounded-2xl hover:bg-rose-600 transition-all font-semibold">
            <Sparkles size={22} className="text-rose-400" /> AI Assistant
          </button>
          <button onClick={() => router.push("/login")} className="flex w-full items-center gap-4 p-4 text-slate-500 hover:text-rose-400 transition-all font-semibold">
            <LogOut size={22} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12">{children}</main>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm h-[550px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border-t-4 border-rose-600">
            <div className="p-6 bg-slate-950 text-white flex justify-between items-center">
              <span className="font-bold flex items-center gap-2"><Bot size={20} className="text-rose-500" /> MetroMitra AI</span>
              <button onClick={() => setIsChatOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={`text-sm p-4 rounded-2xl max-w-[90%] ${m.sender === "ai" ? "bg-white shadow-sm" : "bg-rose-600 text-white ml-auto"}`}>
                  {m.text}
                </div>
              ))}
              {isTyping && <div className="text-xs text-slate-400 flex items-center gap-2"><Loader2 className="animate-spin" size={14} /> Thinking...</div>}
            </div>
            <div className="p-4 border-t bg-white flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask me anything..." className="flex-1 bg-slate-100 p-4 rounded-xl text-sm outline-none" />
              <button onClick={handleSend} className="bg-rose-600 text-white p-4 rounded-xl hover:bg-slate-950"><Send size={18} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}