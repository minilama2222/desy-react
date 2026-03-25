import { type ReactNode, useState, useCallback } from 'react';
import { clsx } from 'clsx';

/** AccordionHistory item status */
export type AccordionHistoryStatus = 'current' | 'pending' | 'muted' | 'currentmuted' | 'past';

/** AccordionHistory item data structure */
export interface AccordionHistoryItemData {
  /** Unique identifier for the item */
  id?: string;
  /** Whether the item is open by default */
  open?: boolean;
  /** Additional CSS classes for the item */
  classes?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Status indicator: current, pending, muted, currentmuted, past */
  status?: AccordionHistoryStatus;
  /** Header content as HTML */
  headerHtml?: string;
  /** Header content as plain text */
  headerText?: string;
  /** Body content as HTML */
  html?: string;
  /** Body content as plain text */
  text?: string;
  /** Custom show button content */
  showButton?: { text?: string; html?: string; classes?: string };
  /** Custom hide button content */
  hideButton?: { text?: string; html?: string; classes?: string };
}

/** AccordionHistory heading configuration */
export interface AccordionHistoryHeadingData {
  /** Heading text */
  text?: string;
  /** Heading HTML */
  html?: string;
  /** Heading CSS classes */
  classes?: string;
}

export interface AccordionHistoryProps {
  /** Unique identifier prefix */
  idPrefix?: string;
  /** Heading level (1-5) */
  headingLevel?: number;
  /** Heading configuration */
  heading?: AccordionHistoryHeadingData;
  /** Array of history items */
  items?: AccordionHistoryItemData[];
  /** Whether to show expand/collapse all */
  showControl?: boolean;
  /** Whether to allow toggling individual items */
  allowToggle?: boolean;
  /** Whether all items are expanded */
  showAll?: boolean;
  /** CSS classes */
  classes?: string;
  /** Called when expand/collapse all changes */
  onChangeAll?: (showAll: boolean) => void;
  /** Called when item toggle changes */
  onToggleItem?: (item: AccordionHistoryItemData, index: number) => void;
  /** Children slot */
  children?: ReactNode;
}

/** Get status label for screen readers */
const getStatusLabel = (status?: AccordionHistoryStatus): string => {
  switch (status) {
    case 'current':
      return 'Estado: actual';
    case 'pending':
      return 'Estado: pendiente';
    case 'muted':
      return 'Estado: muteado';
    case 'currentmuted':
      return 'Estado: actual muteado';
    default:
      return 'Estado: pasado';
  }
};

/** Status dot colors and styles based on item status */
const StatusDot = ({ status }: { status?: AccordionHistoryStatus }) => {
  const baseClasses = 'absolute top-5 -left-6 w-3 h-3 rounded-full';

  switch (status) {
    case 'current':
      return <div className={clsx(baseClasses, 'bg-white ring-2 ring-primary-base')} role="img" />;
    case 'pending':
      return <div className={clsx(baseClasses, 'bg-white border-2 border-neutral-base')} role="img" />;
    case 'muted':
      return <div className={clsx(baseClasses, 'bg-neutral-base border-2 border-neutral-base')} role="img" />;
    case 'currentmuted':
      return <div className={clsx(baseClasses, 'bg-neutral-base ring-2 ring-neutral-base')} role="img" />;
    default:
      return <div className={clsx(baseClasses, 'bg-primary-base border-2 border-primary-base')} role="img" />;
  }
};

/** Dynamic heading component */
function HeadingTitle({ id, level, className, children }: { id?: string; level: number; className?: string; children: ReactNode }) {
  const Tag = `h${Math.min(Math.max(level, 1), 5)}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  return <Tag id={id} className={className}>{children}</Tag>;
}

/**
 * AccordionHistory component - accordion with history/version tracking timeline.
 */
export function AccordionHistory({
  idPrefix,
  headingLevel = 2,
  heading,
  items = [],
  showControl = false,
  allowToggle = true,
  showAll: initialShowAll = false,
  classes,
  onChangeAll,
  onToggleItem,
  children,
}: AccordionHistoryProps) {
  const [internalShowAll, setInternalShowAll] = useState(initialShowAll);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    items.forEach((item, index) => {
      initial[index] = item.open ?? false;
    });
    return initial;
  });

  const handleToggleAll = useCallback(() => {
    const newShowAll = !internalShowAll;
    setInternalShowAll(newShowAll);
    onChangeAll?.(newShowAll);
  }, [internalShowAll, onChangeAll]);

  const handleToggleItem = useCallback(
    (index: number) => {
      const newOpenItems = { ...openItems };
      newOpenItems[index] = !newOpenItems[index];
      setOpenItems(newOpenItems);
      onToggleItem?.(items[index], index);
    },
    [openItems, items, onToggleItem]
  );

  const focusItem = useCallback((direction: 'first' | 'last' | 'prev' | 'next', currentIndex: number) => {
    const selector = `[data-accordion-history-button]`;
    const buttons = Array.from(document.querySelectorAll<HTMLElement>(selector));
    const visibleButtons = buttons.filter((btn) => !btn.hasAttribute('disabled'));
    const currentBtn = buttons[currentIndex];
    const visibleIndex = visibleButtons.indexOf(currentBtn);

    let targetIndex: number;
    switch (direction) {
      case 'first':
        targetIndex = 0;
        break;
      case 'last':
        targetIndex = visibleButtons.length - 1;
        break;
      case 'prev':
        targetIndex = Math.max(0, visibleIndex - 1);
        break;
      case 'next':
        targetIndex = Math.min(visibleButtons.length - 1, visibleIndex + 1);
        break;
    }
    visibleButtons[targetIndex]?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          focusItem('prev', index);
          break;
        case 'ArrowDown':
          e.preventDefault();
          focusItem('next', index);
          break;
        case 'Home':
          e.preventDefault();
          focusItem('first', index);
          break;
        case 'End':
          e.preventDefault();
          focusItem('last', index);
          break;
      }
    },
    [focusItem]
  );

  const itemHeadingLevel = Math.min(headingLevel + 1, 6);

  const isOpen = (index: number): boolean => {
    return internalShowAll ? !openItems[index] : openItems[index];
  };

  const getItemId = (item: AccordionHistoryItemData, index: number): string => {
    return item.id ?? `${idPrefix ?? 'accordion-history'}-item-${index}`;
  };

  const getTopBorder = (status?: AccordionHistoryStatus): string => {
    switch (status) {
      case 'current':
        return 'border-2 border-primary-base';
      case 'pending':
        return 'border-2 border-neutral-base border-dashed';
      case 'muted':
        return 'border-2 border-neutral-base';
      case 'currentmuted':
        return 'border-2 border-neutral-base';
      default:
        return 'border-2 border-primary-base';
    }
  };

  const getVerticalBorder = (status?: AccordionHistoryStatus, isPast = false): string => {
    if (isPast) {
      switch (status) {
        case 'current':
          return 'border-2 border-neutral-base border-dashed';
        case 'pending':
          return 'border-2 border-neutral-base border-dashed';
        case 'muted':
          return 'border-2 border-neutral-base';
        case 'currentmuted':
          return 'border-2 border-neutral-base border-dashed';
        default:
          return 'border-2 border-primary-base';
      }
    }
    // Future vertical border
    switch (status) {
      case 'current':
        return 'border-2 border-neutral-base border-dashed';
      case 'pending':
        return 'border-2 border-neutral-base border-dashed';
      case 'muted':
        return 'border-2 border-neutral-base';
      case 'currentmuted':
        return 'border-2 border-neutral-base';
      default:
        return 'border-2 border-primary-base';
    }
  };

  const renderHeadingTitle = () => {
    if (!heading && headingLevel <= 0) return null;
    return (
      <HeadingTitle id={idPrefix ? `${idPrefix}-heading` : undefined} level={headingLevel} className={heading?.classes || 'c-h2 mb-base'}>
        {heading?.html ? (
          <span dangerouslySetInnerHTML={{ __html: heading.html }} />
        ) : (
          heading?.text
        )}
      </HeadingTitle>
    );
  };

  return (
    <div className={clsx('c-accordion', classes)}>
      {/* Header row */}
      <div className="flex justify-between">
        {renderHeadingTitle()}
        {showControl && (
          <button
            id={idPrefix}
            onClick={handleToggleAll}
            type="button"
            className="ml-auto py-base text-sm text-neutral-dark underline focus:text-black focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus text-right"
          >
            {internalShowAll ? 'Mostrar' : 'Ocultar'} todo
          </button>
        )}
      </div>

      {/* Timeline items */}
      <div className="c-accordion__items pl-lg">
        {items.map((item, index) => {
          const itemId = getItemId(item, index);
          const open = isOpen(index);
          const isFirst = index === 0;
          const isLast = index === items.length - 1;
          const status = item.status ?? 'past';

          return (
            <div
              key={item.id ?? index}
              className="relative -my-px px-xs py-sm border-t border-b border-neutral-base"
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {/* Top connector line */}
              {!isFirst && (
                <div
                  className={clsx('absolute -top-px -left-5 h-6', getTopBorder(status))}
                />
              )}

              {/* Vertical connector line to next item */}
              {!isLast && (
                <div
                  className={clsx('absolute top-6 bottom-0 -left-5', getVerticalBorder(status, status === 'past'))}
                />
              )}

              {/* Status dot */}
              <StatusDot status={status} />

              {/* Header */}
              <HeadingTitle id={`${itemId}-title`} level={itemHeadingLevel}>
                <button
                  type="button"
                  className={clsx(
                    'c-accordion__trigger',
                    'group relative w-full py-sm font-semibold text-left cursor-pointer',
                    'focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black',
                    item.disabled && 'cursor-not-allowed opacity-50'
                  )}
                  aria-controls={itemId}
                  aria-expanded={open}
                  aria-describedby={`${itemId}-status`}
                  disabled={item.disabled}
                  onClick={() => !item.disabled && handleToggleItem(index)}
                  data-accordion-history-button
                >
                  {item.headerHtml ? (
                    <span dangerouslySetInnerHTML={{ __html: item.headerHtml }} />
                  ) : (
                    item.headerText
                  )}

                  {/* Screen reader status */}
                  <span id={`${itemId}-status`} className="sr-only">
                    ({getStatusLabel(status)})
                  </span>

                  {!item.disabled && (
                    <span
                      className="absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none"
                      aria-hidden="true"
                    >
                      {!open && (
                        <span className={clsx('c-accordion__show', item.showButton?.classes)}>
                          {item.showButton?.html ? (
                            <span dangerouslySetInnerHTML={{ __html: item.showButton.html }} />
                          ) : (
                            item.showButton?.text ?? 'Mostrar'
                          )}
                        </span>
                      )}
                      {allowToggle && open && (
                        <span className={clsx('c-accordion__hide', item.hideButton?.classes)}>
                          {item.hideButton?.html ? (
                            <span dangerouslySetInnerHTML={{ __html: item.hideButton.html }} />
                          ) : (
                            item.hideButton?.text ?? 'Ocultar'
                          )}
                        </span>
                      )}
                    </span>
                  )}
                </button>
              </HeadingTitle>

              <p className="sr-only" aria-hidden="true">
                Haz click en el botón anterior para mostrar u ocultar
              </p>

              {/* Vertical border through content */}
              {!isLast && open && (
                <div
                  className={clsx('absolute top-4 bottom-0 -left-6 -my-sm', getVerticalBorder(status, status === 'past'))}
                />
              )}

              {/* Content */}
              {open && (
                <div id={itemId} className={clsx('c-accordion__panel relative', item.classes)}>
                  {item.html ? (
                    <div dangerouslySetInnerHTML={{ __html: item.html }} />
                  ) : item.text ? (
                    <p>{item.text}</p>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {children}
    </div>
  );
}
