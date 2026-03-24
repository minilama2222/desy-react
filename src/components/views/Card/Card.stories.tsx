import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Views/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-base">
        <h2 className="text-lg font-bold mb-sm">Card Title</h2>
        <p className="text-neutral-dark">This is some card content.</p>
      </div>
    ),
  },
};

export const WithSuper: Story = {
  args: {
    superBackgroundImageUrl: 'https://picsum.photos/800/200',
    children: (
      <div className="p-base">
        <h2 className="text-lg font-bold mb-sm">Card with Image Header</h2>
        <p className="text-neutral-dark">The image above is the super sector.</p>
      </div>
    ),
  },
};

export const WithLeftAndRight: Story = {
  args: {
    left: <img src="https://picsum.photos/400/300" alt="Left" className="w-full h-full object-cover" />,
    right: <img src="https://picsum.photos/400/300" alt="Right" className="w-full h-full object-cover" />,
    children: (
      <div className="p-base">
        <h2 className="text-lg font-bold mb-sm">Card with Side Images</h2>
        <p className="text-neutral-dark">This card has images on both sides.</p>
      </div>
    ),
  },
};

export const WithBackgroundColor: Story = {
  args: {
    superBackgroundColor: '#f0f0f0',
    super: <div className="h-full w-full flex items-center justify-center text-neutral-dark">Header Area</div>,
    children: (
      <div className="p-base">
        <h2 className="text-lg font-bold mb-sm">Card with Colored Header</h2>
        <p className="text-neutral-dark">The header has a background color.</p>
      </div>
    ),
  },
};
