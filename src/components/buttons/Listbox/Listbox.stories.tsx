import type { Meta, StoryObj } from '@storybook/react';
import { Listbox } from './Listbox';

const meta: Meta<typeof Listbox> = {
  title: 'Buttons/Listbox',
  component: Listbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Listbox dropdown with keyboard navigation. Supports single and multi-select modes.',
      },
    },
  },
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Listbox>;

const defaultItems = [
  { value: 'opt1', text: 'Opción 1', href: '#' },
  { value: 'opt2', text: 'Opción 2', href: '#' },
  { value: 'opt3', text: 'Opción 3', href: '#' },
  { value: 'opt4', text: 'Opción 4', href: '#' },
  { value: 'opt5', text: 'Opción 5', href: '#' },
];

export const PorDefecto: Story = {
  args: {
    id: 'default',
    text: 'Por defecto',
    label: { text: 'Esto es un label' },
    items: defaultItems,
  },
};

export const ConEstadoActivo: Story = {
  args: {
    id: 'with-active-state',
    text: 'Activo',
    label: { text: 'Esto es un label' },
    classes: 'ds-active',
    items: defaultItems,
  },
};

export const ConEstadoHover: Story = {
  args: {
    id: 'with-hover-state',
    text: 'Hover',
    label: { text: 'Esto es un label' },
    classes: 'ds-hover',
    items: defaultItems,
  },
};

export const ConEstadoFocus: Story = {
  args: {
    id: 'with-focus-state',
    text: 'Focus',
    label: { text: 'Esto es un label' },
    classes: 'ds-focus',
    items: defaultItems,
  },
};

export const Primario: Story = {
  args: {
    id: 'primary',
    text: 'Primario',
    label: { text: 'Esto es un label' },
    classes: 'c-listbox--primary',
    items: defaultItems,
  },
};

export const Transparente: Story = {
  args: {
    id: 'transparent',
    text: 'Transparente',
    label: { text: 'Esto es un label' },
    classes: 'c-listbox--transparent',
    items: defaultItems,
  },
};

export const ConEstilosDeCabecera: Story = {
  args: {
    id: 'header',
    text: 'Header',
    label: { text: 'Esto es un label', classes: 'sr-only' },
    classes: 'c-listbox--header',
    items: defaultItems,
  },
};

export const Pequeno: Story = {
  args: {
    id: 'small',
    text: 'Peque con texto muy largo',
    label: { text: 'Esto es un label', classes: 'sr-only' },
    classes: 'c-listbox--sm',
    items: defaultItems,
  },
};

export const Grande: Story = {
  args: {
    id: 'large',
    text: 'Grande',
    label: { text: 'Esto es un label', classes: 'sr-only' },
    classes: 'c-listbox--lg',
    items: defaultItems,
  },
};

export const PequenoTieneSeleccion: Story = {
  args: {
    id: 'small-has-selection',
    text: 'Peque con texto muy largo',
    label: { text: 'Esto es un label', classes: 'sr-only' },
    classes: 'c-listbox--has-selection c-listbox--sm',
    items: defaultItems,
  },
};

export const Deshabilitado: Story = {
  args: {
    id: 'disabled',
    text: 'Deshabilitado',
    label: { text: 'Esto es un label' },
    disabled: true,
    items: defaultItems,
  },
};

export const ConClasesCssAplicadasAlContainer: Story = {
  args: {
    id: 'classes-applied-to-container-element',
    text: 'Clases en container',
    label: { text: 'Esto es un label' },
    classesContainer: 'inline-block p-base bg-primary-light',
    items: defaultItems,
  },
};

export const ClasesAplicadasAlContenidoDelTooltip: Story = {
  args: {
    id: 'classes-applied-to-tooltip-content',
    text: 'Clases al contenido del tooltip',
    label: { text: 'Esto es un label' },
    classesTooltip: 'max-h-24 overflow-y-auto',
    items: defaultItems,
  },
};

export const ClasesAplicadasAVariosElementos: Story = {
  args: {
    id: 'classes-applied-to-various-elements',
    text: 'Listbox de anchura completa',
    label: { text: 'Esto es un label', classes: 'font-semibold text-sm' },
    classes: 'w-full justify-between',
    classesTooltip: 'w-max max-h-64 overflow-y-auto',
    items: defaultItems,
  },
};

export const ConItemActivo: Story = {
  args: {
    id: 'with-active-item',
    text: 'con item activo',
    label: { text: 'Esto es un label' },
    items: [
      { value: 'opt1', text: 'Opción 1', href: '#' },
      { value: 'opt2', text: 'Opción 2', href: '#' },
      { value: 'opt3', text: 'Opción 3', href: '#' },
      { value: 'opt4', text: 'Opción 4 activa', href: '#', active: true },
      { value: 'opt5', text: 'Opción 5', href: '#' },
    ],
  },
};

export const PermiteSeleccionesMultiples: Story = {
  args: {
    id: 'is-multiselectable',
    isMultiselectable: true,
    text: 'Selecciones múltiples',
    label: { text: 'Esto es un label' },
    items: defaultItems,
  },
};

export const CambiaElTextoDelBoton: Story = {
  args: {
    id: 'does-change-button-text',
    text: 'Opción 1',
    label: { text: 'Esto es un label' },
    doesChangeButtonText: true,
    items: [
      { value: 'opt1', text: 'Opción 1', href: '#' },
      { value: 'opt2', text: 'Opción 2', href: '#' },
      { value: 'opt3', text: 'Opción 3', href: '#' },
      { value: 'opt4', text: 'Opción 4', href: '#' },
      { value: 'opt5', text: 'Opción 5', href: '#' },
    ],
  },
};

export const ConIconosEnItems: Story = {
  args: {
    id: 'icons',
    text: 'Iconos en items',
    label: { text: 'Esto es un label' },
    items: [
      { value: 'opt1', text: 'Opción 1', href: '#' },
      { value: 'opt2', text: 'Opción 2', href: '#' },
      { value: 'opt3', text: 'Opción 3', href: '#' },
    ],
  },
};

export const ConParrafosEnItems: Story = {
  args: {
    id: 'paragraphs',
    text: 'Párrafos en items',
    label: { text: 'Esto es un label' },
    classesTooltip: 'w-xs!',
    items: [
      { value: 'opt1', text: 'Actuaciones previas/preparatorias', href: '#' },
      { value: 'opt2', text: 'Inicio de la tramitación', href: '#' },
      { value: 'opt3', text: 'Otros trámites en fase de inicio', href: '#' },
      { value: 'opt4', text: 'Participación pública', href: '#' },
      { value: 'opt5', text: 'Informes sectoriales', href: '#' },
      { value: 'opt6', text: 'Valoración/Prueba/Licitación', href: '#' },
    ],
  },
};

export const MenuAbiertoOCerradoConJavascript: Story = {
  args: {
    id: 'with-active-unactive-item',
    text: 'con item activo',
    label: { text: 'Esto es un label' },
    items: [
      { value: 'opt1', text: 'Opción 1', href: '#' },
      { value: 'opt2', text: 'Opción 2', href: '#' },
      { value: 'opt3', text: 'Opción 3', href: '#' },
      { value: 'opt4', text: 'Opción 4', href: '#' },
      { value: 'opt5', text: 'Opción 5', href: '#', active: true },
    ],
  },
};
