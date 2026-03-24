import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { Content, type ContentProps } from '../Content/Content';

export interface DescriptionProps extends Omit<ContentProps, 'children'> {
  /** Child content */
  children?: ReactNode;
  /** Text content (alternative to children) */
  text?: string;
  /** HTML content (alternative to children) */
  html?: string;
  /**
   * Visually hidden title for screen readers.
   * When provided, renders a visually hidden label before the description text.
   * @deprecated Use aria-label on parent or wrapper instead
   */
  visuallyHiddenTitle?: string;
}

/**
 * Description component - renders description text with optional visually hidden title.
 * Extends Content with visuallyHiddenTitle support.
 */
export function Description({ className, children, text, html, visuallyHiddenTitle, ...props }: DescriptionProps) {
  return (
    <Content className={clsx(className)} text={text} html={html} {...props}>
      {visuallyHiddenTitle && (
        <span className="sr-only">{visuallyHiddenTitle}: </span>
      )}
      {children}
    </Content>
  );
}
