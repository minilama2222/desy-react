import { type HTMLAttributes, type ReactNode, useId } from 'react';
import { clsx } from 'clsx';

export interface InputGroupItemDivider {
  /** Divider text */
  text?: string;
  /** Divider HTML */
  html?: string;
  /** Divider CSS classes */
  classes?: string;
}

export interface InputGroupItem {
  /** Item ID */
  id?: string;
  /** Item name */
  name: string;
  /** Item value */
  value?: string;
  /** Item label text */
  labelText?: string;
  /** Item label HTML */
  labelHtml?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input type */
  type?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Item CSS classes */
  classes?: string;
  /** Divider configuration */
  divider?: InputGroupItemDivider;
  /** Whether this is a select item */
  isSelect?: boolean;
  /** Select options */
  selectItems?: { text?: string; value: string }[];
}

export interface InputGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Unique identifier */
  id?: string;
  /** Input group items */
  items?: InputGroupItem[];
  /** Name prefix for all inputs */
  namePrefix?: string;
  /** Legend text for fieldset */
  legendText?: string;
  /** Legend HTML */
  legendHtml?: string;
  /** Fieldset configuration */
  fieldsetData?: { text?: string; html?: string };
  /** CSS classes for the fieldset */
  fieldsetClasses?: string;
  /** Error message */
  errorMessage?: string;
  /** Hint text */
  hint?: string;
  /** Form layout direction */
  direction?: 'row' | 'column';
  /** Called when input value changes */
  onChange?: (name: string, value: string) => void;
  /** Called when all items change */
  onChangeAll?: (values: Record<string, string>) => void;
  /** CSS classes for the container */
  className?: string;
  /** Label component slot */
  labelComponent?: ReactNode;
  /** Hint component slot */
  hintComponent?: ReactNode;
  /** Error message component slot */
  errorMessageComponent?: ReactNode;
}

/** InputGroupItemDivider component */
function InputGroupDivider({ divider }: { divider?: InputGroupItemDivider }) {
  if (!divider) return null;
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={clsx('flex items-center px-2', divider.classes)}
    >
      {divider.html ? (
        <span dangerouslySetInnerHTML={{ __html: divider.html }} />
      ) : divider.text ? (
        <span>{divider.text}</span>
      ) : null}
    </div>
  );
}

/**
 * InputGroup component - groups multiple inputs together in a fieldset.
 * Supports inputs, selects, and dividers between items.
 */
export function InputGroup({
  id,
  items = [],
  namePrefix,
  legendText,
  legendHtml,
  errorMessage,
  hint,
  direction = 'row',
  onChange,
  onChangeAll,
  className,
}: InputGroupProps) {
  const generatedId = useId();
  const fieldsetId = id || `input-group-${generatedId}`;

  const handleChange = (name: string, value: string) => {
    onChange?.(name, value);
    if (onChangeAll) {
      const values: Record<string, string> = {};
      items.forEach((itm) => {
        const inputName = namePrefix ? `${namePrefix}-${itm.name}` : itm.name;
        const input = document.querySelector<HTMLInputElement | HTMLSelectElement>(
          `#${fieldsetId} [name="${inputName}"]`
        );
        if (input) {
          values[itm.name] = input.value;
        }
      });
      onChangeAll(values);
    }
  };

  const getItemName = (item: InputGroupItem): string => {
    return namePrefix ? `${namePrefix}-${item.name}` : item.name;
  };

  return (
    <div
      id={fieldsetId}
      className={clsx('c-form-group', errorMessage && 'c-form-group--error', className)}
    >
      <fieldset
        role="group"
        aria-describedby={hint ? `${fieldsetId}-hint` : undefined}
        onChange={(e) => {
          const target = e.target as unknown as HTMLInputElement | HTMLSelectElement;
          if (target && 'name' in target && target.name) {
            handleChange(target.name, (target as HTMLInputElement | HTMLSelectElement).value);
          }
        }}
      >
      {/* Legend */}
      {(legendText || legendHtml || fieldsetId) && (
        <legend className="font-bold">
          {legendHtml ? (
            <span dangerouslySetInnerHTML={{ __html: legendHtml }} />
          ) : legendText ? (
            legendText
          ) : null}
        </legend>
      )}

      {/* Hint */}
      {hint && (
        <p id={`${fieldsetId}-hint`} className="block text-neutral-dark">
          {hint}
        </p>
      )}

      {/* Error message */}
      {errorMessage && (
        <p
          id={`${fieldsetId}-error`}
          className="text-sm text-alert-base mb-2"
          role="alert"
        >
          {errorMessage}
        </p>
      )}

      {/* Items container */}
      <div className={clsx('flex', direction === 'row' ? 'flex-row' : 'flex-col')}>
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className={clsx('flex items-center', 'c-form-group', direction === 'row' && 'mr-base', item.classes)}
          >
            {/* Divider */}
            {item.divider && <InputGroupDivider divider={item.divider} />}

            {/* Select */}
            {item.isSelect ? (
              <div className="flex flex-col">
                {item.labelText && (
                  <label
                    htmlFor={item.id || `${fieldsetId}-${getItemName(item)}`}
                    className="block"
                  >
                    {item.labelText}
                  </label>
                )}
                <select
                  id={item.id || `${fieldsetId}-${getItemName(item)}`}
                  name={getItemName(item)}
                  disabled={item.disabled}
                  className={clsx(
                    'c-select block mt-sm transition duration-150 ease-in-out border-black rounded-sm font-semibold focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-warning-base disabled:bg-neutral-light disabled:border-neutral-base mb-0 w-full lg:w-auto',
                    errorMessage && 'border-alert-base ring-2 ring-alert-base'
                  )}
                  defaultValue={item.value}
                >
                  {item.selectItems?.map((opt, optIndex) => (
                    <option key={optIndex} value={opt.value}>
                      {opt.text || opt.value}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              /* Input */
              <div className="flex flex-col">
                {item.labelText && (
                  <label
                    htmlFor={item.id || `${fieldsetId}-${getItemName(item)}`}
                    className="block"
                  >
                    {item.labelText}
                  </label>
                )}
                <input
                  id={item.id || `${fieldsetId}-${getItemName(item)}`}
                  name={getItemName(item)}
                  type={item.type || 'text'}
                  placeholder={item.placeholder}
                  disabled={item.disabled}
                  defaultValue={item.value}
                  className={clsx(
                    'c-input block mt-sm border-black rounded-sm font-semibold placeholder-neutral-dark focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-warning-base disabled:bg-neutral-light disabled:border-neutral-base mb-0 w-full lg:w-64',
                    errorMessage && 'border-alert-base ring-2 ring-alert-base'
                  )}
                  aria-describedby={hint ? `${fieldsetId}-hint` : undefined}
                  aria-invalid={errorMessage ? 'true' : undefined}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      </fieldset>
    </div>
  );
}
