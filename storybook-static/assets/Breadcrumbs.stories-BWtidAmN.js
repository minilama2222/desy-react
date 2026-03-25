import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-CPGy17Pw.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({id:e,routerLink:t,children:n}){return(0,o.jsx)(`li`,{id:e,className:i(`flex`,`items-baseline`,`max-w-full`,`mb-sm`,`py-xs`,`text-neutral-dark`,`flex-1`,`font-semibold`),children:t?(0,o.jsx)(`a`,{href:t,className:`text-black no-underline truncate focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,"aria-current":`page`,children:(0,o.jsx)(`strong`,{children:n})}):(0,o.jsx)(`span`,{className:`text-black no-underline truncate`,"aria-current":`page`,children:(0,o.jsx)(`strong`,{children:n})})})}var o,s=e((()=>{t(),r(),o=n(),a.__docgenInfo={description:`BreadcrumbsItem component - individual breadcrumb item for compound component pattern.
Used as a child of Breadcrumbs component.`,methods:[],displayName:`BreadcrumbsItem`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},routerLink:{required:!1,tsType:{name:`string`},description:`Router link path`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child elements`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}}));function c(e){return{1:`lg:grid-cols-1`,2:`lg:grid-cols-2`,3:`lg:grid-cols-3`,4:`lg:grid-cols-4`,5:`lg:grid-cols-5`,6:`lg:grid-cols-6`,7:`lg:grid-cols-7`,8:`lg:grid-cols-8`}[e]??`lg:grid`}function l(){return(0,f.jsx)(`li`,{className:`c-breadcrumbs__backbutton flex items-baseline font-bold text-primary-base`,children:(0,f.jsxs)(`a`,{href:`#`,onClick:e=>{e.preventDefault(),typeof window<`u`&&window.history.length>1&&window.history.back()},className:`px-sm border-r border-neutral-base focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black cursor-pointer`,children:[(0,f.jsx)(`span`,{className:`sr-only`,children:`Volver a la página anterior`}),(0,f.jsx)(`span`,{"aria-hidden":`true`,title:`Volver a la página anterior`,children:(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,className:`self-center mr-2`,"aria-hidden":`true`,focusable:`false`,width:`1em`,height:`1em`,children:(0,f.jsx)(`path`,{d:`M37.93 27.93l-35 35a10 10 0 000 14.14l35 35a10 10 0 1014.14-14.14L38.41 84.27A2.5 2.5 0 0140.18 80H130a10 10 0 000-20H40.18a2.5 2.5 0 01-1.77-4.27l13.66-13.66a10 10 0 00-14.14-14.14z`,fill:`currentColor`})})})]})})}function u({item:e,isLast:t}){let n=e.html?(0,f.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text,r=i(`underline`,`focus:bg-warning-base`,`focus:outline-hidden`,`focus:shadow-outline-focus`,`focus:text-black`,`truncate`,t?`text-black font-semibold no-underline`:``);return e.routerLink?(0,f.jsx)(`a`,{href:e.routerLink,id:e.id,className:r,"aria-current":t?`page`:void 0,children:t?(0,f.jsx)(`strong`,{children:n}):n}):(0,f.jsx)(`span`,{id:e.id,className:i(`no-underline`,`truncate`,t?`text-black`:``),"aria-current":t?`page`:void 0,children:t?(0,f.jsx)(`strong`,{children:n}):n})}function d({items:e,classes:t,id:n,collapseOnMobile:r,inlineOnMobile:a,inlineOnDesktop:o,hasBackButton:s,ariaLabel:d,className:p}){let m=(e?.length??0)+(s?1:0),h=i(`c-breadcrumbs`,r&&`c-breadcrumbs--collapse-on-mobile`,a&&`c-breadcrumbs--inline-on-mobile`,o&&`c-breadcrumbs--inline-on-desktop`,t,p),g=i(`w-full`,`items-baseline`,`text-sm`,c(m));return(0,f.jsx)(`nav`,{id:n,className:h,"aria-label":d||`Estás en: `,children:(0,f.jsxs)(`ol`,{className:g,children:[s&&(0,f.jsx)(l,{}),e?.map((t,n)=>{let r=n===e.length-1;return(0,f.jsx)(`li`,{className:i(`flex`,`items-baseline`,`max-w-full`,`mb-sm`,`py-xs`,`text-neutral-dark`,r&&`flex-1 font-semibold`),children:(0,f.jsx)(u,{item:t,isLast:r})},t.id||n)})]})})}var f,p=e((()=>{r(),s(),f=n(),d.__docgenInfo={description:`Breadcrumbs component - provides navigation breadcrumb trail.
Shows the user's location within the site hierarchy.`,methods:[],displayName:`Breadcrumbs`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`BreadcrumbsData`}],raw:`BreadcrumbsData[]`},description:`Array of breadcrumb items`},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},collapseOnMobile:{required:!1,tsType:{name:`boolean`},description:`Collapse navigation on mobile`},inlineOnMobile:{required:!1,tsType:{name:`boolean`},description:`Show inline on mobile`},inlineOnDesktop:{required:!1,tsType:{name:`boolean`},description:`Show inline on desktop`},hasBackButton:{required:!1,tsType:{name:`boolean`},description:`Show back button`},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessibility label`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),m,h,g,_,v,y;e((()=>{p(),m={title:`Nav/Breadcrumbs`,component:d},h={args:{items:[{routerLink:`#`,text:`Inicio`},{routerLink:`#`,text:`Categoría`},{text:`Página actual`}]}},g={args:{items:[{routerLink:`#`,text:`Inicio`},{text:`Página actual`}]}},_={args:{items:[{routerLink:`#`,text:`Inicio`},{routerLink:`#`,text:`Nivel 1`},{routerLink:`#`,text:`Nivel 2`},{routerLink:`#`,text:`Nivel 3`},{text:`Página actual`}]}},v={args:{items:[{routerLink:`#`,html:`<span>Inicio personalizado</span>`},{routerLink:`#`,text:`Categoría`},{text:`Página actual`}]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      routerLink: '#',
      text: 'Inicio'
    }, {
      routerLink: '#',
      text: 'Categoría'
    }, {
      text: 'Página actual'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      routerLink: '#',
      text: 'Inicio'
    }, {
      text: 'Página actual'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      routerLink: '#',
      text: 'Inicio'
    }, {
      routerLink: '#',
      text: 'Nivel 1'
    }, {
      routerLink: '#',
      text: 'Nivel 2'
    }, {
      routerLink: '#',
      text: 'Nivel 3'
    }, {
      text: 'Página actual'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      routerLink: '#',
      html: '<span>Inicio personalizado</span>'
    }, {
      routerLink: '#',
      text: 'Categoría'
    }, {
      text: 'Página actual'
    }]
  }
}`,...v.parameters?.docs?.source}}},y=[`PorDefecto`,`ConInicio`,`ConMuchosNiveles`,`ConIconoInicioPersonalizado`]}))();export{v as ConIconoInicioPersonalizado,g as ConInicio,_ as ConMuchosNiveles,h as PorDefecto,y as __namedExportsOrder,m as default};