import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radios, RadioItem } from './Radios';

const meta: Meta<typeof Radios> = {
  title: 'Forms/Radios',
  component: Radios,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radios>;

const radioItems = [
  { id: 'radio-1', value: 'yes', text: 'Yes' },
  { id: 'radio-2', value: 'no', text: 'No' },
];

export const Default: Story = {
  args: {
    name: 'default-radios',
    legendText: 'Have you changed your name?',
    items: radioItems,
  },
};

export const WithHint: Story = {
  args: {
    name: 'hint-radios',
    legendText: 'Have you changed your name?',
    hintText: 'This includes changing your last name or spelling your name differently.',
    items: radioItems,
  },
};

export const WithError: Story = {
  args: {
    name: 'error-radios',
    legendText: 'Have you changed your name?',
    errorMessageText: 'Please select an option',
    items: radioItems,
    hasError: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radios
        name="controlled-radios"
        legendText="Have you changed your name?"
        value={value}
        onChange={setValue}
        items={radioItems}
      />
    );
  },
};

export const AsPageHeading: Story = {
  args: {
    name: 'heading-radios',
    legendText: 'Form Legend as Page Heading',
    legendIsPageHeading: true,
    legendHeadingLevel: 2,
    items: radioItems,
  },
};

export const WithDisabledOption: Story = {
  args: {
    name: 'disabled-radios',
    legendText: 'Have you changed your name?',
    items: [
      { id: 'radio-1', value: 'yes', text: 'Yes' },
      { id: 'radio-2', value: 'no', text: 'No', disabled: true },
    ],
  },
};

export const WithConditionalContent: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radios
        name="conditional-radios"
        legendText="Have you changed your name?"
        value={value}
        onChange={setValue}
        items={[
          { id: 'radio-1', value: 'yes', text: 'Yes', conditionalHtml: '<p>Please provide your previous name</p>' },
          { id: 'radio-2', value: 'no', text: 'No' },
        ]}
      />
    );
  },
};

export const WithDividers: Story = {
  args: {
    name: 'divider-radios',
    legendText: 'Select an option',
    items: [
      { id: 'radio-1', value: 'option1', text: 'Option 1' },
      { id: 'radio-divider', value: 'divider', divider: 'or' },
      { id: 'radio-2', value: 'option2', text: 'Option 2' },
    ],
  },
};

export const CompoundComponentPattern: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Radios
        name="compound-radios"
        legendText="Select a fruit"
        value={value}
        onChange={setValue}
      >
        <RadioItem
          id="apple"
          name="compound-radios"
          value="apple"
          text="Apple"
        />
        <RadioItem
          id="banana"
          name="compound-radios"
          value="banana"
          text="Banana"
        />
        <RadioItem
          id="orange"
          name="compound-radios"
          value="orange"
          text="Orange"
        />
      </Radios>
    );
  },
};
