'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, LayoutDashboard, Settings2, Sparkles, Users, FileText, DollarSign, ClipboardCheck, Layers, Activity } from 'lucide-react';

const menuItems = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, permission: 'dashboard.view' },
  { label: 'CRM', href: '/dashboard/crm', icon: Users, permission: 'crm.view' },
  { label: 'Projects', href: '/dashboard/projects', icon: FileText, permission: 'projects.view' },
  { label: 'Tasks', href: '/dashboard/tasks', icon: ClipboardCheck, permission: 'tasks.view' },
  { label: 'Finance', href: '/dashboard/finance', icon: DollarSign, permission: 'finance.view' },
  { label: 'HR', href: '/dashboard/hr', icon: Activity, permission: 'hr.view' },
  { label: 'Reports', href: '/dashboard/reports', icon: Layers, permission: 'reports.view' },
  { label: 'AI', href: '/dashboard/ai', icon: Sparkles, permission: 'ai.view' },
  { label: 'Automation', href: '/dashboard/automation', icon: Sparkles, permission: 'automation.view' },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings2, permission: 'settings.view' }
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`transition-all duration-300 ${collapsed ? 'w-20' : 'w-72'} shrink-0 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950`}>
      <div className="flex h-full min-h-[calc(100vh-64px)] flex-col justify-between p-4">
        <div>
          <button
            type="button"
            className="mb-6 flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-900"
            onClick={() => setCollapsed((value) => !value)}
            aria-label="Toggle sidebar"
          >
            <ChevronDown className={`transition-transform ${collapsed ? 'rotate-180' : 'rotate-0'}`} size={18} />
            <span className={`${collapsed ? 'hidden' : 'inline'}`}>Navigation</span>
          </button>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <item.icon size={18} />
                <span className={`${collapsed ? 'hidden' : 'inline'}`}>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 rounded-3xl bg-slate-50 p-4 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Workspace</p>
          <p className="mt-3 text-sm font-semibold">Nexoura Admin</p>
        </div>
      </div>
    </aside>
  );
}
