import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';

const meta: Meta<typeof Hint> = {
  title: 'Forms/Hint',
  component: Hint,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const Default: Story = {
  args: {
    children: 'This is a helpful hint text.',
  },
};

export const WithTextProp: Story = {
  args: {
    text: 'Hint text via prop.',
  },
};

export const WithHtml: Story = {
  args: {
    html: 'Hint with <strong>bold</strong> text.',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom styled hint',
    className: 'text-sm',
  },
};
