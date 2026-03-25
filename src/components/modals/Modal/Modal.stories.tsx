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
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{ text: 'De acuerdo, continuar', classes: 'c-button--primary' }],
    isDismissible: true,
  },
};

export const ConButtonLoader: Story = {
  args: {
    id: 'button-loader-example',
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{ text: 'De acuerdo, continuar', state: 'is-loading', loaderClasses: 'c-button-loader--primary c-button-loader--is-loading' }],
    isDismissible: true,
  },
};

export const ConEncabezadoDeNivel3: Story = {
  args: {
    id: 'headinglevel-example',
    title: 'Esto es un h3',
    headingLevel: 3,
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{ text: 'De acuerdo, continuar', classes: 'c-button--primary' }],
    isDismissible: true,
  },
};

export const ConAccionSecundaria: Story = {
  args: {
    id: 'secondary-action-example',
    title: 'Editar servicio publicado',
    descriptionHtml: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>',
    itemsPrimary: [{ text: 'Editar servicio', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
  },
};

export const ConCaller: Story = {
  args: {
    id: 'caller-example',
    title: 'Editar servicio publicado',
    descriptionHtml: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>',
    itemsPrimary: [{ text: 'Editar servicio', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
  },
};

export const ConMuchasAcciones: Story = {
  args: {
    id: 'many-actions-example',
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{ text: 'Guardar cambios y publicar', classes: 'c-button--primary' }, { text: 'Guardar cambios' }],
    itemsSecondary: [{ text: 'Más información', classes: 'c-button--transparent' }, { html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
    className: 'max-w-4xl',
  },
};

export const ConMuchasAccionesYBotonLoader: Story = {
  args: {
    id: 'many-actions-is-button-loader-example',
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [
      { text: 'Guardar cambios y publicar', state: 'is-success', loaderClasses: 'c-button-loader--primary c-button-loader--is-success' },
      { text: 'Guardar cambios', state: 'is-loading' },
    ],
    itemsSecondary: [
      { text: 'Más información', state: 'is-loading', loaderClasses: 'c-button-loader--transparent c-button-loader--is-loading' },
      { html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>', state: 'is-success', loaderClasses: 'c-button-loader--is-success' },
    ],
    isDismissible: true,
    className: 'max-w-4xl',
  },
};

export const ConIconoDeTipoBorrarEliminar: Story = {
  args: {
    id: 'icon-type-A-example',
    title: 'Borrar servicio',
    description: 'Esta acción no se puede deshacer ¿Estás seguro?',
    itemsPrimary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    itemsSecondary: [{ text: 'Si, borrar servicio', classes: 'c-button--alert' }],
    isDismissible: true,
    icon: 'delete',
  },
};

export const ConIconoDeTipoDescartar: Story = {
  args: {
    id: 'icon-type-B-example',
    title: 'Descartar cambios',
    description: 'Si descartas los cambios, perderás el trabajo realizado en este servicio. ¿Estás seguro?',
    itemsPrimary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    itemsSecondary: [{ text: 'Si, descartar cambios', classes: 'c-button--alert' }],
    isDismissible: true,
    icon: 'discard',
  },
};

export const ConIconoDeTipoCambios: Story = {
  args: {
    id: 'icon-type-C-example',
    title: 'Hay cambios sin guardar',
    description: 'Si sales de la pantalla de edición sin guardar, perderás los cambios realizados.',
    itemsPrimary: [{ text: 'Guardar y salir', classes: 'c-button--primary' }],
    itemsSecondary: [{ text: 'Descartar cambios y salir' }],
    isDismissible: true,
    icon: 'changes',
  },
};

export const ConIconoDeTipoEditar: Story = {
  args: {
    id: 'icon-type-D-example',
    title: 'Editar servicio publicado',
    descriptionHtml: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>',
    itemsPrimary: [{ text: 'Lo sé, quiero editarlo', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
    icon: 'edit',
  },
};

export const ConIconoDeTipoPublicar: Story = {
  args: {
    id: 'icon-type-E-example',
    title: 'Publicar',
    description: 'Se van a publicar todos los elementos de este servicio que están pendientes de publicación.',
    itemsPrimary: [{ text: 'Publicar', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
    icon: 'publish',
  },
};

export const ConIconoPersonalizado: Story = {
  args: {
    id: 'custom-icon-example',
    title: '¿Estás seguro de querer cambiar de estado a múltiples archivos?',
    titleClasses: 'c-h2 mt-base focus:outline-hidden focus:underline',
    descriptionHtml: '<p class="c-paragraph-base">Si el contenido de la modal es muy extenso, hay que alinear los textos a la izquierda para mejorar la accesibilidad.</p><p class="c-paragraph-base">Acabas de seleccionar una gran cantidad de archivos. Si ejecutas la acción, el proceso puede tardar varios minutos. Durante el proceso <strong>no cierres la ventana del navegador ni naveges a otra página</strong> en esta pestaña.</p><p>¿Estás seguro de iniciar el proceso ahora?</p>',
    descriptionClasses: 'mb-lg text-left',
    itemsPrimary: [{ text: 'Si, comenzar proceso', classes: 'c-button--primary' }],
    itemsSecondary: [{ html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>' }],
    isDismissible: true,
  },
};
