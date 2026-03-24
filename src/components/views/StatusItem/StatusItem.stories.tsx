import type { Meta, StoryObj } from '@storybook/react';
import { StatusItem } from './StatusItem';

const meta: Meta<typeof StatusItem> = {
  title: 'Views/StatusItem',
  component: StatusItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'StatusItem displays a list of term/definition pairs with optional title, hint, and status indicator.',
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof StatusItem>;

const defaultItems = [
  {
    term: { text: 'Número de solicitud' },
    definition: { text: 'SOL-2024-001234' },
  },
  {
    term: { text: 'Fecha de presentación' },
    definition: { text: '15 de enero de 2024' },
  },
  {
    term: { text: 'Órgano competente' },
    definition: { text: 'Servicio de tramitación' },
  },
];

export const Default: Story = {
  args: {
    id: 'status-item-example',
    title: { text: 'Información de la solicitud' },
    items: defaultItems,
    status: { text: 'En revisión', type: 'alert' },
  },
};

export const WithLink: Story = {
  args: {
    id: 'status-item-link',
    title: { text: 'Datos del solicitante' },
    items: [
      {
        term: { text: 'Nombre' },
        definition: {
          html: '<a href="#" class="c-link">María García López</a>',
        },
      },
      {
        term: { text: 'NIF' },
        definition: { text: '12345678A' },
      },
    ],
  },
};

export const WithHint: Story = {
  args: {
    id: 'status-item-hint',
    title: { text: 'Datos bancarios' },
    hint: {
      text: 'Los datos bancarios se utilizan exclusivamente para el cobro de tasas.',
      id: 'hint-bancos',
    },
    items: [
      {
        term: { text: 'IBAN' },
        definition: { text: 'ES91 2100 0418 4012 3456 7891' },
      },
      {
        term: { text: 'Titular' },
        definition: { text: 'María García López' },
      },
    ],
    status: { text: 'Verificado', type: 'success' },
  },
};

export const WithError: Story = {
  args: {
    id: 'status-item-error',
    title: { text: 'Documentación requerida' },
    errorMessage: {
      text: 'Falta документacíon obligatoria. Por favor, revise los campos indicados.',
      id: 'error-docs',
    },
    items: [
      {
        term: { text: 'Certificado de empadronamiento', html: '<strong>Certificado</strong> de empadronamiento' },
        definition: { text: '❌ No entregado' },
      },
      {
        term: { text: 'DNI/NIE' },
        definition: { text: '✅ Entregado' },
      },
    ],
    status: { text: 'Incompleto', type: 'error' },
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <StatusItem
        id="status-success"
        title={{ text: 'Solicitud aprobada' }}
        items={[{ term: { text: 'Estado' }, definition: { text: 'Aprobada' } }]}
        status={{ text: 'Completado', type: 'success' }}
      />
      <StatusItem
        id="status-alert"
        title={{ text: 'Documentación incompleta' }}
        items={[{ term: { text: 'Estado' }, definition: { text: 'Pendiente de docs' } }]}
        status={{ text: 'Atención', type: 'alert' }}
      />
      <StatusItem
        id="status-error"
        title={{ text: 'Solicitud denegada' }}
        items={[{ term: { text: 'Estado' }, definition: { text: 'Denegada' } }]}
        status={{ text: 'Error', type: 'error' }}
      />
      <StatusItem
        id="status-loading"
        title={{ text: 'Proceso en curso' }}
        items={[{ term: { text: 'Estado' }, definition: { text: 'En proceso' } }]}
        status={{ text: 'Cargando', type: 'loading' }}
      />
    </div>
  ),
};
