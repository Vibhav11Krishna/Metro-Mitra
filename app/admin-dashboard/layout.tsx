"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Users, MessageSquareWarning, Train, Settings, 
  LogOut, ShieldAlert, Sparkles , TrendingUp , HardHat , Activity , HelpCircle
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

 const adminNav = [
  { name: "Dashboard", href: "/admin-dashboard/", icon: LayoutDashboard },
  { name: "Complaints", href: "/admin-dashboard/complains", icon: MessageSquareWarning },
  { name: "Authorities", href: "/admin-dashboard/users", icon: Users },
  { name: "Infrastructure", href: "/admin-dashboard/infra", icon: Train },
  { name: "Financials", href: "/admin-dashboard/financials", icon: TrendingUp },
  { name: "Reports", href: "/admin-dashboard/reports", icon: Activity },
  { name: "Maintenance", href: "/admin-dashboard/maintenance", icon: HardHat }, // Added
  { name: "Security", href: "/admin-dashboard/security", icon: ShieldAlert },
  { name: "Settings", href: "/admin-dashboard/settings", icon: Settings },
  // Added
];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-950 flex flex-col p-6 shadow-2xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 px-2 mb-12">
          <div className="bg-white p-2 rounded-xl">
            <ShieldAlert size={22} className="text-rose-600" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">Admin</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500 font-black text-xl">
            Portal
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-3">
          {adminNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`relative flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                  isActive ? "bg-slate-900 text-white" : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-pink-500 p-[2px] -z-10">
                    <div className="h-full w-full bg-slate-950 rounded-[10px]"></div>
                  </div>
                )}
                <item.icon size={20} className={isActive ? "text-pink-500" : "text-slate-500"} />
                <span className={isActive ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500" : "font-medium"}>
                  {item.name}
                </span>
              </Link>
            );
          })}

          {/* AI Assistant Link */}
          <div className="pt-4 mt-4 border-t border-slate-800">
            <Link 
              href="/admin/ai-assistant" 
              className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-blue-400 hover:bg-blue-950/30 transition-all border border-blue-900/30 bg-blue-900/10"
            >
              <Sparkles size={20} className="text-blue-400" />
              <span className="font-bold">AI Assistant</span>
            </Link>
          </div>
        </nav>

        {/* Logout Section */}
        {/* Logout Section */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <Link 
            href="/admin-login" 
            className="flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-rose-400 transition-colors font-semibold"
          >
            <LogOut size={20} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-12 bg-slate-50">
        {children}
      </main>
    </div>
  );
}