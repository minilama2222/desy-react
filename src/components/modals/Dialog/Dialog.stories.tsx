import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Modals/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Wrapper genérico para diálogos modales. Sigue el patrón del `role="dialog"` + `aria-modal="true"` de WAI-ARIA. El control de apertura, cierre y foco lo gestiona la lógica que lo invoca (botón caller + script de openDialog/closeDialog en desy-html).',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const PorDefecto: Story = {
  args: {
    id: 'dialog-default',
    className: 'left-0 fixed top-0 h-dvh w-offcanvas ml-offcanvas-negative',
    children: (
      <div className="h-full overflow-auto relative bg-white z-10">
        <div className="text-right p-sm">
          <button
            type="button"
            className="c-button c-button--sm c-button--transparent m-sm"
            aria-label="Cerrar diálogo"
          >
            Cerrar
          </button>
        </div>
        <h2 className="p-base text-base font-bold">Diálogo de ejemplo</h2>
        <p className="px-base pb-base">Contenido del diálogo. Sustituye este texto por el contenido que corresponda en cada caso.</p>
      </div>
    ),
  },
};

export const ConCaller: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Variante con bloque de acciones primarias y secundarias, alineada con el patrón `caller` que aparece en `examples-dialog.html`.',
      },
    },
  },
  args: {
    id: 'dialog-caller',
    className: 'p-base border border-neutral-base rounded-sm',
    children: (
      <div>
        <h3 className="c-h3">Editar servicio publicado</h3>
        <p>Actualmente este servicio está publicado. Los cambios realizados no serán visibles hasta que sean validados.</p>
        <div className="flex gap-base mt-base">
          <button type="button" className="c-button c-button--primary">Editar servicio</button>
          <button type="button" className="c-button c-button--transparent">Cancelar</button>
        </div>
      </div>
    ),
  },
};
