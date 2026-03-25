import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-CPGy17Pw.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({idPrefix:e=`pagination-item`,totalItems:t,currentPage:n=1,itemsPerPage:r=10,hasSelect:a=!1,showFirst:f=!1,showPrevious:p=!0,showNext:m=!0,showLast:h=!1,hasFirst:g=!0,hasPrevious:_=!0,hasNext:v=!0,hasLast:y=!0,previousText:b=`Anterior`,nextText:x=`Siguiente`,firstText:S=`Primera`,lastText:C=`Última`,maxShowPages:w,classes:T,className:E,onCurrentPageChange:D,children:O}){let k=r>0?Math.ceil(t/r):1,A=Math.min(Math.max(1,n),k),j=e=>e>=0&&e*r<t?`: ${e*r+1} al ${N(e)}`:``,M=e=>e>=0&&e*r<t?` con los resultados del ${e*r+1} al ${N(e)}`:``,N=e=>Math.min((e+1)*r,t),P=(()=>{let e=[];if(w&&k>w&&w>=3){let t=Math.floor(w/2),n=Math.max(1,A-t),r=n+w-1;r>k&&(r=k,n=Math.max(1,r-w+1));for(let t=n;t<=r;t++)e.push({value:t,text:t,selected:t===A})}else for(let t=1;t<=k;t++)e.push({value:t,text:t,selected:t===A});return e})(),F=e=>{e>=1&&e<=k&&e!==A&&D?.(e)},I=i(`flex flex-wrap items-center flex-1 mb-base lg:mb-0 text-sm`,T,E),L=t=>`${e}-${t}`;return a?(0,o.jsxs)(`nav`,{className:I,"aria-label":`Pagination`,children:[(0,o.jsx)(`p`,{id:`${e}-label`,className:`w-full mb-xs text-sm text-neutral-dark`,children:`Selecciona para cargar datos automáticamente`}),f&&(0,o.jsxs)(`button`,{id:L(0)+`-first`,onClick:()=>F(1),disabled:A===1||!g,className:`c-button c-button--sm c-button--transparent mr-xs`,"aria-label":`${S}${M(0)}`,children:[l,d,S,j(0)]}),p&&(0,o.jsxs)(`button`,{id:L(0)+`-previous`,onClick:()=>F(A-1),disabled:A===1||!_,className:`c-button c-button--sm c-button--transparent mr-xs`,"aria-label":`${b}${M(A-2)}`,children:[s,d,b,j(A-2)]}),(0,o.jsxs)(`div`,{className:i(`flex flex-wrap items-center pl-sm`,(f||h)&&`w-full lg:w-auto`),children:[(f||h)&&(0,o.jsx)(`p`,{className:`lg:hidden mr-xs text-sm text-neutral-dark`,children:`Página actual:`}),(0,o.jsx)(`select`,{className:`c-select c-select--sm c-select--transparent -mt-sm mb-0 mr-xs`,value:A,onChange:e=>F(parseInt(e.target.value,10)),"aria-label":`Selecciona una página`,children:P.map(e=>(0,o.jsx)(`option`,{value:e.value,children:e.text},e.value))})]}),m&&(0,o.jsxs)(`button`,{id:L(0)+`-next`,onClick:()=>F(A+1),disabled:A===k||!v,className:`c-button c-button--sm c-button--transparent mr-xs`,"aria-label":`${x}${M(A)}`,children:[d,x,j(A),c]}),h&&(0,o.jsxs)(`button`,{id:L(0)+`-last`,onClick:()=>F(k),disabled:A===k||!y,className:`c-button c-button--sm c-button--transparent mr-xs`,"aria-label":`${C}${M(k-1)}`,children:[d,C,j(k-1),u]}),O]}):(0,o.jsx)(`nav`,{className:I,"aria-label":`Pagination`,children:(0,o.jsx)(`ul`,{className:`flex flex-wrap`,children:P.map(e=>(0,o.jsx)(`li`,{children:e.selected?(0,o.jsx)(`button`,{id:L(e.value),className:`c-button c-button--primary c-button--disabled mb-sm mr-sm`,disabled:!0,"aria-current":`page`,children:(0,o.jsxs)(`strong`,{children:[d,e.text,j(e.value-1)]})}):(0,o.jsxs)(`button`,{id:L(e.value),className:`c-button mb-sm mr-sm`,onClick:()=>F(e.value),"aria-label":`${d}${e.text}${M(e.value-1)}`,children:[d,e.text,j(e.value-1)]})},e.value))})})}var o,s,c,l,u,d,f=e((()=>{t(),r(),o=n(),s=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`self-center h-2.5 w-2.5 mr-2`,"aria-hidden":`true`,focusable:`false`,children:(0,o.jsx)(`path`,{d:`M54.87 71.77a2.5 2.5 0 010-3.54L106 17.07A10 10 0 1091.89 2.93L35.43 59.39a15 15 0 000 21.22l56.46 56.46A10 10 0 10106 122.93z`,fill:`currentColor`})}),c=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,width:`1em`,height:`1em`,className:`self-center h-2.5 w-2.5 ml-2`,"aria-hidden":`true`,focusable:`false`,children:(0,o.jsx)(`path`,{d:`M34 137.07a10 10 0 010-14.14l51.13-51.16a2.5 2.5 0 000-3.54L34 17.07A10 10 0 0148.11 2.93l56.46 56.46a15 15 0 010 21.22l-56.46 56.46a10 10 0 01-14.11 0z`,fill:`currentColor`})}),l=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,className:`self-center h-2.5 w-2.5 mr-2`,"aria-hidden":`true`,focusable:`false`,children:(0,o.jsxs)(`g`,{children:[(0,o.jsx)(`path`,{d:`M10.42,12a2.64,2.64,0,0,1,.77-1.88L20.73.58a1.77,1.77,0,0,1,2.5,2.5l-8.74,8.74a.27.27,0,0,0,0,.36l8.74,8.74a1.77,1.77,0,0,1-2.5,2.5l-9.54-9.54A2.64,2.64,0,0,1,10.42,12Z`,fill:`currentColor`}),(0,o.jsx)(`path`,{d:`M.25,12A2.65,2.65,0,0,1,1,10.12L10.57.58a1.77,1.77,0,0,1,2.5,2.5L4.33,11.82a.25.25,0,0,0,0,.36l8.74,8.74a1.77,1.77,0,0,1-2.5,2.5L1,13.88A2.65,2.65,0,0,1,.25,12Z`,fill:`currentColor`})]})}),u=(0,o.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1em`,height:`1em`,className:`self-center h-2.5 w-2.5 ml-2`,"aria-hidden":`true`,focusable:`false`,children:(0,o.jsxs)(`g`,{children:[(0,o.jsx)(`path`,{d:`M13.58,12a2.64,2.64,0,0,1-.77,1.88L3.27,23.42a1.77,1.77,0,0,1-2.5-2.5l8.74-8.74a.27.27,0,0,0,0-.36L.77,3.08A1.77,1.77,0,0,1,3.27.58l9.54,9.54A2.64,2.64,0,0,1,13.58,12Z`,fill:`currentColor`}),(0,o.jsx)(`path`,{d:`M23.75,12A2.65,2.65,0,0,1,23,13.88l-9.54,9.54a1.77,1.77,0,0,1-2.5-2.5l8.74-8.74a.25.25,0,0,0,0-.36L10.93,3.08a1.77,1.77,0,0,1,2.5-2.5L23,10.12A2.65,2.65,0,0,1,23.75,12Z`,fill:`currentColor`})]})}),d=(0,o.jsx)(`span`,{className:`sr-only`,children:`Página\xA0`}),a.__docgenInfo={description:`Pagination component - provides navigation between pages of content.`,methods:[],displayName:`Pagination`,props:{idPrefix:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix`,defaultValue:{value:`'pagination-item'`,computed:!1}},totalItems:{required:!0,tsType:{name:`number`},description:`Total number of items`},currentPage:{required:!1,tsType:{name:`number`},description:`Current page number (1-indexed)`,defaultValue:{value:`1`,computed:!1}},itemsPerPage:{required:!1,tsType:{name:`number`},description:`Number of items per page`,defaultValue:{value:`10`,computed:!1}},hasSelect:{required:!1,tsType:{name:`boolean`},description:`Whether to show the select dropdown`,defaultValue:{value:`false`,computed:!1}},showFirst:{required:!1,tsType:{name:`boolean`},description:`Whether to show first/last buttons`,defaultValue:{value:`false`,computed:!1}},showPrevious:{required:!1,tsType:{name:`boolean`},description:`Whether to show previous/next buttons`,defaultValue:{value:`true`,computed:!1}},showNext:{required:!1,tsType:{name:`boolean`},description:`Whether to show previous button`,defaultValue:{value:`true`,computed:!1}},showLast:{required:!1,tsType:{name:`boolean`},description:`Whether to show last button`,defaultValue:{value:`false`,computed:!1}},hasFirst:{required:!1,tsType:{name:`boolean`},description:`Whether first button is enabled`,defaultValue:{value:`true`,computed:!1}},hasPrevious:{required:!1,tsType:{name:`boolean`},description:`Whether previous button is enabled`,defaultValue:{value:`true`,computed:!1}},hasNext:{required:!1,tsType:{name:`boolean`},description:`Whether next button is enabled`,defaultValue:{value:`true`,computed:!1}},hasLast:{required:!1,tsType:{name:`boolean`},description:`Whether last button is enabled`,defaultValue:{value:`true`,computed:!1}},previousText:{required:!1,tsType:{name:`string`},description:`Text for previous button`,defaultValue:{value:`'Anterior'`,computed:!1}},nextText:{required:!1,tsType:{name:`string`},description:`Text for next button`,defaultValue:{value:`'Siguiente'`,computed:!1}},firstText:{required:!1,tsType:{name:`string`},description:`Text for first button`,defaultValue:{value:`'Primera'`,computed:!1}},lastText:{required:!1,tsType:{name:`string`},description:`Text for last button`,defaultValue:{value:`'Última'`,computed:!1}},hasSelectItemsPerPage:{required:!1,tsType:{name:`boolean`},description:`Whether to show items per page selector`},maxShowPages:{required:!1,tsType:{name:`number`},description:`Maximum number of page buttons to show`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the container`},className:{required:!1,tsType:{name:`string`},description:`CSS classes for the outer container`},onCurrentPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:`Current page change handler`},onItemsPerPageChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(itemsPerPage: number) => void`,signature:{arguments:[{type:{name:`number`},name:`itemsPerPage`}],return:{name:`void`}}},description:`Items per page change handler`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components`}}}})),p,m,h,g,_,v,y,b,x;e((()=>{f(),p={title:`Pagination/Pagination`,component:a,tags:[`autodocs`]},m={args:{idPrefix:`pagination`,totalItems:64,currentPage:2,itemsPerPage:10}},h={args:{idPrefix:`pagination-has-select`,totalItems:64,currentPage:2,itemsPerPage:10,hasSelect:!0,previousText:`Anterior`,nextText:`Siguiente`}},g={args:{idPrefix:`pagination-with-previous-page-disabled`,totalItems:64,currentPage:1,itemsPerPage:10,hasSelect:!0,hasPrevious:!1,previousText:`Anterior`,nextText:`Siguiente`}},_={args:{idPrefix:`pagination-without-previous-page`,totalItems:64,currentPage:1,itemsPerPage:10,hasSelect:!0,showPrevious:!1,previousText:`Anterior`,nextText:`Siguiente`}},v={args:{idPrefix:`pagination-without-previous-page-disabled`,totalItems:64,currentPage:2,itemsPerPage:10,hasSelect:!0,previousText:`Anterior`,nextText:`Siguiente`,showFirst:!0,showLast:!0,firstText:`Primera`,lastText:`Última`}},y={args:{idPrefix:`pagination-has-select-2`,totalItems:64,currentPage:1,itemsPerPage:10,hasSelect:!0,hasPrevious:!1,previousText:`Anterior`,nextText:`Siguiente`,showFirst:!0,showLast:!0,hasFirst:!1,firstText:`Primera`,lastText:`Última`}},b={args:{idPrefix:`with-items-per-page-selector`,totalItems:64,currentPage:2,itemsPerPage:10,hasSelect:!0,hasSelectItemsPerPage:!0,hasPrevious:!1,hasNext:!0,previousText:`Anterior`,nextText:`Siguiente`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'pagination',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'pagination-has-select',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10,
    hasSelect: true,
    previousText: 'Anterior',
    nextText: 'Siguiente'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'pagination-with-previous-page-disabled',
    totalItems: 64,
    currentPage: 1,
    itemsPerPage: 10,
    hasSelect: true,
    hasPrevious: false,
    previousText: 'Anterior',
    nextText: 'Siguiente'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'pagination-without-previous-page',
    totalItems: 64,
    currentPage: 1,
    itemsPerPage: 10,
    hasSelect: true,
    showPrevious: false,
    previousText: 'Anterior',
    nextText: 'Siguiente'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'pagination-without-previous-page-disabled',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10,
    hasSelect: true,
    previousText: 'Anterior',
    nextText: 'Siguiente',
    showFirst: true,
    showLast: true,
    firstText: 'Primera',
    lastText: 'Última'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'pagination-has-select-2',
    totalItems: 64,
    currentPage: 1,
    itemsPerPage: 10,
    hasSelect: true,
    hasPrevious: false,
    previousText: 'Anterior',
    nextText: 'Siguiente',
    showFirst: true,
    showLast: true,
    hasFirst: false,
    firstText: 'Primera',
    lastText: 'Última'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'with-items-per-page-selector',
    totalItems: 64,
    currentPage: 2,
    itemsPerPage: 10,
    hasSelect: true,
    hasSelectItemsPerPage: true,
    hasPrevious: false,
    hasNext: true,
    previousText: 'Anterior',
    nextText: 'Siguiente'
  }
}`,...b.parameters?.docs?.source}}},x=[`PorDefecto`,`EstiloSelect`,`ConPaginaPreviaDeshabilitada`,`SinPaginaPrevia`,`ConPaginaPrimeraYUltima`,`ConPaginaPrimeraDeshabilitadaYUltima`,`ConItemsPerPageSelector`]}))();export{b as ConItemsPerPageSelector,g as ConPaginaPreviaDeshabilitada,y as ConPaginaPrimeraDeshabilitadaYUltima,v as ConPaginaPrimeraYUltima,h as EstiloSelect,m as PorDefecto,_ as SinPaginaPrevia,x as __namedExportsOrder,p as default};