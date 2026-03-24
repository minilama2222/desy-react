import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface NavProps {
  className?: string;
  children?: ReactNode;
}

export function Nav({ className, children, ...props }: NavProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
