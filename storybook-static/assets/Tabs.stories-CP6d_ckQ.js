import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e,t,n){return t||`${n||`tab`}-${e}`}function s(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function c({id:e,idPrefix:t,headingLevel:n=2,title:r,tablistAriaLabel:i,items:c,tablistClasses:d,className:f=`c-tabs`,children:p,onChange:m,...h}){let[g,_]=(0,l.useState)(0),v=(0,l.useRef)([]),y=c||[];(0,l.useEffect)(()=>{if(y.length>0){let e=y.findIndex((e,t)=>!e.disabled&&(e.active||t===y.findIndex(e=>!e.disabled)));e!==-1&&_(e)}},[y]);let b=y[g],x=b?.panel,S=e=>{y[e]?.disabled||(_(e),m?.(e))},C=(e,t)=>{let n=y.filter(e=>!e.disabled),r=n.findIndex((e,n)=>y[n]===y[t]);switch(e.key){case`Home`:if(e.preventDefault(),n.length>0){let e=y.findIndex(e=>!e.disabled);v.current[e]?.focus()}break;case`End`:if(e.preventDefault(),n.length>0){let e=y.findLastIndex(e=>!e.disabled);v.current[e]?.focus()}break;case`ArrowLeft`:if(e.preventDefault(),r>0){let e=y.findIndex((e,n)=>!e.disabled&&n<t);e!==-1&&v.current[e]?.focus()}break;case`ArrowRight`:e.preventDefault();for(let e=t+1;e<y.length;e++)if(!y[e].disabled){v.current[e]?.focus();break}break}},w=()=>(0,u.jsx)(`h${n}`,{className:`inline-flex items-center mb-base lg:mb-0 font-semibold`,children:r||`Contenido`});return(0,u.jsxs)(`div`,{className:a(f),id:e,...h,children:[(0,u.jsx)(`div`,{className:`c-tabs__panel-heading`,children:w()}),(0,u.jsx)(`div`,{className:a(`c-tabs__tabs`,d),role:`tablist`,"aria-label":i,children:y.map((e,n)=>{let r=o(n,e.id,t),i=e.html?(0,u.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return(0,u.jsx)(`button`,{ref:e=>{v.current[n]=e},id:r,role:`tab`,type:`button`,"aria-selected":g===n?`true`:`false`,"aria-controls":`tab-${r}`,tabIndex:g!==n||e.disabled?-1:0,disabled:e.disabled||void 0,"aria-disabled":e.disabled||void 0,onClick:()=>S(n),onKeyDown:e=>C(e,n),className:a(`group c-tabs__link`,e.disabled&&`opacity-50 pointer-events-none`,g===n&&`c-tabs__link--is-active`),children:(0,u.jsx)(`span`,{className:`flex items-center pointer-events-none group-focus:bg-warning-base group-focus:shadow-outline-focus group-focus:outline-hidden`,children:e.content||i})},r)})}),(0,u.jsxs)(`div`,{id:`tab-${o(g,b?.id,t)}`,role:`tabpanel`,"aria-labelledby":o(g,b?.id,t),tabIndex:x?.tabindex??0,className:a(`c-tabs__panel`,x?.classes),children:[(0,u.jsx)(`div`,{className:`sr-only`,"aria-live":`polite`,children:x?.text}),(0,u.jsx)(`div`,{className:`c-tabs__panel-heading`,children:w()}),x?.html&&(0,u.jsx)(`div`,{dangerouslySetInnerHTML:{__html:x.html}}),x?.text&&(0,u.jsx)(`p`,{dangerouslySetInnerHTML:{__html:`<p>${s(x.text)}</p>`}}),b?.content]})]})}var l,u,d=t((()=>{l=e(n(),1),i(),u=r(),c.__docgenInfo={description:`Tabs component - a tabbed interface with keyboard navigation.`,methods:[],displayName:`Tabs`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},idPrefix:{required:!1,tsType:{name:`string`},description:`Prefix for generated IDs`},headingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Heading level for the panel title`,defaultValue:{value:`2`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:`Panel title`},tablistAriaLabel:{required:!1,tsType:{name:`string`},description:`Aria label for the tab list`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`TabsItemData`}],raw:`TabsItemData[]`},description:`Tab items configuration`},tablistClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the tab list`},className:{required:!1,tsType:{name:`string`},description:`Default CSS classes`,defaultValue:{value:`'c-tabs'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content (TabItem components)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:`Callback when tab changes`}},composes:[`Omit`]}})),f,p,m,h,g,_;t((()=>{d(),f={title:`Views/Tabs`,component:c,tags:[`autodocs`]},p={args:{idPrefix:`tab`,headingLevel:2,title:`Contents`,tablistAriaLabel:`Content sections`,items:[{id:`tab-1`,text:`Tab 1`,panel:{text:`Content for tab 1 goes here.`}},{id:`tab-2`,text:`Tab 2`,panel:{text:`Content for tab 2 goes here.`}},{id:`tab-3`,text:`Tab 3`,panel:{text:`Content for tab 3 goes here.`}}]}},m={args:{idPrefix:`html-tabs`,headingLevel:2,items:[{text:`Overview`,panel:{html:`<p>This is <strong>HTML content</strong> in the panel.</p>`}},{text:`Details`,panel:{html:`<ul><li>Detail 1</li><li>Detail 2</li></ul>`}}]}},h={args:{idPrefix:`disabled-tabs`,headingLevel:2,items:[{text:`Active Tab`,panel:{text:`This tab is active.`}},{text:`Disabled Tab`,disabled:!0,panel:{text:`You cannot see this content.`}},{text:`Another Tab`,panel:{text:`This is another tab.`}}]}},g={args:{idPrefix:`active-tabs`,headingLevel:3,title:`Documentation`,items:[{text:`Getting Started`,panel:{text:`Getting started content...`}},{text:`API Reference`,active:!0,panel:{text:`API reference content...`}},{text:`Examples`,panel:{text:`Examples content...`}}]}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'tab',
    headingLevel: 2,
    title: 'Contents',
    tablistAriaLabel: 'Content sections',
    items: [{
      id: 'tab-1',
      text: 'Tab 1',
      panel: {
        text: 'Content for tab 1 goes here.'
      }
    }, {
      id: 'tab-2',
      text: 'Tab 2',
      panel: {
        text: 'Content for tab 2 goes here.'
      }
    }, {
      id: 'tab-3',
      text: 'Tab 3',
      panel: {
        text: 'Content for tab 3 goes here.'
      }
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'html-tabs',
    headingLevel: 2,
    items: [{
      text: 'Overview',
      panel: {
        html: '<p>This is <strong>HTML content</strong> in the panel.</p>'
      }
    }, {
      text: 'Details',
      panel: {
        html: '<ul><li>Detail 1</li><li>Detail 2</li></ul>'
      }
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'disabled-tabs',
    headingLevel: 2,
    items: [{
      text: 'Active Tab',
      panel: {
        text: 'This tab is active.'
      }
    }, {
      text: 'Disabled Tab',
      disabled: true,
      panel: {
        text: 'You cannot see this content.'
      }
    }, {
      text: 'Another Tab',
      panel: {
        text: 'This is another tab.'
      }
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    idPrefix: 'active-tabs',
    headingLevel: 3,
    title: 'Documentation',
    items: [{
      text: 'Getting Started',
      panel: {
        text: 'Getting started content...'
      }
    }, {
      text: 'API Reference',
      active: true,
      panel: {
        text: 'API reference content...'
      }
    }, {
      text: 'Examples',
      panel: {
        text: 'Examples content...'
      }
    }]
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithHtmlContent`,`WithDisabledTab`,`WithActiveTab`]}))();export{p as Default,g as WithActiveTab,h as WithDisabledTab,m as WithHtmlContent,_ as __namedExportsOrder,f as default};