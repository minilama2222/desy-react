import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{n as o,t as s}from"./Button-BSFZ1FKO.js";function c(e){return e?`${e}-error`:``}var l,u,d,f,p=t((()=>{l=e(n(),1),i(),u=r(),d=(0,l.forwardRef)(({label:e=`Search`,classes:t,onClick:n,...r},i)=>(0,u.jsx)(`button`,{ref:i,type:`submit`,className:a(`absolute top-0 right-0 m-sm p-0.5 text-primary-base hover:text-primary-dark`,`focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus`,t),"aria-label":e,onClick:n,...r,children:(0,u.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,width:`1.375em`,height:`1.375em`,"aria-hidden":`true`,children:(0,u.jsx)(`path`,{d:`M23.498 23.487a1.713 1.713 0 000-2.421l-4.572-4.575a.43.43 0 01-.062-.539 10.283 10.283 0 10-2.911 2.911.43.43 0 01.539.055l4.574 4.574a1.712 1.712 0 002.433-.005zM3.451 10.289a6.85 6.85 0 116.85 6.85 6.85 6.85 0 01-6.85-6.85z`,fill:`currentColor`})})})),d.displayName=`SearchButton`,f=(0,l.forwardRef)(({className:e,formGroupClasses:t,id:n,name:r,describedBy:i,classes:o,buttonClasses:s,searchResultsNumber:l,errorMessageText:f,errorMessageHtml:p,errorVisuallyHiddenText:m,errorMessageClasses:h,labelText:g,labelHtml:_,labelClasses:v,labelIsPageHeading:y,labelHeadingLevel:b,children:x,value:S=``,disabled:C,onFocus:w,onBlur:T,onInput:E,onChange:D,onSearchClick:O,...k},A)=>{let j=!!x,M=!!(f||p),N=c(n),P=r||n,F=n||`search`,I=e=>{let t=e.target;E?.(e),D?.(t.value)},L=a(`c-input`,`block`,M?`border-alert-base ring-2 ring-alert-base`:`border-black`,`rounded-sm`,`font-semibold`,`placeholder-neutral-dark`,`focus:border-black`,`focus:shadow-outline-focus-input`,`focus:ring-4`,`focus:ring-warning-base`,`disabled:bg-neutral-light`,`disabled:border-neutral-base`,!j&&`pr-12 w-full`,o,e);return(0,u.jsxs)(`div`,{className:a(`c-form-group`,M&&`c-form-group--error`,t),children:[(g||_)&&(0,u.jsx)(`label`,{htmlFor:F,className:a(`sr-only`,v),children:(()=>{if(!g&&!_)return null;let e=_?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g;return y?(0,u.jsx)(`h${b||2}`,{className:v,children:e}):(0,u.jsx)(`span`,{className:v,children:e})})()}),S&&l!==void 0&&(0,u.jsx)(`div`,{role:`alert`,"aria-live":`assertive`,children:(0,u.jsx)(`p`,{className:`sr-only`,children:l>0?`Se han encontrado ${l} resultados`:`No se han encontrado resultados`})}),(0,u.jsxs)(`div`,{className:a(`relative`,j&&`flex flex-wrap items-end gap-sm`),children:[(0,u.jsx)(`input`,{ref:A,id:F,name:P,type:`search`,value:S,disabled:C,className:L,"aria-describedby":i,"aria-errormessage":N||void 0,"aria-invalid":M||void 0,onFocus:w,onBlur:T,onInput:I,...k}),!x&&(0,u.jsx)(d,{label:`Buscar`,classes:s,disabled:C,onClick:O}),x]}),(f||p)&&(0,u.jsxs)(`p`,{id:N,className:a(`block`,`font-semibold`,`text-alert-base`,h),children:[(0,u.jsxs)(`span`,{className:`sr-only`,children:[m||`Error`,`: `]}),p?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:p}}):f]})]})}),f.displayName=`SearchBar`,d.__docgenInfo={description:`Search button component - a button with a search icon`,methods:[],displayName:`SearchButton`,props:{label:{required:!1,tsType:{name:`string`},description:`Button text (for screen readers)`,defaultValue:{value:`'Search'`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`Click event handler`}},composes:[`Omit`]},f.__docgenInfo={description:`SearchBar component - a search input with optional button and accessibility features.`,methods:[],displayName:`SearchBar`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the input element`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group wrapper`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},name:{required:!1,tsType:{name:`string`},description:`Search input name (defaults to id)`},describedBy:{required:!1,tsType:{name:`string`},description:`Described by IDs`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the input`},buttonClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the button`},searchResultsNumber:{required:!1,tsType:{name:`number`},description:`Number of search results (for accessibility)`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text content`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML content`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error`},errorMessageClasses:{required:!1,tsType:{name:`string`},description:`Error message CSS classes`},labelText:{required:!1,tsType:{name:`string`},description:`Label text content`},labelHtml:{required:!1,tsType:{name:`string`},description:`Label HTML content`},labelClasses:{required:!1,tsType:{name:`string`},description:`Label CSS classes`},labelIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Label is page heading`},labelHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Label heading level`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (Button)`},value:{required:!1,tsType:{name:`string`},description:`Search value`,defaultValue:{value:`''`,computed:!1}},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Blur event handler`},onInput:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FormEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FormEvent`,elements:[{name:`HTMLInputElement`}],raw:`FormEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Input event handler`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Change event handler`},onSearchClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`Click event handler for the search button`}},composes:[`Omit`]}})),m,h,g,_,v,y,b,x,S,C,w;t((()=>{p(),o(),m=r(),h={title:`Forms/SearchBar`,component:f,tags:[`autodocs`]},g={args:{id:`searchbar-1`,labelText:`Buscar`,labelClasses:`not-sr-only mb-sm`}},_={args:{id:`searchbar-2`,labelText:`Buscar`,placeholder:`Buscar en este sitio`}},v={args:{id:`searchbar-3`,labelText:`Buscar`,disabled:!0}},y={args:{id:`searchbar-4`,labelText:`Buscar`,errorMessageText:`Esto es un mensaje de error`,errorMessageClasses:`mt-xs`}},b={args:{id:`searchbar-label-visible`,labelText:`Buscar items recientes`,labelClasses:`not-sr-only mb-sm`}},x={args:{id:`searchbar-5`,labelText:`Buscar`,classes:`c-input--sm`,buttonClasses:`m-xs p-0.5 text-xs`}},S={args:{id:`searchbar-6`,labelText:`Buscar en esta página`,classes:`flex-1`},render:e=>(0,m.jsx)(f,{...e,children:(0,m.jsx)(s,{type:`submit`,classes:`c-button--primary`,children:`Buscar`})})},C={args:{id:`searchbar-7`,labelText:`Buscar en esta página`,classes:`flex-1 c-input--sm`},render:e=>(0,m.jsx)(f,{...e,children:(0,m.jsx)(s,{type:`submit`,classes:`c-button--sm`,children:`Buscar`})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-1',
    labelText: 'Buscar',
    labelClasses: 'not-sr-only mb-sm'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-2',
    labelText: 'Buscar',
    placeholder: 'Buscar en este sitio'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-3',
    labelText: 'Buscar',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-4',
    labelText: 'Buscar',
    errorMessageText: 'Esto es un mensaje de error',
    errorMessageClasses: 'mt-xs'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-label-visible',
    labelText: 'Buscar items recientes',
    labelClasses: 'not-sr-only mb-sm'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-5',
    labelText: 'Buscar',
    classes: 'c-input--sm',
    buttonClasses: 'm-xs p-0.5 text-xs'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-6',
    labelText: 'Buscar en esta página',
    classes: 'flex-1'
  },
  render: args => <SearchBar {...args}>
      <Button type="submit" classes="c-button--primary">
        Buscar
      </Button>
    </SearchBar>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'searchbar-7',
    labelText: 'Buscar en esta página',
    classes: 'flex-1 c-input--sm'
  },
  render: args => <SearchBar {...args}>
      <Button type="submit" classes="c-button--sm">
        Buscar
      </Button>
    </SearchBar>
}`,...C.parameters?.docs?.source}}},w=[`PorDefecto`,`ConPlaceholder`,`Deshabilitado`,`ConMensajeDeError`,`ConLabelVisible`,`Peque`,`BotonPersonalizado`,`BotonPersonalizadoPequen`]}))();export{S as BotonPersonalizado,C as BotonPersonalizadoPequen,b as ConLabelVisible,y as ConMensajeDeError,_ as ConPlaceholder,v as Deshabilitado,x as Peque,g as PorDefecto,w as __namedExportsOrder,h as default};