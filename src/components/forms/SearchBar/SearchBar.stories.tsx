import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { Button } from '../../buttons/Button/Button';

const meta: Meta<typeof SearchBar> = {
  title: 'Forms/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const PorDefecto: Story = {
  args: {
    id: 'searchbar-1',
    labelText: 'Buscar',
    labelClasses: 'not-sr-only mb-sm',
  },
};

export const ConPlaceholder: Story = {
  args: {
    id: 'searchbar-2',
    labelText: 'Buscar',
    placeholder: 'Buscar en este sitio',
  },
};

export const Deshabilitado: Story = {
  args: {
    id: 'searchbar-3',
    labelText: 'Buscar',
    disabled: true,
  },
};

export const ConMensajeDeError: Story = {
  args: {
    id: 'searchbar-4',
    labelText: 'Buscar',
    errorMessageText: 'Esto es un mensaje de error',
    errorMessageClasses: 'mt-xs',
  },
};

export const ConLabelVisible: Story = {
  args: {
    id: 'searchbar-label-visible',
    labelText: 'Buscar items recientes',
    labelClasses: 'not-sr-only mb-sm',
  },
};

export const Peque: Story = {
  args: {
    id: 'searchbar-5',
    labelText: 'Buscar',
    classes: 'c-input--sm',
    buttonClasses: 'm-xs p-0.5 text-xs',
  },
};

export const BotonPersonalizado: Story = {
  args: {
    id: 'searchbar-6',
    labelText: 'Buscar en esta página',
    classes: 'flex-1',
  },
  render: (args) => (
    <SearchBar {...args}>
      <Button type="submit" classes="c-button--primary">
        Buscar
      </Button>
    </SearchBar>
  ),
};

export const BotonPersonalizadoPequen: Story = {
  args: {
    id: 'searchbar-7',
    labelText: 'Buscar en esta página',
    classes: 'flex-1 c-input--sm',
  },
  render: (args) => (
    <SearchBar {...args}>
      <Button type="submit" classes="c-button--sm">
        Buscar
      </Button>
    </SearchBar>
  ),
};
