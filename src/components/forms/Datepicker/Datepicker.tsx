import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DatepickerProps {
  className?: string;
  children?: ReactNode;
}

export const Datepicker = forwardRef<HTMLDivElement, DatepickerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Datepicker.displayName = 'Datepicker';
