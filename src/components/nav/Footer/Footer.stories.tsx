import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Nav/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Site footer with navigation, meta links, and EU funding logo.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};

export const WithNavigation: Story = {
  args: {
    navigation: [
      {
        title: 'Gobierno',
        items: [
          { text: 'Portal de la Administración', href: '#' },
          { text: 'Administraciones Públicas', href: '#' },
          { text: 'Función Pública', href: '#' },
        ],
      },
      {
        title: 'Normativa',
        items: [
          { text: 'Legislación', href: '#' },
          { text: 'Reglamentos', href: '#' },
          { text: 'Órganos consultivos', href: '#' },
        ],
      },
      {
        title: 'Servicios',
        items: [
          { text: 'Atención al ciudadano', href: '#' },
          { text: 'Cita previa', href: '#' },
          { text: 'Oficinas', href: '#' },
        ],
      },
    ],
  },
};

export const WithMetaLinks: Story = {
  args: {
    navigation: [
      {
        title: 'Ayuda',
        items: [
          { text: 'Preguntas frecuentes', href: '#faq' },
          { text: 'Contacto', href: '#contacto' },
        ],
      },
    ],
    meta: {
      visuallyHiddenTitle: 'Enlaces legales',
      items: [
        { text: 'Accesibilidad', href: '#accesibilidad' },
        { text: 'Mapa del sitio', href: '#mapa' },
        { text: 'Aviso legal', href: '#aviso' },
        { text: 'Protección de datos', href: '#privacidad' },
        { text: 'Cookies', href: '#cookies' },
      ],
    },
  },
};

export const WithoutLogo: Story = {
  args: {
    noLogo: true,
    meta: {
      items: [
        { text: 'Accesibilidad', href: '#' },
        { text: 'Aviso legal', href: '#' },
      ],
    },
  },
};

export const WithCustomLogoType: Story = {
  args: {
    type: 'FEADER',
    meta: {
      items: [
        { text: 'Accesibilidad', href: '#' },
        { text: 'Aviso legal', href: '#' },
      ],
    },
  },
};
