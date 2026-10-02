import { type HTMLAttributes, type ReactNode, createElement } from 'react';
import { clsx } from 'clsx';

export interface LegendProps extends HTMLAttributes<HTMLLegendElement> {
  /** Custom CSS classes */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Text content for the legend */
  text?: string;
  /** HTML content for the legend (alternative to text) */
  html?: string;
  /** Whether the legend acts as the page heading */
  isPageHeading?: boolean;
  /** Heading level when isPageHeading is true (1-5) */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  /** React nodes to render as content (alternative to text/html) */
  children?: ReactNode;
}

/**
 * Legend component - renders a <legend> label for a fieldset.
 * When isPageHeading is true, wraps the content in a heading (h1-h5).
 */
export function Legend({
  className,
  classes,
  text,
  html,
  children,
  isPageHeading,
  headingLevel = 1,
  ...props
}: LegendProps) {
  const content = html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children;

  if (isPageHeading) {
    return (
      <legend className={clsx(classes, className) || 'font-bold'} {...props}>
        {createElement(`h${headingLevel}` as 'h1', {}, content)}
      </legend>
    );
  }

  return (
    <legend className={clsx(classes, className) || 'font-bold'} {...props}>
      {content}
    </legend>
  );
}
