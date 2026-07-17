"use client";
import { useState } from "react";
import { Train, Zap, HardHat, Building, AlertCircle, CheckCircle2, Droplets, MapPin, Search } from "lucide-react";

export default function InfrastructureOverviewPage() {
  // Stats summary for the network
  const stats = [
    { label: "Total Assets", val: "128", icon: Building, color: "text-blue-500" },
    { label: "Operational", val: "115", icon: CheckCircle2, color: "text-emerald-500" },
    { label: "Needs Attention", val: "13", icon: AlertCircle, color: "text-rose-500" },
    { label: "Power Load", val: "4.2 MW", icon: Zap, color: "text-amber-500" }
  ];

  // List of critical infrastructure items
  const assets = [
    { name: "Patna Junction Turnstile", category: "Security", health: "98%", status: "Active" },
    { name: "Danapur Escalator 1", category: "Transport", health: "45%", status: "Maintenance" },
    { name: "Saguna More Kiosk", category: "Hardware", health: "88%", status: "Active" },
    { name: "Bailey Road Generator", category: "Power", health: "95%", status: "Active" },
    { name: "Kankarbagh Water System", category: "Utility", health: "92%", status: "Active" }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Page Header */}
      <header>
        <h1 className="text-4xl font-black text-slate-950">Infrastructure Registry</h1>
        <p className="text-slate-500 mt-2">Comprehensive health monitoring of all physical metro hardware and station facilities.</p>
      </header>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <stat.icon className={`${stat.color} mb-4`} size={24} />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900">{stat.val}</p>
          </div>
        ))}
      </section>

      {/* Asset Registry Table */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-black">Asset Registry</h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search assets..." className="pl-9 pr-4 py-2 bg-slate-50 rounded-xl text-xs border border-slate-200 outline-none w-48" />
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
            <tr>
              <th className="px-8 py-4">Asset Name</th>
              <th className="px-8 py-4">Category</th>
              <th className="px-8 py-4">Health Status</th>
              <th className="px-8 py-4">Operation Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {assets.map((a, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-4 font-bold text-sm text-slate-800">{a.name}</td>
                <td className="px-8 py-4 text-sm text-slate-500">{a.category}</td>
                <td className="px-8 py-4 text-sm font-mono font-bold text-blue-600">{a.health}</td>
                <td className="px-8 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    a.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
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