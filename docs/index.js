!function(){"use strict";function e(e,t){e.addEventListener("animationend",(e=>{t(e.animationName)}))}function t(e,t){e.style.animationName=t}function n(e){return`gmal-${e}`}function o(...e){const t=document.createElement("div");return t.classList.add(...e),t}const s=()=>{let e=document.querySelector(".gmal-box");return e||(e=o(n("box")),document.body.append(e)),e};function i(e,t){const n=e.style.cssText.split(";");n.pop(),e.style.cssText=`${n.concat(t).join(";")};`}const c='viewBox="0 0 24 24"',r='style="width:1em;height:1em;vertical-align:baseline"',l=`<svg class="${n("ani-turn")}" ${c} ${r}><path d="M1,12A11,11,0,0,0,12,23h0A11,11,0,0,0,12,1" style="fill:none;stroke:#1890ff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M18.5,12A6.5,6.5,0,1,0,12,18.5h0" style="fill:none;stroke:#1890ff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`,a=[`<svg ${c} ${r}><circle cx="12" cy="12" r="12" style="fill:#29abe2"/><path d="M12,17.5a1,1,0,0,1-1-1v-5h-.5a1,1,0,0,1,0-2H12a1,1,0,0,1,1,1v6A1,1,0,0,1,12,17.5Z" style="fill:#fff"/><path d="M14,18.5H10a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" style="fill:#fff"/><circle cx="12" cy="6" r="1.5" style="fill:#fff"/></svg>`,`<svg ${c} ${r}><circle cx="12" cy="12" r="12" style="fill:#faad14"/><path d="M12,19.5A1.5,1.5,0,1,0,10.5,18,1.5,1.5,0,0,0,12,19.5Z" style="fill:#fff;fill-rule:evenodd"/><path d="M12,14a1.5,1.5,0,0,1-1.5-1.5v-7a1.5,1.5,0,0,1,3,0v7A1.5,1.5,0,0,1,12,14Z" style="fill:#fff"/></svg>`,`<svg ${c} ${r}><circle cx="12" cy="12" r="12" style="fill:#e06968"/><path d="M16,8,8,16" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M8,8l8,8" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`,`<svg ${c} ${r}><path d="M12,.5l3.18,2.2h3.93l1.21,3.55,3.18,2.2L22.28,12l1.22,3.55-3.18,2.2L19.11,21.3H15.18L12,23.5,8.82,21.3H4.89L3.68,17.75.5,15.55,1.72,12,.5,8.45l3.18-2.2L4.89,2.7H8.82Z" style="fill:#52c41a;stroke:#52c41a;stroke-linecap:round;stroke-linejoin:round"/><path d="M7.5,12l3,3,6-6" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>`,l],d=["info","warning","error","success","loading"];function u(e,t,o){return`class="${n("aniicon")} ${n(t)} ${e?n("dense"):""} ${o}"`}function p(e,t=!1,o=""){switch(e){case"success":return function(e=!1,t=""){return`<div ${u(e,"success-icon",t)}><div class="${n("success-line")} ${n("line-tip")}"></div><div class="${n("success-line")} ${n("line-long")}"></div><div class="${n("success-ring")}"></div><div class="${n("success-fix")}"></div></div>`}(t,o);case"error":return function(e=!1,t=""){return`<div ${u(e,"err-icon",t)}><div class="${n("err-r")}"><div class="${n("err-ll")}"></div><div class="${n("err-lr")}"></div></div></div>`}(t,o);case"warning":return function(e=!1,t=""){return`<div ${u(e,"warn-icon",t)}><div class="${n("warn-content")}">!</div></div>`}(t,o);case"info":return function(e=!1,t=""){return`<div ${u(e,"info-icon",t)}><div class="${n("info-content")}">i</div></div>`}(t,o);case"loading":return function(e=!1,t=""){return`<div ${u(e,"load-icon",t)}>${l}</div>`}(t,o);default:return""}}class f{timeout=2500;maxCount=8;activeInsts=new Map;constructor(e,t){this.type=t,this.core=e,1===t&&(this.timeout=0)}config(e){this.timeout=e.timeout||this.timeout,this.maxCount=e.maxCount||this.maxCount}fire(e){const t=this.mkMsg(e);return"loading"!==e.type&&this.sT(t,e?.timeout||this.timeout),t}sT(e,t){if(!t)return;const{$el:n}=e;let o=e.progress;o??=this.mkP(e,t),o.reset(),n.onmouseenter=o.pause,n.onmouseleave=o.resume}mkP(e,t){const{$el:s}=e,c=o(n("progress")),r=o(n("progress-bar"));c.append(r),s.append(c),r.ontransitionend=()=>{e.close(-1)};const l=()=>r.clientWidth/c.clientWidth,a=()=>{i(r,["width:0",`transition:width ${t*l()}ms linear`])};return e.progress={pause:()=>{i(r,["transition:none",`width:${100*l()}%`])},resume:a,reset:()=>{i(r,["width:100%","transition:none"]),a()}}}mkMsg(e){const o=`${e.content}${e.type}`;if(!this.type&&this.activeInsts.has(o)){const e=this.activeInsts.get(o);return e.count+=1,function(e,o){const s=n("count");let i=e.querySelector(`.${s}`);i||(i=document.createElement("span"),i.classList.add(s),e.append(i)),i.innerHTML=`${o>99?"99":o}`,t(i,""),setTimeout((()=>{t(i,n("shake"))}))}(e.$el,e.count),e}const s={...e,onClosed:t=>{e?.onClosed&&e.onClosed(t)},onClose:()=>{this.activeInsts.delete(o)}},i=this.core(s);if(1===this.type||this.activeInsts.size>=this.maxCount){const e=this.activeInsts.values().next().value;e&&(e.progress?.pause(),e.close(-2))}const c={...i,id:o,count:1};return this.activeInsts.set(o,c),i.open(),c}}function m(e,t){const n=new f(e,t),o=(...e)=>n.fire(function(e){const t={content:"success",type:"success"};let n=!1;const o=e=>{switch(typeof e){case"string":n?t.type=e:(t.content=e,n=!0);break;case"object":Object.assign(t,e)}};for(let t=0;t<3;t++){const n=e[t];n&&o(n)}return t}(e));return o.config=n.config.bind(n),o}function h(e=""){return`<i class="${e}" style="cursor:pointer;transition:all 0.2s"><svg viewBox="0 0 24 24" width="1em" height="1em"><path d="M1.5,1.5l21,21" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/><path d="M1.5,22.5l21-21" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:3px"/></svg></i>`}function v(e,t){const o=document.createElement("button");return o.textContent=e,o.onclick=t,o.classList.add(n("alert-btn")),o}function $(i){const c=o(n("alert")),r=p(i.type,!1,n("alert-icon"));if(c.innerHTML=`${r}<div class="${n("alert-title")}">${i.content}</div>`,i.text||i.html){const e=o(n("alert-content"));i.html?"string"==typeof i.html?e.innerHTML=i.html:e.append(i.html):e.textContent=i.text||"hello",c.append(e)}const l=s(),a=o=>(i.onClose(),t(c,n("alert-hide")),new Promise((t=>{e(c,(e=>{e===n("alert-hide")&&(c.remove(),i.onClosed(o),t())}))})));if(i.showCancel||i.showConfirm){const e=o(n("alert-btn-group"));i.showCancel&&e.append(v("取消",(()=>{a(0)}))),i.showConfirm&&e.append(v("确定",(()=>{a(1)}))),c.append(e)}if(!i.hideClose){const e=o();e.innerHTML=h(n("alert-close")),e.onclick=()=>{a(0)},c.append(e)}return{close:a,open:()=>{l.append(c)},$el:c}}const g=m($,1);function y(i){const c=function(e,t=""){const n=d.indexOf(e);return`<i class="${t}">${a[n]??""}</i>`}(i.type,n("icon")),r=o(n("msg")),l=o(n("msg-main"));r.append(l),l.innerHTML=`${c}<div class=${n("msg-content")}>${i.content}</div>`;return{open:()=>{(()=>{let e=document.querySelector(`.${n("msg-box")}`);return e||(e=o(n("msg-box")),s().append(e),e)})().append(r),t(r,n("msg-movein"))},close:o=>(i.onClose(),l.style.maxHeight=`${l.offsetHeight}px`,t(r,n("msg-moveout")),t(l,n("msg-out")),new Promise((t=>{e(r,(e=>{e===n("msg-moveout")&&(r.remove(),i.onClosed(o),t())}))}))),$el:r}}const k=m(y,0);function w(c){const r=p(c.type,!0,n("notice-icon")),l=o(n("notice"));l.innerHTML=`<div class="${n("notice-main")}">${r}  <div class="${n("notice-content")}">${c.content}</div></div>`,e(l,(e=>{e===n("open")&&i(l,["opacity:1",`animation-name:${n("notice-movein")}`]),e===n("notice-moveout")&&t(l,n("close"))}));return{open:()=>{(()=>{let e=document.querySelector(`.${n("notice-box")}`);return e||(e=o(n("notice-box")),s().append(e),e)})().prepend(l),i(l,[`max-height:${l.offsetHeight+10}px`]),t(l,n("open")),setTimeout((()=>{const e=l.querySelector(`.${n("notice-icon")}`);e&&(e.style.opacity="1")}),400)},close:o=>(c.onClose(),new Promise((s=>{t(l,n("notice-moveout")),e(l,(e=>{e===n("close")&&(l.remove(),c.onClosed(o),s())}))}))),$el:l}}const x=m(w,0),C={info:"#409eff",success:"#67c23a",warning:"#e6a23c",error:"#f56c6c"};function b(i){const c=C[i.type]||C.info,r=o(n("info"));r.innerHTML=`<div class="${n("info-header")}"><div class="${n("info-status")}" style="background:${c};"></div><span style="margin-right:auto;font-weight:600">${i.headerLeft||"公告"}</span><span style="font-size:.875em;opacity:.7">${i.headerRight||""}</span>${i.hideClose?"":h(n("info-close"))}</div><div class="${n("info-content")}">${i.content}</div>`;const l=o=>(i.onClose(),new Promise((s=>{t(r,n("info-move-out")),e(r,(e=>{e===n("info-move-out")&&(r.remove(),i.onClosed(o),s())}))})));if(!i.hideClose){r.querySelector(`.${n("info-close")}`).onclick=()=>{l(0)}}return{open:()=>{s().append(r)},close:l,$el:r}}const M=m(b,1),L=document.querySelector("#root");if(!L)throw new Error("Root element not found");function H(e,t){const n=document.createElement("button");return n.classList.add("btn"),n.textContent=e,n.onclick=t,n}function T(e){const t=o("btn-box");let n;switch(e){case"alert":default:n=g;break;case"message":n=k;break;case"notice":n=x;break;case"information":n=M}let s=!1;return t.append(H(`${e} success`,(()=>n("success")))),t.append(H(`${e} error`,(()=>n("error","error")))),t.append(H(`${e} warning`,(()=>n("warning","warning")))),t.append(H(`${e} info`,(()=>n("info","info")))),t.append(H(`${e} loading`,(()=>{if(s)return;s=!0;const e=n({type:"loading",content:"loading",onClosed(){s=!1}});setTimeout((()=>e.close().then((()=>{k("load complete")}))),2e3)}))),t}function j(e){const t=o("area"),n=document.createElement("h3");return n.textContent=e,t.append(n),t}L.innerHTML="";const E=j("Alert"),I=T("alert"),q=document.createElement("input");I.append(H("alert html",(()=>{g({content:"输入点什么吧",type:"info",html:q,showConfirm:!0,hideClose:!0,onClosed(){k(""+(q.value?`你输入了：${q.value}`:"你没有输入")),q.value=""}})}))),E.append(I);const A=j("Message");A.append(T("message"));const S=j("Notice");S.append(T("notice"));const P=j("Information");P.append(T("information")),L.append(H("changeTheme",(()=>{document.documentElement.dataset.theme="dark"===document.documentElement.dataset.theme?"light":"dark"})),E,A,S,P)}();