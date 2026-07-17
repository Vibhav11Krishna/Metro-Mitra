"use client";
import { useState } from "react";
import { Search, MapPin, Clock, TrendingUp, DollarSign, Building, Utensils, Car, Droplets, X } from "lucide-react";

export default function LiveStationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStation, setSelectedStation] = useState<any>(null);

  const stationData = [
    { station: "Patna Junction (Metro)", floors: 3, crowdDensity: "High", ticketFair: "₹20", foodCourt: true, autoRickshaw: true, washrooms: true, metros: [
        { name: "Blue Line - M1", nextArrival: "02 mins", dest: "Patliputra Station", status: "On Time" },
        { name: "Blue Line - M2", nextArrival: "08 mins", dest: "Patna Junction", status: "Delayed" }
    ]},
    { station: "Patliputra Station (Metro)", floors: 2, crowdDensity: "Moderate", ticketFair: "₹15", foodCourt: false, autoRickshaw: true, washrooms: true, metros: [
        { name: "Blue Line - M1", nextArrival: "05 mins", dest: "Patna Junction", status: "On Time" }
    ]},
    { station: "Saguna More (Metro)", floors: 2, crowdDensity: "Low", ticketFair: "₹15", foodCourt: true, autoRickshaw: true, washrooms: false, metros: [
        { name: "Green Line - G1", nextArrival: "03 mins", dest: "Danapur", status: "On Time" }
    ]},
    { station: "RPS More (Metro)", floors: 3, crowdDensity: "Moderate", ticketFair: "₹20", foodCourt: false, autoRickshaw: false, washrooms: true, metros: [
        { name: "Green Line - G1", nextArrival: "06 mins", dest: "Patna Junction", status: "On Time" }
    ]},
    { station: "Danapur (Metro)", floors: 2, crowdDensity: "Low", ticketFair: "₹10", foodCourt: true, autoRickshaw: true, washrooms: true, metros: [
        { name: "Green Line - G1", nextArrival: "10 mins", dest: "Saguna More", status: "On Time" }
    ]},
    { station: "Digha Bridge Halt (Metro)", floors: 2, crowdDensity: "Low", ticketFair: "₹15", foodCourt: false, autoRickshaw: true, washrooms: false, metros: [
        { name: "Blue Line - M3", nextArrival: "04 mins", dest: "Patna Junction", status: "On Time" }
    ]},
    { station: "Mithapur (Metro)", floors: 3, crowdDensity: "Very High", ticketFair: "₹25", foodCourt: true, autoRickshaw: true, washrooms: true, metros: [
        { name: "Blue Line - M2", nextArrival: "01 min", dest: "Patna Junction", status: "On Time" },
        { name: "Purple Line - P1", nextArrival: "12 mins", dest: "Patna University", status: "On Time" }
    ]},
    { station: "Bailey Road (Metro)", floors: 2, crowdDensity: "Moderate", ticketFair: "₹15", foodCourt: false, autoRickshaw: false, washrooms: true, metros: [
        { name: "Green Line - G2", nextArrival: "07 mins", dest: "Danapur", status: "On Time" }
    ]},
    { station: "Kankarbagh (Metro)", floors: 2, crowdDensity: "High", ticketFair: "₹15", foodCourt: true, autoRickshaw: true, washrooms: true, metros: [
        { name: "Purple Line - P1", nextArrival: "05 mins", dest: "Patna University", status: "On Time" }
    ]},
    { station: "Patna University (Metro)", floors: 3, crowdDensity: "High", ticketFair: "₹20", foodCourt: true, autoRickshaw: true, washrooms: true, metros: [
        { name: "Purple Line - P1", nextArrival: "09 mins", dest: "Mithapur", status: "On Time" }
    ]}
  ];

  const filteredStations = stationData.filter(s => 
    s.station.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 max-w-6xl mx-auto bg-slate-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Metro Live Status</h1>
        <p className="text-slate-500">Comprehensive view of all {stationData.length} active network stations.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-slate-400" size={20} />
            <input 
              placeholder="Search station..." 
              className="w-full pl-12 p-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 ring-cyan-500/10"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="h-[60vh] overflow-y-auto space-y-2 pr-2">
            {filteredStations.map((s) => (
              <div key={s.station} onClick={() => setSelectedStation(s)} 
                   className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedStation?.station === s.station ? "bg-cyan-600 text-white shadow-lg" : "bg-white hover:bg-slate-50 border-slate-200"}`}>
                <span className="font-bold text-sm">{s.station}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedStation ? (
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
              <h2 className="text-3xl font-black mb-8">{selectedStation.station}</h2>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <StatCard label="Floors" val={selectedStation.floors} icon={Building} />
                <StatCard label="Crowd" val={selectedStation.crowdDensity} icon={TrendingUp} />
                <StatCard label="Fare" val={selectedStation.ticketFair} icon={DollarSign} />
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <StatusBadge label="Food Court" available={selectedStation.foodCourt} icon={Utensils} />
                <StatusBadge label="Auto" available={selectedStation.autoRickshaw} icon={Car} />
                <StatusBadge label="Washroom" available={selectedStation.washrooms} icon={Droplets} />
              </div>

              <h3 className="font-bold mb-4 flex items-center gap-2"><Clock size={18}/> Live Arrivals</h3>
              <div className="space-y-3">
                {selectedStation.metros.map((m: any, i: number) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div><p className="font-bold text-slate-900">{m.name}</p><p className="text-xs text-slate-500">To: {m.dest}</p></div>
                    <div className="text-right"><p className="font-black text-cyan-600">{m.nextArrival}</p><p className={`text-[10px] font-bold ${m.status === 'On Time' ? 'text-green-600' : 'text-amber-600'}`}>{m.status}</p></div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl text-slate-400">
              Select a station from the list to view live details and facility status.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, val, icon: Icon }: any) {
  return (
    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
      <Icon className="text-cyan-600 mb-2" size={20} />
      <p className="text-[10px] uppercase font-black text-slate-400">{label}</p>
      <p className="font-bold text-slate-900">{val}</p>
    </div>
  );
}

function StatusBadge({ label, available, icon: Icon }: any) {
  return (
    <div className={`p-4 rounded-2xl border ${available ? "bg-emerald-50 border-emerald-100" : "bg-rose-50 border-rose-100"}`}>
      <Icon className={available ? "text-emerald-600" : "text-rose-600"} size={20} />
      <p className="text-[10px] uppercase font-black text-slate-400 mt-2">{label}</p>
      <p className={`font-bold ${available ? "text-emerald-900" : "text-rose-900"}`}>{available ? "Available" : "Closed"}</p>
    </div>
  );
}