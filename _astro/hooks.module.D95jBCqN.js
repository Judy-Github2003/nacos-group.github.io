import{l as S}from"./preact.module.BEjYR8BY.js";var v,i,d,V,l=0,F=[],m=[],r=S,q=r.__b,A=r.__r,g=r.diffed,U=r.__c,b=r.unmount,k=r.__;function p(_,n){r.__h&&r.__h(i,_,l||n),l=0;var t=i.__H||(i.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:m}),t.__[_]}function j(_){return l=1,w(W,_)}function w(_,n,t){var o=p(v++,2);if(o.t=_,!o.__c&&(o.__=[t?t(n):W(void 0,n),function(c){var e=o.__N?o.__N[0]:o.__[0],f=o.t(e,c);e!==f&&(o.__N=[f,o.__[1]],o.__c.setState({}))}],o.__c=i,!i.u)){var a=function(c,e,f){if(!o.__c.__H)return!0;var s=o.__c.__H.__.filter(function(u){return!!u.__c});if(s.every(function(u){return!u.__N}))return!h||h.call(this,c,e,f);var E=!1;return s.forEach(function(u){if(u.__N){var P=u.__[0];u.__=u.__N,u.__N=void 0,P!==u.__[0]&&(E=!0)}}),!(!E&&o.__c.props===c)&&(!h||h.call(this,c,e,f))};i.u=!0;var h=i.shouldComponentUpdate,y=i.componentWillUpdate;i.componentWillUpdate=function(c,e,f){if(this.__e){var s=h;h=void 0,a(c,e,f),h=s}y&&y.call(this,c,e,f)},i.shouldComponentUpdate=a}return o.__N||o.__}function z(_,n){var t=p(v++,3);!r.__s&&C(t.__H,n)&&(t.__=_,t.i=n,i.__H.__h.push(t))}function B(_){return l=5,T(function(){return{current:_}},[])}function T(_,n){var t=p(v++,7);return C(t.__H,n)?(t.__V=_(),t.i=n,t.__h=_,t.__V):t.__}function G(_){var n=i.context[_.__c],t=p(v++,9);return t.c=_,n?(t.__==null&&(t.__=!0,n.sub(i)),n.props.value):_.__}function I(){for(var _;_=F.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(H),_.__H.__h.forEach(N),_.__H.__h=[]}catch(n){_.__H.__h=[],r.__e(n,_.__v)}}r.__b=function(_){i=null,q&&q(_)},r.__=function(_,n){_&&n.__k&&n.__k.__m&&(_.__m=n.__k.__m),k&&k(_,n)},r.__r=function(_){A&&A(_),v=0;var n=(i=_.__c).__H;n&&(d===i?(n.__h=[],i.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=m,t.__N=t.i=void 0})):(n.__h.forEach(H),n.__h.forEach(N),n.__h=[],v=0)),d=i},r.diffed=function(_){g&&g(_);var n=_.__c;n&&n.__H&&(n.__H.__h.length&&(F.push(n)!==1&&V===r.requestAnimationFrame||((V=r.requestAnimationFrame)||$)(I)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==m&&(t.__=t.__V),t.i=void 0,t.__V=m})),d=i=null},r.__c=function(_,n){n.some(function(t){try{t.__h.forEach(H),t.__h=t.__h.filter(function(o){return!o.__||N(o)})}catch(o){n.some(function(a){a.__h&&(a.__h=[])}),n=[],r.__e(o,t.__v)}}),U&&U(_,n)},r.unmount=function(_){b&&b(_);var n,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{H(o)}catch(a){n=a}}),t.__H=void 0,n&&r.__e(n,t.__v))};var x=typeof requestAnimationFrame=="function";function $(_){var n,t=function(){clearTimeout(o),x&&cancelAnimationFrame(n),setTimeout(_)},o=setTimeout(t,100);x&&(n=requestAnimationFrame(t))}function H(_){var n=i,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),i=n}function N(_){var n=i;_.__c=_.__(),i=n}function C(_,n){return!_||_.length!==n.length||n.some(function(t,o){return t!==_[o]})}function W(_,n){return typeof n=="function"?n(_):n}export{B as F,G as P,z as _,j as p,T as q};
