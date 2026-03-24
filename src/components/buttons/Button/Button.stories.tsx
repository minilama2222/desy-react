import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const AsButton: Story = {
  args: {
    element: 'button',
    type: 'submit',
    children: 'Submit Button',
  },
};

export const AsAnchor: Story = {
  args: {
    element: 'a',
    href: '#',
    children: 'Link Button',
  },
};

export const AsInput: Story = {
  args: {
    element: 'input',
    type: 'submit',
    value: 'Submit Input',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const WithClasses: Story = {
  args: {
    classes: 'bg-blue-600 hover:bg-blue-700 text-white',
    children: 'Styled Button',
  },
};

export const WithTextProp: Story = {
  args: {
    text: 'Button text via prop',
  },
};

export const WithHtml: Story = {
  args: {
    html: '<strong>Bold</strong> Button Text',
  },
};

export const WithPreventDoubleClick: Story = {
  args: {
    children: 'Single Click Only',
    preventDoubleClick: true,
  },
};
