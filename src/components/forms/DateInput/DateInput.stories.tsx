import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'Forms/DateInput',
  component: DateInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    id: 'birth-date',
    namePrefix: 'birth',
    legendText: 'Date of birth',
    headingLevel: 2,
  },
};

export const WithLegendAsPageHeading: Story = {
  args: {
    id: 'passport-date',
    legendData: {
      text: 'Passport expiry date',
      isPageHeading: true,
      headingLevel: 1,
    },
  },
};

export const WithHint: Story = {
  args: {
    id: 'travel-date',
    legendText: 'Travel date',
    hintText: 'Enter the date of your travel in DD/MM/YYYY format',
    headingLevel: 2,
  },
};

export const WithError: Story = {
  args: {
    id: 'appointment-date',
    legendText: 'Appointment date',
    errorMessageText: 'Please enter a valid date',
    headingLevel: 2,
  },
};

export const CustomDivider: Story = {
  args: {
    id: 'custom-date',
    legendText: 'Custom date format',
    divider: { text: '-', classes: 'text-neutral-dark' },
    headingLevel: 2,
  },
};
