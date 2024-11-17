import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ComingSoonPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export function ComingSoonPage({ title, description, icon, color }: ComingSoonPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white">
      <header className="bg-[#2A2A2D] px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-[#1C1C1E] rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12 flex flex-col items-center text-center">
        <div className={`w-24 h-24 ${color} rounded-lg flex items-center justify-center mb-8`}>
          {icon}
        </div>

        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 max-w-md mb-8">{description}</p>

        <div className="w-full max-w-md p-6 bg-[#2A2A2D] rounded-lg">
          <p className="text-sm text-gray-400">
            We're working hard to bring you this feature. Check back soon for updates!
          </p>
        </div>
      </main>
    </div>
  );
}