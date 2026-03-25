import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const PorDefecto: Story = {
  args: {
    id: 'select-1',
    name: 'select-1',
    labelText: 'Esto es un label',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2', selected: true },
      { value: 3, text: 'Opción 3', disabled: true },
    ],
  },
};

export const Deshabilitado: Story = {
  args: {
    id: 'select-2',
    name: 'select-2',
    disabled: true,
    labelText: 'Esto es un label',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2', selected: true },
      { value: 3, text: 'Opción 3', disabled: true },
    ],
  },
};

export const Placeholder: Story = {
  args: {
    id: 'select-placeholder',
    name: 'select-placeholder',
    labelText: 'Esto es un label',
    items: [
      { value: '', text: 'Choose an option', disabled: true, selected: true },
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2' },
      { value: 3, text: 'Opción 3' },
    ],
  },
};

export const ConOptgroup: Story = {
  args: {
    id: 'select-optgroup',
    name: 'select-optgroup',
    labelText: 'Esto es un label',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2' },
      {
        label: 'Optgroup label A',
        items: [
          { value: 1, text: 'Optgroup subopción A1' },
          { value: 2, text: 'Optgroup subopción A2', selected: true },
          { value: 3, text: 'Optgroup subopción A3' },
        ],
      },
      { value: 3, text: 'Opción 3' },
      { value: 4, text: 'Opción 4' },
      {
        label: 'Optgroup label B',
        items: [
          { value: 1, text: 'Optgroup subopción B1' },
          { value: 2, text: 'Optgroup subopción B2' },
          { value: 3, text: 'Optgroup subopción B3' },
        ],
      },
      { value: 5, text: 'Opción 5' },
      { value: 6, text: 'Opción 6' },
    ],
  },
};

export const ConPistaYMensajeDeError: Story = {
  args: {
    id: 'select-3',
    name: 'select-3',
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    errorMessageText: 'Esto es un mensaje de error',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2' },
      { value: 3, text: 'Opción 3' },
    ],
  },
};

export const ConAnchuraCompleta: Story = {
  args: {
    id: 'select-5',
    name: 'select-5',
    classes: 'w-full',
    labelText: 'Esto es un label',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2', selected: true },
      { value: 3, text: 'Opción 3', disabled: true },
    ],
  },
};

export const ConClasesDeFormGroupOpcionales: Story = {
  args: {
    id: 'select-6',
    name: 'select-6',
    classes: 'lg:flex-1',
    labelText: 'Label en línea:',
    labelClasses: 'lg:py-sm lg:mt-sm',
    formGroupClasses: 'lg:flex lg:flex-wrap lg:items-center lg:gap-x-base',
    errorMessageText: 'Esto es un mensaje de error',
    errorMessageClasses: 'order-1 w-full pt-sm',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2', selected: true },
      { value: 3, text: 'Opción 3', disabled: true },
    ],
  },
};

export const Transparente: Story = {
  args: {
    id: 'select-7',
    name: 'select-7',
    classes: 'c-select--transparent',
    labelText: 'Esto es un label',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2', selected: true },
      { value: 3, text: 'Opción 3', disabled: true },
    ],
  },
};

export const Peque: Story = {
  args: {
    id: 'select-8',
    name: 'select-8',
    classes: 'c-select--sm',
    labelText: 'Esto es un label',
    items: [
      { value: 1, text: 'Opción 1' },
      { value: 2, text: 'Opción 2', selected: true },
      { value: 3, text: 'Opción 3', disabled: true },
    ],
  },
};
