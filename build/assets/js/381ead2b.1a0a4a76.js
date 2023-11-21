"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4116],{3905:(t,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>o});var l=n(7294);function e(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){e(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function p(t,a){if(null==t)return{};var n,l,e=function(t,a){if(null==t)return{};var n,l,e={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(e[n]=t[n]);return e}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(e[n]=t[n])}return e}var m=l.createContext({}),u=function(t){var a=l.useContext(m),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},k=function(t){var a=u(t.components);return l.createElement(m.Provider,{value:a},t.children)},N="mdxType",d={inlineCode:"code",wrapper:function(t){var a=t.children;return l.createElement(l.Fragment,{},a)}},g=l.forwardRef((function(t,a){var n=t.components,e=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=u(n),g=e,o=N["".concat(m,".").concat(g)]||N[g]||d[g]||r;return n?l.createElement(o,i(i({ref:a},k),{},{components:n})):l.createElement(o,i({ref:a},k))}));function o(t,a){var n=arguments,e=a&&a.mdxType;if("string"==typeof t||e){var r=n.length,i=new Array(r);i[0]=g;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=t,p[N]="string"==typeof t?t:e,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},909:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var l=n(7462),e=(n(7294),n(3905));const r={title:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",keywords:["Nacos","\u670d\u52a1","\u914d\u7f6e","\u6027\u80fd"],description:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},i="Nacos 2.0.0-ALPHA2 \u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",p={unversionedId:"guide/admin/nacos2-config-benchmark",id:"version-2.X/guide/admin/nacos2-config-benchmark",title:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",description:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",source:"@site/versioned_docs/version-2.X/guide/admin/nacos2-config-benchmark.md",sourceDirName:"guide/admin",slug:"/guide/admin/nacos2-config-benchmark",permalink:"/docs/guide/admin/nacos2-config-benchmark",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",keywords:["Nacos","\u670d\u52a1","\u914d\u7f6e","\u6027\u80fd"],description:"Nacos2.0\u670d\u52a1\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},sidebar:"docs",previous:{title:"Nacos \u76d1\u63a7\u624b\u518c",permalink:"/docs/guide/admin/monitor-guide"},next:{title:"Nacos2.0\u670d\u52a1\u53d1\u73b0\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",permalink:"/docs/guide/admin/nacos2-naming-benchmark"}},m={},u=[{value:"\u6d4b\u8bd5\u76ee\u7684",id:"\u6d4b\u8bd5\u76ee\u7684",level:2},{value:"\u6d4b\u8bd5\u5de5\u5177",id:"\u6d4b\u8bd5\u5de5\u5177",level:2},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"1.\u73af\u5883",id:"1\u73af\u5883",level:3},{value:"Nacos2.0 gRPC",id:"nacos20-grpc",level:4},{value:"Nacos1.X HTTP",id:"nacos1x-http",level:4},{value:"\u6d4b\u8bd5\u573a\u666f",id:"\u6d4b\u8bd5\u573a\u666f",level:2},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:2},{value:"1. \u53d1\u5e03\u914d\u7f6e",id:"1-\u53d1\u5e03\u914d\u7f6e",level:3},{value:"Nacos2.0",id:"nacos20",level:4},{value:"Nacos1.X",id:"nacos1x",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:4},{value:"2. \u83b7\u53d6\u914d\u7f6e",id:"2-\u83b7\u53d6\u914d\u7f6e",level:3},{value:"Nacos2.0",id:"nacos20-1",level:4},{value:"Nacos1.X",id:"nacos1x-1",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790-1",level:4},{value:"3. \u76d1\u542c\u914d\u7f6e",id:"3-\u76d1\u542c\u914d\u7f6e",level:3},{value:"Nacos2.0",id:"nacos20-2",level:4},{value:"Nacos1.X",id:"nacos1x-2",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790-2",level:4},{value:"4. \u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5",id:"4-\u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5",level:3},{value:"Nacos2.0",id:"nacos20-3",level:4},{value:"Nacos1.X",id:"nacos1x-3",level:4},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790-3",level:4},{value:"\u6d4b\u8bd5\u7ed3\u8bba",id:"\u6d4b\u8bd5\u7ed3\u8bba",level:2}],k={toc:u},N="wrapper";function d(t){let{components:a,...n}=t;return(0,e.kt)(N,(0,l.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"nacos-200-alpha2-\u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"},"Nacos 2.0.0-ALPHA2 \u914d\u7f6e\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"),(0,e.kt)("h2",{id:"\u6d4b\u8bd5\u76ee\u7684"},"\u6d4b\u8bd5\u76ee\u7684"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"\u957f\u94fe\u63a5\u5404\u9879\u4e1a\u52a1\u6307\u6807\u7684\u6700\u9ad8\u503c"),(0,e.kt)("li",{parentName:"ol"},"\u957f\u94fe\u63a5\u76f8\u6bd4\u77ed\u94fe\u63a5\u7684\u5dee\u5f02\u6570\u636e\u5bf9\u6bd4")),(0,e.kt)("h2",{id:"\u6d4b\u8bd5\u5de5\u5177"},"\u6d4b\u8bd5\u5de5\u5177"),(0,e.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u81ea\u7814\u7684PAS\u6027\u80fd\u8bc4\u4f30\u670d\u52a1\u5e73\u53f0\u8fdb\u884c\u538b\u6d4b\uff0c\u5176\u539f\u7406\u662f\u57fa\u4e8e\u5229\u7528JMeter\u5f15\u64ce\uff0c\u4f7f\u7528PAS\u81ea\u52a8\u751f\u6210\u7684JMeter\u811a\u672c\uff0c\u8fdb\u884c\u667a\u80fd\u538b\u6d4b\u3002"),(0,e.kt)("p",null," ",(0,e.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1xCfDDpzqK1RjSZFvXXcB7VXa-692-297.png",alt:"Pas\u56fe"})),(0,e.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,e.kt)("h3",{id:"1\u73af\u5883"},"1.\u73af\u5883"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"\u6307\u6807")),(0,e.kt)("th",{parentName:"tr",align:null},(0,e.kt)("strong",{parentName:"th"},"\u53c2\u6570")))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u673a\u5668"),(0,e.kt)("td",{parentName:"tr",align:null},"CPU 8\u6838\uff0c\u5185\u5b5816G")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u89c4\u6a21"),(0,e.kt)("td",{parentName:"tr",align:null},"\u5355\u673a")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"Nacos\u7248\u672c"),(0,e.kt)("td",{parentName:"tr",align:null},"Nacos 2.0.0-ALPHA2\uff0c Nacos 1.4.0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93"),(0,e.kt)("td",{parentName:"tr",align:null},"32C128G")))),(0,e.kt)("p",null,"2.\u8bbe\u7f6e\u542f\u52a8\u53c2\u6570"),(0,e.kt)("p",null,"\u56e0\u4e3agrpc\u4f7f\u7528\u7684\u76f4\u63a5\u5185\u5b58\uff0c\u5806\u5185\u5b58\u76f8\u5bf9\u4f7f\u7528\u8f83\u5c11\uff0c\u6240\u4ee5jvm\u53c2\u6570\u6709\u6240\u8c03\u6574"),(0,e.kt)("h4",{id:"nacos20-grpc"},"Nacos2.0 gRPC"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre"},'JAVA_OPT="${JAVA_OPT} -server -Xms9216m -Xmx9216m  -XX:MaxDirectMemorySize=4096m -XX:NewSize=4096m  -XX:+UnlockDiagnosticVMOptions -XX:+PrintNMTStatistics   -DisPushContent=false -XX:MaxNewSize=4096m -XX:MetaspaceSize=512m -XX:MaxMetaspaceSize=512m -XX:-OmitStackTraceInFastThrow -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/admin/nacos/logs/java_heapdump.hprof -XX:-UseLargePages -Xloggc:/home/admin/nacos/logs/nacos_gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M -DQUERYTIMEOUT=90  -XX:SurvivorRatio=10 -XX:+UseConcMarkSweepGC -XX:+UseCMSCompactAtFullCollection -XX:+CMSClassUnloadingEnabled -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/admin/nacos/logs -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:CMSMaxAbortablePrecleanTime=5000 -XX:CMSInitiatingOccupancyFraction=74 -XX:+UseCMSInitiatingOccupancyOnly -XX:ParallelGCThreads=8 -Dnacos.core.auth.enabled=false "\n')),(0,e.kt)("h4",{id:"nacos1x-http"},"Nacos1.X HTTP"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre"},"-server -Xms12880m -Xmx12880m -XX:MaxDirectMemorySize=1024m -XX:NewSize=1024m -XX:+UnlockDiagnosticVMOptions -XX:+PrintNMTStatistics -DisPushContent=false -XX:MaxNewSize=4096m -XX:MetaspaceSize=512m -XX:MaxMetaspaceSize=512m -XX:-OmitStackTraceInFastThrow -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/admin/nacos/logs/java_heapdump.hprof -XX:-UseLargePages -Xloggc:/home/admin/nacos/logs/nacos_gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M -DQUERYTIMEOUT=90 -XX:SurvivorRatio=10 -XX:+UseConcMarkSweepGC -XX:+UseCMSCompactAtFullCollection -XX:+CMSClassUnloadingEnabled -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/admin/nacos/logs -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:CMSMaxAbortablePrecleanTime=5000 -XX:CMSInitiatingOccupancyFraction=74 -XX:+UseCMSInitiatingOccupancyOnly -XX:ParallelGCThreads=8 -Dnacos.core.auth.enabled=false -Dnacos.member.list= -Djava.ext.dirs=/opt/taobao/java/jre/lib/ext:/opt/taobao/java/lib/ext -Xloggc:/home/admin/nacos/logs/nacos_gc.log -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=100M\n")),(0,e.kt)("h2",{id:"\u6d4b\u8bd5\u573a\u666f"},"\u6d4b\u8bd5\u573a\u666f"),(0,e.kt)("p",null,"\u4ee5\u4e0b\u6d4b\u8bd5\u573a\u666f\u90fd\u662f\u670d\u52a1\u914d\u7f6e\u91cd\u8981\u63a5\u53e3\uff1a"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u53d1\u5e03\u914d\u7f6e\u7684\u80fd\u529b"),(0,e.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u83b7\u53d6\u914d\u7f6e\u7684\u80fd\u529b"),(0,e.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u76d1\u542c\u914d\u7f6e\u7684\u80fd\u529b"),(0,e.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1Nacos\u670d\u52a1\u957f\u8fde\u63a5\u5bb9\u91cf\u80fd\u529b")),(0,e.kt)("p",null,"\u6d4b\u8bd5\u65b9\u5f0f\u5747\u662f\u5728\u76f8\u540c\u7684\u73af\u5883\u4e0b\uff0c\u4f7f\u7528\u76f8\u540c\u7684\u538b\u529b\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5206\u522b\u6bd4\u5bf9Nacos2.X\u7248\u672c\u548cNacos1.X\u7248\u672c\u7684\u6027\u80fd\u5dee\u5f02\u3002"),(0,e.kt)("h2",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,e.kt)("h3",{id:"1-\u53d1\u5e03\u914d\u7f6e"},"1. \u53d1\u5e03\u914d\u7f6e"),(0,e.kt)("h4",{id:"nacos20"},"Nacos2.0"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"tps"),(0,e.kt)("th",{parentName:"tr",align:null},"500"),(0,e.kt)("th",{parentName:"tr",align:null},"1000"),(0,e.kt)("th",{parentName:"tr",align:null},"1200"),(0,e.kt)("th",{parentName:"tr",align:null},"1500"),(0,e.kt)("th",{parentName:"tr",align:null},"2000"),(0,e.kt)("th",{parentName:"tr",align:null},"2500"),(0,e.kt)("th",{parentName:"tr",align:null},"3000"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"avg rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"7"),(0,e.kt)("td",{parentName:"tr",align:null},"8"),(0,e.kt)("td",{parentName:"tr",align:null},"12"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"10.89"),(0,e.kt)("td",{parentName:"tr",align:null},"1044")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"80% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"7.9"),(0,e.kt)("td",{parentName:"tr",align:null},"8"),(0,e.kt)("td",{parentName:"tr",align:null},"11"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"10.69"),(0,e.kt)("td",{parentName:"tr",align:null},"1581")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"95% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"8.7"),(0,e.kt)("td",{parentName:"tr",align:null},"11"),(0,e.kt)("td",{parentName:"tr",align:null},"25"),(0,e.kt)("td",{parentName:"tr",align:null},"15"),(0,e.kt)("td",{parentName:"tr",align:null},"14"),(0,e.kt)("td",{parentName:"tr",align:null},"24.74"),(0,e.kt)("td",{parentName:"tr",align:null},"2966")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"12"),(0,e.kt)("td",{parentName:"tr",align:null},"22"),(0,e.kt)("td",{parentName:"tr",align:null},"28"),(0,e.kt)("td",{parentName:"tr",align:null},"36"),(0,e.kt)("td",{parentName:"tr",align:null},"47"),(0,e.kt)("td",{parentName:"tr",align:null},"55"),(0,e.kt)("td",{parentName:"tr",align:null},"62")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"load"),(0,e.kt)("td",{parentName:"tr",align:null},"0.5"),(0,e.kt)("td",{parentName:"tr",align:null},"1.5"),(0,e.kt)("td",{parentName:"tr",align:null},"1.5"),(0,e.kt)("td",{parentName:"tr",align:null},"1.5"),(0,e.kt)("td",{parentName:"tr",align:null},"3.5"),(0,e.kt)("td",{parentName:"tr",align:null},"4"),(0,e.kt)("td",{parentName:"tr",align:null},"5")))),(0,e.kt)("h4",{id:"nacos1x"},"Nacos1.X"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"tps"),(0,e.kt)("th",{parentName:"tr",align:null},"500"),(0,e.kt)("th",{parentName:"tr",align:null},"1000"),(0,e.kt)("th",{parentName:"tr",align:null},"1200"),(0,e.kt)("th",{parentName:"tr",align:null},"1400"),(0,e.kt)("th",{parentName:"tr",align:null},"2000"),(0,e.kt)("th",{parentName:"tr",align:null},"2500"),(0,e.kt)("th",{parentName:"tr",align:null},"3000"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"avg rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"8.67"),(0,e.kt)("td",{parentName:"tr",align:null},"8"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"10"),(0,e.kt)("td",{parentName:"tr",align:null},"11.88"),(0,e.kt)("td",{parentName:"tr",align:null},"1038")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"80% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"9.4"),(0,e.kt)("td",{parentName:"tr",align:null},"10"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null},"10"),(0,e.kt)("td",{parentName:"tr",align:null},"12.48"),(0,e.kt)("td",{parentName:"tr",align:null},"1090")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"95% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"11"),(0,e.kt)("td",{parentName:"tr",align:null},"11.4"),(0,e.kt)("td",{parentName:"tr",align:null},"12"),(0,e.kt)("td",{parentName:"tr",align:null},"14"),(0,e.kt)("td",{parentName:"tr",align:null},"18"),(0,e.kt)("td",{parentName:"tr",align:null},"25.7"),(0,e.kt)("td",{parentName:"tr",align:null},"1170")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"14"),(0,e.kt)("td",{parentName:"tr",align:null},"25"),(0,e.kt)("td",{parentName:"tr",align:null},"30"),(0,e.kt)("td",{parentName:"tr",align:null},"35"),(0,e.kt)("td",{parentName:"tr",align:null},"50"),(0,e.kt)("td",{parentName:"tr",align:null},"60"),(0,e.kt)("td",{parentName:"tr",align:null},"65")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"load"),(0,e.kt)("td",{parentName:"tr",align:null},"0.9"),(0,e.kt)("td",{parentName:"tr",align:null},"1.4"),(0,e.kt)("td",{parentName:"tr",align:null},"2"),(0,e.kt)("td",{parentName:"tr",align:null},"2.5"),(0,e.kt)("td",{parentName:"tr",align:null},"3"),(0,e.kt)("td",{parentName:"tr",align:null},"2.5"),(0,e.kt)("td",{parentName:"tr",align:null},"3.7")))),(0,e.kt)("h4",{id:"\u7ed3\u679c\u5206\u6790"},"\u7ed3\u679c\u5206\u6790"),(0,e.kt)("p",null,"\u53d1\u5e03\u914d\u7f6e\u4e24\u8005\u5dee\u522b\u4e0d\u5927,TPS \u57282500tps\u5de6\u53f3\u51fa\u73b0\u62d0\u70b9,http\u548c\u957f\u94fe\u63a5\u901a\u9053\u7684cpu\u6d88\u8017\u5206\u5e03\u7c7b\u4f3c\u3002\u957f\u94fe\u63a5\u5bf9\u53d1\u5e03\u914d\u7f6e\u63d0\u5347\u4e0d\u5927\u3002"),(0,e.kt)("h3",{id:"2-\u83b7\u53d6\u914d\u7f6e"},"2. \u83b7\u53d6\u914d\u7f6e"),(0,e.kt)("p",null,"\u968f\u673a\u83b7\u53d6200\u4e2a 5K\u5927\u5c0f\u914d\u7f6e"),(0,e.kt)("h4",{id:"nacos20-1"},"Nacos2.0"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"tps"),(0,e.kt)("th",{parentName:"tr",align:null},"2000"),(0,e.kt)("th",{parentName:"tr",align:null},"4000"),(0,e.kt)("th",{parentName:"tr",align:null},"6000"),(0,e.kt)("th",{parentName:"tr",align:null},"8000"),(0,e.kt)("th",{parentName:"tr",align:null},"10000"),(0,e.kt)("th",{parentName:"tr",align:null},"14000"),(0,e.kt)("th",{parentName:"tr",align:null},"18000\uff08\u5b9e\u964515000\uff09"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"avg rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"3.3"),(0,e.kt)("td",{parentName:"tr",align:null},"4"),(0,e.kt)("td",{parentName:"tr",align:null},"3.5"),(0,e.kt)("td",{parentName:"tr",align:null},"5"),(0,e.kt)("td",{parentName:"tr",align:null},"7"),(0,e.kt)("td",{parentName:"tr",align:null},"26"),(0,e.kt)("td",{parentName:"tr",align:null},"133")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"80% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"2.2"),(0,e.kt)("td",{parentName:"tr",align:null},"2.2"),(0,e.kt)("td",{parentName:"tr",align:null},"2.5"),(0,e.kt)("td",{parentName:"tr",align:null},"2.5"),(0,e.kt)("td",{parentName:"tr",align:null},"4"),(0,e.kt)("td",{parentName:"tr",align:null},"41"),(0,e.kt)("td",{parentName:"tr",align:null},"174")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"95% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"3.3"),(0,e.kt)("td",{parentName:"tr",align:null},"4.8"),(0,e.kt)("td",{parentName:"tr",align:null},"5.4"),(0,e.kt)("td",{parentName:"tr",align:null},"24"),(0,e.kt)("td",{parentName:"tr",align:null},"38"),(0,e.kt)("td",{parentName:"tr",align:null},"93"),(0,e.kt)("td",{parentName:"tr",align:null},"238")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"12"),(0,e.kt)("td",{parentName:"tr",align:null},"25"),(0,e.kt)("td",{parentName:"tr",align:null},"37"),(0,e.kt)("td",{parentName:"tr",align:null},"48"),(0,e.kt)("td",{parentName:"tr",align:null},"65"),(0,e.kt)("td",{parentName:"tr",align:null},"83"),(0,e.kt)("td",{parentName:"tr",align:null},"85")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"load"),(0,e.kt)("td",{parentName:"tr",align:null},"1.2"),(0,e.kt)("td",{parentName:"tr",align:null},"2"),(0,e.kt)("td",{parentName:"tr",align:null},"3"),(0,e.kt)("td",{parentName:"tr",align:null},"4"),(0,e.kt)("td",{parentName:"tr",align:null},"5"),(0,e.kt)("td",{parentName:"tr",align:null},"20"),(0,e.kt)("td",{parentName:"tr",align:null},"36")))),(0,e.kt)("h4",{id:"nacos1x-1"},"Nacos1.X"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"tps"),(0,e.kt)("th",{parentName:"tr",align:null},"2000"),(0,e.kt)("th",{parentName:"tr",align:null},"4000"),(0,e.kt)("th",{parentName:"tr",align:null},"6000"),(0,e.kt)("th",{parentName:"tr",align:null},"8000"),(0,e.kt)("th",{parentName:"tr",align:null},"10000"),(0,e.kt)("th",{parentName:"tr",align:null},"14000(\u5b9e\u964511000)"),(0,e.kt)("th",{parentName:"tr",align:null}))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"avg rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"3"),(0,e.kt)("td",{parentName:"tr",align:null},"7.4"),(0,e.kt)("td",{parentName:"tr",align:null},"12"),(0,e.kt)("td",{parentName:"tr",align:null},"22"),(0,e.kt)("td",{parentName:"tr",align:null},"46"),(0,e.kt)("td",{parentName:"tr",align:null},"176"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"80% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"1.8"),(0,e.kt)("td",{parentName:"tr",align:null},"2"),(0,e.kt)("td",{parentName:"tr",align:null},"4"),(0,e.kt)("td",{parentName:"tr",align:null},"7"),(0,e.kt)("td",{parentName:"tr",align:null},"35"),(0,e.kt)("td",{parentName:"tr",align:null},"185"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"95% rt(ms)"),(0,e.kt)("td",{parentName:"tr",align:null},"4.4"),(0,e.kt)("td",{parentName:"tr",align:null},"6"),(0,e.kt)("td",{parentName:"tr",align:null},"15"),(0,e.kt)("td",{parentName:"tr",align:null},"33"),(0,e.kt)("td",{parentName:"tr",align:null},"118"),(0,e.kt)("td",{parentName:"tr",align:null},"380"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"15"),(0,e.kt)("td",{parentName:"tr",align:null},"30"),(0,e.kt)("td",{parentName:"tr",align:null},"40"),(0,e.kt)("td",{parentName:"tr",align:null},"52"),(0,e.kt)("td",{parentName:"tr",align:null},"60"),(0,e.kt)("td",{parentName:"tr",align:null},"70"),(0,e.kt)("td",{parentName:"tr",align:null})),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"load"),(0,e.kt)("td",{parentName:"tr",align:null},"1.1"),(0,e.kt)("td",{parentName:"tr",align:null},"2.2"),(0,e.kt)("td",{parentName:"tr",align:null},"2.5"),(0,e.kt)("td",{parentName:"tr",align:null},"4"),(0,e.kt)("td",{parentName:"tr",align:null},"5.5"),(0,e.kt)("td",{parentName:"tr",align:null},"9"),(0,e.kt)("td",{parentName:"tr",align:null})))),(0,e.kt)("h4",{id:"\u7ed3\u679c\u5206\u6790-1"},"\u7ed3\u679c\u5206\u6790"),(0,e.kt)("p",null,"\u957f\u94fe\u63a5\u652f\u6491\u7684\u8bfbQPS\u63d0\u534750%\uff0cCPU\u6d88\u8017\u964d\u4f4e50%\uff0chttp\u7684CPU\u6d88\u801750%\u5728\u4e8e\u8bf7\u6c42\u5730\u5740\u89e3\u6790"),(0,e.kt)("h3",{id:"3-\u76d1\u542c\u914d\u7f6e"},"3. \u76d1\u542c\u914d\u7f6e"),(0,e.kt)("p",null,"\u4e24\u8005\u5747\u4e3a\u5355\u94fe\u63a5\u76d1\u542c200\u914d\u7f6e\u3002"),(0,e.kt)("h4",{id:"nacos20-2"},"Nacos2.0"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"tps"),(0,e.kt)("th",{parentName:"tr",align:null},"1500"),(0,e.kt)("th",{parentName:"tr",align:null},"3000"),(0,e.kt)("th",{parentName:"tr",align:null},"6000"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"30"),(0,e.kt)("td",{parentName:"tr",align:null},"30"),(0,e.kt)("td",{parentName:"tr",align:null},"60")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ygc"),(0,e.kt)("td",{parentName:"tr",align:null},"0"),(0,e.kt)("td",{parentName:"tr",align:null},"3.75s/\u6b21\uff0c7\u6b21 0.5\u79d2"),(0,e.kt)("td",{parentName:"tr",align:null},"3s/\u6b21\uff0c10\u6b21 1.4\u79d2")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cmsgc"),(0,e.kt)("td",{parentName:"tr",align:null},"0"),(0,e.kt)("td",{parentName:"tr",align:null},"0"),(0,e.kt)("td",{parentName:"tr",align:null},"0")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"load"),(0,e.kt)("td",{parentName:"tr",align:null},"6"),(0,e.kt)("td",{parentName:"tr",align:null},"14"),(0,e.kt)("td",{parentName:"tr",align:null},"20")))),(0,e.kt)("h4",{id:"nacos1x-2"},"Nacos1.X"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"tps"),(0,e.kt)("th",{parentName:"tr",align:null},"3000"),(0,e.kt)("th",{parentName:"tr",align:null},"4000"),(0,e.kt)("th",{parentName:"tr",align:null},"6000"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"80%"),(0,e.kt)("td",{parentName:"tr",align:null},"90%"),(0,e.kt)("td",{parentName:"tr",align:null},"80%")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"ygc"),(0,e.kt)("td",{parentName:"tr",align:null},"3s\u4e00\u6b21\uff0c10\u6b21\u8017\u65f60.5s"),(0,e.kt)("td",{parentName:"tr",align:null},"2s\u4e00\u6b21\uff0c15\u6b21\u8017\u65f61.5s"),(0,e.kt)("td",{parentName:"tr",align:null},"1.5s\u4e00\u6b21\uff0c20\u6b21\u8017\u65f61.3\u79d2")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"cmsgc"),(0,e.kt)("td",{parentName:"tr",align:null},"3s\u4e00\u6b21\uff0c10\u6b21\u8017\u65f618s"),(0,e.kt)("td",{parentName:"tr",align:null},"4.5\u4e00\u6b21\uff0c7\u6b21\u8017\u65f610s"),(0,e.kt)("td",{parentName:"tr",align:null},"7.5s\u4e00\u6b21\uff0c4\u6b21\u8017\u65f65s")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"load"),(0,e.kt)("td",{parentName:"tr",align:null},"6"),(0,e.kt)("td",{parentName:"tr",align:null},"8"),(0,e.kt)("td",{parentName:"tr",align:null},"11")))),(0,e.kt)("h4",{id:"\u7ed3\u679c\u5206\u6790-2"},"\u7ed3\u679c\u5206\u6790"),(0,e.kt)("p",null,"gRPC\u4ee51500tps\u6301\u7eed\u53d8\u66f4\u63a8\u9001\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u7cfb\u7edf\u6307\u6807\u7a33\u5b9a\uff0c\u8d85\u8fc71500tps\uff0c\u7cfb\u7edf\u5185\u5b58\u548cload\u6301\u7eed\u5347\u9ad8\uff0c\u4f46\u5b8c\u5168\u6ca1\u6709CMS GC\uff0cCPU\u4e5f\u7ef4\u6301\u5728\u8f83\u4f4e\u7684\u6c34\u51c6\u3002 Http \u5219\u6709\u8f83\u9ad8\u7684CMS GC\uff0cGC\u8017\u65f6\u4e25\u91cd\uff0cCPU\u635f\u8017\u9ad8\u3002"),(0,e.kt)("h3",{id:"4-\u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5"},"4. \u957f\u8fde\u63a5\u5bb9\u91cf\u6d4b\u8bd5"),(0,e.kt)("p",null,"\u4e24\u8005\u5747\u4e3a\u5355\u94fe\u63a5\u76d1\u542c200\u914d\u7f6e\u3002\u5feb\u4e0a\u4e3a\u540c\u65f6\u8fdb\u884c\u5927\u91cf\u914d\u7f6e\u53d1\u5e03\u3002"),(0,e.kt)("h4",{id:"nacos20-3"},"Nacos2.0"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"count"),(0,e.kt)("th",{parentName:"tr",align:null},"6000"),(0,e.kt)("th",{parentName:"tr",align:null},"8000"),(0,e.kt)("th",{parentName:"tr",align:null},"12000"),(0,e.kt)("th",{parentName:"tr",align:null},"15000"),(0,e.kt)("th",{parentName:"tr",align:null},"21000"),(0,e.kt)("th",{parentName:"tr",align:null},"31500"),(0,e.kt)("th",{parentName:"tr",align:null},"42000"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u5feb\u4e0a\u65f6cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"40"),(0,e.kt)("td",{parentName:"tr",align:null},"60"),(0,e.kt)("td",{parentName:"tr",align:null},"80"),(0,e.kt)("td",{parentName:"tr",align:null},"77"),(0,e.kt)("td",{parentName:"tr",align:null},"79"),(0,e.kt)("td",{parentName:"tr",align:null},"80"),(0,e.kt)("td",{parentName:"tr",align:null},"74")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u5feb\u4e0a\u65f6load"),(0,e.kt)("td",{parentName:"tr",align:null},"1.5"),(0,e.kt)("td",{parentName:"tr",align:null},"3"),(0,e.kt)("td",{parentName:"tr",align:null},"3.3"),(0,e.kt)("td",{parentName:"tr",align:null},"3.6"),(0,e.kt)("td",{parentName:"tr",align:null},"5.45"),(0,e.kt)("td",{parentName:"tr",align:null},"5.6"),(0,e.kt)("td",{parentName:"tr",align:null},"6.3")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u5feb\u4e0a\u8017\u65f6"),(0,e.kt)("td",{parentName:"tr",align:null},"55s"),(0,e.kt)("td",{parentName:"tr",align:null},"55s"),(0,e.kt)("td",{parentName:"tr",align:null},"76"),(0,e.kt)("td",{parentName:"tr",align:null},"100"),(0,e.kt)("td",{parentName:"tr",align:null},"80"),(0,e.kt)("td",{parentName:"tr",align:null},"140"),(0,e.kt)("td",{parentName:"tr",align:null},"130")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u65f6cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"1"),(0,e.kt)("td",{parentName:"tr",align:null},"1"),(0,e.kt)("td",{parentName:"tr",align:null},"1"),(0,e.kt)("td",{parentName:"tr",align:null},"1.3"),(0,e.kt)("td",{parentName:"tr",align:null},"2.8"),(0,e.kt)("td",{parentName:"tr",align:null},"1.7"),(0,e.kt)("td",{parentName:"tr",align:null},"2.1")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u65f6load"),(0,e.kt)("td",{parentName:"tr",align:null},"0.3"),(0,e.kt)("td",{parentName:"tr",align:null},"0.5"),(0,e.kt)("td",{parentName:"tr",align:null},"0.5"),(0,e.kt)("td",{parentName:"tr",align:null},"0.8"),(0,e.kt)("td",{parentName:"tr",align:null},"0.9"),(0,e.kt)("td",{parentName:"tr",align:null},"0.8"),(0,e.kt)("td",{parentName:"tr",align:null},"0.8")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"gc"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u540e\u65e0GC\u6d88\u8017"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u540e\u65e0GC\u6d88\u8017"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u540e\u65e0GC\u6d88\u8017"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u540e\u65e0GC\u6d88\u8017"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u540e\u65e0GC\u6d88\u8017"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u540e\u65e0GC\u6d88\u8017"),(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u540e\u65e0GC\u6d88\u8017")))),(0,e.kt)("h4",{id:"nacos1x-3"},"Nacos1.X"),(0,e.kt)("table",null,(0,e.kt)("thead",{parentName:"table"},(0,e.kt)("tr",{parentName:"thead"},(0,e.kt)("th",{parentName:"tr",align:null},"count"),(0,e.kt)("th",{parentName:"tr",align:null},"6000"),(0,e.kt)("th",{parentName:"tr",align:null},"8000"),(0,e.kt)("th",{parentName:"tr",align:null},"12000"),(0,e.kt)("th",{parentName:"tr",align:null},"15000"),(0,e.kt)("th",{parentName:"tr",align:null},"21000"),(0,e.kt)("th",{parentName:"tr",align:null},"31500"),(0,e.kt)("th",{parentName:"tr",align:null},"42000"))),(0,e.kt)("tbody",{parentName:"table"},(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u5feb\u4e0a\u65f6cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"80"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u5feb\u4e0a\u65f6load"),(0,e.kt)("td",{parentName:"tr",align:null},"8"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u5feb\u4e0a\u8017\u65f6"),(0,e.kt)("td",{parentName:"tr",align:null},"100s"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u65f6cpu"),(0,e.kt)("td",{parentName:"tr",align:null},"60"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"\u7a33\u5b9a\u65f6load"),(0,e.kt)("td",{parentName:"tr",align:null},"1"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-")),(0,e.kt)("tr",{parentName:"tbody"},(0,e.kt)("td",{parentName:"tr",align:null},"gc"),(0,e.kt)("td",{parentName:"tr",align:null},"cmsgc\u9891\u7e41\uff0c4\u79d2\u4e00\u6b21"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-"),(0,e.kt)("td",{parentName:"tr",align:null},"-")))),(0,e.kt)("h4",{id:"\u7ed3\u679c\u5206\u6790-3"},"\u7ed3\u679c\u5206\u6790"),(0,e.kt)("p",null,"\u5f53\u8fde\u63a5\u91cf\u8fbe\u5230600\u65f6\uff0cNacos1.X\u7684CMS GC\u5df2\u7ecf\u5341\u5206\u4e25\u91cd\uff0c4s\u4e00\u6b21\uff0c\u57fa\u672c\u5df2\u7ecf\u8fbe\u5230\u6781\u9650\uff1b\u53cd\u89c2Nacos2.0\uff0c\u53ef\u4ee5\u7ee7\u7eed\u589e\u957f\uff0c\u5355\u4ece\u652f\u6491\u957f\u94fe\u63a5\u6570\u91cf\u89d2\u5ea6\uff0cNacos2.0\u6bd4Nacos1.X\u652f\u64917\u500d\u4ee5\u4e0a\u957f\u94fe\u63a5\u3002"),(0,e.kt)("h2",{id:"\u6d4b\u8bd5\u7ed3\u8bba"},"\u6d4b\u8bd5\u7ed3\u8bba"),(0,e.kt)("p",null,"\u5355\u9879\u57fa\u7840\u63a5\u53e3\u538b\u6d4b"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"Nacos2.0\u8bfbQPS 14000QPS\uff0c\u5bf9\u6bd4Nacos1.X QPS 8000 \u63d0\u534775%\u3002"),(0,e.kt)("li",{parentName:"ul"},"Nacos2.0\u5199TPS 2500TPS\uff0c\u5bf9\u6bd4Nacos1.X\u65e0\u660e\u663e\u63d0\u5347\u3002"),(0,e.kt)("li",{parentName:"ul"},"Nacos2.0\u652f\u6491\u957f\u94fe\u63a540000\u4ee5\u4e0a\uff0c\u5bf9\u6bd4Nacos1.X\u63d0\u53477\u500d\u4ee5\u4e0a\u3002"),(0,e.kt)("li",{parentName:"ul"},"Nacos2.0\u53d8\u66f4\u63a8\u90011500/s, \u5bf9\u6bd4Nacos1.X\u65e0\u660e\u663e\u63d0\u5347\u3002")),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," "),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},"\u672c\u6d4b\u8bd5\u4e3a\u5bf9\u6bd4Nacos1.X\u7248\u672c\u7684\u6d4b\u8bd5\u573a\u666f\uff0c\u4ec5\u6d4b\u8bd5\u5355\u6838\u5fc3\u63a5\u53e3\u7684\u80fd\u529b\u503c\uff0c",(0,e.kt)("strong",{parentName:"li"},"\u771f\u5b9e\u6a21\u62df\u573a\u666f\u538b\u6d4b")," \u5c06\u5728\u540e\u7eed\u7248\u672c\u7ed9\u51fa\uff1b"),(0,e.kt)("li",{parentName:"ul"},"\u672c\u6d4b\u8bd5\u4f9b\u7ed9\u5927\u5bb6\u4f5c\u4e3a\u53c2\u8003\uff0c\u5982\u6709\u4e0d\u8db3\u6216\u504f\u5dee\uff0c\u8bf7\u6307\u6b63! \u5982\u679c\u5bf9\u6027\u80fd\u6709\u5176\u4ed6\u9700\u6c42\uff0c\u53ef\u4ee5\u7ed9\u6211\u4eec\u63d0issue\u3002")))}d.isMDXComponent=!0}}]);