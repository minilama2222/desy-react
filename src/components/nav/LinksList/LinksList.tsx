import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface LinksListProps {
  className?: string;
  children?: ReactNode;
}

export function LinksList({ className, children, ...props }: LinksListProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
