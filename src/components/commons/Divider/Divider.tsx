import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Custom CSS classes */
  className?: string;
  /** Text content for the divider */
  text?: string;
  /** HTML content for the divider (alternative to text) */
  html?: string;
}

/**
 * Divider component - renders a horizontal rule or divider with optional text.
 * Renders as <hr> with optional centered text content.
 */
export function Divider({ className, text, html, ...props }: DividerProps) {
  if (text || html) {
    return (
      <div className={clsx('relative', className)} {...props}>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-neutral-medium" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-neutral-dark">
            {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text}
          </span>
        </div>
      </div>
    );
  }

  return <hr className={clsx('border-t border-neutral-medium', className)} {...props} />;
}
