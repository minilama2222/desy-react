import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TitleProps {
  className?: string;
  children?: ReactNode;
}

export function Title({ className, children, ...props }: TitleProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
