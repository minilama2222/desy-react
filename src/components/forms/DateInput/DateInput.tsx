import {
  type FocusEvent,
  type ReactNode,
  useId,
} from 'react';
import { clsx } from 'clsx';
import { Fieldset, type LegendData } from '../Fieldset/Fieldset';
import { Hint } from '../Hint/Hint';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export interface ItemDateInputData {
  /** Item name (day, month, year) */
  name: string;
  /** CSS classes */
  classes?: string;
  /** Max length */
  maxlength?: number;
  /** Placeholder */
  placeholder?: string;
  /** Label text */
  labelText?: string;
  /** Value */
  value?: number | string;
  /** Autocomplete */
  autocomplete?: string;
  /** Disabled state */
  disabled?: boolean;
  /** ID */
  id?: string;
}

export interface DateInputDividerData {
  /** Divider text */
  text?: string;
  /** Divider HTML */
  html?: string;
  /** CSS classes */
  classes?: string;
}

export interface DateInputProps {
  /** Unique identifier */
  id?: string;
  /** Name prefix for the date fields */
  namePrefix?: string;
  /** Date parts configuration */
  items?: ItemDateInputData[];
  /** Divider between fields */
  divider?: DateInputDividerData;
  /** CSS classes for the field wrapper */
  classes?: string;
  /** Legend text */
  legendText?: string;
  /** Legend data */
  legendData?: LegendData;
  /** Heading level */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Hint text */
  hintText?: string;
  /** Error message text */
  errorMessageText?: string;
  /** Error message HTML */
  errorMessageHtml?: string;
  /** Form group classes */
  formGroupClasses?: string;
  /** Label is page heading */
  labelIsPageHeading?: boolean;
  /** Child content (custom form controls) */
  children?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Change event handler */
  onChange?: (value: { day?: number; month?: number; year?: number }) => void;
  /** Focus event handler */
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Blur event handler */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const DEFAULT_ITEMS: ItemDateInputData[] = [
  { name: 'day', labelText: 'Día', classes: 'w-14', maxlength: 2, placeholder: 'DD' },
  { name: 'month', labelText: 'Mes', classes: 'w-14', maxlength: 2, placeholder: 'MM' },
  { name: 'year', labelText: 'Año', classes: 'w-20', maxlength: 4, placeholder: 'AAAA' },
];

const DEFAULT_DIVIDER: DateInputDividerData = {
  text: '/',
  classes: 'text-neutral-dark',
};

/**
 * DateInput component - date input with day/month/year fields.
 */
export function DateInput({
  id,
  namePrefix,
  items,
  divider = DEFAULT_DIVIDER,
  classes,
  legendText,
  legendData,
  headingLevel,
  hintText,
  errorMessageText,
  errorMessageHtml,
  formGroupClasses,
  labelIsPageHeading,
  children,
  disabled,
  onChange,
  onFocus,
  onBlur,
}: DateInputProps) {
  const generatedId = useId();
  const resolvedId = id || generatedId;
  const hintId = hintText ? `${resolvedId}-hint` : undefined;
  const errorId = `${resolvedId}-error`;

  const displayItems = items || DEFAULT_ITEMS;

  const getFieldName = (name: string) => (namePrefix ? `${namePrefix}-${name}` : name);
  const getFieldId = (name: string, itemId?: string) => itemId || `${resolvedId}-${name}`;

  const handleChange = (itemName: string, val: string) => {
    const parsed = parseInt(val, 10);
    const newValue = {
      day: itemName === 'day' ? (isNaN(parsed) ? undefined : parsed) : undefined,
      month: itemName === 'month' ? (isNaN(parsed) ? undefined : parsed) : undefined,
      year: itemName === 'year' ? (isNaN(parsed) ? undefined : parsed) : undefined,
    };
    onChange?.(newValue);
  };

  const hasFieldset = legendText || legendData || labelIsPageHeading;
  const hasError = Boolean(errorMessageText || errorMessageHtml);

  const dividerContent = divider?.html ? (
    <span dangerouslySetInnerHTML={{ __html: divider.html }} />
  ) : (
    <span>{divider?.text || '/'}</span>
  );

  const dateInputsContent = (
    <div className={clsx('flex', classes)}>
      {displayItems.map((item, index) => (
        <div key={item.name} className={clsx(index > 0 ? 'mr-base' : '')}>
          {index > 0 && divider && (
            <span
              role="separator"
              className={clsx('inline-block mr-base', divider.classes)}
              aria-hidden="true"
            >
              {dividerContent}
            </span>
          )}
          <div className={clsx(item.classes)}>
            <label htmlFor={getFieldId(item.name, item.id)} className="block text-sm mb-xs font-semibold">
              {item.labelText || item.name.toUpperCase()}
            </label>
            <input
              id={getFieldId(item.name, item.id)}
              name={getFieldName(item.name)}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={item.maxlength}
              placeholder={item.placeholder}
              disabled={disabled || item.disabled}
              defaultValue={item.value}
              className={clsx('c-input block mt-sm mb-0', hasError && 'border-alert-base')}
              aria-invalid={hasError || undefined}
              aria-errormessage={hasError ? errorId : undefined}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => handleChange(item.name, e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={clsx('c-form-group', hasError && 'c-form-group--error', formGroupClasses)}>
      {hasFieldset && (
        <Fieldset
          legendData={
            legendData || (legendText ? { text: legendText, headingLevel: headingLevel || 1 } : undefined)
          }
          errorId={errorId}
          describedBy={hintId}
        >
          {hintText && <Hint text={hintText} />}
          {hasError && <ErrorMessage text={errorMessageText} html={errorMessageHtml} />}
          {dateInputsContent}
          {children}
        </Fieldset>
      )}
      {!hasFieldset && (
        <>
          {hintText && <Hint id={hintId} text={hintText} />}
          {hasError && <ErrorMessage id={errorId} text={errorMessageText} html={errorMessageHtml} />}
          {dateInputsContent}
          {children}
        </>
      )}
    </div>
  );
}
