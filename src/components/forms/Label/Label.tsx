import { type ReactNode, type LabelHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Custom CSS classes */
  className?: string;
  /** Label text content */
  text?: string;
  /** HTML content for label */
  html?: string;
  /** Child content */
  children?: ReactNode;
  /** Whether the label is a page heading */
  isPageHeading?: boolean;
  /** Heading level when isPageHeading is true (1-5) */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
}

/**
 * Label component - renders a form label with optional page heading styling.
 */
export function Label({
  className,
  text,
  html,
  children,
  isPageHeading,
  headingLevel = 1,
  ...props
}: LabelProps) {
  const labelContent = html ? (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    text || children
  );

  const label = (
    <label
      className={clsx('block', className)}
      {...props}
    >
      {labelContent}
    </label>
  );

  if (isPageHeading) {
    if (headingLevel === 1) return <h1>{label}</h1>;
    if (headingLevel === 2) return <h2>{label}</h2>;
    if (headingLevel === 3) return <h3>{label}</h3>;
    if (headingLevel === 4) return <h4>{label}</h4>;
    if (headingLevel === 5) return <h5>{label}</h5>;
    return <h1>{label}</h1>;
  }

  return label;
}
