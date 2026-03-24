import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ItemProps {
  className?: string;
  children?: ReactNode;
}

export function Item({ className, children, ...props }: ItemProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
