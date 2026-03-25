import{n as e}from"./chunk-BneVvdWh.js";import{a as t}from"./iframe-CPGy17Pw.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{n as r,t as i}from"./clsx-Bs4OuGzP.js";function a({children:e,className:t,...n}){return(0,s.jsx)(`div`,{className:i(`flex-none`,t),...n,children:e})}function o({figureHtml:e,center:t=!1,reverse:n=!1,figureClasses:r,contentClasses:a,children:o,figure:c,className:l,...u}){return(0,s.jsxs)(`div`,{className:i(`flex`,t&&`items-center`,n&&`flex-row-reverse`,l),...u,children:[e?(0,s.jsx)(`div`,{className:i(`flex-none`,n&&`order-1`,r),dangerouslySetInnerHTML:{__html:e}}):c?(0,s.jsx)(`div`,{className:i(`flex-none`,n&&`order-1`,r),children:c}):null,(0,s.jsx)(`div`,{className:i(`flex-1`,a),children:o})]})}var s,c=e((()=>{t(),r(),s=n(),a.__docgenInfo={description:`MediaObject figure container - wraps media content (images, icons, etc.)`,methods:[],displayName:`MediaObjectFigure`,props:{children:{required:!1,tsType:{name:`ReactNode`},description:`Figure content`},className:{required:!1,tsType:{name:`string`},description:`CSS classes`}},composes:[`HTMLAttributes`]},o.__docgenInfo={description:`MediaObject component - displays a figure (image/icon) alongside text content.
Supports different layouts: default, centered, and reversed.`,methods:[],displayName:`MediaObject`,props:{figureHtml:{required:!1,tsType:{name:`string`},description:`Figure/media content (image, icon, etc.) as HTML`},center:{required:!1,tsType:{name:`boolean`},description:`Center align the content vertically`,defaultValue:{value:`false`,computed:!1}},reverse:{required:!1,tsType:{name:`boolean`},description:`Reverse the order (content first, figure second)`,defaultValue:{value:`false`,computed:!1}},figureClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the figure container`},contentClasses:{required:!1,tsType:{name:`string`},description:`CSS classes for the content container`},children:{required:!1,tsType:{name:`ReactNode`},description:`Content body`},figure:{required:!1,tsType:{name:`ReactNode`},description:`Figure content (slot)`},classes:{required:!1,tsType:{name:`string`},description:`CSS classes`}},composes:[`HTMLAttributes`]}})),l,u,d,f,p,m,h,g,_,v;e((()=>{c(),l=n(),u={title:`Views/MediaObject`,component:o,tags:[`autodocs`]},d=`<div class=' w-20 h-20 '><div class=' h-full border-4 border-dashed border-gray-200 rounded-lg '></div></div>`,f=`<p class='c-paragraph-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus, elit et faucibus finibus, massa enim egestas leo, et lobortis lorem elit non enim. Nullam molestie nunc eget eleifend porttitor. Suspendisse ornare ligula erat, non dapibus nunc rhoncus at. Maecenas vitae urna viverra, semper mauris vitae, euismod ante. Sed finibus quam ut orci pellentesque, in tincidunt risus tristique. Vivamus efficitur purus urna, sed blandit lorem convallis vel. Mauris tincidunt tincidunt ipsum finibus euismod. Sed eget tincidunt mauris. Duis viverra commodo consectetur. Nullam viverra tincidunt nisl, sit amet dignissim lacus mattis imperdiet.</p>`,p={args:{figureHtml:d,children:(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:f}})}},m={args:{reverse:!0,figureHtml:d,children:(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:f}})}},h={args:{center:!0,figureHtml:d,children:(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:f}})}},g={args:{figureHtml:d,figureClasses:`mr-base`,contentClasses:`text-sm`,className:`mb-base`,children:(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:f}})}},_={args:{reverse:!0,figureHtml:d,figureClasses:`ml-base`,contentClasses:`text-sm`,className:`mb-base`,children:(0,l.jsx)(`div`,{dangerouslySetInnerHTML:{__html:f}})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    figureHtml: sampleFigure,
    children: <div dangerouslySetInnerHTML={{
      __html: sampleContent
    }} />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: true,
    figureHtml: sampleFigure,
    children: <div dangerouslySetInnerHTML={{
      __html: sampleContent
    }} />
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    center: true,
    figureHtml: sampleFigure,
    children: <div dangerouslySetInnerHTML={{
      __html: sampleContent
    }} />
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    figureHtml: sampleFigure,
    figureClasses: 'mr-base',
    contentClasses: 'text-sm',
    className: 'mb-base',
    children: <div dangerouslySetInnerHTML={{
      __html: sampleContent
    }} />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: true,
    figureHtml: sampleFigure,
    figureClasses: 'ml-base',
    contentClasses: 'text-sm',
    className: 'mb-base',
    children: <div dangerouslySetInnerHTML={{
      __html: sampleContent
    }} />
  }
}`,..._.parameters?.docs?.source}}},v=[`PorDefecto`,`Invertido`,`FigureCentradoVerticalmente`,`ClasesAñadiendoPaddingYMargin`,`OrdenInvertidoConClasesPaddingYMargin`]}))();export{g as ClasesAñadiendoPaddingYMargin,h as FigureCentradoVerticalmente,m as Invertido,_ as OrdenInvertidoConClasesPaddingYMargin,p as PorDefecto,v as __namedExportsOrder,u as default};