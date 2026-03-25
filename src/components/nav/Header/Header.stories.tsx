import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Nav/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const PorDefecto: Story = {
  args: {
    homepageUrl: '/',
    mobileTextData: {
      text: 'Gestor de expedientes',
    },
    subnavData: {
      text: 'Gestor de expedientes',
    },
    navigationData: {
      items: [
        {
          href: '#1',
          text: 'Navigation item 1',
        },
        {
          href: '#2',
          text: 'Navigation item 2',
          active: true,
        },
        {
          href: '#3',
          text: 'Navigation item 3',
        },
        {
          href: '#4',
          text: 'Navigation item 4',
        },
      ],
    },
  },
};

export const LogoExpandido: Story = {
  args: {
    homepageUrl: '/',
    expandedLogo: true,
  },
};

export const ConSubnavText: Story = {
  args: {
    homepageUrl: '/',
    mobileTextData: {
      text: 'Gestor de expedientes',
    },
    subnavData: {
      text: 'Gestor de expedientes',
    },
  },
};

export const ConDropdown: Story = {
  args: {
    homepageUrl: '/',
    mobileTextData: {
      text: 'Gestor de expedientes',
    },
    dropdownData: {
      text: 'Marta Pérez',
      items: [
        {
          text: 'Perfil',
          href: '/',
        },
        {
          text: 'Cerrar sesión',
          href: '/',
        },
      ],
    },
  },
};

export const EmailTemplateExample: Story = {
  args: {
    homepageUrl: 'https://www.aragon.es/',
    expandedLogo: true,
  },
};
