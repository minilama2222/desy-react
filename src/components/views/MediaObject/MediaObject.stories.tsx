import type { Meta, StoryObj } from '@storybook/react';
import { MediaObject } from './MediaObject';

const meta: Meta<typeof MediaObject> = {
  title: 'Views/MediaObject',
  component: MediaObject,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MediaObject>;

const sampleFigure = "<div class=' w-20 h-20 '><div class=' h-full border-4 border-dashed border-gray-200 rounded-lg '></div></div>";
const sampleContent = "<p class='c-paragraph-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus, elit et faucibus finibus, massa enim egestas leo, et lobortis lorem elit non enim. Nullam molestie nunc eget eleifend porttitor. Suspendisse ornare ligula erat, non dapibus nunc rhoncus at. Maecenas vitae urna viverra, semper mauris vitae, euismod ante. Sed finibus quam ut orci pellentesque, in tincidunt risus tristique. Vivamus efficitur purus urna, sed blandit lorem convallis vel. Mauris tincidunt tincidunt ipsum finibus euismod. Sed eget tincidunt mauris. Duis viverra commodo consectetur. Nullam viverra tincidunt nisl, sit amet dignissim lacus mattis imperdiet.</p>";

export const PorDefecto: Story = {
  args: {
    figureHtml: sampleFigure,
    children: <div dangerouslySetInnerHTML={{ __html: sampleContent }} />,
  },
};

export const Invertido: Story = {
  args: {
    reverse: true,
    figureHtml: sampleFigure,
    children: <div dangerouslySetInnerHTML={{ __html: sampleContent }} />,
  },
};

export const FigureCentradoVerticalmente: Story = {
  args: {
    center: true,
    figureHtml: sampleFigure,
    children: <div dangerouslySetInnerHTML={{ __html: sampleContent }} />,
  },
};

export const ClasesAñadiendoPaddingYMargin: Story = {
  args: {
    figureHtml: sampleFigure,
    figureClasses: 'mr-base',
    contentClasses: 'text-sm',
    className: 'mb-base',
    children: <div dangerouslySetInnerHTML={{ __html: sampleContent }} />,
  },
};

export const OrdenInvertidoConClasesPaddingYMargin: Story = {
  args: {
    reverse: true,
    figureHtml: sampleFigure,
    figureClasses: 'ml-base',
    contentClasses: 'text-sm',
    className: 'mb-base',
    children: <div dangerouslySetInnerHTML={{ __html: sampleContent }} />,
  },
};
