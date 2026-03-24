import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface MediaObjectProps {
  className?: string;
  children?: ReactNode;
}

export function MediaObject({ className, children, ...props }: MediaObjectProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
