import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Details } from './Details';

const meta: Meta<typeof Details> = {
  title: 'Views/Details',
  component: Details,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Default: Story = {
  args: {
    summaryText: 'What is a monarch?',
    children: <p>A monarch is a sovereign head of state, typically a king, queen, or emperor.</p>,
  },
};

export const OpenByDefault: Story = {
  args: {
    summaryText: 'What is a monarch?',
    open: true,
    children: <p>A monarch is a sovereign head of state, typically a king, queen, or emperor.</p>,
  },
};

export const WithHtmlSummary: Story = {
  args: {
    summaryHtml: '<strong>Important</strong> Information',
    children: <p>This is some important information that can be expanded or collapsed.</p>,
  },
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <p className="mb-4">Currently: {isOpen ? 'Open' : 'Closed'}</p>
        <Details
          summaryText="Click to toggle"
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <p>This content is controlled by the parent component.</p>
        </Details>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Toggle Details
        </button>
      </div>
    );
  },
};

export const WithStyledSummary: Story = {
  args: {
    summaryText: 'Learn more about our services',
    summaryClasses: 'c-link text-primary-600 hover:underline',
    children: (
      <div>
        <p className="mb-2">Our services include:</p>
        <ul className="list-disc pl-6">
          <li>Consulting</li>
          <li>Development</li>
          <li>Training</li>
        </ul>
      </div>
    ),
  },
};
