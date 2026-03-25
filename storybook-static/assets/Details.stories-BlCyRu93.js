import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({id:e,summaryText:t,summaryHtml:n,summaryClasses:r,containerClasses:i,open:o=!1,classes:c,className:l,children:u,onOpenChange:d}){return(0,s.jsxs)(`details`,{id:e,open:o,className:a(c,l),onToggle:e=>{let t=e.currentTarget.open;d?.(t)},children:[(0,s.jsx)(`summary`,{className:a(`py-sm`,`cursor-pointer`,`focus:bg-warning-base`,`focus:outline-hidden`,`focus:shadow-outline-focus`,`focus:text-black`,r||`c-link`),children:n?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t}),(0,s.jsx)(`div`,{className:a(`py-sm`,i),children:u})]})}var s,c=t((()=>{n(),i(),s=r(),o.__docgenInfo={description:`Details component - an accessible disclosure widget.
Based on the HTML5 <details> element with DESY styling.`,methods:[],displayName:`Details`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},summaryText:{required:!1,tsType:{name:`string`},description:`Summary/disclosure text`},summaryHtml:{required:!1,tsType:{name:`string`},description:`Summary/disclosure HTML`},summaryClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the summary element`},containerClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the content container`},open:{required:!1,tsType:{name:`boolean`},description:`Whether the details is open`,defaultValue:{value:`false`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the details element`},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content (the disclosure content)`},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Change event handler for open state`}}}})),l,u,d,f,p,m,h,g,_;t((()=>{l=e(n(),1),c(),u=r(),d={title:`Views/Details`,component:o,tags:[`autodocs`]},f={args:{summaryText:`What is a monarch?`,children:(0,u.jsx)(`p`,{children:`A monarch is a sovereign head of state, typically a king, queen, or emperor.`})}},p={args:{summaryText:`What is a monarch?`,open:!0,children:(0,u.jsx)(`p`,{children:`A monarch is a sovereign head of state, typically a king, queen, or emperor.`})}},m={args:{summaryHtml:`<strong>Important</strong> Information`,children:(0,u.jsx)(`p`,{children:`This is some important information that can be expanded or collapsed.`})}},h={render:()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{children:[(0,u.jsxs)(`p`,{className:`mb-4`,children:[`Currently: `,e?`Open`:`Closed`]}),(0,u.jsx)(o,{summaryText:`Click to toggle`,open:e,onOpenChange:t,children:(0,u.jsx)(`p`,{children:`This content is controlled by the parent component.`})}),(0,u.jsx)(`button`,{onClick:()=>t(!e),className:`mt-4 px-4 py-2 bg-blue-600 text-white rounded`,children:`Toggle Details`})]})}},g={args:{summaryText:`Learn more about our services`,summaryClasses:`c-link text-primary-600 hover:underline`,children:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`p`,{className:`mb-2`,children:`Our services include:`}),(0,u.jsxs)(`ul`,{className:`list-disc pl-6`,children:[(0,u.jsx)(`li`,{children:`Consulting`}),(0,u.jsx)(`li`,{children:`Development`}),(0,u.jsx)(`li`,{children:`Training`})]})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    summaryText: 'What is a monarch?',
    children: <p>A monarch is a sovereign head of state, typically a king, queen, or emperor.</p>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    summaryText: 'What is a monarch?',
    open: true,
    children: <p>A monarch is a sovereign head of state, typically a king, queen, or emperor.</p>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    summaryHtml: '<strong>Important</strong> Information',
    children: <p>This is some important information that can be expanded or collapsed.</p>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <p className="mb-4">Currently: {isOpen ? 'Open' : 'Closed'}</p>
        <Details summaryText="Click to toggle" open={isOpen} onOpenChange={setIsOpen}>
          <p>This content is controlled by the parent component.</p>
        </Details>
        <button onClick={() => setIsOpen(!isOpen)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Toggle Details
        </button>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    summaryText: 'Learn more about our services',
    summaryClasses: 'c-link text-primary-600 hover:underline',
    children: <div>
        <p className="mb-2">Our services include:</p>
        <ul className="list-disc pl-6">
          <li>Consulting</li>
          <li>Development</li>
          <li>Training</li>
        </ul>
      </div>
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`OpenByDefault`,`WithHtmlSummary`,`Controlled`,`WithStyledSummary`]}))();export{h as Controlled,f as Default,p as OpenByDefault,m as WithHtmlSummary,g as WithStyledSummary,_ as __namedExportsOrder,d as default};