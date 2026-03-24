import { type ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ErrorSummaryData {
  /** Unique identifier */
  id?: string;
  /** Error text */
  text?: string;
  /** Error HTML content */
  html?: string;
  /** Fragment to link to */
  fragment?: string;
  /** Accessibility label */
  ariaLabel?: string;
}

export interface ErrorSummaryProps {
  /** Title text */
  titleText?: string;
  /** Title HTML content */
  titleHtml?: string;
  /** Description text */
  descriptionText?: string;
  /** Description HTML content */
  descriptionHtml?: string;
  /** Custom CSS classes */
  classes?: string;
  /** Unique identifier */
  id?: string;
  /** List of errors */
  errorList?: ErrorSummaryData[];
  /** Heading level for the title */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Child elements (for compound component pattern) */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
}

function TitleHeading({
  headingLevel,
  titleText,
  titleHtml,
}: {
  headingLevel?: number;
  titleText?: string;
  titleHtml?: string;
}) {
  const content = titleHtml ? <span dangerouslySetInnerHTML={{ __html: titleHtml }} /> : titleText;

  const headingClasses = 'mb-base font-bold';
  const headingId = 'error-summary-title';

  switch (headingLevel) {
    case 1:
      return <h1 className={headingClasses} id={headingId}>{content}</h1>;
    case 2:
      return <h2 className={headingClasses} id={headingId}>{content}</h2>;
    case 3:
      return <h3 className={headingClasses} id={headingId}>{content}</h3>;
    case 4:
      return <h4 className={headingClasses} id={headingId}>{content}</h4>;
    case 5:
      return <h5 className={headingClasses} id={headingId}>{content}</h5>;
    case 6:
      return <h6 className={headingClasses} id={headingId}>{content}</h6>;
    default:
      return <h2 className={headingClasses} id={headingId}>{content}</h2>;
  }
}

/**
 * ErrorSummary component - displays a summary of form errors with links to fields.
 * Used for accessible form validation feedback.
 */
export function ErrorSummary({
  titleText = 'Hay un problema',
  titleHtml,
  descriptionText,
  descriptionHtml,
  classes,
  id,
  errorList,
  headingLevel,
  children,
  className,
}: ErrorSummaryProps) {
  const containerClassName = clsx(
    'p-base bg-white border-2 border-alert-base',
    classes,
    className
  );

  return (
    <div
      id={id}
      className={containerClassName}
      tabIndex={-1}
      role="alert"
      aria-labelledby="error-summary-title"
    >
      <TitleHeading headingLevel={headingLevel} titleText={titleText} titleHtml={titleHtml} />

      <div>
        {/* Description */}
        {(descriptionHtml || descriptionText) && (
          <p className="mb-base">
            {descriptionHtml ? (
              <span dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
            ) : (
              descriptionText
            )}
          </p>
        )}

        {/* Error list */}
        {errorList && errorList.length > 0 && (
          <ul className="font-semibold text-alert-base">
            {errorList.map((error, index) => {
              const content = error.html ? (
                <span dangerouslySetInnerHTML={{ __html: error.html }} />
              ) : (
                error.text
              );

              if (error.fragment) {
                return (
                  <li key={error.id || index}>
                    <a
                      href={`#${error.fragment}`}
                      id={error.id}
                      className="c-link c-link--alert inline-block pb-sm"
                    >
                      {content}
                    </a>
                  </li>
                );
              }

              return <li key={error.id || index}>{content}</li>;
            })}
          </ul>
        )}

        {/* Children (compound pattern) */}
        {children}
      </div>
    </div>
  );
}
