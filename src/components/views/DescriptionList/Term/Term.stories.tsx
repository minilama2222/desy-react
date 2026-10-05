import type { Meta, StoryObj } from '@storybook/react';
import { Term } from './Term';

const meta: Meta<typeof Term> = {
  title: 'Views/DescriptionList/Term',
  component: Term,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Term>;

export const PorDefecto: Story = {
  args: {
    text: 'Término',
  },
};

export const ConHTMLYClases: Story = {
  args: {
    html: '<strong>Término</strong>',
    className: 'text-lg font-semibold',
  },
};

export const ConAtributos: Story = {
  args: {
    text: 'Término',
    id: 'termino-1',
    title: 'Término con atributos',
  },
};
