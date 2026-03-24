import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'Nav/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Vertical navigation component with keyboard support.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
    id: 'main-nav',
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

export const WithDisabledItem: Story = {
  args: {
    items: [
      { text: 'Inicio', href: '/' },
      { text: 'Trámites', href: '/tramites' },
      { text: 'Zona restringida', href: '#', disabled: true },
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
