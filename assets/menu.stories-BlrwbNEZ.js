import{c as a,d as U,r as M,w as ee,o as ne,B as te,C as oe,t as P,j as h,q as w,n as N,k as y,u as l,b as I,g as ye,P as le,a as ie,e as H,F as re,s as K,z as xe,x as Me,f as we,T as Ce,h as Te,v as ke}from"./vue.esm-bundler-Deokl1F5.js";import{c as E}from"./useEmptyValues-S5EffpHc.js";import{n as ue}from"./index-CL9Y1TT6.js";import{G as Ie}from"./index-DplprqvC.js";import{G as Se}from"./index-BXyPvuAD.js";import{G as Ge}from"./ConfigProvider-DiWOjIRd.js";import"./props.util-Dtwzmmnf.js";import"./index-Cla1j_Lq.js";import"./index-D9lthdDW.js";import"./index-iviVQk4X.js";import"./error.util-CmMZjXeT.js";import"./index-C-KaQxZk.js";import"./event.constant-LtAI3-H4.js";import"./index-BmLAfq-y.js";import"./index-B-U0DsHd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const se=Symbol("menuContextKey"),L=Symbol("subMenuContextKey"),Z=(m,r,u)=>{if(!m)throw new Error(`[${r}] can not inject ${u} — make sure it is rendered inside a <GMenu>`);return m},Oe=(m,r)=>{const u=E("menu");return a(()=>u.cssVarBlock({"text-color":m.textColor??"","hover-text-color":m.textColor??"","bg-color":m.backgroundColor??"","hover-bg-color":m.backgroundColor??"","active-color":m.activeTextColor??"",level:`${r}`}))},Be={class:"gui-menu-wrapper"},ae=U({name:"GMenu",__name:"Menu",props:{mode:{type:String,default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:Array,default:()=>[]},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,default:"hover"},collapse:Boolean,collapseTransition:{type:Boolean,default:!0},backgroundColor:String,textColor:String,activeTextColor:String,popperOffset:{type:Number,default:6},popperEffect:{type:String,default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},persistent:{type:Boolean,default:!0}},emits:["open","close","select"],setup(m,{expose:r,emit:u}){const t=m,i=u,d=E("menu"),T=M(),S=ye(),p=M(t.defaultOpeneds&&!t.collapse?t.defaultOpeneds.slice(0):[]),v=M(t.defaultActive),b=M({}),g=M({}),G=a(()=>t.mode==="horizontal"||t.mode==="vertical"&&t.collapse),f=n=>g.value[n]?.indexPath??[],x=(n,s)=>{p.value.includes(n)||(t.uniqueOpened&&(p.value=p.value.filter(c=>s.includes(c))),p.value.push(n),i("open",n,s))},k=n=>{const s=p.value.indexOf(n);s!==-1&&p.value.splice(s,1)},$=(n,s)=>{k(n),i("close",n,s)},V=({index:n,indexPath:s})=>{p.value.includes(n)?$(n,s):x(n,s)},A=n=>{(t.mode==="horizontal"||t.collapse)&&(p.value=[]);const{index:s,indexPath:c}=n;if(s==null||c==null)return;const B=S?.appContext.config.globalProperties.$router;if(t.router&&B){const R=n.route??s,X=B.push(R).then(q=>(q||(v.value=s),q));i("select",s,c,{index:s,indexPath:c,route:R},X)}else v.value=s,i("select",s,c,{index:s,indexPath:c})},W=n=>{const s=b.value,c=s[n]||v.value&&s[v.value]||s[t.defaultActive];v.value=c?.index??n},F=()=>{const n=v.value&&b.value[v.value];!n||t.mode==="horizontal"||t.collapse||n.indexPath.forEach(s=>{const c=g.value[s];c&&x(s,c.indexPath)})},j=n=>{b.value[n.index]=n},J=n=>{delete b.value[n.index]},z=n=>{g.value[n.index]=n},D=n=>{delete g.value[n.index]};ee(()=>t.defaultActive,n=>{b.value[n]||(v.value=""),W(n)}),ee(()=>t.collapse,n=>{n&&(p.value=[])}),ee(b,F,{deep:!0}),ne(()=>{F()}),te(se,{props:oe({mode:a(()=>t.mode),collapse:a(()=>t.collapse),uniqueOpened:a(()=>t.uniqueOpened),router:a(()=>t.router),menuTrigger:a(()=>t.menuTrigger),backgroundColor:a(()=>t.backgroundColor),textColor:a(()=>t.textColor),activeTextColor:a(()=>t.activeTextColor),popperEffect:a(()=>t.popperEffect),popperClass:a(()=>t.popperClass),popperOffset:a(()=>t.popperOffset),showTimeout:a(()=>t.showTimeout),hideTimeout:a(()=>t.hideTimeout),persistent:a(()=>t.persistent)}),openedMenus:p,items:b,subMenus:g,activeIndex:v,isMenuPopup:G,addMenuItem:j,removeMenuItem:J,addSubMenu:z,removeSubMenu:D,openMenu:x,closeMenu:$,handleMenuItemClick:A,handleSubMenuClick:V});const Q=M(!1);te(L,{level:0,indexPath:[],addSubMenu:z,removeSubMenu:D,mouseInChild:Q});const O=a(()=>d.cssVarBlock({"text-color":t.textColor??"","hover-text-color":t.textColor??"","bg-color":t.backgroundColor??"","hover-bg-color":t.backgroundColor??"","active-color":t.activeTextColor??"",level:"0"}));return r({open:n=>{const s=f(n);s.forEach(c=>x(c,s))},close:k,activeIndex:v,openedMenus:p}),(n,s)=>(I(),P("div",Be,[h("ul",{ref_key:"menuRef",ref:T,role:"menubar",class:y([l(d).b(),l(d).m(m.mode),l(d).is("collapse",m.collapse)]),style:N(O.value)},[w(n.$slots,"default")],6)]))}});ae.__docgenInfo={name:"GMenu",description:"Port of element-plus's real `ElMenu` (`node_modules/element-plus/es/components/menu/src/menu.mjs`,\n2.9.7) onto the shared `menuContextKey`/`subMenuContextKey` context module\n(Design Decision 1, ep-extraction-v6 design.md). Zero `element-plus` import.\n\nDeliberate scope cuts vs the real `ElMenu` (documented, not silent):\n - The horizontal \"ellipsis overflow / more\" feature (ResizeObserver-driven\n   `sliceIndex` measurement, `More` icon submenu) is NOT ported. It needs\n   real browser layout measurement that jsdom cannot reliably provide, and\n   no current consumer (`../front-b2b`'s only real usage, `MenuRoute`) uses\n   horizontal mode at all. `ellipsis`/`ellipsisIcon` props are dropped.\n - `closeOnClickOutside` is dropped — never declared by the pre-migration\n   wrapper either, not used anywhere in `../front-b2b`.\n - The width-fade `collapseTransition` animation (element-plus's own\n   `ElMenuCollapseTransition`, which imperatively manipulates\n   `el.style.width`/`dataset.scrollWidth`) is NOT ported. The prop is kept\n   for API compatibility but is a no-op: `../front-b2b`'s only real\n   consumer (`MenuRoute/index.vue`) already passes\n   `:collapse-transition=\"false\"`, so this is a zero-behavior-change cut\n   for the one real production usage.\n - `backgroundColor`/`textColor`/`activeTextColor` CSS vars are ported, but\n   the automatic `hover-bg-color` darken-by-20% (element-plus's own\n   `useMenuColor`, via `@ctrl/tinycolor`) is NOT — it would require adding\n   a brand-new dependency purely for a color nicety no consumer uses\n   (`backgroundColor` is not passed anywhere in `../front-b2b`). Falls back\n   to `backgroundColor` verbatim when provided.",tags:{},exportName:"default",displayName:"Menu",expose:[{name:"open"},{name:"close"},{name:"activeIndex"},{name:"openedMenus"}],props:[{name:"mode",description:"layout mode of the menu",values:["horizontal","vertical"],type:{name:"string"},defaultValue:{func:!1,value:"'vertical'"}},{name:"defaultActive",description:"index of active menu on page load",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"defaultOpeneds",description:"array that contains indexes of currently active sub-menus",type:{name:"string[]"},defaultValue:{func:!0,value:"() => []"}},{name:"uniqueOpened",description:"whether only one sub-menu can be active",type:{name:"boolean"}},{name:"router",description:`whether vue-router mode is activated. If true, index will be used as
'path' to activate the route action. Use with default-active to set the
active item on load.`,type:{name:"boolean"}},{name:"menuTrigger",description:"how sub-menus are triggered, only relevant in `horizontal` mode or when\n`collapse` is `true`",values:["hover","click"],type:{name:"string"},defaultValue:{func:!1,value:"'hover'"}},{name:"collapse",description:"whether the menu is collapsed",type:{name:"boolean"}},{name:"collapseTransition",description:"whether to enable the collapse transition",tags:{deprecated:[{description:"no-op — see file-level comment for rationale",title:"deprecated"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"backgroundColor",description:`background color of Menu (hex format) — CSS var only, no dynamic
hover-darken (see file-level comment)`,type:{name:"string"}},{name:"textColor",description:"text color of Menu (hex format)",type:{name:"string"}},{name:"activeTextColor",description:"text color of currently active menu item (hex format)",type:{name:"string"}},{name:"popperOffset",description:"offset of the appended sub menu popper",type:{name:"number"},defaultValue:{func:!1,value:"6"}},{name:"popperEffect",description:'Tooltip theme of sub menu popper, effective for `mode="horizontal"`',type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"popperClass",description:"custom class name for all popper menus",type:{name:"string"}},{name:"showTimeout",description:"timeout in milliseconds to show sub menus",type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"hideTimeout",description:"timeout in milliseconds to hide sub menus",type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"persistent",description:"when the sub menu popper is inactive and `persistent` is `false`, it\nwill be destroyed",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"open",type:{names:["string"]}},{name:"close",type:{names:["string"]}},{name:"select",type:{names:["string"]}}],slots:[{name:"default",description:"Menu Content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/menu/Menu.vue"]};const pe=U({name:"GMenuItem",__name:"MenuItem",props:{index:{type:String,default:null},route:{type:[String,Object]},disabled:Boolean},emits:["click"],setup(m,{emit:r}){const u=m,t=r,i=E("menu"),d=Z(K(se,void 0),"GMenuItem","root menu context"),T=Z(K(L,void 0),"GMenuItem","sub menu context"),S=a(()=>T.level===0),p=a(()=>u.index??""),v=a(()=>[...T.indexPath,p.value]),b=a(()=>p.value!==""&&p.value===d.activeIndex.value),g=oe({index:p,indexPath:v,active:b}),G=()=>{u.disabled||(d.handleMenuItemClick({index:p.value,indexPath:v.value,route:u.route}),t("click",g))};return ne(()=>{T.addSubMenu(g),d.addMenuItem(g)}),le(()=>{T.removeSubMenu(g),d.removeMenuItem(g)}),(f,x)=>(I(),P("li",{role:"menuitem",tabindex:"-1",class:y([l(i).b("item"),l(i).is("active",b.value),l(i).is("disabled",m.disabled)]),onClick:G},[S.value&&l(d).props.collapse&&f.$slots.title?(I(),ie(l(ue),{key:0,effect:l(d).props.popperEffect,placement:"right","fallback-placements":["left"],persistent:l(d).props.persistent},{content:H(()=>[w(f.$slots,"title")]),default:H(()=>[h("div",{class:y(l(i).be("tooltip","trigger"))},[w(f.$slots,"default")],2)]),_:3},8,["effect","persistent"])):(I(),P(re,{key:1},[w(f.$slots,"default"),w(f.$slots,"title")],64))],2))}});pe.__docgenInfo={name:"GMenuItem",description:"Port of element-plus's real `ElMenuItem`\n(`node_modules/element-plus/es/components/menu/src/menu-item2.mjs`, 2.9.7)\nonto the shared `menuContextKey`/`subMenuContextKey` context module. Zero\n`element-plus` import.",tags:{},exportName:"default",displayName:"MenuItem",props:[{name:"index",type:{name:"string | null"},defaultValue:{func:!1,value:"null"}},{name:"route",type:{name:"RouteLocationRaw | string"}},{name:"disabled",type:{name:"boolean"}}],events:[{name:"click",type:{names:["MenuItemRegistered"]}}],slots:[{name:"default",description:"Menu Item Content"},{name:"title",description:"title shown in the collapsed-mode tooltip"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/menu/MenuItem.vue"]};const me=U({name:"GMenuItemGroup",__name:"MenuItemGroup",props:{title:String},emits:["click"],setup(m){const r=E("menu-item-group");return(u,t)=>(I(),P("li",{class:y(l(r).b()),onClick:t[0]||(t[0]=i=>u.$emit("click"))},[h("div",{class:y(l(r).e("title"))},[w(u.$slots,"title",{},()=>[xe(Me(m.title),1)])],2),h("ul",null,[w(u.$slots,"default")])],2))}});me.__docgenInfo={name:"GMenuItemGroup",description:"Port of element-plus's real `ElMenuItemGroup`\n(`node_modules/element-plus/es/components/menu/src/menu-item-group2.mjs`,\n2.9.7). Zero `element-plus` import.\n\nPurely presentational — does NOT provide or inject any menu context.\n`inject(subMenuContextKey, ...)` calls made by a `GMenuItem`/`GSubMenu`\nnested inside a `GMenuItemGroup` transparently bubble through to the\nnearest real `GMenu`/`GSubMenu` ancestor (Vue's own provide/inject\nresolution skips components that never called `provide`), matching\nelement-plus's own real behavior where a group never appears in an item's\n`indexPath`.\n\nDeviation vs the pre-migration wrapper: `index`/`route`/`disabled` props\nare dropped. They were dead, copy-pasted-by-mistake props from\n`MenuItem.vue`/`MenuSub.vue` — element-plus's real `ElMenuItemGroup` only\never accepts `title`, and no consumer in `../front-b2b` uses\n`GMenuItemGroup` at all (confirmed via grep), so there is no real usage to\npreserve.",tags:{},exportName:"default",displayName:"MenuItemGroup",props:[{name:"title",description:"title of the group, can be replaced with a `title` slot",type:{name:"string"}}],events:[{name:"click"}],slots:[{name:"title",description:"title of the menu item group"},{name:"default",description:"Menu Group Content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/menu/MenuItemGroup.vue"]};const Pe=["aria-expanded"],de=U({name:"GSubMenu",__name:"MenuSub",props:{index:{type:String,required:!0},showTimeout:{type:Number,default:void 0},hideTimeout:{type:Number,default:void 0},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:void 0}},emits:["click"],setup(m){const r=m,u=E("sub-menu"),t=E("menu"),i=Z(K(se,void 0),"GSubMenu","root menu context"),d=Z(K(L,void 0),"GSubMenu","sub menu context"),T=M({}),S=M({}),p=M(!1),v=M();let b,g;const G=a(()=>d.level===0),f=a(()=>i.props.mode),x=a(()=>i.openedMenus.value.includes(r.index)),k=a(()=>[...d.indexPath,r.index]),$=a(()=>[...Object.values(T.value),...Object.values(S.value)].some(o=>o.active)),V=a(()=>r.teleported!==void 0?r.teleported:r.popperAppendToBody!==void 0?r.popperAppendToBody:G.value),A=a(()=>f.value==="horizontal"&&G.value?"bottom-start":"right-start"),W=a(()=>f.value==="horizontal"&&G.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),F=a(()=>i.props.collapse?`${t.namespace.value}-zoom-in-left`:`${t.namespace.value}-zoom-in-top`),j=Oe(i.props,d.level+1),J=a(()=>r.popperOffset??i.props.popperOffset),z=a(()=>r.popperClass??i.props.popperClass),D=a(()=>r.showTimeout??i.props.showTimeout),Q=a(()=>r.hideTimeout??i.props.hideTimeout),O=oe({index:r.index,indexPath:k,active:$}),n=()=>{const e=i.props.menuTrigger==="hover"&&f.value==="horizontal",C=i.props.collapse&&f.value==="vertical";e||C||r.disabled||i.handleSubMenuClick({index:r.index,indexPath:k.value})},s=()=>{b&&clearTimeout(b),g&&clearTimeout(g)},c=(o,e=D.value)=>{if(o.type==="focus")return;const C=i.props.menuTrigger==="click"&&f.value==="horizontal",be=!i.props.collapse&&f.value==="vertical";if(C||be||r.disabled){p.value=!0;return}p.value=!0,s(),b=setTimeout(()=>{i.openMenu(r.index,k.value)},e),V.value&&(d.mouseInChild.value=!0)},B=(o=!1)=>{const e=i.props.menuTrigger==="click"&&f.value==="horizontal",C=!i.props.collapse&&f.value==="vertical";if(e||C){p.value=!1;return}s(),p.value=!1,g=setTimeout(()=>{p.value||i.closeMenu(r.index,k.value)},Q.value),V.value&&o&&d.handleMouseleave?.(!0)},R=o=>{S.value[o.index]=o},X=o=>{delete S.value[o.index]};te(L,{level:d.level+1,indexPath:k.value,addSubMenu:R,removeSubMenu:X,mouseInChild:p,handleMouseleave:B}),ne(()=>{i.addSubMenu(O),d.addSubMenu(O)}),le(()=>{d.removeSubMenu(O),i.removeSubMenu(O),s()});const q=o=>{o.style.maxHeight="",o.style.overflow=o.dataset.oldOverflow??"",o.style.paddingTop=o.dataset.oldPaddingTop??"",o.style.paddingBottom=o.dataset.oldPaddingBottom??""},ce=o=>{const e=o;e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.height&&(e.dataset.elExistsHeight=e.style.height),e.style.maxHeight="0",e.style.paddingTop="0",e.style.paddingBottom="0"},fe=o=>{const e=o;requestAnimationFrame(()=>{e.dataset.oldOverflow=e.style.overflow,e.dataset.elExistsHeight?e.style.maxHeight=e.dataset.elExistsHeight:e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight="0",e.style.paddingTop=e.dataset.oldPaddingTop??"",e.style.paddingBottom=e.dataset.oldPaddingBottom??"",e.style.overflow="hidden"})},ve=o=>{const e=o;e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow??""},ge=o=>{const e=o;e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},he=o=>{const e=o;e.scrollHeight!==0&&(e.style.maxHeight="0",e.style.paddingTop="0",e.style.paddingBottom="0")},Y=o=>q(o);return(o,e)=>(I(),P("li",{role:"menuitem","aria-haspopup":"true","aria-expanded":x.value,class:y([l(u).b(),l(u).is("active",$.value),l(u).is("opened",x.value),l(u).is("disabled",m.disabled)]),onMouseenter:c,onMouseleave:e[3]||(e[3]=()=>B()),onFocus:c,onClick:e[4]||(e[4]=C=>o.$emit("click"))},[l(i).isMenuPopup.value?(I(),ie(l(ue),{key:0,visible:x.value,effect:"light",pure:!0,offset:J.value,"show-arrow":!1,persistent:l(i).props.persistent,"popper-class":z.value,placement:A.value,teleported:V.value,"fallback-placements":W.value,transition:F.value,"gpu-acceleration":!1},{content:H(()=>[h("div",{class:y([l(t).m(f.value),l(t).m("popup-container"),z.value]),onMouseenter:e[0]||(e[0]=C=>c(C,100)),onMouseleave:e[1]||(e[1]=()=>B(!0)),onFocus:e[2]||(e[2]=C=>c(C,100))},[h("ul",{class:y([l(t).b(),l(t).m("popup"),l(t).m(`popup-${A.value}`)]),style:N(l(j))},[w(o.$slots,"default")],6)],34)]),default:H(()=>[h("div",{class:y(l(u).e("title")),onClick:n},[w(o.$slots,"title"),h("span",{class:y(l(u).e("icon-arrow")),style:N({transform:x.value?"rotateZ(180deg)":"none"})},e[5]||(e[5]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[h("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})],-1)]),6)],2)]),_:3},8,["visible","offset","persistent","popper-class","placement","teleported","fallback-placements","transition"])):(I(),P(re,{key:1},[h("div",{ref_key:"verticalTitleRef",ref:v,class:y(l(u).e("title")),onClick:n},[w(o.$slots,"title"),h("span",{class:y(l(u).e("icon-arrow")),style:N({transform:x.value?"rotateZ(180deg)":"none"})},e[6]||(e[6]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[h("path",{fill:"currentColor",d:"M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"})],-1)]),6)],2),we(Ce,{name:"gui-collapse-transition",onBeforeEnter:ce,onEnter:fe,onAfterEnter:ve,onEnterCancelled:Y,onBeforeLeave:ge,onLeave:he,onAfterLeave:Y,onLeaveCancelled:Y},{default:H(()=>[Te(h("ul",{role:"menu",class:y([l(t).b(),l(t).m("inline")]),style:N(l(j))},[w(o.$slots,"default")],6),[[ke,x.value]])]),_:3})],64))],42,Pe))}});de.__docgenInfo={name:"GSubMenu",description:"Port of element-plus's real `ElSubMenu`\n(`node_modules/element-plus/es/components/menu/src/sub-menu.mjs`, 2.9.7)\nonto the shared context module. Zero `element-plus` import.\n\nDeliberate scope cuts vs the real `ElSubMenu` (documented, not silent):\n - `expandCloseIcon`/`expandOpenIcon`/`collapseCloseIcon`/`collapseOpenIcon`\n   props are dropped — the pre-migration wrapper already had them commented\n   out (dead code), so this is a zero-behavior-change cut. The arrow icon\n   is always the same inlined `ArrowDown` glyph (same technique WU3\n   /skeleton used for its own icon: raw `<svg>` extracted from\n   `@element-plus/icons-vue`'s bundled source, zero new dependency).\n - `doDestroy()`/`handleCollapseToggle()` (explicit popper-instance\n   teardown when `collapse` flips off) is not ported: this component\n   renders either the popup (`<g-tooltip>`) branch OR the inline-accordion\n   branch via `v-if`/`v-else`, so switching `rootMenu.isMenuPopup` already\n   fully unmounts the popup branch through Vue's own lifecycle — an\n   explicit teardown call would be redundant.",tags:{},exportName:"default",displayName:"MenuSub",props:[{name:"index",type:{name:"string"},required:!0},{name:"showTimeout",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"hideTimeout",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"popperClass",type:{name:"string"}},{name:"disabled",type:{name:"boolean"}},{name:"popperAppendToBody",tags:{deprecated:[{description:"use `teleported` instead",title:"deprecated"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"teleported",type:{name:"boolean"},defaultValue:{func:!1,value:"undefined"}},{name:"popperOffset",type:{name:"number"},defaultValue:{func:!1,value:"undefined"}}],events:[{name:"click"}],slots:[{name:"title",description:"title of the sub menu"},{name:"default",description:"Sub Menu Content"}],sourceFiles:["/home/runner/work/global-design-system/global-design-system/components/menu/MenuSub.vue"]};const We={title:"Feedback/Menu",component:ae,argTypes:{},args:{},parameters:{docs:{description:{component:"Menu that provides navigation for your website."}}}},Ee=m=>({components:{GMenu:ae,GConfigProvider:Ge,GButton:Ie,GMenuItem:pe,GMenuItemGroup:me,GSubMenu:de,GIconFont:Se},setup(){const r=M(!1);function u(){console.log("hola")}return{args:m,isCollapse:r,hola:u}},template:`
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
    `}),_=Ee.bind({});_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => {
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
}`,..._.parameters?.docs?.source}}};const Je=["Default"];export{_ as Default,Je as __namedExportsOrder,We as default};
