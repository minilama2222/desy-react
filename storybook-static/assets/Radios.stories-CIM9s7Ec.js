import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return e?`${e}-hint`:``}function s(e,t){return e||(t?`${t}-error`:``)}var c,l,u,d,f=t((()=>{c=e(n(),1),i(),l=r(),u=(0,c.forwardRef)((e,t)=>{let{id:n,value:r,name:i,text:o,html:s,checked:c,disabled:u,classes:d,hintText:f,hintHtml:p,conditionalHtml:m,hintIdSuffix:h,onChange:g,..._}=e,v=h?`${h}-item-hint`:void 0,y=e=>{g?.(r,e)},b=s?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:s}}):o;return(0,l.jsxs)(`div`,{className:a(`relative`,`flex`,`items-start`,`py-base`,d),children:[(0,l.jsx)(`div`,{className:`flex items-center mx-sm`,children:(0,l.jsx)(`input`,{ref:t,id:n,name:i,type:`radio`,value:r,checked:c,disabled:u,className:a(`w-6`,`h-6`,`text-primary-base`,`transition`,`duration-150`,`ease-in-out`,`border-black`,`focus:border-black`,`focus:outline-black`,`focus:outline-1`,`focus:outline-offset-2`,`focus:ring-4`,`focus:ring-offset-0`,`focus:ring-warning-base`,`disabled:bg-neutral-base`,`disabled:border-neutral-base`),onChange:y,..._})}),(0,l.jsxs)(`div`,{className:`pt-0.5 leading-5`,children:[(0,l.jsx)(`label`,{htmlFor:n,className:`cursor-pointer`,children:b}),(f||p)&&(0,l.jsx)(`p`,{id:v,className:`block text-neutral-dark text-sm`,children:p?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:p}}):f})]}),m&&c&&(0,l.jsx)(`div`,{className:`mb-lg ml-5 pt-sm pb-base pl-6 origin-top-left border-l-2 border-primary-base`,id:`conditional-${n}`,children:(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:m}})})]})}),u.displayName=`RadioItem`,d=(0,c.forwardRef)((e,t)=>{let{id:n,name:r,items:i,value:c,legendText:d,legendHtml:f,legendIsPageHeading:p,legendHeadingLevel:m,legendClasses:h,hintText:g,hintHtml:_,errorMessageText:v,errorMessageHtml:y,errorVisuallyHiddenText:b,errorId:x,hintId:S,formGroupClasses:C,classes:w,hasError:T,children:E,onChange:D,...O}=e,k=S||o(n),A=s(x,n),j=T||!!(v||y),M=(e,t)=>{D?.(e)},N=()=>{if(!d&&!f)return null;let e=f?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f}}):d;return p?(0,l.jsx)(`h${m||2}`,{className:h,children:e}):(0,l.jsx)(`span`,{className:h,children:e})};return(0,l.jsxs)(`div`,{ref:t,className:a(`c-form-group`,C,j&&`c-form-group--error`),...O,children:[d||f?(0,l.jsx)(`fieldset`,{className:`border-0 p-0 m-0`,children:(0,l.jsx)(`legend`,{className:`block font-semibold mb-sm`,children:N()})}):null,(g||_)&&(0,l.jsx)(`p`,{id:k,className:`block text-neutral-dark mb-sm`,children:_?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g}),(v||y)&&(0,l.jsxs)(`p`,{id:A,className:`block font-semibold text-alert-base mb-sm`,children:[(0,l.jsxs)(`span`,{className:`sr-only`,children:[b||`Error`,`: `]}),y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v]}),E,!E&&i&&(0,l.jsx)(`div`,{className:a(`c-radios`,w),id:n,children:i.map((e,t)=>(0,l.jsx)(u,{id:e.id||(n?`${n}-${t}`:void 0),name:e.name||r,value:e.value,text:e.text,html:e.html,checked:c===e.value,disabled:e.disabled,classes:e.classes,hintText:e.hintText,hintHtml:e.hintHtml,conditionalHtml:e.conditionalHtml,hintIdSuffix:e.id||(n?`${n}-${t}`:void 0),onChange:M},e.value||t))})]})}),d.displayName=`Radios`,u.__docgenInfo={description:`Radio item component - a single radio button with label and optional hint`,methods:[],displayName:`RadioItem`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},value:{required:!0,tsType:{name:`string`},description:`Radio value`},name:{required:!0,tsType:{name:`string`},description:`Radio name`},text:{required:!1,tsType:{name:`string`},description:`Radio label text`},html:{required:!1,tsType:{name:`string`},description:`Radio label HTML`},checked:{required:!1,tsType:{name:`boolean`},description:`Whether the radio is checked`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the radio is disabled`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},conditionalHtml:{required:!1,tsType:{name:`string`},description:`Conditional content shown when checked`},hintIdSuffix:{required:!1,tsType:{name:`string`},description:`Hint ID suffix`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]},d.__docgenInfo={description:`Radios component - a group of radio buttons with legend, hint, and error message`,methods:[],displayName:`Radios`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix for radio items`},name:{required:!0,tsType:{name:`string`},description:`Name attribute for all radios in the group`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`RadioItemData`}],raw:`RadioItemData[]`},description:`Array of radio items`},value:{required:!1,tsType:{name:`string`},description:`Currently selected value`},legendText:{required:!1,tsType:{name:`string`},description:`Legend text (field label)`},legendHtml:{required:!1,tsType:{name:`string`},description:`Legend HTML`},legendIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Legend is page heading`},legendHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Legend heading level`},legendClasses:{required:!1,tsType:{name:`string`},description:`Legend CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error`},errorId:{required:!1,tsType:{name:`string`},description:`Error ID`},hintId:{required:!1,tsType:{name:`string`},description:`Hint ID`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the radios container`},hasError:{required:!1,tsType:{name:`boolean`},description:`Whether has error state`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (for compound pattern)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Change event handler`}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{p=e(n(),1),f(),m=r(),h={title:`Forms/Radios`,component:d,tags:[`autodocs`]},g=[{id:`radio-1`,value:`yes`,text:`Yes`},{id:`radio-2`,value:`no`,text:`No`}],_={args:{name:`default-radios`,legendText:`Have you changed your name?`,items:g}},v={args:{name:`hint-radios`,legendText:`Have you changed your name?`,hintText:`This includes changing your last name or spelling your name differently.`,items:g}},y={args:{name:`error-radios`,legendText:`Have you changed your name?`,errorMessageText:`Please select an option`,items:g,hasError:!0}},b={render:()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsx)(d,{name:`controlled-radios`,legendText:`Have you changed your name?`,value:e,onChange:t,items:g})}},x={args:{name:`heading-radios`,legendText:`Form Legend as Page Heading`,legendIsPageHeading:!0,legendHeadingLevel:2,items:g}},S={args:{name:`disabled-radios`,legendText:`Have you changed your name?`,items:[{id:`radio-1`,value:`yes`,text:`Yes`},{id:`radio-2`,value:`no`,text:`No`,disabled:!0}]}},C={render:()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsx)(d,{name:`conditional-radios`,legendText:`Have you changed your name?`,value:e,onChange:t,items:[{id:`radio-1`,value:`yes`,text:`Yes`,conditionalHtml:`<p>Please provide your previous name</p>`},{id:`radio-2`,value:`no`,text:`No`}]})}},w={args:{name:`divider-radios`,legendText:`Select an option`,items:[{id:`radio-1`,value:`option1`,text:`Option 1`},{id:`radio-divider`,value:`divider`,divider:`or`},{id:`radio-2`,value:`option2`,text:`Option 2`}]}},T={render:()=>{let[e,t]=(0,p.useState)(``);return(0,m.jsxs)(d,{name:`compound-radios`,legendText:`Select a fruit`,value:e,onChange:t,children:[(0,m.jsx)(u,{id:`apple`,name:`compound-radios`,value:`apple`,text:`Apple`}),(0,m.jsx)(u,{id:`banana`,name:`compound-radios`,value:`banana`,text:`Banana`}),(0,m.jsx)(u,{id:`orange`,name:`compound-radios`,value:`orange`,text:`Orange`})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default-radios',
    legendText: 'Have you changed your name?',
    items: radioItems
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'hint-radios',
    legendText: 'Have you changed your name?',
    hintText: 'This includes changing your last name or spelling your name differently.',
    items: radioItems
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'error-radios',
    legendText: 'Have you changed your name?',
    errorMessageText: 'Please select an option',
    items: radioItems,
    hasError: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Radios name="controlled-radios" legendText="Have you changed your name?" value={value} onChange={setValue} items={radioItems} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'heading-radios',
    legendText: 'Form Legend as Page Heading',
    legendIsPageHeading: true,
    legendHeadingLevel: 2,
    items: radioItems
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled-radios',
    legendText: 'Have you changed your name?',
    items: [{
      id: 'radio-1',
      value: 'yes',
      text: 'Yes'
    }, {
      id: 'radio-2',
      value: 'no',
      text: 'No',
      disabled: true
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Radios name="conditional-radios" legendText="Have you changed your name?" value={value} onChange={setValue} items={[{
      id: 'radio-1',
      value: 'yes',
      text: 'Yes',
      conditionalHtml: '<p>Please provide your previous name</p>'
    }, {
      id: 'radio-2',
      value: 'no',
      text: 'No'
    }]} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'divider-radios',
    legendText: 'Select an option',
    items: [{
      id: 'radio-1',
      value: 'option1',
      text: 'Option 1'
    }, {
      id: 'radio-divider',
      value: 'divider',
      divider: 'or'
    }, {
      id: 'radio-2',
      value: 'option2',
      text: 'Option 2'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Radios name="compound-radios" legendText="Select a fruit" value={value} onChange={setValue}>
        <RadioItem id="apple" name="compound-radios" value="apple" text="Apple" />
        <RadioItem id="banana" name="compound-radios" value="banana" text="Banana" />
        <RadioItem id="orange" name="compound-radios" value="orange" text="Orange" />
      </Radios>;
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithHint`,`WithError`,`Controlled`,`AsPageHeading`,`WithDisabledOption`,`WithConditionalContent`,`WithDividers`,`CompoundComponentPattern`]}))();export{x as AsPageHeading,T as CompoundComponentPattern,b as Controlled,_ as Default,C as WithConditionalContent,S as WithDisabledOption,w as WithDividers,y as WithError,v as WithHint,E as __namedExportsOrder,h as default};