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

    const stateClasses = pressed
      ? clsx(classes, onStateClasses)
      : clsx(classes, offStateClasses);

    const ariaPressed = !isExpandible ? (pressed ? 'true' : 'false') : undefined;
    const ariaChecked = isSwitch ? (pressed ? 'true' : 'false') : undefined;
    const ariaExpanded = isExpandible ? (pressed ? 'true' : 'false') : undefined;

    return (
      <button
        ref={ref}
        id={id}
        type="button"
        className={stateClasses}
        aria-pressed={ariaPressed}
        aria-checked={ariaChecked}
        aria-expanded={ariaExpanded}
        role={isSwitch ? 'switch' : undefined}
        onClick={handleClick}
        {...rest}
      >
        {onContent && (
          <span className={clsx(!pressed && 'hidden')}>
            {onContent}
          </span>
        )}
        {offContent && (
          <span className={clsx(pressed && 'hidden')}>
            {offContent}
          </span>
        )}
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';
