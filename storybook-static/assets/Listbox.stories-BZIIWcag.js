import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,p,r as m,t as h}from"./floating-ui.react-CYOrzWTq.js";function g({id:e,isMultiselectable:t=!1,doesChangeButtonText:n=!1,label:r,classes:i,classesContainer:f=`relative`,classesTooltip:g,idPrefix:b,disabled:x=!1,items:S=[],type:C=`button`,text:w,html:T,placement:E=`bottom-start`,onItemsChange:D,onActiveItemChange:O,className:k}){let[A,j]=(0,_.useState)(!1),[M,N]=(0,_.useState)(()=>S.filter(e=>e.active)),[P,F]=(0,_.useState)(0),[I,L]=(0,_.useState)(T||w||``),R=(0,_.useRef)(null),z=(0,_.useRef)(null),{refs:B,floatingStyles:V,context:H}=o({placement:E,open:A,onOpenChange:j,middleware:[l(8),p({padding:5}),c()]}),U=s([m(H,{enabled:!x}),u(H,{enabled:A}),d(H,{role:`listbox`})]);(0,_.useEffect)(()=>{let e=S.filter(e=>e.active);if(N(e),n&&!t&&e.length>0){let t=e[0];L(t.html||t.text||``)}},[S,n,t]);let W=(0,_.useCallback)(e=>{let n=S[e];if(!n||n.disabled)return;let r,i;t?(r=S.map((t,n)=>n===e?{...t,active:!t.active}:t),i=r.filter(e=>e.active)):(r=S.map((t,n)=>({...t,active:n===e})),i=[n],L(n.html||n.text||``)),F(e),D?.(r),O?.(i[0]||null),t||j(!1)},[S,t,D,O]),G=(0,_.useCallback)(e=>{if(A)switch(e.key){case`ArrowUp`:e.preventDefault(),F(e=>Math.max(0,e-1));break;case`ArrowDown`:e.preventDefault(),F(e=>Math.min(S.length-1,e+1));break;case`Home`:e.preventDefault(),F(0);break;case`End`:e.preventDefault(),F(S.length-1);break;case` `:case`Enter`:e.preventDefault(),W(P);break;case`Escape`:e.preventDefault(),j(!1);break}},[A,S.length,P,W]),K=()=>b||`${e}-listbox-item`,q=(e,t)=>e.id||(t>0?`${K()}-${t}`:K()),J=!!r;return(0,v.jsxs)(`div`,{className:a(f,k),id:e,children:[r&&(0,v.jsx)(`div`,{id:`${e}-label`,className:a(`mb-sm`,r.classes),"aria-hidden":`true`,children:r.html?(0,v.jsx)(`span`,{dangerouslySetInnerHTML:{__html:r.html}}):r.text?r.text:null}),(0,v.jsxs)(`button`,{ref:B.setReference,id:`${e}-button`,type:C,disabled:x,"aria-haspopup":`listbox`,"aria-labelledby":J?`${e}-label ${e}-button`:`${e}-button`,"aria-expanded":A,"aria-disabled":x,onClick:()=>!x&&j(!A),onKeyDown:G,className:a(`c-listbox`,i),...U.getReferenceProps(),children:[(0,v.jsx)(`span`,{className:`inline-flex self-center align-middle`,children:I?T||w?(0,v.jsx)(`span`,{dangerouslySetInnerHTML:{__html:I}}):(0,v.jsx)(`span`,{children:I}):w}),(0,v.jsx)(y,{})]}),A&&S.length>0&&(0,v.jsxs)(`div`,{ref:B.setFloating,style:V,className:a(`c-listbox__tooltip min-w-auto -ml-sm mt-2 border border-neutral-base shadow-md bg-white z-50`,g),...U.getFloatingProps(),children:[(0,v.jsx)(`ul`,{ref:z,id:e,role:`listbox`,tabIndex:-1,"aria-labelledby":J?e:void 0,"aria-multiselectable":t?`true`:void 0,"aria-activedescendant":M.length>0?q(M[0],S.indexOf(M[0])):void 0,className:`text-sm outline-none`,onKeyDown:G,children:S.map((e,t)=>(0,v.jsx)(`li`,{id:q(e,t),role:`option`,"aria-selected":e.active,"aria-disabled":e.disabled,onClick:()=>!e.disabled&&W(t),className:a(`flex items-center pr-base pl-lg py-sm cursor-pointer`,`hover:bg-primary-base hover:text-white`,`focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`,e.active&&`bg-primary-base text-white`,e.disabled&&`opacity-50 cursor-not-allowed`,e.classes),children:e.html?(0,v.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text?e.text:null},e.id??t))}),(0,v.jsx)(h,{ref:R,context:H,className:`fill-neutral-base`})]})]})}var _,v,y,b=t((()=>{_=e(n(),1),f(),i(),v=r(),y=()=>(0,v.jsx)(`svg`,{viewBox:`0 0 96 96`,"aria-hidden":`true`,fill:`currentColor`,focusable:`false`,width:`1.5em`,height:`1.5em`,className:`inline-block -mr-2 align-middle -my-px`,children:(0,v.jsx)(`path`,{d:`M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z`})}),g.__docgenInfo={description:`Listbox component - a dropdown listbox with keyboard navigation.
Supports single and multi-select modes.`,methods:[],displayName:`Listbox`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},isMultiselectable:{required:!1,tsType:{name:`boolean`},description:`Whether multiple items can be selected`,defaultValue:{value:`false`,computed:!1}},doesChangeButtonText:{required:!1,tsType:{name:`boolean`},description:`Whether to change button text to selected item`,defaultValue:{value:`false`,computed:!1}},label:{required:!1,tsType:{name:`ListboxLabelData`},description:`Label configuration`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the button`},classesContainer:{required:!1,tsType:{name:`string`},description:`CSS classes for the container`,defaultValue:{value:`'relative'`,computed:!1}},classesTooltip:{required:!1,tsType:{name:`string`},description:`CSS classes for the tooltip/dropdown`},idPrefix:{required:!1,tsType:{name:`string`},description:`ID prefix for items`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the listbox is disabled`,defaultValue:{value:`false`,computed:!1}},items:{required:!1,tsType:{name:`Array`,elements:[{name:`ListboxItemData`}],raw:`ListboxItemData[]`},description:`Array of items`,defaultValue:{value:`[]`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:`Button type`,defaultValue:{value:`'button'`,computed:!1}},text:{required:!1,tsType:{name:`string`},description:`Listbox button text`},html:{required:!1,tsType:{name:`string`},description:`Listbox button HTML`},placement:{required:!1,tsType:{name:`Placement`},description:`Placement of the dropdown`,defaultValue:{value:`'bottom-start'`,computed:!1}},onItemsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(items: ListboxItemData[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`ListboxItemData`}],raw:`ListboxItemData[]`},name:`items`}],return:{name:`void`}}},description:`Called when items change`},onActiveItemChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: ListboxItemData | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`ListboxItemData | null`,elements:[{name:`ListboxItemData`},{name:`null`}]},name:`item`}],return:{name:`void`}}},description:`Called when active item changes`},className:{required:!1,tsType:{name:`string`},description:`CSS classes`}}}})),x,S,C,w,T,E,D,O,k,A;t((()=>{x=e(n(),1),b(),S=r(),C={title:`Buttons/Listbox`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:`Listbox dropdown with keyboard navigation. Supports single and multi-select modes.`}}},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]}}},w=[{value:`opt1`,text:`Opción 1`,active:!1},{value:`opt2`,text:`Opción 2`,active:!1},{value:`opt3`,text:`Opción 3`,active:!1},{value:`opt4`,text:`Opción 4`,active:!1}],T={render:e=>{let[t,n]=(0,x.useState)(e.items||w);return(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsx)(g,{...e,items:t,onItemsChange:e=>n(e)})})},args:{id:`listbox-default`,label:{text:`Seleccione una opción`},items:w,placement:`bottom-start`}},E={render:e=>{let[t,n]=(0,x.useState)(e.items||w),[r,i]=(0,x.useState)(null);return(0,S.jsxs)(`div`,{className:`flex flex-col items-center p-8`,children:[(0,S.jsx)(g,{...e,items:t,onItemsChange:e=>n(e),onActiveItemChange:e=>i(e)}),r&&(0,S.jsxs)(`p`,{className:`mt-4 text-sm`,children:[`Seleccionado: `,(0,S.jsx)(`strong`,{children:r.text})]})]})},args:{id:`listbox-single`,label:{text:`Idioma`},doesChangeButtonText:!0,items:[{value:`es`,text:`Español`},{value:`en`,text:`English`},{value:`fr`,text:`Français`},{value:`de`,text:`Deutsch`}],placement:`bottom-start`}},D={render:e=>{let[t,n]=(0,x.useState)(e.items||w.map(e=>({...e})));return(0,S.jsxs)(`div`,{className:`flex flex-col items-center p-8`,children:[(0,S.jsx)(g,{...e,items:t,onItemsChange:e=>n(e)}),(0,S.jsxs)(`p`,{className:`mt-4 text-sm`,children:[`Seleccionados:`,` `,(0,S.jsx)(`strong`,{children:t.filter(e=>e.active).map(e=>e.text).join(`, `)||`ninguno`})]})]})},args:{id:`listbox-multi`,label:{text:`Seleccione múltiples opciones`},isMultiselectable:!0,items:w,placement:`bottom-start`}},O={render:e=>{let[t,n]=(0,x.useState)(e.items||w);return(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsx)(g,{...e,items:t,onItemsChange:e=>n(e)})})},args:{id:`listbox-disabled`,label:{text:`Con opciones deshabilitadas`},items:[{value:`opt1`,text:`Opción disponible`},{value:`opt2`,text:`Opción deshabilitada`,disabled:!0},{value:`opt3`,text:`Otra opción`}],placement:`bottom-start`}},k={render:e=>(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsx)(g,{...e})}),args:{id:`listbox-disabled`,label:{text:`Listbox deshabilitado`},items:w,disabled:!0,placement:`bottom-start`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState(args.items || sampleItems);
    return <div className="flex justify-center p-8">
        <Listbox {...args} items={items} onItemsChange={newItems => setItems(newItems)} />
      </div>;
  },
  args: {
    id: 'listbox-default',
    label: {
      text: 'Seleccione una opción'
    },
    items: sampleItems,
    placement: 'bottom-start'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState(args.items || sampleItems);
    const [activeItem, setActiveItem] = useState<any>(null);
    return <div className="flex flex-col items-center p-8">
        <Listbox {...args} items={items} onItemsChange={newItems => setItems(newItems)} onActiveItemChange={item => setActiveItem(item)} />
        {activeItem && <p className="mt-4 text-sm">Seleccionado: <strong>{activeItem.text}</strong></p>}
      </div>;
  },
  args: {
    id: 'listbox-single',
    label: {
      text: 'Idioma'
    },
    doesChangeButtonText: true,
    items: [{
      value: 'es',
      text: 'Español'
    }, {
      value: 'en',
      text: 'English'
    }, {
      value: 'fr',
      text: 'Français'
    }, {
      value: 'de',
      text: 'Deutsch'
    }],
    placement: 'bottom-start'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState(args.items || sampleItems.map(i => ({
      ...i
    })));
    return <div className="flex flex-col items-center p-8">
        <Listbox {...args} items={items} onItemsChange={newItems => setItems(newItems)} />
        <p className="mt-4 text-sm">
          Seleccionados:{' '}
          <strong>{items.filter(i => i.active).map(i => i.text).join(', ') || 'ninguno'}</strong>
        </p>
      </div>;
  },
  args: {
    id: 'listbox-multi',
    label: {
      text: 'Seleccione múltiples opciones'
    },
    isMultiselectable: true,
    items: sampleItems,
    placement: 'bottom-start'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [items, setItems] = useState(args.items || sampleItems);
    return <div className="flex justify-center p-8">
        <Listbox {...args} items={items} onItemsChange={newItems => setItems(newItems)} />
      </div>;
  },
  args: {
    id: 'listbox-disabled',
    label: {
      text: 'Con opciones deshabilitadas'
    },
    items: [{
      value: 'opt1',
      text: 'Opción disponible'
    }, {
      value: 'opt2',
      text: 'Opción deshabilitada',
      disabled: true
    }, {
      value: 'opt3',
      text: 'Otra opción'
    }],
    placement: 'bottom-start'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center p-8">
      <Listbox {...args} />
    </div>,
  args: {
    id: 'listbox-disabled',
    label: {
      text: 'Listbox deshabilitado'
    },
    items: sampleItems,
    disabled: true,
    placement: 'bottom-start'
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`SingleSelect`,`MultiSelect`,`WithDisabledItems`,`Disabled`]}))();export{T as Default,k as Disabled,D as MultiSelect,E as SingleSelect,O as WithDisabledItems,A as __namedExportsOrder,C as default};