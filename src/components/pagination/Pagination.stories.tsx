import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Pagination/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPage: 10,
  },
};

export const WithManyPages: Story = {
  args: {
    totalItems: 500,
    currentPage: 5,
    itemsPerPage: 10,
    maxShowPages: 5,
  },
};

export const WithFirstLast: Story = {
  args: {
    totalItems: 100,
    currentPage: 3,
    itemsPerPage: 10,
    showFirst: true,
    showLast: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        totalItems={100}
        currentPage={currentPage}
        itemsPerPage={10}
        onCurrentPageChange={setCurrentPage}
      />
    );
  },
};

export const WithSelect: Story = {
  args: {
    totalItems: 100,
    currentPage: 2,
    itemsPerPage: 10,
    hasSelect: true,
    showFirst: true,
    showLast: true,
  },
};

export const WithItemsPerPageSelect: Story = {
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPage: 25,
    hasSelectItemsPerPage: true,
  },
};

export const DisabledNavigation: Story = {
  args: {
    totalItems: 100,
    currentPage: 1,
    itemsPerPage: 10,
    hasFirst: false,
    hasPrevious: false,
  },
};
