(self.AMP=self.AMP||[]).push({n:"amp-list",v:"1901241837330",f:(function(AMP,_){
var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={a:!0},ea={};try{ea.__proto__=da;ca=ea.a;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba,m=window.DOMParser&&new window.DOMParser,ga=!1,ha=!1;
try{var ia=m.parseFromString('<wbr class="A"/>',"text/html").body.firstChild,ja=document.createElement("div");ja.appendChild(ia);if("A"!==ja.firstChild.classList[0])throw Error();ga=!0}catch(a){}var ka=document.implementation.createHTMLDocument(""),n=ka.documentElement,p=ka.body;try{n.innerHTML+="",ha=!0}catch(a){m.parseFromString('<wbr class="A"/>',"application/xhtml+xml");var la=/(<body[^>]*>)([\s\S]*)<\/body>/}
function ma(a,b){var c=m.parseFromString(a,"text/html");return c.body?"HTML"===b?c.documentElement:c.body.firstChild:na(a,b)}function na(a,b){if("HTML"===b){if(ha)return n.innerHTML=a,n;var c=a.match(la);if(c){var d=c[2],e=c.index+c[1].length,f=e+d.length;a=a.slice(0,e)+a.slice(f);p.innerHTML=d}a=m.parseFromString(a,"application/xhtml+xml");for(b=a.body;p.firstChild;)b.appendChild(p.firstChild);return a.documentElement}p.innerHTML=a;return p.firstChild}var oa=ga?ma:na;var r={default:function(a,b){if(!a||!a.nodeType)throw Error("set-dom: You must provide a valid node to update.");a.nodeType===pa&&(a=a.documentElement);b.nodeType===qa?ra(a,b):sa(a,"string"===typeof b?oa(b,a.nodeName):b);a[ta]||(a[ta]=!0,q(a))}};r.default.KEY="data-key";r.default.IGNORE="data-ignore";r.default.CHECKSUM="data-checksum";var ua="_set-dom-",ta=ua+"mounted",va=1,pa=9,qa=11;
function sa(a,b){if(a.nodeType===b.nodeType)if(a.nodeType===va){if(!(null!=a.getAttribute(r.default.IGNORE)&&null!=b.getAttribute(r.default.IGNORE)||(a.getAttribute(r.default.CHECKSUM)||NaN)===(b.getAttribute(r.default.CHECKSUM)||NaN)||a.isEqualNode(b)))if(ra(a,b),a.nodeName===b.nodeName){a=a.attributes;b=b.attributes;var c,d;for(c=a.length;c--;){var e=a[c];var f=e.namespaceURI;var g=e.localName;(d=b.getNamedItemNS(f,g))||a.removeNamedItemNS(f,g)}for(c=b.length;c--;)(e=b[c],f=e.namespaceURI,g=e.localName,
d=a.getNamedItemNS(f,g),d)?d.value!==e.value&&(d.value=e.value):(b.removeNamedItemNS(f,g),a.setNamedItemNS(e))}else{for(var h=b.cloneNode();a.firstChild;)h.appendChild(a.firstChild);a.parentNode.replaceChild(h,a)}}else a.nodeValue!==b.nodeValue&&(a.nodeValue=b.nodeValue);else a.parentNode.replaceChild(b,t(a,"dismount")),q(b)}
function ra(a,b){var c,d,e,f=a.firstChild;b=b.firstChild;for(var g=0;f;){g++;var h=f;var k=u(h);f=f.nextSibling;k&&(e||(e={}),e[k]=h)}for(f=a.firstChild;b;){g--;var l=b;b=b.nextSibling;e&&(c=u(l))&&(d=e[c])?(delete e[c],d!==f?a.insertBefore(d,f):f=f.nextSibling,sa(d,l)):f?(h=f,f=f.nextSibling,u(h)?(a.insertBefore(l,h),q(l)):sa(h,l)):(a.appendChild(l),q(l))}for(k in e)g--,a.removeChild(t(e[k],"dismount"));for(;0<=--g;)a.removeChild(t(a.lastChild,"dismount"))}
function u(a){if(a.nodeType===va&&(a=a.getAttribute(r.default.KEY)||a.id))return ua+a}function q(a){t(a,"mount")}function t(a,b){if(u(a)){var c=document.createEvent("Event"),d={value:a};c.initEvent(b,!1,!1);Object.defineProperty(c,"target",d);Object.defineProperty(c,"srcElement",d);a.dispatchEvent(c)}for(var e=a.firstChild;e;)e=t(e,b).nextSibling;return a};function wa(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function v(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var xa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ya(a){var b=Object.create(null);if(!a)return b;for(var c;c=xa.exec(a);){var d=v(c[1],c[1]),e=c[2]?v(c[2],c[2]):"";b[d]=e}return b};var za=Object.prototype.toString;function w(a){return Array.isArray(a)}function Aa(a){return"[object Object]"===za.call(a)};self.log=self.log||{user:null,dev:null,userForEmbed:null};var x=self.log;function y(){if(!x.user)throw Error("failed to call initLogConstructor");return x.user}function z(){if(x.dev)return x.dev;throw Error("failed to call initLogConstructor");}function A(a,b,c,d,e){y().assert(a,b,c,d,e,void 0,void 0,void 0,void 0,void 0,void 0)};function Ba(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};var C;function Ca(a){var b=a.ownerDocument||a;C&&C.ownerDocument===b||(C=b.createElement("div"));return Da}function Da(a){C.innerHTML=a[0];var b=C.firstElementChild;C.removeChild(b);return b};var D,Ea="Webkit webkit Moz moz ms O o".split(" ");function E(a,b){for(var c in b){var d=a,e=b[c];var f=d.style;var g=c;if(2>g.length?0:0==g.lastIndexOf("--",0))f=g;else{D||(D=Ba());var h=D[g];if(!h){h=g;if(void 0===f[g]){var k=g.charAt(0).toUpperCase()+g.slice(1);b:{for(var l=0;l<Ea.length;l++){var Fa=Ea[l]+k;if(void 0!==f[Fa]){k=Fa;break b}}k=""}void 0!==f[k]&&(h=k)}D[g]=h}f=h}f&&(d.style[f]=e)}}
function Ga(a){var b=!1;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")};function Ha(a,b){var c,d=a.ownerDocument.defaultView,e=d!=(d.__AMP_TOP||d);if(e){if(Ia(d,b)){var f=F(d,b);if(f)return f}if(!c)return null}a=G(a);a=H(a);return Ia(a,b)?F(a,b):null}function I(a,b){a=a.__AMP_TOP||a;return F(a,b)}function Ja(a){var b=G(a);b=H(b);return F(b,"viewer")}function G(a){return a.nodeType?I((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function H(a){a=G(a);return a.isSingleDoc()?a.win:a}
function F(a,b){Ia(a,b);var c=Ka(a);a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function La(a){var b=Ma(a);if(b)return b;var c=new wa,d=c,e=d.promise;d=d.resolve;Ka(a).bind={obj:null,promise:e,resolve:d,context:null,ctor:null};return e}function Ma(a){var b=Ka(a).bind;if(b){if(b.promise)return b.promise;F(a,"bind");return b.promise=Promise.resolve(b.obj)}return null}function Ka(a){var b=a.services;b||(b=a.services={});return b}
function Ia(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function Na(a,b,c){if(b(a))c();else{var d=a.ownerDocument.defaultView;if(d.MutationObserver){var e=new d.MutationObserver(function(){b(a)&&(e.disconnect(),c())});e.observe(a,{childList:!0})}else var f=d.setInterval(function(){b(a)&&(d.clearInterval(f),c())},5)}}function Oa(a,b){Na(a.documentElement,function(){return!!a.body},b)}function Pa(a){return new Promise(function(b){Oa(a,b)})}function Qa(a){for(;a.firstChild;)a.removeChild(a.firstChild)}var J;
function K(a,b){b="> ["+b+"]";if(null==J){var c=a.ownerDocument;try{var d=c.createElement("div"),e=c.createElement("div");d.appendChild(e);J=d.querySelector(":scope div")===e}catch(f){J=!1}}J?a=a.querySelector(":scope "+b):(a.classList.add("i-amphtml-scoped"),d=a.querySelector(".i-amphtml-scoped "+b),a.classList.remove("i-amphtml-scoped"),a=d);return a};function Ra(a){var b=Ma(H(a));if(b)return b;var c=G(a);return c.whenBodyAvailable().then(function(){return Sa(c.win,c.win.document.head)}).then(function(){var b=c.win;return b.ampExtendedElements&&b.ampExtendedElements["amp-bind"]?La(H(a)):null})}function Ta(a){var b=Ha(a,"bind");if(b)return Promise.resolve(b);b=a.ownerDocument.defaultView;return b!==(b.__AMP_TOP||b)?Ua(b):Ra(a)}
function Sa(a,b){if(b){var c=[];b=b.querySelectorAll("script[custom-element]");for(var d=0;d<b.length;d++)c.push(b[d].getAttribute("custom-element"))}else c=[];if(!c.includes("amp-bind"))return Promise.resolve();var e=I(a,"extensions");return e.waitForExtension(a,"amp-bind")}function Ua(a){return Pa(a.document).then(function(){return Sa(a,a.document.head)}).then(function(){return a.ampExtendedElements&&a.ampExtendedElements["amp-bind"]?La(a):null})};function L(a,b){var c,d=this;this.X=I(a,"timer");this.aa=b;this.$=c||0;this.C=-1;this.O=0;this.P=!1;this.Y=function(){d.C=-1;d.O=0;d.P=!0;d.aa();d.P=!1}}L.prototype.isPending=function(){return-1!=this.C};L.prototype.schedule=function(a){var b=a||this.$;this.P&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.O?(this.cancel(),this.O=c,this.C=this.X.delay(this.Y,b),!0):!1};L.prototype.cancel=function(){this.isPending()&&(this.X.cancel(this.C),this.C=-1)};function M(){var a=100;this.Z=a;this.J=this.R=0;this.I=Object.create(null)}M.prototype.has=function(a){return!!this.I[a]};M.prototype.get=function(a){var b=this.I[a];if(b)return b.access=++this.J,b.payload};M.prototype.put=function(a,b){this.has(a)||this.R++;this.I[a]={payload:b,access:this.J};if(!(this.R<=this.Z)){z().warn("lru-cache","Trimming LRU cache");a=this.I;var c=this.J+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.R--)}};var N=self.AMP_CONFIG||{},Va={thirdParty:N.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:N.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof N.thirdPartyFrameRegex?new RegExp(N.thirdPartyFrameRegex):N.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:N.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof N.cdnProxyRegex?new RegExp(N.cdnProxyRegex):N.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:N.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:N.localDev||!1};var Wa=B({c:!0,v:!0,a:!0,ad:!0}),Xa,Ya,Za=/[?&]amp_js[^&]*/,$a=/[?&]amp_gsa[^&]*/,ab=/[?&]amp_r[^&]*/,bb=/[?&]amp_kit[^&]*/,cb=/[?&]usqp[^&]*/;
function O(a){var b;Xa||(Xa=self.document.createElement("a"),Ya=self.UrlCache||(self.UrlCache=new M));var c=b?null:Ya,d=Xa;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a}function db(a){var b=[],c;for(c in a){var d=a[c];if(null!=d)if(w(d))for(var e=0;e<d.length;e++){var f=d[e];b.push(encodeURIComponent(c)+"="+encodeURIComponent(f))}else e=d,b.push(encodeURIComponent(c)+"="+encodeURIComponent(e))}return b.join("&")}
function eb(a,b){var c=void 0===c?"source":c;A(null!=a,"%s %s must be available",b,c);var d=a;a=d;"string"==typeof a&&(a=O(a));var e;(e="https:"==a.protocol||"localhost"==a.hostname)||(a=a.hostname,e=a.length-10,e=0<=e&&a.indexOf(".localhost",e)==e);A(e||/^(\/\/)/.test(d),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',b,c,d)}
function P(a){"string"==typeof a&&(a=O(a));var b=a;"string"==typeof b&&(b=O(b));if(!Va.cdnProxyRegex.test(b.origin))return a.href;b=a.pathname.split("/");A(Wa[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);A(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");var e;e=(e=a.search)&&"?"!=e?(e=e.replace(Za,"").replace($a,"").replace(ab,"").replace(bb,"").replace(cb,"").replace(/^[?&]/,
""))?"?"+e:"":"";return b+e+(a.hash||"")};function fb(a){return!!a&&"function"==typeof a.getFormData};var gb=["GET","POST"],hb=[w,Aa];
function ib(a,b){A(Aa(a),"Object expected: %s",a);var c="document"==b;if(!c)return new Response(a.body,a.init);var d=Ba(),e={status:200,statusText:"OK",getResponseHeader:function(a){return d[String(a).toLowerCase()]||null}};if(a.init){var f=a.init;w(f.headers)&&f.headers.forEach(function(a){var b=a[0],c=a[1];d[String(b).toLowerCase()]=String(c)});f.status&&(e.status=parseInt(f.status,10));f.statusText&&(e.statusText=String(f.statusText))}return new Response(a.body?String(a.body):"",e)}
function jb(a){var b="application/json";a=a||{};var c=a.method;void 0===c?c="GET":(c=c.toUpperCase(),gb.includes(c));a.method=c;a.headers=a.headers||B({});b&&(a.headers.Accept=b);return a}function kb(a){var b=jb(a);if("POST"==b.method&&!fb(b.body)){hb.some(function(a){return a(b.body)});b.headers["Content-Type"]=b.headers["Content-Type"]||"text/plain;charset=utf-8";var c=b.headers["Content-Type"];b.body="application/x-www-form-urlencoded"===c?db(b.body):JSON.stringify(b.body)}};function Q(a,b){var c="amp-list";this.S=a;this.o=b;this.ba=c}Q.prototype.isSupported=function(){var a=this.S.ampdoc;return a.isSingleDoc()&&a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template")?this.S.hasCapability("viewerRenderTemplate"):!1};Q.prototype.fetchAndRenderTemplate=function(a,b,c,d){c=void 0===c?null:c;d=void 0===d?{}:d;var e;c||(e=this.o.maybeFindTemplate(a));return this.S.sendMessageAwaitResponse("viewerRenderTemplate",lb(this,b,e,c,d))};
function lb(a,b,c,d,e){e=void 0===e?{}:e;var f=B({type:a.ba}),g="successTemplate",h=d&&d[g]?d[g]:c;h&&(f[g]={type:"amp-mustache",payload:h.innerHTML});var k="errorTemplate",l=d&&d[k]?d[k]:null;l&&(f[k]={type:"amp-mustache",payload:l.innerHTML});e&&Object.assign(f,e);a=b.xhrUrl;c=b.fetchOpt;b=Object.assign({},c);if(fb(c.body)){c=c.body;b.headers["Content-Type"]="multipart/form-data;charset=utf-8";c=c.entries();d=[];for(e=c.next();!e.done;e=c.next())d.push(e.value);b.body=d}return B({originalRequest:{input:a,
init:b},ampComponent:f})}Q.prototype.verifySsrResponse=function(a,b,c){b=ib(b,c.fetchOpt.responseType);c=c.fetchOpt;(b=b.headers.get("AMP-Access-Control-Allow-Source-Origin"))?(a=O(P(a.location.href)).origin,A(b==a,"Returned AMP-Access-Control-Allow-Source-Origin is not equal to the current: "+b+(" vs "+a))):c.requireAmpResponseSourceOrigin&&A(!1,"Response must contain the AMP-Access-Control-Allow-Source-Origin header")};function mb(a,b){if("."==b)return a;var c=b.split(".");for(b=0;b<c.length;b++){var d=c[b];if(d&&a&&void 0!==a[d]&&(null==a||"object"!=typeof a?0:Object.prototype.hasOwnProperty.call(a,d)))a=a[d];else{a=void 0;break}}return a};function nb(a,b,c,d){var e=".";e=void 0===e?".":e;c=void 0===c?0:c;d=void 0===d?!1:d;eb(b.getAttribute("src"),b);var f=I(a.win,"batched-xhr");return ob(b,c,d).then(function(a){return f.fetchJson(a.xhrUrl,a.fetchOpt)}).then(function(a){return a.json()}).then(function(a){if(null==a)throw Error("Response is undefined.");return mb(a,e||".")})}
function ob(a,b,c){var d=a.getAttribute("src"),e=Ha(a,"url-replace");return(1<=b?e.expandUrlAsync(d):Promise.resolve(d)).then(function(d){if(1==b){var f=e.collectUnwhitelistedVarsSync(a);if(0<f.length)throw y().createError("URL variable substitutions in CORS fetches from dynamic URLs (e.g. via amp-bind) require opt-in. "+('Please add data-amp-replace="'+f.join(" ")+'" to the ')+("<"+a.tagName+"> element. See https://bit.ly/amp-var-subs."));}var h={};a.hasAttribute("credentials")?h.credentials=a.getAttribute("credentials"):
h.requireAmpResponseSourceOrigin=!1;c&&(h.cache="reload");return{xhrUrl:d,fetchOpt:h}})};var R;function pb(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(l){throw self.reportError(l),l;}};var g=qb(),h=!1;c&&(h=c.capture);d.addEventListener("click",f,g?c:h);return function(){d&&d.removeEventListener("click",f,g?c:h);f=d=e=null}}function qb(){if(void 0!==R)return R;R=!1;try{var a={get capture(){R=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return R};function rb(a,b){return pb(a,b)};function S(a,b){if(a.__AMP__EXPERIMENT_TOGGLES)var c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){e=
e.getAttribute("content").split(",");for(var f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0)}Object.assign(c,sb(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length)for(d=a.AMP_CONFIG["allow-url-opt-in"],a=ya(a.location.originalHash||a.location.hash),e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}var g=c;return!!g[b]}
function sb(a){a:{try{var b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==v(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=v(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var tb=['\n          <amp-list-load-more load-more-failed class="i-amphtml-default-ui">\n            <div class="i-amphtml-list-load-more-message">\n              Unable to Load More\n            </div>\n            <button load-more-clickable\n              class="i-amphtml-list-load-more-button\n                     i-amphtml-list-load-more-button-has-icon\n                     i-amphtml-list-load-more-button-small"\n            >\n              <div class="i-amphtml-list-load-more-icon"></div>\n              <label>Retry</label>\n            </button>\n          </amp-list-load-more>\n        '];
tb.raw=['\n          <amp-list-load-more load-more-failed class="i-amphtml-default-ui">\n            <div class="i-amphtml-list-load-more-message">\n              Unable to Load More\n            </div>\n            <button load-more-clickable\n              class="i-amphtml-list-load-more-button\n                     i-amphtml-list-load-more-button-has-icon\n                     i-amphtml-list-load-more-button-small"\n            >\n              <div class="i-amphtml-list-load-more-icon"></div>\n              <label>Retry</label>\n            </button>\n          </amp-list-load-more>\n        '];
var ub=['\n          <amp-list-load-more load-more-loading class="i-amphtml-default-ui">\n            <div class="i-amphtml-list-load-more-spinner"></div>\n          </amp-list-load-more>\n        '];ub.raw=['\n          <amp-list-load-more load-more-loading class="i-amphtml-default-ui">\n            <div class="i-amphtml-list-load-more-spinner"></div>\n          </amp-list-load-more>\n        '];var vb=['\n          <amp-list-load-more load-more-button class="i-amphtml-default-ui">\n            <button load-more-clickable class="i-amphtml-list-load-more-button">\n              <label>See More</label>\n            </button>\n          </amp-list-load-more>\n        '];
vb.raw=['\n          <amp-list-load-more load-more-button class="i-amphtml-default-ui">\n            <button load-more-clickable class="i-amphtml-list-load-more-button">\n              <label>See More</label>\n            </button>\n          </amp-list-load-more>\n        '];
function T(a){var b=AMP.BaseElement.call(this,a)||this;b.h=null;b.G=null;b.T=!1;b.V=new L(b.win,function(){return wb(b)});b.m=null;b.W=null;b.o=I(b.win,"templates");b.K=!1;b.U=null;b.H=null;b.l=S(b.win,"amp-list-load-more")&&a.hasAttribute("load-more");b.w=null;b.j=null;b.L=null;b.B=null;b.A=null;b.N=null;b.M=null;b.F=null;b.registerAction("refresh",function(){if(b.K)return xb(b),yb(b,!1,!0)},100);S(b.win,"amp-list-resizable-children")&&b.registerAction("changeToLayoutContainer",function(){return zb(b)},
100);b.D=null;return b}var U=AMP.BaseElement;T.prototype=aa(U.prototype);T.prototype.constructor=T;if(fa)fa(T,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var Ab=Object.getOwnPropertyDescriptor(U,V);Ab&&Object.defineProperty(T,V,Ab)}else T[V]=U[V];T.ca=U.prototype;T.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
T.prototype.buildCallback=function(){var a=this;this.G=this.getViewport();var b=Ja(this.getAmpDoc());this.D=new Q(b,this.o);this.U=this.element.getAttribute("src");this.h=Bb(this);this.element.appendChild(this.h);this.element.hasAttribute("aria-live")||this.element.setAttribute("aria-live","polite");this.element.hasAttribute("auto-resize")&&y().warn("amp-list","auto-resize attribute is deprecated and its behavior is disabled. This feature will be relaunched under a new name soon. Please see https://github.com/ampproject/amphtml/issues/18849");
Ta(this.element).then(function(b){a.H=b});if(this.l){W(this);X(this);Y(this);Z(this);Cb(this);Db(this);var c=this.getOverflowElement();c&&Ga(c)}};function W(a){a.j||(a.j=K(a.element,"load-more-button"),a.j||(a.j=Ca(a.win.document)(vb)));return a.j}function Cb(a){if(!a.L){var b=W(a);a.L=K(b,"load-more-clickable")||b}return a.L}T.prototype.reconstructWhenReparented=function(){return!1};
T.prototype.layoutCallback=function(){var a=this;this.K=!0;var b=this.getPlaceholder();b&&Eb(this,b);if(S(this.win,"amp-list-viewport-resize"))this.G.onResize(function(){Eb(a,a.h)});return yb(this)};
T.prototype.mutatedAttributesCallback=function(a){z().info("amp-list","mutate:",a);var b=a.src,c=a.state,d=a["is-layout-container"];void 0!==b?"string"===typeof b?this.K&&(xb(this),yb(this)):"object"===typeof b?(this.element.setAttribute("src",""),xb(this,!1),b=w(b)?b:[b],Fb(this,b,!1)):this.user().error("amp-list",'Unexpected "src" type: '+b):void 0!==c&&(y().error("amp-list","[state] is deprecated, please use [src] instead."),xb(this,!1),b=w(c)?c:[c],Fb(this,b,!1));d&&zb(this)};
T.prototype.isLoadingReused=function(){return this.element.hasAttribute("reset-on-refresh")};function Bb(a){var b=a.win.document.createElement("div");b.setAttribute("role","list");a.applyFillContent(b,!0);return b}function Gb(a,b){a.forEach(function(a){a.hasAttribute("role")||a.setAttribute("role","listitem");b.appendChild(a)})}function Hb(a,b){if(b||a.T)a.toggleFallback(b),a.T=b}
function xb(a,b){if((b=void 0===b?!0:b)&&a.element.hasAttribute("reset-on-refresh")||"always"===a.element.getAttribute("reset-on-refresh"))a.togglePlaceholder(!0),a.toggleLoading(!0,!0),a.mutateElement(function(){Hb(a,!1);Qa(a.h)})}
function yb(a,b,c){b=void 0===b?!1:b;c=void 0===c?!1:c;if(!a.element.getAttribute("src"))return Promise.resolve();if(a.D.isSupported())c=Ib(a,c);else{var d=a.element.getAttribute("items")||"items";c=Jb(a,c).then(function(c){var e=c;"."!=d&&(e=mb(c,d));A("undefined"!==typeof e,'Response must contain an array or object at "%s". %s',d,a.element);a.element.hasAttribute("single-item")&&!w(e)&&(e=[e]);e=y().assertArray(e);if(a.element.hasAttribute("max-items")){var g=e,h=parseInt(a.element.getAttribute("max-items"),
10);h<g.length&&(g=g.slice(0,h));e=g}a.l&&(g=a.element.getAttribute("load-more-bookmark")||"load-more-src",a.w=mb(c,g));return Fb(a,e,!!b,c)})}return c.catch(function(c){if(b)throw c;a.toggleLoading(!1);if(a.getFallback())Hb(a,!0),a.togglePlaceholder(!1);else throw c;})}
function Ib(a,b){var c;return ob(a.element,Kb(a),b).then(function(b){var d=c=b,f=c.xhrUrl;if(!1!==c.fetchOpt.ampCors){var g=a.win,h=O(f);h=ya(h.search);A(!("__amp_source_origin"in h),"Source origin is not allowed in %s",f);g=O(P(g.location.href)).origin;g=encodeURIComponent("__amp_source_origin")+"="+encodeURIComponent(g);g&&(f=f.split("#",2),h=f[0].split("?",2),g=h[0]+(h[1]?"?"+h[1]+"&"+g:"?"+g),f=g+=f[1]?"#"+f[1]:"")}d.xhrUrl=f;d=c;h=a.win;g=c.xhrUrl;f=c.fetchOpt;!1===f.ampCors&&(f.requireAmpResponseSourceOrigin=
!1);!0===f.requireAmpResponseSourceOrigin&&z().error("XHR","requireAmpResponseSourceOrigin is deprecated, use ampCors instead");void 0===f.requireAmpResponseSourceOrigin&&(f.requireAmpResponseSourceOrigin=!0);h=h.origin||O(h.location.href).origin;g=O(g).origin;h==g&&(f.headers=f.headers||{},f.headers["AMP-Same-Origin"]="true");d.fetchOpt=f;kb(b.fetchOpt);b=B({ampListAttributes:{items:a.element.getAttribute("items")||"items",singleItem:a.element.hasAttribute("single-item"),maxItems:a.element.getAttribute("max-items")}});
return a.D.fetchAndRenderTemplate(a.element,c,null,b)}).then(function(b){c.fetchOpt.responseType="application/json";a.D.verifySsrResponse(a.win,b,c);return b.html},function(a){throw y().createError("Error proxying amp-list templates",a);}).then(function(b){return Fb(a,b,!1)})}function Fb(a,b,c,d){z().info("amp-list","schedule:",b);var e=new wa,f=e.promise,g=e.resolve,h=e.reject;a.m||a.V.schedule();a.m={data:b,append:c,resolver:g,rejecter:h,payload:d};a.W&&c&&(a.m.payload=d||{});return f}
function wb(a){function b(){d();e.rejecter()}function c(){d();e.resolver()}function d(){a.m!==e?a.V.schedule(1):(a.W=a.m.data,a.m=null)}var e=a.m;z().info("amp-list","pass:",e);if(a.D.isSupported())a.o.findAndSetHtmlForTemplate(a.element,e.data).then(function(b){return Lb(a,[b])}).then(function(b){return Mb(a,b,e.append)}).then(c,b);else{var f=e.payload;a.o.findAndRenderTemplateArray(a.element,e.data).then(function(b){return Lb(a,b)}).then(function(b){return Mb(a,b,e.append)}).then(function(){if(a.l){var b=
[];b.push(Nb(a,W(a),f));b.push(Nb(a,Z(a),f));b=Promise.all(b)}else b=Promise.resolve();return b}).then(function(){return Ob(a)}).then(c,b)}}function Nb(a,b,c){return b&&a.o.hasTemplate(b)?a.o.findAndRenderTemplate(b,c).then(function(c){return a.mutateElement(function(){Qa(b);b.appendChild(c)})}):Promise.resolve()}
function Lb(a,b){function c(c){return c.scanAndApply(b,[a.h]).then(function(){return b},function(){return b})}var d=a.element.getAttribute("binding");return"no"===d?Promise.resolve(b):"refresh"===d?a.H&&a.H.signals().get("FIRST_MUTATE")?c(a.H):Promise.resolve(b):Ta(a.element).then(function(a){return a?c(a):Promise.resolve(b)})}
function Mb(a,b,c){c=void 0===c?!1:c;z().info("amp-list","render:",b);var d=a.h;return a.mutateElement(function(){a.toggleLoading(!1);a.getFallback()&&Hb(a,!1);a.togglePlaceholder(!1);var e=S(a.win,"amp-list-diffing");if(e&&d.hasChildNodes()){var f=Bb(a);Gb(b,f);var g=r.default||r;g.KEY="i-amphtml-key";g(d,f)}else if(c||Qa(d),Gb(b,d),a.l){d.appendChild(W(a));d.appendChild(Y(a));d.appendChild(X(a));var h=Z(a);h&&d.appendChild(h)}var k=a.win;h={detail:null};Object.assign(h,{bubbles:!0});"function"==
typeof k.CustomEvent?h=new k.CustomEvent("amp:dom-update",h):(k=k.document.createEvent("CustomEvent"),k.initCustomEvent("amp:dom-update",!!h.bubbles,!!h.cancelable,null),h=k);a.h.dispatchEvent(h);a.element.getResources().getResourceForElement(a.element).resetPendingChangeSize();Eb(a,a.h)})}
function Eb(a,b){"container"!=a.element.getAttribute("layout")&&a.measureElement(function(){var c=b.scrollHeight;c>a.element.offsetHeight&&a.attemptChangeHeight(c).then(function(){a.l&&a.mutateElement(function(){a.j.classList.remove("i-amphtml-list-load-more-overflow")})}).catch(function(){a.l&&a.mutateElement(function(){a.j.classList.add("i-amphtml-list-load-more-overflow");a.element.appendChild(a.j)})})})}
function zb(a){A(S(a.win,"amp-list-resizable-children"),"Experiment amp-list-resizable-children is disabled");var b=a.element.getAttribute("layout");return"container"==b?Promise.resolve():a.mutateElement(function(){switch(b){case "responsive":a.element.classList.remove("i-amphtml-layout-responsive");E(a.element,{height:"",width:""});break;case "flex-item":E(a.element,{height:"",width:""});break;case "fixed":a.element.classList.remove("i-amphtml-layout-fixed");E(a.element,{height:""});break;case "fixed-height":a.element.classList.remove("i-amphtml-layout-fixed-height");
E(a.element,{height:"",width:""});break;case "intrinsic":a.element.classList.remove("i-amphtml-layout-intrinsic")}a.element.changeSize();a.element.classList.remove("i-amphtml-layout-size-defined");a.h.classList.remove("i-amphtml-fill-content","i-amphtml-replaced-content");var c=a.getOverflowElement();c&&Ga(c);a.element.classList.add("i-amphtml-layout-container");a.element.setAttribute("layout","container")})}
function Ob(a){var b=a.l&&a.w;if(!b)return Promise.resolve();var c="auto"===a.element.getAttribute("load-more");c&&Pb(a);var d=Z(a),e=Cb(a);return a.mutateElement(function(){W(a).classList.toggle("amp-visible",!0);Y(a).classList.toggle("amp-visible",!1);d&&d.classList.toggle("amp-visible",!1);a.F=rb(e,function(){return Qb(a)});Eb(a,a.h)})}
function Qb(a){a.w&&(a.element.setAttribute("src",a.w),a.w=null);Rb(a,!0);return yb(a,!0).then(function(){a.w?Rb(a,!1):Sb(a);a.F&&(a.F(),a.F=null)}).catch(function(){Tb(a)})}function X(a){a.B||(a.B=K(a.element,"load-more-loading"),a.B||(a.B=Ca(a.win.document)(ub)));return a.B}function Sb(a){a.mutateElement(function(){Y(a).classList.toggle("amp-visible",!1);W(a).classList.toggle("amp-visible",!1);X(a).classList.toggle("amp-visible",!1);var b=Z(a);b&&b.classList.toggle("amp-visible",!0)})}
function Rb(a,b){a.mutateElement(function(){if(b){Y(a).classList.toggle("amp-visible",!1);var c=Z(a);c&&c.classList.toggle("amp-visible",!1)}W(a).classList.toggle("amp-visible",!b);X(a).classList.toggle("amp-visible",b)})}function Tb(a){var b=Y(a),c=W(a);if(b||c){var d=Db(a);a.mutateElement(function(){b.classList.toggle("amp-visible",!0);a.F=rb(d,function(){return Qb(a)});c.classList.toggle("amp-visible",!1);X(a).classList.toggle("amp-visible",!1)})}}
function Y(a){a.A||(a.A=K(a.element,"load-more-failed"),a.A||(a.A=Ca(a.win.document)(tb)));return a.A}function Db(a){if(!a.N){var b=Y(a);a.N=K(b,"load-more-clickable")||b}return a.N}function Z(a){a.M||(a.M=K(a.element,"load-more-end"));return a.M}function Jb(a,b){b=void 0===b?!1:b;return nb(a.getAmpDoc(),a.element,Kb(a),b)}function Pb(a){var b=a.j;a.G.onScroll(function(){a.G.getClientRectAsync(b).then(function(b){var c=a.G.getRect();c.bottom+3*c.height>b.bottom&&Qb(a)})})}
function Kb(a){var b=a.element.getAttribute("src"),c=1;if(b==a.U||O(P(b)).origin==O(P(a.getAmpDoc().win.location)).origin)c=2;return c}(function(a){a.registerElement("amp-list",T,"amp-list[load-more] [load-more-button].amp-visible,amp-list[load-more] [load-more-end].amp-visible,amp-list[load-more] [load-more-failed].amp-visible,amp-list[load-more] [load-more-loading].amp-visible{display:block;width:100%}amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{height:80px;padding:12px 0px;box-sizing:border-box}.i-amphtml-list-load-more-button,amp-list[load-more] [load-more-button].i-amphtml-default-ui,amp-list[load-more] [load-more-failed].i-amphtml-default-ui,amp-list[load-more] [load-more-loading].i-amphtml-default-ui{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:.1em;color:#333;text-align:center}[load-more-button].i-amphtml-list-load-more-overflow{position:absolute;bottom:0}amp-list[load-more] [load-more-loading].i-amphtml-default-ui .i-amphtml-list-load-more-spinner{display:inline-block;width:40px;height:40px;margin:8px 0px;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23333' stop-opacity='.75'/%3E%3Cstop offset='100%25' stop-color='%23333' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M11 4.4A18 18 0 1 0 38 20' fill='none' stroke='url(%23a)' stroke-width='1.725'/%3E%3C/svg%3E\");-webkit-animation:amp-list-load-more-spinner 1000ms linear infinite;animation:amp-list-load-more-spinner 1000ms linear infinite}@-webkit-keyframes amp-list-load-more-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes amp-list-load-more-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.i-amphtml-list-load-more-button{border:none;display:inline-block;background-color:rgba(51,51,51,0.75);color:#fff;margin:4px 0px;padding:0px 32px;box-sizing:border-box;height:48px;border-radius:24px}.i-amphtml-list-load-more-button,.i-amphtml-list-load-more-button label,.i-amphtml-list-load-more-icon{cursor:pointer}.i-amphtml-list-load-more-button:hover{background-color:#333}.i-amphtml-list-load-more-button.i-amphtml-list-load-more-button-small{margin:0px;padding:4px 16px;height:32px}.i-amphtml-list-load-more-button label{display:inline-block;vertical-align:middle;line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-message{line-height:24px}amp-list[load-more] [load-more-failed].i-amphtml-default-ui .i-amphtml-list-load-more-icon{height:24px;width:24px;display:inline-block;vertical-align:middle;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23fff' d='M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3C/svg%3E\")}\n/*# sourceURL=/extensions/amp-list/0.1/amp-list.css*/")})(self.AMP);
})});
//# sourceMappingURL=amp-list-0.1.js.map

