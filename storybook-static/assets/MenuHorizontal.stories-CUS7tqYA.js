import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./clsx-Bs4OuGzP.js";function i({id:e,idPrefix:t=`menu-item`,items:n,classes:i,onClick:o,className:s}){let c=r(`c-menu-horizontal`,i,s),l=(e,t)=>{t.active||=(n?.forEach(e=>{e.active=!1}),!0),o?.(e,t)};return(0,a.jsx)(`nav`,{id:e,className:c,children:(0,a.jsx)(`ul`,{className:`c-menu-horizontal__list lg:flex lg:flex-wrap`,children:n?.map((e,n)=>{let i=e.id||`${t}-${n+1}`,o=e.html?(0,a.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text,s={id:i,className:r(`c-menu-horizontal__link`,`relative`,`flex`,`items-center`,`px-base`,`py-sm`,`lg:py-base`,`border`,`border-transparent`,`text-black`,`hover:text-primary-base`,`underline`,`truncate`,`focus:outline-hidden`,e.disabled&&`no-underline pointer-events-none`,e.active&&`c-menu-horizontal__active`,e.classes),"aria-disabled":e.disabled??void 0,tabIndex:e.disabled?-1:e.tabindex},c=e.active?(0,a.jsx)(`strong`,{className:`flex items-center pointer-events-none font-bold`,children:o}):(0,a.jsx)(`span`,{className:`flex items-center pointer-events-none`,children:o});return(0,a.jsx)(`li`,{children:e.routerLink&&!e.href?(0,a.jsx)(`a`,{href:e.routerLink,onClick:t=>l(t,e),...s,children:c}):(0,a.jsx)(`a`,{href:e.href||`#`,onClick:t=>l(t,e),target:e.target,...s,children:c})},e.id||n)})})})}var a,o=e((()=>{n(),a=t(),i.__docgenInfo={description:`MenuHorizontal component - displays a horizontal navigation menu.`,methods:[],displayName:`MenuHorizontal`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},idPrefix:{required:!1,tsType:{name:`string`},description:`Prefix for auto-generated IDs`,defaultValue:{value:`'menu-item'`,computed:!1}},items:{required:!1,tsType:{name:`Array`,elements:[{name:`MenuHorizontalItemData`}],raw:`MenuHorizontalItemData[]`},description:`Array of menu items`},classes:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: React.MouseEvent, item: MenuHorizontalItemData) => void`,signature:{arguments:[{type:{name:`ReactMouseEvent`,raw:`React.MouseEvent`},name:`event`},{type:{name:`MenuHorizontalItemData`},name:`item`}],return:{name:`void`}}},description:`Click event handler`},className:{required:!1,tsType:{name:`string`},description:`Additional class name`}}}})),s,c,l,u,d,f;e((()=>{o(),s={title:`Nav/MenuHorizontal`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Displays a horizontal navigation menu.`}}}},c={args:{items:[{text:`Inicio`,routerLink:`/`},{text:`Trámites`,routerLink:`/tramites`},{text:`Empresas`,routerLink:`/empresas`},{text:`Ayuda`,routerLink:`/ayuda`}]}},l={args:{items:[{text:`Inicio`,routerLink:`/`},{text:`Trámites`,routerLink:`/tramites`,active:!0},{text:`Empresas`,routerLink:`/empresas`}]}},u={args:{items:[{text:`Inicio`,routerLink:`/`},{text:`Trámites`,routerLink:`/tramites`},{text:`Beta`,routerLink:`#`,disabled:!0}]}},d={args:{items:[{text:`Inicio`,href:`/`},{text:`Documentación`,href:`/docs`},{text:`API`,href:`/api`}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      routerLink: '/'
    }, {
      text: 'Trámites',
      routerLink: '/tramites'
    }, {
      text: 'Empresas',
      routerLink: '/empresas'
    }, {
      text: 'Ayuda',
      routerLink: '/ayuda'
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      routerLink: '/'
    }, {
      text: 'Trámites',
      routerLink: '/tramites',
      active: true
    }, {
      text: 'Empresas',
      routerLink: '/empresas'
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      routerLink: '/'
    }, {
      text: 'Trámites',
      routerLink: '/tramites'
    }, {
      text: 'Beta',
      routerLink: '#',
      disabled: true
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Documentación',
      href: '/docs'
    }, {
      text: 'API',
      href: '/api'
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithActiveItem`,`WithDisabledItem`,`WithHref`]}))();export{c as Default,l as WithActiveItem,u as WithDisabledItem,d as WithHref,f as __namedExportsOrder,s as default};