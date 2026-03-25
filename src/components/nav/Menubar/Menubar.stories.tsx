import type { Meta, StoryObj } from '@storybook/react';
import { Menubar } from './Menubar';

const meta: Meta<typeof Menubar> = {
  title: 'Nav/Menubar',
  component: Menubar,
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const PorDefecto: Story = {
  args: {
    id: 'with-all-parent-items-1',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-1-1',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitemcheckbox',
        ariaLabel: 'Menuitemcheckbox',
        id: 'menuitems-example-item-2-1',
        classes: 'mb-base mr-base',
        sub: {
          items: [
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 1',
            },
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 2',
            },
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        text: 'Menuitemradio',
        ariaLabel: 'Menuitemradio',
        id: 'menuitems-example-item-3-1',
        classes: 'mb-base mr-base',
        sub: {
          items: [
            {
              role: 'menuitemradio',
              text: 'Subitem 1',
            },
            {
              role: 'menuitemradio',
              text: 'Subitem 2',
            },
            {
              role: 'menuitemradio',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        text: 'Separator',
        ariaLabel: 'Separator',
        id: 'menuitems-example-item-4-1',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'separator',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
          ],
        },
      },
    ],
  },
};

export const TieneSeleccionEnItemsPadres: Story = {
  args: {
    id: 'with-all-parent-items-2',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-1-2',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitemcheckbox',
        ariaLabel: 'Menuitemcheckbox',
        id: 'menuitems-example-item-2-2',
        classes: 'mb-base mr-base',
        sub: {
          items: [
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 1',
            },
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 2',
            },
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        text: 'Menuitemradio',
        ariaLabel: 'Menuitemradio',
        id: 'menuitems-example-item-3-2',
        active: true,
        classes: 'mb-base mr-base',
        sub: {
          items: [
            {
              role: 'menuitemradio',
              text: 'Subitem 1',
            },
            {
              role: 'menuitemradio',
              text: 'Subitem 2',
            },
            {
              role: 'menuitemradio',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        text: 'Separator',
        ariaLabel: 'Separator',
        id: 'menuitems-example-item-4-2',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'separator',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
          ],
        },
      },
    ],
  },
};

export const ConSubItemActivo: Story = {
  args: {
    id: 'with-all-parent-items-3',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-1-3',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitemcheckbox',
        ariaLabel: 'Menuitemcheckbox',
        id: 'menuitems-example-item-2-3',
        classes: 'mb-base mr-base',
        sub: {
          items: [
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 1',
            },
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 2',
              checked: true,
            },
            {
              role: 'menuitemcheckbox',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        text: 'Menuitemradio',
        ariaLabel: 'Menuitemradio',
        id: 'menuitems-example-item-3-3',
        classes: 'mb-base mr-base',
        sub: {
          items: [
            {
              role: 'menuitemradio',
              text: 'Subitem 1',
            },
            {
              role: 'menuitemradio',
              text: 'Subitem 2',
              checked: true,
            },
            {
              role: 'menuitemradio',
              text: 'Subitem 3',
            },
          ],
        },
      },
      {
        text: 'Separator',
        ariaLabel: 'Separator',
        id: 'menuitems-example-item-4-3',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'separator',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
          ],
        },
      },
    ],
  },
};

export const ConUnItemPadreDeshabilitado: Story = {
  args: {
    id: 'disabled-parent-item-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem activo',
        ariaLabel: 'Menuitem activo',
        id: 'menuitems-example-item-1-4',
        active: true,
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitem deshabilitado',
        ariaLabel: 'Menuitem deshabilitado',
        id: 'menuitems-example-item-2-4',
        disabled: true,
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-3-4',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
    ],
  },
};

export const ConUnItemPadreActivo: Story = {
  args: {
    id: 'active-parent-item-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-1-5',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitem activo',
        ariaLabel: 'Menuitem activo',
        id: 'menuitems-example-item-2-5',
        active: true,
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-3-5',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
    ],
  },
};

export const Grande: Story = {
  args: {
    id: 'large-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem 1',
        ariaLabel: 'Menuitem 1',
        id: 'menuitems-example-item-1-6',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'c-menubar__button--lg mb-base mr-base',
      },
      {
        text: 'Menuitem 2',
        ariaLabel: 'Menuitem 2',
        id: 'menuitems-example-item-2-6',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'c-menubar__button--lg mb-base mr-base',
      },
    ],
  },
};

export const Pequeno: Story = {
  args: {
    id: 'small-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem 1',
        ariaLabel: 'Menuitem 1',
        id: 'menuitems-example-item-1-7',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'c-menubar__button--sm mb-base mr-base',
      },
      {
        text: 'Menuitem 2',
        ariaLabel: 'Menuitem 2',
        id: 'menuitems-example-item-2-7',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'c-menubar__button--sm mb-base mr-base',
      },
    ],
  },
};

export const Transparente: Story = {
  args: {
    id: 'transparent-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Menuitem 1',
        ariaLabel: 'Menuitem 1',
        id: 'menuitems-example-item-1-8',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'c-menubar__button--transparent mb-base mr-base',
      },
      {
        text: 'Menuitem 2',
        ariaLabel: 'Menuitem 2',
        id: 'menuitems-example-item-2-8',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'c-menubar__button--transparent mb-base mr-base',
      },
    ],
  },
};

export const EjemploDeFiltros: Story = {
  args: {
    id: 'filters-example',
    idPrefix: 'filters-example',
    ariaLabel: 'Menubar descrición',
    items: [
      {
        text: 'Seleccionar todos',
        ariaLabel: 'Seleccionar todos',
        id: 'filters-example-item-1',
        sub: {
          items: [
            {
              role: 'menuitemcheckbox',
              text: 'Seleccionar todos',
              checked: true,
            },
            {
              role: 'menuitemcheckbox',
              text: 'Activos',
            },
            {
              role: 'menuitemcheckbox',
              text: 'Inactivos',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
      {
        text: 'Ordenar por',
        ariaLabel: 'Ordenar por',
        id: 'filters-example-item-2',
        sub: {
          items: [
            {
              role: 'menuitemradio',
              text: 'Nombre',
              checked: true,
            },
            {
              role: 'menuitemradio',
              text: 'Fecha',
            },
            {
              role: 'menuitemradio',
              text: 'Estado',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
    ],
  },
};

export const ConLabel: Story = {
  args: {
    id: 'label-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    label: 'Mi label',
    items: [
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-1-9',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
      {
        text: 'Menuitem',
        ariaLabel: 'Menuitem',
        id: 'menuitems-example-item-2-9',
        sub: {
          items: [
            {
              role: 'menuitem',
              text: 'Subitem 1',
            },
            {
              role: 'menuitem',
              text: 'Subitem 2',
            },
            {
              role: 'menuitem',
              text: 'Subitem 3',
            },
          ],
        },
        classes: 'mb-base mr-base',
      },
    ],
  },
};
