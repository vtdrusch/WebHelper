/*
 * IMPORTANT: Your use of this software indicates your acceptance of the terms
 * found at http://www.adobe.com/products/eulas/tou_typekit NOTE THAT YOUR
 * RIGHTS TO THIS SOFTWARE ARE LIMITED. USE AT YOUR OWN RISK. For font license
 * information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"f":"//use.edgefonts.net/c/3235d4/1w;inika,1,WhJ:P:n4,WhH:P:n7/{format}{/extras*}","fn":["inika",["n4","n7"]],"p":"//p.typekit.net/p.gif?s=4&h={host}&f=16286.16287&app={app}&_={_}"};
/*{"k":"1.9.0","created":"2014-09-09 19:51:36 UTC"}*/
;(function(window,document,undefined){
var j=!0,k=null,l=!1;function m(a){return function(){return this[a]}}var aa=this;function ba(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&void 0!==b?d[e]=b:d=d[e]?d[e]:d[e]={}}function ca(a,b,c){return a.call.apply(a.bind,arguments)}
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function n(a,b,c){n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return n.apply(k,arguments)}var ea=Date.now||function(){return+new Date};
function fa(a,b){this.ca=a;this.V=b||a;this.J=this.V.document}fa.prototype.createElement=function(a,b,c){a=this.J.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.J.createTextNode(c));return a};function ga(a,b,c){a=a.J.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ha(a,b){function c(){a.J.body?b():setTimeout(c,0)}c()}
function q(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=l,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=j;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=l;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=j;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ia(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return j;return l}
function ja(a){var b=a.V.location.protocol;"about:"==b&&(b=a.ca.location.protocol);return"https:"==b?"https:":"http:"}
function ka(a,b,c){var d=a.J.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=l;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=j,c&&c(k),e.onload=e.onreadystatechange=k,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e);window.setTimeout(function(){f||(f=j,c&&c(Error("Script load timeout")))},5E3)}}function r(a,b,c){this.Ua=a;this.fa=b;this.Ta=c}
ba("internalWebfont.BrowserInfo",r);r.prototype.Ia=m("Ua");r.prototype.hasWebFontSupport=r.prototype.Ia;r.prototype.Ja=m("fa");r.prototype.hasWebKitFallbackBug=r.prototype.Ja;r.prototype.Ka=m("Ta");r.prototype.hasWebKitMetricsBug=r.prototype.Ka;function s(a,b,c,d){this.g=a!=k?a:k;this.o=b!=k?b:k;this.H=c!=k?c:k;this.m=d!=k?d:k}var la=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
function t(a,b){return a.g>b.g||a.g===b.g&&a.o>b.o||a.g===b.g&&a.o===b.o&&a.H>b.H?1:a.g<b.g||a.g===b.g&&a.o<b.o||a.g===b.g&&a.o===b.o&&a.H<b.H?-1:0}function u(a,b){return 0===t(a,b)||1===t(a,b)}s.prototype.toString=function(){return[this.g,this.o||"",this.H||"",this.m||""].join("")};
function v(a){a=la.exec(a);var b=k,c=k,d=k,e=k;a&&(a[1]!==k&&a[1]&&(b=parseInt(a[1],10)),a[2]!==k&&a[2]&&(c=parseInt(a[2],10)),a[3]!==k&&a[3]&&(d=parseInt(a[3],10)),a[4]!==k&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new s(b,c,d,e)}function w(a,b,c,d,e,f,g,h,p,K,C){this.W=a;this.z=b;this.Sa=c;this.D=d;this.S=e;this.ya=f;this.n=g;this.l=h;this.Oa=p;this.R=K;this.A=C}ba("internalWebfont.UserAgent",w);w.prototype.getName=m("W");w.prototype.getName=w.prototype.getName;
w.prototype.Ha=m("Sa");w.prototype.getVersion=w.prototype.Ha;w.prototype.Da=m("D");w.prototype.getEngine=w.prototype.Da;w.prototype.Ea=m("ya");w.prototype.getEngineVersion=w.prototype.Ea;w.prototype.Fa=m("n");w.prototype.getPlatform=w.prototype.Fa;w.prototype.Ga=m("Oa");w.prototype.getPlatformVersion=w.prototype.Ga;w.prototype.Ca=m("R");w.prototype.getDocumentMode=w.prototype.Ca;w.prototype.Ba=m("A");w.prototype.getBrowserInfo=w.prototype.Ba;function ma(a,b){this.e=a;this.Q=b}
var pa=new w("Unknown",new s,"Unknown","Unknown",new s,"Unknown","Unknown",new s,"Unknown",void 0,new r(l,l,l));
ma.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")||-1!=this.e.indexOf("Trident/")){a=x(this);var b=y(this),c=v(b),d=k,e=k,f=k,g=k,h=z(this.e,/Trident\/([\d\w\.]+)/,1),p=A(this.Q),d=-1!=this.e.indexOf("MSIE")?z(this.e,/MSIE ([\d\w\.]+)/,1):z(this.e,/rv:([\d\w\.]+)/,1),e=v(d);""!=h?(f="Trident",g=v(h)):(f="Unknown",g=new s,h="Unknown");a=new w("MSIE",e,d,f,g,h,a,c,b,p,new r("Windows"==a&&6<=e.g||"Windows Phone"==a&&8<=c.g,l,l))}else if(-1!=this.e.indexOf("Opera"))a:if(a="Unknown",b=
z(this.e,/Presto\/([\d\w\.]+)/,1),c=v(b),d=y(this),e=v(d),f=A(this.Q),c.g!==k?a="Presto":(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=z(this.e,/rv:([^\)]+)/,1),c=v(b)),-1!=this.e.indexOf("Opera Mini/"))g=z(this.e,/Opera Mini\/([\d\.]+)/,1),h=v(g),a=new w("OperaMini",h,g,a,c,b,x(this),e,d,f,new r(l,l,l));else{if(-1!=this.e.indexOf("Version/")&&(g=z(this.e,/Version\/([\d\.]+)/,1),h=v(g),h.g!==k)){a=new w("Opera",h,g,a,c,b,x(this),e,d,f,new r(10<=h.g,l,l));break a}g=z(this.e,/Opera[\/ ]([\d\.]+)/,1);
h=v(g);a=h.g!==k?new w("Opera",h,g,a,c,b,x(this),e,d,f,new r(10<=h.g,l,l)):new w("Opera",new s,"Unknown",a,c,b,x(this),e,d,f,new r(l,l,l))}else/OPR\/[\d.]+/.test(this.e)?a=qa(this):/AppleWeb(K|k)it/.test(this.e)?a=qa(this):-1!=this.e.indexOf("Gecko")?(a="Unknown",b=new s,c="Unknown",d=y(this),e=v(d),f=l,-1!=this.e.indexOf("Firefox")?(a="Firefox",c=z(this.e,/Firefox\/([\d\w\.]+)/,1),b=v(c),f=3<=b.g&&5<=b.o):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),g=z(this.e,/rv:([^\)]+)/,1),h=v(g),f||(f=1<h.g||
1==h.g&&9<h.o||1==h.g&&9==h.o&&2<=h.H||g.match(/1\.9\.1b[123]/)!=k||g.match(/1\.9\.1\.[\d\.]+/)!=k),a=new w(a,b,c,"Gecko",h,g,x(this),e,d,A(this.Q),new r(f,l,l))):a=pa;return a};function x(a){var b=z(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=z(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function y(a){var b=z(a.e,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=z(a.e,/Windows Phone( OS)? ([^;)]+)/,2))||(b=z(a.e,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=z(a.e,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=z(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function qa(a){var b=x(a),c=y(a),d=v(c),e=z(a.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),f=v(e),g="Unknown",h=new s,p="Unknown",K=l;/OPR\/[\d.]+/.test(a.e)?g="Opera":-1!=a.e.indexOf("Chrome")||-1!=a.e.indexOf("CrMo")||-1!=a.e.indexOf("CriOS")?g="Chrome":/Silk\/\d/.test(a.e)?g="Silk":"BlackBerry"==b||"Android"==b?g="BuiltinBrowser":-1!=a.e.indexOf("PhantomJS")?g="PhantomJS":-1!=a.e.indexOf("Safari")?g="Safari":-1!=a.e.indexOf("AdobeAIR")?g="AdobeAIR":-1!=a.e.indexOf("PlayStation")&&(g="BuiltinBrowser");
"BuiltinBrowser"==g?p="Unknown":"Silk"==g?p=z(a.e,/Silk\/([\d\._]+)/,1):"Chrome"==g?p=z(a.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.e.indexOf("Version/")?p=z(a.e,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==g?p=z(a.e,/AdobeAIR\/([\d\.]+)/,1):"Opera"==g?p=z(a.e,/OPR\/([\d.]+)/,1):"PhantomJS"==g&&(p=z(a.e,/PhantomJS\/([\d.]+)/,1));h=v(p);K="AdobeAIR"==g?2<h.g||2==h.g&&5<=h.o:"BlackBerry"==b?10<=d.g:"Android"==b?2<d.g||2==d.g&&1<d.o:526<=f.g||525<=f.g&&13<=f.o;return new w(g,h,p,"AppleWebKit",f,e,b,d,c,A(a.Q),
new r(K,536>f.g||536==f.g&&11>f.o,"iPhone"==b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function z(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function A(a){if(a.documentMode)return a.documentMode}function ra(a){this.Ma=a||"-"}ra.prototype.m=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Ma)};function sa(a,b,c){this.h=a;this.v=b;this.$=c;this.r="wf";this.q=new ra("-")}
function ta(a){var b=ia(a.v,a.q.m(a.r,"active")),c=[],d=[a.q.m(a.r,"loading")];b||c.push(a.q.m(a.r,"inactive"));q(a.v,c,d);D(a,"inactive")}function D(a,b,c){if(a.$[b])if(c)a.$[b](c.getName(),E(c));else a.$[b]()}function F(a,b){this.W=a;this.ga=4;this.X="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.X=c[1],this.ga=parseInt(c[2],10))}F.prototype.getName=m("W");function E(a){return a.X+a.ga}function G(a,b){this.h=a;this.N=b;this.C=this.h.createElement("span",{"aria-hidden":"true"},this.N)}
function ua(a,b){var c;c=[];for(var d=b.W.split(/,\s*/),e=0;e<d.length;e++){var f=d[e].replace(/['"]/g,"");-1==f.indexOf(" ")?c.push(f):c.push("'"+f+"'")}c=c.join(",");d="normal";e=b.ga+"00";"o"===b.X?d="oblique":"i"===b.X&&(d="italic");a.C.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+c+";"+("font-style:"+d+";font-weight:"+e+";")}
function va(a){ga(a.h,"body",a.C)}G.prototype.remove=function(){var a=this.C;a.parentNode&&a.parentNode.removeChild(a)};function wa(a,b,c,d,e,f,g,h){this.ha=a;this.La=b;this.h=c;this.B=d;this.N=h||"BESbswy";this.A=e;this.O={};this.da=f||5E3;this.ra=g||k;this.M=this.L=k;a=new G(this.h,this.N);va(a);for(var p in I)I.hasOwnProperty(p)&&(ua(a,new F(I[p],E(this.B))),this.O[I[p]]=a.C.offsetWidth);a.remove()}var I={bb:"serif",ab:"sans-serif",Xa:"monospace"};
wa.prototype.start=function(){this.L=new G(this.h,this.N);va(this.L);this.M=new G(this.h,this.N);va(this.M);this.Qa=ea();ua(this.L,new F(this.B.getName()+",serif",E(this.B)));ua(this.M,new F(this.B.getName()+",sans-serif",E(this.B)));xa(this)};function ya(a,b,c){for(var d in I)if(I.hasOwnProperty(d)&&b===a.O[I[d]]&&c===a.O[I[d]])return j;return l}
function xa(a){var b=a.L.C.offsetWidth,c=a.M.C.offsetWidth;b===a.O.serif&&c===a.O["sans-serif"]||a.A.fa&&ya(a,b,c)?ea()-a.Qa>=a.da?a.A.fa&&ya(a,b,c)&&(a.ra===k||a.ra.hasOwnProperty(a.B.getName()))?za(a,a.ha):za(a,a.La):setTimeout(n(function(){xa(this)},a),25):za(a,a.ha)}function za(a,b){a.L.remove();a.M.remove();b(a.B)}function J(a,b,c,d){this.h=b;this.F=c;this.ba=0;this.va=this.qa=l;this.da=d;this.A=a.A}
J.prototype.ea=function(a,b,c,d){if(0===a.length&&d)ta(this.F);else{this.ba+=a.length;d&&(this.qa=d);for(d=0;d<a.length;d++){var e=a[d],f=b[e.getName()],g=this.F,h=e;q(g.v,[g.q.m(g.r,h.getName(),E(h).toString(),"loading")]);D(g,"fontloading",h);(new wa(n(this.za,this),n(this.Aa,this),this.h,e,this.A,this.da,c,f)).start()}}};
J.prototype.za=function(a){var b=this.F;q(b.v,[b.q.m(b.r,a.getName(),E(a).toString(),"active")],[b.q.m(b.r,a.getName(),E(a).toString(),"loading"),b.q.m(b.r,a.getName(),E(a).toString(),"inactive")]);D(b,"fontactive",a);this.va=j;Aa(this)};J.prototype.Aa=function(a){var b=this.F,c=ia(b.v,b.q.m(b.r,a.getName(),E(a).toString(),"active")),d=[],e=[b.q.m(b.r,a.getName(),E(a).toString(),"loading")];c||d.push(b.q.m(b.r,a.getName(),E(a).toString(),"inactive"));q(b.v,d,e);D(b,"fontinactive",a);Aa(this)};
function Aa(a){0==--a.ba&&a.qa&&(a.va?(a=a.F,q(a.v,[a.q.m(a.r,"active")],[a.q.m(a.r,"loading"),a.q.m(a.r,"inactive")]),D(a,"active")):ta(a.F))}function Ba(){var a=[{name:"font-family",value:L.c[i+1]}];this.Pa=[L.c[i]];this.ka=a}function Ca(a){for(var b=a.Pa.join(","),c=[],d=0;d<a.ka.length;d++){var e=a.ka[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function Da(a){this.h=a}Da.prototype.toString=function(){return encodeURIComponent(this.h.V.location.hostname||this.h.ca.location.hostname)};
function Ea(a,b){this.s=a;this.u=b}Ea.prototype.toString=function(){for(var a=[],b=0;b<this.u.length;b++)for(var c=this.u[b],d=c.G(),c=c.G(this.s),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=j;break a}f=l}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)c=a.slice(0>d-4?0:d-4,d),b.unshift(parseInt(c,2).toString(16));return b.join("")};function M(a){this.Ra=a}
M.prototype.m=function(a,b){var c=b||{},d=this.Ra.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Fa(a,b,c,d){this.K=a;this.T=b;this.eb=c;this.fb=d;this.ma={};this.la={}}Fa.prototype.G=function(a){return a?(this.ma[a]||this.T).slice(0):this.T.slice(0)};Fa.prototype.ea=function(a,b,c){var d=[],e={};Ga(this,b,d,e);a(d,e,c)};
function Ga(a,b,c,d){c.push(a.K);d[a.K]=a.G(b);a=a.la[b]||[];for(b=0;b<a.length;b++){for(var e=a[b],f=e.K,g=l,h=0;h<c.length;h++)c[h]==f&&(g=j);g||(c.push(f),d[f]=e.G())}}function Ha(a,b){this.K=a;this.T=b}Ha.prototype.G=m("T");function Ia(){this.ia=this.xa=this.I=this.U=this.oa=j}function N(a){return"Windows"===a.n}function O(a){return N(a)&&0===t(a.l,new s(5,1))||N(a)&&0===t(a.l,new s(5,2))||N(a)&&0===t(a.l,new s(6,0))||N(a)&&u(a.l,new s(6,1))}
function P(a){return"Macintosh"===a.n&&(u(a.l,new s(10,4))||a.l.g===k)}function Ja(a,b){return b.oa&&("iPhone"===a.n||"iPod"===a.n)}function Ka(a,b){return Ja(a,b)&&u(a.l,new s(4,2))&&-1===t(a.l,new s(5))}function La(a,b){return b.U&&"iPad"===a.n&&u(a.l,new s(4,2))&&-1===t(a.l,new s(5))}function R(a,b){return b.I&&"Android"===a.n}function Ma(a,b){return R(a,b)&&u(a.l,new s(2,2))&&-1===t(a.l,new s(3,1))}function Na(a,b){return R(a,b)&&u(a.l,new s(3,1))&&-1===t(a.l,new s(4,1))}
function S(a){return"Linux"===a.n||"Ubuntu"===a.n}function Oa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.D||"Unknown"===a.getName()&&"AppleWebKit"===a.D&&("iPhone"===a.n||"iPad"===a.n||"iPod"===a.n)}function Qa(a){return"Safari"===a.getName()&&"AppleWebKit"===a.D&&u(a.S,new s(525,13))&&-1===t(a.S,new s(534,50))}function Ra(a){return"BuiltinBrowser"===a.getName()}function Sa(a){this.ua=a}function Ta(a,b){return b}
var T={Ya:"a",$a:"b",cb:"d",Wa:"i",Za:"j",Va:"k",NONE:"x"},U={a:function(a,b){return Qa(a)&&O(a)||Ra(a)&&(Ma(a,b)||R(a,b)&&u(a.l,new s(4,1)))||b.I&&"Silk"===a.getName()&&-1===t(a.z,new s(2))&&(Ma(a,b)||P)||b.I&&"Silk"===a.getName()&&u(a.z,new s(2))&&R(a,b)&&u(a.l,new s(4,1))||Oa(a)&&(La(a,b)||Ka(a,b))||"Chrome"===a.getName()&&u(a.z,new s(6))&&(La(a,b)||Ka(a,b))||"AdobeAIR"===a.getName()&&u(a.z,new s(2,5))&&(N(a)&&a.l.g===k||S(a))},b:function(a){return Qa(a)&&P(a)||"AdobeAIR"===a.getName()&&u(a.z,
new s(2,5))&&P(a)},d:function(a,b){return"Chrome"===a.getName()&&u(a.z,new s(6))&&(O(a)||S(a)||P(a)||R(a,b)||"CrOS"===a.n||"CrKey"===a.n||b.U&&"iPad"===a.n&&u(a.l,new s(5))||Ja(a,b)&&u(a.l,new s(5)))||"Gecko"===a.D&&1===t(a.S,new s(1,9,1))&&(O(a)||S(a)||P(a)||R(a,b))||"Safari"===a.getName()&&("AppleWebKit"===a.D&&u(a.S,new s(534,50)))&&(O(a)||P(a))||Oa(a)&&(b.U&&"iPad"===a.n&&u(a.l,new s(5))||Ja(a,b)&&u(a.l,new s(5)))||"Opera"===a.getName()&&u(a.z,new s(11,10))&&(O(a)||S(a)||P(a)||R(a,b))||"MSIE"===
a.getName()&&9<=a.R&&(N(a)&&u(a.l,new s(6,1))||N(a)&&0===t(a.l,new s(6,0)))||"MSIE"===a.getName()&&b.xa&&"Windows Phone"===a.n&&u(a.l,new s(8))||Ra(a)&&(b.ia&&"BlackBerry"===a.n&&u(a.l,new s(10))||S(a))},j:function(a,b){return Ra(a)&&Na(a,b)||b.I&&"Silk"===a.getName()&&u(a.z,new s(2))&&(Na(a,b)||S(a))},i:function(a){return"MSIE"===a.getName()&&(u(a.z,new s(6,0))&&(void 0===a.R||9>a.R))&&O(a)},x:function(){return l}};
function Ua(a,b){var c=new Ia,d=b||c,e;for(e in T){var f=T[e];if(U[f]&&U[f](a,d))return f}for(e in T)if(f=T[e],U[f]&&U[f](a,c))return"x";return"k"}var Va={};
Va.i=new Sa(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;c.push(new Ha(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++)for(var f=c[e],g=0;g<f.length;g++){var h=f[g];if(a[h]){d=d.concat(a[h]);break}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=j,a.push(f));c=[];for(d=0;d<b.length;d++){e=b[d];for(f=0;f<a.length;f++)g=a[f],g==e&&
c.push(g)}return c});var V={};V.a=V.j=V.b=V.d=V.j=function(){return[]};V.i=function(a,b,c){return[new Da(a),new Ea(b,c)]};V.k=function(a){return[new Da(a)]};function W(a){this.h=a;this.s="x";this.Z=this.e=k;this.u=[];this.P=[];this.wa=this.aa=k}W.prototype.supportsConfiguredBrowser=function(){return"x"!==this.s};
W.prototype.init=function(){if(0<this.P.length){for(var a=[],b=0;b<this.P.length;b++)a.push(Ca(this.P[b]));var b=this.h,a=a.join(""),c=this.h.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ga(b,"head",c)}};
W.prototype.load=function(a,b,c){if(this.s){for(var d=Va[this.s]||new Sa(Ta),e=0;e<this.u.length;e++){for(var f=this.u[e],g=this.s,h=d,p=[],K=f.K.split(",")[0].replace(/"|'/g,""),C=f.G(),Q=p,B=void 0,H=[],Pa={},na=0;na<C.length;na++)B=C[na],0<B.length&&!Pa[B]&&(Pa[B]=j,H.push(B));C=H;h=h.ua?h.ua(K,C,Q):C;f.ma[g]=h;f.la[g]=p}if(this.aa){d=V[this.s](this.h,this.s,this.u);e=this.s;f=[];for(g=0;g<d.length;g++)f.push(d[g].toString());d={format:e,extras:f};c&&(d.contextPath=c);d=this.aa.m("https:"===ja(this.h),
d);c=this.h;var d=c.createElement("link",{rel:"stylesheet",href:d}),Z=l;d.onload=function(){Z||(Z=j)};d.onerror=function(){Z||(Z=j)};ga(c,"head",d)}if(a){var oa=this,fb=this.s;ha(this.h,function(){for(var c=0;c<oa.u.length;c++)oa.u[c].ea(a,fb,b&&c==oa.u.length-1)})}}};W.prototype.collectFontFamilies=function(a,b){if(this.s)for(var c=0;c<this.u.length;c++)Ga(this.u[c],this.s,a,b)};
W.prototype.performOptionalActions=function(){if(this.pa){var a=this,b=this.h;ha(this.h,function(){var c=a.pa;if(c.ta){var d=window.__adobewebfontsappname__,d=d?d.toString().substr(0,20):"",c=c.ta.m("https:"===ja(b),{host:encodeURIComponent(b.V.location.hostname||b.ca.location.hostname),app:encodeURIComponent(d),_:(+new Date).toString()}),e=new Image(1,1);e.src=c;e.onload=function(){e.onload=k}}})}};function Wa(a,b,c,d){this.Na=a;this.ja=k;this.h=b;this.e=c;this.v=d;this.t=[]}Wa.prototype.Y=function(a){this.t.push(a)};
Wa.prototype.load=function(a,b){var c=a,d=b||{};if("string"==typeof c)c=[c];else if(!c||!c.length)d=c||{},c=[];if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++){var h=this.Na.m("https:"===ja(this.h),{id:encodeURIComponent(c[g])});ka(this.h,h,function(){0==--f&&Xa(e,d)})}else Xa(this,d)};
function Xa(a,b){if(0!=a.t.length){a.ja=b.contextPath||".";for(var c=new sa(a.h,a.v,b),d=l,e=0;e<a.t.length;e++)a.t[e].init(),d=d||a.t[e].supportsConfiguredBrowser();if(d){q(c.v,[c.q.m(c.r,"loading")]);D(c,"loading");for(var f=new J(a.e,a.h,c,b.timeout),c=function(a,b,c){for(var d=[],e=0;e<a.length;e+=1){var Q=a[e];if(b[Q])for(var B=b[Q],H=0;H<B.length;H+=1)d.push(new F(Q,B[H]));else d.push(new F(Q))}f.ea(d,{},k,c)},d=0;d<a.t.length;d++)e=a.t[d],e.supportsConfiguredBrowser()&&(e.load(c,d==a.t.length-
1,a.ja),e.performOptionalActions(window))}else ta(c);a.t=[]}}function Ya(a){this.na=a;this.t=[]}Ya.prototype.Y=function(a){this.t.push(a)};
Ya.prototype.load=function(){var a=this.na.__webfonttypekitmodule__;if(a)for(var b=0;b<this.t.length;b++){var c=this.t[b],d=a[c.wa];d&&d(function(a,b,d){a=[];b={};var h=(new ma(navigator.userAgent,document)).parse(),p=c;p.e=h;p.s=Ua(p.e,p.Z);c.supportsConfiguredBrowser()&&(c.init(),c.load(k),c.collectFontFamilies(a,b),c.performOptionalActions(window));d(c.supportsConfiguredBrowser(),a,b)})}};var Za=(new ma(navigator.userAgent,document)).parse();window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var $a=window.Typekit.config||{},ab=k;$a.k&&(ab=new M($a.k));var X=new Wa(ab,new fa(window),Za,document.documentElement),bb=new Ya(window);window.Typekit.load=function(){X.load.apply(X,arguments)};window.Typekit.addKit=function(){X.Y.apply(X,arguments)}}var cb,db=k,Y,$,L=window.Typekit.config||{};L.p&&(db=new M(L.p));$=new W(new fa(window));$.pa=new function(){this.ta=db};Y=new Ia;Y.oa=!L.si;Y.U=!L.st;Y.I=!L.sa;Y.xa=!L.sw;Y.ia=!L.sb;$.Z=Y;L.w&&($.wa=L.w);
L.f&&(cb=new M(L.f),$.aa=cb);var i;if(L.fn)for(i=0;i<L.fn.length;i+=2)$.u.push(new Fa(L.fn[i],L.fn[i+1]));if(L.c)for(i=0;i<L.c.length;i+=2)$.P.push(new Ba);var eb;if(eb=bb)eb=!!bb.na.__webfonttypekitmodule__;eb?(bb.Y($),bb.load()):($.e=Za,$.s=Ua($.e,$.Z),window.Typekit.addKit($));
})(this,document);
try{Typekit.load();}catch(e){};
