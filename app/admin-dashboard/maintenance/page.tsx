"use client";
import { useState } from "react";
import { HardHat, Search, AlertCircle, CheckCircle2, Clock, Wrench } from "lucide-react";

export default function MaintenancePage() {
  const maintenanceTasks = [
    { id: "MT-001", asset: "Escalator 1 (Danapur)", urgency: "High", status: "In Progress", technician: "Vikram S.", eta: "2 hours" },
    { id: "MT-002", asset: "Turnstile A (Patna)", urgency: "Medium", status: "Pending", technician: "Unassigned", eta: "4 hours" },
    { id: "MT-003", asset: "Generator (Bailey Road)", urgency: "Low", status: "Completed", technician: "Anjali D.", eta: "Done" },
    { id: "MT-004", asset: "Ticket Kiosk (Saguna)", urgency: "Medium", status: "In Progress", technician: "Rohan K.", eta: "5 hours" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black text-slate-950">Maintenance Logs</h1>
        <p className="text-slate-500 mt-2">Track ongoing repairs, service status, and technician assignments.</p>
      </header>

      {/* Maintenance Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="bg-rose-50 p-3 rounded-xl w-fit text-rose-600 mb-4"><AlertCircle size={20}/></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Urgent Repairs</p>
          <p className="text-2xl font-black">04</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="bg-blue-50 p-3 rounded-xl w-fit text-blue-600 mb-4"><Wrench size={20}/></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase">In Progress</p>
          <p className="text-2xl font-black">12</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="bg-emerald-50 p-3 rounded-xl w-fit text-emerald-600 mb-4"><CheckCircle2 size={20}/></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Completed Today</p>
          <p className="text-2xl font-black">08</p>
        </div>
      </section>

      {/* Task Registry Table */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-black">Active Tasks</h2>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-800">
            + New Work Order
          </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
            <tr>
              <th className="px-8 py-4">Task ID</th>
              <th className="px-8 py-4">Asset</th>
              <th className="px-8 py-4">Technician</th>
              <th className="px-8 py-4">ETA</th>
              <th className="px-8 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {maintenanceTasks.map((t, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-4 font-mono font-bold text-sm text-slate-600">{t.id}</td>
                <td className="px-8 py-4 font-bold text-sm text-slate-800">{t.asset}</td>
                <td className="px-8 py-4 text-sm text-slate-500">{t.technician}</td>
                <td className="px-8 py-4 text-sm font-bold flex items-center gap-2"><Clock size={14} className="text-slate-400"/> {t.eta}</td>
                <td className="px-8 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    t.status === "Completed" ? "bg-emerald-50 text-emerald-700" : 
                    t.status === "In Progress" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}