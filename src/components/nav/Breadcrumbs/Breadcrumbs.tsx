import { clsx } from 'clsx';
import { BreadcrumbsItem } from './BreadcrumbsItem';
import type { BreadcrumbsItemProps } from './BreadcrumbsItem';

export interface BreadcrumbsData {
  /** Text content */
  text?: string;
  /** HTML content */
  html?: string;
  /** Router link path */
  routerLink?: string;
  /** Unique identifier */
  id?: string;
  /** Accessibility text */
  ariaLabel?: string;
}

export interface BreadcrumbsProps {
  /** Array of breadcrumb items */
  items?: BreadcrumbsData[];
  /** Custom CSS classes */
  classes?: string;
  /** Unique identifier */
  id?: string;
  /** Collapse navigation on mobile */
  collapseOnMobile?: boolean;
  /** Show inline on mobile */
  inlineOnMobile?: boolean;
  /** Show inline on desktop */
  inlineOnDesktop?: boolean;
  /** Show back button */
  hasBackButton?: boolean;
  /** Accessibility label */
  ariaLabel?: string;
  /** Additional class name */
  className?: string;
}

function getGridCols(length: number): string {
  const cols: Record<number, string> = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
    7: 'lg:grid-cols-7',
    8: 'lg:grid-cols-8',
  };
  return cols[length] ?? 'lg:grid';
}

function BackButton() {
  return (
    <li className="c-breadcrumbs__backbutton flex items-baseline font-bold text-primary-base">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window !== 'undefined' && window.history.length > 1) {
            window.history.back();
          }
        }}
        className="px-sm border-r border-neutral-base focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black cursor-pointer"
      >
        <span className="sr-only">Volver a la página anterior</span>
        <span aria-hidden="true" title="Volver a la página anterior">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 140 140"
            className="self-center mr-2"
            aria-hidden="true"
            focusable="false"
            width="1em"
            height="1em"
          >
            <path
              d="M37.93 27.93l-35 35a10 10 0 000 14.14l35 35a10 10 0 1014.14-14.14L38.41 84.27A2.5 2.5 0 0140.18 80H130a10 10 0 000-20H40.18a2.5 2.5 0 01-1.77-4.27l13.66-13.66a10 10 0 00-14.14-14.14z"
              fill="currentColor"
            />
          </svg>
        </span>
      </a>
    </li>
  );
}

function BreadcrumbLink({ item, isLast }: { item: BreadcrumbsData; isLast: boolean }) {
  const content = item.html ? (
    <span dangerouslySetInnerHTML={{ __html: item.html }} />
  ) : (
    item.text
  );

  const linkClassName = clsx(
    'underline',
    'focus:bg-warning-base',
    'focus:outline-hidden',
    'focus:shadow-outline-focus',
    'focus:text-black',
    'truncate',
    isLast ? 'text-black font-semibold no-underline' : ''
  );

  if (item.routerLink) {
    return (
      <a
        href={item.routerLink}
        id={item.id}
        className={linkClassName}
        aria-current={isLast ? 'page' : undefined}
      >
        {isLast ? <strong>{content}</strong> : content}
      </a>
    );
  }

  return (
    <span
      id={item.id}
      className={clsx('no-underline', 'truncate', isLast ? 'text-black' : '')}
      aria-current={isLast ? 'page' : undefined}
    >
      {isLast ? <strong>{content}</strong> : content}
    </span>
  );
}

/**
 * Breadcrumbs component - provides navigation breadcrumb trail.
 * Shows the user's location within the site hierarchy.
 */
export function Breadcrumbs({
  items,
  classes,
  id,
  collapseOnMobile,
  inlineOnMobile,
  inlineOnDesktop,
  hasBackButton,
  ariaLabel,
  className,
}: BreadcrumbsProps) {
  // Support compound component pattern via children
  const itemCount = items?.length ?? 0;
  const totalItems = itemCount + (hasBackButton ? 1 : 0);

  const navClassName = clsx(
    'c-breadcrumbs',
    collapseOnMobile && 'c-breadcrumbs--collapse-on-mobile',
    inlineOnMobile && 'c-breadcrumbs--inline-on-mobile',
    inlineOnDesktop && 'c-breadcrumbs--inline-on-desktop',
    classes,
    className
  );

  const olClassName = clsx(
    'w-full',
    'items-baseline',
    'text-sm',
    getGridCols(totalItems)
  );

  return (
    <nav
      id={id}
      className={navClassName}
      aria-label={ariaLabel || 'Estás en: '}
    >
      <ol className={olClassName}>
        {hasBackButton && <BackButton />}
        {items?.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.id || index}
              className={clsx(
                'flex',
                'items-baseline',
                'max-w-full',
                'mb-sm',
                'py-xs',
                'text-neutral-dark',
                isLast && 'flex-1 font-semibold'
              )}
            >
              <BreadcrumbLink item={item} isLast={isLast} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export { BreadcrumbsItem };
export type { BreadcrumbsItemProps };
