import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

export function NavItem({ icon, text, active = false }: NavItemProps) {
  return (
    <button
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
        active
          ? 'bg-[#FFD700] text-[#1C1C1E]'
          : 'text-gray-400 hover:text-white hover:bg-[#1C1C1E]'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}