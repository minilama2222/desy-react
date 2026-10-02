import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Commons/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: 'Espere por favor',
  },
};

export const SizeSmall: Story = {
  args: {
    className: 'text-xs',
  },
};

export const SizeLarge: Story = {
  args: {
    className: 'text-lg',
  },
};

export const SizeExtraLarge: Story = {
  args: {
    className: 'text-6xl',
  },
};

export const ColorNeutral: Story = {
  args: {
    className: 'text-neutral-base',
  },
};

export const ColorPrimary: Story = {
  args: {
    className: 'text-primary-base',
  },
};

export const WithContainer: Story = {
  args: {
    className: 'border border-neutral-light w-60 h-60',
  },
};
