import type { Meta, StoryObj } from '@storybook/react';
import { AccordionHistory } from './AccordionHistory';

const meta: Meta<typeof AccordionHistory> = {
  title: 'Views/AccordionHistory',
  component: AccordionHistory,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Accordion with history/version tracking timeline with status indicators.',
      },
    },
  },
  argTypes: {
    idPrefix: { control: 'text' },
    headingLevel: { control: { type: 'select' }, options: [1, 2, 3, 4, 5] },
    showControl: { control: 'boolean' },
    allowToggle: { control: 'boolean' },
    showAll: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionHistory>;

const historyItems = [
  {
    id: 'step-1',
    headerText: 'Solicitud presentada',
    text: 'Su solicitud fue recibida el día 15 de enero de 2024.',
    status: 'past' as const,
    open: false,
  },
  {
    id: 'step-2',
    headerText: 'Documentación en revisión',
    text: 'El equipo técnico está revisando la documentación aportada.',
    status: 'past' as const,
  },
  {
    id: 'step-3',
    headerText: 'Aprobación pendiente',
    html: '<p>Su solicitud está pendiente de aprobación final. <strong>Fecha estimada:</strong> 5 días hábiles.</p>',
    status: 'current' as const,
    open: true,
  },
  {
    id: 'step-4',
    headerText: 'Resolución final',
    text: 'Pendiente de resolución.',
    status: 'pending' as const,
  },
];

export const Default: Story = {
  args: {
    idPrefix: 'accordion-history',
    heading: { text: 'Estado de su solicitud' },
    headingLevel: 2,
    items: historyItems,
    showControl: true,
    allowToggle: true,
  },
};

export const WithAllStatuses: Story = {
  args: {
    idPrefix: 'accordion-statuses',
    heading: { text: 'Todos los estados' },
    headingLevel: 2,
    items: [
      { id: 's1', headerText: 'Estado: pasado', text: 'Item completado.', status: 'past' as const, open: false },
      { id: 's2', headerText: 'Estado: muted', text: 'Item muteado.', status: 'muted' as const },
      { id: 's3', headerText: 'Estado: current', text: 'Item actual.', status: 'current' as const, open: true },
      { id: 's4', headerText: 'Estado: currentmuted', text: 'Item actual muteado.', status: 'currentmuted' as const },
      { id: 's5', headerText: 'Estado: pending', text: 'Item pendiente.', status: 'pending' as const },
    ],
  },
};

export const InitiallyExpanded: Story = {
  args: {
    idPrefix: 'accordion-history-expanded',
    heading: { text: 'Historial expandido' },
    headingLevel: 2,
    items: historyItems,
    showControl: true,
    allowToggle: true,
    showAll: true,
  },
};
