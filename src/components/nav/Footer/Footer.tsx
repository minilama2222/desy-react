import { type ReactNode } from 'react';
import { clsx } from 'clsx';

// Default branding values (would normally come from a BrandingService)
const DEFAULT_ORG_NAME = 'Gobierno de España';
const DEFAULT_ORG_WEBSITE = 'https://www.la-moncloa.es';
const DEFAULT_ORG_ADDRESS = 'Complex de la Moncloa';
const DEFAULT_ORG_CITY = 'Madrid';
const DEFAULT_ORG_PHONE = '+34 91 321 60 00';
const DEFAULT_LICENSE_TEXT = 'Salvo donde se indique lo contrario, todos los contenidos publicados en este sitio web tienen licencia';
const DEFAULT_LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/deed.es';
const DEFAULT_LICENSE_NAME = 'Creative Commons Reconocimiento 4.0 Internacional';
const DEFAULT_EU_FUNDS_URL = 'https://fundosefsp.gob.es/';

export type FooterLogoType = 'UE' | 'FEDER' | 'FEADER' | 'FSE' | 'Plurifondo' | 'Custom';

export interface FooterMetaItemData {
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
  /** Accessibility label */
  ariaLabel?: string;
}

export interface FooterMetaData {
  /** Visually hidden title for screen readers */
  visuallyHiddenTitle?: string;
  /** Meta section HTML content */
  html?: string;
  /** Meta section text */
  text?: string;
  /** Meta items */
  items?: FooterMetaItemData[];
}

export interface FooterNavigationItemData {
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
  /** Accessibility label */
  ariaLabel?: string;
}

export interface FooterNavigationData {
  /** Section title */
  title?: string;
  /** Number of columns */
  columns?: number;
  /** Custom CSS classes */
  classes?: string;
  /** Navigation items */
  items?: FooterNavigationItemData[];
}

export interface FooterProps {
  /** Meta data (bottom links) */
  meta?: FooterMetaData;
  /** Navigation sections */
  navigation?: FooterNavigationData[];
  /** Icon HTML content */
  iconHtml?: string;
  /** Container CSS classes */
  containerClasses?: string;
  /** Custom CSS classes */
  classes?: string;
  /** Description text */
  descriptionText?: string;
  /** Description HTML content */
  descriptionHtml?: string;
  /** Hide the logo */
  noLogo?: boolean;
  /** Logo URL */
  url?: string;
  /** Logo container CSS classes */
  logoContainerClasses?: string;
  /** Logo type */
  type?: FooterLogoType | string;
  /** Child elements (for compound component pattern) */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
}

function FederLogo({ srOnly }: { srOnly?: boolean }) {
  return (
    <span className="c-footer__logo c-footer__logo--feder">
      <span className={srOnly ? 'sr-only' : undefined}>
        Cofinanciado por la Unión Europea. Fondo Europeo de Desarrollo Regional (FEDER). Ministerio de Hacienda.
      </span>
    </span>
  );
}

function FooterLogo({ type }: { type?: string }) {
  switch (type) {
    case 'UE':
      return <span className="c-footer__logo c-footer__logo--ue"><span className="sr-only">Cofinanciado por la Unión Europea.</span></span>;
    case 'FSE':
      return <span className="c-footer__logo c-footer__logo--fse"><span className="sr-only">Cofinanciado por la Unión Europea. Fondo Social Europeo Plus (FSE+). Ministerio de Agricultura y Economía Social.</span></span>;
    case 'FEDER':
    default:
      return <FederLogo />;
    case 'FEADER':
      return <span className="c-footer__logo c-footer__logo--feader"><span className="sr-only">Cofinanciado por la Unión Europea. Fondo Europeo Agrario de Desarrollo Rural (FEADER). Ministerio de Agricultura, Pesca y Alimentación.</span></span>;
    case 'Plurifondo':
      return <span className="c-footer__logo c-footer__logo--plurifondo"><span className="sr-only">Cofinanciado por la Unión Europea. Plurifondo. Gobierno de España.</span></span>;
  }
}

function NavigationSection({ nav }: { nav: FooterNavigationData }) {
  const colsClass = nav.columns
    ? { 1: 'lg:columns-1', 2: 'lg:columns-2', 3: 'lg:columns-3', 4: 'lg:columns-4', 5: 'lg:columns-5', 6: 'lg:columns-6', 7: 'lg:columns-7', 8: 'lg:columns-8' }[nav.columns]
    : '';

  return (
    <div className="flex-1">
      <div className={nav.classes || 'flex-1'}>
        <h3 className="c-h4 mb-base text-black">{nav.title}</h3>
      </div>
      {nav.items && nav.items.length > 0 && (
        <ul className={clsx('relative space-y-base', colsClass)}>
          {nav.items.map((item, i) => {
            const content = item.html ? (
              <span dangerouslySetInnerHTML={{ __html: item.html }} />
            ) : (
              item.text
            );

            if (item.href) {
              return (
                <li key={item.id || i} className="mb-xs">
                  <a href={item.href} target={item.target} className="c-link font-semibold">
                    {content}
                  </a>
                </li>
              );
            }

            if (item.routerLink) {
              return (
                <li key={item.id || i} className="mb-xs">
                  <a href={item.routerLink} className="c-link font-semibold">
                    {content}
                  </a>
                </li>
              );
            }

            return <li key={item.id || i} className="mb-xs c-link font-semibold">{content}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

/**
 * Footer component - displays the site footer with navigation, meta links, and EU funding logo.
 */
export function Footer({
  meta,
  navigation,
  iconHtml,
  containerClasses,
  classes,
  descriptionText,
  descriptionHtml,
  noLogo,
  url,
  logoContainerClasses,
  type = 'FEDER',
  children,
  className,
}: FooterProps) {
  const footerClassName = clsx(
    'py-base bg-neutral-lighter border-t border-neutral-base text-base lg:text-sm text-neutral-dark',
    classes,
    className
  );

  const logoUrl = url || DEFAULT_EU_FUNDS_URL;

  return (
    <footer className={footerClassName}>
      <div className={clsx('container mx-auto px-base', containerClasses)}>
        {/* Navigation sections */}
        {navigation && navigation.length > 0 && (
          <>
            <h2 className="sr-only">Menú de pie de página</h2>
            <div className="flex flex-col lg:flex-row flex-wrap gap-base">
              {navigation.map((nav, i) => (
                <NavigationSection key={i} nav={nav} />
              ))}
            </div>
            <hr className="my-base border-t border-neutral-base" />
          </>
        )}

        <div className="flex flex-wrap flex-col lg:flex-row justify-between">
          <div className="mb-base">
            {/* Meta links */}
            {meta && (
              <>
                <h2 className="sr-only">
                  {meta.visuallyHiddenTitle || 'Enlaces de pie de página'}
                </h2>
                {meta.items && meta.items.length > 0 && (
                  <ul className="flex flex-col lg:flex-row lg:flex-wrap mb-base">
                    {meta.items.map((item, i) => {
                      const content = item.html ? (
                        <span dangerouslySetInnerHTML={{ __html: item.html }} />
                      ) : (
                        item.text
                      );

                      return (
                        <li key={item.id || i} className="mb-sm mr-base">
                          {item.href ? (
                            <a href={item.href} target={item.target} className="c-link font-semibold">
                              {content}
                            </a>
                          ) : (
                            <a href={item.routerLink || '#'} className="c-link font-semibold">
                              {content}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
                {meta.html && (
                  <div className="mb-sm">
                    <span dangerouslySetInnerHTML={{ __html: meta.html }} />
                  </div>
                )}
              </>
            )}

            {/* Description */}
            {(descriptionHtml || descriptionText) ? (
              <div>
                <h2 className="sr-only">Acerca de</h2>
                {descriptionHtml ? (
                  <span dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                ) : (
                  <p>{descriptionText}</p>
                )}
              </div>
            ) : (
              <>
                <div className="leading-tight">
                  <p>
                    {DEFAULT_LICENSE_TEXT}{' '}
                    <a href={DEFAULT_LICENSE_URL} rel="license" target="_blank" className="c-link c-link--neutral" title="Se abre en ventana nueva">
                      licencia {DEFAULT_LICENSE_NAME}
                    </a>
                  </p>
                </div>
                <div className="leading-tight">
                  <p>
                    <a target="_blank" className="c-link c-link--neutral" href={DEFAULT_ORG_WEBSITE} title="Se abre en ventana nueva">
                      {DEFAULT_ORG_NAME}
                    </a>
                    . {DEFAULT_ORG_ADDRESS}. {DEFAULT_ORG_CITY} - Teléfono:
                    <a href={`tel:${DEFAULT_ORG_PHONE.replace(/\s/g, '')}`} className="c-link c-link--neutral">
                      {DEFAULT_ORG_PHONE}
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Logo */}
        <div className="overflow-hidden">
          <div className="flex flex-wrap gap-base lg:gap-x-2xl w-full pt-lg">
            {!noLogo && (
              <div className={logoContainerClasses}>
                <p>
                  <a
                    href={logoUrl}
                    className="inline-block text-sm c-link no-underline"
                    title="Más información sobre los Fondos Europeos"
                  >
                    <FooterLogo type={type} />
                  </a>
                </p>
              </div>
            )}
            {iconHtml && (
              <div className={clsx(iconHtml ? 'flex-1' : '')}>
                <span dangerouslySetInnerHTML={{ __html: iconHtml }} />
              </div>
            )}
          </div>
        </div>

        {/* Custom children */}
        {children}
      </div>
    </footer>
  );
}
