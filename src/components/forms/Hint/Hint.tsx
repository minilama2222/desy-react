import { type ReactNode, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface HintProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Custom CSS classes */
  className?: string;
  /** Hint text content */
  text?: string;
  /** HTML content for hint */
  html?: string;
  /** Child content */
  children?: ReactNode;
}

/**
 * Hint component - renders a form hint text with accessible styling.
 */
export function Hint({ className, text, html, children, ...props }: HintProps) {
  return (
    <p
      className={clsx('block text-neutral-dark', className)}
      {...props}
    >
      {children}
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text}
    </p>
  );
}
