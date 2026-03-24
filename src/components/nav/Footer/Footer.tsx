import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface FooterProps {
  className?: string;
  children?: ReactNode;
}

export function Footer({ className, children, ...props }: FooterProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
