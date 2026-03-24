import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface SkipLinkProps {
  className?: string;
  children?: ReactNode;
}

export function SkipLink({ className, children, ...props }: SkipLinkProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
