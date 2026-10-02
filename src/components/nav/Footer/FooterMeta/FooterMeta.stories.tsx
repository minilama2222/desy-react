import type { Meta, StoryObj } from '@storybook/react';
import { FooterMeta } from './FooterMeta';
import { FooterMetaItem } from './FooterMetaItem/FooterMetaItem';

const meta: Meta<typeof FooterMeta> = {
  title: 'Nav/Footer/FooterMeta',
  component: FooterMeta,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FooterMeta>;

export const PorDefecto: Story = {
  args: {
    visuallyHiddenTitle: 'Enlaces de pie de página',
    items: [
      { href: '#', text: 'Accesibilidad' },
      { href: '#', text: 'Política de privacidad' },
      { href: '#', text: 'Aviso legal' },
    ],
  },
};

export const ConTextoAdicional: Story = {
  args: {
    items: [{ href: '#', text: 'Contacto' }],
    text: '© 2026 Ministerio de Ejemplo',
  },
};

export const ConChildren: Story = {
  render: () => (
    <FooterMeta>
      <FooterMetaItem href="#" text="Accesibilidad" />
      <FooterMetaItem href="#" text="Mapa web" />
    </FooterMeta>
  ),
};
