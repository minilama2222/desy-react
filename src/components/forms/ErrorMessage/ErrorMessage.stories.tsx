import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Forms/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const PorDefecto: Story = {
  args: {
    text: 'Esto es un mensaje de error',
  },
};

export const ConHtml: Story = {
  args: {
    html: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 140 140\' width=\'1em\' height=\'1em\' class=\'w-4 h-4 mr-xs align-baseline text-alert-base inline-block\' role=\'img\' aria-label=\'Alerta\'><path d=\'M138.42 118.29l-55-110a15 15 0 00-26.84 0l-55 110A15 15 0 0015 140h110a15 15 0 0013.42-21.71zM62.5 50a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 70a10 10 0 1110-10 10 10 0 01-10 10z\' fill=\'currentColor\' /></svg>Esto es un mensaje de error con HTML',
  },
};
