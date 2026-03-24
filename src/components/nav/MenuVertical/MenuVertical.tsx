import { clsx } from 'clsx';

export interface MenuVerticalSubItemData {
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
  /** Target attribute */
  target?: string;
  /** Is the item disabled */
  disabled?: boolean;
  /** Is the item active */
  active?: boolean;
  /** Show a divider */
  divider?: boolean;
  /** Custom CSS classes */
  classes?: string;
}

export interface MenuVerticalSubData {
  /** HTML content */
  html?: string;
  /** Custom CSS classes */
  classes?: string;
  /** Sub-items */
  items?: MenuVerticalSubItemData[];
}

export interface MenuVerticalItemData {
  /** Unique identifier */
  id?: string;
  /** Link text */
  text?: string;
  /** Link HTML content */
  html?: string;
  /** Custom CSS classes */
  classes?: string;
  /** URL for the link */
  href?: string;
  /** Router link path */
  routerLink?: string;
  /** Fragment identifier */
  fragment?: string;
  /** Target attribute */
  target?: string;
  /** Is the item disabled */
  disabled?: boolean;
  /** Is the item active */
  active?: boolean;
  /** Show a divider */
  divider?: boolean;
  /** Sub-menu data */
  sub?: MenuVerticalSubData;
}

export interface MenuVerticalProps {
  /** Unique identifier */
  id?: string;
  /** Prefix for auto-generated IDs */
  idPrefix?: string;
  /** Array of menu items */
  items?: MenuVerticalItemData[];
  /** Show underline on hover */
  hasUnderline?: boolean;
  /** Custom CSS classes */
  classes?: string;
  /** Additional class name */
  className?: string;
}

function MenuVerticalItem({
  item,
  index,
  idPrefix,
  hasUnderline,
  isRoot = true,
}: {
  item: MenuVerticalItemData;
  index: number;
  idPrefix?: string;
  hasUnderline?: boolean;
  isRoot?: boolean;
}) {
  const id = item.id || `${idPrefix || 'nav-item'}-${index + 1}`;

  const content = item.html ? (
    <span dangerouslySetInnerHTML={{ __html: item.html }} />
  ) : (
    item.text
  );

  const linkClasses = clsx(
    'block px-xs focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black',
    hasUnderline && 'underline',
    !item.disabled && 'hover:text-primary-base hover:underline',
    item.disabled && 'no-underline pointer-events-none',
    item.classes
  );

  const ariaCurrent: 'page' | undefined = item.active ? 'page' : undefined;

  const renderContent = () =>
    item.active ? <strong className="font-bold">{content}</strong> : content;

  const renderLink = () => {
    if (item.href) {
      return (
        <a href={item.href} id={id} className={linkClasses} tabIndex={item.disabled ? -1 : undefined} target={item.target ?? undefined} aria-current={ariaCurrent} aria-disabled={item.disabled ? true : undefined}>
          {renderContent()}
        </a>
      );
    }
    if (item.routerLink) {
      return (
        <a href={item.routerLink} id={id} className={linkClasses} tabIndex={item.disabled ? -1 : undefined} target={item.target ?? undefined} aria-current={ariaCurrent} aria-disabled={item.disabled ? true : undefined}>
          {renderContent()}
        </a>
      );
    }
    return (
      <span id={id} className={clsx('block px-xs', item.classes)} tabIndex={item.disabled ? -1 : undefined} aria-current={ariaCurrent} aria-disabled={item.disabled ? true : undefined}>
        {renderContent()}
      </span>
    );
  };

  const renderSubItems = () => {
    if (!isRoot || !item.sub?.items) return null;

    return (
      <ul className={item.sub.classes}>
        {item.sub.items.map((subItem, subIndex) => (
          <MenuVerticalItem
            key={subItem.id || subIndex}
            item={subItem}
            index={subIndex}
            idPrefix={`sub-${id}`}
            hasUnderline={hasUnderline}
            isRoot={false}
          />
        ))}
      </ul>
    );
  };

  const renderSubContent = () => {
    if (!isRoot || !item.sub?.html) return null;
    return (
      <div className={clsx('mb-base px-xs origin-top-left text-sm text-neutral-dark', item.sub.classes)}>
        <span dangerouslySetInnerHTML={{ __html: item.sub.html }} />
      </div>
    );
  };

  return (
    <>
      <li className={clsx('my-base break-inside-avoid-column', !isRoot && 'origin-top-left text-sm')}>
        {renderLink()}
        {renderSubItems()}
        {renderSubContent()}
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
 * MenuVertical component - displays a vertical navigation menu with optional sub-menus.
 */
export function MenuVertical({
  id,
  idPrefix,
  items,
  hasUnderline,
  classes,
  className,
}: MenuVerticalProps) {
  return (
    <nav id={id} className={clsx(classes, className)}>
      <ul className="text-base">
        {items?.map((item, index) => (
          <MenuVerticalItem
            key={item.id || index}
            item={item}
            index={index}
            idPrefix={idPrefix}
            hasUnderline={hasUnderline}
            isRoot={true}
          />
        ))}
      </ul>
    </nav>
  );
}
