import { forwardRef, type TextareaHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Custom CSS classes for the textarea element */
  className?: string;
  /** CSS classes for the form group wrapper */
  formGroupClasses?: string;
  /** Textarea name attribute */
  name?: string;
  /** Unique identifier */
  id?: string;
  /** Number of visible rows */
  rows?: number;
  /** Described by IDs (hint, error) */
  describedBy?: string;
  /** Maximum length */
  maxlength?: number;
  /** Error ID for aria-describedby */
  errorId?: string;
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
  /** Focus event handler */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Input event handler */
  onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function getHintId(id?: string): string {
  return id ? `${id}-hint` : '';
}

function getErrorId(errorId?: string, id?: string): string {
  return errorId || (id ? `${id}-error` : '');
}

const DEFAULT_ROWS = 5;

/**
 * Textarea component - a multi-line text input with optional label, hint, and error message.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      formGroupClasses,
      name,
      id,
      rows = DEFAULT_ROWS,
      describedBy,
      maxlength,
      errorId,
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
    const errorIdResult = getErrorId(errorId, id);
    const hasError = Boolean(errorMessageText || errorMessageHtml);
    const ariaDescribedBy = [describedBy, hintIdResult, errorIdResult].filter(Boolean).join(' ') || undefined;

    const textareaClasses = clsx(
      'block',
      'mt-sm',
      'px-base',
      'py-sm',
      'border-black',
      'rounded-sm',
      'font-semibold',
      'leading-normal',
      'placeholder-neutral-dark',
      'focus:border-black',
      'focus:shadow-outline-focus-input',
      'focus:ring-4',
      'focus:ring-warning-base',
      'disabled:bg-neutral-light',
      'disabled:border-neutral-base',
      hasError && 'border-alert-base ring-2 ring-alert-base',
      className
    );

    const renderLabel = () => {
      if (!labelText && !labelHtml) return null;
      
      const labelContent = labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText;
      
      if (labelIsPageHeading) {
        const HeadingTag = `h${labelHeadingLevel || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
        return <HeadingTag className={labelClasses}>{labelContent}</HeadingTag>;
      }
      
      return <label htmlFor={id} className={clsx('block', labelClasses)}>{labelContent}</label>;
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

        {/* Children (for compound component pattern) */}
        {children}

        {/* Textarea */}
        {!children && (
          <textarea
            ref={ref}
            id={id}
            name={name}
            rows={rows}
            value={value}
            disabled={disabled}
            className={textareaClasses}
            maxLength={maxlength}
            aria-describedby={ariaDescribedBy}
            aria-invalid={hasError || undefined}
            aria-errormessage={errorIdResult || undefined}
            onFocus={onFocus}
            onBlur={onBlur}
            onInput={onInput}
            onChange={onChange}
            {...props}
          />
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
