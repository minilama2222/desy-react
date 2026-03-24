import type { Meta, StoryObj } from '@storybook/react';
import { HeaderMini } from './HeaderMini';

const meta: Meta<typeof HeaderMini> = {
  title: 'Navigation/HeaderMini',
  component: HeaderMini,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Minimal header component displaying the Aragon logo and optional top/bottom content.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeaderMini>;

export const Default: Story = {
  args: {},
};

export const WithChildren: Story = {
  args: {
    children: (
      <span className="text-sm text-neutral-dark">
        Aplicación de ejemplo
      </span>
    ),
  },
};

export const WithSuperContent: Story = {
  args: {
    super: (
      <div className="w-full bg-primary-dark text-white text-xs px-base py-1">
        <div className="container mx-auto">
          Trámites en línea del Gobierno de Aragón
        </div>
      </div>
    ),
  },
};

export const WithSubContent: Story = {
  args: {
    sub: (
      <div className="bg-neutral-lighter border-b border-neutral-base px-base py-sm">
        <div className="container mx-auto text-sm text-neutral-dark">
          Navegación secundaria o información adicional
        </div>
      </div>
    ),
  },
};

export const WithoutContainer: Story = {
  args: {
    hasContainer: false,
    children: (
      <span className="text-sm text-neutral-dark ml-4">
        Sin contenedor
      </span>
    ),
  },
};

export const FullExample: Story = {
  args: {
    homepageUrl: '/',
    super: (
      <div className="w-full bg-primary-dark text-white text-xs px-base py-1">
        <div className="container mx-auto flex justify-between">
          <span>Portal del Gobierno de Aragón</span>
          <span>Accesibilidad</span>
        </div>
      </div>
    ),
    children: (
      <span className="ml-4 text-sm font-semibold text-primary-dark">
        Mi Aplicación
      </span>
    ),
    sub: (
      <div className="bg-neutral-lighter border-b border-neutral-base px-base py-sm">
        <div className="container mx-auto flex gap-base text-sm">
          <a href="#" className="text-primary-dark hover:underline">Inicio</a>
          <a href="#" className="text-neutral-dark hover:underline">Trámites</a>
          <a href="#" className="text-neutral-dark hover:underline">Empresas</a>
        </div>
      </div>
    ),
  },
};
