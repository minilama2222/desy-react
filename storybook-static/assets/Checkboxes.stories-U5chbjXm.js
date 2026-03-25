import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CPGy17Pw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./clsx-Bs4OuGzP.js";function o(e){return e?`${e}-hint`:``}function s(e,t){return e||(t?`${t}-error`:``)}var c,l,u,d,f=t((()=>{c=e(n(),1),i(),l=r(),u=(0,c.forwardRef)((e,t)=>{let{id:n,value:r,name:i,text:o,html:s,checked:c,indeterminate:u,disabled:d,classes:f,hintText:p,hintHtml:m,conditionalHtml:h,hintIdSuffix:g,hasDividers:_,onChange:v,...y}=e,b=g?`${g}-item-hint`:void 0,x=e=>{v?.(r,e.target.checked,e)},S=s?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:s}}):o;return(0,l.jsxs)(`div`,{className:a(`block`,_&&`border-t border-b border-neutral-base -mb-px`,f),children:[(0,l.jsxs)(`div`,{className:`relative flex items-start py-base`,children:[(0,l.jsx)(`div`,{className:`flex items-center mx-sm`,children:(0,l.jsx)(`input`,{ref:t,id:n,name:i,type:`checkbox`,value:r,checked:c,disabled:d,className:a(`w-6`,`h-6`,`text-primary-base`,`transition`,`duration-150`,`ease-in-out`,`border-black`,`focus:border-black`,`focus:outline-black`,`focus:outline-1`,`focus:outline-offset-2`,`focus:ring-4`,`focus:ring-offset-0`,`focus:ring-warning-base`,`disabled:bg-neutral-base`,`disabled:border-neutral-base`),onChange:x,...y})}),(0,l.jsxs)(`div`,{className:`pt-0.5 leading-5`,children:[(0,l.jsx)(`label`,{htmlFor:n,className:`cursor-pointer`,children:S}),(p||m)&&(0,l.jsx)(`p`,{id:b,className:`block text-neutral-dark text-sm`,children:m?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:m}}):p})]})]}),h&&c&&(0,l.jsx)(`div`,{className:`mb-lg ml-5 pt-sm pb-base pl-6 origin-top-left border-l-2 border-primary-base`,id:`conditional-${n}`,children:(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:h}})})]})}),u.displayName=`CheckboxItem`,d=(0,c.forwardRef)((e,t)=>{let{id:n,name:r,items:i,value:c=[],legendText:d,legendHtml:f,legendIsPageHeading:p,legendHeadingLevel:m,legendClasses:h,hintText:g,hintHtml:_,errorMessageText:v,errorMessageHtml:y,errorVisuallyHiddenText:b,errorId:x,hintId:S,formGroupClasses:C,classes:w,hasError:T,hasDividers:E,children:D,onChange:O,...k}=e,A=S||o(n),j=s(x,n),M=T||!!(v||y),N=(e,t,n)=>{let r;r=t?[...c,e]:c.filter(t=>t!==e),O?.(r)},P=()=>{if(!d&&!f)return null;let e=f?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:f}}):d;return p?(0,l.jsx)(`h${m||2}`,{className:h,children:e}):(0,l.jsx)(`span`,{className:h,children:e})};return(0,l.jsxs)(`div`,{ref:t,className:a(`c-form-group`,C,M&&`c-form-group--error`),...k,children:[d||f?(0,l.jsx)(`fieldset`,{className:`border-0 p-0 m-0`,children:(0,l.jsx)(`legend`,{className:`block font-semibold mb-sm`,children:P()})}):null,(g||_)&&(0,l.jsx)(`p`,{id:A,className:`block text-neutral-dark mb-sm`,children:_?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:_}}):g}),(v||y)&&(0,l.jsxs)(`p`,{id:j,className:`block font-semibold text-alert-base mb-sm`,children:[(0,l.jsxs)(`span`,{className:`sr-only`,children:[b||`Error`,`: `]}),y?(0,l.jsx)(`span`,{dangerouslySetInnerHTML:{__html:y}}):v]}),D,!D&&i&&(0,l.jsx)(`div`,{className:a(`c-checkboxes`,w),id:n,children:i.map((e,t)=>e.divider?(0,l.jsx)(`div`,{className:`py-base px-sm`,children:(0,l.jsx)(`p`,{children:e.divider})},`divider-${t}`):(0,l.jsx)(u,{id:e.id||(n?`${n}-${t}`:void 0),name:e.name||r,value:e.value,text:e.text,html:e.html,checked:c.includes(e.value),disabled:e.disabled,classes:e.classes,hintText:e.hintText,hintHtml:e.hintHtml,conditionalHtml:e.conditionalHtml,hintIdSuffix:e.id||(n?`${n}-${t}`:void 0),hasDividers:E,onChange:N},e.value||t))})]})}),d.displayName=`Checkboxes`,u.__docgenInfo={description:`Checkbox item component - a single checkbox with label and optional hint`,methods:[],displayName:`CheckboxItem`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier`},value:{required:!0,tsType:{name:`string`},description:`Checkbox value`},name:{required:!0,tsType:{name:`string`},description:`Checkbox name`},text:{required:!1,tsType:{name:`string`},description:`Checkbox label text`},html:{required:!1,tsType:{name:`string`},description:`Checkbox label HTML`},checked:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is checked`},indeterminate:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is in indeterminate state`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the checkbox is disabled`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},conditionalHtml:{required:!1,tsType:{name:`string`},description:`Conditional content shown when checked`},hintIdSuffix:{required:!1,tsType:{name:`string`},description:`Hint ID suffix`},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Has dividers`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string, checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`string`},name:`value`},{type:{name:`boolean`},name:`checked`},{type:{name:`ReactChangeEvent`,raw:`React.ChangeEvent<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},name:`event`}],return:{name:`void`}}},description:`Change event handler`}},composes:[`Omit`]},d.__docgenInfo={description:`Checkboxes component - a group of checkboxes with legend, hint, and error message`,methods:[],displayName:`Checkboxes`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier prefix for checkbox items`},name:{required:!0,tsType:{name:`string`},description:`Name attribute for all checkboxes in the group`},items:{required:!1,tsType:{name:`Array`,elements:[{name:`CheckboxItemData`}],raw:`CheckboxItemData[]`},description:`Array of checkbox items`},value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Currently selected values (array for multiple select)`},legendText:{required:!1,tsType:{name:`string`},description:`Legend text (field label)`},legendHtml:{required:!1,tsType:{name:`string`},description:`Legend HTML`},legendIsPageHeading:{required:!1,tsType:{name:`boolean`},description:`Legend is page heading`},legendHeadingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`}]},description:`Legend heading level`},legendClasses:{required:!1,tsType:{name:`string`},description:`Legend CSS classes`},hintText:{required:!1,tsType:{name:`string`},description:`Hint text`},hintHtml:{required:!1,tsType:{name:`string`},description:`Hint HTML`},errorMessageText:{required:!1,tsType:{name:`string`},description:`Error message text`},errorMessageHtml:{required:!1,tsType:{name:`string`},description:`Error message HTML`},errorVisuallyHiddenText:{required:!1,tsType:{name:`string`},description:`Visually hidden text for error`},errorId:{required:!1,tsType:{name:`string`},description:`Error ID`},hintId:{required:!1,tsType:{name:`string`},description:`Hint ID`},formGroupClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the form group`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes for the checkboxes container`},hasError:{required:!1,tsType:{name:`boolean`},description:`Whether has error state`},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Whether has dividers between items`},children:{required:!1,tsType:{name:`ReactNode`},description:`Child components (for compound pattern)`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`value`}],return:{name:`void`}}},description:`Change event handler`}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;t((()=>{f(),p={title:`Forms/Checkboxes`,component:d,tags:[`autodocs`]},m={args:{id:`default`,name:`default`,legendText:`¿Cómo prefieres que te contactemos?`,hintText:`Si lo deseas puedes seleccionar varios elementos.`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correo-postal`,text:`Correo postal`},{value:`telefono`,text:`Teléfono`}]}},h={args:{id:`with-id-and-name`,name:`with-id-and-name`,legendText:`¿Cómo prefieres que te contactemos?`,hintText:`Si lo deseas puedes seleccionar varios elementos.`,items:[{name:`correo-electronico`,id:`correo-electronico-id`,value:`correo-electronico`,text:`Correo electrónico`},{name:`correo-postal`,id:`correo-postal-id`,value:`correo-postal`,text:`Correo postal`}]}},g={args:{id:`hints-on-items`,legendText:`¿Cómo prefieres que te contactemos?`,legendIsPageHeading:!0,items:[{name:`correo-electronico`,id:`correo-electronico-a`,value:`desy-correo-electronico`,text:`Correo electrónico`,hintText:`Asegúrate de que el correo no llega a la bandeja de spam.`},{name:`correo-postal`,id:`desy-correo-postal-a`,value:`desy-correo-postal-a`,text:`Correo postal`,hintText:`Asegúrate de haber introducido la dirección postal correctamente.`}]}},_={args:{id:`has-dividers`,legendText:`¿Cómo prefieres que te contactemos?`,hintText:`Si lo deseas puedes seleccionar varios elementos.`,hasDividers:!0,items:[{name:`correo-electronico`,id:`correo-electronico-b`,value:`desy-correo-electronico`,text:`Correo electrónico`},{name:`correo-postal`,id:`desy-correo-postal-b`,value:`desy-correo-postal-b`,text:`Correo postal`,hintText:`Asegúrate de haber introducido la dirección postal correctamente.`},{name:`telefono`,id:`telefono-b`,value:`telefono`,text:`Teléfono`,checked:!0},{name:`correo-postal`,id:`desy-correo-postal-c`,value:`desy-correo-postal-c`,text:`Correo postal`,hintText:`Asegúrate de haber introducido la dirección postal correctamente.`}]}},v={args:{id:`classes`,legendText:`¿Cómo prefieres que te contactemos?`,items:[{name:`correo-electronico`,id:`correo-electronico-c`,value:`desy-correo-electronico`,text:`Correo electrónico`,hintText:`Asegúrate de que el correo no llega a la bandeja de spam.`,classes:`bg-primary-light`},{name:`correo-postal`,id:`desy-correo-postal-d`,value:`desy-correo-postal-d`,text:`Correo postal`,hintText:`Asegúrate de haber introducido la dirección postal correctamente.`,classes:`bg-neutral-lighter`}]}},y={args:{id:`disabled-item`,name:`colours`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correo-postal`,text:`Correo postal`,disabled:!0,checked:!0},{value:`telefono`,text:`Teléfono`,disabled:!0}]}},b={args:{id:`medium-legend`,name:`medium-legend`,legendText:`¿Cómo prefieres que te contactemos?`,legendClasses:`c-h2`,hintText:`Si lo deseas puedes seleccionar varios elementos.`,errorMessageText:`Tienes que seleccionar al menos una opción. Soluciona el error.`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correp-postal`,text:`Correo postal`},{value:`telefono`,text:`Teléfono`}]}},x={args:{id:`without-fieldset`,name:`without-fieldset`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correp-postal`,text:`Correo postal`},{value:`telefono`,text:`Teléfono`}]}},S={args:{id:`describedby`,name:`describedby`,errorMessageText:`Por favor, debes aceptar los términos y condiciones. Soluciona el error.`,items:[{value:`acepto`,html:`Acepto los <a href="#" target="_blank" class="c-link" title="Se abre en ventana nueva del navegador">términos y condiciones</a>`}]}},C={args:{name:`t-and-c-with-hint`,errorMessageText:`Por favor, debes aceptar los términos y condiciones. Soluciona el error.`,items:[{value:`acepto`,html:`Acepto los <a href="#" target="_blank" class="c-link" title="Se abre en ventana nueva del navegador">términos y condiciones</a>`,hintText:`Puedes visualizarlos en ventana nueva del navegador`}]}},w={args:{name:`colours`,errorMessageText:`Tienes que seleccionar al menos una opción. Soluciona el error.`,legendText:`¿Cómo prefieres que te contactemos?`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correo-postal`,text:`Correo postal`},{value:`telefono`,text:`Teléfono`}]}},T={args:{id:`error-message`,name:`error-message`,errorMessageText:`Tienes que seleccionar al menos una opción. Soluciona el error.`,legendText:`¿Cómo prefieres que te contactemos?`,items:[{value:`correo-electronico`,text:`Correo electrónico`},{value:`correp-postal`,text:`Correo postal`},{value:`telefono`,text:`Teléfono`}]}},E={args:{id:`error-and-hints`,name:`error-and-hints`,errorMessageText:`Tienes que seleccionar al menos una opción. Soluciona el error.`,legendText:`¿Cómo prefieres que te contactemos?`,items:[{value:`correo-electronico`,text:`Correo electrónico`,hintText:`Asegúrate de que nuestros correos no lleguen a la bandeja de spam.`},{value:`correo-postal`,text:`Correo postal`,hintText:`Asegúrate de haber introducido correctamente tu dirección.`},{value:`telefono`,text:`Teléfono`,hintText:`Sólo enviamos mensajes durante el día.`}]}},D={args:{id:`long-option`,name:`long-option`,hintText:`Nullam id dolor id nibh ultricies vehicula ut id elit.`,errorMessageText:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluciona el error.`,legendText:`Maecenas faucibus mollis interdum?`,items:[{value:`nullam`,text:`Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.`},{value:`aenean`,text:`Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.`},{value:`fusce`,text:`Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.`}]}},O={args:{id:`small`,name:`peque`,classes:`c-checkboxes--sm`,items:[{value:`correo-electronico`,text:`Correo electrónico`,classes:`-mt-base`},{value:`correo-postal`,text:`Correo postal`,classes:`-mt-base`},{value:`telefono`,text:`Teléfono`,classes:`-mt-base`}]}},k={args:{id:`indeterminate`,name:`indeterminate`,classes:`c-checkboxes--sm`,items:[{value:`indeterminate`,text:`1 elemento seleccionado`,indeterminate:!0,classes:`-mt-base`}]}},A={args:{id:`indeterminate-checked`,name:`indeterminate-checked`,classes:`c-checkboxes--sm`,items:[{value:`indeterminate-checked-item`,text:`1 elemento seleccionado`,indeterminate:!0,checked:!1,classes:`-mt-base`}]}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default',
    name: 'default',
    legendText: '¿Cómo prefieres que te contactemos?',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico'
    }, {
      value: 'correo-postal',
      text: 'Correo postal'
    }, {
      value: 'telefono',
      text: 'Teléfono'
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-id-and-name',
    name: 'with-id-and-name',
    legendText: '¿Cómo prefieres que te contactemos?',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    items: [{
      name: 'correo-electronico',
      id: 'correo-electronico-id',
      value: 'correo-electronico',
      text: 'Correo electrónico'
    }, {
      name: 'correo-postal',
      id: 'correo-postal-id',
      value: 'correo-postal',
      text: 'Correo postal'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'hints-on-items',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendIsPageHeading: true,
    items: [{
      name: 'correo-electronico',
      id: 'correo-electronico-a',
      value: 'desy-correo-electronico',
      text: 'Correo electrónico',
      hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.'
    }, {
      name: 'correo-postal',
      id: 'desy-correo-postal-a',
      value: 'desy-correo-postal-a',
      text: 'Correo postal',
      hintText: 'Asegúrate de haber introducido la dirección postal correctamente.'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'has-dividers',
    legendText: '¿Cómo prefieres que te contactemos?',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    hasDividers: true,
    items: [{
      name: 'correo-electronico',
      id: 'correo-electronico-b',
      value: 'desy-correo-electronico',
      text: 'Correo electrónico'
    }, {
      name: 'correo-postal',
      id: 'desy-correo-postal-b',
      value: 'desy-correo-postal-b',
      text: 'Correo postal',
      hintText: 'Asegúrate de haber introducido la dirección postal correctamente.'
    }, {
      name: 'telefono',
      id: 'telefono-b',
      value: 'telefono',
      text: 'Teléfono',
      checked: true
    }, {
      name: 'correo-postal',
      id: 'desy-correo-postal-c',
      value: 'desy-correo-postal-c',
      text: 'Correo postal',
      hintText: 'Asegúrate de haber introducido la dirección postal correctamente.'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'classes',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [{
      name: 'correo-electronico',
      id: 'correo-electronico-c',
      value: 'desy-correo-electronico',
      text: 'Correo electrónico',
      hintText: 'Asegúrate de que el correo no llega a la bandeja de spam.',
      classes: 'bg-primary-light'
    }, {
      name: 'correo-postal',
      id: 'desy-correo-postal-d',
      value: 'desy-correo-postal-d',
      text: 'Correo postal',
      hintText: 'Asegúrate de haber introducido la dirección postal correctamente.',
      classes: 'bg-neutral-lighter'
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-item',
    name: 'colours',
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico'
    }, {
      value: 'correo-postal',
      text: 'Correo postal',
      disabled: true,
      checked: true
    }, {
      value: 'telefono',
      text: 'Teléfono',
      disabled: true
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'medium-legend',
    name: 'medium-legend',
    legendText: '¿Cómo prefieres que te contactemos?',
    legendClasses: 'c-h2',
    hintText: 'Si lo deseas puedes seleccionar varios elementos.',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'describedby',
    name: 'describedby',
    errorMessageText: 'Por favor, debes aceptar los términos y condiciones. Soluciona el error.',
    items: [{
      value: 'acepto',
      html: 'Acepto los <a href="#" target="_blank" class="c-link" title="Se abre en ventana nueva del navegador">términos y condiciones</a>'
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: 't-and-c-with-hint',
    errorMessageText: 'Por favor, debes aceptar los términos y condiciones. Soluciona el error.',
    items: [{
      value: 'acepto',
      html: 'Acepto los <a href="#" target="_blank" class="c-link" title="Se abre en ventana nueva del navegador">términos y condiciones</a>',
      hintText: 'Puedes visualizarlos en ventana nueva del navegador'
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'colours',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico'
    }, {
      value: 'correo-postal',
      text: 'Correo postal'
    }, {
      value: 'telefono',
      text: 'Teléfono'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'error-message',
    name: 'error-message',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
    legendText: '¿Cómo prefieres que te contactemos?',
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'error-and-hints',
    name: 'error-and-hints',
    errorMessageText: 'Tienes que seleccionar al menos una opción. Soluciona el error.',
    legendText: '¿Cómo prefieres que te contactemos?',
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico',
      hintText: 'Asegúrate de que nuestros correos no lleguen a la bandeja de spam.'
    }, {
      value: 'correo-postal',
      text: 'Correo postal',
      hintText: 'Asegúrate de haber introducido correctamente tu dirección.'
    }, {
      value: 'telefono',
      text: 'Teléfono',
      hintText: 'Sólo enviamos mensajes durante el día.'
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'long-option',
    name: 'long-option',
    hintText: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
    errorMessageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Soluciona el error.',
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'small',
    name: 'peque',
    classes: 'c-checkboxes--sm',
    items: [{
      value: 'correo-electronico',
      text: 'Correo electrónico',
      classes: '-mt-base'
    }, {
      value: 'correo-postal',
      text: 'Correo postal',
      classes: '-mt-base'
    }, {
      value: 'telefono',
      text: 'Teléfono',
      classes: '-mt-base'
    }]
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'indeterminate',
    name: 'indeterminate',
    classes: 'c-checkboxes--sm',
    items: [{
      value: 'indeterminate',
      text: '1 elemento seleccionado',
      indeterminate: true,
      classes: '-mt-base'
    }]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'indeterminate-checked',
    name: 'indeterminate-checked',
    classes: 'c-checkboxes--sm',
    items: [{
      value: 'indeterminate-checked-item',
      text: '1 elemento seleccionado',
      indeterminate: true,
      checked: false,
      classes: '-mt-base'
    }]
  }
}`,...A.parameters?.docs?.source}}},j=[`PorDefecto`,`ConIdYName`,`ConPistasEnLosItems`,`ConLineasDivisorias`,`ConClasesDeCssAplicadas`,`ConItemDeshabilitado`,`ConUnLegendDelTamanoDeUnEncabezadoH2`,`SinFieldset`,`ConUnaSolaOpcionUsandoAriaDescribedby`,`ConUnaSolaOpcionYPistaUsandoAriaDescribedby`,`ConFieldsetYMensajeDeError`,`ConMensajeDeError`,`ConMensajeDeErrorYPistasEnLosItems`,`ConUnTextoDeItemMuyLargo`,`Pequen`,`Indeterminado`,`IndeterminadoMarcado`]}))();export{v as ConClasesDeCssAplicadas,w as ConFieldsetYMensajeDeError,h as ConIdYName,y as ConItemDeshabilitado,_ as ConLineasDivisorias,T as ConMensajeDeError,E as ConMensajeDeErrorYPistasEnLosItems,g as ConPistasEnLosItems,b as ConUnLegendDelTamanoDeUnEncabezadoH2,D as ConUnTextoDeItemMuyLargo,S as ConUnaSolaOpcionUsandoAriaDescribedby,C as ConUnaSolaOpcionYPistaUsandoAriaDescribedby,k as Indeterminado,A as IndeterminadoMarcado,O as Pequen,m as PorDefecto,x as SinFieldset,j as __namedExportsOrder,p as default};