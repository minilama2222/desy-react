import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta: Meta<typeof Status> = {
  title: 'Views/Status',
  component: Status,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Exito: Story = {
  args: {
    text: 'Completo',
    icon: { type: 'success' },
  },
};

export const Alerta: Story = {
  args: {
    text: 'Incompleto',
    icon: { type: 'alert' },
    className: 'text-alert-base',
  },
};

export const Cargando: Story = {
  args: {
    text: 'Subiendo (20%)',
    icon: { type: 'loading' },
  },
};

export const Error: Story = {
  args: {
    text: 'Error',
    icon: { type: 'error' },
    className: 'text-alert-base',
  },
};

export const IconoPersonalizado: Story = {
  args: {
    text: 'Atención',
    icon: {
      html: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140' width='1em' height='1em' class='w-4 h-4 text-primary-base' aria-hidden='true' focusable='false'><path d='M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm0 117.51a10 10 0 1110-10 10 10 0 01-10 10zm9.17-39.08a2.5 2.5 0 00-1.67 2.36v1.71a7.5 7.5 0 01-15 0v-10A7.5 7.5 0 0170 65a12.5 12.5 0 10-12.5-12.5 7.5 7.5 0 01-15 0 27.5 27.5 0 1136.67 25.93z' fill='currentColor'/></svg>",
    },
  },
};
