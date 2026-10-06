import { type ReactNode, useState } from 'react';
import { clsx } from 'clsx';

export interface NotificationItemData {
  /** Unique identifier */
  id?: string;
  /** Link text */
  text?: string;
  /** Link HTML content */
  html?: string;
  /** URL for the link */
  href?: string;
  /** Router link path */
  routerLink?: string;
  /** Fragment identifier */
  fragment?: string;
  /** Target attribute */
  target?: string;
}

export interface NotificationProps {
  /** Unique identifier */
  id?: string;
  /** Custom CSS classes */
  classes?: string;
  /** Whether the notification is open */
  isOpen?: boolean;
  /** Open state change handler */
  onIsOpenChange?: (isOpen: boolean) => void;
  /** Title text */
  titleText?: string;
  /** Title HTML content */
  titleHtml?: string;
  /** Description text */
  descriptionText?: string;
  /** Description HTML content */
  descriptionHtml?: string;
  /** Content text */
  contentText?: string;
  /** Content HTML content */
  contentHtml?: string;
  /** Icon content */
  iconHtml?: string;
  /** Notification type: 'success' | 'alert' | 'info' */
  type?: 'success' | 'alert' | 'info';
  /** Whether the notification can be dismissed */
  isDismissible?: boolean;
  /** Heading level for the title */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** List of notification items */
  items?: NotificationItemData[];
  /** Child elements (for compound component pattern) */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
}

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width="1em"
      height="1em"
      className={clsx('w-5 h-5 text-success-dark', className)}
      aria-label="Éxito"
      focusable="false"
      role="img"
    >
      <path
        d="M39.94 125a19.88 19.88 0 01-15.53-7.81L2.48 92.26a10 10 0 0115-13.2l20.55 23.39a2.5 2.5 0 003.68.08l81-84.42a10.002 10.002 0 1114.5 13.78l-82.02 86.33A19.41 19.41 0 0139.94 125z"
        fill="currentColor"
      />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width="1em"
      height="1em"
      className={clsx('w-5 h-5 text-alert-base', className)}
      aria-label="Error"
      focusable="false"
      role="img"
    >
      <path
        d="M138.42 118.29l-55-110a15 15 0 00-26.84 0l-55 110A15 15 0 0015 140h110a15 15 0 0013.42-21.71zM62.5 50a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 70a10 10 0 1110-10 10 10 0 01-10 10z"
        fill="currentColor"
      />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      width="1em"
      height="1em"
      className={clsx('w-5 h-5 text-primary-base', className)}
      aria-label="Información"
      focusable="false"
      role="img"
    >
      <path
        d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm7.5 105a7.5 7.5 0 01-15 0V70a7.5 7.5 0 0115 0zM70 50a10 10 0 1110-10 10 10 0 01-10 10z"
        fill="currentColor"
      />
    </svg>
  );
}

function DismissButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="c-notification-button__close p-sm focus:bg-warning-base focus:border-warning-base focus:shadow-outline-black focus:text-black focus:outline-hidden"
      aria-label="Cerrar notificación"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140 140"
        width="1em"
        height="1em"
        className="w-4 h-4 pointer-events-none"
        aria-hidden="true"
        role="presentation"
      >
        <path
          d="M85.91 71.77a2.5 2.5 0 010-3.54l46.16-46.16a10 10 0 10-14.14-14.14L71.77 54.09a2.5 2.5 0 01-3.54 0L22.07 7.93A10 10 0 007.93 22.07l46.16 46.16a2.5 2.5 0 010 3.54L7.93 117.93a10 10 0 0014.14 14.14l46.16-46.16a2.5 2.5 0 013.54 0l46.16 46.16a10 10 0 0014.14-14.14z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

function getTypeIcon(type?: string) {
  switch (type?.toLowerCase()) {
    case 'success':
      return <SuccessIcon />;
    case 'alert':
      return <AlertIcon />;
    case 'info':
      return <InfoIcon />;
    default:
      return null;
  }
}

function TitleHeading({
  headingLevel,
  titleText,
  titleHtml,
  id,
}: {
  headingLevel?: number;
  titleText?: string;
  titleHtml?: string;
  id?: string;
}) {
  const titleId = id ? `${id}-titleNotification` : undefined;
  const content = titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : titleText;
  const headingClasses = 'font-bold pr-base focus:outline-hidden focus:underline';

  const headingProps = { id: titleId, tabIndex: -1, className: headingClasses };

  switch (headingLevel) {
    case 1:
      return <h1 {...headingProps}>{content}</h1>;
    case 2:
      return <h2 {...headingProps}>{content}</h2>;
    case 3:
      return <h3 {...headingProps}>{content}</h3>;
    case 4:
      return <h4 {...headingProps}>{content}</h4>;
    case 5:
      return <h5 {...headingProps}>{content}</h5>;
    case 6:
      return <h6 {...headingProps}>{content}</h6>;
    default:
      return <p {...headingProps}>{content}</p>;
  }
}

/**
 * Notification component - displays alert/info messages that can be dismissed.
 */
export function Notification({
  id,
  classes,
  isOpen = true,
  onIsOpenChange,
  titleText,
  titleHtml,
  descriptionText,
  descriptionHtml,
  contentText,
  contentHtml,
  iconHtml,
  type,
  isDismissible,
  headingLevel,
  items,
  children,
  className,
}: NotificationProps) {
  const [isDismissing, setIsDismissing] = useState(false);

  if (!isOpen || isDismissing) return null;

  const handleDismiss = () => {
    setIsDismissing(true);
    setTimeout(() => {
      setIsDismissing(false);
      onIsOpenChange?.(false);
    }, 150);
  };

  const containerClassName = clsx(
    'c-notification',
    !classes && !type ? 'c-notification--primary' : undefined,
    type === 'success' && 'c-notification--success',
    type === 'alert' && 'c-notification--alert',
    classes,
    className
  );

  return (
    <div id={id} className={containerClassName}>
      {(iconHtml || type) && (
        <div className="h-full mr-base">
          {iconHtml ? (
            <span dangerouslySetInnerHTML={{ __html: iconHtml }} />
          ) : (
            getTypeIcon(type)
          )}
        </div>
      )}

      <div className="lg:flex flex-1 self-center">
        <div className="lg:flex-1 lg:self-center">
          {/* Title */}
          {(titleText || titleHtml) && (
            <TitleHeading
              headingLevel={headingLevel}
              titleText={titleText}
              titleHtml={titleHtml}
              id={id}
            />
          )}

          {/* Description */}
          {descriptionHtml && (
            <div>
              <span dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            </div>
          )}
          {descriptionText && !descriptionHtml && <p>{descriptionText}</p>}

          {/* Items */}
          {items && items.length > 0 && (
            <ul className="mt-base">
              {items.map((item, i) => {
                const itemContent = item.html ? (
                  <span dangerouslySetInnerHTML={{ __html: item.html }} />
                ) : (
                  item.text
                );

                const linkClassName = clsx('inline-block pb-sm c-link', type === 'alert' && 'c-link--alert');

                if (item.href) {
                  return (
                    <li key={item.id || i}>
                      <a href={item.href} target={item.target} id={item.id} className={linkClassName}>
                        {itemContent}
                      </a>
                    </li>
                  );
                }

                if (item.routerLink) {
                  return (
                    <li key={item.id || i}>
                      <a href={`${item.routerLink}${item.fragment ? `#${item.fragment}` : ''}`} id={item.id} className={linkClassName}>
                        {itemContent}
                      </a>
                    </li>
                  );
                }

                return <li key={item.id || i}>{itemContent}</li>;
              })}
            </ul>
          )}

          {/* Content */}
          {contentHtml && (
            <div className="text-sm">
              <span dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          )}
          {contentText && !contentHtml && <p className="text-sm">{contentText}</p>}

          {/* Children (compound pattern) */}
          {children}
        </div>

        {/* Dismiss button */}
        {isDismissible && (
          <div className="absolute top-0 right-0 p-sm">
            <DismissButton onClick={handleDismiss} />
          </div>
        )}
      </div>
    </div>
  );
}
