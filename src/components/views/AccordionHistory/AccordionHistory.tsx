import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface AccordionHistoryProps {
  className?: string;
  children?: ReactNode;
}

export function AccordionHistory({ className, children, ...props }: AccordionHistoryProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
