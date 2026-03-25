import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./clsx-Bs4OuGzP.js";function i({item:e,index:t,idPrefix:n,hasUnderline:a,isRoot:s=!0}){let c=e.id||`${n||`nav-item`}-${t+1}`,l=e.html?(0,o.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text,u=r(`block px-xs focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,a&&`underline`,!e.disabled&&`hover:text-primary-base hover:underline`,e.disabled&&`no-underline pointer-events-none`,e.classes),d=e.active?`page`:void 0,f=()=>e.active?(0,o.jsx)(`strong`,{className:`font-bold`,children:l}):l;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`li`,{className:r(`my-base break-inside-avoid-column`,!s&&`origin-top-left text-sm`),children:[e.href?(0,o.jsx)(`a`,{href:e.href,id:c,className:u,tabIndex:e.disabled?-1:void 0,target:e.target??void 0,"aria-current":d,"aria-disabled":e.disabled?!0:void 0,children:f()}):e.routerLink?(0,o.jsx)(`a`,{href:e.routerLink,id:c,className:u,tabIndex:e.disabled?-1:void 0,target:e.target??void 0,"aria-current":d,"aria-disabled":e.disabled?!0:void 0,children:f()}):(0,o.jsx)(`span`,{id:c,className:r(`block px-xs`,e.classes),tabIndex:e.disabled?-1:void 0,"aria-current":d,"aria-disabled":e.disabled?!0:void 0,children:f()}),!s||!e.sub?.items?null:(0,o.jsx)(`ul`,{className:e.sub.classes,children:e.sub.items.map((e,t)=>(0,o.jsx)(i,{item:e,index:t,idPrefix:`sub-${c}`,hasUnderline:a,isRoot:!1},e.id||t))}),!s||!e.sub?.html?null:(0,o.jsx)(`div`,{className:r(`mb-base px-xs origin-top-left text-sm text-neutral-dark`,e.sub.classes),children:(0,o.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.sub.html}})})]}),e.divider&&(0,o.jsx)(`li`,{className:`my-sm border-b border-neutral-base`,role:`none`,"aria-hidden":`true`,children:(0,o.jsx)(`div`,{className:`sr-only`,children:`Separador`})})]})}function a({id:e,idPrefix:t,items:n,hasUnderline:a,classes:s,className:c}){return(0,o.jsx)(`nav`,{id:e,className:r(s,c),children:(0,o.jsx)(`ul`,{className:`text-base`,children:n?.map((e,n)=>(0,o.jsx)(i,{item:e,index:n,idPrefix:t,hasUnderline:a,isRoot:!0},e.id||n))})})}var o,s=e((()=>{n(),o=t(),a.__docgenInfo={description:`MenuVertical component - displays a vertical navigation menu with optional sub-menus.`,methods:[],displayName:`MenuVertical`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},idPrefix:{required:!1,tsType:{name:`string`},description:`Prefix for auto-generated IDs`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`MenuVerticalItemData`}],raw:`MenuVerticalItemData[]`},description:`Array of menu items`},hasUnderline:{required:!1,tsType:{name:`boolean`},description:`Show underline on hover`},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),c,l,u,d,f,p,m;e((()=>{s(),c={title:`Nav/MenuVertical`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays a vertical navigation menu with optional sub-menus.`}}}},l={args:{items:[{text:`Inicio`,href:`/`},{text:`Trámites`,href:`/tramites`},{text:`Empresas`,href:`/empresas`},{text:`Ayuda`,href:`/ayuda`}]}},u={args:{items:[{text:`Inicio`,href:`/`},{text:`Trámites`,href:`/tramites`,active:!0},{text:`Empresas`,href:`/empresas`}]}},d={args:{items:[{text:`Trámites`,href:`/tramites`},{text:`Empresas`,href:`/empresas`,sub:{items:[{text:`Alta de empresa`,href:`/empresas/alta`},{text:`Modificación de datos`,href:`/empresas/modificar`},{text:`Certificados`,href:`/empresas/certificados`}]}},{text:`Ayuda`,href:`/ayuda`}]}},f={args:{items:[{text:`Opción 1`,href:`#1`},{divider:!0},{text:`Opción 2`,href:`#2`},{divider:!0},{text:`Opción 3`,href:`#3`}]}},p={args:{hasUnderline:!0,items:[{text:`Inicio`,href:`/`},{text:`Servicios`,href:`/servicios`},{text:`Contacto`,href:`/contacto`}]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Empresas',
      href: '/empresas'
    }, {
      text: 'Ayuda',
      href: '/ayuda'
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Trámites',
      href: '/tramites',
      active: true
    }, {
      text: 'Empresas',
      href: '/empresas'
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Empresas',
      href: '/empresas',
      sub: {
        items: [{
          text: 'Alta de empresa',
          href: '/empresas/alta'
        }, {
          text: 'Modificación de datos',
          href: '/empresas/modificar'
        }, {
          text: 'Certificados',
          href: '/empresas/certificados'
        }]
      }
    }, {
      text: 'Ayuda',
      href: '/ayuda'
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Opción 1',
      href: '#1'
    }, {
      divider: true
    }, {
      text: 'Opción 2',
      href: '#2'
    }, {
      divider: true
    }, {
      text: 'Opción 3',
      href: '#3'
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    hasUnderline: true,
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Servicios',
      href: '/servicios'
    }, {
      text: 'Contacto',
      href: '/contacto'
    }]
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithActiveItem`,`WithSubMenu`,`WithDividers`,`WithUnderline`]}))();export{l as Default,u as WithActiveItem,f as WithDividers,d as WithSubMenu,p as WithUnderline,m as __namedExportsOrder,c as default};