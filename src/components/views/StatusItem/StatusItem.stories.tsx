import type { Meta, StoryObj } from '@storybook/react';
import { StatusItem } from './StatusItem';

const meta: Meta<typeof StatusItem> = {
  title: 'Views/StatusItem',
  component: StatusItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusItem>;

export const PorDefecto: Story = {
  args: {
    id: 'default',
    title: { text: 'Título' },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> item del Título</span></button>,
  },
};

export const PorDefectoSoloItems: Story = {
  args: {
    id: 'only-items',
    items: [
      { term: { text: 'término' }, definition: { text: 'definición' } },
      { term: { text: 'término' }, definition: { text: 'definición' } },
      { term: { text: 'término' }, definition: { text: 'definición' } },
    ],
    status: { text: 'Correcto', icon: { type: 'success' } },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> los datos de término y definición y el resto</span></button>,
  },
};

export const ConTituloHTML: Story = {
  args: {
    id: 'with-title-html',
    title: { html: 'Autorización para la consulta de datos de las personas de la unidad familiar. <span class=\'text-neutral-dark\'>(Documento condicionado)</span>' },
    children: <button className="c-button c-button--transparent">Aportar<span className="sr-only"> Autorización para la consulta de datos de las personas de la unidad familiar</span></button>,
  },
};

export const ConPista: Story = {
  args: {
    id: 'with-hint',
    title: { text: 'Personas de la unidad familiar' },
    hint: { text: '2 personas añadidas' },
    status: { text: 'Aportado', icon: { type: 'success' } },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> personas de la unidad familiar</span></button>,
  },
};

export const ConPistaHTML: Story = {
  args: {
    id: 'with-hint-html',
    title: { text: 'Autorización para la consulta de datos de las personas de la unidad familiar' },
    hint: { html: "<a href='#' class='c-link'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140' width='1em' height='1em' class='inline-block self-center w-4 h-4 mr-sm no-underline' role='img' aria-hidden='true'><path d='M100.3 52.2a7.49 7.49 0 00-10.6 0L77.5 64.39V7.5a7.5 7.5 0 00-15 0v56.89L50.3 52.2a7.5 7.5 0 10-10.6 10.6l25 25a7.49 7.49 0 0010.6 0l25-25a7.49 7.49 0 000-10.6zM130 95a10 10 0 00-10 10v12.5a2.5 2.5 0 01-2.5 2.5h-95a2.5 2.5 0 01-2.5-2.5V105a10 10 0 00-20 0v15a20 20 0 0020 20h100a20 20 0 0020-20v-15a10 10 0 00-10-10z' fill='currentColor'/></svg>Descargar modelo</a>" },
    children: <button className="c-button c-button--transparent">Aportar<span className="sr-only"> Autorización para la consulta de datos de las personas de la unidad familiar</span></button>,
  },
};

export const ConEstadoSimple: Story = {
  args: {
    id: 'with-status-simple',
    title: { text: 'Datos adicionales del solicitante' },
    status: { text: 'Iniciado' },
    children: <button className="c-button c-button--transparent">Rellenar<span className="sr-only"> datos adicionales del solicitante</span></button>,
  },
};

export const ConEstadoExito: Story = {
  args: {
    id: 'with-status-success',
    title: { text: 'Datos adicionales del solicitante' },
    status: { text: 'Aportado', icon: { type: 'success' } },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> datos adicionales del solicitante</span></button>,
  },
};

export const ConEstadoAlerta: Story = {
  args: {
    id: 'with-status-alert',
    title: { text: 'Datos adicionales del solicitante' },
    errorMessage: { text: 'Es necesario aportar este documento para enviar el trámite', classes: 'my-sm text-alert-base' },
    status: { text: 'Incompleto', icon: { type: 'alert' }, classes: 'text-alert-base' },
    className: 'border-l-4 border-alert-base',
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> datos adicionales del solicitante</span></button>,
  },
};

export const ConEstadoCargando: Story = {
  args: {
    id: 'with-status-loading',
    title: { text: 'Datos adicionales del solicitante' },
    status: { text: 'Subiendo (20%)', icon: { type: 'loading' } },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> datos adicionales del solicitante</span></button>,
  },
};

export const ConEstadoError: Story = {
  args: {
    id: 'with-status-error',
    title: { text: 'Datos adicionales del solicitante' },
    errorMessage: { text: 'Se ha producido un error al subir el archivo', classes: 'my-sm text-alert-base' },
    status: { text: 'Error', icon: { type: 'error' }, classes: 'text-alert-base' },
    className: 'border-l-4 border-alert-base',
    children: <button className="c-button c-button--transparent">Ver<span className="sr-only"> datos adicionales del solicitante</span></button>,
  },
};

export const ConHTMLEnLaDefinicion: Story = {
  args: {
    id: 'with-html-in-definition',
    items: [
      {
        term: { text: 'Acreditación' },
        definition: { html: 'Mediante archivo adjunto <a href=\'#\' class=\'c-link inline-block\'>Modelo de solicitud (PDF, 200Kb)</a>' },
      },
    ],
    status: { text: 'Completo', icon: { type: 'success' } },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> acreditación</span></button>,
  },
};

export const Incompleto: Story = {
  args: {
    id: 'incompleto-status-item',
    items: [
      { term: { text: 'Nombre' }, definition: { text: 'Ana' } },
      { term: { text: 'Apellidos' }, definition: { text: 'Pérez Escribano' } },
      { term: { text: 'Número de identificación' }, definition: { text: '72882918B' } },
    ],
    status: { text: 'Incompleto', icon: { type: 'alert' } },
    className: 'border-l-4 border-alert-base',
    children: <button className="c-button c-button--transparent">Rellenar<span className="sr-only"> datos adicionales del solicitante</span></button>,
  },
};
