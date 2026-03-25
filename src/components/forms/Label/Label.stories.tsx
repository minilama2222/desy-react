import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Forms/Label',
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const PorDefecto: Story = {
  args: {
    text: 'Esto es un label',
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    className: 'inline-block p-base bg-primary-light',
    text: 'Esto es un label',
  },
};

export const ConLabelComoEncabezado: Story = {
  args: {
    text: 'Esto es un label',
    className: 'c-h1',
    isPageHeading: true,
  },
};

export const ConLabelComoEncabezadoConH3: Story = {
  args: {
    text: 'Esto es un label',
    className: 'c-h3',
    isPageHeading: true,
    headingLevel: 3,
  },
};
