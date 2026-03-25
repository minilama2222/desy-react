import { type ReactNode, useState, useCallback, useEffect } from 'react';
import { clsx } from 'clsx';

/** Accordion item data structure */
export interface AccordionItemData {
  /** Unique identifier for the item */
  id?: string;
  /** Whether the item is open by default */
  open?: boolean;
  /** Additional CSS classes for the item */
  classes?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Header content as HTML */
  headerHtml?: string;
  /** Header content as plain text */
  headerText?: string;
  /** Body content as HTML */
  html?: string;
  /** Body content as plain text */
  text?: string;
  /** Custom show button content */
  showHeaderButton?: { text?: string; html?: string; classes?: string };
  /** Custom hide button content */
  hideHeaderButton?: { text?: string; html?: string; classes?: string };
}

/** Accordion heading data */
export interface AccordionHeadingData {
  /** Heading text */
  text?: string;
  /** Heading HTML */
  html?: string;
  /** Heading CSS classes */
  classes?: string;
}

export interface AccordionProps {
  /** Unique identifier prefix for the accordion */
  idPrefix?: string;
  /** Heading level (1-5) for the accordion heading */
  headingLevel?: number;
  /** Heading configuration */
  heading?: AccordionHeadingData;
  /** Array of accordion items */
  items?: AccordionItemData[];
  /** Whether to show a control to expand/collapse all */
  showControl?: boolean;
  /** Whether to allow toggling individual items */
  allowToggle?: boolean;
  /** Whether all items should be open initially */
  showAll?: boolean;
  /** CSS classes for the accordion container */
  classes?: string;
  /** Called when expand/collapse all is clicked */
  onChangeAll?: (showAll: boolean) => void;
  /** Called when an item's open state changes */
  onToggleItem?: (item: AccordionItemData, index: number) => void;
  /** Children (slot content for items) */
  children?: ReactNode;
}

/** Dynamic heading component */
function HeadingTitle({ id, level, className, children }: { id?: string; level: number; className?: string; children: ReactNode }) {
  const Tag = `h${Math.min(Math.max(level, 1), 5)}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  return <Tag id={id} className={className}>{children}</Tag>;
}

/**
 * Accordion component - collapsible sections with optional expand/collapse all control.
 */
export function Accordion({
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
}: AccordionProps) {
  const [internalShowAll, setInternalShowAll] = useState(initialShowAll);
  const [openItems, setOpenItems] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    items.forEach((item, index) => {
      initial[index] = item.open ?? false;
    });
    return initial;
  });

  // Sync internalShowAll with prop
  useEffect(() => {
    setInternalShowAll(initialShowAll);
  }, [initialShowAll]);

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
    const selector = `[data-accordion-item-button]`;
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

  const getItemId = (item: AccordionItemData, index: number): string => {
    return item.id ?? `${idPrefix ?? 'accordion'}-item-${index}`;
  };

  const getTitleClasses = (): string => {
    return 'mb-0 text-lg font-semibold leading-8';
  };

  const renderHeadingTitle = () => {
    if (!heading && headingLevel <= 0) return null;
    return (
      <HeadingTitle id={idPrefix ? `${idPrefix}-heading` : undefined} level={headingLevel} className={getTitleClasses()}>
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
            aria-labelledby={`${idPrefix} ${heading ? `${idPrefix}-heading` : ''}`}
          >
            {internalShowAll ? 'Ocultar' : 'Mostrar'} todo
          </button>
        )}
      </div>

      {/* Accordion items */}
      <div className="c-accordion__items">
        {items.map((item, index) => {
          const itemId = getItemId(item, index);
          const open = isOpen(index);

          return (
            <div
              key={item.id ?? index}
              className="-my-px px-xs py-sm border-t border-b border-neutral-base"
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              <HeadingTitle id={`${itemId}-title`} level={itemHeadingLevel} className="text-base font-semibold">
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
                  disabled={item.disabled}
                  onClick={() => !item.disabled && handleToggleItem(index)}
                  data-accordion-item-button
                >
                  {item.headerHtml ? (
                    <span dangerouslySetInnerHTML={{ __html: item.headerHtml }} />
                  ) : (
                    item.headerText
                  )}

                  {!item.disabled && (
                    <span
                      className="absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none"
                      aria-hidden="true"
                    >
                      {!open && (
                        <span className={clsx('c-accordion__show', item.showHeaderButton?.classes)}>
                          {item.showHeaderButton?.html ? (
                            <span dangerouslySetInnerHTML={{ __html: item.showHeaderButton.html }} />
                          ) : (
                            item.showHeaderButton?.text ?? 'Mostrar'
                          )}
                        </span>
                      )}
                      {allowToggle && open && (
                        <span className={clsx('c-accordion__hide', item.hideHeaderButton?.classes)}>
                          {item.hideHeaderButton?.html ? (
                            <span dangerouslySetInnerHTML={{ __html: item.hideHeaderButton.html }} />
                          ) : (
                            item.hideHeaderButton?.text ?? 'Ocultar'
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
              {open && (
                <div id={itemId} className={clsx('c-accordion__panel', item.classes)}>
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

      {/* Slot for custom items (if not using items prop) */}
      {children}
    </div>
  );
}
