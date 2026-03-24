import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface AlertProps {
  className?: string;
  children?: ReactNode;
}

export function Alert({ className, children, ...props }: AlertProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
