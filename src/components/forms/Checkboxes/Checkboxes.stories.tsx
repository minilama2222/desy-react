import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';

const meta: Meta<typeof Checkboxes> = {
  title: 'Forms/Checkboxes',
  component: Checkboxes,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkboxes>;

export const PorDefecto: Story = {
  args: {
    id: 'default',
    name: 'default',
    legendText: '¿Cómo prefieres que te contactemos?',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    items: [
      { value: 'correo-electronico', text: 'Correo electrónico' },
      { value: 'correo-postal', text: 'Correo postal' },
      { value: 'telefono', text: 'Teléfono' },
    ],
  },
};

export const ConIdYName: Story = {
  args: {
    id: 'with-id-and-name',
    name: 'with-id-and-name',
    legendText: '¿Cómo prefieres que te contactemos?',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    items: [
      { name: 'correo-electronico', id: 'correo-electronico-id', value: 'correo-electronico', text: 'Correo electrónico' },
      { name: 'correo-postal', id: 'correo-postal-id', value: 'correo-postal', text: 'Correo postal' },
    ],
  },
};

export const ConPistasEnLosItems: Story = {
  args: {
    id: 'hints-on-items',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendIsPageHeading: true,
    items: [
      {
        name: 'correo-electronico',
        id: 'correo-electronico-a',
        value: 'desy-correo-electronico',
        text: 'Correo electrónico',
        hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.',
      },
      {
        name: 'correo-postal',
        id: 'desy-correo-postal-a',
        value: 'desy-correo-postal-a',
        text: 'Correo postal',
        hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
      },
    ],
  },
};

export const ConLineasDivisorias: Story = {
  args: {
    id: 'has-dividers',
    legendText: '¿Cómo prefieres que te contactemos?',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    hasDividers: true,
    items: [
      {
        name: 'correo-electronico',
        id: 'correo-electronico-b',
        value: 'desy-correo-electronico',
        text: 'Correo electrónico',
      },
      {
        name: 'correo-postal',
        id: 'desy-correo-postal-b',
        value: 'desy-correo-postal-b',
        text: 'Correo postal',
        hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
      },
      {
        name: 'telefono',
        id: 'telefono-b',
        value: 'telefono',
        text: 'Teléfono',
        checked: true,
      },
      {
        name: 'correo-postal',
        id: 'desy-correo-postal-c',
        value: 'desy-correo-postal-c',
        text: 'Correo postal',
        hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
      },
    ],
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    id: 'classes',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [
      {
        name: 'correo-electronico',
        id: 'correo-electronico-c',
        value: 'desy-correo-electronico',
        text: 'Correo electrónico',
        hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.',
        classes: 'bg-primary-light',
      },
      {
        name: 'correo-postal',
        id: 'desy-correo-postal-d',
        value: 'desy-correo-postal-d',
        text: 'Correo postal',
        hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
        classes: 'bg-neutral-lighter',
      },
    ],
  },
};

export const ConItemDeshabilitado: Story = {
  args: {
    id: 'disabled-item',
    name: 'colours',
    items: [
      { value: 'correo-electronico', text: 'Correo electrónico' },
      { value: 'correo-postal', text: 'Correo postal', disabled: true, checked: true },
      { value: 'telefono', text: 'Teléfono', disabled: true },
    ],
  },
};

export const ConUnLegendDelTamanoDeUnEncabezadoH2: Story = {
  args: {
    id: 'medium-legend',
    name: 'medium-legend',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendClasses: 'c-h2',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
    items: [
      { value: 'correo-electronico', text: 'Correo electrónico' },
      { value: 'correp-postal', text: 'Correo postal' },
      { value: 'telefono', text: 'Teléfono' },
    ],
  },
};

export const SinFieldset: Story = {
  args: {
    id: 'without-fieldset',
    name: 'without-fieldset',
    items: [
      { value: 'correo-electronico', text: 'Correo electrónico' },
      { value: 'correp-postal', text: 'Correo postal' },
      { value: 'telefono', text: 'Teléfono' },
    ],
  },
};

export const ConUnaSolaOpcionUsandoAriaDescribedby: Story = {
  args: {
    id: 'describedby',
    name: 'describedby',
    errorMessageText: 'Por favor, debes aceptar los términos y condiciones. Soluciona el error.',
    items: [
      {
        value: 'acepto',
        html: 'Acepto los <a href="#" target="_blank" class="c-link" title="Se abre en ventana nueva del navegador">términos y condiciones</a>',
      },
    ],
  },
};

export const ConUnaSolaOpcionYPistaUsandoAriaDescribedby: Story = {
  args: {
    name: 't-and-c-with-hint',
    errorMessageText: 'Por favor, debes aceptar los términos y condiciones. Soluciona el error.',
    items: [
      {
        value: 'acepto',
        html: 'Acepto los <a href="#" target="_blank" class="c-link" title="Se abre en ventana nueva del navegador">términos y condiciones</a>',
        hintText: 'Puedes visualizarlos en ventana nueva del navegador',
      },
    ],
  },
};

export const ConFieldsetYMensajeDeError: Story = {
  args: {
    name: 'colours',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [
      { value: 'correo-electronico', text: 'Correo electrónico' },
      { value: 'correo-postal', text: 'Correo postal' },
      { value: 'telefono', text: 'Teléfono' },
    ],
  },
};

export const ConMensajeDeError: Story = {
  args: {
    id: 'error-message',
    name: 'error-message',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [
      { value: 'correo-electronico', text: 'Correo electrónico' },
      { value: 'correp-postal', text: 'Correo postal' },
      { value: 'telefono', text: 'Teléfono' },
    ],
  },
};

export const ConMensajeDeErrorYPistasEnLosItems: Story = {
  args: {
    id: 'error-and-hints',
    name: 'error-and-hints',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [
      {
        value: 'correo-electronico',
        text: 'Correo electrónico',
        hintText: 'Asegúrate de que nuestros correos no lleguen a la bandeja de spam.',
      },
      {
        value: 'correo-postal',
        text: 'Correo postal',
        hintText: 'Asegúrate de haber introducido correctamente tu dirección.',
      },
      {
        value: 'telefono',
        text: 'Teléfono',
        hintText: 'Sólo enviamos mensajes durante el día.',
      },
    ],
  },
};

export const ConUnTextoDeItemMuyLargo: Story = {
  args: {
    id: 'long-option',
    name: 'long-option',
    hintText: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    errorMessageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluciona el error.',
    legendText: 'Maecenas faucibus mollis interdum?',
    items: [
      {
        value: 'nullam',
        text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.',
      },
      {
        value: 'aenean',
        text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.',
      },
      {
        value: 'fusce',
        text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.',
      },
    ],
  },
};

export const Pequen: Story = {
  args: {
    id: 'small',
    name: 'peque',
    classes: 'c-checkboxes--sm',
    items: [
      {
        value: 'correo-electronico',
        text: 'Correo electrónico',
        classes: '-mt-base',
      },
      {
        value: 'correo-postal',
        text: 'Correo postal',
        classes: '-mt-base',
      },
      {
        value: 'telefono',
        text: 'Teléfono',
        classes: '-mt-base',
      },
    ],
  },
};

export const Indeterminado: Story = {
  args: {
    id: 'indeterminate',
    name: 'indeterminate',
    classes: 'c-checkboxes--sm',
    items: [
      {
        value: 'indeterminate',
        text: '1 elemento seleccionado',
        indeterminate: true,
        classes: '-mt-base',
      },
    ],
  },
};

export const IndeterminadoMarcado: Story = {
  args: {
    id: 'indeterminate-checked',
    name: 'indeterminate-checked',
    classes: 'c-checkboxes--sm',
    items: [
      {
        value: 'indeterminate-checked-item',
        text: '1 elemento seleccionado',
        indeterminate: true,
        checked: false,
        classes: '-mt-base',
      },
    ],
  },
};
