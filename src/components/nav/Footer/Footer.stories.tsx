import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Nav/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const PorDefecto: Story = {
  args: {
    classes: 'lg:mt-48',
    meta: {
      visuallyHiddenTitle: 'Enlaces a pie de página',
      items: [
        { href: '#aviso-legal', text: 'Aviso legal' },
        { href: '#privacidad', text: 'Política de privacidad' },
        { href: '#accesibilidad', text: 'Accesibilidad' },
        { href: '#mapa-web', text: 'Mapa web' },
      ],
    },
  },
};

export const ConEnlacesEnMetaYContenido: Story = {
  args: {
    meta: {
      visuallyHiddenTitle: 'Enlaces a pie de página',
      items: [
        {
          href: '#1',
          text: 'Inicio',
        },
        {
          href: '#2',
          text: 'Aviso legal',
        },
        {
          href: '#3',
          text: 'Política de cookies',
        },
        {
          href: '#4',
          text: 'Mapa del sitio',
        },
      ],
    },
    descriptionText:
      '© Gobierno de Aragón. Dirección: (placeholder). Teléfono: (placeholder)',
  },
};

export const ConUnMetaPersonalizado: Story = {
  args: {
    meta: {
      visuallyHiddenTitle: 'Navegación footer',
      items: [
        {
          href: '#',
          text: 'Accesibilidad',
        },
        {
          href: '#',
          text: 'Declaración de accesibilidad',
        },
        {
          href: '#',
          text: 'Mapa del sitio',
        },
      ],
    },
  },
};

export const ConDescripcionPersonalizada: Story = {
  args: {
    descriptionText:
      'Esta es una descripción personalizada para el footer. Puedes añadir cualquier texto aquí.',
    meta: {
      visuallyHiddenTitle: 'Enlaces a pie de página',
      items: [
        {
          href: '#',
          text: 'Inicio',
        },
        {
          href: '#',
          text: 'Aviso legal',
        },
      ],
    },
  },
};

export const SinLogo: Story = {
  args: {
    noLogo: true,
    descriptionText: 'Footer sin logo del Gobierno de Aragón.',
    meta: {
      visuallyHiddenTitle: 'Enlaces a pie de página',
      items: [
        {
          href: '#',
          text: 'Inicio',
        },
        {
          href: '#',
          text: 'Aviso legal',
        },
      ],
    },
  },
};

export const NavegacionCon3SeccionesEnColumnasIguales: Story = {
  args: {
    navigation: [
      {
        title: 'Sección 1',
        items: [
          {
            href: '#',
            text: 'Enlace 1.1',
          },
          {
            href: '#',
            text: 'Enlace 1.2',
          },
          {
            href: '#',
            text: 'Enlace 1.3',
          },
        ],
      },
      {
        title: 'Sección 2',
        items: [
          {
            href: '#',
            text: 'Enlace 2.1',
          },
          {
            href: '#',
            text: 'Enlace 2.2',
          },
          {
            href: '#',
            text: 'Enlace 2.3',
          },
        ],
      },
      {
        title: 'Sección 3',
        items: [
          {
            href: '#',
            text: 'Enlace 3.1',
          },
          {
            href: '#',
            text: 'Enlace 3.2',
          },
          {
            href: '#',
            text: 'Enlace 3.3',
          },
        ],
      },
    ],
    meta: {
      visuallyHiddenTitle: 'Enlaces a pie de página',
      items: [
        {
          href: '#',
          text: 'Inicio',
        },
        {
          href: '#',
          text: 'Aviso legal',
        },
      ],
    },
  },
};

export const NavegacionCon2SeccionesUnaDeEllasCon3Columnas: Story = {
  args: {
    navigation: [
      {
        title: 'Sección 1',
        items: [
          {
            href: '#',
            text: 'Enlace 1.1',
          },
          {
            href: '#',
            text: 'Enlace 1.2',
          },
        ],
      },
      {
        title: 'Sección 2',
        items: [
          {
            href: '#',
            text: 'Enlace 2.1',
          },
          {
            href: '#',
            text: 'Enlace 2.2',
          },
        ],
      },
      {
        title: 'Sección 3 - Subsección A',
        classes: 'lg:w-1/3',
        items: [
          {
            href: '#',
            text: 'Enlace 3A.1',
          },
          {
            href: '#',
            text: 'Enlace 3A.2',
          },
        ],
      },
      {
        title: 'Sección 3 - Subsección B',
        classes: 'lg:w-1/3',
        items: [
          {
            href: '#',
            text: 'Enlace 3B.1',
          },
          {
            href: '#',
            text: 'Enlace 3B.2',
          },
        ],
      },
      {
        title: 'Sección 3 - Subsección C',
        classes: 'lg:w-1/3',
        items: [
          {
            href: '#',
            text: 'Enlace 3C.1',
          },
          {
            href: '#',
            text: 'Enlace 3C.2',
          },
        ],
      },
    ],
  },
};
