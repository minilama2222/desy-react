import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputGroup } from './InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Forms/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'InputGroup combines multiple inputs into a fieldset with shared legend and hints.',
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: (args) => {
    const [values, setValues] = useState<Record<string, string>>({});
    return (
      <div>
        <InputGroup
          {...args}
          onChangeAll={(v) => setValues(v)}
        />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>
    );
  },
  args: {
    id: 'input-group-example',
    legendText: 'Datos personales',
    hint: 'Introduzca su nombre y apellidos',
    items: [
      {
        name: 'nombre',
        labelText: 'Nombre',
        placeholder: 'María',
        type: 'text',
      },
      {
        name: 'apellidos',
        labelText: 'Apellidos',
        placeholder: 'García López',
        type: 'text',
      },
    ],
  },
};

export const WithDateRange: Story = {
  render: (args) => {
    const [values, setValues] = useState<Record<string, string>>({});
    return (
      <div>
        <InputGroup {...args} onChangeAll={(v) => setValues(v)} />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>
    );
  },
  args: {
    id: 'input-group-date',
    legendText: 'Rango de fechas',
    items: [
      {
        name: 'fecha-inicio',
        labelText: 'Fecha inicio',
        type: 'date',
      },
      {
        name: 'separator',
        divider: { text: 'a' },
      },
      {
        name: 'fecha-fin',
        labelText: 'Fecha fin',
        type: 'date',
      },
    ],
  },
};

export const WithSelect: Story = {
  render: (args) => {
    const [values, setValues] = useState<Record<string, string>>({});
    return (
      <div>
        <InputGroup {...args} onChangeAll={(v) => setValues(v)} />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>
    );
  },
  args: {
    id: 'input-group-select',
    legendText: 'Tipo y cantidad',
    items: [
      {
        name: 'tipo',
        labelText: 'Tipo',
        isSelect: true,
        selectItems: [
          { text: 'Seleccione...', value: '' },
          { text: 'Producto A', value: 'a' },
          { text: 'Producto B', value: 'b' },
          { text: 'Producto C', value: 'c' },
        ],
      },
      {
        name: 'cantidad',
        labelText: 'Cantidad',
        type: 'number',
        placeholder: '0',
      },
    ],
  },
};

export const WithError: Story = {
  render: (args) => {
    const [values, setValues] = useState<Record<string, string>>({});
    return (
      <div>
        <InputGroup {...args} onChangeAll={(v) => setValues(v)} />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>
    );
  },
  args: {
    id: 'input-group-error',
    legendText: 'Datos de contacto',
    errorMessage: 'Por favor, complete todos los campos obligatorios.',
    items: [
      {
        name: 'email',
        labelText: 'Correo electrónico',
        type: 'email',
        placeholder: 'email@ejemplo.es',
      },
      {
        name: 'telefono',
        labelText: 'Teléfono',
        type: 'tel',
        placeholder: '+34 600 000 000',
      },
    ],
  },
};
