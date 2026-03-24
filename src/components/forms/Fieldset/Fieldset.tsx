import { type FieldsetHTMLAttributes, type ReactNode, createElement } from 'react';
import { clsx } from 'clsx';

export interface LegendData {
  /** Legend text content */
  text?: string;
  /** Legend HTML content */
  html?: string;
  /** CSS classes for the legend */
  classes?: string;
  /** Whether the legend is a page heading */
  isPageHeading?: boolean;
  /** Heading level when isPageHeading is true */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
}

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Custom CSS classes for the fieldset element */
  className?: string;
  /** Legend configuration */
  legendData?: LegendData;
  /** Simple legend text (alternative to legendData) */
  legendText?: string;
  /** Heading level for the legend */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Child content (typically form elements) */
  children?: ReactNode;
  /** ID for error message aria-describedby */
  errorId?: string;
  /** IDs for aria-describedby */
  describedBy?: string;
}

/**
 * Renders the legend element inside a fieldset
 */
function Legend({ data, headingLevel }: { data: LegendData; headingLevel?: 1 | 2 | 3 | 4 | 5 }) {
  const level = data.headingLevel ?? headingLevel ?? 1;
  const text = data.text;
  const html = data.html;

  const content = html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text;

  if (data.isPageHeading) {
    return createElement(
      'legend',
      { className: clsx(data.classes || 'font-bold') },
      createElement(`h${level}` as 'h1', {}, content)
    );
  }

  return (
    <legend className={clsx(data.classes || 'font-bold')}>
      {content}
    </legend>
  );
}

/**
 * Fieldset component - wraps form fields with a legend and optional fieldset styling.
 */
export function Fieldset({
  className,
  legendData,
  legendText,
  headingLevel,
  children,
  errorId,
  describedBy,
  ...props
}: FieldsetProps) {
  const ariaDescribedBy = describedBy || errorId || undefined;

  return (
    <fieldset
      className={clsx(className)}
      aria-describedby={ariaDescribedBy}
      aria-errormessage={errorId}
      {...props}
    >
      {legendData && <Legend data={legendData} headingLevel={headingLevel} />}
      {!legendData && legendText && (
        <Legend
          data={{ text: legendText, headingLevel: headingLevel ? (headingLevel as 1 | 2 | 3 | 4 | 5) : 1 }}
          headingLevel={headingLevel}
        />
      )}
      {children}
    </fieldset>
  );
}
