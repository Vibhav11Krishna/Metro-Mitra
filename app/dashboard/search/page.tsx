"use client";

import { useState } from "react";
import { Search, Train, Wallet, Users, AlertCircle, ArrowRight } from "lucide-react";

export default function SearchTrainsPage() {
  const [showResults, setShowResults] = useState(false);
  const [fromStation, setFromStation] = useState("Patna Junction");
  const [toStation, setToStation] = useState("Danapur");
  const [walletBalance] = useState(450);

  const stations = [
    "Patna Junction", "Patliputra Station", "Saguna More", "RPS More", "Danapur", 
    "Digha Bridge Halt", "Mithapur", "Bailey Road", "Kumharar", "Patna University", "Kankarbagh"
  ];

  const getRoutes = () => {
    const lines = ["Blue Line", "Green Line", "Red Line", "Express", "Rapid", "Shuttle"];
    return lines.map((line, i) => ({
      id: line,
      departure: `${8 + i}:00 AM`,
      arrival: `${8 + i + (i % 2) + 1}:15 AM`,
      price: 20 + (i * 7),
      type: i >= 3 ? "Express Transit" : "Standard Local"
    }));
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto bg-slate-50 min-h-screen">
      {/* Header Stats */}
      <header className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
          <h1 className="text-2xl font-bold">Patna Metro</h1>
          <p className="text-sm text-slate-500">Live Urban Transit System</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div><p className="text-xs text-slate-400 font-bold uppercase">Wallet</p><p className="font-bold text-xl">₹{walletBalance}</p></div>
          <Wallet className="text-cyan-600" />
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div><p className="text-xs text-slate-400 font-bold uppercase">Active Users</p><p className="font-bold text-xl">12,402</p></div>
          <Users className="text-amber-500" />
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">From</label>
            <select value={fromStation} onChange={(e) => setFromStation(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200">
              {stations.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">To</label>
            <select value={toStation} onChange={(e) => setToStation(e.target.value)} className="w-full p-3 rounded-xl border border-slate-200">
              {stations.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <button onClick={() => setShowResults(true)} className="bg-slate-900 text-white p-3 rounded-xl font-bold hover:bg-cyan-600">Find Routes</button>
        </div>
      </div>

      {showResults && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          {/* Route Header */}
          <div className="p-6 bg-slate-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-4 text-lg font-bold">
              {fromStation} <ArrowRight className="text-rose-500" /> {toStation}
            </div>
            <div className="text-xs text-slate-400 font-medium">Available Routes</div>
          </div>

          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="p-6">Metro Service</th>
                <th className="p-6">Travel Time</th>
                <th className="p-6">Fare</th>
                <th className="p-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {getRoutes().map((r) => (
                <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-6">
                    <div className="font-bold text-slate-900">{r.id}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">{r.type}</div>
                  </td>
                  <td className="p-6 font-medium text-slate-600">
                    {r.departure} → {r.arrival}
                  </td>
                  <td className="p-6 font-bold text-emerald-600">₹{r.price}</td>
                  <td className="p-6 text-right">
                    <button className="bg-slate-900 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-rose-600">Book</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}