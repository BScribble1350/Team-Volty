import React from 'react';
import { Award, Upload, Trash2 } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  status: 'valid' | 'expired';
  file?: string;
}

interface CertificationsProps {
  certifications: Certification[];
  onAdd: (cert: Certification) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: string, value: string) => void;
}

export function Certifications({ certifications, onAdd, onRemove, onUpdate }: CertificationsProps) {
  const certTypes = [
    'OSHA Safety Training',
    'High Voltage Operations',
    'First Aid & CPR',
    'Electrical Safety',
    'Arc Flash Safety',
  ];

  const handleAddNew = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      issueDate: '',
      expiryDate: '',
      status: 'valid',
    };
    onAdd(newCert);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Certifications</h3>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors"
        >
          <Award className="w-5 h-5" />
          Add Certification
        </button>
      </div>

      <div className="space-y-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#2A2A2D] rounded-lg p-6 space-y-6"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Certification Type
                </label>
                <select
                  value={cert.name}
                  onChange={(e) => onUpdate(cert.id, 'name', e.target.value)}
                  className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                >
                  <option value="">Select a certification</option>
                  {certTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Issuing Organization
                </label>
                <input
                  type="text"
                  value={cert.issuer}
                  onChange={(e) => onUpdate(cert.id, 'issuer', e.target.value)}
                  className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  placeholder="e.g., OSHA, Red Cross"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Issue Date
                </label>
                <input
                  type="date"
                  value={cert.issueDate}
                  onChange={(e) => onUpdate(cert.id, 'issueDate', e.target.value)}
                  className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Expiry Date
                </label>
                <input
                  type="date"
                  value={cert.expiryDate}
                  onChange={(e) => onUpdate(cert.id, 'expiryDate', e.target.value)}
                  className="w-full bg-[#1C1C1E] rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#1C1C1E] text-white rounded-lg hover:bg-[#2A2A2D] transition-colors">
                  <Upload className="w-5 h-5" />
                  Upload Certificate
                </button>
                {cert.file && (
                  <span className="text-sm text-gray-400">
                    {cert.file.split('/').pop()}
                  </span>
                )}
              </div>

              <button
                onClick={() => onRemove(cert.id)}
                className="flex items-center gap-2 px-4 py-2 text-[#FF3B30] hover:bg-[#1C1C1E] rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}