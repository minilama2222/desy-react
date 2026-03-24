import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modals/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    id: 'default-modal',
    title: 'Modal Title',
    description: 'This is a description for the modal.',
  },
};

export const WithIcon: Story = {
  args: {
    id: 'icon-modal',
    title: 'Delete Item?',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    icon: 'delete',
  },
};

export const WithButtons: Story = {
  args: {
    id: 'buttons-modal',
    title: 'Confirm Action',
    description: 'Please confirm that you want to proceed.',
    itemsPrimary: [{ text: 'Confirm', type: 'submit' }],
    itemsSecondary: [{ text: 'Cancel', type: 'button' }],
  },
};

export const Dismissible: Story = {
  args: {
    id: 'dismissible-modal',
    title: 'Dismissible Modal',
    description: 'You can close this modal by clicking the X button.',
    isDismissible: true,
    itemsPrimary: [{ text: 'Got it' }],
  },
};

export const WithHeadingLevel: Story = {
  args: {
    id: 'heading-modal',
    title: 'Page Heading Modal',
    description: 'This modal has an h1 heading.',
    headingLevel: 1,
  },
};

export const DeleteConfirmation: Story = {
  args: {
    id: 'delete-modal',
    title: 'Delete Confirmation',
    description: 'Are you sure you want to delete this record? This action cannot be undone.',
    icon: 'delete',
    itemsPrimary: [{ text: 'Delete', classes: 'bg-alert-base text-white hover:bg-alert-dark' }],
    itemsSecondary: [{ text: 'Cancel' }],
  },
};

export const PublishConfirmation: Story = {
  args: {
    id: 'publish-modal',
    title: 'Publish Changes',
    description: 'Your changes will be visible to all users.',
    icon: 'publish',
    itemsPrimary: [{ text: 'Publish', type: 'submit' }],
    itemsSecondary: [{ text: 'Cancel', type: 'button' }],
  },
};

export const WithChildren: Story = {
  args: {
    id: 'children-modal',
    title: 'Modal with Custom Content',
    children: (
      <div className="space-y-4">
        <p>Custom content rendered inside the modal.</p>
        <input type="text" className="c-input block mt-sm border-black rounded-sm" placeholder="Enter something..." />
      </div>
    ),
    itemsPrimary: [{ text: 'Submit' }],
  },
};
