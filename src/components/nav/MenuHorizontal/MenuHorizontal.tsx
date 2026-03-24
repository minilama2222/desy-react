import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface MenuHorizontalProps {
  className?: string;
  children?: ReactNode;
}

export function MenuHorizontal({ className, children, ...props }: MenuHorizontalProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
