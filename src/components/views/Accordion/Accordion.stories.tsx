import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Views/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Accordion component with collapsible sections and optional expand/collapse all control.',
      },
    },
  },
  argTypes: {
    idPrefix: { control: 'text', description: 'Unique identifier prefix' },
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5],
      description: 'Heading level for the accordion title',
    },
    showControl: { control: 'boolean', description: 'Show expand/collapse all button' },
    allowToggle: { control: 'boolean', description: 'Allow toggling individual items' },
    showAll: { control: 'boolean', description: 'All items expanded initially' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: 'item-1',
    headerText: '¿Qué es el sistema de大衣建筑设计?',
    text: 'El sistema de大衣建筑设计 es un conjunto de herramientas y servicios que...',
    open: true,
  },
  {
    id: 'item-2',
    headerText: '¿Cómo puedo registrar una solicitud?',
    headerHtml: '<strong>¿Cómo puedo</strong> registrar una solicitud?',
    text: 'Para registrar una solicitud, debe seguir los pasos indicados en el portal.',
  },
  {
    id: 'item-3',
    headerText: '¿Necesito certificado digital?',
    text: 'Sí, es necesario disponer de un certificado digital válido.',
    disabled: true,
  },
  {
    id: 'item-4',
    headerText: '¿Cuánto tarda el proceso?',
    html: '<p>El proceso suele tardar entre <strong>5 y 10 días hábiles</strong>.</p>',
  },
];

export const Default: Story = {
  args: {
    idPrefix: 'accordion-example',
    heading: { text: 'Preguntas frecuentes' },
    headingLevel: 2,
    items: sampleItems,
    showControl: true,
    allowToggle: true,
  },
};

export const WithNumberedItems: Story = {
  args: {
    idPrefix: 'accordion-numbered',
    heading: { text: 'Pasos del procedimiento' },
    headingLevel: 2,
    items: sampleItems.map((item, i) => ({
      ...item,
      headerHtml: `<span class="mr-2 font-bold text-primary-base">${i + 1}.</span> ${item.headerText}`,
    })),
    showControl: false,
    allowToggle: true,
  },
};

export const InitiallyExpanded: Story = {
  args: {
    idPrefix: 'accordion-expanded',
    heading: { text: 'Acordeón expandido' },
    headingLevel: 2,
    items: sampleItems,
    showControl: true,
    allowToggle: true,
    showAll: true,
  },
};

export const WithHtmlContent: Story = {
  args: {
    idPrefix: 'accordion-html',
    heading: { text: 'Información técnica' },
    headingLevel: 2,
    items: [
      {
        id: 'html-1',
        headerText: 'Requisitos del sistema',
        html: `<ul class="list-disc pl-4">
          <li>Navegador compatible (Chrome, Firefox, Edge, Safari)</li>
          <li>JavaScript habilitado</li>
          <li>Conexión a internet estable</li>
        </ul>`,
        open: true,
      },
      {
        id: 'html-2',
        headerText: 'Contacto de soporte',
        html: `<p>Para más información, contacte con <a href="mailto:soporte@ejemplo.es" class="c-link">soporte@ejemplo.es</a></p>`,
      },
    ],
  },
};

export const WithDisabledItem: Story = {
  args: {
    idPrefix: 'accordion-disabled',
    heading: { text: 'Accordion con item deshabilitado' },
    headingLevel: 2,
    items: [
      {
        id: 'enabled-1',
        headerText: 'Opción disponible',
        text: 'Esta opción está disponible para su selección.',
        open: true,
      },
      {
        id: 'disabled-1',
        headerText: 'Opción temporalmente no disponible',
        text: 'Esta opción está temporalmente deshabilitada.',
        disabled: true,
      },
      {
        id: 'enabled-2',
        headerText: 'Otra opción disponible',
        text: 'Puede seleccionar esta opción.',
      },
    ],
  },
};
