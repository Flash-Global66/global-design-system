import{Y as ve,r as G,c as $,u as e,w as Ee,D as Be,d as Oe,a as je,s as fe,k as q,l as h,y as me,$ as Xt,a0 as en,x as W,e as j,a1 as ze,m as de,F as Ce,z as Fe,h as ne,a2 as va,W as Za,X as Qa,V as He,j as Ne,v as Xe,b as Ye,G as Ha,g as gt,f as _e,A as pa,E as Ta,H as ea,I as fa,an as rt,n as Da,p as Ua,C as an,aa as ot,o as tn,T as nn}from"./vue.esm-bundler-C43JrhH2.js";import{a as aa,G as sa}from"./index-BocNJzgi.js";import{G as la}from"./index-G8MyKf0F.js";import{c as Ae,b as rn,d as on,G as ia}from"./ConfigProvider-Br84NlF7.js";import{G as ua}from"./index-1xDgUv1h.js";import{p as sn,G as ln}from"./index-eTF2dCwa.js";import{a as un}from"./index-DGopGXg3.js";import{a as cn}from"./index-DUjscpv2.js";import{G as st}from"./index-CxEK68v6.js";import{a as dn,P as mn,d as H,s as bt,_ as Ka,l as ht,r as yt,o as pn,E as fn,B as vn,b as Ba}from"./index-3VMthNMR.js";import{c as Ze,g as ta}from"./_commonjsHelpers-Cpj98o6Y.js";import{b as Ie,d as ue,w as kt}from"./install-CfJGiCvs.js";import{r as oa}from"./index-CA6S_qzr.js";import{F as he}from"./index-B1PxvDbZ.js";import{Q as gn,b as bn}from"./index-Bjwq1aDC.js";import{f as hn,u as yn}from"./index-CdSB2Bdf.js";import{u as Ve,W as Dt,g as wt,e as kn,v as Dn}from"./index-D5bIuBCX.js";import{_ as wn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{h as Fa,g as Sn}from"./style-c1qAcfu9.js";import{C as za}from"./index-hJ8KYCfA.js";import{E as Pe}from"./aria-BUADUvnR.js";import{y as lt}from"./index-C3gUrHC2.js";import{a as St,o as Pn,c as Cn}from"./index-BDKGuxIf.js";import{G as xn}from"./index-DH2w0SzE.js";import{c as Mn}from"./index-70yognVe.js";import{u as Rn}from"./index-BjhK0CHr.js";import{u as Pt}from"./index-D_xYoXKA.js";import{d as it}from"./error-Cq9Fpw4b.js";import{i as Vn}from"./isEqual-Cz4oPyRM.js";import{q as In}from"./index-Dk612rNp.js";import{d as $n}from"./debounce-Qaf-XsLG.js";import{v as ut}from"./index-F3mqkqXW.js";import"./index-CRx4dHSJ.js";import"./index-DmfABaPz.js";import"./event-BB_Ol6Sd.js";import"./typescript-Bp3YSIOJ.js";import"./index-CPy9gSVE.js";import"./content-xefq6HC4.js";import"./index-CMNLjZZP.js";import"./dynamic-size-list-Cx2IIt4N.js";import"./index-Bn_3zeFh.js";import"./icon-BhbO7EM9.js";import"./use-form-common-props-C2RO3VSy.js";import"./constants-Dnj8X3EN.js";import"./index-fhkPmQjX.js";import"./isArrayLikeObject-CjUSgBAL.js";import"./index-dphAcb1L.js";import"./index-CmBD9wVo.js";import"./index-y9qm_QyA.js";import"./use-form-item-BgBoyOyI.js";import"./_arrayPush-BhjrZnJY.js";var Ct={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a,n){var i=a.prototype,s=function(d){return d&&(d.indexOf?d:d.s)},b=function(d,R,k,V,D){var p=d.name?d:d.$locale(),F=s(p[R]),M=s(p[k]),y=F||M.map(function(I){return I.slice(0,V)});if(!D)return y;var _=p.weekStart;return y.map(function(I,E){return y[(E+(_||0))%7]})},x=function(){return n.Ls[n.locale()]},P=function(d,R){return d.formats[R]||function(k){return k.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(V,D,p){return D||p.slice(1)})}(d.formats[R.toUpperCase()])},m=function(){var d=this;return{months:function(R){return R?R.format("MMMM"):b(d,"months")},monthsShort:function(R){return R?R.format("MMM"):b(d,"monthsShort","months",3)},firstDayOfWeek:function(){return d.$locale().weekStart||0},weekdays:function(R){return R?R.format("dddd"):b(d,"weekdays")},weekdaysMin:function(R){return R?R.format("dd"):b(d,"weekdaysMin","weekdays",2)},weekdaysShort:function(R){return R?R.format("ddd"):b(d,"weekdaysShort","weekdays",3)},longDateFormat:function(R){return P(d.$locale(),R)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};i.localeData=function(){return m.bind(this)()},n.localeData=function(){var d=x();return{firstDayOfWeek:function(){return d.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(R){return P(d,R)},meridiem:d.meridiem,ordinal:d.ordinal}},n.months=function(){return b(x(),"months")},n.monthsShort=function(){return b(x(),"monthsShort","months",3)},n.weekdays=function(d){return b(x(),"weekdays",null,null,d)},n.weekdaysShort=function(d){return b(x(),"weekdaysShort","weekdays",3,d)},n.weekdaysMin=function(d){return b(x(),"weekdaysMin","weekdays",2,d)}}})})(Ct);var En=Ct.exports;const Tn=ta(En),Fn=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],Le=t=>!t&&t!==0?[]:ve(t)?t:[t];var xt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,i=/\d\d/,s=/\d\d?/,b=/\d*[^-_:/,()\s\d]+/,x={},P=function(p){return(p=+p)+(p>68?1900:2e3)},m=function(p){return function(F){this[p]=+F}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(F){if(!F||F==="Z")return 0;var M=F.match(/([+-]|\d\d)/g),y=60*M[1]+(+M[2]||0);return y===0?0:M[0]==="+"?-y:y}(p)}],R=function(p){var F=x[p];return F&&(F.indexOf?F:F.s.concat(F.f))},k=function(p,F){var M,y=x.meridiem;if(y){for(var _=1;_<=24;_+=1)if(p.indexOf(y(_,0,F))>-1){M=_>12;break}}else M=p===(F?"pm":"PM");return M},V={A:[b,function(p){this.afternoon=k(p,!1)}],a:[b,function(p){this.afternoon=k(p,!0)}],Q:[n,function(p){this.month=3*(p-1)+1}],S:[n,function(p){this.milliseconds=100*+p}],SS:[i,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[s,m("seconds")],ss:[s,m("seconds")],m:[s,m("minutes")],mm:[s,m("minutes")],H:[s,m("hours")],h:[s,m("hours")],HH:[s,m("hours")],hh:[s,m("hours")],D:[s,m("day")],DD:[i,m("day")],Do:[b,function(p){var F=x.ordinal,M=p.match(/\d+/);if(this.day=M[0],F)for(var y=1;y<=31;y+=1)F(y).replace(/\[|\]/g,"")===p&&(this.day=y)}],w:[s,m("week")],ww:[i,m("week")],M:[s,m("month")],MM:[i,m("month")],MMM:[b,function(p){var F=R("months"),M=(R("monthsShort")||F.map(function(y){return y.slice(0,3)})).indexOf(p)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[b,function(p){var F=R("months").indexOf(p)+1;if(F<1)throw new Error;this.month=F%12||F}],Y:[/[+-]?\d+/,m("year")],YY:[i,function(p){this.year=P(p)}],YYYY:[/\d{4}/,m("year")],Z:d,ZZ:d};function D(p){var F,M;F=p,M=x&&x.formats;for(var y=(p=F.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(L,K,w){var ae=w&&w.toUpperCase();return K||M[w]||r[w]||M[ae].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Q,oe,ie){return oe||ie.slice(1)})})).match(a),_=y.length,I=0;I<_;I+=1){var E=y[I],N=V[E],Y=N&&N[0],S=N&&N[1];y[I]=S?{regex:Y,parser:S}:E.replace(/^\[|\]$/g,"")}return function(L){for(var K={},w=0,ae=0;w<_;w+=1){var Q=y[w];if(typeof Q=="string")ae+=Q.length;else{var oe=Q.regex,ie=Q.parser,pe=L.slice(ae),A=oe.exec(pe)[0];ie.call(K,A),L=L.replace(A,"")}}return function(v){var T=v.afternoon;if(T!==void 0){var C=v.hours;T?C<12&&(v.hours+=12):C===12&&(v.hours=0),delete v.afternoon}}(K),K}}return function(p,F,M){M.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(P=p.parseTwoDigitYear);var y=F.prototype,_=y.parse;y.parse=function(I){var E=I.date,N=I.utc,Y=I.args;this.$u=N;var S=Y[1];if(typeof S=="string"){var L=Y[2]===!0,K=Y[3]===!0,w=L||K,ae=Y[2];K&&(ae=Y[2]),x=this.$locale(),!L&&ae&&(x=M.Ls[ae]),this.$d=function(pe,A,v,T){try{if(["x","X"].indexOf(A)>-1)return new Date((A==="X"?1e3:1)*pe);var C=D(A)(pe),g=C.year,B=C.month,f=C.day,O=C.hours,z=C.minutes,te=C.seconds,xe=C.milliseconds,Te=C.zone,qe=C.week,J=new Date,Z=f||(g||B?1:J.getDate()),re=g||J.getFullYear(),se=0;g&&!B||(se=B>0?B-1:J.getMonth());var be,ce=O||0,ye=z||0,De=te||0,Me=xe||0;return Te?new Date(Date.UTC(re,se,Z,ce,ye,De,Me+60*Te.offset*1e3)):v?new Date(Date.UTC(re,se,Z,ce,ye,De,Me)):(be=new Date(re,se,Z,ce,ye,De,Me),qe&&(be=T(be).week(qe).toDate()),be)}catch{return new Date("")}}(E,S,N,M),this.init(),ae&&ae!==!0&&(this.$L=this.locale(ae).$L),w&&E!=this.format(S)&&(this.$d=new Date("")),x={}}else if(S instanceof Array)for(var Q=S.length,oe=1;oe<=Q;oe+=1){Y[1]=S[oe-1];var ie=M.apply(this,Y);if(ie.isValid()){this.$d=ie.$d,this.$L=ie.$L,this.init();break}oe===Q&&(this.$d=new Date(""))}else _.call(this,I)}}})})(xt);var On=xt.exports;const Mt=ta(On);var Rt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){var n=a.prototype,i=n.format;n.format=function(s){var b=this,x=this.$locale();if(!this.isValid())return i.bind(this)(s);var P=this.$utils(),m=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(d){switch(d){case"Q":return Math.ceil((b.$M+1)/3);case"Do":return x.ordinal(b.$D);case"gggg":return b.weekYear();case"GGGG":return b.isoWeekYear();case"wo":return x.ordinal(b.week(),"W");case"w":case"ww":return P.s(b.week(),d==="w"?1:2,"0");case"W":case"WW":return P.s(b.isoWeek(),d==="W"?1:2,"0");case"k":case"kk":return P.s(String(b.$H===0?24:b.$H),d==="k"?1:2,"0");case"X":return Math.floor(b.$d.getTime()/1e3);case"x":return b.$d.getTime();case"z":return"["+b.offsetName()+"]";case"zzz":return"["+b.offsetName("long")+"]";default:return d}});return i.bind(this)(m)}}})})(Rt);var Nn=Rt.exports;const Yn=ta(Nn);var Vt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){var r="week",a="year";return function(n,i,s){var b=i.prototype;b.week=function(x){if(x===void 0&&(x=null),x!==null)return this.add(7*(x-this.week()),"day");var P=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var m=s(this).startOf(a).add(1,a).date(P),d=s(this).endOf(r);if(m.isBefore(d))return 1}var R=s(this).startOf(a).date(P).startOf(r).subtract(1,"millisecond"),k=this.diff(R,r,!0);return k<0?s(this).startOf("week").week():Math.ceil(k)},b.weeks=function(x){return x===void 0&&(x=null),this.week(x)}}})})(Vt);var Ln=Vt.exports;const An=ta(Ln);var It={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.weekYear=function(){var n=this.month(),i=this.week(),s=this.year();return i===1&&n===11?s+1:n===0&&i>=52?s-1:s}}})})(It);var _n=It.exports;const Bn=ta(_n);var $t={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a,n){a.prototype.dayOfYear=function(i){var s=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return i==null?s:this.add(i-s,"day")}}})})($t);var jn=$t.exports;const qn=ta(jn);var Et={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.isSameOrAfter=function(n,i){return this.isSame(n,i)||this.isAfter(n,i)}}})})(Et);var Gn=Et.exports;const Hn=ta(Gn);var Tt={exports:{}};(function(t,l){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.isSameOrBefore=function(n,i){return this.isSame(n,i)||this.isBefore(n,i)}}})})(Tt);var Un=Tt.exports;const Kn=ta(Un);var zn={exports:{}};(function(t,l){(function(r,a){t.exports=a(dn)})(Ze,function(r){function a(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var n=a(r),i={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(s){return s+"º"}};return n.default.locale(i,null,!0),i})})(zn);const _a=Symbol(),Wn=Ie({...mn,type:{type:ue(String),default:"date"}}),Jn=["date","dates","year","years","month","months","week","range"],Xa=Ie({disabledDate:{type:ue(Function)},date:{type:ue(Object),required:!0},minDate:{type:ue(Object)},maxDate:{type:ue(Object)},parsedValue:{type:ue([Object,Array])},rangeState:{type:ue(Object),default:()=>({endDate:null,selecting:!1})}}),Ft=Ie({type:{type:ue(String),required:!0,values:Fn},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),et=Ie({unlinkPanels:Boolean,parsedValue:{type:ue(Array)}}),at=t=>({type:String,values:Jn,default:t}),Zn=Ie({...Ft,parsedValue:{type:ue([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),ga=t=>{if(!ve(t))return!1;const[l,r]=t;return H.isDayjs(l)&&H.isDayjs(r)&&l.isSameOrBefore(r)},tt=(t,{lang:l,unit:r,unlinkPanels:a})=>{let n;if(ve(t)){let[i,s]=t.map(b=>H(b).locale(l));return a||(s=i.add(1,r)),[i,s]}else t?n=H(t):n=H();return n=n.locale(l),[n,n.add(1,r)]},Qn=(t,l,{columnIndexOffset:r,startDate:a,nextEndDate:n,now:i,unit:s,relativeDateGetter:b,setCellMetadata:x,setRowMetadata:P})=>{for(let m=0;m<t.row;m++){const d=l[m];for(let R=0;R<t.column;R++){let k=d[R+r];k||(k={row:m,column:R,type:"normal",inRange:!1,start:!1,end:!1});const V=m*t.column+R,D=b(V);k.dayjs=D,k.date=D.toDate(),k.timestamp=D.valueOf(),k.type="normal",k.inRange=!!(a&&D.isSameOrAfter(a,s)&&n&&D.isSameOrBefore(n,s))||!!(a&&D.isSameOrBefore(a,s)&&n&&D.isSameOrAfter(n,s)),a?.isSameOrAfter(n)?(k.start=!!n&&D.isSame(n,s),k.end=a&&D.isSame(a,s)):(k.start=!!a&&D.isSame(a,s),k.end=!!n&&D.isSame(n,s)),D.isSame(i,s)&&(k.type="today"),x?.(k,{rowIndex:m,columnIndex:R}),d[R+r]=k}P?.(d)}},Oa=(t,l,r)=>{const a=H().locale(r).startOf("month").month(l).year(t),n=a.daysInMonth();return bt(n).map(i=>a.add(i,"day").toDate())},wa=(t,l,r,a)=>{const n=H().year(t).month(l).startOf("month"),i=Oa(t,l,r).find(s=>!a?.(s));return i?H(i).locale(r):n.locale(r)},Wa=(t,l,r)=>{const a=t.year();if(!r?.(t.toDate()))return t.locale(l);const n=t.month();if(!Oa(a,n,l).every(r))return wa(a,n,l,r);for(let i=0;i<12;i++)if(!Oa(a,i,l).every(r))return wa(a,i,l,r);return t},Xn=Ie({...Xa,cellClassName:{type:ue(Function)},showWeekNumber:Boolean,selectionMode:at("date")}),er=["changerange","pick","select"],ca={name:"es",el:{datepicker:{now:"Ahora",today:"Hoy",cancel:"Cancelar",clear:"Limpiar",confirm:"Aceptar",dateTablePrompt:"Use las teclas de flecha y enter para seleccionar el día del mes",monthTablePrompt:"Use las teclas de flecha y enter para seleccionar el mes",yearTablePrompt:"Use las teclas de flecha y enter para seleccionar el año",selectedDate:"Fecha seleccionada",selectDate:"Seleccionar fecha",selectTime:"Seleccionar hora",startDate:"Fecha de inicio",startTime:"Hora de inicio",endDate:"Fecha de fin",endTime:"Hora de fin",prevYear:"Año anterior",nextYear:"Próximo año",prevMonth:"Mes anterior",nextMonth:"Próximo mes",year:"",month1:"Enero",month2:"Febrero",month3:"Marzo",month4:"Abril",month5:"Mayo",month6:"Junio",month7:"Julio",month8:"Agosto",month9:"Septiembre",month10:"Octubre",month11:"Noviembre",month12:"Diciembre",week:"semana",weeks:{sun:"Dom",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb"},weeksFull:{sun:"Domingo",mon:"Lunes",tue:"Martes",wed:"Miércoles",thu:"Jueves",fri:"Viernes",sat:"Sábado"},months:{jan:"Ene",feb:"Feb",mar:"Mar",apr:"Abr",may:"May",jun:"Jun",jul:"Jul",aug:"Ago",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dic"}}}},Ja=(t="")=>["normal","today"].includes(t),ar=(t,l)=>{const{lang:r}=Ae(G(ca)),a=G(),n=G(),i=G(),s=G(),b=G([[],[],[],[],[],[]]);let x=!1;const P=t.date.$locale().weekStart||7,m=t.date.locale("en").localeData().weekdaysShort().map(v=>v.toLowerCase()),d=$(()=>P>3?7-P:-P),R=$(()=>{const v=t.date.startOf("month");return v.subtract(v.day()||7,"day")}),k=$(()=>m.concat(m).slice(P,P+7)),V=$(()=>hn(e(_)).some(v=>v.isCurrent)),D=$(()=>{const v=t.date.startOf("month"),T=v.day()||7,C=v.daysInMonth(),g=v.subtract(1,"month").daysInMonth();return{startOfMonthDay:T,dateCountOfMonth:C,dateCountOfLastMonth:g}}),p=$(()=>t.selectionMode==="dates"?Le(t.parsedValue):[]),F=(v,{count:T,rowIndex:C,columnIndex:g})=>{const{startOfMonthDay:B,dateCountOfMonth:f,dateCountOfLastMonth:O}=e(D),z=e(d);if(C>=0&&C<=1){const te=B+z<0?7+B+z:B+z;if(g+C*7>=te)return v.text=T,!0;v.text=O-(te-g%7)+1+C*7,v.type="prev-month"}else return T<=f?v.text=T:(v.text=T-f,v.type="next-month"),!0;return!1},M=(v,{columnIndex:T,rowIndex:C},g)=>{const{disabledDate:B,cellClassName:f}=t,O=e(p),z=F(v,{count:g,rowIndex:C,columnIndex:T}),te=v.dayjs.toDate();return v.selected=O.find(xe=>xe.isSame(v.dayjs,"day")),v.isSelected=!!v.selected,v.isCurrent=E(v),v.disabled=B?.(te),v.customClass=f?.(te),z},y=v=>{if(t.selectionMode==="week"){const[T,C]=t.showWeekNumber?[1,7]:[0,6],g=A(v[T+1]);v[T].inRange=g,v[T].start=g,v[C].inRange=g,v[C].end=g}},_=$(()=>{const{minDate:v,maxDate:T,rangeState:C,showWeekNumber:g}=t,B=e(d),f=e(b),O="day";let z=1;if(g)for(let te=0;te<6;te++)f[te][0]||(f[te][0]={type:"week",text:e(R).add(te*7+1,O).week()});return Qn({row:6,column:7},f,{startDate:v,columnIndexOffset:g?1:0,nextEndDate:C.endDate||T||C.selecting&&v||null,now:H().locale(e(r)).startOf(O),unit:O,relativeDateGetter:te=>e(R).add(te-B,O),setCellMetadata:(...te)=>{M(...te,z)&&(z+=1)},setRowMetadata:y}),f});Ee(()=>t.date,async()=>{e(a)?.contains(document.activeElement)&&(await Be(),await I())});const I=async()=>e(n)?.focus(),E=v=>t.selectionMode==="date"&&Ja(v.type)&&N(v,t.parsedValue),N=(v,T)=>T?H(T).locale(e(r)).isSame(t.date.date(Number(v.text)),"day"):!1,Y=(v,T)=>{const C=v*7+(T-(t.showWeekNumber?1:0))-e(d);return e(R).add(C,"day")},S=v=>{if(!t.rangeState.selecting)return;let T=v.target;if(T.tagName==="SPAN"&&(T=T.parentNode?.parentNode),T.tagName==="DIV"&&(T=T.parentNode),T.tagName!=="TD")return;const C=T.parentNode.rowIndex-1,g=T.cellIndex;e(_)[C][g].disabled||(C!==e(i)||g!==e(s))&&(i.value=C,s.value=g,l("changerange",{selecting:!0,endDate:Y(C,g)}))},L=v=>!e(V)&&v?.text===1&&v.type==="normal"||v.isCurrent,K=v=>{x||e(V)||t.selectionMode!=="date"||pe(v,!0)},w=v=>{v.target.closest("td")&&(x=!0)},ae=v=>{v.target.closest("td")&&(x=!1)},Q=v=>{!t.rangeState.selecting||!t.minDate?(l("pick",{minDate:v,maxDate:null}),l("select",!0)):(v>=t.minDate?l("pick",{minDate:t.minDate,maxDate:v}):l("pick",{minDate:v,maxDate:t.minDate}),l("select",!1))},oe=v=>{const T=v.week(),C=`${v.year()}w${T}`;l("pick",{year:v.year(),week:T,value:C,date:v.startOf("week")})},ie=(v,T)=>{const C=T?Le(t.parsedValue).filter(g=>g?.valueOf()!==v.valueOf()):Le(t.parsedValue).concat([v]);l("pick",C)},pe=(v,T=!1)=>{const C=v.target.closest("td");if(!C)return;const g=C.parentNode.rowIndex-1,B=C.cellIndex,f=e(_)[g][B];if(f.disabled||f.type==="week")return;const O=Y(g,B);switch(t.selectionMode){case"range":{Q(O);break}case"date":{l("pick",O,T);break}case"week":{oe(O);break}case"dates":{ie(O,!!f.selected);break}}},A=v=>{if(t.selectionMode!=="week")return!1;let T=t.date.startOf("day");if(v.type==="prev-month"&&(T=T.subtract(1,"month")),v.type==="next-month"&&(T=T.add(1,"month")),T=T.date(Number.parseInt(v.text,10)),t.parsedValue&&!ve(t.parsedValue)){const C=(t.parsedValue.day()-P+7)%7-1;return t.parsedValue.subtract(C,"day").isSame(T,"day")}return!1};return{WEEKS:k,rows:_,tbodyRef:a,currentCellRef:n,focus:I,isCurrent:E,isWeekActive:A,isSelectedCell:L,handlePickDate:pe,handleMouseUp:ae,handleMouseDown:w,handleMouseMove:S,handleFocus:K}},tr=(t,{isCurrent:l,isWeekActive:r})=>{const a=Ve("date-table"),{t:n}=Ae(G(ca)),i=$(()=>[a.b(),{"is-week-mode":t.selectionMode==="week"}]),s=$(()=>n("el.datepicker.dateTablePrompt")),b=$(()=>n("el.datepicker.week"));return{tableKls:i,tableLabel:s,weekLabel:b,getCellClasses:m=>{const d=[];return Ja(m.type)&&!m.disabled?(d.push("available"),m.type==="today"&&d.push("today")):d.push(m.type),l(m)&&d.push("current"),m.inRange&&(Ja(m.type)||t.selectionMode==="week")&&(d.push("in-range"),m.start&&d.push("start-date"),m.end&&d.push("end-date")),m.disabled&&d.push("disabled"),m.selected&&d.push("selected"),m.customClass&&d.push(m.customClass),d.join(" ")},getRowKls:m=>[a.e("row"),{current:r(m)}],t:n}},nr=Ie({cell:{type:ue(Object)}}),Ot=Oe({name:"GDatePickerCell",props:nr,setup(t){const l=Ve("date-table-cell"),{slots:r}=je(_a);return{ns:l,cell:t.cell}}});function rr(t,l,r,a,n,i){return fe(t.$slots,"default",Xt(en(t.cell)),()=>[q("div",{class:h(t.ns.b())},[q("span",{class:h(t.ns.e("text"))},me(t.cell?.renderText??t.cell?.text),3)],2)])}const nt=wn(Ot,[["render",rr]]);Ot.__docgenInfo={displayName:"GDatePickerCell",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-cell-render.vue"]};const or=["aria-label"],sr={key:0,scope:"col"},lr=["aria-label"],ir=["aria-current","aria-selected","tabindex"],Na=Oe({__name:"basic-date-table",props:Xn,emits:er,setup(t,{expose:l,emit:r}){const a=t,n=r,{WEEKS:i,rows:s,tbodyRef:b,currentCellRef:x,focus:P,isCurrent:m,isWeekActive:d,isSelectedCell:R,handlePickDate:k,handleMouseUp:V,handleMouseDown:D,handleMouseMove:p,handleFocus:F}=ar(a,n),{tableLabel:M,tableKls:y,weekLabel:_,getCellClasses:I,getRowKls:E,t:N}=tr(a,{isCurrent:m,isWeekActive:d});return l({focus:P}),(Y,S)=>(j(),W("table",{"aria-label":e(M),class:h(e(y)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:S[1]||(S[1]=(...L)=>e(k)&&e(k)(...L)),onMousemove:S[2]||(S[2]=(...L)=>e(p)&&e(p)(...L)),onMousedown:S[3]||(S[3]=ze((...L)=>e(D)&&e(D)(...L),["prevent"])),onMouseup:S[4]||(S[4]=(...L)=>e(V)&&e(V)(...L))},[q("tbody",{ref_key:"tbodyRef",ref:b},[q("tr",null,[Y.showWeekNumber?(j(),W("th",sr,me(e(_)),1)):de("",!0),(j(!0),W(Ce,null,Fe(e(i),(L,K)=>(j(),W("th",{key:K,"aria-label":e(N)("el.datepicker.weeksFull."+L),scope:"col"},me(e(N)("el.datepicker.weeks."+L)),9,lr))),128))]),(j(!0),W(Ce,null,Fe(e(s),(L,K)=>(j(),W("tr",{key:K,class:h(e(E)(L[1]))},[(j(!0),W(Ce,null,Fe(L,(w,ae)=>(j(),W("td",{key:`${K}.${ae}`,ref_for:!0,ref:Q=>e(R)(w)&&(x.value=Q),class:h(e(I)(w)),"aria-current":w.isCurrent?"date":void 0,"aria-selected":w.isCurrent,tabindex:e(R)(w)?0:-1,onFocus:S[0]||(S[0]=(...Q)=>e(F)&&e(F)(...Q))},[ne(nt,{cell:w},null,8,["cell"])],42,ir))),128))],2))),128))],512)],42,or))}});Na.__docgenInfo={exportName:"default",displayName:"basic-date-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on current cell"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-date-table.vue"]};const ur=Ie({...Xa,selectionMode:at("month")}),cr=["aria-label"],dr=["aria-selected","aria-label","tabindex","onKeydown"],Ya=Oe({__name:"basic-month-table",props:ur,emits:["changerange","pick","select"],setup(t,{expose:l,emit:r}){const a=t,n=r,i=Ve("month-table"),{t:s,lang:b}=Ae(),x=G(),P=G(),m=G(a.date.locale("en").localeData().monthsShort().map(_=>_.toLowerCase())),d=G([[],[],[]]),R=G(),k=G(),V=$(()=>{const _=d.value,I=H().locale(b.value).startOf("month");for(let E=0;E<3;E++){const N=_[E];for(let Y=0;Y<4;Y++){const S=N[Y]||={row:E,column:Y,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};S.type="normal";const L=E*4+Y,K=a.date.startOf("year").month(L),w=a.rangeState.endDate||a.maxDate||a.rangeState.selecting&&a.minDate||null;S.inRange=!!(a.minDate&&K.isSameOrAfter(a.minDate,"month")&&w&&K.isSameOrBefore(w,"month"))||!!(a.minDate&&K.isSameOrBefore(a.minDate,"month")&&w&&K.isSameOrAfter(w,"month")),a.minDate?.isSameOrAfter(w)?(S.start=!!(w&&K.isSame(w,"month")),S.end=a.minDate&&K.isSame(a.minDate,"month")):(S.start=!!(a.minDate&&K.isSame(a.minDate,"month")),S.end=!!(w&&K.isSame(w,"month"))),I.isSame(K)&&(S.type="today"),S.text=L,S.disabled=a.disabledDate?.(K.toDate())||!1}}return _}),D=()=>{P.value?.focus()},p=_=>{const I={},E=a.date.year(),N=new Date,Y=_.text;return I.disabled=a.disabledDate?Oa(E,Y,b.value).every(a.disabledDate):!1,I.current=Le(a.parsedValue).findIndex(S=>H.isDayjs(S)&&S.year()===E&&S.month()===Y)>=0,I.today=N.getFullYear()===E&&N.getMonth()===Y,_.inRange&&(I["in-range"]=!0,_.start&&(I["start-date"]=!0),_.end&&(I["end-date"]=!0)),I},F=_=>{const I=a.date.year(),E=_.text;return Le(a.date).findIndex(N=>N.year()===I&&N.month()===E)>=0},M=_=>{if(!a.rangeState.selecting)return;let I=_.target;if(I.tagName==="SPAN"&&(I=I.parentNode?.parentNode),I.tagName==="DIV"&&(I=I.parentNode),I.tagName!=="TD")return;const E=I.parentNode.rowIndex,N=I.cellIndex;V.value[E][N].disabled||(E!==R.value||N!==k.value)&&(R.value=E,k.value=N,n("changerange",{selecting:!0,endDate:a.date.startOf("year").month(E*4+N)}))},y=_=>{const I=_.target?.closest("td");if(I?.tagName!=="TD"||Fa(I,"disabled"))return;const E=I.cellIndex,Y=I.parentNode.rowIndex*4+E,S=a.date.startOf("year").month(Y);if(a.selectionMode==="months"){if(_.type==="keydown"){n("pick",Le(a.parsedValue),!1);return}const L=wa(a.date.year(),Y,b.value,a.disabledDate),K=Fa(I,"current")?Le(a.parsedValue).filter(w=>w?.month()!==L.month()):Le(a.parsedValue).concat([H(L)]);n("pick",K)}else a.selectionMode==="range"?a.rangeState.selecting?(a.minDate&&S>=a.minDate?n("pick",{minDate:a.minDate,maxDate:S}):n("pick",{minDate:S,maxDate:a.minDate}),n("select",!1)):(n("pick",{minDate:S,maxDate:null}),n("select",!0)):n("pick",Y)};return Ee(()=>a.date,async()=>{x.value?.contains(document.activeElement)&&(await Be(),P.value?.focus())}),l({focus:D}),(_,I)=>(j(),W("table",{role:"grid","aria-label":e(s)("el.datepicker.monthTablePrompt"),class:h(e(i).b()),onClick:y,onMousemove:M},[q("tbody",{ref_key:"tbodyRef",ref:x},[(j(!0),W(Ce,null,Fe(V.value,(E,N)=>(j(),W("tr",{key:N},[(j(!0),W(Ce,null,Fe(E,(Y,S)=>(j(),W("td",{key:S,ref_for:!0,ref:L=>F(Y)&&(P.value=L),class:h(p(Y)),"aria-selected":`${F(Y)}`,"aria-label":e(s)(`el.datepicker.month${+Y.text+1}`),tabindex:F(Y)?0:-1,onKeydown:[va(ze(y,["prevent","stop"]),["space"]),va(ze(y,["prevent","stop"]),["enter"])]},[ne(nt,{cell:{...Y,renderText:e(s)("el.datepicker.months."+m.value[Y.text])}},null,8,["cell"])],42,dr))),128))]))),128))],512)],42,cr))}});Ya.__docgenInfo={exportName:"default",displayName:"basic-month-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-month-table.vue"]};const mr=Ie({...Xa,selectionMode:at("year")}),pr=["aria-label"],fr=["aria-selected","aria-label","tabindex","onKeydown"],La=Oe({__name:"basic-year-table",props:mr,emits:["changerange","pick","select"],setup(t,{expose:l,emit:r}){const a=(I,E)=>{const N=H(String(I)).locale(E).startOf("year"),S=N.endOf("year").dayOfYear();return bt(S).map(L=>N.add(L,"day").toDate())},n=t,i=r,s=Ve("year-table"),{t:b,lang:x}=Ae(),P=G(),m=G(),d=$(()=>Math.floor(n.date.year()/10)*10),R=G([[],[],[]]),k=G(),V=G(),D=$(()=>{const I=R.value,E=H().locale(x.value).startOf("year");for(let N=0;N<3;N++){const Y=I[N];for(let S=0;S<4&&!(N*4+S>=10);S++){let L=Y[S];L||(L={row:N,column:S,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),L.type="normal";const K=N*4+S+d.value,w=H().year(K),ae=n.rangeState.endDate||n.maxDate||n.rangeState.selecting&&n.minDate||null;L.inRange=!!(n.minDate&&w.isSameOrAfter(n.minDate,"year")&&ae&&w.isSameOrBefore(ae,"year"))||!!(n.minDate&&w.isSameOrBefore(n.minDate,"year")&&ae&&w.isSameOrAfter(ae,"year")),n.minDate?.isSameOrAfter(ae)?(L.start=!!(ae&&w.isSame(ae,"year")),L.end=!!(n.minDate&&w.isSame(n.minDate,"year"))):(L.start=!!(n.minDate&&w.isSame(n.minDate,"year")),L.end=!!(ae&&w.isSame(ae,"year"))),E.isSame(w)&&(L.type="today"),L.text=K;const oe=w.toDate();L.disabled=n.disabledDate&&n.disabledDate(oe)||!1,Y[S]=L}}return I}),p=()=>{m.value?.focus()},F=I=>{const E={},N=H().locale(x.value),Y=I.text;return E.disabled=n.disabledDate?a(Y,x.value).every(n.disabledDate):!1,E.today=N.year()===Y,E.current=Le(n.parsedValue).findIndex(S=>S.year()===Y)>=0,I.inRange&&(E["in-range"]=!0,I.start&&(E["start-date"]=!0),I.end&&(E["end-date"]=!0)),E},M=I=>{const E=I.text;return Le(n.date).findIndex(N=>N.year()===E)>=0},y=I=>{const E=I.target?.closest("td");if(!E||!E.textContent||Fa(E,"disabled"))return;const N=E.cellIndex,S=E.parentNode.rowIndex*4+N+d.value,L=H().year(S);if(n.selectionMode==="range")n.rangeState.selecting?(n.minDate&&L>=n.minDate?i("pick",{minDate:n.minDate,maxDate:L}):i("pick",{minDate:L,maxDate:n.minDate}),i("select",!1)):(i("pick",{minDate:L,maxDate:null}),i("select",!0));else if(n.selectionMode==="years"){if(I.type==="keydown"){i("pick",Le(n.parsedValue),!1);return}const K=Wa(L.startOf("year"),x.value,n.disabledDate),w=Fa(E,"current")?Le(n.parsedValue).filter(ae=>ae?.year()!==S):Le(n.parsedValue).concat([K]);i("pick",w)}else i("pick",S)},_=I=>{if(!n.rangeState.selecting)return;const E=I.target?.closest("td");if(!E)return;const N=E.parentNode.rowIndex,Y=E.cellIndex;D.value[N][Y].disabled||(N!==k.value||Y!==V.value)&&(k.value=N,V.value=Y,i("changerange",{selecting:!0,endDate:H().year(d.value).add(N*4+Y,"year")}))};return Ee(()=>n.date,async()=>{P.value?.contains(document.activeElement)&&(await Be(),m.value?.focus())}),l({focus:p}),(I,E)=>(j(),W("table",{role:"grid","aria-label":e(b)("el.datepicker.yearTablePrompt"),class:h(e(s).b()),onClick:y,onMousemove:_},[q("tbody",{ref_key:"tbodyRef",ref:P},[(j(!0),W(Ce,null,Fe(D.value,(N,Y)=>(j(),W("tr",{key:Y},[(j(!0),W(Ce,null,Fe(N,(S,L)=>(j(),W("td",{key:`${Y}_${L}`,ref_for:!0,ref:K=>M(S)&&(m.value=K),class:h(["available",F(S)]),"aria-selected":M(S),"aria-label":String(S.text),tabindex:M(S)?0:-1,onKeydown:[va(ze(y,["prevent","stop"]),["space"]),va(ze(y,["prevent","stop"]),["enter"])]},[ne(nt,{cell:S},null,8,["cell"])],42,fr))),128))]))),128))],512)],42,pr))}});La.__docgenInfo={exportName:"default",displayName:"basic-year-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on the current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-year-table.vue"]};const vr=["onClick"],gr=["aria-label"],br=["aria-label"],hr=["aria-label"],yr=["aria-label"],kr=["disabled"],Dr=["disabled"],Nt=Oe({__name:"panel-date-pick",props:Zn,emits:["pick","set-picker-option","panel-change"],setup(t,{emit:l}){const r=(o,c,X)=>!0,a=t,n=l,i=Ve("picker-panel"),s=Ve("date-picker"),b=Za(),x=Qa(),{t:P,lang:m}=Ae(G(ca)),d=je("EP_PICKER_BASE"),R=je(gn),{shortcuts:k,disabledDate:V,cellClassName:D,defaultTime:p}=d.props,F=He(d.props,"defaultValue"),M=G(),y=G(H().locale(m.value)),_=G(!1);let I=!1;const E=$(()=>H(p).locale(m.value)),N=$(()=>y.value.month()),Y=$(()=>y.value.year()),S=G([]),L=G(null),K=G(null),w=o=>S.value.length>0?r(o,S.value,a.format||"HH:mm:ss"):!0,ae=o=>p&&!ce.value&&!_.value&&!I?E.value.year(o.year()).month(o.month()).date(o.date()):xe.value?o.millisecond(0):o.startOf("day"),Q=(o,...c)=>{if(!o)n("pick",o,...c);else if(ve(o)){const X=o.map(ae);n("pick",X,...c)}else n("pick",ae(o),...c);L.value=null,K.value=null,_.value=!1,I=!1},oe=async(o,c)=>{if(C.value==="date"){o=o;let X=a.parsedValue?a.parsedValue.year(o.year()).month(o.month()).date(o.date()):o;w(X),y.value=X,Q(X,xe.value||c),a.type==="datetime"&&(await Be(),Ge())}else C.value==="week"?Q(o.date):C.value==="dates"&&Q(o,!0)},ie=o=>{const c=o?"add":"subtract";y.value=y.value[c](1,"month"),U("month")},pe=o=>{const c=y.value,X=o?"add":"subtract";y.value=A.value==="year"?c[X](10,"year"):c[X](1,"year"),U("year")},A=G("date"),v=$(()=>{const o=P("el.datepicker.year");if(A.value==="year"){const c=Math.floor(Y.value/10)*10;return o?`${c} ${o} - ${c+9} ${o}`:`${c} - ${c+9}`}return`${Y.value} ${o}`}),T=o=>{const c=Ha(o.value)?o.value():o.value;if(c){I=!0,Q(H(c).locale(m.value));return}o.onClick&&o.onClick({attrs:b,slots:x,emit:n})},C=$(()=>{const{type:o}=a;return["week","month","months","year","years","dates"].includes(o)?o:"date"}),g=$(()=>C.value==="dates"||C.value==="months"||C.value==="years"),B=$(()=>C.value==="date"?A.value:C.value),f=$(()=>!!k.length),O=async(o,c)=>{C.value==="month"?(y.value=wa(y.value.year(),o,m.value,V),Q(y.value,!1)):C.value==="months"?Q(o,c??!0):(y.value=wa(y.value.year(),o,m.value,V),A.value="date",["month","year","date","week"].includes(C.value)&&(Q(y.value,!0),await Be(),Ge())),U("month")},z=async(o,c)=>{if(C.value==="year"){const X=y.value.startOf("year").year(o);y.value=Wa(X,m.value,V),Q(y.value,!1)}else if(C.value==="years")Q(o,c??!0);else{const X=y.value.year(o);y.value=Wa(X,m.value,V),A.value="month",["month","year","date","week"].includes(C.value)&&(Q(y.value,!0),await Be(),Ge())}U("year")},te=async o=>{A.value=o,await Be(),Ge()},xe=$(()=>a.type==="datetime"||a.type==="datetimerange"),Te=$(()=>{const o=xe.value||C.value==="dates",c=C.value==="years",X=C.value==="months",we=A.value==="date",Se=A.value==="year",ra=A.value==="month";return o&&we||c&&Se||X&&ra}),qe=$(()=>V?a.parsedValue?ve(a.parsedValue)?V(a.parsedValue[0].toDate()):V(a.parsedValue.toDate()):!0:!1),J=()=>{if(g.value)Q(a.parsedValue);else{let o=a.parsedValue;if(!o){const c=H(p).locale(m.value),X=Ue();o=c.year(X.year()).month(X.month()).date(X.date())}y.value=o,Q(o)}},Z=$(()=>V?V(H().locale(m.value).toDate()):!1),re=()=>{const c=H().locale(m.value).toDate();_.value=!0,(!V||!V(c))&&w(c)&&(y.value=H().locale(m.value),Q(y.value))},se=$(()=>a.timeFormat||ht(a.format)),be=$(()=>a.dateFormat||yt(a.format)),ce=$(()=>{if(K.value)return K.value;if(!(!a.parsedValue&&!F.value))return(a.parsedValue||y.value).format(se.value)}),ye=$(()=>{if(L.value)return L.value;if(!(!a.parsedValue&&!F.value))return(a.parsedValue||y.value).format(be.value)}),De=G(!1),Me=()=>{De.value=!0},$e=()=>{De.value=!1},We=o=>({hour:o.hour(),minute:o.minute(),second:o.second(),year:o.year(),month:o.month(),date:o.date()}),ba=(o,c,X)=>{const{hour:we,minute:Se,second:ra}=We(o),ka=a.parsedValue?a.parsedValue.hour(we).minute(Se).second(ra):o;y.value=ka,Q(y.value,!0),X||(De.value=c)},da=o=>{const c=H(o,se.value).locale(m.value);if(c.isValid()&&w(c)){const{year:X,month:we,date:Se}=We(y.value);y.value=c.year(X).month(we).date(Se),K.value=null,De.value=!1,Q(y.value,!0)}},le=o=>{const c=H(o,be.value).locale(m.value);if(c.isValid()){if(V&&V(c.toDate()))return;const{hour:X,minute:we,second:Se}=We(y.value);y.value=c.hour(X).minute(we).second(Se),L.value=null,Q(y.value,!0)}},Qe=o=>H.isDayjs(o)&&o.isValid()&&(V?!V(o.toDate()):!0),Je=o=>ve(o)?o.map(c=>c.format(a.format)):o.format(a.format),na=o=>H(o,a.format).locale(m.value),Ue=()=>{const o=H(F.value).locale(m.value);if(!F.value){const c=E.value;return H().hour(c.hour()).minute(c.minute()).second(c.second()).locale(m.value)}return o},Ge=()=>{["week","month","year","date"].includes(C.value)&&M.value?.focus()},ha=()=>{Ge(),C.value==="week"&&ma(Pe.down)},ya=o=>{const{code:c}=o;[Pe.up,Pe.down,Pe.left,Pe.right,Pe.home,Pe.end,Pe.pageUp,Pe.pageDown].includes(c)&&(ma(c),o.stopPropagation(),o.preventDefault()),[Pe.enter,Pe.space,Pe.numpadEnter].includes(c)&&L.value===null&&K.value===null&&(o.preventDefault(),Q(y.value,!1))},ma=o=>{const{up:c,down:X,left:we,right:Se,home:ra,end:ka,pageUp:u,pageDown:ee}=Pe,ke={year:{[c]:-4,[X]:4,[we]:-1,[Se]:1,offset:(ge,Ke)=>ge.setFullYear(ge.getFullYear()+Ke)},month:{[c]:-4,[X]:4,[we]:-1,[Se]:1,offset:(ge,Ke)=>ge.setMonth(ge.getMonth()+Ke)},week:{[c]:-1,[X]:1,[we]:-1,[Se]:1,offset:(ge,Ke)=>ge.setDate(ge.getDate()+Ke*7)},date:{[c]:-7,[X]:7,[we]:-1,[Se]:1,[ra]:ge=>-ge.getDay(),[ka]:ge=>-ge.getDay()+6,[u]:ge=>-new Date(ge.getFullYear(),ge.getMonth(),0).getDate(),[ee]:ge=>new Date(ge.getFullYear(),ge.getMonth()+1,0).getDate(),offset:(ge,Ke)=>ge.setDate(ge.getDate()+Ke)}},Re=y.value.toDate();for(;Math.abs(y.value.diff(Re,"year",!0))<1;){const ge=ke[B.value];if(!ge)return;if(ge.offset(Re,Ha(ge[o])?ge[o](Re):ge[o]??0),V&&V(Re))break;const Ke=H(Re).locale(m.value);y.value=Ke,n("pick",Ke,!0);break}},U=o=>{n("panel-change",y.value.toDate(),o,A.value)};return Ee(()=>C.value,o=>{if(["month","year"].includes(o)){A.value=o;return}else if(o==="years"){A.value="year";return}else if(o==="months"){A.value="month";return}A.value="date"},{immediate:!0}),Ee(()=>A.value,()=>{R?.updatePopper()}),Ee(()=>F.value,o=>{o&&(y.value=Ue())},{immediate:!0}),Ee(()=>a.parsedValue,o=>{if(o){if(g.value||ve(o))return;y.value=o}else y.value=Ue()},{immediate:!0}),n("set-picker-option",["isValidValue",Qe]),n("set-picker-option",["formatToString",Je]),n("set-picker-option",["parseUserInput",na]),n("set-picker-option",["handleFocusPicker",ha]),(o,c)=>(j(),W("div",{class:h([e(i).b(),e(s).b(),{"has-sidebar":o.$slots.sidebar||f.value,"has-time":xe.value}])},[q("div",{class:h(e(i).e("body-wrapper"))},[fe(o.$slots,"sidebar",{class:h(e(i).e("sidebar"))}),f.value?(j(),W("div",{key:0,class:h(e(i).e("sidebar"))},[(j(!0),W(Ce,null,Fe(e(k),(X,we)=>(j(),W("button",{key:we,type:"button",class:h(e(i).e("shortcut")),onClick:Se=>T(X)},me(X.text),11,vr))),128))],2)):de("",!0),q("div",{class:h(e(i).e("body"))},[xe.value?(j(),W("div",{key:0,class:h(e(s).e("time-header"))},[q("span",{class:h(e(s).e("editor-wrap"))},[ne(e(oa),{placeholder:e(P)("el.datepicker.selectDate"),"model-value":ye.value,"validate-event":!1,onInput:c[0]||(c[0]=X=>L.value=X),onChange:le},null,8,["placeholder","model-value"])],2),Ne((j(),W("span",{class:h(e(s).e("editor-wrap"))},[ne(e(oa),{placeholder:e(P)("el.datepicker.selectTime"),"model-value":ce.value,"validate-event":!1,onFocus:Me,onInput:c[1]||(c[1]=X=>K.value=X),onChange:da},null,8,["placeholder","model-value"]),ne(e(Ka),{visible:De.value,format:se.value,"parsed-value":y.value,onPick:ba},null,8,["visible","format","parsed-value"])],2)),[[e(za),$e]])],2)):de("",!0),Ne(q("div",{class:h([e(s).e("header"),(A.value==="year"||A.value==="month")&&e(s).e("header--bordered")])},[q("span",{class:h(e(s).e("prev-btn"))},[Ne(q("button",{type:"button","aria-label":e(P)("el.datepicker.prevYear"),class:h(["d-arrow-left",e(i).e("icon-btn")]),onClick:c[2]||(c[2]=X=>pe(!1))},[fe(o.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,gr),[[Xe,A.value!=="date"]]),Ne(q("button",{type:"button","aria-label":e(P)("el.datepicker.prevMonth"),class:h([e(i).e("icon-btn"),"arrow-left"]),onClick:c[3]||(c[3]=X=>ie(!1))},[fe(o.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,br),[[Xe,A.value==="date"]])],2),q("span",{role:"button",class:h(e(s).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:c[4]||(c[4]=va(X=>te("year"),["enter"])),onClick:c[5]||(c[5]=X=>te("year"))},me(v.value),35),Ne(q("span",{role:"button","aria-live":"polite",tabindex:"0",class:h([e(s).e("header-label"),{active:A.value==="month"}]),onKeydown:c[6]||(c[6]=va(X=>te("month"),["enter"])),onClick:c[7]||(c[7]=X=>te("month"))},me(e(P)(`el.datepicker.month${N.value+1}`)),35),[[Xe,A.value==="date"]]),q("span",{class:h(e(s).e("next-btn"))},[Ne(q("button",{type:"button","aria-label":e(P)("el.datepicker.nextMonth"),class:h([e(i).e("icon-btn"),"arrow-right"]),onClick:c[8]||(c[8]=X=>ie(!0))},[fe(o.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,hr),[[Xe,A.value==="date"]]),Ne(q("button",{type:"button","aria-label":e(P)("el.datepicker.nextYear"),class:h([e(i).e("icon-btn"),"d-arrow-right"]),onClick:c[9]||(c[9]=X=>pe(!0))},[fe(o.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,yr),[[Xe,A.value!=="date"]])],2)],2),[[Xe,A.value!=="time"]]),q("div",{class:h(e(i).e("content")),onKeydown:ya},[A.value==="date"?(j(),Ye(Na,{key:0,ref_key:"currentViewRef",ref:M,"selection-mode":C.value,date:y.value,"parsed-value":o.parsedValue,"disabled-date":e(V),"cell-class-name":e(D),onPick:oe},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):de("",!0),A.value==="year"?(j(),Ye(La,{key:1,ref_key:"currentViewRef",ref:M,"selection-mode":C.value,date:y.value,"disabled-date":e(V),"parsed-value":o.parsedValue,onPick:z},null,8,["selection-mode","date","disabled-date","parsed-value"])):de("",!0),A.value==="month"?(j(),Ye(Ya,{key:2,ref_key:"currentViewRef",ref:M,"selection-mode":C.value,date:y.value,"parsed-value":o.parsedValue,"disabled-date":e(V),onPick:O},null,8,["selection-mode","date","parsed-value","disabled-date"])):de("",!0)],34)],2)],2),Ne(q("div",{class:h(e(i).e("footer"))},[Ne(q("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:Z.value,onClick:re},me(e(P)("el.datepicker.now")),9,kr),[[Xe,!g.value&&o.showNow]]),q("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:qe.value,onClick:J},me(e(P)("el.datepicker.confirm")),9,Dr)],2),[[Xe,Te.value]])],2))}});Nt.__docgenInfo={exportName:"default",displayName:"panel-date-pick",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"prev-month"},{name:"next-month"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-pick.vue"]};const wr=Ie({...Ft,...et,visible:Boolean}),Yt=t=>{const{emit:l}=gt(),r=Za(),a=Qa();return i=>{const s=Ha(i.value)?i.value():i.value;if(s){l("pick",[H(s[0]).locale(t.value),H(s[1]).locale(t.value)]);return}i.onClick&&i.onClick({attrs:r,slots:a,emit:l})}},Lt=(t,{defaultValue:l,leftDate:r,rightDate:a,unit:n,onParsedValueChanged:i})=>{const{emit:s}=gt(),{pickerNs:b}=je(_a),x=Ve("date-range-picker"),{t:P,lang:m}=Ae(G(ca)),d=Yt(m),R=G(),k=G(),V=G({endDate:null,selecting:!1}),D=_=>{V.value=_},p=(_=!1)=>{const I=e(R),E=e(k);ga([I,E])&&s("pick",[I,E],_)},F=_=>{V.value.selecting=_,_||(V.value.endDate=null)},M=_=>{if(ve(_)&&_.length===2){const[I,E]=_;R.value=I,r.value=I,k.value=E,i(e(R),e(k))}else y()},y=()=>{const[_,I]=tt(e(l),{lang:e(m),unit:n,unlinkPanels:t.unlinkPanels});R.value=void 0,k.value=void 0,r.value=_,a.value=I};return Ee(l,_=>{_&&y()},{immediate:!0}),Ee(()=>t.parsedValue,M,{immediate:!0}),{minDate:R,maxDate:k,rangeState:V,lang:m,ppNs:b,drpNs:x,handleChangeRange:D,handleRangeConfirm:p,handleShortcutClick:d,onSelect:F,onReset:M,t:P}},Sr=["onClick"],Pr=["aria-label"],Cr=["disabled","aria-label"],xr=["disabled","aria-label"],Mr=["disabled","aria-label"],Rr=["disabled","aria-label"],Vr=["aria-label"],Sa="month",At=Oe({__name:"panel-date-range",props:wr,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(t,{emit:l}){const r=t,a=l,n=je("EP_PICKER_BASE"),{disabledDate:i,cellClassName:s,defaultTime:b,clearable:x}=n.props,P=He(n.props,"format"),m=He(n.props,"shortcuts"),d=He(n.props,"defaultValue"),{lang:R}=Ae(G(ca)),k=G(H().locale(R.value)),V=G(H().locale(R.value).add(1,Sa)),{minDate:D,maxDate:p,rangeState:F,ppNs:M,drpNs:y,handleChangeRange:_,handleRangeConfirm:I,handleShortcutClick:E,onSelect:N,onReset:Y,t:S}=Lt(r,{defaultValue:d,leftDate:k,rightDate:V,unit:Sa,onParsedValueChanged:ma});Ee(()=>r.visible,U=>{!U&&F.value.selecting&&(Y(r.parsedValue),N(!1))});const L=G({min:null,max:null}),K=G({min:null,max:null}),w=$(()=>`${k.value.year()} ${S("el.datepicker.year")} ${S(`el.datepicker.month${k.value.month()+1}`)}`),ae=$(()=>`${V.value.year()} ${S("el.datepicker.year")} ${S(`el.datepicker.month${V.value.month()+1}`)}`),Q=$(()=>k.value.year()),oe=$(()=>k.value.month()),ie=$(()=>V.value.year()),pe=$(()=>V.value.month()),A=$(()=>!!m.value.length),v=$(()=>L.value.min!==null?L.value.min:D.value?D.value.format(f.value):""),T=$(()=>L.value.max!==null?L.value.max:p.value||D.value?(p.value||D.value).format(f.value):""),C=$(()=>K.value.min!==null?K.value.min:D.value?D.value.format(B.value):""),g=$(()=>K.value.max!==null?K.value.max:p.value||D.value?(p.value||D.value).format(B.value):""),B=$(()=>r.timeFormat||ht(P.value)),f=$(()=>r.dateFormat||yt(P.value)),O=U=>ga(U)&&(i?!i(U[0].toDate())&&!i(U[1].toDate()):!0),z=()=>{k.value=k.value.subtract(1,"month"),r.unlinkPanels||(V.value=k.value.add(1,"month")),Z("month")},te=()=>{r.unlinkPanels?V.value=V.value.add(1,"month"):(k.value=k.value.add(1,"month"),V.value=k.value.add(1,"month")),Z("month")},xe=()=>{k.value=k.value.add(1,"year"),Z("year")},Te=()=>{k.value=k.value.add(1,"month"),Z("month")},qe=()=>{V.value=V.value.subtract(1,"year"),Z("year")},J=()=>{V.value=V.value.subtract(1,"month"),Z("month")},Z=U=>{a("panel-change",[k.value.toDate(),V.value.toDate()],U)},re=$(()=>{const U=(oe.value+1)%12,o=oe.value+1>=12?1:0;return r.unlinkPanels&&new Date(Q.value+o,U)<new Date(ie.value,pe.value)}),se=$(()=>r.unlinkPanels&&ie.value*12+pe.value-(Q.value*12+oe.value+1)>=12),be=$(()=>!(D.value&&p.value&&!F.value.selecting&&ga([D.value,p.value]))),ce=$(()=>r.type==="datetime"||r.type==="datetimerange"),ye=(U,o)=>{if(U)return b?H(b[o]||b).locale(R.value).year(U.year()).month(U.month()).date(U.date()):U},De=(U,o=!0)=>{const c=U.minDate,X=U.maxDate,we=ye(c,0),Se=ye(X,1);p.value===Se&&D.value===we||(a("calendar-change",[c.toDate(),X&&X.toDate()]),p.value=Se,D.value=we,!(!o||ce.value)&&I())},Me=G(!1),$e=G(!1),We=()=>{Me.value=!1},ba=()=>{$e.value=!1},da=(U,o)=>{L.value[o]=U;const c=H(U,f.value).locale(R.value);if(c.isValid()){if(i&&i(c.toDate()))return;o==="min"?(k.value=c,D.value=(D.value||k.value).year(c.year()).month(c.month()).date(c.date()),!r.unlinkPanels&&(!p.value||p.value.isBefore(D.value))&&(V.value=c.add(1,"month"),p.value=D.value.add(1,"month"))):(V.value=c,p.value=(p.value||V.value).year(c.year()).month(c.month()).date(c.date()),!r.unlinkPanels&&(!D.value||D.value.isAfter(p.value))&&(k.value=c.subtract(1,"month"),D.value=p.value.subtract(1,"month")))}},le=(U,o)=>{L.value[o]=null},Qe=(U,o)=>{K.value[o]=U;const c=H(U,B.value).locale(R.value);c.isValid()&&(o==="min"?(Me.value=!0,D.value=(D.value||k.value).hour(c.hour()).minute(c.minute()).second(c.second())):($e.value=!0,p.value=(p.value||V.value).hour(c.hour()).minute(c.minute()).second(c.second()),V.value=p.value))},Je=(U,o)=>{K.value[o]=null,o==="min"?(k.value=D.value,Me.value=!1,(!p.value||p.value.isBefore(D.value))&&(p.value=D.value)):(V.value=p.value,$e.value=!1,p.value&&p.value.isBefore(D.value)&&(D.value=p.value))},na=(U,o,c)=>{K.value.min||(U&&(k.value=U,D.value=(D.value||k.value).hour(U.hour()).minute(U.minute()).second(U.second())),c||(Me.value=o),(!p.value||p.value.isBefore(D.value))&&(p.value=D.value,V.value=U))},Ue=(U,o,c)=>{K.value.max||(U&&(V.value=U,p.value=(p.value||V.value).hour(U.hour()).minute(U.minute()).second(U.second())),c||($e.value=o),p.value&&p.value.isBefore(D.value)&&(D.value=p.value))},Ge=()=>{k.value=tt(e(d),{lang:e(R),unit:"month",unlinkPanels:r.unlinkPanels})[0],V.value=k.value.add(1,"month"),p.value=void 0,D.value=void 0,a("pick",null)},ha=U=>ve(U)?U.map(o=>o.format(P.value)):U.format(P.value),ya=U=>ve(U)?U.map(o=>H(o,P.value).locale(R.value)):H(U,P.value).locale(R.value);function ma(U,o){if(r.unlinkPanels&&o){const c=U?.year()||0,X=U?.month()||0,we=o.year(),Se=o.month();V.value=c===we&&X===Se?o.add(1,Sa):o}else V.value=k.value.add(1,Sa),o&&(V.value=V.value.hour(o.hour()).minute(o.minute()).second(o.second()))}return a("set-picker-option",["isValidValue",O]),a("set-picker-option",["parseUserInput",ya]),a("set-picker-option",["formatToString",ha]),a("set-picker-option",["handleClear",Ge]),(U,o)=>(j(),W("div",{class:h([e(M).b(),e(y).b(),{"has-sidebar":U.$slots.sidebar||A.value,"has-time":ce.value}])},[q("div",{class:h(e(M).e("body-wrapper"))},[fe(U.$slots,"sidebar",{class:h(e(M).e("sidebar"))}),A.value?(j(),W("div",{key:0,class:h(e(M).e("sidebar"))},[(j(!0),W(Ce,null,Fe(m.value,(c,X)=>(j(),W("button",{key:X,type:"button",class:h(e(M).e("shortcut")),onClick:we=>e(E)(c)},me(c.text),11,Sr))),128))],2)):de("",!0),q("div",{class:h(e(M).e("body"))},[ce.value?(j(),W("div",{key:0,class:h(e(y).e("time-header"))},[q("span",{class:h(e(y).e("editors-wrap"))},[q("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{disabled:e(F).selecting,placeholder:e(S)("el.datepicker.startDate"),class:h(e(y).e("editor")),"model-value":v.value,"validate-event":!1,onInput:o[0]||(o[0]=c=>da(c,"min")),onChange:o[1]||(o[1]=c=>le(c,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),Ne((j(),W("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(F).selecting,placeholder:e(S)("el.datepicker.startTime"),"model-value":C.value,"validate-event":!1,onFocus:o[2]||(o[2]=c=>Me.value=!0),onInput:o[3]||(o[3]=c=>Qe(c,"min")),onChange:o[4]||(o[4]=c=>Je(c,"min"))},null,8,["class","disabled","placeholder","model-value"]),ne(e(Ka),{visible:Me.value,format:B.value,"datetime-role":"start","parsed-value":k.value,onPick:na},null,8,["visible","format","parsed-value"])],2)),[[e(za),We]])],2),q("span",null,[ne(e(he),{name:"solid chevron-right"})]),q("span",{class:h([e(y).e("editors-wrap"),"is-right"])},[q("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(F).selecting,placeholder:e(S)("el.datepicker.endDate"),"model-value":T.value,readonly:!e(D),"validate-event":!1,onInput:o[5]||(o[5]=c=>da(c,"max")),onChange:o[6]||(o[6]=c=>le(c,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),Ne((j(),W("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(F).selecting,placeholder:e(S)("el.datepicker.endTime"),"model-value":g.value,readonly:!e(D),"validate-event":!1,onFocus:o[7]||(o[7]=c=>e(D)&&($e.value=!0)),onInput:o[8]||(o[8]=c=>Qe(c,"max")),onChange:o[9]||(o[9]=c=>Je(c,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),ne(e(Ka),{"datetime-role":"end",visible:$e.value,format:B.value,"parsed-value":V.value,onPick:Ue},null,8,["visible","format","parsed-value"])],2)),[[e(za),ba]])],2)],2)):de("",!0),q("div",{class:h([[e(M).e("content"),e(y).e("content")],"is-left"])},[q("div",{class:h(e(y).e("header"))},[q("button",{type:"button",class:h([e(M).e("icon-btn"),"arrow-left"]),"aria-label":e(S)("el.datepicker.prevMonth"),onClick:z},[fe(U.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Pr),U.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!se.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!se.value}],"d-arrow-right"]),"aria-label":e(S)("el.datepicker.nextYear"),onClick:xe},[fe(U.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Cr)):de("",!0),U.unlinkPanels?(j(),W("button",{key:1,type:"button",disabled:!re.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!re.value}],"arrow-right"]),"aria-label":e(S)("el.datepicker.nextMonth"),onClick:Te},[fe(U.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,xr)):de("",!0),q("div",null,me(w.value),1)],2),ne(Na,{"selection-mode":"range",date:k.value,"min-date":e(D),"max-date":e(p),"range-state":e(F),"disabled-date":e(i),"cell-class-name":e(s),onChangerange:e(_),onPick:De,onSelect:e(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),q("div",{class:h([[e(M).e("content"),e(y).e("content")],"is-right"])},[q("div",{class:h(e(y).e("header"))},[U.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!se.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!se.value}],"d-arrow-left"]),"aria-label":e(S)("el.datepicker.prevYear"),onClick:qe},[fe(U.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Mr)):de("",!0),U.unlinkPanels?(j(),W("button",{key:1,type:"button",disabled:!re.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!re.value}],"arrow-left"]),"aria-label":e(S)("el.datepicker.prevMonth"),onClick:J},[fe(U.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Rr)):de("",!0),q("button",{type:"button",class:h([e(M).e("icon-btn"),"arrow-right"]),"aria-label":e(S)("el.datepicker.nextMonth"),onClick:te},[fe(U.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Vr),q("div",null,me(ae.value),1)],2),ne(Na,{"selection-mode":"range",date:V.value,"min-date":e(D),"max-date":e(p),"range-state":e(F),"disabled-date":e(i),"cell-class-name":e(s),onChangerange:e(_),onPick:De,onSelect:e(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),ce.value?(j(),W("div",{key:0,class:h(e(M).e("footer"))},[e(x)?(j(),Ye(e(lt),{key:0,text:"",size:"sm",class:h(e(M).e("link-btn")),onClick:Ge},{default:_e(()=>[pa(me(e(S)("el.datepicker.clear")),1)]),_:1},8,["class"])):de("",!0),ne(e(lt),{plain:"",size:"sm",class:h(e(M).e("link-btn")),disabled:be.value,onClick:o[10]||(o[10]=c=>e(I)(!1))},{default:_e(()=>[pa(me(e(S)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):de("",!0)],2))}});At.__docgenInfo={exportName:"default",displayName:"panel-date-range",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"calendar-change"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-month"},{name:"next-year"},{name:"next-month"},{name:"prev-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-range.vue"]};const Ir=Ie({...et}),$r=["pick","set-picker-option","calendar-change"],Er=({unlinkPanels:t,leftDate:l,rightDate:r})=>{const{t:a}=Ae(),n=()=>{l.value=l.value.subtract(1,"year"),t.value||(r.value=r.value.subtract(1,"year"))},i=()=>{t.value||(l.value=l.value.add(1,"year")),r.value=r.value.add(1,"year")},s=()=>{l.value=l.value.add(1,"year")},b=()=>{r.value=r.value.subtract(1,"year")},x=$(()=>`${l.value.year()} ${a("el.datepicker.year")}`),P=$(()=>`${r.value.year()} ${a("el.datepicker.year")}`),m=$(()=>l.value.year()),d=$(()=>r.value.year()===l.value.year()?l.value.year()+1:r.value.year());return{leftPrevYear:n,rightNextYear:i,leftNextYear:s,rightPrevYear:b,leftLabel:x,rightLabel:P,leftYear:m,rightYear:d}},Tr=["onClick"],Fr=["disabled"],Or=["disabled"],Pa="year",_t=Oe({name:"DatePickerMonthRange",__name:"panel-month-range",props:Ir,emits:$r,setup(t,{emit:l}){const r=t,a=l,{lang:n}=Ae(G(ca)),i=je("EP_PICKER_BASE"),{shortcuts:s,disabledDate:b}=i.props,x=He(i.props,"format"),P=He(i.props,"defaultValue"),m=G(H().locale(n.value)),d=G(H().locale(n.value).add(1,Pa)),{minDate:R,maxDate:k,rangeState:V,ppNs:D,drpNs:p,handleChangeRange:F,handleRangeConfirm:M,handleShortcutClick:y,onSelect:_}=Lt(r,{defaultValue:P,leftDate:m,rightDate:d,unit:Pa,onParsedValueChanged:v}),I=$(()=>!!s.length),{leftPrevYear:E,rightNextYear:N,leftNextYear:Y,rightPrevYear:S,leftLabel:L,rightLabel:K,leftYear:w,rightYear:ae}=Er({unlinkPanels:He(r,"unlinkPanels"),leftDate:m,rightDate:d}),Q=$(()=>r.unlinkPanels&&ae.value>w.value+1),oe=(T,C=!0)=>{const g=T.minDate,B=T.maxDate;k.value===B&&R.value===g||(a("calendar-change",[g.toDate(),B&&B.toDate()]),k.value=B,R.value=g,C&&M())},ie=()=>{m.value=tt(e(P),{lang:e(n),unit:"year",unlinkPanels:r.unlinkPanels})[0],d.value=m.value.add(1,"year"),a("pick",null)},pe=T=>ve(T)?T.map(C=>C.format(x.value)):T.format(x.value),A=T=>ve(T)?T.map(C=>H(C,x.value).locale(n.value)):H(T,x.value).locale(n.value);function v(T,C){if(r.unlinkPanels&&C){const g=T?.year()||0,B=C.year();d.value=g===B?C.add(1,Pa):C}else d.value=m.value.add(1,Pa)}return a("set-picker-option",["isValidValue",ga]),a("set-picker-option",["formatToString",pe]),a("set-picker-option",["parseUserInput",A]),a("set-picker-option",["handleClear",ie]),(T,C)=>(j(),W("div",{class:h([e(D).b(),e(p).b(),{"has-sidebar":!!T.$slots.sidebar||I.value}])},[q("div",{class:h(e(D).e("body-wrapper"))},[fe(T.$slots,"sidebar",{class:h(e(D).e("sidebar"))}),I.value?(j(),W("div",{key:0,class:h(e(D).e("sidebar"))},[(j(!0),W(Ce,null,Fe(e(s),(g,B)=>(j(),W("button",{key:B,type:"button",class:h(e(D).e("shortcut")),onClick:f=>e(y)(g)},me(g.text),11,Tr))),128))],2)):de("",!0),q("div",{class:h(e(D).e("body"))},[q("div",{class:h([[e(D).e("content"),e(p).e("content")],"is-left"])},[q("div",{class:h(e(p).e("header"))},[q("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-left"]),onClick:C[0]||(C[0]=(...g)=>e(E)&&e(E)(...g))},[fe(T.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],2),T.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!Q.value,class:h([[e(D).e("icon-btn"),{[e(D).is("disabled")]:!Q.value}],"d-arrow-right"]),onClick:C[1]||(C[1]=(...g)=>e(Y)&&e(Y)(...g))},[fe(T.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Fr)):de("",!0),q("div",null,me(e(L)),1)],2),ne(Ya,{"selection-mode":"range",date:m.value,"min-date":e(R),"max-date":e(k),"range-state":e(V),"disabled-date":e(b),onChangerange:e(F),onPick:oe,onSelect:e(_)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),q("div",{class:h([[e(D).e("content"),e(p).e("content")],"is-right"])},[q("div",{class:h(e(p).e("header"))},[T.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!Q.value,class:h([[e(D).e("icon-btn"),{"is-disabled":!Q.value}],"d-arrow-left"]),onClick:C[2]||(C[2]=(...g)=>e(S)&&e(S)(...g))},[fe(T.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Or)):de("",!0),q("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-right"]),onClick:C[3]||(C[3]=(...g)=>e(N)&&e(N)(...g))},[fe(T.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],2),q("div",null,me(e(K)),1)],2),ne(Ya,{"selection-mode":"range",date:d.value,"min-date":e(R),"max-date":e(k),"range-state":e(V),"disabled-date":e(b),onChangerange:e(F),onPick:oe,onSelect:e(_)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}});_t.__docgenInfo={name:"DatePickerMonthRange",exportName:"default",displayName:"panel-month-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-month-range.vue"]};const Nr=Ie({...et}),Yr=["pick","set-picker-option","calendar-change"],Lr=({unlinkPanels:t,leftDate:l,rightDate:r})=>{const a=()=>{l.value=l.value.subtract(10,"year"),t.value||(r.value=r.value.subtract(10,"year"))},n=()=>{t.value||(l.value=l.value.add(10,"year")),r.value=r.value.add(10,"year")},i=()=>{l.value=l.value.add(10,"year")},s=()=>{r.value=r.value.subtract(10,"year")},b=$(()=>{const d=Math.floor(l.value.year()/10)*10;return`${d}-${d+9}`}),x=$(()=>{const d=Math.floor(r.value.year()/10)*10;return`${d}-${d+9}`}),P=$(()=>Math.floor(l.value.year()/10)*10+9),m=$(()=>Math.floor(r.value.year()/10)*10);return{leftPrevYear:a,rightNextYear:n,leftNextYear:i,rightPrevYear:s,leftLabel:b,rightLabel:x,leftYear:P,rightYear:m}},Ar=["onClick"],_r=["disabled"],Br=["disabled"],ct="year",Bt=Oe({name:"DatePickerYearRange",__name:"panel-year-range",props:Nr,emits:Yr,setup(t,{emit:l}){const r=t,a=l,{lang:n}=Ae(G(ca)),i=G(H().locale(n.value)),s=G(i.value.add(10,"year")),{pickerNs:b}=je(_a),x=Ve("date-range-picker"),P=$(()=>!!oe.length),m=$(()=>[b.b(),x.b(),{"has-sidebar":!!Qa().sidebar||P.value}]),d=$(()=>({content:[b.e("content"),x.e("content"),"is-left"],arrowLeftBtn:[b.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[b.e("icon-btn"),{[b.is("disabled")]:!E.value},"d-arrow-right"]})),R=$(()=>({content:[b.e("content"),x.e("content"),"is-right"],arrowLeftBtn:[b.e("icon-btn"),{"is-disabled":!E.value},"d-arrow-left"],arrowRightBtn:[b.e("icon-btn"),"d-arrow-right"]})),k=Yt(n),{leftPrevYear:V,rightNextYear:D,leftNextYear:p,rightPrevYear:F,leftLabel:M,rightLabel:y,leftYear:_,rightYear:I}=Lr({unlinkPanels:He(r,"unlinkPanels"),leftDate:i,rightDate:s}),E=$(()=>r.unlinkPanels&&I.value>_.value+1),N=G(),Y=G(),S=G({endDate:null,selecting:!1}),L=f=>{S.value=f},K=(f,O=!0)=>{const z=f.minDate,te=f.maxDate;Y.value===te&&N.value===z||(a("calendar-change",[z.toDate(),te&&te.toDate()]),Y.value=te,N.value=z,O&&w())},w=(f=!1)=>{ga([N.value,Y.value])&&a("pick",[N.value,Y.value],f)},ae=f=>{S.value.selecting=f,f||(S.value.endDate=null)},Q=je("EP_PICKER_BASE"),{shortcuts:oe,disabledDate:ie}=Q.props,pe=He(Q.props,"format"),A=He(Q.props,"defaultValue"),v=()=>{let f;if(ve(A.value)){const O=H(A.value[0]);let z=H(A.value[1]);return r.unlinkPanels||(z=O.add(10,ct)),[O,z]}else A.value?f=H(A.value):f=H();return f=f.locale(n.value),[f,f.add(10,ct)]};Ee(()=>A.value,f=>{if(f){const O=v();i.value=O[0],s.value=O[1]}},{immediate:!0}),Ee(()=>r.parsedValue,f=>{if(f&&f.length===2)if(N.value=f[0],Y.value=f[1],i.value=N.value,r.unlinkPanels&&Y.value){const O=N.value.year(),z=Y.value.year();s.value=O===z?Y.value.add(10,"year"):Y.value}else s.value=i.value.add(10,"year");else{const O=v();N.value=void 0,Y.value=void 0,i.value=O[0],s.value=O[1]}},{immediate:!0});const T=f=>ve(f)?f.map(O=>H(O,pe.value).locale(n.value)):H(f,pe.value).locale(n.value),C=f=>ve(f)?f.map(O=>O.format(pe.value)):f.format(pe.value),g=f=>ga(f)&&(ie?!ie(f[0].toDate())&&!ie(f[1].toDate()):!0),B=()=>{const f=v();i.value=f[0],s.value=f[1],Y.value=void 0,N.value=void 0,a("pick",null)};return a("set-picker-option",["isValidValue",g]),a("set-picker-option",["parseUserInput",T]),a("set-picker-option",["formatToString",C]),a("set-picker-option",["handleClear",B]),(f,O)=>(j(),W("div",{class:h(m.value)},[q("div",{class:h(e(b).e("body-wrapper"))},[fe(f.$slots,"sidebar",{class:h(e(b).e("sidebar"))}),P.value?(j(),W("div",{key:0,class:h(e(b).e("sidebar"))},[(j(!0),W(Ce,null,Fe(e(oe),(z,te)=>(j(),W("button",{key:te,type:"button",class:h(e(b).e("shortcut")),onClick:xe=>e(k)(z)},me(z.text),11,Ar))),128))],2)):de("",!0),q("div",{class:h(e(b).e("body"))},[q("div",{class:h(d.value.content)},[q("div",{class:h(e(x).e("header"))},[q("button",{type:"button",class:h(d.value.arrowLeftBtn),onClick:O[0]||(O[0]=(...z)=>e(V)&&e(V)(...z))},[fe(f.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],2),f.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!E.value,class:h(d.value.arrowRightBtn),onClick:O[1]||(O[1]=(...z)=>e(p)&&e(p)(...z))},[fe(f.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,_r)):de("",!0),q("div",null,me(e(M)),1)],2),ne(La,{"selection-mode":"range",date:i.value,"min-date":N.value,"max-date":Y.value,"range-state":S.value,"disabled-date":e(ie),onChangerange:L,onPick:K,onSelect:ae},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),q("div",{class:h(R.value.content)},[q("div",{class:h(e(x).e("header"))},[f.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!E.value,class:h(R.value.arrowLeftBtn),onClick:O[2]||(O[2]=(...z)=>e(F)&&e(F)(...z))},[fe(f.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Br)):de("",!0),q("button",{type:"button",class:h(R.value.arrowRightBtn),onClick:O[3]||(O[3]=(...z)=>e(D)&&e(D)(...z))},[fe(f.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],2),q("div",null,me(e(y)),1)],2),ne(La,{"selection-mode":"range",date:s.value,"min-date":N.value,"max-date":Y.value,"range-state":S.value,"disabled-date":e(ie),onChangerange:L,onPick:K,onSelect:ae},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}});Bt.__docgenInfo={name:"DatePickerYearRange",exportName:"default",displayName:"panel-year-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-year-range.vue"]};const jr=function(t){switch(t){case"daterange":case"datetimerange":return At;case"monthrange":return _t;case"yearrange":return Bt;default:return Nt}};H.extend(Tn);H.extend(Yn);H.extend(Mt);H.extend(An);H.extend(Bn);H.extend(qn);H.extend(Hn);H.extend(Kn);const qr=Oe({name:"GDatePicker",install:null,props:Wn,emits:["update:modelValue"],setup(t,{expose:l,emit:r,slots:a}){const n=Ve("picker-panel");Ta("ElPopperOptions",ea(He(t,"popperOptions"))),Ta(_a,{slots:a,pickerNs:n});const i=G();l({focus:()=>{i.value?.focus()},blur:()=>{i.value?.blur()},handleOpen:()=>{i.value?.handleOpen()},handleClose:()=>{i.value?.handleClose()}});const b=x=>{r("update:modelValue",x)};return()=>{const x=t.format??(pn[t.type]||fn),P=jr(t.type);return fa(fa(vn,{...t,format:x,type:t.type,ref:i,"onUpdate:modelValue":b},{default:m=>fa(P,{...m},{"prev-month":a["prev-month"],"next-month":a["next-month"],"prev-year":a["prev-year"],"next-year":a["next-year"]}),"range-separator":a["range-separator"]}))}}}),Gr=kt(qr),dt=["hours","minutes","seconds"],Hr="HH:mm:ss",ja=(t,l)=>[t>0?t-1:void 0,t,t<l?t+1:void 0],mt=function(t,l){const r=rt(t),a=rt(l);return r&&a?t.getTime()===l.getTime():!r&&!a?t===l:!1},pt=function(t,l){const r=ve(t),a=ve(l);return r&&a?t.length!==l.length?!1:t.every((n,i)=>mt(n,l[i])):!r&&!a?mt(t,l):!1},ft=function(t,l,r){const a=Dt(l)||l==="x"?H(t).locale(r):H(t,l).locale(r);return a.isValid()?a:void 0},vt=function(t,l,r){return Dt(l)?t:l==="x"?+t:H(t).locale(r).format(l)},qa=(t,l)=>{const r=[],a=l?.();for(let n=0;n<t;n++)r.push(a?.includes(n)??!1);return r},Ca=t=>ve(t)?t.map(l=>l.toDate()):t.toDate(),jt=Ie({disabledHours:{type:ue(Function)},disabledMinutes:{type:ue(Function)},disabledSeconds:{type:ue(Function)}}),qt=Ie({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Gt=Ie({id:{type:ue([Array,String])},name:{type:ue([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:ue([String,Object]),default:Mn},editable:{type:Boolean,default:!0},prefixIcon:{type:ue(String),default:""},readonly:Boolean,disabled:Boolean,label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},popperOptions:{type:ue(Object),default:()=>({})},modelValue:{type:ue([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:ue([Date,Array])},defaultTime:{type:ue([Date,Array])},isRange:Boolean,...jt,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:ue([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:ue(String),values:sn,default:"bottom"},fallbackPlacements:{type:ue(Array),default:["bottom","top","right","left"]},...rn,...yn(["ariaLabel"]),showNow:{type:Boolean,default:!0}}),Ur=Ie({id:{type:ue(Array)},name:{type:ue(Array)},modelValue:{type:ue([Array,String])},startPlaceholder:String,endPlaceholder:String,label:String}),Kr=["id","name","placeholder","value"],zr=["id","name","placeholder","value"],Ht=Oe({name:"PickerRangeTrigger",inheritAttrs:!1,__name:"picker-range-trigger",props:Ur,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(t,{expose:l,emit:r}){const a=t,n=r,i=Rn(),s=Ve("input"),b=Ve("date"),x=Ve("range"),P=G(void 0),m=G(null),d=G(),R=G(),{wrapperRef:k,isFocused:V}=Pt(d),D=w=>{n("click",w)},p=w=>{n("mouseenter",w)},F=w=>{n("mouseleave",w)},M=w=>{n("mouseenter",w)},y=w=>{n("startInput",w)},_=w=>{n("endInput",w)},I=w=>{n("startChange",w)},E=w=>{n("endChange",w)},N=()=>{d.value?.focus()},Y=()=>{d.value?.blur(),R.value?.blur()},S=$(()=>{const w=!!L.value||V.value;return{left:w?void 0:`calc(${P.value} + 16px)`,zIndex:w?void 0:10}}),L=$(()=>wt(a.modelValue)?"":String(a.modelValue));return St(m,()=>{requestAnimationFrame(()=>{const w=m.value?.getBoundingClientRect().width;P.value=`${w}px`})}),l({focus:N,blur:Y}),(w,ae)=>(j(),W("div",{ref_key:"wrapperRef",ref:k,class:h([e(b).is("active",e(V)),w.$attrs.class]),style:Da(w.$attrs.style),onClick:D,onMouseenter:p,onMouseleave:F,onTouchstartPassive:M},[fe(w.$slots,"prefix"),w.modelValue?(j(),W("div",{key:0,class:h([e(s).e("label")]),style:Da(S.value)},me(w.label),7)):de("",!0),q("input",Ua(e(i),{id:w.id&&w.id[0],ref_key:"inputRef",ref:d,name:w.name&&w.name[0],placeholder:w.startPlaceholder,value:w.modelValue&&w.modelValue[0],class:e(x).b("input"),onInput:y,onChange:I}),null,16,Kr),fe(w.$slots,"range-separator"),q("input",Ua(e(i),{id:w.id&&w.id[1],ref_key:"endInputRef",ref:R,name:w.name&&w.name[1],placeholder:w.endPlaceholder,value:w.modelValue&&w.modelValue[1],class:e(x).b("input"),onInput:_,onChange:E}),null,16,zr),fe(w.$slots,"suffix")],38))}});Ht.__docgenInfo={name:"PickerRangeTrigger",exportName:"default",displayName:"picker-range-trigger",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],events:[{name:"mouseenter"},{name:"mouseleave"},{name:"click"},{name:"touchstart"},{name:"focus"},{name:"blur"},{name:"startInput"},{name:"endInput"},{name:"startChange"},{name:"endChange"}],slots:[{name:"prefix"},{name:"range-separator"},{name:"suffix"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker-range-trigger.vue"]};const Ut=Oe({name:"Picker",__name:"picker",props:Gt,emits:["update:modelValue","change","focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(t,{expose:l,emit:r}){const a=t,n=r,i=Za(),{lang:s}=Ae(),b=Ve("date"),x=Ve("input"),P=Ve("range"),m=G(void 0),d=G(null),{form:R,formItem:k}=xn(),V=je("ElPopperOptions",{}),{valueOnClear:D}=on(a,null),p=G(),F=G(),M=G(!1),y=G(!1),_=G(null);let I=!1;const{isFocused:E,handleFocus:N,handleBlur:Y}=Pt(F,{beforeFocus(){return a.readonly||O.value},afterFocus(){M.value=!0},beforeBlur(u){return!I&&p.value?.isFocusInsideContent(u)},afterBlur(){Qe(),M.value=!1,I=!1,a.validateEvent&&k?.validate("blur").catch(u=>it())}}),S=$(()=>{const u=!!L.value||E.value;return{left:u?void 0:`calc(${m.value} + 16px)`,zIndex:u?void 0:10}}),L=$(()=>wt(a.modelValue)?"":String(a.modelValue)),K=()=>{if(!a.prefixIcon){m.value="0";return}requestAnimationFrame(()=>{const u=d.value?.getBoundingClientRect().width;m.value=`${u}px`})},w=$(()=>[b.b("editor"),b.bm("editor",a.type),x.e("wrapper"),b.is("disabled",O.value),b.is("active",M.value),P.b("editor"),i.class]),ae=$(()=>[x.e("icon"),P.e("close-icon"),se.value?"":P.e("close-icon--hidden")]);Ee(M,u=>{u?Be(()=>{u&&(_.value=a.modelValue)}):(le.value=null,Be(()=>{Q(a.modelValue)}))});const Q=(u,ee)=>{(ee||!pt(u,_.value))&&(n("change",u),a.validateEvent&&k?.validate("change").catch(ke=>it()))},oe=u=>{if(!pt(a.modelValue,u)){let ee;ve(u)?ee=u.map(ke=>vt(ke,a.valueFormat,s.value)):u&&(ee=vt(u,a.valueFormat,s.value)),n("update:modelValue",u&&ee,s.value)}},ie=u=>{n("keydown",u)},pe=$(()=>F.value?Array.from(F.value.$el.querySelectorAll("input")):[]),A=(u,ee,ke)=>{const Re=pe.value;Re.length&&(!ke||ke==="min"?(Re[0].setSelectionRange(u,ee),Re[0].focus()):ke==="max"&&(Re[1].setSelectionRange(u,ee),Re[1].focus()))},v=(u="",ee=!1)=>{M.value=ee;let ke;ve(u)?ke=u.map(Re=>Re.toDate()):ke=u&&u.toDate(),le.value=null,oe(ke)},T=()=>{y.value=!0},C=()=>{n("visible-change",!0)},g=()=>{y.value=!1,M.value=!1,n("visible-change",!1)},B=()=>{M.value=!0},f=()=>{M.value=!1},O=$(()=>a.disabled||R?.disabled),z=$(()=>{let u;if(ce.value?c.value.getDefaultValue&&(u=c.value.getDefaultValue()):ve(a.modelValue)?u=a.modelValue.map(ee=>ft(ee,a.valueFormat,s.value)):u=ft(a.modelValue,a.valueFormat,s.value),c.value.getRangeAvailableTime){const ee=c.value.getRangeAvailableTime(u);Vn(ee,u)||(u=ee,ce.value||oe(Ca(u)))}return ve(u)&&u.some(ee=>!ee)&&(u=[]),u}),te=$(()=>{if(!c.value.panelReady)return"";const u=na(z.value);return ve(le.value)?[le.value[0]||u&&u[0]||"",le.value[1]||u&&u[1]||""]:le.value!==null?le.value:!Te.value&&ce.value||!M.value&&ce.value?"":u?qe.value||J.value||Z.value?u.join(", "):u:""}),xe=$(()=>a.type.includes("time")),Te=$(()=>a.type.startsWith("time")),qe=$(()=>a.type==="dates"),J=$(()=>a.type==="months"),Z=$(()=>a.type==="years"),re=$(()=>a.prefixIcon||(xe.value?"regular clock":"regular calendar")),se=G(!1),be=u=>{a.readonly||O.value||(se.value&&(u.stopPropagation(),c.value.handleClear?c.value.handleClear():oe(D.value),Q(D.value,!0),se.value=!1,g()),n("clear"))},ce=$(()=>{const{modelValue:u}=a;return!u||ve(u)&&!u.filter(Boolean).length}),ye=async u=>{a.readonly||O.value||(u.target?.tagName!=="INPUT"||E.value)&&(M.value=!0)},De=()=>{a.readonly||O.value||!ce.value&&a.clearable&&(se.value=!0)},Me=()=>{se.value=!1},$e=u=>{a.readonly||O.value||(u.touches[0].target?.tagName!=="INPUT"||E.value)&&(M.value=!0)},We=$(()=>a.type.includes("range")),ba=$(()=>e(p)?.popperRef?.contentRef),da=Pn(F,u=>{const ee=e(ba),ke=Cn(F);ee&&(u.target===ee||u.composedPath().includes(ee))||u.target===ke||ke&&u.composedPath().includes(ke)||(M.value=!1)});an(()=>{da?.()});const le=G(null);St(d,K);const Qe=()=>{if(le.value){const u=Je(te.value);u&&Ue(u)&&(oe(Ca(u)),le.value=null)}le.value===""&&(oe(D.value),Q(D.value),le.value=null)},Je=u=>u?c.value.parseUserInput(u):null,na=u=>u?c.value.formatToString(u):null,Ue=u=>c.value.isValidValue(u),Ge=async u=>{if(a.readonly||O.value)return;const{code:ee}=u;if(ie(u),ee===Pe.esc){M.value===!0&&(M.value=!1,u.preventDefault(),u.stopPropagation());return}if(ee===Pe.down&&(c.value.handleFocusPicker&&(u.preventDefault(),u.stopPropagation()),M.value===!1&&(M.value=!0,await Be()),c.value.handleFocusPicker)){c.value.handleFocusPicker();return}if(ee===Pe.tab){I=!0;return}if(ee===Pe.enter||ee===Pe.numpadEnter){(le.value===null||le.value===""||Ue(Je(te.value)))&&(Qe(),M.value=!1),u.stopPropagation();return}if(le.value){u.stopPropagation();return}c.value.handleKeydownInput&&c.value.handleKeydownInput(u)},ha=u=>{le.value=u,M.value||(M.value=!0)},ya=u=>{const ee=u.target;le.value?le.value=[ee.value,le.value[1]]:le.value=[ee.value,null]},ma=u=>{const ee=u.target;le.value?le.value=[le.value[0],ee.value]:le.value=[null,ee.value]},U=()=>{const u=le.value,ee=Je(u&&u[0]),ke=e(z);if(ee&&ee.isValid()){le.value=[na(ee),te.value?.[1]||null];const Re=[ee,ke&&(ke[1]||null)];Ue(Re)&&(oe(Ca(Re)),le.value=null)}},o=()=>{const u=e(le),ee=Je(u&&u[1]),ke=e(z);if(ee&&ee.isValid()){le.value=[e(te)?.[0]||null,na(ee)];const Re=[ke&&ke[0],ee];Ue(Re)&&(oe(Ca(Re)),le.value=null)}},c=G({}),X=u=>{c.value[u[0]]=u[1],c.value.panelReady=!0},we=u=>{n("calendar-change",u)},Se=(u,ee,ke)=>{n("panel-change",u,ee,ke)},ra=()=>{F.value?.focus()},ka=()=>{F.value?.blur()};return Ta("EP_PICKER_BASE",{props:a}),l({focus:ra,blur:ka,handleOpen:B,handleClose:f,onPick:v}),(u,ee)=>(j(),Ye(e(bn),Ua({ref_key:"refPopper",ref:p,visible:M.value,pure:"",trigger:"click"},u.$attrs,{role:"dialog",teleported:"",transition:`${e(b).namespace.value}-zoom-in-top`,"popper-class":[`${e(b).namespace.value}-picker__popper`],"popper-options":e(V),"fallback-placements":u.fallbackPlacements,"gpu-acceleration":!1,placement:u.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:T,onShow:C,onHide:g}),{default:_e(()=>[We.value?(j(),Ye(Ht,{key:1,id:u.id,ref_key:"inputRef",ref:F,"model-value":te.value,name:u.name,disabled:O.value,readonly:!u.editable||u.readonly,label:u.label,"start-placeholder":u.startPlaceholder,"end-placeholder":u.endPlaceholder,class:h(w.value),style:Da(u.$attrs.style),"aria-label":u.ariaLabel,tabindex:u.tabindex,autocomplete:"off",role:"combobox",onClick:ye,onFocus:e(N),onBlur:e(Y),onStartInput:ya,onStartChange:U,onEndInput:ma,onEndChange:o,onMousedown:ye,onMouseenter:De,onMouseleave:Me,onTouchstartPassive:$e,onKeydown:Ge},{prefix:_e(()=>[re.value?(j(),Ye(e(he),{key:0,class:h([e(x).e("icon"),e(P).e("icon")]),name:re.value},null,8,["class","name"])):de("",!0)]),"range-separator":_e(()=>[fe(u.$slots,"range-separator",{},()=>[q("span",{class:h(e(P).b("separator"))},me(u.rangeSeparator),3)])]),suffix:_e(()=>[u.clearIcon?(j(),Ye(e(he),{key:0,class:h(ae.value),onMousedown:ze(e(ot),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):de("",!0)]),_:3},8,["id","model-value","name","disabled","readonly","label","start-placeholder","end-placeholder","class","style","aria-label","tabindex","onFocus","onBlur"])):(j(),Ye(e(oa),{key:0,id:u.id,ref_key:"inputRef",ref:F,"container-role":"combobox","model-value":te.value,name:u.name,disabled:O.value,label:u.label,class:h([e(b).b("editor"),e(b).bm("editor",u.type),u.$attrs.class]),style:Da(u.$attrs.style),readonly:!u.editable||u.readonly||qe.value||J.value||Z.value||u.type==="week","aria-label":u.ariaLabel,tabindex:u.tabindex,"validate-event":!1,helpText:u.helpText,messageError:u.messageError,onInput:ha,onFocus:e(N),onBlur:e(Y),onKeydown:Ge,onChange:Qe,onMousedown:ye,onMouseenter:De,onMouseleave:Me,onTouchstartPassive:$e,onClick:ee[0]||(ee[0]=ze(()=>{},["stop"]))},{prefix:_e(()=>[re.value?(j(),Ye(e(he),{key:0,class:h([e(x).e("icon"),"pr-2"]),onMousedown:ze(ye,["prevent"]),onTouchstartPassive:$e,name:re.value},null,8,["class","name"])):de("",!0)]),suffix:_e(()=>[se.value&&u.clearIcon?(j(),Ye(e(he),{key:0,class:h(`${e(x).e("icon")} clear-icon`),onMousedown:ze(e(ot),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):de("",!0)]),default:_e(()=>[q("span",null,me(u.label),1),u.label?(j(),W("div",{key:0,class:h([e(x).e("label")]),style:Da(S.value)},me(u.label),7)):de("",!0)]),_:1},8,["id","model-value","name","disabled","label","class","style","readonly","aria-label","tabindex","helpText","messageError","onFocus","onBlur"]))]),content:_e(()=>[fe(u.$slots,"default",{visible:M.value,actualVisible:y.value,parsedValue:z.value,format:u.format,dateFormat:u.dateFormat,timeFormat:u.timeFormat,unlinkPanels:u.unlinkPanels,type:u.type,defaultValue:u.defaultValue,showNow:u.showNow,onPick:v,onSelectRange:A,onSetPickerOption:X,onCalendarChange:we,onPanelChange:Se,onMousedown:ee[1]||(ee[1]=ze(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options","fallback-placements","placement"]))}});Ut.__docgenInfo={name:"Picker",exportName:"default",displayName:"picker",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus input box."}]},{name:"blur",tags:[{title:"description",content:"blur input box."}]},{name:"handleOpen",tags:[{title:"description",content:"opens picker"}]},{name:"handleClose",tags:[{title:"description",content:"closes picker"}]},{name:"onPick",tags:[{title:"description",content:"pick item manually"}]}],events:[{name:"update:modelValue"},{name:"change"},{name:"focus"},{name:"blur"},{name:"clear"},{name:"calendar-change"},{name:"panel-change"},{name:"visible-change"},{name:"keydown"}],slots:[{name:"range-separator"},{name:"default",scoped:!0,bindings:[{name:"visible",title:"binding"},{name:"actual-visible",title:"binding"},{name:"parsed-value",title:"binding"},{name:"format",title:"binding"},{name:"date-format",title:"binding"},{name:"time-format",title:"binding"},{name:"unlink-panels",title:"binding"},{name:"type",title:"binding"},{name:"default-value",title:"binding"},{name:"show-now",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker.vue"]};const Wr=Ie({...qt,datetimeRole:String,parsedValue:{type:ue(Object)}}),Kt=({getAvailableHours:t,getAvailableMinutes:l,getAvailableSeconds:r})=>{const a=(s,b,x,P)=>{const m={hour:t,minute:l,second:r};let d=s;return["hour","minute","second"].forEach(R=>{if(m[R]){let k;const V=m[R];switch(R){case"minute":{k=V(d.hour(),b,P);break}case"second":{k=V(d.hour(),d.minute(),b,P);break}default:{k=V(b,P);break}}if(k?.length&&!k.includes(d[R]())){const D=x?0:k.length-1;d=d[R](k[D])}}}),d},n={};return{timePickerOptions:n,getAvailableTime:a,onSetOption:([s,b])=>{n[s]=b}}},Ga=t=>{const l=(a,n)=>a||n,r=a=>a!==!0;return t.map(l).filter(r)},zt=(t,l,r)=>({getHoursList:(s,b)=>qa(24,t&&(()=>t?.(s,b))),getMinutesList:(s,b,x)=>qa(60,l&&(()=>l?.(s,b,x))),getSecondsList:(s,b,x,P)=>qa(60,r&&(()=>r?.(s,b,x,P)))}),Wt=(t,l,r)=>{const{getHoursList:a,getMinutesList:n,getSecondsList:i}=zt(t,l,r);return{getAvailableHours:(P,m)=>Ga(a(P,m)),getAvailableMinutes:(P,m,d)=>Ga(n(P,m,d)),getAvailableSeconds:(P,m,d,R)=>Ga(i(P,m,d,R))}},Jt=t=>{const l=G(t.parsedValue);return Ee(()=>t.visible,r=>{r||(l.value=t.parsedValue)}),l},Jr=Ie({role:{type:String,required:!0},spinnerDate:{type:ue(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:ue(String),default:""},...jt}),Zr=["onClick"],Qr=["onMouseenter"],Aa=Oe({__name:"basic-time-spinner",props:Jr,emits:["change","select-range","set-option"],setup(t,{emit:l}){const r=t,a=je("EP_PICKER_BASE"),{isRange:n}=a.props,i=l,s=Ve("time"),{getHoursList:b,getMinutesList:x,getSecondsList:P}=zt(r.disabledHours,r.disabledMinutes,r.disabledSeconds);let m=!1;const d=G(),R=G(),k=G(),V=G(),D={hours:R,minutes:k,seconds:V},p=$(()=>r.showSeconds?dt:dt.slice(0,2)),F=$(()=>{const{spinnerDate:g}=r,B=g.hour(),f=g.minute(),O=g.second();return{hours:B,minutes:f,seconds:O}}),M=$(()=>{const{hours:g,minutes:B}=e(F),{role:f,spinnerDate:O}=r,z=n?void 0:O;return{hours:b(f,z),minutes:x(g,f,z),seconds:P(g,B,f,z)}}),y=$(()=>{const{hours:g,minutes:B,seconds:f}=e(F);return{hours:ja(g,23),minutes:ja(B,59),seconds:ja(f,59)}}),_=$n(g=>{m=!1,N(g)},200),I=g=>{if(!!!r.amPmMode)return"";const f=r.amPmMode==="A";let O=g<12?" am":" pm";return f&&(O=O.toUpperCase()),O},E=g=>{let B;switch(g){case"hours":B=[0,2];break;case"minutes":B=[3,5];break;case"seconds":B=[6,8];break}const[f,O]=B;i("select-range",f,O),d.value=g},N=g=>{L(g,e(F)[g])},Y=()=>{N("hours"),N("minutes"),N("seconds")},S=g=>g.querySelector(`.${s.namespace.value}-scrollbar__wrap`),L=(g,B)=>{if(r.arrowControl)return;const f=e(D[g]);f&&f.$el&&(S(f.$el).scrollTop=Math.max(0,B*K(g)))},K=g=>{const f=e(D[g])?.$el.querySelector("li");return f&&Number.parseFloat(Sn(f,"height"))||0},w=()=>{Q(1)},ae=()=>{Q(-1)},Q=g=>{d.value||E("hours");const B=d.value,f=e(F)[B],O=d.value==="hours"?24:60,z=oe(B,f,g,O);ie(B,z),L(B,z),Be(()=>E(B))},oe=(g,B,f,O)=>{let z=(B+f+O)%O;const te=e(M)[g];for(;te[z]&&z!==B;)z=(z+f+O)%O;return z},ie=(g,B)=>{if(e(M)[g][B])return;const{hours:z,minutes:te,seconds:xe}=e(F);let Te;switch(g){case"hours":Te=r.spinnerDate.hour(B).minute(te).second(xe);break;case"minutes":Te=r.spinnerDate.hour(z).minute(B).second(xe);break;case"seconds":Te=r.spinnerDate.hour(z).minute(te).second(B);break}i("change",Te)},pe=(g,{value:B,disabled:f})=>{f||(ie(g,B),E(g),L(g,B))},A=g=>{const B=e(D[g]);if(!B)return;m=!0,_(g);const f=Math.min(Math.round((S(B.$el).scrollTop-(v(g)*.5-10)/K(g)+3)/K(g)),g==="hours"?23:59);ie(g,f)},v=g=>e(D[g]).$el.offsetHeight,T=()=>{const g=B=>{const f=e(D[B]);f&&f.$el&&(S(f.$el).onscroll=()=>{A(B)})};g("hours"),g("minutes"),g("seconds")};tn(()=>{Be(()=>{!r.arrowControl&&T(),Y(),r.role==="start"&&E("hours")})});const C=(g,B)=>{D[B].value=g??void 0};return i("set-option",[`${r.role}_scrollDown`,Q]),i("set-option",[`${r.role}_emitSelectRange`,E]),Ee(()=>r.spinnerDate,()=>{m||Y()}),(g,B)=>(j(),W("div",{class:h([e(s).b("spinner"),{"has-seconds":g.showSeconds}])},[g.arrowControl?de("",!0):(j(!0),W(Ce,{key:0},Fe(p.value,f=>(j(),Ye(e(In),{key:f,ref_for:!0,ref:O=>C(O,f),class:h(e(s).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":e(s).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:O=>E(f),onMousemove:O=>N(f)},{default:_e(()=>[(j(!0),W(Ce,null,Fe(M.value[f],(O,z)=>(j(),W("li",{key:z,class:h([e(s).be("spinner","item"),e(s).is("active",z===F.value[f]),e(s).is("disabled",O)]),onClick:te=>pe(f,{value:z,disabled:O})},[f==="hours"?(j(),W(Ce,{key:0},[pa(me(("0"+(g.amPmMode?z%12||12:z)).slice(-2))+me(I(z)),1)],64)):(j(),W(Ce,{key:1},[pa(me(("0"+z).slice(-2)),1)],64))],10,Zr))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),g.arrowControl?(j(!0),W(Ce,{key:1},Fe(p.value,f=>(j(),W("div",{key:f,class:h([e(s).be("spinner","wrapper"),e(s).is("arrow")]),onMouseenter:O=>E(f)},[Ne(ne(e(he),{name:"regular chevron-up"},null,512),[[e(ut),ae]]),Ne(ne(e(he),{name:"regular chevron-down"},null,512),[[e(ut),w]]),q("ul",{class:h(e(s).be("spinner","list"))},[(j(!0),W(Ce,null,Fe(y.value[f],(O,z)=>(j(),W("li",{key:z,class:h([e(s).be("spinner","item"),e(s).is("active",O===F.value[f]),e(s).is("disabled",M.value[f][O])])},[e(kn)(O)?(j(),W(Ce,{key:0},[f==="hours"?(j(),W(Ce,{key:0},[pa(me(("0"+(g.amPmMode?O%12||12:O)).slice(-2))+me(I(O)),1)],64)):(j(),W(Ce,{key:1},[pa(me(("0"+O).slice(-2)),1)],64))],64)):de("",!0)],2))),128))],2)],42,Qr))),128)):de("",!0)],2))}});Aa.__docgenInfo={exportName:"default",displayName:"basic-time-spinner",description:"",tags:{},events:[{name:"change"},{name:"select-range"},{name:"set-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]};const Zt=Oe({__name:"panel-time-pick",props:Wr,emits:["pick","select-range","set-picker-option"],setup(t,{emit:l}){const r=t,a=l,n=je("EP_PICKER_BASE"),{arrowControl:i,disabledHours:s,disabledMinutes:b,disabledSeconds:x,defaultValue:P}=n.props,{getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:R}=Wt(s,b,x),k=Ve("time"),{lang:V}=Ae(),D=G([0,2]),p=Jt(r),F=$(()=>Dn(r.actualVisible)?`${k.namespace.value}-zoom-in-top`:""),M=$(()=>r.format.includes("ss")),y=$(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),_=A=>{const v=H(A).locale(V.value),T=Q(v);return v.isSame(T)},I=()=>{a("pick",p.value,!1)},E=(A=!1,v=!1)=>{v||a("pick",r.parsedValue,A)},N=A=>{if(!r.visible)return;const v=Q(A).millisecond(0);a("pick",v,!0)},Y=(A,v)=>{a("select-range",A,v),D.value=[A,v]},S=A=>{const v=[0,3].concat(M.value?[6]:[]),T=["hours","minutes"].concat(M.value?["seconds"]:[]),g=(v.indexOf(D.value[0])+A+v.length)%v.length;K.start_emitSelectRange(T[g])},L=A=>{const v=A.code,{left:T,right:C,up:g,down:B}=Pe;if([T,C].includes(v)){S(v===T?-1:1),A.preventDefault();return}if([g,B].includes(v)){const f=v===g?-1:1;K.start_scrollDown(f),A.preventDefault();return}},{timePickerOptions:K,onSetOption:w,getAvailableTime:ae}=Kt({getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:R}),Q=A=>ae(A,r.datetimeRole||"",!0),oe=A=>A?H(A,r.format).locale(V.value):null,ie=A=>A?A.format(r.format):null,pe=()=>H(P).locale(V.value);return a("set-picker-option",["isValidValue",_]),a("set-picker-option",["formatToString",ie]),a("set-picker-option",["parseUserInput",oe]),a("set-picker-option",["handleKeydownInput",L]),a("set-picker-option",["getRangeAvailableTime",Q]),a("set-picker-option",["getDefaultValue",pe]),(A,v)=>(j(),Ye(nn,{name:F.value},{default:_e(()=>[A.actualVisible||A.visible?(j(),W("div",{key:0,class:h(e(k).b("panel"))},[q("div",{class:h([e(k).be("panel","content"),{"has-seconds":M.value}])},[ne(Aa,{ref:"spinner",role:A.datetimeRole||"start","arrow-control":e(i),"show-seconds":M.value,"am-pm-mode":y.value,"spinner-date":A.parsedValue,"disabled-hours":e(s),"disabled-minutes":e(b),"disabled-seconds":e(x),onChange:N,onSetOption:e(w),onSelectRange:Y},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),q("div",{class:h(e(k).be("panel","footer"))},[q("button",{type:"button",class:h([e(k).be("panel","btn"),"cancel"]),onClick:I}," Cancelar ",2),q("button",{type:"button",class:h([e(k).be("panel","btn"),"confirm"]),onClick:v[0]||(v[0]=T=>E())}," Ok ",2)],2)],2)):de("",!0)]),_:1},8,["name"]))}});Zt.__docgenInfo={exportName:"default",displayName:"panel-time-pick",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-pick.vue"]};const Xr=Ie({...qt,parsedValue:{type:ue(Array)}}),eo=["disabled"],Qt=Oe({__name:"panel-time-range",props:Xr,emits:["pick","select-range","set-picker-option"],setup(t,{emit:l}){const r=t,a=l,n=(J,Z)=>{const re=[];for(let se=J;se<=Z;se++)re.push(se);return re},{lang:i}=Ae(),s=Ve("time"),b=Ve("picker"),x=je("EP_PICKER_BASE"),{arrowControl:P,disabledHours:m,disabledMinutes:d,disabledSeconds:R,defaultValue:k}=x.props,V=$(()=>[s.be("range-picker","body"),s.be("panel","content"),s.is("arrow",P),_.value?"has-seconds":""]),D=$(()=>[s.be("range-picker","body"),s.be("panel","content"),s.is("arrow",P),_.value?"has-seconds":""]),p=$(()=>r.parsedValue[0]),F=$(()=>r.parsedValue[1]),M=Jt(r),y=()=>{a("pick",M.value,!1)},_=$(()=>r.format.includes("ss")),I=$(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),E=(J=!1)=>{a("pick",[p.value,F.value],J)},N=J=>{L(J.millisecond(0),F.value)},Y=J=>{L(p.value,J.millisecond(0))},S=J=>{const Z=J.map(se=>H(se).locale(i.value)),re=C(Z);return Z[0].isSame(re[0])&&Z[1].isSame(re[1])},L=(J,Z)=>{r.visible&&a("pick",[J,Z],!0)},K=$(()=>p.value>F.value),w=G([0,2]),ae=(J,Z)=>{a("select-range",J,Z,"min"),w.value=[J,Z]},Q=$(()=>_.value?11:8),oe=(J,Z)=>{a("select-range",J,Z,"max");const re=e(Q);w.value=[J+re,Z+re]},ie=J=>{const Z=_.value?[0,3,6,11,14,17]:[0,3,8,11],re=["hours","minutes"].concat(_.value?["seconds"]:[]),be=(Z.indexOf(w.value[0])+J+Z.length)%Z.length,ce=Z.length/2;be<ce?O.start_emitSelectRange(re[be]):O.end_emitSelectRange(re[be-ce])},pe=J=>{const Z=J.code,{left:re,right:se,up:be,down:ce}=Pe;if([re,se].includes(Z)){ie(Z===re?-1:1),J.preventDefault();return}if([be,ce].includes(Z)){const ye=Z===be?-1:1,De=w.value[0]<Q.value?"start":"end";O[`${De}_scrollDown`](ye),J.preventDefault();return}},A=(J,Z)=>{const re=m?m(J):[],se=J==="start",ce=(Z||(se?F.value:p.value)).hour(),ye=se?n(ce+1,23):n(0,ce-1);return Ba(re,ye)},v=(J,Z,re)=>{const se=d?d(J,Z):[],be=Z==="start",ce=re||(be?F.value:p.value),ye=ce.hour();if(J!==ye)return se;const De=ce.minute(),Me=be?n(De+1,59):n(0,De-1);return Ba(se,Me)},T=(J,Z,re,se)=>{const be=R?R(J,Z,re):[],ce=re==="start",ye=se||(ce?F.value:p.value),De=ye.hour(),Me=ye.minute();if(J!==De||Z!==Me)return be;const $e=ye.second(),We=ce?n($e+1,59):n(0,$e-1);return Ba(be,We)},C=([J,Z])=>[z(J,"start",!0,Z),z(Z,"end",!1,J)],{getAvailableHours:g,getAvailableMinutes:B,getAvailableSeconds:f}=Wt(A,v,T),{timePickerOptions:O,getAvailableTime:z,onSetOption:te}=Kt({getAvailableHours:g,getAvailableMinutes:B,getAvailableSeconds:f}),xe=J=>J?ve(J)?J.map(Z=>H(Z,r.format).locale(i.value)):H(J,r.format).locale(i.value):null,Te=J=>J?ve(J)?J.map(Z=>Z.format(r.format)):J.format(r.format):null,qe=()=>{if(ve(k))return k.map(Z=>H(Z).locale(i.value));const J=H(k).locale(i.value);return[J,J.add(60,"m")]};return a("set-picker-option",["formatToString",Te]),a("set-picker-option",["parseUserInput",xe]),a("set-picker-option",["isValidValue",S]),a("set-picker-option",["handleKeydownInput",pe]),a("set-picker-option",["getDefaultValue",qe]),a("set-picker-option",["getRangeAvailableTime",C]),(J,Z)=>J.actualVisible?(j(),W("div",{key:0,class:h([e(s).b("range-picker"),e(b).b("panel")])},[q("div",{class:h(e(s).be("range-picker","content"))},[q("div",{class:h(e(s).be("range-picker","cell"))},[q("div",{class:h(e(s).be("range-picker","header"))},"Inicio",2),q("div",{class:h(V.value)},[ne(Aa,{ref:"minSpinner",role:"start","show-seconds":_.value,"am-pm-mode":I.value,"arrow-control":e(P),"spinner-date":p.value,"disabled-hours":A,"disabled-minutes":v,"disabled-seconds":T,onChange:N,onSetOption:e(te),onSelectRange:ae},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),q("div",{class:h(e(s).be("range-picker","cell"))},[q("div",{class:h(e(s).be("range-picker","header"))},"Fin",2),q("div",{class:h(D.value)},[ne(Aa,{ref:"maxSpinner",role:"end","show-seconds":_.value,"am-pm-mode":I.value,"arrow-control":e(P),"spinner-date":F.value,"disabled-hours":A,"disabled-minutes":v,"disabled-seconds":T,onChange:Y,onSetOption:e(te),onSelectRange:oe},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),q("div",{class:h(e(s).be("panel","footer"))},[q("button",{type:"button",class:h([e(s).be("panel","btn"),"cancel"]),onClick:Z[0]||(Z[0]=re=>y())}," Cancelar ",2),q("button",{type:"button",class:h([e(s).be("panel","btn"),"confirm"]),disabled:K.value,onClick:Z[1]||(Z[1]=re=>E())}," Ok ",10,eo)],2)],2)):de("",!0)}});Qt.__docgenInfo={exportName:"default",displayName:"panel-time-range",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-range.vue"]};H.extend(Mt);const ao=Oe({name:"GTimePicker",install:null,props:{...Gt,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,l){const r=G(),[a,n]=t.isRange?["timerange",Qt]:["time",Zt],i=s=>l.emit("update:modelValue",s);return Ta("ElPopperOptions",t.popperOptions),l.expose({focus:()=>{r.value?.focus()},blur:()=>{r.value?.blur()},handleOpen:()=>{r.value?.handleOpen()},handleClose:()=>{r.value?.handleClose()}}),()=>{const s=t.format??Hr;return fa(fa(Ut,{...t,ref:r,type:a,format:s,"onUpdate:modelValue":i},{default:b=>fa(n,{...b})}))}}}),to=kt(ao),as={title:"Form/Form",component:aa,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
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
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},xa={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:aa,GFormItem:sa,GInput:la,GConfigProvider:ia,GButton:ua,GSelect:ln,GRadio:un,GCheckbox:cn,GSegmented:st,GDatePicker:Gr,GTimePicker:to},setup(){const t=G(),l=ea({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1,preferredContact:"",birthDate:"",appointmentDate:"",appointmentTime:""}),r=[{label:"Email",value:"email"},{label:"Teléfono",value:"phone"},{label:"WhatsApp",value:"whatsapp"}],a=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],n={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},i=$(()=>l.country?n[l.country]||[]:[]);Ee(()=>l.country,()=>{l.city=""});const s=d=>d.getTime()>Date.now(),b=d=>d.getTime()<Date.now(),x={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(d,R,k)=>{R===!0?k():k(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}],preferredContact:[{validator:(d,R,k)=>{R||k(new Error("Debe seleccionar un método de contacto preferido")),k()},type:"boolean",trigger:"change"}],birthDate:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:"change"}],appointmentDate:[{required:!0,message:"La fecha de cita es requerida",trigger:"change"}],appointmentTime:[{required:!0,message:"La hora de cita es requerida",trigger:"change"}]};async function P(){if(t.value)try{await t.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",l)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(d){console.error("Validation error:",d)}}function m(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,countries:a,availableCities:i,rules:x,contactOptions:r,disableFutureDates:s,disablePastDates:b,GSegmented:st,handleSubmit:P,handleReset:m}},template:`
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
    `})},Ma={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del formulario con validaciones."}}},render:()=>({components:{GForm:aa,GFormItem:sa,GInput:la,GConfigProvider:ia,GButton:ua},setup(){const t=G(),l=ea({nombre:"",email:""}),r={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Email inválido",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((i,s)=>{i?console.log("submit!",s):console.log("error submit!"+s)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,rules:r,handleSubmit:a,handleReset:n}},template:`
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
    `})},Ra={name:"Reglas Personalizadas",parameters:{docs:{description:{story:`Las reglas de validación pueden ser personalizadas usando funciones validadoras. Por ejemplo, para validar la edad de un usuario:

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

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:aa,GFormItem:sa,GInput:la,GConfigProvider:ia,GButton:ua},setup(){const t=G(),l=ea({pass:"",checkPass:"",age:""}),i={pass:[{validator:(x,P,m)=>{P===""?m(new Error("Ingrese una contraseña")):(l.checkPass!==""&&t.value?.validateField("checkPass"),m())},trigger:"blur"}],checkPass:[{validator:(x,P,m)=>{P===""?m(new Error("Confirme su contraseña")):P!==l.pass?m(new Error("Las contraseñas no coinciden")):m()},trigger:"blur"}],age:[{validator:(x,P,m)=>{if(!P)return m(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(P))?Number(P)<18?m(new Error("La edad debe ser mayor a 18")):m():m(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function s(){t.value&&await t.value.validate((x,P)=>{x?console.log("submit!",l):console.log("error submit!",P)})}async function b(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,rules:i,handleSubmit:s,handleReset:b}},template:`
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
    `})},Va={name:"Tipo de ejecución",parameters:{docs:{description:{story:`La validación de campos puede realizarse de dos formas:

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

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.`}}},render:()=>({components:{GForm:aa,GFormItem:sa,GInput:la,GConfigProvider:ia,GButton:ua},setup(){const t=G(),l=ea({email:"",password:""}),r={email:[{required:!0,message:"El email es requerido",trigger:"change"},{type:"email",message:"Ingrese un email válido",trigger:"change"}],password:[{required:!0,message:"La contraseña es requerida",trigger:"blur"},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((i,s)=>{i?console.log("submit!",s):console.log("error submit!"+s)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,rules:r,handleSubmit:a,handleReset:n}},template:`
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
    `})},Ia={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:aa,GFormItem:sa,GInput:la,GConfigProvider:ia,GButton:ua},setup(){return{formData:ea({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
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
    `})},$a={name:"Prevenir Submit",parameters:{docs:{description:{story:`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

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
`}}},render:()=>({components:{GForm:aa,GFormItem:sa,GInput:la,GConfigProvider:ia,GButton:ua},setup(){const t=G(),l=ea({usuario:"",clave:""}),r={usuario:[{required:!0,message:"El usuario es requerido",trigger:"blur"}],clave:[{required:!0,message:"La clave es requerida",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((n,i)=>{n?alert("submit!"):console.log("error submit!",i)})}return{formRef:t,formData:l,rules:r,handleSubmit:a}},template:`
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
    `})},Ea={name:"Validación Dinámica",parameters:{docs:{description:{story:`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

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
`}}},render:()=>({components:{GForm:aa,GFormItem:sa,GInput:la,GConfigProvider:ia,GButton:ua},setup(){const t=G(),l=ea({domains:[{key:1,value:""}],email:""}),r=s=>{const b=l.domains.indexOf(s);b!==-1&&l.domains.splice(b,1)},a=()=>{l.domains.push({key:Date.now(),value:""})};async function n(){t.value&&await t.value.validate((s,b)=>{s?console.log("submit!",l):console.log("error submit!",b)})}async function i(){t.value&&t.value.resetFields()}return{formRef:t,formData:l,handleSubmit:n,handleReset:i,addDomain:a,removeDomain:r}},template:`
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
    `})};xa.parameters={...xa.parameters,docs:{...xa.parameters?.docs,source:{originalSource:`{
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
}`,...xa.parameters?.docs?.source}}};Ma.parameters={...Ma.parameters,docs:{...Ma.parameters?.docs,source:{originalSource:`{
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
}`,...Ma.parameters?.docs?.source}}};Ra.parameters={...Ra.parameters,docs:{...Ra.parameters?.docs,source:{originalSource:`{
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
}`,...Ra.parameters?.docs?.source}}};Va.parameters={...Va.parameters,docs:{...Va.parameters?.docs,source:{originalSource:`{
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
}`,...Va.parameters?.docs?.source}}};Ia.parameters={...Ia.parameters,docs:{...Ia.parameters?.docs,source:{originalSource:`{
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
}`,...Ia.parameters?.docs?.source}}};$a.parameters={...$a.parameters,docs:{...$a.parameters?.docs,source:{originalSource:`{
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
}`,...$a.parameters?.docs?.source}}};Ea.parameters={...Ea.parameters,docs:{...Ea.parameters?.docs,source:{originalSource:`{
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
}`,...Ea.parameters?.docs?.source}}};const ts=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];export{xa as CompleteForm,Ra as CustomRules,Ia as DisabledForm,Ea as DynamicValidation,$a as PreventSubmit,Ma as Primary,Va as TriggerValidation,ts as __namedExportsOrder,as as default};
