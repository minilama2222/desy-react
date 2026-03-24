import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface BreadcrumbsItemProps {
  /** Unique identifier */
  id?: string;
  /** Router link path */
  routerLink?: string;
  /** Child elements */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
}

/**
 * BreadcrumbsItem component - individual breadcrumb item for compound component pattern.
 * Used as a child of Breadcrumbs component.
 */
export function BreadcrumbsItem({ id, routerLink, children }: BreadcrumbsItemProps) {
  return (
    <li
      id={id}
      className={clsx(
        'flex',
        'items-baseline',
        'max-w-full',
        'mb-sm',
        'py-xs',
        'text-neutral-dark',
        'flex-1',
        'font-semibold'
      )}
    >
      {routerLink ? (
        <a
          href={routerLink}
          className="text-black no-underline truncate focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black"
          aria-current="page"
        >
          <strong>{children}</strong>
        </a>
      ) : (
        <span className="text-black no-underline truncate" aria-current="page">
          <strong>{children}</strong>
        </span>
      )}
    </li>
  );
}
