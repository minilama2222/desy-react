import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ToggleProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
