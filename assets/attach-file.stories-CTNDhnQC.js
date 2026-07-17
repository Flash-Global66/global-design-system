import{c as p,w as Ge,r as y,d as de,t as v,b as c,l as B,k as s,u as a,j as h,n as $,q as le,x as A,a as G,F as N,y as pe,f as ie,z as $e,N as W,a1 as xe,p as Le,e as Ne,C as Oe}from"./vue.esm-bundler-Deokl1F5.js";import{a as q}from"./index-Br0BFi8U.js";import{b as ke,d as fe}from"./props.util-Dtwzmmnf.js";import{z as _e,L as We}from"./index-iviVQk4X.js";import{d as He,w as Se}from"./error.util-CmMZjXeT.js";import{t as ge}from"./index-BmLAfq-y.js";import{_ as se}from"./index-B-U0DsHd.js";import{c as ce}from"./useEmptyValues-S5EffpHc.js";import{G as V}from"./ConfigProvider-DiWOjIRd.js";import{G as De,a as Re}from"./index-BqTclQlI.js";import{G as me}from"./index-DplprqvC.js";import{G as ze}from"./index-My2UDBtR.js";import{a as Ke,b as be}from"./documentation-stories-ZyKnmB2F.js";import"./v4-CtRu48qb.js";import"./index-D9lthdDW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CRx4dHSJ.js";import"./index-Cla1j_Lq.js";import"./useFocusController-C2BXcCNp.js";import"./useAttrs-DU4L9I3P.js";import"./event.constant-LtAI3-H4.js";import"./index-BXyPvuAD.js";const Fe={UPLOAD:"upload",DOWNLOAD:"download"},C={SUCCESS:"success",ERROR:"error",LOADING:"loading"},Ze=ke({modelValue:{type:fe(Array),default:()=>[]},type:{type:String,values:["default","drag-drop"],default:"default"},mode:{type:String,values:Object.values(Fe),default:Fe.UPLOAD},inputId:{type:String,default:void 0},acceptExtNames:{type:Array,default:()=>[]},maxSize:{type:String,default:"10MB"},multiple:{type:Boolean,default:!0},maxFiles:{type:Number,default:void 0},disabled:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},uploadButtonText:{type:String,default:""},title:{type:String,default:""},uploadText:{type:String,default:""},restrictionText:{type:String,default:""},infoText:{type:String,default:""},downloadUrl:{type:String,default:""},downloadLinkText:{type:String,default:""},uploading:{type:Boolean,default:!1},uploadError:{type:[Boolean,String],default:!1},fileErrors:{type:Object,default:()=>({})},fileProgress:{type:Object,default:()=>({})},errors:{type:Array,default:()=>[]},showFileSize:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showUploadButton:{type:Boolean,default:!0}}),Je={"update:modelValue":o=>!0,change:o=>!0,error:o=>!0,"validation-error":o=>!0,onRetry:()=>!0,download:()=>!0,clearProgress:()=>!0},Ee={b:1,kb:1024,mb:1024*1024,gb:1024*1024*1024,tb:1024*1024*1024*1024},Qe=["Bytes","KB","MB","GB","TB"];function ne(o){if(o===0)return"0 Bytes";const r=1024,i=Math.floor(Math.log(o)/Math.log(r));return parseFloat((o/Math.pow(r,i)).toFixed(2))+" "+Qe[i]}function Me(o){if(!o||typeof o!="string")return 0;const r=/^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i,i=o.trim().match(r);if(!i)return 0;const e=parseFloat(i[1]),t=i[2].toLowerCase();return Ee[t]?Math.floor(e*Ee[t]):0}function Xe(o,r,i="change"){o&&r&&r.validate(i).catch(e=>He())}function we(o){return o?Array.from(o):[]}function ve(o,r=!1,i=!1){!r&&!i&&o.value&&o.value.click()}function ye(o,r,i,e,t){return r[o]||i?C.ERROR:e||t[o]!==void 0?C.LOADING:C.SUCCESS}function Be(o,r,i=!1,e=!1){return function(d){if(i&&e)return;const x=[...o];x.splice(d,1),r("update:modelValue",x),r("change",x)}}function Ae(o){return o.length>0?o[0]:""}function Ye(o,r){const{formItem:i}=We(),{inputId:e}=_e(o,{formItemContext:i||void 0}),t=p(()=>o.modelValue||[]),d=p(()=>o.multiple??!0),x=p(()=>o.validateEvent??!0),k=p(()=>o.uploading??!1),u=p(()=>o.uploadError??!1),m=p(()=>o.fileErrors||{}),R=p(()=>o.fileProgress||{}),S=p(()=>{const l={};return t.value.forEach((b,z)=>{l[z]=ye(z,m.value,!!u.value,k.value,R.value)}),l}),F=p(()=>{const l=[];return o.errors&&Array.isArray(o.errors)&&o.errors.forEach(b=>{typeof b=="string"&&b.trim()&&!l.includes(b)&&l.push(b)}),i?.shouldShowErrorChild&&i?.validateMessage&&(l.includes(i.validateMessage)||l.push(i.validateMessage)),u.value&&typeof u.value=="string"&&(l.includes(u.value)||l.push(u.value)),Object.values(m.value).forEach(b=>{typeof b=="string"&&b&&!l.includes(b)&&l.push(b)}),l});function E(l){const b=[],z=[],g=o.acceptExtNames?.map(j=>j.toLowerCase())||[],M=d.value?t.value:[];if(o.maxFiles&&M.length+l.length>o.maxFiles){b.push({type:"max-files-exceeded",data:{maxFiles:o.maxFiles,currentFiles:M.length,attemptedFiles:l.length,totalAttempted:M.length+l.length}}),r("validation-error",b);return}if(l.forEach(j=>{let L=!0;if(o.maxSize){const I=Me(o.maxSize);I&&j.size>I&&(b.push({type:"file-size-exceeded",file:j,data:{maxSize:o.maxSize,actualSize:j.size}}),L=!1)}if(g.length>0){const I="."+j.name.split(".").pop()?.toLowerCase();g.includes(I)||(b.push({type:"invalid-file-type",file:j,data:{acceptedExtensions:o.acceptExtNames,actualExtension:I}}),L=!1)}L&&z.push(j)}),b.length>0){r("validation-error",b);return}if(z.length>0){const j=d.value?[...t.value,...z]:z;r("update:modelValue",j),r("change",j),Xe(x.value||!1,i)}}function P(l){const b=l.target;b.files&&(E(we(b.files)),b.value="")}function D(l){E(we(l))}Ge(()=>k.value,l=>{l||r("clearProgress")},{immediate:!0});const f=y(null);function n(){o.type==="default"&&f.value?.openFilePicker()}return{modelValue:t,fileStatuses:S,displayErrors:F,fileErrors:m,fileProgress:R,inputId:e,multiple:d,uploading:k,uploadError:u,defaultTypeRef:f,onFileInputChange:P,onFilesDrop:D,addFiles:E,openFilePicker:n}}const ea=ke({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:o=>o>=0&&o<=100},status:{type:String,default:"primary",values:["primary","success","error","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:fe(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},format:{type:fe(Function),default:o=>`${o}%`}}),aa=["aria-valuenow"],ta={viewBox:"0 0 100 100"},oa=["d","stroke","stroke-linecap","stroke-width"],ra=["d","stroke","opacity","stroke-linecap","stroke-width"],la={key:1},ia=de({name:"Progress",__name:"progress",props:ea,setup(o){const r={primary:"--color-progress-primary",success:"--color-progress-success",error:"--color-progress-error",warning:"--color-progress-warning"},i=o,e=ce("progress"),t=p(()=>{const n={width:`${i.percentage}%`,animationDuration:`${i.duration}s`},l=r[i.status]||r.primary;return n.backgroundColor=`var(${l})`,n}),d=p(()=>(i.strokeWidth/i.width*100).toFixed(1)),x=p(()=>["circle","dashboard"].includes(i.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),k=p(()=>{const n=x.value,l=i.type==="dashboard";return`
            M 50 50
            m 0 ${l?"":"-"}${n}
            a ${n} ${n} 0 1 1 0 ${l?"-":""}${n*2}
            a ${n} ${n} 0 1 1 0 ${l?"":"-"}${n*2}
            `}),u=p(()=>2*Math.PI*x.value),m=p(()=>i.type==="dashboard"?.75:1),R=p(()=>`${-1*u.value*(1-m.value)/2}px`),S=p(()=>({strokeDasharray:`${u.value*m.value}px, ${u.value}px`,strokeDashoffset:R.value})),F=p(()=>({strokeDasharray:`${u.value*m.value*(i.percentage/100)}px, ${u.value}px`,strokeDashoffset:R.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),E=p(()=>`var(${r[i.status]||r.primary})`),P=p(()=>i.status==="warning"?"solid exclamation-circle":i.type==="line"?i.status==="success"?"regular check-circle":"regular circle-xmark":i.status==="success"?"regular check":"regular times"),D=p(()=>i.type==="line"?12+i.strokeWidth*.4:i.width*.111111+2),f=p(()=>i.format(i.percentage));return(n,l)=>(c(),v("div",{class:s([a(e).b(),a(e).m(n.type),a(e).is(n.status),{[a(e).m("without-text")]:!n.showText,[a(e).m("text-inside")]:n.textInside}]),id:"MAIN-DIV",role:"progressbar","aria-valuenow":n.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[n.type==="line"?(c(),v("div",{key:0,class:s(a(e).b("bar"))},[h("div",{class:s(a(e).be("bar","outer")),style:$({height:`${n.strokeWidth}px`})},[h("div",{class:s([a(e).be("bar","inner"),{[a(e).bem("bar","inner","indeterminate")]:n.indeterminate}]),style:$(t.value)},[(n.showText||n.$slots.default)&&n.textInside?(c(),v("div",{key:0,class:s(a(e).be("bar","innerText"))},[le(n.$slots,"default",{percentage:n.percentage},()=>[h("span",null,A(f.value),1)])],2)):B("",!0)],6)],6)],2)):(c(),v("div",{key:1,class:s(a(e).b("circle")),style:$({height:`${n.width}px`,width:`${n.width}px`})},[(c(),v("svg",ta,[h("path",{class:s(a(e).be("circle","track")),d:k.value,stroke:`var(${a(e).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":n.strokeLinecap,"stroke-width":d.value,fill:"none",style:$(S.value)},null,14,oa),h("path",{class:s(a(e).be("circle","path")),d:k.value,stroke:E.value,fill:"none",opacity:n.percentage?1:0,"stroke-linecap":n.strokeLinecap,"stroke-width":d.value,style:$(F.value)},null,14,ra)]))],6)),(n.showText||n.$slots.default)&&!n.textInside?(c(),v("div",{key:2,class:s(a(e).e("text")),style:$({fontSize:`${D.value}px`})},[le(n.$slots,"default",{percentage:n.percentage},()=>[n.loading?(c(),G(a(se),{key:0,name:"regular spinner",spin:""})):!n.status||n.status==="primary"?(c(),v("span",la,A(f.value),1)):(c(),G(a(se),{key:2,name:P.value},null,8,["name"]))])],6)):B("",!0)],10,aa))}}),Pe=Se(ia),sa=["multiple","accept","disabled","aria-label","aria-describedby"],na=["href","aria-label"],Ce=de({__name:"default-type",props:{id:{},mode:{default:"upload"},title:{},infoText:{},uploadError:{type:Boolean,default:!1},downloadUrl:{default:""},downloadLinkText:{default:""},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{default:()=>[]},fileErrors:{default:()=>({})},fileProgress:{default:()=>({})},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean},showUploadButton:{type:Boolean,default:!0}},emits:["update:modelValue","change","error","onRetry","download","file-input-change"],setup(o,{expose:r,emit:i}){const e=ce("attach-file"),t=o,d=i,x=y();function k(){t.mode==="download"?d("download"):t.uploadError||Object.keys(t.fileErrors).length>0?d("onRetry"):ve(x,t.disabled,t.uploading)}function u(l){d("file-input-change",l)}const m=p(()=>t.modelValue||[]),R=p(()=>m.value.length>0),S=p(()=>t.multiple||t.uploadError),F=p(()=>t.uploadError?"error":t.uploading?"loading":m.value.length>0?"success":"default"),E=p(()=>Ae(t.errors)),P=p(()=>t.mode==="download"?"solid download":"solid upload"),D=Be(t.modelValue,d),f=l=>ye(l,t.fileErrors,t.uploadError,t.uploading,t.fileProgress);function n(){ve(x,t.disabled,t.uploading)}return r({hiddenFileInput:x,openFilePicker:n}),(l,b)=>(c(),v("div",{class:s(a(e).e("default-type"))},[h("input",{ref_key:"hiddenFileInput",ref:x,type:"file",multiple:l.multiple,accept:l.acceptExtNames.join(","),disabled:l.disabled,class:s(a(e).e("hidden-input")),"aria-label":l.title||void 0,"aria-describedby":l.infoText?`${l.id||"attach-file"}-info`:void 0,onChange:u},null,42,sa),h("div",{class:s(a(e).e("content"))},[h("div",{class:s([a(e).e("header"),{[a(e).is("with-file-list")]:R.value}])},[h("div",{class:s(a(e).e("header-content"))},[h("p",{class:s(a(e).e("title"))},A(l.title),3),S.value?(c(),v("p",{key:0,class:s(a(e).e("info-text"))},A(l.infoText),3)):B("",!0),l.downloadUrl&&l.downloadLinkText?(c(),v("a",{key:1,href:l.downloadUrl,target:"_blank",rel:"noopener noreferrer",class:s(a(e).e("download-link")),"aria-label":`${l.downloadLinkText} (opens in new tab)`},A(l.downloadLinkText),11,na)):B("",!0)],2),t.showUploadButton?(c(),G(a(ge),{key:0,icon:P.value,variant:"blue",border:"",rounded:"",size:"medium",onClick:k,disabled:l.disabled},null,8,["icon","disabled"])):B("",!0)],2),F.value==="loading"?(c(),v("div",{key:0,class:s(a(e).e("files-list"))},[h("div",{class:s(a(e).e("files-container"))},[(c(!0),v(N,null,pe(l.modelValue,(z,g)=>(c(),v("div",{key:g,class:s(a(e).e("file-item"))},[h("div",{class:s(a(e).e("file-item-content"))},[ie(a(Pe),{percentage:l.fileProgress[g]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),h("div",{class:s(a(e).e("file-item-info"))},[h("span",{class:s(a(e).e("file-item-name"))},A(z.name),3),h("span",{class:s(a(e).e("file-item-size"))},A(a(ne)(z.size)),3)],2)],2)],2))),128))],2)],2)):R.value?(c(),v("div",{key:1,class:s(a(e).em("file-list","clean"))},[(c(!0),v(N,null,pe(m.value,(z,g)=>(c(),v("div",{key:g,class:s(a(e).e("item"))},[h("div",{class:s(a(e).e("item-content"))},[h("div",{class:s(a(e).e("file-status-icon"))},[ie(a(se),{name:f(g)===a(C).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:f(g)!==a(C).ERROR,[a(e).is("error")]:f(g)===a(C).ERROR}])},null,8,["name","class"])],2),h("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:f(g)===a(C).ERROR,[a(e).is("success")]:f(g)!==a(C).ERROR}])},A(z.name),3)],2),h("div",{class:s(a(e).e("item-actions"))},[t.showFileSize?(c(),v("span",{key:0,class:s(a(e).e("file-size"))},A(a(ne)(z.size)),3)):B("",!0),t.showRemoveButton?(c(),G(a(ge),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:t.disabled,onClick:M=>!t.disabled&&a(D)(g)},null,8,["disabled","onClick"])):B("",!0)],2)],2))),128))],2)):B("",!0),l.$slots["extra-content"]?(c(),v("div",{key:2,class:s(a(e).e("extra-content"))},[le(l.$slots,"extra-content")],2)):B("",!0)],2),E.value?(c(),v("div",{key:0,class:s(a(e).e("validation-errors"))},[h("p",{class:s(a(e).e("error-text"))},A(E.value),3)],2)):B("",!0)],2))}});Ce.__docgenInfo={exportName:"default",displayName:"default-type",description:"",tags:{},expose:[{name:"hiddenFileInput"},{name:"openFilePicker"}],props:[{name:"showUploadButton",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showRemoveButton",required:!0,type:{name:"boolean"}},{name:"showFileSize",required:!0,type:{name:"boolean"}},{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"}},{name:"mode",required:!1,type:{name:"AttachFileMode"},defaultValue:{func:!1,value:"'upload'"}},{name:"title",required:!0,type:{name:"string"}},{name:"infoText",required:!0,type:{name:"string"}},{name:"uploadError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"downloadUrl",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"downloadLinkText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"download"},{name:"file-input-change"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/default-type.vue"]};const da=["aria-label","aria-describedby"],ca=["disabled"],ma=["id"],ua=["multiple","accept","disabled","aria-label"],je=de({__name:"drag-drop-type",props:{id:{default:void 0},uploadButtonText:{},uploadText:{},restrictionText:{default:""},maxSize:{default:""},maxFiles:{default:void 0},loadingState:{type:Boolean,default:!1},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{},fileErrors:{},fileProgress:{},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean},showUploadButton:{type:Boolean,default:!0}},emits:["update:modelValue","change","error","onRetry","file-input-change","files-drop"],setup(o,{expose:r,emit:i}){const e=ce("attach-file"),t=o,d=i,x=y(),k=y(),u=y(!1),m=y(0),R=p(()=>t.modelValue||[]),S=p(()=>t.loadingState||t.uploading),F=p(()=>t.maxSize?Me(t.maxSize):0),E=p(()=>t.restrictionText||""),P=p(()=>Ae(t.errors)),D=p(()=>Be(R.value,d,!0,S.value)),f=w=>ye(w,t.fileErrors,!1,t.uploading,t.fileProgress);function n(){ve(x,t.disabled,S.value)}function l(w){d("file-input-change",w)}function b(w){w.preventDefault(),m.value++,u.value=!0}function z(w){w.preventDefault(),m.value--,m.value===0&&(u.value=!1)}function g(w){w.preventDefault()}function M(w){if(w.preventDefault(),m.value=0,u.value=!1,t.disabled||S.value)return;const O=w.dataTransfer?.files;O&&O.length>0&&d("files-drop",O)}const j=()=>n(),L=()=>n(),I=w=>{w.preventDefault(),n()},Te=w=>{w.stopPropagation(),Object.keys(t.fileErrors).length>0||t.errors.length>0?d("onRetry"):n()},Ve=w=>g(w),qe=w=>b(w),Ue=w=>z(w),Ie=w=>M(w);return r({fileInput:x,openFileDialog:n}),(w,O)=>(c(),v("div",{class:s(a(e).e("drag-drop-type"))},[h("div",{ref_key:"dropZone",ref:k,class:s([a(e).e("drop-zone"),{[a(e).is("dragging")]:u.value,[a(e).is("error")]:t.errors.length>0,[a(e).is("disabled")]:t.disabled,[a(e).is("loading")]:S.value}]),role:"button",tabindex:"0","aria-label":`${t.uploadButtonText}. ${E.value||""}`,"aria-describedby":t.restrictionText||t.acceptExtNames.length||F.value?`${t.id||"drag-drop"}-restriction`:void 0,onClick:j,onKeydown:[xe(L,["enter"]),xe(I,["space"])],onDragover:W(Ve,["prevent"]),onDragenter:W(qe,["prevent"]),onDragleave:W(Ue,["prevent"]),onDrop:W(Ie,["prevent"])},[h("div",{class:s(a(e).e("text-content"))},[h("p",{class:s(a(e).e("main-text"))},[t.showUploadButton?(c(),v("button",{key:0,type:"button",class:s(a(e).e("upload-button")),disabled:t.disabled||S.value,onClick:Te},A(t.uploadButtonText),11,ca)):B("",!0),$e(" "+A(t.uploadText),1)],2),t.restrictionText||t.acceptExtNames.length||F.value?(c(),v("p",{key:0,class:s(a(e).e("restriction-text")),id:`${t.id||"drag-drop"}-restriction`},A(t.restrictionText||E.value),11,ma)):B("",!0)],2),h("input",{ref_key:"fileInput",ref:x,type:"file",multiple:t.multiple,accept:t.acceptExtNames.join(","),disabled:t.disabled||S.value,class:s(a(e).e("hidden-input")),"aria-label":`${t.uploadButtonText} - ${E.value||""}`,onChange:l},null,42,ua)],42,da),R.value.length>0?(c(),v("div",{key:0,class:s(a(e).em("file-list","boxed"))},[(c(!0),v(N,null,pe(R.value,(_,U)=>(c(),v("div",{key:U,class:s([a(e).e("item"),{[a(e).is("loading")]:S.value}])},[h("div",{class:s(a(e).e("item-content"))},[S.value?(c(),v("div",{key:0,class:s(a(e).e("file-item-content"))},[ie(a(Pe),{percentage:t.fileProgress[U]||0,type:"line","stroke-width":7,"show-text":!1,class:s(a(e).e("file-item-progress"))},null,8,["percentage","class"]),h("div",{class:s(a(e).e("file-item-info"))},[h("span",{class:s(a(e).e("file-item-name"))},A(_.name),3),t.showFileSize?(c(),v("span",{key:0,class:s(a(e).e("file-item-size"))},A(a(ne)(_.size)),3)):B("",!0)],2)],2)):(c(),v(N,{key:1},[h("div",{class:s(a(e).e("file-status-icon"))},[ie(a(se),{name:f(U)===a(C).ERROR?"solid times":"solid check",class:s([a(e).e("icon"),{[a(e).is("success")]:f(U)!==a(C).ERROR,[a(e).is("error")]:f(U)===a(C).ERROR}])},null,8,["name","class"])],2),h("span",{class:s([a(e).e("file-name"),{[a(e).is("error")]:f(U)===a(C).ERROR,[a(e).is("success")]:f(U)!==a(C).ERROR}])},A(_.name),3)],64))],2),h("div",{class:s(a(e).e("item-actions"))},[S.value?B("",!0):(c(),v(N,{key:0},[t.showFileSize?(c(),v("span",{key:0,class:s(a(e).e("file-size"))},A(a(ne)(_.size)),3)):B("",!0),t.showRemoveButton?(c(),G(a(ge),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:t.disabled,onClick:fa=>!t.disabled&&D.value(U)},null,8,["disabled","onClick"])):B("",!0)],64))],2)],2))),128))],2)):B("",!0),P.value?(c(),v("div",{key:1,class:s(a(e).e("validation-errors"))},[h("p",{class:s(a(e).e("error-text"))},A(P.value),3)],2)):B("",!0)],2))}});je.__docgenInfo={exportName:"default",displayName:"drag-drop-type",description:"",tags:{},expose:[{name:"fileInput"},{name:"openFileDialog"}],props:[{name:"showUploadButton",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showRemoveButton",required:!0,type:{name:"boolean"}},{name:"showFileSize",required:!0,type:{name:"boolean"}},{name:"uploading",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fileStatuses",required:!1,type:{name:"Record",elements:[{name:"number"},{name:"FileStatus"}]},defaultValue:{func:!1,value:"() => (({}) as Record<number, FileStatus>)"}},{name:"fileProgress",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"number"}]}},{name:"fileErrors",required:!0,type:{name:"Record",elements:[{name:"number"},{name:"string"}]}},{name:"errors",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"disabled",required:!0,type:{name:"boolean"}},{name:"acceptExtNames",required:!0,type:{name:"Array",elements:[{name:"string"}]}},{name:"multiple",required:!0,type:{name:"boolean"}},{name:"modelValue",required:!0,type:{name:"Array",elements:[{name:"File"}]}},{name:"id",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"uploadButtonText",required:!0,type:{name:"string"}},{name:"uploadText",required:!0,type:{name:"string"}},{name:"restrictionText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxSize",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxFiles",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"loadingState",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"uploadProgress",defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"error"},{name:"onRetry"},{name:"file-input-change"},{name:"files-drop"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/drag-drop-type.vue"]};const he=de({name:"GAttachFile",__name:"attach-file",props:Ze,emits:Je,setup(o,{expose:r,emit:i}){const e=o,t=i,{modelValue:d,fileStatuses:x,displayErrors:k,fileErrors:u,fileProgress:m,inputId:R,multiple:S,uploading:F,uploadError:E,defaultTypeRef:P,onFileInputChange:D,onFilesDrop:f,addFiles:n,openFilePicker:l}=Ye(e,t),b=ce("attach-file");return r({addFiles:n,openFilePicker:l}),(z,g)=>(c(),v("div",{class:s(a(b).b())},[e.type==="default"?(c(),G(Ce,{key:0,ref_key:"defaultTypeRef",ref:P,id:a(R),"model-value":a(d),mode:e.mode,title:e.title,"info-text":e.infoText,"download-url":e.downloadUrl,"download-link-text":e.downloadLinkText,multiple:a(S),"accept-ext-names":e.acceptExtNames,disabled:e.disabled,uploading:a(F),"upload-error":!!a(E),"file-statuses":a(x),errors:a(k),"file-errors":a(u),"file-progress":a(m),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"show-upload-button":e.showUploadButton,"onUpdate:modelValue":g[0]||(g[0]=M=>t("update:modelValue",M)),onChange:g[1]||(g[1]=M=>t("change",M)),onError:g[2]||(g[2]=M=>t("error",M)),onOnRetry:g[3]||(g[3]=M=>t("onRetry")),onDownload:g[4]||(g[4]=M=>t("download")),onFileInputChange:a(D)},Le({_:2},[z.$slots["extra-content"]?{name:"extra-content",fn:Ne(()=>[le(z.$slots,"extra-content")]),key:"0"}:void 0]),1032,["id","model-value","mode","title","info-text","download-url","download-link-text","multiple","accept-ext-names","disabled","uploading","upload-error","file-statuses","errors","file-errors","file-progress","show-file-size","show-remove-button","show-upload-button","onFileInputChange"])):e.type==="drag-drop"?(c(),G(je,{key:1,id:a(R),"model-value":a(d),"upload-button-text":e.uploadButtonText,"upload-text":e.uploadText,"restriction-text":e.restrictionText,"accept-ext-names":e.acceptExtNames,multiple:a(S),disabled:e.disabled,"max-size":e.maxSize,"max-files":e.maxFiles,uploading:e.uploading,errors:a(k),"file-errors":a(u),"file-progress":a(m),"file-statuses":a(x),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"show-upload-button":e.showUploadButton,"onUpdate:modelValue":g[5]||(g[5]=M=>t("update:modelValue",M)),onChange:g[6]||(g[6]=M=>t("change",M)),onError:g[7]||(g[7]=M=>t("error",M)),onFileInputChange:a(D),onFilesDrop:a(f)},null,8,["id","model-value","upload-button-text","upload-text","restriction-text","accept-ext-names","multiple","disabled","max-size","max-files","uploading","errors","file-errors","file-progress","file-statuses","show-file-size","show-remove-button","show-upload-button","onFileInputChange","onFilesDrop"])):B("",!0)],2))}});he.__docgenInfo={name:"GAttachFile",exportName:"default",displayName:"attach-file",description:"",tags:{},expose:[{name:"addFiles"},{name:"openFilePicker"}],slots:[{name:"extra-content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/attach-file/src/attach-file.vue"]};const T=Se(he,{AttachFile:he}),pa="1.4.24",ue={"@flash-global66/g-form":"1.0.0","@flash-global66/g-icon-button":"0.2.2","@flash-global66/g-icon-font":"0.6.0","@flash-global66/g-progress":"0.2.0",vue:"3.2.0"},qa={title:"Form/Attach File",component:T,parameters:{docs:{description:{component:`
El componente Attach File permite cargar archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (compacto) y drag-drop (arrastrar y soltar).

> Versión actual: ${pa}

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
${Ke(ue)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${be(ue)}

# Dependencias externas  
yarn add ${be(ue,!0)}
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
`}}},argTypes:{modelValue:{description:"Array de archivos seleccionados (v-model)",control:"object",table:{category:"Principales",type:{summary:"File[]"},defaultValue:{summary:"[]"}}},type:{description:"Tipo de visualización del componente. Define la apariencia y comportamiento de la interfaz.",control:"select",options:["default","drag-drop"],table:{category:"Principales",type:{summary:"'default' | 'drag-drop'"},defaultValue:{summary:"'default'"}}},mode:{description:"Modo operacional del componente. En modo 'download' cambia el comportamiento del botón principal para emitir evento 'download' en lugar de activar selector de archivos.",control:"select",options:["upload","download"],table:{category:"Principales",type:{summary:"'upload' | 'download'"},defaultValue:{summary:"'upload'"}}},multiple:{description:"Permite seleccionar múltiples archivos mediante el input file.",control:"boolean",table:{category:"Principales",type:{summary:"boolean"},defaultValue:{summary:"true"}}},acceptExtNames:{description:"Array de extensiones permitidas. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"object",table:{category:"Validación Automática",type:{summary:"string[]"},defaultValue:{summary:"[]"}}},maxSize:{description:"Tamaño máximo permitido (ej: '10MB'). El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'. Para permitir cualquier tamaño, pasa undefined, null o cadena vacía ''.",control:"text",table:{category:"Validación Automática",type:{summary:"string | undefined"},defaultValue:{summary:"'10MB'"}}},maxFiles:{description:"Número máximo de archivos. El componente valida automáticamente y emite errores estructurados a través del evento 'onValidationError'.",control:"number",table:{category:"Validación Automática",type:{summary:"number"},defaultValue:{summary:"undefined"}}},uploading:{description:"Estado de carga/upload en progreso. Muestra indicadores de carga.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},uploadError:{description:"Estado de error de carga. Valor booleano controla el estado visual; valor string proporciona mensaje específico de error.",control:"select",options:[!1,!0,"Error personalizado en la carga"],table:{category:"Estados",type:{summary:"boolean | string"},defaultValue:{summary:"false"}}},fileErrors:{description:"Errores específicos por archivo. Índice del archivo como clave y mensaje de error como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, string>"},defaultValue:{summary:"{}"}}},fileProgress:{description:"Progreso específico por archivo. Índice del archivo como clave y porcentaje (0-100) como valor.",control:"object",table:{category:"Estados",type:{summary:"Record<number, number>"},defaultValue:{summary:"{}"}}},disabled:{description:"Deshabilita el componente completamente.",control:"boolean",table:{category:"Estados",type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{description:"Título del componente. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Seleccionar archivo'"}}},uploadButtonText:{description:"Texto del botón de carga. Se usa en tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'Haz clic para cargar'"}}},uploadText:{description:"Texto adicional junto al botón. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"'un archivo o arrástralo aquí'"}}},restrictionText:{description:"Texto personalizado de restricciones. Solo para tipo 'drag-drop'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},infoText:{description:"Texto informativo adicional. Solo para tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadUrl:{description:"URL del archivo para descargar. Se muestra como un link debajo del texto informativo. Solo visible en tipo 'default' cuando se proporciona junto con downloadLinkText.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},downloadLinkText:{description:"Texto del enlace de descarga. Requerido junto con downloadUrl para mostrar el link. Solo visible en tipo 'default'.",control:"text",table:{category:"Interfaz",type:{summary:"string"},defaultValue:{summary:"''"}}},showFileSize:{description:"Controla la visibilidad del tamaño del archivo en la lista de archivos cargados.",control:"boolean",table:{category:"Interfaz",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showRemoveButton:{description:"Controla la visibilidad del botón de eliminar en la lista de archivos cargados.",control:"boolean",table:{category:"Interfaz",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showUploadButton:{description:"Controla la visibilidad del botón principal. En tipo 'default', al establecer false se oculta el ícono interno y el componente queda sin disparador de UI para abrir el selector (puede usarse openFilePicker de forma programática). Según el estado/modo, también puede ocultar acciones como reintento o descarga.",control:"boolean",table:{category:"Interfaz",type:{summary:"boolean"},defaultValue:{summary:"true"}}},validateEvent:{description:"Activa la validación del formulario cuando se modifican los archivos.",control:"boolean",table:{category:"Formularios",type:{summary:"boolean"},defaultValue:{summary:"true"}}},inputId:{description:"ID único para el elemento input file interno y las asociaciones de accesibilidad (aria-describedby). Se usa principalmente para integración con formularios y etiquetas de accesibilidad. Si no se proporciona, se genera automáticamente cuando está dentro de un FormItem.",control:"text",table:{category:"Formularios",type:{summary:"string"},defaultValue:{summary:"undefined"}}},"onUpdate:modelValue":{description:"Evento emitido cuando cambian los archivos seleccionados.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onChange:{description:"Evento emitido cuando se modifica la selección de archivos.",table:{category:"Eventos",type:{summary:"(files: File[]) => void"}}},onError:{description:"Evento emitido cuando ocurren errores durante la validación o manipulación de archivos.",table:{category:"Eventos",type:{summary:"(error: string | Error) => void"}}},onValidationError:{description:"Evento emitido con errores de validación estructurados. Recibe un array de objetos ValidationError con propiedades: type ('file-size-exceeded' | 'invalid-file-type' | 'max-files-exceeded'), file (opcional), message (opcional), y data (información adicional específica del error).",table:{category:"Eventos",type:{summary:"(errors: ValidationError[]) => void"}}},onRetry:{description:"Evento emitido cuando se hace clic en reintentar después de un error.",table:{category:"Eventos",type:{summary:"() => void"}}},onClearProgress:{description:"Evento emitido automáticamente cuando el estado 'uploading' cambia de true a false.",table:{category:"Eventos",type:{summary:"() => void"}}},onDownload:{description:"Evento emitido en modo download cuando se hace clic en el botón.",table:{category:"Eventos",type:{summary:"() => void"}}},addFiles:{description:"Método público para agregar archivos programáticamente. Aplica todas las validaciones automáticas del componente (tamaño, tipo, cantidad) antes de añadir los archivos válidos al modelo.",table:{category:"Métodos Públicos",type:{summary:"(files: File[]) => void"}}},openFilePicker:{description:"Abre el diálogo de selección de archivos de forma programática. Solo disponible para type='default'.",table:{category:"Métodos Públicos",type:{summary:"() => void"}}},"extra-content":{description:"Slot para agregar contenido adicional debajo de la lista de archivos. Útil para mostrar mensajes de error personalizados, información adicional o validaciones externas. Solo disponible en tipo 'default'.",table:{category:"Slots",type:{summary:"Slot"}}}},args:{type:"default",mode:"upload",modelValue:[],multiple:!0,acceptExtNames:[],maxSize:"10MB",maxFiles:void 0,uploading:!1,uploadError:!1,fileErrors:{},fileProgress:{},disabled:!1,title:"Seleccionar archivo",uploadButtonText:"Haz clic para cargar",uploadText:"un archivo o arrástralo aquí",restrictionText:"",infoText:"",downloadUrl:"",downloadLinkText:"",showFileSize:!0,showRemoveButton:!0,showUploadButton:!0,validateEvent:!0,inputId:void 0}},H={name:"Básico",args:{maxSize:"",acceptExtNames:[]},parameters:{docs:{description:{story:"Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=y([]);return{args:o,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},K={name:"Arrastrar y Soltar",parameters:{docs:{description:{story:"El tipo 'drag-drop' proporciona una zona de arastrar y soltar que acepta cualquier tipo de archivo y cualquier tamaño"},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const o=y([]);return{files:o,handleUpdate:t=>{o.value=t,q("update:model-value")(t)},handleValidationError:t=>{q("validation-error")(t)},handleChange:t=>{q("change")(t)}}},template:`
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
    `})},Z={name:"Estados del Componente",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const o=(u,m=1024e3,R="application/pdf")=>{const S=new File([""],u,{type:R});return Object.defineProperty(S,"size",{value:m}),S},r=y([]),i=y([o("documento1.pdf",1024e3),o("imagen1.jpg",2048e3,"image/jpeg")]),e=y([o("documento_error.pdf")]),t=y([]),d=y({0:"Error de conexión al servidor"});return{normalFiles:r,uploadingFiles:i,errorFiles:e,disabledFiles:t,fileErrors:d,handleUpdate:u=>m=>{u.value=m,q("update:model-value")(m)},handleRetry:()=>{q("onRetry")(),e.value=[],d.value={}}}},template:`
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
    `})},J={name:"Flujo de Carga Completo",parameters:{docs:{description:{story:`
Validaciones automáticas con manejo de mensajes de error.

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar más de 2 archivos → Error de cantidad
        `}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V,GForm:Re,GFormItem:De,GButton:me,GInput:ze},setup(){const o=y([]),r=y(!1),i=y(!1),e=y(""),t=y(""),d=y({}),x=y({}),k=async F=>{if(F.length===0)return;r.value=!0,i.value=!1,x.value={},d.value={};for(let f=0;f<F.length;f++)d.value={...d.value,[f]:0};const E=20,P=150;for(let f=0;f<=E;f++){await new Promise(l=>setTimeout(l,P));const n=Math.round(f/E*100);for(let l=0;l<F.length;l++){const b=Math.random()*10-5,z=Math.min(100,Math.max(0,n+b));d.value={...d.value,[l]:Math.round(z)}}}if(await new Promise(f=>setTimeout(f,500)),Math.random()<.6){const f=Math.floor(Math.random()*F.length),n=["Error de conexión al servidor","Archivo corrupto detectado","Formato no soportado por el servidor","Timeout en la carga"],l=n[Math.floor(Math.random()*n.length)];x.value={[f]:l}}r.value=!1};function u(F){let E="",P="";F.forEach(D=>{if(D)if(D.type==="file-size-exceeded"){const f=Math.round((D.file?.size||0)/1048576*100)/100;E=`"${D.file?.name}" (${f}MB) excede el límite de ${D.data?.maxSize||"2MB"}`}else D.type==="invalid-file-type"?E=`"${D.file?.name}" tipo no válido. Solo ${D.data?.acceptedExtensions?.join(", ")||"tipos específicos"}`:D.type==="max-files-exceeded"&&(P=`Máximo ${D.data?.maxFiles} archivos permitidos (intentaste subir ${D.data?.totalAttempted||"varios"})`)}),e.value=E,t.value=P}function m(F){console.log("📁 Archivos actualizados:",F.length),o.value=F,F.length>=0&&(e.value="",t.value=""),F.length>0&&!r.value&&k(F)}function R(){i.value=!1,x.value={},d.value={},e.value="",t.value="",o.value.length>0&&k(o.value)}function S(){o.value=[],r.value=!1,i.value=!1,e.value="",t.value="",d.value={},x.value={}}return{files:o,uploading:r,uploadError:i,validationErrorMsg:e,maxFilesErrorMsg:t,fileProgress:d,fileErrors:x,handleValidationError:u,handleUpdate:m,handleRetry:R,handleClearAll:S}},template:`
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
    `})},Q={name:"Modo Descarga",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){return{handleDownload:()=>{q("download")();const r=document.createElement("a");r.href="data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.",r.download="plantilla-ejemplo.txt",r.click()}}},template:`
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
    `})},X={name:"Con Link de Descarga",parameters:{docs:{description:{story:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const o=y([]),r=y([]);return{files:o,filesWithError:r,handleUpdate:e=>{o.value=e,q("update:model-value")(e)}}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V,GForm:Re,GFormItem:De,GButton:me,GInput:ze},setup(){const o=y(),r=Oe({name:"",documents:[]}),i={name:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],documents:[{required:!0,message:"Debe adjuntar al menos un documento",trigger:"change"},{validator:(k,u,m)=>{if(!u||u.length===0){m(new Error("Los documentos son obligatorios"));return}if(!u.some(F=>F.name.toLowerCase().endsWith(".pdf"))){m(new Error("Debe incluir al menos un documento PDF"));return}if(!u.every(F=>{const E=F.name.toLowerCase();return E.length>10||E.includes("documento")||E.includes("certificado")||E.includes("comprobante")})){m(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));return}m()},trigger:"change"}]},e=y([]);async function t(){if(o.value)try{await o.value.validate()&&(console.log("Formulario válido:",r),alert("¡Documentos enviados exitosamente!"))}catch(k){console.error("Error de validación:",k)}}function d(){o.value&&(o.value.resetFields(),e.value=[])}return{formRef:o,formData:r,rules:i,validationErrors:e,handleSubmit:t,handleReset:d,handleValidationError:k=>{q("validation-error")(k);const u=k.map(m=>{switch(m.type){case"file-size-exceeded":return`"${m.file?.name}" excede ${m.data?.maxSize}`;case"invalid-file-type":return`"${m.file?.name}" tipo no válido. Solo ${m.data?.acceptedExtensions?.join(", ")}`;case"max-files-exceeded":return`Máximo ${m.data?.maxFiles} archivos permitidos`;default:return"Error de validación"}});e.value=u,setTimeout(()=>e.value=[],5e3)}}},template:`
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
    `})},ee={name:"Método addFiles",parameters:{docs:{description:{story:"Método  `addFiles` que permite agregar archivos programáticamente al componente."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:V,GButton:me},setup(){const o=y([]),r=y();return{files:o,attachFileRef:r,addMockFiles:()=>{const d=[new File(["contenido PDF de ejemplo"],"documento-ejemplo.pdf",{type:"application/pdf"}),new File(["contenido imagen de ejemplo"],"imagen-ejemplo.jpg",{type:"image/jpeg"})];Object.defineProperty(d[0],"size",{value:1024*500}),Object.defineProperty(d[1],"size",{value:1024*800}),r.value?.addFiles&&r.value.addFiles(d)},addSingleFile:()=>{const d=new File(["contenido de texto"],"nota.txt",{type:"text/plain"});Object.defineProperty(d,"size",{value:1024*100}),r.value?.addFiles&&r.value.addFiles([d])},clearFiles:()=>{o.value=[]}}},template:`
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
    `})},ae={name:"Estado Solo Lectura (Un Archivo)",args:{title:"Documento Aprobado",infoText:"Este documento ya ha sido validado y no puede ser modificado.",showFileSize:!1,showRemoveButton:!1,disabled:!0,downloadUrl:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",downloadLinkText:"Ver documento"},parameters:{docs:{description:{story:"Ejemplo de configuración para mostrar un único archivo en estado de solo lectura o aprobado, con enlace para visualizar el documento."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=y([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"})]);return{args:o,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},te={name:"Estado Solo Lectura (Múltiples Archivos)",args:{title:"Documentos Aprobados",infoText:"Estos documentos ya han sido validados y no pueden ser modificados.",showFileSize:!1,showRemoveButton:!1,disabled:!0},parameters:{docs:{description:{story:"Ejemplo de configuración para mostrar múltiples archivos en estado de solo lectura o aprobados."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=y([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"}),new File(["dummy content"],"comprobante_pago.jpg",{type:"image/jpeg"}),new File(["dummy content"],"identificacion_frontal.png",{type:"image/png"})]);return{args:o,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},oe={name:"Estado Solo Lectura (Drag & Drop)",args:{type:"drag-drop",uploadButtonText:"Cargar archivos",uploadText:"o arrastra aquí",showFileSize:!1,showRemoveButton:!1,disabled:!0},parameters:{docs:{description:{story:"Ejemplo de configuración para el modo Drag & Drop en estado de solo lectura. Muestra la lista de archivos sin opciones de eliminación ni tamaño."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:V},setup(){const r=y([new File(["dummy content"],"contrato_firmado.pdf",{type:"application/pdf"}),new File(["dummy content"],"anexo_1.docx",{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})]);return{args:o,files:r}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},re={name:"Default simple (sin ícono)",args:{type:"default",showUploadButton:!1,infoText:"Usa el botón externo para abrir el selector de archivos.",maxSize:"",acceptExtNames:[]},parameters:{docs:{description:{story:"Ejemplo del modo default sin ícono de carga interno. Se utiliza un botón externo para activar el selector de archivos de forma explícita."},source:{code:`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'
import { GButton } from '@flash-global66/g-button'

const files = ref<File[]>([])
const attachFileRef = ref<{ openFilePicker?: () => void } | null>(null)

const handleOpenFilePicker = () => {
  attachFileRef.value?.openFilePicker?.()
}
<\/script>

<template>
  <g-attach-file
    ref="attachFileRef"
    v-model="files"
    :show-upload-button="false"
    title="Seleccionar archivo"
    info-text="Usa el botón externo para abrir el selector de archivos."
  />

  <g-button @click="handleOpenFilePicker">
    Seleccionar archivo
  </g-button>
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:V,GButton:me},setup(){const r=y([]),i=y(null);return{args:o,files:r,attachFileRef:i,handleOpenFilePicker:()=>{q("open-file-picker")(),i.value?.openFilePicker?.()}}},template:`
      <g-config-provider>
        <div class="space-y-3">
          <g-attach-file 
            ref="attachFileRef"
            v-bind="args"
            v-model="files"
          />

          <g-button variant="primary" @click="handleOpenFilePicker">
            Seleccionar archivo
          </g-button>
        </div>
      </g-config-provider>
    `})};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
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
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
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
}`,...te.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
  name: "Default simple (sin ícono)",
  args: {
    type: "default",
    showUploadButton: false,
    infoText: "Usa el botón externo para abrir el selector de archivos.",
    maxSize: "",
    acceptExtNames: []
  },
  parameters: {
    docs: {
      description: {
        story: "Ejemplo del modo default sin ícono de carga interno. Se utiliza un botón externo para activar el selector de archivos de forma explícita."
      },
      source: {
        code: \`<script setup lang="ts">
import { ref } from 'vue'
import { GAttachFile } from '@flash-global66/g-attach-file'
import { GButton } from '@flash-global66/g-button'

const files = ref<File[]>([])
const attachFileRef = ref<{ openFilePicker?: () => void } | null>(null)

const handleOpenFilePicker = () => {
  attachFileRef.value?.openFilePicker?.()
}
<\/script>

<template>
  <g-attach-file
    ref="attachFileRef"
    v-model="files"
    :show-upload-button="false"
    title="Seleccionar archivo"
    info-text="Usa el botón externo para abrir el selector de archivos."
  />

  <g-button @click="handleOpenFilePicker">
    Seleccionar archivo
  </g-button>
</template>\`
      }
    }
  },
  render: args => ({
    components: {
      GAttachFile,
      GConfigProvider,
      GButton
    },
    setup() {
      const files = ref<File[]>([]);
      const attachFileRef = ref<{
        openFilePicker?: () => void;
      } | null>(null);
      const handleOpenFilePicker = () => {
        action('open-file-picker')();
        attachFileRef.value?.openFilePicker?.();
      };
      return {
        args,
        files,
        attachFileRef,
        handleOpenFilePicker
      };
    },
    template: \`
      <g-config-provider>
        <div class="space-y-3">
          <g-attach-file 
            ref="attachFileRef"
            v-bind="args"
            v-model="files"
          />

          <g-button variant="primary" @click="handleOpenFilePicker">
            Seleccionar archivo
          </g-button>
        </div>
      </g-config-provider>
    \`
  })
}`,...re.parameters?.docs?.source}}};const Ua=["Primary","DragDrop","ComponentStates","FlujoCargaCompleto","DownloadMode","DownloadLink","FormIntegration","AddFilesMethod","ReadOnlySingle","ReadOnlyMultiple","ReadOnlyDragDrop","DefaultSimpleNoUploadButton"];export{ee as AddFilesMethod,Z as ComponentStates,re as DefaultSimpleNoUploadButton,X as DownloadLink,Q as DownloadMode,K as DragDrop,J as FlujoCargaCompleto,Y as FormIntegration,H as Primary,oe as ReadOnlyDragDrop,te as ReadOnlyMultiple,ae as ReadOnlySingle,Ua as __namedExportsOrder,qa as default};
