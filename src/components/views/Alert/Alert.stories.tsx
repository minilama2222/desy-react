import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert } from './Alert';
import { Button } from '../../buttons/Button/Button';

const meta: Meta<typeof Alert> = {
  title: 'Views/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Inactive: Story = {
  args: {
    id: 'inactive-alert',
    active: false,
    children: <p>Alert content</p>,
  },
};

export const Active: Story = {
  args: {
    id: 'active-alert',
    active: true,
    children: <p>Alert content</p>,
  },
};

export const Controlled: Story = {
  render: () => {
    const [active, setActive] = useState(false);
    return (
      <div>
        <Button onClick={() => setActive(true)} disabled={active}>
          Show Alert
        </Button>
        <Alert id="controlled-alert" active={active}>
          <div className="p-4 bg-blue-100 border border-blue-400 rounded">
            <p>This is an alert message!</p>
            <button onClick={() => setActive(false)} className="mt-2 text-sm underline">
              Dismiss
            </button>
          </div>
        </Alert>
      </div>
    );
  },
};
