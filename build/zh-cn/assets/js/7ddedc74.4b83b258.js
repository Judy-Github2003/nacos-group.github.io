"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,g=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Nacos 2.1.2\u30012.2.0-BETA\u53cago-sdk 2.1.1 \u7248\u672c\u540c\u65f6\u53d1\u5e03\uff0c\u591a\u8bed\u8a00\u751f\u6001\u518d\u6dfb\u5927\u5c06",keywords:["2.1.2","2.2.0-BETA","go-sdk","rust-sdk"],description:"Nacos 2.1.2\u30012.2.0-BETA\u53cago-sdk 2.1.1 \u7248\u672c\u540c\u65f6\u53d1\u5e03\uff0c\u591a\u8bed\u8a00\u751f\u6001\u518d\u6dfb\u5927\u5c06\u3002",date:new Date("2022-10-28T00:00:00.000Z")},i="Nacos 2.1.2\u30012.2.0-BETA\u53cago-sdk 2.1.1 \u7248\u672c\u540c\u65f6\u53d1\u5e03\uff0c\u591a\u8bed\u8a00\u751f\u6001\u518d\u6dfb\u5927\u5c06",s={permalink:"/zh-cn/blog/212-and-220beta-release",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/212-and-220beta-release.md",title:"Nacos 2.1.2\u30012.2.0-BETA\u53cago-sdk 2.1.1 \u7248\u672c\u540c\u65f6\u53d1\u5e03\uff0c\u591a\u8bed\u8a00\u751f\u6001\u518d\u6dfb\u5927\u5c06",description:"Nacos 2.1.2\u30012.2.0-BETA\u53cago-sdk 2.1.1 \u7248\u672c\u540c\u65f6\u53d1\u5e03\uff0c\u591a\u8bed\u8a00\u751f\u6001\u518d\u6dfb\u5927\u5c06\u3002",date:"2022-10-28T00:00:00.000Z",formattedDate:"2022\u5e7410\u670828\u65e5",tags:[],readingTime:9.58,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Nacos 2.1.2\u30012.2.0-BETA\u53cago-sdk 2.1.1 \u7248\u672c\u540c\u65f6\u53d1\u5e03\uff0c\u591a\u8bed\u8a00\u751f\u6001\u518d\u6dfb\u5927\u5c06",keywords:["2.1.2","2.2.0-BETA","go-sdk","rust-sdk"],description:"Nacos 2.1.2\u30012.2.0-BETA\u53cago-sdk 2.1.1 \u7248\u672c\u540c\u65f6\u53d1\u5e03\uff0c\u591a\u8bed\u8a00\u751f\u6001\u518d\u6dfb\u5927\u5c06\u3002",date:"2022-10-28T00:00:00.000Z"},prevItem:{title:"Nacos 2.2.0 \u7248\u672c\u53d1\u5e03\uff0c\u65b0\u589e\u591a\u79cd\u63d2\u4ef6\u652f\u6301",permalink:"/zh-cn/blog/2.2.0-release"},nextItem:{title:"Nacos \u56db\u5468\u5e74\uff0c2.1.1 \u53ca 1.4.4 \u7248\u672c\u540c\u65f6\u53d1\u5e03",permalink:"/zh-cn/blog/2.1.1-release"}},c={authorsImageUrls:[]},l=[{value:"Nacos 2.1.2",id:"nacos-212",level:2},{value:"2.2.0-BETA",id:"220-beta",level:2},{value:"\u591a\u8bed\u8a00SDK",id:"\u591a\u8bed\u8a00sdk",level:2},{value:"Go",id:"go",level:3},{value:"Rust",id:"rust",level:3},{value:"PHP",id:"php",level:3},{value:"\u793e\u533a",id:"\u793e\u533a",level:2},{value:"\u7f16\u7a0b\u4e4b\u590f&amp;&amp;\u5f00\u6e90\u4e4b\u590f",id:"\u7f16\u7a0b\u4e4b\u590f\u5f00\u6e90\u4e4b\u590f",level:3},{value:"Committer",id:"committer",level:3},{value:"About Nacos",id:"about-nacos",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8ddd\u79bb2.1.1\u7248\u672c\u53d1\u5e032\u4e2a\u6708\u540e\uff0cNacos\u793e\u533a\u53c8\u8fce\u6765\u4e00\u6ce2\u5927\u66f4\u65b0\u3002\u672c\u6b21\u53d1\u5e03\u5305\u542b\u4e862\u4e2aserver\u7248\u672c\uff0c1\u4e2ago-sdk\u7248\u672c\u4ee5\u53ca\u65b0\u8bed\u8a00sdk\u7684\u9884\u544a\u3002"),(0,r.kt)("h2",{id:"nacos-212"},"Nacos 2.1.2"),(0,r.kt)("p",null,"2.1.2 \u4e3b\u8981\u589e\u5f3a\u4e86\u63a7\u5236\u53f0\u7684UI\u6548\u679c\uff0c\u53d8\u66f4\u4e86\u63a7\u5236\u53f0\u7684\u6837\u5f0f\uff0c\u4f7f\u5f97\u5185\u5bb9\u66f4\u52a0\u7d27\u51d1\u7f8e\u89c2\uff1b"),(0,r.kt)("p",null,"\u53e6\u59162.1.2\u5bf9\u5ba2\u6237\u7aef\u5927\u5c0f\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u5927\u5e45\u964d\u4f4e\u4e86\u5ba2\u6237\u7aef\u7684jar\u5305\u5927\u5c0f\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b\u4e86\u7eaf\u51c0\u7248java-client\uff0c\u65b9\u4fbf\u6ca1\u6709\u4f9d\u8d56gRPC\u6216\u5e0c\u671b\u4f7f\u7528\u975eshaded\u7248\u672c\u5ba2\u6237\u7aef\u7528\u6237\u4f7f\u7528\uff0c\u53ef\u4ee5\u5230",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/v2/guide/user/sdk"},"Java SDK"),"\u4e2d\u67e5\u770b\u7eaf\u51c0\u7248\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u6700\u540e2.1.2\u4fee\u590d\u4e86\u8bb8\u591a\u65e7\u7248\u672c\u7684\u95ee\u9898\uff0c\u63d0\u9ad8\u4e86\u7a33\u5b9a\u6027\u3002\u5177\u4f53\u53d8\u66f4\u5185\u5bb9\u53ef\u53c2\u8003\u53d8\u66f4\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"## Enhancement\n[#6112] Unified derby-data variables.\n[#7929] Reduce nacos-client jar size by minijar.\n[#8941] Support Fuzzy Query in Authority Control--for api change.\n[#8956] Internationalize product description content in nacos console.\n[#8976] Create new namespace with duplicate namespace show name.\n[#9091] build pure nacos-client when release.\n[#9210] Naming Distro sync support revision.\n\n## Refactor&dependency\n[#8611] Close old datasource connection.\n[#8650] Make cluster/report both receive and send metadata.\n[#9013] refactor rpcClient and grpcClient to support set configuration.\n[#9014] refactor TpsMonitorPoint.\n[#9177] Upgrade org.yaml.snakeyaml version from 1.30 to 1.32\n[#9325] Add switch for naming async query.\n\n## BugFix\n[#8882] Fix nacos-client 2.1.0 start error when using endpoint configuration.\n[#8910] Fix calculate instance count error when using batch register.\n[#8925] Fix the value of hasQueryString is always false.\n[#8928] Fix the replaceAll operation is invalid for server list.\n[#8931] Fix BatchInstanceData can't serialize problem.\n[#8934] Fix header lost when request retrying.\n[#8947] Fix the authentication/encryption plugin are not loaded on the nacos server.\n[#9023] Fix corner case config dataId 'cipher-' can't be create.\n[#9047] Fix ServerListMgr is not shutdown in nacos-client.\n[#9060] Fix print logs for NamingTraceEvent continuously.\n[#9062] Fix unsubscribe service failed problem.\n[#9101] Fix the ConnectionTimeout property in the datasource connection is overwritten problem.\n[#9227] Fix instance change event subscribe failed in 2.1.1 when no setting scope.\n[#9230] Fix error event order for snapshot loading.\n[#9269] Fix RpcClient parse ipv6 address error problem.\n[#9271][#6876] Fix 'JraftServer' NPE after server exceptionally shutdown.\n[#9277] Fix ClientServiceIndex not clean when service removed.\n[#9305] Fix build resource with error dataId.\n[#9311] Fix cache not removed when listener adding delay.\n[#9323] Fix service checking problem in 1.x http openAPI.\n")),(0,r.kt)("h2",{id:"220-beta"},"2.2.0-BETA"),(0,r.kt)("p",null,"2.2.0\u7248\u672c\u662f2.X\u4e2d\u4e00\u4e2a\u8f83\u4e3a\u91cd\u8981\u7684\u7248\u672c\uff0c\u5b83\u5305\u542b\u4e86\u4e00\u4e9b\u8f83\u4e3a\u91cd\u5927\u7684\u6539\u52a8\uff1a"),(0,r.kt)("p",null,"\u9996\u5148\uff0c2.2.0\u5c06\u4f1a\u5220\u9664\u65e7\u7684\u5197\u4f59\u4ee3\u7801\uff0c\u53731.X\u6a21\u5f0f\u670d\u52a1\u53d1\u73b0\u548c\u53cc\u5199\u76f8\u5173\u4ee3\u7801\u3002\u5220\u9664\u540e\uff0c2.2.0\u7248\u672c\u5c06\u65e0\u6cd5\u4eceNacos 1.X\u670d\u52a1\u5668\u5347\u7ea7\uff0c\u53ea\u80fd\u4ece\u81f3\u5c112.0.0\u7248\u672c\u5347\u7ea7\u3002\u6b64\u66f4\u6539\u4e0d\u4f1a\u5f71\u54cd\u5bf91.X\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u9002\u914d\uff0c\u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u4f7f\u75281.X\u5ba2\u6237\u7aef\u94fe\u63a52.2.0\u7248\u672c\u670d\u52a1\u7aef\u3002"),(0,r.kt)("p",null,"\u5176\u6b21\uff0c2.2.0\u5c06\u4f1a\u5408\u5e76\u90e8\u5206\u963f\u91cc\u5df4\u5df4\u7f16\u7a0b\u4e4b\u590f2022\u548c\u5f00\u6e90\u4e4b\u590f2022\u7684\u8bfe\u9898\u7ed3\u679c\uff0c\u4f8b\u5982",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/v2/guide/user/open-api"},"V2\u7248\u672c\u7684 openAPI")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/v2/plugin/datasource-plugin"},"\u6570\u636e\u6e90\u63d2\u4ef6"),"\u3002\u5176\u4ed6\u8bfe\u9898\u4e5f\u5c06\u5728\u672a\u6765\u7248\u672c\u4e2d\u53d1\u5e03\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0c2.2.0\u589e\u5f3a\u4e86\u57282.1.1\u7248\u672c\u88ab\u5217\u4e3abeta\u529f\u80fd\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u6279\u91cf\u6ce8\u518c"),"\uff0c\u8fd9\u4f7f\u5b83\u4eec\u66f4\u6613\u4e8e\u4f7f\u7528\u3002\u5173\u4e8e\u5982\u4f55\u5f00\u53d1\u548c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"\u8f68\u8ff9\u8ffd\u8e2a\u63d2\u4ef6"),"\uff0c\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/v2/plugin/trace-plugin"},"\u63d2\u4ef6\u6587\u6863"),"\u8fdb\u884c\u5f00\u53d1\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u7248\u672c\u4e2d\u6709\u8bb8\u591a\u91cd\u8981\u7684\u53d8\u5316\uff0c\u6240\u4ee5\u793e\u533a\u8ba1\u5212\u505a\u4e00\u4e2a\u9884\u53d1\u5e03\u7684BETA\u7248\u672c\u3002\u6839\u636eBETA\u6d4b\u8bd5\u7684\u7ed3\u679c\uff0c\u4e0b\u4e00\u4e2a\u7248\u672c\u8ba1\u5212\u662fBETA2\u6216GA\u7248\u672c\uff0c\u6b22\u8fce\u5e7f\u5927\u7528\u6237\u79ef\u6781",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/releases/tag/2.2.0-BETA"},"\u4e0b\u8f7d"),"\u8bd5\u7528\u6d4b\u8bd5\uff0c\u5e2e\u52a9\u793e\u533a\u5c3d\u65e9\u53d1\u73b0\u95ee\u9898\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a2.2.0-BETA\u662f\u4e00\u4e2a\u9884\u53d1\u5e03\u7684beta\u7248\u672c\uff0c\u53ef\u80fd\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff0c\u8bf7\u5c3d\u91cf\u907f\u514d\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"2.2.0-BETA\u7248\u672c\u5177\u4f53\u53d8\u66f4\u5185\u5bb9\u53ef\u53c2\u8003\u53d8\u66f4\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"## feature\n[#5863][#9331] Support batch register and batch deregister service.\n[#8308] Add v2 openAPI for nacos 2.0.\n[#8312] Support datasource plugins.\n[#8481] Support track tracing plugins.\n[#9366] Support Ldaps authentication.\n\n## Enhancement\n[#7930] Reomve old redundant codes about 1.x naming.\n\n## BugFix\n[#9334] Fix group_id data length different in many tables.\n[#9341] Fix can not create bean ldapAuthenticationProvider.\n[#9351] Fix instance count error in prometheus metrics.\n\n")),(0,r.kt)("h2",{id:"\u591a\u8bed\u8a00sdk"},"\u591a\u8bed\u8a00SDK"),(0,r.kt)("h3",{id:"go"},"Go"),(0,r.kt)("p",null,"Nacos ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-go/releases/tag/v2.1.1"},"Go SDK v2.1.1")," \u7248\u672c\u4e5f\u5728\u8fd1\u671f\u53d1\u5e03\u4e86\u6b63\u5f0f\u7248\u672c\uff0c\u5728v2.1.0\u5e26\u6765\u5927\u91cf\u65b0\u7279\u6027\u548c\u6539\u8fdb\u7684\u57fa\u7840\u4e0a\uff0c\u8fdb\u4e00\u6b65\u52a0\u5f3a\u4e86\u4f7f\u7528\u7684\u7a33\u5b9a\u6027\uff0c\u6b22\u8fce\u5927\u5bb6\u5347\u7ea7\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"rust"},"Rust"),(0,r.kt)("p",null,"Rust\u8bed\u8a00\u662f\u6700\u8fd1\u975e\u5e38\u5982\u706b\u5982\u837c\u7684\u65b0\u7f16\u7a0b\u8bed\u8a00\u751f\u6001\uff0cNacos\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u7b2c\u4e00\u65f6\u95f4\u52a0\u5165\u4e86\u5bf9rust\u751f\u6001\u7684\u5efa\u8bbe\uff0c\u76ee\u524d",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-rust"},"nacos-rust-sdk"),"\u5df2\u5b8c\u6210\u57fa\u7840\u7684\u529f\u80fd\u5efa\u8bbe\u5de5\u4f5c\uff0c\u540c\u65f6\u5b9e\u73b0\u4e86\u914d\u7f6e\u4e2d\u5fc3\u7684\u6838\u5fc3\u529f\u80fd\uff0c\u5df2\u53d1\u5e03v0.1.1\u7248\u672c\u4f9b\u793e\u533a\u8bd5\u7528\u3002"),(0,r.kt)("p",null,"\u968f\u7740\u793e\u533a\u5c0f\u4f19\u4f34\u7684\u9010\u6e10\u5b8c\u5584\u548c\u66f4\u591a\u613f\u610f\u8d21\u732e\u7684\u8d21\u732e\u8005\u52a0\u5165\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-rust"},"nacos-rust-sdk"),"\u5f88\u5feb\u4e5f\u80fd\u591f\u652f\u6301\u6ce8\u518c\u4e2d\u5fc3\u7684\u529f\u80fd\uff0c\u53d1\u5e031.0\u7684\u6b63\u5f0f\u7248\u672c\uff0c\u8fd9\u91cc\u4e5f\u6b22\u8fce\u66f4\u591a\u5bf9rust\u6709\u5174\u8da3\uff0c\u5e0c\u671b\u627e\u4e2a\u9879\u76ee\u7ec3\u624b\u7684\u5c0f\u4f19\u4f34\u52a0\u5165\u4e00\u8d77\u5efa\u8bbenacos-rust-sdk\u3002"),(0,r.kt)("h3",{id:"php"},"PHP"),(0,r.kt)("p",null,"PHP\u8bed\u8a00\u4f5c\u4e3a\u8001\u724c\u670d\u52a1\u7aef\u7f16\u7a0b\u8bed\u8a00\uff0c\u4ee5\u5f80\u6709\u4e0d\u5c11\u7528\u6237\u8be2\u95ee\u5173\u4e8ePHP\u5ba2\u6237\u7aef\u7684\u95ee\u9898\uff1b\u867d\u7136\u793e\u533a\u4e2d\u6709\u5f88\u591a\u6839\u636eopenAPI\u81ea\u884c\u5f00\u53d1\u7684PHP\u5ba2\u6237\u7aef\uff0c\u4f46\u4e00\u76f4\u6ca1\u6709\u529f\u80fd\u8f83\u5168\u7684\u7248\u672c\u548c\u613f\u610f\u6301\u7eed\u7ef4\u62a4\u6350\u732e\u7684PHP\u5ba2\u6237\u7aef\u5b9e\u73b0\uff0c\u5bfc\u81f4\u793e\u533a\u4e2d\u4e00\u76f4\u6ca1\u6709\u5c5e\u4e8enacos-group\u7684PHP\u5ba2\u6237\u7aef\u3002"),(0,r.kt)("p",null,"\u4eca\u5e74\u7531",(0,r.kt)("a",{parentName:"p",href:"https://github.com/huangwh2014"},"huangwh2014"),"\u8d21\u732e\u5230\u793e\u533a\u7684PHP\u5ba2\u6237\u7aef\u7ec8\u4e8e\u80fd\u591f\u8ba9PHP\u7684\u9879\u76ee\u80fd\u591f\u63a5\u5165Nacos\uff0c\u4eab\u53d7Nacos\u6240\u5e26\u6765\u7684\u5404\u79cd\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u8be5\u7248\u672c\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-sdk-php"},"PHP\u5ba2\u6237\u7aef"),"\u4ecd\u7136\u662f\u57fa\u4e8eopenAPI\u8fdb\u884c\u5f00\u53d1\u7684\uff0c\u56e0\u6b64\u4e0d\u5177\u5907gRPC\u7684\u80fd\u529b\uff0c\u5e0c\u671b\u793e\u533a\u7684\u5404\u4f4d\u5c0f\u4f19\u4f34\u79ef\u6781\u53c2\u4e0e\u9879\u76ee\uff0c\u65e9\u65e5\u8ba9PHP\u5ba2\u6237\u7aef\u8fdb\u51652.X\u7684\u65f6\u4ee3\u3002"),(0,r.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,r.kt)("h3",{id:"\u7f16\u7a0b\u4e4b\u590f\u5f00\u6e90\u4e4b\u590f"},"\u7f16\u7a0b\u4e4b\u590f&&\u5f00\u6e90\u4e4b\u590f"),(0,r.kt)("p",null,"\u7ecf\u5386\u4e866\u6708-9\u6708\u7684\u590f\u65e5\uff0cNacos\u7684\u7f16\u7a0b\u4e4b\u590f\u548c\u5f00\u6e90\u4e4b\u590f\u6d3b\u52a8\u4e5f\u5706\u6ee1\u7ed3\u675f\u3002\u53c2\u4e0e\u8bfe\u9898\u76849\u4f4d\u540c\u5b66\u4e5f\u5b8c\u6210\u4e86\u4ed6\u4eec\u7684\u5f00\u6e90\u793e\u533a\u4f53\u9a8c\u3002\n\u5728\u6b64\u671f\u95f4\uff0c\u6709\u4e9b\u540c\u5b66\u5b8c\u6210\u4e86Nacos\u65b0openAPI\uff0c\u65b0\u63d2\u4ef6\u7684\u5f00\u53d1\uff1b\u6709\u4e9b\u540c\u5b66\u5b8c\u6210\u4e86Nacos\u5bf9K8S\uff0cMesh\u5316\u7684\u63a2\u7d22\uff1b\u4e5f\u6709\u4e9b\u540c\u5b66\u6df1\u8015\u4e8eNacos\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u7684\u534f\u5546\u673a\u5236\u3002\n\u6839\u636e\u5f53\u524d\u529f\u80fd\u7684\u5b8c\u6210\u7a0b\u5ea6\u548cNacos\u793e\u533a\u7684\u7248\u672c\u7684\u89c4\u5212\uff0c\u8fd9\u4e9b\u91cd\u8981\u7684\u6539\u52a8\u4f1a\u5728\u540e\u7eed\u7248\u672c\u4e2d\u9010\u6e10\u4e0e\u5927\u5bb6\u89c1\u9762\u3002\u5728\u8fd9\u91cc\u611f\u8c22\u53c2\u52a0\u7f16\u7a0b\u4e4b\u590f\u4e0e\u5f00\u6e90\u4e4b\u590f\u7684\u540c\u5b66\u548c\u5bfc\u5e08\u4eec\u7684\u70ed\u60c5\u4ed8\u51fa\uff0c\u540c\u65f6\u4e5f\u611f\u8c22\u963f\u91cc\u5df4\u5df4\u548c\u4e2d\u79d1\u9662\u4e3e\u529e\u7684\u4f18\u79c0\u7684\u5f00\u6e90\u6d3b\u52a8\u3002\u671f\u5f85\u660e\u5e74\u518d\u89c1\u3002"),(0,r.kt)("h3",{id:"committer"},"Committer"),(0,r.kt)("p",null,"Nacos\u793e\u533a\u65b0\u664b\u7ea7\u4e86\u4e24\u4f4dCommitter\u540c\u5b66\u3002 "),(0,r.kt)("p",null,"\u81ea\u7531\u5f00\u53d1\u8005",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onewe"},"onewe"),"\u540c\u5b66\u4e3b\u8981\u4f18\u5316\u7edf\u4e00\u4e86Nacos\u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u53c2\u6570\u7684\u52a0\u8f7d\u903b\u8f91\uff0c\u540c\u65f6\u4f18\u5316\u4e86LDAP\u9274\u6743\u63d2\u4ef6\u548c\u5927\u91cf\u63a7\u5236\u53f0\u4f7f\u7528\u5185\u5bb9\uff0c\u627e\u5230\u5e76\u4fee\u590d\u4e86\u4e0d\u5c11Nacos\u7684\u95ee\u9898\u3002\u7ecf\u793e\u533aPMC\u53caCommitter\u7684\u6295\u7968\u8868\u51b3\uff0c\u63d0\u540d\u4e3aNacos\u793e\u533a\u7684Committer\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"onewe_front.jpg",src:n(61913).Z,width:"567",height:"854"})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"Onewe_bak.jpg",src:n(27320).Z,width:"567",height:"802"}))))),(0,r.kt)("p",null,"\u53e6\u5916\u6765\u81ea\u5c0f\u7c73\u79d1\u6280\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/chenhao26-nineteen"},"chenhao26-nineteen"),"\u540c\u5b66\u4e3b\u8981\u5b8c\u6210\u4e86Nacos\u6279\u91cf\u6ce8\u518c\u7684\u65b0\u529f\u80fd\uff0c\u5e76\u4e14\u4f7f\u7528\u8be5\u65b0\u529f\u80fd\u4f18\u5316\u4e86Nacos-Sync\u7684\u540c\u6b65\u903b\u8f91\uff0c\u6781\u5927\u63d0\u5347\u4e86Nacos-Sync\u7684\u6027\u80fd\uff0c\u540c\u65f6\u4e5f\u4fee\u590d\u4e86\u4e0d\u5c11Nacos\u7684\u95ee\u9898\u3002\u7ecf\u793e\u533aPMC\u53caCommitter\u7684\u6295\u7968\u8868\u51b3\uff0c\u63d0\u540d\u4e3aNacos\u793e\u533a\u7684Committer\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"chenhao26-nineteen_front.jpg",src:n(95226).Z,width:"567",height:"854"})),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"chenhao26-nineteen_bak.jpg",src:n(29923).Z,width:"567",height:"802"}))))),(0,r.kt)("p",null,"\u671f\u671b\u66f4\u591a\u5c0f\u4f19\u4f34\u4e00\u8d77\u53c2\u4e0e\u8d21\u732e\uff5e\uff5e"),(0,r.kt)("h2",{id:"about-nacos"},"About Nacos"),(0,r.kt)("p",null,"Nacos \u81f4\u529b\u4e8e\u5e2e\u52a9\u60a8\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u3002Nacos \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\u96c6\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u5b9e\u73b0\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5143\u6570\u636e\u53ca\u6d41\u91cf\u7ba1\u7406\u3002"),(0,r.kt)("p",null,"Nacos \u5e2e\u52a9\u60a8\u66f4\u654f\u6377\u548c\u5bb9\u6613\u5730\u6784\u5efa\u3001\u4ea4\u4ed8\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u5e73\u53f0\u3002 Nacos \u662f\u6784\u5efa\u4ee5\u201c\u670d\u52a1\u201d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784 (\u4f8b\u5982\u5fae\u670d\u52a1\u8303\u5f0f\u3001\u4e91\u539f\u751f\u8303\u5f0f) \u7684\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\u3002"),(0,r.kt)("p",null,"Nacos\u793e\u533a\u540c\u65f6\u4e5f\u5f00\u542f\u4e86\u5173\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/8UwwD_WxSJINP8Qr_1wogg"},"Nacos3.0"),"\u7684\u7545\u60f3\u548c\u89c4\u5212\uff0c\u6b22\u8fce\u793e\u533a\u79ef\u6781\u53c2\u4e0e\u5230\u65b0\u7248\u672c\u7684\u5efa\u8bbe\u4e2d\u3002\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/1577777/1660125280551-a2e881fe-d25e-4ebb-a28f-8e56683deef1.png#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=url&id=Z9to1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=794&originWidth=1650&originalType=binary&ratio=1&rotation=0&showTitle=false&size=185821&status=done&style=none&taskId=u63849e10-1dae-45cb-b559-04d106ebe86&title=",alt:"image.png"})),(0,r.kt)("p",null,"\u6700\u540e\u6b22\u8fce\u5927\u5bb6\u626b\u7801\u52a0\u5165Nacos\u793e\u533a\u7fa4\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/1577777/1660125280778-c1822fb0-958b-4730-a6dc-0e92ba22f3f8.png#clientId=uf10cb19a-105c-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=374&id=u2619495f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=923&originWidth=765&originalType=binary&ratio=1&rotation=0&showTitle=false&size=338166&status=done&style=none&taskId=u0690e9a0-6d58-4f72-82b1-7d4457a900e&title=&width=310",alt:"image.png"})))}d.isMDXComponent=!0},27320:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Onewe_bak-fbdadd10346ffc24f4c60d4df44a355d.jpg"},61913:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Onewe_front-73e1ceb81bff37ddb1963093dc3c1b88.jpg"},29923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chenhao26-nineteen_bak-be4e2765bdbbcfd3c21f6b387a54ea64.jpg"},95226:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chenhao26-nineteen_front-91468e978feae7d72900ae3ecd26c79e.jpg"}}]);