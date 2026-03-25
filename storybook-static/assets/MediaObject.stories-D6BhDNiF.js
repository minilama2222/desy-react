import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-Db8mzpb1.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({children:e,className:t,...n}){return(0,s.jsx)(`div`,{className:i(`flex-none`,t),...n,children:e})}function o({figureHtml:e,center:t=!1,reverse:n=!1,figureClasses:r,contentClasses:a,children:o,figure:c,className:l,...u}){return(0,s.jsxs)(`div`,{className:i(`flex`,t&&`items-center`,n&&`flex-row-reverse`,l),...u,children:[e?(0,s.jsx)(`div`,{className:i(`flex-none`,n&&`order-1`,r),dangerouslySetInnerHTML:{__html:e}}):c?(0,s.jsx)(`div`,{className:i(`flex-none`,n&&`order-1`,r),children:c}):null,(0,s.jsx)(`div`,{className:i(`flex-1`,a),children:o})]})}var s,c=e((()=>{t(),r(),s=n(),a.__docgenInfo={description:`MediaObject figure container - wraps media content (images, icons, etc.)`,methods:[],displayName:`MediaObjectFigure`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:`Figure content`},className:{required:!1,tsType:{name:`string`},description:`CSS classes`}},composes:[`HTMLAttributes`]},o.__docgenInfo={description:`MediaObject component - displays a figure (image/icon) alongside text content.
Supports different layouts: default, centered, and reversed.`,methods:[],displayName:`MediaObject`,props:{figureHtml:{required:!1,tsType:{name:`string`},description:`Figure/media content (image, icon, etc.) as HTML`},center:{required:!1,tsType:{name:`boolean`},description:`Center align the content vertically`,defaultValue:{value:`false`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Reverse the order (content first, figure second)`,defaultValue:{value:`false`,computed:!1}},figureClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the figure container`},contentClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the content container`},children:{required:!1,tsType:{name:`ReactNode`},description:`Content body`},figure:{required:!1,tsType:{name:`ReactNode`},description:`Figure content (slot)`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`}},composes:[`HTMLAttributes`]}})),l,u,d,f,p,m,h,g,_;e((()=>{c(),l=n(),u={title:`Views/MediaObject`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`MediaObject displays a figure (image, icon) alongside text content with flexible layout options.`}}},argTypes:{center:{control:`boolean`},reverse:{control:`boolean`},figureClasses:{control:`text`},contentClasses:{control:`text`}}},d=`https://picsum.photos/120/120`,f={render:()=>(0,l.jsxs)(o,{figureHtml:`<img src="${d}" alt="Imagen de ejemplo" class="rounded-lg" />`,children:[(0,l.jsx)(`h3`,{className:`font-semibold text-lg`,children:`Título del contenido`}),(0,l.jsx)(`p`,{className:`text-neutral-dark`,children:`Este es un párrafo de ejemplo que acompaña a la imagen. El componente MediaObject permite mostrar imágenes o iconos junto con contenido de texto de forma flexible.`})]})},p={render:()=>(0,l.jsxs)(o,{figureHtml:`<img src="${d}" alt="Imagen centrada" class="rounded-full" />`,center:!0,children:[(0,l.jsx)(`h3`,{className:`font-semibold text-lg`,children:`Contenido centrado`}),(0,l.jsx)(`p`,{className:`text-neutral-dark`,children:`El contenido está centrado verticalmente con la imagen.`})]})},m={render:()=>(0,l.jsxs)(o,{figureHtml:`<img src="${d}" alt="Imagen invertida" class="rounded-lg" />`,reverse:!0,children:[(0,l.jsx)(`h3`,{className:`font-semibold text-lg`,children:`Orden invertido`}),(0,l.jsx)(`p`,{className:`text-neutral-dark`,children:`El contenido aparece antes que la imagen.`})]})},h={render:()=>(0,l.jsxs)(o,{center:!0,children:[(0,l.jsx)(a,{children:(0,l.jsx)(`img`,{src:d,alt:`Avatar`,className:`w-16 h-16 rounded-full object-cover`})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h3`,{className:`font-semibold`,children:`María García López`}),(0,l.jsx)(`p`,{className:`text-sm text-neutral-dark`,children:`Técnico de primera línea`})]})]})},g={render:()=>(0,l.jsxs)(o,{figureHtml:`<div class="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1.5em" height="1.5em" class="text-success-dark" aria-hidden="true">
          <path fill="currentColor" d="M39.94 125a19.88 19.88 0 01-15.53-7.81L2.48 92.26a10 10 0 0115-13.2l20.55 23.39a2.5 2.5 0 003.68.08l81-84.42a10.002 10.002 0 1114.5 13.78l-82.02 86.33A19.41 19.41 0 0139.94 125z"/>
        </svg>
      </div>`,center:!0,children:[(0,l.jsx)(`h3`,{className:`font-semibold text-lg`,children:`Notificación enviada`}),(0,l.jsx)(`p`,{className:`text-neutral-dark`,children:`Su notificación ha sido enviada correctamente.`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <MediaObject figureHtml={\`<img src="\${sampleImage}" alt="Imagen de ejemplo" class="rounded-lg" />\`}>
      <h3 className="font-semibold text-lg">Título del contenido</h3>
      <p className="text-neutral-dark">
        Este es un párrafo de ejemplo que acompaña a la imagen. El componente MediaObject
        permite mostrar imágenes o iconos junto con contenido de texto de forma flexible.
      </p>
    </MediaObject>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <MediaObject figureHtml={\`<img src="\${sampleImage}" alt="Imagen centrada" class="rounded-full" />\`} center>
      <h3 className="font-semibold text-lg">Contenido centrado</h3>
      <p className="text-neutral-dark">
        El contenido está centrado verticalmente con la imagen.
      </p>
    </MediaObject>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <MediaObject figureHtml={\`<img src="\${sampleImage}" alt="Imagen invertida" class="rounded-lg" />\`} reverse>
      <h3 className="font-semibold text-lg">Orden invertido</h3>
      <p className="text-neutral-dark">
        El contenido aparece antes que la imagen.
      </p>
    </MediaObject>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <MediaObject center>
      <MediaObjectFigure>
        <img src={sampleImage} alt="Avatar" className="w-16 h-16 rounded-full object-cover" />
      </MediaObjectFigure>
      <div>
        <h3 className="font-semibold">María García López</h3>
        <p className="text-sm text-neutral-dark">Técnico de primera línea</p>
      </div>
    </MediaObject>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <MediaObject figureHtml={\`<div class="w-12 h-12 rounded-full bg-success-light flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1.5em" height="1.5em" class="text-success-dark" aria-hidden="true">
          <path fill="currentColor" d="M39.94 125a19.88 19.88 0 01-15.53-7.81L2.48 92.26a10 10 0 0115-13.2l20.55 23.39a2.5 2.5 0 003.68.08l81-84.42a10.002 10.002 0 1114.5 13.78l-82.02 86.33A19.41 19.41 0 0139.94 125z"/>
        </svg>
      </div>\`} center>
      <h3 className="font-semibold text-lg">Notificación enviada</h3>
      <p className="text-neutral-dark">
        Su notificación ha sido enviada correctamente.
      </p>
    </MediaObject>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithCenteredContent`,`WithReversedOrder`,`WithFigureSlot`,`WithIcon`]}))();export{f as Default,p as WithCenteredContent,h as WithFigureSlot,g as WithIcon,m as WithReversedOrder,_ as __namedExportsOrder,u as default};