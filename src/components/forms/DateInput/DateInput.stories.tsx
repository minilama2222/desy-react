import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'Forms/DateInput',
  component: DateInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const PorDefecto: Story = {
  args: {
    id: 'fechnacim',
    namePrefix: 'fechnacim',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    items: [
      { name: 'day', classes: 'w-14', maxlength: 2, labelText: 'Día' },
      { name: 'month', classes: 'w-14', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'w-20', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const ConErroresSolo: Story = {
  args: {
    id: 'fechnacim-errors-a',
    legendText: 'Fecha de nacimiento',
    errorMessageText: 'Aqui va un mensaje de error',
    items: [
      { name: 'day', classes: 'w-14 border-alert-base', maxlength: 2, labelText: 'Día' },
      { name: 'month', classes: 'w-14 border-alert-base', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'w-20 border-alert-base', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const ConErroresYPista: Story = {
  args: {
    id: 'fechnacim-errors-b',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    errorMessageText: 'Aqui va un mensaje de error',
    items: [
      { name: 'day', classes: 'w-14 border-alert-base', maxlength: 2, labelText: 'Día' },
      { name: 'month', classes: 'w-14 border-alert-base', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'w-20 border-alert-base', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const ConErrorEnElInputDelDia: Story = {
  args: {
    id: 'fechnacim-day-error',
    namePrefix: 'fechnacim-day-error',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    errorMessageText: 'Aqui va un mensaje de error',
    items: [
      { name: 'day', classes: 'w-14 border-alert-base', maxlength: 2, labelText: 'Día' },
      { name: 'month', classes: 'w-14', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'w-20', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const ConErrorEnElInputDelMes: Story = {
  args: {
    id: 'fechnacim-month-error',
    namePrefix: 'fechnacim-month-error',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    errorMessageText: 'Aqui va un mensaje de error',
    items: [
      { name: 'day', classes: 'w-14', maxlength: 2, labelText: 'Día' },
      { name: 'month', classes: 'w-14 border-alert-base', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'w-20', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const ConErrorEnElInputDelAno: Story = {
  args: {
    id: 'fechnacim-year-error',
    namePrefix: 'fechnacim-year-error',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    errorMessageText: 'Aqui va un mensaje de error',
    items: [
      { name: 'day', classes: 'w-14', maxlength: 2, labelText: 'Día' },
      { name: 'month', classes: 'w-14', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'w-20 border-alert-base', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const ConItemsPorDefecto: Story = {
  args: {
    id: 'fechnacim-default-items',
    namePrefix: 'fechnacim-default-items',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
  },
};

export const InputDeTiempo: Story = {
  args: {
    id: 'time',
    namePrefix: 'time',
    legendText: 'Hora de publicación',
    hintText: 'Por ejemplo, 14:30',
    divider: { text: ':', classes: 'flex items-end mb-sm' },
    items: [
      { name: 'hour', classes: 'w-14', maxlength: 2, labelText: 'Hora' },
      { name: 'minute', classes: 'w-14', maxlength: 2, labelText: 'Minutos' },
    ],
  },
};

export const ConClasesDeFormGroupOpcionales: Story = {
  args: {
    id: 'fechnacim-formgroup-classes',
    namePrefix: 'fechnacim-formgroup-classes',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    formGroupClasses: 'p-base bg-primary-light',
  },
};

export const ConValoresDeAutocompletado: Story = {
  args: {
    id: 'fechnacim-with-autocomplete-attribute',
    namePrefix: 'fechnacim-with-autocomplete',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    items: [
      { name: 'day', classes: 'w-14', maxlength: 2, labelText: 'Día', autocomplete: 'bday-day' },
      { name: 'month', classes: 'w-14', maxlength: 2, labelText: 'Mes', autocomplete: 'bday-month' },
      { name: 'year', classes: 'w-20', maxlength: 4, labelText: 'Año', autocomplete: 'bday-year' },
    ],
  },
};

export const ConAtributosDeInput: Story = {
  args: {
    id: 'fechnacim-with-input-attributes',
    namePrefix: 'fechnacim-with-input-attributes',
    legendText: 'Fecha de nacimiento',
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    items: [
      { name: 'day', classes: 'w-14', maxlength: 2, labelText: 'Día' },
      { name: 'month', classes: 'w-14', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'w-20', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const Pequeno: Story = {
  args: {
    id: 'fechnacim-small',
    namePrefix: 'fechnacim-small',
    legendText: 'Fecha de nacimiento',
    headingLevel: 2,
    hintText: 'Por ejemplo, día: 31 mes: 3 año: 1980',
    items: [
      { name: 'day', classes: 'c-input--sm w-10', maxlength: 2, labelText: 'Dia' },
      { name: 'month', classes: 'c-input--sm w-10', maxlength: 2, labelText: 'Mes' },
      { name: 'year', classes: 'c-input--sm w-16', maxlength: 4, labelText: 'Año' },
    ],
  },
};

export const InputDeTiempoPequeno: Story = {
  args: {
    id: 'fechnacim-small-time',
    namePrefix: 'fechnacim-small-time',
    legendText: 'Hora de publicación',
    headingLevel: 2,
    hintText: 'Por ejemplo, 14:30',
    divider: { text: ':', classes: 'flex items-end mb-xs' },
    items: [
      { name: 'hour', classes: 'c-input--sm w-10', maxlength: 2, labelText: 'Hora' },
      { name: 'minute', classes: 'c-input--sm w-10', maxlength: 2, labelText: 'Minutos' },
    ],
  },
};
