import { clsx } from 'clsx';

export interface LinksListItemData {
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
  /** Target attribute (_blank, _self, etc.) */
  target?: string;
  /** Is the item currently active */
  active?: boolean;
  /** Is the item disabled */
  disabled?: boolean;
  /** Custom CSS classes for the link */
  classes?: string;
  /** Custom CSS classes for the container */
  containerClasses?: string;
  /** Icon to show before text */
  icon?: React.ReactNode;
  /** Icon to show after text */
  iconRight?: {
    type?: 'arrow' | 'chevron' | 'none';
    containerClasses?: string;
    content?: React.ReactNode;
  };
  /** Sub-content below the link */
  sub?: {
    classes?: string;
    content?: React.ReactNode;
  };
  /** Tab index */
  tabindex?: number;
}

export interface LinksListProps {
  /** Array of link items */
  items?: LinksListItemData[];
  /** Whether to wrap in a nav element */
  hasNav?: boolean;
  /** Custom CSS classes */
  classes?: string;
  /** CSS classes for the list */
  listClasses?: string;
  /** Prefix for auto-generated IDs */
  idPrefix?: string;
  /** Additional class name */
  className?: string;
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 140 140"
      className={clsx('self-center', className)}
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
    >
      <path
        d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      className={clsx('self-center', className)}
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.4685 0.427C3.8512 0.0443 4.4717 0.0443 4.8545 0.427L10.388 5.9606C10.962 6.5346 10.962 7.4654 10.388 8.0395L4.8545 13.573C4.4717 13.9557 3.8512 13.9557 3.4685 13.573C3.0858 13.1903 3.0858 12.5698 3.4685 12.1871L8.6556 7L3.4685 1.813C3.0858 1.4303 3.0858 0.8098 3.4685 0.427Z"
        clipRule="evenodd"
        strokeWidth="1"
      />
    </svg>
  );
}

function LinksListItem({ item, index, idPrefix }: { item: LinksListItemData; index: number; idPrefix?: string }) {
  const id = item.id || `${idPrefix || 'links-list-item'}-${index + 1}`;
  const subId = `sub-${id}`;

  const content = item.html ? (
    <span dangerouslySetInnerHTML={{ __html: item.html }} />
  ) : (
    item.text
  );

  const linkClasses = clsx(
    'c-link',
    item.classes || 'flex justify-between items-center gap-base flex-1 py-base',
    item.disabled && 'text-neutral-base no-underline pointer-events-none',
    item.active && 'font-bold'
  );

  const renderIcon = () => {
    if (!item.icon) return null;
    const iconClassName = item.iconRight?.containerClasses || 'self-center h-full';
    return <div className={iconClassName}>{item.icon}</div>;
  };

  const renderIconRight = () => {
    if (item.iconRight?.type === 'none') return null;

    const iconRightClassName = item.iconRight?.containerClasses || 'self-center h-full';

    if (item.iconRight?.type === 'chevron') {
      return (
        <div className={iconRightClassName}>
          <ChevronIcon />
        </div>
      );
    }

    // Default: arrow
    return (
      <div className={iconRightClassName}>
        {item.iconRight?.content || <ArrowIcon />}
      </div>
    );
  };

  const linkContent = (
    <div className="flex gap-base justify-between items-center flex-1">
      {renderIcon()}
      <div className="flex-1">
        {item.active ? <strong className="font-bold">{content}</strong> : content}
      </div>
      {renderIconRight()}
    </div>
  );

  const renderSub = () => {
    if (!item.sub) return null;
    return (
      <div id={subId} className={item.sub.classes || 'c-paragraph-base text-neutral-dark -mt-base mr-lg'}>
        {item.sub.content}
      </div>
    );
  };

  const tabIndexValue = item.disabled ? -1 : item.tabindex;

  if (item.href && !item.routerLink) {
    return (
      <li className={item.containerClasses || 'px-base relative'}>
        <a
          href={item.href}
          id={id}
          className={linkClasses}
          aria-current={item.active ? 'page' : undefined}
          aria-disabled={item.disabled ? true : undefined}
          tabIndex={tabIndexValue}
          target={item.target}
        >
          {linkContent}
        </a>
        {renderSub()}
      </li>
    );
  }

  if (!item.href && item.routerLink) {
    return (
      <li className={item.containerClasses || 'px-base relative'}>
        <a
          href={item.routerLink}
          id={id}
          className={linkClasses}
          aria-current={item.active ? 'page' : undefined}
          aria-disabled={item.disabled ? true : undefined}
          tabIndex={tabIndexValue}
        >
          {linkContent}
        </a>
        {renderSub()}
      </li>
    );
  }

  // No link - just a div
  return (
    <li className={item.containerClasses || 'px-base relative'}>
      <div
        id={id}
        className={linkClasses}
        aria-current={item.active ? 'page' : undefined}
        aria-disabled={item.disabled ? true : undefined}
        tabIndex={tabIndexValue}
      >
        {linkContent}
      </div>
      {renderSub()}
    </li>
  );
}

/**
 * LinksList component - displays a styled list of links with optional icons.
 */
export function LinksList({
  items,
  hasNav = true,
  classes,
  listClasses,
  idPrefix,
  className,
}: LinksListProps) {
  const listClassName = clsx(listClasses || 'divide-y divide-neutral-base');
  const wrapperClassName = clsx(classes, className);

  const inner = (
    <ul className={listClassName}>
      {items?.map((item, index) => (
        <LinksListItem key={item.id || index} item={item} index={index} idPrefix={idPrefix} />
      ))}
    </ul>
  );

  if (!hasNav) {
    return <div className={wrapperClassName}>{inner}</div>;
  }

  return <nav className={wrapperClassName}>{inner}</nav>;
}
