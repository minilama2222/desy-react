import type { Meta, StoryObj } from '@storybook/react';
import { MenuNavigation } from './MenuNavigation';

const meta: Meta<typeof MenuNavigation> = {
  title: 'Navigation/MenuNavigation',
  component: MenuNavigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Menu navigation component with keyboard navigation, dropdown sub-menus, and support for checkbox/radio menu items.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuNavigation>;

export const Default: Story = {
  args: {
    ariaLabel: 'Menú principal',
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Trámites', href: '/tramites' },
      { text: 'Empresas', href: '/empresas' },
      { text: 'Contacto', href: '/contacto' },
    ],
  },
};

export const WithSubMenus: Story = {
  args: {
    ariaLabel: 'Menú principal con submenús',
    items: [
      { text: 'Trámites', href: '/tramites' },
      {
        text: 'Empresas',
        sub: {
          ariaLabel: 'Submenú de empresas',
          items: [
            { id: 'alta', text: 'Alta de empresa', href: '/empresas/alta' },
            { id: 'modificar', text: 'Modificar datos', href: '/empresas/modificar' },
            { id: 'sep1', divider: true },
            { id: 'certificados', text: 'Certificados', href: '/empresas/certificados' },
          ],
        },
      },
      { text: 'Ayuda', href: '/ayuda' },
    ],
  },
};

export const WithActiveItem: Story = {
  args: {
    ariaLabel: 'Menú con item activo',
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Trámites', href: '/tramites' },
      { text: 'Empresas', href: '/empresas', active: true },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    ariaLabel: 'Menú con item deshabilitado',
    items: [
      { text: 'Activo', href: '#' },
      { text: 'Deshabilitado', href: '#', disabled: true },
      { text: 'Otro', href: '#' },
    ],
  },
};

export const WithCheckboxItems: Story = {
  args: {
    ariaLabel: 'Menú con casillas de verificación',
    items: [
      {
        text: 'Preferencias',
        sub: {
          items: [
            { id: 'notif', text: 'Recibir notificaciones', role: 'menuitemcheckbox' },
            { id: 'newsletter', text: 'Suscribirse a newsletter', role: 'menuitemcheckbox' },
          ],
        },
      },
      { text: 'Salir', href: '/logout' },
    ],
  },
};

export const MixedNavigation: Story = {
  args: {
    ariaLabel: 'Menú mixto con diferentes tipos de items',
    items: [
      { text: 'Inicio', href: '/', active: true },
      {
        text: 'Servicios',
        sub: {
          items: [
            { id: 'serv1', text: 'Servicio 1', href: '/servicios/1' },
            { id: 'serv2', text: 'Servicio 2', href: '/servicios/2', disabled: true },
            { id: 'sep', divider: true },
            { id: 'serv3', text: 'Servicio 3', href: '/servicios/3' },
          ],
        },
      },
      { text: 'Trámites', href: '/tramites' },
      { text: 'Documentación', href: '/docs', disabled: true },
    ],
  },
};
