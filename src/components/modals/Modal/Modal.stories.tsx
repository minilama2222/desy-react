import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Modals/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const PorDefecto: Story = {
  args: {
    id: 'default-example',
    title: { text: 'Aviso' },
    description: { text: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.' },
    itemsPrimary: [{ text: 'De acuerdo, continuar', classes: 'c-button--primary' }],
    isDismissible: true,
  },
};

export const ConButtonLoader: Story = {
  args: {
    id: 'button-loader-example',
    title: { text: 'Aviso' },
    description: { text: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.' },
    itemsPrimary: [{ text: 'De acuerdo, continuar', isButtonLoader: true, state: 'is-loading', classes: 'c-button-loader--primary c-button-loader--is-loading' }],
    isDismissible: true,
  },
};

export const ConEncabezadoDeNivel3: Story = {
  args: {
    id: 'headinglevel-example',
    title: { text: 'Esto es un h3' },
    headingLevel: 3,
    description: { text: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.' },
    itemsPrimary: [{ text: 'De acuerdo, continuar', classes: 'c-button--primary' }],
    isDismissible: true,
  },
};

export const ConAccionSecundaria: Story = {
  args: {
    id: 'secondary-action-example',
    title: { text: 'Editar servicio publicado' },
    description: { html: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>' },
    itemsPrimary: [{ text: 'Editar servicio', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
  },
};

export const ConCaller: Story = {
  args: {
    id: 'caller-example',
    title: { text: 'Editar servicio publicado' },
    description: { html: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>' },
    itemsPrimary: [{ text: 'Editar servicio', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
  },
};

export const ConMuchasAcciones: Story = {
  args: {
    id: 'many-actions-example',
    title: { text: 'Aviso' },
    description: { text: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.' },
    itemsPrimary: [{ text: 'Guardar cambios y publicar', classes: 'c-button--primary' }, { text: 'Guardar cambios' }],
    itemsSecondary: [{ text: 'Más información', classes: 'c-button--transparent' }, { html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
    classes: 'max-w-4xl',
  },
};

export const ConMuchasAccionesYBotonLoader: Story = {
  args: {
    id: 'many-actions-is-button-loader-example',
    title: { text: 'Aviso' },
    description: { text: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.' },
    itemsPrimary: [
      { text: 'Guardar cambios y publicar', isButtonLoader: true, state: 'is-success', classes: 'c-button-loader--primary c-button-loader--is-success' },
      { text: 'Guardar cambios', isButtonLoader: true },
    ],
    itemsSecondary: [
      { text: 'Más información', isButtonLoader: true, state: 'is-loading', classes: 'c-button-loader--transparent c-button-loader--is-loading' },
      { html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>', isButtonLoader: true, state: 'is-success', classes: 'c-button-loader--is-success' },
    ],
    isDismissible: true,
    classes: 'max-w-4xl',
  },
};

export const ConIconoDeTipoBorrarEliminar: Story = {
  args: {
    id: 'icon-type-A-example',
    title: { text: 'Borrar servicio' },
    description: { text: 'Esta acción no se puede deshacer ¿Estás seguro?' },
    itemsPrimary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    itemsSecondary: [{ text: 'Si, borrar servicio', classes: 'c-button--alert' }],
    isDismissible: true,
    icon: { type: 'delete' },
  },
};

export const ConIconoDeTipoDescartar: Story = {
  args: {
    id: 'icon-type-B-example',
    title: { text: 'Descartar cambios' },
    description: { text: 'Si descartas los cambios, perderás el trabajo realizado en este servicio. ¿Estás seguro?' },
    itemsPrimary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    itemsSecondary: [{ text: 'Si, descartar cambios', classes: 'c-button--alert' }],
    isDismissible: true,
    icon: { type: 'discard' },
  },
};

export const ConIconoDeTipoCambios: Story = {
  args: {
    id: 'icon-type-C-example',
    title: { text: 'Hay cambios sin guardar' },
    description: { text: 'Si sales de la pantalla de edición sin guardar, perderás los cambios realizados.' },
    itemsPrimary: [{ text: 'Guardar y salir', classes: 'c-button--primary' }],
    itemsSecondary: [{ text: 'Descartar cambios y salir' }],
    isDismissible: true,
    icon: { type: 'changes' },
  },
};

export const ConIconoDeTipoEditar: Story = {
  args: {
    id: 'icon-type-D-example',
    title: { text: 'Editar servicio publicado' },
    description: { html: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>' },
    itemsPrimary: [{ text: 'Lo sé, quiero editarlo', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
    icon: { type: 'edit' },
  },
};

export const ConIconoDeTipoPublicar: Story = {
  args: {
    id: 'icon-type-E-example',
    title: { text: 'Publicar' },
    description: { text: 'Se van a publicar todos los elementos de este servicio que están pendientes de publicación.' },
    itemsPrimary: [{ text: 'Publicar', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
    icon: { type: 'publish' },
  },
};

export const ConIconoPersonalizado: Story = {
  args: {
    id: 'custom-icon-example',
    title: { text: '¿Estás seguro de querer cambiar de estado a múltiples archivos?', classes: 'c-h2 mt-base focus:outline-hidden focus:underline' },
    description: { html: '<p class="c-paragraph-base">Si el contenido de la modal es muy extenso, hay que alinear los textos a la izquierda para mejorar la accesibilidad.</p><p class="c-paragraph-base">Acabas de seleccionar una gran cantidad de archivos. Si ejecutas la acción, el proceso puede tardar varios minutos. Durante el proceso <strong>no cierres la ventana del navegador ni naveges a otra página</strong> en esta pestaña.</p><p>¿Estás seguro de iniciar el proceso ahora?</p>', classes: 'mb-lg text-left' },
    itemsPrimary: [{ text: 'Si, comenzar proceso', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
    icon: { html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="block w-16 h-16 text-primary-light" aria-label="Pregunta" focusable="false"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,19a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,19Zm1.6-6.08a1,1,0,0,0-.6.92,1,1,0,0,1-2,0,3,3,0,0,1,1.8-2.75A2,2,0,1,0,10,9.25a1,1,0,0,1-2,0,4,4,0,1,1,5.6,3.67Z" fill="currentColor"></path></svg>' },
  },
};
