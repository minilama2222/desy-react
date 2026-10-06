import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TableAdvancedProps {
  className?: string;
  children?: ReactNode;
}

export function TableAdvanced({ className, children, ...props }: TableAdvancedProps) {
  return <table className={clsx(className)} {...props}>{children}</table>;
}
