import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
  title: 'Views/Tabs/Panel',
  component: Panel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const PorDefecto: Story = {
  args: {
    text: 'Contenido del panel',
  },
};

export const ConHTMLYClases: Story = {
  args: {
    html: '<p>Contenido con <strong>formato</strong></p>',
    className: 'p-4',
  },
};

export const ConAtributos: Story = {
  args: {
    text: 'Contenido del panel',
    id: 'tab-panel-1',
    'aria-labelledby': 'tab-1',
  },
};
