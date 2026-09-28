import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BRtkut15.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({id:e,name:t,type:n=`text`,containerClasses:r,dropdownClasses:i,formGroupClasses:o,classes:l,describedBy:u,errorId:d,pattern:f,hintText:p,errorMessageText:m,children:h,value:g,disabled:_,autoComplete:v,placeholder:y,onFocus:b,onBlur:x,onChange:S,...C}){let w=(0,s.useId)(),T=e||w,E=!!m,D=e=>{S?.(e,e.target.value)};return(0,c.jsx)(`div`,{className:a(`c-datepicker`,r),children:(0,c.jsxs)(`div`,{className:a(`c-form-group`,E&&`c-form-group--error`,o),children:[h,(0,c.jsxs)(`div`,{className:`relative`,children:[(0,c.jsx)(`input`,{id:T,name:t,type:`date`,value:g,disabled:_,placeholder:y,autoComplete:v,pattern:f,className:a(`c-input block mt-sm border-black rounded-sm font-semibold placeholder-neutral-dark`,`focus:border-black focus:shadow-outline-focus-input focus:ring-4 focus:ring-warning-base`,`disabled:bg-neutral-light disabled:border-neutral-base pr-16 w-full`,E&&`border-alert-base ring-2 ring-alert-base`,l),"aria-describedby":[u,p?`${T}-hint`:void 0,d].filter(Boolean).join(` `)||void 0,"aria-errormessage":d||(E?`${T}-error`:void 0),"aria-invalid":E||void 0,onFocus:b,onBlur:x,onChange:D,...C}),(0,c.jsx)(`div`,{className:`absolute top-0 right-0`,children:(0,c.jsx)(`button`,{type:`button`,id:`${T}-dropdown`,className:a(`c-dropdown--transparent`,i,`p-sm text-neutral-dark hover:text-primary-base focus:outline-hidden`),"aria-haspopup":`dialog`,"aria-label":`Seleccionar fecha con una tabla de calendario`,disabled:_,onClick:()=>{document.getElementById(T)?.showPicker?.()},children:(0,c.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 14 14`,width:`1.375em`,height:`1.375em`,"aria-hidden":`true`,children:(0,c.jsx)(`g`,{children:(0,c.jsx)(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M4.5 1.5c0 -0.552285 -0.44772 -1 -1 -1s-1 0.447715 -1 1v1H2C1.17157 2.5 0.5 3.17157 0.5 4v8c0 0.8284 0.67157 1.5 1.5 1.5h10c0.8284 0 1.5 -0.6716 1.5 -1.5V4c0 -0.82843 -0.6716 -1.5 -1.5 -1.5h-0.5v-1c0 -0.552285 -0.4477 -1 -1 -1 -0.55229 0 -1 0.447715 -1 1v1h-5v-1Zm-1 5.75c0.55228 0 1 -0.44772 1 -1s-0.44772 -1 -1 -1 -1 0.44772 -1 1 0.44772 1 1 1Zm3.5 0c0.55228 0 1 -0.44772 1 -1s-0.44772 -1 -1 -1 -1 0.44772 -1 1 0.44772 1 1 1Zm-2.5 3c0 0.5523 -0.44772 1 -1 1s-1 -0.4477 -1 -1c0 -0.55229 0.44772 -1 1 -1s1 0.44771 1 1Zm2.5 1c0.55228 0 1 -0.4477 1 -1 0 -0.55229 -0.44772 -1 -1 -1s-1 0.44771 -1 1c0 0.5523 0.44772 1 1 1Zm4.5 -5c0 0.55228 -0.4477 1 -1 1 -0.55229 0 -1 -0.44772 -1 -1s0.44771 -1 1 -1c0.5523 0 1 0.44772 1 1Z`,clipRule:`evenodd`,strokeWidth:`1`})})})})})]})]})})}var s,c,l=t((()=>{s=e(n(),1),i(),c=r(),o.__docgenInfo={description:`Datepicker component - a date input with a calendar dropdown trigger.
Uses native HTML5 date input for calendar functionality.`,methods:[],displayName:`Datepicker`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},name:{required:!1,tsType:{name:`string`},description:`Input name`},type:{required:!1,tsType:{name:`string`},description:`Input type (text or date)`,defaultValue:{value:`'text'`,computed:!1}},containerClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for container`},dropdownClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for dropdown`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the input`},describedBy:{required:!1,tsType:{name:`string`},description:`Described by IDs`},errorId:{required:!1,tsType:{name:`string`},description:`Error ID`},pattern:{required:!1,tsType:{name:`string`},description:`Pattern for validation`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (Label, Hint, ErrorMessage)`},value:{required:!1,tsType:{name:`string`},description:`Value`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state`},autoComplete:{required:!1,tsType:{name:`string`},description:`Autocomplete attribute`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLInputElement`}],raw:`FocusEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLInputElement`}],raw:`FocusEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Blur event handler`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: ChangeEvent<HTMLInputElement>, value: string) => void`,signature:{arguments:[{type:{name:`ChangeEvent`,elements:[{name:`HTMLInputElement`}],raw:`ChangeEvent<HTMLInputElement>`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]}})),u,d,f,p,m,h,g,_,v,y,b,x;t((()=>{l(),u={title:`Forms/Datepicker`,component:o,tags:[`autodocs`]},d=`(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))`,f={args:{id:`datepicker-default`,name:`test-name`,placeholder:`DD/MM/YYYY`,hintText:`Usa el formato: DD-MM-AAAA (día-mes-año)`,pattern:d}},p={args:{id:`datepicker-multiple-dates`,name:`test-name`,value:`10-01-2024 20-01-2024`,placeholder:`DD/MM/YYYY`,hintText:`Para incluir las fechas en el campo de texto usa el formato DD-MM-AAAA.`}},m={args:{id:`datepicker-range3`,name:`test-name`,value:`10-01-2024/20-01-2024`,placeholder:`DD/MM/YYYY`,hintText:`Para incluir el rango de fechas usa el formato DD-MM-AAAA/AAAA-MM-DD.`}},h={args:{id:`datepicker-with-hint-text-and-year`,name:`test-name`,value:`16-01-2024/04-02-2024`,placeholder:`DD/MM/YYYY`,hintText:`Para incluir el rango de fechas usa el formato DD-MM-AAAA/AAAA-MM-DD.`}},g={args:{id:`datepicker-disabled`,name:`test-name`,placeholder:`DD/MM/YYYY`,disabled:!0,hintText:`Usa el formato: DD-MM-AAAA (día-mes-año)`,pattern:d}},_={args:{id:`datepicker-with-error-message`,name:`test-name`,placeholder:`DD/MM/YYYY`,errorMessageText:`Esto es un mensaje de error`,hintText:`Usa el formato: DD-MM-AAAA (día-mes-año)`,pattern:d}},v={args:{id:`datepicker-small`,name:`test-name`,placeholder:`DD/MM/YYYY`,classes:`c-input--sm`,dropdownClasses:`c-dropdown--sm c-dropdown--transparent`,hintText:`Usa el formato: DD-MM-AAAA (día-mes-año)`,pattern:d}},y={args:{id:`datepicker-with-personalized-button`,name:`test-name`,placeholder:`DD/MM/YYYY`,classes:`flex-1`,hintText:`Usa el formato: DD-MM-AAAA (día-mes-año)`,pattern:d}},b={args:{id:`datepicker-with-button-small`,name:`test-name`,placeholder:`DD/MM/YYYY`,classes:`flex-1 c-input--sm`,hintText:`Usa el formato: DD-MM-AAAA (día-mes-año)`,pattern:d}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-default',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-multiple-dates',
    name: 'test-name',
    value: '10-01-2024 20-01-2024',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Para incluir las fechas en el campo de texto usa el formato DD-MM-AAAA.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-range3',
    name: 'test-name',
    value: '10-01-2024/20-01-2024',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Para incluir el rango de fechas usa el formato DD-MM-AAAA/AAAA-MM-DD.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-with-hint-text-and-year',
    name: 'test-name',
    value: '16-01-2024/04-02-2024',
    placeholder: 'DD/MM/YYYY',
    hintText: 'Para incluir el rango de fechas usa el formato DD-MM-AAAA/AAAA-MM-DD.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-disabled',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    disabled: true,
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-with-error-message',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    errorMessageText: 'Esto es un mensaje de error',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-small',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    classes: 'c-input--sm',
    dropdownClasses: 'c-dropdown--sm c-dropdown--transparent',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-with-personalized-button',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    classes: 'flex-1',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'datepicker-with-button-small',
    name: 'test-name',
    placeholder: 'DD/MM/YYYY',
    classes: 'flex-1 c-input--sm',
    hintText: 'Usa el formato: DD-MM-AAAA (día-mes-año)',
    pattern: datePattern
  }
}`,...b.parameters?.docs?.source}}},x=[`PorDefecto`,`FechasMultiples`,`RangoDeFechas`,`RangoDeFechas2MesesYSelectorDeAno`,`Deshabilitado`,`ConMensajeDeError`,`Pequeno`,`BotonPersonalizado`,`BotonPersonalizadoPequeno`]}))();export{y as BotonPersonalizado,b as BotonPersonalizadoPequeno,_ as ConMensajeDeError,g as Deshabilitado,p as FechasMultiples,v as Pequeno,f as PorDefecto,m as RangoDeFechas,h as RangoDeFechas2MesesYSelectorDeAno,x as __namedExportsOrder,u as default};