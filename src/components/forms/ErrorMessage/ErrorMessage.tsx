import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ErrorMessageProps {
  className?: string;
  children?: ReactNode;
}

export const ErrorMessage = forwardRef<HTMLDivElement, ErrorMessageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

ErrorMessage.displayName = 'ErrorMessage';
