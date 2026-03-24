import type { Meta, StoryObj } from '@storybook/react';
import { Description } from './Description';

const meta: Meta<typeof Description> = {
  title: 'Commons/Description',
  component: Description,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {
    children: 'This is a default description text.',
  },
};

export const WithVisuallyHiddenTitle: Story = {
  args: {
    visuallyHiddenTitle: 'Additional context',
    children: 'Screen readers will announce "Additional context: followed by this description text."',
  },
};

export const WithTextProp: Story = {
  args: {
    text: 'Description passed via the text prop.',
  },
};

export const WithHtml: Story = {
  args: {
    html: '<strong>Bold description</strong> with HTML content.',
  },
};

export const WithCustomClass: Story = {
  args: {
    className: 'text-neutral-dark text-sm',
    children: 'Styled description with custom class.',
  },
};
