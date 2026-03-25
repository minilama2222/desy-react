import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{n as o,t as s}from"./Textarea-DaqQi3-P.js";function c(e,t){let n=e.length;if(t&&e){let t=e.match(/[^A-z0-9_\s.,:;]/g);n+=t?t.length:0}return n}function l({id:e,name:t,rows:n,maxlength:r,countbbdd:i,maxwords:o,threshold:l,formGroupClasses:f,countMessageClasses:p,className:m,errorMessageText:h,errorMessageHtml:g,hintText:_,labelText:v,children:y,value:b,disabled:x,onFocus:S,onBlur:C,onChange:w,...T}){let[E,D]=(0,u.useState)(``),[O,k]=(0,u.useState)(!1),[A,j]=(0,u.useState)(void 0),M=b===void 0?E:String(b),N=(0,u.useCallback)(e=>{let t=e.target,n=t.value;if(r){let e=c(n,i);for(k(!l||e>r*l/100);c(n,i)>r;)n=n.substring(0,n.length-1);j(r-c(n,i)),t.value=n}else if(o!==void 0){let e=[...n.match(/[\wáéíóúÁÉÍÓÚüÜñÑ]+/g)||[]];for(k(!l||e.length>o*l/100);e.length>o;){let t=e.pop();t&&(n=n.substring(0,n.lastIndexOf(t)))}j(o-(n.match(/[\wáéíóúÁÉÍÓÚüÜñÑ]+/g)||[]).length),t.value=n}else k(!l),j(r);D(n),w?.(e,n)},[r,o,l,i,w]),P=!!(h||g),F=e?`${e}-info`:void 0;return(0,d.jsxs)(`div`,{className:a(`relative`,f),children:[(0,d.jsx)(s,{id:e,name:t,rows:n,maxlength:r,value:M,disabled:x,describedBy:F,className:a(`js-character-count`,P&&`border-alert-base ring-2 ring-alert-base`,m),errorMessageText:h,errorMessageHtml:g,hintText:_,labelText:v,onFocus:S,onBlur:C,onChange:N,...T,children:y}),O&&(0,d.jsxs)(`p`,{id:F,className:a(`mt-xs text-sm`,p),"aria-live":`polite`,children:[`Puedes escribir hasta `,A,` `,r?`caracteres`:`palabras`]})]})}var u,d,f=t((()=>{u=e(n(),1),i(),o(),d=r(),l.__docgenInfo={description:`CharacterCount component - a textarea with character/word counting and truncation.`,methods:[],displayName:`CharacterCount`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},name:{required:!1,tsType:{name:`string`},description:`Textarea name`},rows:{required:!1,tsType:{name:`number`},description:`Number of rows`},maxlength:{required:!1,tsType:{name:`number`},description:`Maximum character count`},countbbdd:{required:!1,tsType:{name:`boolean`},description:`Count special chars as 2 characters (for BDD)`},maxwords:{required:!1,tsType:{name:`number`},description:`Maximum word count (alternative to maxlength)`},threshold:{required:!1,tsType:{name:`number`},description:`Threshold percentage (0-100) to show count message`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group`},countMessageClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the count message`},className:{required:!1,tsType:{name:`string`},description:`CSS classes for the textarea`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},labelText:{required:!1,tsType:{name:`string`},description:`Label text`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (Label, Hint, ErrorMessage)`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`FocusEvent<HTMLTextAreaElement>`},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`FocusEvent<HTMLTextAreaElement>`},name:`event`}],return:{name:`void`}}},description:`Blur event handler`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: ChangeEvent<HTMLTextAreaElement>, value: string) => void`,signature:{arguments:[{type:{name:`ChangeEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`ChangeEvent<HTMLTextAreaElement>`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]}})),p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{f(),p={title:`Forms/CharacterCount`,component:l,tags:[`autodocs`]},m={args:{name:`more-detail-a`,id:`more-detail-a`,maxlength:250,labelText:`Esto es un label`}},h={args:{name:`con-placeholder`,id:`con-placeholder`,maxlength:250,placeholder:`Esto es un placeholder`,labelText:`Esto es un label`}},g={args:{name:`more-detail-b`,id:`more-detail-b`,maxlength:250,disabled:!0,labelText:`Esto es un label`}},_={args:{name:`with-hint`,id:`with-hint`,maxlength:250,labelText:`Esto es un label`,hintText:`Esto es una pista.`}},v={args:{id:`with-default-value`,name:`default-value`,maxlength:100,labelText:`Dirección completa`,value:`Paseo María Agustín, 36,
 50004 Zaragoza
`}},y={args:{id:`exceeding-characters`,name:`exceeding`,maxlength:250,value:`Paseo María Agustín, 36,
 50004 Zaragoza
`,labelText:`Dirección completa`,errorMessageText:`Por favor, no exceder el límite máximo. Error en el campo.`}},b={args:{id:`custom-rows`,name:`custom`,maxlength:250,labelText:`Dirección completa`,rows:8}},x={args:{id:`word-count`,name:`word-count`,maxwords:10,labelText:`Dirección completa`}},S={args:{id:`with-threshold`,name:`with-threshold`,maxlength:250,threshold:75,labelText:`Dirección completa`}},C={args:{formGroupClasses:`lg:flex lg:flex-wrap lg:items-start lg:gap-x-base mb-0`,labelText:`Inline label:`,id:`classes-applied-b`,name:`classes-applied-b`,maxlength:250,errorMessageText:`Esto es un mensaje de error`,className:`lg:flex-1`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'more-detail-a',
    id: 'more-detail-a',
    maxlength: 250,
    labelText: 'Esto es un label'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'con-placeholder',
    id: 'con-placeholder',
    maxlength: 250,
    placeholder: 'Esto es un placeholder',
    labelText: 'Esto es un label'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'more-detail-b',
    id: 'more-detail-b',
    maxlength: 250,
    disabled: true,
    labelText: 'Esto es un label'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'with-hint',
    id: 'with-hint',
    maxlength: 250,
    labelText: 'Esto es un label',
    hintText: 'Esto es una pista.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-default-value',
    name: 'default-value',
    maxlength: 100,
    labelText: 'Dirección completa',
    value: 'Paseo María Agustín, 36,\\n 50004 Zaragoza\\n'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'exceeding-characters',
    name: 'exceeding',
    maxlength: 250,
    value: 'Paseo María Agustín, 36,\\n 50004 Zaragoza\\n',
    labelText: 'Dirección completa',
    errorMessageText: 'Por favor, no exceder el límite máximo. Error en el campo.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'custom-rows',
    name: 'custom',
    maxlength: 250,
    labelText: 'Dirección completa',
    rows: 8
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'word-count',
    name: 'word-count',
    maxwords: 10,
    labelText: 'Dirección completa'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-threshold',
    name: 'with-threshold',
    maxlength: 250,
    threshold: 75,
    labelText: 'Dirección completa'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    formGroupClasses: 'lg:flex lg:flex-wrap lg:items-start lg:gap-x-base mb-0',
    labelText: 'Inline label:',
    id: 'classes-applied-b',
    name: 'classes-applied-b',
    maxlength: 250,
    errorMessageText: 'Esto es un mensaje de error',
    className: 'lg:flex-1'
  }
}`,...C.parameters?.docs?.source}}},w=[`PorDefecto`,`Placeholder`,`Deshabilitado`,`ConPista`,`ConValorPorDefecto`,`ConValorPorDefectoExcediendoElLimite`,`ConNumeroDeFilasPersonalizada`,`ConContadorDePalabras`,`ConThreshold`,`ConClasesDeCssAplicadas`]}))();export{C as ConClasesDeCssAplicadas,x as ConContadorDePalabras,b as ConNumeroDeFilasPersonalizada,_ as ConPista,S as ConThreshold,v as ConValorPorDefecto,y as ConValorPorDefectoExcediendoElLimite,g as Deshabilitado,h as Placeholder,m as PorDefecto,w as __namedExportsOrder,p as default};