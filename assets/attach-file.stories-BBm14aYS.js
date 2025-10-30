import{c as p,w as qe,d as ae,x as D,e as v,m as j,l as s,u as a,k as m,n as T,s as de,y as R,b as X,t as Ie,r as w,h as q,F as N,z as oe,A as $e,a1 as L,a2 as ce,H as Te}from"./vue.esm-bundler-DNj4lB-B.js";import{a as I}from"./index-Br0BFi8U.js";import{o as Ge,l as Ne,f as Ue,u as te,w as Oe}from"./install-B47IWttr.js";import{H as Le,G as _e}from"./index-CKHqQBpj.js";import{d as We}from"./error-Cq9Fpw4b.js";import{u as le}from"./index-BjyDvcDP.js";import{v as Y}from"./index-CaVzmfVp.js";import{G as $}from"./ConfigProvider-Dyindn-M.js";import{G as he,a as ye}from"./index-BkEvu6PG.js";import{G as se}from"./index-DggtzkPZ.js";import{G as be}from"./index-hnmOpiRs.js";import{a as He,b as ue}from"./documentation-stories-JA7nFEsk.js";import"./v4-CtRu48qb.js";import"./index-C0ZH0EVy.js";import"./index-BkReybPT.js";import"./_arrayPush-BERo1YoZ.js";import"./use-form-item-DrFQs5hU.js";import"./constants-Dnj8X3EN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CP3_1Uby.js";import"./event-HEVJa2N9.js";import"./index-DG2QIyoI.js";import"./typescript-Bp3YSIOJ.js";import"./index-tPx7VOd5.js";import"./index-DxdbiDHw.js";import"./index-CJz6wvsP.js";import"./index.es-2JMmQRgQ.js";import"./index-DtEa0mpY.js";import"./index-ZrO6PWlN.js";const me={UPLOAD:"upload",DOWNLOAD:"download"},V={SUCCESS:"success",ERROR:"error",LOADING:"loading"},Ke=Ge({modelValue:{type:Ne(Array),default:()=>[]},type:{type:String,values:["default","drag-drop"],default:"default"},mode:{type:String,values:Object.values(me),default:me.UPLOAD},inputId:{type:String,default:void 0},acceptExtNames:{type:Array,default:()=>[]},maxSize:{type:String,default:"10MB"},multiple:{type:Boolean,default:!0},maxFiles:{type:Number,default:void 0},disabled:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},uploadButtonText:{type:String,default:""},title:{type:String,default:""},uploadText:{type:String,default:""},restrictionText:{type:String,default:""},infoText:{type:String,default:""},uploading:{type:Boolean,default:!1},uploadError:{type:[Boolean,String],default:!1},fileErrors:{type:Object,default:()=>({})},fileProgress:{type:Object,default:()=>({})},errors:{type:Array,default:()=>[]}}),Ze={"update:modelValue":t=>!0,change:t=>!0,error:t=>!0,"validation-error":t=>!0,onRetry:()=>!0,download:()=>!0,clearProgress:()=>!0},pe={b:1,kb:1024,mb:1024*1024,gb:1024*1024*1024,tb:1024*1024*1024*1024},Je=["Bytes","KB","MB","GB","TB"];function ee(t){if(t===0)return"0 Bytes";const i=1024,l=Math.floor(Math.log(t)/Math.log(i));return parseFloat((t/Math.pow(i,l)).toFixed(2))+" "+Je[l]}function xe(t){if(!t||typeof t!="string")return 0;const i=/^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i,l=t.trim().match(i);if(!l)return 0;const e=parseFloat(l[1]),r=l[2].toLowerCase();return pe[r]?Math.floor(e*pe[r]):0}function Qe(t,i,l="change"){t&&i&&i.validate(l).catch(e=>We())}function fe(t){return t?Array.from(t):[]}function Fe(t,i=!1,l=!1){!i&&!l&&t.value&&t.value.click()}function ne(t,i,l,e,r){return i[t]||l?V.ERROR:e||r[t]!==void 0?V.LOADING:V.SUCCESS}function Ee(t,i,l=!1,e=!1){return function(d){if(l&&e)return;const g=[...t];g.splice(d,1),i("update:modelValue",g),i("change",g)}}function Se(t){return t.length>0?t[0]:""}function Xe(t,i){const{formItem:l}=_e(),{inputId:e}=Le(t,{formItemContext:l||void 0}),r=p(()=>t.modelValue||[]),d=p(()=>t.multiple??!0),g=p(()=>t.validateEvent??!0),b=p(()=>t.uploading??!1),u=p(()=>t.uploadError??!1),c=p(()=>t.fileErrors||{}),x=p(()=>t.fileProgress||{}),F=p(()=>{const n={};return r.value.forEach((o,S)=>{n[S]=ne(S,c.value,!!u.value,b.value,x.value)}),n}),h=p(()=>{const n=[];return t.errors&&Array.isArray(t.errors)&&t.errors.forEach(o=>{typeof o=="string"&&o.trim()&&!n.includes(o)&&n.push(o)}),l?.shouldShowErrorChild&&l?.validateMessage&&(n.includes(l.validateMessage)||n.push(l.validateMessage)),u.value&&typeof u.value=="string"&&(n.includes(u.value)||n.push(u.value)),Object.values(c.value).forEach(o=>{typeof o=="string"&&o&&!n.includes(o)&&n.push(o)}),n});function E(n){const o=[],S=[],y=t.acceptExtNames?.map(P=>P.toLowerCase())||[],f=d.value?r.value:[];if(t.maxFiles&&f.length+n.length>t.maxFiles){o.push({type:"max-files-exceeded",data:{maxFiles:t.maxFiles,currentFiles:f.length,attemptedFiles:n.length,totalAttempted:f.length+n.length}}),i("validation-error",o);return}if(n.forEach(P=>{let G=!0;if(t.maxSize){const B=xe(t.maxSize);B&&P.size>B&&(o.push({type:"file-size-exceeded",file:P,data:{maxSize:t.maxSize,actualSize:P.size}}),G=!1)}if(y.length>0){const B="."+P.name.split(".").pop()?.toLowerCase();y.includes(B)||(o.push({type:"invalid-file-type",file:P,data:{acceptedExtensions:t.acceptExtNames,actualExtension:B}}),G=!1)}G&&S.push(P)}),o.length>0){i("validation-error",o);return}if(S.length>0){const P=d.value?[...r.value,...S]:S;i("update:modelValue",P),i("change",P),Qe(g.value||!1,l)}}function z(n){const o=n.target;o.files&&(E(fe(o.files)),o.value="")}function M(n){E(fe(n))}return qe(()=>b.value,n=>{n||i("clearProgress")},{immediate:!0}),{modelValue:r,fileStatuses:F,displayErrors:h,fileErrors:c,fileProgress:x,inputId:e,multiple:d,uploading:b,uploadError:u,onFileInputChange:z,onFilesDrop:M,addFiles:E}}/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ye=Object.prototype.hasOwnProperty,ge=(t,i)=>Ye.call(t,i),De=t=>t!==null&&typeof t=="object",ke="__epPropKey",ve=t=>t,ea=t=>De(t)&&!!t[ke],aa=(t,i)=>{if(!De(t)||ea(t))return t;const{values:l,required:e,default:r,type:d,validator:g}=t,b={type:d,required:!!e,validator:l||g?u=>{let c=!1,x=[];if(l&&(x=Array.from(l),ge(t,"default")&&x.push(r),c||(c=x.includes(u))),g&&(c||(c=g(u))),!c&&x.length>0){const F=[...new Set(x)].map(h=>JSON.stringify(h)).join(", ");Ie(`Invalid prop: validation failed${i?` for prop "${i}"`:""}. Expected one of [${F}], got value ${JSON.stringify(u)}.`)}return c}:void 0,[ke]:!0};return ge(t,"default")&&(b.default=r),b},ta=t=>Ue(Object.entries(t).map(([i,l])=>[i,aa(l,i)])),ra=(t,i)=>(t.install=l=>{for(const e of[t,...Object.values({})])l.component(e.name,e)},t),oa=ta({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},status:{type:String,default:"primary",values:["primary","success","error","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:ve(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},format:{type:ve(Function),default:t=>`${t}%`}}),la=["aria-valuenow"],ia={viewBox:"0 0 100 100"},sa=["d","stroke","stroke-linecap","stroke-width"],na=["d","stroke","opacity","stroke-linecap","stroke-width"],da={key:1},ca=ae({name:"Progress",__name:"progress",props:oa,setup(t){const i={primary:"--color-progress-primary",success:"--color-progress-success",error:"--color-progress-error",warning:"--color-progress-warning"},l=t,e=te("progress"),r=p(()=>{const o={width:`${l.percentage}%`,animationDuration:`${l.duration}s`},S=i[l.status]||i.primary;return o.backgroundColor=`var(${S})`,o}),d=p(()=>(l.strokeWidth/l.width*100).toFixed(1)),g=p(()=>["circle","dashboard"].includes(l.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),b=p(()=>{const o=g.value,S=l.type==="dashboard";return`
            M 50 50
            m 0 ${S?"":"-"}${o}
            a ${o} ${o} 0 1 1 0 ${S?"-":""}${o*2}
            a ${o} ${o} 0 1 1 0 ${S?"":"-"}${o*2}
            `}),u=p(()=>2*Math.PI*g.value),c=p(()=>l.type==="dashboard"?.75:1),x=p(()=>`${-1*u.value*(1-c.value)/2}px`),F=p(()=>({strokeDasharray:`${u.value*c.value}px, ${u.value}px`,strokeDashoffset:x.value})),h=p(()=>({strokeDasharray:`${u.value*c.value*(l.percentage/100)}px, ${u.value}px`,strokeDashoffset:x.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),E=p(()=>{let o;return o=`var(${i[l.status]||i.primary})`,o}),z=p(()=>l.status==="warning"?"solid exclamation-circle":l.type==="line"?l.status==="success"?"regular check-circle":"regular circle-xmark":l.status==="success"?"regular check":"regular times"),M=p(()=>l.type==="line"?12+l.strokeWidth*.4:l.width*.111111+2),n=p(()=>l.format(l.percentage));return(o,S)=>(v(),D("div",{class:s([a(e).b(),a(e).m(o.type),a(e).is(o.status),{[a(e).m("without-text")]:!o.showText,[a(e).m("text-inside")]:o.textInside}]),id:"MAIN-DIV",role:"progressbar","aria-valuenow":o.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[o.type==="line"?(v(),D("div",{key:0,class:s(a(e).b("bar"))},[m("div",{class:s(a(e).be("bar","outer")),style:T({height:`${o.strokeWidth}px`})},[m("div",{class:s([a(e).be("bar","inner"),{[a(e).bem("bar","inner","indeterminate")]:o.indeterminate}]),style:T(r.value)},[(o.showText||o.$slots.default)&&o.textInside?(v(),D("div",{key:0,class:s(a(e).be("bar","innerText"))},[de(o.$slots,"default",{percentage:o.percentage},()=>[m("span",null,R(n.value),1)])],2)):j("",!0)],6)],6)],2)):(v(),D("div",{key:1,class:s(a(e).b("circle")),style:T({height:`${o.width}px`,width:`${o.width}px`})},[(v(),D("svg",ia,[m("path",{class:s(a(e).be("circle","track")),d:b.value,stroke:`var(${a(e).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":o.strokeLinecap,"stroke-width":d.value,fill:"none",style:T(F.value)},null,14,sa),m("path",{class:s(a(e).be("circle","path")),d:b.value,stroke:E.value,fill:"none",opacity:o.percentage?1:0,"stroke-linecap":o.strokeLinecap,"stroke-width":d.value,style:T(h.value)},null,14,na)]))],6)),(o.showText||o.$slots.default)&&!o.textInside?(v(),D("div",{key:2,class:s(a(e).e("text")),style:T({fontSize:`${M.value}px`})},[de(o.$slots,"default",{percentage:o.percentage},()=>[o.loading?(v(),X(a(Y),{key:0,name:"regular spinner",spin:""})):!o.status||o.status==="primary"?(v(),D("span",da,R(n.value),1)):(v(),X(a(Y),{key:2,name:z.value},null,8,["name"]))])],6)):j("",!0)],10,la))}}),we=ra(ca),ua=["multiple","accept","disabled","aria-label","aria-describedby"],Me=ae({__name:"default-type",props:{id:{},mode:{default:"upload"},title:{},infoText:{},uploadError:{type:Boolean,default:!1},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{default:()=>[]},fileErrors:{default:()=>({})},fileProgress:{default:()=>({})},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1}},emits:["update:modelValue","change","error","onRetry","download","file-input-change"],setup(t,{expose:i,emit:l}){const e=te("attach-file"),r=t,d=l,g=w();function b(){r.mode==="download"?d("download"):r.uploadError||Object.keys(r.fileErrors).length>0?d("onRetry"):Fe(g,r.disabled,r.uploading)}function u(o){d("file-input-change",o)}const c=p(()=>r.modelValue||[]),x=p(()=>c.value.length>0),F=p(()=>r.multiple||r.uploadError),h=p(()=>r.uploadError?"error":r.uploading?"loading":c.value.length>0?"success":"default"),E=p(()=>Se(r.errors)),z=p(()=>r.mode==="download"?"solid download":"solid upload"),M=Ee(r.modelValue,d),n=o=>ne(o,r.fileErrors,r.uploadError,r.uploading,r.fileProgress);return i({hiddenFileInput:g}),(o,S)=>(v(),D("div",{class:s(a(e).e("default-type"))},[m("input",{ref_key:"hiddenFileInput",ref:g,type:"file",multiple:o.multiple,accept:o.acceptExtNames.join(","),disabled:o.disabled,class:s(a(e).e("hidden-input")),"aria-label":o.title||void 0,"aria-describedby":o.infoText?`${o.id||"attach-file"}-info`:void 0,onChange:u},null,42,ua),m("div",{class:s(a(e).e("content"))},[m("div",{class:s([a(e).e("header"),{[a(e).is("with-file-list")]:x.value}])},[m("div",{class:s(a(e).e("header-content"))},[m("p",{class:s(a(e).e("title"))},R(o.title),3),F.value?(v(),D("p",{key:0,class:s(a(e).e("info-text"))},R(o.infoText),3)):j("",!0)],2),q(a(le),{icon:z.value,variant:"blue",border:"",rounded:"",size:"medium",onClick:b,disabled:o.disabled},null,8,["icon","disabled"])],2),h.value==="loading"?(v(),D("div",{key:0,class:s(a(e).e("files-list"))},[m("div",{class:s(a(e).e("files-container"))},[(v(!0),D(N,null,oe(o.modelValue,(y,f)=>(v(),D("div",{key:f,class:s(a(e).e("file-item"))},[m("div",{class:s(a(e).e("file-item-content"))},[q(a(we),{percentage:o.fileProgress[f]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),m("div",{class:s(a(e).e("file-item-info"))},[m("span",{class:s(a(e).e("file-item-name"))},R(y.name),3),m("span",{class:s(a(e).e("file-item-size"))},R(a(ee)(y.size)),3)],2)],2)],2))),128))],2)],2)):x.value?(v(),D("div",{key:1,class:s(a(e).em("file-list","clean"))},[(v(!0),D(N,null,oe(c.value,(y,f)=>(v(),D("div",{key:f,class:s(a(e).e("item"))},[m("div",{class:s(a(e).e("item-content"))},[m("div",{class:s(a(e).e("file-status-icon"))},[q(a(Y),{name:n(f)===a(V).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:n(f)!==a(V).ERROR,[a(e).is("error")]:n(f)===a(V).ERROR}])},null,8,["name","class"])],2),m("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:n(f)===a(V).ERROR,[a(e).is("success")]:n(f)!==a(V).ERROR}])},R(y.name),3)],2),m("div",{class:s(a(e).e("item-actions"))},[m("span",{class:s(a(e).e("file-size"))},R(a(ee)(y.size)),3),q(a(le),{icon:"solid trash-alt",variant:"grey",size:"small",disabled:r.disabled,onClick:P=>!r.disabled&&a(M)(f)},null,8,["disabled","onClick"])],2)],2))),128))],2)):j("",!0)],2),E.value?(v(),D("div",{key:0,class:s(a(e).e("validation-errors"))},[m("p",{class:s(a(e).e("error-text"))},R(E.value),3)],2)):j("",!0)],2))}});Me.__docgenInfo={exportName:"default",displayName:"default-type",description:"",tags:{},expose:[{name:"hiddenFileInput"}],props:[{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"mode",required:!1,type:{name:"AttachFileMode"},defaultValue:{func:!1,value:'"upload"'}},{name:"title",required:!0,type:{name:"string"}},{name:"infoText",required:!0,type:{name:"string"}},{name:"uploadError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"download"},{name:"file-input-change"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/default-type.vue"]};const ma=["aria-label","aria-describedby"],pa=["disabled"],fa=["id"],ga=["multiple","accept","disabled","aria-label"],Re=ae({__name:"drag-drop-type",props:{id:{default:void 0},uploadButtonText:{},uploadText:{},restrictionText:{default:""},maxSize:{default:""},maxFiles:{default:void 0},loadingState:{type:Boolean,default:!1},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{},fileErrors:{},fileProgress:{},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1}},emits:["update:modelValue","change","error","onRetry","file-input-change","files-drop"],setup(t,{expose:i,emit:l}){const e=te("attach-file"),r=t,d=l,g=w(),b=w(),u=w(!1),c=w(0),x=p(()=>r.modelValue||[]),F=p(()=>r.loadingState||r.uploading),h=p(()=>r.maxSize?xe(r.maxSize):0),E=p(()=>r.restrictionText||""),z=p(()=>Se(r.errors)),M=p(()=>Ee(x.value,d,!0,F.value)),n=k=>ne(k,r.fileErrors,!1,r.uploading,r.fileProgress);function o(){Fe(g,r.disabled,F.value)}function S(k){d("file-input-change",k)}function y(k){k.preventDefault(),c.value++,u.value=!0}function f(k){k.preventDefault(),c.value--,c.value===0&&(u.value=!1)}function P(k){k.preventDefault()}function G(k){if(k.preventDefault(),c.value=0,u.value=!1,r.disabled||F.value)return;const U=k.dataTransfer?.files;U&&U.length>0&&d("files-drop",U)}const B=()=>o(),ze=()=>o(),Pe=k=>{k.preventDefault(),o()},Ve=k=>{k.stopPropagation(),Object.keys(r.fileErrors).length>0||r.errors.length>0?d("onRetry"):o()},je=k=>P(k),Ce=k=>y(k),Ae=k=>f(k),Be=k=>G(k);return i({fileInput:g,openFileDialog:o}),(k,U)=>(v(),D("div",{class:s(a(e).e("drag-drop-type"))},[m("div",{ref_key:"dropZone",ref:b,class:s([a(e).e("drop-zone"),{[a(e).is("dragging")]:u.value,[a(e).is("error")]:r.errors.length>0,[a(e).is("disabled")]:r.disabled,[a(e).is("loading")]:F.value}]),role:"button",tabindex:"0","aria-label":`${r.uploadButtonText}. ${E.value||""}`,"aria-describedby":r.restrictionText||r.acceptExtNames.length||h.value?`${r.id||"drag-drop"}-restriction`:void 0,onClick:B,onKeydown:[ce(ze,["enter"]),ce(Pe,["space"])],onDragover:L(je,["prevent"]),onDragenter:L(Ce,["prevent"]),onDragleave:L(Ae,["prevent"]),onDrop:L(Be,["prevent"])},[m("div",{class:s(a(e).e("text-content"))},[m("p",{class:s(a(e).e("main-text"))},[m("button",{type:"button",class:s(a(e).e("upload-button")),disabled:r.disabled||F.value,onClick:Ve},R(r.uploadButtonText),11,pa),$e(" "+R(r.uploadText),1)],2),r.restrictionText||r.acceptExtNames.length||h.value?(v(),D("p",{key:0,class:s(a(e).e("restriction-text")),id:`${r.id||"drag-drop"}-restriction`},R(r.restrictionText||E.value),11,fa)):j("",!0)],2),m("input",{ref_key:"fileInput",ref:g,type:"file",multiple:r.multiple,accept:r.acceptExtNames.join(","),disabled:r.disabled||F.value,class:s(a(e).e("hidden-input")),"aria-label":`${r.uploadButtonText} - ${E.value||""}`,onChange:S},null,42,ga)],42,ma),x.value.length>0?(v(),D("div",{key:0,class:s(a(e).em("file-list","boxed"))},[(v(!0),D(N,null,oe(x.value,(O,C)=>(v(),D("div",{key:C,class:s([a(e).e("item"),{[a(e).is("loading")]:F.value}])},[m("div",{class:s(a(e).e("item-content"))},[F.value?(v(),D("div",{key:0,class:s(a(e).e("file-item-content"))},[q(a(we),{percentage:r.fileProgress[C]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),m("div",{class:s(a(e).e("file-item-info"))},[m("span",{class:s(a(e).e("file-item-name"))},R(O.name),3),m("span",{class:s(a(e).e("file-item-size"))},R(a(ee)(O.size)),3)],2)],2)):(v(),D(N,{key:1},[m("div",{class:s(a(e).e("file-status-icon"))},[q(a(Y),{name:n(C)===a(V).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:n(C)!==a(V).ERROR,[a(e).is("error")]:n(C)===a(V).ERROR}])},null,8,["name","class"])],2),m("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:n(C)===a(V).ERROR,[a(e).is("success")]:n(C)!==a(V).ERROR}])},R(O.name),3)],64))],2),m("div",{class:s(a(e).e("item-actions"))},[F.value?j("",!0):(v(),D(N,{key:0},[m("span",{class:s(a(e).e("file-size"))},R(a(ee)(O.size)),3),q(a(le),{icon:"solid trash-alt",variant:"grey",size:"small",disabled:r.disabled,onClick:ha=>!r.disabled&&M.value(C)},null,8,["disabled","onClick"])],64))],2)],2))),128))],2)):j("",!0),z.value?(v(),D("div",{key:1,class:s(a(e).e("validation-errors"))},[m("p",{class:s(a(e).e("error-text"))},R(z.value),3)],2)):j("",!0)],2))}});Re.__docgenInfo={exportName:"default",displayName:"drag-drop-type",description:"",tags:{},expose:[{name:"fileInput"},{name:"openFileDialog"}],props:[{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({} as Record<number, FileStatus>)"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"uploadButtonText",required:!0,type:{name:"string"}},{name:"uploadText",required:!0,type:{name:"string"}},{name:"restrictionText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxSize",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxFiles",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"loadingState",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"uploadProgress",defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"file-input-change"},{name:"files-drop"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/drag-drop-type.vue"]};const ie=ae({name:"GAttachFile",__name:"attach-file",props:Ke,emits:Ze,setup(t,{expose:i,emit:l}){const e=t,r=l,{modelValue:d,fileStatuses:g,displayErrors:b,fileErrors:u,fileProgress:c,inputId:x,multiple:F,uploading:h,uploadError:E,onFileInputChange:z,onFilesDrop:M,addFiles:n}=Xe(e,r),o=te("attach-file");return i({addFiles:n}),(S,y)=>(v(),D("div",{class:s(a(o).b())},[e.type==="default"?(v(),X(Me,{key:0,id:a(x),"model-value":a(d),mode:e.mode,title:e.title,"info-text":e.infoText,multiple:a(F),"accept-ext-names":e.acceptExtNames,disabled:e.disabled,uploading:a(h),"upload-error":!!a(E),"file-statuses":a(g),errors:a(b),"file-errors":a(u),"file-progress":a(c),"onUpdate:modelValue":y[0]||(y[0]=f=>r("update:modelValue",f)),onChange:y[1]||(y[1]=f=>r("change",f)),onError:y[2]||(y[2]=f=>r("error",f)),onOnRetry:y[3]||(y[3]=f=>r("onRetry")),onDownload:y[4]||(y[4]=f=>r("download")),onFileInputChange:a(z)},null,8,["id","model-value","mode","title","info-text","multiple","accept-ext-names","disabled","uploading","upload-error","file-statuses","errors","file-errors","file-progress","onFileInputChange"])):e.type==="drag-drop"?(v(),X(Re,{key:1,id:a(x),"model-value":a(d),"upload-button-text":e.uploadButtonText,"upload-text":e.uploadText,"restriction-text":e.restrictionText,"accept-ext-names":e.acceptExtNames,multiple:a(F),disabled:e.disabled,"max-size":e.maxSize,"max-files":e.maxFiles,uploading:e.uploading,errors:a(b),"file-errors":a(u),"file-progress":a(c),"file-statuses":a(g),"onUpdate:modelValue":y[5]||(y[5]=f=>r("update:modelValue",f)),onChange:y[6]||(y[6]=f=>r("change",f)),onError:y[7]||(y[7]=f=>r("error",f)),onFileInputChange:a(z),onFilesDrop:a(M)},null,8,["id","model-value","upload-button-text","upload-text","restriction-text","accept-ext-names","multiple","disabled","max-size","max-files","uploading","errors","file-errors","file-progress","file-statuses","onFileInputChange","onFilesDrop"])):j("",!0)],2))}});ie.__docgenInfo={name:"GAttachFile",exportName:"default",displayName:"attach-file",description:"",tags:{},expose:[{name:"addFiles"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/attach-file.vue"]};const A=Oe(ie,{AttachFile:ie}),va="1.1.0",re={"@flash-global66/g-form":"1.0.0","@flash-global66/g-icon-button":"0.2.2","@flash-global66/g-icon-font":"0.6.0","@flash-global66/g-progress":"0.2.0","element-plus":"2.9.0",vue:"3.2.0"},Ha={title:"Form/Attach File",component:A,parameters:{docs:{description:{component:`
El componente Attach File permite cargar archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (compacto) y drag-drop (arrastrar y soltar).

> Versión actual: ${va}

## Características

- Dos tipos de visualización: \`default\` (compacto) y \`drag-drop\` (arrastrar y soltar)
- Validaciones automáticas: Tamaño, tipo y cantidad de archivos
- Progreso de carga: Indicadores por archivo individual
- Integración con formularios: Compatible con validaciones híbridas
- Accesibilidad: Soporte completo para lectores de pantalla

### Instalación

\`\`\`bash
yarn add @flash-global66/g-attach-file
\`\`\`

### Importación del componente

\`\`\`typescript
# importar donde se va a utilizar
import { GAttachFile } from '@flash-global66/g-attach-file'

# recomendado importar en los estilos globales
import '@flash-global66/g-attach-file/attach-file.styles.scss'
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes versiones. Puede funcionar con otras versiones, pero no se garantiza.
${He(re)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${ue(re)}

# Dependencias externas  
yarn add ${ue(re,!0)}
\`\`\`

## Ejemplos de Uso

### Básico con Validaciones Automáticas

\`\`\`html
<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
const validationErrors = ref<string[]>([])

const handleValidationError = (errors: ValidationError[]) => {
  validationErrors.value = errors.map(error => {
    switch (error.type) {
      case 'file-size-exceeded':
        return \`"\${error.file.name}" excede \${error.data.maxSize}\`
      case 'invalid-file-type':
        return \`"\${error.file.name}" no es un tipo válido\`
      case 'max-files-exceeded':
        return \`Máximo \${error.data.maxFiles} archivos permitidos\`
      default:
        return 'Error de validación'
    }
  })
}
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    :accept-ext-names="['.pdf', '.doc', '.docx']"
    max-size="10MB"
    :max-files="3"
    title="Seleccionar documentos"
    info-text="PDF o Word, máximo 10MB y 3 archivos"
    @validation-error="handleValidationError"
  />
  
  <div v-if="validationErrors.length" class="error-messages">
    <p v-for="error in validationErrors" :key="error">{{ error }}</p>
  </div>
</template>
\`\`\`

### Manejo de Errores en Listado

\`\`\`html
<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
// Ejemplo con archivos precargados:
// const files = ref<File[]>([
//   new File([''], 'documento1.pdf', { type: 'application/pdf' }),
//   new File([''], 'documento2.pdf', { type: 'application/pdf' }),
//   new File([''], 'documento3.pdf', { type: 'application/pdf' })
// ])

const fileErrors = ref<Record<number, string>>({
  0: "Error de conexión al servidor",
  2: "Archivo corrupto detectado"
})

const handleRetry = () => {
  fileErrors.value = {}
}
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    :file-errors="fileErrors"
    title="Documentos cargados"
    @on-retry="handleRetry"
  />
</template>
\`\`\`

### Integración con Formularios

\`\`\`html
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GAttachFile } from '@flash-global66/g-attach-file'

const formData = reactive({
  documents: [] as File[]
})

const rules = {
  documents: [
    { required: true, message: 'Los documentos son obligatorios', trigger: 'change' },
    {
      validator: (rule: any, files: File[], callback: any) => {
        const hasPdf = files.some(f => f.name.endsWith('.pdf'))
        if (!hasPdf) {
          callback(new Error('Debe incluir al menos un archivo PDF'))
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ]
}
<\/script>

<template>
  <g-form :model="formData" :rules="rules">
    <g-form-item label="Documentos" prop="documents">
      <g-attach-file 
        v-model="formData.documents"
        type="drag-drop"
        :accept-ext-names="['.pdf', '.doc', '.docx']"
        max-size="10MB"
        :max-files="3"
        upload-button-text="Seleccionar documentos"
        upload-text=" o arrastra archivos aquí"
      />
    </g-form-item>
  </g-form>
</template>
\`\`\`
`}}},argTypes:{modelValue:{description:"Array de archivos seleccionados (v-model)",control:"object",table:{category:"Principales",type:{summary:"File[]"},defaultValue:{summary:"[]"}}},type:{description:"Tipo de visualización del componente. Define la apariencia y comportamiento de la interfaz.",control:"select",options:["default","drag-drop"],table:{category:"Principales",type:{summary:"'default' | 'drag-drop'"},defaultValue:{summary:"'default'"}}},mode:{description:"Modo operacional del componente. En modo 'download' cambia el comportamiento del botón principal para emitir evento 'download' en lugar de activar selector de archivos.",control:"select",options:["upload","download"],table:{category:"Principales",type:{summary:"'upload' | 'download'"},defaultValue:{summary:"'upload'"}}},multiple:{description:"Permite seleccionar múltiples archivos mediante el input file.",control:"boolean",table:{category:"Principales",type:{summary:"boolean"},defaultValue:{summary:"true"}}},acceptExtNames:{description:"Array de extensiones permitidas. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"object",table:{category:"Validación Automática",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},maxSize:{description:"Tamaño máximo permitido (ej: '10MB'). El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'. Para permitir cualquier tamaño, pasa undefined, null o cadena vacía ''.",control:"text",table:{category:"Validación Automática",type:{summary:"string | undefined"},defaultValue:{summary:"'10MB'"}}},maxFiles:{description:"Número máximo de archivos. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"number",table:{category:"Validación Automática",type:{summary:"number"},defaultValue:{summary:"undefined"}}},uploading:{description:"Estado de carga/upload en progreso. Muestra indicadores de carga.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},uploadError:{description:"Estado de error de carga. Valor booleano controla el estado visual; valor string proporciona mensaje específico de error.",control:"select",options:[!1,!0,"Error personalizado en la carga"],table:{category:"Estados",type:{summary:"boolean | string"},defaultValue:{summary:"false"}}},fileErrors:{description:"Errores específicos por archivo. Índice del archivo como clave y mensaje de error como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, string>"},defaultValue:{summary:"{}"}}},fileProgress:{description:"Progreso específico por archivo. Índice del archivo como clave y porcentaje (0-100) como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, number>"},defaultValue:{summary:"{}"}}},disabled:{description:"Deshabilita el componente completamente.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{description:"Título del componente. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Seleccionar archivo'"}}},uploadButtonText:{description:"Texto del botón de carga. Se usa en tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Haz clic para cargar'"}}},uploadText:{description:"Texto adicional junto al botón. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'un archivo o arrástralo aquí'"}}},restrictionText:{description:"Texto personalizado de restricciones. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},infoText:{description:"Texto informativo adicional. Solo para tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},validateEvent:{description:"Activa la validación del formulario cuando se modifican los archivos.",control:"boolean",table:{category:"Formularios",type:{summary:"boolean"},defaultValue:{summary:"true"}}},inputId:{description:"ID único para el elemento input file interno y las asociaciones de accesibilidad (aria-describedby). Se usa principalmente para integración con formularios y etiquetas de accesibilidad. Si no se proporciona, se genera automáticamente cuando está dentro de un FormItem.",control:"text",table:{category:"Formularios",type:{summary:"string"},defaultValue:{summary:"undefined"}}},"onUpdate:modelValue":{description:"Evento emitido cuando cambian los archivos seleccionados.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onChange:{description:"Evento emitido cuando se modifica la selección de archivos.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onError:{description:"Evento emitido cuando ocurren errores durante la validación o manipulación de archivos.",table:{category:"Eventos",type:{summary:"(error: string | Error) => void"}}},onValidationError:{description:"Evento emitido con errores de validación estructurados. Recibe un array de objetos ValidationError con propiedades: type ('file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded'), file (opcional), message (opcional), y data (información adicional específica del error).",table:{category:"Eventos",type:{summary:"(errors: ValidationError[]) => void"}}},onRetry:{description:"Evento emitido cuando se hace clic en reintentar después de un error.",table:{category:"Eventos",type:{summary:"() => void"}}},onClearProgress:{description:"Evento emitido automáticamente cuando el estado 'uploading' cambia de true a false.",table:{category:"Eventos",type:{summary:"() => void"}}},onDownload:{description:"Evento emitido en modo download cuando se hace clic en el botón.",table:{category:"Eventos",type:{summary:"() => void"}}},addFiles:{description:"Método público para agregar archivos programáticamente. Aplica todas las validaciones automáticas del componente (tamaño, tipo, cantidad) antes de añadir los archivos válidos al modelo.",table:{category:"Métodos Públicos",type:{summary:"(files: File[]) => void"}}}},args:{type:"default",mode:"upload",modelValue:[],multiple:!0,acceptExtNames:[],maxSize:"10MB",maxFiles:void 0,uploading:!1,uploadError:!1,fileErrors:{},fileProgress:{},disabled:!1,title:"Seleccionar archivo",uploadButtonText:"Haz clic para cargar",uploadText:"un archivo o arrástralo aquí",restrictionText:"",infoText:"",validateEvent:!0,inputId:void 0}},_={name:"Básico",args:{maxSize:"",acceptExtNames:[]},parameters:{docs:{description:{story:"Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles."},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    title="Seleccionar archivo"
    info-text="Puede cargar cualquier tipo de archivo"
    max-size=""
    :accept-ext-names="[]"
  />
</template>`}}},render:t=>({components:{GAttachFile:A,GConfigProvider:$},setup(){const i=w([]);return{args:t,files:i}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},W={name:"Arrastrar y Soltar",parameters:{docs:{description:{story:"El tipo 'drag-drop' proporciona una zona de arastrar y soltar que acepta cualquier tipo de archivo y cualquier tamaño"},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    type="drag-drop"
    max-size=""
    :accept-ext-names="[]"
    upload-button-text="Seleccionar archivos"
    upload-text=" o arrastra aquí"
    :multiple="true"
  />
</template>`}}},render:()=>({components:{GAttachFile:A,GConfigProvider:$},setup(){const t=w([]);return{files:t,handleUpdate:r=>{t.value=r,I("update:model-value")(r)},handleValidationError:r=>{I("validation-error")(r)},handleChange:r=>{I("change")(r)}}},template:`
      <g-config-provider>
        <g-attach-file 
          v-model="files"
          type="drag-drop"
          upload-button-text="Seleccionar archivos"
          upload-text=" o arrastra aquí"
          :multiple="true"
          max-size=""
          :accept-ext-names="[]"
          @update:model-value="handleUpdate"
          @change="handleChange"
          @validation-error="handleValidationError"
        />
      </g-config-provider>
    `})},H={name:"Estados del Componente",parameters:{docs:{description:{story:`
Demostración completa de todos los estados visuales disponibles en ambos tipos de visualización.

### Estados implementados:
- **Activo**: Estado inicial listo para recibir archivos
- **Cargando**: Durante el proceso de upload con indicadores de progreso  
- **Error**: Cuando ocurren fallos con retroalimentación visual clara
- **Deshabilitado**: Componente inactivo con indicadores apropiados

Cada estado proporciona retroalimentación visual clara y acciones contextualmente apropiadas.
        `},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const normalFiles = ref<File[]>([])
const uploadingFiles = ref<File[]>([/* archivos de demostración */])
const errorFiles = ref<File[]>([/* archivo con error */])
const fileErrors = ref({ 0: "Error de conexión al servidor" })

const handleRetry = () => {
  fileErrors.value = {}
}
<\/script>

<template>
  <g-attach-file 
    v-model="normalFiles"
    title="Seleccionar documento"
    info-text="PDF o Word, máximo 10MB"
  />

  <g-attach-file 
    v-model="uploadingFiles"
    title="Subiendo archivos..."
    :uploading="true"
    :file-progress="{ 0: 65, 1: 45 }"
  />

  <g-attach-file 
    v-model="errorFiles"
    title="Seleccionar documento"
    :file-errors="fileErrors"
    @on-retry="handleRetry"
  />

  <g-attach-file 
    title="Componente deshabilitado"
    info-text="Este campo no está disponible"
    disabled
  />
</template>`}}},render:()=>({components:{GAttachFile:A,GConfigProvider:$},setup(){const t=(u,c=1024e3,x="application/pdf")=>{const F=new File([""],u,{type:x});return Object.defineProperty(F,"size",{value:c}),F},i=w([]),l=w([t("documento1.pdf",1024e3),t("imagen1.jpg",2048e3,"image/jpeg")]),e=w([t("documento_error.pdf")]),r=w([]),d=w({0:"Error de conexión al servidor"});return{normalFiles:i,uploadingFiles:l,errorFiles:e,disabledFiles:r,fileErrors:d,handleUpdate:u=>c=>{u.value=c,I("update:model-value")(c)},handleRetry:()=>{I("onRetry")(),e.value=[],d.value={}}}},template:`
      <g-config-provider>
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900">Tipo Default</h3>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Normal</h4>
                <g-attach-file 
                  v-model="normalFiles"
                  type="default"
                  :accept-ext-names="['.pdf', '.doc']"
                  max-size="10MB"
                  title="Seleccionar documento"
                  info-text="PDF o Word, máximo 10MB"
                  @update:model-value="handleUpdate(normalFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Cargando</h4>
                <g-attach-file 
                  v-model="uploadingFiles"
                  type="default"
                  title="Subiendo archivos..."
                  :uploading="true"
                  :file-progress="{ 0: 65, 1: 45 }"
                  :multiple="true"
                  @update:model-value="handleUpdate(uploadingFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Error</h4>
                <g-attach-file 
                  v-model="errorFiles"
                  type="default"
                  title="Seleccionar documento"
                  :upload-error="true"
                  @update:model-value="handleUpdate(errorFiles)"
                  @on-retry="handleRetry"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Deshabilitado</h4>
                <g-attach-file 
                  v-model="disabledFiles"
                  type="default"
                  title="Componente deshabilitado"
                  info-text="Este campo no está disponible"
                  disabled
                  @update:model-value="handleUpdate(disabledFiles)"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900">Tipo Drag & Drop</h3>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Normal</h4>
                <g-attach-file 
                  v-model="normalFiles"
                  type="drag-drop"
                  :accept-ext-names="['.jpg', '.png']"
                  max-size="5MB"
                  upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  @update:model-value="handleUpdate(normalFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Cargando</h4>
                <g-attach-file 
                  v-model="uploadingFiles"
                  type="drag-drop"
                 upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  :uploading="true"
                  :file-progress="{ 0: 70, 1: 85 }"
                  :multiple="true"
                  @update:model-value="handleUpdate(uploadingFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Error</h4>
                <g-attach-file 
                  v-model="errorFiles"
                  type="drag-drop"
                upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  :file-errors="fileErrors"
                  @update:model-value="handleUpdate(errorFiles)"
                  @on-retry="handleRetry"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Deshabilitado</h4>
                <g-attach-file 
                  v-model="disabledFiles"
                  type="drag-drop"
                 upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  disabled
                  @update:model-value="handleUpdate(disabledFiles)"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    `})},K={name:"Flujo de Carga Completo",parameters:{docs:{description:{story:`
Validaciones automáticas con manejo de mensajes de error.

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar más de 2 archivos → Error de cantidad
        `}}},render:()=>({components:{GAttachFile:A,GConfigProvider:$,GForm:ye,GFormItem:he,GButton:se,GInput:be},setup(){const t=w([]),i=w(!1),l=w(!1),e=w(""),r=w(""),d=w({}),g=w({}),b=async h=>{if(h.length===0)return;i.value=!0,l.value=!1,g.value={},d.value={};for(let n=0;n<h.length;n++)d.value={...d.value,[n]:0};const E=20,z=150;for(let n=0;n<=E;n++){await new Promise(S=>setTimeout(S,z));const o=Math.round(n/E*100);for(let S=0;S<h.length;S++){const y=Math.random()*10-5,f=Math.min(100,Math.max(0,o+y));d.value={...d.value,[S]:Math.round(f)}}}if(await new Promise(n=>setTimeout(n,500)),Math.random()<.6){const n=Math.floor(Math.random()*h.length),o=["Error de conexión al servidor","Archivo corrupto detectado","Formato no soportado por el servidor","Timeout en la carga"],S=o[Math.floor(Math.random()*o.length)];g.value={[n]:S}}i.value=!1};function u(h){let E="",z="";h.forEach(M=>{if(M)if(M.type==="file-size-exceeded"){const n=Math.round((M.file?.size||0)/1048576*100)/100;E=`"${M.file?.name}" (${n}MB) excede el límite de ${M.data?.maxSize||"2MB"}`}else M.type==="invalid-file-type"?E=`"${M.file?.name}" tipo no válido. Solo ${M.data?.acceptedExtensions?.join(", ")||"tipos específicos"}`:M.type==="max-files-exceeded"&&(z=`Máximo ${M.data?.maxFiles} archivos permitidos (intentaste subir ${M.data?.totalAttempted||"varios"})`)}),e.value=E,r.value=z}function c(h){console.log("📁 Archivos actualizados:",h.length),t.value=h,h.length>=0&&(e.value="",r.value=""),h.length>0&&!i.value&&b(h)}function x(){l.value=!1,g.value={},d.value={},e.value="",r.value="",t.value.length>0&&b(t.value)}function F(){t.value=[],i.value=!1,l.value=!1,e.value="",r.value="",d.value={},g.value={}}return{files:t,uploading:i,uploadError:l,validationErrorMsg:e,maxFilesErrorMsg:r,fileProgress:d,fileErrors:g,handleValidationError:u,handleUpdate:c,handleRetry:x,handleClearAll:F}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <g-attach-file 
            v-model="files"
            type="default"
            max-size="2MB"
            :max-files="2"
            title="Simulador de Carga de Archivos"
            info-text="Máximo 2MB por archivo, 2 archivos total"
            :multiple="true"
            :uploading="uploading"
            :upload-error="uploadError"
            :file-progress="fileProgress"
            :file-errors="fileErrors"
            :errors="[validationErrorMsg, maxFilesErrorMsg].filter(Boolean)"
            @validation-error="handleValidationError"
            @update:model-value="handleUpdate"
            @on-retry="handleRetry"
          />
          
          <div class="flex gap-2">
            <g-button 
              @click="handleClearAll"
              class="px-4 py-2"
              :disabled="uploading"
            >
              Limpiar Todo
            </g-button>
          </div>
        
        </div>
      </g-config-provider>
    `})},Z={name:"Modo Descarga",parameters:{docs:{description:{story:`
En modo descarga, el componente cambia su comportamiento para mostrar un icono de descarga y emitir un evento 'download' en lugar de abrir el selector de archivos.
 `},source:{code:`<script setup lang="ts">
import { GAttachFile } from '@flash-global66/g-attach-file'

const handleDownload = () => {
  // Implementar lógica de descarga específica
  const link = document.createElement('a')
  link.href = 'data:text/plain;charset=utf-8,Contenido del archivo'
  link.download = 'plantilla-ejemplo.txt'
  link.click()
}
<\/script>

<template>
  <g-attach-file 
    mode="download"
    title="Descargar plantilla"
    info-text="Haz clic para descargar el archivo de plantilla"
    @download="handleDownload"
  />
</template>`}}},render:()=>({components:{GAttachFile:A,GConfigProvider:$},setup(){return{handleDownload:()=>{I("download")();const i=document.createElement("a");i.href="data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.",i.download="plantilla-ejemplo.txt",i.click()}}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-attach-file 
            mode="download"
            title="Descargar plantilla"
            info-text="Haz clic para descargar el archivo de plantilla"
            @download="handleDownload"
          />
        </div>
      </g-config-provider>
    `})},J={name:"Integración con Formularios",parameters:{docs:{description:{story:"Integración del componente GAttachFile con GForm y validaciones de formulario."},source:{code:`<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GAttachFile } from '@flash-global66/g-attach-file'

const formRef = ref()
const formData = reactive({
  name: '',
  documents: [] as File[]
})

const rules = {
  name: [
    { required: true, message: 'El nombre es requerido', trigger: 'blur' }
  ],
  documents: [
    { required: true, message: 'Debe adjuntar documentos', trigger: 'change' }
  ]
}

const handleSubmit = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    alert('¡Documentos enviados exitosamente!')
  }
}
<\/script>

<template>
  <g-form ref="formRef" :model="formData" :rules="rules">
    <g-form-item prop="name" show-message="parent">
      <g-input 
        v-model="formData.name"
        label="Nombre completo"
        placeholder="Ingrese su nombre"
      />
    </g-form-item>

    <g-form-item prop="documents" show-message="parent">
      <g-attach-file
        v-model="formData.documents"
        title="Documentos requeridos"
        type="drag-drop"
        :multiple="true"
        :max-files="3"
        max-size="5MB"
        :accept-ext-names="['.pdf', '.jpg', '.jpeg', '.png']"
        upload-button-text="Seleccionar documentos"
        upload-text=" o arrastra archivos aquí"
      />
    </g-form-item>

    <g-button variant="primary" @click="handleSubmit">
      Enviar Documentos
    </g-button>
  </g-form>
</template>`}}},render:()=>({components:{GAttachFile:A,GConfigProvider:$,GForm:ye,GFormItem:he,GButton:se,GInput:be},setup(){const t=w(),i=Te({name:"",documents:[]}),l={name:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],documents:[{required:!0,message:"Debe adjuntar al menos un documento",trigger:"change"},{validator:(b,u,c)=>{if(!u||u.length===0){c(new Error("Los documentos son obligatorios"));return}if(!u.some(h=>h.name.toLowerCase().endsWith(".pdf"))){c(new Error("Debe incluir al menos un documento PDF"));return}if(!u.every(h=>{const E=h.name.toLowerCase();return E.length>10||E.includes("documento")||E.includes("certificado")||E.includes("comprobante")})){c(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));return}c()},trigger:"change"}]},e=w([]);async function r(){if(t.value)try{await t.value.validate()&&(console.log("Formulario válido:",i),alert("¡Documentos enviados exitosamente!"))}catch(b){console.error("Error de validación:",b)}}function d(){t.value&&(t.value.resetFields(),e.value=[])}return{formRef:t,formData:i,rules:l,validationErrors:e,handleSubmit:r,handleReset:d,handleValidationError:b=>{I("validation-error")(b);const u=b.map(c=>{switch(c.type){case"file-size-exceeded":return`"${c.file?.name}" excede ${c.data?.maxSize}`;case"invalid-file-type":return`"${c.file?.name}" tipo no válido. Solo ${c.data?.acceptedExtensions?.join(", ")}`;case"max-files-exceeded":return`Máximo ${c.data?.maxFiles} archivos permitidos`;default:return"Error de validación"}});e.value=u,setTimeout(()=>e.value=[],5e3)}}},template:`
      <g-config-provider>
        <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-sm border">
          <h2 class="text-xl font-bold mb-6 text-gray-900">Envío de Documentos</h2>
          
          <div v-if="validationErrors.length > 0" class="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
            <h4 class="text-sm font-semibold text-red-900 mb-1">Errores de validación automática:</h4>
            <ul class="text-sm text-red-800 space-y-1">
              <li v-for="error in validationErrors" :key="error">• {{ error }}</li>
            </ul>
          </div>
          
          <g-form 
            ref="formRef" 
            :model="formData" 
            :rules="rules"
            class="space-y-4"
          >
            <g-form-item prop="name" show-message="parent">
              <g-input 
                v-model="formData.name"
                label="Nombre completo"
                placeholder="Ingrese su nombre"
              />
            </g-form-item>

            <g-form-item prop="documents" show-message="parent">
              <g-attach-file
                v-model="formData.documents"
                title="Documentos requeridos"
                info-text="PDF o imágenes, máximo 5MB cada uno y 3 archivos total"
                type="drag-drop"
                :multiple="true"
                :max-files="3"
                max-size="5MB"
                :accept-ext-names="['.pdf', '.jpg', '.jpeg', '.png']"
                upload-button-text="Seleccionar documentos"
                upload-text=" o arrastra archivos aquí"
                restriction-text="Se requiere al menos un PDF con nombre descriptivo"
                @validation-error="handleValidationError"
              />
            </g-form-item>

            <div class="flex gap-3 pt-4">
              <g-button 
                variant="primary" 
                @click="handleSubmit"
                class="flex-1"
              >
                Enviar Documentos
              </g-button>
              <g-button 
                variant="secondary" 
                @click="handleReset"
              >
                Limpiar
              </g-button>
            </div>
          </g-form>
        </div>
      </g-config-provider>
    `})},Q={name:"Método addFiles",parameters:{docs:{description:{story:"Método  `addFiles` que permite agregar archivos programáticamente al componente."},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
const attachFileRef = ref()

const addMockFiles = () => {
  // Crear archivos de ejemplo
  const mockFiles = [
    new File(['contenido'], 'documento1.pdf', { type: 'application/pdf' }),
    new File(['contenido'], 'imagen1.jpg', { type: 'image/jpeg' })
  ]
  
  // Usar el método addFiles para agregar los archivos
  attachFileRef.value?.addFiles(mockFiles)
}
<\/script>

<template>
  <g-attach-file 
    ref="attachFileRef"
    v-model="files"
    title="Agregar archivos programáticamente"
    :accept-ext-names="['.pdf', '.jpg', '.png']"
    max-size="5MB"
    :max-files="3"
  />
  
  <g-button @click="addMockFiles">
    Agregar archivos de ejemplo
  </g-button>
</template>`}}},render:()=>({components:{GAttachFile:A,GConfigProvider:$,GButton:se},setup(){const t=w([]),i=w();return{files:t,attachFileRef:i,addMockFiles:()=>{const d=[new File(["contenido PDF de ejemplo"],"documento-ejemplo.pdf",{type:"application/pdf"}),new File(["contenido imagen de ejemplo"],"imagen-ejemplo.jpg",{type:"image/jpeg"})];Object.defineProperty(d[0],"size",{value:1024*500}),Object.defineProperty(d[1],"size",{value:1024*800}),i.value?.addFiles&&i.value.addFiles(d)},addSingleFile:()=>{const d=new File(["contenido de texto"],"nota.txt",{type:"text/plain"});Object.defineProperty(d,"size",{value:1024*100}),i.value?.addFiles&&i.value.addFiles([d])},clearFiles:()=>{t.value=[]}}},template:`
      <g-config-provider>
        <div class="space-y-4">
          <g-attach-file 
            ref="attachFileRef"
            v-model="files"
            title="Agregar archivos programáticamente"
            info-text="Usa los botones de abajo para agregar archivos sin selector"
            :accept-ext-names="['.pdf', '.jpg', '.png', '.txt']"
            max-size="5MB"
            :max-files="3"
            :multiple="true"
          />
          
          <div class="flex gap-2 flex-wrap">
            <g-button @click="addMockFiles" variant="primary">
              Agregar 2 archivos
            </g-button>
            
            <g-button @click="addSingleFile" variant="secondary">
             Agregar 1 archivo
            </g-button>
            
            <g-button @click="clearFiles" variant="tertiary">
               Limpiar
            </g-button>
          </div>
          
          <div class="p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium text-gray-900 mb-2">Información</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>addFiles()</strong> aplica todas las validaciones automáticas</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    `})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Básico",
  args: {
    maxSize: "",
    acceptExtNames: []
  },
  parameters: {
    docs: {
      description: {
        story: "Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles."
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    title="Seleccionar archivo"
    info-text="Puede cargar cualquier tipo de archivo"
    max-size=""
    :accept-ext-names="[]"
  />
</template>\`
      }
    }
  },
  render: args => ({
    components: {
      GAttachFile,
      GConfigProvider
    },
    setup() {
      const files = ref<File[]>([]);
      return {
        args,
        files
      };
    },
    template: \`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    \`
  })
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Arrastrar y Soltar",
  parameters: {
    docs: {
      description: {
        story: "El tipo 'drag-drop' proporciona una zona de arastrar y soltar que acepta cualquier tipo de archivo y cualquier tamaño"
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    type="drag-drop"
    max-size=""
    :accept-ext-names="[]"
    upload-button-text="Seleccionar archivos"
    upload-text=" o arrastra aquí"
    :multiple="true"
  />
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GAttachFile,
      GConfigProvider
    },
    setup() {
      const files = ref<File[]>([]);
      const handleUpdate = (selectedFiles: File[]) => {
        files.value = selectedFiles;
        action('update:model-value')(selectedFiles);
      };
      const handleValidationError = (errors: Array<{
        type: string;
        file?: File;
        data?: any;
      }>) => {
        action('validation-error')(errors);
      };
      const handleChange = (selectedFiles: File[]) => {
        action('change')(selectedFiles);
      };
      return {
        files,
        handleUpdate,
        handleValidationError,
        handleChange
      };
    },
    template: \`
      <g-config-provider>
        <g-attach-file 
          v-model="files"
          type="drag-drop"
          upload-button-text="Seleccionar archivos"
          upload-text=" o arrastra aquí"
          :multiple="true"
          max-size=""
          :accept-ext-names="[]"
          @update:model-value="handleUpdate"
          @change="handleChange"
          @validation-error="handleValidationError"
        />
      </g-config-provider>
    \`
  })
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Estados del Componente",
  parameters: {
    docs: {
      description: {
        story: \`
Demostración completa de todos los estados visuales disponibles en ambos tipos de visualización.

### Estados implementados:
- **Activo**: Estado inicial listo para recibir archivos
- **Cargando**: Durante el proceso de upload con indicadores de progreso  
- **Error**: Cuando ocurren fallos con retroalimentación visual clara
- **Deshabilitado**: Componente inactivo con indicadores apropiados

Cada estado proporciona retroalimentación visual clara y acciones contextualmente apropiadas.
        \`
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const normalFiles = ref<File[]>([])
const uploadingFiles = ref<File[]>([/* archivos de demostración */])
const errorFiles = ref<File[]>([/* archivo con error */])
const fileErrors = ref({ 0: "Error de conexión al servidor" })

const handleRetry = () => {
  fileErrors.value = {}
}
<\/script>

<template>
  <g-attach-file 
    v-model="normalFiles"
    title="Seleccionar documento"
    info-text="PDF o Word, máximo 10MB"
  />

  <g-attach-file 
    v-model="uploadingFiles"
    title="Subiendo archivos..."
    :uploading="true"
    :file-progress="{ 0: 65, 1: 45 }"
  />

  <g-attach-file 
    v-model="errorFiles"
    title="Seleccionar documento"
    :file-errors="fileErrors"
    @on-retry="handleRetry"
  />

  <g-attach-file 
    title="Componente deshabilitado"
    info-text="Este campo no está disponible"
    disabled
  />
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GAttachFile,
      GConfigProvider
    },
    setup() {
      const createMockFile = (name: string, size: number = 1024000, type: string = "application/pdf") => {
        const file = new File([""], name, {
          type
        });
        Object.defineProperty(file, "size", {
          value: size
        });
        return file;
      };
      const normalFiles = ref<File[]>([]);
      const uploadingFiles = ref<File[]>([createMockFile("documento1.pdf", 1024000), createMockFile("imagen1.jpg", 2048000, "image/jpeg")]);
      const errorFiles = ref<File[]>([createMockFile("documento_error.pdf")]);
      const disabledFiles = ref<File[]>([]);
      const fileErrors = ref<Record<number, string>>({
        0: "Error de conexión al servidor"
      });
      const handleUpdate = (filesRef: any) => (selectedFiles: File[]) => {
        filesRef.value = selectedFiles;
        action('update:model-value')(selectedFiles);
      };
      const handleRetry = () => {
        action('onRetry')();
        errorFiles.value = [];
        fileErrors.value = {};
      };
      return {
        normalFiles,
        uploadingFiles,
        errorFiles,
        disabledFiles,
        fileErrors,
        handleUpdate,
        handleRetry
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900">Tipo Default</h3>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Normal</h4>
                <g-attach-file 
                  v-model="normalFiles"
                  type="default"
                  :accept-ext-names="['.pdf', '.doc']"
                  max-size="10MB"
                  title="Seleccionar documento"
                  info-text="PDF o Word, máximo 10MB"
                  @update:model-value="handleUpdate(normalFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Cargando</h4>
                <g-attach-file 
                  v-model="uploadingFiles"
                  type="default"
                  title="Subiendo archivos..."
                  :uploading="true"
                  :file-progress="{ 0: 65, 1: 45 }"
                  :multiple="true"
                  @update:model-value="handleUpdate(uploadingFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Error</h4>
                <g-attach-file 
                  v-model="errorFiles"
                  type="default"
                  title="Seleccionar documento"
                  :upload-error="true"
                  @update:model-value="handleUpdate(errorFiles)"
                  @on-retry="handleRetry"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Deshabilitado</h4>
                <g-attach-file 
                  v-model="disabledFiles"
                  type="default"
                  title="Componente deshabilitado"
                  info-text="Este campo no está disponible"
                  disabled
                  @update:model-value="handleUpdate(disabledFiles)"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-4 text-gray-900">Tipo Drag & Drop</h3>
            <div class="grid gap-6 md:grid-cols-2">
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Normal</h4>
                <g-attach-file 
                  v-model="normalFiles"
                  type="drag-drop"
                  :accept-ext-names="['.jpg', '.png']"
                  max-size="5MB"
                  upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  @update:model-value="handleUpdate(normalFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Cargando</h4>
                <g-attach-file 
                  v-model="uploadingFiles"
                  type="drag-drop"
                 upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  :uploading="true"
                  :file-progress="{ 0: 70, 1: 85 }"
                  :multiple="true"
                  @update:model-value="handleUpdate(uploadingFiles)"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Error</h4>
                <g-attach-file 
                  v-model="errorFiles"
                  type="drag-drop"
                upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  :file-errors="fileErrors"
                  @update:model-value="handleUpdate(errorFiles)"
                  @on-retry="handleRetry"
                />
              </div>
              
              <div>
                <h4 class="text-sm font-medium mb-2 text-gray-700">Deshabilitado</h4>
                <g-attach-file 
                  v-model="disabledFiles"
                  type="drag-drop"
                 upload-button-text="Seleccionar imágenes"
                  upload-text=" o arrastra aquí"
                  disabled
                  @update:model-value="handleUpdate(disabledFiles)"
                />
              </div>
            </div>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...H.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Flujo de Carga Completo",
  parameters: {
    docs: {
      description: {
        story: \`
Validaciones automáticas con manejo de mensajes de error.

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar más de 2 archivos → Error de cantidad
        \`
      }
    }
  },
  render: () => ({
    components: {
      GAttachFile,
      GConfigProvider,
      GForm,
      GFormItem,
      GButton,
      GInput
    },
    setup() {
      const files = ref([]);
      const uploading = ref(false);
      const uploadError = ref(false);
      const validationErrorMsg = ref('');
      const maxFilesErrorMsg = ref('');
      const fileProgress = ref({});
      const fileErrors = ref({});
      const simulateUpload = async filesArray => {
        if (filesArray.length === 0) return;
        uploading.value = true;
        uploadError.value = false;
        fileErrors.value = {};
        fileProgress.value = {};
        for (let i = 0; i < filesArray.length; i++) {
          fileProgress.value = {
            ...fileProgress.value,
            [i]: 0
          };
        }
        const progressSteps = 20;
        const stepDelay = 150;
        for (let step = 0; step <= progressSteps; step++) {
          await new Promise(resolve => setTimeout(resolve, stepDelay));
          const progressPercent = Math.round(step / progressSteps * 100);
          for (let i = 0; i < filesArray.length; i++) {
            const randomVariation = Math.random() * 10 - 5;
            const adjustedProgress = Math.min(100, Math.max(0, progressPercent + randomVariation));
            fileProgress.value = {
              ...fileProgress.value,
              [i]: Math.round(adjustedProgress)
            };
          }
        }
        await new Promise(resolve => setTimeout(resolve, 500));
        const shouldFail = Math.random() < 0.6;
        if (shouldFail) {
          const errorFileIndex = Math.floor(Math.random() * filesArray.length);
          const errorMessages = ['Error de conexión al servidor', 'Archivo corrupto detectado', 'Formato no soportado por el servidor', 'Timeout en la carga'];
          const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
          fileErrors.value = {
            [errorFileIndex]: randomError
          };
        }
        uploading.value = false;
      };
      function handleValidationError(errors) {
        let generalMsg = '';
        let maxFilesError = '';
        errors.forEach(error => {
          if (!error) return;
          if (error.type === 'file-size-exceeded') {
            const sizeMB = Math.round((error.file?.size || 0) / (1024 * 1024) * 100) / 100;
            generalMsg = \`"\${error.file?.name}" (\${sizeMB}MB) excede el límite de \${error.data?.maxSize || '2MB'}\`;
          } else if (error.type === 'invalid-file-type') {
            generalMsg = \`"\${error.file?.name}" tipo no válido. Solo \${error.data?.acceptedExtensions?.join(', ') || 'tipos específicos'}\`;
          } else if (error.type === 'max-files-exceeded') {
            maxFilesError = \`Máximo \${error.data?.maxFiles} archivos permitidos (intentaste subir \${error.data?.totalAttempted || 'varios'})\`;
          }
        });
        validationErrorMsg.value = generalMsg;
        maxFilesErrorMsg.value = maxFilesError;
      }
      function handleUpdate(selectedFiles) {
        console.log('📁 Archivos actualizados:', selectedFiles.length);
        files.value = selectedFiles;
        if (selectedFiles.length >= 0) {
          validationErrorMsg.value = '';
          maxFilesErrorMsg.value = '';
        }
        if (selectedFiles.length > 0 && !uploading.value) {
          simulateUpload(selectedFiles);
        }
      }
      function handleRetry() {
        uploadError.value = false;
        fileErrors.value = {};
        fileProgress.value = {};
        validationErrorMsg.value = '';
        maxFilesErrorMsg.value = '';
        if (files.value.length > 0) {
          simulateUpload(files.value);
        }
      }
      function handleClearAll() {
        files.value = [];
        uploading.value = false;
        uploadError.value = false;
        validationErrorMsg.value = '';
        maxFilesErrorMsg.value = '';
        fileProgress.value = {};
        fileErrors.value = {};
      }
      return {
        files,
        uploading,
        uploadError,
        validationErrorMsg,
        maxFilesErrorMsg,
        fileProgress,
        fileErrors,
        handleValidationError,
        handleUpdate,
        handleRetry,
        handleClearAll
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <g-attach-file 
            v-model="files"
            type="default"
            max-size="2MB"
            :max-files="2"
            title="Simulador de Carga de Archivos"
            info-text="Máximo 2MB por archivo, 2 archivos total"
            :multiple="true"
            :uploading="uploading"
            :upload-error="uploadError"
            :file-progress="fileProgress"
            :file-errors="fileErrors"
            :errors="[validationErrorMsg, maxFilesErrorMsg].filter(Boolean)"
            @validation-error="handleValidationError"
            @update:model-value="handleUpdate"
            @on-retry="handleRetry"
          />
          
          <div class="flex gap-2">
            <g-button 
              @click="handleClearAll"
              class="px-4 py-2"
              :disabled="uploading"
            >
              Limpiar Todo
            </g-button>
          </div>
        
        </div>
      </g-config-provider>
    \`
  })
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "Modo Descarga",
  parameters: {
    docs: {
      description: {
        story: \`
En modo descarga, el componente cambia su comportamiento para mostrar un icono de descarga y emitir un evento 'download' en lugar de abrir el selector de archivos.
 \`
      },
      source: {
        code: \`<script setup lang="ts">
import { GAttachFile } from '@flash-global66/g-attach-file'

const handleDownload = () => {
  // Implementar lógica de descarga específica
  const link = document.createElement('a')
  link.href = 'data:text/plain;charset=utf-8,Contenido del archivo'
  link.download = 'plantilla-ejemplo.txt'
  link.click()
}
<\/script>

<template>
  <g-attach-file 
    mode="download"
    title="Descargar plantilla"
    info-text="Haz clic para descargar el archivo de plantilla"
    @download="handleDownload"
  />
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GAttachFile,
      GConfigProvider
    },
    setup() {
      const handleDownload = () => {
        action('download')();
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.';
        link.download = 'plantilla-ejemplo.txt';
        link.click();
      };
      return {
        handleDownload
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <g-attach-file 
            mode="download"
            title="Descargar plantilla"
            info-text="Haz clic para descargar el archivo de plantilla"
            @download="handleDownload"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "Integración con Formularios",
  parameters: {
    docs: {
      description: {
        story: \`Integración del componente GAttachFile con GForm y validaciones de formulario.\`
      },
      source: {
        code: \`<script setup lang="ts">
import { ref, reactive } from 'vue'
import { GForm, GFormItem } from '@flash-global66/g-form'
import { GAttachFile } from '@flash-global66/g-attach-file'

const formRef = ref()
const formData = reactive({
  name: '',
  documents: [] as File[]
})

const rules = {
  name: [
    { required: true, message: 'El nombre es requerido', trigger: 'blur' }
  ],
  documents: [
    { required: true, message: 'Debe adjuntar documentos', trigger: 'change' }
  ]
}

const handleSubmit = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    alert('¡Documentos enviados exitosamente!')
  }
}
<\/script>

<template>
  <g-form ref="formRef" :model="formData" :rules="rules">
    <g-form-item prop="name" show-message="parent">
      <g-input 
        v-model="formData.name"
        label="Nombre completo"
        placeholder="Ingrese su nombre"
      />
    </g-form-item>

    <g-form-item prop="documents" show-message="parent">
      <g-attach-file
        v-model="formData.documents"
        title="Documentos requeridos"
        type="drag-drop"
        :multiple="true"
        :max-files="3"
        max-size="5MB"
        :accept-ext-names="['.pdf', '.jpg', '.jpeg', '.png']"
        upload-button-text="Seleccionar documentos"
        upload-text=" o arrastra archivos aquí"
      />
    </g-form-item>

    <g-button variant="primary" @click="handleSubmit">
      Enviar Documentos
    </g-button>
  </g-form>
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GAttachFile,
      GConfigProvider,
      GForm,
      GFormItem,
      GButton,
      GInput
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        name: '',
        documents: [] as File[]
      });
      const rules = {
        name: [{
          required: true,
          message: 'El nombre es requerido',
          trigger: 'blur'
        }, {
          min: 3,
          message: 'Mínimo 3 caracteres',
          trigger: 'blur'
        }],
        documents: [{
          required: true,
          message: 'Debe adjuntar al menos un documento',
          trigger: 'change'
        }, {
          validator: (rule: any, files: File[], callback: any) => {
            if (!files || files.length === 0) {
              callback(new Error('Los documentos son obligatorios'));
              return;
            }
            const hasPdf = files.some(file => file.name.toLowerCase().endsWith('.pdf'));
            if (!hasPdf) {
              callback(new Error('Debe incluir al menos un documento PDF'));
              return;
            }
            const hasDescriptiveName = files.every(file => {
              const name = file.name.toLowerCase();
              return name.length > 10 || name.includes('documento') || name.includes('certificado') || name.includes('comprobante');
            });
            if (!hasDescriptiveName) {
              callback(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));
              return;
            }
            callback();
          },
          trigger: 'change'
        }]
      };
      const validationErrors = ref<string[]>([]);
      async function handleSubmit() {
        if (!formRef.value) return;
        try {
          const valid = await formRef.value.validate();
          if (valid) {
            console.log('Formulario válido:', formData);
            alert('¡Documentos enviados exitosamente!');
          }
        } catch (error) {
          console.error('Error de validación:', error);
        }
      }
      function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
        validationErrors.value = [];
      }
      const handleValidationError = (errors: Array<{
        type: string;
        file?: File;
        data?: any;
      }>) => {
        action('validation-error')(errors);
        const messages = errors.map(error => {
          switch (error.type) {
            case 'file-size-exceeded':
              return \`"\${error.file?.name}" excede \${error.data?.maxSize}\`;
            case 'invalid-file-type':
              return \`"\${error.file?.name}" tipo no válido. Solo \${error.data?.acceptedExtensions?.join(', ')}\`;
            case 'max-files-exceeded':
              return \`Máximo \${error.data?.maxFiles} archivos permitidos\`;
            default:
              return 'Error de validación';
          }
        });
        validationErrors.value = messages;
        setTimeout(() => validationErrors.value = [], 5000);
      };
      return {
        formRef,
        formData,
        rules,
        validationErrors,
        handleSubmit,
        handleReset,
        handleValidationError
      };
    },
    template: \`
      <g-config-provider>
        <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-sm border">
          <h2 class="text-xl font-bold mb-6 text-gray-900">Envío de Documentos</h2>
          
          <div v-if="validationErrors.length > 0" class="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
            <h4 class="text-sm font-semibold text-red-900 mb-1">Errores de validación automática:</h4>
            <ul class="text-sm text-red-800 space-y-1">
              <li v-for="error in validationErrors" :key="error">• {{ error }}</li>
            </ul>
          </div>
          
          <g-form 
            ref="formRef" 
            :model="formData" 
            :rules="rules"
            class="space-y-4"
          >
            <g-form-item prop="name" show-message="parent">
              <g-input 
                v-model="formData.name"
                label="Nombre completo"
                placeholder="Ingrese su nombre"
              />
            </g-form-item>

            <g-form-item prop="documents" show-message="parent">
              <g-attach-file
                v-model="formData.documents"
                title="Documentos requeridos"
                info-text="PDF o imágenes, máximo 5MB cada uno y 3 archivos total"
                type="drag-drop"
                :multiple="true"
                :max-files="3"
                max-size="5MB"
                :accept-ext-names="['.pdf', '.jpg', '.jpeg', '.png']"
                upload-button-text="Seleccionar documentos"
                upload-text=" o arrastra archivos aquí"
                restriction-text="Se requiere al menos un PDF con nombre descriptivo"
                @validation-error="handleValidationError"
              />
            </g-form-item>

            <div class="flex gap-3 pt-4">
              <g-button 
                variant="primary" 
                @click="handleSubmit"
                class="flex-1"
              >
                Enviar Documentos
              </g-button>
              <g-button 
                variant="secondary" 
                @click="handleReset"
              >
                Limpiar
              </g-button>
            </div>
          </g-form>
        </div>
      </g-config-provider>
    \`
  })
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Método addFiles",
  parameters: {
    docs: {
      description: {
        story: \`Método  \\\`addFiles\\\` que permite agregar archivos programáticamente al componente.\`
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([])
const attachFileRef = ref()

const addMockFiles = () => {
  // Crear archivos de ejemplo
  const mockFiles = [
    new File(['contenido'], 'documento1.pdf', { type: 'application/pdf' }),
    new File(['contenido'], 'imagen1.jpg', { type: 'image/jpeg' })
  ]
  
  // Usar el método addFiles para agregar los archivos
  attachFileRef.value?.addFiles(mockFiles)
}
<\/script>

<template>
  <g-attach-file 
    ref="attachFileRef"
    v-model="files"
    title="Agregar archivos programáticamente"
    :accept-ext-names="['.pdf', '.jpg', '.png']"
    max-size="5MB"
    :max-files="3"
  />
  
  <g-button @click="addMockFiles">
    Agregar archivos de ejemplo
  </g-button>
</template>\`
      }
    }
  },
  render: () => ({
    components: {
      GAttachFile,
      GConfigProvider,
      GButton
    },
    setup() {
      const files = ref<File[]>([]);
      const attachFileRef = ref();
      const addMockFiles = () => {
        const mockFiles = [new File(['contenido PDF de ejemplo'], 'documento-ejemplo.pdf', {
          type: 'application/pdf'
        }), new File(['contenido imagen de ejemplo'], 'imagen-ejemplo.jpg', {
          type: 'image/jpeg'
        })];
        Object.defineProperty(mockFiles[0], 'size', {
          value: 1024 * 500
        });
        Object.defineProperty(mockFiles[1], 'size', {
          value: 1024 * 800
        });
        if (attachFileRef.value?.addFiles) {
          attachFileRef.value.addFiles(mockFiles);
        }
      };
      const addSingleFile = () => {
        const singleFile = new File(['contenido de texto'], 'nota.txt', {
          type: 'text/plain'
        });
        Object.defineProperty(singleFile, 'size', {
          value: 1024 * 100
        });
        if (attachFileRef.value?.addFiles) {
          attachFileRef.value.addFiles([singleFile]);
        }
      };
      const clearFiles = () => {
        files.value = [];
      };
      return {
        files,
        attachFileRef,
        addMockFiles,
        addSingleFile,
        clearFiles
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-4">
          <g-attach-file 
            ref="attachFileRef"
            v-model="files"
            title="Agregar archivos programáticamente"
            info-text="Usa los botones de abajo para agregar archivos sin selector"
            :accept-ext-names="['.pdf', '.jpg', '.png', '.txt']"
            max-size="5MB"
            :max-files="3"
            :multiple="true"
          />
          
          <div class="flex gap-2 flex-wrap">
            <g-button @click="addMockFiles" variant="primary">
              Agregar 2 archivos
            </g-button>
            
            <g-button @click="addSingleFile" variant="secondary">
             Agregar 1 archivo
            </g-button>
            
            <g-button @click="clearFiles" variant="tertiary">
               Limpiar
            </g-button>
          </div>
          
          <div class="p-4 bg-gray-50 rounded-lg">
            <h4 class="font-medium text-gray-900 mb-2">Información</h4>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• <strong>addFiles()</strong> aplica todas las validaciones automáticas</li>
            </ul>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...Q.parameters?.docs?.source}}};const Ka=["Primary","DragDrop","ComponentStates","FlujoCargaCompleto","DownloadMode","FormIntegration","AddFilesMethod"];export{Q as AddFilesMethod,H as ComponentStates,Z as DownloadMode,W as DragDrop,K as FlujoCargaCompleto,J as FormIntegration,_ as Primary,Ka as __namedExportsOrder,Ha as default};
