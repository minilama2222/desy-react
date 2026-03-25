import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Buttons/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dropdown button that opens a menu/popover on click using FloatingUI.',
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
type Story = StoryObj<typeof Dropdown>;

export const PorDefecto: Story = {
  args: {
    text: 'Por defecto',
  },
};

export const ConEstadoActivo: Story = {
  args: {
    text: 'Activo',
    classes: 'ds-active',
  },
};

export const ConEstadoHover: Story = {
  args: {
    text: 'Hover',
    classes: 'ds-hover',
  },
};

export const ConEstadoFocus: Story = {
  args: {
    text: 'Focus',
    classes: 'ds-focus',
  },
};

export const Primario: Story = {
  args: {
    text: 'Primario',
    classes: 'c-dropdown--primary',
  },
};

export const Transparente: Story = {
  args: {
    text: 'Transparente',
    classes: 'c-dropdown--transparent',
  },
};

export const ConEstilosDeCabecera: Story = {
  args: {
    text: 'Header',
    classes: 'c-dropdown--header',
  },
};

export const Grande: Story = {
  args: {
    text: 'Grande',
    classes: 'c-dropdown--lg',
  },
};

export const Pequeno: Story = {
  args: {
    text: 'Botón pequeño con texto muy largo',
    classes: 'c-dropdown--sm',
  },
};

export const PequenoTieneSeleccion: Story = {
  args: {
    text: 'Botón pequeño con texto muy largo',
    classes: 'c-dropdown--has-selection c-dropdown--sm',
  },
};

export const Deshabilitado: Story = {
  args: {
    text: 'Deshabilitado',
    disabled: true,
  },
};

export const ConClasesCssAplicadasAlContainer: Story = {
  args: {
    text: 'Clases en container',
    classesContainer: 'inline-block p-base bg-primary-light',
  },
};

export const ClasesAplicadasAlContenidoDelTooltip: Story = {
  args: {
    text: 'Clases al contenido del tooltip',
    classesTooltip: 'max-h-64 overflow-y-auto',
  },
};

export const ClasesAplicadasAVariosElementos: Story = {
  args: {
    text: 'Dropdown anchura completa',
    classes: 'w-full justify-between',
    classesTooltip: 'w-max max-h-40 overflow-y-auto',
  },
};

export const ConRoleDialog: Story = {
  args: {
    text: 'Marta Pérez',
    contentAriaLabel: 'Información adicional',
    contentAriaModal: 'false',
    contentRole: 'dialog',
  },
};
