import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface AlertProps {
  /** Unique identifier */
  id?: string;
  /** Whether the alert is active/visible */
  active?: boolean;
  /** CSS classes for the alert container */
  classes?: string;
  /** Custom CSS classes */
  className?: string;
  /** Child content (typically Notification component) */
  children?: ReactNode;
}

/**
 * Alert component - a container that shows/hides content based on active state.
 * Typically used with Notification component for alert messages.
 */
export function Alert({
  id,
  active = false,
  classes,
  className,
  children,
}: AlertProps) {
  if (!active) {
    return null;
  }

  return (
    <div
      id={id}
      className={clsx(classes, className)}
      role="dialog"
      aria-live="polite"
    >
      {children}
    </div>
  );
}
