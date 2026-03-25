import type { Meta, StoryObj } from '@storybook/react';
import { LinksList } from './LinksList';

const meta: Meta<typeof LinksList> = {
  title: 'Nav/LinksList',
  component: LinksList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinksList>;

export const PorDefecto: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Enlace 1',
      },
      {
        href: '#',
        text: 'Enlace 2',
      },
      {
        href: '#',
        text: 'Enlace 3',
      },
    ],
  },
};

export const ConEnlaceActivo: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Enlace 1',
      },
      {
        href: '#',
        text: 'Enlace 2',
        active: true,
      },
      {
        href: '#',
        text: 'Enlace 3',
      },
    ],
  },
};

export const ConEnlaceDeshabilitado: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Enlace 1',
      },
      {
        text: 'Enlace 2',
        disabled: true,
      },
      {
        href: '#',
        text: 'Enlace 3',
      },
    ],
  },
};

export const ConEnlaceExterno: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Enlace interno',
      },
      {
        href: 'https://www.aragon.es/',
        text: 'Enlace externo',
        target: '_blank',
      },
    ],
  },
};

export const ConSeparador: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Enlace 1',
      },
      {
        href: '#',
        text: 'Enlace 2',
      },
      {
        href: '#',
        text: 'Enlace 3',
      },
    ],
  },
};
