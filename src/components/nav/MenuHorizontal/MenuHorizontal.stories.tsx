import type { Meta, StoryObj } from '@storybook/react';
import { MenuHorizontal } from './MenuHorizontal';

const meta: Meta<typeof MenuHorizontal> = {
  title: 'Nav/MenuHorizontal',
  component: MenuHorizontal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a horizontal navigation menu.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MenuHorizontal>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Inicio', routerLink: '/' },
      { text: 'Trámites', routerLink: '/tramites' },
      { text: 'Empresas', routerLink: '/empresas' },
      { text: 'Ayuda', routerLink: '/ayuda' },
    ],
  },
};

export const WithActiveItem: Story = {
  args: {
    items: [
      { text: 'Inicio', routerLink: '/' },
      { text: 'Trámites', routerLink: '/tramites', active: true },
      { text: 'Empresas', routerLink: '/empresas' },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      { text: 'Inicio', routerLink: '/' },
      { text: 'Trámites', routerLink: '/tramites' },
      { text: 'Beta', routerLink: '#', disabled: true },
    ],
  },
};

export const WithHref: Story = {
  args: {
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Documentación', href: '/docs' },
      { text: 'API', href: '/api' },
    ],
  },
};
