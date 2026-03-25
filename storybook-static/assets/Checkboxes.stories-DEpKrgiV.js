import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return e?`${e}-hint`:``}function s(e,t){return e||(t?`${t}-error`:``)}var c,l,u,d,f=t((()=>{c=e(n(),1),i(),l=r(),u=(0,c.forwardRef)((e,t)=>{let{id:n,value:r,name:i,text:o,html:s,checked:c,indeterminate:u,disabled:d,classes:f,hintText:p,hintHtml:m,conditionalHtml:h,hintIdSuffix:g,hasDividers:_,onChange:v,...y}=e,b=g?`${g}-item-hint`:void 0,x=e=>{v?.(r,e.target.checked,e)},S=s?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:s}}):o;return(0,l.jsxs)(`div`,{className:a(`block`,_&&`border-t border-b border-neutral-base -mb-px`,f),children:[(0,l.jsxs)(`div`,{className:`relative flex items-start py-base`,children:[(0,l.jsx)(`div`,{className:`flex items-center mx-sm`,children:(0,l.jsx)(`input`,{ref:t,id:n,name:i,type:`checkbox`,value:r,checked:c,disabled:d,className:a(`w-6`,`h-6`,`text-primary-base`,`transition`,`duration-150`,`ease-in-out`,`border-black`,`focus:border-black`,`focus:outline-black`,`focus:outline-1`,`focus:outline-offset-2`,`focus:ring-4`,`focus:ring-offset-0`,`focus:ring-warning-base`,`disabled:bg-neutral-base`,`disabled:border-neutral-base`),onChange:x,...y})}),(0,l.jsxs)(`div`,{className:`pt-0.5 leading-5`,children:[(0,l.jsx)(`label`,{htmlFor:n,className:`cursor-pointer`,children:S}),(p||m)&&(0,l.jsx)(`p`,{id:b,className:`block text-neutral-dark text-sm`,children:m?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:m}}):p})]})]}),h&&c&&(0,l.jsx)(`div`,{className:`mb-lg ml-5 pt-sm pb-base pl-6 origin-top-left border-l-2 border-primary-base`,id:`conditional-${n}`,children:(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:h}})})]})}),u.displayName=`CheckboxItem`,d=(0,c.forwardRef)((e,t)=>{let{id:n,name:r,items:i,value:c=[],legendText:d,legendHtml:f,legendIsPageHeading:p,legendHeadingLevel:m,legendClasses:h,hintText:g,hintHtml:_,errorMessageText:v,errorMessageHtml:y,errorVisuallyHiddenText:b,errorId:x,hintId:S,formGroupClasses:C,classes:w,hasError:T,hasDividers:E,children:D,onChange:O,...k}=e,A=S||o(n),j=s(x,n),M=T||!!(v||y),N=(e,t,n)=>{let r;r=t?[...c,e]:c.filter(t=>t!==e),O?.(r)},P=()=>{if(!d&&!f)return null;let e=f?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f}}):d;return p?(0,l.jsx)(`h${m||2}`,{className:h,children:e}):(0,l.jsx)(`span`,{className:h,children:e})};return(0,l.jsxs)(`div`,{ref:t,className:a(`c-form-group`,C,M&&`c-form-group--error`),...k,children:[d||f?(0,l.jsx)(`fieldset`,{className:`border-0 p-0 m-0`,children:(0,l.jsx)(`legend`,{className:`block font-semibold mb-sm`,children:P()})}):null,(g||_)&&(0,l.jsx)(`p`,{id:A,className:`block text-neutral-dark mb-sm`,children:_?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g}),(v||y)&&(0,l.jsxs)(`p`,{id:j,className:`block font-semibold text-alert-base mb-sm`,children:[(0,l.jsxs)(`span`,{className:`sr-only`,children:[b||`Error`,`: `]}),y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v]}),D,!D&&i&&(0,l.jsx)(`div`,{className:a(`c-checkboxes`,w),id:n,children:i.map((e,t)=>e.divider?(0,l.jsx)(`div`,{className:`py-base px-sm`,children:(0,l.jsx)(`p`,{children:e.divider})},`divider-${t}`):(0,l.jsx)(u,{id:e.id||(n?`${n}-${t}`:void 0),name:e.name||r,value:e.value,text:e.text,html:e.html,checked:c.includes(e.value),disabled:e.disabled,classes:e.classes,hintText:e.hintText,hintHtml:e.hintHtml,conditionalHtml:e.conditionalHtml,hintIdSuffix:e.id||(n?`${n}-${t}`:void 0),hasDividers:E,onChange:N},e.value||t))})]})}),d.displayName=`Checkboxes`,u.__docgenInfo={description:`Checkbox item component - a single checkbox with label and optional hint`,methods:[],displayName:`CheckboxItem`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},value:{required:!0,tsType:{name:`string`},description:`Checkbox value`},name:{required:!0,tsType:{name:`string`},description:`Checkbox name`},text:{required:!1,tsType:{name:`string`},description:`Checkbox label text`},html:{required:!1,tsType:{name:`string`},description:`Checkbox label HTML`},checked:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is checked`},indeterminate:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is in indeterminate state`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is disabled`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},conditionalHtml:{required:!1,tsType:{name:`string`},description:`Conditional content shown when checked`},hintIdSuffix:{required:!1,tsType:{name:`string`},description:`Hint ID suffix`},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Has dividers`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`boolean`},name:`checked`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]},d.__docgenInfo={description:`Checkboxes component - a group of checkboxes with legend, hint, and error message`,methods:[],displayName:`Checkboxes`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix for checkbox items`},name:{required:!0,tsType:{name:`string`},description:`Name attribute for all checkboxes in the group`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`CheckboxItemData`}],raw:`CheckboxItemData[]`},description:`Array of checkbox items`},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Currently selected values (array for multiple select)`},legendText:{required:!1,tsType:{name:`string`},description:`Legend text (field label)`},legendHtml:{required:!1,tsType:{name:`string`},description:`Legend HTML`},legendIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Legend is page heading`},legendHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Legend heading level`},legendClasses:{required:!1,tsType:{name:`string`},description:`Legend CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error`},errorId:{required:!1,tsType:{name:`string`},description:`Error ID`},hintId:{required:!1,tsType:{name:`string`},description:`Hint ID`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the checkboxes container`},hasError:{required:!1,tsType:{name:`boolean`},description:`Whether has error state`},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Whether has dividers between items`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (for compound pattern)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:`Change event handler`}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{p=e(n(),1),f(),m=r(),h={title:`Forms/Checkboxes`,component:d,tags:[`autodocs`]},g=[{id:`checkbox-1`,value:`yes`,text:`Yes`},{id:`checkbox-2`,value:`no`,text:`No`}],_={args:{name:`default-checkboxes`,legendText:`Have you changed your name?`,items:g}},v={args:{name:`hint-checkboxes`,legendText:`Have you changed your name?`,hintText:`This includes changing your last name or spelling your name differently.`,items:g}},y={args:{name:`error-checkboxes`,legendText:`Have you changed your name?`,errorMessageText:`Please select an option`,items:g,hasError:!0}},b={render:()=>{let[e,t]=(0,p.useState)([]);return(0,m.jsx)(d,{name:`controlled-checkboxes`,legendText:`Select your interests`,value:e,onChange:t,items:[{value:`sports`,text:`Sports`},{value:`music`,text:`Music`},{value:`reading`,text:`Reading`}]})}},x={args:{name:`divider-checkboxes`,legendText:`Select an option`,hasDividers:!0,items:[{id:`checkbox-1`,value:`option1`,text:`Option 1`},{id:`checkbox-divider`,value:`divider`,divider:`or`},{id:`checkbox-2`,value:`option2`,text:`Option 2`}]}},S={args:{name:`disabled-checkboxes`,legendText:`Select your interests`,items:[{value:`sports`,text:`Sports`},{value:`music`,text:`Music`,disabled:!0},{value:`reading`,text:`Reading`}]}},C={render:()=>{let[e,t]=(0,p.useState)([]);return(0,m.jsx)(d,{name:`conditional-checkboxes`,legendText:`Select your interests`,value:e,onChange:t,items:[{value:`yes`,text:`Yes, I have changed my name`,conditionalHtml:`<p>Please provide your previous name</p>`},{value:`no`,text:`No`}]})}},w={render:()=>{let[e,t]=(0,p.useState)([]);return(0,m.jsxs)(d,{name:`compound-checkboxes`,legendText:`Select fruits`,value:e,onChange:t,children:[(0,m.jsx)(u,{id:`apple`,name:`compound-checkboxes`,value:`apple`,text:`Apple`,checked:e.includes(`apple`),onChange:(n,r)=>{t(r?[...e,n]:e.filter(e=>e!==n))}}),(0,m.jsx)(u,{id:`banana`,name:`compound-checkboxes`,value:`banana`,text:`Banana`,checked:e.includes(`banana`),onChange:(n,r)=>{t(r?[...e,n]:e.filter(e=>e!==n))}})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'default-checkboxes',
    legendText: 'Have you changed your name?',
    items: checkboxItems
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'hint-checkboxes',
    legendText: 'Have you changed your name?',
    hintText: 'This includes changing your last name or spelling your name differently.',
    items: checkboxItems
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'error-checkboxes',
    legendText: 'Have you changed your name?',
    errorMessageText: 'Please select an option',
    items: checkboxItems,
    hasError: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <Checkboxes name="controlled-checkboxes" legendText="Select your interests" value={value} onChange={setValue} items={[{
      value: 'sports',
      text: 'Sports'
    }, {
      value: 'music',
      text: 'Music'
    }, {
      value: 'reading',
      text: 'Reading'
    }]} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'divider-checkboxes',
    legendText: 'Select an option',
    hasDividers: true,
    items: [{
      id: 'checkbox-1',
      value: 'option1',
      text: 'Option 1'
    }, {
      id: 'checkbox-divider',
      value: 'divider',
      divider: 'or'
    }, {
      id: 'checkbox-2',
      value: 'option2',
      text: 'Option 2'
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'disabled-checkboxes',
    legendText: 'Select your interests',
    items: [{
      value: 'sports',
      text: 'Sports'
    }, {
      value: 'music',
      text: 'Music',
      disabled: true
    }, {
      value: 'reading',
      text: 'Reading'
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <Checkboxes name="conditional-checkboxes" legendText="Select your interests" value={value} onChange={setValue} items={[{
      value: 'yes',
      text: 'Yes, I have changed my name',
      conditionalHtml: '<p>Please provide your previous name</p>'
    }, {
      value: 'no',
      text: 'No'
    }]} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <Checkboxes name="compound-checkboxes" legendText="Select fruits" value={value} onChange={setValue}>
        <CheckboxItem id="apple" name="compound-checkboxes" value="apple" text="Apple" checked={value.includes('apple')} onChange={(val, checked) => {
        if (checked) {
          setValue([...value, val]);
        } else {
          setValue(value.filter(v => v !== val));
        }
      }} />
        <CheckboxItem id="banana" name="compound-checkboxes" value="banana" text="Banana" checked={value.includes('banana')} onChange={(val, checked) => {
        if (checked) {
          setValue([...value, val]);
        } else {
          setValue(value.filter(v => v !== val));
        }
      }} />
      </Checkboxes>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithHint`,`WithError`,`Controlled`,`WithDividers`,`WithDisabledOption`,`WithConditionalContent`,`CompoundComponentPattern`]}))();export{w as CompoundComponentPattern,b as Controlled,_ as Default,C as WithConditionalContent,S as WithDisabledOption,x as WithDividers,y as WithError,v as WithHint,T as __namedExportsOrder,h as default};