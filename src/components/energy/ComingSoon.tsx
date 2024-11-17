import React from 'react';
import { Zap, Bot, Volume2 } from 'lucide-react';

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#1C1C1E] flex flex-col items-center justify-center p-8 text-center">
      <div className="relative mb-8">
        <div className="w-24 h-24 bg-[#2A2A2D] rounded-full flex items-center justify-center">
          <Zap className="w-12 h-12 text-[#FFD700]" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#007AFF] rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Team Volty Energy Wheel
      </h1>

      <div className="flex items-center gap-2 mb-8">
        <Volume2 className="w-5 h-5 text-[#FFD700]" />
        <p className="text-gray-400">Voice-Assisted Safety Analysis</p>
      </div>

      <p className="max-w-md text-gray-400 mb-8">
        Our AI-powered voice assistant is coming soon to guide you through energy-based hazard identification and control measures.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
        {[
          {
            icon: <Bot className="w-6 h-6" />,
            title: 'AI Assistant',
            description: 'Interactive voice guidance for hazard identification',
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: 'Energy Analysis',
            description: 'Comprehensive assessment of energy sources',
          },
          {
            icon: <Volume2 className="w-6 h-6" />,
            title: 'Voice Control',
            description: 'Hands-free operation for field work',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-[#2A2A2D] p-6 rounded-lg text-center"
          >
            <div className="w-12 h-12 bg-[#1C1C1E] rounded-full flex items-center justify-center mx-auto mb-4 text-[#FFD700]">
              {feature.icon}
            </div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}