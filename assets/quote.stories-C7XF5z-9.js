import{t as he,d as oe,x as O,e as C,u as s,l as y,n as Ee,r as T,c as V,K as Ce,o as Oe,C as Se,w as q,m as x,k as A,A as re,y as $,h as U,s as ye,f as z,j as Fe,b as X,a0 as xe,a7 as we,F as Ne,z as $e,D as ae,g as Me,ai as Ue}from"./vue.esm-bundler-BiLMJBXK.js";import{S as se}from"./index-jZ5CM1us.js";import{V as Ge,A as Be,M as ke}from"./index-n7oMM4mg.js";import{_ as t}from"./iframe-CpXRiOYt.js";import{d as qe}from"./index-mx_pK5Ly.js";import{f as De}from"./install-BOOPtfBD.js";import{u as ie}from"./index-BzJBbEF1.js";import{G as j}from"./ConfigProvider-qZNzJU0u.js";import{b as le,a as je}from"./documentation-stories-CAEV4JNo.js";import"./index-DC_o2tv7.js";import"./index-QfInVgAc.js";import"./index-4o8CGBx3.js";import"./index-Bc6e4lZJ.js";import"./index-BBJ4PQcT.js";import"./_arrayPush-DTRztRsG.js";import"./index-D4Nj_xQj.js";import"./index-BnpPYVuG.js";import"./aria-BUADUvnR.js";import"./index-zW_pOwy1.js";import"./index-CK28B4dM.js";import"./use-form-item-C4WJLOCD.js";import"./constants-Dnj8X3EN.js";import"./index-BEnhWylp.js";import"./index-D0Pmq04_.js";import"../sb-preview/runtime.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CvPWi8JN.js";import"./index-CX_Dg7_S.js";import"./index-CYijZHa6.js";import"./error-Cq9Fpw4b.js";/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ze=Object.prototype.hasOwnProperty,ue=(e,a)=>ze.call(e,a),Re=e=>e!==null&&typeof e=="object";const Ie="__epPropKey",me=e=>e,Qe=e=>Re(e)&&!!e[Ie],We=(e,a)=>{if(!Re(e)||Qe(e))return e;const{values:r,required:o,default:i,type:d,validator:m}=e,l={type:d,required:!!o,validator:r||m?u=>{let c=!1,n=[];if(r&&(n=Array.from(r),ue(e,"default")&&n.push(i),c||(c=n.includes(u))),m&&(c||(c=m(u))),!c&&n.length>0){const f=[...new Set(n)].map(_=>JSON.stringify(_)).join(", ");he(`Invalid prop: validation failed${a?` for prop "${a}"`:""}. Expected one of [${f}], got value ${JSON.stringify(u)}.`)}return c}:void 0,[Ie]:!0};return ue(e,"default")&&(l.default=i),l},Ke=e=>De(Object.entries(e).map(([a,r])=>[a,We(r,a)])),He=(e,a)=>{if(e.install=r=>{for(const o of[e,...Object.values(a??{})])r.component(o.name,o)},a)for(const[r,o]of Object.entries(a))e[r]=o;return e},Ye=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW"],Ze=["ALL_COUNTRY","EU","PYUSD","USDC","USDT"],Je=[...Ye,...Ze],de={xs:"16px",sm:"24px",md:"32px",lg:"40px",xl:"48px","2xl":"128px","3xl":"256px"},Xe=Ke({name:{type:me(String),required:!0},size:{type:me(String),default:"md"},lazyLoad:{type:Boolean,default:!0}});function et(e){e.name&&!Je.includes(String(e.name).toUpperCase())&&(`${e.name}`,void 0)}const tt=Object.assign({"../assets/flags/ad.svg":()=>t(()=>import("./ad--wTYX8Nn-DndRYYtJ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ae.svg":()=>t(()=>import("./ae-vxFa2Zd4-B1QueIvN.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/af.svg":()=>t(()=>import("./af-CtVagVhH-HlquDTC7.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ag.svg":()=>t(()=>import("./ag-Cp9iBiaw-BUCLkqCv.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ai.svg":()=>t(()=>import("./ai-C1wFkTJ4-moqAb4WP.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/al.svg":()=>t(()=>import("./al-CfIqoURz-Bi-dacOp.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/all_country.svg":()=>t(()=>import("./all_country-DfaSRYIJ-D5D1A897.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/am.svg":()=>t(()=>import("./am-BD7_EiIe-CNg6yCG7.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ao.svg":()=>t(()=>import("./ao-D-J3j-PJ-CVsEMS6I.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/aq.svg":()=>t(()=>import("./aq-N-W7f5UV-DgmL-WNy.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ar.svg":()=>t(()=>import("./ar-CqvvMSjB-C6gu4DV2.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/as.svg":()=>t(()=>import("./as-BC_n430g-B5Iy4Fjk.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/at.svg":()=>t(()=>import("./at-BEqUOJZz-C_uAfFtr.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/au.svg":()=>t(()=>import("./au-Bhi8bOJC-CBKld3eO.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/aw.svg":()=>t(()=>import("./aw--pH7Wpvw-DsTvfLS1.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ax.svg":()=>t(()=>import("./ax-DkkHR75V-CF-iYoNL.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/az.svg":()=>t(()=>import("./az-CaOkqvYm-Cr8_vGyp.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ba.svg":()=>t(()=>import("./ba-CMvnaeDx-D25xGKZU.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bb.svg":()=>t(()=>import("./bb-DmmqUXfe-CK-l_MKp.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bd.svg":()=>t(()=>import("./bd-CuSRJUJW-DOAwcSjt.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/be.svg":()=>t(()=>import("./be-D5Gk2A6h-DoJjcXPs.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bf.svg":()=>t(()=>import("./bf-DPuyMoPT-KE71BFA-.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bg.svg":()=>t(()=>import("./bg-CP6lieBH-HKKm2VlI.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bh.svg":()=>t(()=>import("./bh-Dg1HxntY-DMwYWlG5.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bi.svg":()=>t(()=>import("./bi-DlRL7ABw-CG1j2AFQ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bj.svg":()=>t(()=>import("./bj-BM7LVivf-NArUB9hg.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bl.svg":()=>t(()=>import("./bl-DWzXXPyK-MF4wy6yj.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bm.svg":()=>t(()=>import("./bm-CPBOZHtV-CGnkb_BN.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bn.svg":()=>t(()=>import("./bn-CYRmiRpz-BmO7aA-U.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bo.svg":()=>t(()=>import("./bo-5krUF4t6-BkkNlmFm.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/br.svg":()=>t(()=>import("./br-CJ6sHeuL-AUjr0maZ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bs.svg":()=>t(()=>import("./bs-I3Lq_TMA-Br5VgBm4.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bt.svg":()=>t(()=>import("./bt-VUFzS_Fp-B0E-LCdq.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bw.svg":()=>t(()=>import("./bw-CzZOT6F7--5cby3NA.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/by.svg":()=>t(()=>import("./by-C9XIj79q-Ccr4oVnc.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/bz.svg":()=>t(()=>import("./bz-DP5vftaW-Bn6uqD94.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ca.svg":()=>t(()=>import("./ca-DL3rTweS-BL--R4cR.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cc.svg":()=>t(()=>import("./cc-D1UbyL7d-WAVWMgUD.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cd.svg":()=>t(()=>import("./cd-_swy-A9D-BerJfPou.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cf.svg":()=>t(()=>import("./cf-BJuFFKBT-MUzUUyv-.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cg.svg":()=>t(()=>import("./cg-DqSVeH2z-DwJ0oTT0.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ch.svg":()=>t(()=>import("./ch-BmYc3LLE-DPDkB50M.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ci.svg":()=>t(()=>import("./ci-DB4d1r0V-CFsfU2HM.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ck.svg":()=>t(()=>import("./ck-BoQr-uC2-DxOAOktl.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cl.svg":()=>t(()=>import("./cl-B801sLsY-CEehzB9O.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cm.svg":()=>t(()=>import("./cm-DMA1IFCU-C_VXi7JW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cn.svg":()=>t(()=>import("./cn-C6e3_JS7-QAUFkgy5.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/co.svg":()=>t(()=>import("./co-DEJfSF7J-zuQcAE7n.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cr.svg":()=>t(()=>import("./cr-gORWcFrJ-cxdssdRT.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cu.svg":()=>t(()=>import("./cu-CusrR7fN-aYcJUxz-.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cv.svg":()=>t(()=>import("./cv-CRrCg4_r-Cfeq3kXt.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cw.svg":()=>t(()=>import("./cw-CCYJwovX-BsvFyz9l.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cx.svg":()=>t(()=>import("./cx-CdsSwJkp-C_CYNEGc.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cy.svg":()=>t(()=>import("./cy-CqsT6Kc_-B2bo6bma.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/cz.svg":()=>t(()=>import("./cz-BzNeFqXN-BT4Yf6bU.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/de.svg":()=>t(()=>import("./de-ydLuPsfh-BbaW5oD4.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/dj.svg":()=>t(()=>import("./dj-B1BVmUqN-GswDKbeB.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/dk.svg":()=>t(()=>import("./dk-DOztVs-l-Tr8q300b.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/dm.svg":()=>t(()=>import("./dm-CQ-DNWzn-V9QVY6xh.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/do.svg":()=>t(()=>import("./do-CEb9RVAH-CIsQ8h5V.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/dz.svg":()=>t(()=>import("./dz-BkB4sfWl-BQKAnAnR.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ec.svg":()=>t(()=>import("./ec-BVQWX4z9-DOekTMtg.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ee.svg":()=>t(()=>import("./ee-Dg1Ra0zD-DjVzb6YJ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/eg.svg":()=>t(()=>import("./eg-RN1aWYnX-C3n_--lW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/eh.svg":()=>t(()=>import("./eh-BXXFNl7j-Dkt1eQn-.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/er.svg":()=>t(()=>import("./er-DY4haraG-BaVYFDlQ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/es.svg":()=>t(()=>import("./es-BibotpYl-DiZrRfNY.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/et.svg":()=>t(()=>import("./et-BRnPILOQ-BaVLNfIY.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/eu.svg":()=>t(()=>import("./eu-CuV_7WgE-CGxcNaRV.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/fi.svg":()=>t(()=>import("./fi-th7Bw_WE-zdpqs711.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/fj.svg":()=>t(()=>import("./fj-DwKUliYq-CR_GuSZc.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/fk.svg":()=>t(()=>import("./fk-XRGvjUwT-DFFRlLEH.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/fm.svg":()=>t(()=>import("./fm-mH78n4BG-DkiefOFr.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/fo.svg":()=>t(()=>import("./fo-wNTaNoZA-BNQ7E6u-.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/fr.svg":()=>t(()=>import("./fr-m8OT2RzM-BKQmRYzQ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ga.svg":()=>t(()=>import("./ga-BdwlT6uM-BShMbqyZ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gb.svg":()=>t(()=>import("./gb-C8eMf1kO-XgH1k8Wq.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gd.svg":()=>t(()=>import("./gd-CCRfIahw-Dq4ctcFb.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ge.svg":()=>t(()=>import("./ge-C6NQOm5N-B8Iz7Gpb.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gf.svg":()=>t(()=>import("./gf-BlDin4ku-WRTBVLDY.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gg.svg":()=>t(()=>import("./gg-BvnCZhBs-F7lkooh2.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gh.svg":()=>t(()=>import("./gh-0NTZUFsd-CMNIjKMX.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gi.svg":()=>t(()=>import("./gi-DdyaxRuC-B_VdBj8v.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gl.svg":()=>t(()=>import("./gl-_-vsnKuK-BIx1PFi2.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gm.svg":()=>t(()=>import("./gm-DpZXuNsF-3oJLcybM.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gn.svg":()=>t(()=>import("./gn-D43RtM10-DtujUvT5.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gp.svg":()=>t(()=>import("./gp-DzrMSDWf-D50UZSBU.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gq.svg":()=>t(()=>import("./gq-ftVBQy5n-fnQFreCV.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gr.svg":()=>t(()=>import("./gr-pMlu318N-CuSSk5rs.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gs.svg":()=>t(()=>import("./gs-CtIq7mnM-BxV9FSQR.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gt.svg":()=>t(()=>import("./gt-B82cV2_0-ClgWm1AK.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gu.svg":()=>t(()=>import("./gu-DDbuQ8r7-DfOY0KPK.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gw.svg":()=>t(()=>import("./gw-CWBeYBcN-D8JJD7b4.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/gy.svg":()=>t(()=>import("./gy-BLYhuMgU-CX9mhD_K.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/hk.svg":()=>t(()=>import("./hk-C47EurJl-BZx6sxA1.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/hn.svg":()=>t(()=>import("./hn-DWsvaLL0-Bgz_4wre.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/hr.svg":()=>t(()=>import("./hr-SH9-lQkp-UDOSSVpX.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ht.svg":()=>t(()=>import("./ht-BvrQ7UGw-OD801IBR.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/hu.svg":()=>t(()=>import("./hu-Bl86zywn-BNNo0ki_.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/id.svg":()=>t(()=>import("./id-BSG7ZIW7-CVuZLMej.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ie.svg":()=>t(()=>import("./ie-CFDyz644-Dk-AiDtg.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/il.svg":()=>t(()=>import("./il-CpZ6Vj3W-CZa0Dw8D.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/im.svg":()=>t(()=>import("./im-CgAuVcRg-C7g2IjpP.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/in.svg":()=>t(()=>import("./in-DSXL8Bm3-C_41yhzK.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/io.svg":()=>t(()=>import("./io-BAwl6ZM8-Dyaiamzh.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/iq.svg":()=>t(()=>import("./iq-C07bB45L-BuCExCDa.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ir.svg":()=>t(()=>import("./ir-tjWGyp59-DlJa0akG.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/is.svg":()=>t(()=>import("./is-ClqHABpz-DyDDAt7c.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/it.svg":()=>t(()=>import("./it-DKu4aFwV-cdPmiyjT.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/je.svg":()=>t(()=>import("./je-TRfq7ZPS-Blad03ws.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/jm.svg":()=>t(()=>import("./jm-DBmIfxUT-BlIsnLLm.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/jo.svg":()=>t(()=>import("./jo-CGVRxWnM-B5YC2A-Z.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/jp.svg":()=>t(()=>import("./jp-suG3MKSI-CHyWHiZ8.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ke.svg":()=>t(()=>import("./ke-CBAeodIz-Cad6e2-_.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/kg.svg":()=>t(()=>import("./kg-BV4GuRJI-D09C5DLP.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/kh.svg":()=>t(()=>import("./kh-DI5E5fxS-Dw9qaKEt.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ki.svg":()=>t(()=>import("./ki-Bcj8nJhD-_Dlo4VkV.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/km.svg":()=>t(()=>import("./km-xEqubqbE-CR8mJ2QQ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/kn.svg":()=>t(()=>import("./kn-De-srfNc-CFyI3i3v.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/kp.svg":()=>t(()=>import("./kp-BOE4trni-DIFe3LRN.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/kr.svg":()=>t(()=>import("./kr-C2Tau8oR-CHnAPcoZ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/kw.svg":()=>t(()=>import("./kw-D2Az3Q5l-0fjHcTMe.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ky.svg":()=>t(()=>import("./ky-D5gyElQ_-DCWTi9Tl.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/kz.svg":()=>t(()=>import("./kz-CiOm7hXH-C2DwBKgC.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/la.svg":()=>t(()=>import("./la-DYGxWlaK-bCGMWUno.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/lb.svg":()=>t(()=>import("./lb-DGQRcWGQ-CDHkRC6G.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/lc.svg":()=>t(()=>import("./lc-BPt-Xs9y-CEq1axW-.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/li.svg":()=>t(()=>import("./li-vFNC_3qw-SzHzp6fg.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/lk.svg":()=>t(()=>import("./lk-p5hfwVC5-BSCKYz84.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/lr.svg":()=>t(()=>import("./lr-DQ08SJdW-DCKCTB9N.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ls.svg":()=>t(()=>import("./ls-WqB4SS8d-CrkL7Tau.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/lt.svg":()=>t(()=>import("./lt-CcTfvaY0-qUdZMoSY.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/lu.svg":()=>t(()=>import("./lu-DXe9ktx2-Dy5eRQi1.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/lv.svg":()=>t(()=>import("./lv-Be5xvFBQ-NcNd8IrV.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ly.svg":()=>t(()=>import("./ly-CBBR3NtO-Oj7uA2UD.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ma.svg":()=>t(()=>import("./ma-CvteQDQR-T1DMpF9_.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mc.svg":()=>t(()=>import("./mc-CRcKMf6e-CGtkPFKy.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/md.svg":()=>t(()=>import("./md-BMs9VdYv-BBMLVWXI.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/me.svg":()=>t(()=>import("./me-bb4_KR9c-oV1uFLF2.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mf.svg":()=>t(()=>import("./mf-DY0Jb9Gn-Dnj6-BwG.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mg.svg":()=>t(()=>import("./mg-DMviXu9f-7bzv6yXm.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mh.svg":()=>t(()=>import("./mh-B7Bp1dKm-DGgvIaA7.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mk.svg":()=>t(()=>import("./mk-DfP9e57x-Bh5u1kX2.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ml.svg":()=>t(()=>import("./ml-CfSzitmz-Cv8KqLfl.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mm.svg":()=>t(()=>import("./mm-C3ZhyyO4-tBQ53ZW1.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mn.svg":()=>t(()=>import("./mn-pYMxRcUR-BbdejJ-G.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mo.svg":()=>t(()=>import("./mo-DUdfILN6-DmkLsQh8.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mp.svg":()=>t(()=>import("./mp-tstpRUbk-CYsWh0pT.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mq.svg":()=>t(()=>import("./mq-DnFOL0ts-D1Z9Ftp0.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mr.svg":()=>t(()=>import("./mr-DZmgEi5Z-BZCKeLGm.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ms.svg":()=>t(()=>import("./ms-CUqle9aW-CcKTng6m.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mt.svg":()=>t(()=>import("./mt-DBd1KjhD-hlrLS_mX.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mu.svg":()=>t(()=>import("./mu-C3GgQ0iD-DVuArfhN.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mv.svg":()=>t(()=>import("./mv-CmtF9SJC-ByvTXcMT.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mw.svg":()=>t(()=>import("./mw-Ba7x3Bx1-gg2S5BTu.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mx.svg":()=>t(()=>import("./mx-B1Ud5PPO-iPKzxGJl.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/my.svg":()=>t(()=>import("./my-q5QndmFl-Bp2wTOsA.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/mz.svg":()=>t(()=>import("./mz-BKx7LCW0-09MuCp9x.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/na.svg":()=>t(()=>import("./na-CcBxCChb-DkvkvbuE.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/nc.svg":()=>t(()=>import("./nc-BDT_UMR6-DiBP9oOR.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ne.svg":()=>t(()=>import("./ne-BYZy6Sw1-9lMjKaxP.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/nf.svg":()=>t(()=>import("./nf-DJV847K0-BIWDiDQ3.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ng.svg":()=>t(()=>import("./ng-CQ8mhi5K-FiN2iXJG.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ni.svg":()=>t(()=>import("./ni-DuZD43eS-Si5ZM8YC.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/nl.svg":()=>t(()=>import("./nl-BGYnd8iV-B8q1On-q.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/no.svg":()=>t(()=>import("./no-C9IAwDwu-B61nHIhj.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/np.svg":()=>t(()=>import("./np-YM_BbRba-BBWOPsSJ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/nr.svg":()=>t(()=>import("./nr-gKosjGJ0-C7mcemYp.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/nu.svg":()=>t(()=>import("./nu-Cl0RSvmk-BNy2OnQW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/nz.svg":()=>t(()=>import("./nz-DEKaBi6z-Dh70umqB.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/om.svg":()=>t(()=>import("./om-DmMlkyaR-C84qZ5vl.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pa.svg":()=>t(()=>import("./pa-DBw8CQTB-CU9xeMvY.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pe.svg":()=>t(()=>import("./pe-5khuejzx-ed4BxcfH.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pf.svg":()=>t(()=>import("./pf-D_9vKxXn-BjmRcOrZ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pg.svg":()=>t(()=>import("./pg-Dyqzv-ku-BWjNW6OF.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ph.svg":()=>t(()=>import("./ph-DR6FZgVZ-CafSqtPd.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pk.svg":()=>t(()=>import("./pk-DSZLDNm_-DoSOP8AI.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pl.svg":()=>t(()=>import("./pl-DYBvZT3E-9f0XlJBW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pm.svg":()=>t(()=>import("./pm-Be3CgxFb-Bz_napiC.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pn.svg":()=>t(()=>import("./pn-BwvxMKnO-C_-xw_bZ.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pr.svg":()=>t(()=>import("./pr-DhlWTdtr-CJdREAMN.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ps.svg":()=>t(()=>import("./ps-IG_kH65n-DCl54-Od.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pt.svg":()=>t(()=>import("./pt-LYTGokK0-Vu56Byvr.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pw.svg":()=>t(()=>import("./pw-Kyr2FNUd-CZz_TSc5.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/py.svg":()=>t(()=>import("./py-CvbsRci4-C-TajqCD.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/pyusd.svg":()=>t(()=>import("./pyusd-BEHnPMyE-De5B-NFF.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/qa.svg":()=>t(()=>import("./qa-XaH1oc2E-DSIkmkD2.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/re.svg":()=>t(()=>import("./re-Dqc1PLHZ-B6rSPnVC.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ro.svg":()=>t(()=>import("./ro-BuaI6uCb-DgsqPAKj.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/rs.svg":()=>t(()=>import("./rs-DiJzQNqL-3TL3vWlC.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ru.svg":()=>t(()=>import("./ru-BWwmCb2N-D7BacFlH.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/rw.svg":()=>t(()=>import("./rw-NM05JbFR-CVnBglgz.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sa.svg":()=>t(()=>import("./sa-S4F_x_O3-COsALSZO.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sb.svg":()=>t(()=>import("./sb-DflfGo-L--z_Ydkho.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sc.svg":()=>t(()=>import("./sc-DJ_BWh45-BM62AKTm.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sd.svg":()=>t(()=>import("./sd-DG4JwM3L-RJ4z4UPN.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/se.svg":()=>t(()=>import("./se-Dlx34nk6-BjNgE-PD.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sg.svg":()=>t(()=>import("./sg-8UU7Gijt-DDcm3Pto.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sh.svg":()=>t(()=>import("./sh-BcZebgNX-DJhpsQJY.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/si.svg":()=>t(()=>import("./si-C0aUIBIV-JZDs4wI1.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sj.svg":()=>t(()=>import("./sj-C9IAwDwu-B61nHIhj.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sk.svg":()=>t(()=>import("./sk-CGUp8DmJ-F5u4BLYt.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sl.svg":()=>t(()=>import("./sl-DLElyq4i-tlYR5hLq.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sm.svg":()=>t(()=>import("./sm-8XBZGGz9-CNUOjFGO.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sn.svg":()=>t(()=>import("./sn-Cpb7JvLc-cE687ADn.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/so.svg":()=>t(()=>import("./so-C_Q_nhig-DKu2pUM0.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sr.svg":()=>t(()=>import("./sr-CJiXcmD4-BhwFwhgA.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ss.svg":()=>t(()=>import("./ss-AgPrUXVC-BB--iH_4.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/st.svg":()=>t(()=>import("./st-C2bZuhId-BaFqXaBl.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sv.svg":()=>t(()=>import("./sv-CNRhnN7G-vdn0QC9z.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sx.svg":()=>t(()=>import("./sx-BPLhtjbz-actUdL5w.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sy.svg":()=>t(()=>import("./sy-Bzv0vk-z-kBTMvWyj.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/sz.svg":()=>t(()=>import("./sz-CGY9kK5K-DZIZF0jK.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tc.svg":()=>t(()=>import("./tc-DlUAwlU5-D7QYHi2T.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/td.svg":()=>t(()=>import("./td-EWXkycqq-D_dEjKCk.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tg.svg":()=>t(()=>import("./tg-ua1pOycU-BEiQTJ1E.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/th.svg":()=>t(()=>import("./th-zZfjYAqu-CwLeFatv.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tj.svg":()=>t(()=>import("./tj-DNUxtIB1-BTYcxWdv.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tk.svg":()=>t(()=>import("./tk-DIe9zMtS-D2IxIymD.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tl.svg":()=>t(()=>import("./tl-B5HUjUJ6-JfUCR2R4.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tm.svg":()=>t(()=>import("./tm-OazFZv_m-BYDx1bV5.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tn.svg":()=>t(()=>import("./tn-BVYX21ee-_iJK7PIe.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/to.svg":()=>t(()=>import("./to-CgKuWr_n-B4hg_KXW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tr.svg":()=>t(()=>import("./tr-B3VhyrUW-DYLqb1KW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tt.svg":()=>t(()=>import("./tt-BFOLfUdo-DZlemCyd.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tv.svg":()=>t(()=>import("./tv-CmBMdkHJ-BR1g_Cs8.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tw.svg":()=>t(()=>import("./tw-C2LeBDJe-B3vm1Ly3.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/tz.svg":()=>t(()=>import("./tz-r6cc-Ki9-DAzH3xxs.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ua.svg":()=>t(()=>import("./ua-CpE_dwsP-CPr_qd3n.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ug.svg":()=>t(()=>import("./ug-COk6vKRq-CSFvF5eW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/us.svg":()=>t(()=>import("./us-F-xtG43u-CHkixSWh.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/usdc.svg":()=>t(()=>import("./usdc-f1UdP3Y1-8--e-HAW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/usdt.svg":()=>t(()=>import("./usdt-CNrWIUw2-eK7Bai62.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/uy.svg":()=>t(()=>import("./uy-C5Rg_Vwm-D_F3APgq.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/uz.svg":()=>t(()=>import("./uz-CbJAzoq6-zilkxnmb.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/va.svg":()=>t(()=>import("./va-DsT3YtH2-BcAuCsWY.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/vc.svg":()=>t(()=>import("./vc-B6EfDD56-BLFa2xhX.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ve.svg":()=>t(()=>import("./ve-DxOq8igl-Yh1GjOun.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/vg.svg":()=>t(()=>import("./vg-BFCo9LTD-CoxthDfw.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/vi.svg":()=>t(()=>import("./vi-D-LBo83H-Cb4wKcGz.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/vn.svg":()=>t(()=>import("./vn-BP7Bv-4z-YC1O74uO.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/vu.svg":()=>t(()=>import("./vu-C2YQFp5Y-CuPCmYOw.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/wf.svg":()=>t(()=>import("./wf-CeTSGu33-CHdysUrc.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ws.svg":()=>t(()=>import("./ws-8g7AHyUj-DSisudMt.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/xk.svg":()=>t(()=>import("./xk-CG1nF2W8-Bf2o_aPr.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/ye.svg":()=>t(()=>import("./ye-BqQLGPGR-CavAYrAV.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/yt.svg":()=>t(()=>import("./yt-DZTv3YrR-DuLgDUoV.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/za.svg":()=>t(()=>import("./za-D50dfxQW-DQmPdfox.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/zm.svg":()=>t(()=>import("./zm-DqJeO7Ok-CLMPF8TW.js"),[],import.meta.url).then(e=>e.default),"../assets/flags/zw.svg":()=>t(()=>import("./zw-Cx_FV_dJ-Duy0gDZC.js"),[],import.meta.url).then(e=>e.default)});function rt(e){const a=T(!1),r=T(!1),o=T(null);let i=null;const d=V(()=>de[e.size]??de.md),m=V(()=>({width:d.value,height:d.value,minWidth:d.value,minHeight:d.value})),l=T("");async function u(_){const D=`../assets/flags/${String(_).toLowerCase().trim()}.svg`,g=tt[D];if(!_||!g){l.value="",r.value=!0;return}try{l.value=await g()}catch{l.value="",r.value=!0}}const c=()=>{r.value=!0},n=()=>{a.value=!0},f=()=>{if(!e.lazyLoad){n();return}i&&(i(),i=null);const _=async()=>{await u(e.name??""),r.value||n()};if(o.value){const{stop:D}=qe(o,async([{isIntersecting:g}])=>{g&&(D(),await _())},{threshold:.1,rootMargin:"50px"});i=D}else _()};return Oe(async()=>{e.lazyLoad||await u(e.name??""),f()}),Se(()=>{i&&i()}),q(()=>e.name,async _=>{a.value=!1,r.value=!1,i&&(i(),i=null),e.lazyLoad?f():(await u(_??""),r.value||f())}),{containerStyle:m,isLoaded:a,hasError:r,imageSrc:Ce(l),imageContainer:o,handleImageError:c}}const at=["src","alt"],st=["aria-label"],ot=["aria-label"],ce=oe({name:"GCountryFlag",__name:"CountryFlag",props:Xe,setup(e){const a=e;et(a);const r=ie("country-flag"),{containerStyle:o,isLoaded:i,imageSrc:d,imageContainer:m,handleImageError:l,hasError:u}=rt(a);return(c,n)=>(C(),O("figure",{class:y(s(r).e("container")),ref_key:"imageContainer",ref:m,style:Ee(s(o))},[s(i)&&!s(u)?(C(),O("img",{key:0,src:s(d),alt:c.name,class:y(s(r).b()),onError:n[0]||(n[0]=(...f)=>s(l)&&s(l)(...f))},null,42,at)):s(u)?(C(),O("div",{key:2,class:y([s(r).e("placeholder"),`text-size-${c.size}`]),role:"img","aria-label":`Error al cargar la bandera: ${c.name}`}," 404 ",10,ot)):(C(),O("div",{key:1,class:y(s(r).e("placeholder")),role:"img","aria-label":`Cargando bandera: ${c.name}`},null,10,st))],6))}}),_e=He(ce,{CountryFlag:ce});/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const it=Object.prototype.hasOwnProperty,pe=(e,a)=>it.call(e,a),be=e=>e!==null&&typeof e=="object",Pe="__epPropKey",w=e=>e,nt=e=>be(e)&&!!e[Pe],lt=(e,a)=>{if(!be(e)||nt(e))return e;const{values:r,required:o,default:i,type:d,validator:m}=e,l={type:d,required:!!o,validator:r||m?u=>{let c=!1,n=[];if(r&&(n=Array.from(r),pe(e,"default")&&n.push(i),c||(c=n.includes(u))),m&&(c||(c=m(u))),!c&&n.length>0){const f=[...new Set(n)].map(_=>JSON.stringify(_)).join(", ");he(`Invalid prop: validation failed${a?` for prop "${a}"`:""}. Expected one of [${f}], got value ${JSON.stringify(u)}.`)}return c}:void 0,[Pe]:!0};return pe(e,"default")&&(l.default=i),l},Te=e=>De(Object.entries(e).map(([a,r])=>[a,lt(r,a)])),ut=(e,a)=>{if(e.install=r=>{for(const o of[e,...Object.values(a??{})])r.component(o.name,o)},a)for(const[r,o]of Object.entries(a))e[r]=o;return e},mt=Te({currencies:{type:w(Array),default:()=>[]},label:{type:String,required:!0},value:{type:String,default:""},currencyCode:{type:String,default:""},flagCode:{type:w(String),default:void 0},showArrow:{type:Boolean,default:!0},isDisabled:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmptyValue:{type:Boolean,default:!1},isResult:{type:Boolean,default:!1},quoteDone:{type:Boolean,default:!1},isFading:{type:Boolean,default:!1},placeholder:{type:String,default:"0,00"},emptyResultsText:{type:String,default:"Sin resultados"}}),dt={input:e=>typeof e=="string",blur:e=>typeof e=="string",focus:()=>!0,"currency-change":e=>!!e};/**
 * Vue Currency Input 3.2.2
 * (c) 2018-2025 Matthias Stiller
 * @license MIT
 */var M;(function(e){e.symbol="symbol",e.narrowSymbol="narrowSymbol",e.code="code",e.name="name",e.hidden="hidden"})(M||(M={}));var N;(function(e){e.precision="precision",e.thousands="thousands",e.tenThousands="tenThousands",e.millions="millions",e.billions="billions"})(N||(N={}));const J=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),Le=e=>e.replace(/^0+(0$|[^0])/,"$1"),ee=(e,a)=>(e.match(new RegExp(J(a),"g"))||[]).length,ct=(e,a)=>e.substring(0,e.indexOf(a)),Ae=[",",".","٫","。"],ge="(0|[1-9]\\d*)";class _t{constructor(a){var r,o,i,d,m,l;const{currency:u,currencyDisplay:c,locale:n,precision:f,accountingSign:_,useGrouping:D}=a;this.locale=n,this.options={currency:u,useGrouping:D,style:"currency",currencySign:_?"accounting":void 0,currencyDisplay:c!==M.hidden?c:void 0};const g=new Intl.NumberFormat(n,this.options),L=g.formatToParts(123456);this.currency=(r=L.find(({type:I})=>I==="currency"))===null||r===void 0?void 0:r.value,this.digits=[0,1,2,3,4,5,6,7,8,9].map(I=>I.toLocaleString(n)),this.decimalSymbol=(o=L.find(({type:I})=>I==="decimal"))===null||o===void 0?void 0:o.value,this.groupingSymbol=(i=L.find(({type:I})=>I==="group"))===null||i===void 0?void 0:i.value,this.minusSign=(d=g.formatToParts(-1).find(({type:I})=>I==="minusSign"))===null||d===void 0?void 0:d.value,this.decimalSymbol===void 0?this.minimumFractionDigits=this.maximumFractionDigits=0:typeof f=="number"?this.minimumFractionDigits=this.maximumFractionDigits=f:(this.minimumFractionDigits=(m=f?.min)!==null&&m!==void 0?m:g.resolvedOptions().minimumFractionDigits,this.maximumFractionDigits=(l=f?.max)!==null&&l!==void 0?l:g.resolvedOptions().maximumFractionDigits);const h=I=>ct(I,this.digits[1]),R=I=>I.substring(I.lastIndexOf(this.decimalSymbol?this.digits[0]:this.digits[1])+1);this.prefix=h(g.format(1)),this.suffix=R(g.format(1)),this.negativePrefix=h(g.format(-1)),this.negativeSuffix=R(g.format(-1))}parse(a){if(a){const r=this.isNegative(a);a=this.normalizeDigits(a),a=this.stripCurrency(a,r),a=this.stripSignLiterals(a);const o=this.decimalSymbol?`(?:${J(this.decimalSymbol)}(\\d*))?`:"",i=this.stripGroupingSeparator(a).match(new RegExp(`^${ge}${o}$`));if(i&&this.isValidIntegerFormat(this.decimalSymbol?a.split(this.decimalSymbol)[0]:a,Number(i[1])))return+`${r?"-":""}${this.onlyDigits(i[1])}.${this.onlyDigits(i[2]||"")}`}return null}isValidIntegerFormat(a,r){const o={...this.options,minimumFractionDigits:0};return[this.stripCurrency(this.normalizeDigits(r.toLocaleString(this.locale,{...o,useGrouping:!0})),!1),this.stripCurrency(this.normalizeDigits(r.toLocaleString(this.locale,{...o,useGrouping:!1})),!1)].includes(a)}format(a,r={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return a!=null?a.toLocaleString(this.locale,{...this.options,...r}):""}toFraction(a){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(a.substring(1)).substring(0,this.maximumFractionDigits)}`}isFractionIncomplete(a){return!!this.normalizeDigits(this.stripGroupingSeparator(a)).match(new RegExp(`^${ge}${J(this.decimalSymbol)}$`))}isNegative(a){return a.startsWith(this.negativePrefix)||this.minusSign===void 0&&(a.startsWith("(")||a.startsWith("-"))||this.minusSign!==void 0&&a.replace("-",this.minusSign).startsWith(this.minusSign)}insertCurrency(a,r){return`${r?this.negativePrefix:this.prefix}${a}${r?this.negativeSuffix:this.suffix}`}stripGroupingSeparator(a){return this.groupingSymbol!==void 0?a.replace(new RegExp(J(this.groupingSymbol),"g"),""):a}stripSignLiterals(a){return this.minusSign!==void 0?a.replace("-",this.minusSign).replace(this.minusSign,""):a.replace(/[-()]/g,"")}stripCurrency(a,r){return a.replace(r?this.negativePrefix:this.prefix,"").replace(r?this.negativeSuffix:this.suffix,"")}normalizeDecimalSeparator(a,r){return Ae.forEach(o=>{a=a.substring(0,r)+a.substring(r).replace(o,this.decimalSymbol)}),a}normalizeDigits(a){return this.digits[0]!=="0"&&this.digits.forEach((r,o)=>{a=a.replace(new RegExp(r,"g"),String(o))}),a}onlyDigits(a){return this.normalizeDigits(a).replace(/\D+/g,"")}onlyLocaleDigits(a){return a.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class Ve{constructor(a){this.currencyFormat=a}}class pt extends Ve{conformToMask(a,r=""){const o=this.currencyFormat.isNegative(a),i=g=>g===""&&o&&!(this.currencyFormat.minusSign===void 0?r===this.currencyFormat.negativePrefix+this.currencyFormat.negativeSuffix:r===this.currencyFormat.negativePrefix),d=g=>{if(i(g))return"";if(this.currencyFormat.maximumFractionDigits>0){if(this.currencyFormat.isFractionIncomplete(g))return g;if(g.startsWith(this.currencyFormat.decimalSymbol))return this.currencyFormat.toFraction(g)}return null};let m=a;m=this.currencyFormat.stripCurrency(m,o),m=this.currencyFormat.stripSignLiterals(m);const l=d(m);if(l!=null)return this.currencyFormat.insertCurrency(l,o);const[u,...c]=m.split(this.currencyFormat.decimalSymbol),n=Le(this.currencyFormat.onlyDigits(u)),f=this.currencyFormat.onlyDigits(c.join("")).substring(0,this.currencyFormat.maximumFractionDigits),_=c.length>0&&f.length===0,D=n===""&&o&&(this.currencyFormat.minusSign===void 0?r===a.slice(0,-2)+this.currencyFormat.negativeSuffix:r===a.slice(0,-1));return _||D||i(n)?r:n.match(/\d+/)?{numberValue:+`${o?"-":""}${n}.${f}`,fractionDigits:f}:""}}class gt extends Ve{conformToMask(a,r=""){if(a===""||a===this.currencyFormat.decimalSymbol||this.currencyFormat.parse(r)===0&&this.currencyFormat.stripCurrency(r,!0).slice(0,-1)===this.currencyFormat.stripCurrency(a,!0))return"";const o=this.currencyFormat.isNegative(a),i=this.currencyFormat.stripSignLiterals(a)===""?-0:+`${o?"-":""}${Le(this.currencyFormat.onlyDigits(a))}`/Math.pow(10,this.currencyFormat.maximumFractionDigits);return{numberValue:i,fractionDigits:i.toFixed(this.currencyFormat.maximumFractionDigits).slice(-this.currencyFormat.maximumFractionDigits)}}}const ft={locale:void 0,currency:void 0,currencyDisplay:void 0,hideGroupingSeparatorOnFocus:!0,hideCurrencySymbolOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0,precision:void 0,autoDecimalDigits:!1,valueRange:void 0,useGrouping:void 0,valueScaling:void 0};class vt{constructor(a){this.el=a.el,this.onInput=a.onInput,this.onChange=a.onChange,this.addEventListener(),this.init(a.options)}setOptions(a){this.init(a),this.format(this.currencyFormat.format(this.validateValueRange(this.numberValue))),this.onChange(this.getValue())}getValue(){return{number:this.valueScaling&&this.numberValue!=null?this.toInteger(this.numberValue,this.valueScaling):this.numberValue,formatted:this.formattedValue}}setValue(a){const r=this.valueScaling!==void 0&&a!=null?this.toFloat(a,this.valueScaling):a;r!==this.numberValue&&(this.format(this.currencyFormat.format(this.validateValueRange(r))),this.onChange(this.getValue()))}init(a){this.options={...ft,...a},this.options.autoDecimalDigits&&(this.options.hideNegligibleDecimalDigitsOnFocus=!1),this.el.getAttribute("inputmode")||this.el.setAttribute("inputmode",this.options.autoDecimalDigits?"numeric":"decimal"),this.currencyFormat=new _t(this.options),this.numberMask=this.options.autoDecimalDigits?new gt(this.currencyFormat):new pt(this.currencyFormat);const r={[N.precision]:this.currencyFormat.maximumFractionDigits,[N.thousands]:3,[N.tenThousands]:4,[N.millions]:6,[N.billions]:9};this.valueScaling=this.options.valueScaling?r[this.options.valueScaling]:void 0,this.valueScalingFractionDigits=this.valueScaling!==void 0&&this.options.valueScaling!==N.precision?this.valueScaling+this.currencyFormat.maximumFractionDigits:this.currencyFormat.maximumFractionDigits,this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var a,r;let o=this.toFloat(-Number.MAX_SAFE_INTEGER);return((a=this.options.valueRange)===null||a===void 0?void 0:a.min)!==void 0&&(o=Math.max((r=this.options.valueRange)===null||r===void 0?void 0:r.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),o}getMaxValue(){var a,r;let o=this.toFloat(Number.MAX_SAFE_INTEGER);return((a=this.options.valueRange)===null||a===void 0?void 0:a.max)!==void 0&&(o=Math.min((r=this.options.valueRange)===null||r===void 0?void 0:r.max,this.toFloat(Number.MAX_SAFE_INTEGER))),o}toFloat(a,r){return a/Math.pow(10,r??this.valueScalingFractionDigits)}toInteger(a,r){return Number(a.toFixed(r??this.valueScalingFractionDigits).split(".").join(""))}validateValueRange(a){return a!=null?Math.min(Math.max(a,this.minValue),this.maxValue):a}format(a,r=!1){if(a!=null){this.decimalSymbolInsertedAt!==void 0&&(a=this.currencyFormat.normalizeDecimalSeparator(a,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const o=this.numberMask.conformToMask(a,this.formattedValue);let i;if(typeof o=="object"){const{numberValue:d,fractionDigits:m}=o;let{maximumFractionDigits:l,minimumFractionDigits:u}=this.currencyFormat;this.focus?u=r?m.replace(/0+$/,"").length:Math.min(l,m.length):Number.isInteger(d)&&!this.options.autoDecimalDigits&&(this.options.precision===void 0||u===0)&&(u=l=0),i=this.toInteger(Math.abs(d))>Number.MAX_SAFE_INTEGER?this.formattedValue:this.currencyFormat.format(d,{useGrouping:this.options.useGrouping!==!1&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:u,maximumFractionDigits:l})}else i=o;this.maxValue<=0&&!this.currencyFormat.isNegative(i)&&this.currencyFormat.parse(i)!==0&&(i=i.replace(this.currencyFormat.prefix,this.currencyFormat.negativePrefix)),this.minValue>=0&&(i=i.replace(this.currencyFormat.negativePrefix,this.currencyFormat.prefix)),(this.options.currencyDisplay===M.hidden||this.focus&&this.options.hideCurrencySymbolOnFocus)&&(i=i.replace(this.currencyFormat.negativePrefix,this.currencyFormat.minusSign!==void 0?this.currencyFormat.minusSign:"(").replace(this.currencyFormat.negativeSuffix,this.currencyFormat.minusSign!==void 0?"":")").replace(this.currencyFormat.prefix,"").replace(this.currencyFormat.suffix,"")),this.el.value=i,this.numberValue=this.currencyFormat.parse(i)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,this.onInput(this.getValue())}addEventListener(){this.el.addEventListener("input",a=>{const{value:r,selectionStart:o}=this.el,i=a;if(o&&i.data&&Ae.includes(i.data)&&(this.decimalSymbolInsertedAt=o-1),this.format(r),this.focus&&o!=null){const d=()=>{const{prefix:m,suffix:l,decimalSymbol:u,maximumFractionDigits:c,groupingSymbol:n}=this.currencyFormat;let f=r.length-o;const _=this.formattedValue.length;if(this.currencyFormat.minusSign===void 0&&(r.startsWith("(")||r.startsWith("-"))&&!r.endsWith(")"))return _-this.currencyFormat.negativeSuffix.length>1?this.formattedValue.substring(o).length:1;if(this.formattedValue.substring(o,1)===n&&ee(this.formattedValue,n)===ee(r,n)+1)return _-f-1;if(_<f)return o;if(u!==void 0&&r.indexOf(u)!==-1){const D=r.indexOf(u)+1;if(Math.abs(_-r.length)>1&&o<=D)return this.formattedValue.indexOf(u)+1;!this.options.autoDecimalDigits&&o>D&&this.currencyFormat.onlyDigits(r.substring(D)).length-1===c&&(f-=1)}return this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===M.hidden?_-f:Math.max(_-Math.max(f,l.length),m.length)};this.setCaretPosition(d())}}),this.el.addEventListener("focus",()=>{this.focus=!0,this.numberValueOnFocus=this.numberValue,setTimeout(()=>{const{value:a,selectionStart:r,selectionEnd:o}=this.el;if(this.format(a,this.options.hideNegligibleDecimalDigitsOnFocus),r!=null&&o!=null&&Math.abs(r-o)>0)this.setCaretPosition(0,this.el.value.length);else if(r!=null){const i=this.getCaretPositionOnFocus(a,r);this.setCaretPosition(i)}})}),this.el.addEventListener("blur",()=>{this.focus=!1,this.format(this.currencyFormat.format(this.validateValueRange(this.numberValue))),this.numberValueOnFocus!==this.numberValue&&this.onChange(this.getValue())})}getCaretPositionOnFocus(a,r){if(this.numberValue==null)return r;const{prefix:o,negativePrefix:i,suffix:d,negativeSuffix:m,groupingSymbol:l,currency:u}=this.currencyFormat,c=this.numberValue<0,n=c?i:o,f=n.length;if(this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===M.hidden){if(c){if(r<=1)return 1;if(a.endsWith(")")&&r>a.indexOf(")"))return this.formattedValue.length-1}}else{const D=c?m.length:d.length;if(r>=a.length-D)return this.formattedValue.length-D;if(r<f)return f}let _=r;return this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==M.hidden&&r>=f&&u!==void 0&&n.includes(u)&&(_-=f,c&&(_+=1)),this.options.hideGroupingSeparatorOnFocus&&l!==void 0&&(_-=ee(a.substring(0,r),l)),_}setCaretPosition(a,r=a){this.el.setSelectionRange(a,r)}}const ht=e=>e?.matches("input")?e:e?.querySelector("input");function Et(e,a){var r,o,i,d;let m;const l=T(null),u=T(null),c=T(null),n=Me();n?.emit||(o=(r=n?.proxy)===null||r===void 0?void 0:r.$emit)===null||o===void 0||o.bind(n?.proxy);const f=n?.props||((i=n?.proxy)===null||i===void 0?void 0:i.$props),_=Ue.startsWith("3");_&&((d=n?.attrs.modelModifiers)===null||d===void 0||d.lazy);const D=V(()=>f?.[_?"modelValue":"value"]);return q(l,g=>{var L;if(g){const h=ht((L=g?.$el)!==null&&L!==void 0?L:g);h?(m=new vt({el:h,options:e,onInput:R=>{c.value=R.number,u.value=R.formatted},onChange:R=>{}}),m.setValue(D.value)):console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.')}else m=null}),{inputRef:l,numberValue:c,formattedValue:u,setValue:g=>m?.setValue(g),setOptions:g=>m?.setOptions(g)}}function yt(e,a){const r=`g-qip-${crypto.randomUUID().slice(0,8)}`,o=`g-qi-${crypto.randomUUID().slice(0,8)}`,i=V(()=>(e.currencies?.length??0)>1),d=T(null),m=T(null),l=T(""),u=T(!1),c=V(()=>{if(!l.value)return e.currencies??[];const v=l.value.toLowerCase();return(e.currencies??[]).filter(k=>k.alwaysVisible||k.code.toLowerCase().includes(v)||k.name.toLowerCase().includes(v))}),n=T(!1),f=V(()=>n.value&&!e.quoteDone),_=V(()=>e.currencies?.find(v=>v.code===e.currencyCode)??null),D=V(()=>({currency:"USD",currencyDisplay:M.hidden,precision:_.value?.decimalPlaces??2,locale:_.value?.locale,valueRange:{min:0},useGrouping:!0,hideGroupingSeparatorOnFocus:!1,hideCurrencySymbolOnFocus:!1,hideNegligibleDecimalDigitsOnFocus:!1})),{inputRef:g,numberValue:L,setValue:h,setOptions:R}=Et(D.value);let I=!1;q(()=>e.value,v=>{const k=v&&!isNaN(parseFloat(v))?parseFloat(v):null;k!==L.value&&(I=!0,h(k))},{immediate:!0}),q(D,async v=>{I=!0,R(v),await ae(),I=!1}),q(L,v=>{if(I){I=!1;return}a("input",v!==null?String(v):"")});function F(){n.value=!0,a("focus")}function b(){n.value=!1,a("blur",L.value!==null?String(L.value):"")}function S(v){a("currency-change",v)}async function E(v){u.value=v,v?(await ae(),m.value?.select()):l.value=""}function p(v){u.value&&v.stopPropagation()}function P(){!u.value&&l.value&&d.value?.handleOpen()}return{inputRef:g,searchInputRef:m,searchQuery:l,isDropdownOpen:u,filteredCurrencies:c,hasCurrencyOptions:i,isBig:f,numberValue:L,selectedCurrency:_,inputId:o,dropdownPopperId:r,dropdownRef:d,handleFocus:F,handleBlur:b,handleCurrencySelect:S,onDropdownVisibleChange:E,handleInputClick:p,handleSearchInput:P}}const Dt=["for"],Rt=["id","placeholder","disabled","aria-invalid"],It=["aria-label"],bt=["aria-label","placeholder","size","disabled"],fe=oe({name:"GQuoteInput",__name:"quote-input",props:mt,emits:dt,setup(e,{emit:a}){const r=ie("quote-input"),o=e,i=a,{inputRef:d,searchInputRef:m,searchQuery:l,isDropdownOpen:u,filteredCurrencies:c,hasCurrencyOptions:n,isBig:f,numberValue:_,selectedCurrency:D,inputId:g,dropdownPopperId:L,dropdownRef:h,handleFocus:R,handleBlur:I,handleCurrencySelect:F,onDropdownVisibleChange:b,handleInputClick:S,handleSearchInput:E}=yt(o,i);return(p,P)=>(C(),O("div",{class:y([s(r).b(),s(r).is("disabled",p.isDisabled),s(r).is("error",p.hasError)])},[A("label",{for:s(g),class:y(s(r).e("label"))},$(p.label),11,Dt),A("div",{class:y([s(r).e("row"),s(r).is("fading",p.isFading)])},[A("div",{class:y(s(r).e("amount-wrapper"))},[A("input",{id:s(g),ref_key:"inputRef",ref:d,class:y([s(r).e("amount"),s(r).is("empty",p.isEmptyValue&&s(_)===null),s(r).is("big",s(f)),s(r).is("error",p.hasError),s(r).is("disabled",p.isDisabled)]),type:"text",inputmode:"decimal",placeholder:p.placeholder,disabled:p.isDisabled,"aria-invalid":p.hasError,autocomplete:"off",onBlur:P[0]||(P[0]=(...v)=>s(I)&&s(I)(...v)),onFocus:P[1]||(P[1]=(...v)=>s(R)&&s(R)(...v))},null,42,Rt)],2),U(s(ke),{ref_key:"dropdownRef",ref:h,trigger:"click",placement:"bottom-end","popper-class":`${s(r).e("dropdown-popper")} ${s(L)}`,disabled:p.isDisabled||!s(n),onCommand:s(F),onVisibleChange:s(b)},{dropdown:z(()=>[U(s(Ge),{class:y(s(r).e("dropdown"))},{default:z(()=>[(C(!0),O(Ne,null,$e(s(c),v=>(C(),X(s(Be),{key:`${v.code}-${v.name}`,command:v,title:v.name,class:y({[s(r).is("active")]:v.code===p.currencyCode})},{default:z(()=>[A("span",{class:y(s(r).e("dropdown-item"))},[v.flagCountryCode?(C(),X(s(_e),{key:0,name:v.flagCountryCode,size:"md","aria-hidden":"true"},null,8,["name"])):x("",!0),A("span",{class:y(s(r).e("dropdown-label"))},[A("span",{class:y(s(r).e("dropdown-code"))},"("+$(v.code)+")",3),re(" "+$(v.name),1)],2)],2)]),_:2},1032,["command","title","class"]))),128)),s(c).length===0?(C(),O("div",{key:0,class:y(s(r).e("dropdown-empty"))},$(p.emptyResultsText),3)):x("",!0)]),_:1},8,["class"])]),default:z(()=>[A("div",{class:y([s(r).e("currency"),s(r).is("open",s(u)),s(r).is("disabled",p.isDisabled)]),"aria-label":`Seleccionar moneda ${p.currencyCode}`},[A("span",{class:y(s(r).e("flag-group"))},[A("span",{class:y(s(r).e("flag"))},[ye(p.$slots,"flag",{},()=>[p.flagCode||s(D)?.flagCountryCode?(C(),X(s(_e),{key:0,name:p.flagCode||s(D)?.flagCountryCode,size:"xs","aria-hidden":"true"},null,8,["name"])):x("",!0)])],2),Fe(A("input",{ref_key:"searchInputRef",ref:m,"onUpdate:modelValue":P[2]||(P[2]=v=>xe(l)?l.value=v:null),class:y([s(r).e("currency-code"),s(r).is("disabled",p.isDisabled)]),"aria-label":`Buscar moneda, seleccionada: ${p.currencyCode}`,placeholder:p.currencyCode,size:((s(l)||p.currencyCode).length||3)+1,disabled:p.isDisabled||!s(n),autocomplete:"off",onClick:P[3]||(P[3]=(...v)=>s(S)&&s(S)(...v)),onInput:P[4]||(P[4]=(...v)=>s(E)&&s(E)(...v))},null,42,bt),[[we,s(l)]])],2),p.showArrow&&s(n)?(C(),O("span",{key:0,class:y([s(r).e("arrow"),s(r).is("disabled",p.isDisabled),s(r).is("open",s(u))]),"aria-hidden":"true"},[U(s(se),{name:"regular chevron-down"})],2)):x("",!0)],10,It)]),_:3},8,["popper-class","disabled","onCommand","onVisibleChange"])],2)],2))}}),Pt=Te({fromCurrency:{type:String,required:!0},toCurrency:{type:String,required:!0},fromCurrencies:{type:w(Array),default:()=>[]},toCurrencies:{type:w(Array),default:()=>[]},fromAmount:{type:String,default:""},toAmount:{type:String,default:""},action:{type:w(String),default:"Default"},isLoading:{type:Boolean,default:!1},errorMessage:{type:String,default:""},availableBalance:{type:String,default:""},singleInput:{type:Boolean,default:!1},fromLabel:{type:String,default:"Tú envías"},toLabel:{type:String,default:"Tu contacto recibe"},isDisabled:{type:Boolean,default:!1},showSwap:{type:Boolean,default:!0},availableLabel:{type:String,default:"Disponible"},swapAriaLabel:{type:String,default:"Intercambiar monedas"},emptyResultsText:{type:String,default:"Sin resultados"},actionText:{type:String,default:"Cargar dinero"},showAction:{type:w(null),default:null},fromFlagCode:{type:w(String),default:void 0},toFlagCode:{type:w(String),default:void 0}}),Tt={"from-input":e=>typeof e=="string","to-input":e=>typeof e=="string","from-blur":e=>typeof e=="string","to-blur":e=>typeof e=="string","from-currency-change":e=>!!e,"to-currency-change":e=>!!e,swap:e=>typeof e.from=="string"&&typeof e.to=="string"&&typeof e.fromAmount=="string"&&typeof e.toAmount=="string","from-focus":()=>!0,"to-focus":()=>!0,"action-click":()=>!0},Lt=200;function At(e){return new Promise(a=>setTimeout(a,e))}function Vt(e,a){const r=T(!1),o=T(!1),i=V(()=>e.fromCurrencies?.find(b=>b.code===e.fromCurrency)??null),d=V(()=>e.toCurrencies?.find(b=>b.code===e.toCurrency)??null),m=V(()=>e.action==="FromError"||e.action==="Error"),l=V(()=>e.action==="ToError"),u=V(()=>m.value||l.value),c=V(()=>u.value&&(e.showAction??e.action==="FromError")),n=V(()=>{const b=i.value?.decimalPlaces??2;return b>0?`0${i.value?.decimalSeparator??","}${"0".repeat(b)}`:"0"}),f=V(()=>{const b=d.value?.decimalPlaces??2;return b>0?`0${d.value?.decimalSeparator??","}${"0".repeat(b)}`:"0"}),_=T(90),D=V(()=>`rotate(${_.value}deg)`),g=T(!1);q(()=>e.isLoading,(b,S)=>{S&&!b&&(r.value=!0,o.value=!0)});function L(b){r.value=!1,o.value=!1,a("from-input",b)}function h(b){r.value=!1,o.value=!1,a("to-input",b)}function R(){r.value=!1,a("from-focus")}function I(){o.value=!1,a("to-focus")}async function F(){if(!g.value){g.value=!0;try{await At(Lt),a("swap",{from:e.toCurrency,to:e.fromCurrency,fromAmount:e.toAmount||"",toAmount:e.fromAmount||"",fromFlagCode:e.toFlagCode,toFlagCode:e.fromFlagCode}),await ae(),_.value=(_.value+180)%360}finally{g.value=!1}}}return{isFromQuoteDone:r,isToQuoteDone:o,fromCurrencyObj:i,toCurrencyObj:d,hasFromError:m,hasToError:l,hasCardError:u,shouldShowAction:c,fromPlaceholder:n,toPlaceholder:f,swapTransform:D,isSwapFading:g,onFromInput:L,onToInput:h,onFromFocus:R,onToFocus:I,onSwap:F}}const Ct=["disabled","aria-label"],ve=oe({name:"GQuote",__name:"quote",props:Pt,emits:Tt,setup(e,{emit:a}){const r=ie("quote"),o=e,i=a,{hasFromError:d,hasToError:m,hasCardError:l,shouldShowAction:u,fromCurrencyObj:c,toCurrencyObj:n,isFromQuoteDone:f,isToQuoteDone:_,fromPlaceholder:D,toPlaceholder:g,swapTransform:L,isSwapFading:h,onFromInput:R,onToInput:I,onFromFocus:F,onToFocus:b,onSwap:S}=Vt(o,i);return(E,p)=>(C(),O("div",{class:y(s(r).b())},[E.availableBalance?(C(),O("p",{key:0,class:y(s(r).e("available"))},[re($(E.availableLabel)+" ",1),A("span",{class:y(s(r).e("available-value"))},$(E.availableBalance),3)],2)):x("",!0),A("div",{class:y(s(r).e("card-group"))},[A("div",{class:y([s(r).e("card"),s(r).is("error",s(l)),s(r).is("error-with-action",s(u))])},[E.singleInput?x("",!0):(C(),O("div",{key:0,class:y(s(r).e("input-from"))},[U(fe,{label:E.fromLabel,value:E.fromAmount,"currency-code":E.fromCurrency,currencies:E.fromCurrencies,"flag-code":o.fromFlagCode??s(c)?.flagCountryCode,"is-fading":s(h),"is-disabled":E.isDisabled,"has-error":s(d),"is-empty-value":E.action==="NoValue","quote-done":s(f),placeholder:s(D),"empty-results-text":E.emptyResultsText,onInput:s(R),onBlur:p[0]||(p[0]=P=>i("from-blur",P)),onFocus:s(F),onCurrencyChange:p[1]||(p[1]=P=>i("from-currency-change",P))},null,8,["label","value","currency-code","currencies","flag-code","is-fading","is-disabled","has-error","is-empty-value","quote-done","placeholder","empty-results-text","onInput","onFocus"])],2)),!E.singleInput&&E.showSwap?(C(),O("div",{key:1,class:y(s(r).e("divider"))},[A("button",{type:"button",class:y(s(r).e("swap-btn")),disabled:E.isDisabled,"aria-label":E.swapAriaLabel,onClick:p[2]||(p[2]=(...P)=>s(S)&&s(S)(...P))},[A("span",{class:y(s(r).e("swap-icon")),style:Ee({transform:s(L)})},[U(s(se),{name:"duotone arrows-repeat"})],6)],10,Ct)],2)):x("",!0),A("div",{class:y(s(r).e("input-to"))},[U(fe,{label:E.toLabel,value:E.toAmount,"currency-code":E.toCurrency,currencies:E.toCurrencies,"flag-code":o.toFlagCode??s(n)?.flagCountryCode,"is-fading":s(h),"is-disabled":E.isDisabled,"has-error":s(m),"is-empty-value":E.action==="NoValue","is-result":!0,"quote-done":s(_),placeholder:s(g),"empty-results-text":E.emptyResultsText,onInput:s(I),onBlur:p[3]||(p[3]=P=>i("to-blur",P)),onFocus:s(b),onCurrencyChange:p[4]||(p[4]=P=>i("to-currency-change",P))},null,8,["label","value","currency-code","currencies","flag-code","is-fading","is-disabled","has-error","is-empty-value","quote-done","placeholder","empty-results-text","onInput","onFocus"])],2)],2),s(u)?(C(),O("div",{key:0,class:y(s(r).e("action"))},[ye(E.$slots,"action",{},()=>[A("button",{type:"button",class:y(s(r).e("action-link")),onClick:p[5]||(p[5]=P=>i("action-click"))},[re($(E.actionText)+" ",1),U(s(se),{name:"regular chevron-right"})],2)])],2)):x("",!0),E.errorMessage?(C(),O("p",{key:1,class:y(s(r).e("error-message"))},$(E.errorMessage),3)):x("",!0)],2)],2))}}),G=ut(ve,{Quote:ve}),Ot="0.2.0",te={"@flash-global66/g-country-flag":"^0.0.2","@flash-global66/g-dropdown":"^0.1.4","@flash-global66/g-icon-font":"^0.20.0",vue:"^3.2.0","vue-currency-input":"^3.2.0"},St={code:"CLP",name:"Peso chileno",flagCountryCode:"CL",symbol:"$",decimalPlaces:0,thousandSeparator:".",decimalSeparator:",",locale:"es-CL"},Ft={code:"COP",name:"Peso colombiano",flagCountryCode:"CO",symbol:"$",decimalPlaces:2,thousandSeparator:".",decimalSeparator:",",locale:"es-CO"},xt={code:"USD",name:"Dólar estadounidense",flagCountryCode:"US",symbol:"$",decimalPlaces:2,thousandSeparator:",",decimalSeparator:".",locale:"en-US"},wt={code:"PEN",name:"Sol peruano",flagCountryCode:"PE",symbol:"S/",decimalPlaces:2,thousandSeparator:",",decimalSeparator:".",locale:"es-PE"},Nt={code:"BRL",name:"Real brasileño",flagCountryCode:"BR",symbol:"R$",decimalPlaces:2,thousandSeparator:".",decimalSeparator:",",locale:"pt-BR"},B=[St,Ft,xt,wt,Nt],$t={CLP_USD:.001075,CLP_COP:3.97,CLP_PEN:.004,CLP_BRL:.0055,COP_USD:24e-5,COP_CLP:.252,COP_PEN:96e-5,COP_BRL:.00138,USD_CLP:930,USD_COP:4150,USD_PEN:3.72,USD_BRL:5.05,PEN_USD:.2688,PEN_CLP:248,PEN_COP:1080,PEN_BRL:1.36,BRL_USD:.198,BRL_CLP:182,BRL_COP:800,BRL_PEN:.735};function ne(e="CLP",a="USD"){const r=T(e),o=T(a),i=T(""),d=T(""),m=T(!1),l=T("from");let u=null;async function c(h,R){if(!h||isNaN(parseFloat(h))){R==="from"?d.value="":i.value="";return}m.value=!0,R==="from"?d.value="":i.value="",await new Promise(p=>setTimeout(p,800));const I=R==="from"?r.value:o.value,F=R==="from"?o.value:r.value,b=$t[`${I}_${F}`]??1,S=B.find(p=>p.code===F)?.decimalPlaces??2,E=parseFloat((parseFloat(h)*b).toFixed(S));R==="from"?d.value=String(E):i.value=String(E),m.value=!1}function n(h,R){u&&clearTimeout(u),u=setTimeout(()=>c(h,R),600)}function f(h){l.value="from",i.value=h,n(h,"from")}function _(h){l.value="to",d.value=h,n(h,"to")}function D(h){r.value=h.code;const R=l.value==="from"?i.value:d.value;R&&n(R,l.value)}function g(h){o.value=h.code;const R=l.value==="from"?i.value:d.value;R&&n(R,l.value)}function L(h){r.value=h.from,o.value=h.to,i.value=h.fromAmount,d.value="",h.fromAmount&&n(h.fromAmount,"from")}return{fromCurrency:r,toCurrency:o,fromAmount:i,toAmount:d,isLoading:m,handleFromInput:f,handleToInput:_,handleFromCurrencyChange:D,handleToCurrencyChange:g,handleSwap:L}}const pr={title:"Form/Quote",component:G,parameters:{layout:"centered",docs:{description:{component:`
El componente Quote permite al usuario ingresar montos y seleccionar monedas para simular una cotización de cambio de divisas. Soporta entrada bidireccional, swap de monedas, estados de error y saldo disponible.

> La versión de este componente es \`${Ot}\`.

### Características principales

- Entrada bidireccional: cotiza desde el origen o desde el destino
- Selector de moneda con búsqueda por código o nombre
- Botón de swap para intercambiar monedas
- Estado de saldo disponible
- Mensaje de error personalizable
- Modo de entrada única (singleInput) para transferencias nacionales
- Estado deshabilitado

### Instalación

\`\`\`bash
yarn add @flash-global66/g-quote
\`\`\`

### Dependencias internas

\`\`\`bash
yarn add ${le(te)}
\`\`\`

### Dependencias externas

\`\`\`bash
yarn add ${le(te,!0)}
\`\`\`

### Peer dependencies

${je(te)}

### Importación

\`\`\`typescript
import { GQuote } from '@flash-global66/g-quote'
import '@flash-global66/g-quote/styles.scss'
\`\`\`

### Tipo Currency

\`\`\`typescript
interface Currency {
  code: string            // Código ISO (ej: 'CLP')
  name: string            // Nombre completo (ej: 'Peso chileno')
  flagCountryCode: string // Código de bandera (ej: 'CL')
  symbol: string          // Símbolo (ej: '$')
  decimalPlaces: number   // Decimales (ej: 0 para CLP, 2 para USD)
  thousandSeparator: string
  decimalSeparator: string
  locale?: string         // Locale para formato (ej: 'es-CL')
  alwaysVisible?: boolean // Siempre visible en búsqueda
}
\`\`\`
`}}},argTypes:{action:{description:"Estado visual del componente",control:{type:"select"},options:["Default","NoValue","FromError","ToError","Error"],table:{type:{summary:"QuoteAction"},defaultValue:{summary:"Default"}}},showAction:{description:"Controla si se muestra la franja de acción cuando existe un error",control:{type:"boolean"},table:{type:{summary:"boolean | undefined"},defaultValue:{summary:"FromError => true; otros errores => false"}}},isDisabled:{description:"Deshabilita toda la interacción",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isLoading:{description:"Muestra estado de carga mientras se cotiza",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fromLabel:{description:"Etiqueta del campo de origen",control:{type:"text"},table:{type:{summary:"string"}}},toLabel:{description:"Etiqueta del campo de destino",control:{type:"text"},table:{type:{summary:"string"}}},availableLabel:{description:"Texto del label de saldo disponible",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Disponible"}}},availableBalance:{description:"Texto formateado del saldo disponible (ya formateado)",control:{type:"text"},table:{type:{summary:"string"}}},errorMessage:{description:"Mensaje de error mostrado debajo del card",control:{type:"text"},table:{type:{summary:"string"}}},actionText:{description:"Texto del botón de acción (ej: cuando hay error de saldo)",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Cargar dinero"}}},showSwap:{description:"Muestra el botón para intercambiar monedas",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},singleInput:{description:"Oculta el campo de origen (útil para transferencias nacionales)",control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},emptyResultsText:{description:"Texto cuando no hay resultados en la búsqueda de moneda",control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Sin resultados"}}}},args:{action:"Default",fromLabel:"Tú envías",toLabel:"Tu contacto recibe",isDisabled:!1,isLoading:!1,showSwap:!0,singleInput:!1,availableBalance:"",errorMessage:"",actionText:"Cargar dinero",availableLabel:"Disponible",emptyResultsText:"Sin resultados"}},Q={name:"Básico",parameters:{docs:{description:{story:"Flujo completo con cotización simulada. Escribe un monto en cualquiera de los campos para disparar la cotización (debounce de 600ms). Cambia las monedas desde el selector o usa el swap."}}},render:e=>({components:{GQuote:G,GConfigProvider:j},setup(){const a=ne();return{args:e,CURRENCIES:B,...a}},template:`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @swap="handleSwap"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    `})},W={name:"Con saldo disponible",parameters:{docs:{description:{story:"Muestra el saldo disponible sobre el cotizador. El texto de `availableBalance` debe llegar ya formateado desde el consumidor."}}},render:e=>({components:{GQuote:G,GConfigProvider:j},setup(){const a=ne("COP","USD");return{args:e,CURRENCIES:B,...a}},template:`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            available-balance="$ 183.994.889 COP"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @swap="handleSwap"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    `})},K={name:"Error: saldo insuficiente",parameters:{docs:{description:{story:'Cuando `action="FromError"` el componente muestra el botón de acción (por defecto "Cargar dinero") y el mensaje de error. El evento `action-click` notifica al consumidor para redirigir.'}}},render:()=>({components:{GQuote:G,GConfigProvider:j},setup(){function e(){alert("Redirigir a cargar dinero")}return{CURRENCIES:B,handleActionClick:e}},template:`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="COP"
            to-currency="USD"
            from-amount="3672604"
            to-amount=""
            available-balance="$ 183.994.889 COP"
            error-message="El monto que deseas convertir excede el saldo disponible"
            action="FromError"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            @action-click="handleActionClick"
          />
        </div>
      </g-config-provider>
    `})},H={name:"Deshabilitado",parameters:{docs:{description:{story:"Estado `isDisabled` bloquea toda la interacción: inputs, selector de moneda y swap."}}},render:()=>({components:{GQuote:G,GConfigProvider:j},setup(){return{CURRENCIES:B}},template:`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="CLP"
            to-currency="USD"
            from-amount="100000"
            to-amount="107.50"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            is-disabled
          />
        </div>
      </g-config-provider>
    `})},Y={name:"Single input (nacional)",parameters:{docs:{description:{story:"Con `single-input` solo se muestra el campo de destino. Útil para transferencias nacionales donde no hay conversión de moneda."}}},render:()=>({components:{GQuote:G,GConfigProvider:j},setup(){const e=T("");function a(r){e.value=r}return{CURRENCIES:B,toAmount:e,handleToInput:a}},template:`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="CLP"
            to-currency="CLP"
            :to-amount="toAmount"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            single-input
            @to-input="handleToInput"
          />
        </div>
      </g-config-provider>
    `})},Z={name:"Sin swap",parameters:{docs:{description:{story:'Con `show-swap="false"` se oculta el botón de intercambio. Útil cuando la dirección de la transacción es fija.'}}},render:e=>({components:{GQuote:G,GConfigProvider:j},setup(){const a=ne("USD","PEN");return{args:e,CURRENCIES:B,...a}},template:`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            :show-swap="false"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    `})};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Básico',
  parameters: {
    docs: {
      description: {
        story: 'Flujo completo con cotización simulada. Escribe un monto en cualquiera de los campos para disparar la cotización (debounce de 600ms). Cambia las monedas desde el selector o usa el swap.'
      }
    }
  },
  render: args => ({
    components: {
      GQuote,
      GConfigProvider
    },
    setup() {
      const sim = useQuoteSimulator();
      return {
        args,
        CURRENCIES,
        ...sim
      };
    },
    template: \`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @swap="handleSwap"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...Q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Con saldo disponible',
  parameters: {
    docs: {
      description: {
        story: 'Muestra el saldo disponible sobre el cotizador. El texto de \`availableBalance\` debe llegar ya formateado desde el consumidor.'
      }
    }
  },
  render: args => ({
    components: {
      GQuote,
      GConfigProvider
    },
    setup() {
      const sim = useQuoteSimulator('COP', 'USD');
      return {
        args,
        CURRENCIES,
        ...sim
      };
    },
    template: \`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            available-balance="$ 183.994.889 COP"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @swap="handleSwap"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...W.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Error: saldo insuficiente',
  parameters: {
    docs: {
      description: {
        story: 'Cuando \`action="FromError"\` el componente muestra el botón de acción (por defecto "Cargar dinero") y el mensaje de error. El evento \`action-click\` notifica al consumidor para redirigir.'
      }
    }
  },
  render: () => ({
    components: {
      GQuote,
      GConfigProvider
    },
    setup() {
      function handleActionClick() {
        alert('Redirigir a cargar dinero');
      }
      return {
        CURRENCIES,
        handleActionClick
      };
    },
    template: \`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="COP"
            to-currency="USD"
            from-amount="3672604"
            to-amount=""
            available-balance="$ 183.994.889 COP"
            error-message="El monto que deseas convertir excede el saldo disponible"
            action="FromError"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            @action-click="handleActionClick"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...K.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Estado \`isDisabled\` bloquea toda la interacción: inputs, selector de moneda y swap.'
      }
    }
  },
  render: () => ({
    components: {
      GQuote,
      GConfigProvider
    },
    setup() {
      return {
        CURRENCIES
      };
    },
    template: \`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="CLP"
            to-currency="USD"
            from-amount="100000"
            to-amount="107.50"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            is-disabled
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...H.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Single input (nacional)',
  parameters: {
    docs: {
      description: {
        story: 'Con \`single-input\` solo se muestra el campo de destino. Útil para transferencias nacionales donde no hay conversión de moneda.'
      }
    }
  },
  render: () => ({
    components: {
      GQuote,
      GConfigProvider
    },
    setup() {
      const toAmount = ref('');
      function handleToInput(val: string) {
        toAmount.value = val;
      }
      return {
        CURRENCIES,
        toAmount,
        handleToInput
      };
    },
    template: \`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            from-currency="CLP"
            to-currency="CLP"
            :to-amount="toAmount"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            single-input
            @to-input="handleToInput"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Sin swap',
  parameters: {
    docs: {
      description: {
        story: 'Con \`show-swap="false"\` se oculta el botón de intercambio. Útil cuando la dirección de la transacción es fija.'
      }
    }
  },
  render: args => ({
    components: {
      GQuote,
      GConfigProvider
    },
    setup() {
      const sim = useQuoteSimulator('USD', 'PEN');
      return {
        args,
        CURRENCIES,
        ...sim
      };
    },
    template: \`
      <g-config-provider>
        <div style="width: 460px">
          <g-quote
            v-bind="args"
            :from-currencies="CURRENCIES"
            :to-currencies="CURRENCIES"
            :from-currency="fromCurrency"
            :to-currency="toCurrency"
            :from-amount="fromAmount"
            :to-amount="toAmount"
            :is-loading="isLoading"
            :show-swap="false"
            from-label="Tú envías"
            to-label="Tu contacto recibe"
            @from-input="handleFromInput"
            @to-input="handleToInput"
            @from-currency-change="handleFromCurrencyChange"
            @to-currency-change="handleToCurrencyChange"
          />
        </div>
      </g-config-provider>
    \`
  })
}`,...Z.parameters?.docs?.source}}};const gr=["Basic","WithAvailableBalance","InsufficientBalance","Disabled","SingleInput","NoSwap"];export{Q as Basic,H as Disabled,K as InsufficientBalance,Z as NoSwap,Y as SingleInput,W as WithAvailableBalance,gr as __namedExportsOrder,pr as default};
