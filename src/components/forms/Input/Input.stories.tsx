import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'example-input',
    name: 'example',
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    id: 'labeled-input',
    name: 'labeled',
    labelText: 'Enter your name',
    placeholder: 'Name',
  },
};

export const WithHint: Story = {
  args: {
    id: 'hinted-input',
    name: 'hinted',
    labelText: 'Email address',
    hintText: 'We will never share your email with anyone else.',
    placeholder: 'email@example.com',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    id: 'error-input',
    name: 'error',
    labelText: 'Password',
    hintText: 'Enter your password',
    errorMessageText: 'Password must be at least 8 characters',
    type: 'password',
  },
};

export const WithLabelAsPageHeading: Story = {
  args: {
    id: 'heading-input',
    name: 'heading',
    labelText: 'Form Title',
    labelIsPageHeading: true,
    labelHeadingLevel: 1,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-input',
    name: 'disabled',
    labelText: 'Disabled Input',
    disabled: true,
    value: 'Cannot edit',
  },
};

export const NumberInput: Story = {
  args: {
    id: 'number-input',
    name: 'number',
    labelText: 'Age',
    type: 'number',
    min: 0,
    max: 120,
  },
};

export const PasswordInput: Story = {
  args: {
    id: 'password-input',
    name: 'password',
    labelText: 'Password',
    type: 'password',
    autoComplete: 'current-password',
  },
};
