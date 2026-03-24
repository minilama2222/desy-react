import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta: Meta<typeof Status> = {
  title: 'Views/Status',
  component: Status,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Status indicator with icon and label supporting different status types.',
      },
    },
  },
  argTypes: {
    text: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'alert', 'error', 'loading', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

export const Success: Story = {
  args: {
    text: 'Completado con éxito',
    type: 'success',
  },
};

export const Alert: Story = {
  args: {
    text: 'Atención: datos incompletos',
    type: 'alert',
  },
};

export const Error: Story = {
  args: {
    text: 'Ha ocurrido un error',
    type: 'error',
  },
};

export const Loading: Story = {
  args: {
    text: 'Cargando información',
    type: 'loading',
  },
};

export const Info: Story = {
  args: {
    text: 'Información importante',
    type: 'info',
  },
};

export const WithCustomIcon: Story = {
  args: {
    text: 'Estado personalizado',
    icon: {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 text-purple-500" aria-hidden="true"><path fill="currentColor" d="M70 0l17.32 35 35 5-25 25 5 35L70 85 52.68 100l5-35L17.68 40l35-5z"/></svg>',
    },
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Status text="Completado" type="success" />
      <Status text="Atención" type="alert" />
      <Status text="Error" type="error" />
      <Status text="Cargando" type="loading" />
      <Status text="Información" type="info" />
    </div>
  ),
};
