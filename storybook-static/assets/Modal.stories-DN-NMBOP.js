import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-BRtkut15.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({button:e,onClick:t}){let{text:n,html:r,classes:a,disabled:o,element:s=`button`,type:l=`button`,name:u,value:d,href:f,target:p,...m}=e,h=r?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:r}}):n,g=i(`c-button`,a),_=n=>t?.(e,n);return s===`a`?(0,c.jsx)(`a`,{href:f,target:p,className:g,onClick:_,...m,children:h}):s===`input`?(0,c.jsx)(`input`,{type:l,value:d,name:u,className:g,disabled:o,onClick:_,...m}):(0,c.jsx)(`button`,{type:l,className:g,disabled:o,onClick:_,...m,children:h})}function o({onClose:e}){return(0,c.jsx)(`button`,{onClick:e,className:`p-sm focus:bg-warning-base focus:border-warning-base focus:shadow-outline-black focus:text-black focus:outline-hidden`,"aria-label":`Close modal`,type:`button`,children:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`w-4 h-4`,"aria-hidden":`true`,role:`presentation`,children:(0,c.jsx)(`path`,{d:`M85.91 71.77a2.5 2.5 0 010-3.54l46.16-46.16a10 10 0 10-14.14-14.14L71.77 54.09a2.5 2.5 0 01-3.54 0L22.07 7.93A10 10 0 007.93 22.07l46.16 46.16a2.5 2.5 0 010 3.54L7.93 117.93a10 10 0 0014.14 14.14l46.16-46.16a2.5 2.5 0 013.54 0l46.16 46.16a10 10 0 0014.14-14.14z`,fill:`currentColor`})})})}function s({id:e,title:t,titleHtml:n,titleClasses:r,description:s,descriptionHtml:u,descriptionClasses:d,icon:f,className:p,headingLevel:m=2,isDismissible:h,onClose:g,itemsPrimary:_,itemsSecondary:v,onButtonClick:y,children:b}){return(0,c.jsxs)(`div`,{id:e,className:i(`mt-16 sm:mt-0 relative max-w-lg mx-auto p-base lg:p-lg border border-neutral-base rounded-sm bg-white`,p),role:`dialog`,"aria-labelledby":`label-${e}`,"aria-describedby":s?`desc-${e}`:void 0,children:[f&&(0,c.jsx)(`div`,{className:`flex justify-center p-base`,children:l[f]}),h&&(0,c.jsx)(`div`,{className:`absolute top-0 right-0 p-sm lg:p-base`,children:(0,c.jsx)(o,{onClose:g})}),(t||n)&&(m===1?(0,c.jsx)(`h1`,{id:`label-${e}`,className:i(`c-h2 px-base text-center focus:outline-hidden focus:underline`,r),tabIndex:-1,children:n?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t}):m===2?(0,c.jsx)(`h2`,{id:`label-${e}`,className:i(`c-h2 px-base text-center focus:outline-hidden focus:underline`,r),tabIndex:-1,children:n?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t}):m===3?(0,c.jsx)(`h3`,{id:`label-${e}`,className:i(`c-h2 px-base text-center focus:outline-hidden focus:underline`,r),tabIndex:-1,children:n?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t}):m===4?(0,c.jsx)(`h4`,{id:`label-${e}`,className:i(`c-h2 px-base text-center focus:outline-hidden focus:underline`,r),tabIndex:-1,children:n?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t}):m===5?(0,c.jsx)(`h5`,{id:`label-${e}`,className:i(`c-h2 px-base text-center focus:outline-hidden focus:underline`,r),tabIndex:-1,children:n?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t}):(0,c.jsx)(`h2`,{id:`label-${e}`,className:i(`c-h2 px-base text-center focus:outline-hidden focus:underline`,r),tabIndex:-1,children:n?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t})),(s||u)&&(u?(0,c.jsx)(`div`,{id:`desc-${e}`,className:i(`c-paragraph-base my-base text-center`,d),children:(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:u}})}):(0,c.jsx)(`p`,{id:`desc-${e}`,className:i(`c-p my-base text-center`,d),children:s})),b&&(0,c.jsx)(`div`,{className:`p-base`,children:b}),(_?.length||v?.length)&&(0,c.jsxs)(`div`,{className:i(`flex flex-wrap gap-sm w-full mt-base`,_?.length&&v?.length?`justify-between`:`justify-center`),children:[_?.map((e,t)=>(0,c.jsx)(a,{button:e,onClick:y},e.id||`primary-${t}`)),v?.map((e,t)=>(0,c.jsx)(a,{button:e,onClick:y},e.id||`secondary-${t}`))]})]})}var c,l,u=e((()=>{t(),r(),c=n(),l={discard:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,className:`block w-16 h-16 text-alert-light`,focusable:!1,"aria-hidden":`true`,role:`presentation`,children:(0,c.jsx)(`path`,{d:`M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM5.29,5.29a9.63,9.63,0,0,1,12.23-1,.26.26,0,0,1,0,.4L4.67,17.56a.27.27,0,0,1-.4,0,9.49,9.49,0,0,1,1-12.24ZM18.75,18.76a9.53,9.53,0,0,1-12.23,1,.26.26,0,0,1,0-.4L19.37,6.49a.26.26,0,0,1,.4,0,9.49,9.49,0,0,1-1,12.24Z`,fill:`currentColor`})}),delete:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,className:`block w-16 h-16 text-alert-light`,focusable:!1,"aria-hidden":`true`,role:`presentation`,children:(0,c.jsxs)(`g`,{children:[(0,c.jsx)(`path`,{d:`M19.5,7.5H4.5A.5.5,0,0,0,4,8V22a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8A.5.5,0,0,0,19.5,7.5Zm-9.25,13a.75.75,0,0,1-1.5,0v-9a.75.75,0,0,1,1.5,0Zm5,0a.75.75,0,0,1-1.5,0v-9a.75.75,0,0,1,1.5,0Z`,fill:`currentColor`}),(0,c.jsx)(`path`,{d:`M22,4H17.25A.25.25,0,0,1,17,3.75V2.5A2.5,2.5,0,0,0,14.5,0h-5A2.5,2.5,0,0,0,7,2.5V3.75A.25.25,0,0,1,6.75,4H2A1,1,0,0,0,2,6H22a1,1,0,0,0,0-2ZM9,3.75V2.5A.5.5,0,0,1,9.5,2h5a.5.5,0,0,1,.5.5V3.75a.25.25,0,0,1-.25.25H9.25A.25.25,0,0,1,9,3.75Z`,fill:`currentColor`})]})}),publish:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,className:`block w-16 h-16 text-primary-light`,focusable:!1,"aria-hidden":`true`,role:`presentation`,children:(0,c.jsx)(`path`,{d:`M23.82,1.12A.5.5,0,0,0,23.31,1l-23,9.5A.5.5,0,0,0,0,11a.51.51,0,0,0,.32.46l6.33,2.45a.52.52,0,0,0,.47-.05l8.4-6a.5.5,0,0,1,.64.77l-7,6.75a.51.51,0,0,0-.15.36V22.5a.49.49,0,0,0,.37.48.49.49,0,0,0,.56-.23l3.17-5.42a.25.25,0,0,1,.33-.1l5.83,3.21a.5.5,0,0,0,.73-.33l4-18.5A.5.5,0,0,0,23.82,1.12Z`,fill:`currentColor`})}),changes:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,className:`block w-16 h-16 text-primary-light`,focusable:!1,"aria-hidden":`true`,role:`presentation`,children:(0,c.jsxs)(`g`,{children:[(0,c.jsx)(`path`,{d:`M12,13a1,1,0,0,0,1-1V8a1,1,0,1,0-2,0v4A1,1,0,0,0,12,13Z`,fill:`currentColor`}),(0,c.jsx)(`circle`,{cx:`11.99`,cy:`15.71`,r:`1.25`,fill:`currentColor`}),(0,c.jsx)(`path`,{d:`M19.29,5.53a9.72,9.72,0,0,0-9.55-3A10.25,10.25,0,0,0,2.38,9.61a.26.26,0,0,1-.27.18l-1-.13a.47.47,0,0,0-.47.22.47.47,0,0,0,0,.52l2.47,4.35a.51.51,0,0,0,.44.25.52.52,0,0,0,.36-.16l3.47-3.59a.48.48,0,0,0,.12-.51A.5.5,0,0,0,7,10.41l-1.88-.24A.23.23,0,0,1,5,10.05a.22.22,0,0,1,0-.21,7.67,7.67,0,0,1,5.37-4.9,7.23,7.23,0,0,1,7.1,2.25,1.25,1.25,0,1,0,1.87-1.66Z`,fill:`currentColor`}),(0,c.jsx)(`path`,{d:`M4.79,16.7a1.24,1.24,0,0,0-.11,1.76,9.72,9.72,0,0,0,9.55,3,10.24,10.24,0,0,0,7.37-7.12.24.24,0,0,1,.27-.17l1.06.12a.5.5,0,0,0,.48-.22.49.49,0,0,0,0-.52l-2.5-4.33A.51.51,0,0,0,20.55,9a.52.52,0,0,0-.43.15l-3.45,3.62a.5.5,0,0,0-.11.51.49.49,0,0,0,.41.33l1.85.22A.25.25,0,0,1,19,14a.22.22,0,0,1,0,.21,7.67,7.67,0,0,1-5.36,4.9,7.26,7.26,0,0,1-7.11-2.25A1.24,1.24,0,0,0,4.79,16.7Z`,fill:`currentColor`})]})}),edit:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,className:`block w-16 h-16 text-primary-light`,focusable:!1,"aria-hidden":`true`,role:`presentation`,children:(0,c.jsxs)(`g`,{children:[(0,c.jsx)(`path`,{d:`M13.94,15a2,2,0,0,1-.67.45L9.73,16.86a2,2,0,0,1-2.6-2.6l1.41-3.53A2.18,2.18,0,0,1,9,10.05l5.88-5.88a.25.25,0,0,0-.17-.43H3.37A3.12,3.12,0,0,0,.25,6.86V20.62a3.12,3.12,0,0,0,3.12,3.12H17.13a3.12,3.12,0,0,0,3.12-3.12V9.29a.25.25,0,0,0-.43-.17Z`,fill:`currentColor`}),(0,c.jsx)(`path`,{d:`M18.57,3.3a.51.51,0,0,0-.71,0l-7.81,7.82a.36.36,0,0,0-.11.16L8.52,14.82a.51.51,0,0,0,.11.54.54.54,0,0,0,.54.11l3.54-1.42a.45.45,0,0,0,.17-.11l7.81-7.81a.51.51,0,0,0,.15-.35.53.53,0,0,0-.15-.36Z`,fill:`currentColor`}),(0,c.jsx)(`path`,{d:`M23.16,3.65a2,2,0,0,0,0-2.82,2,2,0,0,0-2.83,0L19.28,1.89a.56.56,0,0,0-.15.35.47.47,0,0,0,.15.35L21.4,4.71a.47.47,0,0,0,.35.15.57.57,0,0,0,.35-.15Z`,fill:`currentColor`})]})})},s.__docgenInfo={description:`Modal component - displays a dialog with title, description, optional icon, and action buttons.`,methods:[],displayName:`Modal`,props:{id:{required:!0,tsType:{name:`string`},description:`Unique identifier`},title:{required:!1,tsType:{name:`string`},description:`Modal title text`},titleHtml:{required:!1,tsType:{name:`string`},description:`Modal title HTML content`},titleClasses:{required:!1,tsType:{name:`string`},description:`Modal title CSS classes`},description:{required:!1,tsType:{name:`string`},description:`Description text`},descriptionHtml:{required:!1,tsType:{name:`string`},description:`Description HTML content`},descriptionClasses:{required:!1,tsType:{name:`string`},description:`Description CSS classes`},icon:{required:!1,tsType:{name:`union`,raw:`'discard' | 'delete' | 'publish' | 'changes' | 'edit'`,elements:[{name:`literal`,value:`'discard'`},{name:`literal`,value:`'delete'`},{name:`literal`,value:`'publish'`},{name:`literal`,value:`'changes'`},{name:`literal`,value:`'edit'`}]},description:`Icon type: 'discard', 'delete', 'publish', 'changes', 'edit'`},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the modal`},headingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Heading level for title (1-5)`,defaultValue:{value:`2`,computed:!1}},isDismissible:{required:!1,tsType:{name:`boolean`},description:`Whether the modal is dismissible`},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Close modal handler`},itemsPrimary:{required:!1,tsType:{name:`Array`,elements:[{name:`ModalButton`}],raw:`ModalButton[]`},description:`Primary buttons`},itemsSecondary:{required:!1,tsType:{name:`Array`,elements:[{name:`ModalButton`}],raw:`ModalButton[]`},description:`Secondary buttons`},onButtonClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(button: ModalButton, event: React.MouseEvent) => void`,signature:{arguments:[{type:{name:`ModalButton`},name:`button`},{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent`},name:`event`}],return:{name:`void`}}},description:`Button click handler`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content`}}}})),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{u(),d={title:`Modals/Modal`,component:s,tags:[`autodocs`]},f={args:{id:`default-example`,title:`Aviso`,description:`Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.`,itemsPrimary:[{text:`De acuerdo, continuar`,classes:`c-button--primary`}],isDismissible:!0}},p={args:{id:`button-loader-example`,title:`Aviso`,description:`Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.`,itemsPrimary:[{text:`De acuerdo, continuar`,state:`is-loading`,loaderClasses:`c-button-loader--primary c-button-loader--is-loading`}],isDismissible:!0}},m={args:{id:`headinglevel-example`,title:`Esto es un h3`,headingLevel:3,description:`Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.`,itemsPrimary:[{text:`De acuerdo, continuar`,classes:`c-button--primary`}],isDismissible:!0}},h={args:{id:`secondary-action-example`,title:`Editar servicio publicado`,descriptionHtml:`<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>`,itemsPrimary:[{text:`Editar servicio`,classes:`c-button--primary`}],itemsSecondary:[{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],isDismissible:!0}},g={args:{id:`caller-example`,title:`Editar servicio publicado`,descriptionHtml:`<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>`,itemsPrimary:[{text:`Editar servicio`,classes:`c-button--primary`}],itemsSecondary:[{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],isDismissible:!0}},_={args:{id:`many-actions-example`,title:`Aviso`,description:`Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.`,itemsPrimary:[{text:`Guardar cambios y publicar`,classes:`c-button--primary`},{text:`Guardar cambios`}],itemsSecondary:[{text:`Más información`,classes:`c-button--transparent`},{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],isDismissible:!0,className:`max-w-4xl`}},v={args:{id:`many-actions-is-button-loader-example`,title:`Aviso`,description:`Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.`,itemsPrimary:[{text:`Guardar cambios y publicar`,state:`is-success`,loaderClasses:`c-button-loader--primary c-button-loader--is-success`},{text:`Guardar cambios`,state:`is-loading`}],itemsSecondary:[{text:`Más información`,state:`is-loading`,loaderClasses:`c-button-loader--transparent c-button-loader--is-loading`},{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`,state:`is-success`,loaderClasses:`c-button-loader--is-success`}],isDismissible:!0,className:`max-w-4xl`}},y={args:{id:`icon-type-A-example`,title:`Borrar servicio`,description:`Esta acción no se puede deshacer ¿Estás seguro?`,itemsPrimary:[{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],itemsSecondary:[{text:`Si, borrar servicio`,classes:`c-button--alert`}],isDismissible:!0,icon:`delete`}},b={args:{id:`icon-type-B-example`,title:`Descartar cambios`,description:`Si descartas los cambios, perderás el trabajo realizado en este servicio. ¿Estás seguro?`,itemsPrimary:[{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],itemsSecondary:[{text:`Si, descartar cambios`,classes:`c-button--alert`}],isDismissible:!0,icon:`discard`}},x={args:{id:`icon-type-C-example`,title:`Hay cambios sin guardar`,description:`Si sales de la pantalla de edición sin guardar, perderás los cambios realizados.`,itemsPrimary:[{text:`Guardar y salir`,classes:`c-button--primary`}],itemsSecondary:[{text:`Descartar cambios y salir`}],isDismissible:!0,icon:`changes`}},S={args:{id:`icon-type-D-example`,title:`Editar servicio publicado`,descriptionHtml:`<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>`,itemsPrimary:[{text:`Lo sé, quiero editarlo`,classes:`c-button--primary`}],itemsSecondary:[{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],isDismissible:!0,icon:`edit`}},C={args:{id:`icon-type-E-example`,title:`Publicar`,description:`Se van a publicar todos los elementos de este servicio que están pendientes de publicación.`,itemsPrimary:[{text:`Publicar`,classes:`c-button--primary`}],itemsSecondary:[{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],isDismissible:!0,icon:`publish`}},w={args:{id:`custom-icon-example`,title:`¿Estás seguro de querer cambiar de estado a múltiples archivos?`,titleClasses:`c-h2 mt-base focus:outline-hidden focus:underline`,descriptionHtml:`<p class="c-paragraph-base">Si el contenido de la modal es muy extenso, hay que alinear los textos a la izquierda para mejorar la accesibilidad.</p><p class="c-paragraph-base">Acabas de seleccionar una gran cantidad de archivos. Si ejecutas la acción, el proceso puede tardar varios minutos. Durante el proceso <strong>no cierres la ventana del navegador ni naveges a otra página</strong> en esta pestaña.</p><p>¿Estás seguro de iniciar el proceso ahora?</p>`,descriptionClasses:`mb-lg text-left`,itemsPrimary:[{text:`Si, comenzar proceso`,classes:`c-button--primary`}],itemsSecondary:[{html:`Cancelar <span class="sr-only">y cerrar la ventana modal</span>`}],isDismissible:!0}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default-example',
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{
      text: 'De acuerdo, continuar',
      classes: 'c-button--primary'
    }],
    isDismissible: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'button-loader-example',
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{
      text: 'De acuerdo, continuar',
      state: 'is-loading',
      loaderClasses: 'c-button-loader--primary c-button-loader--is-loading'
    }],
    isDismissible: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'headinglevel-example',
    title: 'Esto es un h3',
    headingLevel: 3,
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{
      text: 'De acuerdo, continuar',
      classes: 'c-button--primary'
    }],
    isDismissible: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'secondary-action-example',
    title: 'Editar servicio publicado',
    descriptionHtml: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>',
    itemsPrimary: [{
      text: 'Editar servicio',
      classes: 'c-button--primary'
    }],
    itemsSecondary: [{
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    isDismissible: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'caller-example',
    title: 'Editar servicio publicado',
    descriptionHtml: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>',
    itemsPrimary: [{
      text: 'Editar servicio',
      classes: 'c-button--primary'
    }],
    itemsSecondary: [{
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    isDismissible: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'many-actions-example',
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{
      text: 'Guardar cambios y publicar',
      classes: 'c-button--primary'
    }, {
      text: 'Guardar cambios'
    }],
    itemsSecondary: [{
      text: 'Más información',
      classes: 'c-button--transparent'
    }, {
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    isDismissible: true,
    className: 'max-w-4xl'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'many-actions-is-button-loader-example',
    title: 'Aviso',
    description: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
    itemsPrimary: [{
      text: 'Guardar cambios y publicar',
      state: 'is-success',
      loaderClasses: 'c-button-loader--primary c-button-loader--is-success'
    }, {
      text: 'Guardar cambios',
      state: 'is-loading'
    }],
    itemsSecondary: [{
      text: 'Más información',
      state: 'is-loading',
      loaderClasses: 'c-button-loader--transparent c-button-loader--is-loading'
    }, {
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>',
      state: 'is-success',
      loaderClasses: 'c-button-loader--is-success'
    }],
    isDismissible: true,
    className: 'max-w-4xl'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'icon-type-A-example',
    title: 'Borrar servicio',
    description: 'Esta acción no se puede deshacer ¿Estás seguro?',
    itemsPrimary: [{
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    itemsSecondary: [{
      text: 'Si, borrar servicio',
      classes: 'c-button--alert'
    }],
    isDismissible: true,
    icon: 'delete'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'icon-type-B-example',
    title: 'Descartar cambios',
    description: 'Si descartas los cambios, perderás el trabajo realizado en este servicio. ¿Estás seguro?',
    itemsPrimary: [{
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    itemsSecondary: [{
      text: 'Si, descartar cambios',
      classes: 'c-button--alert'
    }],
    isDismissible: true,
    icon: 'discard'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'icon-type-C-example',
    title: 'Hay cambios sin guardar',
    description: 'Si sales de la pantalla de edición sin guardar, perderás los cambios realizados.',
    itemsPrimary: [{
      text: 'Guardar y salir',
      classes: 'c-button--primary'
    }],
    itemsSecondary: [{
      text: 'Descartar cambios y salir'
    }],
    isDismissible: true,
    icon: 'changes'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'icon-type-D-example',
    title: 'Editar servicio publicado',
    descriptionHtml: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>',
    itemsPrimary: [{
      text: 'Lo sé, quiero editarlo',
      classes: 'c-button--primary'
    }],
    itemsSecondary: [{
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    isDismissible: true,
    icon: 'edit'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'icon-type-E-example',
    title: 'Publicar',
    description: 'Se van a publicar todos los elementos de este servicio que están pendientes de publicación.',
    itemsPrimary: [{
      text: 'Publicar',
      classes: 'c-button--primary'
    }],
    itemsSecondary: [{
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    isDismissible: true,
    icon: 'publish'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'custom-icon-example',
    title: '¿Estás seguro de querer cambiar de estado a múltiples archivos?',
    titleClasses: 'c-h2 mt-base focus:outline-hidden focus:underline',
    descriptionHtml: '<p class="c-paragraph-base">Si el contenido de la modal es muy extenso, hay que alinear los textos a la izquierda para mejorar la accesibilidad.</p><p class="c-paragraph-base">Acabas de seleccionar una gran cantidad de archivos. Si ejecutas la acción, el proceso puede tardar varios minutos. Durante el proceso <strong>no cierres la ventana del navegador ni naveges a otra página</strong> en esta pestaña.</p><p>¿Estás seguro de iniciar el proceso ahora?</p>',
    descriptionClasses: 'mb-lg text-left',
    itemsPrimary: [{
      text: 'Si, comenzar proceso',
      classes: 'c-button--primary'
    }],
    itemsSecondary: [{
      html: 'Cancelar <span class="sr-only">y cerrar la ventana modal</span>'
    }],
    isDismissible: true
  }
}`,...w.parameters?.docs?.source}}},T=[`PorDefecto`,`ConButtonLoader`,`ConEncabezadoDeNivel3`,`ConAccionSecundaria`,`ConCaller`,`ConMuchasAcciones`,`ConMuchasAccionesYBotonLoader`,`ConIconoDeTipoBorrarEliminar`,`ConIconoDeTipoDescartar`,`ConIconoDeTipoCambios`,`ConIconoDeTipoEditar`,`ConIconoDeTipoPublicar`,`ConIconoPersonalizado`]}))();export{h as ConAccionSecundaria,p as ConButtonLoader,g as ConCaller,m as ConEncabezadoDeNivel3,y as ConIconoDeTipoBorrarEliminar,x as ConIconoDeTipoCambios,b as ConIconoDeTipoDescartar,S as ConIconoDeTipoEditar,C as ConIconoDeTipoPublicar,w as ConIconoPersonalizado,_ as ConMuchasAcciones,v as ConMuchasAccionesYBotonLoader,f as PorDefecto,T as __namedExportsOrder,d as default};