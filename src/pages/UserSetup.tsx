import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { UserCircle, Building, Phone } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const setupSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  department: z.string().min(1, 'Department is required'),
  phone: z.string().min(1, 'Phone number is required'),
});

type SetupForm = z.infer<typeof setupSchema>;

export function UserSetup() {
  const navigate = useNavigate();
  const { completeOnboarding } = useAuthStore();
  const { register, handleSubmit, formState: { errors } } = useForm<SetupForm>({
    resolver: zodResolver(setupSchema),
  });

  const onSubmit = (data: SetupForm) => {
    completeOnboarding();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
            <UserCircle className="w-8 h-8 text-[#1C1C1E]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Complete Your Profile</h1>
          <p className="text-gray-400">Let's get to know you better</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                First Name
              </label>
              <input
                {...register('firstName')}
                className="w-full bg-[#2A2A2D] border-gray-600 rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] text-white"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-[#FF3B30]">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Last Name
              </label>
              <input
                {...register('lastName')}
                className="w-full bg-[#2A2A2D] border-gray-600 rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] text-white"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-[#FF3B30]">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Department
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building className="h-5 w-5 text-gray-400" />
              </div>
              <select
                {...register('department')}
                className="block w-full pl-10 bg-[#2A2A2D] border-gray-600 rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] text-white"
              >
                <option value="">Select department</option>
                <option value="operations">Operations</option>
                <option value="safety">Safety</option>
                <option value="training">Training</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            {errors.department && (
              <p className="mt-1 text-sm text-[#FF3B30]">{errors.department.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('phone')}
                type="tel"
                className="block w-full pl-10 bg-[#2A2A2D] border-gray-600 rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] text-white"
                placeholder="(555) 555-5555"
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-[#FF3B30]">{errors.phone.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFD700] text-[#1C1C1E] py-2 px-4 rounded-lg font-medium hover:bg-[#E6C200] transition-colors"
          >
            Complete Setup
          </button>
        </form>
      </div>
    </div>
  );
}