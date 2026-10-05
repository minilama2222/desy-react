import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Tables/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tabla responsive con etiquetas móviles (`data-label` + pseudo-elemento `before:content-[attr(data-label)]`). Réplica del patrón `c-table` de desy-html/examples-table.html.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const PorDefecto: Story = {
  args: {
    className: 'c-table',
    children: (
      <table className="c-table">
        <caption className="sr-only mb-base font-bold text-left text-lg">Caption de la tabla</caption>
        <thead className="sr-only lg:not-sr-only">
          <tr className="border-t border-b border-neutral-base">
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark">Mes de pago</th>
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark lg:text-right">Primer pago</th>
            <th scope="col" className="align-top px-base py-sm text-left font-normal text-sm text-neutral-dark lg:text-right">Segundo pago</th>
          </tr>
        </thead>
        <tbody>
          <tr className="block lg:table-row -mb-px lg:mb-0 text-left border-t border-b border-neutral-base">
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm" data-label="Mes de pago">Enero</td>
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm lg:text-right" data-label="Primer pago">85€</td>
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm lg:text-right" data-label="Segundo pago">95€</td>
          </tr>
          <tr className="block lg:table-row -mb-px lg:mb-0 text-left border-t border-b border-neutral-base">
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm" data-label="Mes de pago">Febrero</td>
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm lg:text-right" data-label="Primer pago">75€</td>
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm lg:text-right" data-label="Segundo pago">55€</td>
          </tr>
          <tr className="block lg:table-row -mb-px lg:mb-0 text-left border-t border-b border-neutral-base">
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm" data-label="Mes de pago">Marzo</td>
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm lg:text-right" data-label="Primer pago">165€</td>
            <td className="block lg:table-cell text-left before:block before:text-neutral-dark before:lg:hidden before:content-[attr(data-label)] before:text-sm px-base py-sm lg:text-right" data-label="Segundo pago">125€</td>
          </tr>
        </tbody>
      </table>
    ),
  },
};
