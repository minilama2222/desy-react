import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({id:e,level:t,className:n,children:r}){return(0,l.jsx)(`h${Math.min(Math.max(t,1),5)}`,{id:e,className:n,children:r})}function s({idPrefix:e,headingLevel:t=2,heading:n,items:r=[],showControl:i=!1,allowToggle:s=!0,showAll:f=!1,classes:p,onChangeAll:m,onToggleItem:h,children:g}){let[_,v]=(0,c.useState)(f),[y,b]=(0,c.useState)(()=>{let e={};return r.forEach((t,n)=>{e[n]=t.open??!1}),e}),x=(0,c.useCallback)(()=>{let e=!_;v(e),m?.(e)},[_,m]),S=(0,c.useCallback)(e=>{let t={...y};t[e]=!t[e],b(t),h?.(r[e],e)},[y,r,h]),C=(0,c.useCallback)((e,t)=>{let n=Array.from(document.querySelectorAll(`[data-accordion-history-button]`)),r=n.filter(e=>!e.hasAttribute(`disabled`)),i=n[t],a=r.indexOf(i),o;switch(e){case`first`:o=0;break;case`last`:o=r.length-1;break;case`prev`:o=Math.max(0,a-1);break;case`next`:o=Math.min(r.length-1,a+1);break}r[o]?.focus()},[]),w=(0,c.useCallback)((e,t)=>{switch(e.key){case`ArrowUp`:e.preventDefault(),C(`prev`,t);break;case`ArrowDown`:e.preventDefault(),C(`next`,t);break;case`Home`:e.preventDefault(),C(`first`,t);break;case`End`:e.preventDefault(),C(`last`,t);break}},[C]),T=Math.min(t+1,6),E=e=>_?!y[e]:y[e],D=(t,n)=>t.id??`${e??`accordion-history`}-item-${n}`,O=e=>{switch(e){case`current`:return`border-2 border-primary-base`;case`pending`:return`border-2 border-neutral-base border-dashed`;case`muted`:return`border-2 border-neutral-base`;case`currentmuted`:return`border-2 border-neutral-base`;default:return`border-2 border-primary-base`}},k=(e,t=!1)=>{if(t)switch(e){case`current`:return`border-2 border-neutral-base border-dashed`;case`pending`:return`border-2 border-neutral-base border-dashed`;case`muted`:return`border-2 border-neutral-base`;case`currentmuted`:return`border-2 border-neutral-base border-dashed`;default:return`border-2 border-primary-base`}switch(e){case`current`:return`border-2 border-neutral-base border-dashed`;case`pending`:return`border-2 border-neutral-base border-dashed`;case`muted`:return`border-2 border-neutral-base`;case`currentmuted`:return`border-2 border-neutral-base`;default:return`border-2 border-primary-base`}};return(0,l.jsxs)(`div`,{className:a(`c-accordion`,p),children:[(0,l.jsxs)(`div`,{className:`flex justify-between`,children:[!n&&t<=0?null:(0,l.jsx)(o,{id:e?`${e}-heading`:void 0,level:t,className:n?.classes||`c-h2 mb-base`,children:n?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n?.text}),i&&(0,l.jsxs)(`button`,{id:e,onClick:x,type:`button`,className:`ml-auto py-base text-sm text-neutral-dark underline focus:text-black focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus text-right`,children:[_?`Mostrar`:`Ocultar`,` todo`]})]}),(0,l.jsx)(`div`,{className:`c-accordion__items pl-lg`,children:r.map((e,t)=>{let n=D(e,t),i=E(t),c=t===0,f=t===r.length-1,p=e.status??`past`;return(0,l.jsxs)(`div`,{className:`relative -my-px px-xs py-sm border-t border-b border-neutral-base`,onKeyDown:e=>w(e,t),children:[!c&&(0,l.jsx)(`div`,{className:a(`absolute -top-px -left-5 h-6`,O(p))}),!f&&(0,l.jsx)(`div`,{className:a(`absolute top-6 bottom-0 -left-5`,k(p,p===`past`))}),(0,l.jsx)(d,{status:p}),(0,l.jsx)(o,{id:`${n}-title`,level:T,children:(0,l.jsxs)(`button`,{type:`button`,className:a(`c-accordion__trigger`,`group relative w-full py-sm font-semibold text-left cursor-pointer`,`focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,e.disabled&&`cursor-not-allowed opacity-50`),"aria-controls":n,"aria-expanded":i,"aria-describedby":`${n}-status`,disabled:e.disabled,onClick:()=>!e.disabled&&S(t),"data-accordion-history-button":!0,children:[e.headerHtml?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.headerHtml}}):e.headerText,(0,l.jsxs)(`span`,{id:`${n}-status`,className:`sr-only`,children:[`(`,u(p),`)`]}),!e.disabled&&(0,l.jsxs)(`span`,{className:`absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none`,"aria-hidden":`true`,children:[!i&&(0,l.jsx)(`span`,{className:a(`c-accordion__show`,e.showButton?.classes),children:e.showButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.showButton.html}}):e.showButton?.text??`Mostrar`}),s&&i&&(0,l.jsx)(`span`,{className:a(`c-accordion__hide`,e.hideButton?.classes),children:e.hideButton?.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.hideButton.html}}):e.hideButton?.text??`Ocultar`})]})]})}),(0,l.jsx)(`p`,{className:`sr-only`,"aria-hidden":`true`,children:`Haz click en el botón anterior para mostrar u ocultar`}),!f&&i&&(0,l.jsx)(`div`,{className:a(`absolute top-4 bottom-0 -left-6 -my-sm`,k(p,p===`past`))}),i&&(0,l.jsx)(`div`,{id:n,className:a(`c-accordion__panel relative`,e.classes),children:e.html?(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text?(0,l.jsx)(`p`,{children:e.text}):null})]},e.id??t)})}),g]})}var c,l,u,d,f=t((()=>{c=e(n(),1),i(),l=r(),u=e=>{switch(e){case`current`:return`Estado: actual`;case`pending`:return`Estado: pendiente`;case`muted`:return`Estado: muteado`;case`currentmuted`:return`Estado: actual muteado`;default:return`Estado: pasado`}},d=({status:e})=>{let t=`absolute top-5 -left-6 w-3 h-3 rounded-full`;switch(e){case`current`:return(0,l.jsx)(`div`,{className:a(t,`bg-white ring-2 ring-primary-base`),role:`img`});case`pending`:return(0,l.jsx)(`div`,{className:a(t,`bg-white border-2 border-neutral-base`),role:`img`});case`muted`:return(0,l.jsx)(`div`,{className:a(t,`bg-neutral-base border-2 border-neutral-base`),role:`img`});case`currentmuted`:return(0,l.jsx)(`div`,{className:a(t,`bg-neutral-base ring-2 ring-neutral-base`),role:`img`});default:return(0,l.jsx)(`div`,{className:a(t,`bg-primary-base border-2 border-primary-base`),role:`img`})}},s.__docgenInfo={description:`AccordionHistory component - accordion with history/version tracking timeline.`,methods:[],displayName:`AccordionHistory`,props:{idPrefix:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix`},headingLevel:{required:!1,tsType:{name:`number`},description:`Heading level (1-5)`,defaultValue:{value:`2`,computed:!1}},heading:{required:!1,tsType:{name:`AccordionHistoryHeadingData`},description:`Heading configuration`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`AccordionHistoryItemData`}],raw:`AccordionHistoryItemData[]`},description:`Array of history items`,defaultValue:{value:`[]`,computed:!1}},showControl:{required:!1,tsType:{name:`boolean`},description:`Whether to show expand/collapse all`,defaultValue:{value:`false`,computed:!1}},allowToggle:{required:!1,tsType:{name:`boolean`},description:`Whether to allow toggling individual items`,defaultValue:{value:`true`,computed:!1}},showAll:{required:!1,tsType:{name:`boolean`},description:`Whether all items are expanded`,defaultValue:{value:`false`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`},onChangeAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(showAll: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`showAll`}],return:{name:`void`}}},description:`Called when expand/collapse all changes`},onToggleItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: AccordionHistoryItemData, index: number) => void`,signature:{arguments:[{type:{name:`AccordionHistoryItemData`},name:`item`},{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Called when item toggle changes`},children:{required:!1,tsType:{name:`ReactNode`},description:`Children slot`}}}})),p,m,h,g,_,v;t((()=>{f(),p={title:`Views/AccordionHistory`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Accordion with history/version tracking timeline with status indicators.`}}},argTypes:{idPrefix:{control:`text`},headingLevel:{control:{type:`select`},options:[1,2,3,4,5]},showControl:{control:`boolean`},allowToggle:{control:`boolean`},showAll:{control:`boolean`}}},m=[{id:`step-1`,headerText:`Solicitud presentada`,text:`Su solicitud fue recibida el día 15 de enero de 2024.`,status:`past`,open:!1},{id:`step-2`,headerText:`Documentación en revisión`,text:`El equipo técnico está revisando la documentación aportada.`,status:`past`},{id:`step-3`,headerText:`Aprobación pendiente`,html:`<p>Su solicitud está pendiente de aprobación final. <strong>Fecha estimada:</strong> 5 días hábiles.</p>`,status:`current`,open:!0},{id:`step-4`,headerText:`Resolución final`,text:`Pendiente de resolución.`,status:`pending`}],h={args:{idPrefix:`accordion-history`,heading:{text:`Estado de su solicitud`},headingLevel:2,items:m,showControl:!0,allowToggle:!0}},g={args:{idPrefix:`accordion-statuses`,heading:{text:`Todos los estados`},headingLevel:2,items:[{id:`s1`,headerText:`Estado: pasado`,text:`Item completado.`,status:`past`,open:!1},{id:`s2`,headerText:`Estado: muted`,text:`Item muteado.`,status:`muted`},{id:`s3`,headerText:`Estado: current`,text:`Item actual.`,status:`current`,open:!0},{id:`s4`,headerText:`Estado: currentmuted`,text:`Item actual muteado.`,status:`currentmuted`},{id:`s5`,headerText:`Estado: pending`,text:`Item pendiente.`,status:`pending`}]}},_={args:{idPrefix:`accordion-history-expanded`,heading:{text:`Historial expandido`},headingLevel:2,items:m,showControl:!0,allowToggle:!0,showAll:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-history',
    heading: {
      text: 'Estado de su solicitud'
    },
    headingLevel: 2,
    items: historyItems,
    showControl: true,
    allowToggle: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-statuses',
    heading: {
      text: 'Todos los estados'
    },
    headingLevel: 2,
    items: [{
      id: 's1',
      headerText: 'Estado: pasado',
      text: 'Item completado.',
      status: 'past' as const,
      open: false
    }, {
      id: 's2',
      headerText: 'Estado: muted',
      text: 'Item muteado.',
      status: 'muted' as const
    }, {
      id: 's3',
      headerText: 'Estado: current',
      text: 'Item actual.',
      status: 'current' as const,
      open: true
    }, {
      id: 's4',
      headerText: 'Estado: currentmuted',
      text: 'Item actual muteado.',
      status: 'currentmuted' as const
    }, {
      id: 's5',
      headerText: 'Estado: pending',
      text: 'Item pendiente.',
      status: 'pending' as const
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'accordion-history-expanded',
    heading: {
      text: 'Historial expandido'
    },
    headingLevel: 2,
    items: historyItems,
    showControl: true,
    allowToggle: true,
    showAll: true
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithAllStatuses`,`InitiallyExpanded`]}))();export{h as Default,_ as InitiallyExpanded,g as WithAllStatuses,v as __namedExportsOrder,p as default};