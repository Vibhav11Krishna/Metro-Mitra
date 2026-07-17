"use client";
import { useState } from "react";
import { TrendingUp, DollarSign, CreditCard, Wallet, Search } from "lucide-react";

export default function FinancialsPage() {
  const financialStats = [
    { label: "Total Revenue", val: "₹4,28,900", icon: Wallet, color: "text-emerald-600", trend: "+12.5%" },
    { label: "Operational Costs", val: "₹1,15,400", icon: TrendingUp, color: "text-rose-600", trend: "+2.1%" },
    { label: "Ticketing Income", val: "₹3,42,000", icon: CreditCard, color: "text-blue-600", trend: "+8.4%" },
    { label: "Net Profit", val: "₹3,13,500", icon: DollarSign, color: "text-purple-600", trend: "+15.2%" }
  ];

  const transactions = [
    { id: "TXN-7782", station: "Patna Junction", amount: "₹45,200", status: "Completed", date: "July 17, 2026" },
    { id: "TXN-7783", station: "Danapur", amount: "₹12,800", status: "Pending", date: "July 17, 2026" },
    { id: "TXN-7784", station: "Saguna More", amount: "₹28,500", status: "Completed", date: "July 16, 2026" },
    { id: "TXN-7785", station: "Bailey Road", amount: "₹31,200", status: "Completed", date: "July 16, 2026" }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black text-slate-950">Financials Registry</h1>
        <p className="text-slate-500 mt-2">Track network-wide revenue, operational costs, and station-based transactions.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {financialStats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <stat.icon className={`${stat.color} bg-slate-50 p-2 rounded-lg`} size={36} />
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.trend}</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-black text-slate-900">{stat.val}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-lg font-black">Recent Transactions</h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search TXN..." className="pl-9 pr-4 py-2 bg-slate-50 rounded-xl text-xs border border-slate-200 outline-none w-48" />
          </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
            <tr>
              <th className="px-8 py-4">Transaction ID</th>
              <th className="px-8 py-4">Station</th>
              <th className="px-8 py-4">Amount</th>
              <th className="px-8 py-4">Date</th>
              <th className="px-8 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {transactions.map((t, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-4 font-mono font-bold text-sm text-slate-600">{t.id}</td>
                <td className="px-8 py-4 font-bold text-sm text-slate-800">{t.station}</td>
                <td className="px-8 py-4 text-sm font-bold">{t.amount}</td>
                <td className="px-8 py-4 text-sm text-slate-500">{t.date}</td>
                <td className="px-8 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    t.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
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