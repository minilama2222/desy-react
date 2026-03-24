import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Commons/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: 'or',
  },
};

export const WithHtml: Story = {
  args: {
    html: '<span class="text-neutral-medium">divided</span>',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'border-neutral-light my-8',
  },
};
