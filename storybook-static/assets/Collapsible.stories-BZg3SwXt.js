import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({id:e,headerText:t,headerHtml:n,open:r,className:i,buttonClasses:o,showClasses:l,hideClasses:u,contentClasses:d,children:f,text:p,html:m,onToggle:h}){let[g,_]=(0,s.useState)(r??!1),v=r===void 0?g:r,y=()=>{let e=!v;r===void 0&&_(e),h?.(e)},b=v?`Ocultar`:`Mostrar`,x=`absolute inset-y-0 right-0 py-sm font-normal text-sm text-neutral-dark underline group-focus:text-black pointer-events-none`;return(0,c.jsxs)(`div`,{className:a(i||`-my-px py-sm border-t border-b border-neutral-base`),children:[t&&!n&&(0,c.jsxs)(`button`,{id:e?`${e}-title`:void 0,type:`button`,onClick:y,"aria-expanded":v,"aria-controls":e||void 0,className:a(o||`group relative w-full py-sm font-semibold text-left cursor-pointer focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`),children:[t,(0,c.jsx)(`span`,{className:a(v&&u?u:l||x),"aria-hidden":`true`,children:b})]}),n&&(0,c.jsxs)(`button`,{id:e?`${e}-title`:void 0,type:`button`,onClick:y,"aria-expanded":v,"aria-controls":e||void 0,className:a(o||`group relative w-full py-sm font-semibold text-left cursor-pointer focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`),children:[(0,c.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}),(0,c.jsx)(`span`,{className:a(v&&u?u:l||x),"aria-hidden":`true`,children:b})]}),!n&&!t&&f&&(0,c.jsxs)(`button`,{id:e?`${e}-title`:void 0,type:`button`,onClick:y,"aria-expanded":v,"aria-controls":e||void 0,className:a(o||`group relative w-full py-sm font-semibold text-left cursor-pointer focus:bg-warning-base focus:outline-hidden focus:shadow-outline-focus focus:text-black`),children:[f,(0,c.jsx)(`span`,{className:a(v&&u?u:l||x),"aria-hidden":`true`,children:b})]}),v&&(0,c.jsxs)(`div`,{id:e||void 0,className:a(d||`py-sm`),children:[m&&(0,c.jsx)(`div`,{dangerouslySetInnerHTML:{__html:m}}),!m&&p&&(0,c.jsx)(`p`,{children:p}),!m&&!p&&f]})]})}var s,c,l=t((()=>{s=e(n(),1),i(),c=r(),o.__docgenInfo={description:`Collapsible component - an accordion-style collapsible content section.`,methods:[],displayName:`Collapsible`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},headerText:{required:!1,tsType:{name:`string`},description:`Header text (when not using children)`},headerHtml:{required:!1,tsType:{name:`string`},description:`Header HTML content`},open:{required:!1,tsType:{name:`boolean`},description:`Whether the collapsible is open by default`},className:{required:!1,tsType:{name:`string`},description:`CSS classes for the wrapper`},buttonClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the toggle button`},showClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the show text`},hideClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the hide text`},contentClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the content area`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content for the header`},text:{required:!1,tsType:{name:`string`},description:`Content to show when open (text)`},html:{required:!1,tsType:{name:`string`},description:`Content to show when open (HTML)`},onToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Toggle callback`}}}})),u,d,f,p,m,h,g,_;t((()=>{l(),u={title:`Views/Collapsible`,component:o,tags:[`autodocs`]},d=`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,f={args:{id:`collapsible-default`,headerText:`Cabecera del collapsible`,text:d}},p={args:{id:`collapsible-initially-expanded`,headerText:`Cabecera del collapsible`,text:d,open:!0}},m={args:{id:`collapsible-expanded`,headerText:`Cabecera del collapsible`,text:d}},h={args:{id:`collapsible-html`,headerText:`Cabecera del collapsible`,html:`<p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit, sed do eiusmod
    tempor <em>incididunt</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in <strong>reprehenderit</strong> in voluptate velit esse
    cillum dolore eu fugiat nulla <em>pariatur</em>. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`}},g={args:{id:`collapsible-classes`,headerText:`Cabecera del collapsible`,text:d,className:`p-base bg-primary-light flex flex-wrap gap-base`,buttonClasses:`c-button self-start`,showClasses:`hidden!`,hideClasses:`hidden!`,contentClasses:`flex-1 border border-neutral-base p-base bg-white rounded-sm`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'collapsible-default',
    headerText: 'Cabecera del collapsible',
    text: longText
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'collapsible-initially-expanded',
    headerText: 'Cabecera del collapsible',
    text: longText,
    open: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'collapsible-expanded',
    headerText: 'Cabecera del collapsible',
    text: longText
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'collapsible-html',
    headerText: 'Cabecera del collapsible',
    html: \`<p>Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisicing elit, sed do eiusmod
    tempor <em>incididunt</em> ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in <strong>reprehenderit</strong> in voluptate velit esse
    cillum dolore eu fugiat nulla <em>pariatur</em>. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\`
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'collapsible-classes',
    headerText: 'Cabecera del collapsible',
    text: longText,
    className: 'p-base bg-primary-light flex flex-wrap gap-base',
    buttonClasses: 'c-button self-start',
    showClasses: 'hidden!',
    hideClasses: 'hidden!',
    contentClasses: 'flex-1 border border-neutral-base p-base bg-white rounded-sm'
  }
}`,...g.parameters?.docs?.source}}},_=[`PorDefecto`,`Expandido`,`ExpandidoConJavaScript`,`ConHTML`,`ConClasesAplicadas`]}))();export{g as ConClasesAplicadas,h as ConHTML,p as Expandido,m as ExpandidoConJavaScript,f as PorDefecto,_ as __namedExportsOrder,u as default};