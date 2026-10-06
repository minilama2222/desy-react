import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TreegridProps {
  className?: string;
  children?: ReactNode;
}

export function Treegrid({ className, children, ...props }: TreegridProps) {
  return (
    <div
      className={clsx(
        'relative overflow-x-auto pb-base focus:outline-hidden focus:shadow-outline-black',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
