'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, Input } from '@nexoura/ui';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    setLoading(false);

    if (!result.success) {
      setError(result.message || 'Unable to sign in.');
      return;
    }

    router.push('/dashboard');
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white grid place-items-center px-4">
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-semibold">Sign in to Nexoura</h1>
        <p className="mt-3 text-slate-400">Authentication foundation for the admin platform.</p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-200" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label className="block text-sm font-medium text-slate-200" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <p className="min-h-[1.25rem] text-sm text-red-400" aria-live="polite">
            {error}
          </p>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
      </Card>
    </main>
  );
}
