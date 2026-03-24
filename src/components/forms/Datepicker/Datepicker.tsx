import {
  type InputHTMLAttributes,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
  useId,
} from 'react';
import { clsx } from 'clsx';

export interface DatepickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Unique identifier */
  id?: string;
  /** Input name */
  name?: string;
  /** Input type (text or date) */
  type?: string;
  /** CSS classes for container */
  containerClasses?: string;
  /** CSS classes for dropdown */
  dropdownClasses?: string;
  /** CSS classes for the form group */
  formGroupClasses?: string;
  /** CSS classes for the input */
  classes?: string;
  /** Described by IDs */
  describedBy?: string;
  /** Error ID */
  errorId?: string;
  /** Pattern for validation */
  pattern?: string;
  /** Hint text */
  hintText?: string;
  /** Error message text */
  errorMessageText?: string;
  /** Child components (Label, Hint, ErrorMessage) */
  children?: ReactNode;
  /** Value */
  value?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Autocomplete attribute */
  autoComplete?: string;
  /** Focus event handler */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Blur event handler */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Change event handler */
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
}

/**
 * Datepicker component - a date input with a calendar dropdown trigger.
 * Uses native HTML5 date input for calendar functionality.
 */
export function Datepicker({
  id,
  name,
  type = 'text',
  containerClasses,
  dropdownClasses,
  formGroupClasses,
  classes,
  describedBy,
  errorId,
  pattern,
  hintText,
  errorMessageText,
  children,
  value,
  disabled,
  autoComplete,
  placeholder,
  onFocus,
  onBlur,
  onChange,
  ...props
}: DatepickerProps) {
  const generatedId = useId();
  const resolvedId = id || generatedId;
  const hasError = Boolean(errorMessageText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e, e.target.value);
  };

  return (
    <div className={clsx('c-datepicker', containerClasses)}>
      <div className={clsx('c-form-group', hasError && 'c-form-group--error', formGroupClasses)}>
        {children}
        <div className="relative">
          <input
            id={resolvedId}
            name={name}
            type="date"
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete={autoComplete}
            pattern={pattern}
            className={clsx(
              'c-input block mt-sm border-black rounded-sm font-semibold placeholder-neutral-dark',
              'focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-warning-base',
              'disabled:bg-neutral-light disabled:border-neutral-base pr-16 w-full',
              hasError && 'border-alert-base ring-2 ring-alert-base',
              classes
            )}
            aria-describedby={[describedBy, hintText ? `${resolvedId}-hint` : undefined, errorId].filter(Boolean).join(' ') || undefined}
            aria-errormessage={errorId || (hasError ? `${resolvedId}-error` : undefined)}
            aria-invalid={hasError || undefined}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={handleChange}
            {...props}
          />
          <div className="absolute top-0 right-0">
            <button
              type="button"
              id={`${resolvedId}-dropdown`}
              className={clsx(
                'c-dropdown--transparent',
                dropdownClasses,
                'p-sm text-neutral-dark hover:text-primary-base focus:outline-hidden'
              )}
              aria-haspopup="dialog"
              aria-label="Seleccionar fecha con una tabla de calendario"
              disabled={disabled}
              onClick={() => {
                const input = document.getElementById(resolvedId) as HTMLInputElement;
                input?.showPicker?.();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                width="1.375em"
                height="1.375em"
                aria-hidden="true"
              >
                <g>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.5 1.5c0 -0.552285 -0.44772 -1 -1 -1s-1 0.447715 -1 1v1H2C1.17157 2.5 0.5 3.17157 0.5 4v8c0 0.8284 0.67157 1.5 1.5 1.5h10c0.8284 0 1.5 -0.6716 1.5 -1.5V4c0 -0.82843 -0.6716 -1.5 -1.5 -1.5h-0.5v-1c0 -0.552285 -0.4477 -1 -1 -1 -0.55229 0 -1 0.447715 -1 1v1h-5v-1Zm-1 5.75c0.55228 0 1 -0.44772 1 -1s-0.44772 -1 -1 -1 -1 0.44772 -1 1 0.44772 1 1 1Zm3.5 0c0.55228 0 1 -0.44772 1 -1s-0.44772 -1 -1 -1 -1 0.44772 -1 1 0.44772 1 1 1Zm-2.5 3c0 0.5523 -0.44772 1 -1 1s-1 -0.4477 -1 -1c0 -0.55229 0.44772 -1 1 -1s1 0.44771 1 1Zm2.5 1c0.55228 0 1 -0.4477 1 -1 0 -0.55229 -0.44772 -1 -1 -1s-1 0.44771 -1 1c0 0.5523 0.44772 1 1 1Zm4.5 -5c0 0.55228 -0.4477 1 -1 1 -0.55229 0 -1 -0.44772 -1 -1s0.44771 -1 1 -1c0.5523 0 1 0.44772 1 1Z"
                    clipRule="evenodd"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
