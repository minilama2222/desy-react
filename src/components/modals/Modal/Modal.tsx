import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export type ModalIconType = 'discard' | 'delete' | 'publish' | 'changes' | 'edit';

export interface ModalButton {
  text?: string;
  classes?: string;
  id?: string;
  html?: string;
  element?: 'button' | 'a' | 'input';
  name?: string;
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  preventDoubleClick?: boolean;
  loaderText?: string;
  loaderClasses?: string;
  state?: 'is-loading' | 'is-success' | undefined;
  successText?: string;
}

export interface ModalProps {
  /** Unique identifier */
  id: string;
  /** Modal title text */
  title?: string;
  /** Modal title HTML content */
  titleHtml?: string;
  /** Modal title CSS classes */
  titleClasses?: string;
  /** Description text */
  description?: string;
  /** Description HTML content */
  descriptionHtml?: string;
  /** Description CSS classes */
  descriptionClasses?: string;
  /** Icon type: 'discard', 'delete', 'publish', 'changes', 'edit' */
  icon?: ModalIconType;
  /** Custom CSS classes for the modal */
  className?: string;
  /** Heading level for title (1-5) */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Whether the modal is dismissible */
  isDismissible?: boolean;
  /** Close modal handler */
  onClose?: () => void;
  /** Primary buttons */
  itemsPrimary?: ModalButton[];
  /** Secondary buttons */
  itemsSecondary?: ModalButton[];
  /** Button click handler */
  onButtonClick?: (button: ModalButton, event: React.MouseEvent) => void;
  /** Child content */
  children?: ReactNode;
}

const ICONS: Record<ModalIconType, ReactNode> = {
  discard: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" className="block w-16 h-16 text-alert-light" focusable={false} aria-hidden="true" role="presentation">
      <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM5.29,5.29a9.63,9.63,0,0,1,12.23-1,.26.26,0,0,1,0,.4L4.67,17.56a.27.27,0,0,1-.4,0,9.49,9.49,0,0,1,1-12.24ZM18.75,18.76a9.53,9.53,0,0,1-12.23,1,.26.26,0,0,1,0-.4L19.37,6.49a.26.26,0,0,1,.4,0,9.49,9.49,0,0,1-1,12.24Z" fill="currentColor" />
    </svg>
  ),
  delete: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" className="block w-16 h-16 text-alert-light" focusable={false} aria-hidden="true" role="presentation">
      <g>
        <path d="M19.5,7.5H4.5A.5.5,0,0,0,4,8V22a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8A.5.5,0,0,0,19.5,7.5Zm-9.25,13a.75.75,0,0,1-1.5,0v-9a.75.75,0,0,1,1.5,0Zm5,0a.75.75,0,0,1-1.5,0v-9a.75.75,0,0,1,1.5,0Z" fill="currentColor" />
        <path d="M22,4H17.25A.25.25,0,0,1,17,3.75V2.5A2.5,2.5,0,0,0,14.5,0h-5A2.5,2.5,0,0,0,7,2.5V3.75A.25.25,0,0,1,6.75,4H2A1,1,0,0,0,2,6H22a1,1,0,0,0,0-2ZM9,3.75V2.5A.5.5,0,0,1,9.5,2h5a.5.5,0,0,1,.5.5V3.75a.25.25,0,0,1-.25.25H9.25A.25.25,0,0,1,9,3.75Z" fill="currentColor" />
      </g>
    </svg>
  ),
  publish: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" className="block w-16 h-16 text-primary-light" focusable={false} aria-hidden="true" role="presentation">
      <path d="M23.82,1.12A.5.5,0,0,0,23.31,1l-23,9.5A.5.5,0,0,0,0,11a.51.51,0,0,0,.32.46l6.33,2.45a.52.52,0,0,0,.47-.05l8.4-6a.5.5,0,0,1,.64.77l-7,6.75a.51.51,0,0,0-.15.36V22.5a.49.49,0,0,0,.37.48.49.49,0,0,0,.56-.23l3.17-5.42a.25.25,0,0,1,.33-.1l5.83,3.21a.5.5,0,0,0,.73-.33l4-18.5A.5.5,0,0,0,23.82,1.12Z" fill="currentColor" />
    </svg>
  ),
  changes: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" className="block w-16 h-16 text-primary-light" focusable={false} aria-hidden="true" role="presentation">
      <g>
        <path d="M12,13a1,1,0,0,0,1-1V8a1,1,0,1,0-2,0v4A1,1,0,0,0,12,13Z" fill="currentColor" />
        <circle cx="11.99" cy="15.71" r="1.25" fill="currentColor" />
        <path d="M19.29,5.53a9.72,9.72,0,0,0-9.55-3A10.25,10.25,0,0,0,2.38,9.61a.26.26,0,0,1-.27.18l-1-.13a.47.47,0,0,0-.47.22.47.47,0,0,0,0,.52l2.47,4.35a.51.51,0,0,0,.44.25.52.52,0,0,0,.36-.16l3.47-3.59a.48.48,0,0,0,.12-.51A.5.5,0,0,0,7,10.41l-1.88-.24A.23.23,0,0,1,5,10.05a.22.22,0,0,1,0-.21,7.67,7.67,0,0,1,5.37-4.9,7.23,7.23,0,0,1,7.1,2.25,1.25,1.25,0,1,0,1.87-1.66Z" fill="currentColor" />
        <path d="M4.79,16.7a1.24,1.24,0,0,0-.11,1.76,9.72,9.72,0,0,0,9.55,3,10.24,10.24,0,0,0,7.37-7.12.24.24,0,0,1,.27-.17l1.06.12a.5.5,0,0,0,.48-.22.49.49,0,0,0,0-.52l-2.5-4.33A.51.51,0,0,0,20.55,9a.52.52,0,0,0-.43.15l-3.45,3.62a.5.5,0,0,0-.11.51.49.49,0,0,0,.41.33l1.85.22A.25.25,0,0,1,19,14a.22.22,0,0,1,0,.21,7.67,7.67,0,0,1-5.36,4.9,7.26,7.26,0,0,1-7.11-2.25A1.24,1.24,0,0,0,4.79,16.7Z" fill="currentColor" />
      </g>
    </svg>
  ),
  edit: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" className="block w-16 h-16 text-primary-light" focusable={false} aria-hidden="true" role="presentation">
      <g>
        <path d="M13.94,15a2,2,0,0,1-.67.45L9.73,16.86a2,2,0,0,1-2.6-2.6l1.41-3.53A2.18,2.18,0,0,1,9,10.05l5.88-5.88a.25.25,0,0,0-.17-.43H3.37A3.12,3.12,0,0,0,.25,6.86V20.62a3.12,3.12,0,0,0,3.12,3.12H17.13a3.12,3.12,0,0,0,3.12-3.12V9.29a.25.25,0,0,0-.43-.17Z" fill="currentColor" />
        <path d="M18.57,3.3a.51.51,0,0,0-.71,0l-7.81,7.82a.36.36,0,0,0-.11.16L8.52,14.82a.51.51,0,0,0,.11.54.54.54,0,0,0,.54.11l3.54-1.42a.45.45,0,0,0,.17-.11l7.81-7.81a.51.51,0,0,0,.15-.35.53.53,0,0,0-.15-.36Z" fill="currentColor" />
        <path d="M23.16,3.65a2,2,0,0,0,0-2.82,2,2,0,0,0-2.83,0L19.28,1.89a.56.56,0,0,0-.15.35.47.47,0,0,0,.15.35L21.4,4.71a.47.47,0,0,0,.35.15.57.57,0,0,0,.35-.15Z" fill="currentColor" />
      </g>
    </svg>
  ),
};

function ModalButtonItem({ button, onClick }: { button: ModalButton; onClick?: (button: ModalButton, event: React.MouseEvent) => void }) {
  const { text, html, classes, disabled, element = 'button', type = 'button', name, value, href, target, ...rest } = button;

  const content = html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text;
  const className = clsx('c-button', classes);
  const handleClick = (e: React.MouseEvent) => onClick?.(button, e);

  if (element === 'a') {
    return <a href={href} target={target} className={className} onClick={handleClick} {...rest}>{content}</a>;
  }
  if (element === 'input') {
    return <input type={type} value={value} name={name} className={className} disabled={disabled} onClick={handleClick} {...rest} />;
  }
  return <button type={type} className={className} disabled={disabled} onClick={handleClick} {...rest}>{content}</button>;
}

function CloseButton({ onClose }: { onClose?: () => void }) {
  return (
    <button onClick={onClose} className="p-sm focus:bg-warning-base focus:border-warning-base focus:shadow-outline-black focus:text-black focus:outline-hidden" aria-label="Close modal" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" className="w-4 h-4" aria-hidden="true" role="presentation">
        <path d="M85.91 71.77a2.5 2.5 0 010-3.54l46.16-46.16a10 10 0 10-14.14-14.14L71.77 54.09a2.5 2.5 0 01-3.54 0L22.07 7.93A10 10 0 007.93 22.07l46.16 46.16a2.5 2.5 0 010 3.54L7.93 117.93a10 10 0 0014.14 14.14l46.16-46.16a2.5 2.5 0 013.54 0l46.16 46.16a10 10 0 0014.14-14.14z" fill="currentColor" />
      </svg>
    </button>
  );
}

/**
 * Modal component - displays a dialog with title, description, optional icon, and action buttons.
 */
export function Modal({
  id,
  title,
  titleHtml,
  titleClasses,
  description,
  descriptionHtml,
  descriptionClasses,
  icon,
  className,
  headingLevel = 2,
  isDismissible,
  onClose,
  itemsPrimary,
  itemsSecondary,
  onButtonClick,
  children,
}: ModalProps) {

  return (
    <div
      id={id}
      className={clsx('mt-16 sm:mt-0 relative max-w-lg mx-auto p-base lg:p-lg border border-neutral-base rounded-sm bg-white', className)}
      role="dialog"
      aria-labelledby={`label-${id}`}
      aria-describedby={description ? `desc-${id}` : undefined}
    >
      {icon && <div className="flex justify-center p-base">{ICONS[icon]}</div>}

      {isDismissible && <div className="absolute top-0 right-0 p-sm lg:p-base"><CloseButton onClose={onClose} /></div>}

      {(title || titleHtml) && (
        headingLevel === 1 ? <h1 id={`label-${id}`} className={clsx(titleClasses)} tabIndex={-1}>{titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : title}</h1> :
        headingLevel === 2 ? <h2 id={`label-${id}`} className={clsx(titleClasses)} tabIndex={-1}>{titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : title}</h2> :
        headingLevel === 3 ? <h3 id={`label-${id}`} className={clsx(titleClasses)} tabIndex={-1}>{titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : title}</h3> :
        headingLevel === 4 ? <h4 id={`label-${id}`} className={clsx(titleClasses)} tabIndex={-1}>{titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : title}</h4> :
        headingLevel === 5 ? <h5 id={`label-${id}`} className={clsx(titleClasses)} tabIndex={-1}>{titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : title}</h5> :
        <h2 id={`label-${id}`} className={clsx(titleClasses)} tabIndex={-1}>{titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : title}</h2>
      )}

      {(description || descriptionHtml) && (
        descriptionHtml ? (
          <div id={`desc-${id}`} className={clsx('mt-sm', descriptionClasses)}><span dangerouslySetInnerHTML={{ __html: descriptionHtml }} /></div>
        ) : (
          <p id={`desc-${id}`} className={clsx('mt-sm', descriptionClasses)}>{description}</p>
        )
      )}

      {children && <div className="p-base">{children}</div>}

      {(itemsPrimary?.length || itemsSecondary?.length) && (
        <div className={clsx('flex flex-wrap gap-sm w-full mt-base', itemsPrimary?.length && itemsSecondary?.length ? 'justify-between' : 'justify-center')}>
          {itemsPrimary?.map((button, index) => <ModalButtonItem key={button.id || `primary-${index}`} button={button} onClick={onButtonClick} />)}
          {itemsSecondary?.map((button, index) => <ModalButtonItem key={button.id || `secondary-${index}`} button={button} onClick={onButtonClick} />)}
        </div>
      )}
    </div>
  );
}
