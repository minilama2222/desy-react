import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Form label',
  },
};

export const WithTextProp: Story = {
  args: {
    text: 'Label via text prop',
  },
};

export const WithHtml: Story = {
  args: {
    html: 'Label with <em>italic</em> HTML',
  },
};

export const PageHeading: Story = {
  args: {
    text: 'Page Heading Label',
    isPageHeading: true,
    headingLevel: 1,
  },
};

export const PageHeadingH2: Story = {
  args: {
    text: 'Section Heading (h2)',
    isPageHeading: true,
    headingLevel: 2,
  },
};

export const WithCustomClass: Story = {
  args: {
    children: 'Label with custom class',
    className: 'text-blue-600 font-semibold',
  },
};
