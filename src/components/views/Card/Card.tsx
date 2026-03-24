import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface CardProps {
  className?: string;
  children?: ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
