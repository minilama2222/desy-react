import type { Meta, StoryObj } from '@storybook/react';
import { Legend } from './Legend';

const meta: Meta<typeof Legend> = {
  title: 'Forms/Legend',
  component: Legend,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <fieldset>
        <Story />
        <p>Contenido del fieldset</p>
      </fieldset>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Legend>;

export const PorDefecto: Story = {
  args: {
    text: 'Leyenda del fieldset',
    classes: 'c-legend block mb-base font-bold',
  },
};

export const ComoEncabezadoDePagina: Story = {
  args: {
    text: 'Leyenda como encabezado de página',
    isPageHeading: true,
    headingLevel: 1,
  },
};

export const ConHTMLYClases: Story = {
  args: {
    html: '<strong>Leyenda</strong> destacada',
    classes: 'text-lg',
  },
};
