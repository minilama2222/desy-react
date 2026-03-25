import type { Meta, StoryObj } from '@storybook/react';
import { Radios } from './Radios';

const meta: Meta<typeof Radios> = {
  title: 'Forms/Radios',
  component: Radios,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radios>;

export const PorDefecto: Story = {
  args: {
    id: 'default',
    name: 'por defecto',
    value: 'no',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    hintText: 'Sólo puedes seleccionar un elemento.',
    items: [
      { value: 'si', text: 'Si' },
      { value: 'no', text: 'No' },
    ],
  },
};

export const EnLinea: Story = {
  args: {
    id: 'inline',
    classes: 'flex',
    name: 'inline',
    value: 'no',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    hintText: 'Sólo puedes seleccionar un elemento.',
    items: [
      { value: 'si', text: 'Si', classes: 'mr-sm' },
      { value: 'no', text: 'No', classes: 'mr-sm' },
    ],
  },
};

export const ConDeshabilitado: Story = {
  args: {
    id: 'example-disabled',
    name: 'example-disabled',
    value: 'si',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    hintText: 'Sólo puedes seleccionar un elemento.',
    items: [
      { value: 'si', text: 'Si', disabled: true },
      { value: 'no', text: 'No', disabled: true },
    ],
  },
};

export const ConUnLegendComoEncabezado: Story = {
  args: {
    id: 'legend-as-page-heading',
    name: 'legend-as-page-heading',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendClasses: 'c-h2',
    legendIsPageHeading: true,
    legendHeadingLevel: 2,
    hintText: 'Selecciona una de las opciones.',
    items: [
      {
        value: 'part-2',
        text: 'Por correo electrónico',
        hintText: 'Asegúrate de que nuestros correos no lleguen a la bandeja de spam.',
      },
      {
        value: 'part-3',
        text: 'Por correo postal',
        hintText: 'Asegúrate de haber introducido correctamente tu dirección.',
      },
    ],
  },
};

export const ConUnLegendDelTamanoDeUnEncabezadoH2: Story = {
  args: {
    id: 'medium-legend',
    name: 'medium-legend',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendClasses: 'c-h2',
    hintText: 'Selecciona una de las opciones.',
    items: [
      {
        value: 'part-2',
        text: 'Por correo electrónico',
        hintText: 'Asegúrate de que nuestros correos no lleguen a la bandeja de spam.',
      },
      {
        value: 'part-3',
        text: 'Por correo postal',
        hintText: 'Asegúrate de haber introducido correctamente tu dirección.',
      },
    ],
  },
};

export const ConUnDivisor: Story = {
  args: {
    id: 'example-divider',
    name: 'example-divider',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [
      { value: 'correo-electronico', text: 'Correo electrónico' },
      { value: 'correo-postal', text: 'Correo postal' },
      { value: 'divider-o-bien', divider: 'o bien' },
      { value: 'telefono', text: 'Teléfono' },
    ],
  },
};

export const ConPistasEnLosItems: Story = {
  args: {
    id: 'hints-on-items',
    name: 'hints-on-items',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendIsPageHeading: true,
    items: [
      {
        value: 'correo-electronico',
        text: 'Correo electrónico',
        hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.',
      },
      {
        value: 'correo-postal',
        text: 'Correo postal',
        hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
      },
    ],
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    id: 'classes',
    name: 'classes',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendIsPageHeading: true,
    items: [
      {
        value: 'correo-electronico',
        text: 'Correo electrónico',
        hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.',
        classes: 'bg-primary-light',
      },
      {
        value: 'correo-postal',
        text: 'Correo postal',
        hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
        classes: 'bg-neutral-lighter',
      },
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

export const ConFieldsetYMensajeDeError: Story = {
  args: {
    id: 'fieldset-and-error',
    name: 'fieldset-and-error',
    value: 'no',
    errorMessageText: 'Tienes que seleccionar al menos una opción',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    items: [
      { value: 'si', text: 'Si' },
      { value: 'no', text: 'No' },
    ],
  },
};

export const ConUnTextoDeItemMuyLargo: Story = {
  args: {
    id: 'very-long',
    name: 'very-long',
    hintText: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    errorMessageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    classes: 'c-radios--sm',
    items: [
      {
        value: 'si',
        text: 'Si',
        classes: '-mt-base',
      },
      {
        value: 'no',
        text: 'No',
        classes: '-mt-base',
      },
    ],
  },
};
