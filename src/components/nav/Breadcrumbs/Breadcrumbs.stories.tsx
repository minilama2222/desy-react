import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Nav/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a navigation breadcrumb trail showing the user\'s location within the site hierarchy.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Inicio', routerLink: '/' },
      { text: 'Trámites', routerLink: '/tramites' },
      { text: 'Empresas', routerLink: '/tramites/empresas' },
      { text: 'Alta de empresa' },
    ],
  },
};

export const WithBackButton: Story = {
  args: {
    hasBackButton: true,
    items: [
      { text: 'Inicio', routerLink: '/' },
      { text: 'Servicios' },
    ],
  },
};

export const InlineOnDesktop: Story = {
  args: {
    inlineOnDesktop: true,
    items: [
      { text: 'Inicio', routerLink: '/' },
      { text: 'Ayuda', routerLink: '/ayuda' },
      { text: 'FAQ' },
    ],
  },
};

export const WithHtmlItems: Story = {
  args: {
    items: [
      { text: 'Inicio', routerLink: '/' },
      { html: '<span>Sección</span>', routerLink: '/seccion' },
      { text: 'Página actual' },
    ],
  },
};
