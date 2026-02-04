import{c as p,w as Ue,r as b,d as ne,x as y,e as u,m as j,l as s,u as a,k as h,n as U,s as ie,y as A,b as G,t as Ge,h as N,F as O,z as me,A as Le,a1 as H,a2 as he,q as Ne,f as Oe,H as _e}from"./vue.esm-bundler-C43JrhH2.js";import{a as I}from"./index-Br0BFi8U.js";import{b as We,d as He,f as Ke,w as Ze}from"./install-CfJGiCvs.js";import{H as Je,G as Qe}from"./index-CRgYr9aG.js";import{d as Xe}from"./error-Cq9Fpw4b.js";import{u as ue}from"./index-KF1Hf1TG.js";import{O as le}from"./index-CdzPrvh_.js";import{u as de}from"./index-DRaHcUI8.js";import{G as V}from"./ConfigProvider-DGM6yYEs.js";import{G as ke,a as Se}from"./index-C1ucTNRz.js";import{G as ge}from"./index-m5O_vOKZ.js";import{G as De}from"./index-HgPeTsE7.js";import{a as Ye,b as ye}from"./documentation-stories-BqZmL7Rs.js";import"./v4-CtRu48qb.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./_arrayPush-C7rDDJbA.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BDKGuxIf.js";import"./event-BB_Ol6Sd.js";import"./index-B23jN5Qn.js";import"./typescript-Bp3YSIOJ.js";import"./index-BjhK0CHr.js";import"./index-Cu6sv81Q.js";import"./index-Dwlzb1ZD.js";import"./index-CvPWi8JN.js";import"./index-BYyjWRO2.js";import"./index-kkjQPABY.js";const xe={UPLOAD:"upload",DOWNLOAD:"download"},B={SUCCESS:"success",ERROR:"error",LOADING:"loading"},ea=We({modelValue:{type:He(Array),default:()=>[]},type:{type:String,values:["default","drag-drop"],default:"default"},mode:{type:String,values:Object.values(xe),default:xe.UPLOAD},inputId:{type:String,default:void 0},acceptExtNames:{type:Array,default:()=>[]},maxSize:{type:String,default:"10MB"},multiple:{type:Boolean,default:!0},maxFiles:{type:Number,default:void 0},disabled:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},uploadButtonText:{type:String,default:""},title:{type:String,default:""},uploadText:{type:String,default:""},restrictionText:{type:String,default:""},infoText:{type:String,default:""},downloadUrl:{type:String,default:""},downloadLinkText:{type:String,default:""},uploading:{type:Boolean,default:!1},uploadError:{type:[Boolean,String],default:!1},fileErrors:{type:Object,default:()=>({})},fileProgress:{type:Object,default:()=>({})},errors:{type:Array,default:()=>[]},showFileSize:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0}}),aa={"update:modelValue":t=>!0,change:t=>!0,error:t=>!0,"validation-error":t=>!0,onRetry:()=>!0,download:()=>!0,clearProgress:()=>!0},be={b:1,kb:1024,mb:1024*1024,gb:1024*1024*1024,tb:1024*1024*1024*1024},ta=["Bytes","KB","MB","GB","TB"];function se(t){if(t===0)return"0 Bytes";const r=1024,i=Math.floor(Math.log(t)/Math.log(r));return parseFloat((t/Math.pow(r,i)).toFixed(2))+" "+ta[i]}function Re(t){if(!t||typeof t!="string")return 0;const r=/^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i,i=t.trim().match(r);if(!i)return 0;const e=parseFloat(i[1]),o=i[2].toLowerCase();return be[o]?Math.floor(e*be[o]):0}function oa(t,r,i="change"){t&&r&&r.validate(i).catch(e=>Xe())}function Fe(t){return t?Array.from(t):[]}function pe(t,r=!1,i=!1){!r&&!i&&t.value&&t.value.click()}function ve(t,r,i,e,o){return r[t]||i?B.ERROR:e||o[t]!==void 0?B.LOADING:B.SUCCESS}function ze(t,r,i=!1,e=!1){return function(d){if(i&&e)return;const g=[...t];g.splice(d,1),r("update:modelValue",g),r("change",g)}}function Me(t){return t.length>0?t[0]:""}function ra(t,r){const{formItem:i}=Qe(),{inputId:e}=Je(t,{formItemContext:i||void 0}),o=p(()=>t.modelValue||[]),d=p(()=>t.multiple??!0),g=p(()=>t.validateEvent??!0),E=p(()=>t.uploading??!1),m=p(()=>t.uploadError??!1),c=p(()=>t.fileErrors||{}),w=p(()=>t.fileProgress||{}),k=p(()=>{const l={};return o.value.forEach((F,z)=>{l[z]=ve(z,c.value,!!m.value,E.value,w.value)}),l}),x=p(()=>{const l=[];return t.errors&&Array.isArray(t.errors)&&t.errors.forEach(F=>{typeof F=="string"&&F.trim()&&!l.includes(F)&&l.push(F)}),i?.shouldShowErrorChild&&i?.validateMessage&&(l.includes(i.validateMessage)||l.push(i.validateMessage)),m.value&&typeof m.value=="string"&&(l.includes(m.value)||l.push(m.value)),Object.values(c.value).forEach(F=>{typeof F=="string"&&F&&!l.includes(F)&&l.push(F)}),l});function S(l){const F=[],z=[],v=t.acceptExtNames?.map(P=>P.toLowerCase())||[],M=d.value?o.value:[];if(t.maxFiles&&M.length+l.length>t.maxFiles){F.push({type:"max-files-exceeded",data:{maxFiles:t.maxFiles,currentFiles:M.length,attemptedFiles:l.length,totalAttempted:M.length+l.length}}),r("validation-error",F);return}if(l.forEach(P=>{let L=!0;if(t.maxSize){const $=Re(t.maxSize);$&&P.size>$&&(F.push({type:"file-size-exceeded",file:P,data:{maxSize:t.maxSize,actualSize:P.size}}),L=!1)}if(v.length>0){const $="."+P.name.split(".").pop()?.toLowerCase();v.includes($)||(F.push({type:"invalid-file-type",file:P,data:{acceptedExtensions:t.acceptExtNames,actualExtension:$}}),L=!1)}L&&z.push(P)}),F.length>0){r("validation-error",F);return}if(z.length>0){const P=d.value?[...o.value,...z]:z;r("update:modelValue",P),r("change",P),oa(g.value||!1,i)}}function C(l){const F=l.target;F.files&&(S(Fe(F.files)),F.value="")}function R(l){S(Fe(l))}Ue(()=>E.value,l=>{l||r("clearProgress")},{immediate:!0});const f=b(null);function n(){t.type==="default"&&f.value?.openFilePicker()}return{modelValue:o,fileStatuses:k,displayErrors:x,fileErrors:c,fileProgress:w,inputId:e,multiple:d,uploading:E,uploadError:m,defaultTypeRef:f,onFileInputChange:C,onFilesDrop:R,addFiles:S,openFilePicker:n}}/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ia=Object.prototype.hasOwnProperty,Ee=(t,r)=>ia.call(t,r),Ae=t=>t!==null&&typeof t=="object",je="__epPropKey",we=t=>t,la=t=>Ae(t)&&!!t[je],sa=(t,r)=>{if(!Ae(t)||la(t))return t;const{values:i,required:e,default:o,type:d,validator:g}=t,E={type:d,required:!!e,validator:i||g?m=>{let c=!1,w=[];if(i&&(w=Array.from(i),Ee(t,"default")&&w.push(o),c||(c=w.includes(m))),g&&(c||(c=g(m))),!c&&w.length>0){const k=[...new Set(w)].map(x=>JSON.stringify(x)).join(", ");Ge(`Invalid prop: validation failed${r?` for prop "${r}"`:""}. Expected one of [${k}], got value ${JSON.stringify(m)}.`)}return c}:void 0,[je]:!0};return Ee(t,"default")&&(E.default=o),E},na=t=>Ke(Object.entries(t).map(([r,i])=>[r,sa(i,r)])),da=(t,r)=>(t.install=i=>{for(const e of[t,...Object.values({})])i.component(e.name,e)},t),ca=na({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},status:{type:String,default:"primary",values:["primary","success","error","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:we(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},format:{type:we(Function),default:t=>`${t}%`}}),ma=["aria-valuenow"],ua={viewBox:"0 0 100 100"},pa=["d","stroke","stroke-linecap","stroke-width"],fa=["d","stroke","opacity","stroke-linecap","stroke-width"],ga={key:1},va=ne({name:"Progress",__name:"progress",props:ca,setup(t){const r={primary:"--color-progress-primary",success:"--color-progress-success",error:"--color-progress-error",warning:"--color-progress-warning"},i=t,e=de("progress"),o=p(()=>{const n={width:`${i.percentage}%`,animationDuration:`${i.duration}s`},l=r[i.status]||r.primary;return n.backgroundColor=`var(${l})`,n}),d=p(()=>(i.strokeWidth/i.width*100).toFixed(1)),g=p(()=>["circle","dashboard"].includes(i.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),E=p(()=>{const n=g.value,l=i.type==="dashboard";return`
            M 50 50
            m 0 ${l?"":"-"}${n}
            a ${n} ${n} 0 1 1 0 ${l?"-":""}${n*2}
            a ${n} ${n} 0 1 1 0 ${l?"":"-"}${n*2}
            `}),m=p(()=>2*Math.PI*g.value),c=p(()=>i.type==="dashboard"?.75:1),w=p(()=>`${-1*m.value*(1-c.value)/2}px`),k=p(()=>({strokeDasharray:`${m.value*c.value}px, ${m.value}px`,strokeDashoffset:w.value})),x=p(()=>({strokeDasharray:`${m.value*c.value*(i.percentage/100)}px, ${m.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),S=p(()=>{let n;return n=`var(${r[i.status]||r.primary})`,n}),C=p(()=>i.status==="warning"?"solid exclamation-circle":i.type==="line"?i.status==="success"?"regular check-circle":"regular circle-xmark":i.status==="success"?"regular check":"regular times"),R=p(()=>i.type==="line"?12+i.strokeWidth*.4:i.width*.111111+2),f=p(()=>i.format(i.percentage));return(n,l)=>(u(),y("div",{class:s([a(e).b(),a(e).m(n.type),a(e).is(n.status),{[a(e).m("without-text")]:!n.showText,[a(e).m("text-inside")]:n.textInside}]),id:"MAIN-DIV",role:"progressbar","aria-valuenow":n.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[n.type==="line"?(u(),y("div",{key:0,class:s(a(e).b("bar"))},[h("div",{class:s(a(e).be("bar","outer")),style:U({height:`${n.strokeWidth}px`})},[h("div",{class:s([a(e).be("bar","inner"),{[a(e).bem("bar","inner","indeterminate")]:n.indeterminate}]),style:U(o.value)},[(n.showText||n.$slots.default)&&n.textInside?(u(),y("div",{key:0,class:s(a(e).be("bar","innerText"))},[ie(n.$slots,"default",{percentage:n.percentage},()=>[h("span",null,A(f.value),1)])],2)):j("",!0)],6)],6)],2)):(u(),y("div",{key:1,class:s(a(e).b("circle")),style:U({height:`${n.width}px`,width:`${n.width}px`})},[(u(),y("svg",ua,[h("path",{class:s(a(e).be("circle","track")),d:E.value,stroke:`var(${a(e).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":n.strokeLinecap,"stroke-width":d.value,fill:"none",style:U(k.value)},null,14,pa),h("path",{class:s(a(e).be("circle","path")),d:E.value,stroke:S.value,fill:"none",opacity:n.percentage?1:0,"stroke-linecap":n.strokeLinecap,"stroke-width":d.value,style:U(x.value)},null,14,fa)]))],6)),(n.showText||n.$slots.default)&&!n.textInside?(u(),y("div",{key:2,class:s(a(e).e("text")),style:U({fontSize:`${R.value}px`})},[ie(n.$slots,"default",{percentage:n.percentage},()=>[n.loading?(u(),G(a(le),{key:0,name:"regular spinner",spin:""})):!n.status||n.status==="primary"?(u(),y("span",ga,A(f.value),1)):(u(),G(a(le),{key:2,name:C.value},null,8,["name"]))])],6)):j("",!0)],10,ma))}}),Ce=da(va),ha=["multiple","accept","disabled","aria-label","aria-describedby"],ya=["href","aria-label"],Be=ne({__name:"default-type",props:{id:{},mode:{default:"upload"},title:{},infoText:{},uploadError:{type:Boolean,default:!1},downloadUrl:{default:""},downloadLinkText:{default:""},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{default:()=>[]},fileErrors:{default:()=>({})},fileProgress:{default:()=>({})},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean}},emits:["update:modelValue","change","error","onRetry","download","file-input-change"],setup(t,{expose:r,emit:i}){const e=de("attach-file"),o=t,d=i,g=b();function E(){o.mode==="download"?d("download"):o.uploadError||Object.keys(o.fileErrors).length>0?d("onRetry"):pe(g,o.disabled,o.uploading)}function m(l){d("file-input-change",l)}const c=p(()=>o.modelValue||[]),w=p(()=>c.value.length>0),k=p(()=>o.multiple||o.uploadError),x=p(()=>o.uploadError?"error":o.uploading?"loading":c.value.length>0?"success":"default"),S=p(()=>Me(o.errors)),C=p(()=>o.mode==="download"?"solid download":"solid upload"),R=ze(o.modelValue,d),f=l=>ve(l,o.fileErrors,o.uploadError,o.uploading,o.fileProgress);function n(){pe(g,o.disabled,o.uploading)}return r({hiddenFileInput:g,openFilePicker:n}),(l,F)=>(u(),y("div",{class:s(a(e).e("default-type"))},[h("input",{ref_key:"hiddenFileInput",ref:g,type:"file",multiple:l.multiple,accept:l.acceptExtNames.join(","),disabled:l.disabled,class:s(a(e).e("hidden-input")),"aria-label":l.title||void 0,"aria-describedby":l.infoText?`${l.id||"attach-file"}-info`:void 0,onChange:m},null,42,ha),h("div",{class:s(a(e).e("content"))},[h("div",{class:s([a(e).e("header"),{[a(e).is("with-file-list")]:w.value}])},[h("div",{class:s(a(e).e("header-content"))},[h("p",{class:s(a(e).e("title"))},A(l.title),3),k.value?(u(),y("p",{key:0,class:s(a(e).e("info-text"))},A(l.infoText),3)):j("",!0),l.downloadUrl&&l.downloadLinkText?(u(),y("a",{key:1,href:l.downloadUrl,target:"_blank",rel:"noopener noreferrer",class:s(a(e).e("download-link")),"aria-label":`${l.downloadLinkText} (opens in new tab)`},A(l.downloadLinkText),11,ya)):j("",!0)],2),N(a(ue),{icon:C.value,variant:"blue",border:"",rounded:"",size:"medium",onClick:E,disabled:l.disabled},null,8,["icon","disabled"])],2),x.value==="loading"?(u(),y("div",{key:0,class:s(a(e).e("files-list"))},[h("div",{class:s(a(e).e("files-container"))},[(u(!0),y(O,null,me(l.modelValue,(z,v)=>(u(),y("div",{key:v,class:s(a(e).e("file-item"))},[h("div",{class:s(a(e).e("file-item-content"))},[N(a(Ce),{percentage:l.fileProgress[v]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),h("div",{class:s(a(e).e("file-item-info"))},[h("span",{class:s(a(e).e("file-item-name"))},A(z.name),3),h("span",{class:s(a(e).e("file-item-size"))},A(a(se)(z.size)),3)],2)],2)],2))),128))],2)],2)):w.value?(u(),y("div",{key:1,class:s(a(e).em("file-list","clean"))},[(u(!0),y(O,null,me(c.value,(z,v)=>(u(),y("div",{key:v,class:s(a(e).e("item"))},[h("div",{class:s(a(e).e("item-content"))},[h("div",{class:s(a(e).e("file-status-icon"))},[N(a(le),{name:f(v)===a(B).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:f(v)!==a(B).ERROR,[a(e).is("error")]:f(v)===a(B).ERROR}])},null,8,["name","class"])],2),h("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:f(v)===a(B).ERROR,[a(e).is("success")]:f(v)!==a(B).ERROR}])},A(z.name),3)],2),h("div",{class:s(a(e).e("item-actions"))},[o.showFileSize?(u(),y("span",{key:0,class:s(a(e).e("file-size"))},A(a(se)(z.size)),3)):j("",!0),o.showRemoveButton?(u(),G(a(ue),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:o.disabled,onClick:M=>!o.disabled&&a(R)(v)},null,8,["disabled","onClick"])):j("",!0)],2)],2))),128))],2)):j("",!0),l.$slots["extra-content"]?(u(),y("div",{key:2,class:s(a(e).e("extra-content"))},[ie(l.$slots,"extra-content")],2)):j("",!0)],2),S.value?(u(),y("div",{key:0,class:s(a(e).e("validation-errors"))},[h("p",{class:s(a(e).e("error-text"))},A(S.value),3)],2)):j("",!0)],2))}});Be.__docgenInfo={exportName:"default",displayName:"default-type",description:"",tags:{},expose:[{name:"hiddenFileInput"},{name:"openFilePicker"}],props:[{name:"showRemoveButton",required:!0,type:{name:"boolean"}},{name:"showFileSize",required:!0,type:{name:"boolean"}},{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"mode",required:!1,type:{name:"AttachFileMode"},defaultValue:{func:!1,value:'"upload"'}},{name:"title",required:!0,type:{name:"string"}},{name:"infoText",required:!0,type:{name:"string"}},{name:"uploadError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"downloadUrl",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"downloadLinkText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"download"},{name:"file-input-change"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/default-type.vue"]};const xa=["aria-label","aria-describedby"],ba=["disabled"],Fa=["id"],Ea=["multiple","accept","disabled","aria-label"],Pe=ne({__name:"drag-drop-type",props:{id:{default:void 0},uploadButtonText:{},uploadText:{},restrictionText:{default:""},maxSize:{default:""},maxFiles:{default:void 0},loadingState:{type:Boolean,default:!1},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{},fileErrors:{},fileProgress:{},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean}},emits:["update:modelValue","change","error","onRetry","file-input-change","files-drop"],setup(t,{expose:r,emit:i}){const e=de("attach-file"),o=t,d=i,g=b(),E=b(),m=b(!1),c=b(0),w=p(()=>o.modelValue||[]),k=p(()=>o.loadingState||o.uploading),x=p(()=>o.maxSize?Re(o.maxSize):0),S=p(()=>o.restrictionText||""),C=p(()=>Me(o.errors)),R=p(()=>ze(w.value,d,!0,k.value)),f=D=>ve(D,o.fileErrors,!1,o.uploading,o.fileProgress);function n(){pe(g,o.disabled,k.value)}function l(D){d("file-input-change",D)}function F(D){D.preventDefault(),c.value++,m.value=!0}function z(D){D.preventDefault(),c.value--,c.value===0&&(m.value=!1)}function v(D){D.preventDefault()}function M(D){if(D.preventDefault(),c.value=0,m.value=!1,o.disabled||k.value)return;const _=D.dataTransfer?.files;_&&_.length>0&&d("files-drop",_)}const P=()=>n(),L=()=>n(),$=D=>{D.preventDefault(),n()},Te=D=>{D.stopPropagation(),Object.keys(o.fileErrors).length>0||o.errors.length>0?d("onRetry"):n()},Ve=D=>v(D),qe=D=>F(D),Ie=D=>z(D),$e=D=>M(D);return r({fileInput:g,openFileDialog:n}),(D,_)=>(u(),y("div",{class:s(a(e).e("drag-drop-type"))},[h("div",{ref_key:"dropZone",ref:E,class:s([a(e).e("drop-zone"),{[a(e).is("dragging")]:m.value,[a(e).is("error")]:o.errors.length>0,[a(e).is("disabled")]:o.disabled,[a(e).is("loading")]:k.value}]),role:"button",tabindex:"0","aria-label":`${o.uploadButtonText}. ${S.value||""}`,"aria-describedby":o.restrictionText||o.acceptExtNames.length||x.value?`${o.id||"drag-drop"}-restriction`:void 0,onClick:P,onKeydown:[he(L,["enter"]),he($,["space"])],onDragover:H(Ve,["prevent"]),onDragenter:H(qe,["prevent"]),onDragleave:H(Ie,["prevent"]),onDrop:H($e,["prevent"])},[h("div",{class:s(a(e).e("text-content"))},[h("p",{class:s(a(e).e("main-text"))},[h("button",{type:"button",class:s(a(e).e("upload-button")),disabled:o.disabled||k.value,onClick:Te},A(o.uploadButtonText),11,ba),Le(" "+A(o.uploadText),1)],2),o.restrictionText||o.acceptExtNames.length||x.value?(u(),y("p",{key:0,class:s(a(e).e("restriction-text")),id:`${o.id||"drag-drop"}-restriction`},A(o.restrictionText||S.value),11,Fa)):j("",!0)],2),h("input",{ref_key:"fileInput",ref:g,type:"file",multiple:o.multiple,accept:o.acceptExtNames.join(","),disabled:o.disabled||k.value,class:s(a(e).e("hidden-input")),"aria-label":`${o.uploadButtonText} - ${S.value||""}`,onChange:l},null,42,Ea)],42,xa),w.value.length>0?(u(),y("div",{key:0,class:s(a(e).em("file-list","boxed"))},[(u(!0),y(O,null,me(w.value,(W,q)=>(u(),y("div",{key:q,class:s([a(e).e("item"),{[a(e).is("loading")]:k.value}])},[h("div",{class:s(a(e).e("item-content"))},[k.value?(u(),y("div",{key:0,class:s(a(e).e("file-item-content"))},[N(a(Ce),{percentage:o.fileProgress[q]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),h("div",{class:s(a(e).e("file-item-info"))},[h("span",{class:s(a(e).e("file-item-name"))},A(W.name),3),o.showFileSize?(u(),y("span",{key:0,class:s(a(e).e("file-item-size"))},A(a(se)(W.size)),3)):j("",!0)],2)],2)):(u(),y(O,{key:1},[h("div",{class:s(a(e).e("file-status-icon"))},[N(a(le),{name:f(q)===a(B).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:f(q)!==a(B).ERROR,[a(e).is("error")]:f(q)===a(B).ERROR}])},null,8,["name","class"])],2),h("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:f(q)===a(B).ERROR,[a(e).is("success")]:f(q)!==a(B).ERROR}])},A(W.name),3)],64))],2),h("div",{class:s(a(e).e("item-actions"))},[k.value?j("",!0):(u(),y(O,{key:0},[o.showFileSize?(u(),y("span",{key:0,class:s(a(e).e("file-size"))},A(a(se)(W.size)),3)):j("",!0),o.showRemoveButton?(u(),G(a(ue),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:o.disabled,onClick:ka=>!o.disabled&&R.value(q)},null,8,["disabled","onClick"])):j("",!0)],64))],2)],2))),128))],2)):j("",!0),C.value?(u(),y("div",{key:1,class:s(a(e).e("validation-errors"))},[h("p",{class:s(a(e).e("error-text"))},A(C.value),3)],2)):j("",!0)],2))}});Pe.__docgenInfo={exportName:"default",displayName:"drag-drop-type",description:"",tags:{},expose:[{name:"fileInput"},{name:"openFileDialog"}],props:[{name:"showRemoveButton",required:!0,type:{name:"boolean"}},{name:"showFileSize",required:!0,type:{name:"boolean"}},{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({} as Record<number, FileStatus>)"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"uploadButtonText",required:!0,type:{name:"string"}},{name:"uploadText",required:!0,type:{name:"string"}},{name:"restrictionText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxSize",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxFiles",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"loadingState",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"uploadProgress",defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"file-input-change"},{name:"files-drop"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/drag-drop-type.vue"]};const fe=ne({name:"GAttachFile",__name:"attach-file",props:ea,emits:aa,setup(t,{expose:r,emit:i}){const e=t,o=i,{modelValue:d,fileStatuses:g,displayErrors:E,fileErrors:m,fileProgress:c,inputId:w,multiple:k,uploading:x,uploadError:S,defaultTypeRef:C,onFileInputChange:R,onFilesDrop:f,addFiles:n,openFilePicker:l}=ra(e,o),F=de("attach-file");return r({addFiles:n,openFilePicker:l}),(z,v)=>(u(),y("div",{class:s(a(F).b())},[e.type==="default"?(u(),G(Be,{key:0,ref_key:"defaultTypeRef",ref:C,id:a(w),"model-value":a(d),mode:e.mode,title:e.title,"info-text":e.infoText,"download-url":e.downloadUrl,"download-link-text":e.downloadLinkText,multiple:a(k),"accept-ext-names":e.acceptExtNames,disabled:e.disabled,uploading:a(x),"upload-error":!!a(S),"file-statuses":a(g),errors:a(E),"file-errors":a(m),"file-progress":a(c),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"onUpdate:modelValue":v[0]||(v[0]=M=>o("update:modelValue",M)),onChange:v[1]||(v[1]=M=>o("change",M)),onError:v[2]||(v[2]=M=>o("error",M)),onOnRetry:v[3]||(v[3]=M=>o("onRetry")),onDownload:v[4]||(v[4]=M=>o("download")),onFileInputChange:a(R)},Ne({_:2},[z.$slots["extra-content"]?{name:"extra-content",fn:Oe(()=>[ie(z.$slots,"extra-content")]),key:"0"}:void 0]),1032,["id","model-value","mode","title","info-text","download-url","download-link-text","multiple","accept-ext-names","disabled","uploading","upload-error","file-statuses","errors","file-errors","file-progress","show-file-size","show-remove-button","onFileInputChange"])):e.type==="drag-drop"?(u(),G(Pe,{key:1,id:a(w),"model-value":a(d),"upload-button-text":e.uploadButtonText,"upload-text":e.uploadText,"restriction-text":e.restrictionText,"accept-ext-names":e.acceptExtNames,multiple:a(k),disabled:e.disabled,"max-size":e.maxSize,"max-files":e.maxFiles,uploading:e.uploading,errors:a(E),"file-errors":a(m),"file-progress":a(c),"file-statuses":a(g),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"onUpdate:modelValue":v[5]||(v[5]=M=>o("update:modelValue",M)),onChange:v[6]||(v[6]=M=>o("change",M)),onError:v[7]||(v[7]=M=>o("error",M)),onFileInputChange:a(R),onFilesDrop:a(f)},null,8,["id","model-value","upload-button-text","upload-text","restriction-text","accept-ext-names","multiple","disabled","max-size","max-files","uploading","errors","file-errors","file-progress","file-statuses","show-file-size","show-remove-button","onFileInputChange","onFilesDrop"])):j("",!0)],2))}});fe.__docgenInfo={name:"GAttachFile",exportName:"default",displayName:"attach-file",description:"",tags:{},expose:[{name:"addFiles"},{name:"openFilePicker"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/attach-file.vue"]};const T=Ze(fe,{AttachFile:fe}),wa="1.3.1",ce={"@flash-global66/g-form":"1.0.0","@flash-global66/g-icon-button":"0.2.2","@flash-global66/g-icon-font":"0.6.0","@flash-global66/g-progress":"0.2.0","element-plus":"2.9.0",vue:"3.2.0"},at={title:"Form/Attach File",component:T,parameters:{docs:{description:{component:`
El componente Attach File permite cargar archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (compacto) y drag-drop (arrastrar y soltar).

> Versión actual: ${wa}

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
${Ye(ce)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${ye(ce)}

# Dependencias externas  
yarn add ${ye(ce,!0)}
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
`}}},argTypes:{modelValue:{description:"Array de archivos seleccionados (v-model)",control:"object",table:{category:"Principales",type:{summary:"File[]"},defaultValue:{summary:"[]"}}},type:{description:"Tipo de visualización del componente. Define la apariencia y comportamiento de la interfaz.",control:"select",options:["default","drag-drop"],table:{category:"Principales",type:{summary:"'default' | 'drag-drop'"},defaultValue:{summary:"'default'"}}},mode:{description:"Modo operacional del componente. En modo 'download' cambia el comportamiento del botón principal para emitir evento 'download' en lugar de activar selector de archivos.",control:"select",options:["upload","download"],table:{category:"Principales",type:{summary:"'upload' | 'download'"},defaultValue:{summary:"'upload'"}}},multiple:{description:"Permite seleccionar múltiples archivos mediante el input file.",control:"boolean",table:{category:"Principales",type:{summary:"boolean"},defaultValue:{summary:"true"}}},acceptExtNames:{description:"Array de extensiones permitidas. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"object",table:{category:"Validación Automática",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},maxSize:{description:"Tamaño máximo permitido (ej: '10MB'). El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'. Para permitir cualquier tamaño, pasa undefined, null o cadena vacía ''.",control:"text",table:{category:"Validación Automática",type:{summary:"string | undefined"},defaultValue:{summary:"'10MB'"}}},maxFiles:{description:"Número máximo de archivos. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"number",table:{category:"Validación Automática",type:{summary:"number"},defaultValue:{summary:"undefined"}}},uploading:{description:"Estado de carga/upload en progreso. Muestra indicadores de carga.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},uploadError:{description:"Estado de error de carga. Valor booleano controla el estado visual; valor string proporciona mensaje específico de error.",control:"select",options:[!1,!0,"Error personalizado en la carga"],table:{category:"Estados",type:{summary:"boolean | string"},defaultValue:{summary:"false"}}},fileErrors:{description:"Errores específicos por archivo. Índice del archivo como clave y mensaje de error como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, string>"},defaultValue:{summary:"{}"}}},fileProgress:{description:"Progreso específico por archivo. Índice del archivo como clave y porcentaje (0-100) como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, number>"},defaultValue:{summary:"{}"}}},disabled:{description:"Deshabilita el componente completamente.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{description:"Título del componente. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Seleccionar archivo'"}}},uploadButtonText:{description:"Texto del botón de carga. Se usa en tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Haz clic para cargar'"}}},uploadText:{description:"Texto adicional junto al botón. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'un archivo o arrástralo aquí'"}}},restrictionText:{description:"Texto personalizado de restricciones. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},infoText:{description:"Texto informativo adicional. Solo para tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadUrl:{description:"URL del archivo para descargar. Se muestra como un link debajo del texto informativo. Solo visible en tipo 'default' cuando se proporciona junto con downloadLinkText.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadLinkText:{description:"Texto del enlace de descarga. Requerido junto con downloadUrl para mostrar el link. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},showFileSize:{description:"Controla la visibilidad del tamaño del archivo en la lista de archivos cargados.",control:"boolean",table:{category:"Interfaz",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showRemoveButton:{description:"Controla la visibilidad del botón de eliminar en la lista de archivos cargados.",control:"boolean",table:{category:"Interfaz",type:{summary:"boolean"},defaultValue:{summary:"true"}}},validateEvent:{description:"Activa la validación del formulario cuando se modifican los archivos.",control:"boolean",table:{category:"Formularios",type:{summary:"boolean"},defaultValue:{summary:"true"}}},inputId:{description:"ID único para el elemento input file interno y las asociaciones de accesibilidad (aria-describedby). Se usa principalmente para integración con formularios y etiquetas de accesibilidad. Si no se proporciona, se genera automáticamente cuando está dentro de un FormItem.",control:"text",table:{category:"Formularios",type:{summary:"string"},defaultValue:{summary:"undefined"}}},"onUpdate:modelValue":{description:"Evento emitido cuando cambian los archivos seleccionados.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onChange:{description:"Evento emitido cuando se modifica la selección de archivos.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onError:{description:"Evento emitido cuando ocurren errores durante la validación o manipulación de archivos.",table:{category:"Eventos",type:{summary:"(error: string | Error) => void"}}},onValidationError:{description:"Evento emitido con errores de validación estructurados. Recibe un array de objetos ValidationError con propiedades: type ('file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded'), file (opcional), message (opcional), y data (información adicional específica del error).",table:{category:"Eventos",type:{summary:"(errors: ValidationError[]) => void"}}},onRetry:{description:"Evento emitido cuando se hace clic en reintentar después de un error.",table:{category:"Eventos",type:{summary:"() => void"}}},onClearProgress:{description:"Evento emitido automáticamente cuando el estado 'uploading' cambia de true a false.",table:{category:"Eventos",type:{summary:"() => void"}}},onDownload:{description:"Evento emitido en modo download cuando se hace clic en el botón.",table:{category:"Eventos",type:{summary:"() => void"}}},addFiles:{description:"Método público para agregar archivos programáticamente. Aplica todas las validaciones automáticas del componente (tamaño, tipo, cantidad) antes de añadir los archivos válidos al modelo.",table:{category:"Métodos Públicos",type:{summary:"(files: File[]) => void"}}},openFilePicker:{description:"Abre el diálogo de selección de archivos de forma programática. Solo disponible para type='default'.",table:{category:"Métodos Públicos",type:{summary:"() => void"}}},"extra-content":{description:"Slot para agregar contenido adicional debajo de la lista de archivos. Útil para mostrar mensajes de error personalizados, información adicional o validaciones externas. Solo disponible en tipo 'default'.",table:{category:"Slots",type:{summary:"Slot"}}}},args:{type:"default",mode:"upload",modelValue:[],multiple:!0,acceptExtNames:[],maxSize:"10MB",maxFiles:void 0,uploading:!1,uploadError:!1,fileErrors:{},fileProgress:{},disabled:!1,title:"Seleccionar archivo",uploadButtonText:"Haz clic para cargar",uploadText:"un archivo o arrástralo aquí",restrictionText:"",infoText:"",downloadUrl:"",downloadLinkText:"",showFileSize:!0,showRemoveButton:!0,validateEvent:!0,inputId:void 0}},K={name:"Básico",args:{maxSize:"",acceptExtNames:[]},parameters:{docs:{description:{story:"Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:t=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=b([]);return{args:t,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},Z={name:"Arrastrar y Soltar",parameters:{docs:{description:{story:"El tipo 'drag-drop' proporciona una zona de arastrar y soltar que acepta cualquier tipo de archivo y cualquier tamaño"},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const t=b([]);return{files:t,handleUpdate:o=>{t.value=o,I("update:model-value")(o)},handleValidationError:o=>{I("validation-error")(o)},handleChange:o=>{I("change")(o)}}},template:`
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
    `})},J={name:"Estados del Componente",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const t=(m,c=1024e3,w="application/pdf")=>{const k=new File([""],m,{type:w});return Object.defineProperty(k,"size",{value:c}),k},r=b([]),i=b([t("documento1.pdf",1024e3),t("imagen1.jpg",2048e3,"image/jpeg")]),e=b([t("documento_error.pdf")]),o=b([]),d=b({0:"Error de conexión al servidor"});return{normalFiles:r,uploadingFiles:i,errorFiles:e,disabledFiles:o,fileErrors:d,handleUpdate:m=>c=>{m.value=c,I("update:model-value")(c)},handleRetry:()=>{I("onRetry")(),e.value=[],d.value={}}}},template:`
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
    `})},Q={name:"Flujo de Carga Completo",parameters:{docs:{description:{story:`
Validaciones automáticas con manejo de mensajes de error.

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar más de 2 archivos → Error de cantidad
        `}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V,GForm:Se,GFormItem:ke,GButton:ge,GInput:De},setup(){const t=b([]),r=b(!1),i=b(!1),e=b(""),o=b(""),d=b({}),g=b({}),E=async x=>{if(x.length===0)return;r.value=!0,i.value=!1,g.value={},d.value={};for(let f=0;f<x.length;f++)d.value={...d.value,[f]:0};const S=20,C=150;for(let f=0;f<=S;f++){await new Promise(l=>setTimeout(l,C));const n=Math.round(f/S*100);for(let l=0;l<x.length;l++){const F=Math.random()*10-5,z=Math.min(100,Math.max(0,n+F));d.value={...d.value,[l]:Math.round(z)}}}if(await new Promise(f=>setTimeout(f,500)),Math.random()<.6){const f=Math.floor(Math.random()*x.length),n=["Error de conexión al servidor","Archivo corrupto detectado","Formato no soportado por el servidor","Timeout en la carga"],l=n[Math.floor(Math.random()*n.length)];g.value={[f]:l}}r.value=!1};function m(x){let S="",C="";x.forEach(R=>{if(R)if(R.type==="file-size-exceeded"){const f=Math.round((R.file?.size||0)/1048576*100)/100;S=`"${R.file?.name}" (${f}MB) excede el límite de ${R.data?.maxSize||"2MB"}`}else R.type==="invalid-file-type"?S=`"${R.file?.name}" tipo no válido. Solo ${R.data?.acceptedExtensions?.join(", ")||"tipos específicos"}`:R.type==="max-files-exceeded"&&(C=`Máximo ${R.data?.maxFiles} archivos permitidos (intentaste subir ${R.data?.totalAttempted||"varios"})`)}),e.value=S,o.value=C}function c(x){console.log("📁 Archivos actualizados:",x.length),t.value=x,x.length>=0&&(e.value="",o.value=""),x.length>0&&!r.value&&E(x)}function w(){i.value=!1,g.value={},d.value={},e.value="",o.value="",t.value.length>0&&E(t.value)}function k(){t.value=[],r.value=!1,i.value=!1,e.value="",o.value="",d.value={},g.value={}}return{files:t,uploading:r,uploadError:i,validationErrorMsg:e,maxFilesErrorMsg:o,fileProgress:d,fileErrors:g,handleValidationError:m,handleUpdate:c,handleRetry:w,handleClearAll:k}},template:`
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
    `})},X={name:"Modo Descarga",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){return{handleDownload:()=>{I("download")();const r=document.createElement("a");r.href="data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.",r.download="plantilla-ejemplo.txt",r.click()}}},template:`
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
    `})},Y={name:"Con Link de Descarga",parameters:{docs:{description:{story:`
Ejemplo del componente con un link de descarga integrado. Útil cuando se necesita proporcionar un archivo de plantilla o referencia junto con la opción de carga.

### Características:
- **downloadUrl**: URL del archivo a descargar
- **downloadLinkText**: Texto del enlace (requerido si se usa downloadUrl)
- **slot extra-content**: Permite agregar contenido adicional dentro del componente (errores, mensajes, etc.)
        `},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'
import { GIconFont } from '@flash-global66/g-icon-font'

const files = ref<File[]>([])
<\/script>

<template>
  <!-- Con link de descarga -->
  <g-attach-file 
    v-model="files"
    title="Registro Único Tributario (RUT)"
    info-text="Adjunta la composición accionaria firmada."
    download-url="https://example.com/plantilla-rut.pdf"
    download-link-text="Descárgalo desde aquí"
    :accept-ext-names="['.pdf']"
    max-size="10MB"
  />

  <!-- Con slot para contenido adicional (errores) -->
  <g-attach-file 
    v-model="files"
    title="Registro Único Tributario (RUT)"
    info-text="Adjunta la composición accionaria firmada."
    download-url="https://example.com/plantilla-rut.pdf"
    download-link-text="Descárgalo desde aquí"
  >
    <template #extra-content>
      <div class="flex items-start gap-xs">
        <g-icon-font name="solid times" class="text-error-def" />
        <div>
          <p class="font-semibold text-error-def">Documento rechazado por:</p>
          <ol class="list-decimal pl-md text-secondary-txt text-2">
            <li>Certificado de existencia superior a 30 días.</li>
            <li>El representante legal no coincide.</li>
          </ol>
        </div>
      </div>
    </template>
  </g-attach-file>
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const t=b([]),r=b([]);return{files:t,filesWithError:r,handleUpdate:e=>{t.value=e,I("update:model-value")(e)}}},template:`
      <g-config-provider>
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Con link de descarga</h4>
            <g-attach-file 
              v-model="files"
              title="Registro Único Tributario (RUT)"
              info-text="Adjunta la composición accionaria firmada."
              download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              download-link-text="Descárgalo desde aquí"
              :accept-ext-names="['.pdf']"
              max-size="10MB"
              @update:model-value="handleUpdate"
            />
          </div>

          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Con slot de errores de validación</h4>
            <g-attach-file 
              v-model="filesWithError"
              title="Registro Único Tributario (RUT)"
              info-text="Adjunta la composición accionaria firmada."
              download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              download-link-text="Descárgalo desde aquí"
              :accept-ext-names="['.pdf']"
              max-size="10MB"
            >
              <template #extra-content>
                <div class="flex items-start gap-2">
                  <span class="text-red-500 text-lg">✕</span>
                  <div>
                    <p class="font-semibold text-red-700">Documento rechazado por:</p>
                    <ol class="list-decimal pl-5 text-gray-700 text-sm mt-1 space-y-1">
                      <li>Certificado de existencia superior a 30 días.</li>
                      <li>Certificado de existencia incorrecto. El representante legal del Certificado de existencia no coincide con el representante legal de quien hizo el registro.</li>
                    </ol>
                  </div>
                </div>
              </template>
            </g-attach-file>
          </div>

          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Sin link de descarga (comportamiento normal)</h4>
            <g-attach-file 
              v-model="files"
              title="Documento adicional"
              info-text="Adjunta cualquier documento relevante."
              :accept-ext-names="['.pdf', '.doc', '.docx']"
              max-size="10MB"
              @update:model-value="handleUpdate"
            />
          </div>
        </div>
      </g-config-provider>
    `})},ee={name:"Integración con Formularios",parameters:{docs:{description:{story:"Integración del componente GAttachFile con GForm y validaciones de formulario."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V,GForm:Se,GFormItem:ke,GButton:ge,GInput:De},setup(){const t=b(),r=_e({name:"",documents:[]}),i={name:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],documents:[{required:!0,message:"Debe adjuntar al menos un documento",trigger:"change"},{validator:(E,m,c)=>{if(!m||m.length===0){c(new Error("Los documentos son obligatorios"));return}if(!m.some(x=>x.name.toLowerCase().endsWith(".pdf"))){c(new Error("Debe incluir al menos un documento PDF"));return}if(!m.every(x=>{const S=x.name.toLowerCase();return S.length>10||S.includes("documento")||S.includes("certificado")||S.includes("comprobante")})){c(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));return}c()},trigger:"change"}]},e=b([]);async function o(){if(t.value)try{await t.value.validate()&&(console.log("Formulario válido:",r),alert("¡Documentos enviados exitosamente!"))}catch(E){console.error("Error de validación:",E)}}function d(){t.value&&(t.value.resetFields(),e.value=[])}return{formRef:t,formData:r,rules:i,validationErrors:e,handleSubmit:o,handleReset:d,handleValidationError:E=>{I("validation-error")(E);const m=E.map(c=>{switch(c.type){case"file-size-exceeded":return`"${c.file?.name}" excede ${c.data?.maxSize}`;case"invalid-file-type":return`"${c.file?.name}" tipo no válido. Solo ${c.data?.acceptedExtensions?.join(", ")}`;case"max-files-exceeded":return`Máximo ${c.data?.maxFiles} archivos permitidos`;default:return"Error de validación"}});e.value=m,setTimeout(()=>e.value=[],5e3)}}},template:`
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
    `})},ae={name:"Método addFiles",parameters:{docs:{description:{story:"Método  `addFiles` que permite agregar archivos programáticamente al componente."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V,GButton:ge},setup(){const t=b([]),r=b();return{files:t,attachFileRef:r,addMockFiles:()=>{const d=[new File(["contenido PDF de ejemplo"],"documento-ejemplo.pdf",{type:"application/pdf"}),new File(["contenido imagen de ejemplo"],"imagen-ejemplo.jpg",{type:"image/jpeg"})];Object.defineProperty(d[0],"size",{value:1024*500}),Object.defineProperty(d[1],"size",{value:1024*800}),r.value?.addFiles&&r.value.addFiles(d)},addSingleFile:()=>{const d=new File(["contenido de texto"],"nota.txt",{type:"text/plain"});Object.defineProperty(d,"size",{value:1024*100}),r.value?.addFiles&&r.value.addFiles([d])},clearFiles:()=>{t.value=[]}}},template:`
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
    `})},te={name:"Estado Solo Lectura (Un Archivo)",args:{title:"Documento Aprobado",infoText:"Este documento ya ha sido validado y no puede ser modificado.",showFileSize:!1,showRemoveButton:!1,disabled:!0,downloadUrl:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",downloadLinkText:"Ver documento"},parameters:{docs:{description:{story:"Ejemplo de configuración para mostrar un único archivo en estado de solo lectura o aprobado, con enlace para visualizar el documento."},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

// Simulamos un archivo ya cargado
const files = ref<File[]>([
  new File([''], 'documento_validado.pdf', { type: 'application/pdf' })
])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    title="Documento Aprobado"
    info-text="Este documento ya ha sido validado y no puede ser modificado."
    download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    download-link-text="Ver documento"
    :show-file-size="false"
    :show-remove-button="false"
    :disabled="true"
  />
</template>`}}},render:t=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=b([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"})]);return{args:t,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},oe={name:"Estado Solo Lectura (Múltiples Archivos)",args:{title:"Documentos Aprobados",infoText:"Estos documentos ya han sido validados y no pueden ser modificados.",showFileSize:!1,showRemoveButton:!1,disabled:!0},parameters:{docs:{description:{story:"Ejemplo de configuración para mostrar múltiples archivos en estado de solo lectura o aprobados."},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

// Simulamos archivos ya cargados
const files = ref<File[]>([
  new File([''], 'documento_validado.pdf', { type: 'application/pdf' }),
  new File([''], 'comprobante_pago.jpg', { type: 'image/jpeg' }),
  new File([''], 'identificacion_frontal.png', { type: 'image/png' })
])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    title="Documentos Aprobados"
    info-text="Estos documentos ya han sido validados y no pueden ser modificados."
    :show-file-size="false"
    :show-remove-button="false"
    :disabled="true"
  />
</template>`}}},render:t=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=b([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"}),new File(["dummy content"],"comprobante_pago.jpg",{type:"image/jpeg"}),new File(["dummy content"],"identificacion_frontal.png",{type:"image/png"})]);return{args:t,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},re={name:"Estado Solo Lectura (Drag & Drop)",args:{type:"drag-drop",uploadButtonText:"Cargar archivos",uploadText:"o arrastra aquí",showFileSize:!1,showRemoveButton:!1,disabled:!0},parameters:{docs:{description:{story:"Ejemplo de configuración para el modo Drag & Drop en estado de solo lectura. Muestra la lista de archivos sin opciones de eliminación ni tamaño."},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([
  new File([''], 'contrato_firmado.pdf', { type: 'application/pdf' }),
  new File([''], 'anexo_1.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    type="drag-drop"
    :show-file-size="false"
    :show-remove-button="false"
    :disabled="true"
  />
</template>`}}},render:t=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=b([new File(["dummy content"],"contrato_firmado.pdf",{type:"application/pdf"}),new File(["dummy content"],"anexo_1.docx",{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})]);return{args:t,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
      const handleValidationError = (errors: ValidationError[]) => {
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
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
      const files = ref<File[]>([]);
      const uploading = ref(false);
      const uploadError = ref(false);
      const validationErrorMsg = ref('');
      const maxFilesErrorMsg = ref('');
      const fileProgress = ref({});
      const fileErrors = ref({});
      const simulateUpload = async (filesArray: File[]) => {
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
      function handleValidationError(errors: ValidationError[]) {
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
      function handleUpdate(selectedFiles: File[]) {
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
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Con Link de Descarga",
  parameters: {
    docs: {
      description: {
        story: \`
Ejemplo del componente con un link de descarga integrado. Útil cuando se necesita proporcionar un archivo de plantilla o referencia junto con la opción de carga.

### Características:
- **downloadUrl**: URL del archivo a descargar
- **downloadLinkText**: Texto del enlace (requerido si se usa downloadUrl)
- **slot extra-content**: Permite agregar contenido adicional dentro del componente (errores, mensajes, etc.)
        \`
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'
import { GIconFont } from '@flash-global66/g-icon-font'

const files = ref<File[]>([])
<\/script>

<template>
  <!-- Con link de descarga -->
  <g-attach-file 
    v-model="files"
    title="Registro Único Tributario (RUT)"
    info-text="Adjunta la composición accionaria firmada."
    download-url="https://example.com/plantilla-rut.pdf"
    download-link-text="Descárgalo desde aquí"
    :accept-ext-names="['.pdf']"
    max-size="10MB"
  />

  <!-- Con slot para contenido adicional (errores) -->
  <g-attach-file 
    v-model="files"
    title="Registro Único Tributario (RUT)"
    info-text="Adjunta la composición accionaria firmada."
    download-url="https://example.com/plantilla-rut.pdf"
    download-link-text="Descárgalo desde aquí"
  >
    <template #extra-content>
      <div class="flex items-start gap-xs">
        <g-icon-font name="solid times" class="text-error-def" />
        <div>
          <p class="font-semibold text-error-def">Documento rechazado por:</p>
          <ol class="list-decimal pl-md text-secondary-txt text-2">
            <li>Certificado de existencia superior a 30 días.</li>
            <li>El representante legal no coincide.</li>
          </ol>
        </div>
      </div>
    </template>
  </g-attach-file>
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
      const filesWithError = ref<File[]>([]);
      const handleUpdate = (selectedFiles: File[]) => {
        files.value = selectedFiles;
        action('update:model-value')(selectedFiles);
      };
      return {
        files,
        filesWithError,
        handleUpdate
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Con link de descarga</h4>
            <g-attach-file 
              v-model="files"
              title="Registro Único Tributario (RUT)"
              info-text="Adjunta la composición accionaria firmada."
              download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              download-link-text="Descárgalo desde aquí"
              :accept-ext-names="['.pdf']"
              max-size="10MB"
              @update:model-value="handleUpdate"
            />
          </div>

          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Con slot de errores de validación</h4>
            <g-attach-file 
              v-model="filesWithError"
              title="Registro Único Tributario (RUT)"
              info-text="Adjunta la composición accionaria firmada."
              download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              download-link-text="Descárgalo desde aquí"
              :accept-ext-names="['.pdf']"
              max-size="10MB"
            >
              <template #extra-content>
                <div class="flex items-start gap-2">
                  <span class="text-red-500 text-lg">✕</span>
                  <div>
                    <p class="font-semibold text-red-700">Documento rechazado por:</p>
                    <ol class="list-decimal pl-5 text-gray-700 text-sm mt-1 space-y-1">
                      <li>Certificado de existencia superior a 30 días.</li>
                      <li>Certificado de existencia incorrecto. El representante legal del Certificado de existencia no coincide con el representante legal de quien hizo el registro.</li>
                    </ol>
                  </div>
                </div>
              </template>
            </g-attach-file>
          </div>

          <div>
            <h4 class="text-sm font-medium mb-2 text-gray-700">Sin link de descarga (comportamiento normal)</h4>
            <g-attach-file 
              v-model="files"
              title="Documento adicional"
              info-text="Adjunta cualquier documento relevante."
              :accept-ext-names="['.pdf', '.doc', '.docx']"
              max-size="10MB"
              @update:model-value="handleUpdate"
            />
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...Y.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
      const handleValidationError = (errors: ValidationError[]) => {
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
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  name: "Estado Solo Lectura (Un Archivo)",
  args: {
    title: "Documento Aprobado",
    infoText: "Este documento ya ha sido validado y no puede ser modificado.",
    showFileSize: false,
    showRemoveButton: false,
    disabled: true,
    downloadUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    downloadLinkText: "Ver documento"
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de configuración para mostrar un único archivo en estado de solo lectura o aprobado, con enlace para visualizar el documento."
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

// Simulamos un archivo ya cargado
const files = ref<File[]>([
  new File([''], 'documento_validado.pdf', { type: 'application/pdf' })
])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    title="Documento Aprobado"
    info-text="Este documento ya ha sido validado y no puede ser modificado."
    download-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    download-link-text="Ver documento"
    :show-file-size="false"
    :show-remove-button="false"
    :disabled="true"
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
      const files = ref<File[]>([new File(['dummy content'], 'documento_validado.pdf', {
        type: 'application/pdf'
      })]);
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
}`,...te.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
  name: "Estado Solo Lectura (Múltiples Archivos)",
  args: {
    title: "Documentos Aprobados",
    infoText: "Estos documentos ya han sido validados y no pueden ser modificados.",
    showFileSize: false,
    showRemoveButton: false,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de configuración para mostrar múltiples archivos en estado de solo lectura o aprobados."
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

// Simulamos archivos ya cargados
const files = ref<File[]>([
  new File([''], 'documento_validado.pdf', { type: 'application/pdf' }),
  new File([''], 'comprobante_pago.jpg', { type: 'image/jpeg' }),
  new File([''], 'identificacion_frontal.png', { type: 'image/png' })
])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    title="Documentos Aprobados"
    info-text="Estos documentos ya han sido validados y no pueden ser modificados."
    :show-file-size="false"
    :show-remove-button="false"
    :disabled="true"
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
      const files = ref<File[]>([new File(['dummy content'], 'documento_validado.pdf', {
        type: 'application/pdf'
      }), new File(['dummy content'], 'comprobante_pago.jpg', {
        type: 'image/jpeg'
      }), new File(['dummy content'], 'identificacion_frontal.png', {
        type: 'image/png'
      })]);
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
}`,...oe.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  name: "Estado Solo Lectura (Drag & Drop)",
  args: {
    type: "drag-drop",
    uploadButtonText: "Cargar archivos",
    uploadText: "o arrastra aquí",
    showFileSize: false,
    showRemoveButton: false,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de configuración para el modo Drag & Drop en estado de solo lectura. Muestra la lista de archivos sin opciones de eliminación ni tamaño."
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'

const files = ref<File[]>([
  new File([''], 'contrato_firmado.pdf', { type: 'application/pdf' }),
  new File([''], 'anexo_1.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })
])
<\/script>

<template>
  <g-attach-file 
    v-model="files"
    type="drag-drop"
    :show-file-size="false"
    :show-remove-button="false"
    :disabled="true"
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
      const files = ref<File[]>([new File(['dummy content'], 'contrato_firmado.pdf', {
        type: 'application/pdf'
      }), new File(['dummy content'], 'anexo_1.docx', {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      })]);
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
}`,...re.parameters?.docs?.source}}};const tt=["Primary","DragDrop","ComponentStates","FlujoCargaCompleto","DownloadMode","DownloadLink","FormIntegration","AddFilesMethod","ReadOnlySingle","ReadOnlyMultiple","ReadOnlyDragDrop"];export{ae as AddFilesMethod,J as ComponentStates,Y as DownloadLink,X as DownloadMode,Z as DragDrop,Q as FlujoCargaCompleto,ee as FormIntegration,K as Primary,re as ReadOnlyDragDrop,oe as ReadOnlyMultiple,te as ReadOnlySingle,tt as __namedExportsOrder,at as default};
