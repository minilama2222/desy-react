import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ErrorSummaryProps {
  className?: string;
  children?: ReactNode;
}

export function ErrorSummary({ className, children, ...props }: ErrorSummaryProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
