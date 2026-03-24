import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Commons/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    children: '★',
  },
};

export const InfoType: Story = {
  args: {
    type: 'info',
    children: 'ℹ️',
  },
};

export const AlertType: Story = {
  args: {
    type: 'alert',
    children: '⚠️',
  },
};

export const WithContainerClasses: Story = {
  args: {
    type: 'info',
    containerClasses: 'w-8 h-8 bg-blue-100 rounded-full',
    children: 'ℹ️',
  },
};

export const WithHtml: Story = {
  args: {
    html: '<svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7v4a1 1 0 11-2 0V9a1 1 0 112 0zm-1-3a1 1 0 100 2 1 1 0 000-2z"/></svg>',
  },
};
