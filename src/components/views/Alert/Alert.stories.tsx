import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Notification } from '../../nav/Notification/Notification';

const meta: Meta<typeof Alert> = {
  title: 'Views/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const AlertMostrandoUnaNotificacionDeExito: Story = {
  args: {
    id: 'success-id',
    active: true,
    children: (
      <Notification
        id="default-id"
        titleText="El documento se ha cargado correctamente"
        type="success"
        isDismissible
      />
    ),
  },
};

export const AlertMostrandoUnaNotificacionDeAlerta: Story = {
  args: {
    id: 'alert-id',
    active: true,
    children: (
      <Notification
        id="secondary-id"
        titleText="Problemas encontrados"
        items={[
          { text: 'Campo Nombre de la empresa está vacío', href: '#empresa' },
          { text: 'Campo Fecha de inicio de la actividad está vacío', href: '#actividad' },
          { text: 'El formato de correo electrónico es incorrecto', href: '#email' },
        ]}
        type="alert"
        isDismissible
      />
    ),
  },
};
