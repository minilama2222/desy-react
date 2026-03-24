import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface SelectProps {
  className?: string;
  children?: ReactNode;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Select.displayName = 'Select';
