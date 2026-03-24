import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface RadiosProps {
  className?: string;
  children?: ReactNode;
}

export const Radios = forwardRef<HTMLDivElement, RadiosProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Radios.displayName = 'Radios';
