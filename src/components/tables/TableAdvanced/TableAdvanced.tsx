import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TableAdvancedProps {
  className?: string;
  children?: ReactNode;
}

export function TableAdvanced({ className, children, ...props }: TableAdvancedProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
