var E=Object.defineProperty;var b=(o,r,t)=>r in o?E(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;var a=(o,r,t)=>(b(o,typeof r!="symbol"?r+"":r,t),t);const I="_top";class q extends HTMLElement{constructor(){super();a(this,"_current",this.querySelector('a[aria-current="true"]'));a(this,"minH",parseInt(this.dataset.minH||"2",10));a(this,"maxH",parseInt(this.dataset.maxH||"3",10));const t=[...this.querySelectorAll("a")],l=e=>{if(e instanceof HTMLHeadingElement){if(e.id===I)return!0;const c=e.tagName[1];if(c){const i=parseInt(c,10);if(i>=this.minH&&i<=this.maxH)return!0}}return!1},s=e=>{if(!e)return null;const c=e;for(;e;){if(l(e))return e;for(e=e.previousElementSibling;e!=null&&e.lastElementChild;)e=e.lastElementChild;const i=s(e);if(i)return i}return s(c.parentElement)},m=e=>{for(const{isIntersecting:c,target:i}of e){if(!c)continue;const f=s(i);if(!f)continue;const g=t.find(p=>p.hash==="#"+encodeURIComponent(f.id));if(g){this.current=g;break}}},d=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let n;const u=()=>{n&&n.disconnect(),n=new IntersectionObserver(m,{rootMargin:this.getRootMargin()}),d.forEach(e=>n.observe(e))};u();const H=window.requestIdleCallback||(e=>setTimeout(e,1));let h;window.addEventListener("resize",()=>{n&&n.disconnect(),clearTimeout(h),h=setTimeout(()=>H(u),200)})}set current(t){t!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),t.setAttribute("aria-current","true"),this._current=t)}getRootMargin(){var n,u;const t=((n=document.querySelector("header"))==null?void 0:n.getBoundingClientRect().height)||0,l=((u=this.querySelector("summary"))==null?void 0:u.getBoundingClientRect().height)||0,s=t+l+60,m=s+24,d=document.documentElement.clientHeight;return`-${s}px 0% ${m-d}px`}}customElements.define("markdown-toc",q);
