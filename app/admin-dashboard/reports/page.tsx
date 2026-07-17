"use client";
import { useState } from "react";
import { FileText, Download, BarChart3, PieChart, Search, Calendar } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    { name: "Monthly Revenue Summary", date: "July 17, 2026", size: "2.4 MB", type: "PDF" },
    { name: "Station Infrastructure Health", date: "July 17, 2026", size: "1.1 MB", type: "PDF" },
    { name: "Staff Attendance Record", date: "July 16, 2026", size: "850 KB", type: "CSV" },
    { name: "Public Incident Log", date: "July 15, 2026", size: "420 KB", type: "CSV" },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Page Header */}
      <header>
        <h1 className="text-4xl font-black text-slate-950">Analytics & Reports</h1>
        <p className="text-slate-500 mt-2">Generate, view, and export performance metrics across the entire metro network.</p>
      </header>

      {/* Action Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-lg shadow-blue-200">
          <BarChart3 className="mb-4" size={32} />
          <h2 className="text-2xl font-black mb-2">Network Performance</h2>
          <p className="text-blue-100 mb-6">Generate visual analytics comparing station performance across all metrics.</p>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-xl font-bold text-sm">Generate Report</button>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <PieChart className="text-pink-500 mb-4" size={32} />
          <div>
            <h2 className="text-2xl font-black mb-2">Financial Breakdown</h2>
            <p className="text-slate-500 mb-6">Analyze revenue distribution and operational expenses per station.</p>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2 rounded-xl font-bold text-sm w-fit">View Analytics</button>
        </div>
      </section>

      {/* Saved Reports Table */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-black">Generated Reports</h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search reports..." className="pl-9 pr-4 py-2 bg-slate-50 rounded-xl text-xs border border-slate-200 outline-none w-48" />
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
            <tr>
              <th className="px-8 py-4">Report Name</th>
              <th className="px-8 py-4">Generated Date</th>
              <th className="px-8 py-4">Size</th>
              <th className="px-8 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {reports.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-4 font-bold text-sm text-slate-800 flex items-center gap-3">
                  <FileText size={16} className="text-blue-500" /> {r.name}
                </td>
                <td className="px-8 py-4 text-sm text-slate-500">{r.date}</td>
                <td className="px-8 py-4 text-sm font-mono">{r.size}</td>
                <td className="px-8 py-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 font-bold text-xs flex items-center gap-2 justify-end">
                    <Download size={14} /> Download {r.type}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}