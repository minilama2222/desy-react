import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DividerProps {
  className?: string;
  children?: ReactNode;
}

export function Divider({ className, children, ...props }: DividerProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
