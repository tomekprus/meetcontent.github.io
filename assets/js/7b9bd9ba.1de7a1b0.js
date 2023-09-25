"use strict";(self.webpackChunkmeet_content=self.webpackChunkmeet_content||[]).push([[2400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=o,f=c["".concat(u,".").concat(g)]||c[g]||m[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={slug:"new-site",title:"New site!",authors:"pensjonatus",tags:["wroclaw","krakow"]},i=void 0,s={permalink:"/blog/new-site",source:"@site/blog/2023-08-12-new-site.md",title:"New site!",description:"This site was created using Docusaurus and is fully self-hosted on GitHub.",date:"2023-08-12T00:00:00.000Z",formattedDate:"August 12, 2023",tags:[{label:"wroclaw",permalink:"/blog/tags/wroclaw"},{label:"krakow",permalink:"/blog/tags/krakow"}],readingTime:1.025,hasTruncateMarker:!1,authors:[{name:"Pawe\u0142 Kowaluk",title:"Webmaster",url:"https://github.com/pensjonatus",imageURL:"https://github.com/pensjonatus.png",key:"pensjonatus"}],frontMatter:{slug:"new-site",title:"New site!",authors:"pensjonatus",tags:["wroclaw","krakow"]},prevItem:{title:"Hola, mundo",permalink:"/blog/iberia-hola-mundo"},nextItem:{title:"Plans for Wroc\u0142aw, autumn 2023",permalink:"/blog/wroclaw-plans"}},u={authorsImageUrls:[void 0]},l=[],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This site was created using Docusaurus and is fully self-hosted on GitHub."),(0,o.kt)("p",null,"You can host a site for free as well, thanks to GitHub pages. Well, I say free,\nbut I guess all free services have a hidden cost. Irregardless, it's free in the\nsense that the monetary cost is zero."),(0,o.kt)("p",null,"In a nutshell here's how you can get there:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Set up a repo on GitHub. If you want quick results, name your repo after your\nGitHub org, for example if your org is called "MeetContent", your repo should\nbe called ',(0,o.kt)("inlineCode",{parentName:"li"},"meetcontent.github.io"),"."),(0,o.kt)("li",{parentName:"ol"},"Set up a site in your repo. If you want to go with Docusaurus, check out\ntheir ",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation"},"getting started"),"."),(0,o.kt)("li",{parentName:"ol"},"To deploy your site, you need designate a branch where your built site will\nbe deployed. The most common convention is to use a branch called ",(0,o.kt)("inlineCode",{parentName:"li"},"gh-pages"),".\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site"},"Read more on GihBub"),"."),(0,o.kt)("li",{parentName:"ol"},"Set up your\n",(0,o.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"},"Docusaurus deployment through GitHub actions"),".")),(0,o.kt)("p",null,"Your site will be available on your org's default web address, for example"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://meetcontent.github.io"},"https://meetcontent.github.io")),(0,o.kt)("p",null,"One big thing is that you get HTTPS for free!"),(0,o.kt)("p",null,"If you want a custom domain, you can do that by pointing an external domain to\nyour GitHub pages.\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site"},"Read more about custom domains for GitHub pages"),"."))}m.isMDXComponent=!0}}]);