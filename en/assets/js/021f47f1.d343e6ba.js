"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=g(n),d=i,m=c["".concat(p,".").concat(d)]||c[d]||s[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var g=2;g<r;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>g});var a=n(87462),i=(n(67294),n(3905));const r={title:"Config Change Plugin",keywords:["Config Change","Config audit","Config format check","webhook"],description:"Nacos support Config Change Plugin."},o=void 0,l={unversionedId:"plugin/config-change-plugin",id:"plugin/config-change-plugin",title:"Config Change Plugin",description:"Nacos support Config Change Plugin.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/plugin/config-change-plugin.md",sourceDirName:"plugin",slug:"/plugin/config-change-plugin",permalink:"/en/docs/next/plugin/config-change-plugin",draft:!1,tags:[],version:"current",frontMatter:{title:"Config Change Plugin",keywords:["Config Change","Config audit","Config format check","webhook"],description:"Nacos support Config Change Plugin."},sidebar:"docs",previous:{title:"CustomEnvironment",permalink:"/en/docs/next/plugin/custom-environment-plugin"},next:{title:"control-plugin",permalink:"/en/docs/next/plugin/control-plugin"}},p={},g=[{value:"Concepts in Config Change Plugin",id:"concepts-in-config-change-plugin",level:2},{value:"ConfigChangePointCutTypes",id:"configchangepointcuttypes",level:3},{value:"ConfigChangeExecuteTypes",id:"configchangeexecutetypes",level:3},{value:"Plugin Development",id:"plugin-development",level:2},{value:"Load Plugin",id:"load-plugin",level:3},{value:"Custom Plugin properties",id:"custom-plugin-properties",level:3},{value:"Plugin Demo",id:"plugin-demo",level:2}],u={toc:g},c="wrapper";function s(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Translated by AI."),(0,i.kt)("h1",{parentName:"blockquote",id:"config-change-plugin"},"Config Change Plugin")),(0,i.kt)("p",null,"Community has long been hoping for Nacos Configuration Center to provide notifications to specific systems when configurations change. These notifications are used for recording, warning, and auditing purposes. Before version 2.3.0, the only way to achieve this was by simulating Nacos client subscription to the configurations. This approach involved subscribing to changes in core configurations and executing functionalities such as sending records and warnings upon receiving change notifications."),(0,i.kt)("p",null,"However, this implementation had a few significant issues. Firstly, individual configurations needed to be added one by one, making it difficult to capture all configuration changes. Secondly, functionalities could only be executed after configuration changes, and there was no capability for performing pre-change operations such as format validation or whitelist validation."),(0,i.kt)("p",null,"To address these limitations, starting from Nacos version 2.3.0, Nacos introduced support for injecting configuration change plugins through the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/sound/SPI-intro.html"},"SPI"),". This allows users to define custom plugins to execute specific logic before and after configuration changes. Examples of such logic include format validation, whitelist validation, and webhook integrations."),(0,i.kt)("p",null,"These enhancements provide more flexibility and control for users to implement their own custom logic before and after configuration changes in Nacos Configuration Center."),(0,i.kt)("h2",{id:"concepts-in-config-change-plugin"},"Concepts in Config Change Plugin"),(0,i.kt)("p",null,"Nacos's configuration change plugin design takes inspiration from the aspect-oriented programming (AOP) paradigm. It treats configuration change operations, such as adding, updating, and deleting, as the ",(0,i.kt)("inlineCode",{parentName:"p"},"pointcuts")," and weaves the plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"before")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," these pointcuts."),(0,i.kt)("h3",{id:"configchangepointcuttypes"},"ConfigChangePointCutTypes"),(0,i.kt)("p",null,"Nacos has categorized the configuration change operations based on their behaviors and sources. These configuration change operations are defined as several ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangePointCutTypes")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.config.constants.ConfigChangePointCutTypes"),". The specific details are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PointCut Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Start version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PUBLISH_BY_HTTP"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration is published through the HTTP interface, including creating and modifying configurations."),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PUBLISH_BY_RPC"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration is published through the gRPC interface, including creating and modifying configurations."),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REMOVE_BY_HTTP"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration is removed through the HTTP interface."),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REMOVE_BY_RPC"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration is removed through the gRPC interface."),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IMPORT_BY_HTTP"),(0,i.kt)("td",{parentName:"tr",align:null},"Configuration is imported through the HTTP interface."),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REMOVE_BATCH_HTTP"),(0,i.kt)("td",{parentName:"tr",align:null},"Configurations are batch removed through the HTTP interface."),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")))),(0,i.kt)("h3",{id:"configchangeexecutetypes"},"ConfigChangeExecuteTypes"),(0,i.kt)("p",null,"In Nacos, the configuration change plugins need to be executed before or after the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangePointCutTypes")," by selecting the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangeExecuteTypes"),". These execution types are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.config.constants.ConfigChangeExecuteTypes"),". The specific details are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Execute Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Start version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EXECUTE_BEFORE_TYPE"),(0,i.kt)("td",{parentName:"tr",align:null},"Plugin execute ",(0,i.kt)("strong",{parentName:"td"},"Before")," ",(0,i.kt)("inlineCode",{parentName:"td"},"ConfigChangePointCutTypes")),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EXECUTE_AFTER_TYPE"),(0,i.kt)("td",{parentName:"tr",align:null},"Plugin execute ",(0,i.kt)("strong",{parentName:"td"},"After")," ",(0,i.kt)("inlineCode",{parentName:"td"},"ConfigChangePointCutTypes")),(0,i.kt)("td",{parentName:"tr",align:null},"2.3.0")))),(0,i.kt)("h2",{id:"plugin-development"},"Plugin Development"),(0,i.kt)("p",null,"To develop a config change plugin for the Nacos server, you first need to depend on the relevant API of the config change plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>com.alibaba.nacos</groupId>\n            <artifactId>nacos-config-plugin</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"${project.version}")," is the Nacos version, at least ",(0,i.kt)("inlineCode",{parentName:"p"},"2.3.0"),"."),(0,i.kt)("p",null,"Then implement ",(0,i.kt)("inlineCode",{parentName:"p"},"com.alibaba.nacos.plugin.config.spi.ConfigChangePluginService")," interface, which include following method:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method name"),(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Return"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getServiceType"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the name of the plugin, which is used to differentiate between different types of plugin implementations.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"getOrder"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the execution order of the plugin. The configuration change plugin is designed with a chain plugin pattern, where multiple plugins are executed in order. The smaller the return value of getOrder, the earlier the plugin is executed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"executeType"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"ConfigChangeExecuteTypes"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns ",(0,i.kt)("inlineCode",{parentName:"td"},"ConfigChangeExecuteTypes")," implemented by the plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pointcutMethodNames"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"ConfigChangePointCutTypes[]"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns ",(0,i.kt)("inlineCode",{parentName:"td"},"ConfigChangePointCutTypes")," where the plugin is implemented.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"execute"),(0,i.kt)("td",{parentName:"tr",align:null},"ConfigChangeRequest,ConfigChangeResponse"),(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"Executes the actual logic of the plugin.")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangeRequest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangeResponse")," refer to the contents passed in during the execution of logic and the resulting execution outcome, respectively."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangeRequest")," mainly include follow contents:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"requestType"),(0,i.kt)("td",{parentName:"tr",align:null},"ConfigChangePointCutTypes"),(0,i.kt)("td",{parentName:"tr",align:null},"The pointcut types of this configuration change")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"requestArgs"),(0,i.kt)("td",{parentName:"tr",align:null},"HashMap<String, Object>"),(0,i.kt)("td",{parentName:"tr",align:null},"The actual parameters of this configuration change, mainly including ",(0,i.kt)("inlineCode",{parentName:"td"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"group"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"dataId"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"content"),", etc., with different parameters for different pointcut types")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangeResponse")," mainly include follow contents:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"responseType"),(0,i.kt)("td",{parentName:"tr",align:null},"ConfigChangePointCutTypes"),(0,i.kt)("td",{parentName:"tr",align:null},"The pointcut types of this configuration change")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"isSuccess"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates whether the execution is successful. When the return value is ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", the configuration change will be intercepted and the failure result will be returned directly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"retVal"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Return content, a reserved field that is currently not used")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"msg"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Execution result information, obtained when ",(0,i.kt)("inlineCode",{parentName:"td"},"isSuccess")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", used to return information to the client")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"args"),(0,i.kt)("td",{parentName:"tr",align:null},"Object[]"),(0,i.kt)("td",{parentName:"tr",align:null},"The execution parameters of the configuration change, effective for the ",(0,i.kt)("inlineCode",{parentName:"td"},"EXECUTE_BEFORE_TYPE")," plugin type. It can be used to modify the content of the actual executed configuration change, such as changing certain values in content to other values")))),(0,i.kt)("h3",{id:"load-plugin"},"Load Plugin"),(0,i.kt)("p",null,"After the plugin finished, it needs to be packaged into jar/zip and places in the classpath of the nacos server. If you don't know how to add plugins into the classpath, please place plugins under ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/plugins")," directly."),(0,i.kt)("p",null,"After Adding plugins into classpath, also need to modify some configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"### The name of the config change plugin enabled in Nacos, corresponding to the return value of com.alibaba.nacos.plugin.config.spi.ConfigChangePluginService's getServiceType method.\nnacos.core.config.plugin.${configChangePluginName}.enabled=true\n")),(0,i.kt)("p",null,"After restarting the Nacos cluster and completing the startup, you can see the following logs in ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/logs/plugin-control.log"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[ConfigChangePluginManager] Load ${className}(${classFullName}) ConfigChangeServiceName(${configChangePluginName}) successfully.\n")),(0,i.kt)("h3",{id:"custom-plugin-properties"},"Custom Plugin properties"),(0,i.kt)("p",null,"Some plugins may want to set certain parameters through a configuration file. Custom plugins can modify the following configurations in ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties")," to achieve this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"### The name of the config change plugin enabled in Nacos, corresponding to the return value of com.alibaba.nacos.plugin.config.spi.ConfigChangePluginService's getServiceType method.\nnacos.core.config.plugin.${configChangePluginName}.${propertyKey}=${propertyValue}\n")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigChangeRequest"),", getting properties by following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Java"},'final Properties properties = (Properties) configChangeRequest.getArg(ConfigChangeConstants.PLUGIN_PROPERTIES);\nfinal String ${propertyKey} = properties.getProperty("${propertyKey}");\n')),(0,i.kt)("h2",{id:"plugin-demo"},"Plugin Demo"),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nacos-group/nacos-plugin"},"nacos-group/nacos-plugin")," repository, there is a demo implementation of a configuration change plugin. This demo plugin implements validation of the configuration content format, validation of the whitelist for importing configuration names, and a webhook callback after the change. To use this plugin, you need to package it as a JAR/ZIP file and place it in the classpath of the Nacos server. Additionally, add the following configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"${nacos-server.path}/conf/application.properties"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# webhook\n#nacos.core.config.plugin.webhook.enabled=true\n# It is recommended to use EB https://help.aliyun.com/document_detail/413974.html\n#nacos.core.config.plugin.webhook.url=http://${webhookIp}:${webhookPort}/${webhookUri}?token=***\n# The content push max capacity ,byte\n#nacos.core.config.plugin.webhook.contentMaxCapacity=102400\n\n# whitelist\n#nacos.core.config.plugin.whitelist.enabled=true\n# The import file suffixs\n#nacos.core.config.plugin.whitelist.suffixs=xml,text,properties,yaml,html\n\n# fileformatcheck,which validate the import file of type and content\n#nacos.core.config.plugin.fileformatcheck.enabled=true\n")))}s.isMDXComponent=!0}}]);