import { forwardRef, type ReactNode, type SelectHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface SelectOption {
  /** Unique identifier */
  id?: string;
  /** Option value */
  value: string | number;
  /** Option text */
  text: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Whether the option is selected by default */
  selected?: boolean;
  /** HTML content */
  html?: string;
}

export interface SelectOptionGroup {
  /** Group label */
  label: string;
  /** Options in the group */
  items: SelectOption[];
  /** Whether the group is disabled */
  disabled?: boolean;
}

export type SelectItem = SelectOption | SelectOptionGroup;

function isOptionGroup(item: SelectItem): item is SelectOptionGroup {
  return 'items' in item && Array.isArray((item as SelectOptionGroup).items);
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  /** Custom CSS classes */
  className?: string;
  /** CSS classes for the form group wrapper */
  formGroupClasses?: string;
  /** Select name attribute */
  name?: string;
  /** Unique identifier */
  id?: string;
  /** Described by IDs (hint, error) */
  describedBy?: string;
  /** CSS classes for the select element */
  classes?: string;
  /** Hint text content */
  hintText?: string;
  /** Hint HTML content */
  hintHtml?: string;
  /** Error message text content */
  errorMessageText?: string;
  /** Error message HTML content */
  errorMessageHtml?: string;
  /** Visually hidden text for error (default: 'Error') */
  errorVisuallyHiddenText?: string;
  /** Label text content */
  labelText?: string;
  /** Label HTML content */
  labelHtml?: string;
  /** Label is page heading */
  labelIsPageHeading?: boolean;
  /** Label heading level */
  labelHeadingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Label CSS classes */
  labelClasses?: string;
  /** Hint CSS classes */
  hintClasses?: string;
  /** Error message CSS classes */
  errorMessageClasses?: string;
  /** Hint ID */
  hintId?: string;
  /** Child components (Label, Hint, ErrorMessage) */
  children?: ReactNode;
  /** Options array (alternative to children) */
  items?: SelectItem[];
  /** Currently selected value */
  value?: string | number;
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /** Input event handler */
  onInput?: (event: React.FormEvent<HTMLSelectElement>) => void;
  /** Change event handler */
  onChange?: (value: string | number, event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function getHintId(id?: string): string {
  return id ? `${id}-hint` : '';
}

function getErrorId(id?: string): string {
  return id ? `${id}-error` : '';
}

/**
 * Select component - a dropdown select with optional label, hint, and error message.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      formGroupClasses,
      name,
      id,
      describedBy,
      classes,
      hintText,
      hintHtml,
      errorMessageText,
      errorMessageHtml,
      errorVisuallyHiddenText,
      labelText,
      labelHtml,
      labelIsPageHeading,
      labelHeadingLevel,
      labelClasses,
      hintClasses,
      errorMessageClasses,
      hintId,
      children,
      items,
      value,
      disabled,
      onFocus,
      onBlur,
      onInput,
      onChange,
      ...props
    },
    ref
  ) => {
    const hintIdResult = hintId || getHintId(id);
    const errorIdResult = getErrorId(id);
    const hasError = Boolean(errorMessageText || errorMessageHtml);
    const ariaDescribedBy = [describedBy, hintIdResult, errorIdResult].filter(Boolean).join(' ') || undefined;

    const selectClasses = clsx(
      'c-select',
      'block',
      'mt-sm',
      'transition',
      'duration-150',
      'ease-in-out',
      'border-black',
      'rounded-sm',
      'font-semibold',
      'focus:border-black',
      'focus:shadow-outline-focus-input',
      'focus:ring-4',
      'focus:ring-warning-base',
      'disabled:bg-neutral-light',
      'disabled:border-neutral-base',
      hasError && 'c-select--error border-alert-base ring-2 ring-alert-base',
      classes,
      className
    );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      const numVal = !isNaN(Number(val)) && val !== '' ? Number(val) : val;
      onChange?.(numVal as string | number, e);
    };

    const renderLabel = () => {
      if (!labelText && !labelHtml) return null;
      
      const labelContent = labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText;
      
      if (labelIsPageHeading) {
        const HeadingTag = `h${labelHeadingLevel || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
        return <HeadingTag className={labelClasses}>{labelContent}</HeadingTag>;
      }
      
      return <label htmlFor={id} className={clsx('block', labelClasses)}>{labelContent}</label>;
    };

    const renderOption = (option: SelectOption, index: number) => {
      const optValue = option.value?.toString() ?? '';
      const isSelected = value !== undefined 
        ? optValue === value?.toString()
        : option.selected;

      return (
        <option
          key={option.id || index}
          id={option.id}
          value={optValue}
          disabled={option.disabled}
          selected={isSelected}
        >
          {option.html ? <span dangerouslySetInnerHTML={{ __html: option.html }} /> : option.text}
        </option>
      );
    };

    const renderSelectContent = () => {
      if (children) return children;
      if (!items) return null;

      return items.map((item, index) => {
        if (isOptionGroup(item)) {
          return (
            <optgroup key={index} label={item.label} disabled={item.disabled}>
              {item.items.map((subItem, subIndex) => renderOption(subItem, subIndex))}
            </optgroup>
          );
        }
        return renderOption(item, index);
      });
    };

    return (
      <div className={clsx('c-form-group', formGroupClasses)}>
        {/* Label */}
        {renderLabel()}

        {/* Hint */}
        {(hintText || hintHtml) && (
          <p
            id={hintIdResult}
            className={clsx('block', 'text-neutral-dark', hintClasses)}
          >
            {hintHtml ? <span dangerouslySetInnerHTML={{ __html: hintHtml }} /> : hintText}
          </p>
        )}

        {/* Error Message */}
        {(errorMessageText || errorMessageHtml) && (
          <p
            id={errorIdResult}
            className={clsx('block', 'font-semibold', 'text-alert-base', errorMessageClasses)}
          >
            <span className="sr-only">{errorVisuallyHiddenText || 'Error'}: </span>
            {errorMessageHtml ? <span dangerouslySetInnerHTML={{ __html: errorMessageHtml }} /> : errorMessageText}
          </p>
        )}

        {/* Select */}
        <select
          ref={ref}
          id={id}
          name={name}
          className={selectClasses}
          disabled={disabled}
          aria-describedby={ariaDescribedBy}
          aria-invalid={hasError || undefined}
          aria-errormessage={errorIdResult || undefined}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          onChange={handleChange}
          {...props}
        >
          {renderSelectContent()}
        </select>
      </div>
    );
  }
);

Select.displayName = 'Select';
