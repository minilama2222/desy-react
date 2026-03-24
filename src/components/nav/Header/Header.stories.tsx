import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Full header component with logo, navigation menu, dropdown, and mobile offcanvas support.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

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

const dropdownItems = [
  { text: 'Mi perfil', href: '/perfil' },
  { text: 'Configuración', href: '/configuracion' },
  { divider: true },
  { text: 'Cerrar sesión', href: '/logout' },
];

const offcanvasContent = `
  <ul class="flex flex-col gap-base p-base">
    <li><a href="/" class="block py-sm px-base text-sm hover:bg-primary-light">Inicio</a></li>
    <li><a href="/tramites" class="block py-sm px-base text-sm hover:bg-primary-light">Trámites</a></li>
    <li><a href="/empresas" class="block py-sm px-base text-sm hover:bg-primary-light">Empresas</a></li>
    <li><a href="/ayuda" class="block py-sm px-base text-sm hover:bg-primary-light">Ayuda</a></li>
  </ul>
`;

export const Default: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
  },
};

export const WithSubnav: Story = {
  args: {
    subnavData: {
      text: 'Portal de Empresas',
      items: [
        { text: 'Alta', href: '/empresas/alta' },
        { text: 'Modificar', href: '/empresas/modificar' },
        { text: 'Certificados', href: '/empresas/certificados' },
      ],
    },
    navigationData: {
      items: navigationItems,
    },
  },
};

export const WithDropdown: Story = {
  args: {
    navigationData: {
      items: navigationItems,
    },
    dropdownData: {
      text: 'María García',
      items: dropdownItems,
    },
  },
};

export const WithAllSlots: Story = {
  args: {
    homepageUrl: '/',
    expandedLogo: false,
    subnavData: {
      text: 'Aplicación de Trámites',
    },
    navigationData: {
      items: navigationItems,
    },
    dropdownData: {
      text: 'Usuario',
      html: '<span class="font-semibold">María García</span>',
      items: dropdownItems,
    },
    offcanvasData: {
      text: 'Menú',
      contentHtml: offcanvasContent,
      textClose: 'Cerrar',
    },
  },
};

export const Compact: Story = {
  args: {
    homepageUrl: '/',
    expandedLogo: true,
    navigationData: {
      items: [
        { text: 'Inicio', href: '/', active: true },
        { text: 'Servicios', href: '/servicios' },
        { text: 'Contacto', href: '/contacto' },
      ],
    },
  },
};

export const WithoutNavigation: Story = {
  args: {
    homepageUrl: '/',
    subnavData: {
      text: 'Navegación personalizada',
    },
    dropdownData: {
      text: 'Opciones',
      items: dropdownItems,
    },
  },
};
