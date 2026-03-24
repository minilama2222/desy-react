import { type ReactNode, type ElementType } from 'react';
import { clsx } from 'clsx';
import { SkipLink } from '../SkipLink/SkipLink';
import { MenuNavigation, type MenuNavigationItem } from '../MenuNavigation/MenuNavigation';
import { Nav, type NavItemData } from '../Nav/Nav';

export const HeaderAdvancedLogoType = {
  Super: 'Super',
  Title: 'Title',
  Sub: 'Sub',
} as const;
export type HeaderAdvancedLogoType = typeof HeaderAdvancedLogoType[keyof typeof HeaderAdvancedLogoType];

export interface HeaderAdvancedLogoProps {
  url?: string;
  alt?: string;
  href?: string;
  fragment?: string;
  routerLink?: string;
  routerLinkActiveClasses?: string | string[];
  target?: string;
  classes?: string;
  type?: HeaderAdvancedLogoType;
}

export function HeaderAdvancedLogo({
  url,
  alt,
  href,
  fragment,
  routerLink,
  target,
  classes,
  type = HeaderAdvancedLogoType.Title,
}: HeaderAdvancedLogoProps) {
  const getDefaultClasses = () => {
    switch (type) {
      case HeaderAdvancedLogoType.Super:
      case HeaderAdvancedLogoType.Sub:
        return 'absolute top-6 left-0 focus:outline-hidden focus:shadow-outline-black';
      case HeaderAdvancedLogoType.Title:
      default:
        return 'focus:outline-hidden focus:ring-4 focus:ring-inset focus:ring-black focus:bg-warning-base';
    }
  };

  const linkClasses = clsx(classes || getDefaultClasses());

  const content = (
    <>
      <img src={url} alt={alt} />
      {type === HeaderAdvancedLogoType.Title && (
        <div className="hidden lg:block mx-lg border-l border-current" />
      )}
    </>
  );

  const linkTitle = 'Ir a la página de inicio';

  if (routerLink) {
    const linkHref = fragment ? `${routerLink}#${fragment}` : routerLink;
    return (
      <a href={linkHref} target={target} className={linkClasses} title={linkTitle}>
        {content}
      </a>
    );
  }

  return (
    <a href={href || '/'} target={target} className={linkClasses} title={linkTitle}>
      {content}
    </a>
  );
}

export interface HeaderAdvancedSuperProps {
  classes?: string;
  backgroundFullColor?: string;
  backgroundFullUrl?: string;
  backgroundContainerUrl?: string;
  logoUrl?: string;
  logoAlt?: string;
  logoHref?: string;
  logoRouterLink?: string;
  logoRouterLinkActiveClasses?: string;
  logoTarget?: string;
  logoFragment?: string;
  logoClasses?: string;
  children?: ReactNode;
}

export function HeaderAdvancedSuper({
  classes,
  backgroundFullColor,
  backgroundFullUrl,
  backgroundContainerUrl,
  logoUrl,
  logoAlt,
  logoHref,
  logoRouterLink,
  logoRouterLinkActiveClasses,
  logoTarget,
  logoFragment,
  logoClasses,
  children,
}: HeaderAdvancedSuperProps) {
  const hasBackground = classes || backgroundFullColor || backgroundFullUrl;

  if (!hasBackground) {
    return <>{children}</>;
  }

  const style: React.CSSProperties = {};
  if (backgroundFullColor) style.backgroundColor = backgroundFullColor;
  if (backgroundFullUrl) style.backgroundImage = `url(${backgroundFullUrl})`;

  const containerStyle: React.CSSProperties = {};
  if (backgroundContainerUrl) {
    containerStyle.backgroundImage = `url(${backgroundContainerUrl})`;
  }

  return (
    <div
      className={clsx(classes || 'h-32 bg-cover bg-center bg-no-repeat overflow-hidden')}
      style={style}
    >
      <div className="container h-full mx-auto px-base">
        <div
          className="relative h-full bg-cover bg-no-repeat"
          style={containerStyle}
        >
          {logoUrl && (
            <HeaderAdvancedLogo
              url={logoUrl}
              alt={logoAlt}
              href={logoHref}
              routerLink={logoRouterLink}
              routerLinkActiveClasses={logoRouterLinkActiveClasses}
              target={logoTarget}
              fragment={logoFragment}
              classes={logoClasses}
              type={HeaderAdvancedLogoType.Super}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export interface HeaderAdvancedSubtitleProps {
  classes?: string;
  children?: ReactNode;
}

export function HeaderAdvancedSubtitle({ classes, children }: HeaderAdvancedSubtitleProps) {
  return (
    <p className={clsx(classes || 'text-sm leading-5 lg:text-base lg:leading-6')}>
      {children}
    </p>
  );
}

export function HeaderAdvancedHeading({
  level = 2,
  children,
  className,
}: {
  level?: number;
  children?: ReactNode;
  className?: string;
}) {
  const Tag = `h${level}` as ElementType;
  return <Tag className={className}>{children}</Tag>;
}

export interface HeaderAdvancedTitleProps {
  classes?: string;
  headingLevel?: number;
  homepageUrl?: string;
  children?: ReactNode;
}

export function HeaderAdvancedTitle({
  classes,
  headingLevel = 2,
  homepageUrl,
  children,
}: HeaderAdvancedTitleProps) {
  return (
    <HeaderAdvancedHeading level={headingLevel} className={classes}>
      <a
        href={homepageUrl || '/'}
        className="hover:underline focus:outline-hidden focus:ring-4 focus:ring-inset focus:ring-black focus:bg-warning-base focus:text-black"
        title="Ir a la página de inicio"
      >
        {children}
      </a>
    </HeaderAdvancedHeading>
  );
}

export interface HeaderAdvancedTitleContainerProps {
  classes?: string;
  backgroundColor?: string;
  logoUrl?: string;
  logoAlt?: string;
  logoHref?: string;
  logoRouterLink?: string;
  logoRouterLinkActiveClasses?: string;
  logoTarget?: string;
  logoFragment?: string;
  logoClasses?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  customNavigation?: ReactNode;
  children?: ReactNode;
}

export function HeaderAdvancedTitleContainer({
  classes,
  backgroundColor,
  logoUrl,
  logoAlt,
  logoHref,
  logoRouterLink,
  logoRouterLinkActiveClasses,
  logoTarget,
  logoFragment,
  logoClasses,
  title,
  subtitle,
  customNavigation,
}: HeaderAdvancedTitleContainerProps) {
  const style: React.CSSProperties = {};
  if (backgroundColor) style.backgroundColor = backgroundColor;

  return (
    <div
      className={clsx(
        classes || 'bg-heading-base bg-no-repeat bg-cover lg:bg-auto bg-center lg:bg-right bg-general lg:bg-general-lg text-white'
      )}
      style={style}
    >
      <div className="container mx-auto px-base">
        <div className="lg:flex lg:flex-wrap py-base lg:py-lg">
          {logoUrl && (
            <HeaderAdvancedLogo
              url={logoUrl}
              alt={logoAlt}
              href={logoHref}
              routerLink={logoRouterLink}
              routerLinkActiveClasses={logoRouterLinkActiveClasses}
              target={logoTarget}
              fragment={logoFragment}
              classes={logoClasses}
              type={HeaderAdvancedLogoType.Title}
            />
          )}
          <div className="flex lg:flex-1">
            <div>
              {title}
              {subtitle}
            </div>
            {customNavigation}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface HeaderAdvancedSubProps {
  classes?: string;
  backgroundFullColor?: string;
  backgroundFullUrl?: string;
  backgroundContainerUrl?: string;
  logoUrl?: string;
  logoAlt?: string;
  logoHref?: string;
  logoRouterLink?: string;
  logoRouterLinkActiveClasses?: string;
  logoTarget?: string;
  logoFragment?: string;
  logoClasses?: string;
  children?: ReactNode;
}

export function HeaderAdvancedSub({
  classes,
  backgroundFullColor,
  backgroundFullUrl,
  backgroundContainerUrl,
  logoUrl,
  logoAlt,
  logoHref,
  logoRouterLink,
  logoRouterLinkActiveClasses,
  logoTarget,
  logoFragment,
  logoClasses,
  children,
}: HeaderAdvancedSubProps) {
  const hasBackground = classes || backgroundFullColor || backgroundFullUrl;

  if (!hasBackground) {
    return <>{children}</>;
  }

  const style: React.CSSProperties = {};
  if (backgroundFullColor) style.backgroundColor = backgroundFullColor;
  if (backgroundFullUrl) style.backgroundImage = `url(${backgroundFullUrl})`;

  const containerStyle: React.CSSProperties = {};
  if (backgroundContainerUrl) {
    containerStyle.backgroundImage = `url(${backgroundContainerUrl})`;
  }

  return (
    <div
      className={clsx(classes || 'h-32 bg-cover bg-no-repeat overflow-hidden')}
      style={style}
    >
      <div className="container h-full mx-auto px-base">
        <div
          className="relative h-full bg-cover bg-no-repeat"
          style={containerStyle}
        >
          {logoUrl && (
            <HeaderAdvancedLogo
              url={logoUrl}
              alt={logoAlt}
              href={logoHref}
              routerLink={logoRouterLink}
              routerLinkActiveClasses={logoRouterLinkActiveClasses}
              target={logoTarget}
              fragment={logoFragment}
              classes={logoClasses}
              type={HeaderAdvancedLogoType.Sub}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export interface HeaderAdvancedDropdownProps {
  classesContainer?: string;
  classesTooltip?: string;
  classes?: string;
  items?: NavItemData[];
  children?: ReactNode;
}

export function HeaderAdvancedDropdown({
  classesContainer,
  classesTooltip,
  classes,
  items,
  children,
}: HeaderAdvancedDropdownProps) {
  return (
    <div className="flex items-center">
      <div className="relative">
        <Nav
          hasNav={false}
          idPrefix="header-dropdown-nav-item"
          classes={clsx(classes || 'c-dropdown--header', classesTooltip)}
          id="id-dropdown-nav"
          items={items}
        />
        <span className={clsx('hidden lg:block', classesContainer)}>
          {children}
        </span>
      </div>
    </div>
  );
}

export interface HeaderAdvancedProps {
  /** Custom CSS classes for the root element */
  classes?: string;
  /** Custom CSS classes for the container element */
  containerClasses?: string;
  /** Content for skip link slot */
  skipLink?: ReactNode;
  /** Content for header mini slot */
  headerMini?: ReactNode;
  /** Content for super section slot */
  superSlot?: ReactNode;
  /** Content for title container slot */
  titleContainerSlot?: ReactNode;
  /** Content for navigation slot */
  navigationSlot?: ReactNode;
  /** Content for custom navigation slot */
  customNavigationSlot?: ReactNode;
  /** Content for dropdown slot */
  dropdownSlot?: ReactNode;
  /** Content for offcanvas slot */
  offcanvasSlot?: ReactNode;
  /** Content for sub section slot */
  subSlot?: ReactNode;
  /** Navigation data */
  navigationData?: {
    items?: MenuNavigationItem[];
    classes?: string;
    id?: string;
    ariaLabel?: string;
    idPrefix?: string;
  };
  /** Additional class name */
  className?: string;
}

export function HeaderAdvanced({
  classes,
  containerClasses,
  skipLink,
  headerMini,
  superSlot,
  titleContainerSlot,
  navigationSlot,
  customNavigationSlot,
  dropdownSlot,
  offcanvasSlot,
  subSlot,
  navigationData,
  className,
}: HeaderAdvancedProps) {
  const renderSkipLink = () => {
    if (skipLink) return skipLink;
    return <SkipLink text="Saltar al contenido principal" id="skip-link" />;
  };

  const renderNavigation = () => {
    if (navigationSlot) return navigationSlot;
    if (!navigationData?.items || navigationData.items.length === 0) return null;
    return (
      <div className="-ml-base">
        <MenuNavigation
          idPrefix={navigationData.idPrefix || 'header-nav-item'}
          id={navigationData.id || 'header-nav-item'}
          items={navigationData.items}
          classes={clsx('hidden lg:block', navigationData.classes)}
          ariaLabel={navigationData.ariaLabel || 'Menú principal'}
        />
      </div>
    );
  };

  return (
    <header className={clsx(classes, className)}>
      <div className={clsx(containerClasses)}>
        <nav aria-labelledby="skip-link">
          {renderSkipLink()}
        </nav>
        {headerMini}
        {superSlot}
        {titleContainerSlot}
        <div className="bg-neutral-lighter border-b border-neutral-base">
          <div className="container mx-auto px-base">
            <div className="flex items-center justify-between min-h-14">
              <div className="flex flex-wrap items-center">
                {renderNavigation()}
              </div>
              {customNavigationSlot}
              {dropdownSlot}
              {offcanvasSlot}
            </div>
          </div>
        </div>
        {subSlot}
      </div>
    </header>
  );
}
