import type { Meta, StoryObj } from '@storybook/react';
import { TableAdvanced } from './TableAdvanced';

const meta: Meta<typeof TableAdvanced> = {
  title: 'Tables/TableAdvanced',
  component: TableAdvanced,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabla avanzada con `data-module="c-table-advanced"` (sort/filter en cliente). Réplica del patrón de desy-html/examples-table-advanced.html.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TableAdvanced>;

export const PorDefecto: Story = {
  args: {
    className: 'c-table-advanced border-t-2 border-b-2 border-neutral-base min-w-full',
    children: (
      <table className="c-table-advanced border-t-2 border-b-2 border-neutral-base min-w-full" data-module="c-table-advanced" role="grid" aria-readonly="true">
        <caption className="sr-only mb-base font-bold text-left text-lg">Caption de la tabla</caption>
        <thead>
          <tr className="border-t border-neutral-base divide-x divide-neutral-base">
            <th scope="col" id="ta-default-0" className="align-top px-base py-sm border-neutral-base border-b-0 text-left text-sm font-normal text-neutral-dark">
              <span className="inline-block relative">Mes de pago</span>
            </th>
            <th scope="col" id="ta-default-1" className="align-top px-base py-sm border-neutral-base border-b-0 text-left text-sm font-normal text-neutral-dark text-right">
              <span className="inline-block relative">Primer pago</span>
            </th>
            <th scope="col" id="ta-default-2" className="align-top px-base py-sm border-neutral-base border-b-0 text-left text-sm font-normal text-neutral-dark text-right">
              <span className="inline-block relative">Segundo pago</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-b border-neutral-base hover:bg-neutral-lighter">
            <td tabIndex={-1} className="px-base py-sm">Enero</td>
            <td tabIndex={-1} className="px-base py-sm text-right">85€</td>
            <td tabIndex={-1} className="px-base py-sm text-right">95€</td>
          </tr>
          <tr className="border-t border-b border-neutral-base hover:bg-neutral-lighter">
            <td tabIndex={-1} className="px-base py-sm">Febrero</td>
            <td tabIndex={-1} className="px-base py-sm text-right">75€</td>
            <td tabIndex={-1} className="px-base py-sm text-right">55€</td>
          </tr>
          <tr className="border-t border-b border-neutral-base hover:bg-neutral-lighter">
            <td tabIndex={-1} className="px-base py-sm">Marzo</td>
            <td tabIndex={-1} className="px-base py-sm text-right">165€</td>
            <td tabIndex={-1} className="px-base py-sm text-right">125€</td>
          </tr>
        </tbody>
      </table>
    ),
  },
};

export const ConTfoot: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante con fila de totales en `<tfoot>`, patrón habitual en tablas con agregaciones (suma de importes, conteo, etc.).',
      },
    },
  },
  args: {
    className: 'c-table-advanced border-t-2 border-b-2 border-neutral-base min-w-full',
    children: (
      <table className="c-table-advanced border-t-2 border-b-2 border-neutral-base min-w-full" data-module="c-table-advanced" role="grid" aria-readonly="true">
        <caption className="sr-only mb-base font-bold text-left text-lg">Tabla con totales</caption>
        <thead>
          <tr className="border-t border-neutral-base divide-x divide-neutral-base">
            <th scope="col" id="ta-tfoot-0" className="align-top px-base py-sm border-neutral-base border-b-0 text-left text-sm font-normal text-neutral-dark">Mes de pago</th>
            <th scope="col" id="ta-tfoot-1" className="align-top px-base py-sm border-neutral-base border-b-0 text-left text-sm font-normal text-neutral-dark text-right">Primer pago</th>
            <th scope="col" id="ta-tfoot-2" className="align-top px-base py-sm border-neutral-base border-b-0 text-left text-sm font-normal text-neutral-dark text-right">Segundo pago</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-b border-neutral-base hover:bg-neutral-lighter">
            <td className="px-base py-sm">Enero</td>
            <td className="px-base py-sm text-right">85€</td>
            <td className="px-base py-sm text-right">95€</td>
          </tr>
          <tr className="border-t border-b border-neutral-base hover:bg-neutral-lighter">
            <td className="px-base py-sm">Febrero</td>
            <td className="px-base py-sm text-right">75€</td>
            <td className="px-base py-sm text-right">55€</td>
          </tr>
          <tr className="border-t border-b border-neutral-base hover:bg-neutral-lighter">
            <td className="px-base py-sm">Marzo</td>
            <td className="px-base py-sm text-right">165€</td>
            <td className="px-base py-sm text-right">125€</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-neutral-base font-bold">
            <td className="px-base py-sm">Total</td>
            <td className="px-base py-sm text-right">325€</td>
            <td className="px-base py-sm text-right">275€</td>
          </tr>
        </tfoot>
      </table>
    ),
  },
};
