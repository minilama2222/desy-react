import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible } from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Views/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

const longText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const PorDefecto: Story = {
  args: {
    id: 'collapsible-default',
    headerText: 'Cabecera del collapsible',
    text: longText,
  },
};

export const Expandido: Story = {
  args: {
    id: 'collapsible-initially-expanded',
    headerText: 'Cabecera del collapsible',
    text: longText,
    open: true,
  },
};

export const ExpandidoConJavaScript: Story = {
  args: {
    id: 'collapsible-expanded',
    headerText: 'Cabecera del collapsible',
    text: longText,
  },
};

export const ConHTML: Story = {
  args: {
    id: 'collapsible-html',
    headerText: 'Cabecera del collapsible',
    html: `<p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit, sed do eiusmod
    tempor <em>incididunt</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in <strong>reprehenderit</strong> in voluptate velit esse
    cillum dolore eu fugiat nulla <em>pariatur</em>. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
  },
};

export const ConClasesAplicadas: Story = {
  args: {
    id: 'collapsible-classes',
    headerText: 'Cabecera del collapsible',
    text: longText,
    className: 'p-base bg-primary-light flex flex-wrap gap-base',
    buttonClasses: 'c-button self-start',
    showClasses: 'hidden!',
    hideClasses: 'hidden!',
    contentClasses: 'flex-1 border border-neutral-base p-base bg-white rounded-sm',
  },
};
