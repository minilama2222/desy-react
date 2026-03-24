import type { HTMLAttributes, ReactNode } from 'react';
import type { StatusProps } from '../Status/Status';
import { clsx } from 'clsx';
import { Status } from '../Status/Status';

/** StatusItem term/definition pair */
export interface StatusItemTerm {
  /** Term text */
  text?: string;
  /** Term HTML */
  html?: string;
  /** Term ID */
  id?: string;
  /** Term CSS classes */
  classes?: string;
}

export interface StatusItemDefinition {
  /** Definition text */
  text?: string;
  /** Definition HTML */
  html?: string;
  /** Definition ID */
  id?: string;
  /** Definition CSS classes */
  classes?: string;
}

export interface StatusItemData {
  /** Item ID */
  id?: string;
  /** Item CSS classes */
  classes?: string;
  /** Term (dt) configuration */
  term: StatusItemTerm;
  /** Definition (dd) configuration */
  definition: StatusItemDefinition;
}

export interface StatusItemTitle {
  /** Title text */
  text?: string;
  /** Title HTML */
  html?: string;
  /** Title CSS classes */
  classes?: string;
}

export interface StatusItemHint {
  /** Hint text */
  text?: string;
  /** Hint HTML */
  html?: string;
  /** Hint CSS classes */
  classes?: string;
  /** Hint ID */
  id?: string;
}

export interface StatusItemErrorMessage {
  /** Error message text */
  text?: string;
  /** Error message HTML */
  html?: string;
  /** Error message CSS classes */
  classes?: string;
  /** Error message ID */
  id?: string;
}

export interface StatusItemStatus {
  /** Status text */
  text?: string;
  /** Status icon configuration */
  icon?: StatusProps['icon'];
  /** Status type */
  type?: StatusProps['type'];
  /** Status CSS classes */
  classes?: string;
  /** Status ID */
  id?: string;
}

export interface StatusItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Unique identifier */
  id?: string;
  /** Title above the list */
  title?: StatusItemTitle;
  /** Hint text */
  hint?: StatusItemHint;
  /** Error message */
  errorMessage?: StatusItemErrorMessage;
  /** List of term/definition items */
  items?: StatusItemData[];
  /** Status component configuration */
  status?: StatusItemStatus;
  /** Content to show on the right (below title) */
  children?: ReactNode;
  /** CSS classes */
  classes?: string;
}

/**
 * StatusItem component - displays a status list with term/definition pairs,
 * optional title, hint, error message, and a status indicator.
 */
export function StatusItem({
  id,
  title,
  hint,
  errorMessage,
  items = [],
  status,
  children,
  className,
  ...props
}: StatusItemProps) {
  return (
    <div className={clsx('lg:flex lg:justify-between lg:items-start -my-px px-base py-sm border-t border-b border-neutral-base', className)} {...props}>
      {/* Left side: title + dl list */}
      <div className="lg:w-2/3">
        {/* Title */}
        {title && (
          <p className={title.classes || 'my-sm'}>
            {title.html ? (
              <span dangerouslySetInnerHTML={{ __html: title.html }} />
            ) : (
              title.text
            )}
          </p>
        )}

        {/* Hint */}
        {hint && (
          <p
            id={hint.id}
            className={clsx('text-sm text-neutral-dark', hint.classes)}
            aria-describedby={hint.id}
          >
            {hint.html ? (
              <span dangerouslySetInnerHTML={{ __html: hint.html }} />
            ) : (
              hint.text
            )}
          </p>
        )}

        {/* Error message */}
        {errorMessage && (
          <p
            id={errorMessage.id || `${id}-error`}
            className={clsx('text-sm text-alert-base', errorMessage.classes)}
            role="alert"
          >
            {errorMessage.html ? (
              <span dangerouslySetInnerHTML={{ __html: errorMessage.html }} />
            ) : (
              errorMessage.text
            )}
          </p>
        )}

        {/* Definition list */}
        {items.length > 0 && (
          <dl>
            {items.map((item, index) => (
              <div
                key={item.id ?? index}
                id={item.id}
                className={clsx('flex lg-flex-wrap', item.classes)}
              >
                <dt
                  id={item.term.id}
                  className={clsx('w-1/2 my-sm', item.term.classes)}
                >
                  {item.term.html ? (
                    <span dangerouslySetInnerHTML={{ __html: item.term.html }} />
                  ) : (
                    item.term.text
                  )}
                </dt>
                <dd
                  id={item.definition.id}
                  className={clsx('w-1/2 my-sm font-semibold', item.definition.classes)}
                >
                  {item.definition.html ? (
                    <span dangerouslySetInnerHTML={{ __html: item.definition.html }} />
                  ) : (
                    item.definition.text
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {/* Right side: content + status */}
      <div className="lg:flex lg:flex-wrap lg:items-center lg:w-1/3">
        {/* Content slot */}
        {(children || true) && (
          <div
            id={`${id}-status-item`}
            className="w-full lg:w-auto lg:text-right mt-base lg:mt-0 mb-base lg:mb-0"
          >
            {children}
          </div>
        )}

        {/* Status component */}
        {status && (
          <div className="mb-base lg:mb-0 ml-base py-sm">
            <Status
              text={status.text}
              icon={status.icon}
              type={status.type}
              id={status.id}
              className={status.classes}
            />
          </div>
        )}
      </div>
    </div>
  );
}
