import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Views/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    id: 'collapsible-1',
    headerText: 'Click to expand',
    text: 'This is the collapsible content. It can contain any HTML or React components.',
  },
};

export const InitiallyOpen: Story = {
  args: {
    id: 'collapsible-2',
    headerText: 'Already open',
    open: true,
    text: 'This content is visible by default.',
  },
};

export const WithHtmlHeader: Story = {
  args: {
    id: 'collapsible-3',
    headerHtml: '<strong>Bold</strong> and <em>italic</em> header text',
    text: 'Content for the HTML header variant.',
  },
};

export const Controlled: Story = {
  args: {
    id: 'collapsible-4',
    headerText: 'Controlled collapsible',
    text: 'This one is controlled externally.',
  },
};
