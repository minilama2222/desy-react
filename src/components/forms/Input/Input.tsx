import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface InputProps {
  className?: string;
  children?: ReactNode;
}

export const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Input.displayName = 'Input';
