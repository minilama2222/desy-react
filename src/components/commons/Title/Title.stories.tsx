import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Commons/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Page Title',
  },
};

export const WithTextProp: Story = {
  args: {
    text: 'Title passed via text prop',
  },
};

export const WithHtml: Story = {
  args: {
    html: 'Title with <em>italic</em> HTML',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'text-3xl font-bold text-blue-600',
    children: 'Custom styled title',
  },
};
