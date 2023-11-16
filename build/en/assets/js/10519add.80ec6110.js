"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2185],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=i,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26076:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={title:"Nacos architecture",keywords:["Nacos","architecture"],description:"Nacos architecture"},o="Nacos architecture",s={unversionedId:"architecture",id:"version-1.X/architecture",title:"Nacos architecture",description:"Nacos architecture",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-1.X/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/en/docs/1.X/architecture",draft:!1,tags:[],version:"1.X",frontMatter:{title:"Nacos architecture",keywords:["Nacos","architecture"],description:"Nacos architecture"},sidebar:"docs",previous:{title:"Nacos Concepts",permalink:"/en/docs/1.X/concepts"},next:{title:"Quick Start for Nacos",permalink:"/en/docs/1.X/quick-start"}},c={},l=[{value:"Basic Architecture and Concepts",id:"basic-architecture-and-concepts",level:2},{value:"Service",id:"service",level:3},{value:"Service Registry",id:"service-registry",level:3},{value:"Service Metadata",id:"service-metadata",level:3},{value:"Service Provider",id:"service-provider",level:3},{value:"Service Consumer",id:"service-consumer",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Configuration Management",id:"configuration-management",level:3},{value:"Naming Service",id:"naming-service",level:3},{value:"Configuration Service",id:"configuration-service",level:3},{value:"More concepts...",id:"more-concepts",level:3},{value:"Introduction to logical architecture and its components",id:"introduction-to-logical-architecture-and-its-components",level:2},{value:"Domain Model",id:"domain-model",level:2},{value:"Data Model",id:"data-model",level:3},{value:"Service Entity Relationship Model",id:"service-entity-relationship-model",level:3},{value:"Config Entity Relationship Model",id:"config-entity-relationship-model",level:3},{value:"Class view",id:"class-view",level:2},{value:"Nacos-SDK Class view",id:"nacos-sdk-class-view",level:3},{value:"Artifacts, Deployment, and Start Mode",id:"artifacts-deployment-and-start-mode",level:2},{value:"Two Artifacts",id:"two-artifacts",level:3},{value:"Two Start Modes",id:"two-start-modes",level:3},{value:"Free Public Cloud Service on Alibaba Cloud",id:"free-public-cloud-service-on-alibaba-cloud",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nacos-architecture"},"Nacos architecture"),(0,i.kt)("h2",{id:"basic-architecture-and-concepts"},"Basic Architecture and Concepts"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217892717-1418fb9b-7faa-4324-87b9-f1740329f564.jpeg",alt:"nacos_arch.jpg"})," "),(0,i.kt)("h3",{id:"service"},"Service"),(0,i.kt)("p",null,"A software function or a set of software functions (such as the retrieval of specified information or the execution of a set of operations) with the purpose that different clients can be reused for different purposes (for example, through a cross-process network call). Nacos supports almost all types of services:\n",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Kubernetes Service")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/guides/concepts.html#service-definition"},"gRPC"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://dubbo.incubator.apache.org/#/?lang=en-us"}," | Dubbo RPC Service")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://spring.io/understanding/REST"},"Spring Cloud RESTful Service")),(0,i.kt)("h3",{id:"service-registry"},"Service Registry"),(0,i.kt)("p",null,"The database of services, instances and metadata. Service instances are registered with the service registry on startup and deregistered on shutdown. Clients of the service and/or routers query the service registry to find the available instances of a service. A service registry might invoke a service instances health check API to verify that it is able to handle requests."),(0,i.kt)("h3",{id:"service-metadata"},"Service Metadata"),(0,i.kt)("p",null,"Data describing services such as service endpoints, service labels, service version, service instance weights, routing rules, security policies."),(0,i.kt)("h3",{id:"service-provider"},"Service Provider"),(0,i.kt)("p",null,"A process or application which provides reusable and callable services."),(0,i.kt)("h3",{id:"service-consumer"},"Service Consumer"),(0,i.kt)("p",null,"A process or application which initiates a call to a service."),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"During system development, developers usually extract some parameters or variables that need to be changed from the code and manage them in a separate configuration file. This enables the static system artifacts or deliverables (such as WAR and JAR packages) to fit with the physical operating environment in a better way. Configuration management is generally a part of system deployment, which is executed by the administrator or operation and maintenance personnel. Configuration modification is an effective method to adjust the behavior of a running system."),(0,i.kt)("h3",{id:"configuration-management"},"Configuration Management"),(0,i.kt)("p",null,"In the data center, all configuration-related activities such as editing, storage, distribution, change management, history version management, and change audit are collectively referred to as configuration management."),(0,i.kt)("h3",{id:"naming-service"},"Naming Service"),(0,i.kt)("p",null,'Mapping the "names" of all the objects and entities in the distributed system to the associated metadata, for example, ',(0,i.kt)("inlineCode",{parentName:"p"},"ServiceName")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoints\\Version etc..."),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Distributed Lock Name")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Lock Owner/Status Info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DNS Domain Name")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"IP List"),". Service discovery and DNS are the two major scenarios of naming service."),(0,i.kt)("h3",{id:"configuration-service"},"Configuration Service"),(0,i.kt)("p",null,"Providing dynamic configuration, service metadata and configuration management for other services or application."),(0,i.kt)("h3",{id:"more-concepts"},(0,i.kt)("a",{parentName:"h3",href:"/en/docs/1.X/concepts"},"More concepts...")),(0,i.kt)("h2",{id:"introduction-to-logical-architecture-and-its-components"},"Introduction to logical architecture and its components"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/png/338441/1561217775318-6e408805-18bb-4242-b4e9-83c5b929b469.png",alt:"nacos-logic.jpg"})," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Service Management: Implement services CRUD, domain name CRUD, service health check, service weight management, etc."),(0,i.kt)("li",{parentName:"ul"},"Configuration Management: Implement configuration CRUD, version management, grayscale management, monitoring management, push trajectory, aggregate data, etc."),(0,i.kt)("li",{parentName:"ul"},"Metadata Management: Provides metadata CURD and marking capabilities"),(0,i.kt)("li",{parentName:"ul"},"Plug-in mechanism: implements three modules to share the ability to implement the extended point SPI mechanism"),(0,i.kt)("li",{parentName:"ul"},"Event mechanism: implement asynchronous event notification, sdk data change asynchronous notification and other logic"),(0,i.kt)("li",{parentName:"ul"},"Log module: Manage log classification, log level, log portability (especially to avoid conflicts), log format, exception code + help documentation"),(0,i.kt)("li",{parentName:"ul"},"Callback mechanism: sdk informs the data and calls back user processing through a unified mode. Interface and data structures need to be scalable"),(0,i.kt)("li",{parentName:"ul"},"Addressing mode: solve various addressing modes such as ip, domain name, nameserver, broadcast, etc., need to be expandable"),(0,i.kt)("li",{parentName:"ul"},"Push channel: solve the push performance problem between server and storage, server, server and sdk"),(0,i.kt)("li",{parentName:"ul"},"Capacity management: manage each tenant, the capacity under the group, prevent the storage from being blasted, affecting service availability"),(0,i.kt)("li",{parentName:"ul"},"Traffic management: control the request frequency, the number of long links, the size of the message, and request flow control according to multiple dimensions such as tenant and group."),(0,i.kt)("li",{parentName:"ul"},"Caching mechanism: disaster recovery directory, local cache, server cache mechanism. Disaster recovery catalogue requires tools"),(0,i.kt)("li",{parentName:"ul"},"Startup mode: Start different programs + UI according to stand-alone mode, configuration mode, service mode, dns mode, or all mode"),(0,i.kt)("li",{parentName:"ul"},"Consistency Protocol: Resolve different data, different consistency requirements, different consistency mechanisms"),(0,i.kt)("li",{parentName:"ul"},"Storage module: solve data persistence, non-persistent storage, solve data fragmentation problem"),(0,i.kt)("li",{parentName:"ul"},"Nameserver: Resolve the routing problem from namespace to clusterid, solve the mapping problem between user environment and nacos physical environment"),(0,i.kt)("li",{parentName:"ul"},"CMDB: Solve the metadata storage, docking problems with the three-party cmdb system, solving applications, people, resource relationships"),(0,i.kt)("li",{parentName:"ul"},"Metrics: Exposes standard metrics data for easy access to three-way monitoring systems"),(0,i.kt)("li",{parentName:"ul"},"Trace: Exposure standard trace, easy to open with SLA system, log whitening, push trajectory, etc., and can be connected with metering and billing system"),(0,i.kt)("li",{parentName:"ul"},"Access management: equivalent to Ali cloud service, assign identity, capacity, authority process"),(0,i.kt)("li",{parentName:"ul"},"User Management: Resolve issues such as user management, login, sso, etc."),(0,i.kt)("li",{parentName:"ul"},"Rights Management: Resolve issues such as identity, access control, role management, etc."),(0,i.kt)("li",{parentName:"ul"},"Audit system: extended interface facilitates access to different company audit systems"),(0,i.kt)("li",{parentName:"ul"},"Notification system: Core data changes, or operations, facilitated through the SMS system, notify the corresponding person data changes"),(0,i.kt)("li",{parentName:"ul"},"OpenAPI: exposes the standard Rest style HTTP interface, easy to use, and easy for multi-language integration"),(0,i.kt)("li",{parentName:"ul"},"Console: easy to use console, do service management, configuration management, etc."),(0,i.kt)("li",{parentName:"ul"},"SDK: Multilingual sdk"),(0,i.kt)("li",{parentName:"ul"},"Agent: dns-f similar mode, or integration with mesh and other programs"),(0,i.kt)("li",{parentName:"ul"},"CLI: Lightweight management of the product on the command line, as easy as git")),(0,i.kt)("h2",{id:"domain-model"},"Domain Model"),(0,i.kt)("h3",{id:"data-model"},"Data Model"),(0,i.kt)("p",null,"The Nacos data model Key is uniquely determined by the triplet. The Namespace defaults to an empty string, the public namespace (public), and the group defaults to DEFAULT_GROUP."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217857314-95ab332c-acfb-40b2-957a-aae26c2b5d71.jpeg",alt:"nacos_data_model"})," "),(0,i.kt)("h3",{id:"service-entity-relationship-model"},"Service Entity Relationship Model"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217924697-ba504a35-129f-4fc6-b0df-1130b995375a.jpeg",alt:"nacos_naming_data_model"})," "),(0,i.kt)("h3",{id:"config-entity-relationship-model"},"Config Entity Relationship Model"),(0,i.kt)("p",null,"Around the configuration, there are mainly two associated entities, one is the configuration change history, and the other is the service tag (used for marking classification, convenient for indexing), which is associated by ID."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217958896-4465757f-f588-4797-9c90-a76e604fabb4.jpeg",alt:"nacos_config_er"})," "),(0,i.kt)("h2",{id:"class-view"},"Class view"),(0,i.kt)("h3",{id:"nacos-sdk-class-view"},"Nacos-SDK Class view"),(0,i.kt)("p",null,"// TODO Service part to be continued"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/25574784/1650771676187-d95a9e45-8656-4d1a-8b5b-ed63a23a816b.png",alt:"nacos_sdk_class_relation"})," "),(0,i.kt)("h2",{id:"artifacts-deployment-and-start-mode"},"Artifacts, Deployment, and Start Mode"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1531730742844-e8325932-258b-49b2-9473-8d1199efe20d.png",alt:"undefined"})," "),(0,i.kt)("h3",{id:"two-artifacts"},"Two Artifacts"),(0,i.kt)("p",null,"Nacos supports both standard Docker images (v0.2.0) and nacos-.zip(tar.gz). You can choose the appropriate build to deploy the Nacos service according to your needs."),(0,i.kt)("h3",{id:"two-start-modes"},"Two Start Modes"),(0,i.kt)("p",null,"Nacos supports two start modes. you can merging the Service Registry and the Config Center in one process or deploying them in separately cluster."),(0,i.kt)("h3",{id:"free-public-cloud-service-on-alibaba-cloud"},"Free Public Cloud Service on Alibaba Cloud"),(0,i.kt)("p",null,"In addition to deploying and launching Nacos services by users themselves, Nacos also supports public cloud. Nacos public cloud service will be free in Alibaba Cloud's commercial service (such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/acm"},"ACM"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/edas"},"EDAS"),"). We also welcome other public cloud providers to offer Nacos public cloud services."))}p.isMDXComponent=!0}}]);