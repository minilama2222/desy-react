import { forwardRef, type ReactNode } from 'react';
import { clsx } from 'clsx';

export type ButtonLoaderState = 'is-loading' | 'is-success' | undefined;

export interface ButtonLoaderProps {
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
  /** Render as 'button', 'a', or 'input' */
  element?: 'button' | 'a' | 'input';
  /** Button name (for button/input elements) */
  name?: string;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Input value (for input element) */
  value?: string;
  /** Href (for anchor element) */
  href?: string;
  /** Target (for anchor element) */
  target?: string;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLInputElement>) => void;
  /** Loading state: 'is-loading', 'is-success', or undefined */
  state?: ButtonLoaderState;
  /** Custom text for the loader spinner */
  loaderText?: string;
  /** Custom text for the success state */
  successText?: string;
}

const DEFAULT_LOADER_TEXT = 'Acción en curso';
const DEFAULT_SUCCESS_TEXT = 'Acción realizada con éxito';

/**
 * ButtonLoader - a button with loading and success states.
 */
export const ButtonLoader = forwardRef<HTMLButtonElement, ButtonLoaderProps>(
  (
    {
      className,
      classes,
      id,
      text,
      html,
      children,
      disabled,
      preventDoubleClick,
      element = 'button',
      name,
      type = 'button',
      value,
      href,
      target,
      onClick,
      state,
      loaderText,
      successText,
    },
    ref
  ) => {
    const baseClassName = clsx('c-button-loader', 'relative', className, classes);
    const contentClassName = clsx('c-button-loader__content', 'inline-flex', 'align-baseline');
    const isLoading = state === 'is-loading';
    const isSuccess = state === 'is-success';

    const spinnerContent = (
      <span className="sr-only" role="alert" aria-live="assertive">
        {loaderText || DEFAULT_LOADER_TEXT}
      </span>
    );

    const successContent = (
      <>
        <span className="sr-only" role="alert" aria-live="assertive">
          {successText || DEFAULT_SUCCESS_TEXT}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          aria-hidden="true"
          width="1em"
          height="1em"
          className="text-green-600"
        >
          <path
            d="M13.714 42.857A6.857 6.857 0 0 1 8.4 40.183L.857 31.646a3.429 3.429 0 0 1 .309-4.869A3.429 3.429 0 0 1 6 27.12l7.063 7.989a.72.72 0 0 0 .617.308.789.789 0 0 0 .617-.274L42.103 6.206a3.429 3.429 0 0 1 4.937 4.731L18.926 40.526a6.651 6.651 0 0 1-5.212 2.331Z"
            fill="currentColor"
          />
        </svg>
      </>
    );

    const buttonContent = html ? (
      <span dangerouslySetInnerHTML={{ __html: html }} />
    ) : (
      text || children
    );

    if (element === 'a') {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          id={id}
          href={href}
          target={target}
          className={baseClassName}
          aria-disabled={disabled ? 'true' : undefined}
          data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {isLoading && spinnerContent}
          {isSuccess && successContent}
          <span className={contentClassName}>{buttonContent}</span>
        </a>
      );
    }

    if (element === 'input') {
      return (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          id={id}
          name={name}
          type={type}
          value={value || text}
          className={baseClassName}
          disabled={disabled}
          aria-disabled={disabled ? 'true' : undefined}
          data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
          onClick={onClick as React.MouseEventHandler<HTMLInputElement>}
        />
      );
    }

    // Default: button
    return (
      <button
        ref={ref}
        id={id}
        name={name}
        type={type}
        value={value}
        className={baseClassName}
        disabled={disabled}
        aria-disabled={disabled ? 'true' : undefined}
        data-prevent-double-click={preventDoubleClick ? 'true' : undefined}
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      >
        {isLoading && spinnerContent}
        {isSuccess && successContent}
        <span className={contentClassName}>{buttonContent}</span>
      </button>
    );
  }
);

ButtonLoader.displayName = 'ButtonLoader';
