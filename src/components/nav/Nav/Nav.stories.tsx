import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';

const meta: Meta<typeof Nav> = {
  title: 'Nav/Nav',
  component: Nav,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const PorDefecto: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
      },
      {
        href: '#',
        text: 'Sobre nosotros',
      },
      {
        href: '#',
        text: 'Contacto',
      },
    ],
  },
};

export const ConItemActivo: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
      },
      {
        href: '#',
        text: 'Sobre nosotros',
      },
      {
        href: '#',
        text: 'Contacto',
        active: true,
      },
    ],
  },
};

export const ConItemDeshabilitado: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
      },
      {
        text: 'Próximamente',
        disabled: true,
      },
      {
        href: '#',
        text: 'Contacto',
      },
    ],
  },
};

export const ConSeparador: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
      },
      {
        href: '#',
        text: 'Sección',
        divider: true,
      },
      {
        href: '#',
        text: 'Contacto',
      },
    ],
  },
};

export const ConIconosEnItems: Story = {
  args: {
    items: [
      {
        href: '#',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-xs" aria-label="Inicio"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Inicio',
      },
      {
        href: '#',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-xs" aria-label="Usuario"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Usuario',
      },
      {
        href: '#',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-xs" aria-label="Correo"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> Correo',
      },
    ],
  },
};

export const ConClasesPersonalizadas: Story = {
  args: {
    classes: 'flex-col',
    items: [
      {
        href: '#',
        text: 'Inicio',
        classes: 'py-sm',
      },
      {
        href: '#',
        text: 'Sobre nosotros',
        classes: 'py-sm',
      },
      {
        href: '#',
        text: 'Contacto',
        classes: 'py-sm',
      },
    ],
  },
};
