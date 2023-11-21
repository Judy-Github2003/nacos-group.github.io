"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[6377],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var i=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return o?i.createElement(h,r(r({ref:t},u),{},{components:o})):i.createElement(h,r({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<n;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},53257:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=o(87462),a=(o(67294),o(3905));const n={title:"How to Contribute",keywords:["contribute","code"],description:"We are always very happy to have contributions, whether for trivial cleanups or big new features."},r="How to Contribute",s={unversionedId:"contribution/contributing",id:"contribution/contributing",title:"How to Contribute",description:"We are always very happy to have contributions, whether for trivial cleanups or big new features.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/contribution/contributing.md",sourceDirName:"contribution",slug:"/contribution/contributing",permalink:"/en/docs/next/contribution/contributing",draft:!1,tags:[],version:"current",frontMatter:{title:"How to Contribute",keywords:["contribute","code"],description:"We are always very happy to have contributions, whether for trivial cleanups or big new features."},sidebar:"docs",previous:{title:"Nacos push domain with CoreDNS",permalink:"/en/docs/next/ecology/use-nacos-with-coredns"},next:{title:"Contributing Flow",permalink:"/en/docs/next/contribution/contributing-flow"}},l={},c=[{value:"Contact us",id:"contact-us",level:2},{value:"Nacos Gitter- https://gitter.im/alibaba/nacos",id:"nacos-gitter--httpsgitterimalibabanacos",level:5},{value:"Nacos weibo- https://weibo.com/u/6574374908",id:"nacos-weibo--httpsweibocomu6574374908",level:5},{value:"Nacos segmentfault- https://segmentfault.com/t/nacos",id:"nacos-segmentfault--httpssegmentfaultcomtnacos",level:5},{value:"Mailing list",id:"mailing-list",level:4},{value:"Contributing Code",id:"contributing-code",level:2},{value:"Notice",id:"notice",level:3},{value:"Read Nacos Code of Conduct, and make sure your IDE has set code style and install plugin.",id:"read-nacos-code-of-conduct-and-make-sure-your-ide-has-set-code-style-and-install-plugin",level:4},{value:"If the change is non-trivial, please include unit tests that cover the new functionality.",id:"if-the-change-is-non-trivial-please-include-unit-tests-that-cover-the-new-functionality",level:4},{value:"If you are introducing a completely new feature or API, it is a good idea to start a wiki and get consensus on the basic design first.",id:"if-you-are-introducing-a-completely-new-feature-or-api-it-is-a-good-idea-to-start-a-wiki-and-get-consensus-on-the-basic-design-first",level:4},{value:"Contribution flow",id:"contribution-flow",level:3},{value:"Contributing Document",id:"contributing-document",level:2},{value:"Notice",id:"notice-1",level:3},{value:"Has been confirmed that the document is indeed wrong or missing.",id:"has-been-confirmed-that-the-document-is-indeed-wrong-or-missing",level:4},{value:"Familiar with Markdown",id:"familiar-with-markdown",level:4},{value:"Familiar with docsite, at least be able to complete local debugging according to the document README.md.",id:"familiar-with-docsite-at-least-be-able-to-complete-local-debugging-according-to-the-document-readmemd",level:4},{value:"Becoming a Committer",id:"becoming-a-committer",level:2},{value:"Wiki &amp; JavaDoc",id:"wiki--javadoc",level:4},{value:"Nacos Console",id:"nacos-console",level:4},{value:"Nacos SDK(C++.NetPHPPythonGoNode.js)",id:"nacos-sdkcnetphppythongonodejs",level:4},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Readability - APIs as well as important methods must have Javadoc.",id:"readability---apis-as-well-as-important-methods-must-have-javadoc",level:5},{value:"Testability - Ensure over 80% unit test coverage for main processes.",id:"testability---ensure-over-80-unit-test-coverage-for-main-processes",level:5},{value:"Maintainability - Comply with our Code of Conduct, with an update frequency at least once every 3 months.",id:"maintainability---comply-with-our-code-of-conduct-with-an-update-frequency-at-least-once-every-3-months",level:5},{value:"Deployability - We encourage you to deploy into maven repository.",id:"deployability---we-encourage-you-to-deploy-into-maven-repository",level:5}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-contribute"},"How to Contribute"),(0,a.kt)("p",null,"Nacos is released under the non-restrictive Apache 2.0 license, and follows a very standard Github development process, using Github tracker for issues and merging pull requests into master. If you want to contribute even something trivial, please do not hesitate, but follow the guidelines below."),(0,a.kt)("p",null,"We are always very happy to have contributions, whether for trivial cleanups or big new features.\nWe want to have high quality, well documented codes for each programming language."),(0,a.kt)("p",null,"Nor is code the only way to contribute to the project. We strongly value documentation, integration with other project, and gladly accept improvements for these aspects."),(0,a.kt)("h2",{id:"contact-us"},"Contact us"),(0,a.kt)("h5",{id:"nacos-gitter--httpsgitterimalibabanacos"},"Nacos Gitter- ",(0,a.kt)("a",{parentName:"h5",href:"https://gitter.im/alibaba/nacos"},"https://gitter.im/alibaba/nacos")),(0,a.kt)("h5",{id:"nacos-weibo--httpsweibocomu6574374908"},"Nacos weibo- ",(0,a.kt)("a",{parentName:"h5",href:"https://weibo.com/u/6574374908"},"https://weibo.com/u/6574374908")),(0,a.kt)("h5",{id:"nacos-segmentfault--httpssegmentfaultcomtnacos"},"Nacos segmentfault- ",(0,a.kt)("a",{parentName:"h5",href:"https://segmentfault.com/t/nacos"},"https://segmentfault.com/t/nacos")),(0,a.kt)("h4",{id:"mailing-list"},"Mailing list"),(0,a.kt)("p",null,"Mailing list is recommended for discussing almost anything related to Nacos. Please refer to this?",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-dubbo/wiki/Mailing-list-subscription-guide"},"guide"),"?for detailed documentation on how to subscribe to our mailing lists."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:dev-nacos%2Bsubscribe@googlegroups.com"},"dev-nacos@googlegroups.com"),": The develop mailing list. You can ask questions here if you encounter any problem when using or developing Nacos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:commits-nacos%2Bsubscribe@googlegroups.com"},"commits-nacos@googlegroups.com"),": All commits will be sent to this mailing list. You can subscribe to it if you are interested in Nacos' development."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:users-nacos%2Bsubscribe@googlegroups.com"},"users-nacos@googlegroups.com"),": All Github?",(0,a.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/issues"},"issue"),"?updates and?",(0,a.kt)("a",{parentName:"li",href:"https://github.com/alibaba/nacos/pulls"},"pull request"),"?updates will be sent to this mailing list."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:nacos_dev@linux.alibaba.com"},"nacos_dev@linux.alibaba.com"),".")),(0,a.kt)("h2",{id:"contributing-code"},"Contributing Code"),(0,a.kt)("h3",{id:"notice"},"Notice"),(0,a.kt)("p",null,"To submit a change for inclusion, please do the following:"),(0,a.kt)("h4",{id:"read-nacos-code-of-conduct-and-make-sure-your-ide-has-set-code-style-and-install-plugin"},"Read Nacos ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/alibaba/nacos/blob/develop/style/codeStyle.md"},"Code of Conduct"),", and make sure your IDE has set code style and install plugin."),(0,a.kt)("h4",{id:"if-the-change-is-non-trivial-please-include-unit-tests-that-cover-the-new-functionality"},"If the change is non-trivial, please include unit tests that cover the new functionality."),(0,a.kt)("h4",{id:"if-you-are-introducing-a-completely-new-feature-or-api-it-is-a-good-idea-to-start-a-wiki-and-get-consensus-on-the-basic-design-first"},"If you are introducing a completely new feature or API, it is a good idea to start a wiki and get consensus on the basic design first."),(0,a.kt)("h3",{id:"contribution-flow"},"Contribution flow"),(0,a.kt)("p",null,"This is a rough outline of what a contributor's workflow looks like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fork the current repository."),(0,a.kt)("li",{parentName:"ul"},"Create a topic branch from where to base the contribution. This is usually the master branch."),(0,a.kt)("li",{parentName:"ul"},"Make commits of logical units."),(0,a.kt)("li",{parentName:"ul"},"Make sure commit messages are in the proper format (see below)."),(0,a.kt)("li",{parentName:"ul"},"Push changes in a topic branch to your forked repository."),(0,a.kt)("li",{parentName:"ul"},"Follow the checklist in the ",(0,a.kt)("a",{parentName:"li",href:"/en/docs/next/contribution/pull-request"},"pull request template"),"."),(0,a.kt)("li",{parentName:"ul"},"Before you send the pull request, please sync your forked repository with remote repository. This will make your pull request simple and clear. See guide below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git remote add upstream git@github.com:alibaba/nacos.git\ngit fetch upstream\ngit rebase upstream/master\ngit checkout -b your_awesome_patch\n... add some work\ngit push origin your_awesome_patch\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Submit a pull request to alibaba/nacos and wait for reply.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Detail contribution flow see ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/next/contribution/contributing-flow"},"Contribution Flow")))),(0,a.kt)("p",null,"Thanks for contributing!"),(0,a.kt)("h2",{id:"contributing-document"},"Contributing Document"),(0,a.kt)("h3",{id:"notice-1"},"Notice"),(0,a.kt)("p",null,"When contributing documents, please confirm and check the following:"),(0,a.kt)("h4",{id:"has-been-confirmed-that-the-document-is-indeed-wrong-or-missing"},"Has been confirmed that the document is indeed wrong or missing."),(0,a.kt)("h4",{id:"familiar-with-markdown"},"Familiar with ",(0,a.kt)("a",{parentName:"h4",href:"https://www.markdownguide.org/getting-started"},"Markdown")),(0,a.kt)("h4",{id:"familiar-with-docsite-at-least-be-able-to-complete-local-debugging-according-to-the-document-readmemd"},"Familiar with ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/txd-team/docsite"},"docsite"),", at least be able to complete local debugging according to the ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/nacos-group/nacos-group.github.io"},"document README.md"),"."),(0,a.kt)("h2",{id:"becoming-a-committer"},"Becoming a Committer"),(0,a.kt)("p",null,"We are always interested in adding new contributors. What we look for are series of contributions, good taste and ongoing interest in the project. If you are interested in becoming a committer, please let one of the existing committers know and they can help you walk through the process."),(0,a.kt)("p",null,"Nowadays, we have several important contribution points:"),(0,a.kt)("h4",{id:"wiki--javadoc"},"Wiki & JavaDoc"),(0,a.kt)("h4",{id:"nacos-console"},"Nacos Console"),(0,a.kt)("h4",{id:"nacos-sdkcnetphppythongonodejs"},"Nacos SDK(C++",".","Net\\PHP\\Python\\Go\\Node.js)"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"If you want to contribute to the above listing points, you must abide by the prerequisites listed below:"),(0,a.kt)("h5",{id:"readability---apis-as-well-as-important-methods-must-have-javadoc"},"Readability - APIs as well as important methods must have Javadoc."),(0,a.kt)("h5",{id:"testability---ensure-over-80-unit-test-coverage-for-main-processes"},"Testability - Ensure over 80% unit test coverage for main processes."),(0,a.kt)("h5",{id:"maintainability---comply-with-our-code-of-conduct-with-an-update-frequency-at-least-once-every-3-months"},"Maintainability - Comply with our ",(0,a.kt)("a",{parentName:"h5",href:"https://github.com/alibaba/nacos/blob/develop/style/codeStyle.md"},"Code of Conduct"),", with an update frequency at least once every 3 months."),(0,a.kt)("h5",{id:"deployability---we-encourage-you-to-deploy-into-maven-repository"},"Deployability - We encourage you to deploy into ",(0,a.kt)("a",{parentName:"h5",href:"http://search.maven.org/"},"maven repository"),"."))}p.isMDXComponent=!0}}]);