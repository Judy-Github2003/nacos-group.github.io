"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=o,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u8d21\u732e\u6d41\u7a0b",keywords:["\u8d21\u732e","\u6e90\u7801"],description:"\u6b64\u8d21\u732e\u6d41\u7a0b\u9002\u7528\u4e8e\u6240\u6709\u7684Nacos\u793e\u533a\u5185\u5bb9\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e`Nacos`\u3001`Nacos wiki/doc`\u3001`Nacos SDK`\u3002"},i="Nacos \u8d21\u732e\u6d41\u7a0b",l={unversionedId:"contribution/contributing-flow",id:"version-2.X/contribution/contributing-flow",title:"\u8d21\u732e\u6d41\u7a0b",description:"\u6b64\u8d21\u732e\u6d41\u7a0b\u9002\u7528\u4e8e\u6240\u6709\u7684Nacos\u793e\u533a\u5185\u5bb9\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e`Nacos`\u3001`Nacos wiki/doc`\u3001`Nacos SDK`\u3002",source:"@site/versioned_docs/version-2.X/contribution/contributing-flow.md",sourceDirName:"contribution",slug:"/contribution/contributing-flow",permalink:"/docs/contribution/contributing-flow",draft:!1,tags:[],version:"2.X",frontMatter:{title:"\u8d21\u732e\u6d41\u7a0b",keywords:["\u8d21\u732e","\u6e90\u7801"],description:"\u6b64\u8d21\u732e\u6d41\u7a0b\u9002\u7528\u4e8e\u6240\u6709\u7684Nacos\u793e\u533a\u5185\u5bb9\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e`Nacos`\u3001`Nacos wiki/doc`\u3001`Nacos SDK`\u3002"},sidebar:"docs",previous:{title:"\u5982\u4f55\u8d21\u732e",permalink:"/docs/contribution/contributing"},next:{title:"\u63d0\u4ea4\u9700\u6c42\u6a21\u677f",permalink:"/docs/contribution/pull-request"}},s={},c=[{value:"1. fork Alibaba/Nacos \u9879\u76ee\u5230\u60a8\u7684github\u5e93",id:"1-fork-alibabanacos-\u9879\u76ee\u5230\u60a8\u7684github\u5e93",level:2},{value:"2. \u514b\u9686\u6216\u4e0b\u8f7d\u60a8fork\u7684Nacos\u4ee3\u7801\u4ed3\u5e93\u5230\u60a8\u672c\u5730",id:"2-\u514b\u9686\u6216\u4e0b\u8f7d\u60a8fork\u7684nacos\u4ee3\u7801\u4ed3\u5e93\u5230\u60a8\u672c\u5730",level:2},{value:"3. \u6dfb\u52a0Alibaba/Nacos\u4ed3\u5e93\u4e3aupstream\u4ed3\u5e93",id:"3-\u6dfb\u52a0alibabanacos\u4ed3\u5e93\u4e3aupstream\u4ed3\u5e93",level:2},{value:"4. \u9009\u62e9\u4e00\u4e2a\u5f00\u53d1\u7684\u57fa\u7840\u5206\u652f\uff0c\u901a\u5e38\u662fupstream/develop\uff0c\u5e76\u57fa\u4e8e\u6b64\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f",id:"4-\u9009\u62e9\u4e00\u4e2a\u5f00\u53d1\u7684\u57fa\u7840\u5206\u652f\u901a\u5e38\u662fupstreamdevelop\u5e76\u57fa\u4e8e\u6b64\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f",level:2},{value:"5. \u5728\u672c\u5730\u65b0\u5efa\u7684\u5f00\u53d1\u5206\u652f\u4e0a\u8fdb\u884c\u5404\u79cd\u4fee\u6539",id:"5-\u5728\u672c\u5730\u65b0\u5efa\u7684\u5f00\u53d1\u5206\u652f\u4e0a\u8fdb\u884c\u5404\u79cd\u4fee\u6539",level:2},{value:"6. Rebase \u57fa\u7840\u5206\u652f\u548c\u5f00\u53d1\u5206\u652f",id:"6-rebase-\u57fa\u7840\u5206\u652f\u548c\u5f00\u53d1\u5206\u652f",level:2},{value:"7. \u5c06\u60a8\u5f00\u53d1\u5b8c\u6210rebase\u540e\u7684\u5206\u652f\uff0c\u4e0a\u4f20\u5230\u60a8fork\u7684\u4ed3\u5e93",id:"7-\u5c06\u60a8\u5f00\u53d1\u5b8c\u6210rebase\u540e\u7684\u5206\u652f\u4e0a\u4f20\u5230\u60a8fork\u7684\u4ed3\u5e93",level:2},{value:"8. \u6309\u7167\u62c9\u53d6\u8bf7\u6c42\u6a21\u677f\u4e2d\u7684\u6e05\u5355\u521b\u5efaPull Request",id:"8-\u6309\u7167\u62c9\u53d6\u8bf7\u6c42\u6a21\u677f\u4e2d\u7684\u6e05\u5355\u521b\u5efapull-request",level:2},{value:"9. \u5982\u679c\u6ca1\u6709\u95ee\u9898\uff0cNacos\u793e\u533a\u5c06\u4f1a\u628a\u60a8\u7684\u4fee\u6539\u5408\u5e76\u5230\u57fa\u7840\u5206\u652f\u4e2d\uff0c\u606d\u559c\u60a8\u6210\u4e3aNacos\u7684\u5b98\u65b9\u8d21\u732e\u8005\u3002",id:"9-\u5982\u679c\u6ca1\u6709\u95ee\u9898nacos\u793e\u533a\u5c06\u4f1a\u628a\u60a8\u7684\u4fee\u6539\u5408\u5e76\u5230\u57fa\u7840\u5206\u652f\u4e2d\u606d\u559c\u60a8\u6210\u4e3anacos\u7684\u5b98\u65b9\u8d21\u732e\u8005",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nacos-\u8d21\u732e\u6d41\u7a0b"},"Nacos \u8d21\u732e\u6d41\u7a0b"),(0,o.kt)("p",null,"\u6b64\u8d21\u732e\u6d41\u7a0b\u9002\u7528\u4e8e\u6240\u6709\u7684Nacos\u793e\u533a\u5185\u5bb9\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Nacos wiki/doc"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Nacos SDK"),"\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u4ee5\u8d21\u732e",(0,o.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u4e3a\u4f8b\uff0c\u8be6\u7ec6\u8bf4\u660e\u8d21\u732e\u6d41\u7a0b\u3002"),(0,o.kt)("h2",{id:"1-fork-alibabanacos-\u9879\u76ee\u5230\u60a8\u7684github\u5e93"},"1. fork Alibaba/Nacos \u9879\u76ee\u5230\u60a8\u7684github\u5e93"),(0,o.kt)("h2",{id:"2-\u514b\u9686\u6216\u4e0b\u8f7d\u60a8fork\u7684nacos\u4ee3\u7801\u4ed3\u5e93\u5230\u60a8\u672c\u5730"},"2. \u514b\u9686\u6216\u4e0b\u8f7d\u60a8fork\u7684Nacos\u4ee3\u7801\u4ed3\u5e93\u5230\u60a8\u672c\u5730"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone ${your fork nacos repo address}\n\ncd nacos\n")),(0,o.kt)("h2",{id:"3-\u6dfb\u52a0alibabanacos\u4ed3\u5e93\u4e3aupstream\u4ed3\u5e93"},"3. \u6dfb\u52a0Alibaba/Nacos\u4ed3\u5e93\u4e3aupstream\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git remote add upstream https://github.com/alibaba/nacos.git\n\ngit remote -v \n\n    origin     ${your fork nacos repo address} (fetch)\n    origin     ${your fork nacos repo address} (push)\n    upstream    https://github.com/alibaba/nacos.git (fetch)\n    upstream    https://github.com/alibaba/nacos.git (push)\n    \ngit fetch origin\ngit fetch upstream\n")),(0,o.kt)("h2",{id:"4-\u9009\u62e9\u4e00\u4e2a\u5f00\u53d1\u7684\u57fa\u7840\u5206\u652f\u901a\u5e38\u662fupstreamdevelop\u5e76\u57fa\u4e8e\u6b64\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f"},"4. \u9009\u62e9\u4e00\u4e2a\u5f00\u53d1\u7684\u57fa\u7840\u5206\u652f\uff0c\u901a\u5e38\u662fupstream/develop\uff0c\u5e76\u57fa\u4e8e\u6b64\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(\u4ece\u8fdc\u7a0b\u4ed3\u5e93\u62c9\u53d6\u5206\u652f\u5230\u672c\u5730\uff09\ngit checkout -b upstream-develop upstream/develop\n\n(\u4ece\u672c\u5730\u5206\u652f\u521b\u5efa\u5f00\u53d1\u5206\u652f, \u901a\u5e38\u4ee5\u8be5PR\u5bf9\u5e94\u7684issue\u53f7\u4f5c\u4e3a\u5f00\u53d1\u5206\u652f\u540d\uff09\ngit checkout -b develop-issue#${issue-number}\n\n")),(0,o.kt)("h2",{id:"5-\u5728\u672c\u5730\u65b0\u5efa\u7684\u5f00\u53d1\u5206\u652f\u4e0a\u8fdb\u884c\u5404\u79cd\u4fee\u6539"},"5. \u5728\u672c\u5730\u65b0\u5efa\u7684\u5f00\u53d1\u5206\u652f\u4e0a\u8fdb\u884c\u5404\u79cd\u4fee\u6539"),(0,o.kt)("p",null,"\u9996\u5148\u8bf7\u4fdd\u8bc1\u60a8\u9605\u8bfb\u5e76\u6b63\u786e\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"Nacos code style"),", \u76f8\u5173\u5185\u5bb9\u8bf7\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/develop/style/codeStyle.md"},"Nacos \u4ee3\u7801\u89c4\u7ea6")," \u3002"),(0,o.kt)("p",null,"\u4fee\u6539\u65f6\u8bf7\u4fdd\u8bc1\u8be5\u5206\u652f\u4e0a\u7684\u4fee\u6539",(0,o.kt)("strong",{parentName:"p"},"\u4ec5\u548cissue\u76f8\u5173"),"\uff0c\u5e76\u5c3d\u91cf\u7ec6\u5316\uff0c\u505a\u5230",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u5206\u652f\u53ea\u4fee\u6539\u4e00\u4ef6\u4e8b\uff0c\u4e00\u4e2aPR\u53ea\u4fee\u6539\u4e00\u4ef6\u4e8b"),"\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\uff0c\u60a8\u7684\u63d0\u4ea4\u8bb0\u5f55\u8bf7\u5c3d\u91cf\u4f7f\u7528\u82f1\u6587\u63cf\u8ff0\uff0c\u4e3b\u8981\u4ee5",(0,o.kt)("strong",{parentName:"p"},"\u8c13 + \u5bbe"),"\u8fdb\u884c\u63cf\u8ff0\uff0c\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Fix xxx problem/bug"),"\u3002\u5c11\u91cf\u7b80\u5355\u7684\u63d0\u4ea4\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"For xxx"),"\u6765\u63cf\u8ff0\uff0c\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"For codestyle"),"\u3002 \u5982\u679c\u8be5\u63d0\u4ea4\u548c\u67d0\u4e2aISSUE\u76f8\u5173\uff0c\u53ef\u4ee5\u6dfb\u52a0ISSUE\u53f7\u4f5c\u4e3a\u524d\u7f00\uff0c\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"For #10000, Fix xxx problem/bug"),"\u3002"),(0,o.kt)("h2",{id:"6-rebase-\u57fa\u7840\u5206\u652f\u548c\u5f00\u53d1\u5206\u652f"},"6. Rebase \u57fa\u7840\u5206\u652f\u548c\u5f00\u53d1\u5206\u652f"),(0,o.kt)("p",null,"\u60a8\u4fee\u6539\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u522b\u4eba\u7684\u4fee\u6539\u5df2\u7ecf\u63d0\u4ea4\u5e76\u88ab\u5408\u5e76\uff0c\u6b64\u65f6\u53ef\u80fd\u4f1a\u6709\u51b2\u7a81\uff0c\u8fd9\u91cc\u8bf7\u4f7f\u7528rebase\u547d\u4ee4\u8fdb\u884c\u5408\u5e76\u89e3\u51b3\uff0c\u4e3b\u8981\u67092\u4e2a\u597d\u5904\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u60a8\u7684\u63d0\u4ea4\u8bb0\u5f55\u5c06\u4f1a\u975e\u5e38\u4f18\u96c5\uff0c\u4e0d\u4f1a\u51fa\u73b0",(0,o.kt)("inlineCode",{parentName:"li"},"Merge xxxx branch")," \u7b49\u5b57\u6837"),(0,o.kt)("li",{parentName:"ol"},"rebase\u540e\u60a8\u5206\u652f\u7684\u63d0\u4ea4\u65e5\u5fd7\u4e5f\u662f\u4e00\u6761\u5355\u94fe\uff0c\u57fa\u672c\u4e0d\u4f1a\u51fa\u73b0\u5404\u79cd\u5206\u652f\u4ea4\u9519\u7684\u60c5\u51b5\uff0c\u56de\u67e5\u65f6\u66f4\u8f7b\u677e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git fetch upstream\n\ngit rebase -i upstream/develop\n\n")),(0,o.kt)("p",null,"OR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git checkout upstream-develop\ngit pull \ngit checkout develop-issue#${issue-number}\ngit rebase -i upstream-develop\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fIntellij IDEA"),"\uff0c\u5efa\u8bae\u4f7f\u7528IDE\u7684\u7248\u672c\u7ba1\u7406\u6a21\u5757\uff0c\u6709\u53ef\u89c6\u5316\u754c\u9762\uff0c\u66f4\u65b9\u4fbf\u89e3\u51b3\u51b2\u7a81\u548csquash\u64cd\u4f5c"),(0,o.kt)("h2",{id:"7-\u5c06\u60a8\u5f00\u53d1\u5b8c\u6210rebase\u540e\u7684\u5206\u652f\u4e0a\u4f20\u5230\u60a8fork\u7684\u4ed3\u5e93"},"7. \u5c06\u60a8\u5f00\u53d1\u5b8c\u6210rebase\u540e\u7684\u5206\u652f\uff0c\u4e0a\u4f20\u5230\u60a8fork\u7684\u4ed3\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git push origin develop-issue#${issue-number}\n")),(0,o.kt)("h2",{id:"8-\u6309\u7167\u62c9\u53d6\u8bf7\u6c42\u6a21\u677f\u4e2d\u7684\u6e05\u5355\u521b\u5efapull-request"},"8. \u6309\u7167\u62c9\u53d6\u8bf7\u6c42\u6a21\u677f\u4e2d\u7684\u6e05\u5355\u521b\u5efaPull Request"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/contribution/pull-request"},"\u62c9\u53d6\u8bf7\u6c42\u6a21\u677f")),(0,o.kt)("p",null,"Nacos\u793e\u533a\u5c06\u4f1aReview\u60a8\u7684Pull Request\uff0c\u5e76\u53ef\u80fd\u63d0\u51fa\u4fee\u6539\u610f\u89c1\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u4fee\u6539\u610f\u89c1\u56de\u5230\u6b65\u9aa45\u8fdb\u884c\u4fee\u6539\uff0c\u5e76\u4f7f\u7528\u6b65\u9aa46\u8fdb\u884c\u91cd\u65b0\u63d0\u4ea4\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u60a8\u518d\u6b21\u63d0\u4ea4\u65f6\u63d0\u793a\u60a8\u5b58\u5728\u63d0\u4ea4\u8bb0\u5f55\u51b2\u7a81\uff0c\u8fd9\u662f\u56e0\u4e3a\u60a8\u4fee\u6539\u671f\u95f4\uff0c\u6709\u5176\u4ed6\u7684\u4fee\u6539\u5408\u5e76\u5230\u4e86\u57fa\u7840\u5206\u652f\uff0c\u60a8rebase\u540e\uff0ccommit ID\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u6b64\u65f6\u9700\u8981force push \u5230\u60a8\u7684fork\u5206\u652f\u4e0a\u5373\u53ef")),(0,o.kt)("h2",{id:"9-\u5982\u679c\u6ca1\u6709\u95ee\u9898nacos\u793e\u533a\u5c06\u4f1a\u628a\u60a8\u7684\u4fee\u6539\u5408\u5e76\u5230\u57fa\u7840\u5206\u652f\u4e2d\u606d\u559c\u60a8\u6210\u4e3anacos\u7684\u5b98\u65b9\u8d21\u732e\u8005"},"9. \u5982\u679c\u6ca1\u6709\u95ee\u9898\uff0cNacos\u793e\u533a\u5c06\u4f1a\u628a\u60a8\u7684\u4fee\u6539\u5408\u5e76\u5230\u57fa\u7840\u5206\u652f\u4e2d\uff0c\u606d\u559c\u60a8\u6210\u4e3aNacos\u7684\u5b98\u65b9\u8d21\u732e\u8005\u3002"))}d.isMDXComponent=!0}}]);