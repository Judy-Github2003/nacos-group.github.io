import"./hoisted.D5-ClOW8.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import"./index.CTbVEFV3.js";import"./preload-helper.BiBI96sQ.js";import"./consts.DNMxLmKy.js";class l extends HTMLElement{constructor(){super()}}customElements.define("home-introduce",l);class r extends HTMLElement{constructor(){super()}}customElements.define("choose-reason",r);class c extends HTMLElement{constructor(){super()}}customElements.define("nacos-ebook",c);class u extends HTMLElement{constructor(){super()}}customElements.define("explore-features",u);class a extends HTMLElement{constructor(){super()}}customElements.define("use-companies",a);class d extends HTMLElement{constructor(){super(),this.currentInputid="c0",this.flag=!0}connectedCallback(){var e=this;this.cardSolution=this.querySelector(".solution-container"),this.cardSolution&&this.cardSolution.addEventListener("mouseover",function(s){e.selectedLabel(s)})}selectedLabel(e){var s=this,t=e.target.getAttribute("input-id");if(this.flag&&t&&t!==this.currentInputid){this.currentInputid=t,this.flag=!1,setTimeout(function(){s.flag=!0},200);var i=this.querySelector("input[type=radio]#"+t);i&&!i.checked&&(i.checked=!0)}}}customElements.define("card-solution",d),document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".lazy-video");if("IntersectionObserver"in window){let e=new IntersectionObserver((s,t)=>{s.forEach(i=>{if(i.isIntersecting){const o=i.target;o.src=o.getAttribute("data-src"),o.load(),o.classList.remove("lazy-video"),e.unobserve(o)}})});n.forEach(s=>{e.observe(s)})}else n.forEach(e=>{e.src=e.getAttribute("data-src"),e.load()})});class h extends HTMLElement{constructor(){super(),this.currentId="i0",this.flagState=!0}toggleFullScreen(e){!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}connectedCallback(){var e=this;this.cardSolution=this.querySelector(".media-container"),this.videoPlayButtons=this.querySelector(".video-play-bt");const s=this.querySelectorAll("video");e.setInitialCheckedState(),this.cardSolution&&this.cardSolution.addEventListener("click",function(t){e.selectedLabel(t)}),s.forEach(t=>{t.addEventListener("play",i=>this.onPlay(i)),t.addEventListener("pause",i=>this.onPause(i))}),this.cardSolution.addEventListener("click",t=>{t.target.closest(".video-play-bt")?(t.stopPropagation(),this.toggleVideoPlay(t)):t.target.tagName==="LABEL"&&this.selectedLabel(t)}),this.cardSolution.addEventListener("click",t=>{if(t.target.closest(".fullscreen-btn")){t.stopPropagation();const i=t.target.closest("[video-id]").getAttribute("video-id"),o=this.querySelector(`#${i}`);o&&this.toggleFullScreen(o)}})}setInitialCheckedState(){let e=this.querySelector("input[type=radio]#i0");e&&(e.checked=!0)}toggleVideoPlay(e){const s=e.target.closest("[video-id]").getAttribute("video-id"),t=this.querySelector(`#${s}`);t&&(t.paused?(this.pauseOtherVideos(s),t.play(),this.onPlay(e)):(t.pause(),this.onPause(e)))}pauseOtherVideos(e){this.querySelectorAll("video").forEach(s=>{s.id!==e&&(s.pause(),this.onPause({target:s}))})}onPlay(e){const s=e.target.id,t=this.querySelector(`[video-id='${s}'] .play-icon`),i=this.querySelector(`[video-id='${s}'] .pause-icon`);t&&i&&(t.style.display="none",i.style.display="inline")}onPause(e){const s=e.target.id,t=this.querySelector(`[video-id='${s}'] .play-icon`),i=this.querySelector(`[video-id='${s}'] .pause-icon`);t&&i&&(t.style.display="inline",i.style.display="none")}selectedLabel(e){var s=this,t=e.target.getAttribute("input-id");if(this.flagState&&t&&t!==this.currentId){this.currentId=t,this.flagState=!1,setTimeout(function(){s.flagState=!0},200);var i=this.querySelector("input[type=radio]#"+t);i&&!i.checked&&(i.checked=!0)}}}customElements.define("card-player",h);
