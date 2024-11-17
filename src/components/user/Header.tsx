import React from 'react';
import { Save, X } from 'lucide-react';

interface HeaderProps {
  user: {
    firstName: string;
    lastName: string;
  };
  onSave: () => void;
  onCancel: () => void;
}

export function Header({ user, onSave, onCancel }: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-[#2A2A2D] px-8 py-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1C1C1E] text-xl font-bold">
          {user.firstName[0]}
        </div>
        <div>
          <h1 className="text-xl font-bold">{user.firstName} {user.lastName}</h1>
          <p className="text-gray-400">User Profile</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={onCancel}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#1C1C1E] transition-colors"
        >
          <X className="w-5 h-5" />
          <span>Cancel</span>
        </button>
        
        <button
          onClick={onSave}
          className="flex items-center gap-2 px-4 py-2 bg-[#FFD700] text-[#1C1C1E] rounded-lg hover:bg-[#E6C200] transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>
      </div>
    </header>
  );
}