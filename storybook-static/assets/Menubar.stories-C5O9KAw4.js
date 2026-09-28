import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BRtkut15.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(){return(0,u.jsx)(`svg`,{className:`inline-block -mr-2 align-middle -my-px`,viewBox:`0 0 96 96`,"aria-hidden":`true`,fill:`currentColor`,focusable:`false`,width:`1.5em`,height:`1.5em`,children:(0,u.jsx)(`path`,{d:`M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z`})})}function s({item:e,items:t,isOpen:n,onClose:r,itemIndex:i,onSelect:a}){if(!n)return null;let o=(e,t)=>{switch(e.key){case`Escape`:r();break;case`Tab`:r();break}};return(0,u.jsx)(`ul`,{role:`menu`,tabIndex:-1,className:`c-menubar__tooltip w-max max-w-64 border border-neutral-base shadow-md bg-white text-sm`,"aria-label":e.ariaLabel||e.sub?.ariaLabel,children:t.map((e,t)=>{if(e.role===`separator`)return(0,u.jsx)(`li`,{role:`separator`,className:`my-sm border-b border-neutral-base`},e.id||t);if(e.role===`group`)return(0,u.jsx)(`li`,{role:`none`,children:(0,u.jsx)(`ul`,{role:`group`,"aria-label":e.ariaLabel,children:e.items?.map((e,n)=>{let r=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return(0,u.jsx)(`li`,{role:e.role||`menuitem`,tabIndex:-1,onClick:()=>a(e,i,t),className:`flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white`,children:r},e.id||n)})})},e.id||t);if(e.role===`menuitemcheckbox`||e.role===`menuitemradio`){let n=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return(0,u.jsx)(`li`,{role:e.role,tabIndex:-1,"aria-checked":e.checked,onClick:()=>a(e,i,t),onKeyDown:e=>o(e,t),className:`flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white`,children:n},e.id||t)}let n=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return e.role===`none`?(0,u.jsx)(`li`,{role:`none`,tabIndex:-1,children:n},e.id||t):(0,u.jsx)(`li`,{role:`menuitem`,tabIndex:-1,onClick:()=>a(e,i,t),onKeyDown:e=>o(e,t),className:`flex items-center pr-base pl-lg py-sm cursor-pointer hover:bg-primary-base hover:text-white focus:bg-primary-base focus:text-white focus:outline-hidden`,children:n},e.id||t)})})}function c({id:e,idPrefix:t,items:n=[],onClick:r,onItemsChange:i,onActiveItemChange:c,classes:d,labelText:f,labelHtml:p,ariaLabel:m,children:h,className:g}){let[_,v]=(0,l.useState)(null),[y,b]=(0,l.useState)(0),x=(0,l.useRef)(null),S=(e,t)=>{t.sub?.items?.length?v(_===e?null:e):(n.forEach(e=>e.active=!1),t.active=!0,c?.(t),r?.(t),v(null))},C=(e,t,r)=>{let i=n;switch(e.key){case`ArrowLeft`:e.preventDefault(),b(e=>{let t=e-1;for(;t>=0&&i[t]?.disabled;)t--;return t>=0?t:e});break;case`ArrowRight`:e.preventDefault(),b(e=>{let t=e+1;for(;t<i.length&&i[t]?.disabled;)t++;return t<i.length?t:e});break;case`Enter`:case` `:case`ArrowDown`:r.sub?.items?.length&&(e.preventDefault(),v(t));break;case`Escape`:v(null);break;case`ArrowUp`:r.sub?.items?.length&&(e.preventDefault(),v(t));break;case`Home`:b(0);break;case`End`:b(i.length-1);break}},w=(e,t,r)=>{(n[t]?.sub?.items||[]).forEach(e=>{e.role===`menuitemcheckbox`?e.checked=!e.checked:e.role===`menuitemradio`&&(e.checked=!1)}),i?.(n),v(null)};return(0,u.jsxs)(`div`,{className:a(`c-menubar`,d,g),children:[(f||p)&&(0,u.jsx)(`div`,{id:`${e}-label`,className:`mb-sm`,children:p?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:p}}):(0,u.jsx)(`p`,{children:f})}),(0,u.jsx)(`ul`,{ref:x,id:`${e}-menubar`,role:`menubar`,"aria-label":m,className:a(`lg:flex lg:flex-wrap`,d),children:n.map((n,i)=>{let c=n.id||`${t||e}-menubar-item-${i+1}`,l=!!n.sub?.items?.length,d=n.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n.text,f=a(`c-menubar__button`,n.disabled&&`c-menubar__button--disabled`,n.active&&`c-menubar__button--has-selection`,n.classes),p=()=>{n.disabled||(S(i,n),n.active&&r?.(n))};return(0,u.jsx)(`li`,{className:`relative`,role:`none`,children:l?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`a`,{href:n.href||`#`,role:`menuitem`,"aria-haspopup":`true`,"aria-expanded":_===i?`true`:`false`,id:c,className:f,"aria-current":n.active?`true`:void 0,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:i===y?0:-1,onClick:p,onKeyDown:e=>C(e,i,n),onFocus:()=>b(i),children:[(0,u.jsx)(`span`,{className:`inline-flex self-center align-middle`,children:d}),(0,u.jsx)(`span`,{className:`c-menubar__msg`,children:`Con ítems seleccionados`}),(0,u.jsx)(o,{})]}),(0,u.jsx)(s,{item:n,items:n.sub?.items||[],isOpen:_===i,onClose:()=>v(null),itemIndex:i,onSelect:w})]}):n.href?(0,u.jsx)(`a`,{href:n.href,role:`menuitem`,id:c,className:f,"aria-current":n.active?`page`:void 0,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:i===y?0:-1,target:n.target,onClick:p,onKeyDown:e=>C(e,i,n),onFocus:()=>b(i),children:d}):(0,u.jsx)(`a`,{href:n.routerLink||`#`,role:`menuitem`,id:c,className:f,"aria-current":n.active?`page`:void 0,"aria-disabled":n.disabled,tabIndex:n.disabled?-1:i===y?0:-1,onClick:p,onKeyDown:e=>C(e,i,n),onFocus:()=>b(i),children:d})},n.id||i)})}),h]})}var l,u,d=t((()=>{l=e(n(),1),i(),u=r(),c.__docgenInfo={description:`Menubar component - provides an accessible menu bar with keyboard navigation,
dropdown sub-menus, and support for checkbox/radio menu items.`,methods:[],displayName:`Menubar`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},idPrefix:{required:!1,tsType:{name:`string`},description:`Prefix for auto-generated IDs`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`MenubarItemData`}],raw:`MenubarItemData[]`},description:`Array of menu items`,defaultValue:{value:`[]`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: MenubarItemData) => void`,signature:{arguments:[{type:{name:`MenubarItemData`},name:`item`}],return:{name:`void`}}},description:`Click event handler for menu items`},onItemsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(items: MenubarItemData[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`MenubarItemData`}],raw:`MenubarItemData[]`},name:`items`}],return:{name:`void`}}},description:`Item selection change handler`},onActiveItemChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: MenubarItemData) => void`,signature:{arguments:[{type:{name:`MenubarItemData`},name:`item`}],return:{name:`void`}}},description:`Active item change handler`},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},labelText:{required:!1,tsType:{name:`string`},description:`Label text`},labelHtml:{required:!1,tsType:{name:`string`},description:`Label HTML content`},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessibility label for the menubar`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child elements (for compound component pattern)`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),f,p,m,h,g,_,v,y,b,x,S,C;t((()=>{d(),f={title:`Nav/Menubar`,component:c,tags:[`autodocs`]},p={args:{id:`with-all-parent-items-1`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-1-1`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`},{text:`Menuitemcheckbox`,ariaLabel:`Menuitemcheckbox`,id:`menuitems-example-item-2-1`,classes:`mb-base mr-base`,sub:{items:[{role:`menuitemcheckbox`,text:`Subitem 1`},{role:`menuitemcheckbox`,text:`Subitem 2`},{role:`menuitemcheckbox`,text:`Subitem 3`}]}},{text:`Menuitemradio`,ariaLabel:`Menuitemradio`,id:`menuitems-example-item-3-1`,classes:`mb-base mr-base`,sub:{items:[{role:`menuitemradio`,text:`Subitem 1`},{role:`menuitemradio`,text:`Subitem 2`},{role:`menuitemradio`,text:`Subitem 3`}]}},{text:`Separator`,ariaLabel:`Separator`,id:`menuitems-example-item-4-1`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`separator`},{role:`menuitem`,text:`Subitem 2`}]}}]}},m={args:{id:`with-all-parent-items-2`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-1-2`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`},{text:`Menuitemcheckbox`,ariaLabel:`Menuitemcheckbox`,id:`menuitems-example-item-2-2`,classes:`mb-base mr-base`,sub:{items:[{role:`menuitemcheckbox`,text:`Subitem 1`},{role:`menuitemcheckbox`,text:`Subitem 2`},{role:`menuitemcheckbox`,text:`Subitem 3`}]}},{text:`Menuitemradio`,ariaLabel:`Menuitemradio`,id:`menuitems-example-item-3-2`,active:!0,classes:`mb-base mr-base`,sub:{items:[{role:`menuitemradio`,text:`Subitem 1`},{role:`menuitemradio`,text:`Subitem 2`},{role:`menuitemradio`,text:`Subitem 3`}]}},{text:`Separator`,ariaLabel:`Separator`,id:`menuitems-example-item-4-2`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`separator`},{role:`menuitem`,text:`Subitem 2`}]}}]}},h={args:{id:`with-all-parent-items-3`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-1-3`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`},{text:`Menuitemcheckbox`,ariaLabel:`Menuitemcheckbox`,id:`menuitems-example-item-2-3`,classes:`mb-base mr-base`,sub:{items:[{role:`menuitemcheckbox`,text:`Subitem 1`},{role:`menuitemcheckbox`,text:`Subitem 2`,checked:!0},{role:`menuitemcheckbox`,text:`Subitem 3`}]}},{text:`Menuitemradio`,ariaLabel:`Menuitemradio`,id:`menuitems-example-item-3-3`,classes:`mb-base mr-base`,sub:{items:[{role:`menuitemradio`,text:`Subitem 1`},{role:`menuitemradio`,text:`Subitem 2`,checked:!0},{role:`menuitemradio`,text:`Subitem 3`}]}},{text:`Separator`,ariaLabel:`Separator`,id:`menuitems-example-item-4-3`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`separator`},{role:`menuitem`,text:`Subitem 2`}]}}]}},g={args:{id:`disabled-parent-item-example`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem activo`,ariaLabel:`Menuitem activo`,id:`menuitems-example-item-1-4`,active:!0,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`},{text:`Menuitem deshabilitado`,ariaLabel:`Menuitem deshabilitado`,id:`menuitems-example-item-2-4`,disabled:!0,classes:`mb-base mr-base`},{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-3-4`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`}]}},_={args:{id:`active-parent-item-example`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-1-5`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`},{text:`Menuitem activo`,ariaLabel:`Menuitem activo`,id:`menuitems-example-item-2-5`,active:!0,classes:`mb-base mr-base`},{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-3-5`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`}]}},v={args:{id:`large-example`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem 1`,ariaLabel:`Menuitem 1`,id:`menuitems-example-item-1-6`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`c-menubar__button--lg mb-base mr-base`},{text:`Menuitem 2`,ariaLabel:`Menuitem 2`,id:`menuitems-example-item-2-6`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`c-menubar__button--lg mb-base mr-base`}]}},y={args:{id:`small-example`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem 1`,ariaLabel:`Menuitem 1`,id:`menuitems-example-item-1-7`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`c-menubar__button--sm mb-base mr-base`},{text:`Menuitem 2`,ariaLabel:`Menuitem 2`,id:`menuitems-example-item-2-7`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`c-menubar__button--sm mb-base mr-base`}]}},b={args:{id:`transparent-example`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,items:[{text:`Menuitem 1`,ariaLabel:`Menuitem 1`,id:`menuitems-example-item-1-8`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`c-menubar__button--transparent mb-base mr-base`},{text:`Menuitem 2`,ariaLabel:`Menuitem 2`,id:`menuitems-example-item-2-8`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`c-menubar__button--transparent mb-base mr-base`}]}},x={args:{id:`filters-example`,idPrefix:`filters-example`,ariaLabel:`Menubar descrición`,items:[{text:`Seleccionar todos`,ariaLabel:`Seleccionar todos`,id:`filters-example-item-1`,sub:{items:[{role:`menuitemcheckbox`,text:`Seleccionar todos`,checked:!0},{role:`menuitemcheckbox`,text:`Activos`},{role:`menuitemcheckbox`,text:`Inactivos`}]},classes:`mb-base mr-base`},{text:`Ordenar por`,ariaLabel:`Ordenar por`,id:`filters-example-item-2`,sub:{items:[{role:`menuitemradio`,text:`Nombre`,checked:!0},{role:`menuitemradio`,text:`Fecha`},{role:`menuitemradio`,text:`Estado`}]},classes:`mb-base mr-base`}]}},S={args:{id:`label-example`,idPrefix:`parent-example`,ariaLabel:`Menubar descrición`,labelText:`Mi label`,items:[{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-1-9`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`},{text:`Menuitem`,ariaLabel:`Menuitem`,id:`menuitems-example-item-2-9`,sub:{items:[{role:`menuitem`,text:`Subitem 1`},{role:`menuitem`,text:`Subitem 2`},{role:`menuitem`,text:`Subitem 3`}]},classes:`mb-base mr-base`}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-all-parent-items-1',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-1-1',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitemcheckbox',
      ariaLabel: 'Menuitemcheckbox',
      id: 'menuitems-example-item-2-1',
      classes: 'mb-base mr-base',
      sub: {
        items: [{
          role: 'menuitemcheckbox',
          text: 'Subitem 1'
        }, {
          role: 'menuitemcheckbox',
          text: 'Subitem 2'
        }, {
          role: 'menuitemcheckbox',
          text: 'Subitem 3'
        }]
      }
    }, {
      text: 'Menuitemradio',
      ariaLabel: 'Menuitemradio',
      id: 'menuitems-example-item-3-1',
      classes: 'mb-base mr-base',
      sub: {
        items: [{
          role: 'menuitemradio',
          text: 'Subitem 1'
        }, {
          role: 'menuitemradio',
          text: 'Subitem 2'
        }, {
          role: 'menuitemradio',
          text: 'Subitem 3'
        }]
      }
    }, {
      text: 'Separator',
      ariaLabel: 'Separator',
      id: 'menuitems-example-item-4-1',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'separator'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }]
      }
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-all-parent-items-2',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-1-2',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitemcheckbox',
      ariaLabel: 'Menuitemcheckbox',
      id: 'menuitems-example-item-2-2',
      classes: 'mb-base mr-base',
      sub: {
        items: [{
          role: 'menuitemcheckbox',
          text: 'Subitem 1'
        }, {
          role: 'menuitemcheckbox',
          text: 'Subitem 2'
        }, {
          role: 'menuitemcheckbox',
          text: 'Subitem 3'
        }]
      }
    }, {
      text: 'Menuitemradio',
      ariaLabel: 'Menuitemradio',
      id: 'menuitems-example-item-3-2',
      active: true,
      classes: 'mb-base mr-base',
      sub: {
        items: [{
          role: 'menuitemradio',
          text: 'Subitem 1'
        }, {
          role: 'menuitemradio',
          text: 'Subitem 2'
        }, {
          role: 'menuitemradio',
          text: 'Subitem 3'
        }]
      }
    }, {
      text: 'Separator',
      ariaLabel: 'Separator',
      id: 'menuitems-example-item-4-2',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'separator'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }]
      }
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-all-parent-items-3',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-1-3',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitemcheckbox',
      ariaLabel: 'Menuitemcheckbox',
      id: 'menuitems-example-item-2-3',
      classes: 'mb-base mr-base',
      sub: {
        items: [{
          role: 'menuitemcheckbox',
          text: 'Subitem 1'
        }, {
          role: 'menuitemcheckbox',
          text: 'Subitem 2',
          checked: true
        }, {
          role: 'menuitemcheckbox',
          text: 'Subitem 3'
        }]
      }
    }, {
      text: 'Menuitemradio',
      ariaLabel: 'Menuitemradio',
      id: 'menuitems-example-item-3-3',
      classes: 'mb-base mr-base',
      sub: {
        items: [{
          role: 'menuitemradio',
          text: 'Subitem 1'
        }, {
          role: 'menuitemradio',
          text: 'Subitem 2',
          checked: true
        }, {
          role: 'menuitemradio',
          text: 'Subitem 3'
        }]
      }
    }, {
      text: 'Separator',
      ariaLabel: 'Separator',
      id: 'menuitems-example-item-4-3',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'separator'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }]
      }
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-parent-item-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem activo',
      ariaLabel: 'Menuitem activo',
      id: 'menuitems-example-item-1-4',
      active: true,
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitem deshabilitado',
      ariaLabel: 'Menuitem deshabilitado',
      id: 'menuitems-example-item-2-4',
      disabled: true,
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-3-4',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'active-parent-item-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-1-5',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitem activo',
      ariaLabel: 'Menuitem activo',
      id: 'menuitems-example-item-2-5',
      active: true,
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-3-5',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'large-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem 1',
      ariaLabel: 'Menuitem 1',
      id: 'menuitems-example-item-1-6',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'c-menubar__button--lg mb-base mr-base'
    }, {
      text: 'Menuitem 2',
      ariaLabel: 'Menuitem 2',
      id: 'menuitems-example-item-2-6',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'c-menubar__button--lg mb-base mr-base'
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'small-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem 1',
      ariaLabel: 'Menuitem 1',
      id: 'menuitems-example-item-1-7',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'c-menubar__button--sm mb-base mr-base'
    }, {
      text: 'Menuitem 2',
      ariaLabel: 'Menuitem 2',
      id: 'menuitems-example-item-2-7',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'c-menubar__button--sm mb-base mr-base'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'transparent-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Menuitem 1',
      ariaLabel: 'Menuitem 1',
      id: 'menuitems-example-item-1-8',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'c-menubar__button--transparent mb-base mr-base'
    }, {
      text: 'Menuitem 2',
      ariaLabel: 'Menuitem 2',
      id: 'menuitems-example-item-2-8',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'c-menubar__button--transparent mb-base mr-base'
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'filters-example',
    idPrefix: 'filters-example',
    ariaLabel: 'Menubar descrición',
    items: [{
      text: 'Seleccionar todos',
      ariaLabel: 'Seleccionar todos',
      id: 'filters-example-item-1',
      sub: {
        items: [{
          role: 'menuitemcheckbox',
          text: 'Seleccionar todos',
          checked: true
        }, {
          role: 'menuitemcheckbox',
          text: 'Activos'
        }, {
          role: 'menuitemcheckbox',
          text: 'Inactivos'
        }]
      },
      classes: 'mb-base mr-base'
    }, {
      text: 'Ordenar por',
      ariaLabel: 'Ordenar por',
      id: 'filters-example-item-2',
      sub: {
        items: [{
          role: 'menuitemradio',
          text: 'Nombre',
          checked: true
        }, {
          role: 'menuitemradio',
          text: 'Fecha'
        }, {
          role: 'menuitemradio',
          text: 'Estado'
        }]
      },
      classes: 'mb-base mr-base'
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'label-example',
    idPrefix: 'parent-example',
    ariaLabel: 'Menubar descrición',
    labelText: 'Mi label',
    items: [{
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-1-9',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }, {
      text: 'Menuitem',
      ariaLabel: 'Menuitem',
      id: 'menuitems-example-item-2-9',
      sub: {
        items: [{
          role: 'menuitem',
          text: 'Subitem 1'
        }, {
          role: 'menuitem',
          text: 'Subitem 2'
        }, {
          role: 'menuitem',
          text: 'Subitem 3'
        }]
      },
      classes: 'mb-base mr-base'
    }]
  }
}`,...S.parameters?.docs?.source}}},C=[`PorDefecto`,`TieneSeleccionEnItemsPadres`,`ConSubItemActivo`,`ConUnItemPadreDeshabilitado`,`ConUnItemPadreActivo`,`Grande`,`Pequeno`,`Transparente`,`EjemploDeFiltros`,`ConLabel`]}))();export{S as ConLabel,h as ConSubItemActivo,_ as ConUnItemPadreActivo,g as ConUnItemPadreDeshabilitado,x as EjemploDeFiltros,v as Grande,y as Pequeno,p as PorDefecto,m as TieneSeleccionEnItemsPadres,b as Transparente,C as __namedExportsOrder,f as default};