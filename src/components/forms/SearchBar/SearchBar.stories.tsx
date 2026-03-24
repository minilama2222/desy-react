import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { Button } from '../../buttons/Button/Button';

const meta: Meta<typeof SearchBar> = {
  title: 'Forms/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <SearchBar
        id="default-search"
        labelText="Search"
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Enter search term..."
      />
    );
  },
};

export const WithResults: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <SearchBar
        id="results-search"
        labelText="Search"
        value={value}
        onChange={(val) => setValue(val)}
        searchResultsNumber={value.length > 0 ? 3 : undefined}
        placeholder="Enter search term..."
      />
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-4">
        <SearchBar
          id="controlled-search"
          labelText="Search"
          value={value}
          onChange={(val) => setValue(val)}
          placeholder="Enter search term..."
        />
        <p>Current value: "{value}"</p>
        <button onClick={() => setValue('')} className="text-sm text-primary-base underline">
          Clear search
        </button>
      </div>
    );
  },
};

export const WithCustomButton: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <SearchBar
        id="custom-button-search"
        labelText="Search"
        value={value}
        onChange={(val) => setValue(val)}
        placeholder="Enter search term..."
      >
        <Button type="submit">Search</Button>
      </SearchBar>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <SearchBar
        id="error-search"
        labelText="Search"
        value={value}
        onChange={(val) => setValue(val)}
        errorMessageText="Search term is required"
        placeholder="Enter search term..."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <SearchBar
        id="disabled-search"
        labelText="Search"
        value={value}
        onChange={(val) => setValue(val)}
        disabled
        placeholder="Enter search term..."
      />
    );
  },
};
