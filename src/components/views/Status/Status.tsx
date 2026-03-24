import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface StatusProps {
  className?: string;
  children?: ReactNode;
}

export function Status({ className, children, ...props }: StatusProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
