import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./Textarea-DMKf0xo1.js";var o,s,c,l,u,d,f,p,m,h,g,_;t((()=>{o=e(n(),1),i(),s=r(),c={title:`Forms/Textarea`,component:a,tags:[`autodocs`]},l={args:{id:`default-textarea`,labelText:`Default Textarea`,placeholder:`Enter some text...`}},u={args:{id:`hint-textarea`,labelText:`Textarea with Hint`,hintText:`This is a helpful hint message`,placeholder:`Enter some text...`}},d={args:{id:`error-textarea`,labelText:`Textarea with Error`,errorMessageText:`This field is required`,placeholder:`Enter some text...`}},f={args:{id:`maxlength-textarea`,labelText:`Textarea with Max Length`,maxlength:100,placeholder:`Enter some text...`}},p={args:{id:`disabled-textarea`,labelText:`Disabled Textarea`,value:`This is disabled text`,disabled:!0}},m={args:{id:`rows-textarea`,labelText:`Textarea with 10 Rows`,rows:10,placeholder:`Enter some longer text...`}},h={render:()=>{let[e,t]=(0,o.useState)(``);return(0,s.jsx)(a,{id:`controlled-textarea`,labelText:`Controlled Textarea`,value:e,onChange:e=>t(e.target.value),placeholder:`Type something...`})}},g={args:{id:`heading-textarea`,labelText:`Form Title as Page Heading`,labelIsPageHeading:!0,labelHeadingLevel:2,placeholder:`Enter some text...`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default-textarea',
    labelText: 'Default Textarea',
    placeholder: 'Enter some text...'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hint-textarea',
    labelText: 'Textarea with Hint',
    hintText: 'This is a helpful hint message',
    placeholder: 'Enter some text...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'error-textarea',
    labelText: 'Textarea with Error',
    errorMessageText: 'This field is required',
    placeholder: 'Enter some text...'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'maxlength-textarea',
    labelText: 'Textarea with Max Length',
    maxlength: 100,
    placeholder: 'Enter some text...'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-textarea',
    labelText: 'Disabled Textarea',
    value: 'This is disabled text',
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'rows-textarea',
    labelText: 'Textarea with 10 Rows',
    rows: 10,
    placeholder: 'Enter some longer text...'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Textarea id="controlled-textarea" labelText="Controlled Textarea" value={value} onChange={e => setValue(e.target.value)} placeholder="Type something..." />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'heading-textarea',
    labelText: 'Form Title as Page Heading',
    labelIsPageHeading: true,
    labelHeadingLevel: 2,
    placeholder: 'Enter some text...'
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithHint`,`WithError`,`WithMaxLength`,`Disabled`,`WithRows`,`Controlled`,`AsPageHeading`]}))();export{g as AsPageHeading,h as Controlled,l as Default,p as Disabled,d as WithError,u as WithHint,f as WithMaxLength,m as WithRows,_ as __namedExportsOrder,c as default};