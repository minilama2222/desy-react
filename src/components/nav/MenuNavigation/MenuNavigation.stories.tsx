import type { Meta, StoryObj } from '@storybook/react';
import { MenuNavigation } from './MenuNavigation';

const meta: Meta<typeof MenuNavigation> = {
  title: 'Nav/MenuNavigation',
  component: MenuNavigation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MenuNavigation>;

export const PorDefecto: Story = {
  args: {
    idPrefix: 'default-example',
    items: [
      {
        text: 'Item 1',
        id: 'default-example-item-1',
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
        text: 'Item 2',
        id: 'default-example-item-2',
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
        text: 'Item 3',
        id: 'default-example-item-3',
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

export const ConItemDeshabilitado: Story = {
  args: {
    idPrefix: 'with-disabled-item-example',
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
        disabled: true,
      },
    ],
  },
};

export const ConItemActivo: Story = {
  args: {
    idPrefix: 'with-active-item-example',
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
  },
};

export const ConSubItemActivo: Story = {
  args: {
    idPrefix: 'with-active-sub-item-example',
    items: [
      {
        text: 'Item 1',
        id: 'active-sub-item-example-1',
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
        text: 'Item 2',
        id: 'active-sub-item-example-2',
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
        text: 'Item 3',
        id: 'active-sub-item-example-3',
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

export const ConTargetEnEnlaces: Story = {
  args: {
    idPrefix: 'with-targets-in-links-example',
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

export const ConDivisores: Story = {
  args: {
    idPrefix: 'with-dividers-example',
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
        text: 'Item 3',
        id: 'with-dividers-example-parent',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              href: '#',
              text: 'Subitem 2',
              divider: true,
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
        text: 'Item 4',
      },
    ],
  },
};

export const Grande: Story = {
  args: {
    idPrefix: 'large-example',
    items: [
      {
        text: 'Item 1',
        id: 'large-example-item-1',
        classes: 'c-menu-navigation__button--lg -mr-sm',
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
        text: 'Item 2',
        id: 'large-example-item-2',
        classes: 'c-menu-navigation__button--lg -mr-sm',
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
        text: 'Item 3',
        id: 'large-example-item-3',
        classes: 'c-menu-navigation__button--lg -mr-sm',
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

export const Pequeno: Story = {
  args: {
    idPrefix: 'small-example',
    items: [
      {
        text: 'Item 1',
        id: 'small-example-item-1',
        classes: 'c-menu-navigation__button--sm -mr-sm',
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
        text: 'Item 2',
        id: 'small-example-item-2',
        classes: 'c-menu-navigation__button--sm -mr-sm',
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
        text: 'Item 3',
        id: 'small-example-item-3',
        classes: 'c-menu-navigation__button--sm -mr-sm',
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

export const Primario: Story = {
  args: {
    idPrefix: 'primary-example',
    items: [
      {
        text: 'Item 1',
        id: 'primary-example-item-1',
        classes: 'c-menu-navigation__button--primary',
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
        text: 'Item activo 2',
        id: 'primary-example-item-2',
        classes: 'c-menu-navigation__button--primary',
        active: true,
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
        text: 'Item deshabilitado 3',
        id: 'primary-example-item-3',
        classes: 'c-menu-navigation__button--primary',
        disabled: true,
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

export const Transparente: Story = {
  args: {
    idPrefix: 'transparent-example',
    items: [
      {
        text: 'Item 1',
        id: 'transparent-example-item-1',
        classes: 'c-menu-navigation__button--transparent',
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
        text: 'Item activo 2',
        id: 'transparent-example-item-2',
        classes: 'c-menu-navigation__button--transparent',
        active: true,
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
        text: 'Item deshabilitado 3',
        id: 'transparent-example-item-3',
        classes: 'c-menu-navigation__button--transparent',
        disabled: true,
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

export const ConElUltimoItemALaDerecha: Story = {
  args: {
    idPrefix: 'right-example',
    classes: 'c-menu-navigation--last-right',
    items: [
      {
        text: 'Item 1',
        id: 'right-example-item-1',
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
        text: 'Item 2',
        id: 'right-example-item-2',
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
        text: 'Item 3',
        id: 'right-example-item-3',
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
        text: 'Item 4',
        id: 'right-example-item-4',
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

export const ConDeshabilitadoOSinHrefEnUnPadreEHijo: Story = {
  args: {
    idPrefix: 'nav-item-without-href',
    items: [
      {
        text: 'Item 1 deshabilitado',
        id: 'nav-item-item-1-b',
        disabled: true,
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
            },
            {
              href: '#',
              text: 'Subitem 2 deshabilitado',
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
        text: 'Item 2',
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

export const ConIdPrefix: Story = {
  args: {
    idPrefix: 'with-id-prefix-example',
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
    idPrefix: 'ids-example',
    items: [
      {
        text: 'Definidos explícitamente',
        id: 'ids-item-1',
        sub: {
          items: [
            {
              href: '#',
              text: 'Subitem 1',
              id: 'ids-subitem-1',
            },
            {
              href: '#',
              text: 'Subitem 2',
              id: 'ids-subitem-2',
            },
            {
              href: '#',
              text: 'Subitem 3',
              id: 'ids-subitem-3',
            },
          ],
        },
      },
      {
        text: 'Generados automáticamente',
        id: 'ids-item-2',
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

export const ConAtributos: Story = {
  args: {
    idPrefix: 'with-attributes-example',
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
        text: 'Opción 3',
        sub: {
          items: [
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
          ],
        },
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

export const ConItemsMixtos: Story = {
  args: {
    idPrefix: 'with-mixed-items-example',
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
        text: 'Padre',
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
