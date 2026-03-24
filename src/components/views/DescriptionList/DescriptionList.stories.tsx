import type { Meta, StoryObj } from '@storybook/react';
import { DescriptionList } from './DescriptionList';

const meta: Meta<typeof DescriptionList> = {
  title: 'Views/DescriptionList',
  component: DescriptionList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

export const Default: Story = {
  args: {
    items: [
      {
        term: { text: 'Name', classes: 'text-sm text-neutral-dark' },
        definition: { text: 'John Doe' },
      },
      {
        term: { text: 'Email', classes: 'text-sm text-neutral-dark' },
        definition: { text: 'john@example.com' },
      },
      {
        term: { text: 'Phone', classes: 'text-sm text-neutral-dark' },
        definition: { text: '+34 612 345 678' },
      },
    ],
  },
};

export const WithHtmlContent: Story = {
  args: {
    items: [
      {
        term: { text: 'Address', classes: 'text-sm text-neutral-dark' },
        definition: {
          html: '<strong>123 Main Street</strong><br/>Madrid, Spain',
          classes: 'text-base',
        },
      },
      {
        term: { text: 'Website', classes: 'text-sm text-neutral-dark' },
        definition: {
          html: '<a href="https://example.com" class="text-primary-base underline">Visit website</a>',
        },
      },
    ],
  },
};

export const WithCustomClasses: Story = {
  args: {
    items: [
      {
        term: { text: 'Status', classes: 'font-semibold' },
        definition: { text: 'Active', classes: 'text-green-600 font-semibold' },
        classes: 'mb-sm pb-sm border-b border-neutral-light',
      },
      {
        term: { text: 'Role', classes: 'font-semibold' },
        definition: { text: 'Administrator', classes: 'text-blue-600' },
        classes: 'mb-sm pb-sm border-b border-neutral-light',
      },
      {
        term: { text: 'Last Login', classes: 'font-semibold' },
        definition: { text: '2 hours ago' },
      },
    ],
  },
};
