import{b as J,l as k,t as T}from"./preact.module.DjWlRcrZ.js";import{q as N}from"./hooks.module.Due7yweL.js";var V=Symbol.for("preact-signals");function g(){if(h>1)h--;else{for(var i,t=!1;d!==void 0;){var o=d;for(d=void 0,w++;o!==void 0;){var r=o.o;if(o.o=void 0,o.f&=-3,!(8&o.f)&&E(o))try{o.c()}catch(e){t||(i=e,t=!0)}o=r}}if(w=0,h--,t)throw i}}var f=void 0,d=void 0,h=0,w=0,y=0;function O(i){if(f!==void 0){var t=i.n;if(t===void 0||t.t!==f)return t={i:0,S:i,p:f.s,n:void 0,t:f,e:void 0,x:void 0,r:t},f.s!==void 0&&(f.s.n=t),f.s=t,i.n=t,32&f.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=f.s,t.n=void 0,f.s.n=t,f.s=t),t}}function v(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}v.prototype.brand=V,v.prototype.h=function(){return!0},v.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)},v.prototype.U=function(i){if(this.t!==void 0){var t=i.e,o=i.x;t!==void 0&&(t.x=o,i.e=void 0),o!==void 0&&(o.e=t,i.x=void 0),i===this.t&&(this.t=o)}},v.prototype.subscribe=function(i){var t=this;return S(function(){var o=t.value,r=f;f=void 0;try{i(o)}finally{f=r}})},v.prototype.valueOf=function(){return this.value},v.prototype.toString=function(){return this.value+""},v.prototype.toJSON=function(){return this.value},v.prototype.peek=function(){var i=f;f=void 0;try{return this.value}finally{f=i}},Object.defineProperty(v.prototype,"value",{get:function(){var i=O(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(w>100)throw new Error("Cycle detected");this.v=i,this.i++,y++,h++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{g()}}}});function x(i){return new v(i)}function E(i){for(var t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function C(i){for(var t=i.s;t!==void 0;t=t.n){var o=t.S.n;if(o!==void 0&&(t.r=o),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function j(i){for(var t=i.s,o=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):o=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}i.s=o}function a(i){v.call(this,void 0),this.x=i,this.s=void 0,this.g=y-1,this.f=4}(a.prototype=new v).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===y))return!0;if(this.g=y,this.f|=1,this.i>0&&!E(this))return this.f&=-2,!0;var i=f;try{C(this),f=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(o){this.v=o,this.f|=16,this.i++}return f=i,j(this),this.f&=-2,!0},a.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}v.prototype.S.call(this,i)},a.prototype.U=function(i){if(this.t!==void 0&&(v.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}},Object.defineProperty(a.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=O(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function P(i){return new a(i)}function A(i){var t=i.u;if(i.u=void 0,typeof t=="function"){h++;var o=f;f=void 0;try{t()}catch(r){throw i.f&=-2,i.f|=8,$(i),r}finally{f=o,g()}}}function $(i){for(var t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,A(i)}function z(i){if(f!==this)throw new Error("Out-of-order effect");j(this),f=i,this.f&=-2,8&this.f&&$(this),g()}function p(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}p.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{i()}},p.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,A(this),C(this),h++;var i=f;return f=this,z.bind(this,i)},p.prototype.N=function(){2&this.f||(this.f|=2,this.o=d,d=this)},p.prototype.d=function(){this.f|=8,1&this.f||$(this)};function S(i){var t=new p(i);try{t.c()}catch(o){throw t.d(),o}return t.d.bind(t)}var U;function c(i,t){k[i]=t.bind(null,k[i]||function(){})}function b(i){U&&U(),U=i&&i.S()}function q(i){var t=this,o=i.data,r=G(o);r.value=o;var e=N(function(){for(var n=t.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return t.__$u.c=function(){var s;!T(e.peek())&&((s=t.base)==null?void 0:s.nodeType)===3?t.base.data=e.peek():(t.__$f|=1,t.setState({}))},P(function(){var s=r.value.value;return s===0?0:s===!0?"":s||""})},[]);return e.value}q.displayName="_st",Object.defineProperties(v.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:q},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),c("__b",function(i,t){if(typeof t.type=="string"){var o,r=t.props;for(var e in r)if(e!=="children"){var n=r[e];n instanceof v&&(o||(t.__np=o={}),o[e]=n,r[e]=n.peek())}}i(t)}),c("__r",function(i,t){b();var o,r=t.__c;r&&(r.__$f&=-2,(o=r.__$u)===void 0&&(r.__$u=o=function(e){var n;return S(function(){n=this}),n.c=function(){r.__$f|=1,r.setState({})},n}())),b(o),i(t)}),c("__e",function(i,t,o,r){b(),i(t,o,r)}),c("diffed",function(i,t){b();var o;if(typeof t.type=="string"&&(o=t.__e)){var r=t.__np,e=t.props;if(r){var n=o.U;if(n)for(var s in n){var u=n[s];u!==void 0&&!(s in r)&&(u.d(),n[s]=void 0)}else o.U=n={};for(var _ in r){var l=n[_],m=r[_];l===void 0?(l=B(o,_,m,e),n[_]=l):l.o(m,e)}}}i(t)});function B(i,t,o,r){var e=t in i&&i.ownerSVGElement===void 0,n=x(o);return{o:function(s,u){n.value=s,r=u},d:S(function(){var s=n.value.value;r[t]!==s&&(r[t]=s,e?i[t]=s:s?i.setAttribute(t,s):i.removeAttribute(t))})}}c("unmount",function(i,t){if(typeof t.type=="string"){var o=t.__e;if(o){var r=o.U;if(r){o.U=void 0;for(var e in r){var n=r[e];n&&n.d()}}}}else{var s=t.__c;if(s){var u=s.__$u;u&&(s.__$u=void 0,u.d())}}i(t)}),c("__h",function(i,t,o,r){(r<3||r===9)&&(t.__$f|=2),i(t,o,r)}),J.prototype.shouldComponentUpdate=function(i,t){var o=this.__$u;if(!(o&&o.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var r in t)return!0;for(var e in i)if(e!=="__source"&&i[e]!==this.props[e])return!0;for(var n in this.props)if(!(n in i))return!0;return!1};function G(i){return N(function(){return x(i)},[])}export{v as Signal,P as computed,S as effect,x as signal,G as useSignal};
