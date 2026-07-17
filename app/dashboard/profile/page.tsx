"use client";
import { useState, useEffect, useRef } from "react";
import { User, Save, Camera, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", address: "", profilePic: ""
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setFormData(JSON.parse(savedUser));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, profilePic: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Profile updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-20">
      {/* Decorative Header */}
      <div className="h-32 bg-gradient-to-r from-cyan-600 to-rose-500 rounded-3xl" />

      {/* Profile Card */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl -mt-16 mx-4">
        <div className="flex flex-col items-center -mt-20 mb-6">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-slate-100 overflow-hidden flex items-center justify-center">
              {formData.profilePic ? (
                <img src={formData.profilePic} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User size={64} className="text-slate-300" />
              )}
            </div>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-2 right-2 bg-slate-900 p-2 rounded-full text-white hover:bg-cyan-600 transition-all"
            >
              <Camera size={16} />
            </button>
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
          </div>
          <h2 className="text-2xl font-black mt-4">{formData.firstName} {formData.lastName}</h2>
          <div className="flex items-center gap-2 text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full text-xs font-bold mt-2">
            <ShieldCheck size={14} /> Verified Member
          </div>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <InputField label="First Name" name="firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          <InputField label="Email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <InputField label="Phone" name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
        </div>
        
        <InputField label="Address" name="address" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />

        <button onClick={handleSave} className="w-full bg-slate-900 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-600 transition-all mt-6">
          <Save size={18} /> Save Profile Changes
        </button>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
      <input 
        name={name} 
        // This ensures the input is always controlled (never undefined)
        value={value ?? ""} 
        onChange={onChange} 
        className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-100 outline-none focus:ring-2 ring-cyan-500" 
      />
    </div>
  );
}