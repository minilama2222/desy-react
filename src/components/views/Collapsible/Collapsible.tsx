import { type ReactNode, useState } from 'react';
import { clsx } from 'clsx';

export interface CollapsibleProps {
  /** Unique identifier */
  id?: string;
  /** Header text (when not using children) */
  headerText?: string;
  /** Header HTML content */
  headerHtml?: string;
  /** Whether the collapsible is open by default */
  open?: boolean;
  /** CSS classes for the wrapper */
  className?: string;
  /** CSS classes for the toggle button */
  buttonClasses?: string;
  /** CSS classes for the show text */
  showClasses?: string;
  /** CSS classes for the hide text */
  hideClasses?: string;
  /** CSS classes for the content area */
  contentClasses?: string;
  /** Child content for the header */
  children?: ReactNode;
  /** Content to show when open (text) */
  text?: string;
  /** Content to show when open (HTML) */
  html?: string;
  /** Toggle callback */
  onToggle?: (isOpen: boolean) => void;
}

/**
 * Collapsible component - an accordion-style collapsible content section.
 */
export function Collapsible({
  id,
  headerText,
  headerHtml,
  open: controlledOpen,
  className,
  buttonClasses,
  showClasses,
  hideClasses,
  contentClasses,
  children,
  text,
  html,
  onToggle,
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = useState(controlledOpen ?? false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const handleToggle = () => {
    const newState = !isOpen;
    if (controlledOpen === undefined) {
      setInternalOpen(newState);
    }
    onToggle?.(newState);
  };

  const showText = isOpen ? 'Ocultar' : 'Mostrar';
  const defaultShowHideClasses = 'absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none';

  return (
    <div
      className={clsx(
        className || '-my-px py-sm border-t border-b border-neutral-base'
      )}
    >
      {/* Header */}
      {headerText && !headerHtml && (
        <button
          id={id ? `${id}-title` : undefined}
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={id || undefined}
          className={clsx(
            buttonClasses ||
              'group relative w-full py-sm font-semibold text-left cursor-pointer focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black'
          )}
        >
          {headerText}
          <span
            className={clsx(
              isOpen && hideClasses ? hideClasses : showClasses || defaultShowHideClasses
            )}
            aria-hidden="true"
          >
            {showText}
          </span>
        </button>
      )}

      {/* Header with HTML */}
      {headerHtml && (
        <button
          id={id ? `${id}-title` : undefined}
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={id || undefined}
          className={clsx(
            buttonClasses ||
              'group relative w-full py-sm font-semibold text-left cursor-pointer focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black'
          )}
        >
          <span dangerouslySetInnerHTML={{ __html: headerHtml }} />
          <span
            className={clsx(
              isOpen && hideClasses ? hideClasses : showClasses || defaultShowHideClasses
            )}
            aria-hidden="true"
          >
            {showText}
          </span>
        </button>
      )}

      {/* Header with children (slot) */}
      {!headerHtml && !headerText && children && (
        <button
          id={id ? `${id}-title` : undefined}
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={id || undefined}
          className={clsx(
            buttonClasses ||
              'group relative w-full py-sm font-semibold text-left cursor-pointer focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black'
          )}
        >
          {children}
          <span
            className={clsx(
              isOpen && hideClasses ? hideClasses : showClasses || defaultShowHideClasses
            )}
            aria-hidden="true"
          >
            {showText}
          </span>
        </button>
      )}

      {/* Content */}
      {isOpen && (
        <div
          id={id || undefined}
          className={clsx(contentClasses || 'py-sm')}
        >
          {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
          {!html && text && <p>{text}</p>}
          {!html && !text && children}
        </div>
      )}
    </div>
  );
}
