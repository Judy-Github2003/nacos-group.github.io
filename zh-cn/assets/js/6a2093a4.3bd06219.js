"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=r,k=s["".concat(p,".").concat(g)]||s[g]||m[g]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u914d\u7f6e\u52a0\u5bc6",keywords:["AES","encryption","\u914d\u7f6e\u52a0\u5bc6"],description:"\u914d\u7f6e\u52a0\u5bc6"},o=void 0,l={unversionedId:"plugin/config-encryption-plugin",id:"version-2.X/plugin/config-encryption-plugin",title:"\u914d\u7f6e\u52a0\u5bc6",description:"\u914d\u7f6e\u52a0\u5bc6",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-2.X/plugin/config-encryption-plugin.md",sourceDirName:"plugin",slug:"/plugin/config-encryption-plugin",permalink:"/zh-cn/docs/plugin/config-encryption-plugin",draft:!1,tags:[],version:"2.X",frontMatter:{title:"\u914d\u7f6e\u52a0\u5bc6",keywords:["AES","encryption","\u914d\u7f6e\u52a0\u5bc6"],description:"\u914d\u7f6e\u52a0\u5bc6"},sidebar:"docs",previous:{title:"\u9274\u6743\u63d2\u4ef6",permalink:"/zh-cn/docs/plugin/auth-plugin"},next:{title:"\u591a\u6570\u636e\u6e90",permalink:"/zh-cn/docs/plugin/datasource-plugin"}},p={},c=[],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fdd\u8bc1\u7528\u6237\u654f\u611f\u914d\u7f6e\u6570\u636e\u7684\u5b89\u5168\uff0cNacos \u63d0\u4f9b\u4e86\u914d\u7f6e\u52a0\u5bc6\u7684\u65b0\u7279\u6027\u3002\u964d\u4f4e\u4e86\u7528\u6237\u4f7f\u7528\u7684\u98ce\u9669\uff0c\u4e5f\u4e0d\u9700\u8981\u518d\u5bf9\u914d\u7f6e\u8fdb\u884c\u5355\u72ec\u7684\u52a0\u5bc6\u5904\u7406\u3002")),(0,r.kt)("h1",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7248\u672c:")),(0,r.kt)("p",null,"\u8001\u7248\u672c\u6682\u65f6\u4e0d\u517c\u5bb9\uff0c\u76ee\u524d\u53ea\u57fa\u4e8e2.x\u7248\u672c\u8fdb\u884c\u4e86\u6539\u9020\uff0c\u63a8\u8350\u7248\u672c > 2.0.4\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5185\u5d4c\u6570\u636e\u5e93\u542f\u52a8:")),(0,r.kt)("p",null,"\u6570\u636e\u5e93\u8868 config_info\u3001config_info_beta\u3001his_config_info\u4e2d\u9700\u8981\u65b0\u589e\u5b57\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted_data_key")," \uff0c\u7528\u6765\u5b58\u50a8\u6bcf\u4e00\u4e2a\u914d\u7f6e\u9879\u52a0\u5bc6\u4f7f\u7528\u7684\u79d8\u94a5\u3002\u65b0\u7248\u672c\u7684\u9ed8\u8ba4\u521b\u5efa\u8868\u7684sql\u4e2d\u5df2\u7ecf\u6dfb\u52a0\u8be5\u5b57\u6bb5\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e4b\u524d\u4f7f\u7528\u8fc7\u5185\u5d4c\u6570\u636e\u5e93\u7684\u5355\u673a\u6a21\u5f0f\u542f\u52a8\uff0c\u5219\u9700\u8981\u5220\u9664 nacos/data \u6587\u4ef6\u5939\uff0c\u5728\u91cd\u65b0\u542f\u52a8\u4f1a\u91cd\u65b0\u521b\u5efa\u8868\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MySQL\u542f\u52a8:")),(0,r.kt)("p",null,"\u6570\u636e\u5e93\u8868 config_info\u3001config_info_beta\u3001his_config_info\u4e2d\u9700\u8981\u65b0\u589e\u5b57\u6bb5 ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted_data_key")," \uff0c\u7528\u6765\u5b58\u50a8\u6bcf\u4e00\u4e2a\u914d\u7f6e\u9879\u52a0\u5bc6\u4f7f\u7528\u7684\u79d8\u94a5\u3002\u65b0\u7248\u672c\u7684\u9ed8\u8ba4\u521b\u5efa\u8868\u7684sql\u4e2d\u5df2\u7ecf\u6dfb\u52a0\u8be5\u5b57\u6bb5\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u76ee\u524d\u5df2\u7ecf\u642d\u5efa\u597d\u7684 Nacos \u4f7f\u7528\u4ee5\u4e0b sql \u5c06\u5b57\u6bb5\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684\u8868\u4e2d\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE table_name ADD COLUMN `encrypted_data_key` text  NOT NULL COMMENT '\u79d8\u94a5'"))),(0,r.kt)("h1",{id:"\u63d2\u4ef6\u5316\u5b9e\u73b0"},"\u63d2\u4ef6\u5316\u5b9e\u73b0"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/008i3skNly1gvsu112vnnj314b0u0764.jpg",alt:null})),(0,r.kt)("p",null,"\u901a\u8fc7 SPI \u7684\u673a\u5236\u62bd\u8c61\u51fa\u52a0\u5bc6\u548c\u89e3\u5bc6\u7684\u64cd\u4f5c\uff0cNacos \u9ed8\u8ba4\u63d0\u4f9b ",(0,r.kt)("inlineCode",{parentName:"p"},"AES")," \u7684\u5b9e\u73b0\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u52a0\u89e3\u5bc6\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002\u5177\u4f53\u7684\u5b9e\u73b0\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-plugin"},"nacos-plugin")," \u4ed3\u5e93\u3002"),(0,r.kt)("p",null,"\u5728 Nacos \u670d\u52a1\u7aef\u542f\u52a8\u7684\u65f6\u5019\u5c31\u4f1a\u52a0\u8f7d\u6240\u6709\u4f9d\u8d56\u7684\u52a0\u89e3\u5bc6\u7b97\u6cd5\uff0c\u7136\u540e\u901a\u8fc7\u53d1\u5e03\u914d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"dataId")," \u7684\u524d\u7f00\u6765\u8fdb\u884c\u5339\u914d\u662f\u5426\u9700\u8981\u52a0\u89e3\u5bc6\u548c\u4f7f\u7528\u7684\u52a0\u89e3\u5bc6\u7b97\u6cd5\u3002"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u53d1\u5e03\u7684\u914d\u7f6e\u4f1a\u5728\u5ba2\u6237\u7aef\u901a\u8fc7filter\u5b8c\u6210\u52a0\u89e3\u5bc6\uff0c\u4e5f\u5c31\u662f\u914d\u7f6e\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u90fd\u662f\u5bc6\u6587\u7684\u3002\u800c\u63a7\u5236\u53f0\u53d1\u5e03\u7684\u914d\u7f6e\u4f1a\u5728\u670d\u52a1\u7aef\u8fdb\u884c\u5904\u7406\u3002"),(0,r.kt)("h1",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,r.kt)("p",null,"Nacos \u52a0\u89e3\u5bc6\u63d2\u4ef6\u662f\u53ef\u63d2\u62d4\u7684\uff0c\u6709\u6ca1\u6709\u90fd\u4e0d\u5f71\u54cd Nacos \u7684\u6838\u5fc3\u529f\u80fd\u7684\u8fd0\u884c\u3002\u5982\u679c\u60f3\u8981\u4f7f\u7528 Naocs \u7684\u914d\u7f6e\u52a0\u89e3\u5bc6\u529f\u80fd\u9700\u8981\u5355\u72ec\u5f15\u7528\u52a0\u5bc6\u7b97\u6cd5\u7684\u5b9e\u73b0\u3002\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u90fd\u901a\u8fc7\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u6765\u4f7f\u7528 AES \u52a0\u89e3\u5bc6\u7b97\u6cd5\uff0c\u670d\u52a1\u7aef\u63a8\u8350\u6dfb\u52a0\u5230 config \u6a21\u5757\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-aes-encryption-plugin</artifactId>\n            <version>${nacos-aes-encryption-plugin.version}</version>\n        </dependency>\n")),(0,r.kt)("p",null,"${nacos-aes-encryption-plugin.version} \u53ef\u4ee5\u83b7\u53d6\u63d2\u4ef6\u7684\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u63d2\u4ef6\u9700\u8981\u81ea\u5df1\u7f16\u8bd1,\u5e76\u672a\u4e0a\u4f20\u81f3maven\u4e2d\u592e\u4ed3\u5e93")),(0,r.kt)("h1",{id:"\u5982\u4f55\u7f16\u8bd1"},"\u5982\u4f55\u7f16\u8bd1"),(0,r.kt)("p",null,"\u7f16\u8bd1\u63d2\u4ef6\u4e4b\u524d\u9700\u8981\u5148\u7f16\u8bd1",(0,r.kt)("inlineCode",{parentName:"p"},"nacos"),"\u5e76\u5b89\u88c5\u81f3\u672c\u5730\u4ed3\u5e93."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"git clone ",(0,r.kt)("a",{parentName:"li",href:"mailto:git@github.com"},"git@github.com"),":alibaba/nacos.git"),(0,r.kt)("li",{parentName:"ol"},"cd nacos && mvn -B clean package install -Dmaven.test.skip=true")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u82e5\u51fa\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"revision"),"\u53d8\u91cf\u65e0\u6cd5\u89e3\u6790,\u8bf7\u66f4\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"maven"),"\u81f3\u6700\u65b0\u7248\u672c")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"git clone ",(0,r.kt)("a",{parentName:"li",href:"mailto:git@github.com"},"git@github.com"),":nacos-group/nacos-plugin.git"),(0,r.kt)("li",{parentName:"ol"},"mvn install")),(0,r.kt)("p",null,"\u5efa\u8bae\u4e0a\u4f20\u5230\u516c\u53f8\u7684maven\u4ed3\u5e93"),(0,r.kt)("h1",{id:"\u521b\u5efa\u52a0\u5bc6\u914d\u7f6e"},"\u521b\u5efa\u52a0\u5bc6\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00 Nacos \u63a7\u5236\u53f0\uff0c\u70b9\u51fb\u65b0\u5efa\u914d\u7f6e\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0cxaklw10j21g20u0ac8.jpg",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u914d\u7f6e\u524d\u7f00\u4f7f\u7528cipher-","[\u52a0\u5bc6\u7b97\u6cd5\u540d\u79f0]","-dataId\u6765\u6807\u8bc6\u8fd9\u4e2a\u914d\u7f6e\u9700\u8981\u52a0\u5bc6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u8bc6\u522b\u5e76\u52a0\u5bc6\u3002\u4f8b\u5982\u4f7f\u7528 AES \u7b97\u6cd5\u6765\u89e3\u5bc6\u914d\u7f6e\uff1acipher-aes-application-dev.yml\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0cxs40s2tj21b40u0whw.jpg",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u70b9\u51fb\u4fdd\u5b58,\u67e5\u770b\u6570\u636e\u5e93"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/e6c9d24ely1h0cxwhdc77j21xm0bumz2.jpg",alt:null})))))}m.isMDXComponent=!0}}]);