import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLoader } from './ButtonLoader';

const meta: Meta<typeof ButtonLoader> = {
  title: 'Buttons/ButtonLoader',
  component: ButtonLoader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ButtonLoader>;

export const Default: Story = {
  args: {
    children: 'Button Loader',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    state: 'is-loading',
  },
};

export const Success: Story = {
  args: {
    children: 'Success Button',
    state: 'is-success',
  },
};

export const WithLoaderText: Story = {
  args: {
    children: 'Loading',
    state: 'is-loading',
    loaderText: 'Processing your request...',
  },
};

export const WithSuccessText: Story = {
  args: {
    children: 'Submit',
    state: 'is-success',
    successText: 'Form submitted successfully!',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Loader',
    disabled: true,
  },
};

export const AsAnchor: Story = {
  args: {
    element: 'a',
    href: '#',
    children: 'Link Button',
  },
};
