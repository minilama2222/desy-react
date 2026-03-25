import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return`element`in e&&e.element?e.element:`href`in e&&e.href?u:f}function s(e,t=`c-pill`){let n=t;return`classes`in e&&e.classes&&(n+=` `+e.classes),n}var c,l,u,d,f,p,m=t((()=>{c=e(n(),1),i(),l=r(),u=`a`,d=`button`,f=`span`,p=(0,c.forwardRef)((e,t)=>{let{className:n,classes:r,id:i,text:c,html:f,children:p,onClick:m,...h}=e,g=o(e),_=a(n,s(e)),v=f?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f}}):c||p;if(g===u){let{href:e,target:n,element:r,routerLink:a,routerLinkActiveClasses:o,fragment:s,...c}=h;return(0,l.jsx)(`a`,{ref:t,id:i,href:e,target:n,className:_,onClick:m,...c,children:v})}if(g===d){let{element:e,routerLink:n,routerLinkActiveClasses:r,fragment:a,...o}=h;return(0,l.jsx)(`button`,{ref:t,id:i,className:_,onClick:m,...o,children:v})}let{element:y,routerLink:b,routerLinkActiveClasses:x,fragment:S,...C}=h;return(0,l.jsx)(`span`,{ref:t,id:i,className:_,onClick:m,...C,children:v})}),p.displayName=`Pill`,p.__docgenInfo={description:`Pill component - a versatile badge/chip component that can render as anchor, button, or span.
Supports router links, accessibility attributes, and HTML content.`,methods:[],displayName:`Pill`}})),h,g,_,v,y,b,x,S,C,w,T;t((()=>{m(),h={title:`Buttons/Pill`,component:p,tags:[`autodocs`]},g={args:{children:`Default Pill`}},_={args:{element:`span`,children:`Span Pill`}},v={args:{element:`button`,children:`Button Pill`}},y={args:{element:`a`,href:`#`,children:`Anchor Pill`}},b={args:{text:`Pill via text prop`}},x={args:{html:`<strong>Bold</strong> Pill Text`}},S={args:{classes:`bg-blue-100 text-blue-800`,children:`Styled Pill`}},C={args:{element:`button`,children:`Disabled Pill`,disabled:!0}},w={args:{children:`Clickable Pill`,onClick:()=>alert(`Pill clicked!`)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Pill'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    element: 'span',
    children: 'Span Pill'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    element: 'button',
    children: 'Button Pill'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    element: 'a',
    href: '#',
    children: 'Anchor Pill'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Pill via text prop'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    html: '<strong>Bold</strong> Pill Text'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    classes: 'bg-blue-100 text-blue-800',
    children: 'Styled Pill'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    element: 'button',
    children: 'Disabled Pill',
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Clickable Pill',
    onClick: () => alert('Pill clicked!')
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`AsSpan`,`AsButton`,`AsAnchor`,`WithTextProp`,`WithHtml`,`WithClasses`,`Disabled`,`WithClickHandler`]}))();export{y as AsAnchor,v as AsButton,_ as AsSpan,g as Default,C as Disabled,S as WithClasses,w as WithClickHandler,x as WithHtml,b as WithTextProp,T as __namedExportsOrder,h as default};