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
    text: 'Esta es una notificación de información.',
  },
};

export const Exito: Story = {
  args: {
    type: 'success',
    text: 'La operación se ha completado correctamente.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    text: 'Este es un mensaje de aviso.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    text: 'Ha ocurrido un error en la operación.',
  },
};

export const ConTitulo: Story = {
  args: {
    type: 'info',
    title: 'Título de la notificación',
    text: 'Este es el mensaje de la notificación con un título.',
  },
};

export const SinCerrar: Story = {
  args: {
    type: 'info',
    text: 'Notificación sin botón de cerrar.',
    closeButton: false,
  },
};

export const ConCierrePersonalizado: Story = {
  args: {
    type: 'info',
    text: 'Notificación con texto de cierre personalizado.',
    closeText: 'Cerrar notificación',
  },
};

export const ConIdPersonalizado: Story = {
  args: {
    id: 'my-notification',
    type: 'info',
    text: 'Notificación con ID personalizado.',
  },
};
