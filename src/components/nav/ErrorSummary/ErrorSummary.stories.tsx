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

export const Default: Story = {
  args: {
    titleText: 'Hay un problema',
    errorList: [
      { text: 'El campo NIF es obligatorio', fragment: 'nif' },
      { text: 'La dirección de correo electrónico no es válida', fragment: 'email' },
      { text: 'Debe aceptar los términos y condiciones', fragment: 'terminos' },
    ],
  },
};

export const WithDescription: Story = {
  args: {
    titleText: 'Hay 3 errores',
    descriptionText: 'Por favor, corrija los siguientes errores antes de enviar el formulario.',
    errorList: [
      { text: 'El campo nombre es obligatorio', fragment: 'nombre' },
      { text: 'El campo apellidos es obligatorio', fragment: 'apellidos' },
      { text: 'La fecha de nacimiento no es válida', fragment: 'fecha' },
    ],
  },
};

export const WithHtmlContent: Story = {
  args: {
    titleHtml: 'Hay <strong>2 problemas</strong>',
    errorList: [
      { html: 'El <em>teléfono</em> no es válido', fragment: 'telefono' },
      { text: 'La contraseña es demasiado corta', fragment: 'password' },
    ],
  },
};

export const DifferentHeadingLevels: Story = {
  args: {
    headingLevel: 3,
    titleText: 'Errores en el formulario',
    errorList: [
      { text: 'Campo 1', fragment: 'campo1' },
      { text: 'Campo 2', fragment: 'campo2' },
    ],
  },
};
