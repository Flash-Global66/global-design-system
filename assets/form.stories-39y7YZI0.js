import{S as he,J as yt,d as $e,c as I,w as Fe,E as Dt,H as Qe,a2 as Ja,x as W,s as ve,l as D,u as n,G as Vt,e as _,r as H,o as xa,a as Ye,C as Qa,k as G,m as me,D as Le,y as ge,a6 as ta,a1 as aa,L as qn,n as ct,p as zt,b as Ae,Y as Yn,Z as _n,_ as Je,F as Ee,z as qe,h as ie,$ as xt,U as ze,j as Be,v as nt,g as Xa,f as Ue,A as bt,K as kt,an as Oa,ad as $a,T as Bn}from"./vue.esm-bundler-BQ5MY6wY.js";import{C as jn,z as De,p as ue,a as Pe,a9 as oa,B as na,L as Gn,x as Sa,v as He,aa as en,q as Hn,w as Un,b as Kn,A as zn,G as dt}from"./ConfigProvider-C-g_q7t3.js";import{c as da}from"./castArray-iDdAUYc3.js";import{d as wt}from"./error-Cq9Fpw4b.js";import{u as Wn}from"./index-CdyrOdXF.js";import{c as Ta,H as Zn,Y as Jn,G as tn}from"./index-CbegoHtD.js";import{r as Qn}from"./index-B9ZeYHC7.js";import{u as Pa,o as Xn,b as er}from"./index-CeZjlggi.js";import{f as be}from"./index-CqyTLt6u.js";import{U as ma}from"./event-BB_Ol6Sd.js";import{u as an,f as tr}from"./index-Zf8ggd1d.js";import{m as ar}from"./typescript-Bp3YSIOJ.js";import{u as nn,a as nr,r as it}from"./index-BMEZWhUo.js";import{a as Ca,u as rr}from"./index-BTG2Cvn4.js";import{G as mt}from"./index-cIML9NYP.js";import{p as or,G as sr}from"./index-B8PirZEh.js";import{a as lr}from"./index-DsR8QcKN.js";import{a as ir}from"./index-zJiqQM2Y.js";import{G as Aa}from"./index-D7AK-r3u.js";import{a as ur,P as cr,d as z,s as rn,U as fa,l as on,r as sn,o as dr,E as mr,B as fr,q as pr,v as Na,b as sa}from"./index-VWG18TrH.js";import{c as tt,g as rt}from"./_commonjsHelpers-Cpj98o6Y.js";import{Q as vr,b as gr}from"./index-CIWJLX5A.js";import{_ as hr}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{h as Wt,g as br}from"./style-I63TqKWc.js";import{C as pa}from"./index-qgA1vVWA.js";import{E as Re}from"./index-Dfqm3zCc.js";import{y as La}from"./index-CPnc5Bd5.js";import{c as yr}from"./index-BMi3ZUhV.js";import{i as kr}from"./isEqual-Dm3oqgvQ.js";import{d as wr}from"./debounce-vfuzLr-b.js";import"./index-D3vNJlXT.js";import"./_initCloneObject-CqmxWRfM.js";import"./_arrayPush-Dd5JSu8W.js";import"./index-Bw_FBbTr.js";import"./index-CifkfqPz.js";import"./content-D35gYQuw.js";import"./index-Dk_cbr33.js";import"./dynamic-size-list-C2UP19ms.js";import"./raf-CXmqbqh_.js";import"./util-B2mB0_6C.js";import"./icon-DdC9odDi.js";import"./use-form-common-props-CapjGx9q.js";import"./constants-Dnj8X3EN.js";import"./isArrayLikeObject-Kh4gDV5m.js";import"./index-qhYoMOdr.js";import"./index-DUVSi0lu.js";import"./use-form-item-CNnZethX.js";var ln={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e,o){var s=e.prototype,l=function(d){return d&&(d.indexOf?d:d.s)},i=function(d,S,x,O,p){var f=d.name?d:d.$locale(),h=l(f[S]),y=l(f[x]),u=h||y.map(function(w){return w.slice(0,O)});if(!p)return u;var F=f.weekStart;return u.map(function(w,E){return u[(E+(F||0))%7]})},v=function(){return o.Ls[o.locale()]},k=function(d,S){return d.formats[S]||function(x){return x.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(O,p,f){return p||f.slice(1)})}(d.formats[S.toUpperCase()])},m=function(){var d=this;return{months:function(S){return S?S.format("MMMM"):i(d,"months")},monthsShort:function(S){return S?S.format("MMM"):i(d,"monthsShort","months",3)},firstDayOfWeek:function(){return d.$locale().weekStart||0},weekdays:function(S){return S?S.format("dddd"):i(d,"weekdays")},weekdaysMin:function(S){return S?S.format("dd"):i(d,"weekdaysMin","weekdays",2)},weekdaysShort:function(S){return S?S.format("ddd"):i(d,"weekdaysShort","weekdays",3)},longDateFormat:function(S){return k(d.$locale(),S)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};s.localeData=function(){return m.bind(this)()},o.localeData=function(){var d=v();return{firstDayOfWeek:function(){return d.weekStart||0},weekdays:function(){return o.weekdays()},weekdaysShort:function(){return o.weekdaysShort()},weekdaysMin:function(){return o.weekdaysMin()},months:function(){return o.months()},monthsShort:function(){return o.monthsShort()},longDateFormat:function(S){return k(d,S)},meridiem:d.meridiem,ordinal:d.ordinal}},o.months=function(){return i(v(),"months")},o.monthsShort=function(){return i(v(),"monthsShort","months",3)},o.weekdays=function(d){return i(v(),"weekdays",null,null,d)},o.weekdaysShort=function(d){return i(v(),"weekdaysShort","weekdays",3,d)},o.weekdaysMin=function(d){return i(v(),"weekdaysMin","weekdays",2,d)}}})})(ln);var Dr=ln.exports;const xr=rt(Dr),Sr=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],je=r=>!r&&r!==0?[]:he(r)?r:[r];var un={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,o=/\d/,s=/\d\d/,l=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,v={},k=function(f){return(f=+f)+(f>68?1900:2e3)},m=function(f){return function(h){this[f]=+h}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var y=h.match(/([+-]|\d\d)/g),u=60*y[1]+(+y[2]||0);return u===0?0:y[0]==="+"?-u:u}(f)}],S=function(f){var h=v[f];return h&&(h.indexOf?h:h.s.concat(h.f))},x=function(f,h){var y,u=v.meridiem;if(u){for(var F=1;F<=24;F+=1)if(f.indexOf(u(F,0,h))>-1){y=F>12;break}}else y=f===(h?"pm":"PM");return y},O={A:[i,function(f){this.afternoon=x(f,!1)}],a:[i,function(f){this.afternoon=x(f,!0)}],Q:[o,function(f){this.month=3*(f-1)+1}],S:[o,function(f){this.milliseconds=100*+f}],SS:[s,function(f){this.milliseconds=10*+f}],SSS:[/\d{3}/,function(f){this.milliseconds=+f}],s:[l,m("seconds")],ss:[l,m("seconds")],m:[l,m("minutes")],mm:[l,m("minutes")],H:[l,m("hours")],h:[l,m("hours")],HH:[l,m("hours")],hh:[l,m("hours")],D:[l,m("day")],DD:[s,m("day")],Do:[i,function(f){var h=v.ordinal,y=f.match(/\d+/);if(this.day=y[0],h)for(var u=1;u<=31;u+=1)h(u).replace(/\[|\]/g,"")===f&&(this.day=u)}],w:[l,m("week")],ww:[s,m("week")],M:[l,m("month")],MM:[s,m("month")],MMM:[i,function(f){var h=S("months"),y=(S("monthsShort")||h.map(function(u){return u.slice(0,3)})).indexOf(f)+1;if(y<1)throw new Error;this.month=y%12||y}],MMMM:[i,function(f){var h=S("months").indexOf(f)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,m("year")],YY:[s,function(f){this.year=k(f)}],YYYY:[/\d{4}/,m("year")],Z:d,ZZ:d};function p(f){var h,y;h=f,y=v&&v.formats;for(var u=(f=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,U,M){var X=M&&M.toUpperCase();return U||y[M]||a[M]||y[X].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Q,K,ae){return K||ae.slice(1)})})).match(e),F=u.length,w=0;w<F;w+=1){var E=u[w],N=O[E],T=N&&N[0],V=N&&N[1];u[w]=V?{regex:T,parser:V}:E.replace(/^\[|\]$/g,"")}return function(Y){for(var U={},M=0,X=0;M<F;M+=1){var Q=u[M];if(typeof Q=="string")X+=Q.length;else{var K=Q.regex,ae=Q.parser,se=Y.slice(X),L=K.exec(se)[0];ae.call(U,L),Y=Y.replace(L,"")}}return function(P){var A=P.afternoon;if(A!==void 0){var $=P.hours;A?$<12&&(P.hours+=12):$===12&&(P.hours=0),delete P.afternoon}}(U),U}}return function(f,h,y){y.p.customParseFormat=!0,f&&f.parseTwoDigitYear&&(k=f.parseTwoDigitYear);var u=h.prototype,F=u.parse;u.parse=function(w){var E=w.date,N=w.utc,T=w.args;this.$u=N;var V=T[1];if(typeof V=="string"){var Y=T[2]===!0,U=T[3]===!0,M=Y||U,X=T[2];U&&(X=T[2]),v=this.$locale(),!Y&&X&&(v=y.Ls[X]),this.$d=function(se,L,P,A){try{if(["x","X"].indexOf(L)>-1)return new Date((L==="X"?1e3:1)*se);var $=p(L)(se),R=$.year,j=$.month,C=$.day,q=$.hours,Z=$.minutes,oe=$.seconds,Ce=$.milliseconds,Te=$.zone,_e=$.week,ee=new Date,te=C||(R||j?1:ee.getDate()),ce=R||ee.getFullYear(),B=0;R&&!j||(B=j>0?j-1:ee.getMonth());var le,de=q||0,ke=Z||0,xe=oe||0,Ve=Ce||0;return Te?new Date(Date.UTC(ce,B,te,de,ke,xe,Ve+60*Te.offset*1e3)):P?new Date(Date.UTC(ce,B,te,de,ke,xe,Ve)):(le=new Date(ce,B,te,de,ke,xe,Ve),_e&&(le=A(le).week(_e).toDate()),le)}catch{return new Date("")}}(E,V,N,y),this.init(),X&&X!==!0&&(this.$L=this.locale(X).$L),M&&E!=this.format(V)&&(this.$d=new Date("")),v={}}else if(V instanceof Array)for(var Q=V.length,K=1;K<=Q;K+=1){T[1]=V[K-1];var ae=y.apply(this,T);if(ae.isValid()){this.$d=ae.$d,this.$L=ae.$L,this.init();break}K===Q&&(this.$d=new Date(""))}else F.call(this,w)}}})})(un);var Pr=un.exports;const cn=rt(Pr);var dn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){var o=e.prototype,s=o.format;o.format=function(l){var i=this,v=this.$locale();if(!this.isValid())return s.bind(this)(l);var k=this.$utils(),m=(l||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(d){switch(d){case"Q":return Math.ceil((i.$M+1)/3);case"Do":return v.ordinal(i.$D);case"gggg":return i.weekYear();case"GGGG":return i.isoWeekYear();case"wo":return v.ordinal(i.week(),"W");case"w":case"ww":return k.s(i.week(),d==="w"?1:2,"0");case"W":case"WW":return k.s(i.isoWeek(),d==="W"?1:2,"0");case"k":case"kk":return k.s(String(i.$H===0?24:i.$H),d==="k"?1:2,"0");case"X":return Math.floor(i.$d.getTime()/1e3);case"x":return i.$d.getTime();case"z":return"["+i.offsetName()+"]";case"zzz":return"["+i.offsetName("long")+"]";default:return d}});return s.bind(this)(m)}}})})(dn);var Cr=dn.exports;const Mr=rt(Cr);var mn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){var a="week",e="year";return function(o,s,l){var i=s.prototype;i.week=function(v){if(v===void 0&&(v=null),v!==null)return this.add(7*(v-this.week()),"day");var k=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var m=l(this).startOf(e).add(1,e).date(k),d=l(this).endOf(a);if(m.isBefore(d))return 1}var S=l(this).startOf(e).date(k).startOf(a).subtract(1,"millisecond"),x=this.diff(S,a,!0);return x<0?l(this).startOf("week").week():Math.ceil(x)},i.weeks=function(v){return v===void 0&&(v=null),this.week(v)}}})})(mn);var Rr=mn.exports;const Er=rt(Rr);var fn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.weekYear=function(){var o=this.month(),s=this.week(),l=this.year();return s===1&&o===11?l+1:o===0&&s>=52?l-1:l}}})})(fn);var Fr=fn.exports;const Vr=rt(Fr);var pn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e,o){e.prototype.dayOfYear=function(s){var l=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return s==null?l:this.add(s-l,"day")}}})})(pn);var Ir=pn.exports;const Or=rt(Ir);var vn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.isSameOrAfter=function(o,s){return this.isSame(o,s)||this.isAfter(o,s)}}})})(vn);var $r=vn.exports;const Tr=rt($r);var gn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.isSameOrBefore=function(o,s){return this.isSame(o,s)||this.isBefore(o,s)}}})})(gn);var Ar=gn.exports;const Nr=rt(Ar);function ut(){return ut=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(r[e]=a[e])}return r},ut.apply(this,arguments)}function Lr(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,It(r,t)}function va(r){return va=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},va(r)}function It(r,t){return It=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},It(r,t)}function qr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kt(r,t,a){return qr()?Kt=Reflect.construct.bind():Kt=function(o,s,l){var i=[null];i.push.apply(i,s);var v=Function.bind.apply(o,i),k=new v;return l&&It(k,l.prototype),k},Kt.apply(null,arguments)}function Yr(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function ga(r){var t=typeof Map=="function"?new Map:void 0;return ga=function(e){if(e===null||!Yr(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return Kt(e,arguments,va(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),It(o,e)},ga(r)}var _r=/%[sdj%]/g,Br=function(){};function ha(r){if(!r||!r.length)return null;var t={};return r.forEach(function(a){var e=a.field;t[e]=t[e]||[],t[e].push(a)}),t}function Ge(r){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var o=0,s=a.length;if(typeof r=="function")return r.apply(null,a);if(typeof r=="string"){var l=r.replace(_r,function(i){if(i==="%%")return"%";if(o>=s)return i;switch(i){case"%s":return String(a[o++]);case"%d":return Number(a[o++]);case"%j":try{return JSON.stringify(a[o++])}catch{return"[Circular]"}break;default:return i}});return l}return r}function jr(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function Oe(r,t){return!!(r==null||t==="array"&&Array.isArray(r)&&!r.length||jr(t)&&typeof r=="string"&&!r)}function Gr(r,t,a){var e=[],o=0,s=r.length;function l(i){e.push.apply(e,i||[]),o++,o===s&&a(e)}r.forEach(function(i){t(i,l)})}function qa(r,t,a){var e=0,o=r.length;function s(l){if(l&&l.length){a(l);return}var i=e;e=e+1,i<o?t(r[i],s):a([])}s([])}function Hr(r){var t=[];return Object.keys(r).forEach(function(a){t.push.apply(t,r[a]||[])}),t}var Ya=function(r){Lr(t,r);function t(a,e){var o;return o=r.call(this,"Async Validation Error")||this,o.errors=a,o.fields=e,o}return t}(ga(Error));function Ur(r,t,a,e,o){if(t.first){var s=new Promise(function(S,x){var O=function(h){return e(h),h.length?x(new Ya(h,ha(h))):S(o)},p=Hr(r);qa(p,a,O)});return s.catch(function(S){return S}),s}var l=t.firstFields===!0?Object.keys(r):t.firstFields||[],i=Object.keys(r),v=i.length,k=0,m=[],d=new Promise(function(S,x){var O=function(f){if(m.push.apply(m,f),k++,k===v)return e(m),m.length?x(new Ya(m,ha(m))):S(o)};i.length||(e(m),S(o)),i.forEach(function(p){var f=r[p];l.indexOf(p)!==-1?qa(f,a,O):Gr(f,a,O)})});return d.catch(function(S){return S}),d}function Kr(r){return!!(r&&r.message!==void 0)}function zr(r,t){for(var a=r,e=0;e<t.length;e++){if(a==null)return a;a=a[t[e]]}return a}function _a(r,t){return function(a){var e;return r.fullFields?e=zr(t,r.fullFields):e=t[a.field||r.fullField],Kr(a)?(a.field=a.field||r.fullField,a.fieldValue=e,a):{message:typeof a=="function"?a():a,fieldValue:e,field:a.field||r.fullField}}}function Ba(r,t){if(t){for(var a in t)if(t.hasOwnProperty(a)){var e=t[a];typeof e=="object"&&typeof r[a]=="object"?r[a]=ut({},r[a],e):r[a]=e}}return r}var hn=function(t,a,e,o,s,l){t.required&&(!e.hasOwnProperty(t.field)||Oe(a,l||t.type))&&o.push(Ge(s.messages.required,t.fullField))},Wr=function(t,a,e,o,s){(/^\s+$/.test(a)||a==="")&&o.push(Ge(s.messages.whitespace,t.fullField))},Tt,Zr=function(){if(Tt)return Tt;var r="[a-fA-F\\d:]",t=function(F){return F&&F.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},a="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",e="[a-fA-F\\d]{1,4}",o=(`
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
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+a+"$)|(?:^"+o+"$)"),l=new RegExp("^"+a+"$"),i=new RegExp("^"+o+"$"),v=function(F){return F&&F.exact?s:new RegExp("(?:"+t(F)+a+t(F)+")|(?:"+t(F)+o+t(F)+")","g")};v.v4=function(u){return u&&u.exact?l:new RegExp(""+t(u)+a+t(u),"g")},v.v6=function(u){return u&&u.exact?i:new RegExp(""+t(u)+o+t(u),"g")};var k="(?:(?:[a-z]+:)?//)",m="(?:\\S+(?::\\S*)?@)?",d=v.v4().source,S=v.v6().source,x="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",O="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",p="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",f="(?::\\d{2,5})?",h='(?:[/?#][^\\s"]*)?',y="(?:"+k+"|www\\.)"+m+"(?:localhost|"+d+"|"+S+"|"+x+O+p+")"+f+h;return Tt=new RegExp("(?:^"+y+"$)","i"),Tt},ja={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Et={integer:function(t){return Et.number(t)&&parseInt(t,10)===t},float:function(t){return Et.number(t)&&!Et.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!Et.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(ja.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(Zr())},hex:function(t){return typeof t=="string"&&!!t.match(ja.hex)}},Jr=function(t,a,e,o,s){if(t.required&&a===void 0){hn(t,a,e,o,s);return}var l=["integer","float","array","regexp","object","method","email","number","date","url","hex"],i=t.type;l.indexOf(i)>-1?Et[i](a)||o.push(Ge(s.messages.types[i],t.fullField,t.type)):i&&typeof a!==t.type&&o.push(Ge(s.messages.types[i],t.fullField,t.type))},Qr=function(t,a,e,o,s){var l=typeof t.len=="number",i=typeof t.min=="number",v=typeof t.max=="number",k=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,m=a,d=null,S=typeof a=="number",x=typeof a=="string",O=Array.isArray(a);if(S?d="number":x?d="string":O&&(d="array"),!d)return!1;O&&(m=a.length),x&&(m=a.replace(k,"_").length),l?m!==t.len&&o.push(Ge(s.messages[d].len,t.fullField,t.len)):i&&!v&&m<t.min?o.push(Ge(s.messages[d].min,t.fullField,t.min)):v&&!i&&m>t.max?o.push(Ge(s.messages[d].max,t.fullField,t.max)):i&&v&&(m<t.min||m>t.max)&&o.push(Ge(s.messages[d].range,t.fullField,t.min,t.max))},ht="enum",Xr=function(t,a,e,o,s){t[ht]=Array.isArray(t[ht])?t[ht]:[],t[ht].indexOf(a)===-1&&o.push(Ge(s.messages[ht],t.fullField,t[ht].join(", ")))},eo=function(t,a,e,o,s){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(a)||o.push(Ge(s.messages.pattern.mismatch,t.fullField,a,t.pattern));else if(typeof t.pattern=="string"){var l=new RegExp(t.pattern);l.test(a)||o.push(Ge(s.messages.pattern.mismatch,t.fullField,a,t.pattern))}}},fe={required:hn,whitespace:Wr,type:Jr,range:Qr,enum:Xr,pattern:eo},to=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a,"string")&&!t.required)return e();fe.required(t,a,o,l,s,"string"),Oe(a,"string")||(fe.type(t,a,o,l,s),fe.range(t,a,o,l,s),fe.pattern(t,a,o,l,s),t.whitespace===!0&&fe.whitespace(t,a,o,l,s))}e(l)},ao=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),a!==void 0&&fe.type(t,a,o,l,s)}e(l)},no=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(a===""&&(a=void 0),Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),a!==void 0&&(fe.type(t,a,o,l,s),fe.range(t,a,o,l,s))}e(l)},ro=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),a!==void 0&&fe.type(t,a,o,l,s)}e(l)},oo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),Oe(a)||fe.type(t,a,o,l,s)}e(l)},so=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),a!==void 0&&(fe.type(t,a,o,l,s),fe.range(t,a,o,l,s))}e(l)},lo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),a!==void 0&&(fe.type(t,a,o,l,s),fe.range(t,a,o,l,s))}e(l)},io=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(a==null&&!t.required)return e();fe.required(t,a,o,l,s,"array"),a!=null&&(fe.type(t,a,o,l,s),fe.range(t,a,o,l,s))}e(l)},uo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),a!==void 0&&fe.type(t,a,o,l,s)}e(l)},co="enum",mo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s),a!==void 0&&fe[co](t,a,o,l,s)}e(l)},fo=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a,"string")&&!t.required)return e();fe.required(t,a,o,l,s),Oe(a,"string")||fe.pattern(t,a,o,l,s)}e(l)},po=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a,"date")&&!t.required)return e();if(fe.required(t,a,o,l,s),!Oe(a,"date")){var v;a instanceof Date?v=a:v=new Date(a),fe.type(t,v,o,l,s),v&&fe.range(t,v.getTime(),o,l,s)}}e(l)},vo=function(t,a,e,o,s){var l=[],i=Array.isArray(a)?"array":typeof a;fe.required(t,a,o,l,s,i),e(l)},la=function(t,a,e,o,s){var l=t.type,i=[],v=t.required||!t.required&&o.hasOwnProperty(t.field);if(v){if(Oe(a,l)&&!t.required)return e();fe.required(t,a,o,i,s,l),Oe(a,l)||fe.type(t,a,o,i,s)}e(i)},go=function(t,a,e,o,s){var l=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Oe(a)&&!t.required)return e();fe.required(t,a,o,l,s)}e(l)},Ft={string:to,method:ao,number:no,boolean:ro,regexp:oo,integer:so,float:lo,array:io,object:uo,enum:mo,pattern:fo,date:po,url:la,hex:la,email:la,required:vo,any:go};function ba(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var ya=ba(),$t=function(){function r(a){this.rules=null,this._messages=ya,this.define(a)}var t=r.prototype;return t.define=function(e){var o=this;if(!e)throw new Error("Cannot configure a schema with no rules");if(typeof e!="object"||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach(function(s){var l=e[s];o.rules[s]=Array.isArray(l)?l:[l]})},t.messages=function(e){return e&&(this._messages=Ba(ba(),e)),this._messages},t.validate=function(e,o,s){var l=this;o===void 0&&(o={}),s===void 0&&(s=function(){});var i=e,v=o,k=s;if(typeof v=="function"&&(k=v,v={}),!this.rules||Object.keys(this.rules).length===0)return k&&k(null,i),Promise.resolve(i);function m(p){var f=[],h={};function y(F){if(Array.isArray(F)){var w;f=(w=f).concat.apply(w,F)}else f.push(F)}for(var u=0;u<p.length;u++)y(p[u]);f.length?(h=ha(f),k(f,h)):k(null,i)}if(v.messages){var d=this.messages();d===ya&&(d=ba()),Ba(d,v.messages),v.messages=d}else v.messages=this.messages();var S={},x=v.keys||Object.keys(this.rules);x.forEach(function(p){var f=l.rules[p],h=i[p];f.forEach(function(y){var u=y;typeof u.transform=="function"&&(i===e&&(i=ut({},i)),h=i[p]=u.transform(h)),typeof u=="function"?u={validator:u}:u=ut({},u),u.validator=l.getValidationMethod(u),u.validator&&(u.field=p,u.fullField=u.fullField||p,u.type=l.getType(u),S[p]=S[p]||[],S[p].push({rule:u,value:h,source:i,field:p}))})});var O={};return Ur(S,v,function(p,f){var h=p.rule,y=(h.type==="object"||h.type==="array")&&(typeof h.fields=="object"||typeof h.defaultField=="object");y=y&&(h.required||!h.required&&p.value),h.field=p.field;function u(E,N){return ut({},N,{fullField:h.fullField+"."+E,fullFields:h.fullFields?[].concat(h.fullFields,[E]):[E]})}function F(E){E===void 0&&(E=[]);var N=Array.isArray(E)?E:[E];!v.suppressWarning&&N.length&&r.warning("async-validator:",N),N.length&&h.message!==void 0&&(N=[].concat(h.message));var T=N.map(_a(h,i));if(v.first&&T.length)return O[h.field]=1,f(T);if(!y)f(T);else{if(h.required&&!p.value)return h.message!==void 0?T=[].concat(h.message).map(_a(h,i)):v.error&&(T=[v.error(h,Ge(v.messages.required,h.field))]),f(T);var V={};h.defaultField&&Object.keys(p.value).map(function(M){V[M]=h.defaultField}),V=ut({},V,p.rule.fields);var Y={};Object.keys(V).forEach(function(M){var X=V[M],Q=Array.isArray(X)?X:[X];Y[M]=Q.map(u.bind(null,M))});var U=new r(Y);U.messages(v.messages),p.rule.options&&(p.rule.options.messages=v.messages,p.rule.options.error=v.error),U.validate(p.value,p.rule.options||v,function(M){var X=[];T&&T.length&&X.push.apply(X,T),M&&M.length&&X.push.apply(X,M),f(X.length?X:null)})}}var w;if(h.asyncValidator)w=h.asyncValidator(h,p.value,F,p.source,v);else if(h.validator){try{w=h.validator(h,p.value,F,p.source,v)}catch(E){console.error?.(E),v.suppressValidatorError||setTimeout(function(){throw E},0),F(E.message)}w===!0?F():w===!1?F(typeof h.message=="function"?h.message(h.fullField||h.field):h.message||(h.fullField||h.field)+" fails"):w instanceof Array?F(w):w instanceof Error&&F(w.message)}w&&w.then&&w.then(function(){return F()},function(E){return F(E)})},function(p){m(p)},i)},t.getType=function(e){if(e.type===void 0&&e.pattern instanceof RegExp&&(e.type="pattern"),typeof e.validator!="function"&&e.type&&!Ft.hasOwnProperty(e.type))throw new Error(Ge("Unknown rule type %s",e.type));return e.type||"string"},t.getValidationMethod=function(e){if(typeof e.validator=="function")return e.validator;var o=Object.keys(e),s=o.indexOf("message");return s!==-1&&o.splice(s,1),o.length===1&&o[0]==="required"?Ft.required:Ft[this.getType(e)]||void 0},r}();$t.register=function(t,a){if(typeof a!="function")throw new Error("Cannot register a validator by type, validator is not a function");Ft[t]=a};$t.warning=Br;$t.messages=ya;$t.validators=Ft;const bn=Symbol("formContextKey"),Ga=Symbol("formItemContextKey"),ho=De({disabled:Boolean}),bo=De({...ho,model:Object,rules:{type:ue(Object)},validateOnRuleChange:{type:Boolean,default:!0},scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),yo={validate:(r,t,a)=>(he(r)||yt(r))&&jn(t)&&yt(a)},At=(r,t)=>{const a=da(t);return a.length>0?r.filter(e=>e.prop&&a.includes(e.prop)):r},ko="GForm",yn=$e({name:ko,__name:"Form",props:bo,emits:yo,setup(r,{expose:t,emit:a}){const e=r,o=a,s=[],l=Pe("form"),i=y=>s.find(u=>u.prop===y),v=y=>{s.push(y)},k=y=>{y.prop&&s.splice(s.indexOf(y),1)},m=(y=[])=>{e.model&&At(s,y).forEach(u=>u.resetField())},d=(y=[])=>{At(s,y).forEach(u=>u.clearValidate())},S=I(()=>!!e.model),x=y=>{if(s.length===0)return[];const u=At(s,y);return u.length?u:[]},O=async y=>f(void 0,y),p=async(y=[])=>{if(!S.value)return!1;const u=x(y);if(u.length===0)return!0;let F={};for(const w of u)try{await w.validate(""),w.validateState==="error"&&w.resetField()}catch(E){F={...F,...E}}return Object.keys(F).length===0?!0:Promise.reject(F)},f=async(y=[],u)=>{console.log("modelProps",y);const F=!Vt(u);try{const w=await p(y);return w===!0&&await u?.(w),w}catch(w){if(w instanceof Error)throw w;const E=w;return e.scrollToError&&h(Object.keys(E)[0]),await u?.(!1,E),F&&Promise.reject(E)}},h=y=>{const u=At(s,y)[0];u&&u.$el?.scrollIntoView(e.scrollIntoViewOptions)};return Fe(()=>e.rules,()=>{e.validateOnRuleChange&&O().catch(y=>wt())},{deep:!0,flush:"post"}),Dt(bn,Qe({...Ja(e),emit:o,resetFields:m,clearValidate:d,validateField:f,getField:i,addField:v,removeField:k})),t({validate:O,validateField:f,resetFields:m,clearValidate:d,scrollToField:h,fields:s}),(y,u)=>(_(),W("form",{class:D(n(l).b())},[ve(y.$slots,"default")],2))}});yn.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},expose:[{name:"validate",tags:[{title:"description",content:"Validate the whole form. Receives a callback or returns `Promise`."}]},{name:"validateField",tags:[{title:"description",content:"Validate specified fields."}]},{name:"resetFields",tags:[{title:"description",content:"Reset specified fields and remove validation result."}]},{name:"clearValidate",tags:[{title:"description",content:"Clear validation message for specified fields."}]},{name:"scrollToField",tags:[{title:"description",content:"Scroll to the specified fields."}]},{name:"fields",tags:[{title:"description",content:"All fields context."}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/Form.vue"]};const wo=De({prop:{type:ue([String,Array])},rules:{type:ue([Object,Array])},showMessage:{type:ue(String),default:"child"}}),Ma=$e({name:"FormItem",__name:"form-item",props:wo,setup(r,{expose:t}){const a=r,e=Ye(bn,void 0);Ye(Ga,void 0);const o=Pe("form-item"),s=Wn().value,l=H([]),i=H(""),v=Qn(i,100),k=H(""),m=H();let d,S=!1;const x=I(()=>[o.b(),o.is("error",i.value==="error"),o.is("validating",i.value==="validating"),o.is("success",i.value==="success")]),O=I(()=>a.prop?yt(a.prop)?a.prop:a.prop.join("."):""),p=I(()=>{const K=e?.model;if(!(!K||!a.prop))return oa(K,a.prop).value}),f=I(()=>{const K=[];a.rules&&K.push(...da(a.rules));const ae=e?.rules;if(ae&&a.prop){const se=oa(ae,a.prop).value;se&&K.push(...da(se))}return K}),h=I(()=>f.value.length>0),y=K=>f.value.filter(se=>!se.trigger||!K?!0:he(se.trigger)?se.trigger.includes(K):se.trigger===K).map(({trigger:se,...L})=>L);I(()=>f.value.some(K=>K.required));const u=I(()=>v.value==="error"&&a.showMessage==="parent"),F=I(()=>v.value==="error"&&a.showMessage==="child"),w=K=>{i.value=K},E=K=>{const{errors:ae,fields:se}=K;(!ae||!se)&&console.error(K),w("error"),k.value=ae?ae?.[0]?.message??`${a.prop} es requerido`:"",e?.emit("validate",a.prop,!1,k.value)},N=()=>{w("success"),k.value="",e?.emit("validate",a.prop,!0,"")},T=async K=>{const ae=O.value;return new $t({[ae]:K}).validate({[ae]:p.value},{firstFields:!0}).then(()=>(N(),!0)).catch(L=>(E(L),Promise.reject(L)))},V=async(K,ae)=>{if(S||!a.prop)return!1;const se=Vt(ae);if(!h.value)return ae?.(!1),!1;const L=y(K);return L.length===0?(ae?.(!0),!0):(w("validating"),T(L).then(()=>(ae?.(!0),!0)).catch(P=>{const{fields:A}=P;return ae?.(!1,A),se?!1:Promise.reject(A)}))},Y=()=>{w(""),k.value="",S=!1},U=async()=>{const K=e?.model;if(!K||!a.prop)return;const ae=oa(K,a.prop);S=!0,ae.value=Ta(d),await Le(),Y(),S=!1},M=K=>{l.value.includes(K)||l.value.push(K)},X=K=>{l.value=l.value.filter(ae=>ae!==K)},Q=Qe({...Ja(a),$el:m,validateState:i,inputIds:l,labelId:s,fieldValue:p,shouldShowError:u,shouldShowErrorChild:F,validateMessage:k,addInputId:M,removeInputId:X,resetField:U,clearValidate:Y,validate:V});return Dt(Ga,Q),xa(()=>{a.prop&&(e?.addField(Q),d=Ta(p.value))}),Qa(()=>{e?.removeField(Q)}),t({validateMessage:k,shouldShowError:u,shouldShowErrorChild:F,validateState:i,validate:V,clearValidate:Y,resetField:U}),(K,ae)=>(_(),W("div",{ref_key:"formItemRef",ref:m,class:D(x.value)},[ve(K.$slots,"default"),G("div",{class:D({[n(o).e("content-error")]:u.value})},[u.value?ve(K.$slots,"error",{key:0,error:k.value},()=>[G("span",{class:D(n(o).e("error"))},ge(k.value),3)]):me("",!0)],2)],2))}});Ma.__docgenInfo={name:"FormItem",exportName:"default",displayName:"form-item",description:"",tags:{},expose:[{name:"validateMessage",tags:[{title:"description",content:"Validation message."}]},{name:"shouldShowError",tags:[{title:"description",content:"Whether to show error message in form item."}]},{name:"shouldShowErrorChild",tags:[{title:"description",content:"Whether to show error message in the child of form item."}]},{name:"validateState",tags:[{title:"description",content:"Validation state."}]},{name:"validate",tags:[{title:"description",content:"Validate form item."}]},{name:"clearValidate",tags:[{title:"description",content:"Remove validation status of the field."}]},{name:"resetField",tags:[{title:"description",content:"Reset current field and remove validation result."}]}],slots:[{name:"default"},{name:"error",scoped:!0,bindings:[{name:"error",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/form-item.vue"]};const ot=na(yn,{FormItem:Ma}),ft=Gn(Ma),Do=De({id:{type:String,default:void 0},helpText:{type:String,default:void 0},loading:{type:Boolean,default:!1},label:{type:String,default:void 0},messageError:{type:String,default:void 0},disabled:Boolean,modelValue:{type:ue([String,Number,Object]),default:""},maxlength:{type:[String,Number],default:50},minlength:{type:[String,Number]},type:{type:String,default:"text"},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:ue(String),default:""},prefixIcon:{type:ue(String),default:""},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},isEvent:{type:Boolean,default:!1},inputStyle:{type:ue([Object,Array,String]),default:()=>ar({})},autofocus:Boolean,...an(["ariaLabel"])}),xo={[ma]:r=>yt(r),click:r=>r instanceof MouseEvent,input:r=>yt(r),change:r=>yt(r),focus:r=>r instanceof FocusEvent,blur:r=>r instanceof FocusEvent,clear:()=>!0,mouseleave:r=>r instanceof MouseEvent,mouseenter:r=>r instanceof MouseEvent,keydown:r=>r instanceof Event,compositionstart:r=>r instanceof CompositionEvent,compositionupdate:r=>r instanceof CompositionEvent,compositionend:r=>r instanceof CompositionEvent},So=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role"],ka=$e({name:"Input",inheritAttrs:!1,__name:"input",props:Do,emits:xo,setup(r,{expose:t,emit:a}){const e=r,o=a,s=Pe("input"),l=ta(),i=nn(),v=aa(),k=H(void 0),m=H(null),{formItem:d}=tn(),S=I(()=>d?.shouldShowErrorChild||!!e?.messageError),x=I(()=>e?.messageError?e.messageError:d?.validateMessage),O=I(()=>[s.b(),s.is("label",!!e.label),s.is("disabled",y.value),s.is("focus",T.value),s.is("complete",!T.value&&!!M.value),s.is("disabled",y.value),s.is("exceed",K.value),s.is("error",S.value||d?.shouldShowError),s.is("event",e.isEvent),s.is("loading",e.loading),s.is("readonly",e.readonly),{[s.m("prefix")]:e.prefixIcon||v.prefix,[s.m("suffix")]:v.suffix||e.suffixIcon||e.showPassword,[s.is("password")]:e.showPassword,[s.b("hidden")]:e.type==="hidden"},l.class]),p=I(()=>[s.e("help-text"),{[s.e("help-error")]:S.value}]),f=I(()=>x.value||e.helpText||d?.$el),{inputId:h}=Zn(e,{formItemContext:d}),y=Jn(),u=qn(),F=H(!1),w=H(!1),E=I(()=>u.value),{wrapperRef:N,isFocused:T}=Ca(u,{beforeFocus(){return y.value},afterBlur(){e.validateEvent&&d?.validate?.("blur").catch(B=>wt())}}),V=I(()=>{const B=!!M.value||T.value;return{left:B?void 0:`calc(${k.value} + 16px)`,zIndex:B?void 0:10}}),Y=I(()=>w.value?"regular eye":"regular eye-slash"),U=I(()=>[l.style]),M=I(()=>Sa(e.modelValue)?"":String(e.modelValue)),X=I(()=>e.showWordLimit&&!!e.maxlength&&e.type==="text"&&!y.value&&!e.readonly&&!e.showPassword),Q=I(()=>M.value.length),K=I(()=>!!X.value&&Q.value>Number(e.maxlength));I(()=>!!e.suffixIcon||e.showPassword);const[ae,se]=nr(u),L=()=>{const B=E.value,le=e.formatter?e.formatter(M.value):M.value;!B||B.value===le||(B.value=le)},P=async B=>{ae();let{value:le}=B.target;if(e.formatter&&(le=e.parser?e.parser(le):le),!$.value){if(le===M.value){L();return}o(ma,le),o("input",le),await Le(),L(),se()}},A=B=>{o("change",B.target.value)},{isComposing:$,handleCompositionStart:R,handleCompositionUpdate:j,handleCompositionEnd:C}=rr({emit:o,afterComposition:P}),q=()=>{ae(),w.value=!w.value,setTimeout(se)},Z=()=>u.value?.focus(),oe=()=>u.value?.blur(),Ce=B=>{F.value=!1,o("mouseleave",B)},Te=B=>{F.value=!0,o("mouseenter",B)},_e=B=>{o("keydown",B)},ee=()=>{u.value?.select()},te=()=>{o(ma,""),o("change",""),o("clear"),o("input","")};return Fe(()=>e.modelValue,()=>{e.validateEvent&&d?.validate?.("change").catch(B=>wt())}),Fe(M,()=>L()),Fe(()=>e.type,async()=>{await Le(),L()}),xa(()=>{!e.formatter&&e.parser&&wt(s.b()),L()}),Pa(m,()=>{if(!e.prefixIcon&&!v.prefix){k.value="0";return}requestAnimationFrame(()=>{const B=m.value?.getBoundingClientRect().width;k.value=`${B}px`})}),t({ref:E,isComposing:$,focus:Z,blur:oe,select:ee,clear:te}),(B,le)=>(_(),W("div",{class:D([O.value]),style:ct(U.value),onMouseenter:Te,onMouseleave:Ce},[G("div",{ref_key:"wrapperRef",ref:N,class:D(n(s).e("wrapper")),onClick:le[3]||(le[3]=de=>B.isEvent?o("click",de):void 0)},[G("div",{ref_key:"prefixRef",ref:m,class:D(n(s).e("prefix"))},[ve(B.$slots,"prefix",{},()=>[B.prefixIcon?(_(),Ae(n(be),{key:0,class:D([n(s).e("icon"),n(s).e("prefix-icon")]),name:B.prefixIcon},null,8,["class","name"])):me("",!0)])],2),B.label?(_(),W("div",{key:0,class:D([n(s).e("label")]),style:ct(V.value)},ge(B.label),7)):me("",!0),G("input",zt({id:n(h),ref_key:"input",ref:u,class:[n(s).e("inner")]},n(i),{minlength:B.minlength,maxlength:B.maxlength,type:B.showPassword?w.value?"text":"password":B.type,disabled:n(y),readonly:B.readonly||B.loading||B.isEvent,autocomplete:B.autocomplete,tabindex:B.tabindex,"aria-label":B.ariaLabel,placeholder:B.placeholder,form:B.form,autofocus:B.autofocus,role:B.containerRole,onCompositionstart:le[0]||(le[0]=(...de)=>n(R)&&n(R)(...de)),onCompositionupdate:le[1]||(le[1]=(...de)=>n(j)&&n(j)(...de)),onCompositionend:le[2]||(le[2]=(...de)=>n(C)&&n(C)(...de)),onInput:P,onChange:A,onKeydown:_e}),null,16,So),ve(B.$slots,"suffix",{},()=>[G("span",{class:D(n(s).e("suffix"))},[B.suffixIcon&&!B.showPassword&&!B.loading?(_(),Ae(n(be),{key:0,class:D([n(s).e("icon"),n(s).e("suffix-icon")]),name:B.suffixIcon},null,8,["class","name"])):me("",!0),B.showPassword?(_(),Ae(n(be),{key:1,class:D([n(s).e("icon"),n(s).e("icon-password")]),name:Y.value,onClick:q},null,8,["class","name"])):me("",!0),B.loading?(_(),Ae(n(be),{key:2,class:D([n(s).e("icon"),n(s).e("icon-loading")]),name:"regular arrows-rotate",spin:"",onClick:q},null,8,["class"])):me("",!0)],2)])],2),f.value?(_(),W("div",{key:0,class:D([n(s).e("help")])},[ve(B.$slots,"helpText",{error:x.value,isError:S.value},()=>[(_(),W("p",{key:S.value?"error":"help",class:D(p.value)},ge(S.value?x.value:B.helpText),3))]),X.value?(_(),W("span",{key:0,class:D(n(s).e("help-count"))},ge(Q.value)+"/"+ge(B.maxlength),3)):me("",!0)],2)):me("",!0)],38))}});ka.__docgenInfo={name:"Input",exportName:"default",displayName:"input",description:"",tags:{},expose:[{name:"ref",tags:[{title:"description",content:"HTML element, input or textarea"}]},{name:"isComposing",tags:[{title:"description",content:"is input composing"}]},{name:"focus",tags:[{title:"description",content:"HTML input element native method"}]},{name:"blur",tags:[{title:"description",content:"HTML input element native method"}]},{name:"select",tags:[{title:"description",content:"HTML input element native method"}]},{name:"clear",tags:[{title:"description",content:"clear input value"}]}],slots:[{name:"prefix"},{name:"suffix"},{name:"helpText",scoped:!0,bindings:[{name:"error",title:"binding"},{name:"isError",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input/src/input.vue"]};const pt=na(ka,{Input:ka});var Po={exports:{}};(function(r,t){(function(a,e){r.exports=e(ur)})(tt,function(a){function e(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var o=e(a),s={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(l){return l+"º"}};return o.default.locale(s,null,!0),s})})(Po);const ra=Symbol(),Co=De({...cr,type:{type:ue(String),default:"date"}}),Mo=["date","dates","year","years","month","months","week","range"],Ra=De({disabledDate:{type:ue(Function)},date:{type:ue(Object),required:!0},minDate:{type:ue(Object)},maxDate:{type:ue(Object)},parsedValue:{type:ue([Object,Array])},rangeState:{type:ue(Object),default:()=>({endDate:null,selecting:!1})}}),kn=De({type:{type:ue(String),required:!0,values:Sr},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),Ea=De({unlinkPanels:Boolean,parsedValue:{type:ue(Array)}}),Fa=r=>({type:String,values:Mo,default:r}),Ro=De({...kn,parsedValue:{type:ue([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),St=r=>{if(!he(r))return!1;const[t,a]=r;return z.isDayjs(t)&&z.isDayjs(a)&&t.isSameOrBefore(a)},Va=(r,{lang:t,unit:a,unlinkPanels:e})=>{let o;if(he(r)){let[s,l]=r.map(i=>z(i).locale(t));return e||(l=s.add(1,a)),[s,l]}else r?o=z(r):o=z();return o=o.locale(t),[o,o.add(1,a)]},Eo=(r,t,{columnIndexOffset:a,startDate:e,nextEndDate:o,now:s,unit:l,relativeDateGetter:i,setCellMetadata:v,setRowMetadata:k})=>{for(let m=0;m<r.row;m++){const d=t[m];for(let S=0;S<r.column;S++){let x=d[S+a];x||(x={row:m,column:S,type:"normal",inRange:!1,start:!1,end:!1});const O=m*r.column+S,p=i(O);x.dayjs=p,x.date=p.toDate(),x.timestamp=p.valueOf(),x.type="normal",x.inRange=!!(e&&p.isSameOrAfter(e,l)&&o&&p.isSameOrBefore(o,l))||!!(e&&p.isSameOrBefore(e,l)&&o&&p.isSameOrAfter(o,l)),e?.isSameOrAfter(o)?(x.start=!!o&&p.isSame(o,l),x.end=e&&p.isSame(e,l)):(x.start=!!e&&p.isSame(e,l),x.end=!!o&&p.isSame(o,l)),p.isSame(s,l)&&(x.type="today"),v?.(x,{rowIndex:m,columnIndex:S}),d[S+a]=x}k?.(d)}},Zt=(r,t,a)=>{const e=z().locale(a).startOf("month").month(t).year(r),o=e.daysInMonth();return rn(o).map(s=>e.add(s,"day").toDate())},Ot=(r,t,a,e)=>{const o=z().year(r).month(t).startOf("month"),s=Zt(r,t,a).find(l=>!e?.(l));return s?z(s).locale(a):o.locale(a)},wa=(r,t,a)=>{const e=r.year();if(!a?.(r.toDate()))return r.locale(t);const o=r.month();if(!Zt(e,o,t).every(a))return Ot(e,o,t,a);for(let s=0;s<12;s++)if(!Zt(e,s,t).every(a))return Ot(e,s,t,a);return r},Fo=De({...Ra,cellClassName:{type:ue(Function)},showWeekNumber:Boolean,selectionMode:Fa("date")}),Vo=["changerange","pick","select"],Da=(r="")=>["normal","today"].includes(r),Io=(r,t)=>{const{lang:a}=He(),e=H(),o=H(),s=H(),l=H(),i=H([[],[],[],[],[],[]]);let v=!1;const k=r.date.$locale().weekStart||7,m=r.date.locale("en").localeData().weekdaysShort().map(P=>P.toLowerCase()),d=I(()=>k>3?7-k:-k),S=I(()=>{const P=r.date.startOf("month");return P.subtract(P.day()||7,"day")}),x=I(()=>m.concat(m).slice(k,k+7)),O=I(()=>tr(n(F)).some(P=>P.isCurrent)),p=I(()=>{const P=r.date.startOf("month"),A=P.day()||7,$=P.daysInMonth(),R=P.subtract(1,"month").daysInMonth();return{startOfMonthDay:A,dateCountOfMonth:$,dateCountOfLastMonth:R}}),f=I(()=>r.selectionMode==="dates"?je(r.parsedValue):[]),h=(P,{count:A,rowIndex:$,columnIndex:R})=>{const{startOfMonthDay:j,dateCountOfMonth:C,dateCountOfLastMonth:q}=n(p),Z=n(d);if($>=0&&$<=1){const oe=j+Z<0?7+j+Z:j+Z;if(R+$*7>=oe)return P.text=A,!0;P.text=q-(oe-R%7)+1+$*7,P.type="prev-month"}else return A<=C?P.text=A:(P.text=A-C,P.type="next-month"),!0;return!1},y=(P,{columnIndex:A,rowIndex:$},R)=>{const{disabledDate:j,cellClassName:C}=r,q=n(f),Z=h(P,{count:R,rowIndex:$,columnIndex:A}),oe=P.dayjs.toDate();return P.selected=q.find(Ce=>Ce.isSame(P.dayjs,"day")),P.isSelected=!!P.selected,P.isCurrent=E(P),P.disabled=j?.(oe),P.customClass=C?.(oe),Z},u=P=>{if(r.selectionMode==="week"){const[A,$]=r.showWeekNumber?[1,7]:[0,6],R=L(P[A+1]);P[A].inRange=R,P[A].start=R,P[$].inRange=R,P[$].end=R}},F=I(()=>{const{minDate:P,maxDate:A,rangeState:$,showWeekNumber:R}=r,j=n(d),C=n(i),q="day";let Z=1;if(R)for(let oe=0;oe<6;oe++)C[oe][0]||(C[oe][0]={type:"week",text:n(S).add(oe*7+1,q).week()});return Eo({row:6,column:7},C,{startDate:P,columnIndexOffset:R?1:0,nextEndDate:$.endDate||A||$.selecting&&P||null,now:z().locale(n(a)).startOf(q),unit:q,relativeDateGetter:oe=>n(S).add(oe-j,q),setCellMetadata:(...oe)=>{y(...oe,Z)&&(Z+=1)},setRowMetadata:u}),C});Fe(()=>r.date,async()=>{n(e)?.contains(document.activeElement)&&(await Le(),await w())});const w=async()=>n(o)?.focus(),E=P=>r.selectionMode==="date"&&Da(P.type)&&N(P,r.parsedValue),N=(P,A)=>A?z(A).locale(n(a)).isSame(r.date.date(Number(P.text)),"day"):!1,T=(P,A)=>{const $=P*7+(A-(r.showWeekNumber?1:0))-n(d);return n(S).add($,"day")},V=P=>{if(!r.rangeState.selecting)return;let A=P.target;if(A.tagName==="SPAN"&&(A=A.parentNode?.parentNode),A.tagName==="DIV"&&(A=A.parentNode),A.tagName!=="TD")return;const $=A.parentNode.rowIndex-1,R=A.cellIndex;n(F)[$][R].disabled||($!==n(s)||R!==n(l))&&(s.value=$,l.value=R,t("changerange",{selecting:!0,endDate:T($,R)}))},Y=P=>!n(O)&&P?.text===1&&P.type==="normal"||P.isCurrent,U=P=>{v||n(O)||r.selectionMode!=="date"||se(P,!0)},M=P=>{P.target.closest("td")&&(v=!0)},X=P=>{P.target.closest("td")&&(v=!1)},Q=P=>{!r.rangeState.selecting||!r.minDate?(t("pick",{minDate:P,maxDate:null}),t("select",!0)):(P>=r.minDate?t("pick",{minDate:r.minDate,maxDate:P}):t("pick",{minDate:P,maxDate:r.minDate}),t("select",!1))},K=P=>{const A=P.week(),$=`${P.year()}w${A}`;t("pick",{year:P.year(),week:A,value:$,date:P.startOf("week")})},ae=(P,A)=>{const $=A?je(r.parsedValue).filter(R=>R?.valueOf()!==P.valueOf()):je(r.parsedValue).concat([P]);t("pick",$)},se=(P,A=!1)=>{const $=P.target.closest("td");if(!$)return;const R=$.parentNode.rowIndex-1,j=$.cellIndex,C=n(F)[R][j];if(C.disabled||C.type==="week")return;const q=T(R,j);switch(r.selectionMode){case"range":{Q(q);break}case"date":{t("pick",q,A);break}case"week":{K(q);break}case"dates":{ae(q,!!C.selected);break}}},L=P=>{if(r.selectionMode!=="week")return!1;let A=r.date.startOf("day");if(P.type==="prev-month"&&(A=A.subtract(1,"month")),P.type==="next-month"&&(A=A.add(1,"month")),A=A.date(Number.parseInt(P.text,10)),r.parsedValue&&!he(r.parsedValue)){const $=(r.parsedValue.day()-k+7)%7-1;return r.parsedValue.subtract($,"day").isSame(A,"day")}return!1};return{WEEKS:x,rows:F,tbodyRef:e,currentCellRef:o,focus:w,isCurrent:E,isWeekActive:L,isSelectedCell:Y,handlePickDate:se,handleMouseUp:X,handleMouseDown:M,handleMouseMove:V,handleFocus:U}},Oo=(r,{isCurrent:t,isWeekActive:a})=>{const e=Pe("date-table"),{t:o}=He(),s=I(()=>[e.b(),{"is-week-mode":r.selectionMode==="week"}]),l=I(()=>o("el.datepicker.dateTablePrompt")),i=I(()=>o("el.datepicker.week"));return{tableKls:s,tableLabel:l,weekLabel:i,getCellClasses:m=>{const d=[];return Da(m.type)&&!m.disabled?(d.push("available"),m.type==="today"&&d.push("today")):d.push(m.type),t(m)&&d.push("current"),m.inRange&&(Da(m.type)||r.selectionMode==="week")&&(d.push("in-range"),m.start&&d.push("start-date"),m.end&&d.push("end-date")),m.disabled&&d.push("disabled"),m.selected&&d.push("selected"),m.customClass&&d.push(m.customClass),d.join(" ")},getRowKls:m=>[e.e("row"),{current:a(m)}],t:o}},$o=De({cell:{type:ue(Object)}}),wn=$e({name:"GDatePickerCell",props:$o,setup(r){const t=Pe("date-table-cell"),{slots:a}=Ye(ra);return{ns:t,cell:r.cell}}});function To(r,t,a,e,o,s){return ve(r.$slots,"default",Yn(_n(r.cell)),()=>[G("div",{class:D(r.ns.b())},[G("span",{class:D(r.ns.e("text"))},ge(r.cell?.renderText??r.cell?.text),3)],2)])}const Ia=hr(wn,[["render",To]]);wn.__docgenInfo={displayName:"GDatePickerCell",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-cell-render.vue"]};const Ao=["aria-label"],No={key:0,scope:"col"},Lo=["aria-label"],qo=["aria-current","aria-selected","tabindex"],Jt=$e({__name:"basic-date-table",props:Fo,emits:Vo,setup(r,{expose:t,emit:a}){const e=r,o=a,{WEEKS:s,rows:l,tbodyRef:i,currentCellRef:v,focus:k,isCurrent:m,isWeekActive:d,isSelectedCell:S,handlePickDate:x,handleMouseUp:O,handleMouseDown:p,handleMouseMove:f,handleFocus:h}=Io(e,o),{tableLabel:y,tableKls:u,weekLabel:F,getCellClasses:w,getRowKls:E,t:N}=Oo(e,{isCurrent:m,isWeekActive:d});return t({focus:k}),(T,V)=>(_(),W("table",{"aria-label":n(y),class:D(n(u)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:V[1]||(V[1]=(...Y)=>n(x)&&n(x)(...Y)),onMousemove:V[2]||(V[2]=(...Y)=>n(f)&&n(f)(...Y)),onMousedown:V[3]||(V[3]=Je((...Y)=>n(p)&&n(p)(...Y),["prevent"])),onMouseup:V[4]||(V[4]=(...Y)=>n(O)&&n(O)(...Y))},[G("tbody",{ref_key:"tbodyRef",ref:i},[G("tr",null,[T.showWeekNumber?(_(),W("th",No,ge(n(F)),1)):me("",!0),(_(!0),W(Ee,null,qe(n(s),(Y,U)=>(_(),W("th",{key:U,"aria-label":n(N)("el.datepicker.weeksFull."+Y),scope:"col"},ge(n(N)("el.datepicker.weeks."+Y)),9,Lo))),128))]),(_(!0),W(Ee,null,qe(n(l),(Y,U)=>(_(),W("tr",{key:U,class:D(n(E)(Y[1]))},[(_(!0),W(Ee,null,qe(Y,(M,X)=>(_(),W("td",{key:`${U}.${X}`,ref_for:!0,ref:Q=>n(S)(M)&&(v.value=Q),class:D(n(w)(M)),"aria-current":M.isCurrent?"date":void 0,"aria-selected":M.isCurrent,tabindex:n(S)(M)?0:-1,onFocus:V[0]||(V[0]=(...Q)=>n(h)&&n(h)(...Q))},[ie(Ia,{cell:M},null,8,["cell"])],42,qo))),128))],2))),128))],512)],42,Ao))}});Jt.__docgenInfo={exportName:"default",displayName:"basic-date-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on current cell"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-date-table.vue"]};const Yo=De({...Ra,selectionMode:Fa("month")}),_o=["aria-label"],Bo=["aria-selected","aria-label","tabindex","onKeydown"],Qt=$e({__name:"basic-month-table",props:Yo,emits:["changerange","pick","select"],setup(r,{expose:t,emit:a}){const e=r,o=a,s=Pe("month-table"),{t:l,lang:i}=He(),v=H(),k=H(),m=H(e.date.locale("en").localeData().monthsShort().map(F=>F.toLowerCase())),d=H([[],[],[]]),S=H(),x=H(),O=I(()=>{const F=d.value,w=z().locale(i.value).startOf("month");for(let E=0;E<3;E++){const N=F[E];for(let T=0;T<4;T++){const V=N[T]||={row:E,column:T,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};V.type="normal";const Y=E*4+T,U=e.date.startOf("year").month(Y),M=e.rangeState.endDate||e.maxDate||e.rangeState.selecting&&e.minDate||null;V.inRange=!!(e.minDate&&U.isSameOrAfter(e.minDate,"month")&&M&&U.isSameOrBefore(M,"month"))||!!(e.minDate&&U.isSameOrBefore(e.minDate,"month")&&M&&U.isSameOrAfter(M,"month")),e.minDate?.isSameOrAfter(M)?(V.start=!!(M&&U.isSame(M,"month")),V.end=e.minDate&&U.isSame(e.minDate,"month")):(V.start=!!(e.minDate&&U.isSame(e.minDate,"month")),V.end=!!(M&&U.isSame(M,"month"))),w.isSame(U)&&(V.type="today"),V.text=Y,V.disabled=e.disabledDate?.(U.toDate())||!1}}return F}),p=()=>{k.value?.focus()},f=F=>{const w={},E=e.date.year(),N=new Date,T=F.text;return w.disabled=e.disabledDate?Zt(E,T,i.value).every(e.disabledDate):!1,w.current=je(e.parsedValue).findIndex(V=>z.isDayjs(V)&&V.year()===E&&V.month()===T)>=0,w.today=N.getFullYear()===E&&N.getMonth()===T,F.inRange&&(w["in-range"]=!0,F.start&&(w["start-date"]=!0),F.end&&(w["end-date"]=!0)),w},h=F=>{const w=e.date.year(),E=F.text;return je(e.date).findIndex(N=>N.year()===w&&N.month()===E)>=0},y=F=>{if(!e.rangeState.selecting)return;let w=F.target;if(w.tagName==="SPAN"&&(w=w.parentNode?.parentNode),w.tagName==="DIV"&&(w=w.parentNode),w.tagName!=="TD")return;const E=w.parentNode.rowIndex,N=w.cellIndex;O.value[E][N].disabled||(E!==S.value||N!==x.value)&&(S.value=E,x.value=N,o("changerange",{selecting:!0,endDate:e.date.startOf("year").month(E*4+N)}))},u=F=>{const w=F.target?.closest("td");if(w?.tagName!=="TD"||Wt(w,"disabled"))return;const E=w.cellIndex,T=w.parentNode.rowIndex*4+E,V=e.date.startOf("year").month(T);if(e.selectionMode==="months"){if(F.type==="keydown"){o("pick",je(e.parsedValue),!1);return}const Y=Ot(e.date.year(),T,i.value,e.disabledDate),U=Wt(w,"current")?je(e.parsedValue).filter(M=>M?.month()!==Y.month()):je(e.parsedValue).concat([z(Y)]);o("pick",U)}else e.selectionMode==="range"?e.rangeState.selecting?(e.minDate&&V>=e.minDate?o("pick",{minDate:e.minDate,maxDate:V}):o("pick",{minDate:V,maxDate:e.minDate}),o("select",!1)):(o("pick",{minDate:V,maxDate:null}),o("select",!0)):o("pick",T)};return Fe(()=>e.date,async()=>{v.value?.contains(document.activeElement)&&(await Le(),k.value?.focus())}),t({focus:p}),(F,w)=>(_(),W("table",{role:"grid","aria-label":n(l)("el.datepicker.monthTablePrompt"),class:D(n(s).b()),onClick:u,onMousemove:y},[G("tbody",{ref_key:"tbodyRef",ref:v},[(_(!0),W(Ee,null,qe(O.value,(E,N)=>(_(),W("tr",{key:N},[(_(!0),W(Ee,null,qe(E,(T,V)=>(_(),W("td",{key:V,ref_for:!0,ref:Y=>h(T)&&(k.value=Y),class:D(f(T)),"aria-selected":`${h(T)}`,"aria-label":n(l)(`el.datepicker.month${+T.text+1}`),tabindex:h(T)?0:-1,onKeydown:[xt(Je(u,["prevent","stop"]),["space"]),xt(Je(u,["prevent","stop"]),["enter"])]},[ie(Ia,{cell:{...T,renderText:n(l)("el.datepicker.months."+m.value[T.text])}},null,8,["cell"])],42,Bo))),128))]))),128))],512)],42,_o))}});Qt.__docgenInfo={exportName:"default",displayName:"basic-month-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-month-table.vue"]};const jo=De({...Ra,selectionMode:Fa("year")}),Go=["aria-label"],Ho=["aria-selected","aria-label","tabindex","onKeydown"],Xt=$e({__name:"basic-year-table",props:jo,emits:["changerange","pick","select"],setup(r,{expose:t,emit:a}){const e=(w,E)=>{const N=z(String(w)).locale(E).startOf("year"),V=N.endOf("year").dayOfYear();return rn(V).map(Y=>N.add(Y,"day").toDate())},o=r,s=a,l=Pe("year-table"),{t:i,lang:v}=He(),k=H(),m=H(),d=I(()=>Math.floor(o.date.year()/10)*10),S=H([[],[],[]]),x=H(),O=H(),p=I(()=>{const w=S.value,E=z().locale(v.value).startOf("year");for(let N=0;N<3;N++){const T=w[N];for(let V=0;V<4&&!(N*4+V>=10);V++){let Y=T[V];Y||(Y={row:N,column:V,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),Y.type="normal";const U=N*4+V+d.value,M=z().year(U),X=o.rangeState.endDate||o.maxDate||o.rangeState.selecting&&o.minDate||null;Y.inRange=!!(o.minDate&&M.isSameOrAfter(o.minDate,"year")&&X&&M.isSameOrBefore(X,"year"))||!!(o.minDate&&M.isSameOrBefore(o.minDate,"year")&&X&&M.isSameOrAfter(X,"year")),o.minDate?.isSameOrAfter(X)?(Y.start=!!(X&&M.isSame(X,"year")),Y.end=!!(o.minDate&&M.isSame(o.minDate,"year"))):(Y.start=!!(o.minDate&&M.isSame(o.minDate,"year")),Y.end=!!(X&&M.isSame(X,"year"))),E.isSame(M)&&(Y.type="today"),Y.text=U;const K=M.toDate();Y.disabled=o.disabledDate&&o.disabledDate(K)||!1,T[V]=Y}}return w}),f=()=>{m.value?.focus()},h=w=>{const E={},N=z().locale(v.value),T=w.text;return E.disabled=o.disabledDate?e(T,v.value).every(o.disabledDate):!1,E.today=N.year()===T,E.current=je(o.parsedValue).findIndex(V=>V.year()===T)>=0,w.inRange&&(E["in-range"]=!0,w.start&&(E["start-date"]=!0),w.end&&(E["end-date"]=!0)),E},y=w=>{const E=w.text;return je(o.date).findIndex(N=>N.year()===E)>=0},u=w=>{const E=w.target?.closest("td");if(!E||!E.textContent||Wt(E,"disabled"))return;const N=E.cellIndex,V=E.parentNode.rowIndex*4+N+d.value,Y=z().year(V);if(o.selectionMode==="range")o.rangeState.selecting?(o.minDate&&Y>=o.minDate?s("pick",{minDate:o.minDate,maxDate:Y}):s("pick",{minDate:Y,maxDate:o.minDate}),s("select",!1)):(s("pick",{minDate:Y,maxDate:null}),s("select",!0));else if(o.selectionMode==="years"){if(w.type==="keydown"){s("pick",je(o.parsedValue),!1);return}const U=wa(Y.startOf("year"),v.value,o.disabledDate),M=Wt(E,"current")?je(o.parsedValue).filter(X=>X?.year()!==V):je(o.parsedValue).concat([U]);s("pick",M)}else s("pick",V)},F=w=>{if(!o.rangeState.selecting)return;const E=w.target?.closest("td");if(!E)return;const N=E.parentNode.rowIndex,T=E.cellIndex;p.value[N][T].disabled||(N!==x.value||T!==O.value)&&(x.value=N,O.value=T,s("changerange",{selecting:!0,endDate:z().year(d.value).add(N*4+T,"year")}))};return Fe(()=>o.date,async()=>{k.value?.contains(document.activeElement)&&(await Le(),m.value?.focus())}),t({focus:f}),(w,E)=>(_(),W("table",{role:"grid","aria-label":n(i)("el.datepicker.yearTablePrompt"),class:D(n(l).b()),onClick:u,onMousemove:F},[G("tbody",{ref_key:"tbodyRef",ref:k},[(_(!0),W(Ee,null,qe(p.value,(N,T)=>(_(),W("tr",{key:T},[(_(!0),W(Ee,null,qe(N,(V,Y)=>(_(),W("td",{key:`${T}_${Y}`,ref_for:!0,ref:U=>y(V)&&(m.value=U),class:D(["available",h(V)]),"aria-selected":y(V),"aria-label":String(V.text),tabindex:y(V)?0:-1,onKeydown:[xt(Je(u,["prevent","stop"]),["space"]),xt(Je(u,["prevent","stop"]),["enter"])]},[ie(Ia,{cell:V},null,8,["cell"])],42,Ho))),128))]))),128))],512)],42,Go))}});Xt.__docgenInfo={exportName:"default",displayName:"basic-year-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on the current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-year-table.vue"]};const Uo=["onClick"],Ko=["aria-label"],zo=["aria-label"],Wo=["aria-label"],Zo=["aria-label"],Jo=["disabled"],Qo=["disabled"],Dn=$e({__name:"panel-date-pick",props:Ro,emits:["pick","set-picker-option","panel-change"],setup(r,{emit:t}){const a=(c,b,ne)=>!0,e=r,o=t,s=Pe("picker-panel"),l=Pe("date-picker"),i=ta(),v=aa(),{t:k,lang:m}=He(),d=Ye("EP_PICKER_BASE"),S=Ye(vr),{shortcuts:x,disabledDate:O,cellClassName:p,defaultTime:f}=d.props,h=ze(d.props,"defaultValue"),y=H(),u=H(z().locale(m.value)),F=H(!1);let w=!1;const E=I(()=>z(f).locale(m.value)),N=I(()=>u.value.month()),T=I(()=>u.value.year()),V=H([]),Y=H(null),U=H(null),M=c=>V.value.length>0?a(c,V.value,e.format||"HH:mm:ss"):!0,X=c=>f&&!de.value&&!F.value&&!w?E.value.year(c.year()).month(c.month()).date(c.date()):Ce.value?c.millisecond(0):c.startOf("day"),Q=(c,...b)=>{if(!c)o("pick",c,...b);else if(he(c)){const ne=c.map(X);o("pick",ne,...b)}else o("pick",X(c),...b);Y.value=null,U.value=null,F.value=!1,w=!1},K=async(c,b)=>{if($.value==="date"){c=c;let ne=e.parsedValue?e.parsedValue.year(c.year()).month(c.month()).date(c.date()):c;M(ne)||(ne=V.value[0][0].year(c.year()).month(c.month()).date(c.date())),u.value=ne,Q(ne,Ce.value||b),e.type==="datetime"&&(await Le(),Ke())}else $.value==="week"?Q(c.date):$.value==="dates"&&Q(c,!0)},ae=c=>{const b=c?"add":"subtract";u.value=u.value[b](1,"month"),J("month")},se=c=>{const b=u.value,ne=c?"add":"subtract";u.value=L.value==="year"?b[ne](10,"year"):b[ne](1,"year"),J("year")},L=H("date"),P=I(()=>{const c=k("el.datepicker.year");if(L.value==="year"){const b=Math.floor(T.value/10)*10;return c?`${b} ${c} - ${b+9} ${c}`:`${b} - ${b+9}`}return`${T.value} ${c}`}),A=c=>{const b=Vt(c.value)?c.value():c.value;if(b){w=!0,Q(z(b).locale(m.value));return}c.onClick&&c.onClick({attrs:i,slots:v,emit:o})},$=I(()=>{const{type:c}=e;return["week","month","months","year","years","dates"].includes(c)?c:"date"}),R=I(()=>$.value==="dates"||$.value==="months"||$.value==="years"),j=I(()=>$.value==="date"?L.value:$.value),C=I(()=>!!x.length),q=async(c,b)=>{$.value==="month"?(u.value=Ot(u.value.year(),c,m.value,O),Q(u.value,!1)):$.value==="months"?Q(c,b??!0):(u.value=Ot(u.value.year(),c,m.value,O),L.value="date",["month","year","date","week"].includes($.value)&&(Q(u.value,!0),await Le(),Ke())),J("month")},Z=async(c,b)=>{if($.value==="year"){const ne=u.value.startOf("year").year(c);u.value=wa(ne,m.value,O),Q(u.value,!1)}else if($.value==="years")Q(c,b??!0);else{const ne=u.value.year(c);u.value=wa(ne,m.value,O),L.value="month",["month","year","date","week"].includes($.value)&&(Q(u.value,!0),await Le(),Ke())}J("year")},oe=async c=>{L.value=c,await Le(),Ke()},Ce=I(()=>e.type==="datetime"||e.type==="datetimerange"),Te=I(()=>{const c=Ce.value||$.value==="dates",b=$.value==="years",ne=$.value==="months",Se=L.value==="date",Me=L.value==="year",lt=L.value==="month";return c&&Se||b&&Me||ne&&lt}),_e=I(()=>O?e.parsedValue?he(e.parsedValue)?O(e.parsedValue[0].toDate()):O(e.parsedValue.toDate()):!0:!1),ee=()=>{if(R.value)Q(e.parsedValue);else{let c=e.parsedValue;if(!c){const b=z(f).locale(m.value),ne=We();c=b.year(ne.year()).month(ne.month()).date(ne.date())}u.value=c,Q(c)}},te=I(()=>O?O(z().locale(m.value).toDate()):!1),ce=()=>{const b=z().locale(m.value).toDate();F.value=!0,(!O||!O(b))&&M(b)&&(u.value=z().locale(m.value),Q(u.value))},B=I(()=>e.timeFormat||on(e.format)),le=I(()=>e.dateFormat||sn(e.format)),de=I(()=>{if(U.value)return U.value;if(!(!e.parsedValue&&!h.value))return(e.parsedValue||u.value).format(B.value)}),ke=I(()=>{if(Y.value)return Y.value;if(!(!e.parsedValue&&!h.value))return(e.parsedValue||u.value).format(le.value)}),xe=H(!1),Ve=()=>{xe.value=!0},Ne=()=>{xe.value=!1},Xe=c=>({hour:c.hour(),minute:c.minute(),second:c.second(),year:c.year(),month:c.month(),date:c.date()}),Pt=(c,b,ne)=>{const{hour:Se,minute:Me,second:lt}=Xe(c),Rt=e.parsedValue?e.parsedValue.hour(Se).minute(Me).second(lt):c;u.value=Rt,Q(u.value,!0),ne||(xe.value=b)},vt=c=>{const b=z(c,B.value).locale(m.value);if(b.isValid()&&M(b)){const{year:ne,month:Se,date:Me}=Xe(u.value);u.value=b.year(ne).month(Se).date(Me),U.value=null,xe.value=!1,Q(u.value,!0)}},pe=c=>{const b=z(c,le.value).locale(m.value);if(b.isValid()){if(O&&O(b.toDate()))return;const{hour:ne,minute:Se,second:Me}=Xe(u.value);u.value=b.hour(ne).minute(Se).second(Me),Y.value=null,Q(u.value,!0)}},at=c=>z.isDayjs(c)&&c.isValid()&&(O?!O(c.toDate()):!0),et=c=>he(c)?c.map(b=>b.format(e.format)):c.format(e.format),st=c=>z(c,e.format).locale(m.value),We=()=>{const c=z(h.value).locale(m.value);if(!h.value){const b=E.value;return z().hour(b.hour()).minute(b.minute()).second(b.second()).locale(m.value)}return c},Ke=()=>{["week","month","year","date"].includes($.value)&&y.value?.focus()},Ct=()=>{Ke(),$.value==="week"&&gt(Re.down)},Mt=c=>{const{code:b}=c;[Re.up,Re.down,Re.left,Re.right,Re.home,Re.end,Re.pageUp,Re.pageDown].includes(b)&&(gt(b),c.stopPropagation(),c.preventDefault()),[Re.enter,Re.space,Re.numpadEnter].includes(b)&&Y.value===null&&U.value===null&&(c.preventDefault(),Q(u.value,!1))},gt=c=>{const{up:b,down:ne,left:Se,right:Me,home:lt,end:Rt,pageUp:g,pageDown:re}=Re,we={year:{[b]:-4,[ne]:4,[Se]:-1,[Me]:1,offset:(ye,Ze)=>ye.setFullYear(ye.getFullYear()+Ze)},month:{[b]:-4,[ne]:4,[Se]:-1,[Me]:1,offset:(ye,Ze)=>ye.setMonth(ye.getMonth()+Ze)},week:{[b]:-1,[ne]:1,[Se]:-1,[Me]:1,offset:(ye,Ze)=>ye.setDate(ye.getDate()+Ze*7)},date:{[b]:-7,[ne]:7,[Se]:-1,[Me]:1,[lt]:ye=>-ye.getDay(),[Rt]:ye=>-ye.getDay()+6,[g]:ye=>-new Date(ye.getFullYear(),ye.getMonth(),0).getDate(),[re]:ye=>new Date(ye.getFullYear(),ye.getMonth()+1,0).getDate(),offset:(ye,Ze)=>ye.setDate(ye.getDate()+Ze)}},Ie=u.value.toDate();for(;Math.abs(u.value.diff(Ie,"year",!0))<1;){const ye=we[j.value];if(!ye)return;if(ye.offset(Ie,Vt(ye[c])?ye[c](Ie):ye[c]??0),O&&O(Ie))break;const Ze=z(Ie).locale(m.value);u.value=Ze,o("pick",Ze,!0);break}},J=c=>{o("panel-change",u.value.toDate(),c,L.value)};return Fe(()=>$.value,c=>{if(["month","year"].includes(c)){L.value=c;return}else if(c==="years"){L.value="year";return}else if(c==="months"){L.value="month";return}L.value="date"},{immediate:!0}),Fe(()=>L.value,()=>{S?.updatePopper()}),Fe(()=>h.value,c=>{c&&(u.value=We())},{immediate:!0}),Fe(()=>e.parsedValue,c=>{if(c){if(R.value||he(c))return;u.value=c}else u.value=We()},{immediate:!0}),o("set-picker-option",["isValidValue",at]),o("set-picker-option",["formatToString",et]),o("set-picker-option",["parseUserInput",st]),o("set-picker-option",["handleFocusPicker",Ct]),(c,b)=>(_(),W("div",{class:D([n(s).b(),n(l).b(),{"has-sidebar":c.$slots.sidebar||C.value,"has-time":Ce.value}])},[G("div",{class:D(n(s).e("body-wrapper"))},[ve(c.$slots,"sidebar",{class:D(n(s).e("sidebar"))}),C.value?(_(),W("div",{key:0,class:D(n(s).e("sidebar"))},[(_(!0),W(Ee,null,qe(n(x),(ne,Se)=>(_(),W("button",{key:Se,type:"button",class:D(n(s).e("shortcut")),onClick:Me=>A(ne)},ge(ne.text),11,Uo))),128))],2)):me("",!0),G("div",{class:D(n(s).e("body"))},[Ce.value?(_(),W("div",{key:0,class:D(n(l).e("time-header"))},[G("span",{class:D(n(l).e("editor-wrap"))},[ie(n(it),{placeholder:n(k)("el.datepicker.selectDate"),"model-value":ke.value,"validate-event":!1,onInput:b[0]||(b[0]=ne=>Y.value=ne),onChange:pe},null,8,["placeholder","model-value"])],2),Be((_(),W("span",{class:D(n(l).e("editor-wrap"))},[ie(n(it),{placeholder:n(k)("el.datepicker.selectTime"),"model-value":de.value,"validate-event":!1,onFocus:Ve,onInput:b[1]||(b[1]=ne=>U.value=ne),onChange:vt},null,8,["placeholder","model-value"]),ie(n(fa),{visible:xe.value,format:B.value,"parsed-value":u.value,onPick:Pt},null,8,["visible","format","parsed-value"])],2)),[[n(pa),Ne]])],2)):me("",!0),Be(G("div",{class:D([n(l).e("header"),(L.value==="year"||L.value==="month")&&n(l).e("header--bordered")])},[G("span",{class:D(n(l).e("prev-btn"))},[Be(G("button",{type:"button","aria-label":n(k)("el.datepicker.prevYear"),class:D(["d-arrow-left",n(s).e("icon-btn")]),onClick:b[2]||(b[2]=ne=>se(!1))},[ve(c.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,Ko),[[nt,L.value!=="date"]]),Be(G("button",{type:"button","aria-label":n(k)("el.datepicker.prevMonth"),class:D([n(s).e("icon-btn"),"arrow-left"]),onClick:b[3]||(b[3]=ne=>ae(!1))},[ve(c.$slots,"prev-month",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,zo),[[nt,L.value==="date"]])],2),G("span",{role:"button",class:D(n(l).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:b[4]||(b[4]=xt(ne=>oe("year"),["enter"])),onClick:b[5]||(b[5]=ne=>oe("year"))},ge(P.value),35),Be(G("span",{role:"button","aria-live":"polite",tabindex:"0",class:D([n(l).e("header-label"),{active:L.value==="month"}]),onKeydown:b[6]||(b[6]=xt(ne=>oe("month"),["enter"])),onClick:b[7]||(b[7]=ne=>oe("month"))},ge(n(k)(`el.datepicker.month${N.value+1}`)),35),[[nt,L.value==="date"]]),G("span",{class:D(n(l).e("next-btn"))},[Be(G("button",{type:"button","aria-label":n(k)("el.datepicker.nextMonth"),class:D([n(s).e("icon-btn"),"arrow-right"]),onClick:b[8]||(b[8]=ne=>ae(!0))},[ve(c.$slots,"next-month",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,Wo),[[nt,L.value==="date"]]),Be(G("button",{type:"button","aria-label":n(k)("el.datepicker.nextYear"),class:D([n(s).e("icon-btn"),"d-arrow-right"]),onClick:b[9]||(b[9]=ne=>se(!0))},[ve(c.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,Zo),[[nt,L.value!=="date"]])],2)],2),[[nt,L.value!=="time"]]),G("div",{class:D(n(s).e("content")),onKeydown:Mt},[L.value==="date"?(_(),Ae(Jt,{key:0,ref_key:"currentViewRef",ref:y,"selection-mode":$.value,date:u.value,"parsed-value":c.parsedValue,"disabled-date":n(O),"cell-class-name":n(p),onPick:K},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):me("",!0),L.value==="year"?(_(),Ae(Xt,{key:1,ref_key:"currentViewRef",ref:y,"selection-mode":$.value,date:u.value,"disabled-date":n(O),"parsed-value":c.parsedValue,onPick:Z},null,8,["selection-mode","date","disabled-date","parsed-value"])):me("",!0),L.value==="month"?(_(),Ae(Qt,{key:2,ref_key:"currentViewRef",ref:y,"selection-mode":$.value,date:u.value,"parsed-value":c.parsedValue,"disabled-date":n(O),onPick:q},null,8,["selection-mode","date","parsed-value","disabled-date"])):me("",!0)],34)],2)],2),Be(G("div",{class:D(n(s).e("footer"))},[Be(G("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:te.value,onClick:ce},ge(n(k)("el.datepicker.now")),9,Jo),[[nt,!R.value&&c.showNow]]),G("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:_e.value,onClick:ee},ge(n(k)("el.datepicker.confirm")),9,Qo)],2),[[nt,Te.value]])],2))}});Dn.__docgenInfo={exportName:"default",displayName:"panel-date-pick",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"prev-month"},{name:"next-month"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-pick.vue"]};const Xo=De({...kn,...Ea,visible:Boolean}),xn=r=>{const{emit:t}=Xa(),a=ta(),e=aa();return s=>{const l=Vt(s.value)?s.value():s.value;if(l){t("pick",[z(l[0]).locale(r.value),z(l[1]).locale(r.value)]);return}s.onClick&&s.onClick({attrs:a,slots:e,emit:t})}},Sn=(r,{defaultValue:t,leftDate:a,rightDate:e,unit:o,onParsedValueChanged:s})=>{const{emit:l}=Xa(),{pickerNs:i}=Ye(ra),v=Pe("date-range-picker"),{t:k,lang:m}=He(),d=xn(m),S=H(),x=H(),O=H({endDate:null,selecting:!1}),p=F=>{O.value=F},f=(F=!1)=>{const w=n(S),E=n(x);St([w,E])&&l("pick",[w,E],F)},h=F=>{O.value.selecting=F,F||(O.value.endDate=null)},y=F=>{if(he(F)&&F.length===2){const[w,E]=F;S.value=w,a.value=w,x.value=E,s(n(S),n(x))}else u()},u=()=>{const[F,w]=Va(n(t),{lang:n(m),unit:o,unlinkPanels:r.unlinkPanels});S.value=void 0,x.value=void 0,a.value=F,e.value=w};return Fe(t,F=>{F&&u()},{immediate:!0}),Fe(()=>r.parsedValue,y,{immediate:!0}),{minDate:S,maxDate:x,rangeState:O,lang:m,ppNs:i,drpNs:v,handleChangeRange:p,handleRangeConfirm:f,handleShortcutClick:d,onSelect:h,onReset:y,t:k}},es=["onClick"],ts=["aria-label"],as=["disabled","aria-label"],ns=["disabled","aria-label"],rs=["disabled","aria-label"],os=["disabled","aria-label"],ss=["aria-label"],Nt="month",Pn=$e({__name:"panel-date-range",props:Xo,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(r,{emit:t}){const a=r,e=t,o=Ye("EP_PICKER_BASE"),{disabledDate:s,cellClassName:l,defaultTime:i,clearable:v}=o.props,k=ze(o.props,"format"),m=ze(o.props,"shortcuts"),d=ze(o.props,"defaultValue"),{lang:S}=He(),x=H(z().locale(S.value)),O=H(z().locale(S.value).add(1,Nt)),{minDate:p,maxDate:f,rangeState:h,ppNs:y,drpNs:u,handleChangeRange:F,handleRangeConfirm:w,handleShortcutClick:E,onSelect:N,onReset:T,t:V}=Sn(a,{defaultValue:d,leftDate:x,rightDate:O,unit:Nt,onParsedValueChanged:gt});Fe(()=>a.visible,J=>{!J&&h.value.selecting&&(T(a.parsedValue),N(!1))});const Y=H({min:null,max:null}),U=H({min:null,max:null}),M=I(()=>`${x.value.year()} ${V("el.datepicker.year")} ${V(`el.datepicker.month${x.value.month()+1}`)}`),X=I(()=>`${O.value.year()} ${V("el.datepicker.year")} ${V(`el.datepicker.month${O.value.month()+1}`)}`),Q=I(()=>x.value.year()),K=I(()=>x.value.month()),ae=I(()=>O.value.year()),se=I(()=>O.value.month()),L=I(()=>!!m.value.length),P=I(()=>Y.value.min!==null?Y.value.min:p.value?p.value.format(C.value):""),A=I(()=>Y.value.max!==null?Y.value.max:f.value||p.value?(f.value||p.value).format(C.value):""),$=I(()=>U.value.min!==null?U.value.min:p.value?p.value.format(j.value):""),R=I(()=>U.value.max!==null?U.value.max:f.value||p.value?(f.value||p.value).format(j.value):""),j=I(()=>a.timeFormat||on(k.value)),C=I(()=>a.dateFormat||sn(k.value)),q=J=>St(J)&&(s?!s(J[0].toDate())&&!s(J[1].toDate()):!0),Z=()=>{x.value=x.value.subtract(1,"month"),a.unlinkPanels||(O.value=x.value.add(1,"month")),te("month")},oe=()=>{a.unlinkPanels?O.value=O.value.add(1,"month"):(x.value=x.value.add(1,"month"),O.value=x.value.add(1,"month")),te("month")},Ce=()=>{x.value=x.value.add(1,"year"),te("year")},Te=()=>{x.value=x.value.add(1,"month"),te("month")},_e=()=>{O.value=O.value.subtract(1,"year"),te("year")},ee=()=>{O.value=O.value.subtract(1,"month"),te("month")},te=J=>{e("panel-change",[x.value.toDate(),O.value.toDate()],J)},ce=I(()=>{const J=(K.value+1)%12,c=K.value+1>=12?1:0;return a.unlinkPanels&&new Date(Q.value+c,J)<new Date(ae.value,se.value)}),B=I(()=>a.unlinkPanels&&ae.value*12+se.value-(Q.value*12+K.value+1)>=12),le=I(()=>!(p.value&&f.value&&!h.value.selecting&&St([p.value,f.value]))),de=I(()=>a.type==="datetime"||a.type==="datetimerange"),ke=(J,c)=>{if(J)return i?z(i[c]||i).locale(S.value).year(J.year()).month(J.month()).date(J.date()):J},xe=(J,c=!0)=>{const b=J.minDate,ne=J.maxDate,Se=ke(b,0),Me=ke(ne,1);f.value===Me&&p.value===Se||(e("calendar-change",[b.toDate(),ne&&ne.toDate()]),f.value=Me,p.value=Se,!(!c||de.value)&&w())},Ve=H(!1),Ne=H(!1),Xe=()=>{Ve.value=!1},Pt=()=>{Ne.value=!1},vt=(J,c)=>{Y.value[c]=J;const b=z(J,C.value).locale(S.value);if(b.isValid()){if(s&&s(b.toDate()))return;c==="min"?(x.value=b,p.value=(p.value||x.value).year(b.year()).month(b.month()).date(b.date()),!a.unlinkPanels&&(!f.value||f.value.isBefore(p.value))&&(O.value=b.add(1,"month"),f.value=p.value.add(1,"month"))):(O.value=b,f.value=(f.value||O.value).year(b.year()).month(b.month()).date(b.date()),!a.unlinkPanels&&(!p.value||p.value.isAfter(f.value))&&(x.value=b.subtract(1,"month"),p.value=f.value.subtract(1,"month")))}},pe=(J,c)=>{Y.value[c]=null},at=(J,c)=>{U.value[c]=J;const b=z(J,j.value).locale(S.value);b.isValid()&&(c==="min"?(Ve.value=!0,p.value=(p.value||x.value).hour(b.hour()).minute(b.minute()).second(b.second())):(Ne.value=!0,f.value=(f.value||O.value).hour(b.hour()).minute(b.minute()).second(b.second()),O.value=f.value))},et=(J,c)=>{U.value[c]=null,c==="min"?(x.value=p.value,Ve.value=!1,(!f.value||f.value.isBefore(p.value))&&(f.value=p.value)):(O.value=f.value,Ne.value=!1,f.value&&f.value.isBefore(p.value)&&(p.value=f.value))},st=(J,c,b)=>{U.value.min||(J&&(x.value=J,p.value=(p.value||x.value).hour(J.hour()).minute(J.minute()).second(J.second())),b||(Ve.value=c),(!f.value||f.value.isBefore(p.value))&&(f.value=p.value,O.value=J))},We=(J,c,b)=>{U.value.max||(J&&(O.value=J,f.value=(f.value||O.value).hour(J.hour()).minute(J.minute()).second(J.second())),b||(Ne.value=c),f.value&&f.value.isBefore(p.value)&&(p.value=f.value))},Ke=()=>{x.value=Va(n(d),{lang:n(S),unit:"month",unlinkPanels:a.unlinkPanels})[0],O.value=x.value.add(1,"month"),f.value=void 0,p.value=void 0,e("pick",null)},Ct=J=>he(J)?J.map(c=>c.format(k.value)):J.format(k.value),Mt=J=>he(J)?J.map(c=>z(c,k.value).locale(S.value)):z(J,k.value).locale(S.value);function gt(J,c){if(a.unlinkPanels&&c){const b=J?.year()||0,ne=J?.month()||0,Se=c.year(),Me=c.month();O.value=b===Se&&ne===Me?c.add(1,Nt):c}else O.value=x.value.add(1,Nt),c&&(O.value=O.value.hour(c.hour()).minute(c.minute()).second(c.second()))}return e("set-picker-option",["isValidValue",q]),e("set-picker-option",["parseUserInput",Mt]),e("set-picker-option",["formatToString",Ct]),e("set-picker-option",["handleClear",Ke]),(J,c)=>(_(),W("div",{class:D([n(y).b(),n(u).b(),{"has-sidebar":J.$slots.sidebar||L.value,"has-time":de.value}])},[G("div",{class:D(n(y).e("body-wrapper"))},[ve(J.$slots,"sidebar",{class:D(n(y).e("sidebar"))}),L.value?(_(),W("div",{key:0,class:D(n(y).e("sidebar"))},[(_(!0),W(Ee,null,qe(m.value,(b,ne)=>(_(),W("button",{key:ne,type:"button",class:D(n(y).e("shortcut")),onClick:Se=>n(E)(b)},ge(b.text),11,es))),128))],2)):me("",!0),G("div",{class:D(n(y).e("body"))},[de.value?(_(),W("div",{key:0,class:D(n(u).e("time-header"))},[G("span",{class:D(n(u).e("editors-wrap"))},[G("span",{class:D(n(u).e("time-picker-wrap"))},[ie(n(it),{disabled:n(h).selecting,placeholder:n(V)("el.datepicker.startDate"),class:D(n(u).e("editor")),"model-value":P.value,"validate-event":!1,onInput:c[0]||(c[0]=b=>vt(b,"min")),onChange:c[1]||(c[1]=b=>pe(b,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),Be((_(),W("span",{class:D(n(u).e("time-picker-wrap"))},[ie(n(it),{class:D(n(u).e("editor")),disabled:n(h).selecting,placeholder:n(V)("el.datepicker.startTime"),"model-value":$.value,"validate-event":!1,onFocus:c[2]||(c[2]=b=>Ve.value=!0),onInput:c[3]||(c[3]=b=>at(b,"min")),onChange:c[4]||(c[4]=b=>et(b,"min"))},null,8,["class","disabled","placeholder","model-value"]),ie(n(fa),{visible:Ve.value,format:j.value,"datetime-role":"start","parsed-value":x.value,onPick:st},null,8,["visible","format","parsed-value"])],2)),[[n(pa),Xe]])],2),G("span",null,[ie(n(be),{name:"solid chevron-right"})]),G("span",{class:D([n(u).e("editors-wrap"),"is-right"])},[G("span",{class:D(n(u).e("time-picker-wrap"))},[ie(n(it),{class:D(n(u).e("editor")),disabled:n(h).selecting,placeholder:n(V)("el.datepicker.endDate"),"model-value":A.value,readonly:!n(p),"validate-event":!1,onInput:c[5]||(c[5]=b=>vt(b,"max")),onChange:c[6]||(c[6]=b=>pe(b,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),Be((_(),W("span",{class:D(n(u).e("time-picker-wrap"))},[ie(n(it),{class:D(n(u).e("editor")),disabled:n(h).selecting,placeholder:n(V)("el.datepicker.endTime"),"model-value":R.value,readonly:!n(p),"validate-event":!1,onFocus:c[7]||(c[7]=b=>n(p)&&(Ne.value=!0)),onInput:c[8]||(c[8]=b=>at(b,"max")),onChange:c[9]||(c[9]=b=>et(b,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),ie(n(fa),{"datetime-role":"end",visible:Ne.value,format:j.value,"parsed-value":O.value,onPick:We},null,8,["visible","format","parsed-value"])],2)),[[n(pa),Pt]])],2)],2)):me("",!0),G("div",{class:D([[n(y).e("content"),n(u).e("content")],"is-left"])},[G("div",{class:D(n(u).e("header"))},[G("button",{type:"button",class:D([n(y).e("icon-btn"),"arrow-left"]),"aria-label":n(V)("el.datepicker.prevMonth"),onClick:Z},[ve(J.$slots,"prev-month",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,ts),J.unlinkPanels?(_(),W("button",{key:0,type:"button",disabled:!B.value,class:D([[n(y).e("icon-btn"),{"is-disabled":!B.value}],"d-arrow-right"]),"aria-label":n(V)("el.datepicker.nextYear"),onClick:Ce},[ve(J.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,as)):me("",!0),J.unlinkPanels?(_(),W("button",{key:1,type:"button",disabled:!ce.value,class:D([[n(y).e("icon-btn"),{"is-disabled":!ce.value}],"arrow-right"]),"aria-label":n(V)("el.datepicker.nextMonth"),onClick:Te},[ve(J.$slots,"next-month",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,ns)):me("",!0),G("div",null,ge(M.value),1)],2),ie(Jt,{"selection-mode":"range",date:x.value,"min-date":n(p),"max-date":n(f),"range-state":n(h),"disabled-date":n(s),"cell-class-name":n(l),onChangerange:n(F),onPick:xe,onSelect:n(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),G("div",{class:D([[n(y).e("content"),n(u).e("content")],"is-right"])},[G("div",{class:D(n(u).e("header"))},[J.unlinkPanels?(_(),W("button",{key:0,type:"button",disabled:!B.value,class:D([[n(y).e("icon-btn"),{"is-disabled":!B.value}],"d-arrow-left"]),"aria-label":n(V)("el.datepicker.prevYear"),onClick:_e},[ve(J.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,rs)):me("",!0),J.unlinkPanels?(_(),W("button",{key:1,type:"button",disabled:!ce.value,class:D([[n(y).e("icon-btn"),{"is-disabled":!ce.value}],"arrow-left"]),"aria-label":n(V)("el.datepicker.prevMonth"),onClick:ee},[ve(J.$slots,"prev-month",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,os)):me("",!0),G("button",{type:"button",class:D([n(y).e("icon-btn"),"arrow-right"]),"aria-label":n(V)("el.datepicker.nextMonth"),onClick:oe},[ve(J.$slots,"next-month",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,ss),G("div",null,ge(X.value),1)],2),ie(Jt,{"selection-mode":"range",date:O.value,"min-date":n(p),"max-date":n(f),"range-state":n(h),"disabled-date":n(s),"cell-class-name":n(l),onChangerange:n(F),onPick:xe,onSelect:n(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),de.value?(_(),W("div",{key:0,class:D(n(y).e("footer"))},[n(v)?(_(),Ae(n(La),{key:0,text:"",size:"sm",class:D(n(y).e("link-btn")),onClick:Ke},{default:Ue(()=>[bt(ge(n(V)("el.datepicker.clear")),1)]),_:1},8,["class"])):me("",!0),ie(n(La),{plain:"",size:"sm",class:D(n(y).e("link-btn")),disabled:le.value,onClick:c[10]||(c[10]=b=>n(w)(!1))},{default:Ue(()=>[bt(ge(n(V)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):me("",!0)],2))}});Pn.__docgenInfo={exportName:"default",displayName:"panel-date-range",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"calendar-change"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-month"},{name:"next-year"},{name:"next-month"},{name:"prev-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-range.vue"]};const ls=De({...Ea}),is=["pick","set-picker-option","calendar-change"],us=({unlinkPanels:r,leftDate:t,rightDate:a})=>{const{t:e}=He(),o=()=>{t.value=t.value.subtract(1,"year"),r.value||(a.value=a.value.subtract(1,"year"))},s=()=>{r.value||(t.value=t.value.add(1,"year")),a.value=a.value.add(1,"year")},l=()=>{t.value=t.value.add(1,"year")},i=()=>{a.value=a.value.subtract(1,"year")},v=I(()=>`${t.value.year()} ${e("el.datepicker.year")}`),k=I(()=>`${a.value.year()} ${e("el.datepicker.year")}`),m=I(()=>t.value.year()),d=I(()=>a.value.year()===t.value.year()?t.value.year()+1:a.value.year());return{leftPrevYear:o,rightNextYear:s,leftNextYear:l,rightPrevYear:i,leftLabel:v,rightLabel:k,leftYear:m,rightYear:d}},cs=["onClick"],ds=["disabled"],ms=["disabled"],Lt="year",Cn=$e({name:"DatePickerMonthRange",__name:"panel-month-range",props:ls,emits:is,setup(r,{emit:t}){const a=r,e=t,{lang:o}=He(),s=Ye("EP_PICKER_BASE"),{shortcuts:l,disabledDate:i}=s.props,v=ze(s.props,"format"),k=ze(s.props,"defaultValue"),m=H(z().locale(o.value)),d=H(z().locale(o.value).add(1,Lt)),{minDate:S,maxDate:x,rangeState:O,ppNs:p,drpNs:f,handleChangeRange:h,handleRangeConfirm:y,handleShortcutClick:u,onSelect:F}=Sn(a,{defaultValue:k,leftDate:m,rightDate:d,unit:Lt,onParsedValueChanged:P}),w=I(()=>!!l.length),{leftPrevYear:E,rightNextYear:N,leftNextYear:T,rightPrevYear:V,leftLabel:Y,rightLabel:U,leftYear:M,rightYear:X}=us({unlinkPanels:ze(a,"unlinkPanels"),leftDate:m,rightDate:d}),Q=I(()=>a.unlinkPanels&&X.value>M.value+1),K=(A,$=!0)=>{const R=A.minDate,j=A.maxDate;x.value===j&&S.value===R||(e("calendar-change",[R.toDate(),j&&j.toDate()]),x.value=j,S.value=R,$&&y())},ae=()=>{m.value=Va(n(k),{lang:n(o),unit:"year",unlinkPanels:a.unlinkPanels})[0],d.value=m.value.add(1,"year"),e("pick",null)},se=A=>he(A)?A.map($=>$.format(v.value)):A.format(v.value),L=A=>he(A)?A.map($=>z($,v.value).locale(o.value)):z(A,v.value).locale(o.value);function P(A,$){if(a.unlinkPanels&&$){const R=A?.year()||0,j=$.year();d.value=R===j?$.add(1,Lt):$}else d.value=m.value.add(1,Lt)}return e("set-picker-option",["isValidValue",St]),e("set-picker-option",["formatToString",se]),e("set-picker-option",["parseUserInput",L]),e("set-picker-option",["handleClear",ae]),(A,$)=>(_(),W("div",{class:D([n(p).b(),n(f).b(),{"has-sidebar":!!A.$slots.sidebar||w.value}])},[G("div",{class:D(n(p).e("body-wrapper"))},[ve(A.$slots,"sidebar",{class:D(n(p).e("sidebar"))}),w.value?(_(),W("div",{key:0,class:D(n(p).e("sidebar"))},[(_(!0),W(Ee,null,qe(n(l),(R,j)=>(_(),W("button",{key:j,type:"button",class:D(n(p).e("shortcut")),onClick:C=>n(u)(R)},ge(R.text),11,cs))),128))],2)):me("",!0),G("div",{class:D(n(p).e("body"))},[G("div",{class:D([[n(p).e("content"),n(f).e("content")],"is-left"])},[G("div",{class:D(n(f).e("header"))},[G("button",{type:"button",class:D([n(p).e("icon-btn"),"d-arrow-left"]),onClick:$[0]||($[0]=(...R)=>n(E)&&n(E)(...R))},[ve(A.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],2),A.unlinkPanels?(_(),W("button",{key:0,type:"button",disabled:!Q.value,class:D([[n(p).e("icon-btn"),{[n(p).is("disabled")]:!Q.value}],"d-arrow-right"]),onClick:$[1]||($[1]=(...R)=>n(T)&&n(T)(...R))},[ve(A.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,ds)):me("",!0),G("div",null,ge(n(Y)),1)],2),ie(Qt,{"selection-mode":"range",date:m.value,"min-date":n(S),"max-date":n(x),"range-state":n(O),"disabled-date":n(i),onChangerange:n(h),onPick:K,onSelect:n(F)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),G("div",{class:D([[n(p).e("content"),n(f).e("content")],"is-right"])},[G("div",{class:D(n(f).e("header"))},[A.unlinkPanels?(_(),W("button",{key:0,type:"button",disabled:!Q.value,class:D([[n(p).e("icon-btn"),{"is-disabled":!Q.value}],"d-arrow-left"]),onClick:$[2]||($[2]=(...R)=>n(V)&&n(V)(...R))},[ve(A.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,ms)):me("",!0),G("button",{type:"button",class:D([n(p).e("icon-btn"),"d-arrow-right"]),onClick:$[3]||($[3]=(...R)=>n(N)&&n(N)(...R))},[ve(A.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],2),G("div",null,ge(n(U)),1)],2),ie(Qt,{"selection-mode":"range",date:d.value,"min-date":n(S),"max-date":n(x),"range-state":n(O),"disabled-date":n(i),onChangerange:n(h),onPick:K,onSelect:n(F)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}});Cn.__docgenInfo={name:"DatePickerMonthRange",exportName:"default",displayName:"panel-month-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-month-range.vue"]};const fs=De({...Ea}),ps=["pick","set-picker-option","calendar-change"],vs=({unlinkPanels:r,leftDate:t,rightDate:a})=>{const e=()=>{t.value=t.value.subtract(10,"year"),r.value||(a.value=a.value.subtract(10,"year"))},o=()=>{r.value||(t.value=t.value.add(10,"year")),a.value=a.value.add(10,"year")},s=()=>{t.value=t.value.add(10,"year")},l=()=>{a.value=a.value.subtract(10,"year")},i=I(()=>{const d=Math.floor(t.value.year()/10)*10;return`${d}-${d+9}`}),v=I(()=>{const d=Math.floor(a.value.year()/10)*10;return`${d}-${d+9}`}),k=I(()=>Math.floor(t.value.year()/10)*10+9),m=I(()=>Math.floor(a.value.year()/10)*10);return{leftPrevYear:e,rightNextYear:o,leftNextYear:s,rightPrevYear:l,leftLabel:i,rightLabel:v,leftYear:k,rightYear:m}},gs=["onClick"],hs=["disabled"],bs=["disabled"],Ha="year",Mn=$e({name:"DatePickerYearRange",__name:"panel-year-range",props:fs,emits:ps,setup(r,{emit:t}){const a=r,e=t,{lang:o}=He(),s=H(z().locale(o.value)),l=H(s.value.add(10,"year")),{pickerNs:i}=Ye(ra),v=Pe("date-range-picker"),k=I(()=>!!K.length),m=I(()=>[i.b(),v.b(),{"has-sidebar":!!aa().sidebar||k.value}]),d=I(()=>({content:[i.e("content"),v.e("content"),"is-left"],arrowLeftBtn:[i.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[i.e("icon-btn"),{[i.is("disabled")]:!E.value},"d-arrow-right"]})),S=I(()=>({content:[i.e("content"),v.e("content"),"is-right"],arrowLeftBtn:[i.e("icon-btn"),{"is-disabled":!E.value},"d-arrow-left"],arrowRightBtn:[i.e("icon-btn"),"d-arrow-right"]})),x=xn(o),{leftPrevYear:O,rightNextYear:p,leftNextYear:f,rightPrevYear:h,leftLabel:y,rightLabel:u,leftYear:F,rightYear:w}=vs({unlinkPanels:ze(a,"unlinkPanels"),leftDate:s,rightDate:l}),E=I(()=>a.unlinkPanels&&w.value>F.value+1),N=H(),T=H(),V=H({endDate:null,selecting:!1}),Y=C=>{V.value=C},U=(C,q=!0)=>{const Z=C.minDate,oe=C.maxDate;T.value===oe&&N.value===Z||(e("calendar-change",[Z.toDate(),oe&&oe.toDate()]),T.value=oe,N.value=Z,q&&M())},M=(C=!1)=>{St([N.value,T.value])&&e("pick",[N.value,T.value],C)},X=C=>{V.value.selecting=C,C||(V.value.endDate=null)},Q=Ye("EP_PICKER_BASE"),{shortcuts:K,disabledDate:ae}=Q.props,se=ze(Q.props,"format"),L=ze(Q.props,"defaultValue"),P=()=>{let C;if(he(L.value)){const q=z(L.value[0]);let Z=z(L.value[1]);return a.unlinkPanels||(Z=q.add(10,Ha)),[q,Z]}else L.value?C=z(L.value):C=z();return C=C.locale(o.value),[C,C.add(10,Ha)]};Fe(()=>L.value,C=>{if(C){const q=P();s.value=q[0],l.value=q[1]}},{immediate:!0}),Fe(()=>a.parsedValue,C=>{if(C&&C.length===2)if(N.value=C[0],T.value=C[1],s.value=N.value,a.unlinkPanels&&T.value){const q=N.value.year(),Z=T.value.year();l.value=q===Z?T.value.add(10,"year"):T.value}else l.value=s.value.add(10,"year");else{const q=P();N.value=void 0,T.value=void 0,s.value=q[0],l.value=q[1]}},{immediate:!0});const A=C=>he(C)?C.map(q=>z(q,se.value).locale(o.value)):z(C,se.value).locale(o.value),$=C=>he(C)?C.map(q=>q.format(se.value)):C.format(se.value),R=C=>St(C)&&(ae?!ae(C[0].toDate())&&!ae(C[1].toDate()):!0),j=()=>{const C=P();s.value=C[0],l.value=C[1],T.value=void 0,N.value=void 0,e("pick",null)};return e("set-picker-option",["isValidValue",R]),e("set-picker-option",["parseUserInput",A]),e("set-picker-option",["formatToString",$]),e("set-picker-option",["handleClear",j]),(C,q)=>(_(),W("div",{class:D(m.value)},[G("div",{class:D(n(i).e("body-wrapper"))},[ve(C.$slots,"sidebar",{class:D(n(i).e("sidebar"))}),k.value?(_(),W("div",{key:0,class:D(n(i).e("sidebar"))},[(_(!0),W(Ee,null,qe(n(K),(Z,oe)=>(_(),W("button",{key:oe,type:"button",class:D(n(i).e("shortcut")),onClick:Ce=>n(x)(Z)},ge(Z.text),11,gs))),128))],2)):me("",!0),G("div",{class:D(n(i).e("body"))},[G("div",{class:D(d.value.content)},[G("div",{class:D(n(v).e("header"))},[G("button",{type:"button",class:D(d.value.arrowLeftBtn),onClick:q[0]||(q[0]=(...Z)=>n(O)&&n(O)(...Z))},[ve(C.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],2),C.unlinkPanels?(_(),W("button",{key:0,type:"button",disabled:!E.value,class:D(d.value.arrowRightBtn),onClick:q[1]||(q[1]=(...Z)=>n(f)&&n(f)(...Z))},[ve(C.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],10,hs)):me("",!0),G("div",null,ge(n(y)),1)],2),ie(Xt,{"selection-mode":"range",date:s.value,"min-date":N.value,"max-date":T.value,"range-state":V.value,"disabled-date":n(ae),onChangerange:Y,onPick:U,onSelect:X},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),G("div",{class:D(S.value.content)},[G("div",{class:D(n(v).e("header"))},[C.unlinkPanels?(_(),W("button",{key:0,type:"button",disabled:!E.value,class:D(S.value.arrowLeftBtn),onClick:q[2]||(q[2]=(...Z)=>n(h)&&n(h)(...Z))},[ve(C.$slots,"prev-year",{},()=>[ie(n(be),{name:"solid chevron-left"})])],10,bs)):me("",!0),G("button",{type:"button",class:D(S.value.arrowRightBtn),onClick:q[3]||(q[3]=(...Z)=>n(p)&&n(p)(...Z))},[ve(C.$slots,"next-year",{},()=>[ie(n(be),{name:"solid chevron-right"})])],2),G("div",null,ge(n(u)),1)],2),ie(Xt,{"selection-mode":"range",date:l.value,"min-date":N.value,"max-date":T.value,"range-state":V.value,"disabled-date":n(ae),onChangerange:Y,onPick:U,onSelect:X},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}});Mn.__docgenInfo={name:"DatePickerYearRange",exportName:"default",displayName:"panel-year-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-year-range.vue"]};const ys=function(r){switch(r){case"daterange":case"datetimerange":return Pn;case"monthrange":return Cn;case"yearrange":return Mn;default:return Dn}};z.extend(xr);z.extend(Mr);z.extend(cn);z.extend(Er);z.extend(Vr);z.extend(Or);z.extend(Tr);z.extend(Nr);const ks=$e({name:"GDatePicker",install:null,props:Co,emits:["update:modelValue"],setup(r,{expose:t,emit:a,slots:e}){const o=Pe("picker-panel");Dt("ElPopperOptions",Qe(ze(r,"popperOptions"))),Dt(ra,{slots:e,pickerNs:o});const s=H();t({focus:()=>{s.value?.focus()},blur:()=>{s.value?.blur()},handleOpen:()=>{s.value?.handleOpen()},handleClose:()=>{s.value?.handleClose()}});const i=v=>{a("update:modelValue",v)};return()=>{const v=r.format??(dr[r.type]||mr),k=ys(r.type);return kt(kt(fr,{...r,format:v,type:r.type,ref:s,"onUpdate:modelValue":i},{default:m=>kt(k,{...m},{"prev-month":e["prev-month"],"next-month":e["next-month"],"prev-year":e["prev-year"],"next-year":e["next-year"]}),"range-separator":e["range-separator"]}))}}}),ws=na(ks),Ua=["hours","minutes","seconds"],Ds="HH:mm:ss",ia=(r,t)=>[r>0?r-1:void 0,r,r<t?r+1:void 0],Ka=function(r,t){const a=Oa(r),e=Oa(t);return a&&e?r.getTime()===t.getTime():!a&&!e?r===t:!1},za=function(r,t){const a=he(r),e=he(t);return a&&e?r.length!==t.length?!1:r.every((o,s)=>Ka(o,t[s])):!a&&!e?Ka(r,t):!1},Wa=function(r,t,a){const e=en(t)||t==="x"?z(r).locale(a):z(r,t).locale(a);return e.isValid()?e:void 0},Za=function(r,t,a){return en(t)?r:t==="x"?+r:z(r).locale(a).format(t)},ua=(r,t)=>{const a=[],e=t?.();for(let o=0;o<r;o++)a.push(e?.includes(o)??!1);return a},qt=r=>he(r)?r.map(t=>t.toDate()):r.toDate(),Rn=De({disabledHours:{type:ue(Function)},disabledMinutes:{type:ue(Function)},disabledSeconds:{type:ue(Function)}}),En=De({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Fn=De({id:{type:ue([Array,String])},name:{type:ue([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:ue([String,Object]),default:yr},editable:{type:Boolean,default:!0},prefixIcon:{type:ue(String),default:""},readonly:Boolean,disabled:Boolean,label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},popperOptions:{type:ue(Object),default:()=>({})},modelValue:{type:ue([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:ue([Date,Array])},defaultTime:{type:ue([Date,Array])},isRange:Boolean,...Rn,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:ue([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:ue(String),values:or,default:"bottom"},fallbackPlacements:{type:ue(Array),default:["bottom","top","right","left"]},...Hn,...an(["ariaLabel"]),showNow:{type:Boolean,default:!0}}),xs=De({id:{type:ue(Array)},name:{type:ue(Array)},modelValue:{type:ue([Array,String])},startPlaceholder:String,endPlaceholder:String,label:String}),Ss=["id","name","placeholder","value"],Ps=["id","name","placeholder","value"],Vn=$e({name:"PickerRangeTrigger",inheritAttrs:!1,__name:"picker-range-trigger",props:xs,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(r,{expose:t,emit:a}){const e=r,o=a,s=nn(),l=Pe("input"),i=Pe("date"),v=Pe("range"),k=H(void 0),m=H(null),d=H(),S=H(),{wrapperRef:x,isFocused:O}=Ca(d),p=M=>{o("click",M)},f=M=>{o("mouseenter",M)},h=M=>{o("mouseleave",M)},y=M=>{o("mouseenter",M)},u=M=>{o("startInput",M)},F=M=>{o("endInput",M)},w=M=>{o("startChange",M)},E=M=>{o("endChange",M)},N=()=>{d.value?.focus()},T=()=>{d.value?.blur(),S.value?.blur()},V=I(()=>{const M=!!Y.value||O.value;return{left:M?void 0:`calc(${k.value} + 16px)`,zIndex:M?void 0:10}}),Y=I(()=>Sa(e.modelValue)?"":String(e.modelValue));return Pa(m,()=>{requestAnimationFrame(()=>{const M=m.value?.getBoundingClientRect().width;k.value=`${M}px`})}),t({focus:N,blur:T}),(M,X)=>(_(),W("div",{ref_key:"wrapperRef",ref:x,class:D([n(i).is("active",n(O)),M.$attrs.class]),style:ct(M.$attrs.style),onClick:p,onMouseenter:f,onMouseleave:h,onTouchstartPassive:y},[ve(M.$slots,"prefix"),M.modelValue?(_(),W("div",{key:0,class:D([n(l).e("label")]),style:ct(V.value)},ge(M.label),7)):me("",!0),G("input",zt(n(s),{id:M.id&&M.id[0],ref_key:"inputRef",ref:d,name:M.name&&M.name[0],placeholder:M.startPlaceholder,value:M.modelValue&&M.modelValue[0],class:n(v).b("input"),onInput:u,onChange:w}),null,16,Ss),ve(M.$slots,"range-separator"),G("input",zt(n(s),{id:M.id&&M.id[1],ref_key:"endInputRef",ref:S,name:M.name&&M.name[1],placeholder:M.endPlaceholder,value:M.modelValue&&M.modelValue[1],class:n(v).b("input"),onInput:F,onChange:E}),null,16,Ps),ve(M.$slots,"suffix")],38))}});Vn.__docgenInfo={name:"PickerRangeTrigger",exportName:"default",displayName:"picker-range-trigger",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],events:[{name:"mouseenter"},{name:"mouseleave"},{name:"click"},{name:"touchstart"},{name:"focus"},{name:"blur"},{name:"startInput"},{name:"endInput"},{name:"startChange"},{name:"endChange"}],slots:[{name:"prefix"},{name:"range-separator"},{name:"suffix"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker-range-trigger.vue"]};const In=$e({name:"Picker",__name:"picker",props:Fn,emits:["update:modelValue","change","focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(r,{expose:t,emit:a}){const e=r,o=a,s=ta(),{lang:l}=He(),i=Pe("date"),v=Pe("input"),k=Pe("range"),m=H(void 0),d=H(null),{form:S,formItem:x}=tn(),O=Ye("ElPopperOptions",{}),{valueOnClear:p}=Un(e,null),f=H(),h=H(),y=H(!1),u=H(!1),F=H(null);let w=!1;const{isFocused:E,handleFocus:N,handleBlur:T}=Ca(h,{beforeFocus(){return e.readonly||q.value},afterFocus(){y.value=!0},beforeBlur(g){return!w&&f.value?.isFocusInsideContent(g)},afterBlur(){at(),y.value=!1,w=!1,e.validateEvent&&x?.validate("blur").catch(g=>wt())}}),V=I(()=>{const g=!!Y.value||E.value;return{left:g?void 0:`calc(${m.value} + 16px)`,zIndex:g?void 0:10}}),Y=I(()=>Sa(e.modelValue)?"":String(e.modelValue)),U=()=>{if(!e.prefixIcon){m.value="0";return}requestAnimationFrame(()=>{const g=d.value?.getBoundingClientRect().width;m.value=`${g}px`})},M=I(()=>[i.b("editor"),i.bm("editor",e.type),v.e("wrapper"),i.is("disabled",q.value),i.is("active",y.value),k.b("editor"),s.class]),X=I(()=>[v.e("icon"),k.e("close-icon"),B.value?"":k.e("close-icon--hidden")]);Fe(y,g=>{g?Le(()=>{g&&(F.value=e.modelValue)}):(pe.value=null,Le(()=>{Q(e.modelValue)}))});const Q=(g,re)=>{(re||!za(g,F.value))&&(o("change",g),e.validateEvent&&x?.validate("change").catch(we=>wt()))},K=g=>{if(!za(e.modelValue,g)){let re;he(g)?re=g.map(we=>Za(we,e.valueFormat,l.value)):g&&(re=Za(g,e.valueFormat,l.value)),o("update:modelValue",g&&re,l.value)}},ae=g=>{o("keydown",g)},se=I(()=>h.value?Array.from(h.value.$el.querySelectorAll("input")):[]),L=(g,re,we)=>{const Ie=se.value;Ie.length&&(!we||we==="min"?(Ie[0].setSelectionRange(g,re),Ie[0].focus()):we==="max"&&(Ie[1].setSelectionRange(g,re),Ie[1].focus()))},P=(g="",re=!1)=>{y.value=re;let we;he(g)?we=g.map(Ie=>Ie.toDate()):we=g&&g.toDate(),pe.value=null,K(we)},A=()=>{u.value=!0},$=()=>{o("visible-change",!0)},R=()=>{u.value=!1,y.value=!1,o("visible-change",!1)},j=()=>{y.value=!0},C=()=>{y.value=!1},q=I(()=>e.disabled||S?.disabled),Z=I(()=>{let g;if(de.value?b.value.getDefaultValue&&(g=b.value.getDefaultValue()):he(e.modelValue)?g=e.modelValue.map(re=>Wa(re,e.valueFormat,l.value)):g=Wa(e.modelValue,e.valueFormat,l.value),b.value.getRangeAvailableTime){const re=b.value.getRangeAvailableTime(g);kr(re,g)||(g=re,de.value||K(qt(g)))}return he(g)&&g.some(re=>!re)&&(g=[]),g}),oe=I(()=>{if(!b.value.panelReady)return"";const g=st(Z.value);return he(pe.value)?[pe.value[0]||g&&g[0]||"",pe.value[1]||g&&g[1]||""]:pe.value!==null?pe.value:!Te.value&&de.value||!y.value&&de.value?"":g?_e.value||ee.value||te.value?g.join(", "):g:""}),Ce=I(()=>e.type.includes("time")),Te=I(()=>e.type.startsWith("time")),_e=I(()=>e.type==="dates"),ee=I(()=>e.type==="months"),te=I(()=>e.type==="years"),ce=I(()=>e.prefixIcon||(Ce.value?"regular clock":"regular calendar")),B=H(!1),le=g=>{e.readonly||q.value||(B.value&&(g.stopPropagation(),b.value.handleClear?b.value.handleClear():K(p.value),Q(p.value,!0),B.value=!1,R()),o("clear"))},de=I(()=>{const{modelValue:g}=e;return!g||he(g)&&!g.filter(Boolean).length}),ke=async g=>{e.readonly||q.value||(g.target?.tagName!=="INPUT"||E.value)&&(y.value=!0)},xe=()=>{e.readonly||q.value||!de.value&&e.clearable&&(B.value=!0)},Ve=()=>{B.value=!1},Ne=g=>{e.readonly||q.value||(g.touches[0].target?.tagName!=="INPUT"||E.value)&&(y.value=!0)},Xe=I(()=>e.type.includes("range")),Pt=I(()=>n(f)?.popperRef?.contentRef),vt=Xn(h,g=>{const re=n(Pt),we=er(h);re&&(g.target===re||g.composedPath().includes(re))||g.target===we||we&&g.composedPath().includes(we)||(y.value=!1)});Qa(()=>{vt?.()});const pe=H(null);Pa(d,U);const at=()=>{if(pe.value){const g=et(oe.value);g&&We(g)&&(K(qt(g)),pe.value=null)}pe.value===""&&(K(p.value),Q(p.value),pe.value=null)},et=g=>g?b.value.parseUserInput(g):null,st=g=>g?b.value.formatToString(g):null,We=g=>b.value.isValidValue(g),Ke=async g=>{if(e.readonly||q.value)return;const{code:re}=g;if(ae(g),re===Re.esc){y.value===!0&&(y.value=!1,g.preventDefault(),g.stopPropagation());return}if(re===Re.down&&(b.value.handleFocusPicker&&(g.preventDefault(),g.stopPropagation()),y.value===!1&&(y.value=!0,await Le()),b.value.handleFocusPicker)){b.value.handleFocusPicker();return}if(re===Re.tab){w=!0;return}if(re===Re.enter||re===Re.numpadEnter){(pe.value===null||pe.value===""||We(et(oe.value)))&&(at(),y.value=!1),g.stopPropagation();return}if(pe.value){g.stopPropagation();return}b.value.handleKeydownInput&&b.value.handleKeydownInput(g)},Ct=g=>{pe.value=g,y.value||(y.value=!0)},Mt=g=>{const re=g.target;pe.value?pe.value=[re.value,pe.value[1]]:pe.value=[re.value,null]},gt=g=>{const re=g.target;pe.value?pe.value=[pe.value[0],re.value]:pe.value=[null,re.value]},J=()=>{const g=pe.value,re=et(g&&g[0]),we=n(Z);if(re&&re.isValid()){pe.value=[st(re),oe.value?.[1]||null];const Ie=[re,we&&(we[1]||null)];We(Ie)&&(K(qt(Ie)),pe.value=null)}},c=()=>{const g=n(pe),re=et(g&&g[1]),we=n(Z);if(re&&re.isValid()){pe.value=[n(oe)?.[0]||null,st(re)];const Ie=[we&&we[0],re];We(Ie)&&(K(qt(Ie)),pe.value=null)}},b=H({}),ne=g=>{b.value[g[0]]=g[1],b.value.panelReady=!0},Se=g=>{o("calendar-change",g)},Me=(g,re,we)=>{o("panel-change",g,re,we)},lt=()=>{h.value?.focus()},Rt=()=>{h.value?.blur()};return Dt("EP_PICKER_BASE",{props:e}),t({focus:lt,blur:Rt,handleOpen:j,handleClose:C,onPick:P}),(g,re)=>(_(),Ae(n(gr),zt({ref_key:"refPopper",ref:f,visible:y.value,pure:"",trigger:"click"},g.$attrs,{role:"dialog",teleported:"",transition:`${n(i).namespace.value}-zoom-in-top`,"popper-class":[`${n(i).namespace.value}-picker__popper`],"popper-options":n(O),"fallback-placements":g.fallbackPlacements,"gpu-acceleration":!1,placement:g.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:A,onShow:$,onHide:R}),{default:Ue(()=>[Xe.value?(_(),Ae(Vn,{key:1,id:g.id,ref_key:"inputRef",ref:h,"model-value":oe.value,name:g.name,disabled:q.value,readonly:!g.editable||g.readonly,label:g.label,"start-placeholder":g.startPlaceholder,"end-placeholder":g.endPlaceholder,class:D(M.value),style:ct(g.$attrs.style),"aria-label":g.ariaLabel,tabindex:g.tabindex,autocomplete:"off",role:"combobox",onClick:ke,onFocus:n(N),onBlur:n(T),onStartInput:Mt,onStartChange:J,onEndInput:gt,onEndChange:c,onMousedown:ke,onMouseenter:xe,onMouseleave:Ve,onTouchstartPassive:Ne,onKeydown:Ke},{prefix:Ue(()=>[ce.value?(_(),Ae(n(be),{key:0,class:D([n(v).e("icon"),n(k).e("icon")]),name:ce.value},null,8,["class","name"])):me("",!0)]),"range-separator":Ue(()=>[ve(g.$slots,"range-separator",{},()=>[G("span",{class:D(n(k).b("separator"))},ge(g.rangeSeparator),3)])]),suffix:Ue(()=>[g.clearIcon?(_(),Ae(n(be),{key:0,class:D(X.value),onMousedown:Je(n($a),["prevent"]),onClick:le,name:"regular times"},null,8,["class","onMousedown"])):me("",!0)]),_:3},8,["id","model-value","name","disabled","readonly","label","start-placeholder","end-placeholder","class","style","aria-label","tabindex","onFocus","onBlur"])):(_(),Ae(n(it),{key:0,id:g.id,ref_key:"inputRef",ref:h,"container-role":"combobox","model-value":oe.value,name:g.name,disabled:q.value,label:g.label,class:D([n(i).b("editor"),n(i).bm("editor",g.type),g.$attrs.class]),style:ct(g.$attrs.style),readonly:!g.editable||g.readonly||_e.value||ee.value||te.value||g.type==="week","aria-label":g.ariaLabel,tabindex:g.tabindex,"validate-event":!1,helpText:g.helpText,messageError:g.messageError,onInput:Ct,onFocus:n(N),onBlur:n(T),onKeydown:Ke,onChange:at,onMousedown:ke,onMouseenter:xe,onMouseleave:Ve,onTouchstartPassive:Ne,onClick:re[0]||(re[0]=Je(()=>{},["stop"]))},{prefix:Ue(()=>[ce.value?(_(),Ae(n(be),{key:0,class:D(n(v).e("icon")),onMousedown:Je(ke,["prevent"]),onTouchstartPassive:Ne,name:ce.value},null,8,["class","name"])):me("",!0)]),suffix:Ue(()=>[B.value&&g.clearIcon?(_(),Ae(n(be),{key:0,class:D(`${n(v).e("icon")} clear-icon`),onMousedown:Je(n($a),["prevent"]),onClick:le,name:"regular times"},null,8,["class","onMousedown"])):me("",!0)]),default:Ue(()=>[G("span",null,ge(g.label),1),g.label?(_(),W("div",{key:0,class:D([n(v).e("label")]),style:ct(V.value)},ge(g.label),7)):me("",!0)]),_:1},8,["id","model-value","name","disabled","label","class","style","readonly","aria-label","tabindex","helpText","messageError","onFocus","onBlur"]))]),content:Ue(()=>[ve(g.$slots,"default",{visible:y.value,actualVisible:u.value,parsedValue:Z.value,format:g.format,dateFormat:g.dateFormat,timeFormat:g.timeFormat,unlinkPanels:g.unlinkPanels,type:g.type,defaultValue:g.defaultValue,showNow:g.showNow,onPick:P,onSelectRange:L,onSetPickerOption:ne,onCalendarChange:Se,onPanelChange:Me,onMousedown:re[1]||(re[1]=Je(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options","fallback-placements","placement"]))}});In.__docgenInfo={name:"Picker",exportName:"default",displayName:"picker",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus input box."}]},{name:"blur",tags:[{title:"description",content:"blur input box."}]},{name:"handleOpen",tags:[{title:"description",content:"opens picker"}]},{name:"handleClose",tags:[{title:"description",content:"closes picker"}]},{name:"onPick",tags:[{title:"description",content:"pick item manually"}]}],events:[{name:"update:modelValue"},{name:"change"},{name:"focus"},{name:"blur"},{name:"clear"},{name:"calendar-change"},{name:"panel-change"},{name:"visible-change"},{name:"keydown"}],slots:[{name:"range-separator"},{name:"default",scoped:!0,bindings:[{name:"visible",title:"binding"},{name:"actual-visible",title:"binding"},{name:"parsed-value",title:"binding"},{name:"format",title:"binding"},{name:"date-format",title:"binding"},{name:"time-format",title:"binding"},{name:"unlink-panels",title:"binding"},{name:"type",title:"binding"},{name:"default-value",title:"binding"},{name:"show-now",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker.vue"]};const Cs=De({...En,datetimeRole:String,parsedValue:{type:ue(Object)}}),On=({getAvailableHours:r,getAvailableMinutes:t,getAvailableSeconds:a})=>{const e=(l,i,v,k)=>{const m={hour:r,minute:t,second:a};let d=l;return["hour","minute","second"].forEach(S=>{if(m[S]){let x;const O=m[S];switch(S){case"minute":{x=O(d.hour(),i,k);break}case"second":{x=O(d.hour(),d.minute(),i,k);break}default:{x=O(i,k);break}}if(x?.length&&!x.includes(d[S]())){const p=v?0:x.length-1;d=d[S](x[p])}}}),d},o={};return{timePickerOptions:o,getAvailableTime:e,onSetOption:([l,i])=>{o[l]=i}}},ca=r=>{const t=(e,o)=>e||o,a=e=>e!==!0;return r.map(t).filter(a)},$n=(r,t,a)=>({getHoursList:(l,i)=>ua(24,r&&(()=>r?.(l,i))),getMinutesList:(l,i,v)=>ua(60,t&&(()=>t?.(l,i,v))),getSecondsList:(l,i,v,k)=>ua(60,a&&(()=>a?.(l,i,v,k)))}),Tn=(r,t,a)=>{const{getHoursList:e,getMinutesList:o,getSecondsList:s}=$n(r,t,a);return{getAvailableHours:(k,m)=>ca(e(k,m)),getAvailableMinutes:(k,m,d)=>ca(o(k,m,d)),getAvailableSeconds:(k,m,d,S)=>ca(s(k,m,d,S))}},An=r=>{const t=H(r.parsedValue);return Fe(()=>r.visible,a=>{a||(t.value=r.parsedValue)}),t},Ms=De({role:{type:String,required:!0},spinnerDate:{type:ue(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:ue(String),default:""},...Rn}),Rs=["onClick"],Es=["onMouseenter"],ea=$e({__name:"basic-time-spinner",props:Ms,emits:["change","select-range","set-option"],setup(r,{emit:t}){const a=r,e=Ye("EP_PICKER_BASE"),{isRange:o}=e.props,s=t,l=Pe("time"),{getHoursList:i,getMinutesList:v,getSecondsList:k}=$n(a.disabledHours,a.disabledMinutes,a.disabledSeconds);let m=!1;const d=H(),S=H(),x=H(),O=H(),p={hours:S,minutes:x,seconds:O},f=I(()=>a.showSeconds?Ua:Ua.slice(0,2)),h=I(()=>{const{spinnerDate:R}=a,j=R.hour(),C=R.minute(),q=R.second();return{hours:j,minutes:C,seconds:q}}),y=I(()=>{const{hours:R,minutes:j}=n(h),{role:C,spinnerDate:q}=a,Z=o?void 0:q;return{hours:i(C,Z),minutes:v(R,C,Z),seconds:k(R,j,C,Z)}}),u=I(()=>{const{hours:R,minutes:j,seconds:C}=n(h);return{hours:ia(R,23),minutes:ia(j,59),seconds:ia(C,59)}}),F=wr(R=>{m=!1,N(R)},200),w=R=>{if(!!!a.amPmMode)return"";const C=a.amPmMode==="A";let q=R<12?" am":" pm";return C&&(q=q.toUpperCase()),q},E=R=>{let j;switch(R){case"hours":j=[0,2];break;case"minutes":j=[3,5];break;case"seconds":j=[6,8];break}const[C,q]=j;s("select-range",C,q),d.value=R},N=R=>{Y(R,n(h)[R])},T=()=>{N("hours"),N("minutes"),N("seconds")},V=R=>R.querySelector(`.${l.namespace.value}-scrollbar__wrap`),Y=(R,j)=>{if(a.arrowControl)return;const C=n(p[R]);C&&C.$el&&(V(C.$el).scrollTop=Math.max(0,j*U(R)))},U=R=>{const C=n(p[R])?.$el.querySelector("li");return C&&Number.parseFloat(br(C,"height"))||0},M=()=>{Q(1)},X=()=>{Q(-1)},Q=R=>{d.value||E("hours");const j=d.value,C=n(h)[j],q=d.value==="hours"?24:60,Z=K(j,C,R,q);ae(j,Z),Y(j,Z),Le(()=>E(j))},K=(R,j,C,q)=>{let Z=(j+C+q)%q;const oe=n(y)[R];for(;oe[Z]&&Z!==j;)Z=(Z+C+q)%q;return Z},ae=(R,j)=>{if(n(y)[R][j])return;const{hours:Z,minutes:oe,seconds:Ce}=n(h);let Te;switch(R){case"hours":Te=a.spinnerDate.hour(j).minute(oe).second(Ce);break;case"minutes":Te=a.spinnerDate.hour(Z).minute(j).second(Ce);break;case"seconds":Te=a.spinnerDate.hour(Z).minute(oe).second(j);break}s("change",Te)},se=(R,{value:j,disabled:C})=>{C||(ae(R,j),E(R),Y(R,j))},L=R=>{const j=n(p[R]);if(!j)return;m=!0,F(R);const C=Math.min(Math.round((V(j.$el).scrollTop-(P(R)*.5-10)/U(R)+3)/U(R)),R==="hours"?23:59);ae(R,C)},P=R=>n(p[R]).$el.offsetHeight,A=()=>{const R=j=>{const C=n(p[j]);C&&C.$el&&(V(C.$el).onscroll=()=>{L(j)})};R("hours"),R("minutes"),R("seconds")};xa(()=>{Le(()=>{!a.arrowControl&&A(),T(),a.role==="start"&&E("hours")})});const $=(R,j)=>{p[j].value=R??void 0};return s("set-option",[`${a.role}_scrollDown`,Q]),s("set-option",[`${a.role}_emitSelectRange`,E]),Fe(()=>a.spinnerDate,()=>{m||T()}),(R,j)=>(_(),W("div",{class:D([n(l).b("spinner"),{"has-seconds":R.showSeconds}])},[R.arrowControl?me("",!0):(_(!0),W(Ee,{key:0},qe(f.value,C=>(_(),Ae(n(pr),{key:C,ref_for:!0,ref:q=>$(q,C),class:D(n(l).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":n(l).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:q=>E(C),onMousemove:q=>N(C)},{default:Ue(()=>[(_(!0),W(Ee,null,qe(y.value[C],(q,Z)=>(_(),W("li",{key:Z,class:D([n(l).be("spinner","item"),n(l).is("active",Z===h.value[C]),n(l).is("disabled",q)]),onClick:oe=>se(C,{value:Z,disabled:q})},[C==="hours"?(_(),W(Ee,{key:0},[bt(ge(("0"+(R.amPmMode?Z%12||12:Z)).slice(-2))+ge(w(Z)),1)],64)):(_(),W(Ee,{key:1},[bt(ge(("0"+Z).slice(-2)),1)],64))],10,Rs))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),R.arrowControl?(_(!0),W(Ee,{key:1},qe(f.value,C=>(_(),W("div",{key:C,class:D([n(l).be("spinner","wrapper"),n(l).is("arrow")]),onMouseenter:q=>E(C)},[Be(ie(n(be),{name:"regular chevron-up"},null,512),[[n(Na),X]]),Be(ie(n(be),{name:"regular chevron-down"},null,512),[[n(Na),M]]),G("ul",{class:D(n(l).be("spinner","list"))},[(_(!0),W(Ee,null,qe(u.value[C],(q,Z)=>(_(),W("li",{key:Z,class:D([n(l).be("spinner","item"),n(l).is("active",q===h.value[C]),n(l).is("disabled",y.value[C][q])])},[n(Kn)(q)?(_(),W(Ee,{key:0},[C==="hours"?(_(),W(Ee,{key:0},[bt(ge(("0"+(R.amPmMode?q%12||12:q)).slice(-2))+ge(w(q)),1)],64)):(_(),W(Ee,{key:1},[bt(ge(("0"+q).slice(-2)),1)],64))],64)):me("",!0)],2))),128))],2)],42,Es))),128)):me("",!0)],2))}});ea.__docgenInfo={exportName:"default",displayName:"basic-time-spinner",description:"",tags:{},events:[{name:"change"},{name:"select-range"},{name:"set-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]};const Nn=$e({__name:"panel-time-pick",props:Cs,emits:["pick","select-range","set-picker-option"],setup(r,{emit:t}){const a=r,e=t,o=Ye("EP_PICKER_BASE"),{arrowControl:s,disabledHours:l,disabledMinutes:i,disabledSeconds:v,defaultValue:k}=o.props,{getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:S}=Tn(l,i,v),x=Pe("time"),{lang:O}=He(),p=H([0,2]),f=An(a),h=I(()=>zn(a.actualVisible)?`${x.namespace.value}-zoom-in-top`:""),y=I(()=>a.format.includes("ss")),u=I(()=>a.format.includes("A")?"A":a.format.includes("a")?"a":""),F=L=>{const P=z(L).locale(O.value),A=Q(P);return P.isSame(A)},w=()=>{e("pick",f.value,!1)},E=(L=!1,P=!1)=>{P||e("pick",a.parsedValue,L)},N=L=>{if(!a.visible)return;const P=Q(L).millisecond(0);e("pick",P,!0)},T=(L,P)=>{e("select-range",L,P),p.value=[L,P]},V=L=>{const P=[0,3].concat(y.value?[6]:[]),A=["hours","minutes"].concat(y.value?["seconds"]:[]),R=(P.indexOf(p.value[0])+L+P.length)%P.length;U.start_emitSelectRange(A[R])},Y=L=>{const P=L.code,{left:A,right:$,up:R,down:j}=Re;if([A,$].includes(P)){V(P===A?-1:1),L.preventDefault();return}if([R,j].includes(P)){const C=P===R?-1:1;U.start_scrollDown(C),L.preventDefault();return}},{timePickerOptions:U,onSetOption:M,getAvailableTime:X}=On({getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:S}),Q=L=>X(L,a.datetimeRole||"",!0),K=L=>L?z(L,a.format).locale(O.value):null,ae=L=>L?L.format(a.format):null,se=()=>z(k).locale(O.value);return e("set-picker-option",["isValidValue",F]),e("set-picker-option",["formatToString",ae]),e("set-picker-option",["parseUserInput",K]),e("set-picker-option",["handleKeydownInput",Y]),e("set-picker-option",["getRangeAvailableTime",Q]),e("set-picker-option",["getDefaultValue",se]),(L,P)=>(_(),Ae(Bn,{name:h.value},{default:Ue(()=>[L.actualVisible||L.visible?(_(),W("div",{key:0,class:D(n(x).b("panel"))},[G("div",{class:D([n(x).be("panel","content"),{"has-seconds":y.value}])},[ie(ea,{ref:"spinner",role:L.datetimeRole||"start","arrow-control":n(s),"show-seconds":y.value,"am-pm-mode":u.value,"spinner-date":L.parsedValue,"disabled-hours":n(l),"disabled-minutes":n(i),"disabled-seconds":n(v),onChange:N,onSetOption:n(M),onSelectRange:T},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),G("div",{class:D(n(x).be("panel","footer"))},[G("button",{type:"button",class:D([n(x).be("panel","btn"),"cancel"]),onClick:w}," Cancelar ",2),G("button",{type:"button",class:D([n(x).be("panel","btn"),"confirm"]),onClick:P[0]||(P[0]=A=>E())}," Ok ",2)],2)],2)):me("",!0)]),_:1},8,["name"]))}});Nn.__docgenInfo={exportName:"default",displayName:"panel-time-pick",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-pick.vue"]};const Fs=De({...En,parsedValue:{type:ue(Array)}}),Vs=["disabled"],Ln=$e({__name:"panel-time-range",props:Fs,emits:["pick","select-range","set-picker-option"],setup(r,{emit:t}){const a=r,e=t,o=(ee,te)=>{const ce=[];for(let B=ee;B<=te;B++)ce.push(B);return ce},{lang:s}=He(),l=Pe("time"),i=Pe("picker"),v=Ye("EP_PICKER_BASE"),{arrowControl:k,disabledHours:m,disabledMinutes:d,disabledSeconds:S,defaultValue:x}=v.props,O=I(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",k),F.value?"has-seconds":""]),p=I(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",k),F.value?"has-seconds":""]),f=I(()=>a.parsedValue[0]),h=I(()=>a.parsedValue[1]),y=An(a),u=()=>{e("pick",y.value,!1)},F=I(()=>a.format.includes("ss")),w=I(()=>a.format.includes("A")?"A":a.format.includes("a")?"a":""),E=(ee=!1)=>{e("pick",[f.value,h.value],ee)},N=ee=>{Y(ee.millisecond(0),h.value)},T=ee=>{Y(f.value,ee.millisecond(0))},V=ee=>{const te=ee.map(B=>z(B).locale(s.value)),ce=$(te);return te[0].isSame(ce[0])&&te[1].isSame(ce[1])},Y=(ee,te)=>{a.visible&&e("pick",[ee,te],!0)},U=I(()=>f.value>h.value),M=H([0,2]),X=(ee,te)=>{e("select-range",ee,te,"min"),M.value=[ee,te]},Q=I(()=>F.value?11:8),K=(ee,te)=>{e("select-range",ee,te,"max");const ce=n(Q);M.value=[ee+ce,te+ce]},ae=ee=>{const te=F.value?[0,3,6,11,14,17]:[0,3,8,11],ce=["hours","minutes"].concat(F.value?["seconds"]:[]),le=(te.indexOf(M.value[0])+ee+te.length)%te.length,de=te.length/2;le<de?q.start_emitSelectRange(ce[le]):q.end_emitSelectRange(ce[le-de])},se=ee=>{const te=ee.code,{left:ce,right:B,up:le,down:de}=Re;if([ce,B].includes(te)){ae(te===ce?-1:1),ee.preventDefault();return}if([le,de].includes(te)){const ke=te===le?-1:1,xe=M.value[0]<Q.value?"start":"end";q[`${xe}_scrollDown`](ke),ee.preventDefault();return}},L=(ee,te)=>{const ce=m?m(ee):[],B=ee==="start",de=(te||(B?h.value:f.value)).hour(),ke=B?o(de+1,23):o(0,de-1);return sa(ce,ke)},P=(ee,te,ce)=>{const B=d?d(ee,te):[],le=te==="start",de=ce||(le?h.value:f.value),ke=de.hour();if(ee!==ke)return B;const xe=de.minute(),Ve=le?o(xe+1,59):o(0,xe-1);return sa(B,Ve)},A=(ee,te,ce,B)=>{const le=S?S(ee,te,ce):[],de=ce==="start",ke=B||(de?h.value:f.value),xe=ke.hour(),Ve=ke.minute();if(ee!==xe||te!==Ve)return le;const Ne=ke.second(),Xe=de?o(Ne+1,59):o(0,Ne-1);return sa(le,Xe)},$=([ee,te])=>[Z(ee,"start",!0,te),Z(te,"end",!1,ee)],{getAvailableHours:R,getAvailableMinutes:j,getAvailableSeconds:C}=Tn(L,P,A),{timePickerOptions:q,getAvailableTime:Z,onSetOption:oe}=On({getAvailableHours:R,getAvailableMinutes:j,getAvailableSeconds:C}),Ce=ee=>ee?he(ee)?ee.map(te=>z(te,a.format).locale(s.value)):z(ee,a.format).locale(s.value):null,Te=ee=>ee?he(ee)?ee.map(te=>te.format(a.format)):ee.format(a.format):null,_e=()=>{if(he(x))return x.map(te=>z(te).locale(s.value));const ee=z(x).locale(s.value);return[ee,ee.add(60,"m")]};return e("set-picker-option",["formatToString",Te]),e("set-picker-option",["parseUserInput",Ce]),e("set-picker-option",["isValidValue",V]),e("set-picker-option",["handleKeydownInput",se]),e("set-picker-option",["getDefaultValue",_e]),e("set-picker-option",["getRangeAvailableTime",$]),(ee,te)=>ee.actualVisible?(_(),W("div",{key:0,class:D([n(l).b("range-picker"),n(i).b("panel")])},[G("div",{class:D(n(l).be("range-picker","content"))},[G("div",{class:D(n(l).be("range-picker","cell"))},[G("div",{class:D(n(l).be("range-picker","header"))},"Inicio",2),G("div",{class:D(O.value)},[ie(ea,{ref:"minSpinner",role:"start","show-seconds":F.value,"am-pm-mode":w.value,"arrow-control":n(k),"spinner-date":f.value,"disabled-hours":L,"disabled-minutes":P,"disabled-seconds":A,onChange:N,onSetOption:n(oe),onSelectRange:X},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),G("div",{class:D(n(l).be("range-picker","cell"))},[G("div",{class:D(n(l).be("range-picker","header"))},"Fin",2),G("div",{class:D(p.value)},[ie(ea,{ref:"maxSpinner",role:"end","show-seconds":F.value,"am-pm-mode":w.value,"arrow-control":n(k),"spinner-date":h.value,"disabled-hours":L,"disabled-minutes":P,"disabled-seconds":A,onChange:T,onSetOption:n(oe),onSelectRange:K},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),G("div",{class:D(n(l).be("panel","footer"))},[G("button",{type:"button",class:D([n(l).be("panel","btn"),"cancel"]),onClick:te[0]||(te[0]=ce=>u())}," Cancelar ",2),G("button",{type:"button",class:D([n(l).be("panel","btn"),"confirm"]),disabled:U.value,onClick:te[1]||(te[1]=ce=>E())}," Ok ",10,Vs)],2)],2)):me("",!0)}});Ln.__docgenInfo={exportName:"default",displayName:"panel-time-range",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-range.vue"]};z.extend(cn);const Is=$e({name:"GTimePicker",install:null,props:{...Fn,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,t){const a=H(),[e,o]=r.isRange?["timerange",Ln]:["time",Nn],s=l=>t.emit("update:modelValue",l);return Dt("ElPopperOptions",r.popperOptions),t.expose({focus:()=>{a.value?.focus()},blur:()=>{a.value?.blur()},handleOpen:()=>{a.value?.handleOpen()},handleClose:()=>{a.value?.handleClose()}}),()=>{const l=r.format??Ds;return kt(kt(In,{...r,ref:a,type:e,format:l,"onUpdate:modelValue":s},{default:i=>kt(o,{...i})}))}}}),Os=na(Is),Ml={title:"Form/Form",component:ot,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
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
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},Yt={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:pt,GConfigProvider:dt,GButton:mt,GSelect:sr,GRadio:lr,GCheckbox:ir,GSegmented:Aa,GDatePicker:ws,GTimePicker:Os},setup(){const r=H(),t=Qe({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1,preferredContact:"",birthDate:"",appointmentDate:"",appointmentTime:""}),a=[{label:"Email",value:"email"},{label:"Teléfono",value:"phone"},{label:"WhatsApp",value:"whatsapp"}],e=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],o={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},s=I(()=>t.country?o[t.country]||[]:[]);Fe(()=>t.country,()=>{t.city=""});const l=d=>d.getTime()>Date.now(),i=d=>d.getTime()<Date.now(),v={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(d,S,x)=>{S===!0?x():x(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}],preferredContact:[{validator:(d,S,x)=>{S||x(new Error("Debe seleccionar un método de contacto preferido")),x()},type:"boolean",trigger:"change"}],birthDate:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:"change"}],appointmentDate:[{required:!0,message:"La fecha de cita es requerida",trigger:"change"}],appointmentTime:[{required:!0,message:"La hora de cita es requerida",trigger:"change"}]};async function k(){if(r.value)try{await r.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",t)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(d){console.error("Validation error:",d)}}function m(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,countries:e,availableCities:s,rules:v,contactOptions:a,disableFutureDates:l,disablePastDates:i,GSegmented:Aa,handleSubmit:k,handleReset:m}},template:`
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
    `})},_t={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del formulario con validaciones."}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:pt,GConfigProvider:dt,GButton:mt},setup(){const r=H(),t=Qe({nombre:"",email:""}),a={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Email inválido",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((s,l)=>{s?console.log("submit!",l):console.log("error submit!"+l)})}async function o(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:a,handleSubmit:e,handleReset:o}},template:`
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
    `})},Bt={name:"Reglas Personalizadas",parameters:{docs:{description:{story:`Las reglas de validación pueden ser personalizadas usando funciones validadoras. Por ejemplo, para validar la edad de un usuario:

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

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:pt,GConfigProvider:dt,GButton:mt},setup(){const r=H(),t=Qe({pass:"",checkPass:"",age:""}),s={pass:[{validator:(v,k,m)=>{k===""?m(new Error("Ingrese una contraseña")):(t.checkPass!==""&&r.value?.validateField("checkPass"),m())},trigger:"blur"}],checkPass:[{validator:(v,k,m)=>{k===""?m(new Error("Confirme su contraseña")):k!==t.pass?m(new Error("Las contraseñas no coinciden")):m()},trigger:"blur"}],age:[{validator:(v,k,m)=>{if(!k)return m(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(k))?Number(k)<18?m(new Error("La edad debe ser mayor a 18")):m():m(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function l(){r.value&&await r.value.validate((v,k)=>{v?console.log("submit!",t):console.log("error submit!",k)})}async function i(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:s,handleSubmit:l,handleReset:i}},template:`
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
    `})},jt={name:"Tipo de ejecución",parameters:{docs:{description:{story:`La validación de campos puede realizarse de dos formas:

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

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:pt,GConfigProvider:dt,GButton:mt},setup(){const r=H(),t=Qe({email:"",password:""}),a={email:[{required:!0,message:"El email es requerido",trigger:"change"},{type:"email",message:"Ingrese un email válido",trigger:"change"}],password:[{required:!0,message:"La contraseña es requerida",trigger:"blur"},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((s,l)=>{s?console.log("submit!",l):console.log("error submit!"+l)})}async function o(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:a,handleSubmit:e,handleReset:o}},template:`
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
    `})},Gt={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:pt,GConfigProvider:dt,GButton:mt},setup(){return{formData:Qe({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
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
    `})},Ht={name:"Prevenir Submit",parameters:{docs:{description:{story:`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

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
`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:pt,GConfigProvider:dt,GButton:mt},setup(){const r=H(),t=Qe({usuario:"",clave:""}),a={usuario:[{required:!0,message:"El usuario es requerido",trigger:"blur"}],clave:[{required:!0,message:"La clave es requerida",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((o,s)=>{o?alert("submit!"):console.log("error submit!",s)})}return{formRef:r,formData:t,rules:a,handleSubmit:e}},template:`
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
    `})},Ut={name:"Validación Dinámica",parameters:{docs:{description:{story:`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

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
`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:pt,GConfigProvider:dt,GButton:mt},setup(){const r=H(),t=Qe({domains:[{key:1,value:""}],email:""}),a=l=>{const i=t.domains.indexOf(l);i!==-1&&t.domains.splice(i,1)},e=()=>{t.domains.push({key:Date.now(),value:""})};async function o(){r.value&&await r.value.validate((l,i)=>{l?console.log("submit!",t):console.log("error submit!",i)})}async function s(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,handleSubmit:o,handleReset:s,addDomain:e,removeDomain:a}},template:`
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
    `})};Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
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
}`,...Yt.parameters?.docs?.source}}};_t.parameters={..._t.parameters,docs:{..._t.parameters?.docs,source:{originalSource:`{
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
}`,..._t.parameters?.docs?.source}}};Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`{
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
}`,...Bt.parameters?.docs?.source}}};jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`{
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
}`,...jt.parameters?.docs?.source}}};Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`{
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
}`,...Gt.parameters?.docs?.source}}};Ht.parameters={...Ht.parameters,docs:{...Ht.parameters?.docs,source:{originalSource:`{
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
}`,...Ht.parameters?.docs?.source}}};Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`{
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
}`,...Ut.parameters?.docs?.source}}};const Rl=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];export{Yt as CompleteForm,Bt as CustomRules,Gt as DisabledForm,Ut as DynamicValidation,Ht as PreventSubmit,_t as Primary,jt as TriggerValidation,Rl as __namedExportsOrder,Ml as default};
