import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BRtkut15.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";var o,s,c,l,u,d=t((()=>{o=e(n(),1),i(),s=r(),c=`Acción en curso`,l=`Acción realizada con éxito`,u=(0,o.forwardRef)(({className:e,classes:t,id:n,text:r,html:i,children:o,disabled:u,preventDoubleClick:d,element:f=`button`,name:p,type:m=`button`,value:h,href:g,target:_,onClick:v,state:y,loaderText:b,successText:x},S)=>{let C=a(`c-button-loader`,`relative`,e,t,u&&`c-button-loader--disabled`,y===`is-loading`&&`c-button-loader--is-loading`,y===`is-success`&&`c-button-loader--is-success`),w=a(`c-button-loader__content`,`inline-flex`,`align-baseline`),T=i?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:i}}):r||o,E=(0,s.jsx)(`span`,{className:`c-button-loader__spinner flex items-center justify-center absolute inset-0`,children:(0,s.jsx)(`span`,{className:`sr-only`,role:`alert`,"aria-live":`assertive`,children:b||c})}),D=(0,s.jsxs)(`span`,{className:`c-button-loader__success flex items-center justify-center absolute inset-0`,children:[(0,s.jsx)(`span`,{className:`sr-only`,role:`alert`,"aria-live":`assertive`,children:x||l}),(0,s.jsx)(`span`,{"aria-hidden":`true`,children:(0,s.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 48 48`,"aria-hidden":`true`,width:`1em`,height:`1em`,className:`text-green-600`,children:(0,s.jsx)(`path`,{d:`M13.714 42.857A6.857 6.857 0 0 1 8.4 40.183L.857 31.646a3.429 3.429 0 0 1 .309-4.869A3.429 3.429 0 0 1 6 27.12l7.063 7.989a.72.72 0 0 0 .617.308.789.789 0 0 0 .617-.274L42.103 6.206a3.429 3.429 0 0 1 4.937 4.731L18.926 40.526a6.651 6.651 0 0 1-5.212 2.331Z`,fill:`currentColor`})})})]});return f===`a`?(0,s.jsxs)(`a`,{ref:S,id:n,href:g,target:_,className:C,"data-module":`c-button-loader`,"aria-disabled":u?`true`:void 0,"data-prevent-double-click":d?`true`:void 0,onClick:v,children:[E,D,(0,s.jsx)(`span`,{className:w,children:T})]}):f===`input`?(0,s.jsx)(`input`,{ref:S,id:n,name:p,type:m,value:h||r,className:C,"data-module":`c-button-loader`,disabled:u,"aria-disabled":u?`true`:void 0,"data-prevent-double-click":d?`true`:void 0,onClick:v}):(0,s.jsxs)(`button`,{ref:S,id:n,name:p,type:m,value:h,className:C,"data-module":`c-button-loader`,disabled:u,"aria-disabled":u?`true`:void 0,"data-prevent-double-click":d?`true`:void 0,onClick:v,children:[E,D,(0,s.jsx)(`span`,{className:w,children:T})]})}),u.displayName=`ButtonLoader`,u.__docgenInfo={description:`ButtonLoader - a button with loading and success states.`,methods:[],displayName:`ButtonLoader`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes to append to the default button class`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},text:{required:!1,tsType:{name:`string`},description:`Button text content`},html:{required:!1,tsType:{name:`string`},description:`HTML content (alternative to text)`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content`},disabled:{required:!1,tsType:{name:`boolean`},description:`Disabled state`},preventDoubleClick:{required:!1,tsType:{name:`boolean`},description:`Prevent double-click to avoid multiple submissions`},element:{required:!1,tsType:{name:`union`,raw:`'button' | 'a' | 'input'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'a'`},{name:`literal`,value:`'input'`}]},description:`Render as 'button', 'a', or 'input'`,defaultValue:{value:`'button'`,computed:!1}},name:{required:!1,tsType:{name:`string`},description:`Button name (for button/input elements)`},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit' | 'reset'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`},{name:`literal`,value:`'reset'`}]},description:`Button type attribute`,defaultValue:{value:`'button'`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:`Input value (for input element)`},href:{required:!1,tsType:{name:`string`},description:`Href (for anchor element)`},target:{required:!1,tsType:{name:`string`},description:`Target (for anchor element)`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLInputElement>`,elements:[{name:`union`,raw:`HTMLButtonElement | HTMLAnchorElement | HTMLInputElement`,elements:[{name:`HTMLButtonElement`},{name:`HTMLAnchorElement`},{name:`HTMLInputElement`}]}]},name:`event`}],return:{name:`void`}}},description:`Click handler`},state:{required:!1,tsType:{name:`union`,raw:`'is-loading' | 'is-success' | undefined`,elements:[{name:`literal`,value:`'is-loading'`},{name:`literal`,value:`'is-success'`},{name:`undefined`}]},description:`Loading state: 'is-loading', 'is-success', or undefined`},loaderText:{required:!1,tsType:{name:`string`},description:`Custom text for the loader spinner`},successText:{required:!1,tsType:{name:`string`},description:`Custom text for the success state`}}}})),f,p,m,h,g,_,v,y,b;t((()=>{d(),f={title:`Buttons/ButtonLoader`,component:u,tags:[`autodocs`]},p={args:{children:`Button Loader`}},m={args:{children:`Loading Button`,state:`is-loading`}},h={args:{children:`Success Button`,state:`is-success`}},g={args:{children:`Loading`,state:`is-loading`,loaderText:`Processing your request...`}},_={args:{children:`Submit`,state:`is-success`,successText:`Form submitted successfully!`}},v={args:{children:`Disabled Loader`,disabled:!0}},y={args:{element:`a`,href:`#`,children:`Link Button`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button Loader'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    state: 'is-loading'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Success Button',
    state: 'is-success'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    state: 'is-loading',
    loaderText: 'Processing your request...'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Submit',
    state: 'is-success',
    successText: 'Form submitted successfully!'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Loader',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    element: 'a',
    href: '#',
    children: 'Link Button'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Loading`,`Success`,`WithLoaderText`,`WithSuccessText`,`Disabled`,`AsAnchor`]}))();export{y as AsAnchor,p as Default,v as Disabled,m as Loading,h as Success,g as WithLoaderText,_ as WithSuccessText,b as __namedExportsOrder,f as default};