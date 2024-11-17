import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/user/Header';
import { PersonalDetails } from '../components/user/PersonalDetails';
import { RolesPermissions } from '../components/user/RolesPermissions';
import { Certifications } from '../components/user/Certifications';
import { SkillsExpertise } from '../components/user/SkillsExpertise';
import { AIPreferences } from '../components/user/AIPreferences';

export function UserProfile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 555-5555',
    username: 'johndoe',
    role: 'Safety Officer',
    department: 'Operations',
    manager: 'Jane Smith',
    team: 'West Coast Operations',
    location: 'Los Angeles, CA',
    status: true,
    permissions: ['View Reports', 'Edit Reports'],
    certifications: [],
    skills: [],
    aiPreferences: {
      language: 'English',
      interactionStyle: 'Concise',
      enabledTools: ['Energy Wheel Assistance', 'Training Recommendations']
    }
  });

  const handleUpdate = (section: string, field: string, value: any) => {
    setUserData(prev => ({
      ...prev,
      [section]: typeof value === 'object' ? { ...prev[section], [field]: value } : value
    }));
  };

  const handleSave = () => {
    // Save changes to backend
    console.log('Saving changes:', userData);
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <PersonalDetails
            user={userData}
            onUpdate={(field, value) => handleUpdate('personal', field, value)}
          />
        );
      case 'roles':
        return (
          <RolesPermissions
            user={userData}
            onUpdate={(field, value) => handleUpdate('roles', field, value)}
          />
        );
      case 'certifications':
        return (
          <Certifications
            certifications={userData.certifications}
            onAdd={(cert) => setUserData(prev => ({
              ...prev,
              certifications: [...prev.certifications, cert]
            }))}
            onRemove={(id) => setUserData(prev => ({
              ...prev,
              certifications: prev.certifications.filter(c => c.id !== id)
            }))}
            onUpdate={(id, field, value) => setUserData(prev => ({
              ...prev,
              certifications: prev.certifications.map(c =>
                c.id === id ? { ...c, [field]: value } : c
              )
            }))}
          />
        );
      case 'skills':
        return (
          <SkillsExpertise
            skills={userData.skills}
            onAdd={(skill) => setUserData(prev => ({
              ...prev,
              skills: [...prev.skills, skill]
            }))}
            onRemove={(id) => setUserData(prev => ({
              ...prev,
              skills: prev.skills.filter(s => s.id !== id)
            }))}
            onUpdate={(id, field, value) => setUserData(prev => ({
              ...prev,
              skills: prev.skills.map(s =>
                s.id === id ? { ...s, [field]: value } : s
              )
            }))}
          />
        );
      case 'ai':
        return (
          <AIPreferences
            preferences={userData.aiPreferences}
            onUpdate={(field, value) => handleUpdate('aiPreferences', field, value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] text-white">
      <Header
        user={userData}
        onSave={handleSave}
        onCancel={() => navigate('/')}
      />
      
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-[#2A2A2D] rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}