import{a9 as at,R as ve,G as he,h as Se,aj as La,i as ao,Y as de,a8 as zt,r as T,g as ne,u as M,c as D,w as re,a4 as Qa,D as Ee,a7 as It,d as Ae,b as Pe,E as Za,o as Ue,e as Y,f as De,x as _,s as Te,F as lt,z as Qt,l as H,P as _a,X as lo,k as oe,m as Oe,j as Ze,a1 as Na,am as Da,A as ma,y as ze,t as oo,a as ce,C as fa,a5 as Lt,Z as Fe,ai as el,U as no,ah as jt,I as N,H as tl,B as _e,_ as so,n as $e,v as ka,T as ga,ad as ro}from"./vue.esm-bundler-C43JrhH2.js";import{q as al}from"./index-Dk612rNp.js";import{b as ll,s as io}from"./index-Bjwq1aDC.js";import{q as ba,E as co,x as ol,k as uo,l as po,L as mo,y as Zt,O as fo,V as go,v as Le,e as Be,m as Ie,j as Ra,u as be,a as ot,g as bo,w as Nt,h as yo}from"./index-D5bIuBCX.js";import{i as ya,j as ho,k as vo,l as Co,m as nl,e as wo,h as xo,n as So,p as Eo,q as To,r as Ao,f as Oo,G as ha,H as sl}from"./index-DH2w0SzE.js";import{i as Va}from"./_arrayPush-BhjrZnJY.js";import{b as Fo,i as Lo}from"./isArrayLikeObject-CjUSgBAL.js";import{b as No,u as rl,p as Do}from"./index-CdSB2Bdf.js";import{b as ko,r as Ro}from"./dynamic-size-list-Cx2IIt4N.js";import{g as il,c as dl,G as te}from"./ConfigProvider-Br84NlF7.js";import{t as Vo}from"./error-Cq9Fpw4b.js";import{d as Gt}from"./debounce-Qaf-XsLG.js";import{f as zo,w as Io,c as Go}from"./install-CfJGiCvs.js";import{U as Wt}from"./event-BB_Ol6Sd.js";import{i as Po}from"./isEqual-Cz4oPyRM.js";import{C as Mo}from"./index-hJ8KYCfA.js";import{_ as cl}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{h as Qe,r as nt,a as Pt}from"./style-c1qAcfu9.js";import{u as za,a as Ia}from"./index-BDKGuxIf.js";import{F as va}from"./index-B1PxvDbZ.js";import{G as ul}from"./index-B-x_z20e.js";import{r as Ca}from"./index-CA6S_qzr.js";import{y as Bt}from"./index-C3gUrHC2.js";import{_ as Ga}from"./Link-DjLAaiAZ.js";import{Y as $o}from"./index-CPy9gSVE.js";import{u as pl}from"./index-y9qm_QyA.js";import{b as Pa}from"./documentation-stories-DKOl0nGm.js";import{S as jo}from"./index-CRx4dHSJ.js";import"./index-DmfABaPz.js";import"./index-CMNLjZZP.js";import"./index-dphAcb1L.js";import"./index-CmBD9wVo.js";import"./aria-BUADUvnR.js";import"./index-fhkPmQjX.js";import"./index-Bn_3zeFh.js";import"./typescript-Bp3YSIOJ.js";import"./content-xefq6HC4.js";import"./index-D_xYoXKA.js";import"./index-BjhK0CHr.js";import"./use-form-item-BgBoyOyI.js";import"./constants-Dnj8X3EN.js";import"./index-CvPWi8JN.js";import"./index-DVmIhHla.js";import"./index-Bjxdgq_P.js";function Wo(e,t,a){if(!ba(a))return!1;var l=typeof t;return(l=="number"?ya(a)&&co(t,a.length):l=="string"&&t in a)?ol(a[t],e):!1}function Bo(e){return Fo(function(t,a){var l=-1,o=a.length,n=o>1?a[o-1]:void 0,i=o>2?a[2]:void 0;for(n=e.length>3&&typeof n=="function"?(o--,n):void 0,i&&Wo(a[0],a[1],i)&&(n=o<3?void 0:n,o=1),t=Object(t);++l<o;){var d=a[l];d&&e(t,d,l,n)}return t})}var Ho="[object Object]",qo=Function.prototype,Ko=Object.prototype,ml=qo.toString,Uo=Ko.hasOwnProperty,Yo=ml.call(Object);function Jo(e){if(!uo(e)||po(e)!=Ho)return!1;var t=ho(e);if(t===null)return!0;var a=Uo.call(t,"constructor")&&t.constructor;return typeof a=="function"&&a instanceof a&&ml.call(a)==Yo}function Xo(e){return function(t,a,l){for(var o=-1,n=Object(t),i=l(t),d=i.length;d--;){var r=i[++o];if(a(n[r],r,n)===!1)break}return t}}var fl=Xo();function Qo(e,t){return e&&fl(e,t,vo)}function Zo(e,t){return function(a,l){if(a==null)return a;if(!ya(a))return e(a,l);for(var o=a.length,n=-1,i=Object(a);++n<o&&l(i[n],n,i)!==!1;);return a}}var _o=Zo(Qo);function _t(e,t,a){(a!==void 0&&!ol(e[t],a)||a===void 0&&!(t in e))&&mo(e,t,a)}function ea(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function en(e){return Co(e,nl(e))}function tn(e,t,a,l,o,n,i){var d=ea(e,a),r=ea(t,a),s=i.get(r);if(s){_t(e,a,s);return}var c=n?n(d,r,a+"",e,t,i):void 0,u=c===void 0;if(u){var p=Zt(r),f=!p&&wo(r),m=!p&&!f&&xo(r);c=r,p||f||m?Zt(d)?c=d:Lo(d)?c=So(d):f?(u=!1,c=Eo(r,!0)):m?(u=!1,c=To(r,!0)):c=[]:Jo(r)||Va(r)?(c=d,Va(d)?c=en(d):(!ba(d)||fo(d))&&(c=Ao(r))):u=!1}u&&(i.set(r,c),o(c,r,l,n,i),i.delete(r)),_t(e,a,c)}function gl(e,t,a,l,o){e!==t&&fl(t,function(n,i){if(o||(o=new Oo),ba(n))tn(e,t,i,a,gl,l,o);else{var d=l?l(ea(e,i),n,i+"",e,t,o):void 0;d===void 0&&(d=n),_t(e,i,d)}},nl)}function an(e,t){var a=-1,l=ya(e)?Array(e.length):[];return _o(e,function(o,n,i){l[++a]=t(o,n,i)}),l}function ln(e,t){var a=Zt(e)?go:an;return a(e,ko(t))}function on(e,t){return No(ln(e,t))}function it(e){return e===null}var bl=Bo(function(e,t,a){gl(e,t,a)}),Ma=!1,Ge,ta,aa,Dt,kt,yl,Rt,la,oa,na,hl,sa,ra,vl,Cl;function pe(){if(!Ma){Ma=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),a=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(sa=/\b(iPhone|iP[ao]d)/.exec(e),ra=/\b(iP[ao]d)/.exec(e),na=/Android/i.exec(e),vl=/FBAN\/\w+;/i.exec(e),Cl=/Mobile/i.exec(e),hl=!!/Win64/.exec(e),t){Ge=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN,Ge&&document&&document.documentMode&&(Ge=document.documentMode);var l=/(?:Trident\/(\d+.\d+))/.exec(e);yl=l?parseFloat(l[1])+4:Ge,ta=t[2]?parseFloat(t[2]):NaN,aa=t[3]?parseFloat(t[3]):NaN,Dt=t[4]?parseFloat(t[4]):NaN,Dt?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),kt=t&&t[1]?parseFloat(t[1]):NaN):kt=NaN}else Ge=ta=aa=kt=Dt=NaN;if(a){if(a[1]){var o=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);Rt=o?parseFloat(o[1].replace("_",".")):!0}else Rt=!1;la=!!a[2],oa=!!a[3]}else Rt=la=oa=!1}}var ia={ie:function(){return pe()||Ge},ieCompatibilityMode:function(){return pe()||yl>Ge},ie64:function(){return ia.ie()&&hl},firefox:function(){return pe()||ta},opera:function(){return pe()||aa},webkit:function(){return pe()||Dt},safari:function(){return ia.webkit()},chrome:function(){return pe()||kt},windows:function(){return pe()||la},osx:function(){return pe()||Rt},linux:function(){return pe()||oa},iphone:function(){return pe()||sa},mobile:function(){return pe()||sa||ra||na||Cl},nativeApp:function(){return pe()||vl},android:function(){return pe()||na},ipad:function(){return pe()||ra}},nn=ia,sn=!!(typeof window<"u"&&window.document&&window.document.createElement),rn={canUseDOM:sn},wl=rn,xl;wl.canUseDOM&&(xl=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);function dn(e,t){if(!wl.canUseDOM||t&&!("addEventListener"in document))return!1;var a="on"+e,l=a in document;if(!l){var o=document.createElement("div");o.setAttribute(a,"return;"),l=typeof o[a]=="function"}return!l&&xl&&e==="wheel"&&(l=document.implementation.hasFeature("Events.wheel","3.0")),l}var cn=dn,$a=10,ja=40,Wa=800;function Sl(e){var t=0,a=0,l=0,o=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),l=t*$a,o=a*$a,"deltaY"in e&&(o=e.deltaY),"deltaX"in e&&(l=e.deltaX),(l||o)&&e.deltaMode&&(e.deltaMode==1?(l*=ja,o*=ja):(l*=Wa,o*=Wa)),l&&!t&&(t=l<1?-1:1),o&&!a&&(a=o<1?-1:1),{spinX:t,spinY:a,pixelX:l,pixelY:o}}Sl.getEventType=function(){return nn.firefox()?"DOMMouseScroll":cn("wheel")?"wheel":"mousewheel"};var un=Sl;/**
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
*/const pn=function(e,t){if(e&&e.addEventListener){const a=function(l){const o=un(l);t&&Reflect.apply(t,this,[l,o])};e.addEventListener("wheel",a,{passive:!0})}},mn={beforeMount(e,t){pn(e,t.value)}},Yt=function(e){return e.target?.closest("td")},fn=function(e,t,a,l,o){if(!t&&!l&&(!o||de(o)&&!o.length))return e;ve(a)?a=a==="descending"?-1:1:a=a&&a<0?-1:1;const n=l?null:function(d,r){return o?(de(o)||(o=[o]),o.map(s=>ve(s)?Ra(d,s):s(d,r,e))):(t!=="$key"&&zt(d)&&"$value"in d&&(d=d.$value),[zt(d)?Ra(d,t):d])},i=function(d,r){if(l)return l(d.value,r.value);for(let s=0,c=d.key.length;s<c;s++){if(d.key[s]<r.key[s])return-1;if(d.key[s]>r.key[s])return 1}return 0};return e.map((d,r)=>({value:d,index:r,key:n?n(d,r):null})).sort((d,r)=>{let s=i(d,r);return s||(s=d.index-r.index),s*+a}).map(d=>d.value)},El=function(e,t){let a=null;return e.columns.forEach(l=>{l.id===t&&(a=l)}),a},gn=function(e,t){let a=null;for(let l=0;l<e.columns.length;l++){const o=e.columns[l];if(o.columnKey===t){a=o;break}}return a||Vo("ElTable",`No column matching with column-key: ${t}`),a},Ba=function(e,t,a){const l=(t.className||"").match(new RegExp(`${a}-table_[^\\s]+`,"gm"));return l?El(e,l[0]):null},se=(e,t)=>{if(!e)throw new Error("Row is required when get row identity");if(ve(t)){if(!t.includes("."))return`${e[t]}`;const a=t.split(".");let l=e;for(const o of a)l=l[o];return`${l}`}else if(he(t))return t.call(null,e)},He=function(e,t,a=!1,l="children"){const o=e||[],n={};return o.forEach((i,d)=>{if(n[se(i,t)]={row:i,index:d},a){const r=i[l];de(r)&&Object.assign(n,He(r,t,!0,l))}}),n};function bn(e,t){const a={};let l;for(l in e)a[l]=e[l];for(l in t)if(at(t,l)){const o=t[l];Le(o)||(a[l]=o)}return a}function wa(e){return e===""||Le(e)||(e=Number.parseInt(e,10),Number.isNaN(e)&&(e="")),e}function Tl(e){return e===""||Le(e)||(e=wa(e),Number.isNaN(e)&&(e=80)),e}function yn(e){return Be(e)?e:ve(e)?/^\d+(?:px)?$/.test(e)?Number.parseInt(e,10):e:null}function hn(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,a)=>(...l)=>t(a(...l)))}function Mt(e,t,a,l,o,n){let i=n??0,d=!1;const r=e.indexOf(t),s=r!==-1,c=o?.call(null,t,i),u=f=>{f==="add"?e.push(t):e.splice(r,1),d=!0},p=f=>{let m=0;const b=l?.children&&f[l.children];return b&&de(b)&&(m+=b.length,b.forEach(y=>{m+=p(y)})),m};return(!o||c)&&(Ie(a)?a&&!s?u("add"):!a&&s&&u("remove"):u(s?"remove":"add")),!l?.checkStrictly&&l?.children&&de(t[l.children])&&t[l.children].forEach(f=>{const m=Mt(e,f,a??!s,l,o,i+1);i+=p(f)+1,m&&(d=m)}),d}function vn(e,t,a="children",l="hasChildren"){const o=i=>!(de(i)&&i.length);function n(i,d,r){t(i,d,r),d.forEach(s=>{if(s[l]){t(s,null,r+1);return}const c=s[a];o(c)||n(s,c,r+1)})}e.forEach(i=>{if(i[l]){t(i,null,0);return}const d=i[a];o(d)||n(i,d,0)})}const Cn=(e,t,a,l)=>{const o={strategy:"fixed",...e.popperOptions},n=he(l.tooltipFormatter)?l.tooltipFormatter({row:a,column:l,cellValue:il(a,l.property).value}):void 0;return ao(n)?{slotContent:n,content:null,...e,popperOptions:o}:{slotContent:null,content:n??t,description:n??t,...e,popperOptions:o}};let ye=null;function wn(e,t,a,l,o,n){const i=Cn(e,t,a,l),d={...i,slotContent:void 0};if(ye?.trigger===o){const f=ye.vm.component;bl(f.props,d),i.slotContent&&(f.slots.content=()=>[i.slotContent]);return}ye?.();const r=n?.refs.tableWrapper,s=r?.dataset.prefix,c=Se(ll,{virtualTriggering:!0,virtualRef:o,appendTo:r,placement:"top",transition:"none",offset:0,hideAfter:0,...d},i.slotContent?{content:()=>i.slotContent}:void 0);c.appContext={...n.appContext,...n};const u=document.createElement("div");La(c,u),c.component.exposed.onOpen();const p=r?.querySelector(`.${s}-scrollbar__wrap`);ye=()=>{La(null,u),p?.removeEventListener("scroll",ye),ye=null},ye.trigger=o,ye.vm=c,p?.addEventListener("scroll",ye)}function Al(e){return e.children?on(e.children,Al):[e]}function Ha(e,t){return e+t.colSpan}const Ol=(e,t,a,l)=>{let o=0,n=e;const i=a.states.columns.value;if(l){const r=Al(l[e]);o=i.slice(0,i.indexOf(r[0])).reduce(Ha,0),n=o+r.reduce(Ha,0)-1}else o=e;let d;switch(t){case"left":n<a.states.fixedLeafColumnsLength.value&&(d="left");break;case"right":o>=i.length-a.states.rightFixedLeafColumnsLength.value&&(d="right");break;default:n<a.states.fixedLeafColumnsLength.value?d="left":o>=i.length-a.states.rightFixedLeafColumnsLength.value&&(d="right")}return d?{direction:d,start:o,after:n}:{}},xa=(e,t,a,l,o,n=0)=>{const i=[],{direction:d,start:r,after:s}=Ol(t,a,l,o);if(d){const c=d==="left";i.push(`${e}-fixed-column--${d}`),c&&s+n===l.states.fixedLeafColumnsLength.value-1?i.push("is-last-column"):!c&&r-n===l.states.columns.value.length-l.states.rightFixedLeafColumnsLength.value&&i.push("is-first-column")}return i};function qa(e,t){return e+(it(t.realWidth)||Number.isNaN(t.realWidth)?Number(t.width):t.realWidth)}const Sa=(e,t,a,l)=>{const{direction:o,start:n=0,after:i=0}=Ol(e,t,a,l);if(!o)return;const d={},r=o==="left",s=a.states.columns.value;return r?d.left=s.slice(0,n).reduce(qa,0):d.right=s.slice(i+1).reverse().reduce(qa,0),d},qe=(e,t)=>{e&&(Number.isNaN(e[t])||(e[t]=`${e[t]}px`))};function xn(e){const t=ne(),a=T(!1),l=T([]);return{updateExpandRows:()=>{const r=e.data.value||[],s=e.rowKey.value;if(a.value)l.value=r.slice();else if(s){const c=He(l.value,s);l.value=r.reduce((u,p)=>{const f=se(p,s);return c[f]&&u.push(p),u},[])}else l.value=[]},toggleRowExpansion:(r,s)=>{Mt(l.value,r,s)&&t.emit("expand-change",r,l.value.slice())},setExpandRowKeys:r=>{t.store.assertRowKey();const s=e.data.value||[],c=e.rowKey.value,u=He(s,c);l.value=r.reduce((p,f)=>{const m=u[f];return m&&p.push(m.row),p},[])},isRowExpanded:r=>{const s=e.rowKey.value;return s?!!He(l.value,s)[se(r,s)]:l.value.includes(r)},states:{expandRows:l,defaultExpandAll:a}}}function Sn(e){const t=ne(),a=T(null),l=T(null),o=s=>{t.store.assertRowKey(),a.value=s,i(s)},n=()=>{a.value=null},i=s=>{const{data:c,rowKey:u}=e;let p=null;u.value&&(p=(M(c)||[]).find(f=>se(f,u.value)===s)),l.value=p,t.emit("current-change",l.value,null)};return{setCurrentRowKey:o,restoreCurrentRowKey:n,setCurrentRowByKey:i,updateCurrentRow:s=>{const c=l.value;if(s&&s!==c){l.value=s,t.emit("current-change",l.value,c);return}!s&&c&&(l.value=null,t.emit("current-change",null,c))},updateCurrentRowData:()=>{const s=e.rowKey.value,c=e.data.value||[],u=l.value;if(!c.includes(u)&&u){if(s){const p=se(u,s);i(p)}else l.value=null;it(l.value)&&t.emit("current-change",null,u)}else a.value&&(i(a.value),n())},states:{_currentRowKey:a,currentRow:l}}}function En(e){const t=T([]),a=T({}),l=T(16),o=T(!1),n=T({}),i=T("hasChildren"),d=T("children"),r=T(!1),s=ne(),c=D(()=>{if(!e.rowKey.value)return{};const h=e.data.value||[];return p(h)}),u=D(()=>{const h=e.rowKey.value,S=Object.keys(n.value),w={};return S.length&&S.forEach(v=>{if(n.value[v].length){const A={children:[]};n.value[v].forEach(V=>{const I=se(V,h);A.children.push(I),V[i.value]&&!w[I]&&(w[I]={children:[]})}),w[v]=A}}),w}),p=h=>{const S=e.rowKey.value,w={};return vn(h,(v,A,V)=>{const I=se(v,S);de(A)?w[I]={children:A.map($=>se($,S)),level:V}:o.value&&(w[I]={children:[],lazy:!0,level:V})},d.value,i.value),w};let f=!0;const m=(h=!1)=>{const S=c.value,w=u.value,v=Object.keys(S),A={},V=s.store?.states.defaultExpandAll.value&&f;if(f=!1,v.length){const I=M(a),$=[],z=(j,K)=>{if(h)return t.value.length?V||t.value.includes(K):!!(V||j?.expanded);{const q=V||t.value&&t.value.includes(K);return!!(j?.expanded||q)}};v.forEach(j=>{const K=I[j],q={...S[j]};if(q.expanded=z(K,j),q.lazy){const{loaded:L=!1,loading:E=!1}=K||{};q.loaded=!!L,q.loading=!!E,$.push(j)}A[j]=q});const J=Object.keys(w);o.value&&J.length&&$.length&&J.forEach(j=>{const K=I[j],q=w[j].children;if($.includes(j)){if(A[j].children.length!==0)throw new Error("[ElTable]children must be an empty array.");A[j].children=q}else{const{loaded:L=!1,loading:E=!1}=K||{};A[j]={lazy:!0,loaded:!!L,loading:!!E,expanded:z(K,j),children:q,level:""}}})}a.value=A,s.store?.updateTableScrollY()};re(()=>t.value,()=>{m(!0)}),re(()=>c.value,()=>{f=!0,m()}),re(()=>u.value,()=>{m()});const b=h=>{t.value=h,m()},y=h=>o.value&&h&&"loaded"in h&&!h.loaded,O=(h,S)=>{s.store.assertRowKey();const w=e.rowKey.value,v=se(h,w),A=v&&a.value[v];if(v&&A&&"expanded"in A){const V=A.expanded;S=Le(S)?!A.expanded:S,a.value[v].expanded=S,V!==S&&s.emit("expand-change",h,S),y(A)&&C(h,v,A),s.store.updateTableScrollY()}},x=h=>{s.store.assertRowKey();const S=e.rowKey.value,w=se(h,S),v=a.value[w];y(v)?C(h,w,v):O(h,void 0)},C=(h,S,w)=>{const{load:v}=s.props;v&&!a.value[S].loaded&&(a.value[S].loading=!0,v(h,w,A=>{if(!de(A))throw new TypeError("[ElTable] data must be an array");a.value[S].loading=!1,a.value[S].loaded=!0,a.value[S].expanded=!0,A.length&&(n.value[S]=A),s.emit("expand-change",h,!0)}))};return{loadData:C,loadOrToggle:x,toggleTreeExpansion:O,updateTreeExpandKeys:b,updateTreeData:m,updateKeyChildren:(h,S)=>{const{lazy:w,rowKey:v}=s.props;if(w){if(!v)throw new Error("[Table] rowKey is required in updateKeyChild");n.value[h]&&(n.value[h]=S)}},normalize:p,states:{expandRowKeys:t,treeData:a,indent:l,lazy:o,lazyTreeNodeMap:n,lazyColumnIdentifier:i,childrenColumnName:d,checkStrictly:r}}}const Tn=(e,t)=>{const a=t.sortingColumn;return!a||ve(a.sortable)?e:fn(e,t.sortProp,t.sortOrder,a.sortMethod,a.sortBy)},Vt=e=>{const t=[];return e.forEach(a=>{a.children&&a.children.length>0?t.push.apply(t,Vt(a.children)):t.push(a)}),t};function An(){const e=ne(),{size:t}=Qa(e.proxy?.$props),a=T(null),l=T([]),o=T([]),n=T(!1),i=T([]),d=T([]),r=T([]),s=T([]),c=T([]),u=T([]),p=T([]),f=T([]),m=[],b=T(0),y=T(0),O=T(0),x=T(!1),C=T([]),g=T(!1),h=T(!1),S=T(null),w=T({}),v=T(null),A=T(null),V=T(null),I=T(null),$=T(null),z=D(()=>a.value?He(C.value,a.value):void 0);re(l,()=>{e.state&&(q(!1),e.props.tableLayout==="auto"&&e.refs.tableHeaderRef?.updateFixedColumnStyle())},{deep:!0});const J=()=>{if(!a.value)throw new Error("[ElTable] prop row-key is required")},j=F=>{F.children?.forEach(G=>{G.fixed=F.fixed,j(G)})},K=()=>{i.value.forEach(U=>{j(U)}),s.value=i.value.filter(U=>U.type!=="selection"&&[!0,"left"].includes(U.fixed));let F;if(i.value?.[0]?.type==="selection"){const U=i.value[0];F=[!0,"left"].includes(U.fixed)||s.value.length&&U.fixed!=="right",F&&s.value.unshift(U)}c.value=i.value.filter(U=>U.fixed==="right");const G=i.value.filter(U=>(F?U.type!=="selection":!0)&&!U.fixed);d.value=[].concat(s.value).concat(G).concat(c.value);const W=Vt(G),B=Vt(s.value),le=Vt(c.value);b.value=W.length,y.value=B.length,O.value=le.length,r.value=[].concat(B).concat(W).concat(le),n.value=s.value.length>0||c.value.length>0},q=(F,G=!1)=>{F&&K(),G?e.state.doLayout():e.state.debouncedUpdateLayout()},L=F=>z.value?!!z.value[se(F,a.value)]:C.value.includes(F),E=()=>{x.value=!1;const F=C.value;C.value=[],F.length&&e.emit("selection-change",[])},R=()=>{let F;if(a.value){F=[];const G=e?.store?.states?.childrenColumnName.value,W=He(l.value,a.value,!0,G);for(const B in z.value)at(z.value,B)&&!W[B]&&F.push(z.value[B].row)}else F=C.value.filter(G=>!l.value.includes(G));if(F.length){const G=C.value.filter(W=>!F.includes(W));C.value=G,e.emit("selection-change",G.slice())}},k=()=>(C.value||[]).slice(),P=(F,G,W=!0,B=!1)=>{const le={children:e?.store?.states?.childrenColumnName.value,checkStrictly:e?.store?.states?.checkStrictly.value};if(Mt(C.value,F,G,le,B?void 0:S.value,l.value.indexOf(F))){const ie=(C.value||[]).slice();W&&e.emit("select",ie,F),e.emit("selection-change",ie)}},X=()=>{const F=h.value?!x.value:!(x.value||C.value.length);x.value=F;let G=!1,W=0;const B=e?.store?.states?.rowKey.value,{childrenColumnName:le}=e.store.states,U={children:le.value,checkStrictly:!1};l.value.forEach((ie,Ye)=>{const to=Ye+W;Mt(C.value,ie,F,U,S.value,to)&&(G=!0),W+=fe(se(ie,B))}),G&&e.emit("selection-change",C.value?C.value.slice():[]),e.emit("select-all",(C.value||[]).slice())},Q=()=>{l.value.forEach(F=>{const G=se(F,a.value),W=z.value[G];W&&(C.value[W.index]=F)})},Z=()=>{if(l.value?.length===0){x.value=!1;return}const{childrenColumnName:F}=e.store.states;let G=0,W=0;const B=U=>{for(const ie of U){const Ye=S.value&&S.value.call(null,ie,G);if(L(ie))W++;else if(!S.value||Ye)return!1;if(G++,ie[F.value]?.length&&!B(ie[F.value]))return!1}return!0},le=B(l.value||[]);x.value=W===0?!1:le},fe=F=>{if(!e||!e.store)return 0;const{treeData:G}=e.store.states;let W=0;const B=G.value[F]?.children;return B&&(W+=B.length,B.forEach(le=>{W+=fe(le)})),W},we=(F,G)=>{de(F)||(F=[F]);const W={};return F.forEach(B=>{w.value[B.id]=G,W[B.columnKey||B.id]=G}),W},ue=(F,G,W)=>{A.value&&A.value!==F&&(A.value.order=null),A.value=F,V.value=G,I.value=W},Ne=()=>{let F=M(o);Object.keys(w.value).forEach(G=>{const W=w.value[G];if(!W||W.length===0)return;const B=El({columns:r.value},G);B&&B.filterMethod&&(F=F.filter(le=>W.some(U=>B.filterMethod.call(null,U,le,B))))}),v.value=F},ke=()=>{l.value=Tn(v.value,{sortingColumn:A.value,sortProp:V.value,sortOrder:I.value})},qt=(F=void 0)=>{F&&F.filter||Ne(),ke()},Kt=F=>{const{tableHeaderRef:G}=e.refs;if(!G)return;const W=Object.assign({},G.filterPanels),B=Object.keys(W);if(B.length)if(ve(F)&&(F=[F]),de(F)){const le=F.map(U=>gn({columns:r.value},U));B.forEach(U=>{const ie=le.find(Ye=>Ye.id===U);ie&&(ie.filteredValue=[])}),e.store.commit("filterChange",{column:le,values:[],silent:!0,multi:!0})}else B.forEach(le=>{const U=r.value.find(ie=>ie.id===le);U&&(U.filteredValue=[])}),w.value={},e.store.commit("filterChange",{column:{},values:[],silent:!0})},Ut=()=>{A.value&&(ue(null,null,null),e.store.commit("changeSortCondition",{silent:!0}))},{setExpandRowKeys:dt,toggleRowExpansion:ge,updateExpandRows:xe,states:Re,isRowExpanded:Ve}=xn({data:l,rowKey:a}),{updateTreeExpandKeys:ct,toggleTreeExpansion:Kl,updateTreeData:Ul,updateKeyChildren:Yl,loadOrToggle:Jl,states:Xl}=En({data:l,rowKey:a}),{updateCurrentRowData:Ql,updateCurrentRow:Zl,setCurrentRowKey:_l,states:eo}=Sn({data:l,rowKey:a});return{assertRowKey:J,updateColumns:K,scheduleLayout:q,isSelected:L,clearSelection:E,cleanSelection:R,getSelectionRows:k,toggleRowSelection:P,_toggleAllSelection:X,toggleAllSelection:null,updateSelectionByRowKey:Q,updateAllSelected:Z,updateFilters:we,updateCurrentRow:Zl,updateSort:ue,execFilter:Ne,execSort:ke,execQuery:qt,clearFilter:Kt,clearSort:Ut,toggleRowExpansion:ge,setExpandRowKeysAdapter:F=>{dt(F),ct(F)},setCurrentRowKey:_l,toggleRowExpansionAdapter:(F,G)=>{r.value.some(({type:B})=>B==="expand")?ge(F,G):Kl(F,G)},isRowExpanded:Ve,updateExpandRows:xe,updateCurrentRowData:Ql,loadOrToggle:Jl,updateTreeData:Ul,updateKeyChildren:Yl,states:{tableSize:t,rowKey:a,data:l,_data:o,isComplex:n,_columns:i,originColumns:d,columns:r,fixedColumns:s,rightFixedColumns:c,leafColumns:u,fixedLeafColumns:p,rightFixedLeafColumns:f,updateOrderFns:m,leafColumnsLength:b,fixedLeafColumnsLength:y,rightFixedLeafColumnsLength:O,isAllSelected:x,selection:C,reserveSelection:g,selectOnIndeterminate:h,selectable:S,filters:w,filteredData:v,sortingColumn:A,sortProp:V,sortOrder:I,hoverRow:$,...Re,...Xl,...eo}}}function da(e,t){return e.map(a=>a.id===t.id?t:(a.children?.length&&(a.children=da(a.children,t)),a))}function ca(e){e.forEach(t=>{t.no=t.getColumnIndex?.(),t.children?.length&&ca(t.children)}),e.sort((t,a)=>t.no-a.no)}function On(){const e=ne(),t=An();return{ns:be("table"),...t,mutations:{setData(i,d){const r=M(i._data)!==d;i.data.value=d,i._data.value=d,e.store.execQuery(),e.store.updateCurrentRowData(),e.store.updateExpandRows(),e.store.updateTreeData(e.store.states.defaultExpandAll.value),M(i.reserveSelection)?(e.store.assertRowKey(),e.store.updateSelectionByRowKey()):r?e.store.clearSelection():e.store.cleanSelection(),e.store.updateAllSelected(),e.$ready&&e.store.scheduleLayout()},insertColumn(i,d,r,s){const c=M(i._columns);let u=[];r?(r&&!r.children&&(r.children=[]),r.children.push(d),u=da(c,r)):(c.push(d),u=c),ca(u),i._columns.value=u,i.updateOrderFns.push(s),d.type==="selection"&&(i.selectable.value=d.selectable,i.reserveSelection.value=d.reserveSelection),e.$ready&&(e.store.updateColumns(),e.store.scheduleLayout())},updateColumnOrder(i,d){d.getColumnIndex?.()!==d.no&&(ca(i._columns.value),e.$ready&&e.store.updateColumns())},removeColumn(i,d,r,s){const c=M(i._columns)||[];if(r)r.children.splice(r.children.findIndex(p=>p.id===d.id),1),Ee(()=>{r.children?.length===0&&delete r.children}),i._columns.value=da(c,r);else{const p=c.indexOf(d);p>-1&&(c.splice(p,1),i._columns.value=c)}const u=i.updateOrderFns.indexOf(s);u>-1&&i.updateOrderFns.splice(u,1),e.$ready&&(e.store.updateColumns(),e.store.scheduleLayout())},sort(i,d){const{prop:r,order:s,init:c}=d;if(r){const u=M(i.columns).find(p=>p.property===r);u&&(u.order=s,e.store.updateSort(u,r,s),e.store.commit("changeSortCondition",{init:c}))}},changeSortCondition(i,d){const{sortingColumn:r,sortProp:s,sortOrder:c}=i,u=M(r),p=M(s),f=M(c);it(f)&&(i.sortingColumn.value=null,i.sortProp.value=null);const m={filter:!0};e.store.execQuery(m),(!d||!(d.silent||d.init))&&e.emit("sort-change",{column:u,prop:p,order:f}),e.store.updateTableScrollY()},filterChange(i,d){const{column:r,values:s,silent:c}=d,u=e.store.updateFilters(r,s);e.store.execQuery(),c||e.emit("filter-change",u),e.store.updateTableScrollY()},toggleAllSelection(){e.store.toggleAllSelection()},rowSelectedChanged(i,d){e.store.toggleRowSelection(d),e.store.updateAllSelected()},setHoverRow(i,d){i.hoverRow.value=d},setCurrentRow(i,d){e.store.updateCurrentRow(d)}},commit:function(i,...d){const r=e.store.mutations;if(r[i])r[i].apply(e,[e.store.states].concat(d));else throw new Error(`Action not found: ${i}`)},updateTableScrollY:function(){Ee(()=>e.layout.updateScrollY.apply(e.layout))}}}const et={rowKey:"rowKey",defaultExpandAll:"defaultExpandAll",selectOnIndeterminate:"selectOnIndeterminate",indent:"indent",lazy:"lazy",data:"data","treeProps.hasChildren":{key:"lazyColumnIdentifier",default:"hasChildren"},"treeProps.children":{key:"childrenColumnName",default:"children"},"treeProps.checkStrictly":{key:"checkStrictly",default:!1}};function Fn(e,t){if(!e)throw new Error("Table is required.");const a=On();return a.toggleAllSelection=Gt(a._toggleAllSelection,10),Object.keys(et).forEach(l=>{Fl(Ll(t,l),l,a)}),Ln(a,t),a}function Ln(e,t){Object.keys(et).forEach(a=>{re(()=>Ll(t,a),l=>{Fl(l,a,e)})})}function Fl(e,t,a){let l=e,o=et[t];zt(et[t])&&(o=o.key,l=l||et[t].default),a.states[o].value=l}function Ll(e,t){if(t.includes(".")){const a=t.split(".");let l=e;return a.forEach(o=>{l=l[o]}),l}else return e[t]}class Nn{observers;table;store;columns;fit;showHeader;height;scrollX;scrollY;bodyWidth;fixedWidth;rightFixedWidth;tableHeight;headerHeight;appendHeight;footerHeight;gutterWidth;constructor(t){this.observers=[],this.table=null,this.store=null,this.columns=[],this.fit=!0,this.showHeader=!0,this.height=T(null),this.scrollX=T(!1),this.scrollY=T(!1),this.bodyWidth=T(null),this.fixedWidth=T(null),this.rightFixedWidth=T(null),this.gutterWidth=0;for(const a in t)at(t,a)&&(It(this[a])?this[a].value=t[a]:this[a]=t[a]);if(!this.table)throw new Error("Table is required for Table Layout");if(!this.store)throw new Error("Store is required for Table Layout")}updateScrollY(){const t=this.height.value;if(it(t))return!1;const a=this.table.refs.scrollBarRef;if(this.table.vnode.el&&a?.wrapRef){let l=!0;const o=this.scrollY.value;return l=a.wrapRef.scrollHeight>a.wrapRef.clientHeight,this.scrollY.value=l,o!==l}return!1}setHeight(t,a="height"){if(!ot)return;const l=this.table.vnode.el;if(t=yn(t),this.height.value=Number(t),!l&&(t||t===0))return Ee(()=>this.setHeight(t,a));Be(t)?(l.style[a]=`${t}px`,this.updateElsHeight()):ve(t)&&(l.style[a]=t,this.updateElsHeight())}setMaxHeight(t){this.setHeight(t,"max-height")}getFlattenColumns(){const t=[];return this.table.store.states.columns.value.forEach(l=>{l.isColumnGroup?t.push.apply(t,l.columns):t.push(l)}),t}updateElsHeight(){this.updateScrollY(),this.notifyObservers("scrollable")}headerDisplayNone(t){if(!t)return!0;let a=t;for(;a.tagName!=="DIV";){if(getComputedStyle(a).display==="none")return!0;a=a.parentElement}return!1}updateColumnsWidth(){if(!ot)return;const t=this.fit,a=this.table.vnode.el.clientWidth;let l=0;const o=this.getFlattenColumns(),n=o.filter(r=>!Be(r.width));if(o.forEach(r=>{Be(r.width)&&r.realWidth&&(r.realWidth=null)}),n.length>0&&t){if(o.forEach(r=>{l+=Number(r.width||r.minWidth||80)}),l<=a){this.scrollX.value=!1;const r=a-l;if(n.length===1)n[0].realWidth=Number(n[0].minWidth||80)+r;else{const s=n.reduce((p,f)=>p+Number(f.minWidth||80),0),c=r/s;let u=0;n.forEach((p,f)=>{if(f===0)return;const m=Math.floor(Number(p.minWidth||80)*c);u+=m,p.realWidth=Number(p.minWidth||80)+m}),n[0].realWidth=Number(n[0].minWidth||80)+r-u}}else this.scrollX.value=!0,n.forEach(r=>{r.realWidth=Number(r.minWidth)});this.bodyWidth.value=Math.max(l,a),this.table.state.resizeState.value.width=this.bodyWidth.value}else o.forEach(r=>{!r.width&&!r.minWidth?r.realWidth=80:r.realWidth=Number(r.width||r.minWidth),l+=r.realWidth}),this.scrollX.value=l>a,this.bodyWidth.value=l;const i=this.store.states.fixedColumns.value;if(i.length>0){let r=0;i.forEach(s=>{r+=Number(s.realWidth||s.width)}),this.fixedWidth.value=r}const d=this.store.states.rightFixedColumns.value;if(d.length>0){let r=0;d.forEach(s=>{r+=Number(s.realWidth||s.width)}),this.rightFixedWidth.value=r}this.notifyObservers("columns")}addObserver(t){this.observers.push(t)}removeObserver(t){const a=this.observers.indexOf(t);a!==-1&&this.observers.splice(a,1)}notifyObservers(t){this.observers.forEach(l=>{switch(t){case"columns":l.state?.onColumnsChange(this);break;case"scrollable":l.state?.onScrollableChange(this);break;default:throw new Error(`Table Layout don't have event ${t}.`)}})}}/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dn=()=>{},kn=Object.prototype.hasOwnProperty,Ka=(e,t)=>kn.call(e,t),st=Array.isArray,Ua=e=>typeof e=="string",Ea=e=>e!==null&&typeof e=="object";const ua=e=>e===void 0,pa=e=>typeof e=="boolean",Ya=e=>typeof e=="number",Ja=e=>bo(e),Nl="__epPropKey",Rn=e=>e,Vn=e=>Ea(e)&&!!e[Nl],zn=(e,t)=>{if(!Ea(e)||Vn(e))return e;const{values:a,required:l,default:o,type:n,validator:i}=e,d={type:n,required:!!l,validator:a||i?r=>{let s=!1,c=[];if(a&&(c=Array.from(a),Ka(e,"default")&&c.push(o),s||(s=c.includes(r))),i&&(s||(s=i(r))),!s&&c.length>0){const u=[...new Set(c)].map(p=>JSON.stringify(p)).join(", ");oo(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${u}], got value ${JSON.stringify(r)}.`)}return s}:void 0,[Nl]:!0};return Ka(e,"default")&&(d.default=o),d},In=e=>zo(Object.entries(e).map(([t,a])=>[t,zn(a,t)])),Gn=(e,t)=>{if(e.install=a=>{for(const l of[e,...Object.values(t??{})])a.component(l.name,l)},t)for(const[a,l]of Object.entries(t))e[a]=l;return e},Pn=e=>(e.install=Dn,e),Mn={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},id:{type:String,default:void 0},tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},border:{type:Boolean,default:!1},invert:{type:Boolean,default:!1},...rl(["ariaControls"])},$n={[Wt]:e=>Ua(e)||Ya(e)||pa(e),change:e=>Ua(e)||Ya(e)||pa(e)},jn=Symbol("formContextKey"),Wn=e=>{const t=ne();return D(()=>{var a,l;return(l=(a=t?.proxy)==null?void 0:a.$props)==null?void 0:l[e]})},Bn=e=>{const t=Wn("disabled"),a=ce(jn,void 0);return D(()=>t.value||M(e)||a?.disabled||!1)},Ht=Symbol("checkboxGroupContextKey"),Hn=({model:e,isChecked:t})=>{const a=ce(Ht,void 0),l=D(()=>{const o=a?.max?.value,n=a?.min?.value;return!ua(o)&&e.value.length>=o&&!t.value||!ua(n)&&e.value.length<=n&&t.value});return{isDisabled:Bn(D(()=>a?.disabled.value||l.value)),isLimitDisabled:l}},qn=(e,{model:t,isLimitExceeded:a,hasOwnLabel:l,isDisabled:o,isLabeledByFormItem:n})=>{const i=ce(Ht,void 0),{formItem:d}=ha(),{emit:r}=ne();function s(m){return[!0,e.trueValue].includes(m)?e.trueValue??!0:e.falseValue??!1}function c(m,b){r("change",s(m),b)}function u(m){if(a.value)return;const b=m.target;r("change",s(b.checked),m)}async function p(m){a.value||!l.value&&!o.value&&n.value&&(m.composedPath().some(b=>b.tagName==="LABEL")||(t.value=s([!1,e.falseValue].includes(t.value)),await Ee(),c(t.value,m)))}const f=D(()=>i?.validateEvent||e.validateEvent);return re(()=>e.modelValue,()=>{f.value&&d?.validate("change").catch(m=>void 0)}),{handleChange:u,onClickRoot:p}},Kn=e=>{const t=T(!1),{emit:a}=ne(),l=ce(Ht,void 0),o=D(()=>ua(l)===!1),n=T(!1),i=D({get(){return o.value?l?.modelValue?.value:e.modelValue??t.value},set(d){o.value&&st(d)?(n.value=l?.max?.value!==void 0&&d.length>l?.max.value&&d.length>i.value.length,n.value===!1&&l?.changeEvent?.(d)):(a(Wt,d),t.value=d)}});return{model:i,isGroup:o,isLimitExceeded:n}},Un=(e,t,{model:a})=>{const l=T(!1),o=T("");let n=null;const i=D(()=>Ja(e.value)?e.label:e.value),d=(c,u)=>{const p=c.map(Lt),f=It(u)?Lt(u.value):u;return Ea(f)?p.some(m=>Po(m,Lt(f))):p.includes(f)},r=D(()=>!!t.default||!Ja(i.value)),s=D(()=>{const c=a.value;return pa(c)?c:st(c)?d(c,i.value):c!=null?c===e.trueValue:!!c});return re(s,c=>{n!==null&&clearTimeout(n),o.value=c?"expand":"contract",n=setTimeout(()=>{o.value="",n=null},500)}),fa(()=>{n!==null&&(clearTimeout(n),n=null)}),{actualValue:i,hasOwnLabel:r,isChecked:s,isFocused:l,currentRipple:o}},Yn=(e,t)=>{const{formItem:a}=ha(),{model:l,isGroup:o,isLimitExceeded:n}=Kn(e),{actualValue:i,currentRipple:d,hasOwnLabel:r,isChecked:s,isFocused:c}=Un(e,t,{model:l}),{isDisabled:u}=Hn({model:l,isChecked:s}),{inputId:p,isLabeledByFormItem:f}=sl(e,{formItemContext:a,disableIdGeneration:r,disableIdManagement:o}),{handleChange:m,onClickRoot:b}=qn(e,{model:l,isLimitExceeded:n,hasOwnLabel:r,isDisabled:u,isLabeledByFormItem:f});return(()=>{function y(){st(l.value)&&!l.value.includes(i.value)?l.value.push(i.value):l.value=e.trueValue??!0}e.checked&&y()})(),{actualValue:i,currentRipple:d,handleChange:m,hasOwnLabel:r,inputId:p,isChecked:s,isDisabled:u,isFocused:c,isLabeledByFormItem:f,model:l,onClickRoot:b}},Jn=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Xn=["id","indeterminate","name","tabindex","disabled","value"],Qn={class:"hover-effect"},Zn=Ae({name:"GuiCheckbox",__name:"checkbox",props:Mn,emits:$n,setup(e){const t=e,a=lo(),{actualValue:l,currentRipple:o,handleChange:n,hasOwnLabel:i,inputId:d,isChecked:r,isDisabled:s,isFocused:c,isLabeledByFormItem:u,model:p,onClickRoot:f}=Yn(t,a),m=be("checkbox"),b=D(()=>!i.value&&u?"span":"label"),y=D(()=>[m.b(),m.is("disabled",s.value),m.is("checked",r.value),m.is("border",t.border),m.is("invert",t.invert)]),O=D(()=>[m.e("input"),m.is("disabled",s.value),m.is("checked",r.value),m.is("indeterminate",t.indeterminate),m.is("focus",c.value)]);return(x,C)=>(Y(),Pe(_a(b.value),{class:H(y.value),"aria-controls":x.indeterminate?x.ariaControls:null,onClick:M(f)},{default:De(()=>[oe("span",{class:H(O.value)},[x.trueValue||x.falseValue?Ze((Y(),_("input",{key:0,id:M(d),"onUpdate:modelValue":C[0]||(C[0]=g=>It(p)?p.value=g:null),class:H(M(m).e("original")),type:"checkbox",indeterminate:x.indeterminate,name:x.name,tabindex:x.tabindex,disabled:M(s),"true-value":x.trueValue??!0,"false-value":x.falseValue??!1,onChange:C[1]||(C[1]=(...g)=>M(n)&&M(n)(...g)),onFocus:C[2]||(C[2]=g=>c.value=!0),onBlur:C[3]||(C[3]=g=>c.value=!1),onClick:C[4]||(C[4]=Na(()=>{},["stop"]))},null,42,Jn)),[[Da,M(p)]]):Ze((Y(),_("input",{key:1,id:M(d),"onUpdate:modelValue":C[5]||(C[5]=g=>It(p)?p.value=g:null),class:H(M(m).e("original")),type:"checkbox",indeterminate:x.indeterminate,name:x.name,tabindex:x.tabindex,disabled:M(s),value:M(l),onChange:C[6]||(C[6]=(...g)=>M(n)&&M(n)(...g)),onFocus:C[7]||(C[7]=g=>c.value=!0),onBlur:C[8]||(C[8]=g=>c.value=!1),onClick:C[9]||(C[9]=Na(()=>{},["stop"]))},null,42,Xn)),[[Da,M(p)]]),oe("span",{class:H(M(m).e("inner"))},[oe("span",Qn,[oe("span",{class:H(["ripple",M(o)])},null,2)])],2)],2),M(i)?(Y(),_("span",{key:0,class:H(M(m).e("label"))},[Te(x.$slots,"default"),x.$slots.default?Oe("",!0):(Y(),_(lt,{key:0},[ma(ze(x.label),1)],64))],2)):Oe("",!0)]),_:3},8,["class","aria-controls","onClick"]))}}),_n=In({modelValue:{type:Rn(Array),default:()=>[]},options:{type:Array,default:()=>[]},disabled:Boolean,min:Number,max:Number,layout:{type:String,default:"horizontal"},tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},border:{type:Boolean,default:!1},invert:{type:Boolean,default:!1},...rl(["ariaLabel"])}),es={[Wt]:e=>st(e),change:e=>st(e)},Dl=Ae({name:"GuiCheckboxGroup",__name:"checkbox-group",props:_n,emits:es,setup(e,{emit:t}){const a=e,l=t,o=be("checkbox"),{formItem:n}=ha(),{inputId:i,isLabeledByFormItem:d}=sl(a,{formItemContext:n}),r=async p=>{l(Wt,p),await Ee(),l("change",p)},s=D({get(){return a.modelValue},set(p){r(p)}}),c={horizontal:"flex flex-row gap-4",vertical:"flex flex-col gap-4"},u=D(()=>[o.b("group"),c[a.layout]]);return Za(Ht,{...Do(Qa(a),["min","max","disabled","validateEvent"]),modelValue:s,changeEvent:r}),Ue(()=>{const p=a.options.filter(f=>f.checked).map(f=>f.value);p.length>0&&(s.value=p)}),re(()=>a.modelValue,()=>{a.validateEvent&&n?.validate?.("change").catch(p=>void 0)}),(p,f)=>(Y(),Pe(_a(p.tag),{id:M(i),class:H(u.value),role:"group","aria-label":M(d)?void 0:p.ariaLabel||"checkbox-group","aria-labelledby":M(d)?M(n)?.labelId:void 0},{default:De(()=>[a.options.length>0?(Y(!0),_(lt,{key:0},Qt(a.options,m=>(Y(),Pe(M(Me),{key:String(m.value),value:m.value,label:m?.label??m.value,disabled:m?.disabled,checked:m?.checked,border:a.border,invert:a.invert},null,8,["value","label","disabled","checked","border","invert"]))),128)):Te(p.$slots,"default",{key:1})]),_:3},8,["id","class","aria-label","aria-labelledby"]))}}),Me=Gn(Zn,{CheckboxGroup:Dl});Pn(Dl);const{CheckboxGroup:ts}=Me,kl=Ae({name:"GTableFilterPanel",components:{GCheckbox:Me,GCheckboxGroup:ts,GScrollbar:al,GTooltip:ll},directives:{ClickOutside:Mo},props:{placement:{type:String,default:"bottom-start"},store:{type:Object},column:{type:Object},upDataColumn:{type:Function},appendTo:io.appendTo},setup(e){const t=ne(),{t:a}=dl(),l=be("table-filter"),o=t?.parent;o.filterPanels.value[e.column.id]||(o.filterPanels.value[e.column.id]=t);const n=T(!1),i=T(null),d=D(()=>e.column&&e.column.filters),r=D(()=>e.column.filterClassName?`${l.b()} ${e.column.filterClassName}`:l.b()),s=D({get:()=>(e.column?.filteredValue||[])[0],set:h=>{c.value&&(Nt(h)?c.value.splice(0,1):c.value.splice(0,1,h))}}),c=D({get(){return e.column?e.column.filteredValue||[]:[]},set(h){e.column&&e.upDataColumn("filteredValue",h)}}),u=D(()=>e.column?e.column.filterMultiple:!0),p=h=>h.value===s.value,f=()=>{n.value=!1},m=h=>{h.stopPropagation(),n.value=!n.value},b=()=>{n.value=!1},y=()=>{C(c.value),f()},O=()=>{c.value=[],C(c.value),f()},x=h=>{s.value=h,Nt(h)?C([]):C(c.value),f()},C=h=>{e.store.commit("filterChange",{column:e.column,values:h}),e.store.updateAllSelected()};re(n,h=>{e.column&&e.upDataColumn("filterOpened",h)},{immediate:!0});const g=D(()=>i.value?.popperRef?.contentRef);return{tooltipVisible:n,multiple:u,filterClassName:r,filteredValue:c,filterValue:s,filters:d,handleConfirm:y,handleReset:O,handleSelect:x,isPropAbsent:Nt,isActive:p,t:a,ns:l,showFilterPanel:m,hideFilterPanel:b,popperPaneRef:g,tooltip:i}}}),as={key:0},ls=["disabled"],os=["label","onClick"];function ns(e,t,a,l,o,n){const i=Fe("g-checkbox"),d=Fe("g-checkbox-group"),r=Fe("g-scrollbar"),s=Fe("g-tooltip");return Y(),Pe(s,{ref:"tooltip",visible:e.tooltipVisible,offset:0,placement:e.placement,"show-arrow":!1,"stop-popper-mouse-event":!1,teleported:"",effect:"light",pure:"","popper-class":e.filterClassName,persistent:"","append-to":e.appendTo},{content:De(()=>[e.multiple?(Y(),_("div",as,[oe("div",{class:H(e.ns.e("content"))},[Se(r,{"wrap-class":e.ns.e("wrap")},{default:De(()=>[Se(d,{modelValue:e.filteredValue,"onUpdate:modelValue":t[0]||(t[0]=c=>e.filteredValue=c),class:H(e.ns.e("checkbox-group"))},{default:De(()=>[(Y(!0),_(lt,null,Qt(e.filters,c=>(Y(),Pe(i,{key:c.value,value:c.value},{default:De(()=>[ma(ze(c.text),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","class"])]),_:1},8,["wrap-class"])],2),oe("div",{class:H(e.ns.e("bottom"))},[oe("button",{class:H({[e.ns.is("disabled")]:e.filteredValue.length===0}),disabled:e.filteredValue.length===0,type:"button",onClick:t[1]||(t[1]=(...c)=>e.handleConfirm&&e.handleConfirm(...c))},ze(e.t("el.table.confirmFilter")),11,ls),oe("button",{type:"button",onClick:t[2]||(t[2]=(...c)=>e.handleReset&&e.handleReset(...c))},ze(e.t("el.table.resetFilter")),1)],2)])):(Y(),_("ul",{key:1,class:H(e.ns.e("list"))},[oe("li",{class:H([e.ns.e("list-item"),{[e.ns.is("active")]:e.isPropAbsent(e.filterValue)}]),onClick:t[3]||(t[3]=c=>e.handleSelect(null))},ze(e.t("el.table.clearFilter")),3),(Y(!0),_(lt,null,Qt(e.filters,c=>(Y(),_("li",{key:c.value,class:H([e.ns.e("list-item"),e.ns.is("active",e.isActive(c))]),label:c.value,onClick:u=>e.handleSelect(c.value)},ze(c.text),11,os))),128))],2))]),_:1},8,["visible","placement","popper-class","append-to"])}const ss=cl(kl,[["render",ns]]);kl.__docgenInfo={displayName:"GTableFilterPanel",exportName:"default",description:"",tags:{},props:[{name:"placement",type:{name:"Placement"},defaultValue:{func:!1,value:"'bottom-start'"}},{name:"store",type:{name:"Store<unknown>"}},{name:"column",type:{name:"TableColumnCtx<unknown>"}},{name:"upDataColumn",type:{name:"func"}},{name:"appendTo",type:{name:"useTooltipContentProps.appendTo",func:!0}}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/table/src/filter-panel.vue"]};function Ta(e){const t=ne();el(()=>{a.value.addObserver(t)}),Ue(()=>{l(a.value),o(a.value)}),no(()=>{l(a.value),o(a.value)}),jt(()=>{a.value.removeObserver(t)});const a=D(()=>{const n=e.layout;if(!n)throw new Error("Can not find table layout.");return n}),l=n=>{const i=e.vnode.el?.querySelectorAll("colgroup > col")||[];if(!i.length)return;const d=n.getFlattenColumns(),r={};d.forEach(s=>{r[s.id]=s});for(let s=0,c=i.length;s<c;s++){const u=i[s],p=u.getAttribute("name"),f=r[p];f&&u.setAttribute("width",f.realWidth||f.width)}},o=n=>{const i=e.vnode.el?.querySelectorAll("colgroup > col[name=gutter]")||[];for(let r=0,s=i.length;r<s;r++)i[r].setAttribute("width",n.scrollY.value?n.gutterWidth:"0");const d=e.vnode.el?.querySelectorAll("th.gutter")||[];for(let r=0,s=d.length;r<s;r++){const c=d[r];c.style.width=n.scrollY.value?`${n.gutterWidth}px`:"0",c.style.display=n.scrollY.value?"":"none"}};return{tableLayout:a.value,onColumnsChange:l,onScrollableChange:o}}const Ce=Symbol("GTable");function rs(e,t){const a=ne(),l=ce(Ce),o=b=>{b.stopPropagation()},n=(b,y)=>{!y.filters&&y.sortable?m(b,y,!1):y.filterable&&!y.sortable&&o(b),l?.emit("header-click",y,b)},i=(b,y)=>{l?.emit("header-contextmenu",y,b)},d=T(null),r=T(!1),s=T({}),c=(b,y)=>{if(ot&&!(y.children&&y.children.length>0)&&d.value&&e.border){r.value=!0;const O=l;t("set-drag-visible",!0);const C=(O?.vnode.el).getBoundingClientRect().left,g=a.vnode.el.querySelector(`th.${y.id}`),h=g.getBoundingClientRect(),S=h.left-C+30;Pt(g,"noclick"),s.value={startMouseLeft:b.clientX,startLeft:h.right-C,startColumnLeft:h.left-C,tableLeft:C};const w=O?.refs.resizeProxy;w.style.left=`${s.value.startLeft}px`,document.onselectstart=function(){return!1},document.ondragstart=function(){return!1};const v=V=>{const I=V.clientX-s.value.startMouseLeft,$=s.value.startLeft+I;w.style.left=`${Math.max(S,$)}px`},A=()=>{if(r.value){const{startColumnLeft:V,startLeft:I}=s.value,z=Number.parseInt(w.style.left,10)-V;y.width=y.realWidth=z,O?.emit("header-dragend",y.width,I-V,y,b),requestAnimationFrame(()=>{e.store.scheduleLayout(!1,!0)}),document.body.style.cursor="",r.value=!1,d.value=null,s.value={},t("set-drag-visible",!1)}document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",A),document.onselectstart=null,document.ondragstart=null,setTimeout(()=>{nt(g,"noclick")},0)};document.addEventListener("mousemove",v),document.addEventListener("mouseup",A)}},u=(b,y)=>{if(y.children&&y.children.length>0)return;const O=b.target;if(!yo(O))return;const x=O?.closest("th");if(!(!y||!y.resizable||!x)&&!r.value&&e.border){const C=x.getBoundingClientRect(),g=document.body.style,h=x.parentNode?.lastElementChild===x,S=e.allowDragLastColumn||!h;C.width>12&&C.right-b.clientX<8&&S?(g.cursor="col-resize",Qe(x,"is-sortable")&&(x.style.cursor="col-resize"),d.value=y):r.value||(g.cursor="",Qe(x,"is-sortable")&&(x.style.cursor="pointer"),d.value=null)}},p=()=>{ot&&(document.body.style.cursor="")},f=({order:b,sortOrders:y})=>{if(b==="")return y[0];const O=y.indexOf(b||null);return y[O>y.length-2?0:O+1]},m=(b,y,O)=>{b.stopPropagation();const x=y.order===O?null:O||f(y),C=b.target?.closest("th");if(C&&Qe(C,"noclick")){nt(C,"noclick");return}if(!y.sortable)return;const g=b.currentTarget;if(["ascending","descending"].some(A=>Qe(g,A)&&!y.sortOrders.includes(A)))return;const h=e.store.states;let S=h.sortProp.value,w;const v=h.sortingColumn.value;(v!==y||v===y&&it(v.order))&&(v&&(v.order=null),h.sortingColumn.value=y,S=y.property),x?w=y.order=x:w=y.order=null,h.sortProp.value=S,h.sortOrder.value=w,l?.store.commit("changeSortCondition")};return{handleHeaderClick:n,handleHeaderContextMenu:i,handleMouseDown:c,handleMouseMove:u,handleMouseOut:p,handleSortClick:m,handleFilterClick:o}}function is(e){const t=ce(Ce),a=be("table");return{getHeaderRowStyle:d=>{const r=t?.props.headerRowStyle;return he(r)?r.call(null,{rowIndex:d}):r},getHeaderRowClass:d=>{const r=[],s=t?.props.headerRowClassName;return ve(s)?r.push(s):he(s)&&r.push(s.call(null,{rowIndex:d})),r.join(" ")},getHeaderCellStyle:(d,r,s,c)=>{let u=t?.props.headerCellStyle??{};he(u)&&(u=u.call(null,{rowIndex:d,columnIndex:r,row:s,column:c}));const p=Sa(r,c.fixed,e.store,s);return qe(p,"left"),qe(p,"right"),Object.assign({},u,p)},getHeaderCellClass:(d,r,s,c)=>{const u=xa(a.b(),r,c.fixed,e.store,s),p=[c.id,c.order,c.headerAlign,c.className,c.labelClassName,...u];c.children||p.push("is-leaf"),c.sortable&&p.push("is-sortable");const f=t?.props.headerCellClassName;return ve(f)?p.push(f):he(f)&&p.push(f.call(null,{rowIndex:d,columnIndex:r,row:s,column:c})),p.push(a.e("cell")),p.filter(m=>!!m).join(" ")}}}const Rl=e=>{const t=[];return e.forEach(a=>{a.children?(t.push(a),t.push.apply(t,Rl(a.children))):t.push(a)}),t},Vl=e=>{let t=1;const a=(n,i)=>{if(i&&(n.level=i.level+1,t<n.level&&(t=n.level)),n.children){let d=0;n.children.forEach(r=>{a(r,n),d+=r.colSpan}),n.colSpan=d}else n.colSpan=1};e.forEach(n=>{n.level=1,a(n,void 0)});const l=[];for(let n=0;n<t;n++)l.push([]);return Rl(e).forEach(n=>{n.children?(n.rowSpan=1,n.children.forEach(i=>i.isSubColumn=!0)):n.rowSpan=t-n.level+1,l[n.level-1].push(n)}),l};function ds(e){const t=ce(Ce),a=D(()=>Vl(e.store.states.originColumns.value));return{isGroup:D(()=>{const n=a.value.length>1;return n&&t&&(t.state.isGroup.value=!0),n}),toggleAllSelection:n=>{n.stopPropagation(),t?.store.commit("toggleAllSelection")},columnRows:a}}const cs=Ae({name:"GTableHeader",components:{GCheckbox:Me},props:{fixed:{type:String,default:""},store:{required:!0,type:Object},border:Boolean,defaultSort:{type:Object,default:()=>({prop:"",order:""})},appendFilterPanelTo:{type:String},allowDragLastColumn:{type:Boolean}},setup(e,{emit:t}){const a=ne(),l=ce(Ce),o=be("table"),n=T({}),{onColumnsChange:i,onScrollableChange:d}=Ta(l),r=l?.props.tableLayout==="auto",s=tl(new Map),c=T(),u=()=>{setTimeout(()=>{s.size>0&&(s.forEach((V,I)=>{const $=c.value.querySelector(`.${I.replace(/\s/g,".")}`);if($){const z=$.getBoundingClientRect().width;V.width=z}}),s.clear())})};re(s,u),Ue(async()=>{await Ee(),await Ee();const{prop:V,order:I}=e.defaultSort;l?.store.commit("sort",{prop:V,order:I,init:!0}),u()});const{handleHeaderClick:p,handleHeaderContextMenu:f,handleMouseDown:m,handleMouseMove:b,handleMouseOut:y,handleSortClick:O,handleFilterClick:x}=rs(e,t),{getHeaderRowStyle:C,getHeaderRowClass:g,getHeaderCellStyle:h,getHeaderCellClass:S}=is(e),{isGroup:w,toggleAllSelection:v,columnRows:A}=ds(e);return a.state={onColumnsChange:i,onScrollableChange:d},a.filterPanels=n,{ns:o,filterPanels:n,onColumnsChange:i,onScrollableChange:d,columnRows:A,getHeaderRowClass:g,getHeaderRowStyle:C,getHeaderCellClass:S,getHeaderCellStyle:h,handleHeaderClick:p,handleHeaderContextMenu:f,handleMouseDown:m,handleMouseMove:b,handleMouseOut:y,handleSortClick:O,handleFilterClick:x,isGroup:w,toggleAllSelection:v,saveIndexSelection:s,isTableLayoutAuto:r,theadRef:c,updateFixedColumnStyle:u}},render(){const{ns:e,isGroup:t,columnRows:a,getHeaderCellStyle:l,getHeaderCellClass:o,getHeaderRowClass:n,getHeaderRowStyle:i,handleHeaderClick:d,handleHeaderContextMenu:r,handleMouseDown:s,handleMouseMove:c,handleSortClick:u,handleMouseOut:p,store:f,$parent:m,saveIndexSelection:b,isTableLayoutAuto:y}=this;let O=1;return N("thead",{ref:"theadRef",class:{[e.is("group")]:t}},a.map((x,C)=>N("tr",{class:n(C),key:C,style:i(C)},x.map((g,h)=>{g.rowSpan>O&&(O=g.rowSpan);const S=o(C,h,x,g);return y&&g.fixed&&b.set(S,g),N("th",{class:S,colspan:g.colSpan,key:`${g.id}-thead`,rowspan:g.rowSpan,style:l(C,h,x,g),onClick:w=>{w.currentTarget.classList.contains("noclick")||d(w,g)},onContextmenu:w=>r(w,g),onMousedown:w=>s(w,g),onMousemove:w=>c(w,g),onMouseout:p},[N("div",{class:["cell",g.filteredValue&&g.filteredValue.length>0?"highlight":""]},[g.renderHeader?g.renderHeader({column:g,$index:h,store:f,_self:m}):g.label,g.sortable&&N("span",{onClick:w=>u(w,g),class:"caret-wrapper"},[N("i",{onClick:w=>u(w,g,"ascending"),class:"sort-caret ascending"}),N("i",{onClick:w=>u(w,g,"descending"),class:"sort-caret descending"})]),g.filterable&&N(ss,{store:f,placement:g.filterPlacement||"bottom-start",appendTo:m.appendFilterPanelTo,column:g,upDataColumn:(w,v)=>{g[w]=v}},{"filter-icon":()=>g.renderFilterIcon?g.renderFilterIcon({filterOpened:g.filterOpened}):null})])])}))))}});function Jt(e,t,a=.03){return e-t>a}function us(e){const t=ce(Ce),a=T(""),l=T(N("div")),o=(m,b,y)=>{const O=t,x=Yt(m);let C;const g=O?.vnode.el?.dataset.prefix;x&&(C=Ba({columns:e.store.states.columns.value},x,g),C&&O?.emit(`cell-${y}`,b,C,x,m)),O?.emit(`row-${y}`,b,C,m)},n=(m,b)=>{o(m,b,"dblclick")},i=(m,b)=>{e.store.commit("setCurrentRow",b),o(m,b,"click")},d=(m,b)=>{o(m,b,"contextmenu")},r=Gt(m=>{e.store.commit("setHoverRow",m)},30),s=Gt(()=>{e.store.commit("setHoverRow",null)},30),c=m=>{const b=window.getComputedStyle(m,null),y=Number.parseInt(b.paddingLeft,10)||0,O=Number.parseInt(b.paddingRight,10)||0,x=Number.parseInt(b.paddingTop,10)||0,C=Number.parseInt(b.paddingBottom,10)||0;return{left:y,right:O,top:x,bottom:C}},u=(m,b,y)=>{let O=b.target.parentNode;for(;m>1&&(O=O?.nextSibling,!(!O||O.nodeName!=="TR"));)y(O,"hover-row hover-fixed-row"),m--};return{handleDoubleClick:n,handleClick:i,handleContextMenu:d,handleMouseEnter:r,handleMouseLeave:s,handleCellMouseEnter:(m,b,y)=>{const O=t,x=Yt(m),C=O?.vnode.el?.dataset.prefix;let g;if(x){g=Ba({columns:e.store.states.columns.value},x,C),x.rowSpan>1&&u(x.rowSpan,m,Pt);const q=O.hoverState={cell:x,column:g,row:b};O?.emit("cell-mouse-enter",q.row,q.column,q.cell,m)}if(!y)return;const h=m.target.querySelector(".cell");if(!(Qe(h,`${C}-tooltip`)&&h.childNodes.length))return;const S=document.createRange();S.setStart(h,0),S.setEnd(h,h.childNodes.length);const{width:w,height:v}=S.getBoundingClientRect(),{width:A,height:V}=h.getBoundingClientRect(),{top:I,left:$,right:z,bottom:J}=c(h),j=$+z,K=I+J;Jt(w+j,A)||Jt(v+K,V)||Jt(h.scrollWidth,A)?wn(y,x.innerText||x.textContent,b,g,x,O):ye?.trigger===x&&ye?.()},handleCellMouseLeave:m=>{const b=Yt(m);if(!b)return;b.rowSpan>1&&u(b.rowSpan,m,nt);const y=t?.hoverState;t?.emit("cell-mouse-leave",y?.row,y?.column,y?.cell,m)},tooltipContent:a,tooltipTrigger:l}}function ps(e){const t=ce(Ce),a=be("table");return{getRowStyle:(s,c)=>{const u=t?.props.rowStyle;return he(u)?u.call(null,{row:s,rowIndex:c}):u||null},getRowClass:(s,c)=>{const u=[a.e("row")];t?.props.highlightCurrentRow&&s===e.store.states.currentRow.value&&u.push("current-row"),e.stripe&&c%2===1&&u.push(a.em("row","striped"));const p=t?.props.rowClassName;return ve(p)?u.push(p):he(p)&&u.push(p.call(null,{row:s,rowIndex:c})),u},getCellStyle:(s,c,u,p)=>{const f=t?.props.cellStyle;let m=f??{};he(f)&&(m=f.call(null,{rowIndex:s,columnIndex:c,row:u,column:p}));const b=Sa(c,e?.fixed,e.store);return qe(b,"left"),qe(b,"right"),Object.assign({},m,b)},getCellClass:(s,c,u,p,f)=>{const m=xa(a.b(),c,e?.fixed,e.store,void 0,f),b=[p.id,p.align,p.className,...m],y=t?.props.cellClassName;return ve(y)?b.push(y):he(y)&&b.push(y.call(null,{rowIndex:s,columnIndex:c,row:u,column:p})),b.push(a.e("cell")),b.filter(O=>!!O).join(" ")},getSpan:(s,c,u,p)=>{let f=1,m=1;const b=t?.props.spanMethod;if(he(b)){const y=b({row:s,column:c,rowIndex:u,columnIndex:p});de(y)?(f=y[0],m=y[1]):zt(y)&&(f=y.rowspan,m=y.colspan)}return{rowspan:f,colspan:m}},getColspanRealWidth:(s,c,u)=>{if(c<1)return s[u].realWidth;const p=s.map(({realWidth:f,width:m})=>f||m).slice(u,u+c);return Number(p.reduce((f,m)=>Number(f)+Number(m),-1))}}}const ms=["colspan","rowspan"],zl=Ae({name:"TableTdWrapper",__name:"td-wrapper",props:{colspan:{type:Number,default:1},rowspan:{type:Number,default:1}},setup(e){return(t,a)=>(Y(),_("td",{colspan:e.colspan,rowspan:e.rowspan},[Te(t.$slots,"default")],8,ms))}});zl.__docgenInfo={name:"TableTdWrapper",exportName:"default",displayName:"td-wrapper",description:"",tags:{},props:[{name:"colspan",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"rowspan",type:{name:"number"},defaultValue:{func:!1,value:"1"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/table/src/table-body/td-wrapper.vue"]};function fs(e){const t=ce(Ce),a=be("table"),{handleDoubleClick:l,handleClick:o,handleContextMenu:n,handleMouseEnter:i,handleMouseLeave:d,handleCellMouseEnter:r,handleCellMouseLeave:s,tooltipContent:c,tooltipTrigger:u}=us(e),{getRowStyle:p,getRowClass:f,getCellStyle:m,getCellClass:b,getSpan:y,getColspanRealWidth:O}=ps(e),x=D(()=>e.store.states.columns.value.findIndex(({type:w})=>w==="default")),C=(w,v)=>{const A=t.props.rowKey;return A?se(w,A):v},g=(w,v,A,V=!1)=>{const{tooltipEffect:I,tooltipOptions:$,store:z}=e,{indent:J,columns:j}=z.states,K=f(w,v);let q=!0;return A&&(K.push(a.em("row",`level-${A.level}`)),q=A.display),N("tr",{style:[q?null:{display:"none"},p(w,v)],class:K,key:C(w,v),onDblclick:E=>l(E,w),onClick:E=>o(E,w),onContextmenu:E=>n(E,w),onMouseenter:()=>i(v),onMouseleave:d},j.value.map((E,R)=>{const{rowspan:k,colspan:P}=y(w,E,v,R);if(!k||!P)return null;const X=Object.assign({},E);X.realWidth=O(j.value,P,R);const Q={store:e.store,_self:e.context||t,column:X,row:w,$index:v,cellIndex:R,expanded:V};R===x.value&&A&&(Q.treeNode={indent:A.level*J.value,level:A.level},Ie(A.expanded)&&(Q.treeNode.expanded=A.expanded,"loading"in A&&(Q.treeNode.loading=A.loading),"noLazyChildren"in A&&(Q.treeNode.noLazyChildren=A.noLazyChildren)));const Z=`${C(w,v)},${R}`,fe=X.columnKey||X.rawColumnKey||"",we=E.showOverflowTooltip&&bl({effect:I},$,E.showOverflowTooltip);return N(zl,{style:m(v,R,w,E),class:b(v,R,w,E,P-1),key:`${fe}${Z}`,rowspan:k,colspan:P,onMouseenter:ue=>r(ue,w,we),onMouseleave:s},{default:()=>h(R,E,Q)})}))},h=(w,v,A)=>v.renderCell(A);return{wrappedRowRender:(w,v)=>{const A=e.store,{isRowExpanded:V,assertRowKey:I}=A,{treeData:$,lazyTreeNodeMap:z,childrenColumnName:J,rowKey:j}=A.states,K=A.states.columns.value;if(K.some(({type:L})=>L==="expand")){const L=V(w),E=g(w,v,void 0,L),R=t.renderExpanded;if(!R)return console.error("[Element Error]renderExpanded is required."),E;const k=[[E]];return(t.props.preserveExpandedContent||L)&&k[0].push(N("tr",{key:`expanded-row__${E.key}`,style:{display:L?"":"none"}},[N("td",{colspan:K.length,class:`${a.e("cell")} ${a.e("expanded-cell")}`},[R({row:w,$index:v,store:A,expanded:L})])])),k}else if(Object.keys($.value).length){I();const L=se(w,j.value);let E=$.value[L],R=null;E&&(R={expanded:E.expanded,level:E.level,display:!0},Ie(E.lazy)&&(Ie(E.loaded)&&E.loaded&&(R.noLazyChildren=!(E.children&&E.children.length)),R.loading=E.loading));const k=[g(w,v,R)];if(E){let P=0;const X=(Z,fe)=>{Z&&Z.length&&fe&&Z.forEach(we=>{const ue={display:fe.display&&fe.expanded,level:fe.level+1,expanded:!1,noLazyChildren:!1,loading:!1},Ne=se(we,j.value);if(Nt(Ne))throw new Error("For nested data item, row-key is required.");if(E={...$.value[Ne]},E&&(ue.expanded=E.expanded,E.level=E.level||ue.level,E.display=!!(E.expanded&&ue.display),Ie(E.lazy)&&(Ie(E.loaded)&&E.loaded&&(ue.noLazyChildren=!(E.children&&E.children.length)),ue.loading=E.loading)),P++,k.push(g(we,v+P,ue)),E){const ke=z.value[Ne]||we[J.value];X(ke,E)}})};E.display=!0;const Q=z.value[L]||w[J.value];X(Q,E)}return k}else return g(w,v,void 0)},tooltipContent:c,tooltipTrigger:u}}const gs={store:{required:!0,type:Object},stripe:Boolean,tooltipEffect:String,tooltipOptions:{type:Object},context:{default:()=>({}),type:Object},rowClassName:[String,Function],rowStyle:[Object,Function],fixed:{type:String,default:""},highlight:Boolean},bs=Ae({name:"GTableBody",props:gs,setup(e){const t=ne(),a=ce(Ce),l=be("table"),{wrappedRowRender:o,tooltipContent:n,tooltipTrigger:i}=fs(e),{onColumnsChange:d,onScrollableChange:r}=Ta(a),s=[];return re(e.store.states.hoverRow,(c,u)=>{const p=t?.vnode.el,f=Array.from(p?.children||[]).filter(y=>y?.classList.contains(`${l.e("row")}`));let m=c;const b=f[m]?.childNodes;if(b?.length){let y=0;Array.from(b).reduce((x,C,g)=>(b[g]?.colSpan>1&&(y=b[g]?.colSpan),C.nodeName!=="TD"&&y===0&&x.push(g),y>0&&y--,x),[]).forEach(x=>{for(m=c;m>0;){const C=f[m-1]?.childNodes;if(C[x]&&C[x].nodeName==="TD"&&C[x].rowSpan>1){Pt(C[x],"hover-cell"),s.push(C[x]);break}m--}})}else s.forEach(y=>nt(y,"hover-cell")),s.length=0;!e.store.states.isComplex.value||!ot||Ro(()=>{const y=f[u],O=f[c];y&&!y.classList.contains("hover-fixed-row")&&nt(y,"hover-row"),O&&Pt(O,"hover-row")})}),jt(()=>{ye?.()}),{ns:l,onColumnsChange:d,onScrollableChange:r,wrappedRowRender:o,tooltipContent:n,tooltipTrigger:i}},render(){const{wrappedRowRender:e,store:t}=this,a=t.states.data.value||[];return N("tbody",{tabIndex:-1},[a.reduce((l,o)=>l.concat(e(o,l.length)),[])])}});function ys(){const t=ce(Ce)?.store,a=D(()=>t?.states.fixedLeafColumnsLength.value??0),l=D(()=>t?.states.rightFixedColumns.value.length??0),o=D(()=>t?.states.columns.value.length??0),n=D(()=>t?.states.fixedColumns.value.length??0),i=D(()=>t?.states.rightFixedColumns.value.length??0);return{leftFixedLeafCount:a,rightFixedLeafCount:l,columnsCount:o,leftFixedCount:n,rightFixedCount:i,columns:t?.states.columns??[]}}function hs(e){const{columns:t}=ys(),a=be("table");return{getCellClasses:(n,i)=>{const d=n[i],r=[a.e("cell"),d.id,d.align,d.labelClassName,...xa(a.b(),i,d.fixed,e.store)];return d.className&&r.push(d.className),d.children||r.push(a.is("leaf")),r},getCellStyles:(n,i)=>{const d=Sa(i,n.fixed,e.store);return qe(d,"left"),qe(d,"right"),d},columns:t}}const vs=Ae({name:"GTableFooter",props:{fixed:{type:String,default:""},store:{required:!0,type:Object},summaryMethod:Function,sumText:String,border:Boolean,defaultSort:{type:Object,default:()=>({prop:"",order:""})}},setup(e){const t=ce(Ce),a=be("table"),{getCellClasses:l,getCellStyles:o,columns:n}=hs(e),{onScrollableChange:i,onColumnsChange:d}=Ta(t);return{ns:a,onScrollableChange:i,onColumnsChange:d,getCellClasses:l,getCellStyles:o,columns:n}},render(){const{columns:e,getCellStyles:t,getCellClasses:a,summaryMethod:l,sumText:o}=this,n=this.store.states.data.value;let i=[];return l?i=l({columns:e,data:n}):e.forEach((d,r)=>{if(r===0){i[r]=o;return}const s=n.map(f=>Number(f[d.property])),c=[];let u=!0;s.forEach(f=>{if(!Number.isNaN(+f)){u=!1;const m=`${f}`.split(".")[1];c.push(m?m.length:0)}});const p=Math.max.apply(null,c);u?i[r]="":i[r]=s.reduce((f,m)=>{const b=Number(m);return Number.isNaN(+b)?f:Number.parseFloat((f+m).toFixed(Math.min(p,20)))},0)}),N(N("tfoot",[N("tr",{},[...e.map((d,r)=>N("td",{key:r,colspan:d.colSpan,rowspan:d.rowSpan,class:a(e,r),style:t(d,r)},[N("div",{class:["cell",d.labelClassName]},[i[r]])]))])]))}});function Cs(e){return{setCurrentRow:u=>{e.commit("setCurrentRow",u)},getSelectionRows:()=>e.getSelectionRows(),toggleRowSelection:(u,p,f=!0)=>{e.toggleRowSelection(u,p,!1,f),e.updateAllSelected()},clearSelection:()=>{e.clearSelection()},clearFilter:u=>{e.clearFilter(u)},toggleAllSelection:()=>{e.commit("toggleAllSelection")},toggleRowExpansion:(u,p)=>{e.toggleRowExpansionAdapter(u,p)},clearSort:()=>{e.clearSort()},sort:(u,p)=>{e.commit("sort",{prop:u,order:p})},updateKeyChildren:(u,p)=>{e.updateKeyChildren(u,p)}}}function ws(e,t,a,l){const o=T(!1),n=T(null),i=T(!1),d=L=>{i.value=L},r=T({width:null,height:null,headerHeight:null}),s=T(!1),c={display:"inline-block",verticalAlign:"middle"},u=T(),p=T(0),f=T(0),m=T(0),b=T(0),y=T(0);_e(()=>{t.setHeight(e.height)}),_e(()=>{t.setMaxHeight(e.maxHeight)}),re(()=>[e.currentRowKey,a.states.rowKey],([L,E])=>{!M(E)||!M(L)||a.setCurrentRowKey(`${L}`)},{immediate:!0}),re(()=>e.data,L=>{l.store.commit("setData",L)},{immediate:!0,deep:!0}),_e(()=>{e.expandRowKeys&&a.setExpandRowKeysAdapter(e.expandRowKeys)});const O=()=>{l.store.commit("setHoverRow",null),l.hoverState&&(l.hoverState=null)},x=(L,E)=>{const{pixelX:R,pixelY:k}=E;Math.abs(R)>=Math.abs(k)&&(l.refs.bodyWrapper.scrollLeft+=E.pixelX/5)},C=D(()=>e.height||e.maxHeight||a.states.fixedColumns.value.length>0||a.states.rightFixedColumns.value.length>0),g=D(()=>({width:t.bodyWidth.value?`${t.bodyWidth.value}px`:""})),h=()=>{C.value&&t.updateElsHeight(),t.updateColumnsWidth(),!(typeof window>"u")&&requestAnimationFrame(A)};Ue(async()=>{await Ee(),a.updateColumns(),V(),requestAnimationFrame(h);const L=l.vnode.el,E=l.refs.headerWrapper;e.flexible&&L&&L.parentElement&&(L.parentElement.style.minWidth="0"),r.value={width:u.value=L.offsetWidth,height:L.offsetHeight,headerHeight:e.showHeader&&E?E.offsetHeight:null},a.states.columns.value.forEach(R=>{R.filteredValue&&R.filteredValue.length&&l.store.commit("filterChange",{column:R,values:R.filteredValue,silent:!0})}),l.$ready=!0});const S=(L,E)=>{if(!L)return;const R=Array.from(L.classList).filter(k=>!k.startsWith("is-scrolling-"));R.push(t.scrollX.value?E:"is-scrolling-none"),L.className=R.join(" ")},w=L=>{const{tableWrapper:E}=l.refs;S(E,L)},v=L=>{const{tableWrapper:E}=l.refs;return!!(E&&E.classList.contains(L))},A=function(){if(!l.refs.scrollBarRef)return;if(!t.scrollX.value){const Z="is-scrolling-none";v(Z)||w(Z);return}const L=l.refs.scrollBarRef.wrapRef;if(!L)return;const{scrollLeft:E,offsetWidth:R,scrollWidth:k}=L,{headerWrapper:P,footerWrapper:X}=l.refs;P&&(P.scrollLeft=E),X&&(X.scrollLeft=E);const Q=k-R-1;E>=Q?w("is-scrolling-right"):w(E===0?"is-scrolling-left":"is-scrolling-middle")},V=()=>{l.refs.scrollBarRef&&(l.refs.scrollBarRef.wrapRef&&za(l.refs.scrollBarRef.wrapRef,"scroll",A,{passive:!0}),e.fit?Ia(l.vnode.el,I):za(window,"resize",I),Ia(l.refs.bodyWrapper,()=>{I(),l.refs?.scrollBarRef?.update()}))},I=()=>{const L=l.vnode.el;if(!l.$ready||!L)return;let E=!1;const{width:R,height:k,headerHeight:P}=r.value,X=u.value=L.offsetWidth;R!==X&&(E=!0);const Q=L.offsetHeight;(e.height||C.value)&&k!==Q&&(E=!0);const Z=e.tableLayout==="fixed"?l.refs.headerWrapper:l.refs.tableHeaderRef?.$el;e.showHeader&&Z?.offsetHeight!==P&&(E=!0),p.value=l.refs.tableWrapper?.scrollHeight||0,m.value=Z?.scrollHeight||0,b.value=l.refs.footerWrapper?.offsetHeight||0,y.value=l.refs.appendWrapper?.offsetHeight||0,f.value=p.value-m.value-b.value-y.value,E&&(r.value={width:X,height:Q,headerHeight:e.showHeader&&Z?.offsetHeight||0},h())},$="default",z=D(()=>{const{bodyWidth:L,scrollY:E,gutterWidth:R}=t;return L.value?`${L.value-(E.value?R:0)}px`:""}),J=D(()=>e.maxHeight?"fixed":e.tableLayout),j=D(()=>{if(e.data&&e.data.length)return null;let L="100%";e.height&&f.value&&(L=`${f.value}px`);const E=u.value;return{width:E?`${E}px`:"",height:L}}),K=D(()=>e.height?{height:"100%"}:e.maxHeight?Number.isNaN(Number(e.maxHeight))?{maxHeight:`calc(${e.maxHeight} - ${m.value+b.value}px)`}:{maxHeight:`${e.maxHeight-m.value-b.value}px`}:{});return{isHidden:o,renderExpanded:n,setDragVisible:d,isGroup:s,handleMouseLeave:O,handleHeaderFooterMousewheel:x,tableSize:$,emptyBlockStyle:j,handleFixedMousewheel:(L,E)=>{const R=l.refs.bodyWrapper;if(Math.abs(E.spinY)>0){const k=R.scrollTop;E.pixelY<0&&k!==0&&L.preventDefault(),E.pixelY>0&&R.scrollHeight-R.clientHeight>k&&L.preventDefault(),R.scrollTop+=Math.ceil(E.pixelY/5)}else R.scrollLeft+=Math.ceil(E.pixelX/5)},resizeProxyVisible:i,bodyWidth:z,resizeState:r,doLayout:h,tableBodyStyles:g,tableLayout:J,scrollbarViewStyle:c,scrollbarStyle:K}}function xs(e){const t=T(),a=()=>{const o=e.vnode.el.querySelector(".hidden-columns"),n={childList:!0,subtree:!0},i=e.store.states.updateOrderFns;t.value=new MutationObserver(()=>{i.forEach(d=>d())}),t.value.observe(o,n)};Ue(()=>{a()}),jt(()=>{t.value?.disconnect()})}const Ss={data:{type:Array,default:()=>[]},width:[String,Number],height:[String,Number],maxHeight:[String,Number],fit:{type:Boolean,default:!0},stripe:Boolean,border:Boolean,rowKey:[String,Function],showHeader:{type:Boolean,default:!0},showSummary:Boolean,sumText:String,summaryMethod:Function,rowClassName:[String,Function],rowStyle:[Object,Function],cellClassName:[String,Function],cellStyle:[Object,Function],headerRowClassName:[String,Function],headerRowStyle:[Object,Function],headerCellClassName:[String,Function],headerCellStyle:[Object,Function],highlightCurrentRow:Boolean,currentRowKey:[String,Number],emptyText:String,expandRowKeys:Array,defaultExpandAll:Boolean,defaultSort:Object,tooltipEffect:String,tooltipOptions:Object,spanMethod:Function,selectOnIndeterminate:{type:Boolean,default:!0},indent:{type:Number,default:16},treeProps:{type:Object,default:()=>({hasChildren:"hasChildren",children:"children",checkStrictly:!1})},lazy:Boolean,load:Function,style:{type:Object,default:()=>({})},className:{type:String,default:""},tableLayout:{type:String,default:"fixed"},scrollbarAlwaysOn:Boolean,flexible:Boolean,showOverflowTooltip:[Boolean,Object],tooltipFormatter:Function,appendFilterPanelTo:String,scrollbarTabindex:{type:[Number,String],default:void 0},allowDragLastColumn:{type:Boolean,default:!0},preserveExpandedContent:{type:Boolean,default:!1}};function Il(e){const t=e.tableLayout==="auto";let a=e.columns||[];t&&a.every(({width:o})=>Le(o))&&(a=[]);const l=o=>{const n={key:`${e.tableLayout}_${o.id}`,style:{},name:void 0};return t?n.style={width:`${o.width}px`}:n.name=o.id,n};return N("colgroup",{},a.map(o=>N("col",l(o))))}Il.props=["columns","tableLayout"];const Es=()=>{const e=T(),t=(n,i)=>{const d=e.value;d&&d.scrollTo(n,i)},a=(n,i)=>{const d=e.value;d&&Be(i)&&["Top","Left"].includes(n)&&d[`setScroll${n}`](i)};return{scrollBarRef:e,scrollTo:t,setScrollTop:n=>a("Top",n),setScrollLeft:n=>a("Left",n)}},Gl=500,je={},We={};let Aa;const $t=new WeakMap;let Ts=0;const As="g-table-exp-";function rt(e){const a=(e instanceof Event?e.target:e).closest(".gui-table");a&&(Aa=a)}function Pl(){return Aa??document.querySelector(".gui-table")??void 0}function Ml(e){let t=$t.get(e);return t||(t=`${As}${++Ts}`,$t.set(e,t)),t}function $l(e,t){const a=Object.keys(e);if(a.length>t){const l=a.slice(0,a.length-t);for(const o of l)delete e[o]}}function Os(e){if(!e)return;const t=$t.get(e);if(!t)return;const a=`${t}:`;for(const l of Object.keys(je))l.startsWith(a)&&delete je[l];for(const l of Object.keys(We))l.startsWith(a)&&delete We[l];$t.delete(e)}function jl(){try{const e=Aa||document.querySelector(".gui-table");if(!e)return;const t=e.querySelector("tbody tr");return t?Array.from(t.querySelectorAll("td")):void 0}catch{return}}function Oa(e,t,a,l){const o=a??"right",n=Math.max(1,l??2),i=Pl(),r=`${i?Ml(i):"global"}:${t}-offset-${o}-${n}`;if(We[r]!==void 0)return We[r];const s=jl();if(!s)return 0;const c=e===s.length-1;let u=0;if(c)e>0&&(u+=s[e-1]?.getBoundingClientRect()?.width||0,e>1&&(u+=s[e-2]?.getBoundingClientRect()?.width||0));else if(o==="left"){const p=Math.max(0,e-n+1);for(let f=p;f<e;f++)u+=s[f]?.getBoundingClientRect()?.width||0}return We[r]=u,$l(We,Gl),u}function Fa(e,t,a,l,o){const n=o??"right",i=Math.max(1,l??2),d=Pl(),s=`${d?Ml(d):"global"}:${a}-expand-${n}-${i}`;if(je[s]!==void 0)return je[s];const c=jl();if(!c)return;const u=t===c.length-1;let p=0,f=0;u||(n==="right"?(p=t,f=Math.min(c.length-1,t+i-1)):(p=Math.max(0,t-i+1),f=t));let m=0;if(u)m+=c[t]?.getBoundingClientRect()?.width||0,t>0&&(m+=c[t-1]?.getBoundingClientRect()?.width||0,t>1&&(m+=c[t-2]?.getBoundingClientRect()?.width||0));else for(let b=p;b<=f;b++){const O=c[b]?.getBoundingClientRect()?.width||0;m+=O}return m>0&&(je[s]=m,$l(je,Gl)),m>0?m:void 0}function Ke(e,t){const a=e.closest(".cell");a&&(a.style.overflow=t?"visible":"")}let Fs=1;const Wl=Ae({name:"GTable",directives:{Mousewheel:mn},components:{TableHeader:cs,TableBody:bs,TableFooter:vs,GScrollbar:al,hColgroup:Il},props:Ss,emits:["select","select-all","selection-change","cell-mouse-enter","cell-mouse-leave","cell-contextmenu","cell-click","cell-dblclick","row-click","row-contextmenu","row-dblclick","header-click","header-contextmenu","sort-change","filter-change","current-change","header-dragend","expand-change","scroll","cell-edit-open","cell-edit-close","cell-edit-change","cell-edit-validate"],setup(e){const{t}=dl(),a=be("table"),l=ne();Za(Ce,l);const o=Fn(l,e);l.store=o;const n=new Nn({store:l.store,table:l,fit:e.fit,showHeader:e.showHeader});l.layout=n;const i=D(()=>(o.states.data.value||[]).length===0),{setCurrentRow:d,getSelectionRows:r,toggleRowSelection:s,clearSelection:c,clearFilter:u,toggleAllSelection:p,toggleRowExpansion:f,clearSort:m,sort:b,updateKeyChildren:y}=Cs(o),{isHidden:O,renderExpanded:x,setDragVisible:C,isGroup:g,handleMouseLeave:h,handleHeaderFooterMousewheel:S,tableSize:w,emptyBlockStyle:v,handleFixedMousewheel:A,resizeProxyVisible:V,bodyWidth:I,resizeState:$,doLayout:z,tableBodyStyles:J,tableLayout:j,scrollbarViewStyle:K,scrollbarStyle:q}=ws(e,n,o,l),{scrollBarRef:L,scrollTo:E,setScrollLeft:R,setScrollTop:k}=Es(),P=Gt(z,50),X=`${a.namespace.value}-table_${Fs++}`;l.tableId=X,l.state={isGroup:g,resizeState:$,doLayout:z,debouncedUpdateLayout:P};const Q=D(()=>e.sumText??t("el.table.sumText")),Z=D(()=>e.emptyText??t("el.table.emptyText")),fe=D(()=>Vl(o.states.originColumns.value)[0]);return xs(l),fa(()=>{P.cancel();const we=l.refs?.tableWrapper;Os(we)}),{ns:a,layout:n,store:o,columns:fe,handleHeaderFooterMousewheel:S,handleMouseLeave:h,tableId:X,tableSize:w,isHidden:O,isEmpty:i,renderExpanded:x,resizeProxyVisible:V,resizeState:$,isGroup:g,bodyWidth:I,tableBodyStyles:J,emptyBlockStyle:v,debouncedUpdateLayout:P,handleFixedMousewheel:A,setCurrentRow:d,getSelectionRows:r,toggleRowSelection:s,clearSelection:c,clearFilter:u,toggleAllSelection:p,toggleRowExpansion:f,clearSort:m,doLayout:z,sort:b,updateKeyChildren:y,t,setDragVisible:C,context:l,computedSumText:Q,computedEmptyText:Z,tableLayout:j,scrollbarViewStyle:K,scrollbarStyle:q,scrollBarRef:L,scrollTo:E,setScrollLeft:R,setScrollTop:k,allowDragLastColumn:e.allowDragLastColumn}}}),Ls=["data-prefix"],Ns={ref:"hiddenColumns",class:"hidden-columns"};function Ds(e,t,a,l,o,n){const i=Fe("hColgroup"),d=Fe("table-header"),r=Fe("table-body"),s=Fe("table-footer"),c=Fe("g-scrollbar"),u=so("mousewheel");return Y(),_("div",{ref:"tableWrapper",class:H([{[e.ns.m("fit")]:e.fit,[e.ns.m("striped")]:e.stripe,[e.ns.m("border")]:e.border||e.isGroup,[e.ns.m("hidden")]:e.isHidden,[e.ns.m("group")]:e.isGroup,[e.ns.m("fluid-height")]:e.maxHeight,[e.ns.m("scrollable-x")]:e.layout.scrollX.value,[e.ns.m("scrollable-y")]:e.layout.scrollY.value,[e.ns.m("enable-row-hover")]:!e.store.states.isComplex.value,[e.ns.m("enable-row-transition")]:(e.store.states.data.value||[]).length!==0&&(e.store.states.data.value||[]).length<100,"has-footer":e.showSummary},e.ns.m(e.tableSize),e.className,e.ns.b(),e.ns.m(`layout-${e.tableLayout}`)]),style:$e(e.style),"data-prefix":e.ns.namespace.value,onMouseleave:t[1]||(t[1]=(...p)=>e.handleMouseLeave&&e.handleMouseLeave(...p))},[oe("div",{class:H(e.ns.e("inner-wrapper"))},[oe("div",Ns,[Te(e.$slots,"default")],512),e.showHeader&&e.tableLayout==="fixed"?Ze((Y(),_("div",{key:0,ref:"headerWrapper",class:H(e.ns.e("header-wrapper"))},[oe("table",{ref:"tableHeader",class:H(e.ns.e("header")),style:$e(e.tableBodyStyles),border:"0",cellpadding:"0",cellspacing:"0"},[Se(i,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),Se(d,{ref:"tableHeaderRef",border:e.border,"default-sort":e.defaultSort,store:e.store,"append-filter-panel-to":e.appendFilterPanelTo,"allow-drag-last-column":e.allowDragLastColumn,onSetDragVisible:e.setDragVisible},null,8,["border","default-sort","store","append-filter-panel-to","allow-drag-last-column","onSetDragVisible"])],6)],2)),[[u,e.handleHeaderFooterMousewheel]]):Oe("",!0),oe("div",{ref:"bodyWrapper",class:H(e.ns.e("body-wrapper"))},[Se(c,{ref:"scrollBarRef","view-style":e.scrollbarViewStyle,"wrap-style":e.scrollbarStyle,always:e.scrollbarAlwaysOn,tabindex:e.scrollbarTabindex,onScroll:t[0]||(t[0]=p=>e.$emit("scroll",p))},{default:De(()=>[oe("table",{ref:"tableBody",class:H(e.ns.e("body")),cellspacing:"0",cellpadding:"0",border:"0",style:$e({width:e.bodyWidth,tableLayout:e.tableLayout})},[Se(i,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),e.showHeader&&e.tableLayout==="auto"?(Y(),Pe(d,{key:0,ref:"tableHeaderRef",class:H(e.ns.e("body-header")),border:e.border,"default-sort":e.defaultSort,store:e.store,"append-filter-panel-to":e.appendFilterPanelTo,onSetDragVisible:e.setDragVisible},null,8,["class","border","default-sort","store","append-filter-panel-to","onSetDragVisible"])):Oe("",!0),Se(r,{context:e.context,highlight:e.highlightCurrentRow,"row-class-name":e.rowClassName,"tooltip-effect":e.tooltipEffect,"tooltip-options":e.tooltipOptions,"row-style":e.rowStyle,store:e.store,stripe:e.stripe},null,8,["context","highlight","row-class-name","tooltip-effect","tooltip-options","row-style","store","stripe"]),e.showSummary&&e.tableLayout==="auto"?(Y(),Pe(s,{key:1,class:H(e.ns.e("body-footer")),border:e.border,"default-sort":e.defaultSort,store:e.store,"sum-text":e.computedSumText,"summary-method":e.summaryMethod},null,8,["class","border","default-sort","store","sum-text","summary-method"])):Oe("",!0)],6),e.isEmpty?(Y(),_("div",{key:0,ref:"emptyBlock",style:$e(e.emptyBlockStyle),class:H(e.ns.e("empty-block"))},[oe("span",{class:H(e.ns.e("empty-text"))},[Te(e.$slots,"empty",{},()=>[ma(ze(e.computedEmptyText),1)])],2)],6)):Oe("",!0),e.$slots.append?(Y(),_("div",{key:1,ref:"appendWrapper",class:H(e.ns.e("append-wrapper"))},[Te(e.$slots,"append")],2)):Oe("",!0)]),_:3},8,["view-style","wrap-style","always","tabindex"])],2),e.showSummary&&e.tableLayout==="fixed"?Ze((Y(),_("div",{key:1,ref:"footerWrapper",class:H(e.ns.e("footer-wrapper"))},[oe("table",{class:H(e.ns.e("footer")),cellspacing:"0",cellpadding:"0",border:"0",style:$e(e.tableBodyStyles)},[Se(i,{columns:e.store.states.columns.value,"table-layout":e.tableLayout},null,8,["columns","table-layout"]),Se(s,{border:e.border,"default-sort":e.defaultSort,store:e.store,"sum-text":e.computedSumText,"summary-method":e.summaryMethod},null,8,["border","default-sort","store","sum-text","summary-method"])],6)],2)),[[ka,!e.isEmpty],[u,e.handleHeaderFooterMousewheel]]):Oe("",!0),e.border||e.isGroup?(Y(),_("div",{key:2,class:H(e.ns.e("border-left-patch"))},null,2)):Oe("",!0)],2),Ze(oe("div",{ref:"resizeProxy",class:H(e.ns.e("column-resize-proxy"))},null,2),[[ka,e.resizeProxyVisible]])],46,Ls)}const ks=cl(Wl,[["render",Ds]]);Wl.__docgenInfo={displayName:"GTable",exportName:"default",description:"",tags:{},events:[{name:"scroll"},{name:"select"},{name:"select-all"},{name:"selection-change"},{name:"cell-mouse-enter"},{name:"cell-mouse-leave"},{name:"cell-contextmenu"},{name:"cell-click"},{name:"cell-dblclick"},{name:"row-click"},{name:"row-contextmenu"},{name:"row-dblclick"},{name:"header-click"},{name:"header-contextmenu"},{name:"sort-change"},{name:"filter-change"},{name:"current-change"},{name:"header-dragend"},{name:"expand-change"},{name:"cell-edit-open"},{name:"cell-edit-close"},{name:"cell-edit-change"},{name:"cell-edit-validate"}],slots:[{name:"default"},{name:"empty"},{name:"append"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/table/src/table.vue"]};const Rs={selection:"table-column--selection",expand:"table__expand-column"},Vs={default:{order:""},selection:{width:48,minWidth:48,realWidth:48,order:""},expand:{width:48,minWidth:48,realWidth:48,order:""},index:{width:48,minWidth:48,realWidth:48,order:""}},zs=e=>Rs[e]||"",Is={selection:{renderHeader({store:e,column:t}){function a(){return e.states.data.value&&e.states.data.value.length===0}return N(Me,{disabled:a(),indeterminate:e.states.selection.value.length>0&&!e.states.isAllSelected.value,"onUpdate:modelValue":e.toggleAllSelection,modelValue:e.states.isAllSelected.value,ariaLabel:t.label})},renderCell({row:e,column:t,store:a,$index:l}){return N(Me,{disabled:t.selectable?!t.selectable.call(null,e,l):!1,onChange:()=>{a.commit("rowSelectedChanged",e)},onClick:o=>o.stopPropagation(),modelValue:a.isSelected(e),ariaLabel:t.label})},sortable:!1,resizable:!1},index:{renderHeader({column:e}){return e.label||"#"},renderCell({column:e,$index:t}){let a=t+1;const l=e.index;return Be(l)?a=t+l:he(l)&&(a=l(t)),N("div",{},[a])},sortable:!1},expand:{renderHeader({column:e}){return e.label||""},renderCell({row:e,store:t,expanded:a}){const{ns:l}=t,o=[l.e("expand-icon")];return a&&o.push(l.em("expand-icon","expanded")),N("div",{class:o,onClick:function(i){i.stopPropagation(),t.toggleRowExpansion(e)}},{default:()=>[N(va,{name:"regular angle-right"})]})},sortable:!1,resizable:!1}};function Gs({row:e,column:t,$index:a}){const l=t.property,o=l&&il(e,l).value;return t&&t.formatter?t.formatter(e,t,o,a):o?.toString?.()||""}function Ps({row:e,treeNode:t,store:a},l=!1){const{ns:o}=a;if(!t)return l?[N("span",{class:o.e("placeholder")})]:null;const n=[],i=function(d){d.stopPropagation(),!t.loading&&a.loadOrToggle(e)};if(t.indent&&n.push(N("span",{class:o.e("indent"),style:{"padding-left":`${t.indent}px`}})),Ie(t.expanded)&&!t.noLazyChildren){const d=[o.e("expand-icon"),t.expanded?o.em("expand-icon","expanded"):""];let r="regular angle-right";t.loading&&(r="regular spinner"),n.push(N("div",{class:d,onClick:i},{default:()=>[N(va,{name:r,...t.loading&&{spin:!0}})]}))}else n.push(N("span",{class:o.e("placeholder")}));return n}function Xa(e,t){return e.reduce((a,l)=>(a[l]=l,a),t)}function Ms(e,t){const a=ne();return{registerComplexWatchers:()=>{const n=["fixed"],i={realWidth:"width",realMinWidth:"minWidth"},d=Xa(n,i);Object.keys(d).forEach(r=>{const s=i[r];at(t,s)&&re(()=>t[s],c=>{let u=c;s==="width"&&r==="realWidth"&&(u=wa(c)),s==="minWidth"&&r==="realMinWidth"&&(u=Tl(c)),a.columnConfig.value[s]=u,a.columnConfig.value[r]=u;const p=s==="fixed";e.value.store.scheduleLayout(p)})})},registerNormalWatchers:()=>{const n=["label","filters","filterMultiple","filteredValue","sortable","index","formatter","className","labelClassName","filterClassName","showOverflowTooltip","tooltipFormatter"],i={property:"prop",align:"realAlign",headerAlign:"realHeaderAlign"},d=Xa(n,i);Object.keys(d).forEach(r=>{const s=i[r];at(t,s)&&re(()=>t[s],c=>{a.columnConfig.value[r]=c})})}}}function $s(e,t){let a=t.cellIndex;return a===void 0&&typeof e.getColumnIndex=="function"&&(a=e.getColumnIndex()),a===void 0&&(a=e.no??0),a}function js(e,t){const a=String(t??""),l=e.find(o=>String(o.value)===a);return l?.title??l?.label??a}function Ws(e,t,a,l){const o=a?.options||[],n=a,i=n?.getEditing,d=n?.toggle,r=n?.setEditing,s=e.property,c=t.row,u=t.$index,p=s?c[s]:void 0,f=i?.(c,s,u)??!1,m=js(o,p),b=e.inputLabel,y=n?.label??b??void 0,O=e.emptyActionText,x=n?.emptyActionText??O??"",g=p==null||typeof p=="string"&&p.trim()===""?x:m;if(i&&d&&r){const h=$s(e,t),S=n?.expandColspan,w=e.expandColspan,v=S??(w?Number(w):void 0),A=n?.expandDirection,V=e.expandDirection,I=A??(V==="left"||V==="right"?V:void 0),$=`${s}-${h}`;let z,J;if(f){const k=n?.expandedWidth;k?z=k:z=Fa(s,h,$,v,I);const P=n?.leftOffset;P?J=P:J=Oa(h,$,I,v)}const j=k=>{const P=s?c[s]:void 0;s&&(c[s]=k),l?.emit&&e&&l.emit("cell-edit-change",c,e,k,P)},K=()=>{l?.emit&&e&&l.emit("cell-edit-close",c,e),r(null)},q=N(ul,{class:"gui-table-cell-select w-full px-xs",modelValue:p,label:y,automaticDropdown:!0,options:o,"onUpdate:modelValue":j,onBlur:K,onKeydown:k=>{k.key==="Enter"&&K()},onVnodeMounted:k=>{Ee(()=>{const X=k.component?.proxy;if(X&&typeof X.focus=="function")X.focus();else if(k.el){const Q=k.el,Z=Q.querySelector("input")||Q.querySelector("select")||Q;Z&&typeof Z.focus=="function"&&Z.focus()}})}}),L=N("div",{class:"gui-table-cell-select-read w-full h-full flex items-center px-xs",role:"button",tabIndex:0,onClick:k=>{rt(k),d(c,s,u),l?.emit&&e&&l.emit("cell-edit-open",c,e)},onKeydown:k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),rt(k),d(c,s,u),l?.emit&&e&&l.emit("cell-edit-open",c,e))}},g),E={},R="gui-table-cell-edit-wrapper absolute top-0 left-0 h-full w-full flex items-center justify-center transition-all duration-200 ease-in hover:bg-everBlue-100 hover:bg-opacity-30";return f&&(E.zIndex="10",J!==void 0&&(E.left=`-${J}px`),z!==void 0&&(E.width=`${z}px`)),N("div",{class:R,style:Object.keys(E).length>0?E:void 0,onVnodeMounted:k=>{k.el&&Ke(k.el,f)},onVnodeUpdated:k=>{k.el&&Ke(k.el,f)}},[N(ga,{name:"gui-table-cell-edit",mode:"out-in"},{default:()=>f?q:L})])}return N("select",{class:"gui-table-cell-select",value:p,onChange:h=>{const w=h.target.value;s&&(c[s]=w)}},o.map(h=>N("option",{value:h.value,key:h.value},h.title??h.label??String(h.value))))}const ut=T(null);function Bs(e,t){let a=t.cellIndex;return a===void 0&&typeof e.getColumnIndex=="function"&&(a=e.getColumnIndex()),a===void 0&&(a=e.no??0),a}function Hs(e,t){if(!e.isEditing)return{width:void 0,leftOffset:void 0};let a;e.expandedWidthOption?a=typeof e.expandedWidthOption=="function"?e.expandedWidthOption(e.row,e.prop,e.idx):e.expandedWidthOption:a=Fa(e.prop,e.colIndex,t,e.expandColspan,e.expandDirection);let l;return e.leftOffsetOption?l=typeof e.leftOffsetOption=="function"?e.leftOffsetOption(e.row,e.prop,e.idx):e.leftOffsetOption:l=Oa(e.colIndex,t,e.expandDirection,e.expandColspan),{width:a,leftOffset:l}}function qs(e,t,a){const{label:l,displayValue:o,placeholder:n,isValidationError:i,messageError:d,rows:r,formatter:s,parser:c}=e,u=e.table,p=e.column,f=m=>{const b=e.prop?e.row[e.prop]:void 0;e.prop&&(e.row[e.prop]=m),u?.emit&&p&&u.emit("cell-edit-change",e.row,p,m,b),e.validation&&e.validation.validate(m,e.row,e.prop,"change",e.idx).then(y=>{u?.emit&&p&&u.emit("cell-edit-validate",e.row,p,{valid:y.valid,message:y.message})})};return N("div",{class:`${t} gui-table-cell-input-textarea-wrapper`},[l?N("label",{class:"gui-table-cell-input-label"},l):null,N("textarea",{class:`gui-table-cell-input-textarea ${i?"gui-table-cell-input-textarea--error":""}`,rows:r,value:o,placeholder:n,"aria-label":l||n||"Textarea input","aria-invalid":i,onInput:m=>{let y=m.target.value;if(s&&(y=s(y)),c){const O=c(y);f(typeof O=="number"?String(O):O)}else f(y)},onBlur:a,onKeydown:m=>{m.key==="Enter"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),a())},onVnodeMounted:m=>{const b=m.el;b&&typeof b.focus=="function"&&b.focus()}}),d?N("div",{class:"gui-table-cell-input-error"},d):null].filter(Boolean))}function Ks(e,t,a){const{label:l,displayValue:o,placeholder:n,type:i,isValidationError:d,messageError:r,formatter:s,parser:c}=e,u=e.table,p=e.column,f=m=>{const b=e.prop?e.row[e.prop]:void 0;e.prop&&(e.row[e.prop]=m),u?.emit&&p&&u.emit("cell-edit-change",e.row,p,m,b),e.validation&&e.validation.validate(m,e.row,e.prop,"change",e.idx).then(y=>{u?.emit&&p&&u.emit("cell-edit-validate",e.row,p,{valid:y.valid,message:y.message})})};return N("div",{class:t},[N(Ca,{label:l,modelValue:o,placeholder:n,type:i==="textarea"?"text":i,formatter:s,parser:c,messageError:r,class:`w-full ${d?"gui-table-cell-input--error":""}`,"aria-invalid":d,"onUpdate:modelValue":m=>f(m),onBlur:a,onKeydown:m=>{m.key==="Enter"&&a()},onVnodeMounted:m=>{if(m.el){const b=m.el,y=b.tagName==="INPUT"?b:b.querySelector("input");y&&typeof y.focus=="function"&&y.focus()}}})])}function Us(e){const{displayValue:t,emptyActionText:a,isEmpty:l,isValidationError:o,validationMessage:n,isEditing:i}=e,d=e.table,r=e.column;return N("div",{class:`w-full h-full flex items-center justify-center cursor-pointer px-xs ${o?"gui-table-cell-input-read--error":""}`,role:"button",tabIndex:0,onClick:c=>{rt(c),e.toggle(e.row,e.prop,e.idx),d?.emit&&r&&d.emit("cell-edit-open",e.row,r)},onKeydown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),rt(c),e.toggle(e.row,e.prop,e.idx),d?.emit&&r&&d.emit("cell-edit-open",e.row,r))}},[N("div",{class:"flex flex-col items-center w-full"},[l&&a?N("span",{class:`font-medium text-3 line-clamp-2 text-center px-xs ${o?"text-error-def":"text-gray-500"}`},a):N("span",{class:`font-medium text-3 line-clamp-2 text-center px-xs ${o?"text-error-def":"text-primary-txt"}`},t),o&&n&&!i?N("span",{class:"text-error-def text-2 mt-xxs text-center px-xs"},n):null].filter(Boolean))])}function Ys(e,t,a){let l=e.isEditing?`${t} gui-table-cell-input-wrapper gui-table-cell-input-editing hover:bg-everBlue-100 hover:bg-opacity-30`:`${t} gui-table-cell-input-wrapper gui-table-cell-input-reading hover:bg-everBlue-100 hover:bg-opacity-30`;if(e.isValidationError&&(l=`${l} gui-table-cell-input-wrapper--error`),e.isEditing&&a){if(typeof a=="string")l=`${l} ${a}`;else if(typeof a=="object"){const o=Object.entries(a).filter(([,n])=>n).map(([n])=>n);l=`${l} ${o.join(" ")}`}}return l}function Js(e,t,a,l){const o={};return e.isEditing&&a!==void 0&&(o.left=`-${a}px`),e.isEditing&&(o.zIndex="10"),e.isEditing&&t!==void 0&&(o.width=`${t}px`),l&&Object.assign(o,l),o}function Xs(e,t,a,l){const o=a,n=e.property,i=t.row,d=t.$index,r=Bs(e,t),s=n?i[n]:void 0,c=s!=null?String(s):"",u=e.emptyActionText;let p,f,m;if(o&&typeof o.getEditing=="function"&&typeof o.toggle=="function"&&typeof o.setEditing=="function")p=o.getEditing,f=o.toggle,m=o.setEditing;else{const ge=(xe,Re,Ve)=>`${Ve??-1}-${Re}`;p=(xe,Re,Ve)=>ut.value===ge(xe,Re,Ve),f=(xe,Re,Ve)=>{const ct=ge(xe,Re,Ve);ut.value=ut.value===ct?null:ct},m=xe=>{ut.value=xe}}const b=o?.validation,y=b&&b.rules&&b.rules.length>0,O=y?b.getValidationState(i,n,d):null,x=O?.state==="error",C=O?.message||"",g=p(i,n,d),h=e.inputLabel,S=o?.label??h??"",w=o?.placeholder??"",v=o?.emptyActionText??u??w??"Click to add",A=o?.type??"text",V=o?.rows,I=o?.formatter,$=o?.parser,z=o?.messageError,J=x?C:z,j=!c||c.trim()==="",K=o?.expandColspan,q=e.expandColspan,L=K??(q?Number(q):void 0),E=o?.expandDirection,R=e.expandDirection,P={prop:n,row:i,idx:d,colIndex:r,displayValue:c,isEditing:g,label:S,placeholder:w,emptyActionText:v,type:A,rows:V,formatter:I,parser:$,messageError:J,isEmpty:j,expandColspan:L,expandDirection:E??(R==="left"||R==="right"?R:void 0),validation:b,isValidationError:x,validationMessage:C,expandedWidthOption:o?.expandedWidth,leftOffsetOption:o?.leftOffset,editingClasses:o?.editingClasses,editingStyles:o?.editingStyles,setEditing:m,toggle:f,table:l,column:e},X=`${n}-${r}`,{width:Q,leftOffset:Z}=Hs(P,X),fe=g&&P.editingClasses?typeof P.editingClasses=="function"?P.editingClasses(i,n,d):P.editingClasses:void 0,we=g&&P.editingStyles?typeof P.editingStyles=="function"?P.editingStyles(i,n,d):P.editingStyles:void 0,ue=async()=>{if(y&&b){const ge=n?i[n]:void 0,xe=await b.validate(ge,i,n,"blur",d);l?.emit&&e&&l.emit("cell-edit-validate",i,e,{valid:xe.valid,message:xe.message})}l?.emit&&e&&l.emit("cell-edit-close",i,e),m(null)},Ne=g&&V!==void 0&&V>0?"absolute top-0 left-0 h-full w-full flex items-start justify-center transition-all duration-200 ease-in":"absolute top-0 left-0 h-full w-full flex items-center justify-center transition-all duration-200 ease-in",ke=Q!==void 0?"w-full px-xs":"w-11/12 px-xs",qt=V!==void 0&&V>0?qs(P,ke,ue):Ks(P,ke,ue),Kt=Us(P),Ut=Ys(P,Ne,fe),dt=Js(P,Q,Z,we);return N("div",{class:Ut,style:Object.keys(dt).length>0?dt:void 0,onVnodeMounted:ge=>{ge.el&&Ke(ge.el,g)},onVnodeUpdated:ge=>{ge.el&&Ke(ge.el,g)}},[N(ga,{name:"gui-table-cell-edit",mode:"out-in"},{default:()=>g?qt:Kt})])}const Qs={select:Ws,input:Xs};function Zs(e,t,a,l,o){const n=Qs[e];return n?n(t,a,l,o):null}function _s(e,t,a){const l=ne(),o=T(""),n=T(!1),i=T(),d=T(),r=be("table");_e(()=>{i.value=e.align?`is-${e.align}`:null,i.value}),_e(()=>{d.value=e.headerAlign?`is-${e.headerAlign}`:i.value,d.value});const s=D(()=>{let g=l.vnode.vParent||l.parent;for(;g&&!g.tableId&&!g.columnId;)g=g.vnode.vParent||g.parent;return g}),c=D(()=>{const{store:g}=l.parent;if(!g)return!1;const{treeData:h}=g.states,S=h.value;return S&&Object.keys(S).length>0}),u=T(wa(e.width)),p=T(Tl(e.minWidth)),f=g=>(u.value&&(g.width=u.value),p.value&&(g.minWidth=p.value),!u.value&&p.value&&(g.width=void 0),g.minWidth||(g.minWidth=80),g.realWidth=Number(Le(g.width)?g.minWidth:g.width),g),m=g=>{const h=g.type,S=Is[h]||{};Object.keys(S).forEach(v=>{const A=S[v];v!=="className"&&!Le(A)&&(g[v]=A)});const w=zs(h);if(w){const v=`${M(r.namespace)}-${w}`;g.className=g.className?`${g.className} ${v}`:v}return g},b=g=>{de(g)?g.forEach(S=>h(S)):h(g);function h(S){S?.type?.name==="GTableColumn"&&(S.vParent=l)}};return{columnId:o,realAlign:i,isSubColumn:n,realHeaderAlign:d,columnOrTableParent:s,setColumnWidth:f,setColumnForcedProps:m,setColumnRenders:g=>{e.renderHeader||g.type!=="selection"&&(g.renderHeader=S=>(l.columnConfig.value.label,Te(t,"header",S,()=>[g.label]))),t["filter-icon"]&&(g.renderFilterIcon=S=>Te(t,"filter-icon",S));let h=g.renderCell;return g.type==="expand"?(g.renderCell=S=>N("div",{class:"cell"},[h(S)]),a.value.renderExpanded=S=>t.default?t.default(S):t.default):(h=h||Gs,g.renderCell=S=>{let w=null;if(t.default){const z=t.default(S);w=z.some(J=>J.type!==ro)?z:h(S)}else g.cellType?w=Zs(g.cellType,g,S,g.cellOptions,a.value)??h(S):w=h(S);const{columns:v}=a.value.store.states,A=v.value.findIndex(z=>z.type==="default"),V=c.value&&S.cellIndex===A,I=Ps(S,V),$={class:"cell",style:{}};return g.showOverflowTooltip&&($.class=`${$.class} ${M(r.namespace)}-tooltip`,$.style={width:`${(S.column.realWidth||Number(S.column.width))-1}px`}),b(w),N("div",$,[I,w])}),g},getPropsData:(...g)=>g.reduce((h,S)=>(de(S)&&S.forEach(w=>{const v=e[w];w==="cellOptions"&&v&&typeof v=="object"?h[w]=Lt(v):h[w]=v}),h),{}),getColumnElIndex:(g,h)=>Array.prototype.indexOf.call(g,h),updateColumnOrder:()=>{a.value.store.commit("updateColumnOrder",l.columnConfig.value)}}}const er={type:{type:String,default:"default"},label:String,className:String,labelClassName:String,property:String,prop:String,width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},renderHeader:Function,sortable:{type:[Boolean,String],default:!1},sortMethod:Function,sortBy:[String,Function,Array],resizable:{type:Boolean,default:!0},columnKey:String,align:String,headerAlign:String,showOverflowTooltip:{type:[Boolean,Object],default:void 0},tooltipFormatter:Function,fixed:[Boolean,String],formatter:Function,selectable:Function,reserveSelection:Boolean,filterMethod:Function,filteredValue:Array,filters:Array,filterPlacement:String,filterMultiple:{type:Boolean,default:!0},filterClassName:String,index:[Number,Function],sortOrders:{type:Array,default:()=>["ascending","descending",null],validator:e=>e.every(t=>["ascending","descending",null].includes(t))},cellType:String,cellOptions:Object,emptyActionText:String,inputLabel:String,expandColspan:[Number,String],expandDirection:{type:String,validator:e=>e==null||e===""||["left","right"].includes(e)}};let tr=1;const Bl=Ae({name:"GTableColumn",components:{GCheckbox:Me},props:er,setup(e,{slots:t}){const a=ne(),l=T({}),o=D(()=>{let C=a.parent;for(;C&&!C.tableId;)C=C.parent;return C}),{registerNormalWatchers:n,registerComplexWatchers:i}=Ms(o,e),{columnId:d,isSubColumn:r,realHeaderAlign:s,columnOrTableParent:c,setColumnWidth:u,setColumnForcedProps:p,setColumnRenders:f,getPropsData:m,getColumnElIndex:b,realAlign:y,updateColumnOrder:O}=_s(e,t,o),x=c.value;d.value=`${x.tableId||x.columnId}_column_${tr++}`,el(()=>{r.value=o.value!==x;const C=e.type||"default",g=e.sortable===""?!0:e.sortable,h=C==="selection"?!1:Le(e.showOverflowTooltip)?x.props.showOverflowTooltip:e.showOverflowTooltip,S=Le(e.tooltipFormatter)?x.props.tooltipFormatter:e.tooltipFormatter,w={...Vs[C],id:d.value,type:C,property:e.prop||e.property,align:y,headerAlign:s,showOverflowTooltip:h,tooltipFormatter:S,filterable:e.filters||e.filterMethod,filteredValue:[],filterPlacement:"",filterClassName:"",isColumnGroup:!1,isSubColumn:!1,filterOpened:!1,sortable:g,index:e.index,rawColumnKey:a.vnode.key};let z=m(["columnKey","label","className","labelClassName","type","renderHeader","formatter","fixed","resizable"],["sortMethod","sortBy","sortOrders"],["selectable","reserveSelection"],["filterMethod","filters","filterMultiple","filterOpened","filteredValue","filterPlacement","filterClassName"],["cellType","cellOptions","emptyActionText","inputLabel"]);z=bn(w,z),z=hn(f,u,p)(z),l.value=z,n(),i()}),Ue(()=>{const C=c.value,g=r.value?C.vnode.el.children:C.refs.hiddenColumns?.children,h=()=>b(g||[],a.vnode.el);l.value.getColumnIndex=h,h()>-1&&o.value.store.commit("insertColumn",l.value,r.value?C.columnConfig.value:null,O)}),fa(()=>{const C=l.value.getColumnIndex;(C?C():-1)>-1&&o.value.store.commit("removeColumn",l.value,r.value?x.columnConfig.value:null,O)}),a.columnId=d.value,a.columnConfig=l},render(){try{const e=this.$slots.default?.({row:{},column:{},$index:-1}),t=[];if(de(e))for(const l of e)l.type?.name==="GTableColumn"||l.shapeFlag&2?t.push(l):l.type===lt&&de(l.children)&&l.children.forEach(o=>{o?.patchFlag!==1024&&!ve(o?.children)&&t.push(o)});return N("div",t)}catch{return N("div",[])}}});function Hl(e,t={}){const a=T(null),{useRowIndex:l=!0,rowKey:o}=t,n=(s,c,u)=>o&&s&&typeof s=="object"&&o in s?`${s[o]}-${c}`:`${u??-1}-${c}`;return{getEditing:(s,c,u)=>a.value===n(s,c,u),toggle:(s,c,u)=>{const p=n(s,c,u);a.value=a.value===p?null:p},setEditing:s=>{a.value=s}}}function tt(e,t){const{options:a,label:l,useRowIndex:o,rowKey:n,expandColspan:i,expandDirection:d}=t,{getEditing:r,toggle:s,setEditing:c}=Hl(e,{useRowIndex:o,rowKey:n});return{cellOptions:{options:a,label:l,getEditing:r,toggle:s,setEditing:c,expandColspan:i,expandDirection:d}}}function ar(e={}){const{rules:t=[],onValidationFailed:a,onValidationSuccess:l}=e,o=tl(new Map),n=(u,p,f)=>{if(u&&typeof u=="object"){const m=u;if("id"in m)return`${m.id}-${p}`;if("_id"in m)return`${m._id}-${p}`}return`${f??-1}-${p}`},i=u=>u?t.filter(p=>p.trigger?Array.isArray(p.trigger)?p.trigger.includes(u):p.trigger===u:!0).map(({trigger:p,...f})=>f):t.map(({trigger:p,...f})=>f);return{validate:async(u,p,f,m,b)=>{const y=n(p,f,b),O=i(m);if(O.length===0)return o.set(y,{state:"success",message:""}),{valid:!0,errors:null,message:""};o.set(y,{state:"validating",message:""});const x=new jo({[f]:O});try{return await x.validate({[f]:u},{firstFields:!0}),o.set(y,{state:"success",message:""}),l?.(p,f,b),{valid:!0,errors:null,message:""}}catch(C){const{errors:g}=C,h=g?.[0]?.message??`${f} es inválido`;return o.set(y,{state:"error",message:h}),a?.(g,p,f,b),{valid:!1,errors:g,message:h}}},getValidationState:(u,p,f)=>{const m=n(u,p,f);return o.get(m)??{state:"",message:""}},clearValidation:(u,p,f)=>{const m=n(u,p,f);o.delete(m)},clearAllValidation:()=>{o.clear()},rules:t}}function me(e,t){const{label:a,placeholder:l,emptyActionText:o,type:n,rows:i,useRowIndex:d,rowKey:r,formatter:s,parser:c,messageError:u,expandedWidth:p,leftOffset:f,editingClasses:m,editingStyles:b,expandColspan:y,expandDirection:O,rules:x,onValidationFailed:C,onValidationSuccess:g}=t,{getEditing:h,toggle:S,setEditing:w}=Hl(e,{useRowIndex:d,rowKey:r});let v;return x&&x.length>0&&(v=ar({rules:x,onValidationFailed:C,onValidationSuccess:g})),{cellOptions:{getEditing:h,toggle:S,setEditing:w,label:a,placeholder:l,emptyActionText:o,type:n,rows:i,formatter:s,parser:c,messageError:u,expandedWidth:p,leftOffset:f,editingClasses:m,editingStyles:b,expandColspan:y,expandDirection:O,validation:v,rules:x},validation:v}}const lr='input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',ql=Ae({__name:"GCellEdit",props:{modelValue:{type:Boolean,default:!1},row:{},column:{default:()=>({})},index:{default:void 0},prop:{default:""},expandColspan:{default:void 0},expandDirection:{default:void 0},expandedWidth:{default:void 0},leftOffset:{default:void 0}},emits:["update:modelValue","toggle","close"],setup(e,{expose:t,emit:a}){const l=ce(Ce),o=e,n=a,i=T(),d=T(),r=v=>{if(!v)return;const A=v.querySelector(lr);A&&typeof A.focus=="function"&&A.focus()},s=D({get:()=>o.modelValue,set:v=>n("update:modelValue",v)}),c=T(void 0),u=T(void 0),p=D(()=>{const v=o.expandDirection;return v==="left"||v==="right"?v:void 0}),f=()=>{if(o.expandedWidth!==void 0)c.value=o.expandedWidth;else{const v=o.column.no??o.column.cellIndex,A=`${o.prop}-${o.index??0}-${v??0}`;v!==void 0&&(c.value=Fa(o.prop,v,A,o.expandColspan,p.value))}if(o.leftOffset!==void 0)u.value=o.leftOffset;else{const v=o.column.no??o.column.cellIndex,A=`${o.prop}-${o.index??0}-${v??0}`;v!==void 0&&(u.value=Oa(v,A,p.value,o.expandColspan))}},m=()=>{l?.emit&&o.column&&l.emit("cell-edit-close",o.row,o.column),s.value=!1,n("close")};function b(v){if(!s.value)return;const A=v.target;i.value&&!i.value.contains(A)&&m()}function y(){Ee(()=>{document.addEventListener("mousedown",b,!0)})}function O(){document.removeEventListener("mousedown",b,!0)}re(s,v=>{v?(f(),i.value&&Ke(i.value,!0),y(),Ee(()=>{requestAnimationFrame(()=>r(d.value))})):(O(),i.value&&Ke(i.value,!1))},{immediate:!0}),jt(()=>{O()});const x=D(()=>{const v="absolute top-0 left-0 h-full w-full flex items-center justify-center transition-all duration-200 ease-in";return s.value?`${v} gui-table-cell-edit-wrapper hover:bg-everBlue-100 hover:bg-opacity-30 z-10`:`${v} gui-table-cell-edit-wrapper hover:bg-everBlue-100 hover:bg-opacity-30`}),C=D(()=>"w-full h-full flex items-center justify-center"),g=D(()=>{if(!s.value)return{};const v={zIndex:"10"};return u.value!==void 0&&(v.left=`-${u.value}px`),c.value!==void 0&&(v.width=`${c.value}px`),v}),h=v=>{v&&rt(v),s.value=!s.value,n("toggle",s.value),s.value&&l?.emit&&o.column&&l.emit("cell-edit-open",o.row,o.column)},S=v=>{s.value||h(v)},w=v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),s.value||h(v))};return t({toggleEdit:h,closeEdit:m}),(v,A)=>(Y(),_("div",{class:H(x.value),style:$e(g.value),ref_key:"cellRef",ref:i},[Se(ga,{name:"gui-table-cell-edit",mode:"out-in"},{default:De(()=>[s.value?(Y(),_("div",{key:0,ref_key:"editWrapperRef",ref:d,class:H(C.value)},[Te(v.$slots,"edit",{close:m})],2)):(Y(),_("button",{key:1,type:"button",class:"w-full h-full flex items-center px-xs cursor-pointer border-0 bg-transparent text-left font-inherit text-primary-txt",onClick:S,onKeydown:w},[Te(v.$slots,"view",{toggle:h})],32))]),_:3})],6))}});ql.__docgenInfo={exportName:"default",displayName:"GCellEdit",description:"",tags:{},expose:[{name:"toggleEdit"},{name:"closeEdit"}],props:[{name:"modelValue",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"row",required:!0,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]}},{name:"column",required:!1,type:{name:"Record",elements:[{name:"string"},{name:"unknown"}]},defaultValue:{func:!1,value:"() => ({})"}},{name:"index",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"prop",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"expandColspan",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"expandDirection",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]},defaultValue:{func:!1,value:"undefined"}},{name:"expandedWidth",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"leftOffset",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}},{name:"toggle",type:{names:["boolean"]}},{name:"close"}],slots:[{name:"edit",scoped:!0,bindings:[{name:"close",title:"binding"}]},{name:"view",scoped:!0,bindings:[{name:"toggle",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/table/src/cell-edit/GCellEdit.vue"]};const ee=Io(ks,{TableColumn:Bl}),ae=Go(Bl),or="0.2.0",Xt={"@flash-global66/g-checkbox":"^0.2.1","@flash-global66/g-icon-font":"^0.0.8","@flash-global66/g-input":"^0.3.0","@flash-global66/g-scrollbar":"^0.1.0","@flash-global66/g-select":"^0.3.0","@flash-global66/g-tooltip":"^0.1.0","async-validator":"^4.2.5","element-plus":"^2.9.0","lodash-unified":"^1.0.3",vue:"^3.2.0"},Qr={title:"Data/Table",component:ee,parameters:{docs:{description:{component:`\`GTable\` - Componente de tabla altamente configurable y extensible para mostrar datos tabulares de manera eficiente y atractiva.

> La versión de este componente es \`${or}\`.

**Características principales:**

- Filas expandibles y colapsables.
- Selección de filas con soporte para selección múltiple.
- Ordenamiento y filtrado de columnas.
- Columnas fijas (izquierda/derecha) y ancladas.
- Celdas editables: \`cell-type="input"\` / \`cell-type="select"\` con composables, o \`GCellEdit\` para UI personalizada (ver sección **Celdas editables** más abajo).
- Validación de celdas compatible con \`async-validator\` y \`GForm\`.
- Tooltips en celdas y formateador personalizado.
- Soporte para datos en árbol y carga perezosa.

**Instalación**

\`\`\`bash
yarn add @flash-global66/g-table
\`\`\`

**Dependencias**

Este componente requiere:

${Object.entries(Xt||{}).map(([e,t])=>`> - ${e}: ${t}`).join(`
`)||"> No tiene dependencias."}

**Importación básica**

\`\`\`typescript
import { GTable, GTableColumn } from '@flash-global66/g-table'
import '@flash-global66/g-table/styles.scss'
\`\`\`

**Ejemplo de uso**

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
  { date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' }
]
<\/script>
\`\`\`

**Instalar dependencias del componente**

\`\`\`bash
# Dependencias @flash-global66
yarn add ${Pa(Xt)}

# Dependencias externas
yarn add ${Pa(Xt,!0)}
\`\`\`

---

## Celdas editables

Para implementar celdas editables (input, select o UI personalizada con \`GCellEdit\`), expansión del overlay, eventos y validación, consulte la guía dedicada:

👉 **[Guía: Celdas editables en Table](/docs/concept-guide-celdas-editables-en-table--docs)**

En esta documentación de Table encontrará las historias de ejemplo: **Celda tipo select**, **Celda tipo input**, **Celda personalizada con GCellEdit**, **Eventos de celdas editables** y las de expansión.
`}}},argTypes:{data:{description:"Datos a mostrar en la tabla",control:"object",table:{category:"Datos y Contenido",type:{summary:"Array<Object>"},defaultValue:{summary:"[]"}}},emptyText:{name:"empty-text",description:"Texto a mostrar cuando no hay datos",control:"text",table:{category:"Datos y Contenido",type:{summary:"string"},defaultValue:{summary:"No Data"}}},sumText:{name:"sum-text",description:"Texto para la fila de resumen",control:"text",table:{category:"Datos y Contenido",type:{summary:"string"},defaultValue:{summary:"Total"}}},load:{name:"load",description:"Función para carga perezosa",control:!1,table:{category:"Datos y Contenido",type:{summary:"Function"},defaultValue:{summary:""}}},treeProps:{name:"tree-props",description:"Propiedades para filas anidadas",control:"object",table:{category:"Datos y Contenido",type:{summary:"Object"},defaultValue:{summary:"{}"}}},expandRowKeys:{name:"expand-row-keys",description:"Claves de filas expandidas por defecto",control:"object",table:{category:"Datos y Contenido",type:{summary:"Array<string | number>"},defaultValue:{summary:"[]"}}},rowKey:{name:"row-key",description:"Clave de datos de fila, utilizada para optimizar la representación. Obligatoria if reserve-selection está true o se muestran los datos del árbol. Cuando su tipo es cadena, se admite el acceso multinivel (p. ej., user.info.id), pero no se admite user.info[0].id; en ese caso, se debe usar la función.",control:"text",table:{category:"Datos y Contenido",type:{summary:"string | Function"},defaultValue:{summary:""}}},height:{description:"Altura de la tabla",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"auto"}}},maxHeight:{name:"max-height",description:"Altura máxima de la tabla",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"auto"}}},stripe:{description:"Filas con fondo alternado",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"false"}}},border:{description:"Mostrar bordes",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"false"}}},fit:{description:"Ajustar columnas al contenedor",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHeader:{name:"show-header",description:"Mostrar encabezado",control:"boolean",table:{category:"Apariencia Visual",type:{summary:"boolean"},defaultValue:{summary:"true"}}},rowClassName:{name:"row-class-name",description:"Clase CSS para filas",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},rowStyle:{name:"row-style",description:"Estilo CSS para filas",control:"object",table:{category:"Apariencia Visual",type:{summary:"Object"},defaultValue:{summary:"{}"}}},cellClassName:{name:"cell-class-name",description:"Clase CSS para celdas",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},headerCellClassName:{name:"header-cell-class-name",description:"Clase CSS para celdas de encabezado",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},headerCellStyle:{name:"header-cell-style",description:"Estilo CSS para celdas de encabezado",control:"object",table:{category:"Apariencia Visual",type:{summary:"Object"},defaultValue:{summary:"{}"}}},headerRowClassName:{name:"header-row-class-name",description:"Clase CSS para filas de encabezado",control:"text",table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:""}}},headerRowStyle:{name:"header-row-style",description:"Estilo CSS para filas de encabezado",control:"object",table:{category:"Apariencia Visual",type:{summary:"Object"},defaultValue:{summary:"{}"}}},indent:{description:"Indentación para filas anidadas",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"16"}}},tableLayout:{name:"table-layout",description:"Diseño de la tabla (fixed/auto)",control:"select",options:["fixed","auto"],table:{category:"Apariencia Visual",type:{summary:"string"},defaultValue:{summary:"fixed"}}},scrollbarTabindex:{name:"scrollbar-tabindex",description:"Tabindex para barra de desplazamiento",control:"number",table:{category:"Apariencia Visual",type:{summary:"number"},defaultValue:{summary:"0"}}},highlightCurrentRow:{name:"highlight-current-row",description:"Resaltar fila actual",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},currentRowKey:{name:"current-row-key",description:"Clave de la fila actual",control:"text",table:{category:"Comportamiento y Funcionalidad",type:{summary:"string"},defaultValue:{summary:""}}},defaultExpandAll:{name:"default-expand-all",description:'Especifica si todas las filas se expanden por defecto, solo funciona cuando la tabla tiene una columna type="expand" o contiene datos de estructura de árbol',control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultSort:{name:"default-sort",description:"Establece la columna y orden por defecto. la propiedad prop es utilizada para establecer la columna de ordenamiento por defecto, la propiedad order es utilizada para definir el tipo de orden por defecto",control:"object",table:{category:"Comportamiento y Funcionalidad",type:{summary:"Object"},defaultValue:{summary:"{}"}}},showSummary:{name:"show-summary",description:"Mostrar fila de resumen",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},selectOnIndeterminate:{name:"select-on-indeterminate",description:"Seleccionar en estado indeterminado",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},lazy:{description:"Usar carga perezosa",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},scrollbarAlwaysOn:{name:"scrollbar-always-on",description:"Barra de desplazamiento siempre visible",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},showOverflowTooltip:{name:"show-overflow-tooltip",description:"Mostrar tooltip en desbordamiento",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},flexible:{name:"flexible",description:"Tabla adaptable al contenedor",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},allowDragLastColumn:{name:"allow-drag-last-column",description:"Permitir arrastrar última columna",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},preserveExpandedContent:{name:"preserve-expanded-content",description:"Preservar contenido expandido",control:"boolean",table:{category:"Comportamiento y Funcionalidad",type:{summary:"boolean"},defaultValue:{summary:"false"}}},tooltipOptions:{name:"tooltip-options",description:"Opciones para tooltips",control:"object",table:{category:"Herramientas Avanzadas",type:{summary:"Object"},defaultValue:{summary:"{}"}}},appendFilterPanelTo:{name:"append-filter-panel-to",description:"Ubicación para renderizar panel de filtro",control:"text",table:{category:"Herramientas Avanzadas",type:{summary:"string"},defaultValue:{summary:""}}},tooltipFormatter:{name:"tooltip-formatter",description:"Formateador de tooltips",control:!1,table:{category:"Herramientas Avanzadas",type:{summary:"Function"},defaultValue:{summary:""}}},select:{description:"Evento de selección de fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"<T = any>(selection: T[], row: T) => void"}}},selectAll:{name:"select-all",description:"Evento de selección de todas las filas",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(selection: any[]) => void"}}},selectionChange:{name:"selection-change",description:"Evento de cambio de selección",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(newSelection: any[]) => void"}}},cellMouseEnter:{name:"cell-mouse-enter",description:"Evento de entrada del mouse en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void"}}},cellMouseLeave:{name:"cell-mouse-leave",description:"Evento de salida del mouse de una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: Event) => void"}}},cellClick:{name:"cell-click",description:"Evento de clic en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void"}}},cellDbClick:{name:"cell-bd-click",description:"Evento de doble clic en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void"}}},cellContextMenu:{name:"cell-context-menu",description:"Evento de click derecho en una celda",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, cell: HTMLTableCellElement, event: MouseEvent) => void"}}},rowClick:{name:"row-click",description:"Evento de clic en una fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, event: Event) => void"}}},rowDbClick:{name:"row-bd-click",description:"Evento de doble clic en una fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, event: Event) => void"}}},rowContextMenu:{name:"row-context-menu",description:"Evento de click derecho en una fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, event: Event) => void"}}},headerClick:{name:"header-click",description:"Evento de clic en el encabezado",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(column: any, event: MouseEvent) => void"}}},headerContextMenu:{name:"header-context-menu",description:"Evento de click derecho en el encabezado",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(column: any, event: MouseEvent) => void"}}},sortChange:{name:"sort-change",description:"Evento de cambio de ordenamiento",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(data: {column: any, prop: string, order: any }) => void"}}},currentChange:{name:"current-change",description:"Evento de cambio de fila actual",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(currentRow: any, oldCurrentRow: any) => void"}}},headerDragend:{name:"header-dragend",description:"Evento de finalización de arrastre del encabezado",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(newWidth: number, oldWidth: number, column: any, event: MouseEvent) => void"}}},expandChange:{name:"expand-change",description:"Evento de cambio de expansión de fila",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void"}}},scroll:{description:"Evento de desplazamiento de la tabla",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"({ scrollLeft: number, scrollTop: number }) => void"}}},cellEditOpen:{name:"cell-edit-open",description:"Celda editable entra en modo edición (click o foco)",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any) => void"}}},cellEditClose:{name:"cell-edit-close",description:"Celda editable sale de modo edición (blur o Enter)",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any) => void"}}},cellEditChange:{name:"cell-edit-change",description:"Valor de celda editable cambió (input o select)",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, newValue: any, oldValue: any) => void"}}},cellEditValidate:{name:"cell-edit-validate",description:"Validación de celda editable terminó (solo columnas con validación)",control:!1,table:{category:"Eventos",type:{summary:"Function",detail:"(row: any, column: any, result: { valid: boolean, message: string }) => void"}}},default:{name:"default",description:"Slot para contenido personalizado en las celdas",control:!1,table:{category:"Slots",type:{summary:"Slot"},defaultValue:{summary:""}}},append:{name:"append",description:"Slot para insertarse después de la última fila. Es posible que necesite este espacio si desea implementar scroll infinito para la tabla. Este slot se mostrará por encima de la fila de resumen si la hay.",control:!1,table:{category:"Slots",type:{summary:"Slot"},defaultValue:{summary:""}}},empty:{name:"empty",description:"Slot para contenido personalizado cuando no hay datos",control:!1,table:{category:"Slots",type:{summary:"Slot"},defaultValue:{summary:""}}},clearSelection:{description:"Función para limpiar selección",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},getSelectionRows:{description:"Obtener filas seleccionadas",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => any[]"}}},toggleRowSelection:{description:"Alternar selección de una fila",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(row: any, selected?: boolean, ignoreSelectable = true) => void"}}},toggleAllSelection:{description:"Alternar selección de todas las filas",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},toggleRowExpansion:{description:"Alternar expansión de una fila",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(row: any, expanded?: boolean) => void"}}},setCurrentRow:{description:"Establecer fila actual",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(row: any) => void"}}},clearSort:{description:"Limpiar ordenamiento",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},clearFilter:{description:"Limpiar filtros",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},doLayout:{description:"Forzar re-diseño de la tabla",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"() => void"}}},sort:{description:"Ordenar datos de la tabla",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(prop: string, order?: string) => void"}}},scrollTo:{description:"Desplazar la tabla a una posición específica",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(options: number | ScrollToOptions, yCoord?: number) => void"}}},setScrollTop:{name:"set-scroll-top",description:"Establecer posición de desplazamiento vertical",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(scrollTop: number) => void"}}},setScrollLeft:{name:"set-scroll-left",description:"Establecer posición de desplazamiento horizontal",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(scrollLeft: number) => void"}}},columns:{description:"Obtener columnas de la tabla",control:!1,table:{category:"Exposes",type:{summary:"Array",detail:"TableColumnCtx<T>[]"}}},updateKeyChildren:{description:"Actualizar hijos de una clave específica",control:!1,table:{category:"Exposes",type:{summary:"Function",detail:"(key: string, data: T[]) => void"}}},type:{description:"Tipo de columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"selection" | "index" | "expand" | "default"'},defaultValue:{summary:"default"}}},index:{description:"Índice de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"number"},defaultValue:{summary:0}}},label:{description:"Etiqueta de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},columnKey:{name:"column-key",description:"Clave única para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},prop:{description:"Propiedad de los datos para esta columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},width:{description:"Ancho de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string | number"},defaultValue:{summary:""}}},minWidth:{name:"min-width",description:"Ancho mínimo de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string | number"},defaultValue:{summary:""}}},fixed:{description:"Fijar columna a la izquierda o derecha",control:!1,options:["left","right",!1],table:{category:"Propiedades de Columnas",type:{summary:"string | boolean"},defaultValue:{summary:!1}}},renderHeader:{name:"render-header",description:"Función para renderizar el encabezado de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(data: { column: any, $index: number }) => void"},defaultValue:{summary:""}}},sortable:{description:"Habilitar ordenamiento para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!1}}},sortMethod:{name:"sort-method",description:"Método personalizado para ordenar la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(a: any, b: any) => number"},defaultValue:{summary:""}}},sortBy:{name:"sort-by",description:"Propiedad o propiedades para ordenar la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string | string[]"},defaultValue:{summary:""}}},sortOrders:{name:"sort-orders",description:"Ordenes de ordenamiento permitidos",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Array<string>"},defaultValue:{summary:["ascending","descending"]}}},resizable:{description:"Habilitar redimensionamiento de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!0}}},formatter:{description:"Función para formatear el contenido de la celda",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(row: any, column: any, cellValue: any, index: number) => VNode | string"},defaultValue:{summary:""}}},showOverflowTooltipColumn:{name:"show-overflow-tooltip",description:"Mostrar tooltip en desbordamiento de la celda",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!1}}},align:{description:"Alineación del contenido de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"left" | "center" | "right"'},defaultValue:{summary:"left"}}},headerAlign:{name:"header-align",description:"Alineación del encabezado de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"left" | "center" | "right"'},defaultValue:{summary:"left"}}},className:{name:"class-name",description:"Clase CSS para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},labelClassName:{name:"label-class-name",description:"Clase CSS para la etiqueta de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},selectable:{name:"selectable",description:"Función para determinar si una fila es seleccionable",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(row: any, index: number) => boolean"},defaultValue:{summary:""}}},reserveSelection:{name:"reserve-selection",description:"Preservar selección entre cambios de datos",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!1}}},filters:{name:"filters",description:"Filtros para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Array<{ text: string, value: any }>"},defaultValue:{summary:"[]"}}},filterPlacement:{name:"filter-placement",description:"Ubicación del filtro en la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"enum",detail:'"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end"'},defaultValue:{summary:"bottom-start"}}},filterClassName:{name:"filter-class-name",description:"Clase CSS para el filtro de la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"string"},defaultValue:{summary:""}}},filterMultiple:{name:"filter-multiple",description:"Permitir múltiples selecciones en el filtro",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"boolean"},defaultValue:{summary:!0}}},filterMethod:{name:"filter-method",description:"Método para filtrado de datos. Si filter-multiple está activado, este método será llamado varias veces por cada fila, y se mostrará la fila si la llamada devuelve true",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(value: any, row: any, column: any) => void"},defaultValue:{summary:""}}},filteredValue:{name:"filtered-value",description:"El valor del filtro para los datos seleccionados, puede ser útil cuando el encabezado de la tabla es renderizado con render-header",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Array<string>"},defaultValue:{summary:"[]"}}},tooltipFormatterColumn:{name:"tooltip-formatter",description:"Formateador de tooltip para la columna",control:!1,table:{category:"Propiedades de Columnas",type:{summary:"Function",detail:"(data: { row: any, column: any, cellValue: any }) => VNode | string"},defaultValue:{summary:""}}},defaultColumn:{name:"default",description:"Slot para contenido personalizado en las celdas de la columna",control:!1,table:{category:"Slots de Columnas",type:{summary:"Slot"},defaultValue:{summary:""}}},header:{name:"header",description:"Slot para contenido personalizado en el encabezado de la columna",control:!1,table:{category:"Slots de Columnas",type:{summary:"Slot"},defaultValue:{summary:""}}},filterIcon:{name:"filter-icon",description:"Slot para el ícono del filtro de la columna",control:!1,table:{category:"Slots de Columnas",type:{summary:"Slot"},defaultValue:{summary:""}}}},args:{data:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],height:"auto",maxHeight:"auto",stripe:!1,border:!1,fit:!0,emptyText:"No data",rowClassName:"",rowKey:"",rowStyle:{},headerRowClassName:"",headerRowStyle:{},indent:16,tableLayout:"auto",scrollbarTabindex:0,highlightCurrentRow:!1,currentRowKey:"",defaultExpandAll:!1,defaultSort:{},showSummary:!1,selectOnIndeterminate:!1,lazy:!1,scrollbarAlwaysOn:!1,showOverflowTooltip:!1,flexible:!1,allowDragLastColumn:!1,preserveExpandedContent:!1,tooltipOptions:{},appendFilterPanelTo:"",tooltipFormatter:null,highlight:!1,showHeader:!0,sumText:"",treeProps:{},expandRowKeys:void 0,cellClassName:"",headerCellClassName:"",headerCellStyle:{}}},pt={name:"Básico",parameters:{docs:{description:{story:"Tabla básica con columnas definidas por `prop`, `label` y `width`. Los datos se pasan mediante la prop `data`."}}},render:e=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae},setup(){return{args:e}},template:`
      <g-config-provider>
        <g-table v-bind="args" style="width: 100%">
          <g-table-column prop="date" label="Date" width="180" />
          <g-table-column prop="name" label="Name" width="180" />
          <g-table-column prop="address" label="Address" />
        </g-table>
      </g-config-provider>
    `})},mt={name:"Tabla con fondo y borde",parameters:{docs:{description:{story:"Tabla con fondo y borde, con filas alternas de color diferente."}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]}},template:`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" stripe border>
        <g-table-column prop="date" label="Date" width="180" />
        <g-table-column prop="name" label="Name" width="180" />
        <g-table-column prop="address" label="Address" />
      </g-table>
    </g-config-provider>`})},ft={name:"Tabla con estados",parameters:{docs:{description:{story:`Puede destacar el contenido de la tabla para distinguir entre "success, information, warning, danger" y otros estados.

Utilice row-class-name en el-table para agregar clases personalizadas a una fila específica. De esa manera podrá darle diseño con esas clases.`}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-05",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-06",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-07",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-08",name:"Tom",address:"No. 189, Grove St, Los Angeles"}],tableRowClassName:({row:l,rowIndex:o})=>o===1?"!bg-error-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":o===3?"!bg-success-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":o===5?"!bg-warning-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":o===7?"!bg-info-bg group !bg-opacity-50 opacity-75 hover:!opacity-100":"",cellClassName:({row:l,column:o,rowIndex:n})=>n===1?"group-hover:!bg-error-bg":n===3?"group-hover:!bg-success-bg":n===5?"group-hover:!bg-warning-bg":n===7?"group-hover:!bg-info-bg":""}},template:`
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
    </g-config-provider>`})},gt={name:"Tabla con columnas fijas",parameters:{docs:{description:{story:`Cuando se tienen demasiadas columnas, puede fijar algunas de ellas.

El atributo fixed es utilizado en el-table-column, este acepta un Boolean. Si es true, la columna será fijada a la izquierda. También acepta dos tipos: 'left' y 'right', ambos indican donde debe ser fijada la columna.`}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae,GIconButton:pl},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Home"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}],handleClick:()=>{console.log("click")}}},template:`
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
    </g-config-provider>`})},bt={name:"Tabla con encabezado agrupado",parameters:{docs:{description:{story:`Cuando la estructura de datos es compleja, puede usar la cabecera de grupo para mostrar la jerarquía de datos.

Solo necesita colocar el-table-column dentro de otro el-table-column, de esta forma logrará agruparles.`}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae,GButton:Bt},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-02",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-04",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-01",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-08",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-06",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"},{date:"2016-05-07",name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"}]}},template:`
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
    </g-config-provider>`})},yt={name:"Tabla con selección de filas",parameters:{docs:{description:{story:"Tabla con selección de filas, permitiendo seleccionar múltiples filas y realizar acciones sobre ellas. Adicionalmente cuenta con la funcion de mostrar tooltips en celdas con contenido largo."}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae,GButton:Bt},setup(){return{tableData:[{date:"2016-05-04",name:"Aleyna Kutzner",address:"Lohrbergstr. 86c, Süd Lilli, Saarland"},{date:"2016-05-03",name:"Helen Jacobi",address:"760 A Street, South Frankfield, Illinois"},{date:"2016-05-02",name:"Brandon Deckert",address:"Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen"},{date:"2016-05-01",name:"Margie Smith",address:"23618 Windsor Drive, West Ricardoview, Idaho"}]}},template:`
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
    </g-config-provider>`})},ht={name:"Tabla con filas expandibles",parameters:{docs:{description:{story:`Cuando el contenido de la fila es demasiado largo y no quiere mostrar la barra de desplazamiento horizontal, puede usar la función de fila expandible.

Puede activar la fila expandible estableciendo la propiedad type="expand" o con slots. La plantilla para el-table-column se mostrará como el contenido de la fila expandible, y puede acceder a los mismos atributos que cuando está usando slots en plantillas de columnas personalizadas.`}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae,GButton:Bt},setup(){return{tableData:[{date:"2016-05-03",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-02",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-04",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-01",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-08",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-06",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]},{date:"2016-05-07",name:"Tom",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114",family:[{name:"Jerry",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Spike",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"},{name:"Tyke",state:"California",city:"San Francisco",address:"3650 21st St, San Francisco",zip:"CA 94114"}]}]}},template:`
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
    </g-config-provider>`})},vt={name:"Tabla con encabezado agrupado",parameters:{docs:{description:{story:"Puede visualizar datos con una estructura de árbol. Cuando la fila contiene el campo children, se trata como datos anidados. Para renderizar datos anidados, la propiedad row-key es necesaria. Además, los datos de registros secundarios se pueden cargar de forma asíncrona. Establezca la propiedad lazy de la tabla a true y la función que usara a load. Especifique el atributo hasChildren en la fila para determinar qué fila contiene descendencia. Tanto children como hasChildren pueden configurarse a través de tree-props."}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae},setup(){return{tableData:[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}],load:(l,o,n)=>{setTimeout(()=>{n([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)},tableData1:[{id:1,date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:2,date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:3,date:"2016-05-01",name:"wangxiaohu",hasChildren:!0,address:"No. 189, Grove St, Los Angeles"},{id:4,date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]}},template:`
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
    </g-config-provider>`})},Ct={name:"Tabla con formateador de tooltip",parameters:{docs:{description:{story:"Tabla con formateador de tooltip, mostrando información adicional al pasar el cursor sobre las celdas."}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae,GLink:Ga,GTag:$o},setup(){return{tableData:[{address:"Lohrbergstr. 86c, Süd Lilli, Saarland",tags:["Office","Home","Park","Garden"],url:"https://github.com/element-plus/element-plus/issues"},{address:"760 A Street, South Frankfield, Illinois",tags:["error","warning","success","info"],url:"https://github.com/element-plus/element-plus/pulls"},{address:"Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",tags:["one","two","three","four","five"],url:"https://github.com/element-plus/element-plus/discussions"},{address:"23618 Windsor Drive, West Ricardoview, Idaho",tags:["blue","white","dark","gray","red","bright"],url:"https://github.com/element-plus/element-plus/actions"}],tableRowFormatter:o=>`${o.cellValue}: table formatter`,withVNode:o=>N(Ga,{type:"primary",href:o.cellValue},()=>N("span",null,o.cellValue)),tagsFormatter:o=>o.row.tags.join(", ")}},template:`
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
    </g-config-provider>`})},wt={name:"Tabla con columnas editables y eliminables",parameters:{docs:{description:{story:"Tabla con columnas editables y eliminables, permitiendo modificar el contenido de las celdas y eliminar filas."}}},render:()=>({components:{GTable:ee,GConfigProvider:te,GTableColumn:ae,GIconFont:va,GSelect:ul,GInput:Ca,GIconButton:pl},setup(){const e=T([{mode:"send",currency:"USD",amount:1e3,reason:"initial-investment",detail:"Este es un detalle de la inversión inicial realizada en el proyecto.",isEditable:!1},{mode:"receive",currency:"EUR",amount:500,reason:"marketing-expenses",detail:"Este es una descripción detallada de los gastos de marketing asociados con el proyecto.",isEditable:!1},{mode:"send",currency:"GBP",amount:750,reason:"operational-costs",detail:"Este es una descripción detallada de los costos operativos del proyecto.",isEditable:!1},{mode:"receive",currency:"JPY",amount:3e3,reason:"miscellaneous-expenses",detail:"Este es una descripción detallada de los gastos misceláneos del proyecto.",isEditable:!1},{mode:"send",currency:"AUD",amount:1200,reason:"travel-expenses",detail:"Este es una descripción detallada de los gastos de viaje relacionados con el proyecto.",isEditable:!1},{mode:"send",currency:"CAD",amount:800,reason:"consulting-fees",detail:"Este es una descripción detallada de los honorarios de consultoría del proyecto.",isEditable:!1}]);return{tableData:e,handleClick:()=>{console.log("click")},handleEdit:(o,n)=>{e.value.splice(o,1,{...n,isEditable:!n.isEditable})},deleteRow:o=>{e.value.splice(o,1)}}},template:`
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
    </g-config-provider>`})},Je={name:"Celda tipo select (cell-type)",parameters:{docs:{description:{story:`**Cuándo usar:** columna que debe mostrar y editar un valor desde una lista fija (estado, categoría, rol). No requiere template ni slot.

**Pasos:** (1) Definir opciones \`{ value, title }\` (o \`label\`). (2) \`useTableCellSelect(tableData, { options, useRowIndex: true })\` → \`cellOptions\`. (3) En la columna: \`cell-type="select"\` y \`:cell-options="cellOptions"\`. Click en la celda abre el select; blur o Enter cierra.

**Label:** \`input-label\` en \`GTableColumn\` o \`label\` en \`cellOptions\`; se muestra sobre el select en modo edición.

**Ejemplo de implementación:**

\`\`\`vue
<template>
  <g-table :data="tableData" border>
    <g-table-column prop="name" label="Nombre" />
    <g-table-column
      prop="status"
      label="Estado"
      cell-type="select"
      :cell-options="cellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellSelect } from '@flash-global66/g-table'

const tableData = ref([
  { name: 'María', status: 'active' },
  { name: 'Juan', status: 'pending' },
  { name: 'Ana', status: 'inactive' }
])

const statusOptions = [
  { value: 'active', title: 'Activo' },
  { value: 'pending', title: 'Pendiente' },
  { value: 'inactive', title: 'Inactivo' }
]

const { cellOptions } = useTableCellSelect(tableData, {
  options: statusOptions,
  useRowIndex: true
})
<\/script>
\`\`\``}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te},setup(){const e=T([{id:1,name:"María González",email:"maria@example.com",department:"IT",role:"admin",status:"active",phone:"+34 600 123 456",location:"Madrid",joinDate:"2020-01-15",comment:"Excelente desempeño en el proyecto Q4. Lideró el desarrollo de nuevas funcionalidades y mejoró significativamente la eficiencia del equipo."},{id:2,name:"Juan Pérez",email:"juan@example.com",department:"Sales",role:"user",status:"pending",phone:"+34 600 234 567",location:"Barcelona",joinDate:"2021-03-20",comment:""},{id:3,name:"Ana Martínez",email:"ana@example.com",department:"Marketing",role:"editor",status:"inactive",phone:"+34 600 345 678",location:"Valencia",joinDate:"2019-11-10",comment:"Lideró la campaña de verano con resultados destacados. Incrementó el engagement en redes sociales en un 40% y generó más de 10,000 leads calificados."},{id:4,name:"Carlos Rodríguez",email:"carlos@example.com",department:"IT",role:"user",status:"active",phone:"+34 600 456 789",location:"Madrid",joinDate:"2022-05-08",comment:""},{id:5,name:"Laura Sánchez",email:"laura@example.com",department:"HR",role:"admin",status:"pending",phone:"+34 600 567 890",location:"Sevilla",joinDate:"2020-07-12",comment:"Coordinó exitosamente el proceso de onboarding de 25 nuevos empleados durante el último trimestre, reduciendo el tiempo de incorporación en un 30%."},{id:6,name:"Pedro López",email:"pedro@example.com",department:"Sales",role:"editor",status:"active",phone:"+34 600 678 901",location:"Barcelona",joinDate:"2021-09-25",comment:""},{id:7,name:"Sofía Fernández",email:"sofia@example.com",department:"Marketing",role:"user",status:"inactive",phone:"+34 600 789 012",location:"Valencia",joinDate:"2023-02-14",comment:"Especialista en redes sociales y contenido digital. Gestiona las cuentas corporativas y desarrolla estrategias de contenido que han aumentado el alcance orgánico."},{id:8,name:"Diego Torres",email:"diego@example.com",department:"IT",role:"admin",status:"active",phone:"+34 600 890 123",location:"Madrid",joinDate:"2018-06-30",comment:""},{id:9,name:"Carmen Ruiz",email:"carmen@example.com",department:"Sales",role:"user",status:"pending",phone:"+34 600 901 234",location:"Barcelona",joinDate:"2022-11-05",comment:"Nuevo en el equipo, mostrando gran potencial. Ha cerrado 5 deals importantes en su primer mes y demuestra excelente capacidad de comunicación con clientes."},{id:10,name:"Miguel Herrera",email:"miguel@example.com",department:"Marketing",role:"editor",status:"active",phone:"+34 600 012 345",location:"Valencia",joinDate:"2021-04-18",comment:""}]),t=[{value:"active",title:"Activo"},{value:"pending",title:"Pendiente"},{value:"inactive",title:"Inactivo"}],a=[{value:"admin",title:"Administrador"},{value:"editor",title:"Editor"},{value:"user",title:"Usuario"}],l=[{value:"IT",title:"Tecnología"},{value:"Sales",title:"Ventas"},{value:"Marketing",title:"Marketing"},{value:"HR",title:"Recursos Humanos"}],{cellOptions:o}=tt(e,{options:t,label:"Estado",useRowIndex:!0}),{cellOptions:n}=tt(e,{options:a,useRowIndex:!0}),{cellOptions:i}=tt(e,{options:l,useRowIndex:!0}),{cellOptions:d}=me(e,{label:"Fecha Ingreso",placeholder:"YYYY-MM-DD",useRowIndex:!0}),{cellOptions:r}=me(e,{label:"Detalle",placeholder:"Opcional",rows:3,useRowIndex:!0});return{tableData:e,statusCellOptions:o,roleCellOptions:n,departmentCellOptions:i,joinDateCellOptions:d,commentCellOptions:r}},template:`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" 
       :cell-style="{ zIndex: 'auto' }"
      >
        <g-table-column prop="name" label="Nombre" width="160" />
        <g-table-column prop="email" label="Email" width="200" />
        <g-table-column
          prop="department"
          label="Departamento"
          width="150"
          cell-type="select"
          :cell-options="departmentCellOptions"
          input-label="Departamento del usuario"
        />
        <g-table-column
          prop="role"
          label="Rol"
          width="150"
          cell-type="select"
          :cell-options="roleCellOptions"
          input-label="Rol del usuario"
        />
        <g-table-column
          prop="status"
          label="Estado"
          width="140"
          cell-type="select"
          :cell-options="statusCellOptions"
          input-label="Estado del usuario"
        />
        <g-table-column prop="phone" label="Teléfono" width="150" />
        <g-table-column prop="location" label="Ubicación" width="120" />
        <g-table-column prop="joinDate" label="Fecha Ingreso" width="140" cell-type="input" :cell-options="joinDateCellOptions" />
        <g-table-column
          prop="comment"
          label="Detalle"
          cell-type="input"
          empty-action-text="Click para agregar detalle"
          input-label="Detalle"
        />
      </g-table>
    </g-config-provider>`})},xt={name:"Celda tipo input (cell-type)",parameters:{docs:{description:{story:'**Cuándo usar:** columna que debe mostrar y editar texto (o número) con un input estándar. No requiere template ni slot.\n\n**Pasos:** (1) `useTableCellInput(tableData, { placeholder, useRowIndex: true, ... })` → `cellOptions`. (2) En la columna: `cell-type="input"` y `:cell-options="cellOptions"`. Click en la celda abre el input; blur o Enter cierra.\n\n**Opciones útiles:** `placeholder`, `label` / `input-label` (label sobre el input en edición), `emptyActionText` / `empty-action-text` (texto cuando está vacío; al hacer click activa edición), `expandColspan` / `expand-colspan` (columnas que abarca el overlay; por defecto 2), `expandDirection` (`"left"` | `"right"`), `rules` (validación).\n\n**Textarea:** pase `rows` en `useTableCellInput`; se renderiza un textarea y la fila puede crecer en altura. Cerrar con `Ctrl+Enter` o `Cmd+Enter`.'}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te},setup(){const e=T([{name:"María",comment:"Inversión inicial para el proyecto Q4",notes:"Revisar detalles adicionales con el equipo de finanzas antes de aprobar el presupuesto completo."},{name:"Juan",comment:"",notes:""},{name:"Ana",comment:"Gastos de marketing",notes:"Incluir campaña de redes sociales y publicidad digital para el próximo trimestre."}]),{cellOptions:t}=me(e,{label:"Detalle",placeholder:"Opcional",useRowIndex:!0}),{cellOptions:a}=me(e,{label:"Notas",placeholder:"Agregar notas adicionales...",rows:3,useRowIndex:!0});return{tableData:e,cellOptions:t,notesCellOptions:a}},template:`
    <g-config-provider>
      <g-table :data="tableData"
       :cell-style="{ zIndex: 'auto' }"
      >
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column
          prop="comment"
          label="Detalle"
          cell-type="input"
          empty-action-text="Click para agregar detalle"
          input-label="Detalle"
        />
        <g-table-column
          prop="notes"
          label="Notas"
          cell-type="input"
          empty-action-text="Click para agregar notas"
          input-label="Notas"
        />
      </g-table>
    </g-config-provider>`})},St={name:"Celda personalizada con GCellEdit",parameters:{docs:{description:{story:'**GCellEdit** permite crear celdas editables con vista y edición totalmente personalizadas (varios controles, otro diseño). Se usa dentro del slot `#default` de `GTableColumn`.\n\n**Qué hace el componente:** alterna entre vista y edición (con transición), expande el overlay según `expand-direction` y `expand-colspan`, **cierra al hacer clic fuera** de la celda y **enfoca automáticamente** el primer input/textarea/select dentro del slot `#edit`.\n\n**Props:** `v-model` (estado de edición por fila, p. ej. `row.isEditing`), `row`, `column`, `index`, `prop` (nombre del campo), `expand-direction` (`"left"` | `"right"`), `expand-colspan` (columnas que abarca).\n\n**Slots:**\n- `#view="{ toggle }"` — Contenido en modo solo lectura. Click o Enter/Espacio entra en edición.\n- `#edit="{ close }"` — Contenido en modo edición. Llame `close()` para cerrar (p. ej. en `@keydown.enter` y `@blur` del input). No es obligatorio poner `autofocus` en el input: el componente intenta enfocar el primer input/textarea/select al abrir.\n\n**Datos:** cada fila debe tener una propiedad booleana para el estado de edición (aquí `isEditing`).'}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te,GCellEdit:ql,GInput:Ca},setup(){return{tableData:T([{name:"Producto A",color:"#ff0000",customValue:"Valor 1",isEditing:!1},{name:"Producto B",color:"#00ff00",customValue:"Valor 2",isEditing:!1},{name:"Producto C",color:"#0000ff",customValue:"Valor 3",isEditing:!1}])}},template:`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        
        <g-table-column prop="customValue" label="Custom Edit" width="200">
          <template #default="{ row, column, $index }">
            <g-cell-edit
              v-model="row.isEditing"
              :row="row"
              :column="column"
              :index="$index"
              prop="customValue"
              expand-direction="left"
              expand-colspan="1"
            >
              <template #view="{ toggle }">
                <div class="w-full flex items-center justify-between">
                  <span>{{ row.customValue }}</span>
                </div>
              </template>
              
              <template #edit="{ close }">
                 <div class="flex items-center gap-2 w-full px-2">
                    <g-input v-model="row.customValue" size="small" @keydown.enter="close" @blur="close" autofocus class="w-full" />
                 </div>
              </template>
            </g-cell-edit>
          </template>
        </g-table-column>
        
        <g-table-column prop="color" label="Otro Campo" />
      </g-table>
    </g-config-provider>`})},Xe={name:'Expansión hacia la derecha (expand-direction="right")',parameters:{docs:{description:{story:'**Cuándo usar:** cuando la celda editable está a la izquierda o en el centro y quiere que el overlay ocupe más espacio hacia la derecha (p. ej. comentarios largos).\n\n**Qué demuestra:** `expand-direction="right"` (por defecto) y `expand-colspan="3"`: al editar, el overlay abarca la celda actual y 2 columnas más a la derecha. El overlay no se desplaza (`leftOffset` = 0). Configure `expandColspan` en `useTableCellInput` o `expand-colspan` en `GTableColumn`.'}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te},setup(){const e=T([{name:"A",comment:"Texto corto",extra:"Col extra"},{name:"B",comment:"",extra:""},{name:"C",comment:"Otro comentario largo para ver expansión",extra:""}]),{cellOptions:t}=me(e,{placeholder:"Editar...",useRowIndex:!0,expandColspan:3,expandDirection:"right"});return{tableData:e,cellOptions:t}},template:`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="120" />
        <g-table-column prop="name" label="Col 2" width="120" />
        <g-table-column
          prop="comment"
          label="Comentario (expand right 3)"
          cell-type="input"
          expand-colspan="3"
          expand-direction="right"
          :cell-options="cellOptions"
        />
        <g-table-column prop="extra" label="Col 4" width="120" />
        <g-table-column prop="extra" label="Col 5" width="120" />
      </g-table>
    </g-config-provider>`})},Et={name:'Expansión hacia la izquierda (expand-direction="left")',parameters:{docs:{description:{story:'**Cuándo usar:** cuando la celda editable está a la derecha o es una de las últimas columnas y quiere que el overlay crezca hacia la izquierda (evitar que se salga por la derecha).\n\n**Qué demuestra:** `expand-direction="left"` y `expand-colspan="2"`: al editar, el overlay abarca la columna anterior y la actual; se desplaza a la izquierda (`leftOffset` > 0). Configure `expandDirection: \'left\'` y `expandColspan` en `useTableCellInput` o las props equivalentes en `GTableColumn`.'}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te},setup(){const e=T([{name:"A",comment:"Texto",notes:"Notas"},{name:"B",comment:"",notes:""},{name:"C",comment:"Ver expansión a la izquierda",notes:""}]),{cellOptions:t}=me(e,{placeholder:"Editar...",useRowIndex:!0,expandColspan:2,expandDirection:"left"});return{tableData:e,cellOptions:t}},template:`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="120" />
        <g-table-column prop="notes" label="Notas" width="140" />
        <g-table-column
          prop="comment"
          label="Comentario (expand left 2)"
          cell-type="input"
          expand-colspan="2"
          expand-direction="left"
          :cell-options="cellOptions"
        />
        <g-table-column prop="name" label="Col 4" width="120" />
      </g-table>
    </g-config-provider>`})},Tt={name:"Última columna editable (siempre expande a la izquierda)",parameters:{docs:{description:{story:"**Cuándo usar:** tabla donde la última columna es editable (p. ej. notas, comentarios). El componente fuerza expansión a la izquierda para no salirse del borde derecho.\n\n**Qué demuestra:** cuando la celda editable es la **última columna**, el overlay siempre expande hacia la **izquierda**; no hace falta indicar `expand-direction` en este caso. Combine con `expand-colspan` si quiere abarcar más de una columna."}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te},setup(){const e=T([{name:"María",status:"active",notes:"Revisar presupuesto Q4"},{name:"Juan",status:"pending",notes:""},{name:"Ana",status:"inactive",notes:"Seguimiento con cliente"}]),{cellOptions:t}=tt(e,{options:[{value:"active",title:"Activo"},{value:"pending",title:"Pendiente"},{value:"inactive",title:"Inactivo"}],useRowIndex:!0}),{cellOptions:a}=me(e,{placeholder:"Notas (última columna)...",useRowIndex:!0});return{tableData:e,statusCellOptions:t,notesCellOptions:a}},template:`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="140" />
        <g-table-column
          prop="status"
          label="Estado"
          width="140"
          cell-type="select"
          :cell-options="statusCellOptions"
        />
        <g-table-column
          prop="notes"
          label="Notas (última columna)"
          cell-type="input"
          :cell-options="notesCellOptions"
        />
      </g-table>
    </g-config-provider>`})},At={name:"Todos los casos de expansión en una tabla",parameters:{docs:{description:{story:'**Cuándo usar:** referencia rápida de los tres comportamientos de expansión en una sola tabla.\n\n**Qué demuestra:** **Col 3** — `expand-direction="right"` y `expand-colspan="3"` (overlay a la derecha). **Col 5** — `expand-direction="left"` y `expand-colspan="2"` (overlay a la izquierda). **Col 7** — última columna; siempre expande a la izquierda sin configurar `expand-direction`.'}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te},setup(){const e=T([{id:1,a:"A1",b:"B1",commentRight:"Expand right 3",d:"D1",commentLeft:"Expand left 2",f:"F1",lastCol:"Última col"},{id:2,a:"A2",b:"B2",commentRight:"",d:"D2",commentLeft:"",f:"F2",lastCol:""},{id:3,a:"A3",b:"B3",commentRight:"Texto largo para ver overlay",d:"D3",commentLeft:"Overlay a la izquierda",f:"F3",lastCol:"Siempre left"}]),{cellOptions:t}=me(e,{placeholder:"Editar (right 3)...",useRowIndex:!0,expandColspan:3,expandDirection:"right"}),{cellOptions:a}=me(e,{placeholder:"Editar (left 2)...",useRowIndex:!0,expandColspan:2,expandDirection:"left"}),{cellOptions:l}=me(e,{placeholder:"Última col...",useRowIndex:!0});return{tableData:e,rightOptions:t,leftOptions:a,lastOptions:l}},template:`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="a" label="Col 1" width="90" />
        <g-table-column prop="b" label="Col 2" width="90" />
        <g-table-column
          prop="commentRight"
          label="Col 3 (right 3)"
          cell-type="input"
          expand-colspan="3"
          expand-direction="right"
          :cell-options="rightOptions"
        />
        <g-table-column prop="d" label="Col 4" width="90" />
        <g-table-column
          prop="commentLeft"
          label="Col 5 (left 2)"
          cell-type="input"
          expand-colspan="2"
          expand-direction="left"
          :cell-options="leftOptions"
        />
        <g-table-column prop="f" label="Col 6" width="90" />
        <g-table-column
          prop="lastCol"
          label="Col 7 (última)"
          cell-type="input"
          :cell-options="lastOptions"
        />
      </g-table>
    </g-config-provider>`})},Ot={name:"Celda con validación (rules)",parameters:{docs:{description:{story:`**Cuándo usar:** columnas tipo input donde el valor debe cumplir reglas (requerido, email, rango, etc.) antes de considerar la edición válida.

**Qué demuestra:** pase \`rules\` en las opciones de \`useTableCellInput\` (compatible con \`async-validator\` y \`GForm\`). La tabla emite \`cell-edit-validate\` con \`{ valid, message }\`. Opcionales: \`onValidationFailed\`, \`onValidationSuccess\` y la API \`validation.clearAllValidation()\` para limpiar errores.

**Características:**
- Validación en \`blur\` (al salir de la celda) y/o \`change\` (al escribir)
- Mensajes de error personalizados
- Estados visuales de error
- API para limpiar validación programáticamente

**Reglas disponibles:**
- \`required\`: Campo requerido
- \`type\`: Tipo de dato (email, url, number, etc.)
- \`min/max\`: Longitud mínima/máxima
- \`pattern\`: Expresión regular
- \`validator\`: Función de validación personalizada

**Ejemplo de implementación:**

\`\`\`vue
<template>
  <g-table :data="tableData">
    <g-table-column
      prop="email"
      label="Email"
      cell-type="input"
      :cell-options="emailCellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellInput } from '@flash-global66/g-table'

const tableData = ref([
  { id: 1, name: 'Juan', email: '' },
  { id: 2, name: 'María', email: 'maria@example.com' }
])

const { cellOptions: emailCellOptions, validation } = useTableCellInput(tableData, {
  label: 'Email',
  placeholder: 'correo@ejemplo.com',
  rules: [
    { required: true, message: 'El email es requerido', trigger: 'blur' },
    { type: 'email', message: 'Ingresa un email válido', trigger: 'blur' }
  ],
  useRowIndex: true,
  onValidationFailed: (errors, row, prop, index) => {
    console.log('Validación fallida:', errors)
  }
})

// Limpiar validación programáticamente
const clearAllErrors = () => validation?.clearAllValidation()
<\/script>
\`\`\``}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te,GButton:Bt},setup(){const e=T([{id:1,name:"Juan Pérez",email:"",age:"",website:""},{id:2,name:"María García",email:"maria@example.com",age:"28",website:"https://maria.dev"},{id:3,name:"Carlos López",email:"carlos-invalid",age:"150",website:"not-a-url"},{id:4,name:"Ana Martínez",email:"",age:"",website:""}]),{cellOptions:t,validation:a}=me(e,{label:"Email",placeholder:"correo@ejemplo.com",emptyActionText:"Agregar email",rules:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Ingresa un email válido",trigger:"blur"}],useRowIndex:!0,onValidationFailed:(r,s,c,u)=>{console.log("Email validación fallida:",{errors:r,row:s,prop:c,index:u})}}),{cellOptions:l,validation:o}=me(e,{label:"Edad",placeholder:"18-120",emptyActionText:"Agregar edad",type:"number",rules:[{required:!0,message:"La edad es requerida",trigger:"blur"},{type:"number",transform:r=>Number(r),message:"Debe ser un número",trigger:"blur"},{type:"number",transform:r=>Number(r),min:18,max:120,message:"La edad debe estar entre 18 y 120",trigger:"blur"}],useRowIndex:!0}),{cellOptions:n,validation:i}=me(e,{label:"Sitio web",placeholder:"https://ejemplo.com",emptyActionText:"Agregar URL",rules:[{type:"url",message:"Ingresa una URL válida (ej: https://...)",trigger:"blur"}],useRowIndex:!0});return{tableData:e,emailCellOptions:t,ageCellOptions:l,websiteCellOptions:n,clearAllValidations:()=>{a?.clearAllValidation(),o?.clearAllValidation(),i?.clearAllValidation()}}},template:`
    <g-config-provider>
      <div class="mb-md">
        <g-button @click="clearAllValidations">Limpiar validaciones</g-button>
      </div>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="160" />
        <g-table-column
          prop="email"
          label="Email (required + email)"
          width="220"
          cell-type="input"
          :cell-options="emailCellOptions"
        />
        <g-table-column
          prop="age"
          label="Edad (18-120)"
          width="150"
          cell-type="input"
          :cell-options="ageCellOptions"
        />
        <g-table-column
          prop="website"
          label="Website (URL)"
          width="220"
          cell-type="input"
          :cell-options="websiteCellOptions"
        />
      </g-table>
      <div class="mt-md text-gray-500 text-3">
        <p><strong>Instrucciones:</strong> Haz click en una celda para editarla. Al salir (blur), se validará el contenido.</p>
        <p>Prueba dejando campos vacíos, ingresando emails inválidos, edades fuera de rango, o URLs mal formadas.</p>
      </div>
    </g-config-provider>`})},Ft={name:"Eventos de celdas editables",parameters:{docs:{description:{story:"**Cuándo usar:** cuando necesita reaccionar a apertura/cierre/cambio de celdas editables (analytics, sincronizar con backend, mostrar mensajes).\n\n**Qué demuestra:** la tabla emite estos eventos cuando se usan celdas editables (tanto con `cell-type` como con `GCellEdit`):\n\n| Evento | Cuándo se emite | Parámetros |\n|--------|------------------|------------|\n| `cell-edit-open` | La celda entra en modo edición (click o foco) | `(row, column)` |\n| `cell-edit-close` | La celda sale de modo edición (blur, Enter o clic fuera) | `(row, column)` |\n| `cell-edit-change` | El valor de la celda cambió (input o select) | `(row, column, newValue, oldValue)` |\n| `cell-edit-validate` | Terminó la validación de la celda (solo si hay reglas) | `(row, column, result)` con `result.valid` y `result.message` |\n\nÚtil para sincronizar estado, analytics o validación externa. En esta historia se registran los últimos eventos en el panel derecho."}}},render:()=>({components:{GTable:ee,GTableColumn:ae,GConfigProvider:te},setup(){const e=T([{id:1,name:"Tom",status:"active",note:""},{id:2,name:"Jane",status:"inactive",note:""}]),t=T([]),a=12,l=(u,...p)=>{const f=p.map(m=>typeof m=="object"&&m!==null&&"property"in m?`column.${m.property}`:String(m)).join(", ");t.value=[{event:u,payload:f},...t.value].slice(0,a)},o=(u,p)=>{l("cell-edit-open",u,p)},n=(u,p)=>{l("cell-edit-close",u,p)},i=(u,p,f,m)=>{l("cell-edit-change",u,p,String(m)+" -> "+String(f))},d=(u,p,f)=>{l("cell-edit-validate",u,p,f.valid?"valid":f.message)},r=[{value:"active",title:"Activo"},{value:"inactive",title:"Inactivo"}],{cellOptions:s}=tt(e,{options:r,useRowIndex:!0}),{cellOptions:c}=me(e,{placeholder:"Nota",useRowIndex:!0});return{tableData:e,eventsLog:t,onCellEditOpen:o,onCellEditClose:n,onCellEditChange:i,onCellEditValidate:d,statusCellOptions:s,noteCellOptions:c}},template:`
    <g-config-provider>
      <div class="flex gap-md">
        <div class="flex-1 min-w-0">
          <g-table
            :data="tableData"
            border
            style="width: 100%"
            :cell-style="{ zIndex: 'auto' }"
            @cell-edit-open="onCellEditOpen"
            @cell-edit-close="onCellEditClose"
            @cell-edit-change="onCellEditChange"
            @cell-edit-validate="onCellEditValidate"
          >
            <g-table-column prop="name" label="Nombre" width="120" />
            <g-table-column
              prop="status"
              label="Estado"
              width="140"
              cell-type="select"
              :cell-options="statusCellOptions"
            />
            <g-table-column
              prop="note"
              label="Nota"
              cell-type="input"
              :cell-options="noteCellOptions"
            />
          </g-table>
        </div>
        <div class="w-72 flex-shrink-0">
          <p class="font-medium text-3 mb-xs">Últimos eventos</p>
          <ul class="text-2 space-y-xxs text-gray-600">
            <li v-for="(entry, i) in eventsLog" :key="i" class="font-mono truncate" :title="entry.payload">
              <span class="text-primary-txt font-medium">{{ entry.event }}</span>
            </li>
            <li v-if="eventsLog.length === 0" class="text-gray-400">Interactúa con las celdas editables</li>
          </ul>
        </div>
      </div>
    </g-config-provider>`})};pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: \`Tabla básica con columnas definidas por \\\`prop\\\`, \\\`label\\\` y \\\`width\\\`. Los datos se pasan mediante la prop \\\`data\\\`.\`
      }
    }
  },
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
}`,...pt.parameters?.docs?.source}}};mt.parameters={...mt.parameters,docs:{...mt.parameters?.docs,source:{originalSource:`{
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
}`,...mt.parameters?.docs?.source}}};ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
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
}`,...ft.parameters?.docs?.source}}};gt.parameters={...gt.parameters,docs:{...gt.parameters?.docs,source:{originalSource:`{
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
}`,...gt.parameters?.docs?.source}}};bt.parameters={...bt.parameters,docs:{...bt.parameters?.docs,source:{originalSource:`{
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
}`,...bt.parameters?.docs?.source}}};yt.parameters={...yt.parameters,docs:{...yt.parameters?.docs,source:{originalSource:`{
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
}`,...yt.parameters?.docs?.source}}};ht.parameters={...ht.parameters,docs:{...ht.parameters?.docs,source:{originalSource:`{
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
}`,...ht.parameters?.docs?.source}}};vt.parameters={...vt.parameters,docs:{...vt.parameters?.docs,source:{originalSource:`{
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
}`,...vt.parameters?.docs?.source}}};Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
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
}`,...Ct.parameters?.docs?.source}}};wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`{
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
      const handleEdit = (index: number, row: any) => {
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
}`,...wt.parameters?.docs?.source}}};Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`{
  name: 'Celda tipo select (cell-type)',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** columna que debe mostrar y editar un valor desde una lista fija (estado, categoría, rol). No requiere template ni slot.

**Pasos:** (1) Definir opciones \\\`{ value, title }\\\` (o \\\`label\\\`). (2) \\\`useTableCellSelect(tableData, { options, useRowIndex: true })\\\` → \\\`cellOptions\\\`. (3) En la columna: \\\`cell-type="select"\\\` y \\\`:cell-options="cellOptions"\\\`. Click en la celda abre el select; blur o Enter cierra.

**Label:** \\\`input-label\\\` en \\\`GTableColumn\\\` o \\\`label\\\` en \\\`cellOptions\\\`; se muestra sobre el select en modo edición.

**Ejemplo de implementación:**

\\\`\\\`\\\`vue
<template>
  <g-table :data="tableData" border>
    <g-table-column prop="name" label="Nombre" />
    <g-table-column
      prop="status"
      label="Estado"
      cell-type="select"
      :cell-options="cellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellSelect } from '@flash-global66/g-table'

const tableData = ref([
  { name: 'María', status: 'active' },
  { name: 'Juan', status: 'pending' },
  { name: 'Ana', status: 'inactive' }
])

const statusOptions = [
  { value: 'active', title: 'Activo' },
  { value: 'pending', title: 'Pendiente' },
  { value: 'inactive', title: 'Inactivo' }
]

const { cellOptions } = useTableCellSelect(tableData, {
  options: statusOptions,
  useRowIndex: true
})
<\/script>
\\\`\\\`\\\`\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider
    },
    setup() {
      const tableData = ref([{
        id: 1,
        name: 'María González',
        email: 'maria@example.com',
        department: 'IT',
        role: 'admin',
        status: 'active',
        phone: '+34 600 123 456',
        location: 'Madrid',
        joinDate: '2020-01-15',
        comment: 'Excelente desempeño en el proyecto Q4. Lideró el desarrollo de nuevas funcionalidades y mejoró significativamente la eficiencia del equipo.'
      }, {
        id: 2,
        name: 'Juan Pérez',
        email: 'juan@example.com',
        department: 'Sales',
        role: 'user',
        status: 'pending',
        phone: '+34 600 234 567',
        location: 'Barcelona',
        joinDate: '2021-03-20',
        comment: ''
      }, {
        id: 3,
        name: 'Ana Martínez',
        email: 'ana@example.com',
        department: 'Marketing',
        role: 'editor',
        status: 'inactive',
        phone: '+34 600 345 678',
        location: 'Valencia',
        joinDate: '2019-11-10',
        comment: 'Lideró la campaña de verano con resultados destacados. Incrementó el engagement en redes sociales en un 40% y generó más de 10,000 leads calificados.'
      }, {
        id: 4,
        name: 'Carlos Rodríguez',
        email: 'carlos@example.com',
        department: 'IT',
        role: 'user',
        status: 'active',
        phone: '+34 600 456 789',
        location: 'Madrid',
        joinDate: '2022-05-08',
        comment: ''
      }, {
        id: 5,
        name: 'Laura Sánchez',
        email: 'laura@example.com',
        department: 'HR',
        role: 'admin',
        status: 'pending',
        phone: '+34 600 567 890',
        location: 'Sevilla',
        joinDate: '2020-07-12',
        comment: 'Coordinó exitosamente el proceso de onboarding de 25 nuevos empleados durante el último trimestre, reduciendo el tiempo de incorporación en un 30%.'
      }, {
        id: 6,
        name: 'Pedro López',
        email: 'pedro@example.com',
        department: 'Sales',
        role: 'editor',
        status: 'active',
        phone: '+34 600 678 901',
        location: 'Barcelona',
        joinDate: '2021-09-25',
        comment: ''
      }, {
        id: 7,
        name: 'Sofía Fernández',
        email: 'sofia@example.com',
        department: 'Marketing',
        role: 'user',
        status: 'inactive',
        phone: '+34 600 789 012',
        location: 'Valencia',
        joinDate: '2023-02-14',
        comment: 'Especialista en redes sociales y contenido digital. Gestiona las cuentas corporativas y desarrolla estrategias de contenido que han aumentado el alcance orgánico.'
      }, {
        id: 8,
        name: 'Diego Torres',
        email: 'diego@example.com',
        department: 'IT',
        role: 'admin',
        status: 'active',
        phone: '+34 600 890 123',
        location: 'Madrid',
        joinDate: '2018-06-30',
        comment: ''
      }, {
        id: 9,
        name: 'Carmen Ruiz',
        email: 'carmen@example.com',
        department: 'Sales',
        role: 'user',
        status: 'pending',
        phone: '+34 600 901 234',
        location: 'Barcelona',
        joinDate: '2022-11-05',
        comment: 'Nuevo en el equipo, mostrando gran potencial. Ha cerrado 5 deals importantes en su primer mes y demuestra excelente capacidad de comunicación con clientes.'
      }, {
        id: 10,
        name: 'Miguel Herrera',
        email: 'miguel@example.com',
        department: 'Marketing',
        role: 'editor',
        status: 'active',
        phone: '+34 600 012 345',
        location: 'Valencia',
        joinDate: '2021-04-18',
        comment: ''
      }]);
      const statusOptions = [{
        value: 'active',
        title: 'Activo'
      }, {
        value: 'pending',
        title: 'Pendiente'
      }, {
        value: 'inactive',
        title: 'Inactivo'
      }];
      const roleOptions = [{
        value: 'admin',
        title: 'Administrador'
      }, {
        value: 'editor',
        title: 'Editor'
      }, {
        value: 'user',
        title: 'Usuario'
      }];
      const departmentOptions = [{
        value: 'IT',
        title: 'Tecnología'
      }, {
        value: 'Sales',
        title: 'Ventas'
      }, {
        value: 'Marketing',
        title: 'Marketing'
      }, {
        value: 'HR',
        title: 'Recursos Humanos'
      }];
      const {
        cellOptions: statusCellOptions
      } = useTableCellSelect(tableData, {
        options: statusOptions,
        label: 'Estado',
        useRowIndex: true
      });
      const {
        cellOptions: roleCellOptions
      } = useTableCellSelect(tableData, {
        options: roleOptions,
        useRowIndex: true
      });
      const {
        cellOptions: departmentCellOptions
      } = useTableCellSelect(tableData, {
        options: departmentOptions,
        useRowIndex: true
      });
      const {
        cellOptions: joinDateCellOptions
      } = useTableCellInput(tableData, {
        label: 'Fecha Ingreso',
        placeholder: 'YYYY-MM-DD',
        useRowIndex: true
      });
      const {
        cellOptions: commentCellOptions
      } = useTableCellInput(tableData, {
        label: 'Detalle',
        placeholder: 'Opcional',
        rows: 3,
        useRowIndex: true
      });
      return {
        tableData,
        statusCellOptions,
        roleCellOptions,
        departmentCellOptions,
        joinDateCellOptions,
        commentCellOptions
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" style="width: 100%" 
       :cell-style="{ zIndex: 'auto' }"
      >
        <g-table-column prop="name" label="Nombre" width="160" />
        <g-table-column prop="email" label="Email" width="200" />
        <g-table-column
          prop="department"
          label="Departamento"
          width="150"
          cell-type="select"
          :cell-options="departmentCellOptions"
          input-label="Departamento del usuario"
        />
        <g-table-column
          prop="role"
          label="Rol"
          width="150"
          cell-type="select"
          :cell-options="roleCellOptions"
          input-label="Rol del usuario"
        />
        <g-table-column
          prop="status"
          label="Estado"
          width="140"
          cell-type="select"
          :cell-options="statusCellOptions"
          input-label="Estado del usuario"
        />
        <g-table-column prop="phone" label="Teléfono" width="150" />
        <g-table-column prop="location" label="Ubicación" width="120" />
        <g-table-column prop="joinDate" label="Fecha Ingreso" width="140" cell-type="input" :cell-options="joinDateCellOptions" />
        <g-table-column
          prop="comment"
          label="Detalle"
          cell-type="input"
          empty-action-text="Click para agregar detalle"
          input-label="Detalle"
        />
      </g-table>
    </g-config-provider>\`
  })
}`,...Je.parameters?.docs?.source},description:{story:'Implementación de celda tipo select: useTableCellSelect + cell-type="select" + :cell-options. La UI (GSelect) está en el UI system.',...Je.parameters?.docs?.description}}};xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
  name: 'Celda tipo input (cell-type)',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** columna que debe mostrar y editar texto (o número) con un input estándar. No requiere template ni slot.

**Pasos:** (1) \\\`useTableCellInput(tableData, { placeholder, useRowIndex: true, ... })\\\` → \\\`cellOptions\\\`. (2) En la columna: \\\`cell-type="input"\\\` y \\\`:cell-options="cellOptions"\\\`. Click en la celda abre el input; blur o Enter cierra.

**Opciones útiles:** \\\`placeholder\\\`, \\\`label\\\` / \\\`input-label\\\` (label sobre el input en edición), \\\`emptyActionText\\\` / \\\`empty-action-text\\\` (texto cuando está vacío; al hacer click activa edición), \\\`expandColspan\\\` / \\\`expand-colspan\\\` (columnas que abarca el overlay; por defecto 2), \\\`expandDirection\\\` (\\\`"left"\\\` | \\\`"right"\\\`), \\\`rules\\\` (validación).

**Textarea:** pase \\\`rows\\\` en \\\`useTableCellInput\\\`; se renderiza un textarea y la fila puede crecer en altura. Cerrar con \\\`Ctrl+Enter\\\` o \\\`Cmd+Enter\\\`.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider
    },
    setup() {
      const tableData = ref([{
        name: 'María',
        comment: 'Inversión inicial para el proyecto Q4',
        notes: 'Revisar detalles adicionales con el equipo de finanzas antes de aprobar el presupuesto completo.'
      }, {
        name: 'Juan',
        comment: '',
        notes: ''
      }, {
        name: 'Ana',
        comment: 'Gastos de marketing',
        notes: 'Incluir campaña de redes sociales y publicidad digital para el próximo trimestre.'
      }]);
      const {
        cellOptions
      } = useTableCellInput(tableData, {
        label: 'Detalle',
        placeholder: 'Opcional',
        useRowIndex: true
      });
      const {
        cellOptions: notesCellOptions
      } = useTableCellInput(tableData, {
        label: 'Notas',
        placeholder: 'Agregar notas adicionales...',
        rows: 3,
        useRowIndex: true
      });
      return {
        tableData,
        cellOptions,
        notesCellOptions
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData"
       :cell-style="{ zIndex: 'auto' }"
      >
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column
          prop="comment"
          label="Detalle"
          cell-type="input"
          empty-action-text="Click para agregar detalle"
          input-label="Detalle"
        />
        <g-table-column
          prop="notes"
          label="Notas"
          cell-type="input"
          empty-action-text="Click para agregar notas"
          input-label="Notas"
        />
      </g-table>
    </g-config-provider>\`
  })
}`,...xt.parameters?.docs?.source}}};St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`{
  name: 'Celda personalizada con GCellEdit',
  parameters: {
    docs: {
      description: {
        story: \`**GCellEdit** permite crear celdas editables con vista y edición totalmente personalizadas (varios controles, otro diseño). Se usa dentro del slot \\\`#default\\\` de \\\`GTableColumn\\\`.

**Qué hace el componente:** alterna entre vista y edición (con transición), expande el overlay según \\\`expand-direction\\\` y \\\`expand-colspan\\\`, **cierra al hacer clic fuera** de la celda y **enfoca automáticamente** el primer input/textarea/select dentro del slot \\\`#edit\\\`.

**Props:** \\\`v-model\\\` (estado de edición por fila, p. ej. \\\`row.isEditing\\\`), \\\`row\\\`, \\\`column\\\`, \\\`index\\\`, \\\`prop\\\` (nombre del campo), \\\`expand-direction\\\` (\\\`"left"\\\` | \\\`"right"\\\`), \\\`expand-colspan\\\` (columnas que abarca).

**Slots:**
- \\\`#view="{ toggle }"\\\` — Contenido en modo solo lectura. Click o Enter/Espacio entra en edición.
- \\\`#edit="{ close }"\\\` — Contenido en modo edición. Llame \\\`close()\\\` para cerrar (p. ej. en \\\`@keydown.enter\\\` y \\\`@blur\\\` del input). No es obligatorio poner \\\`autofocus\\\` en el input: el componente intenta enfocar el primer input/textarea/select al abrir.

**Datos:** cada fila debe tener una propiedad booleana para el estado de edición (aquí \\\`isEditing\\\`).\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider,
      GCellEdit,
      GInput
    },
    setup() {
      const tableData = ref([{
        name: 'Producto A',
        color: '#ff0000',
        customValue: 'Valor 1',
        isEditing: false
      }, {
        name: 'Producto B',
        color: '#00ff00',
        customValue: 'Valor 2',
        isEditing: false
      }, {
        name: 'Producto C',
        color: '#0000ff',
        customValue: 'Valor 3',
        isEditing: false
      }]);
      return {
        tableData
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        <g-table-column prop="name" label="Nombre" />
        
        <g-table-column prop="customValue" label="Custom Edit" width="200">
          <template #default="{ row, column, $index }">
            <g-cell-edit
              v-model="row.isEditing"
              :row="row"
              :column="column"
              :index="$index"
              prop="customValue"
              expand-direction="left"
              expand-colspan="1"
            >
              <template #view="{ toggle }">
                <div class="w-full flex items-center justify-between">
                  <span>{{ row.customValue }}</span>
                </div>
              </template>
              
              <template #edit="{ close }">
                 <div class="flex items-center gap-2 w-full px-2">
                    <g-input v-model="row.customValue" size="small" @keydown.enter="close" @blur="close" autofocus class="w-full" />
                 </div>
              </template>
            </g-cell-edit>
          </template>
        </g-table-column>
        
        <g-table-column prop="color" label="Otro Campo" />
      </g-table>
    </g-config-provider>\`
  })
}`,...St.parameters?.docs?.source}}};Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
  name: 'Expansión hacia la derecha (expand-direction="right")',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** cuando la celda editable está a la izquierda o en el centro y quiere que el overlay ocupe más espacio hacia la derecha (p. ej. comentarios largos).

**Qué demuestra:** \\\`expand-direction="right"\\\` (por defecto) y \\\`expand-colspan="3"\\\`: al editar, el overlay abarca la celda actual y 2 columnas más a la derecha. El overlay no se desplaza (\\\`leftOffset\\\` = 0). Configure \\\`expandColspan\\\` en \\\`useTableCellInput\\\` o \\\`expand-colspan\\\` en \\\`GTableColumn\\\`.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider
    },
    setup() {
      const tableData = ref([{
        name: 'A',
        comment: 'Texto corto',
        extra: 'Col extra'
      }, {
        name: 'B',
        comment: '',
        extra: ''
      }, {
        name: 'C',
        comment: 'Otro comentario largo para ver expansión',
        extra: ''
      }]);
      const {
        cellOptions
      } = useTableCellInput(tableData, {
        placeholder: 'Editar...',
        useRowIndex: true,
        expandColspan: 3,
        expandDirection: 'right'
      });
      return {
        tableData,
        cellOptions
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="120" />
        <g-table-column prop="name" label="Col 2" width="120" />
        <g-table-column
          prop="comment"
          label="Comentario (expand right 3)"
          cell-type="input"
          expand-colspan="3"
          expand-direction="right"
          :cell-options="cellOptions"
        />
        <g-table-column prop="extra" label="Col 4" width="120" />
        <g-table-column prop="extra" label="Col 5" width="120" />
      </g-table>
    </g-config-provider>\`
  })
}`,...Xe.parameters?.docs?.source},description:{story:"Casos de uso: expansión configurable (expand-colspan, expand-direction).",...Xe.parameters?.docs?.description}}};Et.parameters={...Et.parameters,docs:{...Et.parameters?.docs,source:{originalSource:`{
  name: 'Expansión hacia la izquierda (expand-direction="left")',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** cuando la celda editable está a la derecha o es una de las últimas columnas y quiere que el overlay crezca hacia la izquierda (evitar que se salga por la derecha).

**Qué demuestra:** \\\`expand-direction="left"\\\` y \\\`expand-colspan="2"\\\`: al editar, el overlay abarca la columna anterior y la actual; se desplaza a la izquierda (\\\`leftOffset\\\` > 0). Configure \\\`expandDirection: 'left'\\\` y \\\`expandColspan\\\` en \\\`useTableCellInput\\\` o las props equivalentes en \\\`GTableColumn\\\`.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider
    },
    setup() {
      const tableData = ref([{
        name: 'A',
        comment: 'Texto',
        notes: 'Notas'
      }, {
        name: 'B',
        comment: '',
        notes: ''
      }, {
        name: 'C',
        comment: 'Ver expansión a la izquierda',
        notes: ''
      }]);
      const {
        cellOptions
      } = useTableCellInput(tableData, {
        placeholder: 'Editar...',
        useRowIndex: true,
        expandColspan: 2,
        expandDirection: 'left'
      });
      return {
        tableData,
        cellOptions
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="120" />
        <g-table-column prop="notes" label="Notas" width="140" />
        <g-table-column
          prop="comment"
          label="Comentario (expand left 2)"
          cell-type="input"
          expand-colspan="2"
          expand-direction="left"
          :cell-options="cellOptions"
        />
        <g-table-column prop="name" label="Col 4" width="120" />
      </g-table>
    </g-config-provider>\`
  })
}`,...Et.parameters?.docs?.source}}};Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`{
  name: 'Última columna editable (siempre expande a la izquierda)',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** tabla donde la última columna es editable (p. ej. notas, comentarios). El componente fuerza expansión a la izquierda para no salirse del borde derecho.

**Qué demuestra:** cuando la celda editable es la **última columna**, el overlay siempre expande hacia la **izquierda**; no hace falta indicar \\\`expand-direction\\\` en este caso. Combine con \\\`expand-colspan\\\` si quiere abarcar más de una columna.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider
    },
    setup() {
      const tableData = ref([{
        name: 'María',
        status: 'active',
        notes: 'Revisar presupuesto Q4'
      }, {
        name: 'Juan',
        status: 'pending',
        notes: ''
      }, {
        name: 'Ana',
        status: 'inactive',
        notes: 'Seguimiento con cliente'
      }]);
      const {
        cellOptions: statusCellOptions
      } = useTableCellSelect(tableData, {
        options: [{
          value: 'active',
          title: 'Activo'
        }, {
          value: 'pending',
          title: 'Pendiente'
        }, {
          value: 'inactive',
          title: 'Inactivo'
        }],
        useRowIndex: true
      });
      const {
        cellOptions: notesCellOptions
      } = useTableCellInput(tableData, {
        placeholder: 'Notas (última columna)...',
        useRowIndex: true
      });
      return {
        tableData,
        statusCellOptions,
        notesCellOptions
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="140" />
        <g-table-column
          prop="status"
          label="Estado"
          width="140"
          cell-type="select"
          :cell-options="statusCellOptions"
        />
        <g-table-column
          prop="notes"
          label="Notas (última columna)"
          cell-type="input"
          :cell-options="notesCellOptions"
        />
      </g-table>
    </g-config-provider>\`
  })
}`,...Tt.parameters?.docs?.source}}};At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`{
  name: 'Todos los casos de expansión en una tabla',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** referencia rápida de los tres comportamientos de expansión en una sola tabla.

**Qué demuestra:** **Col 3** — \\\`expand-direction="right"\\\` y \\\`expand-colspan="3"\\\` (overlay a la derecha). **Col 5** — \\\`expand-direction="left"\\\` y \\\`expand-colspan="2"\\\` (overlay a la izquierda). **Col 7** — última columna; siempre expande a la izquierda sin configurar \\\`expand-direction\\\`.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider
    },
    setup() {
      const tableData = ref([{
        id: 1,
        a: 'A1',
        b: 'B1',
        commentRight: 'Expand right 3',
        d: 'D1',
        commentLeft: 'Expand left 2',
        f: 'F1',
        lastCol: 'Última col'
      }, {
        id: 2,
        a: 'A2',
        b: 'B2',
        commentRight: '',
        d: 'D2',
        commentLeft: '',
        f: 'F2',
        lastCol: ''
      }, {
        id: 3,
        a: 'A3',
        b: 'B3',
        commentRight: 'Texto largo para ver overlay',
        d: 'D3',
        commentLeft: 'Overlay a la izquierda',
        f: 'F3',
        lastCol: 'Siempre left'
      }]);
      const {
        cellOptions: rightOptions
      } = useTableCellInput(tableData, {
        placeholder: 'Editar (right 3)...',
        useRowIndex: true,
        expandColspan: 3,
        expandDirection: 'right'
      });
      const {
        cellOptions: leftOptions
      } = useTableCellInput(tableData, {
        placeholder: 'Editar (left 2)...',
        useRowIndex: true,
        expandColspan: 2,
        expandDirection: 'left'
      });
      const {
        cellOptions: lastOptions
      } = useTableCellInput(tableData, {
        placeholder: 'Última col...',
        useRowIndex: true
      });
      return {
        tableData,
        rightOptions,
        leftOptions,
        lastOptions
      };
    },
    template: \`
    <g-config-provider>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="a" label="Col 1" width="90" />
        <g-table-column prop="b" label="Col 2" width="90" />
        <g-table-column
          prop="commentRight"
          label="Col 3 (right 3)"
          cell-type="input"
          expand-colspan="3"
          expand-direction="right"
          :cell-options="rightOptions"
        />
        <g-table-column prop="d" label="Col 4" width="90" />
        <g-table-column
          prop="commentLeft"
          label="Col 5 (left 2)"
          cell-type="input"
          expand-colspan="2"
          expand-direction="left"
          :cell-options="leftOptions"
        />
        <g-table-column prop="f" label="Col 6" width="90" />
        <g-table-column
          prop="lastCol"
          label="Col 7 (última)"
          cell-type="input"
          :cell-options="lastOptions"
        />
      </g-table>
    </g-config-provider>\`
  })
}`,...At.parameters?.docs?.source}}};Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`{
  name: 'Celda con validación (rules)',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** columnas tipo input donde el valor debe cumplir reglas (requerido, email, rango, etc.) antes de considerar la edición válida.

**Qué demuestra:** pase \\\`rules\\\` en las opciones de \\\`useTableCellInput\\\` (compatible con \\\`async-validator\\\` y \\\`GForm\\\`). La tabla emite \\\`cell-edit-validate\\\` con \\\`{ valid, message }\\\`. Opcionales: \\\`onValidationFailed\\\`, \\\`onValidationSuccess\\\` y la API \\\`validation.clearAllValidation()\\\` para limpiar errores.

**Características:**
- Validación en \\\`blur\\\` (al salir de la celda) y/o \\\`change\\\` (al escribir)
- Mensajes de error personalizados
- Estados visuales de error
- API para limpiar validación programáticamente

**Reglas disponibles:**
- \\\`required\\\`: Campo requerido
- \\\`type\\\`: Tipo de dato (email, url, number, etc.)
- \\\`min/max\\\`: Longitud mínima/máxima
- \\\`pattern\\\`: Expresión regular
- \\\`validator\\\`: Función de validación personalizada

**Ejemplo de implementación:**

\\\`\\\`\\\`vue
<template>
  <g-table :data="tableData">
    <g-table-column
      prop="email"
      label="Email"
      cell-type="input"
      :cell-options="emailCellOptions"
    />
  </g-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GTable, GTableColumn, useTableCellInput } from '@flash-global66/g-table'

const tableData = ref([
  { id: 1, name: 'Juan', email: '' },
  { id: 2, name: 'María', email: 'maria@example.com' }
])

const { cellOptions: emailCellOptions, validation } = useTableCellInput(tableData, {
  label: 'Email',
  placeholder: 'correo@ejemplo.com',
  rules: [
    { required: true, message: 'El email es requerido', trigger: 'blur' },
    { type: 'email', message: 'Ingresa un email válido', trigger: 'blur' }
  ],
  useRowIndex: true,
  onValidationFailed: (errors, row, prop, index) => {
    console.log('Validación fallida:', errors)
  }
})

// Limpiar validación programáticamente
const clearAllErrors = () => validation?.clearAllValidation()
<\/script>
\\\`\\\`\\\`\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider,
      GButton
    },
    setup() {
      const tableData = ref([{
        id: 1,
        name: 'Juan Pérez',
        email: '',
        age: '',
        website: ''
      }, {
        id: 2,
        name: 'María García',
        email: 'maria@example.com',
        age: '28',
        website: 'https://maria.dev'
      }, {
        id: 3,
        name: 'Carlos López',
        email: 'carlos-invalid',
        age: '150',
        website: 'not-a-url'
      }, {
        id: 4,
        name: 'Ana Martínez',
        email: '',
        age: '',
        website: ''
      }]);
      const {
        cellOptions: emailCellOptions,
        validation: emailValidation
      } = useTableCellInput(tableData, {
        label: 'Email',
        placeholder: 'correo@ejemplo.com',
        emptyActionText: 'Agregar email',
        rules: [{
          required: true,
          message: 'El email es requerido',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Ingresa un email válido',
          trigger: 'blur'
        }],
        useRowIndex: true,
        onValidationFailed: (errors, row, prop, index) => {
          console.log('Email validación fallida:', {
            errors,
            row,
            prop,
            index
          });
        }
      });
      const {
        cellOptions: ageCellOptions,
        validation: ageValidation
      } = useTableCellInput(tableData, {
        label: 'Edad',
        placeholder: '18-120',
        emptyActionText: 'Agregar edad',
        type: 'number',
        rules: [{
          required: true,
          message: 'La edad es requerida',
          trigger: 'blur'
        }, {
          type: 'number',
          transform: (value: string) => Number(value),
          message: 'Debe ser un número',
          trigger: 'blur'
        }, {
          type: 'number',
          transform: (value: string) => Number(value),
          min: 18,
          max: 120,
          message: 'La edad debe estar entre 18 y 120',
          trigger: 'blur'
        }],
        useRowIndex: true
      });
      const {
        cellOptions: websiteCellOptions,
        validation: websiteValidation
      } = useTableCellInput(tableData, {
        label: 'Sitio web',
        placeholder: 'https://ejemplo.com',
        emptyActionText: 'Agregar URL',
        rules: [{
          type: 'url',
          message: 'Ingresa una URL válida (ej: https://...)',
          trigger: 'blur'
        }],
        useRowIndex: true
      });
      const clearAllValidations = () => {
        emailValidation?.clearAllValidation();
        ageValidation?.clearAllValidation();
        websiteValidation?.clearAllValidation();
      };
      return {
        tableData,
        emailCellOptions,
        ageCellOptions,
        websiteCellOptions,
        clearAllValidations
      };
    },
    template: \`
    <g-config-provider>
      <div class="mb-md">
        <g-button @click="clearAllValidations">Limpiar validaciones</g-button>
      </div>
      <g-table :data="tableData" border style="width: 100%" :cell-style="{ zIndex: 'auto' }">
        <g-table-column prop="name" label="Nombre" width="160" />
        <g-table-column
          prop="email"
          label="Email (required + email)"
          width="220"
          cell-type="input"
          :cell-options="emailCellOptions"
        />
        <g-table-column
          prop="age"
          label="Edad (18-120)"
          width="150"
          cell-type="input"
          :cell-options="ageCellOptions"
        />
        <g-table-column
          prop="website"
          label="Website (URL)"
          width="220"
          cell-type="input"
          :cell-options="websiteCellOptions"
        />
      </g-table>
      <div class="mt-md text-gray-500 text-3">
        <p><strong>Instrucciones:</strong> Haz click en una celda para editarla. Al salir (blur), se validará el contenido.</p>
        <p>Prueba dejando campos vacíos, ingresando emails inválidos, edades fuera de rango, o URLs mal formadas.</p>
      </div>
    </g-config-provider>\`
  })
}`,...Ot.parameters?.docs?.source}}};Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`{
  name: 'Eventos de celdas editables',
  parameters: {
    docs: {
      description: {
        story: \`**Cuándo usar:** cuando necesita reaccionar a apertura/cierre/cambio de celdas editables (analytics, sincronizar con backend, mostrar mensajes).

**Qué demuestra:** la tabla emite estos eventos cuando se usan celdas editables (tanto con \\\`cell-type\\\` como con \\\`GCellEdit\\\`):

| Evento | Cuándo se emite | Parámetros |
|--------|------------------|------------|
| \\\`cell-edit-open\\\` | La celda entra en modo edición (click o foco) | \\\`(row, column)\\\` |
| \\\`cell-edit-close\\\` | La celda sale de modo edición (blur, Enter o clic fuera) | \\\`(row, column)\\\` |
| \\\`cell-edit-change\\\` | El valor de la celda cambió (input o select) | \\\`(row, column, newValue, oldValue)\\\` |
| \\\`cell-edit-validate\\\` | Terminó la validación de la celda (solo si hay reglas) | \\\`(row, column, result)\\\` con \\\`result.valid\\\` y \\\`result.message\\\` |

Útil para sincronizar estado, analytics o validación externa. En esta historia se registran los últimos eventos en el panel derecho.\`
      }
    }
  },
  render: () => ({
    components: {
      GTable,
      GTableColumn,
      GConfigProvider
    },
    setup() {
      const tableData = ref([{
        id: 1,
        name: 'Tom',
        status: 'active',
        note: ''
      }, {
        id: 2,
        name: 'Jane',
        status: 'inactive',
        note: ''
      }]);
      const eventsLog = ref<Array<{
        event: string;
        payload: string;
      }>>([]);
      const maxLog = 12;
      const pushLog = (event: string, ...args: unknown[]) => {
        const payload = args.map(a => typeof a === 'object' && a !== null && 'property' in a ? \`column.\${(a as {
          property?: string;
        }).property}\` : String(a)).join(', ');
        eventsLog.value = [{
          event,
          payload
        }, ...eventsLog.value].slice(0, maxLog);
      };
      const onCellEditOpen = (row: unknown, column: unknown) => {
        pushLog('cell-edit-open', row, column);
      };
      const onCellEditClose = (row: unknown, column: unknown) => {
        pushLog('cell-edit-close', row, column);
      };
      const onCellEditChange = (row: unknown, column: unknown, newVal: unknown, oldVal: unknown) => {
        pushLog('cell-edit-change', row, column, String(oldVal) + ' -> ' + String(newVal));
      };
      const onCellEditValidate = (row: unknown, column: unknown, result: {
        valid: boolean;
        message: string;
      }) => {
        pushLog('cell-edit-validate', row, column, result.valid ? 'valid' : result.message);
      };
      const statusOptions = [{
        value: 'active',
        title: 'Activo'
      }, {
        value: 'inactive',
        title: 'Inactivo'
      }];
      const {
        cellOptions: statusCellOptions
      } = useTableCellSelect(tableData, {
        options: statusOptions,
        useRowIndex: true
      });
      const {
        cellOptions: noteCellOptions
      } = useTableCellInput(tableData, {
        placeholder: 'Nota',
        useRowIndex: true
      });
      return {
        tableData,
        eventsLog,
        onCellEditOpen,
        onCellEditClose,
        onCellEditChange,
        onCellEditValidate,
        statusCellOptions,
        noteCellOptions
      };
    },
    template: \`
    <g-config-provider>
      <div class="flex gap-md">
        <div class="flex-1 min-w-0">
          <g-table
            :data="tableData"
            border
            style="width: 100%"
            :cell-style="{ zIndex: 'auto' }"
            @cell-edit-open="onCellEditOpen"
            @cell-edit-close="onCellEditClose"
            @cell-edit-change="onCellEditChange"
            @cell-edit-validate="onCellEditValidate"
          >
            <g-table-column prop="name" label="Nombre" width="120" />
            <g-table-column
              prop="status"
              label="Estado"
              width="140"
              cell-type="select"
              :cell-options="statusCellOptions"
            />
            <g-table-column
              prop="note"
              label="Nota"
              cell-type="input"
              :cell-options="noteCellOptions"
            />
          </g-table>
        </div>
        <div class="w-72 flex-shrink-0">
          <p class="font-medium text-3 mb-xs">Últimos eventos</p>
          <ul class="text-2 space-y-xxs text-gray-600">
            <li v-for="(entry, i) in eventsLog" :key="i" class="font-mono truncate" :title="entry.payload">
              <span class="text-primary-txt font-medium">{{ entry.event }}</span>
            </li>
            <li v-if="eventsLog.length === 0" class="text-gray-400">Interactúa con las celdas editables</li>
          </ul>
        </div>
      </div>
    </g-config-provider>\`
  })
}`,...Ft.parameters?.docs?.source}}};const Zr=["Basic","prefixAndSuffix","withStatus","withFixed","withLongHeader","selectabale","collapse","withLazyAndLoad","withTooltipFormatter","tableEditable","TableCellSelect","TableCellInput","CustomCellEdit","TableCellExpandRight","TableCellExpandLeft","TableCellExpandLastColumn","TableCellExpandAllCases","TableCellValidation","TableCellEditEvents"];export{pt as Basic,St as CustomCellEdit,Ft as TableCellEditEvents,At as TableCellExpandAllCases,Tt as TableCellExpandLastColumn,Et as TableCellExpandLeft,Xe as TableCellExpandRight,xt as TableCellInput,Je as TableCellSelect,Ot as TableCellValidation,Zr as __namedExportsOrder,ht as collapse,Qr as default,mt as prefixAndSuffix,yt as selectabale,wt as tableEditable,gt as withFixed,vt as withLazyAndLoad,bt as withLongHeader,ft as withStatus,Ct as withTooltipFormatter};
