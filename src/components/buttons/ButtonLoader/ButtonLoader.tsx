import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonLoaderProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const ButtonLoader = forwardRef<HTMLDivElement, ButtonLoaderProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

ButtonLoader.displayName = 'ButtonLoader';
