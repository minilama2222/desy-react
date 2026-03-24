import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';
import { Button } from '../../buttons/Button/Button';

const meta: Meta<typeof Item> = {
  title: 'Views/Item',
  component: Item,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    titleItem: { text: 'Item Title', classes: 'text-lg font-semibold' },
    description: { text: 'This is a description for the item.' },
    items: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'document',
    titleItem: { text: 'Document.pdf', classes: 'text-lg font-semibold' },
    description: { text: 'Last modified: 2 hours ago' },
  },
};

export const Draggable: Story = {
  args: {
    isDraggable: true,
    titleItem: { text: 'Draggable Item', classes: 'text-lg font-semibold' },
    description: { text: 'You can drag this item to reorder.' },
  },
};

export const Locked: Story = {
  args: {
    isLocked: true,
    titleItem: { text: 'Locked Item', classes: 'text-lg font-semibold' },
    description: { text: 'This item is currently locked.' },
  },
};

export const WithAction: Story = {
  args: {
    titleItem: { text: 'Item with Action', classes: 'text-lg font-semibold' },
    description: { text: 'This item has an action button on the right.' },
    contentRight: <Button text="Edit" />,
  },
};
