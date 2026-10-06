import { type ReactNode, useState } from 'react';
import { clsx } from 'clsx';
import { SkipLink } from '../SkipLink/SkipLink';
import { MenuNavigation, type MenuNavigationItem } from '../MenuNavigation/MenuNavigation';
import { Nav, type NavItemData } from '../Nav/Nav';

const DEFAULT_HOMEPAGE_URL = 'https://www.aragon.es/';
const DEFAULT_LOGO_ALT = 'Gobierno de Aragón. Ir a aragon.es';

const AragonLogoExpandedSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 144 32"
    width="144"
    height="32"
    className="fill-current hidden"
    aria-label="Ir a la página de inicio de la aplicación"
    role="img"
  >
    <defs>
      <clipPath id="b-logo-expanded">
        <path fill="rgb(252, 228, 0)" d="M0 0h31.509v31.495H0z" />
      </clipPath>
      <clipPath id="a-logo-expanded"><path d="M0 0h144v32H0z" /></clipPath>
    </defs>
    <g clipPath="url(#a-logo-expanded)">
      <path fill="rgb(252, 228, 0)" d="M0 .205h31.509V31.7H0z" />
      <g clipPath="url(#b-logo-expanded)" transform="translate(0 .205)">
        <g fill="#dd171b" fillRule="evenodd">
          <path d="m31.509 6.048-7.568 1.515a14.545 14.545 0 0 1-7.905-1.025 15.04 15.04 0 0 0-5-1.817 12.536 12.536 0 0 0-3.535-.011l-5.051.9c-.8.156-1.639.3-2.453.434V.315A7.1 7.1 0 0 1 3.888.226a9.926 9.926 0 0 1 2.085.936 17.6 17.6 0 0 0 4.293 1.962 13.92 13.92 0 0 0 6.6-.034l4.728-.858 4.939-.892 4.97-1.024ZM6.602 24.229a14.592 14.592 0 0 1 9.555 1.014 12.178 12.178 0 0 0 8.307 1.5l7.044-1.271v5.706a8.247 8.247 0 0 1-3.008.256 6.4 6.4 0 0 1-1.594-.457l-3.657-1.917a12.217 12.217 0 0 0-7.092-.825L1.026 31.011 0 31.177v-5.706l1.26-.256 3.312-.613c.669-.123 1.371-.245 2.029-.379ZM-.003 15.077v-4.391l13.027-2.377a15.5 15.5 0 0 1 9.11 1.638 12.535 12.535 0 0 0 8.474.925l.9-.189v4.391l-2.874-1.639a12.286 12.286 0 0 0-6.835-1.014l-8.006 1.46c-.959.179-2.877.524-2.877.524l-7.292 1.349a5.152 5.152 0 0 1-3.627-.677ZM31.509 16.583v4.324L18.6 23.282a15.5 15.5 0 0 1-9.11-1.638 12.532 12.532 0 0 0-8.474-.925l-1.015.19v-4.324l2.988 1.572a12.291 12.291 0 0 0 6.835 1.014l8.006-1.46c.959-.178 2.877-.524 2.877-.524l7.292-1.349a5.142 5.142 0 0 1 3.51.745Z" />
        </g>
      </g>
      <path
        d="M38.2 28.807v-8.551h1.393c2.893 0 4.478 1.522 4.478 4.286 0 2.829-1.521 4.265-4.5 4.265Zm10.4-11.4v14.294h9.47v-2.893h-6.277v-3.257h6.214v-2.893h-6.214v-2.379h6.277v-2.871Zm21.751 0-5.206 14.294h3.385l1.542-4.35h4.371l1.521 4.35h3.45L74.1 17.407Zm1.885 2.956-1.328 4.223h2.679Zm42.341 4.03h-3.192v4.5a4.206 4.206 0 0 1-1.371.193 4.251 4.251 0 0 1-4.242-4.5 4.443 4.443 0 0 1 4.735-4.65 7.481 7.481 0 0 1 4.071 1.243v-3.257a11.674 11.674 0 0 0-4.349-.857c-4.628 0-7.841 3.107-7.841 7.564 0 4.393 3.149 7.372 7.841 7.372a12.977 12.977 0 0 0 4.349-.75Zm16.132.129a7.424 7.424 0 1 0-7.391 7.436 7.122 7.122 0 0 0 7.393-7.436Zm-7.456-4.458c-2.4 0-4.006 1.822-4.006 4.5s1.65 4.5 4.071 4.5c2.4 0 3.985-1.8 3.985-4.5s-1.627-4.501-4.048-4.501Zm8.689-2.657v14.294h3.257v-9.108l5.762 9.108h3.021V17.407h-3.256v8.889l-5.532-8.889ZM46.922 7.33h-3.193v4.5a4.335 4.335 0 0 1-5.613-4.307 4.443 4.443 0 0 1 4.735-4.65 7.487 7.487 0 0 1 4.071 1.243V.859a11.674 11.674 0 0 0-4.35-.858c-4.628 0-7.841 3.107-7.841 7.565 0 4.393 3.15 7.371 7.841 7.371a12.99 12.99 0 0 0 4.35-.75Zm16.116.128a7.424 7.424 0 1 0-7.392 7.436 7.122 7.122 0 0 0 7.396-7.436Zm-7.456-4.457c-2.4 0-4.006 1.821-4.006 4.5s1.65 4.5 4.071 4.5c2.4 0 3.985-1.8 3.985-4.5s-1.626-4.5-4.047-4.5ZM64.107.344v14.293h5.914c3.15 0 4.992-1.565 4.992-4.243a3.717 3.717 0 0 0-2.978-3.728 3.133 3.133 0 0 0 1.95-2.936c.021-2.272-1.521-3.386-4.606-3.386Zm4.757 5.336c1.393 0 1.95-.386 1.95-1.35 0-.921-.536-1.264-2.057-1.264h-1.393V5.68Zm.429 6.043c1.585 0 2.271-.493 2.271-1.651 0-1.2-.707-1.671-2.4-1.671h-1.8v3.322ZM78.879.344h-3.192v14.293h3.192Zm1.39 0v14.293h9.47v-2.893h-6.278V8.487h6.214V5.594h-6.214V3.216h6.278V.345Zm50.463 7.114a7.424 7.424 0 1 0-7.392 7.436 7.122 7.122 0 0 0 7.395-7.436Zm-7.456-4.457c-2.4 0-4.006 1.821-4.006 4.5s1.65 4.5 4.071 4.5c2.4 0 3.985-1.8 3.985-4.5s-1.626-4.5-4.047-4.5ZM97.917 24.585l-1.35-4.223-1.328 4.223ZM83.249 31.7v-5.872h.407c2.057 0 2.271.214 3.642 3.75a7.159 7.159 0 0 0 .3.729l.278.664a6.4 6.4 0 0 1-4.221 2.9 3.8 3.8 0 0 1-.943.057 4.007 4.007 0 0 1-2.6-1.128 5.2 5.2 0 0 1-1.7-3.35 8.207 8.207 0 0 1 .064-.992l.214-1.457a1.914 1.914 0 0 0 .064-.307 13.3 13.3 0 0 0 .193-1.535l.278-2.1c.043-.278.021-.35-.043-.385-.064-.057-.171-.086-.407-.086h-.3v14.293Zm1.4-18.7v-3.3h-1.4v3.3ZM6.708.344H3.52v14.293h3.188ZM8.1.344v14.293h9.471v-2.893H11.29V8.487h6.214V5.594H11.29V3.216h6.278V.345Zm50.47 7.115a7.424 7.424 0 1 0-7.392 7.436 7.122 7.122 0 0 0 7.395-7.436Zm-7.456-4.457c-2.4 0-4.006 1.821-4.006 4.5s1.65 4.5 4.071 4.5c2.4 0 3.985-1.8 3.985-4.5s-1.626-4.5-4.047-4.5ZM6.705 24.62a14.812 14.812 0 0 1 9.7 1.03 12.363 12.363 0 0 0 8.437 1.529l7.154-1.291v5.8a8.37 8.37 0 0 1-3.055.26 6.509 6.509 0 0 1-1.619-.464l-3.714-1.948a12.4 12.4 0 0 0-7.2-.838l-15.366 2.82L0 31.686v-5.8l1.28-.26 3.363-.623c.679-.125 1.393-.249 2.061-.385ZM-.003 15.32v-4.462l13.23-2.417a15.734 15.734 0 0 1 9.252 1.665 12.723 12.723 0 0 0 8.606.94l.914-.192v4.462L29.08 13.65a12.472 12.472 0 0 0-6.941-1.031l-8.131 1.483c-.974.182-2.921.532-2.921.532l-7.406 1.371a5.23 5.23 0 0 1-3.684-.685ZM31.997 16.851v4.393l-13.11 2.413a15.735 15.735 0 0 1-9.252-1.665 12.721 12.721 0 0 0-8.606-.94l-1.03.193v-4.394l3.035 1.6a12.476 12.476 0 0 0 6.941 1.03l8.13-1.483c.974-.182 2.922-.532 2.922-.532l7.406-1.371a5.219 5.219 0 0 1 3.564.756Z"
        fill="#161615"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const AragonLogoMiniSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    className="w-8 h-8 fill-current"
    aria-label="Ir a la página de inicio de la aplicación"
    role="img"
  >
    <defs>
      <clipPath id="b-logo-mini">
        <path fill="rgb(252, 228, 0)" d="M0 0h32v32.001H0z" />
      </clipPath>
      <clipPath id="a-logo-mini"><path d="M0 0h32v32H0z" /></clipPath>
    </defs>
    <g clipPath="url(#a-logo-mini)">
      <path fill="rgb(252, 228, 0)" d="M0 .305h32v32.001H0z" />
      <g clipPath="url(#b-logo-mini)" transform="translate(0 .305)">
        <g fill="#dd171b" fillRule="evenodd">
          <path d="m31.997 6.145-7.686 1.539a14.764 14.764 0 0 1-8.028-1.042 15.267 15.267 0 0 0-5.073-1.846 12.725 12.725 0 0 0-3.59-.011l-5.13.918a94.41 94.41 0 0 1-2.491.442V.324a7.213 7.213 0 0 1 3.952-.09 10.087 10.087 0 0 1 2.118.951 17.859 17.859 0 0 0 4.36 1.993 14.13 14.13 0 0 0 6.7-.034l4.8-.872 5.016-.906 5.048-1.04ZM6.705 24.619a14.812 14.812 0 0 1 9.7 1.03 12.363 12.363 0 0 0 8.437 1.529l7.154-1.291v5.8a8.37 8.37 0 0 1-3.055.26 6.509 6.509 0 0 1-1.619-.464l-3.714-1.948a12.4 12.4 0 0 0-7.2-.838l-15.366 2.82L0 31.686v-5.8l1.28-.26 3.363-.623c.679-.125 1.393-.249 2.061-.385ZM-.003 15.32v-4.462l13.23-2.417a15.734 15.734 0 0 1 9.252 1.665 12.723 12.723 0 0 0 8.606.94l.914-.192v4.462L29.08 13.65a12.472 12.472 0 0 0-6.941-1.031l-8.131 1.483c-.974.182-2.921.532-2.921.532l-7.406 1.371a5.23 5.23 0 0 1-3.684-.685ZM31.997 16.851v4.393l-13.11 2.413a15.735 15.735 0 0 1-9.252-1.665 12.721 12.721 0 0 0-8.606-.94l-1.03.193v-4.394l3.035 1.6a12.476 12.476 0 0 0 6.941 1.03l8.13-1.483c.974-.182 2.922-.532 2.922-.532l7.406-1.371a5.219 5.219 0 0 1 3.564.756Z" />
        </g>
      </g>
    </g>
  </svg>
);

export interface HeaderSkipLinkData {
  text?: string;
  html?: string;
}

export interface HeaderMobileTextData {
  text?: string;
  html?: string;
  classes?: string;
}

export interface HeaderSubnavData {
  text?: string;
  html?: string;
  items?: NavItemData[];
  classes?: string;
  hiddenText?: string;
  classesContainer?: string;
  classesTooltip?: string;
}

export interface HeaderDropdownData {
  text?: string;
  html?: string;
  items?: NavItemData[];
  classes?: string;
  hiddenText?: string;
  classesContainer?: string;
  classesTooltip?: string;
}

export interface HeaderNavigationData {
  items?: MenuNavigationItem[];
  classes?: string;
  id?: string;
  ariaLabel?: string;
  idPrefix?: string;
}

export interface HeaderOffcanvasData {
  text?: string;
  html?: string;
  textClose?: string;
  contentHtml?: string;
  classes?: string;
}

export interface HeaderProps {
  /** Custom CSS classes for the root element */
  classes?: string;
  /** Custom CSS classes for the container element */
  containerClasses?: string;
  /** URL for the homepage link */
  homepageUrl?: string;
  /** Router link path for the homepage */
  homepageRouterLink?: string;
  /** Fragment identifier for the homepage link */
  homepageFragment?: string;
  /** Whether to show the expanded logo on sm screens */
  expandedLogo?: boolean;
  /** Hide the logo */
  noLogo?: boolean;
  /** Custom HTML for the logo area */
  customLogoHtml?: string;
  /** Custom HTML for navigation area */
  customNavigationHtml?: string;
  /** Alt text for the logo */
  logoAlt?: string;
  /** Compact logo image URL */
  logoCompact?: string;
  /** Expanded logo image URL */
  logoExpanded?: string;
  /** Data for the subnav dropdown */
  subnavData?: HeaderSubnavData;
  /** Data for the main navigation */
  navigationData?: HeaderNavigationData;
  /** Data for the user dropdown */
  dropdownData?: HeaderDropdownData;
  /** Data for the mobile offcanvas */
  offcanvasData?: HeaderOffcanvasData;
  /** Data for the skip link */
  skipLinkData?: HeaderSkipLinkData;
  /** Data for mobile text */
  mobileTextData?: HeaderMobileTextData;
  /** Content for skip link slot */
  skipLink?: ReactNode;
  /** Content for subnav slot */
  subnav?: ReactNode;
  /** Content for mobile text slot */
  mobileText?: ReactNode;
  /** Content for custom navigation slot */
  customNavigation?: ReactNode;
  /** Content for navigation slot */
  navigation?: ReactNode;
  /** Content for dropdown slot */
  dropdown?: ReactNode;
  /** Content for offcanvas slot */
  offcanvas?: ReactNode;
  /** Content for offcanvas button */
  offcanvasButton?: ReactNode;
  /** Content for offcanvas close button */
  offcanvasCloseButton?: ReactNode;
  /** Content for offcanvas content */
  offcanvasContent?: ReactNode;
  /** Additional class name */
  className?: string;
}

export function Header({
  classes,
  containerClasses,
  homepageUrl,
  homepageRouterLink,
  homepageFragment,
  expandedLogo = false,
  noLogo = false,
  customLogoHtml,
  customNavigationHtml,
  logoAlt,
  logoCompact,
  logoExpanded,
  subnavData,
  navigationData,
  dropdownData,
  offcanvasData,
  skipLinkData,
  mobileTextData,
  skipLink,
  subnav,
  mobileText,
  customNavigation,
  navigation,
  dropdown,
  offcanvas,
  offcanvasContent,
  className,
}: HeaderProps) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const resolvedHomepageUrl = homepageUrl || DEFAULT_HOMEPAGE_URL;
  const resolvedLogoAlt = logoAlt || DEFAULT_LOGO_ALT;

  const openOffcanvas = () => setIsOffcanvasOpen(true);
  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
    const button = document.getElementById('header-offcanvas-button');
    button?.focus();
  };

  const renderLogoArea = () => {
    const logoClasses = 'flex flex-wrap mr-4 text-black focus:outline-hidden focus:shadow-outline-black';
    
    const logoContent = (
      <>
        {!noLogo && (
          <>
            {logoExpanded || logoCompact ? (
              <>
                {logoExpanded && (
                  <img
                    src={logoExpanded}
                    alt={resolvedLogoAlt}
                    className={clsx('hidden h-8', expandedLogo ? 'sm:block' : undefined)}
                  />
                )}
                {logoCompact && (
                  <img
                    src={logoCompact}
                    alt={resolvedLogoAlt}
                    className={clsx('w-8 h-8', expandedLogo ? 'sm:hidden' : undefined)}
                  />
                )}
              </>
            ) : (
              <>
                <span className={clsx('hidden', expandedLogo ? 'sm:inline-block' : undefined)}>
                  <AragonLogoExpandedSVG />
                </span>
                <span className={clsx('w-8 h-8', expandedLogo ? 'sm:hidden' : undefined)}>
                  <AragonLogoMiniSVG />
                </span>
              </>
            )}
          </>
        )}
        {customLogoHtml && (
          <span dangerouslySetInnerHTML={{ __html: customLogoHtml }} />
        )}
      </>
    );

    const title = 'Ir a la página de inicio';

    if (homepageRouterLink) {
      const href = homepageFragment
        ? `${homepageRouterLink}#${homepageFragment}`
        : homepageRouterLink;
      return (
        <a href={href} className={logoClasses} title={title}>
          {logoContent}
        </a>
      );
    }

    return (
      <a href={resolvedHomepageUrl} className={logoClasses} title={title}>
        {logoContent}
      </a>
    );
  };

  const renderSkipLink = () => {
    if (skipLink) return skipLink;
    const text = skipLinkData?.text || 'Saltar al contenido principal';
    return <SkipLink text={text} html={skipLinkData?.html} id="skip-link" />;
  };

  const renderSubnav = () => {
    if (subnav) return subnav;
    
    const hasItems = subnavData?.items && subnavData.items.length > 0;
    
    if (!subnavData && !hasItems) return null;

    return (
      <div className="hidden lg:flex items-center">
        <div className="py-2 relative border-r border-l border-neutral-base">
          <p className="sr-only">Aplicación actual:</p>
          {subnavData?.html || subnavData?.text ? (
            <span className="px-base py-sm border-r border-l border-neutral-base text-sm text-black">
              {subnavData.html ? (
                <span dangerouslySetInnerHTML={{ __html: subnavData.html }} />
              ) : (
                subnavData.text
              )}
            </span>
          ) : null}
          {hasItems && (
            <Nav
              hasNav={false}
              idPrefix="header-subnav-nav-item"
              classes="w-max max-w-64"
              items={subnavData?.items}
            />
          )}
        </div>
      </div>
    );
  };

  const renderMobileText = () => {
    if (mobileText) return mobileText;
    if (!mobileTextData) return null;
    return (
      <span className={clsx('inline-block lg:hidden max-w-full align-middle py-4 text-sm text-black overflow-hidden', mobileTextData.classes)}>
        {mobileTextData.html ? (
          <span dangerouslySetInnerHTML={{ __html: mobileTextData.html }} />
        ) : (
          mobileTextData.text
        )}
      </span>
    );
  };

  const renderNavigation = () => {
    if (navigation) return navigation;
    if (!navigationData?.items || navigationData.items.length === 0) return null;

    return (
      <MenuNavigation
        idPrefix={navigationData.idPrefix || 'header-nav-item'}
        id={navigationData.id || 'header-nav-item'}
        items={navigationData.items.map((item) => ({
          ...item,
          classes: clsx('c-menu-navigation__button--header -mr-base', item.classes),
        }))}
        classes={clsx('hidden lg:block', navigationData.classes)}
        ariaLabel={navigationData.ariaLabel || 'Menú principal'}
      />
    );
  };

  const renderDropdown = () => {
    if (dropdown) return dropdown;
    if (!dropdownData?.items || dropdownData.items.length === 0) return null;

    return (
      <div className="flex items-center">
        <div className="relative">
          <div className="hidden lg:block px-base py-sm">
            {dropdownData.html ? (
              <span dangerouslySetInnerHTML={{ __html: dropdownData.html }} />
            ) : (
              dropdownData.text
            )}
          </div>
          <Nav
            hasNav={false}
            idPrefix="header-dropdown-nav-item"
            classes="w-max max-w-64"
            items={dropdownData.items}
          />
        </div>
      </div>
    );
  };

  const renderOffcanvas = () => {
    if (offcanvas) return offcanvas;
    if (!offcanvasData && !offcanvasContent) return null;

    return (
      <div className="-mr-2 flex lg:hidden">
        <button
          id="header-offcanvas-button"
          tabIndex={0}
          aria-haspopup="true"
          type="button"
          className="inline-flex items-center px-3 py-4 text-sm text-black focus:outline-hidden focus:shadow-outline-black focus:bg-warning-base"
          onClick={openOffcanvas}
        >
          <span id="header-offcanvas-button-text" className="inline-block align-middle text-right">
            {offcanvasData?.html ? (
              <span dangerouslySetInnerHTML={{ __html: offcanvasData.html }} />
            ) : (
              offcanvasData?.text
            )}
          </span>
          <svg
            role="img"
            aria-label="Cerrado"
            className="inline-block align-middle"
            viewBox="0 0 96 96"
            fill="currentColor"
            width="1.5em"
            height="1.5em"
          >
            <g>
              <path d="M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z" />
            </g>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <header className={clsx(classes, className)}>
      <div className={clsx(containerClasses)}>
        <nav aria-labelledby="skip-link">
          {renderSkipLink()}
        </nav>
        <div className="bg-neutral-lighter border-b border-neutral-base">
          <div className="container mx-auto px-base">
            <div className="flex items-center justify-between min-h-14">
              <div className="flex flex-wrap items-center">
                <div className="flex items-center">
                  {renderLogoArea()}
                  {renderSubnav()}
                  {renderMobileText()}
                </div>
                {renderNavigation()}
              </div>

              {customNavigation && (
                <div dangerouslySetInnerHTML={{ __html: customNavigationHtml || '' }} />
              )}

              {customNavigationHtml && !customNavigation && (
                <div dangerouslySetInnerHTML={{ __html: customNavigationHtml }} />
              )}

              {renderDropdown()}
              {renderOffcanvas()}
            </div>
          </div>
        </div>
      </div>

      {isOffcanvasOpen && (
        <div
          id="header-offcanvas-dialog"
          className="left-0 fixed top-0 h-dvh w-offcanvas"
          role="dialog"
          aria-modal="true"
          aria-labelledby="header-offcanvas-button-text"
        >
          <div className="left-0 fixed top-0 h-dvh w-offcanvas ml-offcanvas-negative">
            <div className="h-full overflow-auto relative bg-white z-10">
              <div className="text-right p-sm">
                <button
                  type="button"
                  onClick={closeOffcanvas}
                  id="header-offcanvas-button-close"
                  className="c-button c-button--sm c-button--transparent m-sm"
                >
                  {offcanvasData?.textClose || 'Cerrar'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                    width="14"
                    height="14"
                    className="self-center ml-2"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M8.591 7.177a.25.25 0 010-.354l4.616-4.616A1 1 0 1011.793.793L7.177 5.409a.25.25 0 01-.354 0L2.207.793A1 1 0 00.793 2.207l4.616 4.616a.25.25 0 010 .354L.793 11.793a1 1 0 001.414 1.414l4.616-4.616a.25.25 0 01.354 0l4.616 4.616a1 1 0 001.414-1.414z"
                    />
                  </svg>
                </button>
              </div>
              {offcanvasContent || (offcanvasData?.contentHtml && (
                <div dangerouslySetInnerHTML={{ __html: offcanvasData.contentHtml }} />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
