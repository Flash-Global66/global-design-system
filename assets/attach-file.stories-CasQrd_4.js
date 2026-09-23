import{l as De,p as ue,M as Ve,c as u,s as Ge,r as x,d as de,o as c,y as v,g as l,u as a,f as h,n as q,i as re,z as B,j as A,a as $,F as O,A as fe,b as ie,B as $e,R as W,ac as xe,h as qe,w as Le,E as Oe}from"./iframe-Dct5CHxr.js";import{L as Ne,z as _e}from"./index-CZoNQBHQ.js";import{t as ge}from"./index-BgdLHs-h.js";import{R as le}from"./index-1T7U7QlS.js";import{w as ke}from"./install.util-cBz1HN_T.js";import{u as ce}from"./useEmptyValues-BnYvcW4O.js";import{G as U}from"./ConfigProvider-7dg58IlU.js";import{G as Se,a as Re}from"./index-DOcpSnVP.js";import{G as pe}from"./index-BeqF1NXI.js";import{G as ze}from"./index-CiBki8_N.js";import{a as We,b as ye}from"./documentation-stories-DmJzCMmf.js";import"./preload-helper-Dch09mLN.js";import"./useId-MLHLvdkG.js";import"./index-pMiYc9r3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CRx4dHSJ.js";import"./index-DWhPhD7W.js";import"./useAttrs-BZi71rd1.js";import"./event.constant-LtAI3-H4.js";import"./index-GU5Cqqg3.js";const be={UPLOAD:"upload",DOWNLOAD:"download"},P={SUCCESS:"success",ERROR:"error",LOADING:"loading"},He=De({modelValue:{type:ue(Array),default:()=>[]},type:{type:String,values:["default","drag-drop"],default:"default"},mode:{type:String,values:Object.values(be),default:be.UPLOAD},inputId:{type:String,default:void 0},acceptExtNames:{type:Array,default:()=>[]},maxSize:{type:String,default:"10MB"},multiple:{type:Boolean,default:!0},maxFiles:{type:Number,default:void 0},disabled:{type:Boolean,default:!1},validateEvent:{type:Boolean,default:!0},uploadButtonText:{type:String,default:""},title:{type:String,default:""},uploadText:{type:String,default:""},restrictionText:{type:String,default:""},infoText:{type:String,default:""},downloadUrl:{type:String,default:""},downloadLinkText:{type:String,default:""},uploading:{type:Boolean,default:!1},uploadError:{type:[Boolean,String],default:!1},fileErrors:{type:Object,default:()=>({})},fileProgress:{type:Object,default:()=>({})},errors:{type:Array,default:()=>[]},showFileSize:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showUploadButton:{type:Boolean,default:!0}}),Ke={"update:modelValue":o=>!0,change:o=>!0,error:o=>!0,"validation-error":o=>!0,onRetry:()=>!0,download:()=>!0,clearProgress:()=>!0},Fe={b:1,kb:1024,mb:1024*1024,gb:1024*1024*1024,tb:1024*1024*1024*1024},Ze=["Bytes","KB","MB","GB","TB"];function se(o){if(o===0)return"0 Bytes";const n=1024,i=Math.floor(Math.log(o)/Math.log(n));return parseFloat((o/Math.pow(n,i)).toFixed(2))+" "+Ze[i]}function Me(o){if(!o||typeof o!="string")return 0;const n=/^([0-9]+(?:\.[0-9]+)?)\s*(B|KB|MB|GB|TB)$/i,i=o.trim().match(n);if(!i)return 0;const e=parseFloat(i[1]),t=i[2].toLowerCase();return Fe[t]?Math.floor(e*Fe[t]):0}function Ye(o,n,i="change"){o&&n&&n.validate(i).catch(e=>Ve())}function Ee(o){return o?Array.from(o):[]}function ve(o,n=!1,i=!1){!n&&!i&&o.value&&o.value.click()}function he(o,n,i,e,t){return n[o]||i?P.ERROR:e||t[o]!==void 0?P.LOADING:P.SUCCESS}function Ae(o,n,i=!1,e=!1){return function(d){if(i&&e)return;const y=[...o];y.splice(d,1),n("update:modelValue",y),n("change",y)}}function Be(o){return o.length>0?o[0]:""}function Je(o,n){const{formItem:i}=Ne(),{inputId:e}=_e(o,{formItemContext:i||void 0}),t=u(()=>o.modelValue||[]),d=u(()=>o.multiple??!0),y=u(()=>o.validateEvent??!0),D=u(()=>o.uploading??!1),m=u(()=>o.uploadError??!1),p=u(()=>o.fileErrors||{}),R=u(()=>o.fileProgress||{}),k=u(()=>{const r={};return t.value.forEach((b,z)=>{r[z]=he(z,p.value,!!m.value,D.value,R.value)}),r}),F=u(()=>{const r=[];return o.errors&&Array.isArray(o.errors)&&o.errors.forEach(b=>{typeof b=="string"&&b.trim()&&!r.includes(b)&&r.push(b)}),i?.shouldShowErrorChild&&i?.validateMessage&&(r.includes(i.validateMessage)||r.push(i.validateMessage)),m.value&&typeof m.value=="string"&&(r.includes(m.value)||r.push(m.value)),Object.values(p.value).forEach(b=>{typeof b=="string"&&b&&!r.includes(b)&&r.push(b)}),r});function E(r){const b=[],z=[],g=o.acceptExtNames?.map(j=>j.toLowerCase())||[],M=d.value?t.value:[];if(o.maxFiles&&M.length+r.length>o.maxFiles){b.push({type:"max-files-exceeded",data:{maxFiles:o.maxFiles,currentFiles:M.length,attemptedFiles:r.length,totalAttempted:M.length+r.length}}),n("validation-error",b);return}if(r.forEach(j=>{let L=!0;if(o.maxSize){const G=Me(o.maxSize);G&&j.size>G&&(b.push({type:"file-size-exceeded",file:j,data:{maxSize:o.maxSize,actualSize:j.size}}),L=!1)}if(g.length>0){const G="."+j.name.split(".").pop()?.toLowerCase();g.includes(G)||(b.push({type:"invalid-file-type",file:j,data:{acceptedExtensions:o.acceptExtNames,actualExtension:G}}),L=!1)}L&&z.push(j)}),b.length>0){n("validation-error",b);return}if(z.length>0){const j=d.value?[...t.value,...z]:z;n("update:modelValue",j),n("change",j),Ye(y.value||!1,i)}}function C(r){const b=r.target;b.files&&(E(Ee(b.files)),b.value="")}function S(r){E(Ee(r))}Ge(()=>D.value,r=>{r||n("clearProgress")},{immediate:!0});const f=x(null);function s(){o.type==="default"&&f.value?.openFilePicker()}return{modelValue:t,fileStatuses:k,displayErrors:F,fileErrors:p,fileProgress:R,inputId:e,multiple:d,uploading:D,uploadError:m,defaultTypeRef:f,onFileInputChange:C,onFilesDrop:S,addFiles:E,openFilePicker:s}}const Qe=De({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:o=>o>=0&&o<=100},status:{type:String,default:"primary",values:["primary","success","error","warning"]},indeterminate:Boolean,duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:ue(String),default:"round"},textInside:Boolean,width:{type:Number,default:126},showText:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},format:{type:ue(Function),default:o=>`${o}%`}}),Xe=["aria-valuenow"],ea={viewBox:"0 0 100 100"},aa=["d","stroke","stroke-linecap","stroke-width"],ta=["d","stroke","opacity","stroke-linecap","stroke-width"],oa={key:1},na=de({name:"Progress",__name:"progress",props:Qe,setup(o){const n={primary:"--color-progress-primary",success:"--color-progress-success",error:"--color-progress-error",warning:"--color-progress-warning"},i=o,e=ce("progress"),t=u(()=>{const s={width:`${i.percentage}%`,animationDuration:`${i.duration}s`},r=n[i.status]||n.primary;return s.backgroundColor=`var(${r})`,s}),d=u(()=>(i.strokeWidth/i.width*100).toFixed(1)),y=u(()=>["circle","dashboard"].includes(i.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),D=u(()=>{const s=y.value,r=i.type==="dashboard";return`
            M 50 50
            m 0 ${r?"":"-"}${s}
            a ${s} ${s} 0 1 1 0 ${r?"-":""}${s*2}
            a ${s} ${s} 0 1 1 0 ${r?"":"-"}${s*2}
            `}),m=u(()=>2*Math.PI*y.value),p=u(()=>i.type==="dashboard"?.75:1),R=u(()=>`${-1*m.value*(1-p.value)/2}px`),k=u(()=>({strokeDasharray:`${m.value*p.value}px, ${m.value}px`,strokeDashoffset:R.value})),F=u(()=>({strokeDasharray:`${m.value*p.value*(i.percentage/100)}px, ${m.value}px`,strokeDashoffset:R.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),E=u(()=>`var(${n[i.status]||n.primary})`),C=u(()=>i.status==="warning"?"solid exclamation-circle":i.type==="line"?i.status==="success"?"regular check-circle":"regular circle-xmark":i.status==="success"?"regular check":"regular times"),S=u(()=>i.type==="line"?12+i.strokeWidth*.4:i.width*.111111+2),f=u(()=>i.format(i.percentage));return(s,r)=>(c(),v("div",{class:l([a(e).b(),a(e).m(s.type),a(e).is(s.status),{[a(e).m("without-text")]:!s.showText,[a(e).m("text-inside")]:s.textInside}]),id:"MAIN-DIV",role:"progressbar","aria-valuenow":s.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[s.type==="line"?(c(),v("div",{key:0,class:l(a(e).b("bar"))},[h("div",{class:l(a(e).be("bar","outer")),style:q({height:`${s.strokeWidth}px`})},[h("div",{class:l([a(e).be("bar","inner"),{[a(e).bem("bar","inner","indeterminate")]:s.indeterminate}]),style:q(t.value)},[(s.showText||s.$slots.default)&&s.textInside?(c(),v("div",{key:0,class:l(a(e).be("bar","innerText"))},[re(s.$slots,"default",{percentage:s.percentage},()=>[h("span",null,B(f.value),1)])],2)):A("",!0)],6)],6)],2)):(c(),v("div",{key:1,class:l(a(e).b("circle")),style:q({height:`${s.width}px`,width:`${s.width}px`})},[(c(),v("svg",ea,[h("path",{class:l(a(e).be("circle","track")),d:D.value,stroke:`var(${a(e).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":s.strokeLinecap,"stroke-width":d.value,fill:"none",style:q(k.value)},null,14,aa),h("path",{class:l(a(e).be("circle","path")),d:D.value,stroke:E.value,fill:"none",opacity:s.percentage?1:0,"stroke-linecap":s.strokeLinecap,"stroke-width":d.value,style:q(F.value)},null,14,ta)]))],6)),(s.showText||s.$slots.default)&&!s.textInside?(c(),v("div",{key:2,class:l(a(e).e("text")),style:q({fontSize:`${S.value}px`})},[re(s.$slots,"default",{percentage:s.percentage},()=>[s.loading?(c(),$(a(le),{key:0,name:"regular spinner",spin:""})):!s.status||s.status==="primary"?(c(),v("span",oa,B(f.value),1)):(c(),$(a(le),{key:2,name:C.value},null,8,["name"]))])],6)):A("",!0)],10,Xe))}}),Ce=ke(na),ra=["multiple","accept","disabled","aria-label","aria-describedby"],ia=["href","aria-label"],la=de({__name:"default-type",props:{id:{},mode:{default:"upload"},title:{},infoText:{},uploadError:{type:Boolean,default:!1},downloadUrl:{default:""},downloadLinkText:{default:""},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{default:()=>[]},fileErrors:{default:()=>({})},fileProgress:{default:()=>({})},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean},showUploadButton:{type:Boolean,default:!0}},emits:["update:modelValue","change","error","onRetry","download","file-input-change"],setup(o,{expose:n,emit:i}){const e=ce("attach-file"),t=o,d=i,y=x();function D(){t.mode==="download"?d("download"):t.uploadError||Object.keys(t.fileErrors).length>0?d("onRetry"):ve(y,t.disabled,t.uploading)}function m(r){d("file-input-change",r)}const p=u(()=>t.modelValue||[]),R=u(()=>p.value.length>0),k=u(()=>t.multiple||t.uploadError),F=u(()=>t.uploadError?"error":t.uploading?"loading":p.value.length>0?"success":"default"),E=u(()=>Be(t.errors)),C=u(()=>t.mode==="download"?"solid download":"solid upload"),S=Ae(t.modelValue,d),f=r=>he(r,t.fileErrors,t.uploadError,t.uploading,t.fileProgress);function s(){ve(y,t.disabled,t.uploading)}return n({hiddenFileInput:y,openFilePicker:s}),(r,b)=>(c(),v("div",{class:l(a(e).e("default-type"))},[h("input",{ref_key:"hiddenFileInput",ref:y,type:"file",multiple:r.multiple,accept:r.acceptExtNames.join(","),disabled:r.disabled,class:l(a(e).e("hidden-input")),"aria-label":r.title||void 0,"aria-describedby":r.infoText?`${r.id||"attach-file"}-info`:void 0,onChange:m},null,42,ra),h("div",{class:l(a(e).e("content"))},[h("div",{class:l([a(e).e("header"),{[a(e).is("with-file-list")]:R.value}])},[h("div",{class:l(a(e).e("header-content"))},[h("p",{class:l(a(e).e("title"))},B(r.title),3),k.value?(c(),v("p",{key:0,class:l(a(e).e("info-text"))},B(r.infoText),3)):A("",!0),r.downloadUrl&&r.downloadLinkText?(c(),v("a",{key:1,href:r.downloadUrl,target:"_blank",rel:"noopener noreferrer",class:l(a(e).e("download-link")),"aria-label":`${r.downloadLinkText} (opens in new tab)`},B(r.downloadLinkText),11,ia)):A("",!0)],2),t.showUploadButton?(c(),$(a(ge),{key:0,icon:C.value,variant:"blue",border:"",rounded:"",size:"medium",onClick:D,disabled:r.disabled},null,8,["icon","disabled"])):A("",!0)],2),F.value==="loading"?(c(),v("div",{key:0,class:l(a(e).e("files-list"))},[h("div",{class:l(a(e).e("files-container"))},[(c(!0),v(O,null,fe(r.modelValue,(z,g)=>(c(),v("div",{key:g,class:l(a(e).e("file-item"))},[h("div",{class:l(a(e).e("file-item-content"))},[ie(a(Ce),{percentage:r.fileProgress[g]||0,type:"line","stroke-width":7,"show-text":!1,class:l(a(e).e("file-item-progress"))},null,8,["percentage","class"]),h("div",{class:l(a(e).e("file-item-info"))},[h("span",{class:l(a(e).e("file-item-name"))},B(z.name),3),h("span",{class:l(a(e).e("file-item-size"))},B(a(se)(z.size)),3)],2)],2)],2))),128))],2)],2)):R.value?(c(),v("div",{key:1,class:l(a(e).em("file-list","clean"))},[(c(!0),v(O,null,fe(p.value,(z,g)=>(c(),v("div",{key:g,class:l(a(e).e("item"))},[h("div",{class:l(a(e).e("item-content"))},[h("div",{class:l(a(e).e("file-status-icon"))},[ie(a(le),{name:f(g)===a(P).ERROR?"solid times":"solid check",class:l([a(e).e("icon"),{[a(e).is("success")]:f(g)!==a(P).ERROR,[a(e).is("error")]:f(g)===a(P).ERROR}])},null,8,["name","class"])],2),h("span",{class:l([a(e).e("file-name"),{[a(e).is("error")]:f(g)===a(P).ERROR,[a(e).is("success")]:f(g)!==a(P).ERROR}])},B(z.name),3)],2),h("div",{class:l(a(e).e("item-actions"))},[t.showFileSize?(c(),v("span",{key:0,class:l(a(e).e("file-size"))},B(a(se)(z.size)),3)):A("",!0),t.showRemoveButton?(c(),$(a(ge),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:t.disabled,onClick:M=>!t.disabled&&a(S)(g)},null,8,["disabled","onClick"])):A("",!0)],2)],2))),128))],2)):A("",!0),r.$slots["extra-content"]?(c(),v("div",{key:2,class:l(a(e).e("extra-content"))},[re(r.$slots,"extra-content")],2)):A("",!0)],2),E.value?(c(),v("div",{key:0,class:l(a(e).e("validation-errors"))},[h("p",{class:l(a(e).e("error-text"))},B(E.value),3)],2)):A("",!0)],2))}}),sa=["aria-label","aria-describedby"],da=["disabled"],ca=["id"],pa=["multiple","accept","disabled","aria-label"],ma=de({__name:"drag-drop-type",props:{id:{default:void 0},uploadButtonText:{},uploadText:{},restrictionText:{default:""},maxSize:{default:""},maxFiles:{default:void 0},loadingState:{type:Boolean,default:!1},modelValue:{},multiple:{type:Boolean},acceptExtNames:{},disabled:{type:Boolean},errors:{},fileErrors:{},fileProgress:{},fileStatuses:{default:()=>({})},uploading:{type:Boolean,default:!1},showFileSize:{type:Boolean},showRemoveButton:{type:Boolean},showUploadButton:{type:Boolean,default:!0}},emits:["update:modelValue","change","error","onRetry","file-input-change","files-drop"],setup(o,{expose:n,emit:i}){const e=ce("attach-file"),t=o,d=i,y=x(),D=x(),m=x(!1),p=x(0),R=u(()=>t.modelValue||[]),k=u(()=>t.loadingState||t.uploading),F=u(()=>t.maxSize?Me(t.maxSize):0),E=u(()=>t.restrictionText||""),C=u(()=>Be(t.errors)),S=u(()=>Ae(R.value,d,!0,k.value)),f=w=>he(w,t.fileErrors,!1,t.uploading,t.fileProgress);function s(){ve(y,t.disabled,k.value)}function r(w){d("file-input-change",w)}function b(w){w.preventDefault(),p.value++,m.value=!0}function z(w){w.preventDefault(),p.value--,p.value===0&&(m.value=!1)}function g(w){w.preventDefault()}function M(w){if(w.preventDefault(),p.value=0,m.value=!1,t.disabled||k.value)return;const N=w.dataTransfer?.files;N&&N.length>0&&d("files-drop",N)}const j=()=>s(),L=()=>s(),G=w=>{w.preventDefault(),s()},Pe=w=>{w.stopPropagation(),Object.keys(t.fileErrors).length>0||t.errors.length>0?d("onRetry"):s()},je=w=>g(w),Te=w=>b(w),Ue=w=>z(w),Ie=w=>M(w);return n({fileInput:y,openFileDialog:s}),(w,N)=>(c(),v("div",{class:l(a(e).e("drag-drop-type"))},[h("div",{ref_key:"dropZone",ref:D,class:l([a(e).e("drop-zone"),{[a(e).is("dragging")]:m.value,[a(e).is("error")]:t.errors.length>0,[a(e).is("disabled")]:t.disabled,[a(e).is("loading")]:k.value}]),role:"button",tabindex:"0","aria-label":`${t.uploadButtonText}. ${E.value||""}`,"aria-describedby":t.restrictionText||t.acceptExtNames.length||F.value?`${t.id||"drag-drop"}-restriction`:void 0,onClick:j,onKeydown:[xe(L,["enter"]),xe(G,["space"])],onDragover:W(je,["prevent"]),onDragenter:W(Te,["prevent"]),onDragleave:W(Ue,["prevent"]),onDrop:W(Ie,["prevent"])},[h("div",{class:l(a(e).e("text-content"))},[h("p",{class:l(a(e).e("main-text"))},[t.showUploadButton?(c(),v("button",{key:0,type:"button",class:l(a(e).e("upload-button")),disabled:t.disabled||k.value,onClick:Pe},B(t.uploadButtonText),11,da)):A("",!0),$e(" "+B(t.uploadText),1)],2),t.restrictionText||t.acceptExtNames.length||F.value?(c(),v("p",{key:0,class:l(a(e).e("restriction-text")),id:`${t.id||"drag-drop"}-restriction`},B(t.restrictionText||E.value),11,ca)):A("",!0)],2),h("input",{ref_key:"fileInput",ref:y,type:"file",multiple:t.multiple,accept:t.acceptExtNames.join(","),disabled:t.disabled||k.value,class:l(a(e).e("hidden-input")),"aria-label":`${t.uploadButtonText} - ${E.value||""}`,onChange:r},null,42,pa)],42,sa),R.value.length>0?(c(),v("div",{key:0,class:l(a(e).em("file-list","boxed"))},[(c(!0),v(O,null,fe(R.value,(_,V)=>(c(),v("div",{key:V,class:l([a(e).e("item"),{[a(e).is("loading")]:k.value}])},[h("div",{class:l(a(e).e("item-content"))},[k.value?(c(),v("div",{key:0,class:l(a(e).e("file-item-content"))},[ie(a(Ce),{percentage:t.fileProgress[V]||0,type:"line","stroke-width":7,"show-text":!1,class:l(a(e).e("file-item-progress"))},null,8,["percentage","class"]),h("div",{class:l(a(e).e("file-item-info"))},[h("span",{class:l(a(e).e("file-item-name"))},B(_.name),3),t.showFileSize?(c(),v("span",{key:0,class:l(a(e).e("file-item-size"))},B(a(se)(_.size)),3)):A("",!0)],2)],2)):(c(),v(O,{key:1},[h("div",{class:l(a(e).e("file-status-icon"))},[ie(a(le),{name:f(V)===a(P).ERROR?"solid times":"solid check",class:l([a(e).e("icon"),{[a(e).is("success")]:f(V)!==a(P).ERROR,[a(e).is("error")]:f(V)===a(P).ERROR}])},null,8,["name","class"])],2),h("span",{class:l([a(e).e("file-name"),{[a(e).is("error")]:f(V)===a(P).ERROR,[a(e).is("success")]:f(V)!==a(P).ERROR}])},B(_.name),3)],64))],2),h("div",{class:l(a(e).e("item-actions"))},[k.value?A("",!0):(c(),v(O,{key:0},[t.showFileSize?(c(),v("span",{key:0,class:l(a(e).e("file-size"))},B(a(se)(_.size)),3)):A("",!0),t.showRemoveButton?(c(),$(a(ge),{key:1,icon:"solid trash-alt",variant:"grey",size:"small",disabled:t.disabled,onClick:fa=>!t.disabled&&S.value(V)},null,8,["disabled","onClick"])):A("",!0)],64))],2)],2))),128))],2)):A("",!0),C.value?(c(),v("div",{key:1,class:l(a(e).e("validation-errors"))},[h("p",{class:l(a(e).e("error-text"))},B(C.value),3)],2)):A("",!0)],2))}}),we=de({name:"GAttachFile",__name:"attach-file",props:He,emits:Ke,setup(o,{expose:n,emit:i}){const e=o,t=i,{modelValue:d,fileStatuses:y,displayErrors:D,fileErrors:m,fileProgress:p,inputId:R,multiple:k,uploading:F,uploadError:E,defaultTypeRef:C,onFileInputChange:S,onFilesDrop:f,addFiles:s,openFilePicker:r}=Je(e,t),b=ce("attach-file");return n({addFiles:s,openFilePicker:r}),(z,g)=>(c(),v("div",{class:l(a(b).b())},[e.type==="default"?(c(),$(la,{key:0,ref_key:"defaultTypeRef",ref:C,id:a(R),"model-value":a(d),mode:e.mode,title:e.title,"info-text":e.infoText,"download-url":e.downloadUrl,"download-link-text":e.downloadLinkText,multiple:a(k),"accept-ext-names":e.acceptExtNames,disabled:e.disabled,uploading:a(F),"upload-error":!!a(E),"file-statuses":a(y),errors:a(D),"file-errors":a(m),"file-progress":a(p),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"show-upload-button":e.showUploadButton,"onUpdate:modelValue":g[0]||(g[0]=M=>t("update:modelValue",M)),onChange:g[1]||(g[1]=M=>t("change",M)),onError:g[2]||(g[2]=M=>t("error",M)),onOnRetry:g[3]||(g[3]=M=>t("onRetry")),onDownload:g[4]||(g[4]=M=>t("download")),onFileInputChange:a(S)},qe({_:2},[z.$slots["extra-content"]?{name:"extra-content",fn:Le(()=>[re(z.$slots,"extra-content")]),key:"0"}:void 0]),1032,["id","model-value","mode","title","info-text","download-url","download-link-text","multiple","accept-ext-names","disabled","uploading","upload-error","file-statuses","errors","file-errors","file-progress","show-file-size","show-remove-button","show-upload-button","onFileInputChange"])):e.type==="drag-drop"?(c(),$(ma,{key:1,id:a(R),"model-value":a(d),"upload-button-text":e.uploadButtonText,"upload-text":e.uploadText,"restriction-text":e.restrictionText,"accept-ext-names":e.acceptExtNames,multiple:a(k),disabled:e.disabled,"max-size":e.maxSize,"max-files":e.maxFiles,uploading:e.uploading,errors:a(D),"file-errors":a(m),"file-progress":a(p),"file-statuses":a(y),"show-file-size":e.showFileSize,"show-remove-button":e.showRemoveButton,"show-upload-button":e.showUploadButton,"onUpdate:modelValue":g[5]||(g[5]=M=>t("update:modelValue",M)),onChange:g[6]||(g[6]=M=>t("change",M)),onError:g[7]||(g[7]=M=>t("error",M)),onFileInputChange:a(S),onFilesDrop:a(f)},null,8,["id","model-value","upload-button-text","upload-text","restriction-text","accept-ext-names","multiple","disabled","max-size","max-files","uploading","errors","file-errors","file-progress","file-statuses","show-file-size","show-remove-button","show-upload-button","onFileInputChange","onFilesDrop"])):A("",!0)],2))}}),T=ke(we,{AttachFile:we}),ua="1.4.24",me={"@flash-global66/g-form":"1.0.0","@flash-global66/g-icon-button":"0.2.2","@flash-global66/g-icon-font":"0.6.0","@flash-global66/g-progress":"0.2.0",vue:"3.2.0"},{action:I}=__STORYBOOK_MODULE_ACTIONS__,Ta={title:"Form/Attach File",component:T,parameters:{docs:{description:{component:`
El componente Attach File permite cargar archivos con una interfaz intuitiva que incluye dos tipos de visualización: default (compacto) y drag-drop (arrastrar y soltar).

> Versión actual: ${ua}

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
${We(me)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${ye(me)}

# Dependencias externas  
yarn add ${ye(me,!0)}
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:U},setup(){const n=x([]);return{args:o,files:n}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:U},setup(){const o=x([]);return{files:o,handleUpdate:t=>{o.value=t,I("update:model-value")(t)},handleValidationError:t=>{I("validation-error")(t)},handleChange:t=>{I("change")(t)}}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:U},setup(){const o=(m,p=1024e3,R="application/pdf")=>{const k=new File([""],m,{type:R});return Object.defineProperty(k,"size",{value:p}),k},n=x([]),i=x([o("documento1.pdf",1024e3),o("imagen1.jpg",2048e3,"image/jpeg")]),e=x([o("documento_error.pdf")]),t=x([]),d=x({0:"Error de conexión al servidor"});return{normalFiles:n,uploadingFiles:i,errorFiles:e,disabledFiles:t,fileErrors:d,handleUpdate:m=>p=>{m.value=p,I("update:model-value")(p)},handleRetry:()=>{I("onRetry")(),e.value=[],d.value={}}}},template:`
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
    `})},Y={name:"Flujo de Carga Completo",parameters:{docs:{description:{story:`
Validaciones automáticas con manejo de mensajes de error.

### Pruebas sugeridas:
- Cargar archivo > 1MB → Error de tamaño
- Cargar más de 2 archivos → Error de cantidad
        `}}},render:()=>({components:{GAttachFile:T,GConfigProvider:U,GForm:Re,GFormItem:Se,GButton:pe,GInput:ze},setup(){const o=x([]),n=x(!1),i=x(!1),e=x(""),t=x(""),d=x({}),y=x({}),D=async F=>{if(F.length===0)return;n.value=!0,i.value=!1,y.value={},d.value={};for(let f=0;f<F.length;f++)d.value={...d.value,[f]:0};const E=20,C=150;for(let f=0;f<=E;f++){await new Promise(r=>setTimeout(r,C));const s=Math.round(f/E*100);for(let r=0;r<F.length;r++){const b=Math.random()*10-5,z=Math.min(100,Math.max(0,s+b));d.value={...d.value,[r]:Math.round(z)}}}if(await new Promise(f=>setTimeout(f,500)),Math.random()<.6){const f=Math.floor(Math.random()*F.length),s=["Error de conexión al servidor","Archivo corrupto detectado","Formato no soportado por el servidor","Timeout en la carga"],r=s[Math.floor(Math.random()*s.length)];y.value={[f]:r}}n.value=!1};function m(F){let E="",C="";F.forEach(S=>{if(S)if(S.type==="file-size-exceeded"){const f=Math.round((S.file?.size||0)/1048576*100)/100;E=`"${S.file?.name}" (${f}MB) excede el límite de ${S.data?.maxSize||"2MB"}`}else S.type==="invalid-file-type"?E=`"${S.file?.name}" tipo no válido. Solo ${S.data?.acceptedExtensions?.join(", ")||"tipos específicos"}`:S.type==="max-files-exceeded"&&(C=`Máximo ${S.data?.maxFiles} archivos permitidos (intentaste subir ${S.data?.totalAttempted||"varios"})`)}),e.value=E,t.value=C}function p(F){console.log("📁 Archivos actualizados:",F.length),o.value=F,F.length>=0&&(e.value="",t.value=""),F.length>0&&!n.value&&D(F)}function R(){i.value=!1,y.value={},d.value={},e.value="",t.value="",o.value.length>0&&D(o.value)}function k(){o.value=[],n.value=!1,i.value=!1,e.value="",t.value="",d.value={},y.value={}}return{files:o,uploading:n,uploadError:i,validationErrorMsg:e,maxFilesErrorMsg:t,fileProgress:d,fileErrors:y,handleValidationError:m,handleUpdate:p,handleRetry:R,handleClearAll:k}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:U},setup(){return{handleDownload:()=>{I("download")();const n=document.createElement("a");n.href="data:text/plain;charset=utf-8,Este es un archivo de ejemplo para descarga.",n.download="plantilla-ejemplo.txt",n.click()}}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:U},setup(){const o=x([]),n=x([]);return{files:o,filesWithError:n,handleUpdate:e=>{o.value=e,I("update:model-value")(e)}}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:U,GForm:Re,GFormItem:Se,GButton:pe,GInput:ze},setup(){const o=x(),n=Oe({name:"",documents:[]}),i={name:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],documents:[{required:!0,message:"Debe adjuntar al menos un documento",trigger:"change"},{validator:(D,m,p)=>{if(!m||m.length===0){p(new Error("Los documentos son obligatorios"));return}if(!m.some(F=>F.name.toLowerCase().endsWith(".pdf"))){p(new Error("Debe incluir al menos un documento PDF"));return}if(!m.every(F=>{const E=F.name.toLowerCase();return E.length>10||E.includes("documento")||E.includes("certificado")||E.includes("comprobante")})){p(new Error('Los archivos deben tener nombres descriptivos (ej: "documento_identidad.pdf")'));return}p()},trigger:"change"}]},e=x([]);async function t(){if(o.value)try{await o.value.validate()&&(console.log("Formulario válido:",n),alert("¡Documentos enviados exitosamente!"))}catch(D){console.error("Error de validación:",D)}}function d(){o.value&&(o.value.resetFields(),e.value=[])}return{formRef:o,formData:n,rules:i,validationErrors:e,handleSubmit:t,handleReset:d,handleValidationError:D=>{I("validation-error")(D);const m=D.map(p=>{switch(p.type){case"file-size-exceeded":return`"${p.file?.name}" excede ${p.data?.maxSize}`;case"invalid-file-type":return`"${p.file?.name}" tipo no válido. Solo ${p.data?.acceptedExtensions?.join(", ")}`;case"max-files-exceeded":return`Máximo ${p.data?.maxFiles} archivos permitidos`;default:return"Error de validación"}});e.value=m,setTimeout(()=>e.value=[],5e3)}}},template:`
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
</template>`}}},render:()=>({components:{GAttachFile:T,GConfigProvider:U,GButton:pe},setup(){const o=x([]),n=x();return{files:o,attachFileRef:n,addMockFiles:()=>{const d=[new File(["contenido PDF de ejemplo"],"documento-ejemplo.pdf",{type:"application/pdf"}),new File(["contenido imagen de ejemplo"],"imagen-ejemplo.jpg",{type:"image/jpeg"})];Object.defineProperty(d[0],"size",{value:1024*500}),Object.defineProperty(d[1],"size",{value:1024*800}),n.value?.addFiles&&n.value.addFiles(d)},addSingleFile:()=>{const d=new File(["contenido de texto"],"nota.txt",{type:"text/plain"});Object.defineProperty(d,"size",{value:1024*100}),n.value?.addFiles&&n.value.addFiles([d])},clearFiles:()=>{o.value=[]}}},template:`
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:U},setup(){const n=x([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"})]);return{args:o,files:n}},template:`
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:U},setup(){const n=x([new File(["dummy content"],"documento_validado.pdf",{type:"application/pdf"}),new File(["dummy content"],"comprobante_pago.jpg",{type:"image/jpeg"}),new File(["dummy content"],"identificacion_frontal.png",{type:"image/png"})]);return{args:o,files:n}},template:`
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:U},setup(){const n=x([new File(["dummy content"],"contrato_firmado.pdf",{type:"application/pdf"}),new File(["dummy content"],"anexo_1.docx",{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"})]);return{args:o,files:n}},template:`
      <g-config-provider>
        <g-attach-file 
          v-bind="args" 
          v-model="files"
        />
      </g-config-provider>
    `})},ne={name:"Default simple (sin ícono)",args:{type:"default",showUploadButton:!1,infoText:"Usa el botón externo para abrir el selector de archivos.",maxSize:"",acceptExtNames:[]},parameters:{docs:{description:{story:"Ejemplo del modo default sin ícono de carga interno. Se utiliza un botón externo para activar el selector de archivos de forma explícita."},source:{code:`<script setup lang="ts">
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
</template>`}}},render:o=>({components:{GAttachFile:T,GConfigProvider:U,GButton:pe},setup(){const n=x([]),i=x(null);return{args:o,files:n,attachFileRef:i,handleOpenFilePicker:()=>{I("open-file-picker")(),i.value?.openFilePicker?.()}}},template:`
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
    `})},Ua=["Primary","DragDrop","ComponentStates","FlujoCargaCompleto","DownloadMode","DownloadLink","FormIntegration","AddFilesMethod","ReadOnlySingle","ReadOnlyMultiple","ReadOnlyDragDrop","DefaultSimpleNoUploadButton"];H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  args: {
    maxSize: '',
    acceptExtNames: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Implementación básica del componente con configuración estándar que acepta cualquier tipo de archivo y cualquier tamaño. Permite explorar todas las propiedades disponibles desde los controles.'
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
  name: 'Arrastrar y Soltar',
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
  name: 'Estados del Componente',
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
      const createMockFile = (name: string, size: number = 1024000, type: string = 'application/pdf') => {
        const file = new File([''], name, {
          type
        });
        Object.defineProperty(file, 'size', {
          value: size
        });
        return file;
      };
      const normalFiles = ref<File[]>([]);
      const uploadingFiles = ref<File[]>([createMockFile('documento1.pdf', 1024000), createMockFile('imagen1.jpg', 2048000, 'image/jpeg')]);
      const errorFiles = ref<File[]>([createMockFile('documento_error.pdf')]);
      const disabledFiles = ref<File[]>([]);
      const fileErrors = ref<Record<number, string>>({
        0: 'Error de conexión al servidor'
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
}`,...Z.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Flujo de Carga Completo',
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
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Modo Descarga',
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
  name: 'Con Link de Descarga',
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
  name: 'Integración con Formularios',
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
}`,...X.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  name: 'Método addFiles',
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
  name: 'Estado Solo Lectura (Un Archivo)',
  args: {
    title: 'Documento Aprobado',
    infoText: 'Este documento ya ha sido validado y no puede ser modificado.',
    showFileSize: false,
    showRemoveButton: false,
    disabled: true,
    downloadUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    downloadLinkText: 'Ver documento'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de configuración para mostrar un único archivo en estado de solo lectura o aprobado, con enlace para visualizar el documento.'
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
  name: 'Estado Solo Lectura (Múltiples Archivos)',
  args: {
    title: 'Documentos Aprobados',
    infoText: 'Estos documentos ya han sido validados y no pueden ser modificados.',
    showFileSize: false,
    showRemoveButton: false,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de configuración para mostrar múltiples archivos en estado de solo lectura o aprobados.'
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
  name: 'Estado Solo Lectura (Drag & Drop)',
  args: {
    type: 'drag-drop',
    uploadButtonText: 'Cargar archivos',
    uploadText: 'o arrastra aquí',
    showFileSize: false,
    showRemoveButton: false,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de configuración para el modo Drag & Drop en estado de solo lectura. Muestra la lista de archivos sin opciones de eliminación ni tamaño.'
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
}`,...oe.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  name: 'Default simple (sin ícono)',
  args: {
    type: 'default',
    showUploadButton: false,
    infoText: 'Usa el botón externo para abrir el selector de archivos.',
    maxSize: '',
    acceptExtNames: []
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo del modo default sin ícono de carga interno. Se utiliza un botón externo para activar el selector de archivos de forma explícita.'
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
}`,...ne.parameters?.docs?.source}}};export{ee as AddFilesMethod,Z as ComponentStates,ne as DefaultSimpleNoUploadButton,Q as DownloadLink,J as DownloadMode,K as DragDrop,Y as FlujoCargaCompleto,X as FormIntegration,H as Primary,oe as ReadOnlyDragDrop,te as ReadOnlyMultiple,ae as ReadOnlySingle,Ua as __namedExportsOrder,Ta as default};
