"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=g(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u914d\u7f6e\u53d8\u66f4",keywords:["\u914d\u7f6e\u53d8\u66f4","\u914d\u7f6e\u5ba1\u8ba1","\u914d\u7f6e\u683c\u5f0f\u6821\u9a8c","webhook"],description:"Nacos \u652f\u6301\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\uff0c\u53ef\u652f\u6301\u914d\u7f6e\u5ba1\u8ba1\u3001\u914d\u7f6e\u683c\u5f0f\u6821\u9a8c\u3001\u53ca\u53d8\u66f4\u540ewebhook\u56de\u8c03"},i="\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6",p={unversionedId:"plugin/config-change-plugin",id:"version-2.X/plugin/config-change-plugin",title:"\u914d\u7f6e\u53d8\u66f4",description:"Nacos \u652f\u6301\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\uff0c\u53ef\u652f\u6301\u914d\u7f6e\u5ba1\u8ba1\u3001\u914d\u7f6e\u683c\u5f0f\u6821\u9a8c\u3001\u53ca\u53d8\u66f4\u540ewebhook\u56de\u8c03",source:"@site/versioned_docs/version-2.X/plugin/config-change-plugin.md",sourceDirName:"plugin",slug:"/plugin/config-change-plugin",permalink:"/docs/plugin/config-change-plugin",draft:!1,tags:[],version:"2.X",frontMatter:{title:"\u914d\u7f6e\u53d8\u66f4",keywords:["\u914d\u7f6e\u53d8\u66f4","\u914d\u7f6e\u5ba1\u8ba1","\u914d\u7f6e\u683c\u5f0f\u6821\u9a8c","webhook"],description:"Nacos \u652f\u6301\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\uff0c\u53ef\u652f\u6301\u914d\u7f6e\u5ba1\u8ba1\u3001\u914d\u7f6e\u683c\u5f0f\u6821\u9a8c\u3001\u53ca\u53d8\u66f4\u540ewebhook\u56de\u8c03"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",permalink:"/docs/plugin/custom-environment-plugin"},next:{title:"\u53cd\u8106\u5f31",permalink:"/docs/plugin/control-plugin"}},o={},g=[{value:"\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5",id:"\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5",level:2},{value:"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9(ConfigChangePointCutTypes)",id:"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9configchangepointcuttypes",level:3},{value:"\u914d\u7f6e\u53d8\u66f4\u7ec7\u5165\u7c7b\u578b(ConfigChangeExecuteTypes)",id:"\u914d\u7f6e\u53d8\u66f4\u7ec7\u5165\u7c7b\u578bconfigchangeexecutetypes",level:3},{value:"\u63d2\u4ef6\u5f00\u53d1",id:"\u63d2\u4ef6\u5f00\u53d1",level:2},{value:"\u52a0\u8f7d\u63d2\u4ef6",id:"\u52a0\u8f7d\u63d2\u4ef6",level:3},{value:"\u63d2\u4ef6\u81ea\u5b9a\u4e49\u53c2\u6570\u4f20\u9012",id:"\u63d2\u4ef6\u81ea\u5b9a\u4e49\u53c2\u6570\u4f20\u9012",level:3},{value:"\u63d2\u4ef6DEMO\u5b9e\u73b0",id:"\u63d2\u4ef6demo\u5b9e\u73b0",level:2}],u={toc:g},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6"},"\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6"),(0,r.kt)("p",null,"\u793e\u533a\u4e2d\u4e00\u76f4\u4ee5\u6765\u90fd\u5e0c\u671bNacos\u914d\u7f6e\u4e2d\u5fc3\u80fd\u5728\u914d\u7f6e\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u901a\u77e5\u4e00\u4e9b\u7279\u5b9a\u7cfb\u7edf\uff0c\u7528\u4e8e\u53d1\u9001\u8bb0\u5f55\u3001\u8b66\u544a\u7b49\u5ba1\u8ba1\u529f\u80fd\u3002\u57282.3.0\u7248\u672c\u524d\uff0c\u53ea\u80fd\u901a\u8fc7\u6a21\u62dfNacos\u5ba2\u6237\u7aef\u8ba2\u9605\u914d\u7f6e\u7684\u65b9\u5f0f\uff0c\u5bf9\u6838\u5fc3\u914d\u7f6e\u7684\u53d8\u66f4\u64cd\u4f5c\u8fdb\u884c\u8ba2\u9605\uff0c\u5728\u6536\u5230\u53d8\u66f4\u901a\u77e5\u540e\uff0c\u8fdb\u884c\u53d1\u9001\u8bb0\u5f55\u3001\u8b66\u544a\u7b49\u529f\u80fd\u7684\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u5b9e\u73b0\u65b9\u5f0f\u6709\u51e0\u4e2a\u6bd4\u8f83\u5927\u7684\u95ee\u9898\uff0c\u7b2c\u4e00\u662f\u76d1\u542c\u7684\u914d\u7f6e\u9700\u8981\u9010\u4e2a\u6dfb\u52a0\uff0c\u96be\u4ee5\u5bf9\u6240\u6709\u914d\u7f6e\u53d8\u66f4\u8fdb\u884c\u83b7\u53d6\uff1b\u7b2c\u4e8c\u662f\u53ea\u80fd\u5728\u914d\u7f6e\u53d8\u66f4\u540e\u6267\u884c\u529f\u80fd\u903b\u8f91\uff0c\u65e0\u6cd5\u505a\u5230\u524d\u7f6e\u7684\u64cd\u4f5c\uff0c\u5982\u683c\u5f0f\u6821\u9a8c\uff0c\u767d\u540d\u5355\u6821\u9a8c\u7b49\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64Nacos\u57282.3.0\u7248\u672c\u540e\uff0c\u652f\u6301\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"},"SPI"),"\u6ce8\u5165\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u65b9\u5f0f\uff0c\u5bf9\u914d\u7f6e\u53d8\u66f4\u524d\uff0c\u548c\u53d8\u66f4\u5b8c\u6210\u540e\u5206\u522b\u6267\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u5982\u683c\u5f0f\u6821\u9a8c\uff0c\u767d\u540d\u5355\u6821\u9a8c\uff0cwebhook\u7b49\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5"},"\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u4e2d\u7684\u6982\u5ff5"),(0,r.kt)("p",null,"Nacos\u7684\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\uff0c\u53c2\u8003\u4e86\u9762\u5411\u5207\u9762\u7f16\u7a0bAOP\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5c06\u914d\u7f6e\u7684\u53d8\u66f4\u64cd\u4f5c\uff08\u5982\u65b0\u589e\uff0c\u66f4\u65b0\uff0c\u5220\u9664\uff09\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u5207\u70b9\uff08PointCut)"),"\uff0c\u5e76\u5728\u8fd9\u4e9b\u5207\u70b9",(0,r.kt)("inlineCode",{parentName:"p"},"\u524d(Before)"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u540e(After)"),"\u7ec7\u5165\u63d2\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9configchangepointcuttypes"},"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9(ConfigChangePointCutTypes)"),(0,r.kt)("p",null,"Nacos\u6839\u636e\u914d\u7f6e\u53d8\u66f4\u7684\u884c\u4e3a\u548c\u6765\u6e90\uff0c\u5c06\u914d\u7f6e\u53d8\u66f4\u64cd\u4f5c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.config.constants.ConfigChangePointCutTypes"),"\u4e2d\u5b9a\u4f4d\u4e3a\u4e86\u6570\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9(ConfigChangePointCutTypes)"),"\uff0c\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5207\u70b9\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8d77\u59cb\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUBLISH_BY_HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u901a\u8fc7HTTP\u63a5\u53e3\u8fdb\u884c\u53d1\u5e03\uff0c\u5305\u542b\u4e86\u521b\u5efa\u914d\u7f6e\u53ca\u4fee\u6539\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUBLISH_BY_RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u901a\u8fc7GRPC\u63a5\u53e3\u8fdb\u884c\u53d1\u5e03\uff0c\u5305\u542b\u4e86\u521b\u5efa\u914d\u7f6e\u53ca\u4fee\u6539\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REMOVE_BY_HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u901a\u8fc7HTTP\u63a5\u53e3\u8fdb\u884c\u5220\u9664"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REMOVE_BY_RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u901a\u8fc7GRPC\u63a5\u53e3\u8fdb\u884c\u5220\u9664"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IMPORT_BY_HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u901a\u8fc7HTTP\u63a5\u53e3\u8fdb\u884c\u5bfc\u5165"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REMOVE_BATCH_HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u901a\u8fc7HTTP\u63a5\u53e3\u8fdb\u884c\u6279\u91cf\u5220\u9664"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")))),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53d8\u66f4\u7ec7\u5165\u7c7b\u578bconfigchangeexecutetypes"},"\u914d\u7f6e\u53d8\u66f4\u7ec7\u5165\u7c7b\u578b(ConfigChangeExecuteTypes)"),(0,r.kt)("p",null,"Nacos\u7684\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u9700\u8981\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9"),"\u4e4b\u524d\u6216\u4e4b\u540e\u8fdb\u884c\u6267\u884c\uff0c\u5373\u9700\u8981\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e\u53d8\u66f4\u7ec7\u5165\u7c7b\u578b(ConfigChangeExecuteTypes)"),"\uff0c\u5b9a\u4e49\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.config.constants.ConfigChangeExecuteTypes"),"\u4e2d\uff0c\u5177\u4f53\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec7\u5165\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8d77\u59cb\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EXECUTE_BEFORE_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5b9e\u73b0\u5728",(0,r.kt)("inlineCode",{parentName:"td"},"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9"),"\u4e4b",(0,r.kt)("strong",{parentName:"td"},"\u524d"),"\u6267\u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EXECUTE_AFTER_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5b9e\u73b0\u5728",(0,r.kt)("inlineCode",{parentName:"td"},"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9"),"\u4e4b",(0,r.kt)("strong",{parentName:"td"},"\u540e"),"\u6267\u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3.0")))),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5f00\u53d1"},"\u63d2\u4ef6\u5f00\u53d1"),(0,r.kt)("p",null,"\u5f00\u53d1Nacos\u670d\u52a1\u7aef\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\uff0c\u9996\u5148\u9700\u8981\u4f9d\u8d56\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u7684\u7684\u76f8\u5173API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-config-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${project.version}")," \u4e3a\u60a8\u5f00\u53d1\u63d2\u4ef6\u6240\u5bf9\u5e94\u7684Nacos\u7248\u672c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"2.3.0"),"\u53ca\u4ee5\u4e0a\u3002"),(0,r.kt)("p",null,"\u968f\u540e\u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.config.spi.ConfigChangePluginService"),"\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u9700\u8981\u5b9e\u73b0\u7684\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5165\u53c2\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u5185\u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getServiceType"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7c7b\u578b\u7684\u63d2\u4ef6\u5b9e\u73b0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getOrder"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff0c\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u91c7\u7528\u94fe\u5f0f\u63d2\u4ef6\u8bbe\u8ba1\uff0c\u591a\u4e2a\u63d2\u4ef6\u5b9e\u73b0\u65f6\u4f1a\u6309\u7167\u987a\u5e8f\u6267\u884c\uff0cgetOrder\u8d8a\u5c0f\uff0c\u987a\u5e8f\u8d8a\u9760\u524d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"executeType"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigChangeExecuteTypes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5b9e\u73b0\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"\u914d\u7f6e\u53d8\u66f4\u7ec7\u5165\u7c7b\u578b"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pointcutMethodNames"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigChangePointCutTypes[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5b9e\u73b0\u7ec7\u5165\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"\u914d\u7f6e\u53d8\u66f4\u5207\u70b9"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"execute"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigChangeRequest,ConfigChangeResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"void"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u63d2\u4ef6\u6267\u884c\u7684\u903b\u8f91")))),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigChangeRequest"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigChangeResponse"),"\u5206\u522b\u4e3a\u6267\u884c\u903b\u8f91\u65f6\u4f20\u5165\u7684\u5185\u5bb9\u53ca\u6267\u884c\u7ed3\u679c\uff0c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConfigChangeRequest"),"\u7684\u5177\u4f53\u5185\u5bb9\u5982\u4e0b:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestType"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigChangePointCutTypes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u914d\u7f6e\u53d8\u66f4\u7684\u5207\u70b9\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requestArgs"),(0,r.kt)("td",{parentName:"tr",align:null},"HashMap<String, Object>"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u914d\u7f6e\u53d8\u66f4\u7684\u5b9e\u9645\u53c2\u6570\uff0c\u4e3b\u8981\u5305\u542b\u6709",(0,r.kt)("inlineCode",{parentName:"td"},"namespace"),",",(0,r.kt)("inlineCode",{parentName:"td"},"group"),",",(0,r.kt)("inlineCode",{parentName:"td"},"dataId"),",",(0,r.kt)("inlineCode",{parentName:"td"},"content"),"\u7b49\u5185\u5bb9\uff0c\u4e0d\u540c\u7684\u5207\u70b9\u7c7b\u578b\u53c2\u6570\u5b58\u5728\u4e0d\u540c")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConfigChangeResponse "),"\u7684\u5177\u4f53\u5185\u5bb9\u5982\u4e0b:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"responseType"),(0,r.kt)("td",{parentName:"tr",align:null},"ConfigChangePointCutTypes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u914d\u7f6e\u53d8\u66f4\u7684\u5207\u70b9\u7c7b\u578b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u662f\u5426\u6210\u529f\uff0c\u5f53\u8fd4\u56de\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\u65f6\uff0c\u5c06\u4f1a\u62e6\u622a\u672c\u6b21\u914d\u7f6e\u53d8\u66f4\uff0c\u5e76\u76f4\u63a5\u8fd4\u56de\u5931\u8d25\u7684\u7ed3\u679c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retVal"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5185\u5bb9\uff0c\u9884\u7559\u5b57\u6bb5\uff0c\u6682\u672a\u542f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"msg"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u7ed3\u679c\u4fe1\u606f\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"td"},"isSuccess"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\u65f6\u83b7\u53d6\uff0c\u7528\u4e8e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"args"),(0,r.kt)("td",{parentName:"tr",align:null},"Object[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u53d8\u66f4\u64cd\u4f5c\u7684\u6267\u884c\u53c2\u6570\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"td"},"EXECUTE_BEFORE_TYPE"),"\u7684\u63d2\u4ef6\u7c7b\u578b\u65f6\u751f\u6548\uff0c\u53ef\u7528\u4e8e\u4fee\u6539\u5b9e\u9645\u6267\u884c\u7684\u914d\u7f6e\u53d8\u66f4\u65f6\u7684\u5185\u5bb9\uff0c\u5982\u5c06content\u4e2d\u7684\u67d0\u4e9b\u5185\u5bb9\u4fee\u6539\u4e3a\u5176\u4ed6\u503c")))),(0,r.kt)("h3",{id:"\u52a0\u8f7d\u63d2\u4ef6"},"\u52a0\u8f7d\u63d2\u4ef6"),(0,r.kt)("p",null,"\u63d2\u4ef6\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u9700\u8981\u6253\u5305\u6210jar/zip\uff0c\u653e\u7f6e\u5230nacos\u670d\u52a1\u7aef\u7684classpath\u4e2d\uff0c\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u4fee\u6539classpath\uff0c\u8bf7\u76f4\u63a5\u653e\u7f6e\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/plugins"),"\u4e0b"),(0,r.kt)("p",null,"\u653e\u7f6e\u540e\uff0c\u9700\u8981\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"\u4e2d\u7684\u4ee5\u4e0b\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### \u6240\u542f\u7528\u7684Nacos\u7684\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u4e0ecom.alibaba.nacos.plugin.config.spi.ConfigChangePluginService \u7684getServiceType \u8fd4\u56de\u503c\u5bf9\u5e94\nnacos.core.config.plugin.${configChangePluginName}.enabled=true\n")),(0,r.kt)("p",null,"\u968f\u540e\u91cd\u542fnacos\u96c6\u7fa4\uff0c\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u53ef\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/logs/nacos.log"),"\u65e5\u5fd7\u4e2d\u770b\u5230\u5982\u4e0b\u65e5\u5fd7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[ConfigChangePluginManager] Load ${className}(${classFullName}) ConfigChangeServiceName(${configChangePluginName}) successfully.\n")),(0,r.kt)("h3",{id:"\u63d2\u4ef6\u81ea\u5b9a\u4e49\u53c2\u6570\u4f20\u9012"},"\u63d2\u4ef6\u81ea\u5b9a\u4e49\u53c2\u6570\u4f20\u9012"),(0,r.kt)("p",null,"\u90e8\u5206\u63d2\u4ef6\u53ef\u80fd\u5e0c\u671b\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u4e00\u4e9b\u53c2\u6570\uff0c\u81ea\u5b9a\u4e49\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"\u4e2d\u7684\u4ee5\u4e0b\u914d\u7f6e\u5b8c\u6210\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### \u6240\u542f\u7528\u7684Nacos\u7684\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u4e0ecom.alibaba.nacos.plugin.config.spi.ConfigChangePluginService \u7684getServiceType \u8fd4\u56de\u503c\u5bf9\u5e94\nnacos.core.config.plugin.${configChangePluginName}.${propertyKey}=${propertyValue}\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u80fd\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigChangeRequest"),"\u4e2d\uff0c\u901a\u8fc7\u4e0b\u8ff0\u65b9\u6cd5\u83b7\u53d6\u8be5\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},'final Properties properties = (Properties) configChangeRequest.getArg(ConfigChangeConstants.PLUGIN_PROPERTIES);\nfinal String ${propertyKey} = properties.getProperty("${propertyKey}");\n')),(0,r.kt)("h2",{id:"\u63d2\u4ef6demo\u5b9e\u73b0"},"\u63d2\u4ef6DEMO\u5b9e\u73b0"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-plugin"},"nacos-group/nacos-plugin"),"\u4e2d\uff0c\u6709\u4e00\u4e2ademo\u7684\u914d\u7f6e\u53d8\u66f4\u63d2\u4ef6\u7684\u5b9e\u73b0\uff0c\u8be5demo\u63d2\u4ef6\u5b9e\u73b0\u4e86\u5bf9\u914d\u7f6e\u5185\u5bb9\u683c\u5f0f\u7684\u6821\u9a8c\u3001\u914d\u7f6e\u5bfc\u5165\u540d\u79f0\u767d\u540d\u5355\u7684\u6821\u9a8c\u3001\u4ee5\u53ca\u53d8\u66f4\u540e\u56de\u8c03webhook\u3002\u6253\u5305\u6210jar/zip\uff0c\u653e\u7f6e\u5230nacos\u670d\u52a1\u7aef\u7684classpath\u4e2d\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"\u4e2d\u7684\u52a0\u5165\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# webhook\n#nacos.core.config.plugin.webhook.enabled=true\n# It is recommended to use EB https://help.aliyun.com/document_detail/413974.html\n#nacos.core.config.plugin.webhook.url=http://${webhookIp}:${webhookPort}/${webhookUri}?token=***\n# The content push max capacity ,byte\n#nacos.core.config.plugin.webhook.contentMaxCapacity=102400\n\n# whitelist\n#nacos.core.config.plugin.whitelist.enabled=true\n# The import file suffixs\n#nacos.core.config.plugin.whitelist.suffixs=xml,text,properties,yaml,html\n\n# fileformatcheck,which validate the import file of type and content\n#nacos.core.config.plugin.fileformatcheck.enabled=true\n")))}d.isMDXComponent=!0}}]);