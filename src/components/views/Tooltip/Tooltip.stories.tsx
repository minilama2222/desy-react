import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Views/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tooltip component using FloatingUI for positioning. Shows on hover/focus.',
      },
    },
  },
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
    complex: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const PorDefectoSoloIcono: Story = {
  args: {
    id: 'example-default',
    icon: { type: 'help' },
    children: <span className="c-link underline cursor-help">Pase el ratón</span>,
  },
};

export const SoloTexto: Story = {
  args: {
    id: 'example-text',
    text: 'Esto es un tooltip',
    children: <span className="c-link underline cursor-help">Pase el ratón</span>,
  },
};

export const ConHtml: Story = {
  args: {
    id: 'example-html',
    html: '<p>contenido html del tooltip</p>',
    children: <span className="c-link underline cursor-help">Ver tooltip</span>,
  },
};

export const Pregunta: Story = {
  args: {
    id: 'example-question',
    text: 'Pregunta',
    icon: { type: 'help' },
    children: <span className="c-link underline cursor-help">Más información</span>,
  },
};

export const Info: Story = {
  args: {
    id: 'example-info',
    text: 'Información',
    icon: { type: 'info' },
    children: <span className="c-link underline cursor-help">Ayuda</span>,
  },
};

export const Alerta: Story = {
  args: {
    id: 'example-alert',
    text: 'Alerta',
    icon: { type: 'alert' },
    classesTooltip: 'text-alert-base',
    children: <span className="c-link underline cursor-help">Alerta</span>,
  },
};

export const IconoPersonalizado: Story = {
  args: {
    id: 'example-custom-icon',
    text: 'Icono personalizado',
    icon: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 text-neutral-dark" role="img" aria-label="Ayuda"><path d="M140 15a15 15 0 00-15-15H15A15 15 0 000 15v110a15 15 0 0015 15h110a15 15 0 0015-15zM70 117.51a10 10 0 1110-10 10 10 0 01-10 10zm9.17-39.08a2.5 2.5 0 00-1.67 2.36v1.71a7.5 7.5 0 01-15 0v-10A7.5 7.5 0 0170 65a12.5 12.5 0 10-12.5-12.5 7.5 7.5 0 01-15 0 27.5 27.5 0 1136.67 25.93z" fill="currentColor"/></svg>' },
    classesTooltip: 'text-neutral-dark',
    children: <span className="c-link underline cursor-help">Subvención para actividades</span>,
  },
};

export const Complejo: Story = {
  args: {
    id: 'complex-html',
    icon: { type: 'help' },
    complex: true,
    children: <span className="c-link underline cursor-help">El código CVV</span>,
  },
};
