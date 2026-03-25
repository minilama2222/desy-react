import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";var o,s,c,l=t((()=>{o=e(n(),1),i(),s=r(),c=(0,o.forwardRef)((e,t)=>{let{id:n,isSwitch:r=!1,pressed:i=!1,classes:o,isExpandible:c,children:l,onState:u,offState:d,onStateContent:f,offStateContent:p,onStateClasses:m,offStateClasses:h,onPressedChange:g,onClick:_,...v}=e,y=e=>{g?.(!i),_?.(e)},b=l||u||f,x=d||p,S=a(`c-toggle__button`,o),C=c?void 0:i?`true`:`false`,w=r?i?`true`:`false`:void 0,T=c?i?`true`:`false`:void 0;return(0,s.jsx)(`div`,{className:`relative c-toggle`,"data-module":`c-toggle`,children:(0,s.jsxs)(`button`,{ref:t,id:n,type:`button`,className:S,"aria-pressed":C,"aria-checked":w,"aria-expanded":T,role:r?`switch`:void 0,onClick:y,...v,children:[(0,s.jsx)(`span`,{className:a(`c-button--is-not-pressed`,`pointer-events-none`,!i&&m,i&&h),children:x}),(0,s.jsx)(`span`,{className:a(`c-button--is-pressed`,`hidden`,`pointer-events-none`,i&&m,!i&&h),children:b})]})})}),c.displayName=`Toggle`,c.__docgenInfo={description:`Toggle component - an on/off switch control.
Supports switch mode (checkbox-like) and regular toggle modes.
Uses aria-pressed or aria-checked for accessibility.`,methods:[],displayName:`Toggle`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},isSwitch:{required:!1,tsType:{name:`boolean`},description:`Render as switch (checkbox-like) or regular toggle`},pressed:{required:!1,tsType:{name:`boolean`},description:`Current pressed/on state`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes to append to the default toggle class`},isExpandible:{required:!1,tsType:{name:`boolean`},description:`Whether toggle is expandable`},onState:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when toggled on`},offState:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when toggled off`},onStateContent:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when toggled on (as props)`},offStateContent:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when toggled off (as props)`},onStateClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the on state`},offStateClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the off state`},onPressedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(pressed: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`pressed`}],return:{name:`void`}}},description:`Change event handler`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent<HTMLButtonElement>`,elements:[{name:`HTMLButtonElement`}]},name:`event`}],return:{name:`void`}}},description:`Click event handler`}},composes:[`Omit`]}})),u,d,f,p,m,h,g,_,v,y;t((()=>{u=e(n(),1),l(),d=r(),f={title:`Buttons/Toggle`,component:c,tags:[`autodocs`]},p={render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(c,{pressed:e,onPressedChange:t,offState:`Off`,onState:`On`})}},m={render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(c,{isSwitch:!0,pressed:e,onPressedChange:t,offState:`Off`,onState:`On`})}},h={render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(c,{pressed:e,onPressedChange:t,children:(0,d.jsx)(`span`,{children:`Child Content`})})}},g={render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(c,{pressed:e,onPressedChange:t,classes:`px-4 py-2 rounded-full`,offStateClasses:`bg-gray-200 text-gray-800`,onStateClasses:`bg-blue-600 text-white`,offState:`Off`,onState:`On`})}},_={render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(c,{pressed:e,onPressedChange:t,disabled:!0,offState:`Off`,onState:`On`})}},v={render:()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(c,{isExpandible:!0,pressed:e,onPressedChange:t,offState:`Collapsed`,onState:`Expanded`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed} offState="Off" onState="On" />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle isSwitch pressed={pressed} onPressedChange={setPressed} offState="Off" onState="On" />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed}>
        <span>Child Content</span>
      </Toggle>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed} classes="px-4 py-2 rounded-full" offStateClasses="bg-gray-200 text-gray-800" onStateClasses="bg-blue-600 text-white" offState="Off" onState="On" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle pressed={pressed} onPressedChange={setPressed} disabled offState="Off" onState="On" />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pressed, setPressed] = useState(false);
    return <Toggle isExpandible pressed={pressed} onPressedChange={setPressed} offState="Collapsed" onState="Expanded" />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`AsSwitch`,`WithContentChildren`,`WithClasses`,`Disabled`,`Expandible`]}))();export{m as AsSwitch,p as Default,_ as Disabled,v as Expandible,g as WithClasses,h as WithContentChildren,y as __namedExportsOrder,f as default};