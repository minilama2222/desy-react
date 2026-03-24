import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextareaProps {
  className?: string;
  children?: ReactNode;
}

export const Textarea = forwardRef<HTMLDivElement, TextareaProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
