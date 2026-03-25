import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,o as p,p as m,s as h,t as g,u as _}from"./floating-ui.react-CAuxapJa.js";function v({id:e=`tooltip`,text:t,html:n,complex:r=!1,classesTooltip:i,icon:f,children:v,content:w,placement:T,className:E}){let[D,O]=(0,y.useState)(!1),k=(0,y.useRef)(null),{refs:A,floatingStyles:j,context:M}=o({placement:T||`top`,open:D,onOpenChange:O,middleware:[l(8),m({padding:8}),c(),_({element:k})]}),N=s([h(M,{move:!1}),p(M),u(M),d(M,{role:`tooltip`})]),P=()=>{if(f?.html)return(0,b.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f.html}});switch(f?.type){case`info`:return(0,b.jsx)(x,{});case`alert`:return(0,b.jsx)(S,{});case`help`:return(0,b.jsx)(C,{});default:return(0,b.jsx)(C,{})}},F=w||(n?(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:n}}):t?(0,b.jsx)(`p`,{children:t}):null);return(0,b.jsxs)(`span`,{className:a(`inline-flex`,E),children:[(0,b.jsxs)(`span`,{ref:A.setReference,"data-tooltip-trigger":!0,"aria-describedby":D&&r?`${e}-tooltip`:void 0,"aria-labelledby":D&&!r?`${e}-tooltip`:void 0,...N.getReferenceProps(),children:[f&&(0,b.jsx)(`span`,{className:`inline-flex items-center`,children:P()}),v]}),D&&F&&(0,b.jsxs)(`div`,{ref:A.setFloating,id:`${e}-tooltip`,style:j,className:a(`z-50 max-w-[350px] px-base py-sm bg-neutral-dark text-white text-sm rounded shadow-lg border border-neutral-base`,i),...N.getFloatingProps(),children:[F,(0,b.jsx)(g,{ref:k,context:M,className:`fill-neutral-dark`})]})]})}var y,b,x,S,C,w=t((()=>{y=e(n(),1),f(),i(),b=r(),x=()=>(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`w-4 h-4 text-primary-base`,role:`img`,"aria-label":`Información`,children:(0,b.jsx)(`path`,{fill:`currentColor`,d:`M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm7.5 105a7.5 7.5 0 01-15 0V70a7.5 7.5 0 0115 0zM70 50a10 10 0 1110-10 10 10 0 01-10 10z`})}),S=()=>(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`w-4 h-4 text-alert-base`,role:`img`,"aria-label":`Alerta`,children:(0,b.jsx)(`path`,{fill:`currentColor`,d:`M138.42 118.29l-55-110a15 15 0 00-26.84 0l-55 110A15 15 0 0015 140h110a15 15 0 0013.42-21.71zM62.5 50a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 70a10 10 0 1110-10 10 10 0 01-10 10z`})}),C=()=>(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`w-4 h-4 text-primary-base`,role:`img`,"aria-label":`Ayuda`,children:(0,b.jsx)(`path`,{fill:`currentColor`,d:`M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm0 117.51a10 10 0 1110-10 10 10 0 01-10 10zm9.17-39.08a2.5 2.5 0 00-1.67 2.36v1.71a7.5 7.5 0 01-15 0v-10A7.5 7.5 0 0170 65a12.5 12.5 0 10-12.5-12.5 7.5 7.5 0 01-15 0 27.5 27.5 0 1136.67 25.93z`})}),v.__docgenInfo={description:`Tooltip component - displays a tooltip on hover/focus using FloatingUI for positioning.`,methods:[],displayName:`Tooltip`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`,defaultValue:{value:`'tooltip'`,computed:!1}},text:{required:!1,tsType:{name:`string`},description:`Tooltip text content`},html:{required:!1,tsType:{name:`string`},description:`Tooltip HTML content`},complex:{required:!1,tsType:{name:`boolean`},description:`Whether to use complex mode (aria-describedby instead of aria-labelledby)`,defaultValue:{value:`false`,computed:!1}},classesTooltip:{required:!1,tsType:{name:`string`},description:`CSS classes for the tooltip`},icon:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  type?: 'info' | 'alert' | 'help';
  html?: string;
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`'info' | 'alert' | 'help'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'alert'`},{name:`literal`,value:`'help'`}],required:!1}},{key:`html`,value:{name:`string`,required:!1}}]}},description:`Icon configuration`},children:{required:!0,tsType:{name:`ReactNode`},description:`Children (trigger element)`},content:{required:!1,tsType:{name:`ReactNode`},description:`Tooltip content as React node`},placement:{required:!1,tsType:{name:`Placement`},description:`Placement of the tooltip`},className:{required:!1,tsType:{name:`string`},description:`CSS classes for the trigger`}}}})),T,E,D,O,k,A,j,M,N,P,F;t((()=>{w(),T=r(),E={title:`Views/Tooltip`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`Tooltip component using FloatingUI for positioning. Shows on hover/focus.`}}},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},complex:{control:`boolean`}}},D={args:{id:`example-default`,icon:{type:`help`},children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Pase el ratón`})}},O={args:{id:`example-text`,text:`Esto es un tooltip`,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Pase el ratón`})}},k={args:{id:`example-html`,html:`<p>contenido html del tooltip</p>`,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Ver tooltip`})}},A={args:{id:`example-question`,text:`Pregunta`,icon:{type:`help`},children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Más información`})}},j={args:{id:`example-info`,text:`Información`,icon:{type:`info`},children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Ayuda`})}},M={args:{id:`example-alert`,text:`Alerta`,icon:{type:`alert`},classesTooltip:`text-alert-base`,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Alerta`})}},N={args:{id:`example-custom-icon`,text:`Icono personalizado`,icon:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 text-neutral-dark" role="img" aria-label="Ayuda"><path d="M140 15a15 15 0 00-15-15H15A15 15 0 000 15v110a15 15 0 0015 15h110a15 15 0 0015-15zM70 117.51a10 10 0 1110-10 10 10 0 01-10 10zm9.17-39.08a2.5 2.5 0 00-1.67 2.36v1.71a7.5 7.5 0 01-15 0v-10A7.5 7.5 0 0170 65a12.5 12.5 0 10-12.5-12.5 7.5 7.5 0 01-15 0 27.5 27.5 0 1136.67 25.93z" fill="currentColor"/></svg>`},classesTooltip:`text-neutral-dark`,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Subvención para actividades`})}},P={args:{id:`complex-html`,icon:{type:`help`},complex:!0,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`El código CVV`})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-default',
    icon: {
      type: 'help'
    },
    children: <span className="c-link underline cursor-help">Pase el ratón</span>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-text',
    text: 'Esto es un tooltip',
    children: <span className="c-link underline cursor-help">Pase el ratón</span>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-html',
    html: '<p>contenido html del tooltip</p>',
    children: <span className="c-link underline cursor-help">Ver tooltip</span>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-question',
    text: 'Pregunta',
    icon: {
      type: 'help'
    },
    children: <span className="c-link underline cursor-help">Más información</span>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-info',
    text: 'Información',
    icon: {
      type: 'info'
    },
    children: <span className="c-link underline cursor-help">Ayuda</span>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-alert',
    text: 'Alerta',
    icon: {
      type: 'alert'
    },
    classesTooltip: 'text-alert-base',
    children: <span className="c-link underline cursor-help">Alerta</span>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-custom-icon',
    text: 'Icono personalizado',
    icon: {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 text-neutral-dark" role="img" aria-label="Ayuda"><path d="M140 15a15 15 0 00-15-15H15A15 15 0 000 15v110a15 15 0 0015 15h110a15 15 0 0015-15zM70 117.51a10 10 0 1110-10 10 10 0 01-10 10zm9.17-39.08a2.5 2.5 0 00-1.67 2.36v1.71a7.5 7.5 0 01-15 0v-10A7.5 7.5 0 0170 65a12.5 12.5 0 10-12.5-12.5 7.5 7.5 0 01-15 0 27.5 27.5 0 1136.67 25.93z" fill="currentColor"/></svg>'
    },
    classesTooltip: 'text-neutral-dark',
    children: <span className="c-link underline cursor-help">Subvención para actividades</span>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'complex-html',
    icon: {
      type: 'help'
    },
    complex: true,
    children: <span className="c-link underline cursor-help">El código CVV</span>
  }
}`,...P.parameters?.docs?.source}}},F=[`PorDefectoSoloIcono`,`SoloTexto`,`ConHtml`,`Pregunta`,`Info`,`Alerta`,`IconoPersonalizado`,`Complejo`]}))();export{M as Alerta,P as Complejo,k as ConHtml,N as IconoPersonalizado,j as Info,D as PorDefectoSoloIcono,A as Pregunta,O as SoloTexto,F as __namedExportsOrder,E as default};