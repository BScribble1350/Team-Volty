import React from 'react';
import { MainNav } from './MainNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#1C1C1E]">
      <MainNav />
      <main className="flex-1">{children}</main>
    </div>
  );
}