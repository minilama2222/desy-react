import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Views/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    idPrefix: 'tab',
    headingLevel: 2,
    title: 'Contents',
    tablistAriaLabel: 'Content sections',
    items: [
      {
        id: 'tab-1',
        text: 'Tab 1',
        panel: { text: 'Content for tab 1 goes here.' },
      },
      {
        id: 'tab-2',
        text: 'Tab 2',
        panel: { text: 'Content for tab 2 goes here.' },
      },
      {
        id: 'tab-3',
        text: 'Tab 3',
        panel: { text: 'Content for tab 3 goes here.' },
      },
    ],
  },
};

export const WithHtmlContent: Story = {
  args: {
    idPrefix: 'html-tabs',
    headingLevel: 2,
    items: [
      {
        text: 'Overview',
        panel: {
          html: '<p>This is <strong>HTML content</strong> in the panel.</p>',
        },
      },
      {
        text: 'Details',
        panel: {
          html: '<ul><li>Detail 1</li><li>Detail 2</li></ul>',
        },
      },
    ],
  },
};

export const WithDisabledTab: Story = {
  args: {
    idPrefix: 'disabled-tabs',
    headingLevel: 2,
    items: [
      {
        text: 'Active Tab',
        panel: { text: 'This tab is active.' },
      },
      {
        text: 'Disabled Tab',
        disabled: true,
        panel: { text: 'You cannot see this content.' },
      },
      {
        text: 'Another Tab',
        panel: { text: 'This is another tab.' },
      },
    ],
  },
};

export const WithActiveTab: Story = {
  args: {
    idPrefix: 'active-tabs',
    headingLevel: 3,
    title: 'Documentation',
    items: [
      {
        text: 'Getting Started',
        panel: { text: 'Getting started content...' },
      },
      {
        text: 'API Reference',
        active: true,
        panel: { text: 'API reference content...' },
      },
      {
        text: 'Examples',
        panel: { text: 'Examples content...' },
      },
    ],
  },
};
