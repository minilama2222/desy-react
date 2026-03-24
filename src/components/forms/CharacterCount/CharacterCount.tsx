import {
  type TextareaHTMLAttributes,
  type ChangeEvent,
  type FocusEvent,
  type ReactNode,
  useState,
  useCallback,
} from 'react';
import { clsx } from 'clsx';
import { Textarea } from '../Textarea/Textarea';

export interface CharacterCountProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onInput'> {
  /** Unique identifier */
  id?: string;
  /** Textarea name */
  name?: string;
  /** Number of rows */
  rows?: number;
  /** Maximum character count */
  maxlength?: number;
  /** Count special chars as 2 characters (for BDD) */
  countbbdd?: boolean;
  /** Maximum word count (alternative to maxlength) */
  maxwords?: number;
  /** Threshold percentage (0-100) to show count message */
  threshold?: number;
  /** CSS classes for the form group */
  formGroupClasses?: string;
  /** CSS classes for the count message */
  countMessageClasses?: string;
  /** CSS classes for the textarea */
  className?: string;
  /** Error message text */
  errorMessageText?: string;
  /** Error message HTML */
  errorMessageHtml?: string;
  /** Hint text */
  hintText?: string;
  /** Label text */
  labelText?: string;
  /** Child components (Label, Hint, ErrorMessage) */
  children?: ReactNode;
  /** Focus event handler */
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  /** Blur event handler */
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  /** Change event handler */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
}

function calculateLength(value: string, countbbdd?: boolean): number {
  let length = value.length;
  if (countbbdd && value) {
    const specialChars = value.match(/[^A-z0-9_\s.,:;]/g);
    length += specialChars ? specialChars.length : 0;
  }
  return length;
}

/**
 * CharacterCount component - a textarea with character/word counting and truncation.
 */
export function CharacterCount({
  id,
  name,
  rows,
  maxlength,
  countbbdd,
  maxwords,
  threshold,
  formGroupClasses,
  countMessageClasses,
  className,
  errorMessageText,
  errorMessageHtml,
  hintText,
  labelText,
  children,
  value: valueProp,
  disabled,
  onFocus,
  onBlur,
  onChange,
  ...props
}: CharacterCountProps) {
  const [internalValue, setInternalValue] = useState<string>('');
  const [displayCountMessage, setDisplayCountMessage] = useState(false);
  const [remaining, setRemaining] = useState<number | undefined>(undefined);

  const value = valueProp !== undefined ? String(valueProp) : internalValue;

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const target = e.target as HTMLTextAreaElement;
      let val = target.value;

      if (maxlength) {
        const len = calculateLength(val, countbbdd);
        setDisplayCountMessage(!threshold || len > (maxlength * threshold) / 100);
        while (calculateLength(val, countbbdd) > maxlength) {
          val = val.substring(0, val.length - 1);
        }
        setRemaining(maxlength - calculateLength(val, countbbdd));
        // Update the textarea value directly
        target.value = val;
      } else if (maxwords !== undefined) {
        const allWords = val.match(/[\wáéíóúÁÉÍÓÚüÜñÑ]+/g) || [];
        const words = [...allWords];
        setDisplayCountMessage(!threshold || words.length > ((maxwords * threshold) / 100));
        while (words.length > maxwords) {
          const lastWord = words.pop();
          if (lastWord) {
            val = val.substring(0, val.lastIndexOf(lastWord));
          }
        }
        const remainingWords = val.match(/[\wáéíóúÁÉÍÓÚüÜñÑ]+/g) || [];
        setRemaining(maxwords - remainingWords.length);
        target.value = val;
      } else {
        setDisplayCountMessage(!threshold);
        setRemaining(maxlength);
      }

      setInternalValue(val);
      onChange?.(e, val);
    },
    [maxlength, maxwords, threshold, countbbdd, onChange]
  );

  const hasErrors = Boolean(errorMessageText || errorMessageHtml);
  const hintId = id ? `${id}-info` : undefined;

  return (
    <div className={clsx('relative', formGroupClasses)}>
      <Textarea
        id={id}
        name={name}
        rows={rows}
        maxlength={maxlength}
        value={value}
        disabled={disabled}
        describedBy={hintId}
        className={clsx(
          'js-character-count',
          hasErrors && 'border-alert-base ring-2 ring-alert-base',
          className
        )}
        errorMessageText={errorMessageText}
        errorMessageHtml={errorMessageHtml}
        hintText={hintText}
        labelText={labelText}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        {...props}
      >
        {children}
      </Textarea>
      {displayCountMessage && (
        <p
          id={hintId}
          className={clsx('mt-xs text-sm', countMessageClasses)}
          aria-live="polite"
        >
          Puedes escribir hasta {remaining} {maxlength ? 'caracteres' : 'palabras'}
        </p>
      )}
    </div>
  );
}
