import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutGrid, 
  UserCircle, 
  Settings, 
  Bell, 
  FileText, 
  Users,
  ChevronLeft,
  ChevronRight,
  Zap
} from 'lucide-react';

export function MainNav() {
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: <LayoutGrid />, label: 'Dashboard', path: '/' },
    { icon: <UserCircle />, label: 'My Profile', path: '/profile' },
    { icon: <Users />, label: 'Team', path: '/team' },
    { icon: <Bell />, label: 'Notifications', path: '/notifications' },
    { icon: <FileText />, label: 'Reports', path: '/reports' },
    { icon: <Settings />, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className={`bg-[#2A2A2D] h-screen flex flex-col transition-all ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      <div className="p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
          <Zap className="w-6 h-6 text-[#1C1C1E]" />
        </div>
        {!collapsed && <h1 className="font-bold text-white">Team Volty</h1>}
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-2 mx-4 hover:bg-[#1C1C1E] rounded-lg transition-colors text-gray-400 hover:text-white"
      >
        {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>

      <nav className="flex-1 px-4 py-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors mb-1 ${
              location.pathname === item.path
                ? 'bg-[#FFD700] text-[#1C1C1E]'
                : 'text-gray-400 hover:text-white hover:bg-[#1C1C1E]'
            }`}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
}