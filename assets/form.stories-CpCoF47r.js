import{J as dr,x as J,d as ve,c as R,w as ee,P as $e,O as z,Q as ze,h as $,k as re,n as S,u as d,a as cr,o as O,r as A,D as Ue,I as Ve,a7 as jr,f as M,j as H,C as pe,t as le,z as Ar,A as Vr,B as Nr,p as er,q as Lr,b as de,R as Or,S as Gr,N as rr,U as Br,l as Mr,F as Tr,m as _r}from"./vue.esm-bundler-BUoj5ptC.js";import{y as Ne,v as ae,l as W,u as be,a2 as je,x as Ke,N as ur,c as $r,i as ar,O as zr,G as te}from"./ConfigProvider-CrOhbRZ6.js";import{c as Le}from"./castArray-DceVieY3.js";import{d as ue}from"./error-Cq9Fpw4b.js";import{a as fr}from"./index-KaGzp0yT.js";import{r as Ur,d as tr,H as pr,Y as gr,G as vr}from"./index-Dh3Gw0Zf.js";import{u as Kr}from"./index-Wt8uPs2i.js";import{_ as we}from"./Icon-HxEiN7t9.js";import{U as me,C as Hr}from"./event-BB_Ol6Sd.js";import{u as br}from"./index-BcGPpLRa.js";import{m as Wr}from"./typescript-Bp3YSIOJ.js";import{u as Jr,a as Yr,b as Zr,c as Qr}from"./index-DESZvTKR.js";import{G as ne}from"./index-BpTSg4uy.js";import{G as Xr}from"./index-CZX62_fD.js";import{a as ea}from"./index-Bi1aBl0V.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_initCloneObject-MVraUcJR.js";import"./index.es-DwVakxBA.js";import"./index-DDVpgGx_.js";import"./index-BOx2y-Jl.js";import"./index-JLKkvi6K.js";import"./index-D057P_fm.js";import"./index-BBkCvBxZ.js";import"./plugin-vue_export-helper-CqGSI99y.js";import"./index-DwPJD4c3.js";import"./index-lrUEEGCJ.js";import"./constants-Dnj8X3EN.js";import"./dynamic-size-list-Bxu4hK2p.js";import"./raf-gvowHs9M.js";import"./index-Cb4AC0uV.js";import"./debounce-CSibH4N1.js";import"./isEqual-B5SlWNVQ.js";import"./util-B2mB0_6C.js";import"./icon-DcjHpFYi.js";import"./index-Br95U766.js";import"./strings-BKkDCYOM.js";import"./index-CpX_VGDb.js";import"./use-form-common-props-DyLglXeD.js";function X(){return X=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},X.apply(this,arguments)}function ra(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ge(t,e)}function Oe(t){return Oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Oe(t)}function ge(t,e){return ge=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,n){return a.__proto__=n,a},ge(t,e)}function aa(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ce(t,e,r){return aa()?Ce=Reflect.construct.bind():Ce=function(n,o,i){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(n,s),u=new l;return i&&ge(u,i.prototype),u},Ce.apply(null,arguments)}function ta(t){return Function.toString.call(t).indexOf("[native code]")!==-1}function Ge(t){var e=typeof Map=="function"?new Map:void 0;return Ge=function(a){if(a===null||!ta(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(a))return e.get(a);e.set(a,n)}function n(){return Ce(a,arguments,Oe(this).constructor)}return n.prototype=Object.create(a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),ge(n,a)},Ge(t)}var na=/%[sdj%]/g,oa=function(){};function Be(t){if(!t||!t.length)return null;var e={};return t.forEach(function(r){var a=r.field;e[a]=e[a]||[],e[a].push(r)}),e}function B(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];var n=0,o=r.length;if(typeof t=="function")return t.apply(null,r);if(typeof t=="string"){var i=t.replace(na,function(s){if(s==="%%")return"%";if(n>=o)return s;switch(s){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch{return"[Circular]"}break;default:return s}});return i}return t}function ia(t){return t==="string"||t==="url"||t==="hex"||t==="email"||t==="date"||t==="pattern"}function C(t,e){return!!(t==null||e==="array"&&Array.isArray(t)&&!t.length||ia(e)&&typeof t=="string"&&!t)}function sa(t,e,r){var a=[],n=0,o=t.length;function i(s){a.push.apply(a,s||[]),n++,n===o&&r(a)}t.forEach(function(s){e(s,i)})}function nr(t,e,r){var a=0,n=t.length;function o(i){if(i&&i.length){r(i);return}var s=a;a=a+1,s<n?e(t[s],o):r([])}o([])}function la(t){var e=[];return Object.keys(t).forEach(function(r){e.push.apply(e,t[r]||[])}),e}var or=function(t){ra(e,t);function e(r,a){var n;return n=t.call(this,"Async Validation Error")||this,n.errors=r,n.fields=a,n}return e}(Ge(Error));function ma(t,e,r,a,n){if(e.first){var o=new Promise(function(x,I){var y=function(c){return a(c),c.length?I(new or(c,Be(c))):x(n)},f=la(t);nr(f,r,y)});return o.catch(function(x){return x}),o}var i=e.firstFields===!0?Object.keys(t):e.firstFields||[],s=Object.keys(t),l=s.length,u=0,p=[],b=new Promise(function(x,I){var y=function(h){if(p.push.apply(p,h),u++,u===l)return a(p),p.length?I(new or(p,Be(p))):x(n)};s.length||(a(p),x(n)),s.forEach(function(f){var h=t[f];i.indexOf(f)!==-1?nr(h,r,y):sa(h,r,y)})});return b.catch(function(x){return x}),b}function da(t){return!!(t&&t.message!==void 0)}function ca(t,e){for(var r=t,a=0;a<e.length;a++){if(r==null)return r;r=r[e[a]]}return r}function ir(t,e){return function(r){var a;return t.fullFields?a=ca(e,t.fullFields):a=e[r.field||t.fullField],da(r)?(r.field=r.field||t.fullField,r.fieldValue=a,r):{message:typeof r=="function"?r():r,fieldValue:a,field:r.field||t.fullField}}}function sr(t,e){if(e){for(var r in e)if(e.hasOwnProperty(r)){var a=e[r];typeof a=="object"&&typeof t[r]=="object"?t[r]=X({},t[r],a):t[r]=a}}return t}var yr=function(e,r,a,n,o,i){e.required&&(!a.hasOwnProperty(e.field)||C(r,i||e.type))&&n.push(B(o.messages.required,e.fullField))},ua=function(e,r,a,n,o){(/^\s+$/.test(r)||r==="")&&n.push(B(o.messages.whitespace,e.fullField))},Ee,fa=function(){if(Ee)return Ee;var t="[a-fA-F\\d:]",e=function(w){return w&&w.includeBoundaries?"(?:(?<=\\s|^)(?="+t+")|(?<="+t+")(?=\\s|$))":""},r="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",a="[a-fA-F\\d]{1,4}",n=(`
(?:
(?:`+a+":){7}(?:"+a+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+a+":){6}(?:"+r+"|:"+a+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+a+":){5}(?::"+r+"|(?::"+a+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+a+":){4}(?:(?::"+a+"){0,1}:"+r+"|(?::"+a+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+a+":){3}(?:(?::"+a+"){0,2}:"+r+"|(?::"+a+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+a+":){2}(?:(?::"+a+"){0,3}:"+r+"|(?::"+a+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+a+":){1}(?:(?::"+a+"){0,4}:"+r+"|(?::"+a+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+a+"){0,5}:"+r+"|(?::"+a+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+r+"$)|(?:^"+n+"$)"),i=new RegExp("^"+r+"$"),s=new RegExp("^"+n+"$"),l=function(w){return w&&w.exact?o:new RegExp("(?:"+e(w)+r+e(w)+")|(?:"+e(w)+n+e(w)+")","g")};l.v4=function(m){return m&&m.exact?i:new RegExp(""+e(m)+r+e(m),"g")},l.v6=function(m){return m&&m.exact?s:new RegExp(""+e(m)+n+e(m),"g")};var u="(?:(?:[a-z]+:)?//)",p="(?:\\S+(?::\\S*)?@)?",b=l.v4().source,x=l.v6().source,I="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",y="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",f="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",h="(?::\\d{2,5})?",c='(?:[/?#][^\\s"]*)?',v="(?:"+u+"|www\\.)"+p+"(?:localhost|"+b+"|"+x+"|"+I+y+f+")"+h+c;return Ee=new RegExp("(?:^"+v+"$)","i"),Ee},lr={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},ce={integer:function(e){return ce.number(e)&&parseInt(e,10)===e},float:function(e){return ce.number(e)&&!ce.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!ce.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(lr.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(fa())},hex:function(e){return typeof e=="string"&&!!e.match(lr.hex)}},pa=function(e,r,a,n,o){if(e.required&&r===void 0){yr(e,r,a,n,o);return}var i=["integer","float","array","regexp","object","method","email","number","date","url","hex"],s=e.type;i.indexOf(s)>-1?ce[s](r)||n.push(B(o.messages.types[s],e.fullField,e.type)):s&&typeof r!==e.type&&n.push(B(o.messages.types[s],e.fullField,e.type))},ga=function(e,r,a,n,o){var i=typeof e.len=="number",s=typeof e.min=="number",l=typeof e.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,p=r,b=null,x=typeof r=="number",I=typeof r=="string",y=Array.isArray(r);if(x?b="number":I?b="string":y&&(b="array"),!b)return!1;y&&(p=r.length),I&&(p=r.replace(u,"_").length),i?p!==e.len&&n.push(B(o.messages[b].len,e.fullField,e.len)):s&&!l&&p<e.min?n.push(B(o.messages[b].min,e.fullField,e.min)):l&&!s&&p>e.max?n.push(B(o.messages[b].max,e.fullField,e.max)):s&&l&&(p<e.min||p>e.max)&&n.push(B(o.messages[b].range,e.fullField,e.min,e.max))},se="enum",va=function(e,r,a,n,o){e[se]=Array.isArray(e[se])?e[se]:[],e[se].indexOf(r)===-1&&n.push(B(o.messages[se],e.fullField,e[se].join(", ")))},ba=function(e,r,a,n,o){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(B(o.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var i=new RegExp(e.pattern);i.test(r)||n.push(B(o.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},F={required:yr,whitespace:ua,type:pa,range:ga,enum:va,pattern:ba},ya=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r,"string")&&!e.required)return a();F.required(e,r,n,i,o,"string"),C(r,"string")||(F.type(e,r,n,i,o),F.range(e,r,n,i,o),F.pattern(e,r,n,i,o),e.whitespace===!0&&F.whitespace(e,r,n,i,o))}a(i)},ha=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o),r!==void 0&&F.type(e,r,n,i,o)}a(i)},xa=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(r===""&&(r=void 0),C(r)&&!e.required)return a();F.required(e,r,n,i,o),r!==void 0&&(F.type(e,r,n,i,o),F.range(e,r,n,i,o))}a(i)},wa=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o),r!==void 0&&F.type(e,r,n,i,o)}a(i)},Ea=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o),C(r)||F.type(e,r,n,i,o)}a(i)},Fa=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o),r!==void 0&&(F.type(e,r,n,i,o),F.range(e,r,n,i,o))}a(i)},Da=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o),r!==void 0&&(F.type(e,r,n,i,o),F.range(e,r,n,i,o))}a(i)},Ra=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(r==null&&!e.required)return a();F.required(e,r,n,i,o,"array"),r!=null&&(F.type(e,r,n,i,o),F.range(e,r,n,i,o))}a(i)},Pa=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o),r!==void 0&&F.type(e,r,n,i,o)}a(i)},qa="enum",Ia=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o),r!==void 0&&F[qa](e,r,n,i,o)}a(i)},Sa=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r,"string")&&!e.required)return a();F.required(e,r,n,i,o),C(r,"string")||F.pattern(e,r,n,i,o)}a(i)},ka=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r,"date")&&!e.required)return a();if(F.required(e,r,n,i,o),!C(r,"date")){var l;r instanceof Date?l=r:l=new Date(r),F.type(e,l,n,i,o),l&&F.range(e,l.getTime(),n,i,o)}}a(i)},Ca=function(e,r,a,n,o){var i=[],s=Array.isArray(r)?"array":typeof r;F.required(e,r,n,i,o,s),a(i)},Ae=function(e,r,a,n,o){var i=e.type,s=[],l=e.required||!e.required&&n.hasOwnProperty(e.field);if(l){if(C(r,i)&&!e.required)return a();F.required(e,r,n,s,o,i),C(r,i)||F.type(e,r,n,s,o)}a(s)},ja=function(e,r,a,n,o){var i=[],s=e.required||!e.required&&n.hasOwnProperty(e.field);if(s){if(C(r)&&!e.required)return a();F.required(e,r,n,i,o)}a(i)},fe={string:ya,method:ha,number:xa,boolean:wa,regexp:Ea,integer:Fa,float:Da,array:Ra,object:Pa,enum:Ia,pattern:Sa,date:ka,url:Ae,hex:Ae,email:Ae,required:Ca,any:ja};function Me(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Te=Me(),ye=function(){function t(r){this.rules=null,this._messages=Te,this.define(r)}var e=t.prototype;return e.define=function(a){var n=this;if(!a)throw new Error("Cannot configure a schema with no rules");if(typeof a!="object"||Array.isArray(a))throw new Error("Rules must be an object");this.rules={},Object.keys(a).forEach(function(o){var i=a[o];n.rules[o]=Array.isArray(i)?i:[i]})},e.messages=function(a){return a&&(this._messages=sr(Me(),a)),this._messages},e.validate=function(a,n,o){var i=this;n===void 0&&(n={}),o===void 0&&(o=function(){});var s=a,l=n,u=o;if(typeof l=="function"&&(u=l,l={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,s),Promise.resolve(s);function p(f){var h=[],c={};function v(w){if(Array.isArray(w)){var E;h=(E=h).concat.apply(E,w)}else h.push(w)}for(var m=0;m<f.length;m++)v(f[m]);h.length?(c=Be(h),u(h,c)):u(null,s)}if(l.messages){var b=this.messages();b===Te&&(b=Me()),sr(b,l.messages),l.messages=b}else l.messages=this.messages();var x={},I=l.keys||Object.keys(this.rules);I.forEach(function(f){var h=i.rules[f],c=s[f];h.forEach(function(v){var m=v;typeof m.transform=="function"&&(s===a&&(s=X({},s)),c=s[f]=m.transform(c)),typeof m=="function"?m={validator:m}:m=X({},m),m.validator=i.getValidationMethod(m),m.validator&&(m.field=f,m.fullField=m.fullField||f,m.type=i.getType(m),x[f]=x[f]||[],x[f].push({rule:m,value:c,source:s,field:f}))})});var y={};return ma(x,l,function(f,h){var c=f.rule,v=(c.type==="object"||c.type==="array")&&(typeof c.fields=="object"||typeof c.defaultField=="object");v=v&&(c.required||!c.required&&f.value),c.field=f.field;function m(P,T){return X({},T,{fullField:c.fullField+"."+P,fullFields:c.fullFields?[].concat(c.fullFields,[P]):[P]})}function w(P){P===void 0&&(P=[]);var T=Array.isArray(P)?P:[P];!l.suppressWarning&&T.length&&t.warning("async-validator:",T),T.length&&c.message!==void 0&&(T=[].concat(c.message));var N=T.map(ir(c,s));if(l.first&&N.length)return y[c.field]=1,h(N);if(!v)h(N);else{if(c.required&&!f.value)return c.message!==void 0?N=[].concat(c.message).map(ir(c,s)):l.error&&(N=[l.error(c,B(l.messages.required,c.field))]),h(N);var _={};c.defaultField&&Object.keys(f.value).map(function(k){_[k]=c.defaultField}),_=X({},_,f.rule.fields);var U={};Object.keys(_).forEach(function(k){var L=_[k],K=Array.isArray(L)?L:[L];U[k]=K.map(m.bind(null,k))});var Z=new t(U);Z.messages(l.messages),f.rule.options&&(f.rule.options.messages=l.messages,f.rule.options.error=l.error),Z.validate(f.value,f.rule.options||l,function(k){var L=[];N&&N.length&&L.push.apply(L,N),k&&k.length&&L.push.apply(L,k),h(L.length?L:null)})}}var E;if(c.asyncValidator)E=c.asyncValidator(c,f.value,w,f.source,l);else if(c.validator){try{E=c.validator(c,f.value,w,f.source,l)}catch(P){console.error?.(P),l.suppressValidatorError||setTimeout(function(){throw P},0),w(P.message)}E===!0?w():E===!1?w(typeof c.message=="function"?c.message(c.fullField||c.field):c.message||(c.fullField||c.field)+" fails"):E instanceof Array?w(E):E instanceof Error&&w(E.message)}E&&E.then&&E.then(function(){return w()},function(P){return w(P)})},function(f){p(f)},s)},e.getType=function(a){if(a.type===void 0&&a.pattern instanceof RegExp&&(a.type="pattern"),typeof a.validator!="function"&&a.type&&!fe.hasOwnProperty(a.type))throw new Error(B("Unknown rule type %s",a.type));return a.type||"string"},e.getValidationMethod=function(a){if(typeof a.validator=="function")return a.validator;var n=Object.keys(a),o=n.indexOf("message");return o!==-1&&n.splice(o,1),n.length===1&&n[0]==="required"?fe.required:fe[this.getType(a)]||void 0},t}();ye.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");fe[e]=r};ye.warning=oa;ye.messages=Te;ye.validators=fe;const hr=Symbol("formContextKey"),mr=Symbol("formItemContextKey"),Aa=ae({disabled:Boolean}),Va=ae({...Aa,model:Object,rules:{type:W(Object)},validateOnRuleChange:{type:Boolean,default:!0},scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Na={validate:(t,e,r)=>(dr(t)||J(t))&&Ne(e)&&J(r)},Fe=(t,e)=>{const r=Le(e);return r.length>0?t.filter(a=>a.prop&&r.includes(a.prop)):t},La="GForm",xr=ve({name:La,__name:"Form",props:Va,emits:Na,setup(t,{expose:e,emit:r}){const a=t,n=r,o=[],i=be("form"),s=v=>o.find(m=>m.prop===v),l=v=>{o.push(v)},u=v=>{v.prop&&o.splice(o.indexOf(v),1)},p=(v=[])=>{a.model&&Fe(o,v).forEach(m=>m.resetField())},b=(v=[])=>{Fe(o,v).forEach(m=>m.clearValidate())},x=R(()=>!!a.model),I=v=>{if(o.length===0)return[];const m=Fe(o,v);return m.length?m:[]},y=async v=>h(void 0,v),f=async(v=[])=>{if(!x.value)return!1;const m=I(v);if(m.length===0)return!0;let w={};for(const E of m)try{await E.validate(""),E.validateState==="error"&&E.resetField()}catch(P){w={...w,...P}}return Object.keys(w).length===0?!0:Promise.reject(w)},h=async(v=[],m)=>{console.log("modelProps",v);const w=!cr(m);try{const E=await f(v);return E===!0&&await m?.(E),E}catch(E){if(E instanceof Error)throw E;const P=E;return a.scrollToError&&c(Object.keys(P)[0]),await m?.(!1,P),w&&Promise.reject(P)}},c=v=>{const m=Fe(o,v)[0];m&&m.$el?.scrollIntoView(a.scrollIntoViewOptions)};return ee(()=>a.rules,()=>{a.validateOnRuleChange&&y().catch(v=>ue())},{deep:!0,flush:"post"}),$e(hr,z({...ze(a),emit:n,resetFields:p,clearValidate:b,validateField:h,getField:s,addField:l,removeField:u})),e({validate:y,validateField:h,resetFields:p,clearValidate:b,scrollToField:c,fields:o}),(v,m)=>(O(),$("form",{class:S(d(i).b())},[re(v.$slots,"default")],2))}});xr.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},expose:[{name:"validate",tags:[{title:"description",content:"Validate the whole form. Receives a callback or returns `Promise`."}]},{name:"validateField",tags:[{title:"description",content:"Validate specified fields."}]},{name:"resetFields",tags:[{title:"description",content:"Reset specified fields and remove validation result."}]},{name:"clearValidate",tags:[{title:"description",content:"Clear validation message for specified fields."}]},{name:"scrollToField",tags:[{title:"description",content:"Scroll to the specified fields."}]},{name:"fields",tags:[{title:"description",content:"All fields context."}]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/Form.vue"]};const Oa=ae({prop:{type:W([String,Array])},rules:{type:W([Object,Array])},showMessage:{type:W(String),default:"child"}}),He=ve({name:"FormItem",__name:"form-item",props:Oa,setup(t,{expose:e}){const r=t,a=Ve(hr,void 0);Ve(mr,void 0);const n=be("form-item"),o=fr().value,i=A([]),s=A(""),l=Ur(s,100),u=A(""),p=A();let b,x=!1;const I=R(()=>[n.b(),n.is("error",s.value==="error"),n.is("validating",s.value==="validating"),n.is("success",s.value==="success")]),y=R(()=>r.prop?J(r.prop)?r.prop:r.prop.join("."):""),f=R(()=>{const D=a?.model;if(!(!D||!r.prop))return je(D,r.prop).value}),h=R(()=>{const D=[];r.rules&&D.push(...Le(r.rules));const q=a?.rules;if(q&&r.prop){const V=je(q,r.prop).value;V&&D.push(...Le(V))}return D}),c=R(()=>h.value.length>0),v=D=>h.value.filter(V=>!V.trigger||!D?!0:dr(V.trigger)?V.trigger.includes(D):V.trigger===D).map(({trigger:V,...G})=>G);R(()=>h.value.some(D=>D.required));const m=R(()=>l.value==="error"&&r.showMessage==="parent"),w=R(()=>l.value==="error"&&r.showMessage==="child"),E=D=>{s.value=D},P=D=>{const{errors:q,fields:V}=D;(!q||!V)&&console.error(D),E("error"),u.value=q?q?.[0]?.message??`${r.prop} es requerido`:"",a?.emit("validate",r.prop,!1,u.value)},T=()=>{E("success"),a?.emit("validate",r.prop,!0,"")},N=async D=>{const q=y.value;return new ye({[q]:D}).validate({[q]:f.value},{firstFields:!0}).then(()=>(T(),!0)).catch(G=>(P(G),Promise.reject(G)))},_=async(D,q)=>{if(x||!r.prop)return!1;const V=cr(q);if(!c.value)return q?.(!1),!1;const G=v(D);return G.length===0?(q?.(!0),!0):(E("validating"),N(G).then(()=>(q?.(!0),!0)).catch(he=>{const{fields:xe}=he;return q?.(!1,xe),V?!1:Promise.reject(xe)}))},U=()=>{E(""),u.value="",x=!1},Z=async()=>{const D=a?.model;if(!D||!r.prop)return;const q=je(D,r.prop);x=!0,q.value=tr(b),await pe(),U(),x=!1},k=D=>{i.value.includes(D)||i.value.push(D)},L=D=>{i.value=i.value.filter(q=>q!==D)},K=z({...ze(r),$el:p,validateState:s,inputIds:i,labelId:o,fieldValue:f,shouldShowError:m,shouldShowErrorChild:w,validateMessage:u,addInputId:k,removeInputId:L,resetField:Z,clearValidate:U,validate:_});return $e(mr,K),Ue(()=>{r.prop&&(a?.addField(K),b=tr(f.value))}),jr(()=>{a?.removeField(K)}),e({validateMessage:u,shouldShowError:m,shouldShowErrorChild:w,validateState:s,validate:_,clearValidate:U,resetField:Z}),(D,q)=>(O(),$("div",{ref_key:"formItemRef",ref:p,class:S(I.value)},[re(D.$slots,"default"),M("div",{class:S({[d(n).e("content-error")]:m.value})},[m.value?re(D.$slots,"error",{key:0,error:u.value},()=>[M("span",{class:S(d(n).e("error"))},le(u.value),3)]):H("",!0)],2)],2))}});He.__docgenInfo={name:"FormItem",exportName:"default",displayName:"form-item",description:"",tags:{},expose:[{name:"validateMessage",tags:[{title:"description",content:"Validation message."}]},{name:"shouldShowError",tags:[{title:"description",content:"Whether to show error message in form item."}]},{name:"shouldShowErrorChild",tags:[{title:"description",content:"Whether to show error message in the child of form item."}]},{name:"validateState",tags:[{title:"description",content:"Validation state."}]},{name:"validate",tags:[{title:"description",content:"Validate form item."}]},{name:"clearValidate",tags:[{title:"description",content:"Remove validation status of the field."}]},{name:"resetField",tags:[{title:"description",content:"Reset current field and remove validation result."}]}],slots:[{name:"default"},{name:"error",scoped:!0,bindings:[{name:"error",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/form/src/form-item.vue"]};const Y=Ke(xr,{FormItem:He}),oe=ur(He),Ga=ae({id:{type:String,default:void 0},helpText:{type:String,default:void 0},loading:{type:Boolean,default:!1},label:{type:String,default:void 0},messageError:{type:String,default:void 0},disabled:Boolean,modelValue:{type:W([String,Number,Object]),default:""},maxlength:{type:[String,Number],default:50},minlength:{type:[String,Number]},type:{type:String,default:"text"},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:W(String),default:""},prefixIcon:{type:W(String),default:""},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},isEvent:{type:Boolean,default:!1},inputStyle:{type:W([Object,Array,String]),default:()=>Wr({})},autofocus:Boolean,...br(["ariaLabel"])}),Ba={[me]:t=>J(t),click:t=>t instanceof MouseEvent,input:t=>J(t),change:t=>J(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,mouseleave:t=>t instanceof MouseEvent,mouseenter:t=>t instanceof MouseEvent,keydown:t=>t instanceof Event,compositionstart:t=>t instanceof CompositionEvent,compositionupdate:t=>t instanceof CompositionEvent,compositionend:t=>t instanceof CompositionEvent},Ma=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role"],_e=ve({name:"Input",inheritAttrs:!1,__name:"input",props:Ga,emits:Ba,setup(t,{expose:e,emit:r}){const a=t,n=r,o=be("input"),i=Ar(),s=Jr(),l=Vr(),u=A(void 0),p=A(null),{formItem:b}=vr(),x=R(()=>b?.shouldShowErrorChild||!!a?.messageError),I=R(()=>a?.messageError?a.messageError:b?.validateMessage),y=R(()=>[o.b(),o.is("label",!!a.label),o.is("disabled",v.value),o.is("focus",N.value),o.is("complete",!N.value&&!!k.value),o.is("disabled",v.value),o.is("exceed",D.value),o.is("error",x.value||b?.shouldShowError),o.is("event",a.isEvent),o.is("loading",a.loading),o.is("readonly",a.readonly),{[o.m("prefix")]:a.prefixIcon||l.prefix,[o.m("suffix")]:l.suffix||a.suffixIcon||a.showPassword,[o.is("password")]:a.showPassword,[o.b("hidden")]:a.type==="hidden"},i.class]),f=R(()=>[o.e("help-text"),{[o.e("help-error")]:x.value}]),h=R(()=>I.value||a.helpText||b?.$el),{inputId:c}=pr(a,{formItemContext:b}),v=gr(),m=Nr(),w=A(!1),E=A(!1),P=R(()=>m.value),{wrapperRef:T,isFocused:N}=Yr(m,{beforeFocus(){return v.value},afterBlur(){a.validateEvent&&b?.validate?.("blur").catch(g=>ue())}}),_=R(()=>{const g=!!k.value||N.value;return{left:g?void 0:`calc(${u.value} + 16px)`,zIndex:g?void 0:10}}),U=R(()=>E.value?"regular eye":"regular eye-slash"),Z=R(()=>[i.style]),k=R(()=>$r(a.modelValue)?"":String(a.modelValue)),L=R(()=>a.showWordLimit&&!!a.maxlength&&a.type==="text"&&!v.value&&!a.readonly&&!a.showPassword),K=R(()=>k.value.length),D=R(()=>!!L.value&&K.value>Number(a.maxlength));R(()=>!!a.suffixIcon||a.showPassword);const[q,V]=Qr(m),G=()=>{const g=P.value,j=a.formatter?a.formatter(k.value):k.value;!g||g.value===j||(g.value=j)},he=async g=>{q();let{value:j}=g.target;if(a.formatter&&(j=a.parser?a.parser(j):j),!Je.value){if(j===k.value){G();return}n(me,j),n("input",j),await pe(),G(),V()}},xe=g=>{n("change",g.target.value)},{isComposing:Je,handleCompositionStart:Ye,handleCompositionUpdate:Ze,handleCompositionEnd:Qe}=Zr({emit:n,afterComposition:he}),Xe=()=>{q(),E.value=!E.value,setTimeout(V)},Rr=()=>m.value?.focus(),Pr=()=>m.value?.blur(),qr=g=>{w.value=!1,n("mouseleave",g)},Ir=g=>{w.value=!0,n("mouseenter",g)},Sr=g=>{n("keydown",g)},kr=()=>{m.value?.select()},Cr=()=>{n(me,""),n("change",""),n("clear"),n("input","")};return ee(()=>a.modelValue,()=>{a.validateEvent&&b?.validate?.("change").catch(g=>ue())}),ee(k,()=>G()),ee(()=>a.type,async()=>{await pe(),G()}),Ue(()=>{!a.formatter&&a.parser&&ue(o.b()),G()}),Kr(p,()=>{if(!a.prefixIcon&&!l.prefix){u.value="0";return}requestAnimationFrame(()=>{const g=p.value?.getBoundingClientRect().width;u.value=`${g}px`})}),e({ref:P,isComposing:Je,focus:Rr,blur:Pr,select:kr,clear:Cr}),(g,j)=>(O(),$("div",{class:S([y.value]),style:er(Z.value),onMouseenter:Ir,onMouseleave:qr},[M("div",{ref_key:"wrapperRef",ref:T,class:S(d(o).e("wrapper")),onClick:j[3]||(j[3]=Q=>g.isEvent?n("click",Q):void 0)},[M("div",{ref_key:"prefixRef",ref:p,class:S(d(o).e("prefix"))},[re(g.$slots,"prefix",{},()=>[g.prefixIcon?(O(),de(d(we),{key:0,class:S([d(o).e("icon"),d(o).e("prefix-icon")]),name:g.prefixIcon},null,8,["class","name"])):H("",!0)])],2),g.label?(O(),$("div",{key:0,class:S([d(o).e("label")]),style:er(_.value)},le(g.label),7)):H("",!0),M("input",Lr({id:d(c),ref_key:"input",ref:m,class:[d(o).e("inner")]},d(s),{minlength:g.minlength,maxlength:g.maxlength,type:g.showPassword?E.value?"text":"password":g.type,disabled:d(v),readonly:g.readonly||g.loading||g.isEvent,autocomplete:g.autocomplete,tabindex:g.tabindex,"aria-label":g.ariaLabel,placeholder:g.placeholder,form:g.form,autofocus:g.autofocus,role:g.containerRole,onCompositionstart:j[0]||(j[0]=(...Q)=>d(Ye)&&d(Ye)(...Q)),onCompositionupdate:j[1]||(j[1]=(...Q)=>d(Ze)&&d(Ze)(...Q)),onCompositionend:j[2]||(j[2]=(...Q)=>d(Qe)&&d(Qe)(...Q)),onInput:he,onChange:xe,onKeydown:Sr}),null,16,Ma),re(g.$slots,"suffix",{},()=>[M("span",{class:S(d(o).e("suffix"))},[g.suffixIcon&&!g.showPassword&&!g.loading?(O(),de(d(we),{key:0,class:S([d(o).e("icon"),d(o).e("suffix-icon")]),name:g.suffixIcon},null,8,["class","name"])):H("",!0),g.showPassword?(O(),de(d(we),{key:1,class:S([d(o).e("icon"),d(o).e("icon-password")]),name:U.value,onClick:Xe},null,8,["class","name"])):H("",!0),g.loading?(O(),de(d(we),{key:2,class:S([d(o).e("icon"),d(o).e("icon-loading")]),name:"regular arrows-rotate",spin:"",onClick:Xe},null,8,["class"])):H("",!0)],2)])],2),h.value?(O(),$("div",{key:0,class:S([d(o).e("help")])},[(O(),$("p",{key:x.value?"error":"help",class:S(f.value)},le(x.value?I.value:g.helpText),3)),L.value?(O(),$("span",{key:0,class:S(d(o).e("help-count"))},le(K.value)+"/"+le(g.maxlength),3)):H("",!0)],2)):H("",!0)],38))}});_e.__docgenInfo={name:"Input",exportName:"default",displayName:"input",description:"",tags:{},expose:[{name:"ref",tags:[{title:"description",content:"HTML element, input or textarea"}]},{name:"isComposing",tags:[{title:"description",content:"is input composing"}]},{name:"focus",tags:[{title:"description",content:"HTML input element native method"}]},{name:"blur",tags:[{title:"description",content:"HTML input element native method"}]},{name:"select",tags:[{title:"description",content:"HTML input element native method"}]},{name:"clear",tags:[{title:"description",content:"clear input value"}]}],slots:[{name:"prefix"},{name:"suffix"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/input/src/input.vue"]};const ie=Ke(_e,{Input:_e}),Ta=ae({modelValue:{type:[String,Number,Boolean],default:void 0},disabled:Boolean,label:{type:[String,Number,Boolean],default:void 0},value:{type:[String,Number,Boolean],default:void 0},name:{type:String,default:void 0}}),_a=ae({...Ta}),wr={[me]:t=>J(t)||ar(t)||Ne(t),[Hr]:t=>J(t)||ar(t)||Ne(t)},Er=Symbol("radioGroupKey"),$a=(t,e)=>{const r=A(),a=A(""),n=Ve(Er,void 0),o=R(()=>!!n),i=R(()=>zr(t.value)?t.label:t.value),s=R({get(){return o.value?n.modelValue:t.modelValue},set(b){o.value?n.changeEvent(b):e&&e(me,b);const x=t.modelValue===i.value;r.value.checked=x,x||(a.value="expand")}});ee(()=>a.value,()=>{setTimeout(()=>{a.value=""},500)});const l=gr(R(()=>n?.disabled)),u=A(!1),p=R(()=>l.value||o.value&&s.value!==i.value?-1:0);return{actualValue:i,currentRipple:a,disabled:l,focus:u,isGroup:o,modelValue:s,radioGroup:n,radioRef:r,tabIndex:p}},za=["value","name","disabled","checked"],Ua={class:"hover-effect"},Fr=ve({name:"GuiRadio",__name:"radio",props:_a,emits:wr,setup(t,{emit:e}){const r=t,a=e,n=be("radio"),{radioRef:o,radioGroup:i,focus:s,disabled:l,modelValue:u,actualValue:p,currentRipple:b}=$a(r,a);function x(){pe(()=>a("change",u.value))}return(I,y)=>(O(),$("label",{class:S([d(n).b(),d(n).is("disabled",d(l)),d(n).is("focus",d(s)),d(n).is("checked",d(u)===d(p))])},[M("span",{class:S([d(n).e("input"),d(n).is("disabled",d(l)),d(n).is("checked",d(u)===d(p))])},[Or(M("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":y[0]||(y[0]=f=>Br(u)?u.value=f:null),class:S(d(n).e("original")),value:d(p),name:I.name||d(i)?.name,disabled:d(l),checked:d(u)===d(p),type:"radio",onFocus:y[1]||(y[1]=f=>s.value=!0),onBlur:y[2]||(y[2]=f=>s.value=!1),onChange:x,onClick:y[3]||(y[3]=rr(()=>{},["stop"]))},null,42,za),[[Gr,d(u)]]),M("span",{class:S(d(n).e("inner"))},[M("span",Ua,[M("span",{class:S(["ripple",d(b)])},null,2)])],2)],2),M("span",{class:S(d(n).e("label")),onKeydown:y[4]||(y[4]=rr(()=>{},["stop"]))},[re(I.$slots,"default",{},()=>[Mr(le(I.label),1)])],34)],2))}});Fr.__docgenInfo={name:"GuiRadio",exportName:"default",displayName:"radio",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/radio/src/radio.vue"]};const Ka=ae({id:{type:String,default:void 0},options:{type:Array,default:()=>[]},disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:void 0},layout:{type:String,default:"horizontal"},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0},...br(["ariaLabel"])}),Ha=wr,Wa=["id","aria-label","aria-labelledby"],We=ve({name:"GuiRadioGroup",__name:"radio-group",props:Ka,emits:Ha,setup(t,{emit:e}){const r=t,a=e,n=be("radio"),o=fr(),i=A(),{formItem:s}=vr(),{inputId:l,isLabeledByFormItem:u}=pr(r,{formItemContext:s}),p=y=>{a(me,y),pe(()=>a("change",y))};Ue(()=>{const y=i.value.querySelectorAll("[type=radio]"),f=y[0];!Array.from(y).some(h=>h.checked)&&f&&(f.tabIndex=0)});const b=R(()=>r.name||o.value),x={horizontal:"flex flex-row gap-4",vertical:"flex flex-col gap-4 items-start"},I=R(()=>[n.b("group"),x[r.layout]]);return $e(Er,z({...ze(r),changeEvent:p,name:b})),ee(()=>r.modelValue,()=>{r.validateEvent&&s?.validate("change").catch(y=>ue())}),(y,f)=>(O(),$("div",{id:d(l),ref_key:"radioGroupRef",ref:i,class:S(I.value),role:"radiogroup","aria-label":d(u)?void 0:y.ariaLabel||"radio-group","aria-labelledby":d(u)?d(s).labelId:void 0},[r.options.length>0?(O(!0),$(Tr,{key:0},_r(r.options,h=>(O(),de(d(Dr),{key:String(h.value),value:h.value,label:h?.label??h.value,disabled:h?.disabled},null,8,["value","label","disabled"]))),128)):re(y.$slots,"default",{key:1})],10,Wa))}});We.__docgenInfo={name:"GuiRadioGroup",exportName:"default",displayName:"radio-group",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/radio/src/radio-group.vue"]};const Dr=Ke(Fr,{RadioGroup:We});ur(We);const Vt={title:"Form/Form",component:Y,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
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
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},De={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:Y,GFormItem:oe,GInput:ie,GConfigProvider:te,GButton:ne,GSelect:Xr,GRadio:Dr,GCheckbox:ea},setup(){const t=A(),e=z({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1}),r=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],a={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},n=R(()=>e.country?a[e.country]||[]:[]);ee(()=>e.country,()=>{e.city=""});const o={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(l,u,p)=>{u===!0?p():p(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}]};async function i(){if(t.value)try{await t.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",e)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(l){console.error("Validation error:",l)}}function s(){t.value&&t.value.resetFields()}return{formRef:t,formData:e,countries:r,availableCities:n,rules:o,handleSubmit:i,handleReset:s}},template:`
      <g-config-provider>
        <g-form 
          ref="formRef" 
          :model="formData" 
          :rules="rules"
        >
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
                  label="Correo electrónico"
                  placeholder="ejemplo@correo.com"
                  prefix-icon="regular envelope"
                  help-text="Usaremos este email para contactarlo"
                />
              </g-form-item>
            </div>
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
            <h3 class="text-lg font-bold mb-2">Género</h3>
            <g-form-item prop="gender" show-message="parent" label="Género">
              <div class="flex flex-row gap-6 mt-2">
                <g-radio v-model="formData.gender" label="Masculino" value="male" />
                <g-radio v-model="formData.gender" label="Femenino" value="female" />
                <g-radio v-model="formData.gender" label="Prefiero no decir" value="other" />
              </div>
            </g-form-item>
          </div>
          
          <!-- Cuarta línea: Términos y condiciones -->
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
    `})},Re={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del formulario con validaciones."}}},render:()=>({components:{GForm:Y,GFormItem:oe,GInput:ie,GConfigProvider:te,GButton:ne},setup(){const t=A(),e=z({nombre:"",email:""}),r={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Email inválido",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((o,i)=>{o?console.log("submit!",i):console.log("error submit!"+i)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:e,rules:r,handleSubmit:a,handleReset:n}},template:`
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
    `})},Pe={name:"Reglas Personalizadas",parameters:{docs:{description:{story:`Las reglas de validación pueden ser personalizadas usando funciones validadoras. Por ejemplo, para validar la edad de un usuario:

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

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:Y,GFormItem:oe,GInput:ie,GConfigProvider:te,GButton:ne},setup(){const t=A(),e=z({pass:"",checkPass:"",age:""}),o={pass:[{validator:(l,u,p)=>{u===""?p(new Error("Ingrese una contraseña")):(e.checkPass!==""&&t.value?.validateField("checkPass"),p())},trigger:"blur"}],checkPass:[{validator:(l,u,p)=>{u===""?p(new Error("Confirme su contraseña")):u!==e.pass?p(new Error("Las contraseñas no coinciden")):p()},trigger:"blur"}],age:[{validator:(l,u,p)=>{if(!u)return p(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(u))?Number(u)<18?p(new Error("La edad debe ser mayor a 18")):p():p(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function i(){t.value&&await t.value.validate((l,u)=>{l?console.log("submit!",e):console.log("error submit!",u)})}async function s(){t.value&&t.value.resetFields()}return{formRef:t,formData:e,rules:o,handleSubmit:i,handleReset:s}},template:`
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
    `})},qe={name:"Tipo de ejecución",parameters:{docs:{description:{story:`La validación de campos puede realizarse de dos formas:

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

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.`}}},render:()=>({components:{GForm:Y,GFormItem:oe,GInput:ie,GConfigProvider:te,GButton:ne},setup(){const t=A(),e=z({email:"",password:""}),r={email:[{required:!0,message:"El email es requerido",trigger:"change"},{type:"email",message:"Ingrese un email válido",trigger:"change"}],password:[{required:!0,message:"La contraseña es requerida",trigger:"blur"},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((o,i)=>{o?console.log("submit!",i):console.log("error submit!"+i)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:e,rules:r,handleSubmit:a,handleReset:n}},template:`
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
    `})},Ie={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:Y,GFormItem:oe,GInput:ie,GConfigProvider:te,GButton:ne},setup(){return{formData:z({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
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
    `})},Se={name:"Prevenir Submit",parameters:{docs:{description:{story:`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

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
`}}},render:()=>({components:{GForm:Y,GFormItem:oe,GInput:ie,GConfigProvider:te,GButton:ne},setup(){const t=A(),e=z({usuario:"",clave:""}),r={usuario:[{required:!0,message:"El usuario es requerido",trigger:"blur"}],clave:[{required:!0,message:"La clave es requerida",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((n,o)=>{n?alert("submit!"):console.log("error submit!",o)})}return{formRef:t,formData:e,rules:r,handleSubmit:a}},template:`
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
    `})},ke={name:"Validación Dinámica",parameters:{docs:{description:{story:`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

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
`}}},render:()=>({components:{GForm:Y,GFormItem:oe,GInput:ie,GConfigProvider:te,GButton:ne},setup(){const t=A(),e=z({domains:[{key:1,value:""}],email:""}),r=i=>{const s=e.domains.indexOf(i);s!==-1&&e.domains.splice(s,1)},a=()=>{e.domains.push({key:Date.now(),value:""})};async function n(){t.value&&await t.value.validate((i,s)=>{i?console.log("submit!",e):console.log("error submit!",s)})}async function o(){t.value&&t.value.resetFields()}return{formRef:t,formData:e,handleSubmit:n,handleReset:o,addDomain:a,removeDomain:r}},template:`
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
    `})};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
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
      GCheckbox
    },
    setup() {
      const formRef = ref<FormInstance>();
      const formData = reactive({
        fullName: '',
        email: '',
        country: '',
        city: '',
        gender: '',
        termsAccepted: false
      });

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
                  label="Correo electrónico"
                  placeholder="ejemplo@correo.com"
                  prefix-icon="regular envelope"
                  help-text="Usaremos este email para contactarlo"
                />
              </g-form-item>
            </div>
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
            <h3 class="text-lg font-bold mb-2">Género</h3>
            <g-form-item prop="gender" show-message="parent" label="Género">
              <div class="flex flex-row gap-6 mt-2">
                <g-radio v-model="formData.gender" label="Masculino" value="male" />
                <g-radio v-model="formData.gender" label="Femenino" value="female" />
                <g-radio v-model="formData.gender" label="Prefiero no decir" value="other" />
              </div>
            </g-form-item>
          </div>
          
          <!-- Cuarta línea: Términos y condiciones -->
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
}`,...De.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
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
}`,...Re.parameters?.docs?.source}}};Pe.parameters={...Pe.parameters,docs:{...Pe.parameters?.docs,source:{originalSource:`{
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
}`,...Pe.parameters?.docs?.source}}};qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
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
}`,...qe.parameters?.docs?.source}}};Ie.parameters={...Ie.parameters,docs:{...Ie.parameters?.docs,source:{originalSource:`{
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
}`,...Ie.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
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
}`,...Se.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
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
}`,...ke.parameters?.docs?.source}}};const Nt=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];export{De as CompleteForm,Pe as CustomRules,Ie as DisabledForm,ke as DynamicValidation,Se as PreventSubmit,Re as Primary,qe as TriggerValidation,Nt as __namedExportsOrder,Vt as default};
