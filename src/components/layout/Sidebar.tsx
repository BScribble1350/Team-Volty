import React from 'react';
import { UserCircle, Shield, Award, Brain, Settings, ChevronLeft, Zap } from 'lucide-react';
import { NavItem } from './NavItem';

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#2A2A2D] p-4 flex flex-col h-screen">
      <div className="flex items-center gap-2 mb-8">
        <button className="p-2 hover:bg-[#1C1C1E] rounded-lg transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="font-bold">User Management</h2>
      </div>
      
      <nav className="flex-1 space-y-1">
        <NavItem icon={<UserCircle />} text="Personal Details" active />
        <NavItem icon={<Shield />} text="Roles & Permissions" />
        <NavItem icon={<Award />} text="Certifications" />
        <NavItem icon={<Brain />} text="Skills & Expertise" />
        <NavItem icon={<Settings />} text="AI Preferences" />
        <NavItem icon={<Zap />} text="Energy Wheel" />
      </nav>
    </aside>
  );
}