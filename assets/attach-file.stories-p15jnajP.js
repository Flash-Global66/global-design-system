import{c as p,w as Ue,d as le,x as h,e as u,m as M,l as s,u as a,k as g,n as I,s as oe,y as z,b as $,t as Ge,r as F,h as G,F as L,z as de,A as Le,a1 as _,a2 as fe,q as Ne,f as Oe,H as _e}from"./vue.esm-bundler-C43JrhH2.js";import{a as P}from"./index-Br0BFi8U.js";import{b as We,d as He,f as Ke,w as Ze}from"./install-CfJGiCvs.js";import{H as Je,G as Qe}from"./index-CRgYr9aG.js";import{d as Xe}from"./error-Cq9Fpw4b.js";import{u as ce}from"./index-CsASJLg8.js";import{S as re}from"./index-CE-RhHRw.js";import{u as se}from"./index-DRaHcUI8.js";import{G as V}from"./ConfigProvider-DGM6yYEs.js";import{G as Fe,a as Ee}from"./index-C1ucTNRz.js";import{G as ue}from"./index-DiFKGLzk.js";import{G as we}from"./index-Btf1hQD8.js";import{a as Ye,b as ge}from"./documentation-stories-ClXCVwRV.js";import"./v4-CtRu48qb.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./_arrayPush-C7rDDJbA.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BDKGuxIf.js";import"./event-HEVJa2N9.js";import"./index-B23jN5Qn.js";import"./typescript-Bp3YSIOJ.js";import"./index-BjhK0CHr.js";import"./index-Cu6sv81Q.js";import"./index-Dwlzb1ZD.js";import"./index-CvPWi8JN.js";import"./index-Ckg1hsG6.js";import"./index-ZrO6PWlN.js";const ve={UPLOAD:"upload",DOWNLOAD:"download"},C={SUCCESS:"success",ERROR:"error",LOADING:"loading"},ea=We({modelValue:{type:He(Array),default:()=>[]},type:{type:String,values:["default","drag-drop"],default:"default"},mode:{type:String,values:Object.values(ve),default:ve.UPLOAD},inputId:{type:String,default:void 0},acceptExtNames:{type:Array,default:()=>[]},maxSize:{type:String,default:"10MB"},multiple:{type:Boolean,default:!0},maxFiles:{type:Number,default:void 0},disabled:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},uploadButtonText:{type:String,default:""},title:{type:String,default:""},uploadText:{type:String,default:""},restrictionText:{type:String,default:""},infoText:{type:String,default:""},downloadUrl:{type:String,default:""},downloadLinkText:{type:String,default:""},uploading:{type:Boolean,default:!1},uploadError:{type:[Boolean,String],default:!1},fileErrors:{type:Object,default:()=>({})},fileProgress:{type:Object,default:()=>({})},errors:{type:Array,default:()=>[]},showFileSize:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0}}),aa={"update:modelValue":t=>!0,change:t=>!0,error:t=>!0,"validation-error":t=>!0,onRetry:()=>!0,download:()=>!0,clearProgress:()=>!0},he={b:1,kb:1024,mb:1024*1024,gb:1024*1024*1024,tb:1024*1024*1024*1024},ta=["Bytes","KB","MB","GB","TB"];function ie(t){if(t===0)return"0 Bytes";const i=1024,l=Math.floor(Math.log(t)/Math.log(i));return parseFloat((t/Math.pow(i,l)).toFixed(2))+" "+ta[l]}function Se(t){if(!t||typeof t!="string")return 0;const i=/^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i,l=t.trim().match(i);if(!l)return 0;const e=parseFloat(l[1]),o=l[2].toLowerCase();return he[o]?Math.floor(e*he[o]):0}function oa(t,i,l="change"){t&&i&&i.validate(l).catch(e=>Xe())}function ye(t){return t?Array.from(t):[]}function ke(t,i=!1,l=!1){!i&&!l&&t.value&&t.value.click()}function pe(t,i,l,e,o){return i[t]||l?C.ERROR:e||o[t]!==void 0?C.LOADING:C.SUCCESS}function De(t,i,l=!1,e=!1){return function(d){if(l&&e)return;const v=[...t];v.splice(d,1),i("update:modelValue",v),i("change",v)}}function Re(t){return t.length>0?t[0]:""}function ra(t,i){const{formItem:l}=Qe(),{inputId:e}=Je(t,{formItemContext:l||void 0}),o=p(()=>t.modelValue||[]),d=p(()=>t.multiple??!0),v=p(()=>t.validateEvent??!0),E=p(()=>t.uploading??!1),m=p(()=>t.uploadError??!1),c=p(()=>t.fileErrors||{}),w=p(()=>t.fileProgress||{}),S=p(()=>{const n={};return o.value.forEach((r,b)=>{n[b]=pe(b,c.value,!!m.value,E.value,w.value)}),n}),y=p(()=>{const n=[];return t.errors&&Array.isArray(t.errors)&&t.errors.forEach(r=>{typeof r=="string"&&r.trim()&&!n.includes(r)&&n.push(r)}),l?.shouldShowErrorChild&&l?.validateMessage&&(n.includes(l.validateMessage)||n.push(l.validateMessage)),m.value&&typeof m.value=="string"&&(n.includes(m.value)||n.push(m.value)),Object.values(c.value).forEach(r=>{typeof r=="string"&&r&&!n.includes(r)&&n.push(r)}),n});function k(n){const r=[],b=[],x=t.acceptExtNames?.map(j=>j.toLowerCase())||[],f=d.value?o.value:[];if(t.maxFiles&&f.length+n.length>t.maxFiles){r.push({type:"max-files-exceeded",data:{maxFiles:t.maxFiles,currentFiles:f.length,attemptedFiles:n.length,totalAttempted:f.length+n.length}}),i("validation-error",r);return}if(n.forEach(j=>{let U=!0;if(t.maxSize){const q=Se(t.maxSize);q&&j.size>q&&(r.push({type:"file-size-exceeded",file:j,data:{maxSize:t.maxSize,actualSize:j.size}}),U=!1)}if(x.length>0){const q="."+j.name.split(".").pop()?.toLowerCase();x.includes(q)||(r.push({type:"invalid-file-type",file:j,data:{acceptedExtensions:t.acceptExtNames,actualExtension:q}}),U=!1)}U&&b.push(j)}),r.length>0){i("validation-error",r);return}if(b.length>0){const j=d.value?[...o.value,...b]:b;i("update:modelValue",j),i("change",j),oa(v.value||!1,l)}}function A(n){const r=n.target;r.files&&(k(ye(r.files)),r.value="")}function R(n){k(ye(n))}return Ue(()=>E.value,n=>{n||i("clearProgress")},{immediate:!0}),{modelValue:o,fileStatuses:S,displayErrors:y,fileErrors:c,fileProgress:w,inputId:e,multiple:d,uploading:E,uploadError:m,onFileInputChange:A,onFilesDrop:R,addFiles:k}}/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ia=Object.prototype.hasOwnProperty,xe=(t,i)=>ia.call(t,i),ze=t=>t!==null&&typeof t=="object",Me="__epPropKey",be=t=>t,la=t=>ze(t)&&!!t[Me],sa=(t,i)=>{if(!ze(t)||la(t))return t;const{values:l,required:e,default:o,type:d,validator:v}=t,E={type:d,required:!!e,validator:l||v?m=>{let c=!1,w=[];if(l&&(w=Array.from(l),xe(t,"default")&&w.push(o),c||(c=w.includes(m))),v&&(c||(c=v(m))),!c&&w.length>0){const S=[...new Set(w)].map(y=>JSON.stringify(y)).join(", ");Ge(`Invalid prop: validation failed${i?` for prop "${i}"`:""}. Expected one of [${S}], got value ${JSON.stringify(m)}.`)}return c}:void 0,[Me]:!0};return xe(t,"default")&&(E.default=o),E},na=t=>Ke(Object.entries(t).map(([i,l])=>[i,sa(l,i)])),da=(t,i)=>(t.install=l=>{for(const e of[t,...Object.values({})])l.component(e.name,e)},t),ca=na({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},status:{type:String,default:"primary",values:["primary","success","error","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:be(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},format:{type:be(Function),default:t=>`${t}%`}}),ma=["aria-valuenow"],ua={viewBox:"0 0 100 100"},pa=["d","stroke","stroke-linecap","stroke-width"],fa=["d","stroke","opacity","stroke-linecap","stroke-width"],ga={key:1},va=le({name:"Progress",__name:"progress",props:ca,setup(t){const i={primary:"--color-progress-primary",success:"--color-progress-success",error:"--color-progress-error",warning:"--color-progress-warning"},l=t,e=se("progress"),o=p(()=>{const r={width:`${l.percentage}%`,animationDuration:`${l.duration}s`},b=i[l.status]||i.primary;return r.backgroundColor=`var(${b})`,r}),d=p(()=>(l.strokeWidth/l.width*100).toFixed(1)),v=p(()=>["circle","dashboard"].includes(l.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),E=p(()=>{const r=v.value,b=l.type==="dashboard";return`
            M 50 50
            m 0 ${b?"":"-"}${r}
            a ${r} ${r} 0 1 1 0 ${b?"-":""}${r*2}
            a ${r} ${r} 0 1 1 0 ${b?"":"-"}${r*2}
            `}),m=p(()=>2*Math.PI*v.value),c=p(()=>l.type==="dashboard"?.75:1),w=p(()=>`${-1*m.value*(1-c.value)/2}px`),S=p(()=>({strokeDasharray:`${m.value*c.value}px, ${m.value}px`,strokeDashoffset:w.value})),y=p(()=>({strokeDasharray:`${m.value*c.value*(l.percentage/100)}px, ${m.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),k=p(()=>{let r;return r=`var(${i[l.status]||i.primary})`,r}),A=p(()=>l.status==="warning"?"solid exclamation-circle":l.type==="line"?l.status==="success"?"regular check-circle":"regular circle-xmark":l.status==="success"?"regular check":"regular times"),R=p(()=>l.type==="line"?12+l.strokeWidth*.4:l.width*.111111+2),n=p(()=>l.format(l.percentage));return(r,b)=>(u(),h("div",{class:s([a(e).b(),a(e).m(r.type),a(e).is(r.status),{[a(e).m("without-text")]:!r.showText,[a(e).m("text-inside")]:r.textInside}]),id:"MAIN-DIV",role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(u(),h("div",{key:0,class:s(a(e).b("bar"))},[g("div",{class:s(a(e).be("bar","outer")),style:I({height:`${r.strokeWidth}px`})},[g("div",{class:s([a(e).be("bar","inner"),{[a(e).bem("bar","inner","indeterminate")]:r.indeterminate}]),style:I(o.value)},[(r.showText||r.$slots.default)&&r.textInside?(u(),h("div",{key:0,class:s(a(e).be("bar","innerText"))},[oe(r.$slots,"default",{percentage:r.percentage},()=>[g("span",null,z(n.value),1)])],2)):M("",!0)],6)],6)],2)):(u(),h("div",{key:1,class:s(a(e).b("circle")),style:I({height:`${r.width}px`,width:`${r.width}px`})},[(u(),h("svg",ua,[g("path",{class:s(a(e).be("circle","track")),d:E.value,stroke:`var(${a(e).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":d.value,fill:"none",style:I(S.value)},null,14,pa),g("path",{class:s(a(e).be("circle","path")),d:E.value,stroke:k.value,fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":d.value,style:I(y.value)},null,14,fa)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(u(),h("div",{key:2,class:s(a(e).e("text")),style:I({fontSize:`${R.value}px`})},[oe(r.$slots,"default",{percentage:r.percentage},()=>[r.loading?(u(),$(a(re),{key:0,name:"regular spinner",spin:""})):!r.status||r.status==="primary"?(u(),h("span",ga,z(n.value),1)):(u(),$(a(re),{key:2,name:A.value},null,8,["name"]))])],6)):M("",!0)],10,ma))}}),Ae=da(va),ha=["multiple","accept","disabled","aria-label","aria-describedby"],ya=["href","aria-label"],je=le({__name:"default-type",props:{id:{},mode:{default:"upload"},title:{},infoText:{},uploadError:{type:Boolean,default:!1},downloadUrl:{default:""},downloadLinkText:{default:""},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{default:()=>[]},fileErrors:{default:()=>({})},fileProgress:{default:()=>({})},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean}},emits:["update:modelValue","change","error","onRetry","download","file-input-change"],setup(t,{expose:i,emit:l}){const e=se("attach-file"),o=t,d=l,v=F();function E(){o.mode==="download"?d("download"):o.uploadError||Object.keys(o.fileErrors).length>0?d("onRetry"):ke(v,o.disabled,o.uploading)}function m(r){d("file-input-change",r)}const c=p(()=>o.modelValue||[]),w=p(()=>c.value.length>0),S=p(()=>o.multiple||o.uploadError),y=p(()=>o.uploadError?"error":o.uploading?"loading":c.value.length>0?"success":"default"),k=p(()=>Re(o.errors)),A=p(()=>o.mode==="download"?"solid download":"solid upload"),R=De(o.modelValue,d),n=r=>pe(r,o.fileErrors,o.uploadError,o.uploading,o.fileProgress);return i({hiddenFileInput:v}),(r,b)=>(u(),h("div",{class:s(a(e).e("default-type"))},[g("input",{ref_key:"hiddenFileInput",ref:v,type:"file",multiple:r.multiple,accept:r.acceptExtNames.join(","),disabled:r.disabled,class:s(a(e).e("hidden-input")),"aria-label":r.title||void 0,"aria-describedby":r.infoText?`${r.id||"attach-file"}-info`:void 0,onChange:m},null,42,ha),g("div",{class:s(a(e).e("content"))},[g("div",{class:s([a(e).e("header"),{[a(e).is("with-file-list")]:w.value}])},[g("div",{class:s(a(e).e("header-content"))},[g("p",{class:s(a(e).e("title"))},z(r.title),3),S.value?(u(),h("p",{key:0,class:s(a(e).e("info-text"))},z(r.infoText),3)):M("",!0),r.downloadUrl&&r.downloadLinkText?(u(),h("a",{key:1,href:r.downloadUrl,target:"_blank",rel:"noopener noreferrer",class:s(a(e).e("download-link")),"aria-label":`${r.downloadLinkText} (opens in new tab)`},z(r.downloadLinkText),11,ya)):M("",!0)],2),G(a(ce),{icon:A.value,variant:"blue",border:"",rounded:"",size:"medium",onClick:E,disabled:r.disabled},null,8,["icon","disabled"])],2),y.value==="loading"?(u(),h("div",{key:0,class:s(a(e).e("files-list"))},[g("div",{class:s(a(e).e("files-container"))},[(u(!0),h(L,null,de(r.modelValue,(x,f)=>(u(),h("div",{key:f,class:s(a(e).e("file-item"))},[g("div",{class:s(a(e).e("file-item-content"))},[G(a(Ae),{percentage:r.fileProgress[f]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),g("div",{class:s(a(e).e("file-item-info"))},[g("span",{class:s(a(e).e("file-item-name"))},z(x.name),3),g("span",{class:s(a(e).e("file-item-size"))},z(a(ie)(x.size)),3)],2)],2)],2))),128))],2)],2)):w.value?(u(),h("div",{key:1,class:s(a(e).em("file-list","clean"))},[(u(!0),h(L,null,de(c.value,(x,f)=>(u(),h("div",{key:f,class:s(a(e).e("item"))},[g("div",{class:s(a(e).e("item-content"))},[g("div",{class:s(a(e).e("file-status-icon"))},[G(a(re),{name:n(f)===a(C).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:n(f)!==a(C).ERROR,[a(e).is("error")]:n(f)===a(C).ERROR}])},null,8,["name","class"])],2),g("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:n(f)===a(C).ERROR,[a(e).is("success")]:n(f)!==a(C).ERROR}])},z(x.name),3)],2),g("div",{class:s(a(e).e("item-actions"))},[o.showFileSize?(u(),h("span",{key:0,class:s(a(e).e("file-size"))},z(a(ie)(x.size)),3)):M("",!0),o.showRemoveButton?(u(),$(a(ce),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:o.disabled,onClick:j=>!o.disabled&&a(R)(f)},null,8,["disabled","onClick"])):M("",!0)],2)],2))),128))],2)):M("",!0),r.$slots["extra-content"]?(u(),h("div",{key:2,class:s(a(e).e("extra-content"))},[oe(r.$slots,"extra-content")],2)):M("",!0)],2),k.value?(u(),h("div",{key:0,class:s(a(e).e("validation-errors"))},[g("p",{class:s(a(e).e("error-text"))},z(k.value),3)],2)):M("",!0)],2))}});je.__docgenInfo={exportName:"default",displayName:"default-type",description:"",tags:{},expose:[{name:"hiddenFileInput"}],props:[{name:"showRemoveButton",required:!0,type:{name:"boolean"}},{name:"showFileSize",required:!0,type:{name:"boolean"}},{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"mode",required:!1,type:{name:"AttachFileMode"},defaultValue:{func:!1,value:'"upload"'}},{name:"title",required:!0,type:{name:"string"}},{name:"infoText",required:!0,type:{name:"string"}},{name:"uploadError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"downloadUrl",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"downloadLinkText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"download"},{name:"file-input-change"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/default-type.vue"]};const xa=["aria-label","aria-describedby"],ba=["disabled"],Fa=["id"],Ea=["multiple","accept","disabled","aria-label"],Ce=le({__name:"drag-drop-type",props:{id:{default:void 0},uploadButtonText:{},uploadText:{},restrictionText:{default:""},maxSize:{default:""},maxFiles:{default:void 0},loadingState:{type:Boolean,default:!1},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{},fileErrors:{},fileProgress:{},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean}},emits:["update:modelValue","change","error","onRetry","file-input-change","files-drop"],setup(t,{expose:i,emit:l}){const e=se("attach-file"),o=t,d=l,v=F(),E=F(),m=F(!1),c=F(0),w=p(()=>o.modelValue||[]),S=p(()=>o.loadingState||o.uploading),y=p(()=>o.maxSize?Se(o.maxSize):0),k=p(()=>o.restrictionText||""),A=p(()=>Re(o.errors)),R=p(()=>De(w.value,d,!0,S.value)),n=D=>pe(D,o.fileErrors,!1,o.uploading,o.fileProgress);function r(){ke(v,o.disabled,S.value)}function b(D){d("file-input-change",D)}function x(D){D.preventDefault(),c.value++,m.value=!0}function f(D){D.preventDefault(),c.value--,c.value===0&&(m.value=!1)}function j(D){D.preventDefault()}function U(D){if(D.preventDefault(),c.value=0,m.value=!1,o.disabled||S.value)return;const N=D.dataTransfer?.files;N&&N.length>0&&d("files-drop",N)}const q=()=>r(),Be=()=>r(),Ve=D=>{D.preventDefault(),r()},Te=D=>{D.stopPropagation(),Object.keys(o.fileErrors).length>0||o.errors.length>0?d("onRetry"):r()},Pe=D=>j(D),qe=D=>x(D),Ie=D=>f(D),$e=D=>U(D);return i({fileInput:v,openFileDialog:r}),(D,N)=>(u(),h("div",{class:s(a(e).e("drag-drop-type"))},[g("div",{ref_key:"dropZone",ref:E,class:s([a(e).e("drop-zone"),{[a(e).is("dragging")]:m.value,[a(e).is("error")]:o.errors.length>0,[a(e).is("disabled")]:o.disabled,[a(e).is("loading")]:S.value}]),role:"button",tabindex:"0","aria-label":`${o.uploadButtonText}. ${k.value||""}`,"aria-describedby":o.restrictionText||o.acceptExtNames.length||y.value?`${o.id||"drag-drop"}-restriction`:void 0,onClick:q,onKeydown:[fe(Be,["enter"]),fe(Ve,["space"])],onDragover:_(Pe,["prevent"]),onDragenter:_(qe,["prevent"]),onDragleave:_(Ie,["prevent"]),onDrop:_($e,["prevent"])},[g("div",{class:s(a(e).e("text-content"))},[g("p",{class:s(a(e).e("main-text"))},[g("button",{type:"button",class:s(a(e).e("upload-button")),disabled:o.disabled||S.value,onClick:Te},z(o.uploadButtonText),11,ba),Le(" "+z(o.uploadText),1)],2),o.restrictionText||o.acceptExtNames.length||y.value?(u(),h("p",{key:0,class:s(a(e).e("restriction-text")),id:`${o.id||"drag-drop"}-restriction`},z(o.restrictionText||k.value),11,Fa)):M("",!0)],2),g("input",{ref_key:"fileInput",ref:v,type:"file",multiple:o.multiple,accept:o.acceptExtNames.join(","),disabled:o.disabled||S.value,class:s(a(e).e("hidden-input")),"aria-label":`${o.uploadButtonText} - ${k.value||""}`,onChange:b},null,42,Ea)],42,xa),w.value.length>0?(u(),h("div",{key:0,class:s(a(e).em("file-list","boxed"))},[(u(!0),h(L,null,de(w.value,(O,T)=>(u(),h("div",{key:T,class:s([a(e).e("item"),{[a(e).is("loading")]:S.value}])},[g("div",{class:s(a(e).e("item-content"))},[S.value?(u(),h("div",{key:0,class:s(a(e).e("file-item-content"))},[G(a(Ae),{percentage:o.fileProgress[T]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),g("div",{class:s(a(e).e("file-item-info"))},[g("span",{class:s(a(e).e("file-item-name"))},z(O.name),3),o.showFileSize?(u(),h("span",{key:0,class:s(a(e).e("file-item-size"))},z(a(ie)(O.size)),3)):M("",!0)],2)],2)):(u(),h(L,{key:1},[g("div",{class:s(a(e).e("file-status-icon"))},[G(a(re),{name:n(T)===a(C).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:n(T)!==a(C).ERROR,[a(e).is("error")]:n(T)===a(C).ERROR}])},null,8,["name","class"])],2),g("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:n(T)===a(C).ERROR,[a(e).is("success")]:n(T)!==a(C).ERROR}])},z(O.name),3)],64))],2),g("div",{class:s(a(e).e("item-actions"))},[S.value?M("",!0):(u(),h(L,{key:0},[o.showFileSize?(u(),h("span",{key:0,class:s(a(e).e("file-size"))},z(a(ie)(O.size)),3)):M("",!0),o.showRemoveButton?(u(),$(a(ce),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:o.disabled,onClick:Sa=>!o.disabled&&R.value(T)},null,8,["disabled","onClick"])):M("",!0)],64))],2)],2))),128))],2)):M("",!0),A.value?(u(),h("div",{key:1,class:s(a(e).e("validation-errors"))},[g("p",{class:s(a(e).e("error-text"))},z(A.value),3)],2)):M("",!0)],2))}});Ce.__docgenInfo={exportName:"default",displayName:"drag-drop-type",description:"",tags:{},expose:[{name:"fileInput"},{name:"openFileDialog"}],props:[{name:"showRemoveButton",required:!0,type:{name:"boolean"}},{name:"showFileSize",required:!0,type:{name:"boolean"}},{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({} as Record<number, FileStatus>)"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"uploadButtonText",required:!0,type:{name:"string"}},{name:"uploadText",required:!0,type:{name:"string"}},{name:"restrictionText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxSize",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxFiles",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"loadingState",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"uploadProgress",defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"file-input-change"},{name:"files-drop"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/drag-drop-type.vue"]};const me=le({name:"GAttachFile",__name:"attach-file",props:ea,emits:aa,setup(t,{expose:i,emit:l}){const e=t,o=l,{modelValue:d,fileStatuses:v,displayErrors:E,fileErrors:m,fileProgress:c,inputId:w,multiple:S,uploading:y,uploadError:k,onFileInputChange:A,onFilesDrop:R,addFiles:n}=ra(e,o),r=se("attach-file");return i({addFiles:n}),(b,x)=>(u(),h("div",{class:s(a(r).b())},[e.type==="default"?(u(),$(je,{key:0,id:a(w),"model-value":a(d),mode:e.mode,title:e.title,"info-text":e.infoText,"download-url":e.downloadUrl,"download-link-text":e.downloadLinkText,multiple:a(S),"accept-ext-names":e.acceptExtNames,disabled:e.disabled,uploading:a(y),"upload-error":!!a(k),"file-statuses":a(v),errors:a(E),"file-errors":a(m),"file-progress":a(c),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"onUpdate:modelValue":x[0]||(x[0]=f=>o("update:modelValue",f)),onChange:x[1]||(x[1]=f=>o("change",f)),onError:x[2]||(x[2]=f=>o("error",f)),onOnRetry:x[3]||(x[3]=f=>o("onRetry")),onDownload:x[4]||(x[4]=f=>o("download")),onFileInputChange:a(A)},Ne({_:2},[b.$slots["extra-content"]?{name:"extra-content",fn:Oe(()=>[oe(b.$slots,"extra-content")]),key:"0"}:void 0]),1032,["id","model-value","mode","title","info-text","download-url","download-link-text","multiple","accept-ext-names","disabled","uploading","upload-error","file-statuses","errors","file-errors","file-progress","show-file-size","show-remove-button","onFileInputChange"])):e.type==="drag-drop"?(u(),$(Ce,{key:1,id:a(w),"model-value":a(d),"upload-button-text":e.uploadButtonText,"upload-text":e.uploadText,"restriction-text":e.restrictionText,"accept-ext-names":e.acceptExtNames,multiple:a(S),disabled:e.disabled,"max-size":e.maxSize,"max-files":e.maxFiles,uploading:e.uploading,errors:a(E),"file-errors":a(m),"file-progress":a(c),"file-statuses":a(v),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"onUpdate:modelValue":x[5]||(x[5]=f=>o("update:modelValue",f)),onChange:x[6]||(x[6]=f=>o("change",f)),onError:x[7]||(x[7]=f=>o("error",f)),onFileInputChange:a(A),onFilesDrop:a(R)},null,8,["id","model-value","upload-button-text","upload-text","restriction-text","accept-ext-names","multiple","disabled","max-size","max-files","uploading","errors","file-errors","file-progress","file-statuses","show-file-size","show-remove-button","onFileInputChange","onFilesDrop"])):M("",!0)],2))}});me.__docgenInfo={name:"GAttachFile",exportName:"default",displayName:"attach-file",description:"",tags:{},expose:[{name:"addFiles"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/attach-file.vue"]};const B=Ze(me,{AttachFile:me}),wa="1.3.0",ne={"@flash-global66/g-form":"1.0.0","@flash-global66/g-icon-button":"0.2.2","@flash-global66/g-icon-font":"0.6.0","@flash-global66/g-progress":"0.2.0","element-plus":"2.9.0",vue:"3.2.0"},at={title:"Form/Attach File",component:B,parameters:{docs:{description:{component:`
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
${Ye(ne)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${ge(ne)}

# Dependencias externas  
yarn add ${ge(ne,!0)}
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
`}}},argTypes:{modelValue:{description:"Array de archivos seleccionados (v-model)",control:"object",table:{category:"Principales",type:{summary:"File[]"},defaultValue:{summary:"[]"}}},type:{description:"Tipo de visualización del componente. Define la apariencia y comportamiento de la interfaz.",control:"select",options:["default","drag-drop"],table:{category:"Principales",type:{summary:"'default' | 'drag-drop'"},defaultValue:{summary:"'default'"}}},mode:{description:"Modo operacional del componente. En modo 'download' cambia el comportamiento del botón principal para emitir evento 'download' en lugar de activar selector de archivos.",control:"select",options:["upload","download"],table:{category:"Principales",type:{summary:"'upload' | 'download'"},defaultValue:{summary:"'upload'"}}},multiple:{description:"Permite seleccionar múltiples archivos mediante el input file.",control:"boolean",table:{category:"Principales",type:{summary:"boolean"},defaultValue:{summary:"true"}}},acceptExtNames:{description:"Array de extensiones permitidas. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"object",table:{category:"Validación Automática",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},maxSize:{description:"Tamaño máximo permitido (ej: '10MB'). El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'. Para permitir cualquier tamaño, pasa undefined, null o cadena vacía ''.",control:"text",table:{category:"Validación Automática",type:{summary:"string | undefined"},defaultValue:{summary:"'10MB'"}}},maxFiles:{description:"Número máximo de archivos. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"number",table:{category:"Validación Automática",type:{summary:"number"},defaultValue:{summary:"undefined"}}},uploading:{description:"Estado de carga/upload en progreso. Muestra indicadores de carga.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},uploadError:{description:"Estado de error de carga. Valor booleano controla el estado visual; valor string proporciona mensaje específico de error.",control:"select",options:[!1,!0,"Error personalizado en la carga"],table:{category:"Estados",type:{summary:"boolean | string"},defaultValue:{summary:"false"}}},fileErrors:{description:"Errores específicos por archivo. Índice del archivo como clave y mensaje de error como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, string>"},defaultValue:{summary:"{}"}}},fileProgress:{description:"Progreso específico por archivo. Índice del archivo como clave y porcentaje (0-100) como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, number>"},defaultValue:{summary:"{}"}}},disabled:{description:"Deshabilita el componente completamente.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{description:"Título del componente. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Seleccionar archivo'"}}},uploadButtonText:{description:"Texto del botón de carga. Se usa en tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Haz clic para cargar'"}}},uploadText:{description:"Texto adicional junto al botón. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'un archivo o arrástralo aquí'"}}},restrictionText:{description:"Texto personalizado de restricciones. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},infoText:{description:"Texto informativo adicional. Solo para tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadUrl:{description:"URL del archivo para descargar. Se muestra como un link debajo del texto informativo. Solo visible en tipo 'default' cuando se proporciona junto con downloadLinkText.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadLinkText:{description:"Texto del enlace de descarga. Requerido junto con downloadUrl para mostrar el link. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},showFileSize:{description:"Controla la visibilidad del tamaño del archivo en la lista de archivos cargados.",control:"boolean",table:{category:"Interfaz",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showRemoveButton:{description:"Controla la visibilidad del botón de eliminar en la lista de archivos cargados.",control:"boolean",table:{category:"Interfaz",type:{summary:"boolean"},defaultValue:{summary:"true"}}},validateEvent:{description:"Activa la validación del formulario cuando se modifican los archivos.",control:"boolean",table:{category:"Formularios",type:{summary:"boolean"},defaultValue:{summary:"true"}}},inputId:{description:"ID único para el elemento input file interno y las asociaciones de accesibilidad (aria-describedby). Se usa principalmente para integración con formularios y etiquetas de accesibilidad. Si no se proporciona, se genera automáticamente cuando está dentro de un FormItem.",control:"text",table:{category:"Formularios",type:{summary:"string"},defaultValue:{summary:"undefined"}}},"onUpdate:modelValue":{description:"Evento emitido cuando cambian los archivos seleccionados.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onChange:{description:"Evento emitido cuando se modifica la selección de archivos.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onError:{description:"Evento emitido cuando ocurren errores durante la validación o manipulación de archivos.",table:{category:"Eventos",type:{summary:"(error: string | Error) => void"}}},onValidationError:{description:"Evento emitido con errores de validación estructurados. Recibe un array de objetos ValidationError con propiedades: type ('file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded'), file (opcional), message (opcional), y data (información adicional específica del error).",table:{category:"Eventos",type:{summary:"(errors: ValidationError[]) => void"}}},onRetry:{description:"Evento emitido cuando se hace clic en reintentar después de un error.",table:{category:"Eventos",type:{summary:"() => void"}}},onClearProgress:{description:"Evento emitido automáticamente cuando el estado 'uploading' cambia de true a false.",table:{category:"Eventos",type:{summary:"() => void"}}},onDownload:{description:"Evento emitido en modo download cuando se hace clic en el botón.",table:{category:"Eventos",type:{summary:"() => void"}}},addFiles:{description:"Método público para agregar archivos programáticamente. Aplica todas las validaciones automáticas del componente (tamaño, tipo, cantidad) antes de añadir los archivos válidos al modelo.",table:{category:"Métodos Públicos",type:{summary:"(files: File[]) => void"}}},"extra-content":{description:"Slot para agregar contenido adicional debajo de la lista de archivos. Útil para mostrar mensajes de error personalizados, información adicional o validaciones externas. Solo disponible en tipo 'default'.",table:{category:"Slots",type:{summary:"Slot"}}}},args:{type:"default",mode:"upload",modelValue:[],multiple:!0,acceptExtNames:[],maxSize:"10MB",maxFiles:void 0,uploading:!1,uploadError:!1,fileErrors:{},fileProgress:{},disabled:!1,title:"Seleccionar archivo",uploadButtonText:"Haz clic para cargar",uploadText:"un archivo o arrástralo aquí",restrictionText:"",infoText:"",downloadUrl:"",downloadLinkText:"",showFileSize:!0,showRemoveButton:!0,validateEvent:!0,inputId:void 0}},W={name:"Básico",args:{maxSize:"",acceptExtNames:[]},parameters:{docs:{description:{story:"Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:t=>({components:{GAttachFile:B,GConfigProvider:V},setup(){const i=F([]);return{args:t,files:i}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},H={name:"Arrastrar y Soltar",parameters:{docs:{description:{story:"El tipo 'drag-drop' proporciona una zona de arastrar y soltar que acepta cualquier tipo de archivo y cualquier tamaño"},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:B,GConfigProvider:V},setup(){const t=F([]);return{files:t,handleUpdate:o=>{t.value=o,P("update:model-value")(o)},handleValidationError:o=>{P("validation-error")(o)},handleChange:o=>{P("change")(o)}}},template:`
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
    `})},K={name:"Estados del Componente",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:B,GConfigProvider:V},setup(){const t=(m,c=1024e3,w="application/pdf")=>{const S=new File([""],m,{type:w});return Object.defineProperty(S,"size",{value:c}),S},i=F([]),l=F([t("documento1.pdf",1024e3),t("imagen1.jpg",2048e3,"image/jpeg")]),e=F([t("documento_error.pdf")]),o=F([]),d=F({0:"Error de conexión al servidor"});return{normalFiles:i,uploadingFiles:l,errorFiles:e,disabledFiles:o,fileErrors:d,handleUpdate:m=>c=>{m.value=c,P("update:model-value")(c)},handleRetry:()=>{P("onRetry")(),e.value=[],d.value={}}}},template:`
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
    `})},Z={name:"Flujo de Carga Completo",parameters:{docs:{description:{story:`
Validaciones automáticas con manejo de mensajes de error.

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar más de 2 archivos → Error de cantidad
        `}}},render:()=>({components:{GAttachFile:B,GConfigProvider:V,GForm:Ee,GFormItem:Fe,GButton:ue,GInput:we},setup(){const t=F([]),i=F(!1),l=F(!1),e=F(""),o=F(""),d=F({}),v=F({}),E=async y=>{if(y.length===0)return;i.value=!0,l.value=!1,v.value={},d.value={};for(let n=0;n<y.length;n++)d.value={...d.value,[n]:0};const k=20,A=150;for(let n=0;n<=k;n++){await new Promise(b=>setTimeout(b,A));const r=Math.round(n/k*100);for(let b=0;b<y.length;b++){const x=Math.random()*10-5,f=Math.min(100,Math.max(0,r+x));d.value={...d.value,[b]:Math.round(f)}}}if(await new Promise(n=>setTimeout(n,500)),Math.random()<.6){const n=Math.floor(Math.random()*y.length),r=["Error de conexión al servidor","Archivo corrupto detectado","Formato no soportado por el servidor","Timeout en la carga"],b=r[Math.floor(Math.random()*r.length)];v.value={[n]:b}}i.value=!1};function m(y){let k="",A="";y.forEach(R=>{if(R)if(R.type==="file-size-exceeded"){const n=Math.round((R.file?.size||0)/1048576*100)/100;k=`"${R.file?.name}" (${n}MB) excede el límite de ${R.data?.maxSize||"2MB"}`}else R.type==="invalid-file-type"?k=`"${R.file?.name}" tipo no válido. Solo ${R.data?.acceptedExtensions?.join(", ")||"tipos específicos"}`:R.type==="max-files-exceeded"&&(A=`Máximo ${R.data?.maxFiles} archivos permitidos (intentaste subir ${R.data?.totalAttempted||"varios"})`)}),e.value=k,o.value=A}function c(y){console.log("📁 Archivos actualizados:",y.length),t.value=y,y.length>=0&&(e.value="",o.value=""),y.length>0&&!i.value&&E(y)}function w(){l.value=!1,v.value={},d.value={},e.value="",o.value="",t.value.length>0&&E(t.value)}function S(){t.value=[],i.value=!1,l.value=!1,e.value="",o.value="",d.value={},v.value={}}return{files:t,uploading:i,uploadError:l,validationErrorMsg:e,maxFilesErrorMsg:o,fileProgress:d,fileErrors:v,handleValidationError:m,handleUpdate:c,handleRetry:w,handleClearAll:S}},template:`
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
    `})},J={name:"Modo Descarga",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:B,GConfigProvider:V},setup(){return{handleDownload:()=>{P("download")();const i=document.createElement("a");i.href="data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.",i.download="plantilla-ejemplo.txt",i.click()}}},template:`
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
    `})},Q={name:"Con Link de Descarga",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:B,GConfigProvider:V},setup(){const t=F([]),i=F([]);return{files:t,filesWithError:i,handleUpdate:e=>{t.value=e,P("update:model-value")(e)}}},template:`
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
    `})},X={name:"Integración con Formularios",parameters:{docs:{description:{story:"Integración del componente GAttachFile con GForm y validaciones de formulario."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:B,GConfigProvider:V,GForm:Ee,GFormItem:Fe,GButton:ue,GInput:we},setup(){const t=F(),i=_e({name:"",documents:[]}),l={name:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],documents:[{required:!0,message:"Debe adjuntar al menos un documento",trigger:"change"},{validator:(E,m,c)=>{if(!m||m.length===0){c(new Error("Los documentos son obligatorios"));return}if(!m.some(y=>y.name.toLowerCase().endsWith(".pdf"))){c(new Error("Debe incluir al menos un documento PDF"));return}if(!m.every(y=>{const k=y.name.toLowerCase();return k.length>10||k.includes("documento")||k.includes("certificado")||k.includes("comprobante")})){c(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));return}c()},trigger:"change"}]},e=F([]);async function o(){if(t.value)try{await t.value.validate()&&(console.log("Formulario válido:",i),alert("¡Documentos enviados exitosamente!"))}catch(E){console.error("Error de validación:",E)}}function d(){t.value&&(t.value.resetFields(),e.value=[])}return{formRef:t,formData:i,rules:l,validationErrors:e,handleSubmit:o,handleReset:d,handleValidationError:E=>{P("validation-error")(E);const m=E.map(c=>{switch(c.type){case"file-size-exceeded":return`"${c.file?.name}" excede ${c.data?.maxSize}`;case"invalid-file-type":return`"${c.file?.name}" tipo no válido. Solo ${c.data?.acceptedExtensions?.join(", ")}`;case"max-files-exceeded":return`Máximo ${c.data?.maxFiles} archivos permitidos`;default:return"Error de validación"}});e.value=m,setTimeout(()=>e.value=[],5e3)}}},template:`
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
    `})},Y={name:"Método addFiles",parameters:{docs:{description:{story:"Método  `addFiles` que permite agregar archivos programáticamente al componente."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:B,GConfigProvider:V,GButton:ue},setup(){const t=F([]),i=F();return{files:t,attachFileRef:i,addMockFiles:()=>{const d=[new File(["contenido PDF de ejemplo"],"documento-ejemplo.pdf",{type:"application/pdf"}),new File(["contenido imagen de ejemplo"],"imagen-ejemplo.jpg",{type:"image/jpeg"})];Object.defineProperty(d[0],"size",{value:1024*500}),Object.defineProperty(d[1],"size",{value:1024*800}),i.value?.addFiles&&i.value.addFiles(d)},addSingleFile:()=>{const d=new File(["contenido de texto"],"nota.txt",{type:"text/plain"});Object.defineProperty(d,"size",{value:1024*100}),i.value?.addFiles&&i.value.addFiles([d])},clearFiles:()=>{t.value=[]}}},template:`
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
    `})},ee={name:"Estado Solo Lectura (Un Archivo)",args:{title:"Documento Aprobado",infoText:"Este documento ya ha sido validado y no puede ser modificado.",showFileSize:!1,showRemoveButton:!1,disabled:!0,downloadUrl:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",downloadLinkText:"Ver documento"},parameters:{docs:{description:{story:"Ejemplo de configuración para mostrar un único archivo en estado de solo lectura o aprobado, con enlace para visualizar el documento."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:t=>({components:{GAttachFile:B,GConfigProvider:V},setup(){const i=F([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"})]);return{args:t,files:i}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},ae={name:"Estado Solo Lectura (Múltiples Archivos)",args:{title:"Documentos Aprobados",infoText:"Estos documentos ya han sido validados y no pueden ser modificados.",showFileSize:!1,showRemoveButton:!1,disabled:!0},parameters:{docs:{description:{story:"Ejemplo de configuración para mostrar múltiples archivos en estado de solo lectura o aprobados."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:t=>({components:{GAttachFile:B,GConfigProvider:V},setup(){const i=F([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"}),new File(["dummy content"],"comprobante_pago.jpg",{type:"image/jpeg"}),new File(["dummy content"],"identificacion_frontal.png",{type:"image/png"})]);return{args:t,files:i}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},te={name:"Estado Solo Lectura (Drag & Drop)",args:{type:"drag-drop",uploadButtonText:"Cargar archivos",uploadText:"o arrastra aquí",showFileSize:!1,showRemoveButton:!1,disabled:!0},parameters:{docs:{description:{story:"Ejemplo de configuración para el modo Drag & Drop en estado de solo lectura. Muestra la lista de archivos sin opciones de eliminación ni tamaño."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:t=>({components:{GAttachFile:B,GConfigProvider:V},setup(){const i=F([new File(["dummy content"],"contrato_firmado.pdf",{type:"application/pdf"}),new File(["dummy content"],"anexo_1.docx",{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})]);return{args:t,files:i}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};const tt=["Primary","DragDrop","ComponentStates","FlujoCargaCompleto","DownloadMode","DownloadLink","FormIntegration","AddFilesMethod","ReadOnlySingle","ReadOnlyMultiple","ReadOnlyDragDrop"];export{Y as AddFilesMethod,K as ComponentStates,Q as DownloadLink,J as DownloadMode,H as DragDrop,Z as FlujoCargaCompleto,X as FormIntegration,W as Primary,te as ReadOnlyDragDrop,ae as ReadOnlyMultiple,ee as ReadOnlySingle,tt as __namedExportsOrder,at as default};
