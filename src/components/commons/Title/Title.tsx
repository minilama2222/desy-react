import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Custom CSS classes */
  className?: string;
  /** Text content for the title */
  text?: string;
  /** HTML content (alternative to text) */
  html?: string;
}

/**
 * Title component - renders a heading with text or HTML content.
 */
export function Title({ className, text, html, children, ...props }: TitleProps) {
  return (
    <h1 className={clsx(className)} {...props}>
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
    </h1>
  );
}
