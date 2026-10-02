import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';
import { Label } from '../Label/Label';
import { Hint } from '../Hint/Hint';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onInput'> {
  /** Unique identifier for the field (used to wire label/hint/error ids) */
  id?: string;
  /** Custom CSS classes for the form group wrapper */
  className?: string;
  /** Additional CSS classes (design-system API style) */
  classes?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Label text content */
  labelText?: string;
  /** Label HTML content (alternative to labelText) */
  labelHtml?: string;
  /** Label CSS classes */
  labelClasses?: string;
  /** Hint text content */
  hintText?: string;
  /** Hint HTML content (alternative to hintText) */
  hintHtml?: string;
  /** Error message text content */
  errorMessageText?: string;
  /** Error message HTML content (alternative to errorMessageText) */
  errorHtml?: string;
  /** The form control (input, select...) rendered after label/hint/error */
  children?: ReactNode;
}

/**
 * FormField component - base wrapper for form controls.
 * Mirrors the Angular FormFieldComponent: renders the label, hint and
 * error message scaffolding around the control, wiring accessible ids
 * (`<id>-hint`, `<id>-error`).
 */
export function FormField({
  id,
  className,
  classes,
  labelText,
  labelHtml,
  labelClasses,
  hintText,
  hintHtml,
  errorMessageText,
  errorHtml,
  children,
  ...props
}: FormFieldProps) {
  const hasLabel = !!(labelText || labelHtml);
  const hasHint = !!(hintText || hintHtml);
  const hasError = !!(errorMessageText || errorHtml);

  return (
    <div className={clsx('c-form-group', classes, className)} {...props}>
      {hasLabel && (
        <div id={id ? `${id}-label` : undefined}>
          <Label htmlFor={id} text={labelText} html={labelHtml} className={labelClasses} />
        </div>
      )}
      {hasHint && (
        <Hint id={id ? `${id}-hint` : undefined} text={hintText} html={hintHtml} />
      )}
      {hasError && (
        <ErrorMessage id={id ? `${id}-error` : undefined} text={errorMessageText} html={errorHtml} />
      )}
      {children}
    </div>
  );
}
