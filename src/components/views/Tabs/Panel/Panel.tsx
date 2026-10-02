import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom CSS classes for the panel */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Text content for the panel */
  text?: string;
  /** HTML content for the panel (alternative to text) */
  html?: string;
  /** React nodes to render as content (alternative to text/html) */
  children?: ReactNode;
}

/**
 * Panel component - renders the content panel of a tab.
 * Renders as <div class="c-tabs__panel" role="tabpanel"> with optional
 * text, HTML or children content.
 */
export function Panel({ className, classes, text, html, children, ...props }: PanelProps) {
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={clsx('c-tabs__panel', classes, className)}
      {...props}
    >
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
    </div>
  );
}
