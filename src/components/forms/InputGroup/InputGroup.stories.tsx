import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup } from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Forms/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'InputGroup combines multiple inputs into a fieldset with shared legend and hints.',
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const PorDefecto: Story = {
  args: {
    id: 'contact-form-example',
    legendText: 'Elige tu forma de contacto preferida',
    items: [
      {
        id: 'radio-email',
        name: 'contact',
        labelText: 'Correo electrónico',
        type: 'email',
        value: 'email',
      },
      {
        id: 'radio-phone',
        name: 'contact',
        labelText: 'Teléfono',
        type: 'tel',
        value: 'phone',
      },
    ],
  },
};

export const ConError: Story = {
  args: {
    id: 'contact-form-error',
    legendText: 'Elige tu forma de contacto preferida',
    errorMessage: 'Elige al menos una opción.',
    items: [
      {
        id: 'radio-email-error',
        name: 'contact-error',
        labelText: 'Correo electrónico',
        type: 'email',
        value: 'email',
      },
      {
        id: 'radio-phone-error',
        name: 'contact-error',
        labelText: 'Teléfono',
        type: 'tel',
        value: 'phone',
      },
    ],
  },
};
