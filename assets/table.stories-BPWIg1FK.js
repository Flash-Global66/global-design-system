import{d as Se,c as k,b as ke,E as St,a1 as xt,o as Ve,w as oe,e as K,f as Le,x as Q,s as Ae,F as je,z as Sa,u as R,l as W,U as At,D as Fe,R as El,k as J,m as ve,j as We,_ as et,a4 as ua,ak as at,A as Ha,y as Te,t as Nl,r as A,g as Z,a as re,a2 as ha,K as G,ab as Ft,C as Tt,B as Ie,ah as Ll,W as we,X as kl,n as He,h as ge,v as tt,aj as $a,H as zl,a6 as Rl,ac as lt,i as Gl}from"./vue.esm-bundler-Bl2jagQS.js";import{b as Dl,i as Ol,q as Et}from"./index-CBjvpEBJ.js";import{s as Vl,b as Nt,d as pa}from"./index-BqdEfVTR.js";import{b as ot,u as nt}from"./index-BReYXkxF.js";import{i as Wa,f as Ml,k as Pl,h as Hl,j as Lt,b as $l,e as Wl,l as Il,m as Bl,n as jl,p as Kl,d as _l,G as Ia,H as kt}from"./index-DM0Y1YvF.js";import{b as ql,u as zt,p as Ul}from"./index-DGHkJIvp.js";import{E as Ba,O as Yl,G as Rt,q as Xl,v as Jl,R as Ql,m as xa,T as Zl,U as eo,f as ao,u as ie,c as Gt,I as to,l as Aa}from"./install-DOXp8ISs.js";import{U as ba}from"./event-HEVJa2N9.js";import{i as lo}from"./isEqual-BHtiexJK.js";import{t as ja}from"./index-C-AGS1Jc.js";import{c as Dt,G as be}from"./ConfigProvider-CoDfHLyv.js";import{i as rt}from"./_arrayPush-JI9VAGEF.js";import{b as oo}from"./dynamic-size-list-BR6AlVcX.js";import{i as ze}from"./index-CSWWzN0B.js";import{y as Ka}from"./index-4d7J5o2u.js";import{_ as st}from"./Link-BMlYps2F.js";import{Y as no}from"./index-CqDxEmwP.js";import{u as Ot}from"./index-A_lKHenU.js";import{W as ro}from"./index-BXqtxhJI.js";import{r as so}from"./index-DqquJPBL.js";import{a as io,b as it}from"./documentation-stories-DmxlK2AD.js";import"./index-C6PeORPs.js";import"./index-1PfsMPBk.js";import"./index-CMvCPXde.js";import"./index-CFjH11MX.js";import"./aria-BUADUvnR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-BKPPtF-j.js";import"./index-iHpOvxyr.js";import"./typescript-Bp3YSIOJ.js";import"./util-B2mB0_6C.js";import"./use-form-item-uZaJTunI.js";import"./constants-Dnj8X3EN.js";import"./content-V1Vx4hji.js";import"./index-CVRRU3Hn.js";import"./index-BYw9aOLJ.js";import"./index-D4aBgNVM.js";import"./index.es-6yWc74qv.js";import"./index-DdPf6Guz.js";import"./index-B7B84oAx.js";import"./error-Cq9Fpw4b.js";function co(e,a,t){if(!Ba(t))return!1;var l=typeof a;return(l=="number"?Wa(t)&&Yl(a,t.length):l=="string"&&a in t)?Rt(t[a],e):!1}function uo(e){return Dl(function(a,t){var l=-1,o=t.length,n=o>1?t[o-1]:void 0,i=o>2?t[2]:void 0;for(n=e.length>3&&typeof n=="function"?(o--,n):void 0,i&&co(t[0],t[1],i)&&(n=o<3?void 0:n,o=1),a=Object(a);++l<o;){var r=t[l];r&&e(a,r,l,n)}return a})}var po="[object Object]",mo=Function.prototype,fo=Object.prototype,Vt=mo.toString,go=fo.hasOwnProperty,bo=Vt.call(Object);function yo(e){if(!Xl(e)||Jl(e)!=po)return!1;var a=Ml(e);if(a===null)return!0;var t=go.call(a,"constructor")&&a.constructor;return typeof t=="function"&&t instanceof t&&Vt.call(t)==bo}function ho(e){return function(a,t,l){for(var o=-1,n=Object(a),i=l(a),r=i.length;r--;){var s=i[++o];if(t(n[s],s,n)===!1)break}return a}}var Mt=ho();function vo(e,a){return e&&Mt(e,a,Pl)}function wo(e,a){return function(t,l){if(t==null)return t;if(!Wa(t))return e(t,l);for(var o=t.length,n=-1,i=Object(t);++n<o&&l(i[n],n,i)!==!1;);return t}}var Co=wo(vo);function Fa(e,a,t){(t!==void 0&&!Rt(e[a],t)||t===void 0&&!(a in e))&&Ql(e,a,t)}function Ta(e,a){if(!(a==="constructor"&&typeof e[a]=="function")&&a!="__proto__")return e[a]}function So(e){return Hl(e,Lt(e))}function xo(e,a,t,l,o,n,i){var r=Ta(e,t),s=Ta(a,t),d=i.get(s);if(d){Fa(e,t,d);return}var c=n?n(r,s,t+"",e,a,i):void 0,C=c===void 0;if(C){var f=xa(s),y=!f&&$l(s),b=!f&&!y&&Wl(s);c=s,f||y||b?xa(r)?c=r:Ol(r)?c=Il(r):y?(C=!1,c=Bl(s,!0)):b?(C=!1,c=jl(s,!0)):c=[]:yo(s)||rt(s)?(c=r,rt(r)?c=So(r):(!Ba(r)||Zl(r))&&(c=Kl(s))):C=!1}C&&(i.set(s,c),o(c,s,l,n,i),i.delete(s)),Fa(e,t,c)}function Pt(e,a,t,l,o){e!==a&&Mt(a,function(n,i){if(o||(o=new _l),Ba(n))xo(e,a,i,t,Pt,l,o);else{var r=l?l(Ta(e,i),n,i+"",e,a,o):void 0;r===void 0&&(r=n),Fa(e,i,r)}},Lt)}function Ao(e,a){var t=-1,l=Wa(e)?Array(e.length):[];return Co(e,function(o,n,i){l[++t]=a(o,n,i)}),l}function Fo(e,a){var t=xa(e)?eo:Ao;return t(e,oo(a))}function To(e,a){return ql(Fo(e,a))}function Ue(e){return e===null}var Ht=uo(function(e,a,t){Pt(e,a,t)});/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Eo=()=>{},No=Object.prototype.hasOwnProperty,dt=(e,a)=>No.call(e,a),Ke=Array.isArray,ct=e=>typeof e=="string",_a=e=>e!==null&&typeof e=="object";const Ea=e=>e===void 0,Na=e=>typeof e=="boolean",ut=e=>typeof e=="number",pt=e=>Gt(e),$t="__epPropKey",Lo=e=>e,ko=e=>_a(e)&&!!e[$t],zo=(e,a)=>{if(!_a(e)||ko(e))return e;const{values:t,required:l,default:o,type:n,validator:i}=e,r={type:n,required:!!l,validator:t||i?s=>{let d=!1,c=[];if(t&&(c=Array.from(t),dt(e,"default")&&c.push(o),d||(d=c.includes(s))),i&&(d||(d=i(s))),!d&&c.length>0){const C=[...new Set(c)].map(f=>JSON.stringify(f)).join(", ");Nl(`Invalid prop: validation failed${a?` for prop "${a}"`:""}. Expected one of [${C}], got value ${JSON.stringify(s)}.`)}return d}:void 0,[$t]:!0};return dt(e,"default")&&(r.default=o),r},Ro=e=>ao(Object.entries(e).map(([a,t])=>[a,zo(t,a)])),Go=(e,a)=>{if(e.install=t=>{for(const l of[e,...Object.values(a??{})])t.component(l.name,l)},a)for(const[t,l]of Object.entries(a))e[t]=l;return e},Do=e=>(e.install=Eo,e),Oo={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},id:{type:String,default:void 0},tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},border:{type:Boolean,default:!1},invert:{type:Boolean,default:!1},...zt(["ariaControls"])},Vo={[ba]:e=>ct(e)||ut(e)||Na(e),change:e=>ct(e)||ut(e)||Na(e)},Mo=Symbol("formContextKey"),Po=e=>{const a=Z();return k(()=>{var t,l;return(l=(t=a?.proxy)==null?void 0:t.$props)==null?void 0:l[e]})},Ho=e=>{const a=Po("disabled"),t=re(Mo,void 0);return k(()=>a.value||R(e)||t?.disabled||!1)},ya=Symbol("checkboxGroupContextKey"),$o=({model:e,isChecked:a})=>{const t=re(ya,void 0),l=k(()=>{const o=t?.max?.value,n=t?.min?.value;return!Ea(o)&&e.value.length>=o&&!a.value||!Ea(n)&&e.value.length<=n&&a.value});return{isDisabled:Ho(k(()=>t?.disabled.value||l.value)),isLimitDisabled:l}},Wo=(e,{model:a,isLimitExceeded:t,hasOwnLabel:l,isDisabled:o,isLabeledByFormItem:n})=>{const i=re(ya,void 0),{formItem:r}=Ia(),{emit:s}=Z();function d(b){return[!0,e.trueValue].includes(b)?e.trueValue??!0:e.falseValue??!1}function c(b,w){s("change",d(b),w)}function C(b){if(t.value)return;const w=b.target;s("change",d(w.checked),b)}async function f(b){t.value||!l.value&&!o.value&&n.value&&(b.composedPath().some(w=>w.tagName==="LABEL")||(a.value=d([!1,e.falseValue].includes(a.value)),await Fe(),c(a.value,b)))}const y=k(()=>i?.validateEvent||e.validateEvent);return oe(()=>e.modelValue,()=>{y.value&&r?.validate("change").catch(b=>void 0)}),{handleChange:C,onClickRoot:f}},Io=e=>{const a=A(!1),{emit:t}=Z(),l=re(ya,void 0),o=k(()=>Ea(l)===!1),n=A(!1),i=k({get(){return o.value?l?.modelValue?.value:e.modelValue??a.value},set(r){o.value&&Ke(r)?(n.value=l?.max?.value!==void 0&&r.length>l?.max.value&&r.length>i.value.length,n.value===!1&&l?.changeEvent?.(r)):(t(ba,r),a.value=r)}});return{model:i,isGroup:o,isLimitExceeded:n}},Bo=(e,a,{model:t})=>{const l=A(!1),o=A(!1),n=A(""),i=k(()=>pt(e.value)?e.label:e.value),r=(d,c)=>{const C=d.map(ha),f=ua(c)?ha(c.value):c;return _a(f)?C.some(y=>lo(y,ha(f))):C.includes(f)},s=k(()=>!!a.default||!pt(i.value));return oe(()=>{const d=t.value;return Na(d)?d:Ke(d)?r(d,i.value):d!=null?d===e.trueValue:!!d},d=>{o.value=d,n.value=d?"expand":"contract",setTimeout(()=>{n.value=""},500)}),{actualValue:i,hasOwnLabel:s,isChecked:o,isFocused:l,currentRipple:n}},jo=(e,a)=>{const{formItem:t}=Ia(),{model:l,isGroup:o,isLimitExceeded:n}=Io(e),{actualValue:i,currentRipple:r,hasOwnLabel:s,isChecked:d,isFocused:c}=Bo(e,a,{model:l}),{isDisabled:C}=$o({model:l,isChecked:d}),{inputId:f,isLabeledByFormItem:y}=kt(e,{formItemContext:t,disableIdGeneration:s,disableIdManagement:o}),{handleChange:b,onClickRoot:w}=Wo(e,{model:l,isLimitExceeded:n,hasOwnLabel:s,isDisabled:C,isLabeledByFormItem:y});return(()=>{function u(){Ke(l.value)&&!l.value.includes(i.value)?l.value.push(i.value):l.value=e.trueValue??!0}e.checked&&u()})(),{actualValue:i,currentRipple:r,handleChange:b,hasOwnLabel:s,inputId:f,isChecked:d,isDisabled:C,isFocused:c,isLabeledByFormItem:y,model:l,onClickRoot:w}},Ko=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],_o=["id","indeterminate","name","tabindex","disabled","value"],qo={class:"hover-effect"},Uo=Se({name:"GuiCheckbox",__name:"checkbox",props:Oo,emits:Vo,setup(e){const a=e,t=El(),{actualValue:l,currentRipple:o,handleChange:n,hasOwnLabel:i,inputId:r,isChecked:s,isDisabled:d,isFocused:c,isLabeledByFormItem:C,model:f,onClickRoot:y}=jo(a,t),b=ie("checkbox"),w=k(()=>!i.value&&C?"span":"label"),u=k(()=>[b.b(),b.is("disabled",d.value),b.is("checked",s.value),b.is("border",a.border),b.is("invert",a.invert)]),F=k(()=>[b.e("input"),b.is("disabled",d.value),b.is("checked",s.value),b.is("indeterminate",a.indeterminate),b.is("focus",c.value)]);return(g,p)=>(K(),ke(At(w.value),{class:W(u.value),"aria-controls":g.indeterminate?g.ariaControls:null,onClick:R(y)},{default:Le(()=>[J("span",{class:W(F.value)},[g.trueValue||g.falseValue?We((K(),Q("input",{key:0,id:R(r),"onUpdate:modelValue":p[0]||(p[0]=m=>ua(f)?f.value=m:null),class:W(R(b).e("original")),type:"checkbox",indeterminate:g.indeterminate,name:g.name,tabindex:g.tabindex,disabled:R(d),"true-value":g.trueValue??!0,"false-value":g.falseValue??!1,onChange:p[1]||(p[1]=(...m)=>R(n)&&R(n)(...m)),onFocus:p[2]||(p[2]=m=>c.value=!0),onBlur:p[3]||(p[3]=m=>c.value=!1),onClick:p[4]||(p[4]=et(()=>{},["stop"]))},null,42,Ko)),[[at,R(f)]]):We((K(),Q("input",{key:1,id:R(r),"onUpdate:modelValue":p[5]||(p[5]=m=>ua(f)?f.value=m:null),class:W(R(b).e("original")),type:"checkbox",indeterminate:g.indeterminate,name:g.name,tabindex:g.tabindex,disabled:R(d),value:R(l),onChange:p[6]||(p[6]=(...m)=>R(n)&&R(n)(...m)),onFocus:p[7]||(p[7]=m=>c.value=!0),onBlur:p[8]||(p[8]=m=>c.value=!1),onClick:p[9]||(p[9]=et(()=>{},["stop"]))},null,42,_o)),[[at,R(f)]]),J("span",{class:W(R(b).e("inner"))},[J("span",qo,[J("span",{class:W(["ripple",R(o)])},null,2)])],2)],2),R(i)?(K(),Q("span",{key:0,class:W(R(b).e("label"))},[Ae(g.$slots,"default"),g.$slots.default?ve("",!0):(K(),Q(je,{key:0},[Ha(Te(g.label),1)],64))],2)):ve("",!0)]),_:3},8,["class","aria-controls","onClick"]))}}),Yo=Ro({modelValue:{type:Lo(Array),default:()=>[]},options:{type:Array,default:()=>[]},disabled:Boolean,min:Number,max:Number,layout:{type:String,default:"horizontal"},tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},border:{type:Boolean,default:!1},invert:{type:Boolean,default:!1},...zt(["ariaLabel"])}),Xo={[ba]:e=>Ke(e),change:e=>Ke(e)},Wt=Se({name:"GuiCheckboxGroup",__name:"checkbox-group",props:Yo,emits:Xo,setup(e,{emit:a}){const t=e,l=a,o=ie("checkbox"),{formItem:n}=Ia(),{inputId:i,isLabeledByFormItem:r}=kt(t,{formItemContext:n}),s=async f=>{l(ba,f),await Fe(),l("change",f)},d=k({get(){return t.modelValue},set(f){s(f)}}),c={horizontal:"flex flex-row gap-4",vertical:"flex flex-col gap-4"},C=k(()=>[o.b("group"),c[t.layout]]);return St(ya,{...Ul(xt(t),["min","max","disabled","validateEvent"]),modelValue:d,changeEvent:s}),Ve(()=>{const f=t.options.filter(y=>y.checked).map(y=>y.value);f.length>0&&(d.value=f)}),oe(()=>t.modelValue,()=>{t.validateEvent&&n?.validate?.("change").catch(f=>void 0)}),(f,y)=>(K(),ke(At(f.tag),{id:R(i),class:W(C.value),role:"group","aria-label":R(r)?void 0:f.ariaLabel||"checkbox-group","aria-labelledby":R(r)?R(n)?.labelId:void 0},{default:Le(()=>[t.options.length>0?(K(!0),Q(je,{key:0},Sa(t.options,b=>(K(),ke(R(Re),{key:String(b.value),value:b.value,label:b?.label??b.value,disabled:b?.disabled,checked:b?.checked,border:t.border,invert:t.invert},null,8,["value","label","disabled","checked","border","invert"]))),128)):Ae(f.$slots,"default",{key:1})]),_:3},8,["id","class","aria-label","aria-labelledby"]))}}),Re=Go(Uo,{CheckboxGroup:Wt});Do(Wt);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Jo=()=>{},Qo=Object.prototype.hasOwnProperty,_e=(e,a)=>Qo.call(e,a),te=Array.isArray,ue=e=>typeof e=="function",pe=e=>typeof e=="string",ma=e=>e!==null&&typeof e=="object";class Zo extends Error{constructor(a){super(a),this.name="ElementPlusError"}}function en(e,a){throw new Zo(`[${e}] ${a}`)}const It=(e,a,t)=>({get value(){return Aa(e,a,t)},set value(l){to(e,a,l)}}),an=e=>ze?window.requestAnimationFrame(e):setTimeout(e,16),Ce=e=>e===void 0,Ee=e=>typeof e=="boolean",Ge=e=>typeof e=="number",Bt=e=>typeof Element>"u"?!1:e instanceof Element,ra=e=>Gt(e),jt=(e="")=>e.split(" ").filter(a=>!!a.trim()),$e=(e,a)=>{if(!e||!a)return!1;if(a.includes(" "))throw new Error("className should not contain space.");return e.classList.contains(a)},fa=(e,a)=>{!e||!a.trim()||e.classList.add(...jt(a))},qe=(e,a)=>{!e||!a.trim()||e.classList.remove(...jt(a))},tn=(e,a)=>{if(e.install=t=>{for(const l of[e,...Object.values(a??{})])t.component(l.name,l)},a)for(const[t,l]of Object.entries(a))e[t]=l;return e},ln=e=>(e.install=Jo,e),xe=new Map;if(ze){let e;document.addEventListener("mousedown",a=>e=a),document.addEventListener("mouseup",a=>{if(e){for(const t of xe.values())for(const{documentHandler:l}of t)l(a,e);e=void 0}})}function mt(e,a){let t=[];return te(a.arg)?t=a.arg:Bt(a.arg)&&t.push(a.arg),function(l,o){const n=a.instance.popperRef,i=l.target,r=o?.target,s=!a||!a.instance,d=!i||!r,c=e.contains(i)||e.contains(r),C=e===i,f=t.length&&t.some(b=>b?.contains(i))||t.length&&t.includes(r),y=n&&(n.contains(i)||n.contains(r));s||d||c||C||f||y||a.value(l,o)}}const on={beforeMount(e,a){xe.has(e)||xe.set(e,[]),xe.get(e).push({documentHandler:mt(e,a),bindingFn:a.value})},updated(e,a){xe.has(e)||xe.set(e,[]);const t=xe.get(e),l=t.findIndex(n=>n.bindingFn===a.oldValue),o={documentHandler:mt(e,a),bindingFn:a.value};l>=0?t.splice(l,1,o):t.push(o)},unmounted(e){xe.delete(e)}};var ft=!1,Ne,La,ka,sa,ia,Kt,da,za,Ra,Ga,_t,Da,Oa,qt,Ut;function ne(){if(!ft){ft=!0;var e=navigator.userAgent,a=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),t=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(Da=/\b(iPhone|iP[ao]d)/.exec(e),Oa=/\b(iP[ao]d)/.exec(e),Ga=/Android/i.exec(e),qt=/FBAN\/\w+;/i.exec(e),Ut=/Mobile/i.exec(e),_t=!!/Win64/.exec(e),a){Ne=a[1]?parseFloat(a[1]):a[5]?parseFloat(a[5]):NaN,Ne&&document&&document.documentMode&&(Ne=document.documentMode);var l=/(?:Trident\/(\d+.\d+))/.exec(e);Kt=l?parseFloat(l[1])+4:Ne,La=a[2]?parseFloat(a[2]):NaN,ka=a[3]?parseFloat(a[3]):NaN,sa=a[4]?parseFloat(a[4]):NaN,sa?(a=/(?:Chrome\/(\d+\.\d+))/.exec(e),ia=a&&a[1]?parseFloat(a[1]):NaN):ia=NaN}else Ne=La=ka=ia=sa=NaN;if(t){if(t[1]){var o=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);da=o?parseFloat(o[1].replace("_",".")):!0}else da=!1;za=!!t[2],Ra=!!t[3]}else da=za=Ra=!1}}var Va={ie:function(){return ne()||Ne},ieCompatibilityMode:function(){return ne()||Kt>Ne},ie64:function(){return Va.ie()&&_t},firefox:function(){return ne()||La},opera:function(){return ne()||ka},webkit:function(){return ne()||sa},safari:function(){return Va.webkit()},chrome:function(){return ne()||ia},windows:function(){return ne()||za},osx:function(){return ne()||da},linux:function(){return ne()||Ra},iphone:function(){return ne()||Da},mobile:function(){return ne()||Da||Oa||Ga||Ut},nativeApp:function(){return ne()||qt},android:function(){return ne()||Ga},ipad:function(){return ne()||Oa}},nn=Va,rn=!!(typeof window<"u"&&window.document&&window.document.createElement),sn={canUseDOM:rn},Yt=sn,Xt;Yt.canUseDOM&&(Xt=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function dn(e,a){if(!Yt.canUseDOM||a&&!("addEventListener"in document))return!1;var t="on"+e,l=t in document;if(!l){var o=document.createElement("div");o.setAttribute(t,"return;"),l=typeof o[t]=="function"}return!l&&Xt&&e==="wheel"&&(l=document.implementation.hasFeature("Events.wheel","3.0")),l}var cn=dn,gt=10,bt=40,yt=800;function Jt(e){var a=0,t=0,l=0,o=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),l=a*gt,o=t*gt,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(l=e.deltaX),(l||o)&&e.deltaMode&&(e.deltaMode==1?(l*=bt,o*=bt):(l*=yt,o*=yt)),l&&!a&&(a=l<1?-1:1),o&&!t&&(t=o<1?-1:1),{spinX:a,spinY:t,pixelX:l,pixelY:o}}Jt.getEventType=function(){return nn.firefox()?"DOMMouseScroll":cn("wheel")?"wheel":"mousewheel"};var un=Jt;/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/const pn=function(e,a){if(e&&e.addEventListener){const t=function(l){const o=un(l);a&&Reflect.apply(a,this,[l,o])};e.addEventListener("wheel",t,{passive:!0})}},mn={beforeMount(e,a){pn(e,a.value)}},va=function(e){return e.target?.closest("td")},fn=function(e,a,t,l,o){if(!a&&!l&&(!o||te(o)&&!o.length))return e;pe(t)?t=t==="descending"?-1:1:t=t&&t<0?-1:1;const n=l?null:function(r,s){return o?(te(o)||(o=[o]),o.map(d=>pe(d)?Aa(r,d):d(r,s,e))):(a!=="$key"&&ma(r)&&"$value"in r&&(r=r.$value),[ma(r)?Aa(r,a):r])},i=function(r,s){if(l)return l(r.value,s.value);for(let d=0,c=r.key.length;d<c;d++){if(r.key[d]<s.key[d])return-1;if(r.key[d]>s.key[d])return 1}return 0};return e.map((r,s)=>({value:r,index:s,key:n?n(r,s):null})).sort((r,s)=>{let d=i(r,s);return d||(d=r.index-s.index),d*+t}).map(r=>r.value)},Qt=function(e,a){let t=null;return e.columns.forEach(l=>{l.id===a&&(t=l)}),t},gn=function(e,a){let t=null;for(let l=0;l<e.columns.length;l++){const o=e.columns[l];if(o.columnKey===a){t=o;break}}return t||en("ElTable",`No column matching with column-key: ${a}`),t},ht=function(e,a,t){const l=(a.className||"").match(new RegExp(`${t}-table_[^\\s]+`,"gm"));return l?Qt(e,l[0]):null},ae=(e,a)=>{if(!e)throw new Error("Row is required when get row identity");if(pe(a)){if(!a.includes("."))return`${e[a]}`;const t=a.split(".");let l=e;for(const o of t)l=l[o];return`${l}`}else if(ue(a))return a.call(null,e)},De=function(e,a,t=!1,l="children"){const o=e||[],n={};return o.forEach((i,r)=>{if(n[ae(i,a)]={row:i,index:r},t){const s=i[l];te(s)&&Object.assign(n,De(s,a,!0,l))}}),n};function bn(e,a){const t={};let l;for(l in e)t[l]=e[l];for(l in a)if(_e(a,l)){const o=a[l];Ce(o)||(t[l]=o)}return t}function qa(e){return e===""||Ce(e)||(e=Number.parseInt(e,10),Number.isNaN(e)&&(e="")),e}function Zt(e){return e===""||Ce(e)||(e=qa(e),Number.isNaN(e)&&(e=80)),e}function yn(e){return Ge(e)?e:pe(e)?/^\d+(?:px)?$/.test(e)?Number.parseInt(e,10):e:null}function hn(...e){return e.length===0?a=>a:e.length===1?e[0]:e.reduce((a,t)=>(...l)=>a(t(...l)))}function ga(e,a,t,l,o,n){let i=n??0,r=!1;const s=e.indexOf(a),d=s!==-1,c=o?.call(null,a,i),C=y=>{y==="add"?e.push(a):e.splice(s,1),r=!0},f=y=>{let b=0;const w=l?.children&&y[l.children];return w&&te(w)&&(b+=w.length,w.forEach(u=>{b+=f(u)})),b};return(!o||c)&&(Ee(t)?t&&!d?C("add"):!t&&d&&C("remove"):C(d?"remove":"add")),!l?.checkStrictly&&l?.children&&te(a[l.children])&&a[l.children].forEach(y=>{const b=ga(e,y,t??!d,l,o,i+1);i+=f(y)+1,b&&(r=b)}),r}function vn(e,a,t="children",l="hasChildren"){const o=i=>!(te(i)&&i.length);function n(i,r,s){a(i,r,s),r.forEach(d=>{if(d[l]){a(d,null,s+1);return}const c=d[t];o(c)||n(d,c,s+1)})}e.forEach(i=>{if(i[l]){a(i,null,0);return}const r=i[t];o(r)||n(i,r,0)})}const wn=(e,a,t,l)=>{const o={strategy:"fixed",...e.popperOptions},n=ue(l.tooltipFormatter)?l.tooltipFormatter({row:t,column:l,cellValue:It(t,l.property).value}):void 0;return Gl(n)?{slotContent:n,content:null,...e,popperOptions:o}:{slotContent:null,content:n??a,description:n??a,...e,popperOptions:o}};let ce=null;function Cn(e,a,t,l,o,n){const i=wn(e,a,t,l),r={...i,slotContent:void 0};if(ce?.trigger===o){const y=ce.vm.component;Ht(y.props,r),i.slotContent&&(y.slots.content=()=>[i.slotContent]);return}ce?.();const s=n?.refs.tableWrapper,d=s?.dataset.prefix,c=ge(Nt,{virtualTriggering:!0,virtualRef:o,appendTo:s,placement:"top",transition:"none",offset:0,hideAfter:0,...r},i.slotContent?{content:()=>i.slotContent}:void 0);c.appContext={...n.appContext,...n};const C=document.createElement("div");lt(c,C),c.component.exposed.onOpen();const f=s?.querySelector(`.${d}-scrollbar__wrap`);ce=()=>{lt(null,C),f?.removeEventListener("scroll",ce),ce=null},ce.trigger=o,ce.vm=c,f?.addEventListener("scroll",ce)}function el(e){return e.children?To(e.children,el):[e]}function vt(e,a){return e+a.colSpan}const al=(e,a,t,l)=>{let o=0,n=e;const i=t.states.columns.value;if(l){const s=el(l[e]);o=i.slice(0,i.indexOf(s[0])).reduce(vt,0),n=o+s.reduce(vt,0)-1}else o=e;let r;switch(a){case"left":n<t.states.fixedLeafColumnsLength.value&&(r="left");break;case"right":o>=i.length-t.states.rightFixedLeafColumnsLength.value&&(r="right");break;default:n<t.states.fixedLeafColumnsLength.value?r="left":o>=i.length-t.states.rightFixedLeafColumnsLength.value&&(r="right")}return r?{direction:r,start:o,after:n}:{}},Ua=(e,a,t,l,o,n=0)=>{const i=[],{direction:r,start:s,after:d}=al(a,t,l,o);if(r){const c=r==="left";i.push(`${e}-fixed-column--${r}`),c&&d+n===l.states.fixedLeafColumnsLength.value-1?i.push("is-last-column"):!c&&s-n===l.states.columns.value.length-l.states.rightFixedLeafColumnsLength.value&&i.push("is-first-column")}return i};function wt(e,a){return e+(Ue(a.realWidth)||Number.isNaN(a.realWidth)?Number(a.width):a.realWidth)}const Ya=(e,a,t,l)=>{const{direction:o,start:n=0,after:i=0}=al(e,a,t,l);if(!o)return;const r={},s=o==="left",d=t.states.columns.value;return s?r.left=d.slice(0,n).reduce(wt,0):r.right=d.slice(i+1).reverse().reduce(wt,0),r},Oe=(e,a)=>{e&&(Number.isNaN(e[a])||(e[a]=`${e[a]}px`))};function Sn(e){const a=Z(),t=A(!1),l=A([]);return{updateExpandRows:()=>{const o=e.data.value||[],n=e.rowKey.value;if(t.value)l.value=o.slice();else if(n){const i=De(l.value,n);l.value=o.reduce((r,s)=>{const d=ae(s,n);return i[d]&&r.push(s),r},[])}else l.value=[]},toggleRowExpansion:(o,n)=>{ga(l.value,o,n)&&a.emit("expand-change",o,l.value.slice())},setExpandRowKeys:o=>{a.store.assertRowKey();const n=e.data.value||[],i=e.rowKey.value,r=De(n,i);l.value=o.reduce((s,d)=>{const c=r[d];return c&&s.push(c.row),s},[])},isRowExpanded:o=>{const n=e.rowKey.value;return n?!!De(l.value,n)[ae(o,n)]:l.value.includes(o)},states:{expandRows:l,defaultExpandAll:t}}}function xn(e){const a=Z(),t=A(null),l=A(null),o=r=>{a.store.assertRowKey(),t.value=r,i(r)},n=()=>{t.value=null},i=r=>{const{data:s,rowKey:d}=e;let c=null;d.value&&(c=(R(s)||[]).find(C=>ae(C,d.value)===r)),l.value=c,a.emit("current-change",l.value,null)};return{setCurrentRowKey:o,restoreCurrentRowKey:n,setCurrentRowByKey:i,updateCurrentRow:r=>{const s=l.value;if(r&&r!==s){l.value=r,a.emit("current-change",l.value,s);return}!r&&s&&(l.value=null,a.emit("current-change",null,s))},updateCurrentRowData:()=>{const r=e.rowKey.value,s=e.data.value||[],d=l.value;if(!s.includes(d)&&d){if(r){const c=ae(d,r);i(c)}else l.value=null;Ue(l.value)&&a.emit("current-change",null,d)}else t.value&&(i(t.value),n())},states:{_currentRowKey:t,currentRow:l}}}function An(e){const a=A([]),t=A({}),l=A(16),o=A(!1),n=A({}),i=A("hasChildren"),r=A("children"),s=A(!1),d=Z(),c=k(()=>{if(!e.rowKey.value)return{};const m=e.data.value||[];return f(m)}),C=k(()=>{const m=e.rowKey.value,S=Object.keys(n.value),T={};return S.length&&S.forEach(v=>{if(n.value[v].length){const x={children:[]};n.value[v].forEach(L=>{const V=ae(L,m);x.children.push(V),L[i.value]&&!T[V]&&(T[V]={children:[]})}),T[v]=x}}),T}),f=m=>{const S=e.rowKey.value,T={};return vn(m,(v,x,L)=>{const V=ae(v,S);te(x)?T[V]={children:x.map(M=>ae(M,S)),level:L}:o.value&&(T[V]={children:[],lazy:!0,level:L})},r.value,i.value),T};let y=!0;const b=(m=!1)=>{const S=c.value,T=C.value,v=Object.keys(S),x={},L=d.store?.states.defaultExpandAll.value&&y;if(y=!1,v.length){const V=R(t),M=[],q=(P,B)=>{if(m)return a.value.length?L||a.value.includes(B):!!(L||P?.expanded);{const H=L||a.value&&a.value.includes(B);return!!(P?.expanded||H)}};v.forEach(P=>{const B=V[P],H={...S[P]};if(H.expanded=q(B,P),H.lazy){const{loaded:h=!1,loading:E=!1}=B||{};H.loaded=!!h,H.loading=!!E,M.push(P)}x[P]=H});const j=Object.keys(T);o.value&&j.length&&M.length&&j.forEach(P=>{const B=V[P],H=T[P].children;if(M.includes(P)){if(x[P].children.length!==0)throw new Error("[ElTable]children must be an empty array.");x[P].children=H}else{const{loaded:h=!1,loading:E=!1}=B||{};x[P]={lazy:!0,loaded:!!h,loading:!!E,expanded:q(B,P),children:H,level:""}}})}t.value=x,d.store?.updateTableScrollY()};oe(()=>a.value,()=>{b(!0)}),oe(()=>c.value,()=>{y=!0,b()}),oe(()=>C.value,()=>{b()});const w=m=>{a.value=m,b()},u=m=>o.value&&m&&"loaded"in m&&!m.loaded,F=(m,S)=>{d.store.assertRowKey();const T=e.rowKey.value,v=ae(m,T),x=v&&t.value[v];if(v&&x&&"expanded"in x){const L=x.expanded;S=Ce(S)?!x.expanded:S,t.value[v].expanded=S,L!==S&&d.emit("expand-change",m,S),u(x)&&p(m,v,x),d.store.updateTableScrollY()}},g=m=>{d.store.assertRowKey();const S=e.rowKey.value,T=ae(m,S),v=t.value[T];u(v)?p(m,T,v):F(m,void 0)},p=(m,S,T)=>{const{load:v}=d.props;v&&!t.value[S].loaded&&(t.value[S].loading=!0,v(m,T,x=>{if(!te(x))throw new TypeError("[ElTable] data must be an array");t.value[S].loading=!1,t.value[S].loaded=!0,t.value[S].expanded=!0,x.length&&(n.value[S]=x),d.emit("expand-change",m,!0)}))};return{loadData:p,loadOrToggle:g,toggleTreeExpansion:F,updateTreeExpandKeys:w,updateTreeData:b,updateKeyChildren:(m,S)=>{const{lazy:T,rowKey:v}=d.props;if(T){if(!v)throw new Error("[Table] rowKey is required in updateKeyChild");n.value[m]&&(n.value[m]=S)}},normalize:f,states:{expandRowKeys:a,treeData:t,indent:l,lazy:o,lazyTreeNodeMap:n,lazyColumnIdentifier:i,childrenColumnName:r,checkStrictly:s}}}const Fn=(e,a)=>{const t=a.sortingColumn;return!t||pe(t.sortable)?e:fn(e,a.sortProp,a.sortOrder,t.sortMethod,t.sortBy)},ca=e=>{const a=[];return e.forEach(t=>{t.children&&t.children.length>0?a.push.apply(a,ca(t.children)):a.push(t)}),a};function Tn(){const e=Z(),{size:a}=xt(e.proxy?.$props),t=A(null),l=A([]),o=A([]),n=A(!1),i=A([]),r=A([]),s=A([]),d=A([]),c=A([]),C=A([]),f=A([]),y=A([]),b=[],w=A(0),u=A(0),F=A(0),g=A(!1),p=A([]),m=A(!1),S=A(!1),T=A(null),v=A({}),x=A(null),L=A(null),V=A(null),M=A(null),q=A(null),j=k(()=>t.value?De(p.value,t.value):void 0);oe(l,()=>{e.state&&(h(!1),e.props.tableLayout==="auto"&&e.refs.tableHeaderRef?.updateFixedColumnStyle())},{deep:!0});const P=()=>{if(!t.value)throw new Error("[ElTable] prop row-key is required")},B=N=>{N.children?.forEach(z=>{z.fixed=N.fixed,B(z)})},H=()=>{i.value.forEach(I=>{B(I)}),d.value=i.value.filter(I=>I.type!=="selection"&&[!0,"left"].includes(I.fixed));let N;if(i.value?.[0]?.type==="selection"){const I=i.value[0];N=[!0,"left"].includes(I.fixed)||d.value.length&&I.fixed!=="right",N&&d.value.unshift(I)}c.value=i.value.filter(I=>I.fixed==="right");const z=i.value.filter(I=>(N?I.type!=="selection":!0)&&!I.fixed);r.value=[].concat(d.value).concat(z).concat(c.value);const O=ca(z),$=ca(d.value),X=ca(c.value);w.value=O.length,u.value=$.length,F.value=X.length,s.value=[].concat($).concat(O).concat(X),n.value=d.value.length>0||c.value.length>0},h=(N,z=!1)=>{N&&H(),z?e.state.doLayout():e.state.debouncedUpdateLayout()},E=N=>j.value?!!j.value[ae(N,t.value)]:p.value.includes(N),D=()=>{g.value=!1;const N=p.value;p.value=[],N.length&&e.emit("selection-change",[])},_=()=>{let N;if(t.value){N=[];const z=e?.store?.states?.childrenColumnName.value,O=De(l.value,t.value,!0,z);for(const $ in j.value)_e(j.value,$)&&!O[$]&&N.push(j.value[$].row)}else N=p.value.filter(z=>!l.value.includes(z));if(N.length){const z=p.value.filter(O=>!N.includes(O));p.value=z,e.emit("selection-change",z.slice())}},ee=()=>(p.value||[]).slice(),U=(N,z,O=!0,$=!1)=>{const X={children:e?.store?.states?.childrenColumnName.value,checkStrictly:e?.store?.states?.checkStrictly.value};if(ga(p.value,N,z,X,$?void 0:T.value,l.value.indexOf(N))){const I=(p.value||[]).slice();O&&e.emit("select",I,N),e.emit("selection-change",I)}},le=()=>{const N=S.value?!g.value:!(g.value||p.value.length);g.value=N;let z=!1,O=0;const $=e?.store?.states?.rowKey.value,{childrenColumnName:X}=e.store.states,I={children:X.value,checkStrictly:!1};l.value.forEach((de,Pe)=>{const Tl=Pe+O;ga(p.value,de,N,I,T.value,Tl)&&(z=!0),O+=se(ae(de,$))}),z&&e.emit("selection-change",p.value?p.value.slice():[]),e.emit("select-all",(p.value||[]).slice())},Y=()=>{l.value.forEach(N=>{const z=ae(N,t.value),O=j.value[z];O&&(p.value[O.index]=N)})},he=()=>{if(l.value?.length===0){g.value=!1;return}const{childrenColumnName:N}=e.store.states;let z=0,O=0;const $=I=>{for(const de of I){const Pe=T.value&&T.value.call(null,de,z);if(E(de))O++;else if(!T.value||Pe)return!1;if(z++,de[N.value]?.length&&!$(de[N.value]))return!1}return!0},X=$(l.value||[]);g.value=O===0?!1:X},se=N=>{if(!e||!e.store)return 0;const{treeData:z}=e.store.states;let O=0;const $=z.value[N]?.children;return $&&(O+=$.length,$.forEach(X=>{O+=se(X)})),O},Me=(N,z)=>{te(N)||(N=[N]);const O={};return N.forEach($=>{v.value[$.id]=z,O[$.columnKey||$.id]=z}),O},Ye=(N,z,O)=>{L.value&&L.value!==N&&(L.value.order=null),L.value=N,V.value=z,M.value=O},Ja=()=>{let N=R(o);Object.keys(v.value).forEach(z=>{const O=v.value[z];if(!O||O.length===0)return;const $=Qt({columns:s.value},z);$&&$.filterMethod&&(N=N.filter(X=>O.some(I=>$.filterMethod.call(null,I,X,$))))}),x.value=N},Qa=()=>{l.value=Fn(x.value,{sortingColumn:L.value,sortProp:V.value,sortOrder:M.value})},dl=(N=void 0)=>{N&&N.filter||Ja(),Qa()},cl=N=>{const{tableHeaderRef:z}=e.refs;if(!z)return;const O=Object.assign({},z.filterPanels),$=Object.keys(O);if($.length)if(pe(N)&&(N=[N]),te(N)){const X=N.map(I=>gn({columns:s.value},I));$.forEach(I=>{const de=X.find(Pe=>Pe.id===I);de&&(de.filteredValue=[])}),e.store.commit("filterChange",{column:X,values:[],silent:!0,multi:!0})}else $.forEach(X=>{const I=s.value.find(de=>de.id===X);I&&(I.filteredValue=[])}),v.value={},e.store.commit("filterChange",{column:{},values:[],silent:!0})},ul=()=>{L.value&&(Ye(null,null,null),e.store.commit("changeSortCondition",{silent:!0}))},{setExpandRowKeys:pl,toggleRowExpansion:Za,updateExpandRows:ml,states:fl,isRowExpanded:gl}=Sn({data:l,rowKey:t}),{updateTreeExpandKeys:bl,toggleTreeExpansion:yl,updateTreeData:hl,updateKeyChildren:vl,loadOrToggle:wl,states:Cl}=An({data:l,rowKey:t}),{updateCurrentRowData:Sl,updateCurrentRow:xl,setCurrentRowKey:Al,states:Fl}=xn({data:l,rowKey:t});return{assertRowKey:P,updateColumns:H,scheduleLayout:h,isSelected:E,clearSelection:D,cleanSelection:_,getSelectionRows:ee,toggleRowSelection:U,_toggleAllSelection:le,toggleAllSelection:null,updateSelectionByRowKey:Y,updateAllSelected:he,updateFilters:Me,updateCurrentRow:xl,updateSort:Ye,execFilter:Ja,execSort:Qa,execQuery:dl,clearFilter:cl,clearSort:ul,toggleRowExpansion:Za,setExpandRowKeysAdapter:N=>{pl(N),bl(N)},setCurrentRowKey:Al,toggleRowExpansionAdapter:(N,z)=>{s.value.some(({type:O})=>O==="expand")?Za(N,z):yl(N,z)},isRowExpanded:gl,updateExpandRows:ml,updateCurrentRowData:Sl,loadOrToggle:wl,updateTreeData:hl,updateKeyChildren:vl,states:{tableSize:a,rowKey:t,data:l,_data:o,isComplex:n,_columns:i,originColumns:r,columns:s,fixedColumns:d,rightFixedColumns:c,leafColumns:C,fixedLeafColumns:f,rightFixedLeafColumns:y,updateOrderFns:b,leafColumnsLength:w,fixedLeafColumnsLength:u,rightFixedLeafColumnsLength:F,isAllSelected:g,selection:p,reserveSelection:m,selectOnIndeterminate:S,selectable:T,filters:v,filteredData:x,sortingColumn:L,sortProp:V,sortOrder:M,hoverRow:q,...fl,...Cl,...Fl}}}function Ma(e,a){return e.map(t=>t.id===a.id?a:(t.children?.length&&(t.children=Ma(t.children,a)),t))}function Pa(e){e.forEach(a=>{a.no=a.getColumnIndex?.(),a.children?.length&&Pa(a.children)}),e.sort((a,t)=>a.no-t.no)}function En(){const e=Z(),a=Tn();return{ns:ie("table"),...a,mutations:{setData(t,l){const o=R(t._data)!==l;t.data.value=l,t._data.value=l,e.store.execQuery(),e.store.updateCurrentRowData(),e.store.updateExpandRows(),e.store.updateTreeData(e.store.states.defaultExpandAll.value),R(t.reserveSelection)?(e.store.assertRowKey(),e.store.updateSelectionByRowKey()):o?e.store.clearSelection():e.store.cleanSelection(),e.store.updateAllSelected(),e.$ready&&e.store.scheduleLayout()},insertColumn(t,l,o,n){const i=R(t._columns);let r=[];o?(o&&!o.children&&(o.children=[]),o.children.push(l),r=Ma(i,o)):(i.push(l),r=i),Pa(r),t._columns.value=r,t.updateOrderFns.push(n),l.type==="selection"&&(t.selectable.value=l.selectable,t.reserveSelection.value=l.reserveSelection),e.$ready&&(e.store.updateColumns(),e.store.scheduleLayout())},updateColumnOrder(t,l){l.getColumnIndex?.()!==l.no&&(Pa(t._columns.value),e.$ready&&e.store.updateColumns())},removeColumn(t,l,o,n){const i=R(t._columns)||[];if(o)o.children.splice(o.children.findIndex(s=>s.id===l.id),1),Fe(()=>{o.children?.length===0&&delete o.children}),t._columns.value=Ma(i,o);else{const s=i.indexOf(l);s>-1&&(i.splice(s,1),t._columns.value=i)}const r=t.updateOrderFns.indexOf(n);r>-1&&t.updateOrderFns.splice(r,1),e.$ready&&(e.store.updateColumns(),e.store.scheduleLayout())},sort(t,l){const{prop:o,order:n,init:i}=l;if(o){const r=R(t.columns).find(s=>s.property===o);r&&(r.order=n,e.store.updateSort(r,o,n),e.store.commit("changeSortCondition",{init:i}))}},changeSortCondition(t,l){const{sortingColumn:o,sortProp:n,sortOrder:i}=t,r=R(o),s=R(n),d=R(i);Ue(d)&&(t.sortingColumn.value=null,t.sortProp.value=null);const c={filter:!0};e.store.execQuery(c),(!l||!(l.silent||l.init))&&e.emit("sort-change",{column:r,prop:s,order:d}),e.store.updateTableScrollY()},filterChange(t,l){const{column:o,values:n,silent:i}=l,r=e.store.updateFilters(o,n);e.store.execQuery(),i||e.emit("filter-change",r),e.store.updateTableScrollY()},toggleAllSelection(){e.store.toggleAllSelection()},rowSelectedChanged(t,l){e.store.toggleRowSelection(l),e.store.updateAllSelected()},setHoverRow(t,l){t.hoverRow.value=l},setCurrentRow(t,l){e.store.updateCurrentRow(l)}},commit:function(t,...l){const o=e.store.mutations;if(o[t])o[t].apply(e,[e.store.states].concat(l));else throw new Error(`Action not found: ${t}`)},updateTableScrollY:function(){Fe(()=>e.layout.updateScrollY.apply(e.layout))}}}const Be={rowKey:"rowKey",defaultExpandAll:"defaultExpandAll",selectOnIndeterminate:"selectOnIndeterminate",indent:"indent",lazy:"lazy",data:"data","treeProps.hasChildren":{key:"lazyColumnIdentifier",default:"hasChildren"},"treeProps.children":{key:"childrenColumnName",default:"children"},"treeProps.checkStrictly":{key:"checkStrictly",default:!1}};function Nn(e,a){if(!e)throw new Error("Table is required.");const t=En();return t.toggleAllSelection=pa(t._toggleAllSelection,10),Object.keys(Be).forEach(l=>{tl(ll(a,l),l,t)}),Ln(t,a),t}function Ln(e,a){Object.keys(Be).forEach(t=>{oe(()=>ll(a,t),l=>{tl(l,t,e)})})}function tl(e,a,t){let l=e,o=Be[a];ma(Be[a])&&(o=o.key,l=l||Be[a].default),t.states[o].value=l}function ll(e,a){if(a.includes(".")){const t=a.split(".");let l=e;return t.forEach(o=>{l=l[o]}),l}else return e[a]}class kn{observers;table;store;columns;fit;showHeader;height;scrollX;scrollY;bodyWidth;fixedWidth;rightFixedWidth;tableHeight;headerHeight;appendHeight;footerHeight;gutterWidth;constructor(a){this.observers=[],this.table=null,this.store=null,this.columns=[],this.fit=!0,this.showHeader=!0,this.height=A(null),this.scrollX=A(!1),this.scrollY=A(!1),this.bodyWidth=A(null),this.fixedWidth=A(null),this.rightFixedWidth=A(null),this.gutterWidth=0;for(const t in a)_e(a,t)&&(ua(this[t])?this[t].value=a[t]:this[t]=a[t]);if(!this.table)throw new Error("Table is required for Table Layout");if(!this.store)throw new Error("Store is required for Table Layout")}updateScrollY(){const a=this.height.value;if(Ue(a))return!1;const t=this.table.refs.scrollBarRef;if(this.table.vnode.el&&t?.wrapRef){let l=!0;const o=this.scrollY.value;return l=t.wrapRef.scrollHeight>t.wrapRef.clientHeight,this.scrollY.value=l,o!==l}return!1}setHeight(a,t="height"){if(!ze)return;const l=this.table.vnode.el;if(a=yn(a),this.height.value=Number(a),!l&&(a||a===0))return Fe(()=>this.setHeight(a,t));Ge(a)?(l.style[t]=`${a}px`,this.updateElsHeight()):pe(a)&&(l.style[t]=a,this.updateElsHeight())}setMaxHeight(a){this.setHeight(a,"max-height")}getFlattenColumns(){const a=[];return this.table.store.states.columns.value.forEach(t=>{t.isColumnGroup?a.push.apply(a,t.columns):a.push(t)}),a}updateElsHeight(){this.updateScrollY(),this.notifyObservers("scrollable")}headerDisplayNone(a){if(!a)return!0;let t=a;for(;t.tagName!=="DIV";){if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}updateColumnsWidth(){if(!ze)return;const a=this.fit,t=this.table.vnode.el.clientWidth;let l=0;const o=this.getFlattenColumns(),n=o.filter(s=>!Ge(s.width));if(o.forEach(s=>{Ge(s.width)&&s.realWidth&&(s.realWidth=null)}),n.length>0&&a){if(o.forEach(s=>{l+=Number(s.width||s.minWidth||80)}),l<=t){this.scrollX.value=!1;const s=t-l;if(n.length===1)n[0].realWidth=Number(n[0].minWidth||80)+s;else{const d=n.reduce((f,y)=>f+Number(y.minWidth||80),0),c=s/d;let C=0;n.forEach((f,y)=>{if(y===0)return;const b=Math.floor(Number(f.minWidth||80)*c);C+=b,f.realWidth=Number(f.minWidth||80)+b}),n[0].realWidth=Number(n[0].minWidth||80)+s-C}}else this.scrollX.value=!0,n.forEach(s=>{s.realWidth=Number(s.minWidth)});this.bodyWidth.value=Math.max(l,t),this.table.state.resizeState.value.width=this.bodyWidth.value}else o.forEach(s=>{!s.width&&!s.minWidth?s.realWidth=80:s.realWidth=Number(s.width||s.minWidth),l+=s.realWidth}),this.scrollX.value=l>t,this.bodyWidth.value=l;const i=this.store.states.fixedColumns.value;if(i.length>0){let s=0;i.forEach(d=>{s+=Number(d.realWidth||d.width)}),this.fixedWidth.value=s}const r=this.store.states.rightFixedColumns.value;if(r.length>0){let s=0;r.forEach(d=>{s+=Number(d.realWidth||d.width)}),this.rightFixedWidth.value=s}this.notifyObservers("columns")}addObserver(a){this.observers.push(a)}removeObserver(a){const t=this.observers.indexOf(a);t!==-1&&this.observers.splice(t,1)}notifyObservers(a){this.observers.forEach(t=>{switch(a){case"columns":t.state?.onColumnsChange(this);break;case"scrollable":t.state?.onScrollableChange(this);break;default:throw new Error(`Table Layout don't have event ${a}.`)}})}}const{CheckboxGroup:zn}=Re,Rn=Se({name:"GTableFilterPanel",components:{GCheckbox:Re,GCheckboxGroup:zn,GScrollbar:Et,GTooltip:Nt},directives:{ClickOutside:on},props:{placement:{type:String,default:"bottom-start"},store:{type:Object},column:{type:Object},upDataColumn:{type:Function},appendTo:Vl.appendTo},setup(e){const a=Z(),{t}=Dt(),l=ie("table-filter"),o=a?.parent;o.filterPanels.value[e.column.id]||(o.filterPanels.value[e.column.id]=a);const n=A(!1),i=A(null),r=k(()=>e.column&&e.column.filters),s=k(()=>e.column.filterClassName?`${l.b()} ${e.column.filterClassName}`:l.b()),d=k({get:()=>(e.column?.filteredValue||[])[0],set:S=>{c.value&&(ra(S)?c.value.splice(0,1):c.value.splice(0,1,S))}}),c=k({get(){return e.column?e.column.filteredValue||[]:[]},set(S){e.column&&e.upDataColumn("filteredValue",S)}}),C=k(()=>e.column?e.column.filterMultiple:!0),f=S=>S.value===d.value,y=()=>{n.value=!1},b=S=>{S.stopPropagation(),n.value=!n.value},w=()=>{n.value=!1},u=()=>{p(c.value),y()},F=()=>{c.value=[],p(c.value),y()},g=S=>{d.value=S,ra(S)?p([]):p(c.value),y()},p=S=>{e.store.commit("filterChange",{column:e.column,values:S}),e.store.updateAllSelected()};oe(n,S=>{e.column&&e.upDataColumn("filterOpened",S)},{immediate:!0});const m=k(()=>i.value?.popperRef?.contentRef);return{tooltipVisible:n,multiple:C,filterClassName:s,filteredValue:c,filterValue:d,filters:r,handleConfirm:u,handleReset:F,handleSelect:g,isPropAbsent:ra,isActive:f,t,ns:l,showFilterPanel:b,hideFilterPanel:w,popperPaneRef:m,tooltip:i}}}),ol=(e,a)=>{const t=e.__vccOpts||e;for(const[l,o]of a)t[l]=o;return t},Gn={key:0},Dn=["disabled"],On=["label","onClick"];function Vn(e,a,t,l,o,n){const i=we("g-checkbox"),r=we("g-checkbox-group"),s=we("g-scrollbar"),d=we("g-tooltip");return K(),ke(d,{ref:"tooltip",visible:e.tooltipVisible,offset:0,placement:e.placement,"show-arrow":!1,"stop-popper-mouse-event":!1,teleported:"",effect:"light",pure:"","popper-class":e.filterClassName,persistent:"","append-to":e.appendTo},{content:Le(()=>[e.multiple?(K(),Q("div",Gn,[J("div",{class:W(e.ns.e("content"))},[ge(s,{"wrap-class":e.ns.e("wrap")},{default:Le(()=>[ge(r,{modelValue:e.filteredValue,"onUpdate:modelValue":a[0]||(a[0]=c=>e.filteredValue=c),class:W(e.ns.e("checkbox-group"))},{default:Le(()=>[(K(!0),Q(je,null,Sa(e.filters,c=>(K(),ke(i,{key:c.value,value:c.value},{default:Le(()=>[Ha(Te(c.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","class"])]),_:1},8,["wrap-class"])],2),J("div",{class:W(e.ns.e("bottom"))},[J("button",{class:W({[e.ns.is("disabled")]:e.filteredValue.length===0}),disabled:e.filteredValue.length===0,type:"button",onClick:a[1]||(a[1]=(...c)=>e.handleConfirm&&e.handleConfirm(...c))},Te(e.t("el.table.confirmFilter")),11,Dn),J("button",{type:"button",onClick:a[2]||(a[2]=(...c)=>e.handleReset&&e.handleReset(...c))},Te(e.t("el.table.resetFilter")),1)],2)])):(K(),Q("ul",{key:1,class:W(e.ns.e("list"))},[J("li",{class:W([e.ns.e("list-item"),{[e.ns.is("active")]:e.isPropAbsent(e.filterValue)}]),onClick:a[3]||(a[3]=c=>e.handleSelect(null))},Te(e.t("el.table.clearFilter")),3),(K(!0),Q(je,null,Sa(e.filters,c=>(K(),Q("li",{key:c.value,class:W([e.ns.e("list-item"),e.ns.is("active",e.isActive(c))]),label:c.value,onClick:C=>e.handleSelect(c.value)},Te(c.text),11,On))),128))],2))]),_:1},8,["visible","placement","popper-class","append-to"])}const Mn=ol(Rn,[["render",Vn]]);function Xa(e){const a=Z();Ft(()=>{t.value.addObserver(a)}),Ve(()=>{l(t.value),o(t.value)}),Rl(()=>{l(t.value),o(t.value)}),$a(()=>{t.value.removeObserver(a)});const t=k(()=>{const n=e.layout;if(!n)throw new Error("Can not find table layout.");return n}),l=n=>{const i=e.vnode.el?.querySelectorAll("colgroup > col")||[];if(!i.length)return;const r=n.getFlattenColumns(),s={};r.forEach(d=>{s[d.id]=d});for(let d=0,c=i.length;d<c;d++){const C=i[d],f=C.getAttribute("name"),y=s[f];y&&C.setAttribute("width",y.realWidth||y.width)}},o=n=>{const i=e.vnode.el?.querySelectorAll("colgroup > col[name=gutter]")||[];for(let s=0,d=i.length;s<d;s++)i[s].setAttribute("width",n.scrollY.value?n.gutterWidth:"0");const r=e.vnode.el?.querySelectorAll("th.gutter")||[];for(let s=0,d=r.length;s<d;s++){const c=r[s];c.style.width=n.scrollY.value?`${n.gutterWidth}px`:"0",c.style.display=n.scrollY.value?"":"none"}};return{tableLayout:t.value,onColumnsChange:l,onScrollableChange:o}}const me=Symbol("GTable");function Pn(e,a){const t=Z(),l=re(me),o=w=>{w.stopPropagation()},n=(w,u)=>{!u.filters&&u.sortable?b(w,u,!1):u.filterable&&!u.sortable&&o(w),l?.emit("header-click",u,w)},i=(w,u)=>{l?.emit("header-contextmenu",u,w)},r=A(null),s=A(!1),d=A({}),c=(w,u)=>{if(ze&&!(u.children&&u.children.length>0)&&r.value&&e.border){s.value=!0;const F=l;a("set-drag-visible",!0);const g=(F?.vnode.el).getBoundingClientRect().left,p=t.vnode.el.querySelector(`th.${u.id}`),m=p.getBoundingClientRect(),S=m.left-g+30;fa(p,"noclick"),d.value={startMouseLeft:w.clientX,startLeft:m.right-g,startColumnLeft:m.left-g,tableLeft:g};const T=F?.refs.resizeProxy;T.style.left=`${d.value.startLeft}px`,document.onselectstart=function(){return!1},document.ondragstart=function(){return!1};const v=L=>{const V=L.clientX-d.value.startMouseLeft,M=d.value.startLeft+V;T.style.left=`${Math.max(S,M)}px`},x=()=>{if(s.value){const{startColumnLeft:L,startLeft:V}=d.value,M=Number.parseInt(T.style.left,10)-L;u.width=u.realWidth=M,F?.emit("header-dragend",u.width,V-L,u,w),requestAnimationFrame(()=>{e.store.scheduleLayout(!1,!0)}),document.body.style.cursor="",s.value=!1,r.value=null,d.value={},a("set-drag-visible",!1)}document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",x),document.onselectstart=null,document.ondragstart=null,setTimeout(()=>{qe(p,"noclick")},0)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",x)}},C=(w,u)=>{if(u.children&&u.children.length>0)return;const F=w.target;if(!Bt(F))return;const g=F?.closest("th");if(!(!u||!u.resizable||!g)&&!s.value&&e.border){const p=g.getBoundingClientRect(),m=document.body.style,S=g.parentNode?.lastElementChild===g,T=e.allowDragLastColumn||!S;p.width>12&&p.right-w.clientX<8&&T?(m.cursor="col-resize",$e(g,"is-sortable")&&(g.style.cursor="col-resize"),r.value=u):s.value||(m.cursor="",$e(g,"is-sortable")&&(g.style.cursor="pointer"),r.value=null)}},f=()=>{ze&&(document.body.style.cursor="")},y=({order:w,sortOrders:u})=>{if(w==="")return u[0];const F=u.indexOf(w||null);return u[F>u.length-2?0:F+1]},b=(w,u,F)=>{w.stopPropagation();const g=u.order===F?null:F||y(u),p=w.target?.closest("th");if(p&&$e(p,"noclick")){qe(p,"noclick");return}if(!u.sortable)return;const m=w.currentTarget;if(["ascending","descending"].some(L=>$e(m,L)&&!u.sortOrders.includes(L)))return;const S=e.store.states;let T=S.sortProp.value,v;const x=S.sortingColumn.value;(x!==u||x===u&&Ue(x.order))&&(x&&(x.order=null),S.sortingColumn.value=u,T=u.property),g?v=u.order=g:v=u.order=null,S.sortProp.value=T,S.sortOrder.value=v,l?.store.commit("changeSortCondition")};return{handleHeaderClick:n,handleHeaderContextMenu:i,handleMouseDown:c,handleMouseMove:C,handleMouseOut:f,handleSortClick:b,handleFilterClick:o}}function Hn(e){const a=re(me),t=ie("table");return{getHeaderRowStyle:l=>{const o=a?.props.headerRowStyle;return ue(o)?o.call(null,{rowIndex:l}):o},getHeaderRowClass:l=>{const o=[],n=a?.props.headerRowClassName;return pe(n)?o.push(n):ue(n)&&o.push(n.call(null,{rowIndex:l})),o.join(" ")},getHeaderCellStyle:(l,o,n,i)=>{let r=a?.props.headerCellStyle??{};ue(r)&&(r=r.call(null,{rowIndex:l,columnIndex:o,row:n,column:i}));const s=Ya(o,i.fixed,e.store,n);return Oe(s,"left"),Oe(s,"right"),Object.assign({},r,s)},getHeaderCellClass:(l,o,n,i)=>{const r=Ua(t.b(),o,i.fixed,e.store,n),s=[i.id,i.order,i.headerAlign,i.className,i.labelClassName,...r];i.children||s.push("is-leaf"),i.sortable&&s.push("is-sortable");const d=a?.props.headerCellClassName;return pe(d)?s.push(d):ue(d)&&s.push(d.call(null,{rowIndex:l,columnIndex:o,row:n,column:i})),s.push(t.e("cell")),s.filter(c=>!!c).join(" ")}}}const nl=e=>{const a=[];return e.forEach(t=>{t.children?(a.push(t),a.push.apply(a,nl(t.children))):a.push(t)}),a},rl=e=>{let a=1;const t=(o,n)=>{if(n&&(o.level=n.level+1,a<o.level&&(a=o.level)),o.children){let i=0;o.children.forEach(r=>{t(r,o),i+=r.colSpan}),o.colSpan=i}else o.colSpan=1};e.forEach(o=>{o.level=1,t(o,void 0)});const l=[];for(let o=0;o<a;o++)l.push([]);return nl(e).forEach(o=>{o.children?(o.rowSpan=1,o.children.forEach(n=>n.isSubColumn=!0)):o.rowSpan=a-o.level+1,l[o.level-1].push(o)}),l};function $n(e){const a=re(me),t=k(()=>rl(e.store.states.originColumns.value));return{isGroup:k(()=>{const l=t.value.length>1;return l&&a&&(a.state.isGroup.value=!0),l}),toggleAllSelection:l=>{l.stopPropagation(),a?.store.commit("toggleAllSelection")},columnRows:t}}const Wn=Se({name:"GTableHeader",components:{GCheckbox:Re},props:{fixed:{type:String,default:""},store:{required:!0,type:Object},border:Boolean,defaultSort:{type:Object,default:()=>({prop:"",order:""})},appendFilterPanelTo:{type:String},allowDragLastColumn:{type:Boolean}},setup(e,{emit:a}){const t=Z(),l=re(me),o=ie("table"),n=A({}),{onColumnsChange:i,onScrollableChange:r}=Xa(l),s=l?.props.tableLayout==="auto",d=zl(new Map),c=A(),C=()=>{setTimeout(()=>{d.size>0&&(d.forEach((V,M)=>{const q=c.value.querySelector(`.${M.replace(/\s/g,".")}`);if(q){const j=q.getBoundingClientRect().width;V.width=j}}),d.clear())})};oe(d,C),Ve(async()=>{await Fe(),await Fe();const{prop:V,order:M}=e.defaultSort;l?.store.commit("sort",{prop:V,order:M,init:!0}),C()});const{handleHeaderClick:f,handleHeaderContextMenu:y,handleMouseDown:b,handleMouseMove:w,handleMouseOut:u,handleSortClick:F,handleFilterClick:g}=Pn(e,a),{getHeaderRowStyle:p,getHeaderRowClass:m,getHeaderCellStyle:S,getHeaderCellClass:T}=Hn(e),{isGroup:v,toggleAllSelection:x,columnRows:L}=$n(e);return t.state={onColumnsChange:i,onScrollableChange:r},t.filterPanels=n,{ns:o,filterPanels:n,onColumnsChange:i,onScrollableChange:r,columnRows:L,getHeaderRowClass:m,getHeaderRowStyle:p,getHeaderCellClass:T,getHeaderCellStyle:S,handleHeaderClick:f,handleHeaderContextMenu:y,handleMouseDown:b,handleMouseMove:w,handleMouseOut:u,handleSortClick:F,handleFilterClick:g,isGroup:v,toggleAllSelection:x,saveIndexSelection:d,isTableLayoutAuto:s,theadRef:c,updateFixedColumnStyle:C}},render(){const{ns:e,isGroup:a,columnRows:t,getHeaderCellStyle:l,getHeaderCellClass:o,getHeaderRowClass:n,getHeaderRowStyle:i,handleHeaderClick:r,handleHeaderContextMenu:s,handleMouseDown:d,handleMouseMove:c,handleSortClick:C,handleMouseOut:f,store:y,$parent:b,saveIndexSelection:w,isTableLayoutAuto:u}=this;let F=1;return G("thead",{ref:"theadRef",class:{[e.is("group")]:a}},t.map((g,p)=>G("tr",{class:n(p),key:p,style:i(p)},g.map((m,S)=>{m.rowSpan>F&&(F=m.rowSpan);const T=o(p,S,g,m);return u&&m.fixed&&w.set(T,m),G("th",{class:T,colspan:m.colSpan,key:`${m.id}-thead`,rowspan:m.rowSpan,style:l(p,S,g,m),onClick:v=>{v.currentTarget.classList.contains("noclick")||r(v,m)},onContextmenu:v=>s(v,m),onMousedown:v=>d(v,m),onMousemove:v=>c(v,m),onMouseout:f},[G("div",{class:["cell",m.filteredValue&&m.filteredValue.length>0?"highlight":""]},[m.renderHeader?m.renderHeader({column:m,$index:S,store:y,_self:b}):m.label,m.sortable&&G("span",{onClick:v=>C(v,m),class:"caret-wrapper"},[G("i",{onClick:v=>C(v,m,"ascending"),class:"sort-caret ascending"}),G("i",{onClick:v=>C(v,m,"descending"),class:"sort-caret descending"})]),m.filterable&&G(Mn,{store:y,placement:m.filterPlacement||"bottom-start",appendTo:b.appendFilterPanelTo,column:m,upDataColumn:(v,x)=>{m[v]=x}},{"filter-icon":()=>m.renderFilterIcon?m.renderFilterIcon({filterOpened:m.filterOpened}):null})])])}))))}});function wa(e,a,t=.03){return e-a>t}function In(e){const a=re(me),t=A(""),l=A(G("div")),o=(f,y,b)=>{const w=a,u=va(f);let F;const g=w?.vnode.el?.dataset.prefix;u&&(F=ht({columns:e.store.states.columns.value},u,g),F&&w?.emit(`cell-${b}`,y,F,u,f)),w?.emit(`row-${b}`,y,F,f)},n=(f,y)=>{o(f,y,"dblclick")},i=(f,y)=>{e.store.commit("setCurrentRow",y),o(f,y,"click")},r=(f,y)=>{o(f,y,"contextmenu")},s=pa(f=>{e.store.commit("setHoverRow",f)},30),d=pa(()=>{e.store.commit("setHoverRow",null)},30),c=f=>{const y=window.getComputedStyle(f,null),b=Number.parseInt(y.paddingLeft,10)||0,w=Number.parseInt(y.paddingRight,10)||0,u=Number.parseInt(y.paddingTop,10)||0,F=Number.parseInt(y.paddingBottom,10)||0;return{left:b,right:w,top:u,bottom:F}},C=(f,y,b)=>{let w=y.target.parentNode;for(;f>1&&(w=w?.nextSibling,!(!w||w.nodeName!=="TR"));)b(w,"hover-row hover-fixed-row"),f--};return{handleDoubleClick:n,handleClick:i,handleContextMenu:r,handleMouseEnter:s,handleMouseLeave:d,handleCellMouseEnter:(f,y,b)=>{const w=a,u=va(f),F=w?.vnode.el?.dataset.prefix;let g;if(u){g=ht({columns:e.store.states.columns.value},u,F),u.rowSpan>1&&C(u.rowSpan,f,fa);const B=w.hoverState={cell:u,column:g,row:y};w?.emit("cell-mouse-enter",B.row,B.column,B.cell,f)}if(!b)return;const p=f.target.querySelector(".cell");if(!($e(p,`${F}-tooltip`)&&p.childNodes.length))return;const m=document.createRange();m.setStart(p,0),m.setEnd(p,p.childNodes.length);const{width:S,height:T}=m.getBoundingClientRect(),{width:v,height:x}=p.getBoundingClientRect(),{top:L,left:V,right:M,bottom:q}=c(p),j=V+M,P=L+q;wa(S+j,v)||wa(T+P,x)||wa(p.scrollWidth,v)?Cn(b,u.innerText||u.textContent,y,g,u,w):ce?.trigger===u&&ce?.()},handleCellMouseLeave:f=>{const y=va(f);if(!y)return;y.rowSpan>1&&C(y.rowSpan,f,qe);const b=a?.hoverState;a?.emit("cell-mouse-leave",b?.row,b?.column,b?.cell,f)},tooltipContent:t,tooltipTrigger:l}}function Bn(e){const a=re(me),t=ie("table");return{getRowStyle:(l,o)=>{const n=a?.props.rowStyle;return ue(n)?n.call(null,{row:l,rowIndex:o}):n||null},getRowClass:(l,o)=>{const n=[t.e("row")];a?.props.highlightCurrentRow&&l===e.store.states.currentRow.value&&n.push("current-row"),e.stripe&&o%2===1&&n.push(t.em("row","striped"));const i=a?.props.rowClassName;return pe(i)?n.push(i):ue(i)&&n.push(i.call(null,{row:l,rowIndex:o})),n},getCellStyle:(l,o,n,i)=>{const r=a?.props.cellStyle;let s=r??{};ue(r)&&(s=r.call(null,{rowIndex:l,columnIndex:o,row:n,column:i}));const d=Ya(o,e?.fixed,e.store);return Oe(d,"left"),Oe(d,"right"),Object.assign({},s,d)},getCellClass:(l,o,n,i,r)=>{const s=Ua(t.b(),o,e?.fixed,e.store,void 0,r),d=[i.id,i.align,i.className,...s],c=a?.props.cellClassName;return pe(c)?d.push(c):ue(c)&&d.push(c.call(null,{rowIndex:l,columnIndex:o,row:n,column:i})),d.push(t.e("cell")),d.filter(C=>!!C).join(" ")},getSpan:(l,o,n,i)=>{let r=1,s=1;const d=a?.props.spanMethod;if(ue(d)){const c=d({row:l,column:o,rowIndex:n,columnIndex:i});te(c)?(r=c[0],s=c[1]):ma(c)&&(r=c.rowspan,s=c.colspan)}return{rowspan:r,colspan:s}},getColspanRealWidth:(l,o,n)=>{if(o<1)return l[n].realWidth;const i=l.map(({realWidth:r,width:s})=>r||s).slice(n,n+o);return Number(i.reduce((r,s)=>Number(r)+Number(s),-1))}}}const jn=["colspan","rowspan"],Kn=Se({name:"TableTdWrapper",__name:"td-wrapper",props:{colspan:{type:Number,default:1},rowspan:{type:Number,default:1}},setup(e){return(a,t)=>(K(),Q("td",{colspan:e.colspan,rowspan:e.rowspan},[Ae(a.$slots,"default")],8,jn))}});function _n(e){const a=re(me),t=ie("table"),{handleDoubleClick:l,handleClick:o,handleContextMenu:n,handleMouseEnter:i,handleMouseLeave:r,handleCellMouseEnter:s,handleCellMouseLeave:d,tooltipContent:c,tooltipTrigger:C}=In(e),{getRowStyle:f,getRowClass:y,getCellStyle:b,getCellClass:w,getSpan:u,getColspanRealWidth:F}=Bn(e),g=k(()=>e.store.states.columns.value.findIndex(({type:T})=>T==="default")),p=(T,v)=>{const x=a.props.rowKey;return x?ae(T,x):v},m=(T,v,x,L=!1)=>{const{tooltipEffect:V,tooltipOptions:M,store:q}=e,{indent:j,columns:P}=q.states,B=y(T,v);let H=!0;return x&&(B.push(t.em("row",`level-${x.level}`)),H=x.display),G("tr",{style:[H?null:{display:"none"},f(T,v)],class:B,key:p(T,v),onDblclick:h=>l(h,T),onClick:h=>o(h,T),onContextmenu:h=>n(h,T),onMouseenter:()=>i(v),onMouseleave:r},P.value.map((h,E)=>{const{rowspan:D,colspan:_}=u(T,h,v,E);if(!D||!_)return null;const ee=Object.assign({},h);ee.realWidth=F(P.value,_,E);const U={store:e.store,_self:e.context||a,column:ee,row:T,$index:v,cellIndex:E,expanded:L};E===g.value&&x&&(U.treeNode={indent:x.level*j.value,level:x.level},Ee(x.expanded)&&(U.treeNode.expanded=x.expanded,"loading"in x&&(U.treeNode.loading=x.loading),"noLazyChildren"in x&&(U.treeNode.noLazyChildren=x.noLazyChildren)));const le=`${p(T,v)},${E}`,Y=ee.columnKey||ee.rawColumnKey||"",he=h.showOverflowTooltip&&Ht({effect:V},M,h.showOverflowTooltip);return G(Kn,{style:b(v,E,T,h),class:w(v,E,T,h,_-1),key:`${Y}${le}`,rowspan:D,colspan:_,onMouseenter:se=>s(se,T,he),onMouseleave:d},{default:()=>S(E,h,U)})}))},S=(T,v,x)=>v.renderCell(x);return{wrappedRowRender:(T,v)=>{const x=e.store,{isRowExpanded:L,assertRowKey:V}=x,{treeData:M,lazyTreeNodeMap:q,childrenColumnName:j,rowKey:P}=x.states,B=x.states.columns.value;if(B.some(({type:H})=>H==="expand")){const H=L(T),h=m(T,v,void 0,H),E=a.renderExpanded;if(!E)return console.error("[Element Error]renderExpanded is required."),h;const D=[[h]];return(a.props.preserveExpandedContent||H)&&D[0].push(G("tr",{key:`expanded-row__${h.key}`,style:{display:H?"":"none"}},[G("td",{colspan:B.length,class:`${t.e("cell")} ${t.e("expanded-cell")}`},[E({row:T,$index:v,store:x,expanded:H})])])),D}else if(Object.keys(M.value).length){V();const H=ae(T,P.value);let h=M.value[H],E=null;h&&(E={expanded:h.expanded,level:h.level,display:!0},Ee(h.lazy)&&(Ee(h.loaded)&&h.loaded&&(E.noLazyChildren=!(h.children&&h.children.length)),E.loading=h.loading));const D=[m(T,v,E)];if(h){let _=0;const ee=(le,Y)=>{le&&le.length&&Y&&le.forEach(he=>{const se={display:Y.display&&Y.expanded,level:Y.level+1,expanded:!1,noLazyChildren:!1,loading:!1},Me=ae(he,P.value);if(ra(Me))throw new Error("For nested data item, row-key is required.");if(h={...M.value[Me]},h&&(se.expanded=h.expanded,h.level=h.level||se.level,h.display=!!(h.expanded&&se.display),Ee(h.lazy)&&(Ee(h.loaded)&&h.loaded&&(se.noLazyChildren=!(h.children&&h.children.length)),se.loading=h.loading)),_++,D.push(m(he,v+_,se)),h){const Ye=q.value[Me]||he[j.value];ee(Ye,h)}})};h.display=!0;const U=q.value[H]||T[j.value];ee(U,h)}return D}else return m(T,v,void 0)},tooltipContent:c,tooltipTrigger:C}}const qn={store:{required:!0,type:Object},stripe:Boolean,tooltipEffect:String,tooltipOptions:{type:Object},context:{default:()=>({}),type:Object},rowClassName:[String,Function],rowStyle:[Object,Function],fixed:{type:String,default:""},highlight:Boolean},Un=Se({name:"GTableBody",props:qn,setup(e){const a=Z(),t=re(me),l=ie("table"),{wrappedRowRender:o,tooltipContent:n,tooltipTrigger:i}=_n(e),{onColumnsChange:r,onScrollableChange:s}=Xa(t),d=[];return oe(e.store.states.hoverRow,(c,C)=>{const f=a?.vnode.el,y=Array.from(f?.children||[]).filter(u=>u?.classList.contains(`${l.e("row")}`));let b=c;const w=y[b]?.childNodes;if(w?.length){let u=0;Array.from(w).reduce((F,g,p)=>(w[p]?.colSpan>1&&(u=w[p]?.colSpan),g.nodeName!=="TD"&&u===0&&F.push(p),u>0&&u--,F),[]).forEach(F=>{for(b=c;b>0;){const g=y[b-1]?.childNodes;if(g[F]&&g[F].nodeName==="TD"&&g[F].rowSpan>1){fa(g[F],"hover-cell"),d.push(g[F]);break}b--}})}else d.forEach(u=>qe(u,"hover-cell")),d.length=0;!e.store.states.isComplex.value||!ze||an(()=>{const u=y[C],F=y[c];u&&!u.classList.contains("hover-fixed-row")&&qe(u,"hover-row"),F&&fa(F,"hover-row")})}),$a(()=>{ce?.()}),{ns:l,onColumnsChange:r,onScrollableChange:s,wrappedRowRender:o,tooltipContent:n,tooltipTrigger:i}},render(){const{wrappedRowRender:e,store:a}=this,t=a.states.data.value||[];return G("tbody",{tabIndex:-1},[t.reduce((l,o)=>l.concat(e(o,l.length)),[])])}});function Yn(){const e=re(me)?.store,a=k(()=>e?.states.fixedLeafColumnsLength.value??0),t=k(()=>e?.states.rightFixedColumns.value.length??0),l=k(()=>e?.states.columns.value.length??0),o=k(()=>e?.states.fixedColumns.value.length??0),n=k(()=>e?.states.rightFixedColumns.value.length??0);return{leftFixedLeafCount:a,rightFixedLeafCount:t,columnsCount:l,leftFixedCount:o,rightFixedCount:n,columns:e?.states.columns??[]}}function Xn(e){const{columns:a}=Yn(),t=ie("table");return{getCellClasses:(l,o)=>{const n=l[o],i=[t.e("cell"),n.id,n.align,n.labelClassName,...Ua(t.b(),o,n.fixed,e.store)];return n.className&&i.push(n.className),n.children||i.push(t.is("leaf")),i},getCellStyles:(l,o)=>{const n=Ya(o,l.fixed,e.store);return Oe(n,"left"),Oe(n,"right"),n},columns:a}}const Jn=Se({name:"GTableFooter",props:{fixed:{type:String,default:""},store:{required:!0,type:Object},summaryMethod:Function,sumText:String,border:Boolean,defaultSort:{type:Object,default:()=>({prop:"",order:""})}},setup(e){const a=re(me),t=ie("table"),{getCellClasses:l,getCellStyles:o,columns:n}=Xn(e),{onScrollableChange:i,onColumnsChange:r}=Xa(a);return{ns:t,onScrollableChange:i,onColumnsChange:r,getCellClasses:l,getCellStyles:o,columns:n}},render(){const{columns:e,getCellStyles:a,getCellClasses:t,summaryMethod:l,sumText:o}=this,n=this.store.states.data.value;let i=[];return l?i=l({columns:e,data:n}):e.forEach((r,s)=>{if(s===0){i[s]=o;return}const d=n.map(y=>Number(y[r.property])),c=[];let C=!0;d.forEach(y=>{if(!Number.isNaN(+y)){C=!1;const b=`${y}`.split(".")[1];c.push(b?b.length:0)}});const f=Math.max.apply(null,c);C?i[s]="":i[s]=d.reduce((y,b)=>{const w=Number(b);return Number.isNaN(+w)?y:Number.parseFloat((y+b).toFixed(Math.min(f,20)))},0)}),G(G("tfoot",[G("tr",{},[...e.map((r,s)=>G("td",{key:s,colspan:r.colSpan,rowspan:r.rowSpan,class:t(e,s),style:a(r,s)},[G("div",{class:["cell",r.labelClassName]},[i[s]])]))])]))}});function Qn(e){return{setCurrentRow:a=>{e.commit("setCurrentRow",a)},getSelectionRows:()=>e.getSelectionRows(),toggleRowSelection:(a,t,l=!0)=>{e.toggleRowSelection(a,t,!1,l),e.updateAllSelected()},clearSelection:()=>{e.clearSelection()},clearFilter:a=>{e.clearFilter(a)},toggleAllSelection:()=>{e.commit("toggleAllSelection")},toggleRowExpansion:(a,t)=>{e.toggleRowExpansionAdapter(a,t)},clearSort:()=>{e.clearSort()},sort:(a,t)=>{e.commit("sort",{prop:a,order:t})},updateKeyChildren:(a,t)=>{e.updateKeyChildren(a,t)}}}function Zn(e,a,t,l){const o=A(!1),n=A(null),i=A(!1),r=h=>{i.value=h},s=A({width:null,height:null,headerHeight:null}),d=A(!1),c={display:"inline-block",verticalAlign:"middle"},C=A(),f=A(0),y=A(0),b=A(0),w=A(0),u=A(0);Ie(()=>{a.setHeight(e.height)}),Ie(()=>{a.setMaxHeight(e.maxHeight)}),oe(()=>[e.currentRowKey,t.states.rowKey],([h,E])=>{!R(E)||!R(h)||t.setCurrentRowKey(`${h}`)},{immediate:!0}),oe(()=>e.data,h=>{l.store.commit("setData",h)},{immediate:!0,deep:!0}),Ie(()=>{e.expandRowKeys&&t.setExpandRowKeysAdapter(e.expandRowKeys)});const F=()=>{l.store.commit("setHoverRow",null),l.hoverState&&(l.hoverState=null)},g=(h,E)=>{const{pixelX:D,pixelY:_}=E;Math.abs(D)>=Math.abs(_)&&(l.refs.bodyWrapper.scrollLeft+=E.pixelX/5)},p=k(()=>e.height||e.maxHeight||t.states.fixedColumns.value.length>0||t.states.rightFixedColumns.value.length>0),m=k(()=>({width:a.bodyWidth.value?`${a.bodyWidth.value}px`:""})),S=()=>{p.value&&a.updateElsHeight(),a.updateColumnsWidth(),!(typeof window>"u")&&requestAnimationFrame(L)};Ve(async()=>{await Fe(),t.updateColumns(),V(),requestAnimationFrame(S);const h=l.vnode.el,E=l.refs.headerWrapper;e.flexible&&h&&h.parentElement&&(h.parentElement.style.minWidth="0"),s.value={width:C.value=h.offsetWidth,height:h.offsetHeight,headerHeight:e.showHeader&&E?E.offsetHeight:null},t.states.columns.value.forEach(D=>{D.filteredValue&&D.filteredValue.length&&l.store.commit("filterChange",{column:D,values:D.filteredValue,silent:!0})}),l.$ready=!0});const T=(h,E)=>{if(!h)return;const D=Array.from(h.classList).filter(_=>!_.startsWith("is-scrolling-"));D.push(a.scrollX.value?E:"is-scrolling-none"),h.className=D.join(" ")},v=h=>{const{tableWrapper:E}=l.refs;T(E,h)},x=h=>{const{tableWrapper:E}=l.refs;return!!(E&&E.classList.contains(h))},L=function(){if(!l.refs.scrollBarRef)return;if(!a.scrollX.value){const Y="is-scrolling-none";x(Y)||v(Y);return}const h=l.refs.scrollBarRef.wrapRef;if(!h)return;const{scrollLeft:E,offsetWidth:D,scrollWidth:_}=h,{headerWrapper:ee,footerWrapper:U}=l.refs;ee&&(ee.scrollLeft=E),U&&(U.scrollLeft=E);const le=_-D-1;E>=le?v("is-scrolling-right"):v(E===0?"is-scrolling-left":"is-scrolling-middle")},V=()=>{l.refs.scrollBarRef&&(l.refs.scrollBarRef.wrapRef&&ot(l.refs.scrollBarRef.wrapRef,"scroll",L,{passive:!0}),e.fit?nt(l.vnode.el,M):ot(window,"resize",M),nt(l.refs.bodyWrapper,()=>{M(),l.refs?.scrollBarRef?.update()}))},M=()=>{const h=l.vnode.el;if(!l.$ready||!h)return;let E=!1;const{width:D,height:_,headerHeight:ee}=s.value,U=C.value=h.offsetWidth;D!==U&&(E=!0);const le=h.offsetHeight;(e.height||p.value)&&_!==le&&(E=!0);const Y=e.tableLayout==="fixed"?l.refs.headerWrapper:l.refs.tableHeaderRef?.$el;e.showHeader&&Y?.offsetHeight!==ee&&(E=!0),f.value=l.refs.tableWrapper?.scrollHeight||0,b.value=Y?.scrollHeight||0,w.value=l.refs.footerWrapper?.offsetHeight||0,u.value=l.refs.appendWrapper?.offsetHeight||0,y.value=f.value-b.value-w.value-u.value,E&&(s.value={width:U,height:le,headerHeight:e.showHeader&&Y?.offsetHeight||0},S())},q="default",j=k(()=>{const{bodyWidth:h,scrollY:E,gutterWidth:D}=a;return h.value?`${h.value-(E.value?D:0)}px`:""}),P=k(()=>e.maxHeight?"fixed":e.tableLayout),B=k(()=>{if(e.data&&e.data.length)return null;let h="100%";e.height&&y.value&&(h=`${y.value}px`);const E=C.value;return{width:E?`${E}px`:"",height:h}}),H=k(()=>e.height?{height:"100%"}:e.maxHeight?Number.isNaN(Number(e.maxHeight))?{maxHeight:`calc(${e.maxHeight} - ${b.value+w.value}px)`}:{maxHeight:`${e.maxHeight-b.value-w.value}px`}:{});return{isHidden:o,renderExpanded:n,setDragVisible:r,isGroup:d,handleMouseLeave:F,handleHeaderFooterMousewheel:g,tableSize:q,emptyBlockStyle:B,handleFixedMousewheel:(h,E)=>{const D=l.refs.bodyWrapper;if(Math.abs(E.spinY)>0){const _=D.scrollTop;E.pixelY<0&&_!==0&&h.preventDefault(),E.pixelY>0&&D.scrollHeight-D.clientHeight>_&&h.preventDefault(),D.scrollTop+=Math.ceil(E.pixelY/5)}else D.scrollLeft+=Math.ceil(E.pixelX/5)},resizeProxyVisible:i,bodyWidth:j,resizeState:s,doLayout:S,tableBodyStyles:m,tableLayout:P,scrollbarViewStyle:c,scrollbarStyle:H}}function er(e){const a=A(),t=()=>{const l=e.vnode.el.querySelector(".hidden-columns"),o={childList:!0,subtree:!0},n=e.store.states.updateOrderFns;a.value=new MutationObserver(()=>{n.forEach(i=>i())}),a.value.observe(l,o)};Ve(()=>{t()}),$a(()=>{a.value?.disconnect()})}const ar={data:{type:Array,default:()=>[]},width:[String,Number],height:[String,Number],maxHeight:[String,Number],fit:{type:Boolean,default:!0},stripe:Boolean,border:Boolean,rowKey:[String,Function],showHeader:{type:Boolean,default:!0},showSummary:Boolean,sumText:String,summaryMethod:Function,rowClassName:[String,Function],rowStyle:[Object,Function],cellClassName:[String,Function],cellStyle:[Object,Function],headerRowClassName:[String,Function],headerRowStyle:[Object,Function],headerCellClassName:[String,Function],headerCellStyle:[Object,Function],highlightCurrentRow:Boolean,currentRowKey:[String,Number],emptyText:String,expandRowKeys:Array,defaultExpandAll:Boolean,defaultSort:Object,tooltipEffect:String,tooltipOptions:Object,spanMethod:Function,selectOnIndeterminate:{type:Boolean,default:!0},indent:{type:Number,default:16},treeProps:{type:Object,default:()=>({hasChildren:"hasChildren",children:"children",checkStrictly:!1})},lazy:Boolean,load:Function,style:{type:Object,default:()=>({})},className:{type:String,default:""},tableLayout:{type:String,default:"fixed"},scrollbarAlwaysOn:Boolean,flexible:Boolean,showOverflowTooltip:[Boolean,Object],tooltipFormatter:Function,appendFilterPanelTo:String,scrollbarTabindex:{type:[Number,String],default:void 0},allowDragLastColumn:{type:Boolean,default:!0},preserveExpandedContent:{type:Boolean,default:!1}};function sl(e){const a=e.tableLayout==="auto";let t=e.columns||[];a&&t.every(({width:o})=>Ce(o))&&(t=[]);const l=o=>{const n={key:`${e.tableLayout}_${o.id}`,style:{},name:void 0};return a?n.style={width:`${o.width}px`}:n.name=o.id,n};return G("colgroup",{},t.map(o=>G("col",l(o))))}sl.props=["columns","tableLayout"];const tr=()=>{const e=A(),a=(l,o)=>{const n=e.value;n&&n.scrollTo(l,o)},t=(l,o)=>{const n=e.value;n&&Ge(o)&&["Top","Left"].includes(l)&&n[`setScroll${l}`](o)};return{scrollBarRef:e,scrollTo:a,setScrollTop:l=>t("Top",l),setScrollLeft:l=>t("Left",l)}};let lr=1;const or=Se({name:"GTable",directives:{Mousewheel:mn},components:{TableHeader:Wn,TableBody:Un,TableFooter:Jn,GScrollbar:Et,hColgroup:sl},props:ar,emits:["select","select-all","selection-change","cell-mouse-enter","cell-mouse-leave","cell-contextmenu","cell-click","cell-dblclick","row-click","row-contextmenu","row-dblclick","header-click","header-contextmenu","sort-change","filter-change","current-change","header-dragend","expand-change","scroll"],setup(e){const{t:a}=Dt(),t=ie("table"),l=Z();St(me,l);const o=Nn(l,e);l.store=o;const n=new kn({store:l.store,table:l,fit:e.fit,showHeader:e.showHeader});l.layout=n;const i=k(()=>(o.states.data.value||[]).length===0),{setCurrentRow:r,getSelectionRows:s,toggleRowSelection:d,clearSelection:c,clearFilter:C,toggleAllSelection:f,toggleRowExpansion:y,clearSort:b,sort:w,updateKeyChildren:u}=Qn(o),{isHidden:F,renderExpanded:g,setDragVisible:p,isGroup:m,handleMouseLeave:S,handleHeaderFooterMousewheel:T,tableSize:v,emptyBlockStyle:x,handleFixedMousewheel:L,resizeProxyVisible:V,bodyWidth:M,resizeState:q,doLayout:j,tableBodyStyles:P,tableLayout:B,scrollbarViewStyle:H,scrollbarStyle:h}=Zn(e,n,o,l),{scrollBarRef:E,scrollTo:D,setScrollLeft:_,setScrollTop:ee}=tr(),U=pa(j,50),le=`${t.namespace.value}-table_${lr++}`;l.tableId=le,l.state={isGroup:m,resizeState:q,doLayout:j,debouncedUpdateLayout:U};const Y=k(()=>e.sumText??a("el.table.sumText")),he=k(()=>e.emptyText??a("el.table.emptyText")),se=k(()=>rl(o.states.originColumns.value)[0]);return er(l),Tt(()=>{U.cancel()}),{ns:t,layout:n,store:o,columns:se,handleHeaderFooterMousewheel:T,handleMouseLeave:S,tableId:le,tableSize:v,isHidden:F,isEmpty:i,renderExpanded:g,resizeProxyVisible:V,resizeState:q,isGroup:m,bodyWidth:M,tableBodyStyles:P,emptyBlockStyle:x,debouncedUpdateLayout:U,handleFixedMousewheel:L,setCurrentRow:r,getSelectionRows:s,toggleRowSelection:d,clearSelection:c,clearFilter:C,toggleAllSelection:f,toggleRowExpansion:y,clearSort:b,doLayout:j,sort:w,updateKeyChildren:u,t:a,setDragVisible:p,context:l,computedSumText:Y,computedEmptyText:he,tableLayout:B,scrollbarViewStyle:H,scrollbarStyle:h,scrollBarRef:E,scrollTo:D,setScrollLeft:_,setScrollTop:ee,allowDragLastColumn:e.allowDragLastColumn}}}),nr=["data-prefix"],rr={ref:"hiddenColumns",class:"hidden-columns"};function sr(e,a,t,l,o,n){const i=we("hColgroup"),r=we("table-header"),s=we("table-body"),d=we("table-footer"),c=we("g-scrollbar"),C=kl("mousewheel");return K(),Q("div",{ref:"tableWrapper",class:W([{[e.ns.m("fit")]:e.fit,[e.ns.m("striped")]:e.stripe,[e.ns.m("border")]:e.border||e.isGroup,[e.ns.m("hidden")]:e.isHidden,[e.ns.m("group")]:e.isGroup,[e.ns.m("fluid-height")]:e.maxHeight,[e.ns.m("scrollable-x")]:e.layout.scrollX.value,[e.ns.m("scrollable-y")]:e.layout.scrollY.value,[e.ns.m("enable-row-hover")]:!e.store.states.isComplex.value,[e.ns.m("enable-row-transition")]:(e.store.states.data.value||[]).length!==0&&(e.store.states.data.value||[]).length<100,"has-footer":e.showSummary},e.ns.m(e.tableSize),e.className,e.ns.b(),e.ns.m(`layout-${e.tableLayout}`)]),style:He(e.style),"data-prefix":e.ns.namespace.value,onMouseleave:a[1]||(a[1]=(...f)=>e.handleMouseLeave&&e.handleMouseLeave(...f))},[J("div",{class:W(e.ns.e("inner-wrapper"))},[J("div",rr,[Ae(e.$slots,"default")],512),e.showHeader&&e.tableLayout==="fixed"?We((K(),Q("div",{key:0,ref:"headerWrapper",class:W(e.ns.e("header-wrapper"))},[J("table",{ref:"tableHeader",class:W(e.ns.e("header")),style:He(e.tableBodyStyles),border:"0",cellpadding:"0",cellspacing:"0"},[ge(i,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),ge(r,{ref:"tableHeaderRef",border:e.border,"default-sort":e.defaultSort,store:e.store,"append-filter-panel-to":e.appendFilterPanelTo,"allow-drag-last-column":e.allowDragLastColumn,onSetDragVisible:e.setDragVisible},null,8,["border","default-sort","store","append-filter-panel-to","allow-drag-last-column","onSetDragVisible"])],6)],2)),[[C,e.handleHeaderFooterMousewheel]]):ve("",!0),J("div",{ref:"bodyWrapper",class:W(e.ns.e("body-wrapper"))},[ge(c,{ref:"scrollBarRef","view-style":e.scrollbarViewStyle,"wrap-style":e.scrollbarStyle,always:e.scrollbarAlwaysOn,tabindex:e.scrollbarTabindex,onScroll:a[0]||(a[0]=f=>e.$emit("scroll",f))},{default:Le(()=>[J("table",{ref:"tableBody",class:W(e.ns.e("body")),cellspacing:"0",cellpadding:"0",border:"0",style:He({width:e.bodyWidth,tableLayout:e.tableLayout})},[ge(i,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),e.showHeader&&e.tableLayout==="auto"?(K(),ke(r,{key:0,ref:"tableHeaderRef",class:W(e.ns.e("body-header")),border:e.border,"default-sort":e.defaultSort,store:e.store,"append-filter-panel-to":e.appendFilterPanelTo,onSetDragVisible:e.setDragVisible},null,8,["class","border","default-sort","store","append-filter-panel-to","onSetDragVisible"])):ve("",!0),ge(s,{context:e.context,highlight:e.highlightCurrentRow,"row-class-name":e.rowClassName,"tooltip-effect":e.tooltipEffect,"tooltip-options":e.tooltipOptions,"row-style":e.rowStyle,store:e.store,stripe:e.stripe},null,8,["context","highlight","row-class-name","tooltip-effect","tooltip-options","row-style","store","stripe"]),e.showSummary&&e.tableLayout==="auto"?(K(),ke(d,{key:1,class:W(e.ns.e("body-footer")),border:e.border,"default-sort":e.defaultSort,store:e.store,"sum-text":e.computedSumText,"summary-method":e.summaryMethod},null,8,["class","border","default-sort","store","sum-text","summary-method"])):ve("",!0)],6),e.isEmpty?(K(),Q("div",{key:0,ref:"emptyBlock",style:He(e.emptyBlockStyle),class:W(e.ns.e("empty-block"))},[J("span",{class:W(e.ns.e("empty-text"))},[Ae(e.$slots,"empty",{},()=>[Ha(Te(e.computedEmptyText),1)])],2)],6)):ve("",!0),e.$slots.append?(K(),Q("div",{key:1,ref:"appendWrapper",class:W(e.ns.e("append-wrapper"))},[Ae(e.$slots,"append")],2)):ve("",!0)]),_:3},8,["view-style","wrap-style","always","tabindex"])],2),e.showSummary&&e.tableLayout==="fixed"?We((K(),Q("div",{key:1,ref:"footerWrapper",class:W(e.ns.e("footer-wrapper"))},[J("table",{class:W(e.ns.e("footer")),cellspacing:"0",cellpadding:"0",border:"0",style:He(e.tableBodyStyles)},[ge(i,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),ge(d,{border:e.border,"default-sort":e.defaultSort,store:e.store,"sum-text":e.computedSumText,"summary-method":e.summaryMethod},null,8,["border","default-sort","store","sum-text","summary-method"])],6)],2)),[[tt,!e.isEmpty],[C,e.handleHeaderFooterMousewheel]]):ve("",!0),e.border||e.isGroup?(K(),Q("div",{key:2,class:W(e.ns.e("border-left-patch"))},null,2)):ve("",!0)],2),We(J("div",{ref:"resizeProxy",class:W(e.ns.e("column-resize-proxy"))},null,2),[[tt,e.resizeProxyVisible]])],46,nr)}const ir=ol(or,[["render",sr]]),dr={selection:"table-column--selection",expand:"table__expand-column"},cr={default:{order:""},selection:{width:48,minWidth:48,realWidth:48,order:""},expand:{width:48,minWidth:48,realWidth:48,order:""},index:{width:48,minWidth:48,realWidth:48,order:""}},ur=e=>dr[e]||"",pr={selection:{renderHeader({store:e,column:a}){function t(){return e.states.data.value&&e.states.data.value.length===0}return G(Re,{disabled:t(),indeterminate:e.states.selection.value.length>0&&!e.states.isAllSelected.value,"onUpdate:modelValue":e.toggleAllSelection,modelValue:e.states.isAllSelected.value,ariaLabel:a.label})},renderCell({row:e,column:a,store:t,$index:l}){return G(Re,{disabled:a.selectable?!a.selectable.call(null,e,l):!1,onChange:()=>{t.commit("rowSelectedChanged",e)},onClick:o=>o.stopPropagation(),modelValue:t.isSelected(e),ariaLabel:a.label})},sortable:!1,resizable:!1},index:{renderHeader({column:e}){return e.label||"#"},renderCell({column:e,$index:a}){let t=a+1;const l=e.index;return Ge(l)?t=a+l:ue(l)&&(t=l(a)),G("div",{},[t])},sortable:!1},expand:{renderHeader({column:e}){return e.label||""},renderCell({row:e,store:a,expanded:t}){const{ns:l}=a,o=[l.e("expand-icon")];return t&&o.push(l.em("expand-icon","expanded")),G("div",{class:o,onClick:function(n){n.stopPropagation(),a.toggleRowExpansion(e)}},{default:()=>[G(ja,{name:"regular angle-right"})]})},sortable:!1,resizable:!1}};function mr({row:e,column:a,$index:t}){const l=a.property,o=l&&It(e,l).value;return a&&a.formatter?a.formatter(e,a,o,t):o?.toString?.()||""}function fr({row:e,treeNode:a,store:t},l=!1){const{ns:o}=t;if(!a)return l?[G("span",{class:o.e("placeholder")})]:null;const n=[],i=function(r){r.stopPropagation(),!a.loading&&t.loadOrToggle(e)};if(a.indent&&n.push(G("span",{class:o.e("indent"),style:{"padding-left":`${a.indent}px`}})),Ee(a.expanded)&&!a.noLazyChildren){const r=[o.e("expand-icon"),a.expanded?o.em("expand-icon","expanded"):""];let s="regular angle-right";a.loading&&(s="regular spinner"),n.push(G("div",{class:r,onClick:i},{default:()=>[G(ja,{name:s,...a.loading&&{spin:!0}})]}))}else n.push(G("span",{class:o.e("placeholder")}));return n}function Ct(e,a){return e.reduce((t,l)=>(t[l]=l,t),a)}function gr(e,a){const t=Z();return{registerComplexWatchers:()=>{const l=["fixed"],o={realWidth:"width",realMinWidth:"minWidth"},n=Ct(l,o);Object.keys(n).forEach(i=>{const r=o[i];_e(a,r)&&oe(()=>a[r],s=>{let d=s;r==="width"&&i==="realWidth"&&(d=qa(s)),r==="minWidth"&&i==="realMinWidth"&&(d=Zt(s)),t.columnConfig.value[r]=d,t.columnConfig.value[i]=d;const c=r==="fixed";e.value.store.scheduleLayout(c)})})},registerNormalWatchers:()=>{const l=["label","filters","filterMultiple","filteredValue","sortable","index","formatter","className","labelClassName","filterClassName","showOverflowTooltip","tooltipFormatter"],o={property:"prop",align:"realAlign",headerAlign:"realHeaderAlign"},n=Ct(l,o);Object.keys(n).forEach(i=>{const r=o[i];_e(a,r)&&oe(()=>a[r],s=>{t.columnConfig.value[i]=s})})}}}function br(e,a,t){const l=Z(),o=A(""),n=A(!1),i=A(),r=A(),s=ie("table");Ie(()=>{i.value=e.align?`is-${e.align}`:null,i.value}),Ie(()=>{r.value=e.headerAlign?`is-${e.headerAlign}`:i.value,r.value});const d=k(()=>{let u=l.vnode.vParent||l.parent;for(;u&&!u.tableId&&!u.columnId;)u=u.vnode.vParent||u.parent;return u}),c=k(()=>{const{store:u}=l.parent;if(!u)return!1;const{treeData:F}=u.states,g=F.value;return g&&Object.keys(g).length>0}),C=A(qa(e.width)),f=A(Zt(e.minWidth)),y=u=>(C.value&&(u.width=C.value),f.value&&(u.minWidth=f.value),!C.value&&f.value&&(u.width=void 0),u.minWidth||(u.minWidth=80),u.realWidth=Number(Ce(u.width)?u.minWidth:u.width),u),b=u=>{const F=u.type,g=pr[F]||{};Object.keys(g).forEach(m=>{const S=g[m];m!=="className"&&!Ce(S)&&(u[m]=S)});const p=ur(F);if(p){const m=`${R(s.namespace)}-${p}`;u.className=u.className?`${u.className} ${m}`:m}return u},w=u=>{te(u)?u.forEach(g=>F(g)):F(u);function F(g){g?.type?.name==="GTableColumn"&&(g.vParent=l)}};return{columnId:o,realAlign:i,isSubColumn:n,realHeaderAlign:r,columnOrTableParent:d,setColumnWidth:y,setColumnForcedProps:b,setColumnRenders:u=>{e.renderHeader?void 0:u.type!=="selection"&&(u.renderHeader=g=>(l.columnConfig.value.label,Ae(a,"header",g,()=>[u.label]))),a["filter-icon"]&&(u.renderFilterIcon=g=>Ae(a,"filter-icon",g));let F=u.renderCell;return u.type==="expand"?(u.renderCell=g=>G("div",{class:"cell"},[F(g)]),t.value.renderExpanded=g=>a.default?a.default(g):a.default):(F=F||mr,u.renderCell=g=>{let p=null;if(a.default){const L=a.default(g);p=L.some(V=>V.type!==Ll)?L:F(g)}else p=F(g);const{columns:m}=t.value.store.states,S=m.value.findIndex(L=>L.type==="default"),T=c.value&&g.cellIndex===S,v=fr(g,T),x={class:"cell",style:{}};return u.showOverflowTooltip&&(x.class=`${x.class} ${R(s.namespace)}-tooltip`,x.style={width:`${(g.column.realWidth||Number(g.column.width))-1}px`}),w(p),G("div",x,[v,p])}),u},getPropsData:(...u)=>u.reduce((F,g)=>(te(g)&&g.forEach(p=>{F[p]=e[p]}),F),{}),getColumnElIndex:(u,F)=>Array.prototype.indexOf.call(u,F),updateColumnOrder:()=>{t.value.store.commit("updateColumnOrder",l.columnConfig.value)}}}const yr={type:{type:String,default:"default"},label:String,className:String,labelClassName:String,property:String,prop:String,width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},renderHeader:Function,sortable:{type:[Boolean,String],default:!1},sortMethod:Function,sortBy:[String,Function,Array],resizable:{type:Boolean,default:!0},columnKey:String,align:String,headerAlign:String,showOverflowTooltip:{type:[Boolean,Object],default:void 0},tooltipFormatter:Function,fixed:[Boolean,String],formatter:Function,selectable:Function,reserveSelection:Boolean,filterMethod:Function,filteredValue:Array,filters:Array,filterPlacement:String,filterMultiple:{type:Boolean,default:!0},filterClassName:String,index:[Number,Function],sortOrders:{type:Array,default:()=>["ascending","descending",null],validator:e=>e.every(a=>["ascending","descending",null].includes(a))}};let hr=1;const il=Se({name:"GTableColumn",components:{GCheckbox:Re},props:yr,setup(e,{slots:a}){const t=Z(),l=A({}),o=k(()=>{let p=t.parent;for(;p&&!p.tableId;)p=p.parent;return p}),{registerNormalWatchers:n,registerComplexWatchers:i}=gr(o,e),{columnId:r,isSubColumn:s,realHeaderAlign:d,columnOrTableParent:c,setColumnWidth:C,setColumnForcedProps:f,setColumnRenders:y,getPropsData:b,getColumnElIndex:w,realAlign:u,updateColumnOrder:F}=br(e,a,o),g=c.value;r.value=`${g.tableId||g.columnId}_column_${hr++}`,Ft(()=>{s.value=o.value!==g;const p=e.type||"default",m=e.sortable===""?!0:e.sortable,S=p==="selection"?!1:Ce(e.showOverflowTooltip)?g.props.showOverflowTooltip:e.showOverflowTooltip,T=Ce(e.tooltipFormatter)?g.props.tooltipFormatter:e.tooltipFormatter,v={...cr[p],id:r.value,type:p,property:e.prop||e.property,align:u,headerAlign:d,showOverflowTooltip:S,tooltipFormatter:T,filterable:e.filters||e.filterMethod,filteredValue:[],filterPlacement:"",filterClassName:"",isColumnGroup:!1,isSubColumn:!1,filterOpened:!1,sortable:m,index:e.index,rawColumnKey:t.vnode.key};let x=b(["columnKey","label","className","labelClassName","type","renderHeader","formatter","fixed","resizable"],["sortMethod","sortBy","sortOrders"],["selectable","reserveSelection"],["filterMethod","filters","filterMultiple","filterOpened","filteredValue","filterPlacement","filterClassName"]);x=bn(v,x),x=hn(y,C,f)(x),l.value=x,n(),i()}),Ve(()=>{const p=c.value,m=s.value?p.vnode.el.children:p.refs.hiddenColumns?.children,S=()=>w(m||[],t.vnode.el);l.value.getColumnIndex=S,S()>-1&&o.value.store.commit("insertColumn",l.value,s.value?p.columnConfig.value:null,F)}),Tt(()=>{const p=l.value.getColumnIndex;(p?p():-1)>-1&&o.value.store.commit("removeColumn",l.value,s.value?g.columnConfig.value:null,F)}),t.columnId=r.value,t.columnConfig=l},render(){try{const e=this.$slots.default?.({row:{},column:{},$index:-1}),a=[];if(te(e))for(const t of e)t.type?.name==="GTableColumn"||t.shapeFlag&2?a.push(t):t.type===je&&te(t.children)&&t.children.forEach(l=>{l?.patchFlag!==1024&&!pe(l?.children)&&a.push(l)});return G("div",a)}catch{return G("div",[])}}}),fe=tn(ir,{TableColumn:il}),ye=ln(il),vr="0.1.1",Ca={"@flash-global66/g-checkbox":"^0.2.1","@flash-global66/g-icon-font":"^0.0.8","@flash-global66/g-scrollbar":"^0.1.0","@flash-global66/g-tooltip":"^0.1.0","element-plus":"^2.9.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},ss={title:"Data/Table",component:fe,parameters:{docs:{description:{component:`\`GTable\` - Un componente de tabla altamente configurable y extensible para mostrar datos tabulares de manera eficiente y atractiva.

> La versión de este componente es \`${vr}\`.

### Características principales:

- Soporte para filas expandibles y colapsables.
- Selección de filas con soporte para selección múltiple.
- Soporte para ordenamiento de columnas.
- Soporte para filtrado de datos.
- Soporte para columnas fijas y ancladas.

### Instalación

\`\`\`bash
yarn add @flash-global66/g-table
\`\`\`

### Importación básica

\`\`\`typescript
import { GTable, GTableColumn } from '@flash-global66/g-table'
import '@flash-global66/g-table/styles.scss'
import GIconButton from '../components/icon-button/dist/types/index';
\`\`\`

### Dependencias

Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.

${io(Ca)}

> Revisar la documentación de cada dependencia para más información.

\`\`\`bash
# Dependencias global66
yarn add ${it(Ca)}

# Dependencias externas
yarn add ${it(Ca,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`html
<template>
  <g-table :data="tableData" style="width: 100%" stripe border>
    <g-table-column prop="date" label="Date" width="180" />
    <g-table-column prop="name" label="Name" width="180" />
    <g-table-column prop="address" label="Address" />
  </g-table>
</template>

<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
<\/script>
\`\`\`
`}}},argTypes:{data:{description:"Datos a mostrar en la tabla",control:"object",table:{category:"Datos y Contenido",type:{summary:"Array<Object>"},defaultValue:{summary:"[]"}}},emptyText:{name:"empty-text",description:"Texto a mostrar cuando no hay datos",control:"text",table:{category:"Datos y Contenido",type:{summary:"string"},defaultValue:{summary:"No Data"}}},sumText:{name:"sum-text",description:"Texto para la fila de resumen",control:"text",table:{category:"Datos y Contenido",type:{summary:"string"},defaultValue:{summary:"Total"}}},load:{name:"load",description:"Función para carga perezosa",control:!1,table:{category:"Datos y Contenido",type:{summary:"Function"},defaultValue:{summary:""}}},treeProps:{name:"tree-props",description:"Propiedades para filas anidadas",control:"object",table:{category:"Datos y Contenido",type:{summary:"Object"},defaultValue:{summary:"{}"}}},expandRowKeys:{name:"expand-row-keys",description:"Claves de filas expandidas por defecto",control:"object",table:{category:"Datos y Contenido",type:{summary:"Array<string | number>"},defaultValue:{summary:"[]"}}},rowKey:{name:"row-key",description:"Clave de datos de fila, utilizada para optimizar la representación. Obligatoria if reserve-selection está true o se muestran los datos del árbol. Cuando su tipo es cadena, se admite el acceso multinivel (p. ej., user.info.id), pero no se admite user.info[0].id; en ese caso, se debe usar la función.",control:"text",table:{category:"Datos y Contenido",type:{summary:"string | Function"},defaultValue:{summary:""}}},height:{description:"Altura de la tabla",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"auto"}}},maxHeight:{name:"max-height",description:"Altura máxima de la tabla",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"auto"}}},stripe:{description:"Filas con fondo alternado",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"false"}}},border:{description:"Mostrar bordes",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"false"}}},fit:{description:"Ajustar columnas al contenedor",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHeader:{name:"show-header",description:"Mostrar encabezado",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"true"}}},rowClassName:{name:"row-class-name",description:"Clase CSS para filas",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},rowStyle:{name:"row-style",description:"Estilo CSS para filas",control:"object",table:{category:"Apariencia Visual",type:{summary:"Object"},defaultValue:{summary:"{}"}}},cellClassName:{name:"cell-class-name",description:"Clase CSS para celdas",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},headerCellClassName:{name:"header-cell-class-name",description:"Clase CSS para celdas de encabezado",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},headerCellStyle:{name:"header-cell-style",description:"Estilo CSS para celdas de encabezado",control:"object",table:{category:"Apariencia Visual",type:{summary:"Object"},defaultValue:{summary:"{}"}}},headerRowClassName:{name:"header-row-class-name",description:"Clase CSS para filas de encabezado",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},headerRowStyle:{name:"header-row-style",description:"Estilo CSS para filas de encabezado",control:"object",table:{category:"Apariencia Visual",type:{summary:"Object"},defaultValue:{summary:"{}"}}},indent:{description:"Indentación para filas anidadas",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"16"}}},tableLayout:{name:"table-layout",description:"Diseño de la tabla (fixed/auto)",control:"select",options:["fixed","auto"],table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:"fixed"}}},scrollbarTabindex:{name:"scrollbar-tabindex",description:"Tabindex para barra de desplazamiento",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"0"}}},highlightCurrentRow:{name:"highlight-current-row",description:"Resaltar fila actual",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},currentRowKey:{name:"current-row-key",description:"Clave de la fila actual",control:"text",table:{category:"Comportamiento y Funcionalidad",type:{summary:"string"},defaultValue:{summary:""}}},defaultExpandAll:{name:"default-expand-all",description:'Especifica si todas las filas se expanden por defecto, solo funciona cuando la tabla tiene una columna type="expand" o contiene datos de estructura de árbol',control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultSort:{name:"default-sort",description:"Establece la columna y orden por defecto. la propiedad prop es utilizada para establecer la columna de ordenamiento por defecto, la propiedad order es utilizada para definir el tipo de orden por defecto",control:"object",table:{category:"Comportamiento y Funcionalidad",type:{summary:"Object"},defaultValue:{summary:"{}"}}},showSummary:{name:"show-summary",description:"Mostrar fila de resumen",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selectOnIndeterminate:{name:"select-on-indeterminate",description:"Seleccionar en estado indeterminado",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},lazy:{description:"Usar carga perezosa",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},scrollbarAlwaysOn:{name:"scrollbar-always-on",description:"Barra de desplazamiento siempre visible",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showOverflowTooltip:{name:"show-overflow-tooltip",description:"Mostrar tooltip en desbordamiento",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},flexible:{name:"flexible",description:"Tabla adaptable al contenedor",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},allowDragLastColumn:{name:"allow-drag-last-column",description:"Permitir arrastrar última columna",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},preserveExpandedContent:{name:"preserve-expanded-content",description:"Preservar contenido expandido",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},tooltipOptions:{name:"tooltip-options",description:"Opciones para tooltips",control:"object",table:{category:"Herramientas Avanzadas",type:{summary:"Object"},defaultValue:{summary:"{}"}}},appendFilterPanelTo:{name:"append-filter-panel-to",description:"Ubicación para renderizar panel de filtro",control:"text",table:{category:"Herramientas Avanzadas",type:{summary:"string"},defaultValue:{summary:""}}},tooltipFormatter:{name:"tooltip-formatter",description:"Formateador de tooltips",control:!1,table:{category:"Herramientas Avanzadas",type:{summary:"Function"},defaultValue:{summary:""}}},select:{description:"Evento de selección de fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"<T = any>(selection: T[], row: T) => void"}}},selectAll:{name:"select-all",description:"Evento de selección de todas las filas",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(selection: any[]) => void"}}},selectionChange:{name:"selection-change",description:"Evento de cambio de selección",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(newSelection: any[]) => void"}}},cellMouseEnter:{name:"cell-mouse-enter",description:"Evento de entrada del mouse en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void"}}},cellMouseLeave:{name:"cell-mouse-leave",description:"Evento de salida del mouse de una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void"}}},cellClick:{name:"cell-click",description:"Evento de clic en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void"}}},cellDbClick:{name:"cell-bd-click",description:"Evento de doble clic en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void"}}},cellContextMenu:{name:"cell-context-menu",description:"Evento de click derecho en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void"}}},rowClick:{name:"row-click",description:"Evento de clic en una fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, event: Event) => void"}}},rowDbClick:{name:"row-bd-click",description:"Evento de doble clic en una fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, event: Event) => void"}}},rowContextMenu:{name:"row-context-menu",description:"Evento de click derecho en una fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, event: Event) => void"}}},headerClick:{name:"header-click",description:"Evento de clic en el encabezado",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(column: any, event: MouseEvent) => void"}}},headerContextMenu:{name:"header-context-menu",description:"Evento de click derecho en el encabezado",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(column: any, event: MouseEvent) => void"}}},sortChange:{name:"sort-change",description:"Evento de cambio de ordenamiento",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(data: {column: any, prop: string, order: any }) => void"}}},currentChange:{name:"current-change",description:"Evento de cambio de fila actual",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(currentRow: any, oldCurrentRow: any) => void"}}},headerDragend:{name:"header-dragend",description:"Evento de finalización de arrastre del encabezado",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(newWidth: number, oldWidth: number, column: any, event: MouseEvent) => void"}}},expandChange:{name:"expand-change",description:"Evento de cambio de expansión de fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void"}}},scroll:{description:"Evento de desplazamiento de la tabla",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"({ scrollLeft: number, scrollTop: number }) => void"}}},default:{name:"default",description:"Slot para contenido personalizado en las celdas",control:!1,table:{category:"Slots",type:{summary:"Slot"},defaultValue:{summary:""}}},append:{name:"append",description:"Slot para insertarse después de la última fila. Es posible que necesite este espacio si desea implementar scroll infinito para la tabla. Este slot se mostrará por encima de la fila de resumen si la hay.",control:!1,table:{category:"Slots",type:{summary:"Slot"},defaultValue:{summary:""}}},empty:{name:"empty",description:"Slot para contenido personalizado cuando no hay datos",control:!1,table:{category:"Slots",type:{summary:"Slot"},defaultValue:{summary:""}}},clearSelection:{description:"Función para limpiar selección",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},getSelectionRows:{description:"Obtener filas seleccionadas",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => any[]"}}},toggleRowSelection:{description:"Alternar selección de una fila",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(row: any, selected?: boolean, ignoreSelectable = true) => void"}}},toggleAllSelection:{description:"Alternar selección de todas las filas",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},toggleRowExpansion:{description:"Alternar expansión de una fila",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(row: any, expanded?: boolean) => void"}}},setCurrentRow:{description:"Establecer fila actual",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(row: any) => void"}}},clearSort:{description:"Limpiar ordenamiento",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},clearFilter:{description:"Limpiar filtros",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},doLayout:{description:"Forzar re-diseño de la tabla",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},sort:{description:"Ordenar datos de la tabla",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(prop: string, order?: string) => void"}}},scrollTo:{description:"Desplazar la tabla a una posición específica",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(options: number | ScrollToOptions, yCoord?: number) => void"}}},setScrollTop:{name:"set-scroll-top",description:"Establecer posición de desplazamiento vertical",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(scrollTop: number) => void"}}},setScrollLeft:{name:"set-scroll-left",description:"Establecer posición de desplazamiento horizontal",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(scrollLeft: number) => void"}}},columns:{description:"Obtener columnas de la tabla",control:!1,table:{category:"Exposes",type:{summary:"Array",detail:"TableColumnCtx<T>[]"}}},updateKeyChildren:{description:"Actualizar hijos de una clave específica",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(key: string, data: T[]) => void"}}},type:{description:"Tipo de columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"selection" | "index" | "expand" | "default"'},defaultValue:{summary:"default"}}},index:{description:"Índice de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"number"},defaultValue:{summary:0}}},label:{description:"Etiqueta de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},columnKey:{name:"column-key",description:"Clave única para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},prop:{description:"Propiedad de los datos para esta columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},width:{description:"Ancho de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string | number"},defaultValue:{summary:""}}},minWidth:{name:"min-width",description:"Ancho mínimo de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string | number"},defaultValue:{summary:""}}},fixed:{description:"Fijar columna a la izquierda o derecha",control:!1,options:["left","right",!1],table:{category:"Propiedades de Columnas",type:{summary:"string | boolean"},defaultValue:{summary:!1}}},renderHeader:{name:"render-header",description:"Función para renderizar el encabezado de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(data: { column: any, $index: number }) => void"},defaultValue:{summary:""}}},sortable:{description:"Habilitar ordenamiento para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!1}}},sortMethod:{name:"sort-method",description:"Método personalizado para ordenar la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(a: any, b: any) => number"},defaultValue:{summary:""}}},sortBy:{name:"sort-by",description:"Propiedad o propiedades para ordenar la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string | string[]"},defaultValue:{summary:""}}},sortOrders:{name:"sort-orders",description:"Ordenes de ordenamiento permitidos",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Array<string>"},defaultValue:{summary:["ascending","descending"]}}},resizable:{description:"Habilitar redimensionamiento de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!0}}},formatter:{description:"Función para formatear el contenido de la celda",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(row: any, column: any, cellValue: any, index: number) => VNode | string"},defaultValue:{summary:""}}},showOverflowTooltipColumn:{name:"show-overflow-tooltip",description:"Mostrar tooltip en desbordamiento de la celda",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!1}}},align:{description:"Alineación del contenido de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"left" | "center" | "right"'},defaultValue:{summary:"left"}}},headerAlign:{name:"header-align",description:"Alineación del encabezado de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"left" | "center" | "right"'},defaultValue:{summary:"left"}}},className:{name:"class-name",description:"Clase CSS para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},labelClassName:{name:"label-class-name",description:"Clase CSS para la etiqueta de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},selectable:{name:"selectable",description:"Función para determinar si una fila es seleccionable",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(row: any, index: number) => boolean"},defaultValue:{summary:""}}},reserveSelection:{name:"reserve-selection",description:"Preservar selección entre cambios de datos",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!1}}},filters:{name:"filters",description:"Filtros para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Array<{ text: string, value: any }>"},defaultValue:{summary:"[]"}}},filterPlacement:{name:"filter-placement",description:"Ubicación del filtro en la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end"'},defaultValue:{summary:"bottom-start"}}},filterClassName:{name:"filter-class-name",description:"Clase CSS para el filtro de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},filterMultiple:{name:"filter-multiple",description:"Permitir múltiples selecciones en el filtro",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!0}}},filterMethod:{name:"filter-method",description:"Método para filtrado de datos. Si filter-multiple está activado, este método será llamado varias veces por cada fila, y se mostrará la fila si la llamada devuelve true",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(value: any, row: any, column: any) => void"},defaultValue:{summary:""}}},filteredValue:{name:"filtered-value",description:"El valor del filtro para los datos seleccionados, puede ser útil cuando el encabezado de la tabla es renderizado con render-header",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Array<string>"},defaultValue:{summary:"[]"}}},tooltipFormatterColumn:{name:"tooltip-formatter",description:"Formateador de tooltip para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(data: { row: any, column: any, cellValue: any }) => VNode | string"},defaultValue:{summary:""}}},defaultColumn:{name:"default",description:"Slot para contenido personalizado en las celdas de la columna",control:!1,table:{category:"Slots de Columnas",type:{summary:"Slot"},defaultValue:{summary:""}}},header:{name:"header",description:"Slot para contenido personalizado en el encabezado de la columna",control:!1,table:{category:"Slots de Columnas",type:{summary:"Slot"},defaultValue:{summary:""}}},filterIcon:{name:"filter-icon",description:"Slot para el ícono del filtro de la columna",control:!1,table:{category:"Slots de Columnas",type:{summary:"Slot"},defaultValue:{summary:""}}}},args:{data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],height:"auto",maxHeight:"auto",stripe:!1,border:!1,fit:!0,emptyText:"No data",rowClassName:"",rowKey:"",rowStyle:{},headerRowClassName:"",headerRowStyle:{},indent:16,tableLayout:"auto",scrollbarTabindex:0,highlightCurrentRow:!1,currentRowKey:"",defaultExpandAll:!1,defaultSort:{},showSummary:!1,selectOnIndeterminate:!1,lazy:!1,scrollbarAlwaysOn:!1,showOverflowTooltip:!1,flexible:!1,allowDragLastColumn:!1,preserveExpandedContent:!1,tooltipOptions:{},appendFilterPanelTo:"",tooltipFormatter:null,highlight:!1,showHeader:!0,sumText:"",treeProps:{},expandRowKeys:void 0,cellClassName:"",headerCellClassName:"",headerCellStyle:{}}},Xe={name:"Básico",render:e=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-table v-bind="args" style="width: 100%">
          <g-table-column prop="date" label="Date" width="180" />
          <g-table-column prop="name" label="Name" width="180" />
          <g-table-column prop="address" label="Address" />
        </g-table>
      </g-config-provider>
    `})},Je={name:"Tabla con fondo y borde",parameters:{docs:{description:{story:"Tabla con fondo y borde, con filas alternas de color diferente."}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]}},template:`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" stripe border>
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>`})},Qe={name:"Tabla con estados",parameters:{docs:{description:{story:`Puede destacar el contenido de la tabla para distinguir entre "success, information, warning, danger" y otros estados.

Utilice row-class-name en el-table para agregar clases personalizadas a una fila específica. De esa manera podrá darle diseño con esas clases.`}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-05",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],tableRowClassName:({row:l,rowIndex:o})=>o===1?"!bg-error-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":o===3?"!bg-success-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":o===5?"!bg-warning-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":o===7?"!bg-info-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":"",cellClassName:({row:l,column:o,rowIndex:n})=>n===1?"group-hover:!bg-error-bg":n===3?"group-hover:!bg-success-bg":n===5?"group-hover:!bg-warning-bg":n===7?"group-hover:!bg-info-bg":""}},template:`
    <g-config-provider>
      <g-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        :cell-class-name="cellClassName"
      >
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>`})},Ze={name:"Tabla con columnas fijas",parameters:{docs:{description:{story:`Cuando se tienen demasiadas columnas, puede fijar algunas de ellas.

El atributo fixed es utilizado en el-table-column, este acepta un Boolean. Si es true, la columna será fijada a la izquierda. También acepta dos tipos: 'left' y 'right', ambos indican donde debe ser fijada la columna.`}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye,GIconButton:Ot},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}],handleClick:()=>{console.log("click")}}},template:`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%">
        <g-table-column fixed prop="date" label="Date" width="150" />
        <g-table-column prop="name" label="Name" width="120" />
        <g-table-column prop="state" label="State" width="120" />
        <g-table-column prop="city" label="City" width="120" />
        <g-table-column prop="address" label="Address" width="600" />
        <g-table-column prop="zip" label="Zip" width="120" />
        <g-table-column fixed="right" label="Operations" min-width="100" align="center">
          <template #default>
            <div class="flex items-center justify-center gap-2">
              <g-icon-button
                variant="grey"
                icon="regular pen"
                size="small"
              />
              <g-icon-button
                variant="grey"
                icon="regular trash"
                size="small"
              />
            </div>
          </template>
        </g-table-column>
      </g-table>
    </g-config-provider>`})},ea={name:"Tabla con encabezado agrupado",parameters:{docs:{description:{story:`Cuando la estructura de datos es compleja, puede usar la cabecera de grupo para mostrar la jerarquía de datos.

Solo necesita colocar el-table-column dentro de otro el-table-column, de esta forma logrará agruparles.`}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye,GButton:Ka},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]}},template:`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" height="450">
        <g-table-column prop="date" label="Date" />
        <g-table-column prop="name" label="Name" />
        <g-table-column prop="zip" label="Zip" />
        <g-table-column label="Address Info" fixed="right">
          <g-table-column prop="state" label="State" />
          <g-table-column prop="city" label="City" />
          <g-table-column prop="address" label="Address" min-width="200" />
        </g-table-column>
      </g-table>
    </g-config-provider>`})},aa={name:"Tabla con selección de filas",parameters:{docs:{description:{story:"Tabla con selección de filas, permitiendo seleccionar múltiples filas y realizar acciones sobre ellas. Adicionalmente cuenta con la funcion de mostrar tooltips en celdas con contenido largo."}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye,GButton:Ka},setup(){return{tableData:[{date:"2016-05-04",name:"Aleyna Kutzner",address:"Lohrbergstr. 86c, Süd Lilli, Saarland"},{date:"2016-05-03",name:"Helen Jacobi",address:"760 A Street, South Frankfield, Illinois"},{date:"2016-05-02",name:"Brandon Deckert",address:"Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen"},{date:"2016-05-01",name:"Margie Smith",address:"23618 Windsor Drive, West Ricardoview, Idaho"}]}},template:`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%">
        <g-table-column type="selection" width="55" />
        <g-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </g-table-column>
        <g-table-column property="name" label="Name" width="120" />
        <g-table-column
          property="address"
          label="use show-overflow-tooltip"
          width="240"
          show-overflow-tooltip
        />
        <g-table-column property="address" label="address" />
      </g-table>
    </g-config-provider>`})},ta={name:"Tabla con filas expandibles",parameters:{docs:{description:{story:`Cuando el contenido de la fila es demasiado largo y no quiere mostrar la barra de desplazamiento horizontal, puede usar la función de fila expandible.

Puede activar la fila expandible estableciendo la propiedad type="expand" o con slots. La plantilla para el-table-column se mostrará como el contenido de la fila expandible, y puede acceder a los mismos atributos que cuando está usando slots en plantillas de columnas personalizadas.`}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye,GButton:Ka},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-02",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-04",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-01",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-08",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-06",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-07",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]}]}},template:`
    <g-config-provider>
      <g-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <g-table-column type="expand">
          <template #default="props">
            <div>
              <p m="t-0 b-2">State: {{ props.row.state }}</p>
              <p m="t-0 b-2">City: {{ props.row.city }}</p>
              <p m="t-0 b-2">Address: {{ props.row.address }}</p>
              <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
              <h3>Family</h3>
              <g-table :data="props.row.family" border>
                <g-table-column label="Name" prop="name" />
                <g-table-column label="State" prop="state" />
                <g-table-column label="City" prop="city" />
                <g-table-column label="Address" prop="address" />
                <g-table-column label="Zip" prop="zip" />
              </g-table>
            </div>
          </template>
        </g-table-column>
        <g-table-column label="Date" prop="date" />
        <g-table-column label="Name" prop="name" />
      </g-table>
    </g-config-provider>`})},la={name:"Tabla con encabezado agrupado",parameters:{docs:{description:{story:"Puede visualizar datos con una estructura de árbol. Cuando la fila contiene el campo children, se trata como datos anidados. Para renderizar datos anidados, la propiedad row-key es necesaria. Además, los datos de registros secundarios se pueden cargar de forma asíncrona. Establezca la propiedad lazy de la tabla a true y la función que usara a load. Especifique el atributo hasChildren en la fila para determinar qué fila contiene descendencia. Tanto children como hasChildren pueden configurarse a través de tree-props."}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye},setup(){return{tableData:[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}],load:(l,o,n)=>{setTimeout(()=>{n([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)},tableData1:[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0,address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]}},template:`
    <g-config-provider>
      <div>
        <g-table
          :data="tableData"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          default-expand-all
        >
          <g-table-column prop="date" label="Date" sortable />
          <g-table-column prop="name" label="Name" sortable />
          <g-table-column prop="address" label="Address" sortable />
        </g-table>

        <g-table
          :data="tableData1"
          style="width: 100%"
          row-key="id"
          border
          lazy
          :load="load"
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <g-table-column prop="date" label="Date" />
          <g-table-column prop="name" label="Name" />
          <g-table-column prop="address" label="Address" />
        </g-table>
      </div>
    </g-config-provider>`})},oa={name:"Tabla con formateador de tooltip",parameters:{docs:{description:{story:"Tabla con formateador de tooltip, mostrando información adicional al pasar el cursor sobre las celdas."}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye,GLink:st,GTag:no},setup(){return{tableData:[{address:"Lohrbergstr. 86c, Süd Lilli, Saarland",tags:["Office","Home","Park","Garden"],url:"https://github.com/element-plus/element-plus/issues"},{address:"760 A Street, South Frankfield, Illinois",tags:["error","warning","success","info"],url:"https://github.com/element-plus/element-plus/pulls"},{address:"Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",tags:["one","two","three","four","five"],url:"https://github.com/element-plus/element-plus/discussions"},{address:"23618 Windsor Drive, West Ricardoview, Idaho",tags:["blue","white","dark","gray","red","bright"],url:"https://github.com/element-plus/element-plus/actions"}],tableRowFormatter:o=>`${o.cellValue}: table formatter`,withVNode:o=>G(st,{type:"primary",href:o.cellValue},()=>G("span",null,o.cellValue)),tagsFormatter:o=>o.row.tags.join(", ")}},template:`
    <g-config-provider>
      <g-table
        :data="tableData"
        show-overflow-tooltip
        :tooltip-formatter="tableRowFormatter"
        style="width: 100%"
        border
      >
        <g-table-column
          prop="address"
          label="extends table formatter"
          width="240"
        />
        <g-table-column
          prop="tags"
          label="formatter object"
          width="240"
          :tooltip-formatter="tagsFormatter"
        >
          <template #default="{ row }">
            <div class="flex gap-2">
              <g-tag
                v-for="tag in row.tags"
                :key="tag"
                type="info"
              >
                {{ tag }}
              </g-tag>
            </div>
          </template>
        </g-table-column>
        <g-table-column
          prop="url"
          label="with vnode"
          width="240"
          :tooltip-formatter="withVNode"
        />
      </g-table>
    </g-config-provider>`})},na={name:"Tabla con columnas editables y eliminables",parameters:{docs:{description:{story:"Tabla con columnas editables y eliminables, permitiendo modificar el contenido de las celdas y eliminar filas."}}},render:()=>({components:{GTable:fe,GConfigProvider:be,GTableColumn:ye,GIconFont:ja,GSelect:ro,GInput:so,GIconButton:Ot},setup(){const e=A([{mode:"send",currency:"USD",amount:1e3,reason:"initial-investment",detail:"Este es un detalle de la inversión inicial realizada en el proyecto.",isEditable:!1},{mode:"receive",currency:"EUR",amount:500,reason:"marketing-expenses",detail:"Este es una descripción detallada de los gastos de marketing asociados con el proyecto.",isEditable:!1},{mode:"send",currency:"GBP",amount:750,reason:"operational-costs",detail:"Este es una descripción detallada de los costos operativos del proyecto.",isEditable:!1},{mode:"receive",currency:"JPY",amount:3e3,reason:"miscellaneous-expenses",detail:"Este es una descripción detallada de los gastos misceláneos del proyecto.",isEditable:!1},{mode:"send",currency:"AUD",amount:1200,reason:"travel-expenses",detail:"Este es una descripción detallada de los gastos de viaje relacionados con el proyecto.",isEditable:!1},{mode:"send",currency:"CAD",amount:800,reason:"consulting-fees",detail:"Este es una descripción detallada de los honorarios de consultoría del proyecto.",isEditable:!1}]);return{tableData:e,handleClick:()=>{console.log("click")},handleEdit:(o,n)=>{e.value.splice(o,1,{...n,isEditable:!n.isEditable})},deleteRow:o=>{e.value.splice(o,1)}}},template:`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" height="100%" border>
        <g-table-column prop="mode" label="Modalidad">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.mode"
                :options="[
                  { title: 'Send', value: 'send', icon: 'regular gift' },
                  { title: 'Receive', value: 'receive', icon: 'regular money-bill-alt' }
                ]"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.mode }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="currency" label="Moneda">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.currency"
                :options="[
                  { title: 'USD', value: 'USD' },
                  { title: 'EUR', value: 'EUR' },
                  { title: 'GBP', value: 'GBP' },
                  { title: 'JPY', value: 'JPY' },
                  { title: 'AUD', value: 'AUD' },
                  { title: 'CAD', value: 'CAD' }
                ]"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.currency }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="amount" label="Monto">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-input
                v-model.number="scope.row.amount"
                type="number"
                @change="handleClick"
              >
                <template #suffix>
                  <div class="flex gap-2 items-center">
                    <span class="text-gray-4">{{ scope.row.currency }}</span>
                  </div>
                </template>
              </g-input>
            </div>
            <div v-else>
              {{ scope.row.amount }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="reason" label="Razón">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.reason"
                :options="[
                  { title: 'Inversión incial', value: 'initial-investment' },
                  { title: 'Gastos de marketing', value: 'marketing-expenses' },
                  { title: 'Costos operativos', value: 'operational-costs' },
                  { title: 'Gastos misceláneos', value: 'miscellaneous-expenses' },
                  { title: 'Gastos de viaje', value: 'travel-expenses' },
                  { title: 'Honorarios de consultoría', value: 'consulting-fees' }
                ]"
                @change="handleClick"
                :fit-input-width="240"
              />
            </div>
            <div v-else>
              {{ scope.row.reason }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="detail" label="Detalle" width="300">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-input
                v-model="scope.row.detail"
                type="text"
                label="Detalle"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.detail }}
            </div>
          </template>
        </g-table-column>
        <g-table-column label="Acciones" align="center" width="100">
          <template #default="scope">
            <div class="flex items-center justify-center items gap-2">
              <g-icon-button
                v-if="!scope.row.isEditable"
                @click="handleEdit(scope.$index, scope.row)"
                variant="grey"
                icon="regular pen"
                size="small" 
              />
              <g-icon-button
                v-else
                @click="handleEdit(scope.$index, scope.row)"
                variant="grey"
                icon="regular check"
                size="small"
              />
              <g-icon-button
                variant="grey"
                icon="regular trash"
                size="small"
                @click="deleteRow(scope.$index)"
              />
            </div>
          </template>
        </g-table-column>
      </g-table>
    </g-config-provider>`})};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <g-config-provider>
        <g-table v-bind="args" style="width: 100%">
          <g-table-column prop="date" label="Date" width="180" />
          <g-table-column prop="name" label="Name" width="180" />
          <g-table-column prop="address" label="Address" />
        </g-table>
      </g-config-provider>
    \`
  })
}`,...Xe.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con fondo y borde',
  parameters: {
    docs: {
      description: {
        story: \`Tabla con fondo y borde, con filas alternas de color diferente.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn
    },
    setup() {
      const tableData = [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }];
      return {
        tableData
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" stripe border>
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>\`
  })
}`,...Je.parameters?.docs?.source}}};Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con estados',
  parameters: {
    docs: {
      description: {
        story: \`Puede destacar el contenido de la tabla para distinguir entre "success, information, warning, danger" y otros estados.

Utilice row-class-name en el-table para agregar clases personalizadas a una fila específica. De esa manera podrá darle diseño con esas clases.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn
    },
    setup() {
      const tableData = [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-05',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }];
      const tableRowClassName = ({
        row,
        rowIndex
      }: {
        row: any;
        rowIndex: number;
      }) => {
        if (rowIndex === 1) return '!bg-error-bg group !bg-opacity-50 opacity-75 hover:!opacity-100';
        if (rowIndex === 3) return '!bg-success-bg group !bg-opacity-50 opacity-75 hover:!opacity-100';
        if (rowIndex === 5) return '!bg-warning-bg group !bg-opacity-50 opacity-75 hover:!opacity-100';
        if (rowIndex === 7) return '!bg-info-bg group !bg-opacity-50 opacity-75 hover:!opacity-100';
        return '';
      };
      const cellClassName = ({
        row,
        column,
        rowIndex
      }: {
        row: any;
        column: any;
        rowIndex: number;
      }) => {
        if (rowIndex === 1) return 'group-hover:!bg-error-bg';
        if (rowIndex === 3) return 'group-hover:!bg-success-bg';
        if (rowIndex === 5) return 'group-hover:!bg-warning-bg';
        if (rowIndex === 7) return 'group-hover:!bg-info-bg';
        return '';
      };
      return {
        tableData,
        tableRowClassName,
        cellClassName
      };
    },
    template: \`
    <g-config-provider>
      <g-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        :cell-class-name="cellClassName"
      >
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>\`
  })
}`,...Qe.parameters?.docs?.source}}};Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con columnas fijas',
  parameters: {
    docs: {
      description: {
        story: \`Cuando se tienen demasiadas columnas, puede fijar algunas de ellas.

El atributo fixed es utilizado en el-table-column, este acepta un Boolean. Si es true, la columna será fijada a la izquierda. También acepta dos tipos: 'left' y 'right', ambos indican donde debe ser fijada la columna.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn,
      GIconButton
    },
    setup() {
      const tableData = [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office'
      }];
      const handleClick = () => {
        console.log('click');
      };
      return {
        tableData,
        handleClick
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%">
        <g-table-column fixed prop="date" label="Date" width="150" />
        <g-table-column prop="name" label="Name" width="120" />
        <g-table-column prop="state" label="State" width="120" />
        <g-table-column prop="city" label="City" width="120" />
        <g-table-column prop="address" label="Address" width="600" />
        <g-table-column prop="zip" label="Zip" width="120" />
        <g-table-column fixed="right" label="Operations" min-width="100" align="center">
          <template #default>
            <div class="flex items-center justify-center gap-2">
              <g-icon-button
                variant="grey"
                icon="regular pen"
                size="small"
              />
              <g-icon-button
                variant="grey"
                icon="regular trash"
                size="small"
              />
            </div>
          </template>
        </g-table-column>
      </g-table>
    </g-config-provider>\`
  })
}`,...Ze.parameters?.docs?.source}}};ea.parameters={...ea.parameters,docs:{...ea.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con encabezado agrupado',
  parameters: {
    docs: {
      description: {
        story: \`Cuando la estructura de datos es compleja, puede usar la cabecera de grupo para mostrar la jerarquía de datos.

Solo necesita colocar el-table-column dentro de otro el-table-column, de esta forma logrará agruparles.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn,
      GButton
    },
    setup() {
      const tableData = [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }, {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036'
      }];
      return {
        tableData
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" height="450">
        <g-table-column prop="date" label="Date" />
        <g-table-column prop="name" label="Name" />
        <g-table-column prop="zip" label="Zip" />
        <g-table-column label="Address Info" fixed="right">
          <g-table-column prop="state" label="State" />
          <g-table-column prop="city" label="City" />
          <g-table-column prop="address" label="Address" min-width="200" />
        </g-table-column>
      </g-table>
    </g-config-provider>\`
  })
}`,...ea.parameters?.docs?.source}}};aa.parameters={...aa.parameters,docs:{...aa.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con selección de filas',
  parameters: {
    docs: {
      description: {
        story: \`Tabla con selección de filas, permitiendo seleccionar múltiples filas y realizar acciones sobre ellas. Adicionalmente cuenta con la funcion de mostrar tooltips en celdas con contenido largo.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn,
      GButton
    },
    setup() {
      const tableData = [{
        date: '2016-05-04',
        name: 'Aleyna Kutzner',
        address: 'Lohrbergstr. 86c, Süd Lilli, Saarland'
      }, {
        date: '2016-05-03',
        name: 'Helen Jacobi',
        address: '760 A Street, South Frankfield, Illinois'
      }, {
        date: '2016-05-02',
        name: 'Brandon Deckert',
        address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen'
      }, {
        date: '2016-05-01',
        name: 'Margie Smith',
        address: '23618 Windsor Drive, West Ricardoview, Idaho'
      }];
      return {
        tableData
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%">
        <g-table-column type="selection" width="55" />
        <g-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </g-table-column>
        <g-table-column property="name" label="Name" width="120" />
        <g-table-column
          property="address"
          label="use show-overflow-tooltip"
          width="240"
          show-overflow-tooltip
        />
        <g-table-column property="address" label="address" />
      </g-table>
    </g-config-provider>\`
  })
}`,...aa.parameters?.docs?.source}}};ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con filas expandibles',
  parameters: {
    docs: {
      description: {
        story: \`Cuando el contenido de la fila es demasiado largo y no quiere mostrar la barra de desplazamiento horizontal, puede usar la función de fila expandible.

Puede activar la fila expandible estableciendo la propiedad type="expand" o con slots. La plantilla para el-table-column se mostrará como el contenido de la fila expandible, y puede acceder a los mismos atributos que cuando está usando slots en plantillas de columnas personalizadas.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn,
      GButton
    },
    setup() {
      const tableData = [{
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [{
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }]
      }, {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [{
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }]
      }, {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [{
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }]
      }, {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [{
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }]
      }, {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [{
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }]
      }, {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [{
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }]
      }, {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'San Francisco',
        address: '3650 21st St, San Francisco',
        zip: 'CA 94114',
        family: [{
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }, {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114'
        }]
      }];
      return {
        tableData
      };
    },
    template: \`
    <g-config-provider>
      <g-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <g-table-column type="expand">
          <template #default="props">
            <div>
              <p m="t-0 b-2">State: {{ props.row.state }}</p>
              <p m="t-0 b-2">City: {{ props.row.city }}</p>
              <p m="t-0 b-2">Address: {{ props.row.address }}</p>
              <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
              <h3>Family</h3>
              <g-table :data="props.row.family" border>
                <g-table-column label="Name" prop="name" />
                <g-table-column label="State" prop="state" />
                <g-table-column label="City" prop="city" />
                <g-table-column label="Address" prop="address" />
                <g-table-column label="Zip" prop="zip" />
              </g-table>
            </div>
          </template>
        </g-table-column>
        <g-table-column label="Date" prop="date" />
        <g-table-column label="Name" prop="name" />
      </g-table>
    </g-config-provider>\`
  })
}`,...ta.parameters?.docs?.source}}};la.parameters={...la.parameters,docs:{...la.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con encabezado agrupado',
  parameters: {
    docs: {
      description: {
        story: \`Puede visualizar datos con una estructura de árbol. Cuando la fila contiene el campo children, se trata como datos anidados. Para renderizar datos anidados, la propiedad row-key es necesaria. Además, los datos de registros secundarios se pueden cargar de forma asíncrona. Establezca la propiedad lazy de la tabla a true y la función que usara a load. Especifique el atributo hasChildren en la fila para determinar qué fila contiene descendencia. Tanto children como hasChildren pueden configurarse a través de tree-props.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn
    },
    setup() {
      const tableData = [{
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles',
        children: [{
          id: 31,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          id: 32,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }, {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }];
      const tableData1 = [{
        id: 1,
        date: '2016-05-02',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        id: 2,
        date: '2016-05-04',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        id: 3,
        date: '2016-05-01',
        name: 'wangxiaohu',
        hasChildren: true,
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        id: 4,
        date: '2016-05-03',
        name: 'wangxiaohu',
        address: 'No. 189, Grove St, Los Angeles'
      }];
      const load = (row: any, treeNode: unknown, resolve: (data: any[]) => void) => {
        setTimeout(() => {
          resolve([{
            id: 31,
            date: '2016-05-01',
            name: 'wangxiaohu',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            id: 32,
            date: '2016-05-01',
            name: 'wangxiaohu',
            address: 'No. 189, Grove St, Los Angeles'
          }]);
        }, 1000);
      };
      return {
        tableData,
        load,
        tableData1
      };
    },
    template: \`
    <g-config-provider>
      <div>
        <g-table
          :data="tableData"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border
          default-expand-all
        >
          <g-table-column prop="date" label="Date" sortable />
          <g-table-column prop="name" label="Name" sortable />
          <g-table-column prop="address" label="Address" sortable />
        </g-table>

        <g-table
          :data="tableData1"
          style="width: 100%"
          row-key="id"
          border
          lazy
          :load="load"
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <g-table-column prop="date" label="Date" />
          <g-table-column prop="name" label="Name" />
          <g-table-column prop="address" label="Address" />
        </g-table>
      </div>
    </g-config-provider>\`
  })
}`,...la.parameters?.docs?.source}}};oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con formateador de tooltip',
  parameters: {
    docs: {
      description: {
        story: \`Tabla con formateador de tooltip, mostrando información adicional al pasar el cursor sobre las celdas.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn,
      GLink,
      GTag
    },
    setup() {
      const tableData = [{
        address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
        tags: ['Office', 'Home', 'Park', 'Garden'],
        url: 'https://github.com/element-plus/element-plus/issues'
      }, {
        address: '760 A Street, South Frankfield, Illinois',
        tags: ['error', 'warning', 'success', 'info'],
        url: 'https://github.com/element-plus/element-plus/pulls'
      }, {
        address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
        tags: ['one', 'two', 'three', 'four', 'five'],
        url: 'https://github.com/element-plus/element-plus/discussions'
      }, {
        address: '23618 Windsor Drive, West Ricardoview, Idaho',
        tags: ['blue', 'white', 'dark', 'gray', 'red', 'bright'],
        url: 'https://github.com/element-plus/element-plus/actions'
      }];
      const tableRowFormatter = (data: TableTooltipData<any>) => {
        return \`\${data.cellValue}: table formatter\`;
      };
      const withVNode = (data: TableTooltipData<any>) => {
        return h(GLink, {
          type: 'primary',
          href: data.cellValue
        }, () => h('span', null, data.cellValue));
      };
      const tagsFormatter = (data: TableTooltipData<any>) => {
        return data.row.tags.join(', ');
      };
      return {
        tableData,
        tableRowFormatter,
        withVNode,
        tagsFormatter
      };
    },
    template: \`
    <g-config-provider>
      <g-table
        :data="tableData"
        show-overflow-tooltip
        :tooltip-formatter="tableRowFormatter"
        style="width: 100%"
        border
      >
        <g-table-column
          prop="address"
          label="extends table formatter"
          width="240"
        />
        <g-table-column
          prop="tags"
          label="formatter object"
          width="240"
          :tooltip-formatter="tagsFormatter"
        >
          <template #default="{ row }">
            <div class="flex gap-2">
              <g-tag
                v-for="tag in row.tags"
                :key="tag"
                type="info"
              >
                {{ tag }}
              </g-tag>
            </div>
          </template>
        </g-table-column>
        <g-table-column
          prop="url"
          label="with vnode"
          width="240"
          :tooltip-formatter="withVNode"
        />
      </g-table>
    </g-config-provider>\`
  })
}`,...oa.parameters?.docs?.source}}};na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
  name: 'Tabla con columnas editables y eliminables',
  parameters: {
    docs: {
      description: {
        story: \`Tabla con columnas editables y eliminables, permitiendo modificar el contenido de las celdas y eliminar filas.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GConfigProvider,
      GTableColumn,
      GIconFont,
      GSelect,
      GInput,
      GIconButton
    },
    setup() {
      const tableData = ref([{
        mode: 'send',
        currency: 'USD',
        amount: 1000,
        reason: 'initial-investment',
        detail: 'Este es un detalle de la inversión inicial realizada en el proyecto.',
        isEditable: false
      }, {
        mode: 'receive',
        currency: 'EUR',
        amount: 500,
        reason: 'marketing-expenses',
        detail: 'Este es una descripción detallada de los gastos de marketing asociados con el proyecto.',
        isEditable: false
      }, {
        mode: 'send',
        currency: 'GBP',
        amount: 750,
        reason: 'operational-costs',
        detail: 'Este es una descripción detallada de los costos operativos del proyecto.',
        isEditable: false
      }, {
        mode: 'receive',
        currency: 'JPY',
        amount: 3000,
        reason: 'miscellaneous-expenses',
        detail: 'Este es una descripción detallada de los gastos misceláneos del proyecto.',
        isEditable: false
      }, {
        mode: 'send',
        currency: 'AUD',
        amount: 1200,
        reason: 'travel-expenses',
        detail: 'Este es una descripción detallada de los gastos de viaje relacionados con el proyecto.',
        isEditable: false
      }, {
        mode: 'send',
        currency: 'CAD',
        amount: 800,
        reason: 'consulting-fees',
        detail: 'Este es una descripción detallada de los honorarios de consultoría del proyecto.',
        isEditable: false
      }]);
      const handleClick = () => {
        console.log('click');
      };
      const handleEdit = (index: number, row) => {
        tableData.value.splice(index, 1, {
          ...row,
          isEditable: !row.isEditable
        });
      };
      const deleteRow = (index: number) => {
        tableData.value.splice(index, 1);
      };
      return {
        tableData,
        handleClick,
        handleEdit,
        deleteRow
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" height="100%" border>
        <g-table-column prop="mode" label="Modalidad">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.mode"
                :options="[
                  { title: 'Send', value: 'send', icon: 'regular gift' },
                  { title: 'Receive', value: 'receive', icon: 'regular money-bill-alt' }
                ]"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.mode }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="currency" label="Moneda">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.currency"
                :options="[
                  { title: 'USD', value: 'USD' },
                  { title: 'EUR', value: 'EUR' },
                  { title: 'GBP', value: 'GBP' },
                  { title: 'JPY', value: 'JPY' },
                  { title: 'AUD', value: 'AUD' },
                  { title: 'CAD', value: 'CAD' }
                ]"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.currency }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="amount" label="Monto">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-input
                v-model.number="scope.row.amount"
                type="number"
                @change="handleClick"
              >
                <template #suffix>
                  <div class="flex gap-2 items-center">
                    <span class="text-gray-4">{{ scope.row.currency }}</span>
                  </div>
                </template>
              </g-input>
            </div>
            <div v-else>
              {{ scope.row.amount }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="reason" label="Razón">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-select
                v-model="scope.row.reason"
                :options="[
                  { title: 'Inversión incial', value: 'initial-investment' },
                  { title: 'Gastos de marketing', value: 'marketing-expenses' },
                  { title: 'Costos operativos', value: 'operational-costs' },
                  { title: 'Gastos misceláneos', value: 'miscellaneous-expenses' },
                  { title: 'Gastos de viaje', value: 'travel-expenses' },
                  { title: 'Honorarios de consultoría', value: 'consulting-fees' }
                ]"
                @change="handleClick"
                :fit-input-width="240"
              />
            </div>
            <div v-else>
              {{ scope.row.reason }}
            </div>
          </template>
        </g-table-column>
        <g-table-column prop="detail" label="Detalle" width="300">
          <template #default="scope">
            <div v-if="scope.row.isEditable" class="py-1">
              <g-input
                v-model="scope.row.detail"
                type="text"
                label="Detalle"
                @change="handleClick"
              />
            </div>
            <div v-else>
              {{ scope.row.detail }}
            </div>
          </template>
        </g-table-column>
        <g-table-column label="Acciones" align="center" width="100">
          <template #default="scope">
            <div class="flex items-center justify-center items gap-2">
              <g-icon-button
                v-if="!scope.row.isEditable"
                @click="handleEdit(scope.$index, scope.row)"
                variant="grey"
                icon="regular pen"
                size="small" 
              />
              <g-icon-button
                v-else
                @click="handleEdit(scope.$index, scope.row)"
                variant="grey"
                icon="regular check"
                size="small"
              />
              <g-icon-button
                variant="grey"
                icon="regular trash"
                size="small"
                @click="deleteRow(scope.$index)"
              />
            </div>
          </template>
        </g-table-column>
      </g-table>
    </g-config-provider>\`
  })
}`,...na.parameters?.docs?.source}}};const is=["Basic","prefixAndSuffix","withStatus","withFixed","withLongHeader","selectabale","collapse","withLazyAndLoad","withTooltipFormatter","tableEditable"];export{Xe as Basic,is as __namedExportsOrder,ta as collapse,ss as default,Je as prefixAndSuffix,aa as selectabale,na as tableEditable,Ze as withFixed,la as withLazyAndLoad,ea as withLongHeader,Qe as withStatus,oa as withTooltipFormatter};
