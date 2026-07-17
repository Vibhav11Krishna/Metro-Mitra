"use client";
import { 
  AlertTriangle, Zap, Activity, Train, Wrench, 
  Users, DollarSign, Cpu, BatteryCharging, TrendingUp, ChevronRight
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Reports", value: "23", icon: Activity, color: "text-blue-600" },
    { label: "Active Incidents", value: "12", icon: AlertTriangle, color: "text-rose-600" },
    { label: "Staff Online", value: "48", icon: Users, color: "text-indigo-600" },
    { label: "Revenue", value: "₹4.2L", icon: DollarSign, color: "text-emerald-600" },
  ];

  const liveTrains = [
    { id: "T-102", route: "Blue Line", nextStop: "Danapur", progress: "75%" },
    { id: "T-405", route: "Red Line", nextStop: "Patna Jn", progress: "30%" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. Global Alert Banner - NEW */}
      <div className="bg-rose-600 text-white p-4 rounded-2xl flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <AlertTriangle className="animate-pulse" />
          <p className="text-sm font-bold">System Alert: High congestion reported on Red Line. Maintenance team dispatched.</p>
        </div>
        <button className="text-[10px] font-black uppercase bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30">View Details</button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-950">Control Center</h1>
          <p className="text-slate-500 font-medium">Network oversight and real-time operations.</p>
        </div>
        <button className="flex items-center gap-2 bg-slate-950 text-white px-5 py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all">
          <Zap size={18} className="text-amber-400" /> Live Diagnostics
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-slate-50 ${stat.color}`}><stat.icon size={24} /></div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Live Train Tracking */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="font-black text-lg mb-6 flex items-center gap-2"><Train size={20} /> Live Metro Tracking</h2>
          <div className="space-y-4">
            {liveTrains.map((t, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-xl text-blue-600"><Train size={20}/></div>
                  <div>
                    <p className="font-bold text-sm">{t.id} - {t.route}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Next Stop: {t.nextStop}</p>
                  </div>
                </div>
                <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: t.progress }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure & Performance - NEW BOX */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <h2 className="font-black text-lg flex items-center gap-2"><Cpu size={20} /> Infrastructure</h2>
          <div className="bg-blue-600 p-6 rounded-2xl text-white">
            <p className="text-[10px] font-bold opacity-70 uppercase">Power Efficiency</p>
            <p className="text-3xl font-black mt-1">94.2%</p>
            <div className="flex items-center gap-1 mt-2 text-[10px] font-bold underline cursor-pointer">View Report <ChevronRight size={12}/></div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p className="text-[10px] font-bold text-slate-400">Monthly Growth</p>
            <p className="text-xl font-black text-emerald-600 flex items-center gap-2">
              <TrendingUp size={20} /> +12.5%
            </p>
          </div>
        </div>
      </div>

      {/* Incident Feed */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="font-black text-lg mb-6 flex items-center gap-2"><Wrench size={20} /> Recent Incidents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <p className="font-bold text-sm">Escalator Repair</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1">In Progress</p>
            </div>
            <button className="text-[10px] font-bold bg-blue-600 text-white px-4 py-2 rounded-xl">Details</button>
          </div>
          <div className="flex justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <p className="font-bold text-sm">Network Latency Spike</p>
              <p className="text-[10px] text-slate-500 font-bold mt-1">Monitoring</p>
            </div>
            <button className="text-[10px] font-bold bg-blue-600 text-white px-4 py-2 rounded-xl">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}