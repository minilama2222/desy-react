import type { Meta, StoryObj } from '@storybook/react';
import { HeaderAdvanced } from './HeaderAdvanced';

const meta: Meta<typeof HeaderAdvanced> = {
  title: 'Navigation/HeaderAdvanced',
  component: HeaderAdvanced,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Advanced header component with super section, title container, navigation, and dropdown slots.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderAdvanced>;

const navigationItems = [
  { text: 'Inicio', href: '/' },
  { text: 'Trámites', href: '/tramites' },
  {
    text: 'Empresas',
    sub: {
      items: [
        { id: 'alta', text: 'Alta de empresa', href: '/empresas/alta' },
        { id: 'modificar', text: 'Modificar datos', href: '/empresas/modificar' },
        { divider: true },
        { id: 'certificados', text: 'Certificados', href: '/empresas/certificados' },
      ],
    },
  },
  { text: 'Ayuda', href: '/ayuda' },
];



export const Default: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
  },
};

export const WithTitleContainer: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    titleContainerSlot: (
      <div className="bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-1">
            <a href="/" title="Ir a la página de inicio">Portal de Empresas</a>
          </h2>
          <p className="text-sm lg:text-base opacity-90">
            Gestión integral de trámites empresariales
          </p>
        </div>
      </div>
    ),
  },
};

export const WithSuperSection: Story = {
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
      <div className="bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold">
            <a href="/" title="Ir a la página de inicio">Servicio de Gestión</a>
          </h2>
        </div>
      </div>
    ),
  },
};

export const FullLayout: Story = {
  args: {
    navigationData: {
      items: navigationItems,
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
      <div className="bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base">
        <div className="container mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold mb-1">
            <a href="/" title="Ir a la página de inicio">Gestión de Trámites</a>
          </h1>
          <p className="text-sm lg:text-base opacity-90">
            Acceda a todos los servicios de forma sencilla
          </p>
        </div>
      </div>
    ),
    subSlot: (
      <div className="bg-neutral-lighter border-b border-neutral-base py-sm">
        <div className="container mx-auto px-base text-sm">
          <nav className="flex gap-base">
            <a href="/" className="text-primary-dark hover:underline">Inicio</a>
            <a href="/tramites" className="text-neutral-dark hover:underline">Trámites</a>
            <a href="/empresas" className="text-neutral-dark hover:underline">Empresas</a>
          </nav>
        </div>
      </div>
    ),
  },
};

export const WithCustomNavigation: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    customNavigationSlot: (
      <div className="flex items-center gap-4">
        <button className="text-sm px-base py-sm hover:bg-neutral-light rounded">
          Notificaciones
        </button>
        <button className="text-sm px-base py-sm bg-primary-dark text-white rounded hover:bg-primary-darker">
          Nuevo trámite
        </button>
      </div>
    ),
    dropdownSlot: (
      <div className="flex items-center">
        <span className="text-sm mr-2">María García</span>
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-primary-base flex items-center justify-center text-white text-sm font-bold">
            MG
          </div>
        </div>
      </div>
    ),
  },
};

export const Minimal: Story = {
  args: {
    navigationData: {
      items: [
        { text: 'Inicio', href: '/', active: true },
        { text: 'Servicios', href: '/servicios' },
        { text: 'Contacto', href: '/contacto' },
      ],
    },
  },
};
