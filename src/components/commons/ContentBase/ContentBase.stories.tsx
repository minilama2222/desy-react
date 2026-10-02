import type { Meta, StoryObj } from '@storybook/react';
import { ContentBase } from './ContentBase';

const meta: Meta<typeof ContentBase> = {
  title: 'Commons/ContentBase',
  component: ContentBase,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContentBase>;

export const PorDefecto: Story = {
  args: {
    text: 'Contenido base',
  },
};

export const ConHTML: Story = {
  args: {
    html: '<em>Contenido</em> con HTML',
  },
};

export const ConChildren: Story = {
  render: () => (
    <ContentBase>
      <span className="font-semibold">Contenido proyectado</span> como children
    </ContentBase>
  ),
};
