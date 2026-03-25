import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const PorDefecto: Story = {
  args: {
    name: 'more-detail-a',
    id: 'more-detail-a',
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista o texto descriptivo.',
  },
};

export const Deshabilitado: Story = {
  args: {
    name: 'more-detail-b',
    id: 'more-detail-b',
    disabled: true,
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista o texto descriptivo.',
  },
};

export const ConMensajeDeError: Story = {
  args: {
    name: 'no-ni-reason',
    id: 'no-ni-reason',
    labelText: 'Esto es un label',
    errorMessageText: 'Esto es un mensaje de error',
  },
};

export const ConValorPorDefecto: Story = {
  args: {
    id: 'full-address-a',
    name: 'address-a',
    value: 'Calle Rosales 25. 2 izda',
    labelText: 'Dirección completa',
  },
};

export const ConNumeroDeFilasPersonalizada: Story = {
  args: {
    id: 'full-address-b',
    name: 'address-b',
    labelText: 'Dirección completa',
    rows: 8,
  },
};

export const ConClasesDeFormGroupOpcionales: Story = {
  args: {
    id: 'textarea-with-page-heading-b',
    name: 'address',
    labelText: 'Dirección completa',
    formGroupClasses: 'p-base bg-primary-light',
  },
};

export const ConValoresDeAutocompletado: Story = {
  args: {
    id: 'textarea-with-autocomplete-attribute',
    name: 'address',
    labelText: 'Dirección completa',
    autoComplete: 'street-address',
  },
};

export const Placeholder: Story = {
  args: {
    id: 'con-placeholder',
    name: 'placeholder',
    labelText: 'Valor',
    placeholder: 'Esto es un placeholder',
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    formGroupClasses: 'lg:flex lg:flex-wrap lg:items-start lg:gap-x-base',
    labelText: 'Label inline:',
    labelClasses: 'lg:py-sm lg:mt-sm',
    id: 'classes-applied-b',
    name: 'classes-applied-b',
    errorMessageText: 'Esto es un mensaje de error',
    errorMessageClasses: 'order-1 w-full pt-sm',
    className: 'lg:flex-1',
  },
};
