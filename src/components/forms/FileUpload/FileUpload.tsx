import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface FileUploadProps {
  className?: string;
  children?: ReactNode;
}

export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        {children}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';
