import type { ReactNode, LabelHTMLAttributes } from 'react';

interface FormFieldProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  htmlFor: string;
  error?: string;
  helperText?: string;
  children: ReactNode;
}

export function FormField({ label, htmlFor, error, helperText, children, className = '', ...props }: FormFieldProps) {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-slate-200 ${className}`} {...props}>
      <span>{label}</span>
      <div className="mt-2">{children}</div>
      {helperText ? <p className="mt-2 text-xs text-slate-400">{helperText}</p> : null}
      {error ? <p className="mt-2 text-sm text-rose-400">{error}</p> : null}
    </label>
  );
}
