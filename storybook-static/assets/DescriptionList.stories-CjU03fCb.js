import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-Db8mzpb1.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({className:e,items:t,id:n,children:r,...a}){return(0,o.jsxs)(`dl`,{id:n,className:i(e),...a,children:[t?.map((e,t)=>(0,o.jsxs)(`div`,{id:e.id,className:e.classes,children:[(0,o.jsx)(`dt`,{id:e.term?.id,className:i(e.term?.classes||`text-sm text-neutral-dark`),tabIndex:e.tabindex,children:e.term?.html?(0,o.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.term.html}}):e.term?.text}),(0,o.jsx)(`dd`,{id:e.definition?.id,className:i(e.definition?.classes||`text-base text-black`),tabIndex:e.tabindex,children:e.definition?.html?(0,o.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.definition.html}}):e.definition?.text})]},e.id||t)),r]})}var o,s=e((()=>{t(),r(),o=n(),a.__docgenInfo={description:`DescriptionList component - renders a description list (dl/dt/dd).`,methods:[],displayName:`DescriptionList`,props:{className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`DescriptionItemData`}],raw:`DescriptionItemData[]`},description:`Description items`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content`}},composes:[`HTMLAttributes`]}})),c,l,u,d,f;e((()=>{s(),c={title:`Views/DescriptionList`,component:a,tags:[`autodocs`]},l={args:{items:[{term:{text:`Name`,classes:`text-sm text-neutral-dark`},definition:{text:`John Doe`}},{term:{text:`Email`,classes:`text-sm text-neutral-dark`},definition:{text:`john@example.com`}},{term:{text:`Phone`,classes:`text-sm text-neutral-dark`},definition:{text:`+34 612 345 678`}}]}},u={args:{items:[{term:{text:`Address`,classes:`text-sm text-neutral-dark`},definition:{html:`<strong>123 Main Street</strong><br/>Madrid, Spain`,classes:`text-base`}},{term:{text:`Website`,classes:`text-sm text-neutral-dark`},definition:{html:`<a href="https://example.com" class="text-primary-base underline">Visit website</a>`}}]}},d={args:{items:[{term:{text:`Status`,classes:`font-semibold`},definition:{text:`Active`,classes:`text-green-600 font-semibold`},classes:`mb-sm pb-sm border-b border-neutral-light`},{term:{text:`Role`,classes:`font-semibold`},definition:{text:`Administrator`,classes:`text-blue-600`},classes:`mb-sm pb-sm border-b border-neutral-light`},{term:{text:`Last Login`,classes:`font-semibold`},definition:{text:`2 hours ago`}}]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      term: {
        text: 'Name',
        classes: 'text-sm text-neutral-dark'
      },
      definition: {
        text: 'John Doe'
      }
    }, {
      term: {
        text: 'Email',
        classes: 'text-sm text-neutral-dark'
      },
      definition: {
        text: 'john@example.com'
      }
    }, {
      term: {
        text: 'Phone',
        classes: 'text-sm text-neutral-dark'
      },
      definition: {
        text: '+34 612 345 678'
      }
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      term: {
        text: 'Address',
        classes: 'text-sm text-neutral-dark'
      },
      definition: {
        html: '<strong>123 Main Street</strong><br/>Madrid, Spain',
        classes: 'text-base'
      }
    }, {
      term: {
        text: 'Website',
        classes: 'text-sm text-neutral-dark'
      },
      definition: {
        html: '<a href="https://example.com" class="text-primary-base underline">Visit website</a>'
      }
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      term: {
        text: 'Status',
        classes: 'font-semibold'
      },
      definition: {
        text: 'Active',
        classes: 'text-green-600 font-semibold'
      },
      classes: 'mb-sm pb-sm border-b border-neutral-light'
    }, {
      term: {
        text: 'Role',
        classes: 'font-semibold'
      },
      definition: {
        text: 'Administrator',
        classes: 'text-blue-600'
      },
      classes: 'mb-sm pb-sm border-b border-neutral-light'
    }, {
      term: {
        text: 'Last Login',
        classes: 'font-semibold'
      },
      definition: {
        text: '2 hours ago'
      }
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithHtmlContent`,`WithCustomClasses`]}))();export{l as Default,d as WithCustomClasses,u as WithHtmlContent,f as __namedExportsOrder,c as default};