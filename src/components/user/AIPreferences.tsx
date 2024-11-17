import React from 'react';
import { Bot, MessageSquare, Zap, Settings } from 'lucide-react';

interface AIPreferencesProps {
  preferences: {
    language: string;
    interactionStyle: string;
    enabledTools: string[];
  };
  onUpdate: (field: string, value: any) => void;
}

export function AIPreferences({ preferences, onUpdate }: AIPreferencesProps) {
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];
  const interactionStyles = ['Concise', 'Detailed', 'Technical', 'Simplified'];
  const aiTools = [
    'Energy Wheel Assistance',
    'Training Recommendations',
    'Report Auto-Generation',
    'Risk Assessment',
    'SOP Generation',
    'Permit Workflow',
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Bot className="w-6 h-6 text-[#FFD700]" />
        <h3 className="text-xl font-bold">AI Preferences</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Preferred Language
          </label>
          <select
            value={preferences.language}
            onChange={(e) => onUpdate('language', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Interaction Style
          </label>
          <select
            value={preferences.interactionStyle}
            onChange={(e) => onUpdate('interactionStyle', e.target.value)}
            className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
            {interactionStyles.map((style) => (
              <option key={style} value={style}>{style}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-[#FFD700]" />
          <h4 className="text-lg font-semibold">AI Tools Access</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {aiTools.map((tool) => (
            <label key={tool} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={preferences.enabledTools.includes(tool)}
                onChange={(e) => {
                  const newTools = e.target.checked
                    ? [...preferences.enabledTools, tool]
                    : preferences.enabledTools.filter((t) => t !== tool);
                  onUpdate('enabledTools', newTools);
                }}
                className="w-4 h-4 text-[#FFD700] bg-[#1C1C1E] border-gray-600 rounded focus:ring-[#FFD700] focus:ring-2"
              />
              <span className="text-sm text-gray-300">{tool}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="bg-[#2A2A2D] rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#FFD700]" />
          <h4 className="text-lg font-semibold">AI Assistant Preview</h4>
        </div>
        
        <div className="flex items-start gap-4 bg-[#1C1C1E] rounded-lg p-4">
          <Bot className="w-8 h-8 text-[#FFD700] shrink-0 mt-1" />
          <div className="space-y-2">
            <p className="text-gray-300">
              This is how AI responses will appear based on your selected preferences:
            </p>
            <div className="bg-[#2A2A2D] rounded p-3 text-sm">
              {preferences.interactionStyle === 'Concise' ? (
                <p>Energy source identified: Electrical. Recommended controls: Lockout/Tagout.</p>
              ) : preferences.interactionStyle === 'Detailed' ? (
                <p>I've analyzed the situation and identified electrical energy as the primary hazard. Based on safety protocols, I recommend implementing Lockout/Tagout procedures. This includes...</p>
              ) : preferences.interactionStyle === 'Technical' ? (
                <p>Circuit analysis indicates 480V potential. Implement LOTO per OSHA 1910.147. Verify zero energy state with calibrated multimeter.</p>
              ) : (
                <p>Let's make this safe! First, we'll turn off the power and lock it out. Then we'll test to make sure there's no electricity before starting work.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-[#2A2A2D] rounded-lg p-4 text-sm">
        <Zap className="w-5 h-5 text-[#FFD700] shrink-0" />
        <p className="text-gray-300">
          Your AI preferences help customize tool behavior and communication style across the platform.
        </p>
      </div>
    </div>
  );
}