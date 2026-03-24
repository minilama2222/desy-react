import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DetailsProps {
  className?: string;
  children?: ReactNode;
}

export function Details({ className, children, ...props }: DetailsProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
