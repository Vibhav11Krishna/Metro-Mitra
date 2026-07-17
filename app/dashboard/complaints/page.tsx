"use client";
import { useState, useEffect } from "react";
import { saveComplaint, getComplaints, updateComplaintStatus } from "@/lib/storage";
import { LayoutGrid, Bot, Activity, ShieldCheck, UserCog, ClipboardCheck, Eye, Loader2, Sparkles } from "lucide-react";

const PIPELINE_STEPS = [
  { name: "Intake", icon: <LayoutGrid size={16} /> },
  { name: "AI Parse", icon: <Bot size={16} /> },
  { name: "Pattern", icon: <Activity size={16} /> },
  { name: "Priority", icon: <ShieldCheck size={16} /> },
  { name: "Recommend", icon: <UserCog size={16} /> },
  { name: "Action", icon: <ClipboardCheck size={16} /> },
  { name: "Transparency", icon: <Eye size={16} /> },
];

export default function ComplaintsPage() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [complaints, setComplaints] = useState<any[]>([]);

  const syncData = () => setComplaints(getComplaints());

  useEffect(() => {
    syncData();
    window.addEventListener("storage", syncData);
    return () => window.removeEventListener("storage", syncData);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = new FormData(e.currentTarget).get("complaintText") as string;
    const newId = Date.now();
    const categories = ["Technical", "Billing", "Service", "Security", "Policy", "Sanitation" , "Infrastructure" , "Information-Board"];
    const predictedCategory = categories[Math.floor(Math.random() * categories.length)];
    
    setIsProcessing(true);
    setActiveStep(0);
    saveComplaint({ id: newId, user: "Pulkit Krishna", text, category: predictedCategory, status: "01 - Intake", date: new Date().toLocaleDateString() });
    syncData();

    const workflow = [
      { step: 1, status: "02 - AI Parse" }, { step: 2, status: "03 - Pattern" },
      { step: 3, status: "04 - Priority" }, { step: 4, status: "05 - Recommend" },
      { step: 5, status: "06 - Action: Admin Assigned" }, { step: 6, status: "07 - Transparency" }
    ];

    workflow.forEach((item, index) => {
      const delay = index === 5 ? 60000 : (index + 1) * 1200;
      setTimeout(() => {
        setActiveStep(item.step);
        updateComplaintStatus(newId, item.status);
        syncData();
        if (index === workflow.length - 1) { setIsProcessing(false); setTimeout(() => setActiveStep(-1), 2000); }
      }, delay);
    });
    e.currentTarget.reset();
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8 bg-slate-50/50 min-h-screen">
      <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
        {PIPELINE_STEPS.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className={`p-3 rounded-xl transition-all duration-500 ${i <= activeStep ? "bg-cyan-600 text-white shadow-lg" : "bg-slate-100 text-slate-400"}`}>
              {i === activeStep && isProcessing ? <Loader2 size={16} className="animate-spin" /> : s.icon}
            </div>
            <span className={`text-[10px] font-bold uppercase ${i <= activeStep ? "text-cyan-700" : "text-slate-400"}`}>{s.name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 h-fit lg:col-span-1">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2"><Sparkles size={18} className="text-amber-500" /> New Submission</h2>
          <textarea name="complaintText" className="w-full h-32 bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 outline-none" required />
          <button disabled={isProcessing} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold transition-all disabled:bg-slate-300">
            {isProcessing ? "Processing Analysis..." : "Submit Complaint"}
          </button>
        </form>
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 lg:col-span-2 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold">
              <tr><th className="px-8 py-4">Date</th><th className="px-8 py-4">Category</th><th className="px-8 py-4">Details</th><th className="px-8 py-4 text-right">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {complaints.slice().reverse().map((c) => (
                <tr key={c.id}>
                  <td className="px-8 py-5 text-xs text-slate-500">{c.date}</td>
                  <td className="px-8 py-5"><span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">{c.category}</span></td>
                  <td className="px-8 py-5 text-sm text-slate-700">{c.text}</td>
                  <td className="px-8 py-5 text-right"><span className={`px-3 py-1 text-[10px] font-bold rounded-full ${c.status.includes("Transparency") ? "bg-emerald-100 text-emerald-700" : "bg-cyan-50 text-cyan-700"}`}>{c.status.includes("Transparency") ? "Completed" : c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}