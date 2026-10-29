import{l as Me,p as xe,d as Fe,D as et,E as xt,Z as Re,r as L,O as $a,a3 as ot,a4 as qa,x as Ke,c as I,a5 as me,s as Se,o as G,y as K,f as H,i as le,g as y,u as e,F as Pe,A as Ye,z as de,j as ie,b as Z,e as Ce,v as Ie,ad as na,a as Ra,a2 as Ya,C as We,w as at,B as tt,S as sa,av as ye,q as st,ab as St,ac as Mt}from"./iframe-Dm8_k2cn.js";import{d as _,V as Ct,s as Rt,A as Pt,B as Yt,i as it,r as ct,j as Na,l as dt}from"./index-cY4mamlf.js";import{u as Te,l as Ea}from"./useEmptyValues-V_TCuIRx.js";import{u as Ve}from"./useLocale-Cdm5lfFD.js";import{Y as ta}from"./index-BrlNE64u.js";import{Y as ce}from"./index-BBqlo-RX.js";import{W as Et}from"./index-B20TF4Qt.js";import{c as nt}from"./index-2vPWGyjI.js";import{C as Ia}from"./clickOutside.directive-Dgq5a2re.js";import{f as Ot}from"./flatten-Dwm2vGVl.js";import{w as _t}from"./install.util-cBz1HN_T.js";import{E as he}from"./event.constant-LtAI3-H4.js";import{G as Je}from"./ConfigProvider-pNTTooVT.js";import{g as Vt,a as Tt,b as rt}from"./documentation-stories-D-EywvO5.js";import"./preload-helper-Dch09mLN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CSw_2qlj.js";import"./index-BeyAZDMP.js";import"./useAttrs-CFDusVJK.js";import"./index-DP19YOwC.js";import"./useId-Bxzyr06N.js";import"./index-it3dSkkH.js";import"./_baseFlatten-C6TO-VIz.js";import"./isEqual-CZ-djk2h.js";import"./isArrayLikeObject-BID8851_.js";import"./debounce-BEmHzpji.js";import"./repeatClick.directive-DJJnS2zu.js";import"./index-yRYOdSZv.js";import"./index-DkuPjBfk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C3cnRZjZ.js";const Qe={name:"es",el:{datepicker:{now:"Ahora",today:"Hoy",cancel:"Cancelar",clear:"Limpiar",confirm:"Aceptar",dateTablePrompt:"Use las teclas de flecha y enter para seleccionar el día del mes",monthTablePrompt:"Use las teclas de flecha y enter para seleccionar el mes",yearTablePrompt:"Use las teclas de flecha y enter para seleccionar el año",selectedDate:"Fecha seleccionada",selectDate:"Seleccionar fecha",selectTime:"Seleccionar hora",startDate:"Fecha de inicio",startTime:"Hora de inicio",endDate:"Fecha de fin",endTime:"Hora de fin",prevYear:"Año anterior",nextYear:"Próximo año",prevMonth:"Mes anterior",nextMonth:"Próximo mes",year:"",month1:"Enero",month2:"Febrero",month3:"Marzo",month4:"Abril",month5:"Mayo",month6:"Junio",month7:"Julio",month8:"Agosto",month9:"Septiembre",month10:"Octubre",month11:"Noviembre",month12:"Diciembre",week:"semana",weeks:{sun:"Dom",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb"},weeksFull:{sun:"Domingo",mon:"Lunes",tue:"Martes",wed:"Miércoles",thu:"Jueves",fri:"Viernes",sat:"Sábado"},months:{jan:"Ene",feb:"Feb",mar:"Mar",apr:"Abr",may:"May",jun:"Jun",jul:"Jul",aug:"Ago",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dic"}}}};var Ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function He(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ft={exports:{}};(function(n,d){(function(r,a){n.exports=a(_)})(Ae,function(r){function a(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var t=a(r),o={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(s){return s+"º"}};return t.default.locale(o,null,!0),o})})(Ft);var ut={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,o=/\d\d/,s=/\d\d?/,u=/\d*[^-_:/,()\s\d]+/,h={},P=function(i){return(i=+i)+(i>68?1900:2e3)},S=function(i){return function(A){this[i]=+A}},b=[/[+-]\d\d:?(\d\d)?|Z/,function(i){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var T=A.match(/([+-]|\d\d)/g),c=60*T[1]+(+T[2]||0);return c===0?0:T[0]==="+"?-c:c}(i)}],Y=function(i){var A=h[i];return A&&(A.indexOf?A:A.s.concat(A.f))},x=function(i,A){var T,c=h.meridiem;if(c){for(var F=1;F<=24;F+=1)if(i.indexOf(c(F,0,A))>-1){T=F>12;break}}else T=i===(A?"pm":"PM");return T},D={A:[u,function(i){this.afternoon=x(i,!1)}],a:[u,function(i){this.afternoon=x(i,!0)}],Q:[t,function(i){this.month=3*(i-1)+1}],S:[t,function(i){this.milliseconds=100*+i}],SS:[o,function(i){this.milliseconds=10*+i}],SSS:[/\d{3}/,function(i){this.milliseconds=+i}],s:[s,S("seconds")],ss:[s,S("seconds")],m:[s,S("minutes")],mm:[s,S("minutes")],H:[s,S("hours")],h:[s,S("hours")],HH:[s,S("hours")],hh:[s,S("hours")],D:[s,S("day")],DD:[o,S("day")],Do:[u,function(i){var A=h.ordinal,T=i.match(/\d+/);if(this.day=T[0],A)for(var c=1;c<=31;c+=1)A(c).replace(/\[|\]/g,"")===i&&(this.day=c)}],w:[s,S("week")],ww:[o,S("week")],M:[s,S("month")],MM:[o,S("month")],MMM:[u,function(i){var A=Y("months"),T=(Y("monthsShort")||A.map(function(c){return c.slice(0,3)})).indexOf(i)+1;if(T<1)throw new Error;this.month=T%12||T}],MMMM:[u,function(i){var A=Y("months").indexOf(i)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,S("year")],YY:[o,function(i){this.year=P(i)}],YYYY:[/\d{4}/,S("year")],Z:b,ZZ:b};function v(i){var A,T;A=i,T=h&&h.formats;for(var c=(i=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(j,$,N){var Q=N&&N.toUpperCase();return $||T[N]||r[N]||T[Q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(q,re,te){return re||te.slice(1)})})).match(a),F=c.length,k=0;k<F;k+=1){var M=c[k],E=D[M],w=E&&E[0],g=E&&E[1];c[k]=g?{regex:w,parser:g}:M.replace(/^\[|\]$/g,"")}return function(j){for(var $={},N=0,Q=0;N<F;N+=1){var q=c[N];if(typeof q=="string")Q+=q.length;else{var re=q.regex,te=q.parser,oe=j.slice(Q),J=re.exec(oe)[0];te.call($,J),j=j.replace(J,"")}}return function(m){var C=m.afternoon;if(C!==void 0){var p=m.hours;C?p<12&&(m.hours+=12):p===12&&(m.hours=0),delete m.afternoon}}($),$}}return function(i,A,T){T.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(P=i.parseTwoDigitYear);var c=A.prototype,F=c.parse;c.parse=function(k){var M=k.date,E=k.utc,w=k.args;this.$u=E;var g=w[1];if(typeof g=="string"){var j=w[2]===!0,$=w[3]===!0,N=j||$,Q=w[2];$&&(Q=w[2]),h=this.$locale(),!j&&Q&&(h=T.Ls[Q]),this.$d=function(oe,J,m,C){try{if(["x","X"].indexOf(J)>-1)return new Date((J==="X"?1e3:1)*oe);var p=v(J)(oe),z=p.year,ae=p.month,O=p.day,U=p.hours,X=p.minutes,ee=p.seconds,ge=p.milliseconds,Xe=p.zone,ea=p.week,ze=new Date,Ge=O||(z||ae?1:ze.getDate()),be=z||ze.getFullYear(),ve=0;z&&!ae||(ve=ae>0?ae-1:ze.getMonth());var ke,$e=U||0,Ee=X||0,we=ee||0,Le=ge||0;return Xe?new Date(Date.UTC(be,ve,Ge,$e,Ee,we,Le+60*Xe.offset*1e3)):m?new Date(Date.UTC(be,ve,Ge,$e,Ee,we,Le)):(ke=new Date(be,ve,Ge,$e,Ee,we,Le),ea&&(ke=C(ke).week(ea).toDate()),ke)}catch{return new Date("")}}(M,g,E,T),this.init(),Q&&Q!==!0&&(this.$L=this.locale(Q).$L),N&&M!=this.format(g)&&(this.$d=new Date("")),h={}}else if(g instanceof Array)for(var q=g.length,re=1;re<=q;re+=1){w[1]=g[re-1];var te=T.apply(this,w);if(te.isValid()){this.$d=te.$d,this.$L=te.$L,this.init();break}re===q&&(this.$d=new Date(""))}else F.call(this,k)}}})})(ut);var At=ut.exports;const $t=He(At);var mt={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){return function(r,a){var t=a.prototype,o=t.format;t.format=function(s){var u=this,h=this.$locale();if(!this.isValid())return o.bind(this)(s);var P=this.$utils(),S=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(b){switch(b){case"Q":return Math.ceil((u.$M+1)/3);case"Do":return h.ordinal(u.$D);case"gggg":return u.weekYear();case"GGGG":return u.isoWeekYear();case"wo":return h.ordinal(u.week(),"W");case"w":case"ww":return P.s(u.week(),b==="w"?1:2,"0");case"W":case"WW":return P.s(u.isoWeek(),b==="W"?1:2,"0");case"k":case"kk":return P.s(String(u.$H===0?24:u.$H),b==="k"?1:2,"0");case"X":return Math.floor(u.$d.getTime()/1e3);case"x":return u.$d.getTime();case"z":return"["+u.offsetName()+"]";case"zzz":return"["+u.offsetName("long")+"]";default:return b}});return o.bind(this)(S)}}})})(mt);var Lt=mt.exports;const Nt=He(Lt);var pt={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){return function(r,a,t){var o=a.prototype,s=function(b){return b&&(b.indexOf?b:b.s)},u=function(b,Y,x,D,v){var i=b.name?b:b.$locale(),A=s(i[Y]),T=s(i[x]),c=A||T.map(function(k){return k.slice(0,D)});if(!v)return c;var F=i.weekStart;return c.map(function(k,M){return c[(M+(F||0))%7]})},h=function(){return t.Ls[t.locale()]},P=function(b,Y){return b.formats[Y]||function(x){return x.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,v,i){return v||i.slice(1)})}(b.formats[Y.toUpperCase()])},S=function(){var b=this;return{months:function(Y){return Y?Y.format("MMMM"):u(b,"months")},monthsShort:function(Y){return Y?Y.format("MMM"):u(b,"monthsShort","months",3)},firstDayOfWeek:function(){return b.$locale().weekStart||0},weekdays:function(Y){return Y?Y.format("dddd"):u(b,"weekdays")},weekdaysMin:function(Y){return Y?Y.format("dd"):u(b,"weekdaysMin","weekdays",2)},weekdaysShort:function(Y){return Y?Y.format("ddd"):u(b,"weekdaysShort","weekdays",3)},longDateFormat:function(Y){return P(b.$locale(),Y)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};o.localeData=function(){return S.bind(this)()},t.localeData=function(){var b=h();return{firstDayOfWeek:function(){return b.weekStart||0},weekdays:function(){return t.weekdays()},weekdaysShort:function(){return t.weekdaysShort()},weekdaysMin:function(){return t.weekdaysMin()},months:function(){return t.months()},monthsShort:function(){return t.monthsShort()},longDateFormat:function(Y){return P(b,Y)},meridiem:b.meridiem,ordinal:b.ordinal}},t.months=function(){return u(h(),"months")},t.monthsShort=function(){return u(h(),"monthsShort","months",3)},t.weekdays=function(b){return u(h(),"weekdays",null,null,b)},t.weekdaysShort=function(b){return u(h(),"weekdaysShort","weekdays",3,b)},t.weekdaysMin=function(b){return u(h(),"weekdaysMin","weekdays",2,b)}}})})(pt);var It=pt.exports;const Bt=He(It);var vt={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){var r="week",a="year";return function(t,o,s){var u=o.prototype;u.week=function(h){if(h===void 0&&(h=null),h!==null)return this.add(7*(h-this.week()),"day");var P=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var S=s(this).startOf(a).add(1,a).date(P),b=s(this).endOf(r);if(S.isBefore(b))return 1}var Y=s(this).startOf(a).date(P).startOf(r).subtract(1,"millisecond"),x=this.diff(Y,r,!0);return x<0?s(this).startOf("week").week():Math.ceil(x)},u.weeks=function(h){return h===void 0&&(h=null),this.week(h)}}})})(vt);var Ht=vt.exports;const jt=He(Ht);var ft={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){return function(r,a){a.prototype.weekYear=function(){var t=this.month(),o=this.week(),s=this.year();return o===1&&t===11?s+1:t===0&&o>=52?s-1:s}}})})(ft);var zt=ft.exports;const Gt=He(zt);var ht={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){return function(r,a,t){a.prototype.dayOfYear=function(o){var s=Math.round((t(this).startOf("day")-t(this).startOf("year"))/864e5)+1;return o==null?s:this.add(o-s,"day")}}})})(ht);var qt=ht.exports;const Ut=He(qt);var yt={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){return function(r,a){a.prototype.isSameOrAfter=function(t,o){return this.isSame(t,o)||this.isAfter(t,o)}}})})(yt);var Wt=yt.exports;const Kt=He(Wt);var gt={exports:{}};(function(n,d){(function(r,a){n.exports=a()})(Ae,function(){return function(r,a){a.prototype.isSameOrBefore=function(t,o){return this.isSame(t,o)||this.isBefore(t,o)}}})})(gt);var Jt=gt.exports;const Qt=He(Jt),Ua=Symbol.for("rootPickerInjection"),Zt=Me({...Ct,type:{type:xe(String),default:"date"}}),Xt=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],en=["date","dates","year","years","month","months","week","range"],Wa=Me({disabledDate:{type:xe(Function)},date:{type:xe(Object),required:!0},minDate:{type:xe(Object)},maxDate:{type:xe(Object)},parsedValue:{type:xe([Object,Array])},rangeState:{type:xe(Object),default:()=>({endDate:null,selecting:!1})}}),bt=Me({type:{type:xe(String),required:!0,values:Xt},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),Ka=Me({unlinkPanels:Boolean,parsedValue:{type:xe(Array)}}),Ja=n=>({type:String,values:en,default:n}),an=Me({...bt,parsedValue:{type:xe([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),kt={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7},tn=62,nn=Object.keys(kt),ra=n=>{if(!me(n))return!1;const[d,r]=n;return _.isDayjs(d)&&_.isDayjs(r)&&d.isSameOrBefore(r)},Qa=(n,{lang:d,unit:r,unlinkPanels:a})=>{let t;if(me(n)){const[o,s]=n.map(h=>_(h).locale(d)),u=a?s:o.add(1,r);return[o,u]}else n?t=_(n):t=_();return t=t.locale(d),[t,t.add(1,r)]},rn=(n,d,{columnIndexOffset:r,startDate:a,nextEndDate:t,now:o,unit:s,relativeDateGetter:u,setCellMetadata:h,setRowMetadata:P})=>{for(let S=0;S<n.row;S++){const b=d[S];for(let Y=0;Y<n.column;Y++){let x=b[Y+r];x||(x={row:S,column:Y,type:"normal",inRange:!1,start:!1,end:!1});const D=S*n.column+Y,v=u(D);x.dayjs=v,x.date=v.toDate(),x.timestamp=v.valueOf(),x.type="normal",x.inRange=!!(a&&v.isSameOrAfter(a,s)&&t&&v.isSameOrBefore(t,s))||!!(a&&v.isSameOrBefore(a,s)&&t&&v.isSameOrAfter(t,s)),a?.isSameOrAfter(t)?(x.start=!!t&&v.isSame(t,s),x.end=a&&v.isSame(a,s)):(x.start=!!a&&v.isSame(a,s),x.end=!!t&&v.isSame(t,s)),v.isSame(o,s)&&(x.type="today"),h?.(x,{rowIndex:S,columnIndex:Y}),b[Y+r]=x}P?.(b)}},Oa=(n,d,r)=>{const a=_().locale(r).startOf("month").month(d).year(n),t=a.daysInMonth();return dt(t).map(o=>a.add(o,"day").toDate())},ia=(n,d,r,a)=>{const t=_().year(n).month(d).startOf("month"),o=Oa(n,d,r).find(s=>!a?.(s));return o?_(o).locale(r):t.locale(r)},Ba=(n,d,r)=>{const a=n.year();if(!r?.(n.toDate()))return n.locale(d);const t=n.month();if(!Oa(a,t,d).every(r))return ia(a,t,d,r);for(let o=0;o<12;o++)if(!Oa(a,o,d).every(r))return ia(a,o,d,r);return n};function ln({current:n,key:d,enabledDates:r}){const a=kt[d];if(!a)return null;let t=_(n);for(let o=0;o<tn;o++){t=t.add(a,"day");const s=t.format("YYYY-MM-DD");if(r.has(s))return s}return null}function on({shortcutValue:n,minDate:d,maxDate:r}){if(!n||!d||!r)return!1;const[a,t]=n;return d.isSame(a,"day")&&r.isSame(t,"day")}const sn=Me({...Wa,cellClassName:{type:xe(Function)},showWeekNumber:Boolean,selectionMode:Ja("date")}),cn=["changerange","pick","select"],Ze={name:"es",el:{datepicker:{now:"Ahora",today:"Hoy",cancel:"Cancelar",clear:"Limpiar",confirm:"Aceptar",dateTablePrompt:"Use las teclas de flecha y enter para seleccionar el día del mes",monthTablePrompt:"Use las teclas de flecha y enter para seleccionar el mes",yearTablePrompt:"Use las teclas de flecha y enter para seleccionar el año",selectedDate:"Fecha seleccionada",selectDate:"Seleccionar fecha",selectTime:"Seleccionar hora",startDate:"Fecha de inicio",startTime:"Hora de inicio",endDate:"Fecha de fin",endTime:"Hora de fin",prevYear:"Año anterior",nextYear:"Próximo año",prevMonth:"Mes anterior",nextMonth:"Próximo mes",year:"",month1:"Enero",month2:"Febrero",month3:"Marzo",month4:"Abril",month5:"Mayo",month6:"Junio",month7:"Julio",month8:"Agosto",month9:"Septiembre",month10:"Octubre",month11:"Noviembre",month12:"Diciembre",week:"semana",weeks:{sun:"Dom",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb"},weeksFull:{sun:"Domingo",mon:"Lunes",tue:"Martes",wed:"Miércoles",thu:"Jueves",fri:"Viernes",sat:"Sábado"},months:{jan:"Ene",feb:"Feb",mar:"Mar",apr:"Abr",may:"May",jun:"Jun",jul:"Jul",aug:"Ago",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dic"}}}},Ha=(n="")=>["normal","today"].includes(n),dn=(n,d)=>{const{lang:r}=Ve(L(Ze)),a=L(),t=L(),o=L(),s=L(),u=L([[],[],[],[],[],[]]);let h=!1;const P=n.date.$locale().weekStart||7,S=n.date.locale("en").localeData().weekdaysShort().map(m=>m.toLowerCase()),b=I(()=>P>3?7-P:-P),Y=I(()=>{const m=n.date.startOf("month");return m.subtract(m.day()||7,"day")}),x=I(()=>S.concat(S).slice(P,P+7)),D=I(()=>Ot(e(F)).some(m=>m.isCurrent)),v=I(()=>{const m=n.date.startOf("month"),C=m.day()||7,p=m.daysInMonth(),z=m.subtract(1,"month").daysInMonth();return{startOfMonthDay:C,dateCountOfMonth:p,dateCountOfLastMonth:z}}),i=I(()=>n.selectionMode==="dates"?ye(n.parsedValue):[]),A=(m,{count:C,rowIndex:p,columnIndex:z})=>{const{startOfMonthDay:ae,dateCountOfMonth:O,dateCountOfLastMonth:U}=e(v),X=e(b);if(p>=0&&p<=1){const ee=ae+X<0?7+ae+X:ae+X;if(z+p*7>=ee)return m.text=C,!0;m.text=U-(ee-z%7)+1+p*7,m.type="prev-month"}else return C<=O?m.text=C:(m.text=C-O,m.type="next-month"),!0;return!1},T=(m,{columnIndex:C,rowIndex:p},z)=>{const{disabledDate:ae,cellClassName:O}=n,U=e(i),X=A(m,{count:z,rowIndex:p,columnIndex:C}),ee=m.dayjs.toDate();return m.selected=U.find(ge=>ge.isSame(m.dayjs,"day")),m.isSelected=!!m.selected,m.isCurrent=M(m),m.disabled=ae?.(ee),m.customClass=O?.(ee),X},c=m=>{if(n.selectionMode==="week"){const[C,p]=n.showWeekNumber?[1,7]:[0,6],z=J(m[C+1]);m[C].inRange=z,m[C].start=z,m[p].inRange=z,m[p].end=z}},F=I(()=>{const{minDate:m,maxDate:C,rangeState:p,showWeekNumber:z}=n,ae=e(b),O=e(u),U="day";let X=1;if(z)for(let ee=0;ee<6;ee++)O[ee][0]||(O[ee][0]={type:"week",text:e(Y).add(ee*7+1,U).week()});return rn({row:6,column:7},O,{startDate:m,columnIndexOffset:z?1:0,nextEndDate:p.endDate||C||p.selecting&&m||null,now:_().locale(e(r)).startOf(U),unit:U,relativeDateGetter:ee=>e(Y).add(ee-ae,U),setCellMetadata:(...ee)=>{T(...ee,X)&&(X+=1)},setRowMetadata:c}),O});Se(()=>n.date,async()=>{e(a)?.contains(document.activeElement)&&(await We(),await k())});const k=async()=>e(t)?.focus(),M=m=>n.selectionMode==="date"&&Ha(m.type)&&E(m,n.parsedValue),E=(m,C)=>C?_(C).locale(e(r)).isSame(n.date.date(Number(m.text)),"day"):!1,w=(m,C)=>{const p=m*7+(C-(n.showWeekNumber?1:0))-e(b);return e(Y).add(p,"day")},g=m=>{if(!n.rangeState.selecting)return;let C=m.target;if(C.tagName==="SPAN"&&(C=C.parentNode?.parentNode),C.tagName==="DIV"&&(C=C.parentNode),C.tagName!=="TD")return;const p=C.parentNode.rowIndex-1,z=C.cellIndex;e(F)[p][z].disabled||(p!==e(o)||z!==e(s))&&(o.value=p,s.value=z,d("changerange",{selecting:!0,endDate:w(p,z)}))},j=m=>!e(D)&&m?.text===1&&m.type==="normal"||m.isCurrent,$=m=>{h||e(D)||n.selectionMode!=="date"||oe(m,!0)},N=m=>{m.target.closest("td")&&(h=!0)},Q=m=>{m.target.closest("td")&&(h=!1)},q=m=>{!n.rangeState.selecting||!n.minDate?(d("pick",{minDate:m,maxDate:null}),d("select",!0)):(m>=n.minDate?d("pick",{minDate:n.minDate,maxDate:m}):d("pick",{minDate:m,maxDate:n.minDate}),d("select",!1))},re=m=>{const C=m.week(),p=`${m.year()}w${C}`;d("pick",{year:m.year(),week:C,value:p,date:m.startOf("week")})},te=(m,C)=>{const p=C?ye(n.parsedValue).filter(z=>z?.valueOf()!==m.valueOf()):ye(n.parsedValue).concat([m]);d("pick",p)},oe=(m,C=!1)=>{const p=m.target.closest("td");if(!p)return;const z=p.parentNode.rowIndex-1,ae=p.cellIndex,O=e(F)[z][ae];if(O.disabled||O.type==="week")return;const U=w(z,ae);switch(n.selectionMode){case"range":{q(U);break}case"date":{d("pick",U,C);break}case"week":{re(U);break}case"dates":{te(U,!!O.selected);break}}},J=m=>{if(n.selectionMode!=="week")return!1;let C=n.date.startOf("day");if(m.type==="prev-month"&&(C=C.subtract(1,"month")),m.type==="next-month"&&(C=C.add(1,"month")),C=C.date(Number.parseInt(m.text,10)),n.parsedValue&&!me(n.parsedValue)){const p=(n.parsedValue.day()-P+7)%7-1;return n.parsedValue.subtract(p,"day").isSame(C,"day")}return!1};return{WEEKS:x,rows:F,tbodyRef:a,currentCellRef:t,focus:k,getDateOfCell:w,isCurrent:M,isWeekActive:J,isSelectedCell:j,handlePickDate:oe,handleMouseUp:Q,handleMouseDown:N,handleMouseMove:g,handleFocus:$}},un=(n,{isCurrent:d,isWeekActive:r})=>{const a=Te("date-table"),{t}=Ve(L(Ze)),o=I(()=>[a.b(),{"is-week-mode":n.selectionMode==="week"}]),s=I(()=>t("el.datepicker.dateTablePrompt")),u=I(()=>t("el.datepicker.week"));return{tableKls:o,tableLabel:s,weekLabel:u,getCellClasses:h=>{const P=[];return Ha(h.type)&&!h.disabled?(P.push("available"),h.type==="today"&&P.push("today")):P.push(h.type),d(h)&&P.push("current"),h.inRange&&(Ha(h.type)||n.selectionMode==="week")&&(P.push("in-range"),h.start&&P.push("start-date"),h.end&&P.push("end-date")),h.disabled&&P.push("disabled"),h.selected&&P.push("selected"),h.customClass&&P.push(h.customClass),P.join(" ")},getRowKls:h=>[a.e("row"),{current:r(h)}],t}},mn=Me({cell:{type:xe(Object)}}),pn=Fe({name:"GDatePickerCell",props:mn,setup(n){return{ns:Te("date-table-cell"),cell:n.cell}}}),vn=(n,d)=>{const r=n.__vccOpts||n;for(const[a,t]of d)r[a]=t;return r};function fn(n,d,r,a,t,o){return le(n.$slots,"default",St(Mt(n.cell)),()=>[H("div",{class:y(n.ns.b())},[H("span",{class:y(n.ns.e("text"))},de(n.cell?.renderText??n.cell?.text),3)],2)])}const Za=vn(pn,[["render",fn]]),hn=["aria-label"],yn={key:0,scope:"col"},gn=["aria-label"],bn=["aria-current","aria-selected","tabindex","data-date"],ja=Fe({__name:"basic-date-table",props:sn,emits:cn,setup(n,{expose:d,emit:r}){const a=n,t=r,{WEEKS:o,rows:s,tbodyRef:u,currentCellRef:h,focus:P,getDateOfCell:S,isCurrent:b,isWeekActive:Y,isSelectedCell:x,handlePickDate:D,handleMouseUp:v,handleMouseDown:i,handleMouseMove:A,handleFocus:T}=dn(a,t),{tableLabel:c,tableKls:F,weekLabel:k,getCellClasses:M,getRowKls:E,t:w}=un(a,{isCurrent:b,isWeekActive:Y});function g(j,$,N){if(N.type!=="week")return S(j,$).format("YYYY-MM-DD")}return d({focus:P}),(j,$)=>(G(),K("table",{"aria-label":e(c),class:y(e(F)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:$[1]||($[1]=(...N)=>e(D)&&e(D)(...N)),onMousemove:$[2]||($[2]=(...N)=>e(A)&&e(A)(...N)),onMousedown:$[3]||($[3]=sa((...N)=>e(i)&&e(i)(...N),["prevent"])),onMouseup:$[4]||($[4]=(...N)=>e(v)&&e(v)(...N))},[H("tbody",{ref_key:"tbodyRef",ref:u},[H("tr",null,[j.showWeekNumber?(G(),K("th",yn,de(e(k)),1)):ie("",!0),(G(!0),K(Pe,null,Ye(e(o),(N,Q)=>(G(),K("th",{key:Q,"aria-label":e(w)("el.datepicker.weeksFull."+N),scope:"col"},de(e(w)("el.datepicker.weeks."+N)),9,gn))),128))]),(G(!0),K(Pe,null,Ye(e(s),(N,Q)=>(G(),K("tr",{key:Q,class:y(e(E)(N[1]))},[(G(!0),K(Pe,null,Ye(N,(q,re)=>(G(),K("td",{key:`${Q}.${re}`,ref_for:!0,ref:te=>e(x)(q)&&(h.value=te),class:y(e(M)(q)),"aria-current":q.isCurrent?"date":void 0,"aria-selected":q.isCurrent,tabindex:e(x)(q)?0:-1,"data-date":g(Q,re,q),onFocus:$[0]||($[0]=(...te)=>e(T)&&e(T)(...te))},[Z(Za,{cell:q},null,8,["cell"])],42,bn))),128))],2))),128))],512)],42,hn))}}),kn=Me({...Wa,selectionMode:Ja("month")}),wn=["aria-label"],Dn=["aria-selected","aria-label","tabindex","onKeydown"],za=Fe({__name:"basic-month-table",props:kn,emits:["changerange","pick","select"],setup(n,{expose:d,emit:r}){const a=n,t=r,o=Te("month-table"),{t:s,lang:u}=Ve(),h=L(),P=L(),S=L(a.date.locale("en").localeData().monthsShort().map(F=>F.toLowerCase())),b=L([[],[],[]]),Y=L(),x=L(),D=I(()=>{const F=b.value,k=_().locale(u.value).startOf("month");for(let M=0;M<3;M++){const E=F[M];for(let w=0;w<4;w++){const g=E[w]||={row:M,column:w,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};g.type="normal";const j=M*4+w,$=a.date.startOf("year").month(j),N=a.rangeState.endDate||a.maxDate||a.rangeState.selecting&&a.minDate||null;g.inRange=!!(a.minDate&&$.isSameOrAfter(a.minDate,"month")&&N&&$.isSameOrBefore(N,"month"))||!!(a.minDate&&$.isSameOrBefore(a.minDate,"month")&&N&&$.isSameOrAfter(N,"month")),a.minDate?.isSameOrAfter(N)?(g.start=!!(N&&$.isSame(N,"month")),g.end=a.minDate&&$.isSame(a.minDate,"month")):(g.start=!!(a.minDate&&$.isSame(a.minDate,"month")),g.end=!!(N&&$.isSame(N,"month"))),k.isSame($)&&(g.type="today"),g.text=j,g.disabled=a.disabledDate?.($.toDate())||!1}}return F}),v=()=>{P.value?.focus()},i=F=>{const k={},M=a.date.year(),E=new Date,w=F.text;return k.disabled=a.disabledDate?Oa(M,w,u.value).every(a.disabledDate):!1,k.current=ye(a.parsedValue).findIndex(g=>_.isDayjs(g)&&g.year()===M&&g.month()===w)>=0,k.today=E.getFullYear()===M&&E.getMonth()===w,F.inRange&&(k["in-range"]=!0,F.start&&(k["start-date"]=!0),F.end&&(k["end-date"]=!0)),k},A=F=>{const k=a.date.year(),M=F.text;return ye(a.date).findIndex(E=>E.year()===k&&E.month()===M)>=0},T=F=>{if(!a.rangeState.selecting)return;let k=F.target;if(k.tagName==="SPAN"&&(k=k.parentNode?.parentNode),k.tagName==="DIV"&&(k=k.parentNode),k.tagName!=="TD")return;const M=k.parentNode.rowIndex,E=k.cellIndex;D.value[M][E].disabled||(M!==Y.value||E!==x.value)&&(Y.value=M,x.value=E,t("changerange",{selecting:!0,endDate:a.date.startOf("year").month(M*4+E)}))},c=F=>{const k=F.target?.closest("td");if(k?.tagName!=="TD"||Ea(k,"disabled"))return;const M=k.cellIndex,E=k.parentNode.rowIndex*4+M,w=a.date.startOf("year").month(E);if(a.selectionMode==="months"){if(F.type==="keydown"){t("pick",ye(a.parsedValue),!1);return}const g=ia(a.date.year(),E,u.value,a.disabledDate),j=Ea(k,"current")?ye(a.parsedValue).filter($=>$?.month()!==g.month()):ye(a.parsedValue).concat([_(g)]);t("pick",j)}else a.selectionMode==="range"?a.rangeState.selecting?(a.minDate&&w>=a.minDate?t("pick",{minDate:a.minDate,maxDate:w}):t("pick",{minDate:w,maxDate:a.minDate}),t("select",!1)):(t("pick",{minDate:w,maxDate:null}),t("select",!0)):t("pick",E)};return Se(()=>a.date,async()=>{h.value?.contains(document.activeElement)&&(await We(),P.value?.focus())}),d({focus:v}),(F,k)=>(G(),K("table",{role:"grid","aria-label":e(s)("el.datepicker.monthTablePrompt"),class:y(e(o).b()),onClick:c,onMousemove:T},[H("tbody",{ref_key:"tbodyRef",ref:h},[(G(!0),K(Pe,null,Ye(D.value,(M,E)=>(G(),K("tr",{key:E},[(G(!0),K(Pe,null,Ye(M,(w,g)=>(G(),K("td",{key:g,ref_for:!0,ref:j=>A(w)&&(P.value=j),class:y(i(w)),"aria-selected":`${A(w)}`,"aria-label":e(s)(`el.datepicker.month${+w.text+1}`),tabindex:A(w)?0:-1,onKeydown:[na(sa(c,["prevent","stop"]),["space"]),na(sa(c,["prevent","stop"]),["enter"])]},[Z(Za,{cell:{...w,renderText:e(s)("el.datepicker.months."+S.value[w.text])}},null,8,["cell"])],42,Dn))),128))]))),128))],512)],42,wn))}}),xn=Me({...Wa,selectionMode:Ja("year")}),Sn=["aria-label"],Mn=["aria-selected","aria-label","tabindex","onKeydown"],Ga=Fe({__name:"basic-year-table",props:xn,emits:["changerange","pick","select"],setup(n,{expose:d,emit:r}){const a=(k,M)=>{const E=_(String(k)).locale(M).startOf("year"),w=E.endOf("year").dayOfYear();return dt(w).map(g=>E.add(g,"day").toDate())},t=n,o=r,s=Te("year-table"),{t:u,lang:h}=Ve(),P=L(),S=L(),b=I(()=>Math.floor(t.date.year()/10)*10),Y=L([[],[],[]]),x=L(),D=L(),v=I(()=>{const k=Y.value,M=_().locale(h.value).startOf("year");for(let E=0;E<3;E++){const w=k[E];for(let g=0;g<4&&!(E*4+g>=10);g++){let j=w[g];j||(j={row:E,column:g,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),j.type="normal";const $=E*4+g+b.value,N=_().year($),Q=t.rangeState.endDate||t.maxDate||t.rangeState.selecting&&t.minDate||null;j.inRange=!!(t.minDate&&N.isSameOrAfter(t.minDate,"year")&&Q&&N.isSameOrBefore(Q,"year"))||!!(t.minDate&&N.isSameOrBefore(t.minDate,"year")&&Q&&N.isSameOrAfter(Q,"year")),t.minDate?.isSameOrAfter(Q)?(j.start=!!(Q&&N.isSame(Q,"year")),j.end=!!(t.minDate&&N.isSame(t.minDate,"year"))):(j.start=!!(t.minDate&&N.isSame(t.minDate,"year")),j.end=!!(Q&&N.isSame(Q,"year"))),M.isSame(N)&&(j.type="today"),j.text=$;const q=N.toDate();j.disabled=t.disabledDate&&t.disabledDate(q)||!1,w[g]=j}}return k}),i=()=>{S.value?.focus()},A=k=>{const M={},E=_().locale(h.value),w=k.text;return M.disabled=t.disabledDate?a(w,h.value).every(t.disabledDate):!1,M.today=E.year()===w,M.current=ye(t.parsedValue).findIndex(g=>g.year()===w)>=0,k.inRange&&(M["in-range"]=!0,k.start&&(M["start-date"]=!0),k.end&&(M["end-date"]=!0)),M},T=k=>{const M=k.text;return ye(t.date).findIndex(E=>E.year()===M)>=0},c=k=>{const M=k.target?.closest("td");if(!M||!M.textContent||Ea(M,"disabled"))return;const E=M.cellIndex,w=M.parentNode.rowIndex*4+E+b.value,g=_().year(w);if(t.selectionMode==="range")t.rangeState.selecting?(t.minDate&&g>=t.minDate?o("pick",{minDate:t.minDate,maxDate:g}):o("pick",{minDate:g,maxDate:t.minDate}),o("select",!1)):(o("pick",{minDate:g,maxDate:null}),o("select",!0));else if(t.selectionMode==="years"){if(k.type==="keydown"){o("pick",ye(t.parsedValue),!1);return}const j=Ba(g.startOf("year"),h.value,t.disabledDate),$=Ea(M,"current")?ye(t.parsedValue).filter(N=>N?.year()!==w):ye(t.parsedValue).concat([j]);o("pick",$)}else o("pick",w)},F=k=>{if(!t.rangeState.selecting)return;const M=k.target?.closest("td");if(!M)return;const E=M.parentNode.rowIndex,w=M.cellIndex;v.value[E][w].disabled||(E!==x.value||w!==D.value)&&(x.value=E,D.value=w,o("changerange",{selecting:!0,endDate:_().year(b.value).add(E*4+w,"year")}))};return Se(()=>t.date,async()=>{P.value?.contains(document.activeElement)&&(await We(),S.value?.focus())}),d({focus:i}),(k,M)=>(G(),K("table",{role:"grid","aria-label":e(u)("el.datepicker.yearTablePrompt"),class:y(e(s).b()),onClick:c,onMousemove:F},[H("tbody",{ref_key:"tbodyRef",ref:P},[(G(!0),K(Pe,null,Ye(v.value,(E,w)=>(G(),K("tr",{key:w},[(G(!0),K(Pe,null,Ye(E,(g,j)=>(G(),K("td",{key:`${w}_${j}`,ref_for:!0,ref:$=>T(g)&&(S.value=$),class:y(["available",A(g)]),"aria-selected":T(g),"aria-label":String(g.text),tabindex:T(g)?0:-1,onKeydown:[na(sa(c,["prevent","stop"]),["space"]),na(sa(c,["prevent","stop"]),["enter"])]},[Z(Za,{cell:g},null,8,["cell"])],42,Mn))),128))]))),128))],512)],42,Sn))}}),Cn=["onClick"],Rn=["aria-label"],Pn=["aria-label"],Yn=["aria-label"],En=["aria-label"],On=["disabled"],_n=["disabled"],Vn=Fe({__name:"panel-date-pick",props:an,emits:["pick","set-picker-option","panel-change"],setup(n,{emit:d}){const r=(l,R,W)=>!0,a=n,t=d,o=Te("picker-panel"),s=Te("date-picker"),u=ot(),h=qa(),{t:P,lang:S}=Ve(L(Ze)),b=Ke("EP_PICKER_BASE"),Y=Ke(Et),{shortcuts:x,disabledDate:D,cellClassName:v,defaultTime:i}=b.props,A=Re(b.props,"defaultValue"),T=L(),c=L(_().locale(S.value)),F=L(!1);let k=!1;const M=I(()=>_(i).locale(S.value)),E=I(()=>c.value.month()),w=I(()=>c.value.year()),g=L([]),j=L(null),$=L(null),N=l=>g.value.length>0?r(l,g.value,a.format||"HH:mm:ss"):!0,Q=l=>i&&!$e.value&&!F.value&&!k?M.value.year(l.year()).month(l.month()).date(l.date()):ge.value?l.millisecond(0):l.startOf("day"),q=(l,...R)=>{if(!l)t("pick",l,...R);else if(me(l)){const W=l.map(Q);t("pick",W,...R)}else t("pick",Q(l),...R);j.value=null,$.value=null,F.value=!1,k=!1},re=async(l,R)=>{if(p.value==="date"){l=l;let W=a.parsedValue?a.parsedValue.year(l.year()).month(l.month()).date(l.date()):l;N(W),c.value=W,q(W,ge.value||R),a.type==="datetime"&&(await We(),qe())}else p.value==="week"?q(l.date):p.value==="dates"&&q(l,!0)},te=l=>{const R=l?"add":"subtract";c.value=c.value[R](1,"month"),aa("month")},oe=l=>{const R=c.value,W=l?"add":"subtract";c.value=J.value==="year"?R[W](10,"year"):R[W](1,"year"),aa("year")},J=L("date"),m=I(()=>{const l=P("el.datepicker.year");if(J.value==="year"){const R=Math.floor(w.value/10)*10;return l?`${R} ${l} - ${R+9} ${l}`:`${R} - ${R+9}`}return`${w.value} ${l}`}),C=l=>{const R=Ya(l.value)?l.value():l.value;if(R){k=!0,q(_(R).locale(S.value));return}l.onClick&&l.onClick({attrs:u,slots:h,emit:t})},p=I(()=>{const{type:l}=a;return["week","month","months","year","years","dates"].includes(l)?l:"date"}),z=I(()=>p.value==="dates"||p.value==="months"||p.value==="years"),ae=I(()=>p.value==="date"?J.value:p.value),O=I(()=>!!x.length),U=async(l,R)=>{p.value==="month"?(c.value=ia(c.value.year(),l,S.value,D),q(c.value,!1)):p.value==="months"?q(l,R??!0):(c.value=ia(c.value.year(),l,S.value,D),J.value="date",["month","year","date","week"].includes(p.value)&&(q(c.value,!0),await We(),qe())),aa("month")},X=async(l,R)=>{if(p.value==="year"){const W=c.value.startOf("year").year(l);c.value=Ba(W,S.value,D),q(c.value,!1)}else if(p.value==="years")q(l,R??!0);else{const W=c.value.year(l);c.value=Ba(W,S.value,D),J.value="month",["month","year","date","week"].includes(p.value)&&(q(c.value,!0),await We(),qe())}aa("year")},ee=async l=>{J.value=l,await We(),qe()},ge=I(()=>a.type==="datetime"||a.type==="datetimerange"),Xe=I(()=>{const l=ge.value||p.value==="dates",R=p.value==="years",W=p.value==="months",ue=J.value==="date",f=J.value==="year",V=J.value==="month";return l&&ue||R&&f||W&&V}),ea=I(()=>D?a.parsedValue?me(a.parsedValue)?D(a.parsedValue[0].toDate()):D(a.parsedValue.toDate()):!0:!1),ze=()=>{if(z.value)q(a.parsedValue);else{let l=a.parsedValue;if(!l){const R=_(i).locale(S.value),W=la();l=R.year(W.year()).month(W.month()).date(W.date())}c.value=l,q(l)}},Ge=I(()=>D?D(_().locale(S.value).toDate()):!1),be=()=>{const l=_().locale(S.value).toDate();F.value=!0,(!D||!D(l))&&N(l)&&(c.value=_().locale(S.value),q(c.value))},ve=I(()=>a.timeFormat||it(a.format)),ke=I(()=>a.dateFormat||ct(a.format)),$e=I(()=>{if($.value)return $.value;if(!(!a.parsedValue&&!A.value))return(a.parsedValue||c.value).format(ve.value)}),Ee=I(()=>{if(j.value)return j.value;if(!(!a.parsedValue&&!A.value))return(a.parsedValue||c.value).format(ke.value)}),we=L(!1),Le=()=>{we.value=!0},Ne=()=>{we.value=!1},Oe=l=>({hour:l.hour(),minute:l.minute(),second:l.second(),year:l.year(),month:l.month(),date:l.date()}),Ta=(l,R,W)=>{const{hour:ue,minute:f,second:V}=Oe(l),B=a.parsedValue?a.parsedValue.hour(ue).minute(f).second(V):l;c.value=B,q(c.value,!0),W||(we.value=R)},Fa=l=>{const R=_(l,ve.value).locale(S.value);if(R.isValid()&&N(R)){const{year:W,month:ue,date:f}=Oe(c.value);c.value=R.year(W).month(ue).date(f),$.value=null,we.value=!1,q(c.value,!0)}},ca=l=>{const R=_(l,ke.value).locale(S.value);if(R.isValid()){if(D&&D(R.toDate()))return;const{hour:W,minute:ue,second:f}=Oe(c.value);c.value=R.hour(W).minute(ue).second(f),j.value=null,q(c.value,!0)}},da=l=>_.isDayjs(l)&&l.isValid()&&(D?!D(l.toDate()):!0),ua=l=>me(l)?l.map(R=>R.format(a.format)):l.format(a.format),ma=l=>_(l,a.format).locale(S.value),la=()=>{const l=_(A.value).locale(S.value);if(!A.value){const R=M.value;return _().hour(R.hour()).minute(R.minute()).second(R.second()).locale(S.value)}return l},qe=()=>{["week","month","year","date"].includes(p.value)&&T.value?.focus()},pa=()=>{qe(),p.value==="week"&&va(he.down)},Aa=l=>{const{code:R}=l;[he.up,he.down,he.left,he.right,he.home,he.end,he.pageUp,he.pageDown].includes(R)&&(va(R),l.stopPropagation(),l.preventDefault()),[he.enter,he.space,he.numpadEnter].includes(R)&&j.value===null&&$.value===null&&(l.preventDefault(),q(c.value,!1))},va=l=>{const{up:R,down:W,left:ue,right:f,home:V,end:B,pageUp:De,pageDown:fe}=he,Ue={year:{[R]:-4,[W]:4,[ue]:-1,[f]:1,offset:(ne,_e)=>ne.setFullYear(ne.getFullYear()+_e)},month:{[R]:-4,[W]:4,[ue]:-1,[f]:1,offset:(ne,_e)=>ne.setMonth(ne.getMonth()+_e)},week:{[R]:-1,[W]:1,[ue]:-1,[f]:1,offset:(ne,_e)=>ne.setDate(ne.getDate()+_e*7)},date:{[R]:-7,[W]:7,[ue]:-1,[f]:1,[V]:ne=>-ne.getDay(),[B]:ne=>-ne.getDay()+6,[De]:ne=>-new Date(ne.getFullYear(),ne.getMonth(),0).getDate(),[fe]:ne=>new Date(ne.getFullYear(),ne.getMonth()+1,0).getDate(),offset:(ne,_e)=>ne.setDate(ne.getDate()+_e)}},oa=c.value.toDate();for(;Math.abs(c.value.diff(oa,"year",!0))<1;){const ne=Ue[ae.value];if(!ne)return;if(ne.offset(oa,Ya(ne[l])?ne[l](oa):ne[l]??0),D&&D(oa))break;const _e=_(oa).locale(S.value);c.value=_e,t("pick",_e,!0);break}},aa=l=>{t("panel-change",c.value.toDate(),l,J.value)};return Se(()=>p.value,l=>{if(["month","year"].includes(l)){J.value=l;return}else if(l==="years"){J.value="year";return}else if(l==="months"){J.value="month";return}J.value="date"},{immediate:!0}),Se(()=>J.value,()=>{Y?.updatePopper()}),Se(()=>A.value,l=>{l&&(c.value=la())},{immediate:!0}),Se(()=>a.parsedValue,l=>{if(l){if(z.value||me(l))return;c.value=l}else c.value=la()},{immediate:!0}),t("set-picker-option",["isValidValue",da]),t("set-picker-option",["formatToString",ua]),t("set-picker-option",["parseUserInput",ma]),t("set-picker-option",["handleFocusPicker",pa]),(l,R)=>(G(),K("div",{class:y([e(o).b(),e(s).b(),{"has-sidebar":l.$slots.sidebar||O.value,"has-time":ge.value}])},[H("div",{class:y(e(o).e("body-wrapper"))},[le(l.$slots,"sidebar",{class:y(e(o).e("sidebar"))}),O.value?(G(),K("div",{key:0,class:y(e(o).e("sidebar"))},[(G(!0),K(Pe,null,Ye(e(x),(W,ue)=>(G(),K("button",{key:ue,type:"button",class:y(e(o).e("shortcut")),onClick:f=>C(W)},de(W.text),11,Cn))),128))],2)):ie("",!0),H("div",{class:y(e(o).e("body"))},[ge.value?(G(),K("div",{key:0,class:y(e(s).e("time-header"))},[H("span",{class:y(e(s).e("editor-wrap"))},[Z(e(ta),{placeholder:e(P)("el.datepicker.selectDate"),"model-value":Ee.value,"validate-event":!1,onInput:R[0]||(R[0]=W=>j.value=W),onChange:ca},null,8,["placeholder","model-value"])],2),Ce((G(),K("span",{class:y(e(s).e("editor-wrap"))},[Z(e(ta),{placeholder:e(P)("el.datepicker.selectTime"),"model-value":$e.value,"validate-event":!1,onFocus:Le,onInput:R[1]||(R[1]=W=>$.value=W),onChange:Fa},null,8,["placeholder","model-value"]),Z(e(Na),{visible:we.value,format:ve.value,"parsed-value":c.value,onPick:Ta},null,8,["visible","format","parsed-value"])],2)),[[e(Ia),Ne]])],2)):ie("",!0),Ce(H("div",{class:y([e(s).e("header"),(J.value==="year"||J.value==="month")&&e(s).e("header--bordered")])},[H("span",{class:y(e(s).e("prev-btn"))},[Ce(H("button",{type:"button","aria-label":e(P)("el.datepicker.prevYear"),class:y(["d-arrow-left",e(o).e("icon-btn")]),onClick:R[2]||(R[2]=W=>oe(!1))},[le(l.$slots,"prev-year",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],10,Rn),[[Ie,J.value!=="date"]]),Ce(H("button",{type:"button","aria-label":e(P)("el.datepicker.prevMonth"),class:y([e(o).e("icon-btn"),"arrow-left"]),onClick:R[3]||(R[3]=W=>te(!1))},[le(l.$slots,"prev-month",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],10,Pn),[[Ie,J.value==="date"]])],2),H("span",{role:"button",class:y(e(s).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:R[4]||(R[4]=na(W=>ee("year"),["enter"])),onClick:R[5]||(R[5]=W=>ee("year"))},de(m.value),35),Ce(H("span",{role:"button","aria-live":"polite",tabindex:"0",class:y([e(s).e("header-label"),{active:J.value==="month"}]),onKeydown:R[6]||(R[6]=na(W=>ee("month"),["enter"])),onClick:R[7]||(R[7]=W=>ee("month"))},de(e(P)(`el.datepicker.month${E.value+1}`)),35),[[Ie,J.value==="date"]]),H("span",{class:y(e(s).e("next-btn"))},[Ce(H("button",{type:"button","aria-label":e(P)("el.datepicker.nextMonth"),class:y([e(o).e("icon-btn"),"arrow-right"]),onClick:R[8]||(R[8]=W=>te(!0))},[le(l.$slots,"next-month",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],10,Yn),[[Ie,J.value==="date"]]),Ce(H("button",{type:"button","aria-label":e(P)("el.datepicker.nextYear"),class:y([e(o).e("icon-btn"),"d-arrow-right"]),onClick:R[9]||(R[9]=W=>oe(!0))},[le(l.$slots,"next-year",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],10,En),[[Ie,J.value!=="date"]])],2)],2),[[Ie,J.value!=="time"]]),H("div",{class:y(e(o).e("content")),onKeydown:Aa},[J.value==="date"?(G(),Ra(ja,{key:0,ref_key:"currentViewRef",ref:T,"selection-mode":p.value,date:c.value,"parsed-value":l.parsedValue,"disabled-date":e(D),"cell-class-name":e(v),onPick:re},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):ie("",!0),J.value==="year"?(G(),Ra(Ga,{key:1,ref_key:"currentViewRef",ref:T,"selection-mode":p.value,date:c.value,"disabled-date":e(D),"parsed-value":l.parsedValue,onPick:X},null,8,["selection-mode","date","disabled-date","parsed-value"])):ie("",!0),J.value==="month"?(G(),Ra(za,{key:2,ref_key:"currentViewRef",ref:T,"selection-mode":p.value,date:c.value,"parsed-value":l.parsedValue,"disabled-date":e(D),onPick:U},null,8,["selection-mode","date","parsed-value","disabled-date"])):ie("",!0)],34)],2)],2),Ce(H("div",{class:y(e(o).e("footer"))},[Ce(H("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:Ge.value,onClick:be},de(e(P)("el.datepicker.now")),9,On),[[Ie,!z.value&&l.showNow]]),H("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:ea.value,onClick:ze},de(e(P)("el.datepicker.confirm")),9,_n)],2),[[Ie,Xe.value]])],2))}}),Tn=Me({...bt,...Ka,visible:Boolean}),wt=n=>{const{emit:d}=st(),r=ot(),a=qa();return t=>{const o=Ya(t.value)?t.value():t.value;if(o){d("pick",[_(o[0]).locale(n.value),_(o[1]).locale(n.value)]);return}t.onClick&&t.onClick({attrs:r,slots:a,emit:d})}},Dt=(n,{defaultValue:d,leftDate:r,rightDate:a,unit:t,onParsedValueChanged:o})=>{const{emit:s}=st(),{pickerNs:u}=Ke(Ua),h=Te("date-range-picker"),{t:P,lang:S}=Ve(L(Ze)),b=wt(S),Y=L(),x=L(),D=L({endDate:null,selecting:!1}),v=F=>{D.value=F},i=(F=!1)=>{const k=e(Y),M=e(x);ra([k,M])&&s("pick",[k,M],F)},A=F=>{D.value.selecting=F,F||(D.value.endDate=null)},T=F=>{if(me(F)&&F.length===2){const[k,M]=F;Y.value=k,r.value=k,x.value=M,o(e(Y),e(x))}else c()},c=()=>{const[F,k]=Qa(e(d),{lang:e(S),unit:t,unlinkPanels:n.unlinkPanels});Y.value=void 0,x.value=void 0,r.value=F,a.value=k};return Se(d,F=>{F&&c()},{immediate:!0}),Se(()=>n.parsedValue,T,{immediate:!0}),{minDate:Y,maxDate:x,rangeState:D,lang:S,ppNs:u,drpNs:h,handleChangeRange:v,handleRangeConfirm:i,handleShortcutClick:b,onSelect:A,onReset:T,t:P}},Fn=["aria-pressed","onClick"],An=["aria-label"],$n=["disabled","aria-label"],Ln=["disabled","aria-label"],Nn={"aria-live":"polite"},In=["disabled","aria-label"],Bn=["disabled","aria-label"],Hn=["aria-label"],jn={"aria-live":"polite"},fa="month",zn=Fe({__name:"panel-date-range",props:Tn,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(n,{emit:d}){const r=n,a=d,t=Ke("EP_PICKER_BASE"),{disabledDate:o,cellClassName:s,defaultTime:u,clearable:h}=t.props,P=Re(t.props,"format"),S=Re(t.props,"shortcuts"),b=Re(t.props,"defaultValue"),{lang:Y}=Ve(L(Ze)),x=L(_().locale(Y.value)),D=L(_().locale(Y.value).add(1,fa)),{minDate:v,maxDate:i,rangeState:A,ppNs:T,drpNs:c,handleChangeRange:F,handleRangeConfirm:k,handleShortcutClick:M,onSelect:E,onReset:w,t:g}=Dt(r,{defaultValue:b,leftDate:x,rightDate:D,unit:fa,onParsedValueChanged:aa});Se(()=>r.visible,f=>{!f&&A.value.selecting&&(w(r.parsedValue),E(!1))});const j=L({min:null,max:null}),$=L({min:null,max:null}),N=I(()=>`${x.value.year()} ${g("el.datepicker.year")} ${g(`el.datepicker.month${x.value.month()+1}`)}`),Q=I(()=>`${D.value.year()} ${g("el.datepicker.year")} ${g(`el.datepicker.month${D.value.month()+1}`)}`),q=I(()=>x.value.year()),re=I(()=>x.value.month()),te=I(()=>D.value.year()),oe=I(()=>D.value.month()),J=I(()=>!!S.value.length);function m(f){return on({shortcutValue:Ya(f.value)?f.value():f.value,minDate:v.value,maxDate:i.value})}const C=I(()=>j.value.min!==null?j.value.min:v.value?v.value.format(U.value):""),p=I(()=>j.value.max!==null?j.value.max:i.value||v.value?(i.value||v.value).format(U.value):""),z=I(()=>$.value.min!==null?$.value.min:v.value?v.value.format(O.value):""),ae=I(()=>$.value.max!==null?$.value.max:i.value||v.value?(i.value||v.value).format(O.value):""),O=I(()=>r.timeFormat||it(P.value)),U=I(()=>r.dateFormat||ct(P.value)),X=f=>ra(f)&&(o?!o(f[0].toDate())&&!o(f[1].toDate()):!0),ee=()=>{x.value=x.value.subtract(1,"month"),r.unlinkPanels||(D.value=x.value.add(1,"month")),be("month")},ge=()=>{r.unlinkPanels?D.value=D.value.add(1,"month"):(x.value=x.value.add(1,"month"),D.value=x.value.add(1,"month")),be("month")},Xe=()=>{x.value=x.value.add(1,"year"),be("year")},ea=()=>{x.value=x.value.add(1,"month"),be("month")},ze=()=>{D.value=D.value.subtract(1,"year"),be("year")},Ge=()=>{D.value=D.value.subtract(1,"month"),be("month")},be=f=>{a("panel-change",[x.value.toDate(),D.value.toDate()],f)},ve=I(()=>{const f=(re.value+1)%12,V=re.value+1>=12?1:0;return r.unlinkPanels&&new Date(q.value+V,f)<new Date(te.value,oe.value)}),ke=I(()=>r.unlinkPanels&&te.value*12+oe.value-(q.value*12+re.value+1)>=12),$e=I(()=>!(v.value&&i.value&&!A.value.selecting&&ra([v.value,i.value]))),Ee=I(()=>r.type==="datetime"||r.type==="datetimerange"),we=(f,V)=>{if(f)return u?_(u[V]||u).locale(Y.value).year(f.year()).month(f.month()).date(f.date()):f},Le=(f,V=!0)=>{const B=f.minDate,De=f.maxDate,fe=we(B,0),Ue=we(De,1);i.value===Ue&&v.value===fe||(a("calendar-change",[B.toDate(),De&&De.toDate()]),i.value=Ue,v.value=fe,Ue?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[fe?fe.format(P.value):"",""]]),!(!V||Ee.value)&&k())},Ne=L(!1),Oe=L(!1),Ta=()=>{Ne.value=!1},Fa=()=>{Oe.value=!1},ca=(f,V)=>{j.value[V]=f;const B=_(f,U.value).locale(Y.value);if(B.isValid()){if(o&&o(B.toDate()))return;V==="min"?(x.value=B,v.value=(v.value||x.value).year(B.year()).month(B.month()).date(B.date()),!r.unlinkPanels&&(!i.value||i.value.isBefore(v.value))&&(D.value=B.add(1,"month"),i.value=v.value.add(1,"month"))):(D.value=B,i.value=(i.value||D.value).year(B.year()).month(B.month()).date(B.date()),!r.unlinkPanels&&(!v.value||v.value.isAfter(i.value))&&(x.value=B.subtract(1,"month"),v.value=i.value.subtract(1,"month")))}},da=(f,V)=>{j.value[V]=null},ua=(f,V)=>{$.value[V]=f;const B=_(f,O.value).locale(Y.value);B.isValid()&&(V==="min"?(Ne.value=!0,v.value=(v.value||x.value).hour(B.hour()).minute(B.minute()).second(B.second())):(Oe.value=!0,i.value=(i.value||D.value).hour(B.hour()).minute(B.minute()).second(B.second()),D.value=i.value))},ma=(f,V)=>{$.value[V]=null,V==="min"?(x.value=v.value,Ne.value=!1,(!i.value||i.value.isBefore(v.value))&&(i.value=v.value)):(D.value=i.value,Oe.value=!1,i.value&&i.value.isBefore(v.value)&&(v.value=i.value))},la=(f,V,B)=>{$.value.min||(f&&(x.value=f,v.value=(v.value||x.value).hour(f.hour()).minute(f.minute()).second(f.second())),B||(Ne.value=V),(!i.value||i.value.isBefore(v.value))&&(i.value=v.value,D.value=f))},qe=(f,V,B)=>{$.value.max||(f&&(D.value=f,i.value=(i.value||D.value).hour(f.hour()).minute(f.minute()).second(f.second())),B||(Oe.value=V),i.value&&i.value.isBefore(v.value)&&(v.value=i.value))},pa=()=>{x.value=Qa(e(b),{lang:e(Y),unit:"month",unlinkPanels:r.unlinkPanels})[0],D.value=x.value.add(1,"month"),i.value=void 0,v.value=void 0,a("pick",null)},Aa=f=>me(f)?f.map(V=>V.format(P.value)):f.format(P.value),va=f=>me(f)?f.map(V=>_(V,P.value).locale(Y.value)):_(f,P.value).locale(Y.value);function aa(f,V){if(r.unlinkPanels&&V){const B=f?.year()||0,De=f?.month()||0,fe=V.year(),Ue=V.month();D.value=B===fe&&De===Ue?V.add(1,fa):V}else D.value=x.value.add(1,fa),V&&(D.value=D.value.hour(V.hour()).minute(V.minute()).second(V.second()))}const l=L();function R(){return Array.from(l.value?.querySelectorAll("td.available[data-date]")??[])}function W(f){const V=f.target.closest("td[data-date]");if(!V)return;if(f.key==="Enter"||f.key===" "){f.preventDefault(),V.click();return}if(!nn.includes(f.key))return;const B=R(),De=ln({current:V.dataset.date,key:f.key,enabledDates:new Set(B.map(({dataset:fe})=>fe.date))});De&&(f.preventDefault(),B.find(({dataset:fe})=>fe.date===De)?.focus())}function ue(){(l.value?.querySelector(`.${T.e("shortcut")}, td.available[data-date][tabindex="0"]`)??R()[0])?.focus()}return a("set-picker-option",["handleFocusPicker",ue]),a("set-picker-option",["isValidValue",X]),a("set-picker-option",["parseUserInput",va]),a("set-picker-option",["formatToString",Aa]),a("set-picker-option",["handleClear",pa]),(f,V)=>(G(),K("div",{ref_key:"panelRef",ref:l,class:y([e(T).b(),e(c).b(),{"has-sidebar":f.$slots.sidebar||J.value,"has-time":Ee.value}])},[H("div",{class:y(e(T).e("body-wrapper"))},[le(f.$slots,"sidebar",{class:y(e(T).e("sidebar"))}),J.value?(G(),K("div",{key:0,class:y(e(T).e("sidebar"))},[(G(!0),K(Pe,null,Ye(S.value,(B,De)=>(G(),K("button",{key:De,type:"button",class:y([e(T).e("shortcut"),{active:m(B)}]),"aria-pressed":m(B),onClick:fe=>e(M)(B)},de(B.text),11,Fn))),128))],2)):ie("",!0),H("div",{class:y(e(T).e("body"))},[Ee.value?(G(),K("div",{key:0,class:y(e(c).e("time-header"))},[H("span",{class:y(e(c).e("editors-wrap"))},[H("span",{class:y(e(c).e("time-picker-wrap"))},[Z(e(ta),{disabled:e(A).selecting,placeholder:e(g)("el.datepicker.startDate"),class:y(e(c).e("editor")),"model-value":C.value,"validate-event":!1,onInput:V[0]||(V[0]=B=>ca(B,"min")),onChange:V[1]||(V[1]=B=>da(B,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),Ce((G(),K("span",{class:y(e(c).e("time-picker-wrap"))},[Z(e(ta),{class:y(e(c).e("editor")),disabled:e(A).selecting,placeholder:e(g)("el.datepicker.startTime"),"model-value":z.value,"validate-event":!1,onFocus:V[2]||(V[2]=B=>Ne.value=!0),onInput:V[3]||(V[3]=B=>ua(B,"min")),onChange:V[4]||(V[4]=B=>ma(B,"min"))},null,8,["class","disabled","placeholder","model-value"]),Z(e(Na),{visible:Ne.value,format:O.value,"datetime-role":"start","parsed-value":x.value,onPick:la},null,8,["visible","format","parsed-value"])],2)),[[e(Ia),Ta]])],2),H("span",null,[Z(e(ce),{name:"solid chevron-right"})]),H("span",{class:y([e(c).e("editors-wrap"),"is-right"])},[H("span",{class:y(e(c).e("time-picker-wrap"))},[Z(e(ta),{class:y(e(c).e("editor")),disabled:e(A).selecting,placeholder:e(g)("el.datepicker.endDate"),"model-value":p.value,readonly:!e(v),"validate-event":!1,onInput:V[5]||(V[5]=B=>ca(B,"max")),onChange:V[6]||(V[6]=B=>da(B,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),Ce((G(),K("span",{class:y(e(c).e("time-picker-wrap"))},[Z(e(ta),{class:y(e(c).e("editor")),disabled:e(A).selecting,placeholder:e(g)("el.datepicker.endTime"),"model-value":ae.value,readonly:!e(v),"validate-event":!1,onFocus:V[7]||(V[7]=B=>e(v)&&(Oe.value=!0)),onInput:V[8]||(V[8]=B=>ua(B,"max")),onChange:V[9]||(V[9]=B=>ma(B,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),Z(e(Na),{"datetime-role":"end",visible:Oe.value,format:O.value,"parsed-value":D.value,onPick:qe},null,8,["visible","format","parsed-value"])],2)),[[e(Ia),Fa]])],2)],2)):ie("",!0),H("div",{class:y([[e(T).e("content"),e(c).e("content")],"is-left"]),onKeydown:W},[H("div",{class:y(e(c).e("header"))},[H("button",{type:"button",class:y([e(T).e("icon-btn"),"arrow-left"]),"aria-label":e(g)("el.datepicker.prevMonth"),onClick:ee},[le(f.$slots,"prev-month",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],10,An),f.unlinkPanels?(G(),K("button",{key:0,type:"button",disabled:!ke.value,class:y([[e(T).e("icon-btn"),{"is-disabled":!ke.value}],"d-arrow-right"]),"aria-label":e(g)("el.datepicker.nextYear"),onClick:Xe},[le(f.$slots,"next-year",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],10,$n)):ie("",!0),f.unlinkPanels?(G(),K("button",{key:1,type:"button",disabled:!ve.value,class:y([[e(T).e("icon-btn"),{"is-disabled":!ve.value}],"arrow-right"]),"aria-label":e(g)("el.datepicker.nextMonth"),onClick:ea},[le(f.$slots,"next-month",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],10,Ln)):ie("",!0),H("div",Nn,de(N.value),1)],2),Z(ja,{"selection-mode":"range",date:x.value,"min-date":e(v),"max-date":e(i),"range-state":e(A),"disabled-date":e(o),"cell-class-name":e(s),onChangerange:e(F),onPick:Le,onSelect:e(E)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],34),H("div",{class:y([[e(T).e("content"),e(c).e("content")],"is-right"]),onKeydown:W},[H("div",{class:y(e(c).e("header"))},[f.unlinkPanels?(G(),K("button",{key:0,type:"button",disabled:!ke.value,class:y([[e(T).e("icon-btn"),{"is-disabled":!ke.value}],"d-arrow-left"]),"aria-label":e(g)("el.datepicker.prevYear"),onClick:ze},[le(f.$slots,"prev-year",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],10,In)):ie("",!0),f.unlinkPanels?(G(),K("button",{key:1,type:"button",disabled:!ve.value,class:y([[e(T).e("icon-btn"),{"is-disabled":!ve.value}],"arrow-left"]),"aria-label":e(g)("el.datepicker.prevMonth"),onClick:Ge},[le(f.$slots,"prev-month",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],10,Bn)):ie("",!0),H("button",{type:"button",class:y([e(T).e("icon-btn"),"arrow-right"]),"aria-label":e(g)("el.datepicker.nextMonth"),onClick:ge},[le(f.$slots,"next-month",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],10,Hn),H("div",jn,de(Q.value),1)],2),Z(ja,{"selection-mode":"range",date:D.value,"min-date":e(v),"max-date":e(i),"range-state":e(A),"disabled-date":e(o),"cell-class-name":e(s),onChangerange:e(F),onPick:Le,onSelect:e(E)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],34)],2)],2),Ee.value?(G(),K("div",{key:0,class:y(e(T).e("footer"))},[e(h)?(G(),Ra(e(nt),{key:0,text:"",size:"sm",class:y(e(T).e("link-btn")),onClick:pa},{default:at(()=>[tt(de(e(g)("el.datepicker.clear")),1)]),_:1},8,["class"])):ie("",!0),Z(e(nt),{plain:"",size:"sm",class:y(e(T).e("link-btn")),disabled:$e.value,onClick:V[10]||(V[10]=B=>e(k)(!1))},{default:at(()=>[tt(de(e(g)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):ie("",!0)],2))}}),Gn=Me({...Ka}),qn=["pick","set-picker-option","calendar-change"],Un=({unlinkPanels:n,leftDate:d,rightDate:r})=>{const{t:a}=Ve(),t=()=>{d.value=d.value.subtract(1,"year"),n.value||(r.value=r.value.subtract(1,"year"))},o=()=>{n.value||(d.value=d.value.add(1,"year")),r.value=r.value.add(1,"year")},s=()=>{d.value=d.value.add(1,"year")},u=()=>{r.value=r.value.subtract(1,"year")},h=I(()=>`${d.value.year()} ${a("el.datepicker.year")}`),P=I(()=>`${r.value.year()} ${a("el.datepicker.year")}`),S=I(()=>d.value.year()),b=I(()=>r.value.year()===d.value.year()?d.value.year()+1:r.value.year());return{leftPrevYear:t,rightNextYear:o,leftNextYear:s,rightPrevYear:u,leftLabel:h,rightLabel:P,leftYear:S,rightYear:b}},Wn=["onClick"],Kn=["disabled"],Jn=["disabled"],ha="year",Qn=Fe({name:"DatePickerMonthRange",__name:"panel-month-range",props:Gn,emits:qn,setup(n,{emit:d}){const r=n,a=d,{lang:t}=Ve(L(Ze)),o=Ke("EP_PICKER_BASE"),{shortcuts:s,disabledDate:u}=o.props,h=Re(o.props,"format"),P=Re(o.props,"defaultValue"),S=L(_().locale(t.value)),b=L(_().locale(t.value).add(1,ha)),{minDate:Y,maxDate:x,rangeState:D,ppNs:v,drpNs:i,handleChangeRange:A,handleRangeConfirm:T,handleShortcutClick:c,onSelect:F}=Dt(r,{defaultValue:P,leftDate:S,rightDate:b,unit:ha,onParsedValueChanged:m}),k=I(()=>!!s.length),{leftPrevYear:M,rightNextYear:E,leftNextYear:w,rightPrevYear:g,leftLabel:j,rightLabel:$,leftYear:N,rightYear:Q}=Un({unlinkPanels:Re(r,"unlinkPanels"),leftDate:S,rightDate:b}),q=I(()=>r.unlinkPanels&&Q.value>N.value+1),re=(C,p=!0)=>{const z=C.minDate,ae=C.maxDate;x.value===ae&&Y.value===z||(a("calendar-change",[z.toDate(),ae&&ae.toDate()]),x.value=ae,Y.value=z,ae?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[z?z.format(h.value):"",""]]),p&&T())},te=()=>{S.value=Qa(e(P),{lang:e(t),unit:"year",unlinkPanels:r.unlinkPanels})[0],b.value=S.value.add(1,"year"),a("pick",null)},oe=C=>me(C)?C.map(p=>p.format(h.value)):C.format(h.value),J=C=>me(C)?C.map(p=>_(p,h.value).locale(t.value)):_(C,h.value).locale(t.value);function m(C,p){if(r.unlinkPanels&&p){const z=C?.year()||0,ae=p.year();b.value=z===ae?p.add(1,ha):p}else b.value=S.value.add(1,ha)}return a("set-picker-option",["isValidValue",ra]),a("set-picker-option",["formatToString",oe]),a("set-picker-option",["parseUserInput",J]),a("set-picker-option",["handleClear",te]),(C,p)=>(G(),K("div",{class:y([e(v).b(),e(i).b(),{"has-sidebar":!!C.$slots.sidebar||k.value}])},[H("div",{class:y(e(v).e("body-wrapper"))},[le(C.$slots,"sidebar",{class:y(e(v).e("sidebar"))}),k.value?(G(),K("div",{key:0,class:y(e(v).e("sidebar"))},[(G(!0),K(Pe,null,Ye(e(s),(z,ae)=>(G(),K("button",{key:ae,type:"button",class:y(e(v).e("shortcut")),onClick:O=>e(c)(z)},de(z.text),11,Wn))),128))],2)):ie("",!0),H("div",{class:y(e(v).e("body"))},[H("div",{class:y([[e(v).e("content"),e(i).e("content")],"is-left"])},[H("div",{class:y(e(i).e("header"))},[H("button",{type:"button",class:y([e(v).e("icon-btn"),"d-arrow-left"]),onClick:p[0]||(p[0]=(...z)=>e(M)&&e(M)(...z))},[le(C.$slots,"prev-year",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],2),C.unlinkPanels?(G(),K("button",{key:0,type:"button",disabled:!q.value,class:y([[e(v).e("icon-btn"),{[e(v).is("disabled")]:!q.value}],"d-arrow-right"]),onClick:p[1]||(p[1]=(...z)=>e(w)&&e(w)(...z))},[le(C.$slots,"next-year",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],10,Kn)):ie("",!0),H("div",null,de(e(j)),1)],2),Z(za,{"selection-mode":"range",date:S.value,"min-date":e(Y),"max-date":e(x),"range-state":e(D),"disabled-date":e(u),onChangerange:e(A),onPick:re,onSelect:e(F)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),H("div",{class:y([[e(v).e("content"),e(i).e("content")],"is-right"])},[H("div",{class:y(e(i).e("header"))},[C.unlinkPanels?(G(),K("button",{key:0,type:"button",disabled:!q.value,class:y([[e(v).e("icon-btn"),{"is-disabled":!q.value}],"d-arrow-left"]),onClick:p[2]||(p[2]=(...z)=>e(g)&&e(g)(...z))},[le(C.$slots,"prev-year",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],10,Jn)):ie("",!0),H("button",{type:"button",class:y([e(v).e("icon-btn"),"d-arrow-right"]),onClick:p[3]||(p[3]=(...z)=>e(E)&&e(E)(...z))},[le(C.$slots,"next-year",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],2),H("div",null,de(e($)),1)],2),Z(za,{"selection-mode":"range",date:b.value,"min-date":e(Y),"max-date":e(x),"range-state":e(D),"disabled-date":e(u),onChangerange:e(A),onPick:re,onSelect:e(F)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}}),Zn=Me({...Ka}),Xn=["pick","set-picker-option","calendar-change"],er=({unlinkPanels:n,leftDate:d,rightDate:r})=>{const a=()=>{d.value=d.value.subtract(10,"year"),n.value||(r.value=r.value.subtract(10,"year"))},t=()=>{n.value||(d.value=d.value.add(10,"year")),r.value=r.value.add(10,"year")},o=()=>{d.value=d.value.add(10,"year")},s=()=>{r.value=r.value.subtract(10,"year")},u=I(()=>{const b=Math.floor(d.value.year()/10)*10;return`${b}-${b+9}`}),h=I(()=>{const b=Math.floor(r.value.year()/10)*10;return`${b}-${b+9}`}),P=I(()=>Math.floor(d.value.year()/10)*10+9),S=I(()=>Math.floor(r.value.year()/10)*10);return{leftPrevYear:a,rightNextYear:t,leftNextYear:o,rightPrevYear:s,leftLabel:u,rightLabel:h,leftYear:P,rightYear:S}},ar=["onClick"],tr=["disabled"],nr=["disabled"],lt="year",rr=Fe({name:"DatePickerYearRange",__name:"panel-year-range",props:Zn,emits:Xn,setup(n,{emit:d}){const r=n,a=d,{lang:t}=Ve(L(Ze)),o=L(_().locale(t.value)),s=L(o.value.add(10,"year")),{pickerNs:u}=Ke(Ua),h=Te("date-range-picker"),P=I(()=>!!re.length),S=I(()=>[u.b(),h.b(),{"has-sidebar":!!qa().sidebar||P.value}]),b=I(()=>({content:[u.e("content"),h.e("content"),"is-left"],arrowLeftBtn:[u.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[u.e("icon-btn"),{[u.is("disabled")]:!M.value},"d-arrow-right"]})),Y=I(()=>({content:[u.e("content"),h.e("content"),"is-right"],arrowLeftBtn:[u.e("icon-btn"),{"is-disabled":!M.value},"d-arrow-left"],arrowRightBtn:[u.e("icon-btn"),"d-arrow-right"]})),x=wt(t),{leftPrevYear:D,rightNextYear:v,leftNextYear:i,rightPrevYear:A,leftLabel:T,rightLabel:c,leftYear:F,rightYear:k}=er({unlinkPanels:Re(r,"unlinkPanels"),leftDate:o,rightDate:s}),M=I(()=>r.unlinkPanels&&k.value>F.value+1),E=L(),w=L(),g=L({endDate:null,selecting:!1}),j=O=>{g.value=O},$=(O,U=!0)=>{const X=O.minDate,ee=O.maxDate;w.value===ee&&E.value===X||(a("calendar-change",[X.toDate(),ee&&ee.toDate()]),w.value=ee,E.value=X,ee?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[X?X.format(oe.value):"",""]]),U&&N())},N=(O=!1)=>{ra([E.value,w.value])&&a("pick",[E.value,w.value],O)},Q=O=>{g.value.selecting=O,O||(g.value.endDate=null)},q=Ke("EP_PICKER_BASE"),{shortcuts:re,disabledDate:te}=q.props,oe=Re(q.props,"format"),J=Re(q.props,"defaultValue"),m=()=>{let O;const U=J.value;if(me(U)){const X=_(U[0]);let ee=_(U[1]);return r.unlinkPanels||(ee=X.add(10,lt)),[X,ee]}else U?O=_(U):O=_();return O=O.locale(t.value),[O,O.add(10,lt)]};Se(()=>J.value,O=>{if(O){const U=m();o.value=U[0],s.value=U[1]}},{immediate:!0}),Se(()=>r.parsedValue,O=>{if(O&&O.length===2)if(E.value=O[0],w.value=O[1],o.value=E.value,r.unlinkPanels&&w.value){const U=E.value.year(),X=w.value.year();s.value=U===X?w.value.add(10,"year"):w.value}else s.value=o.value.add(10,"year");else{const U=m();E.value=void 0,w.value=void 0,o.value=U[0],s.value=U[1]}},{immediate:!0});const C=O=>me(O)?O.map(U=>_(U,oe.value).locale(t.value)):_(O,oe.value).locale(t.value),p=O=>me(O)?O.map(U=>U.format(oe.value)):O.format(oe.value),z=O=>ra(O)&&(te?!te(O[0].toDate())&&!te(O[1].toDate()):!0),ae=()=>{const O=m();o.value=O[0],s.value=O[1],w.value=void 0,E.value=void 0,a("pick",null)};return a("set-picker-option",["isValidValue",z]),a("set-picker-option",["parseUserInput",C]),a("set-picker-option",["formatToString",p]),a("set-picker-option",["handleClear",ae]),(O,U)=>(G(),K("div",{class:y(S.value)},[H("div",{class:y(e(u).e("body-wrapper"))},[le(O.$slots,"sidebar",{class:y(e(u).e("sidebar"))}),P.value?(G(),K("div",{key:0,class:y(e(u).e("sidebar"))},[(G(!0),K(Pe,null,Ye(e(re),(X,ee)=>(G(),K("button",{key:ee,type:"button",class:y(e(u).e("shortcut")),onClick:ge=>e(x)(X)},de(X.text),11,ar))),128))],2)):ie("",!0),H("div",{class:y(e(u).e("body"))},[H("div",{class:y(b.value.content)},[H("div",{class:y(e(h).e("header"))},[H("button",{type:"button",class:y(b.value.arrowLeftBtn),onClick:U[0]||(U[0]=(...X)=>e(D)&&e(D)(...X))},[le(O.$slots,"prev-year",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],2),O.unlinkPanels?(G(),K("button",{key:0,type:"button",disabled:!M.value,class:y(b.value.arrowRightBtn),onClick:U[1]||(U[1]=(...X)=>e(i)&&e(i)(...X))},[le(O.$slots,"next-year",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],10,tr)):ie("",!0),H("div",null,de(e(T)),1)],2),Z(Ga,{"selection-mode":"range",date:o.value,"min-date":E.value,"max-date":w.value,"range-state":g.value,"disabled-date":e(te),onChangerange:j,onPick:$,onSelect:Q},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),H("div",{class:y(Y.value.content)},[H("div",{class:y(e(h).e("header"))},[O.unlinkPanels?(G(),K("button",{key:0,type:"button",disabled:!M.value,class:y(Y.value.arrowLeftBtn),onClick:U[2]||(U[2]=(...X)=>e(A)&&e(A)(...X))},[le(O.$slots,"prev-year",{},()=>[Z(e(ce),{name:"solid chevron-left"})])],10,nr)):ie("",!0),H("button",{type:"button",class:y(Y.value.arrowRightBtn),onClick:U[3]||(U[3]=(...X)=>e(v)&&e(v)(...X))},[le(O.$slots,"next-year",{},()=>[Z(e(ce),{name:"solid chevron-right"})])],2),H("div",null,de(e(c)),1)],2),Z(Ga,{"selection-mode":"range",date:s.value,"min-date":E.value,"max-date":w.value,"range-state":g.value,"disabled-date":e(te),onChangerange:j,onPick:$,onSelect:Q},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}}),lr=function(n){switch(n){case"daterange":case"datetimerange":return zn;case"monthrange":return Qn;case"yearrange":return rr;default:return Vn}};_.extend(Bt);_.extend(Nt);_.extend($t);_.extend(jt);_.extend(Gt);_.extend(Ut);_.extend(Kt);_.extend(Qt);const or=Fe({name:"GDatePicker",install:null,props:Zt,emits:["update:modelValue"],setup(n,{expose:d,emit:r,slots:a}){const t=Te("picker-panel");et("ElPopperOptions",xt(Re(n,"popperOptions"))),et(Ua,{slots:a,pickerNs:t});const o=L();d({focus:()=>{o.value?.focus()},blur:()=>{o.value?.blur()},handleOpen:()=>{o.value?.handleOpen()},handleClose:()=>{o.value?.handleClose()}});const s=u=>{r("update:modelValue",u)};return()=>{const u=n.format??(Rt[n.type]||Pt),h=lr(n.type);return $a($a(Yt,{...n,format:u,type:n.type,ref:o,"onUpdate:modelValue":s},{default:P=>$a(h,{...P},{"prev-month":a["prev-month"],"next-month":a["next-month"],"prev-year":a["prev-year"],"next-year":a["next-year"]}),"range-separator":a["range-separator"]}))}}}),je=_t(or),sr="0.5.4",La={dayjs:"^1.11.13",vue:"^3.2.0"},{expect:se,screen:Pa,userEvent:pe,waitFor:Be,within:_a}=__STORYBOOK_MODULE_TEST__,Nr={title:"Form/Date Picker",component:je,parameters:{docs:{description:{component:`

El componente Date Picker está diseñado para gestionar la selección de fechas en formularios con flexibilidad y precisión. Ofrece funcionalidades completas, incluyendo selección simple, rangos de fechas y distintos modos de visualización (año, mes, día o fecha y hora). Es ideal para aplicaciones que requieren una interacción intuitiva y detallada con calendarios, asegurando una experiencia de usuario fluida sin sacrificar potencia o personalización.

> Versión actual: ${sr}

## Características
- Selección de fecha simple o en rangos
- Varios tipos de selectores: año, mes, fecha, fecha y hora
- Formato personalizable de visualización
- Soporte para deshabilitar fechas específicas
- Integración con Day.js para manejo de fechas
- Retroalimentación visual inmediata en modo rango: al seleccionar la fecha de inicio, esta se muestra en el input antes de elegir la fecha fin
- Personalización completa del popup
- **Hereda** gran parte de las props del componente \`GInput\`

### Instalación

\`\`\`bash
yarn add @flash-global66/g-date-picker
\`\`\`

### Importación del componente
\`\`\`typescript
# importar donde se va a utilizar
import { GDatePicker } from '@flash-global66/g-date-picker'

# recomendado importar en los estilos globales
import '@flash-global66/g-date-picker/style.scss'

// Opcional: Extender dayjs con plugins necesarios
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localeData from 'dayjs/plugin/localeData'
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)
dayjs.extend(localeData)
\`\`\`

## Dependencias
Se hicieron pruebas con las siguientes dependencias: Puede que funcione con otras versiones, pero no se garantiza.
${Tt(La)}

> Revisar la documentación de cada dependencia para mas información.

\`\`\`bash
# Dependencias global66
yarn add ${rt(La)}

# Dependencias externas
yarn add ${rt(La,!0)}
\`\`\`

### Ejemplo de uso

\`\`\`ts
<script setup lang="ts">
import { GDatePicker } from '@flash-global66/g-date-picker';
<\/script>

<template>
  <g-date-picker    
    :picker="true"
    :clearable="true"
    endPlaceholder="Fecha fin"
    format="YYYY-MM-DD"
    label="Seleccione fecha"
    rangeSeparator="-"
    :shortcuts="shortcuts"
    startPlaceholder="Fecha inicio"
  />
</template>
\`\`\`
`}}},argTypes:{modelValue:{name:"v-model",description:"Valor seleccionado (v-model)",control:{type:void 0},table:{category:"Enlace de Datos",type:{summary:"string | Date | number | [string, string] | [Date, Date] | [number, number] | null"}}},type:{description:"Tipo del selector",control:"select",options:["date","year","month","datetime","daterange","monthrange","yearrange"],table:{category:"Comportamiento e Interacción",type:{summary:"string"},defaultValue:{summary:"date"}}},clearable:{description:"Permite limpiar el valor seleccionado",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"true"}}},editable:{description:"Permite edición directa en el input",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"true"}}},openOnInputClick:{name:"open-on-input-click",description:"En modo rango, el clic en cualquiera de los dos inputs también abre el panel; el ícono siempre lo abre",control:"boolean",table:{category:"Comportamiento e Interacción",type:{summary:"boolean"},defaultValue:{summary:"false"}}},prefixIcon:{name:"prefix-icon",description:"Ícono al inicio del input",control:"select",options:["",...Vt()],table:{category:"Apariencia y Estilos",type:{summary:"string | Component"},defaultValue:{summary:""}}},popperClass:{name:"popper-class",description:"Clase CSS personalizada para el popup",control:"text",table:{category:"Apariencia y Estilos",type:{summary:"string"},defaultValue:{summary:"''"}}},placement:{description:"Posición del popup",control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end"],table:{category:"Apariencia y Estilos",type:{summary:"string"},defaultValue:{summary:"bottom"}}},format:{description:"Formato de visualización en el input",control:"text",table:{category:"Formato de Fecha",type:{summary:"string"},defaultValue:{summary:"YYYY-MM-DD"}}},valueFormat:{name:"value-format",description:"Formato del valor vinculado (v-model)",control:"text",table:{category:"Formato de Fecha",type:{summary:"string"}}},dateFormat:{name:"date-format",description:"Formato de fecha en el popup",control:"text",table:{category:"Formato de Fecha",type:{summary:"string"}}},timeFormat:{name:"time-format",description:"Formato de hora en el popup (si aplica)",control:"text",table:{category:"Formato de Fecha",type:{summary:"string"}}},label:{description:"Label en modo simple",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"},defaultValue:{summary:""}}},startPlaceholder:{description:"Placeholder para la fecha de inicio en modo rango",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"}}},endPlaceholder:{description:"Placeholder para la fecha de fin en modo rango",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"}}},rangeSeparator:{description:"Separador para el rango de fechas",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"},defaultValue:{summary:"-"}}},helpText:{description:"Texto de apoyo",control:"text",table:{category:"Etiquetas y Texto",type:{summary:"string"},defaultValue:{summary:""}}},disabled:{description:"Deshabilita el componente",control:"boolean",table:{category:"Validación y Restricciones",type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{description:"Hace el componente de solo lectura",control:"boolean",table:{category:"Validación y Restricciones",type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabledDate:{name:"disabled-date",description:"Función para deshabilitar fechas específicas",control:"function",table:{category:"Validación y Restricciones",type:{summary:"(date: Date) => boolean"}}},focus:{description:"Enfoca el input del date picker",table:{category:"Métodos Expuestos",type:{summary:"() => void"}}},blur:{description:"Quita el foco del input",table:{category:"Métodos Expuestos",type:{summary:"() => void"}}},handleOpen:{description:"Abre el popup del date picker",table:{category:"Métodos Expuestos",type:{summary:"() => void"}}},handleClose:{description:"Cierra el popup del date picker",table:{category:"Métodos Expuestos",type:{summary:"() => void"}}},onChange:{description:"Se dispara cuando el usuario confirma un cambio",table:{category:"Eventos",type:{summary:"(value: Date | string | number | [Date | null, Date | null] | [string | null, string | null] | [number | null, number | null] | null) => void"}}},onBlur:{description:"Se dispara cuando el input pierde el foco",table:{category:"Eventos",type:{summary:"(event: FocusEvent) => void"}}},onFocus:{description:"Se dispara cuando el input recibe el foco",table:{category:"Eventos",type:{summary:"(event: FocusEvent) => void"}}},onVisibleChange:{description:"Se dispara cuando la visibilidad del popup cambia",table:{category:"Eventos",type:{summary:"(visible: boolean) => void"}}},onClear:{description:"Se dispara cuando se limpia el valor",table:{category:"Eventos",type:{summary:"() => void"}}}},args:{label:"Seleccione fecha",format:"YYYY-MM-DD",startPlaceholder:"Fecha inicio",endPlaceholder:"Fecha fin",rangeSeparator:"-",clearable:!0,shortcuts:[{text:"Hoy",value:new Date},{text:"Mañana",value:()=>{const n=new Date;return n.setTime(n.getTime()-3600*1e3*24),n}},{text:"Una semana atrás",value:()=>{const n=new Date;return n.setTime(n.getTime()-3600*1e3*24*7),n}}]}},Xa=[{text:"Última semana",value:()=>[_().subtract(1,"week").toDate(),_().toDate()]},{text:"Último mes",value:()=>[_().subtract(1,"month").toDate(),_().toDate()]},{text:"Últimos 3 meses",value:()=>[_().subtract(3,"month").toDate(),_().toDate()]}];function Va(n=[]){return()=>({components:{GDatePicker:je,GConfigProvider:Je},setup(){return{value:L([]),lang:Qe,shortcuts:n}},template:`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="daterange"
            aria-label="Rango de fechas"
            open-on-input-click
            :shortcuts="shortcuts"
            start-placeholder="Inicio"
            end-placeholder="Fin"
            range-separator="-"
            format="DD-MM-YYYY"
            value-format="YYYY-MM-DD"
            prefix-icon="regular calendar"
          />
          <div>Rango seleccionado: {{ value }}</div>
        </div>
      </g-config-provider>
    `})}const ya={name:"Básico",render:n=>({components:{GDatePicker:je,GConfigProvider:Je},setup(){return{value:L(""),args:n,lang:Qe}},template:`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker v-bind="args" v-model="value"/>
        </div>

      </g-config-provider>
    `})},ga={name:"Modo Rango",parameters:{docs:{description:{story:"Selector de rango de fechas que permite seleccionar un intervalo de días.\n\n- Selección de fecha inicial y final con retroalimentación visual inmediata: al elegir la fecha de inicio, esta se muestra en el input correspondiente mientras la fecha fin permanece vacía hasta ser seleccionada\n- Placeholders personalizados para cada input\n- Separador personalizable\n- Este comportamiento es consistente en todos los modos de rango: `daterange`, `monthrange` y `yearrange`"}}},render:()=>({components:{GDatePicker:je,GConfigProvider:Je},setup(){return{value:L([]),lang:Qe}},template:`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="Fecha inicio"
            end-placeholder="Fecha fin"
            label="Seleccione rango"
            range-separator="|"
            format="YYYY-MM-DD"
          />
          <div>Rango seleccionado: {{ value }}</div>
        </div>
      </g-config-provider>
    `})},ba={name:"Rango con atajos y apertura desde inputs",play:async({canvasElement:n})=>{const r=await _a(n).findByPlaceholderText("Inicio");await pe.click(r);const a=await Pa.findByRole("button",{name:"Última semana"});await se(a).toHaveAttribute("aria-pressed","false"),await pe.click(a),await Be(()=>se(r).toHaveAttribute("aria-expanded","false")),await pe.click(r);const t=await Pa.findByRole("button",{name:"Última semana"});await se(t).toHaveAttribute("aria-pressed","true"),await se(Pa.getByRole("button",{name:"Último mes"})).toHaveAttribute("aria-pressed","false"),await pe.click(document.body.querySelector("td.available[data-date]")),await Be(()=>se(t).toHaveAttribute("aria-pressed","false"))},parameters:{docs:{description:{story:"Con `open-on-input-click` el panel se abre al hacer clic en cualquiera de los dos inputs, además del icono. Por defecto está apagado.\n\n- Hasta 780 px de ancho el panel ocupa el ancho disponible, apila los meses y muestra los atajos como chips arriba\n- El atajo cuyo rango coincide con la selección expone `aria-pressed` y deja de hacerlo al elegir otras fechas; hasta 780 px además se rellena con el color primario\n\n### Teclado\n\nEl rango se puede completar sin mouse y el foco es visible en todo momento.\n\n| Tecla | Acción |\n| --- | --- |\n| `Tab` | Pasa del input de inicio al de fin; con `open-on-input-click`, desde el de fin entra al panel |\n| `↓` | Desde el input, enfoca el panel |\n| `←` `→` `↑` `↓` | Mueven el foco entre los días del panel |\n| `Enter` o `Espacio` | Eligen el día enfocado |\n| `Esc` | Cierra el panel |\n\nLos días, los atajos y las flechas de mes muestran un anillo de foco visible.\n\n### Movimiento reducido\n\nCuando el sistema pide movimiento reducido (`prefers-reduced-motion: reduce`) el panel se abre y se cierra sin transición. Para comprobarlo, activa **Reducir movimiento** en el sistema operativo o usa **Emulate CSS media feature prefers-reduced-motion** en el panel **Rendering** de las DevTools. Con el ajuste apagado, el panel conserva la animación de entrada."}}},render:Va(Xa)},ka={name:"Rango en pantallas pequeñas",parameters:{docs:{description:{story:`Hasta 780 px de ancho el panel de rango deja de ser de escritorio (756 px) y se adapta al espacio libre de la pantalla.

- Los meses se apilan y los atajos se muestran como chips arriba
- El panel queda dentro del viewport, sin desbordar horizontalmente
- Para verlo, abre la pestaña **Canvas** de esta historia: se carga con el viewport de 390 px`}},viewport:{options:{mobile390:{name:"Móvil 390 px",styles:{width:"390px",height:"844px"},type:"mobile"}}}},globals:{viewport:{value:"mobile390",isRotated:!1}},render:Va(Xa.slice(0,2))},wa={name:"Rango con teclado",play:async({canvasElement:n})=>{const d=_a(n),r=await d.findByPlaceholderText("Inicio"),a=await d.findByPlaceholderText("Fin");await pe.click(r);const t=await Pa.findByRole("button",{name:"Última semana"});await pe.tab(),await se(a).toHaveFocus(),await pe.tab(),await se(t).toHaveFocus();const o=Array.from(document.body.querySelectorAll("td.available[data-date]")),[s,u]=[o[10],o[11]];s.focus(),await pe.keyboard("{ArrowRight}"),await se(document.activeElement).toHaveAttribute("data-date",u.dataset.date),await pe.keyboard("{Enter}"),await Be(()=>se(r).not.toHaveValue("")),await pe.keyboard("{ArrowRight}"),await pe.keyboard("{Enter}"),await Be(()=>se(r).toHaveAttribute("aria-expanded","false")),await Be(()=>se(document.activeElement).toHaveAttribute("role","combobox")),await new Promise(h=>setTimeout(h,400)),await se(r).toHaveAttribute("aria-expanded","false"),await se(document.activeElement).toHaveAttribute("role","combobox"),await pe.click(r),await Be(()=>se(r).toHaveAttribute("aria-expanded","true")),document.body.querySelector("td.available[data-date]")?.focus(),await pe.keyboard("{Escape}"),await Be(()=>se(r).toHaveAttribute("aria-expanded","false")),await se(document.activeElement).toHaveAttribute("role","combobox")},tags:["!dev","!autodocs"],render:Va(Xa)},Da={name:"Rango con movimiento reducido",play:async({canvasElement:n})=>{const d=_a(n);await pe.click(await d.findByPlaceholderText("Inicio"));const r=await Be(()=>{const s=document.body.querySelector('[class*="picker__popper"]');if(!s)throw new Error("el panel todavía no se montó");return s}),a=s=>{try{return Array.from(s.cssRules)}catch{return[]}},o=Array.from(document.styleSheets).flatMap(s=>a(s).filter(u=>u instanceof CSSMediaRule&&u.conditionText.includes("prefers-reduced-motion")).flatMap(u=>Array.from(u.cssRules)).filter(u=>u instanceof CSSStyleRule).flatMap(u=>u.selectorText.split(","))).filter(s=>s.includes("picker__popper"));await se(o.length).toBeGreaterThan(0);for(const s of o){const u=s.trim().replace(/\.[\w-]+-(enter|leave)-active$/,"");await se(r.matches(u)).toBe(!0)}},tags:["!dev","!autodocs"],render:Va()},xa={name:"Rango en un contenedor angosto",play:async({canvasElement:n})=>{await _a(n).findByPlaceholderText("Inicio");const r=n.querySelector('[data-test="narrow-container"]'),a=n.querySelector(".gui-date-editor--daterange");if(!r||!a)throw new Error("falta el contenedor o el campo");await se(a.getBoundingClientRect().right).toBeLessThanOrEqual(r.getBoundingClientRect().right),await se(Math.round(a.getBoundingClientRect().width)).toBe(Math.round(r.getBoundingClientRect().width))},tags:["!dev","!autodocs"],render:()=>({components:{GDatePicker:je,GConfigProvider:Je},setup(){return{value:L([]),lang:Qe}},template:`
      <g-config-provider :locale="lang">
        <div data-test="narrow-container" style="width: 320px">
          <g-date-picker
            v-model="value"
            type="daterange"
            aria-label="Rango de fechas"
            start-placeholder="Inicio"
            end-placeholder="Fin"
            range-separator="-"
            format="DD-MM-YYYY"
            value-format="YYYY-MM-DD"
            prefix-icon="regular calendar"
          />
        </div>
      </g-config-provider>
    `})},Sa={name:"Fecha y Hora",parameters:{docs:{description:{story:"Selector de fecha y hora combinado."}}},render:()=>({components:{GDatePicker:je,GConfigProvider:Je},setup(){return{value:L(new Date),lang:Qe}},template:`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="datetime"
            label="Seleccione fecha y hora"
            format="YYYY-MM-DD HH:mm:ss"
          />
          <div>Fecha y hora seleccionada: {{ value }}</div>
        </div>
      </g-config-provider>
    `})},Ma={name:"Fechas Deshabilitadas",parameters:{docs:{description:{story:"Ejemplo de cómo deshabilitar fechas específicas utilizando la prop `disabled-date`."}}},render:()=>({components:{GDatePicker:je,GConfigProvider:Je},setup(){return{value:L(""),disabledDate:a=>a.getTime()>Date.now(),lang:Qe}},template:`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            label="Seleccione fecha"
            :disabled-date="disabledDate"
          />
          <div class="text-sm text-gray-500">
            <p>Las fechas futuras están deshabilitadas.</p>
          </div>
        </div>
      </g-config-provider>
    `})},Ca={name:"Diferentes Tipos",parameters:{docs:{description:{story:"Muestra los diferentes tipos de selectores de fecha disponibles."}}},render:()=>({components:{GDatePicker:je,GConfigProvider:Je},setup(){const n=L(""),d=L(""),r=L(""),a=L([]),t=L([]),o=L([]),s=L(new Date);return{dateValue:n,yearValue:d,monthValue:r,dateRangeValue:a,monthRangeValue:t,yearRangeValue:o,dateTimeValue:s,lang:Qe}},template:`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker v-model="dateValue" label="Date" type="date"/>
          <g-date-picker v-model="yearValue" label="Year" type="year" />
          <g-date-picker v-model="monthValue" label="Month" type="month" />
          <g-date-picker v-model="dateRangeValue" label="Date Range" type="daterange" />
          <g-date-picker v-model="monthRangeValue" label="Month Range" type="monthrange" />
          <g-date-picker v-model="yearRangeValue" label="Year Range" type="yearrange" />
          <g-date-picker v-model="dateTimeValue" label="DateTime" type="datetime" format="YYYY-MM-DD HH:mm:ss" messageError="Agregar fecha"/>
        </div>
      </g-config-provider>
    `})},Ir=["Basic","Range","RangeWithShortcutsOpenOnInput","RangeResponsive","RangeKeyboard","RangeReducedMotion","RangeNarrowContainer","DateTime","DisabledDates","DifferentTypes"];ya.parameters={...ya.parameters,docs:{...ya.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  render: args => ({
    components: {
      GDatePicker,
      GConfigProvider
    },
    setup() {
      const value = ref('');
      const lang = es;
      return {
        value,
        args,
        lang
      };
    },
    template: \`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker v-bind="args" v-model="value"/>
        </div>

      </g-config-provider>
    \`
  })
}`,...ya.parameters?.docs?.source}}};ga.parameters={...ga.parameters,docs:{...ga.parameters?.docs,source:{originalSource:`{
  name: 'Modo Rango',
  parameters: {
    docs: {
      description: {
        story: \`Selector de rango de fechas que permite seleccionar un intervalo de días.

- Selección de fecha inicial y final con retroalimentación visual inmediata: al elegir la fecha de inicio, esta se muestra en el input correspondiente mientras la fecha fin permanece vacía hasta ser seleccionada
- Placeholders personalizados para cada input
- Separador personalizable
- Este comportamiento es consistente en todos los modos de rango: \\\`daterange\\\`, \\\`monthrange\\\` y \\\`yearrange\\\`\`
      }
    }
  },
  render: () => ({
    components: {
      GDatePicker,
      GConfigProvider
    },
    setup() {
      const value = ref([]);
      const lang = es;
      return {
        value,
        lang
      };
    },
    template: \`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="daterange"
            start-placeholder="Fecha inicio"
            end-placeholder="Fecha fin"
            label="Seleccione rango"
            range-separator="|"
            format="YYYY-MM-DD"
          />
          <div>Rango seleccionado: {{ value }}</div>
        </div>
      </g-config-provider>
    \`
  })
}`,...ga.parameters?.docs?.source}}};ba.parameters={...ba.parameters,docs:{...ba.parameters?.docs,source:{originalSource:`{
  name: 'Rango con atajos y apertura desde inputs',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const start = await canvas.findByPlaceholderText('Inicio');
    await userEvent.click(start);
    const shortcut = await screen.findByRole('button', {
      name: 'Última semana'
    });
    await expect(shortcut).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(shortcut);
    await waitFor(() => expect(start).toHaveAttribute('aria-expanded', 'false'));
    await userEvent.click(start);
    const reopened = await screen.findByRole('button', {
      name: 'Última semana'
    });
    await expect(reopened).toHaveAttribute('aria-pressed', 'true');
    await expect(screen.getByRole('button', {
      name: 'Último mes'
    })).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(document.body.querySelector('td.available[data-date]') as HTMLElement);
    await waitFor(() => expect(reopened).toHaveAttribute('aria-pressed', 'false'));
  },
  parameters: {
    docs: {
      description: {
        story: \`Con \\\`open-on-input-click\\\` el panel se abre al hacer clic en cualquiera de los dos inputs, además del icono. Por defecto está apagado.

- Hasta 780 px de ancho el panel ocupa el ancho disponible, apila los meses y muestra los atajos como chips arriba
- El atajo cuyo rango coincide con la selección expone \\\`aria-pressed\\\` y deja de hacerlo al elegir otras fechas; hasta 780 px además se rellena con el color primario

### Teclado

El rango se puede completar sin mouse y el foco es visible en todo momento.

| Tecla | Acción |
| --- | --- |
| \\\`Tab\\\` | Pasa del input de inicio al de fin; con \\\`open-on-input-click\\\`, desde el de fin entra al panel |
| \\\`↓\\\` | Desde el input, enfoca el panel |
| \\\`←\\\` \\\`→\\\` \\\`↑\\\` \\\`↓\\\` | Mueven el foco entre los días del panel |
| \\\`Enter\\\` o \\\`Espacio\\\` | Eligen el día enfocado |
| \\\`Esc\\\` | Cierra el panel |

Los días, los atajos y las flechas de mes muestran un anillo de foco visible.

### Movimiento reducido

Cuando el sistema pide movimiento reducido (\\\`prefers-reduced-motion: reduce\\\`) el panel se abre y se cierra sin transición. Para comprobarlo, activa **Reducir movimiento** en el sistema operativo o usa **Emulate CSS media feature prefers-reduced-motion** en el panel **Rendering** de las DevTools. Con el ajuste apagado, el panel conserva la animación de entrada.\`
      }
    }
  },
  render: renderOpenOnInputRange(RANGE_SHORTCUTS)
}`,...ba.parameters?.docs?.source}}};ka.parameters={...ka.parameters,docs:{...ka.parameters?.docs,source:{originalSource:`{
  name: 'Rango en pantallas pequeñas',
  parameters: {
    docs: {
      description: {
        story: \`Hasta 780 px de ancho el panel de rango deja de ser de escritorio (756 px) y se adapta al espacio libre de la pantalla.

- Los meses se apilan y los atajos se muestran como chips arriba
- El panel queda dentro del viewport, sin desbordar horizontalmente
- Para verlo, abre la pestaña **Canvas** de esta historia: se carga con el viewport de 390 px\`
      }
    },
    viewport: {
      options: {
        mobile390: {
          name: 'Móvil 390 px',
          styles: {
            width: '390px',
            height: '844px'
          },
          type: 'mobile'
        }
      }
    }
  },
  globals: {
    viewport: {
      value: 'mobile390',
      isRotated: false
    }
  },
  render: renderOpenOnInputRange(RANGE_SHORTCUTS.slice(0, 2))
}`,...ka.parameters?.docs?.source}}};wa.parameters={...wa.parameters,docs:{...wa.parameters?.docs,source:{originalSource:`{
  name: 'Rango con teclado',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const start = await canvas.findByPlaceholderText('Inicio');
    const end = await canvas.findByPlaceholderText('Fin');
    await userEvent.click(start);
    const firstShortcut = await screen.findByRole('button', {
      name: 'Última semana'
    });
    await userEvent.tab();
    await expect(end).toHaveFocus();
    await userEvent.tab();
    await expect(firstShortcut).toHaveFocus();
    const cells = Array.from(document.body.querySelectorAll<HTMLElement>('td.available[data-date]'));
    const [cell, nextCell] = [cells[10], cells[11]];
    cell.focus();
    await userEvent.keyboard('{ArrowRight}');
    await expect(document.activeElement).toHaveAttribute('data-date', nextCell.dataset.date as string);
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(start).not.toHaveValue(''));
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(start).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(document.activeElement).toHaveAttribute('role', 'combobox'));
    await new Promise(resolve => setTimeout(resolve, 400));
    await expect(start).toHaveAttribute('aria-expanded', 'false');
    await expect(document.activeElement).toHaveAttribute('role', 'combobox');
    await userEvent.click(start);
    await waitFor(() => expect(start).toHaveAttribute('aria-expanded', 'true'));
    document.body.querySelector<HTMLElement>('td.available[data-date]')?.focus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(start).toHaveAttribute('aria-expanded', 'false'));
    await expect(document.activeElement).toHaveAttribute('role', 'combobox');
  },
  tags: ['!dev', '!autodocs'],
  render: renderOpenOnInputRange(RANGE_SHORTCUTS)
}`,...wa.parameters?.docs?.source}}};Da.parameters={...Da.parameters,docs:{...Da.parameters?.docs,source:{originalSource:`{
  name: 'Rango con movimiento reducido',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByPlaceholderText('Inicio'));
    const popper = await waitFor(() => {
      const element = document.body.querySelector<HTMLElement>('[class*="picker__popper"]');
      if (!element) throw new Error('el panel todavía no se montó');
      return element;
    });
    const readRules = (sheet: CSSStyleSheet): CSSRule[] => {
      try {
        return Array.from(sheet.cssRules);
      } catch {
        return [];
      }
    };
    const reducedMotionSelectors = Array.from(document.styleSheets).flatMap(sheet => readRules(sheet).filter((rule): rule is CSSMediaRule => rule instanceof CSSMediaRule && rule.conditionText.includes('prefers-reduced-motion')).flatMap(rule => Array.from(rule.cssRules)).filter((rule): rule is CSSStyleRule => rule instanceof CSSStyleRule).flatMap(rule => rule.selectorText.split(',')));
    const popperSelectors = reducedMotionSelectors.filter(selector => selector.includes('picker__popper'));
    await expect(popperSelectors.length).toBeGreaterThan(0);
    for (const selector of popperSelectors) {
      const baseSelector = selector.trim().replace(/\\.[\\w-]+-(enter|leave)-active$/, '');
      await expect(popper.matches(baseSelector)).toBe(true);
    }
  },
  tags: ['!dev', '!autodocs'],
  render: renderOpenOnInputRange()
}`,...Da.parameters?.docs?.source}}};xa.parameters={...xa.parameters,docs:{...xa.parameters?.docs,source:{originalSource:`{
  name: 'Rango en un contenedor angosto',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByPlaceholderText('Inicio');
    const container = canvasElement.querySelector<HTMLElement>('[data-test="narrow-container"]');
    const editor = canvasElement.querySelector<HTMLElement>('.gui-date-editor--daterange');
    if (!container || !editor) throw new Error('falta el contenedor o el campo');
    await expect(editor.getBoundingClientRect().right).toBeLessThanOrEqual(container.getBoundingClientRect().right);
    await expect(Math.round(editor.getBoundingClientRect().width)).toBe(Math.round(container.getBoundingClientRect().width));
  },
  tags: ['!dev', '!autodocs'],
  render: () => ({
    components: {
      GDatePicker,
      GConfigProvider
    },
    setup() {
      const value = ref([]);
      const lang = es;
      return {
        value,
        lang
      };
    },
    template: \`
      <g-config-provider :locale="lang">
        <div data-test="narrow-container" style="width: 320px">
          <g-date-picker
            v-model="value"
            type="daterange"
            aria-label="Rango de fechas"
            start-placeholder="Inicio"
            end-placeholder="Fin"
            range-separator="-"
            format="DD-MM-YYYY"
            value-format="YYYY-MM-DD"
            prefix-icon="regular calendar"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...xa.parameters?.docs?.source}}};Sa.parameters={...Sa.parameters,docs:{...Sa.parameters?.docs,source:{originalSource:`{
  name: 'Fecha y Hora',
  parameters: {
    docs: {
      description: {
        story: \`Selector de fecha y hora combinado.\`
      }
    }
  },
  render: () => ({
    components: {
      GDatePicker,
      GConfigProvider
    },
    setup() {
      const value = ref(new Date());
      const lang = es;
      return {
        value,
        lang
      };
    },
    template: \`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            type="datetime"
            label="Seleccione fecha y hora"
            format="YYYY-MM-DD HH:mm:ss"
          />
          <div>Fecha y hora seleccionada: {{ value }}</div>
        </div>
      </g-config-provider>
    \`
  })
}`,...Sa.parameters?.docs?.source}}};Ma.parameters={...Ma.parameters,docs:{...Ma.parameters?.docs,source:{originalSource:`{
  name: 'Fechas Deshabilitadas',
  parameters: {
    docs: {
      description: {
        story: \`Ejemplo de cómo deshabilitar fechas específicas utilizando la prop \\\`disabled-date\\\`.\`
      }
    }
  },
  render: () => ({
    components: {
      GDatePicker,
      GConfigProvider
    },
    setup() {
      const value = ref('');
      const disabledDate = (time: Date) => {
        return time.getTime() > Date.now(); // Deshabilitar fechas futuras
      };
      const lang = es;
      return {
        value,
        disabledDate,
        lang
      };
    },
    template: \`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker
            v-model="value"
            label="Seleccione fecha"
            :disabled-date="disabledDate"
          />
          <div class="text-sm text-gray-500">
            <p>Las fechas futuras están deshabilitadas.</p>
          </div>
        </div>
      </g-config-provider>
    \`
  })
}`,...Ma.parameters?.docs?.source}}};Ca.parameters={...Ca.parameters,docs:{...Ca.parameters?.docs,source:{originalSource:`{
  name: 'Diferentes Tipos',
  parameters: {
    docs: {
      description: {
        story: \`Muestra los diferentes tipos de selectores de fecha disponibles.\`
      }
    }
  },
  render: () => ({
    components: {
      GDatePicker,
      GConfigProvider
    },
    setup() {
      const dateValue = ref('');
      const yearValue = ref('');
      const monthValue = ref('');
      const dateRangeValue = ref([]);
      const monthRangeValue = ref([]);
      const yearRangeValue = ref([]);
      const dateTimeValue = ref(new Date());
      const lang = es;
      return {
        dateValue,
        yearValue,
        monthValue,
        dateRangeValue,
        monthRangeValue,
        yearRangeValue,
        dateTimeValue,
        lang
      };
    },
    template: \`
      <g-config-provider :locale="lang">
        <div class="flex flex-col gap-4">
          <g-date-picker v-model="dateValue" label="Date" type="date"/>
          <g-date-picker v-model="yearValue" label="Year" type="year" />
          <g-date-picker v-model="monthValue" label="Month" type="month" />
          <g-date-picker v-model="dateRangeValue" label="Date Range" type="daterange" />
          <g-date-picker v-model="monthRangeValue" label="Month Range" type="monthrange" />
          <g-date-picker v-model="yearRangeValue" label="Year Range" type="yearrange" />
          <g-date-picker v-model="dateTimeValue" label="DateTime" type="datetime" format="YYYY-MM-DD HH:mm:ss" messageError="Agregar fecha"/>
        </div>
      </g-config-provider>
    \`
  })
}`,...Ca.parameters?.docs?.source}}};export{ya as Basic,Sa as DateTime,Ca as DifferentTypes,Ma as DisabledDates,ga as Range,wa as RangeKeyboard,xa as RangeNarrowContainer,Da as RangeReducedMotion,ka as RangeResponsive,ba as RangeWithShortcutsOpenOnInput,Ir as __namedExportsOrder,Nr as default};
