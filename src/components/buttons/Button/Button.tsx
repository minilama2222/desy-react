import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Button.displayName = 'Button';
