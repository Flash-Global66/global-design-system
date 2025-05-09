import{S as he,J as rt,d as Ve,c as F,w as Ce,E as pt,H as Ze,X as Ca,t as U,s as fe,l as w,u as n,G as It,e as Y,r as H,o as na,a as _e,C as nn,k as j,m as me,D as Ae,x as ve,a6 as ra,a4 as oa,L as Zn,n as mt,p as Zt,b as Te,j as Ye,Y as Jn,W as Ue,Z as Qn,z as ut,F as Me,y as qe,a0 as Xn,a1 as er,h as ie,a2 as St,U as We,v as nt,g as rn,f as Ke,K as Dt,an as qa,ad as _a,T as tr}from"./vue.esm-bundler-CAwYpNIe.js";import{C as fa,z as ke,q as ue,a as Se,a9 as la,B as Tt,K as on,p as Ra,b as pa,P as ar,w as He,aa as sn,s as nr,x as rr,A as or,G as vt}from"./ConfigProvider-BOxJGivF.js";import{c as va}from"./castArray-CWz00HzK.js";import{d as ft}from"./error-Cq9Fpw4b.js";import{u as ln}from"./index-D91dGCGa.js";import{c as Ya,H as un,Y as cn,G as Ma}from"./index-Cgifd4Ll.js";import{r as sr}from"./index-DXAv6EHR.js";import{u as Ea,o as lr,b as ir}from"./index-74eOLZtx.js";import{f as be}from"./index-DDhz3fsR.js";import{U as xt,C as ur}from"./event-BB_Ol6Sd.js";import{u as Fa,f as cr}from"./index-DYisi-wq.js";import{m as dr}from"./typescript-Bp3YSIOJ.js";import{u as dn,a as mr,r as ct}from"./index-5BvObzGO.js";import{a as Va,u as fr}from"./index-BRyFEOsx.js";import{G as gt}from"./index-DGEn-NbS.js";import{p as pr,G as vr}from"./index-DCDz1a3K.js";import{a as gr}from"./index-B0s87opd.js";import{G as Ba}from"./index-BiK7YS5j.js";import{a as hr,P as br,d as W,s as mn,U as ga,l as fn,r as pn,o as yr,E as kr,B as wr,q as Dr,v as ja,b as ia}from"./index-D-dVcw9o.js";import{c as tt,g as ot}from"./_commonjsHelpers-Cpj98o6Y.js";import{Q as Sr,b as xr}from"./index-Cg4qJCZ6.js";import{_ as Pr}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{h as Jt,g as Cr}from"./style-ByBodnvE.js";import{C as ha}from"./index-CwO_BqJW.js";import{E as Fe}from"./index-DyHzSxrf.js";import{y as Ga}from"./index-P3S_mHJ6.js";import{c as Rr}from"./index-BRetqTcT.js";import{i as Mr}from"./isEqual-CRmxC7Tv.js";import{d as Er}from"./debounce-CUXvhmnF.js";import"./index-DHlulF0o.js";import"./_initCloneObject-Q0zbkYJq.js";import"./_arrayPush-DLozo812.js";import"./index-Bos-aENE.js";import"./index-CJRGzAfa.js";import"./content-CIlOOtcw.js";import"./index-DKM-uKBx.js";import"./dynamic-size-list-BuO7WYii.js";import"./raf-CDlJDc0c.js";import"./util-B2mB0_6C.js";import"./icon-Brx2ZkXR.js";import"./use-form-common-props-DL7i2zWq.js";import"./constants-Dnj8X3EN.js";import"./isArrayLikeObject-BvdpqYQi.js";import"./index-CfncYtRd.js";import"./index-BZoaT_Nw.js";import"./use-form-item-Uxm-S5ZD.js";var vn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e,o){var s=e.prototype,l=function(d){return d&&(d.indexOf?d:d.s)},i=function(d,S,x,D,p){var f=d.name?d:d.$locale(),h=l(f[S]),k=l(f[x]),u=h||k.map(function(P){return P.slice(0,D)});if(!p)return u;var I=f.weekStart;return u.map(function(P,V){return u[(V+(I||0))%7]})},v=function(){return o.Ls[o.locale()]},b=function(d,S){return d.formats[S]||function(x){return x.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,p,f){return p||f.slice(1)})}(d.formats[S.toUpperCase()])},m=function(){var d=this;return{months:function(S){return S?S.format("MMMM"):i(d,"months")},monthsShort:function(S){return S?S.format("MMM"):i(d,"monthsShort","months",3)},firstDayOfWeek:function(){return d.$locale().weekStart||0},weekdays:function(S){return S?S.format("dddd"):i(d,"weekdays")},weekdaysMin:function(S){return S?S.format("dd"):i(d,"weekdaysMin","weekdays",2)},weekdaysShort:function(S){return S?S.format("ddd"):i(d,"weekdaysShort","weekdays",3)},longDateFormat:function(S){return b(d.$locale(),S)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};s.localeData=function(){return m.bind(this)()},o.localeData=function(){var d=v();return{firstDayOfWeek:function(){return d.weekStart||0},weekdays:function(){return o.weekdays()},weekdaysShort:function(){return o.weekdaysShort()},weekdaysMin:function(){return o.weekdaysMin()},months:function(){return o.months()},monthsShort:function(){return o.monthsShort()},longDateFormat:function(S){return b(d,S)},meridiem:d.meridiem,ordinal:d.ordinal}},o.months=function(){return i(v(),"months")},o.monthsShort=function(){return i(v(),"monthsShort","months",3)},o.weekdays=function(d){return i(v(),"weekdays",null,null,d)},o.weekdaysShort=function(d){return i(v(),"weekdaysShort","weekdays",3,d)},o.weekdaysMin=function(d){return i(v(),"weekdaysMin","weekdays",2,d)}}})})(vn);var Fr=vn.exports;const Vr=ot(Fr),Ir=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],je=r=>!r&&r!==0?[]:he(r)?r:[r];var gn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,o=/\d/,s=/\d\d/,l=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,v={},b=function(f){return(f=+f)+(f>68?1900:2e3)},m=function(f){return function(h){this[f]=+h}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var k=h.match(/([+-]|\d\d)/g),u=60*k[1]+(+k[2]||0);return u===0?0:k[0]==="+"?-u:u}(f)}],S=function(f){var h=v[f];return h&&(h.indexOf?h:h.s.concat(h.f))},x=function(f,h){var k,u=v.meridiem;if(u){for(var I=1;I<=24;I+=1)if(f.indexOf(u(I,0,h))>-1){k=I>12;break}}else k=f===(h?"pm":"PM");return k},D={A:[i,function(f){this.afternoon=x(f,!1)}],a:[i,function(f){this.afternoon=x(f,!0)}],Q:[o,function(f){this.month=3*(f-1)+1}],S:[o,function(f){this.milliseconds=100*+f}],SS:[s,function(f){this.milliseconds=10*+f}],SSS:[/\d{3}/,function(f){this.milliseconds=+f}],s:[l,m("seconds")],ss:[l,m("seconds")],m:[l,m("minutes")],mm:[l,m("minutes")],H:[l,m("hours")],h:[l,m("hours")],HH:[l,m("hours")],hh:[l,m("hours")],D:[l,m("day")],DD:[s,m("day")],Do:[i,function(f){var h=v.ordinal,k=f.match(/\d+/);if(this.day=k[0],h)for(var u=1;u<=31;u+=1)h(u).replace(/\[|\]/g,"")===f&&(this.day=u)}],w:[l,m("week")],ww:[s,m("week")],M:[l,m("month")],MM:[s,m("month")],MMM:[i,function(f){var h=S("months"),k=(S("monthsShort")||h.map(function(u){return u.slice(0,3)})).indexOf(f)+1;if(k<1)throw new Error;this.month=k%12||k}],MMMM:[i,function(f){var h=S("months").indexOf(f)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,m("year")],YY:[s,function(f){this.year=b(f)}],YYYY:[/\d{4}/,m("year")],Z:d,ZZ:d};function p(f){var h,k;h=f,k=v&&v.formats;for(var u=(f=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(_,K,M){var X=M&&M.toUpperCase();return K||k[M]||a[M]||k[X].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Q,z,ae){return z||ae.slice(1)})})).match(e),I=u.length,P=0;P<I;P+=1){var V=u[P],A=D[V],T=A&&A[0],$=A&&A[1];u[P]=$?{regex:T,parser:$}:V.replace(/^\[|\]$/g,"")}return function(_){for(var K={},M=0,X=0;M<I;M+=1){var Q=u[M];if(typeof Q=="string")X+=Q.length;else{var z=Q.regex,ae=Q.parser,se=_.slice(X),L=z.exec(se)[0];ae.call(K,L),_=_.replace(L,"")}}return function(C){var N=C.afternoon;if(N!==void 0){var O=C.hours;N?O<12&&(C.hours+=12):O===12&&(C.hours=0),delete C.afternoon}}(K),K}}return function(f,h,k){k.p.customParseFormat=!0,f&&f.parseTwoDigitYear&&(b=f.parseTwoDigitYear);var u=h.prototype,I=u.parse;u.parse=function(P){var V=P.date,A=P.utc,T=P.args;this.$u=A;var $=T[1];if(typeof $=="string"){var _=T[2]===!0,K=T[3]===!0,M=_||K,X=T[2];K&&(X=T[2]),v=this.$locale(),!_&&X&&(v=k.Ls[X]),this.$d=function(se,L,C,N){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*se);var O=p(L)(se),E=O.year,G=O.month,R=O.day,q=O.hours,Z=O.minutes,oe=O.seconds,Re=O.milliseconds,Ne=O.zone,Be=O.week,ee=new Date,te=R||(E||G?1:ee.getDate()),ce=E||ee.getFullYear(),B=0;E&&!G||(B=G>0?G-1:ee.getMonth());var le,de=q||0,we=Z||0,xe=oe||0,Ie=Re||0;return Ne?new Date(Date.UTC(ce,B,te,de,we,xe,Ie+60*Ne.offset*1e3)):C?new Date(Date.UTC(ce,B,te,de,we,xe,Ie)):(le=new Date(ce,B,te,de,we,xe,Ie),Be&&(le=N(le).week(Be).toDate()),le)}catch{return new Date("")}}(V,$,A,k),this.init(),X&&X!==!0&&(this.$L=this.locale(X).$L),M&&V!=this.format($)&&(this.$d=new Date("")),v={}}else if($ instanceof Array)for(var Q=$.length,z=1;z<=Q;z+=1){T[1]=$[z-1];var ae=k.apply(this,T);if(ae.isValid()){this.$d=ae.$d,this.$L=ae.$L,this.init();break}z===Q&&(this.$d=new Date(""))}else I.call(this,P)}}})})(gn);var $r=gn.exports;const hn=ot($r);var bn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){var o=e.prototype,s=o.format;o.format=function(l){var i=this,v=this.$locale();if(!this.isValid())return s.bind(this)(l);var b=this.$utils(),m=(l||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(d){switch(d){case"Q":return Math.ceil((i.$M+1)/3);case"Do":return v.ordinal(i.$D);case"gggg":return i.weekYear();case"GGGG":return i.isoWeekYear();case"wo":return v.ordinal(i.week(),"W");case"w":case"ww":return b.s(i.week(),d==="w"?1:2,"0");case"W":case"WW":return b.s(i.isoWeek(),d==="W"?1:2,"0");case"k":case"kk":return b.s(String(i.$H===0?24:i.$H),d==="k"?1:2,"0");case"X":return Math.floor(i.$d.getTime()/1e3);case"x":return i.$d.getTime();case"z":return"["+i.offsetName()+"]";case"zzz":return"["+i.offsetName("long")+"]";default:return d}});return s.bind(this)(m)}}})})(bn);var Or=bn.exports;const Tr=ot(Or);var yn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){var a="week",e="year";return function(o,s,l){var i=s.prototype;i.week=function(v){if(v===void 0&&(v=null),v!==null)return this.add(7*(v-this.week()),"day");var b=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var m=l(this).startOf(e).add(1,e).date(b),d=l(this).endOf(a);if(m.isBefore(d))return 1}var S=l(this).startOf(e).date(b).startOf(a).subtract(1,"millisecond"),x=this.diff(S,a,!0);return x<0?l(this).startOf("week").week():Math.ceil(x)},i.weeks=function(v){return v===void 0&&(v=null),this.week(v)}}})})(yn);var Nr=yn.exports;const Ar=ot(Nr);var kn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.weekYear=function(){var o=this.month(),s=this.week(),l=this.year();return s===1&&o===11?l+1:o===0&&s>=52?l-1:l}}})})(kn);var Lr=kn.exports;const qr=ot(Lr);var wn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e,o){e.prototype.dayOfYear=function(s){var l=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?l:this.add(s-l,"day")}}})})(wn);var _r=wn.exports;const Yr=ot(_r);var Dn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(Dn);var Br=Dn.exports;const jr=ot(Br);var Sn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(Sn);var Gr=Sn.exports;const Hr=ot(Gr);function dt(){return dt=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(r[e]=a[e])}return r},dt.apply(this,arguments)}function Kr(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,$t(r,t)}function ba(r){return ba=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},ba(r)}function $t(r,t){return $t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},$t(r,t)}function Ur(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Wt(r,t,a){return Ur()?Wt=Reflect.construct.bind():Wt=function(o,s,l){var i=[null];i.push.apply(i,s);var v=Function.bind.apply(o,i),b=new v;return l&&$t(b,l.prototype),b},Wt.apply(null,arguments)}function zr(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function ya(r){var t=typeof Map=="function"?new Map:void 0;return ya=function(e){if(e===null||!zr(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return Wt(e,arguments,ba(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),$t(o,e)},ya(r)}var Wr=/%[sdj%]/g,Zr=function(){};function ka(r){if(!r||!r.length)return null;var t={};return r.forEach(function(a){var e=a.field;t[e]=t[e]||[],t[e].push(a)}),t}function Ge(r){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var o=0,s=a.length;if(typeof r=="function")return r.apply(null,a);if(typeof r=="string"){var l=r.replace(Wr,function(i){if(i==="%%")return"%";if(o>=s)return i;switch(i){case"%s":return String(a[o++]);case"%d":return Number(a[o++]);case"%j":try{return JSON.stringify(a[o++])}catch{return"[Circular]"}break;default:return i}});return l}return r}function Jr(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function Oe(r,t){return!!(r==null||t==="array"&&Array.isArray(r)&&!r.length||Jr(t)&&typeof r=="string"&&!r)}function Qr(r,t,a){var e=[],o=0,s=r.length;function l(i){e.push.apply(e,i||[]),o++,o===s&&a(e)}r.forEach(function(i){t(i,l)})}function Ha(r,t,a){var e=0,o=r.length;function s(l){if(l&&l.length){a(l);return}var i=e;e=e+1,i<o?t(r[i],s):a([])}s([])}function Xr(r){var t=[];return Object.keys(r).forEach(function(a){t.push.apply(t,r[a]||[])}),t}var Ka=function(r){Kr(t,r);function t(a,e){var o;return o=r.call(this,"Async Validation Error")||this,o.errors=a,o.fields=e,o}return t}(ya(Error));function eo(r,t,a,e,o){if(t.first){var s=new Promise(function(S,x){var D=function(h){return e(h),h.length?x(new Ka(h,ka(h))):S(o)},p=Xr(r);Ha(p,a,D)});return s.catch(function(S){return S}),s}var l=t.firstFields===!0?Object.keys(r):t.firstFields||[],i=Object.keys(r),v=i.length,b=0,m=[],d=new Promise(function(S,x){var D=function(f){if(m.push.apply(m,f),b++,b===v)return e(m),m.length?x(new Ka(m,ka(m))):S(o)};i.length||(e(m),S(o)),i.forEach(function(p){var f=r[p];l.indexOf(p)!==-1?Ha(f,a,D):Qr(f,a,D)})});return d.catch(function(S){return S}),d}function to(r){return!!(r&&r.message!==void 0)}function ao(r,t){for(var a=r,e=0;e<t.length;e++){if(a==null)return a;a=a[t[e]]}return a}function Ua(r,t){return function(a){var e;return r.fullFields?e=ao(t,r.fullFields):e=t[a.field||r.fullField],to(a)?(a.field=a.field||r.fullField,a.fieldValue=e,a):{message:typeof a=="function"?a():a,fieldValue:e,field:a.field||r.fullField}}}function za(r,t){if(t){for(var a in t)if(t.hasOwnProperty(a)){var e=t[a];typeof e=="object"&&typeof r[a]=="object"?r[a]=dt({},r[a],e):r[a]=e}}return r}var xn=function(t,a,e,o,s,l){t.required&&(!e.hasOwnProperty(t.field)||Oe(a,l||t.type))&&o.push(Ge(s.messages.required,t.fullField))},no=function(t,a,e,o,s){(/^\s+$/.test(a)||a==="")&&o.push(Ge(s.messages.whitespace,t.fullField))},At,ro=function(){if(At)return At;var r="[a-fA-F\\d:]",t=function(I){return I&&I.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},a="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",e="[a-fA-F\\d]{1,4}",o=(`
(?:
(?:`+e+":){7}(?:"+e+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+e+":){6}(?:"+a+"|:"+e+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+e+":){5}(?::"+a+"|(?::"+e+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+e+":){4}(?:(?::"+e+"){0,1}:"+a+"|(?::"+e+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+e+":){3}(?:(?::"+e+"){0,2}:"+a+"|(?::"+e+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+e+":){2}(?:(?::"+e+"){0,3}:"+a+"|(?::"+e+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+e+":){1}(?:(?::"+e+"){0,4}:"+a+"|(?::"+e+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+e+"){0,5}:"+a+"|(?::"+e+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+a+"$)|(?:^"+o+"$)"),l=new RegExp("^"+a+"$"),i=new RegExp("^"+o+"$"),v=function(I){return I&&I.exact?s:new RegExp("(?:"+t(I)+a+t(I)+")|(?:"+t(I)+o+t(I)+")","g")};v.v4=function(u){return u&&u.exact?l:new RegExp(""+t(u)+a+t(u),"g")},v.v6=function(u){return u&&u.exact?i:new RegExp(""+t(u)+o+t(u),"g")};var b="(?:(?:[a-z]+:)?//)",m="(?:\\S+(?::\\S*)?@)?",d=v.v4().source,S=v.v6().source,x="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",D="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",p="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",f="(?::\\d{2,5})?",h='(?:[/?#][^\\s"]*)?',k="(?:"+b+"|www\\.)"+m+"(?:localhost|"+d+"|"+S+"|"+x+D+p+")"+f+h;return At=new RegExp("(?:^"+k+"$)","i"),At},Wa={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Ft={integer:function(t){return Ft.number(t)&&parseInt(t,10)===t},float:function(t){return Ft.number(t)&&!Ft.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!Ft.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(Wa.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(ro())},hex:function(t){return typeof t=="string"&&!!t.match(Wa.hex)}},oo=function(t,a,e,o,s){if(t.required&&a===void 0){xn(t,a,e,o,s);return}var l=["integer","float","array","regexp","object","method","email","number","date","url","hex"],i=t.type;l.indexOf(i)>-1?Ft[i](a)||o.push(Ge(s.messages.types[i],t.fullField,t.type)):i&&typeof a!==t.type&&o.push(Ge(s.messages.types[i],t.fullField,t.type))},so=function(t,a,e,o,s){var l=typeof t.len=="number",i=typeof t.min=="number",v=typeof t.max=="number",b=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,m=a,d=null,S=typeof a=="number",x=typeof a=="string",D=Array.isArray(a);if(S?d="number":x?d="string":D&&(d="array"),!d)return!1;D&&(m=a.length),x&&(m=a.replace(b,"_").length),l?m!==t.len&&o.push(Ge(s.messages[d].len,t.fullField,t.len)):i&&!v&&m<t.min?o.push(Ge(s.messages[d].min,t.fullField,t.min)):v&&!i&&m>t.max?o.push(Ge(s.messages[d].max,t.fullField,t.max)):i&&v&&(m<t.min||m>t.max)&&o.push(Ge(s.messages[d].range,t.fullField,t.min,t.max))},wt="enum",lo=function(t,a,e,o,s){t[wt]=Array.isArray(t[wt])?t[wt]:[],t[wt].indexOf(a)===-1&&o.push(Ge(s.messages[wt],t.fullField,t[wt].join(", ")))},io=function(t,a,e,o,s){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(a)||o.push(Ge(s.messages.pattern.mismatch,t.fullField,a,t.pattern));else if(typeof t.pattern=="string"){var l=new RegExp(t.pattern);l.test(a)||o.push(Ge(s.messages.pattern.mismatch,t.fullField,a,t.pattern))}}},pe={required:xn,whitespace:no,type:oo,range:so,enum:lo,pattern:io},uo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a,"string")&&!t.required)return e();pe.required(t,a,o,l,s,"string"),Oe(a,"string")||(pe.type(t,a,o,l,s),pe.range(t,a,o,l,s),pe.pattern(t,a,o,l,s),t.whitespace===!0&&pe.whitespace(t,a,o,l,s))}e(l)},co=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),a!==void 0&&pe.type(t,a,o,l,s)}e(l)},mo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(a===""&&(a=void 0),Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),a!==void 0&&(pe.type(t,a,o,l,s),pe.range(t,a,o,l,s))}e(l)},fo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),a!==void 0&&pe.type(t,a,o,l,s)}e(l)},po=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),Oe(a)||pe.type(t,a,o,l,s)}e(l)},vo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),a!==void 0&&(pe.type(t,a,o,l,s),pe.range(t,a,o,l,s))}e(l)},go=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),a!==void 0&&(pe.type(t,a,o,l,s),pe.range(t,a,o,l,s))}e(l)},ho=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(a==null&&!t.required)return e();pe.required(t,a,o,l,s,"array"),a!=null&&(pe.type(t,a,o,l,s),pe.range(t,a,o,l,s))}e(l)},bo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),a!==void 0&&pe.type(t,a,o,l,s)}e(l)},yo="enum",ko=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s),a!==void 0&&pe[yo](t,a,o,l,s)}e(l)},wo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a,"string")&&!t.required)return e();pe.required(t,a,o,l,s),Oe(a,"string")||pe.pattern(t,a,o,l,s)}e(l)},Do=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a,"date")&&!t.required)return e();if(pe.required(t,a,o,l,s),!Oe(a,"date")){var v;a instanceof Date?v=a:v=new Date(a),pe.type(t,v,o,l,s),v&&pe.range(t,v.getTime(),o,l,s)}}e(l)},So=function(t,a,e,o,s){var l=[],i=Array.isArray(a)?"array":typeof a;pe.required(t,a,o,l,s,i),e(l)},ua=function(t,a,e,o,s){var l=t.type,i=[],v=t.required||!t.required&&o.hasOwnProperty(t.field);if(v){if(Oe(a,l)&&!t.required)return e();pe.required(t,a,o,i,s,l),Oe(a,l)||pe.type(t,a,o,i,s)}e(i)},xo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();pe.required(t,a,o,l,s)}e(l)},Vt={string:uo,method:co,number:mo,boolean:fo,regexp:po,integer:vo,float:go,array:ho,object:bo,enum:ko,pattern:wo,date:Do,url:ua,hex:ua,email:ua,required:So,any:xo};function wa(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var Da=wa(),Nt=function(){function r(a){this.rules=null,this._messages=Da,this.define(a)}var t=r.prototype;return t.define=function(e){var o=this;if(!e)throw new Error("Cannot configure a schema with no rules");if(typeof e!="object"||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach(function(s){var l=e[s];o.rules[s]=Array.isArray(l)?l:[l]})},t.messages=function(e){return e&&(this._messages=za(wa(),e)),this._messages},t.validate=function(e,o,s){var l=this;o===void 0&&(o={}),s===void 0&&(s=function(){});var i=e,v=o,b=s;if(typeof v=="function"&&(b=v,v={}),!this.rules||Object.keys(this.rules).length===0)return b&&b(null,i),Promise.resolve(i);function m(p){var f=[],h={};function k(I){if(Array.isArray(I)){var P;f=(P=f).concat.apply(P,I)}else f.push(I)}for(var u=0;u<p.length;u++)k(p[u]);f.length?(h=ka(f),b(f,h)):b(null,i)}if(v.messages){var d=this.messages();d===Da&&(d=wa()),za(d,v.messages),v.messages=d}else v.messages=this.messages();var S={},x=v.keys||Object.keys(this.rules);x.forEach(function(p){var f=l.rules[p],h=i[p];f.forEach(function(k){var u=k;typeof u.transform=="function"&&(i===e&&(i=dt({},i)),h=i[p]=u.transform(h)),typeof u=="function"?u={validator:u}:u=dt({},u),u.validator=l.getValidationMethod(u),u.validator&&(u.field=p,u.fullField=u.fullField||p,u.type=l.getType(u),S[p]=S[p]||[],S[p].push({rule:u,value:h,source:i,field:p}))})});var D={};return eo(S,v,function(p,f){var h=p.rule,k=(h.type==="object"||h.type==="array")&&(typeof h.fields=="object"||typeof h.defaultField=="object");k=k&&(h.required||!h.required&&p.value),h.field=p.field;function u(V,A){return dt({},A,{fullField:h.fullField+"."+V,fullFields:h.fullFields?[].concat(h.fullFields,[V]):[V]})}function I(V){V===void 0&&(V=[]);var A=Array.isArray(V)?V:[V];!v.suppressWarning&&A.length&&r.warning("async-validator:",A),A.length&&h.message!==void 0&&(A=[].concat(h.message));var T=A.map(Ua(h,i));if(v.first&&T.length)return D[h.field]=1,f(T);if(!k)f(T);else{if(h.required&&!p.value)return h.message!==void 0?T=[].concat(h.message).map(Ua(h,i)):v.error&&(T=[v.error(h,Ge(v.messages.required,h.field))]),f(T);var $={};h.defaultField&&Object.keys(p.value).map(function(M){$[M]=h.defaultField}),$=dt({},$,p.rule.fields);var _={};Object.keys($).forEach(function(M){var X=$[M],Q=Array.isArray(X)?X:[X];_[M]=Q.map(u.bind(null,M))});var K=new r(_);K.messages(v.messages),p.rule.options&&(p.rule.options.messages=v.messages,p.rule.options.error=v.error),K.validate(p.value,p.rule.options||v,function(M){var X=[];T&&T.length&&X.push.apply(X,T),M&&M.length&&X.push.apply(X,M),f(X.length?X:null)})}}var P;if(h.asyncValidator)P=h.asyncValidator(h,p.value,I,p.source,v);else if(h.validator){try{P=h.validator(h,p.value,I,p.source,v)}catch(V){console.error?.(V),v.suppressValidatorError||setTimeout(function(){throw V},0),I(V.message)}P===!0?I():P===!1?I(typeof h.message=="function"?h.message(h.fullField||h.field):h.message||(h.fullField||h.field)+" fails"):P instanceof Array?I(P):P instanceof Error&&I(P.message)}P&&P.then&&P.then(function(){return I()},function(V){return I(V)})},function(p){m(p)},i)},t.getType=function(e){if(e.type===void 0&&e.pattern instanceof RegExp&&(e.type="pattern"),typeof e.validator!="function"&&e.type&&!Vt.hasOwnProperty(e.type))throw new Error(Ge("Unknown rule type %s",e.type));return e.type||"string"},t.getValidationMethod=function(e){if(typeof e.validator=="function")return e.validator;var o=Object.keys(e),s=o.indexOf("message");return s!==-1&&o.splice(s,1),o.length===1&&o[0]==="required"?Vt.required:Vt[this.getType(e)]||void 0},r}();Nt.register=function(t,a){if(typeof a!="function")throw new Error("Cannot register a validator by type, validator is not a function");Vt[t]=a};Nt.warning=Zr;Nt.messages=Da;Nt.validators=Vt;const Pn=Symbol("formContextKey"),Za=Symbol("formItemContextKey"),Po=ke({disabled:Boolean}),Co=ke({...Po,model:Object,rules:{type:ue(Object)},validateOnRuleChange:{type:Boolean,default:!0},scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Ro={validate:(r,t,a)=>(he(r)||rt(r))&&fa(t)&&rt(a)},Lt=(r,t)=>{const a=va(t);return a.length>0?r.filter(e=>e.prop&&a.includes(e.prop)):r},Mo="GForm",Cn=Ve({name:Mo,__name:"Form",props:Co,emits:Ro,setup(r,{expose:t,emit:a}){const e=r,o=a,s=[],l=Se("form"),i=k=>s.find(u=>u.prop===k),v=k=>{s.push(k)},b=k=>{k.prop&&s.splice(s.indexOf(k),1)},m=(k=[])=>{e.model&&Lt(s,k).forEach(u=>u.resetField())},d=(k=[])=>{Lt(s,k).forEach(u=>u.clearValidate())},S=F(()=>!!e.model),x=k=>{if(s.length===0)return[];const u=Lt(s,k);return u.length?u:[]},D=async k=>f(void 0,k),p=async(k=[])=>{if(!S.value)return!1;const u=x(k);if(u.length===0)return!0;let I={};for(const P of u)try{await P.validate(""),P.validateState==="error"&&P.resetField()}catch(V){I={...I,...V}}return Object.keys(I).length===0?!0:Promise.reject(I)},f=async(k=[],u)=>{console.log("modelProps",k);const I=!It(u);try{const P=await p(k);return P===!0&&await u?.(P),P}catch(P){if(P instanceof Error)throw P;const V=P;return e.scrollToError&&h(Object.keys(V)[0]),await u?.(!1,V),I&&Promise.reject(V)}},h=k=>{const u=Lt(s,k)[0];u&&u.$el?.scrollIntoView(e.scrollIntoViewOptions)};return Ce(()=>e.rules,()=>{e.validateOnRuleChange&&D().catch(k=>ft())},{deep:!0,flush:"post"}),pt(Pn,Ze({...Ca(e),emit:o,resetFields:m,clearValidate:d,validateField:f,getField:i,addField:v,removeField:b})),t({validate:D,validateField:f,resetFields:m,clearValidate:d,scrollToField:h,fields:s}),(k,u)=>(Y(),U("form",{class:w(n(l).b())},[fe(k.$slots,"default")],2))}});Cn.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},expose:[{name:"validate",tags:[{title:"description",content:"Validate the whole form. Receives a callback or returns `Promise`."}]},{name:"validateField",tags:[{title:"description",content:"Validate specified fields."}]},{name:"resetFields",tags:[{title:"description",content:"Reset specified fields and remove validation result."}]},{name:"clearValidate",tags:[{title:"description",content:"Clear validation message for specified fields."}]},{name:"scrollToField",tags:[{title:"description",content:"Scroll to the specified fields."}]},{name:"fields",tags:[{title:"description",content:"All fields context."}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/Form.vue"]};const Eo=ke({prop:{type:ue([String,Array])},rules:{type:ue([Object,Array])},showMessage:{type:ue(String),default:"child"}}),Ia=Ve({name:"FormItem",__name:"form-item",props:Eo,setup(r,{expose:t}){const a=r,e=_e(Pn,void 0);_e(Za,void 0);const o=Se("form-item"),s=ln().value,l=H([]),i=H(""),v=sr(i,100),b=H(""),m=H();let d,S=!1;const x=F(()=>[o.b(),o.is("error",i.value==="error"),o.is("validating",i.value==="validating"),o.is("success",i.value==="success")]),D=F(()=>a.prop?rt(a.prop)?a.prop:a.prop.join("."):""),p=F(()=>{const z=e?.model;if(!(!z||!a.prop))return la(z,a.prop).value}),f=F(()=>{const z=[];a.rules&&z.push(...va(a.rules));const ae=e?.rules;if(ae&&a.prop){const se=la(ae,a.prop).value;se&&z.push(...va(se))}return z}),h=F(()=>f.value.length>0),k=z=>f.value.filter(se=>!se.trigger||!z?!0:he(se.trigger)?se.trigger.includes(z):se.trigger===z).map(({trigger:se,...L})=>L);F(()=>f.value.some(z=>z.required));const u=F(()=>v.value==="error"&&a.showMessage==="parent"),I=F(()=>v.value==="error"&&a.showMessage==="child"),P=z=>{i.value=z},V=z=>{const{errors:ae,fields:se}=z;(!ae||!se)&&console.error(z),P("error"),b.value=ae?ae?.[0]?.message??`${a.prop} es requerido`:"",e?.emit("validate",a.prop,!1,b.value)},A=()=>{P("success"),b.value="",e?.emit("validate",a.prop,!0,"")},T=async z=>{const ae=D.value;return new Nt({[ae]:z}).validate({[ae]:p.value},{firstFields:!0}).then(()=>(A(),!0)).catch(L=>(V(L),Promise.reject(L)))},$=async(z,ae)=>{if(S||!a.prop)return!1;const se=It(ae);if(!h.value)return ae?.(!1),!1;const L=k(z);return L.length===0?(ae?.(!0),!0):(P("validating"),T(L).then(()=>(ae?.(!0),!0)).catch(C=>{const{fields:N}=C;return ae?.(!1,N),se?!1:Promise.reject(N)}))},_=()=>{P(""),b.value="",S=!1},K=async()=>{const z=e?.model;if(!z||!a.prop)return;const ae=la(z,a.prop);S=!0,ae.value=Ya(d),await Ae(),_(),S=!1},M=z=>{l.value.includes(z)||l.value.push(z)},X=z=>{l.value=l.value.filter(ae=>ae!==z)},Q=Ze({...Ca(a),$el:m,validateState:i,inputIds:l,labelId:s,fieldValue:p,shouldShowError:u,shouldShowErrorChild:I,validateMessage:b,addInputId:M,removeInputId:X,resetField:K,clearValidate:_,validate:$});return pt(Za,Q),na(()=>{a.prop&&(e?.addField(Q),d=Ya(p.value))}),nn(()=>{e?.removeField(Q)}),t({validateMessage:b,shouldShowError:u,shouldShowErrorChild:I,validateState:i,validate:$,clearValidate:_,resetField:K}),(z,ae)=>(Y(),U("div",{ref_key:"formItemRef",ref:m,class:w(x.value)},[fe(z.$slots,"default"),j("div",{class:w({[n(o).e("content-error")]:u.value})},[u.value?fe(z.$slots,"error",{key:0,error:b.value},()=>[j("span",{class:w(n(o).e("error"))},ve(b.value),3)]):me("",!0)],2)],2))}});Ia.__docgenInfo={name:"FormItem",exportName:"default",displayName:"form-item",description:"",tags:{},expose:[{name:"validateMessage",tags:[{title:"description",content:"Validation message."}]},{name:"shouldShowError",tags:[{title:"description",content:"Whether to show error message in form item."}]},{name:"shouldShowErrorChild",tags:[{title:"description",content:"Whether to show error message in the child of form item."}]},{name:"validateState",tags:[{title:"description",content:"Validation state."}]},{name:"validate",tags:[{title:"description",content:"Validate form item."}]},{name:"clearValidate",tags:[{title:"description",content:"Remove validation status of the field."}]},{name:"resetField",tags:[{title:"description",content:"Reset current field and remove validation result."}]}],slots:[{name:"default"},{name:"error",scoped:!0,bindings:[{name:"error",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/form-item.vue"]};const st=Tt(Cn,{FormItem:Ia}),ht=on(Ia),Fo=ke({id:{type:String,default:void 0},helpText:{type:String,default:void 0},loading:{type:Boolean,default:!1},label:{type:String,default:void 0},messageError:{type:String,default:void 0},disabled:Boolean,modelValue:{type:ue([String,Number,Object]),default:""},maxlength:{type:[String,Number],default:50},minlength:{type:[String,Number]},type:{type:String,default:"text"},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:ue(String),default:""},prefixIcon:{type:ue(String),default:""},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},isEvent:{type:Boolean,default:!1},inputStyle:{type:ue([Object,Array,String]),default:()=>dr({})},autofocus:Boolean,...Fa(["ariaLabel"])}),Vo={[xt]:r=>rt(r),click:r=>r instanceof MouseEvent,input:r=>rt(r),change:r=>rt(r),focus:r=>r instanceof FocusEvent,blur:r=>r instanceof FocusEvent,clear:()=>!0,mouseleave:r=>r instanceof MouseEvent,mouseenter:r=>r instanceof MouseEvent,keydown:r=>r instanceof Event,compositionstart:r=>r instanceof CompositionEvent,compositionupdate:r=>r instanceof CompositionEvent,compositionend:r=>r instanceof CompositionEvent},Io=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role"],Sa=Ve({name:"Input",inheritAttrs:!1,__name:"input",props:Fo,emits:Vo,setup(r,{expose:t,emit:a}){const e=r,o=a,s=Se("input"),l=ra(),i=dn(),v=oa(),b=H(void 0),m=H(null),{formItem:d}=Ma(),S=F(()=>d?.shouldShowErrorChild||!!e?.messageError),x=F(()=>e?.messageError?e.messageError:d?.validateMessage),D=F(()=>[s.b(),s.is("label",!!e.label),s.is("disabled",k.value),s.is("focus",T.value),s.is("complete",!T.value&&!!M.value),s.is("disabled",k.value),s.is("exceed",z.value),s.is("error",S.value||d?.shouldShowError),s.is("event",e.isEvent),s.is("loading",e.loading),s.is("readonly",e.readonly),{[s.m("prefix")]:e.prefixIcon||v.prefix,[s.m("suffix")]:v.suffix||e.suffixIcon||e.showPassword,[s.is("password")]:e.showPassword,[s.b("hidden")]:e.type==="hidden"},l.class]),p=F(()=>[s.e("help-text"),{[s.e("help-error")]:S.value}]),f=F(()=>x.value||e.helpText||d?.$el),{inputId:h}=un(e,{formItemContext:d}),k=cn(),u=Zn(),I=H(!1),P=H(!1),V=F(()=>u.value),{wrapperRef:A,isFocused:T}=Va(u,{beforeFocus(){return k.value},afterBlur(){e.validateEvent&&d?.validate?.("blur").catch(B=>ft())}}),$=F(()=>{const B=!!M.value||T.value;return{left:B?void 0:`calc(${b.value} + 16px)`,zIndex:B?void 0:10}}),_=F(()=>P.value?"regular eye":"regular eye-slash"),K=F(()=>[l.style]),M=F(()=>Ra(e.modelValue)?"":String(e.modelValue)),X=F(()=>e.showWordLimit&&!!e.maxlength&&e.type==="text"&&!k.value&&!e.readonly&&!e.showPassword),Q=F(()=>M.value.length),z=F(()=>!!X.value&&Q.value>Number(e.maxlength));F(()=>!!e.suffixIcon||e.showPassword);const[ae,se]=mr(u),L=()=>{const B=V.value,le=e.formatter?e.formatter(M.value):M.value;!B||B.value===le||(B.value=le)},C=async B=>{ae();let{value:le}=B.target;if(e.formatter&&(le=e.parser?e.parser(le):le),!O.value){if(le===M.value){L();return}o(xt,le),o("input",le),await Ae(),L(),se()}},N=B=>{o("change",B.target.value)},{isComposing:O,handleCompositionStart:E,handleCompositionUpdate:G,handleCompositionEnd:R}=fr({emit:o,afterComposition:C}),q=()=>{ae(),P.value=!P.value,setTimeout(se)},Z=()=>u.value?.focus(),oe=()=>u.value?.blur(),Re=B=>{I.value=!1,o("mouseleave",B)},Ne=B=>{I.value=!0,o("mouseenter",B)},Be=B=>{o("keydown",B)},ee=()=>{u.value?.select()},te=()=>{o(xt,""),o("change",""),o("clear"),o("input","")};return Ce(()=>e.modelValue,()=>{e.validateEvent&&d?.validate?.("change").catch(B=>ft())}),Ce(M,()=>L()),Ce(()=>e.type,async()=>{await Ae(),L()}),na(()=>{!e.formatter&&e.parser&&ft(s.b()),L()}),Ea(m,()=>{if(!e.prefixIcon&&!v.prefix){b.value="0";return}requestAnimationFrame(()=>{const B=m.value?.getBoundingClientRect().width;b.value=`${B}px`})}),t({ref:V,isComposing:O,focus:Z,blur:oe,select:ee,clear:te}),(B,le)=>(Y(),U("div",{class:w([D.value]),style:mt(K.value),onMouseenter:Ne,onMouseleave:Re},[j("div",{ref_key:"wrapperRef",ref:A,class:w(n(s).e("wrapper")),onClick:le[3]||(le[3]=de=>B.isEvent?o("click",de):void 0)},[j("div",{ref_key:"prefixRef",ref:m,class:w(n(s).e("prefix"))},[fe(B.$slots,"prefix",{},()=>[B.prefixIcon?(Y(),Te(n(be),{key:0,class:w([n(s).e("icon"),n(s).e("prefix-icon")]),name:B.prefixIcon},null,8,["class","name"])):me("",!0)])],2),B.label?(Y(),U("div",{key:0,class:w([n(s).e("label")]),style:mt($.value)},ve(B.label),7)):me("",!0),j("input",Zt({id:n(h),ref_key:"input",ref:u,class:[n(s).e("inner")]},n(i),{minlength:B.minlength,maxlength:B.maxlength,type:B.showPassword?P.value?"text":"password":B.type,disabled:n(k),readonly:B.readonly||B.loading||B.isEvent,autocomplete:B.autocomplete,tabindex:B.tabindex,"aria-label":B.ariaLabel,placeholder:B.placeholder,form:B.form,autofocus:B.autofocus,role:B.containerRole,onCompositionstart:le[0]||(le[0]=(...de)=>n(E)&&n(E)(...de)),onCompositionupdate:le[1]||(le[1]=(...de)=>n(G)&&n(G)(...de)),onCompositionend:le[2]||(le[2]=(...de)=>n(R)&&n(R)(...de)),onInput:C,onChange:N,onKeydown:Be}),null,16,Io),fe(B.$slots,"suffix",{},()=>[j("span",{class:w(n(s).e("suffix"))},[B.suffixIcon&&!B.showPassword&&!B.loading?(Y(),Te(n(be),{key:0,class:w([n(s).e("icon"),n(s).e("suffix-icon")]),name:B.suffixIcon},null,8,["class","name"])):me("",!0),B.showPassword?(Y(),Te(n(be),{key:1,class:w([n(s).e("icon"),n(s).e("icon-password")]),name:_.value,onClick:q},null,8,["class","name"])):me("",!0),B.loading?(Y(),Te(n(be),{key:2,class:w([n(s).e("icon"),n(s).e("icon-loading")]),name:"regular arrows-rotate",spin:"",onClick:q},null,8,["class"])):me("",!0)],2)])],2),f.value?(Y(),U("div",{key:0,class:w([n(s).e("help")])},[fe(B.$slots,"helpText",{error:x.value,isError:S.value},()=>[(Y(),U("p",{key:S.value?"error":"help",class:w(p.value)},ve(S.value?x.value:B.helpText),3))]),X.value?(Y(),U("span",{key:0,class:w(n(s).e("help-count"))},ve(Q.value)+"/"+ve(B.maxlength),3)):me("",!0)],2)):me("",!0)],38))}});Sa.__docgenInfo={name:"Input",exportName:"default",displayName:"input",description:"",tags:{},expose:[{name:"ref",tags:[{title:"description",content:"HTML element, input or textarea"}]},{name:"isComposing",tags:[{title:"description",content:"is input composing"}]},{name:"focus",tags:[{title:"description",content:"HTML input element native method"}]},{name:"blur",tags:[{title:"description",content:"HTML input element native method"}]},{name:"select",tags:[{title:"description",content:"HTML input element native method"}]},{name:"clear",tags:[{title:"description",content:"clear input value"}]}],slots:[{name:"prefix"},{name:"suffix"},{name:"helpText",scoped:!0,bindings:[{name:"error",title:"binding"},{name:"isError",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input/src/input.vue"]};const bt=Tt(Sa,{Input:Sa}),$o=ke({modelValue:{type:[String,Number,Boolean],default:void 0},disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),Oo=ke({...$o}),Rn={[xt]:r=>rt(r)||pa(r)||fa(r),[ur]:r=>rt(r)||pa(r)||fa(r)},Mn=Symbol("radioGroupKey"),To=(r,t)=>{const a=H(),e=H(""),o=_e(Mn,void 0),s=F(()=>!!o),l=F(()=>ar(r.value)?r.label:r.value),i=F({get(){return s.value?o.modelValue:r.modelValue},set(d){s.value?o.changeEvent(d):t&&t(xt,d);const S=r.modelValue===l.value;a.value.checked=S,S||(e.value="expand")}});Ce(()=>e.value,()=>{setTimeout(()=>{e.value=""},500)});const v=cn(F(()=>o?.disabled)),b=H(!1),m=F(()=>v.value||s.value&&i.value!==l.value?-1:0);return{actualValue:l,currentRipple:e,disabled:v,focus:b,isGroup:s,modelValue:i,radioGroup:o,radioRef:a,tabIndex:m}},No=["value","name","disabled","checked"],Ao={class:"hover-effect"},En=Ve({name:"GuiRadio",__name:"radio",props:Oo,emits:Rn,setup(r,{emit:t}){const a=r,e=t,o=Se("radio"),{radioRef:s,radioGroup:l,focus:i,disabled:v,modelValue:b,actualValue:m,currentRipple:d}=To(a,e);function S(){Ae(()=>e("change",b.value))}return(x,D)=>(Y(),U("label",{class:w([n(o).b(),n(o).is("disabled",n(v)),n(o).is("focus",n(i)),n(o).is("checked",n(b)===n(m))])},[j("span",{class:w([n(o).e("input"),n(o).is("disabled",n(v)),n(o).is("checked",n(b)===n(m))])},[Ye(j("input",{ref_key:"radioRef",ref:s,"onUpdate:modelValue":D[0]||(D[0]=p=>Qn(b)?b.value=p:null),class:w(n(o).e("original")),value:n(m),name:x.name||n(l)?.name,disabled:n(v),checked:n(b)===n(m),type:"radio",onFocus:D[1]||(D[1]=p=>i.value=!0),onBlur:D[2]||(D[2]=p=>i.value=!1),onChange:S,onClick:D[3]||(D[3]=Ue(()=>{},["stop"]))},null,42,No),[[Jn,n(b)]]),j("span",{class:w(n(o).e("inner"))},[j("span",Ao,[j("span",{class:w(["ripple",n(d)])},null,2)])],2)],2),j("span",{class:w(n(o).e("label")),onKeydown:D[4]||(D[4]=Ue(()=>{},["stop"]))},[fe(x.$slots,"default",{},()=>[ut(ve(x.label),1)])],34)],2))}});En.__docgenInfo={name:"GuiRadio",exportName:"default",displayName:"radio",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/radio/src/radio.vue"]};const Lo=ke({id:{type:String,default:void 0},options:{type:Array,default:()=>[]},disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},layout:{type:String,default:"horizontal"},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...Fa(["ariaLabel"])}),qo=Rn,_o=["id","aria-label","aria-labelledby"],$a=Ve({name:"GuiRadioGroup",__name:"radio-group",props:Lo,emits:qo,setup(r,{emit:t}){const a=r,e=t,o=Se("radio"),s=ln(),l=H(),{formItem:i}=Ma(),{inputId:v,isLabeledByFormItem:b}=un(a,{formItemContext:i}),m=D=>{e(xt,D),Ae(()=>e("change",D))};na(()=>{const D=l.value.querySelectorAll("[type=radio]"),p=D[0];!Array.from(D).some(f=>f.checked)&&p&&(p.tabIndex=0)});const d=F(()=>a.name||s.value),S={horizontal:"flex flex-row gap-4",vertical:"flex flex-col gap-4 items-start"},x=F(()=>[o.b("group"),S[a.layout]]);return pt(Mn,Ze({...Ca(a),changeEvent:m,name:d})),Ce(()=>a.modelValue,()=>{a.validateEvent&&i?.validate("change").catch(D=>ft())}),(D,p)=>(Y(),U("div",{id:n(v),ref_key:"radioGroupRef",ref:l,class:w(x.value),role:"radiogroup","aria-label":n(b)?void 0:D.ariaLabel||"radio-group","aria-labelledby":n(b)?n(i).labelId:void 0},[a.options.length>0?(Y(!0),U(Me,{key:0},qe(a.options,f=>(Y(),Te(n(Fn),{key:String(f.value),value:f.value,label:f?.label??f.value,disabled:f?.disabled},null,8,["value","label","disabled"]))),128)):fe(D.$slots,"default",{key:1})],10,_o))}});$a.__docgenInfo={name:"GuiRadioGroup",exportName:"default",displayName:"radio-group",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/radio/src/radio-group.vue"]};const Fn=Tt(En,{RadioGroup:$a});on($a);var Yo={exports:{}};(function(r,t){(function(a,e){r.exports=e(hr)})(tt,function(a){function e(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var o=e(a),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(l){return l+"º"}};return o.default.locale(s,null,!0),s})})(Yo);const sa=Symbol(),Bo=ke({...br,type:{type:ue(String),default:"date"}}),jo=["date","dates","year","years","month","months","week","range"],Oa=ke({disabledDate:{type:ue(Function)},date:{type:ue(Object),required:!0},minDate:{type:ue(Object)},maxDate:{type:ue(Object)},parsedValue:{type:ue([Object,Array])},rangeState:{type:ue(Object),default:()=>({endDate:null,selecting:!1})}}),Vn=ke({type:{type:ue(String),required:!0,values:Ir},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),Ta=ke({unlinkPanels:Boolean,parsedValue:{type:ue(Array)}}),Na=r=>({type:String,values:jo,default:r}),Go=ke({...Vn,parsedValue:{type:ue([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),Pt=r=>{if(!he(r))return!1;const[t,a]=r;return W.isDayjs(t)&&W.isDayjs(a)&&t.isSameOrBefore(a)},Aa=(r,{lang:t,unit:a,unlinkPanels:e})=>{let o;if(he(r)){let[s,l]=r.map(i=>W(i).locale(t));return e||(l=s.add(1,a)),[s,l]}else r?o=W(r):o=W();return o=o.locale(t),[o,o.add(1,a)]},Ho=(r,t,{columnIndexOffset:a,startDate:e,nextEndDate:o,now:s,unit:l,relativeDateGetter:i,setCellMetadata:v,setRowMetadata:b})=>{for(let m=0;m<r.row;m++){const d=t[m];for(let S=0;S<r.column;S++){let x=d[S+a];x||(x={row:m,column:S,type:"normal",inRange:!1,start:!1,end:!1});const D=m*r.column+S,p=i(D);x.dayjs=p,x.date=p.toDate(),x.timestamp=p.valueOf(),x.type="normal",x.inRange=!!(e&&p.isSameOrAfter(e,l)&&o&&p.isSameOrBefore(o,l))||!!(e&&p.isSameOrBefore(e,l)&&o&&p.isSameOrAfter(o,l)),e?.isSameOrAfter(o)?(x.start=!!o&&p.isSame(o,l),x.end=e&&p.isSame(e,l)):(x.start=!!e&&p.isSame(e,l),x.end=!!o&&p.isSame(o,l)),p.isSame(s,l)&&(x.type="today"),v?.(x,{rowIndex:m,columnIndex:S}),d[S+a]=x}b?.(d)}},Qt=(r,t,a)=>{const e=W().locale(a).startOf("month").month(t).year(r),o=e.daysInMonth();return mn(o).map(s=>e.add(s,"day").toDate())},Ot=(r,t,a,e)=>{const o=W().year(r).month(t).startOf("month"),s=Qt(r,t,a).find(l=>!e?.(l));return s?W(s).locale(a):o.locale(a)},xa=(r,t,a)=>{const e=r.year();if(!a?.(r.toDate()))return r.locale(t);const o=r.month();if(!Qt(e,o,t).every(a))return Ot(e,o,t,a);for(let s=0;s<12;s++)if(!Qt(e,s,t).every(a))return Ot(e,s,t,a);return r},Ko=ke({...Oa,cellClassName:{type:ue(Function)},showWeekNumber:Boolean,selectionMode:Na("date")}),Uo=["changerange","pick","select"],Pa=(r="")=>["normal","today"].includes(r),zo=(r,t)=>{const{lang:a}=He(),e=H(),o=H(),s=H(),l=H(),i=H([[],[],[],[],[],[]]);let v=!1;const b=r.date.$locale().weekStart||7,m=r.date.locale("en").localeData().weekdaysShort().map(C=>C.toLowerCase()),d=F(()=>b>3?7-b:-b),S=F(()=>{const C=r.date.startOf("month");return C.subtract(C.day()||7,"day")}),x=F(()=>m.concat(m).slice(b,b+7)),D=F(()=>cr(n(I)).some(C=>C.isCurrent)),p=F(()=>{const C=r.date.startOf("month"),N=C.day()||7,O=C.daysInMonth(),E=C.subtract(1,"month").daysInMonth();return{startOfMonthDay:N,dateCountOfMonth:O,dateCountOfLastMonth:E}}),f=F(()=>r.selectionMode==="dates"?je(r.parsedValue):[]),h=(C,{count:N,rowIndex:O,columnIndex:E})=>{const{startOfMonthDay:G,dateCountOfMonth:R,dateCountOfLastMonth:q}=n(p),Z=n(d);if(O>=0&&O<=1){const oe=G+Z<0?7+G+Z:G+Z;if(E+O*7>=oe)return C.text=N,!0;C.text=q-(oe-E%7)+1+O*7,C.type="prev-month"}else return N<=R?C.text=N:(C.text=N-R,C.type="next-month"),!0;return!1},k=(C,{columnIndex:N,rowIndex:O},E)=>{const{disabledDate:G,cellClassName:R}=r,q=n(f),Z=h(C,{count:E,rowIndex:O,columnIndex:N}),oe=C.dayjs.toDate();return C.selected=q.find(Re=>Re.isSame(C.dayjs,"day")),C.isSelected=!!C.selected,C.isCurrent=V(C),C.disabled=G?.(oe),C.customClass=R?.(oe),Z},u=C=>{if(r.selectionMode==="week"){const[N,O]=r.showWeekNumber?[1,7]:[0,6],E=L(C[N+1]);C[N].inRange=E,C[N].start=E,C[O].inRange=E,C[O].end=E}},I=F(()=>{const{minDate:C,maxDate:N,rangeState:O,showWeekNumber:E}=r,G=n(d),R=n(i),q="day";let Z=1;if(E)for(let oe=0;oe<6;oe++)R[oe][0]||(R[oe][0]={type:"week",text:n(S).add(oe*7+1,q).week()});return Ho({row:6,column:7},R,{startDate:C,columnIndexOffset:E?1:0,nextEndDate:O.endDate||N||O.selecting&&C||null,now:W().locale(n(a)).startOf(q),unit:q,relativeDateGetter:oe=>n(S).add(oe-G,q),setCellMetadata:(...oe)=>{k(...oe,Z)&&(Z+=1)},setRowMetadata:u}),R});Ce(()=>r.date,async()=>{n(e)?.contains(document.activeElement)&&(await Ae(),await P())});const P=async()=>n(o)?.focus(),V=C=>r.selectionMode==="date"&&Pa(C.type)&&A(C,r.parsedValue),A=(C,N)=>N?W(N).locale(n(a)).isSame(r.date.date(Number(C.text)),"day"):!1,T=(C,N)=>{const O=C*7+(N-(r.showWeekNumber?1:0))-n(d);return n(S).add(O,"day")},$=C=>{if(!r.rangeState.selecting)return;let N=C.target;if(N.tagName==="SPAN"&&(N=N.parentNode?.parentNode),N.tagName==="DIV"&&(N=N.parentNode),N.tagName!=="TD")return;const O=N.parentNode.rowIndex-1,E=N.cellIndex;n(I)[O][E].disabled||(O!==n(s)||E!==n(l))&&(s.value=O,l.value=E,t("changerange",{selecting:!0,endDate:T(O,E)}))},_=C=>!n(D)&&C?.text===1&&C.type==="normal"||C.isCurrent,K=C=>{v||n(D)||r.selectionMode!=="date"||se(C,!0)},M=C=>{C.target.closest("td")&&(v=!0)},X=C=>{C.target.closest("td")&&(v=!1)},Q=C=>{!r.rangeState.selecting||!r.minDate?(t("pick",{minDate:C,maxDate:null}),t("select",!0)):(C>=r.minDate?t("pick",{minDate:r.minDate,maxDate:C}):t("pick",{minDate:C,maxDate:r.minDate}),t("select",!1))},z=C=>{const N=C.week(),O=`${C.year()}w${N}`;t("pick",{year:C.year(),week:N,value:O,date:C.startOf("week")})},ae=(C,N)=>{const O=N?je(r.parsedValue).filter(E=>E?.valueOf()!==C.valueOf()):je(r.parsedValue).concat([C]);t("pick",O)},se=(C,N=!1)=>{const O=C.target.closest("td");if(!O)return;const E=O.parentNode.rowIndex-1,G=O.cellIndex,R=n(I)[E][G];if(R.disabled||R.type==="week")return;const q=T(E,G);switch(r.selectionMode){case"range":{Q(q);break}case"date":{t("pick",q,N);break}case"week":{z(q);break}case"dates":{ae(q,!!R.selected);break}}},L=C=>{if(r.selectionMode!=="week")return!1;let N=r.date.startOf("day");if(C.type==="prev-month"&&(N=N.subtract(1,"month")),C.type==="next-month"&&(N=N.add(1,"month")),N=N.date(Number.parseInt(C.text,10)),r.parsedValue&&!he(r.parsedValue)){const O=(r.parsedValue.day()-b+7)%7-1;return r.parsedValue.subtract(O,"day").isSame(N,"day")}return!1};return{WEEKS:x,rows:I,tbodyRef:e,currentCellRef:o,focus:P,isCurrent:V,isWeekActive:L,isSelectedCell:_,handlePickDate:se,handleMouseUp:X,handleMouseDown:M,handleMouseMove:$,handleFocus:K}},Wo=(r,{isCurrent:t,isWeekActive:a})=>{const e=Se("date-table"),{t:o}=He(),s=F(()=>[e.b(),{"is-week-mode":r.selectionMode==="week"}]),l=F(()=>o("el.datepicker.dateTablePrompt")),i=F(()=>o("el.datepicker.week"));return{tableKls:s,tableLabel:l,weekLabel:i,getCellClasses:m=>{const d=[];return Pa(m.type)&&!m.disabled?(d.push("available"),m.type==="today"&&d.push("today")):d.push(m.type),t(m)&&d.push("current"),m.inRange&&(Pa(m.type)||r.selectionMode==="week")&&(d.push("in-range"),m.start&&d.push("start-date"),m.end&&d.push("end-date")),m.disabled&&d.push("disabled"),m.selected&&d.push("selected"),m.customClass&&d.push(m.customClass),d.join(" ")},getRowKls:m=>[e.e("row"),{current:a(m)}],t:o}},Zo=ke({cell:{type:ue(Object)}}),In=Ve({name:"GDatePickerCell",props:Zo,setup(r){const t=Se("date-table-cell"),{slots:a}=_e(sa);return{ns:t,cell:r.cell}}});function Jo(r,t,a,e,o,s){return fe(r.$slots,"default",Xn(er(r.cell)),()=>[j("div",{class:w(r.ns.b())},[j("span",{class:w(r.ns.e("text"))},ve(r.cell?.renderText??r.cell?.text),3)],2)])}const La=Pr(In,[["render",Jo]]);In.__docgenInfo={displayName:"GDatePickerCell",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-cell-render.vue"]};const Qo=["aria-label"],Xo={key:0,scope:"col"},es=["aria-label"],ts=["aria-current","aria-selected","tabindex"],Xt=Ve({__name:"basic-date-table",props:Ko,emits:Uo,setup(r,{expose:t,emit:a}){const e=r,o=a,{WEEKS:s,rows:l,tbodyRef:i,currentCellRef:v,focus:b,isCurrent:m,isWeekActive:d,isSelectedCell:S,handlePickDate:x,handleMouseUp:D,handleMouseDown:p,handleMouseMove:f,handleFocus:h}=zo(e,o),{tableLabel:k,tableKls:u,weekLabel:I,getCellClasses:P,getRowKls:V,t:A}=Wo(e,{isCurrent:m,isWeekActive:d});return t({focus:b}),(T,$)=>(Y(),U("table",{"aria-label":n(k),class:w(n(u)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:$[1]||($[1]=(..._)=>n(x)&&n(x)(..._)),onMousemove:$[2]||($[2]=(..._)=>n(f)&&n(f)(..._)),onMousedown:$[3]||($[3]=Ue((..._)=>n(p)&&n(p)(..._),["prevent"])),onMouseup:$[4]||($[4]=(..._)=>n(D)&&n(D)(..._))},[j("tbody",{ref_key:"tbodyRef",ref:i},[j("tr",null,[T.showWeekNumber?(Y(),U("th",Xo,ve(n(I)),1)):me("",!0),(Y(!0),U(Me,null,qe(n(s),(_,K)=>(Y(),U("th",{key:K,"aria-label":n(A)("el.datepicker.weeksFull."+_),scope:"col"},ve(n(A)("el.datepicker.weeks."+_)),9,es))),128))]),(Y(!0),U(Me,null,qe(n(l),(_,K)=>(Y(),U("tr",{key:K,class:w(n(V)(_[1]))},[(Y(!0),U(Me,null,qe(_,(M,X)=>(Y(),U("td",{key:`${K}.${X}`,ref_for:!0,ref:Q=>n(S)(M)&&(v.value=Q),class:w(n(P)(M)),"aria-current":M.isCurrent?"date":void 0,"aria-selected":M.isCurrent,tabindex:n(S)(M)?0:-1,onFocus:$[0]||($[0]=(...Q)=>n(h)&&n(h)(...Q))},[ie(La,{cell:M},null,8,["cell"])],42,ts))),128))],2))),128))],512)],42,Qo))}});Xt.__docgenInfo={exportName:"default",displayName:"basic-date-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on current cell"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-date-table.vue"]};const as=ke({...Oa,selectionMode:Na("month")}),ns=["aria-label"],rs=["aria-selected","aria-label","tabindex","onKeydown"],ea=Ve({__name:"basic-month-table",props:as,emits:["changerange","pick","select"],setup(r,{expose:t,emit:a}){const e=r,o=a,s=Se("month-table"),{t:l,lang:i}=He(),v=H(),b=H(),m=H(e.date.locale("en").localeData().monthsShort().map(I=>I.toLowerCase())),d=H([[],[],[]]),S=H(),x=H(),D=F(()=>{const I=d.value,P=W().locale(i.value).startOf("month");for(let V=0;V<3;V++){const A=I[V];for(let T=0;T<4;T++){const $=A[T]||={row:V,column:T,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};$.type="normal";const _=V*4+T,K=e.date.startOf("year").month(_),M=e.rangeState.endDate||e.maxDate||e.rangeState.selecting&&e.minDate||null;$.inRange=!!(e.minDate&&K.isSameOrAfter(e.minDate,"month")&&M&&K.isSameOrBefore(M,"month"))||!!(e.minDate&&K.isSameOrBefore(e.minDate,"month")&&M&&K.isSameOrAfter(M,"month")),e.minDate?.isSameOrAfter(M)?($.start=!!(M&&K.isSame(M,"month")),$.end=e.minDate&&K.isSame(e.minDate,"month")):($.start=!!(e.minDate&&K.isSame(e.minDate,"month")),$.end=!!(M&&K.isSame(M,"month"))),P.isSame(K)&&($.type="today"),$.text=_,$.disabled=e.disabledDate?.(K.toDate())||!1}}return I}),p=()=>{b.value?.focus()},f=I=>{const P={},V=e.date.year(),A=new Date,T=I.text;return P.disabled=e.disabledDate?Qt(V,T,i.value).every(e.disabledDate):!1,P.current=je(e.parsedValue).findIndex($=>W.isDayjs($)&&$.year()===V&&$.month()===T)>=0,P.today=A.getFullYear()===V&&A.getMonth()===T,I.inRange&&(P["in-range"]=!0,I.start&&(P["start-date"]=!0),I.end&&(P["end-date"]=!0)),P},h=I=>{const P=e.date.year(),V=I.text;return je(e.date).findIndex(A=>A.year()===P&&A.month()===V)>=0},k=I=>{if(!e.rangeState.selecting)return;let P=I.target;if(P.tagName==="SPAN"&&(P=P.parentNode?.parentNode),P.tagName==="DIV"&&(P=P.parentNode),P.tagName!=="TD")return;const V=P.parentNode.rowIndex,A=P.cellIndex;D.value[V][A].disabled||(V!==S.value||A!==x.value)&&(S.value=V,x.value=A,o("changerange",{selecting:!0,endDate:e.date.startOf("year").month(V*4+A)}))},u=I=>{const P=I.target?.closest("td");if(P?.tagName!=="TD"||Jt(P,"disabled"))return;const V=P.cellIndex,T=P.parentNode.rowIndex*4+V,$=e.date.startOf("year").month(T);if(e.selectionMode==="months"){if(I.type==="keydown"){o("pick",je(e.parsedValue),!1);return}const _=Ot(e.date.year(),T,i.value,e.disabledDate),K=Jt(P,"current")?je(e.parsedValue).filter(M=>M?.month()!==_.month()):je(e.parsedValue).concat([W(_)]);o("pick",K)}else e.selectionMode==="range"?e.rangeState.selecting?(e.minDate&&$>=e.minDate?o("pick",{minDate:e.minDate,maxDate:$}):o("pick",{minDate:$,maxDate:e.minDate}),o("select",!1)):(o("pick",{minDate:$,maxDate:null}),o("select",!0)):o("pick",T)};return Ce(()=>e.date,async()=>{v.value?.contains(document.activeElement)&&(await Ae(),b.value?.focus())}),t({focus:p}),(I,P)=>(Y(),U("table",{role:"grid","aria-label":n(l)("el.datepicker.monthTablePrompt"),class:w(n(s).b()),onClick:u,onMousemove:k},[j("tbody",{ref_key:"tbodyRef",ref:v},[(Y(!0),U(Me,null,qe(D.value,(V,A)=>(Y(),U("tr",{key:A},[(Y(!0),U(Me,null,qe(V,(T,$)=>(Y(),U("td",{key:$,ref_for:!0,ref:_=>h(T)&&(b.value=_),class:w(f(T)),"aria-selected":`${h(T)}`,"aria-label":n(l)(`el.datepicker.month${+T.text+1}`),tabindex:h(T)?0:-1,onKeydown:[St(Ue(u,["prevent","stop"]),["space"]),St(Ue(u,["prevent","stop"]),["enter"])]},[ie(La,{cell:{...T,renderText:n(l)("el.datepicker.months."+m.value[T.text])}},null,8,["cell"])],42,rs))),128))]))),128))],512)],42,ns))}});ea.__docgenInfo={exportName:"default",displayName:"basic-month-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-month-table.vue"]};const os=ke({...Oa,selectionMode:Na("year")}),ss=["aria-label"],ls=["aria-selected","aria-label","tabindex","onKeydown"],ta=Ve({__name:"basic-year-table",props:os,emits:["changerange","pick","select"],setup(r,{expose:t,emit:a}){const e=(P,V)=>{const A=W(String(P)).locale(V).startOf("year"),$=A.endOf("year").dayOfYear();return mn($).map(_=>A.add(_,"day").toDate())},o=r,s=a,l=Se("year-table"),{t:i,lang:v}=He(),b=H(),m=H(),d=F(()=>Math.floor(o.date.year()/10)*10),S=H([[],[],[]]),x=H(),D=H(),p=F(()=>{const P=S.value,V=W().locale(v.value).startOf("year");for(let A=0;A<3;A++){const T=P[A];for(let $=0;$<4&&!(A*4+$>=10);$++){let _=T[$];_||(_={row:A,column:$,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),_.type="normal";const K=A*4+$+d.value,M=W().year(K),X=o.rangeState.endDate||o.maxDate||o.rangeState.selecting&&o.minDate||null;_.inRange=!!(o.minDate&&M.isSameOrAfter(o.minDate,"year")&&X&&M.isSameOrBefore(X,"year"))||!!(o.minDate&&M.isSameOrBefore(o.minDate,"year")&&X&&M.isSameOrAfter(X,"year")),o.minDate?.isSameOrAfter(X)?(_.start=!!(X&&M.isSame(X,"year")),_.end=!!(o.minDate&&M.isSame(o.minDate,"year"))):(_.start=!!(o.minDate&&M.isSame(o.minDate,"year")),_.end=!!(X&&M.isSame(X,"year"))),V.isSame(M)&&(_.type="today"),_.text=K;const z=M.toDate();_.disabled=o.disabledDate&&o.disabledDate(z)||!1,T[$]=_}}return P}),f=()=>{m.value?.focus()},h=P=>{const V={},A=W().locale(v.value),T=P.text;return V.disabled=o.disabledDate?e(T,v.value).every(o.disabledDate):!1,V.today=A.year()===T,V.current=je(o.parsedValue).findIndex($=>$.year()===T)>=0,P.inRange&&(V["in-range"]=!0,P.start&&(V["start-date"]=!0),P.end&&(V["end-date"]=!0)),V},k=P=>{const V=P.text;return je(o.date).findIndex(A=>A.year()===V)>=0},u=P=>{const V=P.target?.closest("td");if(!V||!V.textContent||Jt(V,"disabled"))return;const A=V.cellIndex,$=V.parentNode.rowIndex*4+A+d.value,_=W().year($);if(o.selectionMode==="range")o.rangeState.selecting?(o.minDate&&_>=o.minDate?s("pick",{minDate:o.minDate,maxDate:_}):s("pick",{minDate:_,maxDate:o.minDate}),s("select",!1)):(s("pick",{minDate:_,maxDate:null}),s("select",!0));else if(o.selectionMode==="years"){if(P.type==="keydown"){s("pick",je(o.parsedValue),!1);return}const K=xa(_.startOf("year"),v.value,o.disabledDate),M=Jt(V,"current")?je(o.parsedValue).filter(X=>X?.year()!==$):je(o.parsedValue).concat([K]);s("pick",M)}else s("pick",$)},I=P=>{if(!o.rangeState.selecting)return;const V=P.target?.closest("td");if(!V)return;const A=V.parentNode.rowIndex,T=V.cellIndex;p.value[A][T].disabled||(A!==x.value||T!==D.value)&&(x.value=A,D.value=T,s("changerange",{selecting:!0,endDate:W().year(d.value).add(A*4+T,"year")}))};return Ce(()=>o.date,async()=>{b.value?.contains(document.activeElement)&&(await Ae(),m.value?.focus())}),t({focus:f}),(P,V)=>(Y(),U("table",{role:"grid","aria-label":n(i)("el.datepicker.yearTablePrompt"),class:w(n(l).b()),onClick:u,onMousemove:I},[j("tbody",{ref_key:"tbodyRef",ref:b},[(Y(!0),U(Me,null,qe(p.value,(A,T)=>(Y(),U("tr",{key:T},[(Y(!0),U(Me,null,qe(A,($,_)=>(Y(),U("td",{key:`${T}_${_}`,ref_for:!0,ref:K=>k($)&&(m.value=K),class:w(["available",h($)]),"aria-selected":k($),"aria-label":String($.text),tabindex:k($)?0:-1,onKeydown:[St(Ue(u,["prevent","stop"]),["space"]),St(Ue(u,["prevent","stop"]),["enter"])]},[ie(La,{cell:$},null,8,["cell"])],42,ls))),128))]))),128))],512)],42,ss))}});ta.__docgenInfo={exportName:"default",displayName:"basic-year-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on the current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-year-table.vue"]};const is=["onClick"],us=["aria-label"],cs=["aria-label"],ds=["aria-label"],ms=["aria-label"],fs=["disabled"],ps=["disabled"],$n=Ve({__name:"panel-date-pick",props:Go,emits:["pick","set-picker-option","panel-change"],setup(r,{emit:t}){const a=(c,y,ne)=>!0,e=r,o=t,s=Se("picker-panel"),l=Se("date-picker"),i=ra(),v=oa(),{t:b,lang:m}=He(),d=_e("EP_PICKER_BASE"),S=_e(Sr),{shortcuts:x,disabledDate:D,cellClassName:p,defaultTime:f}=d.props,h=We(d.props,"defaultValue"),k=H(),u=H(W().locale(m.value)),I=H(!1);let P=!1;const V=F(()=>W(f).locale(m.value)),A=F(()=>u.value.month()),T=F(()=>u.value.year()),$=H([]),_=H(null),K=H(null),M=c=>$.value.length>0?a(c,$.value,e.format||"HH:mm:ss"):!0,X=c=>f&&!de.value&&!I.value&&!P?V.value.year(c.year()).month(c.month()).date(c.date()):Re.value?c.millisecond(0):c.startOf("day"),Q=(c,...y)=>{if(!c)o("pick",c,...y);else if(he(c)){const ne=c.map(X);o("pick",ne,...y)}else o("pick",X(c),...y);_.value=null,K.value=null,I.value=!1,P=!1},z=async(c,y)=>{if(O.value==="date"){c=c;let ne=e.parsedValue?e.parsedValue.year(c.year()).month(c.month()).date(c.date()):c;M(ne)||(ne=$.value[0][0].year(c.year()).month(c.month()).date(c.date())),u.value=ne,Q(ne,Re.value||y),e.type==="datetime"&&(await Ae(),ze())}else O.value==="week"?Q(c.date):O.value==="dates"&&Q(c,!0)},ae=c=>{const y=c?"add":"subtract";u.value=u.value[y](1,"month"),J("month")},se=c=>{const y=u.value,ne=c?"add":"subtract";u.value=L.value==="year"?y[ne](10,"year"):y[ne](1,"year"),J("year")},L=H("date"),C=F(()=>{const c=b("el.datepicker.year");if(L.value==="year"){const y=Math.floor(T.value/10)*10;return c?`${y} ${c} - ${y+9} ${c}`:`${y} - ${y+9}`}return`${T.value} ${c}`}),N=c=>{const y=It(c.value)?c.value():c.value;if(y){P=!0,Q(W(y).locale(m.value));return}c.onClick&&c.onClick({attrs:i,slots:v,emit:o})},O=F(()=>{const{type:c}=e;return["week","month","months","year","years","dates"].includes(c)?c:"date"}),E=F(()=>O.value==="dates"||O.value==="months"||O.value==="years"),G=F(()=>O.value==="date"?L.value:O.value),R=F(()=>!!x.length),q=async(c,y)=>{O.value==="month"?(u.value=Ot(u.value.year(),c,m.value,D),Q(u.value,!1)):O.value==="months"?Q(c,y??!0):(u.value=Ot(u.value.year(),c,m.value,D),L.value="date",["month","year","date","week"].includes(O.value)&&(Q(u.value,!0),await Ae(),ze())),J("month")},Z=async(c,y)=>{if(O.value==="year"){const ne=u.value.startOf("year").year(c);u.value=xa(ne,m.value,D),Q(u.value,!1)}else if(O.value==="years")Q(c,y??!0);else{const ne=u.value.year(c);u.value=xa(ne,m.value,D),L.value="month",["month","year","date","week"].includes(O.value)&&(Q(u.value,!0),await Ae(),ze())}J("year")},oe=async c=>{L.value=c,await Ae(),ze()},Re=F(()=>e.type==="datetime"||e.type==="datetimerange"),Ne=F(()=>{const c=Re.value||O.value==="dates",y=O.value==="years",ne=O.value==="months",Pe=L.value==="date",Ee=L.value==="year",it=L.value==="month";return c&&Pe||y&&Ee||ne&&it}),Be=F(()=>D?e.parsedValue?he(e.parsedValue)?D(e.parsedValue[0].toDate()):D(e.parsedValue.toDate()):!0:!1),ee=()=>{if(E.value)Q(e.parsedValue);else{let c=e.parsedValue;if(!c){const y=W(f).locale(m.value),ne=Je();c=y.year(ne.year()).month(ne.month()).date(ne.date())}u.value=c,Q(c)}},te=F(()=>D?D(W().locale(m.value).toDate()):!1),ce=()=>{const y=W().locale(m.value).toDate();I.value=!0,(!D||!D(y))&&M(y)&&(u.value=W().locale(m.value),Q(u.value))},B=F(()=>e.timeFormat||fn(e.format)),le=F(()=>e.dateFormat||pn(e.format)),de=F(()=>{if(K.value)return K.value;if(!(!e.parsedValue&&!h.value))return(e.parsedValue||u.value).format(B.value)}),we=F(()=>{if(_.value)return _.value;if(!(!e.parsedValue&&!h.value))return(e.parsedValue||u.value).format(le.value)}),xe=H(!1),Ie=()=>{xe.value=!0},Le=()=>{xe.value=!1},Xe=c=>({hour:c.hour(),minute:c.minute(),second:c.second(),year:c.year(),month:c.month(),date:c.date()}),Ct=(c,y,ne)=>{const{hour:Pe,minute:Ee,second:it}=Xe(c),Et=e.parsedValue?e.parsedValue.hour(Pe).minute(Ee).second(it):c;u.value=Et,Q(u.value,!0),ne||(xe.value=y)},yt=c=>{const y=W(c,B.value).locale(m.value);if(y.isValid()&&M(y)){const{year:ne,month:Pe,date:Ee}=Xe(u.value);u.value=y.year(ne).month(Pe).date(Ee),K.value=null,xe.value=!1,Q(u.value,!0)}},ge=c=>{const y=W(c,le.value).locale(m.value);if(y.isValid()){if(D&&D(y.toDate()))return;const{hour:ne,minute:Pe,second:Ee}=Xe(u.value);u.value=y.hour(ne).minute(Pe).second(Ee),_.value=null,Q(u.value,!0)}},at=c=>W.isDayjs(c)&&c.isValid()&&(D?!D(c.toDate()):!0),et=c=>he(c)?c.map(y=>y.format(e.format)):c.format(e.format),lt=c=>W(c,e.format).locale(m.value),Je=()=>{const c=W(h.value).locale(m.value);if(!h.value){const y=V.value;return W().hour(y.hour()).minute(y.minute()).second(y.second()).locale(m.value)}return c},ze=()=>{["week","month","year","date"].includes(O.value)&&k.value?.focus()},Rt=()=>{ze(),O.value==="week"&&kt(Fe.down)},Mt=c=>{const{code:y}=c;[Fe.up,Fe.down,Fe.left,Fe.right,Fe.home,Fe.end,Fe.pageUp,Fe.pageDown].includes(y)&&(kt(y),c.stopPropagation(),c.preventDefault()),[Fe.enter,Fe.space,Fe.numpadEnter].includes(y)&&_.value===null&&K.value===null&&(c.preventDefault(),Q(u.value,!1))},kt=c=>{const{up:y,down:ne,left:Pe,right:Ee,home:it,end:Et,pageUp:g,pageDown:re}=Fe,De={year:{[y]:-4,[ne]:4,[Pe]:-1,[Ee]:1,offset:(ye,Qe)=>ye.setFullYear(ye.getFullYear()+Qe)},month:{[y]:-4,[ne]:4,[Pe]:-1,[Ee]:1,offset:(ye,Qe)=>ye.setMonth(ye.getMonth()+Qe)},week:{[y]:-1,[ne]:1,[Pe]:-1,[Ee]:1,offset:(ye,Qe)=>ye.setDate(ye.getDate()+Qe*7)},date:{[y]:-7,[ne]:7,[Pe]:-1,[Ee]:1,[it]:ye=>-ye.getDay(),[Et]:ye=>-ye.getDay()+6,[g]:ye=>-new Date(ye.getFullYear(),ye.getMonth(),0).getDate(),[re]:ye=>new Date(ye.getFullYear(),ye.getMonth()+1,0).getDate(),offset:(ye,Qe)=>ye.setDate(ye.getDate()+Qe)}},$e=u.value.toDate();for(;Math.abs(u.value.diff($e,"year",!0))<1;){const ye=De[G.value];if(!ye)return;if(ye.offset($e,It(ye[c])?ye[c]($e):ye[c]??0),D&&D($e))break;const Qe=W($e).locale(m.value);u.value=Qe,o("pick",Qe,!0);break}},J=c=>{o("panel-change",u.value.toDate(),c,L.value)};return Ce(()=>O.value,c=>{if(["month","year"].includes(c)){L.value=c;return}else if(c==="years"){L.value="year";return}else if(c==="months"){L.value="month";return}L.value="date"},{immediate:!0}),Ce(()=>L.value,()=>{S?.updatePopper()}),Ce(()=>h.value,c=>{c&&(u.value=Je())},{immediate:!0}),Ce(()=>e.parsedValue,c=>{if(c){if(E.value||he(c))return;u.value=c}else u.value=Je()},{immediate:!0}),o("set-picker-option",["isValidValue",at]),o("set-picker-option",["formatToString",et]),o("set-picker-option",["parseUserInput",lt]),o("set-picker-option",["handleFocusPicker",Rt]),(c,y)=>(Y(),U("div",{class:w([n(s).b(),n(l).b(),{"has-sidebar":c.$slots.sidebar||R.value,"has-time":Re.value}])},[j("div",{class:w(n(s).e("body-wrapper"))},[fe(c.$slots,"sidebar",{class:w(n(s).e("sidebar"))}),R.value?(Y(),U("div",{key:0,class:w(n(s).e("sidebar"))},[(Y(!0),U(Me,null,qe(n(x),(ne,Pe)=>(Y(),U("button",{key:Pe,type:"button",class:w(n(s).e("shortcut")),onClick:Ee=>N(ne)},ve(ne.text),11,is))),128))],2)):me("",!0),j("div",{class:w(n(s).e("body"))},[Re.value?(Y(),U("div",{key:0,class:w(n(l).e("time-header"))},[j("span",{class:w(n(l).e("editor-wrap"))},[ie(n(ct),{placeholder:n(b)("el.datepicker.selectDate"),"model-value":we.value,"validate-event":!1,onInput:y[0]||(y[0]=ne=>_.value=ne),onChange:ge},null,8,["placeholder","model-value"])],2),Ye((Y(),U("span",{class:w(n(l).e("editor-wrap"))},[ie(n(ct),{placeholder:n(b)("el.datepicker.selectTime"),"model-value":de.value,"validate-event":!1,onFocus:Ie,onInput:y[1]||(y[1]=ne=>K.value=ne),onChange:yt},null,8,["placeholder","model-value"]),ie(n(ga),{visible:xe.value,format:B.value,"parsed-value":u.value,onPick:Ct},null,8,["visible","format","parsed-value"])],2)),[[n(ha),Le]])],2)):me("",!0),Ye(j("div",{class:w([n(l).e("header"),(L.value==="year"||L.value==="month")&&n(l).e("header--bordered")])},[j("span",{class:w(n(l).e("prev-btn"))},[Ye(j("button",{type:"button","aria-label":n(b)("el.datepicker.prevYear"),class:w(["d-arrow-left",n(s).e("icon-btn")]),onClick:y[2]||(y[2]=ne=>se(!1))},[fe(c.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,us),[[nt,L.value!=="date"]]),Ye(j("button",{type:"button","aria-label":n(b)("el.datepicker.prevMonth"),class:w([n(s).e("icon-btn"),"arrow-left"]),onClick:y[3]||(y[3]=ne=>ae(!1))},[fe(c.$slots,"prev-month",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,cs),[[nt,L.value==="date"]])],2),j("span",{role:"button",class:w(n(l).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:y[4]||(y[4]=St(ne=>oe("year"),["enter"])),onClick:y[5]||(y[5]=ne=>oe("year"))},ve(C.value),35),Ye(j("span",{role:"button","aria-live":"polite",tabindex:"0",class:w([n(l).e("header-label"),{active:L.value==="month"}]),onKeydown:y[6]||(y[6]=St(ne=>oe("month"),["enter"])),onClick:y[7]||(y[7]=ne=>oe("month"))},ve(n(b)(`el.datepicker.month${A.value+1}`)),35),[[nt,L.value==="date"]]),j("span",{class:w(n(l).e("next-btn"))},[Ye(j("button",{type:"button","aria-label":n(b)("el.datepicker.nextMonth"),class:w([n(s).e("icon-btn"),"arrow-right"]),onClick:y[8]||(y[8]=ne=>ae(!0))},[fe(c.$slots,"next-month",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,ds),[[nt,L.value==="date"]]),Ye(j("button",{type:"button","aria-label":n(b)("el.datepicker.nextYear"),class:w([n(s).e("icon-btn"),"d-arrow-right"]),onClick:y[9]||(y[9]=ne=>se(!0))},[fe(c.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,ms),[[nt,L.value!=="date"]])],2)],2),[[nt,L.value!=="time"]]),j("div",{class:w(n(s).e("content")),onKeydown:Mt},[L.value==="date"?(Y(),Te(Xt,{key:0,ref_key:"currentViewRef",ref:k,"selection-mode":O.value,date:u.value,"parsed-value":c.parsedValue,"disabled-date":n(D),"cell-class-name":n(p),onPick:z},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):me("",!0),L.value==="year"?(Y(),Te(ta,{key:1,ref_key:"currentViewRef",ref:k,"selection-mode":O.value,date:u.value,"disabled-date":n(D),"parsed-value":c.parsedValue,onPick:Z},null,8,["selection-mode","date","disabled-date","parsed-value"])):me("",!0),L.value==="month"?(Y(),Te(ea,{key:2,ref_key:"currentViewRef",ref:k,"selection-mode":O.value,date:u.value,"parsed-value":c.parsedValue,"disabled-date":n(D),onPick:q},null,8,["selection-mode","date","parsed-value","disabled-date"])):me("",!0)],34)],2)],2),Ye(j("div",{class:w(n(s).e("footer"))},[Ye(j("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:te.value,onClick:ce},ve(n(b)("el.datepicker.now")),9,fs),[[nt,!E.value&&c.showNow]]),j("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:Be.value,onClick:ee},ve(n(b)("el.datepicker.confirm")),9,ps)],2),[[nt,Ne.value]])],2))}});$n.__docgenInfo={exportName:"default",displayName:"panel-date-pick",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"prev-month"},{name:"next-month"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-pick.vue"]};const vs=ke({...Vn,...Ta,visible:Boolean}),On=r=>{const{emit:t}=rn(),a=ra(),e=oa();return s=>{const l=It(s.value)?s.value():s.value;if(l){t("pick",[W(l[0]).locale(r.value),W(l[1]).locale(r.value)]);return}s.onClick&&s.onClick({attrs:a,slots:e,emit:t})}},Tn=(r,{defaultValue:t,leftDate:a,rightDate:e,unit:o,onParsedValueChanged:s})=>{const{emit:l}=rn(),{pickerNs:i}=_e(sa),v=Se("date-range-picker"),{t:b,lang:m}=He(),d=On(m),S=H(),x=H(),D=H({endDate:null,selecting:!1}),p=I=>{D.value=I},f=(I=!1)=>{const P=n(S),V=n(x);Pt([P,V])&&l("pick",[P,V],I)},h=I=>{D.value.selecting=I,I||(D.value.endDate=null)},k=I=>{if(he(I)&&I.length===2){const[P,V]=I;S.value=P,a.value=P,x.value=V,s(n(S),n(x))}else u()},u=()=>{const[I,P]=Aa(n(t),{lang:n(m),unit:o,unlinkPanels:r.unlinkPanels});S.value=void 0,x.value=void 0,a.value=I,e.value=P};return Ce(t,I=>{I&&u()},{immediate:!0}),Ce(()=>r.parsedValue,k,{immediate:!0}),{minDate:S,maxDate:x,rangeState:D,lang:m,ppNs:i,drpNs:v,handleChangeRange:p,handleRangeConfirm:f,handleShortcutClick:d,onSelect:h,onReset:k,t:b}},gs=["onClick"],hs=["aria-label"],bs=["disabled","aria-label"],ys=["disabled","aria-label"],ks=["disabled","aria-label"],ws=["disabled","aria-label"],Ds=["aria-label"],qt="month",Nn=Ve({__name:"panel-date-range",props:vs,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(r,{emit:t}){const a=r,e=t,o=_e("EP_PICKER_BASE"),{disabledDate:s,cellClassName:l,defaultTime:i,clearable:v}=o.props,b=We(o.props,"format"),m=We(o.props,"shortcuts"),d=We(o.props,"defaultValue"),{lang:S}=He(),x=H(W().locale(S.value)),D=H(W().locale(S.value).add(1,qt)),{minDate:p,maxDate:f,rangeState:h,ppNs:k,drpNs:u,handleChangeRange:I,handleRangeConfirm:P,handleShortcutClick:V,onSelect:A,onReset:T,t:$}=Tn(a,{defaultValue:d,leftDate:x,rightDate:D,unit:qt,onParsedValueChanged:kt});Ce(()=>a.visible,J=>{!J&&h.value.selecting&&(T(a.parsedValue),A(!1))});const _=H({min:null,max:null}),K=H({min:null,max:null}),M=F(()=>`${x.value.year()} ${$("el.datepicker.year")} ${$(`el.datepicker.month${x.value.month()+1}`)}`),X=F(()=>`${D.value.year()} ${$("el.datepicker.year")} ${$(`el.datepicker.month${D.value.month()+1}`)}`),Q=F(()=>x.value.year()),z=F(()=>x.value.month()),ae=F(()=>D.value.year()),se=F(()=>D.value.month()),L=F(()=>!!m.value.length),C=F(()=>_.value.min!==null?_.value.min:p.value?p.value.format(R.value):""),N=F(()=>_.value.max!==null?_.value.max:f.value||p.value?(f.value||p.value).format(R.value):""),O=F(()=>K.value.min!==null?K.value.min:p.value?p.value.format(G.value):""),E=F(()=>K.value.max!==null?K.value.max:f.value||p.value?(f.value||p.value).format(G.value):""),G=F(()=>a.timeFormat||fn(b.value)),R=F(()=>a.dateFormat||pn(b.value)),q=J=>Pt(J)&&(s?!s(J[0].toDate())&&!s(J[1].toDate()):!0),Z=()=>{x.value=x.value.subtract(1,"month"),a.unlinkPanels||(D.value=x.value.add(1,"month")),te("month")},oe=()=>{a.unlinkPanels?D.value=D.value.add(1,"month"):(x.value=x.value.add(1,"month"),D.value=x.value.add(1,"month")),te("month")},Re=()=>{x.value=x.value.add(1,"year"),te("year")},Ne=()=>{x.value=x.value.add(1,"month"),te("month")},Be=()=>{D.value=D.value.subtract(1,"year"),te("year")},ee=()=>{D.value=D.value.subtract(1,"month"),te("month")},te=J=>{e("panel-change",[x.value.toDate(),D.value.toDate()],J)},ce=F(()=>{const J=(z.value+1)%12,c=z.value+1>=12?1:0;return a.unlinkPanels&&new Date(Q.value+c,J)<new Date(ae.value,se.value)}),B=F(()=>a.unlinkPanels&&ae.value*12+se.value-(Q.value*12+z.value+1)>=12),le=F(()=>!(p.value&&f.value&&!h.value.selecting&&Pt([p.value,f.value]))),de=F(()=>a.type==="datetime"||a.type==="datetimerange"),we=(J,c)=>{if(J)return i?W(i[c]||i).locale(S.value).year(J.year()).month(J.month()).date(J.date()):J},xe=(J,c=!0)=>{const y=J.minDate,ne=J.maxDate,Pe=we(y,0),Ee=we(ne,1);f.value===Ee&&p.value===Pe||(e("calendar-change",[y.toDate(),ne&&ne.toDate()]),f.value=Ee,p.value=Pe,!(!c||de.value)&&P())},Ie=H(!1),Le=H(!1),Xe=()=>{Ie.value=!1},Ct=()=>{Le.value=!1},yt=(J,c)=>{_.value[c]=J;const y=W(J,R.value).locale(S.value);if(y.isValid()){if(s&&s(y.toDate()))return;c==="min"?(x.value=y,p.value=(p.value||x.value).year(y.year()).month(y.month()).date(y.date()),!a.unlinkPanels&&(!f.value||f.value.isBefore(p.value))&&(D.value=y.add(1,"month"),f.value=p.value.add(1,"month"))):(D.value=y,f.value=(f.value||D.value).year(y.year()).month(y.month()).date(y.date()),!a.unlinkPanels&&(!p.value||p.value.isAfter(f.value))&&(x.value=y.subtract(1,"month"),p.value=f.value.subtract(1,"month")))}},ge=(J,c)=>{_.value[c]=null},at=(J,c)=>{K.value[c]=J;const y=W(J,G.value).locale(S.value);y.isValid()&&(c==="min"?(Ie.value=!0,p.value=(p.value||x.value).hour(y.hour()).minute(y.minute()).second(y.second())):(Le.value=!0,f.value=(f.value||D.value).hour(y.hour()).minute(y.minute()).second(y.second()),D.value=f.value))},et=(J,c)=>{K.value[c]=null,c==="min"?(x.value=p.value,Ie.value=!1,(!f.value||f.value.isBefore(p.value))&&(f.value=p.value)):(D.value=f.value,Le.value=!1,f.value&&f.value.isBefore(p.value)&&(p.value=f.value))},lt=(J,c,y)=>{K.value.min||(J&&(x.value=J,p.value=(p.value||x.value).hour(J.hour()).minute(J.minute()).second(J.second())),y||(Ie.value=c),(!f.value||f.value.isBefore(p.value))&&(f.value=p.value,D.value=J))},Je=(J,c,y)=>{K.value.max||(J&&(D.value=J,f.value=(f.value||D.value).hour(J.hour()).minute(J.minute()).second(J.second())),y||(Le.value=c),f.value&&f.value.isBefore(p.value)&&(p.value=f.value))},ze=()=>{x.value=Aa(n(d),{lang:n(S),unit:"month",unlinkPanels:a.unlinkPanels})[0],D.value=x.value.add(1,"month"),f.value=void 0,p.value=void 0,e("pick",null)},Rt=J=>he(J)?J.map(c=>c.format(b.value)):J.format(b.value),Mt=J=>he(J)?J.map(c=>W(c,b.value).locale(S.value)):W(J,b.value).locale(S.value);function kt(J,c){if(a.unlinkPanels&&c){const y=J?.year()||0,ne=J?.month()||0,Pe=c.year(),Ee=c.month();D.value=y===Pe&&ne===Ee?c.add(1,qt):c}else D.value=x.value.add(1,qt),c&&(D.value=D.value.hour(c.hour()).minute(c.minute()).second(c.second()))}return e("set-picker-option",["isValidValue",q]),e("set-picker-option",["parseUserInput",Mt]),e("set-picker-option",["formatToString",Rt]),e("set-picker-option",["handleClear",ze]),(J,c)=>(Y(),U("div",{class:w([n(k).b(),n(u).b(),{"has-sidebar":J.$slots.sidebar||L.value,"has-time":de.value}])},[j("div",{class:w(n(k).e("body-wrapper"))},[fe(J.$slots,"sidebar",{class:w(n(k).e("sidebar"))}),L.value?(Y(),U("div",{key:0,class:w(n(k).e("sidebar"))},[(Y(!0),U(Me,null,qe(m.value,(y,ne)=>(Y(),U("button",{key:ne,type:"button",class:w(n(k).e("shortcut")),onClick:Pe=>n(V)(y)},ve(y.text),11,gs))),128))],2)):me("",!0),j("div",{class:w(n(k).e("body"))},[de.value?(Y(),U("div",{key:0,class:w(n(u).e("time-header"))},[j("span",{class:w(n(u).e("editors-wrap"))},[j("span",{class:w(n(u).e("time-picker-wrap"))},[ie(n(ct),{disabled:n(h).selecting,placeholder:n($)("el.datepicker.startDate"),class:w(n(u).e("editor")),"model-value":C.value,"validate-event":!1,onInput:c[0]||(c[0]=y=>yt(y,"min")),onChange:c[1]||(c[1]=y=>ge(y,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),Ye((Y(),U("span",{class:w(n(u).e("time-picker-wrap"))},[ie(n(ct),{class:w(n(u).e("editor")),disabled:n(h).selecting,placeholder:n($)("el.datepicker.startTime"),"model-value":O.value,"validate-event":!1,onFocus:c[2]||(c[2]=y=>Ie.value=!0),onInput:c[3]||(c[3]=y=>at(y,"min")),onChange:c[4]||(c[4]=y=>et(y,"min"))},null,8,["class","disabled","placeholder","model-value"]),ie(n(ga),{visible:Ie.value,format:G.value,"datetime-role":"start","parsed-value":x.value,onPick:lt},null,8,["visible","format","parsed-value"])],2)),[[n(ha),Xe]])],2),j("span",null,[ie(n(be),{name:"solid chevron-right"})]),j("span",{class:w([n(u).e("editors-wrap"),"is-right"])},[j("span",{class:w(n(u).e("time-picker-wrap"))},[ie(n(ct),{class:w(n(u).e("editor")),disabled:n(h).selecting,placeholder:n($)("el.datepicker.endDate"),"model-value":N.value,readonly:!n(p),"validate-event":!1,onInput:c[5]||(c[5]=y=>yt(y,"max")),onChange:c[6]||(c[6]=y=>ge(y,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),Ye((Y(),U("span",{class:w(n(u).e("time-picker-wrap"))},[ie(n(ct),{class:w(n(u).e("editor")),disabled:n(h).selecting,placeholder:n($)("el.datepicker.endTime"),"model-value":E.value,readonly:!n(p),"validate-event":!1,onFocus:c[7]||(c[7]=y=>n(p)&&(Le.value=!0)),onInput:c[8]||(c[8]=y=>at(y,"max")),onChange:c[9]||(c[9]=y=>et(y,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),ie(n(ga),{"datetime-role":"end",visible:Le.value,format:G.value,"parsed-value":D.value,onPick:Je},null,8,["visible","format","parsed-value"])],2)),[[n(ha),Ct]])],2)],2)):me("",!0),j("div",{class:w([[n(k).e("content"),n(u).e("content")],"is-left"])},[j("div",{class:w(n(u).e("header"))},[j("button",{type:"button",class:w([n(k).e("icon-btn"),"arrow-left"]),"aria-label":n($)("el.datepicker.prevMonth"),onClick:Z},[fe(J.$slots,"prev-month",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,hs),J.unlinkPanels?(Y(),U("button",{key:0,type:"button",disabled:!B.value,class:w([[n(k).e("icon-btn"),{"is-disabled":!B.value}],"d-arrow-right"]),"aria-label":n($)("el.datepicker.nextYear"),onClick:Re},[fe(J.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,bs)):me("",!0),J.unlinkPanels?(Y(),U("button",{key:1,type:"button",disabled:!ce.value,class:w([[n(k).e("icon-btn"),{"is-disabled":!ce.value}],"arrow-right"]),"aria-label":n($)("el.datepicker.nextMonth"),onClick:Ne},[fe(J.$slots,"next-month",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,ys)):me("",!0),j("div",null,ve(M.value),1)],2),ie(Xt,{"selection-mode":"range",date:x.value,"min-date":n(p),"max-date":n(f),"range-state":n(h),"disabled-date":n(s),"cell-class-name":n(l),onChangerange:n(I),onPick:xe,onSelect:n(A)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),j("div",{class:w([[n(k).e("content"),n(u).e("content")],"is-right"])},[j("div",{class:w(n(u).e("header"))},[J.unlinkPanels?(Y(),U("button",{key:0,type:"button",disabled:!B.value,class:w([[n(k).e("icon-btn"),{"is-disabled":!B.value}],"d-arrow-left"]),"aria-label":n($)("el.datepicker.prevYear"),onClick:Be},[fe(J.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,ks)):me("",!0),J.unlinkPanels?(Y(),U("button",{key:1,type:"button",disabled:!ce.value,class:w([[n(k).e("icon-btn"),{"is-disabled":!ce.value}],"arrow-left"]),"aria-label":n($)("el.datepicker.prevMonth"),onClick:ee},[fe(J.$slots,"prev-month",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,ws)):me("",!0),j("button",{type:"button",class:w([n(k).e("icon-btn"),"arrow-right"]),"aria-label":n($)("el.datepicker.nextMonth"),onClick:oe},[fe(J.$slots,"next-month",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,Ds),j("div",null,ve(X.value),1)],2),ie(Xt,{"selection-mode":"range",date:D.value,"min-date":n(p),"max-date":n(f),"range-state":n(h),"disabled-date":n(s),"cell-class-name":n(l),onChangerange:n(I),onPick:xe,onSelect:n(A)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),de.value?(Y(),U("div",{key:0,class:w(n(k).e("footer"))},[n(v)?(Y(),Te(n(Ga),{key:0,text:"",size:"sm",class:w(n(k).e("link-btn")),onClick:ze},{default:Ke(()=>[ut(ve(n($)("el.datepicker.clear")),1)]),_:1},8,["class"])):me("",!0),ie(n(Ga),{plain:"",size:"sm",class:w(n(k).e("link-btn")),disabled:le.value,onClick:c[10]||(c[10]=y=>n(P)(!1))},{default:Ke(()=>[ut(ve(n($)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):me("",!0)],2))}});Nn.__docgenInfo={exportName:"default",displayName:"panel-date-range",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"calendar-change"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-month"},{name:"next-year"},{name:"next-month"},{name:"prev-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-range.vue"]};const Ss=ke({...Ta}),xs=["pick","set-picker-option","calendar-change"],Ps=({unlinkPanels:r,leftDate:t,rightDate:a})=>{const{t:e}=He(),o=()=>{t.value=t.value.subtract(1,"year"),r.value||(a.value=a.value.subtract(1,"year"))},s=()=>{r.value||(t.value=t.value.add(1,"year")),a.value=a.value.add(1,"year")},l=()=>{t.value=t.value.add(1,"year")},i=()=>{a.value=a.value.subtract(1,"year")},v=F(()=>`${t.value.year()} ${e("el.datepicker.year")}`),b=F(()=>`${a.value.year()} ${e("el.datepicker.year")}`),m=F(()=>t.value.year()),d=F(()=>a.value.year()===t.value.year()?t.value.year()+1:a.value.year());return{leftPrevYear:o,rightNextYear:s,leftNextYear:l,rightPrevYear:i,leftLabel:v,rightLabel:b,leftYear:m,rightYear:d}},Cs=["onClick"],Rs=["disabled"],Ms=["disabled"],_t="year",An=Ve({name:"DatePickerMonthRange",__name:"panel-month-range",props:Ss,emits:xs,setup(r,{emit:t}){const a=r,e=t,{lang:o}=He(),s=_e("EP_PICKER_BASE"),{shortcuts:l,disabledDate:i}=s.props,v=We(s.props,"format"),b=We(s.props,"defaultValue"),m=H(W().locale(o.value)),d=H(W().locale(o.value).add(1,_t)),{minDate:S,maxDate:x,rangeState:D,ppNs:p,drpNs:f,handleChangeRange:h,handleRangeConfirm:k,handleShortcutClick:u,onSelect:I}=Tn(a,{defaultValue:b,leftDate:m,rightDate:d,unit:_t,onParsedValueChanged:C}),P=F(()=>!!l.length),{leftPrevYear:V,rightNextYear:A,leftNextYear:T,rightPrevYear:$,leftLabel:_,rightLabel:K,leftYear:M,rightYear:X}=Ps({unlinkPanels:We(a,"unlinkPanels"),leftDate:m,rightDate:d}),Q=F(()=>a.unlinkPanels&&X.value>M.value+1),z=(N,O=!0)=>{const E=N.minDate,G=N.maxDate;x.value===G&&S.value===E||(e("calendar-change",[E.toDate(),G&&G.toDate()]),x.value=G,S.value=E,O&&k())},ae=()=>{m.value=Aa(n(b),{lang:n(o),unit:"year",unlinkPanels:a.unlinkPanels})[0],d.value=m.value.add(1,"year"),e("pick",null)},se=N=>he(N)?N.map(O=>O.format(v.value)):N.format(v.value),L=N=>he(N)?N.map(O=>W(O,v.value).locale(o.value)):W(N,v.value).locale(o.value);function C(N,O){if(a.unlinkPanels&&O){const E=N?.year()||0,G=O.year();d.value=E===G?O.add(1,_t):O}else d.value=m.value.add(1,_t)}return e("set-picker-option",["isValidValue",Pt]),e("set-picker-option",["formatToString",se]),e("set-picker-option",["parseUserInput",L]),e("set-picker-option",["handleClear",ae]),(N,O)=>(Y(),U("div",{class:w([n(p).b(),n(f).b(),{"has-sidebar":!!N.$slots.sidebar||P.value}])},[j("div",{class:w(n(p).e("body-wrapper"))},[fe(N.$slots,"sidebar",{class:w(n(p).e("sidebar"))}),P.value?(Y(),U("div",{key:0,class:w(n(p).e("sidebar"))},[(Y(!0),U(Me,null,qe(n(l),(E,G)=>(Y(),U("button",{key:G,type:"button",class:w(n(p).e("shortcut")),onClick:R=>n(u)(E)},ve(E.text),11,Cs))),128))],2)):me("",!0),j("div",{class:w(n(p).e("body"))},[j("div",{class:w([[n(p).e("content"),n(f).e("content")],"is-left"])},[j("div",{class:w(n(f).e("header"))},[j("button",{type:"button",class:w([n(p).e("icon-btn"),"d-arrow-left"]),onClick:O[0]||(O[0]=(...E)=>n(V)&&n(V)(...E))},[fe(N.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],2),N.unlinkPanels?(Y(),U("button",{key:0,type:"button",disabled:!Q.value,class:w([[n(p).e("icon-btn"),{[n(p).is("disabled")]:!Q.value}],"d-arrow-right"]),onClick:O[1]||(O[1]=(...E)=>n(T)&&n(T)(...E))},[fe(N.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,Rs)):me("",!0),j("div",null,ve(n(_)),1)],2),ie(ea,{"selection-mode":"range",date:m.value,"min-date":n(S),"max-date":n(x),"range-state":n(D),"disabled-date":n(i),onChangerange:n(h),onPick:z,onSelect:n(I)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),j("div",{class:w([[n(p).e("content"),n(f).e("content")],"is-right"])},[j("div",{class:w(n(f).e("header"))},[N.unlinkPanels?(Y(),U("button",{key:0,type:"button",disabled:!Q.value,class:w([[n(p).e("icon-btn"),{"is-disabled":!Q.value}],"d-arrow-left"]),onClick:O[2]||(O[2]=(...E)=>n($)&&n($)(...E))},[fe(N.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,Ms)):me("",!0),j("button",{type:"button",class:w([n(p).e("icon-btn"),"d-arrow-right"]),onClick:O[3]||(O[3]=(...E)=>n(A)&&n(A)(...E))},[fe(N.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],2),j("div",null,ve(n(K)),1)],2),ie(ea,{"selection-mode":"range",date:d.value,"min-date":n(S),"max-date":n(x),"range-state":n(D),"disabled-date":n(i),onChangerange:n(h),onPick:z,onSelect:n(I)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}});An.__docgenInfo={name:"DatePickerMonthRange",exportName:"default",displayName:"panel-month-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-month-range.vue"]};const Es=ke({...Ta}),Fs=["pick","set-picker-option","calendar-change"],Vs=({unlinkPanels:r,leftDate:t,rightDate:a})=>{const e=()=>{t.value=t.value.subtract(10,"year"),r.value||(a.value=a.value.subtract(10,"year"))},o=()=>{r.value||(t.value=t.value.add(10,"year")),a.value=a.value.add(10,"year")},s=()=>{t.value=t.value.add(10,"year")},l=()=>{a.value=a.value.subtract(10,"year")},i=F(()=>{const d=Math.floor(t.value.year()/10)*10;return`${d}-${d+9}`}),v=F(()=>{const d=Math.floor(a.value.year()/10)*10;return`${d}-${d+9}`}),b=F(()=>Math.floor(t.value.year()/10)*10+9),m=F(()=>Math.floor(a.value.year()/10)*10);return{leftPrevYear:e,rightNextYear:o,leftNextYear:s,rightPrevYear:l,leftLabel:i,rightLabel:v,leftYear:b,rightYear:m}},Is=["onClick"],$s=["disabled"],Os=["disabled"],Ja="year",Ln=Ve({name:"DatePickerYearRange",__name:"panel-year-range",props:Es,emits:Fs,setup(r,{emit:t}){const a=r,e=t,{lang:o}=He(),s=H(W().locale(o.value)),l=H(s.value.add(10,"year")),{pickerNs:i}=_e(sa),v=Se("date-range-picker"),b=F(()=>!!z.length),m=F(()=>[i.b(),v.b(),{"has-sidebar":!!oa().sidebar||b.value}]),d=F(()=>({content:[i.e("content"),v.e("content"),"is-left"],arrowLeftBtn:[i.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[i.e("icon-btn"),{[i.is("disabled")]:!V.value},"d-arrow-right"]})),S=F(()=>({content:[i.e("content"),v.e("content"),"is-right"],arrowLeftBtn:[i.e("icon-btn"),{"is-disabled":!V.value},"d-arrow-left"],arrowRightBtn:[i.e("icon-btn"),"d-arrow-right"]})),x=On(o),{leftPrevYear:D,rightNextYear:p,leftNextYear:f,rightPrevYear:h,leftLabel:k,rightLabel:u,leftYear:I,rightYear:P}=Vs({unlinkPanels:We(a,"unlinkPanels"),leftDate:s,rightDate:l}),V=F(()=>a.unlinkPanels&&P.value>I.value+1),A=H(),T=H(),$=H({endDate:null,selecting:!1}),_=R=>{$.value=R},K=(R,q=!0)=>{const Z=R.minDate,oe=R.maxDate;T.value===oe&&A.value===Z||(e("calendar-change",[Z.toDate(),oe&&oe.toDate()]),T.value=oe,A.value=Z,q&&M())},M=(R=!1)=>{Pt([A.value,T.value])&&e("pick",[A.value,T.value],R)},X=R=>{$.value.selecting=R,R||($.value.endDate=null)},Q=_e("EP_PICKER_BASE"),{shortcuts:z,disabledDate:ae}=Q.props,se=We(Q.props,"format"),L=We(Q.props,"defaultValue"),C=()=>{let R;if(he(L.value)){const q=W(L.value[0]);let Z=W(L.value[1]);return a.unlinkPanels||(Z=q.add(10,Ja)),[q,Z]}else L.value?R=W(L.value):R=W();return R=R.locale(o.value),[R,R.add(10,Ja)]};Ce(()=>L.value,R=>{if(R){const q=C();s.value=q[0],l.value=q[1]}},{immediate:!0}),Ce(()=>a.parsedValue,R=>{if(R&&R.length===2)if(A.value=R[0],T.value=R[1],s.value=A.value,a.unlinkPanels&&T.value){const q=A.value.year(),Z=T.value.year();l.value=q===Z?T.value.add(10,"year"):T.value}else l.value=s.value.add(10,"year");else{const q=C();A.value=void 0,T.value=void 0,s.value=q[0],l.value=q[1]}},{immediate:!0});const N=R=>he(R)?R.map(q=>W(q,se.value).locale(o.value)):W(R,se.value).locale(o.value),O=R=>he(R)?R.map(q=>q.format(se.value)):R.format(se.value),E=R=>Pt(R)&&(ae?!ae(R[0].toDate())&&!ae(R[1].toDate()):!0),G=()=>{const R=C();s.value=R[0],l.value=R[1],T.value=void 0,A.value=void 0,e("pick",null)};return e("set-picker-option",["isValidValue",E]),e("set-picker-option",["parseUserInput",N]),e("set-picker-option",["formatToString",O]),e("set-picker-option",["handleClear",G]),(R,q)=>(Y(),U("div",{class:w(m.value)},[j("div",{class:w(n(i).e("body-wrapper"))},[fe(R.$slots,"sidebar",{class:w(n(i).e("sidebar"))}),b.value?(Y(),U("div",{key:0,class:w(n(i).e("sidebar"))},[(Y(!0),U(Me,null,qe(n(z),(Z,oe)=>(Y(),U("button",{key:oe,type:"button",class:w(n(i).e("shortcut")),onClick:Re=>n(x)(Z)},ve(Z.text),11,Is))),128))],2)):me("",!0),j("div",{class:w(n(i).e("body"))},[j("div",{class:w(d.value.content)},[j("div",{class:w(n(v).e("header"))},[j("button",{type:"button",class:w(d.value.arrowLeftBtn),onClick:q[0]||(q[0]=(...Z)=>n(D)&&n(D)(...Z))},[fe(R.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],2),R.unlinkPanels?(Y(),U("button",{key:0,type:"button",disabled:!V.value,class:w(d.value.arrowRightBtn),onClick:q[1]||(q[1]=(...Z)=>n(f)&&n(f)(...Z))},[fe(R.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,$s)):me("",!0),j("div",null,ve(n(k)),1)],2),ie(ta,{"selection-mode":"range",date:s.value,"min-date":A.value,"max-date":T.value,"range-state":$.value,"disabled-date":n(ae),onChangerange:_,onPick:K,onSelect:X},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),j("div",{class:w(S.value.content)},[j("div",{class:w(n(v).e("header"))},[R.unlinkPanels?(Y(),U("button",{key:0,type:"button",disabled:!V.value,class:w(S.value.arrowLeftBtn),onClick:q[2]||(q[2]=(...Z)=>n(h)&&n(h)(...Z))},[fe(R.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,Os)):me("",!0),j("button",{type:"button",class:w(S.value.arrowRightBtn),onClick:q[3]||(q[3]=(...Z)=>n(p)&&n(p)(...Z))},[fe(R.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],2),j("div",null,ve(n(u)),1)],2),ie(ta,{"selection-mode":"range",date:l.value,"min-date":A.value,"max-date":T.value,"range-state":$.value,"disabled-date":n(ae),onChangerange:_,onPick:K,onSelect:X},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}});Ln.__docgenInfo={name:"DatePickerYearRange",exportName:"default",displayName:"panel-year-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-year-range.vue"]};const Ts=function(r){switch(r){case"daterange":case"datetimerange":return Nn;case"monthrange":return An;case"yearrange":return Ln;default:return $n}};W.extend(Vr);W.extend(Tr);W.extend(hn);W.extend(Ar);W.extend(qr);W.extend(Yr);W.extend(jr);W.extend(Hr);const Ns=Ve({name:"GDatePicker",install:null,props:Bo,emits:["update:modelValue"],setup(r,{expose:t,emit:a,slots:e}){const o=Se("picker-panel");pt("ElPopperOptions",Ze(We(r,"popperOptions"))),pt(sa,{slots:e,pickerNs:o});const s=H();t({focus:()=>{s.value?.focus()},blur:()=>{s.value?.blur()},handleOpen:()=>{s.value?.handleOpen()},handleClose:()=>{s.value?.handleClose()}});const i=v=>{a("update:modelValue",v)};return()=>{const v=r.format??(yr[r.type]||kr),b=Ts(r.type);return Dt(Dt(wr,{...r,format:v,type:r.type,ref:s,"onUpdate:modelValue":i},{default:m=>Dt(b,{...m},{"prev-month":e["prev-month"],"next-month":e["next-month"],"prev-year":e["prev-year"],"next-year":e["next-year"]}),"range-separator":e["range-separator"]}))}}}),As=Tt(Ns),Qa=["hours","minutes","seconds"],Ls="HH:mm:ss",ca=(r,t)=>[r>0?r-1:void 0,r,r<t?r+1:void 0],Xa=function(r,t){const a=qa(r),e=qa(t);return a&&e?r.getTime()===t.getTime():!a&&!e?r===t:!1},en=function(r,t){const a=he(r),e=he(t);return a&&e?r.length!==t.length?!1:r.every((o,s)=>Xa(o,t[s])):!a&&!e?Xa(r,t):!1},tn=function(r,t,a){const e=sn(t)||t==="x"?W(r).locale(a):W(r,t).locale(a);return e.isValid()?e:void 0},an=function(r,t,a){return sn(t)?r:t==="x"?+r:W(r).locale(a).format(t)},da=(r,t)=>{const a=[],e=t?.();for(let o=0;o<r;o++)a.push(e?.includes(o)??!1);return a},Yt=r=>he(r)?r.map(t=>t.toDate()):r.toDate(),qn=ke({disabledHours:{type:ue(Function)},disabledMinutes:{type:ue(Function)},disabledSeconds:{type:ue(Function)}}),_n=ke({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Yn=ke({id:{type:ue([Array,String])},name:{type:ue([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:ue([String,Object]),default:Rr},editable:{type:Boolean,default:!0},prefixIcon:{type:ue(String),default:""},readonly:Boolean,disabled:Boolean,label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},popperOptions:{type:ue(Object),default:()=>({})},modelValue:{type:ue([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:ue([Date,Array])},defaultTime:{type:ue([Date,Array])},isRange:Boolean,...qn,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:ue([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:ue(String),values:pr,default:"bottom"},fallbackPlacements:{type:ue(Array),default:["bottom","top","right","left"]},...nr,...Fa(["ariaLabel"]),showNow:{type:Boolean,default:!0}}),qs=ke({id:{type:ue(Array)},name:{type:ue(Array)},modelValue:{type:ue([Array,String])},startPlaceholder:String,endPlaceholder:String,label:String}),_s=["id","name","placeholder","value"],Ys=["id","name","placeholder","value"],Bn=Ve({name:"PickerRangeTrigger",inheritAttrs:!1,__name:"picker-range-trigger",props:qs,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(r,{expose:t,emit:a}){const e=r,o=a,s=dn(),l=Se("input"),i=Se("date"),v=Se("range"),b=H(void 0),m=H(null),d=H(),S=H(),{wrapperRef:x,isFocused:D}=Va(d),p=M=>{o("click",M)},f=M=>{o("mouseenter",M)},h=M=>{o("mouseleave",M)},k=M=>{o("mouseenter",M)},u=M=>{o("startInput",M)},I=M=>{o("endInput",M)},P=M=>{o("startChange",M)},V=M=>{o("endChange",M)},A=()=>{d.value?.focus()},T=()=>{d.value?.blur(),S.value?.blur()},$=F(()=>{const M=!!_.value||D.value;return{left:M?void 0:`calc(${b.value} + 16px)`,zIndex:M?void 0:10}}),_=F(()=>Ra(e.modelValue)?"":String(e.modelValue));return Ea(m,()=>{requestAnimationFrame(()=>{const M=m.value?.getBoundingClientRect().width;b.value=`${M}px`})}),t({focus:A,blur:T}),(M,X)=>(Y(),U("div",{ref_key:"wrapperRef",ref:x,class:w([n(i).is("active",n(D)),M.$attrs.class]),style:mt(M.$attrs.style),onClick:p,onMouseenter:f,onMouseleave:h,onTouchstartPassive:k},[fe(M.$slots,"prefix"),M.modelValue?(Y(),U("div",{key:0,class:w([n(l).e("label")]),style:mt($.value)},ve(M.label),7)):me("",!0),j("input",Zt(n(s),{id:M.id&&M.id[0],ref_key:"inputRef",ref:d,name:M.name&&M.name[0],placeholder:M.startPlaceholder,value:M.modelValue&&M.modelValue[0],class:n(v).b("input"),onInput:u,onChange:P}),null,16,_s),fe(M.$slots,"range-separator"),j("input",Zt(n(s),{id:M.id&&M.id[1],ref_key:"endInputRef",ref:S,name:M.name&&M.name[1],placeholder:M.endPlaceholder,value:M.modelValue&&M.modelValue[1],class:n(v).b("input"),onInput:I,onChange:V}),null,16,Ys),fe(M.$slots,"suffix")],38))}});Bn.__docgenInfo={name:"PickerRangeTrigger",exportName:"default",displayName:"picker-range-trigger",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],events:[{name:"mouseenter"},{name:"mouseleave"},{name:"click"},{name:"touchstart"},{name:"focus"},{name:"blur"},{name:"startInput"},{name:"endInput"},{name:"startChange"},{name:"endChange"}],slots:[{name:"prefix"},{name:"range-separator"},{name:"suffix"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker-range-trigger.vue"]};const jn=Ve({name:"Picker",__name:"picker",props:Yn,emits:["update:modelValue","change","focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(r,{expose:t,emit:a}){const e=r,o=a,s=ra(),{lang:l}=He(),i=Se("date"),v=Se("input"),b=Se("range"),m=H(void 0),d=H(null),{form:S,formItem:x}=Ma(),D=_e("ElPopperOptions",{}),{valueOnClear:p}=rr(e,null),f=H(),h=H(),k=H(!1),u=H(!1),I=H(null);let P=!1;const{isFocused:V,handleFocus:A,handleBlur:T}=Va(h,{beforeFocus(){return e.readonly||q.value},afterFocus(){k.value=!0},beforeBlur(g){return!P&&f.value?.isFocusInsideContent(g)},afterBlur(){at(),k.value=!1,P=!1,e.validateEvent&&x?.validate("blur").catch(g=>ft())}}),$=F(()=>{const g=!!_.value||V.value;return{left:g?void 0:`calc(${m.value} + 16px)`,zIndex:g?void 0:10}}),_=F(()=>Ra(e.modelValue)?"":String(e.modelValue)),K=()=>{if(!e.prefixIcon){m.value="0";return}requestAnimationFrame(()=>{const g=d.value?.getBoundingClientRect().width;m.value=`${g}px`})},M=F(()=>[i.b("editor"),i.bm("editor",e.type),v.e("wrapper"),i.is("disabled",q.value),i.is("active",k.value),b.b("editor"),s.class]),X=F(()=>[v.e("icon"),b.e("close-icon"),B.value?"":b.e("close-icon--hidden")]);Ce(k,g=>{g?Ae(()=>{g&&(I.value=e.modelValue)}):(ge.value=null,Ae(()=>{Q(e.modelValue)}))});const Q=(g,re)=>{(re||!en(g,I.value))&&(o("change",g),e.validateEvent&&x?.validate("change").catch(De=>ft()))},z=g=>{if(!en(e.modelValue,g)){let re;he(g)?re=g.map(De=>an(De,e.valueFormat,l.value)):g&&(re=an(g,e.valueFormat,l.value)),o("update:modelValue",g&&re,l.value)}},ae=g=>{o("keydown",g)},se=F(()=>h.value?Array.from(h.value.$el.querySelectorAll("input")):[]),L=(g,re,De)=>{const $e=se.value;$e.length&&(!De||De==="min"?($e[0].setSelectionRange(g,re),$e[0].focus()):De==="max"&&($e[1].setSelectionRange(g,re),$e[1].focus()))},C=(g="",re=!1)=>{k.value=re;let De;he(g)?De=g.map($e=>$e.toDate()):De=g&&g.toDate(),ge.value=null,z(De)},N=()=>{u.value=!0},O=()=>{o("visible-change",!0)},E=()=>{u.value=!1,k.value=!1,o("visible-change",!1)},G=()=>{k.value=!0},R=()=>{k.value=!1},q=F(()=>e.disabled||S?.disabled),Z=F(()=>{let g;if(de.value?y.value.getDefaultValue&&(g=y.value.getDefaultValue()):he(e.modelValue)?g=e.modelValue.map(re=>tn(re,e.valueFormat,l.value)):g=tn(e.modelValue,e.valueFormat,l.value),y.value.getRangeAvailableTime){const re=y.value.getRangeAvailableTime(g);Mr(re,g)||(g=re,de.value||z(Yt(g)))}return he(g)&&g.some(re=>!re)&&(g=[]),g}),oe=F(()=>{if(!y.value.panelReady)return"";const g=lt(Z.value);return he(ge.value)?[ge.value[0]||g&&g[0]||"",ge.value[1]||g&&g[1]||""]:ge.value!==null?ge.value:!Ne.value&&de.value||!k.value&&de.value?"":g?Be.value||ee.value||te.value?g.join(", "):g:""}),Re=F(()=>e.type.includes("time")),Ne=F(()=>e.type.startsWith("time")),Be=F(()=>e.type==="dates"),ee=F(()=>e.type==="months"),te=F(()=>e.type==="years"),ce=F(()=>e.prefixIcon||(Re.value?"regular clock":"regular calendar")),B=H(!1),le=g=>{e.readonly||q.value||(B.value&&(g.stopPropagation(),y.value.handleClear?y.value.handleClear():z(p.value),Q(p.value,!0),B.value=!1,E()),o("clear"))},de=F(()=>{const{modelValue:g}=e;return!g||he(g)&&!g.filter(Boolean).length}),we=async g=>{e.readonly||q.value||(g.target?.tagName!=="INPUT"||V.value)&&(k.value=!0)},xe=()=>{e.readonly||q.value||!de.value&&e.clearable&&(B.value=!0)},Ie=()=>{B.value=!1},Le=g=>{e.readonly||q.value||(g.touches[0].target?.tagName!=="INPUT"||V.value)&&(k.value=!0)},Xe=F(()=>e.type.includes("range")),Ct=F(()=>n(f)?.popperRef?.contentRef),yt=lr(h,g=>{const re=n(Ct),De=ir(h);re&&(g.target===re||g.composedPath().includes(re))||g.target===De||De&&g.composedPath().includes(De)||(k.value=!1)});nn(()=>{yt?.()});const ge=H(null);Ea(d,K);const at=()=>{if(ge.value){const g=et(oe.value);g&&Je(g)&&(z(Yt(g)),ge.value=null)}ge.value===""&&(z(p.value),Q(p.value),ge.value=null)},et=g=>g?y.value.parseUserInput(g):null,lt=g=>g?y.value.formatToString(g):null,Je=g=>y.value.isValidValue(g),ze=async g=>{if(e.readonly||q.value)return;const{code:re}=g;if(ae(g),re===Fe.esc){k.value===!0&&(k.value=!1,g.preventDefault(),g.stopPropagation());return}if(re===Fe.down&&(y.value.handleFocusPicker&&(g.preventDefault(),g.stopPropagation()),k.value===!1&&(k.value=!0,await Ae()),y.value.handleFocusPicker)){y.value.handleFocusPicker();return}if(re===Fe.tab){P=!0;return}if(re===Fe.enter||re===Fe.numpadEnter){(ge.value===null||ge.value===""||Je(et(oe.value)))&&(at(),k.value=!1),g.stopPropagation();return}if(ge.value){g.stopPropagation();return}y.value.handleKeydownInput&&y.value.handleKeydownInput(g)},Rt=g=>{ge.value=g,k.value||(k.value=!0)},Mt=g=>{const re=g.target;ge.value?ge.value=[re.value,ge.value[1]]:ge.value=[re.value,null]},kt=g=>{const re=g.target;ge.value?ge.value=[ge.value[0],re.value]:ge.value=[null,re.value]},J=()=>{const g=ge.value,re=et(g&&g[0]),De=n(Z);if(re&&re.isValid()){ge.value=[lt(re),oe.value?.[1]||null];const $e=[re,De&&(De[1]||null)];Je($e)&&(z(Yt($e)),ge.value=null)}},c=()=>{const g=n(ge),re=et(g&&g[1]),De=n(Z);if(re&&re.isValid()){ge.value=[n(oe)?.[0]||null,lt(re)];const $e=[De&&De[0],re];Je($e)&&(z(Yt($e)),ge.value=null)}},y=H({}),ne=g=>{y.value[g[0]]=g[1],y.value.panelReady=!0},Pe=g=>{o("calendar-change",g)},Ee=(g,re,De)=>{o("panel-change",g,re,De)},it=()=>{h.value?.focus()},Et=()=>{h.value?.blur()};return pt("EP_PICKER_BASE",{props:e}),t({focus:it,blur:Et,handleOpen:G,handleClose:R,onPick:C}),(g,re)=>(Y(),Te(n(xr),Zt({ref_key:"refPopper",ref:f,visible:k.value,pure:"",trigger:"click"},g.$attrs,{role:"dialog",teleported:"",transition:`${n(i).namespace.value}-zoom-in-top`,"popper-class":[`${n(i).namespace.value}-picker__popper`],"popper-options":n(D),"fallback-placements":g.fallbackPlacements,"gpu-acceleration":!1,placement:g.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:N,onShow:O,onHide:E}),{default:Ke(()=>[Xe.value?(Y(),Te(Bn,{key:1,id:g.id,ref_key:"inputRef",ref:h,"model-value":oe.value,name:g.name,disabled:q.value,readonly:!g.editable||g.readonly,label:g.label,"start-placeholder":g.startPlaceholder,"end-placeholder":g.endPlaceholder,class:w(M.value),style:mt(g.$attrs.style),"aria-label":g.ariaLabel,tabindex:g.tabindex,autocomplete:"off",role:"combobox",onClick:we,onFocus:n(A),onBlur:n(T),onStartInput:Mt,onStartChange:J,onEndInput:kt,onEndChange:c,onMousedown:we,onMouseenter:xe,onMouseleave:Ie,onTouchstartPassive:Le,onKeydown:ze},{prefix:Ke(()=>[ce.value?(Y(),Te(n(be),{key:0,class:w([n(v).e("icon"),n(b).e("icon")]),name:ce.value},null,8,["class","name"])):me("",!0)]),"range-separator":Ke(()=>[fe(g.$slots,"range-separator",{},()=>[j("span",{class:w(n(b).b("separator"))},ve(g.rangeSeparator),3)])]),suffix:Ke(()=>[g.clearIcon?(Y(),Te(n(be),{key:0,class:w(X.value),onMousedown:Ue(n(_a),["prevent"]),onClick:le,name:"regular times"},null,8,["class","onMousedown"])):me("",!0)]),_:3},8,["id","model-value","name","disabled","readonly","label","start-placeholder","end-placeholder","class","style","aria-label","tabindex","onFocus","onBlur"])):(Y(),Te(n(ct),{key:0,id:g.id,ref_key:"inputRef",ref:h,"container-role":"combobox","model-value":oe.value,name:g.name,disabled:q.value,label:g.label,class:w([n(i).b("editor"),n(i).bm("editor",g.type),g.$attrs.class]),style:mt(g.$attrs.style),readonly:!g.editable||g.readonly||Be.value||ee.value||te.value||g.type==="week","aria-label":g.ariaLabel,tabindex:g.tabindex,"validate-event":!1,helpText:g.helpText,messageError:g.messageError,onInput:Rt,onFocus:n(A),onBlur:n(T),onKeydown:ze,onChange:at,onMousedown:we,onMouseenter:xe,onMouseleave:Ie,onTouchstartPassive:Le,onClick:re[0]||(re[0]=Ue(()=>{},["stop"]))},{prefix:Ke(()=>[ce.value?(Y(),Te(n(be),{key:0,class:w(n(v).e("icon")),onMousedown:Ue(we,["prevent"]),onTouchstartPassive:Le,name:ce.value},null,8,["class","name"])):me("",!0)]),suffix:Ke(()=>[B.value&&g.clearIcon?(Y(),Te(n(be),{key:0,class:w(`${n(v).e("icon")} clear-icon`),onMousedown:Ue(n(_a),["prevent"]),onClick:le,name:"regular times"},null,8,["class","onMousedown"])):me("",!0)]),default:Ke(()=>[j("span",null,ve(g.label),1),g.label?(Y(),U("div",{key:0,class:w([n(v).e("label")]),style:mt($.value)},ve(g.label),7)):me("",!0)]),_:1},8,["id","model-value","name","disabled","label","class","style","readonly","aria-label","tabindex","helpText","messageError","onFocus","onBlur"]))]),content:Ke(()=>[fe(g.$slots,"default",{visible:k.value,actualVisible:u.value,parsedValue:Z.value,format:g.format,dateFormat:g.dateFormat,timeFormat:g.timeFormat,unlinkPanels:g.unlinkPanels,type:g.type,defaultValue:g.defaultValue,showNow:g.showNow,onPick:C,onSelectRange:L,onSetPickerOption:ne,onCalendarChange:Pe,onPanelChange:Ee,onMousedown:re[1]||(re[1]=Ue(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options","fallback-placements","placement"]))}});jn.__docgenInfo={name:"Picker",exportName:"default",displayName:"picker",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus input box."}]},{name:"blur",tags:[{title:"description",content:"blur input box."}]},{name:"handleOpen",tags:[{title:"description",content:"opens picker"}]},{name:"handleClose",tags:[{title:"description",content:"closes picker"}]},{name:"onPick",tags:[{title:"description",content:"pick item manually"}]}],events:[{name:"update:modelValue"},{name:"change"},{name:"focus"},{name:"blur"},{name:"clear"},{name:"calendar-change"},{name:"panel-change"},{name:"visible-change"},{name:"keydown"}],slots:[{name:"range-separator"},{name:"default",scoped:!0,bindings:[{name:"visible",title:"binding"},{name:"actual-visible",title:"binding"},{name:"parsed-value",title:"binding"},{name:"format",title:"binding"},{name:"date-format",title:"binding"},{name:"time-format",title:"binding"},{name:"unlink-panels",title:"binding"},{name:"type",title:"binding"},{name:"default-value",title:"binding"},{name:"show-now",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker.vue"]};const Bs=ke({..._n,datetimeRole:String,parsedValue:{type:ue(Object)}}),Gn=({getAvailableHours:r,getAvailableMinutes:t,getAvailableSeconds:a})=>{const e=(l,i,v,b)=>{const m={hour:r,minute:t,second:a};let d=l;return["hour","minute","second"].forEach(S=>{if(m[S]){let x;const D=m[S];switch(S){case"minute":{x=D(d.hour(),i,b);break}case"second":{x=D(d.hour(),d.minute(),i,b);break}default:{x=D(i,b);break}}if(x?.length&&!x.includes(d[S]())){const p=v?0:x.length-1;d=d[S](x[p])}}}),d},o={};return{timePickerOptions:o,getAvailableTime:e,onSetOption:([l,i])=>{o[l]=i}}},ma=r=>{const t=(e,o)=>e||o,a=e=>e!==!0;return r.map(t).filter(a)},Hn=(r,t,a)=>({getHoursList:(l,i)=>da(24,r&&(()=>r?.(l,i))),getMinutesList:(l,i,v)=>da(60,t&&(()=>t?.(l,i,v))),getSecondsList:(l,i,v,b)=>da(60,a&&(()=>a?.(l,i,v,b)))}),Kn=(r,t,a)=>{const{getHoursList:e,getMinutesList:o,getSecondsList:s}=Hn(r,t,a);return{getAvailableHours:(b,m)=>ma(e(b,m)),getAvailableMinutes:(b,m,d)=>ma(o(b,m,d)),getAvailableSeconds:(b,m,d,S)=>ma(s(b,m,d,S))}},Un=r=>{const t=H(r.parsedValue);return Ce(()=>r.visible,a=>{a||(t.value=r.parsedValue)}),t},js=ke({role:{type:String,required:!0},spinnerDate:{type:ue(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:ue(String),default:""},...qn}),Gs=["onClick"],Hs=["onMouseenter"],aa=Ve({__name:"basic-time-spinner",props:js,emits:["change","select-range","set-option"],setup(r,{emit:t}){const a=r,e=_e("EP_PICKER_BASE"),{isRange:o}=e.props,s=t,l=Se("time"),{getHoursList:i,getMinutesList:v,getSecondsList:b}=Hn(a.disabledHours,a.disabledMinutes,a.disabledSeconds);let m=!1;const d=H(),S=H(),x=H(),D=H(),p={hours:S,minutes:x,seconds:D},f=F(()=>a.showSeconds?Qa:Qa.slice(0,2)),h=F(()=>{const{spinnerDate:E}=a,G=E.hour(),R=E.minute(),q=E.second();return{hours:G,minutes:R,seconds:q}}),k=F(()=>{const{hours:E,minutes:G}=n(h),{role:R,spinnerDate:q}=a,Z=o?void 0:q;return{hours:i(R,Z),minutes:v(E,R,Z),seconds:b(E,G,R,Z)}}),u=F(()=>{const{hours:E,minutes:G,seconds:R}=n(h);return{hours:ca(E,23),minutes:ca(G,59),seconds:ca(R,59)}}),I=Er(E=>{m=!1,A(E)},200),P=E=>{if(!!!a.amPmMode)return"";const R=a.amPmMode==="A";let q=E<12?" am":" pm";return R&&(q=q.toUpperCase()),q},V=E=>{let G;switch(E){case"hours":G=[0,2];break;case"minutes":G=[3,5];break;case"seconds":G=[6,8];break}const[R,q]=G;s("select-range",R,q),d.value=E},A=E=>{_(E,n(h)[E])},T=()=>{A("hours"),A("minutes"),A("seconds")},$=E=>E.querySelector(`.${l.namespace.value}-scrollbar__wrap`),_=(E,G)=>{if(a.arrowControl)return;const R=n(p[E]);R&&R.$el&&($(R.$el).scrollTop=Math.max(0,G*K(E)))},K=E=>{const R=n(p[E])?.$el.querySelector("li");return R&&Number.parseFloat(Cr(R,"height"))||0},M=()=>{Q(1)},X=()=>{Q(-1)},Q=E=>{d.value||V("hours");const G=d.value,R=n(h)[G],q=d.value==="hours"?24:60,Z=z(G,R,E,q);ae(G,Z),_(G,Z),Ae(()=>V(G))},z=(E,G,R,q)=>{let Z=(G+R+q)%q;const oe=n(k)[E];for(;oe[Z]&&Z!==G;)Z=(Z+R+q)%q;return Z},ae=(E,G)=>{if(n(k)[E][G])return;const{hours:Z,minutes:oe,seconds:Re}=n(h);let Ne;switch(E){case"hours":Ne=a.spinnerDate.hour(G).minute(oe).second(Re);break;case"minutes":Ne=a.spinnerDate.hour(Z).minute(G).second(Re);break;case"seconds":Ne=a.spinnerDate.hour(Z).minute(oe).second(G);break}s("change",Ne)},se=(E,{value:G,disabled:R})=>{R||(ae(E,G),V(E),_(E,G))},L=E=>{const G=n(p[E]);if(!G)return;m=!0,I(E);const R=Math.min(Math.round(($(G.$el).scrollTop-(C(E)*.5-10)/K(E)+3)/K(E)),E==="hours"?23:59);ae(E,R)},C=E=>n(p[E]).$el.offsetHeight,N=()=>{const E=G=>{const R=n(p[G]);R&&R.$el&&($(R.$el).onscroll=()=>{L(G)})};E("hours"),E("minutes"),E("seconds")};na(()=>{Ae(()=>{!a.arrowControl&&N(),T(),a.role==="start"&&V("hours")})});const O=(E,G)=>{p[G].value=E??void 0};return s("set-option",[`${a.role}_scrollDown`,Q]),s("set-option",[`${a.role}_emitSelectRange`,V]),Ce(()=>a.spinnerDate,()=>{m||T()}),(E,G)=>(Y(),U("div",{class:w([n(l).b("spinner"),{"has-seconds":E.showSeconds}])},[E.arrowControl?me("",!0):(Y(!0),U(Me,{key:0},qe(f.value,R=>(Y(),Te(n(Dr),{key:R,ref_for:!0,ref:q=>O(q,R),class:w(n(l).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":n(l).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:q=>V(R),onMousemove:q=>A(R)},{default:Ke(()=>[(Y(!0),U(Me,null,qe(k.value[R],(q,Z)=>(Y(),U("li",{key:Z,class:w([n(l).be("spinner","item"),n(l).is("active",Z===h.value[R]),n(l).is("disabled",q)]),onClick:oe=>se(R,{value:Z,disabled:q})},[R==="hours"?(Y(),U(Me,{key:0},[ut(ve(("0"+(E.amPmMode?Z%12||12:Z)).slice(-2))+ve(P(Z)),1)],64)):(Y(),U(Me,{key:1},[ut(ve(("0"+Z).slice(-2)),1)],64))],10,Gs))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),E.arrowControl?(Y(!0),U(Me,{key:1},qe(f.value,R=>(Y(),U("div",{key:R,class:w([n(l).be("spinner","wrapper"),n(l).is("arrow")]),onMouseenter:q=>V(R)},[Ye(ie(n(be),{name:"regular chevron-up"},null,512),[[n(ja),X]]),Ye(ie(n(be),{name:"regular chevron-down"},null,512),[[n(ja),M]]),j("ul",{class:w(n(l).be("spinner","list"))},[(Y(!0),U(Me,null,qe(u.value[R],(q,Z)=>(Y(),U("li",{key:Z,class:w([n(l).be("spinner","item"),n(l).is("active",q===h.value[R]),n(l).is("disabled",k.value[R][q])])},[n(pa)(q)?(Y(),U(Me,{key:0},[R==="hours"?(Y(),U(Me,{key:0},[ut(ve(("0"+(E.amPmMode?q%12||12:q)).slice(-2))+ve(P(q)),1)],64)):(Y(),U(Me,{key:1},[ut(ve(("0"+q).slice(-2)),1)],64))],64)):me("",!0)],2))),128))],2)],42,Hs))),128)):me("",!0)],2))}});aa.__docgenInfo={exportName:"default",displayName:"basic-time-spinner",description:"",tags:{},events:[{name:"change"},{name:"select-range"},{name:"set-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]};const zn=Ve({__name:"panel-time-pick",props:Bs,emits:["pick","select-range","set-picker-option"],setup(r,{emit:t}){const a=r,e=t,o=_e("EP_PICKER_BASE"),{arrowControl:s,disabledHours:l,disabledMinutes:i,disabledSeconds:v,defaultValue:b}=o.props,{getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:S}=Kn(l,i,v),x=Se("time"),{lang:D}=He(),p=H([0,2]),f=Un(a),h=F(()=>or(a.actualVisible)?`${x.namespace.value}-zoom-in-top`:""),k=F(()=>a.format.includes("ss")),u=F(()=>a.format.includes("A")?"A":a.format.includes("a")?"a":""),I=L=>{const C=W(L).locale(D.value),N=Q(C);return C.isSame(N)},P=()=>{e("pick",f.value,!1)},V=(L=!1,C=!1)=>{C||e("pick",a.parsedValue,L)},A=L=>{if(!a.visible)return;const C=Q(L).millisecond(0);e("pick",C,!0)},T=(L,C)=>{e("select-range",L,C),p.value=[L,C]},$=L=>{const C=[0,3].concat(k.value?[6]:[]),N=["hours","minutes"].concat(k.value?["seconds"]:[]),E=(C.indexOf(p.value[0])+L+C.length)%C.length;K.start_emitSelectRange(N[E])},_=L=>{const C=L.code,{left:N,right:O,up:E,down:G}=Fe;if([N,O].includes(C)){$(C===N?-1:1),L.preventDefault();return}if([E,G].includes(C)){const R=C===E?-1:1;K.start_scrollDown(R),L.preventDefault();return}},{timePickerOptions:K,onSetOption:M,getAvailableTime:X}=Gn({getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:S}),Q=L=>X(L,a.datetimeRole||"",!0),z=L=>L?W(L,a.format).locale(D.value):null,ae=L=>L?L.format(a.format):null,se=()=>W(b).locale(D.value);return e("set-picker-option",["isValidValue",I]),e("set-picker-option",["formatToString",ae]),e("set-picker-option",["parseUserInput",z]),e("set-picker-option",["handleKeydownInput",_]),e("set-picker-option",["getRangeAvailableTime",Q]),e("set-picker-option",["getDefaultValue",se]),(L,C)=>(Y(),Te(tr,{name:h.value},{default:Ke(()=>[L.actualVisible||L.visible?(Y(),U("div",{key:0,class:w(n(x).b("panel"))},[j("div",{class:w([n(x).be("panel","content"),{"has-seconds":k.value}])},[ie(aa,{ref:"spinner",role:L.datetimeRole||"start","arrow-control":n(s),"show-seconds":k.value,"am-pm-mode":u.value,"spinner-date":L.parsedValue,"disabled-hours":n(l),"disabled-minutes":n(i),"disabled-seconds":n(v),onChange:A,onSetOption:n(M),onSelectRange:T},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),j("div",{class:w(n(x).be("panel","footer"))},[j("button",{type:"button",class:w([n(x).be("panel","btn"),"cancel"]),onClick:P}," Cancelar ",2),j("button",{type:"button",class:w([n(x).be("panel","btn"),"confirm"]),onClick:C[0]||(C[0]=N=>V())}," Ok ",2)],2)],2)):me("",!0)]),_:1},8,["name"]))}});zn.__docgenInfo={exportName:"default",displayName:"panel-time-pick",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-pick.vue"]};const Ks=ke({..._n,parsedValue:{type:ue(Array)}}),Us=["disabled"],Wn=Ve({__name:"panel-time-range",props:Ks,emits:["pick","select-range","set-picker-option"],setup(r,{emit:t}){const a=r,e=t,o=(ee,te)=>{const ce=[];for(let B=ee;B<=te;B++)ce.push(B);return ce},{lang:s}=He(),l=Se("time"),i=Se("picker"),v=_e("EP_PICKER_BASE"),{arrowControl:b,disabledHours:m,disabledMinutes:d,disabledSeconds:S,defaultValue:x}=v.props,D=F(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",b),I.value?"has-seconds":""]),p=F(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",b),I.value?"has-seconds":""]),f=F(()=>a.parsedValue[0]),h=F(()=>a.parsedValue[1]),k=Un(a),u=()=>{e("pick",k.value,!1)},I=F(()=>a.format.includes("ss")),P=F(()=>a.format.includes("A")?"A":a.format.includes("a")?"a":""),V=(ee=!1)=>{e("pick",[f.value,h.value],ee)},A=ee=>{_(ee.millisecond(0),h.value)},T=ee=>{_(f.value,ee.millisecond(0))},$=ee=>{const te=ee.map(B=>W(B).locale(s.value)),ce=O(te);return te[0].isSame(ce[0])&&te[1].isSame(ce[1])},_=(ee,te)=>{a.visible&&e("pick",[ee,te],!0)},K=F(()=>f.value>h.value),M=H([0,2]),X=(ee,te)=>{e("select-range",ee,te,"min"),M.value=[ee,te]},Q=F(()=>I.value?11:8),z=(ee,te)=>{e("select-range",ee,te,"max");const ce=n(Q);M.value=[ee+ce,te+ce]},ae=ee=>{const te=I.value?[0,3,6,11,14,17]:[0,3,8,11],ce=["hours","minutes"].concat(I.value?["seconds"]:[]),le=(te.indexOf(M.value[0])+ee+te.length)%te.length,de=te.length/2;le<de?q.start_emitSelectRange(ce[le]):q.end_emitSelectRange(ce[le-de])},se=ee=>{const te=ee.code,{left:ce,right:B,up:le,down:de}=Fe;if([ce,B].includes(te)){ae(te===ce?-1:1),ee.preventDefault();return}if([le,de].includes(te)){const we=te===le?-1:1,xe=M.value[0]<Q.value?"start":"end";q[`${xe}_scrollDown`](we),ee.preventDefault();return}},L=(ee,te)=>{const ce=m?m(ee):[],B=ee==="start",de=(te||(B?h.value:f.value)).hour(),we=B?o(de+1,23):o(0,de-1);return ia(ce,we)},C=(ee,te,ce)=>{const B=d?d(ee,te):[],le=te==="start",de=ce||(le?h.value:f.value),we=de.hour();if(ee!==we)return B;const xe=de.minute(),Ie=le?o(xe+1,59):o(0,xe-1);return ia(B,Ie)},N=(ee,te,ce,B)=>{const le=S?S(ee,te,ce):[],de=ce==="start",we=B||(de?h.value:f.value),xe=we.hour(),Ie=we.minute();if(ee!==xe||te!==Ie)return le;const Le=we.second(),Xe=de?o(Le+1,59):o(0,Le-1);return ia(le,Xe)},O=([ee,te])=>[Z(ee,"start",!0,te),Z(te,"end",!1,ee)],{getAvailableHours:E,getAvailableMinutes:G,getAvailableSeconds:R}=Kn(L,C,N),{timePickerOptions:q,getAvailableTime:Z,onSetOption:oe}=Gn({getAvailableHours:E,getAvailableMinutes:G,getAvailableSeconds:R}),Re=ee=>ee?he(ee)?ee.map(te=>W(te,a.format).locale(s.value)):W(ee,a.format).locale(s.value):null,Ne=ee=>ee?he(ee)?ee.map(te=>te.format(a.format)):ee.format(a.format):null,Be=()=>{if(he(x))return x.map(te=>W(te).locale(s.value));const ee=W(x).locale(s.value);return[ee,ee.add(60,"m")]};return e("set-picker-option",["formatToString",Ne]),e("set-picker-option",["parseUserInput",Re]),e("set-picker-option",["isValidValue",$]),e("set-picker-option",["handleKeydownInput",se]),e("set-picker-option",["getDefaultValue",Be]),e("set-picker-option",["getRangeAvailableTime",O]),(ee,te)=>ee.actualVisible?(Y(),U("div",{key:0,class:w([n(l).b("range-picker"),n(i).b("panel")])},[j("div",{class:w(n(l).be("range-picker","content"))},[j("div",{class:w(n(l).be("range-picker","cell"))},[j("div",{class:w(n(l).be("range-picker","header"))},"Inicio",2),j("div",{class:w(D.value)},[ie(aa,{ref:"minSpinner",role:"start","show-seconds":I.value,"am-pm-mode":P.value,"arrow-control":n(b),"spinner-date":f.value,"disabled-hours":L,"disabled-minutes":C,"disabled-seconds":N,onChange:A,onSetOption:n(oe),onSelectRange:X},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),j("div",{class:w(n(l).be("range-picker","cell"))},[j("div",{class:w(n(l).be("range-picker","header"))},"Fin",2),j("div",{class:w(p.value)},[ie(aa,{ref:"maxSpinner",role:"end","show-seconds":I.value,"am-pm-mode":P.value,"arrow-control":n(b),"spinner-date":h.value,"disabled-hours":L,"disabled-minutes":C,"disabled-seconds":N,onChange:T,onSetOption:n(oe),onSelectRange:z},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),j("div",{class:w(n(l).be("panel","footer"))},[j("button",{type:"button",class:w([n(l).be("panel","btn"),"cancel"]),onClick:te[0]||(te[0]=ce=>u())}," Cancelar ",2),j("button",{type:"button",class:w([n(l).be("panel","btn"),"confirm"]),disabled:K.value,onClick:te[1]||(te[1]=ce=>V())}," Ok ",10,Us)],2)],2)):me("",!0)}});Wn.__docgenInfo={exportName:"default",displayName:"panel-time-range",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-range.vue"]};W.extend(hn);const zs=Ve({name:"GTimePicker",install:null,props:{...Yn,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,t){const a=H(),[e,o]=r.isRange?["timerange",Wn]:["time",zn],s=l=>t.emit("update:modelValue",l);return pt("ElPopperOptions",r.popperOptions),t.expose({focus:()=>{a.value?.focus()},blur:()=>{a.value?.blur()},handleOpen:()=>{a.value?.handleOpen()},handleClose:()=>{a.value?.handleClose()}}),()=>{const l=r.format??Ls;return Dt(Dt(jn,{...r,ref:a,type:e,format:l,"onUpdate:modelValue":s},{default:i=>Dt(o,{...i})}))}}}),Ws=Tt(zs),Bl={title:"Form/Form",component:st,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
Para las validaciones y reglas se utiliza <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a>, una potente librería que permite implementar validaciones síncronas y asíncronas.

Las reglas de validación pueden ser aplicadas de dos formas:
- Globalmente en el componente Form usando la prop \`rules\`
- Individualmente en cada FormItem usando la prop \`rules\`

Una característica importante es que el validador es lo suficientemente inteligente para omitir las validaciones de campos que están condicionalmente ocultos (v-if/v-show).

### Características

> - Validación síncrona y asíncrona
> - Reglas personalizables
> - Manejo de estados
> - Validación por eventos
> - Reseteo de campos
> - Scroll automático a errores
> - Integración con FormItem

### Instalación

\`\`\`bash
yarn add @flash-global66/g-form
\`\`\`

### Importación

\`\`\`typescript
import { GForm } from '@flash-global66/g-form'
import '@flash-global66/g-form/form.styles.scss'
\`\`\`

### Dependencias
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},Bt={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:st,GFormItem:ht,GInput:bt,GConfigProvider:vt,GButton:gt,GSelect:vr,GRadio:Fn,GCheckbox:gr,GSegmented:Ba,GDatePicker:As,GTimePicker:Ws},setup(){const r=H(),t=Ze({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1,preferredContact:"",birthDate:"",appointmentDate:"",appointmentTime:""}),a=[{label:"Email",value:"email"},{label:"Teléfono",value:"phone"},{label:"WhatsApp",value:"whatsapp"}],e=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],o={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},s=F(()=>t.country?o[t.country]||[]:[]);Ce(()=>t.country,()=>{t.city=""});const l=d=>d.getTime()>Date.now(),i=d=>d.getTime()<Date.now(),v={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(d,S,x)=>{S===!0?x():x(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}],preferredContact:[{validator:(d,S,x)=>{S||x(new Error("Debe seleccionar un método de contacto preferido")),x()},type:"boolean",trigger:"change"}],birthDate:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:"change"}],appointmentDate:[{required:!0,message:"La fecha de cita es requerida",trigger:"change"}],appointmentTime:[{required:!0,message:"La hora de cita es requerida",trigger:"change"}]};async function b(){if(r.value)try{await r.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",t)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(d){console.error("Validation error:",d)}}function m(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,countries:e,availableCities:s,rules:v,contactOptions:a,disableFutureDates:l,disablePastDates:i,GSegmented:Ba,handleSubmit:b,handleReset:m}},template:`
      <g-config-provider>
        <g-form 
          ref="formRef" 
          :model="formData" 
          :rules="rules"
        >
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Método de contacto preferido</h3>
            <g-form-item prop="preferredContact">
              <g-segmented
                v-model="formData.preferredContact"
                :options="contactOptions"
                block
                size="sm"
              />
            </g-form-item>
          </div>
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Nombre completo y Email</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <g-form-item prop="fullName">
              <g-input 
                v-model="formData.fullName" 
                label="Nombre completo"
                placeholder="Ingrese su nombre y apellidos"
                prefix-icon="regular user"
                help-text="Ingrese su nombre y apellidos completos"
              />
            </g-form-item>
            
            <g-form-item prop="email">
              <g-input 
                v-model="formData.email"
                placeholder="ejemplo@correo.com"
                prefix-icon="regular envelope"
                help-text="Usaremos este email para contactarlo"
              />
            </g-form-item>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Origen geográfico</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <g-form-item prop="country">
                <g-select
                  v-model="formData.country"
                  :options="countries"
                  label="País"
                  placeholder="Seleccione un país"
                  prefix-icon="regular globe"
                  filterable
                  clearable
                />
              </g-form-item>
              
              <g-form-item prop="city">
                <g-select
                  v-model="formData.city"
                  :options="availableCities"
                  label="Ciudad"
                  placeholder="Seleccione una ciudad"
                  prefix-icon="regular store"
                  filterable
                  clearable
                  :disabled="!formData.country"
                  help-text="Seleccione su ciudad de residencia"
                />
              </g-form-item>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Información personal</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <g-form-item prop="gender" show-message="parent" label="Género">
                <div class="flex flex-row gap-6 mt-2">
                  <g-radio v-model="formData.gender" label="Masculino" value="male" />
                  <g-radio v-model="formData.gender" label="Femenino" value="female" />
                  <g-radio v-model="formData.gender" label="Prefiero no decir" value="other" />
                </div>
              </g-form-item>
              
              <g-form-item prop="birthDate">
                <g-date-picker
                  v-model="formData.birthDate"
                  label="Fecha de nacimiento"
                  format="DD/MM/YYYY"
                  placeholder="Seleccione su fecha de nacimiento"
                  :disabled-date="disableFutureDates"
                  help-text="Debe ser mayor de edad"
                  prefix-icon="regular calendar"
                />
              </g-form-item>
            </div>
          </div>
          
          <div class="mb-10">
            <h3 class="text-lg font-bold mb-2">Programación de cita</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <g-form-item prop="appointmentDate">
                <g-date-picker
                  v-model="formData.appointmentDate"
                  label="Fecha de cita"
                  format="DD/MM/YYYY"
                  placeholder="Seleccione la fecha de su cita"
                  :disabled-date="disablePastDates"
                  help-text="Seleccione una fecha futura"
                  prefix-icon="regular calendar-check"
                />
              </g-form-item>
              
              <g-form-item prop="appointmentTime">
                <g-time-picker
                  v-model="formData.appointmentTime"
                  label="Hora de cita"
                  format="HH:mm"
                  placeholder="Seleccione la hora de su cita"
                  help-text="Horario de atención: 9:00 - 18:00"
                  prefix-icon="regular clock"
                />
              </g-form-item>
            </div>
          </div>
          
          <!-- Términos y condiciones -->
          <div class="mb-6">
            <g-form-item
              prop="termsAccepted"
              show-message="parent"
            >
              <g-checkbox 
                v-model="formData.termsAccepted"
                label="Acepto los términos y condiciones de uso"
              />
            </g-form-item>
          </div>
          
          <!-- Botones de acción -->
          <div class="flex gap-4 mt-8">
            <g-button variant="primary" @click="handleSubmit">Enviar formulario</g-button>
            <g-button variant="secondary" @click="handleReset">Limpiar campos</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},jt={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del formulario con validaciones."}}},render:()=>({components:{GForm:st,GFormItem:ht,GInput:bt,GConfigProvider:vt,GButton:gt},setup(){const r=H(),t=Ze({nombre:"",email:""}),a={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Email inválido",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((s,l)=>{s?console.log("submit!",l):console.log("error submit!"+l)})}async function o(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:a,handleSubmit:e,handleReset:o}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="nombre">
            <g-input v-model="formData.nombre" label="Nombre" />
          </g-form-item>
          <g-form-item prop="email">
            <g-input v-model="formData.email" label="Email" />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},Gt={name:"Reglas Personalizadas",parameters:{docs:{description:{story:`Las reglas de validación pueden ser personalizadas usando funciones validadoras. Por ejemplo, para validar la edad de un usuario:

\`\`\`typescript
// 1. Definir la función validadora
const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('La edad es requerida'))
  }
  if (!Number.isInteger(Number(value))) {
    callback(new Error('Ingrese solo números'))
  } else if (Number(value) < 18) {
    callback(new Error('La edad debe ser mayor a 18'))
  } else {
    callback()
  }
}

// 2. Integrar la función en las reglas
const rules = {
  age: [{ validator: checkAge, trigger: "blur" }]
}

// 3. Aplicar las reglas al formulario
<g-form :rules="rules">
  <g-form-item prop="age">
    <g-input v-model="formData.age" />
  </g-form-item>
</g-form>
\`\`\`

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:st,GFormItem:ht,GInput:bt,GConfigProvider:vt,GButton:gt},setup(){const r=H(),t=Ze({pass:"",checkPass:"",age:""}),s={pass:[{validator:(v,b,m)=>{b===""?m(new Error("Ingrese una contraseña")):(t.checkPass!==""&&r.value?.validateField("checkPass"),m())},trigger:"blur"}],checkPass:[{validator:(v,b,m)=>{b===""?m(new Error("Confirme su contraseña")):b!==t.pass?m(new Error("Las contraseñas no coinciden")):m()},trigger:"blur"}],age:[{validator:(v,b,m)=>{if(!b)return m(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(b))?Number(b)<18?m(new Error("La edad debe ser mayor a 18")):m():m(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function l(){r.value&&await r.value.validate((v,b)=>{v?console.log("submit!",t):console.log("error submit!",b)})}async function i(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:s,handleSubmit:l,handleReset:i}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item label="Contraseña" prop="pass">
            <g-input 
              v-model="formData.pass" 
              type="password" 
              show-password
              autocomplete="off"
              placeholder="Ingrese su contraseña"
              help-text="La contraseña debe tener al menos 6 caracteres"
            />
          </g-form-item>
          <g-form-item label="Confirmar" prop="checkPass">
            <g-input 
              v-model="formData.checkPass" 
              type="password"
              show-password
              autocomplete="off"
              placeholder="Confirme su contraseña"
              help-text="Repita la contraseña ingresada"
            />
          </g-form-item>
          <g-form-item label="Edad" prop="age">
            <g-input 
              v-model="formData.age"
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},Ht={name:"Tipo de ejecución",parameters:{docs:{description:{story:`La validación de campos puede realizarse de dos formas:

- **change**: La validación se ejecuta cada vez que el valor del campo cambia
- **blur**: La validación se ejecuta cuando el campo pierde el foco

Ejemplo de reglas de validación:

\`\`\`typescript
const rules = {
  email: [
    { type: 'email', message: 'Ingrese un email válido', trigger: 'change' }
  ],
  password: [
    { min: 6, message: 'La contraseña debe tener al menos 6 caracteres', trigger: 'blur' }
  ]
};
\`\`\`

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.`}}},render:()=>({components:{GForm:st,GFormItem:ht,GInput:bt,GConfigProvider:vt,GButton:gt},setup(){const r=H(),t=Ze({email:"",password:""}),a={email:[{required:!0,message:"El email es requerido",trigger:"change"},{type:"email",message:"Ingrese un email válido",trigger:"change"}],password:[{required:!0,message:"La contraseña es requerida",trigger:"blur"},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((s,l)=>{s?console.log("submit!",l):console.log("error submit!"+l)})}async function o(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:a,handleSubmit:e,handleReset:o}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="email">
            <g-input 
              v-model="formData.email" 
              label="Email"
              help-text="La validación se ejecuta mientras escribes"
            />
          </g-form-item>
          <g-form-item prop="password">
            <g-input 
              v-model="formData.password" 
              type="password"
              label="Contraseña"
              help-text="La validación se ejecuta al perder el foco"
            />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},Kt={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:st,GFormItem:ht,GInput:bt,GConfigProvider:vt,GButton:gt},setup(){return{formData:Ze({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
      <g-config-provider>
        <g-form :model="formData" disabled>
          <div class="grid grid-cols-2 gap-4">
            <g-form-item>
              <g-input v-model="formData.name" label="Nombre Completo" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.email" label="Correo Electrónico" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.phone" label="Teléfono" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.address" label="Dirección" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.ciudad" label="Ciudad" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.country" label="País" />
            </g-form-item>
          </div>
          <div class="flex gap-4 mt-4">
            <g-button disabled>No disponible</g-button>
            <g-button variant="secondary" disabled>Cancelar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},Ut={name:"Prevenir Submit",parameters:{docs:{description:{story:`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

Para más información sobre el comportamiento nativo de formularios HTML, puedes consultar la <a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2" target="_blank">documentación oficial de W3C</a>.

Ejemplo de implementación:

\`\`\`typescript
async function handleSubmit() {
  if (!formRef.value) return

  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', formData)
    } else {
      console.log('error submit!', fields)
    }
  })
}
\`\`\`
`}}},render:()=>({components:{GForm:st,GFormItem:ht,GInput:bt,GConfigProvider:vt,GButton:gt},setup(){const r=H(),t=Ze({usuario:"",clave:""}),a={usuario:[{required:!0,message:"El usuario es requerido",trigger:"blur"}],clave:[{required:!0,message:"La clave es requerida",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((o,s)=>{o?alert("submit!"):console.log("error submit!",s)})}return{formRef:r,formData:t,rules:a,handleSubmit:e}},template:`
      <g-config-provider>
        <g-form 
          ref="formRef" 
          :model="formData" 
          :rules="rules"
          @submit.prevent="handleSubmit"
        >
          <g-form-item prop="usuario">
            <g-input 
              v-model="formData.usuario" 
              label="Usuario"
            />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button type="submit">Enviar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})},zt={name:"Validación Dinámica",parameters:{docs:{description:{story:`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

\`\`\`typescript
interface DomainItem {
  key: number
  value: string
}

const formData = reactive({
  domains: [{ key: 1, value: '' }],
  email: ''
})

const addDomain = () => {
  formData.domains.push({
    key: Date.now(),
    value: ''
  })
}
\`\`\`
`}}},render:()=>({components:{GForm:st,GFormItem:ht,GInput:bt,GConfigProvider:vt,GButton:gt},setup(){const r=H(),t=Ze({domains:[{key:1,value:""}],email:""}),a=l=>{const i=t.domains.indexOf(l);i!==-1&&t.domains.splice(i,1)},e=()=>{t.domains.push({key:Date.now(),value:""})};async function o(){r.value&&await r.value.validate((l,i)=>{l?console.log("submit!",t):console.log("error submit!",i)})}async function s(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,handleSubmit:o,handleReset:s,addDomain:e,removeDomain:a}},template:`
      <g-config-provider>
        <g-form ref="formRef" :model="formData">
          <g-form-item
            class="mb-4"
            prop="email"
            label="Email"
            :rules="[
              { required: true, message: 'El email es requerido', trigger: 'blur' },
              { type: 'email', message: 'Ingrese un email válido', trigger: ['blur', 'change'] }
            ]"
          >
            <g-input 
              v-model="formData.email"
              placeholder="Ingrese su email"
              label="Email"
              help-text="Ejemplo: usuario@dominio.com"
            />
          </g-form-item>

          <g-form-item
            v-for="(domain, index) in formData.domains"
            class="mb-6"
            :key="domain.key"
            :label="'Dominio ' + (index + 1)"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: 'El dominio no puede estar vacío',
              trigger: 'blur'
            }"
          >
            <div class="flex gap-4">
              <g-input 
                v-model="domain.value"
                label="Dominio"
                placeholder="Ingrese el dominio"
              />
              <g-button 
                variant="secondary" 
                @click.prevent="removeDomain(domain)"
              >
                Eliminar
              </g-button>
            </div>
          </g-form-item>

          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="addDomain" variant="secondary">Nuevo dominio</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    `})};Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`{
  name: 'Formulario Completo',
  parameters: {
    docs: {
      description: {
        story: \`Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones.\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton,
      GSelect,
      GRadio,
      GCheckbox,
      GSegmented,
      GDatePicker,
      GTimePicker
    },
    setup() {
      const formRef = ref<FormInstance>();
      const formData = reactive({
        fullName: '',
        email: '',
        country: '',
        city: '',
        gender: '',
        termsAccepted: false,
        preferredContact: '',
        birthDate: '',
        appointmentDate: '',
        appointmentTime: ''
      });
      const contactOptions = [{
        label: 'Email',
        value: 'email'
      }, {
        label: 'Teléfono',
        value: 'phone'
      }, {
        label: 'WhatsApp',
        value: 'whatsapp'
      }];

      // Lista de países
      const countries = [{
        value: 'mx',
        title: 'México'
      }, {
        value: 'co',
        title: 'Colombia'
      }, {
        value: 'ar',
        title: 'Argentina'
      }, {
        value: 'cl',
        title: 'Chile'
      }, {
        value: 'pe',
        title: 'Perú'
      }, {
        value: 'es',
        title: 'España'
      }];

      // Mapa de ciudades por país
      const citiesByCountry = {
        mx: [{
          value: 'mx-cdmx',
          title: 'Ciudad de México'
        }, {
          value: 'mx-gdl',
          title: 'Guadalajara'
        }, {
          value: 'mx-mty',
          title: 'Monterrey'
        }],
        co: [{
          value: 'co-bog',
          title: 'Bogotá'
        }, {
          value: 'co-med',
          title: 'Medellín'
        }, {
          value: 'co-cal',
          title: 'Cali'
        }],
        ar: [{
          value: 'ar-bue',
          title: 'Buenos Aires'
        }, {
          value: 'ar-cor',
          title: 'Córdoba'
        }, {
          value: 'ar-ros',
          title: 'Rosario'
        }],
        cl: [{
          value: 'cl-san',
          title: 'Santiago'
        }, {
          value: 'cl-val',
          title: 'Valparaíso'
        }, {
          value: 'cl-con',
          title: 'Concepción'
        }],
        pe: [{
          value: 'pe-lim',
          title: 'Lima'
        }, {
          value: 'pe-are',
          title: 'Arequipa'
        }, {
          value: 'pe-tru',
          title: 'Trujillo'
        }],
        es: [{
          value: 'es-mad',
          title: 'Madrid'
        }, {
          value: 'es-bcn',
          title: 'Barcelona'
        }, {
          value: 'es-val',
          title: 'Valencia'
        }]
      };

      // Ciudades disponibles basadas en el país seleccionado
      const availableCities = computed(() => {
        if (!formData.country) return [];
        return citiesByCountry[formData.country as keyof typeof citiesByCountry] || [];
      });

      // Limpiar ciudad cuando cambia el país
      watch(() => formData.country, () => {
        formData.city = '';
      });
      const disableFutureDates = (time: Date) => {
        return time.getTime() > Date.now();
      };
      const disablePastDates = (time: Date) => {
        return time.getTime() < Date.now();
      };

      // Reglas de validación
      const rules = {
        fullName: [{
          required: true,
          message: 'El nombre completo es requerido',
          trigger: 'blur'
        }, {
          min: 3,
          message: 'El nombre debe tener al menos 3 caracteres',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'El correo electrónico es requerido',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Por favor ingrese un correo electrónico válido',
          trigger: 'blur'
        }],
        country: [{
          required: true,
          message: 'Por favor seleccione un país'
        }],
        city: [{
          required: true,
          message: 'Por favor seleccione una ciudad'
        }],
        gender: [{
          required: true,
          message: 'Por favor seleccione su género'
        }],
        termsAccepted: [{
          validator: (rule: any, value: boolean, callback: any) => {
            if (value === true) {
              callback();
            } else {
              callback(new Error('Debe aceptar los términos y condiciones para continuar'));
            }
          },
          type: 'boolean',
          trigger: 'change'
        }],
        preferredContact: [{
          validator: (rule: any, value: boolean, callback: any) => {
            if (!value) {
              callback(new Error('Debe seleccionar un método de contacto preferido'));
            }
            callback();
          },
          type: 'boolean',
          trigger: 'change'
        }],
        birthDate: [{
          required: true,
          message: 'La fecha de nacimiento es requerida',
          trigger: 'change'
        }],
        appointmentDate: [{
          required: true,
          message: 'La fecha de cita es requerida',
          trigger: 'change'
        }],
        appointmentTime: [{
          required: true,
          message: 'La hora de cita es requerida',
          trigger: 'change'
        }]
      };

      // Manejar envío del formulario
      async function handleSubmit() {
        if (!formRef.value) return;
        try {
          const valid = await formRef.value.validate();
          if (valid) {
            alert('Formulario enviado correctamente');
            console.log('Form data:', formData);
          } else {
            alert('Formulario no válido');
            console.log('Formulario no válido');
          }
        } catch (error) {
          console.error('Validation error:', error);
        }
      }

      // Resetear formulario
      function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        countries,
        availableCities,
        rules,
        contactOptions,
        disableFutureDates,
        disablePastDates,
        GSegmented,
        handleSubmit,
        handleReset
      };
    },
    template: \`
      <g-config-provider>
        <g-form 
          ref="formRef" 
          :model="formData" 
          :rules="rules"
        >
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Método de contacto preferido</h3>
            <g-form-item prop="preferredContact">
              <g-segmented
                v-model="formData.preferredContact"
                :options="contactOptions"
                block
                size="sm"
              />
            </g-form-item>
          </div>
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Nombre completo y Email</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <g-form-item prop="fullName">
              <g-input 
                v-model="formData.fullName" 
                label="Nombre completo"
                placeholder="Ingrese su nombre y apellidos"
                prefix-icon="regular user"
                help-text="Ingrese su nombre y apellidos completos"
              />
            </g-form-item>
            
            <g-form-item prop="email">
              <g-input 
                v-model="formData.email"
                placeholder="ejemplo@correo.com"
                prefix-icon="regular envelope"
                help-text="Usaremos este email para contactarlo"
              />
            </g-form-item>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Origen geográfico</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <g-form-item prop="country">
                <g-select
                  v-model="formData.country"
                  :options="countries"
                  label="País"
                  placeholder="Seleccione un país"
                  prefix-icon="regular globe"
                  filterable
                  clearable
                />
              </g-form-item>
              
              <g-form-item prop="city">
                <g-select
                  v-model="formData.city"
                  :options="availableCities"
                  label="Ciudad"
                  placeholder="Seleccione una ciudad"
                  prefix-icon="regular store"
                  filterable
                  clearable
                  :disabled="!formData.country"
                  help-text="Seleccione su ciudad de residencia"
                />
              </g-form-item>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-bold mb-2">Información personal</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <g-form-item prop="gender" show-message="parent" label="Género">
                <div class="flex flex-row gap-6 mt-2">
                  <g-radio v-model="formData.gender" label="Masculino" value="male" />
                  <g-radio v-model="formData.gender" label="Femenino" value="female" />
                  <g-radio v-model="formData.gender" label="Prefiero no decir" value="other" />
                </div>
              </g-form-item>
              
              <g-form-item prop="birthDate">
                <g-date-picker
                  v-model="formData.birthDate"
                  label="Fecha de nacimiento"
                  format="DD/MM/YYYY"
                  placeholder="Seleccione su fecha de nacimiento"
                  :disabled-date="disableFutureDates"
                  help-text="Debe ser mayor de edad"
                  prefix-icon="regular calendar"
                />
              </g-form-item>
            </div>
          </div>
          
          <div class="mb-10">
            <h3 class="text-lg font-bold mb-2">Programación de cita</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <g-form-item prop="appointmentDate">
                <g-date-picker
                  v-model="formData.appointmentDate"
                  label="Fecha de cita"
                  format="DD/MM/YYYY"
                  placeholder="Seleccione la fecha de su cita"
                  :disabled-date="disablePastDates"
                  help-text="Seleccione una fecha futura"
                  prefix-icon="regular calendar-check"
                />
              </g-form-item>
              
              <g-form-item prop="appointmentTime">
                <g-time-picker
                  v-model="formData.appointmentTime"
                  label="Hora de cita"
                  format="HH:mm"
                  placeholder="Seleccione la hora de su cita"
                  help-text="Horario de atención: 9:00 - 18:00"
                  prefix-icon="regular clock"
                />
              </g-form-item>
            </div>
          </div>
          
          <!-- Términos y condiciones -->
          <div class="mb-6">
            <g-form-item
              prop="termsAccepted"
              show-message="parent"
            >
              <g-checkbox 
                v-model="formData.termsAccepted"
                label="Acepto los términos y condiciones de uso"
              />
            </g-form-item>
          </div>
          
          <!-- Botones de acción -->
          <div class="flex gap-4 mt-8">
            <g-button variant="primary" @click="handleSubmit">Enviar formulario</g-button>
            <g-button variant="secondary" @click="handleReset">Limpiar campos</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...Bt.parameters?.docs?.source}}};jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`{
  name: "Básico",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo básico del formulario con validaciones."
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        nombre: "",
        email: ""
      });
      const rules = {
        nombre: [{
          required: true,
          message: "El nombre es requerido",
          trigger: "blur"
        }, {
          min: 3,
          message: "Mínimo 3 caracteres",
          trigger: "blur"
        }],
        email: [{
          required: true,
          message: "El email es requerido",
          trigger: "blur"
        }, {
          type: "email",
          message: "Email inválido",
          trigger: "blur"
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log("submit!", fields);
          } else {
            console.log("error submit!" + fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        rules,
        handleSubmit,
        handleReset
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="nombre">
            <g-input v-model="formData.nombre" label="Nombre" />
          </g-form-item>
          <g-form-item prop="email">
            <g-input v-model="formData.email" label="Email" />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...jt.parameters?.docs?.source}}};Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`{
  name: 'Reglas Personalizadas',
  parameters: {
    docs: {
      description: {
        story: \`Las reglas de validación pueden ser personalizadas usando funciones validadoras. Por ejemplo, para validar la edad de un usuario:

\\\`\\\`\\\`typescript
// 1. Definir la función validadora
const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('La edad es requerida'))
  }
  if (!Number.isInteger(Number(value))) {
    callback(new Error('Ingrese solo números'))
  } else if (Number(value) < 18) {
    callback(new Error('La edad debe ser mayor a 18'))
  } else {
    callback()
  }
}

// 2. Integrar la función en las reglas
const rules = {
  age: [{ validator: checkAge, trigger: "blur" }]
}

// 3. Aplicar las reglas al formulario
<g-form :rules="rules">
  <g-form-item prop="age">
    <g-input v-model="formData.age" />
  </g-form-item>
</g-form>
\\\`\\\`\\\`

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formRef = ref<FormInstance>();
      const formData = reactive({
        pass: "",
        checkPass: "",
        age: ""
      });
      const validatePass = (rule: any, value: any, callback: any) => {
        if (value === "") {
          callback(new Error("Ingrese una contraseña"));
        } else {
          if (formData.checkPass !== "") {
            formRef.value?.validateField("checkPass");
          }
          callback();
        }
      };
      const validatePass2 = (rule: any, value: any, callback: any) => {
        if (value === "") {
          callback(new Error("Confirme su contraseña"));
        } else if (value !== formData.pass) {
          callback(new Error("Las contraseñas no coinciden"));
        } else {
          callback();
        }
      };
      const checkAge = (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(new Error("La edad es requerida"));
        }
        setTimeout(() => {
          if (!Number.isInteger(Number(value))) {
            callback(new Error("Ingrese solo números"));
          } else if (Number(value) < 18) {
            callback(new Error("La edad debe ser mayor a 18"));
          } else {
            callback();
          }
        }, 1000);
      };
      const rules = {
        pass: [{
          validator: validatePass,
          trigger: "blur"
        }],
        checkPass: [{
          validator: validatePass2,
          trigger: "blur"
        }],
        age: [{
          validator: checkAge,
          trigger: "blur"
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log("submit!", formData);
          } else {
            console.log("error submit!", fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        rules,
        handleSubmit,
        handleReset
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item label="Contraseña" prop="pass">
            <g-input 
              v-model="formData.pass" 
              type="password" 
              show-password
              autocomplete="off"
              placeholder="Ingrese su contraseña"
              help-text="La contraseña debe tener al menos 6 caracteres"
            />
          </g-form-item>
          <g-form-item label="Confirmar" prop="checkPass">
            <g-input 
              v-model="formData.checkPass" 
              type="password"
              show-password
              autocomplete="off"
              placeholder="Confirme su contraseña"
              help-text="Repita la contraseña ingresada"
            />
          </g-form-item>
          <g-form-item label="Edad" prop="age">
            <g-input 
              v-model="formData.age"
              label="Edad"
              placeholder="Ingrese su edad"
              help-text="Debe ser mayor de 18 años"
            />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...Gt.parameters?.docs?.source}}};Ht.parameters={...Ht.parameters,docs:{...Ht.parameters?.docs,source:{originalSource:`{
  name: "Tipo de ejecución",
  parameters: {
    docs: {
      description: {
        story: \`La validación de campos puede realizarse de dos formas:

- **change**: La validación se ejecuta cada vez que el valor del campo cambia
- **blur**: La validación se ejecuta cuando el campo pierde el foco

Ejemplo de reglas de validación:

\\\`\\\`\\\`typescript
const rules = {
  email: [
    { type: 'email', message: 'Ingrese un email válido', trigger: 'change' }
  ],
  password: [
    { min: 6, message: 'La contraseña debe tener al menos 6 caracteres', trigger: 'blur' }
  ]
};
\\\`\\\`\\\`

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        email: "",
        password: ""
      });
      const rules = {
        email: [{
          required: true,
          message: "El email es requerido",
          trigger: "change"
        }, {
          type: "email",
          message: "Ingrese un email válido",
          trigger: "change"
        }],
        password: [{
          required: true,
          message: "La contraseña es requerida",
          trigger: "blur"
        }, {
          min: 6,
          message: "La contraseña debe tener al menos 6 caracteres",
          trigger: "blur"
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log("submit!", fields);
          } else {
            console.log("error submit!" + fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        rules,
        handleSubmit,
        handleReset
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData" :rules="rules" class="flex flex-col gap-4">
          <g-form-item prop="email">
            <g-input 
              v-model="formData.email" 
              label="Email"
              help-text="La validación se ejecuta mientras escribes"
            />
          </g-form-item>
          <g-form-item prop="password">
            <g-input 
              v-model="formData.password" 
              type="password"
              label="Contraseña"
              help-text="La validación se ejecuta al perder el foco"
            />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...Ht.parameters?.docs?.source}}};Kt.parameters={...Kt.parameters,docs:{...Kt.parameters?.docs,source:{originalSource:`{
  name: "Formulario Deshabilitado",
  parameters: {
    docs: {
      description: {
        story: "Ejemplo de un formulario completamente deshabilitado con múltiples campos."
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formData = reactive({
        name: "Juan Pérez",
        email: "juan@ejemplo.com",
        phone: "+51 999888777",
        address: "Av. Principal 123",
        ciudad: "Lima",
        country: "Perú"
      });
      return {
        formData
      };
    },
    template: \`
      <g-config-provider>
        <g-form :model="formData" disabled>
          <div class="grid grid-cols-2 gap-4">
            <g-form-item>
              <g-input v-model="formData.name" label="Nombre Completo" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.email" label="Correo Electrónico" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.phone" label="Teléfono" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.address" label="Dirección" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.ciudad" label="Ciudad" />
            </g-form-item>
            <g-form-item>
              <g-input v-model="formData.country" label="País" />
            </g-form-item>
          </div>
          <div class="flex gap-4 mt-4">
            <g-button disabled>No disponible</g-button>
            <g-button variant="secondary" disabled>Cancelar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...Kt.parameters?.docs?.source}}};Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`{
  name: "Prevenir Submit",
  parameters: {
    docs: {
      description: {
        story: \`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

Para más información sobre el comportamiento nativo de formularios HTML, puedes consultar la <a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2" target="_blank">documentación oficial de W3C</a>.

Ejemplo de implementación:

\\\`\\\`\\\`typescript
async function handleSubmit() {
  if (!formRef.value) return

  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', formData)
    } else {
      console.log('error submit!', fields)
    }
  })
}
\\\`\\\`\\\`
\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formRef = ref();
      const formData = reactive({
        usuario: "",
        clave: ""
      });
      const rules = {
        usuario: [{
          required: true,
          message: "El usuario es requerido",
          trigger: "blur"
        }],
        clave: [{
          required: true,
          message: "La clave es requerida",
          trigger: "blur"
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!", fields);
          }
        });
      }
      return {
        formRef,
        formData,
        rules,
        handleSubmit
      };
    },
    template: \`
      <g-config-provider>
        <g-form 
          ref="formRef" 
          :model="formData" 
          :rules="rules"
          @submit.prevent="handleSubmit"
        >
          <g-form-item prop="usuario">
            <g-input 
              v-model="formData.usuario" 
              label="Usuario"
            />
          </g-form-item>
          <div class="flex gap-4 mt-4">
            <g-button type="submit">Enviar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...Ut.parameters?.docs?.source}}};zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`{
  name: 'Validación Dinámica',
  parameters: {
    docs: {
      description: {
        story: \`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

\\\`\\\`\\\`typescript
interface DomainItem {
  key: number
  value: string
}

const formData = reactive({
  domains: [{ key: 1, value: '' }],
  email: ''
})

const addDomain = () => {
  formData.domains.push({
    key: Date.now(),
    value: ''
  })
}
\\\`\\\`\\\`
\`
      }
    }
  },
  render: () => ({
    components: {
      GForm,
      GFormItem,
      GInput,
      GConfigProvider,
      GButton
    },
    setup() {
      const formRef = ref<FormInstance>();
      interface DomainItem {
        key: number;
        value: string;
      }
      const formData = reactive({
        domains: [{
          key: 1,
          value: ''
        }],
        email: ''
      });
      const removeDomain = (item: DomainItem) => {
        const index = formData.domains.indexOf(item);
        if (index !== -1) {
          formData.domains.splice(index, 1);
        }
      };
      const addDomain = () => {
        formData.domains.push({
          key: Date.now(),
          value: ''
        });
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', formData);
          } else {
            console.log('error submit!', fields);
          }
        });
      }
      async function handleReset() {
        if (!formRef.value) return;
        formRef.value.resetFields();
      }
      return {
        formRef,
        formData,
        handleSubmit,
        handleReset,
        addDomain,
        removeDomain
      };
    },
    template: \`
      <g-config-provider>
        <g-form ref="formRef" :model="formData">
          <g-form-item
            class="mb-4"
            prop="email"
            label="Email"
            :rules="[
              { required: true, message: 'El email es requerido', trigger: 'blur' },
              { type: 'email', message: 'Ingrese un email válido', trigger: ['blur', 'change'] }
            ]"
          >
            <g-input 
              v-model="formData.email"
              placeholder="Ingrese su email"
              label="Email"
              help-text="Ejemplo: usuario@dominio.com"
            />
          </g-form-item>

          <g-form-item
            v-for="(domain, index) in formData.domains"
            class="mb-6"
            :key="domain.key"
            :label="'Dominio ' + (index + 1)"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: 'El dominio no puede estar vacío',
              trigger: 'blur'
            }"
          >
            <div class="flex gap-4">
              <g-input 
                v-model="domain.value"
                label="Dominio"
                placeholder="Ingrese el dominio"
              />
              <g-button 
                variant="secondary" 
                @click.prevent="removeDomain(domain)"
              >
                Eliminar
              </g-button>
            </div>
          </g-form-item>

          <div class="flex gap-4 mt-4">
            <g-button @click="handleSubmit">Enviar</g-button>
            <g-button @click="addDomain" variant="secondary">Nuevo dominio</g-button>
            <g-button @click="handleReset" variant="secondary">Limpiar</g-button>
          </div>
        </g-form>
      </g-config-provider>
    \`
  })
}`,...zt.parameters?.docs?.source}}};const jl=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];export{Bt as CompleteForm,Gt as CustomRules,Kt as DisabledForm,zt as DynamicValidation,Ut as PreventSubmit,jt as Primary,Ht as TriggerValidation,jl as __namedExportsOrder,Bl as default};
