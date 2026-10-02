import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { FooterMetaItem, type FooterMetaItemProps } from './FooterMetaItem/FooterMetaItem';

export interface FooterMetaProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom CSS classes */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Visually hidden heading for screen readers (default: 'Enlaces de pie de página') */
  visuallyHiddenTitle?: string;
  /** Items rendered as the meta link list (alternative to FooterMetaItem children) */
  items?: FooterMetaItemProps[];
  /** Additional text content displayed after the items */
  text?: string;
  /** Additional HTML content displayed after the items (alternative to text) */
  html?: string;
  /** FooterMetaItem children (alternative to items) */
  children?: ReactNode;
}

/**
 * FooterMeta component - meta section of the footer with legal/secondary links.
 * Renders a visually hidden heading, a list of FooterMetaItem links and
 * optional additional text/HTML content.
 */
export function FooterMeta({
  className,
  classes,
  visuallyHiddenTitle,
  items,
  text,
  html,
  children,
  ...props
}: FooterMetaProps) {
  return (
    <div className={clsx(classes, className)} {...props}>
      <h2 className="sr-only">{visuallyHiddenTitle || 'Enlaces de pie de página'}</h2>
      {(items?.length || children) && (
        <ul className="flex flex-col lg:flex-row lg:flex-wrap mb-base">
          {items?.map((item, index) => <FooterMetaItem key={item.id ?? item.href ?? index} {...item} />)}
          {children}
        </ul>
      )}
      {(text || html) && (
        <div className="mb-sm">
          <p>{html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text}</p>
        </div>
      )}
    </div>
  );
}
