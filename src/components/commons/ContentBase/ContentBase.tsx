import { type ReactNode } from 'react';

export interface ContentBaseProps {
  /** Unique identifier */
  id?: string;
  /** Custom CSS classes */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Text content */
  text?: string;
  /** HTML content (alternative to text) */
  html?: string;
  /** Child content (alternative to text/html) */
  children?: ReactNode;
}

/**
 * ContentBase component - base building block for projected content.
 * Mirrors the Angular ContentBaseComponent: it carries content
 * (text, html or children) so parent components can project it.
 * Renders its content without adding any wrapper element.
 */
export function ContentBase({ text, html, children }: ContentBaseProps) {
  return <>{html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}</>;
}
