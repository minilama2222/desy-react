import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./clsx-Bs4OuGzP.js";import{n as i,t as a}from"./Status-CH9XwEK3.js";function o({id:e,title:t,hint:n,errorMessage:i,items:o=[],status:c,children:l,className:u,...d}){return(0,s.jsxs)(`div`,{className:r(`lg:flex lg:justify-between lg:items-start -my-px px-base py-sm border-t border-b border-neutral-base`,u),...d,children:[(0,s.jsxs)(`div`,{className:`lg:w-2/3`,children:[t&&(0,s.jsx)(`p`,{className:t.classes||`my-sm`,children:t.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:t.html}}):t.text}),n&&(0,s.jsx)(`p`,{id:n.id,className:r(`text-sm text-neutral-dark`,n.classes),"aria-describedby":n.id,children:n.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n.text}),i&&(0,s.jsx)(`p`,{id:i.id||`${e}-error`,className:r(`text-sm text-alert-base`,i.classes),role:`alert`,children:i.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:i.html}}):i.text}),o.length>0&&(0,s.jsx)(`dl`,{children:o.map((e,t)=>(0,s.jsxs)(`div`,{id:e.id,className:r(`flex lg-flex-wrap`,e.classes),children:[(0,s.jsx)(`dt`,{id:e.term.id,className:r(`w-1/2 my-sm`,e.term.classes),children:e.term.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.term.html}}):e.term.text}),(0,s.jsx)(`dd`,{id:e.definition.id,className:r(`w-1/2 my-sm font-semibold`,e.definition.classes),children:e.definition.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.definition.html}}):e.definition.text})]},e.id??t))})]}),(0,s.jsxs)(`div`,{className:`lg:flex lg:flex-wrap lg:items-center lg:w-1/3`,children:[(0,s.jsx)(`div`,{id:`${e}-status-item`,className:`w-full lg:w-auto lg:text-right mt-base lg:mt-0 mb-base lg:mb-0`,children:l}),c&&(0,s.jsx)(`div`,{className:`mb-base lg:mb-0 ml-base py-sm`,children:(0,s.jsx)(a,{text:c.text,icon:c.icon,type:c.type,id:c.id,className:c.classes})})]})]})}var s,c=e((()=>{n(),i(),s=t(),o.__docgenInfo={description:`StatusItem component - displays a status list with term/definition pairs,
optional title, hint, error message, and a status indicator.`,methods:[],displayName:`StatusItem`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},title:{required:!1,tsType:{name:`StatusItemTitle`},description:`Title above the list`},hint:{required:!1,tsType:{name:`StatusItemHint`},description:`Hint text`},errorMessage:{required:!1,tsType:{name:`StatusItemErrorMessage`},description:`Error message`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`StatusItemData`}],raw:`StatusItemData[]`},description:`List of term/definition items`,defaultValue:{value:`[]`,computed:!1}},status:{required:!1,tsType:{name:`StatusItemStatus`},description:`Status component configuration`},children:{required:!1,tsType:{name:`ReactNode`},description:`Content to show on the right (below title)`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`}},composes:[`Omit`]}})),l,u,d,f,p,m,h,g,_;e((()=>{c(),l=t(),u={title:`Views/StatusItem`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`StatusItem displays a list of term/definition pairs with optional title, hint, and status indicator.`}}},argTypes:{}},d=[{term:{text:`Número de solicitud`},definition:{text:`SOL-2024-001234`}},{term:{text:`Fecha de presentación`},definition:{text:`15 de enero de 2024`}},{term:{text:`Órgano competente`},definition:{text:`Servicio de tramitación`}}],f={args:{id:`status-item-example`,title:{text:`Información de la solicitud`},items:d,status:{text:`En revisión`,type:`alert`}}},p={args:{id:`status-item-link`,title:{text:`Datos del solicitante`},items:[{term:{text:`Nombre`},definition:{html:`<a href="#" class="c-link">María García López</a>`}},{term:{text:`NIF`},definition:{text:`12345678A`}}]}},m={args:{id:`status-item-hint`,title:{text:`Datos bancarios`},hint:{text:`Los datos bancarios se utilizan exclusivamente para el cobro de tasas.`,id:`hint-bancos`},items:[{term:{text:`IBAN`},definition:{text:`ES91 2100 0418 4012 3456 7891`}},{term:{text:`Titular`},definition:{text:`María García López`}}],status:{text:`Verificado`,type:`success`}}},h={args:{id:`status-item-error`,title:{text:`Documentación requerida`},errorMessage:{text:`Falta документacíon obligatoria. Por favor, revise los campos indicados.`,id:`error-docs`},items:[{term:{text:`Certificado de empadronamiento`,html:`<strong>Certificado</strong> de empadronamiento`},definition:{text:`❌ No entregado`}},{term:{text:`DNI/NIE`},definition:{text:`✅ Entregado`}}],status:{text:`Incompleto`,type:`error`}}},g={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(o,{id:`status-success`,title:{text:`Solicitud aprobada`},items:[{term:{text:`Estado`},definition:{text:`Aprobada`}}],status:{text:`Completado`,type:`success`}}),(0,l.jsx)(o,{id:`status-alert`,title:{text:`Documentación incompleta`},items:[{term:{text:`Estado`},definition:{text:`Pendiente de docs`}}],status:{text:`Atención`,type:`alert`}}),(0,l.jsx)(o,{id:`status-error`,title:{text:`Solicitud denegada`},items:[{term:{text:`Estado`},definition:{text:`Denegada`}}],status:{text:`Error`,type:`error`}}),(0,l.jsx)(o,{id:`status-loading`,title:{text:`Proceso en curso`},items:[{term:{text:`Estado`},definition:{text:`En proceso`}}],status:{text:`Cargando`,type:`loading`}})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-item-example',
    title: {
      text: 'Información de la solicitud'
    },
    items: defaultItems,
    status: {
      text: 'En revisión',
      type: 'alert'
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-item-link',
    title: {
      text: 'Datos del solicitante'
    },
    items: [{
      term: {
        text: 'Nombre'
      },
      definition: {
        html: '<a href="#" class="c-link">María García López</a>'
      }
    }, {
      term: {
        text: 'NIF'
      },
      definition: {
        text: '12345678A'
      }
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-item-hint',
    title: {
      text: 'Datos bancarios'
    },
    hint: {
      text: 'Los datos bancarios se utilizan exclusivamente para el cobro de tasas.',
      id: 'hint-bancos'
    },
    items: [{
      term: {
        text: 'IBAN'
      },
      definition: {
        text: 'ES91 2100 0418 4012 3456 7891'
      }
    }, {
      term: {
        text: 'Titular'
      },
      definition: {
        text: 'María García López'
      }
    }],
    status: {
      text: 'Verificado',
      type: 'success'
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'status-item-error',
    title: {
      text: 'Documentación requerida'
    },
    errorMessage: {
      text: 'Falta документacíon obligatoria. Por favor, revise los campos indicados.',
      id: 'error-docs'
    },
    items: [{
      term: {
        text: 'Certificado de empadronamiento',
        html: '<strong>Certificado</strong> de empadronamiento'
      },
      definition: {
        text: '❌ No entregado'
      }
    }, {
      term: {
        text: 'DNI/NIE'
      },
      definition: {
        text: '✅ Entregado'
      }
    }],
    status: {
      text: 'Incompleto',
      type: 'error'
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <StatusItem id="status-success" title={{
      text: 'Solicitud aprobada'
    }} items={[{
      term: {
        text: 'Estado'
      },
      definition: {
        text: 'Aprobada'
      }
    }]} status={{
      text: 'Completado',
      type: 'success'
    }} />
      <StatusItem id="status-alert" title={{
      text: 'Documentación incompleta'
    }} items={[{
      term: {
        text: 'Estado'
      },
      definition: {
        text: 'Pendiente de docs'
      }
    }]} status={{
      text: 'Atención',
      type: 'alert'
    }} />
      <StatusItem id="status-error" title={{
      text: 'Solicitud denegada'
    }} items={[{
      term: {
        text: 'Estado'
      },
      definition: {
        text: 'Denegada'
      }
    }]} status={{
      text: 'Error',
      type: 'error'
    }} />
      <StatusItem id="status-loading" title={{
      text: 'Proceso en curso'
    }} items={[{
      term: {
        text: 'Estado'
      },
      definition: {
        text: 'En proceso'
      }
    }]} status={{
      text: 'Cargando',
      type: 'loading'
    }} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithLink`,`WithHint`,`WithError`,`AllStatuses`]}))();export{g as AllStatuses,f as Default,h as WithError,m as WithHint,p as WithLink,_ as __namedExportsOrder,u as default};