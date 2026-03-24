import { useState, useRef, type ReactNode } from 'react';
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  offset,
  shift,
  autoPlacement,
  FloatingArrow,
  type Placement,
} from '@floating-ui/react';
import { clsx } from 'clsx';

export interface DropdownProps {
  /** Unique identifier */
  id?: string;
  /** Whether the dropdown is disabled */
  disabled?: boolean;
  /** Hidden text for screen readers */
  hiddenText?: string;
  /** CSS classes for the button */
  classes?: string;
  /** CSS classes for the tooltip/dropdown content */
  classesTooltip?: string;
  /** CSS classes for the container */
  classesContainer?: string;
  /** Dropdown button content */
  text?: string;
  /** Dropdown button HTML content */
  html?: string;
  /** Role for the dropdown content */
  contentRole?: string;
  /** Aria label for the content */
  contentAriaLabel?: string;
  /** Aria modal attribute */
  contentAriaModal?: string;
  /** Dropdown content (popover) */
  children?: ReactNode;
  /** Placement of the dropdown */
  placement?: Placement;
  /** Called when dropdown is clicked */
  onClick?: (event: React.MouseEvent) => void;
  /** CSS classes */
  className?: string;
}

/** Chevron down icon */
const ChevronIcon = () => (
  <svg
    viewBox="0 0 96 96"
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
    width="1.5em"
    height="1.5em"
    className="inline-block -mr-2 align-middle -my-px"
  >
    <path d="M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z" />
  </svg>
);

/**
 * Dropdown component - a button that opens a dropdown menu/popover on click.
 * Uses FloatingUI for positioning.
 */
export function Dropdown({
  id,
  disabled = false,
  hiddenText,
  classes,
  classesTooltip,
  classesContainer = 'relative block',
  text,
  html,
  contentRole,
  contentAriaLabel,
  contentAriaModal,
  children,
  placement = 'bottom-start',
  onClick,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(0),
      shift({ padding: 5 }),
      autoPlacement(),
    ],
  });

  const click = useClick(context, { enabled: !disabled });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });

  const interactions = useInteractions([click, dismiss, role]);

  const handleClick = (e: React.MouseEvent) => {
    if (!disabled) {
      onClick?.(e);
    }
  };

  const renderButtonContent = () => {
    if (html) {
      return <span dangerouslySetInnerHTML={{ __html: html }} />;
    }
    if (text) {
      return <span>{text}</span>;
    }
    return null;
  };

  return (
    <div className={clsx(classesContainer, className)}>
      {/* Button */}
      <button
        ref={refs.setReference}
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup={true}
        aria-expanded={isOpen}
        aria-disabled={disabled}
        aria-label={hiddenText}
        onClick={handleClick}
        className={clsx('c-dropdown', classes)}
        {...interactions.getReferenceProps()}
      >
        <span className="inline-flex self-center max-w-xs align-middle truncate">
          {renderButtonContent()}
        </span>
        <ChevronIcon />
      </button>

      {/* Hidden text for screen readers */}
      {hiddenText && <span className="sr-only">{hiddenText}</span>}

      {/* Dropdown content */}
      {isOpen && children && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          role={contentRole || 'listbox'}
          aria-label={contentAriaLabel}
          aria-modal={contentAriaModal === 'true' ? true : contentAriaModal === 'false' ? false : undefined}
          className={clsx(
            'min-w-auto mt-2 border border-neutral-base shadow-md bg-white z-50',
            classesTooltip
          )}
          {...interactions.getFloatingProps()}
        >
          <FloatingArrow ref={arrowRef} context={context} className="fill-neutral-base" />
          {children}
        </div>
      )}
    </div>
  );
}

/** Dropdown item component */
export interface DropdownItemProps {
  /** Item text */
  text?: string;
  /** Item HTML */
  html?: string;
  /** Item href (if it's a link) */
  href?: string;
  /** Item click handler */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** CSS classes */
  className?: string;
  /** Target attribute */
  target?: string;
  /** Children */
  children?: ReactNode;
}

/**
 * DropdownItem - individual item within a Dropdown menu.
 */
export function DropdownItem({
  text,
  html,
  href,
  onClick,
  disabled = false,
  className,
  target,
  children,
}: DropdownItemProps) {
  const baseClasses = 'flex items-center pr-base pl-lg py-sm hover:bg-primary-base hover:text-white focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black';

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={target}
        className={clsx(baseClasses, 'cursor-pointer', className)}
        onClick={onClick}
      >
        {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(baseClasses, 'w-full text-left', disabled && 'opacity-50 cursor-not-allowed', className)}
      onClick={onClick}
    >
      {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children}
    </button>
  );
}
