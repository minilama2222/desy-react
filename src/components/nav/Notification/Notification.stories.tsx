import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta<typeof Notification> = {
  title: 'Nav/Notification',
  component: Notification,
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Informacion: Story = {
  args: {
    type: 'info',
    descriptionText: 'Esta es una notificación de información.',
  },
};

export const Exito: Story = {
  args: {
    type: 'success',
    descriptionText: 'La operación se ha completado correctamente.',
  },
};

export const Alert: Story = {
  args: {
    type: 'alert',
    descriptionText: 'Este es un mensaje de aviso.',
  },
};

export const ConTitulo: Story = {
  args: {
    type: 'info',
    titleText: 'Título de la notificación',
    descriptionText: 'Este es el mensaje de la notificación con un título.',
  },
};

export const SinCerrar: Story = {
  args: {
    type: 'info',
    descriptionText: 'Notificación sin botón de cerrar.',
    isDismissible: false,
  },
};

export const ConCierrePersonalizado: Story = {
  args: {
    type: 'info',
    descriptionText: 'Notificación con texto de cierre personalizado.',
    isDismissible: true,
  },
};

export const ConIdPersonalizado: Story = {
  args: {
    id: 'my-notification',
    type: 'info',
    descriptionText: 'Notificación con ID personalizado.',
  },
};
