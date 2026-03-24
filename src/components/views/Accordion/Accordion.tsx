import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface AccordionProps {
  className?: string;
  children?: ReactNode;
}

export function Accordion({ className, children, ...props }: AccordionProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
