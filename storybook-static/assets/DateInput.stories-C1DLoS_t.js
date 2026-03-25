import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{n as o,t as s}from"./Fieldset-r9D6ZoBa.js";import{n as c,t as l}from"./Hint-BBMrWv_-.js";import{n as u,t as d}from"./ErrorMessage-CM5egqhn.js";function f({id:e,namePrefix:t,items:n,divider:r=g,classes:i,legendText:o,legendData:c,headingLevel:u,hintText:f,errorMessageText:_,errorMessageHtml:v,formGroupClasses:y,labelIsPageHeading:b,children:x,disabled:S,onChange:C,onFocus:w,onBlur:T}){let E=(0,p.useId)(),D=e||E,O=f?`${D}-hint`:void 0,k=`${D}-error`,A=n||h,j=e=>t?`${t}-${e}`:e,M=(e,t)=>t||`${D}-${e}`,N=(e,t)=>{let n=parseInt(t,10);C?.({day:e===`day`?isNaN(n)?void 0:n:void 0,month:e===`month`?isNaN(n)?void 0:n:void 0,year:e===`year`?isNaN(n)?void 0:n:void 0})},P=o||c||b,F=!!(_||v),I=r?.html?(0,m.jsx)(`span`,{dangerouslySetInnerHTML:{__html:r.html}}):(0,m.jsx)(`span`,{children:r?.text||`/`}),L=(0,m.jsx)(`div`,{className:a(`flex`,i),children:A.map((e,t)=>(0,m.jsxs)(`div`,{className:a(t>0?`mr-base`:``),children:[t>0&&r&&(0,m.jsx)(`span`,{role:`separator`,className:a(`inline-block mr-base`,r.classes),"aria-hidden":`true`,children:I}),(0,m.jsxs)(`div`,{className:a(e.classes),children:[(0,m.jsx)(`label`,{htmlFor:M(e.name,e.id),className:`block text-sm mb-xs font-semibold`,children:e.labelText||e.name.toUpperCase()}),(0,m.jsx)(`input`,{id:M(e.name,e.id),name:j(e.name),type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,maxLength:e.maxlength,placeholder:e.placeholder,disabled:S||e.disabled,defaultValue:e.value,className:a(`c-input block mt-sm mb-0`,F&&`border-alert-base`),"aria-invalid":F||void 0,"aria-errormessage":F?k:void 0,onFocus:w,onBlur:T,onChange:t=>N(e.name,t.target.value)})]})]},e.name))});return(0,m.jsxs)(`div`,{className:a(`c-form-group`,F&&`c-form-group--error`,y),children:[P&&(0,m.jsxs)(s,{legendData:c||(o?{text:o,headingLevel:u||1}:void 0),errorId:k,describedBy:O,children:[f&&(0,m.jsx)(l,{text:f}),F&&(0,m.jsx)(d,{text:_,html:v}),L,x]}),!P&&(0,m.jsxs)(m.Fragment,{children:[f&&(0,m.jsx)(l,{id:O,text:f}),F&&(0,m.jsx)(d,{id:k,text:_,html:v}),L,x]})]})}var p,m,h,g,_=t((()=>{p=e(n(),1),i(),o(),c(),u(),m=r(),h=[{name:`day`,labelText:`Día`,classes:`w-14`,maxlength:2,placeholder:`DD`},{name:`month`,labelText:`Mes`,classes:`w-14`,maxlength:2,placeholder:`MM`},{name:`year`,labelText:`Año`,classes:`w-20`,maxlength:4,placeholder:`AAAA`}],g={text:`/`,classes:`text-neutral-dark`},f.__docgenInfo={description:`DateInput component - date input with day/month/year fields.`,methods:[],displayName:`DateInput`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},namePrefix:{required:!1,tsType:{name:`string`},description:`Name prefix for the date fields`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`ItemDateInputData`}],raw:`ItemDateInputData[]`},description:`Date parts configuration`},divider:{required:!1,tsType:{name:`DateInputDividerData`},description:`Divider between fields`,defaultValue:{value:`{
  text: '/',
  classes: 'text-neutral-dark',
}`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the field wrapper`},legendText:{required:!1,tsType:{name:`string`},description:`Legend text`},legendData:{required:!1,tsType:{name:`LegendData`},description:`Legend data`},headingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Heading level`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`Form group classes`},labelIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Label is page heading`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content (custom form controls)`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: { day?: number; month?: number; year?: number }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ day?: number; month?: number; year?: number }`,signature:{properties:[{key:`day`,value:{name:`number`,required:!1}},{key:`month`,value:{name:`number`,required:!1}},{key:`year`,value:{name:`number`,required:!1}}]}},name:`value`}],return:{name:`void`}}},description:`Change event handler`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLInputElement`}],raw:`FocusEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLInputElement`}],raw:`FocusEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Blur event handler`}}}})),v,y,b,x,S,C,w;t((()=>{_(),v={title:`Forms/DateInput`,component:f,tags:[`autodocs`]},y={args:{id:`birth-date`,namePrefix:`birth`,legendText:`Date of birth`,headingLevel:2}},b={args:{id:`passport-date`,legendData:{text:`Passport expiry date`,isPageHeading:!0,headingLevel:1}}},x={args:{id:`travel-date`,legendText:`Travel date`,hintText:`Enter the date of your travel in DD/MM/YYYY format`,headingLevel:2}},S={args:{id:`appointment-date`,legendText:`Appointment date`,errorMessageText:`Please enter a valid date`,headingLevel:2}},C={args:{id:`custom-date`,legendText:`Custom date format`,divider:{text:`-`,classes:`text-neutral-dark`},headingLevel:2}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'birth-date',
    namePrefix: 'birth',
    legendText: 'Date of birth',
    headingLevel: 2
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'passport-date',
    legendData: {
      text: 'Passport expiry date',
      isPageHeading: true,
      headingLevel: 1
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'travel-date',
    legendText: 'Travel date',
    hintText: 'Enter the date of your travel in DD/MM/YYYY format',
    headingLevel: 2
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'appointment-date',
    legendText: 'Appointment date',
    errorMessageText: 'Please enter a valid date',
    headingLevel: 2
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'custom-date',
    legendText: 'Custom date format',
    divider: {
      text: '-',
      classes: 'text-neutral-dark'
    },
    headingLevel: 2
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithLegendAsPageHeading`,`WithHint`,`WithError`,`CustomDivider`]}))();export{C as CustomDivider,y as Default,S as WithError,x as WithHint,b as WithLegendAsPageHeading,w as __namedExportsOrder,v as default};