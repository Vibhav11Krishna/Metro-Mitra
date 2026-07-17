"use client";
import { useState } from "react";
import { Bell, CheckCircle2, AlertTriangle, Info, Clock, Trash2 } from "lucide-react";

// Define the shape of your notification object
interface Notification {
  id: number;
  type: "pnr" | "task" | "alert";
  title: string;
  msg: string;
  time: string;
  read: boolean;
}

export default function NotificationsPage() {
  // Explicitly type the useState
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, type: "pnr", title: "PNR Status Confirmed", msg: "Your ticket (123-456) is now confirmed.", time: "10 mins ago", read: false },
    { id: 2, type: "task", title: "Daily Audit Completed", msg: "Your transit audit for Jul 16 is synced.", time: "2 hours ago", read: true },
    { id: 3, type: "alert", title: "Train Delay Warning", msg: "Train 12345 is running 15 mins late.", time: "5 hours ago", read: true },
  ]);

  // Define the id type explicitly
  const deleteNotification = (id: number) => 
    setNotifications(notifications.filter(n => n.id !== id));

  // Define the type for the type parameter
  const getIcon = (type: string) => {
    if (type === "pnr") return <CheckCircle2 className="text-green-500" />;
    if (type === "task") return <Info className="text-cyan-500" />;
    return <AlertTriangle className="text-amber-500" />;
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          <Bell className="text-cyan-600" /> Notifications
        </h1>
        <span className="bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-xs font-bold">
          {notifications.filter(n => !n.read).length} New Alerts
        </span>
      </div>

      <div className="space-y-4">
        {notifications.map((n) => (
          <div key={n.id} className={`p-6 rounded-2xl border flex items-start gap-4 transition-all ${n.read ? 'bg-white border-slate-200' : 'bg-cyan-50/50 border-cyan-200 shadow-sm'}`}>
            <div className="mt-1">{getIcon(n.type)}</div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900">{n.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{n.msg}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                  <Clock size={10} /> {n.time}
                </span>
              </div>
            </div>
            <button onClick={() => deleteNotification(n.id)} className="text-slate-300 hover:text-red-500 transition-colors">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}