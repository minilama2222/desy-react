import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { useFloating, offset, shift, size } from '@floating-ui/react';
import { clsx } from 'clsx';
import { ComboboxItem, type ComboboxItemProps } from './ComboboxItem';

export interface ComboboxItemData {
  /** Item value used for selection, filtering and as input text (fallback) */
  value: unknown;
  /** Unique identifier for the option */
  id?: string;
  /** Whether the option is selected/active */
  active?: boolean;
  /** Additional CSS classes for the option */
  classes?: string;
  /** Plain text content of the option */
  text?: string;
  /** HTML content of the option (alternative to text) */
  html?: string;
}

export interface ComboboxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'> {
  /** Required unique identifier (used to wire ids for ARIA) */
  id: string;
  /** Autocomplete mode: 'list' (filter list only) or 'both' (also inline-complete). Default: 'both' */
  autocompleteMode?: 'list' | 'both';
  /** CSS classes for the input element */
  classes?: string;
  /** CSS classes for the inner combobox container */
  classesContainer?: string;
  /** Whether the combobox is disabled */
  disabled?: boolean;
  /** Toggle button type */
  type?: 'button' | 'submit' | 'reset';
  /** Accessible label for the toggle button */
  toggleButtonLabel?: string;
  /** Text shown when there are no filtered results (default: 'No hay resultados') */
  noResultsText?: string;
  /** Whether multiple values can be selected (checkbox-like listbox) */
  isMultiselectable?: boolean;
  /** Form field name; when set on a single-select combobox a hidden input carries the value for native form submit */
  name?: string;
  /** Placeholder for the input */
  placeholder?: string;
  /** Options as data (alternative to ComboboxItem children) */
  items?: ComboboxItemData[];
  /** Option children (ComboboxItem) as a compound alternative to `items` */
  children?: ReactNode;
  /** Controlled value for single-select mode */
  value?: unknown;
  /** Current selected value(s) for single/multi mode */
  selectedValues?: unknown[];
  /** Label text content */
  labelText?: string;
  /** Label HTML content (alternative to labelText) */
  labelHtml?: string;
  /** Hint text content */
  hintText?: string;
  /** Hint HTML content (alternative to hintText) */
  hintHtml?: string;
  /** Error message text content */
  errorMessageText?: string;
  /** Error message HTML content (alternative to errorMessageText) */
  errorHtml?: string;
  /** External aria-describedby ids (hint, error) */
  ariaDescribedBy?: string;
  /** Called with the new value(s) whenever the selected value changes */
  onChange?: (value: unknown) => void;
  /** Called with the selected option data */
  onSelect?: (item: ComboboxItemData) => void;
  /** Called when the list is opened */
  onOpen?: () => void;
  /** Called when the list is closed */
  onClose?: () => void;
  /** Called when the value is cleared */
  onClear?: () => void;
}

/** Chevron down icon (same as the DESY Angular combobox) */
const ChevronIcon = () => (
  <svg
    className="relative inline-block align-middle top-0.5"
    viewBox="0 0 96 96"
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
    width="1.5em"
    height="1.5em"
  >
    <g>
      <path d="M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z" />
    </g>
  </svg>
);

function normalizeString(str: unknown): string {
  let s = typeof str === 'string' ? str : String(str ?? '');
  try {
    s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  } catch {
    /* keep as-is */
  }
  return s.toLowerCase();
}

function getLabel(value: unknown): string {
  return String(value ?? '');
}

/**
 * Combobox component - an autocomplete text input with a filterable,
 * keyboard-navigable listbox built on @floating-ui/react.
 * Mirrors the Angular desy-combobox: supports single and multiselect,
 * list/both autocomplete modes, inline completion, and accessible ARIA wiring.
 */
export function Combobox({
  id,
  autocompleteMode = 'both',
  classes,
  classesContainer,
  disabled = false,
  type = 'button',
  toggleButtonLabel,
  noResultsText = 'No hay resultados',
  isMultiselectable = false,
  name,
  placeholder,
  items,
  children,
  value,
  selectedValues,
  labelText,
  labelHtml,
  hintText,
  hintHtml,
  errorMessageText,
  errorHtml,
  ariaDescribedBy,
  onChange,
  onSelect,
  onOpen,
  onClose,
  onClear,
  className,
  ...props
}: ComboboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const isDeletingRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [selected, setSelected] = useState<unknown[]>(() => [...(selectedValues ?? [])]);

  // Combine `items` array with ComboboxItem children into the base option list.
  const itemChildren = useMemo(
    () =>
      Children.toArray(children).filter(
        (child) => isValidElement(child) && child.type === ComboboxItem
      ) as React.ReactElement<ComboboxItemProps>[],
    [children]
  );

  const resolvedItems: ComboboxItemData[] = useMemo(() => {
    if (items) return items;
    return itemChildren.map((child) => ({
      value: child.props.value,
      id: child.props.id,
      classes: child.props.classes,
      text: child.props.text,
      html: child.props.html,
    }));
  }, [items, itemChildren]);

  // Initialise selection from value / selectedValues / items marked active (once).
  useEffect(() => {
    const initial: unknown[] = [];
    if (selectedValues) {
      initial.push(...selectedValues);
    } else if (value !== undefined) {
      initial.push(value);
    } else {
      resolvedItems.forEach((item) => {
        if (item.active) initial.push(item.value);
      });
    }
    setSelected(initial);
    const firstActive = initial.length > 0 ? initial[0] : undefined;
    setInputValue(isMultiselectable ? '' : getLabel(firstActive));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { refs, floatingStyles } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      if (open) {
        setIsOpen(true);
        onOpen?.();
      } else {
        setIsOpen(false);
        onClose?.();
      }
    },
    placement: 'bottom-start',
    middleware: [
      offset(8),
      shift({ padding: 5 }),
      size({
        apply({ elements }) {
          // Match the popover width to the input width (like the Angular combobox)
          elements.floating.style.width = 'auto';
          elements.floating.style.minWidth = `${elements.reference.offsetWidth}px`;
        },
      }),
    ],
  });

  const hasError = Boolean(errorMessageText || errorHtml);
  const hintId = hintText || hintHtml ? `${id}-hint` : undefined;
  const errorId = hasError ? `${id}-error` : undefined;
  const describedBy = [ariaDescribedBy, hintId, errorId].filter(Boolean).join(' ') || undefined;

  const normalized = normalizeString(inputValue);
  const filteredOptions = useMemo(() => {
    if (!normalized) return resolvedItems;
    return resolvedItems.filter((opt) => normalizeString(opt.value).includes(normalized));
  }, [resolvedItems, normalized]);

  // Reset keyboard focus whenever the filtered list changes.
  useEffect(() => {
    setFocusedIndex(-1);
  }, [filteredOptions.length]);

  const selectedSet = useMemo(() => new Set(selected), [selected]);
  const activeIndex = filteredOptions.findIndex((o) => selectedSet.has(o.value));
  const activeItem = activeIndex >= 0 ? filteredOptions[activeIndex] : undefined;

  const getOptionId = useCallback(
    (item: ComboboxItemData, index: number) => item.id || `${id}-option-${index}`,
    [id]
  );

  const isOptionFocused = (index: number) => index === focusedIndex;
  const focusedOption = focusedIndex >= 0 ? filteredOptions[focusedIndex] : undefined;

  const scrollToIndex = useCallback((index: number) => {
    if (index < 0 || !listRef.current) return;
    const el = listRef.current.querySelector<HTMLElement>(`[data-option-index="${index}"]`);
    el?.scrollIntoView({ block: 'nearest' });
  }, []);

  const openList = useCallback(
    (setFocus = true) => {
      if (disabled) return;
      // establish keyboard focus on the active option or the first one
      if (setFocus) {
        const focusIndex = activeIndex !== -1 ? activeIndex : 0;
        setFocusedIndex(filteredOptions.length > 0 ? focusIndex : -1);
      } else {
        setFocusedIndex(-1);
      }
      setIsOpen(true);
      onOpen?.();
    },
    [disabled, activeIndex, filteredOptions.length, onOpen]
  );

  const closeList = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const clearMethod = useCallback(() => {
    setInputValue('');
    setSelected([]);
    setFocusedIndex(-1);
    onChange?.('');
    onClear?.();
  }, [onChange, onClear]);

  const selectOption = useCallback(
    (index: number) => {
      const option = filteredOptions[index];
      if (!option) return;
      // deselect everything and select this one
      setSelected([option.value]);
      setFocusedIndex(index);
      onChange?.(option.value);
      onSelect?.(option);
      setInputValue(getLabel(option.text ?? option.value));
      closeList();
    },
    [filteredOptions, onChange, onSelect, closeList]
  );

  const toggleOption = useCallback(
    (index: number) => {
      const option = filteredOptions[index];
      if (!option) return;
      const next = selectedSet.has(option.value)
        ? selected.filter((v) => v !== option.value)
        : [...selected, option.value];
      setSelected(next);
      onChange?.(next);
      onSelect?.(option);
      setInputValue('');
      setFocusedIndex(index);
      scrollToIndex(index);
    },
    [filteredOptions, selected, selectedSet, onChange, onSelect, scrollToIndex]
  );

  const onOptionClick = useCallback(
    (index: number) => {
      if (isMultiselectable) {
        toggleOption(index);
        inputRef.current?.focus();
      } else {
        selectOption(index);
      }
    },
    [isMultiselectable, toggleOption, selectOption]
  );

  const onToggleClick = useCallback(() => {
    if (isOpen) {
      closeList();
    } else {
      openList();
      requestAnimationFrame(() => scrollToIndex(focusedIndex));
    }
    inputRef.current?.focus();
  }, [isOpen, closeList, openList, focusedIndex, scrollToIndex]);

  const onInputClick = useCallback(() => {
    if (!isOpen) openList();
  }, [isOpen, openList]);

  const inlineComplete = useCallback((typed: string, option: ComboboxItemData) => {
    const full = getLabel(option.text ?? option.value);
    setInputValue(full);
    const input = inputRef.current;
    if (input) {
      input.value = full;
      input.setSelectionRange(typed.length, full.length);
    }
  }, []);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);
      if (!isMultiselectable) onChange?.(value);
      if (isDeletingRef.current) {
        setFocusedIndex(-1);
        if (!isMultiselectable && value === '' && value !== String(activeItem ? activeItem.text ?? activeItem.value : '')) {
          clearMethod();
        }
      }
      if (
        autocompleteMode === 'both' &&
        filteredOptions.length > 0 &&
        value.length > 0 &&
        !isDeletingRef.current &&
        normalizeString(filteredOptions[0].value).startsWith(normalizeString(value))
      ) {
        inlineComplete(value, filteredOptions[0]);
      }
      isDeletingRef.current = false;
      if (!isOpen) openList();
    },
    [isMultiselectable, onChange, activeItem, autocompleteMode, filteredOptions, inlineComplete, isOpen, clearMethod, openList]
  );

  const onBlur = useCallback(() => {
    setTimeout(() => {
      if (document.activeElement === inputRef.current) return;
      closeList();
      if (isMultiselectable) {
        setInputValue('');
      } else if (inputRef.current && inputRef.current.value && inputRef.current.value !== String(activeItem ? activeItem.text ?? activeItem.value : '')) {
        clearMethod();
      }
    }, 150);
  }, [closeList, isMultiselectable, activeItem, clearMethod]);

  const onKeydown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen && !e.altKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        openList();
        e.preventDefault();
        return;
      }

      const move = (dir: 1 | -1) => {
        const len = filteredOptions.length;
        if (len === 0) {
          setFocusedIndex(-1);
          return;
        }
        let next = focusedIndex + dir;
        if (next < 0) next = len - 1;
        if (next >= len) next = 0;
        setFocusedIndex(next);
        scrollToIndex(next);
      };

      switch (e.key) {
        case 'Backspace':
        case 'Delete':
          isDeletingRef.current = true;
          break;
        case 'ArrowDown':
          if (e.altKey) {
            if (!isOpen) openList(false);
            e.preventDefault();
            break;
          }
          move(1);
          e.preventDefault();
          break;
        case 'ArrowUp': {
          if (e.altKey) {
            if (isOpen) {
              if (focusedIndex >= 0) {
                if (isMultiselectable) toggleOption(focusedIndex);
                else selectOption(focusedIndex);
              }
              closeList();
            }
            e.preventDefault();
            break;
          }
          move(-1);
          e.preventDefault();
          break;
        }
        case 'Enter':
          if (isOpen && focusedIndex >= 0) {
            if (isMultiselectable) toggleOption(focusedIndex);
            else selectOption(focusedIndex);
          }
          e.preventDefault();
          break;
        case 'Escape': {
          e.preventDefault();
          if (isMultiselectable) {
            if (isOpen) closeList();
            setInputValue('');
            break;
          }
          if (isOpen) {
            closeList();
            const display = activeItem ? String(activeItem.text ?? activeItem.value) : '';
            if (display) {
              setInputValue(display);
              onChange?.(activeItem?.value);
            } else {
              clearMethod();
            }
          } else {
            clearMethod();
          }
          break;
        }
        case 'Tab':
          if (isOpen) {
            if (!isMultiselectable && focusedIndex >= 0) selectOption(focusedIndex);
            closeList();
          }
          break;
        case 'Home':
          if (isOpen && filteredOptions.length > 0) {
            setFocusedIndex(0);
            scrollToIndex(0);
            e.preventDefault();
          }
          break;
        case 'End':
          if (isOpen && filteredOptions.length > 0) {
            setFocusedIndex(filteredOptions.length - 1);
            scrollToIndex(filteredOptions.length - 1);
            e.preventDefault();
          }
          break;
      }
    },
    [
      isOpen,
      openList,
      closeList,
      isMultiselectable,
      toggleOption,
      selectOption,
      clearMethod,
      filteredOptions.length,
      focusedIndex,
      scrollToIndex,
      activeItem,
      onChange,
    ]
  );

  // Close when clicking outside the widget while open.
  useEffect(() => {
    if (!isOpen) return;
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (refs.reference.current?.contains(t)) return;
      if (refs.floating.current?.contains(t)) return;
      closeList();
    };
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [isOpen, refs, closeList]);

  const activeDescendantId =
    isOpen && focusedOption ? getOptionId(focusedOption, focusedIndex) : undefined;

  const renderOptionContent = (item: ComboboxItemData, index: number) => {
    const optionId = getOptionId(item, index);
    const selectedFlag = selectedSet.has(item.value);
    const focusedFlag = isOptionFocused(index);

    const optionProps = {
      id: optionId,
      'data-option-index': index,
      'aria-selected': selectedFlag ? 'true' : 'false',
      onClick: () => onOptionClick(index),
      classes: clsx(
        'flex items-center pr-base pl-lg py-base cursor-pointer hover:bg-primary-base hover:text-white',
        focusedFlag && 'bg-primary-base text-white',
        selectedFlag && isMultiselectable && 'bg-primary-base text-white',
        item.classes
      ),
    };

    const childItem = itemChildren[index];
    return childItem
      ? cloneElement(childItem, { ...optionProps, key: optionId })
      : (
          <li role="option" key={optionId} {...optionProps}>
            {item.html ? (
              <span dangerouslySetInnerHTML={{ __html: item.html }} />
            ) : item.text ? (
              item.text
            ) : (
              getLabel(item.value)
            )}
          </li>
        );
  };

  const inputClasses = clsx(
    'c-input',
    'c-combobox__input',
    'block',
    'mt-sm',
    'pr-10',
    'rounded-sm',
    'font-semibold',
    'placeholder-neutral-dark',
    'focus:border-black',
    'focus:shadow-outline-focus-input',
    'focus:ring-4',
    'focus:ring-warning-base',
    'disabled:bg-neutral-light',
    'disabled:border-neutral-base',
    hasError ? 'border-alert-base ring-2 ring-alert-base' : 'border-black',
    classes
  );

  return (
    <div className={clsx('c-form-group', className)} id={id} {...props}>
      {labelText || labelHtml ? (
        <div id={`${id}-label`}>
          <label htmlFor={id} className="block">
            {labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText}
          </label>
        </div>
      ) : null}

      {hintText || hintHtml ? (
        <div id={hintId}>
          {hintHtml ? <span dangerouslySetInnerHTML={{ __html: hintHtml }} /> : <p className="block text-neutral-dark">{hintText}</p>}
        </div>
      ) : null}

      {hasError ? (
        <div id={errorId}>
          {errorHtml ? <span dangerouslySetInnerHTML={{ __html: errorHtml }} /> : <p className="block font-semibold text-alert-base">{errorMessageText}</p>}
        </div>
      ) : null}

      <div className={clsx('c-combobox relative', classesContainer)}>
        {!isMultiselectable && name ? (
          <input
            type="hidden"
            name={name}
            value={inputValue ?? ''}
            data-module="c-combobox-hidden"
          />
        ) : null}
        <div className="c-combobox__input-wrapper relative">
          <input
            ref={(el) => {
              inputRef.current = el;
              refs.setReference(el);
            }}
            id={id}
            className={inputClasses}
            type="text"
            role="combobox"
            autoComplete="off"
            aria-autocomplete={autocompleteMode}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={`${id}-listbox`}
            aria-describedby={describedBy}
            aria-errormessage={hasError ? errorId : undefined}
            aria-invalid={hasError || undefined}
            aria-activedescendant={activeDescendantId}
            value={inputValue}
            placeholder={placeholder}
            disabled={disabled}
            onClick={onInputClick}
            onChange={onInputChange}
            onKeyDown={onKeydown}
            onBlur={onBlur}
          />
          <button
            id={`${id}-button`}
            type={type}
            tabIndex={-1}
            disabled={disabled}
            aria-label={toggleButtonLabel ?? labelText ?? undefined}
            aria-controls={`${id}-listbox`}
            aria-disabled={disabled}
            aria-expanded={isOpen}
            onClick={onToggleClick}
            className={clsx('c-combobox__toggle absolute inset-y-0 right-0 flex items-center pr-base', classes)}
          >
            <ChevronIcon />
          </button>
        </div>

        {isOpen ? (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="c-combobox__tooltip -ml-sm mt-2 border border-neutral-base shadow-md bg-white z-50"
          >
            {filteredOptions.length > 0 ? (
              <ul
                ref={listRef}
                id={`${id}-listbox`}
                role="listbox"
                aria-labelledby={`${id}-label`}
                aria-multiselectable={isMultiselectable ? 'true' : undefined}
                className="text-sm outline-none max-h-60 overflow-y-auto"
              >
                {filteredOptions.map((item, index) => renderOptionContent(item, index))}
              </ul>
            ) : (
              <div role="status" className="c-combobox__no-results">
                {noResultsText}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

Combobox.displayName = 'Combobox';
