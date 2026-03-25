import { forwardRef, type InputHTMLAttributes, type ButtonHTMLAttributes, type ReactNode, type FormEvent } from 'react';
import { clsx } from 'clsx';

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Custom CSS classes for the input element */
  className?: string;
  /** CSS classes for the form group wrapper */
  formGroupClasses?: string;
  /** Unique identifier */
  id?: string;
  /** Search input name (defaults to id) */
  name?: string;
  /** Described by IDs */
  describedBy?: string;
  /** CSS classes for the input */
  classes?: string;
  /** CSS classes for the button */
  buttonClasses?: string;
  /** Number of search results (for accessibility) */
  searchResultsNumber?: number;
  /** Error message text content */
  errorMessageText?: string;
  /** Error message HTML content */
  errorMessageHtml?: string;
  /** Visually hidden text for error */
  errorVisuallyHiddenText?: string;
  /** Error message CSS classes */
  errorMessageClasses?: string;
  /** Label text content */
  labelText?: string;
  /** Label HTML content */
  labelHtml?: string;
  /** Label CSS classes */
  labelClasses?: string;
  /** Label is page heading */
  labelIsPageHeading?: boolean;
  /** Label heading level */
  labelHeadingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Child components (Button) */
  children?: ReactNode;
  /** Search value */
  value?: string;
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Input event handler */
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
  /** Change event handler */
  onChange?: (value: string) => void;
  /** Click event handler for the search button */
  onSearchClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SearchButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Button text (for screen readers) */
  label?: string;
  /** CSS classes */
  classes?: string;
  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function getErrorId(id?: string): string {
  return id ? `${id}-error` : '';
}

/**
 * Search button component - a button with a search icon
 */
export const SearchButton = forwardRef<HTMLButtonElement, SearchButtonProps>(
  ({ label = 'Search', classes, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="submit"
        className={clsx(
          'absolute top-0 right-0 m-sm p-0.5 text-primary-base hover:text-primary-dark',
          'focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus',
          classes
        )}
        aria-label={label}
        onClick={onClick}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1.375em"
          height="1.375em"
          aria-hidden="true"
        >
          <path
            d="M23.498 23.487a1.713 1.713 0 000-2.421l-4.572-4.575a.43.43 0 01-.062-.539 10.283 10.283 0 10-2.911 2.911.43.43 0 01.539.055l4.574 4.574a1.712 1.712 0 002.433-.005zM3.451 10.289a6.85 6.85 0 116.85 6.85 6.85 6.85 0 01-6.85-6.85z"
            fill="currentColor"
          />
        </svg>
      </button>
    );
  }
);

SearchButton.displayName = 'SearchButton';

/**
 * SearchBar component - a search input with optional button and accessibility features.
 */
export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      formGroupClasses,
      id,
      name,
      describedBy,
      classes,
      buttonClasses,
      searchResultsNumber,
      errorMessageText,
      errorMessageHtml,
      errorVisuallyHiddenText,
      errorMessageClasses,
      labelText,
      labelHtml,
      labelClasses,
      labelIsPageHeading,
      labelHeadingLevel,
      children,
      value = '',
      disabled,
      onFocus,
      onBlur,
      onInput,
      onChange,
      onSearchClick,
      ...props
    },
    ref
  ) => {
    const hasButton = Boolean(children);
    const hasError = Boolean(errorMessageText || errorMessageHtml);
    const errorIdResult = getErrorId(id);
    const inputName = name || id;
    const inputId = id || 'search';

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      onInput?.(e);
      onChange?.(target.value);
    };

    const inputClasses = clsx(
      'c-input',
      'block',
      hasError ? 'border-alert-base ring-2 ring-alert-base' : 'border-black',
      'rounded-sm',
      'font-semibold',
      'placeholder-neutral-dark',
      'focus:border-black',
      'focus:shadow-outline-focus-input',
      'focus:ring-4',
      'focus:ring-warning-base',
      'disabled:bg-neutral-light',
      'disabled:border-neutral-base',
      !hasButton && 'pr-12 w-full',
      classes,
      className
    );

    const renderLabel = () => {
      if (!labelText && !labelHtml) return null;
      
      const labelContent = labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText;
      
      if (labelIsPageHeading) {
        const HeadingTag = `h${labelHeadingLevel || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
        return <HeadingTag className={labelClasses}>{labelContent}</HeadingTag>;
      }
      
      return <span className={labelClasses}>{labelContent}</span>;
    };

    return (
      <div className={clsx('c-form-group', hasError && 'c-form-group--error', formGroupClasses)}>
        {/* Label */}
        {(labelText || labelHtml) && (
          <label
            htmlFor={inputId}
            className={clsx('sr-only', labelClasses)}
          >
            {renderLabel()}
          </label>
        )}

        {/* Search Results Count for Screen Readers */}
        {value && searchResultsNumber !== undefined && (
          <div role="alert" aria-live="assertive">
            <p className="sr-only">
              {searchResultsNumber > 0
                ? `Se han encontrado ${searchResultsNumber} resultados`
                : 'No se han encontrado resultados'}
            </p>
          </div>
        )}

        {/* Search Input Container */}
        <div className={clsx('relative', hasButton && 'flex flex-wrap items-end gap-sm')}>
          <input
            ref={ref}
            id={inputId}
            name={inputName}
            type="search"
            value={value}
            disabled={disabled}
            className={inputClasses}
            aria-describedby={describedBy}
            aria-errormessage={errorIdResult || undefined}
            aria-invalid={hasError || undefined}
            onFocus={onFocus}
            onBlur={onBlur}
            onInput={handleInput}
            {...props}
          />

          {/* Search Button (if children not provided) */}
          {!children && (
            <SearchButton
              label="Buscar"
              classes={buttonClasses}
              disabled={disabled}
              onClick={onSearchClick}
            />
          )}

          {/* Custom Button (if children provided) */}
          {children}
        </div>

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
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';
