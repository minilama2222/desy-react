import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface CheckboxesProps {
  className?: string;
  children?: ReactNode;
}

export const Checkboxes = forwardRef<HTMLDivElement, CheckboxesProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Checkboxes.displayName = 'Checkboxes';
