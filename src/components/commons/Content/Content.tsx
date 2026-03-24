import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ContentProps {
  className?: string;
  children?: ReactNode;
}

export function Content({ className, children, ...props }: ContentProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
