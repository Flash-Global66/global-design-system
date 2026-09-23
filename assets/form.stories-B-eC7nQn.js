import{l as Ve,p as ue,a4 as ge,r as G,c as $,u as e,au as Ye,s as $e,C as _e,d as Oe,i as fe,f as q,g as h,z as pe,aa as Gt,ab as Ht,o as j,y as W,R as We,j as de,F as Ce,A as Te,b as ne,ac as va,a2 as Ja,a3 as Za,x as He,Y as Ge,e as Ae,v as Qe,a as Le,a1 as Ba,q as gt,w as Be,B as pa,D as Ia,E as ea,N as fa,aG as bt,aH as rt,n as Da,m as _a,M as ot,X as Ut,az as lt,t as Kt,T as zt}from"./iframe-Dct5CHxr.js";import{G as la,a as aa}from"./index-DOcpSnVP.js";import{G as sa}from"./index-CiBki8_N.js";import{G as ia}from"./ConfigProvider-7dg58IlU.js";import{G as ua}from"./index-BeqF1NXI.js";import{G as Wt}from"./index-BYFu75cy.js";import{a as Jt}from"./index-XrXeeEoZ.js";import{G as Zt}from"./index-DBgSku0P.js";import{G as st}from"./index-Cw8f8KYC.js";import{a as Xt,y as Qt,d as H,K as ht,x as yt,j as kt,D as ja,U as en,R as an,S as tn,u as Aa}from"./index-BilGKqno.js";import{c as Ze,g as ta}from"./_commonjsHelpers-Cpj98o6Y.js";import{u as Ee,l as Ta,h as nn,e as rn,j as on,r as ln,f as sn}from"./useEmptyValues-BnYvcW4O.js";import{u as Ne}from"./useLocale-pH4k1Kvj.js";import{Y as oa}from"./index-DR8mscXh.js";import{R as he}from"./index-1T7U7QlS.js";import{W as un,p as cn,n as dn}from"./index-BpP4et0s.js";import{f as mn}from"./flatten-CM2gQvbF.js";import{_ as pn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as qa}from"./clickOutside.directive-DcIDdwE1.js";import{E as Se}from"./event.constant-LtAI3-H4.js";import{c as it}from"./index-QAcBYSVr.js";import{w as Dt}from"./install.util-cBz1HN_T.js";import{a as wt,o as fn,d as vn}from"./index-DWhPhD7W.js";import{u as gn,a as xt}from"./useAttrs-BZi71rd1.js";import{i as St,L as bn,a as hn}from"./index-CZoNQBHQ.js";import{i as yn}from"./isEqual-D4JTyA6f.js";import{x as kn}from"./index-Bx14T361.js";import{d as Dn}from"./debounce-B22JU7A-.js";import{v as ut}from"./repeatClick.directive-BpayNHsr.js";import"./preload-helper-Dch09mLN.js";import"./index-CRx4dHSJ.js";import"./useId-MLHLvdkG.js";import"./index-pMiYc9r3.js";import"./useCalcInputWidth-BGo-O_zj.js";import"./index-pWeg55FS.js";import"./index-CTQoWvO3.js";import"./hasIn-CMXABBS8.js";import"./Skeleton-8SKRGv7V.js";import"./pick-o9PB4dc4.js";import"./_baseFlatten-Bk93WOLP.js";import"./isArrayLikeObject-Di-dkfIp.js";import"./index-DxlLUiSm.js";import"./index-BgdLHs-h.js";var wn={exports:{}};(function(t,s){(function(r,a){t.exports=a(Xt)})(Ze,function(r){function a(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var n=a(r),i={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(l){return l+"º"}};return n.default.locale(i,null,!0),i})})(wn);var Ct={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,i=/\d\d/,l=/\d\d?/,b=/\d*[^-_:/,()\s\d]+/,C={},x=function(p){return(p=+p)+(p>68?1900:2e3)},m=function(p){return function(O){this[p]=+O}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(O){if(!O||O==="Z")return 0;var M=O.match(/([+-]|\d\d)/g),y=60*M[1]+(+M[2]||0);return y===0?0:M[0]==="+"?-y:y}(p)}],R=function(p){var O=C[p];return O&&(O.indexOf?O:O.s.concat(O.f))},k=function(p,O){var M,y=C.meridiem;if(y){for(var N=1;N<=24;N+=1)if(p.indexOf(y(N,0,O))>-1){M=N>12;break}}else M=p===(O?"pm":"PM");return M},E={A:[b,function(p){this.afternoon=k(p,!1)}],a:[b,function(p){this.afternoon=k(p,!0)}],Q:[n,function(p){this.month=3*(p-1)+1}],S:[n,function(p){this.milliseconds=100*+p}],SS:[i,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[l,m("seconds")],ss:[l,m("seconds")],m:[l,m("minutes")],mm:[l,m("minutes")],H:[l,m("hours")],h:[l,m("hours")],HH:[l,m("hours")],hh:[l,m("hours")],D:[l,m("day")],DD:[i,m("day")],Do:[b,function(p){var O=C.ordinal,M=p.match(/\d+/);if(this.day=M[0],O)for(var y=1;y<=31;y+=1)O(y).replace(/\[|\]/g,"")===p&&(this.day=y)}],w:[l,m("week")],ww:[i,m("week")],M:[l,m("month")],MM:[i,m("month")],MMM:[b,function(p){var O=R("months"),M=(R("monthsShort")||O.map(function(y){return y.slice(0,3)})).indexOf(p)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[b,function(p){var O=R("months").indexOf(p)+1;if(O<1)throw new Error;this.month=O%12||O}],Y:[/[+-]?\d+/,m("year")],YY:[i,function(p){this.year=x(p)}],YYYY:[/\d{4}/,m("year")],Z:d,ZZ:d};function D(p){var O,M;O=p,M=C&&C.formats;for(var y=(p=O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,z,w){var te=w&&w.toUpperCase();return z||M[w]||r[w]||M[te].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(X,oe,ie){return oe||ie.slice(1)})})).match(a),N=y.length,V=0;V<N;V+=1){var I=y[V],A=E[I],L=A&&A[0],S=A&&A[1];y[V]=S?{regex:L,parser:S}:I.replace(/^\[|\]$/g,"")}return function(Y){for(var z={},w=0,te=0;w<N;w+=1){var X=y[w];if(typeof X=="string")te+=X.length;else{var oe=X.regex,ie=X.parser,me=Y.slice(te),_=oe.exec(me)[0];ie.call(z,_),Y=Y.replace(_,"")}}return function(g){var T=g.afternoon;if(T!==void 0){var P=g.hours;T?P<12&&(g.hours+=12):P===12&&(g.hours=0),delete g.afternoon}}(z),z}}return function(p,O,M){M.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(x=p.parseTwoDigitYear);var y=O.prototype,N=y.parse;y.parse=function(V){var I=V.date,A=V.utc,L=V.args;this.$u=A;var S=L[1];if(typeof S=="string"){var Y=L[2]===!0,z=L[3]===!0,w=Y||z,te=L[2];z&&(te=L[2]),C=this.$locale(),!Y&&te&&(C=M.Ls[te]),this.$d=function(me,_,g,T){try{if(["x","X"].indexOf(_)>-1)return new Date((_==="X"?1e3:1)*me);var P=D(_)(me),v=P.year,B=P.month,f=P.day,F=P.hours,U=P.minutes,ae=P.seconds,Pe=P.milliseconds,Ie=P.zone,je=P.week,J=new Date,Z=f||(v||B?1:J.getDate()),re=v||J.getFullYear(),le=0;v&&!B||(le=B>0?B-1:J.getMonth());var be,ce=F||0,ye=U||0,we=ae||0,Me=Pe||0;return Ie?new Date(Date.UTC(re,le,Z,ce,ye,we,Me+60*Ie.offset*1e3)):g?new Date(Date.UTC(re,le,Z,ce,ye,we,Me)):(be=new Date(re,le,Z,ce,ye,we,Me),je&&(be=T(be).week(je).toDate()),be)}catch{return new Date("")}}(I,S,A,M),this.init(),te&&te!==!0&&(this.$L=this.locale(te).$L),w&&I!=this.format(S)&&(this.$d=new Date("")),C={}}else if(S instanceof Array)for(var X=S.length,oe=1;oe<=X;oe+=1){L[1]=S[oe-1];var ie=M.apply(this,L);if(ie.isValid()){this.$d=ie.$d,this.$L=ie.$L,this.init();break}oe===X&&(this.$d=new Date(""))}else N.call(this,V)}}})})(Ct);var xn=Ct.exports;const Pt=ta(xn);var Mt={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){var n=a.prototype,i=n.format;n.format=function(l){var b=this,C=this.$locale();if(!this.isValid())return i.bind(this)(l);var x=this.$utils(),m=(l||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(d){switch(d){case"Q":return Math.ceil((b.$M+1)/3);case"Do":return C.ordinal(b.$D);case"gggg":return b.weekYear();case"GGGG":return b.isoWeekYear();case"wo":return C.ordinal(b.week(),"W");case"w":case"ww":return x.s(b.week(),d==="w"?1:2,"0");case"W":case"WW":return x.s(b.isoWeek(),d==="W"?1:2,"0");case"k":case"kk":return x.s(String(b.$H===0?24:b.$H),d==="k"?1:2,"0");case"X":return Math.floor(b.$d.getTime()/1e3);case"x":return b.$d.getTime();case"z":return"["+b.offsetName()+"]";case"zzz":return"["+b.offsetName("long")+"]";default:return d}});return i.bind(this)(m)}}})})(Mt);var Sn=Mt.exports;const Cn=ta(Sn);var Rt={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a,n){var i=a.prototype,l=function(d){return d&&(d.indexOf?d:d.s)},b=function(d,R,k,E,D){var p=d.name?d:d.$locale(),O=l(p[R]),M=l(p[k]),y=O||M.map(function(V){return V.slice(0,E)});if(!D)return y;var N=p.weekStart;return y.map(function(V,I){return y[(I+(N||0))%7]})},C=function(){return n.Ls[n.locale()]},x=function(d,R){return d.formats[R]||function(k){return k.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(E,D,p){return D||p.slice(1)})}(d.formats[R.toUpperCase()])},m=function(){var d=this;return{months:function(R){return R?R.format("MMMM"):b(d,"months")},monthsShort:function(R){return R?R.format("MMM"):b(d,"monthsShort","months",3)},firstDayOfWeek:function(){return d.$locale().weekStart||0},weekdays:function(R){return R?R.format("dddd"):b(d,"weekdays")},weekdaysMin:function(R){return R?R.format("dd"):b(d,"weekdaysMin","weekdays",2)},weekdaysShort:function(R){return R?R.format("ddd"):b(d,"weekdaysShort","weekdays",3)},longDateFormat:function(R){return x(d.$locale(),R)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};i.localeData=function(){return m.bind(this)()},n.localeData=function(){var d=C();return{firstDayOfWeek:function(){return d.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(R){return x(d,R)},meridiem:d.meridiem,ordinal:d.ordinal}},n.months=function(){return b(C(),"months")},n.monthsShort=function(){return b(C(),"monthsShort","months",3)},n.weekdays=function(d){return b(C(),"weekdays",null,null,d)},n.weekdaysShort=function(d){return b(C(),"weekdaysShort","weekdays",3,d)},n.weekdaysMin=function(d){return b(C(),"weekdaysMin","weekdays",2,d)}}})})(Rt);var Pn=Rt.exports;const Mn=ta(Pn);var Et={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){var r="week",a="year";return function(n,i,l){var b=i.prototype;b.week=function(C){if(C===void 0&&(C=null),C!==null)return this.add(7*(C-this.week()),"day");var x=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var m=l(this).startOf(a).add(1,a).date(x),d=l(this).endOf(r);if(m.isBefore(d))return 1}var R=l(this).startOf(a).date(x).startOf(r).subtract(1,"millisecond"),k=this.diff(R,r,!0);return k<0?l(this).startOf("week").week():Math.ceil(k)},b.weeks=function(C){return C===void 0&&(C=null),this.week(C)}}})})(Et);var Rn=Et.exports;const En=ta(Rn);var Vt={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.weekYear=function(){var n=this.month(),i=this.week(),l=this.year();return i===1&&n===11?l+1:n===0&&i>=52?l-1:l}}})})(Vt);var Vn=Vt.exports;const Fn=ta(Vn);var Ft={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a,n){a.prototype.dayOfYear=function(i){var l=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return i==null?l:this.add(i-l,"day")}}})})(Ft);var $n=Ft.exports;const In=ta($n);var $t={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.isSameOrAfter=function(n,i){return this.isSame(n,i)||this.isAfter(n,i)}}})})($t);var Tn=$t.exports;const On=ta(Tn);var It={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.isSameOrBefore=function(n,i){return this.isSame(n,i)||this.isBefore(n,i)}}})})(It);var An=It.exports;const Ln=ta(An),Xa=Symbol.for("rootPickerInjection"),Yn=Ve({...Qt,type:{type:ue(String),default:"date"}}),Nn=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],Bn=["date","dates","year","years","month","months","week","range"],Qa=Ve({disabledDate:{type:ue(Function)},date:{type:ue(Object),required:!0},minDate:{type:ue(Object)},maxDate:{type:ue(Object)},parsedValue:{type:ue([Object,Array])},rangeState:{type:ue(Object),default:()=>({endDate:null,selecting:!1})}}),Tt=Ve({type:{type:ue(String),required:!0,values:Nn},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),et=Ve({unlinkPanels:Boolean,parsedValue:{type:ue(Array)}}),at=t=>({type:String,values:Bn,default:t}),_n=Ve({...Tt,parsedValue:{type:ue([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),ga=t=>{if(!ge(t))return!1;const[s,r]=t;return H.isDayjs(s)&&H.isDayjs(r)&&s.isSameOrBefore(r)},tt=(t,{lang:s,unit:r,unlinkPanels:a})=>{let n;if(ge(t)){const[i,l]=t.map(C=>H(C).locale(s)),b=a?l:i.add(1,r);return[i,b]}else t?n=H(t):n=H();return n=n.locale(s),[n,n.add(1,r)]},jn=(t,s,{columnIndexOffset:r,startDate:a,nextEndDate:n,now:i,unit:l,relativeDateGetter:b,setCellMetadata:C,setRowMetadata:x})=>{for(let m=0;m<t.row;m++){const d=s[m];for(let R=0;R<t.column;R++){let k=d[R+r];k||(k={row:m,column:R,type:"normal",inRange:!1,start:!1,end:!1});const E=m*t.column+R,D=b(E);k.dayjs=D,k.date=D.toDate(),k.timestamp=D.valueOf(),k.type="normal",k.inRange=!!(a&&D.isSameOrAfter(a,l)&&n&&D.isSameOrBefore(n,l))||!!(a&&D.isSameOrBefore(a,l)&&n&&D.isSameOrAfter(n,l)),a?.isSameOrAfter(n)?(k.start=!!n&&D.isSame(n,l),k.end=a&&D.isSame(a,l)):(k.start=!!a&&D.isSame(a,l),k.end=!!n&&D.isSame(n,l)),D.isSame(i,l)&&(k.type="today"),C?.(k,{rowIndex:m,columnIndex:R}),d[R+r]=k}x?.(d)}},Oa=(t,s,r)=>{const a=H().locale(r).startOf("month").month(s).year(t),n=a.daysInMonth();return ht(n).map(i=>a.add(i,"day").toDate())},wa=(t,s,r,a)=>{const n=H().year(t).month(s).startOf("month"),i=Oa(t,s,r).find(l=>!a?.(l));return i?H(i).locale(r):n.locale(r)},Ga=(t,s,r)=>{const a=t.year();if(!r?.(t.toDate()))return t.locale(s);const n=t.month();if(!Oa(a,n,s).every(r))return wa(a,n,s,r);for(let i=0;i<12;i++)if(!Oa(a,i,s).every(r))return wa(a,i,s,r);return t},qn=Ve({...Qa,cellClassName:{type:ue(Function)},showWeekNumber:Boolean,selectionMode:at("date")}),Gn=["changerange","pick","select"],ca={name:"es",el:{datepicker:{now:"Ahora",today:"Hoy",cancel:"Cancelar",clear:"Limpiar",confirm:"Aceptar",dateTablePrompt:"Use las teclas de flecha y enter para seleccionar el día del mes",monthTablePrompt:"Use las teclas de flecha y enter para seleccionar el mes",yearTablePrompt:"Use las teclas de flecha y enter para seleccionar el año",selectedDate:"Fecha seleccionada",selectDate:"Seleccionar fecha",selectTime:"Seleccionar hora",startDate:"Fecha de inicio",startTime:"Hora de inicio",endDate:"Fecha de fin",endTime:"Hora de fin",prevYear:"Año anterior",nextYear:"Próximo año",prevMonth:"Mes anterior",nextMonth:"Próximo mes",year:"",month1:"Enero",month2:"Febrero",month3:"Marzo",month4:"Abril",month5:"Mayo",month6:"Junio",month7:"Julio",month8:"Agosto",month9:"Septiembre",month10:"Octubre",month11:"Noviembre",month12:"Diciembre",week:"semana",weeks:{sun:"Dom",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb"},weeksFull:{sun:"Domingo",mon:"Lunes",tue:"Martes",wed:"Miércoles",thu:"Jueves",fri:"Viernes",sat:"Sábado"},months:{jan:"Ene",feb:"Feb",mar:"Mar",apr:"Abr",may:"May",jun:"Jun",jul:"Jul",aug:"Ago",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dic"}}}},Ha=(t="")=>["normal","today"].includes(t),Hn=(t,s)=>{const{lang:r}=Ne(G(ca)),a=G(),n=G(),i=G(),l=G(),b=G([[],[],[],[],[],[]]);let C=!1;const x=t.date.$locale().weekStart||7,m=t.date.locale("en").localeData().weekdaysShort().map(g=>g.toLowerCase()),d=$(()=>x>3?7-x:-x),R=$(()=>{const g=t.date.startOf("month");return g.subtract(g.day()||7,"day")}),k=$(()=>m.concat(m).slice(x,x+7)),E=$(()=>mn(e(N)).some(g=>g.isCurrent)),D=$(()=>{const g=t.date.startOf("month"),T=g.day()||7,P=g.daysInMonth(),v=g.subtract(1,"month").daysInMonth();return{startOfMonthDay:T,dateCountOfMonth:P,dateCountOfLastMonth:v}}),p=$(()=>t.selectionMode==="dates"?Ye(t.parsedValue):[]),O=(g,{count:T,rowIndex:P,columnIndex:v})=>{const{startOfMonthDay:B,dateCountOfMonth:f,dateCountOfLastMonth:F}=e(D),U=e(d);if(P>=0&&P<=1){const ae=B+U<0?7+B+U:B+U;if(v+P*7>=ae)return g.text=T,!0;g.text=F-(ae-v%7)+1+P*7,g.type="prev-month"}else return T<=f?g.text=T:(g.text=T-f,g.type="next-month"),!0;return!1},M=(g,{columnIndex:T,rowIndex:P},v)=>{const{disabledDate:B,cellClassName:f}=t,F=e(p),U=O(g,{count:v,rowIndex:P,columnIndex:T}),ae=g.dayjs.toDate();return g.selected=F.find(Pe=>Pe.isSame(g.dayjs,"day")),g.isSelected=!!g.selected,g.isCurrent=I(g),g.disabled=B?.(ae),g.customClass=f?.(ae),U},y=g=>{if(t.selectionMode==="week"){const[T,P]=t.showWeekNumber?[1,7]:[0,6],v=_(g[T+1]);g[T].inRange=v,g[T].start=v,g[P].inRange=v,g[P].end=v}},N=$(()=>{const{minDate:g,maxDate:T,rangeState:P,showWeekNumber:v}=t,B=e(d),f=e(b),F="day";let U=1;if(v)for(let ae=0;ae<6;ae++)f[ae][0]||(f[ae][0]={type:"week",text:e(R).add(ae*7+1,F).week()});return jn({row:6,column:7},f,{startDate:g,columnIndexOffset:v?1:0,nextEndDate:P.endDate||T||P.selecting&&g||null,now:H().locale(e(r)).startOf(F),unit:F,relativeDateGetter:ae=>e(R).add(ae-B,F),setCellMetadata:(...ae)=>{M(...ae,U)&&(U+=1)},setRowMetadata:y}),f});$e(()=>t.date,async()=>{e(a)?.contains(document.activeElement)&&(await _e(),await V())});const V=async()=>e(n)?.focus(),I=g=>t.selectionMode==="date"&&Ha(g.type)&&A(g,t.parsedValue),A=(g,T)=>T?H(T).locale(e(r)).isSame(t.date.date(Number(g.text)),"day"):!1,L=(g,T)=>{const P=g*7+(T-(t.showWeekNumber?1:0))-e(d);return e(R).add(P,"day")},S=g=>{if(!t.rangeState.selecting)return;let T=g.target;if(T.tagName==="SPAN"&&(T=T.parentNode?.parentNode),T.tagName==="DIV"&&(T=T.parentNode),T.tagName!=="TD")return;const P=T.parentNode.rowIndex-1,v=T.cellIndex;e(N)[P][v].disabled||(P!==e(i)||v!==e(l))&&(i.value=P,l.value=v,s("changerange",{selecting:!0,endDate:L(P,v)}))},Y=g=>!e(E)&&g?.text===1&&g.type==="normal"||g.isCurrent,z=g=>{C||e(E)||t.selectionMode!=="date"||me(g,!0)},w=g=>{g.target.closest("td")&&(C=!0)},te=g=>{g.target.closest("td")&&(C=!1)},X=g=>{!t.rangeState.selecting||!t.minDate?(s("pick",{minDate:g,maxDate:null}),s("select",!0)):(g>=t.minDate?s("pick",{minDate:t.minDate,maxDate:g}):s("pick",{minDate:g,maxDate:t.minDate}),s("select",!1))},oe=g=>{const T=g.week(),P=`${g.year()}w${T}`;s("pick",{year:g.year(),week:T,value:P,date:g.startOf("week")})},ie=(g,T)=>{const P=T?Ye(t.parsedValue).filter(v=>v?.valueOf()!==g.valueOf()):Ye(t.parsedValue).concat([g]);s("pick",P)},me=(g,T=!1)=>{const P=g.target.closest("td");if(!P)return;const v=P.parentNode.rowIndex-1,B=P.cellIndex,f=e(N)[v][B];if(f.disabled||f.type==="week")return;const F=L(v,B);switch(t.selectionMode){case"range":{X(F);break}case"date":{s("pick",F,T);break}case"week":{oe(F);break}case"dates":{ie(F,!!f.selected);break}}},_=g=>{if(t.selectionMode!=="week")return!1;let T=t.date.startOf("day");if(g.type==="prev-month"&&(T=T.subtract(1,"month")),g.type==="next-month"&&(T=T.add(1,"month")),T=T.date(Number.parseInt(g.text,10)),t.parsedValue&&!ge(t.parsedValue)){const P=(t.parsedValue.day()-x+7)%7-1;return t.parsedValue.subtract(P,"day").isSame(T,"day")}return!1};return{WEEKS:k,rows:N,tbodyRef:a,currentCellRef:n,focus:V,isCurrent:I,isWeekActive:_,isSelectedCell:Y,handlePickDate:me,handleMouseUp:te,handleMouseDown:w,handleMouseMove:S,handleFocus:z}},Un=(t,{isCurrent:s,isWeekActive:r})=>{const a=Ee("date-table"),{t:n}=Ne(G(ca)),i=$(()=>[a.b(),{"is-week-mode":t.selectionMode==="week"}]),l=$(()=>n("el.datepicker.dateTablePrompt")),b=$(()=>n("el.datepicker.week"));return{tableKls:i,tableLabel:l,weekLabel:b,getCellClasses:m=>{const d=[];return Ha(m.type)&&!m.disabled?(d.push("available"),m.type==="today"&&d.push("today")):d.push(m.type),s(m)&&d.push("current"),m.inRange&&(Ha(m.type)||t.selectionMode==="week")&&(d.push("in-range"),m.start&&d.push("start-date"),m.end&&d.push("end-date")),m.disabled&&d.push("disabled"),m.selected&&d.push("selected"),m.customClass&&d.push(m.customClass),d.join(" ")},getRowKls:m=>[a.e("row"),{current:r(m)}],t:n}},Kn=Ve({cell:{type:ue(Object)}}),zn=Oe({name:"GDatePickerCell",props:Kn,setup(t){return{ns:Ee("date-table-cell"),cell:t.cell}}});function Wn(t,s,r,a,n,i){return fe(t.$slots,"default",Gt(Ht(t.cell)),()=>[q("div",{class:h(t.ns.b())},[q("span",{class:h(t.ns.e("text"))},pe(t.cell?.renderText??t.cell?.text),3)],2)])}const nt=pn(zn,[["render",Wn]]),Jn=["aria-label"],Zn={key:0,scope:"col"},Xn=["aria-label"],Qn=["aria-current","aria-selected","tabindex"],Ua=Oe({__name:"basic-date-table",props:qn,emits:Gn,setup(t,{expose:s,emit:r}){const a=t,n=r,{WEEKS:i,rows:l,tbodyRef:b,currentCellRef:C,focus:x,isCurrent:m,isWeekActive:d,isSelectedCell:R,handlePickDate:k,handleMouseUp:E,handleMouseDown:D,handleMouseMove:p,handleFocus:O}=Hn(a,n),{tableLabel:M,tableKls:y,weekLabel:N,getCellClasses:V,getRowKls:I,t:A}=Un(a,{isCurrent:m,isWeekActive:d});return s({focus:x}),(L,S)=>(j(),W("table",{"aria-label":e(M),class:h(e(y)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:S[1]||(S[1]=(...Y)=>e(k)&&e(k)(...Y)),onMousemove:S[2]||(S[2]=(...Y)=>e(p)&&e(p)(...Y)),onMousedown:S[3]||(S[3]=We((...Y)=>e(D)&&e(D)(...Y),["prevent"])),onMouseup:S[4]||(S[4]=(...Y)=>e(E)&&e(E)(...Y))},[q("tbody",{ref_key:"tbodyRef",ref:b},[q("tr",null,[L.showWeekNumber?(j(),W("th",Zn,pe(e(N)),1)):de("",!0),(j(!0),W(Ce,null,Te(e(i),(Y,z)=>(j(),W("th",{key:z,"aria-label":e(A)("el.datepicker.weeksFull."+Y),scope:"col"},pe(e(A)("el.datepicker.weeks."+Y)),9,Xn))),128))]),(j(!0),W(Ce,null,Te(e(l),(Y,z)=>(j(),W("tr",{key:z,class:h(e(I)(Y[1]))},[(j(!0),W(Ce,null,Te(Y,(w,te)=>(j(),W("td",{key:`${z}.${te}`,ref_for:!0,ref:X=>e(R)(w)&&(C.value=X),class:h(e(V)(w)),"aria-current":w.isCurrent?"date":void 0,"aria-selected":w.isCurrent,tabindex:e(R)(w)?0:-1,onFocus:S[0]||(S[0]=(...X)=>e(O)&&e(O)(...X))},[ne(nt,{cell:w},null,8,["cell"])],42,Qn))),128))],2))),128))],512)],42,Jn))}}),er=Ve({...Qa,selectionMode:at("month")}),ar=["aria-label"],tr=["aria-selected","aria-label","tabindex","onKeydown"],Ka=Oe({__name:"basic-month-table",props:er,emits:["changerange","pick","select"],setup(t,{expose:s,emit:r}){const a=t,n=r,i=Ee("month-table"),{t:l,lang:b}=Ne(),C=G(),x=G(),m=G(a.date.locale("en").localeData().monthsShort().map(N=>N.toLowerCase())),d=G([[],[],[]]),R=G(),k=G(),E=$(()=>{const N=d.value,V=H().locale(b.value).startOf("month");for(let I=0;I<3;I++){const A=N[I];for(let L=0;L<4;L++){const S=A[L]||={row:I,column:L,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};S.type="normal";const Y=I*4+L,z=a.date.startOf("year").month(Y),w=a.rangeState.endDate||a.maxDate||a.rangeState.selecting&&a.minDate||null;S.inRange=!!(a.minDate&&z.isSameOrAfter(a.minDate,"month")&&w&&z.isSameOrBefore(w,"month"))||!!(a.minDate&&z.isSameOrBefore(a.minDate,"month")&&w&&z.isSameOrAfter(w,"month")),a.minDate?.isSameOrAfter(w)?(S.start=!!(w&&z.isSame(w,"month")),S.end=a.minDate&&z.isSame(a.minDate,"month")):(S.start=!!(a.minDate&&z.isSame(a.minDate,"month")),S.end=!!(w&&z.isSame(w,"month"))),V.isSame(z)&&(S.type="today"),S.text=Y,S.disabled=a.disabledDate?.(z.toDate())||!1}}return N}),D=()=>{x.value?.focus()},p=N=>{const V={},I=a.date.year(),A=new Date,L=N.text;return V.disabled=a.disabledDate?Oa(I,L,b.value).every(a.disabledDate):!1,V.current=Ye(a.parsedValue).findIndex(S=>H.isDayjs(S)&&S.year()===I&&S.month()===L)>=0,V.today=A.getFullYear()===I&&A.getMonth()===L,N.inRange&&(V["in-range"]=!0,N.start&&(V["start-date"]=!0),N.end&&(V["end-date"]=!0)),V},O=N=>{const V=a.date.year(),I=N.text;return Ye(a.date).findIndex(A=>A.year()===V&&A.month()===I)>=0},M=N=>{if(!a.rangeState.selecting)return;let V=N.target;if(V.tagName==="SPAN"&&(V=V.parentNode?.parentNode),V.tagName==="DIV"&&(V=V.parentNode),V.tagName!=="TD")return;const I=V.parentNode.rowIndex,A=V.cellIndex;E.value[I][A].disabled||(I!==R.value||A!==k.value)&&(R.value=I,k.value=A,n("changerange",{selecting:!0,endDate:a.date.startOf("year").month(I*4+A)}))},y=N=>{const V=N.target?.closest("td");if(V?.tagName!=="TD"||Ta(V,"disabled"))return;const I=V.cellIndex,L=V.parentNode.rowIndex*4+I,S=a.date.startOf("year").month(L);if(a.selectionMode==="months"){if(N.type==="keydown"){n("pick",Ye(a.parsedValue),!1);return}const Y=wa(a.date.year(),L,b.value,a.disabledDate),z=Ta(V,"current")?Ye(a.parsedValue).filter(w=>w?.month()!==Y.month()):Ye(a.parsedValue).concat([H(Y)]);n("pick",z)}else a.selectionMode==="range"?a.rangeState.selecting?(a.minDate&&S>=a.minDate?n("pick",{minDate:a.minDate,maxDate:S}):n("pick",{minDate:S,maxDate:a.minDate}),n("select",!1)):(n("pick",{minDate:S,maxDate:null}),n("select",!0)):n("pick",L)};return $e(()=>a.date,async()=>{C.value?.contains(document.activeElement)&&(await _e(),x.value?.focus())}),s({focus:D}),(N,V)=>(j(),W("table",{role:"grid","aria-label":e(l)("el.datepicker.monthTablePrompt"),class:h(e(i).b()),onClick:y,onMousemove:M},[q("tbody",{ref_key:"tbodyRef",ref:C},[(j(!0),W(Ce,null,Te(E.value,(I,A)=>(j(),W("tr",{key:A},[(j(!0),W(Ce,null,Te(I,(L,S)=>(j(),W("td",{key:S,ref_for:!0,ref:Y=>O(L)&&(x.value=Y),class:h(p(L)),"aria-selected":`${O(L)}`,"aria-label":e(l)(`el.datepicker.month${+L.text+1}`),tabindex:O(L)?0:-1,onKeydown:[va(We(y,["prevent","stop"]),["space"]),va(We(y,["prevent","stop"]),["enter"])]},[ne(nt,{cell:{...L,renderText:e(l)("el.datepicker.months."+m.value[L.text])}},null,8,["cell"])],42,tr))),128))]))),128))],512)],42,ar))}}),nr=Ve({...Qa,selectionMode:at("year")}),rr=["aria-label"],or=["aria-selected","aria-label","tabindex","onKeydown"],za=Oe({__name:"basic-year-table",props:nr,emits:["changerange","pick","select"],setup(t,{expose:s,emit:r}){const a=(V,I)=>{const A=H(String(V)).locale(I).startOf("year"),S=A.endOf("year").dayOfYear();return ht(S).map(Y=>A.add(Y,"day").toDate())},n=t,i=r,l=Ee("year-table"),{t:b,lang:C}=Ne(),x=G(),m=G(),d=$(()=>Math.floor(n.date.year()/10)*10),R=G([[],[],[]]),k=G(),E=G(),D=$(()=>{const V=R.value,I=H().locale(C.value).startOf("year");for(let A=0;A<3;A++){const L=V[A];for(let S=0;S<4&&!(A*4+S>=10);S++){let Y=L[S];Y||(Y={row:A,column:S,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),Y.type="normal";const z=A*4+S+d.value,w=H().year(z),te=n.rangeState.endDate||n.maxDate||n.rangeState.selecting&&n.minDate||null;Y.inRange=!!(n.minDate&&w.isSameOrAfter(n.minDate,"year")&&te&&w.isSameOrBefore(te,"year"))||!!(n.minDate&&w.isSameOrBefore(n.minDate,"year")&&te&&w.isSameOrAfter(te,"year")),n.minDate?.isSameOrAfter(te)?(Y.start=!!(te&&w.isSame(te,"year")),Y.end=!!(n.minDate&&w.isSame(n.minDate,"year"))):(Y.start=!!(n.minDate&&w.isSame(n.minDate,"year")),Y.end=!!(te&&w.isSame(te,"year"))),I.isSame(w)&&(Y.type="today"),Y.text=z;const oe=w.toDate();Y.disabled=n.disabledDate&&n.disabledDate(oe)||!1,L[S]=Y}}return V}),p=()=>{m.value?.focus()},O=V=>{const I={},A=H().locale(C.value),L=V.text;return I.disabled=n.disabledDate?a(L,C.value).every(n.disabledDate):!1,I.today=A.year()===L,I.current=Ye(n.parsedValue).findIndex(S=>S.year()===L)>=0,V.inRange&&(I["in-range"]=!0,V.start&&(I["start-date"]=!0),V.end&&(I["end-date"]=!0)),I},M=V=>{const I=V.text;return Ye(n.date).findIndex(A=>A.year()===I)>=0},y=V=>{const I=V.target?.closest("td");if(!I||!I.textContent||Ta(I,"disabled"))return;const A=I.cellIndex,S=I.parentNode.rowIndex*4+A+d.value,Y=H().year(S);if(n.selectionMode==="range")n.rangeState.selecting?(n.minDate&&Y>=n.minDate?i("pick",{minDate:n.minDate,maxDate:Y}):i("pick",{minDate:Y,maxDate:n.minDate}),i("select",!1)):(i("pick",{minDate:Y,maxDate:null}),i("select",!0));else if(n.selectionMode==="years"){if(V.type==="keydown"){i("pick",Ye(n.parsedValue),!1);return}const z=Ga(Y.startOf("year"),C.value,n.disabledDate),w=Ta(I,"current")?Ye(n.parsedValue).filter(te=>te?.year()!==S):Ye(n.parsedValue).concat([z]);i("pick",w)}else i("pick",S)},N=V=>{if(!n.rangeState.selecting)return;const I=V.target?.closest("td");if(!I)return;const A=I.parentNode.rowIndex,L=I.cellIndex;D.value[A][L].disabled||(A!==k.value||L!==E.value)&&(k.value=A,E.value=L,i("changerange",{selecting:!0,endDate:H().year(d.value).add(A*4+L,"year")}))};return $e(()=>n.date,async()=>{x.value?.contains(document.activeElement)&&(await _e(),m.value?.focus())}),s({focus:p}),(V,I)=>(j(),W("table",{role:"grid","aria-label":e(b)("el.datepicker.yearTablePrompt"),class:h(e(l).b()),onClick:y,onMousemove:N},[q("tbody",{ref_key:"tbodyRef",ref:x},[(j(!0),W(Ce,null,Te(D.value,(A,L)=>(j(),W("tr",{key:L},[(j(!0),W(Ce,null,Te(A,(S,Y)=>(j(),W("td",{key:`${L}_${Y}`,ref_for:!0,ref:z=>M(S)&&(m.value=z),class:h(["available",O(S)]),"aria-selected":M(S),"aria-label":String(S.text),tabindex:M(S)?0:-1,onKeydown:[va(We(y,["prevent","stop"]),["space"]),va(We(y,["prevent","stop"]),["enter"])]},[ne(nt,{cell:S},null,8,["cell"])],42,or))),128))]))),128))],512)],42,rr))}}),lr=["onClick"],sr=["aria-label"],ir=["aria-label"],ur=["aria-label"],cr=["aria-label"],dr=["disabled"],mr=["disabled"],pr=Oe({__name:"panel-date-pick",props:_n,emits:["pick","set-picker-option","panel-change"],setup(t,{emit:s}){const r=(o,c,Q)=>!0,a=t,n=s,i=Ee("picker-panel"),l=Ee("date-picker"),b=Ja(),C=Za(),{t:x,lang:m}=Ne(G(ca)),d=He("EP_PICKER_BASE"),R=He(un),{shortcuts:k,disabledDate:E,cellClassName:D,defaultTime:p}=d.props,O=Ge(d.props,"defaultValue"),M=G(),y=G(H().locale(m.value)),N=G(!1);let V=!1;const I=$(()=>H(p).locale(m.value)),A=$(()=>y.value.month()),L=$(()=>y.value.year()),S=G([]),Y=G(null),z=G(null),w=o=>S.value.length>0?r(o,S.value,a.format||"HH:mm:ss"):!0,te=o=>p&&!ce.value&&!N.value&&!V?I.value.year(o.year()).month(o.month()).date(o.date()):Pe.value?o.millisecond(0):o.startOf("day"),X=(o,...c)=>{if(!o)n("pick",o,...c);else if(ge(o)){const Q=o.map(te);n("pick",Q,...c)}else n("pick",te(o),...c);Y.value=null,z.value=null,N.value=!1,V=!1},oe=async(o,c)=>{if(P.value==="date"){o=o;let Q=a.parsedValue?a.parsedValue.year(o.year()).month(o.month()).date(o.date()):o;w(Q),y.value=Q,X(Q,Pe.value||c),a.type==="datetime"&&(await _e(),qe())}else P.value==="week"?X(o.date):P.value==="dates"&&X(o,!0)},ie=o=>{const c=o?"add":"subtract";y.value=y.value[c](1,"month"),K("month")},me=o=>{const c=y.value,Q=o?"add":"subtract";y.value=_.value==="year"?c[Q](10,"year"):c[Q](1,"year"),K("year")},_=G("date"),g=$(()=>{const o=x("el.datepicker.year");if(_.value==="year"){const c=Math.floor(L.value/10)*10;return o?`${c} ${o} - ${c+9} ${o}`:`${c} - ${c+9}`}return`${L.value} ${o}`}),T=o=>{const c=Ba(o.value)?o.value():o.value;if(c){V=!0,X(H(c).locale(m.value));return}o.onClick&&o.onClick({attrs:b,slots:C,emit:n})},P=$(()=>{const{type:o}=a;return["week","month","months","year","years","dates"].includes(o)?o:"date"}),v=$(()=>P.value==="dates"||P.value==="months"||P.value==="years"),B=$(()=>P.value==="date"?_.value:P.value),f=$(()=>!!k.length),F=async(o,c)=>{P.value==="month"?(y.value=wa(y.value.year(),o,m.value,E),X(y.value,!1)):P.value==="months"?X(o,c??!0):(y.value=wa(y.value.year(),o,m.value,E),_.value="date",["month","year","date","week"].includes(P.value)&&(X(y.value,!0),await _e(),qe())),K("month")},U=async(o,c)=>{if(P.value==="year"){const Q=y.value.startOf("year").year(o);y.value=Ga(Q,m.value,E),X(y.value,!1)}else if(P.value==="years")X(o,c??!0);else{const Q=y.value.year(o);y.value=Ga(Q,m.value,E),_.value="month",["month","year","date","week"].includes(P.value)&&(X(y.value,!0),await _e(),qe())}K("year")},ae=async o=>{_.value=o,await _e(),qe()},Pe=$(()=>a.type==="datetime"||a.type==="datetimerange"),Ie=$(()=>{const o=Pe.value||P.value==="dates",c=P.value==="years",Q=P.value==="months",ke=_.value==="date",xe=_.value==="year",ra=_.value==="month";return o&&ke||c&&xe||Q&&ra}),je=$(()=>E?a.parsedValue?ge(a.parsedValue)?E(a.parsedValue[0].toDate()):E(a.parsedValue.toDate()):!0:!1),J=()=>{if(v.value)X(a.parsedValue);else{let o=a.parsedValue;if(!o){const c=H(p).locale(m.value),Q=Ke();o=c.year(Q.year()).month(Q.month()).date(Q.date())}y.value=o,X(o)}},Z=$(()=>E?E(H().locale(m.value).toDate()):!1),re=()=>{const c=H().locale(m.value).toDate();N.value=!0,(!E||!E(c))&&w(c)&&(y.value=H().locale(m.value),X(y.value))},le=$(()=>a.timeFormat||yt(a.format)),be=$(()=>a.dateFormat||kt(a.format)),ce=$(()=>{if(z.value)return z.value;if(!(!a.parsedValue&&!O.value))return(a.parsedValue||y.value).format(le.value)}),ye=$(()=>{if(Y.value)return Y.value;if(!(!a.parsedValue&&!O.value))return(a.parsedValue||y.value).format(be.value)}),we=G(!1),Me=()=>{we.value=!0},Fe=()=>{we.value=!1},Ue=o=>({hour:o.hour(),minute:o.minute(),second:o.second(),year:o.year(),month:o.month(),date:o.date()}),ba=(o,c,Q)=>{const{hour:ke,minute:xe,second:ra}=Ue(o),ka=a.parsedValue?a.parsedValue.hour(ke).minute(xe).second(ra):o;y.value=ka,X(y.value,!0),Q||(we.value=c)},da=o=>{const c=H(o,le.value).locale(m.value);if(c.isValid()&&w(c)){const{year:Q,month:ke,date:xe}=Ue(y.value);y.value=c.year(Q).month(ke).date(xe),z.value=null,we.value=!1,X(y.value,!0)}},se=o=>{const c=H(o,be.value).locale(m.value);if(c.isValid()){if(E&&E(c.toDate()))return;const{hour:Q,minute:ke,second:xe}=Ue(y.value);y.value=c.hour(Q).minute(ke).second(xe),Y.value=null,X(y.value,!0)}},Xe=o=>H.isDayjs(o)&&o.isValid()&&(E?!E(o.toDate()):!0),Je=o=>ge(o)?o.map(c=>c.format(a.format)):o.format(a.format),na=o=>H(o,a.format).locale(m.value),Ke=()=>{const o=H(O.value).locale(m.value);if(!O.value){const c=I.value;return H().hour(c.hour()).minute(c.minute()).second(c.second()).locale(m.value)}return o},qe=()=>{["week","month","year","date"].includes(P.value)&&M.value?.focus()},ha=()=>{qe(),P.value==="week"&&ma(Se.down)},ya=o=>{const{code:c}=o;[Se.up,Se.down,Se.left,Se.right,Se.home,Se.end,Se.pageUp,Se.pageDown].includes(c)&&(ma(c),o.stopPropagation(),o.preventDefault()),[Se.enter,Se.space,Se.numpadEnter].includes(c)&&Y.value===null&&z.value===null&&(o.preventDefault(),X(y.value,!1))},ma=o=>{const{up:c,down:Q,left:ke,right:xe,home:ra,end:ka,pageUp:u,pageDown:ee}=Se,De={year:{[c]:-4,[Q]:4,[ke]:-1,[xe]:1,offset:(ve,ze)=>ve.setFullYear(ve.getFullYear()+ze)},month:{[c]:-4,[Q]:4,[ke]:-1,[xe]:1,offset:(ve,ze)=>ve.setMonth(ve.getMonth()+ze)},week:{[c]:-1,[Q]:1,[ke]:-1,[xe]:1,offset:(ve,ze)=>ve.setDate(ve.getDate()+ze*7)},date:{[c]:-7,[Q]:7,[ke]:-1,[xe]:1,[ra]:ve=>-ve.getDay(),[ka]:ve=>-ve.getDay()+6,[u]:ve=>-new Date(ve.getFullYear(),ve.getMonth(),0).getDate(),[ee]:ve=>new Date(ve.getFullYear(),ve.getMonth()+1,0).getDate(),offset:(ve,ze)=>ve.setDate(ve.getDate()+ze)}},Re=y.value.toDate();for(;Math.abs(y.value.diff(Re,"year",!0))<1;){const ve=De[B.value];if(!ve)return;if(ve.offset(Re,Ba(ve[o])?ve[o](Re):ve[o]??0),E&&E(Re))break;const ze=H(Re).locale(m.value);y.value=ze,n("pick",ze,!0);break}},K=o=>{n("panel-change",y.value.toDate(),o,_.value)};return $e(()=>P.value,o=>{if(["month","year"].includes(o)){_.value=o;return}else if(o==="years"){_.value="year";return}else if(o==="months"){_.value="month";return}_.value="date"},{immediate:!0}),$e(()=>_.value,()=>{R?.updatePopper()}),$e(()=>O.value,o=>{o&&(y.value=Ke())},{immediate:!0}),$e(()=>a.parsedValue,o=>{if(o){if(v.value||ge(o))return;y.value=o}else y.value=Ke()},{immediate:!0}),n("set-picker-option",["isValidValue",Xe]),n("set-picker-option",["formatToString",Je]),n("set-picker-option",["parseUserInput",na]),n("set-picker-option",["handleFocusPicker",ha]),(o,c)=>(j(),W("div",{class:h([e(i).b(),e(l).b(),{"has-sidebar":o.$slots.sidebar||f.value,"has-time":Pe.value}])},[q("div",{class:h(e(i).e("body-wrapper"))},[fe(o.$slots,"sidebar",{class:h(e(i).e("sidebar"))}),f.value?(j(),W("div",{key:0,class:h(e(i).e("sidebar"))},[(j(!0),W(Ce,null,Te(e(k),(Q,ke)=>(j(),W("button",{key:ke,type:"button",class:h(e(i).e("shortcut")),onClick:xe=>T(Q)},pe(Q.text),11,lr))),128))],2)):de("",!0),q("div",{class:h(e(i).e("body"))},[Pe.value?(j(),W("div",{key:0,class:h(e(l).e("time-header"))},[q("span",{class:h(e(l).e("editor-wrap"))},[ne(e(oa),{placeholder:e(x)("el.datepicker.selectDate"),"model-value":ye.value,"validate-event":!1,onInput:c[0]||(c[0]=Q=>Y.value=Q),onChange:se},null,8,["placeholder","model-value"])],2),Ae((j(),W("span",{class:h(e(l).e("editor-wrap"))},[ne(e(oa),{placeholder:e(x)("el.datepicker.selectTime"),"model-value":ce.value,"validate-event":!1,onFocus:Me,onInput:c[1]||(c[1]=Q=>z.value=Q),onChange:da},null,8,["placeholder","model-value"]),ne(e(ja),{visible:we.value,format:le.value,"parsed-value":y.value,onPick:ba},null,8,["visible","format","parsed-value"])],2)),[[e(qa),Fe]])],2)):de("",!0),Ae(q("div",{class:h([e(l).e("header"),(_.value==="year"||_.value==="month")&&e(l).e("header--bordered")])},[q("span",{class:h(e(l).e("prev-btn"))},[Ae(q("button",{type:"button","aria-label":e(x)("el.datepicker.prevYear"),class:h(["d-arrow-left",e(i).e("icon-btn")]),onClick:c[2]||(c[2]=Q=>me(!1))},[fe(o.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,sr),[[Qe,_.value!=="date"]]),Ae(q("button",{type:"button","aria-label":e(x)("el.datepicker.prevMonth"),class:h([e(i).e("icon-btn"),"arrow-left"]),onClick:c[3]||(c[3]=Q=>ie(!1))},[fe(o.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,ir),[[Qe,_.value==="date"]])],2),q("span",{role:"button",class:h(e(l).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:c[4]||(c[4]=va(Q=>ae("year"),["enter"])),onClick:c[5]||(c[5]=Q=>ae("year"))},pe(g.value),35),Ae(q("span",{role:"button","aria-live":"polite",tabindex:"0",class:h([e(l).e("header-label"),{active:_.value==="month"}]),onKeydown:c[6]||(c[6]=va(Q=>ae("month"),["enter"])),onClick:c[7]||(c[7]=Q=>ae("month"))},pe(e(x)(`el.datepicker.month${A.value+1}`)),35),[[Qe,_.value==="date"]]),q("span",{class:h(e(l).e("next-btn"))},[Ae(q("button",{type:"button","aria-label":e(x)("el.datepicker.nextMonth"),class:h([e(i).e("icon-btn"),"arrow-right"]),onClick:c[8]||(c[8]=Q=>ie(!0))},[fe(o.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,ur),[[Qe,_.value==="date"]]),Ae(q("button",{type:"button","aria-label":e(x)("el.datepicker.nextYear"),class:h([e(i).e("icon-btn"),"d-arrow-right"]),onClick:c[9]||(c[9]=Q=>me(!0))},[fe(o.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,cr),[[Qe,_.value!=="date"]])],2)],2),[[Qe,_.value!=="time"]]),q("div",{class:h(e(i).e("content")),onKeydown:ya},[_.value==="date"?(j(),Le(Ua,{key:0,ref_key:"currentViewRef",ref:M,"selection-mode":P.value,date:y.value,"parsed-value":o.parsedValue,"disabled-date":e(E),"cell-class-name":e(D),onPick:oe},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):de("",!0),_.value==="year"?(j(),Le(za,{key:1,ref_key:"currentViewRef",ref:M,"selection-mode":P.value,date:y.value,"disabled-date":e(E),"parsed-value":o.parsedValue,onPick:U},null,8,["selection-mode","date","disabled-date","parsed-value"])):de("",!0),_.value==="month"?(j(),Le(Ka,{key:2,ref_key:"currentViewRef",ref:M,"selection-mode":P.value,date:y.value,"parsed-value":o.parsedValue,"disabled-date":e(E),onPick:F},null,8,["selection-mode","date","parsed-value","disabled-date"])):de("",!0)],34)],2)],2),Ae(q("div",{class:h(e(i).e("footer"))},[Ae(q("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:Z.value,onClick:re},pe(e(x)("el.datepicker.now")),9,dr),[[Qe,!v.value&&o.showNow]]),q("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:je.value,onClick:J},pe(e(x)("el.datepicker.confirm")),9,mr)],2),[[Qe,Ie.value]])],2))}}),fr=Ve({...Tt,...et,visible:Boolean}),Ot=t=>{const{emit:s}=gt(),r=Ja(),a=Za();return i=>{const l=Ba(i.value)?i.value():i.value;if(l){s("pick",[H(l[0]).locale(t.value),H(l[1]).locale(t.value)]);return}i.onClick&&i.onClick({attrs:r,slots:a,emit:s})}},At=(t,{defaultValue:s,leftDate:r,rightDate:a,unit:n,onParsedValueChanged:i})=>{const{emit:l}=gt(),{pickerNs:b}=He(Xa),C=Ee("date-range-picker"),{t:x,lang:m}=Ne(G(ca)),d=Ot(m),R=G(),k=G(),E=G({endDate:null,selecting:!1}),D=N=>{E.value=N},p=(N=!1)=>{const V=e(R),I=e(k);ga([V,I])&&l("pick",[V,I],N)},O=N=>{E.value.selecting=N,N||(E.value.endDate=null)},M=N=>{if(ge(N)&&N.length===2){const[V,I]=N;R.value=V,r.value=V,k.value=I,i(e(R),e(k))}else y()},y=()=>{const[N,V]=tt(e(s),{lang:e(m),unit:n,unlinkPanels:t.unlinkPanels});R.value=void 0,k.value=void 0,r.value=N,a.value=V};return $e(s,N=>{N&&y()},{immediate:!0}),$e(()=>t.parsedValue,M,{immediate:!0}),{minDate:R,maxDate:k,rangeState:E,lang:m,ppNs:b,drpNs:C,handleChangeRange:D,handleRangeConfirm:p,handleShortcutClick:d,onSelect:O,onReset:M,t:x}},vr=["onClick"],gr=["aria-label"],br=["disabled","aria-label"],hr=["disabled","aria-label"],yr=["disabled","aria-label"],kr=["disabled","aria-label"],Dr=["aria-label"],xa="month",wr=Oe({__name:"panel-date-range",props:fr,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(t,{emit:s}){const r=t,a=s,n=He("EP_PICKER_BASE"),{disabledDate:i,cellClassName:l,defaultTime:b,clearable:C}=n.props,x=Ge(n.props,"format"),m=Ge(n.props,"shortcuts"),d=Ge(n.props,"defaultValue"),{lang:R}=Ne(G(ca)),k=G(H().locale(R.value)),E=G(H().locale(R.value).add(1,xa)),{minDate:D,maxDate:p,rangeState:O,ppNs:M,drpNs:y,handleChangeRange:N,handleRangeConfirm:V,handleShortcutClick:I,onSelect:A,onReset:L,t:S}=At(r,{defaultValue:d,leftDate:k,rightDate:E,unit:xa,onParsedValueChanged:ma});$e(()=>r.visible,K=>{!K&&O.value.selecting&&(L(r.parsedValue),A(!1))});const Y=G({min:null,max:null}),z=G({min:null,max:null}),w=$(()=>`${k.value.year()} ${S("el.datepicker.year")} ${S(`el.datepicker.month${k.value.month()+1}`)}`),te=$(()=>`${E.value.year()} ${S("el.datepicker.year")} ${S(`el.datepicker.month${E.value.month()+1}`)}`),X=$(()=>k.value.year()),oe=$(()=>k.value.month()),ie=$(()=>E.value.year()),me=$(()=>E.value.month()),_=$(()=>!!m.value.length),g=$(()=>Y.value.min!==null?Y.value.min:D.value?D.value.format(f.value):""),T=$(()=>Y.value.max!==null?Y.value.max:p.value||D.value?(p.value||D.value).format(f.value):""),P=$(()=>z.value.min!==null?z.value.min:D.value?D.value.format(B.value):""),v=$(()=>z.value.max!==null?z.value.max:p.value||D.value?(p.value||D.value).format(B.value):""),B=$(()=>r.timeFormat||yt(x.value)),f=$(()=>r.dateFormat||kt(x.value)),F=K=>ga(K)&&(i?!i(K[0].toDate())&&!i(K[1].toDate()):!0),U=()=>{k.value=k.value.subtract(1,"month"),r.unlinkPanels||(E.value=k.value.add(1,"month")),Z("month")},ae=()=>{r.unlinkPanels?E.value=E.value.add(1,"month"):(k.value=k.value.add(1,"month"),E.value=k.value.add(1,"month")),Z("month")},Pe=()=>{k.value=k.value.add(1,"year"),Z("year")},Ie=()=>{k.value=k.value.add(1,"month"),Z("month")},je=()=>{E.value=E.value.subtract(1,"year"),Z("year")},J=()=>{E.value=E.value.subtract(1,"month"),Z("month")},Z=K=>{a("panel-change",[k.value.toDate(),E.value.toDate()],K)},re=$(()=>{const K=(oe.value+1)%12,o=oe.value+1>=12?1:0;return r.unlinkPanels&&new Date(X.value+o,K)<new Date(ie.value,me.value)}),le=$(()=>r.unlinkPanels&&ie.value*12+me.value-(X.value*12+oe.value+1)>=12),be=$(()=>!(D.value&&p.value&&!O.value.selecting&&ga([D.value,p.value]))),ce=$(()=>r.type==="datetime"||r.type==="datetimerange"),ye=(K,o)=>{if(K)return b?H(b[o]||b).locale(R.value).year(K.year()).month(K.month()).date(K.date()):K},we=(K,o=!0)=>{const c=K.minDate,Q=K.maxDate,ke=ye(c,0),xe=ye(Q,1);p.value===xe&&D.value===ke||(a("calendar-change",[c.toDate(),Q&&Q.toDate()]),p.value=xe,D.value=ke,xe?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[ke?ke.format(x.value):"",""]]),!(!o||ce.value)&&V())},Me=G(!1),Fe=G(!1),Ue=()=>{Me.value=!1},ba=()=>{Fe.value=!1},da=(K,o)=>{Y.value[o]=K;const c=H(K,f.value).locale(R.value);if(c.isValid()){if(i&&i(c.toDate()))return;o==="min"?(k.value=c,D.value=(D.value||k.value).year(c.year()).month(c.month()).date(c.date()),!r.unlinkPanels&&(!p.value||p.value.isBefore(D.value))&&(E.value=c.add(1,"month"),p.value=D.value.add(1,"month"))):(E.value=c,p.value=(p.value||E.value).year(c.year()).month(c.month()).date(c.date()),!r.unlinkPanels&&(!D.value||D.value.isAfter(p.value))&&(k.value=c.subtract(1,"month"),D.value=p.value.subtract(1,"month")))}},se=(K,o)=>{Y.value[o]=null},Xe=(K,o)=>{z.value[o]=K;const c=H(K,B.value).locale(R.value);c.isValid()&&(o==="min"?(Me.value=!0,D.value=(D.value||k.value).hour(c.hour()).minute(c.minute()).second(c.second())):(Fe.value=!0,p.value=(p.value||E.value).hour(c.hour()).minute(c.minute()).second(c.second()),E.value=p.value))},Je=(K,o)=>{z.value[o]=null,o==="min"?(k.value=D.value,Me.value=!1,(!p.value||p.value.isBefore(D.value))&&(p.value=D.value)):(E.value=p.value,Fe.value=!1,p.value&&p.value.isBefore(D.value)&&(D.value=p.value))},na=(K,o,c)=>{z.value.min||(K&&(k.value=K,D.value=(D.value||k.value).hour(K.hour()).minute(K.minute()).second(K.second())),c||(Me.value=o),(!p.value||p.value.isBefore(D.value))&&(p.value=D.value,E.value=K))},Ke=(K,o,c)=>{z.value.max||(K&&(E.value=K,p.value=(p.value||E.value).hour(K.hour()).minute(K.minute()).second(K.second())),c||(Fe.value=o),p.value&&p.value.isBefore(D.value)&&(D.value=p.value))},qe=()=>{k.value=tt(e(d),{lang:e(R),unit:"month",unlinkPanels:r.unlinkPanels})[0],E.value=k.value.add(1,"month"),p.value=void 0,D.value=void 0,a("pick",null)},ha=K=>ge(K)?K.map(o=>o.format(x.value)):K.format(x.value),ya=K=>ge(K)?K.map(o=>H(o,x.value).locale(R.value)):H(K,x.value).locale(R.value);function ma(K,o){if(r.unlinkPanels&&o){const c=K?.year()||0,Q=K?.month()||0,ke=o.year(),xe=o.month();E.value=c===ke&&Q===xe?o.add(1,xa):o}else E.value=k.value.add(1,xa),o&&(E.value=E.value.hour(o.hour()).minute(o.minute()).second(o.second()))}return a("set-picker-option",["isValidValue",F]),a("set-picker-option",["parseUserInput",ya]),a("set-picker-option",["formatToString",ha]),a("set-picker-option",["handleClear",qe]),(K,o)=>(j(),W("div",{class:h([e(M).b(),e(y).b(),{"has-sidebar":K.$slots.sidebar||_.value,"has-time":ce.value}])},[q("div",{class:h(e(M).e("body-wrapper"))},[fe(K.$slots,"sidebar",{class:h(e(M).e("sidebar"))}),_.value?(j(),W("div",{key:0,class:h(e(M).e("sidebar"))},[(j(!0),W(Ce,null,Te(m.value,(c,Q)=>(j(),W("button",{key:Q,type:"button",class:h(e(M).e("shortcut")),onClick:ke=>e(I)(c)},pe(c.text),11,vr))),128))],2)):de("",!0),q("div",{class:h(e(M).e("body"))},[ce.value?(j(),W("div",{key:0,class:h(e(y).e("time-header"))},[q("span",{class:h(e(y).e("editors-wrap"))},[q("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{disabled:e(O).selecting,placeholder:e(S)("el.datepicker.startDate"),class:h(e(y).e("editor")),"model-value":g.value,"validate-event":!1,onInput:o[0]||(o[0]=c=>da(c,"min")),onChange:o[1]||(o[1]=c=>se(c,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),Ae((j(),W("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(O).selecting,placeholder:e(S)("el.datepicker.startTime"),"model-value":P.value,"validate-event":!1,onFocus:o[2]||(o[2]=c=>Me.value=!0),onInput:o[3]||(o[3]=c=>Xe(c,"min")),onChange:o[4]||(o[4]=c=>Je(c,"min"))},null,8,["class","disabled","placeholder","model-value"]),ne(e(ja),{visible:Me.value,format:B.value,"datetime-role":"start","parsed-value":k.value,onPick:na},null,8,["visible","format","parsed-value"])],2)),[[e(qa),Ue]])],2),q("span",null,[ne(e(he),{name:"solid chevron-right"})]),q("span",{class:h([e(y).e("editors-wrap"),"is-right"])},[q("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(O).selecting,placeholder:e(S)("el.datepicker.endDate"),"model-value":T.value,readonly:!e(D),"validate-event":!1,onInput:o[5]||(o[5]=c=>da(c,"max")),onChange:o[6]||(o[6]=c=>se(c,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),Ae((j(),W("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(O).selecting,placeholder:e(S)("el.datepicker.endTime"),"model-value":v.value,readonly:!e(D),"validate-event":!1,onFocus:o[7]||(o[7]=c=>e(D)&&(Fe.value=!0)),onInput:o[8]||(o[8]=c=>Xe(c,"max")),onChange:o[9]||(o[9]=c=>Je(c,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),ne(e(ja),{"datetime-role":"end",visible:Fe.value,format:B.value,"parsed-value":E.value,onPick:Ke},null,8,["visible","format","parsed-value"])],2)),[[e(qa),ba]])],2)],2)):de("",!0),q("div",{class:h([[e(M).e("content"),e(y).e("content")],"is-left"])},[q("div",{class:h(e(y).e("header"))},[q("button",{type:"button",class:h([e(M).e("icon-btn"),"arrow-left"]),"aria-label":e(S)("el.datepicker.prevMonth"),onClick:U},[fe(K.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,gr),K.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!le.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!le.value}],"d-arrow-right"]),"aria-label":e(S)("el.datepicker.nextYear"),onClick:Pe},[fe(K.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,br)):de("",!0),K.unlinkPanels?(j(),W("button",{key:1,type:"button",disabled:!re.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!re.value}],"arrow-right"]),"aria-label":e(S)("el.datepicker.nextMonth"),onClick:Ie},[fe(K.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,hr)):de("",!0),q("div",null,pe(w.value),1)],2),ne(Ua,{"selection-mode":"range",date:k.value,"min-date":e(D),"max-date":e(p),"range-state":e(O),"disabled-date":e(i),"cell-class-name":e(l),onChangerange:e(N),onPick:we,onSelect:e(A)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),q("div",{class:h([[e(M).e("content"),e(y).e("content")],"is-right"])},[q("div",{class:h(e(y).e("header"))},[K.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!le.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!le.value}],"d-arrow-left"]),"aria-label":e(S)("el.datepicker.prevYear"),onClick:je},[fe(K.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,yr)):de("",!0),K.unlinkPanels?(j(),W("button",{key:1,type:"button",disabled:!re.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!re.value}],"arrow-left"]),"aria-label":e(S)("el.datepicker.prevMonth"),onClick:J},[fe(K.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,kr)):de("",!0),q("button",{type:"button",class:h([e(M).e("icon-btn"),"arrow-right"]),"aria-label":e(S)("el.datepicker.nextMonth"),onClick:ae},[fe(K.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Dr),q("div",null,pe(te.value),1)],2),ne(Ua,{"selection-mode":"range",date:E.value,"min-date":e(D),"max-date":e(p),"range-state":e(O),"disabled-date":e(i),"cell-class-name":e(l),onChangerange:e(N),onPick:we,onSelect:e(A)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),ce.value?(j(),W("div",{key:0,class:h(e(M).e("footer"))},[e(C)?(j(),Le(e(it),{key:0,text:"",size:"sm",class:h(e(M).e("link-btn")),onClick:qe},{default:Be(()=>[pa(pe(e(S)("el.datepicker.clear")),1)]),_:1},8,["class"])):de("",!0),ne(e(it),{plain:"",size:"sm",class:h(e(M).e("link-btn")),disabled:be.value,onClick:o[10]||(o[10]=c=>e(V)(!1))},{default:Be(()=>[pa(pe(e(S)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):de("",!0)],2))}}),xr=Ve({...et}),Sr=["pick","set-picker-option","calendar-change"],Cr=({unlinkPanels:t,leftDate:s,rightDate:r})=>{const{t:a}=Ne(),n=()=>{s.value=s.value.subtract(1,"year"),t.value||(r.value=r.value.subtract(1,"year"))},i=()=>{t.value||(s.value=s.value.add(1,"year")),r.value=r.value.add(1,"year")},l=()=>{s.value=s.value.add(1,"year")},b=()=>{r.value=r.value.subtract(1,"year")},C=$(()=>`${s.value.year()} ${a("el.datepicker.year")}`),x=$(()=>`${r.value.year()} ${a("el.datepicker.year")}`),m=$(()=>s.value.year()),d=$(()=>r.value.year()===s.value.year()?s.value.year()+1:r.value.year());return{leftPrevYear:n,rightNextYear:i,leftNextYear:l,rightPrevYear:b,leftLabel:C,rightLabel:x,leftYear:m,rightYear:d}},Pr=["onClick"],Mr=["disabled"],Rr=["disabled"],Sa="year",Er=Oe({name:"DatePickerMonthRange",__name:"panel-month-range",props:xr,emits:Sr,setup(t,{emit:s}){const r=t,a=s,{lang:n}=Ne(G(ca)),i=He("EP_PICKER_BASE"),{shortcuts:l,disabledDate:b}=i.props,C=Ge(i.props,"format"),x=Ge(i.props,"defaultValue"),m=G(H().locale(n.value)),d=G(H().locale(n.value).add(1,Sa)),{minDate:R,maxDate:k,rangeState:E,ppNs:D,drpNs:p,handleChangeRange:O,handleRangeConfirm:M,handleShortcutClick:y,onSelect:N}=At(r,{defaultValue:x,leftDate:m,rightDate:d,unit:Sa,onParsedValueChanged:g}),V=$(()=>!!l.length),{leftPrevYear:I,rightNextYear:A,leftNextYear:L,rightPrevYear:S,leftLabel:Y,rightLabel:z,leftYear:w,rightYear:te}=Cr({unlinkPanels:Ge(r,"unlinkPanels"),leftDate:m,rightDate:d}),X=$(()=>r.unlinkPanels&&te.value>w.value+1),oe=(T,P=!0)=>{const v=T.minDate,B=T.maxDate;k.value===B&&R.value===v||(a("calendar-change",[v.toDate(),B&&B.toDate()]),k.value=B,R.value=v,B?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[v?v.format(C.value):"",""]]),P&&M())},ie=()=>{m.value=tt(e(x),{lang:e(n),unit:"year",unlinkPanels:r.unlinkPanels})[0],d.value=m.value.add(1,"year"),a("pick",null)},me=T=>ge(T)?T.map(P=>P.format(C.value)):T.format(C.value),_=T=>ge(T)?T.map(P=>H(P,C.value).locale(n.value)):H(T,C.value).locale(n.value);function g(T,P){if(r.unlinkPanels&&P){const v=T?.year()||0,B=P.year();d.value=v===B?P.add(1,Sa):P}else d.value=m.value.add(1,Sa)}return a("set-picker-option",["isValidValue",ga]),a("set-picker-option",["formatToString",me]),a("set-picker-option",["parseUserInput",_]),a("set-picker-option",["handleClear",ie]),(T,P)=>(j(),W("div",{class:h([e(D).b(),e(p).b(),{"has-sidebar":!!T.$slots.sidebar||V.value}])},[q("div",{class:h(e(D).e("body-wrapper"))},[fe(T.$slots,"sidebar",{class:h(e(D).e("sidebar"))}),V.value?(j(),W("div",{key:0,class:h(e(D).e("sidebar"))},[(j(!0),W(Ce,null,Te(e(l),(v,B)=>(j(),W("button",{key:B,type:"button",class:h(e(D).e("shortcut")),onClick:f=>e(y)(v)},pe(v.text),11,Pr))),128))],2)):de("",!0),q("div",{class:h(e(D).e("body"))},[q("div",{class:h([[e(D).e("content"),e(p).e("content")],"is-left"])},[q("div",{class:h(e(p).e("header"))},[q("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-left"]),onClick:P[0]||(P[0]=(...v)=>e(I)&&e(I)(...v))},[fe(T.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],2),T.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!X.value,class:h([[e(D).e("icon-btn"),{[e(D).is("disabled")]:!X.value}],"d-arrow-right"]),onClick:P[1]||(P[1]=(...v)=>e(L)&&e(L)(...v))},[fe(T.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Mr)):de("",!0),q("div",null,pe(e(Y)),1)],2),ne(Ka,{"selection-mode":"range",date:m.value,"min-date":e(R),"max-date":e(k),"range-state":e(E),"disabled-date":e(b),onChangerange:e(O),onPick:oe,onSelect:e(N)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),q("div",{class:h([[e(D).e("content"),e(p).e("content")],"is-right"])},[q("div",{class:h(e(p).e("header"))},[T.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!X.value,class:h([[e(D).e("icon-btn"),{"is-disabled":!X.value}],"d-arrow-left"]),onClick:P[2]||(P[2]=(...v)=>e(S)&&e(S)(...v))},[fe(T.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Rr)):de("",!0),q("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-right"]),onClick:P[3]||(P[3]=(...v)=>e(A)&&e(A)(...v))},[fe(T.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],2),q("div",null,pe(e(z)),1)],2),ne(Ka,{"selection-mode":"range",date:d.value,"min-date":e(R),"max-date":e(k),"range-state":e(E),"disabled-date":e(b),onChangerange:e(O),onPick:oe,onSelect:e(N)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}}),Vr=Ve({...et}),Fr=["pick","set-picker-option","calendar-change"],$r=({unlinkPanels:t,leftDate:s,rightDate:r})=>{const a=()=>{s.value=s.value.subtract(10,"year"),t.value||(r.value=r.value.subtract(10,"year"))},n=()=>{t.value||(s.value=s.value.add(10,"year")),r.value=r.value.add(10,"year")},i=()=>{s.value=s.value.add(10,"year")},l=()=>{r.value=r.value.subtract(10,"year")},b=$(()=>{const d=Math.floor(s.value.year()/10)*10;return`${d}-${d+9}`}),C=$(()=>{const d=Math.floor(r.value.year()/10)*10;return`${d}-${d+9}`}),x=$(()=>Math.floor(s.value.year()/10)*10+9),m=$(()=>Math.floor(r.value.year()/10)*10);return{leftPrevYear:a,rightNextYear:n,leftNextYear:i,rightPrevYear:l,leftLabel:b,rightLabel:C,leftYear:x,rightYear:m}},Ir=["onClick"],Tr=["disabled"],Or=["disabled"],ct="year",Ar=Oe({name:"DatePickerYearRange",__name:"panel-year-range",props:Vr,emits:Fr,setup(t,{emit:s}){const r=t,a=s,{lang:n}=Ne(G(ca)),i=G(H().locale(n.value)),l=G(i.value.add(10,"year")),{pickerNs:b}=He(Xa),C=Ee("date-range-picker"),x=$(()=>!!oe.length),m=$(()=>[b.b(),C.b(),{"has-sidebar":!!Za().sidebar||x.value}]),d=$(()=>({content:[b.e("content"),C.e("content"),"is-left"],arrowLeftBtn:[b.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[b.e("icon-btn"),{[b.is("disabled")]:!I.value},"d-arrow-right"]})),R=$(()=>({content:[b.e("content"),C.e("content"),"is-right"],arrowLeftBtn:[b.e("icon-btn"),{"is-disabled":!I.value},"d-arrow-left"],arrowRightBtn:[b.e("icon-btn"),"d-arrow-right"]})),k=Ot(n),{leftPrevYear:E,rightNextYear:D,leftNextYear:p,rightPrevYear:O,leftLabel:M,rightLabel:y,leftYear:N,rightYear:V}=$r({unlinkPanels:Ge(r,"unlinkPanels"),leftDate:i,rightDate:l}),I=$(()=>r.unlinkPanels&&V.value>N.value+1),A=G(),L=G(),S=G({endDate:null,selecting:!1}),Y=f=>{S.value=f},z=(f,F=!0)=>{const U=f.minDate,ae=f.maxDate;L.value===ae&&A.value===U||(a("calendar-change",[U.toDate(),ae&&ae.toDate()]),L.value=ae,A.value=U,ae?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[U?U.format(me.value):"",""]]),F&&w())},w=(f=!1)=>{ga([A.value,L.value])&&a("pick",[A.value,L.value],f)},te=f=>{S.value.selecting=f,f||(S.value.endDate=null)},X=He("EP_PICKER_BASE"),{shortcuts:oe,disabledDate:ie}=X.props,me=Ge(X.props,"format"),_=Ge(X.props,"defaultValue"),g=()=>{let f;const F=_.value;if(ge(F)){const U=H(F[0]);let ae=H(F[1]);return r.unlinkPanels||(ae=U.add(10,ct)),[U,ae]}else F?f=H(F):f=H();return f=f.locale(n.value),[f,f.add(10,ct)]};$e(()=>_.value,f=>{if(f){const F=g();i.value=F[0],l.value=F[1]}},{immediate:!0}),$e(()=>r.parsedValue,f=>{if(f&&f.length===2)if(A.value=f[0],L.value=f[1],i.value=A.value,r.unlinkPanels&&L.value){const F=A.value.year(),U=L.value.year();l.value=F===U?L.value.add(10,"year"):L.value}else l.value=i.value.add(10,"year");else{const F=g();A.value=void 0,L.value=void 0,i.value=F[0],l.value=F[1]}},{immediate:!0});const T=f=>ge(f)?f.map(F=>H(F,me.value).locale(n.value)):H(f,me.value).locale(n.value),P=f=>ge(f)?f.map(F=>F.format(me.value)):f.format(me.value),v=f=>ga(f)&&(ie?!ie(f[0].toDate())&&!ie(f[1].toDate()):!0),B=()=>{const f=g();i.value=f[0],l.value=f[1],L.value=void 0,A.value=void 0,a("pick",null)};return a("set-picker-option",["isValidValue",v]),a("set-picker-option",["parseUserInput",T]),a("set-picker-option",["formatToString",P]),a("set-picker-option",["handleClear",B]),(f,F)=>(j(),W("div",{class:h(m.value)},[q("div",{class:h(e(b).e("body-wrapper"))},[fe(f.$slots,"sidebar",{class:h(e(b).e("sidebar"))}),x.value?(j(),W("div",{key:0,class:h(e(b).e("sidebar"))},[(j(!0),W(Ce,null,Te(e(oe),(U,ae)=>(j(),W("button",{key:ae,type:"button",class:h(e(b).e("shortcut")),onClick:Pe=>e(k)(U)},pe(U.text),11,Ir))),128))],2)):de("",!0),q("div",{class:h(e(b).e("body"))},[q("div",{class:h(d.value.content)},[q("div",{class:h(e(C).e("header"))},[q("button",{type:"button",class:h(d.value.arrowLeftBtn),onClick:F[0]||(F[0]=(...U)=>e(E)&&e(E)(...U))},[fe(f.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],2),f.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!I.value,class:h(d.value.arrowRightBtn),onClick:F[1]||(F[1]=(...U)=>e(p)&&e(p)(...U))},[fe(f.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Tr)):de("",!0),q("div",null,pe(e(M)),1)],2),ne(za,{"selection-mode":"range",date:i.value,"min-date":A.value,"max-date":L.value,"range-state":S.value,"disabled-date":e(ie),onChangerange:Y,onPick:z,onSelect:te},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),q("div",{class:h(R.value.content)},[q("div",{class:h(e(C).e("header"))},[f.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!I.value,class:h(R.value.arrowLeftBtn),onClick:F[2]||(F[2]=(...U)=>e(O)&&e(O)(...U))},[fe(f.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Or)):de("",!0),q("button",{type:"button",class:h(R.value.arrowRightBtn),onClick:F[3]||(F[3]=(...U)=>e(D)&&e(D)(...U))},[fe(f.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],2),q("div",null,pe(e(y)),1)],2),ne(za,{"selection-mode":"range",date:l.value,"min-date":A.value,"max-date":L.value,"range-state":S.value,"disabled-date":e(ie),onChangerange:Y,onPick:z,onSelect:te},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}}),Lr=function(t){switch(t){case"daterange":case"datetimerange":return wr;case"monthrange":return Er;case"yearrange":return Ar;default:return pr}};H.extend(Mn);H.extend(Cn);H.extend(Pt);H.extend(En);H.extend(Fn);H.extend(In);H.extend(On);H.extend(Ln);const Yr=Oe({name:"GDatePicker",install:null,props:Yn,emits:["update:modelValue"],setup(t,{expose:s,emit:r,slots:a}){const n=Ee("picker-panel");Ia("ElPopperOptions",ea(Ge(t,"popperOptions"))),Ia(Xa,{slots:a,pickerNs:n});const i=G();s({focus:()=>{i.value?.focus()},blur:()=>{i.value?.blur()},handleOpen:()=>{i.value?.handleOpen()},handleClose:()=>{i.value?.handleClose()}});const b=C=>{r("update:modelValue",C)};return()=>{const C=t.format??(en[t.type]||an),x=Lr(t.type);return fa(fa(tn,{...t,format:C,type:t.type,ref:i,"onUpdate:modelValue":b},{default:m=>fa(x,{...m},{"prev-month":a["prev-month"],"next-month":a["next-month"],"prev-year":a["prev-year"],"next-year":a["next-year"]}),"range-separator":a["range-separator"]}))}}}),Nr=Dt(Yr),dt=["hours","minutes","seconds"],Br="HH:mm:ss",La=(t,s)=>[t>0?t-1:void 0,t,t<s?t+1:void 0],mt=function(t,s){const r=rt(t),a=rt(s);return r&&a?t.getTime()===s.getTime():!r&&!a?t===s:!1},pt=function(t,s){const r=ge(t),a=ge(s);return r&&a?t.length!==s.length?!1:t.every((n,i)=>mt(n,s[i])):!r&&!a?mt(t,s):!1},ft=function(t,s,r){const a=bt(s)||s==="x"?H(t).locale(r):H(t,s).locale(r);return a.isValid()?a:void 0},vt=function(t,s,r){return bt(s)?t:s==="x"?+t:H(t).locale(r).format(s)},Ya=(t,s)=>{const r=[],a=s?.();for(let n=0;n<t;n++)r.push(a?.includes(n)??!1);return r},Ca=t=>ge(t)?t.map(s=>s.toDate()):t.toDate(),Lt=Ve({disabledHours:{type:ue(Function)},disabledMinutes:{type:ue(Function)},disabledSeconds:{type:ue(Function)}}),Yt=Ve({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Nt=Ve({id:{type:ue([Array,String])},name:{type:ue([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:ue([String,Object,Boolean]),default:!0},editable:{type:Boolean,default:!0},prefixIcon:{type:ue(String),default:""},readonly:Boolean,disabled:Boolean,label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},popperOptions:{type:ue(Object),default:()=>({})},modelValue:{type:ue([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:ue([Date,Array])},defaultTime:{type:ue([Date,Array])},isRange:Boolean,...Lt,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:ue([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:ue(String),values:cn,default:"bottom"},fallbackPlacements:{type:ue(Array),default:["bottom","top","right","left"]},...nn,...rn(["ariaLabel"]),showNow:{type:Boolean,default:!0}}),_r=Ve({id:{type:ue(Array)},name:{type:ue(Array)},modelValue:{type:ue([Array,String])},startPlaceholder:String,endPlaceholder:String,label:String}),jr=["id","name","placeholder","value"],qr=["id","name","placeholder","value"],Gr=Oe({name:"PickerRangeTrigger",inheritAttrs:!1,__name:"picker-range-trigger",props:_r,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(t,{expose:s,emit:r}){const a=t,n=r,i=gn(),l=Ee("input"),b=Ee("date"),C=Ee("range"),x=G(void 0),m=G(null),d=G(),R=G(),{wrapperRef:k,isFocused:E}=xt(d),D=w=>{n("click",w)},p=w=>{n("mouseenter",w)},O=w=>{n("mouseleave",w)},M=w=>{n("mouseenter",w)},y=w=>{n("startInput",w)},N=w=>{n("endInput",w)},V=w=>{n("startChange",w)},I=w=>{n("endChange",w)},A=()=>{d.value?.focus()},L=()=>{d.value?.blur(),R.value?.blur()},S=$(()=>{const w=!!Y.value||E.value;return{left:w?void 0:`calc(${x.value} + 16px)`,zIndex:w?void 0:10}}),Y=$(()=>St(a.modelValue)?"":String(a.modelValue));return wt(m,()=>{requestAnimationFrame(()=>{const w=m.value?.getBoundingClientRect().width;x.value=`${w}px`})}),s({focus:A,blur:L}),(w,te)=>(j(),W("div",{ref_key:"wrapperRef",ref:k,class:h([e(b).is("active",e(E)),w.$attrs.class]),style:Da(w.$attrs.style),onClick:D,onMouseenter:p,onMouseleave:O,onTouchstartPassive:M},[fe(w.$slots,"prefix"),w.modelValue?(j(),W("div",{key:0,class:h([e(l).e("label")]),style:Da(S.value)},pe(w.label),7)):de("",!0),q("input",_a(e(i),{id:w.id&&w.id[0],ref_key:"inputRef",ref:d,name:w.name&&w.name[0],placeholder:w.startPlaceholder,value:w.modelValue&&w.modelValue[0],class:e(C).b("input"),onInput:y,onChange:V}),null,16,jr),fe(w.$slots,"range-separator"),q("input",_a(e(i),{id:w.id&&w.id[1],ref_key:"endInputRef",ref:R,name:w.name&&w.name[1],placeholder:w.endPlaceholder,value:w.modelValue&&w.modelValue[1],class:e(C).b("input"),onInput:N,onChange:I}),null,16,qr),fe(w.$slots,"suffix")],38))}}),Hr=Oe({name:"Picker",__name:"picker",props:Nt,emits:["update:modelValue","change","focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(t,{expose:s,emit:r}){const a=t,n=r,i=Ja(),{lang:l}=Ne(),b=Ee("date"),C=Ee("input"),x=Ee("range"),m=G(void 0),d=G(null),{form:R,formItem:k}=bn(),E=He("ElPopperOptions",{}),{valueOnClear:D}=on(a,null),p=G(),O=G(),M=G(!1),y=G(!1),N=G(null);let V=!1;const{isFocused:I,handleFocus:A,handleBlur:L}=xt(O,{beforeFocus(){return a.readonly||F.value},afterFocus(){M.value=!0},beforeBlur(u){return!V&&p.value?.isFocusInsideContent(u)},afterBlur(){Xe(),M.value=!1,V=!1,a.validateEvent&&k?.validate("blur").catch(u=>ot())}}),S=$(()=>{const u=!!Y.value||I.value;return{left:u?void 0:`calc(${m.value} + 16px)`,zIndex:u?void 0:10}}),Y=$(()=>St(a.modelValue)?"":String(a.modelValue)),z=()=>{if(!a.prefixIcon){m.value="0";return}requestAnimationFrame(()=>{const u=d.value?.getBoundingClientRect().width;m.value=`${u}px`})},w=$(()=>[b.b("editor"),b.bm("editor",a.type),C.e("wrapper"),b.is("disabled",F.value),b.is("active",M.value),x.b("editor"),i.class]),te=$(()=>[C.e("icon"),x.e("close-icon"),le.value?"":x.e("close-icon--hidden")]);$e(M,u=>{u?_e(()=>{u&&(N.value=a.modelValue)}):(se.value=null,c.value.intermediateValue=null,_e(()=>{X(a.modelValue)}))});const X=(u,ee)=>{(ee||!pt(u,N.value))&&(n("change",u),a.validateEvent&&k?.validate("change").catch(De=>ot()))},oe=u=>{if(!pt(a.modelValue,u)){let ee;ge(u)?ee=u.map(De=>vt(De,a.valueFormat,l.value)):u&&(ee=vt(u,a.valueFormat,l.value)),n("update:modelValue",u&&ee,l.value)}},ie=u=>{n("keydown",u)},me=$(()=>O.value?Array.from(O.value.$el.querySelectorAll("input")):[]),_=(u,ee,De)=>{const Re=me.value;Re.length&&(!De||De==="min"?(Re[0].setSelectionRange(u,ee),Re[0].focus()):De==="max"&&(Re[1].setSelectionRange(u,ee),Re[1].focus()))},g=(u="",ee=!1)=>{M.value=ee;let De;ge(u)?De=u.map(Re=>Re.toDate()):De=u&&u.toDate(),se.value=null,c.value.intermediateValue=null,oe(De)},T=()=>{y.value=!0},P=()=>{n("visible-change",!0)},v=()=>{y.value=!1,M.value=!1,n("visible-change",!1)},B=()=>{M.value=!0},f=()=>{M.value=!1},F=$(()=>a.disabled||R?.disabled),U=$(()=>{let u;if(ce.value?c.value.getDefaultValue&&(u=c.value.getDefaultValue()):ge(a.modelValue)?u=a.modelValue.map(ee=>ft(ee,a.valueFormat,l.value)):u=ft(a.modelValue,a.valueFormat,l.value),c.value.getRangeAvailableTime){const ee=c.value.getRangeAvailableTime(u);yn(ee,u)||(u=ee,ce.value||oe(Ca(u)))}return ge(u)&&u.some(ee=>!ee)&&(u=[]),u}),ae=$(()=>{if(!c.value.panelReady)return"";const u=na(U.value);if(ge(se.value))return[se.value[0]||u&&u[0]||"",se.value[1]||u&&u[1]||""];if(se.value!==null)return se.value;const ee=c.value.intermediateValue;return ee&&Ue.value&&M.value?ee:!Ie.value&&ce.value||!M.value&&ce.value?"":u?je.value||J.value||Z.value?u.join(", "):u:""}),Pe=$(()=>a.type.includes("time")),Ie=$(()=>a.type.startsWith("time")),je=$(()=>a.type==="dates"),J=$(()=>a.type==="months"),Z=$(()=>a.type==="years"),re=$(()=>a.prefixIcon||(Pe.value?"regular clock":"regular calendar")),le=G(!1),be=u=>{a.readonly||F.value||(le.value&&(u.stopPropagation(),c.value.handleClear?c.value.handleClear():oe(D.value),X(D.value,!0),le.value=!1,v()),n("clear"))},ce=$(()=>{const{modelValue:u}=a;return!u||ge(u)&&!u.filter(Boolean).length}),ye=async u=>{a.readonly||F.value||(u.target?.tagName!=="INPUT"||I.value)&&(M.value=!0)},we=()=>{a.readonly||F.value||!ce.value&&a.clearable&&(le.value=!0)},Me=()=>{le.value=!1},Fe=u=>{a.readonly||F.value||(u.touches[0].target?.tagName!=="INPUT"||I.value)&&(M.value=!0)},Ue=$(()=>a.type.includes("range")),ba=$(()=>e(p)?.popperRef?.contentRef),da=fn(O,u=>{const ee=e(ba),De=vn(O);ee&&(u.target===ee||u.composedPath().includes(ee))||u.target===De||De&&u.composedPath().includes(De)||(M.value=!1)});Ut(()=>{da?.()});const se=G(null);wt(d,z);const Xe=()=>{if(se.value){const u=Je(ae.value);u&&Ke(u)&&(oe(Ca(u)),se.value=null)}se.value===""&&(oe(D.value),X(D.value),se.value=null)},Je=u=>u?c.value.parseUserInput(u):null,na=u=>u?c.value.formatToString(u):null,Ke=u=>c.value.isValidValue(u),qe=async u=>{if(a.readonly||F.value)return;const{code:ee}=u;if(ie(u),ee===Se.esc){M.value===!0&&(M.value=!1,u.preventDefault(),u.stopPropagation());return}if(ee===Se.down&&(c.value.handleFocusPicker&&(u.preventDefault(),u.stopPropagation()),M.value===!1&&(M.value=!0,await _e()),c.value.handleFocusPicker)){c.value.handleFocusPicker();return}if(ee===Se.tab){V=!0;return}if(ee===Se.enter||ee===Se.numpadEnter){(se.value===null||se.value===""||Ke(Je(ae.value)))&&(Xe(),M.value=!1),u.stopPropagation();return}if(se.value){u.stopPropagation();return}c.value.handleKeydownInput&&c.value.handleKeydownInput(u)},ha=u=>{se.value=u,M.value||(M.value=!0)},ya=u=>{const ee=u.target;se.value?se.value=[ee.value,se.value[1]]:se.value=[ee.value,null]},ma=u=>{const ee=u.target;se.value?se.value=[se.value[0],ee.value]:se.value=[null,ee.value]},K=()=>{const u=se.value,ee=Je(u&&u[0]),De=e(U);if(ee&&ee.isValid()){se.value=[na(ee),ae.value?.[1]||null];const Re=[ee,De&&(De[1]||null)];Ke(Re)&&(oe(Ca(Re)),se.value=null)}},o=()=>{const u=e(se),ee=Je(u&&u[1]),De=e(U);if(ee&&ee.isValid()){se.value=[e(ae)?.[0]||null,na(ee)];const Re=[De&&De[0],ee];Ke(Re)&&(oe(Ca(Re)),se.value=null)}},c=G({}),Q=u=>{c.value[u[0]]=u[1],c.value.panelReady=!0},ke=u=>{n("calendar-change",u)},xe=(u,ee,De)=>{n("panel-change",u,ee,De)},ra=()=>{O.value?.focus()},ka=()=>{O.value?.blur()};return Ia("EP_PICKER_BASE",{props:a}),s({focus:ra,blur:ka,handleOpen:B,handleClose:f,onPick:g}),(u,ee)=>(j(),Le(e(dn),_a({ref_key:"refPopper",ref:p,visible:M.value,pure:"",trigger:"click"},u.$attrs,{role:"dialog",teleported:"",transition:`${e(b).namespace.value}-zoom-in-top`,"popper-class":[`${e(b).namespace.value}-picker__popper`],"popper-options":e(E),"fallback-placements":u.fallbackPlacements,"gpu-acceleration":!1,placement:u.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:T,onShow:P,onHide:v}),{default:Be(()=>[Ue.value?(j(),Le(Gr,{key:1,id:u.id,ref_key:"inputRef",ref:O,"model-value":ae.value,name:u.name,disabled:F.value,readonly:!u.editable||u.readonly,label:u.label,"start-placeholder":u.startPlaceholder,"end-placeholder":u.endPlaceholder,class:h(w.value),style:Da(u.$attrs.style),"aria-label":u.ariaLabel,tabindex:u.tabindex,autocomplete:"off",role:"combobox",onClick:ye,onFocus:e(A),onBlur:e(L),onStartInput:ya,onStartChange:K,onEndInput:ma,onEndChange:o,onMousedown:ye,onMouseenter:we,onMouseleave:Me,onTouchstartPassive:Fe,onKeydown:qe},{prefix:Be(()=>[re.value?(j(),Le(e(he),{key:0,class:h([e(C).e("icon"),e(x).e("icon")]),name:re.value},null,8,["class","name"])):de("",!0)]),"range-separator":Be(()=>[fe(u.$slots,"range-separator",{},()=>[q("span",{class:h(e(x).b("separator"))},pe(u.rangeSeparator),3)])]),suffix:Be(()=>[u.clearIcon?(j(),Le(e(he),{key:0,class:h(te.value),onMousedown:We(e(lt),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):de("",!0)]),_:3},8,["id","model-value","name","disabled","readonly","label","start-placeholder","end-placeholder","class","style","aria-label","tabindex","onFocus","onBlur"])):(j(),Le(e(oa),{key:0,id:u.id,ref_key:"inputRef",ref:O,"container-role":"combobox","model-value":ae.value,name:u.name,disabled:F.value,label:u.label,class:h([e(b).b("editor"),e(b).bm("editor",u.type),u.$attrs.class]),style:Da(u.$attrs.style),readonly:!u.editable||u.readonly||je.value||J.value||Z.value||u.type==="week","aria-label":u.ariaLabel,tabindex:u.tabindex,"validate-event":!1,helpText:u.helpText,messageError:u.messageError,onInput:ha,onFocus:e(A),onBlur:e(L),onKeydown:qe,onChange:Xe,onMousedown:ye,onMouseenter:we,onMouseleave:Me,onTouchstartPassive:Fe,onClick:ee[0]||(ee[0]=We(()=>{},["stop"]))},{prefix:Be(()=>[re.value?(j(),Le(e(he),{key:0,class:h([e(C).e("icon"),"pr-2"]),onMousedown:We(ye,["prevent"]),onTouchstartPassive:Fe,name:re.value},null,8,["class","name"])):de("",!0)]),suffix:Be(()=>[le.value&&u.clearIcon?(j(),Le(e(he),{key:0,class:h(`${e(C).e("icon")} clear-icon`),onMousedown:We(e(lt),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):de("",!0)]),default:Be(()=>[q("span",null,pe(u.label),1),u.label?(j(),W("div",{key:0,class:h([e(C).e("label")]),style:Da(S.value)},pe(u.label),7)):de("",!0)]),_:1},8,["id","model-value","name","disabled","label","class","style","readonly","aria-label","tabindex","helpText","messageError","onFocus","onBlur"]))]),content:Be(()=>[fe(u.$slots,"default",{visible:M.value,actualVisible:y.value,parsedValue:U.value,format:u.format,dateFormat:u.dateFormat,timeFormat:u.timeFormat,unlinkPanels:u.unlinkPanels,type:u.type,defaultValue:u.defaultValue,showNow:u.showNow,onPick:g,onSelectRange:_,onSetPickerOption:Q,onCalendarChange:ke,onPanelChange:xe,onMousedown:ee[1]||(ee[1]=We(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options","fallback-placements","placement"]))}}),Ur=Ve({...Yt,datetimeRole:String,parsedValue:{type:ue(Object)}}),Bt=({getAvailableHours:t,getAvailableMinutes:s,getAvailableSeconds:r})=>{const a=(l,b,C,x)=>{const m={hour:t,minute:s,second:r};let d=l;return["hour","minute","second"].forEach(R=>{if(m[R]){let k;const E=m[R];switch(R){case"minute":{k=E(d.hour(),b,x);break}case"second":{k=E(d.hour(),d.minute(),b,x);break}default:{k=E(b,x);break}}if(k?.length&&!k.includes(d[R]())){const D=C?0:k.length-1;d=d[R](k[D])}}}),d},n={};return{timePickerOptions:n,getAvailableTime:a,onSetOption:([l,b])=>{n[l]=b}}},Na=t=>{const s=(a,n)=>a||n,r=a=>a!==!0;return t.map(s).filter(r)},_t=(t,s,r)=>({getHoursList:(l,b)=>Ya(24,t&&(()=>t?.(l,b))),getMinutesList:(l,b,C)=>Ya(60,s&&(()=>s?.(l,b,C))),getSecondsList:(l,b,C,x)=>Ya(60,r&&(()=>r?.(l,b,C,x)))}),jt=(t,s,r)=>{const{getHoursList:a,getMinutesList:n,getSecondsList:i}=_t(t,s,r);return{getAvailableHours:(x,m)=>Na(a(x,m)),getAvailableMinutes:(x,m,d)=>Na(n(x,m,d)),getAvailableSeconds:(x,m,d,R)=>Na(i(x,m,d,R))}},qt=t=>{const s=G(t.parsedValue);return $e(()=>t.visible,r=>{r||(s.value=t.parsedValue)}),s},Kr=Ve({role:{type:String,required:!0},spinnerDate:{type:ue(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:ue(String),default:""},...Lt}),zr=["onClick"],Wr=["onMouseenter"],Wa=Oe({__name:"basic-time-spinner",props:Kr,emits:["change","select-range","set-option"],setup(t,{emit:s}){const r=t,a=He("EP_PICKER_BASE"),{isRange:n}=a.props,i=s,l=Ee("time"),{getHoursList:b,getMinutesList:C,getSecondsList:x}=_t(r.disabledHours,r.disabledMinutes,r.disabledSeconds);let m=!1;const d=G(),R=G(),k=G(),E=G(),D={hours:R,minutes:k,seconds:E},p=$(()=>r.showSeconds?dt:dt.slice(0,2)),O=$(()=>{const{spinnerDate:v}=r,B=v.hour(),f=v.minute(),F=v.second();return{hours:B,minutes:f,seconds:F}}),M=$(()=>{const{hours:v,minutes:B}=e(O),{role:f,spinnerDate:F}=r,U=n?void 0:F;return{hours:b(f,U),minutes:C(v,f,U),seconds:x(v,B,f,U)}}),y=$(()=>{const{hours:v,minutes:B,seconds:f}=e(O);return{hours:La(v,23),minutes:La(B,59),seconds:La(f,59)}}),N=Dn(v=>{m=!1,A(v)},200),V=v=>{if(!!!r.amPmMode)return"";const f=r.amPmMode==="A";let F=v<12?" am":" pm";return f&&(F=F.toUpperCase()),F},I=v=>{let B;switch(v){case"hours":B=[0,2];break;case"minutes":B=[3,5];break;case"seconds":B=[6,8];break}const[f,F]=B;i("select-range",f,F),d.value=v},A=v=>{Y(v,e(O)[v])},L=()=>{A("hours"),A("minutes"),A("seconds")},S=v=>v.querySelector(`.${l.namespace.value}-scrollbar__wrap`),Y=(v,B)=>{if(r.arrowControl)return;const f=e(D[v]);f&&f.$el&&(S(f.$el).scrollTop=Math.max(0,B*z(v)))},z=v=>{const f=e(D[v])?.$el.querySelector("li");return f&&Number.parseFloat(ln(f,"height"))||0},w=()=>{X(1)},te=()=>{X(-1)},X=v=>{d.value||I("hours");const B=d.value,f=e(O)[B],F=d.value==="hours"?24:60,U=oe(B,f,v,F);ie(B,U),Y(B,U),_e(()=>I(B))},oe=(v,B,f,F)=>{let U=(B+f+F)%F;const ae=e(M)[v];for(;ae[U]&&U!==B;)U=(U+f+F)%F;return U},ie=(v,B)=>{if(e(M)[v][B])return;const{hours:U,minutes:ae,seconds:Pe}=e(O);let Ie;switch(v){case"hours":Ie=r.spinnerDate.hour(B).minute(ae).second(Pe);break;case"minutes":Ie=r.spinnerDate.hour(U).minute(B).second(Pe);break;case"seconds":Ie=r.spinnerDate.hour(U).minute(ae).second(B);break}i("change",Ie)},me=(v,{value:B,disabled:f})=>{f||(ie(v,B),I(v),Y(v,B))},_=v=>{const B=e(D[v]);if(!B)return;m=!0,N(v);const f=Math.min(Math.round((S(B.$el).scrollTop-(g(v)*.5-10)/z(v)+3)/z(v)),v==="hours"?23:59);ie(v,f)},g=v=>e(D[v]).$el.offsetHeight,T=()=>{const v=B=>{const f=e(D[B]);f&&f.$el&&(S(f.$el).onscroll=()=>{_(B)})};v("hours"),v("minutes"),v("seconds")};Kt(()=>{_e(()=>{!r.arrowControl&&T(),L(),r.role==="start"&&I("hours")})});const P=(v,B)=>{D[B].value=v??void 0};return i("set-option",[`${r.role}_scrollDown`,X]),i("set-option",[`${r.role}_emitSelectRange`,I]),$e(()=>r.spinnerDate,()=>{m||L()}),(v,B)=>(j(),W("div",{class:h([e(l).b("spinner"),{"has-seconds":v.showSeconds}])},[v.arrowControl?de("",!0):(j(!0),W(Ce,{key:0},Te(p.value,f=>(j(),Le(e(kn),{key:f,ref_for:!0,ref:F=>P(F,f),class:h(e(l).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":e(l).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:F=>I(f),onMousemove:F=>A(f)},{default:Be(()=>[(j(!0),W(Ce,null,Te(M.value[f],(F,U)=>(j(),W("li",{key:U,class:h([e(l).be("spinner","item"),e(l).is("active",U===O.value[f]),e(l).is("disabled",F)]),onClick:ae=>me(f,{value:U,disabled:F})},[f==="hours"?(j(),W(Ce,{key:0},[pa(pe(("0"+(v.amPmMode?U%12||12:U)).slice(-2))+pe(V(U)),1)],64)):(j(),W(Ce,{key:1},[pa(pe(("0"+U).slice(-2)),1)],64))],10,zr))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),v.arrowControl?(j(!0),W(Ce,{key:1},Te(p.value,f=>(j(),W("div",{key:f,class:h([e(l).be("spinner","wrapper"),e(l).is("arrow")]),onMouseenter:F=>I(f)},[Ae(ne(e(he),{name:"regular chevron-up"},null,512),[[e(ut),te]]),Ae(ne(e(he),{name:"regular chevron-down"},null,512),[[e(ut),w]]),q("ul",{class:h(e(l).be("spinner","list"))},[(j(!0),W(Ce,null,Te(y.value[f],(F,U)=>(j(),W("li",{key:U,class:h([e(l).be("spinner","item"),e(l).is("active",F===O.value[f]),e(l).is("disabled",M.value[f][F])])},[e(sn)(F)?(j(),W(Ce,{key:0},[f==="hours"?(j(),W(Ce,{key:0},[pa(pe(("0"+(v.amPmMode?F%12||12:F)).slice(-2))+pe(V(F)),1)],64)):(j(),W(Ce,{key:1},[pa(pe(("0"+F).slice(-2)),1)],64))],64)):de("",!0)],2))),128))],2)],42,Wr))),128)):de("",!0)],2))}}),Jr=Oe({__name:"panel-time-pick",props:Ur,emits:["pick","select-range","set-picker-option"],setup(t,{emit:s}){const r=t,a=s,n=He("EP_PICKER_BASE"),{arrowControl:i,disabledHours:l,disabledMinutes:b,disabledSeconds:C,defaultValue:x}=n.props,{getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:R}=jt(l,b,C),k=Ee("time"),{lang:E}=Ne(),D=G([0,2]),p=qt(r),O=$(()=>hn(r.actualVisible)?`${k.namespace.value}-zoom-in-top`:""),M=$(()=>r.format.includes("ss")),y=$(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),N=_=>{const g=H(_).locale(E.value),T=X(g);return g.isSame(T)},V=()=>{a("pick",p.value,!1)},I=(_=!1,g=!1)=>{g||a("pick",r.parsedValue,_)},A=_=>{if(!r.visible)return;const g=X(_).millisecond(0);a("pick",g,!0)},L=(_,g)=>{a("select-range",_,g),D.value=[_,g]},S=_=>{const g=[0,3].concat(M.value?[6]:[]),T=["hours","minutes"].concat(M.value?["seconds"]:[]),v=(g.indexOf(D.value[0])+_+g.length)%g.length;z.start_emitSelectRange(T[v])},Y=_=>{const g=_.code,{left:T,right:P,up:v,down:B}=Se;if([T,P].includes(g)){S(g===T?-1:1),_.preventDefault();return}if([v,B].includes(g)){const f=g===v?-1:1;z.start_scrollDown(f),_.preventDefault();return}},{timePickerOptions:z,onSetOption:w,getAvailableTime:te}=Bt({getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:R}),X=_=>te(_,r.datetimeRole||"",!0),oe=_=>_?H(_,r.format).locale(E.value):null,ie=_=>_?_.format(r.format):null,me=()=>H(x).locale(E.value);return a("set-picker-option",["isValidValue",N]),a("set-picker-option",["formatToString",ie]),a("set-picker-option",["parseUserInput",oe]),a("set-picker-option",["handleKeydownInput",Y]),a("set-picker-option",["getRangeAvailableTime",X]),a("set-picker-option",["getDefaultValue",me]),(_,g)=>(j(),Le(zt,{name:O.value},{default:Be(()=>[_.actualVisible||_.visible?(j(),W("div",{key:0,class:h(e(k).b("panel"))},[q("div",{class:h([e(k).be("panel","content"),{"has-seconds":M.value}])},[ne(Wa,{ref:"spinner",role:_.datetimeRole||"start","arrow-control":e(i),"show-seconds":M.value,"am-pm-mode":y.value,"spinner-date":_.parsedValue,"disabled-hours":e(l),"disabled-minutes":e(b),"disabled-seconds":e(C),onChange:A,onSetOption:e(w),onSelectRange:L},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),q("div",{class:h(e(k).be("panel","footer"))},[q("button",{type:"button",class:h([e(k).be("panel","btn"),"cancel"]),onClick:V}," Cancelar ",2),q("button",{type:"button",class:h([e(k).be("panel","btn"),"confirm"]),onClick:g[0]||(g[0]=T=>I())}," Ok ",2)],2)],2)):de("",!0)]),_:1},8,["name"]))}}),Zr=Ve({...Yt,parsedValue:{type:ue(Array)}}),Xr=["disabled"],Qr=Oe({__name:"panel-time-range",props:Zr,emits:["pick","select-range","set-picker-option"],setup(t,{emit:s}){const r=t,a=s,n=(J,Z)=>{const re=[];for(let le=J;le<=Z;le++)re.push(le);return re},{lang:i}=Ne(),l=Ee("time"),b=Ee("picker"),C=He("EP_PICKER_BASE"),{arrowControl:x,disabledHours:m,disabledMinutes:d,disabledSeconds:R,defaultValue:k}=C.props,E=$(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",x),N.value?"has-seconds":""]),D=$(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",x),N.value?"has-seconds":""]),p=$(()=>r.parsedValue[0]),O=$(()=>r.parsedValue[1]),M=qt(r),y=()=>{a("pick",M.value,!1)},N=$(()=>r.format.includes("ss")),V=$(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),I=(J=!1)=>{a("pick",[p.value,O.value],J)},A=J=>{Y(J.millisecond(0),O.value)},L=J=>{Y(p.value,J.millisecond(0))},S=J=>{const Z=J.map(le=>H(le).locale(i.value)),re=P(Z);return Z[0].isSame(re[0])&&Z[1].isSame(re[1])},Y=(J,Z)=>{r.visible&&a("pick",[J,Z],!0)},z=$(()=>p.value>O.value),w=G([0,2]),te=(J,Z)=>{a("select-range",J,Z,"min"),w.value=[J,Z]},X=$(()=>N.value?11:8),oe=(J,Z)=>{a("select-range",J,Z,"max");const re=e(X);w.value=[J+re,Z+re]},ie=J=>{const Z=N.value?[0,3,6,11,14,17]:[0,3,8,11],re=["hours","minutes"].concat(N.value?["seconds"]:[]),be=(Z.indexOf(w.value[0])+J+Z.length)%Z.length,ce=Z.length/2;be<ce?F.start_emitSelectRange(re[be]):F.end_emitSelectRange(re[be-ce])},me=J=>{const Z=J.code,{left:re,right:le,up:be,down:ce}=Se;if([re,le].includes(Z)){ie(Z===re?-1:1),J.preventDefault();return}if([be,ce].includes(Z)){const ye=Z===be?-1:1,we=w.value[0]<X.value?"start":"end";F[`${we}_scrollDown`](ye),J.preventDefault();return}},_=(J,Z)=>{const re=m?m(J):[],le=J==="start",ce=(Z||(le?O.value:p.value)).hour(),ye=le?n(ce+1,23):n(0,ce-1);return Aa(re,ye)},g=(J,Z,re)=>{const le=d?d(J,Z):[],be=Z==="start",ce=re||(be?O.value:p.value),ye=ce.hour();if(J!==ye)return le;const we=ce.minute(),Me=be?n(we+1,59):n(0,we-1);return Aa(le,Me)},T=(J,Z,re,le)=>{const be=R?R(J,Z,re):[],ce=re==="start",ye=le||(ce?O.value:p.value),we=ye.hour(),Me=ye.minute();if(J!==we||Z!==Me)return be;const Fe=ye.second(),Ue=ce?n(Fe+1,59):n(0,Fe-1);return Aa(be,Ue)},P=([J,Z])=>[U(J,"start",!0,Z),U(Z,"end",!1,J)],{getAvailableHours:v,getAvailableMinutes:B,getAvailableSeconds:f}=jt(_,g,T),{timePickerOptions:F,getAvailableTime:U,onSetOption:ae}=Bt({getAvailableHours:v,getAvailableMinutes:B,getAvailableSeconds:f}),Pe=J=>J?ge(J)?J.map(Z=>H(Z,r.format).locale(i.value)):H(J,r.format).locale(i.value):null,Ie=J=>J?ge(J)?J.map(Z=>Z.format(r.format)):J.format(r.format):null,je=()=>{if(ge(k))return k.map(Z=>H(Z).locale(i.value));const J=H(k).locale(i.value);return[J,J.add(60,"m")]};return a("set-picker-option",["formatToString",Ie]),a("set-picker-option",["parseUserInput",Pe]),a("set-picker-option",["isValidValue",S]),a("set-picker-option",["handleKeydownInput",me]),a("set-picker-option",["getDefaultValue",je]),a("set-picker-option",["getRangeAvailableTime",P]),(J,Z)=>J.actualVisible?(j(),W("div",{key:0,class:h([e(l).b("range-picker"),e(b).b("panel")])},[q("div",{class:h(e(l).be("range-picker","content"))},[q("div",{class:h(e(l).be("range-picker","cell"))},[q("div",{class:h(e(l).be("range-picker","header"))},"Inicio",2),q("div",{class:h(E.value)},[ne(Wa,{ref:"minSpinner",role:"start","show-seconds":N.value,"am-pm-mode":V.value,"arrow-control":e(x),"spinner-date":p.value,"disabled-hours":_,"disabled-minutes":g,"disabled-seconds":T,onChange:A,onSetOption:e(ae),onSelectRange:te},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),q("div",{class:h(e(l).be("range-picker","cell"))},[q("div",{class:h(e(l).be("range-picker","header"))},"Fin",2),q("div",{class:h(D.value)},[ne(Wa,{ref:"maxSpinner",role:"end","show-seconds":N.value,"am-pm-mode":V.value,"arrow-control":e(x),"spinner-date":O.value,"disabled-hours":_,"disabled-minutes":g,"disabled-seconds":T,onChange:L,onSetOption:e(ae),onSelectRange:oe},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),q("div",{class:h(e(l).be("panel","footer"))},[q("button",{type:"button",class:h([e(l).be("panel","btn"),"cancel"]),onClick:Z[0]||(Z[0]=re=>y())}," Cancelar ",2),q("button",{type:"button",class:h([e(l).be("panel","btn"),"confirm"]),disabled:z.value,onClick:Z[1]||(Z[1]=re=>I())}," Ok ",10,Xr)],2)],2)):de("",!0)}});H.extend(Pt);const eo=Oe({name:"GTimePicker",install:null,props:{...Nt,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,s){const r=G(),[a,n]=t.isRange?["timerange",Qr]:["time",Jr],i=l=>s.emit("update:modelValue",l);return Ia("ElPopperOptions",t.popperOptions),s.expose({focus:()=>{r.value?.focus()},blur:()=>{r.value?.blur()},handleOpen:()=>{r.value?.handleOpen()},handleClose:()=>{r.value?.handleClose()}}),()=>{const l=t.format??Br;return fa(fa(Hr,{...t,ref:r,type:a,format:l,"onUpdate:modelValue":i},{default:b=>fa(n,{...b})}))}}}),ao=Dt(eo),Uo={title:"Form/Form",component:aa,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
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
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},Pa={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua,GSelect:Wt,GRadio:Jt,GCheckbox:Zt,GSegmented:st,GDatePicker:Nr,GTimePicker:ao},setup(){const t=G(),s=ea({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1,preferredContact:"",birthDate:"",appointmentDate:"",appointmentTime:""}),r=[{label:"Email",value:"email"},{label:"Teléfono",value:"phone"},{label:"WhatsApp",value:"whatsapp"}],a=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],n={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},i=$(()=>s.country?n[s.country]||[]:[]);$e(()=>s.country,()=>{s.city=""});const l=d=>d.getTime()>Date.now(),b=d=>d.getTime()<Date.now(),C={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(d,R,k)=>{R===!0?k():k(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}],preferredContact:[{validator:(d,R,k)=>{R||k(new Error("Debe seleccionar un método de contacto preferido")),k()},type:"boolean",trigger:"change"}],birthDate:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:"change"}],appointmentDate:[{required:!0,message:"La fecha de cita es requerida",trigger:"change"}],appointmentTime:[{required:!0,message:"La hora de cita es requerida",trigger:"change"}]};async function x(){if(t.value)try{await t.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",s)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(d){console.error("Validation error:",d)}}function m(){t.value&&t.value.resetFields()}return{formRef:t,formData:s,countries:a,availableCities:i,rules:C,contactOptions:r,disableFutureDates:l,disablePastDates:b,GSegmented:st,handleSubmit:x,handleReset:m}},template:`
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
    `})},Ma={name:"Básico",parameters:{docs:{description:{story:"Ejemplo básico del formulario con validaciones."}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){const t=G(),s=ea({nombre:"",email:""}),r={nombre:[{required:!0,message:"El nombre es requerido",trigger:"blur"},{min:3,message:"Mínimo 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El email es requerido",trigger:"blur"},{type:"email",message:"Email inválido",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((i,l)=>{i?console.log("submit!",l):console.log("error submit!"+l)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:s,rules:r,handleSubmit:a,handleReset:n}},template:`
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

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){const t=G(),s=ea({pass:"",checkPass:"",age:""}),i={pass:[{validator:(C,x,m)=>{x===""?m(new Error("Ingrese una contraseña")):(s.checkPass!==""&&t.value?.validateField("checkPass"),m())},trigger:"blur"}],checkPass:[{validator:(C,x,m)=>{x===""?m(new Error("Confirme su contraseña")):x!==s.pass?m(new Error("Las contraseñas no coinciden")):m()},trigger:"blur"}],age:[{validator:(C,x,m)=>{if(!x)return m(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(x))?Number(x)<18?m(new Error("La edad debe ser mayor a 18")):m():m(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function l(){t.value&&await t.value.validate((C,x)=>{C?console.log("submit!",s):console.log("error submit!",x)})}async function b(){t.value&&t.value.resetFields()}return{formRef:t,formData:s,rules:i,handleSubmit:l,handleReset:b}},template:`
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
    `})},Ea={name:"Tipo de ejecución",parameters:{docs:{description:{story:`La validación de campos puede realizarse de dos formas:

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

En este ejemplo, el email se valida en tiempo real mientras el usuario escribe, mientras que la contraseña se valida cuando el campo pierde el foco.`}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){const t=G(),s=ea({email:"",password:""}),r={email:[{required:!0,message:"El email es requerido",trigger:"change"},{type:"email",message:"Ingrese un email válido",trigger:"change"}],password:[{required:!0,message:"La contraseña es requerida",trigger:"blur"},{min:6,message:"La contraseña debe tener al menos 6 caracteres",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((i,l)=>{i?console.log("submit!",l):console.log("error submit!"+l)})}async function n(){t.value&&t.value.resetFields()}return{formRef:t,formData:s,rules:r,handleSubmit:a,handleReset:n}},template:`
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
    `})},Va={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){return{formData:ea({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
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
    `})},Fa={name:"Prevenir Submit",parameters:{docs:{description:{story:`Por comportamiento nativo de HTML, cuando un formulario tiene un solo input, al presionar Enter se dispara automáticamente el evento submit. Se recomienda usar @submit.prevent para controlar este comportamiento.

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
`}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){const t=G(),s=ea({usuario:"",clave:""}),r={usuario:[{required:!0,message:"El usuario es requerido",trigger:"blur"}],clave:[{required:!0,message:"La clave es requerida",trigger:"blur"}]};async function a(){t.value&&await t.value.validate((n,i)=>{n?alert("submit!"):console.log("error submit!",i)})}return{formRef:t,formData:s,rules:r,handleSubmit:a}},template:`
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
    `})},$a={name:"Validación Dinámica",parameters:{docs:{description:{story:`Puedes agregar o eliminar campos de formulario dinámicamente junto con sus reglas de validación.

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
`}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){const t=G(),s=ea({domains:[{key:1,value:""}],email:""}),r=l=>{const b=s.domains.indexOf(l);b!==-1&&s.domains.splice(b,1)},a=()=>{s.domains.push({key:Date.now(),value:""})};async function n(){t.value&&await t.value.validate((l,b)=>{l?console.log("submit!",s):console.log("error submit!",b)})}async function i(){t.value&&t.value.resetFields()}return{formRef:t,formData:s,handleSubmit:n,handleReset:i,addDomain:a,removeDomain:r}},template:`
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
    `})},Ko=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];Pa.parameters={...Pa.parameters,docs:{...Pa.parameters?.docs,source:{originalSource:`{
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
}`,...Pa.parameters?.docs?.source}}};Ma.parameters={...Ma.parameters,docs:{...Ma.parameters?.docs,source:{originalSource:`{
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
}`,...Ra.parameters?.docs?.source}}};Ea.parameters={...Ea.parameters,docs:{...Ea.parameters?.docs,source:{originalSource:`{
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
}`,...Ea.parameters?.docs?.source}}};Va.parameters={...Va.parameters,docs:{...Va.parameters?.docs,source:{originalSource:`{
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
}`,...Va.parameters?.docs?.source}}};Fa.parameters={...Fa.parameters,docs:{...Fa.parameters?.docs,source:{originalSource:`{
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
}`,...Fa.parameters?.docs?.source}}};$a.parameters={...$a.parameters,docs:{...$a.parameters?.docs,source:{originalSource:`{
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
}`,...$a.parameters?.docs?.source}}};export{Pa as CompleteForm,Ra as CustomRules,Va as DisabledForm,$a as DynamicValidation,Fa as PreventSubmit,Ma as Primary,Ea as TriggerValidation,Ko as __namedExportsOrder,Uo as default};
