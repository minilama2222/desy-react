import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DescriptionListProps {
  className?: string;
  children?: ReactNode;
}

export function DescriptionList({ className, children, ...props }: DescriptionListProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
