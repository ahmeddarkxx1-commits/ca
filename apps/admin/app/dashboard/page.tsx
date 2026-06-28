import Link from 'next/link';
import { Button, Card } from '@nexoura/ui';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <Card className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <p className="mt-4 text-slate-300">This is the authentication foundation dashboard.</p>
        <div className="mt-8 rounded-2xl bg-slate-950/80 p-6">
          <p className="text-slate-400">Your authentication and RBAC foundation is active.</p>
          <Link href="/" className="mt-4 inline-flex">
            <Button variant="secondary" className="w-full">Back to home</Button>
          </Link>
        </div>
      </Card>
    </main>
  );
}
