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
    allowMultiple: { control: 'boolean', description: 'Allow multiple items open' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
    html: '<p>Contenido del item 1</p>',
  },
  {
    headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>',
    html: '<p>Contenido del item 2</p>',
  },
  {
    headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>',
    html: '<p>Contenido del item 3</p>',
  },
];

export const PorDefecto: Story = {
  args: {
    idPrefix: 'accordion-example',
    headingLevel: 3,
    items: sampleItems,
  },
};

export const PermiteMultiples: Story = {
  args: {
    idPrefix: 'allowmultiple-example',
    headingLevel: 3,
    allowMultiple: true,
    items: sampleItems,
  },
};

export const PermiteCerrar: Story = {
  args: {
    idPrefix: 'allowtoggle-example',
    headingLevel: 3,
    allowToggle: true,
    items: sampleItems,
  },
};

export const ConUnItemAbierto: Story = {
  args: {
    idPrefix: 'with-one-item-opened-example',
    headingLevel: 3,
    allowToggle: true,
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>', html: '<p>Contenido del item 1</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>', html: '<p>Contenido del item 2</p>', open: true },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>', html: '<p>Contenido del item 3</p>' },
    ],
  },
};

export const Con2ItemsAbiertos: Story = {
  args: {
    idPrefix: 'with-2-items-opened-example',
    headingLevel: 3,
    allowMultiple: true,
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>', html: '<p>Contenido del item 1</p>', open: true },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>', html: '<p>Contenido del item 2</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>', html: '<p>Contenido del item 3</p>', open: true },
    ],
  },
};

export const DeshabilitadosConAllowToggleYAllowMultiple: Story = {
  args: {
    idPrefix: 'accordion-disabled',
    headingLevel: 3,
    allowToggle: true,
    allowMultiple: true,
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón no deshabilitado</span>', html: '<p>Contenido</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado</span>', html: '<p>Contenido</p>', disabled: true },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado y abierto</span>', html: '<p>Contenido</p>', disabled: true, open: true },
    ],
  },
};

export const ConEncabezado: Story = {
  args: {
    idPrefix: 'heading-example',
    headingLevel: 3,
    heading: { text: 'Encabezado de acordeón' },
    items: sampleItems,
  },
};

export const ConEncabezadoDeNivel4: Story = {
  args: {
    idPrefix: 'accordion-heading-level-example',
    headingLevel: 4,
    heading: { text: 'Este encabezado con <h4>' },
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Este Item 1 con h5</span>', html: '<p>Contenido del item 1</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Este Item 2 con h5</span>', html: '<p>Contenido del item 2</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Este Item 3 con h5</span>', html: '<p>Contenido del item 3</p>' },
    ],
  },
};

export const ConEncabezadoYControlesDeMostrarTodo: Story = {
  args: {
    idPrefix: 'heading-and-show-controls-example',
    headingLevel: 3,
    heading: { text: 'Encabezado de acordeón' },
    showControl: true,
    allowMultiple: true,
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>', html: '<p>Contenido del item 1</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>', html: '<p>Contenido del item 2</p>', open: true },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>', html: '<p>Contenido del item 3</p>' },
    ],
  },
};

export const MostrarTodoUOcultarTodoConJavaScript: Story = {
  args: {
    idPrefix: 'show-all-accordion-example-js',
    headingLevel: 3,
    heading: { text: 'Encabezado de acordeón' },
    showControl: true,
    allowMultiple: true,
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>', html: '<p>Contenido del item 1</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>', html: '<p>Contenido del item 2</p>', open: true },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>', html: '<p>Contenido del item 3</p>' },
    ],
  },
};

export const ConControlesPersonalizadosParaMostrarOcultar: Story = {
  args: {
    idPrefix: 'accordion-show-hide',
    headingLevel: 3,
    allowMultiple: true,
    items: [
      {
        headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
        html: '<p>Contenido del item 1</p>',
        show: { text: 'Expandir detalles' },
        hide: { text: 'Contraer' },
      },
      {
        headerHtml: '<span class="block pr-lg pointer-events-none">Item de acordeón 2</span>',
        html: '<p>Contenido del item 2</p>',
        show: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M14 7a1 1 0 0 0-1-1H8.25A.25.25 0 0 1 8 5.75V1a1 1 0 0 0-2 0v4.75a.25.25 0 0 1-.25.25H1a1 1 0 0 0 0 2h4.75a.25.25 0 0 1 .25.25V13a1 1 0 0 0 2 0V8.25A.25.25 0 0 1 8.25 8H13a1 1 0 0 0 1-1Z" fill="currentColor" transform="scale(3.42857)"/></svg>' },
        hide: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M13 8H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z" fill="currentColor" transform="scale(3.42857)"/></svg>' },
      },
      {
        headerHtml: '<span class="block pr-lg pointer-events-none">Item de acordeón 3</span>',
        html: '<p>Contenido del item 3</p>',
        show: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5 12.1875c-.4375 0-.8125-.1875-1.0625-.5L.25 4.75c-.375-.5-.3125-1.25.1875-1.625.5-.375 1.1875-.375 1.5625.125l5.375 6.125c.0625.0625.125.0625.25 0l5.375-6.125c.4375-.5 1.125-.5625 1.625-.125s.5625 1.125.125 1.625l-6.125 6.9375c-.25.25-.6875.4375-1.0625.4375z" fill="currentColor"/></svg>' },
        hide: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5625 2.8125c.4375 0 .8125.1875 1.0625.5l6.0625 6.875c.4375.4375.375 1.1875-.0625 1.625s-1.1875.375-1.625-.0625L7.5625 5.9375c-.0625-.0625-.125-.0625-.25 0l-5.3125 6c-.4375.5-1.125.5625-1.625.125s-.5625-1.125-.125-1.625l6.0625-6.875c.3125-.25.6875-.4375 1.125-.4375z" fill="currentColor"/></svg>' },
      },
      {
        headerHtml: 'Item de acordeón 4',
        html: '<p>Contenido del item 4</p>',
        show: { text: '' },
        hide: { text: '' },
      },
    ],
  },
};

export const ConHtmlEnLasCabecerasDeLosItems: Story = {
  args: {
    idPrefix: 'accordion-example-pointer-events-none',
    headingLevel: 3,
    items: [
      { headerHtml: '<span class="block pointer-events-none">Item de acordeón 1</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>', html: '<p>Contenido del item 1</p>' },
      { headerHtml: '<span class="block pointer-events-none">Item de acordeón 2</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>', html: '<p>Contenido del item 2</p>' },
      { headerHtml: '<span class="block pointer-events-none">Item de acordeón 3</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>', html: '<p>Contenido del item 3</p>' },
    ],
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    idPrefix: 'classes-example',
    headingLevel: 3,
    classes: 'px-lg pt-base border-t border-b border-neutral-base',
    heading: { text: 'Accordion example', classes: 'c-h2 mb-lg uppercase' },
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>', html: '<p>Contenido del item 1</p>' },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>', html: '<p>Contenido del item 2</p>', classes: 'p-sm bg-primary-light', open: true },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>', html: '<p>Contenido del item 3</p>' },
    ],
  },
};

export const ConAtributosAplicados: Story = {
  args: {
    idPrefix: 'attributes-example',
    headingLevel: 3,
    items: [
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>', html: '<p>Contenido del item 1</p>', attributes: { 'data-attr': 'accordion-item-test-a' } },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>', html: '<p>Contenido del item 2</p>', attributes: { 'data-attr': 'accordion-item-test-b' } },
      { headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>', html: '<p>Contenido del item 3</p>', attributes: { 'data-attr': 'accordion-item-test-c' } },
    ],
  },
};
