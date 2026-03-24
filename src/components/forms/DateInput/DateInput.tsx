import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DateInputProps {
  className?: string;
  children?: ReactNode;
}

export const DateInput = forwardRef<HTMLDivElement, DateInputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

DateInput.displayName = 'DateInput';
