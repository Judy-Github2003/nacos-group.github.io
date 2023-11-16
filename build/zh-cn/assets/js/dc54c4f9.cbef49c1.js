"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[5227],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>k});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),p=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},s=function(t){var a=p(t.components);return n.createElement(i.Provider,{value:a},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),c=p(e),u=r,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||l;return e?n.createElement(k,o(o({ref:a},s),{},{components:e})):n.createElement(k,o({ref:a},s))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=t,m[c]="string"==typeof t?t:r,o[1]=m;for(var p=2;p<l;p++)o[p]=e[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},65107:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=e(87462),r=(e(67294),e(3905));const l={title:"Nacos \u76d1\u63a7\u624b\u518c",keywords:["Nacos","\u76d1\u63a7\u624b\u518c"],description:"Nacos \u76d1\u63a7\u624b\u518c"},o="Nacos \u76d1\u63a7\u624b\u518c",m={unversionedId:"v2/guide/admin/monitor-guide",id:"version-1.X/v2/guide/admin/monitor-guide",title:"Nacos \u76d1\u63a7\u624b\u518c",description:"Nacos \u76d1\u63a7\u624b\u518c",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.X/v2/guide/admin/monitor-guide.md",sourceDirName:"v2/guide/admin",slug:"/v2/guide/admin/monitor-guide",permalink:"/zh-cn/docs/1.X/v2/guide/admin/monitor-guide",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos \u76d1\u63a7\u624b\u518c",keywords:["Nacos","\u76d1\u63a7\u624b\u518c"],description:"Nacos \u76d1\u63a7\u624b\u518c"}},i={},p=[{value:"\u642d\u5efaNacos\u96c6\u7fa4\u66b4\u9732metrics\u6570\u636e",id:"\u642d\u5efanacos\u96c6\u7fa4\u66b4\u9732metrics\u6570\u636e",level:2},{value:"\u642d\u5efaprometheus\u91c7\u96c6Nacos metrics\u6570\u636e",id:"\u642d\u5efaprometheus\u91c7\u96c6nacos-metrics\u6570\u636e",level:2},{value:"linux &amp; mac",id:"linux--mac",level:3},{value:"windows",id:"windows",level:3},{value:"\u642d\u5efagrafana\u56fe\u5f62\u5316\u5c55\u793ametrics\u6570\u636e",id:"\u642d\u5efagrafana\u56fe\u5f62\u5316\u5c55\u793ametrics\u6570\u636e",level:2},{value:"mac",id:"mac",level:3},{value:"linux",id:"linux",level:3},{value:"windows",id:"windows-1",level:3},{value:"\u914d\u7f6egrafana\u544a\u8b66",id:"\u914d\u7f6egrafana\u544a\u8b66",level:2},{value:"\u9489\u9489\u544a\u8b66",id:"\u9489\u9489\u544a\u8b66",level:3},{value:"\u90ae\u4ef6\u544a\u8b66",id:"\u90ae\u4ef6\u544a\u8b66",level:3},{value:"Nacos metrics\u542b\u4e49",id:"nacos-metrics\u542b\u4e49",level:2},{value:"jvm metrics",id:"jvm-metrics",level:3},{value:"Nacos \u76d1\u63a7\u6307\u6807",id:"nacos-\u76d1\u63a7\u6307\u6807",level:3},{value:"nacos \u5f02\u5e38\u6307\u6807",id:"nacos-\u5f02\u5e38\u6307\u6807",level:3},{value:"client metrics",id:"client-metrics",level:3},{value:"Nacos-Sync\u76d1\u63a7",id:"nacos-sync\u76d1\u63a7",level:2},{value:"grafana\u76d1\u63a7Nacos-Sync",id:"grafana\u76d1\u63a7nacos-sync",level:2},{value:"Nacos-Sync metrics\u542b\u4e49",id:"nacos-sync-metrics\u542b\u4e49",level:2},{value:"jvm metrics",id:"jvm-metrics-1",level:3},{value:"\u5e94\u7528\u5c42 metrics",id:"\u5e94\u7528\u5c42-metrics",level:2}],s={toc:p},c="wrapper";function d(t){let{components:a,...e}=t;return(0,r.kt)(c,(0,n.Z)({},s,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nacos-\u76d1\u63a7\u624b\u518c"},"Nacos \u76d1\u63a7\u624b\u518c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u4f18\u5316\u4e2d......")),(0,r.kt)("p",null,"Nacos 0.8.0\u7248\u672c\u5b8c\u5584\u4e86\u76d1\u63a7\u7cfb\u7edf\uff0c\u652f\u6301\u901a\u8fc7\u66b4\u9732metrics\u6570\u636e\u63a5\u5165\u7b2c\u4e09\u65b9\u76d1\u63a7\u7cfb\u7edf\u76d1\u63a7Nacos\u8fd0\u884c\u72b6\u6001\uff0c\u76ee\u524d\u652f\u6301prometheus\u3001elastic search\u548cinfluxdb\uff0c\u4e0b\u9762\u7ed3\u5408prometheus\u548cgrafana\u5982\u4f55\u76d1\u63a7Nacos\u3002\u4e0eelastic search\u548cinfluxdb\u7ed3\u5408\u53ef\u81ea\u5df1\u67e5\u627e\u76f8\u5173\u8d44\u6599"),(0,r.kt)("h2",{id:"\u642d\u5efanacos\u96c6\u7fa4\u66b4\u9732metrics\u6570\u636e"},"\u642d\u5efaNacos\u96c6\u7fa4\u66b4\u9732metrics\u6570\u636e"),(0,r.kt)("p",null,"\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/v2/guide/admin/deployment"},"\u90e8\u7f72\u6587\u6863"),"\u642d\u5efa\u597dNacos\u96c6\u7fa4"),(0,r.kt)("p",null,"\u914d\u7f6eapplication.properties\u6587\u4ef6\uff0c\u66b4\u9732metrics\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"management.endpoints.web.exposure.include=*\n")),(0,r.kt)("p",null,"\u8bbf\u95ee{ip}:8848/nacos/actuator/prometheus\uff0c\u770b\u662f\u5426\u80fd\u8bbf\u95ee\u5230metrics\u6570\u636e"),(0,r.kt)("h2",{id:"\u642d\u5efaprometheus\u91c7\u96c6nacos-metrics\u6570\u636e"},"\u642d\u5efaprometheus\u91c7\u96c6Nacos metrics\u6570\u636e"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u4f60\u60f3\u5b89\u88c5\u7684prometheus\u7248\u672c\uff0c\u5730\u5740\u4e3a",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"download prometheus")),(0,r.kt)("h3",{id:"linux--mac"},"linux & mac"),(0,r.kt)("p",null,"\u89e3\u538bprometheus\u538b\u7f29\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar xvfz prometheus-*.tar.gz\ncd prometheus-*\n")),(0,r.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6prometheus.yml\u91c7\u96c6Nacos metrics\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    metrics_path: '/nacos/actuator/prometheus'\n    static_configs:\n      - targets: ['{ip1}:8848','{ip2}:8848','{ip3}:8848']\n")),(0,r.kt)("p",null,"\u542f\u52a8prometheus\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'./prometheus --config.file="prometheus.yml"\n')),(0,r.kt)("h3",{id:"windows"},"windows"),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5bf9\u5e94\u7684windows\u7248\u672c\u5e76\u89e3\u538b"),(0,r.kt)("p",null,"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6prometheus.yml\u91c7\u96c6Nacos metrics\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    metrics_path: '/nacos/actuator/prometheus'\n    static_configs:\n      - targets: ['{ip1}:8848','{ip2}:8848','{ip3}:8848']\n")),(0,r.kt)("p",null,"\u542f\u52a8prometheus\u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"prometheus.exe --config.file=prometheus.yml\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u8bbf\u95eehttp://{ip}:9090/graph\u53ef\u4ee5\u770b\u5230prometheus\u7684\u91c7\u96c6\u6570\u636e\uff0c\u5728\u641c\u7d22\u680f\u641c\u7d22nacos_monitor\u53ef\u4ee5\u641c\u7d22\u5230Nacos\u6570\u636e\u8bf4\u660e\u91c7\u96c6\u6570\u636e\u6210\u529f\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1LThVCQvoK1RjSZFwXXciCFXa-2832-1576.png",alt:"IMAGE"})),(0,r.kt)("h2",{id:"\u642d\u5efagrafana\u56fe\u5f62\u5316\u5c55\u793ametrics\u6570\u636e"},"\u642d\u5efagrafana\u56fe\u5f62\u5316\u5c55\u793ametrics\u6570\u636e"),(0,r.kt)("p",null,"\u548cprometheus\u5728\u540c\u4e00\u53f0\u673a\u5668\u4e0a\u5b89\u88c5grafana\uff0c\u4f7f\u7528 yum \u5b89\u88c5grafana"),(0,r.kt)("h3",{id:"mac"},"mac"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install grafana\nbrew services start grafana\n")),(0,r.kt)("h3",{id:"linux"},"linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo yum install https://s3-us-west-2.amazonaws.com/grafana-releases/release/grafana-5.2.4-1.x86_64.rpm\nsudo service grafana-server start\n")),(0,r.kt)("h3",{id:"windows-1"},"windows"),(0,r.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://docs.grafana.org/installation/windows/"},"http://docs.grafana.org/installation/windows/")),(0,r.kt)("p",null,"\u8bbf\u95eegrafana: http://{ip}:3000"),(0,r.kt)("p",null,"\u914d\u7f6eprometheus\u6570\u636e\u6e90\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1bTafCOLaK1RjSZFxXXamPFXa-2832-1568.png",alt:"IMAGE"})),(0,r.kt)("p",null,"\u5bfc\u5165Nacos grafana\u76d1\u63a7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-template/blob/master/nacos-grafana.json"},"\u6a21\u7248"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1JadVCPDpK1RjSZFrXXa78VXa-2742-1338.png",alt:"IMAGE"})),(0,r.kt)("p",null,"Nacos\u76d1\u63a7\u5206\u4e3a\u4e09\u4e2a\u6a21\u5757:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nacos monitor\u5c55\u793a\u6838\u5fc3\u76d1\u63a7\u9879\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1PMpUCQvoK1RjSZFDXXXY3pXa-2832-1584.png",alt:"IMAGE"})),(0,r.kt)("li",{parentName:"ul"},"nacos detail\u5c55\u793a\u6307\u6807\u7684\u53d8\u5316\u66f2\u7ebf\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1ZBF4CNjaK1RjSZFAXXbdLFXa-2742-1480.png",alt:"IMAGE"})),(0,r.kt)("li",{parentName:"ul"},"nacos alert\u4e3a\u544a\u8b66\u9879\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1ALlUCFzqK1RjSZFCXXbbxVXa-2742-1476.png",alt:"IMAGE"}))),(0,r.kt)("h2",{id:"\u914d\u7f6egrafana\u544a\u8b66"},"\u914d\u7f6egrafana\u544a\u8b66"),(0,r.kt)("p",null,"\u5f53Nacos\u8fd0\u884c\u51fa\u73b0\u95ee\u9898\u65f6\uff0c\u9700\u8981grafana\u544a\u8b66\u901a\u77e5\u76f8\u5173\u8d1f\u8d23\u4eba\u3002grafana\u652f\u6301\u591a\u79cd\u544a\u8b66\u65b9\u5f0f\uff0c\u5e38\u7528\u7684\u6709\u90ae\u4ef6\uff0c\u9489\u9489\u548cwebhook\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u9489\u9489\u544a\u8b66"},"\u9489\u9489\u544a\u8b66"),(0,r.kt)("p",null,"\u9489\u9489\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9489\u9489\u673a\u5668\u4eba\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1eJ0RCSzqK1RjSZFjXXblCFXa-2742-1482.png",alt:"IMAGE"})),(0,r.kt)("p",null,"\u914d\u7f6e\u9489\u9489\u901a\u77e5url\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1ERtQCSzqK1RjSZFjXXblCFXa-2832-1578.png",alt:"IMAGE"})),(0,r.kt)("p",null,"\u6d4b\u8bd5\u544a\u8b66\u9879\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1KvXPCHPpK1RjSZFFXXa5PpXa-996-504.png",alt:"IMAGE"})),(0,r.kt)("h3",{id:"\u90ae\u4ef6\u544a\u8b66"},"\u90ae\u4ef6\u544a\u8b66"),(0,r.kt)("p",null,"\u4fee\u6539defaults.ini\u914d\u7f6e\u6587\u4ef6\uff0c\u589e\u52a0\u90ae\u4ef6\u544a\u8b66"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#################################### SMTP / Emailing ##########################\n[smtp]\nenabled = true\nhost = smtp.126.com:25\nuser = xxxxxx\npassword = xxxxx\n;cert_file =\n;key_file =\nskip_verify = true\nfrom_address = xxxxxx@126.com\n\n[emails]\n;welcome_email_on_sign_up = false\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u901a\u77e5\u90ae\u7bb1\n",(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB12qyhCNnaK1RjSZFtXXbC2VXa-2832-1576.png",alt:"IMAGE"})),(0,r.kt)("h2",{id:"nacos-metrics\u542b\u4e49"},"Nacos metrics\u542b\u4e49"),(0,r.kt)("h3",{id:"jvm-metrics"},"jvm metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_cpu_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU\u4f7f\u7528\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_load_average_1m"),(0,r.kt)("td",{parentName:"tr",align:null},"load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_used_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u4f7f\u7528\u5b57\u8282\uff0c\u5305\u542b\u5404\u79cd\u5185\u5b58\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_max_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u6700\u5927\u5b57\u8282\uff0c\u5305\u542b\u5404\u79cd\u5185\u5b58\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"gc\u6b21\u6570\uff0c\u5305\u542b\u5404\u79cdgc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"gc\u8017\u65f6\uff0c\u5305\u542b\u5404\u79cdgc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_threads_daemon"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6570")))),(0,r.kt)("h3",{id:"nacos-\u76d1\u63a7\u6307\u6807"},"Nacos \u76d1\u63a7\u6307\u6807"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_server_requests_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"http\u8bf7\u6c42\u6b21\u6570\uff0c\u5305\u62ec\u591a\u79cd(url,\u65b9\u6cd5,code)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http_server_requests_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"http\u8bf7\u6c42\u603b\u8017\u65f6\uff0c\u5305\u62ec\u591a\u79cd(url,\u65b9\u6cd5,code)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_timer_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u6c34\u5e73\u901a\u77e5\u8017\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_timer_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u6c34\u5e73\u901a\u77e5\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='longPolling'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u957f\u8fde\u63a5\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='configCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u914d\u7f6e\u4e2a\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='dumpTask'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u914d\u7f6e\u843d\u76d8\u4efb\u52a1\u5806\u79ef\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='notifyTask'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u914d\u7f6e\u6c34\u5e73\u901a\u77e5\u4efb\u52a1\u5806\u79ef\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='getConfig'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u8bfb\u914d\u7f6e\u7edf\u8ba1\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='publish'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u5199\u914d\u7f6e\u7edf\u8ba1\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='ipCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming ip\u4e2a\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='domCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming\u57df\u540d\u4e2a\u6570(1.x \u7248\u672c)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='serviceCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming\u57df\u540d\u4e2a\u6570(2.x \u7248\u672c)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='failedPush'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming\u63a8\u9001\u5931\u8d25\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='avgPushCost'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming\u5e73\u5747\u63a8\u9001\u8017\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='leaderStatus'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming\u89d2\u8272\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='maxPushCost'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming\u6700\u5927\u63a8\u9001\u8017\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='mysqlhealthCheck'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming mysql\u5065\u5eb7\u68c0\u67e5\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='httpHealthCheck'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming http\u5065\u5eb7\u68c0\u67e5\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='tcpHealthCheck'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming tcp\u5065\u5eb7\u68c0\u67e5\u6b21\u6570")))),(0,r.kt)("h3",{id:"nacos-\u5f02\u5e38\u6307\u6807"},"nacos \u5f02\u5e38\u6307\u6807"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='db'}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='configNotify'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config\u6c34\u5e73\u901a\u77e5\u5931\u8d25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='unhealth'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos config server\u4e4b\u95f4\u5065\u5eb7\u68c0\u67e5\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='disk'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming\u5199\u78c1\u76d8\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='leaderSendBeatFailed'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos naming leader\u53d1\u9001\u5fc3\u8df3\u5f02\u5e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='illegalArgument'}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u53c2\u6570\u4e0d\u5408\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_exception_total{name='nacos'}"),(0,r.kt)("td",{parentName:"tr",align:null},"Nacos\u8bf7\u6c42\u54cd\u5e94\u5185\u90e8\u9519\u8bef\u5f02\u5e38\uff08\u8bfb\u5199\u5931\u8d25\uff0c\u6ca1\u6743\u9650\uff0c\u53c2\u6570\u9519\u8bef\uff09")))),(0,r.kt)("h3",{id:"client-metrics"},"client metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='subServiceCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u7684\u670d\u52a1\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='pubServiceCount'}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03\u7684\u670d\u52a1\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_monitor{name='configListenSize'}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u542c\u7684\u914d\u7f6e\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_client_request_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u6b21\u6570\uff0c\u5305\u62ec\u591a\u79cd(url,\u65b9\u6cd5,code)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos_client_request_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u6c42\u7684\u603b\u8017\u65f6\uff0c\u5305\u62ec\u591a\u79cd(url,\u65b9\u6cd5,code)")))),(0,r.kt)("h2",{id:"nacos-sync\u76d1\u63a7"},"Nacos-Sync\u76d1\u63a7"),(0,r.kt)("p",null,"\u968f\u7740Nacos 0.9\u7248\u672c\u53d1\u5e03\uff0cNacos-Sync 0.3\u7248\u672c\u652f\u6301\u4e86metrics\u76d1\u63a7\uff0c\u80fd\u901a\u8fc7metrics\u6570\u636e\u89c2\u5bdfNacos-Sync\u670d\u52a1\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u63d0\u5347\u4e86Nacos-Sync\u7684\u5728\u751f\u4ea7\u73af\u5883\u7684\u76d1\u63a7\u80fd\u529b\u3002\n\u6574\u4f53\u7684\u76d1\u63a7\u4f53\u7cfb\u7684\u642d\u5efa\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.X/v2/guide/admin/monitor-guide"},"Nacos\u76d1\u63a7\u624b\u518c")),(0,r.kt)("h2",{id:"grafana\u76d1\u63a7nacos-sync"},"grafana\u76d1\u63a7Nacos-Sync"),(0,r.kt)("p",null,"\u548cNacos\u76d1\u63a7\u4e00\u6837\uff0cNacos-Sync\u4e5f\u63d0\u4f9b\u4e86\u76d1\u63a7\u6a21\u7248\uff0c\u5bfc\u5165\u76d1\u63a7",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-template/blob/master/nacos-sync-grafana"},"\u6a21\u7248")),(0,r.kt)("p",null,"Nacos-Sync\u76d1\u63a7\u540c\u6837\u4e5f\u5206\u4e3a\u4e09\u4e2a\u6a21\u5757:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nacos-sync monitor\u5c55\u793a\u6838\u5fc3\u76d1\u63a7\u9879\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1GeNWKmzqK1RjSZFHXXb3CpXa-2834-1588.png",alt:"monitor"})),(0,r.kt)("li",{parentName:"ul"},"nacos-sync detail\u548calert\u5c55\u793a\u76d1\u63a7\u66f2\u7ebf\u548c\u544a\u8b66\n",(0,r.kt)("img",{parentName:"li",src:"https://img.alicdn.com/tfs/TB1kP8UKbvpK1RjSZPiXXbmwXXa-2834-1570.png",alt:"detail"}))),(0,r.kt)("h2",{id:"nacos-sync-metrics\u542b\u4e49"},"Nacos-Sync metrics\u542b\u4e49"),(0,r.kt)("p",null,"Nacos-Sync\u7684metrics\u5206\u4e3ajvm\u5c42\u548c\u5e94\u7528\u5c42"),(0,r.kt)("h3",{id:"jvm-metrics-1"},"jvm metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_cpu_usage"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU\u4f7f\u7528\u7387")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"system_load_average_1m"),(0,r.kt)("td",{parentName:"tr",align:null},"load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_used_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u4f7f\u7528\u5b57\u8282\uff0c\u5305\u542b\u5404\u79cd\u5185\u5b58\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_memory_max_bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u6700\u5927\u5b57\u8282\uff0c\u5305\u542b\u5404\u79cd\u5185\u5b58\u533a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_count"),(0,r.kt)("td",{parentName:"tr",align:null},"gc\u6b21\u6570\uff0c\u5305\u542b\u5404\u79cdgc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_gc_pause_seconds_sum"),(0,r.kt)("td",{parentName:"tr",align:null},"gc\u8017\u65f6\uff0c\u5305\u542b\u5404\u79cdgc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jvm_threads_daemon"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6570")))),(0,r.kt)("h2",{id:"\u5e94\u7528\u5c42-metrics"},"\u5e94\u7528\u5c42 metrics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_task_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u4efb\u52a1\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_cluster_size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_add_task_rt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u540c\u6b65\u4efb\u52a1\u6267\u884c\u8017\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_delete_task_rt"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u4efb\u52a1\u8017\u65f6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_dispatcher_task"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u6570\u636e\u5e93\u4e2d\u5206\u53d1\u4efb\u52a1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacosSync_sync_task_error"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u540c\u6b65\u6267\u884c\u65f6\u7684\u5f02\u5e38")))))}d.isMDXComponent=!0}}]);