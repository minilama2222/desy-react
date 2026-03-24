import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface IconProps {
  className?: string;
  children?: ReactNode;
}

export function Icon({ className, children, ...props }: IconProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
