"use client";
import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Clock, Search, Filter, Loader2 } from "lucide-react";
import { getComplaints, updateComplaintStatus } from "@/lib/storage";

export default function AdminComplainsPage() {
  const [complains, setComplains] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = () => {
    setComplains(getComplaints());
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
    window.addEventListener("storage", loadData);
    return () => window.removeEventListener("storage", loadData);
  }, []);

  const assignToDept = (id: number) => {
    // Updating to match your workflow status
    updateComplaintStatus(id, "06 - Action: Admin Assigned");
    loadData();
    window.dispatchEvent(new Event("storage"));
  };

  const stats = {
    waiting: complains.filter(c => c.status?.includes("Intake")).length,
    assigned: complains.filter(c => c.status?.includes("Assigned")).length,
    completed: complains.filter(c => c.status?.includes("Transparency")).length,
  };

  if (isLoading) return <div className="flex h-64 items-center justify-center"><Loader2 className="animate-spin text-rose-600" size={32} /></div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Waiting", val: stats.waiting, color: "text-amber-500", icon: Clock },
          { label: "Assigned", val: stats.assigned, color: "text-blue-500", icon: AlertCircle },
          { label: "Completed", val: stats.completed, color: "text-emerald-500", icon: CheckCircle },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">{stat.label}</p>
              <p className={`text-3xl font-black mt-1 ${stat.color}`}>{stat.val}</p>
            </div>
            <stat.icon size={32} className={`${stat.color} opacity-20`} />
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
            <tr>
              <th className="px-8 py-4">Complaint</th>
              <th className="px-8 py-4">Category</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {complains.map((c: any) => (
              <tr key={c.id}>
                <td className="px-8 py-6 font-bold text-sm">{c.text}</td>
                <td className="px-8 py-6"><span className="bg-slate-100 px-3 py-1 rounded-lg text-xs font-bold">{c.category}</span></td>
                <td className="px-8 py-6 font-bold text-xs text-slate-600">{c.status}</td>
                <td className="px-8 py-6 text-right">
                  {c.status.includes("Intake") ? (
                    <button onClick={() => assignToDept(c.id)} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold">Assign Dept</button>
                  ) : (
                    <span className="text-xs text-emerald-600 font-bold">Processed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}