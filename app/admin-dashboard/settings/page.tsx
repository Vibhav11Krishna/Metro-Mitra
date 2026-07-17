"use client";
import { useState } from "react";
import { User, Bell, Shield, Palette, Globe, Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-black text-slate-950">System Settings</h1>
        <p className="text-slate-500 mt-2">Manage your admin profile, portal preferences, and security configurations.</p>
      </header>

      {/* Settings Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-blue-500" />
            <h2 className="text-lg font-black">Profile Information</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
              <input type="text" defaultValue="Pulkit Krishna" className="w-full mt-1 p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase">Role</label>
              <input type="text" disabled defaultValue="System Administrator" className="w-full mt-1 p-3 bg-slate-100 rounded-xl border border-slate-200 text-sm font-bold text-slate-500" />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-rose-500" />
            <h2 className="text-lg font-black">Security & Access</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Two-Factor Authentication</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Session Timeout (30m)</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-amber-500" />
            <h2 className="text-lg font-black">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Security Alerts</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Infrastructure Updates</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-purple-500" />
            <h2 className="text-lg font-black">Portal Appearance</h2>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 py-2 bg-slate-900 text-white rounded-xl font-bold text-xs">Dark Mode</button>
            <button className="flex-1 py-2 bg-slate-100 text-slate-600 rounded-xl font-bold text-xs">Light Mode</button>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors">
          <Save size={18} /> Save Changes
        </button>
      </div>
    </div>
  );
}