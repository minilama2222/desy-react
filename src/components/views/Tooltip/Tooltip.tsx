import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TooltipProps {
  className?: string;
  children?: ReactNode;
}

export function Tooltip({ className, children, ...props }: TooltipProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
