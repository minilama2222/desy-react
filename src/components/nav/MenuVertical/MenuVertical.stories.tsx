import type { Meta, StoryObj } from '@storybook/react';
import { MenuVertical } from './MenuVertical';

const meta: Meta<typeof MenuVertical> = {
  title: 'Nav/MenuVertical',
  component: MenuVertical,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuVertical>;

export const PorDefecto: Story = {
  args: {
    idPrefix: 'default',
    items: [
      {
        href: '#',
        text: 'Item 1',
      },
      {
        href: '#',
        text: 'Item 2',
      },
      {
        href: '#',
        text: 'Item 3',
      },
    ],
  },
};

export const ConItemDeshabilitado: Story = {
  args: {
    idPrefix: 'disabled-item',
    items: [
      {
        href: '#',
        text: 'Item 1',
      },
      {
        href: '#',
        text: 'Item 2',
      },
      {
        text: 'Item 3',
        disabled: true,
      },
    ],
  },
};

export const ConItemActivo: Story = {
  args: {
    idPrefix: 'active-item',
    items: [
      {
        href: '#',
        text: 'Item 1',
      },
      {
        href: '#',
        text: 'Item 2',
        active: true,
      },
      {
        href: '#',
        text: 'Item 3',
      },
    ],
    id: 'mi-menu',
  },
};

export const ConTargetEnEnlaces: Story = {
  args: {
    idPrefix: 'target',
    items: [
      {
        href: '#',
        text: 'Item 1',
        target: '_blank',
      },
      {
        href: '#',
        text: 'Item 2',
        target: '_blank',
      },
      {
        href: '#',
        text: 'Item 3',
        target: '_blank',
      },
    ],
  },
};

export const ConDivisor: Story = {
  args: {
    idPrefix: 'with-divisor',
    items: [
      {
        href: '#',
        text: 'Item 1',
      },
      {
        href: '#',
        text: 'Item 2',
        divider: true,
      },
      {
        href: '#',
        text: 'Item 3',
      },
      {
        href: '#',
        text: 'Item 4',
      },
    ],
  },
};

export const ConUnTextoDeItemMuyLargo: Story = {
  args: {
    idPrefix: 'long-text',
    items: [
      {
        href: '#',
        text: 'No debe haber enlaces de más de 250 caracteres, que es el máximo admitido en accesibilidad, con excepción de nombres de leyes. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.',
      },
      {
        href: '#',
        text: 'No debe haber enlaces de más de 250 caracteres, que es el máximo admitido en accesibilidad, con excepción de nombres de leyes. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.',
      },
      {
        href: '#',
        text: 'No debe haber enlaces de más de 250 caracteres, que es el máximo admitido en accesibilidad, con excepción de nombres de leyes. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.',
      },
    ],
  },
};

export const ConTodosLosItemsPadres: Story = {
  args: {
    idPrefix: 'parent-example',
    items: [
      {
        href: '#',
        text: 'Item 1',
        id: 'parent-example-item-1',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              href: '#',
              text: 'Subitem 2',
            },
            {
              href: '#',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        href: '#',
        text: 'Item 2',
        id: 'parent-example-item-2',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              href: '#',
              text: 'Subitem 2',
            },
            {
              href: '#',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        href: '#',
        text: 'Item 3',
        id: 'parent-example-item-3',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              href: '#',
              text: 'Subitem 2',
            },
            {
              href: '#',
              text: 'Subitem 3',
            },
          ],
        },
      },
    ],
  },
};

export const ItemsConContenidoDescriptivo: Story = {
  args: {
    idPrefix: 'descriptive-example',
    items: [
      {
        href: '#',
        text: 'Item 1',
        sub: {
          html: '<p>Este es un párrafo explicativo metido con un sub.html dentro del Item</p>',
        },
      },
      {
        href: '#',
        text: 'Item 2',
        sub: {
          html: '<p>Este es un párrafo explicativo metido con un sub.html dentro del Item</p>',
        },
      },
      {
        href: '#',
        text: 'Item 3',
        sub: {
          html: '<p>Este es un párrafo explicativo metido con un sub.html dentro del Item</p>',
        },
      },
    ],
  },
};

export const ConUnItemHijoActivo: Story = {
  args: {
    idPrefix: 'nav-item-with-children-active',
    items: [
      {
        href: '#',
        text: 'Item 1',
        id: 'nav-item-item-1-a',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              href: '#',
              text: 'Subitem 2',
              active: true,
            },
            {
              href: '#',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        href: '#',
        text: 'Item 2',
        id: 'nav-item-item-2-a',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              href: '#',
              text: 'Subitem 2',
            },
            {
              href: '#',
              text: 'Subitem 3',
            },
          ],
        },
      },
    ],
  },
};

export const ConHasUnderlineConDeshabilitadoOSinHref: Story = {
  args: {
    idPrefix: 'nav-item-without-href',
    hasUnderline: true,
    items: [
      {
        text: 'Item 1 deshabilitado o sin href',
        id: 'nav-item-item-1-b',
        disabled: true,
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              text: 'Subitem 2 deshabilitado o sin href',
              disabled: true,
            },
            {
              href: '#',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        text: 'Item 2 sin href',
        id: 'nav-item-item-2-b',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              text: 'Subitem 2 sin href',
            },
            {
              href: '#',
              text: 'Subitem 3',
            },
          ],
        },
      },
    ],
  },
};

export const ConClasesCssAplicadas: Story = {
  args: {
    classes: 'p-base bg-primary-light',
    items: [
      {
        href: '#',
        text: 'Opción 1',
      },
      {
        href: '#',
        text: 'Opción 2',
        id: 'classes-1',
        classes: 'bg-white',
        sub: {
          classes: 'p-sm border-l-4 border-alert-base bg-alert-light',
          items: [
            {
              href: '#',
              text: 'Enlace simple',
            },
            {
              text: 'Enlace simple',
              classes: 'text-alert-base bg-white',
              active: true,
            },
            {
              href: '#',
              text: 'Enlace simple',
            },
          ],
        },
      },
      {
        href: '#',
        text: 'Opción 3',
      },
      {
        href: '#',
        text: 'Opción 4',
      },
      {
        href: '#',
        text: 'Opción 5',
      },
    ],
  },
};

export const ConIconosEnItems: Story = {
  args: {
    idPrefix: 'with-icons',
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

export const ConIdPrefix: Story = {
  args: {
    idPrefix: 'site-menu-item',
    items: [
      {
        href: '#',
        text: 'Opción 1',
      },
      {
        href: '#',
        text: 'Opción 2',
      },
      {
        href: '#',
        text: 'Opción 3',
      },
      {
        href: '#',
        text: 'Opción 4',
      },
      {
        href: '#',
        text: 'Opción 5',
      },
    ],
  },
};

export const ConIdsIndividuales: Story = {
  args: {
    items: [
      {
        href: '#',
        text: 'Opción 1',
        id: 'option-A',
      },
      {
        href: '#',
        text: 'Opción 2',
        id: 'option-B',
      },
      {
        href: '#',
        text: 'Opción 3',
        id: 'option-C',
      },
      {
        href: '#',
        text: 'Opción 4',
        id: 'option-D',
      },
      {
        href: '#',
        text: 'Opción 5',
        id: 'option-E',
      },
    ],
  },
};

export const ConItemsMixtos: Story = {
  args: {
    idPrefix: 'with-mixed-items',
    items: [
      {
        href: '#',
        text: 'Enlace simple',
      },
      {
        text: 'Item sin href o deshabilitado',
        disabled: true,
      },
      {
        href: '#',
        text: 'Enlace simple',
      },
      {
        href: '#',
        text: 'Padre con divisor',
        divider: true,
        id: 'with-sub-items-1',
        sub: {
          items: [
            {
              href: '#',
              text: 'Enlace simple',
            },
            {
              href: '#',
              text: 'Enlace simple',
              target: '_blank',
            },
            {
              href: '#',
              text: 'Enlace simple',
            },
            {
              href: '#',
              text: 'Enlace simple',
              divider: true,
            },
            {
              href: '#',
              text: 'Enlace simple',
            },
          ],
        },
      },
      {
        href: '#',
        text: 'Enlace simple',
      },
      {
        href: '#',
        text: 'Enlace simple',
      },
      {
        href: '#',
        text: 'Con HTML dentro',
        sub: {
          html: '<p>Este es un párrafo explicativo metido con un sub.html dentro del Item</p><p>Este es otro párrafo.</p>',
        },
      },
      {
        href: '#',
        text: 'Enlace simple',
      },
      {
        href: '#',
        text: 'Enlace simple',
      },
      {
        href: '#',
        text: 'Enlace simple',
      },
      {
        text: 'Padre sin href',
        id: 'with-sub-items-2',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem',
            },
            {
              href: '#',
              text: 'Subitem activo',
              active: true,
            },
            {
              text: 'Subitem sin href o deshabilitado',
              disabled: true,
            },
          ],
        },
      },
    ],
  },
};
