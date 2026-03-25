import{n as e}from"./chunk-BneVvdWh.js";import{n as t,t as n}from"./MenuNavigation-Cej_lP27.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Navigation/MenuNavigation`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Menu navigation component with keyboard navigation, dropdown sub-menus, and support for checkbox/radio menu items.`}}}},i={args:{ariaLabel:`Menú principal`,items:[{text:`Inicio`,href:`/`},{text:`Trámites`,href:`/tramites`},{text:`Empresas`,href:`/empresas`},{text:`Contacto`,href:`/contacto`}]}},a={args:{ariaLabel:`Menú principal con submenús`,items:[{text:`Trámites`,href:`/tramites`},{text:`Empresas`,sub:{ariaLabel:`Submenú de empresas`,items:[{id:`alta`,text:`Alta de empresa`,href:`/empresas/alta`},{id:`modificar`,text:`Modificar datos`,href:`/empresas/modificar`},{id:`sep1`,divider:!0},{id:`certificados`,text:`Certificados`,href:`/empresas/certificados`}]}},{text:`Ayuda`,href:`/ayuda`}]}},o={args:{ariaLabel:`Menú con item activo`,items:[{text:`Inicio`,href:`/`},{text:`Trámites`,href:`/tramites`},{text:`Empresas`,href:`/empresas`,active:!0}]}},s={args:{ariaLabel:`Menú con item deshabilitado`,items:[{text:`Activo`,href:`#`},{text:`Deshabilitado`,href:`#`,disabled:!0},{text:`Otro`,href:`#`}]}},c={args:{ariaLabel:`Menú con casillas de verificación`,items:[{text:`Preferencias`,sub:{items:[{id:`notif`,text:`Recibir notificaciones`,role:`menuitemcheckbox`},{id:`newsletter`,text:`Suscribirse a newsletter`,role:`menuitemcheckbox`}]}},{text:`Salir`,href:`/logout`}]}},l={args:{ariaLabel:`Menú mixto con diferentes tipos de items`,items:[{text:`Inicio`,href:`/`,active:!0},{text:`Servicios`,sub:{items:[{id:`serv1`,text:`Servicio 1`,href:`/servicios/1`},{id:`serv2`,text:`Servicio 2`,href:`/servicios/2`,disabled:!0},{id:`sep`,divider:!0},{id:`serv3`,text:`Servicio 3`,href:`/servicios/3`}]}},{text:`Trámites`,href:`/tramites`},{text:`Documentación`,href:`/docs`,disabled:!0}]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Menú principal',
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Empresas',
      href: '/empresas'
    }, {
      text: 'Contacto',
      href: '/contacto'
    }]
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Menú principal con submenús',
    items: [{
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Empresas',
      sub: {
        ariaLabel: 'Submenú de empresas',
        items: [{
          id: 'alta',
          text: 'Alta de empresa',
          href: '/empresas/alta'
        }, {
          id: 'modificar',
          text: 'Modificar datos',
          href: '/empresas/modificar'
        }, {
          id: 'sep1',
          divider: true
        }, {
          id: 'certificados',
          text: 'Certificados',
          href: '/empresas/certificados'
        }]
      }
    }, {
      text: 'Ayuda',
      href: '/ayuda'
    }]
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Menú con item activo',
    items: [{
      text: 'Inicio',
      href: '/'
    }, {
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Empresas',
      href: '/empresas',
      active: true
    }]
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Menú con item deshabilitado',
    items: [{
      text: 'Activo',
      href: '#'
    }, {
      text: 'Deshabilitado',
      href: '#',
      disabled: true
    }, {
      text: 'Otro',
      href: '#'
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Menú con casillas de verificación',
    items: [{
      text: 'Preferencias',
      sub: {
        items: [{
          id: 'notif',
          text: 'Recibir notificaciones',
          role: 'menuitemcheckbox'
        }, {
          id: 'newsletter',
          text: 'Suscribirse a newsletter',
          role: 'menuitemcheckbox'
        }]
      }
    }, {
      text: 'Salir',
      href: '/logout'
    }]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Menú mixto con diferentes tipos de items',
    items: [{
      text: 'Inicio',
      href: '/',
      active: true
    }, {
      text: 'Servicios',
      sub: {
        items: [{
          id: 'serv1',
          text: 'Servicio 1',
          href: '/servicios/1'
        }, {
          id: 'serv2',
          text: 'Servicio 2',
          href: '/servicios/2',
          disabled: true
        }, {
          id: 'sep',
          divider: true
        }, {
          id: 'serv3',
          text: 'Servicio 3',
          href: '/servicios/3'
        }]
      }
    }, {
      text: 'Trámites',
      href: '/tramites'
    }, {
      text: 'Documentación',
      href: '/docs',
      disabled: true
    }]
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`WithSubMenus`,`WithActiveItem`,`WithDisabledItem`,`WithCheckboxItems`,`MixedNavigation`]}))();export{i as Default,l as MixedNavigation,o as WithActiveItem,c as WithCheckboxItems,s as WithDisabledItem,a as WithSubMenus,u as __namedExportsOrder,r as default};