import { useState, useRef, useEffect, useCallback } from 'react';
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

export interface ListboxItemData {
  /** Unique identifier */
  id?: string;
  /** Item text */
  text?: string;
  /** Item HTML */
  html?: string;
  /** Item value */
  value: string;
  /** Whether the item is active/selected */
  active?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  classes?: string;
}

export interface ListboxLabelData {
  /** Label text */
  text?: string;
  /** Label HTML */
  html?: string;
  /** Label CSS classes */
  classes?: string;
}

export interface ListboxProps {
  /** Unique identifier */
  id?: string;
  /** Whether multiple items can be selected */
  isMultiselectable?: boolean;
  /** Whether to change button text to selected item */
  doesChangeButtonText?: boolean;
  /** Label configuration */
  label?: ListboxLabelData;
  /** CSS classes for the button */
  classes?: string;
  /** CSS classes for the container */
  classesContainer?: string;
  /** CSS classes for the tooltip/dropdown */
  classesTooltip?: string;
  /** ID prefix for items */
  idPrefix?: string;
  /** Whether the listbox is disabled */
  disabled?: boolean;
  /** Array of items */
  items?: ListboxItemData[];
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Listbox button text */
  text?: string;
  /** Listbox button HTML */
  html?: string;
  /** Placement of the dropdown */
  placement?: Placement;
  /** Called when items change */
  onItemsChange?: (items: ListboxItemData[]) => void;
  /** Called when active item changes */
  onActiveItemChange?: (item: ListboxItemData | null) => void;
  /** CSS classes */
  className?: string;
}

/** Chevron icon */
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
 * Listbox component - a dropdown listbox with keyboard navigation.
 * Supports single and multi-select modes.
 */
export function Listbox({
  id,
  isMultiselectable = false,
  doesChangeButtonText = false,
  label,
  classes,
  classesContainer = 'relative',
  classesTooltip,
  idPrefix,
  disabled = false,
  items = [],
  type = 'button',
  text,
  html,
  placement = 'bottom-start',
  onItemsChange,
  onActiveItemChange,
  className,
}: ListboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItems, setActiveItems] = useState<ListboxItemData[]>(() =>
    items.filter((item) => item.active)
  );
  const [currentFocusIndex, setCurrentFocusIndex] = useState(0);
  const [buttonContent, setButtonContent] = useState(html || text || '');
  const arrowRef = useRef<SVGSVGElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(8),
      shift({ padding: 5 }),
      autoPlacement(),
    ],
  });

  const click = useClick(context, { enabled: !disabled });
  const dismiss = useDismiss(context, { enabled: isOpen });
  const role = useRole(context, { role: 'listbox' });

  const interactions = useInteractions([click, dismiss, role]);

  // Sync items prop to internal state
  useEffect(() => {
    const newActiveItems = items.filter((item) => item.active);
    setActiveItems(newActiveItems);

    // Update button text
    if (doesChangeButtonText && !isMultiselectable && newActiveItems.length > 0) {
      const activeItem = newActiveItems[0];
      setButtonContent(activeItem.html || activeItem.text || '');
    }
  }, [items, doesChangeButtonText, isMultiselectable]);

  const handleSelectItem = useCallback(
    (index: number) => {
      const item = items[index];
      if (!item || item.disabled) return;

      let newItems: ListboxItemData[];
      let newActiveItems: ListboxItemData[];

      if (isMultiselectable) {
        // Toggle selection for multiselect
        newItems = items.map((it, i) =>
          i === index ? { ...it, active: !it.active } : it
        );
        newActiveItems = newItems.filter((it) => it.active);
      } else {
        // Single select - deselect all others
        newItems = items.map((it, i) => ({
          ...it,
          active: i === index,
        }));
        newActiveItems = [item];
        setButtonContent(item.html || item.text || '');
      }

      setCurrentFocusIndex(index);
      onItemsChange?.(newItems);
      onActiveItemChange?.(newActiveItems[0] || null);

      // Close listbox on selection for single select
      if (!isMultiselectable) {
        setIsOpen(false);
      }
    },
    [items, isMultiselectable, onItemsChange, onActiveItemChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setCurrentFocusIndex((prev) => Math.max(0, prev - 1));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setCurrentFocusIndex((prev) => Math.min(items.length - 1, prev + 1));
          break;
        case 'Home':
          e.preventDefault();
          setCurrentFocusIndex(0);
          break;
        case 'End':
          e.preventDefault();
          setCurrentFocusIndex(items.length - 1);
          break;
        case ' ':
        case 'Enter':
          e.preventDefault();
          handleSelectItem(currentFocusIndex);
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    },
    [isOpen, items.length, currentFocusIndex, handleSelectItem]
  );

  const getIdPrefix = (): string => idPrefix || `${id}-listbox-item`;

  const getItemId = (item: ListboxItemData, index: number): string => {
    return item.id || (index > 0 ? `${getIdPrefix()}-${index}` : getIdPrefix());
  };

  const hasLabel = !!label;

  return (
    <div className={clsx(classesContainer, className)} id={id}>
      {/* Label */}
      {label && (
        <div
          id={`${id}-label`}
          className={clsx('mb-sm', label.classes)}
          aria-hidden="true"
        >
          {label.html ? (
            <span dangerouslySetInnerHTML={{ __html: label.html }} />
          ) : label.text ? (
            label.text
          ) : null}
        </div>
      )}

      {/* Button */}
      <button
        ref={refs.setReference}
        id={`${id}-button`}
        type={type}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-labelledby={hasLabel ? `${id}-label ${id}-button` : `${id}-button`}
        aria-expanded={isOpen}
        aria-disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={clsx('c-listbox', isOpen && 'open', classes)}
        {...interactions.getReferenceProps()}
      >
        <span className="inline-flex self-center align-middle">
          {buttonContent ? (
            html || text ? (
              <span dangerouslySetInnerHTML={{ __html: buttonContent }} />
            ) : (
              <span>{buttonContent}</span>
            )
          ) : (
            text
          )}
        </span>
        <ChevronIcon />
      </button>

      {/* Dropdown */}
      {isOpen && items.length > 0 && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={clsx(
            'c-listbox__tooltip min-w-auto -ml-sm mt-2 border border-neutral-base shadow-md bg-white z-50',
            classesTooltip
          )}
          {...interactions.getFloatingProps()}
        >
          <ul
            ref={listRef}
            id={id}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={hasLabel ? id : undefined}
            aria-multiselectable={isMultiselectable ? 'true' : undefined}
            aria-activedescendant={
              activeItems.length > 0
                ? getItemId(activeItems[0], items.indexOf(activeItems[0]))
                : undefined
            }
            className="text-sm outline-none"
            onKeyDown={handleKeyDown}
          >
            {items.map((item, index) => (
              <li
                key={item.id ?? index}
                id={getItemId(item, index)}
                role="option"
                aria-selected={item.active}
                aria-disabled={item.disabled}
                onClick={() => !item.disabled && handleSelectItem(index)}
                className={clsx(
                  'flex items-center pr-base pl-lg py-sm cursor-pointer',
                  'hover:bg-primary-base hover:text-white',
                  'focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black',
                  item.active && 'bg-primary-base text-white',
                  item.disabled && 'opacity-50 cursor-not-allowed',
                  item.classes
                )}
              >
                {item.html ? (
                  <span dangerouslySetInnerHTML={{ __html: item.html }} />
                ) : item.text ? (
                  item.text
                ) : null}
              </li>
            ))}
          </ul>
          <FloatingArrow ref={arrowRef} context={context} className="fill-neutral-base" />
        </div>
      )}
    </div>
  );
}
