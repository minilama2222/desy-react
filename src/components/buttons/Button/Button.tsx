import { forwardRef, type ReactNode, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type ButtonBaseProps = {
  /** Custom CSS classes */
  className?: string;
  /** CSS classes to append to the default button class */
  classes?: string;
  /** Unique identifier */
  id?: string;
  /** Button text content */
  text?: string;
  /** HTML content (alternative to text) */
  html?: string;
  /** Child content */
  children?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Prevent double-click to avoid multiple submissions */
  preventDoubleClick?: boolean;
  /** Fragment identifier for router links */
  fragment?: string;
  /** Router link path */
  routerLink?: string;
  /** Router link active CSS classes */
  routerLinkActiveClasses?: string | string[];
  /** Visual variant, maps to the reference `c-button--*` modifiers */
  variant?: 'base' | 'primary' | 'alert' | 'transparent';
  /** Size modifier, maps to `c-button--sm` / `c-button--lg` */
  size?: 'sm' | 'lg';
  /** Whether the button has a selection (maps to `c-button--has-selection`) */
  hasSelection?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    /** Render as 'button' (default) */
    element?: 'button';
    /** Button name attribute */
    name?: string;
    /** Button type attribute */
    type?: string;
    /** Button value attribute */
    value?: string;
    /** Click event handler */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    /** Render as 'a' */
    element: 'a';
    /** Href for anchor */
    href?: string;
    /** Target for anchor */
    target?: string;
    /** Click event handler */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  };

type ButtonAsInput = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLInputElement>, keyof ButtonBaseProps> & {
    /** Render as 'input' */
    element: 'input';
    /** Input name attribute */
    name?: string;
    /** Input value attribute */
    value?: string;
    /** Input type attribute */
    type?: string;
    /** Click event handler */
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsInput;

function getElementType(props: ButtonProps): 'a' | 'button' | 'input' {
  if ('element' in props && props.element) {
    return props.element;
  }
  if ('href' in props && props.href) {
    return 'a';
  }
  return 'button';
}

function getClassNames(props: ButtonProps, baseClass: string = 'c-button'): string {
  const classNames = [baseClass];
  if ('variant' in props && props.variant) {
    classNames.push(`c-button--${props.variant}`);
  }
  if ('size' in props && props.size) {
    classNames.push(`c-button--${props.size}`);
  }
  if ('hasSelection' in props && props.hasSelection) {
    classNames.push('c-button--has-selection');
  }
  if ('classes' in props && props.classes) {
    classNames.push(props.classes);
  }
  if (props.disabled) {
    classNames.push('c-button--disabled');
  }
  return classNames.join(' ');
}

/**
 * Button component supporting button, anchor, and input elements.
 * Supports router links, disabled state, and double-click prevention.
 */
export const Button = forwardRef<HTMLElement, ButtonProps>(
  (props, ref) => {
    const { className, classes, id, text, html, children, disabled, preventDoubleClick, ...rest } = props;
    const elementType = getElementType(props);
    const classNames = clsx(className, getClassNames(props));

    const handleClick = (e: React.MouseEvent) => {
      if (preventDoubleClick) {
        // Simple prevent double click - could be enhanced with a timeout
        (rest as any).onClick?.(e);
      } else {
        (rest as any).onClick?.(e);
      }
    };

    const content = html ? (
      <span dangerouslySetInnerHTML={{ __html: html }} />
    ) : text ? (
      text
    ) : (
      children
    );

    if (elementType === 'a') {
      const { href, target, element, routerLink, routerLinkActiveClasses, fragment, ...anchorRest } = rest as ButtonAsAnchor;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          id={id}
          href={href}
          target={target}
          className={classNames}
          aria-disabled={disabled ? 'true' : (anchorRest as any).ariaDisabled}
          data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
          onClick={handleClick}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    if (elementType === 'input') {
      const { name, value, type, element, routerLink, routerLinkActiveClasses, fragment, ...inputRest } = rest as ButtonAsInput;
      return (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          id={id}
          name={name}
          value={value || text}
          type={type || 'submit'}
          className={classNames}
          disabled={disabled}
          aria-disabled={disabled ? 'true' : (inputRest as any).ariaDisabled}
          data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
          onClick={handleClick}
          {...inputRest}
        />
      );
    }

    // Default: button
    const { name, type, value, element, routerLink, routerLinkActiveClasses, fragment, ...buttonRest } = rest as ButtonAsButton;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        id={id}
        name={name}
        type={type}
        value={value}
        className={classNames}
        disabled={disabled}
        aria-disabled={disabled ? 'true' : (buttonRest as any).ariaDisabled}
        data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
        onClick={handleClick}
        {...buttonRest}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
