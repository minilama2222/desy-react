import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(){return(0,u.jsx)(`svg`,{className:`inline-block -mr-2 align-middle -my-px`,viewBox:`0 0 96 96`,"aria-hidden":`true`,fill:`currentColor`,focusable:`false`,width:`1.5em`,height:`1.5em`,children:(0,u.jsx)(`path`,{d:`M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z`})})}function s({item:e,items:t,isOpen:n,onClose:r,itemIndex:i,onSelect:a}){if(!n)return null;let o=(e,t)=>{switch(e.key){case`Escape`:r();break;case`Tab`:r();break}};return(0,u.jsx)(`ul`,{role:`menu`,tabIndex:-1,className:`c-menubar__tooltip w-max max-w-64 border border-neutral-base shadow-md bg-white text-sm`,"aria-label":e.ariaLabel||e.sub?.ariaLabel,children:t.map((e,t)=>{if(e.role===`separator`)return(0,u.jsx)(`li`,{role:`separator`,className:`my-sm border-b border-neutral-base`},e.id||t);if(e.role===`group`)return(0,u.jsx)(`li`,{role:`none`,children:(0,u.jsx)(`ul`,{role:`group`,"aria-label":e.ariaLabel,children:e.items?.map((e,n)=>{let r=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return(0,u.jsx)(`li`,{role:e.role||`menuitem`,tabIndex:-1,onClick:()=>a(e,i,t),className:`flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white`,children:r},e.id||n)})})},e.id||t);if(e.role===`menuitemcheckbox`||e.role===`menuitemradio`){let n=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return(0,u.jsx)(`li`,{role:e.role,tabIndex:-1,"aria-checked":e.checked,onClick:()=>a(e,i,t),onKeyDown:e=>o(e,t),className:`flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white`,children:n},e.id||t)}let n=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return e.role===`none`?(0,u.jsx)(`li`,{role:`none`,tabIndex:-1,children:n},e.id||t):(0,u.jsx)(`li`,{role:`menuitem`,tabIndex:-1,onClick:()=>a(e,i,t),onKeyDown:e=>o(e,t),className:`flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white focus:outline-hidden`,children:n},e.id||t)})})}function c({id:e,idPrefix:t,items:n=[],onClick:r,onItemsChange:i,onActiveItemChange:c,classes:d,labelText:f,labelHtml:p,ariaLabel:m,children:h,className:g}){let[_,v]=(0,l.useState)(null),[y,b]=(0,l.useState)(0),x=(0,l.useRef)(null),S=(e,t)=>{t.sub?.items?.length?v(_===e?null:e):(n.forEach(e=>e.active=!1),t.active=!0,c?.(t),r?.(t),v(null))},C=(e,t,r)=>{let i=n;switch(e.key){case`ArrowLeft`:e.preventDefault(),b(e=>{let t=e-1;for(;t>=0&&i[t]?.disabled;)t--;return t>=0?t:e});break;case`ArrowRight`:e.preventDefault(),b(e=>{let t=e+1;for(;t<i.length&&i[t]?.disabled;)t++;return t<i.length?t:e});break;case`Enter`:case` `:case`ArrowDown`:r.sub?.items?.length&&(e.preventDefault(),v(t));break;case`Escape`:v(null);break;case`ArrowUp`:r.sub?.items?.length&&(e.preventDefault(),v(t));break;case`Home`:b(0);break;case`End`:b(i.length-1);break}},w=(e,t,r)=>{(n[t]?.sub?.items||[]).forEach(e=>{e.role===`menuitemcheckbox`?e.checked=!e.checked:e.role===`menuitemradio`&&(e.checked=!1)}),i?.(n),v(null)};return(0,u.jsxs)(`div`,{className:a(`c-menubar`,d,g),children:[(f||p)&&(0,u.jsx)(`div`,{id:`${e}-label`,className:`mb-sm`,children:p?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:p}}):(0,u.jsx)(`p`,{children:f})}),(0,u.jsx)(`ul`,{ref:x,id:`${e}-menubar`,role:`menubar`,"aria-label":m,className:a(`lg:flex lg:flex-wrap`,d),children:n.map((n,i)=>{let c=n.id||`${t||e}-menubar-item-${i+1}`,l=!!n.sub?.items?.length,d=n.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n.text,f=a(`c-menubar__button`,n.disabled&&`c-menubar__button--disabled`,n.active&&`c-menubar__button--has-selection`,n.classes),p=()=>{n.disabled||(S(i,n),n.active&&r?.(n))};return(0,u.jsx)(`li`,{className:`relative`,role:`none`,children:l?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`a`,{href:n.href||`#`,role:`menuitem`,"aria-haspopup":`true`,"aria-expanded":_===i?`true`:`false`,id:c,className:f,"aria-current":n.active?`true`:void 0,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:i===y?0:-1,onClick:p,onKeyDown:e=>C(e,i,n),onFocus:()=>b(i),children:[(0,u.jsx)(`span`,{className:`inline-flex self-center align-middle`,children:d}),(0,u.jsx)(`span`,{className:`c-menubar__msg`,children:`Con ítems seleccionados`}),(0,u.jsx)(o,{})]}),(0,u.jsx)(s,{item:n,items:n.sub?.items||[],isOpen:_===i,onClose:()=>v(null),itemIndex:i,onSelect:w})]}):n.href?(0,u.jsx)(`a`,{href:n.href,role:`menuitem`,id:c,className:f,"aria-current":n.active?`page`:void 0,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:i===y?0:-1,target:n.target,onClick:p,onKeyDown:e=>C(e,i,n),onFocus:()=>b(i),children:d}):(0,u.jsx)(`a`,{href:n.routerLink||`#`,role:`menuitem`,id:c,className:f,"aria-current":n.active?`page`:void 0,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:i===y?0:-1,onClick:p,onKeyDown:e=>C(e,i,n),onFocus:()=>b(i),children:d})},n.id||i)})}),h]})}var l,u,d=t((()=>{l=e(n(),1),i(),u=r(),c.__docgenInfo={description:`Menubar component - provides an accessible menu bar with keyboard navigation,
dropdown sub-menus, and support for checkbox/radio menu items.`,methods:[],displayName:`Menubar`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},idPrefix:{required:!1,tsType:{name:`string`},description:`Prefix for auto-generated IDs`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`MenubarItemData`}],raw:`MenubarItemData[]`},description:`Array of menu items`,defaultValue:{value:`[]`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: MenubarItemData) => void`,signature:{arguments:[{type:{name:`MenubarItemData`},name:`item`}],return:{name:`void`}}},description:`Click event handler for menu items`},onItemsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(items: MenubarItemData[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`MenubarItemData`}],raw:`MenubarItemData[]`},name:`items`}],return:{name:`void`}}},description:`Item selection change handler`},onActiveItemChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: MenubarItemData) => void`,signature:{arguments:[{type:{name:`MenubarItemData`},name:`item`}],return:{name:`void`}}},description:`Active item change handler`},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},labelText:{required:!1,tsType:{name:`string`},description:`Label text`},labelHtml:{required:!1,tsType:{name:`string`},description:`Label HTML content`},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessibility label for the menubar`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child elements (for compound component pattern)`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),f,p,m,h,g,_,v;t((()=>{d(),f={title:`Nav/Menubar`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`Menu bar with keyboard navigation, dropdown sub-menus, and support for checkbox/radio menu items.`}}}},p={args:{id:`main-menubar`,items:[{text:`Inicio`,href:`/`},{text:`Servicios`,href:`/servicios`},{text:`Empresa`,href:`/empresa`},{text:`Contacto`,href:`/contacto`}]}},m={args:{id:`menu-submenu`,ariaLabel:`Menú principal con submenús`,items:[{text:`Trámites`,href:`/tramites`},{text:`Empresas`,href:`/empresas`,sub:{items:[{id:`alta`,text:`Alta de empresa`,role:`menuitem`},{id:`modificar`,text:`Modificar datos`,role:`menuitem`},{id:`sep1`,text:``,role:`separator`},{id:`certificados`,text:`Certificados`,role:`menuitem`}]}},{text:`Ayuda`,href:`/ayuda`}]}},h={args:{id:`menu-checkbox`,ariaLabel:`Menú con casillas de verificación`,items:[{text:`Preferencias`,sub:{items:[{id:`notif`,text:`Recibir notificaciones`,role:`menuitemcheckbox`,checked:!0},{id:`newsletter`,text:`Suscribirse a newsletter`,role:`menuitemcheckbox`,checked:!1}]}},{text:`Salir`,href:`/logout`}]}},g={args:{id:`menu-active`,items:[{text:`Inicio`,href:`/`},{text:`Trámites`,href:`/tramites`},{text:`Empresas`,href:`/empresas`,active:!0}]}},_={args:{id:`menu-disabled`,items:[{text:`Activo`,href:`#`},{text:`Deshabilitado`,href:`#`,disabled:!0},{text:`Otro`,href:`#`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'main-menubar',
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Servicios',
      href: '/servicios'
    }, {
      text: 'Empresa',
      href: '/empresa'
    }, {
      text: 'Contacto',
      href: '/contacto'
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'menu-submenu',
    ariaLabel: 'Menú principal con submenús',
    items: [{
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Empresas',
      href: '/empresas',
      sub: {
        items: [{
          id: 'alta',
          text: 'Alta de empresa',
          role: 'menuitem'
        }, {
          id: 'modificar',
          text: 'Modificar datos',
          role: 'menuitem'
        }, {
          id: 'sep1',
          text: '',
          role: 'separator'
        }, {
          id: 'certificados',
          text: 'Certificados',
          role: 'menuitem'
        }]
      }
    }, {
      text: 'Ayuda',
      href: '/ayuda'
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'menu-checkbox',
    ariaLabel: 'Menú con casillas de verificación',
    items: [{
      text: 'Preferencias',
      sub: {
        items: [{
          id: 'notif',
          text: 'Recibir notificaciones',
          role: 'menuitemcheckbox',
          checked: true
        }, {
          id: 'newsletter',
          text: 'Suscribirse a newsletter',
          role: 'menuitemcheckbox',
          checked: false
        }]
      }
    }, {
      text: 'Salir',
      href: '/logout'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'menu-active',
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Empresas',
      href: '/empresas',
      active: true
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'menu-disabled',
    items: [{
      text: 'Activo',
      href: '#'
    }, {
      text: 'Deshabilitado',
      href: '#',
      disabled: true
    }, {
      text: 'Otro',
      href: '#'
    }]
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithSubMenu`,`WithCheckboxItems`,`WithActiveItem`,`WithDisabledItem`]}))();export{p as Default,g as WithActiveItem,h as WithCheckboxItems,_ as WithDisabledItem,m as WithSubMenu,v as __namedExportsOrder,f as default};