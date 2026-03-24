import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeaderProps {
  className?: string;
  children?: ReactNode;
}

export function Header({ className, children, ...props }: HeaderProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
