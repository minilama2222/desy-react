import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{a as o,c as s,d as c,f as l,i as u,l as d,n as f,p,r as m,t as h}from"./floating-ui.react-CYOrzWTq.js";function g({id:e,disabled:t=!1,hiddenText:n,classes:r,classesTooltip:i,classesContainer:f=`relative block`,text:g,html:_,contentRole:x,contentAriaLabel:S,contentAriaModal:C,children:w,placement:T=`bottom-start`,onClick:E,className:D}){let[O,k]=(0,v.useState)(!1),A=(0,v.useRef)(null),{refs:j,floatingStyles:M,context:N}=o({placement:T,open:O,onOpenChange:k,middleware:[l(0),p({padding:5}),c()]}),P=s([m(N,{enabled:!t}),u(N),d(N,{role:`listbox`})]),F=e=>{t||E?.(e)},I=()=>_?(0,y.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g?(0,y.jsx)(`span`,{children:g}):null;return(0,y.jsxs)(`div`,{className:a(f,D),children:[(0,y.jsxs)(`button`,{ref:j.setReference,id:e,type:`button`,disabled:t,"aria-haspopup":!0,"aria-expanded":O,"aria-disabled":t,"aria-label":n,onClick:F,className:a(`c-dropdown`,r),...P.getReferenceProps(),children:[(0,y.jsx)(`span`,{className:`inline-flex self-center max-w-xs align-middle truncate`,children:I()}),(0,y.jsx)(b,{})]}),n&&(0,y.jsx)(`span`,{className:`sr-only`,children:n}),O&&w&&(0,y.jsxs)(`div`,{ref:j.setFloating,style:M,role:x||`listbox`,"aria-label":S,"aria-modal":C===`true`?!0:C===`false`?!1:void 0,className:a(`min-w-auto mt-2 border border-neutral-base shadow-md bg-white z-50`,i),...P.getFloatingProps(),children:[(0,y.jsx)(h,{ref:A,context:N,className:`fill-neutral-base`}),w]})]})}function _({text:e,html:t,href:n,onClick:r,disabled:i=!1,className:o,target:s,children:c}){let l=`flex items-center pr-base pl-lg py-sm hover:bg-primary-base hover:text-white focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`;return n&&!i?(0,y.jsx)(`a`,{href:n,target:s,className:a(l,`cursor-pointer`,o),onClick:r,children:t?(0,y.jsx)(`span`,{dangerouslySetInnerHTML:{__html:t}}):e||c}):(0,y.jsx)(`button`,{type:`button`,disabled:i,className:a(l,`w-full text-left`,i&&`opacity-50 cursor-not-allowed`,o),onClick:r,children:t?(0,y.jsx)(`span`,{dangerouslySetInnerHTML:{__html:t}}):e||c})}var v,y,b,x=t((()=>{v=e(n(),1),f(),i(),y=r(),b=()=>(0,y.jsx)(`svg`,{viewBox:`0 0 96 96`,"aria-hidden":`true`,fill:`currentColor`,focusable:`false`,width:`1.5em`,height:`1.5em`,className:`inline-block -mr-2 align-middle -my-px`,children:(0,y.jsx)(`path`,{d:`M46.71 58.037a1.823 1.823 0 002.581 0L62.048 45.28a1.823 1.823 0 00-1.29-3.113H35.243a1.823 1.823 0 00-1.291 3.113z`})}),g.__docgenInfo={description:`Dropdown component - a button that opens a dropdown menu/popover on click.
Uses FloatingUI for positioning.`,methods:[],displayName:`Dropdown`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the dropdown is disabled`,defaultValue:{value:`false`,computed:!1}},hiddenText:{required:!1,tsType:{name:`string`},description:`Hidden text for screen readers`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the button`},classesTooltip:{required:!1,tsType:{name:`string`},description:`CSS classes for the tooltip/dropdown content`},classesContainer:{required:!1,tsType:{name:`string`},description:`CSS classes for the container`,defaultValue:{value:`'relative block'`,computed:!1}},text:{required:!1,tsType:{name:`string`},description:`Dropdown button content`},html:{required:!1,tsType:{name:`string`},description:`Dropdown button HTML content`},contentRole:{required:!1,tsType:{name:`string`},description:`Role for the dropdown content`},contentAriaLabel:{required:!1,tsType:{name:`string`},description:`Aria label for the content`},contentAriaModal:{required:!1,tsType:{name:`string`},description:`Aria modal attribute`},children:{required:!1,tsType:{name:`ReactNode`},description:`Dropdown content (popover)`},placement:{required:!1,tsType:{name:`Placement`},description:`Placement of the dropdown`,defaultValue:{value:`'bottom-start'`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent`},name:`event`}],return:{name:`void`}}},description:`Called when dropdown is clicked`},className:{required:!1,tsType:{name:`string`},description:`CSS classes`}}},_.__docgenInfo={description:`DropdownItem - individual item within a Dropdown menu.`,methods:[],displayName:`DropdownItem`,props:{text:{required:!1,tsType:{name:`string`},description:`Item text`},html:{required:!1,tsType:{name:`string`},description:`Item HTML`},href:{required:!1,tsType:{name:`string`},description:`Item href (if it's a link)`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Item click handler`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the item is disabled`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`CSS classes`},target:{required:!1,tsType:{name:`string`},description:`Target attribute`},children:{required:!1,tsType:{name:`ReactNode`},description:`Children`}}}})),S,C,w,T,E,D,O,k;t((()=>{x(),S=r(),C={title:`Buttons/Dropdown`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:`Dropdown button that opens a menu/popover on click using FloatingUI.`}}},argTypes:{placement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`]}}},w={render:e=>(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsxs)(g,{...e,children:[(0,S.jsx)(_,{text:`Opción 1`,href:`#`}),(0,S.jsx)(_,{text:`Opción 2`,href:`#`}),(0,S.jsx)(_,{text:`Opción 3`,href:`#`})]})}),args:{id:`dropdown-default`,text:`Abrir menú`,placement:`bottom-start`}},T={render:e=>(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsxs)(g,{...e,children:[(0,S.jsx)(_,{html:`<strong>Opción en negrita</strong>`,href:`#`}),(0,S.jsx)(_,{html:`<em>Opción en cursiva</em>`,href:`#`})]})}),args:{id:`dropdown-html`,html:`<span>Menú <b>especial</b></span>`,placement:`bottom-start`}},E={render:e=>(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsxs)(g,{...e,children:[(0,S.jsx)(_,{text:`Opción disponible`,href:`#`}),(0,S.jsx)(_,{text:`Opción deshabilitada`,disabled:!0}),(0,S.jsx)(_,{text:`Otra opción`,href:`#`})]})}),args:{id:`dropdown-disabled`,text:`Menú con deshabilitados`,placement:`bottom-start`}},D={render:e=>(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsxs)(g,{...e,onClick:()=>console.log(`Dropdown clicked!`),children:[(0,S.jsx)(_,{text:`Aceptar`,onClick:()=>console.log(`Accept clicked!`)}),(0,S.jsx)(_,{text:`Cancelar`,onClick:()=>console.log(`Cancel clicked!`)})]})}),args:{id:`dropdown-onclick`,text:`Acciones`,placement:`bottom-start`}},O={render:e=>(0,S.jsx)(`div`,{className:`flex justify-center p-8`,children:(0,S.jsx)(g,{...e,children:(0,S.jsx)(_,{text:`No se mostrará`})})}),args:{id:`dropdown-disabled`,text:`Menú deshabilitado`,disabled:!0,placement:`bottom-start`}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem text="Opción 1" href="#" />
        <DropdownItem text="Opción 2" href="#" />
        <DropdownItem text="Opción 3" href="#" />
      </Dropdown>
    </div>,
  args: {
    id: 'dropdown-default',
    text: 'Abrir menú',
    placement: 'bottom-start'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem html='<strong>Opción en negrita</strong>' href="#" />
        <DropdownItem html='<em>Opción en cursiva</em>' href="#" />
      </Dropdown>
    </div>,
  args: {
    id: 'dropdown-html',
    html: '<span>Menú <b>especial</b></span>',
    placement: 'bottom-start'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem text="Opción disponible" href="#" />
        <DropdownItem text="Opción deshabilitada" disabled />
        <DropdownItem text="Otra opción" href="#" />
      </Dropdown>
    </div>,
  args: {
    id: 'dropdown-disabled',
    text: 'Menú con deshabilitados',
    placement: 'bottom-start'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center p-8">
      <Dropdown {...args} onClick={() => console.log('Dropdown clicked!')}>
        <DropdownItem text="Aceptar" onClick={() => console.log('Accept clicked!')} />
        <DropdownItem text="Cancelar" onClick={() => console.log('Cancel clicked!')} />
      </Dropdown>
    </div>,
  args: {
    id: 'dropdown-onclick',
    text: 'Acciones',
    placement: 'bottom-start'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex justify-center p-8">
      <Dropdown {...args}>
        <DropdownItem text="No se mostrará" />
      </Dropdown>
    </div>,
  args: {
    id: 'dropdown-disabled',
    text: 'Menú deshabilitado',
    disabled: true,
    placement: 'bottom-start'
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithHtmlContent`,`WithDisabledItems`,`WithOnClick`,`Disabled`]}))();export{w as Default,O as Disabled,E as WithDisabledItems,T as WithHtmlContent,D as WithOnClick,k as __namedExportsOrder,C as default};