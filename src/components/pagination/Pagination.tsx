import { clsx } from 'clsx';

export interface PaginationProps {
  className?: string;
}

export function Pagination({ className, ...props }: PaginationProps) {
  return <div className={clsx(className)} {...props} />;
}
