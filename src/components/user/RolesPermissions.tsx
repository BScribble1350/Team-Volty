import React from 'react';
import { Shield, Clock } from 'lucide-react';

interface RolesPermissionsProps {
  user: {
    role: string;
    department: string;
    manager: string;
    team: string;
    location: string;
    status: boolean;
    permissions: string[];
  };
  onUpdate: (field: string, value: any) => void;
}

export function RolesPermissions({ user, onUpdate }: RolesPermissionsProps) {
  const roles = ['Admin', 'Manager', 'Technician', 'Safety Officer'];
  const departments = ['Operations', 'Safety', 'Training', 'Maintenance'];
  const permissions = [
    'View Reports',
    'Edit Reports',
    'Approve Permits',
    'Create SOPs',
    'Modify Training',
    'Manage Users',
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold">Roles & Permissions</h3>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Role
          </label>
          <select
            value={user.role}
            onChange={(e) => onUpdate('role', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Department
          </label>
          <select
            value={user.department}
            onChange={(e) => onUpdate('department', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Reporting Manager
          </label>
          <input
            type="text"
            value={user.manager}
            onChange={(e) => onUpdate('manager', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Team
          </label>
          <input
            type="text"
            value={user.team}
            onChange={(e) => onUpdate('team', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Work Location
          </label>
          <input
            type="text"
            value={user.location}
            onChange={(e) => onUpdate('location', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          />
        </div>

        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={user.status}
              onChange={(e) => onUpdate('status', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#FFD700] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CD964]"></div>
            <span className="ms-3 text-sm font-medium text-gray-400">Active Status</span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Access Permissions
        </h4>
        <div className="grid grid-cols-2 gap-4">
          {permissions.map((permission) => (
            <label key={permission} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={user.permissions.includes(permission)}
                onChange={(e) => {
                  const newPermissions = e.target.checked
                    ? [...user.permissions, permission]
                    : user.permissions.filter((p) => p !== permission);
                  onUpdate('permissions', newPermissions);
                }}
                className="w-4 h-4 text-[#FFD700] bg-[#1C1C1E] border-gray-600 rounded focus:ring-[#FFD700] focus:ring-2"
              />
              <span className="text-sm text-gray-300">{permission}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Temporary Delegation
        </h4>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Start Date
            </label>
            <input
              type="date"
              className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              End Date
            </label>
            <input
              type="date"
              className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}