import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./clsx-Bs4OuGzP.js";function i({className:e}){return(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 140 140`,className:r(`self-center`,e),"aria-hidden":`true`,focusable:`false`,width:`1em`,height:`1em`,children:(0,c.jsx)(`path`,{d:`M102.07 27.93l35 35a10 10 0 010 14.14l-35 35a10 10 0 01-14.14-14.14l13.66-13.66A2.5 2.5 0 0099.82 80H10a10 10 0 010-20h89.82a2.5 2.5 0 001.77-4.27L87.93 42.07a10 10 0 0114.14-14.14z`,fill:`currentColor`})})}function a({className:e}){return(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 14 14`,className:r(`self-center`,e),"aria-hidden":`true`,focusable:`false`,width:`1em`,height:`1em`,children:(0,c.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M3.4685 0.427C3.8512 0.0443 4.4717 0.0443 4.8545 0.427L10.388 5.9606C10.962 6.5346 10.962 7.4654 10.388 8.0395L4.8545 13.573C4.4717 13.9557 3.8512 13.9557 3.4685 13.573C3.0858 13.1903 3.0858 12.5698 3.4685 12.1871L8.6556 7L3.4685 1.813C3.0858 1.4303 3.0858 0.8098 3.4685 0.427Z`,clipRule:`evenodd`,strokeWidth:`1`})})}function o({item:e,index:t,idPrefix:n}){let o=e.id||`${n||`links-list-item`}-${t+1}`,s=`sub-${o}`,l=e.html?(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text,u=r(`c-link`,e.classes||`flex justify-between items-center gap-base flex-1 py-base`,e.disabled&&`text-neutral-base no-underline pointer-events-none`,e.active&&`font-bold`),d=(0,c.jsxs)(`div`,{className:`flex gap-base justify-between items-center flex-1`,children:[e.icon?(0,c.jsx)(`div`,{className:e.iconRight?.containerClasses||`self-center h-full`,children:e.icon}):null,(0,c.jsx)(`div`,{className:`flex-1`,children:e.active?(0,c.jsx)(`strong`,{className:`font-bold`,children:l}):l}),(()=>{if(e.iconRight?.type===`none`)return null;let t=e.iconRight?.containerClasses||`self-center h-full`;return e.iconRight?.type===`chevron`?(0,c.jsx)(`div`,{className:t,children:(0,c.jsx)(a,{})}):(0,c.jsx)(`div`,{className:t,children:e.iconRight?.content||(0,c.jsx)(i,{})})})()]}),f=()=>e.sub?(0,c.jsx)(`div`,{id:s,className:e.sub.classes||`c-paragraph-base text-neutral-dark -mt-base mr-lg`,children:e.sub.content}):null,p=e.disabled?-1:e.tabindex;return e.href&&!e.routerLink?(0,c.jsxs)(`li`,{className:e.containerClasses||`px-base relative`,children:[(0,c.jsx)(`a`,{href:e.href,id:o,className:u,"aria-current":e.active?`page`:void 0,"aria-disabled":e.disabled?!0:void 0,tabIndex:p,target:e.target,children:d}),f()]}):!e.href&&e.routerLink?(0,c.jsxs)(`li`,{className:e.containerClasses||`px-base relative`,children:[(0,c.jsx)(`a`,{href:e.routerLink,id:o,className:u,"aria-current":e.active?`page`:void 0,"aria-disabled":e.disabled?!0:void 0,tabIndex:p,children:d}),f()]}):(0,c.jsxs)(`li`,{className:e.containerClasses||`px-base relative`,children:[(0,c.jsx)(`div`,{id:o,className:u,"aria-current":e.active?`page`:void 0,"aria-disabled":e.disabled?!0:void 0,tabIndex:p,children:d}),f()]})}function s({items:e,hasNav:t=!0,classes:n,listClasses:i,idPrefix:a,className:s}){let l=r(i||`divide-y divide-neutral-base`),u=r(n,s),d=(0,c.jsx)(`ul`,{className:l,children:e?.map((e,t)=>(0,c.jsx)(o,{item:e,index:t,idPrefix:a},e.id||t))});return t?(0,c.jsx)(`nav`,{className:u,children:d}):(0,c.jsx)(`div`,{className:u,children:d})}var c,l=e((()=>{n(),c=t(),s.__docgenInfo={description:`LinksList component - displays a styled list of links with optional icons.`,methods:[],displayName:`LinksList`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`LinksListItemData`}],raw:`LinksListItemData[]`},description:`Array of link items`},hasNav:{required:!1,tsType:{name:`boolean`},description:`Whether to wrap in a nav element`,defaultValue:{value:`true`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},listClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the list`},idPrefix:{required:!1,tsType:{name:`string`},description:`Prefix for auto-generated IDs`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),u,d,f,p,m,h,g,_;e((()=>{l(),u={title:`Nav/LinksList`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays a styled list of links with optional icons and sub-content.`}}}},d={args:{items:[{text:`Visión general`,href:`#vision`},{text:`Organización`,href:`#organizacion`},{text:`Transparencia`,href:`#transparencia`},{text:`Contratación pública`,href:`#contratacion`}]}},f={args:{items:[{text:`Visión general`,href:`#vision`},{text:`Organización`,href:`#organizacion`,active:!0},{text:`Transparencia`,href:`#transparencia`}]}},p={args:{items:[{text:`Sección activa`,href:`#active`},{text:`Sección deshabilitada`,href:`#disabled`,disabled:!0}]}},m={args:{items:[{text:`Registro de Empresas`,href:`#registro`,sub:{content:`Consulte el estado de su solicitud de registro`}},{text:`Normativa`,href:`#normativa`,sub:{content:`Reglamentos y leyes aplicables`}}]}},h={args:{items:[{text:`Ir a procedimientos`,href:`#`,iconRight:{type:`chevron`}},{text:`Ir a servicios`,href:`#`,iconRight:{type:`chevron`}}]}},g={args:{hasNav:!1,items:[{text:`Elemento 1`,href:`#`},{text:`Elemento 2`,href:`#`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Visión general',
      href: '#vision'
    }, {
      text: 'Organización',
      href: '#organizacion'
    }, {
      text: 'Transparencia',
      href: '#transparencia'
    }, {
      text: 'Contratación pública',
      href: '#contratacion'
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Visión general',
      href: '#vision'
    }, {
      text: 'Organización',
      href: '#organizacion',
      active: true
    }, {
      text: 'Transparencia',
      href: '#transparencia'
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Sección activa',
      href: '#active'
    }, {
      text: 'Sección deshabilitada',
      href: '#disabled',
      disabled: true
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Registro de Empresas',
      href: '#registro',
      sub: {
        content: 'Consulte el estado de su solicitud de registro'
      }
    }, {
      text: 'Normativa',
      href: '#normativa',
      sub: {
        content: 'Reglamentos y leyes aplicables'
      }
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Ir a procedimientos',
      href: '#',
      iconRight: {
        type: 'chevron'
      }
    }, {
      text: 'Ir a servicios',
      href: '#',
      iconRight: {
        type: 'chevron'
      }
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    hasNav: false,
    items: [{
      text: 'Elemento 1',
      href: '#'
    }, {
      text: 'Elemento 2',
      href: '#'
    }]
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithActiveItem`,`WithDisabledItem`,`WithSubContent`,`WithChevronIcon`,`WithoutNav`]}))();export{d as Default,f as WithActiveItem,h as WithChevronIcon,p as WithDisabledItem,m as WithSubContent,g as WithoutNav,_ as __namedExportsOrder,u as default};