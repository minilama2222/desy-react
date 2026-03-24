import { clsx } from 'clsx';

export interface NavItemData {
  /** Unique identifier */
  id?: string;
  /** Link text */
  text?: string;
  /** Link HTML content */
  html?: string;
  /** URL for the link */
  href?: string;
  /** Router link path */
  routerLink?: string;
  /** Fragment identifier */
  fragment?: string;
  /** Router link active classes */
  routerLinkActiveClasses?: string | string[];
  /** Target attribute */
  target?: string;
  /** Is the item currently active */
  active?: boolean;
  /** Is the item disabled */
  disabled?: boolean;
  /** Show a divider after this item */
  divider?: boolean;
  /** Custom CSS classes for the link */
  classes?: string;
  /** Tab index */
  tabindex?: number;
}

export interface NavProps {
  /** Array of navigation items */
  items?: NavItemData[];
  /** Whether to wrap in a nav element */
  hasNav?: boolean;
  /** Unique identifier */
  id?: string;
  /** Prefix for auto-generated IDs */
  idPrefix?: string;
  /** Custom CSS classes */
  classes?: string;
  /** Click event handler */
  onClick?: (event: React.MouseEvent, item: NavItemData) => void;
  /** Additional class name */
  className?: string;
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 140 140"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block align-middle flex-initial ml-sm text-neutral-base fill-current"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zM20 70a50 50 0 0174.8-43.4 2.51 2.51 0 011.23 1.84 2.48 2.48 0 01-.71 2.1L30.54 95.32a2.51 2.51 0 01-3.94-.52A49.63 49.63 0 0120 70zm100 0a50 50 0 01-74.8 43.4 2.51 2.51 0 01-1.23-1.84 2.48 2.48 0 01.71-2.1l64.78-64.78a2.51 2.51 0 013.94.52A49.63 49.63 0 01120 70z" />
    </svg>
  );
}

function NavItem({
  item,
  index,
  idPrefix,
  onClick,
}: {
  item: NavItemData;
  index: number;
  idPrefix?: string;
  onClick?: (event: React.MouseEvent, item: NavItemData) => void;
}) {
  const id = item.id || `${idPrefix || 'nav-item'}-${index + 1}`;

  const content = item.html ? (
    <span dangerouslySetInnerHTML={{ __html: item.html }} />
  ) : (
    item.text
  );

  const linkClasses = clsx(
    'flex items-center px-base py-sm hover:bg-primary-base hover:text-white focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black',
    item.disabled && 'pointer-events-none',
    item.classes
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      document.getElementById(id)?.click();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    onClick?.(e, item);
  };

  const ariaCurrent = item.active ? 'page' : undefined;

  return (
    <>
      <li>
        {item.href ? (
          <a
            href={item.href}
            target={item.target}
            id={id}
            className={linkClasses}
            aria-disabled={item.disabled ? true : undefined}
            tabIndex={item.disabled ? -1 : item.tabindex}
            aria-current={ariaCurrent}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            {item.active ? <strong className="font-bold">{content}</strong> : content}
            {item.disabled && <LockIcon />}
          </a>
        ) : (
          <a
            href={item.routerLink || '#'}
            id={id}
            className={linkClasses}
            aria-disabled={item.disabled ? true : undefined}
            tabIndex={item.disabled ? -1 : item.tabindex}
            aria-current={ariaCurrent}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            {item.active ? <strong className="font-bold">{content}</strong> : content}
            {item.disabled && <LockIcon />}
          </a>
        )}
      </li>
      {item.divider && (
        <li className="my-sm border-b border-neutral-base" role="none" aria-hidden="true">
          <div className="sr-only">Separador</div>
        </li>
      )}
    </>
  );
}

/**
 * Nav component - provides navigation menu with keyboard support.
 */
export function Nav({
  items,
  hasNav = true,
  id,
  idPrefix = 'nav-item',
  classes,
  onClick,
  className,
}: NavProps) {
  const handleClick = (e: React.MouseEvent, item: NavItemData) => {
    // Toggle active state
    if (!item.active) {
      items?.forEach((i) => {
        i.active = false;
      });
      item.active = true;
    }
    onClick?.(e, item);
  };

  const listClassName = clsx('text-sm', classes, className);

  const inner = (
    <ul className={listClassName}>
      {items?.map((item, index) => (
        <NavItem
          key={item.id || index}
          item={item}
          index={index}
          idPrefix={idPrefix}
          onClick={handleClick}
        />
      ))}
    </ul>
  );

  if (!hasNav) {
    return <>{inner}</>;
  }

  return <nav id={id}>{inner}</nav>;
}
