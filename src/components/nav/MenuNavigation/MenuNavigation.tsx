import { useCallback, useRef, useState } from 'react';
import { clsx } from 'clsx';

export interface MenuNavigationSubItem {
  id?: string;
  text?: string;
  html?: string;
  href?: string;
  routerLink?: string;
  fragment?: string;
  routerLinkActiveClasses?: string | string[];
  target?: string;
  active?: boolean;
  disabled?: boolean;
  classes?: string;
  ariaLabel?: string;
  title?: string;
  role?: 'none' | 'separator' | 'menuitem' | 'menuitemcheckbox' | 'menuitemradio';
  divider?: boolean;
  subItems?: MenuNavigationSubItem[];
}

export interface MenuNavigationItem {
  id?: string;
  text?: string;
  html?: string;
  href?: string;
  routerLink?: string;
  fragment?: string;
  routerLinkActiveClasses?: string | string[];
  target?: string;
  active?: boolean;
  disabled?: boolean;
  classes?: string;
  ariaLabel?: string;
  title?: string;
  divider?: boolean;
  sub?: {
    items: MenuNavigationSubItem[];
    classes?: string;
    ariaLabel?: string;
    ariaDisabled?: boolean;
  };
}

export interface MenuNavigationProps {
  id?: string;
  idPrefix?: string;
  items?: MenuNavigationItem[];
  classes?: string;
  ariaLabel?: string;
  className?: string;
  onActiveItemChange?: (item: MenuNavigationItem) => void;
  onActiveSubItemChange?: (item: MenuNavigationSubItem) => void;
}

function isPrintableChar(str: string): boolean {
  return str.length === 1 && !!str.match(/\S/);
}

function renderContent(text?: string, html?: string) {
  if (html) {
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <>{text}</>;
}

export function MenuNavigation({
  id,
  idPrefix = 'menu-navigation-item',
  items = [],
  classes,
  ariaLabel,
  className,
  onActiveItemChange,
  onActiveSubItemChange,
}: MenuNavigationProps) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [focusedItemIndex, setFocusedItemIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const itemRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
  const subMenuRefs = useRef<(HTMLUListElement | null)[]>([]);
  const subItemRefs = useRef<(HTMLAnchorElement | HTMLLIElement | null)[][]>([]);
  const containerRef = useRef<HTMLUListElement>(null);

  const closeAllMenus = useCallback(() => {
    setOpenMenuIndex(null);
  }, []);

  const getSubItems = (item: MenuNavigationItem): MenuNavigationSubItem[] => {
    return item.sub?.items ?? [];
  };

  const hasPopupMenu = (itemIndex: number): boolean => {
    const item = items[itemIndex];
    return !!(item.sub && getSubItems(item).length > 0);
  };

  const openMenu = (itemIndex: number) => {
    setOpenMenuIndex(itemIndex);
  };

  const focusMainItem = (itemIndex: number) => {
    const el = itemRefs.current[itemIndex];
    if (el) {
      el.focus();
    }
    setFocusedItemIndex(itemIndex);
  };

  const focusSubItem = (itemIndex: number, subIndex: number) => {
    const subItems = subItemRefs.current[itemIndex];
    if (subItems && subItems[subIndex]) {
      const el = subItems[subIndex] as HTMLElement;
      const anchor = el.querySelector<HTMLElement>('a, button');
      (anchor || el).focus();
    }
  };

  const focusNextAvailableMainItem = (fromIndex: number, step: number) => {
    let next = fromIndex;
    const len = items.length;
    do {
      next = (next + step + len) % len;
    } while (items[next].disabled && next !== fromIndex);
    if (next !== fromIndex) {
      focusMainItem(next);
    }
  };

  const isSubItemFocusable = (itemIndex: number, subIndex: number): boolean => {
    const subItems = getSubItems(items[itemIndex]);
    const item = subItems[subIndex];
    if (!item) return false;
    return item.role !== 'separator' && item.role !== 'none';
  };

  const focusNextAvailableSubItem = (itemIndex: number, fromSubIndex: number, step: number) => {
    const subItems = getSubItems(items[itemIndex]);
    let next = fromSubIndex;
    let allChecked = false;
    do {
      next = (next + step + subItems.length) % subItems.length;
      allChecked = next === fromSubIndex;
    } while (!isSubItemFocusable(itemIndex, next) && !allChecked);

    if (!allChecked) {
      focusSubItem(itemIndex, next);
    }
  };

  const handleMainKeyDown = (e: React.KeyboardEvent, itemIndex: number) => {
    const hasPopup = hasPopupMenu(itemIndex);
    const itemsLen = items.length;

    switch (e.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        if (hasPopup) {
          openMenu(itemIndex);
          setTimeout(() => focusSubItem(itemIndex, 0));
          e.stopPropagation();
          e.preventDefault();
        }
        break;

      case 'Escape':
        if (hasPopup && openMenuIndex === itemIndex) {
          closeAllMenus();
        }
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'ArrowLeft':
        focusNextAvailableMainItem(itemIndex, -1);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'ArrowRight':
        focusNextAvailableMainItem(itemIndex, +1);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'ArrowUp':
        if (hasPopup) {
          const subItems = getSubItems(items[itemIndex]);
          openMenu(itemIndex);
          setTimeout(() => focusSubItem(itemIndex, subItems.length - 1));
        }
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'Home':
      case 'PageUp':
        closeAllMenus();
        focusNextAvailableMainItem(-1, +1);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'End':
      case 'PageDown':
        closeAllMenus();
        focusNextAvailableMainItem(itemsLen, -1);
        e.stopPropagation();
        e.preventDefault();
        break;

      default:
        if (isPrintableChar(e.key)) {
          const current = focusedItemIndex;
          let found = -1;
          let i = current;
          do {
            i = (i + 1) % itemsLen;
            const text = items[i].text ?? '';
            if (text.trim().charAt(0).toLowerCase() === e.key.toLowerCase() && !items[i].disabled) {
              found = i;
            }
          } while (found === -1 && i !== current);
          if (found >= 0) {
            focusMainItem(found);
          }
          e.stopPropagation();
          e.preventDefault();
        }
        break;
    }
  };

  const handleMainClick = (e: React.MouseEvent, itemIndex: number) => {
    if (hasPopupMenu(itemIndex)) {
      e.preventDefault();
      if (openMenuIndex === itemIndex) {
        closeAllMenus();
      } else {
        openMenu(itemIndex);
      }
    } else {
      onActiveItemChange?.(items[itemIndex]);
    }
  };

  const handleSubMenuKeyDown = (e: React.KeyboardEvent, itemIndex: number, subIndex: number) => {
    const subItems = getSubItems(items[itemIndex]);
    const item = subItems[subIndex];
    const mustClose = item.role !== 'menuitemcheckbox' && item.role !== 'menuitemradio';

    switch (e.key) {
      case ' ':
        if (mustClose) {
          closeAllMenus();
          focusMainItem(itemIndex);
        }
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'Enter':
        closeAllMenus();
        focusMainItem(itemIndex);
        onActiveSubItemChange?.(item);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'Escape':
        closeAllMenus();
        focusMainItem(itemIndex);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'ArrowUp':
        focusNextAvailableSubItem(itemIndex, subIndex, -1);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'ArrowDown':
        focusNextAvailableSubItem(itemIndex, subIndex, +1);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'ArrowLeft':
        closeAllMenus();
        focusMainItem((itemIndex - 1 + items.length) % items.length);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'ArrowRight':
        closeAllMenus();
        focusMainItem((itemIndex + 1) % items.length);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'Home':
      case 'PageUp':
        focusSubItem(itemIndex, 0);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'End':
      case 'PageDown':
        focusSubItem(itemIndex, subItems.length - 1);
        e.stopPropagation();
        e.preventDefault();
        break;

      case 'Tab':
        closeAllMenus();
        focusMainItem(itemIndex);
        break;

      default:
        if (isPrintableChar(e.key)) {
          let found = -1;
          let i = subIndex;
          let allChecked = false;
          do {
            i = (i + 1) % subItems.length;
            const text = subItems[i].text ?? '';
            if (text.trim().charAt(0).toLowerCase() === e.key.toLowerCase() && isSubItemFocusable(itemIndex, i)) {
              found = i;
            }
            allChecked = i === subIndex;
          } while (found === -1 && !allChecked);
          if (found >= 0) {
            focusSubItem(itemIndex, found);
          }
          e.stopPropagation();
          e.preventDefault();
        }
        break;
    }
  };

  const handleSubItemClick = (itemIndex: number, subIndex: number) => {
    const subItems = getSubItems(items[itemIndex]);
    onActiveSubItemChange?.(subItems[subIndex]);
    closeAllMenus();
    focusMainItem(itemIndex);
  };

  const handleContainerFocusIn = () => setIsFocused(true);
  const handleContainerFocusOut = (e: React.FocusEvent<HTMLUListElement>) => {
    if (containerRef.current && !containerRef.current.contains(e.relatedTarget as Node)) {
      closeAllMenus();
    }
    setIsFocused(false);
  };

  const containerId = id ? `${id}-menu-navigation` : undefined;

  return (
    <ul
      ref={containerRef}
      id={containerId}
      role="navigation"
      aria-label={ariaLabel}
      onFocus={handleContainerFocusIn}
      onBlur={handleContainerFocusOut}
      className={clsx(
        'flex flex-wrap gap-base',
        isFocused && 'focus',
        classes,
        className
      )}
    >
      {items.map((item, itemIndex) => {
        const subItems = getSubItems(item);
        const hasSub = hasPopupMenu(itemIndex);
        const isOpen = openMenuIndex === itemIndex;
        const itemId = item.id ?? `${idPrefix}-${itemIndex + 1}`;

        const buttonClasses = clsx(
          'c-menu-navigation__button',
          item.classes,
          item.disabled && 'c-menu-navigation__button--disabled',
          item.active && 'c-menu-navigation__button--primary c-menu-navigation__button--has-selection'
        );

        const linkBaseClasses = 'flex items-center px-base py-sm text-sm hover:bg-primary-base hover:text-white focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black';

        return (
          <li key={item.id || itemIndex} className="relative">
            {item.href ? (
              <a
                ref={(el) => { itemRefs.current[itemIndex] = el; }}
                id={itemId}
                href={item.href}
                target={item.target}
                onClick={(e) => handleMainClick(e, itemIndex)}
                onKeyDown={(e) => handleMainKeyDown(e, itemIndex)}
                title={item.title}
                aria-disabled={item.disabled ?? undefined}
                aria-current={item.disabled ? 'page' : item.ariaLabel ? undefined : undefined}
                tabIndex={item.disabled ? -1 : itemIndex === focusedItemIndex ? 0 : -1}
                className={buttonClasses}
              >
                <span className="inline-flex self-center align-middle pointer-events-none">
                  {renderContent(item.text, item.html)}
                </span>
              </a>
            ) : item.routerLink ? (
              <a
                ref={(el) => { itemRefs.current[itemIndex] = el; }}
                id={itemId}
                href={item.routerLink}
                onClick={(e) => handleMainClick(e, itemIndex)}
                onKeyDown={(e) => handleMainKeyDown(e, itemIndex)}
                title={item.title}
                aria-disabled={item.disabled ?? undefined}
                aria-current={item.disabled ? 'page' : item.ariaLabel ? undefined : undefined}
                tabIndex={item.disabled ? -1 : itemIndex === focusedItemIndex ? 0 : -1}
                className={buttonClasses}
              >
                <span className="inline-flex self-center align-middle pointer-events-none">
                  {renderContent(item.text, item.html)}
                </span>
              </a>
            ) : (
              <button
                ref={(el) => { itemRefs.current[itemIndex] = el; }}
                id={itemId}
                onClick={(e) => handleMainClick(e as unknown as React.MouseEvent, itemIndex)}
                onKeyDown={(e) => handleMainKeyDown(e, itemIndex)}
                title={item.title}
                disabled={item.disabled ?? undefined}
                aria-disabled={item.disabled ?? undefined}
                aria-expanded={hasSub ? isOpen : undefined}
                aria-haspopup={hasSub ? isOpen : undefined}
                aria-controls={hasSub ? `${id ?? 'menu-navigation'}-sub-list-${itemIndex}` : undefined}
                tabIndex={item.disabled ? -1 : itemIndex === focusedItemIndex ? 0 : -1}
                className={buttonClasses}
              >
                {item.active && <span className="sr-only">Item activo:</span>}
                <span className="inline-flex self-center align-middle pointer-events-none">
                  {renderContent(item.text, item.html)}
                </span>
                {hasSub && (
                  <svg
                    className="inline-block -mr-2 align-middle -my-px pointer-events-none"
                    viewBox="0 0 96 96"
                    aria-hidden="true"
                    fill="currentColor"
                    focusable="false"
                    width="1.5em"
                    height="1.5em"
                  >
                    <path d="M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z" />
                  </svg>
                )}
              </button>
            )}

            {hasSub && subItems.length > 0 && (
              <div className="c-menu-navigation__sub absolute bottom-0 left-0">
                <ul
                  id={`${id ?? 'menu-navigation'}-sub-list-${itemIndex}`}
                  role="menu"
                  tabIndex={-1}
                  ref={(el) => { subMenuRefs.current[itemIndex] = el; }}
                  className={clsx(
                    item.sub?.classes ?? 'c-menu-navigation__tooltip w-max max-w-64 border border-neutral-base shadow-md bg-white text-sm'
                  )}
                  aria-label={item.sub?.ariaLabel ?? item.ariaLabel}
                  aria-disabled={item.sub?.ariaDisabled ?? undefined}
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  {subItems.map((subItem, subItemIndex) => {
                    const subItemId = subItem.id ?? `sub-${itemId}-${subItemIndex + 1}`;
                    const subItemLinkClasses = clsx(linkBaseClasses, subItem.classes);

                    if (subItem.divider) {
                      return (
                        <li
                          key={subItem.id || subItemIndex}
                          className="my-sm border-b border-neutral-base"
                          role="presentation"
                          aria-hidden="true"
                        />
                      );
                    }

                    if (subItem.role === 'separator' || subItem.role === 'none') {
                      return null;
                    }

                    return (
                      <li
                        key={subItem.id || subItemIndex}
                        id={subItemId}
                        ref={(el) => {
                          if (!subItemRefs.current[itemIndex]) {
                            subItemRefs.current[itemIndex] = [];
                          }
                          subItemRefs.current[itemIndex][subItemIndex] = el;
                        }}
                        tabIndex={-1}
                        onClick={() => handleSubItemClick(itemIndex, subItemIndex)}
                        onKeyDown={(e) => handleSubMenuKeyDown(e, itemIndex, subItemIndex)}
                        className={clsx(subItem.disabled && 'pointer-events-none')}
                      >
                        {subItem.href ? (
                          <a
                            href={subItem.href}
                            target={subItem.target}
                            onClick={() => handleSubItemClick(itemIndex, subItemIndex)}
                            onKeyDown={(e) => handleSubMenuKeyDown(e, itemIndex, subItemIndex)}
                            tabIndex={subItem.disabled ? -1 : undefined}
                            aria-current={subItem.active ? 'page' : undefined}
                            className={subItemLinkClasses}
                          >
                            {renderContent(subItem.text, subItem.html)}
                            {subItem.disabled && (
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
                            )}
                          </a>
                        ) : subItem.routerLink ? (
                          <a
                            href={subItem.routerLink}
                            onClick={() => handleSubItemClick(itemIndex, subItemIndex)}
                            onKeyDown={(e) => handleSubMenuKeyDown(e, itemIndex, subItemIndex)}
                            tabIndex={subItem.disabled ? -1 : undefined}
                            aria-current={subItem.active ? 'page' : undefined}
                            className={subItemLinkClasses}
                          >
                            {renderContent(subItem.text, subItem.html)}
                            {subItem.disabled && (
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
                            )}
                          </a>
                        ) : (
                          <button
                            onClick={() => handleSubItemClick(itemIndex, subItemIndex)}
                            onKeyDown={(e) => handleSubMenuKeyDown(e, itemIndex, subItemIndex)}
                            tabIndex={subItem.disabled ? -1 : undefined}
                            aria-current={subItem.active ? 'page' : undefined}
                            className={subItemLinkClasses}
                          >
                            {renderContent(subItem.text, subItem.html)}
                            {subItem.disabled && (
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
                            )}
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
