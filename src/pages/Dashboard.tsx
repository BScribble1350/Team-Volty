import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, FileText, CheckSquare, Search, ClipboardCheck, FileSpreadsheet } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const tools = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Field Observations",
      description: "Record and track field safety observations",
      color: "bg-[#007AFF]",
      path: "field-observations"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Digital Permits",
      description: "Streamline permit workflows and approvals",
      color: "bg-[#4CD964]",
      path: "digital-permits"
    },
    {
      icon: <CheckSquare className="w-6 h-6" />,
      title: "Digital Inspections",
      description: "Conduct and manage safety inspections",
      color: "bg-[#FFD700]",
      path: "digital-inspections"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Investigations",
      description: "Document and analyze safety incidents",
      color: "bg-[#FF3B30]",
      path: "investigations"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Job Hazard Analysis",
      description: "Comprehensive task risk assessment",
      color: "bg-[#FF9500]",
      path: "jha"
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: "Daily Activity Reports",
      description: "Track and report daily work activities",
      color: "bg-[#5856D6]",
      path: "dar"
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Welcome back, {user?.firstName}!</h1>
        <p className="text-gray-400">Access your safety management tools below</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <button
            key={index}
            onClick={() => navigate(`/${tool.path}`)}
            className="bg-[#2A2A2D] rounded-lg p-6 hover:bg-[#343438] transition-colors text-left"
          >
            <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
              {tool.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{tool.title}</h3>
            <p className="text-gray-400">{tool.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}