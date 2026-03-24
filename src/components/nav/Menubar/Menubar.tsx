import { type ReactNode, useState, useRef, type KeyboardEvent } from 'react';
import { clsx } from 'clsx';

export interface MenubarItemSubItemData {
  /** Unique identifier */
  id?: string;
  /** ARIA label */
  ariaLabel?: string;
  /** Item text */
  text?: string;
  /** Item HTML content */
  html?: string;
  /** Role: 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' | 'separator' | 'group' | 'none' */
  role?: string;
  /** Is the item checked (for checkbox/radio) */
  checked?: boolean;
  /** Sub-items (for group role) */
  items?: MenubarItemSubItemData[];
}

export interface MenubarItemSubData {
  /** ARIA label */
  ariaLabel?: string;
  /** Custom CSS classes */
  classes?: string;
  /** Sub-items */
  items?: MenubarItemSubItemData[];
}

export interface MenubarItemData {
  /** Unique identifier */
  id?: string;
  /** ARIA label */
  ariaLabel?: string;
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
  /** Sub-menu data */
  sub?: MenubarItemSubData;
  /** Custom CSS classes */
  classes?: string;
}

export interface MenubarProps {
  /** Unique identifier */
  id?: string;
  /** Prefix for auto-generated IDs */
  idPrefix?: string;
  /** Array of menu items */
  items?: MenubarItemData[];
  /** Click event handler for menu items */
  onClick?: (item: MenubarItemData) => void;
  /** Item selection change handler */
  onItemsChange?: (items: MenubarItemData[]) => void;
  /** Active item change handler */
  onActiveItemChange?: (item: MenubarItemData) => void;
  /** Custom CSS classes */
  classes?: string;
  /** Label text */
  labelText?: string;
  /** Label HTML content */
  labelHtml?: string;
  /** Accessibility label for the menubar */
  ariaLabel?: string;
  /** Child elements (for compound component pattern) */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
}

function ChevronDownIcon() {
  return (
    <svg
      className="inline-block -mr-2 align-middle -my-px"
      viewBox="0 0 96 96"
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      width="1.5em"
      height="1.5em"
    >
      <path d="M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z" />
    </svg>
  );
}

function MenubarPopup({
  item,
  items,
  isOpen,
  onClose,
  itemIndex,
  onSelect,
}: {
  item: MenubarItemData;
  items: MenubarItemSubItemData[];
  isOpen: boolean;
  onClose: () => void;
  itemIndex: number;
  onSelect: (item: MenubarItemSubItemData, itemIndex: number, subItemIndex: number) => void;
}) {
  if (!isOpen) return null;

  const handleKeyDown = (e: KeyboardEvent, _subIndex: number) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'Tab':
        onClose();
        break;
    }
  };

  return (
    <ul
      role="menu"
      tabIndex={-1}
      className="c-menubar__tooltip w-max max-w-64 border border-neutral-base shadow-md bg-white text-sm"
      aria-label={item.ariaLabel || item.sub?.ariaLabel}
    >
      {items.map((subItem, subIndex) => {
        if (subItem.role === 'separator') {
          return (
            <li key={subItem.id || subIndex} role="separator" className="my-sm border-b border-neutral-base" />
          );
        }

        if (subItem.role === 'group') {
          return (
            <li key={subItem.id || subIndex} role="none">
              <ul role="group" aria-label={subItem.ariaLabel}>
                {subItem.items?.map((groupItem, groupIndex) => {
                  const content = groupItem.html ? (
                    <span dangerouslySetInnerHTML={{ __html: groupItem.html }} />
                  ) : (
                    groupItem.text
                  );

                  return (
                    <li
                      key={groupItem.id || groupIndex}
                      role={groupItem.role || 'menuitem'}
                      tabIndex={-1}
                      onClick={() => onSelect(groupItem, itemIndex, subIndex)}
                      className="flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white"
                    >
                      {content}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }

        if (subItem.role === 'menuitemcheckbox' || subItem.role === 'menuitemradio') {
          const content = subItem.html ? (
            <span dangerouslySetInnerHTML={{ __html: subItem.html }} />
          ) : (
            subItem.text
          );

          return (
            <li
              key={subItem.id || subIndex}
              role={subItem.role}
              tabIndex={-1}
              aria-checked={subItem.checked}
              onClick={() => onSelect(subItem, itemIndex, subIndex)}
              onKeyDown={(e) => handleKeyDown(e, subIndex)}
              className="flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white"
            >
              {content}
            </li>
          );
        }

        const content = subItem.html ? (
          <span dangerouslySetInnerHTML={{ __html: subItem.html }} />
        ) : (
          subItem.text
        );

        if (subItem.role === 'none') {
          return (
            <li key={subItem.id || subIndex} role="none" tabIndex={-1}>
              {content}
            </li>
          );
        }

        return (
          <li
            key={subItem.id || subIndex}
            role="menuitem"
            tabIndex={-1}
            onClick={() => onSelect(subItem, itemIndex, subIndex)}
            onKeyDown={(e) => handleKeyDown(e, subIndex)}
            className="flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white focus:outline-hidden"
          >
            {content}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Menubar component - provides an accessible menu bar with keyboard navigation,
 * dropdown sub-menus, and support for checkbox/radio menu items.
 */
export function Menubar({
  id,
  idPrefix,
  items = [],
  onClick,
  onItemsChange,
  onActiveItemChange,
  classes,
  labelText,
  labelHtml,
  ariaLabel,
  children,
  className,
}: MenubarProps) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleMenuItemClick = (index: number, item: MenubarItemData) => {
    if (item.sub?.items?.length) {
      setOpenMenuIndex(openMenuIndex === index ? null : index);
    } else {
      // Activate the item
      items.forEach((i) => (i.active = false));
      item.active = true;
      onActiveItemChange?.(item);
      onClick?.(item);
      setOpenMenuIndex(null);
    }
  };

  const handleKeyDown = (e: KeyboardEvent, index: number, item: MenubarItemData) => {
    const itemsArray = items;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedIndex((prev) => {
          let next = prev - 1;
          while (next >= 0 && itemsArray[next]?.disabled) next--;
          return next >= 0 ? next : prev;
        });
        break;
      case 'ArrowRight':
        e.preventDefault();
        setFocusedIndex((prev) => {
          let next = prev + 1;
          while (next < itemsArray.length && itemsArray[next]?.disabled) next++;
          return next < itemsArray.length ? next : prev;
        });
        break;
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        if (item.sub?.items?.length) {
          e.preventDefault();
          setOpenMenuIndex(index);
        }
        break;
      case 'Escape':
        setOpenMenuIndex(null);
        break;
      case 'ArrowUp':
        if (item.sub?.items?.length) {
          e.preventDefault();
          setOpenMenuIndex(index);
        }
        break;
      case 'Home':
        setFocusedIndex(0);
        break;
      case 'End':
        setFocusedIndex(itemsArray.length - 1);
        break;
    }
  };

  const handleSubItemSelect = (_subItem: MenubarItemSubItemData, itemIndex: number, _subItemIndex: number) => {
    // Handle checkbox/radio behavior
    const currentItem = items[itemIndex];
    const subItems = currentItem?.sub?.items || [];

    // Toggle checkboxes/radios
    subItems.forEach((s) => {
      if (s.role === 'menuitemcheckbox') {
        s.checked = !s.checked;
      } else if (s.role === 'menuitemradio') {
        (s as MenubarItemSubItemData).checked = false;
      }
    });

    onItemsChange?.(items);
    setOpenMenuIndex(null);
  };

  const containerClassName = clsx('c-menubar', classes, className);

  return (
    <div className={containerClassName}>
      {/* Label */}
      {(labelText || labelHtml) && (
        <div id={`${id}-label`} className="mb-sm">
          {labelHtml ? (
            <span dangerouslySetInnerHTML={{ __html: labelHtml }} />
          ) : (
            <p>{labelText}</p>
          )}
        </div>
      )}

      {/* Menu bar */}
      <ul
        ref={menuRef}
        id={`${id}-menubar`}
        role="menubar"
        aria-label={ariaLabel}
        className={clsx('lg:flex lg:flex-wrap', classes)}
      >
        {items.map((item, index) => {
          const itemId = item.id || `${idPrefix || id}-menubar-item-${index + 1}`;
          const hasSub = !!(item.sub?.items?.length);

          const content = item.html ? (
            <span dangerouslySetInnerHTML={{ __html: item.html }} />
          ) : (
            item.text
          );

          const buttonClasses = clsx(
            'c-menubar__button',
            item.disabled && 'c-menubar__button--disabled',
            item.active && 'c-menubar__button--has-selection',
            item.classes
          );

          const handleClick = () => {
            if (!item.disabled) {
              handleMenuItemClick(index, item);
              if (item.active) {
                onClick?.(item);
              }
            }
          };

          return (
            <li key={item.id || index} className="relative" role="none">
              {hasSub ? (
                <>
                  <a
                    href={item.href || '#'}
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={openMenuIndex === index ? 'true' : 'false'}
                    id={itemId}
                    className={buttonClasses}
                    aria-current={item.active ? 'true' : undefined}
                    aria-disabled={item.disabled}
                    tabIndex={item.disabled ? -1 : index === focusedIndex ? 0 : -1}
                    onClick={handleClick}
                    onKeyDown={(e) => handleKeyDown(e, index, item)}
                    onFocus={() => setFocusedIndex(index)}
                  >
                    <span className="inline-flex self-center align-middle">{content}</span>
                    <span className="c-menubar__msg">Con ítems seleccionados</span>
                    <ChevronDownIcon />
                  </a>
                  <MenubarPopup
                    item={item}
                    items={item.sub?.items || []}
                    isOpen={openMenuIndex === index}
                    onClose={() => setOpenMenuIndex(null)}
                    itemIndex={index}
                    onSelect={handleSubItemSelect}
                  />
                </>
              ) : item.href ? (
                <a
                  href={item.href}
                  role="menuitem"
                  id={itemId}
                  className={buttonClasses}
                  aria-current={item.active ? 'page' : undefined}
                  aria-disabled={item.disabled}
                  tabIndex={item.disabled ? -1 : index === focusedIndex ? 0 : -1}
                  target={item.target}
                  onClick={handleClick}
                  onKeyDown={(e) => handleKeyDown(e, index, item)}
                  onFocus={() => setFocusedIndex(index)}
                >
                  {content}
                </a>
              ) : (
                <a
                  href={item.routerLink || '#'}
                  role="menuitem"
                  id={itemId}
                  className={buttonClasses}
                  aria-current={item.active ? 'page' : undefined}
                  aria-disabled={item.disabled}
                  tabIndex={item.disabled ? -1 : index === focusedIndex ? 0 : -1}
                  onClick={handleClick}
                  onKeyDown={(e) => handleKeyDown(e, index, item)}
                  onFocus={() => setFocusedIndex(index)}
                >
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      {/* Children */}
      {children}
    </div>
  );
}
