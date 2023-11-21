"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8646],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,o=function(a,e){if(null==a)return{};var t,n,o={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(o[t]=a[t]);return o}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(o[t]=a[t])}return o}var i=n.createContext({}),c=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},p=function(a){var e=c(a.components);return n.createElement(i.Provider,{value:e},a.children)},u="mdxType",N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,o=a.mdxType,r=a.originalType,i=a.parentName,p=s(a,["components","mdxType","originalType","parentName"]),u=c(t),k=o,d=u["".concat(i,".").concat(k)]||u[k]||N[k]||r;return t?n.createElement(d,l(l({ref:e},p),{},{components:t})):n.createElement(d,l({ref:e},p))}));function d(a,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var r=t.length,l=new Array(r);l[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=a,s[u]="string"==typeof a?a:o,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1323:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>N,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const r={title:"FAQ",keywords:["Nacos","FAQ"],description:"Nacos FAQ"},l="FAQ",s={unversionedId:"faq",id:"version-1.X/faq",title:"FAQ",description:"Nacos FAQ",source:"@site/versioned_docs/version-1.X/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/1.X/faq",draft:!1,tags:[],version:"1.X",frontMatter:{title:"FAQ",keywords:["Nacos","FAQ"],description:"Nacos FAQ"},sidebar:"docs",previous:{title:"Authorization",permalink:"/docs/1.X/auth"},next:{title:"Nacos\u652f\u6301\u4e09\u79cd\u90e8\u7f72\u6a21\u5f0f",permalink:"/docs/1.X/deployment"}},i={},c=[{value:"Nacos\u5e38\u89c4\u95ee\u9898",id:"nacos\u5e38\u89c4\u95ee\u9898",level:2},{value:"Nacos\u8fd0\u7ef4\u95ee\u9898",id:"nacos\u8fd0\u7ef4\u95ee\u9898",level:2},{value:"Nacos\u4f7f\u7528\u95ee\u9898",id:"nacos\u4f7f\u7528\u95ee\u9898",level:2},{value:"Spring Cloud Alibaba",id:"spring-cloud-alibaba",level:5},{value:"Dubbo",id:"dubbo",level:5},{value:"Nacos\u539f\u7406\u95ee\u9898",id:"nacos\u539f\u7406\u95ee\u9898",level:2}],p={toc:c},u="wrapper";function N(a){let{components:e,...r}=a;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nacos\u5e38\u89c4\u95ee\u9898"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.1"},"Nacos\u662f\u4ec0\u4e48")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.2"},"Nacos\u5982\u4f55\u652f\u6301\u591a\u73af\u5883")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.3"},"Nacos\u662f\u5426\u751f\u4ea7\u53ef\u7528")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.4"},"Nacos\u7248\u672c\u8ba1\u5212")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.5"},"Nacos\u6709\u4ec0\u4e48\u4f9d\u8d56")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1.6"},"Nacos\u4f7f\u7528\u4ec0\u4e48\u5f00\u6e90\u534f\u8bae")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nacos\u8fd0\u7ef4\u95ee\u9898"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.1"},"Nacos\u5982\u4f55\u5355\u673a\u90e8\u7f72")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.2"},"Nacos\u5355\u673a\u90e8\u7f72\u5982\u4f55\u4f7f\u7528Mysql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.3"},"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u90e8\u7f72Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.4"},"Nacos\u5982\u4f55Docker\u90e8\u7f72")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.5"},"\u5982\u4f55\u5728k8s\u4e2d\u90e8\u7f72Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.6"},"\u5982\u4f55\u76d1\u63a7Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#2.7"},"Nacos\u5728Docker\u73af\u5883\u4e0b\u96c6\u7fa4\u90e8\u7f72\uff0c\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u65e5\u5fd7\u4e00\u76f4\u6253\u5370 Nacos is starting...")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nacos\u4f7f\u7528\u95ee\u9898"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.1"},"Zookeeper\u670d\u52a1\u53ef\u4ee5\u8fc1\u79fb\u5230Nacos\u4e0a\u5417")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.2"},"Nacos\u652f\u6301\u591a\u914d\u7f6e\u6587\u4ef6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.3"},"Nacos\u652f\u6301Dubbo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.4"},"Nacos\u652f\u6301Spring\u4f53\u7cfb")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.5"},"\u4e0d\u4f7f\u7528Nacos SDK\u5982\u4f55\u8bbf\u95eeNacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.6"},"Nacos\u5bf9\u591a\u8bed\u8a00\u7684\u652f\u6301")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.7"},"Nacos0.8\u7248\u672c\u767b\u9646\u5931\u8d25")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.8"},"\u670d\u52a1\u7aef\u62a5\u9519",(0,o.kt)("inlineCode",{parentName:"a"},"java.lang.IllegalStateException: unable to find local peer: 127.0.0.1:8848"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.9"},"Nacos\u5982\u4f55\u5bf9\u914d\u7f6e\u8fdb\u884c\u52a0\u5bc6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.10"},"Nacos\u62a5401\u9519\u8bef")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.11"},"Nacos\u6743\u91cd\u4e0d\u751f\u6548")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.12"},"Nacos\u5982\u4f55\u6269\u7f29\u5bb9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.13"},"Nacos\u5ba2\u6237\u7aef\u4fee\u6539\u65e5\u5fd7\u7ea7\u522b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.14"},"Nacos\u4e0eZipkin \u6574\u5408\u51fa\u73b0",(0,o.kt)("inlineCode",{parentName:"a"},"Service not found"),"\u95ee\u9898")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.15"},"\u5982\u4f55\u4f9d\u8d56\u6700\u65b0\u7684Nacos\u5ba2\u6237\u7aef\uff1f")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.16"},"\u5ba2\u6237\u7aefCPU\u9ad8\uff0c\u6216\u8005\u5185\u5b58\u8017\u5c3d\u7684\u95ee\u9898")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.17"},"\u65e5\u5fd7\u6253\u5370\u9891\u7e41\u7684\u95ee\u9898")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.18"},"\u96c6\u7fa4\u7ba1\u7406\u9875\u9762\uff0craft term\u663e\u793a\u4e0d\u4e00\u81f4\u95ee\u9898")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.19"},"\u627e\u4e0d\u5230\u7b26\u53f7",(0,o.kt)("inlineCode",{parentName:"a"},"com.alibaba.nacos.consistency.entity"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#3.20"},"Beta\u53d1\u5e03\u5982\u4f55\u4f7f\u7528"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nacos\u539f\u7406\u95ee\u9898")),(0,o.kt)("h2",{id:"nacos\u5e38\u89c4\u95ee\u9898"},"Nacos\u5e38\u89c4\u95ee\u9898"),(0,o.kt)("h4",{id:"1.1"},"Nacos\u662f\u4ec0\u4e48"),(0,o.kt)("p",null,"Nacos \u81f4\u529b\u4e8e\u5e2e\u52a9\u60a8\u53d1\u73b0\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u5fae\u670d\u52a1\u3002Nacos \u63d0\u4f9b\u4e86\u4e00\u7ec4\u7b80\u5355\u6613\u7528\u7684\u7279\u6027\u96c6\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u5b9e\u73b0\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5143\u6570\u636e\u53ca\u6d41\u91cf\u7ba1\u7406\u3002\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/what-is-nacos.html"},"Nacos\u5b98\u7f51\u4ecb\u7ecd"),"\u3002"),(0,o.kt)("h4",{id:"1.2"},"Nacos\u5982\u4f55\u652f\u6301\u591a\u73af\u5883"),(0,o.kt)("p",null,"\u5728\u65e5\u5e38\u4f7f\u7528\u4e2d\u5e38\u5e38\u9700\u8981\u4e0d\u540c\u7684\u73af\u5883\uff0c\u6bd4\u5982\u65e5\u5e38\uff0c\u9884\u53d1\uff0c\u7ebf\u4e0a\u73af\u5883\uff0c\u5982\u679c\u662f\u903b\u8f91\u9694\u79bb\u53ef\u4ee5\u4f7f\u7528\u547d\u540d\u7a7a\u95f4\uff0cNacos\u652f\u6301\u547d\u540d\u7a7a\u95f4\u6765\u652f\u6301\u591a\u73af\u5883\u9694\u79bb\uff0c\u53ef\u4ee5\u5728Nacos\u63a7\u5236\u53f0\u521b\u5efa\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u5982\u679c\u9700\u8981\u7269\u7406\u9694\u79bb\uff0c\u5c31\u8981\u90e8\u7f72\u591a\u5957Nacos\u73af\u5883\u3002"),(0,o.kt)("h4",{id:"1.3"},"Nacos\u662f\u5426\u751f\u4ea7\u53ef\u7528"),(0,o.kt)("p",null,"Nacos\u57282019.1\u53d1\u5e03\u4e86Pre-GA\u7248\u672c\uff0c\u652f\u6301\u4e86\u5b89\u5168\u9694\u79bb\u3001\u76d1\u63a7\u548c\u670d\u52a1\u8fc1\u79fb\u7b49\u4e0a\u751f\u4ea7\u7684\u6700\u540e\u4e00\u516c\u91cc\uff0c\u4ee5\u66f4\u7a33\u5b9a\u7684\u652f\u6491\u7528\u6237\u7684\u751f\u4ea7\u73af\u5883\u3002\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://www.oschina.net/news/104019/nacos-0-8-0-pre-ga"},"Nacos \u53d1\u5e03 v0.8.0 Pre-GA \u7248\u672c\uff0c\u5b89\u5168\u7a33\u5b9a\u4e0a\u751f\u4ea7"),"\u3002"),(0,o.kt)("h4",{id:"1.4"},"Nacos\u7248\u672c\u8ba1\u5212"),(0,o.kt)("p",null,"Nacos 0.8.0 \u5f00\u59cb\u652f\u6301\u751f\u4ea7\u53ef\u7528\uff0c1.0\u7248\u672c\u8fbe\u5230\u5927\u89c4\u6a21\u751f\u4ea7\u53ef\u7528\uff0c2.0\u7248\u672c\u8ba1\u5212\u4e0eK8s\u3001Spring Cloud\u3001Service Mesh\u3001Serverless\u8fdb\u4e00\u6b65\u878d\u5408\uff0c\u5177\u4f53\u7684\u8be6\u60c5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/roadmap.html"},"Nacos\u89c4\u5212"),"\u3002"),(0,o.kt)("h4",{id:"1.5"},"Nacos\u6709\u4ec0\u4e48\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u5355\u673a\u6a21\u5f0f\u4e0b\uff0cNacos\u6ca1\u6709\u4efb\u4f55\u4f9d\u8d56\uff0c\u5728\u96c6\u7fa4\u6a21\u5f0f\u4e0b\uff0cNacos\u4f9d\u8d56Mysql\u505a\u5b58\u50a8\uff0c\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/deployment.html"},"Nacos\u90e8\u7f72"),"\u3002"),(0,o.kt)("h4",{id:"1.6"},"Nacos\u4f7f\u7528\u4ec0\u4e48\u5f00\u6e90\u534f\u8bae"),(0,o.kt)("p",null,"Nacos\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/blob/master/LICENSE"},"Apache 2.0"),"\u3002"),(0,o.kt)("h2",{id:"nacos\u8fd0\u7ef4\u95ee\u9898"},"Nacos\u8fd0\u7ef4\u95ee\u9898"),(0,o.kt)("h4",{id:"2.1"},"Nacos\u5982\u4f55\u5355\u673a\u90e8\u7f72"),(0,o.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003Nacos\u5b98\u7f51\u90e8\u7f72\u624b\u518c",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"quick start"),"\u3002"),(0,o.kt)("h4",{id:"2.2"},"Nacos\u5355\u673a\u90e8\u7f72\u5982\u4f55\u4f7f\u7528mysql"),(0,o.kt)("p",null,"Nacos\u5355\u673a\u6a21\u5f0f\u9ed8\u8ba4\u4f7f\u7528\u5185\u5d4c\u7684\u6570\u636e\u5e93\u4f5c\u4e3a\u5b58\u50a8\u5f15\u64ce\uff0c\u5982\u679c\u60f3\u6362\u6210\u81ea\u5df1\u5b89\u88c5\u7684mysql\uff0c\u53ef\u4ee5\u6309\u7167",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/deployment.html"},"\u5b98\u7f51\u6587\u6863"),"\u3002"),(0,o.kt)("h4",{id:"2.3"},"\u751f\u4ea7\u73af\u5883\u5982\u4f55\u90e8\u7f72Nacos"),(0,o.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u4f7f\u7528Nacos\u4e3a\u4e86\u8fbe\u5230\u9ad8\u53ef\u7528\u4e0d\u80fd\u4f7f\u7528\u5355\u673a\u6a21\u5f0f\uff0c\u9700\u8981\u642d\u5efanacos\u96c6\u7fa4\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/cluster-mode-quick-start.html"},"\u96c6\u7fa4\u90e8\u7f72\u624b\u518c"),"\u3002"),(0,o.kt)("h4",{id:"2.4"},"Nacos\u5982\u4f55Docker\u90e8\u7f72"),(0,o.kt)("p",null,"\u9664\u4e86\u4f7f\u7528\u538b\u7f29\u5305\u90e8\u7f72Nacos\uff0cNacos\u4e5f\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684Docker\u955c\u50cf\uff0c\u5f53Nacos\u53d1\u5e03\u65b0\u7684\u7248\u672c\u7684\u65f6\u5019\uff0cNacos\u4f1a\u53d1\u5e03\u5bf9\u5e94\u7684\u955c\u50cf\u7248\u672c\u652f\u6301Docker\u90e8\u7f72\u3002\u5177\u4f53\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start-docker.html"},"Nacos Docker"),"\u3002"),(0,o.kt)("h4",{id:"2.5"},"\u5982\u4f55\u5728k8s\u4e2d\u90e8\u7f72Nacos"),(0,o.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u90e8\u7f72Nacos\u96c6\u7fa4\uff0c\u5982\u679c\u8981\u5bf9Nacos\u8fdb\u884c\u6269\u5bb9\u64cd\u4f5c\uff0c\u9700\u8981\u624b\u52a8\u66f4\u6539\u96c6\u7fa4ip\u6587\u4ef6\uff0c\u542f\u52a8\u65b0\u7684Nacos\u670d\u52a1\u3002\u4e3a\u4e86\u80fd\u8fdb\u884c\u81ea\u52a8\u5316\u8fd0\u7ef4\uff0cNacos\u548ck8s\u7ed3\u5408\u5229\u7528StatefulSets\u63d0\u4f9b\u4e86\u81ea\u52a8\u8fd0\u7ef4\u65b9\u6848\uff0c\u80fd\u5bf9Nacos\u8fdb\u884c\u52a8\u6001\u6269\u7f29\u5bb9\uff0c\u5177\u4f53\u8be6\u60c5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-k8s/blob/master/README-CN.md"},"Kubernetes Nacos"),"\u3002"),(0,o.kt)("h4",{id:"2.6"},"\u5982\u4f55\u76d1\u63a7Nacos"),(0,o.kt)("p",null,"Nacos0.8\u7248\u672c\u63d0\u4f9b\u4e86Metrics\u6570\u636e\u66b4\u9732\u80fd\u529b\uff0c\u80fd\u901a\u8fc7Metrics\u6570\u636e\u7684\u5185\u5bb9\u5bf9Nacos\u7684\u8fd0\u884c\u72b6\u6001\u8fdb\u884c\u76d1\u63a7\uff0c\u8be6\u60c5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/monitor-guide.html"},"Nacos\u76d1\u63a7"),"\u3002"),(0,o.kt)("h4",{id:"2.7"},"Nacos\u5728Docker\u73af\u5883\u4e0b\u96c6\u7fa4\u90e8\u7f72\uff0c\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u65e5\u5fd7\u4e00\u76f4\u6253\u5370 Nacos is starting..."),(0,o.kt)("p",null,"\u539f\u56e0\u53ef\u80fd\u662f\u7531\u4e8eDocker\u73af\u5883\u4e0b\uff0c\u5185\u5b58\u4e0d\u8db3\u5bfc\u81f4\u53e6\u5916\u7684\u670d\u52a1\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u6700\u540e\u5bfc\u81f4\u670d\u52a1\u62a5\u9519\uff0c\u4e00\u76f4\u91cd\u542f\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u5927Docker\u9650\u5236\u5185\u5b58\u5c1d\u8bd5\u89e3\u51b3\u3002"),(0,o.kt)("h2",{id:"nacos\u4f7f\u7528\u95ee\u9898"},"Nacos\u4f7f\u7528\u95ee\u9898"),(0,o.kt)("h4",{id:"3.1"},"Zookeeper\u4e0a\u7684\u670d\u52a1\u53ef\u4ee5\u8fc1\u79fb\u5230Nacos\u4e0a\u5417"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7Nacos-Sync\u628aZookeeper\u670d\u52a1\u8fc1\u79fb\u5230Nacos\uff0c\u4e5f\u53ef\u4ee5\u4eceNacos\u8fc1\u79fb\u5230Zookeeper\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paderlol/nacos-sync-example"},"Nacos Sync \u4f7f\u7528"),"\u3002"),(0,o.kt)("h4",{id:"3.2"},"Nacos\u652f\u6301\u591a\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"Nacos\u901a\u8fc7Spring Cloud Alibaba Nacos Config\u652f\u6301\u4e86\u591a\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u5c06\u914d\u7f6e\u5b58\u50a8\u5728\u591a\u4e2a\u72ec\u7acb\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002\u5173\u8054\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/320"},"issue"),"\uff0c\u8be6\u60c5\u53c2\u8003\u6587\u6863",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/wiki/Nacos-config"},"Spring Cloud Alibaba Nacos Config"),"\u3002"),(0,o.kt)("h4",{id:"3.3"},"Nacos\u652f\u6301Dubbo"),(0,o.kt)("p",null,"Nacos 0.6\u7248\u672c\u548cDubbo\u96c6\u6210\uff0c\u652f\u6301\u4f7f\u7528Nacos\u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5173\u8054",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/390"},"issue"),",\u5177\u4f53\u6587\u6863\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/use-nacos-with-dubbo.html"},"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3"),"\u3002"),(0,o.kt)("h4",{id:"3.4"},"Nacos\u652f\u6301Spring\u4f53\u7cfb"),(0,o.kt)("p",null,"Nacos\u5b8c\u5584\u652f\u6301\u4e86Sping\u6280\u672f\u6808\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start-spring.html"},"Nacos Spring"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start-spring-boot.html"},"Nacos Spring Boot"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html"},"Spring Cloud"),"\u3002"),(0,o.kt)("h4",{id:"3.5"},"\u4e0d\u4f7f\u7528Nacos SDK\u5982\u4f55\u8bbf\u95eeNacos"),(0,o.kt)("p",null,"Nacos\u7684\u7f51\u7edc\u4ea4\u4e92\u90fd\u662f\u57fa\u4e8eHttp\u534f\u8bae\u5b9e\u73b0\u7684\uff0c\u63d0\u4f9b\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/open-api.html"},"Open-API"),"\u53ef\u4ee5\u5f88\u5bb9\u6613\u5b9e\u73b0Nacos\u7684\u8bbf\u95ee\u3002"),(0,o.kt)("h4",{id:"3.6"},"Nacos\u5bf9\u591a\u8bed\u8a00\u7684\u652f\u6301"),(0,o.kt)("p",null,"Nacos\u76ee\u524d\u53ea\u652f\u6301Java\uff0c\u5bf9\u4e8e\u5176\u4ed6\u8bed\u8a00\u7684\u652f\u6301\u8fd8\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u9700\u8981\u5927\u5bb6\u5927\u529b\u652f\u6301\u4e00\u8d77\u5171\u5efa\u3002"),(0,o.kt)("h4",{id:"3.7"},"Nacos0.8\u7248\u672c\u767b\u9646\u5931\u8d25"),(0,o.kt)("p",null,"Nacos 0.8\u7248\u672c\u5f53\u4f7f\u7528openjdk\u5e76\u4e14\u6ca1\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME"),"\u7684\u73af\u5883\u53d8\u91cf\u65f6\uff0cnacos\u53ef\u4ee5\u542f\u52a8\u6210\u529f\uff0c\u662f\u56e0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"yum install"),"\u5b89\u88c5\u7684openjdk \u4f1a\u628ajava\u547d\u4ee4\u6ce8\u518c\u4e00\u4efd\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"/bin"),"\u76ee\u5f55\u4e0b\u9762,\u6240\u4ee5\u4f1a\u5f15\u53d1",(0,o.kt)("inlineCode",{parentName:"p"},"SignatureException"),"\u5f02\u5e38\u3002\u8fd9\u4e2a\u95ee\u9898\u5df2\u7ecf\u4fee\u590d\uff0c0.9\u7248\u672c\u4f1a\u53d1\u7248\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/711"},"issue"),"\u3002"),(0,o.kt)("h4",{id:"3.8"},"\u670d\u52a1\u7aef\u62a5\u9519 java.lang.IllegalStateException: unable to find local peer: 127.0.0.1:8848"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u662f\u56e0\u4e3aNacos\u83b7\u53d6\u672c\u673aIP\u65f6,\u6ca1\u6709\u83b7\u53d6\u5230\u6b63\u786e\u7684\u5916\u90e8IP.\u9700\u8981\u4fdd\u8bc1",(0,o.kt)("inlineCode",{parentName:"p"},"InetAddress.getLocalHost().getHostAddress()"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"hostname -i"),"\u7684\u7ed3\u679c\u662f\u4e0ecluster.conf\u91cc\u914d\u7f6e\u7684IP\u662f\u4e00\u81f4\u7684\u3002"),(0,o.kt)("h4",{id:"3.9"},"Nacos\u5982\u4f55\u5bf9\u914d\u7f6e\u8fdb\u884c\u52a0\u5bc6"),(0,o.kt)("p",null,"Nacos\u8ba1\u5212\u57281.X\u7248\u672c\u63d0\u4f9b\u52a0\u5bc6\u7684\u80fd\u529b\uff0c\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u52a0\u5bc6\uff0c\u53ea\u80fd\u9760sdk\u505a\u597d\u4e86\u52a0\u5bc6\u518d\u5b58\u5230nacos\u4e2d\u3002"),(0,o.kt)("h4",{id:"3.10"},"Nacos\u62a5401\u9519\u8bef"),(0,o.kt)("p",null,"Nacos\u670d\u52a1\u7aef\u62a5\u9519\u4e86\uff0c\u53ef\u4ee5\u68c0\u67e5\u670d\u52a1\u7aef\u65e5\u5fd7\uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alibaba/nacos/issues/816"},"issue"),"\u3002"),(0,o.kt)("h4",{id:"3.11"},"Nacos\u6743\u91cd\u4e0d\u751f\u6548"),(0,o.kt)("p",null,"Nacos\u63a7\u5236\u53f0\u4e0a\u7f16\u8f91\u6743\u91cd, \u76ee\u524d\u4eceSpringCloud\u5ba2\u6237\u7aef\u548cDubbo\u5ba2\u6237\u7aef\u90fd\u6ca1\u6709\u6253\u901a, \u6240\u4ee5\u4e0d\u80fd\u751f\u6548. \u5bf9\u4e8eSpringCloud\u5ba2\u6237\u7aef, \u5e94\u7528\u53ef\u4ee5\u5b9e\u73b0Ribbon\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u6765\u8fdb\u884c\u6743\u91cd\u8fc7\u6ee4\u3002"),(0,o.kt)("h4",{id:"3.12"},"Nacos\u5982\u4f55\u6269\u7f29\u5bb9"),(0,o.kt)("p",null,"\u76ee\u524d\u652f\u6301\u4fee\u6539cluster.conf\u6587\u4ef6\u7684\u65b9\u5f0f\u8fdb\u884c\u6269\u7f29\u5bb9, \u6539\u5b8c\u540e\u65e0\u9700\u91cd\u542f, Server\u4f1a\u81ea\u52a8\u5237\u65b0\u5230\u6587\u4ef6\u65b0\u5185\u5bb9\u3002"),(0,o.kt)("h4",{id:"3.13"},"Nacos\u5ba2\u6237\u7aef\u4fee\u6539\u65e5\u5fd7\u7ea7\u522b"),(0,o.kt)("p",null,"\u914d\u7f6e-D\u53c2\u6570com.alibaba.nacos.naming.log.level\u8bbe\u7f6enaming\u5ba2\u6237\u7aef\u7684\u65e5\u5fd7\u7ea7\u522b\uff0c\u4f8b\u5982\u8bbe\u7f6e\u4e3aerror\uff1a\n",(0,o.kt)("inlineCode",{parentName:"p"},"-Dcom.alibaba.nacos.naming.log.level=error"),"\n\u540c\u6837\u7684\uff0c-D\u53c2\u6570com.alibaba.nacos.config.log.level\u7528\u6765\u8bbe\u7f6econfig\u5ba2\u6237\u7aef\u7684\u65e5\u5fd7\u7ea7\u522b\u3002"),(0,o.kt)("h4",{id:"3.14"},"Nacos\u4e0eZipkin \u6574\u5408\u51fa\u73b0 Service not found \u95ee\u9898"),(0,o.kt)("p",null,"\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"spring-cloud-seluth"),"\u53c2\u6570\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"spring.zipkin.discovery-client-enabled=false"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4ecd\u7136\u5b58\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Service not found"),"\u9519\u8bef\uff0c\u5219\u5efa\u8bae\u5148\u4f7f\u7528open-api\u5c06Zipkin-server\u6ce8\u518c\u4e3a\u6c38\u4e45\u5b9e\u4f8b\u670d\u52a1\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?port=9411&healthy=true&ip=127.0.0.1&weight=1.0&serviceName=zipkin-server&ephemeral=false&namespaceId=public'")),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u524d\u5f80nacos\u63a7\u5236\u53f0\uff0c\u627e\u5230\u670d\u52a1\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"zipkin-server"),"\u7684\u670d\u52a1\uff0c\u627e\u5230\u96c6\u7fa4\u914d\u7f6e\uff0c\u8bbe\u7f6e\u5065\u5eb7\u68c0\u67e5\u6a21\u5f0f\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"TCP"),"\uff0c\u7aef\u53e3\u53f7\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"9411"),"(\u5373zipkin-server\u7684\u7aef\u53e3)\u3002"),(0,o.kt)("h4",{id:"3.15"},"\u5982\u4f55\u4f9d\u8d56\u6700\u65b0\u7684Nacos\u5ba2\u6237\u7aef\uff1f"),"\u5f88\u591a\u7528\u6237\u90fd\u662f\u901a\u8fc7Spring Cloud Alibaba\u6216\u8005Dubbo\u4f9d\u8d56\u7684Nacos\u5ba2\u6237\u7aef\uff0c\u90a3\u4e48Spring Cloud Alibaba\u548cDubbo\u4e2d\u4f9d\u8d56\u7684Nacos\u5ba2\u6237\u7aef\u7248\u672c\uff0c\u5f80\u5f80\u4f1a\u843d\u540e\u4e8eNacos\u6700\u65b0\u53d1\u5e03\u7684\u7248\u672c\u3002\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u9700\u8981\u5f3a\u5236\u5c06Nacos\u5ba2\u6237\u7aef\u5347\u7ea7\u5230\u6700\u65b0\uff0c\u6b64\u65f6\u5374\u5f80\u5f80\u4e0d\u77e5\u9053\u8be5\u5347\u7ea7\u54ea\u4e2a\u4f9d\u8d56\uff0c\u8fd9\u91cc\u5c06Spring Cloud Alibaba\u548cDubbo\u7684\u4f9d\u8d56\u5347\u7ea7\u8bf4\u660e\u5982\u4e0b\uff1a",(0,o.kt)("h5",{id:"spring-cloud-alibaba"},"Spring Cloud Alibaba"),(0,o.kt)("p",null,"\u7528\u6237\u901a\u5e38\u662f\u914d\u7f6e\u4ee5\u4e0bMaven\u4f9d\u8d56\u6765\u4f7f\u7528\u7684Nacos\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--Nacos Discovery--\x3e\n<dependency>\n     <groupId>com.alibaba.cloud</groupId>\n     <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n     <version>[latest version]</version>\n </dependency>\n\n\x3c!--Nacos Config--\x3e\n<dependency>\n     <groupId>com.alibaba.cloud</groupId>\n     <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n     <version>[latest version]</version>\n </dependency>\n")),(0,o.kt)("p",null,"\u8fd9\u4e24\u4e2ajar\u5305\u5b9e\u9645\u4e0a\u53c8\u4f9d\u8d56\u4e86\u4ee5\u4e0b\u7684jar\u5305\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.alibaba.nacos</groupId>\n  <artifactId>nacos-client</artifactId>\n  <version>[a particular version]</version>\n</dependency>\n")),(0,o.kt)("p",null,"\u5982\u679cnacos-client\u5347\u7ea7\u4e86\uff0c\u5bf9\u5e94\u7684spring-cloud\u5ba2\u6237\u7aef\u7248\u672c\u4e0d\u4e00\u5b9a\u4e5f\u540c\u6b65\u5347\u7ea7\uff0c\u8fd9\u4e2a\u65f6\u5019\u53ef\u4ee5\u91c7\u7528\u5982\u4e0b\u7684\u65b9\u5f0f\u5f3a\u5236\u5347\u7ea7nacos-client\uff08\u4ee5nacos-discovery\u4e3a\u4f8b\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>com.alibaba.cloud</groupId>\n     <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n     <version>[latest version]</version>\n     <excludes>\n          <exclude>\n                 <groupId>com.alibaba.nacos</groupId>\n                 <artifactId>nacos-client</artifactId>\n          </exclude>\n     </excludes>\n </dependency>\n\n<dependency>\n  <groupId>com.alibaba.nacos</groupId>\n  <artifactId>nacos-client</artifactId>\n  <version>[latest version]</version>\n</dependency>\n")),(0,o.kt)("h5",{id:"dubbo"},"Dubbo"),(0,o.kt)("p",null,"Dubbo\u4e5f\u662f\u7c7b\u4f3c\u7684\u9053\u7406\uff0c\u7528\u6237\u901a\u5e38\u5f15\u5165\u7684\u662f\u4ee5\u4e0b\u7684\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>com.alibaba</groupId>\n        <artifactId>dubbo-registry-nacos</artifactId>\n        <version>[latest version]</version>\n    </dependency>   \n    \n    \x3c!-- Dubbo dependency --\x3e\n    <dependency>\n        <groupId>com.alibaba</groupId>\n        <artifactId>dubbo</artifactId>\n        <version>[latest version]</version>\n    </dependency>\n")),(0,o.kt)("p",null,"\u9700\u8981\u5347\u7ea7Nacos\u5ba2\u6237\u7aef\u65f6\uff0c\u53ea\u9700\u8981\u5982\u4e0b\u4fee\u6539\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n  <groupId>com.alibaba.nacos</groupId>\n  <artifactId>nacos-client</artifactId>\n  <version>[latest version]</version>\n</dependency>\n")),(0,o.kt)("h4",{id:"3.16"},"\u5ba2\u6237\u7aefCPU\u9ad8\uff0c\u6216\u8005\u5185\u5b58\u8017\u5c3d\u7684\u95ee\u9898"),"\u95ee\u9898\u7684\u73b0\u8c61\u662f\u4f9d\u8d56Nacos\u5ba2\u6237\u7aef\u7684\u5e94\u7528\uff0c\u5728\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4\u540e\u51fa\u73b0CPU\u5360\u7528\u7387\u9ad8\uff0c\u5185\u5b58\u5360\u7528\u9ad8\u751a\u81f3\u5185\u5b58\u6ea2\u51fa\u7684\u73b0\u8c61\uff0c\u53ef\u4ee5\u53c2\u8003issue\uff1a[https://github.com/alibaba/nacos/issues/1605](https://github.com/alibaba/nacos/issues/1605)\u3002\u8fd9\u79cd\u60c5\u51b5\u9996\u5148\u8981\u505a\u7684\u662f\u5206\u6790CPU\u9ad8\u6216\u8005\u5185\u5b58\u5360\u7528\u9ad8\u7684\u539f\u56e0\uff0c\u5e38\u7528\u7684\u547d\u4ee4\u6709top\u3001jstack\u3001jmap\u3001jhat\u7b49\u3002\u5176\u4e2d\u4e00\u79cd\u60c5\u51b5\u662fNacos\u5ba2\u6237\u7aef\u5b9e\u4f8b\u5728Spring Cloud Alibaba\u670d\u52a1\u6846\u67b6\u4e2d\u88ab\u53cd\u590d\u6784\u9020\u4e86\u591a\u6b21\uff0c\u53ef\u4ee5\u53c2\u8003issue\uff1a[https://github.com/alibaba/spring-cloud-alibaba/issues/859](https://github.com/alibaba/spring-cloud-alibaba/issues/859)\u3002\u8fd9\u4e2a\u95ee\u9898\u5df2\u7ecf\u5f97\u5230\u4e86\u4fee\u590d\uff0c\u9884\u671f\u4f1a\u5728\u4e0b\u4e2aSpring Cloud Alibaba\u7248\u672c\u4e2d\u53d1\u5e03\u3002",(0,o.kt)("h4",{id:"3.17"},"\u65e5\u5fd7\u6253\u5370\u9891\u7e41\u7684\u95ee\u9898"),"\u5728\u8001\u7684Nacos\u7248\u672c\u4e2d\uff0c\u5f80\u5f80\u4f1a\u6709\u5927\u91cf\u7684\u65e0\u6548\u65e5\u5fd7\u6253\u5370\uff0c\u8fd9\u4e9b\u65e5\u5fd7\u7684\u6253\u5370\u4f1a\u8fc5\u901f\u5360\u7528\u5b8c\u7528\u6237\u7684\u78c1\u76d8\u7a7a\u95f4\uff0c\u540c\u65f6\u4e5f\u8ba9\u6709\u6548\u65e5\u5fd7\u96be\u4ee5\u67e5\u627e\u3002\u76ee\u524d\u793e\u533a\u53cd\u9988\u7684\u65e5\u5fd7\u9891\u7e41\u6253\u5370\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"access\u65e5\u5fd7\u5927\u91cf\u6253\u5370\uff0c\u76f8\u5173issue\u6709\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/issues/1510"},"https://github.com/alibaba/nacos/issues/1510"),"\u3002\u4e3b\u8981\u8868\u73b0\u662f{nacos.home}/logs/access_log.2019-xx-xx.log\u7c7b\u4f3c\u683c\u5f0f\u6587\u4ef6\u540d\u7684\u65e5\u5fd7\u5927\u91cf\u6253\u5370\uff0c\u800c\u4e14\u8fd8\u4e0d\u80fd\u81ea\u52a8\u6e05\u7406\u548c\u6eda\u52a8\u3002\u8fd9\u4e2a\u65e5\u5fd7\u662fSpring Boot\u63d0\u4f9b\u7684tomcat\u8bbf\u95ee\u65e5\u5fd7\u6253\u5370\uff0cSpring Boot\u5728\u5173\u4e8e\u8be5\u65e5\u5fd7\u7684\u9009\u9879\u4e2d\uff0c\u6ca1\u6709\u6700\u5927\u4fdd\u7559\u5929\u6570\u6216\u8005\u65e5\u5fd7\u5927\u5c0f\u63a7\u5236\u7684\u9009\u9879\u3002\u56e0\u6b64\u8fd9\u4e2a\u65e5\u5fd7\u7684\u6e05\u7406\u5fc5\u987b\u7531\u5e94\u7528\u65b0\u5efacrontab\u4efb\u52a1\u6765\u5b8c\u6210\uff0c\u6216\u8005\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5173\u95ed\u65e5\u5fd7\u7684\u8f93\u51fa\uff08\u5728\u751f\u4ea7\u73af\u5883\u6211\u4eec\u8fd8\u662f\u5efa\u8bae\u5f00\u542f\u8be5\u65e5\u5fd7\uff0c\u4ee5\u4fbf\u80fd\u591f\u6709\u7b2c\u4e00\u73b0\u573a\u7684\u8bbf\u95ee\u8bb0\u5f55\uff09\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server.tomcat.accesslog.enabled=false\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u4e1a\u52a1\u65e5\u5fd7\u5927\u91cf\u6253\u5370\u4e14\u65e0\u6cd5\u52a8\u6001\u8c03\u6574\u65e5\u5fd7\u7ea7\u522b\u3002\u8fd9\u4e2a\u95ee\u9898\u57281.1.3\u5df2\u7ecf\u5f97\u5230\u4f18\u5316\uff0c\u53ef\u4ee5\u901a\u8fc7API\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u65e5\u5fd7\u7ea7\u522b\u7684\u8c03\u6574\uff0c\u8c03\u6574\u65e5\u5fd7\u7ea7\u522b\u7684\u65b9\u5f0f\u5982\u4e0b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# \u8c03\u6574naming\u6a21\u5757\u7684naming-raft.log\u7684\u7ea7\u522b\u4e3aerror:\ncurl -X PUT '$nacos_server:8848/nacos/v1/ns/operator/log?logName=naming-raft&logLevel=error'\n# \u8c03\u6574config\u6a21\u5757\u7684config-dump.log\u7684\u7ea7\u522b\u4e3awarn:\ncurl -X PUT '$nacos_server:8848/nacos/v1/cs/ops/log?logName=config-dump&logLevel=warn'\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u65e5\u5fd7\u5927\u91cf\u6253\u5370\uff0c\u4e3b\u8981\u6709\u5fc3\u8df3\u65e5\u5fd7\u3001\u8f6e\u8be2\u65e5\u5fd7\u7b49\u3002\u8fd9\u4e2a\u95ee\u9898\u5df2\u7ecf\u57281.1.3\u89e3\u51b3\uff0c\u8bf7\u5347\u7ea7\u52301.1.3\u7248\u672c\u3002")),(0,o.kt)("h4",{id:"3.18"},"\u96c6\u7fa4\u7ba1\u7406\u9875\u9762\uff0craft term\u663e\u793a\u4e0d\u4e00\u81f4\u95ee\u9898"),"\u5728Nacos 1.0.1\u7248\u672c\u4e2d\uff0cNacos\u63a7\u5236\u53f0\u652f\u6301\u4e86\u663e\u793a\u5f53\u524d\u7684\u96c6\u7fa4\u5404\u4e2a\u673a\u5668\u7684\u72b6\u6001\u4fe1\u606f\u3002\u8fd9\u4e2a\u529f\u80fd\u53d7\u5230\u6bd4\u8f83\u591a\u7528\u6237\u7684\u5173\u6ce8\uff0c\u5176\u4e2d\u4e00\u4e2a\u88ab\u53cd\u9988\u7684\u95ee\u9898\u662f\u5217\u8868\u4e2d\u6bcf\u4e2a\u8282\u70b9\u7684\u96c6\u7fa4\u4efb\u671f\u4e0d\u4e00\u6837\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff08\u56fe\u7247\u4fe1\u606f\u6765\u81eaissue\uff1ahttps://github.com/alibaba/nacos/issues/1786\uff09\uff1a",(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1567737322959-eed80457-e74c-4adb-bc29-6655860f8ca9.png#align=left&display=inline&height=279&name=image.png&originHeight=558&originWidth=1685&size=45557&status=done&width=842.5",alt:"image.png"})),(0,o.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e2a\u4efb\u671f\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\uff0c\u539f\u56e0\u4e3b\u8981\u662f\u56e0\u4e3a\u83b7\u53d6\u8fd9\u4e2a\u4fe1\u606f\u7684\u903b\u8f91\u6709\u4e00\u4e9b\u95ee\u9898\uff0c\u6ca1\u6709\u4ece\u5bf9\u5e94\u7684\u8282\u70b9\u4e0a\u83b7\u53d6\u96c6\u7fa4\u4efb\u671f\u3002\u8fd9\u4e2a\u95ee\u9898\u4f1a\u5728\u4e0b\u4e00\u4e2aNacos\u7248\u672c\u4e2d\u4fee\u590d\u3002\u76ee\u524d\u4e00\u4e2a\u624b\u52a8\u68c0\u67e5\u96c6\u7fa4\u4efb\u671f\u7684\u529e\u6cd5\u662f\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl '127.0.0.1:8848/nacos/v1/ns/raft/state'\n")),(0,o.kt)("p",null,"\u7136\u540e\u5728\u8fd4\u56de\u4fe1\u606f\u4e2d\u67e5\u627e\u672c\u8282\u70b9\u7684\u96c6\u7fa4\u4efb\u671f\u3002\u56e0\u4e3a\u6bcf\u4e2a\u8282\u70b9\u8fd4\u56de\u7684\u96c6\u7fa4\u4efb\u671f\u4e2d\uff0c\u53ea\u6709\u5f53\u524d\u8282\u70b9\u7684\u4fe1\u606f\u662f\u51c6\u786e\u7684\uff0c\u8fd4\u56de\u7684\u5176\u4ed6\u8282\u70b9\u7684\u4fe1\u606f\u90fd\u662f\u4e0d\u51c6\u786e\u7684\u3002"),(0,o.kt)("h4",{id:"3.19"},"\u627e\u4e0d\u5230\u7b26\u53f7`com.alibaba.nacos.consistency.entity`"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5305\u76ee\u5f55\u662f\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"protobuf"),"\u5728\u7f16\u8bd1\u65f6\u81ea\u52a8\u751f\u6210\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"mvn compile"),"\u6765\u81ea\u52a8\u751f\u6210\u4ed6\u4eec\u3002\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fIDEA\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528IDEA\u7684protobuf\u63d2\u4ef6\u3002"),(0,o.kt)("h4",{id:"3.20"},"Beta\u53d1\u5e03\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("p",null,'service-a\u670d\u52a1\u5728192.168.31.114,192.168.31.115,192.168.31.116\u542f\u52a8\u4e86\u4e09\u4e2a\u5b9e\u4f8b\u3002\n\u6211\u4eec\u60f3\u628a\u5176\u4e2d192.168.31.114\u5b9e\u4f8b\u7684\u914d\u7f6e\u9879"user.password"\u7684\u503c\u6539\u4e3axxx\uff08\u5373\uff1aBeta\u53d1\u5e03\uff09\uff0c192.168.31.115,192.168.31.116\u7684\u914d\u7f6e\u4e0d\u505a\u66f4\u6539\u3002'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"beta",src:t(9326).Z,width:"1652",height:"745"})),(0,o.kt)("h2",{id:"nacos\u539f\u7406\u95ee\u9898"},"Nacos\u539f\u7406\u95ee\u9898"))}N.isMDXComponent=!0},9326:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/beta-4a8440c316abba7b86130848bbab5c67.png"}}]);