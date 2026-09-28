import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BRtkut15.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({id:e,level:t,className:n,children:r}){return(0,l.jsx)(`h${Math.min(Math.max(t,1),5)}`,{id:e,className:n,children:r})}function s({idPrefix:e,headingLevel:t=2,heading:n,items:r=[],showControl:i=!1,allowToggle:s=!0,showAll:u=!1,classes:d,onChangeAll:f,onToggleItem:p,children:m}){let[h,g]=(0,c.useState)(u),[_,v]=(0,c.useState)(()=>{let e={};return r.forEach((t,n)=>{e[n]=t.open??!1}),e});(0,c.useEffect)(()=>{g(u)},[u]);let y=(0,c.useCallback)(()=>{let e=!h;g(e),f?.(e)},[h,f]),b=(0,c.useCallback)(e=>{let t={..._};t[e]=!t[e],v(t),p?.(r[e],e)},[_,r,p]),x=(0,c.useCallback)((e,t)=>{let n=Array.from(document.querySelectorAll(`[data-accordion-item-button]`)),r=n.filter(e=>!e.hasAttribute(`disabled`)),i=n[t],a=r.indexOf(i),o;switch(e){case`first`:o=0;break;case`last`:o=r.length-1;break;case`prev`:o=Math.max(0,a-1);break;case`next`:o=Math.min(r.length-1,a+1);break}r[o]?.focus()},[]),S=(0,c.useCallback)((e,t)=>{switch(e.key){case`ArrowUp`:e.preventDefault(),x(`prev`,t);break;case`ArrowDown`:e.preventDefault(),x(`next`,t);break;case`Home`:e.preventDefault(),x(`first`,t);break;case`End`:e.preventDefault(),x(`last`,t);break}},[x]),C=Math.min(t+1,6),w=e=>h?!_[e]:_[e],T=(t,n)=>t.id??`${e??`accordion`}-item-${n}`;return(0,l.jsxs)(`div`,{className:a(`c-accordion`,d),children:[(0,l.jsxs)(`div`,{className:`flex justify-between`,children:[!n&&t<=0?null:(0,l.jsx)(o,{id:e?`${e}-heading`:void 0,level:t,className:`mb-0 text-lg font-semibold leading-8`,children:n?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n?.text}),i&&(0,l.jsxs)(`button`,{id:e,onClick:y,type:`button`,className:`ml-auto py-base text-sm text-neutral-dark underline focus:text-black focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus text-right`,"aria-labelledby":`${e} ${n?`${e}-heading`:``}`,children:[h?`Ocultar`:`Mostrar`,` todo`]})]}),(0,l.jsx)(`div`,{className:`c-accordion__items`,children:r.map((e,t)=>{let n=T(e,t),r=w(t);return(0,l.jsxs)(`div`,{className:`-my-px px-xs py-sm border-t border-b border-neutral-base`,onKeyDown:e=>S(e,t),children:[(0,l.jsx)(o,{id:`${n}-title`,level:C,className:`text-base font-semibold`,children:(0,l.jsxs)(`button`,{type:`button`,className:a(`c-accordion__trigger`,`group relative w-full py-sm font-semibold text-left cursor-pointer`,`focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,e.disabled&&`cursor-not-allowed opacity-50`),"aria-controls":n,"aria-expanded":r,disabled:e.disabled,onClick:()=>!e.disabled&&b(t),"data-accordion-item-button":!0,children:[e.headerHtml?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.headerHtml}}):e.headerText,!e.disabled&&(0,l.jsxs)(`span`,{className:`absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none`,"aria-hidden":`true`,children:[!r&&(0,l.jsx)(`span`,{className:a(`c-accordion__show`,e.showHeaderButton?.classes),children:e.showHeaderButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.showHeaderButton.html}}):e.showHeaderButton?.text??`Mostrar`}),s&&r&&(0,l.jsx)(`span`,{className:a(`c-accordion__hide`,e.hideHeaderButton?.classes),children:e.hideHeaderButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.hideHeaderButton.html}}):e.hideHeaderButton?.text??`Ocultar`})]})]})}),(0,l.jsx)(`p`,{className:`sr-only`,"aria-hidden":`true`,children:`Haz click en el botón anterior para mostrar u ocultar`}),r&&(0,l.jsx)(`div`,{id:n,className:a(`c-accordion__panel`,e.classes),children:e.html?(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text?(0,l.jsx)(`p`,{children:e.text}):null})]},e.id??t)})}),m]})}var c,l,u=t((()=>{c=e(n(),1),i(),l=r(),s.__docgenInfo={description:`Accordion component - collapsible sections with optional expand/collapse all control.`,methods:[],displayName:`Accordion`,props:{idPrefix:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix for the accordion`},headingLevel:{required:!1,tsType:{name:`number`},description:`Heading level (1-5) for the accordion heading`,defaultValue:{value:`2`,computed:!1}},heading:{required:!1,tsType:{name:`AccordionHeadingData`},description:`Heading configuration`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`AccordionItemData`}],raw:`AccordionItemData[]`},description:`Array of accordion items`,defaultValue:{value:`[]`,computed:!1}},showControl:{required:!1,tsType:{name:`boolean`},description:`Whether to show a control to expand/collapse all`,defaultValue:{value:`false`,computed:!1}},allowToggle:{required:!1,tsType:{name:`boolean`},description:`Whether to allow toggling individual items`,defaultValue:{value:`true`,computed:!1}},showAll:{required:!1,tsType:{name:`boolean`},description:`Whether all items should be open initially`,defaultValue:{value:`false`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the accordion container`},onChangeAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(showAll: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`showAll`}],return:{name:`void`}}},description:`Called when expand/collapse all is clicked`},onToggleItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: AccordionItemData, index: number) => void`,signature:{arguments:[{type:{name:`AccordionItemData`},name:`item`},{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Called when an item's open state changes`},children:{required:!1,tsType:{name:`ReactNode`},description:`Children (slot content for items)`}}}})),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{u(),d={title:`Views/Accordion`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Accordion component with collapsible sections and optional expand/collapse all control.`}}},argTypes:{idPrefix:{control:`text`,description:`Unique identifier prefix`},headingLevel:{control:{type:`select`},options:[1,2,3,4,5],description:`Heading level for the accordion title`},showControl:{control:`boolean`,description:`Show expand/collapse all button`},allowToggle:{control:`boolean`,description:`Allow toggling individual items`},showAll:{control:`boolean`,description:`All items expanded initially`}}},f=[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}],p={args:{idPrefix:`accordion-example`,headingLevel:3,items:f}},m={args:{idPrefix:`allowmultiple-example`,headingLevel:3,showControl:!0,items:f}},h={args:{idPrefix:`allowtoggle-example`,headingLevel:3,allowToggle:!0,items:f}},g={args:{idPrefix:`with-one-item-opened-example`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},_={args:{idPrefix:`with-2-items-opened-example`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`,open:!0}]}},v={args:{idPrefix:`accordion-disabled`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón no deshabilitado</span>`,html:`<p>Contenido</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado</span>`,html:`<p>Contenido</p>`,disabled:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado y abierto</span>`,html:`<p>Contenido</p>`,disabled:!0,open:!0}]}},y={args:{idPrefix:`heading-example`,headingLevel:3,heading:{text:`Encabezado de acordeón`},items:f}},b={args:{idPrefix:`accordion-heading-level-example`,headingLevel:4,heading:{text:`Este encabezado con h4`},items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Este Item 1 con h5</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Este Item 2 con h5</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Este Item 3 con h5</span>`,html:`<p>Contenido del item 3</p>`}]}},x={args:{idPrefix:`heading-and-show-controls-example`,headingLevel:3,heading:{text:`Encabezado de acordeón`},showControl:!0,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},S={args:{idPrefix:`show-all-accordion-example-js`,headingLevel:3,heading:{text:`Encabezado de acordeón`},showControl:!0,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},C={args:{idPrefix:`accordion-show-hide`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`,showHeaderButton:{text:`Expandir detalles`},hideHeaderButton:{text:`Contraer`}},{headerHtml:`<span class="block pr-lg pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,showHeaderButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M14 7a1 1 0 0 0-1-1H8.25A.25.25 0 0 1 8 5.75V1a1 1 0 0 0-2 0v4.75a.25.25 0 0 1-.25.25H1a1 1 0 0 0 0 2h4.75a.25.25 0 0 1 .25.25V13a1 1 0 0 0 2 0V8.25A.25.25 0 0 1 8.25 8H13a1 1 0 0 0 1-1Z" fill="currentColor" transform="scale(3.42857)"/></svg>`},hideHeaderButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M13 8H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z" fill="currentColor" transform="scale(3.42857)"/></svg>`}},{headerHtml:`<span class="block pr-lg pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`,showHeaderButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5 12.1875c-.4375 0-.8125-.1875-1.0625-.5L.25 4.75c-.375-.5-.3125-1.25.1875-1.625.5-.375 1.1875-.375 1.5625.125l5.375 6.125c.0625.0625.125.0625.25 0l5.375-6.125c.4375-.5 1.125-.5625 1.625-.125s.5625 1.125.125 1.625l-6.125 6.9375c-.25.25-.6875.4375-1.0625.4375z" fill="currentColor"/></svg>`},hideHeaderButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5625 2.8125c.4375 0 .8125.1875 1.0625.5l6.0625 6.875c.4375.4375.375 1.1875-.0625 1.625s-1.1875.375-1.625-.0625L7.5625 5.9375c-.0625-.0625-.125-.0625-.25 0l-5.3125 6c-.4375.5-1.125.5625-1.625.125s-.5625-1.125-.125-1.625l6.0625-6.875c.3125-.25.6875-.4375 1.125-.4375z" fill="currentColor"/></svg>`}},{headerHtml:`Item de acordeón 4`,html:`<p>Contenido del item 4</p>`,showHeaderButton:{text:``},hideHeaderButton:{text:``}}]}},w={args:{idPrefix:`accordion-example-pointer-events-none`,headingLevel:3,items:[{headerHtml:`<span class="block pointer-events-none">Item de acordeón 1</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pointer-events-none">Item de acordeón 2</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pointer-events-none">Item de acordeón 3</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>`,html:`<p>Contenido del item 3</p>`}]}},T={args:{idPrefix:`classes-example`,headingLevel:3,classes:`px-lg pt-base border-t border-b border-neutral-base`,heading:{text:`Accordion example`,classes:`c-h2 mb-lg uppercase`},items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,classes:`p-sm bg-primary-light`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},E={args:{idPrefix:`attributes-example`,headingLevel:3,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-example',
    headingLevel: 3,
    items: sampleItems
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'allowmultiple-example',
    headingLevel: 3,
    showControl: true,
    items: sampleItems
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'allowtoggle-example',
    headingLevel: 3,
    allowToggle: true,
    items: sampleItems
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'with-one-item-opened-example',
    headingLevel: 3,
    allowToggle: true,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>',
      open: true
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'with-2-items-opened-example',
    headingLevel: 3,
    allowToggle: true,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>',
      open: true
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>',
      open: true
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-disabled',
    headingLevel: 3,
    allowToggle: true,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón no deshabilitado</span>',
      html: '<p>Contenido</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado</span>',
      html: '<p>Contenido</p>',
      disabled: true
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado y abierto</span>',
      html: '<p>Contenido</p>',
      disabled: true,
      open: true
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'heading-example',
    headingLevel: 3,
    heading: {
      text: 'Encabezado de acordeón'
    },
    items: sampleItems
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-heading-level-example',
    headingLevel: 4,
    heading: {
      text: 'Este encabezado con h4'
    },
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Este Item 1 con h5</span>',
      html: '<p>Contenido del item 1</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Este Item 2 con h5</span>',
      html: '<p>Contenido del item 2</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Este Item 3 con h5</span>',
      html: '<p>Contenido del item 3</p>'
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'heading-and-show-controls-example',
    headingLevel: 3,
    heading: {
      text: 'Encabezado de acordeón'
    },
    showControl: true,
    allowToggle: true,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>',
      open: true
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>'
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'show-all-accordion-example-js',
    headingLevel: 3,
    heading: {
      text: 'Encabezado de acordeón'
    },
    showControl: true,
    allowToggle: true,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>',
      open: true
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>'
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-show-hide',
    headingLevel: 3,
    allowToggle: true,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>',
      showHeaderButton: {
        text: 'Expandir detalles'
      },
      hideHeaderButton: {
        text: 'Contraer'
      }
    }, {
      headerHtml: '<span class="block pr-lg pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>',
      showHeaderButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M14 7a1 1 0 0 0-1-1H8.25A.25.25 0 0 1 8 5.75V1a1 1 0 0 0-2 0v4.75a.25.25 0 0 1-.25.25H1a1 1 0 0 0 0 2h4.75a.25.25 0 0 1 .25.25V13a1 1 0 0 0 2 0V8.25A.25.25 0 0 1 8.25 8H13a1 1 0 0 0 1-1Z" fill="currentColor" transform="scale(3.42857)"/></svg>'
      },
      hideHeaderButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M13 8H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z" fill="currentColor" transform="scale(3.42857)"/></svg>'
      }
    }, {
      headerHtml: '<span class="block pr-lg pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>',
      showHeaderButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5 12.1875c-.4375 0-.8125-.1875-1.0625-.5L.25 4.75c-.375-.5-.3125-1.25.1875-1.625.5-.375 1.1875-.375 1.5625.125l5.375 6.125c.0625.0625.125.0625.25 0l5.375-6.125c.4375-.5 1.125-.5625 1.625-.125s.5625 1.125.125 1.625l-6.125 6.9375c-.25.25-.6875.4375-1.0625.4375z" fill="currentColor"/></svg>'
      },
      hideHeaderButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5625 2.8125c.4375 0 .8125.1875 1.0625.5l6.0625 6.875c.4375.4375.375 1.1875-.0625 1.625s-1.1875.375-1.625-.0625L7.5625 5.9375c-.0625-.0625-.125-.0625-.25 0l-5.3125 6c-.4375.5-1.125.5625-1.625.125s-.5625-1.125-.125-1.625l6.0625-6.875c.3125-.25.6875-.4375 1.125-.4375z" fill="currentColor"/></svg>'
      }
    }, {
      headerHtml: 'Item de acordeón 4',
      html: '<p>Contenido del item 4</p>',
      showHeaderButton: {
        text: ''
      },
      hideHeaderButton: {
        text: ''
      }
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-example-pointer-events-none',
    headingLevel: 3,
    items: [{
      headerHtml: '<span class="block pointer-events-none">Item de acordeón 1</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>',
      html: '<p>Contenido del item 1</p>'
    }, {
      headerHtml: '<span class="block pointer-events-none">Item de acordeón 2</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>',
      html: '<p>Contenido del item 2</p>'
    }, {
      headerHtml: '<span class="block pointer-events-none">Item de acordeón 3</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>',
      html: '<p>Contenido del item 3</p>'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'classes-example',
    headingLevel: 3,
    classes: 'px-lg pt-base border-t border-b border-neutral-base',
    heading: {
      text: 'Accordion example',
      classes: 'c-h2 mb-lg uppercase'
    },
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>',
      classes: 'p-sm bg-primary-light',
      open: true
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>'
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'attributes-example',
    headingLevel: 3,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>'
    }]
  }
}`,...E.parameters?.docs?.source}}},D=[`PorDefecto`,`PermiteMultiples`,`PermiteCerrar`,`ConUnItemAbierto`,`Con2ItemsAbiertos`,`DeshabilitadosConAllowToggleYAllowMultiple`,`ConEncabezado`,`ConEncabezadoDeNivel4`,`ConEncabezadoYControlesDeMostrarTodo`,`MostrarTodoUOcultarTodoConJavaScript`,`ConControlesPersonalizadosParaMostrarOcultar`,`ConHtmlEnLasCabecerasDeLosItems`,`ConClasesDeCssAplicadas`,`ConAtributosAplicados`]}))();export{_ as Con2ItemsAbiertos,E as ConAtributosAplicados,T as ConClasesDeCssAplicadas,C as ConControlesPersonalizadosParaMostrarOcultar,y as ConEncabezado,b as ConEncabezadoDeNivel4,x as ConEncabezadoYControlesDeMostrarTodo,w as ConHtmlEnLasCabecerasDeLosItems,g as ConUnItemAbierto,v as DeshabilitadosConAllowToggleYAllowMultiple,S as MostrarTodoUOcultarTodoConJavaScript,h as PermiteCerrar,m as PermiteMultiples,p as PorDefecto,D as __namedExportsOrder,d as default};