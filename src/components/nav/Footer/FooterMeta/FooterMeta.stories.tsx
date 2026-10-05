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
    visuallyHiddenTitle: 'Enlaces a pie de página',
    items: [
      { href: '#aviso-legal', text: 'Aviso legal' },
      { href: '#privacidad', text: 'Política de privacidad' },
      { href: '#accesibilidad', text: 'Accesibilidad' },
      { href: '#mapa-web', text: 'Mapa web' },
    ],
    html: 'Todo el contenido bajo <a class="c-link c-link--neutral" href="https://creativecommons.org/licenses/by/4.0/deed.es" rel="license" target="_blank">licencia CC BY 4.0</a>. <a class="c-link c-link--neutral" href="https://www.aragon.es/">Gobierno de Aragón</a>.',
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
