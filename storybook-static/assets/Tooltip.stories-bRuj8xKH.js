import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,o as p,p as m,s as h,t as g,u as _}from"./floating-ui.react-CYOrzWTq.js";function v({id:e=`tooltip`,text:t,html:n,complex:r=!1,classesTooltip:i,icon:f,children:v,content:w,placement:T,className:E}){let[D,O]=(0,y.useState)(!1),k=(0,y.useRef)(null),{refs:A,floatingStyles:j,context:M}=o({placement:T||`top`,open:D,onOpenChange:O,middleware:[l(8),m({padding:8}),c(),_({element:k})]}),N=s([h(M,{move:!1}),p(M),u(M),d(M,{role:`tooltip`})]),P=()=>{if(f?.html)return(0,b.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f.html}});switch(f?.type){case`info`:return(0,b.jsx)(x,{});case`alert`:return(0,b.jsx)(S,{});case`help`:return(0,b.jsx)(C,{});default:return(0,b.jsx)(C,{})}},F=w||(n?(0,b.jsx)(`div`,{dangerouslySetInnerHTML:{__html:n}}):t?(0,b.jsx)(`p`,{children:t}):null);return(0,b.jsxs)(`span`,{className:a(`inline-flex`,E),children:[(0,b.jsxs)(`span`,{ref:A.setReference,"data-tooltip-trigger":!0,"aria-describedby":D&&r?`${e}-tooltip`:void 0,"aria-labelledby":D&&!r?`${e}-tooltip`:void 0,...N.getReferenceProps(),children:[f&&(0,b.jsx)(`span`,{className:`inline-flex items-center`,children:P()}),v]}),D&&F&&(0,b.jsxs)(`div`,{ref:A.setFloating,id:`${e}-tooltip`,style:j,className:a(`z-50 max-w-[350px] px-base py-sm bg-neutral-dark text-white text-sm rounded shadow-lg border border-neutral-base`,i),...N.getFloatingProps(),children:[F,(0,b.jsx)(g,{ref:k,context:M,className:`fill-neutral-dark`})]})]})}var y,b,x,S,C,w=t((()=>{y=e(n(),1),f(),i(),b=r(),x=()=>(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`w-4 h-4 text-primary-base`,role:`img`,"aria-label":`Información`,children:(0,b.jsx)(`path`,{fill:`currentColor`,d:`M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm7.5 105a7.5 7.5 0 01-15 0V70a7.5 7.5 0 0115 0zM70 50a10 10 0 1110-10 10 10 0 01-10 10z`})}),S=()=>(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`w-4 h-4 text-alert-base`,role:`img`,"aria-label":`Alerta`,children:(0,b.jsx)(`path`,{fill:`currentColor`,d:`M138.42 118.29l-55-110a15 15 0 00-26.84 0l-55 110A15 15 0 0015 140h110a15 15 0 0013.42-21.71zM62.5 50a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 70a10 10 0 1110-10 10 10 0 01-10 10z`})}),C=()=>(0,b.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`w-4 h-4 text-primary-base`,role:`img`,"aria-label":`Ayuda`,children:(0,b.jsx)(`path`,{fill:`currentColor`,d:`M70 0a70 70 0 1070 70A70.08 70.08 0 0070 0zm0 117.51a10 10 0 1110-10 10 10 0 01-10 10zm9.17-39.08a2.5 2.5 0 00-1.67 2.36v1.71a7.5 7.5 0 01-15 0v-10A7.5 7.5 0 0170 65a12.5 12.5 0 10-12.5-12.5 7.5 7.5 0 01-15 0 27.5 27.5 0 1136.67 25.93z`})}),v.__docgenInfo={description:`Tooltip component - displays a tooltip on hover/focus using FloatingUI for positioning.`,methods:[],displayName:`Tooltip`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`,defaultValue:{value:`'tooltip'`,computed:!1}},text:{required:!1,tsType:{name:`string`},description:`Tooltip text content`},html:{required:!1,tsType:{name:`string`},description:`Tooltip HTML content`},complex:{required:!1,tsType:{name:`boolean`},description:`Whether to use complex mode (aria-describedby instead of aria-labelledby)`,defaultValue:{value:`false`,computed:!1}},classesTooltip:{required:!1,tsType:{name:`string`},description:`CSS classes for the tooltip`},icon:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  type?: 'info' | 'alert' | 'help';
  html?: string;
}`,signature:{properties:[{key:`type`,value:{name:`union`,raw:`'info' | 'alert' | 'help'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'alert'`},{name:`literal`,value:`'help'`}],required:!1}},{key:`html`,value:{name:`string`,required:!1}}]}},description:`Icon configuration`},children:{required:!0,tsType:{name:`ReactNode`},description:`Children (trigger element)`},content:{required:!1,tsType:{name:`ReactNode`},description:`Tooltip content as React node`},placement:{required:!1,tsType:{name:`Placement`},description:`Placement of the tooltip`},className:{required:!1,tsType:{name:`string`},description:`CSS classes for the trigger`}}}})),T,E,D,O,k,A,j,M,N,P;t((()=>{w(),T=r(),E={title:`Views/Tooltip`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`Tooltip component using FloatingUI for positioning. Shows on hover/focus.`}}},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]},complex:{control:`boolean`}}},D={args:{id:`tooltip-default`,text:`Este es un tooltip informativo.`,icon:{type:`help`},children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Pase el ratón`})}},O={args:{id:`tooltip-text`,text:`La solicitud ha sido procesada correctamente.`,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Más información`})}},k={args:{id:`tooltip-html`,html:`<p><strong>Nota importante:</strong> El plazo de presentación finaliza el <em>15 de marzo</em>.</p>`,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Ver aviso`})}},A={args:{id:`tooltip-info`,text:`Información de ayuda contextual.`,icon:{type:`info`},children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Ayuda`})}},j={args:{id:`tooltip-alert`,text:`Atención: datos requeridos.`,icon:{type:`alert`},children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Alerta`})}},M={args:{id:`tooltip-complex`,complex:!0,children:(0,T.jsx)(`span`,{className:`c-link underline cursor-help`,children:`Detalles`}),content:(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`p`,{className:`font-semibold`,children:`Información detallada`}),(0,T.jsxs)(`ul`,{className:`list-disc pl-4 mt-2`,children:[(0,T.jsx)(`li`,{children:`Elemento 1`}),(0,T.jsx)(`li`,{children:`Elemento 2`}),(0,T.jsx)(`li`,{children:`Elemento 3`})]})]})}},N={args:{id:`tooltip-button`,text:`¿Está seguro de que desea continuar?`,icon:{type:`alert`},children:(0,T.jsx)(`button`,{className:`c-button c-button--primary`,children:`Confirmar`})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-default',
    text: 'Este es un tooltip informativo.',
    icon: {
      type: 'help'
    },
    children: <span className="c-link underline cursor-help">Pase el ratón</span>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-text',
    text: 'La solicitud ha sido procesada correctamente.',
    children: <span className="c-link underline cursor-help">Más información</span>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-html',
    html: '<p><strong>Nota importante:</strong> El plazo de presentación finaliza el <em>15 de marzo</em>.</p>',
    children: <span className="c-link underline cursor-help">Ver aviso</span>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-info',
    text: 'Información de ayuda contextual.',
    icon: {
      type: 'info'
    },
    children: <span className="c-link underline cursor-help">Ayuda</span>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-alert',
    text: 'Atención: datos requeridos.',
    icon: {
      type: 'alert'
    },
    children: <span className="c-link underline cursor-help">Alerta</span>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-complex',
    complex: true,
    children: <span className="c-link underline cursor-help">Detalles</span>,
    content: <div>
        <p className="font-semibold">Información detallada</p>
        <ul className="list-disc pl-4 mt-2">
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      </div>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-button',
    text: '¿Está seguro de que desea continuar?',
    icon: {
      type: 'alert'
    },
    children: <button className="c-button c-button--primary">Confirmar</button>
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithText`,`WithHtml`,`WithInfoIcon`,`WithAlertIcon`,`ComplexWithContent`,`WithButton`]}))();export{M as ComplexWithContent,D as Default,j as WithAlertIcon,N as WithButton,k as WithHtml,A as WithInfoIcon,O as WithText,P as __namedExportsOrder,E as default};