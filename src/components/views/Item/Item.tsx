import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Custom CSS classes */
  className?: string;
  /** Title configuration */
  titleItem?: {
    text?: string;
    html?: string;
    classes?: string;
  };
  /** Heading level for the title */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Description configuration */
  description?: {
    text?: string;
    html?: string;
    classes?: string;
  };
  /** Icon type (clipboard, link, document) */
  icon?: 'clipboard' | 'link' | 'document';
  /** Icon container CSS classes */
  iconContainerClasses?: string;
  /** Additional items (displayed inline) */
  items?: string[];
  /** Content at the bottom */
  content?: {
    text?: string;
    html?: string;
    classes?: string;
  };
  /** Content on the right side */
  contentRight?: ReactNode;
  /** Whether the item is draggable */
  isDraggable?: boolean;
  /** Whether the item is locked */
  isLocked?: boolean;
  /** Unique identifier */
  id?: string;
  /** Child content (alternative to structured props) */
  children?: ReactNode;
}

const ICON_SVG = {
  clipboard: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" className="w-8 h-8 text-neutral-dark" aria-label="Datos" focusable="false" role="img">
      <path d="M16.5 9h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5ZM17.25 13.25a.76.76 0 0 0-.75-.75h-9a.75.75 0 0 0 0 1.5h9a.76.76 0 0 0 .75-.75ZM10 6.5h4a1 1 0 0 0 1-1V3A3 3 0 0 0 13.82.62 3 3 0 0 0 9 3.09V5.5a1 1 0 0 0 1 1Zm1.25-3.75a.75.75 0 1 1 .75.75.76.76 0 0 1-.75-.75Z" fill="currentColor" transform="scale(2)" />
      <path d="M19.5 3h-2.75a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 0 .25.25H19a.5.5 0 0 1 .5.5v12.79a.51.51 0 0 1-.15.36l-3.2 3.2a.49.49 0 0 1-.36.15H5a.5.5 0 0 1-.5-.5v-16A.5.5 0 0 1 5 5h2.25a.25.25 0 0 0 .25-.25v-1.5A.25.25 0 0 0 7.25 3H4.5a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z" fill="currentColor" transform="scale(2)" />
      <path d="M7.5 16a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5Z" fill="currentColor" transform="scale(2)" />
    </svg>
  ),
  link: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" className="w-8 h-8 text-neutral-dark" aria-label="Enlace" focusable="false" role="img">
      <path d="M12.41 14.91a1 1 0 0 0-.55 1.3 1 1 0 0 1-.21 1.09l-2.83 2.83a2 2 0 0 1-2.83 0L3.87 18a2 2 0 0 1 0-2.83l2.83-2.82a1 1 0 0 1 1.09-.21 1 1 0 0 0 .76-1.85 3 3 0 0 0-3.27.65l-2.83 2.83a4 4 0 0 0 0 5.65l2.13 2.13a4 4 0 0 0 5.65 0l2.83-2.83a3 3 0 0 0 .65-3.27 1 1 0 0 0-1.3-.54Z" fill="currentColor" transform="scale(2)" />
      <path d="M7.76 16.24a1 1 0 0 0 1.41 0L17 8.46a1 1 0 0 0-1.41-1.41l-7.83 7.78a1 1 0 0 0 0 1.41Z" fill="currentColor" transform="scale(2)" />
      <path d="m21.55 4.57-2.13-2.12a4 4 0 0 0-5.65 0l-2.83 2.83a3 3 0 0 0-.88 2.12 3 3 0 0 0 .23 1.15 1 1 0 0 0 1.85-.76 1 1 0 0 1-.08-.39 1 1 0 0 1 .29-.7l2.83-2.83a2 2 0 0 1 2.83 0L20.13 6a2 2 0 0 1 0 2.83l-2.83 2.81a1 1 0 0 1-1.09.22 1 1 0 0 0-1.3.54 1 1 0 0 0 .54 1.31 3 3 0 0 0 3.27-.65l2.83-2.83a4 4 0 0 0 0-5.66Z" fill="currentColor" transform="scale(2)" />
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" className="w-8 h-8 text-neutral-dark" aria-label="Documento" focusable="false" role="img">
      <path d="m15.32 2.15 4.53 4.53A.49.49 0 0 1 20 7v14.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5H15a.49.49 0 0 1 .32.15ZM15.59 0H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.41a1 1 0 0 0-.29-.7L16.29.29a1 1 0 0 0-.7-.29Z" fill="currentColor" transform="scale(2)" />
      <path d="M16 11H7a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2ZM16 15H7a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2ZM11.5 19H7a1 1 0 0 1 0-2h4.5a1 1 0 0 1 0 2Z" fill="currentColor" transform="scale(2)" />
    </svg>
  ),
};

function DragHandle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" className="w-5 h-5 text-neutral-base" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <path d="M41 28a10 10 0 1010-10 10 10 0 00-10 10z" />
        <path d="M79.999 28a10 10 0 1010-10 10 10 0 00-10 10z" />
        <path d="M41 70a10 10 0 1010-10 10 10 0 00-10 10z" />
        <path d="M79.999 70a10 10 0 1010-10 10 10 0 00-10 10z" />
        <path d="M41 112a10 10 0 1010-10 10 10 0 00-10 10z" />
        <path d="M79.999 112a10 10 0 1010-10 10 10 0 00-10 10z" />
      </g>
    </svg>
  );
}

function LockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" className="w-base h-base text-neutral-dark" aria-label="Bloqueado" focusable="false">
      <path d="M115 55.86V45a45 45 0 00-90 0v10.86A15 15 0 0015 70v55a15 15 0 0015 15h80a15 15 0 0015-15V70a15 15 0 00-10-14.14zM70 110a12.5 12.5 0 1112.5-12.5A12.5 12.5 0 0170 110zm25-55H45V45a25 25 0 0150 0z" fill="currentColor" />
    </svg>
  );
}

/**
 * Item component - a list item with title, description, optional icon, and actions.
 */
export function Item({
  className,
  titleItem,
  headingLevel = 2,
  description,
  icon,
  iconContainerClasses,
  items,
  content,
  contentRight,
  isDraggable,
  isLocked,
  id,
  children,
  ...props
}: ItemProps) {
  const titleContent = titleItem?.html ? (
    <span dangerouslySetInnerHTML={{ __html: titleItem.html }} />
  ) : (
    titleItem?.text
  );

  const descriptionContent = description?.html ? (
    <span dangerouslySetInnerHTML={{ __html: description.html }} />
  ) : (
    description?.text
  );

  const contentBottom = content?.html ? (
    <p className={content.classes}>
      <span dangerouslySetInnerHTML={{ __html: content.html }} />
    </p>
  ) : content?.text ? (
    <p className={content.classes}>{content.text}</p>
  ) : null;

  return (
    <div
      id={id}
      className={clsx(
        'flex flex-wrap p-base bg-white border border-neutral-base rounded-sm',
        className
      )}
      {...props}
    >
      {/* Drag handle or lock */}
      {(isDraggable || isLocked) && (
        <div className="self-center h-full mr-lg">
          {isDraggable && !isLocked && <DragHandle />}
          {isLocked && !isDraggable && <LockIcon />}
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className={clsx('self-center h-full mr-base', iconContainerClasses || '')}>
          {ICON_SVG[icon]}
        </div>
      )}

      {/* Main content */}
      <div className="lg:flex flex-1 self-center">
        <div className="lg:flex-1 lg:self-center">
          {/* Title */}
          {titleItem && (titleItem.text || titleItem.html) && (
            (() => {
              const HeadingTag = `h${headingLevel}` as 'h1';
              return (
                <HeadingTag className={titleItem.classes}>
                  {titleContent}
                </HeadingTag>
              );
            })()
          )}

          {/* Description */}
          {description && (description.text || description.html) && (
            <p className={description.classes}>
              {descriptionContent}
            </p>
          )}

          {/* Items */}
          {items && items.length > 0 && (
            <ul className="-ml-sm lg:divide-x lg:divide-neutral-base">
              {items.map((item, index) => (
                <li key={index} className="lg:inline-block px-sm text-sm text-neutral-dark">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Content bottom */}
          {contentBottom}
        </div>

        {/* Content right */}
        {contentRight && (
          <div className="w-full lg:w-auto lg:text-right mt-base lg:mt-0 lg:ml-base">
            {contentRight}
          </div>
        )}
      </div>

      {/* Children fallback */}
      {children}
    </div>
  );
}
