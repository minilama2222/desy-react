import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Custom CSS classes for the input element */
  className?: string;
  /** CSS classes for the form group wrapper */
  formGroupClasses?: string;
  /** Input name attribute */
  name?: string;
  /** Input type attribute (text, number, email, etc.) */
  type?: string;
  /** Unique identifier */
  id?: string;
  /** Described by IDs (hint, error) */
  describedBy?: string;
  /** Pattern for validation */
  pattern?: string;
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
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur event handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Input event handler */
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  /** Change event handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function getHintId(id?: string): string {
  return id ? `${id}-hint` : '';
}

function getErrorId(errorId?: string, id?: string): string {
  return errorId || (id ? `${id}-error` : '');
}

/**
 * Input component - a form input with optional label, hint, and error message.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      formGroupClasses,
      name,
      type = 'text',
      id,
      describedBy,
      pattern,
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

    const inputClasses = clsx(
      'c-input',
      'block',
      'mt-sm',
      'border-black',
      'rounded-sm',
      'font-semibold',
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

    return (
      <div className={clsx('c-form-group', formGroupClasses)}>
        {/* Label */}
        {(labelText || labelHtml) && (
          <label
            htmlFor={id}
            className={clsx('block', labelClasses)}
          >
            {labelIsPageHeading ? (
              <>
                {labelHeadingLevel === 1 && <h1>{labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText}</h1>}
                {labelHeadingLevel === 2 && <h2>{labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText}</h2>}
                {labelHeadingLevel === 3 && <h3>{labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText}</h3>}
                {labelHeadingLevel === 4 && <h4>{labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText}</h4>}
                {labelHeadingLevel === 5 && <h5>{labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText}</h5>}
              </>
            ) : (
              labelHtml ? <span dangerouslySetInnerHTML={{ __html: labelHtml }} /> : labelText
            )}
          </label>
        )}

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

        {/* Input */}
        {!children && (
          <input
            ref={ref}
            id={id || 'input'}
            name={name}
            type={type}
            value={value}
            disabled={disabled}
            className={inputClasses}
            pattern={pattern}
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

Input.displayName = 'Input';
