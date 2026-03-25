import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList } from './DescriptionList';

const meta: Meta<typeof DescriptionList> = {
  title: 'Views/DescriptionList',
  component: DescriptionList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

export const PorDefecto: Story = {
  args: {
    items: [
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
      },
    ],
  },
};

export const Grande: Story = {
  args: {
    items: [
      {
        term: { text: 'término' },
        definition: { text: 'definición', classes: 'text-lg' },
      },
    ],
  },
};

export const ExtraGrande: Story = {
  args: {
    items: [
      {
        term: { text: 'término' },
        definition: { text: 'definición', classes: 'font-bold text-xl' },
      },
    ],
  },
};

export const Vertical: Story = {
  args: {
    items: [
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'mb-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'mb-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'mb-base',
      },
    ],
  },
};

export const Horizontal: Story = {
  args: {
    className: 'flex w-full',
    items: [
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'flex-1 pr-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'flex-1 pr-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'flex-1 pr-base',
      },
    ],
  },
};

export const HorizontalCon2Filas: Story = {
  args: {
    className: 'flex flex-wrap w-full',
    items: [
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'w-1/3 mb-base pr-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'w-1/3 mb-base pr-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'w-1/3 mb-base pr-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'w-1/3 mb-base pr-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'w-1/3 mb-base pr-base',
      },
      {
        term: { text: 'término' },
        definition: { text: 'definición' },
        classes: 'w-1/3 mb-base pr-base',
      },
    ],
  },
};

export const Agrupado: Story = {
  args: {
    className: 'w-full py-sm border-t border-b border-neutral-base',
    items: [
      {
        term: { text: 'Código de procedimiento', classes: 'lg:w-1/3' },
        definition: { text: 'G00345-BX', classes: 'lg:flex-1 font-semibold' },
        classes: 'lg:flex py-sm',
      },
      {
        term: { text: 'Nombre del procedimiento', classes: 'lg:w-1/3' },
        definition: { text: 'Resolución definitiva', classes: 'lg:flex-1 font-semibold' },
        classes: 'lg:flex py-sm',
      },
      {
        term: { text: 'CSV', classes: 'lg:w-1/3' },
        definition: { text: 'CSVK45WT8V5T110CPPC', classes: 'lg:flex-1 font-semibold' },
        classes: 'lg:flex py-sm',
      },
      {
        term: { text: 'Fecha de captura', classes: 'lg:w-1/3' },
        definition: { text: '13 de Diciembre de 2021. A las 11:48:08', classes: 'lg:flex-1 font-semibold' },
        classes: 'lg:flex py-sm',
      },
      {
        term: { text: 'Categoría', classes: 'lg:w-1/3' },
        definition: { text: 'Documento simple', classes: 'lg:flex-1 font-semibold' },
        classes: 'lg:flex py-sm',
      },
    ],
  },
};

export const ConAparienciaDeTabla: Story = {
  args: {
    className: 'w-full',
    items: [
      {
        term: { text: 'Nombre y apellidos', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: 'Ana Pérez Escribano', classes: 'lg:w-2/3 px-base py-sm' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Nº identificación', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: 'NIF: 00000000T', classes: 'lg:w-2/3 px-base py-sm' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Importe', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { html: '<strong>45,5€</strong>', classes: 'lg:w-2/3 px-base py-sm' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Impuesto', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: 'Impuesto sobre Sucesiones y donaciones', classes: 'lg:w-2/3 px-base py-sm' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Concepto', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: 'Modelo 606 - Liquidaciones Transmisiones Patrimoniales Onerosas.', classes: 'lg:w-2/3 px-base py-sm' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Número de justificante', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: '6064589854125', classes: 'lg:w-2/3 px-base py-sm' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
    ],
  },
};

export const ConAparienciaDeTablaYNumeros: Story = {
  args: {
    className: 'w-full',
    items: [
      {
        term: { text: 'Activo no corriente', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: '3045,45€', classes: 'lg:w-2/3 px-base py-sm lg:text-right' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Activo corriente', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: '14,32€', classes: 'lg:w-2/3 px-base py-sm lg:text-right' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Total activo', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: '279,67€', classes: 'lg:w-2/3 px-base py-sm lg:text-right' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Capital', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: '100.704,23€', classes: 'lg:w-2/3 px-base py-sm lg:text-right' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Patrimonio neto', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { text: '2.345,74€', classes: 'lg:w-2/3 px-base py-sm lg:text-right' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
      {
        term: { text: 'Consolidación de cuentas', classes: 'lg:w-1/3 px-base pt-sm lg:pb-sm text-sm lg:text-base text-neutral-dark' },
        definition: { html: '<strong>Si</strong>', classes: 'lg:w-2/3 px-base py-sm lg:text-right' },
        classes: 'lg:flex -mb-px border-t border-b border-neutral-base',
      },
    ],
  },
};

export const ConHTMLYClases: Story = {
  args: {
    className: 'inline-block p-base border border-neutral-base rounded-sm',
    items: [
      {
        term: { html: "Expedientes abiertos <span aria-hidden='true'>&darr;</span>", classes: 'mb-sm' },
        definition: { html: "<span class='font-bold text-4xl'>45</span> <svg role='img' aria-label='expedientes'  class='inline-block align-baseline ml-sm' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140' width='1.6rem' height='1.6rem'><path d='M140 20a20 20 0 00-20-20H20A20 20 0 000 20v100a20 20 0 0020 20h70a10 10 0 007.07-2.93l40-40A10 10 0 00140 90zM20 22.5a2.5 2.5 0 012.5-2.5h95a2.5 2.5 0 012.5 2.5v55a2.5 2.5 0 01-2.5 2.5H95a15 15 0 00-15 15v22.5a2.5 2.5 0 01-2.5 2.5h-55a2.5 2.5 0 01-2.5-2.5z'/></svg><a href='/' class='c-link block mt-sm font-normal text-sm'>Ver todos</a>" },
      },
    ],
  },
};

export const ConAtributos: Story = {
  args: {
    items: [
      {
        term: { text: 'término', id: 'term' },
        definition: { text: 'definición', id: 'definition' },
        id: 'item',
      },
    ],
    id: 'description',
  },
};
