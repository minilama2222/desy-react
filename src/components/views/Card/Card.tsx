import { type HTMLAttributes, type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom CSS classes for the outer container */
  className?: string;
  /** CSS classes for the inner container */
  containerClasses?: string;
  /** Left side image/content */
  left?: ReactNode;
  /** Right side image/content */
  right?: ReactNode;
  /** Top image/content */
  super?: ReactNode;
  /** Bottom image/content */
  sub?: ReactNode;
  /** Left background color */
  leftBackgroundColor?: string;
  /** Right background color */
  rightBackgroundColor?: string;
  /** Super background color */
  superBackgroundColor?: string;
  /** Sub background color */
  subBackgroundColor?: string;
  /** Left background image URL */
  leftBackgroundImageUrl?: string;
  /** Right background image URL */
  rightBackgroundImageUrl?: string;
  /** Super background image URL */
  superBackgroundImageUrl?: string;
  /** Sub background image URL */
  subBackgroundImageUrl?: string;
  /** Left CSS classes */
  leftClasses?: string;
  /** Right CSS classes */
  rightClasses?: string;
  /** Super CSS classes */
  superClasses?: string;
  /** Sub CSS classes */
  subClasses?: string;
  /** Child content */
  children?: ReactNode;
}

function CardSector({
  content,
  backgroundColor,
  backgroundImageUrl,
  classes,
  defaultClasses,
}: {
  content?: ReactNode;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  classes?: string;
  defaultClasses: string;
}) {
  if (!content && !backgroundColor && !backgroundImageUrl) return null;

  const style: React.CSSProperties = {};
  if (backgroundColor) style.backgroundColor = backgroundColor;
  if (backgroundImageUrl) style.backgroundImage = `url(${backgroundImageUrl})`;

  return (
    <div
      className={clsx(classes || defaultClasses)}
      style={Object.keys(style).length > 0 ? style : undefined}
    >
      {content}
    </div>
  );
}

/**
 * Card component - a flexible card container with optional header, footer, and side panels.
 */
export function Card({
  className,
  containerClasses,
  left,
  right,
  super: cardSuper,
  sub,
  leftBackgroundColor,
  rightBackgroundColor,
  superBackgroundColor,
  subBackgroundColor,
  leftBackgroundImageUrl,
  rightBackgroundImageUrl,
  superBackgroundImageUrl,
  subBackgroundImageUrl,
  leftClasses,
  rightClasses,
  superClasses,
  subClasses,
  children,
  ...props
}: CardProps) {
  return (
    <div className={clsx(className)} {...props}>
      <div className={clsx(containerClasses)}>
        <div className="flex">
          {/* Main content */}
          <div className={clsx('flex-1', (left || right) && '')}>
            {children}
          </div>
          {/* Left sector */}
          <CardSector
            content={left}
            backgroundColor={leftBackgroundColor}
            backgroundImageUrl={leftBackgroundImageUrl}
            classes={leftClasses}
            defaultClasses="w-1/2 bg-cover bg-center bg-no-repeat overflow-hidden"
          />
          {/* Right sector */}
          <CardSector
            content={right}
            backgroundColor={rightBackgroundColor}
            backgroundImageUrl={rightBackgroundImageUrl}
            classes={rightClasses}
            defaultClasses="w-1/2 bg-cover bg-center bg-no-repeat overflow-hidden"
          />
        </div>
        {/* Super (top) sector */}
        <CardSector
          content={cardSuper}
          backgroundColor={superBackgroundColor}
          backgroundImageUrl={superBackgroundImageUrl}
          classes={superClasses}
          defaultClasses="h-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        />
        {/* Sub (bottom) sector */}
        <CardSector
          content={sub}
          backgroundColor={subBackgroundColor}
          backgroundImageUrl={subBackgroundImageUrl}
          classes={subClasses}
          defaultClasses="h-32 bg-cover bg-center bg-no-repeat overflow-hidden"
        />
      </div>
    </div>
  );
}
