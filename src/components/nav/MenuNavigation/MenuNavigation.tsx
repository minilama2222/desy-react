import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface MenuNavigationProps {
  className?: string;
  children?: ReactNode;
}

export function MenuNavigation({ className, children, ...props }: MenuNavigationProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
