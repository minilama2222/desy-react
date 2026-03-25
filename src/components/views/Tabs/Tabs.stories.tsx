import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Views/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const PorDefecto: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example',
    items: [
      {
        text: 'Tab 1',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        },
      },
      {
        text: 'Tab 2',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        },
      },
      {
        text: 'Tab 3',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        },
      },
      {
        text: 'Tab 4',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        },
      },
    ],
  },
};

export const ConEncabezado: Story = {
  args: {
    title: 'Título con h3',
    headingLevel: 3,
    tablistAriaLabel: 'headingLevel example',
    idPrefix: 'headinglevel-example',
    items: [
      {
        text: 'Tab 1 con h4',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        },
      },
      {
        text: 'Tab 2 con h4',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        },
      },
      {
        text: 'Tab 3 con h4',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        },
      },
      {
        text: 'Tab 4 con h4',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        },
      },
    ],
  },
};

export const ConHtmlEnTabs: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-html',
    items: [
      {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Archivo" role="img" focusable="false"><path d="M89.355 12.518l26.46 26.46a2.917 2.917 0 01.852 2.06v84.379a2.917 2.917 0 01-2.917 2.916h-87.5a2.917 2.917 0 01-2.917-2.916V14.583a2.917 2.917 0 012.917-2.916h61.046a2.917 2.917 0 012.059.851z" fill="currentColor"/></svg> Tab 1',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        },
      },
      {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Link" role="img" focusable="false"><path d="M72.368 86.946a5.833 5.833 0 00-3.167 7.624 5.833 5.833 0 01-1.266 6.358l-16.497 16.503a11.667 11.667 0 01-16.496 0l-12.379-12.373a11.667 11.667 0 010-16.502l16.52-16.497a5.91 5.91 0 016.364-1.266 5.834 5.834 0 004.451-10.786 17.698 17.698 0 00-19.063 3.804l-16.52 16.497a23.368 23.368 0 000 32.999l12.378 12.372a23.333 23.333 0 0032.994 0l16.502-16.496a17.547 17.547 0 003.798-19.075 5.833 5.833 0 00-7.619-3.162z" fill="currentColor"/></svg> Tab 2',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        },
      },
      {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Solicitud" role="img" focusable="false"><path d="M96.25 52.5h-52.5a4.375 4.375 0 000 8.75h52.5a4.375 4.375 0 000-8.75z" fill="currentColor"/></svg> Tab 3',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        },
      },
      {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Borrar" role="img" focusable="false"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M100.625 122.5h-61.25a8.75 8.75 0 0 1-8.75-8.75V35h78.75v78.75a8.75 8.75 0 0 1-8.75 8.75z" stroke-width="8.749995"/></g></svg> Tab 4',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        },
      },
    ],
  },
};

export const ConItemDeshabilitado: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-disabled',
    items: [
      {
        text: 'Tab 1',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        },
      },
      {
        text: 'Tab 2',
        disabled: true,
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        },
      },
      {
        text: 'Tab 3',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        },
      },
      {
        text: 'Tab 4',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        },
      },
    ],
  },
};

export const ConItemActivo: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-active',
    items: [
      {
        text: 'Tab 1',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        },
      },
      {
        text: 'Tab 2',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        },
      },
      {
        text: 'Tab 3',
        active: true,
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        },
      },
      {
        text: 'Tab 4',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        },
      },
    ],
  },
};

export const ConMuchosItems: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-many-items',
    items: Array.from({ length: 12 }, (_, i) => ({
      text: `Tab ${i + 1}`,
      panel: {
        html: `<p><strong>Panel ${i + 1}</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`,
      },
    })),
  },
};

export const ConScrollEnMovil: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-scroll-mobile',
    className: 'c-tabs--scroll',
    items: Array.from({ length: 12 }, (_, i) => ({
      text: `Tab ${i + 1}`,
      panel: {
        html: `<p><strong>Panel ${i + 1}</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`,
      },
    })),
  },
};

export const ConHtmlEnTabsParaMobile: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-html-stacked',
    className: 'c-tabs--scroll',
    items: [
      {
        html: '<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M89.355 12.518l26.46 26.46a2.917 2.917 0 01.852 2.06v84.379a2.917 2.917 0 01-2.917 2.916h-87.5a2.917 2.917 0 01-2.917-2.916V14.583a2.917 2.917 0 012.917-2.916h61.046a2.917 2.917 0 012.059.851z" fill="currentColor"/></svg><span class="block mx-auto">Tab 1</span></span>',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        },
      },
      {
        html: '<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M72.368 86.946a5.833 5.833 0 00-3.167 7.624 5.833 5.833 0 01-1.266 6.358l-16.497 16.503a11.667 11.667 0 01-16.496 0l-12.379-12.373a11.667 11.667 0 010-16.502l16.52-16.497a5.91 5.91 0 016.364-1.266 5.834 5.834 0 004.451-10.786 17.698 17.698 0 00-19.063 3.804l-16.52 16.497a23.368 23.368 0 000 32.999l12.378 12.372a23.333 23.333 0 0032.994 0l16.502-16.496a17.547 17.547 0 003.798-19.075 5.833 5.833 0 00-7.619-3.162z" fill="currentColor"/></svg><span class="block mx-auto">Tab 2</span></span>',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        },
      },
      {
        html: '<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M96.25 52.5h-52.5a4.375 4.375 0 000 8.75h52.5a4.375 4.375 0 000-8.75z" fill="currentColor"/></svg><span class="block mx-auto">Tab 3</span></span>',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        },
      },
    ],
  },
};

export const ConClasesDeCssAplicadas: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-classes',
    items: [
      {
        text: 'Tab 1',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
          classes: 'bg-primary-light',
        },
      },
      {
        text: 'Tab 2',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
          classes: 'bg-primary-light',
        },
      },
      {
        text: 'Tab 3',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
          classes: 'bg-primary-light',
        },
      },
      {
        text: 'Tab 4',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
          classes: 'bg-primary-light',
        },
      },
    ],
  },
};

export const ConAspectoDeLinksList: Story = {
  args: {
    tablistClasses: 'flex flex-col col-span-2 lg:col-span-1 lg:divide-y lg:divide-neutral-base mb-base lg:mb-0',
    tablistAriaLabel: 'Ejemplo de tab con aspecto de links list dispuesto en horizontal',
    idPrefix: 'tab-links-list',
    items: [
      {
        html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 1</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
          classes: 'col-span-2 lg:col-span-2 lg:p-base',
        },
      },
      {
        html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 2</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
          classes: 'col-span-2 lg:col-span-2 lg:p-base',
        },
      },
      {
        html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 3</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
          classes: 'col-span-2 lg:col-span-2 lg:p-base',
        },
      },
      {
        html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 4</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
          classes: 'col-span-2 lg:col-span-2 lg:p-base',
        },
      },
    ],
    className: 'c-tabs--reset c-tabs--list grid grid-cols-2 lg:grid-cols-4 lg:gap-lg',
  },
};

export const ConIdsIndividuales: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    items: [
      {
        text: 'Tab 1',
        id: 'tab-example-a-1',
        panel: {
          html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        },
      },
      {
        text: 'Tab 2',
        id: 'tab-example-b-1',
        panel: {
          html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        },
      },
      {
        text: 'Tab 3',
        id: 'tab-example-c',
        panel: {
          html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        },
      },
      {
        text: 'Tab 4',
        id: 'tab-example-d',
        panel: {
          html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        },
      },
    ],
  },
};

export const EjemploComplejo: Story = {
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    items: [
      {
        text: 'Cambios',
        id: 'tab-example-a-2',
        panel: {
          html: "<div class=\"mb-base p-base bg-warning-light\"><ul class=\"c-ul mb-0\"><li><p>Ley 38/2003, de 17 de noviembre, General de Subvenciones. </p><p><a href=\"#\" class=\"c-link text-sm\">Ver detalles de la normativa</a></p></li><li>Ley 5/2015, de 25 de marzo, de Subvenciones de Aragón.</li></ul></div><div class=\"flex items-baseline\"><p class=\"flex-1 text-sm text-neutral-dark\">Cambios realizados hace 2 horas</p><div class=\"ml-auto\"><button class=\"c-button c-button--transparent\">Descartar</button><button class=\"c-button c-button--transparent\">Editar</button></div></div>",
        },
      },
      {
        text: 'Ver original',
        id: 'tab-example-b-2',
        panel: {
          html: "<div class=\"mb-base p-base\"><ul class=\"c-ul mb-0\"><li><p>Ley 38/2003, de 17 de noviembre, General de Subvenciones.</p><p><a href=\"#\" class=\"c-link text-sm\">Ver detalles de la normativa</a></p></li><li>Ley 5/2015, de 25 de marzo, de Subvenciones de Aragón.</li></ul></div><p class=\"text-sm text-neutral-dark\">Texto original</p>",
        },
      },
    ],
  },
};
