import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Forms/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    children: 'This field has an error.',
  },
};

export const WithTextProp: Story = {
  args: {
    text: 'Error message via prop.',
  },
};

export const WithHtml: Story = {
  args: {
    html: 'Error with <strong>bold</strong> text.',
  },
};

export const WithCustomVisuallyHiddenText: Story = {
  args: {
    children: 'Custom error message',
    visuallyHiddenText: 'Please correct this field',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom styled error',
    className: 'text-red-600',
  },
};
