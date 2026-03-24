import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** Icon type: 'info', 'alert', or custom string */
  type?: string;
  /** Custom CSS classes for the container */
  containerClasses?: string;
  /** HTML content for custom icon rendering */
  html?: string;
  /** Custom CSS classes */
  className?: string;
}

/**
 * Icon component - renders an icon with optional type-based styling.
 * Projects content or renders HTML for custom icon markup.
 */
export function Icon({ type, containerClasses, html, className, children, ...props }: IconProps) {
  const iconTypeClasses: Record<string, string> = {
    info: 'text-blue-info',
    alert: 'text-yellow-alert',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center',
        type && iconTypeClasses[type],
        containerClasses,
        className
      )}
      {...props}
    >
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </span>
  );
}
