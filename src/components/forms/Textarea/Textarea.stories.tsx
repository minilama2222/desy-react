import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: 'default-textarea',
    labelText: 'Default Textarea',
    placeholder: 'Enter some text...',
  },
};

export const WithHint: Story = {
  args: {
    id: 'hint-textarea',
    labelText: 'Textarea with Hint',
    hintText: 'This is a helpful hint message',
    placeholder: 'Enter some text...',
  },
};

export const WithError: Story = {
  args: {
    id: 'error-textarea',
    labelText: 'Textarea with Error',
    errorMessageText: 'This field is required',
    placeholder: 'Enter some text...',
  },
};

export const WithMaxLength: Story = {
  args: {
    id: 'maxlength-textarea',
    labelText: 'Textarea with Max Length',
    maxlength: 100,
    placeholder: 'Enter some text...',
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-textarea',
    labelText: 'Disabled Textarea',
    value: 'This is disabled text',
    disabled: true,
  },
};

export const WithRows: Story = {
  args: {
    id: 'rows-textarea',
    labelText: 'Textarea with 10 Rows',
    rows: 10,
    placeholder: 'Enter some longer text...',
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Textarea
        id="controlled-textarea"
        labelText="Controlled Textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
    );
  },
};

export const AsPageHeading: Story = {
  args: {
    id: 'heading-textarea',
    labelText: 'Form Title as Page Heading',
    labelIsPageHeading: true,
    labelHeadingLevel: 2,
    placeholder: 'Enter some text...',
  },
};
