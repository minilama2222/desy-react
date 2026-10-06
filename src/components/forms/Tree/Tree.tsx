import { type ReactNode, useState, useCallback, useRef, useEffect } from 'react';
import { clsx } from 'clsx';

export interface TreeItemData {
  /** Unique identifier */
  id?: string;
  /** Item name */
  name?: string;
  /** Item value */
  value: string;
  /** Additional CSS classes */
  classes?: string;
  /** Whether the item is active/selected */
  active?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is checked */
  checked?: boolean;
  /** Whether the item is in an indeterminate state */
  indeterminate?: boolean;
  /** Whether the item is expanded */
  expanded?: boolean;
  /** Nested child items */
  items?: TreeItemData[];
  /** Navigation: href link */
  href?: string;
  /** Target attribute (_blank, etc.) */
  target?: string;
  /** Whether to show dividers between items */
  hasDividers?: boolean;
  /** CSS classes for the checkbox label */
  labelClasses?: string;
}

/** Tree item type */
export type TreeItemType = 'radio' | 'checkbox' | 'navigation';

export interface TreeProps {
  /** Unique identifier */
  id?: string;
  /** Tree type: radio (single select) or checkbox (multi select) */
  type?: TreeItemType;
  /** Array of tree items */
  items?: TreeItemData[];
  /** Item name prefix for form submission */
  name?: string;
  /** CSS classes for the tree */
  classes?: string;
  /** Whether to show dividers */
  hasDividers?: boolean;
  /** Whether to expand first level by default */
  expandedFirstLevel?: boolean;
  /** Decouple child selection from parent */
  decoupleChildFromParent?: boolean;
  /** Search/filter text */
  search?: string;
  /** Called when selection changes */
  onChange?: (item: TreeItemData) => void;
  /** Called when item is expanded/collapsed */
  onExpand?: (item: TreeItemData, expanded: boolean) => void;
  /** Children slot */
  children?: ReactNode;
}

interface TreeItemProps {
  item: TreeItemData;
  type: TreeItemType;
  name?: string;
  level?: number;
  hasDividers?: boolean;
  expandedFirstLevel?: boolean;
  decoupleChildFromParent?: boolean;
  onChange?: (item: TreeItemData) => void;
  onExpand?: (item: TreeItemData, expanded: boolean) => void;
  parentExpanded?: boolean;
}

/** Minus icon for expanded items */
const MinusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    width="10"
    height="10"
    aria-hidden="true"
    className={clsx('c-tree__minus', className)}
  >
    <path fill="currentColor" d="M9.286 5.714H.714a.714.714 0 010-1.428h8.572a.714.714 0 010 1.428z" />
  </svg>
);

/** Plus icon for collapsed items */
const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    width="10"
    height="10"
    aria-hidden="true"
    className={clsx('c-tree__plus', className)}
  >
    <path fill="currentColor" d="M9.286 5.714H5.714V2.143a.714.714 0 10-1.428 0v3.571H.714a.714.714 0 100 1.428h3.572v3.571a.714.714 0 101.428 0V7.142h3.572a.714.714 0 100-1.428z" />
  </svg>
);

/** TreeItem component - individual item in the tree */
function TreeItem({
  item,
  type,
  name,
  level = 0,
  hasDividers,
  expandedFirstLevel,
  decoupleChildFromParent,
  onChange,
  onExpand,
  parentExpanded = true,
}: TreeItemProps) {
  const [expanded, setExpanded] = useState(item.expanded ?? (expandedFirstLevel && level === 0));
  const [checked, setChecked] = useState(item.checked ?? false);
  const [indeterminate, setIndeterminate] = useState(item.indeterminate ?? false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const hasChildren = item.items && item.items.length > 0;
  const isVisible = parentExpanded;

  const handleToggleExpand = useCallback(() => {
    if (hasChildren && type !== 'navigation') {
      const newExpanded = !expanded;
      setExpanded(newExpanded);
      onExpand?.(item, newExpanded);
    }
  }, [hasChildren, expanded, item, type, onExpand]);

  const handleCheckedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      setChecked(newChecked);
      setIndeterminate(false);
      onChange?.({ ...item, checked: newChecked });

      // Auto-expand when checked
      if (newChecked && expandedFirstLevel && hasChildren && !expanded) {
        setExpanded(true);
        onExpand?.(item, true);
      }
    },
    [item, expandedFirstLevel, hasChildren, expanded, onChange, onExpand]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          if (expanded && hasChildren) {
            e.preventDefault();
            setExpanded(false);
          }
          break;
        case 'ArrowRight':
          if (!expanded && hasChildren) {
            e.preventDefault();
            setExpanded(true);
          }
          break;
      }
    },
    [expanded, hasChildren]
  );

  // Sync checked state with prop
  useEffect(() => {
    if (item.checked !== undefined) {
      setChecked(item.checked);
    }
  }, [item.checked]);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  if (!isVisible) return null;

  const indentClass = level === 0 ? 'ml-4' : 'ml-8';

  return (
    <li
      role="treeitem"
      aria-expanded={hasChildren ? expanded : undefined}
      className={clsx(
        'c-tree__item focus:outline-hidden',
        indentClass,
        hasDividers && 'border-t border-neutral-base'
      )}
      data-tree-item
    >
      {/* Item row */}
      <div
        className={clsx(
          'w-full flex items-center relative focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black',
          item.classes,
          type === 'navigation' && 'my-sm',
          type !== 'navigation' && level !== 0 && 'ml-5'
        )}
        onKeyDown={handleKeyDown}
      >
        {/* Expand/collapse button */}
        {hasChildren && type !== 'navigation' && (
          <button
            type="button"
            className="c-tree__icon absolute top-3 -left-4 flex items-center w-4 h-2.5 text-primary-base font-bold focus:outline-hidden"
            onClick={handleToggleExpand}
            aria-label={expanded ? 'Contraer' : 'Expandir'}
          >
            {expanded ? <MinusIcon className="c-tree__minus" /> : <PlusIcon className="c-tree__plus" />}
          </button>
        )}

        {/* Checkbox/Radio */}
        {type === 'checkbox' && (
          <input
            ref={checkboxRef}
            type="checkbox"
            id={item.id}
            name={name}
            value={item.value}
            checked={checked}
            disabled={item.disabled}
            onChange={handleCheckedChange}
            className="w-6 h-6 transition duration-150 ease-in-out border-black focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-offset-0 focus:ring-warning-base disabled:bg-neutral-base disabled:border-neutral-base text-primary-base mr-2"
            aria-describedby={item.id ? `${item.id}-hint` : undefined}
          />
        )}

        {type === 'radio' && (
          <input
            type="radio"
            id={item.id}
            name={name}
            value={item.value}
            checked={checked}
            disabled={item.disabled}
            onChange={handleCheckedChange}
            className="w-6 h-6 transition duration-150 ease-in-out border-black focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-offset-0 focus:ring-warning-base disabled:bg-neutral-base disabled:border-neutral-base text-primary-base mr-2"
          />
        )}

        {/* Label */}
        {type === 'navigation' ? (
          <a
            href={item.href}
            target={item.target}
            className={clsx(
              'block relative -top-xs -left-8 ml-8 py-xs',
              item.disabled && 'cursor-not-allowed opacity-50',
              item.labelClasses
            )}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.name}
          </a>
        ) : (
          <label
            htmlFor={item.id}
            className={clsx(
              'block relative -top-xs -left-8 ml-8 py-xs',
              item.disabled && 'cursor-not-allowed opacity-50',
              item.labelClasses
            )}
          >
            {item.name}
          </label>
        )}
      </div>

      {/* Nested items */}
      {hasChildren && expanded && (
        <ul role="group" className="c-tree__itemgroup">
          {item.items!.map((child, index) => (
            <TreeItem
              key={child.id ?? index}
              item={child}
              type={type}
              name={name}
              level={level + 1}
              hasDividers={hasDividers}
              expandedFirstLevel={expandedFirstLevel}
              decoupleChildFromParent={decoupleChildFromParent}
              onChange={onChange}
              onExpand={onExpand}
              parentExpanded={expanded}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Tree component - hierarchical list with checkboxes or radio buttons.
 * Supports single/multiple selection, nested items, and keyboard navigation.
 */
export function Tree({
  id,
  type = 'checkbox',
  items = [],
  name,
  classes,
  hasDividers,
  expandedFirstLevel,
  decoupleChildFromParent,
  onChange,
  onExpand,
  children,
}: TreeProps) {
  return (
    <div className="c-form-group">
      <ul
        id={id}
        role="tree"
        className={clsx('c-tree mt-base', classes)}
        aria-multiselectable={type === 'checkbox'}
      >
      {items.map((item, index) => (
        <TreeItem
          key={item.id ?? index}
          item={item}
          type={type}
          name={name}
          level={0}
          hasDividers={hasDividers}
          expandedFirstLevel={expandedFirstLevel}
          decoupleChildFromParent={decoupleChildFromParent}
          onChange={onChange}
          onExpand={onExpand}
          parentExpanded={true}
        />
      ))}
      {children}
      </ul>
    </div>
  );
}
