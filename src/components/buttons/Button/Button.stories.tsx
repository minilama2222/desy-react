import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PorDefecto: Story = {
  args: {
    text: 'Por defecto',
  },
};

export const PorDefectoConEstadoActivo: Story = {
  args: {
    name: 'active',
    text: 'Activo',
    classes: 'ds-active',
  },
};

export const PorDefectoConEstadoHover: Story = {
  args: {
    name: 'hover',
    text: 'Hover',
    classes: 'ds-hover',
  },
};

export const PorDefectoConEstadoFocus: Story = {
  args: {
    name: 'focus',
    text: 'Focus',
    classes: 'ds-focus',
  },
};

export const PorDefectoDeshabilitado: Story = {
  args: {
    text: 'Deshabilitado',
    disabled: true,
  },
};

export const Primario: Story = {
  args: {
    text: 'Primario',
    classes: 'c-button--primary',
  },
};

export const PrimarioConEstadoActivo: Story = {
  args: {
    name: 'active',
    text: 'Activo',
    classes: 'c-button--primary ds-active',
  },
};

export const PrimarioConEstadoHover: Story = {
  args: {
    name: 'hover',
    text: 'Hover',
    classes: 'c-button--primary ds-hover',
  },
};

export const PrimarioConEstadoFocus: Story = {
  args: {
    name: 'focus',
    text: 'Focus',
    classes: 'c-button--primary ds-focus',
  },
};

export const PrimarioDeshabilitado: Story = {
  args: {
    text: 'Deshabilitado',
    disabled: true,
    classes: 'c-button--primary',
  },
};

export const Alerta: Story = {
  args: {
    text: 'Alerta',
    classes: 'c-button--alert',
  },
};

export const AlertaConEstadoActivo: Story = {
  args: {
    name: 'active',
    text: 'Activo',
    classes: 'c-button--alert ds-active',
  },
};

export const AlertaConEstadoHover: Story = {
  args: {
    name: 'hover',
    text: 'Hover',
    classes: 'c-button--alert ds-hover',
  },
};

export const AlertaConEstadoFocus: Story = {
  args: {
    name: 'focus',
    text: 'Focus',
    classes: 'c-button--alert ds-focus',
  },
};

export const AlertaDeshabilitado: Story = {
  args: {
    text: 'Deshabilitado',
    disabled: true,
    classes: 'c-button--alert',
  },
};

export const Transparente: Story = {
  args: {
    text: 'Transparente',
    classes: 'c-button--transparent',
  },
};

export const TransparenteConEstadoActivo: Story = {
  args: {
    name: 'active',
    text: 'Activo',
    classes: 'c-button--transparent ds-active',
  },
};

export const TransparenteConEstadoHover: Story = {
  args: {
    name: 'hover',
    text: 'Hover',
    classes: 'c-button--transparent ds-hover',
  },
};

export const TransparenteConEstadoFocus: Story = {
  args: {
    name: 'focus',
    text: 'Focus',
    classes: 'c-button--transparent ds-focus',
  },
};

export const TransparenteDeshabilitado: Story = {
  args: {
    text: 'Deshabilitado',
    disabled: true,
    classes: 'c-button--transparent',
  },
};

export const AnchuraCompleta: Story = {
  args: {
    text: 'Anchura completa',
    classes: 'w-full justify-center',
  },
};

export const GrandeYPrimario: Story = {
  args: {
    text: 'Grande y primario',
    classes: 'c-button--lg c-button--primary',
  },
};

export const Peque: Story = {
  args: {
    text: 'Peque',
    classes: 'c-button--sm',
  },
};

export const PequenTieneSeleccion: Story = {
  args: {
    text: 'Peque tiene selección',
    classes: 'c-button--sm c-button--has-selection',
  },
};

export const Enlace: Story = {
  args: {
    text: 'Botón enlace',
    href: '/',
  },
};

export const BotonEnlaceConTargetBlank: Story = {
  args: {
    html: 'Botón enlace con target ',
    href: 'http://www.google.com',
    target: '_blank',
  },
};

export const EnlaceDeshabilitado: Story = {
  args: {
    text: 'Botón enlace deshabilitado',
    href: '/',
    disabled: true,
  },
};

export const BotonConIconoALaDerecha: Story = {
  args: {
    html: 'Botón con icono',
  },
};

export const BotonConIconoALaIzquierda: Story = {
  args: {
    html: 'Botón con icono',
  },
};

export const BotonAtras: Story = {
  args: {
    html: 'Volver',
    href: '/',
    classes: 'c-button--transparent',
  },
};

export const BotonAdelante: Story = {
  args: {
    html: 'Ver más',
    href: '/',
    classes: 'c-button--transparent',
  },
};

export const BotonSoloConIcono: Story = {
  args: {
    html: '',
    classes: 'c-button--primary align-bottom',
  },
};

export const ButtonPequenSoloConIcono: Story = {
  args: {
    html: '',
    classes: 'c-button--primary c-button--sm align-bottom',
  },
};

export const Input: Story = {
  args: {
    element: 'input',
    name: 'send-form',
    text: 'Enviar',
  },
};

export const InputDeshabilitado: Story = {
  args: {
    element: 'input',
    text: 'Enviar',
    disabled: true,
  },
};

export const PrevenirDobleClick: Story = {
  args: {
    text: 'Enviar',
    preventDoubleClick: true,
  },
};
