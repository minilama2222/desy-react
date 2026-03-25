import type { Meta, StoryObj } from '@storybook/react';
import { Details } from './Details';

const meta: Meta<typeof Details> = {
  title: 'Views/Details',
  component: Details,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Details>;

export const PorDefecto: Story = {
  args: {
    summaryHtml: 'Más información',
    children: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio mollitia itaque placeat voluptatibus, veritatis recusandae odio facere corporis laboriosam quam quia sequi, possimus consequatur enim veniam eius soluta esse.</p>,
  },
};

export const Expandido: Story = {
  args: {
    id: 'mas-informacion',
    summaryText: 'Más información',
    open: true,
    children: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eum cupiditate quod minima consequuntur, eveniet aspernatur eius, consectetur ad, a enim atque dicta, repellat voluptatum iusto hic perspiciatis laboriosam unde.</p>,
  },
};

export const ConHTML: Story = {
  args: {
    summaryHtml: 'Más información <em>actualizada</em>',
    children: <p>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Quae omnis ipsa eius dolorum, maiores! Labore quaerat nam pariatur minima consectetur, tempora magnam. At sequi quidem exercitationem velit id, pariatur, animi.</p>,
  },
};

export const ConClases: Story = {
  args: {
    summaryHtml: 'Más información <em>actualizada</em>',
    summaryClasses: 'hover:underline',
    classes: 'p-base bg-primary-light text-primary-base',
    containerClasses: 'p-base',
    children: <p>Lorem ipsum dolor, sit amet <strong>consectetur</strong>, adipisicing elit. Quae omnis ipsa eius dolorum, maiores! Labore quaerat nam pariatur minima consectetur, tempora magnam. At sequi quidem exercitationem velit id, pariatur, animi.</p>,
  },
};
