import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PorDefecto: Story = {
  args: {
    idPrefix: 'pagination',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10,
  },
};

export const EstiloSelect: Story = {
  args: {
    idPrefix: 'pagination-has-select',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10,
    hasSelect: true,
    previousText: 'Anterior',
    nextText: 'Siguiente',
  },
};

export const ConPaginaPreviaDeshabilitada: Story = {
  args: {
    idPrefix: 'pagination-with-previous-page-disabled',
    totalItems: 64,
    currentPage: 1,
    itemsPerPage: 10,
    hasSelect: true,
    hasPrevious: false,
    previousText: 'Anterior',
    nextText: 'Siguiente',
  },
};

export const SinPaginaPrevia: Story = {
  args: {
    idPrefix: 'pagination-without-previous-page',
    totalItems: 64,
    currentPage: 1,
    itemsPerPage: 10,
    hasSelect: true,
    showPrevious: false,
    previousText: 'Anterior',
    nextText: 'Siguiente',
  },
};

export const ConPaginaPrimeraYUltima: Story = {
  args: {
    idPrefix: 'pagination-without-previous-page-disabled',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10,
    hasSelect: true,
    previousText: 'Anterior',
    nextText: 'Siguiente',
    showFirst: true,
    showLast: true,
    firstText: 'Primera',
    lastText: 'Última',
  },
};

export const ConPaginaPrimeraDeshabilitadaYUltima: Story = {
  args: {
    idPrefix: 'pagination-has-select-2',
    totalItems: 64,
    currentPage: 1,
    itemsPerPage: 10,
    hasSelect: true,
    hasPrevious: false,
    previousText: 'Anterior',
    nextText: 'Siguiente',
    showFirst: true,
    showLast: true,
    hasFirst: false,
    firstText: 'Primera',
    lastText: 'Última',
  },
};

export const ConItemsPerPageSelector: Story = {
  args: {
    idPrefix: 'with-items-per-page-selector',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10,
    hasSelect: true,
    hasSelectItemsPerPage: true,
    hasPrevious: false,
    hasNext: true,
    previousText: 'Anterior',
    nextText: 'Siguiente',
  },
};
