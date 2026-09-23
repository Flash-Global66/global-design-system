import{c as l,d as X,r as M,s as ee,t as ne,D as te,E as oe,y as $,f as h,i as C,n as N,g as x,u as a,o as S,q as fe,X as le,a as ae,w as F,F as ie,x as K,B as he,z as be,b as xe,e as ye,v as Me,T as Ce}from"./iframe-Dct5CHxr.js";import{u as O}from"./useEmptyValues-BnYvcW4O.js";import{n as ue}from"./index-BpP4et0s.js";import{G as Te}from"./index-BeqF1NXI.js";import{G as we}from"./index-GU5Cqqg3.js";import{G as ke}from"./ConfigProvider-7dg58IlU.js";import"./preload-helper-Dch09mLN.js";import"./index-DWhPhD7W.js";import"./index-pMiYc9r3.js";import"./index-CZoNQBHQ.js";import"./useId-MLHLvdkG.js";import"./install.util-cBz1HN_T.js";import"./index-DxlLUiSm.js";import"./event.constant-LtAI3-H4.js";import"./index-BgdLHs-h.js";import"./index-1T7U7QlS.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const se=Symbol("menuContextKey"),Z=Symbol("subMenuContextKey"),U=(m,u,r)=>{if(!m)throw new Error(`[${u}] can not inject ${r} — make sure it is rendered inside a <GMenu>`);return m},Se=(m,u)=>{const r=O("menu");return l(()=>r.cssVarBlock({"text-color":m.textColor??"","hover-text-color":m.textColor??"","bg-color":m.backgroundColor??"","hover-bg-color":m.backgroundColor??"","active-color":m.activeTextColor??"",level:`${u}`}))},Be={class:"gui-menu-wrapper"},re=X({name:"GMenu",__name:"Menu",props:{mode:{type:String,default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Array,default:()=>[]},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,default:"hover"},collapse:Boolean,collapseTransition:{type:Boolean,default:!0},backgroundColor:String,textColor:String,activeTextColor:String,popperOffset:{type:Number,default:6},popperEffect:{type:String,default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},persistent:{type:Boolean,default:!0}},emits:["open","close","select"],setup(m,{expose:u,emit:r}){const t=m,i=r,d=O("menu"),w=M(),B=fe(),p=M(t.defaultOpeneds&&!t.collapse?t.defaultOpeneds.slice(0):[]),v=M(t.defaultActive),b=M({}),f=M({}),G=l(()=>t.mode==="horizontal"||t.mode==="vertical"&&t.collapse),g=n=>f.value[n]?.indexPath??[],y=(n,s)=>{p.value.includes(n)||(t.uniqueOpened&&(p.value=p.value.filter(c=>s.includes(c))),p.value.push(n),i("open",n,s))},k=n=>{const s=p.value.indexOf(n);s!==-1&&p.value.splice(s,1)},H=(n,s)=>{k(n),i("close",n,s)},E=({index:n,indexPath:s})=>{p.value.includes(n)?H(n,s):y(n,s)},A=n=>{(t.mode==="horizontal"||t.collapse)&&(p.value=[]);const{index:s,indexPath:c}=n;if(s==null||c==null)return;const P=B?.appContext.config.globalProperties.$router;if(t.router&&P){const D=n.route??s,Y=P.push(D).then(j=>(j||(v.value=s),j));i("select",s,c,{index:s,indexPath:c,route:D},Y)}else v.value=s,i("select",s,c,{index:s,indexPath:c})},J=n=>{const s=b.value,c=s[n]||v.value&&s[v.value]||s[t.defaultActive];v.value=c?.index??n},V=()=>{const n=v.value&&b.value[v.value];!n||t.mode==="horizontal"||t.collapse||n.indexPath.forEach(s=>{const c=f.value[s];c&&y(s,c.indexPath)})},L=n=>{b.value[n.index]=n},Q=n=>{delete b.value[n.index]},z=n=>{f.value[n.index]=n},q=n=>{delete f.value[n.index]};ee(()=>t.defaultActive,n=>{b.value[n]||(v.value=""),J(n)}),ee(()=>t.collapse,n=>{n&&(p.value=[])}),ee(b,V,{deep:!0}),ne(()=>{V()}),te(se,{props:oe({mode:l(()=>t.mode),collapse:l(()=>t.collapse),uniqueOpened:l(()=>t.uniqueOpened),router:l(()=>t.router),menuTrigger:l(()=>t.menuTrigger),backgroundColor:l(()=>t.backgroundColor),textColor:l(()=>t.textColor),activeTextColor:l(()=>t.activeTextColor),popperEffect:l(()=>t.popperEffect),popperClass:l(()=>t.popperClass),popperOffset:l(()=>t.popperOffset),showTimeout:l(()=>t.showTimeout),hideTimeout:l(()=>t.hideTimeout),persistent:l(()=>t.persistent)}),openedMenus:p,items:b,subMenus:f,activeIndex:v,isMenuPopup:G,addMenuItem:L,removeMenuItem:Q,addSubMenu:z,removeSubMenu:q,openMenu:y,closeMenu:H,handleMenuItemClick:A,handleSubMenuClick:E});const W=M(!1);te(Z,{level:0,indexPath:[],addSubMenu:z,removeSubMenu:q,mouseInChild:W});const I=l(()=>d.cssVarBlock({"text-color":t.textColor??"","hover-text-color":t.textColor??"","bg-color":t.backgroundColor??"","hover-bg-color":t.backgroundColor??"","active-color":t.activeTextColor??"",level:"0"}));return u({open:n=>{const s=g(n);s.forEach(c=>y(c,s))},close:k,activeIndex:v,openedMenus:p}),(n,s)=>(S(),$("div",Be,[h("ul",{ref_key:"menuRef",ref:w,role:"menubar",class:x([a(d).b(),a(d).m(m.mode),a(d).is("collapse",m.collapse)]),style:N(I.value)},[C(n.$slots,"default")],6)]))}}),Ge=X({name:"GMenuItem",__name:"MenuItem",props:{index:{type:String,default:null},route:{type:[String,Object]},disabled:Boolean},emits:["click"],setup(m,{emit:u}){const r=m,t=u,i=O("menu"),d=U(K(se,void 0),"GMenuItem","root menu context"),w=U(K(Z,void 0),"GMenuItem","sub menu context"),B=l(()=>w.level===0),p=l(()=>r.index??""),v=l(()=>[...w.indexPath,p.value]),b=l(()=>p.value!==""&&p.value===d.activeIndex.value),f=oe({index:p,indexPath:v,active:b}),G=()=>{r.disabled||(d.handleMenuItemClick({index:p.value,indexPath:v.value,route:r.route}),t("click",f))};return ne(()=>{w.addSubMenu(f),d.addMenuItem(f)}),le(()=>{w.removeSubMenu(f),d.removeMenuItem(f)}),(g,y)=>(S(),$("li",{role:"menuitem",tabindex:"-1",class:x([a(i).b("item"),a(i).is("active",b.value),a(i).is("disabled",m.disabled)]),onClick:G},[B.value&&a(d).props.collapse&&g.$slots.title?(S(),ae(a(ue),{key:0,effect:a(d).props.popperEffect,placement:"right","fallback-placements":["left"],persistent:a(d).props.persistent},{content:F(()=>[C(g.$slots,"title")]),default:F(()=>[h("div",{class:x(a(i).be("tooltip","trigger"))},[C(g.$slots,"default")],2)]),_:3},8,["effect","persistent"])):(S(),$(ie,{key:1},[C(g.$slots,"default"),C(g.$slots,"title")],64))],2))}}),Ie=X({name:"GMenuItemGroup",__name:"MenuItemGroup",props:{title:String},emits:["click"],setup(m){const u=O("menu-item-group");return(r,t)=>(S(),$("li",{class:x(a(u).b()),onClick:t[0]||(t[0]=i=>r.$emit("click"))},[h("div",{class:x(a(u).e("title"))},[C(r.$slots,"title",{},()=>[he(be(m.title),1)])],2),h("ul",null,[C(r.$slots,"default")])],2))}}),Pe=["aria-expanded"],$e=X({name:"GSubMenu",__name:"MenuSub",props:{index:{type:String,required:!0},showTimeout:{type:Number,default:void 0},hideTimeout:{type:Number,default:void 0},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:void 0}},emits:["click"],setup(m){const u=m,r=O("sub-menu"),t=O("menu"),i=U(K(se,void 0),"GSubMenu","root menu context"),d=U(K(Z,void 0),"GSubMenu","sub menu context"),w=M({}),B=M({}),p=M(!1),v=M();let b,f;const G=l(()=>d.level===0),g=l(()=>i.props.mode),y=l(()=>i.openedMenus.value.includes(u.index)),k=l(()=>[...d.indexPath,u.index]),H=l(()=>[...Object.values(w.value),...Object.values(B.value)].some(o=>o.active)),E=l(()=>u.teleported!==void 0?u.teleported:u.popperAppendToBody!==void 0?u.popperAppendToBody:G.value),A=l(()=>g.value==="horizontal"&&G.value?"bottom-start":"right-start"),J=l(()=>g.value==="horizontal"&&G.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),V=l(()=>i.props.collapse?`${t.namespace.value}-zoom-in-left`:`${t.namespace.value}-zoom-in-top`),L=Se(i.props,d.level+1),Q=l(()=>u.popperOffset??i.props.popperOffset),z=l(()=>u.popperClass??i.props.popperClass),q=l(()=>u.showTimeout??i.props.showTimeout),W=l(()=>u.hideTimeout??i.props.hideTimeout),I=oe({index:u.index,indexPath:k,active:H}),n=()=>{const e=i.props.menuTrigger==="hover"&&g.value==="horizontal",T=i.props.collapse&&g.value==="vertical";e||T||u.disabled||i.handleSubMenuClick({index:u.index,indexPath:k.value})},s=()=>{b&&clearTimeout(b),f&&clearTimeout(f)},c=(o,e=q.value)=>{if(o.type==="focus")return;const T=i.props.menuTrigger==="click"&&g.value==="horizontal",ve=!i.props.collapse&&g.value==="vertical";if(T||ve||u.disabled){p.value=!0;return}p.value=!0,s(),b=setTimeout(()=>{i.openMenu(u.index,k.value)},e),E.value&&(d.mouseInChild.value=!0)},P=(o=!1)=>{const e=i.props.menuTrigger==="click"&&g.value==="horizontal",T=!i.props.collapse&&g.value==="vertical";if(e||T){p.value=!1;return}s(),p.value=!1,f=setTimeout(()=>{p.value||i.closeMenu(u.index,k.value)},W.value),E.value&&o&&d.handleMouseleave?.(!0)},D=o=>{B.value[o.index]=o},Y=o=>{delete B.value[o.index]};te(Z,{level:d.level+1,indexPath:k.value,addSubMenu:D,removeSubMenu:Y,mouseInChild:p,handleMouseleave:P}),ne(()=>{i.addSubMenu(I),d.addSubMenu(I)}),le(()=>{d.removeSubMenu(I),i.removeSubMenu(I),s()});const j=o=>{o.style.maxHeight="",o.style.overflow=o.dataset.oldOverflow??"",o.style.paddingTop=o.dataset.oldPaddingTop??"",o.style.paddingBottom=o.dataset.oldPaddingBottom??""},pe=o=>{const e=o;e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight="0",e.style.paddingTop="0",e.style.paddingBottom="0"},me=o=>{const e=o;requestAnimationFrame(()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight="0",e.style.paddingTop=e.dataset.oldPaddingTop??"",e.style.paddingBottom=e.dataset.oldPaddingBottom??"",e.style.overflow="hidden"})},de=o=>{const e=o;e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow??""},ce=o=>{const e=o;e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},ge=o=>{const e=o;e.scrollHeight!==0&&(e.style.maxHeight="0",e.style.paddingTop="0",e.style.paddingBottom="0")},_=o=>j(o);return(o,e)=>(S(),$("li",{role:"menuitem","aria-haspopup":"true","aria-expanded":y.value,class:x([a(r).b(),a(r).is("active",H.value),a(r).is("opened",y.value),a(r).is("disabled",m.disabled)]),onMouseenter:c,onMouseleave:e[3]||(e[3]=()=>P()),onFocus:c,onClick:e[4]||(e[4]=T=>o.$emit("click"))},[a(i).isMenuPopup.value?(S(),ae(a(ue),{key:0,visible:y.value,effect:"light",pure:!0,offset:Q.value,"show-arrow":!1,persistent:a(i).props.persistent,"popper-class":z.value,placement:A.value,teleported:E.value,"fallback-placements":J.value,transition:V.value,"gpu-acceleration":!1},{content:F(()=>[h("div",{class:x([a(t).m(g.value),a(t).m("popup-container"),z.value]),onMouseenter:e[0]||(e[0]=T=>c(T,100)),onMouseleave:e[1]||(e[1]=()=>P(!0)),onFocus:e[2]||(e[2]=T=>c(T,100))},[h("ul",{class:x([a(t).b(),a(t).m("popup"),a(t).m(`popup-${A.value}`)]),style:N(a(L))},[C(o.$slots,"default")],6)],34)]),default:F(()=>[h("div",{class:x(a(r).e("title")),onClick:n},[C(o.$slots,"title"),h("span",{class:x(a(r).e("icon-arrow")),style:N({transform:y.value?"rotateZ(180deg)":"none"})},e[5]||(e[5]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[h("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})],-1)]),6)],2)]),_:3},8,["visible","offset","persistent","popper-class","placement","teleported","fallback-placements","transition"])):(S(),$(ie,{key:1},[h("div",{ref_key:"verticalTitleRef",ref:v,class:x(a(r).e("title")),onClick:n},[C(o.$slots,"title"),h("span",{class:x(a(r).e("icon-arrow")),style:N({transform:y.value?"rotateZ(180deg)":"none"})},e[6]||(e[6]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[h("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})],-1)]),6)],2),xe(Ce,{name:"gui-collapse-transition",onBeforeEnter:pe,onEnter:me,onAfterEnter:de,onEnterCancelled:_,onBeforeLeave:ce,onLeave:ge,onAfterLeave:_,onLeaveCancelled:_},{default:F(()=>[ye(h("ul",{role:"menu",class:x([a(t).b(),a(t).m("inline")]),style:N(a(L))},[C(o.$slots,"default")],6),[[Me,y.value]])]),_:3})],64))],42,Pe))}}),Qe={title:"Feedback/Menu",component:re,argTypes:{},args:{},parameters:{docs:{description:{component:"Menu that provides navigation for your website."}}}},Oe=m=>({components:{GMenu:re,GConfigProvider:ke,GButton:Te,GMenuItem:Ge,GMenuItemGroup:Ie,GSubMenu:$e,GIconFont:we},setup(){const u=M(!1);function r(){console.log("hola")}return{args:m,isCollapse:u,hola:r}},template:`
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
    `}),R=Oe.bind({}),We=["Default"];R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => {
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
      function hola() {
        console.log('hola');
      }
      return {
        args,
        isCollapse,
        hola
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
}`,...R.parameters?.docs?.source}}};export{R as Default,We as __namedExportsOrder,Qe as default};
