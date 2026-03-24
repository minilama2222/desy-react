import { forwardRef, type ReactNode, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type PillBaseProps = {
  /** Custom CSS classes */
  className?: string;
  /** CSS classes to append to the default pill class */
  classes?: string;
  /** Unique identifier */
  id?: string;
  /** Pill text content */
  text?: string;
  /** HTML content (alternative to text) */
  html?: string;
  /** Child content */
  children?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Fragment identifier for router links */
  fragment?: string;
  /** Router link path */
  routerLink?: string;
  /** Router link active CSS classes */
  routerLinkActiveClasses?: string | string[];
  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

type PillAsAnchor = PillBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof PillBaseProps> & {
    /** Element type: 'a' */
    element?: 'a';
    /** Href for anchor */
    href?: string;
    /** Target for anchor */
    target?: string;
  };

type PillAsButton = PillBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof PillBaseProps> & {
    /** Element type: 'button' */
    element: 'button';
  };

type PillAsSpan = PillBaseProps &
  Omit<AnchorHTMLAttributes<HTMLSpanElement>, keyof PillBaseProps> & {
    /** Element type: 'span' */
    element?: 'span';
  };

export type PillProps = PillAsAnchor | PillAsButton | PillAsSpan;

const TYPE_A = 'a';
const TYPE_BUTTON = 'button';
const TYPE_SPAN = 'span';

function getElementType(props: PillProps): 'a' | 'button' | 'span' {
  if ('element' in props && props.element) {
    return props.element;
  }
  if ('href' in props && props.href) {
    return TYPE_A;
  }
  return TYPE_SPAN;
}

function getClassNames(props: PillProps, baseClass: string = 'c-pill'): string {
  let classNames = baseClass;
  if ('classes' in props && props.classes) {
    classNames += ' ' + props.classes;
  }
  return classNames;
}

/**
 * Pill component - a versatile badge/chip component that can render as anchor, button, or span.
 * Supports router links, accessibility attributes, and HTML content.
 */
export const Pill = forwardRef<HTMLElement, PillProps>(
  (props, ref) => {
    const { className, classes, id, text, html, children, onClick, ...rest } = props;
    const elementType = getElementType(props);
    const classNames = clsx(className, getClassNames(props));

    const content = html ? (
      <span dangerouslySetInnerHTML={{ __html: html }} />
    ) : text ? (
      text
    ) : (
      children
    );

    if (elementType === TYPE_A) {
      const { href, target, element, routerLink, routerLinkActiveClasses, fragment, ...anchorRest } = rest as PillAsAnchor & { routerLink?: string; routerLinkActiveClasses?: string | string[]; fragment?: string };
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          id={id}
          href={href}
          target={target}
          className={classNames}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    if (elementType === TYPE_BUTTON) {
      const { element, routerLink, routerLinkActiveClasses, fragment, ...buttonRest } = rest as PillAsButton;
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          id={id}
          className={classNames}
          onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
          {...buttonRest}
        >
          {content}
        </button>
      );
    }

    // Default/span
    const { element, routerLink, routerLinkActiveClasses, fragment, ...spanRest } = rest as PillAsSpan;
    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        id={id}
        className={classNames}
        onClick={onClick as React.MouseEventHandler<HTMLSpanElement>}
        {...spanRest}
      >
        {content}
      </span>
    );
  }
);

Pill.displayName = 'Pill';
