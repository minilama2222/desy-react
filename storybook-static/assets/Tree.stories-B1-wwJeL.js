import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({item:e,type:t,name:n,level:r=0,hasDividers:i,expandedFirstLevel:s,decoupleChildFromParent:f,onChange:p,onExpand:m,parentExpanded:h=!0}){let[g,_]=(0,c.useState)(e.expanded??(s&&r===0)),[v,y]=(0,c.useState)(e.checked??!1),[b,x]=(0,c.useState)(e.indeterminate??!1),S=(0,c.useRef)(null),C=e.items&&e.items.length>0,w=h,T=(0,c.useCallback)(()=>{if(C&&t!==`navigation`){let t=!g;_(t),m?.(e,t)}},[C,g,e,t,m]),E=(0,c.useCallback)(t=>{let n=t.target.checked;y(n),x(!1),p?.({...e,checked:n}),n&&s&&C&&!g&&(_(!0),m?.(e,!0))},[e,s,C,g,p,m]),D=(0,c.useCallback)(e=>{switch(e.key){case`ArrowLeft`:g&&C&&(e.preventDefault(),_(!1));break;case`ArrowRight`:!g&&C&&(e.preventDefault(),_(!0));break}},[g,C]);if((0,c.useEffect)(()=>{e.checked!==void 0&&y(e.checked)},[e.checked]),(0,c.useEffect)(()=>{S.current&&(S.current.indeterminate=b)},[b]),!w)return null;let O=r===0?`ml-4`:`ml-8`;return(0,l.jsxs)(`li`,{role:`treeitem`,"aria-expanded":C?g:void 0,className:a(`c-tree__item focus:outline-hidden`,O,i&&`border-t border-neutral-base`),"data-tree-item":!0,children:[(0,l.jsxs)(`div`,{className:a(`w-full flex items-center relative focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,e.classes,t===`navigation`&&`my-sm`,t!==`navigation`&&r!==0&&`ml-5`),onKeyDown:D,children:[C&&t!==`navigation`&&(0,l.jsx)(`button`,{type:`button`,className:`absolute top-3 -left-4 flex items-center w-4 h-2.5 text-primary-base font-bold focus:outline-hidden`,onClick:T,"aria-label":g?`Contraer`:`Expandir`,children:g?(0,l.jsx)(u,{}):(0,l.jsx)(d,{})}),t===`checkbox`&&(0,l.jsx)(`input`,{ref:S,type:`checkbox`,id:e.id,name:n,value:e.value,checked:v,disabled:e.disabled,onChange:E,className:`w-6 h-6 transition duration-150 ease-in-out border-black focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-offset-0 focus:ring-warning-base disabled:bg-neutral-base disabled:border-neutral-base text-primary-base mr-2`,"aria-describedby":e.id?`${e.id}-hint`:void 0}),t===`radio`&&(0,l.jsx)(`input`,{type:`radio`,id:e.id,name:n,value:e.value,checked:v,disabled:e.disabled,onChange:E,className:`w-6 h-6 transition duration-150 ease-in-out border-black focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-offset-0 focus:ring-warning-base disabled:bg-neutral-base disabled:border-neutral-base text-primary-base mr-2`}),t===`navigation`?(0,l.jsx)(`a`,{href:e.href,target:e.target,className:a(`block relative -top-xs -left-8 ml-8 py-xs`,e.disabled&&`cursor-not-allowed opacity-50`,e.labelClasses),"aria-current":e.active?`page`:void 0,children:e.name}):(0,l.jsx)(`label`,{htmlFor:e.id,className:a(`block relative -top-xs -left-8 ml-8 py-xs`,e.disabled&&`cursor-not-allowed opacity-50`,e.labelClasses),children:e.name})]}),C&&g&&(0,l.jsx)(`ul`,{role:`group`,className:`c-tree__itemgroup`,children:e.items.map((e,a)=>(0,l.jsx)(o,{item:e,type:t,name:n,level:r+1,hasDividers:i,expandedFirstLevel:s,decoupleChildFromParent:f,onChange:p,onExpand:m,parentExpanded:g},e.id??a))})]})}function s({id:e,type:t=`checkbox`,items:n=[],name:r,classes:i,hasDividers:s,expandedFirstLevel:c,decoupleChildFromParent:u,onChange:d,onExpand:f,children:p}){return(0,l.jsxs)(`ul`,{id:e,role:`tree`,className:a(`c-tree`,i),"aria-multiselectable":t===`checkbox`,children:[n.map((e,n)=>(0,l.jsx)(o,{item:e,type:t,name:r,level:0,hasDividers:s,expandedFirstLevel:c,decoupleChildFromParent:u,onChange:d,onExpand:f,parentExpanded:!0},e.id??n)),p]})}var c,l,u,d,f=t((()=>{c=e(n(),1),i(),l=r(),u=({className:e})=>(0,l.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,width:`10`,height:`10`,"aria-hidden":`true`,className:a(`c-tree__minus`,e),children:(0,l.jsx)(`path`,{fill:`currentColor`,d:`M9.286 5.714H.714a.714.714 0 010-1.428h8.572a.714.714 0 010 1.428z`})}),d=({className:e})=>(0,l.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,width:`10`,height:`10`,"aria-hidden":`true`,className:a(`c-tree__plus`,e),children:(0,l.jsx)(`path`,{fill:`currentColor`,d:`M9.286 5.714H5.714V2.143a.714.714 0 10-1.428 0v3.571H.714a.714.714 0 100 1.428h3.572v3.571a.714.714 0 101.428 0V7.142h3.572a.714.714 0 100-1.428z`})}),s.__docgenInfo={description:`Tree component - hierarchical list with checkboxes or radio buttons.
Supports single/multiple selection, nested items, and keyboard navigation.`,methods:[],displayName:`Tree`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},type:{required:!1,tsType:{name:`union`,raw:`'radio' | 'checkbox' | 'navigation'`,elements:[{name:`literal`,value:`'radio'`},{name:`literal`,value:`'checkbox'`},{name:`literal`,value:`'navigation'`}]},description:`Tree type: radio (single select) or checkbox (multi select)`,defaultValue:{value:`'checkbox'`,computed:!1}},items:{required:!1,tsType:{name:`Array`,elements:[{name:`TreeItemData`}],raw:`TreeItemData[]`},description:`Array of tree items`,defaultValue:{value:`[]`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:`Item name prefix for form submission`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the tree`},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Whether to show dividers`},expandedFirstLevel:{required:!1,tsType:{name:`boolean`},description:`Whether to expand first level by default`},decoupleChildFromParent:{required:!1,tsType:{name:`boolean`},description:`Decouple child selection from parent`},search:{required:!1,tsType:{name:`string`},description:`Search/filter text`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: TreeItemData) => void`,signature:{arguments:[{type:{name:`TreeItemData`},name:`item`}],return:{name:`void`}}},description:`Called when selection changes`},onExpand:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: TreeItemData, expanded: boolean) => void`,signature:{arguments:[{type:{name:`TreeItemData`},name:`item`},{type:{name:`boolean`},name:`expanded`}],return:{name:`void`}}},description:`Called when item is expanded/collapsed`},children:{required:!1,tsType:{name:`ReactNode`},description:`Children slot`}}}}));function p(e,t,n){return e.map(e=>e.id===t?{...e,...n}:e.items?{...e,items:p(e.items,t,n)}:e)}var m,h,g,_,v,y,b,x,S;t((()=>{m=e(n(),1),f(),h=r(),g={title:`Forms/Tree`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Tree component with hierarchical checkboxes or radio buttons.`}}},argTypes:{type:{control:{type:`select`},options:[`checkbox`,`radio`,`navigation`]},hasDividers:{control:`boolean`},expandedFirstLevel:{control:`boolean`}}},_=[{id:`opt-1`,name:`Opción 1`,value:`opt1`,checked:!1,items:[{id:`opt-1-1`,name:`Sub-opción 1.1`,value:`opt1-1`,checked:!1},{id:`opt-1-2`,name:`Sub-opción 1.2`,value:`opt1-2`,checked:!1}]},{id:`opt-2`,name:`Opción 2`,value:`opt2`,checked:!0,expanded:!0,items:[{id:`opt-2-1`,name:`Sub-opción 2.1`,value:`opt2-1`,checked:!0},{id:`opt-2-2`,name:`Sub-opción 2.2`,value:`opt2-2`,checked:!1}]},{id:`opt-3`,name:`Opción 3 (deshabilitada)`,value:`opt3`,disabled:!0,checked:!1}],v={render:e=>{let[t,n]=(0,m.useState)(e.items||[]);return(0,h.jsx)(s,{...e,items:t,onChange:e=>{n(t=>p(t,e.id||``,{checked:e.checked}))}})},args:{id:`tree-checkbox`,name:`tree-options`,type:`checkbox`,items:_,hasDividers:!0,expandedFirstLevel:!0}},y={render:e=>{let[t,n]=(0,m.useState)((e.items||[]).map(e=>({...e,checked:!1,items:e.items?.map(e=>({...e,checked:!1}))})));return(0,h.jsx)(s,{...e,items:t,onChange:e=>{n(t=>p(t,e.id||``,{checked:e.checked}))}})},args:{id:`tree-radio`,name:`tree-radio-options`,type:`radio`,items:_,expandedFirstLevel:!0}},b={args:{id:`tree-navigation`,type:`navigation`,items:[{id:`nav-1`,name:`Inicio`,value:`home`,href:`/`,expanded:!0,items:[{id:`nav-1-1`,name:`Sub-página 1`,value:`sub1`,href:`/sub1`},{id:`nav-1-2`,name:`Sub-página 2`,value:`sub2`,href:`/sub2`}]},{id:`nav-2`,name:`Servicios`,value:`services`,href:`/services`,items:[{id:`nav-2-1`,name:`Servicio A`,value:`service-a`,href:`/services/a`},{id:`nav-2-2`,name:`Servicio B`,value:`service-b`,href:`/services/b`}]}]}},x={render:e=>{let[t,n]=(0,m.useState)(e.items||[]);return(0,h.jsx)(s,{...e,items:t,onChange:e=>{n(t=>p(t,e.id||``,{checked:e.checked}))}})},args:{id:`tree-three-levels`,type:`checkbox`,name:`three-levels`,expandedFirstLevel:!0,hasDividers:!0,items:[{id:`level-1`,name:`Nivel 1`,value:`level1`,items:[{id:`level-1-1`,name:`Nivel 2 - A`,value:`level1-a`,items:[{id:`level-1-1-a`,name:`Nivel 3 - A`,value:`level1-a-a`},{id:`level-1-1-b`,name:`Nivel 3 - B`,value:`level1-a-b`}]},{id:`level-1-2`,name:`Nivel 2 - B`,value:`level1-b`}]}]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState<TreeItemData[]>(args.items || []);
    return <Tree {...args} items={items} onChange={changedItem => {
      setItems(prev => updateNestedItem(prev, changedItem.id || '', {
        checked: changedItem.checked
      }));
    }} />;
  },
  args: {
    id: 'tree-checkbox',
    name: 'tree-options',
    type: 'checkbox',
    items: checkboxItems,
    hasDividers: true,
    expandedFirstLevel: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState<TreeItemData[]>((args.items || []).map((item: TreeItemData) => ({
      ...item,
      checked: false,
      items: item.items?.map((c: TreeItemData) => ({
        ...c,
        checked: false
      }))
    })));
    return <Tree {...args} items={items} onChange={changedItem => {
      setItems(prev => updateNestedItem(prev, changedItem.id || '', {
        checked: changedItem.checked
      }));
    }} />;
  },
  args: {
    id: 'tree-radio',
    name: 'tree-radio-options',
    type: 'radio',
    items: checkboxItems,
    expandedFirstLevel: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'tree-navigation',
    type: 'navigation',
    items: [{
      id: 'nav-1',
      name: 'Inicio',
      value: 'home',
      href: '/',
      expanded: true,
      items: [{
        id: 'nav-1-1',
        name: 'Sub-página 1',
        value: 'sub1',
        href: '/sub1'
      }, {
        id: 'nav-1-2',
        name: 'Sub-página 2',
        value: 'sub2',
        href: '/sub2'
      }]
    }, {
      id: 'nav-2',
      name: 'Servicios',
      value: 'services',
      href: '/services',
      items: [{
        id: 'nav-2-1',
        name: 'Servicio A',
        value: 'service-a',
        href: '/services/a'
      }, {
        id: 'nav-2-2',
        name: 'Servicio B',
        value: 'service-b',
        href: '/services/b'
      }]
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState<TreeItemData[]>(args.items || []);
    return <Tree {...args} items={items} onChange={changedItem => {
      setItems(prev => updateNestedItem(prev, changedItem.id || '', {
        checked: changedItem.checked
      }));
    }} />;
  },
  args: {
    id: 'tree-three-levels',
    type: 'checkbox',
    name: 'three-levels',
    expandedFirstLevel: true,
    hasDividers: true,
    items: [{
      id: 'level-1',
      name: 'Nivel 1',
      value: 'level1',
      items: [{
        id: 'level-1-1',
        name: 'Nivel 2 - A',
        value: 'level1-a',
        items: [{
          id: 'level-1-1-a',
          name: 'Nivel 3 - A',
          value: 'level1-a-a'
        }, {
          id: 'level-1-1-b',
          name: 'Nivel 3 - B',
          value: 'level1-a-b'
        }]
      }, {
        id: 'level-1-2',
        name: 'Nivel 2 - B',
        value: 'level1-b'
      }]
    }]
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Radio`,`Navigation`,`ThreeLevels`]}))();export{v as Default,b as Navigation,y as Radio,x as ThreeLevels,S as __namedExportsOrder,g as default};