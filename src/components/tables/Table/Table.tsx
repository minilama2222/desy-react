import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TableProps {
  className?: string;
  children?: ReactNode;
}

export function Table({ className, children, ...props }: TableProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
