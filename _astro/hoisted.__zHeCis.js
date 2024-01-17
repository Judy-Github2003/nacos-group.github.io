import"./hoisted.deiCvtC3.js";import"./index.PDhEm6KS.js";class b extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",s=>this.closeOnEscape(s))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",b);const S=document.documentElement;S.setAttribute("data-theme","light");const w="modulepreload",k=function(u){return"/"+u},y={},L=function(e,s,o){let d=Promise.resolve();if(s&&s.length>0){const c=document.getElementsByTagName("link");d=Promise.all(s.map(n=>{if(n=k(n),n in y)return;y[n]=!0;const a=n.endsWith(".css"),h=a?'[rel="stylesheet"]':"";if(!!o)for(let l=c.length-1;l>=0;l--){const r=c[l];if(r.href===n&&(!a||r.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${h}`))return;const t=document.createElement("link");if(t.rel=a?"stylesheet":w,a||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),a)return new Promise((l,r)=>{t.addEventListener("load",l),t.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${n}`)))})}))}return d.then(()=>e()).catch(c=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=c,window.dispatchEvent(n),!n.defaultPrevented)throw c})};class T extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),s=this.querySelector("button[data-close-modal]"),o=this.querySelector("dialog"),d=this.querySelector(".dialog-frame"),c=i=>{("href"in(i.target||{})||document.body.contains(i.target)&&!d.contains(i.target))&&a()},n=i=>{o.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),i?.stopPropagation(),window.addEventListener("click",c)},a=()=>o.close();e.addEventListener("click",n),e.disabled=!1,s.addEventListener("click",a),o.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",c)}),window.addEventListener("keydown",i=>{const t=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);i.metaKey===!0&&i.key==="k"?(o.open?a():n(),i.preventDefault()):i.key==="/"&&!o.open&&!t&&(n(),i.preventDefault())});let h={};try{h=JSON.parse(this.dataset.translations||"{}")}catch{}window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(t=>setTimeout(t,1)))(async()=>{const{PagefindUI:t}=await L(()=>import("./ui-core.Ts5yjMM5.js"),__vite__mapDeps([0,1,2]));new t({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:h,showSubResults:!0})})})}}customElements.define("site-search",T);class q extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#r());const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(s.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#s(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#s():e,this.#o(e)}#o(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#r(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",q);class x extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",s=>{s.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=s.currentTarget.value)})}}customElements.define("starlight-lang-select",x);const C="_top";class v extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],s=t=>{if(t instanceof HTMLHeadingElement){if(t.id===C)return!0;const l=t.tagName[1];if(l){const r=parseInt(l,10);if(r>=this.minH&&r<=this.maxH)return!0}}return!1},o=t=>{if(!t)return null;const l=t;for(;t;){if(s(t))return t;for(t=t.previousElementSibling;t?.lastElementChild;)t=t.lastElementChild;const r=o(t);if(r)return r}return o(l.parentElement)},d=t=>{for(const{isIntersecting:l,target:r}of t){if(!l)continue;const m=o(r);if(!m)continue;const f=e.find(g=>g.hash==="#"+encodeURIComponent(m.id));if(f){this.current=f;break}}},c=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let n;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver(d,{rootMargin:this.getRootMargin()}),c.forEach(t=>n.observe(t))};a();const h=window.requestIdleCallback||(t=>setTimeout(t,1));let i;window.addEventListener("resize",()=>{n&&n.disconnect(),clearTimeout(i),i=setTimeout(()=>h(a),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,s=this.querySelector("summary")?.getBoundingClientRect().height||0,o=e+s+32,d=o+24,c=document.documentElement.clientHeight;return`-${o}px 0% ${d-c}px`}}customElements.define("starlight-toc",v);class M extends v{set current(e){super.current=e;const s=this.querySelector(".display-current");s&&(s.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const s=()=>{e.open=!1};e.querySelectorAll("a").forEach(o=>{o.addEventListener("click",s)}),window.addEventListener("click",o=>{e.contains(o.target)||s()}),window.addEventListener("keydown",o=>{if(o.key==="Escape"&&e.open){const d=e.contains(document.activeElement);if(s(),d){const c=e.querySelector("summary");c&&c.focus()}}})}}customElements.define("mobile-starlight-toc",M);class H extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),s=this.querySelector("button[data-close-modal]"),o=this.querySelector('button[type="submit"]'),d=this.querySelector("dialog"),c=this.querySelector(".dialog-frame"),n=this.querySelector("form"),a=this.querySelector("div.success-pane"),h=r=>{n.hidden=r,a.hidden=!r,r&&a.focus()},i=r=>{c.contains(r.target)||l()},t=r=>{h(!1),d.showModal(),n.querySelector("input:checked")?.focus(),r.stopPropagation(),window.addEventListener("click",i)},l=()=>{d.close(),window.removeEventListener("click",i)};e.addEventListener("click",t),s.addEventListener("click",l),n.addEventListener("submit",async r=>{r.preventDefault(),o.disabled=!0;try{const m=n.type.value,f=n.description.value,g=n.phone.value,p=await fetch(`http://goat.cn-hangzhou.log.aliyuncs.com/logstores/feedback/track?APIVersion=0.6.0&type=${m}&description=${f}&phone=${g}&url=${location.href}`);if(!p.ok)throw new Error(p.statusText);const E=await p.json();if(E.error)throw new Error(E.error)}catch(m){console.error(`Error submitting feedback form
`,m)}h(!0),o.disabled=!1,n.reset()}),e.disabled=!1}}customElements.define("feedback-form",H);export{L as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/ui-core.Ts5yjMM5.js","_astro/hoisted.deiCvtC3.js","_astro/index.PDhEm6KS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
