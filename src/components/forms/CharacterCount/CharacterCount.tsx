import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface CharacterCountProps {
  className?: string;
  children?: ReactNode;
}

export const CharacterCount = forwardRef<HTMLDivElement, CharacterCountProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

CharacterCount.displayName = 'CharacterCount';
