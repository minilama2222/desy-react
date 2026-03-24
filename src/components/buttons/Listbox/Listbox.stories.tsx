import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Listbox } from './Listbox';

const meta: Meta<typeof Listbox> = {
  title: 'Buttons/Listbox',
  component: Listbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Listbox dropdown with keyboard navigation. Supports single and multi-select modes.',
      },
    },
  },
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Listbox>;

const sampleItems = [
  { value: 'opt1', text: 'Opción 1', active: false },
  { value: 'opt2', text: 'Opción 2', active: false },
  { value: 'opt3', text: 'Opción 3', active: false },
  { value: 'opt4', text: 'Opción 4', active: false },
];

export const Default: Story = {
  render: (args) => {
    const [items, setItems] = useState(args.items || sampleItems);
    return (
      <div className="flex justify-center p-8">
        <Listbox
          {...args}
          items={items}
          onItemsChange={(newItems) => setItems(newItems)}
        />
      </div>
    );
  },
  args: {
    id: 'listbox-default',
    label: { text: 'Seleccione una opción' },
    items: sampleItems,
    placement: 'bottom-start',
  },
};

export const SingleSelect: Story = {
  render: (args) => {
    const [items, setItems] = useState(args.items || sampleItems);
    const [activeItem, setActiveItem] = useState<any>(null);
    return (
      <div className="flex flex-col items-center p-8">
        <Listbox
          {...args}
          items={items}
          onItemsChange={(newItems) => setItems(newItems)}
          onActiveItemChange={(item) => setActiveItem(item)}
        />
        {activeItem && (
          <p className="mt-4 text-sm">Seleccionado: <strong>{activeItem.text}</strong></p>
        )}
      </div>
    );
  },
  args: {
    id: 'listbox-single',
    label: { text: 'Idioma' },
    doesChangeButtonText: true,
    items: [
      { value: 'es', text: 'Español' },
      { value: 'en', text: 'English' },
      { value: 'fr', text: 'Français' },
      { value: 'de', text: 'Deutsch' },
    ],
    placement: 'bottom-start',
  },
};

export const MultiSelect: Story = {
  render: (args) => {
    const [items, setItems] = useState(args.items || sampleItems.map(i => ({ ...i })));
    return (
      <div className="flex flex-col items-center p-8">
        <Listbox
          {...args}
          items={items}
          onItemsChange={(newItems) => setItems(newItems)}
        />
        <p className="mt-4 text-sm">
          Seleccionados:{' '}
          <strong>{items.filter(i => i.active).map(i => i.text).join(', ') || 'ninguno'}</strong>
        </p>
      </div>
    );
  },
  args: {
    id: 'listbox-multi',
    label: { text: 'Seleccione múltiples opciones' },
    isMultiselectable: true,
    items: sampleItems,
    placement: 'bottom-start',
  },
};

export const WithDisabledItems: Story = {
  render: (args) => {
    const [items, setItems] = useState(args.items || sampleItems);
    return (
      <div className="flex justify-center p-8">
        <Listbox
          {...args}
          items={items}
          onItemsChange={(newItems) => setItems(newItems)}
        />
      </div>
    );
  },
  args: {
    id: 'listbox-disabled',
    label: { text: 'Con opciones deshabilitadas' },
    items: [
      { value: 'opt1', text: 'Opción disponible' },
      { value: 'opt2', text: 'Opción deshabilitada', disabled: true },
      { value: 'opt3', text: 'Otra opción' },
    ],
    placement: 'bottom-start',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <Listbox {...args} />
    </div>
  ),
  args: {
    id: 'listbox-disabled',
    label: { text: 'Listbox deshabilitado' },
    items: sampleItems,
    disabled: true,
    placement: 'bottom-start',
  },
};
