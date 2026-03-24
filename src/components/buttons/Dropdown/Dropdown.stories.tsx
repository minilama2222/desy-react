import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Buttons/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Dropdown button that opens a menu/popover on click using FloatingUI.',
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
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem text="Opción 1" href="#" />
        <DropdownItem text="Opción 2" href="#" />
        <DropdownItem text="Opción 3" href="#" />
      </Dropdown>
    </div>
  ),
  args: {
    id: 'dropdown-default',
    text: 'Abrir menú',
    placement: 'bottom-start',
  },
};

export const WithHtmlContent: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem html='<strong>Opción en negrita</strong>' href="#" />
        <DropdownItem html='<em>Opción en cursiva</em>' href="#" />
      </Dropdown>
    </div>
  ),
  args: {
    id: 'dropdown-html',
    html: '<span>Menú <b>especial</b></span>',
    placement: 'bottom-start',
  },
};

export const WithDisabledItems: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem text="Opción disponible" href="#" />
        <DropdownItem text="Opción deshabilitada" disabled />
        <DropdownItem text="Otra opción" href="#" />
      </Dropdown>
    </div>
  ),
  args: {
    id: 'dropdown-disabled',
    text: 'Menú con deshabilitados',
    placement: 'bottom-start',
  },
};

export const WithOnClick: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <Dropdown
        {...args}
        onClick={() => console.log('Dropdown clicked!')}
      >
        <DropdownItem text="Aceptar" onClick={() => console.log('Accept clicked!')} />
        <DropdownItem text="Cancelar" onClick={() => console.log('Cancel clicked!')} />
      </Dropdown>
    </div>
  ),
  args: {
    id: 'dropdown-onclick',
    text: 'Acciones',
    placement: 'bottom-start',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem text="No se mostrará" />
      </Dropdown>
    </div>
  ),
  args: {
    id: 'dropdown-disabled',
    text: 'Menú deshabilitado',
    disabled: true,
    placement: 'bottom-start',
  },
};
