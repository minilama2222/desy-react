import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return`items`in e&&Array.isArray(e.items)}function s(e){return e?`${e}-hint`:``}function c(e){return e?`${e}-error`:``}var l,u,d,f=t((()=>{l=e(n(),1),i(),u=r(),d=(0,l.forwardRef)(({className:e,formGroupClasses:t,name:n,id:r,describedBy:i,classes:l,hintText:d,hintHtml:f,errorMessageText:p,errorMessageHtml:m,errorVisuallyHiddenText:h,labelText:g,labelHtml:_,labelIsPageHeading:v,labelHeadingLevel:y,labelClasses:b,hintClasses:x,errorMessageClasses:S,hintId:C,children:w,items:T,value:E,disabled:D,onFocus:O,onBlur:k,onInput:A,onChange:j,...M},N)=>{let P=C||s(r),F=c(r),I=!!(p||m),L=[i,P,F].filter(Boolean).join(` `)||void 0,R=a(`c-select`,`block`,`mt-sm`,`transition`,`duration-150`,`ease-in-out`,`border-black`,`rounded-sm`,`font-semibold`,`focus:border-black`,`focus:shadow-outline-focus-input`,`focus:ring-4`,`focus:ring-warning-base`,`disabled:bg-neutral-light`,`disabled:border-neutral-base`,I&&`c-select--error border-alert-base ring-2 ring-alert-base`,l,e),z=e=>{let t=e.target.value,n=!isNaN(Number(t))&&t!==``?Number(t):t;j?.(n,e)},B=()=>{if(!g&&!_)return null;let e=_?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g;return v?(0,u.jsx)(`h${y||2}`,{className:b,children:e}):(0,u.jsx)(`label`,{htmlFor:r,className:a(`block`,b),children:e})},V=(e,t)=>{let n=e.value?.toString()??``,r=E===void 0?e.selected:n===E?.toString();return(0,u.jsx)(`option`,{id:e.id,value:n,disabled:e.disabled,selected:r,children:e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text},e.id||t)},H=()=>w||(T?T.map((e,t)=>o(e)?(0,u.jsx)(`optgroup`,{label:e.label,disabled:e.disabled,children:e.items.map((e,t)=>V(e,t))},t):V(e,t)):null);return(0,u.jsxs)(`div`,{className:a(`c-form-group`,I&&`c-form-group--error`,t),children:[B(),(d||f)&&(0,u.jsx)(`p`,{id:P,className:a(`block`,`text-neutral-dark`,x),children:f?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f}}):d}),(p||m)&&(0,u.jsxs)(`p`,{id:F,className:a(`block`,`font-semibold`,`text-alert-base`,S),children:[(0,u.jsxs)(`span`,{className:`sr-only`,children:[h||`Error`,`: `]}),m?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:m}}):p]}),(0,u.jsx)(`select`,{ref:N,id:r,name:n,className:R,disabled:D,"aria-describedby":L,"aria-invalid":I||void 0,"aria-errormessage":F||void 0,onFocus:O,onBlur:k,onInput:A,onChange:z,...M,children:H()})]})}),d.displayName=`Select`,d.__docgenInfo={description:`Select component - a dropdown select with optional label, hint, and error message.`,methods:[],displayName:`Select`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group wrapper`},name:{required:!1,tsType:{name:`string`},description:`Select name attribute`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},describedBy:{required:!1,tsType:{name:`string`},description:`Described by IDs (hint, error)`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the select element`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text content`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML content`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text content`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML content`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error (default: 'Error')`},labelText:{required:!1,tsType:{name:`string`},description:`Label text content`},labelHtml:{required:!1,tsType:{name:`string`},description:`Label HTML content`},labelIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Label is page heading`},labelHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Label heading level`},labelClasses:{required:!1,tsType:{name:`string`},description:`Label CSS classes`},hintClasses:{required:!1,tsType:{name:`string`},description:`Hint CSS classes`},errorMessageClasses:{required:!1,tsType:{name:`string`},description:`Error message CSS classes`},hintId:{required:!1,tsType:{name:`string`},description:`Hint ID`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (Label, Hint, ErrorMessage)`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`SelectOption | SelectOptionGroup`,elements:[{name:`SelectOption`},{name:`SelectOptionGroup`}]}],raw:`SelectItem[]`},description:`Options array (alternative to children)`},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Currently selected value`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Blur event handler`},onInput:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FormEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`ReactFormEvent`,raw:`React.FormEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Input event handler`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | number, event: React.ChangeEvent<HTMLSelectElement>) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`value`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLSelectElement>`,elements:[{name:`HTMLSelectElement`}]},name:`event`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]}})),p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{p=e(n(),1),f(),m=r(),h={title:`Forms/Select`,component:d,tags:[`autodocs`]},g=[{value:`uk`,text:`United Kingdom`},{value:`es`,text:`Spain`},{value:`fr`,text:`France`},{value:`de`,text:`Germany`}],_={args:{id:`default-select`,name:`country`,labelText:`Select a country`,items:g}},v={args:{id:`hint-select`,name:`country`,labelText:`Select a country`,hintText:`This is a helpful hint message`,items:g}},y={args:{id:`error-select`,name:`country`,labelText:`Select a country`,errorMessageText:`Please select a country`,items:g}},b={render:()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsx)(d,{id:`controlled-select`,name:`country`,labelText:`Select a country`,value:e,onChange:e=>t(e),items:g})}},x={args:{id:`default-value-select`,name:`country`,labelText:`Select a country`,value:`es`,items:g}},S={args:{id:`groups-select`,name:`country`,labelText:`Select a location`,items:[{label:`Europe`,items:g},{label:`North America`,items:[{value:`us`,text:`United States`},{value:`ca`,text:`Canada`}]}]}},C={args:{id:`disabled-select`,name:`country`,labelText:`Select a country`,disabled:!0,value:`es`,items:g}},w={args:{id:`heading-select`,name:`country`,labelText:`Select Your Country`,labelIsPageHeading:!0,labelHeadingLevel:2,items:g}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default-select',
    name: 'country',
    labelText: 'Select a country',
    items: countryItems
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hint-select',
    name: 'country',
    labelText: 'Select a country',
    hintText: 'This is a helpful hint message',
    items: countryItems
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'error-select',
    name: 'country',
    labelText: 'Select a country',
    errorMessageText: 'Please select a country',
    items: countryItems
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | number>('');
    return <Select id="controlled-select" name="country" labelText="Select a country" value={value} onChange={val => setValue(val)} items={countryItems} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default-value-select',
    name: 'country',
    labelText: 'Select a country',
    value: 'es',
    items: countryItems
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'groups-select',
    name: 'country',
    labelText: 'Select a location',
    items: [{
      label: 'Europe',
      items: countryItems
    }, {
      label: 'North America',
      items: [{
        value: 'us',
        text: 'United States'
      }, {
        value: 'ca',
        text: 'Canada'
      }]
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-select',
    name: 'country',
    labelText: 'Select a country',
    disabled: true,
    value: 'es',
    items: countryItems
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'heading-select',
    name: 'country',
    labelText: 'Select Your Country',
    labelIsPageHeading: true,
    labelHeadingLevel: 2,
    items: countryItems
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithHint`,`WithError`,`Controlled`,`WithDefaultValue`,`WithOptionGroups`,`Disabled`,`AsPageHeading`]}))();export{w as AsPageHeading,b as Controlled,_ as Default,C as Disabled,x as WithDefaultValue,y as WithError,v as WithHint,S as WithOptionGroups,T as __namedExportsOrder,h as default};