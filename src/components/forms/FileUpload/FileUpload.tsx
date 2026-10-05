import {
  type InputHTMLAttributes,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
  useId,
} from 'react';
import { clsx } from 'clsx';
import { Label } from '../Label/Label';
import { Hint } from '../Hint/Hint';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Unique identifier */
  id?: string;
  /** Input name */
  name?: string;
  /** Accepted file types (e.g., '.pdf,.doc,.docx') */
  accept?: string;
  /** Whether multiple files can be selected; when true `onChange` receives a `File[]`, otherwise a single `File | null`. Default: false. */
  multiple?: boolean;
  /** CSS classes for the file input */
  className?: string;
  /** CSS classes for the form group */
  formGroupClasses?: string;
  /** Hint text */
  hintText?: string;
  /** Hint HTML */
  hintHtml?: string;
  /** Error message text */
  errorMessageText?: string;
  /** Error message HTML */
  errorMessageHtml?: string;
  /** Visually hidden text for error */
  errorVisuallyHiddenText?: string;
  /** Label text */
  labelText?: string;
  /** Label HTML */
  labelHtml?: string;
  /** Label is page heading */
  labelIsPageHeading?: boolean;
  /** Label heading level */
  labelHeadingLevel?: 1 | 2 | 3 | 4 | 5;
  /** IDs for aria-describedby */
  describedBy?: string;
  /** Hint ID */
  hintId?: string;
  /** Error ID */
  errorId?: string;
  /** Child components (Label, Hint, ErrorMessage) */
  children?: ReactNode;
  /** Focus event handler */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Blur event handler */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Change event handler; `file` is a `File[]` when `multiple` is true, otherwise a single `File | null`. */
  onChange?: (event: ChangeEvent<HTMLInputElement>, file: File | File[] | null) => void;
}

const FILE_INPUT_CLASSES = [
  'mt-sm',
  'p-xs',
  'file:mr-base',
  'file:inline-flex',
  'file:items-baseline',
  'file:px-3',
  'file:py-3',
  'file:bg-white',
  'file:border',
  'file:border-solid',
  'file:border-primary-base',
  'file:rounded-sm',
  'file:align-baseline',
  'file:font-semibold',
  'file:text-primary-base',
  'file:transition-all',
  'file:duration-100',
  'file:ease-out',
  'file:whitespace-nowrap',
  'file:cursor-pointer',
  'file:focus:bg-warning-base',
  'file:focus:border-warning-base',
  'file:focus:shadow-outline-black',
  'file:focus:text-black',
  'file:focus:outline-hidden',
  'file:hover:bg-neutral-light',
  'file:hover:border-primary-base',
  'file:hover:text-primary-base',
].join(' ');

/**
 * FileUpload component - a styled file input with label, hint, and error message support.
 */
export function FileUpload({
  id,
  name,
  accept,
  multiple,
  className,
  formGroupClasses,
  hintText,
  hintHtml,
  errorMessageText,
  errorMessageHtml,
  errorVisuallyHiddenText,
  labelText,
  labelHtml,
  labelIsPageHeading,
  labelHeadingLevel,
  describedBy,
  hintId,
  errorId,
  children,
  disabled,
  onFocus,
  onBlur,
  onChange,
  ...props
}: FileUploadProps) {
  const generatedId = useId();
  const resolvedId = id || generatedId;
  const resolvedHintId = hintId || (hintText || hintHtml ? `${resolvedId}-hint` : undefined);
  const resolvedErrorId = errorId || `${resolvedId}-error`;
  const hasErrors = Boolean(errorMessageText || errorMessageHtml);

  const ariaDescribedBy = [describedBy, resolvedHintId].filter(Boolean).join(' ') || undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const file = multiple ? files : files[0] || null;
    onChange?.(e, file);
  };

  return (
    <div className={clsx('c-form-group', hasErrors && 'c-form-group--error', formGroupClasses)}>
      {(labelText || labelHtml) && (
        <Label
          htmlFor={resolvedId}
          text={labelText}
          html={labelHtml}
          isPageHeading={labelIsPageHeading}
          headingLevel={labelHeadingLevel}
        />
      )}
      {children}
      {(hintText || hintHtml) && (
        <Hint id={resolvedHintId} text={hintText} html={hintHtml} />
      )}
      {hasErrors && (
        <ErrorMessage
          id={resolvedErrorId}
          text={errorMessageText}
          html={errorMessageHtml}
          visuallyHiddenText={errorVisuallyHiddenText}
        />
      )}
      <input
        id={resolvedId}
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className={clsx(FILE_INPUT_CLASSES, hasErrors && 'c-file-upload--error', className)}
        aria-describedby={ariaDescribedBy}
        aria-errormessage={hasErrors ? resolvedErrorId : undefined}
        aria-invalid={hasErrors || undefined}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}
