import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeaderAdvancedProps {
  className?: string;
  children?: ReactNode;
}

export function HeaderAdvanced({ className, children, ...props }: HeaderAdvancedProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
