import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-Db8mzpb1.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";import{n as a,t as o}from"./SkipLink-C19jT3Kq.js";import{n as s,t as c}from"./MenuNavigation-Cej_lP27.js";import{n as l,t as u}from"./Nav-U4v-PdYJ.js";function d({url:e,alt:t,href:n,fragment:r,routerLink:a,target:o,classes:s,type:c=x.Title}){let l=i(s||(()=>{switch(c){case x.Super:case x.Sub:return`absolute top-6 left-0 focus:outline-hidden focus:shadow-outline-black`;case x.Title:default:return`focus:outline-hidden focus:ring-4 focus:ring-inset focus:ring-black focus:bg-warning-base`}})()),u=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`img`,{src:e,alt:t}),c===x.Title&&(0,b.jsx)(`div`,{className:`hidden lg:block mx-lg border-l border-current`})]}),d=`Ir a la página de inicio`;return a?(0,b.jsx)(`a`,{href:r?`${a}#${r}`:a,target:o,className:l,title:d,children:u}):(0,b.jsx)(`a`,{href:n||`/`,target:o,className:l,title:d,children:u})}function f({classes:e,backgroundFullColor:t,backgroundFullUrl:n,backgroundContainerUrl:r,logoUrl:a,logoAlt:o,logoHref:s,logoRouterLink:c,logoRouterLinkActiveClasses:l,logoTarget:u,logoFragment:f,logoClasses:p,children:m}){if(!(e||t||n))return(0,b.jsx)(b.Fragment,{children:m});let h={};t&&(h.backgroundColor=t),n&&(h.backgroundImage=`url(${n})`);let g={};return r&&(g.backgroundImage=`url(${r})`),(0,b.jsx)(`div`,{className:i(e||`h-32 bg-cover bg-center bg-no-repeat overflow-hidden`),style:h,children:(0,b.jsx)(`div`,{className:`container h-full mx-auto px-base`,children:(0,b.jsxs)(`div`,{className:`relative h-full bg-cover bg-no-repeat`,style:g,children:[a&&(0,b.jsx)(d,{url:a,alt:o,href:s,routerLink:c,routerLinkActiveClasses:l,target:u,fragment:f,classes:p,type:x.Super}),m]})})})}function p({classes:e,children:t}){return(0,b.jsx)(`p`,{className:i(e||`text-sm leading-5 lg:text-base lg:leading-6`),children:t})}function m({level:e=2,children:t,className:n}){return(0,b.jsx)(`h${e}`,{className:n,children:t})}function h({classes:e,headingLevel:t=2,homepageUrl:n,children:r}){return(0,b.jsx)(m,{level:t,className:e,children:(0,b.jsx)(`a`,{href:n||`/`,className:`hover:underline focus:outline-hidden focus:ring-4 focus:ring-inset focus:ring-black focus:bg-warning-base focus:text-black`,title:`Ir a la página de inicio`,children:r})})}function g({classes:e,backgroundColor:t,logoUrl:n,logoAlt:r,logoHref:a,logoRouterLink:o,logoRouterLinkActiveClasses:s,logoTarget:c,logoFragment:l,logoClasses:u,title:f,subtitle:p,customNavigation:m}){let h={};return t&&(h.backgroundColor=t),(0,b.jsx)(`div`,{className:i(e||`bg-heading-base bg-no-repeat bg-cover lg:bg-auto bg-center lg:bg-right bg-general lg:bg-general-lg text-white`),style:h,children:(0,b.jsx)(`div`,{className:`container mx-auto px-base`,children:(0,b.jsxs)(`div`,{className:`lg:flex lg:flex-wrap py-base lg:py-lg`,children:[n&&(0,b.jsx)(d,{url:n,alt:r,href:a,routerLink:o,routerLinkActiveClasses:s,target:c,fragment:l,classes:u,type:x.Title}),(0,b.jsxs)(`div`,{className:`flex lg:flex-1`,children:[(0,b.jsxs)(`div`,{children:[f,p]}),m]})]})})})}function _({classes:e,backgroundFullColor:t,backgroundFullUrl:n,backgroundContainerUrl:r,logoUrl:a,logoAlt:o,logoHref:s,logoRouterLink:c,logoRouterLinkActiveClasses:l,logoTarget:u,logoFragment:f,logoClasses:p,children:m}){if(!(e||t||n))return(0,b.jsx)(b.Fragment,{children:m});let h={};t&&(h.backgroundColor=t),n&&(h.backgroundImage=`url(${n})`);let g={};return r&&(g.backgroundImage=`url(${r})`),(0,b.jsx)(`div`,{className:i(e||`h-32 bg-cover bg-no-repeat overflow-hidden`),style:h,children:(0,b.jsx)(`div`,{className:`container h-full mx-auto px-base`,children:(0,b.jsxs)(`div`,{className:`relative h-full bg-cover bg-no-repeat`,style:g,children:[a&&(0,b.jsx)(d,{url:a,alt:o,href:s,routerLink:c,routerLinkActiveClasses:l,target:u,fragment:f,classes:p,type:x.Sub}),m]})})})}function v({classesContainer:e,classesTooltip:t,classes:n,items:r,children:a}){return(0,b.jsx)(`div`,{className:`flex items-center`,children:(0,b.jsxs)(`div`,{className:`relative`,children:[(0,b.jsx)(u,{hasNav:!1,idPrefix:`header-dropdown-nav-item`,classes:i(n||`c-dropdown--header`,t),id:`id-dropdown-nav`,items:r}),(0,b.jsx)(`span`,{className:i(`hidden lg:block`,e),children:a})]})})}function y({classes:e,containerClasses:t,skipLink:n,headerMini:r,superSlot:a,titleContainerSlot:s,navigationSlot:l,customNavigationSlot:u,dropdownSlot:d,offcanvasSlot:f,subSlot:p,navigationData:m,className:h}){let g=()=>n||(0,b.jsx)(o,{text:`Saltar al contenido principal`,id:`skip-link`}),_=()=>l||(!m?.items||m.items.length===0?null:(0,b.jsx)(`div`,{className:`-ml-base`,children:(0,b.jsx)(c,{idPrefix:m.idPrefix||`header-nav-item`,id:m.id||`header-nav-item`,items:m.items,classes:i(`hidden lg:block`,m.classes),ariaLabel:m.ariaLabel||`Menú principal`})}));return(0,b.jsx)(`header`,{className:i(e,h),children:(0,b.jsxs)(`div`,{className:i(t),children:[(0,b.jsx)(`nav`,{"aria-labelledby":`skip-link`,children:g()}),r,a,s,(0,b.jsx)(`div`,{className:`bg-neutral-lighter border-b border-neutral-base`,children:(0,b.jsx)(`div`,{className:`container mx-auto px-base`,children:(0,b.jsxs)(`div`,{className:`flex items-center justify-between min-h-14`,children:[(0,b.jsx)(`div`,{className:`flex flex-wrap items-center`,children:_()}),u,d,f]})})}),p]})})}var b,x,S=e((()=>{t(),r(),a(),s(),l(),b=n(),x={Super:`Super`,Title:`Title`,Sub:`Sub`},d.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedLogo`,props:{url:{required:!1,tsType:{name:`string`},description:``},alt:{required:!1,tsType:{name:`string`},description:``},href:{required:!1,tsType:{name:`string`},description:``},fragment:{required:!1,tsType:{name:`string`},description:``},routerLink:{required:!1,tsType:{name:`string`},description:``},routerLinkActiveClasses:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:``},target:{required:!1,tsType:{name:`string`},description:``},classes:{required:!1,tsType:{name:`string`},description:``},type:{required:!1,tsType:{name:`HeaderAdvancedLogoType`},description:``,defaultValue:{value:`'Title'`,computed:!1}}}},f.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedSuper`,props:{classes:{required:!1,tsType:{name:`string`},description:``},backgroundFullColor:{required:!1,tsType:{name:`string`},description:``},backgroundFullUrl:{required:!1,tsType:{name:`string`},description:``},backgroundContainerUrl:{required:!1,tsType:{name:`string`},description:``},logoUrl:{required:!1,tsType:{name:`string`},description:``},logoAlt:{required:!1,tsType:{name:`string`},description:``},logoHref:{required:!1,tsType:{name:`string`},description:``},logoRouterLink:{required:!1,tsType:{name:`string`},description:``},logoRouterLinkActiveClasses:{required:!1,tsType:{name:`string`},description:``},logoTarget:{required:!1,tsType:{name:`string`},description:``},logoFragment:{required:!1,tsType:{name:`string`},description:``},logoClasses:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}},p.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedSubtitle`,props:{classes:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}},m.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedHeading`,props:{level:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},h.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedTitle`,props:{classes:{required:!1,tsType:{name:`string`},description:``},headingLevel:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2`,computed:!1}},homepageUrl:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}},g.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedTitleContainer`,props:{classes:{required:!1,tsType:{name:`string`},description:``},backgroundColor:{required:!1,tsType:{name:`string`},description:``},logoUrl:{required:!1,tsType:{name:`string`},description:``},logoAlt:{required:!1,tsType:{name:`string`},description:``},logoHref:{required:!1,tsType:{name:`string`},description:``},logoRouterLink:{required:!1,tsType:{name:`string`},description:``},logoRouterLinkActiveClasses:{required:!1,tsType:{name:`string`},description:``},logoTarget:{required:!1,tsType:{name:`string`},description:``},logoFragment:{required:!1,tsType:{name:`string`},description:``},logoClasses:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`ReactNode`},description:``},subtitle:{required:!1,tsType:{name:`ReactNode`},description:``},customNavigation:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedSub`,props:{classes:{required:!1,tsType:{name:`string`},description:``},backgroundFullColor:{required:!1,tsType:{name:`string`},description:``},backgroundFullUrl:{required:!1,tsType:{name:`string`},description:``},backgroundContainerUrl:{required:!1,tsType:{name:`string`},description:``},logoUrl:{required:!1,tsType:{name:`string`},description:``},logoAlt:{required:!1,tsType:{name:`string`},description:``},logoHref:{required:!1,tsType:{name:`string`},description:``},logoRouterLink:{required:!1,tsType:{name:`string`},description:``},logoRouterLinkActiveClasses:{required:!1,tsType:{name:`string`},description:``},logoTarget:{required:!1,tsType:{name:`string`},description:``},logoFragment:{required:!1,tsType:{name:`string`},description:``},logoClasses:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}},v.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvancedDropdown`,props:{classesContainer:{required:!1,tsType:{name:`string`},description:``},classesTooltip:{required:!1,tsType:{name:`string`},description:``},classes:{required:!1,tsType:{name:`string`},description:``},items:{required:!1,tsType:{name:`Array`,elements:[{name:`NavItemData`}],raw:`NavItemData[]`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``}}},y.__docgenInfo={description:``,methods:[],displayName:`HeaderAdvanced`,props:{classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the root element`},containerClasses:{required:!1,tsType:{name:`string`},description:`Custom CSS classes for the container element`},skipLink:{required:!1,tsType:{name:`ReactNode`},description:`Content for skip link slot`},headerMini:{required:!1,tsType:{name:`ReactNode`},description:`Content for header mini slot`},superSlot:{required:!1,tsType:{name:`ReactNode`},description:`Content for super section slot`},titleContainerSlot:{required:!1,tsType:{name:`ReactNode`},description:`Content for title container slot`},navigationSlot:{required:!1,tsType:{name:`ReactNode`},description:`Content for navigation slot`},customNavigationSlot:{required:!1,tsType:{name:`ReactNode`},description:`Content for custom navigation slot`},dropdownSlot:{required:!1,tsType:{name:`ReactNode`},description:`Content for dropdown slot`},offcanvasSlot:{required:!1,tsType:{name:`ReactNode`},description:`Content for offcanvas slot`},subSlot:{required:!1,tsType:{name:`ReactNode`},description:`Content for sub section slot`},navigationData:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
  items?: MenuNavigationItem[];
  classes?: string;
  id?: string;
  ariaLabel?: string;
  idPrefix?: string;
}`,signature:{properties:[{key:`items`,value:{name:`Array`,elements:[{name:`MenuNavigationItem`}],raw:`MenuNavigationItem[]`,required:!1}},{key:`classes`,value:{name:`string`,required:!1}},{key:`id`,value:{name:`string`,required:!1}},{key:`ariaLabel`,value:{name:`string`,required:!1}},{key:`idPrefix`,value:{name:`string`,required:!1}}]}},description:`Navigation data`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),C,w,T,E,D,O,k,A,j,M;e((()=>{S(),C=n(),w={title:`Navigation/HeaderAdvanced`,component:y,tags:[`autodocs`],parameters:{docs:{description:{component:`Advanced header component with super section, title container, navigation, and dropdown slots.`}}}},T=[{text:`Inicio`,href:`/`},{text:`Trámites`,href:`/tramites`},{text:`Empresas`,sub:{items:[{id:`alta`,text:`Alta de empresa`,href:`/empresas/alta`},{id:`modificar`,text:`Modificar datos`,href:`/empresas/modificar`},{divider:!0},{id:`certificados`,text:`Certificados`,href:`/empresas/certificados`}]}},{text:`Ayuda`,href:`/ayuda`}],E={args:{navigationData:{items:T}}},D={args:{navigationData:{items:T},titleContainerSlot:(0,C.jsx)(`div`,{className:`bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base`,children:(0,C.jsxs)(`div`,{className:`container mx-auto`,children:[(0,C.jsx)(`h2`,{className:`text-2xl lg:text-3xl font-bold mb-1`,children:(0,C.jsx)(`a`,{href:`/`,title:`Ir a la página de inicio`,children:`Portal de Empresas`})}),(0,C.jsx)(`p`,{className:`text-sm lg:text-base opacity-90`,children:`Gestión integral de trámites empresariales`})]})})}},O={args:{navigationData:{items:T},superSlot:(0,C.jsx)(`div`,{className:`bg-primary-dark text-white py-2`,children:(0,C.jsx)(`div`,{className:`container mx-auto px-base text-sm`,children:`Bienvenido al Portal de Trámites del Gobierno de Aragón`})}),titleContainerSlot:(0,C.jsx)(`div`,{className:`bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base`,children:(0,C.jsx)(`div`,{className:`container mx-auto`,children:(0,C.jsx)(`h2`,{className:`text-2xl lg:text-3xl font-bold`,children:(0,C.jsx)(`a`,{href:`/`,title:`Ir a la página de inicio`,children:`Servicio de Gestión`})})})})}},k={args:{navigationData:{items:T},superSlot:(0,C.jsx)(`div`,{className:`bg-primary-dark text-white py-2`,children:(0,C.jsxs)(`div`,{className:`container mx-auto px-base text-sm flex justify-between`,children:[(0,C.jsx)(`span`,{children:`Portal del Gobierno de Aragón`}),(0,C.jsx)(`span`,{children:`Accesibilidad | Alta contraste`})]})}),titleContainerSlot:(0,C.jsx)(`div`,{className:`bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base`,children:(0,C.jsxs)(`div`,{className:`container mx-auto`,children:[(0,C.jsx)(`h1`,{className:`text-2xl lg:text-3xl font-bold mb-1`,children:(0,C.jsx)(`a`,{href:`/`,title:`Ir a la página de inicio`,children:`Gestión de Trámites`})}),(0,C.jsx)(`p`,{className:`text-sm lg:text-base opacity-90`,children:`Acceda a todos los servicios de forma sencilla`})]})}),subSlot:(0,C.jsx)(`div`,{className:`bg-neutral-lighter border-b border-neutral-base py-sm`,children:(0,C.jsx)(`div`,{className:`container mx-auto px-base text-sm`,children:(0,C.jsxs)(`nav`,{className:`flex gap-base`,children:[(0,C.jsx)(`a`,{href:`/`,className:`text-primary-dark hover:underline`,children:`Inicio`}),(0,C.jsx)(`a`,{href:`/tramites`,className:`text-neutral-dark hover:underline`,children:`Trámites`}),(0,C.jsx)(`a`,{href:`/empresas`,className:`text-neutral-dark hover:underline`,children:`Empresas`})]})})})}},A={args:{navigationData:{items:T},customNavigationSlot:(0,C.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,C.jsx)(`button`,{className:`text-sm px-base py-sm hover:bg-neutral-light rounded`,children:`Notificaciones`}),(0,C.jsx)(`button`,{className:`text-sm px-base py-sm bg-primary-dark text-white rounded hover:bg-primary-darker`,children:`Nuevo trámite`})]}),dropdownSlot:(0,C.jsxs)(`div`,{className:`flex items-center`,children:[(0,C.jsx)(`span`,{className:`text-sm mr-2`,children:`María García`}),(0,C.jsx)(`div`,{className:`relative`,children:(0,C.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-primary-base flex items-center justify-center text-white text-sm font-bold`,children:`MG`})})]})}},j={args:{navigationData:{items:[{text:`Inicio`,href:`/`,active:!0},{text:`Servicios`,href:`/servicios`},{text:`Contacto`,href:`/contacto`}]}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    navigationData: {
      items: navigationItems
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    navigationData: {
      items: navigationItems
    },
    titleContainerSlot: <div className="bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-1">
            <a href="/" title="Ir a la página de inicio">Portal de Empresas</a>
          </h2>
          <p className="text-sm lg:text-base opacity-90">
            Gestión integral de trámites empresariales
          </p>
        </div>
      </div>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    navigationData: {
      items: navigationItems
    },
    superSlot: <div className="bg-primary-dark text-white py-2">
        <div className="container mx-auto px-base text-sm">
          Bienvenido al Portal de Trámites del Gobierno de Aragón
        </div>
      </div>,
    titleContainerSlot: <div className="bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base">
        <div className="container mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold">
            <a href="/" title="Ir a la página de inicio">Servicio de Gestión</a>
          </h2>
        </div>
      </div>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    navigationData: {
      items: navigationItems
    },
    superSlot: <div className="bg-primary-dark text-white py-2">
        <div className="container mx-auto px-base text-sm flex justify-between">
          <span>Portal del Gobierno de Aragón</span>
          <span>Accesibilidad | Alta contraste</span>
        </div>
      </div>,
    titleContainerSlot: <div className="bg-heading-base bg-no-repeat bg-cover bg-center text-white py-base lg:py-lg px-base">
        <div className="container mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold mb-1">
            <a href="/" title="Ir a la página de inicio">Gestión de Trámites</a>
          </h1>
          <p className="text-sm lg:text-base opacity-90">
            Acceda a todos los servicios de forma sencilla
          </p>
        </div>
      </div>,
    subSlot: <div className="bg-neutral-lighter border-b border-neutral-base py-sm">
        <div className="container mx-auto px-base text-sm">
          <nav className="flex gap-base">
            <a href="/" className="text-primary-dark hover:underline">Inicio</a>
            <a href="/tramites" className="text-neutral-dark hover:underline">Trámites</a>
            <a href="/empresas" className="text-neutral-dark hover:underline">Empresas</a>
          </nav>
        </div>
      </div>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    navigationData: {
      items: navigationItems
    },
    customNavigationSlot: <div className="flex items-center gap-4">
        <button className="text-sm px-base py-sm hover:bg-neutral-light rounded">
          Notificaciones
        </button>
        <button className="text-sm px-base py-sm bg-primary-dark text-white rounded hover:bg-primary-darker">
          Nuevo trámite
        </button>
      </div>,
    dropdownSlot: <div className="flex items-center">
        <span className="text-sm mr-2">María García</span>
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-primary-base flex items-center justify-center text-white text-sm font-bold">
            MG
          </div>
        </div>
      </div>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    navigationData: {
      items: [{
        text: 'Inicio',
        href: '/',
        active: true
      }, {
        text: 'Servicios',
        href: '/servicios'
      }, {
        text: 'Contacto',
        href: '/contacto'
      }]
    }
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithTitleContainer`,`WithSuperSection`,`FullLayout`,`WithCustomNavigation`,`Minimal`]}))();export{E as Default,k as FullLayout,j as Minimal,A as WithCustomNavigation,O as WithSuperSection,D as WithTitleContainer,M as __namedExportsOrder,w as default};