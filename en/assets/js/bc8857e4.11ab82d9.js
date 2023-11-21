"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[2363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,k=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={title:"Authentication",keywords:["Authentication"],description:"Authentication"},i=void 0,l={unversionedId:"guide/user/auth",id:"version-2.X/guide/user/auth",title:"Authentication",description:"Authentication",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/guide/user/auth.md",sourceDirName:"guide/user",slug:"/guide/user/auth",permalink:"/en/docs/guide/user/auth",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Authentication",keywords:["Authentication"],description:"Authentication"},sidebar:"docs",previous:{title:"Open API Guide",permalink:"/en/docs/guide/user/open-api"},next:{title:"FAQ",permalink:"/en/docs/guide/user/faq"}},s={},u=[{value:"Related Parameters",id:"related-parameters",level:2},{value:"Use Authentication in Servers",id:"use-authentication-in-servers",level:2},{value:"Without Docker",id:"without-docker",level:3},{value:"Custom SecretKey",id:"custom-secretkey",level:4},{value:"With Docker",id:"with-docker",level:3},{value:"Official images",id:"official-images",level:4},{value:"Custom images",id:"custom-images",level:4},{value:"Authentication in Clients",id:"authentication-in-clients",level:2},{value:"Authentication in Java SDK",id:"authentication-in-java-sdk",level:3},{value:"Example Code",id:"example-code",level:4},{value:"Authentication in Other languages SDK",id:"authentication-in-other-languages-sdk",level:3},{value:"Authentication in Open-API",id:"authentication-in-open-api",level:3},{value:"Open feature for token cache",id:"open-feature-for-token-cache",level:2},{value:"Background",id:"background",level:4},{value:"Way to open",id:"way-to-open",level:4},{value:"Attention",id:"attention",level:4},{value:"Open feature for server identity",id:"open-feature-for-server-identity",level:2},{value:"Upgrade from old version",id:"upgrade-from-old-version",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Attention"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Nacos is an internal micro service component, which needs to run in a trusted internal network. It can not be exposed to the public network environment to prevent security risks."),(0,r.kt)("li",{parentName:"ul"},"Nacos provides a simple authentication implementation. It is a weak authentication system to prevent business misuse, not a strong authentication system to prevent malicious attacks."),(0,r.kt)("li",{parentName:"ul"},"If you are running in an untrusted network environment or have strong authentication demands, please refer to the official simple implementation to develop ",(0,r.kt)("a",{parentName:"li",href:"/en/docs/plugin/auth-plugin"},"Authentication plugin"),"."))),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("h2",{id:"related-parameters"},"Related Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Versions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable the authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.system.type"),(0,r.kt)("td",{parentName:"tr",align:null},"nacos"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of authentication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.plugin.nacos.token.secret.key"),(0,r.kt)("td",{parentName:"tr",align:null},"SecretKey012345678901234567890123456789012345678901234567890123456789(No default since 2.2.0.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to generate the key used by the user to login to the temporary accessToken in the default authentication plugin. ",(0,r.kt)("strong",{parentName:"td"},"Using the default value is a security risk"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.plugin.nacos.token.expire.seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"18000"),(0,r.kt)("td",{parentName:"tr",align:null},"2.1.0 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration time of user login temporary accessToken")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.enable.userAgentAuthWhite"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.1 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to use the useragent whitelist, mainly used to adapt to the upgrade of the old version, ",(0,r.kt)("strong",{parentName:"td"},"Setting ",(0,r.kt)("inlineCode",{parentName:"strong"},"true")," is a security risk"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.key"),(0,r.kt)("td",{parentName:"tr",align:null},"serverIdentity(No default since 2.2.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.1 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to replace the identification key of the useragent whitelist, ",(0,r.kt)("strong",{parentName:"td"},"Using the default value is a security risk"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nacos.core.auth.server.identity.value"),(0,r.kt)("td",{parentName:"tr",align:null},"security(No default since 2.2.1)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.4.1 ~ latest"),(0,r.kt)("td",{parentName:"tr",align:null},"It is used to replace the identification value of the useragent whitelist, ",(0,r.kt)("strong",{parentName:"td"},"Using the default value is a security risk"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"td"},"nacos.core.auth.default.token.secret.key")),(0,r.kt)("td",{parentName:"tr",align:null},"SecretKey012345678901234567890123456789012345678901234567890123456789"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ 2.0.4"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as ",(0,r.kt)("inlineCode",{parentName:"td"},"nacos.core.auth.plugin.nacos.token.secret.key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("del",{parentName:"td"},"nacos.core.auth.default.token.expire.seconds")),(0,r.kt)("td",{parentName:"tr",align:null},"18000"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2.0 ~ 2.0.4"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as ",(0,r.kt)("inlineCode",{parentName:"td"},"nacos.core.auth.plugin.nacos.token.expire.seconds"))))),(0,r.kt)("h2",{id:"use-authentication-in-servers"},"Use Authentication in Servers"),(0,r.kt)("h3",{id:"without-docker"},"Without Docker"),(0,r.kt)("p",null,"By default, no login is required to start following the official document configuration, which can expose the configuration center directly to the outside world. However, if the authentication is enabled, one can use nacos only after he configures the user name and password."),(0,r.kt)("p",null,"Before enabling authentication, the configuration in application.properties is as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"### If turn on auth system:\nnacos.core.auth.enabled=false\n")),(0,r.kt)("p",null,"After enabling authentication, the configuration in application.properties is as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"### If turn on auth system:\nnacos.core.auth.system.type=nacos\nnacos.core.auth.enabled=true\n")),(0,r.kt)("h4",{id:"custom-secretkey"},"Custom SecretKey"),(0,r.kt)("p",null,"After enabling authentication, you can customize the key used to generate JWT tokens\uff0cthe configuration in application.properties is as follow\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Attention\uff1a"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"The secret key provided in the document is a public key. Please replace it with other secret key content during actual deployment to prevent security risks caused by secret key leakage."),(0,r.kt)("li",{parentName:"ol"},"After version 2.2.0.1, the community release version will remove the following value as the default value in the document, which needs to be filled in by yourself, otherwise the node cannot be started."),(0,r.kt)("li",{parentName:"ol"},"The secret key needs to be consistent between nodes, and if it is inconsistent for a long time, it may cause 403 invalid token error."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### The default token(Base64 String):\nnacos.core.auth.default.token.secret.key=SecretKey012345678901234567890123456789012345678901234567890123456789\n\n### Since 2.1.0\nnacos.core.auth.plugin.nacos.token.secret.key=SecretKey012345678901234567890123456789012345678901234567890123456789\n")),(0,r.kt)("p",null,"When customizing the key, it is recommended to set the configuration item to a ",(0,r.kt)("strong",{parentName:"p"},"Base64 encoded")," string,\nand ",(0,r.kt)("strong",{parentName:"p"},"the length of the original key must not be less than 32 characters"),". For example the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"### The default token(Base64 String):\nnacos.core.auth.default.token.secret.key=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=\n\n### Since 2.1.0\nnacos.core.auth.plugin.nacos.token.secret.key=VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Attention: the authentication switch takes effect immediately after the modification, and there is no need to restart the server. When dynamic modifing ",(0,r.kt)("inlineCode",{parentName:"p"},"token.secret.key"),", Please make sure the new value is valid, otherwise the login and request will fail.")),(0,r.kt)("h3",{id:"with-docker"},"With Docker"),(0,r.kt)("h4",{id:"official-images"},"Official images"),(0,r.kt)("p",null,"If you choose to use official images, please add the following environment parameter when you start a docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"NACOS_AUTH_ENABLE=true\n")),(0,r.kt)("p",null,"For example, you can run this command to run a docker container with Authentication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"docker run --env PREFER_HOST_MODE=hostname --env MODE=standalone --env NACOS_AUTH_ENABLE=true -p 8848:8848 nacos/nacos-server\n")),(0,r.kt)("p",null,"Besides, you can also add the other related enviroment parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"option"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"If turn on auth system"),(0,r.kt)("td",{parentName:"tr",align:null},"default :false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN_EXPIRE_SECONDS"),(0,r.kt)("td",{parentName:"tr",align:null},"The token expiration in seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"default :18000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"The default token"),(0,r.kt)("td",{parentName:"tr",align:null},"default :SecretKey012345678901234567890123456789012345678901234567890123456789")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NACOS_AUTH_CACHE_ENABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"Turn on/off caching of auth information. By turning on this switch, the update of auth information would have a 15 seconds delay."),(0,r.kt)("td",{parentName:"tr",align:null},"default : false")))),(0,r.kt)("h4",{id:"custom-images"},"Custom images"),(0,r.kt)("p",null,"If you choose to use custom images, please modify the application.properties before you start nacos, change this line "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.enabled=false\n")),(0,r.kt)("p",null,"into"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.system.type=nacos\nnacos.core.auth.enabled=true\n")),(0,r.kt)("h2",{id:"authentication-in-clients"},"Authentication in Clients"),(0,r.kt)("h3",{id:"authentication-in-java-sdk"},"Authentication in Java SDK"),(0,r.kt)("p",null,"The user name and password should be set when creating a 'Properties' class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'properties.put("username","${username}");\nproperties.put("password","${password}");\n')),(0,r.kt)("h4",{id:"example-code"},"Example Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'try {\n    // Initialize the configuration service, and the console automatically obtains the following parameters through the sample code.\n    String serverAddr = "{serverAddr}";\n    Properties properties = new Properties();\n    properties.put("serverAddr", serverAddr);\n\n    // if need username and password to login\n        properties.put("username","nacos");\n        properties.put("password","nacos");\n\n    ConfigService configService = NacosFactory.createConfigService(properties);\n} catch (NacosException e) {\n    // TODO Auto-generated catch block\n    e.printStackTrace();\n}\n')),(0,r.kt)("h3",{id:"authentication-in-other-languages-sdk"},"Authentication in Other languages SDK"),(0,r.kt)("p",null,"Pending..."),(0,r.kt)("h3",{id:"authentication-in-open-api"},"Authentication in Open-API"),(0,r.kt)("p",null,"Firstly, the user name and password should be provided to login."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"curl -X POST '127.0.0.1:8848/nacos/v1/auth/login' -d 'username=nacos&password=nacos'\n")),(0,r.kt)("p",null,"If the user name and password are correct, the response will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"accessToken":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTYwNTYyOTE2Nn0.2TogGhhr11_vLEjqKko1HJHUJEmsPuCxkur-CfNojDo","tokenTtl":18000,"globalAdmin":true}\n')),(0,r.kt)("p",null,"Secondly, when using configuration services or naming services, accessToken in the previous response should be provided. To use the accessToken, 'accessToken=${accessToken}' should be appended at the end of request url, e.g.,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"curl -X GET '127.0.0.1:8848/nacos/v1/cs/configs?accessToken=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTYwNTYyMzkyM30.O-s2yWfDSUZ7Svd3Vs7jy9tsfDNHs1SuebJB4KlNY8Q&dataId=nacos.example.1&group=nacos_group'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain"},"curl -X POST 'http://127.0.0.1:8848/nacos/v1/ns/instance?accessToken=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNvcyIsImV4cCI6MTYwNTYyMzkyM30.O-s2yWfDSUZ7Svd3Vs7jy9tsfDNHs1SuebJB4KlNY8Q&port=8848&healthy=true&ip=11.11.11.11&weight=1.0&serviceName=nacos.test.3&encoding=GBK&namespaceId=n1'\n")),(0,r.kt)("h2",{id:"open-feature-for-token-cache"},"Open feature for token cache"),(0,r.kt)("p",null,"Since version 2.2.1 of the server, the default authentication plug-in module supports the feature of token cache, see ISSUE #9906 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://github.com/alibaba/nacos/issues/9906\n")),(0,r.kt)("h4",{id:"background"},"Background"),(0,r.kt)("p",null,"Regardless of the client SDK or OpenAPI, after calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," interface to obtain the accessToken, carry the accessToken to access the server, and the server parses the token for authentication. The action of token parsing is time-consuming. If you want to improve the performance of the server, you can consider enabling the feature of caching tokens, which using string comparison instead of token parsing."),(0,r.kt)("h4",{id:"way-to-open"},"Way to open"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.plugin.nacos.token.cache.enable=true\n")),(0,r.kt)("h4",{id:"attention"},"Attention"),(0,r.kt)("p",null,"Before enabling the feature of token cache, the server will generate a new token for each request carrying a username and password to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," interface. The ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenTtl")," field in the return value of ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," interface is equal to the value set in the server configuration file. The configuration is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nacos.core.auth.plugin.nacos.token.expire.seconds=18000\n")),(0,r.kt)("p",null,"After enabling the feature of token cache, the server will first check whether the token corresponding to the username exists in cache for each request to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," interface with username and password. If it does not exist, generate a new token, insert it into the cache and return it to requester; if it exists, return the token to requester, and the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenTtl")," field is the value set in the configuration file minus the duration of the token stored in the cache.\nIf the token stays in the cache for more than 90% of the value set in the configuration file, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," interface receives a request, although the token corresponding to the username exists in the cache, the server will regenerate the token and return it to the requester, and update cache. Therefore, in the worst case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenTtl")," received by the requester is only 10% of the value set in the configuration file."),(0,r.kt)("h2",{id:"open-feature-for-server-identity"},"Open feature for server identity"),(0,r.kt)("p",null,"After the authentication feature is enabled, requests between servers will also be affected by the authentication system. Considering that the communication between the servers should be credible, during the 1.2~1.4.0 version, Nacos server use whether the User-Agent includes Nacos-Server to determine whether the request comes from other servers."),(0,r.kt)("p",null,"However, this implementation is too simple and fixed, leading to possible security issues. Therefore, since version 1.4.1, Nacos has added the server identification feature. Users can configure the identity of the server by themselves, and no longer use User-Agent as the judgment standard for server requests."),(0,r.kt)("p",null,"Way to open server identity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"### Open authentication\nnacos.core.auth.enabled=true\n\n### Shutdown user-agent judgement for server request\nnacos.core.auth.enable.userAgentAuthWhite=false\n\n### Config the server identity key(not empty) and value(not empty)\nnacos.core.auth.server.identity.key=example\nnacos.core.auth.server.identity.value=example\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attention")," All servers in cluster need to be configured with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"server.identity")," information, otherwise it may cause data inconsistency between servers or failure to delete instances."),(0,r.kt)("h3",{id:"upgrade-from-old-version"},"Upgrade from old version"),(0,r.kt)("p",null,"Considering that users of the old version need to upgrade, users can turn on the ",(0,r.kt)("inlineCode",{parentName:"p"},"nacos.core.auth.enable.userAgentAuthWhite=true")," during upgrading, and turn off it after the cluster is upgraded to 1.4.1 completely and runs stably."))}d.isMDXComponent=!0}}]);