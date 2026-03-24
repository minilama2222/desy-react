import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
  title: 'Buttons/Pill',
  component: Pill,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    children: 'Default Pill',
  },
};

export const AsSpan: Story = {
  args: {
    element: 'span',
    children: 'Span Pill',
  },
};

export const AsButton: Story = {
  args: {
    element: 'button',
    children: 'Button Pill',
  },
};

export const AsAnchor: Story = {
  args: {
    element: 'a',
    href: '#',
    children: 'Anchor Pill',
  },
};

export const WithTextProp: Story = {
  args: {
    text: 'Pill via text prop',
  },
};

export const WithHtml: Story = {
  args: {
    html: '<strong>Bold</strong> Pill Text',
  },
};

export const WithClasses: Story = {
  args: {
    classes: 'bg-blue-100 text-blue-800',
    children: 'Styled Pill',
  },
};

export const Disabled: Story = {
  args: {
    element: 'button',
    children: 'Disabled Pill',
    disabled: true,
  },
};

export const WithClickHandler: Story = {
  args: {
    children: 'Clickable Pill',
    onClick: () => alert('Pill clicked!'),
  },
};
