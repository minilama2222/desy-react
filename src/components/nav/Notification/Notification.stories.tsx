import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';
import { useState } from 'react';

const meta: Meta<typeof Notification> = {
  title: 'Nav/Notification',
  component: Notification,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays alert/info messages that can be dismissed. Supports different types: success, alert, info.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    titleText: 'Información importante',
    descriptionText: 'Esta es una notificación informativa sobre el estado de su solicitud.',
  },
};

export const Success: Story = {
  args: {
    titleText: 'Solicitud aceptada',
    descriptionText: 'Su solicitud ha sido procesada correctamente. Recibirá un correo electrónico de confirmación.',
    type: 'success',
  },
};

export const Alert: Story = {
  args: {
    titleText: 'Hay errores en el formulario',
    descriptionText: 'Por favor, revise los campos indicados a continuación.',
    type: 'alert',
    items: [
      { text: 'El campo NIF es obligatorio', fragment: 'nif' },
      { text: 'La fecha de nacimiento no es válida', fragment: 'fecha-nacimiento' },
    ],
  },
};

export const Dismissible: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Notification
        isOpen={isOpen}
        onIsOpenChange={setIsOpen}
        titleText="Notificación cerrable"
        descriptionText="Haga clic en la X para cerrar esta notificación."
        isDismissible={true}
        type="info"
      />
    );
  },
};

export const WithItems: Story = {
  args: {
    titleText: 'Acciones recomendadas',
    descriptionText: 'Considere las siguientes acciones:',
    type: 'info',
    items: [
      { text: 'Verificar datos fiscales', href: '#fiscal' },
      { text: 'Actualizar información de contacto', href: '#contacto' },
      { text: 'Revisar documentación adjunta', fragment: 'documentos' },
    ],
  },
};
