import type { Meta, StoryObj } from '@storybook/react';
import { MediaObject, MediaObjectFigure } from './MediaObject';

const meta: Meta<typeof MediaObject> = {
  title: 'Views/MediaObject',
  component: MediaObject,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'MediaObject displays a figure (image, icon) alongside text content with flexible layout options.',
      },
    },
  },
  argTypes: {
    center: { control: 'boolean' },
    reverse: { control: 'boolean' },
    figureClasses: { control: 'text' },
    contentClasses: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MediaObject>;

const sampleImage = 'https://picsum.photos/120/120';

export const Default: Story = {
  render: () => (
    <MediaObject figureHtml={`<img src="${sampleImage}" alt="Imagen de ejemplo" class="rounded-lg" />`}>
      <h3 className="font-semibold text-lg">Título del contenido</h3>
      <p className="text-neutral-dark">
        Este es un párrafo de ejemplo que acompaña a la imagen. El componente MediaObject
        permite mostrar imágenes o iconos junto con contenido de texto de forma flexible.
      </p>
    </MediaObject>
  ),
};

export const WithCenteredContent: Story = {
  render: () => (
    <MediaObject
      figureHtml={`<img src="${sampleImage}" alt="Imagen centrada" class="rounded-full" />`}
      center
    >
      <h3 className="font-semibold text-lg">Contenido centrado</h3>
      <p className="text-neutral-dark">
        El contenido está centrado verticalmente con la imagen.
      </p>
    </MediaObject>
  ),
};

export const WithReversedOrder: Story = {
  render: () => (
    <MediaObject
      figureHtml={`<img src="${sampleImage}" alt="Imagen invertida" class="rounded-lg" />`}
      reverse
    >
      <h3 className="font-semibold text-lg">Orden invertido</h3>
      <p className="text-neutral-dark">
        El contenido aparece antes que la imagen.
      </p>
    </MediaObject>
  ),
};

export const WithFigureSlot: Story = {
  render: () => (
    <MediaObject center>
      <MediaObjectFigure>
        <img src={sampleImage} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
      </MediaObjectFigure>
      <div>
        <h3 className="font-semibold">María García López</h3>
        <p className="text-sm text-neutral-dark">Técnico de primera línea</p>
      </div>
    </MediaObject>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <MediaObject
      figureHtml={`<div class="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1.5em" height="1.5em" class="text-success-dark" aria-hidden="true">
          <path fill="currentColor" d="M39.94 125a19.88 19.88 0 01-15.53-7.81L2.48 92.26a10 10 0 0115-13.2l20.55 23.39a2.5 2.5 0 003.68.08l81-84.42a10.002 10.002 0 1114.5 13.78l-82.02 86.33A19.41 19.41 0 0139.94 125z"/>
        </svg>
      </div>`}
      center
    >
      <h3 className="font-semibold text-lg">Notificación enviada</h3>
      <p className="text-neutral-dark">
        Su notificación ha sido enviada correctamente.
      </p>
    </MediaObject>
  ),
};
