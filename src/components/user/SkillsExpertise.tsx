import React from 'react';
import { Brain, Star, Users } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'expert';
  endorsements: number;
}

interface SkillsExpertiseProps {
  skills: Skill[];
  onAdd: (skill: Skill) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: string, value: string) => void;
}

export function SkillsExpertise({ skills, onAdd, onRemove, onUpdate }: SkillsExpertiseProps) {
  const skillOptions = [
    'Electrical Systems',
    'Hazard Assessment',
    'High Voltage Operations',
    'Safety Protocols',
    'Emergency Response',
    'Equipment Maintenance',
    'Circuit Analysis',
    'Power Distribution',
    'Risk Management',
    'Technical Documentation',
  ];

  const handleAddNew = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'beginner',
      endorsements: 0,
    };
    onAdd(newSkill);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Skills & Expertise</h3>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors"
        >
          <Brain className="w-5 h-5" />
          Add Skill
        </button>
      </div>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-[#2A2A2D] rounded-lg p-6 space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Skill
                </label>
                <select
                  value={skill.name}
                  onChange={(e) => onUpdate(skill.id, 'name', e.target.value)}
                  className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                >
                  <option value="">Select a skill</option>
                  {skillOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Proficiency Level
                </label>
                <select
                  value={skill.level}
                  onChange={(e) => onUpdate(skill.id, 'level', e.target.value)}
                  className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-5 h-5" />
                  <span>{skill.endorsements} endorsements</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(3)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < (skill.level === 'expert' ? 3 : skill.level === 'intermediate' ? 2 : 1)
                          ? 'text-[#FFD700] fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => onRemove(skill.id)}
                className="flex items-center gap-2 px-4 py-2 text-[#FF3B30] hover:bg-[#1C1C1E] rounded-lg transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}