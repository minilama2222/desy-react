import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface PaginationProps {
  /** Unique identifier prefix */
  idPrefix?: string;
  /** Total number of items */
  totalItems: number;
  /** Current page number (1-indexed) */
  currentPage?: number;
  /** Number of items per page */
  itemsPerPage?: number;
  /** Whether to show the select dropdown */
  hasSelect?: boolean;
  /** Whether to show first/last buttons */
  showFirst?: boolean;
  /** Whether to show previous/next buttons */
  showPrevious?: boolean;
  /** Whether to show previous button */
  showNext?: boolean;
  /** Whether to show last button */
  showLast?: boolean;
  /** Whether first button is enabled */
  hasFirst?: boolean;
  /** Whether previous button is enabled */
  hasPrevious?: boolean;
  /** Whether next button is enabled */
  hasNext?: boolean;
  /** Whether last button is enabled */
  hasLast?: boolean;
  /** Text for previous button */
  previousText?: string;
  /** Text for next button */
  nextText?: string;
  /** Text for first button */
  firstText?: string;
  /** Text for last button */
  lastText?: string;
  /** Whether to show items per page selector */
  hasSelectItemsPerPage?: boolean;
  /** Maximum number of page buttons to show */
  maxShowPages?: number;
  /** CSS classes for the container */
  classes?: string;
  /** CSS classes for the outer container */
  className?: string;
  /** Current page change handler */
  onCurrentPageChange?: (page: number) => void;
  /** Items per page change handler */
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  /** Child components */
  children?: ReactNode;
}

interface PageItem {
  value: number;
  text: number;
  selected: boolean;
}

const previousIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" className="self-center h-2.5 w-2.5 mr-2" aria-hidden="true" focusable="false">
    <path d="M54.87 71.77a2.5 2.5 0 010-3.54L106 17.07A10 10 0 1091.89 2.93L35.43 59.39a15 15 0 000 21.22l56.46 56.46A10 10 0 10106 122.93z" fill="currentColor" />
  </svg>
);

const nextIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" className="self-center h-2.5 w-2.5 ml-2" aria-hidden="true" focusable="false">
    <path d="M34 137.07a10 10 0 010-14.14l51.13-51.16a2.5 2.5 0 000-3.54L34 17.07A10 10 0 0148.11 2.93l56.46 56.46a15 15 0 010 21.22l-56.46 56.46a10 10 0 01-14.11 0z" fill="currentColor" />
  </svg>
);

const firstIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" className="self-center h-2.5 w-2.5 mr-2" aria-hidden="true" focusable="false">
    <g>
      <path d="M10.42,12a2.64,2.64,0,0,1,.77-1.88L20.73.58a1.77,1.77,0,0,1,2.5,2.5l-8.74,8.74a.27.27,0,0,0,0,.36l8.74,8.74a1.77,1.77,0,0,1-2.5,2.5l-9.54-9.54A2.64,2.64,0,0,1,10.42,12Z" fill="currentColor"></path>
      <path d="M.25,12A2.65,2.65,0,0,1,1,10.12L10.57.58a1.77,1.77,0,0,1,2.5,2.5L4.33,11.82a.25.25,0,0,0,0,.36l8.74,8.74a1.77,1.77,0,0,1-2.5,2.5L1,13.88A2.65,2.65,0,0,1,.25,12Z" fill="currentColor"></path>
    </g>
  </svg>
);

const lastIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" className="self-center h-2.5 w-2.5 ml-2" aria-hidden="true" focusable="false">
    <g>
      <path d="M13.58,12a2.64,2.64,0,0,1-.77,1.88L3.27,23.42a1.77,1.77,0,0,1-2.5-2.5l8.74-8.74a.27.27,0,0,0,0-.36L.77,3.08A1.77,1.77,0,0,1,3.27.58l9.54,9.54A2.64,2.64,0,0,1,13.58,12Z" fill="currentColor"></path>
      <path d="M23.75,12A2.65,2.65,0,0,1,23,13.88l-9.54,9.54a1.77,1.77,0,0,1-2.5-2.5l8.74-8.74a.25.25,0,0,0,0-.36L10.93,3.08a1.77,1.77,0,0,1,2.5-2.5L23,10.12A2.65,2.65,0,0,1,23.75,12Z" fill="currentColor"></path>
    </g>
  </svg>
);

const prefix = <span className="sr-only">Página&nbsp;</span>;

/**
 * Pagination component - provides navigation between pages of content.
 */
export function Pagination({
  idPrefix = 'pagination-item',
  totalItems,
  currentPage = 1,
  itemsPerPage = 10,
  hasSelect = false,
  showFirst = false,
  showPrevious = true,
  showNext = true,
  showLast = false,
  hasFirst = true,
  hasPrevious = true,
  hasNext = true,
  hasLast = true,
  previousText = 'Anterior',
  nextText = 'Siguiente',
  firstText = 'Primera',
  lastText = 'Última',
  maxShowPages,
  classes,
  className,
  onCurrentPageChange,
  children,
}: PaginationProps) {
  const nPages = itemsPerPage > 0 ? Math.ceil(totalItems / itemsPerPage) : 1;
  
  // Ensure currentPage is within bounds
  const safeCurrentPage = Math.min(Math.max(1, currentPage), nPages);

  const getSuffix = (page: number): string => {
    if (page >= 0 && page * itemsPerPage < totalItems) {
      return `: ${page * itemsPerPage + 1} al ${getLastItemNumber(page)}`;
    }
    return '';
  };

  const getSuffixScreenReader = (page: number): string => {
    if (page >= 0 && page * itemsPerPage < totalItems) {
      return ` con los resultados del ${page * itemsPerPage + 1} al ${getLastItemNumber(page)}`;
    }
    return '';
  };

  const getLastItemNumber = (pageIndex: number): number => {
    return Math.min((pageIndex + 1) * itemsPerPage, totalItems);
  };

  const buildPages = (): PageItem[] => {
    const pages: PageItem[] = [];
    const useLazy = maxShowPages && nPages > maxShowPages && maxShowPages >= 3;

    if (!useLazy) {
      for (let i = 1; i <= nPages; i++) {
        pages.push({
          value: i,
          text: i,
          selected: i === safeCurrentPage,
        });
      }
    } else {
      const half = Math.floor(maxShowPages / 2);
      let start = Math.max(1, safeCurrentPage - half);
      let end = start + maxShowPages - 1;

      if (end > nPages) {
        end = nPages;
        start = Math.max(1, end - maxShowPages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push({
          value: i,
          text: i,
          selected: i === safeCurrentPage,
        });
      }
    }
    return pages;
  };

  const items = buildPages();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= nPages && page !== safeCurrentPage) {
      onCurrentPageChange?.(page);
    }
  };

  const containerClasses = clsx(
    'flex flex-wrap items-center flex-1 mb-base lg:mb-0 text-sm',
    classes
  );

  const wrapperClasses = clsx('lg:flex lg:flex-wrap lg:items-center lg:gap-base', className);

  const getButtonId = (index: number): string => `${idPrefix}-${index}`;

  if (hasSelect) {
    return (
      <nav className={containerClasses} aria-label="Pagination">
        <p id={`${idPrefix}-label`} className="w-full mb-xs text-sm text-neutral-dark">
          Selecciona para cargar datos automáticamente
        </p>
        
        {showFirst && (
          <button
            id={getButtonId(0) + '-first'}
            onClick={() => handlePageChange(1)}
            disabled={safeCurrentPage === 1 || !hasFirst}
            className="c-button c-button--sm c-button--transparent mr-xs"
            aria-label={`${firstText}${getSuffixScreenReader(0)}`}
          >
            {firstIcon}{prefix}{firstText}{getSuffix(0)}
          </button>
        )}

        {showPrevious && (
          <button
            id={getButtonId(0) + '-previous'}
            onClick={() => handlePageChange(safeCurrentPage - 1)}
            disabled={safeCurrentPage === 1 || !hasPrevious}
            className="c-button c-button--sm c-button--transparent mr-xs"
            aria-label={`${previousText}${getSuffixScreenReader(safeCurrentPage - 2)}`}
          >
            {previousIcon}{prefix}{previousText}{getSuffix(safeCurrentPage - 2)}
          </button>
        )}

        <div className={clsx('flex flex-wrap items-center pl-sm', (showFirst || showLast) && 'w-full lg:w-auto')}>
          {(showFirst || showLast) && (
            <p className="lg:hidden mr-xs text-sm text-neutral-dark">Página actual:</p>
          )}
          <select
            className="c-select c-select--sm c-select--transparent -mt-sm mb-0 mr-xs"
            value={safeCurrentPage}
            onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}
            aria-label="Selecciona una página"
          >
            {items.map((item) => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
        </div>

        {showNext && (
          <button
            id={getButtonId(0) + '-next'}
            onClick={() => handlePageChange(safeCurrentPage + 1)}
            disabled={safeCurrentPage === nPages || !hasNext}
            className="c-button c-button--sm c-button--transparent mr-xs"
            aria-label={`${nextText}${getSuffixScreenReader(safeCurrentPage)}`}
          >
            {prefix}{nextText}{getSuffix(safeCurrentPage)}{nextIcon}
          </button>
        )}

        {showLast && (
          <button
            id={getButtonId(0) + '-last'}
            onClick={() => handlePageChange(nPages)}
            disabled={safeCurrentPage === nPages || !hasLast}
            className="c-button c-button--sm c-button--transparent mr-xs"
            aria-label={`${lastText}${getSuffixScreenReader(nPages - 1)}`}
          >
            {prefix}{lastText}{getSuffix(nPages - 1)}{lastIcon}
          </button>
        )}

        {children}
      </nav>
    );
  }

  return (
    <div id={idPrefix} className={wrapperClasses}>
      <nav className={containerClasses} aria-label="Paginación">
        <ul className="flex flex-wrap">
          {items.map((item) => (
            <li key={item.value}>
              {item.selected ? (
                <button
                  id={getButtonId(item.value)}
                  className="c-button c-button--primary c-button--disabled mb-sm mr-sm"
                  disabled
                  aria-current="page"
                >
                  <strong>{prefix}{item.text}{getSuffix(item.value - 1)}</strong>
                </button>
              ) : (
                <button
                  id={getButtonId(item.value)}
                  className="c-button mb-sm mr-sm"
                  onClick={() => handlePageChange(item.value)}
                  aria-label={`${prefix}${item.text}${getSuffixScreenReader(item.value - 1)}`}
                >
                  {prefix}{item.text}{getSuffix(item.value - 1)}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <p
        id={`${idPrefix}-status`}
        className="block relative -top-xs lg:ml-auto text-sm text-neutral-dark"
        role="status"
        aria-live="polite"
      >
        <span className="sr-only">Posición de paginación: </span>
        <span className="sr-only">resultados del </span>
        {(safeCurrentPage - 1) * itemsPerPage + 1} <span aria-label="al">-</span>{' '}
        {getLastItemNumber(safeCurrentPage - 1)} de {totalItems}
      </p>
    </div>
  );
}
