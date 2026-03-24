import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TabsProps {
  className?: string;
  children?: ReactNode;
}

export function Tabs({ className, children, ...props }: TabsProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
