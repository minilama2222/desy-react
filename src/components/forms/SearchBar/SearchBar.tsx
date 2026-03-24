import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface SearchBarProps {
  className?: string;
  children?: ReactNode;
}

export const SearchBar = forwardRef<HTMLDivElement, SearchBarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
