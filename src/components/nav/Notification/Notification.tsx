import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface NotificationProps {
  className?: string;
  children?: ReactNode;
}

export function Notification({ className, children, ...props }: NotificationProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
