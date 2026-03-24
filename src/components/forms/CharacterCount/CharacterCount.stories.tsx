import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCount } from './CharacterCount';

const meta: Meta<typeof CharacterCount> = {
  title: 'Forms/CharacterCount',
  component: CharacterCount,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

export const Default: Story = {
  args: {
    id: 'character-count',
    name: 'description',
    labelText: 'Description',
    maxlength: 200,
    rows: 5,
    placeholder: 'Enter a description...',
  },
};

export const WithThreshold: Story = {
  args: {
    id: 'threshold-count',
    name: 'bio',
    labelText: 'Biography',
    maxlength: 300,
    threshold: 80,
    rows: 5,
  },
};

export const WithWordCount: Story = {
  args: {
    id: 'word-count',
    name: 'essay',
    labelText: 'Essay',
    maxwords: 100,
    threshold: 80,
    rows: 5,
  },
};

export const WithError: Story = {
  args: {
    id: 'error-count',
    name: 'comment',
    labelText: 'Comment',
    maxlength: 50,
    errorMessageText: 'Comment is too long',
    rows: 3,
  },
};
