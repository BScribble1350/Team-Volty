import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Zap, Mail, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    // Simulate login - replace with actual API call
    login({
      id: '1',
      email: data.email,
      firstName: '',
      lastName: '',
      isNewUser: true,
    });
    navigate('/setup');
  };

  return (
    <div className="min-h-screen bg-[#1C1C1E] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#FFD700] rounded-lg flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-[#1C1C1E]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome to Team Volty</h1>
          <p className="text-gray-400">Sign in to continue to the platform</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('email')}
                type="email"
                className="block w-full pl-10 bg-[#2A2A2D] border-gray-600 rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] text-white"
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-[#FF3B30]">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                {...register('password')}
                type="password"
                className="block w-full pl-10 bg-[#2A2A2D] border-gray-600 rounded-lg focus:ring-[#FFD700] focus:border-[#FFD700] text-white"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-[#FF3B30]">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFD700] text-[#1C1C1E] py-2 px-4 rounded-lg font-medium hover:bg-[#E6C200] transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}