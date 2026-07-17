"use client";
import { useState, useEffect } from "react";
import { Train, AlertCircle, CheckCircle2, Search, MapPin, Clock, ShieldCheck, DollarSign, Bell, Calendar, X } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState({ firstName: "Pulkit", lastName: "Krishna" });
  const [dateTime, setDateTime] = useState({ day: "", time: "" });
  const [selectedTrain, setSelectedTrain] = useState<any>(null);
  const [selectedNotif, setSelectedNotif] = useState<any>(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try { setUser(JSON.parse(savedUser)); } catch (e) { console.error(e); }
    }
  }, []);

  // Update time display
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDateTime({
        day: now.toLocaleDateString("en-IN", { weekday: "long" }),
        time: now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [dashboardData] = useState({
    complaintMetrics: [
      { label: "Pending", count: 4, icon: AlertCircle, color: "text-amber-500" },
      { label: "Resolved", count: 12, icon: CheckCircle2, color: "text-green-500" },
    ],
    liveTrains: [
      { train: "Patna Station", route: "To: Danapur", status: "On Time", platform: "Blue-Line 1", speed: "110 km/h", nextStop: "Prayagraj" },
      { train: "Rajendra Nagar", route: "To: Kankarbagh", status: "Delayed", platform: "Red-Line 3", speed: "85 km/h", nextStop: "Kanpur" },
      { train: "Patna University Station", route: "To: Gaay Ghat", status: "On Time", platform: "Blue-Line 3", speed: "95 km/h", nextStop: "Bhubaneswar" },
      { train: "Gandhi Maidan", route: "To: Raja Bazar", status: "Incoming", platform: "Green-Line 1", speed: "40 km/h", nextStop: "Asansol" },
    ],
    notifications: [
      { title: "Service Update", detail: "Scheduled maintenance on Platform 4 tonight.", time: "10m ago" }
    ]
  });

  return (
    <div className="p-8 bg-slate-50 min-h-screen max-w-7xl mx-auto">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, {user.firstName}! 👋</h1>
          <p className="text-slate-500 flex items-center gap-2 mt-1"><Calendar size={16} /> {dateTime.day} • {dateTime.time}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-72"><Search className="absolute left-3 top-3 text-slate-400" size={18} /><input className="w-full pl-10 p-3 rounded-xl border border-slate-200 shadow-sm outline-none focus:ring-2 ring-cyan-500" placeholder="Search trains..." /></div>
          <button onClick={() => setSelectedNotif(dashboardData.notifications[0])} className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm relative">
            <Bell size={20} className="text-slate-600" /><span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          {dashboardData.complaintMetrics.map((m, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div><p className="text-slate-400 text-xs font-bold uppercase">{m.label}</p><p className="text-3xl font-bold">{m.count}</p></div>
              <m.icon className={`w-8 h-8 ${m.color}`} />
            </div>
          ))}
          <div className="bg-cyan-900 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="font-bold mb-2">System Status</h3>
            <p className="text-xs text-cyan-200 mb-4">All network lines are operating normally.</p>
            <div className="flex items-center gap-2 text-sm font-bold"><div className="w-2 h-2 rounded-full bg-green-400"></div> Online</div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[ {name: "PNR Status", icon: ShieldCheck}, {name: "Live Station", icon: MapPin}, {name: "Fare Inquiry", icon: DollarSign}, {name: "Arrivals", icon: Clock} ].map((action, i) => (
              <button key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 hover:border-cyan-400 transition-all"><action.icon className="text-cyan-600" /> <span className="font-bold text-slate-700">{action.name}</span></button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Train /> Live Metro Status</h2>
            <div className="space-y-3">
              {dashboardData.liveTrains.map((t, i) => (
                <div key={i} onClick={() => setSelectedTrain(t)} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center cursor-pointer hover:border-cyan-400 transition-all">
                  <div><p className="font-bold text-slate-900">{t.train}</p><p className="text-xs text-slate-400">{t.route} • {t.platform}</p></div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${t.status === 'On Time' ? 'bg-cyan-100 text-cyan-700' : 'bg-amber-100 text-amber-700'}`}>{t.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals for Notifications and Train Details */}
      {(selectedTrain || selectedNotif) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm relative shadow-2xl">
            <button onClick={() => { setSelectedTrain(null); setSelectedNotif(null); }} className="absolute top-4 right-4"><X size={20} /></button>
            <h3 className="text-xl font-bold mb-4">{selectedTrain ? selectedTrain.train : selectedNotif.title}</h3>
            <div className="space-y-2 text-slate-600">
              {selectedTrain ? (
                <><p><strong>Status:</strong> {selectedTrain.status}</p><p><strong>Speed:</strong> {selectedTrain.speed}</p><p><strong>Next Stop:</strong> {selectedTrain.nextStop}</p></>
              ) : <p>{selectedNotif.detail}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}