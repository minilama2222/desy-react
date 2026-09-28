import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BRtkut15.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e,t,n){return t||`${n||`tab`}-${e}`}function s(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function c({id:e,idPrefix:t,headingLevel:n=2,title:r,tablistAriaLabel:i,items:c,tablistClasses:d,className:f=`c-tabs`,children:p,onChange:m,...h}){let[g,_]=(0,l.useState)(0),v=(0,l.useRef)([]),y=c||[];(0,l.useEffect)(()=>{if(y.length>0){let e=y.findIndex((e,t)=>!e.disabled&&(e.active||t===y.findIndex(e=>!e.disabled)));e!==-1&&_(e)}},[y]);let b=y[g],x=b?.panel,S=e=>{y[e]?.disabled||(_(e),m?.(e))},C=(e,t)=>{let n=y.filter(e=>!e.disabled),r=n.findIndex((e,n)=>y[n]===y[t]);switch(e.key){case`Home`:if(e.preventDefault(),n.length>0){let e=y.findIndex(e=>!e.disabled);v.current[e]?.focus()}break;case`End`:if(e.preventDefault(),n.length>0){let e=y.findLastIndex(e=>!e.disabled);v.current[e]?.focus()}break;case`ArrowLeft`:if(e.preventDefault(),r>0){let e=y.findIndex((e,n)=>!e.disabled&&n<t);e!==-1&&v.current[e]?.focus()}break;case`ArrowRight`:e.preventDefault();for(let e=t+1;e<y.length;e++)if(!y[e].disabled){v.current[e]?.focus();break}break}},w=()=>(0,u.jsx)(`h${n}`,{className:`inline-flex items-center mb-base lg:mb-0 font-semibold`,children:r||`Contenido`});return(0,u.jsxs)(`div`,{className:a(f),id:e,...h,children:[(0,u.jsx)(`div`,{className:`c-tabs__panel-heading`,children:w()}),(0,u.jsx)(`div`,{className:a(`c-tabs__tabs`,d),role:`tablist`,"aria-label":i,children:y.map((e,n)=>{let r=o(n,e.id,t),i=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return(0,u.jsx)(`button`,{ref:e=>{v.current[n]=e},id:r,role:`tab`,type:`button`,"aria-selected":g===n?`true`:`false`,"aria-controls":`tab-${r}`,tabIndex:g!==n||e.disabled?-1:0,disabled:e.disabled||void 0,"aria-disabled":e.disabled||void 0,onClick:()=>S(n),onKeyDown:e=>C(e,n),className:a(`group c-tabs__link`,e.disabled&&`opacity-50 pointer-events-none`,g===n&&`c-tabs__link--is-active`),children:(0,u.jsx)(`span`,{className:`flex items-center pointer-events-none group-focus:bg-warning-base group-focus:shadow-outline-focus group-focus:outline-hidden`,children:e.content||i})},r)})}),(0,u.jsxs)(`div`,{id:`tab-${o(g,b?.id,t)}`,role:`tabpanel`,"aria-labelledby":o(g,b?.id,t),tabIndex:x?.tabindex??0,className:a(`c-tabs__panel`,x?.classes),children:[(0,u.jsx)(`div`,{className:`sr-only`,"aria-live":`polite`,children:x?.text}),(0,u.jsx)(`div`,{className:`c-tabs__panel-heading`,children:w()}),x?.html&&(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:x.html}}),x?.text&&(0,u.jsx)(`p`,{dangerouslySetInnerHTML:{__html:`<p>${s(x.text)}</p>`}}),b?.content]})]})}var l,u,d=t((()=>{l=e(n(),1),i(),u=r(),c.__docgenInfo={description:`Tabs component - a tabbed interface with keyboard navigation.`,methods:[],displayName:`Tabs`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},idPrefix:{required:!1,tsType:{name:`string`},description:`Prefix for generated IDs`},headingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Heading level for the panel title`,defaultValue:{value:`2`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Panel title`},tablistAriaLabel:{required:!1,tsType:{name:`string`},description:`Aria label for the tab list`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`TabsItemData`}],raw:`TabsItemData[]`},description:`Tab items configuration`},tablistClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the tab list`},className:{required:!1,tsType:{name:`string`},description:`Default CSS classes`,defaultValue:{value:`'c-tabs'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content (TabItem components)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Callback when tab changes`}},composes:[`Omit`]}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{d(),f={title:`Views/Tabs`,component:c,tags:[`autodocs`]},p={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example`,items:[{text:`Tab 1`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}},{text:`Tab 2`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`}},{text:`Tab 3`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`}},{text:`Tab 4`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`}}]}},m={args:{title:`Título con h3`,headingLevel:3,tablistAriaLabel:`headingLevel example`,idPrefix:`headinglevel-example`,items:[{text:`Tab 1 con h4`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}},{text:`Tab 2 con h4`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`}},{text:`Tab 3 con h4`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`}},{text:`Tab 4 con h4`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`}}]}},h={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example-html`,items:[{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Archivo" role="img" focusable="false"><path d="M89.355 12.518l26.46 26.46a2.917 2.917 0 01.852 2.06v84.379a2.917 2.917 0 01-2.917 2.916h-87.5a2.917 2.917 0 01-2.917-2.916V14.583a2.917 2.917 0 012.917-2.916h61.046a2.917 2.917 0 012.059.851z" fill="currentColor"/></svg> Tab 1`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}},{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Link" role="img" focusable="false"><path d="M72.368 86.946a5.833 5.833 0 00-3.167 7.624 5.833 5.833 0 01-1.266 6.358l-16.497 16.503a11.667 11.667 0 01-16.496 0l-12.379-12.373a11.667 11.667 0 010-16.502l16.52-16.497a5.91 5.91 0 016.364-1.266 5.834 5.834 0 004.451-10.786 17.698 17.698 0 00-19.063 3.804l-16.52 16.497a23.368 23.368 0 000 32.999l12.378 12.372a23.333 23.333 0 0032.994 0l16.502-16.496a17.547 17.547 0 003.798-19.075 5.833 5.833 0 00-7.619-3.162z" fill="currentColor"/></svg> Tab 2`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`}},{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Solicitud" role="img" focusable="false"><path d="M96.25 52.5h-52.5a4.375 4.375 0 000 8.75h52.5a4.375 4.375 0 000-8.75z" fill="currentColor"/></svg> Tab 3`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`}},{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Borrar" role="img" focusable="false"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M100.625 122.5h-61.25a8.75 8.75 0 0 1-8.75-8.75V35h78.75v78.75a8.75 8.75 0 0 1-8.75 8.75z" stroke-width="8.749995"/></g></svg> Tab 4`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`}}]}},g={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example-disabled`,items:[{text:`Tab 1`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}},{text:`Tab 2`,disabled:!0,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`}},{text:`Tab 3`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`}},{text:`Tab 4`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`}}]}},_={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example-active`,items:[{text:`Tab 1`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}},{text:`Tab 2`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`}},{text:`Tab 3`,active:!0,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`}},{text:`Tab 4`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`}}]}},v={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example-many-items`,items:Array.from({length:12},(e,t)=>({text:`Tab ${t+1}`,panel:{html:`<p><strong>Panel ${t+1}</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}}))}},y={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example-scroll-mobile`,className:`c-tabs--scroll`,items:Array.from({length:12},(e,t)=>({text:`Tab ${t+1}`,panel:{html:`<p><strong>Panel ${t+1}</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}}))}},b={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example-html-stacked`,className:`c-tabs--scroll`,items:[{html:`<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M89.355 12.518l26.46 26.46a2.917 2.917 0 01.852 2.06v84.379a2.917 2.917 0 01-2.917 2.916h-87.5a2.917 2.917 0 01-2.917-2.916V14.583a2.917 2.917 0 012.917-2.916h61.046a2.917 2.917 0 012.059.851z" fill="currentColor"/></svg><span class="block mx-auto">Tab 1</span></span>`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}},{html:`<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M72.368 86.946a5.833 5.833 0 00-3.167 7.624 5.833 5.833 0 01-1.266 6.358l-16.497 16.503a11.667 11.667 0 01-16.496 0l-12.379-12.373a11.667 11.667 0 010-16.502l16.52-16.497a5.91 5.91 0 016.364-1.266 5.834 5.834 0 004.451-10.786 17.698 17.698 0 00-19.063 3.804l-16.52 16.497a23.368 23.368 0 000 32.999l12.378 12.372a23.333 23.333 0 0032.994 0l16.502-16.496a17.547 17.547 0 003.798-19.075 5.833 5.833 0 00-7.619-3.162z" fill="currentColor"/></svg><span class="block mx-auto">Tab 2</span></span>`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`}},{html:`<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M96.25 52.5h-52.5a4.375 4.375 0 000 8.75h52.5a4.375 4.375 0 000-8.75z" fill="currentColor"/></svg><span class="block mx-auto">Tab 3</span></span>`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`}}]}},x={args:{tablistAriaLabel:`Ejemplo de tab`,idPrefix:`tab-example-classes`,items:[{text:`Tab 1`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`,classes:`bg-primary-light`}},{text:`Tab 2`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`,classes:`bg-primary-light`}},{text:`Tab 3`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`,classes:`bg-primary-light`}},{text:`Tab 4`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`,classes:`bg-primary-light`}}]}},S={args:{tablistClasses:`flex flex-col col-span-2 lg:col-span-1 lg:divide-y lg:divide-neutral-base mb-base lg:mb-0`,tablistAriaLabel:`Ejemplo de tab con aspecto de links list dispuesto en horizontal`,idPrefix:`tab-links-list`,items:[{html:`<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 1</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`,classes:`col-span-2 lg:col-span-2 lg:p-base`}},{html:`<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 2</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`,classes:`col-span-2 lg:col-span-2 lg:p-base`}},{html:`<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 3</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`,classes:`col-span-2 lg:col-span-2 lg:p-base`}},{html:`<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 4</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`,classes:`col-span-2 lg:col-span-2 lg:p-base`}}],className:`c-tabs--reset c-tabs--list grid grid-cols-2 lg:grid-cols-4 lg:gap-lg`}},C={args:{tablistAriaLabel:`Ejemplo de tab`,items:[{text:`Tab 1`,id:`tab-example-a-1`,panel:{html:`<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>`}},{text:`Tab 2`,id:`tab-example-b-1`,panel:{html:`<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>`}},{text:`Tab 3`,id:`tab-example-c`,panel:{html:`<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>`}},{text:`Tab 4`,id:`tab-example-d`,panel:{html:`<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>`}}]}},w={args:{tablistAriaLabel:`Ejemplo de tab`,items:[{text:`Cambios`,id:`tab-example-a-2`,panel:{html:`<div class="mb-base p-base bg-warning-light"><ul class="c-ul mb-0"><li><p>Ley 38/2003, de 17 de noviembre, General de Subvenciones. </p><p><a href="#" class="c-link text-sm">Ver detalles de la normativa</a></p></li><li>Ley 5/2015, de 25 de marzo, de Subvenciones de Aragón.</li></ul></div><div class="flex items-baseline"><p class="flex-1 text-sm text-neutral-dark">Cambios realizados hace 2 horas</p><div class="ml-auto"><button class="c-button c-button--transparent">Descartar</button><button class="c-button c-button--transparent">Editar</button></div></div>`}},{text:`Ver original`,id:`tab-example-b-2`,panel:{html:`<div class="mb-base p-base"><ul class="c-ul mb-0"><li><p>Ley 38/2003, de 17 de noviembre, General de Subvenciones.</p><p><a href="#" class="c-link text-sm">Ver detalles de la normativa</a></p></li><li>Ley 5/2015, de 25 de marzo, de Subvenciones de Aragón.</li></ul></div><p class="text-sm text-neutral-dark">Texto original</p>`}}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example',
    items: [{
      text: 'Tab 1',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>'
      }
    }, {
      text: 'Tab 2',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>'
      }
    }, {
      text: 'Tab 3',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>'
      }
    }, {
      text: 'Tab 4',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>'
      }
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Título con h3',
    headingLevel: 3,
    tablistAriaLabel: 'headingLevel example',
    idPrefix: 'headinglevel-example',
    items: [{
      text: 'Tab 1 con h4',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>'
      }
    }, {
      text: 'Tab 2 con h4',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>'
      }
    }, {
      text: 'Tab 3 con h4',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>'
      }
    }, {
      text: 'Tab 4 con h4',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>'
      }
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-html',
    items: [{
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Archivo" role="img" focusable="false"><path d="M89.355 12.518l26.46 26.46a2.917 2.917 0 01.852 2.06v84.379a2.917 2.917 0 01-2.917 2.916h-87.5a2.917 2.917 0 01-2.917-2.916V14.583a2.917 2.917 0 012.917-2.916h61.046a2.917 2.917 0 012.059.851z" fill="currentColor"/></svg> Tab 1',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>'
      }
    }, {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Link" role="img" focusable="false"><path d="M72.368 86.946a5.833 5.833 0 00-3.167 7.624 5.833 5.833 0 01-1.266 6.358l-16.497 16.503a11.667 11.667 0 01-16.496 0l-12.379-12.373a11.667 11.667 0 010-16.502l16.52-16.497a5.91 5.91 0 016.364-1.266 5.834 5.834 0 004.451-10.786 17.698 17.698 0 00-19.063 3.804l-16.52 16.497a23.368 23.368 0 000 32.999l12.378 12.372a23.333 23.333 0 0032.994 0l16.502-16.496a17.547 17.547 0 003.798-19.075 5.833 5.833 0 00-7.619-3.162z" fill="currentColor"/></svg> Tab 2',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>'
      }
    }, {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Solicitud" role="img" focusable="false"><path d="M96.25 52.5h-52.5a4.375 4.375 0 000 8.75h52.5a4.375 4.375 0 000-8.75z" fill="currentColor"/></svg> Tab 3',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>'
      }
    }, {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 mr-xs" aria-label="Borrar" role="img" focusable="false"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M100.625 122.5h-61.25a8.75 8.75 0 0 1-8.75-8.75V35h78.75v78.75a8.75 8.75 0 0 1-8.75 8.75z" stroke-width="8.749995"/></g></svg> Tab 4',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>'
      }
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-disabled',
    items: [{
      text: 'Tab 1',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>'
      }
    }, {
      text: 'Tab 2',
      disabled: true,
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>'
      }
    }, {
      text: 'Tab 3',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>'
      }
    }, {
      text: 'Tab 4',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>'
      }
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-active',
    items: [{
      text: 'Tab 1',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>'
      }
    }, {
      text: 'Tab 2',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>'
      }
    }, {
      text: 'Tab 3',
      active: true,
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>'
      }
    }, {
      text: 'Tab 4',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>'
      }
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-many-items',
    items: Array.from({
      length: 12
    }, (_, i) => ({
      text: \`Tab \${i + 1}\`,
      panel: {
        html: \`<p><strong>Panel \${i + 1}</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>\`
      }
    }))
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-scroll-mobile',
    className: 'c-tabs--scroll',
    items: Array.from({
      length: 12
    }, (_, i) => ({
      text: \`Tab \${i + 1}\`,
      panel: {
        html: \`<p><strong>Panel \${i + 1}</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>\`
      }
    }))
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-html-stacked',
    className: 'c-tabs--scroll',
    items: [{
      html: '<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M89.355 12.518l26.46 26.46a2.917 2.917 0 01.852 2.06v84.379a2.917 2.917 0 01-2.917 2.916h-87.5a2.917 2.917 0 01-2.917-2.916V14.583a2.917 2.917 0 012.917-2.916h61.046a2.917 2.917 0 012.059.851z" fill="currentColor"/></svg><span class="block mx-auto">Tab 1</span></span>',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>'
      }
    }, {
      html: '<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M72.368 86.946a5.833 5.833 0 00-3.167 7.624 5.833 5.833 0 01-1.266 6.358l-16.497 16.503a11.667 11.667 0 01-16.496 0l-12.379-12.373a11.667 11.667 0 010-16.502l16.52-16.497a5.91 5.91 0 016.364-1.266 5.834 5.834 0 004.451-10.786 17.698 17.698 0 00-19.063 3.804l-16.52 16.497a23.368 23.368 0 000 32.999l12.378 12.372a23.333 23.333 0 0032.994 0l16.502-16.496a17.547 17.547 0 003.798-19.075 5.833 5.833 0 00-7.619-3.162z" fill="currentColor"/></svg><span class="block mx-auto">Tab 2</span></span>',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>'
      }
    }, {
      html: '<span class="block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-8 h-8 mx-auto mb-sm" aria-label="Archivo" role="img" focusable="false"><path d="M96.25 52.5h-52.5a4.375 4.375 0 000 8.75h52.5a4.375 4.375 0 000-8.75z" fill="currentColor"/></svg><span class="block mx-auto">Tab 3</span></span>',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>'
      }
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    idPrefix: 'tab-example-classes',
    items: [{
      text: 'Tab 1',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        classes: 'bg-primary-light'
      }
    }, {
      text: 'Tab 2',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        classes: 'bg-primary-light'
      }
    }, {
      text: 'Tab 3',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        classes: 'bg-primary-light'
      }
    }, {
      text: 'Tab 4',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        classes: 'bg-primary-light'
      }
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tablistClasses: 'flex flex-col col-span-2 lg:col-span-1 lg:divide-y lg:divide-neutral-base mb-base lg:mb-0',
    tablistAriaLabel: 'Ejemplo de tab con aspecto de links list dispuesto en horizontal',
    idPrefix: 'tab-links-list',
    items: [{
      html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 1</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>',
        classes: 'col-span-2 lg:col-span-2 lg:p-base'
      }
    }, {
      html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 2</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>',
        classes: 'col-span-2 lg:col-span-2 lg:p-base'
      }
    }, {
      html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 3</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>',
        classes: 'col-span-2 lg:col-span-2 lg:p-base'
      }
    }, {
      html: '<span class="flex w-full"><span class="flex gap-base justify-between items-center flex-1 c-link">Tab 4</span><span class="block self-center h-full text-primary-base"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" class="hidden lg:block self-center" aria-hidden="true" focusable="false" width="1em" height="1em"><path d="M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z" fill="currentColor"></path></svg></span></span>',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>',
        classes: 'col-span-2 lg:col-span-2 lg:p-base'
      }
    }],
    className: 'c-tabs--reset c-tabs--list grid grid-cols-2 lg:grid-cols-4 lg:gap-lg'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    items: [{
      text: 'Tab 1',
      id: 'tab-example-a-1',
      panel: {
        html: '<p><strong>Panel 1</strong>. Lorem ipsum dolor sit, amet, consectetur adipisicing elit.</p>'
      }
    }, {
      text: 'Tab 2',
      id: 'tab-example-b-1',
      panel: {
        html: '<p><strong>Panel 2</strong>. Est quis exercitationem, nesciunt nulla quisquam temporibus.</p>'
      }
    }, {
      text: 'Tab 3',
      id: 'tab-example-c',
      panel: {
        html: '<p><strong>Panel 3</strong>. Provident animi dolor veniam, et quas consequuntur.</p>'
      }
    }, {
      text: 'Tab 4',
      id: 'tab-example-d',
      panel: {
        html: '<p><strong>Panel 4</strong>. Reiciendis eius in, nostrum porro? Quaerat, temporibus, optio?</p>'
      }
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    tablistAriaLabel: 'Ejemplo de tab',
    items: [{
      text: 'Cambios',
      id: 'tab-example-a-2',
      panel: {
        html: "<div class=\\"mb-base p-base bg-warning-light\\"><ul class=\\"c-ul mb-0\\"><li><p>Ley 38/2003, de 17 de noviembre, General de Subvenciones. </p><p><a href=\\"#\\" class=\\"c-link text-sm\\">Ver detalles de la normativa</a></p></li><li>Ley 5/2015, de 25 de marzo, de Subvenciones de Aragón.</li></ul></div><div class=\\"flex items-baseline\\"><p class=\\"flex-1 text-sm text-neutral-dark\\">Cambios realizados hace 2 horas</p><div class=\\"ml-auto\\"><button class=\\"c-button c-button--transparent\\">Descartar</button><button class=\\"c-button c-button--transparent\\">Editar</button></div></div>"
      }
    }, {
      text: 'Ver original',
      id: 'tab-example-b-2',
      panel: {
        html: "<div class=\\"mb-base p-base\\"><ul class=\\"c-ul mb-0\\"><li><p>Ley 38/2003, de 17 de noviembre, General de Subvenciones.</p><p><a href=\\"#\\" class=\\"c-link text-sm\\">Ver detalles de la normativa</a></p></li><li>Ley 5/2015, de 25 de marzo, de Subvenciones de Aragón.</li></ul></div><p class=\\"text-sm text-neutral-dark\\">Texto original</p>"
      }
    }]
  }
}`,...w.parameters?.docs?.source}}},T=[`PorDefecto`,`ConEncabezado`,`ConHtmlEnTabs`,`ConItemDeshabilitado`,`ConItemActivo`,`ConMuchosItems`,`ConScrollEnMovil`,`ConHtmlEnTabsParaMobile`,`ConClasesDeCssAplicadas`,`ConAspectoDeLinksList`,`ConIdsIndividuales`,`EjemploComplejo`]}))();export{S as ConAspectoDeLinksList,x as ConClasesDeCssAplicadas,m as ConEncabezado,h as ConHtmlEnTabs,b as ConHtmlEnTabsParaMobile,C as ConIdsIndividuales,_ as ConItemActivo,g as ConItemDeshabilitado,v as ConMuchosItems,y as ConScrollEnMovil,w as EjemploComplejo,p as PorDefecto,T as __namedExportsOrder,f as default};