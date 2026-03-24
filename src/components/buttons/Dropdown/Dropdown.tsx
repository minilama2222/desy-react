import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DropdownProps {
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
