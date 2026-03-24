import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
}

export function Modal({ className, children, ...props }: ModalProps) {
  return <div className={clsx(className)} {...props}>{children}</div>;
}
