"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6388],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>d});var a=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,a,t=function(e,n){if(null==e)return{};var o,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=a.createContext({}),p=function(e){var n=a.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},l=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(o),u=t,d=m["".concat(s,".").concat(u)]||m[u]||b[u]||r;return o?a.createElement(d,i(i({ref:n},l),{},{components:o})):a.createElement(d,i({ref:n},l))}));function d(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:t,i[1]=c;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},67671:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=o(87462),t=(o(67294),o(3905));const r={title:"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3",keywords:["Dubbo","Nacos","\u6ce8\u518c\u4e2d\u5fc3"],description:"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3"},i="Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3",c={unversionedId:"use-nacos-with-dubbo",id:"version-1.X/use-nacos-with-dubbo",title:"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3",description:"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.X/use-nacos-with-dubbo.md",sourceDirName:".",slug:"/use-nacos-with-dubbo",permalink:"/zh-cn/docs/1.X/use-nacos-with-dubbo",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3",keywords:["Dubbo","Nacos","\u6ce8\u518c\u4e2d\u5fc3"],description:"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3"},sidebar:"docs",previous:{title:"Nacos Docker \u5feb\u901f\u5f00\u59cb",permalink:"/zh-cn/docs/1.X/quick-start-docker"},next:{title:"Kubernetes Nacos",permalink:"/zh-cn/docs/1.X/use-nacos-with-kubernetes"}},s={},p=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Dubbo Spring \u5916\u90e8\u5316\u914d\u7f6e",id:"dubbo-spring-\u5916\u90e8\u5316\u914d\u7f6e",level:3},{value:"Spring XML \u914d\u7f6e\u6587\u4ef6",id:"spring-xml-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u5b8c\u6574\u793a\u4f8b",id:"\u5b8c\u6574\u793a\u4f8b",level:2},{value:"\u793a\u4f8b\u63a5\u53e3\u4e0e\u5b9e\u73b0",id:"\u793a\u4f8b\u63a5\u53e3\u4e0e\u5b9e\u73b0",level:3},{value:"Spring \u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b",id:"spring-\u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b",level:3},{value:"\u670d\u52a1\u63d0\u4f9b\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0",id:"\u670d\u52a1\u63d0\u4f9b\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0",level:4},{value:"\u670d\u52a1\u6d88\u8d39\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0",id:"\u670d\u52a1\u6d88\u8d39\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0",level:4},{value:"\u8fd0\u884c\u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b",id:"\u8fd0\u884c\u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b",level:4},{value:"Spring XML \u914d\u7f6e\u9a71\u52a8\u793a\u4f8b",id:"spring-xml-\u914d\u7f6e\u9a71\u52a8\u793a\u4f8b",level:3},{value:"\u670d\u52a1\u63d0\u4f9b\u65b9  XML \u914d\u7f6e\u9a71\u52a8",id:"\u670d\u52a1\u63d0\u4f9b\u65b9--xml-\u914d\u7f6e\u9a71\u52a8",level:4},{value:"\u670d\u52a1\u6d88\u8d39\u65b9 XML \u914d\u7f6e\u9a71\u52a8",id:"\u670d\u52a1\u6d88\u8d39\u65b9-xml-\u914d\u7f6e\u9a71\u52a8",level:4},{value:"\u8fd0\u884c XML \u914d\u7f6e\u9a71\u52a8\u793a\u4f8b",id:"\u8fd0\u884c-xml-\u914d\u7f6e\u9a71\u52a8\u793a\u4f8b",level:4}],l={toc:p},m="wrapper";function b(e){let{components:n,...o}=e;return(0,t.kt)(m,(0,a.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"dubbo-\u878d\u5408-nacos-\u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3"},"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3"),(0,t.kt)("p",null,"Nacos \u4f5c\u4e3a Dubbo \u751f\u6001\u7cfb\u7edf\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0\uff0c\u672c\u6587\u5c06\u4f1a\u4ecb\u7ecd\u5982\u4f55\u8fdb\u884c Dubbo \u5bf9\u63a5 Nacos \u6ce8\u518c\u4e2d\u5fc3\u7684\u5de5\u4f5c\u3002"),(0,t.kt)("h2",{id:"\u9884\u5907\u5de5\u4f5c"},"\u9884\u5907\u5de5\u4f5c"),(0,t.kt)("p",null,"\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Nacos \u670d\u52a1\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,t.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/docs/quick-start.html"},"Nacos \u5feb\u901f\u5165\u95e8"),"\u3002 "),(0,t.kt)("h2",{id:"\u5feb\u901f\u4e0a\u624b"},"\u5feb\u901f\u4e0a\u624b"),(0,t.kt)("p",null,"Dubbo \u878d\u5408 Nacos \u6210\u4e3a\u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u201c\u3002"),(0,t.kt)("h3",{id:"\u589e\u52a0-maven-\u4f9d\u8d56"},"\u589e\u52a0 Maven \u4f9d\u8d56"),(0,t.kt)("p",null,"\u53ea\u9700\u8981\u4f9d\u8d56Dubbo\u5ba2\u6237\u7aef\u5373\u53ef\uff0c\u5173\u4e8e\u63a8\u8350\u7684\u4f7f\u7528\u7248\u672c\uff0c\u8bf7\u53c2\u8003Dubbo\u5b98\u65b9\u6587\u6863\u6216\u8005\u54a8\u8be2Dubbo\u5f00\u53d1\u4eba\u5458\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n\n    ...\n\n    <dependency>\n        <groupId>com.alibaba</groupId>\n        <artifactId>dubbo</artifactId>\n        <version>3.0.5</version>\n    </dependency>\n\n    \x3c!-- Dubbo Nacos registry dependency --\x3e\n    <dependency>\n        <groupId>com.alibaba</groupId>\n        <artifactId>dubbo-registry-nacos</artifactId>\n        <version>3.0.5</version>\n    </dependency>\n\n    \x3c!-- Alibaba Spring Context extension --\x3e\n    <dependency>\n        <groupId>com.alibaba.spring</groupId>\n        <artifactId>spring-context-support</artifactId>\n        <version>1.0.11</version>\n    </dependency>\n    ...\n    \n</dependencies>\n")),(0,t.kt)("h3",{id:"\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"},"\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"),(0,t.kt)("p",null,"\u5047\u8bbe\u60a8 Dubbo \u5e94\u7528\u4f7f\u7528 Spring Framework \u88c5\u914d\uff0c\u5c06\u6709\u4e24\u79cd\u914d\u7f6e\u65b9\u6cd5\u53ef\u9009\uff0c\u5206\u522b\u4e3a\uff1a",(0,t.kt)("a",{parentName:"p",href:"https://mercyblitz.github.io/2018/01/18/Dubbo-%E5%A4%96%E9%83%A8%E5%8C%96%E9%85%8D%E7%BD%AE/"},"Dubbo Spring \u5916\u90e8\u5316\u914d\u7f6e"),"\u4ee5\u53ca Spring XML \u914d\u7f6e\u6587\u4ef6\u4ee5\u53ca\uff0c\u7b14\u8005\u5f3a\u70c8\u63a8\u8350\u524d\u8005\u3002"),(0,t.kt)("h3",{id:"dubbo-spring-\u5916\u90e8\u5316\u914d\u7f6e"},"Dubbo Spring \u5916\u90e8\u5316\u914d\u7f6e"),(0,t.kt)("p",null,"Dubbo Spring \u5916\u90e8\u5316\u914d\u7f6e\u662f\u7531 Dubbo ",(0,t.kt)("inlineCode",{parentName:"p"},"2.5.8")," \u5f15\u5165\u7684\u65b0\u7279\u6027\uff0c\u53ef\u901a\u8fc7 Spring ",(0,t.kt)("inlineCode",{parentName:"p"},"Environment")," \u5c5e\u6027\u81ea\u52a8\u5730\u751f\u6210\u5e76\u7ed1\u5b9a Dubbo \u914d\u7f6e Bean\uff0c\u5b9e\u73b0\u914d\u7f6e\u7b80\u5316\uff0c\u5e76\u4e14\u964d\u4f4e\u5fae\u670d\u52a1\u5f00\u53d1\u95e8\u69db\u3002"),(0,t.kt)("p",null,"\u5047\u8bbe\u60a8 Dubbo \u5e94\u7528\u7684\u4f7f\u7528 Nacos \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5e76\u4e14\u5176\u670d\u52a1\u5668 IP \u5730\u5740\u4e3a\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"10.20.153.10"),"\uff0c\u540c\u65f6\uff0c\u8be5\u6ce8\u518c\u5730\u5740\u4f5c\u4e3a Dubbo \u5916\u90e8\u5316\u914d\u7f6e\u5c5e\u6027\u5b58\u50a8\u5728 ",(0,t.kt)("inlineCode",{parentName:"p"},"dubbo-config.properties")," \u6587\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-properties"},"## application\ndubbo.application.name = your-dubbo-application\n\n## Nacos registry address\ndubbo.registry.address = nacos://10.20.153.10:8848\n##\u5982\u679c\u8981\u4f7f\u7528\u81ea\u5df1\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u4e0b\u97622\u79cd\u65b9\u5f0f\n#dubbo.registry.address = nacos://10.20.153.10:8848?namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932\n#dubbo.registry.parameters.namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932\n...\n")),(0,t.kt)("p",null,"\u968f\u540e\uff0c\u91cd\u542f\u60a8\u7684 Dubbo \u5e94\u7528\uff0cDubbo \u7684\u670d\u52a1\u63d0\u4f9b\u548c\u6d88\u8d39\u4fe1\u606f\u5728 Nacos \u63a7\u5236\u53f0\u4e2d\u53ef\u4ee5\u663e\u793a\uff1a"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1n6m7zMTqK1RjSZPhXXXfOFXa-2784-1058.png",alt:"image-20181213103845976-4668726.png | left | 747x284"})),(0,t.kt)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u670d\u52a1\u540d\u524d\u7f00\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"providers:")," \u7684\u4fe1\u606f\u4e3a\u670d\u52a1\u63d0\u4f9b\u8005\u7684\u5143\u4fe1\u606f\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"consumers:")," \u5219\u4ee3\u8868\u670d\u52a1\u6d88\u8d39\u8005\u7684\u5143\u4fe1\u606f\u3002\u70b9\u51fb\u201c",(0,t.kt)("strong",{parentName:"p"},"\u8be6\u60c5"),"\u201d\u53ef\u67e5\u770b\u670d\u52a1\u72b6\u6001\u8be6\u60c5\uff1a"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1vZzfzQzoK1RjSZFlXXai4VXa-2714-1588.png",alt:"image-20181213104145998-4668906.png | left | 747x437"})),(0,t.kt)("p",null,"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528 Spring XML \u914d\u7f6e\u6587\u4ef6\u88c5\u914d Dubbo \u6ce8\u518c\u4e2d\u5fc3\u7684\u8bdd\uff0c\u8bf7\u53c2\u8003\u4e0b\u4e00\u8282\u3002"),(0,t.kt)("h3",{id:"spring-xml-\u914d\u7f6e\u6587\u4ef6"},"Spring XML \u914d\u7f6e\u6587\u4ef6"),(0,t.kt)("p",null,"\u540c\u6837\uff0c\u5047\u8bbe\u60a8 Dubbo \u5e94\u7528\u7684\u4f7f\u7528 Nacos \u4f5c\u4e3a\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5e76\u4e14\u5176\u670d\u52a1\u5668 IP \u5730\u5740\u4e3a\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"10.20.153.10"),"\uff0c\u5e76\u4e14\u88c5\u914d Spring Bean \u5728 XML \u6587\u4ef6\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans        http://www.springframework.org/schema/beans/spring-beans-4.3.xsd        http://dubbo.apache.org/schema/dubbo        http://dubbo.apache.org/schema/dubbo/dubbo.xsd">\n \n    \x3c!-- \u63d0\u4f9b\u65b9\u5e94\u7528\u4fe1\u606f\uff0c\u7528\u4e8e\u8ba1\u7b97\u4f9d\u8d56\u5173\u7cfb --\x3e\n    <dubbo:application name="dubbo-provider-xml-demo"  />\n \n    \x3c!-- \u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3 --\x3e\n    <dubbo:registry address="nacos://10.20.153.10:8848" />\n    \x3c!-- \u5982\u679c\u8981\u4f7f\u7528\u81ea\u5df1\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u914d\u7f6e --\x3e\n    \x3c!-- <dubbo:registry address="nacos://10.20.153.10:8848?namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932" /> --\x3e\n    ...\n</beans>\n')),(0,t.kt)("p",null,"\u91cd\u542f Dubbo \u5e94\u7528\u540e\uff0c\u60a8\u540c\u6837\u4e5f\u80fd\u53d1\u73b0\u670d\u52a1\u63d0\u4f9b\u65b9\u548c\u6d88\u8d39\u65b9\u7684\u6ce8\u518c\u5143\u4fe1\u606f\u5448\u73b0\u5728 Nacos \u63a7\u5236\u53f0\u4e2d\uff1a"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1zl2dzQPoK1RjSZKbXXX1IXXa-2784-1022.png",alt:"image-20181213113049185-4671849.png | left | 747x274"})),(0,t.kt)("p",null,"\u60a8\u662f\u5426\u89c9\u5f97\u914d\u7f6e\u6216\u5207\u6362 Nacos \u6ce8\u518c\u4e2d\u5fc3\u8d85\u7ea7 Easy \u5462\uff1f\u5982\u679c\u60a8\u4ecd\u65e7\u610f\u72b9\u672a\u5c3d\u6216\u8005\u4e0d\u751a\u660e\u767d\u7684\u8bdd\uff0c\u53ef\u53c2\u8003\u4ee5\u4e0b\u5b8c\u6574\u7684\u793a\u4f8b\u3002"),(0,t.kt)("h2",{id:"\u5b8c\u6574\u793a\u4f8b"},"\u5b8c\u6574\u793a\u4f8b"),(0,t.kt)("p",null,"\u4ee5\u4e0a\u56fe\u7247\u4e2d\u7684\u5143\u6570\u636e\u6e90\u4e8e Dubbo Spring \u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b\u4ee5\u53ca Dubbo Spring XML \u914d\u7f6e\u9a71\u52a8\u793a\u4f8b\uff0c\u4e0b\u9762\u5c06\u5206\u522b\u4ecb\u7ecd\u4e24\u8005\uff0c\u60a8\u53ef\u4ee5\u9009\u62e9\u81ea\u5df1\u504f\u597d\u7684\u7f16\u7a0b\u6a21\u578b\u3002\u5728\u6b63\u5f0f\u8ba8\u8bba\u4e4b\u524d\uff0c\u5148\u6765\u4ecb\u7ecd\u4e24\u8005\u7684\u9884\u5907\u5de5\u4f5c\uff0c\u56e0\u4e3a\u5b83\u4eec\u7686\u4f9d\u8d56 Java \u670d\u52a1\u63a5\u53e3\u548c\u5b9e\u73b0\u3002\u540c\u65f6\uff0c",(0,t.kt)("strong",{parentName:"p"},"\u8bf7\u786e\u4fdd\u672c\u5730\uff08",(0,t.kt)("inlineCode",{parentName:"strong"},"127.0.0.1"),"\uff09\u73af\u5883\u5df2\u542f\u52a8 Nacos \u670d\u52a1"),"\u3002"),(0,t.kt)("h3",{id:"\u793a\u4f8b\u63a5\u53e3\u4e0e\u5b9e\u73b0"},"\u793a\u4f8b\u63a5\u53e3\u4e0e\u5b9e\u73b0"),(0,t.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\u5f52\u6863\u4f4d\u7f6e\uff1a\n",(0,t.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-dubbo-example"},"https://github.com/nacos-group/nacos-examples/tree/master/nacos-dubbo-example")),(0,t.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u793a\u4f8b\u63a5\u53e3\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"package com.alibaba.nacos.example.dubbo.service;\n\npublic interface DemoService {\n    String sayName(String name);\n}\n")),(0,t.kt)("p",null,"\u63d0\u4f9b\u4ee5\u4e0a\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'\npackage com.alibaba.nacos.example.dubbo.service;\n\nimport com.alibaba.dubbo.config.annotation.Service;\nimport com.alibaba.dubbo.rpc.RpcContext;\nimport org.springframework.beans.factory.annotation.Value;\n\n/**\n * Default {@link DemoService}\n *  https://nacos.io/zh-cn/docs/use-nacos-with-dubbo.html\n * @since 2.6.5\n */\n@Service(version = "${demo.service.version}")\npublic class DefaultService implements DemoService {\n\n    @Value("${demo.service.name}")\n    private String serviceName;\n\n    public String sayName(String name) {\n        RpcContext rpcContext = RpcContext.getContext();\n        return String.format("Service [name :%s , port : %d] %s(\\"%s\\") : Hello,%s",\n                serviceName,\n                rpcContext.getLocalPort(),\n                rpcContext.getMethodName(),\n                name,\n                name);\n    }\n}\n')),(0,t.kt)("p",null,"\u63a5\u53e3\u4e0e\u5b9e\u73b0\u51c6\u5907\u59a5\u5f53\u540e\uff0c\u4e0b\u9762\u5c06\u91c7\u7528\u6ce8\u89e3\u9a71\u52a8\u548c XML \u914d\u7f6e\u9a71\u52a8\u5404\u81ea\u5b9e\u73b0\u3002"),(0,t.kt)("h3",{id:"spring-\u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b"},"Spring \u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b"),(0,t.kt)("p",null,"Dubbo ",(0,t.kt)("inlineCode",{parentName:"p"},"2.5.7")," \u91cd\u6784\u4e86 Spring \u6ce8\u89e3\u9a71\u52a8\u7684\u7f16\u7a0b\u6a21\u578b\u3002"),(0,t.kt)("h4",{id:"\u670d\u52a1\u63d0\u4f9b\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0"},"\u670d\u52a1\u63d0\u4f9b\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 Dubbo \u63d0\u4f9b\u65b9\u5916\u90e8\u5316\u914d\u7f6e\u5c5e\u6027\u6e90 -  ",(0,t.kt)("inlineCode",{parentName:"li"},"provider-config.properties"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-properties"},"## application\ndubbo.application.name = dubbo-provider-demo\n\n## Nacos registry address\ndubbo.registry.address = nacos://127.0.0.1:8848\n##\u5982\u679c\u8981\u4f7f\u7528\u81ea\u5df1\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u4e0b\u97622\u79cd\u65b9\u5f0f\n#dubbo.registry.address = nacos://127.0.0.1:8848?namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932\n#dubbo.registry.parameters.namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932\n\n## Dubbo Protocol\ndubbo.protocol.name = dubbo\ndubbo.protocol.port = -1\n\n# Provider @Service version\ndemo.service.version=1.0.0\ndemo.service.name = demoService\n\ndubbo.application.qosEnable=false\n\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u670d\u52a1\u63d0\u4f9b\u65b9\u5f15\u5bfc\u7c7b - ",(0,t.kt)("inlineCode",{parentName:"li"},"DemoServiceProviderBootstrap"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'package com.alibaba.nacos.example.dubbo.provider;\n\nimport com.alibaba.nacos.example.dubbo.service.DemoService;\nimport org.apache.dubbo.config.spring.context.annotation.EnableDubbo;\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\nimport org.springframework.context.annotation.PropertySource;\nimport java.io.IOException;\n\n/**\n * {@link DemoService} provider demo\n * https://nacos.io/zh-cn/docs/use-nacos-with-dubbo.html\n */\n@EnableDubbo(scanBasePackages = "com.alibaba.nacos.example.dubbo.service")\n@PropertySource(value = "classpath:/provider-config.properties")\npublic class DemoServiceProviderBootstrap {\n\n    public static void main(String[] args) throws IOException {\n        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();\n        context.register(DemoServiceProviderBootstrap.class);\n        context.refresh();\n        System.out.println("DemoService provider is starting...");\n        System.in.read();\n    }\n}\n\n')),(0,t.kt)("p",null,"\u5176\u4e2d\u6ce8\u89e3 ",(0,t.kt)("inlineCode",{parentName:"p"},"@EnableDubbo")," \u6fc0\u6d3b Dubbo \u6ce8\u89e3\u9a71\u52a8\u4ee5\u53ca\u5916\u90e8\u5316\u914d\u7f6e\uff0c\u5176 ",(0,t.kt)("inlineCode",{parentName:"p"},"scanBasePackages")," \u5c5e\u6027\u626b\u63cf\u6307\u5b9a Java \u5305\uff0c\u5c06\u6240\u6709\u6807\u6ce8 ",(0,t.kt)("inlineCode",{parentName:"p"},"@Service")," \u7684\u670d\u52a1\u63a5\u53e3\u5b9e\u73b0\u7c7b\u66b4\u9732\u4e3a Spring Bean\uff0c\u968f\u5373\u88ab\u5bfc\u51fa Dubbo \u670d\u52a1\u3002"),(0,t.kt)("p",null," ",(0,t.kt)("inlineCode",{parentName:"p"},"@PropertySource")," \u662f Spring Framework 3.1 \u5f15\u5165\u7684\u6807\u51c6\u5bfc\u5165\u5c5e\u6027\u914d\u7f6e\u8d44\u6e90\u6ce8\u89e3\uff0c\u5b83\u5c06\u4e3a Dubbo \u63d0\u4f9b\u5916\u90e8\u5316\u914d\u7f6e\u3002"),(0,t.kt)("h4",{id:"\u670d\u52a1\u6d88\u8d39\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0"},"\u670d\u52a1\u6d88\u8d39\u65b9\u6ce8\u89e3\u9a71\u52a8\u5b9e\u73b0"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9a\u4e49 Dubbo \u6d88\u8d39\u65b9\u5916\u90e8\u5316\u914d\u7f6e\u5c5e\u6027\u6e90 -  ",(0,t.kt)("inlineCode",{parentName:"li"},"consumer-config.properties"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-properties"},"## Dubbo Application info\ndubbo.application.name = dubbo-consumer-demo\n\n## Nacos registry address\ndubbo.registry.address = nacos://127.0.0.1:8848\n##\u5982\u679c\u8981\u4f7f\u7528\u81ea\u5df1\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u4e0b\u97622\u79cd\u65b9\u5f0f\n#dubbo.registry.address = nacos://127.0.0.1:8848?namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932\n#dubbo.registry.parameters.namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932\n\n# @Reference version\ndemo.service.version= 1.0.0\n\ndubbo.application.qosEnable=false\n")),(0,t.kt)("p",null,"\u540c\u6837\u5730\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"dubbo.registry.address")," \u5c5e\u6027\u6307\u5411 Nacos \u6ce8\u518c\u4e2d\u5fc3\uff0c\u5176\u4ed6 Dubbo \u670d\u52a1\u76f8\u5173\u7684\u5143\u4fe1\u606f\u901a\u8fc7 Nacos \u6ce8\u518c\u4e2d\u5fc3\u83b7\u53d6\u3002"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u670d\u52a1\u6d88\u8d39\u65b9\u5f15\u5bfc\u7c7b - ",(0,t.kt)("inlineCode",{parentName:"li"},"DemoServiceConsumerBootstrap"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'package com.alibaba.nacos.example.dubbo.consumer;\n\n\nimport com.alibaba.nacos.example.dubbo.service.DemoService;\nimport org.apache.dubbo.config.spring.context.annotation.EnableDubbo;\nimport org.apache.dubbo.config.annotation.DubboReference;\nimport org.springframework.context.annotation.AnnotationConfigApplicationContext;\nimport org.springframework.context.annotation.PropertySource;\nimport javax.annotation.PostConstruct;\nimport java.io.IOException;\n\n/**\n * {@link DemoService} consumer demo\n * https://nacos.io/zh-cn/docs/use-nacos-with-dubbo.html\n */\n@EnableDubbo\n@PropertySource(value = "classpath:/consumer-config.properties")\npublic class DemoServiceConsumerBootstrap {\n\n    @DubboReference(version = "${demo.service.version}")\n    private DemoService demoService;\n\n    @PostConstruct\n    public void init() {\n        for (int i = 0; i < 10; i++) {\n            System.out.println(demoService.sayName("Nacos"));\n        }\n    }\n\n    public static void main(String[] args) throws IOException {\n        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();\n        context.register(DemoServiceConsumerBootstrap.class);\n        context.refresh();\n        context.close();\n    }\n}\n\n')),(0,t.kt)("p",null,"\u540c\u6837\u5730\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"@EnableDubbo"),"  \u6ce8\u89e3\u6fc0\u6d3b Dubbo \u6ce8\u89e3\u9a71\u52a8\u548c\u5916\u90e8\u5316\u914d\u7f6e\uff0c\u4e0d\u8fc7\u5f53\u524d\u5c5e\u4e8e\u670d\u52a1\u6d88\u8d39\u8005\uff0c\u65e0\u9700\u6307\u5b9a Java \u5305\u540d\u626b\u63cf\u6807\u6ce8 ",(0,t.kt)("inlineCode",{parentName:"p"},"@Service")," \u7684\u670d\u52a1\u5b9e\u73b0\u3002"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"@Reference")," \u662f Dubbo \u8fdc\u7a0b\u670d\u52a1\u7684\u4f9d\u8d56\u6ce8\u5165\u6ce8\u89e3\uff0c\u9700\u8981\u670d\u52a1\u63d0\u4f9b\u65b9\u548c\u6d88\u8d39\u7aef\u7ea6\u5b9a\u63a5\u53e3\uff08interface\uff09\u3001\u7248\u672c\uff08version\uff09\u4ee5\u53ca\u5206\u7ec4\uff08group\uff09\u4fe1\u606f\u3002\u5728\u5f53\u524d\u670d\u52a1\u6d88\u8d39\u793a\u4f8b\u4e2d\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"DemoService")," \u7684\u670d\u52a1\u7248\u672c\u6765\u6e90\u4e8e\u5c5e\u6027\u914d\u7f6e\u6587\u4ef6 ",(0,t.kt)("inlineCode",{parentName:"p"},"consumer-config.properties"),"\u3002"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"@PostConstruct")," \u90e8\u5206\u4ee3\u7801\u5219\u8bf4\u660e\u5f53 ",(0,t.kt)("inlineCode",{parentName:"p"},"DemoServiceConsumerBootstrap")," Bean \u521d\u59cb\u5316\u65f6\uff0c\u6267\u884c\u5341\u6b21 Dubbo \u8fdc\u7a0b\u65b9\u6cd5\u8c03\u7528\u3002"),(0,t.kt)("h4",{id:"\u8fd0\u884c\u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b"},"\u8fd0\u884c\u6ce8\u89e3\u9a71\u52a8\u793a\u4f8b"),(0,t.kt)("p",null,"\u5728\u672c\u5730\u542f\u52a8\u4e24\u6b21 ",(0,t.kt)("inlineCode",{parentName:"p"},"DemoServiceProviderBootstrap"),"\uff0c\u6ce8\u518c\u4e2d\u5fc3\u5c06\u51fa\u73b0\u4e24\u4e2a\u5065\u5eb7\u670d\u52a1\uff1a"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1s9fbzMHqK1RjSZFgXXa7JXXa-2390-122.png",alt:"image-20181213123909636-4675949.png | left | 747x38"})),(0,t.kt)("p",null,"\u518d\u8fd0\u884c ",(0,t.kt)("inlineCode",{parentName:"p"},"DemoServiceConsumerBootstrap"),"\uff0c\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'Service [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\n')),(0,t.kt)("p",null,"\u8fd0\u884c\u65e0\u8bef\uff0c\u5e76\u4e14\u670d\u52a1\u6d88\u8d39\u65b9\u4f7f\u7528\u4e86\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u5c06\u5341\u6b21 RPC \u8c03\u7528\u5e73\u5747\u5206\u644a\u5230\u4e24\u4e2a Dubbo \u670d\u52a1\u63d0\u4f9b\u65b9\u5b9e\u4f8b\u4e2d\u3002"),(0,t.kt)("h3",{id:"spring-xml-\u914d\u7f6e\u9a71\u52a8\u793a\u4f8b"},"Spring XML \u914d\u7f6e\u9a71\u52a8\u793a\u4f8b"),(0,t.kt)("p",null,"Spring XML \u914d\u7f6e\u9a71\u52a8\u662f\u4f20\u7edf Spring \u88c5\u914d\u7ec4\u4ef6\u7684\u7f16\u7a0b\u6a21\u578b\u3002"),(0,t.kt)("h4",{id:"\u670d\u52a1\u63d0\u4f9b\u65b9--xml-\u914d\u7f6e\u9a71\u52a8"},"\u670d\u52a1\u63d0\u4f9b\u65b9  XML \u914d\u7f6e\u9a71\u52a8"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u670d\u52a1\u63d0\u4f9b\u65b9 XML \u4e0a\u4e0b\u6587\u914d\u7f6e\u6587\u4ef6 - ",(0,t.kt)("inlineCode",{parentName:"li"},"/META-INF/spring/dubbo-provider-context.xml"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.3.xsd        http://dubbo.apache.org/schema/dubbo        http://dubbo.apache.org/schema/dubbo/dubbo.xsd">\n\n    \x3c!-- \u63d0\u4f9b\u65b9\u5e94\u7528\u4fe1\u606f\uff0c\u7528\u4e8e\u8ba1\u7b97\u4f9d\u8d56\u5173\u7cfb --\x3e\n    <dubbo:application name="dubbo-provider-xml-demo"/>\n\n    \x3c!-- \u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3 --\x3e\n    <dubbo:registry address="nacos://127.0.0.1:8848"/>\n    \x3c!-- \u5982\u679c\u8981\u4f7f\u7528\u81ea\u5df1\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u914d\u7f6e --\x3e\n    \x3c!-- <dubbo:registry address="nacos://127.0.0.1:8848?namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932" /> --\x3e\n\n    \x3c!-- \u7528dubbo\u534f\u8bae\u5728\u968f\u673a\u7aef\u53e3\u66b4\u9732\u670d\u52a1 --\x3e\n    <dubbo:protocol name="dubbo" port="-1"/>\n\n    \x3c!-- \u58f0\u660e\u9700\u8981\u66b4\u9732\u7684\u670d\u52a1\u63a5\u53e3 --\x3e\n    <dubbo:service interface="com.alibaba.nacos.example.dubbo.service.DemoService" ref="demoService" version="2.0.0"/>\n\n    \x3c!-- \u548c\u672c\u5730bean\u4e00\u6837\u5b9e\u73b0\u670d\u52a1 --\x3e\n    <bean id="demoService" class="com.alibaba.nacos.example.dubbo.service.DefaultService"/>\n</beans>\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u670d\u52a1\u63d0\u4f9b\u65b9\u5f15\u5bfc\u7c7b - ",(0,t.kt)("inlineCode",{parentName:"li"},"DemoServiceProviderXmlBootstrap"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'\npackage com.alibaba.nacos.example.dubbo.provider;\n\nimport com.alibaba.dubbo.demo.service.DemoService;\n\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\nimport java.io.IOException;\n\n/**\n * {@link DemoService} provider demo XML bootstrap\n */\npublic class DemoServiceProviderXmlBootstrap {\n\n    public static void main(String[] args) throws IOException {\n        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext();\n        context.setConfigLocation("/META-INF/spring/dubbo-provider-context.xml");\n        context.refresh();\n        System.out.println("DemoService provider (XML) is starting...");\n        System.in.read();\n    }\n}\n')),(0,t.kt)("h4",{id:"\u670d\u52a1\u6d88\u8d39\u65b9-xml-\u914d\u7f6e\u9a71\u52a8"},"\u670d\u52a1\u6d88\u8d39\u65b9 XML \u914d\u7f6e\u9a71\u52a8"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u670d\u52a1\u6d88\u8d39\u65b9 XML \u4e0a\u4e0b\u6587\u914d\u7f6e\u6587\u4ef6 - ",(0,t.kt)("inlineCode",{parentName:"li"},"/META-INF/spring/dubbo-consumer-context.xml"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans        http://www.springframework.org/schema/beans/spring-beans-4.3.xsd        http://dubbo.apache.org/schema/dubbo        http://dubbo.apache.org/schema/dubbo/dubbo.xsd">\n\n    \x3c!-- \u63d0\u4f9b\u65b9\u5e94\u7528\u4fe1\u606f\uff0c\u7528\u4e8e\u8ba1\u7b97\u4f9d\u8d56\u5173\u7cfb --\x3e\n    <dubbo:application name="dubbo-consumer-xml-demo"/>\n\n    \x3c!-- \u4f7f\u7528 Nacos \u6ce8\u518c\u4e2d\u5fc3 --\x3e\n    <dubbo:registry address="nacos://127.0.0.1:8848"/>\n    \x3c!-- \u5982\u679c\u8981\u4f7f\u7528\u81ea\u5df1\u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u914d\u7f6e --\x3e\n    \x3c!-- <dubbo:registry address="nacos://127.0.0.1:8848?namespace=5cbb70a5-xxx-xxx-xxx-d43479ae0932" /> --\x3e\n\n    \x3c!-- \u5f15\u7528\u670d\u52a1\u63a5\u53e3 --\x3e\n    <dubbo:reference id="demoService" interface="com.alibaba.nacos.example.dubbo.service.DemoService" version="2.0.0"/>\n\n</beans>\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u670d\u52a1\u6d88\u8d39\u65b9\u5f15\u5bfc\u7c7b - ",(0,t.kt)("inlineCode",{parentName:"li"},"DemoServiceConsumerXmlBootstrap"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'\npackage com.alibaba.nacos.example.dubbo.consumer;\n\nimport com.alibaba.dubbo.demo.service.DemoService;\n\nimport org.springframework.context.support.ClassPathXmlApplicationContext;\n\nimport java.io.IOException;\n\n/**\n * {@link DemoService} consumer demo XML bootstrap\n */\npublic class DemoServiceConsumerXmlBootstrap {\n\n    public static void main(String[] args) throws IOException {\n        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext();\n        context.setConfigLocation("/META-INF/spring/dubbo-consumer-context.xml");\n        context.refresh();\n        System.out.println("DemoService consumer (XML) is starting...");\n        DemoService demoService = context.getBean("demoService", DemoService.class);\n        for (int i = 0; i < 10; i++) {\n            System.out.println(demoService.sayName("Nacos"));\n        }\n        context.close();\n    }\n}\n')),(0,t.kt)("h4",{id:"\u8fd0\u884c-xml-\u914d\u7f6e\u9a71\u52a8\u793a\u4f8b"},"\u8fd0\u884c XML \u914d\u7f6e\u9a71\u52a8\u793a\u4f8b"),(0,t.kt)("p",null,"\u540c\u6837\u5730\uff0c\u5148\u542f\u52a8\u4e24\u4e2a ",(0,t.kt)("inlineCode",{parentName:"p"},"DemoServiceProviderXmlBootstrap")," \u5f15\u5bfc\u7c7b\uff0c\u89c2\u5bdf Nacos \u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\u63d0\u4f9b\u8005\u53d8\u5316\uff1a"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1HCfbzMHqK1RjSZFgXXa7JXXa-2388-106.png",alt:"image-20181213125527201-4676927.png | left | 747x33"})),(0,t.kt)("p",null,"XML \u914d\u7f6e\u9a71\u52a8\u7684\u670d\u52a1\u7248\u672c\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"2.0.0"),"\uff0c\u56e0\u6b64\u6ce8\u518c\u670d\u52a1\u65e0\u8bef\u3002"),(0,t.kt)("p",null,"\u518d\u8fd0\u884c\u670d\u52a1\u6d88\u8d39\u8005\u5f15\u5bfc\u7c7b ",(0,t.kt)("inlineCode",{parentName:"p"},"DemoServiceConsumerXmlBootstrap"),"\uff0c\u89c2\u5bdf\u63a7\u5236\u53f0\u8f93\u51fa\u5185\u5bb9\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'Service [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\nService [name :demoService , port : 20880] sayName("Nacos") : Hello,Nacos\n')),(0,t.kt)("p",null,"\u7ed3\u679c\u540c\u6837\u8fd0\u884c\u548c\u8d1f\u8f7d\u5747\u8861\u6b63\u5e38\uff0c\u4e0d\u8fc7\u7531\u4e8e\u5f53\u524d\u793a\u4f8b\u5c1a\u672a\u6dfb\u52a0\u5c5e\u6027 ",(0,t.kt)("inlineCode",{parentName:"p"},"demo.service.name")," \u7684\u7f18\u6545\uff0c\u56e0\u6b64\uff0c\u201cname\u201d\u90e8\u5206\u4fe1\u606f\u8f93\u51fa\u4e3a ",(0,t.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,t.kt)("p",null,"\u5982\u679c\u60a8\u5173\u6ce8\u6216\u559c\u7231 Dubbo \u4ee5\u53ca Nacos \u7b49\u5f00\u6e90\u5de5\u7a0b\uff0c\u4e0d\u59a8\u4e3a\u5b83\u4eec\u70b9 \u201cstar\u201d\uff0c\u52a0\u6cb9\u6253\u6c14\u94fe\u63a5\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Apache Dubbo\uff1a",(0,t.kt)("a",{parentName:"li",href:"https://github.com/apache/dubbo"},"https://github.com/apache/dubbo")),(0,t.kt)("li",{parentName:"ul"},"Dubbo Nacos Registry\uff1a",(0,t.kt)("a",{parentName:"li",href:"https://github.com/apache/dubbo/tree/master/dubbo-registry/dubbo-registry-nacos"},"https://github.com/apache/dubbo/tree/master/dubbo-registry/dubbo-registry-nacos")),(0,t.kt)("li",{parentName:"ul"},"Alibaba Nacos\uff1a",(0,t.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"https://github.com/alibaba/nacos"))))}b.isMDXComponent=!0}}]);