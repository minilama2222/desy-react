import type { Meta, StoryObj } from '@storybook/react';
import { Content } from './Content';

const meta: Meta<typeof Content> = {
  title: 'Commons/Content',
  component: Content,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Content>;

export const Default: Story = {
  args: {
    children: 'This is default content inside a Content component.',
  },
};

export const WithText: Story = {
  args: {
    text: 'This is text content passed via the text prop.',
  },
};

export const WithHtml: Story = {
  args: {
    html: '<strong>Bold</strong> and <em>italic</em> HTML content.',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-blue-50 p-4 rounded-lg',
    children: 'Content with custom styling.',
  },
};
