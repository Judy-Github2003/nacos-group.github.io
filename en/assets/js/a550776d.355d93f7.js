"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[1532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Nacos supports synchronizing metadata from K8S service discovery",keywords:["Nacos","k8s","kubernetes"],description:"Nacos supports synchronizing metadata from K8S service discovery"},i="Nacos supports synchronizing metadata from K8S service discovery",s={unversionedId:"ecology/use-nacos-with-k8s-sync",id:"ecology/use-nacos-with-k8s-sync",title:"Nacos supports synchronizing metadata from K8S service discovery",description:"Nacos supports synchronizing metadata from K8S service discovery",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ecology/use-nacos-with-k8s-sync.md",sourceDirName:"ecology",slug:"/ecology/use-nacos-with-k8s-sync",permalink:"/en/docs/next/ecology/use-nacos-with-k8s-sync",draft:!1,tags:[],version:"current",frontMatter:{title:"Nacos supports synchronizing metadata from K8S service discovery",keywords:["Nacos","k8s","kubernetes"],description:"Nacos supports synchronizing metadata from K8S service discovery"}},c={},l=[{value:"Data synchronization",id:"data-synchronization",level:2},{value:"Configuration file",id:"configuration-file",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nacos-supports-synchronizing-metadata-from-k8s-service-discovery"},"Nacos supports synchronizing metadata from K8S service discovery"),(0,a.kt)("h2",{id:"data-synchronization"},"Data synchronization"),(0,a.kt)("p",null,"Nacos monitors the changes of services and instances in K8S, obtains its service metadata, and synchronizes the change information to Nacos' service discovery. Supports K8S version 1.22 (corresponding to K8S-Java-API version 14.0.0).The diagram is as follow:\n",(0,a.kt)("img",{src:n(23321).Z,width:"2236",height:"1086"})),(0,a.kt)("p",null,"Mapping scheme of K8S resource synchronization to Nacos resource (single-direction, Nacos resource synchronization to K8S resource to be supplemented) :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"K8S Data to be synchronized"),(0,a.kt)("th",{parentName:"tr",align:null},"Field in K8S"),(0,a.kt)("th",{parentName:"tr",align:null},"Field mapped to Nacos"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service name"),(0,a.kt)("td",{parentName:"tr",align:null},"service.metadata.name"),(0,a.kt)("td",{parentName:"tr",align:null},"service.name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service targetPort(pod port)(multiple)"),(0,a.kt)("td",{parentName:"tr",align:null},"service.ports.targetPort"),(0,a.kt)("td",{parentName:"tr",align:null},"instance.port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service name"),(0,a.kt)("td",{parentName:"tr",align:null},"service.metadata.name"),(0,a.kt)("td",{parentName:"tr",align:null},"instance.cluster")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"service port(multiple)"),(0,a.kt)("td",{parentName:"tr",align:null},"service.ports.port"),(0,a.kt)("td",{parentName:"tr",align:null},"instance.extendData<String, Object>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pod ip"),(0,a.kt)("td",{parentName:"tr",align:null},"pod.status.hostIP / service.ipFamilies"),(0,a.kt)("td",{parentName:"tr",align:null},"instance.ip")))),(0,a.kt)("h2",{id:"configuration-file"},"Configuration file"),(0,a.kt)("p",null,"Deploy the Nacos cluster according to ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/next/guide/admin/deployment"},"the deploy document")),(0,a.kt)("p",null,"Configure the application.properties file to enable K8S synchronization:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.k8s.sync.enabled=true\n")),(0,a.kt)("p",null,"If you are using the Java API from an application outside the K8S cluster, you need to specify kubeConfig:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nacos.k8s.sync.outsideCluster=true\nnacos.k8s.sync.kubeConfig=/.kube/config\n")),(0,a.kt)("p",null,"After configuration, services and instance changes in K8S are automatically synchronized to Nacos."))}d.isMDXComponent=!0},23321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/k8s-sync-796957150de5e861eeb48e1ce7945994.jpg"}}]);