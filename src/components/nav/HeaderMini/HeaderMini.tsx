import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeaderMiniProps {
  className?: string;
  children?: ReactNode;
}

export function HeaderMini({ className, children, ...props }: HeaderMiniProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
