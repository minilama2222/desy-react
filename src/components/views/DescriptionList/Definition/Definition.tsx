import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DefinitionProps extends HTMLAttributes<HTMLElement> {
  /** Custom CSS classes for the definition */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Text content for the definition */
  text?: string;
  /** HTML content for the definition (alternative to text) */
  html?: string;
  /** React nodes to render as content (alternative to text/html) */
  children?: ReactNode;
}

/**
 * Definition component - renders a definition (<dd>) inside a description list.
 * Renders as <dd> with optional text, HTML or children content.
 * Sister component of Term.
 */
export function Definition({ className, classes, text, html, children, ...props }: DefinitionProps) {
  return (
    <dd className={clsx(classes, className)} {...props}>
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
    </dd>
  );
}
