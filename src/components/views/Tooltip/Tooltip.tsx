import { useState, useRef, type ReactNode } from 'react';
import {
  useFloating,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  offset,
  shift,
  autoPlacement,
  arrow,
  FloatingArrow,
  type Placement,
} from '@floating-ui/react';
import { clsx } from 'clsx';

export interface TooltipProps {
  /** Unique identifier */
  id?: string;
  /** Tooltip text content */
  text?: string;
  /** Tooltip HTML content */
  html?: string;
  /** Whether to use complex mode (aria-describedby instead of aria-labelledby) */
  complex?: boolean;
  /** CSS classes for the tooltip */
  classesTooltip?: string;
  /** Icon configuration */
  icon?: {
    type?: 'info' | 'alert' | 'help';
    html?: string;
  };
  /** Children (trigger element) */
  children: ReactNode;
  /** Tooltip content as React node */
  content?: ReactNode;
  /** Placement of the tooltip */
  placement?: Placement;
  /** CSS classes for the trigger */
  className?: string;
}

/** Default info icon */
const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 140"
    width="1em"
    height="1em"
    className="w-4 h-4 text-primary-base"
    role="img"
    aria-label="Información"
  >
    <path
      fill="currentColor"
      d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm7.5 105a7.5 7.5 0 01-15 0V70a7.5 7.5 0 0115 0zM70 50a10 10 0 1110-10 10 10 0 01-10 10z"
    />
  </svg>
);

/** Default alert icon */
const AlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 140"
    width="1em"
    height="1em"
    className="w-4 h-4 text-alert-base"
    role="img"
    aria-label="Alerta"
  >
    <path
      fill="currentColor"
      d="M138.42 118.29l-55-110a15 15 0 00-26.84 0l-55 110A15 15 0 0015 140h110a15 15 0 0013.42-21.71zM62.5 50a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 70a10 10 0 1110-10 10 10 0 01-10 10z"
    />
  </svg>
);

/** Default help icon */
const HelpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 140"
    width="1em"
    height="1em"
    className="w-4 h-4 text-primary-base"
    role="img"
    aria-label="Ayuda"
  >
    <path
      fill="currentColor"
      d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm0 117.51a10 10 0 1110-10 10 10 0 01-10 10zm9.17-39.08a2.5 2.5 0 00-1.67 2.36v1.71a7.5 7.5 0 01-15 0v-10A7.5 7.5 0 0170 65a12.5 12.5 0 10-12.5-12.5 7.5 7.5 0 01-15 0 27.5 27.5 0 1136.67 25.93z"
    />
  </svg>
);

/**
 * Tooltip component - displays a tooltip on hover/focus using FloatingUI for positioning.
 */
export function Tooltip({
  id = 'tooltip',
  text,
  html,
  complex = false,
  classesTooltip,
  icon,
  children,
  content,
  placement,
  className,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);

  const {
    refs,
    floatingStyles,
    context,
  } = useFloating({
    placement: placement || 'top',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(8),
      shift({ padding: 8 }),
      autoPlacement(),
      arrow({ element: arrowRef }),
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  const getIcon = () => {
    if (icon?.html) {
      return <span dangerouslySetInnerHTML={{ __html: icon.html }} />;
    }
    switch (icon?.type) {
      case 'info':
        return <InfoIcon />;
      case 'alert':
        return <AlertIcon />;
      case 'help':
        return <HelpIcon />;
      default:
        return <HelpIcon />;
    }
  };

  const renderTooltipContent = () => {
    if (content) {
      return content;
    }
    if (html) {
      return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
    if (text) {
      return <p>{text}</p>;
    }
    return null;
  };

  const tooltipContent = renderTooltipContent();

  return (
    <span className={clsx('inline-flex', className)}>
      {/* Button/trigger */}
      <span
        ref={refs.setReference}
        data-tooltip-trigger
        aria-describedby={isOpen && complex ? `${id}-tooltip` : undefined}
        aria-labelledby={isOpen && !complex ? `${id}-tooltip` : undefined}
        {...interactions.getReferenceProps()}
      >
        {/* Icon */}
        {icon && (
          <span className="inline-flex items-center">
            {getIcon()}
          </span>
        )}
        {/* Children */}
        {children}
      </span>

      {/* Tooltip */}
      {isOpen && tooltipContent && (
        <div
          ref={refs.setFloating}
          id={`${id}-tooltip`}
          style={floatingStyles}
          className={clsx(
            'z-50 max-w-[350px] px-base py-sm bg-neutral-dark text-white text-sm rounded shadow-lg border border-neutral-base',
            classesTooltip
          )}
          {...interactions.getFloatingProps()}
        >
          {tooltipContent}
          <FloatingArrow
            ref={arrowRef}
            context={context}
            className="fill-neutral-dark"
          />
        </div>
      )}
    </span>
  );
}
