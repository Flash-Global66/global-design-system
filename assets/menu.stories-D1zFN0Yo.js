import{c as i,d as _,r as y,s as oe,t as ae,D as se,E as ie,y as A,f,i as w,n as V,g as b,u as l,o as O,q as $e,Y as ge,F as le,b as fe,w as L,x as Z,B as He,z as Ae,a as Fe,e as Ne,v as ze,T as Ke,C as ce}from"./iframe-Dm8_k2cn.js";import{u as F}from"./useEmptyValues-V_TCuIRx.js";import{n as ve}from"./index-B20TF4Qt.js";import{G as Re}from"./Badge-Di0Vpnwc.js";import{G as be}from"./index-CkXYEYPM.js";import{G as xe}from"./index-C3cnRZjZ.js";import{G as he}from"./ConfigProvider-pNTTooVT.js";import"./preload-helper-Dch09mLN.js";import"./index-CSw_2qlj.js";import"./index-BeyAZDMP.js";import"./index-DP19YOwC.js";import"./useId-Bxzyr06N.js";import"./install.util-cBz1HN_T.js";import"./index-yRYOdSZv.js";import"./event.constant-LtAI3-H4.js";import"./index-DkuPjBfk.js";import"./index-BBqlo-RX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ue=Symbol("menuContextKey"),J=Symbol("subMenuContextKey"),Q=(u,p,a)=>{if(!u)throw new Error(`[${p}] can not inject ${a} — make sure it is rendered inside a <GMenu>`);return u},Ve=(u,p)=>{const a=F("menu");return i(()=>a.cssVarBlock({"text-color":u.textColor??"","hover-text-color":u.textColor??"","bg-color":u.backgroundColor??"","hover-bg-color":u.backgroundColor??"","active-color":u.activeTextColor??"",level:`${p}`}))},re=_({name:"GMenu",__name:"Menu",props:{mode:{type:String,default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Array,default:()=>[]},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,default:"hover"},collapse:Boolean,collapseTransition:{type:Boolean,default:!0},backgroundColor:String,textColor:String,activeTextColor:String,popperOffset:{type:Number,default:6},popperEffect:{type:String,default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},persistent:{type:Boolean,default:!0}},emits:["open","close","select"],setup(u,{expose:p,emit:a}){const n=u,I=a,h=F("menu"),d=y(),v=$e(),s=y(n.defaultOpeneds&&!n.collapse?n.defaultOpeneds.slice(0):[]),m=y(n.defaultActive),C=y({}),M=y({}),x=i(()=>n.mode==="horizontal"||n.mode==="vertical"&&n.collapse),G=o=>M.value[o]?.indexPath??[],P=(o,r)=>{s.value.includes(o)||(n.uniqueOpened&&(s.value=s.value.filter(g=>r.includes(g))),s.value.push(o),I("open",o,r))},c=o=>{const r=s.value.indexOf(o);r!==-1&&s.value.splice(r,1)},$=(o,r)=>{c(o),I("close",o,r)},N=({index:o,indexPath:r})=>{s.value.includes(o)?$(o,r):P(o,r)},T=o=>{(n.mode==="horizontal"||n.collapse)&&(s.value=[]);const{index:r,indexPath:g}=o;if(r==null||g==null)return;const Y=v?.appContext.config.globalProperties.$router;if(n.router&&Y){const H=o.route??r,R=Y.push(H).then(E=>(E||(m.value=r),E));I("select",r,g,{index:r,indexPath:g,route:H},R)}else m.value=r,I("select",r,g,{index:r,indexPath:g})},B=o=>{const r=C.value,g=r[o]||m.value&&r[m.value]||r[n.defaultActive];m.value=g?.index??o},k=()=>{const o=m.value&&C.value[m.value];!o||n.mode==="horizontal"||n.collapse||o.indexPath.forEach(r=>{const g=M.value[r];g&&P(r,g.indexPath)})},j=o=>{C.value[o.index]=o},z=o=>{delete C.value[o.index]},K=o=>{M.value[o.index]=o},q=o=>{delete M.value[o.index]};oe(()=>n.defaultActive,o=>{C.value[o]||(m.value=""),B(o)}),oe(()=>n.collapse,o=>{o&&(s.value=[])}),oe(C,k,{deep:!0}),ae(()=>{k()}),se(ue,{props:ie({mode:i(()=>n.mode),collapse:i(()=>n.collapse),uniqueOpened:i(()=>n.uniqueOpened),router:i(()=>n.router),menuTrigger:i(()=>n.menuTrigger),backgroundColor:i(()=>n.backgroundColor),textColor:i(()=>n.textColor),activeTextColor:i(()=>n.activeTextColor),popperEffect:i(()=>n.popperEffect),popperClass:i(()=>n.popperClass),popperOffset:i(()=>n.popperOffset),showTimeout:i(()=>n.showTimeout),hideTimeout:i(()=>n.hideTimeout),persistent:i(()=>n.persistent)}),openedMenus:s,items:C,subMenus:M,activeIndex:m,isMenuPopup:x,addMenuItem:j,removeMenuItem:z,addSubMenu:K,removeSubMenu:q,openMenu:P,closeMenu:$,handleMenuItemClick:T,handleSubMenuClick:N});const ee=y(!1);se(J,{level:0,indexPath:[],addSubMenu:K,removeSubMenu:q,mouseInChild:ee});const W=i(()=>h.cssVarBlock({"text-color":n.textColor??"","hover-text-color":n.textColor??"","bg-color":n.backgroundColor??"","hover-bg-color":n.backgroundColor??"","active-color":n.activeTextColor??"",level:"0"}));return p({open:o=>{const r=G(o);r.forEach(g=>P(g,r))},close:c,activeIndex:m,openedMenus:s}),(o,r)=>(O(),A("div",{class:b(["gui-menu-wrapper",{"gui-menu-wrapper--collapse":u.collapse,"gui-menu-wrapper--animated":u.collapseTransition}])},[f("ul",{ref_key:"menuRef",ref:d,role:"menubar",class:b([l(h).b(),l(h).m(u.mode),{[l(h).m("collapse")]:u.collapse}]),style:V(W.value)},[w(o.$slots,"default")],6)],2))}}),De=["tabindex","aria-disabled"],ye=_({name:"GMenuItem",__name:"MenuItem",props:{index:{type:String,default:null},route:{type:[String,Object]},disabled:Boolean},emits:["click"],setup(u,{emit:p}){const a=["Enter"," "],n=u,I=p,h=F("menu"),d=Q(Z(ue,void 0),"GMenuItem","root menu context"),v=Q(Z(J,void 0),"GMenuItem","sub menu context"),s=i(()=>v.level===0),m=i(()=>n.index??""),C=i(()=>[...v.indexPath,m.value]),M=i(()=>m.value!==""&&m.value===d.activeIndex.value),x=ie({index:m,indexPath:C,active:M}),G=()=>{n.disabled||(d.handleMenuItemClick({index:m.value,indexPath:C.value,route:n.route}),I("click",x))};function P(c){c.target===c.currentTarget&&a.includes(c.key)&&(c.preventDefault(),G())}return ae(()=>{v.addSubMenu(x),d.addMenuItem(x)}),ge(()=>{v.removeSubMenu(x),d.removeMenuItem(x)}),(c,$)=>(O(),A("li",{role:"menuitem",tabindex:u.disabled?-1:0,"aria-disabled":u.disabled?"true":void 0,class:b([l(h).b("item"),l(h).is("active",M.value),l(h).is("disabled",u.disabled)]),onClick:G,onKeydown:P},[s.value&&l(d).props.collapse&&c.$slots.title?(O(),A(le,{key:0},[fe(l(ve),{effect:l(d).props.popperEffect,placement:"right","fallback-placements":["left"],persistent:l(d).props.persistent},{content:L(()=>[f("span",{class:b(l(h).be("tooltip","label"))},[w(c.$slots,"title")],2)]),default:L(()=>[f("div",{class:b(l(h).be("tooltip","trigger"))},[w(c.$slots,"default")],2)]),_:3},8,["effect","persistent"]),f("span",{class:b(l(h).be("item","sr-label"))},[w(c.$slots,"title")],2)],64)):(O(),A(le,{key:1},[w(c.$slots,"default"),w(c.$slots,"title")],64))],42,De))}}),Le=_({name:"GMenuItemGroup",__name:"MenuItemGroup",props:{title:String},emits:["click"],setup(u){const p=F("menu-item-group");return(a,n)=>(O(),A("li",{class:b(l(p).b()),onClick:n[0]||(n[0]=I=>a.$emit("click"))},[f("div",{class:b(l(p).e("title"))},[w(a.$slots,"title",{},()=>[He(Ae(u.title),1)])],2),f("ul",null,[w(a.$slots,"default")])],2))}}),je=["tabindex","aria-disabled"],qe=["aria-expanded","tabindex","aria-disabled"],We='[role="menuitem"][tabindex="0"]',Ce=_({name:"GSubMenu",__name:"MenuSub",props:{index:{type:String,required:!0},showTimeout:{type:Number,default:void 0},hideTimeout:{type:Number,default:void 0},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:void 0}},emits:["click"],setup(u,{emit:p}){const a=u,n=p,I=["Enter"," "],h=[...I,"ArrowRight"],d=F("sub-menu"),v=F("menu"),s=Q(Z(ue,void 0),"GSubMenu","root menu context"),m=Q(Z(J,void 0),"GSubMenu","sub menu context"),C=y({}),M=y({}),x=y(!1),G=y(),P=y();let c,$;const N=i(()=>m.level===0),T=i(()=>s.props.mode),B=i(()=>s.openedMenus.value.includes(a.index)),k=i(()=>[...m.indexPath,a.index]),j=i(()=>[...Object.values(C.value),...Object.values(M.value)].some(t=>t.active)),z=i(()=>a.teleported!==void 0?a.teleported:a.popperAppendToBody!==void 0?a.popperAppendToBody:N.value),K=i(()=>T.value==="horizontal"&&N.value?"bottom-start":"right-start"),q=i(()=>T.value==="horizontal"&&N.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),ee=i(()=>s.props.collapse?`${v.namespace.value}-zoom-in-left`:`${v.namespace.value}-zoom-in-top`),W=Ve(s.props,m.level+1),o=i(()=>a.popperOffset??s.props.popperOffset),r=i(()=>a.popperClass??s.props.popperClass),g=i(()=>a.showTimeout??s.props.showTimeout),Y=i(()=>a.hideTimeout??s.props.hideTimeout),H=ie({index:a.index,indexPath:k,active:j}),R=()=>{const e=s.props.menuTrigger==="hover"&&T.value==="horizontal",S=s.props.collapse&&T.value==="vertical";e||S||a.disabled||s.handleSubMenuClick({index:a.index,indexPath:k.value})},E=()=>{c&&clearTimeout(c),$&&clearTimeout($)},U=(t,e=g.value)=>{if(t.type==="focus")return;const S=s.props.menuTrigger==="click"&&T.value==="horizontal",Oe=!s.props.collapse&&T.value==="vertical";if(S||Oe||a.disabled){x.value=!0;return}x.value=!0,E(),c=setTimeout(()=>{s.openMenu(a.index,k.value)},e),z.value&&(m.mouseInChild.value=!0)},te=(t=!1)=>{const e=s.props.menuTrigger==="click"&&T.value==="horizontal",S=!s.props.collapse&&T.value==="vertical";if(e||S){x.value=!1;return}E(),x.value=!1,$=setTimeout(()=>{x.value||s.closeMenu(a.index,k.value)},Y.value),z.value&&t&&m.handleMouseleave?.(!0)};async function Me(){E(),s.openMenu(a.index,k.value),await ce(),P.value?.querySelector(We)?.focus({preventScroll:!0})}async function me(){E(),s.closeMenu(a.index,k.value),await ce(),G.value?.focus({preventScroll:!0})}function pe(t){if(a.disabled||t.target!==t.currentTarget)return;const e=I.includes(t.key);if(e&&n("click"),!s.isMenuPopup.value){if(!e)return;t.preventDefault(),R();return}h.includes(t.key)?(t.preventDefault(),Me()):t.key==="Escape"&&B.value&&(t.preventDefault(),t.stopPropagation(),me())}function we(t){t.key==="Escape"&&(t.preventDefault(),t.stopPropagation(),me())}function de(t){if(!B.value)return;const e=t.relatedTarget;e&&(G.value?.contains(e)||P.value?.contains(e))||(E(),s.closeMenu(a.index,k.value))}const Te=t=>{M.value[t.index]=t},ke=t=>{delete M.value[t.index]};se(J,{level:m.level+1,indexPath:k.value,addSubMenu:Te,removeSubMenu:ke,mouseInChild:x,handleMouseleave:te}),ae(()=>{s.addSubMenu(H),m.addSubMenu(H)}),ge(()=>{m.removeSubMenu(H),s.removeSubMenu(H),E()});const Se=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow??"",t.style.paddingTop=t.dataset.oldPaddingTop??"",t.style.paddingBottom=t.dataset.oldPaddingBottom??""},Ie=t=>{const e=t;e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight="0",e.style.paddingTop="0",e.style.paddingBottom="0"},Pe=t=>{const e=t;requestAnimationFrame(()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight="0",e.style.paddingTop=e.dataset.oldPaddingTop??"",e.style.paddingBottom=e.dataset.oldPaddingBottom??"",e.style.overflow="hidden"})},Be=t=>{const e=t;e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow??""},Ge=t=>{const e=t;e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},Ee=t=>{const e=t;e.scrollHeight!==0&&(e.style.maxHeight="0",e.style.paddingTop="0",e.style.paddingBottom="0")},ne=t=>Se(t);return(t,e)=>(O(),A("li",{role:"none",class:b([l(d).b(),l(d).is("active",j.value),l(d).is("opened",B.value),l(d).is("disabled",u.disabled)]),onMouseenter:U,onMouseleave:e[3]||(e[3]=()=>te()),onFocus:U,onClick:e[4]||(e[4]=S=>t.$emit("click"))},[l(s).isMenuPopup.value?(O(),Fe(l(ve),{key:0,role:"menu",visible:B.value,effect:"light",pure:!0,"is-component":"",offset:o.value,"show-arrow":!1,persistent:l(s).props.persistent,"popper-class":r.value,placement:K.value,teleported:z.value,"fallback-placements":q.value,transition:ee.value,"gpu-acceleration":!1},{content:L(()=>[f("div",{ref_key:"popupRef",ref:P,tabindex:"-1",class:b([l(v).m(T.value),l(v).m("popup-container"),r.value]),onMouseenter:e[0]||(e[0]=S=>U(S,100)),onMouseleave:e[1]||(e[1]=()=>te(!0)),onFocus:e[2]||(e[2]=S=>U(S,100)),onKeydown:we,onFocusout:de},[f("ul",{role:"none",class:b([l(v).b(),l(v).m("popup"),l(v).m(`popup-${K.value}`)]),style:V(l(W))},[w(t.$slots,"default")],6)],34)]),default:L(()=>[f("div",{ref_key:"titleRef",ref:G,role:"menuitem",tabindex:u.disabled?-1:0,"aria-disabled":u.disabled?"true":void 0,class:b(l(d).e("title")),onClick:R,onKeydown:pe,onFocusout:de},[w(t.$slots,"title"),f("span",{class:b(l(d).e("icon-arrow")),style:V({transform:B.value?"rotateZ(180deg)":"none"})},e[5]||(e[5]=[f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[f("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})],-1)]),6)],42,je)]),_:3},8,["visible","offset","persistent","popper-class","placement","teleported","fallback-placements","transition"])):(O(),A(le,{key:1},[f("div",{ref_key:"titleRef",ref:G,role:"menuitem","aria-haspopup":"menu","aria-expanded":B.value,tabindex:u.disabled?-1:0,"aria-disabled":u.disabled?"true":void 0,class:b(l(d).e("title")),onClick:R,onKeydown:pe},[w(t.$slots,"title"),f("span",{class:b(l(d).e("icon-arrow")),style:V({transform:B.value?"rotateZ(180deg)":"none"})},e[6]||(e[6]=[f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[f("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})],-1)]),6)],42,qe),fe(Ke,{name:"gui-collapse-transition",onBeforeEnter:Ie,onEnter:Pe,onAfterEnter:Be,onEnterCancelled:ne,onBeforeLeave:Ge,onLeave:Ee,onAfterLeave:ne,onLeaveCancelled:ne},{default:L(()=>[Ne(f("ul",{role:"menu",class:b([l(v).b(),l(v).m("inline")]),style:V(l(W))},[w(t.$slots,"default")],6),[[ze,B.value]])]),_:3})],64))],34))}}),ct={title:"Feedback/Menu",component:re,parameters:{docs:{description:{component:"Menu that provides navigation for your website."}}}},Ye=u=>({components:{GMenu:re,GConfigProvider:he,GButton:be,GMenuItem:ye,GMenuItemGroup:Le,GSubMenu:Ce,GIconFont:xe},setup(){const p=y(!1);return{args:u,isCollapse:p}},template:`
      <g-config-provider>
        <g-button class="mb-4" @click="isCollapse = !isCollapse">Collapse</g-button>
        <div class="w-full max-w-xs">
          <g-menu :collapse="isCollapse" class="px-4 py-5 bg-white">
            <g-menu-item index="5">
              <g-icon-font class="text-6" name="light house" />
              <template #title>
                <h4 class="ml-3">Home</h4>
              </template>
            </g-menu-item>

            <g-sub-menu index="1">
              <template #title>
                <g-icon-font name="regular paper-plane" />
                <span class="ml-3">Enviar</span>
              </template>

              <g-menu-item-group>
                <template #title>
                  <span>Multi envió</span>
                </template>
                <g-menu-item index="1-1">item one</g-menu-item>
                <g-menu-item index="1-2">item two</g-menu-item>
              </g-menu-item-group>

              <g-sub-menu index="1-4">
                <template #title>
                  <g-icon-font name="solid hand-holding-usd" />
                  <span class="ml-3">Envió de algo</span>
                </template>
                <g-menu-item index="1-4-1">item one</g-menu-item>
              </g-sub-menu>
            </g-sub-menu>

            <g-sub-menu index="2">
              <template #title>
                <g-icon-font name="light money-bill-wave" />
                <span class="ml-3">Navigator Otro</span>
              </template>
              <g-menu-item index="2-1">item one</g-menu-item>
              <g-menu-item index="2-2">item two</g-menu-item>
            </g-sub-menu>

            <g-menu-item index="4" disabled>
              <g-icon-font name="regular receipt" />
              <template #title>
                <span class="ml-3">Movimientos</span>
              </template>
            </g-menu-item>
          </g-menu>
        </div>
      </g-config-provider>
    `}),X=Ye.bind({}),Ue=u=>({components:{GMenu:re,GConfigProvider:he,GButton:be,GBadge:Re,GMenuItem:ye,GSubMenu:Ce,GIconFont:xe},setup(){const p=y(u.collapse??!0);function a(){p.value=!p.value}return{args:u,isCollapse:p,toggleCollapse:a}},template:`
      <g-config-provider>
        <g-button class="mb-4" @click="toggleCollapse">{{ isCollapse ? 'Expand' : 'Collapse' }}</g-button>
        <div class="w-full max-w-xs">
          <g-menu
            :collapse="isCollapse"
            class="px-4 py-5 bg-white"
          >
            <g-menu-item index="1">
              <g-icon-font class="text-6" name="light house" />
              <template #title>
                <span class="ml-3">Home</span>
              </template>
            </g-menu-item>

            <g-sub-menu index="2">
              <template #title>
                <g-icon-font name="regular receipt" />
                <span class="ml-3">Movimientos</span>
              </template>
              <g-menu-item index="2-1">Historial</g-menu-item>
              <g-menu-item index="2-2">Pendientes</g-menu-item>
              <g-menu-item index="2-3">Comprobantes</g-menu-item>
            </g-sub-menu>

            <g-sub-menu index="3">
              <template #title>
                <g-icon-font name="light money-bill-wave" />
                <span class="ml-3">COMEX</span>
                <span class="relative flex items-center justify-between w-full">
                  <g-badge :value="12" :max="99" type="primary" class="absolute right-1" />
                </span>
              </template>
              <g-menu-item index="3-1">Importaciones</g-menu-item>
              <g-menu-item index="3-2">Exportaciones</g-menu-item>
            </g-sub-menu>

            <g-sub-menu index="4">
              <template #title>
                <g-icon-font name="regular paper-plane" />
                <span class="ml-3 flex items-center justify-between w-full pr-10">
                  Integraciones
                  <span class="absolute right-8 rounded-full bg-primary-def px-2 text-xs text-white">Nuevo</span>
                </span>
              </template>
              <g-menu-item index="4-1">API</g-menu-item>
              <g-menu-item index="4-2">Webhooks</g-menu-item>
              <g-menu-item index="4-3">Programa de Referidos</g-menu-item>
              <g-menu-item index="4-4">
                API transaccional
                <span class="ml-2 rounded-full bg-primary-def px-2 text-xs text-white">Nuevo</span>
              </g-menu-item>
            </g-sub-menu>
          </g-menu>
        </div>
      </g-config-provider>
    `}),D=Ue.bind({});D.args={collapse:!0};const gt=["Default","CollapsedWithBadges"];X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => {
  return {
    components: {
      GMenu,
      GConfigProvider,
      GButton,
      GMenuItem,
      GMenuItemGroup,
      GSubMenu,
      GIconFont
    },
    setup() {
      const isCollapse = ref(false);
      return {
        args,
        isCollapse
      };
    },
    template: \`
      <g-config-provider>
        <g-button class="mb-4" @click="isCollapse = !isCollapse">Collapse</g-button>
        <div class="w-full max-w-xs">
          <g-menu :collapse="isCollapse" class="px-4 py-5 bg-white">
            <g-menu-item index="5">
              <g-icon-font class="text-6" name="light house" />
              <template #title>
                <h4 class="ml-3">Home</h4>
              </template>
            </g-menu-item>

            <g-sub-menu index="1">
              <template #title>
                <g-icon-font name="regular paper-plane" />
                <span class="ml-3">Enviar</span>
              </template>

              <g-menu-item-group>
                <template #title>
                  <span>Multi envió</span>
                </template>
                <g-menu-item index="1-1">item one</g-menu-item>
                <g-menu-item index="1-2">item two</g-menu-item>
              </g-menu-item-group>

              <g-sub-menu index="1-4">
                <template #title>
                  <g-icon-font name="solid hand-holding-usd" />
                  <span class="ml-3">Envió de algo</span>
                </template>
                <g-menu-item index="1-4-1">item one</g-menu-item>
              </g-sub-menu>
            </g-sub-menu>

            <g-sub-menu index="2">
              <template #title>
                <g-icon-font name="light money-bill-wave" />
                <span class="ml-3">Navigator Otro</span>
              </template>
              <g-menu-item index="2-1">item one</g-menu-item>
              <g-menu-item index="2-2">item two</g-menu-item>
            </g-sub-menu>

            <g-menu-item index="4" disabled>
              <g-icon-font name="regular receipt" />
              <template #title>
                <span class="ml-3">Movimientos</span>
              </template>
            </g-menu-item>
          </g-menu>
        </div>
      </g-config-provider>
    \`
  };
}`,...X.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => {
  return {
    components: {
      GMenu,
      GConfigProvider,
      GButton,
      GBadge,
      GMenuItem,
      GSubMenu,
      GIconFont
    },
    setup() {
      const isCollapse = ref(args.collapse ?? true);
      function toggleCollapse() {
        isCollapse.value = !isCollapse.value;
      }
      return {
        args,
        isCollapse,
        toggleCollapse
      };
    },
    template: \`
      <g-config-provider>
        <g-button class="mb-4" @click="toggleCollapse">{{ isCollapse ? 'Expand' : 'Collapse' }}</g-button>
        <div class="w-full max-w-xs">
          <g-menu
            :collapse="isCollapse"
            class="px-4 py-5 bg-white"
          >
            <g-menu-item index="1">
              <g-icon-font class="text-6" name="light house" />
              <template #title>
                <span class="ml-3">Home</span>
              </template>
            </g-menu-item>

            <g-sub-menu index="2">
              <template #title>
                <g-icon-font name="regular receipt" />
                <span class="ml-3">Movimientos</span>
              </template>
              <g-menu-item index="2-1">Historial</g-menu-item>
              <g-menu-item index="2-2">Pendientes</g-menu-item>
              <g-menu-item index="2-3">Comprobantes</g-menu-item>
            </g-sub-menu>

            <g-sub-menu index="3">
              <template #title>
                <g-icon-font name="light money-bill-wave" />
                <span class="ml-3">COMEX</span>
                <span class="relative flex items-center justify-between w-full">
                  <g-badge :value="12" :max="99" type="primary" class="absolute right-1" />
                </span>
              </template>
              <g-menu-item index="3-1">Importaciones</g-menu-item>
              <g-menu-item index="3-2">Exportaciones</g-menu-item>
            </g-sub-menu>

            <g-sub-menu index="4">
              <template #title>
                <g-icon-font name="regular paper-plane" />
                <span class="ml-3 flex items-center justify-between w-full pr-10">
                  Integraciones
                  <span class="absolute right-8 rounded-full bg-primary-def px-2 text-xs text-white">Nuevo</span>
                </span>
              </template>
              <g-menu-item index="4-1">API</g-menu-item>
              <g-menu-item index="4-2">Webhooks</g-menu-item>
              <g-menu-item index="4-3">Programa de Referidos</g-menu-item>
              <g-menu-item index="4-4">
                API transaccional
                <span class="ml-2 rounded-full bg-primary-def px-2 text-xs text-white">Nuevo</span>
              </g-menu-item>
            </g-sub-menu>
          </g-menu>
        </div>
      </g-config-provider>
    \`
  };
}`,...D.parameters?.docs?.source}}};export{D as CollapsedWithBadges,X as Default,gt as __namedExportsOrder,ct as default};
