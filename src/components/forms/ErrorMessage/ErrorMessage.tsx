import { type ReactNode, type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Custom CSS classes */
  className?: string;
  /** Error message text content */
  text?: string;
  /** HTML content for error message */
  html?: string;
  /** Child content */
  children?: ReactNode;
  /**
   * Visually hidden text prefix (default: 'Error')
   * Useful for screen readers to announce errors clearly
   */
  visuallyHiddenText?: string;
}

/**
 * ErrorMessage component - renders a form error message with accessible styling.
 */
export function ErrorMessage({ className, text, html, children, visuallyHiddenText = 'Error', ...props }: ErrorMessageProps) {
  return (
    <p
      className={clsx('block font-semibold text-alert-base', className)}
      {...props}
    >
      <span className="sr-only">{visuallyHiddenText}: </span>
      {children}
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text}
    </p>
  );
}
