import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/80 p-10 shadow-xl shadow-slate-900/20">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <p className="mt-4 text-slate-300">This is the authentication foundation dashboard.</p>
        <div className="mt-8 rounded-2xl bg-slate-950/80 p-6">
          <p className="text-slate-400">Your authentication and RBAC foundation is active.</p>
          <Link href="/" className="mt-4 inline-flex rounded-2xl bg-sky-600 px-4 py-3 text-white transition hover:bg-sky-500">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
