import type { Meta, StoryObj } from '@storybook/react';
import { LinksList } from './LinksList';

const meta: Meta<typeof LinksList> = {
  title: 'Nav/LinksList',
  component: LinksList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a styled list of links with optional icons and sub-content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinksList>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Visión general', href: '#vision' },
      { text: 'Organización', href: '#organizacion' },
      { text: 'Transparencia', href: '#transparencia' },
      { text: 'Contratación pública', href: '#contratacion' },
    ],
  },
};

export const WithActiveItem: Story = {
  args: {
    items: [
      { text: 'Visión general', href: '#vision' },
      { text: 'Organización', href: '#organizacion', active: true },
      { text: 'Transparencia', href: '#transparencia' },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    items: [
      { text: 'Sección activa', href: '#active' },
      { text: 'Sección deshabilitada', href: '#disabled', disabled: true },
    ],
  },
};

export const WithSubContent: Story = {
  args: {
    items: [
      {
        text: 'Registro de Empresas',
        href: '#registro',
        sub: {
          content: 'Consulte el estado de su solicitud de registro',
        },
      },
      {
        text: 'Normativa',
        href: '#normativa',
        sub: {
          content: 'Reglamentos y leyes aplicables',
        },
      },
    ],
  },
};

export const WithChevronIcon: Story = {
  args: {
    items: [
      { text: 'Ir a procedimientos', href: '#', iconRight: { type: 'chevron' } },
      { text: 'Ir a servicios', href: '#', iconRight: { type: 'chevron' } },
    ],
  },
};

export const WithoutNav: Story = {
  args: {
    hasNav: false,
    items: [
      { text: 'Elemento 1', href: '#' },
      { text: 'Elemento 2', href: '#' },
    ],
  },
};
