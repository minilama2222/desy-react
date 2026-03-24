import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'Nav/SkipLink',
  component: SkipLink,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides an accessible "skip to content" link for keyboard users. Hidden by default, becomes visible on focus or active state.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the skip link',
    },
    html: {
      control: 'text',
      description: 'HTML content of the skip link',
    },
    fragment: {
      control: 'text',
      description: 'The fragment/id to scroll to (default: content)',
    },
    id: {
      control: 'text',
      description: 'Unique identifier',
    },
    classes: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  args: {
    text: 'Saltar al contenido principal',
    fragment: 'main-content',
    id: 'skip-link',
  },
};

export const WithHtml: Story = {
  args: {
    html: '<strong>Saltar</strong> al contenido',
    fragment: 'content',
  },
};

export const CustomClasses: Story = {
  args: {
    text: 'Saltar al contenido',
    classes: 'my-custom-class',
    fragment: 'main',
  },
};
