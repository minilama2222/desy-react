import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DescriptionProps {
  className?: string;
  children?: ReactNode;
}

export function Description({ className, children, ...props }: DescriptionProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
