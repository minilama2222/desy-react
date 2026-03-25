import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'Nav/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const PorDefecto: Story = {
  args: {
    text: 'Ir al contenido principal',
    fragment: 'main-content',
  },
};

export const ConTextoPersonalizado: Story = {
  args: {
    text: 'Saltar al contenido',
    fragment: 'main',
  },
};
