import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ListboxProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const Listbox = forwardRef<HTMLDivElement, ListboxProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Listbox.displayName = 'Listbox';
