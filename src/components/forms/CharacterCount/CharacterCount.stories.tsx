import type { Meta, StoryObj } from '@storybook/react';
import { CharacterCount } from './CharacterCount';

const meta: Meta<typeof CharacterCount> = {
  title: 'Forms/CharacterCount',
  component: CharacterCount,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

export const PorDefecto: Story = {
  args: {
    name: 'more-detail-a',
    id: 'more-detail-a',
    maxlength: 250,
    labelText: 'Esto es un label',
  },
};

export const Placeholder: Story = {
  args: {
    name: 'con-placeholder',
    id: 'con-placeholder',
    maxlength: 250,
    placeholder: 'Esto es un placeholder',
    labelText: 'Esto es un label',
  },
};

export const Deshabilitado: Story = {
  args: {
    name: 'more-detail-b',
    id: 'more-detail-b',
    maxlength: 250,
    disabled: true,
    labelText: 'Esto es un label',
  },
};

export const ConPista: Story = {
  args: {
    name: 'with-hint',
    id: 'with-hint',
    maxlength: 250,
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
  },
};

export const ConValorPorDefecto: Story = {
  args: {
    id: 'with-default-value',
    name: 'default-value',
    maxlength: 100,
    labelText: 'Dirección completa',
    value: 'Paseo María Agustín, 36,\n 50004 Zaragoza\n',
  },
};

export const ConValorPorDefectoExcediendoElLimite: Story = {
  args: {
    id: 'exceeding-characters',
    name: 'exceeding',
    maxlength: 250,
    value: 'Paseo María Agustín, 36,\n 50004 Zaragoza\n',
    labelText: 'Dirección completa',
    errorMessageText: 'Por favor, no exceder el límite máximo. Error en el campo.',
  },
};

export const ConNumeroDeFilasPersonalizada: Story = {
  args: {
    id: 'custom-rows',
    name: 'custom',
    maxlength: 250,
    labelText: 'Dirección completa',
    rows: 8,
  },
};

export const ConContadorDePalabras: Story = {
  args: {
    id: 'word-count',
    name: 'word-count',
    maxwords: 10,
    labelText: 'Dirección completa',
  },
};

export const ConThreshold: Story = {
  args: {
    id: 'with-threshold',
    name: 'with-threshold',
    maxlength: 250,
    threshold: 75,
    labelText: 'Dirección completa',
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    formGroupClasses: 'lg:flex lg:flex-wrap lg:items-start lg:gap-x-base mb-0',
    labelText: 'Inline label:',
    labelClasses: 'lg:py-sm lg:mt-sm',
    id: 'classes-applied-b',
    name: 'classes-applied-b',
    maxlength: 250,
    errorMessageText: 'Esto es un mensaje de error',
    errorMessageClasses: 'order-1 w-full pt-sm',
    classes: 'lg:flex-1',
  },
};
