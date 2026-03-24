import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface PillProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const Pill = forwardRef<HTMLDivElement, PillProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Pill.displayName = 'Pill';
