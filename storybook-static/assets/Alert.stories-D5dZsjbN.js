import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";import{n as o,t as s}from"./Button-BjI6SWGY.js";function c({id:e,active:t=!1,classes:n,className:r,children:i}){return t?(0,l.jsx)(`div`,{id:e,className:a(n,r),role:`dialog`,"aria-live":`polite`,children:i}):null}var l,u=t((()=>{n(),i(),l=r(),c.__docgenInfo={description:`Alert component - a container that shows/hides content based on active state.
Typically used with Notification component for alert messages.`,methods:[],displayName:`Alert`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},active:{required:!1,tsType:{name:`boolean`},description:`Whether the alert is active/visible`,defaultValue:{value:`false`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the alert container`},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content (typically Notification component)`}}}})),d,f,p,m,h,g,_;t((()=>{d=e(n(),1),u(),o(),f=r(),p={title:`Views/Alert`,component:c,tags:[`autodocs`]},m={args:{id:`inactive-alert`,active:!1,children:(0,f.jsx)(`p`,{children:`Alert content`})}},h={args:{id:`active-alert`,active:!0,children:(0,f.jsx)(`p`,{children:`Alert content`})}},g={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(s,{onClick:()=>t(!0),disabled:e,children:`Show Alert`}),(0,f.jsx)(c,{id:`controlled-alert`,active:e,children:(0,f.jsxs)(`div`,{className:`p-4 bg-blue-100 border border-blue-400 rounded`,children:[(0,f.jsx)(`p`,{children:`This is an alert message!`}),(0,f.jsx)(`button`,{onClick:()=>t(!1),className:`mt-2 text-sm underline`,children:`Dismiss`})]})})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'inactive-alert',
    active: false,
    children: <p>Alert content</p>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'active-alert',
    active: true,
    children: <p>Alert content</p>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(false);
    return <div>
        <Button onClick={() => setActive(true)} disabled={active}>
          Show Alert
        </Button>
        <Alert id="controlled-alert" active={active}>
          <div className="p-4 bg-blue-100 border border-blue-400 rounded">
            <p>This is an alert message!</p>
            <button onClick={() => setActive(false)} className="mt-2 text-sm underline">
              Dismiss
            </button>
          </div>
        </Alert>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_=[`Inactive`,`Active`,`Controlled`]}))();export{h as Active,g as Controlled,m as Inactive,_ as __namedExportsOrder,p as default};