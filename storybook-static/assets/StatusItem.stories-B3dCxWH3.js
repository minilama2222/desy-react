import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{n,t as r}from"./clsx-Bs4OuGzP.js";import{n as i,t as a}from"./Status-CoiGplhB.js";function o({id:e,title:t,hint:n,errorMessage:i,items:o=[],status:c,children:l,className:u,...d}){return(0,s.jsxs)(`div`,{className:r(`lg:flex lg:justify-between lg:items-start -my-px px-base py-sm border-t border-b border-neutral-base`,u),...d,children:[(0,s.jsxs)(`div`,{className:`lg:w-2/3`,children:[t&&(0,s.jsx)(`p`,{className:t.classes||`my-sm`,children:t.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:t.html}}):t.text}),n&&(0,s.jsx)(`p`,{id:n.id,className:r(`text-sm text-neutral-dark`,n.classes),"aria-describedby":n.id,children:n.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:n.html}}):n.text}),i&&(0,s.jsx)(`p`,{id:i.id||`${e}-error`,className:r(`text-sm text-alert-base`,i.classes),role:`alert`,children:i.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:i.html}}):i.text}),o.length>0&&(0,s.jsx)(`dl`,{children:o.map((e,t)=>(0,s.jsxs)(`div`,{id:e.id,className:r(`flex lg-flex-wrap`,e.classes),children:[(0,s.jsx)(`dt`,{id:e.term.id,className:r(`w-1/2 my-sm`,e.term.classes),children:e.term.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.term.html}}):e.term.text}),(0,s.jsx)(`dd`,{id:e.definition.id,className:r(`w-1/2 my-sm font-semibold`,e.definition.classes),children:e.definition.html?(0,s.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.definition.html}}):e.definition.text})]},e.id??t))})]}),(0,s.jsxs)(`div`,{className:`lg:flex lg:flex-wrap lg:items-center lg:w-1/3`,children:[(0,s.jsx)(`div`,{id:`${e}-status-item`,className:`w-full lg:w-auto lg:text-right mt-base lg:mt-0 mb-base lg:mb-0`,children:l}),c&&(0,s.jsx)(`div`,{className:`mb-base lg:mb-0 ml-base py-sm`,children:(0,s.jsx)(a,{text:c.text,icon:c.icon,type:c.type,id:c.id,className:c.classes})})]})]})}var s,c=e((()=>{n(),i(),s=t(),o.__docgenInfo={description:`StatusItem component - displays a status list with term/definition pairs,
optional title, hint, error message, and a status indicator.`,methods:[],displayName:`StatusItem`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},title:{required:!1,tsType:{name:`StatusItemTitle`},description:`Title above the list`},hint:{required:!1,tsType:{name:`StatusItemHint`},description:`Hint text`},errorMessage:{required:!1,tsType:{name:`StatusItemErrorMessage`},description:`Error message`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`StatusItemData`}],raw:`StatusItemData[]`},description:`List of term/definition items`,defaultValue:{value:`[]`,computed:!1}},status:{required:!1,tsType:{name:`StatusItemStatus`},description:`Status component configuration`},children:{required:!1,tsType:{name:`ReactNode`},description:`Content to show on the right (below title)`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`}},composes:[`Omit`]}})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{c(),l=t(),u={title:`Views/StatusItem`,component:o,tags:[`autodocs`]},d={args:{id:`default`,title:{text:`Título`},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Modificar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` item del Título`})]})}},f={args:{id:`only-items`,items:[{term:{text:`término`},definition:{text:`definición`}},{term:{text:`término`},definition:{text:`definición`}},{term:{text:`término`},definition:{text:`definición`}}],status:{text:`Correcto`,icon:{type:`success`}},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Modificar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` los datos de término y definición y el resto`})]})}},p={args:{id:`with-title-html`,title:{html:`Autorización para la consulta de datos de las personas de la unidad familiar. <span class='text-neutral-dark'>(Documento condicionado)</span>`},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Aportar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` Autorización para la consulta de datos de las personas de la unidad familiar`})]})}},m={args:{id:`with-hint`,title:{text:`Personas de la unidad familiar`},hint:{text:`2 personas añadidas`},status:{text:`Aportado`,icon:{type:`success`}},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Modificar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` personas de la unidad familiar`})]})}},h={args:{id:`with-hint-html`,title:{text:`Autorización para la consulta de datos de las personas de la unidad familiar`},hint:{html:`<a href='#' class='c-link'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140' width='1em' height='1em' class='inline-block self-center w-4 h-4 mr-sm no-underline' role='img' aria-hidden='true'><path d='M100.3 52.2a7.49 7.49 0 00-10.6 0L77.5 64.39V7.5a7.5 7.5 0 00-15 0v56.89L50.3 52.2a7.5 7.5 0 10-10.6 10.6l25 25a7.49 7.49 0 0010.6 0l25-25a7.49 7.49 0 000-10.6zM130 95a10 10 0 00-10 10v12.5a2.5 2.5 0 01-2.5 2.5h-95a2.5 2.5 0 01-2.5-2.5V105a10 10 0 00-20 0v15a20 20 0 0020 20h100a20 20 0 0020-20v-15a10 10 0 00-10-10z' fill='currentColor'/></svg>Descargar modelo</a>`},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Aportar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` Autorización para la consulta de datos de las personas de la unidad familiar`})]})}},g={args:{id:`with-status-simple`,title:{text:`Datos adicionales del solicitante`},status:{text:`Iniciado`},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Rellenar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` datos adicionales del solicitante`})]})}},_={args:{id:`with-status-success`,title:{text:`Datos adicionales del solicitante`},status:{text:`Aportado`,icon:{type:`success`}},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Modificar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` datos adicionales del solicitante`})]})}},v={args:{id:`with-status-alert`,title:{text:`Datos adicionales del solicitante`},errorMessage:{text:`Es necesario aportar este documento para enviar el trámite`,classes:`my-sm text-alert-base`},status:{text:`Incompleto`,icon:{type:`alert`},classes:`text-alert-base`},className:`border-l-4 border-alert-base`,children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Modificar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` datos adicionales del solicitante`})]})}},y={args:{id:`with-status-loading`,title:{text:`Datos adicionales del solicitante`},status:{text:`Subiendo (20%)`,icon:{type:`loading`}},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Modificar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` datos adicionales del solicitante`})]})}},b={args:{id:`with-status-error`,title:{text:`Datos adicionales del solicitante`},errorMessage:{text:`Se ha producido un error al subir el archivo`,classes:`my-sm text-alert-base`},status:{text:`Error`,icon:{type:`error`},classes:`text-alert-base`},className:`border-l-4 border-alert-base`,children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Ver`,(0,l.jsx)(`span`,{className:`sr-only`,children:` datos adicionales del solicitante`})]})}},x={args:{id:`with-html-in-definition`,items:[{term:{text:`Acreditación`},definition:{html:`Mediante archivo adjunto <a href='#' class='c-link inline-block'>Modelo de solicitud (PDF, 200Kb)</a>`}}],status:{text:`Completo`,icon:{type:`success`}},children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Modificar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` acreditación`})]})}},S={args:{id:`incompleto-status-item`,items:[{term:{text:`Nombre`},definition:{text:`Ana`}},{term:{text:`Apellidos`},definition:{text:`Pérez Escribano`}},{term:{text:`Número de identificación`},definition:{text:`72882918B`}}],status:{text:`Incompleto`,icon:{type:`alert`}},className:`border-l-4 border-alert-base`,children:(0,l.jsxs)(`button`,{className:`c-button c-button--transparent`,children:[`Rellenar`,(0,l.jsx)(`span`,{className:`sr-only`,children:` datos adicionales del solicitante`})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default',
    title: {
      text: 'Título'
    },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> item del Título</span></button>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'only-items',
    items: [{
      term: {
        text: 'término'
      },
      definition: {
        text: 'definición'
      }
    }, {
      term: {
        text: 'término'
      },
      definition: {
        text: 'definición'
      }
    }, {
      term: {
        text: 'término'
      },
      definition: {
        text: 'definición'
      }
    }],
    status: {
      text: 'Correcto',
      icon: {
        type: 'success'
      }
    },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> los datos de término y definición y el resto</span></button>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-title-html',
    title: {
      html: 'Autorización para la consulta de datos de las personas de la unidad familiar. <span class=\\'text-neutral-dark\\'>(Documento condicionado)</span>'
    },
    children: <button className="c-button c-button--transparent">Aportar<span className="sr-only"> Autorización para la consulta de datos de las personas de la unidad familiar</span></button>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-hint',
    title: {
      text: 'Personas de la unidad familiar'
    },
    hint: {
      text: '2 personas añadidas'
    },
    status: {
      text: 'Aportado',
      icon: {
        type: 'success'
      }
    },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> personas de la unidad familiar</span></button>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-hint-html',
    title: {
      text: 'Autorización para la consulta de datos de las personas de la unidad familiar'
    },
    hint: {
      html: "<a href='#' class='c-link'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140' width='1em' height='1em' class='inline-block self-center w-4 h-4 mr-sm no-underline' role='img' aria-hidden='true'><path d='M100.3 52.2a7.49 7.49 0 00-10.6 0L77.5 64.39V7.5a7.5 7.5 0 00-15 0v56.89L50.3 52.2a7.5 7.5 0 10-10.6 10.6l25 25a7.49 7.49 0 0010.6 0l25-25a7.49 7.49 0 000-10.6zM130 95a10 10 0 00-10 10v12.5a2.5 2.5 0 01-2.5 2.5h-95a2.5 2.5 0 01-2.5-2.5V105a10 10 0 00-20 0v15a20 20 0 0020 20h100a20 20 0 0020-20v-15a10 10 0 00-10-10z' fill='currentColor'/></svg>Descargar modelo</a>"
    },
    children: <button className="c-button c-button--transparent">Aportar<span className="sr-only"> Autorización para la consulta de datos de las personas de la unidad familiar</span></button>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-status-simple',
    title: {
      text: 'Datos adicionales del solicitante'
    },
    status: {
      text: 'Iniciado'
    },
    children: <button className="c-button c-button--transparent">Rellenar<span className="sr-only"> datos adicionales del solicitante</span></button>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-status-success',
    title: {
      text: 'Datos adicionales del solicitante'
    },
    status: {
      text: 'Aportado',
      icon: {
        type: 'success'
      }
    },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> datos adicionales del solicitante</span></button>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-status-alert',
    title: {
      text: 'Datos adicionales del solicitante'
    },
    errorMessage: {
      text: 'Es necesario aportar este documento para enviar el trámite',
      classes: 'my-sm text-alert-base'
    },
    status: {
      text: 'Incompleto',
      icon: {
        type: 'alert'
      },
      classes: 'text-alert-base'
    },
    className: 'border-l-4 border-alert-base',
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> datos adicionales del solicitante</span></button>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-status-loading',
    title: {
      text: 'Datos adicionales del solicitante'
    },
    status: {
      text: 'Subiendo (20%)',
      icon: {
        type: 'loading'
      }
    },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> datos adicionales del solicitante</span></button>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-status-error',
    title: {
      text: 'Datos adicionales del solicitante'
    },
    errorMessage: {
      text: 'Se ha producido un error al subir el archivo',
      classes: 'my-sm text-alert-base'
    },
    status: {
      text: 'Error',
      icon: {
        type: 'error'
      },
      classes: 'text-alert-base'
    },
    className: 'border-l-4 border-alert-base',
    children: <button className="c-button c-button--transparent">Ver<span className="sr-only"> datos adicionales del solicitante</span></button>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-html-in-definition',
    items: [{
      term: {
        text: 'Acreditación'
      },
      definition: {
        html: 'Mediante archivo adjunto <a href=\\'#\\' class=\\'c-link inline-block\\'>Modelo de solicitud (PDF, 200Kb)</a>'
      }
    }],
    status: {
      text: 'Completo',
      icon: {
        type: 'success'
      }
    },
    children: <button className="c-button c-button--transparent">Modificar<span className="sr-only"> acreditación</span></button>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'incompleto-status-item',
    items: [{
      term: {
        text: 'Nombre'
      },
      definition: {
        text: 'Ana'
      }
    }, {
      term: {
        text: 'Apellidos'
      },
      definition: {
        text: 'Pérez Escribano'
      }
    }, {
      term: {
        text: 'Número de identificación'
      },
      definition: {
        text: '72882918B'
      }
    }],
    status: {
      text: 'Incompleto',
      icon: {
        type: 'alert'
      }
    },
    className: 'border-l-4 border-alert-base',
    children: <button className="c-button c-button--transparent">Rellenar<span className="sr-only"> datos adicionales del solicitante</span></button>
  }
}`,...S.parameters?.docs?.source}}},C=[`PorDefecto`,`PorDefectoSoloItems`,`ConTituloHTML`,`ConPista`,`ConPistaHTML`,`ConEstadoSimple`,`ConEstadoExito`,`ConEstadoAlerta`,`ConEstadoCargando`,`ConEstadoError`,`ConHTMLEnLaDefinicion`,`Incompleto`]}))();export{v as ConEstadoAlerta,y as ConEstadoCargando,b as ConEstadoError,_ as ConEstadoExito,g as ConEstadoSimple,x as ConHTMLEnLaDefinicion,m as ConPista,h as ConPistaHTML,p as ConTituloHTML,S as Incompleto,d as PorDefecto,f as PorDefectoSoloItems,C as __namedExportsOrder,u as default};