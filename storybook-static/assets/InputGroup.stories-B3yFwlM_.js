import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Db8mzpb1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o({divider:e}){return e?(0,l.jsx)(`div`,{role:`presentation`,"aria-hidden":`true`,className:a(`flex items-center px-2`,e.classes),children:e.html?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:e.html}}):e.text?(0,l.jsx)(`span`,{children:e.text}):null}):null}function s({id:e,items:t=[],namePrefix:n,legendText:r,legendHtml:i,errorMessage:s,hint:u,direction:d=`row`,onChange:f,onChangeAll:p,className:m}){let h=(0,c.useId)(),g=e||`input-group-${h}`,_=(e,r)=>{if(f?.(e,r),p){let e={};t.forEach(t=>{let r=n?`${n}-${t.name}`:t.name,i=document.querySelector(`#${g} [name="${r}"]`);i&&(e[t.name]=i.value)}),p(e)}},v=e=>n?`${n}-${e.name}`:e.name;return(0,l.jsxs)(`fieldset`,{id:g,className:a(`c-form-group`,s&&`c-form-group--error`,m),onChange:e=>{let t=e.target;t&&`name`in t&&t.name&&_(t.name,t.value)},children:[(r||i||g)&&(0,l.jsx)(`legend`,{children:i?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:i}}):r||null}),u&&(0,l.jsx)(`p`,{id:`${g}-hint`,className:`text-sm text-neutral-dark mb-2`,children:u}),s&&(0,l.jsx)(`p`,{id:`${g}-error`,className:`text-sm text-alert-base mb-2`,role:`alert`,children:s}),(0,l.jsx)(`div`,{className:a(`flex`,d===`row`?`flex-row`:`flex-col`),children:t.map((e,t)=>(0,l.jsxs)(`div`,{className:a(`flex items-center`,e.classes),children:[e.divider&&(0,l.jsx)(o,{divider:e.divider}),e.isSelect?(0,l.jsxs)(`div`,{className:`flex flex-col`,children:[e.labelText&&(0,l.jsx)(`label`,{htmlFor:e.id||`${g}-${v(e)}`,className:`text-sm font-semibold mb-1`,children:e.labelText}),(0,l.jsx)(`select`,{id:e.id||`${g}-${v(e)}`,name:v(e),disabled:e.disabled,className:a(`c-select`,s&&`border-alert-base ring-2 ring-alert-base`),defaultValue:e.value,children:e.selectItems?.map((e,t)=>(0,l.jsx)(`option`,{value:e.value,children:e.text||e.value},t))})]}):(0,l.jsxs)(`div`,{className:`flex flex-col`,children:[e.labelText&&(0,l.jsx)(`label`,{htmlFor:e.id||`${g}-${v(e)}`,className:`text-sm font-semibold mb-1`,children:e.labelText}),(0,l.jsx)(`input`,{id:e.id||`${g}-${v(e)}`,name:v(e),type:e.type||`text`,placeholder:e.placeholder,disabled:e.disabled,defaultValue:e.value,className:a(`c-input mb-0`,s&&`border-alert-base ring-2 ring-alert-base`),"aria-describedby":u?`${g}-hint`:void 0,"aria-invalid":s?`true`:void 0})]})]},e.id??t))})]})}var c,l,u=t((()=>{c=e(n(),1),i(),l=r(),s.__docgenInfo={description:`InputGroup component - groups multiple inputs together in a fieldset.
Supports inputs, selects, and dividers between items.`,methods:[],displayName:`InputGroup`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`InputGroupItem`}],raw:`InputGroupItem[]`},description:`Input group items`,defaultValue:{value:`[]`,computed:!1}},namePrefix:{required:!1,tsType:{name:`string`},description:`Name prefix for all inputs`},legendText:{required:!1,tsType:{name:`string`},description:`Legend text for fieldset`},legendHtml:{required:!1,tsType:{name:`string`},description:`Legend HTML`},fieldsetData:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{ text?: string; html?: string }`,signature:{properties:[{key:`text`,value:{name:`string`,required:!1}},{key:`html`,value:{name:`string`,required:!1}}]}},description:`Fieldset configuration`},fieldsetClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the fieldset`},errorMessage:{required:!1,tsType:{name:`string`},description:`Error message`},hint:{required:!1,tsType:{name:`string`},description:`Hint text`},direction:{required:!1,tsType:{name:`union`,raw:`'row' | 'column'`,elements:[{name:`literal`,value:`'row'`},{name:`literal`,value:`'column'`}]},description:`Form layout direction`,defaultValue:{value:`'row'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(name: string, value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`},{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when input value changes`},onChangeAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(values: Record<string, string>) => void`,signature:{arguments:[{type:{name:`Record`,elements:[{name:`string`},{name:`string`}],raw:`Record<string, string>`},name:`values`}],return:{name:`void`}}},description:`Called when all items change`},className:{required:!1,tsType:{name:`string`},description:`CSS classes for the container`},labelComponent:{required:!1,tsType:{name:`ReactNode`},description:`Label component slot`},hintComponent:{required:!1,tsType:{name:`ReactNode`},description:`Hint component slot`},errorMessageComponent:{required:!1,tsType:{name:`ReactNode`},description:`Error message component slot`}},composes:[`Omit`]}})),d,f,p,m,h,g,_,v;t((()=>{d=e(n(),1),u(),f=r(),p={title:`Forms/InputGroup`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`InputGroup combines multiple inputs into a fieldset with shared legend and hints.`}}},argTypes:{direction:{control:{type:`select`},options:[`row`,`column`]}}},m={render:e=>{let[t,n]=(0,d.useState)({});return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(s,{...e,onChangeAll:e=>n(e)}),(0,f.jsxs)(`pre`,{className:`mt-4 p-4 bg-neutral-light text-sm`,children:[`Values: `,JSON.stringify(t,null,2)]})]})},args:{id:`input-group-example`,legendText:`Datos personales`,hint:`Introduzca su nombre y apellidos`,items:[{name:`nombre`,labelText:`Nombre`,placeholder:`María`,type:`text`},{name:`apellidos`,labelText:`Apellidos`,placeholder:`García López`,type:`text`}]}},h={render:e=>{let[t,n]=(0,d.useState)({});return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(s,{...e,onChangeAll:e=>n(e)}),(0,f.jsxs)(`pre`,{className:`mt-4 p-4 bg-neutral-light text-sm`,children:[`Values: `,JSON.stringify(t,null,2)]})]})},args:{id:`input-group-date`,legendText:`Rango de fechas`,items:[{name:`fecha-inicio`,labelText:`Fecha inicio`,type:`date`},{name:`separator`,divider:{text:`a`}},{name:`fecha-fin`,labelText:`Fecha fin`,type:`date`}]}},g={render:e=>{let[t,n]=(0,d.useState)({});return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(s,{...e,onChangeAll:e=>n(e)}),(0,f.jsxs)(`pre`,{className:`mt-4 p-4 bg-neutral-light text-sm`,children:[`Values: `,JSON.stringify(t,null,2)]})]})},args:{id:`input-group-select`,legendText:`Tipo y cantidad`,items:[{name:`tipo`,labelText:`Tipo`,isSelect:!0,selectItems:[{text:`Seleccione...`,value:``},{text:`Producto A`,value:`a`},{text:`Producto B`,value:`b`},{text:`Producto C`,value:`c`}]},{name:`cantidad`,labelText:`Cantidad`,type:`number`,placeholder:`0`}]}},_={render:e=>{let[t,n]=(0,d.useState)({});return(0,f.jsxs)(`div`,{children:[(0,f.jsx)(s,{...e,onChangeAll:e=>n(e)}),(0,f.jsxs)(`pre`,{className:`mt-4 p-4 bg-neutral-light text-sm`,children:[`Values: `,JSON.stringify(t,null,2)]})]})},args:{id:`input-group-error`,legendText:`Datos de contacto`,errorMessage:`Por favor, complete todos los campos obligatorios.`,items:[{name:`email`,labelText:`Correo electrónico`,type:`email`,placeholder:`email@ejemplo.es`},{name:`telefono`,labelText:`Teléfono`,type:`tel`,placeholder:`+34 600 000 000`}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [values, setValues] = useState<Record<string, string>>({});
    return <div>
        <InputGroup {...args} onChangeAll={v => setValues(v)} />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>;
  },
  args: {
    id: 'input-group-example',
    legendText: 'Datos personales',
    hint: 'Introduzca su nombre y apellidos',
    items: [{
      name: 'nombre',
      labelText: 'Nombre',
      placeholder: 'María',
      type: 'text'
    }, {
      name: 'apellidos',
      labelText: 'Apellidos',
      placeholder: 'García López',
      type: 'text'
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [values, setValues] = useState<Record<string, string>>({});
    return <div>
        <InputGroup {...args} onChangeAll={v => setValues(v)} />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>;
  },
  args: {
    id: 'input-group-date',
    legendText: 'Rango de fechas',
    items: [{
      name: 'fecha-inicio',
      labelText: 'Fecha inicio',
      type: 'date'
    }, {
      name: 'separator',
      divider: {
        text: 'a'
      }
    }, {
      name: 'fecha-fin',
      labelText: 'Fecha fin',
      type: 'date'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [values, setValues] = useState<Record<string, string>>({});
    return <div>
        <InputGroup {...args} onChangeAll={v => setValues(v)} />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>;
  },
  args: {
    id: 'input-group-select',
    legendText: 'Tipo y cantidad',
    items: [{
      name: 'tipo',
      labelText: 'Tipo',
      isSelect: true,
      selectItems: [{
        text: 'Seleccione...',
        value: ''
      }, {
        text: 'Producto A',
        value: 'a'
      }, {
        text: 'Producto B',
        value: 'b'
      }, {
        text: 'Producto C',
        value: 'c'
      }]
    }, {
      name: 'cantidad',
      labelText: 'Cantidad',
      type: 'number',
      placeholder: '0'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [values, setValues] = useState<Record<string, string>>({});
    return <div>
        <InputGroup {...args} onChangeAll={v => setValues(v)} />
        <pre className="mt-4 p-4 bg-neutral-light text-sm">
          Values: {JSON.stringify(values, null, 2)}
        </pre>
      </div>;
  },
  args: {
    id: 'input-group-error',
    legendText: 'Datos de contacto',
    errorMessage: 'Por favor, complete todos los campos obligatorios.',
    items: [{
      name: 'email',
      labelText: 'Correo electrónico',
      type: 'email',
      placeholder: 'email@ejemplo.es'
    }, {
      name: 'telefono',
      labelText: 'Teléfono',
      type: 'tel',
      placeholder: '+34 600 000 000'
    }]
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithDateRange`,`WithSelect`,`WithError`]}))();export{m as Default,h as WithDateRange,_ as WithError,g as WithSelect,v as __namedExportsOrder,p as default};