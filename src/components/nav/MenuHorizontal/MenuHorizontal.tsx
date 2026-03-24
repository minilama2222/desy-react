import { clsx } from 'clsx';

export interface MenuHorizontalItemData {
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
  /** Is the item active */
  active?: boolean;
  /** Is the item disabled */
  disabled?: boolean;
  /** Custom CSS classes */
  classes?: string;
  /** Accessibility label */
  ariaLabel?: string;
  /** Tab index */
  tabindex?: number;
}

export interface MenuHorizontalProps {
  /** Unique identifier */
  id?: string;
  /** Prefix for auto-generated IDs */
  idPrefix?: string;
  /** Array of menu items */
  items?: MenuHorizontalItemData[];
  /** Custom CSS classes */
  classes?: string;
  /** Click event handler */
  onClick?: (event: React.MouseEvent, item: MenuHorizontalItemData) => void;
  /** Additional class name */
  className?: string;
}

/**
 * MenuHorizontal component - displays a horizontal navigation menu.
 */
export function MenuHorizontal({
  id,
  idPrefix = 'menu-item',
  items,
  classes,
  onClick,
  className,
}: MenuHorizontalProps) {
  const containerClassName = clsx('c-menu-horizontal', classes, className);

  const handleClick = (e: React.MouseEvent, item: MenuHorizontalItemData) => {
    // Toggle active state
    if (!item.active) {
      items?.forEach((i) => {
        i.active = false;
      });
      item.active = true;
    }
    onClick?.(e, item);
  };

  return (
    <nav id={id} className={containerClassName}>
      <ul className="c-menu-horizontal__list lg:flex lg:flex-wrap">
        {items?.map((item, index) => {
          const itemId = item.id || `${idPrefix}-${index + 1}`;

          const content = item.html ? (
            <span dangerouslySetInnerHTML={{ __html: item.html }} />
          ) : (
            item.text
          );

          const linkClasses = clsx(
            'c-menu-horizontal__link',
            'relative',
            'flex',
            'items-center',
            'px-base',
            'py-sm',
            'lg:py-base',
            'border',
            'border-transparent',
            'text-black',
            'hover:text-primary-base',
            'underline',
            'truncate',
            'focus:outline-hidden',
            item.disabled && 'no-underline pointer-events-none',
            item.active && 'c-menu-horizontal__active',
            item.classes
          );

          const commonProps = {
            id: itemId,
            className: linkClasses,
            'aria-disabled': item.disabled ?? undefined,
            tabIndex: item.disabled ? -1 : item.tabindex,
          };

          const linkContent = item.active ? (
            <strong className="flex items-center pointer-events-none font-bold">{content}</strong>
          ) : (
            <span className="flex items-center pointer-events-none">{content}</span>
          );

          return (
            <li key={item.id || index}>
              {item.routerLink && !item.href ? (
                <a
                  href={item.routerLink}
                  onClick={(e) => handleClick(e, item)}
                  {...commonProps}
                >
                  {linkContent}
                </a>
              ) : (
                <a
                  href={item.href || '#'}
                  onClick={(e) => handleClick(e, item)}
                  target={item.target}
                  {...commonProps}
                >
                  {linkContent}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
