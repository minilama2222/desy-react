import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Nav/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const PorDefecto: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
      },
      {
        href: '#',
        text: 'Categoría',
      },
      {
        text: 'Página actual',
      },
    ],
    attributes: {
      'aria-label': 'Breadcrumb',
    },
  },
};

export const ConInicio: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
      },
      {
        text: 'Página actual',
      },
    ],
    attributes: {
      'aria-label': 'Breadcrumb',
    },
  },
};

export const ConMuchosNiveles: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
      },
      {
        href: '#',
        text: 'Nivel 1',
      },
      {
        href: '#',
        text: 'Nivel 2',
      },
      {
        href: '#',
        text: 'Nivel 3',
      },
      {
        text: 'Página actual',
      },
    ],
    attributes: {
      'aria-label': 'Breadcrumb',
    },
  },
};

export const ConIconoInicioPersonalizado: Story = {
  args: {
    items: [
      {
        href: '#',
        html: '<span>Inicio personalizado</span>',
      },
      {
        href: '#',
        text: 'Categoría',
      },
      {
        text: 'Página actual',
      },
    ],
    attributes: {
      'aria-label': 'Breadcrumb',
    },
  },
};

export const ConTextoOcultoEnPrimerElemento: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Inicio',
        hiddenText: 'Ir a ',
      },
      {
        href: '#',
        text: 'Categoría',
      },
      {
        text: 'Página actual',
      },
    ],
    attributes: {
      'aria-label': 'Breadcrumb',
    },
  },
};
