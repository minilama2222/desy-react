import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-CPGy17Pw.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";import{n as a,t as o}from"./Content-BDokdEOn.js";function s({className:e,children:t,text:n,html:r,visuallyHiddenTitle:a,...s}){return(0,c.jsxs)(o,{className:i(e),text:n,html:r,...s,children:[a&&(0,c.jsxs)(`span`,{className:`sr-only`,children:[a,`: `]}),t]})}var c,l=e((()=>{t(),r(),a(),c=n(),s.__docgenInfo={description:`Description component - renders description text with optional visually hidden title.
Extends Content with visuallyHiddenTitle support.`,methods:[],displayName:`Description`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:`Child content`},text:{required:!1,tsType:{name:`string`},description:`Text content (alternative to children)`},html:{required:!1,tsType:{name:`string`},description:`HTML content (alternative to children)`},visuallyHiddenTitle:{required:!1,tsType:{name:`string`},description:`Visually hidden title for screen readers.
When provided, renders a visually hidden label before the description text.
@deprecated Use aria-label on parent or wrapper instead`}},composes:[`Omit`]}})),u,d,f,p,m,h,g;e((()=>{l(),u={title:`Commons/Description`,component:s,tags:[`autodocs`]},d={args:{children:`This is a default description text.`}},f={args:{visuallyHiddenTitle:`Additional context`,children:`Screen readers will announce "Additional context: followed by this description text."`}},p={args:{text:`Description passed via the text prop.`}},m={args:{html:`<strong>Bold description</strong> with HTML content.`}},h={args:{className:`text-neutral-dark text-sm`,children:`Styled description with custom class.`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is a default description text.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    visuallyHiddenTitle: 'Additional context',
    children: 'Screen readers will announce "Additional context: followed by this description text."'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Description passed via the text prop.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    html: '<strong>Bold description</strong> with HTML content.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'text-neutral-dark text-sm',
    children: 'Styled description with custom class.'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithVisuallyHiddenTitle`,`WithTextProp`,`WithHtml`,`WithCustomClass`]}))();export{d as Default,h as WithCustomClass,m as WithHtml,p as WithTextProp,f as WithVisuallyHiddenTitle,g as __namedExportsOrder,u as default};