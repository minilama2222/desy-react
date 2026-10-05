import type { Meta, StoryObj } from '@storybook/react';
import { Treegrid } from './Treegrid';

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
      <table className="c-treegrid" role="treegrid" aria-label="Jerarquía de carpetas">
        <caption className="sr-only mb-base font-bold text-left text-lg">Estructura de carpetas del proyecto</caption>
        <thead>
          <tr className="border-t border-b border-neutral-base">
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark">Nombre</th>
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark">Tipo</th>
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark text-right">Tamaño</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-b border-neutral-base" aria-expanded="true" aria-level="1">
            <td className="px-base py-sm">
              <button type="button" className="c-button c-button--transparent c-button--sm" aria-label="Contraer carpeta src">
                <span aria-hidden="true">▾</span>
                <span className="ml-1">src</span>
              </button>
            </td>
            <td className="px-base py-sm">Carpeta</td>
            <td className="px-base py-sm text-right">—</td>
          </tr>
          <tr className="border-t border-b border-neutral-base" aria-level="2">
            <td className="px-base py-sm pl-lg">components</td>
            <td className="px-base py-sm">Carpeta</td>
            <td className="px-base py-sm text-right">—</td>
          </tr>
          <tr className="border-t border-b border-neutral-base" aria-level="3">
            <td className="px-base py-sm pl-xl">Dialog.tsx</td>
            <td className="px-base py-sm">Archivo</td>
            <td className="px-base py-sm text-right">2,3 KB</td>
          </tr>
          <tr className="border-t border-b border-neutral-base" aria-level="3">
            <td className="px-base py-sm pl-xl">Table.tsx</td>
            <td className="px-base py-sm">Archivo</td>
            <td className="px-base py-sm text-right">1,8 KB</td>
          </tr>
          <tr className="border-t border-b border-neutral-base" aria-expanded="false" aria-level="1">
            <td className="px-base py-sm">
              <button type="button" className="c-button c-button--transparent c-button--sm" aria-label="Expandir carpeta docs">
                <span aria-hidden="true">▸</span>
                <span className="ml-1">docs</span>
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
