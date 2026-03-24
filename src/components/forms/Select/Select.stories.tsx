import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const countryItems = [
  { value: 'uk', text: 'United Kingdom' },
  { value: 'es', text: 'Spain' },
  { value: 'fr', text: 'France' },
  { value: 'de', text: 'Germany' },
];

export const Default: Story = {
  args: {
    id: 'default-select',
    name: 'country',
    labelText: 'Select a country',
    items: countryItems,
  },
};

export const WithHint: Story = {
  args: {
    id: 'hint-select',
    name: 'country',
    labelText: 'Select a country',
    hintText: 'This is a helpful hint message',
    items: countryItems,
  },
};

export const WithError: Story = {
  args: {
    id: 'error-select',
    name: 'country',
    labelText: 'Select a country',
    errorMessageText: 'Please select a country',
    items: countryItems,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return (
      <Select
        id="controlled-select"
        name="country"
        labelText="Select a country"
        value={value}
        onChange={(val) => setValue(val)}
        items={countryItems}
      />
    );
  },
};

export const WithDefaultValue: Story = {
  args: {
    id: 'default-value-select',
    name: 'country',
    labelText: 'Select a country',
    value: 'es',
    items: countryItems,
  },
};

export const WithOptionGroups: Story = {
  args: {
    id: 'groups-select',
    name: 'country',
    labelText: 'Select a location',
    items: [
      { label: 'Europe', items: countryItems },
      { label: 'North America', items: [
        { value: 'us', text: 'United States' },
        { value: 'ca', text: 'Canada' },
      ]},
    ],
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-select',
    name: 'country',
    labelText: 'Select a country',
    disabled: true,
    value: 'es',
    items: countryItems,
  },
};

export const AsPageHeading: Story = {
  args: {
    id: 'heading-select',
    name: 'country',
    labelText: 'Select Your Country',
    labelIsPageHeading: true,
    labelHeadingLevel: 2,
    items: countryItems,
  },
};
