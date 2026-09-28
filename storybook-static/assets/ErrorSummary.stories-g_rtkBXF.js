import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-BRtkut15.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({headingLevel:e,titleText:t,titleHtml:n}){let r=n?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}}):t,i=`mb-base font-bold`,a=`error-summary-title`;switch(e){case 1:return(0,s.jsx)(`h1`,{className:i,id:a,children:r});case 2:return(0,s.jsx)(`h2`,{className:i,id:a,children:r});case 3:return(0,s.jsx)(`h3`,{className:i,id:a,children:r});case 4:return(0,s.jsx)(`h4`,{className:i,id:a,children:r});case 5:return(0,s.jsx)(`h5`,{className:i,id:a,children:r});case 6:return(0,s.jsx)(`h6`,{className:i,id:a,children:r});default:return(0,s.jsx)(`h2`,{className:i,id:a,children:r})}}function o({titleText:e=`Hay un problema`,titleHtml:t,descriptionText:n,descriptionHtml:r,classes:o,id:c,errorList:l,headingLevel:u,children:d,className:f}){return(0,s.jsxs)(`div`,{id:c,className:i(`p-base bg-white border-2 border-alert-base`,o,f),tabIndex:-1,role:`alert`,"aria-labelledby":`error-summary-title`,children:[(0,s.jsx)(a,{headingLevel:u,titleText:e,titleHtml:t}),(0,s.jsxs)(`div`,{children:[(r||n)&&(0,s.jsx)(`p`,{className:`mb-base`,children:r?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:r}}):n}),l&&l.length>0&&(0,s.jsx)(`ul`,{className:`font-semibold text-alert-base`,children:l.map((e,t)=>{let n=e.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return e.fragment?(0,s.jsx)(`li`,{children:(0,s.jsx)(`a`,{href:`#${e.fragment}`,id:e.id,className:`c-link c-link--alert inline-block pb-sm`,children:n})},e.id||t):(0,s.jsx)(`li`,{children:n},e.id||t)})}),d]})]})}var s,c=e((()=>{t(),r(),s=n(),o.__docgenInfo={description:`ErrorSummary component - displays a summary of form errors with links to fields.
Used for accessible form validation feedback.`,methods:[],displayName:`ErrorSummary`,props:{titleText:{required:!1,tsType:{name:`string`},description:`Title text`,defaultValue:{value:`'Hay un problema'`,computed:!1}},titleHtml:{required:!1,tsType:{name:`string`},description:`Title HTML content`},descriptionText:{required:!1,tsType:{name:`string`},description:`Description text`},descriptionHtml:{required:!1,tsType:{name:`string`},description:`Description HTML content`},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},errorList:{required:!1,tsType:{name:`Array`,elements:[{name:`ErrorSummaryData`}],raw:`ErrorSummaryData[]`},description:`List of errors`},headingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`Heading level for the title`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child elements (for compound component pattern)`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),l,u,d,f,p,m,h;e((()=>{c(),l={title:`Nav/ErrorSummary`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays a summary of form errors with links to the corresponding fields. Used for accessible form validation feedback.`}}}},u={args:{titleText:`Problemas encontrados`,headingLevel:2,errorList:[{text:`El campo de Nombre no puede estar vacío.`,fragment:`#example-error-1`},{text:`El campo de Teléfono no es correcto. Introduce una cifra de, al menos, 9 dígitos.`,fragment:`#example-error-2`}]}},d={args:{titleText:`Título con h3`,headingLevel:3,errorList:[{text:`El campo de Nombre no puede estar vacío.`,fragment:`#example-error-1`},{text:`El campo de Teléfono no es correcto. Introduce una cifra de, al menos, 9 dígitos.`,fragment:`#example-error-2`}]}},f={args:{titleText:`Problemas encontrados`,headingLevel:2,errorList:[{text:`Nombre de usuario o contraseña incorrectos.`}]}},p={args:{titleText:`Problemas encontrados`,headingLevel:2,errorList:[{text:`Nombre de usuario o contraseña incorrectos.`},{text:`Acepta los términos del servicio para acceder.`,fragment:`#example-error-1`}]}},m={args:{titleText:`Problemas encontrados`,headingLevel:2,descriptionText:`Por favor, corrige los problemas siguientes.`,errorList:[{text:`Nombre de usuario o contraseña incorrectos.`},{text:`Acepta los términos del servicio para acceder.`,fragment:`#example-error-1`}]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    errorList: [{
      text: 'El campo de Nombre no puede estar vacío.',
      fragment: '#example-error-1'
    }, {
      text: 'El campo de Teléfono no es correcto. Introduce una cifra de, al menos, 9 dígitos.',
      fragment: '#example-error-2'
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    titleText: 'Título con h3',
    headingLevel: 3,
    errorList: [{
      text: 'El campo de Nombre no puede estar vacío.',
      fragment: '#example-error-1'
    }, {
      text: 'El campo de Teléfono no es correcto. Introduce una cifra de, al menos, 9 dígitos.',
      fragment: '#example-error-2'
    }]
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    errorList: [{
      text: 'Nombre de usuario o contraseña incorrectos.'
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    errorList: [{
      text: 'Nombre de usuario o contraseña incorrectos.'
    }, {
      text: 'Acepta los términos del servicio para acceder.',
      fragment: '#example-error-1'
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    titleText: 'Problemas encontrados',
    headingLevel: 2,
    descriptionText: 'Por favor, corrige los problemas siguientes.',
    errorList: [{
      text: 'Nombre de usuario o contraseña incorrectos.'
    }, {
      text: 'Acepta los términos del servicio para acceder.',
      fragment: '#example-error-1'
    }]
  }
}`,...m.parameters?.docs?.source}}},h=[`PorDefecto`,`ConEncabezadoDeNivel3`,`SinEnlaces`,`ConYSinEnlaces`,`ConTodo`]}))();export{d as ConEncabezadoDeNivel3,m as ConTodo,p as ConYSinEnlaces,u as PorDefecto,f as SinEnlaces,h as __namedExportsOrder,l as default};