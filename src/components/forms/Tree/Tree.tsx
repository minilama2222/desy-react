import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TreeProps {
  className?: string;
  children?: ReactNode;
}

export const Tree = forwardRef<HTMLDivElement, TreeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

Tree.displayName = 'Tree';
