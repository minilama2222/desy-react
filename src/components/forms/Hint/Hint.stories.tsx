import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'Forms/Hint',
  component: Hint,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const PorDefecto: Story = {
  args: {
    text: 'Esto es una pista o hint.',
  },
};

export const ConHtml: Story = {
  args: {
    html: 'Esto es una <strong>pista</strong> o <em>hint</em>.',
  },
};
