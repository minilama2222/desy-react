import { forwardRef, type ReactNode, type InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface CheckboxItemData {
  /** Unique identifier for the checkbox item */
  id?: string;
  /** Checkbox value */
  value: string;
  /** Checkbox name (usually inherited from parent) */
  name?: string;
  /** Checkbox label text */
  text?: string;
  /** Checkbox label HTML */
  html?: string;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** CSS classes for the checkbox item */
  classes?: string;
  /** Hint text */
  hintText?: string;
  /** Hint HTML */
  hintHtml?: string;
  /** Divider text (creates a visual divider) */
  divider?: string;
  /** Conditional content shown when checkbox is checked */
  conditionalHtml?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Label data for advanced customization */
  labelData?: {
    classes?: string;
    role?: string;
    ariaLabel?: string;
  };
}

export interface CheckboxesProps {
  /** Unique identifier prefix for checkbox items */
  id?: string;
  /** Name attribute for all checkboxes in the group */
  name: string;
  /** Array of checkbox items */
  items?: CheckboxItemData[];
  /** Currently selected values (array for multiple select) */
  value?: string[];
  /** Legend text (field label) */
  legendText?: string;
  /** Legend HTML */
  legendHtml?: string;
  /** Legend is page heading */
  legendIsPageHeading?: boolean;
  /** Legend heading level */
  legendHeadingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Legend CSS classes */
  legendClasses?: string;
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
  /** Error ID */
  errorId?: string;
  /** Hint ID */
  hintId?: string;
  /** CSS classes for the form group */
  formGroupClasses?: string;
  /** CSS classes for the checkboxes container */
  classes?: string;
  /** Whether has error state */
  hasError?: boolean;
  /** Whether has dividers between items */
  hasDividers?: boolean;
  /** Child components (for compound pattern) */
  children?: ReactNode;
  /** Change event handler */
  onChange?: (value: string[]) => void;
}

export interface CheckboxItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  /** Unique identifier */
  id?: string;
  /** Checkbox value */
  value: string;
  /** Checkbox name */
  name: string;
  /** Checkbox label text */
  text?: string;
  /** Checkbox label HTML */
  html?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** CSS classes */
  classes?: string;
  /** Hint text */
  hintText?: string;
  /** Hint HTML */
  hintHtml?: string;
  /** Conditional content shown when checked */
  conditionalHtml?: string;
  /** Hint ID suffix */
  hintIdSuffix?: string;
  /** Has dividers */
  hasDividers?: boolean;
  /** Change event handler */
  onChange?: (value: string, checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
}

function getHintId(id?: string): string {
  return id ? `${id}-hint` : '';
}

function getErrorId(errorId?: string, id?: string): string {
  return errorId || (id ? `${id}-error` : '');
}

/**
 * Checkbox item component - a single checkbox with label and optional hint
 */
export const CheckboxItem = forwardRef<HTMLInputElement, CheckboxItemProps>(
  (props, ref) => {
    const {
      id,
      value,
      name,
      text,
      html,
      checked,
      indeterminate,
      disabled,
      classes,
      hintText,
      hintHtml,
      conditionalHtml,
      hintIdSuffix,
      hasDividers,
      onChange,
      ...rest
    } = props;

    const itemHintId = hintIdSuffix ? `${hintIdSuffix}-item-hint` : undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(value, e.target.checked, e);
    };

    const labelContent = html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text;

    const containerClasses = clsx(
      'block',
      hasDividers && 'border-t border-b border-neutral-base -mb-px',
      classes
    );

    return (
      <div className={containerClasses}>
        <div className="relative flex items-start py-base">
          <div className="flex items-center mx-sm">
            <input
              ref={ref}
              id={id}
              name={name}
              type="checkbox"
              value={value}
              checked={checked}
              disabled={disabled}
              className={clsx(
                'w-6',
                'h-6',
                'text-primary-base',
                'transition',
                'duration-150',
                'ease-in-out',
                'border-black',
                'focus:border-black',
                'focus:outline-black',
                'focus:outline-1',
                'focus:outline-offset-2',
                'focus:ring-4',
                'focus:ring-offset-0',
                'focus:ring-warning-base',
                'disabled:bg-neutral-base',
                'disabled:border-neutral-base'
              )}
              onChange={handleChange}
              {...rest}
            />
          </div>
          <div className="pt-0.5 leading-5">
            <label htmlFor={id} className="cursor-pointer">
              {labelContent}
            </label>
            {(hintText || hintHtml) && (
              <p
                id={itemHintId}
                className="block text-neutral-dark text-sm"
              >
                {hintHtml ? <span dangerouslySetInnerHTML={{ __html: hintHtml }} /> : hintText}
              </p>
            )}
          </div>
        </div>
        {conditionalHtml && checked && (
          <div
            className="mb-lg ml-5 pt-sm pb-base pl-6 origin-top-left border-l-2 border-primary-base"
            id={`conditional-${id}`}
          >
            <span dangerouslySetInnerHTML={{ __html: conditionalHtml }} />
          </div>
        )}
      </div>
    );
  }
);

CheckboxItem.displayName = 'CheckboxItem';

/**
 * Checkboxes component - a group of checkboxes with legend, hint, and error message
 */
export const Checkboxes = forwardRef<HTMLDivElement, CheckboxesProps>(
  (props, ref) => {
    const {
      id,
      name,
      items,
      value = [],
      legendText,
      legendHtml,
      legendIsPageHeading,
      legendHeadingLevel,
      legendClasses,
      hintText,
      hintHtml,
      errorMessageText,
      errorMessageHtml,
      errorVisuallyHiddenText,
      errorId,
      hintId,
      formGroupClasses,
      classes,
      hasError,
      hasDividers,
      children,
      onChange,
      ...rest
    } = props;

    const hintIdResult = hintId || getHintId(id);
    const errorIdResult = getErrorId(errorId, id);
    const hasErrorState = hasError || Boolean(errorMessageText || errorMessageHtml);

    const handleCheckboxChange = (itemValue: string, isChecked: boolean, _e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue: string[];
      if (isChecked) {
        newValue = [...value, itemValue];
      } else {
        newValue = value.filter((v) => v !== itemValue);
      }
      onChange?.(newValue);
    };

    const renderLegend = () => {
      if (!legendText && !legendHtml) return null;
      
      const legendContent = legendHtml ? <span dangerouslySetInnerHTML={{ __html: legendHtml }} /> : legendText;
      
      if (legendIsPageHeading) {
        const HeadingTag = `h${legendHeadingLevel || 2}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
        return <HeadingTag className={legendClasses}>{legendContent}</HeadingTag>;
      }
      
      return <span className={legendClasses}>{legendContent}</span>;
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'c-form-group',
          formGroupClasses,
          hasErrorState && 'c-form-group--error'
        )}
        {...rest}
      >
        {/* Legend */}
        {legendText || legendHtml ? (
          <fieldset className="border-0 p-0 m-0">
            <legend className="block font-semibold mb-sm">
              {renderLegend()}
            </legend>
          </fieldset>
        ) : null}

        {/* Hint */}
        {(hintText || hintHtml) && (
          <p
            id={hintIdResult}
            className="block text-neutral-dark mb-sm"
          >
            {hintHtml ? <span dangerouslySetInnerHTML={{ __html: hintHtml }} /> : hintText}
          </p>
        )}

        {/* Error Message */}
        {(errorMessageText || errorMessageHtml) && (
          <p
            id={errorIdResult}
            className="block font-semibold text-alert-base mb-sm"
          >
            <span className="sr-only">{errorVisuallyHiddenText || 'Error'}: </span>
            {errorMessageHtml ? <span dangerouslySetInnerHTML={{ __html: errorMessageHtml }} /> : errorMessageText}
          </p>
        )}

        {/* Children (compound pattern) */}
        {children}

        {/* Items */}
        {!children && items && (
          <div className={clsx('c-checkboxes', classes)} id={id}>
            {items.map((item, index) => {
              if (item.divider) {
                return (
                  <div key={`divider-${index}`} className="py-base px-sm">
                    <p>{item.divider}</p>
                  </div>
                );
              }
              return (
                <CheckboxItem
                  key={item.value || index}
                  id={item.id || (id ? `${id}-${index}` : undefined)}
                  name={item.name || name}
                  value={item.value}
                  text={item.text}
                  html={item.html}
                  checked={value.includes(item.value)}
                  disabled={item.disabled}
                  classes={item.classes}
                  hintText={item.hintText}
                  hintHtml={item.hintHtml}
                  conditionalHtml={item.conditionalHtml}
                  hintIdSuffix={item.id || (id ? `${id}-${index}` : undefined)}
                  hasDividers={hasDividers}
                  onChange={handleCheckboxChange}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Checkboxes.displayName = 'Checkboxes';
