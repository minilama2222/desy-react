import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface DetailsProps {
  /** Unique identifier */
  id?: string;
  /** Summary/disclosure text */
  summaryText?: string;
  /** Summary/disclosure HTML */
  summaryHtml?: string;
  /** CSS classes for the summary element */
  summaryClasses?: string;
  /** CSS classes for the content container */
  containerClasses?: string;
  /** Whether the details is open */
  open?: boolean;
  /** CSS classes for the details element */
  classes?: string;
  /** Custom CSS classes */
  className?: string;
  /** Child content (the disclosure content) */
  children?: ReactNode;
  /** Change event handler for open state */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Details component - an accessible disclosure widget.
 * Based on the HTML5 <details> element with DESY styling.
 */
export function Details({
  id,
  summaryText,
  summaryHtml,
  summaryClasses,
  containerClasses,
  open = false,
  classes,
  className,
  children,
  onOpenChange,
}: DetailsProps) {
  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const isOpen = e.currentTarget.open;
    onOpenChange?.(isOpen);
  };

  const renderSummary = () => {
    if (summaryHtml) {
      return <span dangerouslySetInnerHTML={{ __html: summaryHtml }} />;
    }
    return summaryText;
  };

  return (
    <details
      id={id}
      open={open}
      className={clsx(classes, className)}
      onToggle={handleToggle}
    >
      <summary
        className={clsx(
          'py-sm',
          'cursor-pointer',
          'focus:bg-warning-base',
          'focus:outline-hidden',
          'focus:shadow-outline-focus',
          'focus:text-black',
          summaryClasses || 'c-link'
        )}
      >
        {renderSummary()}
      </summary>
      <div className={clsx('py-sm', containerClasses)}>
        {children}
      </div>
    </details>
  );
}
