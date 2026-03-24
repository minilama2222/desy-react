import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkboxes, CheckboxItem } from './Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'Forms/Checkboxes',
  component: Checkboxes,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

const checkboxItems = [
  { id: 'checkbox-1', value: 'yes', text: 'Yes' },
  { id: 'checkbox-2', value: 'no', text: 'No' },
];

export const Default: Story = {
  args: {
    name: 'default-checkboxes',
    legendText: 'Have you changed your name?',
    items: checkboxItems,
  },
};

export const WithHint: Story = {
  args: {
    name: 'hint-checkboxes',
    legendText: 'Have you changed your name?',
    hintText: 'This includes changing your last name or spelling your name differently.',
    items: checkboxItems,
  },
};

export const WithError: Story = {
  args: {
    name: 'error-checkboxes',
    legendText: 'Have you changed your name?',
    errorMessageText: 'Please select an option',
    items: checkboxItems,
    hasError: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Checkboxes
        name="controlled-checkboxes"
        legendText="Select your interests"
        value={value}
        onChange={setValue}
        items={[
          { value: 'sports', text: 'Sports' },
          { value: 'music', text: 'Music' },
          { value: 'reading', text: 'Reading' },
        ]}
      />
    );
  },
};

export const WithDividers: Story = {
  args: {
    name: 'divider-checkboxes',
    legendText: 'Select an option',
    hasDividers: true,
    items: [
      { id: 'checkbox-1', value: 'option1', text: 'Option 1' },
      { id: 'checkbox-divider', value: 'divider', divider: 'or' },
      { id: 'checkbox-2', value: 'option2', text: 'Option 2' },
    ],
  },
};

export const WithDisabledOption: Story = {
  args: {
    name: 'disabled-checkboxes',
    legendText: 'Select your interests',
    items: [
      { value: 'sports', text: 'Sports' },
      { value: 'music', text: 'Music', disabled: true },
      { value: 'reading', text: 'Reading' },
    ],
  },
};

export const WithConditionalContent: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Checkboxes
        name="conditional-checkboxes"
        legendText="Select your interests"
        value={value}
        onChange={setValue}
        items={[
          { value: 'yes', text: 'Yes, I have changed my name', conditionalHtml: '<p>Please provide your previous name</p>' },
          { value: 'no', text: 'No' },
        ]}
      />
    );
  },
};

export const CompoundComponentPattern: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Checkboxes
        name="compound-checkboxes"
        legendText="Select fruits"
        value={value}
        onChange={setValue}
      >
        <CheckboxItem
          id="apple"
          name="compound-checkboxes"
          value="apple"
          text="Apple"
          checked={value.includes('apple')}
          onChange={(val, checked) => {
            if (checked) {
              setValue([...value, val]);
            } else {
              setValue(value.filter(v => v !== val));
            }
          }}
        />
        <CheckboxItem
          id="banana"
          name="compound-checkboxes"
          value="banana"
          text="Banana"
          checked={value.includes('banana')}
          onChange={(val, checked) => {
            if (checked) {
              setValue([...value, val]);
            } else {
              setValue(value.filter(v => v !== val));
            }
          }}
        />
      </Checkboxes>
    );
  },
};
