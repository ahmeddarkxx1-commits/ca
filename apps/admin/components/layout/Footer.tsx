export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-4 py-4 text-center text-sm text-slate-500 shadow-inner shadow-slate-200/50 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
      <p>© {new Date().getFullYear()} Nexoura Core. Built for enterprise productivity.</p>
    </footer>
  );
}
