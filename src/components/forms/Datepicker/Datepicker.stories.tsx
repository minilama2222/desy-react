import type { Meta, StoryObj } from '@storybook/react';
import { Datepicker } from './Datepicker';

const meta: Meta<typeof Datepicker> = {
  title: 'Forms/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

const datePattern = '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';

export const PorDefecto: Story = {
  args: {
    id: 'datepicker-default',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern,
  },
};

export const FechasMultiples: Story = {
  args: {
    id: 'datepicker-multiple-dates',
    name: 'test-name',
    value: '10-01-2024 20-01-2024',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Para incluir las fechas en el campo de texto usa el formato DD-MM-AAAA.',
  },
};

export const RangoDeFechas: Story = {
  args: {
    id: 'datepicker-range3',
    name: 'test-name',
    value: '10-01-2024/20-01-2024',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Para incluir el rango de fechas usa el formato DD-MM-AAAA/AAAA-MM-DD.',
  },
};

export const RangoDeFechas2MesesYSelectorDeAno: Story = {
  args: {
    id: 'datepicker-with-hint-text-and-year',
    name: 'test-name',
    value: '16-01-2024/04-02-2024',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Para incluir el rango de fechas usa el formato DD-MM-AAAA/AAAA-MM-DD.',
  },
};

export const Deshabilitado: Story = {
  args: {
    id: 'datepicker-disabled',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    disabled: true,
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern,
  },
};

export const ConMensajeDeError: Story = {
  args: {
    id: 'datepicker-with-error-message',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    errorMessageText: 'Esto es un mensaje de error',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern,
  },
};

export const Pequeno: Story = {
  args: {
    id: 'datepicker-small',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    classes: 'c-input--sm',
    dropdownClasses: 'c-dropdown--sm c-dropdown--transparent',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern,
  },
};

export const BotonPersonalizado: Story = {
  args: {
    id: 'datepicker-with-personalized-button',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    classes: 'flex-1',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern,
  },
};

export const BotonPersonalizadoPequeno: Story = {
  args: {
    id: 'datepicker-with-button-small',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    classes: 'flex-1 c-input--sm',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern,
  },
};
