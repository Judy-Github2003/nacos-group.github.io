"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Nacos \u878d\u5408 Spring Boot\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",keywords:["Nacos","Spring Boot"],description:"\u672c\u6587\u4e3b\u8981\u9762\u5411 Spring Boot \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u53d1\u73b0\u3002"},i="Nacos \u878d\u5408 Spring Boot\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",p={unversionedId:"ecology/use-nacos-with-spring-boot",id:"version-2.X/ecology/use-nacos-with-spring-boot",title:"Nacos \u878d\u5408 Spring Boot\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",description:"\u672c\u6587\u4e3b\u8981\u9762\u5411 Spring Boot \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u53d1\u73b0\u3002",source:"@site/versioned_docs/version-2.X/ecology/use-nacos-with-spring-boot.md",sourceDirName:"ecology",slug:"/ecology/use-nacos-with-spring-boot",permalink:"/docs/ecology/use-nacos-with-spring-boot",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos \u878d\u5408 Spring Boot\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",keywords:["Nacos","Spring Boot"],description:"\u672c\u6587\u4e3b\u8981\u9762\u5411 Spring Boot \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u53d1\u73b0\u3002"},sidebar:"docs",previous:{title:"Nacos \u878d\u5408 Spring\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",permalink:"/docs/ecology/use-nacos-with-spring"},next:{title:"Nacos \u878d\u5408 Spring Cloud\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3",permalink:"/docs/ecology/use-nacos-with-spring-cloud"}},l={},c=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406",id:"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406",level:2},{value:"\u542f\u52a8\u670d\u52a1\u53d1\u73b0",id:"\u542f\u52a8\u670d\u52a1\u53d1\u73b0",level:2},{value:"\u76f8\u5173\u9879\u76ee",id:"\u76f8\u5173\u9879\u76ee",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nacos-\u878d\u5408-spring-boot\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3"},"Nacos \u878d\u5408 Spring Boot\uff0c\u6210\u4e3a\u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u9762\u5411 Spring Boot \u7684\u4f7f\u7528\u8005\uff0c\u901a\u8fc7\u4e24\u4e2a\u793a\u4f8b\u6765\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Nacos \u6765\u5b9e\u73b0\u5206\u5e03\u5f0f\u73af\u5883\u4e0b\u7684\u914d\u7f6e\u7ba1\u7406\u548c\u670d\u52a1\u53d1\u73b0\u3002"),(0,o.kt)("p",null,"\u5173\u4e8e Nacos Spring Boot \u7684\u8be6\u7ec6\u6587\u6863\u8bf7\u53c2\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-spring-boot-project/wiki/spring-boot-0.2.2-%E4%BB%A5%E5%8F%8A-0.1.2%E7%89%88%E6%9C%AC%E6%96%B0%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C"},"nacos-spring-boot-project"),"\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Nacos Server \u548c nacos-config-spring-boot-starter \u5b9e\u73b0\u914d\u7f6e\u7684\u52a8\u6001\u53d8\u66f4\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Nacos Server \u548c nacos-discovery-spring-boot-starter \u5b9e\u73b0\u670d\u52a1\u7684\u6ce8\u518c\u4e0e\u53d1\u73b0\u3002")),(0,o.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u5148\u4e0b\u8f7d Nacos \u5e76\u542f\u52a8 Nacos server\u3002\u64cd\u4f5c\u6b65\u9aa4\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/quickstart/quick-start"},"Nacos \u5feb\u901f\u5165\u95e8"),"\u3002"),(0,o.kt)("h2",{id:"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406"},"\u542f\u52a8\u914d\u7f6e\u7ba1\u7406"),(0,o.kt)("p",null,"\u542f\u52a8\u4e86 Nacos server \u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u793a\u4f8b\u4ee3\u7801\uff0c\u4e3a\u60a8\u7684 Spring Boot \u5e94\u7528\u542f\u52a8 Nacos \u914d\u7f6e\u7ba1\u7406\u670d\u52a1\u4e86\u3002\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-boot-example/nacos-spring-boot-config-example"},"nacos-spring-boot-config-example")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4f9d\u8d56\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.boot</groupId>\n    <artifactId>nacos-config-spring-boot-starter</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u7248\u672c ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-config-spring-boot-starter"},"0.2.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 2.x \u7248\u672c\uff0c\u7248\u672c ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-config-spring-boot-starter"},"0.1.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 1.x \u7248\u672c\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"application.properties")," \u4e2d\u914d\u7f6e Nacos server \u7684\u5730\u5740\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nacos.config.server-addr=127.0.0.1:8848\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"@NacosPropertySource")," \u52a0\u8f7d ",(0,o.kt)("inlineCode",{parentName:"li"},"dataId")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"example")," \u7684\u914d\u7f6e\u6e90\uff0c\u5e76\u5f00\u542f\u81ea\u52a8\u66f4\u65b0\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},'@SpringBootApplication\n@NacosPropertySource(dataId = "example", autoRefreshed = true)\npublic class NacosConfigApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(NacosConfigApplication.class, args);\n    }\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 Nacos \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"@NacosValue")," \u6ce8\u89e3\u8bbe\u7f6e\u5c5e\u6027\u503c\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'@Controller\n@RequestMapping("config")\npublic class ConfigController {\n\n    @NacosValue(value = "${useLocalCache:false}", autoRefreshed = true)\n    private boolean useLocalCache;\n\n    @RequestMapping(value = "/get", method = GET)\n    @ResponseBody\n    public boolean get() {\n        return useLocalCache;\n    }\n}\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"NacosConfigApplication"),"\uff0c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://localhost:8080/config/get"),"\uff0c\u8fd4\u56de\u5185\u5bb9\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/user/open-api"},"Nacos Open API")," \u5411 Nacos server \u53d1\u5e03\u914d\u7f6e\uff1adataId \u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"example"),"\uff0c\u5185\u5bb9\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"useLocalCache=true")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=example&group=DEFAULT_GROUP&content=useLocalCache=true"\n')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"\u518d\u6b21\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8080/config/get"),"\uff0c\u6b64\u65f6\u8fd4\u56de\u5185\u5bb9\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u8bf4\u660e\u7a0b\u5e8f\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"useLocalCache"),"\u503c\u5df2\u7ecf\u88ab\u52a8\u6001\u66f4\u65b0\u4e86\u3002")),(0,o.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1\u53d1\u73b0"},"\u542f\u52a8\u670d\u52a1\u53d1\u73b0"),(0,o.kt)("p",null,"\u672c\u8282\u6f14\u793a\u5982\u4f55\u5728\u60a8\u7684 Spring Boot \u9879\u76ee\u4e2d\u542f\u52a8 Nacos \u7684\u670d\u52a1\u53d1\u73b0\u529f\u80fd\u3002\u5b8c\u6574\u793a\u4f8b\u4ee3\u7801\u8bf7\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-examples/tree/master/nacos-spring-boot-example/nacos-spring-boot-discovery-example"},"nacos-spring-boot-discovery-example")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4f9d\u8d56\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>com.alibaba.boot</groupId>\n    <artifactId>nacos-discovery-spring-boot-starter</artifactId>\n    <version>${latest.version}</version>\n</dependency>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u7248\u672c ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-discovery-spring-boot-starter"},"0.2.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 2.x \u7248\u672c\uff0c\u7248\u672c ",(0,o.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.alibaba.boot/nacos-discovery-spring-boot-starter"},"0.1.x.RELEASE")," \u5bf9\u5e94\u7684\u662f Spring Boot 1.x \u7248\u672c\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"application.properties")," \u4e2d\u914d\u7f6e Nacos server \u7684\u5730\u5740\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nacos.discovery.server-addr=127.0.0.1:8848\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"@NacosInjected")," \u6ce8\u5165 Nacos \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"NamingService")," \u5b9e\u4f8b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'@Controller\n@RequestMapping("discovery")\npublic class DiscoveryController {\n\n    @NacosInjected\n    private NamingService namingService;\n\n    @RequestMapping(value = "/get", method = GET)\n    @ResponseBody\n    public List<Instance> get(@RequestParam String serviceName) throws NacosException {\n        return namingService.getAllInstances(serviceName);\n    }\n}\n\n@SpringBootApplication\npublic class NacosDiscoveryApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(NacosDiscoveryApplication.class, args);\n    }\n}\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"NacosDiscoveryApplication"),"\uff0c\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://localhost:8080/discovery/get?serviceName=example"),"\uff0c\u6b64\u65f6\u8fd4\u56de\u4e3a\u7a7a JSON \u6570\u7ec4",(0,o.kt)("inlineCode",{parentName:"p"},"[]"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u901a\u8fc7\u8c03\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/docs/guide/user/open-api"},"Nacos Open API")," \u5411  Nacos server \u6ce8\u518c\u4e00\u4e2a\u540d\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," \u670d\u52a1"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?serviceName=example&ip=127.0.0.1&port=8080'\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u518d\u6b21\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"li"},"curl http://localhost:8080/discovery/get?serviceName=example"),"\uff0c\u6b64\u65f6\u8fd4\u56de\u5185\u5bb9\u4e3a\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n  {\n    "instanceId": "127.0.0.1-8080-DEFAULT-example",\n    "ip": "127.0.0.1",\n    "port": 8080,\n    "weight": 1.0,\n    "healthy": true,\n    "cluster": {\n      "serviceName": null,\n      "name": "",\n      "healthChecker": {\n        "type": "TCP"\n      },\n      "defaultPort": 80,\n      "defaultCheckPort": 80,\n      "useIPPort4Check": true,\n      "metadata": {}\n    },\n    "service": null,\n    "metadata": {}\n  }\n]\n')),(0,o.kt)("h2",{id:"\u76f8\u5173\u9879\u76ee"},"\u76f8\u5173\u9879\u76ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos"},"Nacos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-project"},"Nacos Spring")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nacos-group/nacos-spring-boot-project"},"Nacos Spring Boot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/alibaba/spring-cloud-alibaba"},"Spring Cloud Alibaba"))))}m.isMDXComponent=!0}}]);