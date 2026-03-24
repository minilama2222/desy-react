import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HintProps {
  className?: string;
  children?: ReactNode;
}

export const Hint = forwardRef<HTMLDivElement, HintProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Hint.displayName = 'Hint';
