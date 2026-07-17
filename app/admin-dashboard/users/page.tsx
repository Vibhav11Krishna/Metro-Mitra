"use client";
import { useState } from "react";
import { MapPin, Phone, CheckCircle2, XCircle, Train, Ticket, Utensils, Droplets, UserCog, Settings, HardHat, Shield } from "lucide-react";

export default function StationRegistryPage() {
  const [selectedStation, setSelectedStation] = useState("Patna Junction (Metro)");

  const stations = [
    "Patna Junction (Metro)", "Patliputra Station (Metro)", "Saguna More (Metro)", 
    "RPS More (Metro)", "Danapur (Metro)", "Digha Bridge Halt (Metro)", 
    "Mithapur (Metro)", "Bailey Road (Metro)", "Kankarbagh (Metro)", "Patna University (Metro)"
  ];

  const getSeed = (str: string) => str.length;

  // Updated to generate 10 staff members
  const generateStaff = (station: string) => {
    const seed = getSeed(station);
    const roles = [
        { title: "Station Controller", icon: UserCog },
        { title: "Train Operator", icon: Train },
        { title: "Ticket Collector", icon: Ticket },
        { title: "Food Court Staff", icon: Utensils },
        { title: "Washroom Staff", icon: Droplets },
        { title: "Platform Guard", icon: Shield },
        { title: "Maintenance Engineer", icon: HardHat },
        { title: "Security Manager", icon: Settings }
    ];
    return Array.from({ length: 10 }, (_, i) => ({
      name: ["Arjun", "Vikram", "Neha", "Priya", "Rohan", "Suman", "Amit", "Kiran", "Vijay", "Anjali"][(i + seed) % 10] + " " + ["Sharma", "Verma", "Singh", "Kumar", "Devi"][(i + seed) % 5],
      roleData: roles[(i + seed) % roles.length],
      phone: `+91 98765${10000 + (i + seed) % 90000}`
    }));
  };

  // Updated to generate 10 public users
  const generatePublic = (station: string) => {
    const seed = getSeed(station);
    return Array.from({ length: 10 }, (_, i) => ({
      name: ["Rahul", "Sunita", "Deepak", "Megha", "Alok", "Shweta", "Manish", "Puja", "Gaurav", "Anita"][(i + seed) % 10],
      email: `user${(i + seed) * 7}@metro.in`,
      phone: `+91 98765${1000 + (i + seed) % 9000}`,
      location: ["Patna", "Danapur", "Bailey Road", "Kankarbagh"][(i + seed) % 4],
      status: (i + seed) % 4 === 0 ? "Inactive" : "Active"
    }));
  };

  const currentStaff = generateStaff(selectedStation);
  const currentPublic = generatePublic(selectedStation);

  return (
    <div className="p-8 space-y-12 bg-slate-50 min-h-screen animate-in fade-in duration-500">
        {/* ADDED HEADER SECTION */}
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-black text-slate-950">Metro Infrastructure Registry</h1>
        <p className="text-slate-500 mt-2 text-lg">Centralized oversight for station staff assignments and public commuter records.</p>
      </header>
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm w-fit">
        <MapPin className="text-blue-600" />
        <select 
          className="font-bold text-lg outline-none cursor-pointer bg-transparent"
          value={selectedStation}
          onChange={(e) => setSelectedStation(e.target.value)}
        >
          {stations.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <section>
        <h2 className="text-xl font-black mb-6 text-slate-800">Staff Registry (10)</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {currentStaff.map((s, i) => {
            const Icon = s.roleData.icon;
            return (
              <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 w-fit mb-3"><Icon size={18} /></div>
                <p className="font-bold text-sm text-slate-800 truncate">{s.name}</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-3">{s.roleData.title}</p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-600 bg-slate-50 px-2 py-1 rounded w-fit">
                  <Phone size={10} /> {s.phone}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-black mb-6 text-slate-800">Public Commuter Registry (10)</h2>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
              <tr>
                <th className="px-8 py-4">Name</th>
                <th className="px-8 py-4">Email</th>
                <th className="px-8 py-4">Phone</th>
                <th className="px-8 py-4">Location</th>
                <th className="px-8 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {currentPublic.map((u, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-8 py-4 font-bold text-sm text-slate-700">{u.name}</td>
                  <td className="px-8 py-4 text-sm text-slate-600">{u.email}</td>
                  <td className="px-8 py-4 text-sm text-slate-600">{u.phone}</td>
                  <td className="px-8 py-4 text-sm text-slate-600">{u.location}</td>
                  <td className="px-8 py-4">
                    {u.status === "Active" ? 
                      <span className="flex items-center gap-1 text-emerald-600 font-bold text-[10px] uppercase"><CheckCircle2 size={12}/> Active</span> : 
                      <span className="flex items-center gap-1 text-rose-500 font-bold text-[10px] uppercase"><XCircle size={12}/> Inactive</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}