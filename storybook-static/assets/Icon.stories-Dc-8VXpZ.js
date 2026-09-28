import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-BRtkut15.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({type:e,containerClasses:t,html:n,className:r,children:a,...s}){return(0,o.jsx)(`span`,{className:i(`inline-flex items-center justify-center`,e&&{info:`text-blue-info`,alert:`text-yellow-alert`}[e],t,r),...s,children:n?(0,o.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):a})}var o,s=e((()=>{t(),r(),o=n(),a.__docgenInfo={description:`Icon component - renders an icon with optional type-based styling.
Projects content or renders HTML for custom icon markup.`,methods:[],displayName:`Icon`,props:{type:{required:!1,tsType:{name:`string`},description:`Icon type: 'info', 'alert', or custom string`},containerClasses:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the container`},html:{required:!1,tsType:{name:`string`},description:`HTML content for custom icon rendering`},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`}},composes:[`HTMLAttributes`]}})),c,l,u,d,f,p,m;e((()=>{s(),c={title:`Commons/Icon`,component:a,tags:[`autodocs`]},l={args:{children:`★`}},u={args:{type:`info`,children:`ℹ️`}},d={args:{type:`alert`,children:`⚠️`}},f={args:{type:`info`,containerClasses:`w-8 h-8 bg-blue-100 rounded-full`,children:`ℹ️`}},p={args:{html:`<svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7v4a1 1 0 11-2 0V9a1 1 0 112 0zm-1-3a1 1 0 100 2 1 1 0 000-2z"/></svg>`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: '★'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    children: 'ℹ️'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'alert',
    children: '⚠️'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    containerClasses: 'w-8 h-8 bg-blue-100 rounded-full',
    children: 'ℹ️'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    html: '<svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm1-7v4a1 1 0 11-2 0V9a1 1 0 112 0zm-1-3a1 1 0 100 2 1 1 0 000-2z"/></svg>'
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`InfoType`,`AlertType`,`WithContainerClasses`,`WithHtml`]}))();export{d as AlertType,l as Default,u as InfoType,f as WithContainerClasses,p as WithHtml,m as __namedExportsOrder,c as default};