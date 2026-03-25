import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{n as o,t as s}from"./Textarea-DMKf0xo1.js";function c(e,t){let n=e.length;if(t&&e){let t=e.match(/[^A-z0-9_\s.,:;]/g);n+=t?t.length:0}return n}function l({id:e,name:t,rows:n,maxlength:r,countbbdd:i,maxwords:o,threshold:l,formGroupClasses:f,countMessageClasses:p,className:m,errorMessageText:h,errorMessageHtml:g,hintText:_,labelText:v,children:y,value:b,disabled:x,onFocus:S,onBlur:C,onChange:w,...T}){let[E,D]=(0,u.useState)(``),[O,k]=(0,u.useState)(!1),[A,j]=(0,u.useState)(void 0),M=b===void 0?E:String(b),N=(0,u.useCallback)(e=>{let t=e.target,n=t.value;if(r){let e=c(n,i);for(k(!l||e>r*l/100);c(n,i)>r;)n=n.substring(0,n.length-1);j(r-c(n,i)),t.value=n}else if(o!==void 0){let e=[...n.match(/[\wáéíóúÁÉÍÓÚüÜñÑ]+/g)||[]];for(k(!l||e.length>o*l/100);e.length>o;){let t=e.pop();t&&(n=n.substring(0,n.lastIndexOf(t)))}j(o-(n.match(/[\wáéíóúÁÉÍÓÚüÜñÑ]+/g)||[]).length),t.value=n}else k(!l),j(r);D(n),w?.(e,n)},[r,o,l,i,w]),P=!!(h||g),F=e?`${e}-info`:void 0;return(0,d.jsxs)(`div`,{className:a(`relative`,f),children:[(0,d.jsx)(s,{id:e,name:t,rows:n,maxlength:r,value:M,disabled:x,describedBy:F,className:a(`js-character-count`,P&&`border-alert-base ring-2 ring-alert-base`,m),errorMessageText:h,errorMessageHtml:g,hintText:_,labelText:v,onFocus:S,onBlur:C,onChange:N,...T,children:y}),O&&(0,d.jsxs)(`p`,{id:F,className:a(`mt-xs text-sm`,p),"aria-live":`polite`,children:[`Puedes escribir hasta `,A,` `,r?`caracteres`:`palabras`]})]})}var u,d,f=t((()=>{u=e(n(),1),i(),o(),d=r(),l.__docgenInfo={description:`CharacterCount component - a textarea with character/word counting and truncation.`,methods:[],displayName:`CharacterCount`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},name:{required:!1,tsType:{name:`string`},description:`Textarea name`},rows:{required:!1,tsType:{name:`number`},description:`Number of rows`},maxlength:{required:!1,tsType:{name:`number`},description:`Maximum character count`},countbbdd:{required:!1,tsType:{name:`boolean`},description:`Count special chars as 2 characters (for BDD)`},maxwords:{required:!1,tsType:{name:`number`},description:`Maximum word count (alternative to maxlength)`},threshold:{required:!1,tsType:{name:`number`},description:`Threshold percentage (0-100) to show count message`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group`},countMessageClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the count message`},className:{required:!1,tsType:{name:`string`},description:`CSS classes for the textarea`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},labelText:{required:!1,tsType:{name:`string`},description:`Label text`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (Label, Hint, ErrorMessage)`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`FocusEvent<HTMLTextAreaElement>`},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLTextAreaElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`FocusEvent<HTMLTextAreaElement>`},name:`event`}],return:{name:`void`}}},description:`Blur event handler`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: ChangeEvent<HTMLTextAreaElement>, value: string) => void`,signature:{arguments:[{type:{name:`ChangeEvent`,elements:[{name:`HTMLTextAreaElement`}],raw:`ChangeEvent<HTMLTextAreaElement>`},name:`event`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]}})),p,m,h,g,_,v;t((()=>{f(),p={title:`Forms/CharacterCount`,component:l,tags:[`autodocs`]},m={args:{id:`character-count`,name:`description`,labelText:`Description`,maxlength:200,rows:5,placeholder:`Enter a description...`}},h={args:{id:`threshold-count`,name:`bio`,labelText:`Biography`,maxlength:300,threshold:80,rows:5}},g={args:{id:`word-count`,name:`essay`,labelText:`Essay`,maxwords:100,threshold:80,rows:5}},_={args:{id:`error-count`,name:`comment`,labelText:`Comment`,maxlength:50,errorMessageText:`Comment is too long`,rows:3}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'character-count',
    name: 'description',
    labelText: 'Description',
    maxlength: 200,
    rows: 5,
    placeholder: 'Enter a description...'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'threshold-count',
    name: 'bio',
    labelText: 'Biography',
    maxlength: 300,
    threshold: 80,
    rows: 5
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'word-count',
    name: 'essay',
    labelText: 'Essay',
    maxwords: 100,
    threshold: 80,
    rows: 5
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'error-count',
    name: 'comment',
    labelText: 'Comment',
    maxlength: 50,
    errorMessageText: 'Comment is too long',
    rows: 3
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithThreshold`,`WithWordCount`,`WithError`]}))();export{m as Default,_ as WithError,h as WithThreshold,g as WithWordCount,v as __namedExportsOrder,p as default};