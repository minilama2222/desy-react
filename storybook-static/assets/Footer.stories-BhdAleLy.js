import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-Db8mzpb1.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({srOnly:e}){return(0,l.jsx)(`span`,{className:`c-footer__logo c-footer__logo--feder`,children:(0,l.jsx)(`span`,{className:e?`sr-only`:void 0,children:`Cofinanciado por la Unión Europea. Fondo Europeo de Desarrollo Regional (FEDER). Ministerio de Hacienda.`})})}function o({type:e}){switch(e){case`UE`:return(0,l.jsx)(`span`,{className:`c-footer__logo c-footer__logo--ue`,children:(0,l.jsx)(`span`,{className:`sr-only`,children:`Cofinanciado por la Unión Europea.`})});case`FSE`:return(0,l.jsx)(`span`,{className:`c-footer__logo c-footer__logo--fse`,children:(0,l.jsx)(`span`,{className:`sr-only`,children:`Cofinanciado por la Unión Europea. Fondo Social Europeo Plus (FSE+). Ministerio de Agricultura y Economía Social.`})});case`FEDER`:default:return(0,l.jsx)(a,{});case`FEADER`:return(0,l.jsx)(`span`,{className:`c-footer__logo c-footer__logo--feader`,children:(0,l.jsx)(`span`,{className:`sr-only`,children:`Cofinanciado por la Unión Europea. Fondo Europeo Agrario de Desarrollo Rural (FEADER). Ministerio de Agricultura, Pesca y Alimentación.`})});case`Plurifondo`:return(0,l.jsx)(`span`,{className:`c-footer__logo c-footer__logo--plurifondo`,children:(0,l.jsx)(`span`,{className:`sr-only`,children:`Cofinanciado por la Unión Europea. Plurifondo. Gobierno de España.`})})}}function s({nav:e}){let t=e.columns?{1:`lg:columns-1`,2:`lg:columns-2`,3:`lg:columns-3`,4:`lg:columns-4`,5:`lg:columns-5`,6:`lg:columns-6`,7:`lg:columns-7`,8:`lg:columns-8`}[e.columns]:``;return(0,l.jsxs)(`div`,{className:`flex-1`,children:[(0,l.jsx)(`div`,{className:e.classes||`flex-1`,children:(0,l.jsx)(`h3`,{className:`c-h4 mb-base text-black`,children:e.title})}),e.items&&e.items.length>0&&(0,l.jsx)(`ul`,{className:i(`relative space-y-base`,t),children:e.items.map((e,t)=>{let n=e.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return e.href?(0,l.jsx)(`li`,{className:`mb-xs`,children:(0,l.jsx)(`a`,{href:e.href,target:e.target,className:`c-link font-semibold`,children:n})},e.id||t):e.routerLink?(0,l.jsx)(`li`,{className:`mb-xs`,children:(0,l.jsx)(`a`,{href:e.routerLink,className:`c-link font-semibold`,children:n})},e.id||t):(0,l.jsx)(`li`,{className:`mb-xs c-link font-semibold`,children:n},e.id||t)})})]})}function c({meta:e,navigation:t,iconHtml:n,containerClasses:r,classes:a,descriptionText:c,descriptionHtml:y,noLogo:b,url:x,logoContainerClasses:S,type:C=`FEDER`,children:w,className:T}){let E=i(`py-base bg-neutral-lighter border-t border-neutral-base text-xs lg:text-sm text-neutral-dark`,a,T),D=x||v;return(0,l.jsx)(`footer`,{className:E,children:(0,l.jsxs)(`div`,{className:i(`container mx-auto px-base`,r),children:[t&&t.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`h2`,{className:`sr-only`,children:`Menú de pie de página`}),(0,l.jsx)(`div`,{className:`flex flex-col lg:flex-row flex-wrap gap-base`,children:t.map((e,t)=>(0,l.jsx)(s,{nav:e},t))}),(0,l.jsx)(`hr`,{className:`my-base border-t border-neutral-base`})]}),(0,l.jsx)(`div`,{className:`flex flex-wrap flex-col lg:flex-row justify-between`,children:(0,l.jsxs)(`div`,{className:`mb-base`,children:[e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`h2`,{className:`sr-only`,children:e.visuallyHiddenTitle||`Enlaces de pie de página`}),e.items&&e.items.length>0&&(0,l.jsx)(`ul`,{className:`flex flex-col lg:flex-row lg:flex-wrap mb-base`,children:e.items.map((e,t)=>{let n=e.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text;return(0,l.jsx)(`li`,{className:`mb-sm mr-base`,children:e.href?(0,l.jsx)(`a`,{href:e.href,target:e.target,className:`c-link font-semibold`,children:n}):(0,l.jsx)(`a`,{href:e.routerLink||`#`,className:`c-link font-semibold`,children:n})},e.id||t)})}),e.html&&(0,l.jsx)(`div`,{className:`mb-sm`,children:(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}})})]}),y||c?(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h2`,{className:`sr-only`,children:`Acerca de`}),y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):(0,l.jsx)(`p`,{children:c})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`div`,{className:`leading-tight`,children:(0,l.jsxs)(`p`,{children:[h,` `,(0,l.jsxs)(`a`,{href:g,rel:`license`,target:`_blank`,className:`c-link c-link--neutral`,title:`Se abre en ventana nueva`,children:[`licencia `,_]})]})}),(0,l.jsx)(`div`,{className:`leading-tight`,children:(0,l.jsxs)(`p`,{children:[(0,l.jsx)(`a`,{target:`_blank`,className:`c-link c-link--neutral`,href:d,title:`Se abre en ventana nueva`,children:u}),`. `,f,`. `,p,` - Teléfono:`,(0,l.jsx)(`a`,{href:`tel:${m.replace(/\s/g,``)}`,className:`c-link c-link--neutral`,children:m})]})})]})]})}),(0,l.jsx)(`div`,{className:`overflow-hidden`,children:(0,l.jsxs)(`div`,{className:`flex flex-wrap gap-base lg:gap-x-2xl w-full pt-lg`,children:[!b&&(0,l.jsx)(`div`,{className:S,children:(0,l.jsx)(`p`,{children:(0,l.jsx)(`a`,{href:D,className:`inline-block text-sm c-link no-underline`,title:`Más información sobre los Fondos Europeos`,children:(0,l.jsx)(o,{type:C})})})}),n&&(0,l.jsx)(`div`,{className:i(n?`flex-1`:``),children:(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n}})})]})}),w]})})}var l,u,d,f,p,m,h,g,_,v,y=e((()=>{t(),r(),l=n(),u=`Gobierno de España`,d=`https://www.la-moncloa.es`,f=`Complex de la Moncloa`,p=`Madrid`,m=`+34 91 321 60 00`,h=`Salvo donde se indique lo contrario, todos los contenidos publicados en este sitio web tienen licencia`,g=`https://creativecommons.org/licenses/by/4.0/deed.es`,_=`Creative Commons Reconocimiento 4.0 Internacional`,v=`https://fundosefsp.gob.es/`,c.__docgenInfo={description:`Footer component - displays the site footer with navigation, meta links, and EU funding logo.`,methods:[],displayName:`Footer`,props:{meta:{required:!1,tsType:{name:`FooterMetaData`},description:`Meta data (bottom links)`},navigation:{required:!1,tsType:{name:`Array`,elements:[{name:`FooterNavigationData`}],raw:`FooterNavigationData[]`},description:`Navigation sections`},iconHtml:{required:!1,tsType:{name:`string`},description:`Icon HTML content`},containerClasses:{required:!1,tsType:{name:`string`},description:`Container CSS classes`},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},descriptionText:{required:!1,tsType:{name:`string`},description:`Description text`},descriptionHtml:{required:!1,tsType:{name:`string`},description:`Description HTML content`},noLogo:{required:!1,tsType:{name:`boolean`},description:`Hide the logo`},url:{required:!1,tsType:{name:`string`},description:`Logo URL`},logoContainerClasses:{required:!1,tsType:{name:`string`},description:`Logo container CSS classes`},type:{required:!1,tsType:{name:`union`,raw:`FooterLogoType | string`,elements:[{name:`union`,raw:`'UE' | 'FEDER' | 'FEADER' | 'FSE' | 'Plurifondo' | 'Custom'`,elements:[{name:`literal`,value:`'UE'`},{name:`literal`,value:`'FEDER'`},{name:`literal`,value:`'FEADER'`},{name:`literal`,value:`'FSE'`},{name:`literal`,value:`'Plurifondo'`},{name:`literal`,value:`'Custom'`}]},{name:`string`}]},description:`Logo type`,defaultValue:{value:`'FEDER'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Child elements (for compound component pattern)`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),b,x,S,C,w,T,E;e((()=>{y(),b={title:`Nav/Footer`,component:c,tags:[`autodocs`],parameters:{docs:{description:{component:`Site footer with navigation, meta links, and EU funding logo.`}}}},x={args:{}},S={args:{navigation:[{title:`Gobierno`,items:[{text:`Portal de la Administración`,href:`#`},{text:`Administraciones Públicas`,href:`#`},{text:`Función Pública`,href:`#`}]},{title:`Normativa`,items:[{text:`Legislación`,href:`#`},{text:`Reglamentos`,href:`#`},{text:`Órganos consultivos`,href:`#`}]},{title:`Servicios`,items:[{text:`Atención al ciudadano`,href:`#`},{text:`Cita previa`,href:`#`},{text:`Oficinas`,href:`#`}]}]}},C={args:{navigation:[{title:`Ayuda`,items:[{text:`Preguntas frecuentes`,href:`#faq`},{text:`Contacto`,href:`#contacto`}]}],meta:{visuallyHiddenTitle:`Enlaces legales`,items:[{text:`Accesibilidad`,href:`#accesibilidad`},{text:`Mapa del sitio`,href:`#mapa`},{text:`Aviso legal`,href:`#aviso`},{text:`Protección de datos`,href:`#privacidad`},{text:`Cookies`,href:`#cookies`}]}}},w={args:{noLogo:!0,meta:{items:[{text:`Accesibilidad`,href:`#`},{text:`Aviso legal`,href:`#`}]}}},T={args:{type:`FEADER`,meta:{items:[{text:`Accesibilidad`,href:`#`},{text:`Aviso legal`,href:`#`}]}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: [{
      title: 'Gobierno',
      items: [{
        text: 'Portal de la Administración',
        href: '#'
      }, {
        text: 'Administraciones Públicas',
        href: '#'
      }, {
        text: 'Función Pública',
        href: '#'
      }]
    }, {
      title: 'Normativa',
      items: [{
        text: 'Legislación',
        href: '#'
      }, {
        text: 'Reglamentos',
        href: '#'
      }, {
        text: 'Órganos consultivos',
        href: '#'
      }]
    }, {
      title: 'Servicios',
      items: [{
        text: 'Atención al ciudadano',
        href: '#'
      }, {
        text: 'Cita previa',
        href: '#'
      }, {
        text: 'Oficinas',
        href: '#'
      }]
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    navigation: [{
      title: 'Ayuda',
      items: [{
        text: 'Preguntas frecuentes',
        href: '#faq'
      }, {
        text: 'Contacto',
        href: '#contacto'
      }]
    }],
    meta: {
      visuallyHiddenTitle: 'Enlaces legales',
      items: [{
        text: 'Accesibilidad',
        href: '#accesibilidad'
      }, {
        text: 'Mapa del sitio',
        href: '#mapa'
      }, {
        text: 'Aviso legal',
        href: '#aviso'
      }, {
        text: 'Protección de datos',
        href: '#privacidad'
      }, {
        text: 'Cookies',
        href: '#cookies'
      }]
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    noLogo: true,
    meta: {
      items: [{
        text: 'Accesibilidad',
        href: '#'
      }, {
        text: 'Aviso legal',
        href: '#'
      }]
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'FEADER',
    meta: {
      items: [{
        text: 'Accesibilidad',
        href: '#'
      }, {
        text: 'Aviso legal',
        href: '#'
      }]
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithNavigation`,`WithMetaLinks`,`WithoutLogo`,`WithCustomLogoType`]}))();export{x as Default,T as WithCustomLogoType,C as WithMetaLinks,S as WithNavigation,w as WithoutLogo,E as __namedExportsOrder,b as default};