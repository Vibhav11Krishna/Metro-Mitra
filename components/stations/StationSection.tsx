"use client";
import { useState } from "react";
import { MapPin, TreeDeciduous, Zap, ShieldCheck, Activity, X, Utensils, Bath, Bus, Route, Clock, CreditCard, Layers3, Info } from "lucide-react";

const stations = [
  { id: "patna-junction", name: "Patna Junction", x: 50, y: 15, floors: 3, nextArrival: "2 mins", ticketFair: "₹20", route: "Line A ", nextStation: "Vikas Bhawan", crowdDensity: "High", foodCourt: "Available", washroom: "Available", transport: "Bus, Auto" },
  { id: "vikas-bhawan", name: "Vikas Bhawan", x: 25, y: 35, floors: 2, nextArrival: "5 mins", ticketFair: "₹15", route: "Line D ", nextStation: "Patna Zoo", crowdDensity: "Moderate", foodCourt: "Not Available", washroom: "Available", transport: "Auto" },
  { id: "gandhi-maidan", name: "Gandhi Maidan", x: 75, y: 35, floors: 4, nextArrival: "1 min", ticketFair: "₹25", route: "Line B ", nextStation: "Raja Bazar", crowdDensity: "Very High", foodCourt: "Available", washroom: "Available", transport: "Bus, Auto" },
  { id: "patna-zoo", name: "Patna Zoo", x: 25, y: 65, floors: 2, nextArrival: "8 mins", ticketFair: "₹15", route: "Line A ", nextStation: "Jagdeopath", crowdDensity: "Low", foodCourt: "Not Available", washroom: "Available", transport: "Auto" },
  { id: "raja-bazar", name: "Raja Bazar", x: 75, y: 65, floors: 3, nextArrival: "4 mins", ticketFair: "₹20", route: "Line C ", nextStation: "RPS More", crowdDensity: "Moderate", foodCourt: "Available", washroom: "Available", transport: "Bus, Taxi" },
  { id: "jagdeopath", name: "Jagdeopath", x: 35, y: 85, floors: 2, nextArrival: "10 mins", ticketFair: "₹10", route: "Line A ", nextStation: "End of Line", crowdDensity: "Low", foodCourt: "Not Available", washroom: "Not Available", transport: "Auto" },
  { id: "rps-more", name: "RPS More", x: 65, y: 85, floors: 2, nextArrival: "7 mins", ticketFair: "₹15", route: "Line B ", nextStation: "End of Line", crowdDensity: "Moderate", foodCourt: "Available", washroom: "Available", transport: "Bus, Auto" },
];

const trackPath = `M 50 15 L 25 35 M 50 15 L 75 35 M 25 35 L 25 65 M 75 35 L 75 65 M 25 65 L 35 85 M 75 65 L 65 85 M 25 35 L 15 45 M 75 35 L 85 45 M 25 65 L 15 55 M 75 65 L 85 55`;

const trees = [
  { x: 10, y: 25 }, { x: 90, y: 25 }, { x: 10, y: 75 }, { x: 90, y: 75 },
  { x: 50, y: 5 }, { x: 50, y: 50 }, { x: 35, y: 30 }, { x: 65, y: 30 },
  { x: 35, y: 70 }, { x: 65, y: 70 }
];

export default function StationSection() {
  const [hoveredStation, setHoveredStation] = useState<string | null>(null);
  const [activeStation, setActiveStation] = useState<typeof stations[0] | null>(null);

  return (
    <section id="stations" className="py-24 px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {activeStation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white p-8 rounded-3xl max-w-sm w-full relative shadow-2xl">
              <button onClick={() => setActiveStation(null)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"><X size={20} /></button>
              <h3 className="text-2xl font-bold text-slate-950 mb-6">{activeStation.name}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2"><div className="flex items-center gap-2 text-slate-500"><Route size={16} /><span className="text-sm">Route</span></div><span className="font-bold text-slate-900">{activeStation.route}</span></div>
                <div className="flex items-center justify-between border-b pb-2"><div className="flex items-center gap-2 text-slate-500"><MapPin size={16} /><span className="text-sm">Next Stop</span></div><span className="font-bold text-slate-900">{activeStation.nextStation}</span></div>
                <div className="flex items-center justify-between border-b pb-2"><div className="flex items-center gap-2 text-slate-500"><Activity size={16} /><span className="text-sm">Crowd Density</span></div><span className={`font-bold ${activeStation.crowdDensity === 'Very High' ? 'text-red-700' : activeStation.crowdDensity === 'High' ? 'text-red-500' : activeStation.crowdDensity === 'Moderate' ? 'text-amber-500' : 'text-emerald-600'}`}>{activeStation.crowdDensity}</span></div>
                <div className="flex items-center justify-between border-b pb-2"><div className="flex items-center gap-2 text-slate-500"><Layers3 size={16} /><span className="text-sm">Floors</span></div><span className="font-bold text-slate-900">{activeStation.floors}</span></div>
                <div className="flex items-center justify-between border-b pb-2"><div className="flex items-center gap-2 text-slate-500"><Clock size={16} /><span className="text-sm">Next Train</span></div><span className="font-bold text-cyan-600">{activeStation.nextArrival}</span></div>
                <div className="flex items-center justify-between border-b pb-2"><div className="flex items-center gap-2 text-slate-500"><CreditCard size={16} /><span className="text-sm">Ticket Fair</span></div><span className="font-bold text-emerald-600">{activeStation.ticketFair}</span></div>
                <div className="flex items-center justify-between border-b pb-2"><div className="flex items-center gap-2 text-slate-500"><Info size={16} /><span className="text-sm">System Status</span></div><span className="font-bold text-emerald-600">Operational</span></div>
                
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-slate-500"><Utensils size={16} /> <span className="text-sm">Food Court</span></div><span className={`font-bold ${activeStation.foodCourt === 'Available' ? 'text-emerald-600' : 'text-red-500'}`}>{activeStation.foodCourt}</span></div>
                  <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-slate-500"><Bath size={16} /> <span className="text-sm">Washroom</span></div><span className={`font-bold ${activeStation.washroom === 'Available' ? 'text-emerald-600' : 'text-red-500'}`}>{activeStation.washroom}</span></div>
                  <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-slate-500"><Bus size={16} /> <span className="text-sm">Transport</span></div><span className="font-bold text-slate-900 text-right">{activeStation.transport}</span></div>
                </div>
              </div>
              <button onClick={() => setActiveStation(null)} className="w-full mt-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">Close Details</button>
            </div>
          </div>
        )}

        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold"><Activity size={16} /> Live Network Topology</div>
          <h3 className="text-5xl font-extrabold tracking-tighter text-slate-950">Station <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500">Operational Intelligence</span></h3>
          <p className="text-lg text-slate-600 leading-relaxed">Station Operational Intelligence acts as the central nervous system of our transit network, bridging the gap between raw data streams and actionable commuter insights. </p>
          <p className="text-lg text-slate-600 leading-relaxed">By synthesizing real-time metrics—ranging from crowd density and platform availability to arrival sequences and safety protocols—it transforms complex backend analytics into a unified, transparent interface</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full"><Zap className="text-cyan-600 mb-3" /><h4 className="font-bold text-slate-950 mb-1">Train Arrival</h4><p className="text-sm text-slate-500 flex-grow">Real-time platform tracking, live delay status, and visual countdowns for approaching trains.</p></div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full"><ShieldCheck className="text-emerald-600 mb-3" /><h4 className="font-bold text-slate-950 mb-1">Ticket & Transit</h4><p className="text-sm text-slate-500 flex-grow">Live queue monitoring for counters and integrated digital payment/booking access.</p></div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full"><MapPin className="text-rose-500 mb-3" /><h4 className="font-bold text-slate-950 mb-1">Locality</h4><p className="text-sm text-slate-500 flex-grow">Last-mile transport options, nearest bus stop updates, and a "Safe Zone" indicator for commuters.</p></div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full"><Activity className="text-cyan-500 mb-3" /><h4 className="font-bold text-slate-950 mb-1">Wayfinding & Safety</h4><p className="text-sm text-slate-500 flex-grow">Interactive floor maps with dynamic paths to platforms, exits, and emergency protocols.</p></div>
          </div>
        </div>
        
        <div className="h-[600px] w-full bg-slate-950 rounded-3xl relative overflow-hidden shadow-2xl border border-slate-800">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><path d={trackPath} fill="transparent" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" /></svg>
          {trees.map((t, i) => (<TreeDeciduous key={i} className="absolute text-emerald-900" size={24} style={{ left: `${t.x}%`, top: `${t.y}%` }} />))}
          {stations.map((st) => (
            <div key={st.id} className="absolute z-30" style={{ left: `${st.x}%`, top: `${st.y}%` }}>
              <button onClick={() => setActiveStation(st)} onMouseEnter={() => setHoveredStation(st.name)} onMouseLeave={() => setHoveredStation(null)} className="p-3 bg-slate-900 rounded-full border-2 border-cyan-500 hover:bg-cyan-600 transition-all" style={{ transform: "translate(-50%, -50%)" }}><MapPin size={20} className="text-cyan-400" /></button>
              <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-40 text-center transition-opacity ${hoveredStation === st.name ? "opacity-100" : "opacity-0"}`}><span className="text-[10px] font-bold text-cyan-400 bg-slate-900 px-3 py-1 rounded-full shadow-lg uppercase whitespace-nowrap">{st.name}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}