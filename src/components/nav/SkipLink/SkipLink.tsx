import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface SkipLinkProps {
  /** The text content of the skip link */
  text?: string;
  /** The HTML content of the skip link */
  html?: string;
  /** The fragment/id to scroll to (default: 'content') */
  fragment?: string;
  /** Custom CSS classes */
  classes?: string;
  /** Unique identifier */
  id?: string;
  /** Child elements (for compound component pattern) */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * SkipLink component - provides an accessible "skip to content" link for keyboard users.
 * Hidden by default, becomes visible on focus/active states.
 */
export function SkipLink({
  text,
  html,
  fragment = 'content',
  classes,
  id,
  children,
  className,
  ...props
}: SkipLinkProps) {
  const hasContent = !!(children || text || html);

  const classNames = clsx(
    'c-skip-link',
    'sr-only',
    'active:not-sr-only',
    'focus:not-sr-only',
    'focus:outline-hidden',
    'focus:shadow-outline-focus',
    'block',
    'p-base',
    'bg-warning-base',
    'text-center',
    'text-black',
    'underline',
    classes,
    className
  );

  const handleClick = () => {
    const elem = document.querySelector('#' + fragment);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      // Focus first focusable element in target
      const focusable = elem.querySelector<HTMLElement>(
        'button, [tabindex], input, select, textarea, a[href], summary, [contenteditable], [role="button"], [role="link"], [role="checkbox"], [role="radio"], [role="menuitem"], [role="option"], [role="tab"], [role="tabpanel"]'
      );
      if (focusable) {
        focusable.focus();
      }
    }
  };

  return (
    <a
      href="#"
      id={id}
      className={classNames}
      onClick={handleClick}
      {...props}
    >
      {hasContent ? children : html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text}
    </a>
  );
}
