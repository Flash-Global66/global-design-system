import{r as G,c as E,u as e,w as Ee,A as Be,d as Oe,q as fe,j as q,k as h,x as pe,$ as Xt,a0 as en,t as W,b as j,N as We,l as de,F as Ce,y as Fe,f as ne,a1 as va,U as Ja,V as Za,s as He,Q as Ge,h as Ne,v as Xe,a as Le,g as gt,e as _e,z as pa,B as Ta,C as ea,J as fa,n as Da,m as Ga,P as an,o as tn,T as nn}from"./vue.esm-bundler-Deokl1F5.js";import{a as aa,G as la}from"./index-BqTclQlI.js";import{G as sa}from"./index-My2UDBtR.js";import{G as ia}from"./ConfigProvider-DiWOjIRd.js";import{G as ua}from"./index-DplprqvC.js";import{G as rn}from"./index-bjKbSSZA.js";import{a as on}from"./index-CoXRUp5a.js";import{a as ln}from"./index-k0tHg6NZ.js";import{G as rt}from"./index-Bxe-ioJ_.js";import{a as sn,y as un,d as H,K as bt,D as Ha,x as ht,j as yt,U as cn,R as dn,S as mn,u as _a}from"./index-LMQleQf5.js";import{c as Ze,g as ta}from"./_commonjsHelpers-Cpj98o6Y.js";import{b as Ie,d as ue,h as ge,k as Ye,g as Ua,p as kt,q as ot,N as lt}from"./props.util-Dtwzmmnf.js";import{c as Ve,k as Fa,e as pn,g as fn,h as vn,d as gn,q as bn}from"./useEmptyValues-S5EffpHc.js";import{u as Ae}from"./useLocale-DyTUnJYo.js";import{Y as oa}from"./index-DZaVRFni.js";import{_ as he}from"./index-B-U0DsHd.js";import{W as hn,p as yn,n as kn}from"./index-CL9Y1TT6.js";import{f as Dn}from"./flatten-DT5vVsq_.js";import{_ as wn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{C as Ka}from"./clickOutside.directive-CkDL0F50.js";import{E as Pe}from"./event.constant-LtAI3-H4.js";import{c as st}from"./index-ygpgr_4h.js";import{w as Dt,d as it}from"./error.util-CmMZjXeT.js";import{a as wt,o as Sn,d as Pn}from"./index-Cla1j_Lq.js";import{u as St}from"./useFocusController-C2BXcCNp.js";import{i as Pt,L as Cn,a as xn}from"./index-iviVQk4X.js";import{u as Mn}from"./useAttrs-DU4L9I3P.js";import{i as Rn}from"./isEqual-0gvNoJTS.js";import{x as Vn}from"./index-D9ZVf-UW.js";import{d as In}from"./debounce-CsYtar6l.js";import{v as ut}from"./repeatClick.directive-DafuUUCR.js";import"./index-CRx4dHSJ.js";import"./index-D9lthdDW.js";import"./useCalcInputWidth-BebK83ol.js";import"./index-BCJKNGWg.js";import"./string.util-ahobR_bj.js";import"./hasIn-CeJAmWr5.js";import"./pick-DpUeSRZp.js";import"./_baseFlatten-Bm7nuucs.js";import"./isArrayLikeObject-BVxhOVxw.js";import"./index-C-KaQxZk.js";import"./index-BmLAfq-y.js";var $n={exports:{}};(function(t,s){(function(r,a){t.exports=a(sn)})(Ze,function(r){function a(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var n=a(r),i={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(l){return l+"º"}};return n.default.locale(i,null,!0),i})})($n);var Ct={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,i=/\d\d/,l=/\d\d?/,b=/\d*[^-_:/,()\s\d]+/,C={},S=function(p){return(p=+p)+(p>68?1900:2e3)},m=function(p){return function(O){this[p]=+O}},d=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(O){if(!O||O==="Z")return 0;var M=O.match(/([+-]|\d\d)/g),y=60*M[1]+(+M[2]||0);return y===0?0:M[0]==="+"?-y:y}(p)}],R=function(p){var O=C[p];return O&&(O.indexOf?O:O.s.concat(O.f))},k=function(p,O){var M,y=C.meridiem;if(y){for(var A=1;A<=24;A+=1)if(p.indexOf(y(A,0,O))>-1){M=A>12;break}}else M=p===(O?"pm":"PM");return M},V={A:[b,function(p){this.afternoon=k(p,!1)}],a:[b,function(p){this.afternoon=k(p,!0)}],Q:[n,function(p){this.month=3*(p-1)+1}],S:[n,function(p){this.milliseconds=100*+p}],SS:[i,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[l,m("seconds")],ss:[l,m("seconds")],m:[l,m("minutes")],mm:[l,m("minutes")],H:[l,m("hours")],h:[l,m("hours")],HH:[l,m("hours")],hh:[l,m("hours")],D:[l,m("day")],DD:[i,m("day")],Do:[b,function(p){var O=C.ordinal,M=p.match(/\d+/);if(this.day=M[0],O)for(var y=1;y<=31;y+=1)O(y).replace(/\[|\]/g,"")===p&&(this.day=y)}],w:[l,m("week")],ww:[i,m("week")],M:[l,m("month")],MM:[i,m("month")],MMM:[b,function(p){var O=R("months"),M=(R("monthsShort")||O.map(function(y){return y.slice(0,3)})).indexOf(p)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[b,function(p){var O=R("months").indexOf(p)+1;if(O<1)throw new Error;this.month=O%12||O}],Y:[/[+-]?\d+/,m("year")],YY:[i,function(p){this.year=S(p)}],YYYY:[/\d{4}/,m("year")],Z:d,ZZ:d};function D(p){var O,M;O=p,M=C&&C.formats;for(var y=(p=O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,z,w){var te=w&&w.toUpperCase();return z||M[w]||r[w]||M[te].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(Q,oe,ie){return oe||ie.slice(1)})})).match(a),A=y.length,I=0;I<A;I+=1){var T=y[I],N=V[T],L=N&&N[0],P=N&&N[1];y[I]=P?{regex:L,parser:P}:T.replace(/^\[|\]$/g,"")}return function(Y){for(var z={},w=0,te=0;w<A;w+=1){var Q=y[w];if(typeof Q=="string")te+=Q.length;else{var oe=Q.regex,ie=Q.parser,me=Y.slice(te),B=oe.exec(me)[0];ie.call(z,B),Y=Y.replace(B,"")}}return function(g){var F=g.afternoon;if(F!==void 0){var x=g.hours;F?x<12&&(g.hours+=12):x===12&&(g.hours=0),delete g.afternoon}}(z),z}}return function(p,O,M){M.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(S=p.parseTwoDigitYear);var y=O.prototype,A=y.parse;y.parse=function(I){var T=I.date,N=I.utc,L=I.args;this.$u=N;var P=L[1];if(typeof P=="string"){var Y=L[2]===!0,z=L[3]===!0,w=Y||z,te=L[2];z&&(te=L[2]),C=this.$locale(),!Y&&te&&(C=M.Ls[te]),this.$d=function(me,B,g,F){try{if(["x","X"].indexOf(B)>-1)return new Date((B==="X"?1e3:1)*me);var x=D(B)(me),v=x.year,_=x.month,f=x.day,$=x.hours,U=x.minutes,ae=x.seconds,xe=x.milliseconds,Te=x.zone,je=x.week,J=new Date,Z=f||(v||_?1:J.getDate()),re=v||J.getFullYear(),le=0;v&&!_||(le=_>0?_-1:J.getMonth());var be,ce=$||0,ye=U||0,we=ae||0,Me=xe||0;return Te?new Date(Date.UTC(re,le,Z,ce,ye,we,Me+60*Te.offset*1e3)):g?new Date(Date.UTC(re,le,Z,ce,ye,we,Me)):(be=new Date(re,le,Z,ce,ye,we,Me),je&&(be=F(be).week(je).toDate()),be)}catch{return new Date("")}}(T,P,N,M),this.init(),te&&te!==!0&&(this.$L=this.locale(te).$L),w&&T!=this.format(P)&&(this.$d=new Date("")),C={}}else if(P instanceof Array)for(var Q=P.length,oe=1;oe<=Q;oe+=1){L[1]=P[oe-1];var ie=M.apply(this,L);if(ie.isValid()){this.$d=ie.$d,this.$L=ie.$L,this.init();break}oe===Q&&(this.$d=new Date(""))}else A.call(this,I)}}})})(Ct);var En=Ct.exports;const xt=ta(En);var Mt={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){var n=a.prototype,i=n.format;n.format=function(l){var b=this,C=this.$locale();if(!this.isValid())return i.bind(this)(l);var S=this.$utils(),m=(l||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(d){switch(d){case"Q":return Math.ceil((b.$M+1)/3);case"Do":return C.ordinal(b.$D);case"gggg":return b.weekYear();case"GGGG":return b.isoWeekYear();case"wo":return C.ordinal(b.week(),"W");case"w":case"ww":return S.s(b.week(),d==="w"?1:2,"0");case"W":case"WW":return S.s(b.isoWeek(),d==="W"?1:2,"0");case"k":case"kk":return S.s(String(b.$H===0?24:b.$H),d==="k"?1:2,"0");case"X":return Math.floor(b.$d.getTime()/1e3);case"x":return b.$d.getTime();case"z":return"["+b.offsetName()+"]";case"zzz":return"["+b.offsetName("long")+"]";default:return d}});return i.bind(this)(m)}}})})(Mt);var Tn=Mt.exports;const Fn=ta(Tn);var Rt={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a,n){var i=a.prototype,l=function(d){return d&&(d.indexOf?d:d.s)},b=function(d,R,k,V,D){var p=d.name?d:d.$locale(),O=l(p[R]),M=l(p[k]),y=O||M.map(function(I){return I.slice(0,V)});if(!D)return y;var A=p.weekStart;return y.map(function(I,T){return y[(T+(A||0))%7]})},C=function(){return n.Ls[n.locale()]},S=function(d,R){return d.formats[R]||function(k){return k.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(V,D,p){return D||p.slice(1)})}(d.formats[R.toUpperCase()])},m=function(){var d=this;return{months:function(R){return R?R.format("MMMM"):b(d,"months")},monthsShort:function(R){return R?R.format("MMM"):b(d,"monthsShort","months",3)},firstDayOfWeek:function(){return d.$locale().weekStart||0},weekdays:function(R){return R?R.format("dddd"):b(d,"weekdays")},weekdaysMin:function(R){return R?R.format("dd"):b(d,"weekdaysMin","weekdays",2)},weekdaysShort:function(R){return R?R.format("ddd"):b(d,"weekdaysShort","weekdays",3)},longDateFormat:function(R){return S(d.$locale(),R)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};i.localeData=function(){return m.bind(this)()},n.localeData=function(){var d=C();return{firstDayOfWeek:function(){return d.weekStart||0},weekdays:function(){return n.weekdays()},weekdaysShort:function(){return n.weekdaysShort()},weekdaysMin:function(){return n.weekdaysMin()},months:function(){return n.months()},monthsShort:function(){return n.monthsShort()},longDateFormat:function(R){return S(d,R)},meridiem:d.meridiem,ordinal:d.ordinal}},n.months=function(){return b(C(),"months")},n.monthsShort=function(){return b(C(),"monthsShort","months",3)},n.weekdays=function(d){return b(C(),"weekdays",null,null,d)},n.weekdaysShort=function(d){return b(C(),"weekdaysShort","weekdays",3,d)},n.weekdaysMin=function(d){return b(C(),"weekdaysMin","weekdays",2,d)}}})})(Rt);var On=Rt.exports;const Nn=ta(On);var Vt={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){var r="week",a="year";return function(n,i,l){var b=i.prototype;b.week=function(C){if(C===void 0&&(C=null),C!==null)return this.add(7*(C-this.week()),"day");var S=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var m=l(this).startOf(a).add(1,a).date(S),d=l(this).endOf(r);if(m.isBefore(d))return 1}var R=l(this).startOf(a).date(S).startOf(r).subtract(1,"millisecond"),k=this.diff(R,r,!0);return k<0?l(this).startOf("week").week():Math.ceil(k)},b.weeks=function(C){return C===void 0&&(C=null),this.week(C)}}})})(Vt);var Ln=Vt.exports;const Yn=ta(Ln);var It={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.weekYear=function(){var n=this.month(),i=this.week(),l=this.year();return i===1&&n===11?l+1:n===0&&i>=52?l-1:l}}})})(It);var An=It.exports;const _n=ta(An);var $t={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a,n){a.prototype.dayOfYear=function(i){var l=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return i==null?l:this.add(i-l,"day")}}})})($t);var Bn=$t.exports;const jn=ta(Bn);var Et={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.isSameOrAfter=function(n,i){return this.isSame(n,i)||this.isAfter(n,i)}}})})(Et);var qn=Et.exports;const Gn=ta(qn);var Tt={exports:{}};(function(t,s){(function(r,a){t.exports=a()})(Ze,function(){return function(r,a){a.prototype.isSameOrBefore=function(n,i){return this.isSame(n,i)||this.isBefore(n,i)}}})})(Tt);var Hn=Tt.exports;const Un=ta(Hn),Qa=Symbol.for("rootPickerInjection"),Kn=Ie({...un,type:{type:ue(String),default:"date"}}),zn=["year","years","month","months","date","dates","week","datetime","datetimerange","daterange","monthrange","yearrange"],Wn=["date","dates","year","years","month","months","week","range"],Xa=Ie({disabledDate:{type:ue(Function)},date:{type:ue(Object),required:!0},minDate:{type:ue(Object)},maxDate:{type:ue(Object)},parsedValue:{type:ue([Object,Array])},rangeState:{type:ue(Object),default:()=>({endDate:null,selecting:!1})}}),Ft=Ie({type:{type:ue(String),required:!0,values:zn},dateFormat:String,timeFormat:String,showNow:{type:Boolean,default:!0}}),et=Ie({unlinkPanels:Boolean,parsedValue:{type:ue(Array)}}),at=t=>({type:String,values:Wn,default:t}),Jn=Ie({...Ft,parsedValue:{type:ue([Object,Array])},visible:{type:Boolean},format:{type:String,default:""}}),ga=t=>{if(!ge(t))return!1;const[s,r]=t;return H.isDayjs(s)&&H.isDayjs(r)&&s.isSameOrBefore(r)},tt=(t,{lang:s,unit:r,unlinkPanels:a})=>{let n;if(ge(t)){const[i,l]=t.map(C=>H(C).locale(s)),b=a?l:i.add(1,r);return[i,b]}else t?n=H(t):n=H();return n=n.locale(s),[n,n.add(1,r)]},Zn=(t,s,{columnIndexOffset:r,startDate:a,nextEndDate:n,now:i,unit:l,relativeDateGetter:b,setCellMetadata:C,setRowMetadata:S})=>{for(let m=0;m<t.row;m++){const d=s[m];for(let R=0;R<t.column;R++){let k=d[R+r];k||(k={row:m,column:R,type:"normal",inRange:!1,start:!1,end:!1});const V=m*t.column+R,D=b(V);k.dayjs=D,k.date=D.toDate(),k.timestamp=D.valueOf(),k.type="normal",k.inRange=!!(a&&D.isSameOrAfter(a,l)&&n&&D.isSameOrBefore(n,l))||!!(a&&D.isSameOrBefore(a,l)&&n&&D.isSameOrAfter(n,l)),a?.isSameOrAfter(n)?(k.start=!!n&&D.isSame(n,l),k.end=a&&D.isSame(a,l)):(k.start=!!a&&D.isSame(a,l),k.end=!!n&&D.isSame(n,l)),D.isSame(i,l)&&(k.type="today"),C?.(k,{rowIndex:m,columnIndex:R}),d[R+r]=k}S?.(d)}},Oa=(t,s,r)=>{const a=H().locale(r).startOf("month").month(s).year(t),n=a.daysInMonth();return bt(n).map(i=>a.add(i,"day").toDate())},wa=(t,s,r,a)=>{const n=H().year(t).month(s).startOf("month"),i=Oa(t,s,r).find(l=>!a?.(l));return i?H(i).locale(r):n.locale(r)},za=(t,s,r)=>{const a=t.year();if(!r?.(t.toDate()))return t.locale(s);const n=t.month();if(!Oa(a,n,s).every(r))return wa(a,n,s,r);for(let i=0;i<12;i++)if(!Oa(a,i,s).every(r))return wa(a,i,s,r);return t},Qn=Ie({...Xa,cellClassName:{type:ue(Function)},showWeekNumber:Boolean,selectionMode:at("date")}),Xn=["changerange","pick","select"],ca={name:"es",el:{datepicker:{now:"Ahora",today:"Hoy",cancel:"Cancelar",clear:"Limpiar",confirm:"Aceptar",dateTablePrompt:"Use las teclas de flecha y enter para seleccionar el día del mes",monthTablePrompt:"Use las teclas de flecha y enter para seleccionar el mes",yearTablePrompt:"Use las teclas de flecha y enter para seleccionar el año",selectedDate:"Fecha seleccionada",selectDate:"Seleccionar fecha",selectTime:"Seleccionar hora",startDate:"Fecha de inicio",startTime:"Hora de inicio",endDate:"Fecha de fin",endTime:"Hora de fin",prevYear:"Año anterior",nextYear:"Próximo año",prevMonth:"Mes anterior",nextMonth:"Próximo mes",year:"",month1:"Enero",month2:"Febrero",month3:"Marzo",month4:"Abril",month5:"Mayo",month6:"Junio",month7:"Julio",month8:"Agosto",month9:"Septiembre",month10:"Octubre",month11:"Noviembre",month12:"Diciembre",week:"semana",weeks:{sun:"Dom",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb"},weeksFull:{sun:"Domingo",mon:"Lunes",tue:"Martes",wed:"Miércoles",thu:"Jueves",fri:"Viernes",sat:"Sábado"},months:{jan:"Ene",feb:"Feb",mar:"Mar",apr:"Abr",may:"May",jun:"Jun",jul:"Jul",aug:"Ago",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dic"}}}},Wa=(t="")=>["normal","today"].includes(t),er=(t,s)=>{const{lang:r}=Ae(G(ca)),a=G(),n=G(),i=G(),l=G(),b=G([[],[],[],[],[],[]]);let C=!1;const S=t.date.$locale().weekStart||7,m=t.date.locale("en").localeData().weekdaysShort().map(g=>g.toLowerCase()),d=E(()=>S>3?7-S:-S),R=E(()=>{const g=t.date.startOf("month");return g.subtract(g.day()||7,"day")}),k=E(()=>m.concat(m).slice(S,S+7)),V=E(()=>Dn(e(A)).some(g=>g.isCurrent)),D=E(()=>{const g=t.date.startOf("month"),F=g.day()||7,x=g.daysInMonth(),v=g.subtract(1,"month").daysInMonth();return{startOfMonthDay:F,dateCountOfMonth:x,dateCountOfLastMonth:v}}),p=E(()=>t.selectionMode==="dates"?Ye(t.parsedValue):[]),O=(g,{count:F,rowIndex:x,columnIndex:v})=>{const{startOfMonthDay:_,dateCountOfMonth:f,dateCountOfLastMonth:$}=e(D),U=e(d);if(x>=0&&x<=1){const ae=_+U<0?7+_+U:_+U;if(v+x*7>=ae)return g.text=F,!0;g.text=$-(ae-v%7)+1+x*7,g.type="prev-month"}else return F<=f?g.text=F:(g.text=F-f,g.type="next-month"),!0;return!1},M=(g,{columnIndex:F,rowIndex:x},v)=>{const{disabledDate:_,cellClassName:f}=t,$=e(p),U=O(g,{count:v,rowIndex:x,columnIndex:F}),ae=g.dayjs.toDate();return g.selected=$.find(xe=>xe.isSame(g.dayjs,"day")),g.isSelected=!!g.selected,g.isCurrent=T(g),g.disabled=_?.(ae),g.customClass=f?.(ae),U},y=g=>{if(t.selectionMode==="week"){const[F,x]=t.showWeekNumber?[1,7]:[0,6],v=B(g[F+1]);g[F].inRange=v,g[F].start=v,g[x].inRange=v,g[x].end=v}},A=E(()=>{const{minDate:g,maxDate:F,rangeState:x,showWeekNumber:v}=t,_=e(d),f=e(b),$="day";let U=1;if(v)for(let ae=0;ae<6;ae++)f[ae][0]||(f[ae][0]={type:"week",text:e(R).add(ae*7+1,$).week()});return Zn({row:6,column:7},f,{startDate:g,columnIndexOffset:v?1:0,nextEndDate:x.endDate||F||x.selecting&&g||null,now:H().locale(e(r)).startOf($),unit:$,relativeDateGetter:ae=>e(R).add(ae-_,$),setCellMetadata:(...ae)=>{M(...ae,U)&&(U+=1)},setRowMetadata:y}),f});Ee(()=>t.date,async()=>{e(a)?.contains(document.activeElement)&&(await Be(),await I())});const I=async()=>e(n)?.focus(),T=g=>t.selectionMode==="date"&&Wa(g.type)&&N(g,t.parsedValue),N=(g,F)=>F?H(F).locale(e(r)).isSame(t.date.date(Number(g.text)),"day"):!1,L=(g,F)=>{const x=g*7+(F-(t.showWeekNumber?1:0))-e(d);return e(R).add(x,"day")},P=g=>{if(!t.rangeState.selecting)return;let F=g.target;if(F.tagName==="SPAN"&&(F=F.parentNode?.parentNode),F.tagName==="DIV"&&(F=F.parentNode),F.tagName!=="TD")return;const x=F.parentNode.rowIndex-1,v=F.cellIndex;e(A)[x][v].disabled||(x!==e(i)||v!==e(l))&&(i.value=x,l.value=v,s("changerange",{selecting:!0,endDate:L(x,v)}))},Y=g=>!e(V)&&g?.text===1&&g.type==="normal"||g.isCurrent,z=g=>{C||e(V)||t.selectionMode!=="date"||me(g,!0)},w=g=>{g.target.closest("td")&&(C=!0)},te=g=>{g.target.closest("td")&&(C=!1)},Q=g=>{!t.rangeState.selecting||!t.minDate?(s("pick",{minDate:g,maxDate:null}),s("select",!0)):(g>=t.minDate?s("pick",{minDate:t.minDate,maxDate:g}):s("pick",{minDate:g,maxDate:t.minDate}),s("select",!1))},oe=g=>{const F=g.week(),x=`${g.year()}w${F}`;s("pick",{year:g.year(),week:F,value:x,date:g.startOf("week")})},ie=(g,F)=>{const x=F?Ye(t.parsedValue).filter(v=>v?.valueOf()!==g.valueOf()):Ye(t.parsedValue).concat([g]);s("pick",x)},me=(g,F=!1)=>{const x=g.target.closest("td");if(!x)return;const v=x.parentNode.rowIndex-1,_=x.cellIndex,f=e(A)[v][_];if(f.disabled||f.type==="week")return;const $=L(v,_);switch(t.selectionMode){case"range":{Q($);break}case"date":{s("pick",$,F);break}case"week":{oe($);break}case"dates":{ie($,!!f.selected);break}}},B=g=>{if(t.selectionMode!=="week")return!1;let F=t.date.startOf("day");if(g.type==="prev-month"&&(F=F.subtract(1,"month")),g.type==="next-month"&&(F=F.add(1,"month")),F=F.date(Number.parseInt(g.text,10)),t.parsedValue&&!ge(t.parsedValue)){const x=(t.parsedValue.day()-S+7)%7-1;return t.parsedValue.subtract(x,"day").isSame(F,"day")}return!1};return{WEEKS:k,rows:A,tbodyRef:a,currentCellRef:n,focus:I,isCurrent:T,isWeekActive:B,isSelectedCell:Y,handlePickDate:me,handleMouseUp:te,handleMouseDown:w,handleMouseMove:P,handleFocus:z}},ar=(t,{isCurrent:s,isWeekActive:r})=>{const a=Ve("date-table"),{t:n}=Ae(G(ca)),i=E(()=>[a.b(),{"is-week-mode":t.selectionMode==="week"}]),l=E(()=>n("el.datepicker.dateTablePrompt")),b=E(()=>n("el.datepicker.week"));return{tableKls:i,tableLabel:l,weekLabel:b,getCellClasses:m=>{const d=[];return Wa(m.type)&&!m.disabled?(d.push("available"),m.type==="today"&&d.push("today")):d.push(m.type),s(m)&&d.push("current"),m.inRange&&(Wa(m.type)||t.selectionMode==="week")&&(d.push("in-range"),m.start&&d.push("start-date"),m.end&&d.push("end-date")),m.disabled&&d.push("disabled"),m.selected&&d.push("selected"),m.customClass&&d.push(m.customClass),d.join(" ")},getRowKls:m=>[a.e("row"),{current:r(m)}],t:n}},tr=Ie({cell:{type:ue(Object)}}),Ot=Oe({name:"GDatePickerCell",props:tr,setup(t){return{ns:Ve("date-table-cell"),cell:t.cell}}});function nr(t,s,r,a,n,i){return fe(t.$slots,"default",Xt(en(t.cell)),()=>[q("div",{class:h(t.ns.b())},[q("span",{class:h(t.ns.e("text"))},pe(t.cell?.renderText??t.cell?.text),3)],2)])}const nt=wn(Ot,[["render",nr]]);Ot.__docgenInfo={displayName:"GDatePickerCell",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-cell-render.vue"]};const rr=["aria-label"],or={key:0,scope:"col"},lr=["aria-label"],sr=["aria-current","aria-selected","tabindex"],Na=Oe({__name:"basic-date-table",props:Qn,emits:Xn,setup(t,{expose:s,emit:r}){const a=t,n=r,{WEEKS:i,rows:l,tbodyRef:b,currentCellRef:C,focus:S,isCurrent:m,isWeekActive:d,isSelectedCell:R,handlePickDate:k,handleMouseUp:V,handleMouseDown:D,handleMouseMove:p,handleFocus:O}=er(a,n),{tableLabel:M,tableKls:y,weekLabel:A,getCellClasses:I,getRowKls:T,t:N}=ar(a,{isCurrent:m,isWeekActive:d});return s({focus:S}),(L,P)=>(j(),W("table",{"aria-label":e(M),class:h(e(y)),cellspacing:"0",cellpadding:"0",role:"grid",onClick:P[1]||(P[1]=(...Y)=>e(k)&&e(k)(...Y)),onMousemove:P[2]||(P[2]=(...Y)=>e(p)&&e(p)(...Y)),onMousedown:P[3]||(P[3]=We((...Y)=>e(D)&&e(D)(...Y),["prevent"])),onMouseup:P[4]||(P[4]=(...Y)=>e(V)&&e(V)(...Y))},[q("tbody",{ref_key:"tbodyRef",ref:b},[q("tr",null,[L.showWeekNumber?(j(),W("th",or,pe(e(A)),1)):de("",!0),(j(!0),W(Ce,null,Fe(e(i),(Y,z)=>(j(),W("th",{key:z,"aria-label":e(N)("el.datepicker.weeksFull."+Y),scope:"col"},pe(e(N)("el.datepicker.weeks."+Y)),9,lr))),128))]),(j(!0),W(Ce,null,Fe(e(l),(Y,z)=>(j(),W("tr",{key:z,class:h(e(T)(Y[1]))},[(j(!0),W(Ce,null,Fe(Y,(w,te)=>(j(),W("td",{key:`${z}.${te}`,ref_for:!0,ref:Q=>e(R)(w)&&(C.value=Q),class:h(e(I)(w)),"aria-current":w.isCurrent?"date":void 0,"aria-selected":w.isCurrent,tabindex:e(R)(w)?0:-1,onFocus:P[0]||(P[0]=(...Q)=>e(O)&&e(O)(...Q))},[ne(nt,{cell:w},null,8,["cell"])],42,sr))),128))],2))),128))],512)],42,rr))}});Na.__docgenInfo={exportName:"default",displayName:"basic-date-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on current cell"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-date-table.vue"]};const ir=Ie({...Xa,selectionMode:at("month")}),ur=["aria-label"],cr=["aria-selected","aria-label","tabindex","onKeydown"],La=Oe({__name:"basic-month-table",props:ir,emits:["changerange","pick","select"],setup(t,{expose:s,emit:r}){const a=t,n=r,i=Ve("month-table"),{t:l,lang:b}=Ae(),C=G(),S=G(),m=G(a.date.locale("en").localeData().monthsShort().map(A=>A.toLowerCase())),d=G([[],[],[]]),R=G(),k=G(),V=E(()=>{const A=d.value,I=H().locale(b.value).startOf("month");for(let T=0;T<3;T++){const N=A[T];for(let L=0;L<4;L++){const P=N[L]||={row:T,column:L,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1};P.type="normal";const Y=T*4+L,z=a.date.startOf("year").month(Y),w=a.rangeState.endDate||a.maxDate||a.rangeState.selecting&&a.minDate||null;P.inRange=!!(a.minDate&&z.isSameOrAfter(a.minDate,"month")&&w&&z.isSameOrBefore(w,"month"))||!!(a.minDate&&z.isSameOrBefore(a.minDate,"month")&&w&&z.isSameOrAfter(w,"month")),a.minDate?.isSameOrAfter(w)?(P.start=!!(w&&z.isSame(w,"month")),P.end=a.minDate&&z.isSame(a.minDate,"month")):(P.start=!!(a.minDate&&z.isSame(a.minDate,"month")),P.end=!!(w&&z.isSame(w,"month"))),I.isSame(z)&&(P.type="today"),P.text=Y,P.disabled=a.disabledDate?.(z.toDate())||!1}}return A}),D=()=>{S.value?.focus()},p=A=>{const I={},T=a.date.year(),N=new Date,L=A.text;return I.disabled=a.disabledDate?Oa(T,L,b.value).every(a.disabledDate):!1,I.current=Ye(a.parsedValue).findIndex(P=>H.isDayjs(P)&&P.year()===T&&P.month()===L)>=0,I.today=N.getFullYear()===T&&N.getMonth()===L,A.inRange&&(I["in-range"]=!0,A.start&&(I["start-date"]=!0),A.end&&(I["end-date"]=!0)),I},O=A=>{const I=a.date.year(),T=A.text;return Ye(a.date).findIndex(N=>N.year()===I&&N.month()===T)>=0},M=A=>{if(!a.rangeState.selecting)return;let I=A.target;if(I.tagName==="SPAN"&&(I=I.parentNode?.parentNode),I.tagName==="DIV"&&(I=I.parentNode),I.tagName!=="TD")return;const T=I.parentNode.rowIndex,N=I.cellIndex;V.value[T][N].disabled||(T!==R.value||N!==k.value)&&(R.value=T,k.value=N,n("changerange",{selecting:!0,endDate:a.date.startOf("year").month(T*4+N)}))},y=A=>{const I=A.target?.closest("td");if(I?.tagName!=="TD"||Fa(I,"disabled"))return;const T=I.cellIndex,L=I.parentNode.rowIndex*4+T,P=a.date.startOf("year").month(L);if(a.selectionMode==="months"){if(A.type==="keydown"){n("pick",Ye(a.parsedValue),!1);return}const Y=wa(a.date.year(),L,b.value,a.disabledDate),z=Fa(I,"current")?Ye(a.parsedValue).filter(w=>w?.month()!==Y.month()):Ye(a.parsedValue).concat([H(Y)]);n("pick",z)}else a.selectionMode==="range"?a.rangeState.selecting?(a.minDate&&P>=a.minDate?n("pick",{minDate:a.minDate,maxDate:P}):n("pick",{minDate:P,maxDate:a.minDate}),n("select",!1)):(n("pick",{minDate:P,maxDate:null}),n("select",!0)):n("pick",L)};return Ee(()=>a.date,async()=>{C.value?.contains(document.activeElement)&&(await Be(),S.value?.focus())}),s({focus:D}),(A,I)=>(j(),W("table",{role:"grid","aria-label":e(l)("el.datepicker.monthTablePrompt"),class:h(e(i).b()),onClick:y,onMousemove:M},[q("tbody",{ref_key:"tbodyRef",ref:C},[(j(!0),W(Ce,null,Fe(V.value,(T,N)=>(j(),W("tr",{key:N},[(j(!0),W(Ce,null,Fe(T,(L,P)=>(j(),W("td",{key:P,ref_for:!0,ref:Y=>O(L)&&(S.value=Y),class:h(p(L)),"aria-selected":`${O(L)}`,"aria-label":e(l)(`el.datepicker.month${+L.text+1}`),tabindex:O(L)?0:-1,onKeydown:[va(We(y,["prevent","stop"]),["space"]),va(We(y,["prevent","stop"]),["enter"])]},[ne(nt,{cell:{...L,renderText:e(l)("el.datepicker.months."+m.value[L.text])}},null,8,["cell"])],42,cr))),128))]))),128))],512)],42,ur))}});La.__docgenInfo={exportName:"default",displayName:"basic-month-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-month-table.vue"]};const dr=Ie({...Xa,selectionMode:at("year")}),mr=["aria-label"],pr=["aria-selected","aria-label","tabindex","onKeydown"],Ya=Oe({__name:"basic-year-table",props:dr,emits:["changerange","pick","select"],setup(t,{expose:s,emit:r}){const a=(I,T)=>{const N=H(String(I)).locale(T).startOf("year"),P=N.endOf("year").dayOfYear();return bt(P).map(Y=>N.add(Y,"day").toDate())},n=t,i=r,l=Ve("year-table"),{t:b,lang:C}=Ae(),S=G(),m=G(),d=E(()=>Math.floor(n.date.year()/10)*10),R=G([[],[],[]]),k=G(),V=G(),D=E(()=>{const I=R.value,T=H().locale(C.value).startOf("year");for(let N=0;N<3;N++){const L=I[N];for(let P=0;P<4&&!(N*4+P>=10);P++){let Y=L[P];Y||(Y={row:N,column:P,type:"normal",inRange:!1,start:!1,end:!1,text:-1,disabled:!1}),Y.type="normal";const z=N*4+P+d.value,w=H().year(z),te=n.rangeState.endDate||n.maxDate||n.rangeState.selecting&&n.minDate||null;Y.inRange=!!(n.minDate&&w.isSameOrAfter(n.minDate,"year")&&te&&w.isSameOrBefore(te,"year"))||!!(n.minDate&&w.isSameOrBefore(n.minDate,"year")&&te&&w.isSameOrAfter(te,"year")),n.minDate?.isSameOrAfter(te)?(Y.start=!!(te&&w.isSame(te,"year")),Y.end=!!(n.minDate&&w.isSame(n.minDate,"year"))):(Y.start=!!(n.minDate&&w.isSame(n.minDate,"year")),Y.end=!!(te&&w.isSame(te,"year"))),T.isSame(w)&&(Y.type="today"),Y.text=z;const oe=w.toDate();Y.disabled=n.disabledDate&&n.disabledDate(oe)||!1,L[P]=Y}}return I}),p=()=>{m.value?.focus()},O=I=>{const T={},N=H().locale(C.value),L=I.text;return T.disabled=n.disabledDate?a(L,C.value).every(n.disabledDate):!1,T.today=N.year()===L,T.current=Ye(n.parsedValue).findIndex(P=>P.year()===L)>=0,I.inRange&&(T["in-range"]=!0,I.start&&(T["start-date"]=!0),I.end&&(T["end-date"]=!0)),T},M=I=>{const T=I.text;return Ye(n.date).findIndex(N=>N.year()===T)>=0},y=I=>{const T=I.target?.closest("td");if(!T||!T.textContent||Fa(T,"disabled"))return;const N=T.cellIndex,P=T.parentNode.rowIndex*4+N+d.value,Y=H().year(P);if(n.selectionMode==="range")n.rangeState.selecting?(n.minDate&&Y>=n.minDate?i("pick",{minDate:n.minDate,maxDate:Y}):i("pick",{minDate:Y,maxDate:n.minDate}),i("select",!1)):(i("pick",{minDate:Y,maxDate:null}),i("select",!0));else if(n.selectionMode==="years"){if(I.type==="keydown"){i("pick",Ye(n.parsedValue),!1);return}const z=za(Y.startOf("year"),C.value,n.disabledDate),w=Fa(T,"current")?Ye(n.parsedValue).filter(te=>te?.year()!==P):Ye(n.parsedValue).concat([z]);i("pick",w)}else i("pick",P)},A=I=>{if(!n.rangeState.selecting)return;const T=I.target?.closest("td");if(!T)return;const N=T.parentNode.rowIndex,L=T.cellIndex;D.value[N][L].disabled||(N!==k.value||L!==V.value)&&(k.value=N,V.value=L,i("changerange",{selecting:!0,endDate:H().year(d.value).add(N*4+L,"year")}))};return Ee(()=>n.date,async()=>{S.value?.contains(document.activeElement)&&(await Be(),m.value?.focus())}),s({focus:p}),(I,T)=>(j(),W("table",{role:"grid","aria-label":e(b)("el.datepicker.yearTablePrompt"),class:h(e(l).b()),onClick:y,onMousemove:A},[q("tbody",{ref_key:"tbodyRef",ref:S},[(j(!0),W(Ce,null,Fe(D.value,(N,L)=>(j(),W("tr",{key:L},[(j(!0),W(Ce,null,Fe(N,(P,Y)=>(j(),W("td",{key:`${L}_${Y}`,ref_for:!0,ref:z=>M(P)&&(m.value=z),class:h(["available",O(P)]),"aria-selected":M(P),"aria-label":String(P.text),tabindex:M(P)?0:-1,onKeydown:[va(We(y,["prevent","stop"]),["space"]),va(We(y,["prevent","stop"]),["enter"])]},[ne(nt,{cell:P},null,8,["cell"])],42,pr))),128))]))),128))],512)],42,mr))}});Ya.__docgenInfo={exportName:"default",displayName:"basic-year-table",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus on the current cell"}]}],events:[{name:"changerange"},{name:"pick"},{name:"select"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/basic-year-table.vue"]};const fr=["onClick"],vr=["aria-label"],gr=["aria-label"],br=["aria-label"],hr=["aria-label"],yr=["disabled"],kr=["disabled"],Nt=Oe({__name:"panel-date-pick",props:Jn,emits:["pick","set-picker-option","panel-change"],setup(t,{emit:s}){const r=(o,c,X)=>!0,a=t,n=s,i=Ve("picker-panel"),l=Ve("date-picker"),b=Ja(),C=Za(),{t:S,lang:m}=Ae(G(ca)),d=He("EP_PICKER_BASE"),R=He(hn),{shortcuts:k,disabledDate:V,cellClassName:D,defaultTime:p}=d.props,O=Ge(d.props,"defaultValue"),M=G(),y=G(H().locale(m.value)),A=G(!1);let I=!1;const T=E(()=>H(p).locale(m.value)),N=E(()=>y.value.month()),L=E(()=>y.value.year()),P=G([]),Y=G(null),z=G(null),w=o=>P.value.length>0?r(o,P.value,a.format||"HH:mm:ss"):!0,te=o=>p&&!ce.value&&!A.value&&!I?T.value.year(o.year()).month(o.month()).date(o.date()):xe.value?o.millisecond(0):o.startOf("day"),Q=(o,...c)=>{if(!o)n("pick",o,...c);else if(ge(o)){const X=o.map(te);n("pick",X,...c)}else n("pick",te(o),...c);Y.value=null,z.value=null,A.value=!1,I=!1},oe=async(o,c)=>{if(x.value==="date"){o=o;let X=a.parsedValue?a.parsedValue.year(o.year()).month(o.month()).date(o.date()):o;w(X),y.value=X,Q(X,xe.value||c),a.type==="datetime"&&(await Be(),qe())}else x.value==="week"?Q(o.date):x.value==="dates"&&Q(o,!0)},ie=o=>{const c=o?"add":"subtract";y.value=y.value[c](1,"month"),K("month")},me=o=>{const c=y.value,X=o?"add":"subtract";y.value=B.value==="year"?c[X](10,"year"):c[X](1,"year"),K("year")},B=G("date"),g=E(()=>{const o=S("el.datepicker.year");if(B.value==="year"){const c=Math.floor(L.value/10)*10;return o?`${c} ${o} - ${c+9} ${o}`:`${c} - ${c+9}`}return`${L.value} ${o}`}),F=o=>{const c=Ua(o.value)?o.value():o.value;if(c){I=!0,Q(H(c).locale(m.value));return}o.onClick&&o.onClick({attrs:b,slots:C,emit:n})},x=E(()=>{const{type:o}=a;return["week","month","months","year","years","dates"].includes(o)?o:"date"}),v=E(()=>x.value==="dates"||x.value==="months"||x.value==="years"),_=E(()=>x.value==="date"?B.value:x.value),f=E(()=>!!k.length),$=async(o,c)=>{x.value==="month"?(y.value=wa(y.value.year(),o,m.value,V),Q(y.value,!1)):x.value==="months"?Q(o,c??!0):(y.value=wa(y.value.year(),o,m.value,V),B.value="date",["month","year","date","week"].includes(x.value)&&(Q(y.value,!0),await Be(),qe())),K("month")},U=async(o,c)=>{if(x.value==="year"){const X=y.value.startOf("year").year(o);y.value=za(X,m.value,V),Q(y.value,!1)}else if(x.value==="years")Q(o,c??!0);else{const X=y.value.year(o);y.value=za(X,m.value,V),B.value="month",["month","year","date","week"].includes(x.value)&&(Q(y.value,!0),await Be(),qe())}K("year")},ae=async o=>{B.value=o,await Be(),qe()},xe=E(()=>a.type==="datetime"||a.type==="datetimerange"),Te=E(()=>{const o=xe.value||x.value==="dates",c=x.value==="years",X=x.value==="months",ke=B.value==="date",Se=B.value==="year",ra=B.value==="month";return o&&ke||c&&Se||X&&ra}),je=E(()=>V?a.parsedValue?ge(a.parsedValue)?V(a.parsedValue[0].toDate()):V(a.parsedValue.toDate()):!0:!1),J=()=>{if(v.value)Q(a.parsedValue);else{let o=a.parsedValue;if(!o){const c=H(p).locale(m.value),X=Ke();o=c.year(X.year()).month(X.month()).date(X.date())}y.value=o,Q(o)}},Z=E(()=>V?V(H().locale(m.value).toDate()):!1),re=()=>{const c=H().locale(m.value).toDate();A.value=!0,(!V||!V(c))&&w(c)&&(y.value=H().locale(m.value),Q(y.value))},le=E(()=>a.timeFormat||ht(a.format)),be=E(()=>a.dateFormat||yt(a.format)),ce=E(()=>{if(z.value)return z.value;if(!(!a.parsedValue&&!O.value))return(a.parsedValue||y.value).format(le.value)}),ye=E(()=>{if(Y.value)return Y.value;if(!(!a.parsedValue&&!O.value))return(a.parsedValue||y.value).format(be.value)}),we=G(!1),Me=()=>{we.value=!0},$e=()=>{we.value=!1},Ue=o=>({hour:o.hour(),minute:o.minute(),second:o.second(),year:o.year(),month:o.month(),date:o.date()}),ba=(o,c,X)=>{const{hour:ke,minute:Se,second:ra}=Ue(o),ka=a.parsedValue?a.parsedValue.hour(ke).minute(Se).second(ra):o;y.value=ka,Q(y.value,!0),X||(we.value=c)},da=o=>{const c=H(o,le.value).locale(m.value);if(c.isValid()&&w(c)){const{year:X,month:ke,date:Se}=Ue(y.value);y.value=c.year(X).month(ke).date(Se),z.value=null,we.value=!1,Q(y.value,!0)}},se=o=>{const c=H(o,be.value).locale(m.value);if(c.isValid()){if(V&&V(c.toDate()))return;const{hour:X,minute:ke,second:Se}=Ue(y.value);y.value=c.hour(X).minute(ke).second(Se),Y.value=null,Q(y.value,!0)}},Qe=o=>H.isDayjs(o)&&o.isValid()&&(V?!V(o.toDate()):!0),Je=o=>ge(o)?o.map(c=>c.format(a.format)):o.format(a.format),na=o=>H(o,a.format).locale(m.value),Ke=()=>{const o=H(O.value).locale(m.value);if(!O.value){const c=T.value;return H().hour(c.hour()).minute(c.minute()).second(c.second()).locale(m.value)}return o},qe=()=>{["week","month","year","date"].includes(x.value)&&M.value?.focus()},ha=()=>{qe(),x.value==="week"&&ma(Pe.down)},ya=o=>{const{code:c}=o;[Pe.up,Pe.down,Pe.left,Pe.right,Pe.home,Pe.end,Pe.pageUp,Pe.pageDown].includes(c)&&(ma(c),o.stopPropagation(),o.preventDefault()),[Pe.enter,Pe.space,Pe.numpadEnter].includes(c)&&Y.value===null&&z.value===null&&(o.preventDefault(),Q(y.value,!1))},ma=o=>{const{up:c,down:X,left:ke,right:Se,home:ra,end:ka,pageUp:u,pageDown:ee}=Pe,De={year:{[c]:-4,[X]:4,[ke]:-1,[Se]:1,offset:(ve,ze)=>ve.setFullYear(ve.getFullYear()+ze)},month:{[c]:-4,[X]:4,[ke]:-1,[Se]:1,offset:(ve,ze)=>ve.setMonth(ve.getMonth()+ze)},week:{[c]:-1,[X]:1,[ke]:-1,[Se]:1,offset:(ve,ze)=>ve.setDate(ve.getDate()+ze*7)},date:{[c]:-7,[X]:7,[ke]:-1,[Se]:1,[ra]:ve=>-ve.getDay(),[ka]:ve=>-ve.getDay()+6,[u]:ve=>-new Date(ve.getFullYear(),ve.getMonth(),0).getDate(),[ee]:ve=>new Date(ve.getFullYear(),ve.getMonth()+1,0).getDate(),offset:(ve,ze)=>ve.setDate(ve.getDate()+ze)}},Re=y.value.toDate();for(;Math.abs(y.value.diff(Re,"year",!0))<1;){const ve=De[_.value];if(!ve)return;if(ve.offset(Re,Ua(ve[o])?ve[o](Re):ve[o]??0),V&&V(Re))break;const ze=H(Re).locale(m.value);y.value=ze,n("pick",ze,!0);break}},K=o=>{n("panel-change",y.value.toDate(),o,B.value)};return Ee(()=>x.value,o=>{if(["month","year"].includes(o)){B.value=o;return}else if(o==="years"){B.value="year";return}else if(o==="months"){B.value="month";return}B.value="date"},{immediate:!0}),Ee(()=>B.value,()=>{R?.updatePopper()}),Ee(()=>O.value,o=>{o&&(y.value=Ke())},{immediate:!0}),Ee(()=>a.parsedValue,o=>{if(o){if(v.value||ge(o))return;y.value=o}else y.value=Ke()},{immediate:!0}),n("set-picker-option",["isValidValue",Qe]),n("set-picker-option",["formatToString",Je]),n("set-picker-option",["parseUserInput",na]),n("set-picker-option",["handleFocusPicker",ha]),(o,c)=>(j(),W("div",{class:h([e(i).b(),e(l).b(),{"has-sidebar":o.$slots.sidebar||f.value,"has-time":xe.value}])},[q("div",{class:h(e(i).e("body-wrapper"))},[fe(o.$slots,"sidebar",{class:h(e(i).e("sidebar"))}),f.value?(j(),W("div",{key:0,class:h(e(i).e("sidebar"))},[(j(!0),W(Ce,null,Fe(e(k),(X,ke)=>(j(),W("button",{key:ke,type:"button",class:h(e(i).e("shortcut")),onClick:Se=>F(X)},pe(X.text),11,fr))),128))],2)):de("",!0),q("div",{class:h(e(i).e("body"))},[xe.value?(j(),W("div",{key:0,class:h(e(l).e("time-header"))},[q("span",{class:h(e(l).e("editor-wrap"))},[ne(e(oa),{placeholder:e(S)("el.datepicker.selectDate"),"model-value":ye.value,"validate-event":!1,onInput:c[0]||(c[0]=X=>Y.value=X),onChange:se},null,8,["placeholder","model-value"])],2),Ne((j(),W("span",{class:h(e(l).e("editor-wrap"))},[ne(e(oa),{placeholder:e(S)("el.datepicker.selectTime"),"model-value":ce.value,"validate-event":!1,onFocus:Me,onInput:c[1]||(c[1]=X=>z.value=X),onChange:da},null,8,["placeholder","model-value"]),ne(e(Ha),{visible:we.value,format:le.value,"parsed-value":y.value,onPick:ba},null,8,["visible","format","parsed-value"])],2)),[[e(Ka),$e]])],2)):de("",!0),Ne(q("div",{class:h([e(l).e("header"),(B.value==="year"||B.value==="month")&&e(l).e("header--bordered")])},[q("span",{class:h(e(l).e("prev-btn"))},[Ne(q("button",{type:"button","aria-label":e(S)("el.datepicker.prevYear"),class:h(["d-arrow-left",e(i).e("icon-btn")]),onClick:c[2]||(c[2]=X=>me(!1))},[fe(o.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,vr),[[Xe,B.value!=="date"]]),Ne(q("button",{type:"button","aria-label":e(S)("el.datepicker.prevMonth"),class:h([e(i).e("icon-btn"),"arrow-left"]),onClick:c[3]||(c[3]=X=>ie(!1))},[fe(o.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,gr),[[Xe,B.value==="date"]])],2),q("span",{role:"button",class:h(e(l).e("header-label")),"aria-live":"polite",tabindex:"0",onKeydown:c[4]||(c[4]=va(X=>ae("year"),["enter"])),onClick:c[5]||(c[5]=X=>ae("year"))},pe(g.value),35),Ne(q("span",{role:"button","aria-live":"polite",tabindex:"0",class:h([e(l).e("header-label"),{active:B.value==="month"}]),onKeydown:c[6]||(c[6]=va(X=>ae("month"),["enter"])),onClick:c[7]||(c[7]=X=>ae("month"))},pe(e(S)(`el.datepicker.month${N.value+1}`)),35),[[Xe,B.value==="date"]]),q("span",{class:h(e(l).e("next-btn"))},[Ne(q("button",{type:"button","aria-label":e(S)("el.datepicker.nextMonth"),class:h([e(i).e("icon-btn"),"arrow-right"]),onClick:c[8]||(c[8]=X=>ie(!0))},[fe(o.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,br),[[Xe,B.value==="date"]]),Ne(q("button",{type:"button","aria-label":e(S)("el.datepicker.nextYear"),class:h([e(i).e("icon-btn"),"d-arrow-right"]),onClick:c[9]||(c[9]=X=>me(!0))},[fe(o.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,hr),[[Xe,B.value!=="date"]])],2)],2),[[Xe,B.value!=="time"]]),q("div",{class:h(e(i).e("content")),onKeydown:ya},[B.value==="date"?(j(),Le(Na,{key:0,ref_key:"currentViewRef",ref:M,"selection-mode":x.value,date:y.value,"parsed-value":o.parsedValue,"disabled-date":e(V),"cell-class-name":e(D),onPick:oe},null,8,["selection-mode","date","parsed-value","disabled-date","cell-class-name"])):de("",!0),B.value==="year"?(j(),Le(Ya,{key:1,ref_key:"currentViewRef",ref:M,"selection-mode":x.value,date:y.value,"disabled-date":e(V),"parsed-value":o.parsedValue,onPick:U},null,8,["selection-mode","date","disabled-date","parsed-value"])):de("",!0),B.value==="month"?(j(),Le(La,{key:2,ref_key:"currentViewRef",ref:M,"selection-mode":x.value,date:y.value,"parsed-value":o.parsedValue,"disabled-date":e(V),onPick:$},null,8,["selection-mode","date","parsed-value","disabled-date"])):de("",!0)],34)],2)],2),Ne(q("div",{class:h(e(i).e("footer"))},[Ne(q("button",{type:"button",class:"gui-time-panel__btn cancel",disabled:Z.value,onClick:re},pe(e(S)("el.datepicker.now")),9,yr),[[Xe,!v.value&&o.showNow]]),q("button",{type:"button",class:"gui-time-panel__btn confirm",disabled:je.value,onClick:J},pe(e(S)("el.datepicker.confirm")),9,kr)],2),[[Xe,Te.value]])],2))}});Nt.__docgenInfo={exportName:"default",displayName:"panel-date-pick",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"prev-month"},{name:"next-month"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-pick.vue"]};const Dr=Ie({...Ft,...et,visible:Boolean}),Lt=t=>{const{emit:s}=gt(),r=Ja(),a=Za();return i=>{const l=Ua(i.value)?i.value():i.value;if(l){s("pick",[H(l[0]).locale(t.value),H(l[1]).locale(t.value)]);return}i.onClick&&i.onClick({attrs:r,slots:a,emit:s})}},Yt=(t,{defaultValue:s,leftDate:r,rightDate:a,unit:n,onParsedValueChanged:i})=>{const{emit:l}=gt(),{pickerNs:b}=He(Qa),C=Ve("date-range-picker"),{t:S,lang:m}=Ae(G(ca)),d=Lt(m),R=G(),k=G(),V=G({endDate:null,selecting:!1}),D=A=>{V.value=A},p=(A=!1)=>{const I=e(R),T=e(k);ga([I,T])&&l("pick",[I,T],A)},O=A=>{V.value.selecting=A,A||(V.value.endDate=null)},M=A=>{if(ge(A)&&A.length===2){const[I,T]=A;R.value=I,r.value=I,k.value=T,i(e(R),e(k))}else y()},y=()=>{const[A,I]=tt(e(s),{lang:e(m),unit:n,unlinkPanels:t.unlinkPanels});R.value=void 0,k.value=void 0,r.value=A,a.value=I};return Ee(s,A=>{A&&y()},{immediate:!0}),Ee(()=>t.parsedValue,M,{immediate:!0}),{minDate:R,maxDate:k,rangeState:V,lang:m,ppNs:b,drpNs:C,handleChangeRange:D,handleRangeConfirm:p,handleShortcutClick:d,onSelect:O,onReset:M,t:S}},wr=["onClick"],Sr=["aria-label"],Pr=["disabled","aria-label"],Cr=["disabled","aria-label"],xr=["disabled","aria-label"],Mr=["disabled","aria-label"],Rr=["aria-label"],Sa="month",At=Oe({__name:"panel-date-range",props:Dr,emits:["pick","set-picker-option","calendar-change","panel-change"],setup(t,{emit:s}){const r=t,a=s,n=He("EP_PICKER_BASE"),{disabledDate:i,cellClassName:l,defaultTime:b,clearable:C}=n.props,S=Ge(n.props,"format"),m=Ge(n.props,"shortcuts"),d=Ge(n.props,"defaultValue"),{lang:R}=Ae(G(ca)),k=G(H().locale(R.value)),V=G(H().locale(R.value).add(1,Sa)),{minDate:D,maxDate:p,rangeState:O,ppNs:M,drpNs:y,handleChangeRange:A,handleRangeConfirm:I,handleShortcutClick:T,onSelect:N,onReset:L,t:P}=Yt(r,{defaultValue:d,leftDate:k,rightDate:V,unit:Sa,onParsedValueChanged:ma});Ee(()=>r.visible,K=>{!K&&O.value.selecting&&(L(r.parsedValue),N(!1))});const Y=G({min:null,max:null}),z=G({min:null,max:null}),w=E(()=>`${k.value.year()} ${P("el.datepicker.year")} ${P(`el.datepicker.month${k.value.month()+1}`)}`),te=E(()=>`${V.value.year()} ${P("el.datepicker.year")} ${P(`el.datepicker.month${V.value.month()+1}`)}`),Q=E(()=>k.value.year()),oe=E(()=>k.value.month()),ie=E(()=>V.value.year()),me=E(()=>V.value.month()),B=E(()=>!!m.value.length),g=E(()=>Y.value.min!==null?Y.value.min:D.value?D.value.format(f.value):""),F=E(()=>Y.value.max!==null?Y.value.max:p.value||D.value?(p.value||D.value).format(f.value):""),x=E(()=>z.value.min!==null?z.value.min:D.value?D.value.format(_.value):""),v=E(()=>z.value.max!==null?z.value.max:p.value||D.value?(p.value||D.value).format(_.value):""),_=E(()=>r.timeFormat||ht(S.value)),f=E(()=>r.dateFormat||yt(S.value)),$=K=>ga(K)&&(i?!i(K[0].toDate())&&!i(K[1].toDate()):!0),U=()=>{k.value=k.value.subtract(1,"month"),r.unlinkPanels||(V.value=k.value.add(1,"month")),Z("month")},ae=()=>{r.unlinkPanels?V.value=V.value.add(1,"month"):(k.value=k.value.add(1,"month"),V.value=k.value.add(1,"month")),Z("month")},xe=()=>{k.value=k.value.add(1,"year"),Z("year")},Te=()=>{k.value=k.value.add(1,"month"),Z("month")},je=()=>{V.value=V.value.subtract(1,"year"),Z("year")},J=()=>{V.value=V.value.subtract(1,"month"),Z("month")},Z=K=>{a("panel-change",[k.value.toDate(),V.value.toDate()],K)},re=E(()=>{const K=(oe.value+1)%12,o=oe.value+1>=12?1:0;return r.unlinkPanels&&new Date(Q.value+o,K)<new Date(ie.value,me.value)}),le=E(()=>r.unlinkPanels&&ie.value*12+me.value-(Q.value*12+oe.value+1)>=12),be=E(()=>!(D.value&&p.value&&!O.value.selecting&&ga([D.value,p.value]))),ce=E(()=>r.type==="datetime"||r.type==="datetimerange"),ye=(K,o)=>{if(K)return b?H(b[o]||b).locale(R.value).year(K.year()).month(K.month()).date(K.date()):K},we=(K,o=!0)=>{const c=K.minDate,X=K.maxDate,ke=ye(c,0),Se=ye(X,1);p.value===Se&&D.value===ke||(a("calendar-change",[c.toDate(),X&&X.toDate()]),p.value=Se,D.value=ke,Se?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[ke?ke.format(S.value):"",""]]),!(!o||ce.value)&&I())},Me=G(!1),$e=G(!1),Ue=()=>{Me.value=!1},ba=()=>{$e.value=!1},da=(K,o)=>{Y.value[o]=K;const c=H(K,f.value).locale(R.value);if(c.isValid()){if(i&&i(c.toDate()))return;o==="min"?(k.value=c,D.value=(D.value||k.value).year(c.year()).month(c.month()).date(c.date()),!r.unlinkPanels&&(!p.value||p.value.isBefore(D.value))&&(V.value=c.add(1,"month"),p.value=D.value.add(1,"month"))):(V.value=c,p.value=(p.value||V.value).year(c.year()).month(c.month()).date(c.date()),!r.unlinkPanels&&(!D.value||D.value.isAfter(p.value))&&(k.value=c.subtract(1,"month"),D.value=p.value.subtract(1,"month")))}},se=(K,o)=>{Y.value[o]=null},Qe=(K,o)=>{z.value[o]=K;const c=H(K,_.value).locale(R.value);c.isValid()&&(o==="min"?(Me.value=!0,D.value=(D.value||k.value).hour(c.hour()).minute(c.minute()).second(c.second())):($e.value=!0,p.value=(p.value||V.value).hour(c.hour()).minute(c.minute()).second(c.second()),V.value=p.value))},Je=(K,o)=>{z.value[o]=null,o==="min"?(k.value=D.value,Me.value=!1,(!p.value||p.value.isBefore(D.value))&&(p.value=D.value)):(V.value=p.value,$e.value=!1,p.value&&p.value.isBefore(D.value)&&(D.value=p.value))},na=(K,o,c)=>{z.value.min||(K&&(k.value=K,D.value=(D.value||k.value).hour(K.hour()).minute(K.minute()).second(K.second())),c||(Me.value=o),(!p.value||p.value.isBefore(D.value))&&(p.value=D.value,V.value=K))},Ke=(K,o,c)=>{z.value.max||(K&&(V.value=K,p.value=(p.value||V.value).hour(K.hour()).minute(K.minute()).second(K.second())),c||($e.value=o),p.value&&p.value.isBefore(D.value)&&(D.value=p.value))},qe=()=>{k.value=tt(e(d),{lang:e(R),unit:"month",unlinkPanels:r.unlinkPanels})[0],V.value=k.value.add(1,"month"),p.value=void 0,D.value=void 0,a("pick",null)},ha=K=>ge(K)?K.map(o=>o.format(S.value)):K.format(S.value),ya=K=>ge(K)?K.map(o=>H(o,S.value).locale(R.value)):H(K,S.value).locale(R.value);function ma(K,o){if(r.unlinkPanels&&o){const c=K?.year()||0,X=K?.month()||0,ke=o.year(),Se=o.month();V.value=c===ke&&X===Se?o.add(1,Sa):o}else V.value=k.value.add(1,Sa),o&&(V.value=V.value.hour(o.hour()).minute(o.minute()).second(o.second()))}return a("set-picker-option",["isValidValue",$]),a("set-picker-option",["parseUserInput",ya]),a("set-picker-option",["formatToString",ha]),a("set-picker-option",["handleClear",qe]),(K,o)=>(j(),W("div",{class:h([e(M).b(),e(y).b(),{"has-sidebar":K.$slots.sidebar||B.value,"has-time":ce.value}])},[q("div",{class:h(e(M).e("body-wrapper"))},[fe(K.$slots,"sidebar",{class:h(e(M).e("sidebar"))}),B.value?(j(),W("div",{key:0,class:h(e(M).e("sidebar"))},[(j(!0),W(Ce,null,Fe(m.value,(c,X)=>(j(),W("button",{key:X,type:"button",class:h(e(M).e("shortcut")),onClick:ke=>e(T)(c)},pe(c.text),11,wr))),128))],2)):de("",!0),q("div",{class:h(e(M).e("body"))},[ce.value?(j(),W("div",{key:0,class:h(e(y).e("time-header"))},[q("span",{class:h(e(y).e("editors-wrap"))},[q("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{disabled:e(O).selecting,placeholder:e(P)("el.datepicker.startDate"),class:h(e(y).e("editor")),"model-value":g.value,"validate-event":!1,onInput:o[0]||(o[0]=c=>da(c,"min")),onChange:o[1]||(o[1]=c=>se(c,"min"))},null,8,["disabled","placeholder","class","model-value"])],2),Ne((j(),W("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(O).selecting,placeholder:e(P)("el.datepicker.startTime"),"model-value":x.value,"validate-event":!1,onFocus:o[2]||(o[2]=c=>Me.value=!0),onInput:o[3]||(o[3]=c=>Qe(c,"min")),onChange:o[4]||(o[4]=c=>Je(c,"min"))},null,8,["class","disabled","placeholder","model-value"]),ne(e(Ha),{visible:Me.value,format:_.value,"datetime-role":"start","parsed-value":k.value,onPick:na},null,8,["visible","format","parsed-value"])],2)),[[e(Ka),Ue]])],2),q("span",null,[ne(e(he),{name:"solid chevron-right"})]),q("span",{class:h([e(y).e("editors-wrap"),"is-right"])},[q("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(O).selecting,placeholder:e(P)("el.datepicker.endDate"),"model-value":F.value,readonly:!e(D),"validate-event":!1,onInput:o[5]||(o[5]=c=>da(c,"max")),onChange:o[6]||(o[6]=c=>se(c,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"])],2),Ne((j(),W("span",{class:h(e(y).e("time-picker-wrap"))},[ne(e(oa),{class:h(e(y).e("editor")),disabled:e(O).selecting,placeholder:e(P)("el.datepicker.endTime"),"model-value":v.value,readonly:!e(D),"validate-event":!1,onFocus:o[7]||(o[7]=c=>e(D)&&($e.value=!0)),onInput:o[8]||(o[8]=c=>Qe(c,"max")),onChange:o[9]||(o[9]=c=>Je(c,"max"))},null,8,["class","disabled","placeholder","model-value","readonly"]),ne(e(Ha),{"datetime-role":"end",visible:$e.value,format:_.value,"parsed-value":V.value,onPick:Ke},null,8,["visible","format","parsed-value"])],2)),[[e(Ka),ba]])],2)],2)):de("",!0),q("div",{class:h([[e(M).e("content"),e(y).e("content")],"is-left"])},[q("div",{class:h(e(y).e("header"))},[q("button",{type:"button",class:h([e(M).e("icon-btn"),"arrow-left"]),"aria-label":e(P)("el.datepicker.prevMonth"),onClick:U},[fe(K.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Sr),K.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!le.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!le.value}],"d-arrow-right"]),"aria-label":e(P)("el.datepicker.nextYear"),onClick:xe},[fe(K.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Pr)):de("",!0),K.unlinkPanels?(j(),W("button",{key:1,type:"button",disabled:!re.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!re.value}],"arrow-right"]),"aria-label":e(P)("el.datepicker.nextMonth"),onClick:Te},[fe(K.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Cr)):de("",!0),q("div",null,pe(w.value),1)],2),ne(Na,{"selection-mode":"range",date:k.value,"min-date":e(D),"max-date":e(p),"range-state":e(O),"disabled-date":e(i),"cell-class-name":e(l),onChangerange:e(A),onPick:we,onSelect:e(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2),q("div",{class:h([[e(M).e("content"),e(y).e("content")],"is-right"])},[q("div",{class:h(e(y).e("header"))},[K.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!le.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!le.value}],"d-arrow-left"]),"aria-label":e(P)("el.datepicker.prevYear"),onClick:je},[fe(K.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,xr)):de("",!0),K.unlinkPanels?(j(),W("button",{key:1,type:"button",disabled:!re.value,class:h([[e(M).e("icon-btn"),{"is-disabled":!re.value}],"arrow-left"]),"aria-label":e(P)("el.datepicker.prevMonth"),onClick:J},[fe(K.$slots,"prev-month",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Mr)):de("",!0),q("button",{type:"button",class:h([e(M).e("icon-btn"),"arrow-right"]),"aria-label":e(P)("el.datepicker.nextMonth"),onClick:ae},[fe(K.$slots,"next-month",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Rr),q("div",null,pe(te.value),1)],2),ne(Na,{"selection-mode":"range",date:V.value,"min-date":e(D),"max-date":e(p),"range-state":e(O),"disabled-date":e(i),"cell-class-name":e(l),onChangerange:e(A),onPick:we,onSelect:e(N)},null,8,["date","min-date","max-date","range-state","disabled-date","cell-class-name","onChangerange","onSelect"])],2)],2)],2),ce.value?(j(),W("div",{key:0,class:h(e(M).e("footer"))},[e(C)?(j(),Le(e(st),{key:0,text:"",size:"sm",class:h(e(M).e("link-btn")),onClick:qe},{default:_e(()=>[pa(pe(e(P)("el.datepicker.clear")),1)]),_:1},8,["class"])):de("",!0),ne(e(st),{plain:"",size:"sm",class:h(e(M).e("link-btn")),disabled:be.value,onClick:o[10]||(o[10]=c=>e(I)(!1))},{default:_e(()=>[pa(pe(e(P)("el.datepicker.confirm")),1)]),_:1},8,["class","disabled"])],2)):de("",!0)],2))}});At.__docgenInfo={exportName:"default",displayName:"panel-date-range",description:"",tags:{},events:[{name:"pick"},{name:"set-picker-option"},{name:"calendar-change"},{name:"panel-change"}],slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-month"},{name:"next-year"},{name:"next-month"},{name:"prev-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-date-range.vue"]};const Vr=Ie({...et}),Ir=["pick","set-picker-option","calendar-change"],$r=({unlinkPanels:t,leftDate:s,rightDate:r})=>{const{t:a}=Ae(),n=()=>{s.value=s.value.subtract(1,"year"),t.value||(r.value=r.value.subtract(1,"year"))},i=()=>{t.value||(s.value=s.value.add(1,"year")),r.value=r.value.add(1,"year")},l=()=>{s.value=s.value.add(1,"year")},b=()=>{r.value=r.value.subtract(1,"year")},C=E(()=>`${s.value.year()} ${a("el.datepicker.year")}`),S=E(()=>`${r.value.year()} ${a("el.datepicker.year")}`),m=E(()=>s.value.year()),d=E(()=>r.value.year()===s.value.year()?s.value.year()+1:r.value.year());return{leftPrevYear:n,rightNextYear:i,leftNextYear:l,rightPrevYear:b,leftLabel:C,rightLabel:S,leftYear:m,rightYear:d}},Er=["onClick"],Tr=["disabled"],Fr=["disabled"],Pa="year",_t=Oe({name:"DatePickerMonthRange",__name:"panel-month-range",props:Vr,emits:Ir,setup(t,{emit:s}){const r=t,a=s,{lang:n}=Ae(G(ca)),i=He("EP_PICKER_BASE"),{shortcuts:l,disabledDate:b}=i.props,C=Ge(i.props,"format"),S=Ge(i.props,"defaultValue"),m=G(H().locale(n.value)),d=G(H().locale(n.value).add(1,Pa)),{minDate:R,maxDate:k,rangeState:V,ppNs:D,drpNs:p,handleChangeRange:O,handleRangeConfirm:M,handleShortcutClick:y,onSelect:A}=Yt(r,{defaultValue:S,leftDate:m,rightDate:d,unit:Pa,onParsedValueChanged:g}),I=E(()=>!!l.length),{leftPrevYear:T,rightNextYear:N,leftNextYear:L,rightPrevYear:P,leftLabel:Y,rightLabel:z,leftYear:w,rightYear:te}=$r({unlinkPanels:Ge(r,"unlinkPanels"),leftDate:m,rightDate:d}),Q=E(()=>r.unlinkPanels&&te.value>w.value+1),oe=(F,x=!0)=>{const v=F.minDate,_=F.maxDate;k.value===_&&R.value===v||(a("calendar-change",[v.toDate(),_&&_.toDate()]),k.value=_,R.value=v,_?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[v?v.format(C.value):"",""]]),x&&M())},ie=()=>{m.value=tt(e(S),{lang:e(n),unit:"year",unlinkPanels:r.unlinkPanels})[0],d.value=m.value.add(1,"year"),a("pick",null)},me=F=>ge(F)?F.map(x=>x.format(C.value)):F.format(C.value),B=F=>ge(F)?F.map(x=>H(x,C.value).locale(n.value)):H(F,C.value).locale(n.value);function g(F,x){if(r.unlinkPanels&&x){const v=F?.year()||0,_=x.year();d.value=v===_?x.add(1,Pa):x}else d.value=m.value.add(1,Pa)}return a("set-picker-option",["isValidValue",ga]),a("set-picker-option",["formatToString",me]),a("set-picker-option",["parseUserInput",B]),a("set-picker-option",["handleClear",ie]),(F,x)=>(j(),W("div",{class:h([e(D).b(),e(p).b(),{"has-sidebar":!!F.$slots.sidebar||I.value}])},[q("div",{class:h(e(D).e("body-wrapper"))},[fe(F.$slots,"sidebar",{class:h(e(D).e("sidebar"))}),I.value?(j(),W("div",{key:0,class:h(e(D).e("sidebar"))},[(j(!0),W(Ce,null,Fe(e(l),(v,_)=>(j(),W("button",{key:_,type:"button",class:h(e(D).e("shortcut")),onClick:f=>e(y)(v)},pe(v.text),11,Er))),128))],2)):de("",!0),q("div",{class:h(e(D).e("body"))},[q("div",{class:h([[e(D).e("content"),e(p).e("content")],"is-left"])},[q("div",{class:h(e(p).e("header"))},[q("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-left"]),onClick:x[0]||(x[0]=(...v)=>e(T)&&e(T)(...v))},[fe(F.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],2),F.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!Q.value,class:h([[e(D).e("icon-btn"),{[e(D).is("disabled")]:!Q.value}],"d-arrow-right"]),onClick:x[1]||(x[1]=(...v)=>e(L)&&e(L)(...v))},[fe(F.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Tr)):de("",!0),q("div",null,pe(e(Y)),1)],2),ne(La,{"selection-mode":"range",date:m.value,"min-date":e(R),"max-date":e(k),"range-state":e(V),"disabled-date":e(b),onChangerange:e(O),onPick:oe,onSelect:e(A)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2),q("div",{class:h([[e(D).e("content"),e(p).e("content")],"is-right"])},[q("div",{class:h(e(p).e("header"))},[F.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!Q.value,class:h([[e(D).e("icon-btn"),{"is-disabled":!Q.value}],"d-arrow-left"]),onClick:x[2]||(x[2]=(...v)=>e(P)&&e(P)(...v))},[fe(F.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,Fr)):de("",!0),q("button",{type:"button",class:h([e(D).e("icon-btn"),"d-arrow-right"]),onClick:x[3]||(x[3]=(...v)=>e(N)&&e(N)(...v))},[fe(F.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],2),q("div",null,pe(e(z)),1)],2),ne(La,{"selection-mode":"range",date:d.value,"min-date":e(R),"max-date":e(k),"range-state":e(V),"disabled-date":e(b),onChangerange:e(O),onPick:oe,onSelect:e(A)},null,8,["date","min-date","max-date","range-state","disabled-date","onChangerange","onSelect"])],2)],2)],2)],2))}});_t.__docgenInfo={name:"DatePickerMonthRange",exportName:"default",displayName:"panel-month-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-month-range.vue"]};const Or=Ie({...et}),Nr=["pick","set-picker-option","calendar-change"],Lr=({unlinkPanels:t,leftDate:s,rightDate:r})=>{const a=()=>{s.value=s.value.subtract(10,"year"),t.value||(r.value=r.value.subtract(10,"year"))},n=()=>{t.value||(s.value=s.value.add(10,"year")),r.value=r.value.add(10,"year")},i=()=>{s.value=s.value.add(10,"year")},l=()=>{r.value=r.value.subtract(10,"year")},b=E(()=>{const d=Math.floor(s.value.year()/10)*10;return`${d}-${d+9}`}),C=E(()=>{const d=Math.floor(r.value.year()/10)*10;return`${d}-${d+9}`}),S=E(()=>Math.floor(s.value.year()/10)*10+9),m=E(()=>Math.floor(r.value.year()/10)*10);return{leftPrevYear:a,rightNextYear:n,leftNextYear:i,rightPrevYear:l,leftLabel:b,rightLabel:C,leftYear:S,rightYear:m}},Yr=["onClick"],Ar=["disabled"],_r=["disabled"],ct="year",Bt=Oe({name:"DatePickerYearRange",__name:"panel-year-range",props:Or,emits:Nr,setup(t,{emit:s}){const r=t,a=s,{lang:n}=Ae(G(ca)),i=G(H().locale(n.value)),l=G(i.value.add(10,"year")),{pickerNs:b}=He(Qa),C=Ve("date-range-picker"),S=E(()=>!!oe.length),m=E(()=>[b.b(),C.b(),{"has-sidebar":!!Za().sidebar||S.value}]),d=E(()=>({content:[b.e("content"),C.e("content"),"is-left"],arrowLeftBtn:[b.e("icon-btn"),"d-arrow-left"],arrowRightBtn:[b.e("icon-btn"),{[b.is("disabled")]:!T.value},"d-arrow-right"]})),R=E(()=>({content:[b.e("content"),C.e("content"),"is-right"],arrowLeftBtn:[b.e("icon-btn"),{"is-disabled":!T.value},"d-arrow-left"],arrowRightBtn:[b.e("icon-btn"),"d-arrow-right"]})),k=Lt(n),{leftPrevYear:V,rightNextYear:D,leftNextYear:p,rightPrevYear:O,leftLabel:M,rightLabel:y,leftYear:A,rightYear:I}=Lr({unlinkPanels:Ge(r,"unlinkPanels"),leftDate:i,rightDate:l}),T=E(()=>r.unlinkPanels&&I.value>A.value+1),N=G(),L=G(),P=G({endDate:null,selecting:!1}),Y=f=>{P.value=f},z=(f,$=!0)=>{const U=f.minDate,ae=f.maxDate;L.value===ae&&N.value===U||(a("calendar-change",[U.toDate(),ae&&ae.toDate()]),L.value=ae,N.value=U,ae?a("set-picker-option",["intermediateValue",null]):a("set-picker-option",["intermediateValue",[U?U.format(me.value):"",""]]),$&&w())},w=(f=!1)=>{ga([N.value,L.value])&&a("pick",[N.value,L.value],f)},te=f=>{P.value.selecting=f,f||(P.value.endDate=null)},Q=He("EP_PICKER_BASE"),{shortcuts:oe,disabledDate:ie}=Q.props,me=Ge(Q.props,"format"),B=Ge(Q.props,"defaultValue"),g=()=>{let f;const $=B.value;if(ge($)){const U=H($[0]);let ae=H($[1]);return r.unlinkPanels||(ae=U.add(10,ct)),[U,ae]}else $?f=H($):f=H();return f=f.locale(n.value),[f,f.add(10,ct)]};Ee(()=>B.value,f=>{if(f){const $=g();i.value=$[0],l.value=$[1]}},{immediate:!0}),Ee(()=>r.parsedValue,f=>{if(f&&f.length===2)if(N.value=f[0],L.value=f[1],i.value=N.value,r.unlinkPanels&&L.value){const $=N.value.year(),U=L.value.year();l.value=$===U?L.value.add(10,"year"):L.value}else l.value=i.value.add(10,"year");else{const $=g();N.value=void 0,L.value=void 0,i.value=$[0],l.value=$[1]}},{immediate:!0});const F=f=>ge(f)?f.map($=>H($,me.value).locale(n.value)):H(f,me.value).locale(n.value),x=f=>ge(f)?f.map($=>$.format(me.value)):f.format(me.value),v=f=>ga(f)&&(ie?!ie(f[0].toDate())&&!ie(f[1].toDate()):!0),_=()=>{const f=g();i.value=f[0],l.value=f[1],L.value=void 0,N.value=void 0,a("pick",null)};return a("set-picker-option",["isValidValue",v]),a("set-picker-option",["parseUserInput",F]),a("set-picker-option",["formatToString",x]),a("set-picker-option",["handleClear",_]),(f,$)=>(j(),W("div",{class:h(m.value)},[q("div",{class:h(e(b).e("body-wrapper"))},[fe(f.$slots,"sidebar",{class:h(e(b).e("sidebar"))}),S.value?(j(),W("div",{key:0,class:h(e(b).e("sidebar"))},[(j(!0),W(Ce,null,Fe(e(oe),(U,ae)=>(j(),W("button",{key:ae,type:"button",class:h(e(b).e("shortcut")),onClick:xe=>e(k)(U)},pe(U.text),11,Yr))),128))],2)):de("",!0),q("div",{class:h(e(b).e("body"))},[q("div",{class:h(d.value.content)},[q("div",{class:h(e(C).e("header"))},[q("button",{type:"button",class:h(d.value.arrowLeftBtn),onClick:$[0]||($[0]=(...U)=>e(V)&&e(V)(...U))},[fe(f.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],2),f.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!T.value,class:h(d.value.arrowRightBtn),onClick:$[1]||($[1]=(...U)=>e(p)&&e(p)(...U))},[fe(f.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],10,Ar)):de("",!0),q("div",null,pe(e(M)),1)],2),ne(Ya,{"selection-mode":"range",date:i.value,"min-date":N.value,"max-date":L.value,"range-state":P.value,"disabled-date":e(ie),onChangerange:Y,onPick:z,onSelect:te},null,8,["date","min-date","max-date","range-state","disabled-date"])],2),q("div",{class:h(R.value.content)},[q("div",{class:h(e(C).e("header"))},[f.unlinkPanels?(j(),W("button",{key:0,type:"button",disabled:!T.value,class:h(R.value.arrowLeftBtn),onClick:$[2]||($[2]=(...U)=>e(O)&&e(O)(...U))},[fe(f.$slots,"prev-year",{},()=>[ne(e(he),{name:"solid chevron-left"})])],10,_r)):de("",!0),q("button",{type:"button",class:h(R.value.arrowRightBtn),onClick:$[3]||($[3]=(...U)=>e(D)&&e(D)(...U))},[fe(f.$slots,"next-year",{},()=>[ne(e(he),{name:"solid chevron-right"})])],2),q("div",null,pe(e(y)),1)],2),ne(Ya,{"selection-mode":"range",date:l.value,"min-date":N.value,"max-date":L.value,"range-state":P.value,"disabled-date":e(ie),onChangerange:Y,onPick:z,onSelect:te},null,8,["date","min-date","max-date","range-state","disabled-date"])],2)],2)],2)],2))}});Bt.__docgenInfo={name:"DatePickerYearRange",exportName:"default",displayName:"panel-year-range",description:"",tags:{},slots:[{name:"sidebar",scoped:!0,bindings:[{name:"class",title:"binding"}]},{name:"prev-year"},{name:"next-year"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/date-picker/src/date-picker-com/panel-year-range.vue"]};const Br=function(t){switch(t){case"daterange":case"datetimerange":return At;case"monthrange":return _t;case"yearrange":return Bt;default:return Nt}};H.extend(Nn);H.extend(Fn);H.extend(xt);H.extend(Yn);H.extend(_n);H.extend(jn);H.extend(Gn);H.extend(Un);const jr=Oe({name:"GDatePicker",install:null,props:Kn,emits:["update:modelValue"],setup(t,{expose:s,emit:r,slots:a}){const n=Ve("picker-panel");Ta("ElPopperOptions",ea(Ge(t,"popperOptions"))),Ta(Qa,{slots:a,pickerNs:n});const i=G();s({focus:()=>{i.value?.focus()},blur:()=>{i.value?.blur()},handleOpen:()=>{i.value?.handleOpen()},handleClose:()=>{i.value?.handleClose()}});const b=C=>{r("update:modelValue",C)};return()=>{const C=t.format??(cn[t.type]||dn),S=Br(t.type);return fa(fa(mn,{...t,format:C,type:t.type,ref:i,"onUpdate:modelValue":b},{default:m=>fa(S,{...m},{"prev-month":a["prev-month"],"next-month":a["next-month"],"prev-year":a["prev-year"],"next-year":a["next-year"]}),"range-separator":a["range-separator"]}))}}}),qr=Dt(jr),dt=["hours","minutes","seconds"],Gr="HH:mm:ss",Ba=(t,s)=>[t>0?t-1:void 0,t,t<s?t+1:void 0],mt=function(t,s){const r=ot(t),a=ot(s);return r&&a?t.getTime()===s.getTime():!r&&!a?t===s:!1},pt=function(t,s){const r=ge(t),a=ge(s);return r&&a?t.length!==s.length?!1:t.every((n,i)=>mt(n,s[i])):!r&&!a?mt(t,s):!1},ft=function(t,s,r){const a=kt(s)||s==="x"?H(t).locale(r):H(t,s).locale(r);return a.isValid()?a:void 0},vt=function(t,s,r){return kt(s)?t:s==="x"?+t:H(t).locale(r).format(s)},ja=(t,s)=>{const r=[],a=s?.();for(let n=0;n<t;n++)r.push(a?.includes(n)??!1);return r},Ca=t=>ge(t)?t.map(s=>s.toDate()):t.toDate(),jt=Ie({disabledHours:{type:ue(Function)},disabledMinutes:{type:ue(Function)},disabledSeconds:{type:ue(Function)}}),qt=Ie({visible:Boolean,actualVisible:{type:Boolean,default:void 0},format:{type:String,default:""}}),Gt=Ie({id:{type:ue([Array,String])},name:{type:ue([Array,String])},popperClass:{type:String,default:""},format:String,valueFormat:String,dateFormat:String,timeFormat:String,type:{type:String,default:""},clearable:{type:Boolean,default:!0},clearIcon:{type:ue([String,Object,Boolean]),default:!0},editable:{type:Boolean,default:!0},prefixIcon:{type:ue(String),default:""},readonly:Boolean,disabled:Boolean,label:{type:String,default:""},helpText:{type:String,default:""},messageError:{type:String,default:""},popperOptions:{type:ue(Object),default:()=>({})},modelValue:{type:ue([Date,Array,String,Number]),default:""},rangeSeparator:{type:String,default:"-"},startPlaceholder:String,endPlaceholder:String,defaultValue:{type:ue([Date,Array])},defaultTime:{type:ue([Date,Array])},isRange:Boolean,...jt,disabledDate:{type:Function},cellClassName:{type:Function},shortcuts:{type:Array,default:()=>[]},arrowControl:Boolean,tabindex:{type:ue([String,Number]),default:0},validateEvent:{type:Boolean,default:!0},unlinkPanels:Boolean,placement:{type:ue(String),values:yn,default:"bottom"},fallbackPlacements:{type:ue(Array),default:["bottom","top","right","left"]},...fn,...pn(["ariaLabel"]),showNow:{type:Boolean,default:!0}}),Hr=Ie({id:{type:ue(Array)},name:{type:ue(Array)},modelValue:{type:ue([Array,String])},startPlaceholder:String,endPlaceholder:String,label:String}),Ur=["id","name","placeholder","value"],Kr=["id","name","placeholder","value"],Ht=Oe({name:"PickerRangeTrigger",inheritAttrs:!1,__name:"picker-range-trigger",props:Hr,emits:["mouseenter","mouseleave","click","touchstart","focus","blur","startInput","endInput","startChange","endChange"],setup(t,{expose:s,emit:r}){const a=t,n=r,i=Mn(),l=Ve("input"),b=Ve("date"),C=Ve("range"),S=G(void 0),m=G(null),d=G(),R=G(),{wrapperRef:k,isFocused:V}=St(d),D=w=>{n("click",w)},p=w=>{n("mouseenter",w)},O=w=>{n("mouseleave",w)},M=w=>{n("mouseenter",w)},y=w=>{n("startInput",w)},A=w=>{n("endInput",w)},I=w=>{n("startChange",w)},T=w=>{n("endChange",w)},N=()=>{d.value?.focus()},L=()=>{d.value?.blur(),R.value?.blur()},P=E(()=>{const w=!!Y.value||V.value;return{left:w?void 0:`calc(${S.value} + 16px)`,zIndex:w?void 0:10}}),Y=E(()=>Pt(a.modelValue)?"":String(a.modelValue));return wt(m,()=>{requestAnimationFrame(()=>{const w=m.value?.getBoundingClientRect().width;S.value=`${w}px`})}),s({focus:N,blur:L}),(w,te)=>(j(),W("div",{ref_key:"wrapperRef",ref:k,class:h([e(b).is("active",e(V)),w.$attrs.class]),style:Da(w.$attrs.style),onClick:D,onMouseenter:p,onMouseleave:O,onTouchstartPassive:M},[fe(w.$slots,"prefix"),w.modelValue?(j(),W("div",{key:0,class:h([e(l).e("label")]),style:Da(P.value)},pe(w.label),7)):de("",!0),q("input",Ga(e(i),{id:w.id&&w.id[0],ref_key:"inputRef",ref:d,name:w.name&&w.name[0],placeholder:w.startPlaceholder,value:w.modelValue&&w.modelValue[0],class:e(C).b("input"),onInput:y,onChange:I}),null,16,Ur),fe(w.$slots,"range-separator"),q("input",Ga(e(i),{id:w.id&&w.id[1],ref_key:"endInputRef",ref:R,name:w.name&&w.name[1],placeholder:w.endPlaceholder,value:w.modelValue&&w.modelValue[1],class:e(C).b("input"),onInput:A,onChange:T}),null,16,Kr),fe(w.$slots,"suffix")],38))}});Ht.__docgenInfo={name:"PickerRangeTrigger",exportName:"default",displayName:"picker-range-trigger",description:"",tags:{},expose:[{name:"focus"},{name:"blur"}],events:[{name:"mouseenter"},{name:"mouseleave"},{name:"click"},{name:"touchstart"},{name:"focus"},{name:"blur"},{name:"startInput"},{name:"endInput"},{name:"startChange"},{name:"endChange"}],slots:[{name:"prefix"},{name:"range-separator"},{name:"suffix"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker-range-trigger.vue"]};const Ut=Oe({name:"Picker",__name:"picker",props:Gt,emits:["update:modelValue","change","focus","blur","clear","calendar-change","panel-change","visible-change","keydown"],setup(t,{expose:s,emit:r}){const a=t,n=r,i=Ja(),{lang:l}=Ae(),b=Ve("date"),C=Ve("input"),S=Ve("range"),m=G(void 0),d=G(null),{form:R,formItem:k}=Cn(),V=He("ElPopperOptions",{}),{valueOnClear:D}=vn(a,null),p=G(),O=G(),M=G(!1),y=G(!1),A=G(null);let I=!1;const{isFocused:T,handleFocus:N,handleBlur:L}=St(O,{beforeFocus(){return a.readonly||$.value},afterFocus(){M.value=!0},beforeBlur(u){return!I&&p.value?.isFocusInsideContent(u)},afterBlur(){Qe(),M.value=!1,I=!1,a.validateEvent&&k?.validate("blur").catch(u=>it())}}),P=E(()=>{const u=!!Y.value||T.value;return{left:u?void 0:`calc(${m.value} + 16px)`,zIndex:u?void 0:10}}),Y=E(()=>Pt(a.modelValue)?"":String(a.modelValue)),z=()=>{if(!a.prefixIcon){m.value="0";return}requestAnimationFrame(()=>{const u=d.value?.getBoundingClientRect().width;m.value=`${u}px`})},w=E(()=>[b.b("editor"),b.bm("editor",a.type),C.e("wrapper"),b.is("disabled",$.value),b.is("active",M.value),S.b("editor"),i.class]),te=E(()=>[C.e("icon"),S.e("close-icon"),le.value?"":S.e("close-icon--hidden")]);Ee(M,u=>{u?Be(()=>{u&&(A.value=a.modelValue)}):(se.value=null,c.value.intermediateValue=null,Be(()=>{Q(a.modelValue)}))});const Q=(u,ee)=>{(ee||!pt(u,A.value))&&(n("change",u),a.validateEvent&&k?.validate("change").catch(De=>it()))},oe=u=>{if(!pt(a.modelValue,u)){let ee;ge(u)?ee=u.map(De=>vt(De,a.valueFormat,l.value)):u&&(ee=vt(u,a.valueFormat,l.value)),n("update:modelValue",u&&ee,l.value)}},ie=u=>{n("keydown",u)},me=E(()=>O.value?Array.from(O.value.$el.querySelectorAll("input")):[]),B=(u,ee,De)=>{const Re=me.value;Re.length&&(!De||De==="min"?(Re[0].setSelectionRange(u,ee),Re[0].focus()):De==="max"&&(Re[1].setSelectionRange(u,ee),Re[1].focus()))},g=(u="",ee=!1)=>{M.value=ee;let De;ge(u)?De=u.map(Re=>Re.toDate()):De=u&&u.toDate(),se.value=null,c.value.intermediateValue=null,oe(De)},F=()=>{y.value=!0},x=()=>{n("visible-change",!0)},v=()=>{y.value=!1,M.value=!1,n("visible-change",!1)},_=()=>{M.value=!0},f=()=>{M.value=!1},$=E(()=>a.disabled||R?.disabled),U=E(()=>{let u;if(ce.value?c.value.getDefaultValue&&(u=c.value.getDefaultValue()):ge(a.modelValue)?u=a.modelValue.map(ee=>ft(ee,a.valueFormat,l.value)):u=ft(a.modelValue,a.valueFormat,l.value),c.value.getRangeAvailableTime){const ee=c.value.getRangeAvailableTime(u);Rn(ee,u)||(u=ee,ce.value||oe(Ca(u)))}return ge(u)&&u.some(ee=>!ee)&&(u=[]),u}),ae=E(()=>{if(!c.value.panelReady)return"";const u=na(U.value);if(ge(se.value))return[se.value[0]||u&&u[0]||"",se.value[1]||u&&u[1]||""];if(se.value!==null)return se.value;const ee=c.value.intermediateValue;return ee&&Ue.value&&M.value?ee:!Te.value&&ce.value||!M.value&&ce.value?"":u?je.value||J.value||Z.value?u.join(", "):u:""}),xe=E(()=>a.type.includes("time")),Te=E(()=>a.type.startsWith("time")),je=E(()=>a.type==="dates"),J=E(()=>a.type==="months"),Z=E(()=>a.type==="years"),re=E(()=>a.prefixIcon||(xe.value?"regular clock":"regular calendar")),le=G(!1),be=u=>{a.readonly||$.value||(le.value&&(u.stopPropagation(),c.value.handleClear?c.value.handleClear():oe(D.value),Q(D.value,!0),le.value=!1,v()),n("clear"))},ce=E(()=>{const{modelValue:u}=a;return!u||ge(u)&&!u.filter(Boolean).length}),ye=async u=>{a.readonly||$.value||(u.target?.tagName!=="INPUT"||T.value)&&(M.value=!0)},we=()=>{a.readonly||$.value||!ce.value&&a.clearable&&(le.value=!0)},Me=()=>{le.value=!1},$e=u=>{a.readonly||$.value||(u.touches[0].target?.tagName!=="INPUT"||T.value)&&(M.value=!0)},Ue=E(()=>a.type.includes("range")),ba=E(()=>e(p)?.popperRef?.contentRef),da=Sn(O,u=>{const ee=e(ba),De=Pn(O);ee&&(u.target===ee||u.composedPath().includes(ee))||u.target===De||De&&u.composedPath().includes(De)||(M.value=!1)});an(()=>{da?.()});const se=G(null);wt(d,z);const Qe=()=>{if(se.value){const u=Je(ae.value);u&&Ke(u)&&(oe(Ca(u)),se.value=null)}se.value===""&&(oe(D.value),Q(D.value),se.value=null)},Je=u=>u?c.value.parseUserInput(u):null,na=u=>u?c.value.formatToString(u):null,Ke=u=>c.value.isValidValue(u),qe=async u=>{if(a.readonly||$.value)return;const{code:ee}=u;if(ie(u),ee===Pe.esc){M.value===!0&&(M.value=!1,u.preventDefault(),u.stopPropagation());return}if(ee===Pe.down&&(c.value.handleFocusPicker&&(u.preventDefault(),u.stopPropagation()),M.value===!1&&(M.value=!0,await Be()),c.value.handleFocusPicker)){c.value.handleFocusPicker();return}if(ee===Pe.tab){I=!0;return}if(ee===Pe.enter||ee===Pe.numpadEnter){(se.value===null||se.value===""||Ke(Je(ae.value)))&&(Qe(),M.value=!1),u.stopPropagation();return}if(se.value){u.stopPropagation();return}c.value.handleKeydownInput&&c.value.handleKeydownInput(u)},ha=u=>{se.value=u,M.value||(M.value=!0)},ya=u=>{const ee=u.target;se.value?se.value=[ee.value,se.value[1]]:se.value=[ee.value,null]},ma=u=>{const ee=u.target;se.value?se.value=[se.value[0],ee.value]:se.value=[null,ee.value]},K=()=>{const u=se.value,ee=Je(u&&u[0]),De=e(U);if(ee&&ee.isValid()){se.value=[na(ee),ae.value?.[1]||null];const Re=[ee,De&&(De[1]||null)];Ke(Re)&&(oe(Ca(Re)),se.value=null)}},o=()=>{const u=e(se),ee=Je(u&&u[1]),De=e(U);if(ee&&ee.isValid()){se.value=[e(ae)?.[0]||null,na(ee)];const Re=[De&&De[0],ee];Ke(Re)&&(oe(Ca(Re)),se.value=null)}},c=G({}),X=u=>{c.value[u[0]]=u[1],c.value.panelReady=!0},ke=u=>{n("calendar-change",u)},Se=(u,ee,De)=>{n("panel-change",u,ee,De)},ra=()=>{O.value?.focus()},ka=()=>{O.value?.blur()};return Ta("EP_PICKER_BASE",{props:a}),s({focus:ra,blur:ka,handleOpen:_,handleClose:f,onPick:g}),(u,ee)=>(j(),Le(e(kn),Ga({ref_key:"refPopper",ref:p,visible:M.value,pure:"",trigger:"click"},u.$attrs,{role:"dialog",teleported:"",transition:`${e(b).namespace.value}-zoom-in-top`,"popper-class":[`${e(b).namespace.value}-picker__popper`],"popper-options":e(V),"fallback-placements":u.fallbackPlacements,"gpu-acceleration":!1,placement:u.placement,"stop-popper-mouse-event":!1,"hide-after":0,persistent:"",onBeforeShow:F,onShow:x,onHide:v}),{default:_e(()=>[Ue.value?(j(),Le(Ht,{key:1,id:u.id,ref_key:"inputRef",ref:O,"model-value":ae.value,name:u.name,disabled:$.value,readonly:!u.editable||u.readonly,label:u.label,"start-placeholder":u.startPlaceholder,"end-placeholder":u.endPlaceholder,class:h(w.value),style:Da(u.$attrs.style),"aria-label":u.ariaLabel,tabindex:u.tabindex,autocomplete:"off",role:"combobox",onClick:ye,onFocus:e(N),onBlur:e(L),onStartInput:ya,onStartChange:K,onEndInput:ma,onEndChange:o,onMousedown:ye,onMouseenter:we,onMouseleave:Me,onTouchstartPassive:$e,onKeydown:qe},{prefix:_e(()=>[re.value?(j(),Le(e(he),{key:0,class:h([e(C).e("icon"),e(S).e("icon")]),name:re.value},null,8,["class","name"])):de("",!0)]),"range-separator":_e(()=>[fe(u.$slots,"range-separator",{},()=>[q("span",{class:h(e(S).b("separator"))},pe(u.rangeSeparator),3)])]),suffix:_e(()=>[u.clearIcon?(j(),Le(e(he),{key:0,class:h(te.value),onMousedown:We(e(lt),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):de("",!0)]),_:3},8,["id","model-value","name","disabled","readonly","label","start-placeholder","end-placeholder","class","style","aria-label","tabindex","onFocus","onBlur"])):(j(),Le(e(oa),{key:0,id:u.id,ref_key:"inputRef",ref:O,"container-role":"combobox","model-value":ae.value,name:u.name,disabled:$.value,label:u.label,class:h([e(b).b("editor"),e(b).bm("editor",u.type),u.$attrs.class]),style:Da(u.$attrs.style),readonly:!u.editable||u.readonly||je.value||J.value||Z.value||u.type==="week","aria-label":u.ariaLabel,tabindex:u.tabindex,"validate-event":!1,helpText:u.helpText,messageError:u.messageError,onInput:ha,onFocus:e(N),onBlur:e(L),onKeydown:qe,onChange:Qe,onMousedown:ye,onMouseenter:we,onMouseleave:Me,onTouchstartPassive:$e,onClick:ee[0]||(ee[0]=We(()=>{},["stop"]))},{prefix:_e(()=>[re.value?(j(),Le(e(he),{key:0,class:h([e(C).e("icon"),"pr-2"]),onMousedown:We(ye,["prevent"]),onTouchstartPassive:$e,name:re.value},null,8,["class","name"])):de("",!0)]),suffix:_e(()=>[le.value&&u.clearIcon?(j(),Le(e(he),{key:0,class:h(`${e(C).e("icon")} clear-icon`),onMousedown:We(e(lt),["prevent"]),onClick:be,name:"regular times"},null,8,["class","onMousedown"])):de("",!0)]),default:_e(()=>[q("span",null,pe(u.label),1),u.label?(j(),W("div",{key:0,class:h([e(C).e("label")]),style:Da(P.value)},pe(u.label),7)):de("",!0)]),_:1},8,["id","model-value","name","disabled","label","class","style","readonly","aria-label","tabindex","helpText","messageError","onFocus","onBlur"]))]),content:_e(()=>[fe(u.$slots,"default",{visible:M.value,actualVisible:y.value,parsedValue:U.value,format:u.format,dateFormat:u.dateFormat,timeFormat:u.timeFormat,unlinkPanels:u.unlinkPanels,type:u.type,defaultValue:u.defaultValue,showNow:u.showNow,onPick:g,onSelectRange:B,onSetPickerOption:X,onCalendarChange:ke,onPanelChange:Se,onMousedown:ee[1]||(ee[1]=We(()=>{},["stop"]))})]),_:3},16,["visible","transition","popper-class","popper-options","fallback-placements","placement"]))}});Ut.__docgenInfo={name:"Picker",exportName:"default",displayName:"picker",description:"",tags:{},expose:[{name:"focus",tags:[{title:"description",content:"focus input box."}]},{name:"blur",tags:[{title:"description",content:"blur input box."}]},{name:"handleOpen",tags:[{title:"description",content:"opens picker"}]},{name:"handleClose",tags:[{title:"description",content:"closes picker"}]},{name:"onPick",tags:[{title:"description",content:"pick item manually"}]}],events:[{name:"update:modelValue"},{name:"change"},{name:"focus"},{name:"blur"},{name:"clear"},{name:"calendar-change"},{name:"panel-change"},{name:"visible-change"},{name:"keydown"}],slots:[{name:"range-separator"},{name:"default",scoped:!0,bindings:[{name:"visible",title:"binding"},{name:"actual-visible",title:"binding"},{name:"parsed-value",title:"binding"},{name:"format",title:"binding"},{name:"date-format",title:"binding"},{name:"time-format",title:"binding"},{name:"unlink-panels",title:"binding"},{name:"type",title:"binding"},{name:"default-value",title:"binding"},{name:"show-now",title:"binding"}]}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/common/picker.vue"]};const zr=Ie({...qt,datetimeRole:String,parsedValue:{type:ue(Object)}}),Kt=({getAvailableHours:t,getAvailableMinutes:s,getAvailableSeconds:r})=>{const a=(l,b,C,S)=>{const m={hour:t,minute:s,second:r};let d=l;return["hour","minute","second"].forEach(R=>{if(m[R]){let k;const V=m[R];switch(R){case"minute":{k=V(d.hour(),b,S);break}case"second":{k=V(d.hour(),d.minute(),b,S);break}default:{k=V(b,S);break}}if(k?.length&&!k.includes(d[R]())){const D=C?0:k.length-1;d=d[R](k[D])}}}),d},n={};return{timePickerOptions:n,getAvailableTime:a,onSetOption:([l,b])=>{n[l]=b}}},qa=t=>{const s=(a,n)=>a||n,r=a=>a!==!0;return t.map(s).filter(r)},zt=(t,s,r)=>({getHoursList:(l,b)=>ja(24,t&&(()=>t?.(l,b))),getMinutesList:(l,b,C)=>ja(60,s&&(()=>s?.(l,b,C))),getSecondsList:(l,b,C,S)=>ja(60,r&&(()=>r?.(l,b,C,S)))}),Wt=(t,s,r)=>{const{getHoursList:a,getMinutesList:n,getSecondsList:i}=zt(t,s,r);return{getAvailableHours:(S,m)=>qa(a(S,m)),getAvailableMinutes:(S,m,d)=>qa(n(S,m,d)),getAvailableSeconds:(S,m,d,R)=>qa(i(S,m,d,R))}},Jt=t=>{const s=G(t.parsedValue);return Ee(()=>t.visible,r=>{r||(s.value=t.parsedValue)}),s},Wr=Ie({role:{type:String,required:!0},spinnerDate:{type:ue(Object),required:!0},showSeconds:{type:Boolean,default:!0},arrowControl:Boolean,amPmMode:{type:ue(String),default:""},...jt}),Jr=["onClick"],Zr=["onMouseenter"],Aa=Oe({__name:"basic-time-spinner",props:Wr,emits:["change","select-range","set-option"],setup(t,{emit:s}){const r=t,a=He("EP_PICKER_BASE"),{isRange:n}=a.props,i=s,l=Ve("time"),{getHoursList:b,getMinutesList:C,getSecondsList:S}=zt(r.disabledHours,r.disabledMinutes,r.disabledSeconds);let m=!1;const d=G(),R=G(),k=G(),V=G(),D={hours:R,minutes:k,seconds:V},p=E(()=>r.showSeconds?dt:dt.slice(0,2)),O=E(()=>{const{spinnerDate:v}=r,_=v.hour(),f=v.minute(),$=v.second();return{hours:_,minutes:f,seconds:$}}),M=E(()=>{const{hours:v,minutes:_}=e(O),{role:f,spinnerDate:$}=r,U=n?void 0:$;return{hours:b(f,U),minutes:C(v,f,U),seconds:S(v,_,f,U)}}),y=E(()=>{const{hours:v,minutes:_,seconds:f}=e(O);return{hours:Ba(v,23),minutes:Ba(_,59),seconds:Ba(f,59)}}),A=In(v=>{m=!1,N(v)},200),I=v=>{if(!!!r.amPmMode)return"";const f=r.amPmMode==="A";let $=v<12?" am":" pm";return f&&($=$.toUpperCase()),$},T=v=>{let _;switch(v){case"hours":_=[0,2];break;case"minutes":_=[3,5];break;case"seconds":_=[6,8];break}const[f,$]=_;i("select-range",f,$),d.value=v},N=v=>{Y(v,e(O)[v])},L=()=>{N("hours"),N("minutes"),N("seconds")},P=v=>v.querySelector(`.${l.namespace.value}-scrollbar__wrap`),Y=(v,_)=>{if(r.arrowControl)return;const f=e(D[v]);f&&f.$el&&(P(f.$el).scrollTop=Math.max(0,_*z(v)))},z=v=>{const f=e(D[v])?.$el.querySelector("li");return f&&Number.parseFloat(bn(f,"height"))||0},w=()=>{Q(1)},te=()=>{Q(-1)},Q=v=>{d.value||T("hours");const _=d.value,f=e(O)[_],$=d.value==="hours"?24:60,U=oe(_,f,v,$);ie(_,U),Y(_,U),Be(()=>T(_))},oe=(v,_,f,$)=>{let U=(_+f+$)%$;const ae=e(M)[v];for(;ae[U]&&U!==_;)U=(U+f+$)%$;return U},ie=(v,_)=>{if(e(M)[v][_])return;const{hours:U,minutes:ae,seconds:xe}=e(O);let Te;switch(v){case"hours":Te=r.spinnerDate.hour(_).minute(ae).second(xe);break;case"minutes":Te=r.spinnerDate.hour(U).minute(_).second(xe);break;case"seconds":Te=r.spinnerDate.hour(U).minute(ae).second(_);break}i("change",Te)},me=(v,{value:_,disabled:f})=>{f||(ie(v,_),T(v),Y(v,_))},B=v=>{const _=e(D[v]);if(!_)return;m=!0,A(v);const f=Math.min(Math.round((P(_.$el).scrollTop-(g(v)*.5-10)/z(v)+3)/z(v)),v==="hours"?23:59);ie(v,f)},g=v=>e(D[v]).$el.offsetHeight,F=()=>{const v=_=>{const f=e(D[_]);f&&f.$el&&(P(f.$el).onscroll=()=>{B(_)})};v("hours"),v("minutes"),v("seconds")};tn(()=>{Be(()=>{!r.arrowControl&&F(),L(),r.role==="start"&&T("hours")})});const x=(v,_)=>{D[_].value=v??void 0};return i("set-option",[`${r.role}_scrollDown`,Q]),i("set-option",[`${r.role}_emitSelectRange`,T]),Ee(()=>r.spinnerDate,()=>{m||L()}),(v,_)=>(j(),W("div",{class:h([e(l).b("spinner"),{"has-seconds":v.showSeconds}])},[v.arrowControl?de("",!0):(j(!0),W(Ce,{key:0},Fe(p.value,f=>(j(),Le(e(Vn),{key:f,ref_for:!0,ref:$=>x($,f),class:h(e(l).be("spinner","wrapper")),"wrap-style":"max-height: inherit;","view-class":e(l).be("spinner","list"),noresize:"",tag:"ul",onMouseenter:$=>T(f),onMousemove:$=>N(f)},{default:_e(()=>[(j(!0),W(Ce,null,Fe(M.value[f],($,U)=>(j(),W("li",{key:U,class:h([e(l).be("spinner","item"),e(l).is("active",U===O.value[f]),e(l).is("disabled",$)]),onClick:ae=>me(f,{value:U,disabled:$})},[f==="hours"?(j(),W(Ce,{key:0},[pa(pe(("0"+(v.amPmMode?U%12||12:U)).slice(-2))+pe(I(U)),1)],64)):(j(),W(Ce,{key:1},[pa(pe(("0"+U).slice(-2)),1)],64))],10,Jr))),128))]),_:2},1032,["class","view-class","onMouseenter","onMousemove"]))),128)),v.arrowControl?(j(!0),W(Ce,{key:1},Fe(p.value,f=>(j(),W("div",{key:f,class:h([e(l).be("spinner","wrapper"),e(l).is("arrow")]),onMouseenter:$=>T(f)},[Ne(ne(e(he),{name:"regular chevron-up"},null,512),[[e(ut),te]]),Ne(ne(e(he),{name:"regular chevron-down"},null,512),[[e(ut),w]]),q("ul",{class:h(e(l).be("spinner","list"))},[(j(!0),W(Ce,null,Fe(y.value[f],($,U)=>(j(),W("li",{key:U,class:h([e(l).be("spinner","item"),e(l).is("active",$===O.value[f]),e(l).is("disabled",M.value[f][$])])},[e(gn)($)?(j(),W(Ce,{key:0},[f==="hours"?(j(),W(Ce,{key:0},[pa(pe(("0"+(v.amPmMode?$%12||12:$)).slice(-2))+pe(I($)),1)],64)):(j(),W(Ce,{key:1},[pa(pe(("0"+$).slice(-2)),1)],64))],64)):de("",!0)],2))),128))],2)],42,Zr))),128)):de("",!0)],2))}});Aa.__docgenInfo={exportName:"default",displayName:"basic-time-spinner",description:"",tags:{},events:[{name:"change"},{name:"select-range"},{name:"set-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]};const Zt=Oe({__name:"panel-time-pick",props:zr,emits:["pick","select-range","set-picker-option"],setup(t,{emit:s}){const r=t,a=s,n=He("EP_PICKER_BASE"),{arrowControl:i,disabledHours:l,disabledMinutes:b,disabledSeconds:C,defaultValue:S}=n.props,{getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:R}=Wt(l,b,C),k=Ve("time"),{lang:V}=Ae(),D=G([0,2]),p=Jt(r),O=E(()=>xn(r.actualVisible)?`${k.namespace.value}-zoom-in-top`:""),M=E(()=>r.format.includes("ss")),y=E(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),A=B=>{const g=H(B).locale(V.value),F=Q(g);return g.isSame(F)},I=()=>{a("pick",p.value,!1)},T=(B=!1,g=!1)=>{g||a("pick",r.parsedValue,B)},N=B=>{if(!r.visible)return;const g=Q(B).millisecond(0);a("pick",g,!0)},L=(B,g)=>{a("select-range",B,g),D.value=[B,g]},P=B=>{const g=[0,3].concat(M.value?[6]:[]),F=["hours","minutes"].concat(M.value?["seconds"]:[]),v=(g.indexOf(D.value[0])+B+g.length)%g.length;z.start_emitSelectRange(F[v])},Y=B=>{const g=B.code,{left:F,right:x,up:v,down:_}=Pe;if([F,x].includes(g)){P(g===F?-1:1),B.preventDefault();return}if([v,_].includes(g)){const f=g===v?-1:1;z.start_scrollDown(f),B.preventDefault();return}},{timePickerOptions:z,onSetOption:w,getAvailableTime:te}=Kt({getAvailableHours:m,getAvailableMinutes:d,getAvailableSeconds:R}),Q=B=>te(B,r.datetimeRole||"",!0),oe=B=>B?H(B,r.format).locale(V.value):null,ie=B=>B?B.format(r.format):null,me=()=>H(S).locale(V.value);return a("set-picker-option",["isValidValue",A]),a("set-picker-option",["formatToString",ie]),a("set-picker-option",["parseUserInput",oe]),a("set-picker-option",["handleKeydownInput",Y]),a("set-picker-option",["getRangeAvailableTime",Q]),a("set-picker-option",["getDefaultValue",me]),(B,g)=>(j(),Le(nn,{name:O.value},{default:_e(()=>[B.actualVisible||B.visible?(j(),W("div",{key:0,class:h(e(k).b("panel"))},[q("div",{class:h([e(k).be("panel","content"),{"has-seconds":M.value}])},[ne(Aa,{ref:"spinner",role:B.datetimeRole||"start","arrow-control":e(i),"show-seconds":M.value,"am-pm-mode":y.value,"spinner-date":B.parsedValue,"disabled-hours":e(l),"disabled-minutes":e(b),"disabled-seconds":e(C),onChange:N,onSetOption:e(w),onSelectRange:L},null,8,["role","arrow-control","show-seconds","am-pm-mode","spinner-date","disabled-hours","disabled-minutes","disabled-seconds","onSetOption"])],2),q("div",{class:h(e(k).be("panel","footer"))},[q("button",{type:"button",class:h([e(k).be("panel","btn"),"cancel"]),onClick:I}," Cancelar ",2),q("button",{type:"button",class:h([e(k).be("panel","btn"),"confirm"]),onClick:g[0]||(g[0]=F=>T())}," Ok ",2)],2)],2)):de("",!0)]),_:1},8,["name"]))}});Zt.__docgenInfo={exportName:"default",displayName:"panel-time-pick",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-pick.vue"]};const Qr=Ie({...qt,parsedValue:{type:ue(Array)}}),Xr=["disabled"],Qt=Oe({__name:"panel-time-range",props:Qr,emits:["pick","select-range","set-picker-option"],setup(t,{emit:s}){const r=t,a=s,n=(J,Z)=>{const re=[];for(let le=J;le<=Z;le++)re.push(le);return re},{lang:i}=Ae(),l=Ve("time"),b=Ve("picker"),C=He("EP_PICKER_BASE"),{arrowControl:S,disabledHours:m,disabledMinutes:d,disabledSeconds:R,defaultValue:k}=C.props,V=E(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",S),A.value?"has-seconds":""]),D=E(()=>[l.be("range-picker","body"),l.be("panel","content"),l.is("arrow",S),A.value?"has-seconds":""]),p=E(()=>r.parsedValue[0]),O=E(()=>r.parsedValue[1]),M=Jt(r),y=()=>{a("pick",M.value,!1)},A=E(()=>r.format.includes("ss")),I=E(()=>r.format.includes("A")?"A":r.format.includes("a")?"a":""),T=(J=!1)=>{a("pick",[p.value,O.value],J)},N=J=>{Y(J.millisecond(0),O.value)},L=J=>{Y(p.value,J.millisecond(0))},P=J=>{const Z=J.map(le=>H(le).locale(i.value)),re=x(Z);return Z[0].isSame(re[0])&&Z[1].isSame(re[1])},Y=(J,Z)=>{r.visible&&a("pick",[J,Z],!0)},z=E(()=>p.value>O.value),w=G([0,2]),te=(J,Z)=>{a("select-range",J,Z,"min"),w.value=[J,Z]},Q=E(()=>A.value?11:8),oe=(J,Z)=>{a("select-range",J,Z,"max");const re=e(Q);w.value=[J+re,Z+re]},ie=J=>{const Z=A.value?[0,3,6,11,14,17]:[0,3,8,11],re=["hours","minutes"].concat(A.value?["seconds"]:[]),be=(Z.indexOf(w.value[0])+J+Z.length)%Z.length,ce=Z.length/2;be<ce?$.start_emitSelectRange(re[be]):$.end_emitSelectRange(re[be-ce])},me=J=>{const Z=J.code,{left:re,right:le,up:be,down:ce}=Pe;if([re,le].includes(Z)){ie(Z===re?-1:1),J.preventDefault();return}if([be,ce].includes(Z)){const ye=Z===be?-1:1,we=w.value[0]<Q.value?"start":"end";$[`${we}_scrollDown`](ye),J.preventDefault();return}},B=(J,Z)=>{const re=m?m(J):[],le=J==="start",ce=(Z||(le?O.value:p.value)).hour(),ye=le?n(ce+1,23):n(0,ce-1);return _a(re,ye)},g=(J,Z,re)=>{const le=d?d(J,Z):[],be=Z==="start",ce=re||(be?O.value:p.value),ye=ce.hour();if(J!==ye)return le;const we=ce.minute(),Me=be?n(we+1,59):n(0,we-1);return _a(le,Me)},F=(J,Z,re,le)=>{const be=R?R(J,Z,re):[],ce=re==="start",ye=le||(ce?O.value:p.value),we=ye.hour(),Me=ye.minute();if(J!==we||Z!==Me)return be;const $e=ye.second(),Ue=ce?n($e+1,59):n(0,$e-1);return _a(be,Ue)},x=([J,Z])=>[U(J,"start",!0,Z),U(Z,"end",!1,J)],{getAvailableHours:v,getAvailableMinutes:_,getAvailableSeconds:f}=Wt(B,g,F),{timePickerOptions:$,getAvailableTime:U,onSetOption:ae}=Kt({getAvailableHours:v,getAvailableMinutes:_,getAvailableSeconds:f}),xe=J=>J?ge(J)?J.map(Z=>H(Z,r.format).locale(i.value)):H(J,r.format).locale(i.value):null,Te=J=>J?ge(J)?J.map(Z=>Z.format(r.format)):J.format(r.format):null,je=()=>{if(ge(k))return k.map(Z=>H(Z).locale(i.value));const J=H(k).locale(i.value);return[J,J.add(60,"m")]};return a("set-picker-option",["formatToString",Te]),a("set-picker-option",["parseUserInput",xe]),a("set-picker-option",["isValidValue",P]),a("set-picker-option",["handleKeydownInput",me]),a("set-picker-option",["getDefaultValue",je]),a("set-picker-option",["getRangeAvailableTime",x]),(J,Z)=>J.actualVisible?(j(),W("div",{key:0,class:h([e(l).b("range-picker"),e(b).b("panel")])},[q("div",{class:h(e(l).be("range-picker","content"))},[q("div",{class:h(e(l).be("range-picker","cell"))},[q("div",{class:h(e(l).be("range-picker","header"))},"Inicio",2),q("div",{class:h(V.value)},[ne(Aa,{ref:"minSpinner",role:"start","show-seconds":A.value,"am-pm-mode":I.value,"arrow-control":e(S),"spinner-date":p.value,"disabled-hours":B,"disabled-minutes":g,"disabled-seconds":F,onChange:N,onSetOption:e(ae),onSelectRange:te},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),q("div",{class:h(e(l).be("range-picker","cell"))},[q("div",{class:h(e(l).be("range-picker","header"))},"Fin",2),q("div",{class:h(D.value)},[ne(Aa,{ref:"maxSpinner",role:"end","show-seconds":A.value,"am-pm-mode":I.value,"arrow-control":e(S),"spinner-date":O.value,"disabled-hours":B,"disabled-minutes":g,"disabled-seconds":F,onChange:L,onSetOption:e(ae),onSelectRange:oe},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),q("div",{class:h(e(l).be("panel","footer"))},[q("button",{type:"button",class:h([e(l).be("panel","btn"),"cancel"]),onClick:Z[0]||(Z[0]=re=>y())}," Cancelar ",2),q("button",{type:"button",class:h([e(l).be("panel","btn"),"confirm"]),disabled:z.value,onClick:Z[1]||(Z[1]=re=>T())}," Ok ",10,Xr)],2)],2)):de("",!0)}});Qt.__docgenInfo={exportName:"default",displayName:"panel-time-range",description:"",tags:{},events:[{name:"pick"},{name:"select-range"},{name:"set-picker-option"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/time-picker/src/time-picker-com/panel-time-range.vue"]};H.extend(xt);const eo=Oe({name:"GTimePicker",install:null,props:{...Gt,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,s){const r=G(),[a,n]=t.isRange?["timerange",Qt]:["time",Zt],i=l=>s.emit("update:modelValue",l);return Ta("ElPopperOptions",t.popperOptions),s.expose({focus:()=>{r.value?.focus()},blur:()=>{r.value?.blur()},handleOpen:()=>{r.value?.handleOpen()},handleClose:()=>{r.value?.handleClose()}}),()=>{const l=t.format??Gr;return fa(fa(Ut,{...t,ref:r,type:a,format:l,"onUpdate:modelValue":i},{default:b=>fa(n,{...b})}))}}}),ao=Dt(eo),Ho={title:"Form/Form",component:aa,parameters:{docs:{description:{component:`El componente \`Form\` se utiliza para crear formularios con validaciones integradas, manejo de estados y mensajes de error personalizables. 
        
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
Este componente trabaja en conjunto con el componente \`FormItem\` para proporcionar una experiencia completa de formularios. Para más detalles sobre FormItem consulta la [documentación de FormItem](/docs/form-form-item--docs).`}}},argTypes:{model:{description:"Objeto de datos del formulario",control:"object",table:{type:{summary:"object"}}},rules:{description:"Reglas de validación para los campos del formulario",control:"object"},disabled:{description:"Deshabilita todos los campos del formulario",control:"boolean",defaultValue:!1},validateOnRuleChange:{description:"Validar cuando cambian las reglas",control:"boolean",defaultValue:!0},validate:{description:"Valida el formulario completo. Recibe un callback o retorna una Promise",table:{category:"Expuesto",type:{summary:"() => Promise<boolean>"}}},validateField:{description:"Valida campos específicos del formulario",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult"}}},resetFields:{description:"Reinicia los campos especificados y elimina los resultados de validación",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},clearValidate:{description:"Limpia los mensajes de validación para los campos especificados",table:{category:"Expuesto",type:{summary:"(props?: Arrayable<FormItemProp>) => void"}}},scrollToField:{description:"Desplaza la vista hacia el campo especificado",table:{category:"Expuesto",type:{summary:"(prop: FormItemProp) => void"}}},fields:{description:"Contexto de todos los campos del formulario",table:{category:"Expuesto",type:{summary:"FormItemContext[]"}}}}},xa={name:"Formulario Completo",parameters:{docs:{description:{story:"Este ejemplo muestra un formulario completo que integra todos los componentes de formulario con validaciones."}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua,GSelect:rn,GRadio:on,GCheckbox:ln,GSegmented:rt,GDatePicker:qr,GTimePicker:ao},setup(){const t=G(),s=ea({fullName:"",email:"",country:"",city:"",gender:"",termsAccepted:!1,preferredContact:"",birthDate:"",appointmentDate:"",appointmentTime:""}),r=[{label:"Email",value:"email"},{label:"Teléfono",value:"phone"},{label:"WhatsApp",value:"whatsapp"}],a=[{value:"mx",title:"México"},{value:"co",title:"Colombia"},{value:"ar",title:"Argentina"},{value:"cl",title:"Chile"},{value:"pe",title:"Perú"},{value:"es",title:"España"}],n={mx:[{value:"mx-cdmx",title:"Ciudad de México"},{value:"mx-gdl",title:"Guadalajara"},{value:"mx-mty",title:"Monterrey"}],co:[{value:"co-bog",title:"Bogotá"},{value:"co-med",title:"Medellín"},{value:"co-cal",title:"Cali"}],ar:[{value:"ar-bue",title:"Buenos Aires"},{value:"ar-cor",title:"Córdoba"},{value:"ar-ros",title:"Rosario"}],cl:[{value:"cl-san",title:"Santiago"},{value:"cl-val",title:"Valparaíso"},{value:"cl-con",title:"Concepción"}],pe:[{value:"pe-lim",title:"Lima"},{value:"pe-are",title:"Arequipa"},{value:"pe-tru",title:"Trujillo"}],es:[{value:"es-mad",title:"Madrid"},{value:"es-bcn",title:"Barcelona"},{value:"es-val",title:"Valencia"}]},i=E(()=>s.country?n[s.country]||[]:[]);Ee(()=>s.country,()=>{s.city=""});const l=d=>d.getTime()>Date.now(),b=d=>d.getTime()<Date.now(),C={fullName:[{required:!0,message:"El nombre completo es requerido",trigger:"blur"},{min:3,message:"El nombre debe tener al menos 3 caracteres",trigger:"blur"}],email:[{required:!0,message:"El correo electrónico es requerido",trigger:"blur"},{type:"email",message:"Por favor ingrese un correo electrónico válido",trigger:"blur"}],country:[{required:!0,message:"Por favor seleccione un país"}],city:[{required:!0,message:"Por favor seleccione una ciudad"}],gender:[{required:!0,message:"Por favor seleccione su género"}],termsAccepted:[{validator:(d,R,k)=>{R===!0?k():k(new Error("Debe aceptar los términos y condiciones para continuar"))},type:"boolean",trigger:"change"}],preferredContact:[{validator:(d,R,k)=>{R||k(new Error("Debe seleccionar un método de contacto preferido")),k()},type:"boolean",trigger:"change"}],birthDate:[{required:!0,message:"La fecha de nacimiento es requerida",trigger:"change"}],appointmentDate:[{required:!0,message:"La fecha de cita es requerida",trigger:"change"}],appointmentTime:[{required:!0,message:"La hora de cita es requerida",trigger:"change"}]};async function S(){if(t.value)try{await t.value.validate()?(alert("Formulario enviado correctamente"),console.log("Form data:",s)):(alert("Formulario no válido"),console.log("Formulario no válido"))}catch(d){console.error("Validation error:",d)}}function m(){t.value&&t.value.resetFields()}return{formRef:t,formData:s,countries:a,availableCities:i,rules:C,contactOptions:r,disableFutureDates:l,disablePastDates:b,GSegmented:rt,handleSubmit:S,handleReset:m}},template:`
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

La validación se ejecutará cuando el campo pierda el foco (trigger: "blur") y mostrará los mensajes de error correspondientes.`}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){const t=G(),s=ea({pass:"",checkPass:"",age:""}),i={pass:[{validator:(C,S,m)=>{S===""?m(new Error("Ingrese una contraseña")):(s.checkPass!==""&&t.value?.validateField("checkPass"),m())},trigger:"blur"}],checkPass:[{validator:(C,S,m)=>{S===""?m(new Error("Confirme su contraseña")):S!==s.pass?m(new Error("Las contraseñas no coinciden")):m()},trigger:"blur"}],age:[{validator:(C,S,m)=>{if(!S)return m(new Error("La edad es requerida"));setTimeout(()=>{Number.isInteger(Number(S))?Number(S)<18?m(new Error("La edad debe ser mayor a 18")):m():m(new Error("Ingrese solo números"))},1e3)},trigger:"blur"}]};async function l(){t.value&&await t.value.validate((C,S)=>{C?console.log("submit!",s):console.log("error submit!",S)})}async function b(){t.value&&t.value.resetFields()}return{formRef:t,formData:s,rules:i,handleSubmit:l,handleReset:b}},template:`
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
    `})},Ia={name:"Formulario Deshabilitado",parameters:{docs:{description:{story:"Ejemplo de un formulario completamente deshabilitado con múltiples campos."}}},render:()=>({components:{GForm:aa,GFormItem:la,GInput:sa,GConfigProvider:ia,GButton:ua},setup(){return{formData:ea({name:"Juan Pérez",email:"juan@ejemplo.com",phone:"+51 999888777",address:"Av. Principal 123",ciudad:"Lima",country:"Perú"})}},template:`
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
}`,...Ea.parameters?.docs?.source}}};const Uo=["CompleteForm","Primary","CustomRules","TriggerValidation","DisabledForm","PreventSubmit","DynamicValidation"];export{xa as CompleteForm,Ra as CustomRules,Ia as DisabledForm,Ea as DynamicValidation,$a as PreventSubmit,Ma as Primary,Va as TriggerValidation,Uo as __namedExportsOrder,Ho as default};
