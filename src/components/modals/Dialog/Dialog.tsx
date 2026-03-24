import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DialogProps {
  className?: string;
  children?: ReactNode;
}

export function Dialog({ className, children, ...props }: DialogProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
