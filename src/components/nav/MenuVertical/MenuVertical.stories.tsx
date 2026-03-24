import type { Meta, StoryObj } from '@storybook/react';
import { MenuVertical } from './MenuVertical';

const meta: Meta<typeof MenuVertical> = {
  title: 'Nav/MenuVertical',
  component: MenuVertical,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a vertical navigation menu with optional sub-menus.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuVertical>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Trámites', href: '/tramites' },
      { text: 'Empresas', href: '/empresas' },
      { text: 'Ayuda', href: '/ayuda' },
    ],
  },
};

export const WithActiveItem: Story = {
  args: {
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Trámites', href: '/tramites', active: true },
      { text: 'Empresas', href: '/empresas' },
    ],
  },
};

export const WithSubMenu: Story = {
  args: {
    items: [
      { text: 'Trámites', href: '/tramites' },
      {
        text: 'Empresas',
        href: '/empresas',
        sub: {
          items: [
            { text: 'Alta de empresa', href: '/empresas/alta' },
            { text: 'Modificación de datos', href: '/empresas/modificar' },
            { text: 'Certificados', href: '/empresas/certificados' },
          ],
        },
      },
      { text: 'Ayuda', href: '/ayuda' },
    ],
  },
};

export const WithDividers: Story = {
  args: {
    items: [
      { text: 'Opción 1', href: '#1' },
      { divider: true },
      { text: 'Opción 2', href: '#2' },
      { divider: true },
      { text: 'Opción 3', href: '#3' },
    ],
  },
};

export const WithUnderline: Story = {
  args: {
    hasUnderline: true,
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Servicios', href: '/servicios' },
      { text: 'Contacto', href: '/contacto' },
    ],
  },
};
