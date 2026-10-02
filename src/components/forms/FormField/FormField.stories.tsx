import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '../Input/Input';

const meta: Meta<typeof FormField> = {
  title: 'Forms/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const PorDefecto: Story = {
  args: {
    id: 'nombre',
    labelText: 'Nombre completo',
    hintText: 'Escribe tu nombre tal como aparece en tu documento de identidad.',
    children: <Input id="nombre" name="nombre" />,
  },
};

export const ConError: Story = {
  args: {
    id: 'email',
    labelText: 'Correo electrónico',
    errorMessageText: 'Introduce una dirección de correo válida.',
    children: <Input id="email" name="email" />,
  },
};

export const SoloLabel: Story = {
  args: {
    id: 'apellidos',
    labelText: 'Apellidos',
    children: <Input id="apellidos" name="apellidos" />,
  },
};
