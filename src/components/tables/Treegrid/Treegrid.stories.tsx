import type { Meta, StoryObj } from '@storybook/react';
import { Treegrid } from './Treegrid';

// SVG inline para los iconos de expand/collapse (los caracteres Unicode ▾/▸
// no renderizan en el iframe de Storybook por la fuente del contenedor).
const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    className="inline-block align-middle mr-1"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5.5 3l5 5-5 5V3z" fill="currentColor" />
  </svg>
);
const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    className="inline-block align-middle mr-1"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M3 5.5l5 5 5-5H3z" fill="currentColor" />
  </svg>
);

// Wrap con un padding-left escalonado según aria-level, porque el
// `tailwind.config.cjs` tiene claves duplicadas 'lg'/'xl' (la última gana:
// 32rem/36rem) y eso haría el indent excesivo. Usamos style inline.
const indentByLevel = (level: number) => ({
  paddingLeft: `${(level - 1) * 1.75}rem`,
});

const meta: Meta<typeof Treegrid> = {
  title: 'Tables/Treegrid',
  component: Treegrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Wrapper para tablas con estructura jerárquica (tree grid) usando `role="treegrid"`. Sigue el patrón WAI-ARIA para tablas expandibles/colapsables. No existe `examples-treegrid.html` en desy-html (rama npm 16.0.4), por lo que este contenido se basa en la especificación ARIA y el resto del catálogo.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Treegrid>;

export const PorDefecto: Story = {
  args: {
    className: 'c-treegrid',
    children: (
      <table className="c-treegrid" role="treegrid" aria-label="Jerarquía de carpetas del proyecto">
        <caption className="sr-only mb-base font-bold text-left text-lg">Estructura de carpetas del proyecto</caption>
        <thead>
          <tr className="border-t border-b border-neutral-base">
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark">Nombre</th>
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark">Tipo</th>
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark text-right">Tamaño</th>
          </tr>
        </thead>
        <tbody>
          {/* Nivel 1: src, expandido */}
          <tr className="border-t border-b border-neutral-base" aria-expanded="true" aria-level="1" style={indentByLevel(1)}>
            <td className="px-base py-sm">
              <button type="button" className="c-button c-button--transparent c-button--sm" aria-label="Contraer carpeta src">
                <ChevronDown />
                <span>src</span>
              </button>
            </td>
            <td className="px-base py-sm">Carpeta</td>
            <td className="px-base py-sm text-right">—</td>
          </tr>
          {/* Nivel 2: components, dentro de src */}
          <tr className="border-t border-b border-neutral-base" aria-level="2" style={indentByLevel(2)}>
            <td className="px-base py-sm">components</td>
            <td className="px-base py-sm">Carpeta</td>
            <td className="px-base py-sm text-right">—</td>
          </tr>
          {/* Nivel 3: Dialog.tsx, dentro de components */}
          <tr className="border-t border-b border-neutral-base" aria-level="3" style={indentByLevel(3)}>
            <td className="px-base py-sm">Dialog.tsx</td>
            <td className="px-base py-sm">Archivo</td>
            <td className="px-base py-sm text-right">2,3 KB</td>
          </tr>
          <tr className="border-t border-b border-neutral-base" aria-level="3" style={indentByLevel(3)}>
            <td className="px-base py-sm">Table.tsx</td>
            <td className="px-base py-sm">Archivo</td>
            <td className="px-base py-sm text-right">1,8 KB</td>
          </tr>
          {/* Nivel 1: docs, colapsado */}
          <tr className="border-t border-b border-neutral-base" aria-expanded="false" aria-level="1" style={indentByLevel(1)}>
            <td className="px-base py-sm">
              <button type="button" className="c-button c-button--transparent c-button--sm" aria-label="Expandir carpeta docs">
                <ChevronRight />
                <span>docs</span>
              </button>
            </td>
            <td className="px-base py-sm">Carpeta</td>
            <td className="px-base py-sm text-right">—</td>
          </tr>
        </tbody>
      </table>
    ),
  },
};
