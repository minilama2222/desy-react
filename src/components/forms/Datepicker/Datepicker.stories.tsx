import type { Meta, StoryObj } from '@storybook/react';
import { Datepicker } from './Datepicker';
import { Label } from '../Label/Label';

const meta: Meta<typeof Datepicker> = {
  title: 'Forms/Datepicker',
  component: Datepicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

export const Default: Story = {
  args: {
    id: 'datepicker',
    name: 'date',
    placeholder: 'DD/MM/YYYY',
  },
  render: (args) => (
    <Datepicker {...args}>
      <Label htmlFor="datepicker" text="Select a date" />
    </Datepicker>
  ),
};

export const WithValue: Story = {
  args: {
    id: 'birth-date',
    name: 'birth-date',
    value: '2024-03-15',
    placeholder: 'DD/MM/YYYY',
  },
  render: (args) => (
    <Datepicker {...args}>
      <Label htmlFor="birth-date" text="Date of birth" />
    </Datepicker>
  ),
};

export const WithHint: Story = {
  args: {
    id: 'appointment-date',
    name: 'appointment',
    placeholder: 'DD/MM/YYYY',
  },
  render: (args) => (
    <Datepicker {...args}>
      <Label htmlFor="appointment-date" text="Appointment date" />
      <p id="appointment-date-hint" className="mt-xs text-sm text-neutral-dark">Select your preferred appointment date</p>
    </Datepicker>
  ),
};
