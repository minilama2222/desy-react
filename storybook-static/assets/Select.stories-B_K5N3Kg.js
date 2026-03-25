import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return`items`in e&&Array.isArray(e.items)}function s(e){return e?`${e}-hint`:``}function c(e){return e?`${e}-error`:``}var l,u,d,f=t((()=>{l=e(n(),1),i(),u=r(),d=(0,l.forwardRef)(({className:e,formGroupClasses:t,name:n,id:r,describedBy:i,classes:l,hintText:d,hintHtml:f,errorMessageText:p,errorMessageHtml:m,errorVisuallyHiddenText:h,labelText:g,labelHtml:_,labelIsPageHeading:v,labelHeadingLevel:y,labelClasses:b,hintClasses:x,errorMessageClasses:S,hintId:C,children:w,items:T,value:E,disabled:D,onFocus:O,onBlur:k,onInput:A,onChange:j,...M},N)=>{let P=C||s(r),F=c(r),I=!!(p||m),L=[i,P,F].filter(Boolean).join(` `)||void 0,R=a(`c-select`,`block`,`mt-sm`,`transition`,`duration-150`,`ease-in-out`,`border-black`,`rounded-sm`,`font-semibold`,`focus:border-black`,`focus:shadow-outline-focus-input`,`focus:ring-4`,`focus:ring-warning-base`,`disabled:bg-neutral-light`,`disabled:border-neutral-base`,I&&`c-select--error border-alert-base ring-2 ring-alert-base`,l,e),z=e=>{let t=e.target.value,n=!isNaN(Number(t))&&t!==``?Number(t):t;j?.(n,e)},B=()=>{if(!g&&!_)return null;let e=_?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g;return v?(0,u.jsx)(`h${y||2}`,{className:b,children:e}):(0,u.jsx)(`label`,{htmlFor:r,className:a(`block`,b),children:e})},V=(e,t)=>{let n=e.value?.toString()??``,r=E===void 0?e.selected:n===E?.toString();return(0,u.jsx)(`option`,{id:e.id,value:n,disabled:e.disabled,selected:r,children:e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text},e.id||t)},H=()=>w||(T?T.map((e,t)=>o(e)?(0,u.jsx)(`optgroup`,{label:e.label,disabled:e.disabled,children:e.items.map((e,t)=>V(e,t))},t):V(e,t)):null);return(0,u.jsxs)(`div`,{className:a(`c-form-group`,I&&`c-form-group--error`,t),children:[B(),(d||f)&&(0,u.jsx)(`p`,{id:P,className:a(`block`,`text-neutral-dark`,x),children:f?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f}}):d}),(p||m)&&(0,u.jsxs)(`p`,{id:F,className:a(`block`,`font-semibold`,`text-alert-base`,S),children:[(0,u.jsxs)(`span`,{className:`sr-only`,children:[h||`Error`,`: `]}),m?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:m}}):p]}),(0,u.jsx)(`select`,{ref:N,id:r,name:n,className:R,disabled:D,"aria-describedby":L,"aria-invalid":I||void 0,"aria-errormessage":F||void 0,onFocus:O,onBlur:k,onInput:A,onChange:z,...M,children:H()})]})}),d.displayName=`Select`,d.__docgenInfo={description:`Select component - a dropdown select with optional label, hint, and error message.`,methods:[],displayName:`Select`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group wrapper`},name:{required:!1,tsType:{name:`string`},description:`Select name attribute`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},describedBy:{required:!1,tsType:{name:`string`},description:`Described by IDs (hint, error)`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the select element`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text content`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML content`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text content`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML content`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error (default: 'Error')`},labelText:{required:!1,tsType:{name:`string`},description:`Label text content`},labelHtml:{required:!1,tsType:{name:`string`},description:`Label HTML content`},labelIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Label is page heading`},labelHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Label heading level`},labelClasses:{required:!1,tsType:{name:`string`},description:`Label CSS classes`},hintClasses:{required:!1,tsType:{name:`string`},description:`Hint CSS classes`},errorMessageClasses:{required:!1,tsType:{name:`string`},description:`Error message CSS classes`},hintId:{required:!1,tsType:{name:`string`},description:`Hint ID`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (Label, Hint, ErrorMessage)`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`SelectOption | SelectOptionGroup`,elements:[{name:`SelectOption`},{name:`SelectOptionGroup`}]}],raw:`SelectItem[]`},description:`Options array (alternative to children)`},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Currently selected value`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Blur event handler`},onInput:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FormEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`ReactFormEvent`,raw:`React.FormEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Input event handler`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | number, event: React.ChangeEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`value`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]}})),p,m,h,g,_,v,y,b,x,S,C;t((()=>{f(),p={title:`Forms/Select`,component:d,tags:[`autodocs`]},m={args:{id:`select-1`,name:`select-1`,labelText:`Esto es un label`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`,selected:!0},{value:3,text:`Opción 3`,disabled:!0}]}},h={args:{id:`select-2`,name:`select-2`,disabled:!0,labelText:`Esto es un label`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`,selected:!0},{value:3,text:`Opción 3`,disabled:!0}]}},g={args:{id:`select-placeholder`,name:`select-placeholder`,labelText:`Esto es un label`,items:[{value:``,text:`Choose an option`,disabled:!0,selected:!0},{value:1,text:`Opción 1`},{value:2,text:`Opción 2`},{value:3,text:`Opción 3`}]}},_={args:{id:`select-optgroup`,name:`select-optgroup`,labelText:`Esto es un label`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`},{label:`Optgroup label A`,items:[{value:1,text:`Optgroup subopción A1`},{value:2,text:`Optgroup subopción A2`,selected:!0},{value:3,text:`Optgroup subopción A3`}]},{value:3,text:`Opción 3`},{value:4,text:`Opción 4`},{label:`Optgroup label B`,items:[{value:1,text:`Optgroup subopción B1`},{value:2,text:`Optgroup subopción B2`},{value:3,text:`Optgroup subopción B3`}]},{value:5,text:`Opción 5`},{value:6,text:`Opción 6`}]}},v={args:{id:`select-3`,name:`select-3`,labelText:`Esto es un label`,hintText:`Esto es una pista.`,errorMessageText:`Esto es un mensaje de error`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`},{value:3,text:`Opción 3`}]}},y={args:{id:`select-5`,name:`select-5`,classes:`w-full`,labelText:`Esto es un label`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`,selected:!0},{value:3,text:`Opción 3`,disabled:!0}]}},b={args:{id:`select-6`,name:`select-6`,classes:`lg:flex-1`,labelText:`Label en línea:`,labelClasses:`lg:py-sm lg:mt-sm`,formGroupClasses:`lg:flex lg:flex-wrap lg:items-center lg:gap-x-base`,errorMessageText:`Esto es un mensaje de error`,errorMessageClasses:`order-1 w-full pt-sm`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`,selected:!0},{value:3,text:`Opción 3`,disabled:!0}]}},x={args:{id:`select-7`,name:`select-7`,classes:`c-select--transparent`,labelText:`Esto es un label`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`,selected:!0},{value:3,text:`Opción 3`,disabled:!0}]}},S={args:{id:`select-8`,name:`select-8`,classes:`c-select--sm`,labelText:`Esto es un label`,items:[{value:1,text:`Opción 1`},{value:2,text:`Opción 2`,selected:!0},{value:3,text:`Opción 3`,disabled:!0}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-1',
    name: 'select-1',
    labelText: 'Esto es un label',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2',
      selected: true
    }, {
      value: 3,
      text: 'Opción 3',
      disabled: true
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-2',
    name: 'select-2',
    disabled: true,
    labelText: 'Esto es un label',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2',
      selected: true
    }, {
      value: 3,
      text: 'Opción 3',
      disabled: true
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-placeholder',
    name: 'select-placeholder',
    labelText: 'Esto es un label',
    items: [{
      value: '',
      text: 'Choose an option',
      disabled: true,
      selected: true
    }, {
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2'
    }, {
      value: 3,
      text: 'Opción 3'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-optgroup',
    name: 'select-optgroup',
    labelText: 'Esto es un label',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2'
    }, {
      label: 'Optgroup label A',
      items: [{
        value: 1,
        text: 'Optgroup subopción A1'
      }, {
        value: 2,
        text: 'Optgroup subopción A2',
        selected: true
      }, {
        value: 3,
        text: 'Optgroup subopción A3'
      }]
    }, {
      value: 3,
      text: 'Opción 3'
    }, {
      value: 4,
      text: 'Opción 4'
    }, {
      label: 'Optgroup label B',
      items: [{
        value: 1,
        text: 'Optgroup subopción B1'
      }, {
        value: 2,
        text: 'Optgroup subopción B2'
      }, {
        value: 3,
        text: 'Optgroup subopción B3'
      }]
    }, {
      value: 5,
      text: 'Opción 5'
    }, {
      value: 6,
      text: 'Opción 6'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-3',
    name: 'select-3',
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.',
    errorMessageText: 'Esto es un mensaje de error',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2'
    }, {
      value: 3,
      text: 'Opción 3'
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-5',
    name: 'select-5',
    classes: 'w-full',
    labelText: 'Esto es un label',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2',
      selected: true
    }, {
      value: 3,
      text: 'Opción 3',
      disabled: true
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-6',
    name: 'select-6',
    classes: 'lg:flex-1',
    labelText: 'Label en línea:',
    labelClasses: 'lg:py-sm lg:mt-sm',
    formGroupClasses: 'lg:flex lg:flex-wrap lg:items-center lg:gap-x-base',
    errorMessageText: 'Esto es un mensaje de error',
    errorMessageClasses: 'order-1 w-full pt-sm',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2',
      selected: true
    }, {
      value: 3,
      text: 'Opción 3',
      disabled: true
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-7',
    name: 'select-7',
    classes: 'c-select--transparent',
    labelText: 'Esto es un label',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2',
      selected: true
    }, {
      value: 3,
      text: 'Opción 3',
      disabled: true
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'select-8',
    name: 'select-8',
    classes: 'c-select--sm',
    labelText: 'Esto es un label',
    items: [{
      value: 1,
      text: 'Opción 1'
    }, {
      value: 2,
      text: 'Opción 2',
      selected: true
    }, {
      value: 3,
      text: 'Opción 3',
      disabled: true
    }]
  }
}`,...S.parameters?.docs?.source}}},C=[`PorDefecto`,`Deshabilitado`,`Placeholder`,`ConOptgroup`,`ConPistaYMensajeDeError`,`ConAnchuraCompleta`,`ConClasesDeFormGroupOpcionales`,`Transparente`,`Peque`]}))();export{y as ConAnchuraCompleta,b as ConClasesDeFormGroupOpcionales,_ as ConOptgroup,v as ConPistaYMensajeDeError,h as Deshabilitado,S as Peque,g as Placeholder,m as PorDefecto,x as Transparente,C as __namedExportsOrder,p as default};