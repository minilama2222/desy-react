import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BRtkut15.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,p,r as m,t as h}from"./floating-ui.react-XyYUylsq.js";function g({id:e,isMultiselectable:t=!1,doesChangeButtonText:n=!1,label:r,classes:i,classesContainer:f=`relative`,classesTooltip:g,idPrefix:b,disabled:x=!1,items:S=[],type:C=`button`,text:w,html:T,placement:E=`bottom-start`,onItemsChange:D,onActiveItemChange:O,className:k}){let[A,j]=(0,_.useState)(!1),[M,N]=(0,_.useState)(()=>S.filter(e=>e.active)),[P,F]=(0,_.useState)(0),[I,L]=(0,_.useState)(T||w||``),R=(0,_.useRef)(null),z=(0,_.useRef)(null),{refs:B,floatingStyles:V,context:H}=o({placement:E,open:A,onOpenChange:j,middleware:[l(8),p({padding:5}),c()]}),U=s([m(H,{enabled:!x}),u(H,{enabled:A}),d(H,{role:`listbox`})]);(0,_.useEffect)(()=>{let e=S.filter(e=>e.active);if(N(e),n&&!t&&e.length>0){let t=e[0];L(t.html||t.text||``)}},[S,n,t]);let W=(0,_.useCallback)(e=>{let n=S[e];if(!n||n.disabled)return;let r,i;t?(r=S.map((t,n)=>n===e?{...t,active:!t.active}:t),i=r.filter(e=>e.active)):(r=S.map((t,n)=>({...t,active:n===e})),i=[n],L(n.html||n.text||``)),F(e),D?.(r),O?.(i[0]||null),t||j(!1)},[S,t,D,O]),G=(0,_.useCallback)(e=>{if(A)switch(e.key){case`ArrowUp`:e.preventDefault(),F(e=>Math.max(0,e-1));break;case`ArrowDown`:e.preventDefault(),F(e=>Math.min(S.length-1,e+1));break;case`Home`:e.preventDefault(),F(0);break;case`End`:e.preventDefault(),F(S.length-1);break;case` `:case`Enter`:e.preventDefault(),W(P);break;case`Escape`:e.preventDefault(),j(!1);break}},[A,S.length,P,W]),K=()=>b||`${e}-listbox-item`,q=(e,t)=>e.id||(t>0?`${K()}-${t}`:K()),J=!!r;return(0,v.jsxs)(`div`,{className:a(f,k),id:e,children:[r&&(0,v.jsx)(`div`,{id:`${e}-label`,className:a(`mb-sm`,r.classes),"aria-hidden":`true`,children:r.html?(0,v.jsx)(`span`,{dangerouslySetInnerHTML:{__html:r.html}}):r.text?r.text:null}),(0,v.jsxs)(`button`,{ref:B.setReference,id:`${e}-button`,type:C,disabled:x,"aria-haspopup":`listbox`,"aria-labelledby":J?`${e}-label ${e}-button`:`${e}-button`,"aria-expanded":A,"aria-disabled":x,onClick:()=>!x&&j(!A),onKeyDown:G,className:a(`c-listbox`,i),...U.getReferenceProps(),children:[(0,v.jsx)(`span`,{className:`inline-flex self-center align-middle`,children:I?T||w?(0,v.jsx)(`span`,{dangerouslySetInnerHTML:{__html:I}}):(0,v.jsx)(`span`,{children:I}):w}),(0,v.jsx)(y,{})]}),A&&S.length>0&&(0,v.jsxs)(`div`,{ref:B.setFloating,style:V,className:a(`c-listbox__tooltip min-w-auto -ml-sm mt-2 border border-neutral-base shadow-md bg-white z-50`,g),...U.getFloatingProps(),children:[(0,v.jsx)(`ul`,{ref:z,id:e,role:`listbox`,tabIndex:-1,"aria-labelledby":J?e:void 0,"aria-multiselectable":t?`true`:void 0,"aria-activedescendant":M.length>0?q(M[0],S.indexOf(M[0])):void 0,className:`text-sm outline-none`,onKeyDown:G,children:S.map((e,t)=>(0,v.jsx)(`li`,{id:q(e,t),role:`option`,"aria-selected":e.active,"aria-disabled":e.disabled,onClick:()=>!e.disabled&&W(t),className:a(`flex items-center pr-base pl-lg py-sm cursor-pointer`,`hover:bg-primary-base hover:text-white`,`focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,e.active&&`bg-primary-base text-white`,e.disabled&&`opacity-50 cursor-not-allowed`,e.classes),children:e.html?(0,v.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text?e.text:null},e.id??t))}),(0,v.jsx)(h,{ref:R,context:H,className:`fill-neutral-base`})]})]})}var _,v,y,b=t((()=>{_=e(n(),1),f(),i(),v=r(),y=()=>(0,v.jsx)(`svg`,{viewBox:`0 0 96 96`,"aria-hidden":`true`,fill:`currentColor`,focusable:`false`,width:`1.5em`,height:`1.5em`,className:`inline-block -mr-2 align-middle -my-px`,children:(0,v.jsx)(`path`,{d:`M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z`})}),g.__docgenInfo={description:`Listbox component - a dropdown listbox with keyboard navigation.
Supports single and multi-select modes.`,methods:[],displayName:`Listbox`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},isMultiselectable:{required:!1,tsType:{name:`boolean`},description:`Whether multiple items can be selected`,defaultValue:{value:`false`,computed:!1}},doesChangeButtonText:{required:!1,tsType:{name:`boolean`},description:`Whether to change button text to selected item`,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ListboxLabelData`},description:`Label configuration`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the button`},classesContainer:{required:!1,tsType:{name:`string`},description:`CSS classes for the container`,defaultValue:{value:`'relative'`,computed:!1}},classesTooltip:{required:!1,tsType:{name:`string`},description:`CSS classes for the tooltip/dropdown`},idPrefix:{required:!1,tsType:{name:`string`},description:`ID prefix for items`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the listbox is disabled`,defaultValue:{value:`false`,computed:!1}},items:{required:!1,tsType:{name:`Array`,elements:[{name:`ListboxItemData`}],raw:`ListboxItemData[]`},description:`Array of items`,defaultValue:{value:`[]`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:`Button type`,defaultValue:{value:`'button'`,computed:!1}},text:{required:!1,tsType:{name:`string`},description:`Listbox button text`},html:{required:!1,tsType:{name:`string`},description:`Listbox button HTML`},placement:{required:!1,tsType:{name:`Placement`},description:`Placement of the dropdown`,defaultValue:{value:`'bottom-start'`,computed:!1}},onItemsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(items: ListboxItemData[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`ListboxItemData`}],raw:`ListboxItemData[]`},name:`items`}],return:{name:`void`}}},description:`Called when items change`},onActiveItemChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: ListboxItemData | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`ListboxItemData | null`,elements:[{name:`ListboxItemData`},{name:`null`}]},name:`item`}],return:{name:`void`}}},description:`Called when active item changes`},className:{required:!1,tsType:{name:`string`},description:`CSS classes`}}}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;t((()=>{b(),x={title:`Buttons/Listbox`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:`Listbox dropdown with keyboard navigation. Supports single and multi-select modes.`}}},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]}}},S=[{value:`opt1`,text:`Opción 1`},{value:`opt2`,text:`Opción 2`},{value:`opt3`,text:`Opción 3`},{value:`opt4`,text:`Opción 4`},{value:`opt5`,text:`Opción 5`}],C={args:{id:`default`,text:`Por defecto`,label:{text:`Esto es un label`},items:S}},w={args:{id:`with-active-state`,text:`Activo`,label:{text:`Esto es un label`},classes:`ds-active`,items:S}},T={args:{id:`with-hover-state`,text:`Hover`,label:{text:`Esto es un label`},classes:`ds-hover`,items:S}},E={args:{id:`with-focus-state`,text:`Focus`,label:{text:`Esto es un label`},classes:`ds-focus`,items:S}},D={args:{id:`primary`,text:`Primario`,label:{text:`Esto es un label`},classes:`c-listbox--primary`,items:S}},O={args:{id:`transparent`,text:`Transparente`,label:{text:`Esto es un label`},classes:`c-listbox--transparent`,items:S}},k={args:{id:`header`,text:`Header`,label:{text:`Esto es un label`,classes:`sr-only`},classes:`c-listbox--header`,items:S}},A={args:{id:`small`,text:`Peque con texto muy largo`,label:{text:`Esto es un label`,classes:`sr-only`},classes:`c-listbox--sm`,items:S}},j={args:{id:`large`,text:`Grande`,label:{text:`Esto es un label`,classes:`sr-only`},classes:`c-listbox--lg`,items:S}},M={args:{id:`small-has-selection`,text:`Peque con texto muy largo`,label:{text:`Esto es un label`,classes:`sr-only`},classes:`c-listbox--has-selection c-listbox--sm`,items:S}},N={args:{id:`disabled`,text:`Deshabilitado`,label:{text:`Esto es un label`},disabled:!0,items:S}},P={args:{id:`classes-applied-to-container-element`,text:`Clases en container`,label:{text:`Esto es un label`},classesContainer:`inline-block p-base bg-primary-light`,items:S}},F={args:{id:`classes-applied-to-tooltip-content`,text:`Clases al contenido del tooltip`,label:{text:`Esto es un label`},classesTooltip:`max-h-24 overflow-y-auto`,items:S}},I={args:{id:`classes-applied-to-various-elements`,text:`Listbox de anchura completa`,label:{text:`Esto es un label`,classes:`font-semibold text-sm`},classes:`w-full justify-between`,classesTooltip:`w-max max-h-64 overflow-y-auto`,items:S}},L={args:{id:`with-active-item`,text:`con item activo`,label:{text:`Esto es un label`},items:[{value:`opt1`,text:`Opción 1`},{value:`opt2`,text:`Opción 2`},{value:`opt3`,text:`Opción 3`},{value:`opt4`,text:`Opción 4 activa`,active:!0},{value:`opt5`,text:`Opción 5`}]}},R={args:{id:`is-multiselectable`,isMultiselectable:!0,text:`Selecciones múltiples`,label:{text:`Esto es un label`},items:S}},z={args:{id:`does-change-button-text`,text:`Opción 1`,label:{text:`Esto es un label`},doesChangeButtonText:!0,items:[{value:`opt1`,text:`Opción 1`},{value:`opt2`,text:`Opción 2`},{value:`opt3`,text:`Opción 3`},{value:`opt4`,text:`Opción 4`},{value:`opt5`,text:`Opción 5`}]}},B={args:{id:`icons`,text:`Iconos en items`,label:{text:`Esto es un label`},items:[{value:`opt1`,text:`Opción 1`},{value:`opt2`,text:`Opción 2`},{value:`opt3`,text:`Opción 3`}]}},V={args:{id:`paragraphs`,text:`Párrafos en items`,label:{text:`Esto es un label`},classesTooltip:`w-xs!`,items:[{value:`opt1`,text:`Actuaciones previas/preparatorias`},{value:`opt2`,text:`Inicio de la tramitación`},{value:`opt3`,text:`Otros trámites en fase de inicio`},{value:`opt4`,text:`Participación pública`},{value:`opt5`,text:`Informes sectoriales`},{value:`opt6`,text:`Valoración/Prueba/Licitación`}]}},H={args:{id:`with-active-unactive-item`,text:`con item activo`,label:{text:`Esto es un label`},items:[{value:`opt1`,text:`Opción 1`},{value:`opt2`,text:`Opción 2`},{value:`opt3`,text:`Opción 3`},{value:`opt4`,text:`Opción 4`},{value:`opt5`,text:`Opción 5`,active:!0}]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default',
    text: 'Por defecto',
    label: {
      text: 'Esto es un label'
    },
    items: defaultItems
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-active-state',
    text: 'Activo',
    label: {
      text: 'Esto es un label'
    },
    classes: 'ds-active',
    items: defaultItems
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-hover-state',
    text: 'Hover',
    label: {
      text: 'Esto es un label'
    },
    classes: 'ds-hover',
    items: defaultItems
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-focus-state',
    text: 'Focus',
    label: {
      text: 'Esto es un label'
    },
    classes: 'ds-focus',
    items: defaultItems
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'primary',
    text: 'Primario',
    label: {
      text: 'Esto es un label'
    },
    classes: 'c-listbox--primary',
    items: defaultItems
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'transparent',
    text: 'Transparente',
    label: {
      text: 'Esto es un label'
    },
    classes: 'c-listbox--transparent',
    items: defaultItems
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'header',
    text: 'Header',
    label: {
      text: 'Esto es un label',
      classes: 'sr-only'
    },
    classes: 'c-listbox--header',
    items: defaultItems
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'small',
    text: 'Peque con texto muy largo',
    label: {
      text: 'Esto es un label',
      classes: 'sr-only'
    },
    classes: 'c-listbox--sm',
    items: defaultItems
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'large',
    text: 'Grande',
    label: {
      text: 'Esto es un label',
      classes: 'sr-only'
    },
    classes: 'c-listbox--lg',
    items: defaultItems
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'small-has-selection',
    text: 'Peque con texto muy largo',
    label: {
      text: 'Esto es un label',
      classes: 'sr-only'
    },
    classes: 'c-listbox--has-selection c-listbox--sm',
    items: defaultItems
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled',
    text: 'Deshabilitado',
    label: {
      text: 'Esto es un label'
    },
    disabled: true,
    items: defaultItems
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'classes-applied-to-container-element',
    text: 'Clases en container',
    label: {
      text: 'Esto es un label'
    },
    classesContainer: 'inline-block p-base bg-primary-light',
    items: defaultItems
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'classes-applied-to-tooltip-content',
    text: 'Clases al contenido del tooltip',
    label: {
      text: 'Esto es un label'
    },
    classesTooltip: 'max-h-24 overflow-y-auto',
    items: defaultItems
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'classes-applied-to-various-elements',
    text: 'Listbox de anchura completa',
    label: {
      text: 'Esto es un label',
      classes: 'font-semibold text-sm'
    },
    classes: 'w-full justify-between',
    classesTooltip: 'w-max max-h-64 overflow-y-auto',
    items: defaultItems
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-active-item',
    text: 'con item activo',
    label: {
      text: 'Esto es un label'
    },
    items: [{
      value: 'opt1',
      text: 'Opción 1'
    }, {
      value: 'opt2',
      text: 'Opción 2'
    }, {
      value: 'opt3',
      text: 'Opción 3'
    }, {
      value: 'opt4',
      text: 'Opción 4 activa',
      active: true
    }, {
      value: 'opt5',
      text: 'Opción 5'
    }]
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'is-multiselectable',
    isMultiselectable: true,
    text: 'Selecciones múltiples',
    label: {
      text: 'Esto es un label'
    },
    items: defaultItems
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'does-change-button-text',
    text: 'Opción 1',
    label: {
      text: 'Esto es un label'
    },
    doesChangeButtonText: true,
    items: [{
      value: 'opt1',
      text: 'Opción 1'
    }, {
      value: 'opt2',
      text: 'Opción 2'
    }, {
      value: 'opt3',
      text: 'Opción 3'
    }, {
      value: 'opt4',
      text: 'Opción 4'
    }, {
      value: 'opt5',
      text: 'Opción 5'
    }]
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'icons',
    text: 'Iconos en items',
    label: {
      text: 'Esto es un label'
    },
    items: [{
      value: 'opt1',
      text: 'Opción 1'
    }, {
      value: 'opt2',
      text: 'Opción 2'
    }, {
      value: 'opt3',
      text: 'Opción 3'
    }]
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'paragraphs',
    text: 'Párrafos en items',
    label: {
      text: 'Esto es un label'
    },
    classesTooltip: 'w-xs!',
    items: [{
      value: 'opt1',
      text: 'Actuaciones previas/preparatorias'
    }, {
      value: 'opt2',
      text: 'Inicio de la tramitación'
    }, {
      value: 'opt3',
      text: 'Otros trámites en fase de inicio'
    }, {
      value: 'opt4',
      text: 'Participación pública'
    }, {
      value: 'opt5',
      text: 'Informes sectoriales'
    }, {
      value: 'opt6',
      text: 'Valoración/Prueba/Licitación'
    }]
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-active-unactive-item',
    text: 'con item activo',
    label: {
      text: 'Esto es un label'
    },
    items: [{
      value: 'opt1',
      text: 'Opción 1'
    }, {
      value: 'opt2',
      text: 'Opción 2'
    }, {
      value: 'opt3',
      text: 'Opción 3'
    }, {
      value: 'opt4',
      text: 'Opción 4'
    }, {
      value: 'opt5',
      text: 'Opción 5',
      active: true
    }]
  }
}`,...H.parameters?.docs?.source}}},U=[`PorDefecto`,`ConEstadoActivo`,`ConEstadoHover`,`ConEstadoFocus`,`Primario`,`Transparente`,`ConEstilosDeCabecera`,`Pequeno`,`Grande`,`PequenoTieneSeleccion`,`Deshabilitado`,`ConClasesCssAplicadasAlContainer`,`ClasesAplicadasAlContenidoDelTooltip`,`ClasesAplicadasAVariosElementos`,`ConItemActivo`,`PermiteSeleccionesMultiples`,`CambiaElTextoDelBoton`,`ConIconosEnItems`,`ConParrafosEnItems`,`MenuAbiertoOCerradoConJavascript`]}))();export{z as CambiaElTextoDelBoton,I as ClasesAplicadasAVariosElementos,F as ClasesAplicadasAlContenidoDelTooltip,P as ConClasesCssAplicadasAlContainer,w as ConEstadoActivo,E as ConEstadoFocus,T as ConEstadoHover,k as ConEstilosDeCabecera,B as ConIconosEnItems,L as ConItemActivo,V as ConParrafosEnItems,N as Deshabilitado,j as Grande,H as MenuAbiertoOCerradoConJavascript,A as Pequeno,M as PequenoTieneSeleccion,R as PermiteSeleccionesMultiples,C as PorDefecto,D as Primario,O as Transparente,U as __namedExportsOrder,x as default};