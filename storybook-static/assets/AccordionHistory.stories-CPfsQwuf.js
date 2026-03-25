import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({id:e,level:t,className:n,children:r}){return(0,l.jsx)(`h${Math.min(Math.max(t,1),5)}`,{id:e,className:n,children:r})}function s({idPrefix:e,headingLevel:t=2,heading:n,items:r=[],showControl:i=!1,allowToggle:s=!0,showAll:f=!1,classes:p,onChangeAll:m,onToggleItem:h,children:g}){let[_,v]=(0,c.useState)(f),[y,b]=(0,c.useState)(()=>{let e={};return r.forEach((t,n)=>{e[n]=t.open??!1}),e}),x=(0,c.useCallback)(()=>{let e=!_;v(e),m?.(e)},[_,m]),S=(0,c.useCallback)(e=>{let t={...y};t[e]=!t[e],b(t),h?.(r[e],e)},[y,r,h]),C=(0,c.useCallback)((e,t)=>{let n=Array.from(document.querySelectorAll(`[data-accordion-history-button]`)),r=n.filter(e=>!e.hasAttribute(`disabled`)),i=n[t],a=r.indexOf(i),o;switch(e){case`first`:o=0;break;case`last`:o=r.length-1;break;case`prev`:o=Math.max(0,a-1);break;case`next`:o=Math.min(r.length-1,a+1);break}r[o]?.focus()},[]),w=(0,c.useCallback)((e,t)=>{switch(e.key){case`ArrowUp`:e.preventDefault(),C(`prev`,t);break;case`ArrowDown`:e.preventDefault(),C(`next`,t);break;case`Home`:e.preventDefault(),C(`first`,t);break;case`End`:e.preventDefault(),C(`last`,t);break}},[C]),T=Math.min(t+1,6),E=e=>_?!y[e]:y[e],D=(t,n)=>t.id??`${e??`accordion-history`}-item-${n}`,O=e=>{switch(e){case`current`:return`border-2 border-primary-base`;case`pending`:return`border-2 border-neutral-base border-dashed`;case`muted`:return`border-2 border-neutral-base`;case`currentmuted`:return`border-2 border-neutral-base`;default:return`border-2 border-primary-base`}},k=(e,t=!1)=>{if(t)switch(e){case`current`:return`border-2 border-neutral-base border-dashed`;case`pending`:return`border-2 border-neutral-base border-dashed`;case`muted`:return`border-2 border-neutral-base`;case`currentmuted`:return`border-2 border-neutral-base border-dashed`;default:return`border-2 border-primary-base`}switch(e){case`current`:return`border-2 border-neutral-base border-dashed`;case`pending`:return`border-2 border-neutral-base border-dashed`;case`muted`:return`border-2 border-neutral-base`;case`currentmuted`:return`border-2 border-neutral-base`;default:return`border-2 border-primary-base`}};return(0,l.jsxs)(`div`,{className:a(`c-accordion`,p),children:[(0,l.jsxs)(`div`,{className:`flex justify-between`,children:[!n&&t<=0?null:(0,l.jsx)(o,{id:e?`${e}-heading`:void 0,level:t,className:n?.classes||`c-h2 mb-base`,children:n?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n?.text}),i&&(0,l.jsxs)(`button`,{id:e,onClick:x,type:`button`,className:`ml-auto py-base text-sm text-neutral-dark underline focus:text-black focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus text-right`,children:[_?`Mostrar`:`Ocultar`,` todo`]})]}),(0,l.jsx)(`div`,{className:`c-accordion__items pl-lg`,children:r.map((e,t)=>{let n=D(e,t),i=E(t),c=t===0,f=t===r.length-1,p=e.status??`past`;return(0,l.jsxs)(`div`,{className:`relative -my-px px-xs py-sm border-t border-b border-neutral-base`,onKeyDown:e=>w(e,t),children:[!c&&(0,l.jsx)(`div`,{className:a(`absolute -top-px -left-5 h-6`,O(p))}),!f&&(0,l.jsx)(`div`,{className:a(`absolute top-6 bottom-0 -left-5`,k(p,p===`past`))}),(0,l.jsx)(d,{status:p}),(0,l.jsx)(o,{id:`${n}-title`,level:T,children:(0,l.jsxs)(`button`,{type:`button`,className:a(`c-accordion__trigger`,`group relative w-full py-sm font-semibold text-left cursor-pointer`,`focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,e.disabled&&`cursor-not-allowed opacity-50`),"aria-controls":n,"aria-expanded":i,"aria-describedby":`${n}-status`,disabled:e.disabled,onClick:()=>!e.disabled&&S(t),"data-accordion-history-button":!0,children:[e.headerHtml?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.headerHtml}}):e.headerText,(0,l.jsxs)(`span`,{id:`${n}-status`,className:`sr-only`,children:[`(`,u(p),`)`]}),!e.disabled&&(0,l.jsxs)(`span`,{className:`absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none`,"aria-hidden":`true`,children:[!i&&(0,l.jsx)(`span`,{className:a(`c-accordion__show`,e.showButton?.classes),children:e.showButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.showButton.html}}):e.showButton?.text??`Mostrar`}),s&&i&&(0,l.jsx)(`span`,{className:a(`c-accordion__hide`,e.hideButton?.classes),children:e.hideButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.hideButton.html}}):e.hideButton?.text??`Ocultar`})]})]})}),(0,l.jsx)(`p`,{className:`sr-only`,"aria-hidden":`true`,children:`Haz click en el botón anterior para mostrar u ocultar`}),!f&&i&&(0,l.jsx)(`div`,{className:a(`absolute top-4 bottom-0 -left-6 -my-sm`,k(p,p===`past`))}),i&&(0,l.jsx)(`div`,{id:n,className:a(`c-accordion__panel relative`,e.classes),children:e.html?(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text?(0,l.jsx)(`p`,{children:e.text}):null})]},e.id??t)})}),g]})}var c,l,u,d,f=t((()=>{c=e(n(),1),i(),l=r(),u=e=>{switch(e){case`current`:return`Estado: actual`;case`pending`:return`Estado: pendiente`;case`muted`:return`Estado: muteado`;case`currentmuted`:return`Estado: actual muteado`;default:return`Estado: pasado`}},d=({status:e})=>{let t=`absolute top-5 -left-6 w-3 h-3 rounded-full`;switch(e){case`current`:return(0,l.jsx)(`div`,{className:a(t,`bg-white ring-2 ring-primary-base`),role:`img`});case`pending`:return(0,l.jsx)(`div`,{className:a(t,`bg-white border-2 border-neutral-base`),role:`img`});case`muted`:return(0,l.jsx)(`div`,{className:a(t,`bg-neutral-base border-2 border-neutral-base`),role:`img`});case`currentmuted`:return(0,l.jsx)(`div`,{className:a(t,`bg-neutral-base ring-2 ring-neutral-base`),role:`img`});default:return(0,l.jsx)(`div`,{className:a(t,`bg-primary-base border-2 border-primary-base`),role:`img`})}},s.__docgenInfo={description:`AccordionHistory component - accordion with history/version tracking timeline.`,methods:[],displayName:`AccordionHistory`,props:{idPrefix:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix`},headingLevel:{required:!1,tsType:{name:`number`},description:`Heading level (1-5)`,defaultValue:{value:`2`,computed:!1}},heading:{required:!1,tsType:{name:`AccordionHistoryHeadingData`},description:`Heading configuration`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`AccordionHistoryItemData`}],raw:`AccordionHistoryItemData[]`},description:`Array of history items`,defaultValue:{value:`[]`,computed:!1}},showControl:{required:!1,tsType:{name:`boolean`},description:`Whether to show expand/collapse all`,defaultValue:{value:`false`,computed:!1}},allowToggle:{required:!1,tsType:{name:`boolean`},description:`Whether to allow toggling individual items`,defaultValue:{value:`true`,computed:!1}},showAll:{required:!1,tsType:{name:`boolean`},description:`Whether all items are expanded`,defaultValue:{value:`false`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`},onChangeAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(showAll: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`showAll`}],return:{name:`void`}}},description:`Called when expand/collapse all changes`},onToggleItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: AccordionHistoryItemData, index: number) => void`,signature:{arguments:[{type:{name:`AccordionHistoryItemData`},name:`item`},{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Called when item toggle changes`},children:{required:!1,tsType:{name:`ReactNode`},description:`Children slot`}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{f(),p={title:`Views/AccordionHistory`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Accordion with history/version tracking timeline with status indicators.`}}},argTypes:{idPrefix:{control:`text`},headingLevel:{control:{type:`select`},options:[1,2,3,4,5]},showControl:{control:`boolean`},allowToggle:{control:`boolean`},showAll:{control:`boolean`}}},m=[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}],h={args:{idPrefix:`accordion-example`,headingLevel:3,items:m}},g={args:{idPrefix:`accordion-status`,headingLevel:3,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón muteado</span>`,html:`<p>Contenido</p>`,status:`muted`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón actual muteado</span>`,html:`<p>Contenido</p>`,status:`currentmuted`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón pasado</span>`,html:`<p>Contenido</p>`,status:`past`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón actual</span>`,html:`<p>Contenido</p>`,status:`current`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón pendiente</span>`,html:`<p>Contenido</p>`,status:`pending`}]}},_={args:{idPrefix:`allowmultiple-example`,headingLevel:3,showControl:!0,items:m}},v={args:{idPrefix:`allowtoggle-example`,headingLevel:3,allowToggle:!0,showControl:!1,items:m}},y={args:{idPrefix:`with-one-item-opened-example`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},b={args:{idPrefix:`with-2-items-opened-example`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`,open:!0}]}},x={args:{idPrefix:`accordion-disabled`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón no deshabilitado</span>`,html:`<p>Contenido</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado</span>`,html:`<p>Contenido</p>`,disabled:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón deshabilitado y abierto</span>`,html:`<p>Contenido</p>`,disabled:!0,open:!0}]}},S={args:{idPrefix:`heading-example`,headingLevel:3,heading:{text:`Encabezado de acordeón`},items:m}},C={args:{idPrefix:`accordion-heading-level-example`,headingLevel:4,heading:{text:`Este encabezado con h4`},items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Este Item 1 con h5</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Este Item 2 con h5</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Este Item 3 con h5</span>`,html:`<p>Contenido del item 3</p>`}]}},w={args:{idPrefix:`heading-and-show-controls-example`,headingLevel:3,heading:{text:`Encabezado de acordeón`},showControl:!0,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},T={args:{idPrefix:`show-all-accordion-example-history-js`,headingLevel:3,heading:{text:`Encabezado de acordeón`},showControl:!0,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},E={args:{idPrefix:`accordion-show-hide`,headingLevel:3,allowToggle:!0,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`,showButton:{text:`Expandir detalles`},hideButton:{text:`Contraer`}},{headerHtml:`<span class="block pr-lg pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,showButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M14 7a1 1 0 0 0-1-1H8.25A.25.25 0 0 1 8 5.75V1a1 1 0 0 0-2 0v4.75a.25.25 0 0 1-.25.25H1a1 1 0 0 0 0 2h4.75a.25.25 0 0 1 .25.25V13a1 1 0 0 0 2 0V8.25A.25.25 0 0 1 8.25 8H13a1 1 0 0 0 1-1Z" fill="currentColor" transform="scale(3.42857)"/></svg>`},hideButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M13 8H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z" fill="currentColor" transform="scale(3.42857)"/></svg>`}},{headerHtml:`<span class="block pr-lg pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`,showButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5 12.1875c-.4375 0-.8125-.1875-1.0625-.5L.25 4.75c-.375-.5-.3125-1.25.1875-1.625.5-.375 1.1875-.375 1.5625.125l5.375 6.125c.0625.0625.125.0625.25 0l5.375-6.125c.4375-.5 1.125-.5625 1.625-.125s.5625 1.125.125 1.625l-6.125 6.9375c-.25.25-.6875.4375-1.0625.4375z" fill="currentColor"/></svg>`},hideButton:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5625 2.8125c.4375 0 .8125.1875 1.0625.5l6.0625 6.875c.4375.4375.375 1.1875-.0625 1.625s-1.1875.375-1.625-.0625L7.5625 5.9375c-.0625-.0625-.125-.0625-.25 0l-5.3125 6c-.4375.5-1.125.5625-1.625.125s-.5625-1.125-.125-1.625l6.0625-6.875c.3125-.25.6875-.4375 1.125-.4375z" fill="currentColor"/></svg>`}},{headerHtml:`Item de acordeón 4`,html:`<p>Contenido del item 4</p>`,showButton:{text:``},hideButton:{text:``}}]}},D={args:{idPrefix:`accordion-example-pointer-events-none`,headingLevel:3,items:[{headerHtml:`<span class="block pointer-events-none">Item de acordeón 1</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pointer-events-none">Item de acordeón 2</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pointer-events-none">Item de acordeón 3</span><span class="block pointer-events-none font-normal">El subelemento también recibe eventos</span>`,html:`<p>Contenido del item 3</p>`}]}},O={args:{idPrefix:`classes-example`,headingLevel:3,classes:`px-lg pt-base border-t border-b border-neutral-base`,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`,classes:`p-sm bg-primary-light`,open:!0},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},k={args:{idPrefix:`attributes-example`,headingLevel:3,items:[{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>`,html:`<p>Contenido del item 1</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 2</span>`,html:`<p>Contenido del item 2</p>`},{headerHtml:`<span class="block pr-2xl pointer-events-none">Item de acordeón 3</span>`,html:`<p>Contenido del item 3</p>`}]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-example',
    headingLevel: 3,
    items: sampleItems
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-status',
    headingLevel: 3,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón muteado</span>',
      html: '<p>Contenido</p>',
      status: 'muted'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón actual muteado</span>',
      html: '<p>Contenido</p>',
      status: 'currentmuted'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón pasado</span>',
      html: '<p>Contenido</p>',
      status: 'past'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón actual</span>',
      html: '<p>Contenido</p>',
      status: 'current'
    }, {
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón pendiente</span>',
      html: '<p>Contenido</p>',
      status: 'pending'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'allowmultiple-example',
    headingLevel: 3,
    showControl: true,
    items: sampleItems
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'allowtoggle-example',
    headingLevel: 3,
    allowToggle: true,
    showControl: false,
    items: sampleItems
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'heading-example',
    headingLevel: 3,
    heading: {
      text: 'Encabezado de acordeón'
    },
    items: sampleItems
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'show-all-accordion-example-history-js',
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-show-hide',
    headingLevel: 3,
    allowToggle: true,
    items: [{
      headerHtml: '<span class="block pr-2xl pointer-events-none">Item de acordeón 1</span>',
      html: '<p>Contenido del item 1</p>',
      showButton: {
        text: 'Expandir detalles'
      },
      hideButton: {
        text: 'Contraer'
      }
    }, {
      headerHtml: '<span class="block pr-lg pointer-events-none">Item de acordeón 2</span>',
      html: '<p>Contenido del item 2</p>',
      showButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M14 7a1 1 0 0 0-1-1H8.25A.25.25 0 0 1 8 5.75V1a1 1 0 0 0-2 0v4.75a.25.25 0 0 1-.25.25H1a1 1 0 0 0 0 2h4.75a.25.25 0 0 1 .25.25V13a1 1 0 0 0 2 0V8.25A.25.25 0 0 1 8.25 8H13a1 1 0 0 0 1-1Z" fill="currentColor" transform="scale(3.42857)"/></svg>'
      },
      hideButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-4 h-4"><path d="M13 8H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Z" fill="currentColor" transform="scale(3.42857)"/></svg>'
      }
    }, {
      headerHtml: '<span class="block pr-lg pointer-events-none">Item de acordeón 3</span>',
      html: '<p>Contenido del item 3</p>',
      showButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5 12.1875c-.4375 0-.8125-.1875-1.0625-.5L.25 4.75c-.375-.5-.3125-1.25.1875-1.625.5-.375 1.1875-.375 1.5625.125l5.375 6.125c.0625.0625.125.0625.25 0l5.375-6.125c.4375-.5 1.125-.5625 1.625-.125s.5625 1.125.125 1.625l-6.125 6.9375c-.25.25-.6875.4375-1.0625.4375z" fill="currentColor"/></svg>'
      },
      hideButton: {
        html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-4 h-4"><path d="M7.5625 2.8125c.4375 0 .8125.1875 1.0625.5l6.0625 6.875c.4375.4375.375 1.1875-.0625 1.625s-1.1875.375-1.625-.0625L7.5625 5.9375c-.0625-.0625-.125-.0625-.25 0l-5.3125 6c-.4375.5-1.125.5625-1.625.125s-.5625-1.125-.125-1.625l6.0625-6.875c.3125-.25.6875-.4375 1.125-.4375z" fill="currentColor"/></svg>'
      }
    }, {
      headerHtml: 'Item de acordeón 4',
      html: '<p>Contenido del item 4</p>',
      showButton: {
        text: ''
      },
      hideButton: {
        text: ''
      }
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'classes-example',
    headingLevel: 3,
    classes: 'px-lg pt-base border-t border-b border-neutral-base',
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`PorDefecto`,`ConEstado`,`PermiteMultiples`,`PermiteCerrar`,`ConUnItemAbierto`,`Con2ItemsAbiertos`,`DeshabilitadosConAllowToggleYAllowMultiple`,`ConEncabezado`,`ConEncabezadoDeNivel4`,`ConEncabezadoYControlesDeMostrarTodo`,`MostrarTodoUOcultarTodoConJavaScript`,`ConControlesPersonalizadosParaMostrarOcultar`,`ConHtmlEnLasCabecerasDeLosItems`,`ConClasesDeCssAplicadas`,`ConAtributosAplicados`]}))();export{b as Con2ItemsAbiertos,k as ConAtributosAplicados,O as ConClasesDeCssAplicadas,E as ConControlesPersonalizadosParaMostrarOcultar,S as ConEncabezado,C as ConEncabezadoDeNivel4,w as ConEncabezadoYControlesDeMostrarTodo,g as ConEstado,D as ConHtmlEnLasCabecerasDeLosItems,y as ConUnItemAbierto,x as DeshabilitadosConAllowToggleYAllowMultiple,T as MostrarTodoUOcultarTodoConJavaScript,v as PermiteCerrar,_ as PermiteMultiples,h as PorDefecto,A as __namedExportsOrder,p as default};