import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./Status-CH9XwEK3.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{n(),i=t(),a={title:`Views/Status`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Status indicator with icon and label supporting different status types.`}}},argTypes:{text:{control:`text`},type:{control:{type:`select`},options:[`success`,`alert`,`error`,`loading`,`info`]}}},o={args:{text:`Completado con éxito`,type:`success`}},s={args:{text:`Atención: datos incompletos`,type:`alert`}},c={args:{text:`Ha ocurrido un error`,type:`error`}},l={args:{text:`Cargando información`,type:`loading`}},u={args:{text:`Información importante`,type:`info`}},d={args:{text:`Estado personalizado`,icon:{html:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 text-purple-500" aria-hidden="true"><path fill="currentColor" d="M70 0l17.32 35 35 5-25 25 5 35L70 85 52.68 100l5-35L17.68 40l35-5z"/></svg>`}}},f={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,i.jsx)(r,{text:`Completado`,type:`success`}),(0,i.jsx)(r,{text:`Atención`,type:`alert`}),(0,i.jsx)(r,{text:`Error`,type:`error`}),(0,i.jsx)(r,{text:`Cargando`,type:`loading`}),(0,i.jsx)(r,{text:`Información`,type:`info`})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Completado con éxito',
    type: 'success'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Atención: datos incompletos',
    type: 'alert'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Ha ocurrido un error',
    type: 'error'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Cargando información',
    type: 'loading'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Información importante',
    type: 'info'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Estado personalizado',
    icon: {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="w-4 h-4 text-purple-500" aria-hidden="true"><path fill="currentColor" d="M70 0l17.32 35 35 5-25 25 5 35L70 85 52.68 100l5-35L17.68 40l35-5z"/></svg>'
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Status text="Completado" type="success" />
      <Status text="Atención" type="alert" />
      <Status text="Error" type="error" />
      <Status text="Cargando" type="loading" />
      <Status text="Información" type="info" />
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Success`,`Alert`,`Error`,`Loading`,`Info`,`WithCustomIcon`,`AllTypes`]}))();export{s as Alert,f as AllTypes,c as Error,u as Info,l as Loading,o as Success,d as WithCustomIcon,p as __namedExportsOrder,a as default};