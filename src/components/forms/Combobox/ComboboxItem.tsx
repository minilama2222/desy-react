import { type ReactNode, type LiHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ComboboxItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  /** Item value used for selection/filtering */
  value: unknown;
  /** Plain text content of the option */
  text?: string;
  /** HTML content of the option (alternative to text) */
  html?: string;
  /** React nodes to render as content (alternative to text/html) */
  children?: ReactNode;
  /** Additional CSS classes for the option */
  classes?: string;
  /** Custom CSS classes */
  className?: string;
}

/**
 * ComboboxItem component - a single option of a Combobox.
 * May be used standalone (renders an ARIA listbox option) or passed as a
 * child of Combobox (compound) as an alternative to the `items` array.
 */
export function ComboboxItem({
  value,
  text,
  html,
  children,
  classes,
  className,
  ...props
}: ComboboxItemProps) {
  const content = html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text || children || String(value);

  return (
    <li role="option" className={clsx('flex items-center pr-base pl-lg py-sm', classes, className)} {...props}>
      {content}
    </li>
  );
}

ComboboxItem.displayName = 'ComboboxItem';
