"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2441],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),u=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(k.Provider,{value:e},t.children)},d="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=u(a),N=r,c=d["".concat(k,".").concat(N)]||d[N]||o[N]||l;return a?n.createElement(c,p(p({ref:e},m),{},{components:a})):n.createElement(c,p({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=N;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i[d]="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=a[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},24811:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u8f68\u8ff9\u8ffd\u8e2a",keywords:["\u8f68\u8ff9\u8ffd\u8e2a","\u63a8\u9001\u8f68\u8ff9","\u53d8\u66f4\u8f68\u8ff9"],description:"Nacos \u652f\u6301\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\uff0c\u53ef\u81ea\u5b9a\u4e49\u6269\u5c55\u5236\u4f5c\u63a8\u9001\u8f68\u8ff9\u7b49\u529f\u80fd\uff0c\u5e2e\u52a9\u8fd0\u7ef4\u4eba\u5458\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002"},p="\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6",i={unversionedId:"plugin/trace-plugin",id:"plugin/trace-plugin",title:"\u8f68\u8ff9\u8ffd\u8e2a",description:"Nacos \u652f\u6301\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\uff0c\u53ef\u81ea\u5b9a\u4e49\u6269\u5c55\u5236\u4f5c\u63a8\u9001\u8f68\u8ff9\u7b49\u529f\u80fd\uff0c\u5e2e\u52a9\u8fd0\u7ef4\u4eba\u5458\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/plugin/trace-plugin.md",sourceDirName:"plugin",slug:"/plugin/trace-plugin",permalink:"/zh-cn/docs/next/plugin/trace-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8f68\u8ff9\u8ffd\u8e2a",keywords:["\u8f68\u8ff9\u8ffd\u8e2a","\u63a8\u9001\u8f68\u8ff9","\u53d8\u66f4\u8f68\u8ff9"],description:"Nacos \u652f\u6301\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\uff0c\u53ef\u81ea\u5b9a\u4e49\u6269\u5c55\u5236\u4f5c\u63a8\u9001\u8f68\u8ff9\u7b49\u529f\u80fd\uff0c\u5e2e\u52a9\u8fd0\u7ef4\u4eba\u5458\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\u3002"},sidebar:"docs",previous:{title:"\u591a\u6570\u636e\u6e90",permalink:"/zh-cn/docs/next/plugin/datasource-plugin"},next:{title:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",permalink:"/zh-cn/docs/next/plugin/custom-environment-plugin"}},k={},u=[{value:"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5",id:"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5",level:2},{value:"\u8ffd\u8e2a\u4e8b\u4ef6 TraceEvent",id:"\u8ffd\u8e2a\u4e8b\u4ef6-traceevent",level:3},{value:"\u63d2\u4ef6\u5f00\u53d1",id:"\u63d2\u4ef6\u5f00\u53d1",level:2},{value:"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u7684\u964d\u7ea7",id:"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u7684\u964d\u7ea7",level:2},{value:"\u9644\u5f55\uff1a\u5b50\u8ffd\u8e2a\u4e8b\u4ef6\u8be6\u60c5",id:"\u9644\u5f55\u5b50\u8ffd\u8e2a\u4e8b\u4ef6\u8be6\u60c5",level:2}],m={toc:u},d="wrapper";function o(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6"},"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6"),(0,r.kt)("p",null,"Nacos\u4ece2.2.0\u7248\u672c\u5f00\u59cb\uff0c\u53ef\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"},"SPI"),"\u673a\u5236\u6ce8\u5165\u8f68\u8ff9\u8ffd\u8e2a\u5b9e\u73b0\u63d2\u4ef6\uff0c\u5728\u63d2\u4ef6\u4e2d\u8ba2\u9605\u5e76\u5904\u7406\u8ffd\u8e2a\u4e8b\u4ef6\uff0c\u5e76\u6309\u7167\u60a8\u671f\u671b\u7684\u65b9\u5f0f\u8fdb\u884c\u5904\u7406\uff08\u5982\u6253\u65e5\u5fd7\uff0c\u5199\u5165\u5b58\u50a8\u7b49\uff09\u3002\u672c\u6587\u6863\u8be6\u7ec6\u4ecb\u7ecd\u4e00\u4e2a\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u5982\u4f55\u5b9e\u73b0\u4ee5\u53ca\u5982\u4f55\u4f7f\u5176\u751f\u6548\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f:\n\u76ee\u524d\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u5904\u4e8eBeta\u6d4b\u8bd5\u9636\u6bb5,\u5176API\u53ca\u63a5\u53e3\u65b9\u6cd5\u5b9a\u4e49\u53ef\u80fd\u4f1a\u5728\u540e\u7eed\u7248\u672c\u5347\u7ea7\u800c\u6709\u8f83\u5927\u4fee\u6539\uff0c\u8bf7\u6ce8\u610f\u60a8\u7684\u63d2\u4ef6\u9002\u7528\u7248\u672c\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"Nacos \u7684\u8f68\u8ff9\u8ffd\u8e2a\u4e0d\u540c\u4e8e\u4e00\u822c\u610f\u4e49\u7684\u94fe\u8def\u8ffd\u8e2a\uff0c \u4e3b\u8981\u76ee\u7684\u662f\u8ffd\u8e2a\u548c\u8bb0\u5f55\u4e00\u4e9bNacos\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u5982\u670d\u52a1\u6ce8\u518c\u3001\u6ce8\u9500\u3001\u63a8\u9001\u3001\u72b6\u6001\u53d8\u66f4\u7b49\uff0c\u5e76\u975e\u8ffd\u8e2a\u5fae\u670d\u52a1\u95f4\u7684\u76f8\u4e92\u8bbf\u95ee\u94fe\u8def\uff0c\u5982\u9700\u8981\u76d1\u63a7\u8ffd\u8e2a\u670d\u52a1\u95f4\u7684\u76f8\u4e92\u8bbf\u95ee\uff0c\u8bf7\u4f7f\u7528\u5bf9\u5e94\u7684\u94fe\u8def\u8ffd\u8e2a\u9879\u76ee\u3002")),(0,r.kt)("h2",{id:"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5"},"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5"),(0,r.kt)("h3",{id:"\u8ffd\u8e2a\u4e8b\u4ef6-traceevent"},"\u8ffd\u8e2a\u4e8b\u4ef6 TraceEvent"),(0,r.kt)("p",null,"Nacos \u5728\u5173\u952e\u64cd\u4f5c\u7684\u94fe\u8def\u4e2d\u8fdb\u884c\u4e86\u57cb\u70b9\uff0c\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u7684\u8ffd\u8e2a\u4e8b\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"TraceEvent"),"\uff0c \u5c06\u591a\u4e2a\u9488\u5bf9\u76f8\u540c\u8d44\u6e90\uff08\u5982\u670d\u52a1\uff0c\u914d\u7f6e\u7b49\uff09\u7684\u8ffd\u8e2a\u4e8b\u4ef6\u4e32\u8d77\u6765\u4e4b\u540e\uff0c\u4fbf\u5f97\u5230\u4e86\u8be5\u8d44\u6e90\u7684\u8f68\u8ff9\u3002"),(0,r.kt)("p",null,"\u5728\u8ffd\u8e2a\u4e8b\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"TraceEvent"),"\u4e2d\uff0c\u4f1a\u5305\u542b\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u7684\u7c7b\u578b\uff0c\u7531\u5177\u4f53\u4e8b\u4ef6\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventTime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespaceId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u5bf9\u5e94\u8d44\u6e90\u7684\u547d\u540d\u7a7a\u95f4ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u5bf9\u5e94\u8d44\u6e90\u7684\u5206\u7ec4\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u5bf9\u5e94\u8d44\u6e90\u7684\u8d44\u6e90\u540d\uff0c\u5982\u670d\u52a1\u540d\u6216\u914d\u7f6e\u7684dataId")))),(0,r.kt)("p",null,"\u76ee\u524dNacos\u4e2d\u5df2\u7ecf\u5b9a\u4e49\u7684\u5b50\u8ffd\u8e2a\u4e8b\u4ef6\u7c7b\u578b\u6709\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8be6\u60c5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegisterInstanceTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5b9e\u4f8b\u6ce8\u518c\u4e8b\u4ef6\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u6ce8\u518c\u670d\u52a1\u63d0\u4f9b\u8005\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.1"},"\u4e8b\u4ef6\u8be6\u60c5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeregisterInstanceTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5b9e\u4f8b\u6ce8\u9500\u4e8b\u4ef6\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u6ce8\u9500\u670d\u52a1\u63d0\u4f9b\u8005\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.2"},"\u4e8b\u4ef6\u8be6\u60c5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegisterServiceTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6ce8\u518c\u4e8b\u4ef6\uff0c\u4e0d\u540c\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"\u670d\u52a1\u5b9e\u4f8b\u6ce8\u518c\u4e8b\u4ef6"),"\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u521b\u5efa\u7a7a\u670d\u52a1\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.3"},"\u4e8b\u4ef6\u8be6\u60c5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeregisterServiceTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6ce8\u9500\u4e8b\u4ef6\uff0c\u4e0d\u540c\u4e8e",(0,r.kt)("inlineCode",{parentName:"td"},"\u670d\u52a1\u5b9e\u4f8b\u6ce8\u9500\u4e8b\u4ef6"),"\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u5220\u9664\u7a7a\u670d\u52a1\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.4"},"\u4e8b\u4ef6\u8be6\u60c5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SubscribeServiceTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8ba2\u9605\u4e8b\u4ef6\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u8ba2\u9605\u670d\u52a1\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.5"},"\u4e8b\u4ef6\u8be6\u60c5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnsubscribeServiceTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u670d\u52a1\u8ba2\u9605\u4e8b\u4ef6\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u53d6\u6d88\u8ba2\u9605\u670d\u52a1\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.6"},"\u4e8b\u4ef6\u8be6\u60c5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PushServiceTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u63a8\u9001\u4e8b\u4ef6\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u53d1\u751f\u670d\u52a1\u63a8\u9001\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.7"},"\u4e8b\u4ef6\u8be6\u60c5"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HealthStateChangeTraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5b9e\u4f8b\u5065\u5eb7\u72b6\u6001\u53d8\u66f4\u4e8b\u4ef6\uff0c\u4e3b\u8981\u53d1\u751f\u4e8e\u5b9e\u4f8b\u56e0\u5fc3\u8df3/\u5065\u5eb7\u68c0\u67e5\u800c\u5bfc\u81f4\u5b9e\u4f8b\u5065\u5eb7\u72b6\u6001\u53d8\u5316\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1.8"},"\u4e8b\u4ef6\u8be6\u60c5"))))),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5f00\u53d1"},"\u63d2\u4ef6\u5f00\u53d1"),(0,r.kt)("p",null,"\u5f00\u53d1Nacos\u670d\u52a1\u7aef\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\uff0c\u9996\u5148\u9700\u8981\u4f9d\u8d56\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u7684\u76f8\u5173API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-trace-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${project.version}")," \u4e3a\u60a8\u5f00\u53d1\u63d2\u4ef6\u6240\u5bf9\u5e94\u7684Nacos\u7248\u672c"),(0,r.kt)("p",null,"\u968f\u540e\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.trace.spi.NacosTraceSubscriber"),"\u63a5\u53e3\uff0c \u5e76\u5c06\u60a8\u7684\u5b9e\u73b0\u6dfb\u52a0\u5230SPI\u7684services\u5f53\u4e2d\u3002"),(0,r.kt)("p",null,"\u63a5\u53e3\u4e2d\u9700\u8981\u5b9e\u73b0\u7684\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5165\u53c2\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getName"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u5f53\u540d\u5b57\u76f8\u540c\u65f6\uff0c\u540e\u52a0\u8f7d\u7684\u63d2\u4ef6\u4f1a\u8986\u76d6\u5148\u52a0\u8f7d\u7684\u63d2\u4ef6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscribeTypes"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"List<Class<? extends TraceEvent>>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u63d2\u4ef6\u671f\u671b\u8ba2\u9605\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u8fd4\u56de\u7a7a\u5217\u8868\u662f\u4e0d\u8ba2\u9605\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"TraceEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5904\u7406\u4e8b\u4ef6\u7684\u5177\u4f53\u903b\u8f91\uff0c\u8f93\u5165\u7684\u5177\u4f53\u4e8b\u4ef6\u7c7b\u578b\u7531",(0,r.kt)("inlineCode",{parentName:"td"},"subscribeTypes"),"\u63a5\u53e3\u5b9a\u4e49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executor"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"Executor"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8fd4\u56de\u4e0d\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"null"),"\u65f6\uff0c\u5c06\u4f7f\u7528\u8be5Executor\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"td"},"onEvent"),"\u8c03\u7528\uff0c\u5426\u5219\u5c06\u4f7f\u7528\u4e8b\u4ef6\u5206\u53d1\u7ebf\u7a0b\u8fdb\u884c\u8c03\u7528")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f:\n\u5efa\u8bae\u63d2\u4ef6\u5b9e\u73b0\u65f6\u4f7f\u7528\u72ec\u7acbExecutor\uff0c\u5982\u63d2\u4ef6\u5b9e\u73b0\u4e2d\u6709\u5b58\u5728\u963b\u585e\u7684IO\u64cd\u4f5c\uff0c\u5f53\u5b58\u5728IO\u5f02\u5e38\u65f6\u5c06\u963b\u585e\u5176\u4ed6\u4e8b\u4ef6\u7684onEvent\u8c03\u7528\uff0c\u5bfc\u81f4\u79ef\u538b\u95ee\u9898\u3002")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-plugin"},"nacos-group/nacos-plugin"),"\u4e2d\uff0c\u6709\u4e00\u4e2ademo\u7684\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u5b9e\u73b0\uff0c\u8be5demo\u63d2\u4ef6\u8ba2\u9605\u4e86\u6ce8\u518c\u53ca\u6ce8\u9500\u5b9e\u4f8b\u7684\u4e8b\u4ef6\uff0c\u5e76\u6253\u5370\u5230\u65e5\u5fd7\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u7684\u964d\u7ea7"},"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u7684\u964d\u7ea7"),(0,r.kt)("p",null,"\u7531\u4e8e\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u589e\u5f3a\u76d1\u63a7\u7c7b\u522b\u7684\u63d2\u4ef6\uff0c\u4e0d\u4f1a\u5bf9Nacos\u7684\u6570\u636e\u9020\u6210\u5f71\u54cd\uff0c\u56e0\u6b64\u5f53\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u56e0\u5c3d\u91cf\u4e0d\u5f71\u54cdNacos\u4e3b\u8981\u94fe\u8def\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u5efa\u8bae\u63d2\u4ef6\u5b9e\u73b0\u65f6\u4f7f\u7528\u72ec\u7acbExecutor\uff0c\u5982\u63d2\u4ef6\u5b9e\u73b0\u4e2d\u6709\u5b58\u5728\u963b\u585e\u7684IO\u64cd\u4f5c\uff0c\u5f53\u5b58\u5728IO\u5f02\u5e38\u65f6\u5c06\u963b\u585e\u5176\u4ed6\u4e8b\u4ef6\u7684onEvent\u8c03\u7528\uff0c\u5bfc\u81f4\u79ef\u538b\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u5e78\u53d1\u751f\u79ef\u538b\uff0c\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6\u7684\u4e8b\u4ef6\u961f\u5217\u8fbe\u5230\u4e0a\u9650\u65f6\uff0c\u4f1a\u81ea\u52a8\u4e22\u5f03\u540e\u6765\u7684\u4e8b\u4ef6\uff0c\u4ee5\u4fdd\u8bc1\u7cfb\u7edf\u6574\u4f53\u7a33\u5b9a\u6027\u3002"),(0,r.kt)("p",null,"\u53d1\u751f\u4e22\u5f03\u65f6\u80fd\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.log"),"\u4e2d\u770b\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Trace Event Publish failed, event : {}, publish queue size : {}"),"\u5b57\u6837\u3002"),(0,r.kt)("h2",{id:"\u9644\u5f55\u5b50\u8ffd\u8e2a\u4e8b\u4ef6\u8be6\u60c5"},"\u9644\u5f55\uff1a\u5b50\u8ffd\u8e2a\u4e8b\u4ef6\u8be6\u60c5"),(0,r.kt)("h3",{id:"1.1"},"\u670d\u52a1\u5b9e\u4f8b\u6ce8\u518c\u4e8b\u4ef6 RegisterInstanceTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"REGISTER_INSTANCE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u518c\u670d\u52a1\u5b9e\u4f8b\u8bf7\u6c42\u7684\u6765\u6e90IP\uff0c\u53ef\u80fd\u4e3anull")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rpc"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6765\u6e90\u662f\u5426\u4e3agRPC\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\u65f6\u4e3agRPC\u6ce8\u518c\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\u65f6\u4e3aHTTP\u6ce8\u518c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instanceIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6ce8\u518c\u5b9e\u4f8b\u7684\u5730\u5740IP/HOST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instancePort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6ce8\u518c\u5b9e\u4f8b\u7684\u7aef\u53e3PORT")))),(0,r.kt)("h3",{id:"1.2"},"\u670d\u52a1\u5b9e\u4f8b\u6ce8\u9500\u4e8b\u4ef6 DeregisterInstanceTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"DEREGISTER_INSTANCE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u9500\u670d\u52a1\u5b9e\u4f8b\u8bf7\u6c42\u7684\u6765\u6e90IP\uff0c\u53ef\u80fd\u4e3anull")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reason"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u9500\u670d\u52a1\u5b9e\u4f8b\u7684\u539f\u56e0\uff0c\u8be6\u60c5\u89c1",(0,r.kt)("a",{parentName:"td",href:"#1.2.1"},"\u670d\u52a1\u5b9e\u4f8b\u6ce8\u9500\u539f\u56e0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rpc"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6765\u6e90\u662f\u5426\u4e3agRPC\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\u65f6\u4e3agRPC\u6ce8\u518c\uff0c",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\u65f6\u4e3aHTTP\u6ce8\u518c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instanceIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6ce8\u9500\u5b9e\u4f8b\u7684\u5730\u5740IP/HOST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instancePort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6ce8\u9500\u5b9e\u4f8b\u7684\u7aef\u53e3PORT")))),(0,r.kt)("h4",{id:"1.2.1"}," \u670d\u52a1\u5b9e\u4f8b\u6ce8\u9500\u539f\u56e0 DeregisterInstanceReason "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u539f\u56e0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u9500\u6765\u81ea\u4e8e\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u5373\u7531\u7528\u6237\u53d1\u8d77\u7684\u6ce8\u9500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NATIVE_DISCONNECTED"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u9500\u6765\u81ea\u4e8e\u5ba2\u6237\u7aef\u94fe\u63a5\u65ad\u5f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SYNCED_DISCONNECTED"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u9500\u6765\u81ea\u4e8e\u5ba2\u6237\u7aef\u94fe\u63a5\u65ad\u5f00\uff0c\u4f46\u8be5\u5ba2\u6237\u7aef\u94fe\u63a5\u662f\u4e0e\u96c6\u7fa4\u5176\u4ed6\u7684\u8282\u70b9\uff0c\u65ad\u5f00\u540e\u540c\u6b65\u5230\u672c\u8282\u70b9\u7684")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HEARTBEAT_EXPIRE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6ce8\u9500\u6765\u81ea\u4e8e\u5ba2\u6237\u7aef\u5fc3\u8df3\u8bf7\u6c42\u8d85\u65f6\uff0c\u9002\u7528\u4e8e1.X\u7248\u672c\u7684\u5ba2\u6237\u7aef")))),(0,r.kt)("h3",{id:"1.3"},"\u670d\u52a1\u6ce8\u518c\u4e8b\u4ef6 RegisterServiceTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"REGISTER_SERVICE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a\u65e0"),(0,r.kt)("h3",{id:"1.4"},"\u670d\u52a1\u6ce8\u9500\u4e8b\u4ef6 DeregisterServiceTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"DEREGISTER_SERVICE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a\u65e0"),(0,r.kt)("h3",{id:"1.5"},"\u670d\u52a1\u8ba2\u9605\u4e8b\u4ef6 SubscribeServiceTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"SUBSCRIBE_SERVICE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u8005IP")))),(0,r.kt)("h3",{id:"1.6"},"\u53d6\u6d88\u670d\u52a1\u8ba2\u9605\u4e8b\u4ef6 UnsubscribeServiceTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"UNSUBSCRIBE_SERVICE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u8005IP")))),(0,r.kt)("h3",{id:"1.7"},"\u670d\u52a1\u63a8\u9001\u4e8b\u4ef6 PushServiceTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"PUSH_SERVICE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u8005IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instanceSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u63a8\u9001\u7684\u63d0\u4f9b\u8005\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pushCostTimeForAll"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u63a8\u9001\u603b\u8017\u65f6\uff0c\u5b9a\u4e49\u4e3a\u5f00\u59cb\u53d1\u8d77\u63a8\u9001\u5230\u63a8\u9001\u7ed3\u675f\u65f6\u7684\u8017\u65f6\uff0c\u5305\u542b\u4e86\u5728\u805a\u5408\u961f\u5217\u4e2d\u7684\u7b49\u5f85\u65f6\u95f4\u4ee5\u53ca\u6267\u884c\u63a8\u9001\u7684\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pushCostTimeForNetWork"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u63a8\u9001\u7684\u7f51\u7edc\u8017\u65f6\uff0c\u5b9a\u4e49\u4e3a\u6267\u884c\u63a8\u9001\u5230\u63a8\u9001\u7ed3\u675f\u7684\u8017\u65f6\uff0c\u4ec5\u5305\u542b\u4e86\u7f51\u7edc\u8017\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serviceLevelAgreementTime"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u63a8\u9001\u7684\u5b9e\u9645\u751f\u6548\u8017\u65f6\uff0c\u5b9a\u4e49\u4e3a\u670d\u52a1\u53d8\u66f4\u5230\u63a8\u9001\u7ed3\u675f\u65f6\u7684\u8017\u65f6\uff0c\u7c97\u7565\u503c")))),(0,r.kt)("h3",{id:"1.8"},"\u670d\u52a1\u5b9e\u4f8b\u5065\u5eb7\u72b6\u6001\u53d8\u66f4\u4e8b\u4ef6 HealthStateChangeTraceEvent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"2.2.0\u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.kt)("p",null,"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"HEALTH_STATE_CHANGE_TRACE_EVENT")),(0,r.kt)("p",null,"\u989d\u5916\u5185\u5bb9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instanceIp"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u7684\u5730\u5740IP/HOST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"instancePort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f8b\u7684\u7aef\u53e3PORT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isHealthy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u7ed3\u679c\u662f\u5426\u4e3a\u5065\u5eb7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"healthCheckType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5065\u5eb7\u68c0\u67e5\u7684\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"healthStateChangeReason"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5065\u5eb7\u72b6\u6001\u53d1\u751f\u7684\u539f\u56e0")))))}o.isMDXComponent=!0}}]);