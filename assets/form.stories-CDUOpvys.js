import{l as Fe,p as de,a5 as ye,r as G,c as C,u as e,av as qe,s as $e,C as Ue,d as Le,i as he,f as K,g as h,z as be,ab as Xt,ac as en,o as _,y as J,S as Ze,j as pe,F as Ce,A as Ye,b as le,ad as ma,a3 as et,a4 as at,x as Je,Z as We,e as je,v as oa,a as Ge,a2 as Ya,q as St,w as Ke,B as wa,D as La,E as la,O as Sa,aH as xt,aI as it,n as Pa,m as Ha,N as ut,Y as an,aA as ct,t as tn,T as nn}from"./iframe-DpB44VZN.js";import{G as pa,a as sa}from"./index-B8NKmjw_.js";import{G as fa}from"./index-BnsEQ5k3.js";import{G as va}from"./ConfigProvider-qQEe6KQ8.js";import{G as ga}from"./index-BDZKyZAT.js";import{G as rn}from"./index-CvWfbgNI.js";import{a as on}from"./index-BrRRk8pk.js";import{G as ln}from"./index-7LwN8a4S.js";import{G as dt}from"./index-CGhnA_Q_.js";import{a as sn,V as un,d as U,l as Pt,i as Ct,r as Mt,j as Ka,s as cn,A as dn,B as mn,u as _a}from"./index-C7GHWGyP.js";import{c as aa,g as ia}from"./_commonjsHelpers-Cpj98o6Y.js";import{u as Ee,l as Na,h as pn,e as fn,j as vn,r as gn,f as bn}from"./useEmptyValues-CjZM0nWA.js";import{u as He}from"./useLocale-CSXbppGK.js";import{Y as da}from"./index-BHCpke1m.js";import{R as De}from"./index-JetZZS8l.js";import{W as hn,p as yn,n as kn}from"./index-BO8tBp4t.js";import{f as Dn}from"./flatten-NBiPsQ-Z.js";import{_ as wn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as Ua}from"./clickOutside.directive-EjfXiKBC.js";import{E as Pe}from"./event.constant-LtAI3-H4.js";import{c as mt}from"./index-CJKELqOy.js";import{w as Rt}from"./install.util-cBz1HN_T.js";import{a as Et,d as Sn,o as xn,e as pt}from"./index-ByGf1B2M.js";import{u as Pn,a as Ft}from"./useAttrs-CZ7Ike8X.js";import{i as Vt,L as Cn,a as Mn}from"./index-TGapUdg2.js";import{i as Rn}from"./isEqual-YixNntEC.js";import{x as En}from"./index-DBb42qUB.js";import{d as Fn}from"./debounce-Bz1Jc9w-.js";import{v as ft}from"./repeatClick.directive-DQ7LsFq8.js";import"./preload-helper-Dch09mLN.js";import"./index-CRx4dHSJ.js";import"./useId-DCQZF3Q_.js";import"./index-Ml2Kbf8g.js";import"./useCalcInputWidth-xngfkPgZ.js";import"./index-CjdCDXOw.js";import"./index-ziCP1hcY.js";import"./hasIn-BJXuxGFu.js";import"./Skeleton-BYSiXtOX.js";import"./pick-CsjuObcc.js";import"./_baseFlatten-BOE9_zSr.js";import"./isArrayLikeObject-BEVovIMt.js";import"./index-pxs1rteo.js";import"./index-CsrfpqCL.js";var Vn={exports:{}};(function(t,l){(function(r,a){t.exports=a(sn)})(aa,function(r){function a(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var n=a(r),i={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(o){return o+"º"}};return n.default.locale(i,null,!0),i})})(Vn);var It={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,i=/\d\d/,o=/\d\d?/,g=/\d*[^-_:/,()\s\d]+/,x={},w=function(d){return(d=+d)+(d>68?1900:2e3)},c=function(d){return function(I){this[d]=+I}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(d){(this.zone||(this.zone={})).offset=function(I){if(!I||I==="Z")return 0;var S=I.match(/([+-]|\d\d)/g),y=60*S[1]+(+S[2]||0);return y===0?0:S[0]==="+"?-y:y}(d)}],M=function(d){var I=x[d];return I&&(I.indexOf?I:I.s.concat(I.f))},k=function(d,I){var S,y=x.meridiem;if(y){for(var B=1;B<=24;B+=1)if(d.indexOf(y(B,0,I))>-1){S=B>12;break}}else S=d===(I?"pm":"PM");return S},R={A:[g,function(d){this.afternoon=k(d,!1)}],a:[g,function(d){this.afternoon=k(d,!0)}],Q:[n,function(d){this.month=3*(d-1)+1}],S:[n,function(d){this.milliseconds=100*+d}],SS:[i,function(d){this.milliseconds=10*+d}],SSS:[/\d{3}/,function(d){this.milliseconds=+d}],s:[o,c("seconds")],ss:[o,c("seconds")],m:[o,c("minutes")],mm:[o,c("minutes")],H:[o,c("hours")],h:[o,c("hours")],HH:[o,c("hours")],hh:[o,c("hours")],D:[o,c("day")],DD:[i,c("day")],Do:[g,function(d){var I=x.ordinal,S=d.match(/\d+/);if(this.day=S[0],I)for(var y=1;y<=31;y+=1)I(y).replace(/\[|\]/g,"")===d&&(this.day=y)}],w:[o,c("week")],ww:[i,c("week")],M:[o,c("month")],MM:[i,c("month")],MMM:[g,function(d){var I=M("months"),S=(M("monthsShort")||I.map(function(y){return y.slice(0,3)})).indexOf(d)+1;if(S<1)throw new Error;this.month=S%12||S}],MMMM:[g,function(d){var I=M("months").indexOf(d)+1;if(I<1)throw new Error;this.month=I%12||I}],Y:[/[+-]?\d+/,c("year")],YY:[i,function(d){this.year=w(d)}],YYYY:[/\d{4}/,c("year")],Z:u,ZZ:u};function D(d){var I,S;I=d,S=x&&x.formats;for(var y=(d=I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(q,H,b){var ne=b&&b.toUpperCase();return H||S[b]||r[b]||S[ne].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(X,ie,oe){return ie||oe.slice(1)})})).match(a),B=y.length,E=0;E<B;E+=1){var T=y[E],Y=R[T],A=Y&&Y[0],F=Y&&Y[1];y[E]=F?{regex:A,parser:F}:T.replace(/^\[|\]$/g,"")}return function(q){for(var H={},b=0,ne=0;b<B;b+=1){var X=y[b];if(typeof X=="string")ne+=X.length;else{var ie=X.regex,oe=X.parser,fe=q.slice(ne),N=ie.exec(fe)[0];oe.call(H,N),q=q.replace(N,"")}}return function(v){var V=v.afternoon;if(V!==void 0){var P=v.hours;V?P<12&&(v.hours+=12):P===12&&(v.hours=0),delete v.afternoon}}(H),H}}return function(d,I,S){S.p.customParseFormat=!0,d&&d.parseTwoDigitYear&&(w=d.parseTwoDigitYear);var y=I.prototype,B=y.parse;y.parse=function(E){var T=E.date,Y=E.utc,A=E.args;this.$u=Y;var F=A[1];if(typeof F=="string"){var q=A[2]===!0,H=A[3]===!0,b=q||H,ne=A[2];H&&(ne=A[2]),x=this.$locale(),!q&&ne&&(x=S.Ls[ne]),this.$d=function(fe,N,v,V){try{if(["x","X"].indexOf(N)>-1)return new Date((N==="X"?1e3:1)*fe);var P=D(N)(fe),p=P.year,j=P.month,m=P.day,O=P.hours,W=P.minutes,re=P.seconds,Me=P.milliseconds,Oe=P.zone,Ve=P.week,Z=new Date,ee=m||(p||j?1:Z.getDate()),se=p||Z.getFullYear(),me=0;p&&!j||(me=j>0?j-1:Z.getMonth());var ve,ke=O||0,we=W||0,Se=re||0,Re=Me||0;return Oe?new Date(Date.UTC(se,me,ee,ke,we,Se,Re+60*Oe.offset*1e3)):v?new Date(Date.UTC(se,me,ee,ke,we,Se,Re)):(ve=new Date(se,me,ee,ke,we,Se,Re),Ve&&(ve=V(ve).week(Ve).toDate()),ve)}catch{return new Date("")}}(T,F,Y,S),this.init(),ne&&ne!==!0&&(this.$L=this.locale(ne).$L),b&&T!=this.format(F)&&(this.$d=new Date("")),x={}}else if(F instanceof Array)for(var X=F.length,ie=1;ie<=X;ie+=1){A[1]=F[ie-1];var oe=S.apply(this,A);if(oe.isValid()){this.$d=oe.$d,this.$L=oe.$L,this.init();break}ie===X&&(this.$d=new Date(""))}else B.call(this,E)}}})})(It);var In=It.exports;const Tt=ia(In);var $t={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){return function(r,a){var n=a.prototype,i=n.format;n.format=function(o){var g=this,x=this.$locale();if(!this.isValid())return i.bind(this)(o);var w=this.$utils(),c=(o||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(u){switch(u){case"Q":return Math.ceil((g.$M+1)/3);case"Do":return x.ordinal(g.$D);case"gggg":return g.weekYear();case"GGGG":return g.isoWeekYear();case"wo":return x.ordinal(g.week(),"W");case"w":case"ww":return w.s(g.week(),u==="w"?1:2,"0");case"W":case"WW":return w.s(g.isoWeek(),u==="W"?1:2,"0");case"k":case"kk":return w.s(String(g.$H===0?24:g.$H),u==="k"?1:2,"0");case"X":return Math.floor(g.$d.getTime()/1e3);case"x":return g.$d.getTime();case"z":return"["+g.offsetName()+"]";case"zzz":return"["+g.offsetName("long")+"]";default:return u}});return i.bind(this)(c)}}})})($t);var Tn=$t.exports;const $n=ia(Tn);var Ot={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){return function(r,a,n){var i=a.prototype,o=function(u){return u&&(u.indexOf?u:u.s)},g=function(u,M,k,R,D){var d=u.name?u:u.$locale(),I=o(d[M]),S=o(d[k]),y=I||S.map(function(E){return E.slice(0,R)});if(!D)return y;var B=d.weekStart;return y.map(function(E,T){return y[(T+(B||0))%7]})},x=function(){return n.Ls[n.locale()]},w=function(u,M){return u.formats[M]||function(k){return k.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(R,D,d){return D||d.slice(1)})}(u.formats[M.toUpperCase()])},c=function(){var u=this;return{months:function(M){return M?M.format("MMMM"):g(u,"months")},monthsShort:function(M){return M?M.format("MMM"):g(u,"monthsShort","months",3)},firstDayOfWeek:function(){return u.$locale().weekStart||0},weekdays:function(M){return M?M.format("dddd"):g(u,"weekdays")},weekdaysMin:function(M){return M?M.format("dd"):g(u,"weekdaysMin","weekdays",2)},weekdaysShort:function(M){return M?M.format("ddd"):g(u,"weekdaysShort","weekdays",3)},longDateFormat:function(M){return w(u.$locale(),M)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};i.localeData=function(){return c.bind(this)()},n.localeData=function(){var u=x();return{firstDayOfWeek:function(){return u.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(M){return w(u,M)},meridiem:u.meridiem,ordinal:u.ordinal}},n.months=function(){return g(x(),"months")},n.monthsShort=function(){return g(x(),"monthsShort","months",3)},n.weekdays=function(u){return g(x(),"weekdays",null,null,u)},n.weekdaysShort=function(u){return g(x(),"weekdaysShort","weekdays",3,u)},n.weekdaysMin=function(u){return g(x(),"weekdaysMin","weekdays",2,u)}}})})(Ot);var On=Ot.exports;const An=ia(On);var At={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){var r="week",a="year";return function(n,i,o){var g=i.prototype;g.week=function(x){if(x===void 0&&(x=null),x!==null)return this.add(7*(x-this.week()),"day");var w=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var c=o(this).startOf(a).add(1,a).date(w),u=o(this).endOf(r);if(c.isBefore(u))return 1}var M=o(this).startOf(a).date(w).startOf(r).subtract(1,"millisecond"),k=this.diff(M,r,!0);return k<0?o(this).startOf("week").week():Math.ceil(k)},g.weeks=function(x){return x===void 0&&(x=null),this.week(x)}}})})(At);var Yn=At.exports;const Ln=ia(Yn);var Yt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){return function(r,a){a.prototype.weekYear=function(){var n=this.month(),i=this.week(),o=this.year();return i===1&&n===11?o+1:n===0&&i>=52?o-1:o}}})})(Yt);var Nn=Yt.exports;const Bn=ia(Nn);var Lt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){return function(r,a,n){a.prototype.dayOfYear=function(i){var o=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return i==null?o:this.add(i-o,"day")}}})})(Lt);var _n=Lt.exports;const jn=ia(_n);var Nt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){return function(r,a){a.prototype.isSameOrAfter=function(n,i){return this.isSame(n,i)||this.isAfter(n,i)}}})})(Nt);var Gn=Nt.exports;const qn=ia(Gn);var Bt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(aa,function(){return function(r,a){a.prototype.isSameOrBefore=function(n,i){return this.isSame(n,i)||this.isBefore(n,i)}}})})(Bt);var Hn=Bt.exports;const Kn=ia(Hn),tt=Symbol.for("rootPickerInjection"),Un=Fe({...un,type:{type:de(String),default:"date"}}),zn=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],Wn=["date","dates","year","years","month","months","week","range"],nt=Fe({disabledDate:{type:de(Function)},date:{type:de(Object),required:!0},minDate:{type:de(Object)},maxDate:{type:de(Object)},parsedValue:{type:de([Object,Array])},rangeState:{type:de(Object),default:()=>({endDate:null,selecting:!1})}}),_t=Fe({type:{type:de(String),required:!0,values:zn},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),rt=Fe({unlinkPanels:Boolean,parsedValue:{type:de(Array)}}),ot=t=>({type:String,values:Wn,default:t}),Jn=Fe({..._t,parsedValue:{type:de([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),jt={ArrowLeft:-1,ArrowRight:1,ArrowUp:-7,ArrowDown:7},Zn=62,Qn=Object.keys(jt),xa=t=>{if(!ye(t))return!1;const[l,r]=t;return U.isDayjs(l)&&U.isDayjs(r)&&l.isSameOrBefore(r)},lt=(t,{lang:l,unit:r,unlinkPanels:a})=>{let n;if(ye(t)){const[i,o]=t.map(x=>U(x).locale(l)),g=a?o:i.add(1,r);return[i,g]}else t?n=U(t):n=U();return n=n.locale(l),[n,n.add(1,r)]},Xn=(t,l,{columnIndexOffset:r,startDate:a,nextEndDate:n,now:i,unit:o,relativeDateGetter:g,setCellMetadata:x,setRowMetadata:w})=>{for(let c=0;c<t.row;c++){const u=l[c];for(let M=0;M<t.column;M++){let k=u[M+r];k||(k={row:c,column:M,type:"normal",inRange:!1,start:!1,end:!1});const R=c*t.column+M,D=g(R);k.dayjs=D,k.date=D.toDate(),k.timestamp=D.valueOf(),k.type="normal",k.inRange=!!(a&&D.isSameOrAfter(a,o)&&n&&D.isSameOrBefore(n,o))||!!(a&&D.isSameOrBefore(a,o)&&n&&D.isSameOrAfter(n,o)),a?.isSameOrAfter(n)?(k.start=!!n&&D.isSame(n,o),k.end=a&&D.isSame(a,o)):(k.start=!!a&&D.isSame(a,o),k.end=!!n&&D.isSame(n,o)),D.isSame(i,o)&&(k.type="today"),x?.(k,{rowIndex:c,columnIndex:M}),u[M+r]=k}w?.(u)}},Ba=(t,l,r)=>{const a=U().locale(r).startOf("month").month(l).year(t),n=a.daysInMonth();return Pt(n).map(i=>a.add(i,"day").toDate())},Ca=(t,l,r,a)=>{const n=U().year(t).month(l).startOf("month"),i=Ba(t,l,r).find(o=>!a?.(o));return i?U(i).locale(r):n.locale(r)},za=(t,l,r)=>{const a=t.year();if(!r?.(t.toDate()))return t.locale(l);const n=t.month();if(!Ba(a,n,l).every(r))return Ca(a,n,l,r);for(let i=0;i<12;i++)if(!Ba(a,i,l).every(r))return Ca(a,i,l,r);return t};function er({current:t,key:l,enabledDates:r}){const a=jt[l];if(!a)return null;let n=U(t);for(let i=0;i<Zn;i++){n=n.add(a,"day");const o=n.format("YYYY-MM-DD");if(r.has(o))return o}return null}function ar({shortcutValue:t,minDate:l,maxDate:r}){if(!t||!l||!r)return!1;const[a,n]=t;return l.isSame(a,"day")&&r.isSame(n,"day")}const tr=Fe({...nt,cellClassName:{type:de(Function)},showWeekNumber:Boolean,selectionMode:ot("date")}),nr=["changerange","pick","select"],ba={name:"es",el:{datepicker:{now:"Ahora",today:"Hoy",cancel:"Cancelar",clear:"Limpiar",confirm:"Aceptar",dateTablePrompt:"Use las teclas de flecha y enter para seleccionar el día del mes",monthTablePrompt:"Use las teclas de flecha y enter para seleccionar el mes",yearTablePrompt:"Use las teclas de flecha y enter para seleccionar el año",selectedDate:"Fecha seleccionada",selectDate:"Seleccionar fecha",selectTime:"Seleccionar hora",startDate:"Fecha de inicio",startTime:"Hora de inicio",endDate:"Fecha de fin",endTime:"Hora de fin",prevYear:"Año anterior",nextYear:"Próximo año",prevMonth:"Mes anterior",nextMonth:"Próximo mes",year:"",month1:"Enero",month2:"Febrero",month3:"Marzo",month4:"Abril",month5:"Mayo",month6:"Junio",month7:"Julio",month8:"Agosto",month9:"Septiembre",month10:"Octubre",month11:"Noviembre",month12:"Diciembre",week:"semana",weeks:{sun:"Dom",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb"},weeksFull:{sun:"Domingo",mon:"Lunes",tue:"Martes",wed:"Miércoles",thu:"Jueves",fri:"Viernes",sat:"Sábado"},months:{jan:"Ene",feb:"Feb",mar:"Mar",apr:"Abr",may:"May",jun:"Jun",jul:"Jul",aug:"Ago",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dic"}}}},Wa=(t="")=>["normal","today"].includes(t),rr=(t,l)=>{const{lang:r}=He(G(ba)),a=G(),n=G(),i=G(),o=G(),g=G([[],[],[],[],[],[]]);let x=!1;const w=t.date.$locale().weekStart||7,c=t.date.locale("en").localeData().weekdaysShort().map(v=>v.toLowerCase()),u=C(()=>w>3?7-w:-w),M=C(()=>{const v=t.date.startOf("month");return v.subtract(v.day()||7,"day")}),k=C(()=>c.concat(c).slice(w,w+7)),R=C(()=>Dn(e(B)).some(v=>v.isCurrent)),D=C(()=>{const v=t.date.startOf("month"),V=v.day()||7,P=v.daysInMonth(),p=v.subtract(1,"month").daysInMonth();return{startOfMonthDay:V,dateCountOfMonth:P,dateCountOfLastMonth:p}}),d=C(()=>t.selectionMode==="dates"?qe(t.parsedValue):[]),I=(v,{count:V,rowIndex:P,columnIndex:p})=>{const{startOfMonthDay:j,dateCountOfMonth:m,dateCountOfLastMonth:O}=e(D),W=e(u);if(P>=0&&P<=1){const re=j+W<0?7+j+W:j+W;if(p+P*7>=re)return v.text=V,!0;v.text=O-(re-p%7)+1+P*7,v.type="prev-month"}else return V<=m?v.text=V:(v.text=V-m,v.type="next-month"),!0;return!1},S=(v,{columnIndex:V,rowIndex:P},p)=>{const{disabledDate:j,cellClassName:m}=t,O=e(d),W=I(v,{count:p,rowIndex:P,columnIndex:V}),re=v.dayjs.toDate();return v.selected=O.find(Me=>Me.isSame(v.dayjs,"day")),v.isSelected=!!v.selected,v.isCurrent=T(v),v.disabled=j?.(re),v.customClass=m?.(re),W},y=v=>{if(t.selectionMode==="week"){const[V,P]=t.showWeekNumber?[1,7]:[0,6],p=N(v[V+1]);v[V].inRange=p,v[V].start=p,v[P].inRange=p,v[P].end=p}},B=C(()=>{const{minDate:v,maxDate:V,rangeState:P,showWeekNumber:p}=t,j=e(u),m=e(g),O="day";let W=1;if(p)for(let re=0;re<6;re++)m[re][0]||(m[re][0]={type:"week",text:e(M).add(re*7+1,O).week()});return Xn({row:6,column:7},m,{startDate:v,columnIndexOffset:p?1:0,nextEndDate:P.endDate||V||P.selecting&&v||null,now:U().locale(e(r)).startOf(O),unit:O,relativeDateGetter:re=>e(M).add(re-j,O),setCellMetadata:(...re)=>{S(...re,W)&&(W+=1)},setRowMetadata:y}),m});$e(()=>t.date,async()=>{e(a)?.contains(document.activeElement)&&(await Ue(),await E())});const E=async()=>e(n)?.focus(),T=v=>t.selectionMode==="date"&&Wa(v.type)&&Y(v,t.parsedValue),Y=(v,V)=>V?U(V).locale(e(r)).isSame(t.date.date(Number(v.text)),"day"):!1,A=(v,V)=>{const P=v*7+(V-(t.showWeekNumber?1:0))-e(u);return e(M).add(P,"day")},F=v=>{if(!t.rangeState.selecting)return;let V=v.target;if(V.tagName==="SPAN"&&(V=V.parentNode?.parentNode),V.tagName==="DIV"&&(V=V.parentNode),V.tagName!=="TD")return;const P=V.parentNode.rowIndex-1,p=V.cellIndex;e(B)[P][p].disabled||(P!==e(i)||p!==e(o))&&(i.value=P,o.value=p,l("changerange",{selecting:!0,endDate:A(P,p)}))},q=v=>!e(R)&&v?.text===1&&v.type==="normal"||v.isCurrent,H=v=>{x||e(R)||t.selectionMode!=="date"||fe(v,!0)},b=v=>{v.target.closest("td")&&(x=!0)},ne=v=>{v.target.closest("td")&&(x=!1)},X=v=>{!t.rangeState.selecting||!t.minDate?(l("pick",{minDate:v,maxDate:null}),l("select",!0)):(v>=t.minDate?l("pick",{minDate:t.minDate,maxDate:v}):l("pick",{minDate:v,maxDate:t.minDate}),l("select",!1))},ie=v=>{const V=v.week(),P=`${v.year()}w${V}`;l("pick",{year:v.year(),week:V,value:P,date:v.startOf("week")})},oe=(v,V)=>{const P=V?qe(t.parsedValue).filter(p=>p?.valueOf()!==v.valueOf()):qe(t.parsedValue).concat([v]);l("pick",P)},fe=(v,V=!1)=>{const P=v.target.closest("td");if(!P)return;const p=P.parentNode.rowIndex-1,j=P.cellIndex,m=e(B)[p][j];if(m.disabled||m.type==="week")return;const O=A(p,j);switch(t.selectionMode){case"range":{X(O);break}case"date":{l("pick",O,V);break}case"week":{ie(O);break}case"dates":{oe(O,!!m.selected);break}}},N=v=>{if(t.selectionMode!=="week")return!1;let V=t.date.startOf("day");if(v.type==="prev-month"&&(V=V.subtract(1,"month")),v.type==="next-month"&&(V=V.add(1,"month")),V=V.date(Number.parseInt(v.text,10)),t.parsedValue&&!ye(t.parsedValue)){const P=(t.parsedValue.day()-w+7)%7-1;return t.parsedValue.subtract(P,"day").isSame(V,"day")}return!1};return{WEEKS:k,rows:B,tbodyRef:a,currentCellRef:n,focus:E,getDateOfCell:A,isCurrent:T,isWeekActive:N,isSelectedCell:q,handlePickDate:fe,handleMouseUp:ne,handleMouseDown:b,handleMouseMove:F,handleFocus:H}},or=(t,{isCurrent:l,isWeekActive:r})=>{const a=Ee("date-table"),{t:n}=He(G(ba)),i=C(()=>[a.b(),{"is-week-mode":t.selectionMode==="week"}]),o=C(()=>n("el.datepicker.dateTablePrompt")),g=C(()=>n("el.datepicker.week"));return{tableKls:i,tableLabel:o,weekLabel:g,getCellClasses:c=>{const u=[];return Wa(c.type)&&!c.disabled?(u.push("available"),c.type==="today"&&u.push("today")):u.push(c.type),l(c)&&u.push("current"),c.inRange&&(Wa(c.type)||t.selectionMode==="week")&&(u.push("in-range"),c.start&&u.push("start-date"),c.end&&u.push("end-date")),c.disabled&&u.push("disabled"),c.selected&&u.push("selected"),c.customClass&&u.push(c.customClass),u.join(" ")},getRowKls:c=>[a.e("row"),{current:r(c)}],t:n}},lr=Fe({cell:{type:de(Object)}}),sr=Le({name:"GDatePickerCell",props:lr,setup(t){return{ns:Ee("date-table-cell"),cell:t.cell}}});function ir(t,l,r,a,n,i){return he(t.$slots,"default",Xt(en(t.cell)),()=>[K("div",{class:h(t.ns.b())},[K("span",{class:h(t.ns.e("text"))},be(t.cell?.renderText??t.cell?.text),3)],2)])}const st=wn(sr,[["render",ir]]),ur=["aria-label"],cr={key:0,scope:"col"},dr=["aria-label"],mr=["aria-current","aria-selected","tabindex","data-date"],Ja=Le({__name:"basic-date-table",props:tr,emits:nr,setup(t,{expose:l,emit:r}){const a=t,n=r,{WEEKS:i,rows:o,tbodyRef:g,currentCellRef:x,focus:w,getDateOfCell:c,isCurrent:u,isWeekActive:M,isSelectedCell:k,handlePickDate:R,handleMouseUp:D,handleMouseDown:d,handleMouseMove:I,handleFocus:S}=rr(a,n),{tableLabel:y,tableKls:B,weekLabel:E,getCellClasses:T,getRowKls:Y,t:A}=or(a,{isCurrent:u,isWeekActive:M});function F(q,H,b){if(b.type!=="week")return c(q,H).format("YYYY-MM-DD")}return l({focus:w}),(q,H)=>(_(),J("table",{"aria-label":e(y),class:h(e(B)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:H[1]||(H[1]=(...b)=>e(R)&&e(R)(...b)),onMousemove:H[2]||(H[2]=(...b)=>e(I)&&e(I)(...b)),onMousedown:H[3]||(H[3]=Ze((...b)=>e(d)&&e(d)(...b),["prevent"])),onMouseup:H[4]||(H[4]=(...b)=>e(D)&&e(D)(...b))},[K("tbody",{ref_key:"tbodyRef",ref:g},[K("tr",null,[q.showWeekNumber?(_(),J("th",cr,be(e(E)),1)):pe("",!0),(_(!0),J(Ce,null,Ye(e(i),(b,ne)=>(_(),J("th",{key:ne,"aria-label":e(A)("el.datepicker.weeksFull."+b),scope:"col"},be(e(A)("el.datepicker.weeks."+b)),9,dr))),128))]),(_(!0),J(Ce,null,Ye(e(o),(b,ne)=>(_(),J("tr",{key:ne,class:h(e(Y)(b[1]))},[(_(!0),J(Ce,null,Ye(b,(X,ie)=>(_(),J("td",{key:`${ne}.${ie}`,ref_for:!0,ref:oe=>e(k)(X)&&(x.value=oe),class:h(e(T)(X)),"aria-current":X.isCurrent?"date":void 0,"aria-selected":X.isCurrent,tabindex:e(k)(X)?0:-1,"data-date":F(ne,ie,X),onFocus:H[0]||(H[0]=(...oe)=>e(S)&&e(S)(...oe))},[le(st,{cell:X},null,8,["cell"])],42,mr))),128))],2))),128))],512)],42,ur))}}),pr=Fe({...nt,selectionMode:ot("month")}),fr=["aria-label"],vr=["aria-selected","aria-label","tabindex","onKeydown"],Za=Le({__name:"basic-month-table",props:pr,emits:["changerange","pick","select"],setup(t,{expose:l,emit:r}){const a=t,n=r,i=Ee("month-table"),{t:o,lang:g}=He(),x=G(),w=G(),c=G(a.date.locale("en").localeData().monthsShort().map(B=>B.toLowerCase())),u=G([[],[],[]]),M=G(),k=G(),R=C(()=>{const B=u.value,E=U().locale(g.value).startOf("month");for(let T=0;T<3;T++){const Y=B[T];for(let A=0;A<4;A++){const F=Y[A]||={row:T,column:A,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};F.type="normal";const q=T*4+A,H=a.date.startOf("year").month(q),b=a.rangeState.endDate||a.maxDate||a.rangeState.selecting&&a.minDate||null;F.inRange=!!(a.minDate&&H.isSameOrAfter(a.minDate,"month")&&b&&H.isSameOrBefore(b,"month"))||!!(a.minDate&&H.isSameOrBefore(a.minDate,"month")&&b&&H.isSameOrAfter(b,"month")),a.minDate?.isSameOrAfter(b)?(F.start=!!(b&&H.isSame(b,"month")),F.end=a.minDate&&H.isSame(a.minDate,"month")):(F.start=!!(a.minDate&&H.isSame(a.minDate,"month")),F.end=!!(b&&H.isSame(b,"month"))),E.isSame(H)&&(F.type="today"),F.text=q,F.disabled=a.disabledDate?.(H.toDate())||!1}}return B}),D=()=>{w.value?.focus()},d=B=>{const E={},T=a.date.year(),Y=new Date,A=B.text;return E.disabled=a.disabledDate?Ba(T,A,g.value).every(a.disabledDate):!1,E.current=qe(a.parsedValue).findIndex(F=>U.isDayjs(F)&&F.year()===T&&F.month()===A)>=0,E.today=Y.getFullYear()===T&&Y.getMonth()===A,B.inRange&&(E["in-range"]=!0,B.start&&(E["start-date"]=!0),B.end&&(E["end-date"]=!0)),E},I=B=>{const E=a.date.year(),T=B.text;return qe(a.date).findIndex(Y=>Y.year()===E&&Y.month()===T)>=0},S=B=>{if(!a.rangeState.selecting)return;let E=B.target;if(E.tagName==="SPAN"&&(E=E.parentNode?.parentNode),E.tagName==="DIV"&&(E=E.parentNode),E.tagName!=="TD")return;const T=E.parentNode.rowIndex,Y=E.cellIndex;R.value[T][Y].disabled||(T!==M.value||Y!==k.value)&&(M.value=T,k.value=Y,n("changerange",{selecting:!0,endDate:a.date.startOf("year").month(T*4+Y)}))},y=B=>{const E=B.target?.closest("td");if(E?.tagName!=="TD"||Na(E,"disabled"))return;const T=E.cellIndex,A=E.parentNode.rowIndex*4+T,F=a.date.startOf("year").month(A);if(a.selectionMode==="months"){if(B.type==="keydown"){n("pick",qe(a.parsedValue),!1);return}const q=Ca(a.date.year(),A,g.value,a.disabledDate),H=Na(E,"current")?qe(a.parsedValue).filter(b=>b?.month()!==q.month()):qe(a.parsedValue).concat([U(q)]);n("pick",H)}else a.selectionMode==="range"?a.rangeState.selecting?(a.minDate&&F>=a.minDate?n("pick",{minDate:a.minDate,maxDate:F}):n("pick",{minDate:F,maxDate:a.minDate}),n("select",!1)):(n("pick",{minDate:F,maxDate:null}),n("select",!0)):n("pick",A)};return $e(()=>a.date,async()=>{x.value?.contains(document.activeElement)&&(await Ue(),w.value?.focus())}),l({focus:D}),(B,E)=>(_(),J("table",{role:"grid","aria-label":e(o)("el.datepicker.monthTablePrompt"),class:h(e(i).b()),onClick:y,onMousemove:S},[K("tbody",{ref_key:"tbodyRef",ref:x},[(_(!0),J(Ce,null,Ye(R.value,(T,Y)=>(_(),J("tr",{key:Y},[(_(!0),J(Ce,null,Ye(T,(A,F)=>(_(),J("td",{key:F,ref_for:!0,ref:q=>I(A)&&(w.value=q),class:h(d(A)),"aria-selected":`${I(A)}`,"aria-label":e(o)(`el.datepicker.month${+A.text+1}`),tabindex:I(A)?0:-1,onKeydown:[ma(Ze(y,["prevent","stop"]),["space"]),ma(Ze(y,["prevent","stop"]),["enter"])]},[le(st,{cell:{...A,renderText:e(o)("el.datepicker.months."+c.value[A.text])}},null,8,["cell"])],42,vr))),128))]))),128))],512)],42,fr))}}),gr=Fe({...nt,selectionMode:ot("year")}),br=["aria-label"],hr=["aria-selected","aria-label","tabindex","onKeydown"],Qa=Le({__name:"basic-year-table",props:gr,emits:["changerange","pick","select"],setup(t,{expose:l,emit:r}){const a=(E,T)=>{const Y=U(String(E)).locale(T).startOf("year"),F=Y.endOf("year").dayOfYear();return Pt(F).map(q=>Y.add(q,"day").toDate())},n=t,i=r,o=Ee("year-table"),{t:g,lang:x}=He(),w=G(),c=G(),u=C(()=>Math.floor(n.date.year()/10)*10),M=G([[],[],[]]),k=G(),R=G(),D=C(()=>{const E=M.value,T=U().locale(x.value).startOf("year");for(let Y=0;Y<3;Y++){const A=E[Y];for(let F=0;F<4&&!(Y*4+F>=10);F++){let q=A[F];q||(q={row:Y,column:F,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),q.type="normal";const H=Y*4+F+u.value,b=U().year(H),ne=n.rangeState.endDate||n.maxDate||n.rangeState.selecting&&n.minDate||null;q.inRange=!!(n.minDate&&b.isSameOrAfter(n.minDate,"year")&&ne&&b.isSameOrBefore(ne,"year"))||!!(n.minDate&&b.isSameOrBefore(n.minDate,"year")&&ne&&b.isSameOrAfter(ne,"year")),n.minDate?.isSameOrAfter(ne)?(q.start=!!(ne&&b.isSame(ne,"year")),q.end=!!(n.minDate&&b.isSame(n.minDate,"year"))):(q.start=!!(n.minDate&&b.isSame(n.minDate,"year")),q.end=!!(ne&&b.isSame(ne,"year"))),T.isSame(b)&&(q.type="today"),q.text=H;const ie=b.toDate();q.disabled=n.disabledDate&&n.disabledDate(ie)||!1,A[F]=q}}return E}),d=()=>{c.value?.focus()},I=E=>{const T={},Y=U().locale(x.value),A=E.text;return T.disabled=n.disabledDate?a(A,x.value).every(n.disabledDate):!1,T.today=Y.year()===A,T.current=qe(n.parsedValue).findIndex(F=>F.year()===A)>=0,E.inRange&&(T["in-range"]=!0,E.start&&(T["start-date"]=!0),E.end&&(T["end-date"]=!0)),T},S=E=>{const T=E.text;return qe(n.date).findIndex(Y=>Y.year()===T)>=0},y=E=>{const T=E.target?.closest("td");if(!T||!T.textContent||Na(T,"disabled"))return;const Y=T.cellIndex,F=T.parentNode.rowIndex*4+Y+u.value,q=U().year(F);if(n.selectionMode==="range")n.rangeState.selecting?(n.minDate&&q>=n.minDate?i("pick",{minDate:n.minDate,maxDate:q}):i("pick",{minDate:q,maxDate:n.minDate}),i("select",!1)):(i("pick",{minDate:q,maxDate:null}),i("select",!0));else if(n.selectionMode==="years"){if(E.type==="keydown"){i("pick",qe(n.parsedValue),!1);return}const H=za(q.startOf("year"),x.value,n.disabledDate),b=Na(T,"current")?qe(n.parsedValue).filter(ne=>ne?.year()!==F):qe(n.parsedValue).concat([H]);i("pick",b)}else i("pick",F)},B=E=>{if(!n.rangeState.selecting)return;const T=E.target?.closest("td");if(!T)return;const Y=T.parentNode.rowIndex,A=T.cellIndex;D.value[Y][A].disabled||(Y!==k.value||A!==R.value)&&(k.value=Y,R.value=A,i("changerange",{selecting:!0,endDate:U().year(u.value).add(Y*4+A,"year")}))};return $e(()=>n.date,async()=>{w.value?.contains(document.activeElement)&&(await Ue(),c.value?.focus())}),l({focus:d}),(E,T)=>(_(),J("table",{role:"grid","aria-label":e(g)("el.datepicker.yearTablePrompt"),class:h(e(o).b()),onClick:y,onMousemove:B},[K("tbody",{ref_key:"tbodyRef",ref:w},[(_(!0),J(Ce,null,Ye(D.value,(Y,A)=>(_(),J("tr",{key:A},[(_(!0),J(Ce,null,Ye(Y,(F,q)=>(_(),J("td",{key:`${A}_${q}`,ref_for:!0,ref:H=>S(F)&&(c.value=H),class:h(["available",I(F)]),"aria-selected":S(F),"aria-label":String(F.text),tabindex:S(F)?0:-1,onKeydown:[ma(Ze(y,["prevent","stop"]),["space"]),ma(Ze(y,["prevent","stop"]),["enter"])]},[le(st,{cell:F},null,8,["cell"])],42,hr))),128))]))),128))],512)],42,br))}}),yr=["onClick"],kr=["aria-label"],Dr=["aria-label"],wr=["aria-label"],Sr=["aria-label"],xr=["disabled"],Pr=["disabled"],Cr=Le({__name:"panel-date-pick",props:Jn,emits:["pick","set-picker-option","panel-change"],setup(t,{emit:l}){const r=(f,L,te)=>!0,a=t,n=l,i=Ee("picker-panel"),o=Ee("date-picker"),g=et(),x=at(),{t:w,lang:c}=He(G(ba)),u=Je("EP_PICKER_BASE"),M=Je(hn),{shortcuts:k,disabledDate:R,cellClassName:D,defaultTime:d}=u.props,I=We(u.props,"defaultValue"),S=G(),y=G(U().locale(c.value)),B=G(!1);let E=!1;const T=C(()=>U(d).locale(c.value)),Y=C(()=>y.value.month()),A=C(()=>y.value.year()),F=G([]),q=G(null),H=G(null),b=f=>F.value.length>0?r(f,F.value,a.format||"HH:mm:ss"):!0,ne=f=>d&&!ke.value&&!B.value&&!E?T.value.year(f.year()).month(f.month()).date(f.date()):Me.value?f.millisecond(0):f.startOf("day"),X=(f,...L)=>{if(!f)n("pick",f,...L);else if(ye(f)){const te=f.map(ne);n("pick",te,...L)}else n("pick",ne(f),...L);q.value=null,H.value=null,B.value=!1,E=!1},ie=async(f,L)=>{if(P.value==="date"){f=f;let te=a.parsedValue?a.parsedValue.year(f.year()).month(f.month()).date(f.date()):f;b(te),y.value=te,X(te,Me.value||L),a.type==="datetime"&&(await Ue(),Xe())}else P.value==="week"?X(f.date):P.value==="dates"&&X(f,!0)},oe=f=>{const L=f?"add":"subtract";y.value=y.value[L](1,"month"),ze("month")},fe=f=>{const L=y.value,te=f?"add":"subtract";y.value=N.value==="year"?L[te](10,"year"):L[te](1,"year"),ze("year")},N=G("date"),v=C(()=>{const f=w("el.datepicker.year");if(N.value==="year"){const L=Math.floor(A.value/10)*10;return f?`${L} ${f} - ${L+9} ${f}`:`${L} - ${L+9}`}return`${A.value} ${f}`}),V=f=>{const L=Ya(f.value)?f.value():f.value;if(L){E=!0,X(U(L).locale(c.value));return}f.onClick&&f.onClick({attrs:g,slots:x,emit:n})},P=C(()=>{const{type:f}=a;return["week","month","months","year","years","dates"].includes(f)?f:"date"}),p=C(()=>P.value==="dates"||P.value==="months"||P.value==="years"),j=C(()=>P.value==="date"?N.value:P.value),m=C(()=>!!k.length),O=async(f,L)=>{P.value==="month"?(y.value=Ca(y.value.year(),f,c.value,R),X(y.value,!1)):P.value==="months"?X(f,L??!0):(y.value=Ca(y.value.year(),f,c.value,R),N.value="date",["month","year","date","week"].includes(P.value)&&(X(y.value,!0),await Ue(),Xe())),ze("month")},W=async(f,L)=>{if(P.value==="year"){const te=y.value.startOf("year").year(f);y.value=za(te,c.value,R),X(y.value,!1)}else if(P.value==="years")X(f,L??!0);else{const te=y.value.year(f);y.value=za(te,c.value,R),N.value="month",["month","year","date","week"].includes(P.value)&&(X(y.value,!0),await Ue(),Xe())}ze("year")},re=async f=>{N.value=f,await Ue(),Xe()},Me=C(()=>a.type==="datetime"||a.type==="datetimerange"),Oe=C(()=>{const f=Me.value||P.value==="dates",L=P.value==="years",te=P.value==="months",Te=N.value==="date",$=N.value==="year",z=N.value==="month";return f&&Te||L&&$||te&&z}),Ve=C(()=>R?a.parsedValue?ye(a.parsedValue)?R(a.parsedValue[0].toDate()):R(a.parsedValue.toDate()):!0:!1),Z=()=>{if(p.value)X(a.parsedValue);else{let f=a.parsedValue;if(!f){const L=U(d).locale(c.value),te=Qe();f=L.year(te.year()).month(te.month()).date(te.date())}y.value=f,X(f)}},ee=C(()=>R?R(U().locale(c.value).toDate()):!1),se=()=>{const L=U().locale(c.value).toDate();B.value=!0,(!R||!R(L))&&b(L)&&(y.value=U().locale(c.value),X(y.value))},me=C(()=>a.timeFormat||Ct(a.format)),ve=C(()=>a.dateFormat||Mt(a.format)),ke=C(()=>{if(H.value)return H.value;if(!(!a.parsedValue&&!I.value))return(a.parsedValue||y.value).format(me.value)}),we=C(()=>{if(q.value)return q.value;if(!(!a.parsedValue&&!I.value))return(a.parsedValue||y.value).format(ve.value)}),Se=G(!1),Re=()=>{Se.value=!0},Ae=()=>{Se.value=!1},Ie=f=>({hour:f.hour(),minute:f.minute(),second:f.second(),year:f.year(),month:f.month(),date:f.date()}),ta=(f,L,te)=>{const{hour:Te,minute:$,second:z}=Ie(f),Q=a.parsedValue?a.parsedValue.hour(Te).minute($).second(z):f;y.value=Q,X(y.value,!0),te||(Se.value=L)},ha=f=>{const L=U(f,me.value).locale(c.value);if(L.isValid()&&b(L)){const{year:te,month:Te,date:$}=Ie(y.value);y.value=L.year(te).month(Te).date($),H.value=null,Se.value=!1,X(y.value,!0)}},ua=f=>{const L=U(f,ve.value).locale(c.value);if(L.isValid()){if(R&&R(L.toDate()))return;const{hour:te,minute:Te,second:$}=Ie(y.value);y.value=L.hour(te).minute(Te).second($),q.value=null,X(y.value,!0)}},na=f=>U.isDayjs(f)&&f.isValid()&&(R?!R(f.toDate()):!0),ya=f=>ye(f)?f.map(L=>L.format(a.format)):f.format(a.format),ka=f=>U(f,a.format).locale(c.value),Qe=()=>{const f=U(I.value).locale(c.value);if(!I.value){const L=T.value;return U().hour(L.hour()).minute(L.minute()).second(L.second()).locale(c.value)}return f},Xe=()=>{["week","month","year","date"].includes(P.value)&&S.value?.focus()},Da=()=>{Xe(),P.value==="week"&&ra(Pe.down)},ce=f=>{const{code:L}=f;[Pe.up,Pe.down,Pe.left,Pe.right,Pe.home,Pe.end,Pe.pageUp,Pe.pageDown].includes(L)&&(ra(L),f.stopPropagation(),f.preventDefault()),[Pe.enter,Pe.space,Pe.numpadEnter].includes(L)&&q.value===null&&H.value===null&&(f.preventDefault(),X(y.value,!1))},ra=f=>{const{up:L,down:te,left:Te,right:$,home:z,end:Q,pageUp:Ne,pageDown:ue}=Pe,ea={year:{[L]:-4,[te]:4,[Te]:-1,[$]:1,offset:(ge,Be)=>ge.setFullYear(ge.getFullYear()+Be)},month:{[L]:-4,[te]:4,[Te]:-1,[$]:1,offset:(ge,Be)=>ge.setMonth(ge.getMonth()+Be)},week:{[L]:-1,[te]:1,[Te]:-1,[$]:1,offset:(ge,Be)=>ge.setDate(ge.getDate()+Be*7)},date:{[L]:-7,[te]:7,[Te]:-1,[$]:1,[z]:ge=>-ge.getDay(),[Q]:ge=>-ge.getDay()+6,[Ne]:ge=>-new Date(ge.getFullYear(),ge.getMonth(),0).getDate(),[ue]:ge=>new Date(ge.getFullYear(),ge.getMonth()+1,0).getDate(),offset:(ge,Be)=>ge.setDate(ge.getDate()+Be)}},ca=y.value.toDate();for(;Math.abs(y.value.diff(ca,"year",!0))<1;){const ge=ea[j.value];if(!ge)return;if(ge.offset(ca,Ya(ge[f])?ge[f](ca):ge[f]??0),R&&R(ca))break;const Be=U(ca).locale(c.value);y.value=Be,n("pick",Be,!0);break}},ze=f=>{n("panel-change",y.value.toDate(),f,N.value)};return $e(()=>P.value,f=>{if(["month","year"].includes(f)){N.value=f;return}else if(f==="years"){N.value="year";return}else if(f==="months"){N.value="month";return}N.value="date"},{immediate:!0}),$e(()=>N.value,()=>{M?.updatePopper()}),$e(()=>I.value,f=>{f&&(y.value=Qe())},{immediate:!0}),$e(()=>a.parsedValue,f=>{if(f){if(p.value||ye(f))return;y.value=f}else y.value=Qe()},{immediate:!0}),n("set-picker-option",["isValidValue",na]),n("set-picker-option",["formatToString",ya]),n("set-picker-option",["parseUserInput",ka]),n("set-picker-option",["handleFocusPicker",Da]),(f,L)=>(_(),J("div",{class:h([e(i).b(),e(o).b(),{"has-sidebar":f.$slots.sidebar||m.value,"has-time":Me.value}])},[K("div",{class:h(e(i).e("body-wrapper"))},[he(f.$slots,"sidebar",{class:h(e(i).e("sidebar"))}),m.value?(_(),J("div",{key:0,class:h(e(i).e("sidebar"))},[(_(!0),J(Ce,null,Ye(e(k),(te,Te)=>(_(),J("button",{key:Te,type:"button",class:h(e(i).e("shortcut")),onClick:$=>V(te)},be(te.text),11,yr))),128))],2)):pe("",!0),K("div",{class:h(e(i).e("body"))},[Me.value?(_(),J("div",{key:0,class:h(e(o).e("time-header"))},[K("span",{class:h(e(o).e("editor-wrap"))},[le(e(da),{placeholder:e(w)("el.datepicker.selectDate"),"model-value":we.value,"validate-event":!1,onInput:L[0]||(L[0]=te=>q.value=te),onChange:ua},null,8,["placeholder","model-value"])],2),je((_(),J("span",{class:h(e(o).e("editor-wrap"))},[le(e(da),{placeholder:e(w)("el.datepicker.selectTime"),"model-value":ke.value,"validate-event":!1,onFocus:Re,onInput:L[1]||(L[1]=te=>H.value=te),onChange:ha},null,8,["placeholder","model-value"]),le(e(Ka),{visible:Se.value,format:me.value,"parsed-value":y.value,onPick:ta},null,8,["visible","format","parsed-value"])],2)),[[e(Ua),Ae]])],2)):pe("",!0),je(K("div",{class:h([e(o).e("header"),(N.value==="year"||N.value==="month")&&e(o).e("header--bordered")])},[K("span",{class:h(e(o).e("prev-btn"))},[je(K("button",{type:"button","aria-label":e(w)("el.datepicker.prevYear"),class:h(["d-arrow-left",e(i).e("icon-btn")]),onClick:L[2]||(L[2]=te=>fe(!1))},[he(f.$slots,"prev-year",{},()=>[le(e(De),{name:"solid chevron-left"})])],10,kr),[[oa,N.value!=="date"]]),je(K("button",{type:"button","aria-label":e(w)("el.datepicker.prevMonth"),class:h([e(i).e("icon-btn"),"arrow-left"]),onClick:L[3]||(L[3]=te=>oe(!1))},[he(f.$slots,"prev-month",{},()=>[le(e(De),{name:"solid chevron-left"})])],10,Dr),[[oa,N.value==="date"]])],2),K("span",{role:"button",class:h(e(o).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:L[4]||(L[4]=ma(te=>re("year"),["enter"])),onClick:L[5]||(L[5]=te=>re("year"))},be(v.value),35),je(K("span",{role:"button","aria-live":"polite",tabindex:"0",class:h([e(o).e("header-label"),{active:N.value==="month"}]),onKeydown:L[6]||(L[6]=ma(te=>re("month"),["enter"])),onClick:L[7]||(L[7]=te=>re("month"))},be(e(w)(`el.datepicker.month${Y.value+1}`)),35),[[oa,N.value==="date"]]),K("span",{class:h(e(o).e("next-btn"))},[je(K("button",{type:"button","aria-label":e(w)("el.datepicker.nextMonth"),class:h([e(i).e("icon-btn"),"arrow-right"]),onClick:L[8]||(L[8]=te=>oe(!0))},[he(f.$slots,"next-month",{},()=>[le(e(De),{name:"solid chevron-right"})])],10,wr),[[oa,N.value==="date"]]),je(K("button",{type:"button","aria-label":e(w)("el.datepicker.nextYear"),class:h([e(i).e("icon-btn"),"d-arrow-right"]),onClick:L[9]||(L[9]=te=>fe(!0))},[he(f.$slots,"next-year",{},()=>[le(e(De),{name:"solid chevron-right"})])],10,Sr),[[oa,N.value!=="date"]])],2)],2),[[oa,N.value!=="time"]]),K("div",{class:h(e(i).e("content")),onKeydown:ce},[N.value==="date"?(_(),Ge(Ja,{key:0,ref_key:"currentViewRef",ref:S,"selection-mode":P.value,date:y.value,"parsed-value":f.parsedValue,"disabled-date":e(R),"cell-class-name":e(D),onPick:ie},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):pe("",!0),N.value==="year"?(_(),Ge(Qa,{key:1,ref_key:"currentViewRef",ref:S,"selection-mode":P.value,date:y.value,"disabled-date":e(R),"parsed-value":f.parsedValue,onPick:W},null,8,["selection-mode","date","disabled-date","parsed-value"])):pe("",!0),N.value==="month"?(_(),Ge(Za,{key:2,ref_key:"currentViewRef",ref:S,"selection-mode":P.value,date:y.value,"parsed-value":f.parsedValue,"disabled-date":e(R),onPick:O},null,8,["selection-mode","date","parsed-value","disabled-date"])):pe("",!0)],34)],2)],2),je(K("div",{class:h(e(i).e("footer"))},[je(K("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:ee.value,onClick:se},be(e(w)("el.datepicker.now")),9,xr),[[oa,!p.value&&f.showNow]]),K("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:Ve.value,onClick:Z},be(e(w)("el.datepicker.confirm")),9,Pr)],2),[[oa,Oe.value]])],2))}}),Mr=Fe({..._t,...rt,visible:Boolean}),Gt=t=>{const{emit:l}=St(),r=et(),a=at();return i=>{const o=Ya(i.value)?i.value():i.value;if(o){l("pick",[U(o[0]).locale(t.value),U(o[1]).locale(t.value)]);return}i.onClick&&i.onClick({attrs:r,slots:a,emit:l})}},qt=(t,{defaultValue:l,leftDate:r,rightDate:a,unit:n,onParsedValueChanged:i})=>{const{emit:o}=St(),{pickerNs:g}=Je(tt),x=Ee("date-range-picker"),{t:w,lang:c}=He(G(ba)),u=Gt(c),M=G(),k=G(),R=G({endDate:null,selecting:!1}),D=B=>{R.value=B},d=(B=!1)=>{const E=e(M),T=e(k);xa([E,T])&&o("pick",[E,T],B)},I=B=>{R.value.selecting=B,B||(R.value.endDate=null)},S=B=>{if(ye(B)&&B.length===2){const[E,T]=B;M.value=E,r.value=E,k.value=T,i(e(M),e(k))}else y()},y=()=>{const[B,E]=lt(e(l),{lang:e(c),unit:n,unlinkPanels:t.unlinkPanels});M.value=void 0,k.value=void 0,r.value=B,a.value=E};return $e(l,B=>{B&&y()},{immediate:!0}),$e(()=>t.parsedValue,S,{immediate:!0}),{minDate:M,maxDate:k,rangeState:R,lang:c,ppNs:g,drpNs:x,handleChangeRange:D,handleRangeConfirm:d,handleShortcutClick:u,onSelect:I,onReset:S,t:w}},Rr=["aria-pressed","onClick"],Er=["aria-label"],Fr=["disabled","aria-label"],Vr=["disabled","aria-label"],Ir={"aria-live":"polite"},Tr=["disabled","aria-label"],$r=["disabled","aria-label"],Or=["aria-label"],Ar={"aria-live":"polite"},Ma="month",Yr=Le({__name:"panel-date-range",props:Mr,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(t,{emit:l}){const r=t,a=l,n=Je("EP_PICKER_BASE"),{disabledDate:i,cellClassName:o,defaultTime:g,clearable:x}=n.props,w=We(n.props,"format"),c=We(n.props,"shortcuts"),u=We(n.props,"defaultValue"),{lang:M}=He(G(ba)),k=G(U().locale(M.value)),R=G(U().locale(M.value).add(1,Ma)),{minDate:D,maxDate:d,rangeState:I,ppNs:S,drpNs:y,handleChangeRange:B,handleRangeConfirm:E,handleShortcutClick:T,onSelect:Y,onReset:A,t:F}=qt(r,{defaultValue:u,leftDate:k,rightDate:R,unit:Ma,onParsedValueChanged:ze});$e(()=>r.visible,$=>{!$&&I.value.selecting&&(A(r.parsedValue),Y(!1))});const q=G({min:null,max:null}),H=G({min:null,max:null}),b=C(()=>`${k.value.year()} ${F("el.datepicker.year")} ${F(`el.datepicker.month${k.value.month()+1}`)}`),ne=C(()=>`${R.value.year()} ${F("el.datepicker.year")} ${F(`el.datepicker.month${R.value.month()+1}`)}`),X=C(()=>k.value.year()),ie=C(()=>k.value.month()),oe=C(()=>R.value.year()),fe=C(()=>R.value.month()),N=C(()=>!!c.value.length);function v($){return ar({shortcutValue:Ya($.value)?$.value():$.value,minDate:D.value,maxDate:d.value})}const V=C(()=>q.value.min!==null?q.value.min:D.value?D.value.format(O.value):""),P=C(()=>q.value.max!==null?q.value.max:d.value||D.value?(d.value||D.value).format(O.value):""),p=C(()=>H.value.min!==null?H.value.min:D.value?D.value.format(m.value):""),j=C(()=>H.value.max!==null?H.value.max:d.value||D.value?(d.value||D.value).format(m.value):""),m=C(()=>r.timeFormat||Ct(w.value)),O=C(()=>r.dateFormat||Mt(w.value)),W=$=>xa($)&&(i?!i($[0].toDate())&&!i($[1].toDate()):!0),re=()=>{k.value=k.value.subtract(1,"month"),r.unlinkPanels||(R.value=k.value.add(1,"month")),se("month")},Me=()=>{r.unlinkPanels?R.value=R.value.add(1,"month"):(k.value=k.value.add(1,"month"),R.value=k.value.add(1,"month")),se("month")},Oe=()=>{k.value=k.value.add(1,"year"),se("year")},Ve=()=>{k.value=k.value.add(1,"month"),se("month")},Z=()=>{R.value=R.value.subtract(1,"year"),se("year")},ee=()=>{R.value=R.value.subtract(1,"month"),se("month")},se=$=>{a("panel-change",[k.value.toDate(),R.value.toDate()],$)},me=C(()=>{const $=(ie.value+1)%12,z=ie.value+1>=12?1:0;return r.unlinkPanels&&new Date(X.value+z,$)<new Date(oe.value,fe.value)}),ve=C(()=>r.unlinkPanels&&oe.value*12+fe.value-(X.value*12+ie.value+1)>=12),ke=C(()=>!(D.value&&d.value&&!I.value.selecting&&xa([D.value,d.value]))),we=C(()=>r.type==="datetime"||r.type==="datetimerange"),Se=($,z)=>{if($)return g?U(g[z]||g).locale(M.value).year($.year()).month($.month()).date($.date()):$},Re=($,z=!0)=>{const Q=$.minDate,Ne=$.maxDate,ue=Se(Q,0),ea=Se(Ne,1);d.value===ea&&D.value===ue||(a("calendar-change",[Q.toDate(),Ne&&Ne.toDate()]),d.value=ea,D.value=ue,ea?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[ue?ue.format(w.value):"",""]]),!(!z||we.value)&&E())},Ae=G(!1),Ie=G(!1),ta=()=>{Ae.value=!1},ha=()=>{Ie.value=!1},ua=($,z)=>{q.value[z]=$;const Q=U($,O.value).locale(M.value);if(Q.isValid()){if(i&&i(Q.toDate()))return;z==="min"?(k.value=Q,D.value=(D.value||k.value).year(Q.year()).month(Q.month()).date(Q.date()),!r.unlinkPanels&&(!d.value||d.value.isBefore(D.value))&&(R.value=Q.add(1,"month"),d.value=D.value.add(1,"month"))):(R.value=Q,d.value=(d.value||R.value).year(Q.year()).month(Q.month()).date(Q.date()),!r.unlinkPanels&&(!D.value||D.value.isAfter(d.value))&&(k.value=Q.subtract(1,"month"),D.value=d.value.subtract(1,"month")))}},na=($,z)=>{q.value[z]=null},ya=($,z)=>{H.value[z]=$;const Q=U($,m.value).locale(M.value);Q.isValid()&&(z==="min"?(Ae.value=!0,D.value=(D.value||k.value).hour(Q.hour()).minute(Q.minute()).second(Q.second())):(Ie.value=!0,d.value=(d.value||R.value).hour(Q.hour()).minute(Q.minute()).second(Q.second()),R.value=d.value))},ka=($,z)=>{H.value[z]=null,z==="min"?(k.value=D.value,Ae.value=!1,(!d.value||d.value.isBefore(D.value))&&(d.value=D.value)):(R.value=d.value,Ie.value=!1,d.value&&d.value.isBefore(D.value)&&(D.value=d.value))},Qe=($,z,Q)=>{H.value.min||($&&(k.value=$,D.value=(D.value||k.value).hour($.hour()).minute($.minute()).second($.second())),Q||(Ae.value=z),(!d.value||d.value.isBefore(D.value))&&(d.value=D.value,R.value=$))},Xe=($,z,Q)=>{H.value.max||($&&(R.value=$,d.value=(d.value||R.value).hour($.hour()).minute($.minute()).second($.second())),Q||(Ie.value=z),d.value&&d.value.isBefore(D.value)&&(D.value=d.value))},Da=()=>{k.value=lt(e(u),{lang:e(M),unit:"month",unlinkPanels:r.unlinkPanels})[0],R.value=k.value.add(1,"month"),d.value=void 0,D.value=void 0,a("pick",null)},ce=$=>ye($)?$.map(z=>z.format(w.value)):$.format(w.value),ra=$=>ye($)?$.map(z=>U(z,w.value).locale(M.value)):U($,w.value).locale(M.value);function ze($,z){if(r.unlinkPanels&&z){const Q=$?.year()||0,Ne=$?.month()||0,ue=z.year(),ea=z.month();R.value=Q===ue&&Ne===ea?z.add(1,Ma):z}else R.value=k.value.add(1,Ma),z&&(R.value=R.value.hour(z.hour()).minute(z.minute()).second(z.second()))}const f=G();function L(){return Array.from(f.value?.querySelectorAll("td.available[data-date]")??[])}function te($){const z=$.target.closest("td[data-date]");if(!z)return;if($.key==="Enter"||$.key===" "){$.preventDefault(),z.click();return}if(!Qn.includes($.key))return;const Q=L(),Ne=er({current:z.dataset.date,key:$.key,enabledDates:new Set(Q.map(({dataset:ue})=>ue.date))});Ne&&($.preventDefault(),Q.find(({dataset:ue})=>ue.date===Ne)?.focus())}function Te(){(f.value?.querySelector(`.${S.e("shortcut")}, td.available[data-date][tabindex="0"]`)??L()[0])?.focus()}return a("set-picker-option",["handleFocusPicker",Te]),a("set-picker-option",["isValidValue",W]),a("set-picker-option",["parseUserInput",ra]),a("set-picker-option",["formatToString",ce]),a("set-picker-option",["handleClear",Da]),($,z)=>(_(),J("div",{ref_key:"panelRef",ref:f,class:h([e(S).b(),e(y).b(),{"has-sidebar":$.$slots.sidebar||N.value,"has-time":we.value}])},[K("div",{class:h(e(S).e("body-wrapper"))},[he($.$slots,"sidebar",{class:h(e(S).e("sidebar"))}),N.value?(_(),J("div",{key:0,class:h(e(S).e("sidebar"))},[(_(!0),J(Ce,null,Ye(c.value,(Q,Ne)=>(_(),J("button",{key:Ne,type:"button",class:h([e(S).e("shortcut"),{active:v(Q)}]),"aria-pressed":v(Q),onClick:ue=>e(T)(Q)},be(Q.text),11,Rr))),128))],2)):pe("",!0),K("div",{class:h(e(S).e("body"))},[we.value?(_(),J("div",{key:0,class:h(e(y).e("time-header"))},[K("span",{class:h(e(y).e("editors-wrap"))},[K("span",{class:h(e(y).e("time-picker-wrap"))},[le(e(da),{disabled:e(I).selecting,placeholder:e(F)("el.datepicker.startDate"),class:h(e(y).e("editor")),"model-value":V.value,"validate-event":!1,onInput:z[0]||(z[0]=Q=>ua(Q,"min")),onChange:z[1]||(z[1]=Q=>na(Q,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),je((_(),J("span",{class:h(e(y).e("time-picker-wrap"))},[le(e(da),{class:h(e(y).e("editor")),disabled:e(I).selecting,placeholder:e(F)("el.datepicker.startTime"),"model-value":p.value,"validate-event":!1,onFocus:z[2]||(z[2]=Q=>Ae.value=!0),onInput:z[3]||(z[3]=Q=>ya(Q,"min")),onChange:z[4]||(z[4]=Q=>ka(Q,"min"))},null,8,["class","disabled","placeholder","model-value"]),le(e(Ka),{visible:Ae.value,format:m.value,"datetime-role":"start","parsed-value":k.value,onPick:Qe},null,8,["visible","format","parsed-value"])],2)),[[e(Ua),ta]])],2),K("span",null,[le(e(De),{name:"solid chevron-right"})]),K("span",{class:h([e(y).e("editors-wrap"),"is-right"])},[K("span",{class:h(e(y).e("time-picker-wrap"))},[le(e(da),{class:h(e(y).e("editor")),disabled:e(I).selecting,placeholder:e(F)("el.datepicker.endDate"),"model-value":P.value,readonly:!e(D),"validate-event":!1,onInput:z[5]||(z[5]=Q=>ua(Q,"max")),onChange:z[6]||(z[6]=Q=>na(Q,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),je((_(),J("span",{class:h(e(y).e("time-picker-wrap"))},[le(e(da),{class:h(e(y).e("editor")),disabled:e(I).selecting,placeholder:e(F)("el.datepicker.endTime"),"model-value":j.value,readonly:!e(D),"validate-event":!1,onFocus:z[7]||(z[7]=Q=>e(D)&&(Ie.value=!0)),onInput:z[8]||(z[8]=Q=>ya(Q,"max")),onChange:z[9]||(z[9]=Q=>ka(Q,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),le(e(Ka),{"datetime-role":"end",visible:Ie.value,format:m.value,"parsed-value":R.value,onPick:Xe},null,8,["visible","format","parsed-value"])],2)),[[e(Ua),ha]])],2)],2)):pe("",!0),K("div",{class:h([[e(S).e("content"),e(y).e("content")],"is-left"]),onKeydown:te},[K("div",{class:h(e(y).e("header"))},[K("button",{type:"button",class:h([e(S).e("icon-btn"),"arrow-left"]),"aria-label":e(F)("el.datepicker.prevMonth"),onClick:re},[he($.$slots,"prev-month",{},()=>[le(e(De),{name:"solid chevron-left"})])],10,Er),$.unlinkPanels?(_(),J("button",{key:0,type:"button",disabled:!ve.value,class:h([[e(S).e("icon-btn"),{"is-disabled":!ve.value}],"d-arrow-right"]),"aria-label":e(F)("el.datepicker.nextYear"),onClick:Oe},[he($.$slots,"next-year",{},()=>[le(e(De),{name:"solid chevron-right"})])],10,Fr)):pe("",!0),$.unlinkPanels?(_(),J("button",{key:1,type:"button",disabled:!me.value,class:h([[e(S).e("icon-btn"),{"is-disabled":!me.value}],"arrow-right"]),"aria-label":e(F)("el.datepicker.nextMonth"),onClick:Ve},[he($.$slots,"next-month",{},()=>[le(e(De),{name:"solid chevron-right"})])],10,Vr)):pe("",!0),K("div",Ir,be(b.value),1)],2),le(Ja,{"selection-mode":"range",date:k.value,"min-date":e(D),"max-date":e(d),"range-state":e(I),"disabled-date":e(i),"cell-class-name":e(o),onChangerange:e(B),onPick:Re,onSelect:e(Y)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],34),K("div",{class:h([[e(S).e("content"),e(y).e("content")],"is-right"]),onKeydown:te},[K("div",{class:h(e(y).e("header"))},[$.unlinkPanels?(_(),J("button",{key:0,type:"button",disabled:!ve.value,class:h([[e(S).e("icon-btn"),{"is-disabled":!ve.value}],"d-arrow-left"]),"aria-label":e(F)("el.datepicker.prevYear"),onClick:Z},[he($.$slots,"prev-year",{},()=>[le(e(De),{name:"solid chevron-left"})])],10,Tr)):pe("",!0),$.unlinkPanels?(_(),J("button",{key:1,type:"button",disabled:!me.value,class:h([[e(S).e("icon-btn"),{"is-disabled":!me.value}],"arrow-left"]),"aria-label":e(F)("el.datepicker.prevMonth"),onClick:ee},[he($.$slots,"prev-month",{},()=>[le(e(De),{name:"solid chevron-left"})])],10,$r)):pe("",!0),K("button",{type:"button",class:h([e(S).e("icon-btn"),"arrow-right"]),"aria-label":e(F)("el.datepicker.nextMonth"),onClick:Me},[he($.$slots,"next-month",{},()=>[le(e(De),{name:"solid chevron-right"})])],10,Or),K("div",Ar,be(ne.value),1)],2),le(Ja,{"selection-mode":"range",date:R.value,"min-date":e(D),"max-date":e(d),"range-state":e(I),"disabled-date":e(i),"cell-class-name":e(o),onChangerange:e(B),onPick:Re,onSelect:e(Y)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],34)],2)],2),we.value?(_(),J("div",{key:0,class:h(e(S).e("footer"))},[e(x)?(_(),Ge(e(mt),{key:0,text:"",size:"sm",class:h(e(S).e("link-btn")),onClick:Da},{default:Ke(()=>[wa(be(e(F)("el.datepicker.clear")),1)]),_:1},8,["class"])):pe("",!0),le(e(mt),{plain:"",size:"sm",class:h(e(S).e("link-btn")),disabled:ke.value,onClick:z[10]||(z[10]=Q=>e(E)(!1))},{default:Ke(()=>[wa(be(e(F)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):pe("",!0)],2))}}),Lr=Fe({...rt}),Nr=["pick","set-picker-option","calendar-change"],Br=({unlinkPanels:t,leftDate:l,rightDate:r})=>{const{t:a}=He(),n=()=>{l.value=l.value.subtract(1,"year"),t.value||(r.value=r.value.subtract(1,"year"))},i=()=>{t.value||(l.value=l.value.add(1,"year")),r.value=r.value.add(1,"year")},o=()=>{l.value=l.value.add(1,"year")},g=()=>{r.value=r.value.subtract(1,"year")},x=C(()=>`${l.value.year()} ${a("el.datepicker.year")}`),w=C(()=>`${r.value.year()} ${a("el.datepicker.year")}`),c=C(()=>l.value.year()),u=C(()=>r.value.year()===l.value.year()?l.value.year()+1:r.value.year());return{leftPrevYear:n,rightNextYear:i,leftNextYear:o,rightPrevYear:g,leftLabel:x,rightLabel:w,leftYear:c,rightYear:u}},_r=["onClick"],jr=["disabled"],Gr=["disabled"],Ra="year",qr=Le({name:"DatePickerMonthRange",__name:"panel-month-range",props:Lr,emits:Nr,setup(t,{emit:l}){const r=t,a=l,{lang:n}=He(G(ba)),i=Je("EP_PICKER_BASE"),{shortcuts:o,disabledDate:g}=i.props,x=We(i.props,"format"),w=We(i.props,"defaultValue"),c=G(U().locale(n.value)),u=G(U().locale(n.value).add(1,Ra)),{minDate:M,maxDate:k,rangeState:R,ppNs:D,drpNs:d,handleChangeRange:I,handleRangeConfirm:S,handleShortcutClick:y,onSelect:B}=qt(r,{defaultValue:w,leftDate:c,rightDate:u,unit:Ra,onParsedValueChanged:v}),E=C(()=>!!o.length),{leftPrevYear:T,rightNextYear:Y,leftNextYear:A,rightPrevYear:F,leftLabel:q,rightLabel:H,leftYear:b,rightYear:ne}=Br({unlinkPanels:We(r,"unlinkPanels"),leftDate:c,rightDate:u}),X=C(()=>r.unlinkPanels&&ne.value>b.value+1),ie=(V,P=!0)=>{const p=V.minDate,j=V.maxDate;k.value===j&&M.value===p||(a("calendar-change",[p.toDate(),j&&j.toDate()]),k.value=j,M.value=p,j?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[p?p.format(x.value):"",""]]),P&&S())},oe=()=>{c.value=lt(e(w),{lang:e(n),unit:"year",unlinkPanels:r.unlinkPanels})[0],u.value=c.value.add(1,"year"),a("pick",null)},fe=V=>ye(V)?V.map(P=>P.format(x.value)):V.format(x.value),N=V=>ye(V)?V.map(P=>U(P,x.value).locale(n.value)):U(V,x.value).locale(n.value);function v(V,P){if(r.unlinkPanels&&P){const p=V?.year()||0,j=P.year();u.value=p===j?P.add(1,Ra):P}else u.value=c.value.add(1,Ra)}return a("set-picker-option",["isValidValue",xa]),a("set-picker-option",["formatToString",fe]),a("set-picker-option",["parseUserInput",N]),a("set-picker-option",["handleClear",oe]),(V,P)=>(_(),J("div",{class:h([e(D).b(),e(d).b(),{"has-sidebar":!!V.$slots.sidebar||E.value}])},[K("div",{class:h(e(D).e("body-wrapper"))},[he(V.$slots,"sidebar",{class:h(e(D).e("sidebar"))}),E.value?(_(),J("div",{key:0,class:h(e(D).e("sidebar"))},[(_(!0),J(Ce,null,Ye(e(o),(p,j)=>(_(),J("button",{key:j,type:"button",class:h(e(D).e("shortcut")),onClick:m=>e(y)(p)},be(p.text),11,_r))),128))],2)):pe("",!0),K("div",{class:h(e(D).e("body"))},[K("div",{class:h([[e(D).e("content"),e(d).e("content")],"is-left"])},[K("div",{class:h(e(d).e("header"))},[K("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-left"]),onClick:P[0]||(P[0]=(...p)=>e(T)&&e(T)(...p))},[he(V.$slots,"prev-year",{},()=>[le(e(De),{name:"solid chevron-left"})])],2),V.unlinkPanels?(_(),J("button",{key:0,type:"button",disabled:!X.value,class:h([[e(D).e("icon-btn"),{[e(D).is("disabled")]:!X.value}],"d-arrow-right"]),onClick:P[1]||(P[1]=(...p)=>e(A)&&e(A)(...p))},[he(V.$slots,"next-year",{},()=>[le(e(De),{name:"solid chevron-right"})])],10,jr)):pe("",!0),K("div",null,be(e(q)),1)],2),le(Za,{"selection-mode":"range",date:c.value,"min-date":e(M),"max-date":e(k),"range-state":e(R),"disabled-date":e(g),onChangerange:e(I),onPick:ie,onSelect:e(B)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),K("div",{class:h([[e(D).e("content"),e(d).e("content")],"is-right"])},[K("div",{class:h(e(d).e("header"))},[V.unlinkPanels?(_(),J("button",{key:0,type:"button",disabled:!X.value,class:h([[e(D).e("icon-btn"),{"is-disabled":!X.value}],"d-arrow-left"]),onClick:P[2]||(P[2]=(...p)=>e(F)&&e(F)(...p))},[he(V.$slots,"prev-year",{},()=>[le(e(De),{name:"solid chevron-left"})])],10,Gr)):pe("",!0),K("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-right"]),onClick:P[3]||(P[3]=(...p)=>e(Y)&&e(Y)(...p))},[he(V.$slots,"next-year",{},()=>[le(e(De),{name:"solid chevron-right"})])],2),K("div",null,be(e(H)),1)],2),le(Za,{"selection-mode":"range",date:u.value,"min-date":e(M),"max-date":e(k),"range-state":e(R),"disabled-date":e(g),onChangerange:e(I),onPick:ie,onSelect:e(B)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}}),Hr=Fe({...rt}),Kr=["pick","set-picker-option","calendar-change"],Ur=({unlinkPanels:t,leftDate:l,rightDate:r})=>{const a=()=>{l.value=l.value.subtract(10,"year"),t.value||(r.value=r.value.subtract(10,"year"))},n=()=>{t.value||(l.value=l.value.add(10,"year")),r.value=r.value.add(10,"year")},i=()=>{l.value=l.value.add(10,"year")},o=()=>{r.value=r.value.subtract(10,"year")},g=C(()=>{const u=Math.floor(l.value.year()/10)*10;return`${u}-${u+9}`}),x=C(()=>{const u=Math.floor(r.value.year()/10)*10;return`${u}-${u+9}`}),w=C(()=>Math.floor(l.value.year()/10)*10+9),c=C(()=>Math.floor(r.value.year()/10)*10);return{leftPrevYear:a,rightNextYear:n,leftNextYear:i,rightPrevYear:o,leftLabel:g,rightLabel:x,leftYear:w,rightYear:c}},zr=["onClick"],Wr=["disabled"],Jr=["disabled"],vt="year",Zr=Le({name:"DatePickerYearRange",__name:"panel-year-range",props:Hr,emits:Kr,setup(t,{emit:l}){const r=t,a=l,{lang:n}=He(G(ba)),i=G(U().locale(n.value)),o=G(i.value.add(10,"year")),{pickerNs:g}=Je(tt),x=Ee("date-range-picker"),w=C(()=>!!ie.length),c=C(()=>[g.b(),x.b(),{"has-sidebar":!!at().sidebar||w.value}]),u=C(()=>({content:[g.e("content"),x.e("content"),"is-left"],arrowLeftBtn:[g.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[g.e("icon-btn"),{[g.is("disabled")]:!T.value},"d-arrow-right"]})),M=C(()=>({content:[g.e("content"),x.e("content"),"is-right"],arrowLeftBtn:[g.e("icon-btn"),{"is-disabled":!T.value},"d-arrow-left"],arrowRightBtn:[g.e("icon-btn"),"d-arrow-right"]})),k=Gt(n),{leftPrevYear:R,rightNextYear:D,leftNextYear:d,rightPrevYear:I,leftLabel:S,rightLabel:y,leftYear:B,rightYear:E}=Ur({unlinkPanels:We(r,"unlinkPanels"),leftDate:i,rightDate:o}),T=C(()=>r.unlinkPanels&&E.value>B.value+1),Y=G(),A=G(),F=G({endDate:null,selecting:!1}),q=m=>{F.value=m},H=(m,O=!0)=>{const W=m.minDate,re=m.maxDate;A.value===re&&Y.value===W||(a("calendar-change",[W.toDate(),re&&re.toDate()]),A.value=re,Y.value=W,re?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[W?W.format(fe.value):"",""]]),O&&b())},b=(m=!1)=>{xa([Y.value,A.value])&&a("pick",[Y.value,A.value],m)},ne=m=>{F.value.selecting=m,m||(F.value.endDate=null)},X=Je("EP_PICKER_BASE"),{shortcuts:ie,disabledDate:oe}=X.props,fe=We(X.props,"format"),N=We(X.props,"defaultValue"),v=()=>{let m;const O=N.value;if(ye(O)){const W=U(O[0]);let re=U(O[1]);return r.unlinkPanels||(re=W.add(10,vt)),[W,re]}else O?m=U(O):m=U();return m=m.locale(n.value),[m,m.add(10,vt)]};$e(()=>N.value,m=>{if(m){const O=v();i.value=O[0],o.value=O[1]}},{immediate:!0}),$e(()=>r.parsedValue,m=>{if(m&&m.length===2)if(Y.value=m[0],A.value=m[1],i.value=Y.value,r.unlinkPanels&&A.value){const O=Y.value.year(),W=A.value.year();o.value=O===W?A.value.add(10,"year"):A.value}else o.value=i.value.add(10,"year");else{const O=v();Y.value=void 0,A.value=void 0,i.value=O[0],o.value=O[1]}},{immediate:!0});const V=m=>ye(m)?m.map(O=>U(O,fe.value).locale(n.value)):U(m,fe.value).locale(n.value),P=m=>ye(m)?m.map(O=>O.format(fe.value)):m.format(fe.value),p=m=>xa(m)&&(oe?!oe(m[0].toDate())&&!oe(m[1].toDate()):!0),j=()=>{const m=v();i.value=m[0],o.value=m[1],A.value=void 0,Y.value=void 0,a("pick",null)};return a("set-picker-option",["isValidValue",p]),a("set-picker-option",["parseUserInput",V]),a("set-picker-option",["formatToString",P]),a("set-picker-option",["handleClear",j]),(m,O)=>(_(),J("div",{class:h(c.value)},[K("div",{class:h(e(g).e("body-wrapper"))},[he(m.$slots,"sidebar",{class:h(e(g).e("sidebar"))}),w.value?(_(),J("div",{key:0,class:h(e(g).e("sidebar"))},[(_(!0),J(Ce,null,Ye(e(ie),(W,re)=>(_(),J("button",{key:re,type:"button",class:h(e(g).e("shortcut")),onClick:Me=>e(k)(W)},be(W.text),11,zr))),128))],2)):pe("",!0),K("div",{class:h(e(g).e("body"))},[K("div",{class:h(u.value.content)},[K("div",{class:h(e(x).e("header"))},[K("button",{type:"button",class:h(u.value.arrowLeftBtn),onClick:O[0]||(O[0]=(...W)=>e(R)&&e(R)(...W))},[he(m.$slots,"prev-year",{},()=>[le(e(De),{name:"solid chevron-left"})])],2),m.unlinkPanels?(_(),J("button",{key:0,type:"button",disabled:!T.value,class:h(u.value.arrowRightBtn),onClick:O[1]||(O[1]=(...W)=>e(d)&&e(d)(...W))},[he(m.$slots,"next-year",{},()=>[le(e(De),{name:"solid chevron-right"})])],10,Wr)):pe("",!0),K("div",null,be(e(S)),1)],2),le(Qa,{"selection-mode":"range",date:i.value,"min-date":Y.value,"max-date":A.value,"range-state":F.value,"disabled-date":e(oe),onChangerange:q,onPick:H,onSelect:ne},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),K("div",{class:h(M.value.content)},[K("div",{class:h(e(x).e("header"))},[m.unlinkPanels?(_(),J("button",{key:0,type:"button",disabled:!T.value,class:h(M.value.arrowLeftBtn),onClick:O[2]||(O[2]=(...W)=>e(I)&&e(I)(...W))},[he(m.$slots,"prev-year",{},()=>[le(e(De),{name:"solid chevron-left"})])],10,Jr)):pe("",!0),K("button",{type:"button",class:h(M.value.arrowRightBtn),onClick:O[3]||(O[3]=(...W)=>e(D)&&e(D)(...W))},[he(m.$slots,"next-year",{},()=>[le(e(De),{name:"solid chevron-right"})])],2),K("div",null,be(e(y)),1)],2),le(Qa,{"selection-mode":"range",date:o.value,"min-date":Y.value,"max-date":A.value,"range-state":F.value,"disabled-date":e(oe),onChangerange:q,onPick:H,onSelect:ne},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}}),Qr=function(t){switch(t){case"daterange":case"datetimerange":return Yr;case"monthrange":return qr;case"yearrange":return Zr;default:return Cr}};U.extend(An);U.extend($n);U.extend(Tt);U.extend(Ln);U.extend(Bn);U.extend(jn);U.extend(qn);U.extend(Kn);const Xr=Le({name:"GDatePicker",install:null,props:Un,emits:["update:modelValue"],setup(t,{expose:l,emit:r,slots:a}){const n=Ee("picker-panel");La("ElPopperOptions",la(We(t,"popperOptions"))),La(tt,{slots:a,pickerNs:n});const i=G();l({focus:()=>{i.value?.focus()},blur:()=>{i.value?.blur()},handleOpen:()=>{i.value?.handleOpen()},handleClose:()=>{i.value?.handleClose()}});const g=x=>{r("update:modelValue",x)};return()=>{const x=t.format??(cn[t.type]||dn),w=Qr(t.type);return Sa(Sa(mn,{...t,format:x,type:t.type,ref:i,"onUpdate:modelValue":g},{default:c=>Sa(w,{...c},{"prev-month":a["prev-month"],"next-month":a["next-month"],"prev-year":a["prev-year"],"next-year":a["next-year"]}),"range-separator":a["range-separator"]}))}}}),eo=Rt(Xr),gt=["hours","minutes","seconds"],ao="HH:mm:ss",ja=(t,l)=>[t>0?t-1:void 0,t,t<l?t+1:void 0],bt=function(t,l){const r=it(t),a=it(l);return r&&a?t.getTime()===l.getTime():!r&&!a?t===l:!1},ht=function(t,l){const r=ye(t),a=ye(l);return r&&a?t.length!==l.length?!1:t.every((n,i)=>bt(n,l[i])):!r&&!a?bt(t,l):!1},yt=function(t,l,r){const a=xt(l)||l==="x"?U(t).locale(r):U(t,l).locale(r);return a.isValid()?a:void 0},kt=function(t,l,r){return xt(l)?t:l==="x"?+t:U(t).locale(r).format(l)},Ga=(t,l)=>{const r=[],a=l?.();for(let n=0;n<t;n++)r.push(a?.includes(n)??!1);return r},Ea=t=>ye(t)?t.map(l=>l.toDate()):t.toDate(),to=240,no=24,ro=8;function Dt({targetTagName:t,isFocused:l,openOnInputClick:r}){return t!=="INPUT"||l||r}function oo({openOnInputClick:t,pickerVisible:l,shiftKey:r,hasPanelFocus:a,isLastInput:n}){return t&&l&&!r&&a&&n}function lo({openOnInputClick:t,isCoarsePointer:l}){return t&&l?"none":void 0}function so({referenceBottom:t,viewportHeight:l}){return Math.max(Math.floor(l-t-no),to)}function wt({ariaLabel:t,placeholder:l}){return[t,l].map(a=>a?.trim()).filter(Boolean).join(" ")||void 0}function io({format:t,startPlaceholder:l,endPlaceholder:r}){return Math.max(t?.length??0,l?.trim().length??0,r?.trim().length??0,ro)}const Ht=Fe({disabledHours:{type:de(Function)},disabledMinutes:{type:de(Function)},disabledSeconds:{type:de(Function)}}),Kt=Fe({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Ut=Fe({id:{type:de([Array,String])},name:{type:de([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:de([String,Object,Boolean]),default:!0},editable:{type:Boolean,default:!0},prefixIcon:{type:de(String),default:""},readonly:Boolean,disabled:Boolean,label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},popperOptions:{type:de(Object),default:()=>({})},modelValue:{type:de([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:de([Date,Array])},defaultTime:{type:de([Date,Array])},isRange:Boolean,...Ht,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:de([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:de(String),values:yn,default:"bottom"},fallbackPlacements:{type:de(Array),default:["bottom","top","right","left"]},...pn,...fn(["ariaLabel"]),openOnInputClick:{type:Boolean,default:!1},showNow:{type:Boolean,default:!0}}),uo=Fe({id:{type:de(Array)},name:{type:de(Array)},modelValue:{type:de([Array,String])},startPlaceholder:String,endPlaceholder:String,label:String,ariaLabel:String}),co=["aria-label","id","name","placeholder","value"],mo=["aria-label","id","name","placeholder","value"],po=Le({name:"PickerRangeTrigger",inheritAttrs:!1,__name:"picker-range-trigger",props:uo,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(t,{expose:l,emit:r}){const a=t,n=r,i=Pn(),o=Ee("input"),g=Ee("date"),x=Ee("range"),w=G(void 0),c=G(null),u=G(),M=G(),{wrapperRef:k,isFocused:R}=Ft(u),D=b=>{n("click",b)},d=b=>{n("mouseenter",b)},I=b=>{n("mouseleave",b)},S=b=>{n("mouseenter",b)},y=b=>{n("startInput",b)},B=b=>{n("endInput",b)},E=b=>{n("startChange",b)},T=b=>{n("endChange",b)},Y=()=>{u.value?.focus()},A=()=>{u.value?.blur(),M.value?.blur()},F=C(()=>{const b=!!q.value||R.value;return{left:b?void 0:`calc(${w.value} + 16px)`,zIndex:b?void 0:10}}),q=C(()=>Vt(a.modelValue)?"":String(a.modelValue));return Et(c,()=>{requestAnimationFrame(()=>{const b=c.value?.getBoundingClientRect().width;w.value=`${b}px`})}),l({focus:Y,blur:A}),(b,ne)=>(_(),J("div",{ref_key:"wrapperRef",ref:k,class:h([e(g).is("active",e(R)),b.$attrs.class]),style:Pa(b.$attrs.style),onClick:D,onMouseenter:d,onMouseleave:I,onTouchstartPassive:S},[he(b.$slots,"prefix"),b.modelValue?(_(),J("div",{key:0,class:h([e(o).e("label")]),style:Pa(F.value)},be(b.label),7)):pe("",!0),K("input",Ha({"aria-label":e(wt)({ariaLabel:b.ariaLabel,placeholder:b.startPlaceholder})},e(i),{id:b.id&&b.id[0],ref_key:"inputRef",ref:u,name:b.name&&b.name[0],placeholder:b.startPlaceholder,value:b.modelValue&&b.modelValue[0],class:e(x).b("input"),onInput:y,onChange:E}),null,16,co),he(b.$slots,"range-separator"),K("input",Ha({"aria-label":e(wt)({ariaLabel:b.ariaLabel,placeholder:b.endPlaceholder})},e(i),{id:b.id&&b.id[1],ref_key:"endInputRef",ref:M,name:b.name&&b.name[1],placeholder:b.endPlaceholder,value:b.modelValue&&b.modelValue[1],class:e(x).b("input"),onInput:B,onChange:T}),null,16,mo),he(b.$slots,"suffix")],38))}}),fo=Le({name:"Picker",__name:"picker",props:Ut,emits:["update:modelValue","change","focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(t,{expose:l,emit:r}){const a=t,n=r,i=et(),{lang:o}=He(),g=Ee("date"),x=Ee("input"),w=Ee("range"),c=G(void 0),u=G(null),{form:M,formItem:k}=Cn(),R=Je("ElPopperOptions",{}),{valueOnClear:D}=vn(a,null),d=G(),I=G(),S=G(!1),y=G(!1),B=G(null);let E=!1;const{isFocused:T,handleFocus:Y,handleBlur:A}=Ft(I,{beforeFocus(){return a.readonly||Ve.value},afterFocus(){S.value=!0},beforeBlur(s){return!E&&d.value?.isFocusInsideContent(s)},afterBlur(){ra(),S.value=!1,E=!1,a.validateEvent&&k?.validate("blur").catch(s=>ut())}}),F=C(()=>{const s=!!q.value||T.value;return{left:s?void 0:`calc(${c.value} + 16px)`,zIndex:s?void 0:10}}),q=C(()=>Vt(a.modelValue)?"":String(a.modelValue)),H=()=>{if(!a.prefixIcon){c.value="0";return}requestAnimationFrame(()=>{const s=u.value?.getBoundingClientRect().width;c.value=`${s}px`})},b=C(()=>[g.b("editor"),g.bm("editor",a.type),x.e("wrapper"),g.is("disabled",Ve.value),g.is("active",S.value),w.b("editor"),i.class]),ne=C(()=>({[`--${w.namespace.value}-range-input-chars`]:io({format:a.format,startPlaceholder:a.startPlaceholder,endPlaceholder:a.endPlaceholder})})),X=C(()=>[x.e("icon"),w.e("close-icon"),Re.value?"":w.e("close-icon--hidden")]);$e(S,s=>{s?Ue(()=>{s&&(B.value=a.modelValue)}):(ce.value=null,ue.value.intermediateValue=null,Ue(()=>{ie(a.modelValue)}))});const ie=(s,ae)=>{(ae||!ht(s,B.value))&&(n("change",s),a.validateEvent&&k?.validate("change").catch(xe=>ut()))},oe=s=>{if(!ht(a.modelValue,s)){let ae;ye(s)?ae=s.map(xe=>kt(xe,a.valueFormat,o.value)):s&&(ae=kt(s,a.valueFormat,o.value)),n("update:modelValue",s&&ae,o.value)}},fe=s=>{n("keydown",s)},N=C(()=>I.value?Array.from(I.value.$el.querySelectorAll("input")):[]),v=(s,ae,xe)=>{const _e=N.value;_e.length&&(!xe||xe==="min"?(_e[0].setSelectionRange(s,ae),_e[0].focus()):xe==="max"&&(_e[1].setSelectionRange(s,ae),_e[1].focus()))},V=(s="",ae=!1)=>{S.value=ae;let xe;ye(s)?xe=s.map(_e=>_e.toDate()):xe=s&&s.toDate(),ce.value=null,ue.value.intermediateValue=null,oe(xe)},P=s=>{s.stopPropagation(),Be(),S.value=!1},p=G(),j=C(()=>p.value===void 0?void 0:{[`--${g.namespace.value}-range-panel-max-height`]:`${p.value}px`}),m=()=>{const s=pt(I);s&&(p.value=so({referenceBottom:s.getBoundingClientRect().bottom,viewportHeight:window.innerHeight}))},O=()=>{Qe.value&&m(),y.value=!0},W=()=>{n("visible-change",!0)},re=()=>{y.value=!1,S.value=!1,n("visible-change",!1)},Me=()=>{S.value=!0},Oe=()=>{S.value=!1},Ve=C(()=>a.disabled||M?.disabled),Z=C(()=>{let s;if(Ie.value?ue.value.getDefaultValue&&(s=ue.value.getDefaultValue()):ye(a.modelValue)?s=a.modelValue.map(ae=>yt(ae,a.valueFormat,o.value)):s=yt(a.modelValue,a.valueFormat,o.value),ue.value.getRangeAvailableTime){const ae=ue.value.getRangeAvailableTime(s);Rn(ae,s)||(s=ae,Ie.value||oe(Ea(s)))}return ye(s)&&s.some(ae=>!ae)&&(s=[]),s}),ee=C(()=>{if(!ue.value.panelReady)return"";const s=f(Z.value);if(ye(ce.value))return[ce.value[0]||s&&s[0]||"",ce.value[1]||s&&s[1]||""];if(ce.value!==null)return ce.value;const ae=ue.value.intermediateValue;return ae&&Qe.value&&S.value?ae:!me.value&&Ie.value||!S.value&&Ie.value?"":s?ve.value||ke.value||we.value?s.join(", "):s:""}),se=C(()=>a.type.includes("time")),me=C(()=>a.type.startsWith("time")),ve=C(()=>a.type==="dates"),ke=C(()=>a.type==="months"),we=C(()=>a.type==="years"),Se=C(()=>a.prefixIcon||(se.value?"regular clock":"regular calendar")),Re=G(!1),Ae=s=>{a.readonly||Ve.value||(Re.value&&(s.stopPropagation(),ue.value.handleClear?ue.value.handleClear():oe(D.value),ie(D.value,!0),Re.value=!1,re()),n("clear"))},Ie=C(()=>{const{modelValue:s}=a;return!s||ye(s)&&!s.filter(Boolean).length}),ta=async s=>{if(a.readonly||Ve.value)return;Dt({targetTagName:s.target?.tagName,isFocused:T.value,openOnInputClick:a.openOnInputClick})&&(S.value=!0)},ha=()=>{a.readonly||Ve.value||!Ie.value&&a.clearable&&(Re.value=!0)},ua=()=>{Re.value=!1},na=s=>{if(a.readonly||Ve.value)return;Dt({targetTagName:s.touches[0]?.target?.tagName,isFocused:T.value,openOnInputClick:a.openOnInputClick})&&(S.value=!0)},ya=Sn("(pointer: coarse)"),ka=C(()=>lo({openOnInputClick:a.openOnInputClick,isCoarsePointer:ya.value})),Qe=C(()=>a.type.includes("range")),Xe=C(()=>e(d)?.popperRef?.contentRef),Da=xn(I,s=>{const ae=e(Xe),xe=pt(I);ae&&(s.target===ae||s.composedPath().includes(ae))||s.target===xe||xe&&s.composedPath().includes(xe)||(S.value=!1)});an(()=>{Da?.()});const ce=G(null);Et(u,H);const ra=()=>{if(ce.value){const s=ze(ee.value);s&&L(s)&&(oe(Ea(s)),ce.value=null)}ce.value===""&&(oe(D.value),ie(D.value),ce.value=null)},ze=s=>s?ue.value.parseUserInput(s):null,f=s=>s?ue.value.formatToString(s):null,L=s=>ue.value.isValidValue(s),te=async s=>{if(a.readonly||Ve.value)return;const{code:ae}=s;if(fe(s),ae===Pe.esc){S.value===!0&&(S.value=!1,s.preventDefault(),s.stopPropagation());return}if(ae===Pe.down&&(ue.value.handleFocusPicker&&(s.preventDefault(),s.stopPropagation()),S.value===!1&&(S.value=!0,await Ue()),ue.value.handleFocusPicker)){ue.value.handleFocusPicker();return}if(ae===Pe.tab){const{shiftKey:xe}=s;if(oo({openOnInputClick:a.openOnInputClick,pickerVisible:S.value,shiftKey:xe,hasPanelFocus:!!ue.value.handleFocusPicker,isLastInput:s.target===N.value[N.value.length-1]})){s.preventDefault(),ue.value.handleFocusPicker?.();return}E=!0;return}if(ae===Pe.enter||ae===Pe.numpadEnter){(ce.value===null||ce.value===""||L(ze(ee.value)))&&(ra(),S.value=!1),s.stopPropagation();return}if(ce.value){s.stopPropagation();return}ue.value.handleKeydownInput&&ue.value.handleKeydownInput(s)},Te=s=>{ce.value=s,S.value||(S.value=!0)},$=s=>{const ae=s.target;ce.value?ce.value=[ae.value,ce.value[1]]:ce.value=[ae.value,null]},z=s=>{const ae=s.target;ce.value?ce.value=[ce.value[0],ae.value]:ce.value=[null,ae.value]},Q=()=>{const s=ce.value,ae=ze(s&&s[0]),xe=e(Z);if(ae&&ae.isValid()){ce.value=[f(ae),ee.value?.[1]||null];const _e=[ae,xe&&(xe[1]||null)];L(_e)&&(oe(Ea(_e)),ce.value=null)}},Ne=()=>{const s=e(ce),ae=ze(s&&s[1]),xe=e(Z);if(ae&&ae.isValid()){ce.value=[e(ee)?.[0]||null,f(ae)];const _e=[xe&&xe[0],ae];L(_e)&&(oe(Ea(_e)),ce.value=null)}},ue=G({}),ea=s=>{ue.value[s[0]]=s[1],ue.value.panelReady=!0},ca=s=>{n("calendar-change",s)},ge=(s,ae,xe)=>{n("panel-change",s,ae,xe)},Be=()=>{I.value?.focus()},Qt=()=>{I.value?.blur()};return La("EP_PICKER_BASE",{props:a}),l({focus:Be,blur:Qt,handleOpen:Me,handleClose:Oe,onPick:V}),(s,ae)=>(_(),Ge(e(kn),Ha({ref_key:"refPopper",ref:d,visible:S.value,pure:"",trigger:"click"},s.$attrs,{role:"dialog","aria-label":s.ariaLabel,teleported:"",transition:`${e(g).namespace.value}-zoom-in-top`,"popper-class":[`${e(g).namespace.value}-picker__popper`],"popper-style":j.value,"popper-options":e(R),"fallback-placements":s.fallbackPlacements,"gpu-acceleration":!1,placement:s.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:O,onShow:W,onHide:re}),{default:Ke(()=>[Qe.value?(_(),Ge(po,{key:1,id:s.id,ref_key:"inputRef",ref:I,"model-value":ee.value,name:s.name,disabled:Ve.value,readonly:!s.editable||s.readonly,label:s.label,"start-placeholder":s.startPlaceholder,"end-placeholder":s.endPlaceholder,"aria-label":s.ariaLabel,class:h(b.value),style:Pa([s.$attrs.style,ne.value]),tabindex:s.tabindex,inputmode:ka.value,autocomplete:"off",role:"combobox",onClick:ta,onFocus:e(Y),onBlur:e(A),onStartInput:$,onStartChange:Q,onEndInput:z,onEndChange:Ne,onMousedown:ta,onMouseenter:ha,onMouseleave:ua,onTouchstartPassive:na,onKeydown:te},{prefix:Ke(()=>[Se.value?(_(),Ge(e(De),{key:0,class:h([e(x).e("icon"),e(w).e("icon")]),name:Se.value},null,8,["class","name"])):pe("",!0)]),"range-separator":Ke(()=>[he(s.$slots,"range-separator",{},()=>[K("span",{class:h(e(w).b("separator"))},be(s.rangeSeparator),3)])]),suffix:Ke(()=>[s.clearIcon?(_(),Ge(e(De),{key:0,class:h(X.value),onMousedown:Ze(e(ct),["prevent"]),onClick:Ae,name:"regular times"},null,8,["class","onMousedown"])):pe("",!0)]),_:3},8,["id","model-value","name","disabled","readonly","label","start-placeholder","end-placeholder","aria-label","class","style","tabindex","inputmode","onFocus","onBlur"])):(_(),Ge(e(da),{key:0,id:s.id,ref_key:"inputRef",ref:I,"container-role":"combobox","model-value":ee.value,name:s.name,disabled:Ve.value,label:s.label,class:h([e(g).b("editor"),e(g).bm("editor",s.type),s.$attrs.class]),style:Pa(s.$attrs.style),readonly:!s.editable||s.readonly||ve.value||ke.value||we.value||s.type==="week","aria-label":s.ariaLabel,tabindex:s.tabindex,"validate-event":!1,helpText:s.helpText,messageError:s.messageError,onInput:Te,onFocus:e(Y),onBlur:e(A),onKeydown:te,onChange:ra,onMousedown:ta,onMouseenter:ha,onMouseleave:ua,onTouchstartPassive:na,onClick:ae[0]||(ae[0]=Ze(()=>{},["stop"]))},{prefix:Ke(()=>[Se.value?(_(),Ge(e(De),{key:0,class:h([e(x).e("icon"),"pr-2"]),onMousedown:Ze(ta,["prevent"]),onTouchstartPassive:na,name:Se.value},null,8,["class","name"])):pe("",!0)]),suffix:Ke(()=>[Re.value&&s.clearIcon?(_(),Ge(e(De),{key:0,class:h(`${e(x).e("icon")} clear-icon`),onMousedown:Ze(e(ct),["prevent"]),onClick:Ae,name:"regular times"},null,8,["class","onMousedown"])):pe("",!0)]),default:Ke(()=>[K("span",null,be(s.label),1),s.label?(_(),J("div",{key:0,class:h([e(x).e("label")]),style:Pa(F.value)},be(s.label),7)):pe("",!0)]),_:1},8,["id","model-value","name","disabled","label","class","style","readonly","aria-label","tabindex","helpText","messageError","onFocus","onBlur"]))]),content:Ke(()=>[he(s.$slots,"default",{visible:S.value,actualVisible:y.value,parsedValue:Z.value,format:s.format,dateFormat:s.dateFormat,timeFormat:s.timeFormat,unlinkPanels:s.unlinkPanels,type:s.type,defaultValue:s.defaultValue,showNow:s.showNow,onPick:V,onSelectRange:v,onSetPickerOption:ea,onCalendarChange:ca,onPanelChange:ge,onMousedown:ae[1]||(ae[1]=Ze(()=>{},["stop"])),onKeydown:ma(P,["esc"])})]),_:3},16,["visible","aria-label","transition","popper-class","popper-style","popper-options","fallback-placements","placement"]))}}),vo=Fe({...Kt,datetimeRole:String,parsedValue:{type:de(Object)}}),zt=({getAvailableHours:t,getAvailableMinutes:l,getAvailableSeconds:r})=>{const a=(o,g,x,w)=>{const c={hour:t,minute:l,second:r};let u=o;return["hour","minute","second"].forEach(M=>{if(c[M]){let k;const R=c[M];switch(M){case"minute":{k=R(u.hour(),g,w);break}case"second":{k=R(u.hour(),u.minute(),g,w);break}default:{k=R(g,w);break}}if(k?.length&&!k.includes(u[M]())){const D=x?0:k.length-1;u=u[M](k[D])}}}),u},n={};return{timePickerOptions:n,getAvailableTime:a,onSetOption:([o,g])=>{n[o]=g}}},qa=t=>{const l=(a,n)=>a||n,r=a=>a!==!0;return t.map(l).filter(r)},Wt=(t,l,r)=>({getHoursList:(o,g)=>Ga(24,t&&(()=>t?.(o,g))),getMinutesList:(o,g,x)=>Ga(60,l&&(()=>l?.(o,g,x))),getSecondsList:(o,g,x,w)=>Ga(60,r&&(()=>r?.(o,g,x,w)))}),Jt=(t,l,r)=>{const{getHoursList:a,getMinutesList:n,getSecondsList:i}=Wt(t,l,r);return{getAvailableHours:(w,c)=>qa(a(w,c)),getAvailableMinutes:(w,c,u)=>qa(n(w,c,u)),getAvailableSeconds:(w,c,u,M)=>qa(i(w,c,u,M))}},Zt=t=>{const l=G(t.parsedValue);return $e(()=>t.visible,r=>{r||(l.value=t.parsedValue)}),l},go=Fe({role:{type:String,required:!0},spinnerDate:{type:de(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:de(String),default:""},...Ht}),bo=["onClick"],ho=["onMouseenter"],Xa=Le({__name:"basic-time-spinner",props:go,emits:["change","select-range","set-option"],setup(t,{emit:l}){const r=t,a=Je("EP_PICKER_BASE"),{isRange:n}=a.props,i=l,o=Ee("time"),{getHoursList:g,getMinutesList:x,getSecondsList:w}=Wt(r.disabledHours,r.disabledMinutes,r.disabledSeconds);let c=!1;const u=G(),M=G(),k=G(),R=G(),D={hours:M,minutes:k,seconds:R},d=C(()=>r.showSeconds?gt:gt.slice(0,2)),I=C(()=>{const{spinnerDate:p}=r,j=p.hour(),m=p.minute(),O=p.second();return{hours:j,minutes:m,seconds:O}}),S=C(()=>{const{hours:p,minutes:j}=e(I),{role:m,spinnerDate:O}=r,W=n?void 0:O;return{hours:g(m,W),minutes:x(p,m,W),seconds:w(p,j,m,W)}}),y=C(()=>{const{hours:p,minutes:j,seconds:m}=e(I);return{hours:ja(p,23),minutes:ja(j,59),seconds:ja(m,59)}}),B=Fn(p=>{c=!1,Y(p)},200),E=p=>{if(!!!r.amPmMode)return"";const m=r.amPmMode==="A";let O=p<12?" am":" pm";return m&&(O=O.toUpperCase()),O},T=p=>{let j;switch(p){case"hours":j=[0,2];break;case"minutes":j=[3,5];break;case"seconds":j=[6,8];break}const[m,O]=j;i("select-range",m,O),u.value=p},Y=p=>{q(p,e(I)[p])},A=()=>{Y("hours"),Y("minutes"),Y("seconds")},F=p=>p.querySelector(`.${o.namespace.value}-scrollbar__wrap`),q=(p,j)=>{if(r.arrowControl)return;const m=e(D[p]);m&&m.$el&&(F(m.$el).scrollTop=Math.max(0,j*H(p)))},H=p=>{const m=e(D[p])?.$el.querySelector("li");return m&&Number.parseFloat(gn(m,"height"))||0},b=()=>{X(1)},ne=()=>{X(-1)},X=p=>{u.value||T("hours");const j=u.value,m=e(I)[j],O=u.value==="hours"?24:60,W=ie(j,m,p,O);oe(j,W),q(j,W),Ue(()=>T(j))},ie=(p,j,m,O)=>{let W=(j+m+O)%O;const re=e(S)[p];for(;re[W]&&W!==j;)W=(W+m+O)%O;return W},oe=(p,j)=>{if(e(S)[p][j])return;const{hours:W,minutes:re,seconds:Me}=e(I);let Oe;switch(p){case"hours":Oe=r.spinnerDate.hour(j).minute(re).second(Me);break;case"minutes":Oe=r.spinnerDate.hour(W).minute(j).second(Me);break;case"seconds":Oe=r.spinnerDate.hour(W).minute(re).second(j);break}i("change",Oe)},fe=(p,{value:j,disabled:m})=>{m||(oe(p,j),T(p),q(p,j))},N=p=>{const j=e(D[p]);if(!j)return;c=!0,B(p);const m=Math.min(Math.round((F(j.$el).scrollTop-(v(p)*.5-10)/H(p)+3)/H(p)),p==="hours"?23:59);oe(p,m)},v=p=>e(D[p]).$el.offsetHeight,V=()=>{const p=j=>{const m=e(D[j]);m&&m.$el&&(F(m.$el).onscroll=()=>{N(j)})};p("hours"),p("minutes"),p("seconds")};tn(()=>{Ue(()=>{!r.arrowControl&&V(),A(),r.role==="start"&&T("hours")})});const P=(p,j)=>{D[j].value=p??void 0};return i("set-option",[`${r.role}_scrollDown`,X]),i("set-option",[`${r.role}_emitSelectRange`,T]),$e(()=>r.spinnerDate,()=>{c||A()}),(p,j)=>(_(),J("div",{class:h([e(o).b("spinner"),{"has-seconds":p.showSeconds}])},[p.arrowControl?pe("",!0):(_(!0),J(Ce,{key:0},Ye(d.value,m=>(_(),Ge(e(En),{key:m,ref_for:!0,ref:O=>P(O,m),class:h(e(o).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":e(o).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:O=>T(m),onMousemove:O=>Y(m)},{default:Ke(()=>[(_(!0),J(Ce,null,Ye(S.value[m],(O,W)=>(_(),J("li",{key:W,class:h([e(o).be("spinner","item"),e(o).is("active",W===I.value[m]),e(o).is("disabled",O)]),onClick:re=>fe(m,{value:W,disabled:O})},[m==="hours"?(_(),J(Ce,{key:0},[wa(be(("0"+(p.amPmMode?W%12||12:W)).slice(-2))+be(E(W)),1)],64)):(_(),J(Ce,{key:1},[wa(be(("0"+W).slice(-2)),1)],64))],10,bo))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),p.arrowControl?(_(!0),J(Ce,{key:1},Ye(d.value,m=>(_(),J("div",{key:m,class:h([e(o).be("spinner","wrapper"),e(o).is("arrow")]),onMouseenter:O=>T(m)},[je(le(e(De),{name:"regular chevron-up"},null,512),[[e(ft),ne]]),je(le(e(De),{name:"regular chevron-down"},null,512),[[e(ft),b]]),K("ul",{class:h(e(o).be("spinner","list"))},[(_(!0),J(Ce,null,Ye(y.value[m],(O,W)=>(_(),J("li",{key:W,class:h([e(o).be("spinner","item"),e(o).is("active",O===I.value[m]),e(o).is("disabled",S.value[m][O])])},[e(bn)(O)?(_(),J(Ce,{key:0},[m==="hours"?(_(),J(Ce,{key:0},[wa(be(("0"+(p.amPmMode?O%12||12:O)).slice(-2))+be(E(O)),1)],64)):(_(),J(Ce,{key:1},[wa(be(("0"+O).slice(-2)),1)],64))],64)):pe("",!0)],2))),128))],2)],42,ho))),128)):pe("",!0)],2))}}),yo=Le({__name:"panel-time-pick",props:vo,emits:["pick","select-range","set-picker-option"],setup(t,{emit:l}){const r=t,a=l,n=Je("EP_PICKER_BASE"),{arrowControl:i,disabledHours:o,disabledMinutes:g,disabledSeconds:x,defaultValue:w}=n.props,{getAvailableHours:c,getAvailableMinutes:u,getAvailableSeconds:M}=Jt(o,g,x),k=Ee("time"),{lang:R}=He(),D=G([0,2]),d=Zt(r),I=C(()=>Mn(r.actualVisible)?`${k.namespace.value}-zoom-in-top`:""),S=C(()=>r.format.includes("ss")),y=C(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),B=N=>{const v=U(N).locale(R.value),V=X(v);return v.isSame(V)},E=()=>{a("pick",d.value,!1)},T=(N=!1,v=!1)=>{v||a("pick",r.parsedValue,N)},Y=N=>{if(!r.visible)return;const v=X(N).millisecond(0);a("pick",v,!0)},A=(N,v)=>{a("select-range",N,v),D.value=[N,v]},F=N=>{const v=[0,3].concat(S.value?[6]:[]),V=["hours","minutes"].concat(S.value?["seconds"]:[]),p=(v.indexOf(D.value[0])+N+v.length)%v.length;H.start_emitSelectRange(V[p])},q=N=>{const v=N.code,{left:V,right:P,up:p,down:j}=Pe;if([V,P].includes(v)){F(v===V?-1:1),N.preventDefault();return}if([p,j].includes(v)){const m=v===p?-1:1;H.start_scrollDown(m),N.preventDefault();return}},{timePickerOptions:H,onSetOption:b,getAvailableTime:ne}=zt({getAvailableHours:c,getAvailableMinutes:u,getAvailableSeconds:M}),X=N=>ne(N,r.datetimeRole||"",!0),ie=N=>N?U(N,r.format).locale(R.value):null,oe=N=>N?N.format(r.format):null,fe=()=>U(w).locale(R.value);return a("set-picker-option",["isValidValue",B]),a("set-picker-option",["formatToString",oe]),a("set-picker-option",["parseUserInput",ie]),a("set-picker-option",["handleKeydownInput",q]),a("set-picker-option",["getRangeAvailableTime",X]),a("set-picker-option",["getDefaultValue",fe]),(N,v)=>(_(),Ge(nn,{name:I.value},{default:Ke(()=>[N.actualVisible||N.visible?(_(),J("div",{key:0,class:h(e(k).b("panel"))},[K("div",{class:h([e(k).be("panel","content"),{"has-seconds":S.value}])},[le(Xa,{ref:"spinner",role:N.datetimeRole||"start","arrow-control":e(i),"show-seconds":S.value,"am-pm-mode":y.value,"spinner-date":N.parsedValue,"disabled-hours":e(o),"disabled-minutes":e(g),"disabled-seconds":e(x),onChange:Y,onSetOption:e(b),onSelectRange:A},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),K("div",{class:h(e(k).be("panel","footer"))},[K("button",{type:"button",class:h([e(k).be("panel","btn"),"cancel"]),onClick:E}," Cancelar ",2),K("button",{type:"button",class:h([e(k).be("panel","btn"),"confirm"]),onClick:v[0]||(v[0]=V=>T())}," Ok ",2)],2)],2)):pe("",!0)]),_:1},8,["name"]))}}),ko=Fe({...Kt,parsedValue:{type:de(Array)}}),Do=["disabled"],wo=Le({__name:"panel-time-range",props:ko,emits:["pick","select-range","set-picker-option"],setup(t,{emit:l}){const r=t,a=l,n=(Z,ee)=>{const se=[];for(let me=Z;me<=ee;me++)se.push(me);return se},{lang:i}=He(),o=Ee("time"),g=Ee("picker"),x=Je("EP_PICKER_BASE"),{arrowControl:w,disabledHours:c,disabledMinutes:u,disabledSeconds:M,defaultValue:k}=x.props,R=C(()=>[o.be("range-picker","body"),o.be("panel","content"),o.is("arrow",w),B.value?"has-seconds":""]),D=C(()=>[o.be("range-picker","body"),o.be("panel","content"),o.is("arrow",w),B.value?"has-seconds":""]),d=C(()=>r.parsedValue[0]),I=C(()=>r.parsedValue[1]),S=Zt(r),y=()=>{a("pick",S.value,!1)},B=C(()=>r.format.includes("ss")),E=C(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),T=(Z=!1)=>{a("pick",[d.value,I.value],Z)},Y=Z=>{q(Z.millisecond(0),I.value)},A=Z=>{q(d.value,Z.millisecond(0))},F=Z=>{const ee=Z.map(me=>U(me).locale(i.value)),se=P(ee);return ee[0].isSame(se[0])&&ee[1].isSame(se[1])},q=(Z,ee)=>{r.visible&&a("pick",[Z,ee],!0)},H=C(()=>d.value>I.value),b=G([0,2]),ne=(Z,ee)=>{a("select-range",Z,ee,"min"),b.value=[Z,ee]},X=C(()=>B.value?11:8),ie=(Z,ee)=>{a("select-range",Z,ee,"max");const se=e(X);b.value=[Z+se,ee+se]},oe=Z=>{const ee=B.value?[0,3,6,11,14,17]:[0,3,8,11],se=["hours","minutes"].concat(B.value?["seconds"]:[]),ve=(ee.indexOf(b.value[0])+Z+ee.length)%ee.length,ke=ee.length/2;ve<ke?O.start_emitSelectRange(se[ve]):O.end_emitSelectRange(se[ve-ke])},fe=Z=>{const ee=Z.code,{left:se,right:me,up:ve,down:ke}=Pe;if([se,me].includes(ee)){oe(ee===se?-1:1),Z.preventDefault();return}if([ve,ke].includes(ee)){const we=ee===ve?-1:1,Se=b.value[0]<X.value?"start":"end";O[`${Se}_scrollDown`](we),Z.preventDefault();return}},N=(Z,ee)=>{const se=c?c(Z):[],me=Z==="start",ke=(ee||(me?I.value:d.value)).hour(),we=me?n(ke+1,23):n(0,ke-1);return _a(se,we)},v=(Z,ee,se)=>{const me=u?u(Z,ee):[],ve=ee==="start",ke=se||(ve?I.value:d.value),we=ke.hour();if(Z!==we)return me;const Se=ke.minute(),Re=ve?n(Se+1,59):n(0,Se-1);return _a(me,Re)},V=(Z,ee,se,me)=>{const ve=M?M(Z,ee,se):[],ke=se==="start",we=me||(ke?I.value:d.value),Se=we.hour(),Re=we.minute();if(Z!==Se||ee!==Re)return ve;const Ae=we.second(),Ie=ke?n(Ae+1,59):n(0,Ae-1);return _a(ve,Ie)},P=([Z,ee])=>[W(Z,"start",!0,ee),W(ee,"end",!1,Z)],{getAvailableHours:p,getAvailableMinutes:j,getAvailableSeconds:m}=Jt(N,v,V),{timePickerOptions:O,getAvailableTime:W,onSetOption:re}=zt({getAvailableHours:p,getAvailableMinutes:j,getAvailableSeconds:m}),Me=Z=>Z?ye(Z)?Z.map(ee=>U(ee,r.format).locale(i.value)):U(Z,r.format).locale(i.value):null,Oe=Z=>Z?ye(Z)?Z.map(ee=>ee.format(r.format)):Z.format(r.format):null,Ve=()=>{if(ye(k))return k.map(ee=>U(ee).locale(i.value));const Z=U(k).locale(i.value);return[Z,Z.add(60,"m")]};return a("set-picker-option",["formatToString",Oe]),a("set-picker-option",["parseUserInput",Me]),a("set-picker-option",["isValidValue",F]),a("set-picker-option",["handleKeydownInput",fe]),a("set-picker-option",["getDefaultValue",Ve]),a("set-picker-option",["getRangeAvailableTime",P]),(Z,ee)=>Z.actualVisible?(_(),J("div",{key:0,class:h([e(o).b("range-picker"),e(g).b("panel")])},[K("div",{class:h(e(o).be("range-picker","content"))},[K("div",{class:h(e(o).be("range-picker","cell"))},[K("div",{class:h(e(o).be("range-picker","header"))},"Inicio",2),K("div",{class:h(R.value)},[le(Xa,{ref:"minSpinner",role:"start","show-seconds":B.value,"am-pm-mode":E.value,"arrow-control":e(w),"spinner-date":d.value,"disabled-hours":N,"disabled-minutes":v,"disabled-seconds":V,onChange:Y,onSetOption:e(re),onSelectRange:ne},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),K("div",{class:h(e(o).be("range-picker","cell"))},[K("div",{class:h(e(o).be("range-picker","header"))},"Fin",2),K("div",{class:h(D.value)},[le(Xa,{ref:"maxSpinner",role:"end","show-seconds":B.value,"am-pm-mode":E.value,"arrow-control":e(w),"spinner-date":I.value,"disabled-hours":N,"disabled-minutes":v,"disabled-seconds":V,onChange:A,onSetOption:e(re),onSelectRange:ie},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),K("div",{class:h(e(o).be("panel","footer"))},[K("button",{type:"button",class:h([e(o).be("panel","btn"),"cancel"]),onClick:ee[0]||(ee[0]=se=>y())}," Cancelar ",2),K("button",{type:"button",class:h([e(o).be("panel","btn"),"confirm"]),disabled:H.value,onClick:ee[1]||(ee[1]=se=>T())}," Ok ",10,Do)],2)],2)):pe("",!0)}});U.extend(Tt);const So=Le({name:"GTimePicker",install:null,props:{...Ut,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,l){const r=G(),[a,n]=t.isRange?["timerange",wo]:["time",yo],i=o=>l.emit("update:modelValue",o);return La("ElPopperOptions",t.popperOptions),l.expose({focus:()=>{r.value?.focus()},blur:()=>{r.value?.blur()},handleOpen:()=>{r.value?.handleOpen()},handleClose:()=>{r.value?.handleClose()}}),()=>{const o=t.format??ao;return Sa(Sa(fo,{...t,ref:r,type:a,format:o,"onUpdate:modelValue":i},{default:g=>Sa(n,{...g})}))}}}),xo=Rt(So),fl={title:"Form/Form",component:sa,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
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
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},Fa={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:sa,GFormItem:pa,GInput:fa,GConfigProvider:va,GButton:ga,GSelect:rn,GRadio:on,GCheckbox:ln,GSegmented:dt,GDatePicker:eo,GTimePicker:xo},setup(){const t=G(),l=la({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1,preferredContact:"",birthDate:"",appointmentDate:"",appointmentTime:""}),r=[{label:"Email",value:"email"},{label:"Teléfono",value:"phone"},{label:"WhatsApp",value:"whatsapp"}],a=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],n={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},i=C(()=>l.country?n[l.country]||[]:[]);$e(()=>l.country,()=>{l.city=""});const o=u=>u.getTime()>Date.now(),g=u=>u.getTime()<Date.now(),x={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(u,M,k)=>{M===!0?k():k(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}],preferredContact:[{validator:(u,M,k)=>{M||k(new Error("Debe seleccionar un método de contacto preferido")),k()},type:"boolean",trigger:"change"}],birthDate:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:"change"}],appointmentDate:[{required:!0,message:"La fecha de cita es requerida",trigger:"change"}],appointmentTime:[{required:!0,message:"La hora de cita es requerida",trigger:"change"}]};async function w(){if(t.value)try{await t.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",l)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(u){console.error("Validation error:",u)}}function c(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,countries:a,availableCities:i,rules:x,contactOptions:r,disableFutureDates:o,disablePastDates:g,GSegmented:dt,handleSubmit:w,handleReset:c}},template:`
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
    `})},Va={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del formulario con validaciones."}}},render:()=>({components:{GForm:sa,GFormItem:pa,GInput:fa,GConfigProvider:va,GButton:ga},setup(){const t=G(),l=la({nombre:"",email:""}),r={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Email inválido",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((i,o)=>{i?console.log("submit!",o):console.log("error submit!"+o)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,rules:r,handleSubmit:a,handleReset:n}},template:`
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
    `})},Ia={name:"Reglas Personalizadas",parameters:{docs:{description:{story:`Las reglas de validación pueden ser personalizadas usando funciones validadoras. Por ejemplo, para validar la edad de un usuario:

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

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:sa,GFormItem:pa,GInput:fa,GConfigProvider:va,GButton:ga},setup(){const t=G(),l=la({pass:"",checkPass:"",age:""}),i={pass:[{validator:(x,w,c)=>{w===""?c(new Error("Ingrese una contraseña")):(l.checkPass!==""&&t.value?.validateField("checkPass"),c())},trigger:"blur"}],checkPass:[{validator:(x,w,c)=>{w===""?c(new Error("Confirme su contraseña")):w!==l.pass?c(new Error("Las contraseñas no coinciden")):c()},trigger:"blur"}],age:[{validator:(x,w,c)=>{if(!w)return c(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(w))?Number(w)<18?c(new Error("La edad debe ser mayor a 18")):c():c(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function o(){t.value&&await t.value.validate((x,w)=>{x?console.log("submit!",l):console.log("error submit!",w)})}async function g(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,rules:i,handleSubmit:o,handleReset:g}},template:`
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
    `})},Ta={name:"Tipo de ejecución",parameters:{docs:{description:{story:`La validación de campos puede realizarse de dos formas:

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

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.`}}},render:()=>({components:{GForm:sa,GFormItem:pa,GInput:fa,GConfigProvider:va,GButton:ga},setup(){const t=G(),l=la({email:"",password:""}),r={email:[{required:!0,message:"El email es requerido",trigger:"change"},{type:"email",message:"Ingrese un email válido",trigger:"change"}],password:[{required:!0,message:"La contraseña es requerida",trigger:"blur"},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((i,o)=>{i?console.log("submit!",o):console.log("error submit!"+o)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,rules:r,handleSubmit:a,handleReset:n}},template:`
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
    `})},$a={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:sa,GFormItem:pa,GInput:fa,GConfigProvider:va,GButton:ga},setup(){return{formData:la({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
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
    `})},Oa={name:"Prevenir Submit",parameters:{docs:{description:{story:`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

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
`}}},render:()=>({components:{GForm:sa,GFormItem:pa,GInput:fa,GConfigProvider:va,GButton:ga},setup(){const t=G(),l=la({usuario:"",clave:""}),r={usuario:[{required:!0,message:"El usuario es requerido",trigger:"blur"}],clave:[{required:!0,message:"La clave es requerida",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((n,i)=>{n?alert("submit!"):console.log("error submit!",i)})}return{formRef:t,formData:l,rules:r,handleSubmit:a}},template:`
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
    `})},Aa={name:"Validación Dinámica",parameters:{docs:{description:{story:`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

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
`}}},render:()=>({components:{GForm:sa,GFormItem:pa,GInput:fa,GConfigProvider:va,GButton:ga},setup(){const t=G(),l=la({domains:[{key:1,value:""}],email:""}),r=o=>{const g=l.domains.indexOf(o);g!==-1&&l.domains.splice(g,1)},a=()=>{l.domains.push({key:Date.now(),value:""})};async function n(){t.value&&await t.value.validate((o,g)=>{o?console.log("submit!",l):console.log("error submit!",g)})}async function i(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,handleSubmit:n,handleReset:i,addDomain:a,removeDomain:r}},template:`
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
    `})},vl=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];Fa.parameters={...Fa.parameters,docs:{...Fa.parameters?.docs,source:{originalSource:`{
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
}`,...Fa.parameters?.docs?.source}}};Va.parameters={...Va.parameters,docs:{...Va.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo básico del formulario con validaciones.'
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
        nombre: '',
        email: ''
      });
      const rules = {
        nombre: [{
          required: true,
          message: 'El nombre es requerido',
          trigger: 'blur'
        }, {
          min: 3,
          message: 'Mínimo 3 caracteres',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: 'El email es requerido',
          trigger: 'blur'
        }, {
          type: 'email',
          message: 'Email inválido',
          trigger: 'blur'
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields);
          } else {
            console.log('error submit!' + fields);
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
}`,...Va.parameters?.docs?.source}}};Ia.parameters={...Ia.parameters,docs:{...Ia.parameters?.docs,source:{originalSource:`{
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
        pass: '',
        checkPass: '',
        age: ''
      });
      const validatePass = (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('Ingrese una contraseña'));
        } else {
          if (formData.checkPass !== '') {
            formRef.value?.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule: any, value: any, callback: any) => {
        if (value === '') {
          callback(new Error('Confirme su contraseña'));
        } else if (value !== formData.pass) {
          callback(new Error('Las contraseñas no coinciden'));
        } else {
          callback();
        }
      };
      const checkAge = (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(new Error('La edad es requerida'));
        }
        setTimeout(() => {
          if (!Number.isInteger(Number(value))) {
            callback(new Error('Ingrese solo números'));
          } else if (Number(value) < 18) {
            callback(new Error('La edad debe ser mayor a 18'));
          } else {
            callback();
          }
        }, 1000);
      };
      const rules = {
        pass: [{
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass: [{
          validator: validatePass2,
          trigger: 'blur'
        }],
        age: [{
          validator: checkAge,
          trigger: 'blur'
        }]
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
}`,...Ia.parameters?.docs?.source}}};Ta.parameters={...Ta.parameters,docs:{...Ta.parameters?.docs,source:{originalSource:`{
  name: 'Tipo de ejecución',
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
        email: '',
        password: ''
      });
      const rules = {
        email: [{
          required: true,
          message: 'El email es requerido',
          trigger: 'change'
        }, {
          type: 'email',
          message: 'Ingrese un email válido',
          trigger: 'change'
        }],
        password: [{
          required: true,
          message: 'La contraseña es requerida',
          trigger: 'blur'
        }, {
          min: 6,
          message: 'La contraseña debe tener al menos 6 caracteres',
          trigger: 'blur'
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            console.log('submit!', fields);
          } else {
            console.log('error submit!' + fields);
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
}`,...Ta.parameters?.docs?.source}}};$a.parameters={...$a.parameters,docs:{...$a.parameters?.docs,source:{originalSource:`{
  name: 'Formulario Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un formulario completamente deshabilitado con múltiples campos.'
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
        name: 'Juan Pérez',
        email: 'juan@ejemplo.com',
        phone: '+51 999888777',
        address: 'Av. Principal 123',
        ciudad: 'Lima',
        country: 'Perú'
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
}`,...$a.parameters?.docs?.source}}};Oa.parameters={...Oa.parameters,docs:{...Oa.parameters?.docs,source:{originalSource:`{
  name: 'Prevenir Submit',
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
        usuario: '',
        clave: ''
      });
      const rules = {
        usuario: [{
          required: true,
          message: 'El usuario es requerido',
          trigger: 'blur'
        }],
        clave: [{
          required: true,
          message: 'La clave es requerida',
          trigger: 'blur'
        }]
      };
      async function handleSubmit() {
        if (!formRef.value) return;
        await formRef.value.validate((valid, fields) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!', fields);
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
}`,...Oa.parameters?.docs?.source}}};Aa.parameters={...Aa.parameters,docs:{...Aa.parameters?.docs,source:{originalSource:`{
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
}`,...Aa.parameters?.docs?.source}}};export{Fa as CompleteForm,Ia as CustomRules,$a as DisabledForm,Aa as DynamicValidation,Oa as PreventSubmit,Va as Primary,Ta as TriggerValidation,vl as __namedExportsOrder,fl as default};
