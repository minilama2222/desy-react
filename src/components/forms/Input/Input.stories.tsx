import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const PorDefecto: Story = {
  args: {
    labelText: 'Esto es un label',
    id: 'input-example-a',
    name: 'test-name',
  },
};

export const Deshabilitado: Story = {
  args: {
    labelText: 'Esto es un label',
    id: 'input-example-b',
    name: 'test-name',
    disabled: true,
  },
};

export const ConPista: Story = {
  args: {
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    id: 'input-with-hint-text',
    name: 'test-name',
  },
};

export const ConMensajeDeError: Story = {
  args: {
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    id: 'input-with-error-message-a',
    name: 'test-name',
    errorMessageText: 'Esto es un mensaje de error',
  },
};

export const ConMensajeDeErrorConIdPersonalizado: Story = {
  args: {
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    id: 'input-with-error-message-b',
    name: 'test-name',
    errorId: 'custom-error-id',
    errorMessageText: 'Esto es un mensaje de error',
  },
};

export const ConClaseDeAnchuraCompleta: Story = {
  args: {
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    id: 'input-width-full',
    name: 'test-width-full',
    className: 'w-full',
  },
};

export const ConClaseDeAnchura12: Story = {
  args: {
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    id: 'input-width-half',
    name: 'test-width-half',
    className: 'w-1/2',
  },
};

export const ConClaseWidth32: Story = {
  args: {
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    id: 'input-width-32',
    name: 'test-width-32',
    className: 'w-32',
  },
};

export const ConClasesDeFormGroupOpcionales: Story = {
  args: {
    labelText: 'Esto es un label',
    id: 'input-example-c',
    name: 'test-name',
    formGroupClasses: 'p-base bg-primary-light',
  },
};

export const ConValoresDeAutocompletado: Story = {
  args: {
    labelText: 'Código postal',
    id: 'input-with-autocomplete-attribute',
    name: 'postcode',
    autoComplete: 'postal-code',
  },
};

export const ConAtributoPattern: Story = {
  args: {
    labelText: 'Solo números',
    id: 'input-with-pattern-attribute',
    name: 'numbers-only',
    type: 'tel',
    pattern: '[0-9]*',
  },
};

export const CampoObligatorio: Story = {
  args: {
    labelText: 'Campo obligatorio *',
    id: 'input-with-required-attribute',
    name: 'input-with-required-attribute',
  },
};

export const Peque: Story = {
  args: {
    labelText: 'Input peque',
    id: 'classes-applied-a',
    name: 'classes-applied-a',
    className: 'c-input--sm',
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    formGroupClasses: 'lg:flex lg:flex-wrap lg:items-center lg:gap-x-base',
    labelText: 'Label en línea:',
    labelClasses: 'lg:py-sm lg:mt-sm',
    id: 'classes-applied-b',
    name: 'classes-applied-b',
    errorMessageText: 'Esto es un mensaje de error',
    errorMessageClasses: 'order-1 w-full pt-sm',
    className: 'lg:flex-1',
  },
};

export const TipoPersonalizado: Story = {
  args: {
    labelText: 'Input de tipo número',
    id: 'custom-type',
    name: 'custom-type',
    type: 'number',
  },
};

export const Valor: Story = {
  args: {
    labelText: 'Esto es un label',
    id: 'value',
    name: 'valor',
    value: 'Esto es un valor',
  },
};

export const Placeholder: Story = {
  args: {
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    id: 'con-placeholder',
    name: 'placeholder',
    placeholder: 'Esto es un placeholder',
  },
};

export const ConDescribedBy: Story = {
  args: {
    labelText: 'Con describedBy',
    id: 'with-describedby-a',
    name: 'with-describedby-a',
    describedBy: 'input-example-a',
  },
};

export const PistaConDescribedBy: Story = {
  args: {
    labelText: 'Pista con describedBy',
    hintText: 'Esto es una pista.',
    id: 'with-describedby-b',
    name: 'with-describedby-b',
    describedBy: 'input-example-a',
  },
};

export const Inputmode: Story = {
  args: {
    labelText: 'Inputmode',
    id: 'con-inputmode',
    name: 'inputmode',
    inputMode: 'email',
  },
};
