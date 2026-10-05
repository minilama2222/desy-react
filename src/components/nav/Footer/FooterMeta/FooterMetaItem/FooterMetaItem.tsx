import { type AnchorHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface FooterMetaItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Custom CSS classes for the anchor */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Link text */
  text?: string;
  /** Link HTML content (alternative to text) */
  html?: string;
  /** Child content (alternative to text/html) */
  children?: ReactNode;
}

/**
 * FooterMetaItem component - a single link inside a FooterMeta list.
 * Renders as <li> wrapping a <a class="c-link">.
 */
export function FooterMetaItem({ className, classes, text, html, children, ...props }: FooterMetaItemProps) {
  return (
    <li className="mb-sm mr-base">
      <a className={clsx('c-link font-semibold', classes, className)} {...props}>
        {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
      </a>
    </li>
  );
}
