import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Nav/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const PorDefecto: Story = {
  args: {
    items: [
      {
        routerLink: '#',
        text: 'Inicio',
      },
      {
        routerLink: '#',
        text: 'Categoría',
      },
      {
        text: 'Página actual',
      },
    ],
  },
};

export const ConInicio: Story = {
  args: {
    items: [
      {
        routerLink: '#',
        text: 'Inicio',
      },
      {
        text: 'Página actual',
      },
    ],
  },
};

export const ConMuchosNiveles: Story = {
  args: {
    items: [
      {
        routerLink: '#',
        text: 'Inicio',
      },
      {
        routerLink: '#',
        text: 'Nivel 1',
      },
      {
        routerLink: '#',
        text: 'Nivel 2',
      },
      {
        routerLink: '#',
        text: 'Nivel 3',
      },
      {
        text: 'Página actual',
      },
    ],
  },
};

export const ConIconoInicioPersonalizado: Story = {
  args: {
    items: [
      {
        routerLink: '#',
        html: '<span>Inicio personalizado</span>',
      },
      {
        routerLink: '#',
        text: 'Categoría',
      },
      {
        text: 'Página actual',
      },
    ],
  },
};
