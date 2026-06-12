import{r as _,c as g,o as mo,C as po,w as uo,J as vo,d as bo,x as L,u as i,n as F,l as S,e as P}from"./vue.esm-bundler-BCWWDzSy.js";import{b as fo,d as $,w as _o}from"./install-CHjgJfcB.js";import{d as H}from"./error-Cq9Fpw4b.js";import{_ as e}from"./iframe-CZSwcQU0.js";import{d as xo}from"./index-DL4FoQEl.js";import{u as ho}from"./index-CU2PSoyO.js";import{T as eo}from"./index-B7Umw5wx.js";import{G as z}from"./ConfigProvider-BAdTAJXu.js";import"../sb-preview/runtime.js";import"./index-tMAtNoGV.js";import"./index-DJArRuUx.js";import"./index-B9DYlcmC.js";import"./_arrayPush-DXBsyDbg.js";import"./index-BoOdRfEY.js";import"./event-BB_Ol6Sd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A=["icon-bre-b","icon-global66","icon-global66-b2b","icon-global66-b2b-on-dark","icon-global66-b2c","icon-global66-b2c-on-dark","label-global66","logo-alfin","logo-banbif","logo-bancolombia","logo-bancom","logo-bbva","logo-bcp","logo-bim","logo-caja-huancayo","logo-caja-ica","logo-caja-lima","logo-caja-los-andes","logo-caja-piura","logo-caja-sullana","logo-caja-tacna","logo-caja-trujillo","logo-cce","logo-citibank","logo-cmac-arequipa","logo-compartamos-financiera","logo-cooperativa-abaco","logo-credinka","logo-crediscotia","logo-dale","logo-falabella","logo-financiera-confianza","logo-financiera-efectiva","logo-global66","logo-gnb","logo-horizontal-global66","logo-horizontal-global66-b2b","logo-horizontal-global66-b2b-on-dark","logo-horizontal-global66-on-dark","logo-interbank","logo-ligo","logo-luqea","logo-mastercard","logo-mi-banco","logo-nacion","logo-nequi","logo-pichincha","logo-plin","logo-prexpe","logo-pse","logo-ripley","logo-scotiabank","logo-tarjeta-oh","logo-vertical-global66","logo-vertical-global66-b2b","logo-vertical-global66-b2b-on-dark","logo-vertical-global66-on-dark","logo-visa","logo-yape"],Oo=[{id:"global66",label:"Global66",names:["icon-global66","icon-global66-b2b","icon-global66-b2b-on-dark","icon-global66-b2c","icon-global66-b2c-on-dark","label-global66","logo-global66","logo-horizontal-global66","logo-horizontal-global66-on-dark","logo-horizontal-global66-b2b","logo-horizontal-global66-b2b-on-dark","logo-vertical-global66","logo-vertical-global66-on-dark","logo-vertical-global66-b2b","logo-vertical-global66-b2b-on-dark"]},{id:"colombia",label:"Colombia",names:["icon-bre-b","logo-bancolombia","logo-dale","logo-nequi","logo-pse"]},{id:"medios-pago",label:"Medios de pago",names:["logo-ligo","logo-mastercard","logo-plin","logo-prexpe","logo-visa","logo-yape"]},{id:"peru",label:"Perú — bancos y financieras",names:["logo-alfin","logo-banbif","logo-bancom","logo-bbva","logo-bcp","logo-bim","logo-caja-huancayo","logo-caja-ica","logo-caja-lima","logo-caja-los-andes","logo-caja-piura","logo-caja-sullana","logo-caja-tacna","logo-caja-trujillo","logo-cce","logo-citibank","logo-cmac-arequipa","logo-compartamos-financiera","logo-cooperativa-abaco","logo-credinka","logo-crediscotia","logo-falabella","logo-financiera-confianza","logo-financiera-efectiva","logo-gnb","logo-interbank","logo-luqea","logo-mi-banco","logo-nacion","logo-pichincha","logo-ripley","logo-scotiabank","logo-tarjeta-oh"]}];A.filter(o=>o.startsWith("icon-")||o.startsWith("label-"));const v={"2xs":"22px",xs:"44px",sm:"64px",md:"80px",lg:"112px",xl:"160px","2xl":"208px","3xl":"260px"},Z={"2xs":{width:"28px",height:"22px"},xs:{width:"56px",height:"44px"},sm:{width:"80px",height:"64px"},md:{width:"100px",height:"80px"},lg:{width:"140px",height:"112px"},xl:{width:"200px",height:"160px"},"2xl":{width:"260px",height:"208px"},"3xl":{width:"320px",height:"260px"}},K={none:"none",grayscale:"grayscale(100%)",black:"brightness(0)",white:"brightness(0) invert(1)",sepia:"sepia(100%)","opacity-50":"opacity(50%)","high-contrast":"contrast(200%)",invert:"invert(100%)"},N=Object.keys(K),Eo={none:"Original",grayscale:"Gris",black:"Negro",white:"Blanco",sepia:"Sepia","opacity-50":"50% opacidad","high-contrast":"Contraste alto",invert:"Invertido"},zo=fo({name:{type:$(String),required:!0},size:{type:$(String),default:void 0},sizeCustom:{type:String,default:""},filter:{type:$(String),default:"none"},color:{type:String,default:""},lazyLoad:{type:Boolean,default:!0}});function yo(o){o.name&&!A.includes(o.name)&&H("GLogo",`Invalid logo name: "${o.name}". Available logos: ${A.join(", ")}`),o.size&&!(o.size in v)&&H("GLogo",`Invalid size: "${o.size}". Available sizes: ${Object.keys(v).join(", ")}`),o.filter&&!N.includes(o.filter)&&H("GLogo",`Invalid filter: "${o.filter}". Available filters: ${N.join(", ")}`)}const Lo=Object.assign({"../assets/logos/icon-bre-b.svg":()=>e(()=>import("./icon-bre-b-BLUZZhN3.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/icon-global66-b2b-on-dark.svg":()=>e(()=>import("./icon-global66-b2b-on-dark-CFTLpp80.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/icon-global66-b2b.svg":()=>e(()=>import("./icon-global66-b2b-DopRlx3R.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/icon-global66-b2c-on-dark.svg":()=>e(()=>import("./icon-global66-b2c-on-dark-OnCm9wgF.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/icon-global66-b2c.svg":()=>e(()=>import("./icon-global66-b2c-D9gMjGzC.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/icon-global66.svg":()=>e(()=>import("./icon-global66-CTTuz_U_.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/label-global66.svg":()=>e(()=>import("./label-global66-BiaDgHZt.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-alfin.svg":()=>e(()=>import("./logo-alfin--dcLUnIs.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-banbif.svg":()=>e(()=>import("./logo-banbif-D6e2JVxE.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-bancolombia.svg":()=>e(()=>import("./logo-bancolombia-Bz6khP8a.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-bancom.svg":()=>e(()=>import("./logo-bancom-n0Tk01A1.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-bbva.svg":()=>e(()=>import("./logo-bbva-CClA_adY.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-bcp.svg":()=>e(()=>import("./logo-bcp-CamnaWcw.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-bim.svg":()=>e(()=>import("./logo-bim-CuRQkDLL.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-huancayo.svg":()=>e(()=>import("./logo-caja-huancayo-Cy82TD9f.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-ica.svg":()=>e(()=>import("./logo-caja-ica-Dy3j-PAi.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-lima.svg":()=>e(()=>import("./logo-caja-lima-BJeBCsCj.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-los-andes.svg":()=>e(()=>import("./logo-caja-los-andes-Dv0fVD5P.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-piura.svg":()=>e(()=>import("./logo-caja-piura-Br89Yyj_.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-sullana.svg":()=>e(()=>import("./logo-caja-sullana-sL5TTGfj.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-tacna.svg":()=>e(()=>import("./logo-caja-tacna-BSdLV03A.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-caja-trujillo.svg":()=>e(()=>import("./logo-caja-trujillo-B5ywsgXX.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-cce.svg":()=>e(()=>import("./logo-cce-BJeBCsCj.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-citibank.svg":()=>e(()=>import("./logo-citibank-dmfKirw9.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-cmac-arequipa.svg":()=>e(()=>import("./logo-cmac-arequipa-eY8pghXF.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-compartamos-financiera.svg":()=>e(()=>import("./logo-compartamos-financiera-DstPHxX2.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-cooperativa-abaco.svg":()=>e(()=>import("./logo-cooperativa-abaco-C8oYjsu_.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-credinka.svg":()=>e(()=>import("./logo-credinka-uoBPDJGk.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-crediscotia.svg":()=>e(()=>import("./logo-crediscotia-BjYoqm9U.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-dale.svg":()=>e(()=>import("./logo-dale-C8AuETBq.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-falabella.svg":()=>e(()=>import("./logo-falabella-BEafXoY5.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-financiera-confianza.svg":()=>e(()=>import("./logo-financiera-confianza-CXLQ_T7m.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-financiera-efectiva.svg":()=>e(()=>import("./logo-financiera-efectiva-DMiI230W.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-global66.svg":()=>e(()=>import("./logo-global66-tvxC1YE2.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-gnb.svg":()=>e(()=>import("./logo-gnb-wo4genmh.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-horizontal-global66-b2b-on-dark.svg":()=>e(()=>import("./logo-horizontal-global66-b2b-on-dark-CEdB89Bk.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-horizontal-global66-b2b.svg":()=>e(()=>import("./logo-horizontal-global66-b2b-B8HD1BfN.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-horizontal-global66-on-dark.svg":()=>e(()=>import("./logo-horizontal-global66-on-dark-BoweVDzv.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-horizontal-global66.svg":()=>e(()=>import("./logo-horizontal-global66-D4v4Oh8f.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-interbank.svg":()=>e(()=>import("./logo-interbank-B1RqPZoe.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-ligo.svg":()=>e(()=>import("./logo-ligo-DAZfZElx.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-luqea.svg":()=>e(()=>import("./logo-luqea-C99Vbapk.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-mastercard.svg":()=>e(()=>import("./logo-mastercard--GAHTLyV.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-mi-banco.svg":()=>e(()=>import("./logo-mi-banco-p-6MLr1Q.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-nacion.svg":()=>e(()=>import("./logo-nacion-m-nKqrzQ.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-nequi.svg":()=>e(()=>import("./logo-nequi-DU1_Ax8T.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-pichincha.svg":()=>e(()=>import("./logo-pichincha-Bai7VBJN.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-plin.svg":()=>e(()=>import("./logo-plin-1RoO09sO.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-prexpe.svg":()=>e(()=>import("./logo-prexpe-DG4v04mj.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-pse.svg":()=>e(()=>import("./logo-pse-BTP6yMko.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-ripley.svg":()=>e(()=>import("./logo-ripley-Ngfe6jJS.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-scotiabank.svg":()=>e(()=>import("./logo-scotiabank-B3iVtnjU.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-tarjeta-oh.svg":()=>e(()=>import("./logo-tarjeta-oh-DOP_ZusM.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-vertical-global66-b2b-on-dark.svg":()=>e(()=>import("./logo-vertical-global66-b2b-on-dark-CxF7EWC5.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-vertical-global66-b2b.svg":()=>e(()=>import("./logo-vertical-global66-b2b-DrfXaYUj.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-vertical-global66-on-dark.svg":()=>e(()=>import("./logo-vertical-global66-on-dark-DD46DWxv.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-vertical-global66.svg":()=>e(()=>import("./logo-vertical-global66-CFTLSHgn.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-visa.svg":()=>e(()=>import("./logo-visa-BVC3um9p.js"),[],import.meta.url).then(o=>o.default),"../assets/logos/logo-yape.svg":()=>e(()=>import("./logo-yape-CXCtQbtP.js"),[],import.meta.url).then(o=>o.default)});function So(o){const m=_(!1),s=_(!1),b=_(null),d=_(""),r=_(null),p=_(null),c=_(null);let u=null;const O=g(()=>{const a=o.sizeCustom?.trim()??"";return a?/^\d+(\.\d+)?$/.test(a)?`${a}px`:a:""}),I=g(()=>!!o.color?.trim()),x=g(()=>!!O.value),n=g(()=>!!(o.size&&o.size in v)),E=g(()=>!x.value&&!n.value),M=g(()=>n.value?v[o.size]:c.value?`${c.value}px`:"auto"),lo=g(()=>{if(!x.value||!r.value)return"auto";const a=parseFloat(O.value);return Number.isNaN(a)?"auto":`${a/r.value}px`}),y=g(()=>x.value?lo.value:n.value?v[o.size]:c.value?`${c.value}px`:"auto"),G=g(()=>{if(!n.value||!r.value)return"auto";const a=parseFloat(v[o.size]);return Number.isNaN(a)?"auto":`${a*r.value}px`}),k=g(()=>x.value?O.value:E.value&&p.value?`${p.value}px`:n.value?G.value:"auto"),to=g(()=>n.value?o.size:"md"),so=g(()=>{const a=Z[to.value]??Z.md;if(!m.value||s.value)return{width:a.width,minWidth:a.width,height:a.height,minHeight:a.height};if(E.value){if(p.value&&c.value){const f=`${p.value}px`,oo=`${c.value}px`;return{width:f,minWidth:f,height:oo,minHeight:oo}}return{width:a.width,minWidth:a.width,height:a.height,minHeight:a.height}}if(n.value){const f={height:y.value,minHeight:y.value};return G.value!=="auto"&&(f.width=G.value,f.minWidth=G.value),f}const t=O.value;return{width:t,minWidth:t,height:"auto"}}),Q=g(()=>{const a=o.filter;return K[a]??K.none}),ro=g(()=>{const t={filter:Q.value};if(E.value)return p.value&&(t.width=`${p.value}px`),c.value&&(t.height=`${c.value}px`),t;if(n.value)return t.height=y.value,t.width=k.value,t.maxHeight=y.value,k.value!=="auto"&&(t.maxWidth=k.value),t;const l=O.value;return t.width=l,t.height="auto",t.maxWidth=l,t}),io=g(()=>{const a=y.value,t=k.value,l={display:"inline-block",height:a,width:t,minHeight:a,backgroundColor:o.color?.trim()??"",maskSize:"contain",maskRepeat:"no-repeat",maskPosition:"center",maskMode:"alpha",WebkitMaskSize:"contain",WebkitMaskRepeat:"no-repeat",WebkitMaskPosition:"center",filter:Q.value};if(t!=="auto"&&(l.minWidth=t),d.value){const f=`url(${JSON.stringify(d.value)})`;l.maskImage=f,l.WebkitMaskImage=f}return l});function X(){r.value=null,p.value=null,c.value=null}function no(a){return X(),new Promise(t=>{const l=new Image;l.onload=()=>{l.naturalWidth>0&&l.naturalHeight>0&&(p.value=l.naturalWidth,c.value=l.naturalHeight,r.value=l.naturalWidth/l.naturalHeight),t()},l.onerror=()=>t(),l.src=a})}function go(a){return new Promise(t=>{const l=new Image;l.onload=()=>{l.naturalWidth>0&&l.naturalHeight>0&&(r.value=l.naturalWidth/l.naturalHeight),t()},l.onerror=()=>t(),l.src=a})}async function U(){d.value&&(E.value?await no(d.value):(p.value=null,c.value=null,await go(d.value)))}async function W(a){const t=`../assets/logos/${String(a).toLowerCase().trim()}.svg`,l=Lo[t];if(!a||!l){d.value="",s.value=!0;return}try{d.value=await l()}catch{d.value="",s.value=!0}}const co=()=>{s.value=!0},q=()=>{m.value=!0},Y=()=>{if(!o.lazyLoad){q();return}u&&(u(),u=null);const a=async()=>{await W(o.name??""),s.value||(await U(),q())};if(b.value){const{stop:t}=xo(b,async([{isIntersecting:l}])=>{l&&(t(),await a())},{threshold:.1,rootMargin:"50px"});u=t}else a()};return mo(async()=>{o.lazyLoad||(await W(o.name??""),s.value||await U()),Y()}),po(()=>{u&&u()}),uo(()=>o.name,async a=>{m.value=!1,s.value=!1,X(),u&&(u(),u=null),o.lazyLoad?Y():(await W(a??""),s.value||(await U(),q()))}),{sizeValue:M,containerStyle:so,imageStyle:ro,colorBoxStyle:io,hasColor:I,isLoaded:m,hasError:s,imageSrc:vo(d),imageContainer:b,handleImageError:co}}const Po=["aria-label"],Ao=["src","alt"],Io=["aria-label"],Go=["aria-label"],J=bo({name:"GLogo",__name:"Logo",props:zo,setup(o){const m=o;yo(m);const s=ho("logo"),{containerStyle:b,imageStyle:d,colorBoxStyle:r,hasColor:p,isLoaded:c,imageSrc:u,imageContainer:O,handleImageError:I,hasError:x}=So(m);return(n,E)=>(P(),L("figure",{class:S(i(s).e("container")),ref_key:"imageContainer",ref:O,style:F(i(b))},[i(c)&&!i(x)&&i(p)?(P(),L("span",{key:0,class:S(i(s).e("color")),style:F(i(r)),role:"img","aria-label":n.name},null,14,Po)):i(c)&&!i(x)?(P(),L("img",{key:1,src:i(u),alt:n.name,class:S(i(s).b()),style:F(i(d)),onError:E[0]||(E[0]=(...M)=>i(I)&&i(I)(...M))},null,46,Ao)):i(x)?(P(),L("div",{key:3,class:S([i(s).e("placeholder"),`text-size-${n.sizeCustom?.trim()||!n.size?"md":n.size}`]),role:"img","aria-label":`Error al cargar el logo: ${n.name}`}," 404 ",10,Go)):(P(),L("div",{key:2,class:S(i(s).e("placeholder")),role:"img","aria-label":`Cargando logo: ${n.name}`},null,10,Io))],6))}});J.__docgenInfo={name:"GLogo",exportName:"default",displayName:"Logo",description:"",tags:{},sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/logo/src/Logo.vue"]};const h=_o(J,{Logo:J}),ao="logo-bancolombia",B="logo-pse",ko="logo-nequi",Do=[{label:"Bancolombia",value:ao},{label:"PSE",value:B},{label:"Nequi",value:ko}],Jo={title:"Basic/Logo",component:h,parameters:{docs:{description:{component:`
Centraliza las marcas visuales de Global66, aliados y proveedores en los distintos segmentos (B2B, B2C), como Bancolombia, PSE o Bre-B, con tamaños consistentes y estilos opcionales:

## Características
- SVG de marca listos para usar
- Por defecto muestra el **tamaño original del SVG**; \`size\` (2xs–3xl) o \`size-custom\` cuando necesites escalar
- Presets de \`filter\` (original, gris, negro, blanco, sepia, etc.)
- \`color\` para teñir con cualquier valor CSS (hex, rgb, nombre)
- Lazy loading para optimizar el rendimiento
- Tipado estricto para autocompletado de nombres y tamaños

## Instalación

\`\`\`bash
yarn add @flash-global66/g-logo
\`\`\`

## Dependencias
Este componente requiere:
- @vueuse/core (para el lazy loading)
- element-plus (para estilos y utilidades)

## Importación de estilos SASS
Para que el componente funcione correctamente, es necesario importar los estilos SASS:

\`\`\`scss
@use "@flash-global66/g-logo/styles.scss";
\`\`\`

## Uso básico

\`\`\`vue
<template>
  <g-logo name="logo-pse" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
\`\`\`

## Color personalizado
\`color\` acepta cualquier valor CSS (\`#00A651\`, \`green\`, \`rgb(0, 166, 81)\`) y unifica la marca en una sola tinta. Internamente aplica \`mask-image\` con el canal alfa del SVG como máscara: las zonas opacas del SVG toman el color elegido y las zonas transparentes desaparecen.

### Logos compatibles

| Logo | Tipo |
|---|---|
| \`icon-bre-b\` | Isotipo |
| \`icon-global66\` | Isotipo |
| \`icon-global66-b2b\` | Isotipo |
| \`icon-global66-b2b-on-dark\` | Isotipo |
| \`icon-global66-b2c\` | Isotipo |
| \`icon-global66-b2c-on-dark\` | Isotipo |
| \`label-global66\` | Wordmark |

Para el resto de logos disponibles, se recomienda usar la prop \`filter\` para ajustar su apariencia (por ejemplo, escala de grises, negro o blanco).

## Optimizaciones de rendimiento
### Lazy Loading
- Utiliza IntersectionObserver para cargar el SVG sólo cuando es visible
- Puedes desactivar esta función con \`lazyLoad=false\`

## Agregar nuevas marcas

Para incorporar una marca nueva:

1. **Añadir el archivo**
   - Coloca el SVG en \`components/logo/src/assets/logos/\` con convención kebab-case:
   - \`icon-{marca}\` isotipo · \`label-{marca}\` wordmark · \`logo-{marca}\` lockup completo
   - Sufijos: \`-on-dark\` (fondo oscuro), \`-b2b\` / \`-b2c\` (segmento Global66)

2. **Actualizar las constantes**
   - Agrega el nombre en \`LOGO_NAMES\` y en el grupo correspondiente de \`LOGO_GROUPS\` en \`logo.constants.ts\`

3. **Construir el componente**
   - Ejecuta \`yarn build logo\` para actualizar el componente
        `}}},argTypes:{name:{description:"Nombre del logo",control:"select",options:A,table:{type:{summary:"string"},defaultValue:{summary:"logo-pse"}}},size:{description:"Altura preset (2xs 22px, xs 44px … 3xl 260px). Vacío = tamaño original del SVG",control:"select",options:[void 0,...Object.keys(v)],table:{type:{summary:"2xs | xs | sm | md | lg | xl | 2xl | 3xl"},defaultValue:{summary:"original (SVG)"}}},sizeCustom:{description:"Ancho libre. Acepta `120px`, `8rem`, `50%` o solo un número (`200` → `200px`). La altura escala sola. Excluye `size`.",control:"text",table:{type:{summary:"string | number"},defaultValue:{summary:""}}},filter:{description:"Preset de filtro CSS aplicado al logo",control:"select",options:N,table:{type:{summary:"LogoFilter"},defaultValue:{summary:"none"}}},color:{description:"Color CSS para teñir el logo (vacío = colores originales del SVG)",control:"color",table:{type:{summary:"string"},defaultValue:{summary:""}}},lazyLoad:{description:"Activar carga diferida del logo",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},args:{name:B,filter:"none",color:"",sizeCustom:"",lazyLoad:!0}},D={name:"Uso básico",render:o=>({components:{GLogo:h,GConfigProvider:z},setup(){return{args:o}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-4 p-4">
          <g-logo v-bind="args" />
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Uso básico del componente. Usa los controles para explorar las props interactivamente."},source:{code:`
<template>
  <g-logo name="logo-pse" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
`,language:"html"}}}},V={name:"Todos los logos",render:()=>({components:{GLogo:h,GConfigProvider:z,GSegmented:eo},setup(){const o="__natural__",m=_(o),s=[{label:"Original",value:o},...Object.keys(v).map(r=>({label:r.toUpperCase(),value:r}))];return{LOGO_GROUPS:Oo,LOGO_NAMES:A,selectedSize:m,sizeOptions:s,isOnDark:r=>r.endsWith("-on-dark"),logoSizeProps:r=>r===o?{}:{size:r}}},template:`
      <g-config-provider>
        <div class="space-y-10">
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <p class="text-sm text-gray-600 m-0">
              {{ LOGO_NAMES.length }} logos · colores originales del SVG
            </p>
            <g-segmented v-model="selectedSize" :options="sizeOptions" />
          </div>
          <section
            v-for="group in LOGO_GROUPS"
            :key="group.id"
            class="space-y-4"
          >
            <h3 class="text-base font-semibold text-gray-800 m-0">{{ group.label }}</h3>
            <div class="flex flex-wrap gap-6 items-center">
              <div
                v-for="name in group.names"
                :key="name"
                class="flex flex-col items-center gap-3 p-4 border rounded-md min-w-[120px]"
                :class="isOnDark(name) ? 'bg-gray-900 border-gray-700' : 'bg-white'"
              >
                <g-logo
                  :name="name"
                  v-bind="logoSizeProps(selectedSize)"
                  :lazy-load="false"
                />
                <span
                  class="text-xs font-mono text-center break-all"
                  :class="isOnDark(name) ? 'text-gray-400' : 'text-gray-500'"
                >{{ name }}</span>
              </div>
            </div>
          </section>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Colección completa a tamaño original por defecto. Usa el selector para xs–3xl. Variantes `-on-dark` sobre fondo oscuro."},source:{code:`
<template>
  <g-logo name="logo-pse" />
  <g-logo name="icon-bre-b" />
  <g-logo name="logo-bancolombia" size="sm" />
  <g-logo name="logo-pse" />
  <g-logo name="logo-nequi" size="lg" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
`,language:"html"}}}},R={name:"Tamaños disponibles",render:()=>({components:{GLogo:h,GConfigProvider:z},setup(){return{LOGO_SIZES:v,DEMO_LOGO_PSE:B}},template:`
      <g-config-provider>
        <div class="space-y-8">
          <div v-for="(px, size) in LOGO_SIZES" :key="size" class="flex items-center gap-6">
            <span class="text-sm font-mono text-gray-400 w-8">{{ size }}</span>
            <span class="text-xs text-gray-300 w-12">{{ px }}</span>
            <g-logo :name="DEMO_LOGO_PSE" :size="size" />
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Ocho tamaños por altura (2xs 22px … 3xl 260px). El ancho varía según la proporción del SVG."},source:{code:`
<template>
  <g-logo name="logo-pse" size="2xs" />  <!-- 22px alto -->
  <g-logo name="logo-pse" size="xs" />   <!-- 44px alto -->
  <g-logo name="logo-pse" size="sm" />   <!-- 64px alto -->
  <g-logo name="logo-pse" size="md" />   <!-- 80px alto -->
  <g-logo name="logo-pse" size="lg" />   <!-- 112px alto -->
  <g-logo name="logo-pse" size="xl" />   <!-- 160px alto -->
  <g-logo name="logo-pse" size="2xl" />  <!-- 208px alto -->
  <g-logo name="logo-pse" size="3xl" />  <!-- 260px alto -->
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
`,language:"html"}}}},T={name:"Ancho personalizado",render:()=>({components:{GLogo:h,GConfigProvider:z},setup(){return{examples:[{label:'size="md" (preset)',size:"md",sizeCustom:""},{label:'size-custom="80px"',sizeCustom:"80px"},{label:'size-custom="120px"',sizeCustom:"120px"},{label:'size-custom="160px"',sizeCustom:"160px"}],DEMO_LOGO_BANCOLOMBIA:ao}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <div
            v-for="ex in examples"
            :key="ex.label"
            class="flex items-center gap-4 border rounded-md p-4 bg-white"
          >
            <g-logo
              v-if="ex.sizeCustom"
              :name="DEMO_LOGO_BANCOLOMBIA"
              :size-custom="ex.sizeCustom"
            />
            <g-logo
              v-else
              :name="DEMO_LOGO_BANCOLOMBIA"
              :size="ex.size"
            />
            <span class="text-sm text-gray-500">{{ ex.label }}</span>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Define el **ancho** con `size-custom`; la altura escala automáticamente según la proporción del SVG. Puedes usar `120px`, `8rem` o solo un número (`200` → se trata como `200px`). No combines con `size`."},source:{code:`
<g-logo name="logo-bancolombia" size="md" />
<g-logo name="logo-bancolombia" size-custom="120px" />
<!-- También acepta número sin unidad: -->
<g-logo name="logo-bancolombia" size-custom="200" />
`,language:"html"}}}},Vo=[{label:"icon-bre-b",value:"icon-bre-b"},{label:"icon-global66",value:"icon-global66"},{label:"label-global66",value:"label-global66"}],C={name:"Color personalizado",render:()=>({components:{GLogo:h,GConfigProvider:z},setup(){return{logos:[...Vo],colors:[{label:"Verde",value:"#00A651"},{label:"Azul marca",value:"#203478"},{label:"Rojo",value:"#E53935"},{label:"Naranja",value:"#FF9800"}]}},template:`
      <g-config-provider>
        <div class="flex flex-col gap-10">
          <div v-for="logo in logos" :key="logo.value" class="flex flex-col gap-3">
            <span class="text-xs font-mono text-gray-400">{{ logo.value }}</span>
            <div class="flex flex-wrap gap-8 items-end">
              <div class="flex flex-col items-center gap-3">
                <g-logo :name="logo.value" size="md" :lazy-load="false" />
                <span class="text-xs text-gray-500">Original</span>
              </div>
              <div
                v-for="c in colors"
                :key="c.value"
                class="flex flex-col items-center gap-3"
              >
                <g-logo :name="logo.value" size="md" :color="c.value" :lazy-load="false" />
                <span class="text-xs text-gray-500">{{ c.label }}</span>
                <code class="text-xs text-gray-400">{{ c.value }}</code>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Ejemplos con los logos 100% compatibles: `icon-*` e `label-*`. Son SVG vectoriales de fondo transparente donde la máscara CSS preserva la forma exacta del ícono y aplica el color elegido sin pérdida de detalle.\n\nSi necesitas adaptar el tono de logos de terceros (bancos, fintechs), usa la prop `filter` que funciona en los 59 logos."},source:{code:`<!-- ✅ Funciona perfectamente -->
<g-logo name="icon-bre-b"    size="md" color="#00A651" />
<g-logo name="icon-global66" size="md" color="#203478" />
<g-logo name="label-global66" size="md" color="#E53935" />

<!-- ⚠️ Para logos de terceros usa filter -->
<g-logo name="logo-bancolombia" size="md" filter="grayscale" />
<g-logo name="logo-pse"         size="md" filter="black" />`,language:"html"}}}},w={name:"Filtros de color",render:()=>({components:{GLogo:h,GConfigProvider:z,GSegmented:eo},setup(){const o=_(B),m=[...Do];return{filters:N.map(b=>({label:Eo[b],value:b})),selectedLogo:o,logoOptions:m}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <g-segmented block v-model="selectedLogo" :options="logoOptions" />
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="f in filters"
              :key="f.value"
              class="flex flex-col items-center gap-3 p-4 border rounded-md"
              :class="f.label === 'Blanco' ? 'bg-gray-800' : 'bg-white'"
            >
              <g-logo :name="selectedLogo" size="md" :filter="f.value" />
              <span class="text-xs text-center font-medium" :class="f.label === 'Blanco' ? 'text-gray-300' : 'text-gray-500'">{{ f.label }}</span>
              <code class="text-xs text-gray-400 text-center break-all">{{ f.value }}</code>
            </div>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Presets del prop `filter` con Bancolombia, PSE y Nequi."},source:{code:`
<template>
  <g-logo name="logo-pse" size="md" />
  <g-logo name="logo-pse" size="md" filter="grayscale" />
  <g-logo name="logo-bancolombia" size="md" filter="black" />
  <g-logo name="logo-nequi" size="md" filter="white" />
  <g-logo name="logo-pse" size="md" filter="sepia" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
`,language:"html"}}}},j={name:"Manejo de errores",render:()=>({components:{GLogo:h,GConfigProvider:z},setup(){return{LOGO_SIZES:v,LOGO_PLACEHOLDER_SIZES:Z}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <div class="flex flex-wrap gap-6 items-end">
            <div
              v-for="(px, size) in LOGO_SIZES"
              :key="size"
              class="flex flex-col items-center gap-2"
            >
              <g-logo name="logo-inexistente" :size="size" />
              <span class="text-sm text-gray-500">
                {{ size }} ({{ LOGO_PLACEHOLDER_SIZES[size].width }} × {{ LOGO_PLACEHOLDER_SIZES[size].height }})
              </span>
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-md">
            <h4 class="font-medium mb-2">¿Cómo funciona?</h4>
            <p class="text-sm text-gray-700">
              Cuando un logo no puede cargarse, el componente muestra automáticamente un estado de error con el código "404".
              Esto ocurre en dos casos:
            </p>
            <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>El nombre no existe en <code>LOGO_NAMES</code> (archivo SVG no encontrado)</li>
              <li>El archivo SVG existe pero no puede cargarse (error de red, archivo corrupto, etc.)</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    `}),parameters:{docs:{description:{story:"Demostración del estado de error cuando el logo no puede cargarse."},source:{code:`
<!-- Este logo no existe y mostrará el estado de error -->
<g-logo name="logo-inexistente" size="md" />

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
`,language:"html"}}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Uso básico',
  render: args => ({
    components: {
      GLogo,
      GConfigProvider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-4 p-4">
          <g-logo v-bind="args" />
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Uso básico del componente. Usa los controles para explorar las props interactivamente.'
      },
      source: {
        code: \`
<template>
  <g-logo name="logo-pse" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
\`,
        language: 'html'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Todos los logos',
  render: () => ({
    components: {
      GLogo,
      GConfigProvider,
      GSegmented
    },
    setup() {
      const NATURAL_SIZE = '__natural__';
      const selectedSize = ref(NATURAL_SIZE);
      const sizeOptions = [{
        label: 'Original',
        value: NATURAL_SIZE
      }, ...Object.keys(LOGO_SIZES).map(s => ({
        label: s.toUpperCase(),
        value: s
      }))];
      const isOnDark = (name: string) => name.endsWith('-on-dark');
      const logoSizeProps = (sizeKey: string) => sizeKey === NATURAL_SIZE ? {} : {
        size: sizeKey
      };
      return {
        LOGO_GROUPS,
        LOGO_NAMES,
        selectedSize,
        sizeOptions,
        isOnDark,
        logoSizeProps
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-10">
          <div class="flex items-center justify-between gap-4 flex-wrap">
            <p class="text-sm text-gray-600 m-0">
              {{ LOGO_NAMES.length }} logos · colores originales del SVG
            </p>
            <g-segmented v-model="selectedSize" :options="sizeOptions" />
          </div>
          <section
            v-for="group in LOGO_GROUPS"
            :key="group.id"
            class="space-y-4"
          >
            <h3 class="text-base font-semibold text-gray-800 m-0">{{ group.label }}</h3>
            <div class="flex flex-wrap gap-6 items-center">
              <div
                v-for="name in group.names"
                :key="name"
                class="flex flex-col items-center gap-3 p-4 border rounded-md min-w-[120px]"
                :class="isOnDark(name) ? 'bg-gray-900 border-gray-700' : 'bg-white'"
              >
                <g-logo
                  :name="name"
                  v-bind="logoSizeProps(selectedSize)"
                  :lazy-load="false"
                />
                <span
                  class="text-xs font-mono text-center break-all"
                  :class="isOnDark(name) ? 'text-gray-400' : 'text-gray-500'"
                >{{ name }}</span>
              </div>
            </div>
          </section>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Colección completa a tamaño original por defecto. Usa el selector para xs–3xl. Variantes \`-on-dark\` sobre fondo oscuro.'
      },
      source: {
        code: \`
<template>
  <g-logo name="logo-pse" />
  <g-logo name="icon-bre-b" />
  <g-logo name="logo-bancolombia" size="sm" />
  <g-logo name="logo-pse" />
  <g-logo name="logo-nequi" size="lg" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
\`,
        language: 'html'
      }
    }
  }
}`,...V.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Tamaños disponibles',
  render: () => ({
    components: {
      GLogo,
      GConfigProvider
    },
    setup() {
      return {
        LOGO_SIZES,
        DEMO_LOGO_PSE
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-8">
          <div v-for="(px, size) in LOGO_SIZES" :key="size" class="flex items-center gap-6">
            <span class="text-sm font-mono text-gray-400 w-8">{{ size }}</span>
            <span class="text-xs text-gray-300 w-12">{{ px }}</span>
            <g-logo :name="DEMO_LOGO_PSE" :size="size" />
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Ocho tamaños por altura (2xs 22px … 3xl 260px). El ancho varía según la proporción del SVG.'
      },
      source: {
        code: \`
<template>
  <g-logo name="logo-pse" size="2xs" />  <!-- 22px alto -->
  <g-logo name="logo-pse" size="xs" />   <!-- 44px alto -->
  <g-logo name="logo-pse" size="sm" />   <!-- 64px alto -->
  <g-logo name="logo-pse" size="md" />   <!-- 80px alto -->
  <g-logo name="logo-pse" size="lg" />   <!-- 112px alto -->
  <g-logo name="logo-pse" size="xl" />   <!-- 160px alto -->
  <g-logo name="logo-pse" size="2xl" />  <!-- 208px alto -->
  <g-logo name="logo-pse" size="3xl" />  <!-- 260px alto -->
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
\`,
        language: 'html'
      }
    }
  }
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Ancho personalizado',
  render: () => ({
    components: {
      GLogo,
      GConfigProvider
    },
    setup() {
      const examples = [{
        label: 'size="md" (preset)',
        size: 'md' as const,
        sizeCustom: ''
      }, {
        label: 'size-custom="80px"',
        sizeCustom: '80px'
      }, {
        label: 'size-custom="120px"',
        sizeCustom: '120px'
      }, {
        label: 'size-custom="160px"',
        sizeCustom: '160px'
      }];
      return {
        examples,
        DEMO_LOGO_BANCOLOMBIA
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <div
            v-for="ex in examples"
            :key="ex.label"
            class="flex items-center gap-4 border rounded-md p-4 bg-white"
          >
            <g-logo
              v-if="ex.sizeCustom"
              :name="DEMO_LOGO_BANCOLOMBIA"
              :size-custom="ex.sizeCustom"
            />
            <g-logo
              v-else
              :name="DEMO_LOGO_BANCOLOMBIA"
              :size="ex.size"
            />
            <span class="text-sm text-gray-500">{{ ex.label }}</span>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Define el **ancho** con \`size-custom\`; la altura escala automáticamente según la proporción del SVG. Puedes usar \`120px\`, \`8rem\` o solo un número (\`200\` → se trata como \`200px\`). No combines con \`size\`.'
      },
      source: {
        code: \`
<g-logo name="logo-bancolombia" size="md" />
<g-logo name="logo-bancolombia" size-custom="120px" />
<!-- También acepta número sin unidad: -->
<g-logo name="logo-bancolombia" size-custom="200" />
\`,
        language: 'html'
      }
    }
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Color personalizado',
  render: () => ({
    components: {
      GLogo,
      GConfigProvider
    },
    setup() {
      const logos = [...DEMO_LOGOS_COLOR_COMPATIBLE];
      const colors = [{
        label: 'Verde',
        value: '#00A651'
      }, {
        label: 'Azul marca',
        value: '#203478'
      }, {
        label: 'Rojo',
        value: '#E53935'
      }, {
        label: 'Naranja',
        value: '#FF9800'
      }];
      return {
        logos,
        colors
      };
    },
    template: \`
      <g-config-provider>
        <div class="flex flex-col gap-10">
          <div v-for="logo in logos" :key="logo.value" class="flex flex-col gap-3">
            <span class="text-xs font-mono text-gray-400">{{ logo.value }}</span>
            <div class="flex flex-wrap gap-8 items-end">
              <div class="flex flex-col items-center gap-3">
                <g-logo :name="logo.value" size="md" :lazy-load="false" />
                <span class="text-xs text-gray-500">Original</span>
              </div>
              <div
                v-for="c in colors"
                :key="c.value"
                class="flex flex-col items-center gap-3"
              >
                <g-logo :name="logo.value" size="md" :color="c.value" :lazy-load="false" />
                <span class="text-xs text-gray-500">{{ c.label }}</span>
                <code class="text-xs text-gray-400">{{ c.value }}</code>
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`Ejemplos con los logos 100% compatibles: \\\`icon-*\\\` e \\\`label-*\\\`. Son SVG vectoriales de fondo transparente donde la máscara CSS preserva la forma exacta del ícono y aplica el color elegido sin pérdida de detalle.\\n\\nSi necesitas adaptar el tono de logos de terceros (bancos, fintechs), usa la prop \\\`filter\\\` que funciona en los 59 logos.\`
      },
      source: {
        code: \`<!-- ✅ Funciona perfectamente -->
<g-logo name="icon-bre-b"    size="md" color="#00A651" />
<g-logo name="icon-global66" size="md" color="#203478" />
<g-logo name="label-global66" size="md" color="#E53935" />

<!-- ⚠️ Para logos de terceros usa filter -->
<g-logo name="logo-bancolombia" size="md" filter="grayscale" />
<g-logo name="logo-pse"         size="md" filter="black" />\`,
        language: 'html'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Filtros de color',
  render: () => ({
    components: {
      GLogo,
      GConfigProvider,
      GSegmented
    },
    setup() {
      const selectedLogo = ref(DEMO_LOGO_PSE);
      const logoOptions = [...DEMO_LOGOS_FILTER];
      const filters = LOGO_FILTER_OPTIONS.map(value => ({
        label: LOGO_FILTER_LABELS[value],
        value
      }));
      return {
        filters,
        selectedLogo,
        logoOptions
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <g-segmented block v-model="selectedLogo" :options="logoOptions" />
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="f in filters"
              :key="f.value"
              class="flex flex-col items-center gap-3 p-4 border rounded-md"
              :class="f.label === 'Blanco' ? 'bg-gray-800' : 'bg-white'"
            >
              <g-logo :name="selectedLogo" size="md" :filter="f.value" />
              <span class="text-xs text-center font-medium" :class="f.label === 'Blanco' ? 'text-gray-300' : 'text-gray-500'">{{ f.label }}</span>
              <code class="text-xs text-gray-400 text-center break-all">{{ f.value }}</code>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Presets del prop \`filter\` con Bancolombia, PSE y Nequi.'
      },
      source: {
        code: \`
<template>
  <g-logo name="logo-pse" size="md" />
  <g-logo name="logo-pse" size="md" filter="grayscale" />
  <g-logo name="logo-bancolombia" size="md" filter="black" />
  <g-logo name="logo-nequi" size="md" filter="white" />
  <g-logo name="logo-pse" size="md" filter="sepia" />
</template>

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
\`,
        language: 'html'
      }
    }
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Manejo de errores',
  render: () => ({
    components: {
      GLogo,
      GConfigProvider
    },
    setup() {
      return {
        LOGO_SIZES,
        LOGO_PLACEHOLDER_SIZES
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <div class="flex flex-wrap gap-6 items-end">
            <div
              v-for="(px, size) in LOGO_SIZES"
              :key="size"
              class="flex flex-col items-center gap-2"
            >
              <g-logo name="logo-inexistente" :size="size" />
              <span class="text-sm text-gray-500">
                {{ size }} ({{ LOGO_PLACEHOLDER_SIZES[size].width }} × {{ LOGO_PLACEHOLDER_SIZES[size].height }})
              </span>
            </div>
          </div>

          <div class="bg-gray-50 p-4 rounded-md">
            <h4 class="font-medium mb-2">¿Cómo funciona?</h4>
            <p class="text-sm text-gray-700">
              Cuando un logo no puede cargarse, el componente muestra automáticamente un estado de error con el código "404".
              Esto ocurre en dos casos:
            </p>
            <ul class="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>El nombre no existe en <code>LOGO_NAMES</code> (archivo SVG no encontrado)</li>
              <li>El archivo SVG existe pero no puede cargarse (error de red, archivo corrupto, etc.)</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demostración del estado de error cuando el logo no puede cargarse.'
      },
      source: {
        code: \`
<!-- Este logo no existe y mostrará el estado de error -->
<g-logo name="logo-inexistente" size="md" />

<script setup>
import { GLogo } from '@flash-global66/g-logo';
<\/script>
\`,
        language: 'html'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};const Qo=["Primary","AllLogos","Sizes","SizeCustom","Colors","Filters","ErrorHandling"];export{V as AllLogos,C as Colors,j as ErrorHandling,w as Filters,D as Primary,T as SizeCustom,R as Sizes,Qo as __namedExportsOrder,Jo as default};
