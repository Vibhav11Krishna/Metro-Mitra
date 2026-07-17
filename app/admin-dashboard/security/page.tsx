"use client";
import { useState } from "react";
import { ShieldAlert, Video, Users, Search, AlertTriangle, ShieldCheck } from "lucide-react";

export default function SecurityPage() {
  const securityAlerts = [
    { id: "SEC-001", location: "Patna Junction", type: "Unauthorized Access", severity: "High", status: "Active" },
    { id: "SEC-002", location: "Danapur Station", type: "Camera Offline", severity: "Medium", status: "Investigating" },
    { id: "SEC-003", location: "Bailey Road", type: "Crowd Surge", severity: "Low", status: "Resolved" },
    { id: "SEC-004", location: "Kankarbagh", type: "Emergency Button Trigger", severity: "Critical", status: "Active" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black text-slate-950">Security Registry</h1>
        <p className="text-slate-500 mt-2">Real-time surveillance monitoring and incident response tracking.</p>
      </header>

      {/* Security Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="bg-rose-50 p-3 rounded-xl w-fit text-rose-600 mb-4"><ShieldAlert size={20}/></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Active Threats</p>
          <p className="text-2xl font-black">02</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="bg-blue-50 p-3 rounded-xl w-fit text-blue-600 mb-4"><Video size={20}/></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Cameras Online</p>
          <p className="text-2xl font-black">142 / 145</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="bg-emerald-50 p-3 rounded-xl w-fit text-emerald-600 mb-4"><ShieldCheck size={20}/></div>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Security Personnel</p>
          <p className="text-2xl font-black">24</p>
        </div>
      </section>

      {/* Incident Table */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-black">Recent Incidents</h2>
          <button className="bg-rose-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-rose-700">
            Emergency Dispatch
          </button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
            <tr>
              <th className="px-8 py-4">Incident ID</th>
              <th className="px-8 py-4">Location</th>
              <th className="px-8 py-4">Alert Type</th>
              <th className="px-8 py-4">Severity</th>
              <th className="px-8 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {securityAlerts.map((a, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-4 font-mono font-bold text-sm text-slate-600">{a.id}</td>
                <td className="px-8 py-4 font-bold text-sm text-slate-800">{a.location}</td>
                <td className="px-8 py-4 text-sm text-slate-600">{a.type}</td>
                <td className="px-8 py-4 text-sm font-bold text-rose-600">{a.severity}</td>
                <td className="px-8 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    a.status === "Active" ? "bg-rose-50 text-rose-700" : 
                    a.status === "Investigating" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"
                  }`}>
                    {a.status}
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