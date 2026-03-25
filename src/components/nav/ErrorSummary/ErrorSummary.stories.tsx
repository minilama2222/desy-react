import type { Meta, StoryObj } from '@storybook/react';
import { ErrorSummary } from './ErrorSummary';

const meta: Meta<typeof ErrorSummary> = {
  title: 'Nav/ErrorSummary',
  component: ErrorSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a summary of form errors with links to the corresponding fields. Used for accessible form validation feedback.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

export const PorDefecto: Story = {
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    errorList: [
      { text: 'El campo de Nombre no puede estar vacío.', href: '#example-error-1' },
      { text: 'El campo de Teléfono no es correcto. Introduce una cifra de, al menos, 9 dígitos.', href: '#example-error-2' },
    ],
  },
};

export const ConEncabezadoDeNivel3: Story = {
  args: {
    titleText: 'Título con h3',
    headingLevel: 3,
    errorList: [
      { text: 'El campo de Nombre no puede estar vacío.', href: '#example-error-1' },
      { text: 'El campo de Teléfono no es correcto. Introduce una cifra de, al menos, 9 dígitos.', href: '#example-error-2' },
    ],
  },
};

export const SinEnlaces: Story = {
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    errorList: [{ text: 'Nombre de usuario o contraseña incorrectos.' }],
  },
};

export const ConYSinEnlaces: Story = {
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    errorList: [
      { text: 'Nombre de usuario o contraseña incorrectos.' },
      { text: 'Acepta los términos del servicio para acceder.', href: '#example-error-1' },
    ],
  },
};

export const ConTodo: Story = {
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    descriptionText: 'Por favor, corrige los problemas siguientes.',
    errorList: [
      { text: 'Nombre de usuario o contraseña incorrectos.' },
      { text: 'Acepta los términos del servicio para acceder.', href: '#example-error-1' },
    ],
  },
};
