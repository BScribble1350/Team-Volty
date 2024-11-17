import React from 'react';

interface PersonalDetailsProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username: string;
  };
  onUpdate: (field: string, value: string) => void;
}

export function PersonalDetails({ user, onUpdate }: PersonalDetailsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Personal Details</h3>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            First Name
          </label>
          <input
            type="text"
            value={user.firstName}
            onChange={(e) => onUpdate('firstName', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={user.lastName}
            onChange={(e) => onUpdate('lastName', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => onUpdate('email', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={user.phone}
            onChange={(e) => onUpdate('phone', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Username
          </label>
          <input
            type="text"
            value={user.username}
            disabled
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-gray-400 cursor-not-allowed"
          />
        </div>
        
        <div className="flex items-end">
          <button className="bg-[#007AFF] text-white px-4 py-2 rounded-lg hover:bg-[#0056b3] transition-colors">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}