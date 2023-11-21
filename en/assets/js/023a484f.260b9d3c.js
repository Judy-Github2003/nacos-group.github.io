"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7563],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>N});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=n.createContext({}),p=function(t){var a=n.useContext(o),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},u=function(t){var a=p(t.components);return n.createElement(o.Provider,{value:a},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),d=p(e),k=r,N=d["".concat(o,".").concat(k)]||d[k]||g[k]||l;return e?n.createElement(N,i(i({ref:a},u),{},{components:e})):n.createElement(N,i({ref:a},u))}));function N(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=t,m[d]="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=e[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},58426:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=e(87462),r=(e(67294),e(3905));const l={title:"Developers",keywords:["nacos","developers","committer","pmc","nacos team"],description:"Nacos developers page"},i="Developers",m={unversionedId:"community/nacos-dev",id:"version-2.X/community/nacos-dev",title:"Developers",description:"Nacos developers page",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/community/nacos-dev.md",sourceDirName:"community",slug:"/community/nacos-dev",permalink:"/en/docs/community/nacos-dev",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Developers",keywords:["nacos","developers","committer","pmc","nacos team"],description:"Nacos developers page"},sidebar:"docs",previous:{title:"Community",permalink:"/en/docs/community/"}},o={},p=[{value:"Nacos Developer Roles",id:"nacos-developer-roles",level:2},{value:"Maintainer",id:"maintainer",level:3},{value:"Committer",id:"committer",level:3},{value:"Contributor",id:"contributor",level:3},{value:"Nacos Developer Rights and Obligations",id:"nacos-developer-rights-and-obligations",level:3},{value:"Nacos Team",id:"nacos-team",level:2},{value:"Committers",id:"committers",level:3},{value:"Contributors",id:"contributors",level:3}],u={toc:p},d="wrapper";function g(t){let{components:a,...e}=t;return(0,r.kt)(d,(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developers"},"Developers"),(0,r.kt)("h2",{id:"nacos-developer-roles"},"Nacos Developer Roles"),(0,r.kt)("p",null,"Nacos developers include three roles: Maintainer, Committer, and Contributor. The standard definitions for each role are as follows."),(0,r.kt)("h3",{id:"maintainer"},"Maintainer"),(0,r.kt)("p",null,"Maintainer is an individual who has made a significant contribution to the evolution and development of the Nacos project, including projects under the nacos-group. Specifically includes the following criteria:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Completing the design and development of multiple key modules or projects, is an core developer of the project"),(0,r.kt)("li",{parentName:"ul"},"Continuous investment and passion, can actively participate in the maintenance of related matters such as community, official website, issue, PR, etc."),(0,r.kt)("li",{parentName:"ul"},"Has a visible influence in the community and is able to represent Nacos in important community meetings and events"),(0,r.kt)("li",{parentName:"ul"},"Have the consciousness and ability to cultivate Committer and Contributor")),(0,r.kt)("h3",{id:"committer"},"Committer"),(0,r.kt)("p",null,"Committer is an individual with write access to the Nacos repository and includes the following criteria:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An individual who can contribute to the issue and PR continuously for a long time;"),(0,r.kt)("li",{parentName:"ul"},"Participate in the maintenance of the issue list and discussion of important features;"),(0,r.kt)("li",{parentName:"ul"},"Participate in code review;")),(0,r.kt)("h3",{id:"contributor"},"Contributor"),(0,r.kt)("p",null,"Contributor is an individual who contributes to the Nacos project. The standard is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submitted a PR that is merged;")),(0,r.kt)("h3",{id:"nacos-developer-rights-and-obligations"},"Nacos Developer Rights and Obligations"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/333810/1560152742873-65f7dbcb-38cf-4840-aa9c-5c6cfa926cec.png#align=left&display=inline&height=502&name=image.png&originHeight=751&originWidth=1113&size=235532&status=done&width=744",alt:"image.png"})),(0,r.kt)("h2",{id:"nacos-team"},"Nacos Team"),(0,r.kt)("p",null,"This page shows Nacos developers and continues to expand. The list is not prioritized."),(0,r.kt)("h3",{id:"committers"},"Committers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Github ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Organization"),(0,r.kt)("th",{parentName:"tr",align:null},"Roles"),(0,r.kt)("th",{parentName:"tr",align:null},"Mail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/xuechaos"},"xuechaos")),(0,r.kt)("td",{parentName:"tr",align:null},"Xuechao Xing"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:xingxuechao@alibaba-inc.com"},"xingxuechao@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/yanlinly"},"yanlinly")),(0,r.kt)("td",{parentName:"tr",align:null},"Yanlin Li"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:yan.lin2009@163.com"},"yan.lin2009@163.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/loadchange"},"loadchange")),(0,r.kt)("td",{parentName:"tr",align:null},"Yanmin Wang"),(0,r.kt)("td",{parentName:"tr",align:null},"ele"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:wym177771@alibaba-inc.com"},"wym177771@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nkorange"},"nkorange")),(0,r.kt)("td",{parentName:"tr",align:null},"Pengfei Zhu"),(0,r.kt)("td",{parentName:"tr",align:null},"Shopee"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:zpf.073@gmail.com"},"zpf.073@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/chuntaojun"},"chuntaojun")),(0,r.kt)("td",{parentName:"tr",align:null},"Chuntao Liao"),(0,r.kt)("td",{parentName:"tr",align:null},"Tencent"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:liaochuntao@live.com"},"liaochuntao@live.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/paderlol"},"paderlol")),(0,r.kt)("td",{parentName:"tr",align:null},"Pader Zhang"),(0,r.kt)("td",{parentName:"tr",align:null},"Shareworks"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:huangbbbaihao@gmail.com"},"huangbbbaihao@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/KomachiSion"},"KomachiSion")),(0,r.kt)("td",{parentName:"tr",align:null},"Yi Yang"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:yangyi@apache.org"},"yangyi@apache.org"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/sanxun0325"},"sanxun0325")),(0,r.kt)("td",{parentName:"tr",align:null},"Binbin Zhang"),(0,r.kt)("td",{parentName:"tr",align:null},"DiDi"),(0,r.kt)("td",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:bbz17640380550@163.com"},"bbz17640380550@163.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/zhangjimmy"},"zhangjimmy")),(0,r.kt)("td",{parentName:"tr",align:null},"Bo Zhang"),(0,r.kt)("td",{parentName:"tr",align:null},"Huya"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:zhangjimmy@foxmail.com"},"zhangjimmy@foxmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nanamikon"},"nanamikon")),(0,r.kt)("td",{parentName:"tr",align:null},"Jian Zhou"),(0,r.kt)("td",{parentName:"tr",align:null},"Huya"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:nanamikon@gmail.com"},"nanamikon@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/lzp0412"},"lzp0412")),(0,r.kt)("td",{parentName:"tr",align:null},"Zhipeng Li"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Financial"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:641785844@qq.com"},"641785844@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pguo65535"},"pguo65535")),(0,r.kt)("td",{parentName:"tr",align:null},"Ping Guo"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:guoping.gp@alibaba-inc.com"},"guoping.gp@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hxy1991"},"hxy1991")),(0,r.kt)("td",{parentName:"tr",align:null},"Xiaoyu Huang"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:huangxiaoyu1018@gmail.com"},"huangxiaoyu1018@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/mingyixu"},"mingyixu")),(0,r.kt)("td",{parentName:"tr",align:null},"Xiaochun Xu"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:xiaochun.xxc@alibaba-inc.com"},"xiaochun.xxc@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JianweiWang"},"JianweiWang")),(0,r.kt)("td",{parentName:"tr",align:null},"Jianwei Wang"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:wangjianwei.nwpu@gmail.com"},"wangjianwei.nwpu@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/jameslcj"},"jameslcj")),(0,r.kt)("td",{parentName:"tr",align:null},"Chen li"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:zhichen.lc@alibaba-inc.com"},"zhichen.lc@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/mercyblitz"},"mercyblitz")),(0,r.kt)("td",{parentName:"tr",align:null},"Mercy Ma"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:taogu.mxx@alibaba-inc.com"},"taogu.mxx@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/fangjian0423"},"fangjian0423")),(0,r.kt)("td",{parentName:"tr",align:null},"Jian Fang"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:fangjian.fj@alibaba-inc.com"},"fangjian.fj@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/wyp12"},"wyp12")),(0,r.kt)("td",{parentName:"tr",align:null},"Yuanpiao Wu"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:caogu.wyp@antfin.com"},"caogu.wyp@antfin.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/TsingLiang"},"TsingLiang")),(0,r.kt)("td",{parentName:"tr",align:null},"Liang qing"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:qingliang.ql@alibaba-inc.com"},"qingliang.ql@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/caojiele"},"caojiele")),(0,r.kt)("td",{parentName:"tr",align:null},"Jiele Cao"),(0,r.kt)("td",{parentName:"tr",align:null},"Sinocare"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:caojiele1225@126.com"},"caojiele1225@126.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/KeRan213539"},"KeRan213539")),(0,r.kt)("td",{parentName:"tr",align:null},"Ying Xie"),(0,r.kt)("td",{parentName:"tr",align:null},"ShengDa"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:213539@qq.com"},"213539@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/zongtanghu"},"zongtanghu")),(0,r.kt)("td",{parentName:"tr",align:null},"Zongtang Hu"),(0,r.kt)("td",{parentName:"tr",align:null},"China Mobile Cloud Centre"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:zongtanghu@hotmail.com"},"zongtanghu@hotmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Maijh97"},"Maijh97")),(0,r.kt)("td",{parentName:"tr",align:null},"Jianhui Mai"),(0,r.kt)("td",{parentName:"tr",align:null},"Yunliuchain"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:xiaomai_h@163.com"},"xiaomai_h@163.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/wangweizZZ"},"wangweizZZ")),(0,r.kt)("td",{parentName:"tr",align:null},"Wei Wang"),(0,r.kt)("td",{parentName:"tr",align:null},"China Mobile Cloud Centre"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:wwfortunate@gmail.com"},"wwfortunate@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/horizonzy"},"horizonzy")),(0,r.kt)("td",{parentName:"tr",align:null},"Yan Zhao"),(0,r.kt)("td",{parentName:"tr",align:null},"Dmall(Cheng Du)"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:1060026287@qq.com"},"1060026287@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/catcherwong"},"catcherwong")),(0,r.kt)("td",{parentName:"tr",align:null},"Wenqing Huang"),(0,r.kt)("td",{parentName:"tr",align:null},"Lianou Health Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:catcher_hwq@outlook.com"},"catcher_hwq@outlook.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/TTTTTAAAAAKKKKEEEENNNN"},"TTTTTAAAAAKKKKEEEENNNN")),(0,r.kt)("td",{parentName:"tr",align:null},"Hanyu Liu"),(0,r.kt)("td",{parentName:"tr",align:null},"Tencent"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:tensai0lhy@gmail.com"},"tensai0lhy@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/haoyann"},"haoyann")),(0,r.kt)("td",{parentName:"tr",align:null},"Hao Yan"),(0,r.kt)("td",{parentName:"tr",align:null},"Shusheng Chengdu Technology"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:1064645534@qq.com"},"1064645534@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/shiyiyue1102"},"shiyiyue1102")),(0,r.kt)("td",{parentName:"tr",align:null},"Zunfei Liu"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:liuzunfei@gmail.com"},"liuzunfei@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/JackSun-Developer"},"JackSun-Developer")),(0,r.kt)("td",{parentName:"tr",align:null},"Li Sun"),(0,r.kt)("td",{parentName:"tr",align:null},"Alibaba"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:yongyue.sl@alibaba-inc.com"},"yongyue.sl@alibaba-inc.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/brotherlu-xcq"},"brotherlu-xcq")),(0,r.kt)("td",{parentName:"tr",align:null},"Lu Cheng"),(0,r.kt)("td",{parentName:"tr",align:null},"KuJiaLe"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:1285823170@qq.com"},"1285823170@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/li-xiao-shuang"},"li-xiao-shuang")),(0,r.kt)("td",{parentName:"tr",align:null},"XiaoShuang Li"),(0,r.kt)("td",{parentName:"tr",align:null},"DiDi"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:644968328@qq.com"},"644968328@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/MajorHe1"},"MajorHe1")),(0,r.kt)("td",{parentName:"tr",align:null},"Fan He"),(0,r.kt)("td",{parentName:"tr",align:null},"WeBank"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:601023364@qq.com"},"601023364@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/hujun-w-2"},"hujun-w-2")),(0,r.kt)("td",{parentName:"tr",align:null},"Jun Hu"),(0,r.kt)("td",{parentName:"tr",align:null},"Xiaomi"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:510830970@qq.com"},"510830970@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onewe"},"onewe")),(0,r.kt)("td",{parentName:"tr",align:null},"Wenchao Mao"),(0,r.kt)("td",{parentName:"tr",align:null},"Independent developer"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:2583021406@qq.com"},"2583021406@qq.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/chenhao26-nineteen"},"chenhao26-nineteen")),(0,r.kt)("td",{parentName:"tr",align:null},"Hao Chen"),(0,r.kt)("td",{parentName:"tr",align:null},"Xiaomi"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:hashmap2018@163.com"},"hashmap2018@163.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/shenkonghui"},"shenkonghui")),(0,r.kt)("td",{parentName:"tr",align:null},"Konghui Shen"),(0,r.kt)("td",{parentName:"tr",align:null},"Harmony Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:shenkh1992@gmail.com"},"shenkh1992@gmail.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/CherishCai"},"CherishCai")),(0,r.kt)("td",{parentName:"tr",align:null},"Hongwen Cai"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Financial"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:785427346@qq.com"},"785427346@qq.com")," \uff5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/The-Gamer-01"},"The-Gamer-01")),(0,r.kt)("td",{parentName:"tr",align:null},"Yixuan Huang"),(0,r.kt)("td",{parentName:"tr",align:null},"Jishou University"),(0,r.kt)("td",{parentName:"tr",align:null},"Committer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:19974361760@163.com"},"19974361760@163.com")," \uff5c")))),(0,r.kt)("h3",{id:"contributors"},"Contributors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Github ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Organization"),(0,r.kt)("th",{parentName:"tr",align:null},"Roles"),(0,r.kt)("th",{parentName:"tr",align:null},"Mail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/wfnuser"},"wfnuser")),(0,r.kt)("td",{parentName:"tr",align:null},"Qinghao Huang"),(0,r.kt)("td",{parentName:"tr",align:null},"ByteDance"),(0,r.kt)("td",{parentName:"tr",align:null},"Contributor"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"mailto:wfnuser@hotmail.com"},"wfnuser@hotmail.com"))))))}g.isMDXComponent=!0}}]);