import type { Meta, StoryObj } from '@storybook/react';
import { Definition } from './Definition';

const meta: Meta<typeof Definition> = {
  title: 'Views/DescriptionList/Definition',
  component: Definition,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Definition>;

export const PorDefecto: Story = {
  args: {
    text: 'Definición del término',
  },
};

export const ConHTMLYClases: Story = {
  args: {
    html: '<strong>Definición</strong> con HTML',
    className: 'text-neutral-dark',
  },
};

export const ConAtributos: Story = {
  args: {
    text: 'Definición',
    id: 'definicion-1',
    title: 'Definición con atributos',
  },
};
