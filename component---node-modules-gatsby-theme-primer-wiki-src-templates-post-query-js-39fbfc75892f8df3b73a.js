(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[817],{99017:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(19692),o=n(13465),i=n(67294),a=n(77731),s=n(7431);var c=function(e){var t,n,r,c=e.location,l=e.sidebarItems,u=(t="sidebar",n=i.useRef(),r=i.useCallback((function(e){return window.sessionStorage.setItem(t,e.target.scrollTop)}),[t]),i.useEffect((function(){var e=window.sessionStorage.getItem(t);e&&n.current&&(n.current.scrollTop=e)}),[t]),{ref:n,onScroll:r});return Array.isArray(l)&&l.length>0?i.createElement(o.Z,{display:["none",null,null,"block"],position:"sticky",top:a.M,height:"calc(100vh - "+a.M+"px)",minWidth:260,maxWidth:360,color:"auto.gray.8",bg:"auto.gray.0"},i.createElement(o.Z,Object.assign({borderStyle:"solid",borderColor:"border.primary"},u,{borderWidth:0,borderRightWidth:1,borderRadius:0,height:"100%",style:{overflow:"auto"}}),i.createElement(o.Z,{display:"flex",flexDirection:"column"},i.createElement(s.Z,{location:c,items:l})))):null},l=n(13081),u=n(2393);var d=function(e){var t=e.children,n=e.location,r=e.pageContext,s=r.sidebarItems,d=r.tagsGroups,m=r.slug,g=(0,l.u)(s,d),p=(0,u.Z)();return i.createElement(o.Z,{display:"flex",flexDirection:"column",minHeight:"100vh",bg:"bg.primary",color:"text.primary"},i.createElement(a.Z,{currentSlug:m,location:n,sidebarItems:g,tagsGroups:d}),i.createElement(f,{display:"flex",flex:"1 1 auto",flexDirection:"row"},i.createElement(c,{location:n,sidebarItems:g}),i.createElement(o.Z,{as:"main",flex:"1",maxWidth:p.contentMaxWidth},t)))},f=(0,r.default)(o.Z).withConfig({displayName:"layout___StyledBox",componentId:"sc-7a5ttt-0"})({zIndex:0})},28565:function(e,t,n){"use strict";var r=n(67294),o=n(81969),i=n(13465),a=n(65754),s=n(2393);t.Z=function(e){var t=e.nodes,n=e.shouldShowInstantView,c=void 0!==n&&n,l=e.forceMobile,u=void 0!==l&&l,d=(0,s.Z)(),f=t,m=function(e){return r.createElement(o.Z.a,Object.assign({},e,{references:c?f:[]}))};return r.createElement(i.Z,null,r.createElement(o.Z.ul,null,f&&f.filter((function(e){return"/404/"!==e.fields.slug&&(!e.frontmatter||!0!==e.frontmatter.draft)})).map((function(e){return r.createElement("li",{key:e.fields.slug},r.createElement(m,{href:e.fields.slug},e.fields.title),d.shouldShowLastUpdated&&e.fields.lastUpdated&&!u&&r.createElement(a.Z,{display:["none",null,null,"inline-block"],color:"text.placeholder",fontSize:1},"  - ",d.lastUpdatedText," ",e.fields.lastUpdated),d.shouldShowLastUpdated&&e.fields.lastUpdated&&r.createElement(i.Z,{display:u?"block":["block",null,null,"none"],color:"text.placeholder",fontSize:1,mb:2,mt:1},d.lastUpdatedText," ",e.fields.lastUpdated))}))))}},21571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ce}});var r=n(19692),o=n(67294),i=n(46725),a=n(99017),s=n(13465),c=n(11624),l=n(83935),u=n(19446),d=n(81969),f=n(96125),m=r.default.li.withConfig({displayName:"reference-li__ReferenceLi",componentId:"sc-1rtyfvw-0"})(['margin-bottom:10px;&:before{content:"\\2022";color:',";display:inline-block;width:",";margin-left:-",";}"],(0,f.U2)("colors.text.placeholder"),(0,f.U2)("space.3"),(0,f.U2)("space.3")),g=function(e){var t=e.references;return t.length?o.createElement(s.Z,{bg:"auto.gray.1",borderRadius:"2",px:"3",py:"4",mt:"4"},o.createElement(c.Z,{as:"h4",fontSize:"2",mb:"3",color:"text.placeholder"},o.createElement(l.Z,{mr:2,size:16,sx:{top:"-3px",position:"relative"},icon:u.xPt,color:"text.placeholder"}),"LINKS TO THIS PAGE"),o.createElement(d.Z.ul,{style:{paddingLeft:"16px",listStyle:"none"}},t.map((function(e){return o.createElement(m,{key:e.fields.slug},o.createElement(d.Z.a,{href:e.fields.slug,references:[e]},e.fields.title||e.fields.slug))})))):null},p=n(64983),h=n(81705),b=n(78546),y=n(65754),w=n(77731),v=n(61427),x=n(2393);var E=function(e){var t=e.lastUpdated,n=(0,x.Z)(),r=n.lastUpdatedText;return n.shouldShowLastUpdated?o.createElement("div",null,t?o.createElement(y.Z,{fontSize:1,color:"auto.gray.7",mt:1},r," ",o.createElement("b",null,t)):null):null};function I(e){var t=e.editUrl,n=e.lastUpdated,r=(0,x.Z)();return t||n?o.createElement(s.Z,{borderStyle:"solid",borderColor:"border.primary",borderWidth:0,borderTopWidth:1,borderRadius:0,mt:8,py:5},o.createElement(s.Z,{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},t?o.createElement(v.Z,{mb:"1",href:t},o.createElement(l.Z,{icon:u.vdY,mr:2}),r.editUrlText):null,n&&o.createElement(E,{lastUpdated:n}))):null}I.defaultProps={contributors:[]};var S=I;function k(e){var t=e.items,n=e.depth,r=function(e,t){var n=o.useState(),r=n[0],i=n[1],a=o.useRef();return o.useEffect((function(){var n=e.filter((function(e){return document.querySelector(e)})).map((function(e){return document.querySelector(e)}));return a.current&&a.current.disconnect(),a.current=new IntersectionObserver((function(e){e.forEach((function(e){null!=e&&e.isIntersecting&&i(e.target.getAttribute("id"))}))}),t),n.forEach((function(e){return a.current.observe(e)})),function(){return a.current.disconnect()}}),[e,t]),r}(t.map((function(e){return'[id="'+e.url.slice(1)+'"]'})),{rootMargin:"0% 0% -24% 0%"});return o.createElement(M,{as:"ul",m:0,p:0},t.map((function(e){return o.createElement(s.Z,{as:"li",key:e.url,pl:n>0?3:0},e.title?o.createElement(v.Z,{display:"inline-block",py:1,href:e.url,fontSize:[2,null,1],color:"auto.gray.6",sx:{fontWeight:e.url==="#"+r?"bold":"medium"},"aria-current":e.url==="#"+r?"location":void 0},e.title):null,e.items?o.createElement(k,{items:e.items,depth:n+1}):null)})))}k.defaultProps={depth:0};var O=k,M=(0,r.default)(s.Z).withConfig({displayName:"table-of-contents___StyledBox",componentId:"sc-1jtv948-0"})({listStyle:"none"}),z=n(21804),R=n.n(z),Z=n(28565),T=function(e){var t=e.tags,n=e.nodes;return t.length?o.createElement(s.Z,{bg:"auto.gray.1",borderRadius:"2",px:"3",py:"4",mt:"4"},o.createElement(c.Z,{as:"h4",fontSize:"2",mb:"3",color:"text.placeholder"},o.createElement(l.Z,{mr:1,size:16,sx:{top:"-3px",position:"relative"},icon:u.aqf,color:"text.placeholder"}),"Tags"),o.createElement(d.Z.ul,{style:{paddingLeft:"16px",listStyle:"none"}},t.map((function(e){var t=[{fields:{slug:"/tags/"+R()(e)+"/"},component:o.createElement(Z.Z,{forceMobile:!0,nodes:n.filter((function(t){return t.frontmatter.tags.includes(e)})),tag:e})}];return o.createElement(m,{key:e},o.createElement(d.Z.a,{href:"/tags/"+R()(e)+"/",references:t,mr:3},"#",e))}))),o.createElement(s.Z,null)):null},C=n(13081),j=n(70885),A=n(45697),F=n.n(A);function W(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=Object.defineProperty,L=Object.defineProperties,P=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,G=function(e,t,n){return t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},_=function(e,t){for(var n in t||(t={}))D.call(t,n)&&G(e,n,t[n]);if(H){var r,o=W(H(t));try{for(o.s();!(r=o.n()).done;){n=r.value;B.call(t,n)&&G(e,n,t[n])}}catch(i){o.e(i)}finally{o.f()}}return e},q=function(e,t){return L(e,P(t))},V="Please consider reporting this error at https://github.com/laymonage/giscus/issues/new.";function J(e){return'[giscus] An error occurred. Error message: "'.concat(e,'".')}function Y(e){var t=document.querySelector("meta[property='og:".concat(e,"'],meta[name='").concat(e,"']"));return t?t.content:""}function X(e){var t=e.repo,n=e.repoId,r=e.category,o=void 0===r?"":r,i=e.categoryId,a=void 0===i?"":i,s=e.mapping,c=e.term,l=void 0===c?"":c,u=e.theme,d=void 0===u?"light":u,f=e.reactionsEnabled,m=void 0===f?"1":f,g=e.emitMetadata,p=void 0===g?"0":g,h=e.session,b=e.origin,y={origin:void 0===b?location.href:b,session:h,theme:d,reactionsEnabled:m,emitMetadata:p,repo:t,repoId:n,category:o,categoryId:a,description:Y("description")};switch(s){case"url":y.term=location.href;break;case"title":y.term=document.title;break;case"og:title":y.term=Y("title");break;case"specific":y.term=l;break;case"number":y.number=l;break;default:y.term=location.pathname.length<2?"index":location.pathname.substr(1).replace(/\.\w+$/,"")}return"https://giscus.app/widget?".concat(new URLSearchParams(y))}function Q(){var e=document.getElementById("giscus-css")||document.createElement("style");e.id="giscus-css",e.textContent="\n    .giscus, .giscus-frame {\n      width: 100%;\n    }\n    .giscus-frame {\n      border: none;\n      color-scheme: auto;\n    }\n  ",document.head.prepend(e)}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var ee,te=(function(e){!function(t){if("undefined"!=typeof window){var n,r=0,o=!1,i=!1,a="message".length,s="[iFrameSizer]",c=s.length,l=null,u=window.requestAnimationFrame,d={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},f={},m=null,g={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){E("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},p={};window.jQuery&&((n=window.jQuery).fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(e){return this.filter("iframe").each((function(t,n){W(n,e)})).end()}):x("","Unable to bind to jQuery, it is not fully loaded.")),e.exports=P(),window.iFrameResize=window.iFrameResize||P()}function h(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function b(e,t,n){e.addEventListener(t,n,!1)}function y(e,t,n){e.removeEventListener(t,n,!1)}function w(e){return f[e]?f[e].log:o}function v(e,t){I("log",e,t,w(e))}function x(e,t){I("info",e,t,w(e))}function E(e,t){I("warn",e,t,!0)}function I(e,t,n,r){!0===r&&"object"==typeof window.console&&console[e](function(e){return s+"["+function(e){var t="Host page: "+e;return window.top!==window.self&&(t=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),t}(e)+"]"}(t),n)}function S(e){function t(){n("Height"),n("Width"),j((function(){C(L),R(P),g("onResized",L)}),L,"init")}function n(e){var t=Number(f[P]["max"+e]),n=Number(f[P]["min"+e]),r=e.toLowerCase(),o=Number(L[r]);v(P,"Checking "+r+" is in range "+n+"-"+t),o<n&&(o=n,v(P,"Set "+r+" to min value")),o>t&&(o=t,v(P,"Set "+r+" to max value")),L[r]=""+o}function r(e){return N.substr(N.indexOf(":")+a+e)}function o(e,t){var n,r;n=function(){var n,r;A("Send Page Info","pageInfo:"+(n=document.body.getBoundingClientRect(),r=L.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:r.height,iframeWidth:r.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(r.top-n.top,10),offsetLeft:parseInt(r.left-n.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,t)},p[r=t]||(p[r]=setTimeout((function(){p[r]=null,n()}),32))}function i(e){var t=e.getBoundingClientRect();return z(P),{x:Math.floor(Number(t.left)+Number(l.x)),y:Math.floor(Number(t.top)+Number(l.y))}}function u(e){var t=e?i(L.iframe):{x:0,y:0},n={x:Number(L.width)+t.x,y:Number(L.height)+t.y};v(P,"Reposition requested from iFrame (offset x:"+t.x+" y:"+t.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](n.x,n.y):E(P,"Unable to scroll to requested position, window.parentIFrame not found"):(l=n,d(),v(P,"--"))}function d(){!1!==g("onScroll",l)?R(P):Z()}function m(e){g(e,{iframe:L.iframe,screenX:L.width,screenY:L.height,type:L.type})}function g(e,t){return k(P,e,t)}var h,w,I,S,O,W,U,N=e.data,L={},P=null;"[iFrameResizerChild]Ready"===N?function(){for(var e in f)A("iFrame requested init",F(e),f[e].iframe,e)}():s===(""+N).substr(0,c)&&N.substr(c).split(":")[0]in f?(O=(S=N.substr(c).split(":"))[1]?parseInt(S[1],10):0,W=f[S[0]]&&f[S[0]].iframe,U=getComputedStyle(W),L={iframe:W,id:S[0],height:O+function(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}(U)+function(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}(U),width:S[2],type:S[3]},P=L.id,f[P]&&(f[P].loaded=!0),(I=L.type in{true:1,false:1,undefined:1})&&v(P,"Ignoring init message from meta parent page"),!I&&(w=!0,f[h=P]||(w=!1,E(L.type+" No settings for "+h+". Message was: "+N)),w)&&(v(P,"Received: "+N),function(){var e=!0;return null===L.iframe&&(E(P,"IFrame ("+L.id+") not found"),e=!1),e}()&&function(){var t,n=e.origin,r=f[P]&&f[P].checkOrigin;if(r&&""+n!="null"&&!(r.constructor===Array?function(){var e=0,t=!1;for(v(P,"Checking connection is from allowed list of origins: "+r);e<r.length;e++)if(r[e]===n){t=!0;break}return t}():(t=f[P]&&f[P].remoteHost,v(P,"Checking connection is from: "+t),n===t)))throw new Error("Unexpected message received from: "+n+" for "+L.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[P]&&f[P].firstRun&&f[P]&&(f[P].firstRun=!1),L.type){case"close":M(L.iframe);break;case"message":c=r(6),v(P,"onMessage passed: {iframe: "+L.iframe.id+", message: "+c+"}"),g("onMessage",{iframe:L.iframe,message:JSON.parse(c)}),v(P,"--");break;case"mouseenter":m("onMouseEnter");break;case"mouseleave":m("onMouseLeave");break;case"autoResize":f[P].autoResize=JSON.parse(r(9));break;case"scrollTo":u(!1);break;case"scrollToOffset":u(!0);break;case"pageInfo":o(f[P]&&f[P].iframe,P),function(){function e(e,r){function i(){f[n]?o(f[n].iframe,n):t()}["scroll","resize"].forEach((function(t){v(n,e+t+" listener for sendPageInfo"),r(window,t,i)}))}function t(){e("Remove ",y)}var n=P;e("Add ",b),f[n]&&(f[n].stopPageInfo=t)}();break;case"pageInfoStop":f[P]&&f[P].stopPageInfo&&(f[P].stopPageInfo(),delete f[P].stopPageInfo);break;case"inPageLink":n=r(9).split("#")[1]||"",a=decodeURIComponent(n),(s=document.getElementById(a)||document.getElementsByName(a)[0])?(e=i(s),v(P,"Moving to in page link (#"+n+") at x: "+e.x+" y: "+e.y),l={x:e.x,y:e.y},d(),v(P,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(n):v(P,"In page link #"+n+" not found and window.parentIFrame not found"):v(P,"In page link #"+n+" not found");break;case"reset":T(L);break;case"init":t(),g("onInit",L.iframe);break;default:t()}var e,n,a,s,c}())):x(P,"Ignored: "+N)}function k(e,t,n){var r=null,o=null;if(f[e]){if("function"!=typeof(r=f[e][t]))throw new TypeError(t+" on iFrame["+e+"] is not a function");o=r(n)}return o}function O(e){var t=e.id;delete f[t]}function M(e){var t=e.id;if(!1!==k(t,"onClose",t)){v(t,"Removing iFrame: "+t);try{e.parentNode&&e.parentNode.removeChild(e)}catch(n){E(n)}k(t,"onClosed",t),v(t,"--"),O(e)}else v(t,"Close iframe cancelled by onClose event")}function z(e){null===l&&v(e,"Get page position: "+(l={x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop}).x+","+l.y)}function R(e){null!==l&&(window.scrollTo(l.x,l.y),v(e,"Set page position: "+l.x+","+l.y),Z())}function Z(){l=null}function T(e){v(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),z(e.id),j((function(){C(e),A("reset","reset",e.iframe,e.id)}),e,"reset")}function C(e){function t(t){i||"0"!==e[t]||(i=!0,v(r,"Hidden iFrame detected, creating visibility listener"),function(){function e(){Object.keys(f).forEach((function(e){!function(e){function t(t){return"0px"===(f[e]&&f[e].iframe.style[t])}f[e]&&function(e){return null!==e.offsetParent}(f[e].iframe)&&(t("height")||t("width"))&&A("Visibility change","resize",f[e].iframe,e)}(e)}))}function t(t){v("window","Mutation observed: "+t[0].target+" "+t[0].type),U(e,16)}var n=h();n&&function(){var e=document.querySelector("body");new n(t).observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0})}()}())}function n(n){!function(t){e.id?(e.iframe.style[t]=e[t]+"px",v(e.id,"IFrame ("+r+") "+t+" set to "+e[t]+"px")):v("undefined","messageData id not set")}(n),t(n)}var r=e.iframe.id;f[r]&&(f[r].sizeHeight&&n("height"),f[r].sizeWidth&&n("width"))}function j(e,t,n){n!==t.type&&u&&!window.jasmine?(v(t.id,"Requesting animation frame"),u(e)):e()}function A(e,t,n,r,o){var i,a=!1;r=r||n.id,f[r]&&(n&&"contentWindow"in n&&null!==n.contentWindow?(i=f[r]&&f[r].targetOrigin,v(r,"["+e+"] Sending msg to iframe["+r+"] ("+t+") targetOrigin: "+i),n.contentWindow.postMessage(s+t,i)):E(r,"["+e+"] IFrame("+r+") not found"),o&&f[r]&&f[r].warningTimeout&&(f[r].msgTimeout=setTimeout((function(){!f[r]||f[r].loaded||a||(a=!0,E(r,"IFrame has not responded within "+f[r].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))}),f[r].warningTimeout)))}function F(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod}function W(e,n){var i,a,s,c,l,u,m,p=(""===(i=e.id)&&(e.id=(a=n&&n.id||g.id+r++,null!==document.getElementById(a)&&(a+=r++),i=a),o=(n||{}).log,v(i,"Added missing iframe ID: "+i+" ("+e.src+")")),i);p in f&&"iFrameResizer"in e?E(p,"Ignored iFrame, already setup."):(u=(u=n)||{},f[p]={firstRun:!0,iframe:e,remoteHost:e.src&&e.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(u),Object.keys(u).forEach((function(e){var t=e.split("Callback");if(2===t.length){var n="on"+t[0].charAt(0).toUpperCase()+t[0].slice(1);this[n]=this[e],delete this[e],E(p,"Deprecated: '"+e+"' has been renamed '"+n+"'. The old method will be removed in the next major version.")}}),u),function(e){for(var t in g)Object.prototype.hasOwnProperty.call(g,t)&&(f[p][t]=Object.prototype.hasOwnProperty.call(e,t)?e[t]:g[t])}(u),f[p]&&(f[p].targetOrigin=!0===f[p].checkOrigin?""===(m=f[p].remoteHost)||null!==m.match(/^(about:blank|javascript:|file:\/\/)/)?"*":m:"*"),function(){switch(v(p,"IFrame scrolling "+(f[p]&&f[p].scrolling?"enabled":"disabled")+" for "+p),e.style.overflow=!1===(f[p]&&f[p].scrolling)?"hidden":"auto",f[p]&&f[p].scrolling){case"omit":break;case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=f[p]?f[p].scrolling:"no"}}(),function(){function t(t){f[p][t]!==1/0&&0!==f[p][t]&&(e.style[t]=f[p][t]+"px",v(p,"Set "+t+" = "+f[p][t]+"px"))}function n(e){if(f[p]["min"+e]>f[p]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),t("maxHeight"),t("minHeight"),t("maxWidth"),t("minWidth")}(),"number"!=typeof(f[p]&&f[p].bodyMargin)&&"0"!==(f[p]&&f[p].bodyMargin)||(f[p].bodyMarginV1=f[p].bodyMargin,f[p].bodyMargin=f[p].bodyMargin+"px"),s=F(p),(l=h())&&(c=l,e.parentNode&&new c((function(t){t.forEach((function(t){Array.prototype.slice.call(t.removedNodes).forEach((function(t){t===e&&M(e)}))}))})).observe(e.parentNode,{childList:!0})),b(e,"load",(function(){var n,r;A("iFrame.onload",s,e,t,!0),n=f[p]&&f[p].firstRun,r=f[p]&&f[p].heightCalculationMethod in d,!n&&r&&T({iframe:e,height:0,width:0,type:"init"})})),A("init",s,e,t,!0),f[p]&&(f[p].iframe.iFrameResizer={close:M.bind(null,f[p].iframe),removeListeners:O.bind(null,f[p].iframe),resize:A.bind(null,"Window resize","resize",f[p].iframe),moveToAnchor:function(e){A("Move to anchor","moveToAnchor:"+e,f[p].iframe,p)},sendMessage:function(e){A("Send Message","message:"+(e=JSON.stringify(e)),f[p].iframe,p)}}))}function U(e,t){null===m&&(m=setTimeout((function(){m=null,e()}),t))}function N(){"hidden"!==document.visibilityState&&(v("document","Trigger event: Visiblity change"),U((function(){L("Tab Visable","resize")}),16))}function L(e,t){Object.keys(f).forEach((function(n){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(n)&&A(e,t,f[n].iframe,n)}))}function P(){function e(e,t){t&&(function(){if(!t.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==t.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+t.tagName+">")}(),W(t,e),n.push(t))}var n;return function(){var e,t=["moz","webkit","o","ms"];for(e=0;e<t.length&&!u;e+=1)u=window[t[e]+"RequestAnimationFrame"];u?u=u.bind(window):v("setup","RequestAnimationFrame not supported")}(),b(window,"message",S),b(window,"resize",(function(){v("window","Trigger event: resize"),U((function(){L("Window resize","resize")}),16)})),b(document,"visibilitychange",N),b(document,"-webkit-visibilitychange",N),function(r,o){switch(n=[],function(e){e&&e.enablePublicMethods&&E("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(r),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),e.bind(t,r));break;case"object":e(r,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")")}return n}}}()}(ee={exports:{}}),ee.exports),ne=function(e){var t=e.title,n=e.forwardRef,r=K(e,["title","forwardRef"]),i=function(e){return e.autoResize,e.bodyBackground,e.bodyMargin,e.bodyPadding,e.checkOrigin,e.inPageLinks,e.heightCalculationMethod,e.interval,e.log,e.maxHeight,e.maxWidth,e.minHeight,e.minWidth,e.resizeFrom,e.scrolling,e.sizeHeight,e.sizeWidth,e.warningTimeout,e.tolerance,e.widthCalculationMethod,e.onClosed,e.onInit,e.onMessage,e.onMouseEnter,e.onMouseLeave,e.onResized,K(e,["autoResize","bodyBackground","bodyMargin","bodyPadding","checkOrigin","inPageLinks","heightCalculationMethod","interval","log","maxHeight","maxWidth","minHeight","minWidth","resizeFrom","scrolling","sizeHeight","sizeWidth","warningTimeout","tolerance","widthCalculationMethod","onClosed","onInit","onMessage","onMouseEnter","onMouseLeave","onResized"])}(r),a=(0,o.useRef)(null),s=function(){return a.current,a&&a.current&&a.current.id,!a.current};return(0,o.useEffect)((function(){var e=a.current;return te($({},r,{onClose:s}),e),function(){return e.iFrameResizer&&e.iFrameResizer.removeListeners()}}),[]),(0,o.useImperativeHandle)(n,(function(){return{resize:function(){return a.current.iFrameResizer.resize()},moveToAnchor:function(e){return a.current.iFrameResizer.moveToAnchor(e)},sendMessage:function(e,t){a.current.iFrameResizer.sendMessage(e,t)}}})),o.createElement("iframe",$({title:t},i,{ref:a}))};function re(e){var t=location.href,n=new URL(t),r=localStorage.getItem("giscus-session"),i=(0,o.useState)(n.searchParams.get("giscus")||""),a=(0,j.Z)(i,2),s=a[0],c=a[1],l=(0,o.useState)(X(q(_({},e),{session:s}))),u=(0,j.Z)(l,2),d=u[0],f=u[1],m=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(s){localStorage.setItem("giscus-session",JSON.stringify(s)),n.searchParams.delete("giscus");var o=n.toString(),i=X(q(_({},e),{session:s,origin:o}));return f(i),void history.replaceState(void 0,document.title,o)}if(r)try{c(JSON.parse(r||"")||"")}catch(t){c(""),localStorage.removeItem("giscus-session"),console.warn("".concat(J(null==t?void 0:t.message)," Session has been cleared."))}}),[]),(0,o.useEffect)(Q,[]),(0,o.useEffect)((function(){var e,t=(e=function(){return c("")},function(t){var n;if("https://giscus.app"===t.origin){var r=t.data;if("object"==typeof r&&(null==(n=null==r?void 0:r.giscus)?void 0:n.error)){var o=r.giscus.error;if(o.includes("Bad credentials")||o.includes("Invalid state value")){if(null!==localStorage.getItem("giscus-session"))return localStorage.removeItem("giscus-session"),e(),void console.warn("".concat(J(o)," Session has been cleared."));console.error("".concat(J(o)," No session is stored initially. ").concat(V))}o.includes("Discussion not found")?console.warn("[giscus] ".concat(o,". A new discussion will be created if a comment/reaction is submitted.")):console.error("".concat(J(o)," ").concat(V))}}});return window.addEventListener("message",t),function(){return window.removeEventListener("message",t)}}),[]),(0,o.useEffect)((function(){m.current&&(m.current.src=d)}),[d]),o.createElement("div",{className:"giscus"},o.createElement(ne,{className:"giscus-frame",title:"Comments",src:d,forwardRef:m,checkOrigin:["https://giscus.app"]}))}function oe(e){var t=e.repo,n=e.repoId,r=e.category,i=e.categoryId,a=e.mapping,s=e.term,c=e.theme,l=e.reactionsEnabled,u=e.emitMetadata,d=(0,o.useState)(!1),f=(0,j.Z)(d,2),m=f[0],g=f[1];return(0,o.useEffect)((function(){return g(!0)}),[]),m?o.createElement(re,{repo:t,repoId:n,category:r,categoryId:i,mapping:a,term:s,theme:c,reactionsEnabled:l,emitMetadata:u}):null}function ie(e){var t=e.type,n=void 0===t?"normal":t,r=e.title,i=e.url,a=e.items,s=e.depth,c=void 0===s?0:s;return a=a||[],o.createElement("li",null,o.createElement(d.Z.a,{href:i},"tag"===n?"#"+r:r),Array.isArray(a)&&a.length>0?o.createElement(d.Z.ul,null,a.map((function(e,t){return o.createElement(ie,Object.assign({key:e.title,depth:c+1},e))}))):null)}ne.defaultProps={title:"iframe"},ne.propTypes={title:F().string};var ae=function(e){var t=e.data,n=e.pageContext,r=e.location,l=t.mdx,u=t.tagsOutbound||{nodes:[]},f=(0,x.Z)(),m=(0,C.u)(n.sidebarItems,n.tagsGroups),v=n.tagsGroups,E=l.tableOfContents,I=l.frontmatter,k=l.fields,M=l.rawBody,z=l.body,R=l.inboundReferences,Z=l.outboundReferences,j=l.excerpt,A=k.title,F=k.lastUpdatedAt,W=k.lastUpdated,U=k.gitCreatedAt,N=k.slug,L=k.url,P=k.editUrl,H=k.shouldShowTitle,D=I.date,B=I.description,G=I.imageAlt,_=I.dateModified,q=I.tags,V=I.language,J=I.seoTitle,Y=q&&q[0],X=D?new Date(D):U?new Date(U):null,Q={title:A,shouldShowTitle:H,description:B,rawBody:M,excerpt:j,datePublished:X,seoTitle:J,dateModified:_?new Date(_):F?new Date(F):X,category:Y,imageUrl:I.image?I.image.publicURL:null,imageAlt:G,url:L,slug:N,tags:q||[],language:V},$=(0,b.Fg)().resolvedColorMode;return o.createElement(a.Z,{pageContext:n,location:r},o.createElement(h.Z,{post:Q}),o.createElement(s.Z,{id:"skip-nav",display:"flex",width:"100%",p:[4,5,6,7],sx:{justifyContent:"center",flexDirection:"row-reverse"}},E.items?o.createElement(se,{sx:{width:220,flex:"0 0 auto",marginLeft:6},display:["none",null,"block"],position:"sticky",top:w.M+24,maxHeight:"calc(100vh - "+w.M+"px - 24px)"},o.createElement(y.Z,{display:"inline-block",fontWeight:"bold",mb:1},"On this page"),o.createElement(O,{items:E.items})):null,o.createElement(s.Z,{width:"100%"},H&&o.createElement(s.Z,{mb:4},o.createElement(s.Z,{display:"flex",sx:{alignItems:"center"}},o.createElement(c.Z,{as:"h1",mr:2},A))),E.items?o.createElement(s.Z,{borderWidth:"1px",borderStyle:"solid",borderColor:"border.primary",borderRadius:2,display:["block",null,"none"],mb:5,bg:"auto.gray.1"},o.createElement(s.Z,{p:3},o.createElement(s.Z,{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},o.createElement(y.Z,{fontWeight:"bold"},"On this page"))),o.createElement(s.Z,{p:3,sx:{borderTop:"1px solid",borderColor:"border.gray"}},o.createElement(O,{items:E.items}))):null,o.createElement(p.MDXProvider,{components:{a:function(e){return o.createElement(d.Z.a,Object.assign({},e,{references:Z}))}}},o.createElement(i.MDXRenderer,null,z)),"/"===N&&f.shouldShowTagGroupsOnIndex&&m.length>0&&o.createElement(s.Z,null,o.createElement(d.Z.h2,null,"Tags"),v.map((function(e){return o.createElement(d.Z.ul,{key:e.title},o.createElement(ie,{title:e.title,url:e.url,type:e.type,items:e.items}))}))),o.createElement(g,{references:R}),f.shouldSupportTags&&o.createElement(T,{tags:q,nodes:u.nodes}),o.createElement(S,{editUrl:P,lastUpdated:W}),o.createElement(oe,{repo:"dfeng/notes",repoId:"R_kgDOGksSGQ=",category:"Announcements",categoryId:"DIC_kwDOGksSGc4CA4yr",mapping:"specific",term:A,reactionsEnabled:"1",emitMetadata:"0",theme:"day"===$?"light":"dark"}))))},se=(0,r.default)(s.Z).withConfig({displayName:"post-page___StyledBox",componentId:"sc-v5ksrc-0"})({gridArea:"table-of-contents",overflow:"auto"}),ce=ae},13081:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var r=function(e,t){return e.length>0?e:t.length>0?[{title:"Tags",items:t}]:[]}},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},29932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},62663:function(e){e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},49029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},44239:function(e,t,n){var r=n(62705),o=n(89607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},80531:function(e,t,n){var r=n(62705),o=n(29932),i=n(1469),a=n(33448),s=r?r.prototype:void 0,c=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},35393:function(e,t,n){var r=n(62663),o=n(53816),i=n(58748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}},69389:function(e,t,n){var r=n(18674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(c){}var o=a.call(e);return r&&(t?e[s]=n:delete e[s]),o}},93157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",a="\\d+",s="[\\u2700-\\u27bf]",c="["+n+"]",l="[^\\ud800-\\udfff"+o+a+t+n+r+"]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+r+"]",m="(?:"+c+"|"+l+")",g="(?:"+f+"|"+l+")",p="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",w=y+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,d].join("|")+")"+y+b+")*"),v="(?:"+[s,u,d].join("|")+")"+w,x=RegExp([f+"?"+c+"+"+p+"(?="+[i,f,"$"].join("|")+")",g+"+"+h+"(?="+[i,f+m,"$"].join("|")+")",f+"?"+m+"+"+p,f+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,v].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},53816:function(e,t,n){var r=n(69389),o=n(79833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},1469:function(e){var t=Array.isArray;e.exports=t},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},21804:function(e,t,n){var r=n(35393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},79833:function(e,t,n){var r=n(80531);e.exports=function(e){return null==e?"":r(e)}},58748:function(e,t,n){var r=n(49029),o=n(93157),i=n(79833),a=n(2757);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-primer-wiki-src-templates-post-query-js-39fbfc75892f8df3b73a.js.map