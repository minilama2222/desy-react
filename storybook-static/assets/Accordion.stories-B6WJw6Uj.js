import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({id:e,level:t,className:n,children:r}){return(0,l.jsx)(`h${Math.min(Math.max(t,1),5)}`,{id:e,className:n,children:r})}function s({idPrefix:e,headingLevel:t=2,heading:n,items:r=[],showControl:i=!1,allowToggle:s=!0,showAll:u=!1,classes:d,onChangeAll:f,onToggleItem:p,children:m}){let[h,g]=(0,c.useState)(u),[_,v]=(0,c.useState)(()=>{let e={};return r.forEach((t,n)=>{e[n]=t.open??!1}),e});(0,c.useEffect)(()=>{g(u)},[u]);let y=(0,c.useCallback)(()=>{let e=!h;g(e),f?.(e)},[h,f]),b=(0,c.useCallback)(e=>{let t={..._};t[e]=!t[e],v(t),p?.(r[e],e)},[_,r,p]),x=(0,c.useCallback)((e,t)=>{let n=Array.from(document.querySelectorAll(`[data-accordion-item-button]`)),r=n.filter(e=>!e.hasAttribute(`disabled`)),i=n[t],a=r.indexOf(i),o;switch(e){case`first`:o=0;break;case`last`:o=r.length-1;break;case`prev`:o=Math.max(0,a-1);break;case`next`:o=Math.min(r.length-1,a+1);break}r[o]?.focus()},[]),S=(0,c.useCallback)((e,t)=>{switch(e.key){case`ArrowUp`:e.preventDefault(),x(`prev`,t);break;case`ArrowDown`:e.preventDefault(),x(`next`,t);break;case`Home`:e.preventDefault(),x(`first`,t);break;case`End`:e.preventDefault(),x(`last`,t);break}},[x]),C=Math.min(t+1,6),w=e=>h?!_[e]:_[e],T=(t,n)=>t.id??`${e??`accordion`}-item-${n}`;return(0,l.jsxs)(`div`,{className:a(`c-accordion`,d),children:[(0,l.jsxs)(`div`,{className:`flex justify-between`,children:[!n&&t<=0?null:(0,l.jsx)(o,{id:e?`${e}-heading`:void 0,level:t,className:`mb-0 text-lg font-semibold leading-8`,children:n?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n?.text}),i&&(0,l.jsxs)(`button`,{id:e,onClick:y,type:`button`,className:`ml-auto py-base text-sm text-neutral-dark underline focus:text-black focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus text-right`,"aria-labelledby":`${e} ${n?`${e}-heading`:``}`,children:[h?`Ocultar`:`Mostrar`,` todo`]})]}),(0,l.jsx)(`div`,{className:`c-accordion__items`,children:r.map((e,t)=>{let n=T(e,t),r=w(t);return(0,l.jsxs)(`div`,{className:`-my-px px-xs py-sm border-t border-b border-neutral-base`,onKeyDown:e=>S(e,t),children:[(0,l.jsx)(o,{id:`${n}-title`,level:C,className:`text-base font-semibold`,children:(0,l.jsxs)(`button`,{type:`button`,className:a(`c-accordion__trigger`,`group relative w-full py-sm font-semibold text-left cursor-pointer`,`focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,e.disabled&&`cursor-not-allowed opacity-50`),"aria-controls":n,"aria-expanded":r,disabled:e.disabled,onClick:()=>!e.disabled&&b(t),"data-accordion-item-button":!0,children:[e.headerHtml?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.headerHtml}}):e.headerText,!e.disabled&&(0,l.jsxs)(`span`,{className:`absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none`,"aria-hidden":`true`,children:[!r&&(0,l.jsx)(`span`,{className:a(`c-accordion__show`,e.showHeaderButton?.classes),children:e.showHeaderButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.showHeaderButton.html}}):e.showHeaderButton?.text??`Mostrar`}),s&&r&&(0,l.jsx)(`span`,{className:a(`c-accordion__hide`,e.hideHeaderButton?.classes),children:e.hideHeaderButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.hideHeaderButton.html}}):e.hideHeaderButton?.text??`Ocultar`})]})]})}),(0,l.jsx)(`p`,{className:`sr-only`,"aria-hidden":`true`,children:`Haz click en el botón anterior para mostrar u ocultar`}),r&&(0,l.jsx)(`div`,{id:n,className:a(`c-accordion__panel`,e.classes),children:e.html?(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text?(0,l.jsx)(`p`,{children:e.text}):null})]},e.id??t)})}),m]})}var c,l,u=t((()=>{c=e(n(),1),i(),l=r(),s.__docgenInfo={description:`Accordion component - collapsible sections with optional expand/collapse all control.`,methods:[],displayName:`Accordion`,props:{idPrefix:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix for the accordion`},headingLevel:{required:!1,tsType:{name:`number`},description:`Heading level (1-5) for the accordion heading`,defaultValue:{value:`2`,computed:!1}},heading:{required:!1,tsType:{name:`AccordionHeadingData`},description:`Heading configuration`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`AccordionItemData`}],raw:`AccordionItemData[]`},description:`Array of accordion items`,defaultValue:{value:`[]`,computed:!1}},showControl:{required:!1,tsType:{name:`boolean`},description:`Whether to show a control to expand/collapse all`,defaultValue:{value:`false`,computed:!1}},allowToggle:{required:!1,tsType:{name:`boolean`},description:`Whether to allow toggling individual items`,defaultValue:{value:`true`,computed:!1}},showAll:{required:!1,tsType:{name:`boolean`},description:`Whether all items should be open initially`,defaultValue:{value:`false`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the accordion container`},onChangeAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(showAll: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`showAll`}],return:{name:`void`}}},description:`Called when expand/collapse all is clicked`},onToggleItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: AccordionItemData, index: number) => void`,signature:{arguments:[{type:{name:`AccordionItemData`},name:`item`},{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Called when an item's open state changes`},children:{required:!1,tsType:{name:`ReactNode`},description:`Children (slot content for items)`}}}})),d,f,p,m,h,g,_,v;t((()=>{u(),d={title:`Views/Accordion`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Accordion component with collapsible sections and optional expand/collapse all control.`}}},argTypes:{idPrefix:{control:`text`,description:`Unique identifier prefix`},headingLevel:{control:{type:`select`},options:[1,2,3,4,5],description:`Heading level for the accordion title`},showControl:{control:`boolean`,description:`Show expand/collapse all button`},allowToggle:{control:`boolean`,description:`Allow toggling individual items`},showAll:{control:`boolean`,description:`All items expanded initially`}}},f=[{id:`item-1`,headerText:`¿Qué es el sistema de大衣建筑设计?`,text:`El sistema de大衣建筑设计 es un conjunto de herramientas y servicios que...`,open:!0},{id:`item-2`,headerText:`¿Cómo puedo registrar una solicitud?`,headerHtml:`<strong>¿Cómo puedo</strong> registrar una solicitud?`,text:`Para registrar una solicitud, debe seguir los pasos indicados en el portal.`},{id:`item-3`,headerText:`¿Necesito certificado digital?`,text:`Sí, es necesario disponer de un certificado digital válido.`,disabled:!0},{id:`item-4`,headerText:`¿Cuánto tarda el proceso?`,html:`<p>El proceso suele tardar entre <strong>5 y 10 días hábiles</strong>.</p>`}],p={args:{idPrefix:`accordion-example`,heading:{text:`Preguntas frecuentes`},headingLevel:2,items:f,showControl:!0,allowToggle:!0}},m={args:{idPrefix:`accordion-numbered`,heading:{text:`Pasos del procedimiento`},headingLevel:2,items:f.map((e,t)=>({...e,headerHtml:`<span class="mr-2 font-bold text-primary-base">${t+1}.</span> ${e.headerText}`})),showControl:!1,allowToggle:!0}},h={args:{idPrefix:`accordion-expanded`,heading:{text:`Acordeón expandido`},headingLevel:2,items:f,showControl:!0,allowToggle:!0,showAll:!0}},g={args:{idPrefix:`accordion-html`,heading:{text:`Información técnica`},headingLevel:2,items:[{id:`html-1`,headerText:`Requisitos del sistema`,html:`<ul class="list-disc pl-4">
          <li>Navegador compatible (Chrome, Firefox, Edge, Safari)</li>
          <li>JavaScript habilitado</li>
          <li>Conexión a internet estable</li>
        </ul>`,open:!0},{id:`html-2`,headerText:`Contacto de soporte`,html:`<p>Para más información, contacte con <a href="mailto:soporte@ejemplo.es" class="c-link">soporte@ejemplo.es</a></p>`}]}},_={args:{idPrefix:`accordion-disabled`,heading:{text:`Accordion con item deshabilitado`},headingLevel:2,items:[{id:`enabled-1`,headerText:`Opción disponible`,text:`Esta opción está disponible para su selección.`,open:!0},{id:`disabled-1`,headerText:`Opción temporalmente no disponible`,text:`Esta opción está temporalmente deshabilitada.`,disabled:!0},{id:`enabled-2`,headerText:`Otra opción disponible`,text:`Puede seleccionar esta opción.`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-example',
    heading: {
      text: 'Preguntas frecuentes'
    },
    headingLevel: 2,
    items: sampleItems,
    showControl: true,
    allowToggle: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-numbered',
    heading: {
      text: 'Pasos del procedimiento'
    },
    headingLevel: 2,
    items: sampleItems.map((item, i) => ({
      ...item,
      headerHtml: \`<span class="mr-2 font-bold text-primary-base">\${i + 1}.</span> \${item.headerText}\`
    })),
    showControl: false,
    allowToggle: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-expanded',
    heading: {
      text: 'Acordeón expandido'
    },
    headingLevel: 2,
    items: sampleItems,
    showControl: true,
    allowToggle: true,
    showAll: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-html',
    heading: {
      text: 'Información técnica'
    },
    headingLevel: 2,
    items: [{
      id: 'html-1',
      headerText: 'Requisitos del sistema',
      html: \`<ul class="list-disc pl-4">
          <li>Navegador compatible (Chrome, Firefox, Edge, Safari)</li>
          <li>JavaScript habilitado</li>
          <li>Conexión a internet estable</li>
        </ul>\`,
      open: true
    }, {
      id: 'html-2',
      headerText: 'Contacto de soporte',
      html: \`<p>Para más información, contacte con <a href="mailto:soporte@ejemplo.es" class="c-link">soporte@ejemplo.es</a></p>\`
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-disabled',
    heading: {
      text: 'Accordion con item deshabilitado'
    },
    headingLevel: 2,
    items: [{
      id: 'enabled-1',
      headerText: 'Opción disponible',
      text: 'Esta opción está disponible para su selección.',
      open: true
    }, {
      id: 'disabled-1',
      headerText: 'Opción temporalmente no disponible',
      text: 'Esta opción está temporalmente deshabilitada.',
      disabled: true
    }, {
      id: 'enabled-2',
      headerText: 'Otra opción disponible',
      text: 'Puede seleccionar esta opción.'
    }]
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithNumberedItems`,`InitiallyExpanded`,`WithHtmlContent`,`WithDisabledItem`]}))();export{p as Default,h as InitiallyExpanded,_ as WithDisabledItem,g as WithHtmlContent,m as WithNumberedItems,v as __namedExportsOrder,d as default};