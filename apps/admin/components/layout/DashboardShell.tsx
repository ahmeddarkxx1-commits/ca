import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header />
      <div className="flex min-h-[calc(100vh-64px)] flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-6 xl:p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
