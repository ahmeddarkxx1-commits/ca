'use client';

import { useState } from 'react';
import { Bell, Moon, Sun, Translate } from 'lucide-react';
import { Badge, Button, Toggle } from '@nexoura/ui';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' }
];

export function Header() {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-white">N</div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Nexoura</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Workspace</p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative w-full max-w-2xl">
            <input
              type="search"
              aria-label="Global search"
              placeholder="Search..."
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="relative">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
              onClick={() => setNotificationsOpen((open) => !open)}
              aria-expanded={notificationsOpen}
              aria-label="Notifications"
            >
              <Bell size={18} />
              <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-rose-500 text-[10px] text-white">3</Badge>
            </button>
            {notificationsOpen ? (
              <div className="absolute right-0 mt-2 w-80 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950">
                <p className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">Notifications</p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <p>New sign-in from Cairo.</p>
                  <p>Role update available.</p>
                  <p>Password change required.</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="relative">
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="h-11 rounded-2xl border border-slate-200 bg-white px-3 pr-8 text-slate-700 outline-none transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
              aria-label="Language selector"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.label}</option>
              ))}
            </select>
          </div>

          <Button variant="ghost" className="h-11 px-3">Profile</Button>
        </div>
      </div>
    </header>
  );
}
