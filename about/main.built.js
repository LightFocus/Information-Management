(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}var b=new Error("Cannot find module '"+a+"'");
throw b.code="MODULE_NOT_FOUND",b}var f=j[a]={exports:{}};h[a][0].call(f.exports,function(g){var n=h[a][1][g];
return m(n?n:g)},f,f.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(i,h,g){var f=(function(){var s=["","-webkit-","-moz-","-o-","-ms-"];
var u={"animation-delay":"transitionend","-o-animation-delay":"oTransitionEnd","-moz-animation-delay":"transitionend","-webkit-animation-delay":"webkitTransitionEnd","-ms-animation-delay":"transitionend"};
var d={"animation-delay":"animationstart","-o-animation-delay":"oanimationstart","-moz-animation-delay":"animationstart","-webkit-animation-delay":"webkitAnimationStart","-ms-animation-delay":"MSAnimationStart"};
var r={"animation-delay":"animationiteration","-o-animation-delay":"oanimationiteration","-moz-animation-delay":"animationiteration","-webkit-animation-delay":"webkitAnimationIteration","-ms-animation-delay":"MSAnimationIteration"};
var a={"animation-delay":"animationend","-o-animation-delay":"oanimationend","-moz-animation-delay":"animationend","-webkit-animation-delay":"webkitAnimationEnd","-ms-animation-delay":"MSAnimationEnd"};
var t=document.createElement("_");var q=["","-webkit-","-moz-","-o-","-ms-"];function b(j){for(var l=0;
l<q.length;l++){var k=s[l]+j;if(t.style[k]!==undefined){return k}}return undefined
}var c=["-webkit-","","-moz-","-o-","-ms-"];function p(j){for(var l=0;l<c.length;
l++){var k=c[l]+j;if(t.style[k]!==undefined){return k}}return undefined}return{filter:p("filter"),transform:b("transform"),transformOrigin:b("transform-origin"),transition:b("transition"),transitionDelay:b("transition-delay"),transitionDuration:b("transition-duration"),transitionProperty:b("transition-property"),transitionTimingFunction:b("transition-timing-function"),transitionEnd:u[b("animation-delay")],animation:b("animation"),animationDelay:b("animation-delay"),animationDirection:b("animation-direction"),animationDuration:b("animation-duration"),animationFillMode:b("animation-fill-mode"),animationIterationCount:b("animation-iteration-count"),animationName:b("animation-name"),animationTimingFunction:b("animation-timing-function"),animationPlayState:b("animation-play-state"),animationStart:d[b("animation-delay")],animationIteration:r[b("animation-delay")],animationEnd:a[b("animation-delay")]}
}());h.exports=f},{}],2:[function(d,g,f){g.exports={path:d("./ac-path/path")}},{"./ac-path/path":3}],3:[function(f,i,g){function h(a){return h.parse(a)
}h.basename=function(c,d){h._assertStr(c);var a;var b=c.match(/[^/]*$/)[0];if(d){a=b.match(new RegExp("(.*)"+d+"$"));
if(a){b=a[1]}}return b};h.dirname=function(a){h._assertStr(a);var b=a.match(/^(.*)\b\/|.*/);
return b[1]||a};h.extname=function(b){h._assertStr(b);var a=b.match(/\.[^.]*$/);
return a?a[0]:""};h.filename=function(a){h._assertStr(a);return h.basename(a,h.extname(a))
};h.format=function(b,a){h._assertObj(b);var c=(b.dirname)?b.dirname+"/":"";if(b.basename){c+=b.basename
}else{if(b.filename){c+=b.filename;if(b.extname){c+=b.extname}}}if(a){if(typeof a==="string"){c+="?"+a
}else{if(Object.prototype.toString.call(a)===Object.prototype.toString.call([])){c+="?"+a.join("&")
}}}return c};h.isAbsolute=function(a){h._assertStr(a);return(!!a.match(/(^http(s?))/))
};h.isRootRelative=function(a){h._assertStr(a);return !!a.match(/^\/(?!\/)/)};h.parse=function(a){h._assertStr(a);
return{dirname:h.dirname(a),basename:h.basename(a),filename:h.filename(a),extname:h.extname(a)}
};h._assertStr=function(a){h._assertType(a,"string")};h._assertObj=function(a){h._assertType(a,"object")
};h._assertType=function(a,c){var b=typeof a;if(b==="undefined"||b!==c){throw new TypeError("path param must be of type "+c)
}};i.exports=h},{}],4:[function(d,g,f){g.exports={cname:d("./ac-cname/cname")}},{"./ac-cname/cname":5}],5:[function(k,j,h){var i=k("ac-path").path;
function g(a){return g.addPrefix(a)}g._prefix=(function(){var a="https://images.apple.com/global/elements/blank.gif";
return a.replace(/global\/.*/,"")}());g.addPrefix=function(a){if(i.isAbsolute(a)){return a
}g._assertRootRelative(a);a=g._prefix+a.replace(/^\//,"");a=a.replace(/(^.+)(\/105\/)/,"$1/");
return a};g.formatUrl=function(c,m,a,b){var d=i.format({dirname:c,filename:m,extname:a},b);
if(i.isAbsolute(d)){return d}g._assertRootRelative(c);var f=g.addPrefix(d);return f
};g._assertRootRelative=function(a){if(!i.isRootRelative(a)){throw new URIError("Only root-relative paths are currently supported")
}};j.exports=g},{"ac-path":2}],6:[function(p,r,o){var n=p("./utils/eventTypeAvailable");
var k=p("./shared/camelCasedEventTypes");var q=p("./shared/windowFallbackEventTypes");
var m=p("./shared/prefixHelper");var s={};r.exports=function l(a,b){var f;var d;
var c;b=b||"div";a=a.toLowerCase();if(!(b in s)){s[b]={}}d=s[b];if(a in d){return d[a]
}if(n(a,b)){return d[a]=a}if(a in k){for(c=0;c<k[a].length;c++){f=k[a][c];if(n(f.toLowerCase(),b)){return d[a]=f
}}}for(c=0;c<m.evt.length;c++){f=m.evt[c]+a;if(n(f,b)){m.reduce(c);return d[a]=f
}}if(b!=="window"&&q.indexOf(a)){return d[a]=l(a,"window")}return d[a]=false}},{"./shared/camelCasedEventTypes":7,"./shared/prefixHelper":8,"./shared/windowFallbackEventTypes":9,"./utils/eventTypeAvailable":10}],7:[function(d,g,f){g.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],8:[function(j,p,k){var l=["-webkit-","-moz-","-ms-"];var o=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];var q=function(){this.initialize()};var n=q.prototype;
n.initialize=function(){this.reduced=false;this.css=l;this.dom=o;this.evt=m};n.reduce=function(a){if(!this.reduced){this.reduced=true;
this.css=[this.css[a]];this.dom=[this.dom[a]];this.evt=[this.evt[a]]}};p.exports=new q()
},{}],9:[function(d,g,f){g.exports=["transitionend","animationstart","animationend","animationiteration"]
},{}],10:[function(k,i,g){var h={window:window,document:document};i.exports=function j(a,c){var b;
a="on"+a;if(!(c in h)){h[c]=document.createElement(c)}b=h[c];if(a in b){return true
}if("setAttribute" in b){b.setAttribute(a,"return;");return(typeof b[a]==="function")
}return false}},{}],11:[function(k,j,g){var h=k("./shared/getEventType");j.exports=function i(a,c,b,d){c=h(a,c);
d=d||false;a.removeEventListener(c,b,d)}},{"./shared/getEventType":12}],12:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);return d||b}},{"@marcom/ac-prefixer/getEventType":6}],13:[function(i,h,f){h.exports=function g(c,a){var b;
if(a){b=c.getBoundingClientRect();return{width:b.width,height:b.height}}return{width:c.offsetWidth,height:c.offsetHeight}
}},{}],14:[function(m,l,n){var o=m("./getDimensions");var i=m("./getScrollX");var j=m("./getScrollY");
l.exports=function k(f,g){var c;var a;var b;var d;if(g){c=f.getBoundingClientRect();
a=i();b=j();return{top:c.top+b,right:c.right+a,bottom:c.bottom+b,left:c.left+a}
}d=o(f,g);c={top:f.offsetTop,left:f.offsetLeft,width:d.width,height:d.height};while((f=f.offsetParent)){c.top+=f.offsetTop;
c.left+=f.offsetLeft}return{top:c.top,right:c.left+c.width,bottom:c.top+c.height,left:c.left}
}},{"./getDimensions":13,"./getScrollX":17,"./getScrollY":18}],15:[function(m,k,h){var i=m("./getDimensions");
var j=m("./getPixelsInViewport");k.exports=function l(b,a){var c=j(b,a);var d=i(b,a).height;
return(c/d)}},{"./getDimensions":13,"./getPixelsInViewport":16}],16:[function(k,j,g){var h=k("./getViewportPosition");
j.exports=function i(d,a){var b=window.innerHeight;var f=h(d,a);var c;if(f.top>=b||f.bottom<=0){return 0
}c=(f.bottom-f.top);if(f.top<0){c+=f.top}if(f.bottom>b){c-=f.bottom-b}return c}
},{"./getViewportPosition":19}],17:[function(i,h,f){h.exports=function g(a){a=a||window;
if(a===window){return window.scrollX||window.pageXOffset}return a.scrollLeft}},{}],18:[function(i,h,f){h.exports=function g(a){a=a||window;
if(a===window){return window.scrollY||window.pageYOffset}return a.scrollTop}},{}],19:[function(m,l,n){var k=m("./getPagePosition");
var o=m("./getScrollX");var i=m("./getScrollY");l.exports=function j(d,a){var f;
var b;var c;if(a){f=d.getBoundingClientRect();return{top:f.top,right:f.right,bottom:f.bottom,left:f.left}
}f=k(d);b=o();c=i();return{top:f.top-c,right:f.right-b,bottom:f.bottom-c,left:f.left-b}
}},{"./getPagePosition":14,"./getScrollX":17,"./getScrollY":18}],20:[function(h,l,i){var j=h("./getPixelsInViewport");
var m=h("./getPercentInViewport");l.exports=function k(b,a,d){var c;d=d||0;if(typeof d==="string"&&d.slice(-2)==="px"){d=parseInt(d,10);
c=j(b,a)}else{c=m(b,a)}return(c>0&&c>=d)}},{"./getPercentInViewport":15,"./getPixelsInViewport":16}],21:[function(d,g,f){g.exports=8
},{}],22:[function(d,g,f){g.exports=11},{}],23:[function(d,g,f){g.exports=9},{}],24:[function(d,g,f){g.exports=1
},{}],25:[function(d,g,f){g.exports=3},{}],26:[function(l,k,m){l("@marcom/ac-polyfills/Array/prototype.slice");
l("@marcom/ac-polyfills/Array/prototype.filter");var j=l("./internal/isNodeType");
var i=l("./ELEMENT_NODE");k.exports=function h(a,b){b=b||i;a=Array.prototype.slice.call(a);
return a.filter(function(c){return j(c,b)})}},{"./ELEMENT_NODE":24,"./internal/isNodeType":27,"@marcom/ac-polyfills/Array/prototype.filter":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],27:[function(g,k,h){var j=g("../isNode");
k.exports=function i(a,b){if(!j(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)}},{"../isNode":31}],28:[function(z,B,w){var D=z("./isNodeType");
var C=z("../COMMENT_NODE");var v=z("../DOCUMENT_FRAGMENT_NODE");var x=z("../ELEMENT_NODE");
var y=z("../TEXT_NODE");var t=[x,y,C,v];var A=" must be an Element, TextNode, Comment, or Document Fragment";
var q=[x,y,C];var u=" must be an Element, TextNode, or Comment";var s=[x,v];var r=" must be an Element, or Document Fragment";
var E=" must have a parentNode";B.exports={parentNode:function(d,a,b,c){c=c||"target";
if((d||a)&&!D(d,s)){throw new TypeError(b+": "+c+r)}},childNode:function(d,a,b,c){c=c||"target";
if(!d&&!a){return}if(!D(d,q)){throw new TypeError(b+": "+c+u)}},insertNode:function(d,a,b,c){c=c||"node";
if(!d&&!a){return}if(!D(d,t)){throw new TypeError(b+": "+c+A)}},hasParentNode:function(c,a,b){b=b||"target";
if(!c.parentNode){throw new TypeError(a+": "+b+E)}}}},{"../COMMENT_NODE":21,"../DOCUMENT_FRAGMENT_NODE":22,"../ELEMENT_NODE":24,"../TEXT_NODE":25,"./isNodeType":27}],29:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_FRAGMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_FRAGMENT_NODE":22,"./internal/isNodeType":27}],30:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./ELEMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./ELEMENT_NODE":24,"./internal/isNodeType":27}],31:[function(f,i,g){i.exports=function h(a){return !!(a&&a.nodeType)
}},{}],32:[function(k,j,g){var i=k("./internal/validate");j.exports=function h(a){i.childNode(a,true,"remove");
if(!a.parentNode){return a}return a.parentNode.removeChild(a)}},{"./internal/validate":28}],33:[function(d,g,f){g.exports={ancestor:d("./ancestor"),ancestors:d("./ancestors"),children:d("./children"),filterBySelector:d("./filterBySelector"),firstChild:d("./firstChild"),isAncestorOf:d("./isAncestorOf"),isSiblingOf:d("./isSiblingOf"),lastChild:d("./lastChild"),matchesSelector:d("./matchesSelector"),nextSibling:d("./nextSibling"),nextSiblings:d("./nextSiblings"),previousSibling:d("./previousSibling"),previousSiblings:d("./previousSiblings"),querySelector:d("./querySelector"),querySelectorAll:d("./querySelectorAll"),siblings:d("./siblings")}
},{"./ancestor":34,"./ancestors":35,"./children":36,"./filterBySelector":37,"./firstChild":38,"./isAncestorOf":41,"./isSiblingOf":42,"./lastChild":43,"./matchesSelector":44,"./nextSibling":45,"./nextSiblings":46,"./previousSibling":47,"./previousSiblings":48,"./querySelector":49,"./querySelectorAll":50,"./siblings":54}],34:[function(o,m,i){var l=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");m.exports=function n(a,c,d,b){k.childNode(a,true,"ancestors");
k.selector(c,false,"ancestors");if(d&&l(a)&&(!c||j(a,c))){return a}b=b||document.body;
if(a!==b){while((a=a.parentNode)&&l(a)){if(!c||j(a,c)){return a}if(a===b){break
}}}return null}},{"./internal/validate":40,"./matchesSelector":44,"@marcom/ac-dom-nodes/isElement":30}],35:[function(o,n,i){var l=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function m(a,d,f,b){var c=[];
k.childNode(a,true,"ancestors");k.selector(d,false,"ancestors");if(f&&l(a)&&(!d||j(a,d))){c.push(a)
}b=b||document.body;if(a!==b){while((a=a.parentNode)&&l(a)){if(!d||j(a,d)){c.push(a)
}if(a===b){break}}}return c}},{"./internal/validate":40,"./matchesSelector":44,"@marcom/ac-dom-nodes/isElement":30}],36:[function(n,l,o){var i=n("@marcom/ac-dom-nodes/filterByNodeType");
var j=n("./filterBySelector");var k=n("./internal/validate");l.exports=function m(a,c){var b;
k.parentNode(a,true,"children");k.selector(c,false,"children");b=a.children||a.childNodes;
b=i(b);if(c){b=j(b,c)}return b}},{"./filterBySelector":37,"./internal/validate":40,"@marcom/ac-dom-nodes/filterByNodeType":26}],37:[function(l,k,m){l("@marcom/ac-polyfills/Array/prototype.slice");
l("@marcom/ac-polyfills/Array/prototype.filter");var h=l("./matchesSelector");var j=l("./internal/validate");
k.exports=function i(a,b){j.selector(b,true,"filterBySelector");a=Array.prototype.slice.call(a);
return a.filter(function(c){return h(c,b)})}},{"./internal/validate":40,"./matchesSelector":44,"@marcom/ac-polyfills/Array/prototype.filter":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],38:[function(h,l,i){var m=h("./children");
var j=h("./internal/validate");l.exports=function k(a,c){var b;j.parentNode(a,true,"firstChild");
j.selector(c,false,"firstChild");if(a.firstElementChild&&!c){return a.firstElementChild
}b=m(a,c);if(b.length){return b[0]}return null}},{"./children":36,"./internal/validate":40}],39:[function(d,g,f){g.exports=window.Element?(function(a){return a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector
}(Element.prototype)):null},{}],40:[function(z,C,x){z("@marcom/ac-polyfills/Array/prototype.indexOf");
var r=z("@marcom/ac-dom-nodes/isNode");var D=z("@marcom/ac-dom-nodes/COMMENT_NODE");
var v=z("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var w=z("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var y=z("@marcom/ac-dom-nodes/ELEMENT_NODE");var A=z("@marcom/ac-dom-nodes/TEXT_NODE");
var E=function(a,b){if(!r(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)};var t=[y,w,v];var s=" must be an Element, Document, or Document Fragment";
var q=[y,A,D];var u=" must be an Element, TextNode, or Comment";var B=" must be a string";
C.exports={parentNode:function(d,a,b,c){c=c||"node";if((d||a)&&!E(d,t)){throw new TypeError(b+": "+c+s)
}},childNode:function(d,a,b,c){c=c||"node";if(!d&&!a){return}if(!E(d,q)){throw new TypeError(b+": "+c+u)
}},selector:function(d,a,b,c){c=c||"selector";if((d||a)&&typeof d!=="string"){throw new TypeError(b+": "+c+B)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":21,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":22,"@marcom/ac-dom-nodes/DOCUMENT_NODE":23,"@marcom/ac-dom-nodes/ELEMENT_NODE":24,"@marcom/ac-dom-nodes/TEXT_NODE":25,"@marcom/ac-dom-nodes/isNode":31,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined}],41:[function(i,h,f){h.exports=function g(a,b){if(a===b){return false
}if("contains" in a){return a.contains(b)}else{return !!(a.compareDocumentPosition(b)&Node.DOCUMENT_POSITION_CONTAINED_BY)
}}},{}],42:[function(g,k,h){var j=g("@marcom/ac-dom-nodes/isElement");k.exports=function i(a,b){return(a===b)?false:(a.parentNode===b.parentNode)
}},{"@marcom/ac-dom-nodes/isElement":30}],43:[function(h,l,i){var m=h("./children");
var j=h("./internal/validate");l.exports=function k(a,c){var b;j.parentNode(a,true,"lastChild");
j.selector(c,false,"lastChild");if(a.lastElementChild&&!c){return a.lastElementChild
}b=m(a,c);if(b.length){return b[b.length-1]}return null}},{"./children":36,"./internal/validate":40}],44:[function(p,o,q){var n=p("@marcom/ac-dom-nodes/isElement");
var l=p("./internal/validate");var k=p("./internal/nativeMatches");var m=p("./shims/matchesSelector");
o.exports=function j(a,b){l.selector(b,true,"matchesSelector");if(!n(a)){return false
}if(!k){return m(a,b)}return k.call(a,b)}},{"./internal/nativeMatches":39,"./internal/validate":40,"./shims/matchesSelector":51,"@marcom/ac-dom-nodes/isElement":30}],45:[function(o,n,i){var m=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function l(a,b){k.childNode(a,true,"nextSibling");
k.selector(b,false,"nextSibling");if(a.nextElementSibling&&!b){return a.nextElementSibling
}while(a=a.nextSibling){if(m(a)){if(!b||j(a,b)){return a}}}return null}},{"./internal/validate":40,"./matchesSelector":44,"@marcom/ac-dom-nodes/isElement":30}],46:[function(n,m,i){var l=n("@marcom/ac-dom-nodes/isElement");
var j=n("./matchesSelector");var k=n("./internal/validate");m.exports=function o(a,c){var b=[];
k.childNode(a,true,"nextSiblings");k.selector(c,false,"nextSiblings");while(a=a.nextSibling){if(l(a)){if(!c||j(a,c)){b.push(a)
}}}return b}},{"./internal/validate":40,"./matchesSelector":44,"@marcom/ac-dom-nodes/isElement":30}],47:[function(o,n,i){var l=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function m(a,b){k.childNode(a,true,"previousSibling");
k.selector(b,false,"previousSibling");if(a.previousElementSibling&&!b){return a.previousElementSibling
}while(a=a.previousSibling){if(l(a)){if(!b||j(a,b)){return a}}}return null}},{"./internal/validate":40,"./matchesSelector":44,"@marcom/ac-dom-nodes/isElement":30}],48:[function(o,n,i){var m=o("@marcom/ac-dom-nodes/isElement");
var j=o("./matchesSelector");var k=o("./internal/validate");n.exports=function l(a,c){var b=[];
k.childNode(a,true,"previousSiblings");k.selector(c,false,"previousSiblings");while(a=a.previousSibling){if(m(a)){if(!c||j(a,c)){b.push(a)
}}}return b.reverse()}},{"./internal/validate":40,"./matchesSelector":44,"@marcom/ac-dom-nodes/isElement":30}],49:[function(o,n,j){var k=o("./internal/validate");
var i=o("./shims/querySelector");var l=("querySelector" in document);n.exports=function m(b,a){a=a||document;
k.parentNode(a,true,"querySelector","context");k.selector(b,true,"querySelector");
if(!l){return i(b,a)}return a.querySelector(b)}},{"./internal/validate":40,"./shims/querySelector":52}],50:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.slice");
var k=i("./internal/validate");var l=i("./shims/querySelectorAll");var m=("querySelectorAll" in document);
o.exports=function n(b,a){a=a||document;k.parentNode(a,true,"querySelectorAll","context");
k.selector(b,true,"querySelectorAll");if(!m){return l(b,a)}return Array.prototype.slice.call(a.querySelectorAll(b))
}},{"./internal/validate":40,"./shims/querySelectorAll":53,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],51:[function(k,j,g){var i=k("../querySelectorAll");
j.exports=function h(a,f){var b=a.parentNode||document;var d=i(f,b);var c;for(c=0;
c<d.length;c++){if(d[c]===a){return true}}return false}},{"../querySelectorAll":50}],52:[function(g,k,h){var j=g("./querySelectorAll");
k.exports=function i(b,a){var c=j(b,a);return c.length?c[0]:null}},{"./querySelectorAll":53}],53:[function(s,t,q){s("@marcom/ac-polyfills/Array/prototype.indexOf");
var m=s("@marcom/ac-dom-nodes/isElement");var o=s("@marcom/ac-dom-nodes/isDocumentFragment");
var l=s("@marcom/ac-dom-nodes/remove");var r="_ac_qsa_";var n=function(c,b){var a;
if(b===document){return true}a=c;while((a=a.parentNode)&&m(a)){if(a===b){return true
}}return false};var p=function(a){if("recalc" in a){a.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};t.exports=function u(b,g){var d=document.createElement("style");
var c=r+(Math.random()+"").slice(-6);var a=[];var f;g=g||document;document[c]=[];
if(o(g)){g.appendChild(d)}else{document.documentElement.firstChild.appendChild(d)
}d.styleSheet.cssText="*{display:recalc;}"+b+'{ac-qsa:expression(document["'+c+'"] && document["'+c+'"].push(this));}';
p(g);while(document[c].length){f=document[c].shift();f.style.removeAttribute("ac-qsa");
if(a.indexOf(f)===-1&&n(f,g)){a.push(f)}}document[c]=null;l(d);p(g);return a}},{"@marcom/ac-dom-nodes/isDocumentFragment":29,"@marcom/ac-dom-nodes/isElement":30,"@marcom/ac-dom-nodes/remove":32,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined}],54:[function(h,l,i){var m=h("./children");
var j=h("./internal/validate");l.exports=function k(a,c){var b=[];j.childNode(a,true,"siblings");
j.selector(c,false,"siblings");if(a.parentNode){b=m(a.parentNode,c);b=b.filter(function(d){return(d!==a)
})}return b}},{"./children":36,"./internal/validate":40}],55:[function(m,l,h){var j=m("./ac-clock/Clock"),k=m("./ac-clock/ThrottledClock"),i=m("./ac-clock/sharedClockInstance");
i.Clock=j;i.ThrottledClock=k;l.exports=i},{"./ac-clock/Clock":56,"./ac-clock/ThrottledClock":57,"./ac-clock/sharedClockInstance":58}],56:[function(o,n,i){o("@marcom/ac-polyfills/Function/prototype.bind");
o("@marcom/ac-polyfills/requestAnimationFrame");var l;var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=new Date().getTime();function k(){m.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}l=k.prototype=new m(null);
l.start=function(){if(this._active){return}this._tick()};l.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};l.destroy=function(){this.stop();
this.off();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};l.isRunning=function(){return this._active
};l._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};l._onAnimationFrame=function(b){if(this.lastFrameTime===null){this.lastFrameTime=b
}var a=b-this.lastFrameTime;var c=0;if(a>=1000){a=0}if(a!==0){c=1000/a}if(this._firstFrame===true){a=0;
this._firstFrame=false}if(c===0){this._firstFrame=true}else{var d={time:b,delta:a,fps:c,naturalFps:c,timeNow:this._getTime()};
this.trigger("update",d);this.trigger("draw",d)}this._animationFrame=null;this.lastFrameTime=b;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};n.exports=k
},{"@marcom/ac-event-emitter-micro":104,"@marcom/ac-polyfills/Function/prototype.bind":undefined,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],57:[function(o,n,i){o("@marcom/ac-polyfills/requestAnimationFrame");
var l;var j=o("./sharedClockInstance"),m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function k(a,b){if(a===null){return}m.call(this);b=b||{};this._fps=a||null;this._clock=b.clock||j;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}l=k.prototype=new m(null);l.setFps=function(a){this._fps=a;return this};l.getFps=function(){return this._fps
};l.start=function(){this._clock.start();return this};l.stop=function(){this._clock.stop();
return this};l.isRunning=function(){return this._clock.isRunning()};l.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};l._onClockUpdate=function(b){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var a=b.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(Math.ceil(1000/a)>=this._fps+2){return}this._clockEvent=b;this._clockEvent.delta=a;
this._clockEvent.fps=1000/a;this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};l._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};n.exports=k},{"./sharedClockInstance":58,"@marcom/ac-event-emitter-micro":104,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],58:[function(f,i,g){var h=f("./Clock");
i.exports=new h()},{"./Clock":56}],59:[function(d,g,f){g.exports={Clip:d("./ac-clip/Clip")}
},{"./ac-clip/Clip":60}],60:[function(u,v,t){u("@marcom/ac-polyfills/Array/isArray");
var r=u("@marcom/ac-object/create");var m=u("@marcom/ac-easing").createPredefined;
var w=u("@marcom/ac-clock");var o=u("@marcom/ac-easing").Ease;var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p="ease";function q(d,f,b,a){a=a||{};this._options=a;this._isYoyo=a.yoyo;this._direction=1;
this._timeScale=1;this._loop=a.loop||0;this._loopCount=0;this._target=d;this.duration(f);
this._delay=(a.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=a.clock||w;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=b||{};this._propsFrom=a.propsFrom||{};this._onStart=a.onStart||null;
this._onUpdate=a.onUpdate||null;this._onDraw=a.onDraw||null;this._onComplete=a.onComplete||null;
var c=a.ease||p;this._ease=(typeof c==="function")?new o(c):m(c);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
q._add(this);n.call(this)}var s=q.prototype=r(n.prototype);q.COMPLETE="complete";
q.PAUSE="pause";q.PLAY="play";s.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};s.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(q.PAUSE,this)}return this
};s.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;q._remove(this);n.prototype.destroy.call(this);
return this};s.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};s.playing=function(){return this._playing
};s.target=function(){return this._target};s.duration=function(a){if(a!==undefined){this._duration=a;
this._durationMs=(a*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};s.timeScale=function(a){if(a!==undefined){this._timeScale=a;
this.duration(this._duration)}return this._timeScale};s.currentTime=function(a){if(a!==undefined){return this.progress(a/this._duration)*this._duration
}return(this.progress()*this._duration)};s.progress=function(a){if(a!==undefined){this._progress=Math.min(1,Math.max(0,a));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&a===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};s._resetLoop=function(c,a){var b;
for(b in a){if(a.hasOwnProperty(b)){if(a[b]!==null){if(typeof a[b]==="object"){this._resetLoop(c[b],a[b])
}else{c[b]=a[b]}}}}};s._cloneObjects=function(){var b={};var c={};var a={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,b,c,a);
return{target:b,propsTo:c,propsFrom:a}};s._cloneObjectsLoop=function(g,b,c,d,i,a){var h;
var f;for(f in c){if(c.hasOwnProperty(f)&&b[f]===undefined&&g[f]!==undefined){d[f]=g[f];
i[f]=g[f];a[f]=c[f]}}for(f in b){if(g.hasOwnProperty(f)){h=typeof g[f];if(g[f]!==null&&h==="object"){if(Array.isArray(g[f])){d[f]=[];
i[f]=[];a[f]=[]}else{d[f]={};i[f]={};a[f]={}}this._cloneObjectsLoop(g[f],b[f]||{},c[f]||{},d[f],i[f],a[f])
}else{if(b[f]!==null&&h==="number"){d[f]=g[f];i[f]=b[f];if(c&&c[f]!==undefined){a[f]=c[f]
}}}}}};s._prepareProperties=function(){if(!this._isPrepared){var a=this._cloneObjects();
this._storeTarget=a.target;this._propsTo=a.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=a.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};s._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};s._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
s._setDiffLoop=function(b,c,f,g){var a;var d;for(d in b){if(b.hasOwnProperty(d)){a=typeof b[d];
if(b[d]!==null&&a==="object"){c[d]=c[d]||{};g[d]=g[d]||{};this._setDiffLoop(b[d],c[d],f[d],g[d])
}else{if(a==="number"&&f[d]!==undefined){if(c[d]!==undefined){f[d]=c[d]}else{c[d]=f[d]
}g[d]=b[d]-f[d]}else{b[d]=null;c[d]=null}}}}};s._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(q.PLAY,this)};s._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};s._updateProps=function(){var a;
if(this._direction===1){a=this._ease.getValue(this._progress)}else{a=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,a)
};s._updatePropsLoop=function(b,c,f,g,a){var d;for(d in b){if(b.hasOwnProperty(d)&&b[d]!==null){if(typeof b[d]!=="number"){this._updatePropsLoop(b[d],c[d],f[d],g[d],a)
}else{f[d]=c[d]+(g[d]*a)}}}};s._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};s._completePropsLoop=function(b,a){var c;for(c in b){if(b.hasOwnProperty(c)&&b[c]!==null){if(typeof b[c]!=="number"){this._completePropsLoop(b[c],a[c])
}else{a[c]=b[c]}}}};s._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(q.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};s._update=function(a){if(this._running){this._progress=(a.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
s._draw=function(a){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};q._instantiate=function(){this._clips=[];
return this};q._add=function(a){this._clips.push(a)};q._remove=function(b){var a=this._clips.indexOf(b);
if(a>-1){this._clips.splice(a,1)}};q.getAll=function(b){if(b!==undefined){var a=[];
var c=this._clips.length;while(c--){if(this._clips[c].target()===b){a.push(this._clips[c])
}}return a}return Array.prototype.slice.call(this._clips)};q.destroyAll=function(b){var a=this.getAll(b);
if(this._clips.length===a.length){this._clips=[]}var c=a.length;while(c--){a[c].destroy()
}return a};q.to=function(c,d,b,a){a=a||{};if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new q(c,d,b,a).play()};q.from=function(b,c,a,d){d=d||{};d.propsFrom=a;if(d.destroyOnComplete===undefined){d.destroyOnComplete=true
}return new q(b,c,d.propsTo,d).play()};v.exports=q._instantiate()},{"@marcom/ac-clock":55,"@marcom/ac-easing":96,"@marcom/ac-event-emitter-micro":104,"@marcom/ac-object/create":107,"@marcom/ac-polyfills/Array/isArray":undefined}],61:[function(f,i,g){var h=f("./ac-color/Color");
h.decimalToHex=f("./ac-color/static/decimalToHex");h.hexToDecimal=f("./ac-color/static/hexToDecimal");
h.hexToRgb=f("./ac-color/static/hexToRgb");h.isColor=f("./ac-color/static/isColor");
h.isHex=f("./ac-color/static/isHex");h.isRgb=f("./ac-color/static/isRgb");h.isRgba=f("./ac-color/static/isRgba");
h.mixColors=f("./ac-color/static/mixColors");h.rgbaToArray=f("./ac-color/static/rgbaToArray");
h.rgbToArray=f("./ac-color/static/rgbToArray");h.rgbToDecimal=f("./ac-color/static/rgbToDecimal");
h.rgbToHex=f("./ac-color/static/rgbToHex");h.rgbToHsl=f("./ac-color/static/rgbToHsl");
h.rgbToHsv=f("./ac-color/static/rgbToHsv");h.rgbaToObject=f("./ac-color/static/rgbaToObject");
h.rgbToObject=f("./ac-color/static/rgbToObject");h.shortToLongHex=f("./ac-color/static/shortToLongHex");
i.exports={Color:h}},{"./ac-color/Color":62,"./ac-color/static/decimalToHex":64,"./ac-color/static/hexToDecimal":65,"./ac-color/static/hexToRgb":66,"./ac-color/static/isColor":67,"./ac-color/static/isHex":68,"./ac-color/static/isRgb":69,"./ac-color/static/isRgba":70,"./ac-color/static/mixColors":71,"./ac-color/static/rgbToArray":72,"./ac-color/static/rgbToDecimal":73,"./ac-color/static/rgbToHex":74,"./ac-color/static/rgbToHsl":75,"./ac-color/static/rgbToHsv":76,"./ac-color/static/rgbToObject":77,"./ac-color/static/rgbaToArray":78,"./ac-color/static/rgbaToObject":79,"./ac-color/static/shortToLongHex":80}],62:[function(H,K,v){var E=H("./helpers/cssColorNames");
var z=H("./static/hexToRgb");var A=H("./static/isColor");var G=H("./static/isHex");
var J=H("./static/isRgba");var w=H("./static/mixColors");var B=H("./static/rgbaToArray");
var y=H("./static/rgbToArray");var t=H("./static/rgbToDecimal");var D=H("./static/rgbToHex");
var I=H("./static/rgbaToObject");var C=H("./static/rgbToObject");var x=H("./static/shortToLongHex");
function u(a){if(!A(a)&&!E.nameToRgbObject[a]){throw new Error(a+" is not a supported color.")
}this._setColor(a)}var F=u.prototype;F._setColor=function(c){this._color={};if(G(c)){this._color.hex=x(c);
this._color.rgb={color:z(c)}}else{if(J(c)){this._color.rgba={color:c};var a=this.rgbaObject();
this._color.rgb={color:"rgb("+a.r+", "+a.g+", "+a.b+")"}}else{if(E.nameToRgbObject[c]){var b=E.nameToRgbObject[c];
this._color.rgb={object:b,color:"rgb("+b.r+", "+b.g+", "+b.b+")"}}else{this._color.rgb={color:c}
}}}};F.rgb=function(){return this._color.rgb.color};F.rgba=function(){if(this._color.rgba===undefined){var a=this.rgbObject();
this._color.rgba={color:"rgba("+a.r+", "+a.g+", "+a.b+", 1)"}}return this._color.rgba.color
};F.hex=function(){if(this._color.hex===undefined){this._color.hex=D.apply(this,this.rgbArray())
}return this._color.hex};F.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=t(this.rgb())
}return this._color.decimal};F.cssName=function(){return E.rgbToName[this.rgb()]||null
};F.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=y(this.rgb())
}return this._color.rgb.array};F.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=B(this.rgba())}return this._color.rgba.array
};F.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=C(this.rgb())
}return this._color.rgb.object};F.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=I(this.rgba())
}return this._color.rgba.object};F.getRed=function(){return this.rgbObject().r};
F.getGreen=function(){return this.rgbObject().g};F.getBlue=function(){return this.rgbObject().b
};F.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};F.setRed=function(a){if(a!==this.getRed()){this._setColor("rgba("+a+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};F.setGreen=function(a){if(a!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+a+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};F.setBlue=function(a){if(a!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+a+", "+this.getAlpha()+")")
}return this.rgbObject().b};F.setAlpha=function(a){if(a!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+a+")")
}return this.rgbaObject().a};F.mix=function(c,b){var a=C(w(this.rgb(),c,b));this._setColor("rgba("+a.r+", "+a.g+", "+a.b+", "+this.getAlpha()+")");
return this.rgb()};F.clone=function(){return new u(this.rgb())};K.exports=u},{"./helpers/cssColorNames":63,"./static/hexToRgb":66,"./static/isColor":67,"./static/isHex":68,"./static/isRgba":70,"./static/mixColors":71,"./static/rgbToArray":72,"./static/rgbToDecimal":73,"./static/rgbToHex":74,"./static/rgbToObject":77,"./static/rgbaToArray":78,"./static/rgbaToObject":79,"./static/shortToLongHex":80}],63:[function(g,k,h){var j={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var i={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
k.exports={rgbToName:j,nameToRgbObject:i}},{}],64:[function(i,h,f){h.exports=function g(a){return"#"+(a).toString(16)
}},{}],65:[function(i,h,g){h.exports=function f(a){return parseInt(a.substr(1),16)
}},{}],66:[function(j,i,k){var h=j("./shortToLongHex");i.exports=function g(a){a=h(a);
var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?"rgb("+parseInt(b[1],16)+", "+parseInt(b[2],16)+", "+parseInt(b[3],16)+")":null
}},{"./shortToLongHex":80}],67:[function(o,m,i){var k=o("./isRgb");var l=o("./isRgba");
var j=o("./isHex");m.exports=function n(a){return j(a)||k(a)||l(a)}},{"./isHex":68,"./isRgb":69,"./isRgba":70}],68:[function(i,h,f){h.exports=function g(a){var b=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return b.test(a)}},{}],69:[function(f,i,g){i.exports=function h(a){var b=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return b.exec(a)!==null}},{}],70:[function(f,i,g){i.exports=function h(a){var b=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return b.exec(a)!==null}},{}],71:[function(n,m,o){var i=n("./isHex");var j=n("./hexToRgb");
var k=n("./rgbToObject");m.exports=function l(g,a,b){g=i(g)?j(g):g;a=i(a)?j(a):a;
g=k(g);a=k(a);var c=g.r+((a.r-g.r)*b);var d=g.g+((a.g-g.g)*b);var f=g.b+((a.b-g.b)*b);
return"rgb("+Math.round(c)+", "+Math.round(d)+", "+Math.round(f)+")"}},{"./hexToRgb":66,"./isHex":68,"./rgbToObject":77}],72:[function(g,k,h){var j=g("./rgbToObject");
k.exports=function i(b){var a=j(b);return[a.r,a.g,a.b]}},{"./rgbToObject":77}],73:[function(n,m,i){var o=n("./hexToDecimal");
var k=n("./rgbToArray");var l=n("./rgbToHex");m.exports=function j(b){var a=l.apply(this,k(b));
return o(a)}},{"./hexToDecimal":65,"./rgbToArray":72,"./rgbToHex":74}],74:[function(f,i,g){i.exports=function h(a,b,c){return"#"+((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)
}},{}],75:[function(i,h,f){h.exports=function g(v,l,c){if(arguments.length!==3){return false
}v/=255;l/=255;c/=255;var b=Math.max(v,l,c);var s=Math.min(v,l,c);var d=b+s;var a=b-s;
var r;var w;var u=(d/2);if(b===s){r=w=0}else{w=u>0.5?a/(2-b-s):a/d;switch(b){case v:r=(l-c)/a;
break;case l:r=2+((c-v)/a);break;case c:r=4+((v-l)/a);break}r*=60;if(r<0){r+=360
}}return([r,Math.round(100*w),Math.round(100*u)])}},{}],76:[function(i,h,g){h.exports=function f(y,r,d){if(arguments.length!==3){return false
}var x=y/255;var w=r/255;var b=d/255;var c=Math.max(x,w,b);var v=Math.min(x,w,b);
var s;var z;var A=c;var a=c-v;z=c===0?0:a/c;if(c===v){s=0}else{switch(c){case x:s=(w-b)/a+(w<b?6:0);
break;case w:s=(b-x)/a+2;break;case b:s=(x-w)/a+4;break}s/=6}return[Math.round(360*s),Math.round(100*z),Math.round(100*A)]
}},{}],77:[function(f,i,g){i.exports=function h(b){var a=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3])}}},{}],78:[function(g,k,h){var i=g("./rgbaToObject");
k.exports=function j(b){var a=i(b);return[a.r,a.g,a.b,a.a]}},{"./rgbaToObject":79}],79:[function(f,i,g){i.exports=function h(b){var a=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3]),a:Number(c[4])}
}},{}],80:[function(i,h,f){h.exports=function g(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
a=a.replace(b,function(l,c,d,m){return"#"+c+c+d+d+m+m});return a}},{}],81:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b;if(a){b=g(c);return{width:b.width,height:b.height}
}return{width:c.offsetWidth,height:c.offsetHeight}}},{"./utils/getBoundingClientRect":82}],82:[function(i,h,f){h.exports=function g(b){var a=b.getBoundingClientRect();
return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}
}},{}],83:[function(n,m,o){var i=n("./shared/stylePropertyCache");var k=n("./getStyleProperty");
var l=n("./getStyleValue");m.exports=function j(a,b){var c;a=k(a);if(!a){return false
}c=i[a].css;if(typeof b!=="undefined"){b=l(a,b);if(b===false){return false}c+=":"+b+";"
}return c}},{"./getStyleProperty":84,"./getStyleValue":85,"./shared/stylePropertyCache":88}],84:[function(q,r,o){var u=q("./shared/stylePropertyCache");
var n=q("./shared/getStyleTestElement");var t=q("./utils/toCSS");var l=q("./utils/toDOM");
var m=q("./shared/prefixHelper");var s=function(c,b){var a=t(c);var d=(b===false)?false:t(b);
u[c]=u[b]=u[a]=u[d]={dom:b,css:d};return b};r.exports=function p(c){var f;var b;
var d;var a;c+="";if(c in u){return u[c].dom}d=n();c=l(c);b=c.charAt(0).toUpperCase()+c.substring(1);
if(c==="filter"){f=["WebkitFilter","filter"]}else{f=(c+" "+m.dom.join(b+" ")+b).split(" ")
}for(a=0;a<f.length;a++){if(typeof d.style[f[a]]!=="undefined"){if(a!==0){m.reduce(a-1)
}return s(c,f[a])}}return s(c,false)}},{"./shared/getStyleTestElement":86,"./shared/prefixHelper":87,"./shared/stylePropertyCache":88,"./utils/toCSS":91,"./utils/toDOM":92}],85:[function(t,v,q){var s=t("./getStyleProperty");
var n=t("./shared/styleValueAvailable");var o=t("./shared/prefixHelper");var w=t("./shared/stylePropertyCache");
var p={};var m=/(\([^\)]+\))/gi;var r=/([^ ,;\(]+(\([^\)]+\))?)/gi;v.exports=function u(b,c){var a;
c+="";b=s(b);if(!b){return false}if(n(b,c)){return c}a=w[b].css;c=c.replace(r,function(h){var i;
var d;var f;var g;if(h[0]==="#"||!isNaN(h[0])){return h}d=h.replace(m,"");f=a+":"+d;
if(f in p){if(p[f]===false){return""}return h.replace(d,p[f])}i=o.css.map(function(j){return j+h
});i=[h].concat(i);for(g=0;g<i.length;g++){if(n(b,i[g])){if(g!==0){o.reduce(g-1)
}p[f]=i[g].replace(m,"");return i[g]}}p[f]=false;return""});c=c.trim();return(c==="")?false:c
}},{"./getStyleProperty":84,"./shared/prefixHelper":87,"./shared/stylePropertyCache":88,"./shared/styleValueAvailable":89}],86:[function(k,j,g){var i;
j.exports=function h(){if(!i){i=document.createElement("_")}else{i.style.cssText="";
i.removeAttribute("style")}return i};j.exports.resetElement=function(){i=null}},{}],87:[function(d,g,f){arguments[4][8][0].apply(f,arguments)
},{dup:8}],88:[function(d,g,f){g.exports={}},{}],89:[function(s,t,r){var u=s("./stylePropertyCache");
var q=s("./getStyleTestElement");var n=false;var l;var m;var p=function(){var b;
if(!n){n=true;l=("CSS" in window&&"supports" in window.CSS);m=false;b=q();try{b.style.width="invalid"
}catch(a){m=true}}};t.exports=function o(d,f){var a;var b;p();if(l){d=u[d].css;
return CSS.supports(d,f)}b=q();a=b.style[d];if(m){try{b.style[d]=f}catch(c){return false
}}else{b.style[d]=f}return(b.style[d]&&b.style[d]!==a)};t.exports.resetFlags=function(){n=false
}},{"./getStyleTestElement":86,"./stylePropertyCache":88}],90:[function(k,j,h){var g=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
j.exports=function i(a){a=String.prototype.replace.call(a,g,"");return a.charAt(0).toLowerCase()+a.substring(1)
}},{}],91:[function(k,j,g){var i=/^(webkit|moz|ms)/gi;j.exports=function h(a){var b;
if(a.toLowerCase()==="cssfloat"){return"float"}if(i.test(a)){a="-"+a}return a.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],92:[function(g,k,h){var i=/-([a-z])/g;k.exports=function j(a){var b;if(a.toLowerCase()==="float"){return"cssFloat"
}a=a.replace(i,function(c,d){return d.toUpperCase()});if(a.substr(0,2)==="Ms"){a="ms"+a.substring(2)
}return a}},{}],93:[function(m,l,h){var k=m("@marcom/ac-prefixer/getStyleProperty");
var j=m("@marcom/ac-prefixer/stripPrefixes");l.exports=function i(){var c=Array.prototype.slice.call(arguments);
var g=c.shift(c);var a=window.getComputedStyle(g);var b={};var q;var f;var r;var d;
if(typeof c[0]!=="string"){c=c[0]}for(d=0;d<c.length;d++){q=c[d];f=k(q);if(f){q=j(f);
r=a[f];if(!r||r==="auto"){r=null}if(r){r=j(r)}}else{r=null}b[q]=r}return b}},{"@marcom/ac-prefixer/getStyleProperty":84,"@marcom/ac-prefixer/stripPrefixes":90}],94:[function(i,h,f){h.exports=function g(a){var b;
var c;var d;if(!a&&a!==0){return""}if(Array.isArray(a)){return a+""}if(typeof a==="object"){b="";
c=Object.keys(a);for(d=0;d<c.length;d++){b+=c[d]+"("+a[c[d]]+") "}return b.trim()
}return a}},{}],95:[function(n,m,o){var j=n("@marcom/ac-prefixer/getStyleCSS");
var l=n("@marcom/ac-prefixer/getStyleProperty");var i=n("./internal/normalizeValue");
m.exports=function k(h,b){var c="";var d;var q;var f;var a;var g;if(typeof b!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(q in b){a=i(b[q]);if(!a&&a!==0){f=l(q);if("removeAttribute" in h.style){h.style.removeAttribute(f)
}else{h.style[f]=""}}else{d=j(q,a);if(d!==false){c+=" "+d}}}if(c.length){g=h.style.cssText;
if(g.charAt(g.length-1)!==";"){g+=";"}g+=c;h.style.cssText=g}return h}},{"./internal/normalizeValue":94,"@marcom/ac-prefixer/getStyleCSS":83,"@marcom/ac-prefixer/getStyleProperty":84}],96:[function(d,g,f){g.exports={createBezier:d("./ac-easing/createBezier"),createPredefined:d("./ac-easing/createPredefined"),createStep:d("./ac-easing/createStep"),Ease:d("./ac-easing/Ease")}
},{"./ac-easing/Ease":97,"./ac-easing/createBezier":98,"./ac-easing/createPredefined":99,"./ac-easing/createStep":100}],97:[function(h,m,i){var j="Ease expects an easing function.";
function k(a,b){if(typeof a!=="function"){throw new TypeError(j)}this.easingFunction=a;
this.cssString=b||null}var l=k.prototype;l.getValue=function(a){return this.easingFunction(a,0,1,1)
};m.exports=k},{}],98:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.every");
var m=i("./Ease");var k=i("./helpers/KeySpline");var n="Bezier curve expects exactly four (4) numbers. Given: ";
o.exports=function l(r,b,s,c){var a=Array.prototype.slice.call(arguments);var f=a.every(function(p){return(typeof p==="number")
});if(a.length!==4||!f){throw new TypeError(n+a)}var d=new k(r,b,s,c);var h=function(q,w,p,v){return d.get(q/v)*p+w
};var g="cubic-bezier("+a.join(", ")+")";return new m(h,g)}},{"./Ease":97,"./helpers/KeySpline":101,"@marcom/ac-polyfills/Array/prototype.every":undefined}],99:[function(q,s,p){var l=q("./createStep");
var o=q("./helpers/cssAliases");var r=q("./helpers/easingFunctions");var m=q("./Ease");
var n='Easing function "%TYPE%" not recognized among the following: '+Object.keys(r).join(", ");
s.exports=function k(b){var a;if(b==="step-start"){return l(1,"start")}else{if(b==="step-end"){return l(1,"end")
}else{a=r[b]}}if(!a){throw new Error(n.replace("%TYPE%",b))}return new m(a,o[b])
}},{"./Ease":97,"./createStep":100,"./helpers/cssAliases":102,"./helpers/easingFunctions":103}],100:[function(n,m,o){var l=n("./Ease");
var i="Step function expects a numeric value greater than zero. Given: ";var j='Step function direction must be either "start" or "end" (default). Given: ';
m.exports=function k(d,a){a=a||"end";if(typeof d!=="number"||d<1){throw new TypeError(i+d)
}if(a!=="start"&&a!=="end"){throw new TypeError(j+a)}var b=function(h,f,g,s){var t=g/d;
var u=Math[(a==="start")?"floor":"ceil"](h/s*d);return f+t*u};var c="steps("+d+", "+a+")";
return new l(b,c)}},{"./Ease":97}],101:[function(f,i,g){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
;
function h(a,d,b,q){this.get=function(j){if(a===d&&b===q){return j}return t(p(j),d,q)
};function r(k,j){return 1-3*j+3*k}function s(k,j){return 3*j-6*k}function u(j){return 3*j
}function t(j,l,k){return((r(l,k)*j+s(l,k))*j+u(l))*j}function c(j,l,k){return 3*r(l,k)*j*j+2*s(l,k)*j+u(l)
}function p(k){var m=k;for(var l=0;l<4;++l){var j=c(m,a,b);if(j===0){return m}var n=t(m,a,b)-k;
m-=n/j}return m}}i.exports=h},{}],102:[function(i,h,f){var g={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
g.easeIn=g["ease-in"];g.easeOut=g["ease-out"];g.easeInOut=g["ease-in-out"];g.easeInCubic=g["ease-in-cubic"];
g.easeOutCubic=g["ease-out-cubic"];g.easeInOutCubic=g["ease-in-out-cubic"];g.easeInQuad=g["ease-in-quad"];
g.easeOutQuad=g["ease-out-quad"];g.easeInOutQuad=g["ease-in-out-quad"];g.easeInQuart=g["ease-in-quart"];
g.easeOutQuart=g["ease-out-quart"];g.easeInOutQuart=g["ease-in-out-quart"];g.easeInQuint=g["ease-in-quint"];
g.easeOutQuint=g["ease-out-quint"];g.easeInOutQuint=g["ease-in-out-quint"];g.easeInSine=g["ease-in-sine"];
g.easeOutSine=g["ease-out-sine"];g.easeInOutSine=g["ease-in-out-sine"];g.easeInExpo=g["ease-in-expo"];
g.easeOutExpo=g["ease-out-expo"];g.easeInOutExpo=g["ease-in-out-expo"];g.easeInCirc=g["ease-in-circ"];
g.easeOutCirc=g["ease-out-circ"];g.easeInOutCirc=g["ease-in-out-circ"];g.easeInBack=g["ease-in-back"];
g.easeOutBack=g["ease-out-back"];g.easeInOutBack=g["ease-in-out-back"];h.exports=g
},{}],103:[function(ay,aA,W){var S=ay("../createBezier");var af=S(0.25,0.1,0.25,1).easingFunction;
var aw=S(0.42,0,1,1).easingFunction;var Z=S(0,0,0.58,1).easingFunction;var ae=S(0.42,0,0.58,1).easingFunction;
var ah=function(b,d,a,c){return a*b/c+d};var av=function(b,d,a,c){return a*(b/=c)*b+d
};var O=function(b,d,a,c){return -a*(b/=c)*(b-2)+d};var Y=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b+d
}return -a/2*((--b)*(b-2)-1)+d};var au=function(b,d,a,c){return a*(b/=c)*b*b+d};
var aB=function(b,d,a,c){return a*((b=b/c-1)*b*b+1)+d};var at=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b+d
}return a/2*((b-=2)*b*b+2)+d};var an=function(b,d,a,c){return a*(b/=c)*b*b*b+d};
var ap=function(b,d,a,c){return -a*((b=b/c-1)*b*b*b-1)+d};var am=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b+d
}return -a/2*((b-=2)*b*b*b-2)+d};var ad=function(b,d,a,c){return a*(b/=c)*b*b*b*b+d
};var ag=function(b,d,a,c){return a*((b=b/c-1)*b*b*b*b+1)+d};var ac=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b*b+d
}return a/2*((b-=2)*b*b*b*b+2)+d};var az=function(b,d,a,c){return -a*Math.cos(b/c*(Math.PI/2))+a+d
};var Q=function(b,d,a,c){return a*Math.sin(b/c*(Math.PI/2))+d};var aa=function(b,d,a,c){return -a/2*(Math.cos(Math.PI*b/c)-1)+d
};var V=function(b,d,a,c){return(b===0)?d:a*Math.pow(2,10*(b/c-1))+d};var ab=function(b,d,a,c){return(b===c)?d+a:a*(-Math.pow(2,-10*b/c)+1)+d
};var ak=function(b,d,a,c){if(b===0){return d}else{if(b===c){return d+a}else{if((b/=c/2)<1){return a/2*Math.pow(2,10*(b-1))+d
}}}return a/2*(-Math.pow(2,-10*--b)+2)+d};var aq=function(b,d,a,c){return -a*(Math.sqrt(1-(b/=c)*b)-1)+d
};var ax=function(b,d,a,c){return a*Math.sqrt(1-(b=b/c-1)*b)+d};var T=function(b,d,a,c){if((b/=c/2)<1){return -a/2*(Math.sqrt(1-b*b)-1)+d
}return a/2*(Math.sqrt(1-(b-=2)*b)+1)+d};var X=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a}}if(!b){b=d*0.3
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}return -(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
};var U=function(c,f,a,d){var h=1.70158;var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a
}}if(!b){b=d*0.3}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)
}return g*Math.pow(2,-10*c)*Math.sin((c*d-h)*(2*Math.PI)/b)+a+f};var ai=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d/2)===2){return f+a}}if(!b){b=d*(0.3*1.5)
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}if(c<1){return -0.5*(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
}return g*Math.pow(2,-10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b)*0.5+a+f};var aj=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*(b/=c)*b*((f+1)*b-f)+d};var al=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*((b=b/c-1)*b*((f+1)*b+f)+1)+d};var ar=function(b,d,a,c,f){if(f===undefined){f=1.70158
}if((b/=c/2)<1){return a/2*(b*b*(((f*=(1.525))+1)*b-f))+d}return a/2*((b-=2)*b*(((f*=(1.525))+1)*b+f)+2)+d
};var R=function(b,d,a,c){if((b/=c)<(1/2.75)){return a*(7.5625*b*b)+d}else{if(b<(2/2.75)){return a*(7.5625*(b-=(1.5/2.75))*b+0.75)+d
}else{if(b<(2.5/2.75)){return a*(7.5625*(b-=(2.25/2.75))*b+0.9375)+d}}}return a*(7.5625*(b-=(2.625/2.75))*b+0.984375)+d
};var ao=function(b,d,a,c){return a-R(c-b,0,a,c)+d};var P=function(b,d,a,c){if(b<c/2){return ao(b*2,0,a,c)*0.5+d
}return R(b*2-c,0,a,c)*0.5+a*0.5+d};aA.exports={linear:ah,ease:af,easeIn:aw,"ease-in":aw,easeOut:Z,"ease-out":Z,easeInOut:ae,"ease-in-out":ae,easeInCubic:au,"ease-in-cubic":au,easeOutCubic:aB,"ease-out-cubic":aB,easeInOutCubic:at,"ease-in-out-cubic":at,easeInQuad:av,"ease-in-quad":av,easeOutQuad:O,"ease-out-quad":O,easeInOutQuad:Y,"ease-in-out-quad":Y,easeInQuart:an,"ease-in-quart":an,easeOutQuart:ap,"ease-out-quart":ap,easeInOutQuart:am,"ease-in-out-quart":am,easeInQuint:ad,"ease-in-quint":ad,easeOutQuint:ag,"ease-out-quint":ag,easeInOutQuint:ac,"ease-in-out-quint":ac,easeInSine:az,"ease-in-sine":az,easeOutSine:Q,"ease-out-sine":Q,easeInOutSine:aa,"ease-in-out-sine":aa,easeInExpo:V,"ease-in-expo":V,easeOutExpo:ab,"ease-out-expo":ab,easeInOutExpo:ak,"ease-in-out-expo":ak,easeInCirc:aq,"ease-in-circ":aq,easeOutCirc:ax,"ease-out-circ":ax,easeInOutCirc:T,"ease-in-out-circ":T,easeInBack:aj,"ease-in-back":aj,easeOutBack:al,"ease-out-back":al,easeInOutBack:ar,"ease-in-out-back":ar,easeInElastic:X,"ease-in-elastic":X,easeOutElastic:U,"ease-out-elastic":U,easeInOutElastic:ai,"ease-in-out-elastic":ai,easeInBounce:ao,"ease-in-bounce":ao,easeOutBounce:R,"ease-out-bounce":R,easeInOutBounce:P,"ease-in-out-bounce":P}
},{"../createBezier":98}],104:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":105}],105:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],106:[function(o,n,i){o("@marcom/ac-polyfills/Array/isArray");
var k=o("./extend");var j=Object.prototype.hasOwnProperty;var m=function(c,b){var a;
for(a in b){if(j.call(b,a)){if(b[a]===null){c[a]=null}else{if(typeof b[a]==="object"){c[a]=Array.isArray(b[a])?[]:{};
m(c[a],b[a])}else{c[a]=b[a]}}}}return c};n.exports=function l(a,b){if(b){return m({},a)
}return k({},a)}},{"./extend":108,"@marcom/ac-polyfills/Array/isArray":undefined}],107:[function(g,j,h){var i=function(){};
j.exports=function k(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(a)}else{i.prototype=a;
return new i()}}},{}],108:[function(k,j,g){k("@marcom/ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined}],109:[function(d,g,f){g.exports={PageVisibilityManager:d("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":110}],110:[function(o,m,i){var n=o("@marcom/ac-object/create");
var k=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;function j(){if(typeof document.addEventListener==="undefined"){return
}var a;if(typeof document.hidden!=="undefined"){this._hidden="hidden";a="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";a="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";a="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
a="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(a){document.addEventListener(a,this._handleVisibilityChange.bind(this),false)
}k.call(this)}var l=j.prototype=n(k.prototype);l.CHANGED="changed";l._handleVisibilityChange=function(a){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};m.exports=new j()},{"@marcom/ac-event-emitter-micro":104,"@marcom/ac-object/create":107}],111:[function(f,i,g){i.exports=h;
function h(b){var a=new Float32Array(16);a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];
a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];
a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}},{}],112:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(16);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;
a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a
}},{}],113:[function(f,i,g){i.exports=h;function h(b,v,z){var G=v[0],H=v[1],I=v[2],F=v[3],a=G+G,M=H+H,E=I+I,J=G*a,K=G*M,L=G*E,c=H*M,y=H*E,q=I*E,d=F*a,w=F*M,x=F*E;
b[0]=1-(c+q);b[1]=K+x;b[2]=L-w;b[3]=0;b[4]=K-x;b[5]=1-(J+q);b[6]=y+d;b[7]=0;b[8]=L+w;
b[9]=y-d;b[10]=1-(J+c);b[11]=0;b[12]=z[0];b[13]=z[1];b[14]=z[2];b[15]=1;return b
}},{}],114:[function(i,h,f){h.exports=g;function g(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;
a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;
a[15]=1;return a}},{}],115:[function(f,i,g){i.exports=h;function h(c,U){var L=U[0],P=U[1],S=U[2],Y=U[3],ag=U[4],ah=U[5],ai=U[6],aj=U[7],K=U[8],M=U[9],O=U[10],Q=U[11],b=U[12],d=U[13],N=U[14],W=U[15],R=L*ah-P*ag,T=L*ai-S*ag,V=L*aj-Y*ag,X=P*ai-S*ah,aa=P*aj-Y*ah,ab=S*aj-Y*ai,ac=K*d-M*b,ad=K*N-O*b,ae=K*W-Q*b,af=M*N-O*d,Z=M*W-Q*d,a=O*W-Q*N,ak=R*a-T*Z+V*af+X*ae-aa*ad+ab*ac;
if(!ak){return null}ak=1/ak;c[0]=(ah*a-ai*Z+aj*af)*ak;c[1]=(S*Z-P*a-Y*af)*ak;c[2]=(d*ab-N*aa+W*X)*ak;
c[3]=(O*aa-M*ab-Q*X)*ak;c[4]=(ai*ae-ag*a-aj*ad)*ak;c[5]=(L*a-S*ae+Y*ad)*ak;c[6]=(N*V-b*ab-W*T)*ak;
c[7]=(K*ab-O*V+Q*T)*ak;c[8]=(ag*Z-ah*ae+aj*ac)*ak;c[9]=(P*ae-L*Z-Y*ac)*ak;c[10]=(b*aa-d*V+W*R)*ak;
c[11]=(M*V-K*aa-Q*R)*ak;c[12]=(ah*ad-ag*af-ai*ac)*ak;c[13]=(L*af-P*ad+S*ac)*ak;
c[14]=(d*T-b*X-N*R)*ak;c[15]=(K*X-M*T+O*R)*ak;return c}},{}],116:[function(i,h,f){h.exports=g;
function g(G,C,F){var a=C[0],b=C[1],d=C[2],E=C[3],O=C[4],Q=C[5],S=C[6],U=C[7],I=C[8],K=C[9],L=C[10],M=C[11],H=C[12],J=C[13],c=C[14],D=C[15];
var N=F[0],P=F[1],R=F[2],T=F[3];G[0]=N*a+P*O+R*I+T*H;G[1]=N*b+P*Q+R*K+T*J;G[2]=N*d+P*S+R*L+T*c;
G[3]=N*E+P*U+R*M+T*D;N=F[4];P=F[5];R=F[6];T=F[7];G[4]=N*a+P*O+R*I+T*H;G[5]=N*b+P*Q+R*K+T*J;
G[6]=N*d+P*S+R*L+T*c;G[7]=N*E+P*U+R*M+T*D;N=F[8];P=F[9];R=F[10];T=F[11];G[8]=N*a+P*O+R*I+T*H;
G[9]=N*b+P*Q+R*K+T*J;G[10]=N*d+P*S+R*L+T*c;G[11]=N*E+P*U+R*M+T*D;N=F[12];P=F[13];
R=F[14];T=F[15];G[12]=N*a+P*O+R*I+T*H;G[13]=N*b+P*Q+R*K+T*J;G[14]=N*d+P*S+R*L+T*c;
G[15]=N*E+P*U+R*M+T*D;return G}},{}],117:[function(i,h,g){h.exports=f;function f(V,s,c,am){var ac=am[0],ad=am[1],ae=am[2],U=Math.sqrt(ac*ac+ad*ad+ae*ae),Q,x,S,a,b,d,t,af,ag,ah,ai,W,Y,aa,ab,T,X,Z,y,z,R,aj,ak,al;
if(Math.abs(U)<0.000001){return null}U=1/U;ac*=U;ad*=U;ae*=U;Q=Math.sin(c);x=Math.cos(c);
S=1-x;a=s[0];b=s[1];d=s[2];t=s[3];af=s[4];ag=s[5];ah=s[6];ai=s[7];W=s[8];Y=s[9];
aa=s[10];ab=s[11];T=ac*ac*S+x;X=ad*ac*S+ae*Q;Z=ae*ac*S-ad*Q;y=ac*ad*S-ae*Q;z=ad*ad*S+x;
R=ae*ad*S+ac*Q;aj=ac*ae*S+ad*Q;ak=ad*ae*S-ac*Q;al=ae*ae*S+x;V[0]=a*T+af*X+W*Z;V[1]=b*T+ag*X+Y*Z;
V[2]=d*T+ah*X+aa*Z;V[3]=t*T+ai*X+ab*Z;V[4]=a*y+af*z+W*R;V[5]=b*y+ag*z+Y*R;V[6]=d*y+ah*z+aa*R;
V[7]=t*y+ai*z+ab*R;V[8]=a*aj+af*ak+W*al;V[9]=b*aj+ag*ak+Y*al;V[10]=d*aj+ah*ak+aa*al;
V[11]=t*aj+ai*ak+ab*al;if(s!==V){V[12]=s[12];V[13]=s[13];V[14]=s[14];V[15]=s[15]
}return V}},{}],118:[function(i,h,g){h.exports=f;function f(A,t,u){var a=Math.sin(u),v=Math.cos(u),b=t[4],c=t[5],d=t[6],s=t[7],w=t[8],x=t[9],y=t[10],z=t[11];
if(t!==A){A[0]=t[0];A[1]=t[1];A[2]=t[2];A[3]=t[3];A[12]=t[12];A[13]=t[13];A[14]=t[14];
A[15]=t[15]}A[4]=b*v+w*a;A[5]=c*v+x*a;A[6]=d*v+y*a;A[7]=s*v+z*a;A[8]=w*v-b*a;A[9]=x*v-c*a;
A[10]=y*v-d*a;A[11]=z*v-s*a;return A}},{}],119:[function(i,h,f){h.exports=g;function g(w,b,c){var a=Math.sin(c),d=Math.cos(c),x=b[0],y=b[1],z=b[2],A=b[3],s=b[8],t=b[9],u=b[10],v=b[11];
if(b!==w){w[4]=b[4];w[5]=b[5];w[6]=b[6];w[7]=b[7];w[12]=b[12];w[13]=b[13];w[14]=b[14];
w[15]=b[15]}w[0]=x*d-s*a;w[1]=y*d-t*a;w[2]=z*d-u*a;w[3]=A*d-v*a;w[8]=x*a+s*d;w[9]=y*a+t*d;
w[10]=z*a+u*d;w[11]=A*a+v*d;return w}},{}],120:[function(i,h,f){h.exports=g;function g(w,t,u){var a=Math.sin(u),v=Math.cos(u),x=t[0],y=t[1],z=t[2],A=t[3],b=t[4],c=t[5],d=t[6],s=t[7];
if(t!==w){w[8]=t[8];w[9]=t[9];w[10]=t[10];w[11]=t[11];w[12]=t[12];w[13]=t[13];w[14]=t[14];
w[15]=t[15]}w[0]=x*v+b*a;w[1]=y*v+c*a;w[2]=z*v+d*a;w[3]=A*v+s*a;w[4]=b*v-x*a;w[5]=c*v-y*a;
w[6]=d*v-z*a;w[7]=s*v-A*a;return w}},{}],121:[function(f,i,g){i.exports=h;function h(c,l,d){var m=d[0],a=d[1],b=d[2];
c[0]=l[0]*m;c[1]=l[1]*m;c[2]=l[2]*m;c[3]=l[3]*m;c[4]=l[4]*a;c[5]=l[5]*a;c[6]=l[6]*a;
c[7]=l[7]*a;c[8]=l[8]*b;c[9]=l[9]*b;c[10]=l[10]*b;c[11]=l[11]*b;c[12]=l[12];c[13]=l[13];
c[14]=l[14];c[15]=l[15];return c}},{}],122:[function(f,i,g){i.exports=h;function h(v,c,D){var E=D[0],F=D[1],G=D[2],y,a,b,d,H,I,J,K,x,z,B,C;
if(c===v){v[12]=c[0]*E+c[4]*F+c[8]*G+c[12];v[13]=c[1]*E+c[5]*F+c[9]*G+c[13];v[14]=c[2]*E+c[6]*F+c[10]*G+c[14];
v[15]=c[3]*E+c[7]*F+c[11]*G+c[15]}else{y=c[0];a=c[1];b=c[2];d=c[3];H=c[4];I=c[5];
J=c[6];K=c[7];x=c[8];z=c[9];B=c[10];C=c[11];v[0]=y;v[1]=a;v[2]=b;v[3]=d;v[4]=H;
v[5]=I;v[6]=J;v[7]=K;v[8]=x;v[9]=z;v[10]=B;v[11]=C;v[12]=y*E+H*F+x*G+c[12];v[13]=a*E+I*F+z*G+c[13];
v[14]=b*E+J*F+B*G+c[14];v[15]=d*E+K*F+C*G+c[15]}return v}},{}],123:[function(f,i,g){i.exports=h;
function h(n,o){if(n===o){var a=o[1],c=o[2],d=o[3],q=o[6],b=o[7],p=o[11];n[1]=o[4];
n[2]=o[8];n[3]=o[12];n[4]=a;n[6]=o[9];n[7]=o[13];n[8]=c;n[9]=q;n[11]=o[14];n[12]=d;
n[13]=b;n[14]=p}else{n[0]=o[0];n[1]=o[4];n[2]=o[8];n[3]=o[12];n[4]=o[1];n[5]=o[5];
n[6]=o[9];n[7]=o[13];n[8]=o[2];n[9]=o[6];n[10]=o[10];n[11]=o[14];n[12]=o[3];n[13]=o[7];
n[14]=o[11];n[15]=o[15]}return n}},{}],124:[function(f,h,g){h.exports=i;function i(){var a=new Float32Array(3);
a[0]=0;a[1]=0;a[2]=0;return a}},{}],125:[function(f,i,g){i.exports=h;function h(r,c,d){var s=c[0],a=c[1],b=c[2],o=d[0],p=d[1],q=d[2];
r[0]=a*q-b*p;r[1]=b*o-s*q;r[2]=s*p-a*o;return r}},{}],126:[function(i,h,f){h.exports=g;
function g(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}},{}],127:[function(f,i,g){i.exports=h;
function h(d,a,b){var c=new Float32Array(3);c[0]=d;c[1]=a;c[2]=b;return c}},{}],128:[function(f,i,g){i.exports=h;
function h(c){var d=c[0],a=c[1],b=c[2];return Math.sqrt(d*d+a*a+b*b)}},{}],129:[function(i,h,f){h.exports=g;
function g(c,d){var l=d[0],a=d[1],b=d[2];var m=l*l+a*a+b*b;if(m>0){m=1/Math.sqrt(m);
c[0]=d[0]*m;c[1]=d[1]*m;c[2]=d[2]*m}return c}},{}],130:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a}},{}],131:[function(f,i,g){i.exports=h;
function h(k,a,b,d){var c=new Float32Array(4);c[0]=k;c[1]=a;c[2]=b;c[3]=d;return c
}},{}],132:[function(f,h,g){h.exports=i;function i(c,d,n){var o=d[0],a=d[1],b=d[2],m=d[3];
c[0]=n[0]*o+n[4]*a+n[8]*b+n[12]*m;c[1]=n[1]*o+n[5]*a+n[9]*b+n[13]*m;c[2]=n[2]*o+n[6]*a+n[10]*b+n[14]*m;
c[3]=n[3]*o+n[7]*a+n[11]*b+n[15]*m;return c}},{}],133:[function(d,g,f){g.exports={Transform:d("./ac-transform/Transform")}
},{"./ac-transform/Transform":134}],134:[function(ae,al,L){var af=ae("./gl-matrix/mat4");
var an=ae("./gl-matrix/vec3");var ao=ae("./gl-matrix/vec4");var ak=Math.PI/180;
var am=180/Math.PI;var Q=0,J=0,U=1,K=1,Y=2,I=3;var ag=4,M=4,ah=5,O=5,ai=6,aj=7;
var S=8,X=9,ab=10,ac=11;var N=12,P=12,R=13,T=13,W=14,aa=15;function Z(){this.m=af.create()
}var V=Z.prototype;V.rotateX=function(a){var b=ak*a;af.rotateX(this.m,this.m,b);
return this};V.rotateY=function(a){var b=ak*a;af.rotateY(this.m,this.m,b);return this
};V.rotateZ=function(a){var b=ak*a;af.rotateZ(this.m,this.m,b);return this};V.rotate=V.rotateZ;
V.rotate3d=function(c,f,a,b){if(f===null||f===undefined){f=c}if(a===null||f===undefined){a=c
}var d=ak*b;af.rotate(this.m,this.m,d,[c,f,a]);return this};V.rotateAxisAngle=V.rotate3d;
V.scale=function(a,b){b=b||a;af.scale(this.m,this.m,[a,b,1]);return this};V.scaleX=function(a){af.scale(this.m,this.m,[a,1,1]);
return this};V.scaleY=function(a){af.scale(this.m,this.m,[1,a,1]);return this};
V.scaleZ=function(a){af.scale(this.m,this.m,[1,1,a]);return this};V.scale3d=function(a,b,c){af.scale(this.m,this.m,[a,b,c]);
return this};V.skew=function(a,b){if(b===null||b===undefined){return this.skewX(a)
}a=ak*a;b=ak*b;var c=af.create();c[M]=Math.tan(a);c[K]=Math.tan(b);af.multiply(this.m,this.m,c);
return this};V.skewX=function(a){a=ak*a;var b=af.create();b[M]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.skewY=function(a){a=ak*a;var b=af.create();b[K]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.translate=function(a,b){b=b||0;af.translate(this.m,this.m,[a,b,0]);
return this};V.translate3d=function(b,c,a){af.translate(this.m,this.m,[b,c,a]);
return this};V.translateX=function(a){af.translate(this.m,this.m,[a,0,0]);return this
};V.translateY=function(a){af.translate(this.m,this.m,[0,a,0]);return this};V.translateZ=function(a){af.translate(this.m,this.m,[0,0,a]);
return this};V.perspective=function(a){var b=af.create();if(a!==0){b[ac]=-1/a}af.multiply(this.m,this.m,b)
};V.inverse=function(){var a=this.clone();a.m=af.invert(a.m,this.m);return a};V.reset=function(){af.identity(this.m);
return this};V.getTranslateXY=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T]]
}return[a[N],a[R]]};V.getTranslateXYZ=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T],0]
}return[a[N],a[R],a[W]]};V.getTranslateX=function(){var a=this.m;if(this.isAffine()){return a[P]
}return a[N]};V.getTranslateY=function(){var a=this.m;if(this.isAffine()){return a[T]
}return a[R]};V.getTranslateZ=function(){var a=this.m;if(this.isAffine()){return 0
}return a[W]};V.clone=function(){var a=new Z();a.m=af.clone(this.m);return a};V.toArray=function(){var a=this.m;
if(this.isAffine()){return[a[J],a[K],a[M],a[O],a[P],a[T]]}return[a[Q],a[U],a[Y],a[I],a[ag],a[ah],a[ai],a[aj],a[S],a[X],a[ab],a[ac],a[N],a[R],a[W],a[aa]]
};V.fromArray=function(a){this.m=Array.prototype.slice.call(a);return this};V.setMatrixValue=function(c){c=String(c).trim();
var d=af.create();if(c==="none"){this.m=d;return this}var a=c.slice(0,c.indexOf("(")),f,b;
if(a==="matrix3d"){f=c.slice(9,-1).split(",");for(b=0;b<f.length;b++){d[b]=parseFloat(f[b])
}}else{if(a==="matrix"){f=c.slice(7,-1).split(",");for(b=f.length;b--;){f[b]=parseFloat(f[b])
}d[Q]=f[0];d[U]=f[1];d[N]=f[4];d[ag]=f[2];d[ah]=f[3];d[R]=f[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=d;return this};var ad=function(a){return Math.abs(a)<0.0001};V.decompose=function(h){h=h||false;
var c=af.clone(this.m);var m=an.create();var v=an.create();var p=an.create();var k=ao.create();
var r=ao.create();var q=an.create();for(var a=0;a<16;a++){c[a]/=c[aa]}var f=af.clone(c);
f[I]=0;f[aj]=0;f[ac]=0;f[aa]=1;var y=c[3],o=c[7],l=c[11],t=c[12],u=c[13],w=c[14],x=c[15];
var i=ao.create();if(!ad(c[I])||!ad(c[aj])||!ad(c[ac])){i[0]=c[I];i[1]=c[aj];i[2]=c[ac];
i[3]=c[aa];var b=af.invert(af.create(),f);var j=af.transpose(af.create(),b);k=ao.transformMat4(k,i,j)
}else{k=ao.fromValues(0,0,0,1)}m[0]=t;m[1]=u;m[2]=w;var n=[an.create(),an.create(),an.create()];
n[0][0]=c[0];n[0][1]=c[1];n[0][2]=c[2];n[1][0]=c[4];n[1][1]=c[5];n[1][2]=c[6];n[2][0]=c[8];
n[2][1]=c[9];n[2][2]=c[10];v[0]=an.length(n[0]);an.normalize(n[0],n[0]);p[0]=an.dot(n[0],n[1]);
n[1]=this._combine(n[1],n[0],1,-p[0]);v[1]=an.length(n[1]);an.normalize(n[1],n[1]);
p[0]/=v[1];p[1]=an.dot(n[0],n[2]);n[2]=this._combine(n[2],n[0],1,-p[1]);p[2]=an.dot(n[1],n[2]);
n[2]=this._combine(n[2],n[1],1,-p[2]);v[2]=an.length(n[2]);an.normalize(n[2],n[2]);
p[1]/=v[2];p[2]/=v[2];var d=an.cross(an.create(),n[1],n[2]);if(an.dot(n[0],d)<0){for(a=0;
a<3;a++){v[a]*=-1;n[a][0]*=-1;n[a][1]*=-1;n[a][2]*=-1}}r[0]=0.5*Math.sqrt(Math.max(1+n[0][0]-n[1][1]-n[2][2],0));
r[1]=0.5*Math.sqrt(Math.max(1-n[0][0]+n[1][1]-n[2][2],0));r[2]=0.5*Math.sqrt(Math.max(1-n[0][0]-n[1][1]+n[2][2],0));
r[3]=0.5*Math.sqrt(Math.max(1+n[0][0]+n[1][1]+n[2][2],0));if(n[2][1]>n[1][2]){r[0]=-r[0]
}if(n[0][2]>n[2][0]){r[1]=-r[1]}if(n[1][0]>n[0][1]){r[2]=-r[2]}var s=ao.fromValues(r[0],r[1],r[2],2*Math.acos(r[3]));
var g=this._rotationFromQuat(r);if(h){p[0]=Math.round(p[0]*am*100)/100;p[1]=Math.round(p[1]*am*100)/100;
p[2]=Math.round(p[2]*am*100)/100;g[0]=Math.round(g[0]*am*100)/100;g[1]=Math.round(g[1]*am*100)/100;
g[2]=Math.round(g[2]*am*100)/100;s[3]=Math.round(s[3]*am*100)/100}return{translation:m,scale:v,skew:p,perspective:k,quaternion:r,eulerRotation:g,axisAngle:s}
};V.recompose=function(f,g,b,a,h){f=f||an.create();g=g||an.create();b=b||an.create();
a=a||ao.create();h=h||ao.create();var c=af.fromRotationTranslation(af.create(),h,f);
c[I]=a[0];c[aj]=a[1];c[ac]=a[2];c[aa]=a[3];var d=af.create();if(b[2]!==0){d[X]=b[2];
af.multiply(c,c,d)}if(b[1]!==0){d[X]=0;d[S]=b[1];af.multiply(c,c,d)}if(b[0]){d[S]=0;
d[4]=b[0];af.multiply(c,c,d)}af.scale(c,c,g);this.m=c;return this};V.isAffine=function(){return(this.m[Y]===0&&this.m[I]===0&&this.m[ai]===0&&this.m[aj]===0&&this.m[S]===0&&this.m[X]===0&&this.m[ab]===1&&this.m[ac]===0&&this.m[W]===0&&this.m[aa]===1)
};V.toString=function(){var a=this.m;if(this.isAffine()){return"matrix("+a[J]+", "+a[K]+", "+a[M]+", "+a[O]+", "+a[P]+", "+a[T]+")"
}return"matrix3d("+a[Q]+", "+a[U]+", "+a[Y]+", "+a[I]+", "+a[ag]+", "+a[ah]+", "+a[ai]+", "+a[aj]+", "+a[S]+", "+a[X]+", "+a[ab]+", "+a[ac]+", "+a[N]+", "+a[R]+", "+a[W]+", "+a[aa]+")"
};V.toCSSString=V.toString;V._combine=function(c,f,a,b){var d=an.create();d[0]=(a*c[0])+(b*f[0]);
d[1]=(a*c[1])+(b*f[1]);d[2]=(a*c[2])+(b*f[2]);return d};V._matrix2dToMat4=function(d){var b=af.create();
for(var a=0;a<4;a++){for(var c=0;c<4;c++){b[a*4+c]=d[a][c]}}return b};V._mat4ToMatrix2d=function(a){var d=[];
for(var b=0;b<4;b++){d[b]=[];for(var c=0;c<4;c++){d[b][c]=a[b*4+c]}}return d};V._rotationFromQuat=function(k){var g=k[3]*k[3];
var h=k[0]*k[0];var i=k[1]*k[1];var j=k[2]*k[2];var a=h+i+j+g;var f=k[0]*k[1]+k[2]*k[3];
var b,c,d;if(f>0.499*a){c=2*Math.atan2(k[0],k[3]);d=Math.PI/2;b=0;return an.fromValues(b,c,d)
}if(f<-0.499*a){c=-2*Math.atan2(k[0],k[3]);d=-Math.PI/2;b=0;return an.fromValues(b,c,d)
}c=Math.atan2(2*k[1]*k[3]-2*k[0]*k[2],h-i-j+g);d=Math.asin(2*f/a);b=Math.atan2(2*k[0]*k[3]-2*k[1]*k[2],-h+i-j+g);
return an.fromValues(b,c,d)};al.exports=Z},{"./gl-matrix/mat4":135,"./gl-matrix/vec3":136,"./gl-matrix/vec4":137}],135:[function(i,h,g){var f={create:i("gl-mat4/create"),rotate:i("gl-mat4/rotate"),rotateX:i("gl-mat4/rotateX"),rotateY:i("gl-mat4/rotateY"),rotateZ:i("gl-mat4/rotateZ"),scale:i("gl-mat4/scale"),multiply:i("gl-mat4/multiply"),translate:i("gl-mat4/translate"),invert:i("gl-mat4/invert"),clone:i("gl-mat4/clone"),transpose:i("gl-mat4/transpose"),identity:i("gl-mat4/identity"),fromRotationTranslation:i("gl-mat4/fromRotationTranslation")};
h.exports=f},{"gl-mat4/clone":111,"gl-mat4/create":112,"gl-mat4/fromRotationTranslation":113,"gl-mat4/identity":114,"gl-mat4/invert":115,"gl-mat4/multiply":116,"gl-mat4/rotate":117,"gl-mat4/rotateX":118,"gl-mat4/rotateY":119,"gl-mat4/rotateZ":120,"gl-mat4/scale":121,"gl-mat4/translate":122,"gl-mat4/transpose":123}],136:[function(f,h,g){var i={create:f("gl-vec3/create"),dot:f("gl-vec3/dot"),normalize:f("gl-vec3/normalize"),length:f("gl-vec3/length"),cross:f("gl-vec3/cross"),fromValues:f("gl-vec3/fromValues")};
h.exports=i},{"gl-vec3/create":124,"gl-vec3/cross":125,"gl-vec3/dot":126,"gl-vec3/fromValues":127,"gl-vec3/length":128,"gl-vec3/normalize":129}],137:[function(i,h,g){var f={create:i("gl-vec4/create"),transformMat4:i("gl-vec4/transformMat4"),fromValues:i("gl-vec4/fromValues")};
h.exports=f},{"gl-vec4/create":130,"gl-vec4/fromValues":131,"gl-vec4/transformMat4":132}],138:[function(p,r,o){p("./helpers/Float32Array");
var s=p("./helpers/transitionEnd");var n=p("@marcom/ac-clip").Clip;var l=p("./clips/ClipEasing");
var q=p("./clips/ClipInlineCss");var m=p("./clips/ClipTransitionCss");function t(d,a,c,b){if(d.nodeType){if(s===undefined||(b&&b.inlineStyles)){return new q(d,a,c,b)
}return new m(d,a,c,b)}return new l(d,a,c,b)}for(var u in n){if(typeof n[u]==="function"&&u.substr(0,1)!=="_"){t[u]=n[u].bind(n)
}}t.to=function(d,a,c,b){b=b||{};if(b.destroyOnComplete===undefined){b.destroyOnComplete=true
}return new t(d,a,c,b).play()};t.from=function(c,d,b,a){a=a||{};a.propsFrom=b;if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new t(c,d,a.propsTo,a).play()};r.exports=t},{"./clips/ClipEasing":141,"./clips/ClipInlineCss":142,"./clips/ClipTransitionCss":143,"./helpers/Float32Array":146,"./helpers/transitionEnd":155,"@marcom/ac-clip":59}],139:[function(d,g,f){g.exports=d("./timeline/Timeline")
},{"./timeline/Timeline":157}],140:[function(d,g,f){g.exports={Clip:d("./Clip"),Timeline:d("./Timeline")}
},{"./Clip":138,"./Timeline":139}],141:[function(z,A,y){var r=z("@marcom/ac-object/clone");
var v=z("@marcom/ac-object/create");var o=z("@marcom/ac-easing").createPredefined;
var q=z("../helpers/isCssCubicBezierString");var w=z("../helpers/BezierCurveCssManager");
var t=z("@marcom/ac-clip").Clip;var s=z("@marcom/ac-easing").Ease;function p(b,c,a,d){if(d&&q(d.ease)){d.ease=w.create(d.ease).toEasingFunction()
}d=d||{};this._propsEase=d.propsEase||{};t.call(this,b,c,a,d)}var u=t.prototype;
var x=p.prototype=v(u);x.reset=function(){var a=u.reset.call(this);if(this._clips){var b=this._clips.length;
while(b--){this._clips[b].reset()}}return a};x.destroy=function(){if(this._clips){var a=this._clips.length;
while(a--){this._clips[a].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return u.destroy.call(this)};x._prepareProperties=function(){var i=0;var f={};var h={};
var d={};var a;var b;if(this._propsEase){for(a in this._propsTo){if(this._propsTo.hasOwnProperty(a)){b=this._propsEase[a];
if(q(b)){b=w.create(b).toEasingFunction()}if(b===undefined){if(f[this._ease]===undefined){f[this._ease]={};
h[this._ease]={};d[this._ease]=this._ease.easingFunction;i++}f[this._ease][a]=this._propsTo[a];
h[this._ease][a]=this._propsFrom[a]}else{if(typeof b==="function"){f[i]={};h[i]={};
f[i][a]=this._propsTo[a];h[i][a]=this._propsFrom[a];d[i]=b;i++}else{if(f[b]===undefined){f[b]={};
h[b]={};d[b]=b;i++}f[b][a]=this._propsTo[a];h[b][a]=this._propsFrom[a]}}}}if(i>1){var g=r(this._options||{},true);
var c=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
g.onStart=null;g.onUpdate=null;g.onDraw=null;g.onComplete=null;this._clips=[];for(b in f){if(f.hasOwnProperty(b)){g.ease=d[b];
g.propsFrom=h[b];this._clips.push(new t(this._target,c,f[b],g))}}b="linear";this._propsTo={};
this._propsFrom={}}else{for(a in d){if(d.hasOwnProperty(a)){b=d[a]}}}if(b!==undefined){this._ease=(typeof b==="function")?new s(b):o(b)
}}return u._prepareProperties.call(this)};x._onUpdateClips=function(a){var c=(this._direction===1)?a.progress():1-a.progress();
var b=this._clips.length;while(b--){this._clips[b].progress(c)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};A.exports=p},{"../helpers/BezierCurveCssManager":145,"../helpers/isCssCubicBezierString":151,"@marcom/ac-clip":59,"@marcom/ac-easing":96,"@marcom/ac-object/clone":106,"@marcom/ac-object/create":107}],142:[function(u,w,t){var o=u("@marcom/ac-dom-styles/setStyle");
var x=u("../helpers/convertToStyleObject");var v=u("../helpers/convertToTransitionableObjects");
var r=u("@marcom/ac-object/create");var q=u("../helpers/removeTransitions");var n=u("./ClipEasing");
function y(b,c,a,d){d=d||{};this._el=b;this._storeOnStart=d.onStart||null;this._storeOnDraw=d.onDraw||null;
this._storeOnComplete=d.onComplete||null;d.onStart=this._onStart;d.onDraw=this._onDraw;
d.onComplete=this._onComplete;n.call(this,{},c,a,d)}var p=n.prototype;var s=y.prototype=r(p);
s.play=function(){var a=p.play.call(this);if(this._remainingDelay!==0){o(this._el,x(this._target))
}return a};s.reset=function(){var a=p.reset.call(this);o(this._el,x(this._target));
return a};s.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return p.destroy.call(this)};
s.target=function(){return this._el};s._prepareProperties=function(){var b=v(this._el,this._propsTo,this._propsFrom);
this._target=b.target;this._propsFrom=b.propsFrom;this._propsTo=b.propsTo;q(this._el,this._target);
var d=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=x(d);if(this._options.removeStylesOnComplete!==undefined){var a;
var c=this._options.removeStylesOnComplete;if(typeof c==="boolean"&&c){for(a in this._completeStyles){if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}else{if(typeof c==="object"&&c.length){var f=c.length;while(f--){a=c[f];if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}}}return p._prepareProperties.call(this)};s._onStart=function(a){if(this.playing()&&this._direction===1&&this._delay===0){o(this._el,x(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
s._onDraw=function(a){o(this._el,x(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};s._onComplete=function(a){o(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};w.exports=y},{"../helpers/convertToStyleObject":148,"../helpers/convertToTransitionableObjects":149,"../helpers/removeTransitions":152,"./ClipEasing":141,"@marcom/ac-dom-styles/setStyle":95,"@marcom/ac-object/create":107}],143:[function(N,V,z){var T=N("@marcom/ac-dom-styles/setStyle");
var S=N("@marcom/ac-dom-styles/getStyle");var U=N("../helpers/convertToStyleObject");
var I=N("../helpers/convertToTransitionableObjects");var A=N("@marcom/ac-object/clone");
var K=N("@marcom/ac-object/create");var D=N("@marcom/ac-easing").createPredefined;
var L=N("../helpers/isCssCubicBezierString");var C=N("../helpers/removeTransitions");
var O=N("../helpers/transitionEnd");var J=N("../helpers/waitAnimationFrames");var B=N("../helpers/BezierCurveCssManager");
var W=N("@marcom/ac-clip").Clip;var F=N("./ClipEasing");var E=N("@marcom/ac-page-visibility").PageVisibilityManager;
var R="ease";var P="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var M="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function Q(d,a,c,b){b=b||{};this._el=d;this._storeEase=b.ease;if(typeof this._storeEase==="function"){throw new Error(M)
}this._storeOnStart=b.onStart||null;this._storeOnComplete=b.onComplete||null;b.onStart=this._onStart.bind(this);
b.onComplete=this._onComplete.bind(this);this._stylesTo=A(c,true);this._stylesFrom=(b.propsFrom)?A(b.propsFrom,true):{};
this._propsEase=(b.propsEase)?A(b.propsEase,true):{};if(L(b.ease)){b.ease=B.create(b.ease).toEasingFunction()
}W.call(this,{},a,{},b);this._propsFrom={}}var H=W.prototype;var G=Q.prototype=K(H);
G.play=function(){var a=H.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,U(this._stylesFrom))
}return a};G.reset=function(){var a=H.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,U(this._styles));return a};G.destroy=function(){E.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return H.destroy.call(this)};G.target=function(){return this._el};G.duration=function(a){var b=H.duration.call(this,a);
if(a===undefined){return b}if(this.playing()){this.progress(this._progress)}return b
};G.progress=function(b){var a=H.progress.call(this,b);if(b===undefined){return a
}b=(this._direction===1)?b:1-b;this._stylesClip.progress(b);this._applyStyles(0,U(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;J(this._setStylesAfterWaiting,2)
}return a};G._prepareProperties=function(){var g=I(this._el,this._stylesTo,this._stylesFrom);
this._styles=g.target;this._stylesTo=g.propsTo;this._stylesFrom=g.propsFrom;var f=this._storeEase||R;
this._eases={};this._propsArray=[];var b;this._styleCompleteTo=U(this._stylesTo);
this._styleCompleteFrom=U(this._stylesFrom);this._propsEaseKeys={};var c;for(c in this._stylesTo){if(this._stylesTo.hasOwnProperty(c)){this._propsArray[this._propsArray.length]=c;
if(this._propsEase[c]===undefined){if(this._eases[f]===undefined){b=this._convertEase(f);
this._eases[f]=b.css}this._propsEaseKeys[c]=f}else{if(this._eases[this._propsEase[c]]===undefined){b=this._convertEase(this._propsEase[c]);
this._eases[this._propsEase[c]]=b.css;this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=b.js}else{if(L(this._propsEase[c])){this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=this._eases[this._propsEase[c]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=U((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var a=this._options.removeStylesOnComplete;
if(typeof a==="boolean"&&a){for(c in this._stylesTo){this._completeStyles[c]=null
}}else{if(typeof a==="object"&&a.length){var d=a.length;while(d--){this._completeStyles[a[d]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);E.on(E.CHANGED,this._onVisibilityChanged);
this._stylesClip=new F(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
W._remove(this._stylesClip);return H._prepareProperties.call(this)};G._convertEase=function(d){if(typeof d==="function"){throw new Error(M)
}var c;var a;if(L(d)){c=B.create(d);a=c.toEasingFunction()}else{var b=D(d);if(b.cssString===null){throw new Error(P.replace(/%EASE%/g,d))
}c=B.create(b.cssString);a=d}return{css:{"1":c,"-1":c.reversed()},js:a}};G._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
H._complete.call(this)}};G._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};G._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(O,this._onTransitionEnded)
}};G._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(O,this._onTransitionEnded)
}};G._applyStyles=function(f,d){if(f>0){var c="";var a={};var b;for(b in this._eases){if(this._eases.hasOwnProperty(b)){a[b]=this._eases[b][this._direction].splitAt(this.progress()).toCSSString()
}}for(b in this._stylesTo){if(this._stylesTo.hasOwnProperty(b)){c+=b+" "+f+"ms "+a[this._propsEaseKeys[b]]+" 0ms, "
}}this._currentTransitionStyles=c.substr(0,c.length-2);if(!this._doStylesMatchCurrentStyles(d)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}d.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
T(this._el,d)};G._doStylesMatchCurrentStyles=function(c){var a=S.apply(this,[this._el].concat([this._propsArray]));
var b;for(b in c){if(c.hasOwnProperty(b)&&a.hasOwnProperty(b)&&c[b]!==a[b]){return false
}}return true};G._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var a=this._durationMs*(1-this.progress());var b=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(a,b)}};G._setOtherTransitions=function(){C(this._el,this._stylesTo);
var b=W.getAll(this._el);var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._otherTransitions&&b[a]._otherTransitions.length){this._otherTransitions=b[a]._otherTransitions;
return}}this._otherTransitions=S(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};G._getTransitionStyles=function(){var a=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){a+=this._otherTransitions}else{if(a.length){a=a.substr(0,a.length-2)
}}return a};G._getOtherClipTransitionStyles=function(){var c="";var b=W.getAll(this._el);
var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._currentTransitionStyles&&b[a]._currentTransitionStyles.length){c+=b[a]._currentTransitionStyles+", "
}}return c};G._onVisibilityChanged=function(b){if(this.playing()&&!b.isHidden){this._update({timeNow:this._getTime()});
var a=this.progress();if(a<1){this.progress(a)}}};G._onPaused=function(a){var b=S.apply(this,[this._el].concat([this._propsArray]));
b.transition=this._getTransitionStyles();this._removeTransitionListener();T(this._el,b)
};G._onStart=function(b){var a=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(a){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}J(this._setStylesAfterWaiting,a);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};G._onComplete=function(a){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
T(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};V.exports=Q},{"../helpers/BezierCurveCssManager":145,"../helpers/convertToStyleObject":148,"../helpers/convertToTransitionableObjects":149,"../helpers/isCssCubicBezierString":151,"../helpers/removeTransitions":152,"../helpers/transitionEnd":155,"../helpers/waitAnimationFrames":156,"./ClipEasing":141,"@marcom/ac-clip":59,"@marcom/ac-dom-styles/getStyle":93,"@marcom/ac-dom-styles/setStyle":95,"@marcom/ac-easing":96,"@marcom/ac-object/clone":106,"@marcom/ac-object/create":107,"@marcom/ac-page-visibility":109}],144:[function(m,l,i){var j=m("@marcom/ac-easing").createBezier;
function h(a,b){this.manager=b;this.p1={x:a[0],y:a[1]};this.p2={x:a[2],y:a[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var k=h.prototype;k.splitAt=function(t){if(this._isLinear){return this}t=Math.round(t*40)/40;
if(t===0){return this}else{if(this._cacheSplits[t]!==undefined){return this._cacheSplits[t]
}}var b=[this.p1.x,this.p2.x];var f=[this.p1.y,this.p2.y];var g=0;var d=t;var v=0;
var c=1;var u=this._getStartX(t,b);while(d!==u&&g<1000){if(d<u){c=t}else{v=t}t=v+((c-v)*0.5);
u=this._getStartX(t,b);++g}var s=this._splitBezier(t,b,f);var a=this._normalize(s);
var w=this.manager.create(a);this._cacheSplits[d]=w;return w};k.reversed=function(){var a=this.toArray();
return this.manager.create([0.5-(a[2]-0.5),0.5-(a[3]-0.5),0.5-(a[0]-0.5),0.5-(a[1]-0.5)])
};k.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};k.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};k.toEasingFunction=function(){return j.apply(this,this.toArray()).easingFunction
};k._getStartX=function(a,g){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return f-3*c*b*g[1]+3*a*d*g[0]
};k._splitBezier=function(a,g,o){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return[f-3*c*b*g[1]+3*a*d*g[0],f-3*c*b*o[1]+3*a*d*o[0],c-2*a*b*g[1]+d*g[0],c-2*a*b*o[1]+d*o[0],a-b*g[1],a-b*o[1]]
};k._normalize=function(a){return[(a[2]-a[0])/(1-a[0]),(a[3]-a[1])/(1-a[1]),(a[4]-a[0])/(1-a[0]),(a[5]-a[1])/(1-a[1])]
};l.exports=h},{"@marcom/ac-easing":96}],145:[function(m,l,i){var h=m("./BezierCurveCss");
function j(){this._instances={}}var k=j.prototype;k.create=function(a){var b;if(typeof a==="string"){b=a.replace(/ /g,"")
}else{b="cubic-bezier("+a.join(",")+")"}if(this._instances[b]===undefined){if(typeof a==="string"){a=a.match(/\d*\.?\d+/g);
var c=a.length;while(c--){a[c]=Number(a[c])}}this._instances[b]=new h(a,this)}return this._instances[b]
};l.exports=new j()},{"./BezierCurveCss":144}],146:[function(d,g,f){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],147:[function(o,n,p){var k=o("@marcom/ac-dom-metrics/getDimensions");var q=o("./splitUnits");
var j={translateX:"width",translateY:"height"};function l(d,b,a){this._transform=d;
var c;var g;var f;for(f in a){if(a.hasOwnProperty(f)&&typeof this._transform[f]==="function"){c=q(a[f]);
if(c.unit==="%"){g=this._convertPercentToPixelValue(f,c.value,b)}else{g=c.value
}this._transform[f].call(this._transform,g)}}}var m=l.prototype;m._convertPercentToPixelValue=function(a,b,c){a=j[a];
var d=k(c);if(d[a]){b*=0.01;return d[a]*b}return b};m.toArray=function(){return this._transform.toArray()
};m.toCSSString=function(){return this._transform.toCSSString()};n.exports=l},{"./splitUnits":153,"@marcom/ac-dom-metrics/getDimensions":81}],148:[function(f,i,g){i.exports=function h(b){var c={};
var d;var a;for(a in b){if(b.hasOwnProperty(a)&&b[a]!==null){if(b[a].isColor){if(b[a].isRgb){c[a]="rgb("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+")"
}else{if(b[a].isRgba){c[a]="rgba("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+", "+b[a].a+")"
}}}else{if(a==="transform"){d=(b[a].length===6)?"matrix":"matrix3d";c[a]=d+"("+b[a].join(",")+")"
}else{if(!b[a].unit){c[a]=b[a].value}else{c[a]=b[a].value+b[a].unit}}}}}return c
}},{}],149:[function(C,F,A){var x=C("@marcom/ac-dom-styles/getStyle");var v=C("@marcom/ac-object/clone");
var E=C("./splitUnits");var H=C("./toCamCase");var G=C("@marcom/ac-color").Color;
var y=C("@marcom/ac-feature/cssPropertyAvailable");var B=C("@marcom/ac-transform").Transform;
var I=C("./TransformMatrix");var w=function(a){if(G.isRgba(a)){a=new G(a).rgbaObject();
a.isRgba=true}else{a=new G(a).rgbObject();a.isRgb=true}a.isColor=true;return a};
var s=function(a){if(a.isRgb){a.isRgb=false;a.isRgba=true;a.a=1}};var t=function(b,c,a){if(b.isRgba||c.isRgba||a.isRgba){s(b);
s(c);s(a)}};var u=function(a){return[a[0],a[1],0,0,a[2],a[3],0,0,0,0,1,0,a[4],a[5],0,1]
};var z=function(b,c,a){if(b.transform.length===16||c.transform.length===16||a.transform.length===16){if(b.transform.length===6){b.transform=u(b.transform)
}if(c.transform.length===6){c.transform=u(c.transform)}if(a.transform.length===6){a.transform=u(a.transform)
}}};F.exports=function D(i,b,c){var g={};b=v(b,true);c=v(c,true);var j;var a;var f;
var d;var h=y("transform");var k;for(k in b){if(b.hasOwnProperty(k)&&b[k]!==null){if(k==="transform"){if(h){a=new B();
j=x(i,"transform")["transform"]||"none";a.setMatrixValue(j);f=new I(new B(),i,b[k])
}if(f&&f.toCSSString()!==a.toCSSString()){d=new I(c[k]?new B():a.clone(),i,c[k]);
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null}}else{j=x(i,k)[H(k)]||c[k];
if(G.isColor(j)){g[k]=w(j);c[k]=(c[k]!==undefined)?w(c[k]):v(g[k],true);b[k]=w(b[k])
}else{g[k]=E(j);c[k]=(c[k]!==undefined)?E(c[k]):v(g[k],true);b[k]=E(b[k])}}}}for(k in c){if(c.hasOwnProperty(k)&&c[k]!==null&&(b[k]===undefined||b[k]===null)){if(k==="transform"){if(h){a=new B();
a.setMatrixValue(getComputedStyle(i).transform||getComputedStyle(i).webkitTransform||"none");
d=new I(new B(),i,c[k])}if(d&&d.toCSSString()!==a.toCSSString()){f=new I(a.clone());
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null;c[k]=null
}}else{j=x(i,k)[H(k)];if(G.isColor(j)){g[k]=w(j);b[k]=v(g[k],true);c[k]=w(c[k])
}else{g[k]=E(j);c[k]=E(c[k]);b[k]=v(g[k],true)}}}if(g[k]&&g[k].isColor){t(g[k],c[k],b[k])
}}if(g.transform){z(g,c,b)}return{target:g,propsTo:b,propsFrom:c}}},{"./TransformMatrix":147,"./splitUnits":153,"./toCamCase":154,"@marcom/ac-color":61,"@marcom/ac-dom-styles/getStyle":93,"@marcom/ac-feature/cssPropertyAvailable":195,"@marcom/ac-object/clone":106,"@marcom/ac-transform":133}],150:[function(f,i,g){i.exports=function h(d){if(d.transitionProperty){var a="";
var n=d.transitionProperty.split(", ");var c=d.transitionDuration.split(", ");var b=d.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(j){return j.substr(0,j.length-1)
}).split(", ");var p=d.transitionDelay.split(", ");var o=n.length;while(o--){a+=n[o]+" "+c[o]+" "+b[o]+" "+p[o]+", "
}return a.substr(0,a.length-2)}return false}},{}],151:[function(i,h,f){h.exports=function g(a){return typeof a==="string"&&a.substr(0,13)==="cubic-bezier("
}},{}],152:[function(n,m,o){var k=n("@marcom/ac-dom-styles/setStyle");var j=n("@marcom/ac-dom-styles/getStyle");
var l=n("./getShorthandTransition");m.exports=function i(b,g){var a=j(b,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
a=a.transition||l(a);if(a&&a.length){a=a.split(",");var c=0;var f;var d=a.length;
while(d--){f=a[d].trim().split(" ")[0];if(g[f]!==undefined){a.splice(d,1);++c}}if(c){if(a.length===0){a=["all"]
}k(b,{transition:a.join(",").trim()})}}}},{"./getShorthandTransition":150,"@marcom/ac-dom-styles/getStyle":93,"@marcom/ac-dom-styles/setStyle":95}],153:[function(i,h,f){h.exports=function g(a){a=String(a);
if(a.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var b=/(\d*\.?\d*)(.*)/;var d=1;if(a&&a.substr(0,1)==="-"){a=a.substr(1);d=-1}var c=String(a).match(b);
return{value:Number(c[1])*d,unit:c[2]}}},{}],154:[function(i,h,f){h.exports=function g(a){var b=function(l,d,c,m){return(c===0)&&(m.substr(1,3)!=="moz")?d:d.toUpperCase()
};return a.replace(/-(\w)/g,b)}},{}],155:[function(j,i,k){var h;i.exports=(function g(){if(h){return h
}var c;var b=document.createElement("fakeelement");var a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(c in a){if(b.style[c]!==undefined){h=a[c];return h}}})()},{}],156:[function(j,i,g){var h=j("@marcom/ac-page-visibility").PageVisibilityManager;
i.exports=function k(a,c){if(c){var b=function(m){if(h.isHidden){setTimeout(m,16)
}else{window.requestAnimationFrame(m)}};var d=0;var f=function(){if(d===c){a.call(this)
}else{++d;b(f)}};f()}else{a.call(this)}}},{"@marcom/ac-page-visibility":109}],157:[function(u,w,t){var q=u("@marcom/ac-object/create");
var p=u("@marcom/ac-clip").Clip;var s=u("./TimelineClip");var v=u("./TimelineCallback");
var m=u("./TimelineItemList");var n=p.prototype;function o(a){a=a||{};a.ease=a.ease||"linear";
a.destroyOnComplete=false;this.options=a;p.call(this,{t:0},0,{t:1},a);this._itemList=new m()
}var r=o.prototype=q(n);o.prototype.constructor=o;r._update=function(a){n._update.call(this,a);
this._render()};r.progress=function(a){n.progress.call(this,a);if(a!==undefined){this._render()
}return this._progress};r._render=function(){if(this._itemList.length===0){return
}var b=this._target.t*this._duration;var a=this._itemList.head;var d=a;while(d){d=a.next;
var c=(b-a.position);a.currentTime(c);a=d}};r.addClip=function(b,c){c=(c===undefined)?this.duration():c;
var a=b._delay/1000;this._itemList.append(new s(b,c+a));this._updateDuration()};
r.addCallback=function(b,a){a=(a===undefined)?this.duration():a;this._itemList.append(new v(b,a));
this._updateDuration()};r.remove=function(a){var b=this._itemList.getItem(a);if(b){this._itemList.remove(b);
this._updateDuration()}};r._updateDuration=function(){var a=this._itemList.head;
var b=a.position+a.duration();this._itemList.forEach(function(c){var d=c.position+c.duration();
if(d>=b){a=c;b=d}});this.duration(b)};r.destroy=function(){var a=this._itemList.head;
while(a){var b=a;a=b.next;this._itemList.remove(b)}this._duration=0;return n.destroy.call(this)
};w.exports=o},{"./TimelineCallback":158,"./TimelineClip":159,"./TimelineItemList":160,"@marcom/ac-clip":59,"@marcom/ac-object/create":107}],158:[function(g,k,h){function i(a,b){this.callback=a;
this._delay=0;this.position=b;this._hasTriggered=false;this.prev=null;this.next=null
}var j=i.prototype;j.duration=function(){return 0};j.currentTime=function(a){if(a>=0&&!this._hasTriggered){this.callback();
this._hasTriggered=true}if(a<0&&this._hasTriggered){this.callback();this._hasTriggered=false
}return 0};k.exports=i},{}],159:[function(g,k,h){function i(a,b){this.clip=a;this.position=b;
this.duration=this.clip.duration.bind(this.clip);this.lastProgress=-1;this.prev=null;
this.next=null}var j=i.prototype;j.currentTime=function(a){var b=Math.min(1,Math.max(0,a/this.clip._duration));
if(b!==b){b=1}if(this.lastProgress===b){return this.lastProgress}if(this.lastProgress===0||b===0||this.lastProgress===-1){if(this.clip._storeOnStart){this.clip._storeOnStart(this.clip)
}}this.clip._playing=(b*this.clip._duration===this.clip._duration);this.lastProgress=this.clip.progress(b);
return this.lastProgress};j.destroy=function(){this.clip.destroy();this.prev=null;
this.next=null;this.duration=null};k.exports=i},{}],160:[function(i,o,j){var k=i("./TimelineClip");
var m=i("./TimelineCallback");var l=function(){this.head=null;this.tail=null;this.length=0
};var n=l.prototype;n.append=function(a){a.prev=null;a.next=null;if(this.tail){this.tail.next=a;
a.prev=this.tail}else{this.head=a}this.tail=a;this.length++};n.remove=function(a){if(a===this.head){this.head=this.head.next
}else{if(a===this.tail){this.tail=this.tail.prev}}if(a.prev){a.prev.next=a.next
}if(a.next){a.next.prev=a.prev}a.next=a.prev=null;if(this.head===null){this.tail=null
}this.length--};n.getItem=function(c){var b=this.head;while(b){var a=b;if((a instanceof k&&a.clip===c)||(a instanceof m&&a.callback===c)){return a
}b=a.next}return null};n.forEach=function(a){var d=0;var c=this.head;while(c){var b=c;
a(b,d,this.length);c=b.next}};n.destroy=function(){while(this.head){var a=this.head;
this.remove(a);a.destroy()}};o.exports=l},{"./TimelineCallback":158,"./TimelineClip":159}],161:[function(d,g,f){arguments[4][24][0].apply(f,arguments)
},{dup:24}],162:[function(d,g,f){arguments[4][27][0].apply(f,arguments)},{"../isNode":164,dup:27}],163:[function(d,g,f){arguments[4][30][0].apply(f,arguments)
},{"./ELEMENT_NODE":161,"./internal/isNodeType":162,dup:30}],164:[function(d,g,f){arguments[4][31][0].apply(f,arguments)
},{dup:31}],165:[function(k,j,g){var i=/^\[object (HTMLCollection|NodeList|Object)\]$/;
j.exports=function h(a){if(!a){return false}if(typeof a.length!=="number"){return false
}if(typeof a[0]==="object"&&(!a[0]||!a[0].nodeType)){return false}return i.test(Object.prototype.toString.call(a))
}},{}],166:[function(f,i,g){var h=f("./ac-element-tracker/ElementTracker");i.exports=new h();
i.exports.ElementTracker=h},{"./ac-element-tracker/ElementTracker":167}],167:[function(r,s,o){var l={isNodeList:r("@marcom/ac-dom-nodes/isNodeList"),isElement:r("@marcom/ac-dom-nodes/isElement")};
var u={getDimensions:r("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:r("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:r("@marcom/ac-dom-metrics/getScrollY")};
var q={clone:r("@marcom/ac-object/clone"),extend:r("@marcom/ac-object/extend")};
var m=r("./TrackedElement");var p={autoStart:false,useRenderedPosition:false};function t(a,b){this.options=q.clone(p);
this.options=typeof b==="object"?q.extend(this.options,b):this.options;this._scrollY=this._getScrollY();
this._windowHeight=this._getWindowHeight();this.tracking=false;this.elements=[];
if(a&&(Array.isArray(a)||l.isNodeList(a)||l.isElement(a))){this.addElements(a)}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);
this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);if(this.options.autoStart){this.start()
}}var n=t.prototype;n.destroy=function(){var a,b;this.stop();for(a=0,b=this.elements.length;
a<b;a++){this.elements[a].destroy()}this.elements=null;this.options=null};n._registerTrackedElements=function(b){var a=[].concat(b);
a.forEach(function(c){if(this._elementInDOM(c.element)){c.offsetTop=c.element.offsetTop;
this.elements.push(c)}},this)};n._elementInDOM=function(c){var a=false;var b=document.getElementsByTagName("body")[0];
if(l.isElement(c)&&b.contains(c)){a=true}return a};n._elementPercentInView=function(a){return a.pixelsInView/a.height
};n._elementPixelsInView=function(a){var b=a.top-this._scrollY;var c=a.bottom-this._scrollY;
if(b>this._windowHeight||c<0){return 0}return Math.min(c,this._windowHeight)-Math.max(b,0)
};n._ifInView=function(b,a){if(!a){b.trigger("enterview",b)}};n._ifAlreadyInView=function(a){if(!a.inView){a.trigger("exitview",a)
}};n.addElements=function(c,d){if(typeof d==="undefined"){d=this.options.useRenderedPosition
}c=l.isNodeList(c)?Array.prototype.slice.call(c):[].concat(c);for(var a=0,b=c.length;
a<b;a++){this.addElement(c[a],d)}};n.addElement=function(a,c){var b=null;if(typeof c==="undefined"){c=this.options.useRenderedPosition
}if(l.isElement(a)){b=new m(a,c);this._registerTrackedElements(b);this.refreshElementMetrics(b);
this.refreshElementState(b)}else{throw new TypeError("ElementTracker: "+a+" is not a valid DOM element")
}return b};n.removeElement=function(c){var a=[];var b;this.elements.forEach(function(d,f){if(d===c||d.element===c){a.push(f)
}});b=this.elements.filter(function(d,f){return a.indexOf(f)<0});this.elements=b
};n.start=function(){if(this.tracking===false){this.tracking=true;window.addEventListener("resize",this.refreshAllElementMetrics);
window.addEventListener("orientationchange",this.refreshAllElementMetrics);window.addEventListener("scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};n.stop=function(){if(this.tracking===true){this.tracking=false;
window.removeEventListener("resize",this.refreshAllElementMetrics);window.removeEventListener("orientationchange",this.refreshAllElementMetrics);
window.removeEventListener("scroll",this.refreshAllElementStates)}};n.refreshAllElementMetrics=function(b,a){if(typeof b!=="number"){b=this._getScrollY()
}if(typeof a!=="number"){a=this._getWindowHeight()}this._scrollY=b;this._windowHeight=a;
this.elements.forEach(this.refreshElementMetrics,this)};n.refreshElementMetrics=function(a){var c=u.getDimensions(a.element,a.useRenderedPosition);
var b=u.getPagePosition(a.element,a.useRenderedPosition);a=q.extend(a,c,b);return this.refreshElementState(a)
};n.refreshAllElementStates=function(a){if(typeof a!=="number"){a=this._getScrollY()
}this._scrollY=a;this.elements.forEach(this.refreshElementState,this)};n.refreshElementState=function(b){var a=b.inView;
b.pixelsInView=this._elementPixelsInView(b);b.percentInView=this._elementPercentInView(b);
b.inView=b.pixelsInView>0;if(b.inView){this._ifInView(b,a)}if(a){this._ifAlreadyInView(b)
}return b};n._getWindowHeight=function(){return window.innerHeight};n._getScrollY=function(){return u.getScrollY()
};s.exports=t},{"./TrackedElement":168,"@marcom/ac-dom-metrics/getDimensions":13,"@marcom/ac-dom-metrics/getPagePosition":14,"@marcom/ac-dom-metrics/getScrollY":18,"@marcom/ac-dom-nodes/isElement":163,"@marcom/ac-dom-nodes/isNodeList":165,"@marcom/ac-object/clone":171,"@marcom/ac-object/extend":173}],168:[function(q,p,j){var k={isElement:q("@marcom/ac-dom-nodes/isElement")};
var n=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;var l=n.prototype;function m(b,a){if(!k.isElement(b)){throw new TypeError("TrackedElement: "+b+" is not a valid DOM element")
}n.call(this);this.element=b;this.inView=false;this.percentInView=0;this.pixelsInView=0;
this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;this.width=0;
this.height=0;this.useRenderedPosition=a||false}var o=m.prototype=Object.create(l);
o.destroy=function(){this.element=null;l.destroy.call(this)};p.exports=m},{"@marcom/ac-dom-nodes/isElement":163,"@marcom/ac-event-emitter-micro":169}],169:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":170}],170:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],171:[function(d,g,f){arguments[4][106][0].apply(f,arguments)
},{"./extend":173,"@marcom/ac-polyfills/Array/isArray":undefined,dup:106}],172:[function(g,k,h){var i=g("./extend");
k.exports=function j(a,b){if(typeof a!=="object"){throw new TypeError("defaults: must provide a defaults object")
}b=b||{};if(typeof b!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return i({},a,b)}},{"./extend":173}],173:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],174:[function(f,h,g){var i=f("./ac-element-engagement/ElementEngagement");
h.exports=new i();h.exports.ElementEngagement=i},{"./ac-element-engagement/ElementEngagement":175}],175:[function(s,t,q){var p;
var l=s("@marcom/ac-event-emitter-micro").EventEmitterMicro;var r={defaults:s("@marcom/ac-object/defaults"),extend:s("@marcom/ac-object/extend")};
var o=s("@marcom/ac-element-tracker").ElementTracker;var m={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var n={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var u=function(a){o.call(this,null,a);l.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};p=u.prototype=Object.create(o.prototype);
p=r.extend(p,l.prototype);p._decorateTrackedElement=function(a,b){var c;c=r.defaults(m,b||{});
r.extend(a,c);r.extend(a,n)};p._attachElementListeners=function(a){a.on("thresholdenter",this._thresholdEnter,this);
a.on("thresholdexit",this._thresholdExit,this);a.on("enterview",this._enterView,this);
a.on("exitview",this._exitView,this)};p._removeElementListeners=function(a){a.off("thresholdenter",this._thresholdEnter);
a.off("thresholdexit",this._thresholdExit);a.off("enterview",this._enterView);a.off("exitview",this._exitView)
};p._attachAllElementListeners=function(){this.elements.forEach(function(a){if(!a.stopOnEngaged){this._attachElementListeners(a)
}else{if(!a.engaged){this._attachElementListeners(a)}}},this)};p._removeAllElementListeners=function(){this.elements.forEach(function(a){this._removeElementListeners(a)
},this)};p._elementInViewPastThreshold=function(a){var b=false;if(a.pixelsInView===this._windowHeight){b=true
}else{b=(a.percentInView>a.inViewThreshold)}return b};p._ifInView=function(b,c){var a=b.inThreshold;
o.prototype._ifInView.apply(this,arguments);if(!a&&this._elementInViewPastThreshold(b)){b.inThreshold=true;
b.trigger("thresholdenter",b);if(typeof b.timeToEngage==="number"&&b.timeToEngage>=0){b.engagedTimeout=window.setTimeout(this._engaged.bind(this,b),b.timeToEngage)
}}};p._ifAlreadyInView=function(b){var a=b.inThreshold;o.prototype._ifAlreadyInView.apply(this,arguments);
if(a&&!this._elementInViewPastThreshold(b)){b.inThreshold=false;b.trigger("thresholdexit",b);
if(b.engagedTimeout){window.clearTimeout(b.engagedTimeout);b.engagedTimeout=null
}}};p._engaged=function(a){a.engagedTimeout=null;this._elementEngaged(a);a.trigger("engaged",a);
this.trigger("engaged",a)};p._thresholdEnter=function(a){a.thresholdEnterTime=Date.now();
a.thresholdExitTime=0;this.trigger("thresholdenter",a)};p._thresholdExit=function(a){a.thresholdExitTime=Date.now();
this.trigger("thresholdexit",a)};p._enterView=function(a){this.trigger("enterview",a)
};p._exitView=function(a){this.trigger("exitview",a)};p._elementEngaged=function(a){a.engaged=true;
if(a.stopOnEngaged){this.stop(a)}};p.stop=function(a){if(this.tracking&&!a){this._removeAllElementListeners();
o.prototype.stop.call(this)}if(a&&a.tracking){a.tracking=false;this._removeElementListeners(a);
this.removeElement(a)}};p.start=function(a){if(!a){this._attachAllElementListeners()
}if(a&&!a.tracking){if(!a.stopOnEngaged){a.tracking=true;this._attachElementListeners(a)
}else{if(!a.engaged){a.tracking=true;this._attachElementListeners(a)}}}if(!this.tracking){o.prototype.start.call(this)
}else{this.refreshAllElementMetrics();this.refreshAllElementStates()}};p.addElement=function(c,b){b=b||{};
var a=o.prototype.addElement.call(this,c,b.useRenderedPosition);this._decorateTrackedElement(a,b);
return a};p.addElements=function(a,b){[].forEach.call(a,function(c){this.addElement(c,b)
},this)};t.exports=u},{"@marcom/ac-element-tracker":166,"@marcom/ac-event-emitter-micro":169,"@marcom/ac-object/defaults":172,"@marcom/ac-object/extend":173}],176:[function(k,j,g){var h=function(){var a="";
var b;for(b=0;b<arguments.length;b++){if(b>0){a+=","}a+=arguments[b]}return a};
j.exports=function i(a,b){b=b||h;var c=function(){var f=arguments;var d=b.apply(this,f);
if(!(d in c.cache)){c.cache[d]=a.apply(this,f)}return c.cache[d]};c.cache={};return c
}},{}],177:[function(f,i,g){i.exports=function h(a){var b;return function(){if(typeof b==="undefined"){b=a.apply(this,arguments)
}return b}}},{}],178:[function(d,g,f){arguments[4][6][0].apply(f,arguments)},{"./shared/camelCasedEventTypes":181,"./shared/prefixHelper":183,"./shared/windowFallbackEventTypes":186,"./utils/eventTypeAvailable":187,dup:6}],179:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"./shared/getStyleTestElement":182,"./shared/prefixHelper":183,"./shared/stylePropertyCache":184,"./utils/toCSS":188,"./utils/toDOM":189,dup:84}],180:[function(d,g,f){arguments[4][85][0].apply(f,arguments)
},{"./getStyleProperty":179,"./shared/prefixHelper":183,"./shared/stylePropertyCache":184,"./shared/styleValueAvailable":185,dup:85}],181:[function(d,g,f){arguments[4][7][0].apply(f,arguments)
},{dup:7}],182:[function(d,g,f){arguments[4][86][0].apply(f,arguments)},{dup:86}],183:[function(d,g,f){arguments[4][8][0].apply(f,arguments)
},{dup:8}],184:[function(d,g,f){arguments[4][88][0].apply(f,arguments)},{dup:88}],185:[function(d,g,f){arguments[4][89][0].apply(f,arguments)
},{"./getStyleTestElement":182,"./stylePropertyCache":184,dup:89}],186:[function(d,g,f){arguments[4][9][0].apply(f,arguments)
},{dup:9}],187:[function(d,g,f){arguments[4][10][0].apply(f,arguments)},{dup:10}],188:[function(d,g,f){arguments[4][91][0].apply(f,arguments)
},{dup:91}],189:[function(d,g,f){arguments[4][92][0].apply(f,arguments)},{dup:92}],190:[function(d,g,f){g.exports={canvasAvailable:d("./canvasAvailable"),continuousScrollEventsAvailable:d("./continuousScrollEventsAvailable"),cookiesAvailable:d("./cookiesAvailable"),cssLinearGradientAvailable:d("./cssLinearGradientAvailable"),cssPropertyAvailable:d("./cssPropertyAvailable"),cssViewportUnitsAvailable:d("./cssViewportUnitsAvailable"),elementAttributeAvailable:d("./elementAttributeAvailable"),eventTypeAvailable:d("./eventTypeAvailable"),isDesktop:d("./isDesktop"),isHandheld:d("./isHandheld"),isRetina:d("./isRetina"),isTablet:d("./isTablet"),localStorageAvailable:d("./localStorageAvailable"),mediaElementsAvailable:d("./mediaElementsAvailable"),mediaQueriesAvailable:d("./mediaQueriesAvailable"),sessionStorageAvailable:d("./sessionStorageAvailable"),svgAvailable:d("./svgAvailable"),threeDTransformsAvailable:d("./threeDTransformsAvailable"),touchAvailable:d("./touchAvailable"),webGLAvailable:d("./webGLAvailable")}
},{"./canvasAvailable":191,"./continuousScrollEventsAvailable":192,"./cookiesAvailable":193,"./cssLinearGradientAvailable":194,"./cssPropertyAvailable":195,"./cssViewportUnitsAvailable":196,"./elementAttributeAvailable":197,"./eventTypeAvailable":198,"./isDesktop":200,"./isHandheld":201,"./isRetina":202,"./isTablet":203,"./localStorageAvailable":204,"./mediaElementsAvailable":205,"./mediaQueriesAvailable":206,"./sessionStorageAvailable":207,"./svgAvailable":208,"./threeDTransformsAvailable":209,"./touchAvailable":210,"./webGLAvailable":211}],191:[function(h,m,i){var j=h("./helpers/globals");
var k=h("@marcom/ac-function/once");var l=function(){var b=j.getDocument();var a=b.createElement("canvas");
return !!(typeof a.getContext==="function"&&a.getContext("2d"))};m.exports=k(l);
m.exports.original=l},{"./helpers/globals":199,"@marcom/ac-function/once":177}],192:[function(o,m,i){var n=o("@marcom/ac-useragent");
var j=o("./touchAvailable").original;var l=o("@marcom/ac-function/once");function k(){return(!j()||(n.os.ios&&n.os.version.major>=8)||n.browser.chrome)
}m.exports=l(k);m.exports.original=k},{"./touchAvailable":210,"@marcom/ac-function/once":177,"@marcom/ac-useragent":717}],193:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=false;var d=j.getDocument();
var b=j.getNavigator();try{if("cookie" in d&&!!b.cookieEnabled){d.cookie="ac_feature_cookie=1";
a=(d.cookie.indexOf("ac_feature_cookie")!==-1);d.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(c){}return a}l.exports=k(i);l.exports.original=i},{"./helpers/globals":199,"@marcom/ac-function/once":177}],194:[function(m,l,h){var j=m("@marcom/ac-prefixer/getStyleValue");
var k=m("@marcom/ac-function/once");function i(){var a=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return a.some(function(b){return !!j("background-image",b)})}l.exports=k(i);l.exports.original=i
},{"@marcom/ac-function/once":177,"@marcom/ac-prefixer/getStyleValue":180}],195:[function(o,n,i){var l=o("@marcom/ac-prefixer/getStyleValue");
var m=o("@marcom/ac-prefixer/getStyleProperty");var k=o("@marcom/ac-function/memoize");
function j(a,b){if(typeof b!=="undefined"){return !!l(a,b)}else{return !!m(a)}}n.exports=k(j);
n.exports.original=j},{"@marcom/ac-function/memoize":176,"@marcom/ac-prefixer/getStyleProperty":179,"@marcom/ac-prefixer/getStyleValue":180}],196:[function(h,m,i){var k=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function j(){return !!k("margin","1vw 1vh")
}m.exports=l(j);m.exports.original=j},{"@marcom/ac-function/once":177,"@marcom/ac-prefixer/getStyleValue":180}],197:[function(h,l,i){var k=h("./helpers/globals");
var j=h("@marcom/ac-function/memoize");function m(d,b){var c=k.getDocument();var a;
b=b||"div";a=c.createElement(b);return(d in a)}l.exports=j(m);l.exports.original=m
},{"./helpers/globals":199,"@marcom/ac-function/memoize":176}],198:[function(m,k,h){var i=m("@marcom/ac-prefixer/getEventType");
var j=m("@marcom/ac-function/memoize");function l(a,b){return !!i(a,b)}k.exports=j(l);
k.exports.original=l},{"@marcom/ac-function/memoize":176,"@marcom/ac-prefixer/getEventType":178}],199:[function(d,g,f){g.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],200:[function(n,m,i){var j=n("./touchAvailable").original;var k=n("./helpers/globals");
var l=n("@marcom/ac-function/once");function o(){var a=k.getWindow();return(!j()&&!a.orientation)
}m.exports=l(o);m.exports.original=o},{"./helpers/globals":199,"./touchAvailable":210,"@marcom/ac-function/once":177}],201:[function(m,l,o){var n=m("./isDesktop").original;
var j=m("./isTablet").original;var k=m("@marcom/ac-function/once");function i(){return(!n()&&!j())
}l.exports=k(i);l.exports.original=i},{"./isDesktop":200,"./isTablet":203,"@marcom/ac-function/once":177}],202:[function(g,k,h){var j=g("./helpers/globals");
k.exports=function i(){var a=j.getWindow();return("devicePixelRatio" in a&&a.devicePixelRatio>=1.5)
}},{"./helpers/globals":199}],203:[function(o,n,q){var p=o("./isDesktop").original;
var l=o("./helpers/globals");var m=o("@marcom/ac-function/once");var j=600;function k(){var a=l.getWindow();
var b=a.screen.width;if(a.orientation&&a.screen.height<b){b=a.screen.height}return(!p()&&b>=j)
}n.exports=m(k);n.exports.original=k},{"./helpers/globals":199,"./isDesktop":200,"@marcom/ac-function/once":177}],204:[function(m,l,i){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function h(){var a=j.getWindow();var b=false;
try{b=!!(a.localStorage&&a.localStorage.non_existent!==null)}catch(c){}return b
}l.exports=k(h);l.exports.original=h},{"./helpers/globals":199,"@marcom/ac-function/once":177}],205:[function(h,m,i){var j=h("./helpers/globals");
var l=h("@marcom/ac-function/once");function k(){var a=j.getWindow();return("HTMLMediaElement" in a)
}m.exports=l(k);m.exports.original=k},{"./helpers/globals":199,"@marcom/ac-function/once":177}],206:[function(m,l,h){m("@marcom/ac-polyfills/matchMedia");
var j=m("./helpers/globals");var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();
var b=a.matchMedia("only all");return !!(b&&b.matches)}l.exports=k(i);l.exports.original=i
},{"./helpers/globals":199,"@marcom/ac-function/once":177,"@marcom/ac-polyfills/matchMedia":undefined}],207:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=false;
try{if("sessionStorage" in a&&typeof a.sessionStorage.setItem==="function"){a.sessionStorage.setItem("ac_feature","test");
c=true;a.sessionStorage.removeItem("ac_feature","test")}}catch(b){}return c}l.exports=k(i);
l.exports.original=i},{"./helpers/globals":199,"@marcom/ac-function/once":177}],208:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getDocument();return !!a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":199,"@marcom/ac-function/once":177}],209:[function(h,m,i){var j=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function k(){return !!(j("perspective","1px")&&j("transform","translateZ(0)"))
}m.exports=l(k);m.exports.original=k},{"@marcom/ac-function/once":177,"@marcom/ac-prefixer/getStyleValue":180}],210:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=j.getDocument();
var b=j.getNavigator();return !!(("ontouchstart" in a)||(a.DocumentTouch&&c instanceof a.DocumentTouch)||(b.maxTouchPoints>0)||(b.msMaxTouchPoints>0))
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":199,"@marcom/ac-function/once":177}],211:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var b=j.getDocument();var a=b.createElement("canvas");
if(typeof a.getContext==="function"){return !!(a.getContext("webgl")||a.getContext("experimental-webgl"))
}return false}l.exports=k(i);l.exports.original=i},{"./helpers/globals":199,"@marcom/ac-function/once":177}],212:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.slice");
g("@marcom/ac-polyfills/Element/prototype.classList");var j=g("./className/add");
k.exports=function i(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.add){b.classList.add.apply(b.classList,a);return
}for(c=0;c<a.length;c++){j(b,a[c])}}},{"./className/add":214,"@marcom/ac-polyfills/Array/prototype.slice":undefined,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],213:[function(d,g,f){g.exports={add:d("./className/add"),contains:d("./className/contains"),remove:d("./className/remove")}
},{"./className/add":214,"./className/contains":215,"./className/remove":217}],214:[function(g,k,h){var j=g("./contains");
k.exports=function i(a,b){if(!j(a,b)){a.className+=" "+b}}},{"./contains":215}],215:[function(g,k,h){var i=g("./getTokenRegExp");
k.exports=function j(a,b){return i(b).test(a.className)}},{"./getTokenRegExp":216}],216:[function(f,i,g){i.exports=function h(a){return new RegExp("(\\s|^)"+a+"(\\s|$)")
}},{}],217:[function(m,l,h){var k=m("./contains");var j=m("./getTokenRegExp");l.exports=function i(a,b){if(k(a,b)){a.className=a.className.replace(j(b),"$1").trim()
}}},{"./contains":215,"./getTokenRegExp":216}],218:[function(g,j,h){g("@marcom/ac-polyfills/Element/prototype.classList");
var i=g("./className/contains");j.exports=function k(a,b){if(a.classList&&a.classList.contains){return a.classList.contains(b)
}return i(a,b)}},{"./className/contains":215,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],219:[function(d,g,f){g.exports={add:d("./add"),contains:d("./contains"),remove:d("./remove"),toggle:d("./toggle")}
},{"./add":212,"./contains":218,"./remove":220,"./toggle":221}],220:[function(j,i,k){j("@marcom/ac-polyfills/Array/prototype.slice");
j("@marcom/ac-polyfills/Element/prototype.classList");var g=j("./className/remove");
i.exports=function h(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.remove){b.classList.remove.apply(b.classList,a);
return}for(c=0;c<a.length;c++){g(b,a[c])}}},{"./className/remove":217,"@marcom/ac-polyfills/Array/prototype.slice":undefined,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],221:[function(k,j,g){k("@marcom/ac-polyfills/Element/prototype.classList");
var i=k("./className");j.exports=function h(b,c,a){var d=(typeof a!=="undefined");
var f;if(b.classList&&b.classList.toggle){if(d){return b.classList.toggle(c,a)}return b.classList.toggle(c)
}if(d){f=!!a}else{f=!i.contains(b,c)}if(f){i.add(b,c)}else{i.remove(b,c)}return f
}},{"./className":213,"@marcom/ac-polyfills/Element/prototype.classList":undefined}],222:[function(m,l,h){var j=m("./utils/addEventListener");
var i=m("./shared/getEventType");l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)
}},{"./shared/getEventType":232,"./utils/addEventListener":236}],223:[function(l,k,m){var i=l("./utils/dispatchEvent");
var h=l("./shared/getEventType");k.exports=function j(a,b,c){b=h(a,b);return i(a,b,c)
}},{"./shared/getEventType":232,"./utils/dispatchEvent":237}],224:[function(d,g,f){g.exports={addEventListener:d("./addEventListener"),dispatchEvent:d("./dispatchEvent"),preventDefault:d("./preventDefault"),removeEventListener:d("./removeEventListener"),stop:d("./stop"),stopPropagation:d("./stopPropagation"),target:d("./target")}
},{"./addEventListener":222,"./dispatchEvent":223,"./preventDefault":230,"./removeEventListener":231,"./stop":233,"./stopPropagation":234,"./target":235}],225:[function(d,g,f){arguments[4][6][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":226,"./shared/prefixHelper":227,"./shared/windowFallbackEventTypes":228,"./utils/eventTypeAvailable":229,dup:6}],226:[function(d,g,f){arguments[4][7][0].apply(f,arguments)
},{dup:7}],227:[function(d,g,f){arguments[4][8][0].apply(f,arguments)},{dup:8}],228:[function(d,g,f){arguments[4][9][0].apply(f,arguments)
},{dup:9}],229:[function(d,g,f){arguments[4][10][0].apply(f,arguments)},{dup:10}],230:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],231:[function(l,k,m){var h=l("./utils/removeEventListener");
var i=l("./shared/getEventType");k.exports=function j(a,c,b,d){c=i(a,c);return h(a,c,b,d)
}},{"./shared/getEventType":232,"./utils/removeEventListener":238}],232:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"@marcom/ac-prefixer/getEventType":225}],233:[function(l,j,h){var i=l("./stopPropagation");
var m=l("./preventDefault");j.exports=function k(a){a=a||window.event;i(a);m(a);
a.stopped=true;a.returnValue=false}},{"./preventDefault":230,"./stopPropagation":234}],234:[function(i,h,f){h.exports=function g(a){a=a||window.event;
if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}}},{}],235:[function(f,i,g){i.exports=function h(a){a=a||window.event;
return(typeof a.target!=="undefined")?a.target:a.srcElement}},{}],236:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],237:[function(f,i,g){f("@marcom/ac-polyfills/CustomEvent");
i.exports=function h(a,b,c){var d;if(a.dispatchEvent){if(c){d=new CustomEvent(b,c)
}else{d=new CustomEvent(b)}a.dispatchEvent(d)}else{d=document.createEventObject();
if(c&&"detail" in c){d.detail=c.detail}a.fireEvent("on"+b,d)}return a}},{"@marcom/ac-polyfills/CustomEvent":undefined}],238:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,!!d)
}else{a.detachEvent("on"+c,b)}return a}},{}],239:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b=1;if(a){b=g(c).width/c.offsetWidth}return{width:c.scrollWidth*b,height:c.scrollHeight*b}
}},{"./utils/getBoundingClientRect":249}],240:[function(d,g,f){arguments[4][81][0].apply(f,arguments)
},{"./utils/getBoundingClientRect":249,dup:81}],241:[function(n,m,o){var q=n("./getDimensions");
var p=n("./utils/getBoundingClientRect");var j=n("./getScrollX");var k=n("./getScrollY");
m.exports=function l(d,f){var b;var g;var a;var c;if(f){b=p(d);g=j();a=k();return{top:b.top+a,right:b.right+g,bottom:b.bottom+a,left:b.left+g}
}c=q(d,f);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height};while((d=d.offsetParent)){b.top+=d.offsetTop;
b.left+=d.offsetLeft}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}
}},{"./getDimensions":240,"./getScrollX":245,"./getScrollY":246,"./utils/getBoundingClientRect":249}],242:[function(m,k,h){var i=m("./getDimensions");
var j=m("./getPixelsInViewport");k.exports=function l(b,a){var c=j(b,a);var d=i(b,a).height;
return(c/d)}},{"./getDimensions":240,"./getPixelsInViewport":243}],243:[function(k,j,g){var h=k("./getViewportPosition");
j.exports=function i(d,a){var b=document.documentElement.clientHeight;var f=h(d,a);
var c;if(f.top>=b||f.bottom<=0){return 0}c=(f.bottom-f.top);if(f.top<0){c+=f.top
}if(f.bottom>b){c-=f.bottom-b}return c}},{"./getViewportPosition":247}],244:[function(l,k,m){var i=l("./getDimensions");
var h=l("./utils/getBoundingClientRect");k.exports=function j(d,a){var b;var f;
var c;if(a){b=h(d);if(d.offsetParent){f=h(d.offsetParent);b.top-=f.top;b.left-=f.left
}}else{c=i(d,a);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height}
}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}}},{"./getDimensions":240,"./utils/getBoundingClientRect":249}],245:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageXOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollLeft}},{}],246:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageYOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollTop}},{}],247:[function(n,m,o){var l=n("./getPagePosition");
var p=n("./utils/getBoundingClientRect");var q=n("./getScrollX");var j=n("./getScrollY");
m.exports=function k(c,f){var d;var a;var b;if(f){d=p(c);return{top:d.top,right:d.right,bottom:d.bottom,left:d.left}
}d=l(c);a=q();b=j();return{top:d.top-b,right:d.right-a,bottom:d.bottom-b,left:d.left-a}
}},{"./getPagePosition":241,"./getScrollX":245,"./getScrollY":246,"./utils/getBoundingClientRect":249}],248:[function(h,l,i){var j=h("./getPixelsInViewport");
var m=h("./getPercentInViewport");l.exports=function k(b,a,d){var c;d=d||0;if(typeof d==="string"&&d.slice(-2)==="px"){d=parseInt(d,10);
c=j(b,a)}else{c=m(b,a)}return(c>0&&c>=d)}},{"./getPercentInViewport":242,"./getPixelsInViewport":243}],249:[function(d,g,f){arguments[4][82][0].apply(f,arguments)
},{dup:82}],250:[function(d,g,f){arguments[4][83][0].apply(f,arguments)},{"./getStyleProperty":251,"./getStyleValue":252,"./shared/stylePropertyCache":255,dup:83}],251:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"./shared/getStyleTestElement":253,"./shared/prefixHelper":254,"./shared/stylePropertyCache":255,"./utils/toCSS":258,"./utils/toDOM":259,dup:84}],252:[function(d,g,f){arguments[4][85][0].apply(f,arguments)
},{"./getStyleProperty":251,"./shared/prefixHelper":254,"./shared/stylePropertyCache":255,"./shared/styleValueAvailable":256,dup:85}],253:[function(d,g,f){arguments[4][86][0].apply(f,arguments)
},{dup:86}],254:[function(d,g,f){arguments[4][8][0].apply(f,arguments)},{dup:8}],255:[function(d,g,f){arguments[4][88][0].apply(f,arguments)
},{dup:88}],256:[function(d,g,f){arguments[4][89][0].apply(f,arguments)},{"./getStyleTestElement":253,"./stylePropertyCache":255,dup:89}],257:[function(d,g,f){arguments[4][90][0].apply(f,arguments)
},{dup:90}],258:[function(d,g,f){arguments[4][91][0].apply(f,arguments)},{dup:91}],259:[function(d,g,f){arguments[4][92][0].apply(f,arguments)
},{dup:92}],260:[function(d,g,f){g.exports={getStyle:d("./getStyle"),setStyle:d("./setStyle")}
},{"./getStyle":261,"./setStyle":263}],261:[function(d,g,f){arguments[4][93][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":251,"@marcom/ac-prefixer/stripPrefixes":257,dup:93}],262:[function(d,g,f){arguments[4][94][0].apply(f,arguments)
},{dup:94}],263:[function(d,g,f){arguments[4][95][0].apply(f,arguments)},{"./internal/normalizeValue":262,"@marcom/ac-prefixer/getStyleCSS":250,"@marcom/ac-prefixer/getStyleProperty":251,dup:95}],264:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":265,dup:169}],265:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],266:[function(f,i,g){i.exports=function h(c,a){var b=null;return function(){if(b===null){c.apply(this,arguments);
b=setTimeout(function(){b=null},a)}}}},{}],267:[function(d,g,f){arguments[4][106][0].apply(f,arguments)
},{"./extend":269,"@marcom/ac-polyfills/Array/isArray":undefined,dup:106}],268:[function(d,g,f){arguments[4][107][0].apply(f,arguments)
},{dup:107}],269:[function(d,g,f){arguments[4][108][0].apply(f,arguments)},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],270:[function(d,g,f){arguments[4][109][0].apply(f,arguments)
},{"./ac-page-visibility/PageVisibilityManager":271,dup:109}],271:[function(d,g,f){arguments[4][110][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":264,"@marcom/ac-object/create":268,dup:110}],272:[function(n,m,i){var l=n("./ac-browser/BrowserData");
var j=/applewebkit/i;var k=n("./ac-browser/IE");var o=l.create();o.isWebKit=function(b){var a=b||window.navigator.userAgent;
return a?!!j.test(a):false};o.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(o.name==="IE"){o.IE={documentMode:k.getDocumentMode()}}m.exports=o},{"./ac-browser/BrowserData":273,"./ac-browser/IE":274}],273:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.filter");
g("@marcom/ac-polyfills/Array/prototype.some");var j=g("./data");function i(){}i.prototype={__getBrowserVersion:function(c,b){var d;
if(!c||!b){return}var a=j.browser.filter(function(f){return f.identity===b});a.some(function(f){var o=f.versionSearch||b;
var n=c.indexOf(o);if(n>-1){d=parseFloat(c.substring(n+o.length+1));return true
}});return d},__getName:function(a){return this.__getIdentityStringFromArray(a)
},__getIdentity:function(a){if(a.string){return this.__matchSubString(a)}else{if(a.prop){return a.identity
}}},__getIdentityStringFromArray:function(d){for(var a=0,c=d.length,b;a<c;a++){b=this.__getIdentity(d[a]);
if(b){return b}}},__getOS:function(a){return this.__getIdentityStringFromArray(a)
},__getOSVersion:function(d,a){if(!d||!a){return}var b=j.os.filter(function(l){return l.identity===a
})[0];var m=b.versionSearch||a;var c=new RegExp(m+" ([\\d_\\.]+)","i");var f=d.match(c);
if(f!==null){return f[1].replace(/_/g,".")}},__matchSubString:function(b){var c=b.subString;
if(c){var a=c.test?!!c.test(b.string):b.string.indexOf(c)>-1;if(a){return b.identity
}}}};i.create=function(){var b=new i();var a={};a.name=b.__getName(j.browser);a.version=b.__getBrowserVersion(j.versionString,a.name);
a.os=b.__getOS(j.os);a.osVersion=b.__getOSVersion(j.versionString,a.os);return a
};k.exports=i},{"./data":275,"@marcom/ac-polyfills/Array/prototype.filter":undefined,"@marcom/ac-polyfills/Array/prototype.some":undefined}],274:[function(d,g,f){g.exports={getDocumentMode:function(){var a;
if(document.documentMode){a=parseInt(document.documentMode,10)}else{a=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){a=7
}}}return a}}},{}],275:[function(d,g,f){g.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],276:[function(d,g,f){g.exports={PointerTracker:d("./ac-pointer-tracker/PointerTracker")}
},{"./ac-pointer-tracker/PointerTracker":277}],277:[function(z,A,w){var o=z("@marcom/ac-browser");
var q=z("@marcom/ac-dom-events");var r=z("@marcom/ac-dom-styles");var u=z("@marcom/ac-object/create");
var y=o.os==="Android"||(o.name==="IE"&&o.version<=8);var s=z("@marcom/ac-feature/touchAvailable")();
var p=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;function x(b,a,c){this._el=b;
c=c||{};this._lockVertical=c.lockVertical!==false;this._swipeThreshold=c.swipeThreshold||x.DEFAULT_SWIPE_THRESHOLD;
this._pointerEvents=a||{};this._trackHover=c.trackHover;if(!this._trackHover){this._pointerEvents.down=this._pointerEvents.down||((s)?x.TOUCH_EVENTS.down:x.MOUSE_EVENTS.down);
this._pointerEvents.up=this._pointerEvents.up||((s)?x.TOUCH_EVENTS.up:x.MOUSE_EVENTS.up)
}else{this._pointerEvents.down=this._pointerEvents.down||x.MOUSE_EVENTS.over;this._pointerEvents.up=this._pointerEvents.up||x.MOUSE_EVENTS.out
}this._pointerEvents.out=this._pointerEvents.out||((s)?x.TOUCH_EVENTS.out:x.MOUSE_EVENTS.out);
this._pointerEvents.move=this._pointerEvents.move||((s)?x.TOUCH_EVENTS.move:x.MOUSE_EVENTS.move);
this._onMouseDown=this._onMouseDown.bind(this);this._onMouseUp=this._onMouseUp.bind(this);
this._onMouseOut=this._onMouseOut.bind(this);this._onMouseMove=this._onMouseMove.bind(this);
p.call(this);q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
this._setCursorStyle("grab")}x.START="start";x.END="end";x.UPDATE="update";x.SWIPE_RIGHT="swiperight";
x.SWIPE_LEFT="swipeleft";x.DEFAULT_SWIPE_THRESHOLD=(y)?2:8;x.TOUCH_EVENTS={down:"touchstart",up:"touchend",out:"mouseout",move:"touchmove"};
x.MOUSE_EVENTS={down:"mousedown",up:"mouseup",out:"mouseout",move:"mousemove",over:"mouseover"};
var t=p.prototype;var v=x.prototype=u(t);v.destroy=function(){if(this._isDragging){this._onMouseUp()
}q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);this._setCursorStyle(null);
this._el=null;this._pointerEvents=null;this._lockVertical=null;this._swipeThreshold=null;
this._checkForTouchScrollY=null;this._isDragging=null;this._currentX=null;this._currentY=null;
this._velocityX=null;this._velocityY=null;this._lastX=null;this._lastY=null;return t.destroy.call(this)
};v._onMouseDown=function(b){if(this._isDragging){return}this._isDragging=true;
this._setCursorStyle("grabbing");q.removeEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.addEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.addEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.addEventListener(document.body,this._pointerEvents.move,this._onMouseMove);this._checkForTouchScrollY=this._lockVertical&&!!(b.touches&&b.touches[0]);
if(this._checkForTouchScrollY){this._lastY=this._getTouchY(b)}var a=this._storeAndGetValues(b);
this._velocityX=a.diffX=0;this._velocityY=a.diffY=0;this.trigger(x.START,a)};v._onMouseUp=function(c){if(!this._isDragging){return
}this._isDragging=false;this._setCursorStyle("grab");q.addEventListener(this._el,this._pointerEvents.down,this._onMouseDown);
q.removeEventListener(document.body,this._pointerEvents.up,this._onMouseUp);q.removeEventListener(document,this._pointerEvents.out,this._onMouseOut);
q.removeEventListener(document.body,this._pointerEvents.move,this._onMouseMove);
var a;if(this._checkForTouchScrollY||this._trackHover){a=null}else{if(this._velocityX>this._swipeThreshold){a=x.SWIPE_LEFT
}else{if((this._velocityX*-1)>this._swipeThreshold){a=x.SWIPE_RIGHT}}}var b=this._storeAndGetValues(c);
b.swipe=a;this.trigger(x.END,b);if(a&&!this._trackHover){this.trigger(a,b)}};v._onMouseOut=function(b){b=(b)?b:window.event;
var a=b.relatedTarget||b.toElement;if(!a||a.nodeName==="HTML"){this._onMouseUp(b)
}};v._onMouseMove=function(a){if(this._checkForTouchScrollY&&this._isVerticalTouchMove(a)){this._onMouseUp(a);
return}q.preventDefault(a);this.trigger(x.UPDATE,this._storeAndGetValues(a))};v._storeAndGetValues=function(b){if(b===undefined){return{}
}this._currentX=this._getPointerX(b);this._currentY=this._getPointerY(b);this._velocityX=this._lastX-this._currentX;
this._velocityY=this._lastY-this._currentY;var a={x:this._currentX,y:this._currentY,lastX:this._lastX,lastY:this._lastY,diffX:this._velocityX,diffY:this._velocityY,interactionEvent:b};
this._lastX=this._currentX;this._lastY=this._currentY;return a};v._getPointerX=function(a){if(a.pageX){return a.pageX
}else{if(a.touches&&a.touches[0]){return a.touches[0].pageX}else{if(a.clientX){return a.clientX
}}}return 0};v._getPointerY=function(a){if(a.pageY){return a.pageY}else{if(a.touches&&a.touches[0]){return a.touches[0].pageY
}else{if(a.clientY){return a.clientY}}}return 0};v._getTouchX=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageX
}return 0};v._getTouchY=function(a){if(a.touches&&a.touches[0]){return a.touches[0].pageY
}return 0};v._isVerticalTouchMove=function(d){var f=this._getTouchX(d);var a=this._getTouchY(d);
var b=Math.abs(f-this._lastX);var c=Math.abs(a-this._lastY);this._checkForTouchScrollY=(b<c);
return this._checkForTouchScrollY};v._setCursorStyle=function(a){r.setStyle(this._el,{cursor:a})
};A.exports=x},{"@marcom/ac-browser":272,"@marcom/ac-dom-events":224,"@marcom/ac-dom-styles":260,"@marcom/ac-event-emitter-micro":264,"@marcom/ac-feature/touchAvailable":210,"@marcom/ac-object/create":268}],278:[function(d,g,f){arguments[4][111][0].apply(f,arguments)
},{dup:111}],279:[function(d,g,f){arguments[4][112][0].apply(f,arguments)},{dup:112}],280:[function(d,g,f){arguments[4][113][0].apply(f,arguments)
},{dup:113}],281:[function(d,g,f){arguments[4][114][0].apply(f,arguments)},{dup:114}],282:[function(d,g,f){arguments[4][115][0].apply(f,arguments)
},{dup:115}],283:[function(d,g,f){arguments[4][116][0].apply(f,arguments)},{dup:116}],284:[function(d,g,f){arguments[4][117][0].apply(f,arguments)
},{dup:117}],285:[function(d,g,f){arguments[4][118][0].apply(f,arguments)},{dup:118}],286:[function(d,g,f){arguments[4][119][0].apply(f,arguments)
},{dup:119}],287:[function(d,g,f){arguments[4][120][0].apply(f,arguments)},{dup:120}],288:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{dup:121}],289:[function(d,g,f){arguments[4][122][0].apply(f,arguments)},{dup:122}],290:[function(d,g,f){arguments[4][123][0].apply(f,arguments)
},{dup:123}],291:[function(d,g,f){arguments[4][124][0].apply(f,arguments)},{dup:124}],292:[function(d,g,f){arguments[4][125][0].apply(f,arguments)
},{dup:125}],293:[function(d,g,f){arguments[4][126][0].apply(f,arguments)},{dup:126}],294:[function(d,g,f){arguments[4][127][0].apply(f,arguments)
},{dup:127}],295:[function(d,g,f){arguments[4][128][0].apply(f,arguments)},{dup:128}],296:[function(d,g,f){arguments[4][129][0].apply(f,arguments)
},{dup:129}],297:[function(d,g,f){arguments[4][130][0].apply(f,arguments)},{dup:130}],298:[function(d,g,f){arguments[4][131][0].apply(f,arguments)
},{dup:131}],299:[function(d,g,f){arguments[4][132][0].apply(f,arguments)},{dup:132}],300:[function(d,g,f){arguments[4][133][0].apply(f,arguments)
},{"./ac-transform/Transform":301,dup:133}],301:[function(d,g,f){arguments[4][134][0].apply(f,arguments)
},{"./gl-matrix/mat4":302,"./gl-matrix/vec3":303,"./gl-matrix/vec4":304,dup:134}],302:[function(d,g,f){arguments[4][135][0].apply(f,arguments)
},{dup:135,"gl-mat4/clone":278,"gl-mat4/create":279,"gl-mat4/fromRotationTranslation":280,"gl-mat4/identity":281,"gl-mat4/invert":282,"gl-mat4/multiply":283,"gl-mat4/rotate":284,"gl-mat4/rotateX":285,"gl-mat4/rotateY":286,"gl-mat4/rotateZ":287,"gl-mat4/scale":288,"gl-mat4/translate":289,"gl-mat4/transpose":290}],303:[function(d,g,f){arguments[4][136][0].apply(f,arguments)
},{dup:136,"gl-vec3/create":291,"gl-vec3/cross":292,"gl-vec3/dot":293,"gl-vec3/fromValues":294,"gl-vec3/length":295,"gl-vec3/normalize":296}],304:[function(d,g,f){arguments[4][137][0].apply(f,arguments)
},{dup:137,"gl-vec4/create":297,"gl-vec4/fromValues":298,"gl-vec4/transformMat4":299}],305:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var i=l("@marcom/ac-feature/cssPropertyAvailable");k.exports=function j(d,a,b,c,f){if(i("opacity")){f=f||{};
if(c){f.autoplay=(f.autoplay===false)?f.autoplay:true;f.propsFrom=f.propsFrom||{};
f.propsFrom.opacity=a;if(f.autoplay){return m.to(d,c,{opacity:b},f)}return new m(d,c,{opacity:b},f)
}d.style.opacity=b;if(typeof f.onStart==="function"){f.onStart()}if(typeof f.onComplete==="function"){f.onComplete()
}}else{d.style.visibility=(b)?"visible":"hidden";if(typeof f.onStart==="function"){f.onStart()
}if(typeof f.onComplete==="function"){f.onComplete()}}}},{"@marcom/ac-eclipse":140,"@marcom/ac-feature/cssPropertyAvailable":195}],306:[function(k,j,m){var l=k("@marcom/ac-eclipse").Clip;
var h=k("@marcom/ac-feature/cssPropertyAvailable");j.exports=function i(c,b,d){var a=1;
d=d||{};if(h("opacity")){if(b){d.autoplay=(d.autoplay===false)?d.autoplay:true;
if(d.autoplay){return l.to(c,b,{opacity:a},d)}return new l(c,b,{opacity:a},d)}c.style.opacity=a;
if(typeof d.onStart==="function"){d.onStart()}if(typeof d.onComplete==="function"){d.onComplete()
}}else{c.style.visibility="visible";if(typeof d.onStart==="function"){d.onStart()
}if(typeof d.onComplete==="function"){d.onComplete()}}}},{"@marcom/ac-eclipse":140,"@marcom/ac-feature/cssPropertyAvailable":195}],307:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var i=l("@marcom/ac-feature/cssPropertyAvailable");k.exports=function j(c,b,d){var a=0;
d=d||{};if(i("opacity")){if(b){d.autoplay=(d.autoplay===false)?d.autoplay:true;
if(d.autoplay){return m.to(c,b,{opacity:a},d)}return new m(c,b,{opacity:a},d)}c.style.opacity=a;
if(typeof d.onStart==="function"){d.onStart()}if(typeof d.onComplete==="function"){d.onComplete()
}}else{c.style.visibility="hidden";if(typeof d.onStart==="function"){d.onStart()
}if(typeof d.onComplete==="function"){d.onComplete()}}}},{"@marcom/ac-eclipse":140,"@marcom/ac-feature/cssPropertyAvailable":195}],308:[function(l,k,h){var m=l("@marcom/ac-eclipse").Clip;
var j=l("@marcom/ac-dom-styles");k.exports=function i(c,g,p,b,d){d=d||{};d.autoplay=(d.autoplay===false)?d.autoplay:true;
var f=d.onStart||null;var q=d.onComplete||null;var a;a={transform:{translateX:g+"px",translateY:p+"px"}};
if(b){d.onStart=function(){c.style.willChange="transform";if(f!==null){f.call(this)
}};d.onComplete=function(){c.style.willChange="";if(q!==null){q.call(this)}};if(d.autoplay){return m.to(c,b,a,d)
}return new m(c,b,a,d)}j.setStyle(c,a);if(typeof d.onStart==="function"){d.onStart()
}if(typeof d.onComplete==="function"){d.onComplete()}}},{"@marcom/ac-dom-styles":260,"@marcom/ac-eclipse":140}],309:[function(m,l,i){var n=m("@marcom/ac-browser-prefixed");
var o=m("@marcom/ac-transform").Transform;var j=m("./move");l.exports=function k(b,f,a,c){var d=new o();
d.setMatrixValue(getComputedStyle(b)[n.transform]);return j(b,f,d.getTranslateY(),a,c)
}},{"./move":308,"@marcom/ac-browser-prefixed":1,"@marcom/ac-transform":300}],310:[function(j,i,g){var k=j("@marcom/ac-eclipse").Clip;
i.exports=function h(y,d,u,w,a){a=a||{};a.autoplay=(a.autoplay===false)?a.autoplay:true;
var x=y===window;var b;var f;if(x){b=y.pageXOffset;f=y.pageYOffset}else{b=y.scrollLeft;
f=y.scrollTop}var s={x:b,y:f};var c={x:d,y:u};if(typeof a.onDraw==="function"){var t=a.onDraw
}var v=function(l){if(x){y.scrollTo(s.x,s.y)}else{y.scrollLeft=s.x;y.scrollTop=s.y
}if(t){t.call(this,l)}};a.onDraw=v;if(a.autoplay){return k.to(s,w,c,a)}return new k(s,w,c,a)
}},{"@marcom/ac-eclipse":140}],311:[function(k,j,g){var h=k("./scroll");j.exports=function i(b,m,a,c){var d=b===window;
var f;if(d){f=b.pageYOffset}else{f=b.scrollTop}return h(b,m,f,a,c)}},{"./scroll":310}],312:[function(v,w,s){var t=v("@marcom/ac-classlist");
var o=v("./singletons/analyticsManager");var q=v("@marcom/ac-object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var u=v("./Item");function p(a){a=a||{};this._wrapAround=a.wrapAround||false;this._itemType=a.itemType||u;
this._items=[];this._itemsIdLookup={};this.showNext=this.showNext.bind(this);this.showPrevious=this.showPrevious.bind(this);
this._update=this._update.bind(this);this._updateItems=this._updateItems.bind(this);
m.call(this);if(a.startAt){this._startAt(a.startAt)}p._add(this,a.analyticsOptions)
}p.FADE="fade";p.FADE_SELECTOR="[data-ac-gallery-fade]";p.SLIDE="slide";p.SLIDE_SELECTOR="[data-ac-gallery-slide]";
p.UPDATE="update";p.UPDATE_COMPLETE="update:complete";var n=m.prototype;var r=p.prototype=q(n);
r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)}else{if(this._items.indexOf(b)>-1){return b
}}if(typeof a==="number"){this._items.splice(a,0,b)}else{this._items.push(b)}if(this._items.length===1){b.show();
this._setCurrentItem(b)}else{b.hide();if(this.getNextItem()===b){this._setNextItem(b)
}if(this.getPreviousItem()===b){this._setPreviousItem(b)}}if(b.getElementId()!==null){this._itemsIdLookup[b.getElementId()]=b
}b.on(u.SELECTED,this._update);return b};r.removeItem=function(b,c){c=c||{};if(typeof b==="number"){b=this._items[b]
}var d=this._items.indexOf(b);if(d>-1){var a=this.getNextItem();var f=this.getPreviousItem();
this._items.splice(d,1);b.off(u.SELECTED,this._update);if(a===b){this._setNextItem(this.getNextItem())
}if(f===b){this._setPreviousItem(this.getPreviousItem())}}if(b===this._currentItem&&this._items.length&&c.setCurrentItem!==false){this._update({item:this._items[0]});
this._setLastItem(null)}if(c.destroyItem&&b.getElement()){b.destroy()}return b};
r.show=function(b,a){if(typeof b==="number"){b=this._items[b]}else{if(typeof b==="string"){b=this._itemsIdLookup[b]
}}if(b){a=a||{};this._update({item:b,interactionEvent:a.interactionEvent})}return b||null
};r.showNext=function(a){var b=this.getNextItem();if(b){this.show(b,a)}return b
};r.showPrevious=function(a){var b=this.getPreviousItem();if(b){this.show(b,a)}return b
};r.isInView=function(){return this._currentItem&&this._currentItem.isInView()};
r.getTotalItems=function(){return this._items.length};r.getItems=function(){return this._items
};r.getItem=function(a){if(typeof a==="number"){return this.getItemAt(a)}else{if(typeof a==="string"){return this.getItemById(a)
}}};r.getItemAt=function(a){return this._items[a]||null};r.getItemById=function(a){return this._itemsIdLookup[a]||null
};r.getItemIndex=function(a){return this._items.indexOf(a)};r.getCurrentItem=function(){return this._currentItem||null
};r.getLastItem=function(){return this._lastItem||null};r.getNextItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a<this._items.length-1){b=this._items[a+1]
}else{if(this._wrapAround){b=this._items[0]}}return b||null};r.getPreviousItem=function(){var b;
var a=this._items.indexOf(this._currentItem);if(a>0){b=this._items[a-1]}else{if(this._wrapAround){b=this._items[this._items.length-1]
}}return b||null};r.getId=function(){return this._id};r.destroy=function(a){a=a||{};
if(a.destroyItems===undefined){a.destroyItems=true}this._setCurrentItem(null);if(a.destroyItems){var b;
while(this._items.length){b=this._items[0];b.off(u.SELECTED,this._update);this.removeItem(b,{destroyItem:true,setCurrentItem:false})
}}this._items=null;this._itemsIdLookup=null;p._remove(this);return n.destroy.call(this)
};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.hide();
this._setCurrentItem(b);this._currentItem.show();this.trigger(p.UPDATE,this._items)
}};r._setCurrentItem=function(a){if(this._currentItem&&this._currentItem.getElement()&&this._currentItem!==a){t.remove(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setLastItem(this._currentItem)}this._currentItem=a;if(this._currentItem&&this._currentItem.getElement()){t.add(this._currentItem.getElement(),u.CSS_CURRENT_ITEM);
this._setNextItem(this.getNextItem());this._setPreviousItem(this.getPreviousItem())
}};r._setLastItem=function(a){if(this._lastItem&&this._lastItem.getElement()&&this._lastItem!==a){t.remove(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}this._lastItem=a;if(this._lastItem&&this._lastItem.getElement()){t.add(this._lastItem.getElement(),u.CSS_LAST_ITEM)
}};r._setNextItem=function(a){if(this._nextItem&&this._nextItem.getElement()&&this._nextItem!==a){t.remove(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}this._nextItem=a;if(this._nextItem&&this._nextItem.getElement()){t.add(this._nextItem.getElement(),u.CSS_NEXT_ITEM)
}};r._setPreviousItem=function(a){if(this._previousItem&&this._previousItem.getElement()&&this._previousItem!==a){t.remove(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}this._previousItem=a;if(this._previousItem&&this._previousItem.getElement()){t.add(this._previousItem.getElement(),u.CSS_PREVIOUS_ITEM)
}};r._updateItems=function(b,a){if(b.outgoing[0]){b.outgoing[0].hide()}b.incoming[0].show();
if(!a){this.trigger(p.UPDATE_COMPLETE,b)}};r._update=function(a){var b=this._currentItem!==a.item;
if(b){this._setCurrentItem(a.item)}var c={incoming:[a.item],outgoing:(this._lastItem)?[this._lastItem]:[],interactionEvent:a.interactionEvent||null};
if(b){this.trigger(p.UPDATE,c)}this._updateItems(c,!b)};p._instantiate=function(){this._galleries=[];
this._idCounter=0;return this};p._add=function(b,a){this._galleries.push(b);b._id=++this._idCounter;
o.add(b,a)};p._remove=function(a){var b=this._galleries.indexOf(a);if(b>-1){this._galleries.splice(b,1);
o.remove(a)}};p.getAll=function(){return Array.prototype.slice.call(this._galleries)
};p.getAllInView=function(){var b=[];var a=this._galleries.length;while(a--){if(this._galleries[a].isInView()){b.push(this._galleries[a])
}}return b};p.destroyAll=function(){var a=this._galleries.length;while(a--){this._galleries[a].destroy()
}this._galleries=[]};w.exports=p._instantiate()},{"./Item":313,"./singletons/analyticsManager":327,"@marcom/ac-classlist":219,"@marcom/ac-event-emitter-micro":264,"@marcom/ac-object/create":268}],313:[function(z,J,t){var I=z("@marcom/ac-classlist");
var D=z("@marcom/ac-dom-events/addEventListener");var B=z("@marcom/ac-dom-events/removeEventListener");
var A=z("@marcom/ac-dom-events/preventDefault");var E=z("@marcom/ac-dom-metrics/isInViewport");
var K=z("@marcom/ac-dom-metrics/getPercentInViewport");var u=z("@marcom/ac-dom-traversal/querySelectorAll");
var y=z("@marcom/ac-object/create");var F=z("./singletons/tabManager");var v=z("@marcom/ac-keyboard/keyMap");
var x=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;var G=z("@marcom/ac-keyboard");
var C="current";function H(a,b){this._el=a;b=b||{};this._triggerKeys=[];this._triggerEls={};
this._isShown=false;this._isACaption=(b.isACaption===undefined)?false:b.isACaption;
this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);this._onTriggered=this._onTriggered.bind(this);
if(!this._isACaption){this._el.setAttribute("role","tabpanel")}this._focusableEls=u(F.focusableSelectors,a);
x.call(this)}H.CSS_CURRENT_ITEM="ac-gallery-currentitem";H.CSS_LAST_ITEM="ac-gallery-lastitem";
H.CSS_NEXT_ITEM="ac-gallery-nextitem";H.CSS_PREVIOUS_ITEM="ac-gallery-previousitem";
H.SELECTED="selected";H.SHOW="show";H.HIDE="hide";var w=H.prototype=y(x.prototype);
w.show=function(){this._isShown=true;this._addCurrentClassToTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this.trigger(H.SHOW,this)};w.hide=function(){this._isShown=false;
this._removeCurrentClassFromTriggers();this._setTabIndexOnFocusableItems("-1");
this._el.setAttribute("aria-hidden","true");this.trigger(H.HIDE,this)};w.addElementTrigger=function(b,c){c=c||"click";
if(this._triggerEls[c]===undefined){this._triggerEls[c]=[]}var d=this._triggerEls[c].indexOf(b);
if(d<0){b.setAttribute("role","tab");b.setAttribute("tabindex","0");var a=this.getElementId();
if(a){b.setAttribute("aria-controls",a)}a=b.getAttribute("id");if(a&&this._el.getAttribute("aria-labelledby")===null){this._el.setAttribute("aria-labelledby",a)
}D(b,c,this._onTriggered);this._triggerEls[c].push(b);if(this._isShown){b.setAttribute("aria-selected","true");
I.add(b,C)}else{b.setAttribute("aria-selected","false")}}};w.removeElementTrigger=function(a,b){b=b||"click";
if(this._triggerEls[b]===undefined){return}var c=this._triggerEls[b].indexOf(a);
if(c>-1){this._cleanElementTrigger(a,b)}if(this._triggerEls[b].length===0){this._triggerEls[b]=undefined
}};w.addKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);
if(b<0){G.onDown(a,this._onKeyboardInteraction);this._triggerKeys.push(a)}}};w.removeKeyTrigger=function(a){if(typeof a==="string"){a=v[a.toUpperCase()]
}if(typeof a==="number"){var b=this._triggerKeys.indexOf(a);if(b>-1){G.offDown(a,this._onKeyboardInteraction);
this._triggerKeys.splice(b,1)}}};w.removeAllTriggers=function(){var c;var d=this._triggerKeys.length;
while(d--){c=this._triggerKeys[d];G.offDown(c,this._onKeyboardInteraction)}this._triggerKeys=[];
var a;var b;for(b in this._triggerEls){d=this._triggerEls[b].length;while(d--){a=this._triggerEls[b][d];
this._cleanElementTrigger(a,b)}}this._triggerEls={}};w.isInView=function(){if(this._el){return E(this._el)
}return false};w.percentageInView=function(){if(this._el){return K(this._el)}return 0
};w.getElement=function(){return this._el};w.getElementId=function(){if(this._elId!==undefined){return this._elId
}this._elId=this._el.getAttribute("id")||null;return this._elId};w.destroy=function(){if(this._isShown){this._isShown=null;
I.remove(this._el,H.CSS_CURRENT_ITEM,H.CSS_LAST_ITEM,H.CSS_NEXT_ITEM,H.CSS_PREVIOUS_ITEM);
this._removeCurrentClassFromTriggers()}this.removeAllTriggers();this._setTabIndexOnFocusableItems(null);
this._el.removeAttribute("aria-hidden");this._el.removeAttribute("role");this._el.removeAttribute("aria-labelledby");
this._isACaption=null;this._triggerKeys=null;this._triggerEls=null;this._el=null
};w._addCurrentClassToTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","true");I.add(a,C)
}}};w._removeCurrentClassFromTriggers=function(){var a;var b;var c;for(b in this._triggerEls){c=this._triggerEls[b].length;
while(c--){a=this._triggerEls[b][c];a.setAttribute("aria-selected","false");I.remove(a,C)
}}};w._cleanElementTrigger=function(a,b){a.removeAttribute("aria-selected");a.removeAttribute("role");
a.removeAttribute("tabindex");a.removeAttribute("aria-controls");B(a,b,this._onTriggered);
if(this._isShown){I.remove(a,C)}};w._onKeyboardInteraction=function(a){if(this.isInView()){this._onTriggered(a)
}};w._setTabIndexOnFocusableItems=function(c){var d=c===null;var a=[];this._currentTabbableEls=this._currentTabbableEls||F.getTabbable(this._focusableEls);
if(!d){a=F.getTabbable(this._focusableEls);this._currentTabbableEls=a}var b=this._currentTabbableEls.length;
while(b--){if(d){this._currentTabbableEls[b].removeAttribute("tabindex")}else{this._currentTabbableEls[b].setAttribute("tabindex",c)
}}};w._onTriggered=function(a){A(a);this.trigger(H.SELECTED,{item:this,interactionEvent:a})
};J.exports=H},{"./singletons/tabManager":328,"@marcom/ac-classlist":219,"@marcom/ac-dom-events/addEventListener":222,"@marcom/ac-dom-events/preventDefault":230,"@marcom/ac-dom-events/removeEventListener":231,"@marcom/ac-dom-metrics/getPercentInViewport":242,"@marcom/ac-dom-metrics/isInViewport":248,"@marcom/ac-dom-traversal/querySelectorAll":50,"@marcom/ac-event-emitter-micro":264,"@marcom/ac-keyboard":437,"@marcom/ac-keyboard/keyMap":439,"@marcom/ac-object/create":268}],314:[function(t,w,r){var q=t("./helpers/extendProto");
var o=t("./Gallery");var v=t("./auto/AutoGallery");var p=t("./fade/FadeGallery");
var m=t("./fade/FadeItem");var u=t("./slide/SlideGallery");var n=t("./slide/SlideItem");
var s=t("./Item");o.create=t("./factories/create");o.autoCreate=t("./factories/autoCreate");
o.extend=q;v.extend=q;p.extend=q;m.extend=q;u.extend=q;n.extend=q;s.extend=q;w.exports={Gallery:o,AutoGallery:v,FadeGallery:p,FadeGalleryItem:m,SlideGallery:u,SlideGalleryItem:n,Item:s,ToggleNav:t("./navigation/ToggleNav")}
},{"./Gallery":312,"./Item":313,"./auto/AutoGallery":316,"./factories/autoCreate":317,"./factories/create":318,"./fade/FadeGallery":319,"./fade/FadeItem":320,"./helpers/extendProto":321,"./navigation/ToggleNav":326,"./slide/SlideGallery":329,"./slide/SlideItem":330}],315:[function(j,p,k){var l;
try{l=j("ac-analytics").observer.Gallery}catch(m){}var n="data-analytics-gallery-id";
function q(){this._observers={}}var o=q.prototype;o.add=function(d,b){var a=d.getId();
if(!l||this._observers[a]){return}b=b||{};if(!b.galleryName){b.galleryName=this._getAnalyticsId(d,b.dataAttribute)||a
}if(!b.beforeUpdateEvent){b.beforeUpdateEvent="update"}if(!b.afterUpdateEvent){b.afterUpdateEvent="update:complete"
}var c=new l(d,b);if(c.gallery){this._observers[a]=c}};o.remove=function(b){var a=b.getId();
if(!l||!this._observers[a]){return}if(typeof this._observers[a].destroy==="function"){this._observers[a].destroy()
}this._observers[a]=null};o._getAnalyticsId=function(c,b){if(typeof c.getElement==="function"){b=b||n;
var a=c.getElement();return a.getAttribute(b)||a.getAttribute("id")}return null
};p.exports=q},{"ac-analytics":undefined}],316:[function(ad,ap,N){ad("@marcom/ac-polyfills/requestAnimationFrame");
var ao=ad("@marcom/ac-classlist");var ai=ad("@marcom/ac-dom-events/addEventListener");
var af=ad("@marcom/ac-dom-events/removeEventListener");var ae=ad("@marcom/ac-dom-events/preventDefault");
var Q=ad("@marcom/ac-dom-styles");var al=ad("@marcom/ac-dom-traversal/querySelector");
var U=ad("@marcom/ac-dom-traversal/querySelectorAll");var aa=ad("@marcom/ac-object/create");
var S=ad("@marcom/ac-dom-metrics/getContentDimensions");var O=ad("@marcom/ac-keyboard/keyMap");
var W=ad("./../helpers/selectElementFromDataAttributeValue");var ac=ad("./../helpers/selectElementThatHasDataAttribute");
var ag=ad("./../helpers/inputHasFocus");var aj=ad("@marcom/ac-function/throttle");
var ah=ad("@marcom/ac-feature/touchAvailable");var V=ad("./../Gallery");var an=ad("@marcom/ac-keyboard");
var K=ad("@marcom/ac-page-visibility").PageVisibilityManager;var ak=ad("@marcom/ac-pointer-tracker").PointerTracker;
var R=ad("./../navigation/ToggleNav");var ab="disabled";var J=3;var am=0.5;var M="[data-ac-gallery-item]";
var Y=0.12;var Z=ad("../templates/paddlenav.js");var P="No element supplied.";var L='Container element needed when autoPlay is on. Use the "container" option when you instantiate your gallery.';
function X(f,a){a=a||{};if(!f||f.nodeType===undefined){throw new Error(P)}this._el=f;
V.call(this,a);this._itemHeights=[];this._itemHeightsLookup={};this._toggleNavDuration=a.toggleNavDuration;
this._isRightToLeft=(a.rightToLeft===undefined)?Q.getStyle(f,"direction").direction==="rtl":a.rightToLeft;
this._keyboardThrottleDelay=((a.keyboardThrottleDelay===undefined)?Y:a.keyboardThrottleDelay)*1000;
this._resizeContainer=!!a.resizeContainer;this._setUpContainerAutoResize(a.resizeContainerOnUpdate);
this._createToggleNav();this._addPaddleNav(a.addPaddleNav);this._isACaptionsGallery=f.getAttribute("data-ac-gallery-captions")==="";
this._addItems(a.itemSelector||M);if(!this._wrapAround){this._updatePaddleNavState()
}if(a.enableArrowKeys!==false){this._enableArrowKeys=true;this._addKeyboardListener()
}if(a.updateOnWindowResize!==false){this._onWindowResize=this._onWindowResize.bind(this);
ai(window,"resize",this._onWindowResize)}this._componentsContainer=document.getElementById(a.container);
if(a.startAt){this._startAt(a.startAt)}this.stopAutoPlay=this.stopAutoPlay.bind(this);
if(a.autoPlay){if(!this._componentsContainer){throw new Error(L)}var b=(typeof a.autoPlay==="number")?a.autoPlay:J;
this.startAutoPlay(b)}if(a.deeplink!==false){var d=this._getDeeplinkedItem();if(d&&d!==this._currentItem){this.show(d)
}}if(this._containerResizeDuration!==false){var c=this._itemHeightsLookup[this._currentItem.getElementId()];
if(c){this._setElHeight(c)}}if(this._toggleNav){this._toggleNav.start()}this._setUpSwiping(a.touch&&ah(),a.desktopSwipe);
if(this._componentsContainer){this._componentsContainer.setAttribute("tabIndex",-1)
}}X.RESIZED="resized";X.UPDATE=V.UPDATE;X.UPDATE_COMPLETE=V.UPDATE_COMPLETE;var aq=V.prototype;
var T=X.prototype=aa(aq);T.addItem=function(a,c){if(a.nodeType){var b=this._isACaptionsGallery;
a=new this._itemType(a,{isACaption:b})}else{if(this._items.indexOf(a)>-1){return a
}}if(this._resizeContainer){this._storeItemHeight(a,this._containerResizeDuration===false)
}this._addItemTriggers(a);return aq.addItem.call(this,a,c)};T.removeItem=function(a,b){if(this._resizeContainer){var c=this._itemHeights.length;
while(c--){if(this._itemHeights[c].item===a){this._itemHeights.splice(c,1);if(c===0&&this._itemHeights.length){this._setElHeight(this._itemHeights[0].height)
}}}}return aq.removeItem.call(this,a,b)};T.startAutoPlay=function(a,b){b=b||{};
this._isAutoPlaying=true;this._autoPlayDelay=(a||J)*1000;this._cancelAutoPlayOnInteraction=(b.cancelOnInteraction===undefined)?true:b.cancelOnInteraction;
setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay);if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}if(this._componentsContainer){ai(this._componentsContainer,"focus",this.stopAutoPlay,true);
ai(this._componentsContainer,"touchend",this.stopAutoPlay,true);ai(this._componentsContainer,"click",this.stopAutoPlay,true)
}else{throw new Error(L)}};T.stopAutoPlay=function(){this._isAutoPlaying=false;
if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)}if(this._componentsContainer){af(this._componentsContainer,"focus",this.stopAutoPlay,true);
af(this._componentsContainer,"touchend",this.stopAutoPlay,true);af(this._componentsContainer,"click",this.stopAutoPlay,true)
}};T.getElement=function(){return this._el};T.getToggleNav=function(){return this._toggleNav||null
};T.resize=function(b,c){if(this._resizeContainer){this._itemHeights=[];var a=this._items.length;
while(a--){this._storeItemHeight(this._items[a],false)}if(this._containerResizeDuration!==false){this._setElHeight(this._itemHeightsLookup[this._currentItem.getElementId()])
}else{this._setElHeight(this._itemHeights[0].height)}}if(this._toggleNav){this._toggleNav.resize()
}this.trigger(X.RESIZED,this)};T.enableKeyboard=function(){if(!this._enableArrowKeys){this._enableArrowKeys=true;
this._addKeyboardListener()}};T.disableKeyboard=function(){if(this._enableArrowKeys){this._enableArrowKeys=false;
an.offDown(O.ARROW_RIGHT,this._rightArrowFunc);an.offDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T.enableTouch=function(){if(!this._touchSwipe){this._setUpSwiping(true,false)
}};T.disableTouch=function(){if(this._touchSwipe){this._touchSwipe.off(ak.END,this._onSwipeEnd);
this._touchSwipe.destroy();this._touchSwipe=null}};T.enableDesktopSwipe=function(){if(!this._clickSwipe){this._setUpSwiping(false,true)
}};T.disableDesktopSwipe=function(){if(this._clickSwipe){this._clickSwipe.off(ak.END,this._onSwipeEnd);
this._clickSwipe.destroy();this._clickSwipe=null}};T.destroy=function(a){if(this._isAutoPlaying){this.stopAutoPlay()
}if(this._componentsContainer){af(this._componentsContainer,"focus",this.stopAutoPlay,true);
af(this._componentsContainer,"touchend",this.stopAutoPlay,true);af(this._componentsContainer,"click",this.stopAutoPlay,true)
}if(this._resizeContainer){Q.setStyle(this._el,{height:null,transition:null})}if(this._enableArrowKeys){an.offDown(O.ARROW_RIGHT,this._rightArrowFunc);
an.offDown(O.ARROW_LEFT,this._leftArrowFunc)}var b;if(this._previousButtons){b=this._previousButtons.length;
while(b--){af(this._previousButtons[b],"click",this._onPaddlePrevious)}this._setPaddleDisabledState(this._previousButtons,false)
}if(this._nextButtons){b=this._nextButtons.length;while(b--){af(this._nextButtons[b],"click",this._onPaddleNext)
}this._setPaddleDisabledState(this._nextButtons,false)}if(this._dynamicPaddleNav){this._el.removeChild(this._dynamicPaddleNav)
}if(this._hasPaddleNavStateHandler){this.off(V.UPDATE,this._updatePaddleNavState)
}this.disableTouch();this.disableDesktopSwipe();if(this._toggleNav){this._toggleNav.destroy();
this._toggleNav=null}af(window,"resize",this._onWindowResize);this._el=null;this._itemHeights=null;
this._itemHeightsLookup=null;this._resizeContainer=null;this._isRightToLeft=null;
this._enableArrowKeys=null;this._previousButtons=null;this._onPaddlePrevious=null;
this._nextButtons=null;this._onPaddleNext=null;this._isACaptionsGallery=null;this._componentsContainer=null;
return aq.destroy.call(this,a)};T._getDeeplinkedItem=function(){var a=window.location.hash.substr(1);
var b;var c=this._items.length;while(c--){b=this._items[c];if(a===b.getElementId()){return b
}}return null};T._addItems=function(b){var d;var c;var g=/(^\[).*(\]$)/.test(b);
if(g){b=b.replace(/\[|\]/g,"");c=ac(b,this._el)}else{c=U(b,this._el)}var a=0;var f=c.length;
var h=this._isACaptionsGallery;for(a;a<f;a++){d=new this._itemType(c[a],{isACaption:h});
this.addItem(d);this._addItemTriggers(d)}};T._createToggleNav=function(){var a=this._getElementId();
var c='[data-ac-gallery-togglenav="'+a+'"], [data-ac-gallery-tabnav="'+a+'"]';var b=al(c);
if(b){this._toggleNav=new R(b,this,{duration:this._toggleNavDuration})}};T._addItemTriggers=function(d,c){var a=W("data-ac-gallery-trigger",d.getElementId());
if(c&&c.length){a=a.concat(c)}var b=0;var f=a.length;for(b;b<f;b++){d.addElementTrigger(a[b]);
if(this._toggleNav){this._toggleNav.addTrigger(a[b],d)}}};T._addPaddleNav=function(g){var a;
var d=this._getElementId();if(g){var h=(typeof g==="string")?g:Z;h=h.replace(/%ID%/g,this._getElementId());
this._dynamicPaddleNav=document.createElement("div");this._dynamicPaddleNav.innerHTML=h;
this._el.insertBefore(this._dynamicPaddleNav,this._el.firstChild)}this._previousButtons=W("data-ac-gallery-previous-trigger",d);
this._nextButtons=W("data-ac-gallery-next-trigger",d);var c=this._el.getAttribute("aria-label")||"";
if(c.length){c="("+c+")"}this._onPaddlePrevious=this._onPaddleInteraction.bind(null,this.showPrevious);
a=this._previousButtons.length;if(a){var f=this._el.getAttribute("data-ac-gallery-previouslabel");
if(f&&c.length){if(this._isRightToLeft){f=c+" "+f}else{f+=" "+c}}while(a--){if(f&&this._previousButtons[a].getAttribute("aria-label")===null){this._previousButtons[a].setAttribute("aria-label",f)
}ai(this._previousButtons[a],"click",this._onPaddlePrevious)}}this._onPaddleNext=this._onPaddleInteraction.bind(null,this.showNext);
a=this._nextButtons.length;if(a){var b=this._el.getAttribute("data-ac-gallery-nextlabel");
if(b&&c.length){if(this._isRightToLeft){b=c+" "+b}else{b+=" "+c}}while(a--){if(b&&this._nextButtons[a].getAttribute("aria-label")===null){this._nextButtons[a].setAttribute("aria-label",b)
}ai(this._nextButtons[a],"click",this._onPaddleNext)}}if(this._nextButtons.length||this._previousButtons.length){this._hasPaddleNavStateHandler=true;
this._updatePaddleNavState=this._updatePaddleNavState.bind(this);this.on(V.UPDATE,this._updatePaddleNavState)
}};T._onPaddleInteraction=function(a,b){ae(b);a.call(null,{interactionEvent:b})
};T._updatePaddleNavState=function(){if(!this._wrapAround){var a=this._items.indexOf(this._currentItem);
if(a===0&&this._previousButtons.length){this._setPaddleDisabledState(this._previousButtons,true);
this._setPaddleDisabledState(this._nextButtons,false)}else{if(a===this._items.length-1&&this._nextButtons.length){this._setPaddleDisabledState(this._nextButtons,true);
this._setPaddleDisabledState(this._previousButtons,false)}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}}}else{this._setPaddleDisabledState(this._previousButtons,false);
this._setPaddleDisabledState(this._nextButtons,false)}};T._setPaddleDisabledState=function(a,c){var b=a.length;
while(b--){a[b].disabled=c;if(c){ao.add(a[b],ab)}else{ao.remove(a[b],ab)}}};T._addKeyboardListener=function(){if(this._enableArrowKeys){this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
var b;var a;if(this._isRightToLeft){b=this.showPrevious;a=this.showNext}else{b=this.showNext;
a=this.showPrevious}this._rightArrowFunc=aj(this._onKeyboardInteraction.bind(null,b),this._keyboardThrottleDelay);
this._leftArrowFunc=aj(this._onKeyboardInteraction.bind(null,a),this._keyboardThrottleDelay);
an.onDown(O.ARROW_RIGHT,this._rightArrowFunc);an.onDown(O.ARROW_LEFT,this._leftArrowFunc)
}};T._onKeyboardInteraction=function(a,b){if(this.isInView()&&!ag()){var c=V.getAllInView();
if(c.length>1){c.sort(function(d,f){d=(d._enableArrowKeys)?d.getCurrentItem().percentageInView():0;
f=(f._enableArrowKeys)?f.getCurrentItem().percentageInView():0;return f-d});if(this!==c[0]){return
}}a.call(null,{interactionEvent:b})}};T._setUpSwiping=function(a,b){this._onSwipeEnd=this._onSwipeEnd.bind(this);
if(a){this._touchSwipe=new ak(this._el,ak.TOUCH_EVENTS);this._touchSwipe.on(ak.END,this._onSwipeEnd)
}if(b){this._clickSwipe=new ak(this._el,ak.MOUSE_EVENTS);this._clickSwipe.on(ak.END,this._onSwipeEnd)
}};T._onSwipeEnd=function(b){var d;var c=b.interactionEvent;var g=c.type!=="touchend"||c.type!=="touchstart"||c.type!=="touchmove";
if(g){var f={type:"touchmove",target:c.target,srcElement:c.srcElement}}var a={interactionEvent:f||c};
if(b.swipe===ak.SWIPE_RIGHT){d=(this._isRightToLeft)?this.showNext:this.showPrevious
}else{if(b.swipe===ak.SWIPE_LEFT){d=(this._isRightToLeft)?this.showPrevious:this.showNext
}}if(d){return d.call(this,a)}c=null;return null};T._getElementId=function(){if(this._elementId===undefined){this._elementId=this._el.getAttribute("id")
}return this._elementId};T._setUpContainerAutoResize=function(a){if(typeof a==="number"){this._containerResizeDuration=a
}else{if(a){this._containerResizeDuration=am}else{this._containerResizeDuration=false
}}if(this._containerResizeDuration!==false){this._resizeContainer=true;this._updateContainerSize=this._updateContainerSize.bind(this);
this.on(V.UPDATE,this._updateContainerSize)}};T._updateContainerSize=function(a){var b=this._itemHeightsLookup[a.incoming[0].getElementId()];
if(b){this._setElHeight(b,this._containerResizeDuration)}};T._storeItemHeight=function(b,a){var c=S(b.getElement());
this._itemHeights.push({item:b,height:c.height});this._itemHeightsLookup[b.getElementId()]=c.height;
this._itemHeights.sort(function(d,f){return f.height-d.height});if(a&&this._itemHeights[0].item===b){this._setElHeight(c.height)
}};T._setElHeight=function(c,a){var b={height:c+"px"};if(a){b.transition="height "+a+"s"
}else{b.transition=null}Q.setStyle(this._el,b)};T._onAutoPlayToNextItem=function(){if(this._isAutoPlaying){if(!K.isHidden&&this._currentItem.isInView()){if(this._cancelAutoPlayOnInteraction){this.off(V.UPDATE,this.stopAutoPlay)
}var a=this.showNext();if(a!==null){if(this._cancelAutoPlayOnInteraction){this.on(V.UPDATE,this.stopAutoPlay)
}setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)}}else{setTimeout(this._onAutoPlayToNextItem.bind(this),this._autoPlayDelay)
}}};T._onWindowResize=function(a){window.requestAnimationFrame(function(){if(this._el){this.resize()
}}.bind(this))};ap.exports=X},{"../templates/paddlenav.js":332,"./../Gallery":312,"./../helpers/inputHasFocus":323,"./../helpers/selectElementFromDataAttributeValue":324,"./../helpers/selectElementThatHasDataAttribute":325,"./../navigation/ToggleNav":326,"@marcom/ac-classlist":219,"@marcom/ac-dom-events/addEventListener":222,"@marcom/ac-dom-events/preventDefault":230,"@marcom/ac-dom-events/removeEventListener":231,"@marcom/ac-dom-metrics/getContentDimensions":239,"@marcom/ac-dom-styles":260,"@marcom/ac-dom-traversal/querySelector":49,"@marcom/ac-dom-traversal/querySelectorAll":50,"@marcom/ac-feature/touchAvailable":210,"@marcom/ac-function/throttle":266,"@marcom/ac-keyboard":437,"@marcom/ac-keyboard/keyMap":439,"@marcom/ac-object/create":268,"@marcom/ac-page-visibility":270,"@marcom/ac-pointer-tracker":276,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],317:[function(q,r,p){var m=q("./create");
var k=q("./../helpers/selectElementThatHasDataAttribute");var l=q("./../Gallery");
var s=l.FADE_SELECTOR.replace(/\[|\]/g,"");var n=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
r.exports=function o(b){b=b||{};var a=b.context||document.body;var d;var c;d=k(n,a);
c=d.length;while(c--){m(d[c],l.SLIDE,b)}d=k(s,a);c=d.length;while(c--){m(d[c],l.FADE,b)
}return l.getAll()}},{"./../Gallery":312,"./../helpers/selectElementThatHasDataAttribute":325,"./create":318}],318:[function(r,t,q){var n=r("./../fade/FadeGallery");
var l=r("./../Gallery");var s=r("./../slide/SlideGallery");var m="%TYPE% is not a supported gallery type and el has no gallery data attribute.";
var u=l.FADE_SELECTOR.replace(/\[|\]/g,"");var o=l.SLIDE_SELECTOR.replace(/\[|\]/g,"");
t.exports=function p(c,d,a){var b;if(typeof d==="string"){if(d===l.SLIDE){b=s}else{if(d===l.FADE){b=n
}}}if(b===undefined){if(c.getAttribute(o)!==null){b=s}else{if(c.getAttribute(u)!==null){b=n
}}}if(b===undefined){throw new Error(m.replace(/%TYPE%/g,d))}return new b(c,a)}
},{"./../Gallery":312,"./../fade/FadeGallery":319,"./../slide/SlideGallery":329}],319:[function(u,w,s){var o=u("@marcom/ac-object/clone");
var q=u("@marcom/ac-object/create");var t=u("./FadeItem");var v=u("./../auto/AutoGallery");
var n=0.5;function p(b,a){a=o(a)||{};a.itemType=a.itemType||t;this._fadeDuration=a.duration||n;
a.toggleNavDuration=(a.toggleNavDuration===undefined)?this._fadeDuration:a.toggleNavDuration;
this._crossFade=a.crossFade;this._zIndexCount=a.startZIndex||1;this._ease=a.ease;
if(a.resizeContainerOnUpdate===true){a.resizeContainerOnUpdate=this._fadeDuration
}this._onItemShowComplete=this._onItemShowComplete.bind(this);v.call(this,b,a);
if(this._currentItem){this._currentItem.fadeIn(0)}}p.RESIZED=v.RESIZED;p.UPDATE=v.UPDATE;
p.UPDATE_COMPLETE=v.UPDATE_COMPLETE;var m=v.prototype;var r=p.prototype=q(m);r.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=m.addItem.call(this,b,a);if(b!==this._currentItem){b.fadeOut()}else{b.fadeIn(0)
}return c};r.destroy=function(a){var b=m.destroy.call(this,a);this._fadeDuration=null;
this._crossFade=null;this._zIndexCount=null;this._ease=null;this._onItemShowComplete=null;
return b};r._startAt=function(a){var b=this._items[a];if(b&&(this._currentItem!==b)){this._currentItem.fadeOut(0);
this._currentItem.hide();this._setCurrentItem(b);this._currentItem.show();this._currentItem.fadeIn(0);
this.trigger(p.UPDATE,this._items)}};r._onItemShowComplete=function(b){if(b&&b.target()!==this._currentItem.getElement()){if(!this._currentItem.isFading()){this._currentItem.fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}return}var c;var a=this._items.length;while(a--){c=this._items[a];if(c!==this._currentItem){c.fadeOut()
}}if(this._incomingOutgoingItems){this.trigger(p.UPDATE_COMPLETE,this._incomingOutgoingItems)
}};r._updateItems=function(c,a){if(a){return}if(this._crossFade){var b=(a)?null:this.trigger.bind(this,p.UPDATE_COMPLETE,c);
c.outgoing[0].fadeOut(this._fadeDuration*0.99,this._ease);c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,b)
}else{this._incomingOutgoingItems=(a)?false:c;if(!c.outgoing[0].isFading()){c.incoming[0].fadeIn(this._fadeDuration,this._ease,++this._zIndexCount,this._onItemShowComplete)
}}c.outgoing[0].hide();c.incoming[0].show()};w.exports=p},{"./../auto/AutoGallery":316,"./FadeItem":320,"@marcom/ac-object/clone":267,"@marcom/ac-object/create":268}],320:[function(x,y,t){var p=x("@marcom/ac-dom-styles/setStyle");
var q=x("@marcom/ac-object/create");var u=x("@marcom/ac-solar/fade");var o=x("@marcom/ac-solar/fadeIn");
var r=x("@marcom/ac-solar/fadeOut");var v=x("./../Item");function w(a,b){v.call(this,a,b);
p(a,{position:"absolute"})}w.SELECTED=v.SELECTED;w.SHOW=v.SHOW;w.HIDE=v.HIDE;var n=v.prototype;
var s=w.prototype=q(n);s.fadeIn=function(d,c,a,b){if(d){p(this._el,{zIndex:a||1});
this._destroyCurrentClip();this._clip=u(this._el,0,1,d,{ease:c,onComplete:b})}else{o(this._el,0);
p(this._el,{zIndex:a||1})}};s.fadeOut=function(b,a){if(b){this._destroyCurrentClip();
this._clip=r(this._el,b,{ease:a})}else{r(this._el,0)}};s.isFading=function(){return !!(this._clip&&this._clip.playing())
};s.destroy=function(){p(this._el,{position:null,opacity:null,zIndex:null});n.destroy.call(this);
this._destroyCurrentClip();this._clip=null};s._destroyCurrentClip=function(){if(this.isFading()){this._clip.destroy()
}};y.exports=w},{"./../Item":313,"@marcom/ac-dom-styles/setStyle":263,"@marcom/ac-object/create":268,"@marcom/ac-solar/fade":305,"@marcom/ac-solar/fadeIn":306,"@marcom/ac-solar/fadeOut":307}],321:[function(m,k,h){var l=m("@marcom/ac-object/create");
var j=m("@marcom/ac-object/extend");k.exports=function i(a){var c=this;var b=function(){c.apply(this,arguments)
};var d=l(this.prototype);b.prototype=j(d,a);j(b,this);return b}},{"@marcom/ac-object/create":268,"@marcom/ac-object/extend":269}],322:[function(l,k,m){var h=l("@marcom/ac-dom-styles/getStyle");
var i=l("@marcom/ac-dom-metrics/getContentDimensions");k.exports=function j(b){var a=h(b,"margin-right","margin-left");
return Math.round(i(b).width)+parseInt(a.marginRight,10)+parseInt(a.marginLeft,10)
}},{"@marcom/ac-dom-metrics/getContentDimensions":239,"@marcom/ac-dom-styles/getStyle":261}],323:[function(f,i,g){i.exports=function h(){var a=["input","select","textarea"];
return a.indexOf(document.activeElement.nodeName.toLowerCase())>-1}},{}],324:[function(m,k,h){var j=m("@marcom/ac-dom-traversal/querySelectorAll");
var i=function(f,o){var d;var a=document.getElementsByTagName("*");var g=0;var c=a.length;
var b=[];for(g;g<c;g++){d=a[g];if(d.getAttribute(f)!==null&&d.getAttribute(f).split(" ").indexOf(o)>-1){b[b.length]=d
}}return b};k.exports=function l(d,a){var b=j("["+d+'*="'+a+'"]');if(b.length===0&&document.documentMode===7){return i(d,a)
}var o=[];var f=0;var c=b.length;var g;for(f;f<c;f++){g=b[f].getAttribute(d);if(g===a){o.push(b[f])
}else{if(g&&g.length){g=g.split(" ");if(g.indexOf(a)>-1){o.push(b[f])}}}}return o
}},{"@marcom/ac-dom-traversal/querySelectorAll":50}],325:[function(o,n,i){var k=o("@marcom/ac-dom-traversal/querySelectorAll");
var m=o("@marcom/ac-dom-traversal/ancestors");var j=function(d,c){var b;var g=document.getElementsByTagName("*");
var f=0;var a=g.length;var h=[];for(f;f<a;f++){b=g[f];if(b.getAttribute(d)!==null&&(!c||m(b).indexOf(c)>-1)){h[h.length]=b
}}return h};n.exports=function l(c,b){b=b||document.body;var a=k("["+c+"]",b);if(a.length===0&&document.documentMode===7){return j(c,b)
}return a}},{"@marcom/ac-dom-traversal/ancestors":35,"@marcom/ac-dom-traversal/querySelectorAll":50}],326:[function(D,I,t){var F=D("@marcom/ac-dom-events/addEventListener");
var E=D("@marcom/ac-dom-events/removeEventListener");var z=D("@marcom/ac-dom-metrics/getDimensions");
var u=D("@marcom/ac-dom-metrics/getPosition");var G=D("@marcom/ac-dom-styles/getStyle");
var H=D("@marcom/ac-dom-styles/setStyle");var K=D("@marcom/ac-dom-traversal/ancestors");
var C=D("@marcom/ac-object/create");var v=D("@marcom/ac-solar/scrollX");var B=D("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var y=D("./../Gallery");var A=0.5;function w(a,c,b){b=b||{};this._el=a;this._isRightToLeft=(b.rightToLeft===undefined)?G(a,"direction").direction==="rtl":b.rightToLeft;
this._scrollType=this._scrollDirection();this._gallery=c;this._triggers={};this._ordered=[];
this._containerEl=this._el.children[0];this._slideDuration=(b.duration===undefined)?A:b.duration;
B.call(this)}var J=B.prototype;var x=w.prototype=C(J);x.start=function(){this._onWindowLoad=this._onWindowLoad.bind(this);
this._onGalleryUpdated=this._onGalleryUpdated.bind(this);this._gallery.on(y.UPDATE,this._onGalleryUpdated);
this.resize();F(window,"load",this._onWindowLoad)};x.addTrigger=function(c,b){if(this._triggers[b.getElementId()]!==undefined){return
}var d=K(c);if(d.indexOf(this._el)>-1){var a={el:c};this._triggers[b.getElementId()]=a;
this._ordered.push(a)}};x.resize=function(){if(!this._ordered.length){return}H(this._containerEl,{paddingLeft:null,paddingRight:null});
this._containerWidth=z(this._containerEl).width;this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);
var c=this._ordered.length;while(c--){this._setTriggerData(this._ordered[c])}this._ordered.sort(function(h,i){return h.left-i.left
});if(this._containerWidth>this._width){var a=this._ordered[0];var b=this._ordered[this._ordered.length-1];
var d=(this._width-a.width)*0.5;var g=(this._width-b.width)*0.5;H(this._containerEl,{paddingLeft:d+"px",paddingRight:g+"px"});
var f=this._triggers[this._gallery.getCurrentItem().getElementId()];if(f){this._centerNav(f)
}}};x.destroy=function(){this._gallery.off(y.UPDATE,this._onGalleryUpdated);E(window,"load",this._onWindowLoad);
H(this._containerEl,{paddingLeft:null,paddingRight:null});this._el=null;this._gallery=null;
this._triggers=null;this._ordered=null;this._containerEl=null;this._destroyCurrentClip();
this._clip=null;return J.destroy.call(this)};x._onWindowLoad=function(){E(window,"load",this._onWindowLoad);
this.resize()};x._setTriggerData=function(a){a.width=z(a.el).width;var b=u(a.el);
a.left=b.left;a.right=b.right;a.center=a.left+(a.width*0.5)};x._centerNav=function(c,a){this._setTriggerData(c);
this._width=z(this._el).width;this._viewCenter=Math.round(this._width*0.5);var b=Math.round(c.center-this._viewCenter);
if(this._isRightToLeft){if(this._scrollType!=="negative"){b=Math.abs(b)}if(this._scrollType==="default"){b=this._el.scrollWidth-this._el.clientWidth-b
}}this._destroyCurrentClip();if(a){this._clip=v(this._el,b,a)}else{this._el.scrollLeft=b
}};x._onGalleryUpdated=function(b){var a=this._triggers[b.incoming[0].getElementId()];
if(a){this._centerNav(a,this._slideDuration)}};x._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};x._scrollDirection=function(){var a="reverse";var b=document.createElement("div");
b.style.cssText="width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-size: 14px;";
b.style.direction="rtl";b.innerHTML="test";document.body.appendChild(b);if(b.scrollLeft>0){a="default"
}else{b.scrollLeft=1;if(b.scrollLeft===0){a="negative"}}document.body.removeChild(b);
return a};I.exports=w},{"./../Gallery":312,"@marcom/ac-dom-events/addEventListener":222,"@marcom/ac-dom-events/removeEventListener":231,"@marcom/ac-dom-metrics/getDimensions":240,"@marcom/ac-dom-metrics/getPosition":244,"@marcom/ac-dom-styles/getStyle":261,"@marcom/ac-dom-styles/setStyle":263,"@marcom/ac-dom-traversal/ancestors":35,"@marcom/ac-event-emitter-micro":264,"@marcom/ac-object/create":268,"@marcom/ac-solar/scrollX":311}],327:[function(f,h,g){var i=f("./../analytics/AnalyticsManager");
h.exports=new i()},{"./../analytics/AnalyticsManager":315}],328:[function(o,n,i){var l=["input","select","textarea","button","object"];
var k=["href","tabindex","contenteditable"];var j=function(){this.focusableSelectors=l.concat(k.map(function(a){return(a==="href")?"a["+a+"]":"*["+a+"]"
})).join(",")};var m=j.prototype;m.isFocusable=function(b,d){var a=b.nodeName.toLowerCase();
var c=l.indexOf(a)>-1;if(a==="a"){return true}if(c){return !b.disabled}if(!b.contentEditable){return true
}d=d||b.tabIndex;return isNaN(d)};m.isTabbable=function(a){var b=a.getAttribute("tabindex");
if(!isNaN(b)){return(b>=0)}else{return this.isFocusable(a,b)}};m.getTabbable=function(d){var b=d.length;
var c=[];for(var a=0;a<b;a++){if(this.isTabbable(d[a])){c.push(d[a])}}return c};
n.exports=new j()},{}],329:[function(N,Q,x){var P=N("@marcom/ac-classlist");var F=N("@marcom/ac-dom-styles");
var z=N("@marcom/ac-dom-traversal/querySelectorAll");var B=N("@marcom/ac-object/clone");
var L=N("@marcom/ac-object/create");var y=N("./../helpers/getElementFullWidth");
var H=N("@marcom/ac-solar/moveX");var A=N("./../helpers/selectElementFromDataAttributeValue");
var M=N("./../helpers/selectElementThatHasDataAttribute");var I=N("./../auto/AutoGallery");
var O=N("@marcom/ac-pointer-tracker").PointerTracker;var D=N("./SlideItem");var K=N("./SlideItemWrapper");
var S=0.5;var J=0.5;var C=true;function E(c,d){d=B(d)||{};d.itemType=d.itemType||D;
this._itemsPerSlide=d.itemsPerSlide||1;var b=d.deeplink!==false;d.deeplink=false;
this._slideDuration=(d.duration!==undefined)?d.duration:J;d.toggleNavDuration=(d.toggleNavDuration===undefined)?this._slideDuration:d.toggleNavDuration;
this._itemCenterPoint=(d.itemCenterPoint!==undefined)?d.itemCenterPoint:S;this._edgePullResistance=(d.edgePullResistance?d.edgePullResistance:C);
this._slideOptions={ease:d.ease};if(d.resizeContainerOnUpdate===true){d.resizeContainerOnUpdate=this._slideDuration
}d.touch=d.touch!==false;this._originalWrapAround=d.wrapAround||false;I.call(this,c,d);
if(b){var a=this._getDeeplinkedItem();if(a){if(this._currentItem!==a){this._currentItem.hide();
this._setCurrentItem(a);this._currentItem.show()}}}this._positionItems=this._positionItems.bind(this);
this._createContainer();if(this._items.length!==0){this._positionItems()}this._isInstantiated=true
}E.RESIZED=I.RESIZED;E.UPDATE=I.UPDATE;E.UPDATE_COMPLETE=I.UPDATE_COMPLETE;var R=I.prototype;
var G=E.prototype=L(R);G.addItem=function(b,a){if(b.nodeType){b=new this._itemType(b)
}var c=R.addItem.call(this,b,a);if(this._containerEl!==undefined){this._addItemToContainer(b);
this._positionItems()}this._updateWrapAround();return c};G.removeItem=function(b,d){if(this._containerEl&&b.getElement().parentElement===this._containerEl){var a=b.getOriginalParentElement();
if(a){a.appendChild(b.getElement())}else{if(typeof b.removeItems==="function"){b.removeItems();
d.destroyItem=true}}var c=R.removeItem.call(this,b,d);if(this._currentItem){this._positionItems(this._currentItem)
}this._updateWrapAround();return c}return R.removeItem.call(this,b,d)};G.resize=function(){this._positionItems();
this._snapToPosition(this._currentItem.position());return R.resize.call(this)};
G.destroy=function(d){this._destroyCurrentClip();this._clip=null;var b=this._items.length;
while(b--){this._items[b].off(D.CENTER_POINT_CHANGED,this._positionItems)}if(this._touchSwipe){this._touchSwipe.off(O.START,this._onSwipeStart);
this._touchSwipe.off(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.off(O.START,this._onSwipeStart);
this._clickSwipe.off(O.UPDATE,this._onSwipeUpdate)}var a=this._el;var c=R.destroy.call(this,d);
a.removeChild(this._containerEl);this._containerEl=null;this._slideDuration=null;
this._itemCenterPoint=null;this._positionItems=null;this._slideOptions=null;return c
};G._addItems=function(d){if(this._itemsPerSlide>1){var i;var f=/(^\[).*(\]$)/.test(d);
if(f){i=M(d.replace(/\[|\]/g,""),this._el)}else{i=z(d,this._el)}var h;var j;var c;
var b=0;var a=0;var g=i.length;for(a;a<g;a++){if(b===0){h=new K()}h.addItem(i[a]);
c=i[a].getAttribute("id");if(c){j=A("data-ac-gallery-trigger",c);this._addItemTriggers(h,j)
}if(++b===this._itemsPerSlide||a===g-1){b=0;h.resize();this.addItem(h)}}}else{R._addItems.call(this,d)
}};G._createContainer=function(){this._containerEl=document.createElement("div");
P.add(this._containerEl,"ac-gallery-slidecontainer");F.setStyle(this._containerEl,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%"});
this._el.appendChild(this._containerEl);var a=0;var b=this._items.length;for(a;
a<b;a++){this._addItemToContainer(this._items[a])}};G._addItemToContainer=function(a){this._containerEl.appendChild(a.getElement());
a.on(D.CENTER_POINT_CHANGED,this._positionItems)};G._positionItems=function(c){c=c||this._currentItem;
var l=this._items;if(this._wrapAround){l=this._shuffleItems()}var j=(this._getActualPositionX()-c.position())||0;
var k=parseInt(F.getStyle(this._el,"width").width,10);var g=0;var a=0;var d=l.length;
var i;var f;var h;var b;var m;for(a;a<d;a++){i=l[a];i.resize();f=i.getElement();
F.setStyle(f,{left:g+"px"});h=y(f);b=k-h;m=(i.centerPoint&&i.centerPoint()!==null)?i.centerPoint():this._itemCenterPoint;
i.position((g*-1)+(b*m));if(this._isRightToLeft){g-=h}else{g+=h}}g=c.position()+j;
this._snapToPosition(g)};G._getActualPositionX=function(){var c=F.getStyle(this._containerEl,"transform").transform;
if(!c||c==="none"){var b=F.getStyle(this._containerEl,"left").left;return parseInt(b,10)
}else{if(c===this._transformStyles&&this._actualPositionX!==undefined){return this._actualPositionX
}}this._transformStyles=c;var a=this._transformStyles.split(",");this._actualPositionX=a[4]||this._currentItem.position();
return this._actualPositionX*1};G._snapToPosition=function(a){this._destroyCurrentClip();
this._positionX=a;F.setStyle(this._containerEl,{transition:"transform 0s, left 0s"});
H(this._containerEl,a,0,this._slideOptions)};G._slideToPosition=function(a,c,b){this._positionX=a;
this._clip=H(this._containerEl,a,c,{ease:this._slideOptions.ease,onComplete:b})
};G._setUpSwiping=function(c,a){var b=R._setUpSwiping.call(this,c,a);this._onSwipeStart=this._onSwipeStart.bind(this);
this._onSwipeUpdate=this._onSwipeUpdate.bind(this);if(this._touchSwipe){this._touchSwipe.on(O.START,this._onSwipeStart);
this._touchSwipe.on(O.UPDATE,this._onSwipeUpdate)}if(this._clickSwipe){this._clickSwipe.on(O.START,this._onSwipeStart);
this._clickSwipe.on(O.UPDATE,this._onSwipeUpdate)}return b};G._onSwipeStart=function(a){if(this._clip&&this._clip.playing()){this._destroyCurrentClip();
this._positionX=this._getActualPositionX()}};G._onSwipeUpdate=function(b){this._destroyCurrentClip();
var c=this.getItems().slice(-1)[0].position();var a=this._positionX>0||this._positionX<c;
var d=b.diffX;if(this._edgePullResistance&&!this._wrapAround&&a){d*=0.5}this._snapToPosition(this._positionX-d)
};G._onSwipeEnd=function(a){var b=R._onSwipeEnd.call(this,a);if(b===null){b=this.show(this._currentItem,{interactionEvent:a.interactionEvent})
}return b};G._shuffleItems=function(){var i=this._items.length===2&&!this._isAutoPlaying;
if(i){return this._items.slice()}var c=this._items.length;var h=this._items.indexOf(this._currentItem);
var d=Math.floor(c*0.5);var b;var a;var g;if(h<d){b=d-h;var f=c-b;a=this._items.slice(f);
g=this._items.slice(0,f);return a.concat(g)}else{if(h>d){b=h-d;a=this._items.slice(0,b);
g=this._items.slice(b);return g.concat(a)}}return this._items};G._updateItems=function(d,b){this._destroyCurrentClip();
if(this._wrapAround){this._positionItems(d.outgoing[0])}if(this.getItemIndex(d.outgoing[0])>-1){var a=(b)?null:this.trigger.bind(this,E.UPDATE_COMPLETE,d);
var c=this._slideDuration;this._slideToPosition(d.incoming[0].position(),c,a);if(d.incoming[0]!==d.outgoing[0]){d.incoming[0].show();
d.outgoing[0].hide()}}else{this._slideToPosition(this._currentItem.position(),this._slideDuration);
d.incoming[0].show();if(!b){this.trigger(E.UPDATE_COMPLETE,d)}}};G._updateWrapAround=function(){if(this._items.length<=2){this._wrapAround=false
}else{if(this._originalWrapAround){this._wrapAround=this._originalWrapAround}}if(this._isInstantiated&&(this._previousButtons||this._nextButtons)){this._updatePaddleNavState()
}};G._destroyCurrentClip=function(){if(this._clip&&this._clip.playing()){this._clip.destroy()
}};Q.exports=E},{"./../auto/AutoGallery":316,"./../helpers/getElementFullWidth":322,"./../helpers/selectElementFromDataAttributeValue":324,"./../helpers/selectElementThatHasDataAttribute":325,"./SlideItem":330,"./SlideItemWrapper":331,"@marcom/ac-classlist":219,"@marcom/ac-dom-styles":260,"@marcom/ac-dom-traversal/querySelectorAll":50,"@marcom/ac-object/clone":267,"@marcom/ac-object/create":268,"@marcom/ac-pointer-tracker":276,"@marcom/ac-solar/moveX":309}],330:[function(r,s,p){var m=r("@marcom/ac-dom-styles/setStyle");
var n=r("@marcom/ac-object/create");var q=r("./../Item");function l(a,b){q.call(this,a,b);
m(a,{position:"absolute",transform:{translateZ:0}});this._parentElement=a.parentElement
}l.CENTER_POINT_CHANGED="centerpointchanged";l.SELECTED=q.SELECTED;l.SHOW=q.SHOW;
l.HIDE=q.HIDE;var k=q.prototype;var o=l.prototype=n(k);o.position=function(a){if(a!==undefined){this._position=a
}return this._position||0};o.centerPoint=function(a){if(a!==undefined){this._centerPoint=a;
this.trigger(l.CENTER_POINT_CHANGED)}return(this._centerPoint!==undefined)?this._centerPoint:null
};o.getOriginalParentElement=function(){return this._parentElement};o.resize=function(){};
o.destroy=function(){m(this._el,{position:null,left:null,transform:null});k.destroy.call(this)
};s.exports=l},{"./../Item":313,"@marcom/ac-dom-styles/setStyle":263,"@marcom/ac-object/create":268}],331:[function(x,z,w){var q=x("@marcom/ac-classlist");
var t=x("@marcom/ac-dom-styles/setStyle");var A=x("@marcom/ac-dom-traversal/querySelectorAll");
var u=x("@marcom/ac-object/create");var p=x("./../singletons/tabManager");var C=x("./../helpers/getElementFullWidth");
var s=x("./SlideItem");var B="ac-gallery-slideitemwrapper";function y(){s.call(this,document.createElement("div"));
this._items=[];this._currentWidth=0;q.add(this._el,B)}var r=s.prototype;var v=y.prototype=u(r);
v.addItem=function(b){this._items.push({el:b,parentElement:b.parentElement});this._el.appendChild(b);
var d=b.getAttribute("id");if(d){var a=this._el.getAttribute("id")||"";var c=(a.length)?"-":"";
a+=c+d;this._el.setAttribute("id",a)}this._focusableEls=this._focusableEls.concat(A(p.focusableSelectors,b))
};v.removeItems=function(){var b;var d;var c=0;var a=this._items.length;for(c;c<a;
c++){b=this._items[c].el;t(b,{position:null,left:null});d=this._items[c].parentElement;
if(d){d.appendChild(b)}}};v.resize=function(){this._currentWidth=0;var b;var c=0;
var a=this._items.length;for(c;c<a;c++){b=this._items[c].el;t(b,{position:"absolute",left:this._currentWidth+"px"});
this._currentWidth+=C(b)}t(this._el,{width:this._currentWidth+"px"})};v.destroy=function(){this.removeItems();
this._items=null;this._currentWidth=null;var a=this._el.parentElement;if(a){a.removeChild(this._el)
}r.destroy.call(this)};z.exports=y},{"./../helpers/getElementFullWidth":322,"./../singletons/tabManager":328,"./SlideItem":330,"@marcom/ac-classlist":219,"@marcom/ac-dom-styles/setStyle":263,"@marcom/ac-dom-traversal/querySelectorAll":50,"@marcom/ac-object/create":268}],332:[function(f,i,g){var h="";
h+='<nav class="paddlenav">';h+="<ul>";h+='<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-previous-trigger="%ID%"></button></li>';
h+='<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-trigger="%ID%"></button></li>';
h+="</ul>";h+="</nav>";i.exports=h},{}],333:[function(d,g,f){(function(a){function c(p,i){var j=0;
for(var h=p.length-1;h>=0;h--){var q=p[h];if(q==="."){p.splice(h,1)}else{if(q===".."){p.splice(h,1);
j++}else{if(j){p.splice(h,1);j--}}}}if(i){for(;j--;j){p.unshift("..")}}return p
}var k=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;var m=function(h){return k.exec(h).slice(1)
};f.resolve=function(){var h="",j=false;for(var i=arguments.length-1;i>=-1&&!j;
i--){var o=(i>=0)?arguments[i]:a.cwd();if(typeof o!=="string"){throw new TypeError("Arguments to path.resolve must be strings")
}else{if(!o){continue}}h=o+"/"+h;j=o.charAt(0)==="/"}h=c(l(h.split("/"),function(n){return !!n
}),!j).join("/");return((j?"/":"")+h)||"."};f.normalize=function(h){var i=f.isAbsolute(h),j=b(h,-1)==="/";
h=c(l(h.split("/"),function(o){return !!o}),!i).join("/");if(!h&&!i){h="."}if(h&&j){h+="/"
}return(i?"/":"")+h};f.isAbsolute=function(h){return h.charAt(0)==="/"};f.join=function(){var h=Array.prototype.slice.call(arguments,0);
return f.normalize(l(h,function(i,j){if(typeof i!=="string"){throw new TypeError("Arguments to path.join must be strings")
}return i}).join("/"))};f.relative=function(i,h){i=f.resolve(i).substr(1);h=f.resolve(h).substr(1);
function v(p){var n=0;for(;n<p.length;n++){if(p[n]!==""){break}}var o=p.length-1;
for(;o>=0;o--){if(p[o]!==""){break}}if(n>o){return[]}return p.slice(n,o-n+1)}var j=v(i.split("/"));
var w=v(h.split("/"));var x=Math.min(j.length,w.length);var y=x;for(var t=0;t<x;
t++){if(j[t]!==w[t]){y=t;break}}var u=[];for(var t=y;t<j.length;t++){u.push("..")
}u=u.concat(w.slice(y));return u.join("/")};f.sep="/";f.delimiter=":";f.dirname=function(o){var j=m(o),i=j[0],h=j[1];
if(!i&&!h){return"."}if(h){h=h.substr(0,h.length-1)}return i+h};f.basename=function(h,j){var i=m(h)[2];
if(j&&i.substr(-1*j.length)===j){i=i.substr(0,i.length-j.length)}return i};f.extname=function(h){return m(h)[3]
};function l(j,o){if(j.filter){return j.filter(o)}var h=[];for(var i=0;i<j.length;
i++){if(o(j[i],i,j)){h.push(j[i])}}return h}var b="ab".substr(-1)==="b"?function(i,h,j){return i.substr(h,j)
}:function(i,h,j){if(h<0){h=i.length+h}return i.substr(h,j)}}).call(this,d("_process"))
},{_process:334}],334:[function(F,K,t){var C=K.exports={};var B;var z;function E(){throw new Error("setTimeout has not been defined")
}function v(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){B=setTimeout
}else{B=E}}catch(a){B=E}try{if(typeof clearTimeout==="function"){z=clearTimeout
}else{z=v}}catch(a){z=v}}());function G(b){if(B===setTimeout){return setTimeout(b,0)
}if((B===E||!B)&&setTimeout){B=setTimeout;return setTimeout(b,0)}try{return B(b,0)
}catch(a){try{return B.call(null,b,0)}catch(a){return B.call(this,b,0)}}}function H(b){if(z===clearTimeout){return clearTimeout(b)
}if((z===v||!z)&&clearTimeout){z=clearTimeout;return clearTimeout(b)}try{return z(b)
}catch(a){try{return z.call(null,b)}catch(a){return z.call(this,b)}}}var y=[];var u=false;
var D;var x=-1;function A(){if(!u||!D){return}u=false;if(D.length){y=D.concat(y)
}else{x=-1}if(y.length){w()}}function w(){if(u){return}var a=G(A);u=true;var b=y.length;
while(b){D=y;y=[];while(++x<b){if(D){D[x].run()}}x=-1;b=y.length}D=null;u=false;
H(a)}C.nextTick=function(c){var b=new Array(arguments.length-1);if(arguments.length>1){for(var a=1;
a<arguments.length;a++){b[a-1]=arguments[a]}}y.push(new J(c,b));if(y.length===1&&!u){G(w)
}};function J(b,a){this.fun=b;this.array=a}J.prototype.run=function(){this.fun.apply(null,this.array)
};C.title="browser";C.browser=true;C.env={};C.argv=[];C.version="";C.versions={};
function I(){}C.on=I;C.addListener=I;C.once=I;C.off=I;C.removeListener=I;C.removeAllListeners=I;
C.emit=I;C.prependListener=I;C.prependOnceListener=I;C.listeners=function(a){return[]
};C.binding=function(a){throw new Error("process.binding is not supported")};C.cwd=function(){return"/"
};C.chdir=function(a){throw new Error("process.chdir is not supported")};C.umask=function(){return 0
}},{}],335:[function(q,p,j){var k=q("@marcom/ac-jetpack-lib/core/BaseComponent");
var l=k.prototype;var m={ELEMENT_ENGAGEMENT:"data-engaged"};function n(h,f,d,a,c,g,b){this.name="EngagedElementComponent_"+b;
k.call(this,h,f,d,a,c,g,b);this.timeToEngage=300;this.inViewThreshold=0.75;if(this.element.hasAttribute(m.ELEMENT_ENGAGEMENT)){try{this._overwriteElementEngagementProps()
}catch(i){console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!",i)
}}this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:this.timeToEngage,inViewThreshold:this.inViewThreshold})
}var o=n.prototype=Object.create(k.prototype);n.prototype.constructor=n;o.setupEvents=function(){l.setupEvents.call(this);
this._onElementEngaged=this._onElementEngaged.bind(this);this.trackedElement.once("engaged",this._onElementEngaged)
};o._onElementEngaged=function(a){this.element.classList.add("engaged")};o._overwriteElementEngagementProps=function(){var a=this.element.getAttribute(m.ELEMENT_ENGAGEMENT);
var b=JSON.parse(a);this.timeToEngage=b.timeToEngage===undefined?this.timeToEngage:parseFloat(b.timeToEngage);
this.inViewThreshold=b.inViewThreshold===undefined?this.inViewThreshold:parseFloat(b.inViewThreshold)
};p.exports=n},{"@marcom/ac-jetpack-lib/core/BaseComponent":421}],336:[function(t,w,r){var s=t("@marcom/ac-jetpack-lib/core/BaseComponent");
var m=s.prototype;var u=t("@marcom/ac-gallery").SlideGallery;var o=t("@marcom/ac-gallery").FadeGallery;
var n=["xlarge","large","medium","small"];var p={GALLERY:"data-gallery"};function v(d,b,a,f,h,c,g){this.name="GalleryComponent_"+g;
s.call(this,d,b,a,f,h,c,g);this.galleryOptions={};this._normalizeGalleryOptions();
this._createGalleryForViewport(f)}var q=v.prototype=Object.create(s.prototype);
v.prototype.constructor=v;q._normalizeGalleryOptions=function(){var g={};var h={type:"stacked"};
var i;for(var f=0;f<n.length;f++){var a=n[f];var c=p.GALLERY+"-"+a;var b=this.element.getAttribute(c);
if(b===null){i=h;g[a]=true}if(typeof b==="string"){i=JSON.parse(b)}for(var d in h){if(!i.hasOwnProperty(d)){i[d]=h[d]
}}h=i;this._saveGalleryOptionDataForViewport(a,i)}if(g.xlarge&&!g.large){this.galleryOptions.xlarge=this.galleryOptions.large
}};q._saveGalleryOptionDataForViewport=function(a,b){var c=Object.assign({},b);
this.galleryOptions[a]={};this.galleryOptions[a].type=c.type;delete c.type;this.galleryOptions[a].options=c
};q._createGalleryForViewport=function(a){if(this.galleryObject){this.galleryObject.destroy();
this.galleryObject=null}var b=this.galleryOptions[a];switch(b.type){case"stacked":this.element.classList.add("gallery-stacked");
break;case"fade":this.element.classList.remove("gallery-stacked");this.galleryObject=new o(this.element,b.options);
break;case"slide":this.element.classList.remove("gallery-stacked");this.galleryObject=new u(this.element,b.options);
break;default:console.error("Invalid gallery type. Vaild GalleryComponent types are fade, slide, or stacked.");
break}};q._galleryOptionsAreEqualForViewports=function(c,d){var a=JSON.stringify(this.galleryOptions[c]);
var b=JSON.stringify(this.galleryOptions[d]);return(a===b)};q.onBreakpoint=function(d,b,a,c){m.onBreakpoint.call(this,d,b,a,c);
if(this._galleryOptionsAreEqualForViewports(d,b)){return}this._createGalleryForViewport(d)
};w.exports=v},{"@marcom/ac-gallery":314,"@marcom/ac-jetpack-lib/core/BaseComponent":421}],337:[function(D,G,B){var C=D("@marcom/ac-jetpack-lib/core/BaseComponent");
var F=D("@marcom/ac-jetpack-lib/model/EnabledFeatures");var t=C.prototype;var s=D("path");
var w=D("@marcom/ac-feature/canvasAvailable");var v=D("@marcom/ac-media-object");
var u=D("@marcom/ac-viewport-emitter");var y=D("@marcom/ac-cname").cname;var E=D("@marcom/ac-eclipse/Clip");
var H=0.2;var x=0;var z={ELEMENT_ENGAGEMENT:"data-engaged",MEDIA:"data-media"};
function I(a,h,g,c,f,i,d){this._name="MediaObjectComponent_"+d+"-"+(x++);C.call(this,a,h,g,c,f,i,d);
if(!w()){return}this.uriPattern=I.URI_PATTERN;this.type="flow";this.name=null;this.locale="us";
this.rewindWhenInactive=false;this.loop=false;this.playbackRate=1;this.mute=false;
this.transitionIn=false;this.iosInline=false;try{this._overwriteMediaProps()}catch(b){console.error("MediaObjectComponent::_overwriteMediaProps bad JSON in data-attribute!",b)
}if(!this.name){console.log("Missing media name for "+this.element);return}this._media=null;
this._fadeClip=null;this._breakpoint=c;this._retina=u.retina;this._canLoad=false;
this._loadCalled=false;this._enhanceCalled=false;this._isEngaged=false;this._isSectionVisible=false;
this._isShown=false;this._mediaIsPlaying=false;this._mediaHasPlayed=false;this._playOnceReady=false;
this._onMediaLoaded=this._onMediaLoaded.bind(this);this._onMediaEnhanced=this._onMediaEnhanced.bind(this);
this._onMediaReady=this._onMediaReady.bind(this);this._onFadeInComplete=this._onFadeInComplete.bind(this);
this.timeToEngage=0;this.inViewThreshold=0.75;if(this.element.hasAttribute(z.ELEMENT_ENGAGEMENT)){try{this._overwriteElementEngagementProps()
}catch(b){console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!",b)
}}this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:this.timeToEngage,inViewThreshold:this.inViewThreshold});
this._initializeMedia()}var A=I.prototype=Object.create(C.prototype);I.prototype.constructor=I;
I.URI_PATTERN="";A.setupEvents=function(){t.setupEvents.call(this);this._onElementEngaged=this._onElementEngaged.bind(this);
if(this.trackedElement){this.trackedElement.on("engaged",this._onElementEngaged)
}};A.onSectionWillAppear=function(b,a){t.onSectionWillAppear.call(this,b,a);this._isSectionVisible=true;
this._loadMedia()};A.onSectionWillDisappear=function(b,a){t.onSectionWillDisappear.call(this,b,a);
this._isSectionVisible=false;if(this.rewindWhenInactive){this._rewindMedia()}else{this._pauseMedia()
}};A.onBreakpoint=function(c,a,d,b){t.onSectionWillDisappear.call(this,c,a,d,b);
this._rebuildIfChanged("_breakpoint",c)};A.onRetinaChange=function(a,c,d,b){t.onSectionWillDisappear.call(this,a,c,d,b);
this._rebuildIfChanged("_retina",a)};A._viewportForName=function(a,b){if(b.indexOf("xlarge")>-1){return"large"+((b.indexOf("_2x")>-1)?"_2x":"")
}return b};A._uriPatternForName=function(b,a){return a};A._rebuildIfChanged=function(a,b){var c=JSON.stringify(this._getMediaSource());
this[a]=b;var d=JSON.stringify(this._getMediaSource());if(c!=d){var f=this._mediaIsPlaying;
this._destroyMedia();this._initializeMedia();if(this._isSectionVisible){if(f){this._playMedia()
}else{this._loadMedia()}}}};A._overwriteMediaProps=function(){var a=this.element.getAttribute(z.MEDIA);
var b=JSON.parse(a);this.uriPattern=b.uriPattern===undefined?this.uriPattern:b.uriPattern;
this.type=b.type===undefined?this.type:b.type;this.name=b.name===undefined?this.name:b.name;
this.locale=b.locale===undefined?this.locale:b.locale;this.rewindWhenInactive=b.rewindWhenInactive===undefined?this.rewindWhenInactive:b.rewindWhenInactive;
this.loop=b.loop===undefined?this.loop:b.loop;this.playbackRate=b.playbackRate===undefined?this.playbackRate:b.playbackRate;
this.mute=b.mute===undefined?this.mute:b.mute;this.iosInline=b.iosInline===undefined?this.iosInline:b.iosInline;
this.transitionIn=b.transitionIn===undefined?this.transitionIn:b.transitionIn};
A._overwriteElementEngagementProps=function(){var a=this.element.getAttribute(z.ELEMENT_ENGAGEMENT);
var b=JSON.parse(a);this.timeToEngage=b.timeToEngage===undefined?this.timeToEngage:parseFloat(b.timeToEngage);
this.inViewThreshold=b.inViewThreshold===undefined?this.inViewThreshold:parseFloat(b.inViewThreshold)
};A._getMediaSource=function(){var a=this._uriPatternForName(this.name,this.uriPattern);
var d=(this._retina?this._breakpoint.concat("_2x"):this._breakpoint);d=this._viewportForName(this.name,d);
if(typeof a=="object"){a=a[this.type]}var b=a.replace("{{locale}}",this.locale).replace("{{name}}",this.name).replace("{{type}}",this.type).replace("{{viewport}}",d);
if(s.isAbsolute(b)){b=y.addPrefix(b)}var c=s.dirname(b);var f=s.basename(b);if(this.type==="split-file"&&F.IS_DESKTOP){return{basePath:s.dirname(b)+"/"+s.basename(b),splitFileLoading:true}
}else{return{basePath:s.dirname(b),filename:s.basename(b),fileFormat:this.type==="flow"?"jpg":"mp4"}
}};A._initializeMedia=function(){var a;if(this.type=="flow"){a=v.createFlow}else{a=v.createVideo
}this.element.classList.remove("mediaobject-destroyed","mediaobject-enhanced","mediaobject-ended");
this._media=a(this.element,this._getMediaSource(),{looping:this.loop,playbackRate:this.playbackRate,iosInline:this.iosInline});
this._media.on("ready",this._onMediaReady);this._canLoad=true;this._loadCalled=false;
this._enhanceCalled=false;this._mediaIsPlaying=false;this._mediaHasPlayed=false;
this._isShown=false;this._playOnceReady=false};A._onElementEngaged=function(a){this.element.classList.add("engaged");
if(this._media&&(!this._isEngaged||!this._media.getEnded()||this.rewindWhenInactive||this.loop)){this._isEngaged=true;
this._playMedia()}};A._onMediaLoaded=function(){this._enhanceMedia()};A._onMediaEnhanced=function(){if(this.transitionIn){this._media.mediaElement.style.opacity=0
}if(this._playOnceReady){this._playMedia()}};A._onMediaReady=function(){if(this._playOnceReady){this._playMedia()
}};A._fadeIn=function(){this._fadeClip=new E(this._media.mediaElement,H,{opacity:1},{ease:"easeInQuad",onComplete:this._onFadeInComplete}).play()
};A._onFadeInComplete=function(){this._isShown=true;if(this._playOnceReady){this._playMedia()
}};A._loadMedia=function(){if(this._media&&this._canLoad&&!this._loadCalled){this._loadCalled=true;
this._media.on("loaded",this._onMediaLoaded);this._media.load()}};A._enhanceMedia=function(){if(this._media&&!this._enhanceCalled){this._enhanceCalled=true;
this._media.on("enhanced",this._onMediaEnhanced);this._media.enhance()}};A._playMedia=function(){this._mediaHasPlayed=true;
this._playOnceReady=true;if(!this._media){return}if(this._media.getReady()){if(this.transitionIn){if((!this._fadeClip||!this._fadeClip.playing())&&!this._isShown){this._fadeClip=new E(this._media.mediaElement,H,{opacity:1},{ease:"easeInQuad",onComplete:this._onFadeInComplete}).play()
}else{this._startMedia()}}else{this._startMedia()}}else{this._loadMedia()}};A._startMedia=function(){this._playOnceReady=false;
this._mediaIsPlaying=true;this._media.play();if(this.mute){this._media.mediaElement.muted=true
}};A._pauseMedia=function(){if(this._media&&this._mediaIsPlaying){this._mediaIsPlaying=false;
try{this._media.pause()}catch(a){}}};A._rewindMedia=function(){if(this._media&&this._mediaIsPlaying){this._mediaIsPlaying=false;
try{this._media.pause();this._media.setCurrentTime(0);this._media.pause()}catch(a){}}};
A._destroyMedia=function(){if(this._media){this._media.off();this._pauseMedia();
this._media.destroy();this._media=null;this._canLoad=true;this._loadCalled=false;
this._enhanceCalled=false;this._mediaIsPlaying=false;this._mediaHasPlayed=false;
this._isShown=false;this._playOnceReady=false}if(this._fadeClip&&this._fadeClip.playing()){this._fadeClip.destroy();
this._fadeClip=null}};G.exports=I},{"@marcom/ac-cname":4,"@marcom/ac-eclipse/Clip":138,"@marcom/ac-feature/canvasAvailable":191,"@marcom/ac-jetpack-lib/core/BaseComponent":421,"@marcom/ac-jetpack-lib/model/EnabledFeatures":426,"@marcom/ac-media-object":601,"@marcom/ac-viewport-emitter":725,path:333}],338:[function(t,u,r){t("@marcom/ac-polyfills/Object/create");
var s=t("@marcom/ac-jetpack-lib/core/BaseComponent");var l=s.prototype;var q=t("@marcom/ac-scroll-animation/ScrollAnimation");
var n=["xlarge","large","medium","small"];function o(f,c,b,g,a,d,h){this.name="ScrollAnimationComponent_"+h;
s.call(this,f,c,b,g,a,d,h);this.options={};this.normalizeOptions();this.initializeScrollAnimation(d,g)
}var p=o.prototype=Object.create(s.prototype);o.prototype.constructor=o;var m="data-scroll-animation";
p.normalizeOptions=function(){var h={};var b={};var i;for(var g=0;g<n.length;g++){var c=n[g];
var d=m+"-"+c;var a=this.element.getAttribute(d);var f=this.element.getAttribute(m);
if(f!==null){a=f}if(a===null){i=b;h[c]=true}if(typeof a==="string"){i=JSON.parse(a)
}for(var j in b){if(!i.hasOwnProperty(j)){i[j]=b[j]}}b=i;this._saveOptionDataForViewport(c,i)
}if(h.xlarge&&!h.large){this.options.xlarge=this.options.large}};p._saveOptionDataForViewport=function(b,c){var a=Object.assign({},c);
this.options[b]={options:a}};p.initializeScrollAnimation=function(c,b){if(this.scrollAnimation){this.scrollAnimation.destroy();
this.scrollAnimation=null}var a=this.options[b];a.options.overrideScroll=true;if(a.options.disabled){this.element.removeAttribute("style")
}else{this.scrollAnimation=new q(this.element,a.options)}};p.onScroll=function(a,b,c){if(!this.scrollAnimation){return
}this.scrollAnimation.scrollMotionEmitter.handleScroll(b)};p._optionsAreEqualForViewports=function(d,a){var b=JSON.stringify(this.options[d]);
var c=JSON.stringify(this.options[a]);return(b===c)};p.onBreakpoint=function(a,c,b,d){l.onBreakpoint.call(this,a,c,b,d);
this.initializeScrollAnimation(d,a)};u.exports=o},{"@marcom/ac-jetpack-lib/core/BaseComponent":421,"@marcom/ac-polyfills/Object/create":undefined,"@marcom/ac-scroll-animation/ScrollAnimation":716}],339:[function(d,g,f){arguments[4][107][0].apply(f,arguments)
},{dup:107}],340:[function(d,g,f){arguments[4][172][0].apply(f,arguments)},{"./extend":341,dup:172}],341:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],342:[function(f,h,g){var i=f("./ac-element-engagement/ElementEngagement");
h.exports=new i();h.exports.ElementEngagement=i},{"./ac-element-engagement/ElementEngagement":343}],343:[function(s,t,q){var p;
var l=s("@marcom/ac-event-emitter-micro").EventEmitterMicro;var r={create:s("@marcom/ac-object/create"),defaults:s("@marcom/ac-object/defaults"),extend:s("@marcom/ac-object/extend")};
var o=s("@marcom/ac-element-tracker").ElementTracker;var m={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var n={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var u=function(a){o.call(this,null,a);l.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};p=u.prototype=r.create(o.prototype);p=r.extend(p,l.prototype);
p._decorateTrackedElement=function(a,b){var c;c=r.defaults(m,b||{});r.extend(a,c);
r.extend(a,n)};p._attachElementListeners=function(a){a.on("thresholdenter",this._thresholdEnter,this);
a.on("thresholdexit",this._thresholdExit,this);a.on("enterview",this._enterView,this);
a.on("exitview",this._exitView,this)};p._removeElementListeners=function(a){a.off("thresholdenter",this._thresholdEnter);
a.off("thresholdexit",this._thresholdExit);a.off("enterview",this._enterView);a.off("exitview",this._exitView)
};p._attachAllElementListeners=function(){this.elements.forEach(function(a){if(!a.stopOnEngaged){this._attachElementListeners(a)
}else{if(!a.engaged){this._attachElementListeners(a)}}},this)};p._removeAllElementListeners=function(){this.elements.forEach(function(a){this._removeElementListeners(a)
},this)};p._elementInViewPastThreshold=function(c){var b=document.documentElement.clientHeight||window.innerHeight;
var a=false;if(c.pixelsInView===b){a=true}else{a=(c.percentInView>c.inViewThreshold)
}return a};p._ifInView=function(b,c){var a=b.inThreshold;o.prototype._ifInView.apply(this,arguments);
if(!a&&this._elementInViewPastThreshold(b)){b.inThreshold=true;b.trigger("thresholdenter",b);
if(typeof b.timeToEngage==="number"&&b.timeToEngage>=0){b.engagedTimeout=window.setTimeout(this._engaged.bind(this,b),b.timeToEngage)
}}};p._ifAlreadyInView=function(b){var a=b.inThreshold;o.prototype._ifAlreadyInView.apply(this,arguments);
if(a&&!this._elementInViewPastThreshold(b)){b.inThreshold=false;b.trigger("thresholdexit",b);
if(b.engagedTimeout){window.clearTimeout(b.engagedTimeout);b.engagedTimeout=null
}}};p._engaged=function(a){a.engagedTimeout=null;this._elementEngaged(a);a.trigger("engaged",a);
this.trigger("engaged",a)};p._thresholdEnter=function(a){a.thresholdEnterTime=Date.now();
a.thresholdExitTime=0;this.trigger("thresholdenter",a)};p._thresholdExit=function(a){a.thresholdExitTime=Date.now();
this.trigger("thresholdexit",a)};p._enterView=function(a){this.trigger("enterview",a)
};p._exitView=function(a){this.trigger("exitview",a)};p._elementEngaged=function(a){a.engaged=true;
if(a.stopOnEngaged){this.stop(a)}};p.stop=function(a){if(this.tracking&&!a){this._removeAllElementListeners();
o.prototype.stop.call(this)}if(a&&a.tracking){a.tracking=false;this._removeElementListeners(a)
}};p.start=function(a){if(!a){this._attachAllElementListeners()}if(a&&!a.tracking){if(!a.stopOnEngaged){a.tracking=true;
this._attachElementListeners(a)}else{if(!a.engaged){a.tracking=true;this._attachElementListeners(a)
}}}if(!this.tracking){o.prototype.start.call(this)}else{this.refreshAllElementMetrics();
this.refreshAllElementStates()}};p.addElement=function(c,b){b=b||{};var a=o.prototype.addElement.call(this,c,b.useRenderedPosition);
this._decorateTrackedElement(a,b);return a};p.addElements=function(a,b){[].forEach.call(a,function(c){this.addElement(c,b)
},this)};t.exports=u},{"@marcom/ac-element-tracker":416,"@marcom/ac-event-emitter-micro":419,"@marcom/ac-object/create":339,"@marcom/ac-object/defaults":340,"@marcom/ac-object/extend":341}],344:[function(d,g,f){g.exports={flatten:d("./flatten"),intersection:d("./intersection"),shuffle:d("./shuffle"),toArray:d("./toArray"),union:d("./union"),unique:d("./unique"),without:d("./without")}
},{"./flatten":345,"./intersection":346,"./shuffle":347,"./toArray":348,"./union":349,"./unique":350,"./without":351}],345:[function(f,i,g){f("@marcom/ac-polyfills/Array/isArray");
f("@marcom/ac-polyfills/Array/prototype.forEach");i.exports=function h(a){var c=[];
var b=function(d){if(Array.isArray(d)){d.forEach(b)}else{c.push(d)}};a.forEach(b);
return c}},{"@marcom/ac-polyfills/Array/isArray":undefined,"@marcom/ac-polyfills/Array/prototype.forEach":undefined}],346:[function(f,i,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
i.exports=function h(p){if(!p){return[]}var a=arguments.length;var c=0;var j=p.length;
var o=[];var b;for(c;c<j;c++){b=p[c];if(o.indexOf(b)>-1){continue}for(var d=1;d<a;
d++){if(arguments[d].indexOf(b)<0){break}}if(d===a){o.push(b)}}return o}},{"@marcom/ac-polyfills/Array/prototype.indexOf":undefined}],347:[function(f,i,g){i.exports=function h(a){var d=a.length;
var b;var c;while(d){b=Math.floor(Math.random()*d--);c=a[d];a[d]=a[b];a[b]=c}return a
}},{}],348:[function(f,h,g){f("@marcom/ac-polyfills/Array/prototype.slice");h.exports=function i(a){return Array.prototype.slice.call(a)
}},{"@marcom/ac-polyfills/Array/prototype.slice":undefined}],349:[function(i,n,j){var k=i("./flatten");
var o=i("./toArray");var l=i("./unique");n.exports=function m(a){return l(k(o(arguments)))
}},{"./flatten":345,"./toArray":348,"./unique":350}],350:[function(f,i,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
f("@marcom/ac-polyfills/Array/prototype.reduce");i.exports=function h(a){var b=function(d,c){if(d.indexOf(c)<0){d.push(c)
}return d};return a.reduce(b,[])}},{"@marcom/ac-polyfills/Array/prototype.indexOf":undefined,"@marcom/ac-polyfills/Array/prototype.reduce":undefined}],351:[function(f,h,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
f("@marcom/ac-polyfills/Array/prototype.slice");h.exports=function i(q,r,a){var c;
var o=q.indexOf(r);var b=q.length;if(o>=0){if(a){c=q.slice(0,b);var d,p=0;for(d=o;
d<b;d++){if(q[d]===r){c.splice(d-p,1);p++}}}else{if(o===(b-1)){c=q.slice(0,(b-1))
}else{if(o===0){c=q.slice(1)}else{c=q.slice(0,o);c=c.concat(q.slice(o+1))}}}}else{return q
}return c}},{"@marcom/ac-polyfills/Array/prototype.indexOf":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],352:[function(d,g,f){arguments[4][222][0].apply(f,arguments)
},{"./shared/getEventType":362,"./utils/addEventListener":366,dup:222}],353:[function(d,g,f){arguments[4][223][0].apply(f,arguments)
},{"./shared/getEventType":362,"./utils/dispatchEvent":367,dup:223}],354:[function(d,g,f){arguments[4][224][0].apply(f,arguments)
},{"./addEventListener":352,"./dispatchEvent":353,"./preventDefault":360,"./removeEventListener":361,"./stop":363,"./stopPropagation":364,"./target":365,dup:224}],355:[function(d,g,f){arguments[4][6][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":356,"./shared/prefixHelper":357,"./shared/windowFallbackEventTypes":358,"./utils/eventTypeAvailable":359,dup:6}],356:[function(d,g,f){arguments[4][7][0].apply(f,arguments)
},{dup:7}],357:[function(d,g,f){arguments[4][8][0].apply(f,arguments)},{dup:8}],358:[function(d,g,f){arguments[4][9][0].apply(f,arguments)
},{dup:9}],359:[function(d,g,f){arguments[4][10][0].apply(f,arguments)},{dup:10}],360:[function(d,g,f){arguments[4][230][0].apply(f,arguments)
},{dup:230}],361:[function(d,g,f){arguments[4][231][0].apply(f,arguments)},{"./shared/getEventType":362,"./utils/removeEventListener":368,dup:231}],362:[function(d,g,f){arguments[4][232][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":355,dup:232}],363:[function(d,g,f){arguments[4][233][0].apply(f,arguments)
},{"./preventDefault":360,"./stopPropagation":364,dup:233}],364:[function(d,g,f){arguments[4][234][0].apply(f,arguments)
},{dup:234}],365:[function(d,g,f){arguments[4][235][0].apply(f,arguments)},{dup:235}],366:[function(d,g,f){arguments[4][236][0].apply(f,arguments)
},{dup:236}],367:[function(d,g,f){arguments[4][237][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":undefined,dup:237}],368:[function(d,g,f){arguments[4][238][0].apply(f,arguments)
},{dup:238}],369:[function(d,g,f){arguments[4][81][0].apply(f,arguments)},{"./utils/getBoundingClientRect":373,dup:81}],370:[function(d,g,f){arguments[4][241][0].apply(f,arguments)
},{"./getDimensions":369,"./getScrollX":371,"./getScrollY":372,"./utils/getBoundingClientRect":373,dup:241}],371:[function(d,g,f){arguments[4][245][0].apply(f,arguments)
},{dup:245}],372:[function(d,g,f){arguments[4][246][0].apply(f,arguments)},{dup:246}],373:[function(d,g,f){arguments[4][82][0].apply(f,arguments)
},{dup:82}],374:[function(d,g,f){arguments[4][21][0].apply(f,arguments)},{dup:21}],375:[function(d,g,f){arguments[4][22][0].apply(f,arguments)
},{dup:22}],376:[function(d,g,f){arguments[4][23][0].apply(f,arguments)},{dup:23}],377:[function(d,g,f){g.exports=10
},{}],378:[function(d,g,f){arguments[4][24][0].apply(f,arguments)},{dup:24}],379:[function(d,g,f){arguments[4][25][0].apply(f,arguments)
},{dup:25}],380:[function(d,g,f){g.exports={createDocumentFragment:d("./createDocumentFragment"),filterByNodeType:d("./filterByNodeType"),hasAttribute:d("./hasAttribute"),indexOf:d("./indexOf"),insertAfter:d("./insertAfter"),insertBefore:d("./insertBefore"),insertFirstChild:d("./insertFirstChild"),insertLastChild:d("./insertLastChild"),isComment:d("./isComment"),isDocument:d("./isDocument"),isDocumentFragment:d("./isDocumentFragment"),isDocumentType:d("./isDocumentType"),isElement:d("./isElement"),isNode:d("./isNode"),isNodeList:d("./isNodeList"),isTextNode:d("./isTextNode"),remove:d("./remove"),replace:d("./replace"),COMMENT_NODE:d("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:d("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:d("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:d("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:d("./ELEMENT_NODE"),TEXT_NODE:d("./TEXT_NODE")}
},{"./COMMENT_NODE":374,"./DOCUMENT_FRAGMENT_NODE":375,"./DOCUMENT_NODE":376,"./DOCUMENT_TYPE_NODE":377,"./ELEMENT_NODE":378,"./TEXT_NODE":379,"./createDocumentFragment":381,"./filterByNodeType":382,"./hasAttribute":383,"./indexOf":384,"./insertAfter":385,"./insertBefore":386,"./insertFirstChild":387,"./insertLastChild":388,"./isComment":391,"./isDocument":392,"./isDocumentFragment":393,"./isDocumentType":394,"./isElement":395,"./isNode":396,"./isNodeList":397,"./isTextNode":398,"./remove":399,"./replace":400}],381:[function(i,h,f){h.exports=function g(b){var c=document.createDocumentFragment();
var a;if(b){a=document.createElement("div");a.innerHTML=b;while(a.firstChild){c.appendChild(a.firstChild)
}}return c}},{}],382:[function(d,g,f){arguments[4][26][0].apply(f,arguments)},{"./ELEMENT_NODE":378,"./internal/isNodeType":389,"@marcom/ac-polyfills/Array/prototype.filter":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined,dup:26}],383:[function(i,h,g){h.exports=function f(a,b){if("hasAttribute" in a){return a.hasAttribute(b)
}return(a.attributes.getNamedItem(b)!==null)}},{}],384:[function(m,l,h){m("@marcom/ac-polyfills/Array/prototype.indexOf");
m("@marcom/ac-polyfills/Array/prototype.slice");var j=m("./internal/validate");
var i=m("./filterByNodeType");l.exports=function k(a,c){var d=a.parentNode;var b;
if(!d){return 0}b=d.childNodes;if(c!==false){b=i(b,c)}else{b=Array.prototype.slice.call(b)
}return b.indexOf(a)}},{"./filterByNodeType":382,"./internal/validate":390,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined}],385:[function(g,k,h){var i=g("./internal/validate");
k.exports=function j(b,a){i.insertNode(b,true,"insertAfter");i.childNode(a,true,"insertAfter");
i.hasParentNode(a,"insertAfter");if(!a.nextSibling){return a.parentNode.appendChild(b)
}return a.parentNode.insertBefore(b,a.nextSibling)}},{"./internal/validate":390}],386:[function(k,j,h){var i=k("./internal/validate");
j.exports=function g(b,a){i.insertNode(b,true,"insertBefore");i.childNode(a,true,"insertBefore");
i.hasParentNode(a,"insertBefore");return a.parentNode.insertBefore(b,a)}},{"./internal/validate":390}],387:[function(k,j,g){var i=k("./internal/validate");
j.exports=function h(b,a){i.insertNode(b,true,"insertFirstChild");i.parentNode(a,true,"insertFirstChild");
if(!a.firstChild){return a.appendChild(b)}return a.insertBefore(b,a.firstChild)
}},{"./internal/validate":390}],388:[function(g,k,h){var j=g("./internal/validate");
k.exports=function i(b,a){j.insertNode(b,true,"insertLastChild");j.parentNode(a,true,"insertLastChild");
return a.appendChild(b)}},{"./internal/validate":390}],389:[function(d,g,f){arguments[4][27][0].apply(f,arguments)
},{"../isNode":396,dup:27}],390:[function(d,g,f){arguments[4][28][0].apply(f,arguments)
},{"../COMMENT_NODE":374,"../DOCUMENT_FRAGMENT_NODE":375,"../ELEMENT_NODE":378,"../TEXT_NODE":379,"./isNodeType":389,dup:28}],391:[function(m,l,i){var j=m("./internal/isNodeType");
var k=m("./COMMENT_NODE");l.exports=function h(a){return j(a,k)}},{"./COMMENT_NODE":374,"./internal/isNodeType":389}],392:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_NODE":376,"./internal/isNodeType":389}],393:[function(d,g,f){arguments[4][29][0].apply(f,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":375,"./internal/isNodeType":389,dup:29}],394:[function(h,m,i){var j=h("./internal/isNodeType");
var k=h("./DOCUMENT_TYPE_NODE");m.exports=function l(a){return j(a,k)}},{"./DOCUMENT_TYPE_NODE":377,"./internal/isNodeType":389}],395:[function(d,g,f){arguments[4][30][0].apply(f,arguments)
},{"./ELEMENT_NODE":378,"./internal/isNodeType":389,dup:30}],396:[function(d,g,f){arguments[4][31][0].apply(f,arguments)
},{dup:31}],397:[function(d,g,f){arguments[4][165][0].apply(f,arguments)},{dup:165}],398:[function(m,l,i){var j=m("./internal/isNodeType");
var h=m("./TEXT_NODE");l.exports=function k(a){return j(a,h)}},{"./TEXT_NODE":379,"./internal/isNodeType":389}],399:[function(d,g,f){arguments[4][32][0].apply(f,arguments)
},{"./internal/validate":390,dup:32}],400:[function(g,j,h){var i=g("./internal/validate");
j.exports=function k(b,a){i.insertNode(b,true,"insertFirstChild","newNode");i.childNode(a,true,"insertFirstChild","oldNode");
i.hasParentNode(a,"insertFirstChild","oldNode");return a.parentNode.replaceChild(b,a)
}},{"./internal/validate":390}],401:[function(j,i,k){var h=j("qs");i.exports=function g(b,c){var a=h.stringify(b,{strictNullHandling:true});
if(a&&c!==false){a="?"+a}return a}},{qs:402}],402:[function(h,l,i){var j=h("./stringify");
var m=h("./parse");var k={};l.exports={stringify:j,parse:m}},{"./parse":403,"./stringify":404}],403:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
j.parseValues=function(f,a){var s={};var t=f.split(a.delimiter,a.parameterLimit===Infinity?undefined:a.parameterLimit);
for(var r=0,c=t.length;r<c;++r){var v=t[r];var d=v.indexOf("]=")===-1?v.indexOf("="):v.indexOf("]=")+1;
if(d===-1){s[i.decode(v)]="";if(a.strictNullHandling){s[i.decode(v)]=null}}else{var b=i.decode(v.slice(0,d));
var u=i.decode(v.slice(d+1));if(!Object.prototype.hasOwnProperty.call(s,b)){s[b]=u
}else{s[b]=[].concat(s[b]).concat(u)}}}return s};j.parseObject=function(b,q,c){if(!b.length){return q
}var p=b.shift();var a;if(p==="[]"){a=[];a=a.concat(j.parseObject(b,q,c))}else{a=c.plainObjects?Object.create(null):{};
var d=p[0]==="["&&p[p.length-1]==="]"?p.slice(1,p.length-1):p;var f=parseInt(d,10);
var o=""+f;if(!isNaN(f)&&p!==d&&o===d&&f>=0&&(c.parseArrays&&f<=c.arrayLimit)){a=[];
a[f]=j.parseObject(b,q,c)}else{a[d]=j.parseObject(b,q,c)}}return a};j.parseKeys=function(d,r,p){if(!d){return
}if(p.allowDots){d=d.replace(/\.([^\.\[]+)/g,"[$1]")}var c=/^([^\[\]]*)/;var q=/(\[[^\[\]]*\])/g;
var a=c.exec(d);var b=[];if(a[1]){if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1])){if(!p.allowPrototypes){return
}}b.push(a[1])}var f=0;while((a=q.exec(d))!==null&&f<p.depth){++f;if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))){if(!p.allowPrototypes){continue
}}b.push(a[1])}if(a){b.push("["+d.slice(a.index)+"]")}return j.parseObject(b,r,p)
};k.exports=function(q,a){a=a||{};a.delimiter=typeof a.delimiter==="string"||i.isRegExp(a.delimiter)?a.delimiter:j.delimiter;
a.depth=typeof a.depth==="number"?a.depth:j.depth;a.arrayLimit=typeof a.arrayLimit==="number"?a.arrayLimit:j.arrayLimit;
a.parseArrays=a.parseArrays!==false;a.allowDots=a.allowDots!==false;a.plainObjects=typeof a.plainObjects==="boolean"?a.plainObjects:j.plainObjects;
a.allowPrototypes=typeof a.allowPrototypes==="boolean"?a.allowPrototypes:j.allowPrototypes;
a.parameterLimit=typeof a.parameterLimit==="number"?a.parameterLimit:j.parameterLimit;
a.strictNullHandling=typeof a.strictNullHandling==="boolean"?a.strictNullHandling:j.strictNullHandling;
if(q===""||q===null||typeof q==="undefined"){return a.plainObjects?Object.create(null):{}
}var f=typeof q==="string"?j.parseValues(q,a):q;var s=a.plainObjects?Object.create(null):{};
var b=Object.keys(f);for(var r=0,d=b.length;r<d;++r){var c=b[r];var t=j.parseKeys(c,f[c],a);
s=i.merge(s,t,a)}return i.compact(s)}},{"./utils":405}],404:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",arrayPrefixGenerators:{brackets:function(a,b){return a+"[]"
},indices:function(a,b){return a+"["+b+"]"},repeat:function(a,b){return a}},strictNullHandling:false};
j.stringify=function(r,d,v,t,u){if(typeof u==="function"){r=u(d,r)}else{if(i.isBuffer(r)){r=r.toString()
}else{if(r instanceof Date){r=r.toISOString()}else{if(r===null){if(t){return i.encode(d)
}r=""}}}}if(typeof r==="string"||typeof r==="number"||typeof r==="boolean"){return[i.encode(d)+"="+i.encode(r)]
}var a=[];if(typeof r==="undefined"){return a}var s=Array.isArray(u)?u:Object.keys(r);
for(var f=0,c=s.length;f<c;++f){var b=s[f];if(Array.isArray(r)){a=a.concat(j.stringify(r[b],v(d,b),v,t,u))
}else{a=a.concat(j.stringify(r[b],d+"["+b+"]",v,t,u))}}return a};k.exports=function(d,z){z=z||{};
var w=typeof z.delimiter==="undefined"?j.delimiter:z.delimiter;var u=typeof z.strictNullHandling==="boolean"?z.strictNullHandling:j.strictNullHandling;
var f;var v;if(typeof z.filter==="function"){v=z.filter;d=v("",d)}else{if(Array.isArray(z.filter)){f=v=z.filter
}}var a=[];if(typeof d!=="object"||d===null){return""}var y;if(z.arrayFormat in j.arrayPrefixGenerators){y=z.arrayFormat
}else{if("indices" in z){y=z.indices?"indices":"repeat"}else{y="indices"}}var x=j.arrayPrefixGenerators[y];
if(!f){f=Object.keys(d)}for(var t=0,c=f.length;t<c;++t){var b=f[t];a=a.concat(j.stringify(d[b],b,x,u,v))
}return a.join(w)}},{"./utils":405}],405:[function(g,k,h){var i={};i.hexTable=new Array(256);
for(var j=0;j<256;++j){i.hexTable[j]="%"+((j<16?"0":"")+j.toString(16)).toUpperCase()
}h.arrayToObject=function(b,d){var a=d.plainObjects?Object.create(null):{};for(var c=0,f=b.length;
c<f;++c){if(typeof b[c]!=="undefined"){a[c]=b[c]}}return a};h.merge=function(q,r,f){if(!r){return q
}if(typeof r!=="object"){if(Array.isArray(q)){q.push(r)}else{if(typeof q==="object"){q[r]=true
}else{q=[q,r]}}return q}if(typeof q!=="object"){q=[q].concat(r);return q}if(Array.isArray(q)&&!Array.isArray(r)){q=h.arrayToObject(q,f)
}var b=Object.keys(r);for(var p=0,c=b.length;p<c;++p){var d=b[p];var a=r[d];if(!Object.prototype.hasOwnProperty.call(q,d)){q[d]=a
}else{q[d]=h.merge(q[d],a,f)}}return q};h.decode=function(a){try{return decodeURIComponent(a.replace(/\+/g," "))
}catch(b){return a}};h.encode=function(b){if(b.length===0){return b}if(typeof b!=="string"){b=""+b
}var d="";for(var c=0,f=b.length;c<f;++c){var a=b.charCodeAt(c);if(a===45||a===46||a===95||a===126||(a>=48&&a<=57)||(a>=65&&a<=90)||(a>=97&&a<=122)){d+=b[c];
continue}if(a<128){d+=i.hexTable[a];continue}if(a<2048){d+=i.hexTable[192|(a>>6)]+i.hexTable[128|(a&63)];
continue}if(a<55296||a>=57344){d+=i.hexTable[224|(a>>12)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)];
continue}++c;a=65536+(((a&1023)<<10)|(b.charCodeAt(c)&1023));d+=i.hexTable[240|(a>>18)]+i.hexTable[128|((a>>12)&63)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)]
}return d};h.compact=function(q,d){if(typeof q!=="object"||q===null){return q}d=d||[];
var r=d.indexOf(q);if(r!==-1){return d[r]}d.push(q);if(Array.isArray(q)){var p=[];
for(var b=0,f=q.length;b<f;++b){if(typeof q[b]!=="undefined"){p.push(q[b])}}return p
}var a=Object.keys(q);for(b=0,f=a.length;b<f;++b){var c=a[b];q[c]=h.compact(q[c],d)
}return q};h.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"
};h.isBuffer=function(a){if(a===null||typeof a==="undefined"){return false}return !!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))
}},{}],406:[function(d,g,f){g.exports={clone:d("./clone"),create:d("./create"),defaults:d("./defaults"),extend:d("./extend"),getPrototypeOf:d("./getPrototypeOf"),isDate:d("./isDate"),isEmpty:d("./isEmpty"),isRegExp:d("./isRegExp"),toQueryParameters:d("./toQueryParameters")}
},{"./clone":407,"./create":408,"./defaults":409,"./extend":410,"./getPrototypeOf":411,"./isDate":412,"./isEmpty":413,"./isRegExp":414,"./toQueryParameters":415}],407:[function(d,g,f){arguments[4][106][0].apply(f,arguments)
},{"./extend":410,"@marcom/ac-polyfills/Array/isArray":undefined,dup:106}],408:[function(d,g,f){arguments[4][107][0].apply(f,arguments)
},{dup:107}],409:[function(d,g,f){arguments[4][172][0].apply(f,arguments)},{"./extend":410,dup:172}],410:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],411:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(a){if(Object.getPrototypeOf){return Object.getPrototypeOf(a)
}else{if(typeof a!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return a.__proto__}else{var c=a.constructor;
var b;if(h.call(a,"constructor")){b=c;if(!(delete a.constructor)){return null}c=a.constructor;
a.constructor=b}return c?c.prototype:null}}}}},{}],412:[function(f,h,g){h.exports=function i(a){return Object.prototype.toString.call(a)==="[object Date]"
}},{}],413:[function(k,j,g){var h=Object.prototype.hasOwnProperty;j.exports=function i(b){var a;
if(typeof b!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(a in b){if(h.call(b,a)){return false}}return true}},{}],414:[function(i,h,f){h.exports=function g(a){return window.RegExp?a instanceof RegExp:false
}},{}],415:[function(k,i,g){var h=k("@marcom/ac-url/joinSearchParams");i.exports=function j(a){if(typeof a!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return h(a,false)}},{"@marcom/ac-url/joinSearchParams":401}],416:[function(f,i,g){var h=f("./ac-element-tracker/ElementTracker");
i.exports=new h();i.exports.ElementTracker=h},{"./ac-element-tracker/ElementTracker":417}],417:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
var n=v("@marcom/ac-array");var o=v("@marcom/ac-dom-nodes");var y={getDimensions:v("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:v("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:v("@marcom/ac-dom-metrics/getScrollY")};
var p=v("@marcom/ac-dom-events");var t=v("@marcom/ac-object");var q=v("./TrackedElement");
var u={autoStart:false,useRenderedPosition:false};function x(a,b){this.options=t.clone(u);
this.options=typeof b==="object"?t.extend(this.options,b):this.options;this._scrollY=this._getScrollY();
this._windowHeight=this._getWindowHeight();this.tracking=false;this.elements=[];
if(a&&(Array.isArray(a)||o.isNodeList(a)||o.isElement(a))){this.addElements(a)}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);
this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);if(this.options.autoStart){this.start()
}}var r=x.prototype;r.destroy=function(){var a,b;this.stop();for(a=0,b=this.elements.length;
a<b;a++){this.elements[a].destroy()}this.elements=null;this.options=null};r._registerElements=function(a){a=[].concat(a);
a.forEach(function(b){if(this._elementInDOM(b)){var c=new q(b,this.options.useRenderedPosition);
c.offsetTop=c.element.offsetTop;this.elements.push(c)}},this)};r._registerTrackedElements=function(b){var a=[].concat(b);
a.forEach(function(c){if(this._elementInDOM(c.element)){c.offsetTop=c.element.offsetTop;
this.elements.push(c)}},this)};r._elementInDOM=function(a){var b=false;var c=document.getElementsByTagName("body")[0];
if(o.isElement(a)&&c.contains(a)){b=true}return b};r._elementPercentInView=function(a){return a.pixelsInView/a.height
};r._elementPixelsInView=function(b){var c=b.top-this._scrollY;var a=b.bottom-this._scrollY;
if(c>this._windowHeight||a<0){return 0}return Math.min(a,this._windowHeight)-Math.max(c,0)
};r._ifInView=function(b,a){if(!a){b.trigger("enterview",b)}};r._ifAlreadyInView=function(a){if(!a.inView){a.trigger("exitview",a)
}};r.addElements=function(a,b){if(typeof b==="undefined"){b=this.options.useRenderedPosition
}a=o.isNodeList(a)?n.toArray(a):[].concat(a);for(var c=0,d=a.length;c<d;c++){this.addElement(a[c],b)
}};r.addElement=function(b,a){var c=null;if(typeof a==="undefined"){a=this.options.useRenderedPosition
}if(o.isElement(b)){c=new q(b,a);this._registerTrackedElements(c);this.refreshElementMetrics(c);
this.refreshElementState(c)}else{throw new TypeError("ElementTracker: "+b+" is not a valid DOM element")
}return c};r.removeElement=function(a){var b=[];var c;this.elements.forEach(function(d,f){if(d===a||d.element===a){b.push(f)
}});c=this.elements.filter(function(d,f){return b.indexOf(f)<0});this.elements=c
};r.start=function(){if(this.tracking===false){this.tracking=true;p.addEventListener(window,"resize",this.refreshAllElementMetrics);
p.addEventListener(window,"orientationchange",this.refreshAllElementMetrics);p.addEventListener(window,"scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};r.stop=function(){if(this.tracking===true){this.tracking=false;
p.removeEventListener(window,"resize",this.refreshAllElementMetrics);p.removeEventListener(window,"orientationchange",this.refreshAllElementMetrics);
p.removeEventListener(window,"scroll",this.refreshAllElementStates)}};r.refreshAllElementMetrics=function(b,a){if(typeof b!=="number"){b=this._getScrollY()
}if(typeof a!=="number"){a=this._getWindowHeight()}this._scrollY=b;this._windowHeight=a;
this.elements.forEach(this.refreshElementMetrics,this)};r.refreshElementMetrics=function(b){var a=y.getDimensions(b.element,b.useRenderedPosition);
var c=y.getPagePosition(b.element,b.useRenderedPosition);b=t.extend(b,a,c);return this.refreshElementState(b)
};r.refreshAllElementStates=function(a){if(typeof a!=="number"){a=this._getScrollY()
}this._scrollY=a;this.elements.forEach(this.refreshElementState,this)};r.refreshElementState=function(b){var a=b.inView;
b.pixelsInView=this._elementPixelsInView(b);b.percentInView=this._elementPercentInView(b);
b.inView=b.pixelsInView>0;if(b.inView){this._ifInView(b,a)}if(a){this._ifAlreadyInView(b)
}return b};r._getWindowHeight=function(){return document.documentElement.clientHeight||window.innerHeight
};r._getScrollY=function(){return y.getScrollY()};w.exports=x},{"./TrackedElement":418,"@marcom/ac-array":344,"@marcom/ac-dom-events":354,"@marcom/ac-dom-metrics/getDimensions":369,"@marcom/ac-dom-metrics/getPagePosition":370,"@marcom/ac-dom-metrics/getScrollY":372,"@marcom/ac-dom-nodes":380,"@marcom/ac-object":406,"@marcom/ac-polyfills/Function/prototype.bind":undefined}],418:[function(r,s,q){var p=r("@marcom/ac-object").create;
var m=r("@marcom/ac-dom-nodes");var l=r("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var k=l.prototype;function n(b,a){if(!m.isElement(b)){throw new TypeError("TrackedElement: "+b+" is not a valid DOM element")
}l.call(this);this.element=b;this.inView=false;this.percentInView=0;this.pixelsInView=0;
this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;this.width=0;
this.height=0;this.useRenderedPosition=a||false}var o=n.prototype=p(k);o.destroy=function(){this.element=null;
k.destroy.call(this)};s.exports=n},{"@marcom/ac-dom-nodes":380,"@marcom/ac-event-emitter-micro":419,"@marcom/ac-object":406}],419:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":420,dup:169}],420:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],421:[function(p,o,q){p("@marcom/ac-polyfills/Object/create");var k=p("@marcom/ac-raf-emitter/RAFEmitter");
var m=p("@marcom/ac-event-emitter-micro").EventEmitterMicro;var l=m.prototype;function j(h,f,d,a,c,g,b){if(arguments.length!==7){throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
}m.call(this);this.section=h;this.element=f;this.componentName=d;this.index=b;this.isEnabled=true
}var n=j.prototype=Object.create(m.prototype);j.prototype.constructor=j;n.destroy=function(){this.teardownEvents();
this.teardownRAFEmitter();this.section=null;l.destroy.call(this)};n.setupEvents=function(){};
n.teardownEvents=function(){};n.setupRAFEmitter=function(){if(this._rafEmitter){return
}this._rafEmitter=new k();this.onDOMRead=this.onDOMRead.bind(this);this.onDOMWrite=this.onDOMWrite.bind(this);
this._rafEmitter.on("update",this.onDOMRead);this._rafEmitter.on("draw",this.onDOMWrite)
};n.teardownRAFEmitter=function(){if(!this._rafEmitter){return}this._rafEmitter.destroy();
this._rafEmitter=null};n.onSectionWillAppearWithPadding=function(b,a){};n.onSectionWillAppear=function(b,a){};
n.activate=function(){};n.animateIn=function(){};n.requestDOMChange=function(){if(!this.isEnabled||!this.section.isVisible){return false
}if(!this._rafEmitter){this.setupRAFEmitter()}return this._rafEmitter.run()};n.onDOMRead=function(a){};
n.onDOMWrite=function(a){};n.deactivate=function(){};n.onScroll=function(b,c,a){};
n.onSectionWillDisappearWithPadding=function(b,a){};n.onSectionWillDisappear=function(b,a){};
n.onResizeDebounced=function(b,c,a){};n.onResizeImmediate=function(b,c,a){};n.onOrientationChange=function(b,c,d,a){};
n.onBreakpoint=function(c,a,d,b){};n.onRetinaChange=function(a,c,d,b){};o.exports=j
},{"@marcom/ac-event-emitter-micro":419,"@marcom/ac-polyfills/Object/create":undefined,"@marcom/ac-raf-emitter/RAFEmitter":631}],422:[function(s,u,p){s("@marcom/ac-polyfills/console.log");
var v=s("@marcom/ac-element-tracker").ElementTracker;var m=s("@marcom/ac-viewport-emitter");
if(!m.viewport){console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.\n\tBreakpoint will always be 'large' and no `onBreakPoint` events will be fired");
m=s("../utils/ViewportEmitterStub")()}var n=s("../utils/Page");var w=s("../model/SectionMap");
var q=s("../model/DataAttributes");var t=s("../model/EnabledFeatures");function r(a){t.init();
n.setPage(this);this.name=this.name||"[NOT SET]";this._mainEl=document.querySelector("main,.main");
this._sections=[];this._visibleSections=[];this._visibleSectionsWithPadding=[];
this._elementTracker=new v(null,{autoStart:true});this._currentSection=null;this._sectionUnderLocalNav=null;
this._currentBreakpoint=m.viewport;this.isRetina=m.retina;this._cachedScrollY=this._getScrollY(true);
this._cachedWindowHeight=this.getWindowHeight(true);this._resizeTimeout=-1;this._resizeTimeoutDelay=this._resizeTimeoutDelay||250;
this.setupSections();this.setupEvents();this._updateSectionVisibility()}var o=r.prototype;
o.destroy=function(){for(var b=0,a=this._sections.length;b<a;b++){this._sections[b].destroy()
}this.teardownEvents();this._elementTracker.destroy();this._elementTracker=null;
this._sections=null;this._currentSection=null;this._sectionUnderLocalNav=null;this._visibleSections=null;
this._mainEl=null;n.removePage(this)};o.setupEvents=function(){this._onScroll=this._onScroll.bind(this);
this._onBreakpoint=this._onBreakpoint.bind(this);this._onRetinaChange=this._onRetinaChange.bind(this);
this._onPageDidAppear=this._onPageDidAppear.bind(this);this._onResizeImmediate=this._onResizeImmediate.bind(this);
this._onOrientationChange=this._onOrientationChange.bind(this);this._onPageWillDisappear=this._onPageWillDisappear.bind(this);
this.performDeepMetricsRefresh=this.performDeepMetricsRefresh.bind(this);window.addEventListener("scroll",this._onScroll);
window.addEventListener("resize",this._onResizeImmediate);window.addEventListener("orientationchange",this._onOrientationChange);
m.on("change",this._onBreakpoint);m.on("retinachange",this._onRetinaChange);n.on(n.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh)
};o.teardownEvents=function(){window.removeEventListener("scroll",this._onScroll);
window.removeEventListener("resize",this._onResizeImmediate);window.removeEventListener("orientationchange",this._onOrientationChange);
m.off("change",this._onBreakpoint);m.off("retinachange",this._onRetinaChange);n.off(n.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh);
this._elementTracker.stop();clearTimeout(this._resizeTimeout)};o.setupSections=function(){var d=this._mainEl.querySelectorAll("section,.section,[data-section-type]");
for(var b=0,a=d.length;b<a;b++){if(d[b].parentElement!==this._mainEl){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",d[b]);
continue}var c=d[b];this._addSectionImp(c)}};o.addSection=function(a){var b=this.getBaseSectionForElement(a);
if(b){return b}b=this._addSectionImp(a);this._updateSectionVisibility();return b
};o.removeSection=function(a){var b=(a instanceof w.BaseSection);var c=b?a:this.getBaseSectionForElement(a);
if(c){this._sections.splice(this._sections.indexOf(c),1)}this._updateSectionVisibility();
return c};o._addSectionImp=function(d){if(d.parentNode!==this._mainEl&&this._isNestedSection(d)){console.warn("BasePage::addSection - Jetpack does not support nested BaseSections, consider using a component instead.",d);
return null}var f=this._elementTracker.addElement(d);this._elementTracker.refreshElementState(f);
var c=(d.hasAttribute(q.SECTION_TYPE))?d.getAttribute(q.SECTION_TYPE):"BaseSection";
if(c===""){c="BaseSection"}if(!w.hasOwnProperty(c)){throw"BasePage::setupSections parsing '#"+d.id+" ."+d.className+"' no section type '"+c+"'found!"
}var a=w[c];var b=new a(d,f,this._getCurrentBreakpoint(),this._getScrollY(),this.getWindowHeight(),this._sections.length);
b.setupEvents();this._sections.push(b);return b};o.getWindowHeight=function(a){if(a){this._cachedWindowHeight=document.documentElement.clientHeight||window.innerHeight
}return this._cachedWindowHeight};o._activateSection=function(a){if(this._currentSection===a){return
}if(this._currentSection){this._currentSection.deactivate()}this._currentSection=a;
this._currentSection.activate()};o._updateSectionVisibility=function(){var h=this._getScrollY();
var j=this.getWindowHeight();var c=n.getViewportPadding();var a=[];var H=this._sections[0];
var f=[];var l=0;var E=[];var b=h-c;var g=h+j+c;for(var I=0,F=this._sections.length;
I<F;I++){var d=this._sections[I];var k=d.trackedElement;var D=k.pixelsInView;if(d.isFixedHero){D=j-h
}if(D>l){H=d;l=D}if(D>0.000001){a.push(d);f.push(d);E.push(d)}else{if(g>k.top&&b<k.bottom){a.push(d);
E.push(d)}}}var i={};var G={};for(I=0,F=Math.max(this._visibleSections.length,a.length);
I<F;I++){if(this._visibleSectionsWithPadding[I]){if(typeof i[I]==="undefined"){i[I]=E.indexOf(this._visibleSectionsWithPadding[I])===-1
}if(i[I]){this._visibleSectionsWithPadding[I].onSectionWillDisappearWithPadding(h,j)
}}if(this._visibleSections[I]&&f.indexOf(this._visibleSections[I])===-1){this._visibleSections[I].onSectionWillDisappear(h,j)
}if(E[I]){if(typeof G[I]==="undefined"){G[I]=this._visibleSectionsWithPadding.indexOf(E[I])===-1
}if(G[I]){E[I].onSectionWillAppearWithPadding(h,j)}}if(f[I]&&this._visibleSections.indexOf(f[I])===-1){f[I].onSectionWillAppear(h,j)
}}this._visibleSections=f;this._visibleSectionsWithPadding=E;this._activateSection(H)
};o._onPageDidAppear=function(a){};o._onPageWillDisappear=function(a){this.destroy()
};o._onBreakpoint=function(c){var h=c.to;var f=c.from;this._currentBreakpoint=h;
var g=this._getScrollY();var b=this.getWindowHeight();this._elementTracker.refreshAllElementMetrics(g,b);
for(var d=0,a=this._sections.length;d<a;d++){this._sections[d].onBreakpoint(h,f,g,b)
}this.performDeepMetricsRefresh()};o._onRetinaChange=function(c){var g=this._getScrollY(true);
var b=this.getWindowHeight(true);this.isRetina=m.retina;var d=this._currentBreakpoint;
this._elementTracker.refreshAllElementMetrics(g,b);for(var f=0,a=this._sections.length;
f<a;f++){this._sections[f].onRetinaChange(this.isRetina,d,g,b)}};o._onScroll=function(c){var f=this._getScrollY(true);
var b=this.getWindowHeight();this._updateSectionVisibility();for(var d=0,a=this._visibleSections.length;
d<a;d++){this._visibleSections[d].onScroll(c,f,b)}};o._onResizeDebounced=function(c){var g=this._getScrollY();
var b=this.getWindowHeight();var d=false;for(var f=0,a=this._sections.length;f<a;
f++){if(!d&&this._sections[f]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
d=true}this._sections[f].onResizeDebounced(c,g,b)}this._updateSectionVisibility()
};o.performDeepMetricsRefresh=function(){var d=this._getScrollY();var b=this.getWindowHeight();
this._elementTracker.refreshAllElementMetrics(d,b);for(var c=0,a=this._sections.length;
c<a;c++){this._sections[c].elementEngagement.refreshAllElementMetrics(d,b);this._sections[c].updateScrollToPosition()
}this._updateSectionVisibility()};o._onOrientationChange=function(c){var f=this._getScrollY(true);
var b=this.getWindowHeight(true);var g=c.orientation;for(var d=0,a=this._sections.length;
d<a;d++){this._sections[d].onOrientationChange(c,g,f,b)}};o._onResizeImmediate=function(c){var g=this._getScrollY();
var b=this.getWindowHeight(true);var d=false;for(var f=0,a=this._sections.length;
f<a;f++){if(!d&&this._sections[f]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
d=true}this._sections[f].onResizeImmediate(c,g,b)}window.clearTimeout(this._resizeTimeout);
this._resizeTimeout=window.setTimeout(this._onResizeDebounced.bind(this,c),this._resizeTimeoutDelay)
};o._getScrollY=function(a){if(a){this._cachedScrollY=window.pageYOffset||(document.documentElement||document.body).scrollTop
}return this._cachedScrollY};o._getVisibleBottomOfPage=function(){return this._getScrollY()+this.getWindowHeight()
};o._getCurrentBreakpoint=function(){return this._currentBreakpoint};o._isNestedSection=function(c){var b=c;
var a=this._sections.length;while(b=b.parentElement){for(var d=0;d<a;d++){if(this._sections[d].element===b){return true
}}}return false};o.getBaseSectionForElement=function(b){for(var c=0,a=this._sections.length;
c<a;c++){if(this._sections[c].element===b){return this._sections[c]}}return null
};u.exports=r},{"../model/DataAttributes":425,"../model/EnabledFeatures":426,"../model/SectionMap":428,"../utils/Page":429,"../utils/ViewportEmitterStub":430,"@marcom/ac-element-tracker":416,"@marcom/ac-polyfills/console.log":undefined,"@marcom/ac-viewport-emitter":725}],423:[function(w,x,t){w("@marcom/ac-polyfills/Object/create");
w("@marcom/ac-polyfills/console.log");var p={getPagePosition:w("@marcom/ac-dom-metrics/getPagePosition")};
var y=w("@marcom/ac-element-engagement").ElementEngagement;var u=w("./../model/DataAttributes");
var s=w("./../model/ComponentMap");var v=w("./BaseComponent");var o=w("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var n=o.prototype;function q(b,c,d,g,a,f){if(arguments.length!==6){throw new Error("Incorrect number of arguments passed to BaseSection")
}o.call(this);this.element=b;this.trackedElement=c;this.elementEngagement=new y(null,{autoStart:false});
this.index=f;this.isVisible=this.trackedElement.pixelsInView>0;this.isVisibleWithPadding=false;
this.hasAnimatedIn=false;this.isActive=false;this.isFixedHero=false;this.cachedBreakpoint=d;
this.cachedScrollPosition=g;this.cachedWindowHeight=a;this.name=this.name||this.element.className;
this.scrollToPosition=0;this.updateScrollToPosition();this._components=[];this.setupComponents(d,g,a);
this.setIsFixedHero();this.performDeprecatedMethodCheck()}var r=q.prototype=Object.create(o.prototype);
q.prototype.constructor=q;r.performDeprecatedMethodCheck=function(){if(this["onViewWillAppear"]){throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass")
}if(this["onViewWillDisappear"]){throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass")
}return true};r.destroy=function(){this.teardownEvents();this.elementEngagement.stop();
this.elementEngagement=null;for(var a=0,b=this._components.length;a<b;a++){this._components[a].destroy()
}this._components=null;this.trackedElement=null;this.element=null;n.destroy.call(this)
};r.setupEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].setupEvents()
}};r.teardownEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].teardownEvents()
}};r.setupComponents=function(){var c=Array.prototype.slice.call(this.element.querySelectorAll("["+u.COMPONENT_LIST+"]"));
if(this.element.hasAttribute(u.COMPONENT_LIST)){c.push(this.element)}for(var f=0;
f<c.length;f++){var a=c[f];var b=a.getAttribute(u.COMPONENT_LIST);if(b.indexOf("|")!==-1){throw"BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '"+b+"'"
}var d=b.split(" ");for(var g=0,i=d.length;g<i;g++){var h=d[g];if(h===""||h===" "){continue
}this.addComponentOfType(h,a)}setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement),100)
}};r.addComponentOfType=function(c,a){if(!s.hasOwnProperty(c)){throw"BaseSection::setupComponents parsing '#"+a.id+" ."+a.className+"' no component type '"+c+"'found!"
}var b=s[c];if(!this.componentIsSupported(b,c)){console.log("BaseSection::setupComponents unsupported component '"+c+"'. Reason: '"+c+".IS_SUPPORTED' returned false");
return}var d=new b(this,a,c,this.cachedBreakpoint,this.cachedScrollPosition,this.cachedWindowHeight,this._components.length);
this._components.push(d);return d};r.removeComponentOfType=function(b){var a=this.getComponentOfType(b);
if(a===null){return}this.removeComponent(a)};r.removeComponent=function(a){var b=this._components.indexOf(a);
if(b===-1){return}this._components.splice(b,1);a.destroy()};r.activate=function(){this.element.classList.add("active");
for(var a=0,b=this._components.length;a<b;a++){if(!this._components[a].isEnabled){continue
}this._components[a].activate()}this.isActive=true;if(!this.hasAnimatedIn){this.element.classList.add("animated");
this.animateIn();this.hasAnimatedIn=true}};r.deactivate=function(){this.element.classList.remove("active");
this.isActive=false;for(var a=0,b=this._components.length;a<b;a++){if(!this._components[a].isEnabled){continue
}this._components[a].deactivate()}};r.animateIn=function(){for(var a=0,b=this._components.length;
a<b;a++){if(!this._components[a].isEnabled){continue}this._components[a].animateIn()
}};r.onResizeImmediate=function(b,f,a){this.cachedScrollPosition=f;this.cachedWindowHeight=a;
var c=false;for(var d=0,g=this._components.length;d<g;d++){if(!this._components[d].isEnabled){continue
}if(!c&&this._components[d]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeImmediate(b,f,a)}};r.onResizeDebounced=function(b,f,a){this.updateScrollToPosition();
var c=false;for(var d=0,g=this._components.length;d<g;d++){if(!this._components[d].isEnabled){continue
}if(!c&&this._components[d]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeDebounced(b,f,a)}this.elementEngagement.refreshAllElementMetrics(f,a)
};r.onBreakpoint=function(d,a,f,b){this.cachedBreakpoint=d;for(var c=0,g=this._components.length;
c<g;c++){if(!this._components[c].isEnabled){continue}this._components[c].onBreakpoint(d,a,f,b)
}};r.onRetinaChange=function(a,c,f,b){for(var d=0,g=this._components.length;d<g;
d++){if(!this._components[d].isEnabled){continue}this._components[d].onRetinaChange(a,c,f,b)
}this.elementEngagement.refreshAllElementMetrics(f,b)};r.onOrientationChange=function(b,d,f,a){this.cachedScrollPosition=f;
this.cachedWindowHeight=a;for(var c=0,g=this._components.length;c<g;c++){if(!this._components[c].isEnabled){continue
}this._components[c].onOrientationChange(b,d,f,a)}};r.onScroll=function(b,d,a){this.cachedScrollPosition=d;
this.elementEngagement.refreshAllElementStates(d);for(var c=0,f=this._components.length;
c<f;c++){if(!this._components[c].isEnabled){continue}this._components[c].onScroll(b,d,a)
}};r.onSectionWillAppearWithPadding=function(c,a){this.cachedScrollPosition=c;this.isVisibleWithPadding=true;
this.elementEngagement.refreshAllElementStates(c);for(var b=0,d=this._components.length;
b<d;b++){this._components[b].onSectionWillAppearWithPadding(c,a)}};r.onSectionWillAppear=function(c,a){this.cachedScrollPosition=c;
this.isVisible=true;this.elementEngagement.refreshAllElementStates(c);for(var b=0,d=this._components.length;
b<d;b++){this._components[b].onSectionWillAppear(c,a)}};r.onSectionWillDisappearWithPadding=function(c,a){this.cachedScrollPosition=c;
this.isVisibleWithPadding=false;for(var b=0,d=this._components.length;b<d;b++){this._components[b].onSectionWillDisappearWithPadding(c,a)
}};r.onSectionWillDisappear=function(c,a){this.cachedScrollPosition=c;this.isVisible=false;
for(var b=0,d=this._components.length;b<d;b++){this._components[b].onSectionWillDisappear(c,a)
}};r.getComponentOfType=function(b){if(!s.hasOwnProperty(b)){throw"BaseSection::getComponentOfType no component type '"+b+"' exist in ComponentMap!"
}for(var a=0,c=this._components.length;a<c;a++){if(this._components[a].componentName===b){return this._components[a]
}}return null};r.getAllComponentsOfType=function(c){if(!s.hasOwnProperty(c)){throw"BaseSection::getAllComponentsOfType no component type '"+c+"' exist in ComponentMap!"
}var a=[];for(var b=0,d=this._components.length;b<d;b++){if(this._components[b].componentName===c){a.push(this._components[b])
}}return a};r.updateScrollToPosition=function(){return this.scrollToPosition=p.getPagePosition(this.element).top
};r.setIsFixedHero=function(){if(this.index!==0){this.isFixedHero=false}else{var a=window.getComputedStyle(this.element);
this.isFixedHero=a.position==="fixed"}};q.prototype.componentIsSupported=function(a,c){var d=a.IS_SUPPORTED;
if(d===undefined){return true}if(typeof d!=="function"){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}var b=a.IS_SUPPORTED();if(b===undefined){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}return b};x.exports=q},{"./../model/ComponentMap":424,"./../model/DataAttributes":425,"./BaseComponent":421,"@marcom/ac-dom-metrics/getPagePosition":14,"@marcom/ac-element-engagement":342,"@marcom/ac-event-emitter-micro":419,"@marcom/ac-polyfills/Object/create":undefined,"@marcom/ac-polyfills/console.log":undefined}],424:[function(d,g,f){g.exports={BaseComponent:d("../core/BaseComponent")}
},{"../core/BaseComponent":421}],425:[function(d,g,f){g.exports={PAGE_TYPE:"data-page-type",SECTION_TYPE:"data-section-type",JUMP_SECTION_NAME:"data-page-jump-name",COMPONENT_LIST:"data-component-list"}
},{}],426:[function(i,h,f){var g={isDesktop:i("@marcom/ac-feature/isDesktop"),isRetina:i("@marcom/ac-feature/isRetina")};
h.exports={TOUCH:undefined,SVG:undefined,PAGE_JUMP:undefined,IS_IE8:undefined,IS_DESKTOP:undefined,IS_RETINA:undefined,init:function(){var a=document.getElementsByTagName("html")[0];
this.TOUCH=a.classList.contains("touch");this.SVG=a.classList.contains("svg");this.PAGE_JUMP=a.classList.contains("pageJump");
this.IS_IE8=a.classList.contains("ie8");this.IS_DESKTOP=g.isDesktop();this.IS_RETINA=g.isRetina()
},extend:function(b){if(!b.hasOwnProperty("init")||(typeof b.init!=="function")){throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
}var a=this.init;var c=b.init;var d=Object.assign(this,b);d.init=function(){if(this.HAS_INITIALIZED){return
}this.HAS_INITIALIZED=true;a.call(d);c.call(d)};return d},HAS_INITIALIZED:false}
},{"@marcom/ac-feature/isDesktop":200,"@marcom/ac-feature/isRetina":202}],427:[function(d,g,f){g.exports={BasePage:d("../core/BasePage")}
},{"../core/BasePage":422}],428:[function(d,g,f){g.exports={BaseSection:d("../core/BaseSection")}
},{"../core/BaseSection":423}],429:[function(h,l,i){var j=h("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function m(){j.call(this);this._page=null;this.viewportPaddingRatio=1}var k=m.prototype=Object.create(j.prototype);
m.prototype.constructor=m;k.getPage=function(){return this._page};k.setPage=function(a){this._page=a
};k.removePage=function(a){if(a===this._page){this._page=null}};k.getViewportPadding=function(){return this.getPage().getWindowHeight()*this.viewportPaddingRatio
};k.deepRefreshAllElementMetrics=function(){this.trigger(m.prototype.DEEP_REFRESH_ALL_METRICS)
};k.DEEP_REFRESH_ALL_METRICS="page.deep_refresh_all_metrics";l.exports=new m()},{"@marcom/ac-event-emitter-micro":419}],430:[function(d,g,f){g.exports=function(){var a;
if(window.ViewportEmitterTestProxy){a=window.ViewportEmitterTestProxy}else{a={};
a.viewport="large";a.on=a.off=function(){}}return a}},{}],431:[function(d,g,f){arguments[4][236][0].apply(f,arguments)
},{dup:236}],432:[function(d,g,f){arguments[4][238][0].apply(f,arguments)},{dup:238}],433:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":434,dup:169}],434:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],435:[function(d,g,f){arguments[4][107][0].apply(f,arguments)},{dup:107}],436:[function(v,w,t){var n=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var q=v("@marcom/ac-dom-events/utils/addEventListener");var x=v("@marcom/ac-dom-events/utils/removeEventListener");
var r=v("@marcom/ac-object/create");var u=v("./internal/KeyEvent");var p="keydown";
var o="keyup";function y(a){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=a||document;q(this._context,p,this._DOMKeyDown,true);
q(this._context,o,this._DOMKeyUp,true);n.call(this)}var s=y.prototype=r(n.prototype);
s.onDown=function(b,a){return this.on(p+":"+b,a)};s.onceDown=function(b,a){return this.once(p+":"+b,a)
};s.offDown=function(b,a){return this.off(p+":"+b,a)};s.onUp=function(b,a){return this.on(o+":"+b,a)
};s.onceUp=function(b,a){return this.once(o+":"+b,a)};s.offUp=function(b,a){return this.off(o+":"+b,a)
};s.isDown=function(a){a+="";return this._keysDown[a]||false};s.isUp=function(a){return !this.isDown(a)
};s.destroy=function(){x(this._context,p,this._DOMKeyDown,true);x(this._context,o,this._DOMKeyUp,true);
this._keysDown=null;this._context=null;n.prototype.destroy.call(this);return this
};s._DOMKeyDown=function(b){var c=this._normalizeKeyboardEvent(b);var a=c.keyCode+="";
this._trackKeyDown(a);this.trigger(p+":"+a,c)};s._DOMKeyUp=function(b){var c=this._normalizeKeyboardEvent(b);
var a=c.keyCode+="";this._trackKeyUp(a);this.trigger(o+":"+a,c)};s._normalizeKeyboardEvent=function(a){return new u(a)
};s._trackKeyUp=function(a){if(this._keysDown[a]){this._keysDown[a]=false}};s._trackKeyDown=function(a){if(!this._keysDown[a]){this._keysDown[a]=true
}};w.exports=y},{"./internal/KeyEvent":438,"@marcom/ac-dom-events/utils/addEventListener":431,"@marcom/ac-dom-events/utils/removeEventListener":432,"@marcom/ac-event-emitter-micro":433,"@marcom/ac-object/create":435}],437:[function(i,h,f){var g=i("./Keyboard");
h.exports=new g()},{"./Keyboard":436}],438:[function(k,j,g){var h=["keyLocation"];
function i(b){this.originalEvent=b;var a;for(a in b){if(h.indexOf(a)===-1&&typeof b[a]!=="function"){this[a]=b[a]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}i.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};j.exports=i},{}],439:[function(d,g,f){g.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],440:[function(g,i,h){var j=g("./ac-ajax/Ajax");var k=g("./ac-ajax/Request");
i.exports=new j();i.exports.Ajax=j;i.exports.Request=k},{"./ac-ajax/Ajax":441,"./ac-ajax/Request":442}],441:[function(o,l,i){var m=o("./Request");
var k=o("./XDomain-request");var j=o("./URLParser");var n=function(){};n._Request=m;
n.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var a=1;
a<arguments.length;a++){for(var b in arguments[a]){if(arguments[a].hasOwnProperty(b)){arguments[0][b]=arguments[a][b]
}}}return arguments[0]},_getOptions:function(b,a){return this._extend({},this._defaults,a,b)
},_isCrossDomainRequest:function(a){var b=new j();var c=b.parse(window.location.href).origin;
var d=b.parse(a).origin;b.destroy();return(d!==c)},create:function(a){return new m(a)
},cors:function(a){var b=(window.XDomainRequest&&document.documentMode<10)?k:m;
return new b(a)},get:function(a){var b;a=this._getOptions({method:"get"},a);if(this._isCrossDomainRequest(a.url)){b=this.cors(a)
}else{b=this.create(a)}return b.send()},getJSON:function(a){return this.get(a).then(function(b){return JSON.parse(b.responseText)
})},head:function(a){a=this._getOptions({method:"head"},a);return this.create(a).send()
},isCrossDomainRequest:function(a){return this._isCrossDomainRequest(a)},post:function(a){a=this._getOptions({method:"post"},a);
return this.create(a).send()}};l.exports=n},{"./Request":442,"./URLParser":443,"./XDomain-request":444}],442:[function(f,h,g){var i=function(a){this._initialize(a)
};i.create=function(){var a=function(){};a.prototype=i.prototype;return new a()
};i.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(a){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(a,b){this.resolve=a;
this.reject=b}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(a){var b=this._validateConfiguration(a);if(b){throw b}this._configuration=a;
var c=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(c,this._configuration.url);this._setRequestHeaders(a.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(a){if(a){a.forEach(function(b){this.xhr.setRequestHeader(b.name,b.value)
},this)}},_setTimeout:function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(a>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),a)
}},_timeout:null,_validateConfiguration:function(a){if(!a){return"Must provide a configuration object"
}var b=[];var c=a.headers;if(!a.url){b.push("Must provide a url")}if(!a.method){b.push("Must provide a method")
}if(c){if(!Array.isArray(c)){return"Must provide an array of headers"}this._validateHeaders(c,b)
}return b.join(", ")},_validateHeaders:function(b,a){for(var c=0,d=b.length;c<d;
c++){if(!b[c].hasOwnProperty("name")||!b[c].hasOwnProperty("value")){a.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};h.exports=i},{}],443:[function(k,j,g){var h=function(){this.parser=null
};var i=h.prototype;i.parse=function(b){var d;var a;var f;var m;var c;if(typeof b!=="string"){throw new TypeError(b+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(b);
f=this.parser.hostname;a=this.parser.protocol;m=this._normalizePort(this.parser);
d=this.parser.origin||this._constructOriginString(this.parser,m);c=this.parser.search;
return{originalPath:b,qualifiedPath:this.parser.href,protocol:a,hostname:f,origin:d,port:m,search:c}
};i.destroy=function(){this.parser=null};i._constructOriginString=function(a,c){var b=c?":"+c:"";
return a.protocol+"//"+a.hostname+b};i._normalizePort=function(a){return(a.port==="80"||a.port==="443"||a.port==="0")?"":a.port
};i._qualifyPath=function(a){this.parser.href=a;this.parser.href=this.parser.href
};j.exports=h},{}],444:[function(g,j,h){var k=g("./Request");var i=function(a){k.apply(this,arguments)
};i.prototype=k.create();i.prototype._getTransport=function(){return new XDomainRequest()
};i.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};i.prototype._setTimeout=function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}}if(a>0){this.xhr.timeout=a}};i.prototype._sendXHR=function(){setTimeout(function(){k.prototype._sendXHR.call(this)
}.bind(this),0)};j.exports=i},{"./Request":442}],445:[function(d,g,f){g.exports.EventEmitter=d("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":446}],446:[function(r,s,q){var o="EventEmitter:propagation";
var l=function(a){if(a){this.context=a}};var p=l.prototype;var n=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var u=function(a,f){var d=a[0];var c=a[1];var g=a[2];if((typeof d!=="string"&&typeof d!=="object")||d===null||Array.isArray(d)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof d==="string")&&!c){throw new Error("Expecting a callback function to be provided.")
}if(c&&(typeof c!=="function")){if(typeof d==="object"&&typeof c==="object"){g=c
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof d==="object"){for(var b in d){f.call(this,b,d[b],g)
}}if(typeof d==="string"){d=d.split(" ");d.forEach(function(h){f.call(this,h,c,g)
},this)}};var m=function(d,c){var b;var a;var f;b=n.call(this)[d];if(!b||b.length===0){return
}b=b.slice();this._stoppedImmediatePropagation=false;for(a=0,f=b.length;a<f;a++){if(this._stoppedImmediatePropagation||c(b[a],a)){break
}}};var t=function(a,d,c){var b=-1;m.call(this,d,function(f,g){if(f.callback===c){b=g;
return true}});if(b===-1){return}a[d].splice(b,1)};p.on=function(){var a=n.call(this);
u.call(this,arguments,function(d,c,b){a[d]=a[d]||(a[d]=[]);a[d].push({callback:c,context:b})
});return this};p.once=function(){u.call(this,arguments,function(a,c,b){var d=function(f){c.call(b||this,f);
this.off(a,d)};this.on(a,d,this)});return this};p.off=function(f,c){var a=n.call(this);
if(arguments.length===0){this._events={}}else{if(!f||(typeof f!=="string"&&typeof f!=="object")||Array.isArray(f)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof f==="object"){for(var d in f){t.call(this,a,d,f[d])}}if(typeof f==="string"){var b=f.split(" ");
if(b.length===1){if(c){t.call(this,a,f,c)}else{a[f]=[]}}else{b.forEach(function(g){a[g]=[]
})}}return this};p.trigger=function(a,c,b){if(!a){throw new Error("trigger method requires an event name")
}if(typeof a!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(b&&typeof b!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}a=a.split(" ");a.forEach(function(d){m.call(this,d,function(f){f.callback.call(f.context||this.context||this,c)
}.bind(this));if(!b){m.call(this,o,function(f){var g=d;if(f.prefix){g=f.prefix+g
}f.emitter.trigger(g,c)})}},this);return this};p.propagateTo=function(a,c){var b=n.call(this);
if(!b[o]){this._events[o]=[]}b[o].push({emitter:a,prefix:c})};p.stopPropagatingTo=function(d){var a=n.call(this);
if(!d){a[o]=[];return}var c=a[o];var f=c.length;var b;for(b=0;b<f;b++){if(c[b].emitter===d){c.splice(b,1);
break}}};p.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};p.has=function(b,c,g){var h=n.call(this);var a=h[b];if(arguments.length===0){return Object.keys(h)
}if(!a){return false}if(!c){return(a.length>0)?true:false}for(var i=0,f=a.length;
i<f;i++){var d=a[i];if(g&&c&&d.context===g&&d.callback===c){return true}else{if(c&&!g&&d.callback===c){return true
}}}return false};s.exports=l},{}],447:[function(d,g,f){(function(b,a){if(typeof f==="object"&&f){g.exports=a
}else{if(typeof define==="function"&&define.amd){define(a)}else{b.Deferred=a}}}(this,(function(){var s={};
var t,c,a,u,o,p,b,r;t={0:"pending",1:"resolved",2:"rejected"};c=function(k,i){var l,h,j,m,n;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=i;h=this.pending;j=h.length;for(l=0;l<j;l++){m=h[l];if(m[k]){n=m[k](i)
}if(typeof n==="object"&&n.hasOwnProperty("then")&&n.hasOwnProperty("status")){n.then(function(w){m.deferred.resolve(w)
},function(w){m.deferred.reject(w)},function(w){m.deferred.progress(w)})}else{m.deferred[k](n||undefined)
}}if(k!=="progress"){h=[]}return true};p=function(h,i){this.then=h;this.status=i
};b=p.prototype;r=function(h){return h};b.success=function(h,i){return this.then(h.bind(i),r,r)
};b.fail=function(h,i){return this.then(r,h.bind(i),r)};b.progress=function(h,i){return this.then(r,r,h.bind(i))
};u=function(h){if(typeof h!=="function"){return function(){}}return h};a=function(h,i,j){this.resolve=u(h);
this.reject=u(i);this.progress=u(j);this.deferred=new o()};o=function(){this.pending=[];
this._status=0;this._promise=new p(this.then.bind(this),this.status.bind(this))
};o.prototype={status:function(){return t[this._status]},promise:function(){return this._promise
},progress:function(h){c.call(this,"progress",h);return this._promise},resolve:function(h){c.call(this,"resolve",h);
if(this._status===0){this._status=1}return this._promise},reject:function(h){c.call(this,"reject",h);
if(this._status===0){this._status=2}return this._promise},then:function(h,j,k){var l,i;
i=new a(h,j,k);if(this._status===0){this.pending.push(i)}else{if(this._status===1&&typeof h==="function"){l=h(this.data);
if(typeof l==="object"&&l.hasOwnProperty("then")&&l.hasOwnProperty("status")){l.then(function(m){i.deferred.resolve(m)
},function(m){i.deferred.reject(m)},function(m){i.deferred.progress(m)})}else{i.deferred.resolve(l)
}}else{if(this._status===2&&typeof j==="function"){l=j(this.data);i.deferred.reject(l)
}}}return i.deferred.promise()}};var q=function(){var j,k,h,i,l;j=[].slice.call(arguments);
k=new o();h=0;i=function(m){h--;var n=j.indexOf(this);j[n]=m;if(h===0){k.resolve(j)
}};l=function(m){k.reject(m)};j.forEach(function(m){if(m.then){h++}});j.forEach(function(m){if(m.then){m.then(i.bind(m),l)
}});return k.promise()};o.when=q;s.Deferred=o;return s}())))},{}],448:[function(q,r,p){function n(){}n.prototype={resolve:function m(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function k(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function s(){var a="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(a);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function o(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function l(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};r.exports=n},{}],449:[function(q,p,k){var m=new (q("./ac-deferred/Deferred"))(),n=q("smartsign-deferred").Deferred;
function j(){this._defer=new n()}j.prototype=m;p.exports.join=function l(){return n.when.apply(null,[].slice.call(arguments))
};p.exports.all=function o(a){return n.when.apply(null,a)};p.exports.Deferred=j
},{"./ac-deferred/Deferred":448,"smartsign-deferred":447}],450:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":451,"./ac-asset-loader/AssetLoader/Asset":452,"./ac-asset-loader/AssetLoader/Asset/Ajax":453,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":454,"./ac-asset-loader/AssetLoader/Asset/Binary":455,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":456,"./ac-asset-loader/AssetLoader/Asset/Img":457,"./ac-asset-loader/AssetLoader/Asset/Video":460,"./ac-asset-loader/AssetLoader/Queue":461,"@marcom/ac-polyfills":undefined}],451:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":462,"./AssetLoader/Asset/Ajax":453,"./AssetLoader/Asset/Ajax/JSON":454,"./AssetLoader/Asset/Img":457,"./AssetLoader/Asset/Video":460,"./AssetLoader/Queue":461,"@marcom/ac-event-emitter":445,"@marcom/ac-object":591}],452:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":462,"@marcom/ac-event-emitter":445,"ac-deferred":449}],453:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":452,"@marcom/ac-ajax":440,"@marcom/ac-object":591}],454:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":453,"@marcom/ac-object":591}],455:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":452,"./Binary/Chunk":456,"@marcom/ac-ajax":440,"@marcom/ac-object":591}],456:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":452,"@marcom/ac-ajax":440,"@marcom/ac-object":591}],457:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":452,"@marcom/ac-object":591}],458:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":452,"./SplitFile/Chunk":459,"@marcom/ac-ajax":440,"@marcom/ac-object":591}],459:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":452,"@marcom/ac-ajax":440,"@marcom/ac-object":591}],460:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function")
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":452,"./Binary":455,"./SplitFile":458,"@marcom/ac-feature":190,"@marcom/ac-object":591}],461:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":462,"@marcom/ac-event-emitter":445,"@marcom/ac-object":591,"ac-deferred":449}],462:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],463:[function(d,g,f){arguments[4][222][0].apply(f,arguments)
},{"./shared/getEventType":472,"./utils/addEventListener":475,dup:222}],464:[function(d,g,f){arguments[4][223][0].apply(f,arguments)
},{"./shared/getEventType":472,"./utils/dispatchEvent":476,dup:223}],465:[function(d,g,f){arguments[4][6][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":466,"./shared/prefixHelper":467,"./shared/windowFallbackEventTypes":468,"./utils/eventTypeAvailable":469,dup:6}],466:[function(d,g,f){arguments[4][7][0].apply(f,arguments)
},{dup:7}],467:[function(d,g,f){arguments[4][8][0].apply(f,arguments)},{dup:8}],468:[function(d,g,f){arguments[4][9][0].apply(f,arguments)
},{dup:9}],469:[function(d,g,f){arguments[4][10][0].apply(f,arguments)},{dup:10}],470:[function(d,g,f){arguments[4][230][0].apply(f,arguments)
},{dup:230}],471:[function(d,g,f){arguments[4][231][0].apply(f,arguments)},{"./shared/getEventType":472,"./utils/removeEventListener":477,dup:231}],472:[function(d,g,f){arguments[4][232][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":465,dup:232}],473:[function(d,g,f){arguments[4][234][0].apply(f,arguments)
},{dup:234}],474:[function(d,g,f){arguments[4][235][0].apply(f,arguments)},{dup:235}],475:[function(d,g,f){arguments[4][236][0].apply(f,arguments)
},{dup:236}],476:[function(d,g,f){arguments[4][237][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":undefined,dup:237}],477:[function(d,g,f){arguments[4][238][0].apply(f,arguments)
},{dup:238}],478:[function(d,g,f){arguments[4][445][0].apply(f,arguments)},{"./ac-event-emitter/EventEmitter":479,dup:445}],479:[function(d,g,f){arguments[4][446][0].apply(f,arguments)
},{dup:446}],480:[function(d,g,f){g.exports={DOMEmitter:d("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":481}],481:[function(s,t,r){var q;var l=s("ac-event-emitter").EventEmitter,m=s("./DOMEmitterEvent"),p={addEventListener:s("@marcom/ac-dom-events/addEventListener"),removeEventListener:s("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:s("@marcom/ac-dom-events/dispatchEvent")},u={querySelectorAll:s("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:s("@marcom/ac-dom-traversal/matchesSelector")};
var n="dom-emitter";function o(a){if(a===null){return}this.el=a;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new l()}q=o.prototype;q.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};q.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};q.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};q.has=function(b,d,f,h){var g,c;if(typeof d==="string"){g=d;c=f}else{c=d;
h=f}if(g){var a=this._getDelegateFuncBindingIdx(b,g,c,h,true);if(a>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};q.trigger=function(i,a,h,c){i=this._parseEventNames(i);i=this._cleanStringData(i);
var f,d,g,b=i.length;if(typeof a==="string"){f=this._cleanStringData(a);d=h}else{d=a;
c=h}for(g=0;g<b;g++){this._triggerDOMEvents(i[g],d,f)}return this};q.emitterTrigger=function(a,d,c){if(!this._eventEmitter){return this
}a=this._parseEventNames(a);a=this._cleanStringData(a);d=new m(d,this);var f,b=a.length;
for(f=0;f<b;f++){this._eventEmitter.trigger(a[f],d,c)}return this};q.propagateTo=function(b,a){this._eventEmitter.propagateTo(b,a);
return this};q.stopPropagatingTo=function(a){this._eventEmitter.stopPropagatingTo(a);
return this};q.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};q.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q._parseEventNames=function(a){if(!a){return[a]
}return a.split(" ")};q._onListenerEvent=function(c,a){var b=new m(a,this);this._eventEmitter.trigger(c,b,false)
};q._setListener=function(a){this._bindings[a]=this._onListenerEvent.bind(this,a);
p.addEventListener(this.el,a,this._bindings[a])};q._removeListener=function(a){p.removeEventListener(this.el,a,this._bindings[a]);
this._bindings[a]=null};q._triggerInternalEvent=function(b,a){this.emitterTrigger(n+":"+b,a)
};q._normalizeArgumentsAndCall=function(b,h){var c={};if(b.length===0){h.call(this,c);
return}if(typeof b[0]==="string"||b[0]===null){b=this._cleanStringData(b);c.events=b[0];
if(typeof b[1]==="string"){c.delegateQuery=b[1];c.callback=b[2];c.context=b[3]}else{c.callback=b[1];
c.context=b[2]}h.call(this,c);return}var a,f,d=":",g=b[0];for(a in g){if(g.hasOwnProperty(a)){c={};
f=this._cleanStringData(a.split(d));c.events=f[0];c.delegateQuery=f[1];c.callback=g[a];
c.context=b[1];h.call(this,c)}}};q._registerDelegateFunc=function(g,d,c,b,f){var a=this._delegateFunc.bind(this,g,d,c,f);
this._delegateFuncs[d]=this._delegateFuncs[d]||{};this._delegateFuncs[d][g]=this._delegateFuncs[d][g]||[];
this._delegateFuncs[d][g].push({func:b,context:f,delegateFunc:a});return a};q._cleanStringData=function(h){var i=false;
if(typeof h==="string"){h=[h];i=true}var a=[],f,c,d,g,b=h.length;for(f=0;f<b;f++){c=h[f];
if(typeof c==="string"){if(c===""||c===" "){continue}d=c.length;while(c[0]===" "){c=c.slice(1,d);
d--}while(c[d-1]===" "){c=c.slice(0,d-1);d--}}a.push(c)}if(i){return a[0]}return a
};q._unregisterDelegateFunc=function(g,c,b,d){if(!this._delegateFuncs[c]||!this._delegateFuncs[c][g]){return
}var f=this._getDelegateFuncBindingIdx(g,c,b,d),a;if(f>-1){a=this._delegateFuncs[c][g][f].delegateFunc;
this._delegateFuncs[c][g].splice(f,1);if(this._delegateFuncs[c][g].length===0){this._delegateFuncs[c][g]=null
}}return a};q._unregisterDelegateFuncs=function(b,c){if(!this._delegateFuncs[c]){return
}if(b!==null&&!this._delegateFuncs[c][b]){return}if(b===null){var a;for(a in this._delegateFuncs[c]){if(this._delegateFuncs[c].hasOwnProperty(a)){this._unbindDelegateFunc(a,c)
}}return}this._unbindDelegateFunc(b,c)};q._unbindDelegateFunc=function(b,f){var d,c,a=0;
while(this._delegateFuncs[f][b]&&this._delegateFuncs[f][b][a]){d=this._delegateFuncs[f][b][a];
c=this._delegateFuncs[f][b][a].length;this._off({events:b,delegateQuery:f,callback:d.func,context:d.context});
if(this._delegateFuncs[f][b]&&c===this._delegateFuncs[f][b].length){a++}}d=c=null
};q._unregisterDelegateFuncsByEvent=function(b){var a;for(a in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(a)){this._unregisterDelegateFuncs(b,a)
}}};q._delegateFunc=function(b,f,c,h,d){if(this._targetHasDelegateAncestor(d.target,f)){var a=Array.prototype.slice.call(arguments,0),g=a.slice(4,a.length);
h=h||window;if(typeof d.detail==="object"){g[0]=d.detail}c.apply(h,g)}};q._targetHasDelegateAncestor=function(c,a){var b=c;
while(b&&b!==this.el&&b!==document.documentElement){if(u.matchesSelector(b,a)){return true
}b=b.parentNode}return false};q._on=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
a=this._parseEventNames(a);a.forEach(function(h,w,j,i,k){if(!this.has(k)){this._setListener(k)
}if(typeof i==="string"){h=this._registerDelegateFunc(k,i,h,w,j)}this._triggerInternalEvent("willon",{evt:k,callback:h,context:j,delegateQuery:i});
this._eventEmitter.on(k,h,j);this._triggerInternalEvent("didon",{evt:k,callback:h,context:j,delegateQuery:i})
}.bind(this,c,b,g,f));a=c=b=f=g=null};q._off=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
if(typeof a==="undefined"){this._eventEmitter.off();var h;for(h in this._bindings){if(this._bindings.hasOwnProperty(h)){this._removeListener(h)
}}for(h in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(h)){this._delegateFuncs[h]=null
}}return}a=this._parseEventNames(a);a.forEach(function(i,y,k,j,x){if(typeof j==="string"&&typeof y==="function"){i=this._unregisterDelegateFunc(x,j,y,k);
if(!i){return}}if(typeof j==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncs(x,j);
return}if(typeof x==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncsByEvent(x);
if(typeof j==="string"){return}}this._triggerInternalEvent("willoff",{evt:x,callback:i,context:k,delegateQuery:j});
this._eventEmitter.off(x,i,k);this._triggerInternalEvent("didoff",{evt:x,callback:i,context:k,delegateQuery:j});
if(!this.has(x)){this._removeListener(x)}}.bind(this,c,b,g,f));a=c=b=f=g=null};
q._once=function(d){var b=d.events,c=d.callback,f=d.delegateQuery,a=d.context;b=this._parseEventNames(b);
b.forEach(function(g,i,h,j){if(typeof h==="string"){return this._handleDelegateOnce(j,g,i,h)
}if(!this.has(j)){this._setListener(j)}this._triggerInternalEvent("willonce",{evt:j,callback:g,context:i,delegateQuery:h});
this._eventEmitter.once.call(this,j,g,i);this._triggerInternalEvent("didonce",{evt:j,callback:g,context:i,delegateQuery:h})
}.bind(this,c,a,f));b=c=f=a=null};q._handleDelegateOnce=function(b,c,a,d){this._triggerInternalEvent("willonce",{evt:b,callback:c,context:a,delegateQuery:d});
this._on({events:b,context:a,delegateQuery:d,callback:this._getDelegateOnceCallback.bind(this,b,c,a,d),unboundCallback:c});
this._triggerInternalEvent("didonce",{evt:b,callback:c,context:a,delegateQuery:d});
return this};q._getDelegateOnceCallback=function(b,c,g,d){var a=Array.prototype.slice.call(arguments,0),f=a.slice(4,a.length);
c.apply(g,f);this._off({events:b,delegateQuery:d,callback:c,context:g})};q._getDelegateFuncBindingIdx=function(j,c,f,h,i){var a=-1;
if(this._delegateFuncs[c]&&this._delegateFuncs[c][j]){var d,g,b=this._delegateFuncs[c][j].length;
for(d=0;d<b;d++){g=this._delegateFuncs[c][j][d];if(i&&typeof f==="undefined"){f=g.func
}if(g.func===f&&g.context===h){a=d;break}}}return a};q._triggerDOMEvents=function(h,d,f){var a=[this.el];
if(f){a=u.querySelectorAll(f,this.el)}var g,c,b=a.length;for(g=0;g<b;g++){p.dispatchEvent(a[g],h,{bubbles:true,cancelable:true,detail:d})
}};t.exports=o},{"./DOMEmitterEvent":482,"@marcom/ac-dom-events/addEventListener":463,"@marcom/ac-dom-events/dispatchEvent":464,"@marcom/ac-dom-events/removeEventListener":471,"@marcom/ac-dom-traversal/matchesSelector":44,"@marcom/ac-dom-traversal/querySelectorAll":50,"ac-event-emitter":478}],482:[function(h,m,i){var k={preventDefault:h("@marcom/ac-dom-events/preventDefault"),stopPropagation:h("@marcom/ac-dom-events/stopPropagation"),target:h("@marcom/ac-dom-events/target")};
var l;var j=function(a,b){this._domEmitter=b;this.originalEvent=a||{};this._originalTarget=k.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(a){this.data=this.originalEvent;this.originalEvent={}}}};l=j.prototype;
l.preventDefault=function(){k.preventDefault(this.originalEvent)};l.stopPropagation=function(){k.stopPropagation(this.originalEvent)
};l.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};l._isDOMEvent=function(a){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&a instanceof CustomEvent)){return true
}return false};m.exports=j},{"@marcom/ac-dom-events/preventDefault":470,"@marcom/ac-dom-events/stopPropagation":473,"@marcom/ac-dom-events/target":474}],483:[function(d,g,f){arguments[4][21][0].apply(f,arguments)
},{dup:21}],484:[function(d,g,f){arguments[4][22][0].apply(f,arguments)},{dup:22}],485:[function(d,g,f){arguments[4][23][0].apply(f,arguments)
},{dup:23}],486:[function(d,g,f){arguments[4][377][0].apply(f,arguments)},{dup:377}],487:[function(d,g,f){arguments[4][24][0].apply(f,arguments)
},{dup:24}],488:[function(d,g,f){arguments[4][25][0].apply(f,arguments)},{dup:25}],489:[function(d,g,f){arguments[4][380][0].apply(f,arguments)
},{"./COMMENT_NODE":483,"./DOCUMENT_FRAGMENT_NODE":484,"./DOCUMENT_NODE":485,"./DOCUMENT_TYPE_NODE":486,"./ELEMENT_NODE":487,"./TEXT_NODE":488,"./createDocumentFragment":490,"./filterByNodeType":491,"./hasAttribute":492,"./indexOf":493,"./insertAfter":494,"./insertBefore":495,"./insertFirstChild":496,"./insertLastChild":497,"./isComment":500,"./isDocument":501,"./isDocumentFragment":502,"./isDocumentType":503,"./isElement":504,"./isNode":505,"./isNodeList":506,"./isTextNode":507,"./remove":508,"./replace":509,dup:380}],490:[function(d,g,f){arguments[4][381][0].apply(f,arguments)
},{dup:381}],491:[function(d,g,f){arguments[4][26][0].apply(f,arguments)},{"./ELEMENT_NODE":487,"./internal/isNodeType":498,"@marcom/ac-polyfills/Array/prototype.filter":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined,dup:26}],492:[function(d,g,f){arguments[4][383][0].apply(f,arguments)
},{dup:383}],493:[function(d,g,f){arguments[4][384][0].apply(f,arguments)},{"./filterByNodeType":491,"./internal/validate":499,"@marcom/ac-polyfills/Array/prototype.indexOf":undefined,"@marcom/ac-polyfills/Array/prototype.slice":undefined,dup:384}],494:[function(d,g,f){arguments[4][385][0].apply(f,arguments)
},{"./internal/validate":499,dup:385}],495:[function(d,g,f){arguments[4][386][0].apply(f,arguments)
},{"./internal/validate":499,dup:386}],496:[function(d,g,f){arguments[4][387][0].apply(f,arguments)
},{"./internal/validate":499,dup:387}],497:[function(d,g,f){arguments[4][388][0].apply(f,arguments)
},{"./internal/validate":499,dup:388}],498:[function(d,g,f){arguments[4][27][0].apply(f,arguments)
},{"../isNode":505,dup:27}],499:[function(d,g,f){arguments[4][28][0].apply(f,arguments)
},{"../COMMENT_NODE":483,"../DOCUMENT_FRAGMENT_NODE":484,"../ELEMENT_NODE":487,"../TEXT_NODE":488,"./isNodeType":498,dup:28}],500:[function(d,g,f){arguments[4][391][0].apply(f,arguments)
},{"./COMMENT_NODE":483,"./internal/isNodeType":498,dup:391}],501:[function(d,g,f){arguments[4][392][0].apply(f,arguments)
},{"./DOCUMENT_NODE":485,"./internal/isNodeType":498,dup:392}],502:[function(d,g,f){arguments[4][29][0].apply(f,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":484,"./internal/isNodeType":498,dup:29}],503:[function(d,g,f){arguments[4][394][0].apply(f,arguments)
},{"./DOCUMENT_TYPE_NODE":486,"./internal/isNodeType":498,dup:394}],504:[function(d,g,f){arguments[4][30][0].apply(f,arguments)
},{"./ELEMENT_NODE":487,"./internal/isNodeType":498,dup:30}],505:[function(d,g,f){arguments[4][31][0].apply(f,arguments)
},{dup:31}],506:[function(d,g,f){arguments[4][165][0].apply(f,arguments)},{dup:165}],507:[function(d,g,f){arguments[4][398][0].apply(f,arguments)
},{"./TEXT_NODE":488,"./internal/isNodeType":498,dup:398}],508:[function(d,g,f){arguments[4][32][0].apply(f,arguments)
},{"./internal/validate":499,dup:32}],509:[function(d,g,f){arguments[4][400][0].apply(f,arguments)
},{"./internal/validate":499,dup:400}],510:[function(d,g,f){arguments[4][83][0].apply(f,arguments)
},{"./getStyleProperty":511,"./getStyleValue":512,"./shared/stylePropertyCache":515,dup:83}],511:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"./shared/getStyleTestElement":513,"./shared/prefixHelper":514,"./shared/stylePropertyCache":515,"./utils/toCSS":518,"./utils/toDOM":519,dup:84}],512:[function(d,g,f){arguments[4][85][0].apply(f,arguments)
},{"./getStyleProperty":511,"./shared/prefixHelper":514,"./shared/stylePropertyCache":515,"./shared/styleValueAvailable":516,dup:85}],513:[function(d,g,f){arguments[4][86][0].apply(f,arguments)
},{dup:86}],514:[function(d,g,f){arguments[4][8][0].apply(f,arguments)},{dup:8}],515:[function(d,g,f){arguments[4][88][0].apply(f,arguments)
},{dup:88}],516:[function(d,g,f){arguments[4][89][0].apply(f,arguments)},{"./getStyleTestElement":513,"./stylePropertyCache":515,dup:89}],517:[function(d,g,f){arguments[4][90][0].apply(f,arguments)
},{dup:90}],518:[function(d,g,f){arguments[4][91][0].apply(f,arguments)},{dup:91}],519:[function(d,g,f){arguments[4][92][0].apply(f,arguments)
},{dup:92}],520:[function(d,g,f){arguments[4][260][0].apply(f,arguments)},{"./getStyle":521,"./setStyle":523,dup:260}],521:[function(d,g,f){arguments[4][93][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getStyleProperty":511,"@marcom/ac-prefixer/stripPrefixes":517,dup:93}],522:[function(d,g,f){arguments[4][94][0].apply(f,arguments)
},{dup:94}],523:[function(d,g,f){arguments[4][95][0].apply(f,arguments)},{"./internal/normalizeValue":522,"@marcom/ac-prefixer/getStyleCSS":510,"@marcom/ac-prefixer/getStyleProperty":511,dup:95}],524:[function(d,g,f){arguments[4][440][0].apply(f,arguments)
},{"./ac-ajax/Ajax":525,"./ac-ajax/Request":526,dup:440}],525:[function(d,g,f){arguments[4][441][0].apply(f,arguments)
},{"./Request":526,"./URLParser":527,"./XDomain-request":528,dup:441}],526:[function(d,g,f){arguments[4][442][0].apply(f,arguments)
},{dup:442}],527:[function(d,g,f){arguments[4][443][0].apply(f,arguments)},{dup:443}],528:[function(d,g,f){arguments[4][444][0].apply(f,arguments)
},{"./Request":526,dup:444}],529:[function(d,g,f){arguments[4][445][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":530,dup:445}],530:[function(d,g,f){arguments[4][446][0].apply(f,arguments)
},{dup:446}],531:[function(d,g,f){arguments[4][447][0].apply(f,arguments)},{dup:447}],532:[function(d,g,f){arguments[4][448][0].apply(f,arguments)
},{dup:448}],533:[function(d,g,f){arguments[4][449][0].apply(f,arguments)},{"./ac-deferred/Deferred":532,dup:449,"smartsign-deferred":531}],534:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":535,"./ac-asset-loader/AssetLoader/Asset":536,"./ac-asset-loader/AssetLoader/Asset/Ajax":537,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":538,"./ac-asset-loader/AssetLoader/Asset/Binary":539,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":540,"./ac-asset-loader/AssetLoader/Asset/Img":541,"./ac-asset-loader/AssetLoader/Asset/Video":544,"./ac-asset-loader/AssetLoader/Queue":545,"@marcom/ac-polyfills":undefined}],535:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":546,"./AssetLoader/Asset/Ajax":537,"./AssetLoader/Asset/Ajax/JSON":538,"./AssetLoader/Asset/Img":541,"./AssetLoader/Asset/Video":544,"./AssetLoader/Queue":545,"@marcom/ac-event-emitter":529,"@marcom/ac-object":591}],536:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":546,"@marcom/ac-event-emitter":529,"ac-deferred":533}],537:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":536,"@marcom/ac-ajax":524,"@marcom/ac-object":591}],538:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":537,"@marcom/ac-object":591}],539:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":536,"./Binary/Chunk":540,"@marcom/ac-ajax":524,"@marcom/ac-object":591}],540:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":536,"@marcom/ac-ajax":524,"@marcom/ac-object":591}],541:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":536,"@marcom/ac-object":591}],542:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":536,"./SplitFile/Chunk":543,"@marcom/ac-ajax":524,"@marcom/ac-object":591}],543:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":536,"@marcom/ac-ajax":524,"@marcom/ac-object":591}],544:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&r.isDesktop()===true)
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":536,"./Binary":539,"./SplitFile":542,"@marcom/ac-feature":190,"@marcom/ac-object":591}],545:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":546,"@marcom/ac-event-emitter":529,"@marcom/ac-object":591,"ac-deferred":533}],546:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],547:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":548,dup:169}],548:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],549:[function(d,g,f){d("@marcom/ac-polyfills/Promise");d("@marcom/ac-polyfills/JSON");
g.exports={createFlow:d("./ac-flow/flow/factory"),Player:d("./ac-flow/flow/Player")}
},{"./ac-flow/flow/Player":552,"./ac-flow/flow/factory":563,"@marcom/ac-polyfills/JSON":undefined,"@marcom/ac-polyfills/Promise":undefined}],550:[function(v,w,u){var o=v("@marcom/ac-event-emitter-micro").EventEmitterMicro,p=v("./compositor/decorator/Keyframe"),q=v("./compositor/decorator/Superframe"),r=v("./compositor/decorator/SuperKeyframe"),m=v("./compositor/decorator/Cache");
var n=v("./compositor/Sequence");function t(a,c,b,d){o.call(this);this._compositor=new n(c,b,d);
this.options=a||{}}var s=t.prototype=new o(null);s._gotoImageFrame=function(a){if(this._rendering){return Promise.resolve()
}else{if(this._currentFrame===a){return Promise.resolve()}}this._rendering=true;
return this._compositor.compositeFrames(this._currentFrame,a).then(function(){this._rendering=false;
this._currentFrame=a}.bind(this))};s.init=function(){var a;if(this.options.element.nodeName==="CANVAS"){a=this.options.element
}else{a=document.createElement("canvas");this.options.element.appendChild(a)}this.gotoFrame=this._gotoImageFrame;
return this._compositor.init(a).then(this._decorateCompositor.bind(this))};s.resumeLoading=function(){return this._compositor.resumeLoading()
};s.pauseLoading=function(){this._compositor.pauseLoading()};s._decorateCompositor=function(){var a=this._compositor;
var b;var c;if(a){b=this._compositor._diffRender.flowData;c=this._compositor.canvas;
if(b.superframeFrequency){a=new q(a,b.superframeFrequency)}if(b.version>=4){a=new p(a)
}if(b.version>=4&&b.superframeFrequency){a=new r(a)}if(this.options.keyframeCache){a=new m(a,this.options.keyframeCache)
}if(a===this._compositor){return Promise.resolve()}else{this._compositor=a;return this._compositor.init(c)
}}else{return Promise.reject()}};s._destroy=function(){this.off();this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(s,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});w.exports=t},{"./compositor/Sequence":553,"./compositor/decorator/Cache":554,"./compositor/decorator/Keyframe":555,"./compositor/decorator/SuperKeyframe":556,"./compositor/decorator/Superframe":557,"@marcom/ac-event-emitter-micro":547}],551:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,l=o("./data/provider/Async");
var k=function(c,b,a){this._manifestUrl=c;this._keyframeUrls=b;this._imageUrlPattern=a;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this)};var m=k.prototype;m.setManifestUrl=function(a){this._manifestUrl=a;
return this};m.setKeyframeUrls=function(a){this._keyframeUrls=a;return this};m.setImageUrlPattern=function(a){this._imageUrlPattern=a;
return this};m.pause=function(){this._shouldPause=true;var a,b=this._activeLoaders.length;
for(a=0;a<b;a++){this._activeLoaders[a].pause()}this._paused=true};m.destroy=function(){var b,c,a;
this.pause();for(b in this._loaders){if(this._loaders.hasOwnProperty(b)){this._loaders[b].destroy()
}}for(c in this._promises){if(this._promises.hasOwnProperty(c)){if(this._promises[c].status()==="pending"){this._promises[c].reject()
}}}for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};m.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return true}};m._resume=function(){this._shouldPause=false;var d,c=this._activeLoaders.length;
for(d=0;d<c;d++){this._activeLoaders[d].load()}var a,b=this._resumeQueue.length;
for(a=0;a<b;a++){this._resumeQueue[a].call(this)}this._resumeQueue=[];this._paused=false
};m.loadManifest=function(){if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return}if(this.assets.manifest){return this.assets.manifest}else{this._paused=false;
this._loaders.manifest=new l(this._getManifestAssetsData());this._activeLoaders.push(this._loaders.manifest);
return this._loaders.manifest.load().then(this._boundOnManifestLoaded)}};m.loadKeyframes=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes)}if(this.assets.keyframes){a=Promise.resolve(this.assets.keyframes)
}else{this._paused=false;this._loaders.keyframes=new i(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);a=this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
}this._promises.keyframes=a;return this._promises.keyframes};m.loadDiffs=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadDiffs)}if(this.assets.diffs){a=this._promises.diffs.resolve(this.assets.diffs)
}else{this._paused=false;this._loaders.diffs=new i(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);a=this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
}this._promises.diffs=a;return this._promises.diffs};m._getManifestAssetsData=function(){return this._manifestUrl
};m._getKeyframesAssetsData=function(){return this._keyframeUrls};m._getDiffsAssetsData=function(){var b=this.assets.manifest.imagesRequired,d=[],a,c,f=this._imageUrlPattern.match(/#/g).length;
for(a=1;a<=b;a++){c="0000"+a;c=c.substring(c.length-f);d.push(this._imageUrlPattern.replace(/#{2,}/g,c))
}return d};m._onManifestLoaded=function(a){if(this.assets){this.assets.manifest=a;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
return this.assets.manifest}};m._onKeyframesLoaded=function(a){if(this.assets){this.assets.keyframes=a;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
return Promise.resolve(this.assets.keyframes)}};m._onDiffsLoaded=function(a){if(this.assets){this.assets.diffs=a;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
return Promise.resolve(this.assets.diffs)}};m._removeFromActiveLoaders=function(a){var b,c=this._activeLoaders.length;
for(b=0;b<c;b++){if(this._activeLoaders[b]===a){this._activeLoaders.splice(b,1);
return}}};n.exports=k},{"./data/provider/Async":561,"@marcom/ac-asset-loader":534}],552:[function(o,n,i){var k=o("@marcom/ac-dom-emitter").DOMEmitter;
var j=o("@marcom/ac-raf-emitter/RAFEmitter");function l(b,a){this.element=a;this._domEmitter=new k(a);
this._frameRate=30;this.paused=true;this.loop=false;this._destroyed=false;this._flow=b;
this._rafEmitter=new j();this._rafDrawSet=false;this._shouldAdvanceToTimeGlobal=false;
this._shouldGlobalTimeUpdate=false;this._shouldLocalTimeUpdate=false;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this);
this._rafEmitter.on("draw",this._onDraw.bind(this))}var m=l.prototype;m._timeToFrame=function(b){var a;
a=Math.round(b/this.duration*this._flow.frameCount);a=a%(this._flow.frameCount+1);
return(a<0)?this._flow.frameCount+a:a};m._advanceToTimeGlobal=function(a){if(this._rafDrawSet){this._prevTime=this._prevTime||a.time;
this._currentTime+=((a.time-this._prevTime)/1000)*this.playbackRate;this._prevTime=a.time;
this._pauseAfterRender=false;var b=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){b=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){b=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(b).then(this._onBoundGlobalTimeUpdate)
}}};m._onGlobalTimeUpdate=function(){this.trigger("timeupdate");if(this._pauseAfterRender){this.paused=true;
this.trigger("ended")}else{this._bindAdvanceToTimeGlobal()}};m._onLocalTimeUpdate=function(){this.seeking=false;
this.trigger("timeupdate");this.trigger("seeked");this._bindAdvanceToTimeGlobal()
};m._advanceToTimeLocal=function(a){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*a;this._prevTime=null;this._cancelFrame();this._flow.gotoFrame(this._timeToFrame(a)).then(this._onBoundLocalTimeUpdate)
}};m._onLoaded=function(){this.trigger("loaded");this.trigger("canplaythrough")
};m._nullProperties=function(a){var b;for(b in a){if(a.hasOwnProperty(b)){a[b]=null
}}return a};m.destroy=function(){this._rafEmitter.destroy();this.trigger("destroy");
this.pause();this.off();this._flow.destroy();this._flow=this._nullProperties(this._flow);
this._nullProperties(this)};m.load=function(){if(this._flow.resumeLoading()){return
}this.trigger("loadstart");return this._flow.init().then(function(a){var b=function(){this._onLoaded()
}.bind(this);var c=function(){if(this._destroyed===false){this.trigger("error")
}}.bind(this);if(a){return a.then(b,c)}else{b()}}.bind(this))};m.pauseLoading=function(){this._flow.pauseLoading()
};m.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._bindAdvanceToTimeGlobal()}return this};m.pause=function(){if(!this.paused){this.paused=true;
this._cancelFrame();this.trigger("pause")}return this};m.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};m.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};m.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};m.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};m._cancelFrame=function(){this._rafEmitter.cancel();
this._rafDrawSet=false};m._onDraw=function(a){if(this._shouldAdvanceToTimeGlobal){this._advanceToTimeGlobal(a)
}else{if(this._shouldGlobalTimeUpdate){this._onGlobalTimeUpdate(a)}else{if(this._shouldLocalTimeUpdate){this._onLocalTimeUpdate(a)
}}}this._shouldLocalTimeUpdate=false;this._shouldGlobalTimeUpdate=false;this._shouldLocalTimeUpdate=false
};m._bindAdvanceToTimeGlobal=function(){this._rafDrawSet=true;this._shouldAdvanceToTimeGlobal=true;
this._rafEmitter.run()};m._bindGlobalTimeUpdate=function(){this._rafDrawSet=true;
this._shouldGlobalTimeUpdate=true;this._rafEmitter.run()};m._bindLocalTimeUpdate=function(){this._rafDrawSet=true;
this._shouldLocalTimeUpdate=true;this._rafEmitter.run()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(m,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:m._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(a){if(isFinite(a)){this._frameRate=a;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(a){if(isFinite(a)){this._playbackRate=1*a;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});n.exports=l},{"@marcom/ac-dom-emitter":480,"@marcom/ac-raf-emitter/RAFEmitter":631}],553:[function(i,n,j){var k=i("../diff/Render");
var l=i("../LoadController");function o(b,a,c){this._keyframes=a;this._imageUrlPattern=c;
this._loadController=new l(b,a,c)}var m=o.prototype;m._initDiffRender=function(a){a.then(function(b){this._images=b;
this.canvas.height=b[0].height;this.canvas.width=b[0].width;this.applyFrame(b[0])
}.bind(this))};m.init=function(a){this.canvas=a||document.createElement("canvas");
this.context=a.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
};m.resumeLoading=function(){return this._loadController.load()};m.pauseLoading=function(){this._loadController.pause()
};m.createDiffRender=function(a){this._diffRender=new k(a,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};m.applyFrame=function(a){var b=this.context;b.drawImage(a,0,0)
};m.calculateRenderCount=function(c,b){var a=0;if(Math.abs(b-c)>=b){c=1;a=1}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
a=1}}if(b>0&&b<this.frameCount-1){return Math.abs(c-b)+a}else{return a}};m.compositeFrames=function(c,b){b=(this.frameCount<b)?this.frameCount-1:(b<0)?0:b;
c=(this.frameCount-2<c)?this.frameCount-2:(c<0)?0:c;var a;if(Math.abs(b-c)>=b){c=1;
this.applyFrame(this._images[0])}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
this.applyFrame(this._images[1])}}a=(c>b)?-1:(c<b)?1:0;if(b>0&&b<this.frameCount-1){while(c!==b){this._diffRender.renderDiff(this.canvas,c);
c+=a}}return Promise.resolve(c)};m.destroy=function(){this._loadController.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(m,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(a){return this._canvas=a
},enumerable:true},mainCompositor:{get:function(){var a=this;while(a._compositor){a=a._compositor
}return a},enumerable:true}});n.exports=o},{"../LoadController":551,"../diff/Render":562}],554:[function(k,j,g){function h(a,b){this._compositor=a;
this._keyframeInterval=b||8;this._keyframes=[]}var i=h.prototype;i._getClosestKeyframe=function(c){var b=c%this._keyframeInterval,a=Math.floor(c/this._keyframeInterval)+((b>(this._keyframeInterval/2))?1:0);
return a};i._getFrameFromKeyframe=function(a){return a*this._keyframeInterval};
i._saveKeyframe=function(a){var c,b=Math.floor(a/this._keyframeInterval);if(a%this._keyframeInterval===0&&!this._keyframes[b]){c=document.createElement("canvas");
c.width=this._compositor.canvas.width;c.height=this._compositor.canvas.height;c.getContext("2d").drawImage(this._compositor.canvas,0,0);
this._keyframes[b]=c}};i.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};i.resumeLoading=function(){return this._compositor.resumeLoading()};i.pauseLoading=function(){return this._compositor.pauseLoading()
};i.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};i.calculateRenderCount=function(b,a){b=this._getFrameFromKeyframe(this._getClosestKeyframe(a));
return this._compositor.calculateRenderCount(b,a)+1};i.compositeFrames=function(d,b){var a=this._getClosestKeyframe(b);
if(this._keyframes[a]&&(this._compositor.calculateRenderCount(d,b)>this.calculateRenderCount(d,b))){d=this._getFrameFromKeyframe(a);
this.applyFrame(this._keyframes[a]);return this._compositor.compositeFrames(d,b).then(function c(){})
}else{return this._compositor.compositeFrames(d,b).then(function c(){},null,this._saveKeyframe.bind(this))
}};i.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true}});j.exports=h},{}],555:[function(m,l,i){var h=m("../../keyframe/Render");
function j(a){this._compositor=a;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}var k=j.prototype;k.init=function(a){this._keyframeDiffRender=new h(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};k.resumeLoading=function(){return this._compositor.resumeLoading()
};k.pauseLoading=function(){return this._compositor.pauseLoading()};k.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};k.applyKeyframe=function(b,a){this._keyframeDiffRender.renderKeyframe(this.canvas,b,a)
};k.compositeFrames=function(b,a){if(!this._isKeyframeDiff(a-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}this.applyKeyframe(a-1);return Promise.resolve(b-1)};k._isKeyframeDiff=function(a){return a in this._keyframeDiffRender._loader._keyframes
};k.calculateRenderCount=function(b,a){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};k.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(k,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});l.exports=j},{"../../keyframe/Render":565}],556:[function(g,k,h){function i(a){this._compositor=a;
this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}var j=i.prototype;j.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};j.resumeLoading=function(){return this._compositor.resumeLoading()};j.pauseLoading=function(){return this._compositor.pauseLoading()
};j.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};j.applyKeyframe=function(b,a){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};j.compositeFrames=function(d,b){var a,c;if(b<1||b>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(b-1)){a=Math.abs(d-b)===1?true:false;this.applyKeyframe(b-1,a);
return Promise.resolve(d-1)}if(Math.abs(b-d)>this._superframeInterval){c=this._getShortestRender(d,b);
if(this._isKeyframeDiff(c-1)||c<=0||c>=this.frameCount-2){return this._compositeFromSuperKeyframe(c,b)
}}return this._compositor.compositeFrames.apply(this._compositor,[d,b])};j._getShortestRender=function(m,d){var b=this._compositor.calculateRenderCount,c=this._getClosestSuperKeyframe(d-1),f=b.apply(this._compositor,[c,d])+1,a=b.apply(this._compositor,[m,d]);
if(f<=a){return c}else{return m}};j._compositeFromSuperKeyframe=function(a,c){var f=this.canvas.getContext("2d"),d=(a<=0)?this.mainCompositor._images[0]:(a>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[a-1].image),b;
f.drawImage(d,0,0);return this._compositor.compositeFrames.call(this._compositor,a,c)
};j._getClosestSuperFrame=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j._getClosestSuperKeyframe=function(f){var b,a,c,d,n=this._frames.length;if(f<n+1&&f>0){d=f-1;
while(d>=0){if(this._frames[d].type==="keyframe"){b=d+1;break}d-=1}d=f+1;while(d<=n-1){if(this._frames[d].type==="keyframe"){a=d+1;
break}d+=1}}b=b?b:0;a=a?a:this.frameCount;c=(f-b)<(a-f)?b:a;return c};j._isKeyframeDiff=function(a){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};j.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],557:[function(g,k,h){function i(a,b){this._compositor=a;
this._superframeInterval=b||4}var j=i.prototype;j._getClosestSuperframe=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j.init=function(a){this._screenCanvas=a};j.resumeLoading=function(){return this._compositor.resumeLoading()
};j.pauseLoading=function(){return this._compositor.pauseLoading()};j.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};j.calculateRenderCount=function(c,a){var b=this._getClosestSuperframe(c);if(Math.abs(b-a)>this._superframeInterval/2){c=b+((c>a)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(c,a)+1}else{return Math.abs(b-a)+1}};j.compositeFrames=function(f,b){var a,d;
if(b<=0||b>=this.frameCount-2){this._compositor.compositeFrames(f,b)}if(f>this.frameCount-2){f=this.frameCount-2
}else{if(f<=0){f=1}}d=this._getClosestSuperframe(f);if(this._compositor.calculateRenderCount(f,b)>this.calculateRenderCount(f,b)){a=this._compositor.compositeFrames(d,d).then(function c(){var m=d+((f>b)?-1:1)*this._superframeInterval;
this._compositor.compositeFrames(d,m).then(function(){return this.compositeFrames(m,b)
}.bind(this))}.bind(this))}else{a=this._compositor.compositeFrames(f,b).then(function c(){}.bind(this))
}a.then(function c(){}.bind(this));return a};j.destroy=function(){return this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],558:[function(f,i,g){function h(b,a){this.location=b;
this.length=a}i.exports=h},{}],559:[function(i,h,f){function g(){}h.exports=g},{}],560:[function(o,n,i){var k=o("./Manifest"),j=o("./Block"),l;
var m={parseData:function(b){l=0;var a=b.frames.map(this._parseFrame,this);return Object.create(k.prototype,{version:{value:b.version},framecount:{value:b.frameCount},blockSize:{value:b.blockSize},imagesRequired:{value:b.imagesRequired},reversible:{value:b.reversible},superframeFrequency:{value:b.superframeFrequency},frames:{value:a}})
},_valueForCharAt:function(a,c){var b=a.charCodeAt(c);if(b>64&&b<91){return b-65
}if(b>96&&b<123){return b-71}if(b>47&&b<58){return b+4}if(b===43){return 62}if(b===47){return 63
}},_createNumberFromBase64Range:function(a,f,b){var c=0,d;while(b--){d=this._valueForCharAt(a,f++);
c+=(d<<b*6)}return c},_parseFrame:function(r){var a,f=[],b=r.value,c=r.startImageIndex,g=r.startBlockIndex,h,d;
if(r.type==="keyframe"){f.type="keyframe";f.width=r.width;f.height=r.height;f.x=r.x;
f.y=r.y;return f}for(a=0;a<b.length;a+=5){d=this._createNumberFromBase64Range(b,a,3);
h=this._createNumberFromBase64Range(b,a+3,2);f.push(Object.create(j.prototype,{location:{value:d,enumerable:true},length:{value:h,enumerable:true},block:{value:(g+=h)-h,enumerable:true},startImageIndex:{value:c,enumerable:true}}))
}return f}};n.exports=m},{"./Block":558,"./Manifest":559}],561:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,k=o("../processor");
function l(a){this._assetLoader=new i([a])}var m=l.prototype;m.load=function(){return this._assetLoader.load().then(function(a){var b;
if(a&&a.length){b=k.parseData(a[0]);this._data=b}return b}.bind(this))};n.exports=l
},{"../processor":560,"@marcom/ac-asset-loader":534}],562:[function(k,j,g){function h(a,c,b){this.flowData=a;
this.flowData.imageUrlPattern=c;this._loadController=b}var i=h.prototype;i._storeImages=function(a){a.then(function(d){var f=d.length;
this.images=d;this._blocksPerFullDiff=[];this._blockCountUpToIndex=[];var b=0;for(var c=0;
c<f;c++){this._blocksPerFullDiff[c]=(d[c].width/this.flowData.blockSize)*(d[c].height/this.flowData.blockSize);
b+=this._blocksPerFullDiff[c];this._blockCountUpToIndex[c]=b}}.bind(this))};i._applyDiffRange=function(z,d){var E=d.block,y=d.length,A=z.canvas.width/this.flowData.blockSize,w=d.startImageIndex,C=this.images[w].width,B=E%this._blockCountUpToIndex[w],D=C/this.flowData.blockSize,a=(B%D)*this.flowData.blockSize,b=Math.floor(B/(D||1))*this.flowData.blockSize,f=(d.location%A)*this.flowData.blockSize,v=Math.floor(d.location/A)*this.flowData.blockSize,x,c;
while(y){x=Math.min((y*this.flowData.blockSize),z.canvas.width-f,C-a);c=x/this.flowData.blockSize;
z.drawImage(this.images[w],a,b,x,this.flowData.blockSize,f,v,x,this.flowData.blockSize);
y-=c;if(y){if((a+=x)>=C){a=0;b+=this.flowData.blockSize}if((f+=x)>=z.canvas.width){f=0;
v+=this.flowData.blockSize}E+=c}}};i.init=function(){return this._loadController.loadDiffs().then(this._storeImages.bind(this))
};i.renderDiff=function(d,a){var b=d.getContext("2d");a-=1;for(var c=0,f=this.frames[a].length;
c<f;c++){this._applyDiffRange(b,this.frames[a][c])}};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frames:{get:function(){return this.flowData.frames},set:function(a){this.flowData.frames=a
},enumerable:true}});j.exports=h},{}],563:[function(u,w,s){var p=u("@marcom/ac-object/defaults");
var q=u("./Flow");var v=u("./Player");var x={keyframeCache:8,preload:true};var t={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var y=function(a){if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}return a};var o=function(d){var a=d.basePath?y(d.basePath):null;
var f=d.framePath?y(d.framePath):null;var g=d.diffPath?y(d.diffPath):null;var b=d.manifestPath?y(d.manifestPath):null;
var h=d.baseName+"_";var c={};c.startframe=(f||a)+h+"startframe."+(d.startframeFileFormat||d.fileFormat);
c.endframe=(f||a)+h+"endframe."+(d.endframeFileFormat||d.fileFormat);c.imageUrlPattern=(g||a)+h+d.imageUrlPattern+"."+d.fileFormat;
c.manifest=(b||a)+h+"manifest."+d.manifestFileFormat;return c};var n=function(c,b){var d=o(b);
var a=[d.startframe,d.endframe];return new q(c,d.manifest,a,d.imageUrlPattern)};
var r=function(c,b){var g=c||{};var d=b||{};g=p(x,c);d=p(t,b);if(!g.element){c.element=document.createElement("canvas")
}var f=n(g,d);var a=new v(f,g.element);if(g.preload){a.load()}return a};w.exports=r
},{"./Flow":550,"./Player":552,"@marcom/ac-object/defaults":594}],564:[function(l,k,m){var i=l("@marcom/ac-asset-loader").AssetLoader;
function h(d,a){var b,c=d.match(/#/g).length;this._keyframes={};d=d.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(a.frames){a.frames.forEach(function(f,g){if(f.type==="keyframe"){b="0000"+g;
b=b.substring(b.length-c);this._imageUrls.push(d.replace(/#+/g,b));this._keyframes[g]=f
}}.bind(this))}}var j=h.prototype;j.load=function(){if(this._imageUrls.length>0){return new i(this._imageUrls).load()
}return Promise.resolve()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
k.exports=h},{"@marcom/ac-asset-loader":534}],565:[function(h,m,i){var j=h("./Loader");
function k(a,b){this.flowData=a;this.flowData.imageUrlPattern=b}var l=k.prototype;
l._storeImages=function(d){var b=0,a;if(d&&d.length>0){for(var c in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(c)){a=d[b];
this._loader._keyframes[c].image=a;b+=1}}}};l.init=function(){this._loader=new j(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};l.renderKeyframe=function(t,u,a){var v=t.getContext("2d"),s=this._loader.keyframes[u],g=s.image,c=s.x,d=s.y,b=s.width,f=s.height;
if(a===true){v.drawImage(g,c,d,b,f,c,d,b,f)}else{if(this.flowData.reversible){v.drawImage(g,0,0)
}else{v.drawImage(g,c,d,b,f)}}};m.exports=k},{"./Loader":564}],566:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":567,dup:169}],567:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],568:[function(d,g,f){g.exports={SharedInstance:d("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":569}],569:[function(p,m,q){var l=window,n="AC",k="SharedInstance",o=l[n];
var j=(function(){var a={};return{get:function(c,d){var b=null;if(a[c]&&a[c][d]){b=a[c][d]
}return b},set:function(b,d,c){if(!a[b]){a[b]={}}if(typeof c==="function"){a[b][d]=new c()
}else{a[b][d]=c}return a[b][d]},share:function(b,d,c){var f=this.get(b,d);if(!f){f=this.set(b,d,c)
}return f},remove:function(c,d){var b=typeof d;if(b==="string"||b==="number"){if(!a[c]||!a[c][d]){return
}a[c][d]=null;return}if(a[c]){a[c]=null}}}}());if(!o){o=l[n]={}}if(!o[k]){o[k]=j
}m.exports=o[k]},{}],570:[function(d,g,f){g.exports={CID:d("./ac-mvc-cid/CID")}
},{"./ac-mvc-cid/CID":571}],571:[function(q,o,j){var k=q("@marcom/ac-shared-instance").SharedInstance;
var n="ac-mvc-cid:CID",p="1.0.0";function l(){this._idCount=0}var m=l.prototype;
m._cidPrefix="cid";m.getNewCID=function(){var a=this._cidPrefix+"-"+this._idCount;
this._idCount++;return a};o.exports=k.share(n,p,l)},{"@marcom/ac-shared-instance":568}],572:[function(d,g,f){g.exports={Model:d("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":573}],573:[function(q,u,p){var l=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var t=q("@marcom/ac-object/defaults");var n=q("@marcom/ac-object/create");var s=q("@marcom/ac-mvc-cid").CID;
function r(a){l.call(this);this.attributes=t(this.defaultAttributes,a||{});this.cid=s.getNewCID();
if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}}var m=l.prototype;var o=r.prototype=n(m);o.defaultAttributes={};o.idAttribute="id";
o.get=function(a){if(!this.attributes){return}return this.attributes[a]};o.set=function(a,b){if(!this.attributes){return
}var d;var f;var g;var h={};var c=false;for(d in a){if(a.hasOwnProperty(d)){g=this.get(d);
if((g===a[d])||(typeof g==="object"&&typeof a[d]==="object"&&JSON.stringify(g)===JSON.stringify(a[d]))){continue
}c=true;this.attributes[d]=a[d];f={value:a[d],previous:g};h[d]=f;this._triggerChange(d,f,b)
}}if(c){this._trigger("change",h,b)}};o.hasAttribute=function(a){if(!this.attributes){return false
}return(this.attributes[a]!==undefined)};o.eachAttribute=function(a,b){if(!this.attributes){return
}var c;for(c in this.attributes){if(this.attributes.hasOwnProperty(c)){a.call(b,{attribute:c,value:this.attributes[c]})
}}};o.destroy=function(){this.trigger("destroy");m.destroy.call(this);var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};o._trigger=function(c,a,b){b=b||{};if(b.silent!==true){this.trigger(c,a)}};
o._triggerChange=function(c,a,b){return this._trigger("change:"+c,a,b)};u.exports=r
},{"@marcom/ac-event-emitter-micro":566,"@marcom/ac-mvc-cid":570,"@marcom/ac-object/create":593,"@marcom/ac-object/defaults":594}],574:[function(d,g,f){arguments[4][212][0].apply(f,arguments)
},{"./className/add":575,"@marcom/ac-polyfills/Array/prototype.slice":undefined,"@marcom/ac-polyfills/Element/prototype.classList":undefined,dup:212}],575:[function(d,g,f){arguments[4][214][0].apply(f,arguments)
},{"./contains":576,dup:214}],576:[function(d,g,f){arguments[4][215][0].apply(f,arguments)
},{"./getTokenRegExp":577,dup:215}],577:[function(d,g,f){arguments[4][216][0].apply(f,arguments)
},{dup:216}],578:[function(d,g,f){arguments[4][217][0].apply(f,arguments)},{"./contains":576,"./getTokenRegExp":577,dup:217}],579:[function(d,g,f){arguments[4][220][0].apply(f,arguments)
},{"./className/remove":578,"@marcom/ac-polyfills/Array/prototype.slice":undefined,"@marcom/ac-polyfills/Element/prototype.classList":undefined,dup:220}],580:[function(d,g,f){arguments[4][568][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":581,dup:568}],581:[function(d,g,f){arguments[4][569][0].apply(f,arguments)
},{dup:569}],582:[function(d,g,f){arguments[4][570][0].apply(f,arguments)},{"./ac-mvc-cid/CID":583,dup:570}],583:[function(d,g,f){arguments[4][571][0].apply(f,arguments)
},{"@marcom/ac-shared-instance":580,dup:571}],584:[function(d,g,f){g.exports={View:d("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":585}],585:[function(t,v,r){var n=t("@marcom/ac-dom-emitter").DOMEmitter;
var u=t("@marcom/ac-mvc-cid").CID;var s={create:t("@marcom/ac-object/create"),defaults:t("@marcom/ac-object/defaults")};
var o={insertLastChild:t("@marcom/ac-dom-nodes/insertLastChild"),remove:t("@marcom/ac-dom-nodes/remove")};
var p=t("@marcom/ac-classlist/add");var m=t("@marcom/ac-classlist/remove");function w(a){var c;
var d;var b;this.options=s.defaults(this.defaultOptions,a||{});this.cid=u.getNewCID();
this.model=this.options.model;if(this.options.template){this.template=this.options.template
}c=this.options.tagName||this.tagName;d=this.options.element;b=this.options.className||this.className;
if(!d){d=document.createElement(c)}n.call(this,d);if(b){this.addClassName(b)}if(this.options.events){this.delegateEvents(this.options.events)
}}var q=w.prototype=s.create(n.prototype);q.tagName="div";q.defaultOptions={};q.getTagName=function(){return this.el.tagName.toLowerCase()
};q.appendTo=function(a){o.insertLastChild(this.el,a);return this};q.render=function(){};
q.addClassName=function(a){return this._manipulateClassName(a,p)};q.removeClassName=function(a){return this._manipulateClassName(a,m)
};q.destroy=function(){this.emitterTrigger("destroy");this.off();o.remove(this.el);
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q.delegateEvents=function(d,c){c=c||this;
var a,b;for(a in d){if(d.hasOwnProperty(a)){b=d[a];if(typeof b==="string"){d[a]=this[d[a]]
}}}this.on(d,c);return this};q._manipulateClassName=function(c,b){var a;if(typeof c==="string"){a=c.split(" ")
}else{if(typeof c==="object"&&Array.isArray(c)){a=c.slice()}else{return this}}a.unshift(this.el);
b.apply(this.el,a);return this};v.exports=w},{"@marcom/ac-classlist/add":574,"@marcom/ac-classlist/remove":579,"@marcom/ac-dom-emitter":480,"@marcom/ac-dom-nodes/insertLastChild":497,"@marcom/ac-dom-nodes/remove":508,"@marcom/ac-mvc-cid":582,"@marcom/ac-object/create":593,"@marcom/ac-object/defaults":594}],586:[function(d,g,f){arguments[4][401][0].apply(f,arguments)
},{dup:401,qs:587}],587:[function(d,g,f){arguments[4][402][0].apply(f,arguments)
},{"./parse":588,"./stringify":589,dup:402}],588:[function(d,g,f){arguments[4][403][0].apply(f,arguments)
},{"./utils":590,dup:403}],589:[function(d,g,f){arguments[4][404][0].apply(f,arguments)
},{"./utils":590,dup:404}],590:[function(d,g,f){arguments[4][405][0].apply(f,arguments)
},{dup:405}],591:[function(d,g,f){arguments[4][406][0].apply(f,arguments)},{"./clone":592,"./create":593,"./defaults":594,"./extend":595,"./getPrototypeOf":596,"./isDate":597,"./isEmpty":598,"./isRegExp":599,"./toQueryParameters":600,dup:406}],592:[function(d,g,f){arguments[4][106][0].apply(f,arguments)
},{"./extend":595,"@marcom/ac-polyfills/Array/isArray":undefined,dup:106}],593:[function(d,g,f){arguments[4][107][0].apply(f,arguments)
},{dup:107}],594:[function(d,g,f){arguments[4][172][0].apply(f,arguments)},{"./extend":595,dup:172}],595:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],596:[function(d,g,f){arguments[4][411][0].apply(f,arguments)
},{dup:411}],597:[function(d,g,f){arguments[4][412][0].apply(f,arguments)},{dup:412}],598:[function(d,g,f){arguments[4][413][0].apply(f,arguments)
},{dup:413}],599:[function(d,g,f){arguments[4][414][0].apply(f,arguments)},{dup:414}],600:[function(d,g,f){arguments[4][415][0].apply(f,arguments)
},{"@marcom/ac-url/joinSearchParams":586,dup:415}],601:[function(g,j,h){var i=g("./ac-media-object/factories/createVideo");
var k=g("./ac-media-object/factories/createFlow");j.exports={createFlow:k,createVideo:i}
},{"./ac-media-object/factories/createFlow":602,"./ac-media-object/factories/createVideo":603}],602:[function(k,j,g){var h=k("./../views/FlowView");
var i=k("@marcom/ac-object/clone");j.exports=function(c,a,d){var b=i(d||{},true);
var m;b.type="flow";function f(l){throw new Error(l)}if(!a){f("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!a.basePath){f("Please provide a valid mediaSrc object with a basePath property.")
}}if(!b.mediaObjectView){m=new h(c,a,b);m.options.mediaObjectView=m}else{m=b.mediaObjectView
}return m}},{"./../views/FlowView":606,"@marcom/ac-object/clone":592}],603:[function(o,n,p){var j=o("./../views/VideoView");
var m=o("./../views/InlinePolyfillVideoView");var q=o("@marcom/ac-feature").isHandheld;
var k=o("@marcom/ac-feature").isTablet;var l=o("@marcom/ac-object/clone");n.exports=function(a,f,b){var g=l(b||{},true);
var d;g.type="video";function c(h){throw new Error(h)}if(!f){c("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!f.basePath){c("Please provide a valid mediaSrc object with a basePath property.")
}}if(!g.mediaObjectView){if(g.iosInline&&!window.matchMedia("(-webkit-video-playable-inline)").matches&&(q()||k())){d=new m(a,f,g)
}else{d=new j(a,f,g)}d.options.mediaObjectView=d}else{d=g.mediaObjectView}return d
}},{"./../views/InlinePolyfillVideoView":607,"./../views/VideoView":608,"@marcom/ac-feature":190,"@marcom/ac-object/clone":592}],604:[function(n,m,o){var k=n("@marcom/ac-mvc-model").Model;
var i=n("@marcom/ac-object");function j(a){k.apply(this,arguments)}var l=j.prototype=i.create(k.prototype);
l.defaultAttributes={type:"video",paused:true,ended:false,ready:false,loadStart:false,loaded:false,error:false,destroyed:false,currentTime:0,playbackRate:1,duration:0,preload:false,autoplay:false,frameRate:24,enhanced:false,looping:false};
l.getType=function(){return this.get("type")};l.getPaused=function(){return this.get("paused")
};l.getEnded=function(){return this.get("ended")};l.getReady=function(){return this.get("ready")
};l.getDestroyed=function(){return this.get("destroyed")};l.getLoadStart=function(){return this.get("loadedStart")
};l.getLoaded=function(){return this.get("loaded")};l.getError=function(){return this.get("error")
};l.getCurrentTime=function(){return this.get("currentTime")};l.getPlaybackRate=function(){return this.get("playbackRate")
};l.getDuration=function(){return this.get("duration")};l.getPreload=function(){return this.get("preload")
};l.getAutoplay=function(){return this.get("autoplay")};l.getFrameRate=function(){return this.get("frameRate")
};l.getEnhanced=function(){return this.get("enhanced")};l.getLooping=function(){return this.get("looping")
};l.setPaused=function(a){this.set({paused:a})};l.setEnded=function(a){this.set({ended:a})
};l.setReady=function(a){this.set({ready:a})};l.setDestroyed=function(a){this.set({destroyed:a})
};l.setDuration=function(a){this.set({duration:a})};l.setLoadStart=function(a){this.set({loadStart:a})
};l.setLoaded=function(a){this.set({loaded:a})};l.setError=function(a){this.set({error:a})
};l.setCurrentTime=function(a){this.set({currentTime:a})};l.setPlaybackRate=function(a){this.set({playbackRate:a})
};l.setPreload=function(a){this.set({preload:a})};l.setAutoplay=function(a){this.set({autoplay:a})
};l.setFrameRate=function(a){this.set({frameRate:a})};l.setEnhanced=function(a){this.set({enhanced:a})
};l.setLooping=function(a){this.set({looping:a})};m.exports=j},{"@marcom/ac-mvc-model":572,"@marcom/ac-object":591}],605:[function(p,n,q){var k=p("./../models/MediaModel");
var l=p("@marcom/ac-mvc-view").View;var j=p("@marcom/ac-object");var o=function(b,a,c){l.call(this,{element:b});
this.options=j.clone(c||{},true);this.mediaSrc=a||"";this.model=this.options.model||new k(this.options);
this._onLoadStartChange=this._onLoadStartChange.bind(this);this._onLoadedChange=this._onLoadedChange.bind(this);
this._onPausedChange=this._onPausedChange.bind(this);this._onReadyChange=this._onReadyChange.bind(this);
this._onErrorChange=this._onErrorChange.bind(this);this._onEnhancedChange=this._onEnhancedChange.bind(this);
this._onCurrentTimeChange=this._onCurrentTimeChange.bind(this);this._onPlaybackRateChange=this._onPlaybackRateChange.bind(this);
this._onDestroyedChange=this._onDestroyedChange.bind(this);this._onEndedChange=this._onEndedChange.bind(this);
this._respondToPlay=this._respondToPlay.bind(this);this._respondToPause=this._respondToPause.bind(this);
this._respondToTimeUpdate=this._respondToTimeUpdate.bind(this);this._respondToEnded=this._respondToEnded.bind(this);
this._respondToDurationChange=this._respondToDurationChange.bind(this);this._respondToRateChange=this._respondToRateChange.bind(this);
this._init()};var m=o.prototype=j.create(l.prototype);m._init=function(){this._createMediaElement();
this._createMediaEmitter();this._createMediaLoader();this._bindEvents();this._config()
};m._createMediaElement=function(){};m._createMediaEmitter=function(){};m._createMediaLoader=function(){};
m._config=function(){if(this.options.preload===true){this._setPreload(true);this.load()
}if(this.options.autoplay===true){this._setAutoplay(true)}if(this.options.looping===true){this._setLooping(true)
}if(this.options.frameRate){this._setFrameRate(this.options.frameRate)}};m._bindEvents=function(){this._bindViewEvents();
this._bindModelEvents()};m.destroy=function(){if(!this.getDestroyed()){this._destroy();
this._setDestroyed(true);this.model.off();this.off();for(var a in this){if(this.hasOwnProperty(a)&&typeof this[a]!=="function"){this[a]=null
}}}};m._bindModelEvents=function(){this.model.on("change:loadStart",this._onLoadStartChange);
this.model.on("change:loaded",this._onLoadedChange);this.model.on("change:paused",this._onPausedChange);
this.model.on("change:ready",this._onReadyChange);this.model.on("change:error",this._onErrorChange);
this.model.on("change:enhanced",this._onEnhancedChange);this.model.on("change:currentTime",this._onCurrentTimeChange);
this.model.on("change:playbackRate",this._onPlaybackRateChange);this.model.on("change:destroyed",this._onDestroyedChange);
this.model.on("change:ended",this._onEndedChange)};m._onLoadStartChange=function(){this.trigger("loadstart")
};m._onLoadedChange=function(){this.trigger("loaded")};m._onPausedChange=function(a){if(a.value===true){this.trigger("pause");
this.el.classList.remove("mediaobject-playing")}else{this.trigger("play");this.el.classList.remove("mediaobject-ended");
this.el.classList.add("mediaobject-playing")}};m._onReadyChange=function(){this.trigger("ready")
};m._onErrorChange=function(){this.trigger("error")};m._onEnhancedChange=function(){this.el.classList.add("mediaobject-enhanced");
this.mediaElement.classList.add("mediaobject-element");this.trigger("enhanced")
};m._onCurrentTimeChange=function(){this.trigger("timeupdate")};m._onPlaybackRateChange=function(){this.trigger("ratechange")
};m._onDestroyedChange=function(){this.el.classList.remove("mediaobject-playing");
this.el.classList.remove("mediaobject-ended");this.el.classList.remove("mediaobject-enhanced");
this.el.classList.add("mediaobject-destroyed");this.trigger("destroyed")};m._onEndedChange=function(a){if(a.value===true){this.trigger("ended")
}};m._bindViewEvents=function(){if(!this.mediaEmitter){return}this.mediaEmitter.on("play",this._respondToPlay);
this.mediaEmitter.on("pause",this._respondToPause);this.mediaEmitter.on("timeupdate",this._respondToTimeUpdate);
this.mediaEmitter.on("ended",this._respondToEnded);this.mediaEmitter.on("durationchange",this._respondToDurationChange);
this.mediaEmitter.on("ratechange",this._respondToRateChange)};m._respondToPlay=function(){this.model.set({ended:false,paused:false})
};m._respondToPause=function(){this.model.setPaused(true)};m._respondToTimeUpdate=function(){var a=0;
if(this.mediaElement.currentTime){a=this.mediaElement.currentTime}else{if(this.mediaEmitter.currentTime){a=this.mediaEmitter.currentTime
}else{return}}if(this.getCurrentTime()!==a){this.model.set({currentTime:a})}};m._respondToEnded=function(){this.model.set({ended:true,paused:true});
this.el.classList.remove("mediaobject-playing");this.el.classList.add("mediaobject-ended")
};m._respondToDurationChange=function(){var a=0;if(this.mediaElement.duration){a=this.mediaElement.duration
}else{if(this.mediaEmitter.duration){a=this.mediaEmitter.duration}else{return}}this.model.set({duration:a})
};m._respondToRateChange=function(){var a=0;if(this.mediaElement.playbackRate){a=this.mediaElement.playbackRate
}else{if(this.mediaEmitter.playbackRate){a=this.mediaEmitter.playbackRate}else{return
}}this.model.set({playbackRate:a})};m.enhance=function(){};m.play=function(){};
m.pause=function(){};m.reset=function(){};m.setCurrentTime=function(a){};m.setPlaybackRate=function(a){};
m.goToFrame=function(a){var b=a/this.model.frameRate;return this.setCurrentTime(b)
};m.goToPercent=function(b){var a=b*this.getDuration();return this.setCurrentTime(a)
};m._setReady=function(a){this.model.setReady(a)};m._setLoadStart=function(a){this.model.setLoadStart(a)
};m._setLoaded=function(a){this.model.setLoaded(a)};m._setError=function(a){this.model.setError(a)
};m._setDuration=function(a){this.model.setDuration(a)};m._setPreload=function(a){this.model.setPreload(a)
};m._setAutoplay=function(a){this.model.setAutoplay(a)};m._setFrameRate=function(a){this.model.setFrameRate(a)
};m._setEnhanced=function(a){this.model.setEnhanced(a)};m._setDestroyed=function(a){this.model.setDestroyed(a)
};m._setLooping=function(a){};m._destroy=function(){};m.getType=function(){return this.model.getType()
};m.getPaused=function(){return this.model.getPaused()};m.getEnded=function(){return this.model.getEnded()
};m.getReady=function(){return this.model.getReady()};m.getLoadStart=function(){return this.model.getLoadStart()
};m.getLoaded=function(){return this.model.getLoaded()};m.getError=function(){return this.model.getError()
};m.getDuration=function(){return this.model.getDuration()};m.getEnhanced=function(){return this.model.getEnhanced()
};m.getCurrentTime=function(){return this.model.getCurrentTime()};m.getCurrentFrame=function(){return Math.floor(this.getCurrentTime()*this.options.frameRate)
};m.getCurrentPercent=function(){return(this.model.getCurrentTime()/this.getDuration())||0
};m.getPlaybackRate=function(){return this.model.getPlaybackRate()};m.getFrameRate=function(){return this.model.getFrameRate()
};m.getPreload=function(){return this.model.getPreload()};m.getAutoplay=function(){return this.model.getAutoplay()
};m.getLooping=function(){return this.model.getLooping()};m.getDestroyed=function(){if(this.model){return this.model.getDestroyed()
}else{return true}};n.exports=o},{"./../models/MediaModel":604,"@marcom/ac-mvc-view":584,"@marcom/ac-object":591}],606:[function(r,s,q){var p=r("./BaseView");
var l=r("@marcom/ac-dom-nodes");var n=r("@marcom/ac-flow").createFlow;var k=r("@marcom/ac-raf-emitter/draw");
var m=function(b,a,c){p.call(this,b,a,c);this._onLoad=this._onLoad.bind(this);this._onError=this._onError.bind(this);
this._onReady=this._onReady.bind(this)};var o=m.prototype=Object.create(p.prototype);
o._createMediaElement=function(){this.mediaElement=document.createElement("canvas")
};o._createMediaEmitter=function(){this.flowOptions={element:this.mediaElement,preload:false,keyframeCache:this.options.keyframeCache||false};
this.mediaEmitter=n(this.flowOptions,this.mediaSrc)};o._createMediaLoader=function(){this.mediaLoader=this.mediaEmitter
};o.load=function(){this._setLoadStart(true);this.mediaLoader.once("loaded",this._onLoad);
this.mediaLoader.once("error",this._onError);this.mediaEmitter.once("canplaythrough",this._onReady);
if(!this.loaded){return this._load()}};o._load=function(){return this.mediaLoader.load()
};o._onLoad=function(){this._setLoaded(true)};o._onError=function(){this._setError(true)
};o._onReady=function(){this._setReady(true);this._setDuration(this.mediaEmitter.duration);
this.setPlaybackRate(this.getPlaybackRate());this._totalFrames=this._getTotalFrames();
if(this.getAutoplay()){if(this.getEnhanced===false){this.enhance()}this.play()}};
o._getTotalFrames=function(){return this.getDuration()*this.getFrameRate()};o.enhance=function(){this._setEnhanced(true);
k(function(){if(this.mediaElement){this._inject()}}.bind(this))};o._inject=function(){l.insertFirstChild(this.mediaElement,this.el)
};o._destroy=function(){this._remove();if(this.mediaEmitter){this.mediaEmitter.destroy()
}};o._remove=function(){l.remove(this.mediaElement)};o.play=function(){if(this.model.getPaused()===false){return
}if(this.mediaEmitter.currentTime>=this.getDuration()){this.setCurrentTime(0)}if(this.getReady()&&this.mediaEmitter!==null){this.mediaEmitter.play()
}};o.pause=function(){if(this.model.getPaused()===true){return}this.mediaEmitter.pause()
};o.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};o.setCurrentTime=function(a){if(a<0){a=0}if(a>this.getDuration()){a=this.getDuration()
}this.mediaEmitter.currentTime=a};o.setPlaybackRate=function(a){this.mediaEmitter.playbackRate=a
};o._setLooping=function(a){this.mediaEmitter.loop=a;this.model.setLooping(a)};
s.exports=m},{"./BaseView":605,"@marcom/ac-dom-nodes":489,"@marcom/ac-flow":549,"@marcom/ac-raf-emitter/draw":633}],607:[function(p,o,q){var j=p("./VideoView");
var l=j.prototype;var k=p("@marcom/ac-raf-emitter/RAFEmitter");var n=function(b,a,c){j.call(this,b,a,c);
this._polyfillRAFEmitter=c.polyfillRAFEmitter||new k();this._boundHandlePolyfillRAFEmitterDraw=this._handlePolyfillRAFEmitterDraw.bind(this);
this._polyfillRAFEmitter.on("draw",this._boundHandlePolyfillRAFEmitterDraw)};var m=n.prototype=Object.create(j.prototype);
m._initInlineVideo=function(){l._initInlineVideo.apply(this,arguments);this._shouldLoop=false
};m._destroy=function(){l._destroy.apply(this,arguments);if(this._polyfillRAFEmitter){this._polyfillRAFEmitter.destroy();
this._polyfillRAFEmitter=null}};m.play=function(){if(this.model.getPaused()===false){return
}this.model.setPaused(false);this._polyfillRAFEmitter.run()};m.pause=function(){if(this.model.getPaused()===true){return
}this.model.setPaused(true);this._polyfillRAFEmitter.cancel()};m.setCurrentTime=function(a){l.setCurrentTime.apply(this,arguments);
this._polyfillRAFEmitter.run()};m._handlePolyfillRAFEmitterDraw=function(c){var g=this.model.getCurrentTime();
var h=this.model.getPlaybackRate();var d=this.mediaElement.duration;var b=(c.delta/1000)*h;
if(this.model.getPaused()){return}g+=b;var s=(g<=0);var a=(g>=d);var f=(h>=0);var i=(h<0);
if(s){g=0}if(a){g=d}if(this._shouldLoop){this._shouldLoop=false;if(f){this.setCurrentTime(b)
}else{this.setCurrentTime(d-b)}return}this.setCurrentTime(g);if((s&&i)||(a&&f)){if(this.model.getLooping()){this._shouldLoop=true
}else{this.pause();this.model.setEnded(true)}}};o.exports=n},{"./VideoView":608,"@marcom/ac-raf-emitter/RAFEmitter":631}],608:[function(E,F,D){var C=E("./BaseView");
var s=C.prototype;var w=E("@marcom/ac-raf-emitter/draw");var y=E("@marcom/ac-dom-nodes");
var u=E("@marcom/ac-dom-emitter").DOMEmitter;var x=E("@marcom/ac-dom-styles");var v=E("@marcom/ac-asset-loader").AssetLoader;
var t=E("@marcom/ac-asset-loader").Asset.Video;var G=E("@marcom/ac-useragent");
var z=E("@marcom/ac-feature").isHandheld;var A=E("@marcom/ac-feature").isTablet;
var r=function(b,a,c){this.srcForVideoEl=null;this._cannotPlayInlineVideo=null;
this._onLoaded=this._onLoaded.bind(this);this._onReady=this._onReady.bind(this);
C.call(this,b,a,c);if(c.iosInline){this._initInlineVideo()}};var B=r.prototype=Object.create(C.prototype);
B.inlineClassName="mediaobject-ios-inline-video";B.inlineAttribute="playsinline";
B._cannotPlayInlineVideo=null;B._initInlineVideo=function(){if(this.mediaElement.hasAttribute("controls")){this.mediaElement.removeAttribute("controls")
}this.mediaElement.setAttribute(this.inlineAttribute,"");this.mediaElement.classList.add(this.inlineClassName)
};B._createMediaElement=function(){this.mediaElement=document.createElement("video")
};B._createMediaEmitter=function(){this.mediaEmitter=new u(this.mediaElement)};
B._createMediaLoader=function(){var b,a;this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath);
if(this.mediaSrc.splitFileLoading){b=this.mediaSrc.basePath;a=new t(b,{element:this.mediaElement,forceElementLoading:false,split:true});
this.mediaLoader=new v(a)}else{this.mediaSrc.fileFormat=this._checkFileFormat(this.mediaSrc.fileFormat);
b=this.mediaSrc.basePath+this.mediaSrc.filename+this.mediaSrc.fileFormat;this.srcForVideoEl=b
}};B._forceTrailingSlash=function(a){if(a&&a.lastIndexOf("/")!==a.length-1){a=a+"/"
}return a};B._checkFileFormat=function(a){if(a&&a.lastIndexOf(".")!==0){a="."+a
}return a};B.load=function(){this._setLoadStart(true);if(this.mediaSrc.splitFileLoading){var a=function(){if(this.mediaEmitter){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}}.bind(this);var b=function(){this._setError(true);
throw new Error("Video failed to load.")}.bind(this);this.mediaLoader.load().then(a,b)
}else{if(!this.cannotPlayInlineVideo()){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}this.mediaElement.src=this.srcForVideoEl;
if(this.cannotPlayInlineVideo()){this._onLoaded()}else{this.mediaElement.load()
}}};B._onLoaded=function(){this._setLoaded(true)};B.cannotPlayInlineVideo=function(){if(this._cannotPlayInlineVideo!==null){return this._cannotPlayInlineVideo
}var b=G.os==="iOS"&&z();var a=G.os==="iOS"&&A()&&G.version<8;this._cannotPlayInlineVideo=b||a;
return this._cannotPlayInlineVideo};B._onReady=function(){this._setReady(true);
if(this.getAutoplay()){if(!this.getEnhanced()){this.enhance()}this.play()}};B.enhance=function(){this._setEnhanced(true);
w(function(){if(this.mediaElement.tagName==="VIDEO"){y.insertLastChild(this.mediaElement,this.el);
x.setStyle(this.mediaElement,{visibility:"hidden"});w(function(){if(this.mediaElement){this.setPlaybackRate(this.getPlaybackRate());
x.setStyle(this.mediaElement,{visibility:"visible"})}}.bind(this))}}.bind(this))
};B._destroy=function(){this._remove();if(this.mediaEmitter){this.mediaEmitter.off()
}if(this.mediaLoader&&typeof this.mediaLoader.off==="function"){this.mediaLoader.off()
}};B._remove=function(){y.remove(this.mediaElement)};B._onEndedChange=function(a){s._onEndedChange.call(this,a);
if(G.os==="iOS"&&z()&&a.value===true){this.mediaElement.webkitExitFullScreen()}};
B.play=function(){if(this.model.getPaused()===false){return}this.mediaElement.play()
};B.pause=function(){if(this.model.getPaused()===true){return}this.mediaElement.pause()
};B.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};B.setCurrentTime=function(a){if(!this.mediaElement.duration){return
}this.model.setCurrentTime(a);this.mediaElement.currentTime=a};B.setPlaybackRate=function(a){this.mediaElement.playbackRate=a
};B._setLooping=function(a){this.mediaElement.loop=a;this.model.setLooping(a)};
F.exports=r},{"./BaseView":605,"@marcom/ac-asset-loader":450,"@marcom/ac-dom-emitter":480,"@marcom/ac-dom-nodes":489,"@marcom/ac-dom-styles":520,"@marcom/ac-feature":190,"@marcom/ac-raf-emitter/draw":633,"@marcom/ac-useragent":717}],609:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":610,dup:169}],610:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],611:[function(d,g,f){arguments[4][172][0].apply(f,arguments)},{"./extend":612,dup:172}],612:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],613:[function(d,g,f){g.exports={Queue:d("./ac-queue/Queue"),QueueItem:d("./ac-queue/QueueItem"),LiveQueue:d("./ac-queue/LiveQueue")}
},{"./ac-queue/LiveQueue":614,"./ac-queue/Queue":615,"./ac-queue/QueueItem":616}],614:[function(i,o,j){i("@marcom/ac-polyfills/Promise");
i("@marcom/ac-polyfills/requestAnimationFrame");i("@marcom/ac-polyfills/Function/prototype.bind");
var l=i("./Queue");var k=i("./QueueItem");function m(a){this._queue=new l();this._maxProcesses=a||1;
this._availableSlots=this._maxProcesses;this._rafId=0;this._isRunning=false;this._boundFunctions={_run:this._run.bind(this),_releaseSlot:this._releaseSlot.bind(this)}
}var n=m.prototype;n.start=function(){if(this._isRunning){cancelAnimationFrame(this._rafId)
}this._rafId=requestAnimationFrame(this._boundFunctions._run);this._isRunning=true
};n.pause=function(){if(this._isRunning){cancelAnimationFrame(this._rafId);this._rafId=0
}this._isRunning=false};n.stop=function(){this.pause();this.clear()};n.enqueue=function(c,b){if(typeof c!=="function"){throw new Error("LiveQueue can only enqueue functions")
}if(b===undefined){b=l.PRIORITY_DEFAULT}var a=new k(c,b);return this.enqueueQueueItem(a)
};n.enqueueQueueItem=function(a){this._queue.enqueueQueueItem(a);if(this._isRunning&&this._rafId===0){this.start()
}return a};n.dequeueQueueItem=function(a){return this._queue.dequeueQueueItem(a)
};n.clear=function(){this._queue=new l()};n.destroy=function(){this.pause();this._isRunning=false;
this._queue=null;this._boundFunctions=null};n.count=function(){return this._queue.count()+this.pending()
};n.pending=function(){return this._maxProcesses-this._availableSlots};n.isEmpty=function(){return this.count()===0
};n._run=function(){if(!this._isRunning){return}this._rafId=requestAnimationFrame(this._boundFunctions._run);
if(this._queue.isEmpty()||this._availableSlots===0){return}var a=this._queue.dequeue();
var b=a.data();if(this._isPromise(b)){this._retainSlot();b.then(this._boundFunctions._releaseSlot,this._boundFunctions._releaseSlot)
}this._stopRunningIfDone()};n._retainSlot=function(){this._availableSlots--};n._releaseSlot=function(){this._availableSlots++;
this._stopRunningIfDone()};n._stopRunningIfDone=function(){if(this._rafId!=0&&this._queue.count()===0&&this._availableSlots==this._maxProcesses){cancelAnimationFrame(this._rafId);
this._rafId=0}};n._isPromise=function(a){return !!(a&&typeof a.then==="function")
};o.exports=m},{"./Queue":615,"./QueueItem":616,"@marcom/ac-polyfills/Function/prototype.bind":undefined,"@marcom/ac-polyfills/Promise":undefined,"@marcom/ac-polyfills/requestAnimationFrame":undefined}],615:[function(h,m,i){var j=h("./QueueItem");
function k(){this._items=[]}var l=k.prototype;l.enqueue=function(a,c){if(c===undefined){c=k.PRIORITY_DEFAULT
}var b=new j(a,c);return this.enqueueQueueItem(b)};l.enqueueQueueItem=function(a){if(this._items.indexOf(a)===-1){this._items.push(a)
}return a};l.dequeue=function(){this._heapSort();var a=this._items.length-1;var b=this._items[0];
this._items[0]=this._items[a];this._items.pop();return b};l.dequeueQueueItem=function(a){var b=this._items.indexOf(a);
if(b>-1){this._items.splice(b,1)}return a};l.peek=function(){if(this.count()==0){return null
}this._heapSort();return this._items[0]};l.isEmpty=function(){return this._items.length===0
};l.count=function(){return this._items.length};l.toString=function(){var a=["Queue total items: "+this.count()+"\n"];
for(var b=0;b<this.count();++b){a.push(this._items[b].toString()+"\n")}return a.join("")
};l._heapSort=function(){var d=0;for(var a=this._items.length-1;a>=0;a--){var f=a;
while(f>0){d++;var c=Math.floor((f-1)/2);if(this._items[f].compareTo(this._items[c])>=0){break
}var b=this._items[f];this._items[f]=this._items[c];this._items[c]=b;f=c}}};k.PRIORITY_LOW=10;
k.PRIORITY_DEFAULT=5;k.PRIORITY_HIGH=1;m.exports=k},{"./QueueItem":616}],616:[function(h,m,i){var j=0;
function k(a,b){this.priority=b;this.data=a;this.insertionOrder=j++}var l=k.prototype;
l.compareTo=function(a){if(this.priority<a.priority){return -1}else{if(this.priority>a.priority){return 1
}else{return(this.insertionOrder<a.insertionOrder)?-1:1}}};l.toString=function(){return"QueueItem {priority:"+this.priority+",\tdata:"+this.data+"\tinsertionOrder:"+this.insertionOrder+"}"
};m.exports=k},{}],617:[function(s,t,p){var q=s("@marcom/ac-object/defaults");var r=s("@marcom/ac-jetpack-lib/core/BaseComponent");
var l=s("./ProgressiveImageLoader");var n={};u.Events={ImageLoad:"progressive-image-load",Complete:"progressive-image-complete"};
function u(f,c,b,g,a,d,h){this.name=b+"_"+h;r.apply(this,arguments);if(this.section.getComponentOfType(this.componentName)){throw new Error("Each Jetpack Section can only contain one ProgressiveImageComponent. Mark progressive images with the [data-progressive-image] attribute, or use [data-progressive-image-group] to distinctly load multiple groups of images in a section")
}try{this._loadOptions=JSON.parse(this.element.getAttribute("data-progressive-image-options"))
}catch(i){this._loadOptions=null}this.imageLoader=new l({container:this.element,includeContainer:true})
}var o=u.prototype=Object.create(r.prototype);var m=r.prototype;u.IS_SUPPORTED=function(){var a=document.getElementsByTagName("html")[0];
return a.classList.contains("progressive-image")};o.setupEvents=function(){m.setupEvents.apply(this,arguments);
this._onImageLoad=this._onImageLoad.bind(this);this._onComplete=this._onComplete.bind(this);
this.imageLoader.on(l.Events.ImageLoad,this._onImageLoad);this.imageLoader.on(l.Events.Complete,this._onComplete)
};o.onSectionWillAppearWithPadding=function(){m.onSectionWillAppearWithPadding.apply(this,arguments);
this.imageLoader.load(this._loadOptions)};o.destroy=function(){this.imageLoader.destroy();
this.imageLoader=null;m.destroy.apply(this,arguments)};o._onImageLoad=function(a){this.section.trigger(u.Events.ImageLoad,a)
};o._onComplete=function(){this.section.trigger(u.Events.Complete)};t.exports=u
},{"./ProgressiveImageLoader":618,"@marcom/ac-jetpack-lib/core/BaseComponent":421,"@marcom/ac-object/defaults":611}],618:[function(x,y,s){var v=x("@marcom/ac-object/defaults");
var u=x("@marcom/ac-queue").LiveQueue;var o=x("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var t=x("@marcom/ac-raf-emitter/update");var q=x("@marcom/ac-raf-emitter/draw");
var w={container:document.body,includeContainer:false};var p={loadingPoolSize:8,timeout:null,imageDataAttribute:"data-progressive-image",imageAnimate:true,imageAnimateClass:"progressive-image-animated"};
n.Events={ImageLoad:"image-load",Complete:"complete"};function n(a){o.call(this);
this.options=v(w,a);this.loadingOptions=null;this.els=[];this.loadingQueue=null;
this._queueItems=[];this._queueItemsObj={};this._loadOrder=[];this._timeout=null;
this._didCallLoad=false}var r=n.prototype=Object.create(o.prototype);r.load=function(a){if(this._didCallLoad){return
}this._didCallLoad=true;this.loadingOptions=v(p,a);this.loadingQueue=new u(this.loadingOptions.loadingPoolSize);
this.els=this._getProgressiveImageElements();if(this.options.includeContainer&&this.options.container.hasAttribute(this._getProgressiveImageDataAttribute())){this.els.unshift(this.options.container)
}q(function(){var c,d=this.els.length,b;for(c=0;c<d;c++){b={queueItem:this.loadingQueue.enqueue(this._loadNextItem.bind(this,c),c),el:this.els[c],id:c};
this._queueItems.push(b);this._queueItemsObj[c]=b;if(this.loadingOptions.imageAnimate){this.els[c].classList.add(this.loadingOptions.imageAnimateClass)
}}t(function(){this.loadingQueue.start();if(typeof this.loadingOptions.timeout==="number"){this._timeout=setTimeout(this.cancel.bind(this),this.loadingOptions.timeout)
}}.bind(this))}.bind(this))};r.setVisible=function(a){return new Promise(function(b,c){q(function(){a.removeAttribute(this._getProgressiveImageDataAttribute());
b();a=null}.bind(this))}.bind(this))};r.cancel=function(){if(this.els){var a,b=this.els.length;
for(a=0;a<b;a++){this.setVisible(this.els[a]);if(this.loadingOptions.imageAnimate){q(function(){this.els[a].setAttribute("data-progressive-image-loaded","")
}.bind(this,a))}}}this._handleLoadingComplete()};r.destroy=function(){this.cancel();
this.off();o.prototype.destroy.call(this)};r._loadNextItem=function(a){return new Promise(function(f,c,d){var b=this._queueItemsObj[f];
this._loadAndSetVisible(b.el).then(function(){var g=this._queueItems.indexOf(b);
this._queueItems.splice(g,1);this._queueItemsObj[b.id]=null;c();this._handleImageLoad(b.el);
b=c=null;if(this.loadingQueue.count()===1){this._handleLoadingComplete()}}.bind(this))
}.bind(this,a))};r._loadAndSetVisible=function(a){return new Promise(function(b,c){this.setVisible(a).then(function(){this._getBackgroundImageSrc(a).then(function(d){this._loadImage(d).then(b);
a=null}.bind(this))}.bind(this))}.bind(this))};r._getBackgroundImageSrc=function(a){return new Promise(function(b,c){t(function(){var d=a.currentStyle;
if(!d){d=window.getComputedStyle(a,false)}a=null;if(d.backgroundImage.indexOf("url(")===0){b(d.backgroundImage.slice(4,-1).replace(/"/g,""));
return}b(null)}.bind(this))}.bind(this))};r._getProgressiveImageDataAttribute=function(){return this.loadingOptions.imageDataAttribute
};r._getProgressiveImageCSSQuery=function(){return"["+this._getProgressiveImageDataAttribute()+"]"
};r._getProgressiveImageElements=function(){return this.options.container.querySelectorAll(this._getProgressiveImageCSSQuery())
};r._loadImage=function(a){return new Promise(this._loadImagePromiseFunc.bind(this,a))
};r._loadImagePromiseFunc=function(a,b,c){function d(){this.removeEventListener("load",d);
b(this);b=null}if(!a){b(null);return}var f=new Image();f.addEventListener("load",d);
f.src=a};r._clearTimeout=function(){if(this._timeout){window.clearTimeout(this._timeout);
this._timeout=null}};r._handleImageLoad=function(a){q(function(){this.trigger(n.Events.ImageLoad,a);
if(this.loadingOptions.imageAnimate){a.setAttribute("data-progressive-image-loaded","")
}a=null}.bind(this))};r._handleLoadingComplete=function(){this.loadingQueue.stop();
this._clearTimeout();this.trigger(n.Events.Complete)};y.exports=n},{"@marcom/ac-event-emitter-micro":609,"@marcom/ac-object/defaults":611,"@marcom/ac-queue":613,"@marcom/ac-raf-emitter/draw":633,"@marcom/ac-raf-emitter/update":635}],619:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":620,dup:169}],620:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],621:[function(d,g,f){arguments[4][106][0].apply(f,arguments)},{"./extend":622,"@marcom/ac-polyfills/Array/isArray":undefined,dup:106}],622:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],623:[function(d,g,f){arguments[4][568][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":624,dup:568}],624:[function(d,g,f){arguments[4][569][0].apply(f,arguments)
},{dup:569}],625:[function(o,m,i){var j=o("@marcom/ac-shared-instance").SharedInstance;
var l="ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",n="1.0.3";
var k=function(){this._currentID=0};k.prototype.getNewID=function(){this._currentID++;
return"raf:"+this._currentID};m.exports=j.share(l,n,k)},{"@marcom/ac-shared-instance":623}],626:[function(d,g,f){arguments[4][568][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":627,dup:568}],627:[function(d,g,f){arguments[4][569][0].apply(f,arguments)
},{dup:569}],628:[function(g,j,h){g("@marcom/ac-polyfills/performance/now");var i;
function k(a){a=a||{};this._reset();this._willRun=false;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._boundOnExternalAnimationFrame=this._onExternalAnimationFrame.bind(this)}i=k.prototype;
i.subscribe=function(a){if(this._nextFrameSubscribers[a.id]){return false}this._nextFrameSubscribers[a.id]=a;
this._nextFrameSubscriberCount++;this._run();return true};i.unsubscribe=function(a){if(!this._nextFrameSubscribers[a.id]){return false
}this._nextFrameSubscribers[a.id]=null;this._nextFrameSubscriberCount--;if(this._nextFrameSubscriberCount===0){this._cancel()
}return true};i.trigger=function(a,b){var c;for(c in this._subscribers){if(this._subscribers.hasOwnProperty(c)&&this._subscribers[c]!==null&&this._subscribers[c]._didDestroy===false){this._subscribers[c].trigger(a,b)
}}};i.destroy=function(){var a=this._cancel();this._subscribers=null;this._nextFrameSubscribers=null;
this._rafData=null;this._boundOnAnimationFrame=null;this._onExternalAnimationFrame=null;
return a};i.useExternalAnimationFrame=function(b){if(typeof b!=="boolean"){return
}var a=this._isUsingExternalAnimationFrame;if(b&&this._animationFrame){cancelAnimationFrame(this._animationFrame);
this._animationFrame=null}if(this._willRun&&!b&&!this._animationFrame){this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
}this._isUsingExternalAnimationFrame=b;if(b){return this._boundOnExternalAnimationFrame
}return a||false};i._run=function(){if(!this._willRun){this._willRun=true;if(this.lastFrameTime===0){this.lastFrameTime=performance.now()
}this._animationFrameActive=true;if(!this._isUsingExternalAnimationFrame){this._animationFrame=requestAnimationFrame(this._boundOnAnimationFrame)
}return true}};i._cancel=function(){var a=false;if(this._animationFrameActive){if(this._animationFrame){cancelAnimationFrame(this._animationFrame);
this._animationFrame=null}this._animationFrameActive=false;this._willRun=false;
a=true}if(!this._isRunning){this._reset()}return a};i._onSubscribersAnimationFrameStart=function(a){var b;
for(b in this._subscribers){if(this._subscribers.hasOwnProperty(b)&&this._subscribers[b]!==null&&this._subscribers[b]._didDestroy===false){this._subscribers[b]._onAnimationFrameStart(a)
}}};i._onSubscribersAnimationFrameEnd=function(a){var b;for(b in this._subscribers){if(this._subscribers.hasOwnProperty(b)&&this._subscribers[b]!==null&&this._subscribers[b]._didDestroy===false){this._subscribers[b]._onAnimationFrameEnd(a)
}}};i._onAnimationFrame=function(a){this._subscribers=this._nextFrameSubscribers;
this._nextFrameSubscribers={};this._nextFrameSubscriberCount=0;this._isRunning=true;
this._willRun=false;this._didRequestNextRAF=false;this._rafData.delta=a-this.lastFrameTime;
this.lastFrameTime=a;this._rafData.fps=0;if(this._rafData.delta>=1000){this._rafData.delta=0
}if(this._rafData.delta!==0){this._rafData.fps=1000/this._rafData.delta}this._rafData.time=a;
this._rafData.naturalFps=this._rafData.fps;this._rafData.timeNow=Date.now();this._onSubscribersAnimationFrameStart(this._rafData);
this.trigger("update",this._rafData);this.trigger("draw",this._rafData);this._onSubscribersAnimationFrameEnd(this._rafData);
if(!this._willRun){this._reset()}};i._onExternalAnimationFrame=function(a){if(!this._isUsingExternalAnimationFrame){return
}this._onAnimationFrame(a)};i._reset=function(){this._rafData={time:0,delta:0,fps:0,naturalFps:0,timeNow:0};
this._subscribers={};this._nextFrameSubscribers={};this._nextFrameSubscriberCount=0;
this._didEmitFrameData=false;this._animationFrame=null;this._animationFrameActive=false;
this._isRunning=false;this._shouldReset=false;this.lastFrameTime=0};j.exports=k
},{"@marcom/ac-polyfills/performance/now":undefined}],629:[function(o,l,i){var j=o("@marcom/ac-shared-instance").SharedInstance;
var k="ac-raf-executor:sharedRAFExecutorInstance",m="1.0.3";var n=o("./RAFExecutor");
l.exports=j.share(k,m,n)},{"./RAFExecutor":628,"@marcom/ac-shared-instance":626}],630:[function(d,g,f){g.exports={RAFEmitter:d("./ac-raf-emitter/RAFEmitter"),ThrottledRAFEmitter:d("./ac-raf-emitter/ThrottledRAFEmitter"),update:d("./ac-raf-emitter/update"),draw:d("./ac-raf-emitter/draw")}
},{"./ac-raf-emitter/RAFEmitter":631,"./ac-raf-emitter/ThrottledRAFEmitter":632,"./ac-raf-emitter/draw":633,"./ac-raf-emitter/update":635}],631:[function(o,n,p){var l;
var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;var q=o("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
var j=o("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
function k(a){a=a||{};m.call(this);this.id=j.getNewID();this.executor=a.executor||q;
this._reset();this._willRun=false;this._didDestroy=false}l=k.prototype=Object.create(m.prototype);
l.run=function(){if(!this._willRun){this._willRun=true;this.executor.subscribe(this);
return true}return false};l.cancel=function(){var a=false;if(this._willRun){this.executor.unsubscribe(this);
this._willRun=false;a=true}this._reset();return a};l.destroy=function(){var a=this.cancel();
this.executor.unsubscribe(this);this.executor=null;m.prototype.destroy.call(this);
this._didDestroy=true;return a};l.willRun=function(){return this._willRun};l.isRunning=function(){return this._isRunning
};l._onAnimationFrameStart=function(a){this._isRunning=true;this._willRun=false;
if(!this._didEmitFrameData){this._didEmitFrameData=true;this.trigger("start",a)
}};l._onAnimationFrameEnd=function(a){if(!this._willRun){this.trigger("stop",a);
this._reset()}};l._reset=function(){this._didEmitFrameData=false;this._isRunning=false
};n.exports=k},{"@marcom/ac-event-emitter-micro":619,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":625,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":629}],632:[function(p,o,q){var m;
var k=p("./RAFEmitter");var l=p("@marcom/ac-object/clone");var n=p("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function j(a,b){n.call(this);b=b||{};this._fps=a||0;this._delta=0;this._currentFps=0;
this._rafEmitter=b.rafEmitter||new k();this._lastThrottledTime=0;this._didEmitFrameData=false;
this._rafEmitterEvent=null;this._shouldDraw=false;this._boundOnRAFEmitterUpdate=this._onRAFEmitterUpdate.bind(this);
this._boundOnRAFEmitterDraw=this._onRAFEmitterDraw.bind(this);this._boundOnRAFEmitterStop=this._onRAFEmitterStop.bind(this);
this._rafEmitter.on("update",this._boundOnRAFEmitterUpdate);this._rafEmitter.on("draw",this._boundOnRAFEmitterDraw);
this._rafEmitter.on("stop",this._boundOnRAFEmitterStop)}m=j.prototype=Object.create(n.prototype);
m.setFps=function(a){if(a===this._fps){return false}this._fps=a;return true};m.getFps=function(){return this._fps
};m.run=function(){return this._rafEmitter.run()};m.cancel=function(){return this._rafEmitter.cancel()
};m.willRun=function(){return this._rafEmitter.willRun()};m.isRunning=function(){return this._rafEmitter.isRunning()
};m.destroy=function(){var a=this._rafEmitter.destroy();n.prototype.destroy.call(this);
this._rafEmitter=null;this._boundOnRAFEmitterUpdate=null;this._boundOnRAFEmitterDraw=null;
this._boundOnRAFEmitterStop=null;this._rafEmitterEvent=null;return a};m._onRAFEmitterUpdate=function(a){if(this._lastThrottledTime===0){this._lastThrottledTime=this._rafEmitter.executor.lastFrameTime
}this._delta=a.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}this._currentFps=1000/this._delta;if(this._currentFps>this._fps){this._rafEmitter.run();
return}this._rafEmitterEvent=l(a);this._rafEmitterEvent.delta=this._delta;this._rafEmitterEvent.fps=this._currentFps;
this._lastThrottledTime=this._rafEmitterEvent.time;this._shouldDraw=true;if(!this._didEmitFrameData){this.trigger("start",this._rafEmitterEvent);
this._didEmitFrameData=true}this.trigger("update",this._rafEmitterEvent)};m._onRAFEmitterDraw=function(){if(this._shouldDraw){this._shouldDraw=false;
this.trigger("draw",this._rafEmitterEvent)}};m._onRAFEmitterStop=function(){this._lastThrottledTime=0;
this._didEmitFrameData=false;this.trigger("stop",this._rafEmitterEvent)};o.exports=j
},{"./RAFEmitter":631,"@marcom/ac-event-emitter-micro":619,"@marcom/ac-object/clone":621}],633:[function(f,h,g){var i=f("./singleCall");
h.exports=i("draw")},{"./singleCall":634}],634:[function(j,i,k){var h=j("./RAFEmitter");
var g=j("./ThrottledRAFEmitter");i.exports=function(a){return function(b,c){var d;
if(c){d=new g(c)}else{d=new h()}d.once(a,function(f){b(f);d.destroy();b=d=null});
d.run()}}},{"./RAFEmitter":631,"./ThrottledRAFEmitter":632}],635:[function(f,h,g){var i=f("./singleCall");
h.exports=i("update")},{"./singleCall":634}],636:[function(d,g,f){arguments[4][222][0].apply(f,arguments)
},{"./shared/getEventType":645,"./utils/addEventListener":648,dup:222}],637:[function(d,g,f){arguments[4][223][0].apply(f,arguments)
},{"./shared/getEventType":645,"./utils/dispatchEvent":649,dup:223}],638:[function(d,g,f){arguments[4][6][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":639,"./shared/prefixHelper":640,"./shared/windowFallbackEventTypes":641,"./utils/eventTypeAvailable":642,dup:6}],639:[function(d,g,f){arguments[4][7][0].apply(f,arguments)
},{dup:7}],640:[function(d,g,f){arguments[4][8][0].apply(f,arguments)},{dup:8}],641:[function(d,g,f){arguments[4][9][0].apply(f,arguments)
},{dup:9}],642:[function(d,g,f){arguments[4][10][0].apply(f,arguments)},{dup:10}],643:[function(d,g,f){arguments[4][230][0].apply(f,arguments)
},{dup:230}],644:[function(d,g,f){arguments[4][231][0].apply(f,arguments)},{"./shared/getEventType":645,"./utils/removeEventListener":650,dup:231}],645:[function(d,g,f){arguments[4][232][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":638,dup:232}],646:[function(d,g,f){arguments[4][234][0].apply(f,arguments)
},{dup:234}],647:[function(d,g,f){arguments[4][235][0].apply(f,arguments)},{dup:235}],648:[function(d,g,f){arguments[4][236][0].apply(f,arguments)
},{dup:236}],649:[function(d,g,f){arguments[4][237][0].apply(f,arguments)},{"@marcom/ac-polyfills/CustomEvent":undefined,dup:237}],650:[function(d,g,f){arguments[4][238][0].apply(f,arguments)
},{dup:238}],651:[function(d,g,f){g.exports={getContentDimensions:d("./getContentDimensions"),getDimensions:d("./getDimensions"),getPagePosition:d("./getPagePosition"),getPercentInViewport:d("./getPercentInViewport"),getPixelsInViewport:d("./getPixelsInViewport"),getPosition:d("./getPosition"),getScrollX:d("./getScrollX"),getScrollY:d("./getScrollY"),getViewportPosition:d("./getViewportPosition"),isInViewport:d("./isInViewport")}
},{"./getContentDimensions":652,"./getDimensions":653,"./getPagePosition":654,"./getPercentInViewport":655,"./getPixelsInViewport":656,"./getPosition":657,"./getScrollX":658,"./getScrollY":659,"./getViewportPosition":660,"./isInViewport":661}],652:[function(d,g,f){arguments[4][239][0].apply(f,arguments)
},{"./utils/getBoundingClientRect":662,dup:239}],653:[function(d,g,f){arguments[4][81][0].apply(f,arguments)
},{"./utils/getBoundingClientRect":662,dup:81}],654:[function(d,g,f){arguments[4][241][0].apply(f,arguments)
},{"./getDimensions":653,"./getScrollX":658,"./getScrollY":659,"./utils/getBoundingClientRect":662,dup:241}],655:[function(d,g,f){arguments[4][242][0].apply(f,arguments)
},{"./getDimensions":653,"./getPixelsInViewport":656,dup:242}],656:[function(d,g,f){arguments[4][243][0].apply(f,arguments)
},{"./getViewportPosition":660,dup:243}],657:[function(d,g,f){arguments[4][244][0].apply(f,arguments)
},{"./getDimensions":653,"./utils/getBoundingClientRect":662,dup:244}],658:[function(d,g,f){arguments[4][245][0].apply(f,arguments)
},{dup:245}],659:[function(d,g,f){arguments[4][246][0].apply(f,arguments)},{dup:246}],660:[function(d,g,f){arguments[4][247][0].apply(f,arguments)
},{"./getPagePosition":654,"./getScrollX":658,"./getScrollY":659,"./utils/getBoundingClientRect":662,dup:247}],661:[function(d,g,f){arguments[4][248][0].apply(f,arguments)
},{"./getPercentInViewport":655,"./getPixelsInViewport":656,dup:248}],662:[function(d,g,f){arguments[4][82][0].apply(f,arguments)
},{dup:82}],663:[function(d,g,f){arguments[4][401][0].apply(f,arguments)},{dup:401,qs:664}],664:[function(d,g,f){arguments[4][402][0].apply(f,arguments)
},{"./parse":665,"./stringify":666,dup:402}],665:[function(d,g,f){arguments[4][403][0].apply(f,arguments)
},{"./utils":667,dup:403}],666:[function(d,g,f){arguments[4][404][0].apply(f,arguments)
},{"./utils":667,dup:404}],667:[function(d,g,f){arguments[4][405][0].apply(f,arguments)
},{dup:405}],668:[function(d,g,f){arguments[4][406][0].apply(f,arguments)},{"./clone":669,"./create":670,"./defaults":671,"./extend":672,"./getPrototypeOf":673,"./isDate":674,"./isEmpty":675,"./isRegExp":676,"./toQueryParameters":677,dup:406}],669:[function(d,g,f){arguments[4][106][0].apply(f,arguments)
},{"./extend":672,"@marcom/ac-polyfills/Array/isArray":undefined,dup:106}],670:[function(d,g,f){arguments[4][107][0].apply(f,arguments)
},{dup:107}],671:[function(d,g,f){arguments[4][172][0].apply(f,arguments)},{"./extend":672,dup:172}],672:[function(d,g,f){arguments[4][108][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":undefined,dup:108}],673:[function(d,g,f){arguments[4][411][0].apply(f,arguments)
},{dup:411}],674:[function(d,g,f){arguments[4][412][0].apply(f,arguments)},{dup:412}],675:[function(d,g,f){arguments[4][413][0].apply(f,arguments)
},{dup:413}],676:[function(d,g,f){arguments[4][414][0].apply(f,arguments)},{dup:414}],677:[function(d,g,f){arguments[4][415][0].apply(f,arguments)
},{"@marcom/ac-url/joinSearchParams":663,dup:415}],678:[function(d,g,f){arguments[4][169][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":679,dup:169}],679:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],680:[function(n,m,i){n("@marcom/ac-polyfills/Object/create");var k=n("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=n("@marcom/ac-raf-emitter/RAFEmitter");function o(a){k.call(this);this.options=a||{};
this.min=this.options.min||0;this.max=this.options.max||1;this.normalizedFPS=this.options.normalizedFPS||60;
this._boundHandleRAFEmitterUpdate=this._handleRAFEmitterUpdate.bind(this);this._boundHandleRAFEmitterDraw=this._handleRAFEmitterDraw.bind(this);
this._boundHandleRAFEmitterStop=this._handleRAFEmitterStop.bind(this);if(this.options.easingFunction){this.easingFunction=this.options.easingFunction
}this.rafEmitter=this.options.rafEmitter||new j();this.specificity=this.options.specificity||4;
this.friction=this.options.friction||10;this._targetValue=null;this._currentValue=null;
this._shouldUpdate=false;this._shouldEmitChange=false;this._didEmitFrameData=false;
this._bindEvents()}var l=o.prototype=Object.create(k.prototype);l.destroy=function(){this.trigger("destroy");
this.off();this.rafEmitter.destroy();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};l.isRunning=function(){return this.rafEmitter.isRunning()};l.setProgress=function(a){if(this._targetValue===a){return
}this._targetValue=a;this._shouldUpdate=true;this.rafEmitter.run()};l.updateValue=function(f){if(this._currentValue===null){this._currentValue=this._targetValue
}var g=1;if(this.easingFunction){var y=this.max-this.min,x=this.max-(this.max-this._targetValue)/y,d=this.max-(this.max-this._currentValue)/y,w=1-Math.abs(x-d),c=this.easingFunction(w,0,1,1);
g=1+(c-w)}var a=1,b=this.normalizedFPS;if(f&&b!==f.fps){a=b/f.fps}var v=this._targetValue-this._currentValue,u=v*g*a*(1/this.friction),h=parseFloat((this._currentValue+u).toFixed(this.specificity));
if(h===this._currentValue){this._currentValue=this._targetValue}else{this._currentValue=h
}this._shouldEmitChange=true};l._bindEvents=function(){this.rafEmitter.on("update",this._boundHandleRAFEmitterUpdate);
this.rafEmitter.on("draw",this._boundHandleRAFEmitterDraw);this.rafEmitter.on("stop",this._boundHandleRAFEmitterStop)
};l._unbindEvents=function(){this.rafEmitter.off("update",this._boundHandleRAFEmitterUpdate);
this.rafEmitter.off("draw",this._boundHandleRAFEmitterDraw);this.rafEmitter.off("stop",this._boundHandleRAFEmitterStop)
};l._handleRAFEmitterUpdate=function(a){if(this._shouldUpdate){this.updateValue(a)
}if(!this._shouldEmitChange){return}a.progress=this._currentValue;if(!this._didEmitFrameData){this.trigger("start",a);
this._didEmitFrameData=true}this.trigger("update",a)};l._handleRAFEmitterDraw=function(a){if(!this._shouldEmitChange){return
}a.progress=this._currentValue;this.trigger("draw",a);if(this._targetValue===this._currentValue){this._shouldUpdate=false;
this._shouldEmitChange=false;return}this._shouldUpdate=true;this.rafEmitter.run()
};l._handleRAFEmitterStop=function(a){a.progress=this._currentValue;this.trigger("stop",a);
this._didEmitFrameData=false};m.exports=o},{"@marcom/ac-event-emitter-micro":678,"@marcom/ac-polyfills/Object/create":undefined,"@marcom/ac-raf-emitter/RAFEmitter":631}],681:[function(r,s,q){r("@marcom/ac-polyfills/Function/prototype.bind");
r("@marcom/ac-polyfills/Object/create");var o=r("@marcom/ac-dom-events/utils/addEventListener");
var t=r("@marcom/ac-dom-events/utils/removeEventListener");var m=r("@marcom/ac-dom-metrics/getScrollY");
var u=r("@marcom/ac-motion-emitter/MotionEmitter");function n(a){a=a||{};if(typeof a.min!=="number"||typeof a.max!=="number"){return null
}u.call(this,a);this.smooth=this.options.smooth||false;this.unsmoothedStopTimeout=this.options.unsmoothedStopTimeout||1250;
if(!this.options.overrideScroll){this._bindScrollEvents()}this._rafEmitterStopTimeout=null
}var l=u.prototype;var p=n.prototype=Object.create(l);p.updateValue=function(a){if(this.smooth){return l.updateValue.call(this,a)
}if(this._currentValue===this._targetValue){this._shouldEmitChange=false;return
}this._currentValue=this._targetValue;this._shouldEmitChange=true};p.handleScroll=function(a){if(typeof a!=="number"){a=m()
}var b;if(a<this.min){b=this.min}else{if(a>this.max){b=this.max}else{b=a}}b=(b-this.min)/(this.max-this.min);
this.setProgress(b)};p.destroy=function(){if(this._boundHandleScroll){t(window,"scroll",this._boundHandleScroll)
}return l.destroy.call(this)};p._bindScrollEvents=function(){this._boundHandleScroll=this.handleScroll.bind(this);
o(window,"scroll",this._boundHandleScroll)};p._handleRAFEmitterUpdate=function(a){if(this._rafEmitterStopTimeout){this.rafEmitter.run()
}u.prototype._handleRAFEmitterUpdate.call(this,a)};p._handleRAFEmitterStop=function(a){if(this.smooth){u.prototype._handleRAFEmitterStop.call(this,a);
return}this._bindRAFEmitterUnsmoothedStopTimeout(a)};p._bindRAFEmitterUnsmoothedStopTimeout=function(a){if(this._rafEmitterStopTimeout){clearTimeout(this._rafEmitterStopTimeout)
}this._rafEmitterStopTimeout=setTimeout(this._onRAFEmitterUnsmoothedStop.bind(this,a),this.unsmoothedStopTimeout)
};p._onRAFEmitterUnsmoothedStop=function(a){this._rafEmitterStopTimeout=null;u.prototype._handleRAFEmitterStop.call(this,a)
};s.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":648,"@marcom/ac-dom-events/utils/removeEventListener":650,"@marcom/ac-dom-metrics/getScrollY":659,"@marcom/ac-motion-emitter/MotionEmitter":680,"@marcom/ac-polyfills/Function/prototype.bind":undefined,"@marcom/ac-polyfills/Object/create":undefined}],682:[function(d,g,f){arguments[4][445][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":683,dup:445}],683:[function(d,g,f){arguments[4][446][0].apply(f,arguments)
},{dup:446}],684:[function(d,g,f){g.exports={BreakpointsDelegate:d("./ac-breakpoints-delegate/BreakpointsDelegate")}
},{"./ac-breakpoints-delegate/BreakpointsDelegate":685}],685:[function(C,F,y){var D=C("@marcom/ac-shared-instance").SharedInstance,B=C("@marcom/ac-object"),r=C("@marcom/ac-window-delegate").WindowDelegate,E=C("@marcom/ac-window-delegate").WindowDelegateCustomEvent,s=C("@marcom/ac-event-emitter").EventEmitter;
var v="ac-breakpoints-delegate:BreakpointsDelegate",G="2.1.1";var u="breakpoint",t="resize orientationchange";
var A={large:{"min-width":1069,"max-width":1441,content:980,oldie:true},xlarge:{"min-width":1442,content:980},medium:{"min-width":736,"max-width":1068,content:692},small:{"min-width":320,"max-width":735,content:288,"max-device-width":768}};
var z={minWidth:"min-width",maxWidth:"max-width",maxDeviceWidth:"max-device-width",content:"content",oldIE:"oldie"};
function w(a){this._customEvent=new E(u,this._onBreakpointListenerAdded.bind(this),this._onBreakpointListenerRemoved.bind(this));
this.setBreakpoints(A)}var x=w.prototype;x.initialize=function(){this._breakpoint=null;
this._lastBreakpoint=null;this._handleOldIE();this._breakpointOrder=this._setBreakpointOrder();
if(!this._isOldIE){this._handleResize()}};x.getCustomEvent=function(){return this._customEvent
};x.getBreakpoint=function(){if(!this._customEvent.active){this._handleResize()
}return this._breakpoint};x.setBreakpoints=function(a){this.breakpoints=B.clone(a);
this.initialize()};x._handleResize=function(){var b=r.clientWidth(),a;var c,d,f,g=this._breakpointOrder.length;
for(c=0;c<g;c++){d=this._breakpointOrder[c];f=this.breakpoints[d];if(f._breakPosition>b){break
}}if(c>0){c=c-1}a=this.breakpoints[this._breakpointOrder[c]];if(!this._breakpoint){this._breakpoint=a;
return}if(a.name===this._breakpoint.name){return}this._lastBreakpoint=this._breakpoint;
this._breakpoint=a;r.trigger(u,{incoming:this._breakpoint,outgoing:this._lastBreakpoint})
};x._setBreakpointOrder=function(){var a=0,d=[],f=[],b=z.minWidth,c;for(c in this.breakpoints){if(this.breakpoints.hasOwnProperty(c)){this.breakpoints[c].name=c;
d.push(this.breakpoints[c][b])}}d.sort(function(g,h){return g-h});d.forEach(function(g){var h;
for(h in this.breakpoints){if(this.breakpoints.hasOwnProperty(h)){if(this.breakpoints[h][b]===g){f.push(h)
}}}},this);f.forEach(function(g,h){this.breakpoints[g]._breakPosition=a;if(f[h+1]){a=this.breakpoints[f[h+1]][b]
}},this);return f};x._handleOldIE=function(){var c=document.documentElement,a=z.oldIE;
if(c.className.indexOf("no-"+a)>-1||c.className.indexOf(a)===-1){return}this._isOldIE=true;
this._replaceBreakpoints(function(d){return d[a]===true});var b;for(b in this.breakpoints){if(this.breakpoints.hasOwnProperty(b)){this._breakpoint=this.breakpoints[b];
return}}};x._replaceBreakpoints=function(a){var c,b={},d;for(c in this.breakpoints){if(this.breakpoints.hasOwnProperty(c)){d=this.breakpoints[c];
if(a(d)){b[c]=B.clone(this.breakpoints[c])}}}this.breakpoints=b};x._onBreakpointListenerAdded=function(){r.on(t,this._handleResize,this)
};x._onBreakpointListenerRemoved=function(){r.off(t,this._handleResize,this)};F.exports=D.share(v,G,w)
},{"@marcom/ac-event-emitter":682,"@marcom/ac-object":668,"@marcom/ac-shared-instance":686,"@marcom/ac-window-delegate":695}],686:[function(d,g,f){arguments[4][568][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":687,dup:568}],687:[function(d,g,f){arguments[4][569][0].apply(f,arguments)
},{dup:569}],688:[function(d,g,f){arguments[4][445][0].apply(f,arguments)},{"./ac-event-emitter/EventEmitter":689,dup:445}],689:[function(d,g,f){arguments[4][446][0].apply(f,arguments)
},{dup:446}],690:[function(d,g,f){arguments[4][480][0].apply(f,arguments)},{"./ac-dom-emitter/DOMEmitter":691,dup:480}],691:[function(d,g,f){arguments[4][481][0].apply(f,arguments)
},{"./DOMEmitterEvent":692,"@marcom/ac-dom-events/addEventListener":636,"@marcom/ac-dom-events/dispatchEvent":637,"@marcom/ac-dom-events/removeEventListener":644,"@marcom/ac-dom-traversal/matchesSelector":44,"@marcom/ac-dom-traversal/querySelectorAll":50,"ac-event-emitter":688,dup:481}],692:[function(d,g,f){arguments[4][482][0].apply(f,arguments)
},{"@marcom/ac-dom-events/preventDefault":643,"@marcom/ac-dom-events/stopPropagation":646,"@marcom/ac-dom-events/target":647,dup:482}],693:[function(d,g,f){arguments[4][445][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":694,dup:445}],694:[function(d,g,f){arguments[4][446][0].apply(f,arguments)
},{dup:446}],695:[function(d,g,f){g.exports={WindowDelegate:d("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:d("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:d("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":698,"./ac-window-delegate/WindowDelegateCustomEvent":699,"./ac-window-delegate/WindowDelegateOptimizer":700}],696:[function(h,m,i){var k=h("@marcom/ac-event-emitter").EventEmitter;
var j=function(){this._emitter=new k();this._customEvents={}};var l=j.prototype;
l.on=function(c,a,b){this._activateCustomEvents(c);this._emitterOn.apply(this,arguments);
return this};l.once=function(c,a,b){this._emitterOnce.apply(this,arguments);return this
};l.off=function(c,a,b){this._emitterOff.apply(this,arguments);this._deactivateCustomEvents(c);
return this};l.has=function(c,a,b){return this._emitter.has.apply(this._emitter,arguments)
};l.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};l.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};l.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};l.add=function(a){this._customEvents[a.name]=a};l.canHandleCustomEvent=function(a){return this._customEvents.hasOwnProperty(a)
};l.isHandlingCustomEvent=function(a){if(this._customEvents[a]&&this._customEvents[a].active){return true
}return false};l._activateCustomEvents=function(b){var d=b.split(" "),c,a,f=d.length;
for(a=0;a<f;a++){c=d[a];if(this._customEvents[c]&&!this._customEvents[c].active){this._customEvents[c].initialize();
this._customEvents[c].active=true}}};l._deactivateCustomEvents=function(b){var a;
if(!b||b.length===0){for(a in this._customEvents){if(this._customEvents.hasOwnProperty(a)){this._deactivateCustomEvent(a)
}}return}var c=b.split(" "),d=c.length;for(a=0;a<d;a++){this._deactivateCustomEvent(c[a])
}};l._deactivateCustomEvent=function(a){if(!this.has(a)&&this._customEvents[a]&&this._customEvents[a].active){this._customEvents[a].deinitialize();
this._customEvents[a].active=false}};l._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)
};l._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)};
l._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};m.exports=j
},{"@marcom/ac-event-emitter":693}],697:[function(h,m,i){var j=h("@marcom/ac-event-emitter").EventEmitter;
var k;var l=function(a){j.call(this);this.optimizers=a;this._events={};this._properties={};
this._initialize()};k=l.prototype=new j(null);k.canOptimizeEvent=function(a){return this._events.hasOwnProperty(a)
};k.canOptimizeProperty=function(a){return this._properties.hasOwnProperty(a)};
k.isOptimizingEvent=function(a){if(this._events[a]&&this._events[a].active){return true
}return false};k.isOptimizingProperty=function(a){if(this._properties[a]&&this._properties[a].active){return true
}return false};k.add=function(a){this._setOptimizerEvents(a);this._setOptimizerProperties(a);
a.on("update",this._onUpdate,this);a.on("activate",this._onActivate,this);a.on("deactivate",this._onDeactivate,this)
};k.get=function(a){if(this.isOptimizingProperty(a)){return this._properties[a].value
}return null};k.set=function(a,b){if(!this._properties[a]){return false}this._properties[a].value=b;
return this};k.getOptimizerByEvent=function(a){if(this._events[a]){return this._events[a]
}return null};k._initialize=function(){var a,b;for(a in this.optimizers){if(this.optimizers.hasOwnProperty(a)){this.add(this.optimizers[a])
}}};k._onUpdate=function(a){this.set(a.prop,a.val)};k._onActivate=function(c){var b=c.propertyNames,a,d=b.length;
for(a=0;a<d;a++){this._properties[b[a]].active=true}};k._onDeactivate=function(c){var b=c.propertyNames,a,d=b.length;
for(a=0;a<d;a++){this._properties[b[a]].active=false}};k._setOptimizerEvents=function(c){var a,b=c.eventNames,d=b.length;
for(a=0;a<d;a++){this._setOptimizerEvent(b[a],c)}};k._setOptimizerEvent=function(a,b){if(this._events[a]){return
}this._events[a]=b};k._setOptimizerProperties=function(b){var a,c=b.propertyNames,d=c.length;
for(a=0;a<d;a++){this._setOptimizerProperty(c[a])}};k._setOptimizerProperty=function(a){if(this._properties.hasOwnProperty(a)){return
}this._properties[a]={};this._properties[a].active=false;this._properties[a].value=null
};m.exports=l},{"@marcom/ac-event-emitter":693}],698:[function(x,z,v){var t;var y=x("@marcom/ac-shared-instance").SharedInstance,q=x("@marcom/ac-dom-emitter").DOMEmitter,s=x("./OptimizerController"),w=x("./CustomEventController"),u=x("./queries/queries"),p=x("./optimizers/optimizers");
var r="ac-window-delegate:WindowDelegate",A="3.0.2";function o(){this._emitter=new q(window);
this._controllers={optimizer:new s(p),customEvent:new w()};var a;for(a in u){if(u.hasOwnProperty(a)){this[a]=this._getProperty.bind(this,a);
u[a]=u[a].bind(this)}}this._bindEvents()}t=o.prototype;t.on=function(d,a,c){var b=this._seperateCustomEvents(d);
this._optimizeEvents(b.standardEvents);this._customEventOn(b.customEvents,a,c);
this._emitterOn.apply(this,arguments);return this};t.once=function(d,a,c){var b=this._seperateCustomEvents(d);
this._optimizeEvents(b.standardEvents);this._customEventOnce(b.customEvents,a,c);
this._emitterOnce.apply(this,arguments);return this};t.off=function(g,a,f){var b=this._seperateCustomEvents(g),d=false;
if(!g){d=true}this._customEventOff(b.customEvents,a,f,d);this._emitterOff.apply(this,arguments);
if(d){try{var h;for(h in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(h)&&this._shouldDeoptimizeEvent(h,true)){this._deoptimizeEvent(h)
}}this._bindEvents()}catch(c){}}return this};t.has=function(c,a,b){return this._emitter.has.apply(this._emitter,arguments)
};t.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};t.emitterTrigger=function(){this._emitter.emitterTrigger.apply(this._emitter,arguments);
return this};t.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};t.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};t.addOptimizer=function(a){this._controllers.optimizer.add(a);return this
};t.addCustomEvent=function(a){this._controllers.customEvent.add(a);return this
};t._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};t._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};t._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};t._onEventUnbound=function(a){var b=a.data.evt;
if(this._shouldDeoptimizeEvent(b)){this._deoptimizeEvent(b)}};t._customEventOn=function(c,a,b){if(c.length===0){return
}this._controllers.customEvent.on(c.join(" "),a,b)};t._customEventOnce=function(c,a,b){if(c.length===0){return
}this._controllers.customEvent.once(c.join(" "),a,b)};t._customEventOff=function(d,a,c,b){if(!b&&d.length===0){return
}if(b&&d.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(d.join(" "),a,c)
};t._getProperty=function(a,c){var b=null;if(!c){b=this._getOptimizedValue(a)}if(b===null){b=u[a].call(this,c)
}return b};t._optimizeEvents=function(b){var c,a,d=b.length;for(a=0;a<d;a++){c=b[a];
if(this._shouldOptimizeEvent(c)){this._optimizeEvent(c)}}};t._shouldOptimizeEvent=function(a){if(this._controllers.optimizer.canOptimizeEvent(a)&&!this._controllers.optimizer.isOptimizingEvent(a)){return true
}return false};t._shouldDeoptimizeEvent=function(b,a){if(this._controllers.optimizer.isOptimizingEvent(b)&&(a||this._emitter._eventEmitter._events[b].length<=1)){return true
}return false};t._optimizeEvent=function(a){var b=this._controllers.optimizer.getOptimizerByEvent(a);
b.activate();this._emitterOn(a,b.callback,b)};t._deoptimizeEvent=function(a){var b=this._controllers.optimizer.getOptimizerByEvent(a);
b.deactivate();this._emitterOff(a,b.callback,b)};t._getOptimizedValue=function(a){return this._controllers.optimizer.get(a)
};t._seperateCustomEvents=function(b){var f={customEvents:[],standardEvents:[]};
if(typeof b==="string"){var a=b.split(" "),d,c,g=a.length;for(c=0;c<g;c++){d=a[c];
if(this._controllers.customEvent.canHandleCustomEvent(d)){f.customEvents.push(d)
}else{f.standardEvents.push(d)}}}return f};t._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};z.exports=y.share(r,A,o)},{"./CustomEventController":696,"./OptimizerController":697,"./optimizers/optimizers":703,"./queries/queries":712,"@marcom/ac-dom-emitter":690,"@marcom/ac-shared-instance":686}],699:[function(m,l,i){var j=m("@marcom/ac-event-emitter").EventEmitter;
function h(c,a,b){j.call(this);this.name=c;this.active=false;this._initializeFunc=a;
this._deinitializeFunc=b}var k=h.prototype=new j(null);k.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};k.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};l.exports=h},{"@marcom/ac-event-emitter":693}],700:[function(m,l,h){var j=m("@marcom/ac-event-emitter").EventEmitter;
function i(b,a){j.call(this);this.active=false;this.eventNames=b.eventNames;this.propertyNames=b.propertyNames;
this.options=b.options||{};this.callback=a}var k=i.prototype=new j(null);k.update=function(a,b){this.trigger("update",{prop:a,val:b})
};k.activate=function(){this.active=true;this.trigger("activate",this)};k.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};l.exports=i},{"@marcom/ac-event-emitter":693}],701:[function(m,l,i){var j=m("../../WindowDelegateOptimizer"),n=m("../../queries/queries");
var o={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var k=new j(o,function(a){var b,c=o.propertyNames,d=c.length;for(b=0;b<d;b++){this.update(c[b],n[c[b]](true))
}});l.exports=k},{"../../WindowDelegateOptimizer":700,"../../queries/queries":712}],702:[function(l,k,i){var j=l("../../WindowDelegateOptimizer"),m=l("../../queries/queries");
var n={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var o=new j(n,function(a){var b,c=n.propertyNames,d=c.length;for(b=0;b<d;b++){this.update(c[b],m[c[b]](true))
}});k.exports=o},{"../../WindowDelegateOptimizer":700,"../../queries/queries":712}],703:[function(j,i,g){var k=j("./events/resize"),h=j("./events/scroll");
i.exports=[k,h]},{"./events/resize":701,"./events/scroll":702}],704:[function(f,i,g){var h=function(a){return document.documentElement.clientHeight
};i.exports=h},{}],705:[function(f,i,g){var h=function(a){return document.documentElement.clientWidth
};i.exports=h},{}],706:[function(f,h,g){var i=function(a){return window.innerHeight||this.clientHeight(a)
};h.exports=i},{}],707:[function(f,i,g){var h=function(a){return window.innerWidth||this.clientWidth(a)
};i.exports=h},{}],708:[function(i,h,g){var f=function(a){return document.body.scrollWidth-this.innerWidth()
};h.exports=f},{}],709:[function(i,h,f){var g=function(a){return document.body.scrollHeight-this.innerHeight()
};h.exports=g},{}],710:[function(f,i,g){var h=function(c){var a=window.pageXOffset;
if(!a){var b=document.documentElement||document.body.parentNode||document.body;
a=b.scrollLeft}return a};i.exports=h},{}],711:[function(f,i,g){var h=function(c){var a=window.pageYOffset;
if(!a){var b=document.documentElement||document.body.parentNode||document.body;
a=b.scrollTop}return a};i.exports=h},{}],712:[function(p,r,n){var v=p("./methods/innerWidth"),o=p("./methods/innerHeight"),t=p("./methods/clientWidth"),m=p("./methods/clientHeight"),u=p("./methods/scrollX"),w=p("./methods/scrollY"),q=p("./methods/maxScrollX"),s=p("./methods/maxScrollY");
r.exports={innerWidth:v,innerHeight:o,clientWidth:t,clientHeight:m,scrollX:u,scrollY:w,maxScrollX:q,maxScrollY:s}
},{"./methods/clientHeight":704,"./methods/clientWidth":705,"./methods/innerHeight":706,"./methods/innerWidth":707,"./methods/maxScrollX":708,"./methods/maxScrollY":709,"./methods/scrollX":710,"./methods/scrollY":711}],713:[function(d,g,f){g.exports={Viewport:d("./ac-viewport/Viewport")}
},{"./ac-viewport/Viewport":714}],714:[function(r,t,p){var s=r("@marcom/ac-shared-instance").SharedInstance,l=r("@marcom/ac-window-delegate").WindowDelegate,n=r("@marcom/ac-breakpoints-delegate").BreakpointsDelegate;
var m="ac-viewport:Viewport",u="3.2.0";var o;function q(a){var c,b=l;for(c in b){if(b.hasOwnProperty(c)){this[c]=b[c]
}else{o[c]=b[c]}}this.addCustomEvent(n.getCustomEvent())}o=q.prototype;o.getBreakpoint=function(){return n.getBreakpoint()
};o.setBreakpoints=function(a){return n.setBreakpoints(a)};t.exports=s.share(m,u,q)
},{"@marcom/ac-breakpoints-delegate":684,"@marcom/ac-shared-instance":686,"@marcom/ac-window-delegate":695}],715:[function(d,g,f){g.exports={lerp:function(b,a,c){return a+(c-a)*b
},map:function(a,b,j,c,k){return this.lerp(this.norm(a,b,j),c,k)},mapClamp:function(a,b,j,c,k){var a=this.lerp(this.norm(a,b,j),c,k);
return Math.max(c,Math.min(k,a))},norm:function(a,b,c){return(a-b)/(c-b)},clamp:function(a,b,c){return Math.max(b,Math.min(c,a))
},randFloat:function(a,b){return(Math.random()*(b-a))+a},randInt:function(a,b){return Math.floor((Math.random()*(b-a))+a)
}}},{}],716:[function(C,E,z){var G=C("@marcom/ac-dom-traversal/querySelectorAll");
var u=C("@marcom/ac-object/clone");var B=C("@marcom/sm-math-utils").lerp;var s=C("@marcom/ac-browser-prefixed");
var t=C("@marcom/ac-viewport").Viewport;var H=C("@marcom/ac-dom-metrics");var v=C("@marcom/ac-scroll-motion-emitter/ScrollMotionEmitter");
var w={pin:false,duration:0,delay:0,scrollStart:false,friction:4,translateTo:[0,0],translateFrom:[0,0],scaleTo:1,scaleFrom:1,rotateTo:0,rotateFrom:0,fadeTo:1,fadeFrom:1,blurTo:0,blurFrom:0,overrideScroll:false,smooth:true,scrollMotionEmitter:null};
var A=["blurTo","blurFrom"];var D=["translateTo","translateFrom","scaleTo","scaleFrom","rotateTo","rotateFrom"];
var F=["fadeTo","fadeFrom"];var I=C("@marcom/ac-feature/threeDTransformsAvailable")();
var y=function(a,b){this.el=a;this.options=this._overrideDefaultOptions(b);this.transforms={};
this._update=this._update.bind(this);this._memoizeMetrics();this._setEmitterBounds();
this._initScrollMotionEmitter();this._setupEvents();this._isAnimating=false;this.handleScroll(t.scrollY())
};var x=y.prototype;x.destroy=function(){this._teardownEvents();this.scrollMotionEmitter.destroy();
this.scrollMotionEmitter=null;this.el=null;this.options=null};x.setOption=function(b,a){this.options[b]=a;
if(b==="duration"||b==="delay"){this._setEmitterBounds()}};x.handleScroll=function(a){this.scrollMotionEmitter.handleScroll(a)
};x.getTransform=function(a){return this.transforms[a]};x.getOpacity=function(a){return this.opacity
};x._overrideDefaultOptions=function(a){var d=Object.assign(u(w),a);var b;var c;
for(c in a){if(D.indexOf(c)>-1){this.hasTransform=true}else{if(F.indexOf(c)>-1){this.hasFade=true
}else{if(A.indexOf(c)>-1){this.hasBlur=true}}}}return d};x._setEmitterBounds=function(){if(this.options.scrollStart||this.options.scrollStart===0){this._emitterMin=this.options.scrollStart
}else{this._emitterMin=this.elTop-this.windowHeight+this.options.delay+this.options.translateFrom[1]
}this._emitterMax=this._emitterMin+this.options.duration;if(this.scrollMotionEmitter){this.scrollMotionEmitter.min=this._emitterMin;
this.scrollMotionEmitter.max=this._emitterMax}};x._memoizeMetrics=function(){this.windowHeight=t.clientHeight();
this.elHeight=H.getDimensions(this.el).height;this.elTop=H.getPagePosition(this.el).top
};x._initScrollMotionEmitter=function(){if(this.options.scrollMotionEmitter){this.scrollMotionEmitter=this.options.scrollMotionEmitter
}else{this.scrollMotionEmitter=new v({smooth:this.options.smooth,overrideScroll:this.options.overrideScroll,min:this._emitterMin,max:this._emitterMax,friction:this.options.friction})
}};x._setupEvents=function(){this.scrollMotionEmitter.on("draw",this._update)};
x._teardownEvents=function(){this.scrollMotionEmitter.off("draw",this._update)};
x._setElementTransform=function(){if(!this.hasTransform){return}this.transforms.translateY=B(this._progress,this.options.translateFrom[1],this.options.translateTo[1]);
this.transforms.translateX=B(this._progress,this.options.translateFrom[0],this.options.translateTo[0]);
this.transforms.rotate=B(this._progress,this.options.rotateFrom,this.options.rotateTo);
this.transforms.scale=B(this._progress,this.options.scaleFrom,this.options.scaleTo);
var b=(this.transforms.scale==1)?"":"scale("+this.transforms.scale+","+this.transforms.scale+") ";
var a=(this.transforms.rotate==0)?"":" rotate("+this.transforms.rotate+"deg)";if(I){this.el.style[s.transform]=b+"translate3d("+this.transforms.translateX+"px,"+this.transforms.translateY+"px,0)"+a
}else{this.el.style[s.transform]=b+"translate("+this.transforms.translateX+"px,"+this.transforms.translateY+"px)"+a
}};x._setElementOpacity=function(){if(!this.hasFade){return}this.opacity=B(this._progress,this.options.fadeFrom,this.options.fadeTo);
this.el.style.opacity=this.opacity};x._setStatus=function(){if((this._progress>0&&this._progress<1)&&!this._isAnimating){this._isAnimating=true;
this.el.classList.remove("has-animated");this.el.classList.remove("has-not-animated");
this.el.classList.add("is-animating")}else{if(this._progress>=1&&this._isAnimating){this._isAnimating=false;
this.el.classList.remove("is-animating");this.el.classList.remove("has-not-animated");
this.el.classList.add("has-animated")}else{if(this._progress<=0&&this._isAnimating){this._isAnimating=false;
this.el.classList.remove("is-animating");this.el.classList.remove("has-animated");
this.el.classList.add("has-not-animated")}}}};x._update=function(a){if(isNaN(a.progress)){return
}this._progress=a.progress;this._setElementTransform();this._setElementOpacity()
};E.exports=y},{"@marcom/ac-browser-prefixed":1,"@marcom/ac-dom-metrics":651,"@marcom/ac-dom-traversal/querySelectorAll":50,"@marcom/ac-feature/threeDTransformsAvailable":209,"@marcom/ac-object/clone":669,"@marcom/ac-scroll-motion-emitter/ScrollMotionEmitter":681,"@marcom/ac-viewport":713,"@marcom/sm-math-utils":715}],717:[function(f,i,g){var h={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
i.exports=f("./parseUserAgent")(h)},{"./parseUserAgent":720}],718:[function(d,g,f){g.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],719:[function(d,g,f){g.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(a){return(a.ua.indexOf("Edge")>-1||a.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(a){return(a.ua.indexOf("Safari")>-1&&a.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(a){return(a.ua.indexOf("IE")>-1||a.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var a=false;if(document.documentMode){a=parseInt(document.documentMode,10)
}return a}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(a){return(a.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(a){return(a.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(a){return(a.ua.indexOf("iPhone")>-1||a.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(a){return(a.platform.indexOf("Linux")>-1&&a.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],720:[function(r,s,p){var q=r("./defaults");var m=r("./dictionary");function n(a){return new RegExp(a+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function o(g,a){if(typeof g.parseVersion==="function"){return g.parseVersion(a)
}else{var d=g.version||g.userAgent;if(typeof d==="string"){d=[d]}var f=d.length;
var c;for(var b=0;b<f;b++){c=a.match(n(d[b]));if(c&&c.length>1){return c[1].replace(/_/g,".")
}}}}function k(a,d,g){var h=a.length;var f;var c;for(var i=0;i<h;i++){if(typeof a[i].test==="function"){if(a[i].test(g)===true){f=a[i].name
}}else{if(g.ua.indexOf(a[i].userAgent)>-1){f=a[i].name}}if(f){d[f]=true;c=o(a[i],g.ua);
if(typeof c==="string"){var b=c.split(".");d.version.name=c;if(b&&b.length>0){d.version.major=parseInt(b[0]||0);
d.version.minor=parseInt(b[1]||0);d.version.patch=parseInt(b[2]||0)}}else{if(f==="edge"){d.version.name="12.0.0";
d.version.major="12";d.version.minor="0";d.version.patch="0"}}if(typeof a[i].parseDocumentMode==="function"){d.version.documentMode=a[i].parseDocumentMode()
}return d}}return d}function l(a){var b={};b.browser=k(m.browser,q.browser,a);b.os=k(m.os,q.os,a);
return b}s.exports=l},{"./defaults":718,"./dictionary":719}],721:[function(d,g,f){arguments[4][236][0].apply(f,arguments)
},{dup:236}],722:[function(d,g,f){arguments[4][169][0].apply(f,arguments)},{"./ac-event-emitter-micro/EventEmitterMicro":723,dup:169}],723:[function(d,g,f){arguments[4][170][0].apply(f,arguments)
},{dup:170}],724:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
v("@marcom/ac-polyfills/Object/keys");v("@marcom/ac-polyfills/Object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=v("@marcom/ac-dom-events/utils/addEventListener");var q=v("@marcom/ac-feature/mediaQueriesAvailable");
var u="viewport-emitter";var o="::before";var t="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function n(a){m.call(this);this._initializeElement(a);if(q()){this._updateViewport=this._updateViewport.bind(this);
p(window,"resize",this._updateViewport);p(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(t);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var r=n.prototype=Object.create(m.prototype);
r.viewport=false;r.retina=false;r._initializeElement=function(b){var a;b=b||u;a=document.getElementById(b);
if(!a){a=document.createElement("div");a.id=b;a=document.body.appendChild(a)}this._el=a
};r._getElementContent=function(){var a;if("currentStyle" in this._el){a=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();a=window.getComputedStyle(this._el,o).content}if(a){a=a.replace(/["']/g,"")
}if(a){return a}return false};r._updateViewport=function(){var a=this.viewport;
var c;var b;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(a&&this.viewport!==a){b={from:a,to:this.viewport};this.trigger("change",b);
this.trigger("from:"+a,b);this.trigger("to:"+this.viewport,b)}};r._updateRetina=function(a){var b=this.retina;
this.retina=this._retinaQuery.matches;if(b!==this.retina){this.trigger("retinachange",{from:b,to:this.retina})
}};r._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};w.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":721,"@marcom/ac-event-emitter-micro":722,"@marcom/ac-feature/mediaQueriesAvailable":206,"@marcom/ac-polyfills/Function/prototype.bind":undefined,"@marcom/ac-polyfills/Object/create":undefined,"@marcom/ac-polyfills/Object/keys":undefined}],725:[function(i,h,f){var g=i("./ViewportEmitter");
h.exports=new g()},{"./ViewportEmitter":724}],726:[function(d,g,f){(function(){if("objectFit" in document.documentElement.style!==false){window.objectFitPolyfill=function(){return false
};return}var a=function(n){var p=window.getComputedStyle(n,null);var q=p.getPropertyValue("position");
var h=p.getPropertyValue("overflow");var o=p.getPropertyValue("display");if(!q||q==="static"){n.style.position="relative"
}if(h!=="hidden"){n.style.overflow="hidden"}if(!o||o==="inline"){n.style.display="block"
}if(n.clientHeight===0){n.style.height="100%"}if(n.className.indexOf("object-fit-polyfill")===-1){n.className=n.className+" object-fit-polyfill"
}};var c=function(q){var p=window.getComputedStyle(q,null);var h={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px"};
for(var o in h){var n=p.getPropertyValue(o);if(n!==h[o]){q.style[o]=h[o]}}};var b=function(k){var h=k.parentNode;
a(h);c(k);k.style.position="absolute";k.style.height="100%";k.style.width="auto";
if(k.clientWidth>h.clientWidth){k.style.top="0";k.style.marginTop="0";k.style.left="50%";
k.style.marginLeft=(k.clientWidth/-2)+"px"}else{k.style.width="100%";k.style.height="auto";
k.style.left="0";k.style.marginLeft="0";k.style.top="50%";k.style.marginTop=(k.clientHeight/-2)+"px"
}};var i=function(){var h=document.querySelectorAll("[data-object-fit]");for(var m=0;
m<h.length;m++){var n=h[m].nodeName.toLowerCase();if(n==="img"){if(h[m].complete){b(h[m])
}else{h[m].addEventListener("load",function(){b(this)})}}else{if(n==="video"){if(h[m].readyState>0){b(h[m])
}else{h[m].addEventListener("loadedmetadata",function(){b(this)})}}}}return true
};document.addEventListener("DOMContentLoaded",function(){i()});window.addEventListener("resize",function(){i()
});window.objectFitPolyfill=i})()},{}],727:[function(r,s,o){var q=function(){function a(d,b){for(var c=0;
c<b.length;c++){var f=b[c];f.enumerable=f.enumerable||false;f.configurable=true;
if("value" in f){f.writable=true}Object.defineProperty(d,f.key,f)}}return function(d,c,b){if(c){a(d.prototype,c)
}if(b){a(d,b)}return d}}();function n(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function m(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function k(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var p=r("@marcom/ac-jetpack-lib/core/BaseComponent");
var l=function(c){k(f,c);function f(j,g,A,x,z,h,y){n(this,f);var i=m(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments));
i.componentElement=g;i.componentVisible=false;i.trackedElement=i.section.elementEngagement.addElement(i.componentElement,{timeToEngage:0,inViewThreshold:0.1});
i.trackedElement.on("enterview",i.onComponentWillAppear.bind(i));i.trackedElement.on("exitview",i.onComponentWillDisappear.bind(i));
i.trackedElement.on("engaged",i.onComponentDidAppear.bind(i));setTimeout(i.requestDOMChange.bind(i),1000);
return i}q(f,[{key:"onComponentWillAppear",value:function a(){this.componentVisible=true
}},{key:"onComponentDidAppear",value:function d(){this.componentVisible=true}},{key:"onComponentWillDisappear",value:function b(){this.componentVisible=false
}}]);return f}(p);s.exports=l},{"@marcom/ac-jetpack-lib/core/BaseComponent":421}],728:[function(A,B,x){var z=A("@marcom/ac-jetpack-lib/core/BaseComponent");
var q=z.prototype;var t=A("@marcom/ac-browser-prefixed");var s=A("@marcom/ac-raf-emitter/draw");
var C=A("@marcom/ac-useragent");var r=0.0174532925;var v={ELEMENT_ENGAGEMENT:"data-engaged",ANIMATION:"data-engaged-animation"};
var u={TRANSLATION:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",OPACITY:"cubic-bezier(0.42,0,0.58,1)"};
function p(d,a,h,b,f,c,j){this.name="EngagedElementAnimationComponent_"+j;z.call(this,d,a,h,b,f,c,j);
this.timeToEngage=100;this.inViewThreshold=0.5;var g=Array.prototype.slice.call(this.element.querySelectorAll("["+v.ANIMATION+"]"));
if(this.element.hasAttribute(v.ANIMATION)){g.push(this.element)}this.elementAnimationItems=[];
g.forEach(function(k){var l=new y(k);this.elementAnimationItems.push(l)}.bind(this));
if(this.element.hasAttribute(v.ELEMENT_ENGAGEMENT)){try{this._overwriteElementEngagementProps()
}catch(i){console.error("EngagedElementAnimationComponent::_overwriteElementEngagementProps bad JSON in data-attribute!",i)
}}this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:this.timeToEngage,inViewThreshold:this.inViewThreshold})
}var w=p.prototype=Object.create(z.prototype);p.prototype.constructor=p;w.setupEvents=function(){q.setupEvents.call(this);
this._onElementEngaged=this._onElementEngaged.bind(this);this.trackedElement.once("engaged",this._onElementEngaged)
};w._overwriteElementEngagementProps=function(){var a=this.element.getAttribute(v.ELEMENT_ENGAGEMENT);
var b=JSON.parse(a);this.timeToEngage=b.timeToEngage===undefined?this.timeToEngage:parseFloat(b.timeToEngage);
this.inViewThreshold=b.inViewThreshold===undefined?this.inViewThreshold:parseFloat(b.inViewThreshold)
};w._onElementEngaged=function(a){this.elementAnimationItems.forEach(function(b){b._animateIn()
})};function y(b){this.element=b;this.delay=0;this.tDuration=-1;this.oDuration=-1;
this.offsetY=0;this.offsetX=0;this._shouldFadeIn=true;this._shouldTranslateIn=false;
try{this._overwriteAnimationProps()}catch(a){console.error("ElementAnimationItem::_overwriteAnimationProps bad JSON in data-attribute!",a)
}this._onTransitionComplete=this._onTransitionComplete.bind(this);s(this._createInitialElementStyles.bind(this))
}var w=y.prototype;w._overwriteAnimationProps=function(){var c=this.element.getAttribute(v.ANIMATION);
var d=JSON.parse(c);this.tDuration=d.tDuration===undefined?this.tDuration:parseFloat(d.tDuration);
this.oDuration=d.oDuration===undefined?this.oDuration:parseFloat(d.oDuration);this.delay=d.delay===undefined?this.delay:parseFloat(d.delay);
this._shouldFadeIn=this.oDuration!==-1;var b=d.angle===undefined?0:parseFloat(d.angle)*r;
var a=d.distance===undefined?0:parseFloat(d.distance);this._shouldTranslateIn=b!==0||a!==0;
if(a!==0){this.offsetX=Math.round(Math.cos(b)*a);this.offsetY=Math.round(Math.sin(b)*a)
}};w._createInitialElementStyles=function(){if(this._shouldTranslateIn){this.element.style[t.transform]="translate("+this.offsetX+"px, "+this.offsetY+"px)"
}if(!this._shouldFadeIn){this.element.style.opacity=1}var a="";if(this._shouldTranslateIn){var b=t.transform+" "+this.tDuration+"s "+this.delay+"s "+u.TRANSLATION;
a+=b}if(this._shouldFadeIn){a=a===""?a:a+", ";a+="opacity "+this.oDuration+"s "+this.delay+"s "+u.OPACITY
}s(function(){var c=this.element;c.style[t.transition]=a}.bind(this))};w._animateIn=function(){s(function(){this.element.addEventListener("transitionend",this._onTransitionComplete);
this.element.style.willChange="transform, opacity";s(function(){this.element.style[t.transform]="none";
this.element.style.opacity=1}.bind(this))}.bind(this))};w._onTransitionComplete=function(a){if(a.target!==this.element){return
}if(!C.browser.edge){this.element.removeEventListener("transitionend",this._onTransitionComplete)
}s(function(){this.element.style.willChange=""}.bind(this))};B.exports=p},{"@marcom/ac-browser-prefixed":1,"@marcom/ac-jetpack-lib/core/BaseComponent":421,"@marcom/ac-raf-emitter/draw":633,"@marcom/ac-useragent":717}],729:[function(t,v,r){var s=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();var p=function u(g,c,d){if(g===null){g=Function.prototype
}var b=Object.getOwnPropertyDescriptor(g,c);if(b===undefined){var f=Object.getPrototypeOf(g);
if(f===null){return undefined}else{return u(f,c,d)}}else{if("value" in b){return b.value
}else{var a=b.get;if(a===undefined){return undefined}return a.call(d)}}};function q(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")
}}function n(a,b){if(!a){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return b&&(typeof b==="object"||typeof b==="function")?b:a}function m(b,a){if(typeof a!=="function"&&a!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof a)
}b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:false,writable:true,configurable:true}});
if(a){Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a}}var w=t("@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent");
var o=function(f){m(b,f);function b(){q(this,b);var j=n(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));
j.willEngageClass="will-engage";j.didEngageClass="did-engage";j.transitionCompleteClass="transition-complete";
j.transitionEndTimeout=null;j.didTrigger=false;j.willEngage=false;j.didEngage=false;
j.transitionComplete=false;j.timeoutDuration=1000;j.onTransitionEnd=j.onTransitionEnd.bind(j);
j.onTransitionEndTimeout=j.onTransitionEndTimeout.bind(j);j.trackedElement.element.addEventListener("transitionend",j.onTransitionEnd);
return j}s(b,[{key:"onTransitionEnd",value:function h(){if(this.transitionEndTimeout){clearTimeout(this.transitionEndTimeout)
}this.transitionEndTimeout=setTimeout(this.onTransitionEndTimeout,this.timeoutDuration)
}},{key:"onTransitionEndTimeout",value:function d(){this.transitionComplete=true;
this.requestDOMChange()}},{key:"onScroll",value:function i(){if(this.trackedElement.pixelsInView>10){this.triggerAnimation()
}}},{key:"triggerAnimation",value:function c(){if(!this.didTrigger){this.didTrigger=true;
p(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"_onElementEngaged",this).apply(this,arguments);
this.willEngage=true;this.requestDOMChange()}}},{key:"onDOMWrite",value:function g(){p(b.prototype.__proto__||Object.getPrototypeOf(b.prototype),"onDOMWrite",this).apply(this,arguments);
if(this.willEngage){this.trackedElement.element.classList.add(this.willEngageClass);
this.willEngage=false;this.didEngage=true;this.requestDOMChange()}if(this.didEngage){this.trackedElement.element.classList.add(this.didEngageClass)
}if(this.transitionComplete){this.trackedElement.element.classList.add(this.transitionCompleteClass)
}}},{key:"_onElementEngaged",value:function a(){this.triggerAnimation()}}]);return b
}(w);v.exports=o},{"@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent":335}],730:[function(A,C,w){var y=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();function v(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function r(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function p(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var x=A("@marcom/ac-jetpack-lib/core/BaseComponent");
var s=A("@marcom/ac-gallery").SlideGallery;var z=s.extend({_getConditionalPosX:function u(a){return this.getItemIndex(this.getCurrentItem())===0?0:a
},_snapToPosition:function t(a){return s.prototype._snapToPosition.call(this,this._getConditionalPosX(a))
},_slideToPosition:function q(a,b,c){return s.prototype._slideToPosition.call(this,this._getConditionalPosX(a),b,c)
}});var B=function(c){p(b,c);function b(f,k,j,g,i,l,h){v(this,b);var d=r(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));
d.componentElement=k;d.galleryOptions=JSON.parse(k.getAttribute("data-gallery-large"));
d.gallery=new z(d.componentElement,d.galleryOptions);return d}y(b,[{key:"onBreakpoint",value:function a(){if(this.gallery){this.gallery.destroy();
this.gallery=null}this.gallery=new z(this.componentElement,this.galleryOptions)
}}]);return b}(x);C.exports=B},{"@marcom/ac-gallery":314,"@marcom/ac-jetpack-lib/core/BaseComponent":421}],731:[function(u,w,s){var t=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();var q=function v(g,c,d){if(g===null){g=Function.prototype
}var b=Object.getOwnPropertyDescriptor(g,c);if(b===undefined){var f=Object.getPrototypeOf(g);
if(f===null){return undefined}else{return v(f,c,d)}}else{if("value" in b){return b.value
}else{var a=b.get;if(a===undefined){return undefined}return a.call(d)}}};function r(a,b){if(!(a instanceof b)){throw new TypeError("Cannot call a class as a function")
}}function p(a,b){if(!a){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return b&&(typeof b==="object"||typeof b==="function")?b:a}function n(b,a){if(typeof a!=="function"&&a!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof a)
}b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:false,writable:true,configurable:true}});
if(a){Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a}}var o=u("./ElementTrackerComponent");
var m=function(g){n(a,g);function a(){r(this,a);var h=p(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments));
h.galleryVisibleClass="gallery-visible";return h}t(a,[{key:"onDOMWrite",value:function d(){if(this.componentVisible){this.componentElement.classList.add(this.galleryVisibleClass)
}else{this.componentElement.classList.remove(this.galleryVisibleClass)}}},{key:"onComponentWillAppear",value:function c(){q(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"onComponentWillAppear",this).apply(this,arguments);
this.requestDOMChange()}},{key:"onComponentDidAppear",value:function b(){q(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"onComponentDidAppear",this).apply(this,arguments);
this.requestDOMChange()}},{key:"onComponentWillDisappear",value:function f(){q(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"onComponentWillDisappear",this).apply(this,arguments);
this.requestDOMChange()}}]);return a}(o);w.exports=m},{"./ElementTrackerComponent":727}],732:[function(y,z,v){var x=y("@marcom/ac-jetpack-lib/core/BaseComponent");
var o=document.querySelector("#ac-localnav");var A=o.clientHeight;var p="";var w=null;
var r=0;var t={THEME:"data-localnav-theme"};var s=["xlarge","large","medium","small"];
function q(h,b,j,c,i,d,k){this.name="LocalnavThemeChangerComponent_"+r++;x.call(this,h,b,j,c,i,d,k);
this.themes={};var l=this.element.getAttribute(t.THEME);var g=l;for(var a=0;a<s.length;
a++){var f=this.element.getAttribute(t.THEME)||this.element.getAttribute(t.THEME+"-"+s[a]);
if(f!==null){l=this.themes[s[a]]=f}if(f===null){l=this.themes[s[a]]=g}g=l}this.theme=this.getTheme();
this.top=this.element.getBoundingClientRect().top+i;this.bottom=this.element.getBoundingClientRect().bottom+i
}var u=q.prototype=Object.create(x.prototype);q.prototype.constructor=q;u.onSectionWillAppear=function(b,a){this.onScroll(null,b,a)
};u.onSectionWillDisappear=function(b,a){this.onScroll(null,b,a)};u.getTheme=function(a){return this.themes[this.section.cachedBreakpoint]
};u.onScroll=function(b,c,a){var d=c+A;if(this.top<d&&this.bottom>d){if(w&&w.theme!==this.theme){w.removeTheme()
}w=this;this.setTheme()}else{if(w===this){this.removeTheme();w=null}}};u.onResizeImmediate=function(b,c,a){this.theme=this.getTheme();
this.top=this.element.getBoundingClientRect().top+c;this.bottom=this.element.getBoundingClientRect().bottom+c;
A=o.clientHeight};u.setTheme=function(){if(p===this.theme){return}if(p!==""){o.classList.remove(p)
}o.classList.add(this.theme);p=this.theme};u.removeTheme=function(){if(p!==this.theme){return
}o.classList.remove(p);p=""};z.exports=q},{"@marcom/ac-jetpack-lib/core/BaseComponent":421}],733:[function(q,p,j){function m(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function o(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function l(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var n=q("@marcom/ac-progressive-image-loader/ProgressiveImageComponent");
var k=function(a){l(b,a);function b(){m(this,b);var c=o(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments));
if(!c._loadOptions){c._loadOptions={}}c._loadOptions.imageAnimate=false;return c
}return b}(n);p.exports=k},{"@marcom/ac-progressive-image-loader/ProgressiveImageComponent":617}],734:[function(y,A,v){var w=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();var t=function z(f,b,c){if(f===null){f=Function.prototype
}var a=Object.getOwnPropertyDescriptor(f,b);if(a===undefined){var d=Object.getPrototypeOf(f);
if(d===null){return undefined}else{return z(d,b,c)}}else{if("value" in a){return a.value
}else{var g=a.get;if(g===undefined){return undefined}return g.call(c)}}};function u(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function s(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function r(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var x=y("@marcom/ac-jetpack-lib/core/BaseComponent");
var q=y("@marcom/ac-dom-metrics/getPercentInViewport");var p=y("@marcom/ac-dom-metrics/getPixelsInViewport");
var o=function(d){r(f,d);function f(){u(this,f);var g=s(this,(f.__proto__||Object.getPrototypeOf(f)).apply(this,arguments));
g.pixelThreshold=100;g.percentThreshold=0.1;g.staggered=false;g.delay=g.element.getAttribute("data-fade-delay");
g.autoPlay=g.element.getAttribute("data-auto-play");g.element.classList.add("will-stagger");
setTimeout(function(){g.element.classList.add("stagger-transition")},g.delay);if(g.autoPlay||g.isAboveFold()){g.stagger()
}return g}w(f,[{key:"onScroll",value:function c(h,i,g){t(f.prototype.__proto__||Object.getPrototypeOf(f.prototype),"onScroll",this).apply(this,arguments);
if(this.isAboveFold()&&!this.staggered){this.stagger()}}},{key:"isAboveFold",value:function a(){var i=false;
var h=q(this.element,false);var g=this.percentThreshold;if(h>g){i=true}return i
}},{key:"stagger",value:function b(){var g=this;this.staggered=true;setTimeout(function(){g.element.classList.add("staggered")
},this.delay)}}]);return f}(x);A.exports=o},{"@marcom/ac-dom-metrics/getPercentInViewport":15,"@marcom/ac-dom-metrics/getPixelsInViewport":16,"@marcom/ac-jetpack-lib/core/BaseComponent":421}],735:[function(A,C,x){var z=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();function w(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function t(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function r(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var y=A("@marcom/ac-jetpack-lib/core/BaseComponent");
var B=A("@marcom/ac-dom-traversal/querySelector");var E=A("@marcom/ac-element-engagement").ElementEngagement;
var u=A("@marcom/ac-jetpack-lib/utils/Page");var s=A("@marcom/ac-keyboard");var G=A("@marcom/ac-dom-traversal");
var D=A("@marcom/ac-dom-events/removeEventListener");var F=A("@marcom/ac-useragent");
var v=function(b){r(h,b);function h(){w(this,h);var p=t(this,(h.__proto__||Object.getPrototypeOf(h)).apply(this,arguments));
var q=new E();p.galleryObject=p.section.getAllComponentsOfType("GalleryComponent");
p.engagementComponent=p.section.getAllComponentsOfType("EngagedElementComponent");
p.sectionGallery=p.galleryObject[0].galleryObject;p.galleryElm=p.galleryObject[0].element;
p.captionElm=p.galleryObject[1].element;p.galleryDashNavs=p.sectionGallery._el.querySelectorAll(".dashnav-item");
p.newGalleryDashNavs=Array.prototype.slice.call(p.galleryDashNavs);p.galleryPaddleNavs=p.sectionGallery._el.querySelectorAll(".paddlenav-arrow");
p.galleryRotationLimit=p.sectionGallery._items.length;p.galleryRotation=0;p.hasInteractionOccured=false;
p.paddleNavs=p.section.element.querySelectorAll(".paddlenav-arrow");p.newPaddleNavs=Array.prototype.slice.call(p.paddleNavs);
p.newDashNavs=Array.prototype.slice.call(p.galleryDashNavs);p.DISABLED_GALLERY=p.galleryElm.classList.contains("disable-galleries");
p.captionGallery;p.currentItem;p.canPlay=true;p.eventsBound=false;p.touchEventsAdded=false;
var I={timeToEngage:100,inViewThreshold:0.2};p.trackedElement=p.section.elementEngagement.addElement(p.galleryElm,{timeToEngage:I.timeToEngage,inViewThreshold:I.inViewThreshold});
if(!p.DISABLED_GALLERY){p.setUpEvents();p.swipeEventStopAnimation()}else{p.sectionGallery.disableTouch();
p.trackedElement.once("engaged",function(){p.galleryElm.classList.add("engaged")
})}return p}z(h,[{key:"selectDashNav",value:function o(){var p=this.sectionGallery.getCurrentItem()._el.id;
var q=B("#"+p+"-trigger");q.classList.add("current")}},{key:"setUpEvents",value:function m(){var p=this;
var q=this.galleryObject[0].galleryObject;this.selectDashNav();this.trackedElement.once("engaged",function(){if(!p.eventsBound){p.autoPlay();
p.keyboardEvents()}});q.on("update",function(){var M=p.galleryObject[0].element.getAttribute("data-caption-gallery");
var N=B("."+M);var O=p.galleryObject[0].galleryObject;var L=p.sectionGallery.getCurrentItem()._el.id;
p.captionGallery.show(L);if(p.galleryObject.length>1){p.captionGallery=p.galleryObject[1].galleryObject
}p.newGalleryDashNavs.forEach(function(H){H.classList.remove("current")});p.galleryRotation++;
if(p.galleryRotation==p.galleryRotationLimit&&!p.hasInteractionOccured){p.sectionGallery.stopAutoPlay();
p.captionGallery.stopAutoPlay();p.newGalleryDashNavs.forEach(function(H){H.classList.add("is-interacting");
H.classList.remove("current")})}p.selectDashNav()})}},{key:"autoUpdateCaptions",value:function c(){var I=this.galleryObject[0].galleryObject;
if(this.galleryObject.length>1){this.captionGallery=this.galleryObject[1].galleryObject
}var p=this.galleryObject[0].element.getAttribute("data-caption-gallery");var q=B("."+p);
this.bindEvents();this.stopDashNavs()}},{key:"hasInteracted",value:function g(){this.hasInteractionOccured=true
}},{key:"swipeEventStopAnimation",value:function i(){var p=this;var q=this.galleryObject[0].galleryObject;
q._el.addEventListener("touchmove",function(I){if(!p.touchEventsAdded){p.touchEventGallery(I);
p.touchEventsAdded=true}})}},{key:"touchEventGallery",value:function n(){var p=this;
var q=this.galleryObject[0].galleryObject;q.on("update",function(K){if(K.interactionEvent&&K.interactionEvent.type=="touchmove"){var J=p.sectionGallery.getCurrentItem()._el.id;
p.captionGallery.show(J);p.sectionGallery.stopAutoPlay();p.captionGallery.stopAutoPlay();
p.newGalleryDashNavs.forEach(function(H){H.classList.add("is-interacting");H.classList.remove("current")
});p.selectDashNav();return false}})}},{key:"onResizeDebounced",value:function a(){if(p){clearTimeout(p)
}var p=setTimeout(function(){window.requestAnimationFrame(function(){u.deepRefreshAllElementMetrics()
})},1300)}},{key:"autoPlay",value:function j(){var p={cancelOnInteraction:false};
this.autoUpdateCaptions();this.galleryElm.classList.add("engaged");this.captionElm.classList.add("engaged");
if(this.galleryElm.classList.contains("played")){}else{this.sectionGallery.startAutoPlay(5.5,p)
}this.galleryElm.classList.add("played");if(!(F.browser.edge||F.browser.ie)){D(this.sectionGallery._componentsContainer,"touchend",this.sectionGallery.stopAutoPlay,true);
D(this.sectionGallery._componentsContainer,"touchstart",this.sectionGallery.stopAutoPlay,true);
D(this.sectionGallery._componentsContainer,"touchmove",this.sectionGallery.stopAutoPlay,true)
}}},{key:"bindEvents",value:function l(){var p=this;this.newPaddleNavs.forEach(function(q){q.addEventListener("click",function(I){p.stopDashNavTransitions(p.newDashNavs);
p.hasInteracted();if(I.target.classList.contains("paddlenav-arrow-next")){p.sectionGallery.showNext({interactionEvent:I})
}else{p.sectionGallery.showPrevious({interactionEvent:I})}p.sectionGallery.stopAutoPlay();
p.captionGallery.stopAutoPlay()})})}},{key:"stopDashNavs",value:function d(){var q=this;
var p=document.querySelectorAll(".dashnav-item");this.newDashNavs.forEach(function(I){I.addEventListener("click",function(H){H.preventDefault();
H.stopPropagation();I.classList.add("is-interacting");I.classList.remove("current");
var M=H.currentTarget;M.classList.add("current");var L=M.getAttribute("data-ac-gallery-slide");
q.hasInteracted();q.sectionGallery.show(L,{interactionEvent:H});q.captionGallery.show(L);
q.sectionGallery.stopAutoPlay();q.captionGallery.stopAutoPlay()})})}},{key:"stopDashNavTransitions",value:function k(p){p.forEach(function(q){q.classList.add("is-interacting")
})}},{key:"keyboardEvents",value:function f(){var p=this;s.onDown(37,function(q){if(p.sectionGallery.isInView()){p.newGalleryDashNavs.forEach(function(I){I.classList.add("is-interacting");
I.classList.remove("current")});p.captionGallery.showPrevious();p.sectionGallery.showPrevious({interactionEvent:q});
p.sectionGallery.stopAutoPlay();p.captionGallery.stopAutoPlay();p.hasInteracted()
}});s.onDown(39,function(q){if(p.sectionGallery.isInView()){p.newGalleryDashNavs.forEach(function(I){I.classList.add("is-interacting");
I.classList.remove("current")});p.captionGallery.showNext();p.sectionGallery.showNext({interactionEvent:q});
p.sectionGallery.stopAutoPlay();p.captionGallery.stopAutoPlay();p.hasInteracted()
}});this.eventsBound=true}}]);return h}(y);C.exports=v},{"@marcom/ac-dom-events/removeEventListener":11,"@marcom/ac-dom-traversal":33,"@marcom/ac-dom-traversal/querySelector":49,"@marcom/ac-element-engagement":174,"@marcom/ac-jetpack-lib/core/BaseComponent":421,"@marcom/ac-jetpack-lib/utils/Page":429,"@marcom/ac-keyboard":437,"@marcom/ac-useragent":717}],736:[function(z,A,v){var y=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();function u(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function r(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function o(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var x=z("@marcom/ac-jetpack-lib/core/BaseComponent");
var t=z("./videoComponent/videoSectionBase.component");var p=z("./ElementTrackerComponent");
var s=z("@marcom/ac-dom-metrics/getPercentInViewport");var q=z("@marcom/ac-raf-emitter/draw");
var w=function(h){o(k,h);function k(n,C){u(this,k);var m=r(this,(k.__proto__||Object.getPrototypeOf(k)).apply(this,arguments));
m.componentElement=document.querySelector(".video-overview-multitasking");m.mediaObject=m.getSharedComponentOfType("MediaObjectComponent");
m.video=m.mediaObject._media;m.mutitaskVideoTrigger=document.querySelector(".multitasking-video-container");
m.replayButton=document.querySelector(".multitasking-replay-button");m.hasResized=false;
m.hasEnded=false;m.trackedElement=m.section.elementEngagement.addElement(m.mutitaskVideoTrigger,{timeToEngage:0,inViewThreshold:0.3});
m.setUpEvents();return m}y(k,[{key:"getSharedComponentOfType",value:function g(n){for(var m in this.section.getAllComponentsOfType(n)){if(this.section.getAllComponentsOfType(n)[m].element===this.componentElement){return this.section.getAllComponentsOfType(n)[m]
}}}},{key:"onReplay",value:function l(m){var n=this;if(!this.hasResized&&this.video.getEnhanced()){m.preventDefault();
this.video.reset();q(function(){n.replayButton.classList.remove("show-replay")});
setTimeout(function(){n.video.play()},500);setTimeout(function(){n.onEnded()},9000)
}}},{key:"setUpEvents",value:function a(){var m=this;this.trackedElement.once("engaged",function(){return m.onEngaged()
});this.video.on("enhanced",function(){return m.onEnhanced()});this.video.once("play",function(){m.onPlay()
});this.video.on("ended",function(){return m.onEnded()});this.replayButton.addEventListener("click",function(n){return m.onReplay(n)
})}},{key:"onOrientationChange",value:function b(){var m=this;setTimeout(function(){if(!m.video.getCurrentFrame()>0.1&&s(m.mutitaskVideoTrigger)===0){m.video.pause();
setTimeout(function(){m.onEnded();m.video.goToPercent(1)},500)}else{if(!m.hasEnded){m.onPlay()
}}},1000)}},{key:"onBreakpoint",value:function c(){this.hasResized=true;this.mediaObject=this.getSharedComponentOfType("MediaObjectComponent");
this.video=this.mediaObject._media;this.mutitaskVideoTrigger=document.querySelector(".multitasking-video-container");
this.replayButton=document.querySelector(".multitasking-replay-button");this.replayButton=document.querySelector(".multitasking-replay-button");
this.replayButton.classList.add("large-hide")}},{key:"onPlay",value:function d(){var m=this;
q(function(){m.replayButton.classList.remove("show-replay")})}},{key:"onEngaged",value:function f(){if(!this.hasResized&&this.video.getEnhanced()){this.video.play()
}}},{key:"onEnhanced",value:function j(){if(this.replayButton.classList.contains("large-hide")&&!this.hasResized){this.replayButton.classList.remove("large-hide")
}}},{key:"onEnded",value:function i(){var m=this;this.hasEnded=true;q(function(){m.replayButton.classList.add("show-replay")
})}}]);return k}(t);A.exports=w},{"./ElementTrackerComponent":727,"./videoComponent/videoSectionBase.component":739,"@marcom/ac-dom-metrics/getPercentInViewport":15,"@marcom/ac-jetpack-lib/core/BaseComponent":421,"@marcom/ac-raf-emitter/draw":633}],737:[function(p,n,q){var o=function(){function a(f,c){for(var d=0;
d<c.length;d++){var b=c[d];b.enumerable=b.enumerable||false;b.configurable=true;
if("value" in b){b.writable=true}Object.defineProperty(f,b.key,b)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();function l(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}var j=p("@marcom/ac-dom-traversal/querySelector");var k=p("@marcom/ac-raf-emitter/draw");
var m=function(){function a(){l(this,a);this.loaderEventBound;this.variablesSet=false
}o(a,[{key:"handleBlur",value:function h(u){var r=void 0;if(!this.variablesSet){this.startFrame;
r=this.mediaObject[0].element.getAttribute("data-startframe-map");this.startFrame=j("."+r);
this.variablesSet=true}if(this.video.getReady()){if(u){this.componentElement.classList.remove("blur");
this.loaderElm.classList.remove("hide-loader");if(this.isAndroid()&&!(this.viewPort.viewport==="small")){this.startFrame.classList.remove("blur")
}}else{this.componentElement.classList.add("blur");this.loaderElm.classList.add("hide-loader");
if(this.isAndroid()&&!(this.viewPort.viewport==="small")){this.startFrame.classList.add("blur")
}}}else{if(u){this.startFrame.classList.remove("blur");this.componentElement.classList.remove("blur");
this.componentElement.style.opacity="1.0";this.loaderElm.classList.remove("hide-loader");
if(this.isAndroid()&&!(this.viewPort.viewport==="small")){this.startFrame.classList.remove("blur")
}}else{this.startFrame.classList.add("blur");this.loaderElm.classList.add("hide-loader");
if(this.isAndroid()&&!(this.viewPort.viewport==="small")){this.startFrame.classList.add("blur")
}}}}},{key:"blurFallback",value:function f(r){if(r){this.componentElement.classList.remove("blur");
this.loaderElm.classList.remove("hide-loader")}else{this.componentElement.classList.add("blur");
this.loaderElm.classList.add("hide-loader")}}},{key:"onLoaded",value:function d(){var r=this;
this.loaderElm.classList.add("fade-circle");this.loaderElm.classList.add("play-state-ready");
this.loaderElm.classList.add("hide-load");setTimeout(function(){r.loaderElm.classList.add("remove-keyframe")
},930)}},{key:"onLoading",value:function i(){this.loaderElm.classList.add("play-state-loading")
}},{key:"createLoader",value:function g(){var w=this;var v=void 0;var r=void 0;
this.loaderElm.classList.add("load-loader");this.video.on("error",function(){w.loaderElm.classList.add("large-hide")
});if(this.video.getLoaded()||this.mediaElement.readyState>0){this.loaderIcons.onLoaded.call(this)
}this.video.once("timeupdate",function(){w.loaderIcons.onLoading.call(w);if(r===undefined||isNaN(r)){w.loaderIcons.onLoaded.call(w)
}});if(!this.loaderEventBound){this.loaderEventBound=true;this.loaderEvents()}}},{key:"loaderEvents",value:function c(){var r=this;
this.loaderElm.addEventListener("click",function(){if(r.video.getCurrentPercent()>0.01){r.userClick=true
}if(!r.paused){r.playingLoader()}else{r.pausedLoader()}});this.loaderEventBound=true
}},{key:"pausedLoader",value:function b(){var r=this;this.video.play();this.paused=false;
this.manualPause=false;k(function(){r.loaderElm.classList.remove("play");r.loaderElm.classList.add("pause")
})}},{key:"playingLoader",value:function s(){var r=this;this.paused=true;this.hasPaused=true;
this.manualPause=true;k(function(){r.loaderElm.classList.add("is-interacting");
r.loaderElm.classList.remove("pause");r.loaderElm.classList.add("play")});setTimeout(function(){r.video.mediaElement.pause();
r.video.pause()},100)}}]);return a}();n.exports=m},{"@marcom/ac-dom-traversal/querySelector":49,"@marcom/ac-raf-emitter/draw":633}],738:[function(C,G,z){var A=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();var x=function F(f,b,c){if(f===null){f=Function.prototype
}var a=Object.getOwnPropertyDescriptor(f,b);if(a===undefined){var d=Object.getPrototypeOf(f);
if(d===null){return undefined}else{return F(d,b,c)}}else{if("value" in a){return a.value
}else{var g=a.get;if(g===undefined){return undefined}return g.call(c)}}};function y(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function v(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function s(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var w=C("./videoSectionBase.component");
var t=C("@marcom/ac-dom-metrics/getScrollY");var D=C("@marcom/ac-dom-traversal/querySelector");
var B=C("@marcom/ac-dom-traversal/children");var E=C("./loaderComponent.component");
var I=C("@marcom/ac-raf-emitter");var u=C("@marcom/ac-raf-emitter/draw");var H=function(q){s(d,q);
function d(L,J){y(this,d);var K=v(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments));
K.componentElement=J;K.mediaObject=K.section.getAllComponentsOfType("MediaObjectComponent");
K.sectionVideo=K.mediaObject[0].element;K.video=K.mediaObject[0]._media;K.mediaElement=K.video.mediaElement;
K.parentElement=K.section.element.querySelector(".video-container");K.textTrigger=K.section.element.querySelector(".video-text");
K.loaderElm=B(K.sectionVideo,".loader-container")[0];K.viewPort=x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"getViewport",K).call(K);
K.videoOutOfView;K.hasPaused=false;K.belowVideo=false;K.keepFrame=false;K.endedOnce=false;
K.userClick=false;K.endOfVideo=true;K.shouldReplay=false;K.paused=false;K.fallback=false;
K.trackingPosition=0;K.show;K.travelAmount=200;K.tracking=true;K.visible=false;
K.shouldRefreshMetrics=false;K.hasBlurred=false;K.initializeElementTracker();if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"noStickySupport",K).call(K)){K.travelAmount=0;
K.trackingPosition=100}K.mediaElement.setAttribute("data-object-fit","");K.loaderIcons=new E();
K.mediaElement.autoplay=false;K.beforeVideoView;K.playingView=false;K.pausedView;
K.setUpEvents();return K}A(d,[{key:"initialLoad",value:function ad(){var J=this;
if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"isAboveFold",this).call(this,this.videoTracker,this.getScrollPosition())<0){if(!this.loaderEventBound){this.loaderIcons.createLoader.call(this)
}this.belowVideo=true;this.show=true;this.setPlayState();this.video.on("play",function(){setTimeout(function(){J.loaderIcons.handleBlur.call(J,true)
},300)})}else{setTimeout(function(){if(!J.loaderEventBound){J.loaderIcons.createLoader.call(J)
}J.handlePauseView()},500)}this.requestDOMChange()}},{key:"initializeElementTracker",value:function m(){if(this.videoTracker){this.videoTracker.destroy()
}this.videoTracker=this.section.elementEngagement.addElement(this.parentElement,{timeToEngage:0,inViewThreshold:0})
}},{key:"getScrollPosition",value:function k(){if(typeof this.scrollPosition==="number"){return this.scrollPosition
}return t()}},{key:"onScroll",value:function n(K,L,J){x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"onScroll",this).apply(this,arguments);
this.scrollPosition=L;this.requestDOMChange()}},{key:"onDOMRead",value:function ab(J){if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"isAboveFold",this).call(this,this.videoTracker,this.getScrollPosition())<=this.trackingPosition||this.viewPort.viewport==="small"){this.trackDistance();
this.tracking=false;if(this.trackDistance()){this.show=true}else{if(!this.belowVideo){this.setPlayState()
}}}else{this.tracking=true;this.setPlayState()}if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"percentInViewport",this).call(this,this.videoTracker)>=0.245){this.beforeplayingView=true
}else{this.beforeplayingView=false}}},{key:"onDOMWrite",value:function aa(){this.hideShowMedia();
if(this.show&&!this.videoOutOfView){if(!this.fallback){this.handlePlayView(false);
this.shouldReplay=false}else{if((!this.hasPlayed||!this.hasPaused)&&this.isPausedView&&!this.playingView){this.hasPlayed=true;
this.handlePlayView(true);if(!this.loaderEventBound){this.loaderIcons.createLoader.call(this)
}}else{if(this.video.getPaused()&&!this.playingView){this.handlePlayView(false)
}else{if(this.video.getPaused()&&!this.videoOutOfView&&this.hasEnded&&this.shouldReplay&&!this.userCLick){this.handlePlayView(false);
this.shouldReplay=false;if(this.video.getCurrentFrame()>0.1){this.timeFinished=1
}}}}}}else{this.handlePauseView()}this.checkBeforePlayingView()}},{key:"checkBeforePlayingView",value:function c(){if(this.beforeplayingView&&!this.playingView){this.enterBeforeplayingViewMode()
}else{this.exitTextView()}}},{key:"hideShowMedia",value:function b(){if(this.videoTracker.percentInView>0){this.videoOutOfView=false;
this.sectionVideo.classList.add("media-visible")}else{this.videoOutOfView=true;
this.sectionVideo.classList.remove("media-visible");if(this.hasPlayed){this.shouldReplay=true
}}if(this.videoTracker.percentInView<0.072&&this.videoTracker.percentInView>0){this.videoOutOfView=true
}else{this.videoOutOfView=false}}},{key:"setUpEvents",value:function l(){var J=this;
this.startAttr=this.mediaObject[0].element.getAttribute("data-startframe-map");
this.startFrame=D("."+this.startAttr);if(this.isAndroid()){this.fallback=true}if(!this.isAndroid()&&!(this.viewPort.viewport==="small")||this.fallback){this.requestDOMChange()
}else{this.keepFrame=true}if(this.video&&!(this.viewPort.viewport==="small")){this.initialLoad();
setTimeout(function(){J.video.pause()},350)}else{this.video.on("enhanced",function(){J.video.play()
});this.smallPositionCheck();u(function(){return J.loaderIcons.createLoader.call(J)
})}this.videoEvents()}},{key:"trackDistance",value:function W(){var J=this.getScrollPosition();
if(this.tracking){this.beginAmount=J}if(this.viewPort.viewport==="small"){return true
}return J-this.beginAmount>this.travelAmount}},{key:"smallPositionCheck",value:function X(){var J=this;
if(this.videoTracker.percentInView>0.1){this.videoOutOfView=false;u(function(){J.sectionVideo.classList.add("media-visible")
});if(!this.manualPause){this.handlePlayView()}}else{if(this.videoTracker.percentInView<=0){this.videoOutOfView=true;
u(function(){J.sectionVideo.classList.remove("media-visible")});this.video.pause()
}}}},{key:"setPlayState",value:function r(){if(this.video){if(this.playingView){this.show=false;
this.playingView=false}}}},{key:"handlePlayView",value:function Z(J){var K=this;
if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"useFallback",this).call(this)||x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"noIE",this).call(this)||!this.fallback){this.loaderIcons.blurFallback.call(this,true)
}else{this.loaderIcons.handleBlur.call(this,true)}this.textTrigger.classList.add("video-text-fade-out");
this.textTrigger.classList.remove("video-text-fade-in");this.playingView=true;this.beforeVideoView=false;
this.isPausedView=false;if(J||!this.hasPaused){if(!this.video.getReady()){this.video.on("enhanced",function(){if(K.show&&K.playingView&&!(K.viewPort.viewport==="small")){K.playVideo(2200)
}});this.playVideo(2000)}else{this.playVideo(1250)}}else{if(!this.paused&&this.playingView&&!this.videoOutOfView){this.playVideo(700)
}else{if(this.shouldReplay&&!this.userClick){this.playVideo(700);u(function(){K.loaderIcons.pausedLoader.call(K)
})}}}}},{key:"playVideo",value:function ac(J){var K=this;if(!this.fallback){u(function(){if(!K.keepFrame){K.startFrame.classList.add("fade-frame");
setTimeout(function(){u(function(){K.startFrame.classList.add("large-hide")})},1100)
}});setTimeout(function(){if(K.playingView&&!K.videoOutOfView&&K.video.getEnhanced()){K.video.play();
K.video.mediaElement.play()}},J)}}},{key:"onOrientationChange",value:function V(){var J=this;
if(!this.video.getPaused()){this.requestDOMChange()}if(this.viewPort.viewport==="small"){setTimeout(function(){J.smallPositionCheck()
},400)}}},{key:"enterBeforeplayingViewMode",value:function j(){this.beforeVideoView=true;
if(this.hasEnded&&!(this.viewPort.viewport==="small")){this.shouldReplay=true}this.textTrigger.classList.add("video-text-fade-in")
}},{key:"handlePauseView",value:function U(){this.mediaObject[0]._media.pause();
this.isPausedView=true;this.hasBlurred=true;this.playingView=false;if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"useFallback",this).call(this)){this.loaderIcons.blurFallback.call(this,false)
}else{this.loaderIcons.handleBlur.call(this,false)}this.textTrigger.classList.add("video-text-fade-in");
this.textTrigger.classList.remove("video-text-fade-out")}},{key:"exitTextView",value:function Y(){if(this.isPausedView){this.textTrigger.classList.remove("video-text-fade-in")
}}},{key:"onBreakpoint",value:function ae(){this.sectionVideo=this.mediaObject[0].element;
this.video=this.mediaObject[0]._media;this.mediaElement=this.video.mediaElement;
this.loaderElm=B(this.sectionVideo,".loader-container")[0];this.tracking=false;
this.keepFrame=true;this.startAttr=this.mediaObject[0].element.getAttribute("data-startframe-map");
this.startFrame=D("."+this.startAttr);document.documentElement.classList.add("fallback");
this.startFrame.classList.remove("fade-frame");this.startFrame.classList.remove("large-hide");
this.video.pause();this.fallback=true;this.shouldReplay=false;this.videoEvents();
this.requestDOMChange()}},{key:"videoEvents",value:function f(){var J=this;this.video.on("play",function(){J.playingView=true;
if((J.paused||J.beforeVideoView||J.videoOutOfView)&&J.userClick&&!x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"polyfillForVideo",J).call(J)){J.video.pause()
}if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"polyfillForVideo",J).call(J)){J.video.model.attributes.looping=true;
J.video.options.looping=true}u(function(){J.loaderIcons.pausedLoader.call(J)})});
this.video.on("pause",function(){if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"polyfillForVideo",J).call(J)&&J.timeFinished>2){u(function(){J.loaderIcons.playingLoader.call(J)
})}});if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"polyfillForVideo",this).call(this)||x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"noIE",this).call(this)){if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"polyfillForVideo",this).call(this)){this.video.model.attributes.looping=true;
this.video.options.looping=true}this.video.on("timeupdate",function(){if(J.video.getCurrentTime()>=J.video.getDuration()){setTimeout(function(){J.videoOnEnd(true)
},100)}})}else{if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"oldSafariDesktop",this).call(this)){this.video.on("timeupdate",function(){if(J.video.getCurrentTime()>=J.video.getDuration()){if(J.endOfVideo){J.videoOnEnd(true);
J.endOfVideo=false;setTimeout(function(){J.endOfVideo=true},1000)}}})}else{this.video.on("ended",function(){J.videoOnEnd(true)
})}}this.video.on("enhanced",function(){J.startFrame.classList.add("fade-frame")
})}},{key:"videoOnEnd",value:function g(K){var J=this;this.hasEnded=true;this.playingView=false;
this.video.setCurrentTime(0);if(!x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"oldSafariDesktop",this).call(this)){this.video.reset()
}if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"videoEnds",this).call(this)){u(function(){J.loaderIcons.playingLoader.call(J)
});if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"polyfillForVideo",this).call(this)){this.video.goToPercent(0);
this.video.goToFrame(0);this.video.setCurrentTime(0)}setTimeout(function(){J.video.reset()
},100);if(!this.userClick){this.timeFinished=1}this.video.mediaElement.pause();
this.video.pause()}else{if(!this.fallback){this.video.mediaElement.play();this.video.play();
if(x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"oldSafariDesktop",this).call(this)){setTimeout(function(){J.video.mediaElement.play()
},300)}}}}},{key:"loaderEvents",value:function p(){this.loaderIcons.loaderEvents.call(this)
}},{key:"onSectionWillDisappear",value:function i(){var J=this;u(function(){J.sectionVideo.classList.remove("media-visible")
})}},{key:"pausedLoader",value:function a(){var J=this;u(function(){J.loaderIcons.pausedLoader.call(J)
})}},{key:"playingLoader",value:function o(){var J=this;u(function(){J.loaderIcons.playingLoader.call(J)
})}},{key:"isAndroid",value:function h(){if(this.fallback){return true}else{return x(d.prototype.__proto__||Object.getPrototypeOf(d.prototype),"isAndroid",this).call(this)
}}}]);return d}(w);G.exports=H},{"./loaderComponent.component":737,"./videoSectionBase.component":739,"@marcom/ac-dom-metrics/getScrollY":18,"@marcom/ac-dom-traversal/children":36,"@marcom/ac-dom-traversal/querySelector":49,"@marcom/ac-raf-emitter":630,"@marcom/ac-raf-emitter/draw":633}],739:[function(F,H,C){var E=function(){function a(b,d){for(var f=0;
f<d.length;f++){var c=d[f];c.enumerable=c.enumerable||false;c.configurable=true;
if("value" in c){c.writable=true}Object.defineProperty(b,c.key,c)}}return function(b,d,c){if(d){a(b.prototype,d)
}if(c){a(b,c)}return b}}();function B(b,a){if(!(b instanceof a)){throw new TypeError("Cannot call a class as a function")
}}function x(b,a){if(!b){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return a&&(typeof a==="object"||typeof a==="function")?a:b}function u(a,b){if(typeof b!=="function"&&b!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof b)
}a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:false,writable:true,configurable:true}});
if(b){Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b}}var D=F("@marcom/ac-jetpack-lib/core/BaseComponent");
var t=F("@marcom/ac-dom-metrics/getPercentInViewport");var s=F("@marcom/ac-dom-metrics/getPixelsInViewport");
var y=F("@marcom/ac-dom-metrics/getViewportPosition");var w=F("@marcom/ac-dom-metrics/isInViewport");
var G=F("@marcom/ac-viewport-emitter");var z=F("@marcom/ac-jetpack-lib/utils/Page");
var I=F("@marcom/ac-useragent");var v=F("@marcom/ac-feature");var A=function(k){u(d,k);
function d(){B(this,d);var q=x(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments));
q.canPlay=true;q.textVisibility;q.isPlaying=false;q.isPaused=false;q.manualPause=false;
q.timeFinished=1;q.hasPlayed=false;return q}E(d,[{key:"videoEnds",value:function n(){this.timeFinished++;
if(this.timeFinished>2){this.timeFinished=1;return true}else{return false}}},{key:"isAboveFold",value:function a(q,r){r=r||0;
return q.top-r}},{key:"percentInViewport",value:function i(q){return q.percentInView
}},{key:"inViewport",value:function j(q){var r=w(q,true,0.9);return r}},{key:"getViewport",value:function l(){return G
}},{key:"removeMedia",value:function b(){this.video.mediaElement.parentNode.removeChild(this.video.mediaElement)
}},{key:"useFallback",value:function g(){return I.browser.firefox||I.browser.safari&&I.browser.version.major<9||I.os.ios&&I.browser.safari&&I.browser.version.major===9
}},{key:"polyfillForVideo",value:function h(){return I.os.ios&&I.browser.safari&&I.browser.version.major===9
}},{key:"oldSafariDesktop",value:function m(){return I.browser.safari&&I.browser.version.major===9
}},{key:"noIE",value:function p(){return I.browser.ie}},{key:"noStickySupport",value:function o(){return I.browser.edge||I.browser.ie||I.browser.safari&&I.browser.version.major<=9.5
}},{key:"isAndroid",value:function c(){return I.os.android}},{key:"isTablet",value:function f(){return v.isTablet
}}]);return d}(D);H.exports=A},{"@marcom/ac-dom-metrics/getPercentInViewport":15,"@marcom/ac-dom-metrics/getPixelsInViewport":16,"@marcom/ac-dom-metrics/getViewportPosition":19,"@marcom/ac-dom-metrics/isInViewport":20,"@marcom/ac-feature":190,"@marcom/ac-jetpack-lib/core/BaseComponent":421,"@marcom/ac-jetpack-lib/utils/Page":429,"@marcom/ac-useragent":717,"@marcom/ac-viewport-emitter":725}],740:[function(S,Z,O){var I=S("@marcom/ac-useragent");
var J=S("@marcom/ac-jetpack-lib/core/BasePage");var P=I.browser.ie;var U=S("./components/fadeComponent.component");
var R=S("@marcom/ac-jetpack-fuel/components/gallery/GalleryComponent");var V=S("@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent");
var E=S("./components/EngagedElementAnimationComponent");var M=S("@marcom/ac-jetpack-fuel/components/scroll-animation/ScrollAnimationComponent");
var Y=S("./components/LocalnavThemeChangerComponent");var D=S("@marcom/ac-jetpack-fuel/components/media-object/MediaObjectComponent");
var C=S("./components/videoComponent/videoComponent.component");var G=S("./components/multitaskVideo.component");
var ab=S("./components/galleryAnimation.component");var F=S("./components/ProgressiveImageComponentNoAnimation");
var aa=S("./components/GalleryVisibilityComponent");var H=S("./components/GalleryPositionedComponent");
var N=S("./components/EngagedTransitionComponent");var W=S("@marcom/ac-jetpack-lib/utils/Page");
var X=S("@marcom/ac-viewport-emitter");var ac=S("@marcom/ac-jetpack-lib/model/ComponentMap");
var L=S("@marcom/ac-jetpack-lib/model/PageMap");Object.assign(ac,{FadeComponent:U,EngagedElementAnimationComponent:E,ScrollAnimationComponent:M,LocalnavThemeChangerComponent:Y,MediaObjectComponent:D,VideoComponent:C,EngagedElementComponent:V,EngagedTransitionComponent:N,GalleryComponent:R,GalleryAnimationComponent:ab,ProgressiveImageComponent:F,GalleryVisibilityComponent:aa,GalleryPositionedComponent:H,MultitaskComponent:G});
S("objectFitPolyfill/src/objectFitPolyfill.basic");ac.MediaObjectComponent.URI_PATTERN={flow:"/105/media/{{locale}}/ipad-pro/2017/168d8c51_6a7f_4a64_b192_f177401ea25c/{{name}}/flows/{{viewport}}",video:"/105/media/{{locale}}/ipad-pro/2017/43c41767_0723_4506_889f_0180acc13482/overview/{{name}}/{{viewport}}",split_file:"/105/media/{{locale}}/ipad-pro/2017/168d8c51_6a7f_4a64_b192_f177401ea25c/{{name}}/split_files/{{viewport}}"};
var Q=document.documentElement.scrollHeight;var T=0;function K(){var a=document.documentElement.scrollHeight;
if(Q!==a){T=0}else{T++;if(T>=30){new J();return}}Q=a;window.requestAnimationFrame(K)
}window.requestAnimationFrame(K);S("@marcom/ac-films/AutoFilms")();clearTimeout(window.progressiveTimeout)
},{"./components/EngagedElementAnimationComponent":728,"./components/EngagedTransitionComponent":729,"./components/GalleryPositionedComponent":730,"./components/GalleryVisibilityComponent":731,"./components/LocalnavThemeChangerComponent":732,"./components/ProgressiveImageComponentNoAnimation":733,"./components/fadeComponent.component":734,"./components/galleryAnimation.component":735,"./components/multitaskVideo.component":736,"./components/videoComponent/videoComponent.component":738,"@marcom/ac-films/AutoFilms":undefined,"@marcom/ac-jetpack-fuel/components/engaged-element/EngagedElementComponent":335,"@marcom/ac-jetpack-fuel/components/gallery/GalleryComponent":336,"@marcom/ac-jetpack-fuel/components/media-object/MediaObjectComponent":337,"@marcom/ac-jetpack-fuel/components/scroll-animation/ScrollAnimationComponent":338,"@marcom/ac-jetpack-lib/core/BasePage":422,"@marcom/ac-jetpack-lib/model/ComponentMap":424,"@marcom/ac-jetpack-lib/model/PageMap":427,"@marcom/ac-jetpack-lib/utils/Page":429,"@marcom/ac-useragent":717,"@marcom/ac-viewport-emitter":725,"objectFitPolyfill/src/objectFitPolyfill.basic":726}]},{},[740]);