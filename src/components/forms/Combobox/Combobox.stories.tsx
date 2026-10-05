import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';
import { ComboboxItem } from './ComboboxItem';

const meta: Meta<typeof Combobox> = {
  title: 'Forms/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    isMultiselectable: { control: 'boolean' },
    autocompleteMode: {
      control: 'select',
      options: ['list', 'both'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const PorDefecto: Story = {
  args: {
    id: 'combobox-1',
    labelText: 'Esto es un label',
    placeholder: 'Busca o escribe…',
    items: [
      { value: 'España', text: 'España' },
      { value: 'Francia', text: 'Francia' },
      { value: 'Italia', text: 'Italia' },
      { value: 'Portugal', text: 'Portugal' },
      { value: 'Alemania', text: 'Alemania' },
    ],
  },
};

export const SoloLista: Story = {
  args: {
    id: 'combobox-list',
    autocompleteMode: 'list',
    labelText: 'Esto es un label',
    placeholder: 'Solo filtra la lista…',
    items: [
      { value: 'España', text: 'España' },
      { value: 'Francia', text: 'Francia' },
      { value: 'Italia', text: 'Italia' },
      { value: 'Portugal', text: 'Portugal' },
    ],
  },
};

export const ComoNinos: Story = {
  args: {
    id: 'combobox-children',
    labelText: 'Esto es un label (subcomponente ComboboxItem)',
  },
  render: (args) => (
    <Combobox {...args}>
      <ComboboxItem value="Madrid" text="Madrid" />
      <ComboboxItem value="Barcelona" text="Barcelona" />
      <ComboboxItem value="Valencia" text="Valencia" />
      <ComboboxItem value="Sevilla" text="Sevilla" />
    </Combobox>
  ),
};

export const Multiseleccion: Story = {
  args: {
    id: 'combobox-multi',
    isMultiselectable: true,
    labelText: 'Esto es un label (multiselección)',
    items: [
      { value: 'Lunes', text: 'Lunes' },
      { value: 'Martes', text: 'Martes' },
      { value: 'Miércoles', text: 'Miércoles' },
      { value: 'Jueves', text: 'Jueves' },
      { value: 'Viernes', text: 'Viernes' },
    ],
  },
};

export const Deshabilitado: Story = {
  args: {
    id: 'combobox-disabled',
    disabled: true,
    labelText: 'Esto es un label',
    value: 'España',
    items: [
      { value: 'España', text: 'España' },
      { value: 'Francia', text: 'Francia' },
    ],
  },
};

export const ConPistaYMensajeDeError: Story = {
  args: {
    id: 'combobox-error',
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    errorMessageText: 'Esto es un mensaje de error',
    items: [
      { value: 'España', text: 'España' },
      { value: 'Francia', text: 'Francia' },
      { value: 'Italia', text: 'Italia' },
    ],
  },
};

export const SinResultados: Story = {
  args: {
    id: 'combobox-noresults',
    labelText: 'Esto es un label',
    noResultsText: 'No se encontraron resultados',
    items: [
      { value: 'España', text: 'España' },
      { value: 'Francia', text: 'Francia' },
    ],
  },
};
