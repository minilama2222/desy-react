import {
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
  useState,
  useRef,
  useEffect,
} from 'react';
import { clsx } from 'clsx';

export interface TabsPanelData {
  /** Panel text content */
  text?: string;
  /** Panel HTML content */
  html?: string;
  /** CSS classes */
  classes?: string;
  /** Unique identifier */
  id?: string;
  /** Tab index */
  tabindex?: number;
}

export interface TabsItemData {
  /** Unique identifier */
  id?: string;
  /** Tab text */
  text?: string;
  /** Tab HTML content */
  html?: string;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Whether the tab is active by default */
  active?: boolean;
  /** Panel configuration */
  panel?: TabsPanelData;
  /** Tab content (ReactNode) */
  content?: ReactNode;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Unique identifier */
  id?: string;
  /** Prefix for generated IDs */
  idPrefix?: string;
  /** Heading level for the panel title */
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  /** Panel title */
  title?: string;
  /** Aria label for the tab list */
  tablistAriaLabel?: string;
  /** Tab items configuration */
  items?: TabsItemData[];
  /** CSS classes for the tab list */
  tablistClasses?: string;
  /** Default CSS classes */
  className?: string;
  /** Child content (TabItem components) */
  children?: ReactNode;
  /** Callback when tab changes */
  onChange?: (index: number) => void;
}

function getItemId(index: number, itemId?: string, idPrefix?: string): string {
  if (itemId) return itemId;
  return `${idPrefix || 'tab'}-${index}`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Tabs component - a tabbed interface with keyboard navigation.
 */
export function Tabs({
  id,
  idPrefix,
  headingLevel = 2,
  title,
  tablistAriaLabel,
  items,
  tablistClasses,
  className = 'c-tabs',
  children,
  onChange,
  ...props
}: TabsProps) {
  const [currentTab, setCurrentTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const displayItems = items || [];

  // Initialize to first non-disabled tab
  useEffect(() => {
    if (displayItems.length > 0) {
      const activeIndex = displayItems.findIndex(
        (item, idx) => !item.disabled && (item.active || idx === displayItems.findIndex((i) => !i.disabled))
      );
      if (activeIndex !== -1) {
        setCurrentTab(activeIndex);
      }
    }
  }, [displayItems]);

  const currentItem = displayItems[currentTab];
  const currentPanel = currentItem?.panel;

  const handleTabClick = (index: number) => {
    if (displayItems[index]?.disabled) return;
    setCurrentTab(index);
    onChange?.(index);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabledTabs = displayItems.filter((item) => !item.disabled);
    const currentEnabledIndex = enabledTabs.findIndex(
      (_, i) => displayItems[i] === displayItems[index]
    );

    switch (e.key) {
      case 'Home':
        e.preventDefault();
        if (enabledTabs.length > 0) {
          const firstEnabledIndex = displayItems.findIndex((item) => !item.disabled);
          tabRefs.current[firstEnabledIndex]?.focus();
        }
        break;
      case 'End':
        e.preventDefault();
        if (enabledTabs.length > 0) {
          const lastEnabledIndex = displayItems.findLastIndex((item) => !item.disabled);
          tabRefs.current[lastEnabledIndex]?.focus();
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (currentEnabledIndex > 0) {
          const prevEnabledIndex = displayItems.findIndex(
            (item, i) => !item.disabled && i < index
          );
          if (prevEnabledIndex !== -1) {
            tabRefs.current[prevEnabledIndex]?.focus();
          }
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        for (let i = index + 1; i < displayItems.length; i++) {
          if (!displayItems[i].disabled) {
            tabRefs.current[i]?.focus();
            break;
          }
        }
        break;
    }
  };

  const getHeading = () => {
    const HeadingTag = `h${headingLevel}` as 'h1';
    const headingText = title || 'Contenido';
    return <HeadingTag className="inline-flex items-center mb-base lg:mb-0 font-semibold">{headingText}</HeadingTag>;
  };

  return (
    <div className={clsx(className)} id={id} {...props}>
      {/* Panel heading */}
      <div className="c-tabs__panel-heading">
        {getHeading()}
      </div>

      {/* Tab list */}
      <div
        className={clsx('c-tabs__tabs', tablistClasses)}
        role="tablist"
        aria-label={tablistAriaLabel}
      >
        {displayItems.map((item, index) => {
          const itemId = getItemId(index, item.id, idPrefix);
          const tabContent = item.html ? (
            <span dangerouslySetInnerHTML={{ __html: item.html }} />
          ) : (
            item.text
          );

          return (
            <button
              key={itemId}
              ref={(el) => { tabRefs.current[index] = el; }}
              id={itemId}
              role="tab"
              type="button"
              aria-selected={currentTab === index ? 'true' : 'false'}
              aria-controls={`tab-${itemId}`}
              tabIndex={currentTab !== index || item.disabled ? -1 : 0}
              disabled={item.disabled || undefined}
              aria-disabled={item.disabled || undefined}
              onClick={() => handleTabClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={clsx(
                'group c-tabs__link',
                item.disabled && 'opacity-50 pointer-events-none',
                currentTab === index && 'c-tabs__link--is-active'
              )}
            >
              <span className="flex items-center pointer-events-none group-focus:bg-warning-base group-focus:shadow-outline-focus group-focus:outline-hidden">
                {item.content || tabContent}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        id={`tab-${getItemId(currentTab, currentItem?.id, idPrefix)}`}
        role="tabpanel"
        aria-labelledby={getItemId(currentTab, currentItem?.id, idPrefix)}
        tabIndex={currentPanel?.tabindex ?? 0}
        className={clsx('c-tabs__panel', currentPanel?.classes)}
      >
        {/* Screen reader content */}
        <div className="sr-only" aria-live="polite">
          {currentPanel?.text}
        </div>

        {/* Panel heading for screen readers */}
        <div className="c-tabs__panel-heading">
          {getHeading()}
        </div>

        {/* Panel content */}
        {currentPanel?.html && (
          <div dangerouslySetInnerHTML={{ __html: currentPanel.html }} />
        )}
        {currentPanel?.text && (
          <p dangerouslySetInnerHTML={{ __html: `<p>${escapeHtml(currentPanel.text)}</p>` }} />
        )}
        {currentItem?.content}
      </div>
    </div>
  );
}
