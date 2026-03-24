import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface InputGroupProps {
  className?: string;
  children?: ReactNode;
}

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

InputGroup.displayName = 'InputGroup';
