import{V as ve,J as oa,d as $e,c as O,w as Oe,E as yt,H as Qe,a3 as Ha,x as Z,s as pe,l as M,u as n,G as Ft,e as j,r as U,o as Ua,a as _e,C as Ka,k as B,m as me,D as je,y as ge,_ as $n,$ as Tn,a0 as Je,F as Re,z as Ne,h as oe,a1 as kt,Q as ba,R as ya,W as ze,j as qe,v as nt,b as Le,g as za,f as He,A as ht,K as bt,an as Ma,n as Mt,p as sa,ad as Ra,T as An}from"./vue.esm-bundler-CZI_JUT2.js";import{y as Nn,s as xe,o as ue,u as Pe,w as ka,E as _n,a1 as Wa,g as Za,a as qn,v as Ln}from"./install-C7bOSp5T.js";import{c as la}from"./castArray-WqZ4o0G1.js";import{d as ia}from"./error-Cq9Fpw4b.js";import{u as Yn}from"./index-D20av3B9.js";import{c as Fa,G as jn}from"./index-CM9gqEks.js";import{h as Xt,c as Ge,b as Bn,d as Gn,G as ct}from"./ConfigProvider-B2uDERVM.js";import{r as Hn}from"./index-D6D0kIi1.js";import{G as dt}from"./index-BHjbj_g8.js";import{G as mt}from"./index-BOtKZNlD.js";import{p as Un,G as Kn}from"./index-BwdsG85S.js";import{a as zn}from"./index-DfLXQ4C3.js";import{a as Wn}from"./index-DZQKRl3R.js";import{G as Ea}from"./index-CdZeUBOs.js";import{a as Zn,P as Jn,d as H,s as Ja,U as ua,l as Qa,r as Xa,o as Qn,E as Xn,B as er,q as tr,v as Va,b as ea}from"./index-DzzlSgFR.js";import{c as tt,g as rt}from"./_commonjsHelpers-Cpj98o6Y.js";import{r as it}from"./index-Cj3TRcXy.js";import{Z as ye}from"./index-BMYGAyev.js";import{Q as ar,b as nr}from"./index-BIcCnpGr.js";import{f as rr,u as or}from"./index-CM0fh8S4.js";import{_ as sr}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{h as Ut,g as lr}from"./style-B2JIj3vT.js";import{C as ca}from"./index-CizK5Wad.js";import{E as Me}from"./index-C3cfOdOs.js";import{y as Ia}from"./index-CchYujlp.js";import{u as en,o as ir,b as ur}from"./index-CCbAt6xy.js";import{c as cr}from"./index-DVGKiGqZ.js";import{u as dr}from"./index-yUHprlUH.js";import{u as tn}from"./index-C_YW5NV5.js";import{i as mr}from"./isEqual-CIYKqIyx.js";import{d as fr}from"./debounce-9Qq9RB59.js";import"./index-CfPCKyCs.js";import"./_initCloneObject-CrZ1rfbP.js";import"./_arrayPush-D8-dhSAr.js";import"./event-BB_Ol6Sd.js";import"./typescript-Bp3YSIOJ.js";import"./index-DGNdWo9w.js";import"./content-Cihr8fjf.js";import"./index-CoWu1XqS.js";import"./dynamic-size-list-BoYHV5f7.js";import"./raf-DXn4EPYr.js";import"./index-B_lUqMeV.js";import"./util-B2mB0_6C.js";import"./icon-Dv3CPQKY.js";import"./use-form-common-props-PM75mgwN.js";import"./constants-Dnj8X3EN.js";import"./isArrayLikeObject-B7EON3CA.js";import"./index-eeIH5ydm.js";import"./index-D8T8Dyp1.js";import"./use-form-item-Dd7WcJgM.js";var an={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e,o){var l=e.prototype,s=function(d){return d&&(d.indexOf?d:d.s)},i=function(d,P,D,I,p){var f=d.name?d:d.$locale(),h=s(f[P]),y=s(f[D]),c=h||y.map(function(w){return w.slice(0,I)});if(!p)return c;var V=f.weekStart;return c.map(function(w,F){return c[(F+(V||0))%7]})},g=function(){return o.Ls[o.locale()]},k=function(d,P){return d.formats[P]||function(D){return D.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(I,p,f){return p||f.slice(1)})}(d.formats[P.toUpperCase()])},m=function(){var d=this;return{months:function(P){return P?P.format("MMMM"):i(d,"months")},monthsShort:function(P){return P?P.format("MMM"):i(d,"monthsShort","months",3)},firstDayOfWeek:function(){return d.$locale().weekStart||0},weekdays:function(P){return P?P.format("dddd"):i(d,"weekdays")},weekdaysMin:function(P){return P?P.format("dd"):i(d,"weekdaysMin","weekdays",2)},weekdaysShort:function(P){return P?P.format("ddd"):i(d,"weekdaysShort","weekdays",3)},longDateFormat:function(P){return k(d.$locale(),P)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};l.localeData=function(){return m.bind(this)()},o.localeData=function(){var d=g();return{firstDayOfWeek:function(){return d.weekStart||0},weekdays:function(){return o.weekdays()},weekdaysShort:function(){return o.weekdaysShort()},weekdaysMin:function(){return o.weekdaysMin()},months:function(){return o.months()},monthsShort:function(){return o.monthsShort()},longDateFormat:function(P){return k(d,P)},meridiem:d.meridiem,ordinal:d.ordinal}},o.months=function(){return i(g(),"months")},o.monthsShort=function(){return i(g(),"monthsShort","months",3)},o.weekdays=function(d){return i(g(),"weekdays",null,null,d)},o.weekdaysShort=function(d){return i(g(),"weekdaysShort","weekdays",3,d)},o.weekdaysMin=function(d){return i(g(),"weekdaysMin","weekdays",2,d)}}})})(an);var pr=an.exports;const vr=rt(pr),gr=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],Ye=r=>!r&&r!==0?[]:ve(r)?r:[r];var nn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,o=/\d/,l=/\d\d/,s=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,g={},k=function(f){return(f=+f)+(f>68?1900:2e3)},m=function(f){return function(h){this[f]=+h}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=function(h){if(!h||h==="Z")return 0;var y=h.match(/([+-]|\d\d)/g),c=60*y[1]+(+y[2]||0);return c===0?0:y[0]==="+"?-c:c}(f)}],P=function(f){var h=g[f];return h&&(h.indexOf?h:h.s.concat(h.f))},D=function(f,h){var y,c=g.meridiem;if(c){for(var V=1;V<=24;V+=1)if(f.indexOf(c(V,0,h))>-1){y=V>12;break}}else y=f===(h?"pm":"PM");return y},I={A:[i,function(f){this.afternoon=D(f,!1)}],a:[i,function(f){this.afternoon=D(f,!0)}],Q:[o,function(f){this.month=3*(f-1)+1}],S:[o,function(f){this.milliseconds=100*+f}],SS:[l,function(f){this.milliseconds=10*+f}],SSS:[/\d{3}/,function(f){this.milliseconds=+f}],s:[s,m("seconds")],ss:[s,m("seconds")],m:[s,m("minutes")],mm:[s,m("minutes")],H:[s,m("hours")],h:[s,m("hours")],HH:[s,m("hours")],hh:[s,m("hours")],D:[s,m("day")],DD:[l,m("day")],Do:[i,function(f){var h=g.ordinal,y=f.match(/\d+/);if(this.day=y[0],h)for(var c=1;c<=31;c+=1)h(c).replace(/\[|\]/g,"")===f&&(this.day=c)}],w:[s,m("week")],ww:[l,m("week")],M:[s,m("month")],MM:[l,m("month")],MMM:[i,function(f){var h=P("months"),y=(P("monthsShort")||h.map(function(c){return c.slice(0,3)})).indexOf(f)+1;if(y<1)throw new Error;this.month=y%12||y}],MMMM:[i,function(f){var h=P("months").indexOf(f)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,m("year")],YY:[l,function(f){this.year=k(f)}],YYYY:[/\d{4}/,m("year")],Z:d,ZZ:d};function p(f){var h,y;h=f,y=g&&g.formats;for(var c=(f=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(_,G,R){var ee=R&&R.toUpperCase();return G||y[R]||a[R]||y[ee].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(J,K,ae){return K||ae.slice(1)})})).match(e),V=c.length,w=0;w<V;w+=1){var F=c[w],N=I[F],T=N&&N[0],E=N&&N[1];c[w]=E?{regex:T,parser:E}:F.replace(/^\[|\]$/g,"")}return function(_){for(var G={},R=0,ee=0;R<V;R+=1){var J=c[R];if(typeof J=="string")ee+=J.length;else{var K=J.regex,ae=J.parser,se=_.slice(ee),q=K.exec(se)[0];ae.call(G,q),_=_.replace(q,"")}}return function(S){var A=S.afternoon;if(A!==void 0){var $=S.hours;A?$<12&&(S.hours+=12):$===12&&(S.hours=0),delete S.afternoon}}(G),G}}return function(f,h,y){y.p.customParseFormat=!0,f&&f.parseTwoDigitYear&&(k=f.parseTwoDigitYear);var c=h.prototype,V=c.parse;c.parse=function(w){var F=w.date,N=w.utc,T=w.args;this.$u=N;var E=T[1];if(typeof E=="string"){var _=T[2]===!0,G=T[3]===!0,R=_||G,ee=T[2];G&&(ee=T[2]),g=this.$locale(),!_&&ee&&(g=y.Ls[ee]),this.$d=function(se,q,S,A){try{if(["x","X"].indexOf(q)>-1)return new Date((q==="X"?1e3:1)*se);var $=p(q)(se),C=$.year,Y=$.month,x=$.day,L=$.hours,W=$.minutes,re=$.seconds,Fe=$.milliseconds,Ae=$.zone,Ue=$.week,Q=new Date,X=x||(C||Y?1:Q.getDate()),le=C||Q.getFullYear(),ie=0;C&&!Y||(ie=Y>0?Y-1:Q.getMonth());var be,fe=L||0,ke=W||0,De=re||0,Ee=Fe||0;return Ae?new Date(Date.UTC(le,ie,X,fe,ke,De,Ee+60*Ae.offset*1e3)):S?new Date(Date.UTC(le,ie,X,fe,ke,De,Ee)):(be=new Date(le,ie,X,fe,ke,De,Ee),Ue&&(be=A(be).week(Ue).toDate()),be)}catch{return new Date("")}}(F,E,N,y),this.init(),ee&&ee!==!0&&(this.$L=this.locale(ee).$L),R&&F!=this.format(E)&&(this.$d=new Date("")),g={}}else if(E instanceof Array)for(var J=E.length,K=1;K<=J;K+=1){T[1]=E[K-1];var ae=y.apply(this,T);if(ae.isValid()){this.$d=ae.$d,this.$L=ae.$L,this.init();break}K===J&&(this.$d=new Date(""))}else V.call(this,w)}}})})(nn);var hr=nn.exports;const rn=rt(hr);var on={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){var o=e.prototype,l=o.format;o.format=function(s){var i=this,g=this.$locale();if(!this.isValid())return l.bind(this)(s);var k=this.$utils(),m=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(d){switch(d){case"Q":return Math.ceil((i.$M+1)/3);case"Do":return g.ordinal(i.$D);case"gggg":return i.weekYear();case"GGGG":return i.isoWeekYear();case"wo":return g.ordinal(i.week(),"W");case"w":case"ww":return k.s(i.week(),d==="w"?1:2,"0");case"W":case"WW":return k.s(i.isoWeek(),d==="W"?1:2,"0");case"k":case"kk":return k.s(String(i.$H===0?24:i.$H),d==="k"?1:2,"0");case"X":return Math.floor(i.$d.getTime()/1e3);case"x":return i.$d.getTime();case"z":return"["+i.offsetName()+"]";case"zzz":return"["+i.offsetName("long")+"]";default:return d}});return l.bind(this)(m)}}})})(on);var br=on.exports;const yr=rt(br);var sn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){var a="week",e="year";return function(o,l,s){var i=l.prototype;i.week=function(g){if(g===void 0&&(g=null),g!==null)return this.add(7*(g-this.week()),"day");var k=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var m=s(this).startOf(e).add(1,e).date(k),d=s(this).endOf(a);if(m.isBefore(d))return 1}var P=s(this).startOf(e).date(k).startOf(a).subtract(1,"millisecond"),D=this.diff(P,a,!0);return D<0?s(this).startOf("week").week():Math.ceil(D)},i.weeks=function(g){return g===void 0&&(g=null),this.week(g)}}})})(sn);var kr=sn.exports;const wr=rt(kr);var ln={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.weekYear=function(){var o=this.month(),l=this.week(),s=this.year();return l===1&&o===11?s+1:o===0&&l>=52?s-1:s}}})})(ln);var Dr=ln.exports;const Sr=rt(Dr);var un={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e,o){e.prototype.dayOfYear=function(l){var s=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return l==null?s:this.add(l-s,"day")}}})})(un);var xr=un.exports;const Pr=rt(xr);var cn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.isSameOrAfter=function(o,l){return this.isSame(o,l)||this.isAfter(o,l)}}})})(cn);var Cr=cn.exports;const Mr=rt(Cr);var dn={exports:{}};(function(r,t){(function(a,e){r.exports=e()})(tt,function(){return function(a,e){e.prototype.isSameOrBefore=function(o,l){return this.isSame(o,l)||this.isBefore(o,l)}}})})(dn);var Rr=dn.exports;const Fr=rt(Rr);function ut(){return ut=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(r[e]=a[e])}return r},ut.apply(this,arguments)}function Er(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,Et(r,t)}function da(r){return da=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},da(r)}function Et(r,t){return Et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},Et(r,t)}function Vr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ht(r,t,a){return Vr()?Ht=Reflect.construct.bind():Ht=function(o,l,s){var i=[null];i.push.apply(i,l);var g=Function.bind.apply(o,i),k=new g;return s&&Et(k,s.prototype),k},Ht.apply(null,arguments)}function Ir(r){return Function.toString.call(r).indexOf("[native code]")!==-1}function ma(r){var t=typeof Map=="function"?new Map:void 0;return ma=function(e){if(e===null||!Ir(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return Ht(e,arguments,da(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Et(o,e)},ma(r)}var Or=/%[sdj%]/g,$r=function(){};function fa(r){if(!r||!r.length)return null;var t={};return r.forEach(function(a){var e=a.field;t[e]=t[e]||[],t[e].push(a)}),t}function Be(r){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var o=0,l=a.length;if(typeof r=="function")return r.apply(null,a);if(typeof r=="string"){var s=r.replace(Or,function(i){if(i==="%%")return"%";if(o>=l)return i;switch(i){case"%s":return String(a[o++]);case"%d":return Number(a[o++]);case"%j":try{return JSON.stringify(a[o++])}catch{return"[Circular]"}break;default:return i}});return s}return r}function Tr(r){return r==="string"||r==="url"||r==="hex"||r==="email"||r==="date"||r==="pattern"}function Ie(r,t){return!!(r==null||t==="array"&&Array.isArray(r)&&!r.length||Tr(t)&&typeof r=="string"&&!r)}function Ar(r,t,a){var e=[],o=0,l=r.length;function s(i){e.push.apply(e,i||[]),o++,o===l&&a(e)}r.forEach(function(i){t(i,s)})}function Oa(r,t,a){var e=0,o=r.length;function l(s){if(s&&s.length){a(s);return}var i=e;e=e+1,i<o?t(r[i],l):a([])}l([])}function Nr(r){var t=[];return Object.keys(r).forEach(function(a){t.push.apply(t,r[a]||[])}),t}var $a=function(r){Er(t,r);function t(a,e){var o;return o=r.call(this,"Async Validation Error")||this,o.errors=a,o.fields=e,o}return t}(ma(Error));function _r(r,t,a,e,o){if(t.first){var l=new Promise(function(P,D){var I=function(h){return e(h),h.length?D(new $a(h,fa(h))):P(o)},p=Nr(r);Oa(p,a,I)});return l.catch(function(P){return P}),l}var s=t.firstFields===!0?Object.keys(r):t.firstFields||[],i=Object.keys(r),g=i.length,k=0,m=[],d=new Promise(function(P,D){var I=function(f){if(m.push.apply(m,f),k++,k===g)return e(m),m.length?D(new $a(m,fa(m))):P(o)};i.length||(e(m),P(o)),i.forEach(function(p){var f=r[p];s.indexOf(p)!==-1?Oa(f,a,I):Ar(f,a,I)})});return d.catch(function(P){return P}),d}function qr(r){return!!(r&&r.message!==void 0)}function Lr(r,t){for(var a=r,e=0;e<t.length;e++){if(a==null)return a;a=a[t[e]]}return a}function Ta(r,t){return function(a){var e;return r.fullFields?e=Lr(t,r.fullFields):e=t[a.field||r.fullField],qr(a)?(a.field=a.field||r.fullField,a.fieldValue=e,a):{message:typeof a=="function"?a():a,fieldValue:e,field:a.field||r.fullField}}}function Aa(r,t){if(t){for(var a in t)if(t.hasOwnProperty(a)){var e=t[a];typeof e=="object"&&typeof r[a]=="object"?r[a]=ut({},r[a],e):r[a]=e}}return r}var mn=function(t,a,e,o,l,s){t.required&&(!e.hasOwnProperty(t.field)||Ie(a,s||t.type))&&o.push(Be(l.messages.required,t.fullField))},Yr=function(t,a,e,o,l){(/^\s+$/.test(a)||a==="")&&o.push(Be(l.messages.whitespace,t.fullField))},Ot,jr=function(){if(Ot)return Ot;var r="[a-fA-F\\d:]",t=function(V){return V&&V.includeBoundaries?"(?:(?<=\\s|^)(?="+r+")|(?<="+r+")(?=\\s|$))":""},a="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",e="[a-fA-F\\d]{1,4}",o=(`
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
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),l=new RegExp("(?:^"+a+"$)|(?:^"+o+"$)"),s=new RegExp("^"+a+"$"),i=new RegExp("^"+o+"$"),g=function(V){return V&&V.exact?l:new RegExp("(?:"+t(V)+a+t(V)+")|(?:"+t(V)+o+t(V)+")","g")};g.v4=function(c){return c&&c.exact?s:new RegExp(""+t(c)+a+t(c),"g")},g.v6=function(c){return c&&c.exact?i:new RegExp(""+t(c)+o+t(c),"g")};var k="(?:(?:[a-z]+:)?//)",m="(?:\\S+(?::\\S*)?@)?",d=g.v4().source,P=g.v6().source,D="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",I="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",p="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",f="(?::\\d{2,5})?",h='(?:[/?#][^\\s"]*)?',y="(?:"+k+"|www\\.)"+m+"(?:localhost|"+d+"|"+P+"|"+D+I+p+")"+f+h;return Ot=new RegExp("(?:^"+y+"$)","i"),Ot},Na={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Ct={integer:function(t){return Ct.number(t)&&parseInt(t,10)===t},float:function(t){return Ct.number(t)&&!Ct.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!Ct.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(Na.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(jr())},hex:function(t){return typeof t=="string"&&!!t.match(Na.hex)}},Br=function(t,a,e,o,l){if(t.required&&a===void 0){mn(t,a,e,o,l);return}var s=["integer","float","array","regexp","object","method","email","number","date","url","hex"],i=t.type;s.indexOf(i)>-1?Ct[i](a)||o.push(Be(l.messages.types[i],t.fullField,t.type)):i&&typeof a!==t.type&&o.push(Be(l.messages.types[i],t.fullField,t.type))},Gr=function(t,a,e,o,l){var s=typeof t.len=="number",i=typeof t.min=="number",g=typeof t.max=="number",k=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,m=a,d=null,P=typeof a=="number",D=typeof a=="string",I=Array.isArray(a);if(P?d="number":D?d="string":I&&(d="array"),!d)return!1;I&&(m=a.length),D&&(m=a.replace(k,"_").length),s?m!==t.len&&o.push(Be(l.messages[d].len,t.fullField,t.len)):i&&!g&&m<t.min?o.push(Be(l.messages[d].min,t.fullField,t.min)):g&&!i&&m>t.max?o.push(Be(l.messages[d].max,t.fullField,t.max)):i&&g&&(m<t.min||m>t.max)&&o.push(Be(l.messages[d].range,t.fullField,t.min,t.max))},gt="enum",Hr=function(t,a,e,o,l){t[gt]=Array.isArray(t[gt])?t[gt]:[],t[gt].indexOf(a)===-1&&o.push(Be(l.messages[gt],t.fullField,t[gt].join(", ")))},Ur=function(t,a,e,o,l){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(a)||o.push(Be(l.messages.pattern.mismatch,t.fullField,a,t.pattern));else if(typeof t.pattern=="string"){var s=new RegExp(t.pattern);s.test(a)||o.push(Be(l.messages.pattern.mismatch,t.fullField,a,t.pattern))}}},ce={required:mn,whitespace:Yr,type:Br,range:Gr,enum:Hr,pattern:Ur},Kr=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a,"string")&&!t.required)return e();ce.required(t,a,o,s,l,"string"),Ie(a,"string")||(ce.type(t,a,o,s,l),ce.range(t,a,o,s,l),ce.pattern(t,a,o,s,l),t.whitespace===!0&&ce.whitespace(t,a,o,s,l))}e(s)},zr=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),a!==void 0&&ce.type(t,a,o,s,l)}e(s)},Wr=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(a===""&&(a=void 0),Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),a!==void 0&&(ce.type(t,a,o,s,l),ce.range(t,a,o,s,l))}e(s)},Zr=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),a!==void 0&&ce.type(t,a,o,s,l)}e(s)},Jr=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),Ie(a)||ce.type(t,a,o,s,l)}e(s)},Qr=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),a!==void 0&&(ce.type(t,a,o,s,l),ce.range(t,a,o,s,l))}e(s)},Xr=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),a!==void 0&&(ce.type(t,a,o,s,l),ce.range(t,a,o,s,l))}e(s)},eo=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(a==null&&!t.required)return e();ce.required(t,a,o,s,l,"array"),a!=null&&(ce.type(t,a,o,s,l),ce.range(t,a,o,s,l))}e(s)},to=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),a!==void 0&&ce.type(t,a,o,s,l)}e(s)},ao="enum",no=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l),a!==void 0&&ce[ao](t,a,o,s,l)}e(s)},ro=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a,"string")&&!t.required)return e();ce.required(t,a,o,s,l),Ie(a,"string")||ce.pattern(t,a,o,s,l)}e(s)},oo=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a,"date")&&!t.required)return e();if(ce.required(t,a,o,s,l),!Ie(a,"date")){var g;a instanceof Date?g=a:g=new Date(a),ce.type(t,g,o,s,l),g&&ce.range(t,g.getTime(),o,s,l)}}e(s)},so=function(t,a,e,o,l){var s=[],i=Array.isArray(a)?"array":typeof a;ce.required(t,a,o,s,l,i),e(s)},ta=function(t,a,e,o,l){var s=t.type,i=[],g=t.required||!t.required&&o.hasOwnProperty(t.field);if(g){if(Ie(a,s)&&!t.required)return e();ce.required(t,a,o,i,l,s),Ie(a,s)||ce.type(t,a,o,i,l)}e(i)},lo=function(t,a,e,o,l){var s=[],i=t.required||!t.required&&o.hasOwnProperty(t.field);if(i){if(Ie(a)&&!t.required)return e();ce.required(t,a,o,s,l)}e(s)},Rt={string:Kr,method:zr,number:Wr,boolean:Zr,regexp:Jr,integer:Qr,float:Xr,array:eo,object:to,enum:no,pattern:ro,date:oo,url:ta,hex:ta,email:ta,required:so,any:lo};function pa(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var va=pa(),It=function(){function r(a){this.rules=null,this._messages=va,this.define(a)}var t=r.prototype;return t.define=function(e){var o=this;if(!e)throw new Error("Cannot configure a schema with no rules");if(typeof e!="object"||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach(function(l){var s=e[l];o.rules[l]=Array.isArray(s)?s:[s]})},t.messages=function(e){return e&&(this._messages=Aa(pa(),e)),this._messages},t.validate=function(e,o,l){var s=this;o===void 0&&(o={}),l===void 0&&(l=function(){});var i=e,g=o,k=l;if(typeof g=="function"&&(k=g,g={}),!this.rules||Object.keys(this.rules).length===0)return k&&k(null,i),Promise.resolve(i);function m(p){var f=[],h={};function y(V){if(Array.isArray(V)){var w;f=(w=f).concat.apply(w,V)}else f.push(V)}for(var c=0;c<p.length;c++)y(p[c]);f.length?(h=fa(f),k(f,h)):k(null,i)}if(g.messages){var d=this.messages();d===va&&(d=pa()),Aa(d,g.messages),g.messages=d}else g.messages=this.messages();var P={},D=g.keys||Object.keys(this.rules);D.forEach(function(p){var f=s.rules[p],h=i[p];f.forEach(function(y){var c=y;typeof c.transform=="function"&&(i===e&&(i=ut({},i)),h=i[p]=c.transform(h)),typeof c=="function"?c={validator:c}:c=ut({},c),c.validator=s.getValidationMethod(c),c.validator&&(c.field=p,c.fullField=c.fullField||p,c.type=s.getType(c),P[p]=P[p]||[],P[p].push({rule:c,value:h,source:i,field:p}))})});var I={};return _r(P,g,function(p,f){var h=p.rule,y=(h.type==="object"||h.type==="array")&&(typeof h.fields=="object"||typeof h.defaultField=="object");y=y&&(h.required||!h.required&&p.value),h.field=p.field;function c(F,N){return ut({},N,{fullField:h.fullField+"."+F,fullFields:h.fullFields?[].concat(h.fullFields,[F]):[F]})}function V(F){F===void 0&&(F=[]);var N=Array.isArray(F)?F:[F];!g.suppressWarning&&N.length&&r.warning("async-validator:",N),N.length&&h.message!==void 0&&(N=[].concat(h.message));var T=N.map(Ta(h,i));if(g.first&&T.length)return I[h.field]=1,f(T);if(!y)f(T);else{if(h.required&&!p.value)return h.message!==void 0?T=[].concat(h.message).map(Ta(h,i)):g.error&&(T=[g.error(h,Be(g.messages.required,h.field))]),f(T);var E={};h.defaultField&&Object.keys(p.value).map(function(R){E[R]=h.defaultField}),E=ut({},E,p.rule.fields);var _={};Object.keys(E).forEach(function(R){var ee=E[R],J=Array.isArray(ee)?ee:[ee];_[R]=J.map(c.bind(null,R))});var G=new r(_);G.messages(g.messages),p.rule.options&&(p.rule.options.messages=g.messages,p.rule.options.error=g.error),G.validate(p.value,p.rule.options||g,function(R){var ee=[];T&&T.length&&ee.push.apply(ee,T),R&&R.length&&ee.push.apply(ee,R),f(ee.length?ee:null)})}}var w;if(h.asyncValidator)w=h.asyncValidator(h,p.value,V,p.source,g);else if(h.validator){try{w=h.validator(h,p.value,V,p.source,g)}catch(F){console.error?.(F),g.suppressValidatorError||setTimeout(function(){throw F},0),V(F.message)}w===!0?V():w===!1?V(typeof h.message=="function"?h.message(h.fullField||h.field):h.message||(h.fullField||h.field)+" fails"):w instanceof Array?V(w):w instanceof Error&&V(w.message)}w&&w.then&&w.then(function(){return V()},function(F){return V(F)})},function(p){m(p)},i)},t.getType=function(e){if(e.type===void 0&&e.pattern instanceof RegExp&&(e.type="pattern"),typeof e.validator!="function"&&e.type&&!Rt.hasOwnProperty(e.type))throw new Error(Be("Unknown rule type %s",e.type));return e.type||"string"},t.getValidationMethod=function(e){if(typeof e.validator=="function")return e.validator;var o=Object.keys(e),l=o.indexOf("message");return l!==-1&&o.splice(l,1),o.length===1&&o[0]==="required"?Rt.required:Rt[this.getType(e)]||void 0},r}();It.register=function(t,a){if(typeof a!="function")throw new Error("Cannot register a validator by type, validator is not a function");Rt[t]=a};It.warning=$r;It.messages=va;It.validators=Rt;const fn=Symbol("formContextKey"),_a=Symbol("formItemContextKey"),io=xe({disabled:Boolean}),uo=xe({...io,model:Object,rules:{type:ue(Object)},validateOnRuleChange:{type:Boolean,default:!0},scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),co={validate:(r,t,a)=>(ve(r)||oa(r))&&Nn(t)&&oa(a)},$t=(r,t)=>{const a=la(t);return a.length>0?r.filter(e=>e.prop&&a.includes(e.prop)):r},mo="GForm",pn=$e({name:mo,__name:"Form",props:uo,emits:co,setup(r,{expose:t,emit:a}){const e=r,o=a,l=[],s=Pe("form"),i=y=>l.find(c=>c.prop===y),g=y=>{l.push(y)},k=y=>{y.prop&&l.splice(l.indexOf(y),1)},m=(y=[])=>{e.model&&$t(l,y).forEach(c=>c.resetField())},d=(y=[])=>{$t(l,y).forEach(c=>c.clearValidate())},P=O(()=>!!e.model),D=y=>{if(l.length===0)return[];const c=$t(l,y);return c.length?c:[]},I=async y=>f(void 0,y),p=async(y=[])=>{if(!P.value)return!1;const c=D(y);if(c.length===0)return!0;let V={};for(const w of c)try{await w.validate(""),w.validateState==="error"&&w.resetField()}catch(F){V={...V,...F}}return Object.keys(V).length===0?!0:Promise.reject(V)},f=async(y=[],c)=>{console.log("modelProps",y);const V=!Ft(c);try{const w=await p(y);return w===!0&&await c?.(w),w}catch(w){if(w instanceof Error)throw w;const F=w;return e.scrollToError&&h(Object.keys(F)[0]),await c?.(!1,F),V&&Promise.reject(F)}},h=y=>{const c=$t(l,y)[0];c&&c.$el?.scrollIntoView(e.scrollIntoViewOptions)};return Oe(()=>e.rules,()=>{e.validateOnRuleChange&&I().catch(y=>ia())},{deep:!0,flush:"post"}),yt(fn,Qe({...Ha(e),emit:o,resetFields:m,clearValidate:d,validateField:f,getField:i,addField:g,removeField:k})),t({validate:I,validateField:f,resetFields:m,clearValidate:d,scrollToField:h,fields:l}),(y,c)=>(j(),Z("form",{class:M(n(s).b())},[pe(y.$slots,"default")],2))}});pn.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},expose:[{name:"validate",tags:[{title:"description",content:"Validate the whole form. Receives a callback or returns `Promise`."}]},{name:"validateField",tags:[{title:"description",content:"Validate specified fields."}]},{name:"resetFields",tags:[{title:"description",content:"Reset specified fields and remove validation result."}]},{name:"clearValidate",tags:[{title:"description",content:"Clear validation message for specified fields."}]},{name:"scrollToField",tags:[{title:"description",content:"Scroll to the specified fields."}]},{name:"fields",tags:[{title:"description",content:"All fields context."}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/Form.vue"]};const fo=xe({prop:{type:ue([String,Array])},rules:{type:ue([Object,Array])},showMessage:{type:ue(String),default:"child"}}),wa=$e({name:"FormItem",__name:"form-item",props:fo,setup(r,{expose:t}){const a=r,e=_e(fn,void 0);_e(_a,void 0);const o=Pe("form-item"),l=Yn().value,s=U([]),i=U(""),g=Hn(i,100),k=U(""),m=U();let d,P=!1;const D=O(()=>[o.b(),o.is("error",i.value==="error"),o.is("validating",i.value==="validating"),o.is("success",i.value==="success")]),I=O(()=>a.prop?oa(a.prop)?a.prop:a.prop.join("."):""),p=O(()=>{const K=e?.model;if(!(!K||!a.prop))return Xt(K,a.prop).value}),f=O(()=>{const K=[];a.rules&&K.push(...la(a.rules));const ae=e?.rules;if(ae&&a.prop){const se=Xt(ae,a.prop).value;se&&K.push(...la(se))}return K}),h=O(()=>f.value.length>0),y=K=>f.value.filter(se=>!se.trigger||!K?!0:ve(se.trigger)?se.trigger.includes(K):se.trigger===K).map(({trigger:se,...q})=>q);O(()=>f.value.some(K=>K.required));const c=O(()=>g.value==="error"&&a.showMessage==="parent"),V=O(()=>g.value==="error"&&a.showMessage==="child"),w=K=>{i.value=K},F=K=>{const{errors:ae,fields:se}=K;(!ae||!se)&&console.error(K),w("error"),k.value=ae?ae?.[0]?.message??`${a.prop} es requerido`:"",e?.emit("validate",a.prop,!1,k.value)},N=()=>{w("success"),k.value="",e?.emit("validate",a.prop,!0,"")},T=async K=>{const ae=I.value;return new It({[ae]:K}).validate({[ae]:p.value},{firstFields:!0}).then(()=>(N(),!0)).catch(q=>(F(q),Promise.reject(q)))},E=async(K,ae)=>{if(P||!a.prop)return!1;const se=Ft(ae);if(!h.value)return ae?.(!1),!1;const q=y(K);return q.length===0?(ae?.(!0),!0):(w("validating"),T(q).then(()=>(ae?.(!0),!0)).catch(S=>{const{fields:A}=S;return ae?.(!1,A),se?!1:Promise.reject(A)}))},_=()=>{w(""),k.value="",P=!1},G=async()=>{const K=e?.model;if(!K||!a.prop)return;const ae=Xt(K,a.prop);P=!0,ae.value=Fa(d),await je(),_(),P=!1},R=K=>{s.value.includes(K)||s.value.push(K)},ee=K=>{s.value=s.value.filter(ae=>ae!==K)},J=Qe({...Ha(a),$el:m,validateState:i,inputIds:s,labelId:l,fieldValue:p,shouldShowError:c,shouldShowErrorChild:V,validateMessage:k,addInputId:R,removeInputId:ee,resetField:G,clearValidate:_,validate:E});return yt(_a,J),Ua(()=>{a.prop&&(e?.addField(J),d=Fa(p.value))}),Ka(()=>{e?.removeField(J)}),t({validateMessage:k,shouldShowError:c,shouldShowErrorChild:V,validateState:i,validate:E,clearValidate:_,resetField:G}),(K,ae)=>(j(),Z("div",{ref_key:"formItemRef",ref:m,class:M(D.value)},[pe(K.$slots,"default"),B("div",{class:M({[n(o).e("content-error")]:c.value})},[c.value?pe(K.$slots,"error",{key:0,error:k.value},()=>[B("span",{class:M(n(o).e("error"))},ge(k.value),3)]):me("",!0)],2)],2))}});wa.__docgenInfo={name:"FormItem",exportName:"default",displayName:"form-item",description:"",tags:{},expose:[{name:"validateMessage",tags:[{title:"description",content:"Validation message."}]},{name:"shouldShowError",tags:[{title:"description",content:"Whether to show error message in form item."}]},{name:"shouldShowErrorChild",tags:[{title:"description",content:"Whether to show error message in the child of form item."}]},{name:"validateState",tags:[{title:"description",content:"Validation state."}]},{name:"validate",tags:[{title:"description",content:"Validate form item."}]},{name:"clearValidate",tags:[{title:"description",content:"Remove validation status of the field."}]},{name:"resetField",tags:[{title:"description",content:"Reset current field and remove validation result."}]}],slots:[{name:"default"},{name:"error",scoped:!0,bindings:[{name:"error",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/form-item.vue"]};const ot=ka(pn,{FormItem:wa}),ft=_n(wa);var po={exports:{}};(function(r,t){(function(a,e){r.exports=e(Zn)})(tt,function(a){function e(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var o=e(a),l={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(s){return s+"º"}};return o.default.locale(l,null,!0),l})})(po);const Qt=Symbol(),vo=xe({...Jn,type:{type:ue(String),default:"date"}}),go=["date","dates","year","years","month","months","week","range"],Da=xe({disabledDate:{type:ue(Function)},date:{type:ue(Object),required:!0},minDate:{type:ue(Object)},maxDate:{type:ue(Object)},parsedValue:{type:ue([Object,Array])},rangeState:{type:ue(Object),default:()=>({endDate:null,selecting:!1})}}),vn=xe({type:{type:ue(String),required:!0,values:gr},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),Sa=xe({unlinkPanels:Boolean,parsedValue:{type:ue(Array)}}),xa=r=>({type:String,values:go,default:r}),ho=xe({...vn,parsedValue:{type:ue([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),wt=r=>{if(!ve(r))return!1;const[t,a]=r;return H.isDayjs(t)&&H.isDayjs(a)&&t.isSameOrBefore(a)},Pa=(r,{lang:t,unit:a,unlinkPanels:e})=>{let o;if(ve(r)){let[l,s]=r.map(i=>H(i).locale(t));return e||(s=l.add(1,a)),[l,s]}else r?o=H(r):o=H();return o=o.locale(t),[o,o.add(1,a)]},bo=(r,t,{columnIndexOffset:a,startDate:e,nextEndDate:o,now:l,unit:s,relativeDateGetter:i,setCellMetadata:g,setRowMetadata:k})=>{for(let m=0;m<r.row;m++){const d=t[m];for(let P=0;P<r.column;P++){let D=d[P+a];D||(D={row:m,column:P,type:"normal",inRange:!1,start:!1,end:!1});const I=m*r.column+P,p=i(I);D.dayjs=p,D.date=p.toDate(),D.timestamp=p.valueOf(),D.type="normal",D.inRange=!!(e&&p.isSameOrAfter(e,s)&&o&&p.isSameOrBefore(o,s))||!!(e&&p.isSameOrBefore(e,s)&&o&&p.isSameOrAfter(o,s)),e?.isSameOrAfter(o)?(D.start=!!o&&p.isSame(o,s),D.end=e&&p.isSame(e,s)):(D.start=!!e&&p.isSame(e,s),D.end=!!o&&p.isSame(o,s)),p.isSame(l,s)&&(D.type="today"),g?.(D,{rowIndex:m,columnIndex:P}),d[P+a]=D}k?.(d)}},Kt=(r,t,a)=>{const e=H().locale(a).startOf("month").month(t).year(r),o=e.daysInMonth();return Ja(o).map(l=>e.add(l,"day").toDate())},Vt=(r,t,a,e)=>{const o=H().year(r).month(t).startOf("month"),l=Kt(r,t,a).find(s=>!e?.(s));return l?H(l).locale(a):o.locale(a)},ga=(r,t,a)=>{const e=r.year();if(!a?.(r.toDate()))return r.locale(t);const o=r.month();if(!Kt(e,o,t).every(a))return Vt(e,o,t,a);for(let l=0;l<12;l++)if(!Kt(e,l,t).every(a))return Vt(e,l,t,a);return r},yo=xe({...Da,cellClassName:{type:ue(Function)},showWeekNumber:Boolean,selectionMode:xa("date")}),ko=["changerange","pick","select"],ha=(r="")=>["normal","today"].includes(r),wo=(r,t)=>{const{lang:a}=Ge(),e=U(),o=U(),l=U(),s=U(),i=U([[],[],[],[],[],[]]);let g=!1;const k=r.date.$locale().weekStart||7,m=r.date.locale("en").localeData().weekdaysShort().map(S=>S.toLowerCase()),d=O(()=>k>3?7-k:-k),P=O(()=>{const S=r.date.startOf("month");return S.subtract(S.day()||7,"day")}),D=O(()=>m.concat(m).slice(k,k+7)),I=O(()=>rr(n(V)).some(S=>S.isCurrent)),p=O(()=>{const S=r.date.startOf("month"),A=S.day()||7,$=S.daysInMonth(),C=S.subtract(1,"month").daysInMonth();return{startOfMonthDay:A,dateCountOfMonth:$,dateCountOfLastMonth:C}}),f=O(()=>r.selectionMode==="dates"?Ye(r.parsedValue):[]),h=(S,{count:A,rowIndex:$,columnIndex:C})=>{const{startOfMonthDay:Y,dateCountOfMonth:x,dateCountOfLastMonth:L}=n(p),W=n(d);if($>=0&&$<=1){const re=Y+W<0?7+Y+W:Y+W;if(C+$*7>=re)return S.text=A,!0;S.text=L-(re-C%7)+1+$*7,S.type="prev-month"}else return A<=x?S.text=A:(S.text=A-x,S.type="next-month"),!0;return!1},y=(S,{columnIndex:A,rowIndex:$},C)=>{const{disabledDate:Y,cellClassName:x}=r,L=n(f),W=h(S,{count:C,rowIndex:$,columnIndex:A}),re=S.dayjs.toDate();return S.selected=L.find(Fe=>Fe.isSame(S.dayjs,"day")),S.isSelected=!!S.selected,S.isCurrent=F(S),S.disabled=Y?.(re),S.customClass=x?.(re),W},c=S=>{if(r.selectionMode==="week"){const[A,$]=r.showWeekNumber?[1,7]:[0,6],C=q(S[A+1]);S[A].inRange=C,S[A].start=C,S[$].inRange=C,S[$].end=C}},V=O(()=>{const{minDate:S,maxDate:A,rangeState:$,showWeekNumber:C}=r,Y=n(d),x=n(i),L="day";let W=1;if(C)for(let re=0;re<6;re++)x[re][0]||(x[re][0]={type:"week",text:n(P).add(re*7+1,L).week()});return bo({row:6,column:7},x,{startDate:S,columnIndexOffset:C?1:0,nextEndDate:$.endDate||A||$.selecting&&S||null,now:H().locale(n(a)).startOf(L),unit:L,relativeDateGetter:re=>n(P).add(re-Y,L),setCellMetadata:(...re)=>{y(...re,W)&&(W+=1)},setRowMetadata:c}),x});Oe(()=>r.date,async()=>{n(e)?.contains(document.activeElement)&&(await je(),await w())});const w=async()=>n(o)?.focus(),F=S=>r.selectionMode==="date"&&ha(S.type)&&N(S,r.parsedValue),N=(S,A)=>A?H(A).locale(n(a)).isSame(r.date.date(Number(S.text)),"day"):!1,T=(S,A)=>{const $=S*7+(A-(r.showWeekNumber?1:0))-n(d);return n(P).add($,"day")},E=S=>{if(!r.rangeState.selecting)return;let A=S.target;if(A.tagName==="SPAN"&&(A=A.parentNode?.parentNode),A.tagName==="DIV"&&(A=A.parentNode),A.tagName!=="TD")return;const $=A.parentNode.rowIndex-1,C=A.cellIndex;n(V)[$][C].disabled||($!==n(l)||C!==n(s))&&(l.value=$,s.value=C,t("changerange",{selecting:!0,endDate:T($,C)}))},_=S=>!n(I)&&S?.text===1&&S.type==="normal"||S.isCurrent,G=S=>{g||n(I)||r.selectionMode!=="date"||se(S,!0)},R=S=>{S.target.closest("td")&&(g=!0)},ee=S=>{S.target.closest("td")&&(g=!1)},J=S=>{!r.rangeState.selecting||!r.minDate?(t("pick",{minDate:S,maxDate:null}),t("select",!0)):(S>=r.minDate?t("pick",{minDate:r.minDate,maxDate:S}):t("pick",{minDate:S,maxDate:r.minDate}),t("select",!1))},K=S=>{const A=S.week(),$=`${S.year()}w${A}`;t("pick",{year:S.year(),week:A,value:$,date:S.startOf("week")})},ae=(S,A)=>{const $=A?Ye(r.parsedValue).filter(C=>C?.valueOf()!==S.valueOf()):Ye(r.parsedValue).concat([S]);t("pick",$)},se=(S,A=!1)=>{const $=S.target.closest("td");if(!$)return;const C=$.parentNode.rowIndex-1,Y=$.cellIndex,x=n(V)[C][Y];if(x.disabled||x.type==="week")return;const L=T(C,Y);switch(r.selectionMode){case"range":{J(L);break}case"date":{t("pick",L,A);break}case"week":{K(L);break}case"dates":{ae(L,!!x.selected);break}}},q=S=>{if(r.selectionMode!=="week")return!1;let A=r.date.startOf("day");if(S.type==="prev-month"&&(A=A.subtract(1,"month")),S.type==="next-month"&&(A=A.add(1,"month")),A=A.date(Number.parseInt(S.text,10)),r.parsedValue&&!ve(r.parsedValue)){const $=(r.parsedValue.day()-k+7)%7-1;return r.parsedValue.subtract($,"day").isSame(A,"day")}return!1};return{WEEKS:D,rows:V,tbodyRef:e,currentCellRef:o,focus:w,isCurrent:F,isWeekActive:q,isSelectedCell:_,handlePickDate:se,handleMouseUp:ee,handleMouseDown:R,handleMouseMove:E,handleFocus:G}},Do=(r,{isCurrent:t,isWeekActive:a})=>{const e=Pe("date-table"),{t:o}=Ge(),l=O(()=>[e.b(),{"is-week-mode":r.selectionMode==="week"}]),s=O(()=>o("el.datepicker.dateTablePrompt")),i=O(()=>o("el.datepicker.week"));return{tableKls:l,tableLabel:s,weekLabel:i,getCellClasses:m=>{const d=[];return ha(m.type)&&!m.disabled?(d.push("available"),m.type==="today"&&d.push("today")):d.push(m.type),t(m)&&d.push("current"),m.inRange&&(ha(m.type)||r.selectionMode==="week")&&(d.push("in-range"),m.start&&d.push("start-date"),m.end&&d.push("end-date")),m.disabled&&d.push("disabled"),m.selected&&d.push("selected"),m.customClass&&d.push(m.customClass),d.join(" ")},getRowKls:m=>[e.e("row"),{current:a(m)}],t:o}},So=xe({cell:{type:ue(Object)}}),gn=$e({name:"GDatePickerCell",props:So,setup(r){const t=Pe("date-table-cell"),{slots:a}=_e(Qt);return{ns:t,cell:r.cell}}});function xo(r,t,a,e,o,l){return pe(r.$slots,"default",$n(Tn(r.cell)),()=>[B("div",{class:M(r.ns.b())},[B("span",{class:M(r.ns.e("text"))},ge(r.cell?.renderText??r.cell?.text),3)],2)])}const Ca=sr(gn,[["render",xo]]);gn.__docgenInfo={displayName:"GDatePickerCell",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-cell-render.vue"]};const Po=["aria-label"],Co={key:0,scope:"col"},Mo=["aria-label"],Ro=["aria-current","aria-selected","tabindex"],zt=$e({__name:"basic-date-table",props:yo,emits:ko,setup(r,{expose:t,emit:a}){const e=r,o=a,{WEEKS:l,rows:s,tbodyRef:i,currentCellRef:g,focus:k,isCurrent:m,isWeekActive:d,isSelectedCell:P,handlePickDate:D,handleMouseUp:I,handleMouseDown:p,handleMouseMove:f,handleFocus:h}=wo(e,o),{tableLabel:y,tableKls:c,weekLabel:V,getCellClasses:w,getRowKls:F,t:N}=Do(e,{isCurrent:m,isWeekActive:d});return t({focus:k}),(T,E)=>(j(),Z("table",{"aria-label":n(y),class:M(n(c)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:E[1]||(E[1]=(..._)=>n(D)&&n(D)(..._)),onMousemove:E[2]||(E[2]=(..._)=>n(f)&&n(f)(..._)),onMousedown:E[3]||(E[3]=Je((..._)=>n(p)&&n(p)(..._),["prevent"])),onMouseup:E[4]||(E[4]=(..._)=>n(I)&&n(I)(..._))},[B("tbody",{ref_key:"tbodyRef",ref:i},[B("tr",null,[T.showWeekNumber?(j(),Z("th",Co,ge(n(V)),1)):me("",!0),(j(!0),Z(Re,null,Ne(n(l),(_,G)=>(j(),Z("th",{key:G,"aria-label":n(N)("el.datepicker.weeksFull."+_),scope:"col"},ge(n(N)("el.datepicker.weeks."+_)),9,Mo))),128))]),(j(!0),Z(Re,null,Ne(n(s),(_,G)=>(j(),Z("tr",{key:G,class:M(n(F)(_[1]))},[(j(!0),Z(Re,null,Ne(_,(R,ee)=>(j(),Z("td",{key:`${G}.${ee}`,ref_for:!0,ref:J=>n(P)(R)&&(g.value=J),class:M(n(w)(R)),"aria-current":R.isCurrent?"date":void 0,"aria-selected":R.isCurrent,tabindex:n(P)(R)?0:-1,onFocus:E[0]||(E[0]=(...J)=>n(h)&&n(h)(...J))},[oe(Ca,{cell:R},null,8,["cell"])],42,Ro))),128))],2))),128))],512)],42,Po))}});zt.__docgenInfo={exportName:"default",displayName:"basic-date-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on current cell"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-date-table.vue"]};const Fo=xe({...Da,selectionMode:xa("month")}),Eo=["aria-label"],Vo=["aria-selected","aria-label","tabindex","onKeydown"],Wt=$e({__name:"basic-month-table",props:Fo,emits:["changerange","pick","select"],setup(r,{expose:t,emit:a}){const e=r,o=a,l=Pe("month-table"),{t:s,lang:i}=Ge(),g=U(),k=U(),m=U(e.date.locale("en").localeData().monthsShort().map(V=>V.toLowerCase())),d=U([[],[],[]]),P=U(),D=U(),I=O(()=>{const V=d.value,w=H().locale(i.value).startOf("month");for(let F=0;F<3;F++){const N=V[F];for(let T=0;T<4;T++){const E=N[T]||={row:F,column:T,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};E.type="normal";const _=F*4+T,G=e.date.startOf("year").month(_),R=e.rangeState.endDate||e.maxDate||e.rangeState.selecting&&e.minDate||null;E.inRange=!!(e.minDate&&G.isSameOrAfter(e.minDate,"month")&&R&&G.isSameOrBefore(R,"month"))||!!(e.minDate&&G.isSameOrBefore(e.minDate,"month")&&R&&G.isSameOrAfter(R,"month")),e.minDate?.isSameOrAfter(R)?(E.start=!!(R&&G.isSame(R,"month")),E.end=e.minDate&&G.isSame(e.minDate,"month")):(E.start=!!(e.minDate&&G.isSame(e.minDate,"month")),E.end=!!(R&&G.isSame(R,"month"))),w.isSame(G)&&(E.type="today"),E.text=_,E.disabled=e.disabledDate?.(G.toDate())||!1}}return V}),p=()=>{k.value?.focus()},f=V=>{const w={},F=e.date.year(),N=new Date,T=V.text;return w.disabled=e.disabledDate?Kt(F,T,i.value).every(e.disabledDate):!1,w.current=Ye(e.parsedValue).findIndex(E=>H.isDayjs(E)&&E.year()===F&&E.month()===T)>=0,w.today=N.getFullYear()===F&&N.getMonth()===T,V.inRange&&(w["in-range"]=!0,V.start&&(w["start-date"]=!0),V.end&&(w["end-date"]=!0)),w},h=V=>{const w=e.date.year(),F=V.text;return Ye(e.date).findIndex(N=>N.year()===w&&N.month()===F)>=0},y=V=>{if(!e.rangeState.selecting)return;let w=V.target;if(w.tagName==="SPAN"&&(w=w.parentNode?.parentNode),w.tagName==="DIV"&&(w=w.parentNode),w.tagName!=="TD")return;const F=w.parentNode.rowIndex,N=w.cellIndex;I.value[F][N].disabled||(F!==P.value||N!==D.value)&&(P.value=F,D.value=N,o("changerange",{selecting:!0,endDate:e.date.startOf("year").month(F*4+N)}))},c=V=>{const w=V.target?.closest("td");if(w?.tagName!=="TD"||Ut(w,"disabled"))return;const F=w.cellIndex,T=w.parentNode.rowIndex*4+F,E=e.date.startOf("year").month(T);if(e.selectionMode==="months"){if(V.type==="keydown"){o("pick",Ye(e.parsedValue),!1);return}const _=Vt(e.date.year(),T,i.value,e.disabledDate),G=Ut(w,"current")?Ye(e.parsedValue).filter(R=>R?.month()!==_.month()):Ye(e.parsedValue).concat([H(_)]);o("pick",G)}else e.selectionMode==="range"?e.rangeState.selecting?(e.minDate&&E>=e.minDate?o("pick",{minDate:e.minDate,maxDate:E}):o("pick",{minDate:E,maxDate:e.minDate}),o("select",!1)):(o("pick",{minDate:E,maxDate:null}),o("select",!0)):o("pick",T)};return Oe(()=>e.date,async()=>{g.value?.contains(document.activeElement)&&(await je(),k.value?.focus())}),t({focus:p}),(V,w)=>(j(),Z("table",{role:"grid","aria-label":n(s)("el.datepicker.monthTablePrompt"),class:M(n(l).b()),onClick:c,onMousemove:y},[B("tbody",{ref_key:"tbodyRef",ref:g},[(j(!0),Z(Re,null,Ne(I.value,(F,N)=>(j(),Z("tr",{key:N},[(j(!0),Z(Re,null,Ne(F,(T,E)=>(j(),Z("td",{key:E,ref_for:!0,ref:_=>h(T)&&(k.value=_),class:M(f(T)),"aria-selected":`${h(T)}`,"aria-label":n(s)(`el.datepicker.month${+T.text+1}`),tabindex:h(T)?0:-1,onKeydown:[kt(Je(c,["prevent","stop"]),["space"]),kt(Je(c,["prevent","stop"]),["enter"])]},[oe(Ca,{cell:{...T,renderText:n(s)("el.datepicker.months."+m.value[T.text])}},null,8,["cell"])],42,Vo))),128))]))),128))],512)],42,Eo))}});Wt.__docgenInfo={exportName:"default",displayName:"basic-month-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-month-table.vue"]};const Io=xe({...Da,selectionMode:xa("year")}),Oo=["aria-label"],$o=["aria-selected","aria-label","tabindex","onKeydown"],Zt=$e({__name:"basic-year-table",props:Io,emits:["changerange","pick","select"],setup(r,{expose:t,emit:a}){const e=(w,F)=>{const N=H(String(w)).locale(F).startOf("year"),E=N.endOf("year").dayOfYear();return Ja(E).map(_=>N.add(_,"day").toDate())},o=r,l=a,s=Pe("year-table"),{t:i,lang:g}=Ge(),k=U(),m=U(),d=O(()=>Math.floor(o.date.year()/10)*10),P=U([[],[],[]]),D=U(),I=U(),p=O(()=>{const w=P.value,F=H().locale(g.value).startOf("year");for(let N=0;N<3;N++){const T=w[N];for(let E=0;E<4&&!(N*4+E>=10);E++){let _=T[E];_||(_={row:N,column:E,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),_.type="normal";const G=N*4+E+d.value,R=H().year(G),ee=o.rangeState.endDate||o.maxDate||o.rangeState.selecting&&o.minDate||null;_.inRange=!!(o.minDate&&R.isSameOrAfter(o.minDate,"year")&&ee&&R.isSameOrBefore(ee,"year"))||!!(o.minDate&&R.isSameOrBefore(o.minDate,"year")&&ee&&R.isSameOrAfter(ee,"year")),o.minDate?.isSameOrAfter(ee)?(_.start=!!(ee&&R.isSame(ee,"year")),_.end=!!(o.minDate&&R.isSame(o.minDate,"year"))):(_.start=!!(o.minDate&&R.isSame(o.minDate,"year")),_.end=!!(ee&&R.isSame(ee,"year"))),F.isSame(R)&&(_.type="today"),_.text=G;const K=R.toDate();_.disabled=o.disabledDate&&o.disabledDate(K)||!1,T[E]=_}}return w}),f=()=>{m.value?.focus()},h=w=>{const F={},N=H().locale(g.value),T=w.text;return F.disabled=o.disabledDate?e(T,g.value).every(o.disabledDate):!1,F.today=N.year()===T,F.current=Ye(o.parsedValue).findIndex(E=>E.year()===T)>=0,w.inRange&&(F["in-range"]=!0,w.start&&(F["start-date"]=!0),w.end&&(F["end-date"]=!0)),F},y=w=>{const F=w.text;return Ye(o.date).findIndex(N=>N.year()===F)>=0},c=w=>{const F=w.target?.closest("td");if(!F||!F.textContent||Ut(F,"disabled"))return;const N=F.cellIndex,E=F.parentNode.rowIndex*4+N+d.value,_=H().year(E);if(o.selectionMode==="range")o.rangeState.selecting?(o.minDate&&_>=o.minDate?l("pick",{minDate:o.minDate,maxDate:_}):l("pick",{minDate:_,maxDate:o.minDate}),l("select",!1)):(l("pick",{minDate:_,maxDate:null}),l("select",!0));else if(o.selectionMode==="years"){if(w.type==="keydown"){l("pick",Ye(o.parsedValue),!1);return}const G=ga(_.startOf("year"),g.value,o.disabledDate),R=Ut(F,"current")?Ye(o.parsedValue).filter(ee=>ee?.year()!==E):Ye(o.parsedValue).concat([G]);l("pick",R)}else l("pick",E)},V=w=>{if(!o.rangeState.selecting)return;const F=w.target?.closest("td");if(!F)return;const N=F.parentNode.rowIndex,T=F.cellIndex;p.value[N][T].disabled||(N!==D.value||T!==I.value)&&(D.value=N,I.value=T,l("changerange",{selecting:!0,endDate:H().year(d.value).add(N*4+T,"year")}))};return Oe(()=>o.date,async()=>{k.value?.contains(document.activeElement)&&(await je(),m.value?.focus())}),t({focus:f}),(w,F)=>(j(),Z("table",{role:"grid","aria-label":n(i)("el.datepicker.yearTablePrompt"),class:M(n(s).b()),onClick:c,onMousemove:V},[B("tbody",{ref_key:"tbodyRef",ref:k},[(j(!0),Z(Re,null,Ne(p.value,(N,T)=>(j(),Z("tr",{key:T},[(j(!0),Z(Re,null,Ne(N,(E,_)=>(j(),Z("td",{key:`${T}_${_}`,ref_for:!0,ref:G=>y(E)&&(m.value=G),class:M(["available",h(E)]),"aria-selected":y(E),"aria-label":String(E.text),tabindex:y(E)?0:-1,onKeydown:[kt(Je(c,["prevent","stop"]),["space"]),kt(Je(c,["prevent","stop"]),["enter"])]},[oe(Ca,{cell:E},null,8,["cell"])],42,$o))),128))]))),128))],512)],42,Oo))}});Zt.__docgenInfo={exportName:"default",displayName:"basic-year-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on the current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-year-table.vue"]};const To=["onClick"],Ao=["aria-label"],No=["aria-label"],_o=["aria-label"],qo=["aria-label"],Lo=["disabled"],Yo=["disabled"],hn=$e({__name:"panel-date-pick",props:ho,emits:["pick","set-picker-option","panel-change"],setup(r,{emit:t}){const a=(u,b,te)=>!0,e=r,o=t,l=Pe("picker-panel"),s=Pe("date-picker"),i=ba(),g=ya(),{t:k,lang:m}=Ge(),d=_e("EP_PICKER_BASE"),P=_e(ar),{shortcuts:D,disabledDate:I,cellClassName:p,defaultTime:f}=d.props,h=ze(d.props,"defaultValue"),y=U(),c=U(H().locale(m.value)),V=U(!1);let w=!1;const F=O(()=>H(f).locale(m.value)),N=O(()=>c.value.month()),T=O(()=>c.value.year()),E=U([]),_=U(null),G=U(null),R=u=>E.value.length>0?a(u,E.value,e.format||"HH:mm:ss"):!0,ee=u=>f&&!fe.value&&!V.value&&!w?F.value.year(u.year()).month(u.month()).date(u.date()):Fe.value?u.millisecond(0):u.startOf("day"),J=(u,...b)=>{if(!u)o("pick",u,...b);else if(ve(u)){const te=u.map(ee);o("pick",te,...b)}else o("pick",ee(u),...b);_.value=null,G.value=null,V.value=!1,w=!1},K=async(u,b)=>{if($.value==="date"){u=u;let te=e.parsedValue?e.parsedValue.year(u.year()).month(u.month()).date(u.date()):u;R(te)||(te=E.value[0][0].year(u.year()).month(u.month()).date(u.date())),c.value=te,J(te,Fe.value||b),e.type==="datetime"&&(await je(),Ke())}else $.value==="week"?J(u.date):$.value==="dates"&&J(u,!0)},ae=u=>{const b=u?"add":"subtract";c.value=c.value[b](1,"month"),z("month")},se=u=>{const b=c.value,te=u?"add":"subtract";c.value=q.value==="year"?b[te](10,"year"):b[te](1,"year"),z("year")},q=U("date"),S=O(()=>{const u=k("el.datepicker.year");if(q.value==="year"){const b=Math.floor(T.value/10)*10;return u?`${b} ${u} - ${b+9} ${u}`:`${b} - ${b+9}`}return`${T.value} ${u}`}),A=u=>{const b=Ft(u.value)?u.value():u.value;if(b){w=!0,J(H(b).locale(m.value));return}u.onClick&&u.onClick({attrs:i,slots:g,emit:o})},$=O(()=>{const{type:u}=e;return["week","month","months","year","years","dates"].includes(u)?u:"date"}),C=O(()=>$.value==="dates"||$.value==="months"||$.value==="years"),Y=O(()=>$.value==="date"?q.value:$.value),x=O(()=>!!D.length),L=async(u,b)=>{$.value==="month"?(c.value=Vt(c.value.year(),u,m.value,I),J(c.value,!1)):$.value==="months"?J(u,b??!0):(c.value=Vt(c.value.year(),u,m.value,I),q.value="date",["month","year","date","week"].includes($.value)&&(J(c.value,!0),await je(),Ke())),z("month")},W=async(u,b)=>{if($.value==="year"){const te=c.value.startOf("year").year(u);c.value=ga(te,m.value,I),J(c.value,!1)}else if($.value==="years")J(u,b??!0);else{const te=c.value.year(u);c.value=ga(te,m.value,I),q.value="month",["month","year","date","week"].includes($.value)&&(J(c.value,!0),await je(),Ke())}z("year")},re=async u=>{q.value=u,await je(),Ke()},Fe=O(()=>e.type==="datetime"||e.type==="datetimerange"),Ae=O(()=>{const u=Fe.value||$.value==="dates",b=$.value==="years",te=$.value==="months",Se=q.value==="date",Ce=q.value==="year",lt=q.value==="month";return u&&Se||b&&Ce||te&&lt}),Ue=O(()=>I?e.parsedValue?ve(e.parsedValue)?I(e.parsedValue[0].toDate()):I(e.parsedValue.toDate()):!0:!1),Q=()=>{if(C.value)J(e.parsedValue);else{let u=e.parsedValue;if(!u){const b=H(f).locale(m.value),te=We();u=b.year(te.year()).month(te.month()).date(te.date())}c.value=u,J(u)}},X=O(()=>I?I(H().locale(m.value).toDate()):!1),le=()=>{const b=H().locale(m.value).toDate();V.value=!0,(!I||!I(b))&&R(b)&&(c.value=H().locale(m.value),J(c.value))},ie=O(()=>e.timeFormat||Qa(e.format)),be=O(()=>e.dateFormat||Xa(e.format)),fe=O(()=>{if(G.value)return G.value;if(!(!e.parsedValue&&!h.value))return(e.parsedValue||c.value).format(ie.value)}),ke=O(()=>{if(_.value)return _.value;if(!(!e.parsedValue&&!h.value))return(e.parsedValue||c.value).format(be.value)}),De=U(!1),Ee=()=>{De.value=!0},Te=()=>{De.value=!1},Xe=u=>({hour:u.hour(),minute:u.minute(),second:u.second(),year:u.year(),month:u.month(),date:u.date()}),Dt=(u,b,te)=>{const{hour:Se,minute:Ce,second:lt}=Xe(u),Pt=e.parsedValue?e.parsedValue.hour(Se).minute(Ce).second(lt):u;c.value=Pt,J(c.value,!0),te||(De.value=b)},pt=u=>{const b=H(u,ie.value).locale(m.value);if(b.isValid()&&R(b)){const{year:te,month:Se,date:Ce}=Xe(c.value);c.value=b.year(te).month(Se).date(Ce),G.value=null,De.value=!1,J(c.value,!0)}},de=u=>{const b=H(u,be.value).locale(m.value);if(b.isValid()){if(I&&I(b.toDate()))return;const{hour:te,minute:Se,second:Ce}=Xe(c.value);c.value=b.hour(te).minute(Se).second(Ce),_.value=null,J(c.value,!0)}},at=u=>H.isDayjs(u)&&u.isValid()&&(I?!I(u.toDate()):!0),et=u=>ve(u)?u.map(b=>b.format(e.format)):u.format(e.format),st=u=>H(u,e.format).locale(m.value),We=()=>{const u=H(h.value).locale(m.value);if(!h.value){const b=F.value;return H().hour(b.hour()).minute(b.minute()).second(b.second()).locale(m.value)}return u},Ke=()=>{["week","month","year","date"].includes($.value)&&y.value?.focus()},St=()=>{Ke(),$.value==="week"&&vt(Me.down)},xt=u=>{const{code:b}=u;[Me.up,Me.down,Me.left,Me.right,Me.home,Me.end,Me.pageUp,Me.pageDown].includes(b)&&(vt(b),u.stopPropagation(),u.preventDefault()),[Me.enter,Me.space,Me.numpadEnter].includes(b)&&_.value===null&&G.value===null&&(u.preventDefault(),J(c.value,!1))},vt=u=>{const{up:b,down:te,left:Se,right:Ce,home:lt,end:Pt,pageUp:v,pageDown:ne}=Me,we={year:{[b]:-4,[te]:4,[Se]:-1,[Ce]:1,offset:(he,Ze)=>he.setFullYear(he.getFullYear()+Ze)},month:{[b]:-4,[te]:4,[Se]:-1,[Ce]:1,offset:(he,Ze)=>he.setMonth(he.getMonth()+Ze)},week:{[b]:-1,[te]:1,[Se]:-1,[Ce]:1,offset:(he,Ze)=>he.setDate(he.getDate()+Ze*7)},date:{[b]:-7,[te]:7,[Se]:-1,[Ce]:1,[lt]:he=>-he.getDay(),[Pt]:he=>-he.getDay()+6,[v]:he=>-new Date(he.getFullYear(),he.getMonth(),0).getDate(),[ne]:he=>new Date(he.getFullYear(),he.getMonth()+1,0).getDate(),offset:(he,Ze)=>he.setDate(he.getDate()+Ze)}},Ve=c.value.toDate();for(;Math.abs(c.value.diff(Ve,"year",!0))<1;){const he=we[Y.value];if(!he)return;if(he.offset(Ve,Ft(he[u])?he[u](Ve):he[u]??0),I&&I(Ve))break;const Ze=H(Ve).locale(m.value);c.value=Ze,o("pick",Ze,!0);break}},z=u=>{o("panel-change",c.value.toDate(),u,q.value)};return Oe(()=>$.value,u=>{if(["month","year"].includes(u)){q.value=u;return}else if(u==="years"){q.value="year";return}else if(u==="months"){q.value="month";return}q.value="date"},{immediate:!0}),Oe(()=>q.value,()=>{P?.updatePopper()}),Oe(()=>h.value,u=>{u&&(c.value=We())},{immediate:!0}),Oe(()=>e.parsedValue,u=>{if(u){if(C.value||ve(u))return;c.value=u}else c.value=We()},{immediate:!0}),o("set-picker-option",["isValidValue",at]),o("set-picker-option",["formatToString",et]),o("set-picker-option",["parseUserInput",st]),o("set-picker-option",["handleFocusPicker",St]),(u,b)=>(j(),Z("div",{class:M([n(l).b(),n(s).b(),{"has-sidebar":u.$slots.sidebar||x.value,"has-time":Fe.value}])},[B("div",{class:M(n(l).e("body-wrapper"))},[pe(u.$slots,"sidebar",{class:M(n(l).e("sidebar"))}),x.value?(j(),Z("div",{key:0,class:M(n(l).e("sidebar"))},[(j(!0),Z(Re,null,Ne(n(D),(te,Se)=>(j(),Z("button",{key:Se,type:"button",class:M(n(l).e("shortcut")),onClick:Ce=>A(te)},ge(te.text),11,To))),128))],2)):me("",!0),B("div",{class:M(n(l).e("body"))},[Fe.value?(j(),Z("div",{key:0,class:M(n(s).e("time-header"))},[B("span",{class:M(n(s).e("editor-wrap"))},[oe(n(it),{placeholder:n(k)("el.datepicker.selectDate"),"model-value":ke.value,"validate-event":!1,onInput:b[0]||(b[0]=te=>_.value=te),onChange:de},null,8,["placeholder","model-value"])],2),qe((j(),Z("span",{class:M(n(s).e("editor-wrap"))},[oe(n(it),{placeholder:n(k)("el.datepicker.selectTime"),"model-value":fe.value,"validate-event":!1,onFocus:Ee,onInput:b[1]||(b[1]=te=>G.value=te),onChange:pt},null,8,["placeholder","model-value"]),oe(n(ua),{visible:De.value,format:ie.value,"parsed-value":c.value,onPick:Dt},null,8,["visible","format","parsed-value"])],2)),[[n(ca),Te]])],2)):me("",!0),qe(B("div",{class:M([n(s).e("header"),(q.value==="year"||q.value==="month")&&n(s).e("header--bordered")])},[B("span",{class:M(n(s).e("prev-btn"))},[qe(B("button",{type:"button","aria-label":n(k)("el.datepicker.prevYear"),class:M(["d-arrow-left",n(l).e("icon-btn")]),onClick:b[2]||(b[2]=te=>se(!1))},[pe(u.$slots,"prev-year",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],10,Ao),[[nt,q.value!=="date"]]),qe(B("button",{type:"button","aria-label":n(k)("el.datepicker.prevMonth"),class:M([n(l).e("icon-btn"),"arrow-left"]),onClick:b[3]||(b[3]=te=>ae(!1))},[pe(u.$slots,"prev-month",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],10,No),[[nt,q.value==="date"]])],2),B("span",{role:"button",class:M(n(s).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:b[4]||(b[4]=kt(te=>re("year"),["enter"])),onClick:b[5]||(b[5]=te=>re("year"))},ge(S.value),35),qe(B("span",{role:"button","aria-live":"polite",tabindex:"0",class:M([n(s).e("header-label"),{active:q.value==="month"}]),onKeydown:b[6]||(b[6]=kt(te=>re("month"),["enter"])),onClick:b[7]||(b[7]=te=>re("month"))},ge(n(k)(`el.datepicker.month${N.value+1}`)),35),[[nt,q.value==="date"]]),B("span",{class:M(n(s).e("next-btn"))},[qe(B("button",{type:"button","aria-label":n(k)("el.datepicker.nextMonth"),class:M([n(l).e("icon-btn"),"arrow-right"]),onClick:b[8]||(b[8]=te=>ae(!0))},[pe(u.$slots,"next-month",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],10,_o),[[nt,q.value==="date"]]),qe(B("button",{type:"button","aria-label":n(k)("el.datepicker.nextYear"),class:M([n(l).e("icon-btn"),"d-arrow-right"]),onClick:b[9]||(b[9]=te=>se(!0))},[pe(u.$slots,"next-year",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],10,qo),[[nt,q.value!=="date"]])],2)],2),[[nt,q.value!=="time"]]),B("div",{class:M(n(l).e("content")),onKeydown:xt},[q.value==="date"?(j(),Le(zt,{key:0,ref_key:"currentViewRef",ref:y,"selection-mode":$.value,date:c.value,"parsed-value":u.parsedValue,"disabled-date":n(I),"cell-class-name":n(p),onPick:K},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):me("",!0),q.value==="year"?(j(),Le(Zt,{key:1,ref_key:"currentViewRef",ref:y,"selection-mode":$.value,date:c.value,"disabled-date":n(I),"parsed-value":u.parsedValue,onPick:W},null,8,["selection-mode","date","disabled-date","parsed-value"])):me("",!0),q.value==="month"?(j(),Le(Wt,{key:2,ref_key:"currentViewRef",ref:y,"selection-mode":$.value,date:c.value,"parsed-value":u.parsedValue,"disabled-date":n(I),onPick:L},null,8,["selection-mode","date","parsed-value","disabled-date"])):me("",!0)],34)],2)],2),qe(B("div",{class:M(n(l).e("footer"))},[qe(B("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:X.value,onClick:le},ge(n(k)("el.datepicker.now")),9,Lo),[[nt,!C.value&&u.showNow]]),B("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:Ue.value,onClick:Q},ge(n(k)("el.datepicker.confirm")),9,Yo)],2),[[nt,Ae.value]])],2))}});hn.__docgenInfo={exportName:"default",displayName:"panel-date-pick",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"prev-month"},{name:"next-month"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-pick.vue"]};const jo=xe({...vn,...Sa,visible:Boolean}),bn=r=>{const{emit:t}=za(),a=ba(),e=ya();return l=>{const s=Ft(l.value)?l.value():l.value;if(s){t("pick",[H(s[0]).locale(r.value),H(s[1]).locale(r.value)]);return}l.onClick&&l.onClick({attrs:a,slots:e,emit:t})}},yn=(r,{defaultValue:t,leftDate:a,rightDate:e,unit:o,onParsedValueChanged:l})=>{const{emit:s}=za(),{pickerNs:i}=_e(Qt),g=Pe("date-range-picker"),{t:k,lang:m}=Ge(),d=bn(m),P=U(),D=U(),I=U({endDate:null,selecting:!1}),p=V=>{I.value=V},f=(V=!1)=>{const w=n(P),F=n(D);wt([w,F])&&s("pick",[w,F],V)},h=V=>{I.value.selecting=V,V||(I.value.endDate=null)},y=V=>{if(ve(V)&&V.length===2){const[w,F]=V;P.value=w,a.value=w,D.value=F,l(n(P),n(D))}else c()},c=()=>{const[V,w]=Pa(n(t),{lang:n(m),unit:o,unlinkPanels:r.unlinkPanels});P.value=void 0,D.value=void 0,a.value=V,e.value=w};return Oe(t,V=>{V&&c()},{immediate:!0}),Oe(()=>r.parsedValue,y,{immediate:!0}),{minDate:P,maxDate:D,rangeState:I,lang:m,ppNs:i,drpNs:g,handleChangeRange:p,handleRangeConfirm:f,handleShortcutClick:d,onSelect:h,onReset:y,t:k}},Bo=["onClick"],Go=["aria-label"],Ho=["disabled","aria-label"],Uo=["disabled","aria-label"],Ko=["disabled","aria-label"],zo=["disabled","aria-label"],Wo=["aria-label"],Tt="month",kn=$e({__name:"panel-date-range",props:jo,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(r,{emit:t}){const a=r,e=t,o=_e("EP_PICKER_BASE"),{disabledDate:l,cellClassName:s,defaultTime:i,clearable:g}=o.props,k=ze(o.props,"format"),m=ze(o.props,"shortcuts"),d=ze(o.props,"defaultValue"),{lang:P}=Ge(),D=U(H().locale(P.value)),I=U(H().locale(P.value).add(1,Tt)),{minDate:p,maxDate:f,rangeState:h,ppNs:y,drpNs:c,handleChangeRange:V,handleRangeConfirm:w,handleShortcutClick:F,onSelect:N,onReset:T,t:E}=yn(a,{defaultValue:d,leftDate:D,rightDate:I,unit:Tt,onParsedValueChanged:vt});Oe(()=>a.visible,z=>{!z&&h.value.selecting&&(T(a.parsedValue),N(!1))});const _=U({min:null,max:null}),G=U({min:null,max:null}),R=O(()=>`${D.value.year()} ${E("el.datepicker.year")} ${E(`el.datepicker.month${D.value.month()+1}`)}`),ee=O(()=>`${I.value.year()} ${E("el.datepicker.year")} ${E(`el.datepicker.month${I.value.month()+1}`)}`),J=O(()=>D.value.year()),K=O(()=>D.value.month()),ae=O(()=>I.value.year()),se=O(()=>I.value.month()),q=O(()=>!!m.value.length),S=O(()=>_.value.min!==null?_.value.min:p.value?p.value.format(x.value):""),A=O(()=>_.value.max!==null?_.value.max:f.value||p.value?(f.value||p.value).format(x.value):""),$=O(()=>G.value.min!==null?G.value.min:p.value?p.value.format(Y.value):""),C=O(()=>G.value.max!==null?G.value.max:f.value||p.value?(f.value||p.value).format(Y.value):""),Y=O(()=>a.timeFormat||Qa(k.value)),x=O(()=>a.dateFormat||Xa(k.value)),L=z=>wt(z)&&(l?!l(z[0].toDate())&&!l(z[1].toDate()):!0),W=()=>{D.value=D.value.subtract(1,"month"),a.unlinkPanels||(I.value=D.value.add(1,"month")),X("month")},re=()=>{a.unlinkPanels?I.value=I.value.add(1,"month"):(D.value=D.value.add(1,"month"),I.value=D.value.add(1,"month")),X("month")},Fe=()=>{D.value=D.value.add(1,"year"),X("year")},Ae=()=>{D.value=D.value.add(1,"month"),X("month")},Ue=()=>{I.value=I.value.subtract(1,"year"),X("year")},Q=()=>{I.value=I.value.subtract(1,"month"),X("month")},X=z=>{e("panel-change",[D.value.toDate(),I.value.toDate()],z)},le=O(()=>{const z=(K.value+1)%12,u=K.value+1>=12?1:0;return a.unlinkPanels&&new Date(J.value+u,z)<new Date(ae.value,se.value)}),ie=O(()=>a.unlinkPanels&&ae.value*12+se.value-(J.value*12+K.value+1)>=12),be=O(()=>!(p.value&&f.value&&!h.value.selecting&&wt([p.value,f.value]))),fe=O(()=>a.type==="datetime"||a.type==="datetimerange"),ke=(z,u)=>{if(z)return i?H(i[u]||i).locale(P.value).year(z.year()).month(z.month()).date(z.date()):z},De=(z,u=!0)=>{const b=z.minDate,te=z.maxDate,Se=ke(b,0),Ce=ke(te,1);f.value===Ce&&p.value===Se||(e("calendar-change",[b.toDate(),te&&te.toDate()]),f.value=Ce,p.value=Se,!(!u||fe.value)&&w())},Ee=U(!1),Te=U(!1),Xe=()=>{Ee.value=!1},Dt=()=>{Te.value=!1},pt=(z,u)=>{_.value[u]=z;const b=H(z,x.value).locale(P.value);if(b.isValid()){if(l&&l(b.toDate()))return;u==="min"?(D.value=b,p.value=(p.value||D.value).year(b.year()).month(b.month()).date(b.date()),!a.unlinkPanels&&(!f.value||f.value.isBefore(p.value))&&(I.value=b.add(1,"month"),f.value=p.value.add(1,"month"))):(I.value=b,f.value=(f.value||I.value).year(b.year()).month(b.month()).date(b.date()),!a.unlinkPanels&&(!p.value||p.value.isAfter(f.value))&&(D.value=b.subtract(1,"month"),p.value=f.value.subtract(1,"month")))}},de=(z,u)=>{_.value[u]=null},at=(z,u)=>{G.value[u]=z;const b=H(z,Y.value).locale(P.value);b.isValid()&&(u==="min"?(Ee.value=!0,p.value=(p.value||D.value).hour(b.hour()).minute(b.minute()).second(b.second())):(Te.value=!0,f.value=(f.value||I.value).hour(b.hour()).minute(b.minute()).second(b.second()),I.value=f.value))},et=(z,u)=>{G.value[u]=null,u==="min"?(D.value=p.value,Ee.value=!1,(!f.value||f.value.isBefore(p.value))&&(f.value=p.value)):(I.value=f.value,Te.value=!1,f.value&&f.value.isBefore(p.value)&&(p.value=f.value))},st=(z,u,b)=>{G.value.min||(z&&(D.value=z,p.value=(p.value||D.value).hour(z.hour()).minute(z.minute()).second(z.second())),b||(Ee.value=u),(!f.value||f.value.isBefore(p.value))&&(f.value=p.value,I.value=z))},We=(z,u,b)=>{G.value.max||(z&&(I.value=z,f.value=(f.value||I.value).hour(z.hour()).minute(z.minute()).second(z.second())),b||(Te.value=u),f.value&&f.value.isBefore(p.value)&&(p.value=f.value))},Ke=()=>{D.value=Pa(n(d),{lang:n(P),unit:"month",unlinkPanels:a.unlinkPanels})[0],I.value=D.value.add(1,"month"),f.value=void 0,p.value=void 0,e("pick",null)},St=z=>ve(z)?z.map(u=>u.format(k.value)):z.format(k.value),xt=z=>ve(z)?z.map(u=>H(u,k.value).locale(P.value)):H(z,k.value).locale(P.value);function vt(z,u){if(a.unlinkPanels&&u){const b=z?.year()||0,te=z?.month()||0,Se=u.year(),Ce=u.month();I.value=b===Se&&te===Ce?u.add(1,Tt):u}else I.value=D.value.add(1,Tt),u&&(I.value=I.value.hour(u.hour()).minute(u.minute()).second(u.second()))}return e("set-picker-option",["isValidValue",L]),e("set-picker-option",["parseUserInput",xt]),e("set-picker-option",["formatToString",St]),e("set-picker-option",["handleClear",Ke]),(z,u)=>(j(),Z("div",{class:M([n(y).b(),n(c).b(),{"has-sidebar":z.$slots.sidebar||q.value,"has-time":fe.value}])},[B("div",{class:M(n(y).e("body-wrapper"))},[pe(z.$slots,"sidebar",{class:M(n(y).e("sidebar"))}),q.value?(j(),Z("div",{key:0,class:M(n(y).e("sidebar"))},[(j(!0),Z(Re,null,Ne(m.value,(b,te)=>(j(),Z("button",{key:te,type:"button",class:M(n(y).e("shortcut")),onClick:Se=>n(F)(b)},ge(b.text),11,Bo))),128))],2)):me("",!0),B("div",{class:M(n(y).e("body"))},[fe.value?(j(),Z("div",{key:0,class:M(n(c).e("time-header"))},[B("span",{class:M(n(c).e("editors-wrap"))},[B("span",{class:M(n(c).e("time-picker-wrap"))},[oe(n(it),{disabled:n(h).selecting,placeholder:n(E)("el.datepicker.startDate"),class:M(n(c).e("editor")),"model-value":S.value,"validate-event":!1,onInput:u[0]||(u[0]=b=>pt(b,"min")),onChange:u[1]||(u[1]=b=>de(b,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),qe((j(),Z("span",{class:M(n(c).e("time-picker-wrap"))},[oe(n(it),{class:M(n(c).e("editor")),disabled:n(h).selecting,placeholder:n(E)("el.datepicker.startTime"),"model-value":$.value,"validate-event":!1,onFocus:u[2]||(u[2]=b=>Ee.value=!0),onInput:u[3]||(u[3]=b=>at(b,"min")),onChange:u[4]||(u[4]=b=>et(b,"min"))},null,8,["class","disabled","placeholder","model-value"]),oe(n(ua),{visible:Ee.value,format:Y.value,"datetime-role":"start","parsed-value":D.value,onPick:st},null,8,["visible","format","parsed-value"])],2)),[[n(ca),Xe]])],2),B("span",null,[oe(n(ye),{name:"solid chevron-right"})]),B("span",{class:M([n(c).e("editors-wrap"),"is-right"])},[B("span",{class:M(n(c).e("time-picker-wrap"))},[oe(n(it),{class:M(n(c).e("editor")),disabled:n(h).selecting,placeholder:n(E)("el.datepicker.endDate"),"model-value":A.value,readonly:!n(p),"validate-event":!1,onInput:u[5]||(u[5]=b=>pt(b,"max")),onChange:u[6]||(u[6]=b=>de(b,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),qe((j(),Z("span",{class:M(n(c).e("time-picker-wrap"))},[oe(n(it),{class:M(n(c).e("editor")),disabled:n(h).selecting,placeholder:n(E)("el.datepicker.endTime"),"model-value":C.value,readonly:!n(p),"validate-event":!1,onFocus:u[7]||(u[7]=b=>n(p)&&(Te.value=!0)),onInput:u[8]||(u[8]=b=>at(b,"max")),onChange:u[9]||(u[9]=b=>et(b,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),oe(n(ua),{"datetime-role":"end",visible:Te.value,format:Y.value,"parsed-value":I.value,onPick:We},null,8,["visible","format","parsed-value"])],2)),[[n(ca),Dt]])],2)],2)):me("",!0),B("div",{class:M([[n(y).e("content"),n(c).e("content")],"is-left"])},[B("div",{class:M(n(c).e("header"))},[B("button",{type:"button",class:M([n(y).e("icon-btn"),"arrow-left"]),"aria-label":n(E)("el.datepicker.prevMonth"),onClick:W},[pe(z.$slots,"prev-month",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],10,Go),z.unlinkPanels?(j(),Z("button",{key:0,type:"button",disabled:!ie.value,class:M([[n(y).e("icon-btn"),{"is-disabled":!ie.value}],"d-arrow-right"]),"aria-label":n(E)("el.datepicker.nextYear"),onClick:Fe},[pe(z.$slots,"next-year",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],10,Ho)):me("",!0),z.unlinkPanels?(j(),Z("button",{key:1,type:"button",disabled:!le.value,class:M([[n(y).e("icon-btn"),{"is-disabled":!le.value}],"arrow-right"]),"aria-label":n(E)("el.datepicker.nextMonth"),onClick:Ae},[pe(z.$slots,"next-month",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],10,Uo)):me("",!0),B("div",null,ge(R.value),1)],2),oe(zt,{"selection-mode":"range",date:D.value,"min-date":n(p),"max-date":n(f),"range-state":n(h),"disabled-date":n(l),"cell-class-name":n(s),onChangerange:n(V),onPick:De,onSelect:n(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),B("div",{class:M([[n(y).e("content"),n(c).e("content")],"is-right"])},[B("div",{class:M(n(c).e("header"))},[z.unlinkPanels?(j(),Z("button",{key:0,type:"button",disabled:!ie.value,class:M([[n(y).e("icon-btn"),{"is-disabled":!ie.value}],"d-arrow-left"]),"aria-label":n(E)("el.datepicker.prevYear"),onClick:Ue},[pe(z.$slots,"prev-year",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],10,Ko)):me("",!0),z.unlinkPanels?(j(),Z("button",{key:1,type:"button",disabled:!le.value,class:M([[n(y).e("icon-btn"),{"is-disabled":!le.value}],"arrow-left"]),"aria-label":n(E)("el.datepicker.prevMonth"),onClick:Q},[pe(z.$slots,"prev-month",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],10,zo)):me("",!0),B("button",{type:"button",class:M([n(y).e("icon-btn"),"arrow-right"]),"aria-label":n(E)("el.datepicker.nextMonth"),onClick:re},[pe(z.$slots,"next-month",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],10,Wo),B("div",null,ge(ee.value),1)],2),oe(zt,{"selection-mode":"range",date:I.value,"min-date":n(p),"max-date":n(f),"range-state":n(h),"disabled-date":n(l),"cell-class-name":n(s),onChangerange:n(V),onPick:De,onSelect:n(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),fe.value?(j(),Z("div",{key:0,class:M(n(y).e("footer"))},[n(g)?(j(),Le(n(Ia),{key:0,text:"",size:"sm",class:M(n(y).e("link-btn")),onClick:Ke},{default:He(()=>[ht(ge(n(E)("el.datepicker.clear")),1)]),_:1},8,["class"])):me("",!0),oe(n(Ia),{plain:"",size:"sm",class:M(n(y).e("link-btn")),disabled:be.value,onClick:u[10]||(u[10]=b=>n(w)(!1))},{default:He(()=>[ht(ge(n(E)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):me("",!0)],2))}});kn.__docgenInfo={exportName:"default",displayName:"panel-date-range",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"calendar-change"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-month"},{name:"next-year"},{name:"next-month"},{name:"prev-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-range.vue"]};const Zo=xe({...Sa}),Jo=["pick","set-picker-option","calendar-change"],Qo=({unlinkPanels:r,leftDate:t,rightDate:a})=>{const{t:e}=Ge(),o=()=>{t.value=t.value.subtract(1,"year"),r.value||(a.value=a.value.subtract(1,"year"))},l=()=>{r.value||(t.value=t.value.add(1,"year")),a.value=a.value.add(1,"year")},s=()=>{t.value=t.value.add(1,"year")},i=()=>{a.value=a.value.subtract(1,"year")},g=O(()=>`${t.value.year()} ${e("el.datepicker.year")}`),k=O(()=>`${a.value.year()} ${e("el.datepicker.year")}`),m=O(()=>t.value.year()),d=O(()=>a.value.year()===t.value.year()?t.value.year()+1:a.value.year());return{leftPrevYear:o,rightNextYear:l,leftNextYear:s,rightPrevYear:i,leftLabel:g,rightLabel:k,leftYear:m,rightYear:d}},Xo=["onClick"],es=["disabled"],ts=["disabled"],At="year",wn=$e({name:"DatePickerMonthRange",__name:"panel-month-range",props:Zo,emits:Jo,setup(r,{emit:t}){const a=r,e=t,{lang:o}=Ge(),l=_e("EP_PICKER_BASE"),{shortcuts:s,disabledDate:i}=l.props,g=ze(l.props,"format"),k=ze(l.props,"defaultValue"),m=U(H().locale(o.value)),d=U(H().locale(o.value).add(1,At)),{minDate:P,maxDate:D,rangeState:I,ppNs:p,drpNs:f,handleChangeRange:h,handleRangeConfirm:y,handleShortcutClick:c,onSelect:V}=yn(a,{defaultValue:k,leftDate:m,rightDate:d,unit:At,onParsedValueChanged:S}),w=O(()=>!!s.length),{leftPrevYear:F,rightNextYear:N,leftNextYear:T,rightPrevYear:E,leftLabel:_,rightLabel:G,leftYear:R,rightYear:ee}=Qo({unlinkPanels:ze(a,"unlinkPanels"),leftDate:m,rightDate:d}),J=O(()=>a.unlinkPanels&&ee.value>R.value+1),K=(A,$=!0)=>{const C=A.minDate,Y=A.maxDate;D.value===Y&&P.value===C||(e("calendar-change",[C.toDate(),Y&&Y.toDate()]),D.value=Y,P.value=C,$&&y())},ae=()=>{m.value=Pa(n(k),{lang:n(o),unit:"year",unlinkPanels:a.unlinkPanels})[0],d.value=m.value.add(1,"year"),e("pick",null)},se=A=>ve(A)?A.map($=>$.format(g.value)):A.format(g.value),q=A=>ve(A)?A.map($=>H($,g.value).locale(o.value)):H(A,g.value).locale(o.value);function S(A,$){if(a.unlinkPanels&&$){const C=A?.year()||0,Y=$.year();d.value=C===Y?$.add(1,At):$}else d.value=m.value.add(1,At)}return e("set-picker-option",["isValidValue",wt]),e("set-picker-option",["formatToString",se]),e("set-picker-option",["parseUserInput",q]),e("set-picker-option",["handleClear",ae]),(A,$)=>(j(),Z("div",{class:M([n(p).b(),n(f).b(),{"has-sidebar":!!A.$slots.sidebar||w.value}])},[B("div",{class:M(n(p).e("body-wrapper"))},[pe(A.$slots,"sidebar",{class:M(n(p).e("sidebar"))}),w.value?(j(),Z("div",{key:0,class:M(n(p).e("sidebar"))},[(j(!0),Z(Re,null,Ne(n(s),(C,Y)=>(j(),Z("button",{key:Y,type:"button",class:M(n(p).e("shortcut")),onClick:x=>n(c)(C)},ge(C.text),11,Xo))),128))],2)):me("",!0),B("div",{class:M(n(p).e("body"))},[B("div",{class:M([[n(p).e("content"),n(f).e("content")],"is-left"])},[B("div",{class:M(n(f).e("header"))},[B("button",{type:"button",class:M([n(p).e("icon-btn"),"d-arrow-left"]),onClick:$[0]||($[0]=(...C)=>n(F)&&n(F)(...C))},[pe(A.$slots,"prev-year",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],2),A.unlinkPanels?(j(),Z("button",{key:0,type:"button",disabled:!J.value,class:M([[n(p).e("icon-btn"),{[n(p).is("disabled")]:!J.value}],"d-arrow-right"]),onClick:$[1]||($[1]=(...C)=>n(T)&&n(T)(...C))},[pe(A.$slots,"next-year",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],10,es)):me("",!0),B("div",null,ge(n(_)),1)],2),oe(Wt,{"selection-mode":"range",date:m.value,"min-date":n(P),"max-date":n(D),"range-state":n(I),"disabled-date":n(i),onChangerange:n(h),onPick:K,onSelect:n(V)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),B("div",{class:M([[n(p).e("content"),n(f).e("content")],"is-right"])},[B("div",{class:M(n(f).e("header"))},[A.unlinkPanels?(j(),Z("button",{key:0,type:"button",disabled:!J.value,class:M([[n(p).e("icon-btn"),{"is-disabled":!J.value}],"d-arrow-left"]),onClick:$[2]||($[2]=(...C)=>n(E)&&n(E)(...C))},[pe(A.$slots,"prev-year",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],10,ts)):me("",!0),B("button",{type:"button",class:M([n(p).e("icon-btn"),"d-arrow-right"]),onClick:$[3]||($[3]=(...C)=>n(N)&&n(N)(...C))},[pe(A.$slots,"next-year",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],2),B("div",null,ge(n(G)),1)],2),oe(Wt,{"selection-mode":"range",date:d.value,"min-date":n(P),"max-date":n(D),"range-state":n(I),"disabled-date":n(i),onChangerange:n(h),onPick:K,onSelect:n(V)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}});wn.__docgenInfo={name:"DatePickerMonthRange",exportName:"default",displayName:"panel-month-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-month-range.vue"]};const as=xe({...Sa}),ns=["pick","set-picker-option","calendar-change"],rs=({unlinkPanels:r,leftDate:t,rightDate:a})=>{const e=()=>{t.value=t.value.subtract(10,"year"),r.value||(a.value=a.value.subtract(10,"year"))},o=()=>{r.value||(t.value=t.value.add(10,"year")),a.value=a.value.add(10,"year")},l=()=>{t.value=t.value.add(10,"year")},s=()=>{a.value=a.value.subtract(10,"year")},i=O(()=>{const d=Math.floor(t.value.year()/10)*10;return`${d}-${d+9}`}),g=O(()=>{const d=Math.floor(a.value.year()/10)*10;return`${d}-${d+9}`}),k=O(()=>Math.floor(t.value.year()/10)*10+9),m=O(()=>Math.floor(a.value.year()/10)*10);return{leftPrevYear:e,rightNextYear:o,leftNextYear:l,rightPrevYear:s,leftLabel:i,rightLabel:g,leftYear:k,rightYear:m}},os=["onClick"],ss=["disabled"],ls=["disabled"],qa="year",Dn=$e({name:"DatePickerYearRange",__name:"panel-year-range",props:as,emits:ns,setup(r,{emit:t}){const a=r,e=t,{lang:o}=Ge(),l=U(H().locale(o.value)),s=U(l.value.add(10,"year")),{pickerNs:i}=_e(Qt),g=Pe("date-range-picker"),k=O(()=>!!K.length),m=O(()=>[i.b(),g.b(),{"has-sidebar":!!ya().sidebar||k.value}]),d=O(()=>({content:[i.e("content"),g.e("content"),"is-left"],arrowLeftBtn:[i.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[i.e("icon-btn"),{[i.is("disabled")]:!F.value},"d-arrow-right"]})),P=O(()=>({content:[i.e("content"),g.e("content"),"is-right"],arrowLeftBtn:[i.e("icon-btn"),{"is-disabled":!F.value},"d-arrow-left"],arrowRightBtn:[i.e("icon-btn"),"d-arrow-right"]})),D=bn(o),{leftPrevYear:I,rightNextYear:p,leftNextYear:f,rightPrevYear:h,leftLabel:y,rightLabel:c,leftYear:V,rightYear:w}=rs({unlinkPanels:ze(a,"unlinkPanels"),leftDate:l,rightDate:s}),F=O(()=>a.unlinkPanels&&w.value>V.value+1),N=U(),T=U(),E=U({endDate:null,selecting:!1}),_=x=>{E.value=x},G=(x,L=!0)=>{const W=x.minDate,re=x.maxDate;T.value===re&&N.value===W||(e("calendar-change",[W.toDate(),re&&re.toDate()]),T.value=re,N.value=W,L&&R())},R=(x=!1)=>{wt([N.value,T.value])&&e("pick",[N.value,T.value],x)},ee=x=>{E.value.selecting=x,x||(E.value.endDate=null)},J=_e("EP_PICKER_BASE"),{shortcuts:K,disabledDate:ae}=J.props,se=ze(J.props,"format"),q=ze(J.props,"defaultValue"),S=()=>{let x;if(ve(q.value)){const L=H(q.value[0]);let W=H(q.value[1]);return a.unlinkPanels||(W=L.add(10,qa)),[L,W]}else q.value?x=H(q.value):x=H();return x=x.locale(o.value),[x,x.add(10,qa)]};Oe(()=>q.value,x=>{if(x){const L=S();l.value=L[0],s.value=L[1]}},{immediate:!0}),Oe(()=>a.parsedValue,x=>{if(x&&x.length===2)if(N.value=x[0],T.value=x[1],l.value=N.value,a.unlinkPanels&&T.value){const L=N.value.year(),W=T.value.year();s.value=L===W?T.value.add(10,"year"):T.value}else s.value=l.value.add(10,"year");else{const L=S();N.value=void 0,T.value=void 0,l.value=L[0],s.value=L[1]}},{immediate:!0});const A=x=>ve(x)?x.map(L=>H(L,se.value).locale(o.value)):H(x,se.value).locale(o.value),$=x=>ve(x)?x.map(L=>L.format(se.value)):x.format(se.value),C=x=>wt(x)&&(ae?!ae(x[0].toDate())&&!ae(x[1].toDate()):!0),Y=()=>{const x=S();l.value=x[0],s.value=x[1],T.value=void 0,N.value=void 0,e("pick",null)};return e("set-picker-option",["isValidValue",C]),e("set-picker-option",["parseUserInput",A]),e("set-picker-option",["formatToString",$]),e("set-picker-option",["handleClear",Y]),(x,L)=>(j(),Z("div",{class:M(m.value)},[B("div",{class:M(n(i).e("body-wrapper"))},[pe(x.$slots,"sidebar",{class:M(n(i).e("sidebar"))}),k.value?(j(),Z("div",{key:0,class:M(n(i).e("sidebar"))},[(j(!0),Z(Re,null,Ne(n(K),(W,re)=>(j(),Z("button",{key:re,type:"button",class:M(n(i).e("shortcut")),onClick:Fe=>n(D)(W)},ge(W.text),11,os))),128))],2)):me("",!0),B("div",{class:M(n(i).e("body"))},[B("div",{class:M(d.value.content)},[B("div",{class:M(n(g).e("header"))},[B("button",{type:"button",class:M(d.value.arrowLeftBtn),onClick:L[0]||(L[0]=(...W)=>n(I)&&n(I)(...W))},[pe(x.$slots,"prev-year",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],2),x.unlinkPanels?(j(),Z("button",{key:0,type:"button",disabled:!F.value,class:M(d.value.arrowRightBtn),onClick:L[1]||(L[1]=(...W)=>n(f)&&n(f)(...W))},[pe(x.$slots,"next-year",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],10,ss)):me("",!0),B("div",null,ge(n(y)),1)],2),oe(Zt,{"selection-mode":"range",date:l.value,"min-date":N.value,"max-date":T.value,"range-state":E.value,"disabled-date":n(ae),onChangerange:_,onPick:G,onSelect:ee},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),B("div",{class:M(P.value.content)},[B("div",{class:M(n(g).e("header"))},[x.unlinkPanels?(j(),Z("button",{key:0,type:"button",disabled:!F.value,class:M(P.value.arrowLeftBtn),onClick:L[2]||(L[2]=(...W)=>n(h)&&n(h)(...W))},[pe(x.$slots,"prev-year",{},()=>[oe(n(ye),{name:"solid chevron-left"})])],10,ls)):me("",!0),B("button",{type:"button",class:M(P.value.arrowRightBtn),onClick:L[3]||(L[3]=(...W)=>n(p)&&n(p)(...W))},[pe(x.$slots,"next-year",{},()=>[oe(n(ye),{name:"solid chevron-right"})])],2),B("div",null,ge(n(c)),1)],2),oe(Zt,{"selection-mode":"range",date:s.value,"min-date":N.value,"max-date":T.value,"range-state":E.value,"disabled-date":n(ae),onChangerange:_,onPick:G,onSelect:ee},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}});Dn.__docgenInfo={name:"DatePickerYearRange",exportName:"default",displayName:"panel-year-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-year-range.vue"]};const is=function(r){switch(r){case"daterange":case"datetimerange":return kn;case"monthrange":return wn;case"yearrange":return Dn;default:return hn}};H.extend(vr);H.extend(yr);H.extend(rn);H.extend(wr);H.extend(Sr);H.extend(Pr);H.extend(Mr);H.extend(Fr);const us=$e({name:"GDatePicker",install:null,props:vo,emits:["update:modelValue"],setup(r,{expose:t,emit:a,slots:e}){const o=Pe("picker-panel");yt("ElPopperOptions",Qe(ze(r,"popperOptions"))),yt(Qt,{slots:e,pickerNs:o});const l=U();t({focus:()=>{l.value?.focus()},blur:()=>{l.value?.blur()},handleOpen:()=>{l.value?.handleOpen()},handleClose:()=>{l.value?.handleClose()}});const i=g=>{a("update:modelValue",g)};return()=>{const g=r.format??(Qn[r.type]||Xn),k=is(r.type);return bt(bt(er,{...r,format:g,type:r.type,ref:l,"onUpdate:modelValue":i},{default:m=>bt(k,{...m},{"prev-month":e["prev-month"],"next-month":e["next-month"],"prev-year":e["prev-year"],"next-year":e["next-year"]}),"range-separator":e["range-separator"]}))}}}),cs=ka(us),La=["hours","minutes","seconds"],ds="HH:mm:ss",aa=(r,t)=>[r>0?r-1:void 0,r,r<t?r+1:void 0],Ya=function(r,t){const a=Ma(r),e=Ma(t);return a&&e?r.getTime()===t.getTime():!a&&!e?r===t:!1},ja=function(r,t){const a=ve(r),e=ve(t);return a&&e?r.length!==t.length?!1:r.every((o,l)=>Ya(o,t[l])):!a&&!e?Ya(r,t):!1},Ba=function(r,t,a){const e=Wa(t)||t==="x"?H(r).locale(a):H(r,t).locale(a);return e.isValid()?e:void 0},Ga=function(r,t,a){return Wa(t)?r:t==="x"?+r:H(r).locale(a).format(t)},na=(r,t)=>{const a=[],e=t?.();for(let o=0;o<r;o++)a.push(e?.includes(o)??!1);return a},Nt=r=>ve(r)?r.map(t=>t.toDate()):r.toDate(),Sn=xe({disabledHours:{type:ue(Function)},disabledMinutes:{type:ue(Function)},disabledSeconds:{type:ue(Function)}}),xn=xe({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Pn=xe({id:{type:ue([Array,String])},name:{type:ue([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:ue([String,Object]),default:cr},editable:{type:Boolean,default:!0},prefixIcon:{type:ue(String),default:""},readonly:Boolean,disabled:Boolean,label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},popperOptions:{type:ue(Object),default:()=>({})},modelValue:{type:ue([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:ue([Date,Array])},defaultTime:{type:ue([Date,Array])},isRange:Boolean,...Sn,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:ue([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:ue(String),values:Un,default:"bottom"},fallbackPlacements:{type:ue(Array),default:["bottom","top","right","left"]},...Bn,...or(["ariaLabel"]),showNow:{type:Boolean,default:!0}}),ms=xe({id:{type:ue(Array)},name:{type:ue(Array)},modelValue:{type:ue([Array,String])},startPlaceholder:String,endPlaceholder:String,label:String}),fs=["id","name","placeholder","value"],ps=["id","name","placeholder","value"],Cn=$e({name:"PickerRangeTrigger",inheritAttrs:!1,__name:"picker-range-trigger",props:ms,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(r,{expose:t,emit:a}){const e=r,o=a,l=dr(),s=Pe("input"),i=Pe("date"),g=Pe("range"),k=U(void 0),m=U(null),d=U(),P=U(),{wrapperRef:D,isFocused:I}=tn(d),p=R=>{o("click",R)},f=R=>{o("mouseenter",R)},h=R=>{o("mouseleave",R)},y=R=>{o("mouseenter",R)},c=R=>{o("startInput",R)},V=R=>{o("endInput",R)},w=R=>{o("startChange",R)},F=R=>{o("endChange",R)},N=()=>{d.value?.focus()},T=()=>{d.value?.blur(),P.value?.blur()},E=O(()=>{const R=!!_.value||I.value;return{left:R?void 0:`calc(${k.value} + 16px)`,zIndex:R?void 0:10}}),_=O(()=>Za(e.modelValue)?"":String(e.modelValue));return en(m,()=>{requestAnimationFrame(()=>{const R=m.value?.getBoundingClientRect().width;k.value=`${R}px`})}),t({focus:N,blur:T}),(R,ee)=>(j(),Z("div",{ref_key:"wrapperRef",ref:D,class:M([n(i).is("active",n(I)),R.$attrs.class]),style:Mt(R.$attrs.style),onClick:p,onMouseenter:f,onMouseleave:h,onTouchstartPassive:y},[pe(R.$slots,"prefix"),R.modelValue?(j(),Z("div",{key:0,class:M([n(s).e("label")]),style:Mt(E.value)},ge(R.label),7)):me("",!0),B("input",sa(n(l),{id:R.id&&R.id[0],ref_key:"inputRef",ref:d,name:R.name&&R.name[0],placeholder:R.startPlaceholder,value:R.modelValue&&R.modelValue[0],class:n(g).b("input"),onInput:c,onChange:w}),null,16,fs),pe(R.$slots,"range-separator"),B("input",sa(n(l),{id:R.id&&R.id[1],ref_key:"endInputRef",ref:P,name:R.name&&R.name[1],placeholder:R.endPlaceholder,value:R.modelValue&&R.modelValue[1],class:n(g).b("input"),onInput:V,onChange:F}),null,16,ps),pe(R.$slots,"suffix")],38))}});Cn.__docgenInfo={name:"PickerRangeTrigger",exportName:"default",displayName:"picker-range-trigger",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],events:[{name:"mouseenter"},{name:"mouseleave"},{name:"click"},{name:"touchstart"},{name:"focus"},{name:"blur"},{name:"startInput"},{name:"endInput"},{name:"startChange"},{name:"endChange"}],slots:[{name:"prefix"},{name:"range-separator"},{name:"suffix"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker-range-trigger.vue"]};const Mn=$e({name:"Picker",__name:"picker",props:Pn,emits:["update:modelValue","change","focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(r,{expose:t,emit:a}){const e=r,o=a,l=ba(),{lang:s}=Ge(),i=Pe("date"),g=Pe("input"),k=Pe("range"),m=U(void 0),d=U(null),{form:P,formItem:D}=jn(),I=_e("ElPopperOptions",{}),{valueOnClear:p}=Gn(e,null),f=U(),h=U(),y=U(!1),c=U(!1),V=U(null);let w=!1;const{isFocused:F,handleFocus:N,handleBlur:T}=tn(h,{beforeFocus(){return e.readonly||L.value},afterFocus(){y.value=!0},beforeBlur(v){return!w&&f.value?.isFocusInsideContent(v)},afterBlur(){at(),y.value=!1,w=!1,e.validateEvent&&D?.validate("blur").catch(v=>ia())}}),E=O(()=>{const v=!!_.value||F.value;return{left:v?void 0:`calc(${m.value} + 16px)`,zIndex:v?void 0:10}}),_=O(()=>Za(e.modelValue)?"":String(e.modelValue)),G=()=>{if(!e.prefixIcon){m.value="0";return}requestAnimationFrame(()=>{const v=d.value?.getBoundingClientRect().width;m.value=`${v}px`})},R=O(()=>[i.b("editor"),i.bm("editor",e.type),g.e("wrapper"),i.is("disabled",L.value),i.is("active",y.value),k.b("editor"),l.class]),ee=O(()=>[g.e("icon"),k.e("close-icon"),ie.value?"":k.e("close-icon--hidden")]);Oe(y,v=>{v?je(()=>{v&&(V.value=e.modelValue)}):(de.value=null,je(()=>{J(e.modelValue)}))});const J=(v,ne)=>{(ne||!ja(v,V.value))&&(o("change",v),e.validateEvent&&D?.validate("change").catch(we=>ia()))},K=v=>{if(!ja(e.modelValue,v)){let ne;ve(v)?ne=v.map(we=>Ga(we,e.valueFormat,s.value)):v&&(ne=Ga(v,e.valueFormat,s.value)),o("update:modelValue",v&&ne,s.value)}},ae=v=>{o("keydown",v)},se=O(()=>h.value?Array.from(h.value.$el.querySelectorAll("input")):[]),q=(v,ne,we)=>{const Ve=se.value;Ve.length&&(!we||we==="min"?(Ve[0].setSelectionRange(v,ne),Ve[0].focus()):we==="max"&&(Ve[1].setSelectionRange(v,ne),Ve[1].focus()))},S=(v="",ne=!1)=>{y.value=ne;let we;ve(v)?we=v.map(Ve=>Ve.toDate()):we=v&&v.toDate(),de.value=null,K(we)},A=()=>{c.value=!0},$=()=>{o("visible-change",!0)},C=()=>{c.value=!1,y.value=!1,o("visible-change",!1)},Y=()=>{y.value=!0},x=()=>{y.value=!1},L=O(()=>e.disabled||P?.disabled),W=O(()=>{let v;if(fe.value?b.value.getDefaultValue&&(v=b.value.getDefaultValue()):ve(e.modelValue)?v=e.modelValue.map(ne=>Ba(ne,e.valueFormat,s.value)):v=Ba(e.modelValue,e.valueFormat,s.value),b.value.getRangeAvailableTime){const ne=b.value.getRangeAvailableTime(v);mr(ne,v)||(v=ne,fe.value||K(Nt(v)))}return ve(v)&&v.some(ne=>!ne)&&(v=[]),v}),re=O(()=>{if(!b.value.panelReady)return"";const v=st(W.value);return ve(de.value)?[de.value[0]||v&&v[0]||"",de.value[1]||v&&v[1]||""]:de.value!==null?de.value:!Ae.value&&fe.value||!y.value&&fe.value?"":v?Ue.value||Q.value||X.value?v.join(", "):v:""}),Fe=O(()=>e.type.includes("time")),Ae=O(()=>e.type.startsWith("time")),Ue=O(()=>e.type==="dates"),Q=O(()=>e.type==="months"),X=O(()=>e.type==="years"),le=O(()=>e.prefixIcon||(Fe.value?"regular clock":"regular calendar")),ie=U(!1),be=v=>{e.readonly||L.value||(ie.value&&(v.stopPropagation(),b.value.handleClear?b.value.handleClear():K(p.value),J(p.value,!0),ie.value=!1,C()),o("clear"))},fe=O(()=>{const{modelValue:v}=e;return!v||ve(v)&&!v.filter(Boolean).length}),ke=async v=>{e.readonly||L.value||(v.target?.tagName!=="INPUT"||F.value)&&(y.value=!0)},De=()=>{e.readonly||L.value||!fe.value&&e.clearable&&(ie.value=!0)},Ee=()=>{ie.value=!1},Te=v=>{e.readonly||L.value||(v.touches[0].target?.tagName!=="INPUT"||F.value)&&(y.value=!0)},Xe=O(()=>e.type.includes("range")),Dt=O(()=>n(f)?.popperRef?.contentRef),pt=ir(h,v=>{const ne=n(Dt),we=ur(h);ne&&(v.target===ne||v.composedPath().includes(ne))||v.target===we||we&&v.composedPath().includes(we)||(y.value=!1)});Ka(()=>{pt?.()});const de=U(null);en(d,G);const at=()=>{if(de.value){const v=et(re.value);v&&We(v)&&(K(Nt(v)),de.value=null)}de.value===""&&(K(p.value),J(p.value),de.value=null)},et=v=>v?b.value.parseUserInput(v):null,st=v=>v?b.value.formatToString(v):null,We=v=>b.value.isValidValue(v),Ke=async v=>{if(e.readonly||L.value)return;const{code:ne}=v;if(ae(v),ne===Me.esc){y.value===!0&&(y.value=!1,v.preventDefault(),v.stopPropagation());return}if(ne===Me.down&&(b.value.handleFocusPicker&&(v.preventDefault(),v.stopPropagation()),y.value===!1&&(y.value=!0,await je()),b.value.handleFocusPicker)){b.value.handleFocusPicker();return}if(ne===Me.tab){w=!0;return}if(ne===Me.enter||ne===Me.numpadEnter){(de.value===null||de.value===""||We(et(re.value)))&&(at(),y.value=!1),v.stopPropagation();return}if(de.value){v.stopPropagation();return}b.value.handleKeydownInput&&b.value.handleKeydownInput(v)},St=v=>{de.value=v,y.value||(y.value=!0)},xt=v=>{const ne=v.target;de.value?de.value=[ne.value,de.value[1]]:de.value=[ne.value,null]},vt=v=>{const ne=v.target;de.value?de.value=[de.value[0],ne.value]:de.value=[null,ne.value]},z=()=>{const v=de.value,ne=et(v&&v[0]),we=n(W);if(ne&&ne.isValid()){de.value=[st(ne),re.value?.[1]||null];const Ve=[ne,we&&(we[1]||null)];We(Ve)&&(K(Nt(Ve)),de.value=null)}},u=()=>{const v=n(de),ne=et(v&&v[1]),we=n(W);if(ne&&ne.isValid()){de.value=[n(re)?.[0]||null,st(ne)];const Ve=[we&&we[0],ne];We(Ve)&&(K(Nt(Ve)),de.value=null)}},b=U({}),te=v=>{b.value[v[0]]=v[1],b.value.panelReady=!0},Se=v=>{o("calendar-change",v)},Ce=(v,ne,we)=>{o("panel-change",v,ne,we)},lt=()=>{h.value?.focus()},Pt=()=>{h.value?.blur()};return yt("EP_PICKER_BASE",{props:e}),t({focus:lt,blur:Pt,handleOpen:Y,handleClose:x,onPick:S}),(v,ne)=>(j(),Le(n(nr),sa({ref_key:"refPopper",ref:f,visible:y.value,pure:"",trigger:"click"},v.$attrs,{role:"dialog",teleported:"",transition:`${n(i).namespace.value}-zoom-in-top`,"popper-class":[`${n(i).namespace.value}-picker__popper`],"popper-options":n(I),"fallback-placements":v.fallbackPlacements,"gpu-acceleration":!1,placement:v.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:A,onShow:$,onHide:C}),{default:He(()=>[Xe.value?(j(),Le(Cn,{key:1,id:v.id,ref_key:"inputRef",ref:h,"model-value":re.value,name:v.name,disabled:L.value,readonly:!v.editable||v.readonly,label:v.label,"start-placeholder":v.startPlaceholder,"end-placeholder":v.endPlaceholder,class:M(R.value),style:Mt(v.$attrs.style),"aria-label":v.ariaLabel,tabindex:v.tabindex,autocomplete:"off",role:"combobox",onClick:ke,onFocus:n(N),onBlur:n(T),onStartInput:xt,onStartChange:z,onEndInput:vt,onEndChange:u,onMousedown:ke,onMouseenter:De,onMouseleave:Ee,onTouchstartPassive:Te,onKeydown:Ke},{prefix:He(()=>[le.value?(j(),Le(n(ye),{key:0,class:M([n(g).e("icon"),n(k).e("icon")]),name:le.value},null,8,["class","name"])):me("",!0)]),"range-separator":He(()=>[pe(v.$slots,"range-separator",{},()=>[B("span",{class:M(n(k).b("separator"))},ge(v.rangeSeparator),3)])]),suffix:He(()=>[v.clearIcon?(j(),Le(n(ye),{key:0,class:M(ee.value),onMousedown:Je(n(Ra),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):me("",!0)]),_:3},8,["id","model-value","name","disabled","readonly","label","start-placeholder","end-placeholder","class","style","aria-label","tabindex","onFocus","onBlur"])):(j(),Le(n(it),{key:0,id:v.id,ref_key:"inputRef",ref:h,"container-role":"combobox","model-value":re.value,name:v.name,disabled:L.value,label:v.label,class:M([n(i).b("editor"),n(i).bm("editor",v.type),v.$attrs.class]),style:Mt(v.$attrs.style),readonly:!v.editable||v.readonly||Ue.value||Q.value||X.value||v.type==="week","aria-label":v.ariaLabel,tabindex:v.tabindex,"validate-event":!1,helpText:v.helpText,messageError:v.messageError,onInput:St,onFocus:n(N),onBlur:n(T),onKeydown:Ke,onChange:at,onMousedown:ke,onMouseenter:De,onMouseleave:Ee,onTouchstartPassive:Te,onClick:ne[0]||(ne[0]=Je(()=>{},["stop"]))},{prefix:He(()=>[le.value?(j(),Le(n(ye),{key:0,class:M(n(g).e("icon")),onMousedown:Je(ke,["prevent"]),onTouchstartPassive:Te,name:le.value},null,8,["class","name"])):me("",!0)]),suffix:He(()=>[ie.value&&v.clearIcon?(j(),Le(n(ye),{key:0,class:M(`${n(g).e("icon")} clear-icon`),onMousedown:Je(n(Ra),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):me("",!0)]),default:He(()=>[B("span",null,ge(v.label),1),v.label?(j(),Z("div",{key:0,class:M([n(g).e("label")]),style:Mt(E.value)},ge(v.label),7)):me("",!0)]),_:1},8,["id","model-value","name","disabled","label","class","style","readonly","aria-label","tabindex","helpText","messageError","onFocus","onBlur"]))]),content:He(()=>[pe(v.$slots,"default",{visible:y.value,actualVisible:c.value,parsedValue:W.value,format:v.format,dateFormat:v.dateFormat,timeFormat:v.timeFormat,unlinkPanels:v.unlinkPanels,type:v.type,defaultValue:v.defaultValue,showNow:v.showNow,onPick:S,onSelectRange:q,onSetPickerOption:te,onCalendarChange:Se,onPanelChange:Ce,onMousedown:ne[1]||(ne[1]=Je(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options","fallback-placements","placement"]))}});Mn.__docgenInfo={name:"Picker",exportName:"default",displayName:"picker",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus input box."}]},{name:"blur",tags:[{title:"description",content:"blur input box."}]},{name:"handleOpen",tags:[{title:"description",content:"opens picker"}]},{name:"handleClose",tags:[{title:"description",content:"closes picker"}]},{name:"onPick",tags:[{title:"description",content:"pick item manually"}]}],events:[{name:"update:modelValue"},{name:"change"},{name:"focus"},{name:"blur"},{name:"clear"},{name:"calendar-change"},{name:"panel-change"},{name:"visible-change"},{name:"keydown"}],slots:[{name:"range-separator"},{name:"default",scoped:!0,bindings:[{name:"visible",title:"binding"},{name:"actual-visible",title:"binding"},{name:"parsed-value",title:"binding"},{name:"format",title:"binding"},{name:"date-format",title:"binding"},{name:"time-format",title:"binding"},{name:"unlink-panels",title:"binding"},{name:"type",title:"binding"},{name:"default-value",title:"binding"},{name:"show-now",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker.vue"]};const vs=xe({...xn,datetimeRole:String,parsedValue:{type:ue(Object)}}),Rn=({getAvailableHours:r,getAvailableMinutes:t,getAvailableSeconds:a})=>{const e=(s,i,g,k)=>{const m={hour:r,minute:t,second:a};let d=s;return["hour","minute","second"].forEach(P=>{if(m[P]){let D;const I=m[P];switch(P){case"minute":{D=I(d.hour(),i,k);break}case"second":{D=I(d.hour(),d.minute(),i,k);break}default:{D=I(i,k);break}}if(D?.length&&!D.includes(d[P]())){const p=g?0:D.length-1;d=d[P](D[p])}}}),d},o={};return{timePickerOptions:o,getAvailableTime:e,onSetOption:([s,i])=>{o[s]=i}}},ra=r=>{const t=(e,o)=>e||o,a=e=>e!==!0;return r.map(t).filter(a)},Fn=(r,t,a)=>({getHoursList:(s,i)=>na(24,r&&(()=>r?.(s,i))),getMinutesList:(s,i,g)=>na(60,t&&(()=>t?.(s,i,g))),getSecondsList:(s,i,g,k)=>na(60,a&&(()=>a?.(s,i,g,k)))}),En=(r,t,a)=>{const{getHoursList:e,getMinutesList:o,getSecondsList:l}=Fn(r,t,a);return{getAvailableHours:(k,m)=>ra(e(k,m)),getAvailableMinutes:(k,m,d)=>ra(o(k,m,d)),getAvailableSeconds:(k,m,d,P)=>ra(l(k,m,d,P))}},Vn=r=>{const t=U(r.parsedValue);return Oe(()=>r.visible,a=>{a||(t.value=r.parsedValue)}),t},gs=xe({role:{type:String,required:!0},spinnerDate:{type:ue(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:ue(String),default:""},...Sn}),hs=["onClick"],bs=["onMouseenter"],Jt=$e({__name:"basic-time-spinner",props:gs,emits:["change","select-range","set-option"],setup(r,{emit:t}){const a=r,e=_e("EP_PICKER_BASE"),{isRange:o}=e.props,l=t,s=Pe("time"),{getHoursList:i,getMinutesList:g,getSecondsList:k}=Fn(a.disabledHours,a.disabledMinutes,a.disabledSeconds);let m=!1;const d=U(),P=U(),D=U(),I=U(),p={hours:P,minutes:D,seconds:I},f=O(()=>a.showSeconds?La:La.slice(0,2)),h=O(()=>{const{spinnerDate:C}=a,Y=C.hour(),x=C.minute(),L=C.second();return{hours:Y,minutes:x,seconds:L}}),y=O(()=>{const{hours:C,minutes:Y}=n(h),{role:x,spinnerDate:L}=a,W=o?void 0:L;return{hours:i(x,W),minutes:g(C,x,W),seconds:k(C,Y,x,W)}}),c=O(()=>{const{hours:C,minutes:Y,seconds:x}=n(h);return{hours:aa(C,23),minutes:aa(Y,59),seconds:aa(x,59)}}),V=fr(C=>{m=!1,N(C)},200),w=C=>{if(!!!a.amPmMode)return"";const x=a.amPmMode==="A";let L=C<12?" am":" pm";return x&&(L=L.toUpperCase()),L},F=C=>{let Y;switch(C){case"hours":Y=[0,2];break;case"minutes":Y=[3,5];break;case"seconds":Y=[6,8];break}const[x,L]=Y;l("select-range",x,L),d.value=C},N=C=>{_(C,n(h)[C])},T=()=>{N("hours"),N("minutes"),N("seconds")},E=C=>C.querySelector(`.${s.namespace.value}-scrollbar__wrap`),_=(C,Y)=>{if(a.arrowControl)return;const x=n(p[C]);x&&x.$el&&(E(x.$el).scrollTop=Math.max(0,Y*G(C)))},G=C=>{const x=n(p[C])?.$el.querySelector("li");return x&&Number.parseFloat(lr(x,"height"))||0},R=()=>{J(1)},ee=()=>{J(-1)},J=C=>{d.value||F("hours");const Y=d.value,x=n(h)[Y],L=d.value==="hours"?24:60,W=K(Y,x,C,L);ae(Y,W),_(Y,W),je(()=>F(Y))},K=(C,Y,x,L)=>{let W=(Y+x+L)%L;const re=n(y)[C];for(;re[W]&&W!==Y;)W=(W+x+L)%L;return W},ae=(C,Y)=>{if(n(y)[C][Y])return;const{hours:W,minutes:re,seconds:Fe}=n(h);let Ae;switch(C){case"hours":Ae=a.spinnerDate.hour(Y).minute(re).second(Fe);break;case"minutes":Ae=a.spinnerDate.hour(W).minute(Y).second(Fe);break;case"seconds":Ae=a.spinnerDate.hour(W).minute(re).second(Y);break}l("change",Ae)},se=(C,{value:Y,disabled:x})=>{x||(ae(C,Y),F(C),_(C,Y))},q=C=>{const Y=n(p[C]);if(!Y)return;m=!0,V(C);const x=Math.min(Math.round((E(Y.$el).scrollTop-(S(C)*.5-10)/G(C)+3)/G(C)),C==="hours"?23:59);ae(C,x)},S=C=>n(p[C]).$el.offsetHeight,A=()=>{const C=Y=>{const x=n(p[Y]);x&&x.$el&&(E(x.$el).onscroll=()=>{q(Y)})};C("hours"),C("minutes"),C("seconds")};Ua(()=>{je(()=>{!a.arrowControl&&A(),T(),a.role==="start"&&F("hours")})});const $=(C,Y)=>{p[Y].value=C??void 0};return l("set-option",[`${a.role}_scrollDown`,J]),l("set-option",[`${a.role}_emitSelectRange`,F]),Oe(()=>a.spinnerDate,()=>{m||T()}),(C,Y)=>(j(),Z("div",{class:M([n(s).b("spinner"),{"has-seconds":C.showSeconds}])},[C.arrowControl?me("",!0):(j(!0),Z(Re,{key:0},Ne(f.value,x=>(j(),Le(n(tr),{key:x,ref_for:!0,ref:L=>$(L,x),class:M(n(s).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":n(s).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:L=>F(x),onMousemove:L=>N(x)},{default:He(()=>[(j(!0),Z(Re,null,Ne(y.value[x],(L,W)=>(j(),Z("li",{key:W,class:M([n(s).be("spinner","item"),n(s).is("active",W===h.value[x]),n(s).is("disabled",L)]),onClick:re=>se(x,{value:W,disabled:L})},[x==="hours"?(j(),Z(Re,{key:0},[ht(ge(("0"+(C.amPmMode?W%12||12:W)).slice(-2))+ge(w(W)),1)],64)):(j(),Z(Re,{key:1},[ht(ge(("0"+W).slice(-2)),1)],64))],10,hs))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),C.arrowControl?(j(!0),Z(Re,{key:1},Ne(f.value,x=>(j(),Z("div",{key:x,class:M([n(s).be("spinner","wrapper"),n(s).is("arrow")]),onMouseenter:L=>F(x)},[qe(oe(n(ye),{name:"regular chevron-up"},null,512),[[n(Va),ee]]),qe(oe(n(ye),{name:"regular chevron-down"},null,512),[[n(Va),R]]),B("ul",{class:M(n(s).be("spinner","list"))},[(j(!0),Z(Re,null,Ne(c.value[x],(L,W)=>(j(),Z("li",{key:W,class:M([n(s).be("spinner","item"),n(s).is("active",L===h.value[x]),n(s).is("disabled",y.value[x][L])])},[n(qn)(L)?(j(),Z(Re,{key:0},[x==="hours"?(j(),Z(Re,{key:0},[ht(ge(("0"+(C.amPmMode?L%12||12:L)).slice(-2))+ge(w(L)),1)],64)):(j(),Z(Re,{key:1},[ht(ge(("0"+L).slice(-2)),1)],64))],64)):me("",!0)],2))),128))],2)],42,bs))),128)):me("",!0)],2))}});Jt.__docgenInfo={exportName:"default",displayName:"basic-time-spinner",description:"",tags:{},events:[{name:"change"},{name:"select-range"},{name:"set-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]};const In=$e({__name:"panel-time-pick",props:vs,emits:["pick","select-range","set-picker-option"],setup(r,{emit:t}){const a=r,e=t,o=_e("EP_PICKER_BASE"),{arrowControl:l,disabledHours:s,disabledMinutes:i,disabledSeconds:g,defaultValue:k}=o.props,{getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:P}=En(s,i,g),D=Pe("time"),{lang:I}=Ge(),p=U([0,2]),f=Vn(a),h=O(()=>Ln(a.actualVisible)?`${D.namespace.value}-zoom-in-top`:""),y=O(()=>a.format.includes("ss")),c=O(()=>a.format.includes("A")?"A":a.format.includes("a")?"a":""),V=q=>{const S=H(q).locale(I.value),A=J(S);return S.isSame(A)},w=()=>{e("pick",f.value,!1)},F=(q=!1,S=!1)=>{S||e("pick",a.parsedValue,q)},N=q=>{if(!a.visible)return;const S=J(q).millisecond(0);e("pick",S,!0)},T=(q,S)=>{e("select-range",q,S),p.value=[q,S]},E=q=>{const S=[0,3].concat(y.value?[6]:[]),A=["hours","minutes"].concat(y.value?["seconds"]:[]),C=(S.indexOf(p.value[0])+q+S.length)%S.length;G.start_emitSelectRange(A[C])},_=q=>{const S=q.code,{left:A,right:$,up:C,down:Y}=Me;if([A,$].includes(S)){E(S===A?-1:1),q.preventDefault();return}if([C,Y].includes(S)){const x=S===C?-1:1;G.start_scrollDown(x),q.preventDefault();return}},{timePickerOptions:G,onSetOption:R,getAvailableTime:ee}=Rn({getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:P}),J=q=>ee(q,a.datetimeRole||"",!0),K=q=>q?H(q,a.format).locale(I.value):null,ae=q=>q?q.format(a.format):null,se=()=>H(k).locale(I.value);return e("set-picker-option",["isValidValue",V]),e("set-picker-option",["formatToString",ae]),e("set-picker-option",["parseUserInput",K]),e("set-picker-option",["handleKeydownInput",_]),e("set-picker-option",["getRangeAvailableTime",J]),e("set-picker-option",["getDefaultValue",se]),(q,S)=>(j(),Le(An,{name:h.value},{default:He(()=>[q.actualVisible||q.visible?(j(),Z("div",{key:0,class:M(n(D).b("panel"))},[B("div",{class:M([n(D).be("panel","content"),{"has-seconds":y.value}])},[oe(Jt,{ref:"spinner",role:q.datetimeRole||"start","arrow-control":n(l),"show-seconds":y.value,"am-pm-mode":c.value,"spinner-date":q.parsedValue,"disabled-hours":n(s),"disabled-minutes":n(i),"disabled-seconds":n(g),onChange:N,onSetOption:n(R),onSelectRange:T},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),B("div",{class:M(n(D).be("panel","footer"))},[B("button",{type:"button",class:M([n(D).be("panel","btn"),"cancel"]),onClick:w}," Cancelar ",2),B("button",{type:"button",class:M([n(D).be("panel","btn"),"confirm"]),onClick:S[0]||(S[0]=A=>F())}," Ok ",2)],2)],2)):me("",!0)]),_:1},8,["name"]))}});In.__docgenInfo={exportName:"default",displayName:"panel-time-pick",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-pick.vue"]};const ys=xe({...xn,parsedValue:{type:ue(Array)}}),ks=["disabled"],On=$e({__name:"panel-time-range",props:ys,emits:["pick","select-range","set-picker-option"],setup(r,{emit:t}){const a=r,e=t,o=(Q,X)=>{const le=[];for(let ie=Q;ie<=X;ie++)le.push(ie);return le},{lang:l}=Ge(),s=Pe("time"),i=Pe("picker"),g=_e("EP_PICKER_BASE"),{arrowControl:k,disabledHours:m,disabledMinutes:d,disabledSeconds:P,defaultValue:D}=g.props,I=O(()=>[s.be("range-picker","body"),s.be("panel","content"),s.is("arrow",k),V.value?"has-seconds":""]),p=O(()=>[s.be("range-picker","body"),s.be("panel","content"),s.is("arrow",k),V.value?"has-seconds":""]),f=O(()=>a.parsedValue[0]),h=O(()=>a.parsedValue[1]),y=Vn(a),c=()=>{e("pick",y.value,!1)},V=O(()=>a.format.includes("ss")),w=O(()=>a.format.includes("A")?"A":a.format.includes("a")?"a":""),F=(Q=!1)=>{e("pick",[f.value,h.value],Q)},N=Q=>{_(Q.millisecond(0),h.value)},T=Q=>{_(f.value,Q.millisecond(0))},E=Q=>{const X=Q.map(ie=>H(ie).locale(l.value)),le=$(X);return X[0].isSame(le[0])&&X[1].isSame(le[1])},_=(Q,X)=>{a.visible&&e("pick",[Q,X],!0)},G=O(()=>f.value>h.value),R=U([0,2]),ee=(Q,X)=>{e("select-range",Q,X,"min"),R.value=[Q,X]},J=O(()=>V.value?11:8),K=(Q,X)=>{e("select-range",Q,X,"max");const le=n(J);R.value=[Q+le,X+le]},ae=Q=>{const X=V.value?[0,3,6,11,14,17]:[0,3,8,11],le=["hours","minutes"].concat(V.value?["seconds"]:[]),be=(X.indexOf(R.value[0])+Q+X.length)%X.length,fe=X.length/2;be<fe?L.start_emitSelectRange(le[be]):L.end_emitSelectRange(le[be-fe])},se=Q=>{const X=Q.code,{left:le,right:ie,up:be,down:fe}=Me;if([le,ie].includes(X)){ae(X===le?-1:1),Q.preventDefault();return}if([be,fe].includes(X)){const ke=X===be?-1:1,De=R.value[0]<J.value?"start":"end";L[`${De}_scrollDown`](ke),Q.preventDefault();return}},q=(Q,X)=>{const le=m?m(Q):[],ie=Q==="start",fe=(X||(ie?h.value:f.value)).hour(),ke=ie?o(fe+1,23):o(0,fe-1);return ea(le,ke)},S=(Q,X,le)=>{const ie=d?d(Q,X):[],be=X==="start",fe=le||(be?h.value:f.value),ke=fe.hour();if(Q!==ke)return ie;const De=fe.minute(),Ee=be?o(De+1,59):o(0,De-1);return ea(ie,Ee)},A=(Q,X,le,ie)=>{const be=P?P(Q,X,le):[],fe=le==="start",ke=ie||(fe?h.value:f.value),De=ke.hour(),Ee=ke.minute();if(Q!==De||X!==Ee)return be;const Te=ke.second(),Xe=fe?o(Te+1,59):o(0,Te-1);return ea(be,Xe)},$=([Q,X])=>[W(Q,"start",!0,X),W(X,"end",!1,Q)],{getAvailableHours:C,getAvailableMinutes:Y,getAvailableSeconds:x}=En(q,S,A),{timePickerOptions:L,getAvailableTime:W,onSetOption:re}=Rn({getAvailableHours:C,getAvailableMinutes:Y,getAvailableSeconds:x}),Fe=Q=>Q?ve(Q)?Q.map(X=>H(X,a.format).locale(l.value)):H(Q,a.format).locale(l.value):null,Ae=Q=>Q?ve(Q)?Q.map(X=>X.format(a.format)):Q.format(a.format):null,Ue=()=>{if(ve(D))return D.map(X=>H(X).locale(l.value));const Q=H(D).locale(l.value);return[Q,Q.add(60,"m")]};return e("set-picker-option",["formatToString",Ae]),e("set-picker-option",["parseUserInput",Fe]),e("set-picker-option",["isValidValue",E]),e("set-picker-option",["handleKeydownInput",se]),e("set-picker-option",["getDefaultValue",Ue]),e("set-picker-option",["getRangeAvailableTime",$]),(Q,X)=>Q.actualVisible?(j(),Z("div",{key:0,class:M([n(s).b("range-picker"),n(i).b("panel")])},[B("div",{class:M(n(s).be("range-picker","content"))},[B("div",{class:M(n(s).be("range-picker","cell"))},[B("div",{class:M(n(s).be("range-picker","header"))},"Inicio",2),B("div",{class:M(I.value)},[oe(Jt,{ref:"minSpinner",role:"start","show-seconds":V.value,"am-pm-mode":w.value,"arrow-control":n(k),"spinner-date":f.value,"disabled-hours":q,"disabled-minutes":S,"disabled-seconds":A,onChange:N,onSetOption:n(re),onSelectRange:ee},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),B("div",{class:M(n(s).be("range-picker","cell"))},[B("div",{class:M(n(s).be("range-picker","header"))},"Fin",2),B("div",{class:M(p.value)},[oe(Jt,{ref:"maxSpinner",role:"end","show-seconds":V.value,"am-pm-mode":w.value,"arrow-control":n(k),"spinner-date":h.value,"disabled-hours":q,"disabled-minutes":S,"disabled-seconds":A,onChange:T,onSetOption:n(re),onSelectRange:K},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),B("div",{class:M(n(s).be("panel","footer"))},[B("button",{type:"button",class:M([n(s).be("panel","btn"),"cancel"]),onClick:X[0]||(X[0]=le=>c())}," Cancelar ",2),B("button",{type:"button",class:M([n(s).be("panel","btn"),"confirm"]),disabled:G.value,onClick:X[1]||(X[1]=le=>F())}," Ok ",10,ks)],2)],2)):me("",!0)}});On.__docgenInfo={exportName:"default",displayName:"panel-time-range",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-range.vue"]};H.extend(rn);const ws=$e({name:"GTimePicker",install:null,props:{...Pn,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(r,t){const a=U(),[e,o]=r.isRange?["timerange",On]:["time",In],l=s=>t.emit("update:modelValue",s);return yt("ElPopperOptions",r.popperOptions),t.expose({focus:()=>{a.value?.focus()},blur:()=>{a.value?.blur()},handleOpen:()=>{a.value?.handleOpen()},handleClose:()=>{a.value?.handleClose()}}),()=>{const s=r.format??ds;return bt(bt(Mn,{...r,ref:a,type:e,format:s,"onUpdate:modelValue":l},{default:i=>bt(o,{...i})}))}}}),Ds=ka(ws),yl={title:"Form/Form",component:ot,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
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
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},_t={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:dt,GConfigProvider:ct,GButton:mt,GSelect:Kn,GRadio:zn,GCheckbox:Wn,GSegmented:Ea,GDatePicker:cs,GTimePicker:Ds},setup(){const r=U(),t=Qe({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1,preferredContact:"",birthDate:"",appointmentDate:"",appointmentTime:""}),a=[{label:"Email",value:"email"},{label:"Teléfono",value:"phone"},{label:"WhatsApp",value:"whatsapp"}],e=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],o={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},l=O(()=>t.country?o[t.country]||[]:[]);Oe(()=>t.country,()=>{t.city=""});const s=d=>d.getTime()>Date.now(),i=d=>d.getTime()<Date.now(),g={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(d,P,D)=>{P===!0?D():D(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}],preferredContact:[{validator:(d,P,D)=>{P||D(new Error("Debe seleccionar un método de contacto preferido")),D()},type:"boolean",trigger:"change"}],birthDate:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:"change"}],appointmentDate:[{required:!0,message:"La fecha de cita es requerida",trigger:"change"}],appointmentTime:[{required:!0,message:"La hora de cita es requerida",trigger:"change"}]};async function k(){if(r.value)try{await r.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",t)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(d){console.error("Validation error:",d)}}function m(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,countries:e,availableCities:l,rules:g,contactOptions:a,disableFutureDates:s,disablePastDates:i,GSegmented:Ea,handleSubmit:k,handleReset:m}},template:`
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
    `})},qt={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del formulario con validaciones."}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:dt,GConfigProvider:ct,GButton:mt},setup(){const r=U(),t=Qe({nombre:"",email:""}),a={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Email inválido",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((l,s)=>{l?console.log("submit!",s):console.log("error submit!"+s)})}async function o(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:a,handleSubmit:e,handleReset:o}},template:`
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
    `})},Lt={name:"Reglas Personalizadas",parameters:{docs:{description:{story:`Las reglas de validación pueden ser personalizadas usando funciones validadoras. Por ejemplo, para validar la edad de un usuario:

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

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:dt,GConfigProvider:ct,GButton:mt},setup(){const r=U(),t=Qe({pass:"",checkPass:"",age:""}),l={pass:[{validator:(g,k,m)=>{k===""?m(new Error("Ingrese una contraseña")):(t.checkPass!==""&&r.value?.validateField("checkPass"),m())},trigger:"blur"}],checkPass:[{validator:(g,k,m)=>{k===""?m(new Error("Confirme su contraseña")):k!==t.pass?m(new Error("Las contraseñas no coinciden")):m()},trigger:"blur"}],age:[{validator:(g,k,m)=>{if(!k)return m(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(k))?Number(k)<18?m(new Error("La edad debe ser mayor a 18")):m():m(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function s(){r.value&&await r.value.validate((g,k)=>{g?console.log("submit!",t):console.log("error submit!",k)})}async function i(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:l,handleSubmit:s,handleReset:i}},template:`
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
    `})},Yt={name:"Tipo de ejecución",parameters:{docs:{description:{story:`La validación de campos puede realizarse de dos formas:

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

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:dt,GConfigProvider:ct,GButton:mt},setup(){const r=U(),t=Qe({email:"",password:""}),a={email:[{required:!0,message:"El email es requerido",trigger:"change"},{type:"email",message:"Ingrese un email válido",trigger:"change"}],password:[{required:!0,message:"La contraseña es requerida",trigger:"blur"},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((l,s)=>{l?console.log("submit!",s):console.log("error submit!"+s)})}async function o(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,rules:a,handleSubmit:e,handleReset:o}},template:`
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
    `})},jt={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:dt,GConfigProvider:ct,GButton:mt},setup(){return{formData:Qe({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
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
    `})},Bt={name:"Prevenir Submit",parameters:{docs:{description:{story:`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

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
`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:dt,GConfigProvider:ct,GButton:mt},setup(){const r=U(),t=Qe({usuario:"",clave:""}),a={usuario:[{required:!0,message:"El usuario es requerido",trigger:"blur"}],clave:[{required:!0,message:"La clave es requerida",trigger:"blur"}]};async function e(){r.value&&await r.value.validate((o,l)=>{o?alert("submit!"):console.log("error submit!",l)})}return{formRef:r,formData:t,rules:a,handleSubmit:e}},template:`
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
    `})},Gt={name:"Validación Dinámica",parameters:{docs:{description:{story:`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

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
`}}},render:()=>({components:{GForm:ot,GFormItem:ft,GInput:dt,GConfigProvider:ct,GButton:mt},setup(){const r=U(),t=Qe({domains:[{key:1,value:""}],email:""}),a=s=>{const i=t.domains.indexOf(s);i!==-1&&t.domains.splice(i,1)},e=()=>{t.domains.push({key:Date.now(),value:""})};async function o(){r.value&&await r.value.validate((s,i)=>{s?console.log("submit!",t):console.log("error submit!",i)})}async function l(){r.value&&r.value.resetFields()}return{formRef:r,formData:t,handleSubmit:o,handleReset:l,addDomain:e,removeDomain:a}},template:`
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
    `})};_t.parameters={..._t.parameters,docs:{..._t.parameters?.docs,source:{originalSource:`{
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
}`,..._t.parameters?.docs?.source}}};qt.parameters={...qt.parameters,docs:{...qt.parameters?.docs,source:{originalSource:`{
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
}`,...qt.parameters?.docs?.source}}};Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`{
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
}`,...Lt.parameters?.docs?.source}}};Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
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
}`,...Yt.parameters?.docs?.source}}};jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`{
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
}`,...jt.parameters?.docs?.source}}};Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`{
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
}`,...Bt.parameters?.docs?.source}}};Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`{
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
}`,...Gt.parameters?.docs?.source}}};const kl=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];export{_t as CompleteForm,Lt as CustomRules,jt as DisabledForm,Gt as DynamicValidation,Bt as PreventSubmit,qt as Primary,Yt as TriggerValidation,kl as __namedExportsOrder,yl as default};
