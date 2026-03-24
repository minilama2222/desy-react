import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface MediaObjectProps extends HTMLAttributes<HTMLDivElement> {
  /** Figure/media content (image, icon, etc.) as HTML */
  figureHtml?: string;
  /** Center align the content vertically */
  center?: boolean;
  /** Reverse the order (content first, figure second) */
  reverse?: boolean;
  /** CSS classes for the figure container */
  figureClasses?: string;
  /** CSS classes for the content container */
  contentClasses?: string;
  /** Content body */
  children?: ReactNode;
  /** Figure content (slot) */
  figure?: ReactNode;
  /** CSS classes */
  classes?: string;
}

export interface MediaObjectFigureProps extends HTMLAttributes<HTMLDivElement> {
  /** Figure content */
  children?: ReactNode;
  /** CSS classes */
  className?: string;
}

/**
 * MediaObject figure container - wraps media content (images, icons, etc.)
 */
export function MediaObjectFigure({ children, className, ...props }: MediaObjectFigureProps) {
  return (
    <div className={clsx('flex-none', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * MediaObject component - displays a figure (image/icon) alongside text content.
 * Supports different layouts: default, centered, and reversed.
 */
export function MediaObject({
  figureHtml,
  center = false,
  reverse = false,
  figureClasses,
  contentClasses,
  children,
  figure,
  className,
  ...props
}: MediaObjectProps) {
  return (
    <div
      className={clsx(
        'flex',
        center && 'items-center',
        reverse && 'flex-row-reverse',
        className
      )}
      {...props}
    >
      {/* Figure */}
      {figureHtml ? (
        <div
          className={clsx('flex-none', reverse && 'order-1', figureClasses)}
          dangerouslySetInnerHTML={{ __html: figureHtml }}
        />
      ) : figure ? (
        <div className={clsx('flex-none', reverse && 'order-1', figureClasses)}>
          {figure}
        </div>
      ) : null}

      {/* Content */}
      <div className={clsx('flex-1', contentClasses)}>
        {children}
      </div>
    </div>
  );
}
