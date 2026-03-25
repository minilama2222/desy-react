import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'Nav/SkipLink',
  component: SkipLink,
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const PorDefecto: Story = {
  args: {
    href: '#main-content',
    text: 'Ir al contenido principal',
  },
};

export const ConTextoPersonalizado: Story = {
  args: {
    href: '#main',
    text: 'Saltar al contenido',
  },
};
