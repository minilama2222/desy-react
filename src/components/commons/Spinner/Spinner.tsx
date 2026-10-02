import { type HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Custom CSS classes for the spinner host */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Accessible text announced to screen readers (default: 'Cargando') */
  text?: string;
}

/**
 * Spinner component - renders a loading indicator.
 * Renders as <span class="c-spinner"> with a visually hidden
 * <span role="alert" aria-live="assertive"> for screen readers.
 */
export function Spinner({ className, classes, text, ...props }: SpinnerProps) {
  return (
    <span className={clsx('c-spinner', classes, className)} {...props}>
      <span className="sr-only" role="alert" aria-live="assertive">
        {text || 'Cargando'}
      </span>
    </span>
  );
}
