import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return e?`${e}-hint`:``}function s(e,t){return e||(t?`${t}-error`:``)}var c,l,u,d=t((()=>{c=e(n(),1),i(),l=r(),u=(0,c.forwardRef)(({className:e,formGroupClasses:t,name:n,type:r=`text`,id:i,describedBy:c,pattern:u,maxlength:d,errorId:f,hintText:p,hintHtml:m,errorMessageText:h,errorMessageHtml:g,errorVisuallyHiddenText:_,labelText:v,labelHtml:y,labelIsPageHeading:b,labelHeadingLevel:x,labelClasses:S,hintClasses:C,errorMessageClasses:w,hintId:T,children:E,value:D,disabled:O,onFocus:k,onBlur:A,onInput:j,onChange:M,...N},P)=>{let F=T||o(i),I=s(f,i),L=!!(h||g),R=[c,F,I].filter(Boolean).join(` `)||void 0,z=a(`c-input`,`block`,`mt-sm`,L?`border-alert-base ring-2 ring-alert-base`:`border-black`,`rounded-sm`,`font-semibold`,`placeholder-neutral-dark`,`focus:border-black`,`focus:shadow-outline-focus-input`,`focus:ring-4`,`focus:ring-warning-base`,`disabled:bg-neutral-light`,`disabled:border-neutral-base`,e);return(0,l.jsxs)(`div`,{className:a(`c-form-group`,L&&`c-form-group--error`,t),children:[(v||y)&&(0,l.jsx)(`label`,{htmlFor:i,className:a(`block`,S),children:b?(0,l.jsxs)(l.Fragment,{children:[x===1&&(0,l.jsx)(`h1`,{children:y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v}),x===2&&(0,l.jsx)(`h2`,{children:y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v}),x===3&&(0,l.jsx)(`h3`,{children:y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v}),x===4&&(0,l.jsx)(`h4`,{children:y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v}),x===5&&(0,l.jsx)(`h5`,{children:y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v})]}):y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v}),(p||m)&&(0,l.jsx)(`p`,{id:F,className:a(`block`,`text-neutral-dark`,C),children:m?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:m}}):p}),(h||g)&&(0,l.jsxs)(`p`,{id:I,className:a(`block`,`font-semibold`,`text-alert-base`,w),children:[(0,l.jsxs)(`span`,{className:`sr-only`,children:[_||`Error`,`: `]}),g?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:g}}):h]}),E,!E&&(0,l.jsx)(`input`,{ref:P,id:i||`input`,name:n,type:r,value:D,disabled:O,className:z,pattern:u,maxLength:d,"aria-describedby":R,"aria-invalid":L||void 0,"aria-errormessage":I||void 0,onFocus:k,onBlur:A,onInput:j,onChange:M,...N})]})}),u.displayName=`Input`,u.__docgenInfo={description:`Input component - a form input with optional label, hint, and error message.`,methods:[],displayName:`Input`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the input element`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group wrapper`},name:{required:!1,tsType:{name:`string`},description:`Input name attribute`},type:{required:!1,tsType:{name:`string`},description:`Input type attribute (text, number, email, etc.)`,defaultValue:{value:`'text'`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},describedBy:{required:!1,tsType:{name:`string`},description:`Described by IDs (hint, error)`},pattern:{required:!1,tsType:{name:`string`},description:`Pattern for validation`},maxlength:{required:!1,tsType:{name:`number`},description:`Maximum length`},errorId:{required:!1,tsType:{name:`string`},description:`Error ID for aria-describedby`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text content`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML content`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text content`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML content`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error (default: 'Error')`},labelText:{required:!1,tsType:{name:`string`},description:`Label text content`},labelHtml:{required:!1,tsType:{name:`string`},description:`Label HTML content`},labelIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Label is page heading`},labelHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Label heading level`},labelClasses:{required:!1,tsType:{name:`string`},description:`Label CSS classes`},hintClasses:{required:!1,tsType:{name:`string`},description:`Hint CSS classes`},errorMessageClasses:{required:!1,tsType:{name:`string`},description:`Error message CSS classes`},hintId:{required:!1,tsType:{name:`string`},description:`Hint ID`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (Label, Hint, ErrorMessage)`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Focus event handler`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactFocusEvent`,raw:`React.FocusEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Blur event handler`},onInput:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.FormEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactFormEvent`,raw:`React.FormEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Input event handler`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`InputHTMLAttributes`]}})),f,p,m,h,g,_,v,y,b,x;t((()=>{d(),f={title:`Forms/Input`,component:u,tags:[`autodocs`]},p={args:{id:`example-input`,name:`example`,placeholder:`Enter text...`}},m={args:{id:`labeled-input`,name:`labeled`,labelText:`Enter your name`,placeholder:`Name`}},h={args:{id:`hinted-input`,name:`hinted`,labelText:`Email address`,hintText:`We will never share your email with anyone else.`,placeholder:`email@example.com`,type:`email`}},g={args:{id:`error-input`,name:`error`,labelText:`Password`,hintText:`Enter your password`,errorMessageText:`Password must be at least 8 characters`,type:`password`}},_={args:{id:`heading-input`,name:`heading`,labelText:`Form Title`,labelIsPageHeading:!0,labelHeadingLevel:1}},v={args:{id:`disabled-input`,name:`disabled`,labelText:`Disabled Input`,disabled:!0,value:`Cannot edit`}},y={args:{id:`number-input`,name:`number`,labelText:`Age`,type:`number`,min:0,max:120}},b={args:{id:`password-input`,name:`password`,labelText:`Password`,type:`password`,autoComplete:`current-password`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-input',
    name: 'example',
    placeholder: 'Enter text...'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'labeled-input',
    name: 'labeled',
    labelText: 'Enter your name',
    placeholder: 'Name'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hinted-input',
    name: 'hinted',
    labelText: 'Email address',
    hintText: 'We will never share your email with anyone else.',
    placeholder: 'email@example.com',
    type: 'email'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'error-input',
    name: 'error',
    labelText: 'Password',
    hintText: 'Enter your password',
    errorMessageText: 'Password must be at least 8 characters',
    type: 'password'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'heading-input',
    name: 'heading',
    labelText: 'Form Title',
    labelIsPageHeading: true,
    labelHeadingLevel: 1
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-input',
    name: 'disabled',
    labelText: 'Disabled Input',
    disabled: true,
    value: 'Cannot edit'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'number-input',
    name: 'number',
    labelText: 'Age',
    type: 'number',
    min: 0,
    max: 120
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'password-input',
    name: 'password',
    labelText: 'Password',
    type: 'password',
    autoComplete: 'current-password'
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithLabel`,`WithHint`,`WithError`,`WithLabelAsPageHeading`,`Disabled`,`NumberInput`,`PasswordInput`]}))();export{p as Default,v as Disabled,y as NumberInput,b as PasswordInput,g as WithError,h as WithHint,m as WithLabel,_ as WithLabelAsPageHeading,x as __namedExportsOrder,f as default};