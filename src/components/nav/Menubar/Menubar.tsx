import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface MenubarProps {
  className?: string;
  children?: ReactNode;
}

export function Menubar({ className, children, ...props }: MenubarProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
