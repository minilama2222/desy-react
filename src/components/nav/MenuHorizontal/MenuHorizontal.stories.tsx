import type { Meta, StoryObj } from '@storybook/react';
import { MenuHorizontal } from './MenuHorizontal';

const meta: Meta<typeof MenuHorizontal> = {
  title: 'Nav/MenuHorizontal',
  component: MenuHorizontal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuHorizontal>;

export const PorDefecto: Story = {
  args: {
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
      },
    ],
  },
};

export const ConItemDeshabilitado: Story = {
  args: {
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción deshabilitada 3',
        disabled: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
      },
    ],
  },
};

export const ConItemActivo: Story = {
  args: {
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
        active: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
      },
    ],
    id: 'mi-menu-horizontal',
  },
};

export const ConTargetEnEnlaces: Story = {
  args: {
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
        target: '_blank',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
        target: '_blank',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
        target: '_blank',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
        target: '_blank',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
        target: '_blank',
      },
    ],
  },
};

export const ConIconosEnItems: Story = {
  args: {
    items: [
      {
        href: '#',
        html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="1em" height="1em" class="inline-block align-baseline mr-sm" aria-label="Archivo" focusable="false" role="img"><g><path fill="currentColor" fill-rule="evenodd" d="M7.875 0H2.5C2.10218 0 1.72064 0.158035 1.43934 0.43934C1.15804 0.720644 1 1.10218 1 1.5V12.5C1 12.8978 1.15804 13.2794 1.43934 13.5607C1.72064 13.842 2.10217 14 2.5 14H11.5C11.8978 14 12.2794 13.842 12.5607 13.5607C12.842 13.2794 13 12.8978 13 12.5V5.125H8.5C8.15482 5.125 7.875 4.84518 7.875 4.5V0ZM12.5821 3.875L9.125 0.417893V3.875H12.5821Z" clip-rule="evenodd"></path></g></svg> Opción 1',
      },
      {
        href: '#',
        html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="1em" height="1em" class="inline-block align-baseline mr-sm" aria-label="Link" focusable="false" role="img"><g><path fill="currentColor" fill-rule="evenodd" d="M7.6715 2.7426L7.67146 2.74264L6.70715 3.70707C6.31665 4.09761 5.68348 4.09765 5.29293 3.70715C4.90239 3.31665 4.90235 2.68348 5.29285 2.29293L6.25721 1.32847L6.25725 1.32843C8.02849 -0.442809 10.9002 -0.442809 12.6715 1.32843C14.4427 3.09965 14.4427 5.97136 12.6715 7.7426L12.6715 7.74264L11.7071 8.70707C11.3166 9.09761 10.6835 9.09765 10.2929 8.70715C9.90239 8.31664 9.90235 7.68348 10.2929 7.29293L11.2572 6.32847L11.2572 6.32843C12.2474 5.33824 12.2474 3.73283 11.2572 2.74264C10.2671 1.75247 8.66169 1.75245 7.6715 2.7426ZM3.70696 5.29285C4.0975 5.68335 4.09754 6.31652 3.70704 6.70707L2.74268 7.67153L2.74264 7.67157C1.75245 8.66176 1.75245 10.2672 2.74264 11.2574C3.73282 12.2475 5.33819 12.2475 6.32839 11.2574L6.32843 11.2574L7.29274 10.2929C7.68324 9.90239 8.31641 9.90235 8.70696 10.2929C9.0975 10.6834 9.09754 11.3165 8.70704 11.7071L7.74268 12.6715L7.74264 12.6716C5.9714 14.4428 3.09966 14.4428 1.32843 12.6716C-0.442796 10.9003 -0.442809 8.02864 1.32839 6.2574L1.32843 6.25736L2.29274 5.29293C2.68324 4.90239 3.31641 4.90235 3.70696 5.29285ZM9.20711 6.20711C9.59763 5.81658 9.59763 5.18342 9.20711 4.79289C8.81658 4.40237 8.18342 4.40237 7.79289 4.79289L4.79289 7.79289C4.40237 8.18342 4.40237 8.81658 4.79289 9.20711C5.18342 9.59763 5.81658 9.59763 6.20711 9.20711L9.20711 6.20711Z" clip-rule="evenodd"></path></g></svg> Opción 2',
      },
      {
        href: '#',
        html: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="1em" height="1em" class="inline-block align-baseline mr-sm" aria-label="Solicitud" focusable="false" role="img"><g><path fill="currentColor" fill-rule="evenodd" d="M5.5 0C4.94772 0 4.5 0.447716 4.5 1V1.5C4.5 2.05229 4.94772 2.5 5.5 2.5H8.5C9.05229 2.5 9.5 2.05229 9.5 1.5V1C9.5 0.447715 9.05229 0 8.5 0H5.5ZM2.75 1H3.25V1.5C3.25 2.74264 4.25736 3.75 5.5 3.75H8.5C9.74264 3.75 10.75 2.74264 10.75 1.5V1H11.25C12.0784 1 12.75 1.67157 12.75 2.5V12.5C12.75 13.3284 12.0784 14 11.25 14H2.75C1.92157 14 1.25 13.3284 1.25 12.5V2.5C1.25 1.67157 1.92157 1 2.75 1ZM3.875 8.50049C3.875 8.15531 4.15482 7.87549 4.5 7.87549H9.5C9.84518 7.87549 10.125 8.15531 10.125 8.50049C10.125 8.84567 9.84518 9.12549 9.5 9.12549H4.5C4.15482 9.12549 3.875 8.84567 3.875 8.50049ZM4.5 10.3755C4.15482 10.3755 3.875 10.6553 3.875 11.0005C3.875 11.3457 4.15482 11.6255 4.5 11.6255H9.5C9.84518 11.6255 10.125 11.3457 10.125 11.0005C10.125 10.6553 9.84518 10.3755 9.5 10.3755H4.5Z" clip-rule="evenodd"></path></g></svg> Opción 3',
      },
    ],
    id: 'mi-menu-icons',
  },
};

export const ConClasesCssTipoEnlaces: Story = {
  args: {
    classes: 'c-menu-horizontal--links',
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
        active: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
        disabled: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
      },
    ],
    id: 'mi-menu-links',
  },
};

export const ConSeparadoresYTextoPequeno: Story = {
  args: {
    classes: 'c-menu-horizontal--links',
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
        classes: 'lg:py-0! text-sm border-r border-r-neutral-base',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
        classes: 'lg:py-0! text-sm border-r border-r-neutral-base',
        active: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
        classes: 'lg:py-0! text-sm border-r border-r-neutral-base',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
        classes: 'lg:py-0! text-sm border-r border-r-neutral-base',
        disabled: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
        classes: 'lg:py-0! text-sm',
      },
    ],
    id: 'mi-menu-links-divider',
  },
};

export const ConClasesCssNavigationBar: Story = {
  args: {
    classes: 'c-menu-horizontal--navigation-bar',
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
        active: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
        disabled: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
      },
    ],
    id: 'mi-menu-navigation-bar',
  },
};

export const ConTabsEnEscritorio: Story = {
  args: {
    classes: 'c-menu-horizontal--tabs',
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
        active: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
        disabled: true,
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
      },
    ],
    id: 'mi-menu-tabs-en-escritorio',
  },
};

export const ConTabsEnMovil: Story = {
  args: {
    classes: 'c-menu-horizontal--tabs-mobile c-menu-horizontal--scroll',
    items: [
      {
        href: '#',
        html: '<span class="flex flex-col items-center"><span class="block"><svg class="w-6 h-6 mb-xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false" width="1em" height="1em"><g transform="scale(2)"><circle cx="2.5" cy="4" r="2.5" fill="currentColor"/><path d="M8.5 5H23a1 1 0 0 0 0-2H8.5a1 1 0 0 0 0 2Z" fill="currentColor"/><circle cx="2.5" cy="12" r="2.5" fill="currentColor"/><path d="M23 11H8.5a1 1 0 0 0 0 2H23a1 1 0 0 0 0-2Z" fill="currentColor"/><circle cx="2.5" cy="20" r="2.5" fill="currentColor"/><path d="M23 19H8.5a1 1 0 0 0 0 2H23a1 1 0 0 0 0-2Z" fill="currentColor"/></g></svg></span><span class="block text-sm">Seguimiento</span></span>',
      },
      {
        href: '#',
        html: '<span class="flex flex-col items-center"><span class="block"><svg class="w-6 h-6 mb-xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M11 8h3.5a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2ZM11 12h7.5a1 1 0 0 0 0-2H11a1 1 0 0 0 0 2Z" fill="currentColor" transform="scale(2)"/><path d="M23.71 5.71 18.29.29a1 1 0 0 0-.7-.29H8a2 2 0 0 0-2 2v11.17c0 .19.1.33.25.33h1.5a.25.25 0 0 0 .25-.25v-11A.25.25 0 0 1 8.25 2h8.82a.31.31 0 0 1 .18.07l4.68 4.68a.31.31 0 0 1 .07.18v12.82a.25.25 0 0 1-.25.25h-6a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 0 .25.25H22a2 2 0 0 0 2-2V6.41a1 1 0 0 0-.29-.7Z" fill="currentColor" transform="scale(2)"/><path d="M13 15H6a1 1 0 0 1-.8-.4l-.9-1.2a1 1 0 0 0-.8-.4H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z" fill="currentColor" transform="scale(2)"/></svg></span><span class="block text-sm">Documentos</span></span>',
        active: true,
      },
      {
        href: '#',
        html: '<span class="flex flex-col items-center"><span class="block"><svg class="w-6 h-6 mb-xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M21.71 5.71 16.29.29a1 1 0 0 0-.7-.29H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.41a1 1 0 0 0-.29-.7ZM19.5 22h-15a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h1.75a.25.25 0 0 1 .25.25V13a.5.5 0 0 0 .31.46.47.47 0 0 0 .54-.11l2-2a.27.27 0 0 1 .36 0l2 2a.47.47 0 0 0 .35.15.43.43 0 0 0 .19 0 .5.5 0 0 0 .25-.5V2.25a.25.25 0 0 1 .25-.25H15a.49.49 0 0 1 .36.15l4.53 4.53A.49.49 0 0 1 20 7v14.5a.5.5 0 0 1-.5.5Z" fill="currentColor" transform="scale(2)"/></svg></span><span class="block text-sm">Notificaciones</span></span>',
      },
    ],
    id: 'mi-menu-tabs-en-movil',
  },
};

export const ConIdPrefix: Story = {
  args: {
    idPrefix: 'site-menu-item',
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
      },
    ],
  },
};

export const ConIdsIndividuales: Story = {
  args: {
    items: [
      {
        href: 'http://www.google.com',
        text: 'Opción 1',
        id: 'option-A',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 2',
        id: 'option-B',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 3',
        id: 'option-C',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 4',
        id: 'option-D',
      },
      {
        href: 'http://www.google.com',
        text: 'Opción 5',
        id: 'option-E',
      },
    ],
  },
};
