import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TermProps extends HTMLAttributes<HTMLElement> {
  /** Custom CSS classes for the term */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Text content for the term */
  text?: string;
  /** HTML content for the term (alternative to text) */
  html?: string;
  /** React nodes to render as content (alternative to text/html) */
  children?: ReactNode;
}

/**
 * Term component - renders a term (<dt>) inside a description list.
 * Renders as <dt> with optional text, HTML or children content.
 */
export function Term({ className, classes, text, html, children, ...props }: TermProps) {
  return (
    <dt className={clsx('text-sm text-neutral-dark', classes, className)} {...props}>
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
    </dt>
  );
}
