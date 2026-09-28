import fs from 'fs';

const M = {
  'hidden': 'display: none', 'block': 'display: block', 'inline': 'display: inline',
  'flex': 'display: flex', 'inline-flex': 'display: inline-flex', 'grid': 'display: grid',
  'absolute': 'position: absolute', 'relative': 'position: relative', 'fixed': 'position: fixed',
  'static': 'position: static', 'overflow-hidden': 'overflow: hidden',
  'w-full': 'width: 100%', 'w-auto': 'width: auto',
  'h-full': 'height: 100%', 'h-auto': 'height: auto',
  'mt-xs': 'margin-top: 0.25rem', 'mt-sm': 'margin-top: 0.5rem', 'mt-base': 'margin-top: 1rem', 'mt-lg': 'margin-top: 1.75rem',
  'mb-xs': 'margin-bottom: 0.25rem', 'mb-sm': 'margin-bottom: 0.5rem', 'mb-base': 'margin-bottom: 1rem', 'mb-lg': 'margin-bottom: 1.75rem',
  'ml-xs': 'margin-left: 0.25rem', 'ml-sm': 'margin-left: 0.5rem', 'ml-base': 'margin-left: 1rem',
  'mr-xs': 'margin-right: 0.25rem', 'mr-sm': 'margin-right: 0.5rem', 'mr-base': 'margin-right: 1rem',
  'mx-auto': 'margin-left: auto; margin-right: auto',
  'px-xs': 'padding-left: 0.25rem; padding-right: 0.25rem',
  'px-sm': 'padding-left: 0.5rem; padding-right: 0.5rem',
  'px-base': 'padding-left: 1rem; padding-right: 1rem',
  'px-lg': 'padding-left: 1.75rem; padding-right: 1.75rem',
  'px-2': 'padding-left: 0.5rem; padding-right: 0.5rem',
  'px-4': 'padding-left: 1rem; padding-right: 1rem',
  'px-6': 'padding-left: 1.5rem; padding-right: 1.5rem',
  'py-xs': 'padding-top: 0.25rem; padding-bottom: 0.25rem',
  'py-sm': 'padding-top: 0.5rem; padding-bottom: 0.5rem',
  'py-base': 'padding-top: 1rem; padding-bottom: 1rem',
  'py-lg': 'padding-top: 1.75rem; padding-bottom: 1.75rem',
  'p-0': 'padding: 0', 'p-xs': 'padding: 0.25rem', 'p-sm': 'padding: 0.5rem', 'p-base': 'padding: 1rem',
  'text-left': 'text-align: left', 'text-center': 'text-align: center', 'text-right': 'text-align: right',
  'text-xs': 'font-size: 0.75rem; line-height: 1rem',
  'text-sm': 'font-size: 0.875rem; line-height: 1.25rem',
  'text-base': 'font-size: 1rem; line-height: 1.5rem',
  'text-lg': 'font-size: 1.125rem; line-height: 1.75rem',
  'text-xl': 'font-size: 1.25rem; line-height: 1.75rem',
  'text-white': 'color: #ffffff', 'text-black': 'color: #1f2331',
  'text-neutral-dark': 'color: #5e616b', 'text-neutral-base': 'color: #92949b',
  'text-primary-base': 'color: #00607a', 'text-primary-light': 'color: #d6eaf0',
  'text-alert-base': 'color: #d22333', 'text-heading-base': 'color: #3c4c5c',
  'font-sans': 'font-family: "Open Sans", ui-sans-serif, system-ui, sans-serif',
  'font-semibold': 'font-weight: 600', 'font-bold': 'font-weight: 700',
  'italic': 'font-style: italic',
  'underline': 'text-decoration: underline', 'no-underline': 'text-decoration: none',
  'uppercase': 'text-transform: uppercase',
  'tracking-wide': 'letter-spacing: 0.025em',
  'leading-tight': 'line-height: 1.25', 'leading-normal': 'line-height: 1.5',
  'whitespace-nowrap': 'white-space: nowrap',
  'truncate': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap',
  'select-none': 'user-select: none',
  'bg-white': 'background-color: #ffffff', 'bg-black': 'background-color: #1f2331',
  'bg-transparent': 'background-color: transparent',
  'bg-primary-base': 'background-color: #00607a', 'bg-primary-light': 'background-color: #d6eaf0',
  'bg-neutral-lighter': 'background-color: #f6f6f5', 'bg-neutral-light': 'background-color: #ededec',
  'bg-success-base': 'background-color: #24d14c', 'bg-alert-base': 'background-color: #d22333',
  'border': 'border-width: 1px; border-style: solid', 'border-0': 'border-width: 0',
  'border-white': 'border-color: #ffffff', 'border-black': 'border-color: #1f2331',
  'border-neutral-base': 'border-color: #92949b',
  'border-primary-base': 'border-color: #00607a', 'border-primary-light': 'border-color: #d6eaf0',
  'border-success-base': 'border-color: #24d14c', 'border-alert-base': 'border-color: #d22333',
  'rounded': 'border-radius: 0.1875rem', 'rounded-sm': 'border-radius: 0.125rem',
  'rounded-full': 'border-radius: 9999px', 'rounded-lg': 'border-radius: 0.5rem',
  'shadow-none': 'box-shadow: none',
  'opacity-0': 'opacity: 0', 'opacity-100': 'opacity: 1',
  'transition': 'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms',
  'transition-colors': 'transition-property: color, background-color, border-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms',
  'duration-150': 'transition-duration: 150ms', 'duration-300': 'transition-duration: 300ms',
  'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',
  'z-10': 'z-index: 10', 'z-0': 'z-index: 0', 'z-auto': 'z-index: auto',
  'cursor-pointer': 'cursor: pointer', 'cursor-default': 'cursor: default',
  'sr-only': 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0',
  'fill-current': 'fill: currentColor', 'fill-none': 'fill: none',
  'outline-none': 'outline: 2px solid transparent; outline-offset: 2px',
  'hidden!': 'display: none !important',
  'block!': 'display: block !important',
};

function proc(css) {
  css = css.replace(/@tailwind[^;]+;/g, '');
  css = css.replace(/@layer[^{]+\{/g, '{');
  css = css.replace(/@apply\s+([\w-]+!)\s*;/g, (_, u) => M[u] ? `${M[u]}` : _);
  css = css.replace(/@apply\s+([\w-]+)\s*;/g, (_, u) => M[u] ? `${M[u]};` : _);
  css = css.replace(/&(\.[\w-]+)/g, '$1');
  css = css.replace(/^\s*&\s*$/gm, '');
  css = css.replace(/\s+&\s*/g, ' ');
  return css;
}

const base = '/root/.openclaw/workspace/projects/desy-react/.storybook/styles/templates/components';
const out = '/root/.openclaw/workspace/projects/desy-react/.storybook/styles/desy-html-components.css';
let all = '';
for (const n of fs.readdirSync(base)) {
  const f = `${base}/${n}/_styles.${n}.css`;
  if (!fs.existsSync(f)) continue;
  let c = fs.readFileSync(f, 'utf8');
  c = proc(c);
  all += `/* ${n} */\n${c}\n`;
}
fs.writeFileSync(out, all);
console.log(`Written ${all.length} bytes`);
