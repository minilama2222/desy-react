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

export const Default: Story = {
  args: {
    id: 'tooltip-default',
    text: 'Este es un tooltip informativo.',
    icon: { type: 'help' },
    children: <span className="c-link underline cursor-help">Pase el ratón</span>,
  },
};

export const WithText: Story = {
  args: {
    id: 'tooltip-text',
    text: 'La solicitud ha sido procesada correctamente.',
    children: <span className="c-link underline cursor-help">Más información</span>,
  },
};

export const WithHtml: Story = {
  args: {
    id: 'tooltip-html',
    html: '<p><strong>Nota importante:</strong> El plazo de presentación finaliza el <em>15 de marzo</em>.</p>',
    children: <span className="c-link underline cursor-help">Ver aviso</span>,
  },
};

export const WithInfoIcon: Story = {
  args: {
    id: 'tooltip-info',
    text: 'Información de ayuda contextual.',
    icon: { type: 'info' },
    children: <span className="c-link underline cursor-help">Ayuda</span>,
  },
};

export const WithAlertIcon: Story = {
  args: {
    id: 'tooltip-alert',
    text: 'Atención: datos requeridos.',
    icon: { type: 'alert' },
    children: <span className="c-link underline cursor-help">Alerta</span>,
  },
};

export const ComplexWithContent: Story = {
  args: {
    id: 'tooltip-complex',
    complex: true,
    children: <span className="c-link underline cursor-help">Detalles</span>,
    content: (
      <div>
        <p className="font-semibold">Información detallada</p>
        <ul className="list-disc pl-4 mt-2">
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      </div>
    ),
  },
};

export const WithButton: Story = {
  args: {
    id: 'tooltip-button',
    text: '¿Está seguro de que desea continuar?',
    icon: { type: 'alert' },
    children: <button className="c-button c-button--primary">Confirmar</button>,
  },
};
