import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface LabelProps {
  className?: string;
  children?: ReactNode;
}

export const Label = forwardRef<HTMLDivElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Label.displayName = 'Label';
