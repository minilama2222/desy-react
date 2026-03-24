import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface FieldsetProps {
  className?: string;
  children?: ReactNode;
}

export const Fieldset = forwardRef<HTMLDivElement, FieldsetProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Fieldset.displayName = 'Fieldset';
