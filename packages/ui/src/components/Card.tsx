import type { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        'rounded-3xl border border-slate-700 bg-slate-900/90 p-10 shadow-xl shadow-slate-900/20 ' +
        className
      }
      {...props}
    />
  );
}
