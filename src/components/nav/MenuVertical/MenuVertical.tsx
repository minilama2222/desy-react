import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface MenuVerticalProps {
  className?: string;
  children?: ReactNode;
}

export function MenuVertical({ className, children, ...props }: MenuVerticalProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
