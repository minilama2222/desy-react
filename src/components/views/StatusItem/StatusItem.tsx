import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface StatusItemProps {
  className?: string;
  children?: ReactNode;
}

export function StatusItem({ className, children, ...props }: StatusItemProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
