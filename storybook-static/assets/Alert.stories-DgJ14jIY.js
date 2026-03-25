import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-CPGy17Pw.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";import{n as a,t as o}from"./Notification-H02SYy1i.js";function s({id:e,active:t=!1,classes:n,className:r,children:a}){return t?(0,c.jsx)(`div`,{id:e,className:i(n,r),role:`dialog`,"aria-live":`polite`,children:a}):null}var c,l=e((()=>{t(),r(),c=n(),s.__docgenInfo={description:`Alert component - a container that shows/hides content based on active state.
Typically used with Notification component for alert messages.`,methods:[],displayName:`Alert`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},active:{required:!1,tsType:{name:`boolean`},description:`Whether the alert is active/visible`,defaultValue:{value:`false`,computed:!1}},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the alert container`},className:{required:!1,tsType:{name:`string`},description:`Custom CSS classes`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child content (typically Notification component)`}}}})),u,d,f,p,m;e((()=>{l(),a(),u=n(),d={title:`Views/Alert`,component:s,tags:[`autodocs`]},f={args:{id:`success-id`,active:!0,children:(0,u.jsx)(o,{id:`default-id`,titleText:`El documento se ha cargado correctamente`,type:`success`,isDismissible:!0})}},p={args:{id:`alert-id`,active:!0,children:(0,u.jsx)(o,{id:`secondary-id`,titleText:`Problemas encontrados`,items:[{text:`Campo Nombre de la empresa está vacío`,href:`#empresa`},{text:`Campo Fecha de inicio de la actividad está vacío`,href:`#actividad`},{text:`El formato de correo electrónico es incorrecto`,href:`#email`}],type:`alert`,isDismissible:!0})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'success-id',
    active: true,
    children: <Notification id="default-id" titleText="El documento se ha cargado correctamente" type="success" isDismissible />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'alert-id',
    active: true,
    children: <Notification id="secondary-id" titleText="Problemas encontrados" items={[{
      text: 'Campo Nombre de la empresa está vacío',
      href: '#empresa'
    }, {
      text: 'Campo Fecha de inicio de la actividad está vacío',
      href: '#actividad'
    }, {
      text: 'El formato de correo electrónico es incorrecto',
      href: '#email'
    }]} type="alert" isDismissible />
  }
}`,...p.parameters?.docs?.source}}},m=[`AlertMostrandoUnaNotificacionDeExito`,`AlertMostrandoUnaNotificacionDeAlerta`]}))();export{p as AlertMostrandoUnaNotificacionDeAlerta,f as AlertMostrandoUnaNotificacionDeExito,m as __namedExportsOrder,d as default};