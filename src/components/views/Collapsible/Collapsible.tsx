import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface CollapsibleProps {
  className?: string;
  children?: ReactNode;
}

export function Collapsible({ className, children, ...props }: CollapsibleProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
