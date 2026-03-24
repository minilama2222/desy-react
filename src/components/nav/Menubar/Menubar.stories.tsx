import type { Meta, StoryObj } from '@storybook/react';
import { Menubar } from './Menubar';

const meta: Meta<typeof Menubar> = {
  title: 'Nav/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Menu bar with keyboard navigation, dropdown sub-menus, and support for checkbox/radio menu items.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  args: {
    id: 'main-menubar',
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Servicios', href: '/servicios' },
      { text: 'Empresa', href: '/empresa' },
      { text: 'Contacto', href: '/contacto' },
    ],
  },
};

export const WithSubMenu: Story = {
  args: {
    id: 'menu-submenu',
    ariaLabel: 'Menú principal con submenús',
    items: [
      { text: 'Trámites', href: '/tramites' },
      {
        text: 'Empresas',
        href: '/empresas',
        sub: {
          items: [
            { id: 'alta', text: 'Alta de empresa', role: 'menuitem' },
            { id: 'modificar', text: 'Modificar datos', role: 'menuitem' },
            { id: 'sep1', text: '', role: 'separator' },
            { id: 'certificados', text: 'Certificados', role: 'menuitem' },
          ],
        },
      },
      { text: 'Ayuda', href: '/ayuda' },
    ],
  },
};

export const WithCheckboxItems: Story = {
  args: {
    id: 'menu-checkbox',
    ariaLabel: 'Menú con casillas de verificación',
    items: [
      {
        text: 'Preferencias',
        sub: {
          items: [
            { id: 'notif', text: 'Recibir notificaciones', role: 'menuitemcheckbox', checked: true },
            { id: 'newsletter', text: 'Suscribirse a newsletter', role: 'menuitemcheckbox', checked: false },
          ],
        },
      },
      { text: 'Salir', href: '/logout' },
    ],
  },
};

export const WithActiveItem: Story = {
  args: {
    id: 'menu-active',
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Trámites', href: '/tramites' },
      { text: 'Empresas', href: '/empresas', active: true },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    id: 'menu-disabled',
    items: [
      { text: 'Activo', href: '#' },
      { text: 'Deshabilitado', href: '#', disabled: true },
      { text: 'Otro', href: '#' },
    ],
  },
};
