"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5067],{4953:function(e,t,a){a.r(t),a.d(t,{Title:function(){return o},_frontmatter:function(){return s},default:function(){return m}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),i=["components"],o=function(){return(0,r.kt)("span",null,"Integration Lab Introduction ",(0,r.kt)("br",null))},s={},c={Title:o,_frontmatter:s},u=l.Z;function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)(u,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Add Targets"),(0,r.kt)("p",null,"For Turbonomic to perform intelligent workload balancing, it collects raw data from its\ntargets like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"APM Solutions (Instana, Dynatrace, New Relic, Cisco AppDynamics), "),(0,r.kt)("li",{parentName:"ul"},"Hypervisors (Microsoft Hyper-V, VMware vCenter), "),(0,r.kt)("li",{parentName:"ul"},"Public Cloud (Amazon AWS, Google Cloud Platform (GCP), Microsoft Azure\nService),"),(0,r.kt)("li",{parentName:"ul"},"Cloud Native Targets (OpenShift, Pivotal Kubernetes Service, Amazon Elastic,\nKubernetes Service (EKS), Azure Kubernetes Service (AKS), Cisco Container\nPlatform (CCP), Google Kubernetes Engine (GKE) "),(0,r.kt)("li",{parentName:"ul"},"…etc. ")),(0,r.kt)("p",null,"Turbonomic polls its targets at 10-minute intervals to collect the latest data samples. It\nthen uses these 10-minute data points for analysis and to display data in the GUI.\nTurbonomic also uses targets to execute actions in your environment to further optimize\nthe underlying infrastructure resources. Turbonomic communicates with the target via\nthe management protocol it exposes like REST API, SMI-S, XML, or some other\nmanagement transport.",(0,r.kt)("br",null),"\nIn this lab you will establish integration between Turbonomic and two targets:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Instana APM",(0,r.kt)("br",null),"\nTurbonomic supports discovery of applications that are managed by the Instana\nplatform. Turbonomic. includes the discovered information about these\napplications in its calculations for environment health."),(0,r.kt)("li",{parentName:"ol"},"Kubernetes",(0,r.kt)("br",null),"\nWith Cloud Native targets, Turbonomic discovers entities related to container\nplatforms in your environment. Discovery can also stitch the container cluster\nentities together with managed applications. For example, discovery can show\nthe full application stack if your container environment includes applications\nmanaged by technology like Instana APM. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tip:")," Turbonomic must be on a network with access to the specific services you want to set up as targets. (but we have this part covered for this session)"))}m.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(8650),l=a.n(r),i=a(5444),o=a(9403),s=a(3321),c=a(5900),u=a.n(c),m=function(e){var t,a=e.title,r=e.theme,l=e.tabs,i=void 0===l?[]:l;return n.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=i.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,o=l.baseUrl,s=l.subDirectory,c=o+"/edit/"+l.branch+s+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},p=a(4275),b=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,o=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),s=a===o,c=new RegExp(o+"/?(#.*)?$"),m=r.replace(c,a);return n.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),h=g,v=a(2881),f=a(6958),E=a(36),k=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,u=t.frontmatter,b=void 0===u?{}:u,g=t.relativePagePath,E=t.titleType,y=b.tabs,w=b.title,N=b.theme,P=b.description,T=b.keywords,x=b.date,C=(0,f.Z)().interiorTheme,S=(0,i.useStaticQuery)("2456312558").site.pathPrefix,A=S?r.pathname.replace(S,""):r.pathname,I=y?A.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",K=N||C;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:K,pageTitle:w,pageDescription:P,pageKeywords:T,titleType:E},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:y,theme:K}),y&&n.createElement(h,{title:w,slug:A,tabs:y,currentTab:I}),n.createElement(v.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(k,{date:x})),n.createElement(p.Z,{pageContext:t,location:r,slug:A,tabs:y,currentTab:I}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-introduction-config-mdx-0ebc182f2c1a9d115a2c.js.map