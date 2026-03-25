import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMini } from './HeaderMini';

const meta: Meta<typeof HeaderMini> = {
  title: 'Nav/HeaderMini',
  component: HeaderMini,
};

export default meta;
type Story = StoryObj<typeof HeaderMini>;

export const PorDefecto: Story = {
  args: {},
};

export const SinClaseContenedora: Story = {
  args: {
    hasContainer: false,
  },
};
