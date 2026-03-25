import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
  title: 'Buttons/Pill',
  component: Pill,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const PorDefecto: Story = {
  args: {
    text: 'Pill por defecto',
  },
};

export const TipoEnlace: Story = {
  args: {
    text: 'Tipo enlace',
    href: 'http://www.google.com',
  },
};

export const TipoEnlaceConTargetBlank: Story = {
  args: {
    text: 'Tipo enlace con target',
    href: 'http://www.google.com',
    target: '_blank',
  },
};

export const TipoBoton: Story = {
  args: {
    type: 'button',
    text: 'Tipo botón',
    classes: 'cursor-pointer',
  },
};

export const TipoEnlaceOBotonConEstadoHover: Story = {
  args: {
    type: 'button',
    text: 'Hover',
    classes: 'ds-hover',
  },
};

export const TipoEnlaceOBotonConEstadoFocus: Story = {
  args: {
    type: 'button',
    text: 'Focus',
    classes: 'ds-focus',
  },
};

export const Peque: Story = {
  args: {
    text: 'Peque pill',
    classes: 'text-sm',
  },
};

export const ConIconoALaDerecha: Story = {
  args: {
    type: 'button',
    html: 'Icono derecha pill <svg viewBox=\'0 0 140 140\' class=\'self-center ml-2\' role=\'img\' aria-label=\'Eliminar\' width=\'.75em \' height=\'.75em \'><path fill=\'currentColor\' d=\'M85.91 71.77a2.5 2.5 0 010-3.54l46.16-46.16a10 10 0 10-14.14-14.14L71.77 54.09a2.5 2.5 0 01-3.54 0L22.07 7.93A10 10 0 007.93 22.07l46.16 46.16a2.5 2.5 0 010 3.54L7.93 117.93a10 10 0 0014.14 14.14l46.16-46.16a2.5 2.5 0 013.54 0l46.16 46.16a10 10 0 0014.14-14.14z\'/></svg>',
    classes: 'cursor-pointer',
  },
};

export const ConIconoALaIzquierda: Story = {
  args: {
    type: 'button',
    html: '<svg viewBox=\'0 0 140 140\' class=\'self-center mr-2\' aria-hidden=\'true\' width=\'.75em \' height=\'.75em \'><path fill=\'currentColor\' d=\'M35 35a35 35 0 1070 0 35 35 0 10-70 0zM132.78 133.33a66.59 66.59 0 00-125.56 0 5 5 0 004.71 6.67h116.14a5 5 0 004.71-6.67z\' /></svg> Icono izquierda pill',
    classes: 'cursor-pointer',
  },
};

export const Primario: Story = {
  args: {
    html: '<svg viewBox=\'0 0 140 140\' class=\'self-center mr-2\' aria-hidden=\'true\' width=\'.75em \' height=\'.75em \'><path fill=\'currentColor\' d=\'M43.7 140a17.42 17.42 0 01-12.36-5.12L5.13 108.66a17.49 17.49 0 010-24.75l24.61-24.25a7.5 7.5 0 0110.52 10.68L15.69 94.56a2.5 2.5 0 000 3.49l26.21 26.22a2.51 2.51 0 003.54 0l24.22-24.53a7.5 7.5 0 1110.68 10.52l-24.21 24.57A17.53 17.53 0 0143.7 140zM99.66 80.26a7.49 7.49 0 01.08-10.6l24.57-24.22a2.5 2.5 0 000-3.49L98.06 15.73a2.51 2.51 0 00-3.54 0L70.34 40.26a7.5 7.5 0 01-10.68-10.52L83.87 5.17a17.52 17.52 0 0124.79 0l26.21 26.21a17.49 17.49 0 010 24.75l-24.61 24.21a7.49 7.49 0 01-10.6-.08z\'/><path fill=\'currentColor\' d=\'M55 92.5a7.5 7.5 0 01-5.3-12.8l30-30a7.5 7.5 0 1110.6 10.6l-30 30a7.44 7.44 0 01-5.3 2.2z\'/></svg> Primario',
    classes: 'c-pill--primary',
  },
};

export const Aviso: Story = {
  args: {
    html: '<svg viewBox=\'0 0 140 140\' class=\'self-center mr-2\' aria-hidden=\'true\' width=\'.75em\' height=\'.75em \'><path fill=\'currentColor\' d=\'M138.42 118.29l-55-110a15 15 0 00-26.84 0l-55 110A15 15 0 0015 140h110a15 15 0 0013.42-21.71zM62.5 50a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 70a10 10 0 1110-10 10 10 0 01-10 10z\'/></svg> Aviso',
    classes: 'c-pill--warning',
  },
};

export const Exito: Story = {
  args: {
    html: '<svg viewBox=\'0 0 140 140\' class=\'self-center mr-2\' aria-hidden=\'true\' width=\'.75em \' height=\'.75em \'><path fill=\'currentColor\' d=\'M39.94 125a19.88 19.88 0 01-15.53-7.81L2.48 92.26a10 10 0 0115-13.2l20.55 23.39a2.5 2.5 0 003.68.08l81-84.42a10.002 10.002 0 1114.5 13.78l-82.02 86.33A19.41 19.41 0 0139.94 125z\'/></svg> Éxito',
    classes: 'c-pill--success',
  },
};

export const Alerta: Story = {
  args: {
    html: '<svg viewBox=\'0 0 140 140\' class=\'self-center mr-2\' aria-hidden=\'true\' width=\'.75em \' height=\'.75em \'><path fill=\'currentColor\' d=\'M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm-7.5 35a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 75a10 10 0 1110-10 10 10 0 01-10 10z\'/></svg> Alerta',
    classes: 'c-pill--alert',
  },
};
