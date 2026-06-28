import type { InputHTMLAttributes } from 'react';

export function Toggle({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={
        'h-6 w-11 cursor-pointer rounded-full border border-slate-600 bg-slate-700/30 text-sky-500 outline-none transition checked:bg-sky-600 ' +
        className
      }
      type="checkbox"
      {...props}
    />
  );
}
