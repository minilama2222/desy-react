import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Buttons/Toggle',
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        offState="Off"
        onState="On"
      />
    );
  },
};

export const AsSwitch: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle
        isSwitch
        pressed={pressed}
        onPressedChange={setPressed}
        offState="Off"
        onState="On"
      />
    );
  },
};

export const WithContentChildren: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
      >
        <span>Child Content</span>
      </Toggle>
    );
  },
};

export const WithClasses: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        classes="px-4 py-2 rounded-full"
        offStateClasses="bg-gray-200 text-gray-800"
        onStateClasses="bg-blue-600 text-white"
        offState="Off"
        onState="On"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        disabled
        offState="Off"
        onState="On"
      />
    );
  },
};

export const Expandible: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle
        isExpandible
        pressed={pressed}
        onPressedChange={setPressed}
        offState="Collapsed"
        onState="Expanded"
      />
    );
  },
};
