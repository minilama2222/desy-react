import { type ReactNode, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom CSS classes */
  className?: string;
  /** Child content */
  children?: ReactNode;
  /** Text content (alternative to children) */
  text?: string;
  /** HTML content (alternative to children) */
  html?: string;
}

/**
 * Base content wrapper component - projects children or text/html content
 */
export function Content({ className, children, text, html, ...props }: ContentProps) {
  return (
    <div className={clsx(className)} {...props}>
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
    </div>
  );
}
