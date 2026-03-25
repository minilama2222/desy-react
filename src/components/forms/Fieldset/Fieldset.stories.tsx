import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset } from './Fieldset';
import { Input } from '../Input/Input';

const meta: Meta<typeof Fieldset> = {
  title: 'Forms/Fieldset',
  component: Fieldset,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const PorDefecto: Story = {
  args: {
    legendData: {
      text: '¿Cuál es tu número de teléfono?',
      classes: 'mb-sm',
    },
    children: (
      <Input
        id="tel-id-1"
        name="tel-name-1"
        labelText="Número de teléfono"
      />
    ),
  },
};

export const ConError: Story = {
  args: {
    legendData: {
      text: '¿Cuál es tu número de teléfono?',
      classes: 'mb-sm',
    },
    errorId: 'error-id',
    children: (
      <Input
        id="tel-error-id-1"
        name="tel-error-name-1"
        labelText="Número de teléfono"
        errorMessageText="Mensaje de error aqui"
      />
    ),
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    legendData: {
      text: '¿Cuál es tu número de teléfono?',
      classes: 'mb-sm -ml-base px-base bg-white',
    },
    className: 'p-lg border border-neutral-base',
    children: (
      <Input
        id="tel-id-4"
        name="tel-name-4"
        labelText="Número de teléfono"
      />
    ),
  },
};
