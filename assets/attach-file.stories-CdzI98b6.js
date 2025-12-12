import{c as p,w as Be,d as oe,x as b,e as g,m as A,l as s,u as a,k as u,n as $,s as X,y as R,b as ee,t as Ie,r as S,h as I,F as G,z as ie,A as $e,a1 as O,a2 as me,q as Ue,f as Ge,H as Le}from"./vue.esm-bundler-C43JrhH2.js";import{a as q}from"./index-Br0BFi8U.js";import{b as Ne,d as Oe,f as We,w as _e}from"./install-CfJGiCvs.js";import{Y as He,Z as Ke}from"./index-3IKRmSQk.js";import{d as Ze}from"./error-Cq9Fpw4b.js";import{s as se}from"./index-Bz95DFg8.js";import{v as ae}from"./index-BIUJGY5W.js";import{u as re}from"./index-IKXR5Yi8.js";import{G as T}from"./ConfigProvider-Bm0JlQoM.js";import{G as ye,a as xe}from"./index-Be8-568S.js";import{G as de}from"./index--hrENRDI.js";import{G as be}from"./index-wsvawFKn.js";import{a as Je,b as ue}from"./documentation-stories-BRH_vkik.js";import"./v4-CtRu48qb.js";import"./index-fhkPmQjX.js";import"./index-DmfABaPz.js";import"./_arrayPush-Bf091UU2.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BDKGuxIf.js";import"./event-HEVJa2N9.js";import"./index-D7z0E8nu.js";import"./typescript-Bp3YSIOJ.js";import"./index-BjhK0CHr.js";import"./index-Dv8hH079.js";import"./aria-BjPBxY_p.js";import"./index-CvPWi8JN.js";import"./index-CRzRggX1.js";import"./index-ZrO6PWlN.js";const pe={UPLOAD:"upload",DOWNLOAD:"download"},j={SUCCESS:"success",ERROR:"error",LOADING:"loading"},Ye=Ne({modelValue:{type:Oe(Array),default:()=>[]},type:{type:String,values:["default","drag-drop"],default:"default"},mode:{type:String,values:Object.values(pe),default:pe.UPLOAD},inputId:{type:String,default:void 0},acceptExtNames:{type:Array,default:()=>[]},maxSize:{type:String,default:"10MB"},multiple:{type:Boolean,default:!0},maxFiles:{type:Number,default:void 0},disabled:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},uploadButtonText:{type:String,default:""},title:{type:String,default:""},uploadText:{type:String,default:""},restrictionText:{type:String,default:""},infoText:{type:String,default:""},downloadUrl:{type:String,default:""},downloadLinkText:{type:String,default:""},uploading:{type:Boolean,default:!1},uploadError:{type:[Boolean,String],default:!1},fileErrors:{type:Object,default:()=>({})},fileProgress:{type:Object,default:()=>({})},errors:{type:Array,default:()=>[]}}),Qe={"update:modelValue":t=>!0,change:t=>!0,error:t=>!0,"validation-error":t=>!0,onRetry:()=>!0,download:()=>!0,clearProgress:()=>!0},fe={b:1,kb:1024,mb:1024*1024,gb:1024*1024*1024,tb:1024*1024*1024*1024},Xe=["Bytes","KB","MB","GB","TB"];function te(t){if(t===0)return"0 Bytes";const i=1024,l=Math.floor(Math.log(t)/Math.log(i));return parseFloat((t/Math.pow(i,l)).toFixed(2))+" "+Xe[l]}function Fe(t){if(!t||typeof t!="string")return 0;const i=/^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i,l=t.trim().match(i);if(!l)return 0;const e=parseFloat(l[1]),o=l[2].toLowerCase();return fe[o]?Math.floor(e*fe[o]):0}function ea(t,i,l="change"){t&&i&&i.validate(l).catch(e=>Ze())}function ge(t){return t?Array.from(t):[]}function Ee(t,i=!1,l=!1){!i&&!l&&t.value&&t.value.click()}function ce(t,i,l,e,o){return i[t]||l?j.ERROR:e||o[t]!==void 0?j.LOADING:j.SUCCESS}function we(t,i,l=!1,e=!1){return function(d){if(l&&e)return;const v=[...t];v.splice(d,1),i("update:modelValue",v),i("change",v)}}function ke(t){return t.length>0?t[0]:""}function aa(t,i){const{formItem:l}=Ke(),{inputId:e}=He(t,{formItemContext:l||void 0}),o=p(()=>t.modelValue||[]),d=p(()=>t.multiple??!0),v=p(()=>t.validateEvent??!0),F=p(()=>t.uploading??!1),m=p(()=>t.uploadError??!1),c=p(()=>t.fileErrors||{}),E=p(()=>t.fileProgress||{}),w=p(()=>{const n={};return o.value.forEach((r,x)=>{n[x]=ce(x,c.value,!!m.value,F.value,E.value)}),n}),h=p(()=>{const n=[];return t.errors&&Array.isArray(t.errors)&&t.errors.forEach(r=>{typeof r=="string"&&r.trim()&&!n.includes(r)&&n.push(r)}),l?.shouldShowErrorChild&&l?.validateMessage&&(n.includes(l.validateMessage)||n.push(l.validateMessage)),m.value&&typeof m.value=="string"&&(n.includes(m.value)||n.push(m.value)),Object.values(c.value).forEach(r=>{typeof r=="string"&&r&&!n.includes(r)&&n.push(r)}),n});function k(n){const r=[],x=[],y=t.acceptExtNames?.map(C=>C.toLowerCase())||[],f=d.value?o.value:[];if(t.maxFiles&&f.length+n.length>t.maxFiles){r.push({type:"max-files-exceeded",data:{maxFiles:t.maxFiles,currentFiles:f.length,attemptedFiles:n.length,totalAttempted:f.length+n.length}}),i("validation-error",r);return}if(n.forEach(C=>{let U=!0;if(t.maxSize){const B=Fe(t.maxSize);B&&C.size>B&&(r.push({type:"file-size-exceeded",file:C,data:{maxSize:t.maxSize,actualSize:C.size}}),U=!1)}if(y.length>0){const B="."+C.name.split(".").pop()?.toLowerCase();y.includes(B)||(r.push({type:"invalid-file-type",file:C,data:{acceptedExtensions:t.acceptExtNames,actualExtension:B}}),U=!1)}U&&x.push(C)}),r.length>0){i("validation-error",r);return}if(x.length>0){const C=d.value?[...o.value,...x]:x;i("update:modelValue",C),i("change",C),ea(v.value||!1,l)}}function z(n){const r=n.target;r.files&&(k(ge(r.files)),r.value="")}function M(n){k(ge(n))}return Be(()=>F.value,n=>{n||i("clearProgress")},{immediate:!0}),{modelValue:o,fileStatuses:w,displayErrors:h,fileErrors:c,fileProgress:E,inputId:e,multiple:d,uploading:F,uploadError:m,onFileInputChange:z,onFilesDrop:M,addFiles:k}}/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ta=Object.prototype.hasOwnProperty,ve=(t,i)=>ta.call(t,i),De=t=>t!==null&&typeof t=="object",Se="__epPropKey",he=t=>t,oa=t=>De(t)&&!!t[Se],ra=(t,i)=>{if(!De(t)||oa(t))return t;const{values:l,required:e,default:o,type:d,validator:v}=t,F={type:d,required:!!e,validator:l||v?m=>{let c=!1,E=[];if(l&&(E=Array.from(l),ve(t,"default")&&E.push(o),c||(c=E.includes(m))),v&&(c||(c=v(m))),!c&&E.length>0){const w=[...new Set(E)].map(h=>JSON.stringify(h)).join(", ");Ie(`Invalid prop: validation failed${i?` for prop "${i}"`:""}. Expected one of [${w}], got value ${JSON.stringify(m)}.`)}return c}:void 0,[Se]:!0};return ve(t,"default")&&(F.default=o),F},la=t=>We(Object.entries(t).map(([i,l])=>[i,ra(l,i)])),ia=(t,i)=>(t.install=l=>{for(const e of[t,...Object.values({})])l.component(e.name,e)},t),sa=la({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:t=>t>=0&&t<=100},status:{type:String,default:"primary",values:["primary","success","error","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:he(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},format:{type:he(Function),default:t=>`${t}%`}}),na=["aria-valuenow"],da={viewBox:"0 0 100 100"},ca=["d","stroke","stroke-linecap","stroke-width"],ma=["d","stroke","opacity","stroke-linecap","stroke-width"],ua={key:1},pa=oe({name:"Progress",__name:"progress",props:sa,setup(t){const i={primary:"--color-progress-primary",success:"--color-progress-success",error:"--color-progress-error",warning:"--color-progress-warning"},l=t,e=re("progress"),o=p(()=>{const r={width:`${l.percentage}%`,animationDuration:`${l.duration}s`},x=i[l.status]||i.primary;return r.backgroundColor=`var(${x})`,r}),d=p(()=>(l.strokeWidth/l.width*100).toFixed(1)),v=p(()=>["circle","dashboard"].includes(l.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),F=p(()=>{const r=v.value,x=l.type==="dashboard";return`
            M 50 50
            m 0 ${x?"":"-"}${r}
            a ${r} ${r} 0 1 1 0 ${x?"-":""}${r*2}
            a ${r} ${r} 0 1 1 0 ${x?"":"-"}${r*2}
            `}),m=p(()=>2*Math.PI*v.value),c=p(()=>l.type==="dashboard"?.75:1),E=p(()=>`${-1*m.value*(1-c.value)/2}px`),w=p(()=>({strokeDasharray:`${m.value*c.value}px, ${m.value}px`,strokeDashoffset:E.value})),h=p(()=>({strokeDasharray:`${m.value*c.value*(l.percentage/100)}px, ${m.value}px`,strokeDashoffset:E.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),k=p(()=>{let r;return r=`var(${i[l.status]||i.primary})`,r}),z=p(()=>l.status==="warning"?"solid exclamation-circle":l.type==="line"?l.status==="success"?"regular check-circle":"regular circle-xmark":l.status==="success"?"regular check":"regular times"),M=p(()=>l.type==="line"?12+l.strokeWidth*.4:l.width*.111111+2),n=p(()=>l.format(l.percentage));return(r,x)=>(g(),b("div",{class:s([a(e).b(),a(e).m(r.type),a(e).is(r.status),{[a(e).m("without-text")]:!r.showText,[a(e).m("text-inside")]:r.textInside}]),id:"MAIN-DIV",role:"progressbar","aria-valuenow":r.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[r.type==="line"?(g(),b("div",{key:0,class:s(a(e).b("bar"))},[u("div",{class:s(a(e).be("bar","outer")),style:$({height:`${r.strokeWidth}px`})},[u("div",{class:s([a(e).be("bar","inner"),{[a(e).bem("bar","inner","indeterminate")]:r.indeterminate}]),style:$(o.value)},[(r.showText||r.$slots.default)&&r.textInside?(g(),b("div",{key:0,class:s(a(e).be("bar","innerText"))},[X(r.$slots,"default",{percentage:r.percentage},()=>[u("span",null,R(n.value),1)])],2)):A("",!0)],6)],6)],2)):(g(),b("div",{key:1,class:s(a(e).b("circle")),style:$({height:`${r.width}px`,width:`${r.width}px`})},[(g(),b("svg",da,[u("path",{class:s(a(e).be("circle","track")),d:F.value,stroke:`var(${a(e).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":r.strokeLinecap,"stroke-width":d.value,fill:"none",style:$(w.value)},null,14,ca),u("path",{class:s(a(e).be("circle","path")),d:F.value,stroke:k.value,fill:"none",opacity:r.percentage?1:0,"stroke-linecap":r.strokeLinecap,"stroke-width":d.value,style:$(h.value)},null,14,ma)]))],6)),(r.showText||r.$slots.default)&&!r.textInside?(g(),b("div",{key:2,class:s(a(e).e("text")),style:$({fontSize:`${M.value}px`})},[X(r.$slots,"default",{percentage:r.percentage},()=>[r.loading?(g(),ee(a(ae),{key:0,name:"regular spinner",spin:""})):!r.status||r.status==="primary"?(g(),b("span",ua,R(n.value),1)):(g(),ee(a(ae),{key:2,name:z.value},null,8,["name"]))])],6)):A("",!0)],10,na))}}),Me=ia(pa),fa=["multiple","accept","disabled","aria-label","aria-describedby"],ga=["href","aria-label"],Re=oe({__name:"default-type",props:{id:{},mode:{default:"upload"},title:{},infoText:{},uploadError:{type:Boolean,default:!1},downloadUrl:{default:""},downloadLinkText:{default:""},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{default:()=>[]},fileErrors:{default:()=>({})},fileProgress:{default:()=>({})},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1}},emits:["update:modelValue","change","error","onRetry","download","file-input-change"],setup(t,{expose:i,emit:l}){const e=re("attach-file"),o=t,d=l,v=S();function F(){o.mode==="download"?d("download"):o.uploadError||Object.keys(o.fileErrors).length>0?d("onRetry"):Ee(v,o.disabled,o.uploading)}function m(r){d("file-input-change",r)}const c=p(()=>o.modelValue||[]),E=p(()=>c.value.length>0),w=p(()=>o.multiple||o.uploadError),h=p(()=>o.uploadError?"error":o.uploading?"loading":c.value.length>0?"success":"default"),k=p(()=>ke(o.errors)),z=p(()=>o.mode==="download"?"solid download":"solid upload"),M=we(o.modelValue,d),n=r=>ce(r,o.fileErrors,o.uploadError,o.uploading,o.fileProgress);return i({hiddenFileInput:v}),(r,x)=>(g(),b("div",{class:s(a(e).e("default-type"))},[u("input",{ref_key:"hiddenFileInput",ref:v,type:"file",multiple:r.multiple,accept:r.acceptExtNames.join(","),disabled:r.disabled,class:s(a(e).e("hidden-input")),"aria-label":r.title||void 0,"aria-describedby":r.infoText?`${r.id||"attach-file"}-info`:void 0,onChange:m},null,42,fa),u("div",{class:s(a(e).e("content"))},[u("div",{class:s([a(e).e("header"),{[a(e).is("with-file-list")]:E.value}])},[u("div",{class:s(a(e).e("header-content"))},[u("p",{class:s(a(e).e("title"))},R(r.title),3),w.value?(g(),b("p",{key:0,class:s(a(e).e("info-text"))},R(r.infoText),3)):A("",!0),r.downloadUrl&&r.downloadLinkText?(g(),b("a",{key:1,href:r.downloadUrl,target:"_blank",rel:"noopener noreferrer",class:s(a(e).e("download-link")),"aria-label":`${r.downloadLinkText} (opens in new tab)`},R(r.downloadLinkText),11,ga)):A("",!0)],2),I(a(se),{icon:z.value,variant:"blue",border:"",rounded:"",size:"medium",onClick:F,disabled:r.disabled},null,8,["icon","disabled"])],2),h.value==="loading"?(g(),b("div",{key:0,class:s(a(e).e("files-list"))},[u("div",{class:s(a(e).e("files-container"))},[(g(!0),b(G,null,ie(r.modelValue,(y,f)=>(g(),b("div",{key:f,class:s(a(e).e("file-item"))},[u("div",{class:s(a(e).e("file-item-content"))},[I(a(Me),{percentage:r.fileProgress[f]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),u("div",{class:s(a(e).e("file-item-info"))},[u("span",{class:s(a(e).e("file-item-name"))},R(y.name),3),u("span",{class:s(a(e).e("file-item-size"))},R(a(te)(y.size)),3)],2)],2)],2))),128))],2)],2)):E.value?(g(),b("div",{key:1,class:s(a(e).em("file-list","clean"))},[(g(!0),b(G,null,ie(c.value,(y,f)=>(g(),b("div",{key:f,class:s(a(e).e("item"))},[u("div",{class:s(a(e).e("item-content"))},[u("div",{class:s(a(e).e("file-status-icon"))},[I(a(ae),{name:n(f)===a(j).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:n(f)!==a(j).ERROR,[a(e).is("error")]:n(f)===a(j).ERROR}])},null,8,["name","class"])],2),u("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:n(f)===a(j).ERROR,[a(e).is("success")]:n(f)!==a(j).ERROR}])},R(y.name),3)],2),u("div",{class:s(a(e).e("item-actions"))},[u("span",{class:s(a(e).e("file-size"))},R(a(te)(y.size)),3),I(a(se),{icon:"solid trash-alt",variant:"grey",size:"small",disabled:o.disabled,onClick:C=>!o.disabled&&a(M)(f)},null,8,["disabled","onClick"])],2)],2))),128))],2)):A("",!0),r.$slots["extra-content"]?(g(),b("div",{key:2,class:s(a(e).e("extra-content"))},[X(r.$slots,"extra-content")],2)):A("",!0)],2),k.value?(g(),b("div",{key:0,class:s(a(e).e("validation-errors"))},[u("p",{class:s(a(e).e("error-text"))},R(k.value),3)],2)):A("",!0)],2))}});Re.__docgenInfo={exportName:"default",displayName:"default-type",description:"",tags:{},expose:[{name:"hiddenFileInput"}],props:[{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"mode",required:!1,type:{name:"AttachFileMode"},defaultValue:{func:!1,value:'"upload"'}},{name:"title",required:!0,type:{name:"string"}},{name:"infoText",required:!0,type:{name:"string"}},{name:"uploadError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"downloadUrl",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"downloadLinkText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"download"},{name:"file-input-change"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/default-type.vue"]};const va=["aria-label","aria-describedby"],ha=["disabled"],ya=["id"],xa=["multiple","accept","disabled","aria-label"],ze=oe({__name:"drag-drop-type",props:{id:{default:void 0},uploadButtonText:{},uploadText:{},restrictionText:{default:""},maxSize:{default:""},maxFiles:{default:void 0},loadingState:{type:Boolean,default:!1},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{},fileErrors:{},fileProgress:{},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1}},emits:["update:modelValue","change","error","onRetry","file-input-change","files-drop"],setup(t,{expose:i,emit:l}){const e=re("attach-file"),o=t,d=l,v=S(),F=S(),m=S(!1),c=S(0),E=p(()=>o.modelValue||[]),w=p(()=>o.loadingState||o.uploading),h=p(()=>o.maxSize?Fe(o.maxSize):0),k=p(()=>o.restrictionText||""),z=p(()=>ke(o.errors)),M=p(()=>we(E.value,d,!0,w.value)),n=D=>ce(D,o.fileErrors,!1,o.uploading,o.fileProgress);function r(){Ee(v,o.disabled,w.value)}function x(D){d("file-input-change",D)}function y(D){D.preventDefault(),c.value++,m.value=!0}function f(D){D.preventDefault(),c.value--,c.value===0&&(m.value=!1)}function C(D){D.preventDefault()}function U(D){if(D.preventDefault(),c.value=0,m.value=!1,o.disabled||w.value)return;const L=D.dataTransfer?.files;L&&L.length>0&&d("files-drop",L)}const B=()=>r(),Ce=()=>r(),je=D=>{D.preventDefault(),r()},Ae=D=>{D.stopPropagation(),Object.keys(o.fileErrors).length>0||o.errors.length>0?d("onRetry"):r()},Ve=D=>C(D),Pe=D=>y(D),qe=D=>f(D),Te=D=>U(D);return i({fileInput:v,openFileDialog:r}),(D,L)=>(g(),b("div",{class:s(a(e).e("drag-drop-type"))},[u("div",{ref_key:"dropZone",ref:F,class:s([a(e).e("drop-zone"),{[a(e).is("dragging")]:m.value,[a(e).is("error")]:o.errors.length>0,[a(e).is("disabled")]:o.disabled,[a(e).is("loading")]:w.value}]),role:"button",tabindex:"0","aria-label":`${o.uploadButtonText}. ${k.value||""}`,"aria-describedby":o.restrictionText||o.acceptExtNames.length||h.value?`${o.id||"drag-drop"}-restriction`:void 0,onClick:B,onKeydown:[me(Ce,["enter"]),me(je,["space"])],onDragover:O(Ve,["prevent"]),onDragenter:O(Pe,["prevent"]),onDragleave:O(qe,["prevent"]),onDrop:O(Te,["prevent"])},[u("div",{class:s(a(e).e("text-content"))},[u("p",{class:s(a(e).e("main-text"))},[u("button",{type:"button",class:s(a(e).e("upload-button")),disabled:o.disabled||w.value,onClick:Ae},R(o.uploadButtonText),11,ha),$e(" "+R(o.uploadText),1)],2),o.restrictionText||o.acceptExtNames.length||h.value?(g(),b("p",{key:0,class:s(a(e).e("restriction-text")),id:`${o.id||"drag-drop"}-restriction`},R(o.restrictionText||k.value),11,ya)):A("",!0)],2),u("input",{ref_key:"fileInput",ref:v,type:"file",multiple:o.multiple,accept:o.acceptExtNames.join(","),disabled:o.disabled||w.value,class:s(a(e).e("hidden-input")),"aria-label":`${o.uploadButtonText} - ${k.value||""}`,onChange:x},null,42,xa)],42,va),E.value.length>0?(g(),b("div",{key:0,class:s(a(e).em("file-list","boxed"))},[(g(!0),b(G,null,ie(E.value,(N,P)=>(g(),b("div",{key:P,class:s([a(e).e("item"),{[a(e).is("loading")]:w.value}])},[u("div",{class:s(a(e).e("item-content"))},[w.value?(g(),b("div",{key:0,class:s(a(e).e("file-item-content"))},[I(a(Me),{percentage:o.fileProgress[P]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),u("div",{class:s(a(e).e("file-item-info"))},[u("span",{class:s(a(e).e("file-item-name"))},R(N.name),3),u("span",{class:s(a(e).e("file-item-size"))},R(a(te)(N.size)),3)],2)],2)):(g(),b(G,{key:1},[u("div",{class:s(a(e).e("file-status-icon"))},[I(a(ae),{name:n(P)===a(j).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:n(P)!==a(j).ERROR,[a(e).is("error")]:n(P)===a(j).ERROR}])},null,8,["name","class"])],2),u("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:n(P)===a(j).ERROR,[a(e).is("success")]:n(P)!==a(j).ERROR}])},R(N.name),3)],64))],2),u("div",{class:s(a(e).e("item-actions"))},[w.value?A("",!0):(g(),b(G,{key:0},[u("span",{class:s(a(e).e("file-size"))},R(a(te)(N.size)),3),I(a(se),{icon:"solid trash-alt",variant:"grey",size:"small",disabled:o.disabled,onClick:Fa=>!o.disabled&&M.value(P)},null,8,["disabled","onClick"])],64))],2)],2))),128))],2)):A("",!0),z.value?(g(),b("div",{key:1,class:s(a(e).e("validation-errors"))},[u("p",{class:s(a(e).e("error-text"))},R(z.value),3)],2)):A("",!0)],2))}});ze.__docgenInfo={exportName:"default",displayName:"drag-drop-type",description:"",tags:{},expose:[{name:"fileInput"},{name:"openFileDialog"}],props:[{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({} as Record<number, FileStatus>)"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"uploadButtonText",required:!0,type:{name:"string"}},{name:"uploadText",required:!0,type:{name:"string"}},{name:"restrictionText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxSize",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"maxFiles",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"loadingState",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"uploadProgress",defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"file-input-change"},{name:"files-drop"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/drag-drop-type.vue"]};const ne=oe({name:"GAttachFile",__name:"attach-file",props:Ye,emits:Qe,setup(t,{expose:i,emit:l}){const e=t,o=l,{modelValue:d,fileStatuses:v,displayErrors:F,fileErrors:m,fileProgress:c,inputId:E,multiple:w,uploading:h,uploadError:k,onFileInputChange:z,onFilesDrop:M,addFiles:n}=aa(e,o),r=re("attach-file");return i({addFiles:n}),(x,y)=>(g(),b("div",{class:s(a(r).b())},[e.type==="default"?(g(),ee(Re,{key:0,id:a(E),"model-value":a(d),mode:e.mode,title:e.title,"info-text":e.infoText,"download-url":e.downloadUrl,"download-link-text":e.downloadLinkText,multiple:a(w),"accept-ext-names":e.acceptExtNames,disabled:e.disabled,uploading:a(h),"upload-error":!!a(k),"file-statuses":a(v),errors:a(F),"file-errors":a(m),"file-progress":a(c),"onUpdate:modelValue":y[0]||(y[0]=f=>o("update:modelValue",f)),onChange:y[1]||(y[1]=f=>o("change",f)),onError:y[2]||(y[2]=f=>o("error",f)),onOnRetry:y[3]||(y[3]=f=>o("onRetry")),onDownload:y[4]||(y[4]=f=>o("download")),onFileInputChange:a(z)},Ue({_:2},[x.$slots["extra-content"]?{name:"extra-content",fn:Ge(()=>[X(x.$slots,"extra-content")]),key:"0"}:void 0]),1032,["id","model-value","mode","title","info-text","download-url","download-link-text","multiple","accept-ext-names","disabled","uploading","upload-error","file-statuses","errors","file-errors","file-progress","onFileInputChange"])):e.type==="drag-drop"?(g(),ee(ze,{key:1,id:a(E),"model-value":a(d),"upload-button-text":e.uploadButtonText,"upload-text":e.uploadText,"restriction-text":e.restrictionText,"accept-ext-names":e.acceptExtNames,multiple:a(w),disabled:e.disabled,"max-size":e.maxSize,"max-files":e.maxFiles,uploading:e.uploading,errors:a(F),"file-errors":a(m),"file-progress":a(c),"file-statuses":a(v),"onUpdate:modelValue":y[5]||(y[5]=f=>o("update:modelValue",f)),onChange:y[6]||(y[6]=f=>o("change",f)),onError:y[7]||(y[7]=f=>o("error",f)),onFileInputChange:a(z),onFilesDrop:a(M)},null,8,["id","model-value","upload-button-text","upload-text","restriction-text","accept-ext-names","multiple","disabled","max-size","max-files","uploading","errors","file-errors","file-progress","file-statuses","onFileInputChange","onFilesDrop"])):A("",!0)],2))}});ne.__docgenInfo={name:"GAttachFile",exportName:"default",displayName:"attach-file",description:"",tags:{},expose:[{name:"addFiles"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/attach-file.vue"]};const V=_e(ne,{AttachFile:ne}),ba="1.2.0",le={"@flash-global66/g-form":"1.0.0","@flash-global66/g-icon-button":"0.2.2","@flash-global66/g-icon-font":"0.6.0","@flash-global66/g-progress":"0.2.0","element-plus":"2.9.0",vue:"3.2.0"},Qa={title:"Form/Attach File",component:V,parameters:{docs:{description:{component:`
El componente Attach File permite cargar archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (compacto) y drag-drop (arrastrar y soltar).

> Versión actual: ${ba}

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
${Je(le)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${ue(le)}

# Dependencias externas  
yarn add ${ue(le,!0)}
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
`}}},argTypes:{modelValue:{description:"Array de archivos seleccionados (v-model)",control:"object",table:{category:"Principales",type:{summary:"File[]"},defaultValue:{summary:"[]"}}},type:{description:"Tipo de visualización del componente. Define la apariencia y comportamiento de la interfaz.",control:"select",options:["default","drag-drop"],table:{category:"Principales",type:{summary:"'default' | 'drag-drop'"},defaultValue:{summary:"'default'"}}},mode:{description:"Modo operacional del componente. En modo 'download' cambia el comportamiento del botón principal para emitir evento 'download' en lugar de activar selector de archivos.",control:"select",options:["upload","download"],table:{category:"Principales",type:{summary:"'upload' | 'download'"},defaultValue:{summary:"'upload'"}}},multiple:{description:"Permite seleccionar múltiples archivos mediante el input file.",control:"boolean",table:{category:"Principales",type:{summary:"boolean"},defaultValue:{summary:"true"}}},acceptExtNames:{description:"Array de extensiones permitidas. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"object",table:{category:"Validación Automática",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},maxSize:{description:"Tamaño máximo permitido (ej: '10MB'). El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'. Para permitir cualquier tamaño, pasa undefined, null o cadena vacía ''.",control:"text",table:{category:"Validación Automática",type:{summary:"string | undefined"},defaultValue:{summary:"'10MB'"}}},maxFiles:{description:"Número máximo de archivos. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"number",table:{category:"Validación Automática",type:{summary:"number"},defaultValue:{summary:"undefined"}}},uploading:{description:"Estado de carga/upload en progreso. Muestra indicadores de carga.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},uploadError:{description:"Estado de error de carga. Valor booleano controla el estado visual; valor string proporciona mensaje específico de error.",control:"select",options:[!1,!0,"Error personalizado en la carga"],table:{category:"Estados",type:{summary:"boolean | string"},defaultValue:{summary:"false"}}},fileErrors:{description:"Errores específicos por archivo. Índice del archivo como clave y mensaje de error como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, string>"},defaultValue:{summary:"{}"}}},fileProgress:{description:"Progreso específico por archivo. Índice del archivo como clave y porcentaje (0-100) como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, number>"},defaultValue:{summary:"{}"}}},disabled:{description:"Deshabilita el componente completamente.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{description:"Título del componente. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Seleccionar archivo'"}}},uploadButtonText:{description:"Texto del botón de carga. Se usa en tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Haz clic para cargar'"}}},uploadText:{description:"Texto adicional junto al botón. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'un archivo o arrástralo aquí'"}}},restrictionText:{description:"Texto personalizado de restricciones. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},infoText:{description:"Texto informativo adicional. Solo para tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadUrl:{description:"URL del archivo para descargar. Se muestra como un link debajo del texto informativo. Solo visible en tipo 'default' cuando se proporciona junto con downloadLinkText.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadLinkText:{description:"Texto del enlace de descarga. Requerido junto con downloadUrl para mostrar el link. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},validateEvent:{description:"Activa la validación del formulario cuando se modifican los archivos.",control:"boolean",table:{category:"Formularios",type:{summary:"boolean"},defaultValue:{summary:"true"}}},inputId:{description:"ID único para el elemento input file interno y las asociaciones de accesibilidad (aria-describedby). Se usa principalmente para integración con formularios y etiquetas de accesibilidad. Si no se proporciona, se genera automáticamente cuando está dentro de un FormItem.",control:"text",table:{category:"Formularios",type:{summary:"string"},defaultValue:{summary:"undefined"}}},"onUpdate:modelValue":{description:"Evento emitido cuando cambian los archivos seleccionados.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onChange:{description:"Evento emitido cuando se modifica la selección de archivos.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onError:{description:"Evento emitido cuando ocurren errores durante la validación o manipulación de archivos.",table:{category:"Eventos",type:{summary:"(error: string | Error) => void"}}},onValidationError:{description:"Evento emitido con errores de validación estructurados. Recibe un array de objetos ValidationError con propiedades: type ('file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded'), file (opcional), message (opcional), y data (información adicional específica del error).",table:{category:"Eventos",type:{summary:"(errors: ValidationError[]) => void"}}},onRetry:{description:"Evento emitido cuando se hace clic en reintentar después de un error.",table:{category:"Eventos",type:{summary:"() => void"}}},onClearProgress:{description:"Evento emitido automáticamente cuando el estado 'uploading' cambia de true a false.",table:{category:"Eventos",type:{summary:"() => void"}}},onDownload:{description:"Evento emitido en modo download cuando se hace clic en el botón.",table:{category:"Eventos",type:{summary:"() => void"}}},addFiles:{description:"Método público para agregar archivos programáticamente. Aplica todas las validaciones automáticas del componente (tamaño, tipo, cantidad) antes de añadir los archivos válidos al modelo.",table:{category:"Métodos Públicos",type:{summary:"(files: File[]) => void"}}},"extra-content":{description:"Slot para agregar contenido adicional debajo de la lista de archivos. Útil para mostrar mensajes de error personalizados, información adicional o validaciones externas. Solo disponible en tipo 'default'.",table:{category:"Slots",type:{summary:"Slot"}}}},args:{type:"default",mode:"upload",modelValue:[],multiple:!0,acceptExtNames:[],maxSize:"10MB",maxFiles:void 0,uploading:!1,uploadError:!1,fileErrors:{},fileProgress:{},disabled:!1,title:"Seleccionar archivo",uploadButtonText:"Haz clic para cargar",uploadText:"un archivo o arrástralo aquí",restrictionText:"",infoText:"",downloadUrl:"",downloadLinkText:"",validateEvent:!0,inputId:void 0}},W={name:"Básico",args:{maxSize:"",acceptExtNames:[]},parameters:{docs:{description:{story:"Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:t=>({components:{GAttachFile:V,GConfigProvider:T},setup(){const i=S([]);return{args:t,files:i}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},_={name:"Arrastrar y Soltar",parameters:{docs:{description:{story:"El tipo 'drag-drop' proporciona una zona de arastrar y soltar que acepta cualquier tipo de archivo y cualquier tamaño"},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:V,GConfigProvider:T},setup(){const t=S([]);return{files:t,handleUpdate:o=>{t.value=o,q("update:model-value")(o)},handleValidationError:o=>{q("validation-error")(o)},handleChange:o=>{q("change")(o)}}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:V,GConfigProvider:T},setup(){const t=(m,c=1024e3,E="application/pdf")=>{const w=new File([""],m,{type:E});return Object.defineProperty(w,"size",{value:c}),w},i=S([]),l=S([t("documento1.pdf",1024e3),t("imagen1.jpg",2048e3,"image/jpeg")]),e=S([t("documento_error.pdf")]),o=S([]),d=S({0:"Error de conexión al servidor"});return{normalFiles:i,uploadingFiles:l,errorFiles:e,disabledFiles:o,fileErrors:d,handleUpdate:m=>c=>{m.value=c,q("update:model-value")(c)},handleRetry:()=>{q("onRetry")(),e.value=[],d.value={}}}},template:`
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
        `}}},render:()=>({components:{GAttachFile:V,GConfigProvider:T,GForm:xe,GFormItem:ye,GButton:de,GInput:be},setup(){const t=S([]),i=S(!1),l=S(!1),e=S(""),o=S(""),d=S({}),v=S({}),F=async h=>{if(h.length===0)return;i.value=!0,l.value=!1,v.value={},d.value={};for(let n=0;n<h.length;n++)d.value={...d.value,[n]:0};const k=20,z=150;for(let n=0;n<=k;n++){await new Promise(x=>setTimeout(x,z));const r=Math.round(n/k*100);for(let x=0;x<h.length;x++){const y=Math.random()*10-5,f=Math.min(100,Math.max(0,r+y));d.value={...d.value,[x]:Math.round(f)}}}if(await new Promise(n=>setTimeout(n,500)),Math.random()<.6){const n=Math.floor(Math.random()*h.length),r=["Error de conexión al servidor","Archivo corrupto detectado","Formato no soportado por el servidor","Timeout en la carga"],x=r[Math.floor(Math.random()*r.length)];v.value={[n]:x}}i.value=!1};function m(h){let k="",z="";h.forEach(M=>{if(M)if(M.type==="file-size-exceeded"){const n=Math.round((M.file?.size||0)/1048576*100)/100;k=`"${M.file?.name}" (${n}MB) excede el límite de ${M.data?.maxSize||"2MB"}`}else M.type==="invalid-file-type"?k=`"${M.file?.name}" tipo no válido. Solo ${M.data?.acceptedExtensions?.join(", ")||"tipos específicos"}`:M.type==="max-files-exceeded"&&(z=`Máximo ${M.data?.maxFiles} archivos permitidos (intentaste subir ${M.data?.totalAttempted||"varios"})`)}),e.value=k,o.value=z}function c(h){console.log("📁 Archivos actualizados:",h.length),t.value=h,h.length>=0&&(e.value="",o.value=""),h.length>0&&!i.value&&F(h)}function E(){l.value=!1,v.value={},d.value={},e.value="",o.value="",t.value.length>0&&F(t.value)}function w(){t.value=[],i.value=!1,l.value=!1,e.value="",o.value="",d.value={},v.value={}}return{files:t,uploading:i,uploadError:l,validationErrorMsg:e,maxFilesErrorMsg:o,fileProgress:d,fileErrors:v,handleValidationError:m,handleUpdate:c,handleRetry:E,handleClearAll:w}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:V,GConfigProvider:T},setup(){return{handleDownload:()=>{q("download")();const i=document.createElement("a");i.href="data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.",i.download="plantilla-ejemplo.txt",i.click()}}},template:`
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
    `})},J={name:"Con Link de Descarga",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:V,GConfigProvider:T},setup(){const t=S([]),i=S([]);return{files:t,filesWithError:i,handleUpdate:e=>{t.value=e,q("update:model-value")(e)}}},template:`
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
    `})},Y={name:"Integración con Formularios",parameters:{docs:{description:{story:"Integración del componente GAttachFile con GForm y validaciones de formulario."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:V,GConfigProvider:T,GForm:xe,GFormItem:ye,GButton:de,GInput:be},setup(){const t=S(),i=Le({name:"",documents:[]}),l={name:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],documents:[{required:!0,message:"Debe adjuntar al menos un documento",trigger:"change"},{validator:(F,m,c)=>{if(!m||m.length===0){c(new Error("Los documentos son obligatorios"));return}if(!m.some(h=>h.name.toLowerCase().endsWith(".pdf"))){c(new Error("Debe incluir al menos un documento PDF"));return}if(!m.every(h=>{const k=h.name.toLowerCase();return k.length>10||k.includes("documento")||k.includes("certificado")||k.includes("comprobante")})){c(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));return}c()},trigger:"change"}]},e=S([]);async function o(){if(t.value)try{await t.value.validate()&&(console.log("Formulario válido:",i),alert("¡Documentos enviados exitosamente!"))}catch(F){console.error("Error de validación:",F)}}function d(){t.value&&(t.value.resetFields(),e.value=[])}return{formRef:t,formData:i,rules:l,validationErrors:e,handleSubmit:o,handleReset:d,handleValidationError:F=>{q("validation-error")(F);const m=F.map(c=>{switch(c.type){case"file-size-exceeded":return`"${c.file?.name}" excede ${c.data?.maxSize}`;case"invalid-file-type":return`"${c.file?.name}" tipo no válido. Solo ${c.data?.acceptedExtensions?.join(", ")}`;case"max-files-exceeded":return`Máximo ${c.data?.maxFiles} archivos permitidos`;default:return"Error de validación"}});e.value=m,setTimeout(()=>e.value=[],5e3)}}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:V,GConfigProvider:T,GButton:de},setup(){const t=S([]),i=S();return{files:t,attachFileRef:i,addMockFiles:()=>{const d=[new File(["contenido PDF de ejemplo"],"documento-ejemplo.pdf",{type:"application/pdf"}),new File(["contenido imagen de ejemplo"],"imagen-ejemplo.jpg",{type:"image/jpeg"})];Object.defineProperty(d[0],"size",{value:1024*500}),Object.defineProperty(d[1],"size",{value:1024*800}),i.value?.addFiles&&i.value.addFiles(d)},addSingleFile:()=>{const d=new File(["contenido de texto"],"nota.txt",{type:"text/plain"});Object.defineProperty(d,"size",{value:1024*100}),i.value?.addFiles&&i.value.addFiles([d])},clearFiles:()=>{t.value=[]}}},template:`
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
}`,...W.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};const Xa=["Primary","DragDrop","ComponentStates","FlujoCargaCompleto","DownloadMode","DownloadLink","FormIntegration","AddFilesMethod"];export{Q as AddFilesMethod,H as ComponentStates,J as DownloadLink,Z as DownloadMode,_ as DragDrop,K as FlujoCargaCompleto,Y as FormIntegration,W as Primary,Xa as __namedExportsOrder,Qa as default};
