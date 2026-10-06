import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ToggleOnStateProps {
  /** Custom CSS classes */
  classes?: string;
  /** Child content */
  children?: ReactNode;
}

export interface ToggleOffStateProps {
  /** Custom CSS classes */
  classes?: string;
  /** Child content */
  children?: ReactNode;
}

export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /** Unique identifier */
  id?: string;
  /** Render as switch (checkbox-like) or regular toggle */
  isSwitch?: boolean;
  /** Current pressed/on state */
  pressed?: boolean;
  /** CSS classes to append to the default toggle class */
  classes?: string;
  /** Whether toggle is expandable */
  isExpandible?: boolean;
  /** Id of the panel controlled by an expandable toggle (emits aria-controls) */
  controlsId?: string;
  /** Content shown when toggled on */
  onState?: ReactNode;
  /** Content shown when toggled off */
  offState?: ReactNode;
  /** Content shown when toggled on (as props) */
  onStateContent?: ReactNode;
  /** Content shown when toggled off (as props) */
  offStateContent?: ReactNode;
  /** CSS classes for the on state */
  onStateClasses?: string;
  /** CSS classes for the off state */
  offStateClasses?: string;
  /** Change event handler */
  onPressedChange?: (pressed: boolean) => void;
  /** Click event handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Toggle component - an on/off switch control.
 * Supports switch mode (checkbox-like) and regular toggle modes.
 * Uses aria-pressed or aria-checked for accessibility.
 */
export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (props, ref) => {
    const {
      id,
      isSwitch = false,
      pressed = false,
      classes,
      isExpandible,
      controlsId,
      children,
      onState,
      offState,
      onStateContent,
      offStateContent,
      onStateClasses,
      offStateClasses,
      onPressedChange,
      onClick,
      ...rest
    } = props;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const newPressed = !pressed;
      onPressedChange?.(newPressed);
      onClick?.(event);
    };

    const onContent = children || onState || onStateContent;
    const offContent = offState || offStateContent;

    const buttonClassName = clsx(
      'c-toggle__button',
      // Non-switch toggles render as a button in the reference (`c-toggle__button c-button`);
      // switches use their own look without `c-button`.
      !isSwitch && 'c-button',
      pressed && isExpandible && 'c-toggle--is-opened',
      classes
    );

    // `aria-pressed` must not be emitted together with `role="switch"`/`aria-checked`
    // (a switch communicates its state via aria-checked only).
    const ariaPressed = !isExpandible && !isSwitch ? (pressed ? 'true' : 'false') : undefined;
    const ariaChecked = isSwitch ? (pressed ? 'true' : 'false') : undefined;
    const ariaExpanded = isExpandible ? (pressed ? 'true' : 'false') : undefined;
    const ariaControls = isExpandible ? controlsId : undefined;

    return (
      <div className="relative c-toggle" data-module="c-toggle">
        <button
          ref={ref}
          id={id}
          type="button"
          className={buttonClassName}
          aria-pressed={ariaPressed}
          aria-checked={ariaChecked}
          aria-expanded={ariaExpanded}
          aria-controls={ariaControls}
          role={isSwitch ? 'switch' : undefined}
          onClick={handleClick}
          {...rest}
        >
          <span className={clsx('c-button--is-not-pressed', 'pointer-events-none', !pressed && onStateClasses, pressed && offStateClasses)}>
            {offContent}
          </span>
          <span className={clsx('c-button--is-pressed', 'hidden', 'pointer-events-none', pressed && onStateClasses, !pressed && offStateClasses)}>
            {onContent}
          </span>
        </button>
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
