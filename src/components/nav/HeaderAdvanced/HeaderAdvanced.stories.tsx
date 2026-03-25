import type { Meta, StoryObj } from '@storybook/react';
import { HeaderAdvanced } from './HeaderAdvanced';
import { SkipLink } from '../SkipLink/SkipLink';

const meta: Meta<typeof HeaderAdvanced> = {
  title: 'Nav/HeaderAdvanced',
  component: HeaderAdvanced,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderAdvanced>;

const navigationItems = [
  { text: 'Inicio', href: '/' },
  { text: 'Navigation item 2', href: '/item2', active: true },
  { text: 'Navigation item 3', href: '/item3' },
  { text: 'Navigation item 4', href: '/item4' },
];

export const PorDefecto: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
  },
};

export const ConSkipLinkPersonalizado: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    skipLink: <SkipLink text="Saltar al contenido central" fragment="content-center" />,
  },
};

export const ConTitulo: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    titleContainerSlot: (
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-1">
          <a href="/" title="Ir a la página de inicio">Titulo de cabecera</a>
        </h2>
      </div>
    ),
  },
};

export const ConSubtitulo: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    titleContainerSlot: (
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-1">
          <a href="/" title="Ir a la página de inicio">SDA</a>
        </h2>
        <p className="text-sm opacity-90">Servicios Digitales de Aragón.</p>
      </div>
    ),
  },
};

export const ConSuperSeccion: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    superSlot: (
      <div className="bg-primary-dark text-white py-2">
        <div className="container mx-auto px-base text-sm">
          Bienvenido al Portal de Trámites del Gobierno de Aragón
        </div>
      </div>
    ),
    titleContainerSlot: (
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-1">
          <a href="/" title="Ir a la página de inicio">Titulo de cabecera</a>
        </h2>
      </div>
    ),
  },
};

export const ConNavegacionPersonalizada: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    customNavigationSlot: (
      <div className="flex items-center">
        <a href="#" className="c-button c-button--ghost-white c-button--lg mr-base">Custom Item 1</a>
        <a href="#" className="c-button c-button--ghost-white c-button--lg mr-base">Custom Active Item 2</a>
      </div>
    ),
  },
};

export const ConDropdown: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    dropdownSlot: (
      <div className="flex items-center">
        <span className="text-white mr-1">Marta Pérez</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    ),
  },
};

export const LayoutCompleto: Story = {
  args: {
    navigationData: {
      items: [
        { text: 'Inicio', href: '/' },
        { text: 'Navigation item 2', href: '/item2', active: true },
        { text: 'Navigation item 3', href: '/item3' },
        { text: 'Navigation item 4', href: '/item4' },
      ],
    },
    superSlot: (
      <div className="bg-primary-dark text-white py-2">
        <div className="container mx-auto px-base text-sm flex justify-between">
          <span>Portal del Gobierno de Aragón</span>
          <span>Accesibilidad | Alta contraste</span>
        </div>
      </div>
    ),
    titleContainerSlot: (
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold mb-1">
          <a href="/" title="Ir a la página de inicio">Título de cabecera</a>
        </h2>
        <p className="text-sm opacity-90">Descripción del portal</p>
      </div>
    ),
  },
};
