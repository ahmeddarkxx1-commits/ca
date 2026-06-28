import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-sky-600 text-white hover:bg-sky-500',
  secondary: 'bg-slate-800 text-slate-100 hover:bg-slate-700',
  ghost: 'bg-transparent text-slate-100 hover:bg-slate-200'
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={
        'inline-flex items-center justify-center rounded-2xl px-4 py-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50 ' +
        variantStyles[variant] +
        ' ' +
        className
      }
      {...props}
    />
  );
}
