import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface BreadcrumbsProps {
  className?: string;
  children?: ReactNode;
}

export function Breadcrumbs({ className, children, ...props }: BreadcrumbsProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
