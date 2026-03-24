import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface TermDefinitionData {
  /** Text content */
  text?: string;
  /** HTML content */
  html?: string;
  /** CSS classes */
  classes?: string;
  /** Unique identifier */
  id?: string;
}

export interface DescriptionItemData {
  /** Term (dt) configuration */
  term: TermDefinitionData;
  /** Definition (dd) configuration */
  definition: TermDefinitionData;
  /** CSS classes for the wrapper div */
  classes?: string;
  /** Unique identifier */
  id?: string;
  /** Tab index */
  tabindex?: number;
}

export interface DescriptionListProps extends HTMLAttributes<HTMLDListElement> {
  /** Custom CSS classes */
  className?: string;
  /** Description items */
  items?: DescriptionItemData[];
  /** Unique identifier */
  id?: string;
  /** Child content */
  children?: ReactNode;
}

/**
 * DescriptionList component - renders a description list (dl/dt/dd).
 */
export function DescriptionList({
  className,
  items,
  id,
  children,
  ...props
}: DescriptionListProps) {
  return (
    <dl
      id={id}
      className={clsx(className)}
      {...props}
    >
      {items?.map((item, index) => (
        <div
          key={item.id || index}
          id={item.id}
          className={item.classes}
        >
          <dt
            id={item.term?.id}
            className={clsx(item.term?.classes || 'text-sm text-neutral-dark')}
            tabIndex={item.tabindex}
          >
            {item.term?.html ? (
              <span dangerouslySetInnerHTML={{ __html: item.term.html }} />
            ) : (
              item.term?.text
            )}
          </dt>
          <dd
            id={item.definition?.id}
            className={clsx(item.definition?.classes || 'text-base text-black')}
            tabIndex={item.tabindex}
          >
            {item.definition?.html ? (
              <span dangerouslySetInnerHTML={{ __html: item.definition.html }} />
            ) : (
              item.definition?.text
            )}
          </dd>
        </div>
      ))}
      {children}
    </dl>
  );
}
