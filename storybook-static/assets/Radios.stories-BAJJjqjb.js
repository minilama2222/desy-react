import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BRtkut15.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return e?`${e}-hint`:``}function s(e,t){return e||(t?`${t}-error`:``)}var c,l,u,d,f=t((()=>{c=e(n(),1),i(),l=r(),u=(0,c.forwardRef)((e,t)=>{let{id:n,value:r,name:i,text:o,html:s,checked:c,disabled:u,classes:d,hintText:f,hintHtml:p,conditionalHtml:m,hintIdSuffix:h,onChange:g,..._}=e,v=h?`${h}-item-hint`:void 0,y=e=>{g?.(r,e)},b=s?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:s}}):o;return(0,l.jsxs)(`div`,{className:a(`relative`,`flex`,`items-start`,`py-base`,d),children:[(0,l.jsx)(`div`,{className:`flex items-center mx-sm`,children:(0,l.jsx)(`input`,{ref:t,id:n,name:i,type:`radio`,value:r,checked:c,disabled:u,className:a(`w-6`,`h-6`,`text-primary-base`,`transition`,`duration-150`,`ease-in-out`,`border-black`,`focus:border-black`,`focus:outline-black`,`focus:outline-1`,`focus:outline-offset-2`,`focus:ring-4`,`focus:ring-offset-0`,`focus:ring-warning-base`,`disabled:bg-neutral-base`,`disabled:border-neutral-base`),onChange:y,..._})}),(0,l.jsxs)(`div`,{className:`pt-0.5 leading-5`,children:[(0,l.jsx)(`label`,{htmlFor:n,className:`cursor-pointer`,children:b}),(f||p)&&(0,l.jsx)(`p`,{id:v,className:`block text-neutral-dark text-sm`,children:p?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:p}}):f})]}),m&&c&&(0,l.jsx)(`div`,{className:`mb-lg ml-5 pt-sm pb-base pl-6 origin-top-left border-l-2 border-primary-base`,id:`conditional-${n}`,children:(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:m}})})]})}),u.displayName=`RadioItem`,d=(0,c.forwardRef)((e,t)=>{let{id:n,name:r,items:i,value:c,legendText:d,legendHtml:f,legendIsPageHeading:p,legendHeadingLevel:m,legendClasses:h,hintText:g,hintHtml:_,errorMessageText:v,errorMessageHtml:y,errorVisuallyHiddenText:b,errorId:x,hintId:S,formGroupClasses:C,classes:w,hasError:T,children:E,onChange:D,...O}=e,k=S||o(n),A=s(x,n),j=T||!!(v||y),M=(e,t)=>{D?.(e)},N=()=>{if(!d&&!f)return null;let e=f?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f}}):d;return p?(0,l.jsx)(`h${m||2}`,{className:h,children:e}):(0,l.jsx)(`span`,{className:h,children:e})};return(0,l.jsxs)(`div`,{ref:t,className:a(`c-form-group`,C,j&&`c-form-group--error`),...O,children:[d||f?(0,l.jsx)(`fieldset`,{className:`border-0 p-0 m-0`,children:(0,l.jsx)(`legend`,{className:`block font-semibold mb-sm`,children:N()})}):null,(g||_)&&(0,l.jsx)(`p`,{id:k,className:`block text-neutral-dark mb-sm`,children:_?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g}),(v||y)&&(0,l.jsxs)(`p`,{id:A,className:`block font-semibold text-alert-base mb-sm`,children:[(0,l.jsxs)(`span`,{className:`sr-only`,children:[b||`Error`,`: `]}),y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v]}),E,!E&&i&&(0,l.jsx)(`div`,{className:a(`c-radios`,w),id:n,children:i.map((e,t)=>(0,l.jsx)(u,{id:e.id||(n?`${n}-${t}`:void 0),name:e.name||r,value:e.value,text:e.text,html:e.html,checked:c===e.value,disabled:e.disabled,classes:e.classes,hintText:e.hintText,hintHtml:e.hintHtml,conditionalHtml:e.conditionalHtml,hintIdSuffix:e.id||(n?`${n}-${t}`:void 0),onChange:M},e.value||t))})]})}),d.displayName=`Radios`,u.__docgenInfo={description:`Radio item component - a single radio button with label and optional hint`,methods:[],displayName:`RadioItem`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},value:{required:!0,tsType:{name:`string`},description:`Radio value`},name:{required:!0,tsType:{name:`string`},description:`Radio name`},text:{required:!1,tsType:{name:`string`},description:`Radio label text`},html:{required:!1,tsType:{name:`string`},description:`Radio label HTML`},checked:{required:!1,tsType:{name:`boolean`},description:`Whether the radio is checked`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the radio is disabled`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},conditionalHtml:{required:!1,tsType:{name:`string`},description:`Conditional content shown when checked`},hintIdSuffix:{required:!1,tsType:{name:`string`},description:`Hint ID suffix`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]},d.__docgenInfo={description:`Radios component - a group of radio buttons with legend, hint, and error message`,methods:[],displayName:`Radios`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix for radio items`},name:{required:!0,tsType:{name:`string`},description:`Name attribute for all radios in the group`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`RadioItemData`}],raw:`RadioItemData[]`},description:`Array of radio items`},value:{required:!1,tsType:{name:`string`},description:`Currently selected value`},legendText:{required:!1,tsType:{name:`string`},description:`Legend text (field label)`},legendHtml:{required:!1,tsType:{name:`string`},description:`Legend HTML`},legendIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Legend is page heading`},legendHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Legend heading level`},legendClasses:{required:!1,tsType:{name:`string`},description:`Legend CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error`},errorId:{required:!1,tsType:{name:`string`},description:`Error ID`},hintId:{required:!1,tsType:{name:`string`},description:`Hint ID`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the radios container`},hasError:{required:!1,tsType:{name:`boolean`},description:`Whether has error state`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (for compound pattern)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Change event handler`}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{f(),p={title:`Forms/Radios`,component:d,tags:[`autodocs`]},m={args:{id:`default`,name:`por defecto`,value:`no`,legendText:`¿Quieres que te contactemos por correo electrónico?`,hintText:`Sólo puedes seleccionar un elemento.`,items:[{value:`si`,text:`Si`},{value:`no`,text:`No`}]}},h={args:{id:`inline`,classes:`flex`,name:`inline`,value:`no`,legendText:`¿Quieres que te contactemos por correo electrónico?`,hintText:`Sólo puedes seleccionar un elemento.`,items:[{value:`si`,text:`Si`,classes:`mr-sm`},{value:`no`,text:`No`,classes:`mr-sm`}]}},g={args:{id:`example-disabled`,name:`example-disabled`,value:`si`,legendText:`¿Quieres que te contactemos por correo electrónico?`,hintText:`Sólo puedes seleccionar un elemento.`,items:[{value:`si`,text:`Si`,disabled:!0},{value:`no`,text:`No`,disabled:!0}]}},_={args:{id:`legend-as-page-heading`,name:`legend-as-page-heading`,legendText:`¿Cómo prefieres que te contactemos?`,legendClasses:`c-h2`,legendIsPageHeading:!0,legendHeadingLevel:2,hintText:`Selecciona una de las opciones.`,items:[{value:`part-2`,text:`Por correo electrónico`,hintText:`Asegúrate de que nuestros correos no lleguen a la bandeja de spam.`},{value:`part-3`,text:`Por correo postal`,hintText:`Asegúrate de haber introducido correctamente tu dirección.`}]}},v={args:{id:`medium-legend`,name:`medium-legend`,legendText:`¿Cómo prefieres que te contactemos?`,legendClasses:`c-h2`,hintText:`Selecciona una de las opciones.`,items:[{value:`part-2`,text:`Por correo electrónico`,hintText:`Asegúrate de que nuestros correos no lleguen a la bandeja de spam.`},{value:`part-3`,text:`Por correo postal`,hintText:`Asegúrate de haber introducido correctamente tu dirección.`}]}},y={args:{id:`example-divider`,name:`example-divider`,legendText:`¿Cómo prefieres que te contactemos?`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correo-postal`,text:`Correo postal`},{value:`divider-o-bien`,divider:`o bien`},{value:`telefono`,text:`Teléfono`}]}},b={args:{id:`hints-on-items`,name:`hints-on-items`,legendText:`¿Cómo prefieres que te contactemos?`,legendIsPageHeading:!0,items:[{value:`correo-electronico`,text:`Correo electrónico`,hintText:`Asegúrate de que el correo no llega a la bandeja de spam.`},{value:`correo-postal`,text:`Correo postal`,hintText:`Asegúrate de haber introducido la dirección postal correctamente.`}]}},x={args:{id:`classes`,name:`classes`,legendText:`¿Cómo prefieres que te contactemos?`,legendIsPageHeading:!0,items:[{value:`correo-electronico`,text:`Correo electrónico`,hintText:`Asegúrate de que el correo no llega a la bandeja de spam.`,classes:`bg-primary-light`},{value:`correo-postal`,text:`Correo postal`,hintText:`Asegúrate de haber introducido la dirección postal correctamente.`,classes:`bg-neutral-lighter`}]}},S={args:{id:`without-fieldset`,name:`without-fieldset`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correp-postal`,text:`Correo postal`},{value:`telefono`,text:`Teléfono`}]}},C={args:{id:`fieldset-and-error`,name:`fieldset-and-error`,value:`no`,errorMessageText:`Tienes que seleccionar al menos una opción`,legendText:`¿Quieres que te contactemos por correo electrónico?`,items:[{value:`si`,text:`Si`},{value:`no`,text:`No`}]}},w={args:{id:`very-long`,name:`very-long`,hintText:`Nullam id dolor id nibh ultricies vehicula ut id elit.`,errorMessageText:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,legendText:`Maecenas faucibus mollis interdum?`,items:[{value:`nullam`,text:`Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.`},{value:`aenean`,text:`Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.`},{value:`fusce`,text:`Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.`}]}},T={args:{id:`small`,name:`peque`,classes:`c-radios--sm`,items:[{value:`si`,text:`Si`,classes:`-mt-base`},{value:`no`,text:`No`,classes:`-mt-base`}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default',
    name: 'por defecto',
    value: 'no',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    hintText: 'Sólo puedes seleccionar un elemento.',
    items: [{
      value: 'si',
      text: 'Si'
    }, {
      value: 'no',
      text: 'No'
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'inline',
    classes: 'flex',
    name: 'inline',
    value: 'no',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    hintText: 'Sólo puedes seleccionar un elemento.',
    items: [{
      value: 'si',
      text: 'Si',
      classes: 'mr-sm'
    }, {
      value: 'no',
      text: 'No',
      classes: 'mr-sm'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-disabled',
    name: 'example-disabled',
    value: 'si',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    hintText: 'Sólo puedes seleccionar un elemento.',
    items: [{
      value: 'si',
      text: 'Si',
      disabled: true
    }, {
      value: 'no',
      text: 'No',
      disabled: true
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'legend-as-page-heading',
    name: 'legend-as-page-heading',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendClasses: 'c-h2',
    legendIsPageHeading: true,
    legendHeadingLevel: 2,
    hintText: 'Selecciona una de las opciones.',
    items: [{
      value: 'part-2',
      text: 'Por correo electrónico',
      hintText: 'Asegúrate de que nuestros correos no lleguen a la bandeja de spam.'
    }, {
      value: 'part-3',
      text: 'Por correo postal',
      hintText: 'Asegúrate de haber introducido correctamente tu dirección.'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'medium-legend',
    name: 'medium-legend',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendClasses: 'c-h2',
    hintText: 'Selecciona una de las opciones.',
    items: [{
      value: 'part-2',
      text: 'Por correo electrónico',
      hintText: 'Asegúrate de que nuestros correos no lleguen a la bandeja de spam.'
    }, {
      value: 'part-3',
      text: 'Por correo postal',
      hintText: 'Asegúrate de haber introducido correctamente tu dirección.'
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example-divider',
    name: 'example-divider',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico'
    }, {
      value: 'correo-postal',
      text: 'Correo postal'
    }, {
      value: 'divider-o-bien',
      divider: 'o bien'
    }, {
      value: 'telefono',
      text: 'Teléfono'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hints-on-items',
    name: 'hints-on-items',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendIsPageHeading: true,
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico',
      hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.'
    }, {
      value: 'correo-postal',
      text: 'Correo postal',
      hintText: 'Asegúrate de haber introducido la dirección postal correctamente.'
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'classes',
    name: 'classes',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendIsPageHeading: true,
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico',
      hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.',
      classes: 'bg-primary-light'
    }, {
      value: 'correo-postal',
      text: 'Correo postal',
      hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
      classes: 'bg-neutral-lighter'
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'without-fieldset',
    name: 'without-fieldset',
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico'
    }, {
      value: 'correp-postal',
      text: 'Correo postal'
    }, {
      value: 'telefono',
      text: 'Teléfono'
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'fieldset-and-error',
    name: 'fieldset-and-error',
    value: 'no',
    errorMessageText: 'Tienes que seleccionar al menos una opción',
    legendText: '¿Quieres que te contactemos por correo electrónico?',
    items: [{
      value: 'si',
      text: 'Si'
    }, {
      value: 'no',
      text: 'No'
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'very-long',
    name: 'very-long',
    hintText: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    errorMessageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    legendText: 'Maecenas faucibus mollis interdum?',
    items: [{
      value: 'nullam',
      text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.'
    }, {
      value: 'aenean',
      text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.'
    }, {
      value: 'fusce',
      text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'small',
    name: 'peque',
    classes: 'c-radios--sm',
    items: [{
      value: 'si',
      text: 'Si',
      classes: '-mt-base'
    }, {
      value: 'no',
      text: 'No',
      classes: '-mt-base'
    }]
  }
}`,...T.parameters?.docs?.source}}},E=[`PorDefecto`,`EnLinea`,`ConDeshabilitado`,`ConUnLegendComoEncabezado`,`ConUnLegendDelTamanoDeUnEncabezadoH2`,`ConUnDivisor`,`ConPistasEnLosItems`,`ConClasesDeCssAplicadas`,`SinFieldset`,`ConFieldsetYMensajeDeError`,`ConUnTextoDeItemMuyLargo`,`Pequen`]}))();export{x as ConClasesDeCssAplicadas,g as ConDeshabilitado,C as ConFieldsetYMensajeDeError,b as ConPistasEnLosItems,y as ConUnDivisor,_ as ConUnLegendComoEncabezado,v as ConUnLegendDelTamanoDeUnEncabezadoH2,w as ConUnTextoDeItemMuyLargo,h as EnLinea,T as Pequen,m as PorDefecto,S as SinFieldset,E as __namedExportsOrder,p as default};