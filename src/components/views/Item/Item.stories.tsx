import type { Meta, StoryObj } from '@storybook/react';
import { Item } from './Item';

const meta: Meta<typeof Item> = {
  title: 'Views/Item',
  component: Item,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Item>;

export const PorDefecto: Story = {
  args: {
    titleItem: { text: 'Entidades locales de la Comunidad Autónoma de Aragón' },
  },
};

export const PorDefectoConHTML: Story = {
  args: {
    titleItem: { html: "Las entidades beneficiarias deberán tener su sede y actividad <strong class=' font-bold '>principal en Aragón.</strong>" },
  },
};

export const ConEncabezado: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Entidades locales de la Comunidad Autónoma de Aragón' },
  },
};

export const ConDescripcion: Story = {
  args: {
    headingLevel: 4,
    titleItem: { html: 'Registro de alta de la asociación' },
    description: { html: 'Documento acreditativo de registro de la <strong class=\' font-bold \'>asociación</strong>' },
  },
};

export const ConItems: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Entidades locales de la Comunidad Autónoma de Aragón' },
    items: ['Desde modelo', 'Obligatorio previo a resolución', 'Condicionado'],
  },
};

export const ConContenido: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Registro de alta de la asociación' },
    content: { html: "Modelo: <a class=' c-link break-all ' href=' # '>Modelo de fianza (PDF, 20Kb)</a> ", classes: 'text-neutral-dark' },
  },
};

export const ConAcciones: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Registro de alta de la asociación' },
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-1a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-1a">Eliminar</button></li>
        <li><button id="b-1b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-1b">Editar</button></li>
      </ul>
    ),
  },
};

export const Arrastrable: Story = {
  args: {
    titleItem: { text: 'Entidades locales de la Comunidad Autónoma de Aragón' },
    isDraggable: true,
  },
};

export const Bloqueado: Story = {
  args: {
    titleItem: { text: 'Entidades locales de la Comunidad Autónoma de Aragón' },
    isLocked: true,
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-2a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-2a">Eliminar</button></li>
        <li><button id="b-2b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-2b">Editar</button></li>
      </ul>
    ),
  },
};

export const ConIconoTipoDocumento: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Resolución de años anteriores' },
    content: { html: "<a class=' c-link break-all ' href=' # '>Resolución años anteriores (PDF, 20Kb)</a> " },
    icon: 'document',
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-3a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-3a">Eliminar</button></li>
        <li><button id="b-3b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-3b">Editar</button></li>
      </ul>
    ),
  },
};

export const ConIconoTipoEnlace: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Lista de admitidos y excluidos de la convocatoria publicado en el BOA' },
    content: { html: "<a class=' c-link break-all ' href=' # '>Lista completa de admitidos (PDF, 20Kb)</a> " },
    icon: 'link',
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-4a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-4a">Eliminar</button></li>
        <li><button id="b-4b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-4b">Editar</button></li>
      </ul>
    ),
  },
};

export const ConIconoTipoPortapapeles: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Datos de la empresa' },
    items: ['12 campos', 'Con dependencia', 'Tabla de datos'],
    icon: 'clipboard',
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-5a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-5a">Eliminar</button></li>
        <li><button id="b-5b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-5b">Editar</button></li>
      </ul>
    ),
  },
};

export const ConIconoTipoDocumentoAlineadoVerticalmenteArriba: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Resolución de años anteriores' },
    content: { text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` },
    icon: 'document',
    iconContainerClasses: 'self-start h-full mr-base',
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-6a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-6a">Eliminar</button></li>
        <li><button id="b-6b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-6b">Editar</button></li>
      </ul>
    ),
  },
};

export const ArrastrableConIconoTipoDocumento: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Resolución de años anteriores' },
    content: { html: "<a class=' c-link break-all ' href=' # '>Resolución años anteriores (PDF, 20Kb)</a> " },
    icon: 'document',
    isDraggable: true,
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-7a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-7a">Eliminar</button></li>
        <li><button id="b-7b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-7b">Editar</button></li>
      </ul>
    ),
  },
};

export const ConClasesDescripcionItemsContenidoYAcciones: Story = {
  args: {
    headingLevel: 4,
    titleItem: { text: 'Registro de alta de la asociación', classes: 'font-bold' },
    description: { text: 'Documento acreditativo de registro de alta de la asociación' },
    items: ['Desde modelo', 'Obligatorio previo a resolución', 'Condicionado'],
    content: { html: "Modelo: <a class=' c-link break-all ' href=' # '>Modelo de fianza (PDF, 20Kb)</a> ", classes: 'text-neutral-dark' },
    children: (
      <ul className="flex flex-wrap gap-sm">
        <li><button id="b-8a" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-8a">Eliminar</button></li>
        <li><button id="b-8b" className="c-button c-button--sm c-button--transparent" aria-labelledby="b-8b">Editar</button></li>
      </ul>
    ),
  },
};
