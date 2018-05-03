require=(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}var b=new Error("Cannot find module '"+a+"'");
throw b.code="MODULE_NOT_FOUND",b}var f=j[a]={exports:{}};h[a][0].call(f.exports,function(g){var n=h[a][1][g];
return m(n?n:g)},f,f.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":2}],2:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}if(arguments.length===1){this._events[c]=null;
delete this._events[c];return}var b=this._events[c].indexOf(a);if(b===-1){return
}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return}for(var b=this._events[c].length-1;
b>=0;b--){if(a!==undefined){this._events[c][b](a)}else{this._events[c][b]()}}};
j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],3:[function(d,g,f){g.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],4:[function(n,m,i){var j=n("./touchAvailable").original;var k=n("./helpers/globals");
var l=n("@marcom/ac-function/once");function o(){var a=k.getWindow();return(!j()&&!a.orientation)
}m.exports=l(o);m.exports.original=o},{"./helpers/globals":3,"./touchAvailable":7,"@marcom/ac-function/once":8}],5:[function(m,l,o){var n=m("./isDesktop").original;
var j=m("./isTablet").original;var k=m("@marcom/ac-function/once");function i(){return(!n()&&!j())
}l.exports=k(i);l.exports.original=i},{"./isDesktop":4,"./isTablet":6,"@marcom/ac-function/once":8}],6:[function(o,n,q){var p=o("./isDesktop").original;
var l=o("./helpers/globals");var m=o("@marcom/ac-function/once");var j=600;function k(){var a=l.getWindow();
var b=a.screen.width;if(a.orientation&&a.screen.height<b){b=a.screen.height}return(!p()&&b>=j)
}n.exports=m(k);n.exports.original=k},{"./helpers/globals":3,"./isDesktop":4,"@marcom/ac-function/once":8}],7:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=j.getDocument();
var b=j.getNavigator();return !!(("ontouchstart" in a)||(a.DocumentTouch&&c instanceof a.DocumentTouch)||(b.maxTouchPoints>0)||(b.msMaxTouchPoints>0))
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":3,"@marcom/ac-function/once":8}],8:[function(f,i,g){i.exports=function h(a){var b;
return function(){if(typeof b==="undefined"){b=a.apply(this,arguments)}return b
}}},{}],9:[function(d,g,f){(function(bb){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
;
"use strict";var cv=d("base64-js");var bp=d("ieee754");var bq=d("isarray");f.Buffer=cx;
f.SlowBuffer=ck;f.INSPECT_MAX_BYTES=50;cx.TYPED_ARRAY_SUPPORT=bb.TYPED_ARRAY_SUPPORT!==undefined?bb.TYPED_ARRAY_SUPPORT:cr();
f.kMaxLength=bO();function cr(){try{var h=new Uint8Array(1);h.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42
}};return h.foo()===42&&typeof h.subarray==="function"&&h.subarray(1,1).byteLength===0
}catch(i){return false}}function bO(){return cx.TYPED_ARRAY_SUPPORT?2147483647:1073741823
}function bz(i,h){if(bO()<h){throw new RangeError("Invalid typed array length")
}if(cx.TYPED_ARRAY_SUPPORT){i=new Uint8Array(h);i.__proto__=cx.prototype}else{if(i===null){i=new cx(h)
}i.length=h}return i}function cx(h,j,i){if(!cx.TYPED_ARRAY_SUPPORT&&!(this instanceof cx)){return new cx(h,j,i)
}if(typeof h==="number"){if(typeof j==="string"){throw new Error("If encoding is specified then the first argument must be a string")
}return b9(this,h)}return cc(this,h,j,i)}cx.poolSize=8192;cx._augment=function(h){h.__proto__=cx.prototype;
return h};function cc(j,i,h,k){if(typeof i==="number"){throw new TypeError('"value" argument must not be a number')
}if(typeof ArrayBuffer!=="undefined"&&i instanceof ArrayBuffer){return bZ(j,i,h,k)
}if(typeof i==="string"){return bo(j,i,h)}return b7(j,i)}cx.from=function(i,h,j){return cc(null,i,h,j)
};if(cx.TYPED_ARRAY_SUPPORT){cx.prototype.__proto__=Uint8Array.prototype;cx.__proto__=Uint8Array;
if(typeof Symbol!=="undefined"&&Symbol.species&&cx[Symbol.species]===cx){Object.defineProperty(cx,Symbol.species,{value:null,configurable:true})
}}function bC(h){if(typeof h!=="number"){throw new TypeError('"size" argument must be a number')
}else{if(h<0){throw new RangeError('"size" argument must not be negative')}}}function b3(j,h,i,k){bC(h);
if(h<=0){return bz(j,h)}if(i!==undefined){return typeof k==="string"?bz(j,h).fill(i,k):bz(j,h).fill(i)
}return bz(j,h)}cx.alloc=function(h,i,j){return b3(null,h,i,j)};function b9(i,j){bC(j);
i=bz(i,j<0?0:cm(j)|0);if(!cx.TYPED_ARRAY_SUPPORT){for(var h=0;h<j;++h){i[h]=0}}return i
}cx.allocUnsafe=function(h){return b9(null,h)};cx.allocUnsafeSlow=function(h){return b9(null,h)
};function bo(j,h,k){if(typeof k!=="string"||k===""){k="utf8"}if(!cx.isEncoding(k)){throw new TypeError('"encoding" must be a valid string encoding')
}var l=cE(h,k)|0;j=bz(j,l);var i=j.write(h,k);if(i!==l){j=j.slice(0,i)}return j
}function bD(j,i){var k=i.length<0?0:cm(i.length)|0;j=bz(j,k);for(var h=0;h<k;h+=1){j[h]=i[h]&255
}return j}function bZ(j,i,h,k){i.byteLength;if(h<0||i.byteLength<h){throw new RangeError("'offset' is out of bounds")
}if(i.byteLength<h+(k||0)){throw new RangeError("'length' is out of bounds")}if(h===undefined&&k===undefined){i=new Uint8Array(i)
}else{if(k===undefined){i=new Uint8Array(i,h)}else{i=new Uint8Array(i,h,k)}}if(cx.TYPED_ARRAY_SUPPORT){j=i;
j.__proto__=cx.prototype}else{j=bD(j,i)}return j}function b7(j,i){if(cx.isBuffer(i)){var h=cm(i.length)|0;
j=bz(j,h);if(j.length===0){return j}i.copy(j,0,0,h);return j}if(i){if((typeof ArrayBuffer!=="undefined"&&i.buffer instanceof ArrayBuffer)||"length" in i){if(typeof i.length!=="number"||bv(i.length)){return bz(j,0)
}return bD(j,i)}if(i.type==="Buffer"&&bq(i.data)){return bD(j,i.data)}}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
}function cm(h){if(h>=bO()){throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+bO().toString(16)+" bytes")
}return h|0}function ck(h){if(+h!=h){h=0}return cx.alloc(+h)}cx.isBuffer=function a0(h){return !!(h!=null&&h._isBuffer)
};cx.compare=function cK(k,l){if(!cx.isBuffer(k)||!cx.isBuffer(l)){throw new TypeError("Arguments must be Buffers")
}if(k===l){return 0}var m=k.length;var i=l.length;for(var j=0,h=Math.min(m,i);j<h;
++j){if(k[j]!==l[j]){m=k[j];i=l[j];break}}if(m<i){return -1}if(i<m){return 1}return 0
};cx.isEncoding=function bs(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;
default:return false}};cx.concat=function cN(j,k){if(!bq(j)){throw new TypeError('"list" argument must be an Array of Buffers')
}if(j.length===0){return cx.alloc(0)}var l;if(k===undefined){k=0;for(l=0;l<j.length;
++l){k+=j[l].length}}var h=cx.allocUnsafe(k);var i=0;for(l=0;l<j.length;++l){var m=j[l];
if(!cx.isBuffer(m)){throw new TypeError('"list" argument must be an Array of Buffers')
}m.copy(h,i);i+=m.length}return h};function cE(k,j){if(cx.isBuffer(k)){return k.length
}if(typeof ArrayBuffer!=="undefined"&&typeof ArrayBuffer.isView==="function"&&(ArrayBuffer.isView(k)||k instanceof ArrayBuffer)){return k.byteLength
}if(typeof k!=="string"){k=""+k}var h=k.length;if(h===0){return 0}var i=false;for(;
;){switch(j){case"ascii":case"latin1":case"binary":return h;case"utf8":case"utf-8":case undefined:return ci(k).length;
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h*2;case"hex":return h>>>1;
case"base64":return b6(k).length;default:if(i){return ci(k).length}j=(""+j).toLowerCase();
i=true}}}cx.byteLength=cE;function bA(k,i,h){var j=false;if(i===undefined||i<0){i=0
}if(i>this.length){return""}if(h===undefined||h>this.length){h=this.length}if(h<=0){return""
}h>>>=0;i>>>=0;if(h<=i){return""}if(!k){k="utf8"}while(true){switch(k){case"hex":return ca(this,i,h);
case"utf8":case"utf-8":return cl(this,i,h);case"ascii":return bG(this,i,h);case"latin1":case"binary":return b0(this,i,h);
case"base64":return ct(this,i,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b1(this,i,h);
default:if(j){throw new TypeError("Unknown encoding: "+k)}k=(k+"").toLowerCase();
j=true}}}cx.prototype._isBuffer=true;function cL(k,i,h){var j=k[i];k[i]=k[h];k[h]=j
}cx.prototype.swap16=function bJ(){var h=this.length;if(h%2!==0){throw new RangeError("Buffer size must be a multiple of 16-bits")
}for(var i=0;i<h;i+=2){cL(this,i,i+1)}return this};cx.prototype.swap32=function cH(){var h=this.length;
if(h%4!==0){throw new RangeError("Buffer size must be a multiple of 32-bits")}for(var i=0;
i<h;i+=4){cL(this,i,i+3);cL(this,i+1,i+2)}return this};cx.prototype.swap64=function cd(){var h=this.length;
if(h%8!==0){throw new RangeError("Buffer size must be a multiple of 64-bits")}for(var i=0;
i<h;i+=8){cL(this,i,i+7);cL(this,i+1,i+6);cL(this,i+2,i+5);cL(this,i+3,i+4)}return this
};cx.prototype.toString=function bK(){var h=this.length|0;if(h===0){return""}if(arguments.length===0){return cl(this,0,h)
}return bA.apply(this,arguments)};cx.prototype.equals=function bH(h){if(!cx.isBuffer(h)){throw new TypeError("Argument must be a Buffer")
}if(this===h){return true}return cx.compare(this,h)===0};cx.prototype.inspect=function ch(){var i="";
var h=f.INSPECT_MAX_BYTES;if(this.length>0){i=this.toString("hex",0,h).match(/.{2}/g).join(" ");
if(this.length>h){i+=" ... "}}return"<Buffer "+i+">"};cx.prototype.compare=function cK(k,r,o,j,q){if(!cx.isBuffer(k)){throw new TypeError("Argument must be a Buffer")
}if(r===undefined){r=0}if(o===undefined){o=k?k.length:0}if(j===undefined){j=0}if(q===undefined){q=this.length
}if(r<0||o>k.length||j<0||q>this.length){throw new RangeError("out of range index")
}if(j>=q&&r>=o){return 0}if(j>=q){return -1}if(r>=o){return 1}r>>>=0;o>>>=0;j>>>=0;
q>>>=0;if(this===k){return 0}var h=q-j;var i=o-r;var l=Math.min(h,i);var p=this.slice(j,q);
var m=k.slice(r,o);for(var n=0;n<l;++n){if(p[n]!==m[n]){h=p[n];i=m[n];break}}if(h<i){return -1
}if(i<h){return 1}return 0};function bM(h,i,k,j,l){if(h.length===0){return -1}if(typeof k==="string"){j=k;
k=0}else{if(k>2147483647){k=2147483647}else{if(k<-2147483648){k=-2147483648}}}k=+k;
if(isNaN(k)){k=l?0:(h.length-1)}if(k<0){k=h.length+k}if(k>=h.length){if(l){return -1
}else{k=h.length-1}}else{if(k<0){if(l){k=0}else{return -1}}}if(typeof i==="string"){i=cx.from(i,j)
}if(cx.isBuffer(i)){if(i.length===0){return -1}return be(h,i,k,j,l)}else{if(typeof i==="number"){i=i&255;
if(cx.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf==="function"){if(l){return Uint8Array.prototype.indexOf.call(h,i,k)
}else{return Uint8Array.prototype.lastIndexOf.call(h,i,k)}}return be(h,[i],k,j,l)
}}throw new TypeError("val must be string, number or Buffer")}function be(m,r,q,s,p){var j=1;
var i=m.length;var l=r.length;if(s!==undefined){s=String(s).toLowerCase();if(s==="ucs2"||s==="ucs-2"||s==="utf16le"||s==="utf-16le"){if(m.length<2||r.length<2){return -1
}j=2;i/=2;l/=2;q/=2}}function t(v,u){if(j===1){return v[u]}else{return v.readUInt16BE(u*j)
}}var n;if(p){var k=-1;for(n=q;n<i;n++){if(t(m,n)===t(r,k===-1?0:n-k)){if(k===-1){k=n
}if(n-k+1===l){return k*j}}else{if(k!==-1){n-=n-k}k=-1}}}else{if(q+l>i){q=i-l}for(n=q;
n>=0;n--){var h=true;for(var o=0;o<l;o++){if(t(m,n+o)!==t(r,o)){h=false;break}}if(h){return n
}}}return -1}cx.prototype.includes=function bF(i,h,j){return this.indexOf(i,h,j)!==-1
};cx.prototype.indexOf=function bl(i,h,j){return bM(this,i,h,j,true)};cx.prototype.lastIndexOf=function cp(i,h,j){return bM(this,i,h,j,false)
};function bf(n,o,i,j){i=Number(i)||0;var l=n.length-i;if(!j){j=l}else{j=Number(j);
if(j>l){j=l}}var k=o.length;if(k%2!==0){throw new TypeError("Invalid hex string")
}if(j>k/2){j=k/2}for(var m=0;m<j;++m){var h=parseInt(o.substr(m*2,2),16);if(isNaN(h)){return m
}n[i+m]=h}return m}function cf(k,h,i,j){return cg(ci(h,k.length-i),k,i,j)}function cJ(k,h,i,j){return cg(b5(h),k,i,j)
}function bS(k,h,i,j){return cJ(k,h,i,j)}function bu(k,h,i,j){return cg(b6(h),k,i,j)
}function a9(k,h,i,j){return cg(cF(h,k.length-i),k,i,j)}cx.prototype.write=function cO(h,j,k,l){if(j===undefined){l="utf8";
k=this.length;j=0}else{if(k===undefined&&typeof j==="string"){l=j;k=this.length;
j=0}else{if(isFinite(j)){j=j|0;if(isFinite(k)){k=k|0;if(l===undefined){l="utf8"
}}else{l=k;k=undefined}}else{throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
}}}var m=this.length-j;if(k===undefined||k>m){k=m}if((h.length>0&&(k<0||j<0))||j>this.length){throw new RangeError("Attempt to write outside buffer bounds")
}if(!l){l="utf8"}var i=false;for(;;){switch(l){case"hex":return bf(this,h,j,k);
case"utf8":case"utf-8":return cf(this,h,j,k);case"ascii":return cJ(this,h,j,k);
case"latin1":case"binary":return bS(this,h,j,k);case"base64":return bu(this,h,j,k);
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return a9(this,h,j,k);default:if(i){throw new TypeError("Unknown encoding: "+l)
}l=(""+l).toLowerCase();i=true}}};cx.prototype.toJSON=function bU(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}
};function ct(j,i,h){if(i===0&&h===j.length){return cv.fromByteArray(j)}else{return cv.fromByteArray(j.slice(i,h))
}}function cl(q,r,o){o=Math.min(q.length,o);var l=[];var n=r;while(n<o){var j=q[n];
var k=null;var h=(j>239)?4:(j>223)?3:(j>191)?2:1;if(n+h<=o){var i,s,m,p;switch(h){case 1:if(j<128){k=j
}break;case 2:i=q[n+1];if((i&192)===128){p=(j&31)<<6|(i&63);if(p>127){k=p}}break;
case 3:i=q[n+1];s=q[n+2];if((i&192)===128&&(s&192)===128){p=(j&15)<<12|(i&63)<<6|(s&63);
if(p>2047&&(p<55296||p>57343)){k=p}}break;case 4:i=q[n+1];s=q[n+2];m=q[n+3];if((i&192)===128&&(s&192)===128&&(m&192)===128){p=(j&15)<<18|(i&63)<<12|(s&63)<<6|(m&63);
if(p>65535&&p<1114112){k=p}}}}if(k===null){k=65533;h=1}else{if(k>65535){k-=65536;
l.push(k>>>10&1023|55296);k=56320|k&1023}}l.push(k);n+=h}return b8(l)}var bt=4096;
function b8(k){var h=k.length;if(h<=bt){return String.fromCharCode.apply(String,k)
}var i="";var j=0;while(j<h){i+=String.fromCharCode.apply(String,k.slice(j,j+=bt))
}return i}function bG(k,i,h){var l="";h=Math.min(k.length,h);for(var j=i;j<h;++j){l+=String.fromCharCode(k[j]&127)
}return l}function b0(k,i,h){var l="";h=Math.min(k.length,h);for(var j=i;j<h;++j){l+=String.fromCharCode(k[j])
}return l}function ca(k,i,m){var h=k.length;if(!i||i<0){i=0}if(!m||m<0||m>h){m=h
}var l="";for(var j=i;j<m;++j){l+=cB(k[j])}return l}function b1(l,i,m){var h=l.slice(i,m);
var j="";for(var k=0;k<h.length;k+=2){j+=String.fromCharCode(h[k]+h[k+1]*256)}return j
}cx.prototype.slice=function bY(i,m){var h=this.length;i=~~i;m=m===undefined?h:~~m;
if(i<0){i+=h;if(i<0){i=0}}else{if(i>h){i=h}}if(m<0){m+=h;if(m<0){m=0}}else{if(m>h){m=h
}}if(m<i){m=i}var j;if(cx.TYPED_ARRAY_SUPPORT){j=this.subarray(i,m);j.__proto__=cx.prototype
}else{var k=m-i;j=new cx(k,undefined);for(var l=0;l<k;++l){j[l]=this[l+i]}}return j
};function cG(i,h,j){if((i%1)!==0||i<0){throw new RangeError("offset is not uint")
}if(i+h>j){throw new RangeError("Trying to access beyond buffer length")}}cx.prototype.readUIntLE=function bm(i,h,k){i=i|0;
h=h|0;if(!k){cG(i,h,this.length)}var j=this[i];var l=1;var m=0;while(++m<h&&(l*=256)){j+=this[i+m]*l
}return j};cx.prototype.readUIntBE=function cA(i,h,k){i=i|0;h=h|0;if(!k){cG(i,h,this.length)
}var j=this[i+ --h];var l=1;while(h>0&&(l*=256)){j+=this[i+ --h]*l}return j};cx.prototype.readUInt8=function bj(i,h){if(!h){cG(i,1,this.length)
}return this[i]};cx.prototype.readUInt16LE=function bg(i,h){if(!h){cG(i,2,this.length)
}return this[i]|(this[i+1]<<8)};cx.prototype.readUInt16BE=function cq(i,h){if(!h){cG(i,2,this.length)
}return(this[i]<<8)|this[i+1]};cx.prototype.readUInt32LE=function bB(i,h){if(!h){cG(i,4,this.length)
}return((this[i])|(this[i+1]<<8)|(this[i+2]<<16))+(this[i+3]*16777216)};cx.prototype.readUInt32BE=function cI(i,h){if(!h){cG(i,4,this.length)
}return(this[i]*16777216)+((this[i+1]<<16)|(this[i+2]<<8)|this[i+3])};cx.prototype.readIntLE=function bW(i,h,k){i=i|0;
h=h|0;if(!k){cG(i,h,this.length)}var j=this[i];var l=1;var m=0;while(++m<h&&(l*=256)){j+=this[i+m]*l
}l*=128;if(j>=l){j-=Math.pow(2,8*h)}return j};cx.prototype.readIntBE=function bX(i,h,k){i=i|0;
h=h|0;if(!k){cG(i,h,this.length)}var m=h;var l=1;var j=this[i+ --m];while(m>0&&(l*=256)){j+=this[i+ --m]*l
}l*=128;if(j>=l){j-=Math.pow(2,8*h)}return j};cx.prototype.readInt8=function cn(i,h){if(!h){cG(i,1,this.length)
}if(!(this[i]&128)){return(this[i])}return((255-this[i]+1)*-1)};cx.prototype.readInt16LE=function cD(i,h){if(!h){cG(i,2,this.length)
}var j=this[i]|(this[i+1]<<8);return(j&32768)?j|4294901760:j};cx.prototype.readInt16BE=function bE(i,h){if(!h){cG(i,2,this.length)
}var j=this[i+1]|(this[i]<<8);return(j&32768)?j|4294901760:j};cx.prototype.readInt32LE=function a(i,h){if(!h){cG(i,4,this.length)
}return(this[i])|(this[i+1]<<8)|(this[i+2]<<16)|(this[i+3]<<24)};cx.prototype.readInt32BE=function cb(i,h){if(!h){cG(i,4,this.length)
}return(this[i]<<24)|(this[i+1]<<16)|(this[i+2]<<8)|(this[i+3])};cx.prototype.readFloatLE=function bk(i,h){if(!h){cG(i,4,this.length)
}return bp.read(this,i,true,23,4)};cx.prototype.readFloatBE=function cw(i,h){if(!h){cG(i,4,this.length)
}return bp.read(this,i,false,23,4)};cx.prototype.readDoubleLE=function br(i,h){if(!h){cG(i,8,this.length)
}return bp.read(this,i,true,52,8)};cx.prototype.readDoubleBE=function bT(i,h){if(!h){cG(i,8,this.length)
}return bp.read(this,i,false,52,8)};function co(m,j,i,k,h,l){if(!cx.isBuffer(m)){throw new TypeError('"buffer" argument must be a Buffer instance')
}if(j>h||j<l){throw new RangeError('"value" argument is out of bounds')}if(i+k>m.length){throw new RangeError("Index out of range")
}}cx.prototype.writeUIntLE=function bQ(l,i,n,j){l=+l;i=i|0;n=n|0;if(!j){var h=Math.pow(2,8*n)-1;
co(this,l,i,n,h,0)}var k=1;var m=0;this[i]=l&255;while(++m<n&&(k*=256)){this[i+m]=(l/k)&255
}return i+n};cx.prototype.writeUIntBE=function bL(l,i,n,j){l=+l;i=i|0;n=n|0;if(!j){var h=Math.pow(2,8*n)-1;
co(this,l,i,n,h,0)}var m=n-1;var k=1;this[i+m]=l&255;while(--m>=0&&(k*=256)){this[i+m]=(l/k)&255
}return i+n};cx.prototype.writeUInt8=function cz(h,i,j){h=+h;i=i|0;if(!j){co(this,h,i,1,255,0)
}if(!cx.TYPED_ARRAY_SUPPORT){h=Math.floor(h)}this[i]=(h&255);return i+1};function cC(m,k,i,j){if(k<0){k=65535+k+1
}for(var l=0,h=Math.min(m.length-i,2);l<h;++l){m[i+l]=(k&(255<<(8*(j?l:1-l))))>>>(j?l:1-l)*8
}}cx.prototype.writeUInt16LE=function ce(h,i,j){h=+h;i=i|0;if(!j){co(this,h,i,2,65535,0)
}if(cx.TYPED_ARRAY_SUPPORT){this[i]=(h&255);this[i+1]=(h>>>8)}else{cC(this,h,i,true)
}return i+2};cx.prototype.writeUInt16BE=function bn(h,i,j){h=+h;i=i|0;if(!j){co(this,h,i,2,65535,0)
}if(cx.TYPED_ARRAY_SUPPORT){this[i]=(h>>>8);this[i+1]=(h&255)}else{cC(this,h,i,false)
}return i+2};function bw(m,k,i,j){if(k<0){k=4294967295+k+1}for(var l=0,h=Math.min(m.length-i,4);
l<h;++l){m[i+l]=(k>>>(j?l:3-l)*8)&255}}cx.prototype.writeUInt32LE=function bR(h,i,j){h=+h;
i=i|0;if(!j){co(this,h,i,4,4294967295,0)}if(cx.TYPED_ARRAY_SUPPORT){this[i+3]=(h>>>24);
this[i+2]=(h>>>16);this[i+1]=(h>>>8);this[i]=(h&255)}else{bw(this,h,i,true)}return i+4
};cx.prototype.writeUInt32BE=function bP(h,i,j){h=+h;i=i|0;if(!j){co(this,h,i,4,4294967295,0)
}if(cx.TYPED_ARRAY_SUPPORT){this[i]=(h>>>24);this[i+1]=(h>>>16);this[i+2]=(h>>>8);
this[i+3]=(h&255)}else{bw(this,h,i,false)}return i+4};cx.prototype.writeIntLE=function ba(l,i,o,j){l=+l;
i=i|0;if(!j){var h=Math.pow(2,8*o-1);co(this,l,i,o,h-1,-h)}var n=0;var k=1;var m=0;
this[i]=l&255;while(++n<o&&(k*=256)){if(l<0&&m===0&&this[i+n-1]!==0){m=1}this[i+n]=((l/k)>>0)-m&255
}return i+o};cx.prototype.writeIntBE=function cj(l,i,o,j){l=+l;i=i|0;if(!j){var h=Math.pow(2,8*o-1);
co(this,l,i,o,h-1,-h)}var n=o-1;var k=1;var m=0;this[i+n]=l&255;while(--n>=0&&(k*=256)){if(l<0&&m===0&&this[i+n+1]!==0){m=1
}this[i+n]=((l/k)>>0)-m&255}return i+o};cx.prototype.writeInt8=function b4(h,i,j){h=+h;
i=i|0;if(!j){co(this,h,i,1,127,-128)}if(!cx.TYPED_ARRAY_SUPPORT){h=Math.floor(h)
}if(h<0){h=255+h+1}this[i]=(h&255);return i+1};cx.prototype.writeInt16LE=function b2(h,i,j){h=+h;
i=i|0;if(!j){co(this,h,i,2,32767,-32768)}if(cx.TYPED_ARRAY_SUPPORT){this[i]=(h&255);
this[i+1]=(h>>>8)}else{cC(this,h,i,true)}return i+2};cx.prototype.writeInt16BE=function b(h,i,j){h=+h;
i=i|0;if(!j){co(this,h,i,2,32767,-32768)}if(cx.TYPED_ARRAY_SUPPORT){this[i]=(h>>>8);
this[i+1]=(h&255)}else{cC(this,h,i,false)}return i+2};cx.prototype.writeInt32LE=function cu(h,i,j){h=+h;
i=i|0;if(!j){co(this,h,i,4,2147483647,-2147483648)}if(cx.TYPED_ARRAY_SUPPORT){this[i]=(h&255);
this[i+1]=(h>>>8);this[i+2]=(h>>>16);this[i+3]=(h>>>24)}else{bw(this,h,i,true)}return i+4
};cx.prototype.writeInt32BE=function bx(h,i,j){h=+h;i=i|0;if(!j){co(this,h,i,4,2147483647,-2147483648)
}if(h<0){h=4294967295+h+1}if(cx.TYPED_ARRAY_SUPPORT){this[i]=(h>>>24);this[i+1]=(h>>>16);
this[i+2]=(h>>>8);this[i+3]=(h&255)}else{bw(this,h,i,false)}return i+4};function by(m,j,i,k,h,l){if(i+k>m.length){throw new RangeError("Index out of range")
}if(i<0){throw new RangeError("Index out of range")}}function c(h,l,i,j,k){if(!k){by(h,l,i,4,3.4028234663852886e+38,-3.4028234663852886e+38)
}bp.write(h,l,i,j,23,4);return i+4}cx.prototype.writeFloatLE=function bi(h,i,j){return c(this,h,i,true,j)
};cx.prototype.writeFloatBE=function cs(h,i,j){return c(this,h,i,false,j)};function bc(h,l,i,j,k){if(!k){by(h,l,i,8,1.7976931348623157e+308,-1.7976931348623157e+308)
}bp.write(h,l,i,j,52,8);return i+8}cx.prototype.writeDoubleLE=function bI(h,i,j){return bc(this,h,i,true,j)
};cx.prototype.writeDoubleBE=function cM(h,i,j){return bc(this,h,i,false,j)};cx.prototype.copy=function bN(k,j,i,m){if(!i){i=0
}if(!m&&m!==0){m=this.length}if(j>=k.length){j=k.length}if(!j){j=0}if(m>0&&m<i){m=i
}if(m===i){return 0}if(k.length===0||this.length===0){return 0}if(j<0){throw new RangeError("targetStart out of bounds")
}if(i<0||i>=this.length){throw new RangeError("sourceStart out of bounds")}if(m<0){throw new RangeError("sourceEnd out of bounds")
}if(m>this.length){m=this.length}if(k.length-j<m-i){m=k.length-j+i}var h=m-i;var l;
if(this===k&&i<j&&j<m){for(l=h-1;l>=0;--l){k[l+j]=this[l+i]}}else{if(h<1000||!cx.TYPED_ARRAY_SUPPORT){for(l=0;
l<h;++l){k[l+j]=this[l+i]}}else{Uint8Array.prototype.set.call(k,this.subarray(i,i+h),j)
}}return h};cx.prototype.fill=function bV(j,i,n,k){if(typeof j==="string"){if(typeof i==="string"){k=i;
i=0;n=this.length}else{if(typeof n==="string"){k=n;n=this.length}}if(j.length===1){var l=j.charCodeAt(0);
if(l<256){j=l}}if(k!==undefined&&typeof k!=="string"){throw new TypeError("encoding must be a string")
}if(typeof k==="string"&&!cx.isEncoding(k)){throw new TypeError("Unknown encoding: "+k)
}}else{if(typeof j==="number"){j=j&255}}if(i<0||this.length<i||this.length<n){throw new RangeError("Out of range index")
}if(n<=i){return this}i=i>>>0;n=n===undefined?this.length:n>>>0;if(!j){j=0}var m;
if(typeof j==="number"){for(m=i;m<n;++m){this[m]=j}}else{var o=cx.isBuffer(j)?j:ci(new cx(j,k).toString());
var h=o.length;for(m=0;m<n-i;++m){this[m+i]=o[m%h]}}return this};var cy=/[^+\/0-9A-Za-z-_]/g;
function bh(h){h=bd(h).replace(cy,"");if(h.length<2){return""}while(h.length%4!==0){h=h+"="
}return h}function bd(h){if(h.trim){return h.trim()}return h.replace(/^\s+|\s+$/g,"")
}function cB(h){if(h<16){return"0"+h.toString(16)}return h.toString(16)}function ci(l,n){n=n||Infinity;
var m;var i=l.length;var j=null;var h=[];for(var k=0;k<i;++k){m=l.charCodeAt(k);
if(m>55295&&m<57344){if(!j){if(m>56319){if((n-=3)>-1){h.push(239,191,189)}continue
}else{if(k+1===i){if((n-=3)>-1){h.push(239,191,189)}continue}}j=m;continue}if(m<56320){if((n-=3)>-1){h.push(239,191,189)
}j=m;continue}m=(j-55296<<10|m-56320)+65536}else{if(j){if((n-=3)>-1){h.push(239,191,189)
}}}j=null;if(m<128){if((n-=1)<0){break}h.push(m)}else{if(m<2048){if((n-=2)<0){break
}h.push(m>>6|192,m&63|128)}else{if(m<65536){if((n-=3)<0){break}h.push(m>>12|224,m>>6&63|128,m&63|128)
}else{if(m<1114112){if((n-=4)<0){break}h.push(m>>18|240,m>>12&63|128,m>>6&63|128,m&63|128)
}else{throw new Error("Invalid code point")}}}}}return h}function b5(i){var h=[];
for(var j=0;j<i.length;++j){h.push(i.charCodeAt(j)&255)}return h}function cF(j,n){var i,m,k;
var h=[];for(var l=0;l<j.length;++l){if((n-=2)<0){break}i=j.charCodeAt(l);m=i>>8;
k=i%256;h.push(k);h.push(m)}return h}function b6(h){return cv.toByteArray(bh(h))
}function cg(j,i,k,l){for(var h=0;h<l;++h){if((h+k>=i.length)||(h>=j.length)){break
}i[h+k]=j[h]}return h}function bv(h){return h!==h}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"base64-js":10,ieee754:11,isarray:12}],10:[function(z,C,w){w.byteLength=i;w.toByteArray=y;
w.fromByteArray=E;var A=[];var t=[];var s=typeof Uint8Array!=="undefined"?Uint8Array:Array;
var D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var u=0,r=D.length;
u<r;++u){A[u]=D[u];t[D.charCodeAt(u)]=u}t["-".charCodeAt(0)]=62;t["_".charCodeAt(0)]=63;
function B(b){var a=b.length;if(a%4>0){throw new Error("Invalid string. Length must be a multiple of 4")
}return b[a-2]==="="?2:b[a-1]==="="?1:0}function i(a){return(a.length*3/4)-B(a)
}function y(a){var b,d,c,j,f;var g=a.length;j=B(a);f=new s((g*3/4)-j);d=j>0?g-4:g;
var h=0;for(b=0;b<d;b+=4){c=(t[a.charCodeAt(b)]<<18)|(t[a.charCodeAt(b+1)]<<12)|(t[a.charCodeAt(b+2)]<<6)|t[a.charCodeAt(b+3)];
f[h++]=(c>>16)&255;f[h++]=(c>>8)&255;f[h++]=c&255}if(j===2){c=(t[a.charCodeAt(b)]<<2)|(t[a.charCodeAt(b+1)]>>4);
f[h++]=c&255}else{if(j===1){c=(t[a.charCodeAt(b)]<<10)|(t[a.charCodeAt(b+1)]<<4)|(t[a.charCodeAt(b+2)]>>2);
f[h++]=(c>>8)&255;f[h++]=c&255}}return f}function v(a){return A[a>>18&63]+A[a>>12&63]+A[a>>6&63]+A[a&63]
}function x(f,a,g){var b;var d=[];for(var c=a;c<g;c+=3){b=(f[c]<<16)+(f[c+1]<<8)+(f[c+2]);
d.push(v(b))}return d.join("")}function E(d){var g;var c=d.length;var b=c%3;var k="";
var h=[];var a=16383;for(var f=0,j=c-b;f<j;f+=a){h.push(x(d,f,(f+a)>j?j:(f+a)))
}if(b===1){g=d[c-1];k+=A[g>>2];k+=A[(g<<4)&63];k+="=="}else{if(b===2){g=(d[c-2]<<8)+(d[c-1]);
k+=A[g>>10];k+=A[(g>>4)&63];k+=A[(g<<2)&63];k+="="}}h.push(k);return h.join("")
}},{}],11:[function(d,g,f){f.read=function(m,s,y,z,b){var a,w;var x=b*8-z-1;var c=(1<<x)-1;
var A=c>>1;var C=-7;var i=y?(b-1):0;var D=y?-1:1;var B=m[s+i];i+=D;a=B&((1<<(-C))-1);
B>>=(-C);C+=x;for(;C>0;a=a*256+m[s+i],i+=D,C-=8){}w=a&((1<<(-C))-1);a>>=(-C);C+=z;
for(;C>0;w=w*256+m[s+i],i+=D,C-=8){}if(a===0){a=1-A}else{if(a===c){return w?NaN:((B?-1:1)*Infinity)
}else{w=w+Math.pow(2,z);a=a-A}}return(B?-1:1)*w*Math.pow(2,a-z)};f.write=function(i,E,m,A,B,a){var H,y,F;
var z=a*8-B-1;var b=(1<<z)-1;var C=b>>1;var s=(B===23?Math.pow(2,-24)-Math.pow(2,-77):0);
var c=A?0:(a-1);var G=A?1:-1;var D=E<0||(E===0&&1/E<0)?1:0;E=Math.abs(E);if(isNaN(E)||E===Infinity){y=isNaN(E)?1:0;
H=b}else{H=Math.floor(Math.log(E)/Math.LN2);if(E*(F=Math.pow(2,-H))<1){H--;F*=2
}if(H+C>=1){E+=s/F}else{E+=s*Math.pow(2,1-C)}if(E*F>=2){H++;F/=2}if(H+C>=b){y=0;
H=b}else{if(H+C>=1){y=(E*F-1)*Math.pow(2,B);H=H+C}else{y=E*Math.pow(2,C-1)*Math.pow(2,B);
H=0}}}for(;B>=8;i[m+c]=y&255,c+=G,y/=256,B-=8){}H=(H<<B)|y;z+=B;for(;z>0;i[m+c]=H&255,c+=G,H/=256,z-=8){}i[m+c-G]|=D*128
}},{}],12:[function(f,i,g){var h={}.toString;i.exports=Array.isArray||function(a){return h.call(a)=="[object Array]"
}},{}],13:[function(o,n,p){var q=o("./helpers/TabManager");var j=o("./helpers/hideSiblingElements");
var k=o("./helpers/showSiblingElements");var l=function(a){this._tabbables=null;
this._firstTabbableElement=null;this._lastTabbableElement=null;this._relatedTarget=null;
this.el=a;this._handleOnFocus=this._handleOnFocus.bind(this)};var m=l.prototype;
m.start=function(){this.updateTabbables();j(this.el);if(this._firstTabbableElement){if(!this.el.contains(document.activeElement)){this._firstTabbableElement.focus()
}}else{console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element.")
}this._relatedTarget=document.activeElement;document.addEventListener("focus",this._handleOnFocus,true)
};m.stop=function(){k(this.el);document.removeEventListener("focus",this._handleOnFocus,true)
};m.updateTabbables=function(){this._tabbables=q.getTabbableElements(this.el);this._firstTabbableElement=this._tabbables[0];
this._lastTabbableElement=this._tabbables[this._tabbables.length-1]};m._handleOnFocus=function(a){if(!this.el.contains(a.target)){a.preventDefault();
this.updateTabbables();if(this._relatedTarget===this._lastTabbableElement||this._relatedTarget===null){this._firstTabbableElement.focus();
this._relatedTarget=this._firstTabbableElement;return}if(this._relatedTarget===this._firstTabbableElement){this._lastTabbableElement.focus();
this._relatedTarget=this._lastTabbableElement;return}}else{this._relatedTarget=a.target
}};m.destroy=function(){this.stop();this.el=null;this._tabbables=null;this._firstTabbableElement=null;
this._lastTabbableElement=null;this._relatedTarget=null;this._handleOnFocus=null
};n.exports=l},{"./helpers/TabManager":14,"./helpers/hideSiblingElements":16,"./helpers/showSiblingElements":20}],14:[function(m,l,h){var j=m("./../maps/focusableElement");
var i=function(){this.focusableSelectors=j.join(",")};var k=i.prototype;k.isFocusableElement=function(b,c,d){if(!c&&!this._isDisplayed(b,c)){return false
}var a=b.nodeName.toLowerCase();var f=j.indexOf(a)>-1;if(a==="a"){return true}if(f){return !b.disabled
}if(!b.contentEditable){return true}d=d||parseFloat(b.getAttribute("tabindex"));
return !isNaN(d)};k.isTabbableElement=function(a,b){if(!b&&!this._isDisplayed(a,b)){return false
}var c=a.getAttribute("tabindex");c=parseFloat(c);if(!isNaN(c)){return(c>=0)}else{return this.isFocusableElement(a,b,c)
}};k._isDisplayed=function(b){var a=b.getBoundingClientRect();return a.top>0&&a.left>0&&a.width>0&&a.height>0
};k.getTabbableElements=function(a,d){var f=a.querySelectorAll(this.focusableSelectors);
var b=f.length;var c=[];for(var g=0;g<b;g++){if(this.isTabbableElement(f[g],d)){c.push(f[g])
}}return c};k.getFocusableElements=function(b,d){var f=b.querySelectorAll(this.focusableSelectors);
var c=f.length;var g=[];for(var a=0;a<c;a++){if(this.isFocusableElement(f[a],d)){g.push(f[a])
}}return g};l.exports=new i()},{"./../maps/focusableElement":22}],15:[function(s,t,r){var u=s("./setAttributes");
var o=s("./../maps/ariaMap");var l=s("./TabManager");var q="data-original-";var n="tabindex";
var m=function(a,c){var b=a.getAttribute(q+c);if(!b){b=a.getAttribute(c)||"";u(a,q+c,b)
}};t.exports=function p(a){if(l.isFocusableElement(a)){m(a,n);u(a,n,-1)}else{var c=l.getTabbableElements(a,true);
var b=c.length;while(b--){m(c[b],n);u(c[b],n,-1)}}m(a,o.HIDDEN);u(a,o.HIDDEN,true)
}},{"./../maps/ariaMap":21,"./TabManager":14,"./setAttributes":18}],16:[function(k,i,g){var j=k("./hide");
i.exports=function h(a,b){b=b||document.body;var c=a;var d=a;while((c=c.previousElementSibling)){j(c)
}while((d=d.nextElementSibling)){j(d)}if(a.parentElement&&a.parentElement!==b){h(a.parentElement)
}}},{"./hide":15}],17:[function(g,j,h){var i=function(b,c){if(typeof c!=="string"){return
}var a=c.split(/\s+/);for(var d=0;d<a.length;d++){if(b.getAttribute(a[d])){b.removeAttribute(a[d])
}}};var k=function(b,c){if(b.length){for(var a=0;a<b.length;a++){i(b[a],c)}}else{i(b,c)
}};j.exports=k},{}],18:[function(j,i,k){var g=function(b,c,a){if(b&&b.nodeType===1){b.setAttribute(c,a)
}};var h=function(d,b,a){if(typeof a!=="string"){a=a.toString()}if(!d){return}if(d.length){for(var c=0;
c<d.length;c++){g(d[c],b,a)}}else{g(d,b,a)}};i.exports=h},{}],19:[function(s,t,r){var o=s("./removeAttributes");
var u=s("./setAttributes");var n=s("./../maps/ariaMap");var q="data-original-";
var l="tabindex";var p=function(a,c){var b=a.getAttribute(q+c);if(typeof b==="string"){if(b.length){u(a,c,b)
}else{o(a,c)}o(a,q+c)}};t.exports=function m(a){o(a,l+" "+n.HIDDEN);p(a,l);p(a,n.HIDDEN);
var c=a.querySelectorAll("["+q+l+"]");var b=c.length;while(b--){p(c[b],l)}}},{"./../maps/ariaMap":21,"./removeAttributes":17,"./setAttributes":18}],20:[function(j,i,k){var g=j("./show");
i.exports=function h(a,b){b=b||document.body;var c=a;var d=a;while((c=c.previousElementSibling)){g(c)
}while((d=d.nextElementSibling)){g(d)}if(a.parentElement&&a.parentElement!==b){h(a.parentElement)
}}},{"./show":19}],21:[function(d,g,f){g.exports={AUTOCOMPLETE:"aria-autocomplete",CHECKED:"aria-checked",DISABLED:"aria-disabled",EXPANDED:"aria-expanded",HASPOPUP:"aria-haspopup",HIDDEN:"aria-hidden",INVALID:"aria-invalid",LABEL:"aria-label",LEVEL:"aria-level",MULTILINE:"aria-multiline",MULTISELECTABLE:"aria-multiselectable",ORIENTATION:"aria-orientation",PRESSED:"aria-pressed",READONLY:"aria-readonly",REQUIRED:"aria-required",SELECTED:"aria-selected",SORT:"aria-sort",VALUEMAX:"aria-valuemax",VALUEMIN:"aria-valuemin",VALUENOW:"aria-valuenow",VALUETEXT:"aria-valuetext",ATOMIC:"aria-atomic",BUSY:"aria-busy",LIVE:"aria-live",RELEVANT:"aria-relevant",DROPEFFECT:"aria-dropeffect",GRABBED:"aria-grabbed",ACTIVEDESCENDANT:"aria-activedescendant",CONTROLS:"aria-controls",DESCRIBEDBY:"aria-describedby",FLOWTO:"aria-flowto",LABELLEDBY:"aria-labelledby",OWNS:"aria-owns",POSINSET:"aria-posinset",SETSIZE:"aria-setsize"}
},{}],22:[function(d,g,f){g.exports=["input","select","textarea","button","optgroup","option","menuitem","fieldset","object","a[href]","*[tabindex]","*[contenteditable]"]
},{}],23:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.slice");g("@marcom/ac-polyfills/Element/prototype.classList");
var j=g("./className/add");k.exports=function i(){var a=Array.prototype.slice.call(arguments);
var b=a.shift(a);var c;if(b.classList&&b.classList.add){b.classList.add.apply(b.classList,a);
return}for(c=0;c<a.length;c++){j(b,a[c])}}},{"./className/add":24,"@marcom/ac-polyfills/Array/prototype.slice":73,"@marcom/ac-polyfills/Element/prototype.classList":75}],24:[function(g,k,h){var j=g("./contains");
k.exports=function i(a,b){if(!j(a,b)){a.className+=" "+b}}},{"./contains":25}],25:[function(g,k,h){var i=g("./getTokenRegExp");
k.exports=function j(a,b){return i(b).test(a.className)}},{"./getTokenRegExp":26}],26:[function(f,i,g){i.exports=function h(a){return new RegExp("(\\s|^)"+a+"(\\s|$)")
}},{}],27:[function(m,l,h){var k=m("./contains");var j=m("./getTokenRegExp");l.exports=function i(a,b){if(k(a,b)){a.className=a.className.replace(j(b),"$1").trim()
}}},{"./contains":25,"./getTokenRegExp":26}],28:[function(j,i,k){j("@marcom/ac-polyfills/Array/prototype.slice");
j("@marcom/ac-polyfills/Element/prototype.classList");var g=j("./className/remove");
i.exports=function h(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.remove){b.classList.remove.apply(b.classList,a);
return}for(c=0;c<a.length;c++){g(b,a[c])}}},{"./className/remove":27,"@marcom/ac-polyfills/Array/prototype.slice":73,"@marcom/ac-polyfills/Element/prototype.classList":75}],29:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],30:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,!!d)
}else{a.detachEvent("on"+c,b)}return a}},{}],31:[function(g,j,h){var i=function(){};
j.exports=function k(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(a)}else{i.prototype=a;
return new i()}}},{}],32:[function(v,w,t){var n=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
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
}};w.exports=y},{"./internal/KeyEvent":34,"@marcom/ac-dom-events/utils/addEventListener":29,"@marcom/ac-dom-events/utils/removeEventListener":30,"@marcom/ac-event-emitter-micro":1,"@marcom/ac-object/create":31}],33:[function(i,h,f){var g=i("./Keyboard");
h.exports=new g()},{"./Keyboard":32}],34:[function(k,j,g){var h=["keyLocation"];
function i(b){this.originalEvent=b;var a;for(a in b){if(h.indexOf(a)===-1&&typeof b[a]!=="function"){this[a]=b[a]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}i.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};j.exports=i},{}],35:[function(d,g,f){g.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],36:[function(m,l,h){var j=m("./utils/addEventListener");var i=m("./shared/getEventType");
l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)}},{"./shared/getEventType":43,"./utils/addEventListener":45}],37:[function(p,r,o){var n=p("./utils/eventTypeAvailable");
var k=p("./shared/camelCasedEventTypes");var q=p("./shared/windowFallbackEventTypes");
var m=p("./shared/prefixHelper");var s={};r.exports=function l(a,b){var f;var d;
var c;b=b||"div";a=a.toLowerCase();if(!(b in s)){s[b]={}}d=s[b];if(a in d){return d[a]
}if(n(a,b)){return d[a]=a}if(a in k){for(c=0;c<k[a].length;c++){f=k[a][c];if(n(f.toLowerCase(),b)){return d[a]=f
}}}for(c=0;c<m.evt.length;c++){f=m.evt[c]+a;if(n(f,b)){m.reduce(c);return d[a]=f
}}if(b!=="window"&&q.indexOf(a)){return d[a]=l(a,"window")}return d[a]=false}},{"./shared/camelCasedEventTypes":38,"./shared/prefixHelper":39,"./shared/windowFallbackEventTypes":40,"./utils/eventTypeAvailable":41}],38:[function(d,g,f){g.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],39:[function(j,p,k){var l=["-webkit-","-moz-","-ms-"];var o=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];var q=function(){this.initialize()};var n=q.prototype;
n.initialize=function(){this.reduced=false;this.css=l;this.dom=o;this.evt=m};n.reduce=function(a){if(!this.reduced){this.reduced=true;
this.css=[this.css[a]];this.dom=[this.dom[a]];this.evt=[this.evt[a]]}};p.exports=new q()
},{}],40:[function(d,g,f){g.exports=["transitionend","animationstart","animationend","animationiteration"]
},{}],41:[function(k,i,g){var h={window:window,document:document};i.exports=function j(a,c){var b;
a="on"+a;if(!(c in h)){h[c]=document.createElement(c)}b=h[c];if(a in b){return true
}if("setAttribute" in b){b.setAttribute(a,"return;");return(typeof b[a]==="function")
}return false}},{}],42:[function(l,k,m){var h=l("./utils/removeEventListener");
var i=l("./shared/getEventType");k.exports=function j(a,c,b,d){c=i(a,c);return h(a,c,b,d)
}},{"./shared/getEventType":43,"./utils/removeEventListener":46}],43:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"@marcom/ac-prefixer/getEventType":37}],44:[function(f,i,g){i.exports=function h(a){a=a||window.event;
return(typeof a.target!=="undefined")?a.target:a.srcElement}},{}],45:[function(d,g,f){arguments[4][29][0].apply(f,arguments)
},{dup:29}],46:[function(d,g,f){arguments[4][30][0].apply(f,arguments)},{dup:30}],47:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageXOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollLeft}},{}],48:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageYOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollTop}},{}],49:[function(d,g,f){g.exports=8},{}],50:[function(d,g,f){g.exports=11
},{}],51:[function(d,g,f){g.exports=1},{}],52:[function(d,g,f){g.exports=3},{}],53:[function(g,k,h){var j=g("../isNode");
k.exports=function i(a,b){if(!j(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)}},{"../isNode":56}],54:[function(z,B,w){var D=z("./isNodeType");
var C=z("../COMMENT_NODE");var v=z("../DOCUMENT_FRAGMENT_NODE");var x=z("../ELEMENT_NODE");
var y=z("../TEXT_NODE");var t=[x,y,C,v];var A=" must be an Element, TextNode, Comment, or Document Fragment";
var q=[x,y,C];var u=" must be an Element, TextNode, or Comment";var s=[x,v];var r=" must be an Element, or Document Fragment";
var E=" must have a parentNode";B.exports={parentNode:function(d,a,b,c){c=c||"target";
if((d||a)&&!D(d,s)){throw new TypeError(b+": "+c+r)}},childNode:function(d,a,b,c){c=c||"target";
if(!d&&!a){return}if(!D(d,q)){throw new TypeError(b+": "+c+u)}},insertNode:function(d,a,b,c){c=c||"node";
if(!d&&!a){return}if(!D(d,t)){throw new TypeError(b+": "+c+A)}},hasParentNode:function(c,a,b){b=b||"target";
if(!c.parentNode){throw new TypeError(a+": "+b+E)}}}},{"../COMMENT_NODE":49,"../DOCUMENT_FRAGMENT_NODE":50,"../ELEMENT_NODE":51,"../TEXT_NODE":52,"./isNodeType":53}],55:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./ELEMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./ELEMENT_NODE":51,"./internal/isNodeType":53}],56:[function(f,i,g){i.exports=function h(a){return !!(a&&a.nodeType)
}},{}],57:[function(k,j,g){var i=k("./internal/validate");j.exports=function h(a){i.childNode(a,true,"remove");
if(!a.parentNode){return a}return a.parentNode.removeChild(a)}},{"./internal/validate":54}],58:[function(d,g,f){arguments[4][31][0].apply(f,arguments)
},{dup:31}],59:[function(g,k,h){var i=g("./extend");k.exports=function j(a,b){if(typeof a!=="object"){throw new TypeError("defaults: must provide a defaults object")
}b=b||{};if(typeof b!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return i({},a,b)}},{"./extend":60}],60:[function(k,j,g){k("@marcom/ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"@marcom/ac-polyfills/Array/prototype.forEach":71}],61:[function(d,g,f){g.exports={Modal:d("./ac-modal-basic/Modal"),Renderer:d("./ac-modal-basic/Renderer"),classNames:d("./ac-modal-basic/classNames"),dataAttributes:d("./ac-modal-basic/dataAttributes")}
},{"./ac-modal-basic/Modal":62,"./ac-modal-basic/Renderer":63,"./ac-modal-basic/classNames":64,"./ac-modal-basic/dataAttributes":65}],62:[function(z,A,w){var r={addEventListener:z("@marcom/ac-dom-events/addEventListener"),removeEventListener:z("@marcom/ac-dom-events/removeEventListener"),target:z("@marcom/ac-dom-events/target")};
var u={getScrollX:z("@marcom/ac-dom-metrics/getScrollX"),getScrollY:z("@marcom/ac-dom-metrics/getScrollY")};
var y={create:z("@marcom/ac-object/create"),defaults:z("@marcom/ac-object/defaults")};
var t=z("@marcom/ac-keyboard");var o=z("@marcom/ac-keyboard/keyMap");var q=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var x=z("./Renderer");var p={retainScrollPosition:false};function s(b,a){q.call(this);
this.options=y.defaults(p,b);this.renderer=new x(a);this.opened=false;this._keysToClose=[o.ESCAPE];
this._attachedKeysToClose=[];this.close=this.close.bind(this)}var v=s.prototype=y.create(q.prototype);
v.open=function(){if(this.options.retainScrollPosition){this._saveScrollPosition()
}if(!this.opened){this._attachEvents();this.trigger("willopen");this.renderer.open();
this.opened=true;this.trigger("open")}};v.close=function(c){var a;var b;if(this.opened){if(c&&c.type==="click"){a=r.target(c);
b=this.renderer.options.dataAttributes.close;if(!a.hasAttribute(b)){return}}this.trigger("willclose");
this._removeEvents();this.renderer.close();if(this.options.retainScrollPosition){this._restoreScrollPosition()
}this.opened=false;this.trigger("close")}};v.render=function(){this.renderer.render()
};v.appendContent=function(b,a){this.renderer.appendContent(b,a)};v.removeContent=function(a){this.renderer.removeContent(a)
};v.destroy=function(){this._removeEvents();this.renderer.destroy();for(var a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};v.addKeyToClose=function(a){var b=this._keysToClose.indexOf(a);if(b===-1){this._keysToClose.push(a);
this._bindKeyToClose(a)}};v.removeKeyToClose=function(a){var b=this._keysToClose.indexOf(a);
if(b!==-1){this._keysToClose.splice(b,1)}this._releaseKeyToClose(a)};v._bindKeyToClose=function(a){var b=this._attachedKeysToClose.indexOf(a);
if(b===-1){t.onUp(a,this.close);this._attachedKeysToClose.push(a)}};v._releaseKeyToClose=function(a){var b=this._attachedKeysToClose.indexOf(a);
if(b!==-1){t.offUp(a,this.close);this._attachedKeysToClose.splice(b,1)}};v._removeEvents=function(){if(this.renderer.modalElement){r.removeEventListener(this.renderer.modalElement,"click",this.close)
}this._keysToClose.forEach(this._releaseKeyToClose,this)};v._attachEvents=function(){if(this.renderer.modalElement){r.addEventListener(this.renderer.modalElement,"click",this.close)
}this._keysToClose.forEach(this._bindKeyToClose,this)};v._restoreScrollPosition=function(){window.scrollTo(this._scrollX||0,this._scrollY||0)
};v._saveScrollPosition=function(){this._scrollX=u.getScrollX();this._scrollY=u.getScrollY()
};A.exports=s},{"./Renderer":63,"@marcom/ac-dom-events/addEventListener":36,"@marcom/ac-dom-events/removeEventListener":42,"@marcom/ac-dom-events/target":44,"@marcom/ac-dom-metrics/getScrollX":47,"@marcom/ac-dom-metrics/getScrollY":48,"@marcom/ac-event-emitter-micro":1,"@marcom/ac-keyboard":33,"@marcom/ac-keyboard/keyMap":35,"@marcom/ac-object/create":58,"@marcom/ac-object/defaults":59}],63:[function(u,v,q){var w={add:u("@marcom/ac-classlist/add"),remove:u("@marcom/ac-classlist/remove")};
var s={defaults:u("@marcom/ac-object/defaults")};var n={remove:u("@marcom/ac-dom-nodes/remove"),isElement:u("@marcom/ac-dom-nodes/isElement")};
var o=u("./classNames");var m=u("./dataAttributes");var t={modalElement:null,contentElement:null,closeButton:null,classNames:o,dataAttributes:m};
var r=function(a){a=a||{};this.options=s.defaults(t,a);this.options.classNames=s.defaults(t.classNames,a.classNames);
this.options.dataAttributes=s.defaults(t.dataAttributes,a.dataAttributes);this.modalElement=this.options.modalElement;
this.contentElement=this.options.contentElement;this.closeButton=this.options.closeButton
};var p=r.prototype;p.render=function(){if(!n.isElement(this.modalElement)){this.modalElement=this.renderModalElement(this.options.classNames.modalElement)
}if(!n.isElement(this.contentElement)){this.contentElement=this.renderContentElement(this.options.classNames.contentElement)
}if(this.closeButton!==false){if(!n.isElement(this.closeButton)){this.closeButton=this.renderCloseButton(this.options.classNames.closeButton)
}this.modalElement.appendChild(this.closeButton)}this.modalElement.appendChild(this.contentElement);
document.body.appendChild(this.modalElement);return this.modalElement};p.renderCloseButton=function(b){var a;
b=b||this.options.classNames.closeButton;a=this._renderElement("button",b);a.setAttribute(this.options.dataAttributes.close,"");
return a};p.renderModalElement=function(a){a=a||this.options.classNames.modalElement;
return this._renderElement("div",a)};p.renderContentElement=function(a){a=a||this.options.classNames.contentElement;
return this._renderElement("div",a)};p.appendContent=function(a,b){if(!n.isElement(a)){return
}if(arguments[1]===undefined){this.contentElement.appendChild(a)}else{if(n.isElement(b)){b.appendChild(a)
}}};p.removeContent=function(a){if(a){if(this.modalElement.contains(a)){n.remove(a)
}}else{this._emptyContent()}};p.open=function(){var b=[document.documentElement].concat(this.options.classNames.documentElement);
var a=[this.modalElement].concat(this.options.classNames.modalOpen);w.add.apply(null,b);
w.add.apply(null,a)};p.close=function(){var b=[document.documentElement].concat(this.options.classNames.documentElement);
var a=[this.modalElement].concat(this.options.classNames.modalOpen);w.remove.apply(null,b);
w.remove.apply(null,a)};p.destroy=function(){var a=[document.documentElement].concat(this.options.classNames.documentElement);
if(this.modalElement&&document.body.contains(this.modalElement)){this.close();document.body.removeChild(this.modalElement)
}w.remove.apply(null,a);for(var b in this){if(this.hasOwnProperty(b)){this[b]=null
}}};p._renderElement=function(c,b){var d=document.createElement(c);var a=[d];if(b){a=a.concat(b)
}w.add.apply(null,a);return d};p._emptyContent=function(){this.contentElement.innerHTML=""
};v.exports=r},{"./classNames":64,"./dataAttributes":65,"@marcom/ac-classlist/add":23,"@marcom/ac-classlist/remove":28,"@marcom/ac-dom-nodes/isElement":55,"@marcom/ac-dom-nodes/remove":57,"@marcom/ac-object/defaults":59}],64:[function(d,g,f){g.exports={modalElement:"modal",modalOpen:"modal-open",documentElement:"has-modal",contentElement:"modal-content",closeButton:"modal-close"}
},{}],65:[function(d,g,f){g.exports={close:"data-modal-close"}},{}],66:[function(d,g,f){g.exports={Modal:d("./ac-modal/Modal"),createStandardModal:d("./ac-modal/factory/createStandardModal"),createFullViewportModal:d("./ac-modal/factory/createFullViewportModal")}
},{"./ac-modal/Modal":67,"./ac-modal/factory/createFullViewportModal":68,"./ac-modal/factory/createStandardModal":69}],67:[function(q,p,j){var m=q("@marcom/ac-modal-basic").Modal;
var n=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;var l=q("@marcom/ac-accessibility/CircularTab");
function k(a){n.call(this);this.options=a||{};this._modal=new m(a,this.options.renderer);
this.opened=false;this._render();this.closeButton=this._modal.renderer.closeButton;
this.modalElement=this._modal.renderer.modalElement;this.contentElement=this._modal.renderer.contentElement;
this.modalElement.setAttribute("role","dialog");this.closeButton.setAttribute("aria-label","Close");
this._circularTab=new l(this.modalElement);this._onWillOpen=this._onWillOpen.bind(this);
this._onOpen=this._onOpen.bind(this);this._onWillClose=this._onWillClose.bind(this);
this._onClose=this._onClose.bind(this);this._bindEvents()}var o=k.prototype=Object.create(n.prototype);
o.open=function(){this._modal.open();this.opened=this._modal.opened};o.close=function(){this._modal.close()
};o.appendContent=function(a){this._modal.appendContent(a)};o.removeContent=function(a){this._modal.removeContent(a)
};o.destroy=function(){this._releaseEvents();this._modal.destroy();this._removeModalFocus();
this._circularTab.destroy();this._focusObj=null;for(var a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};o.addKeyToClose=function(a){this._modal.addKeyToClose(a)};o.removeKeyToClose=function(a){this._modal.removeKeyToClose(a)
};o._render=function(){this._modal.render();this._modal.renderer.modalElement.setAttribute("aria-hidden","true")
};o._bindEvents=function(){this._modal.on("willopen",this._onWillOpen);this._modal.on("open",this._onOpen);
this._modal.on("willclose",this._onWillClose);this._modal.on("close",this._onClose)
};o._releaseEvents=function(){this._modal.off("willopen",this._onWillOpen);this._modal.off("open",this._onOpen);
this._modal.off("willclose",this._onWillClose);this._modal.off("close",this._onClose)
};o._onWillOpen=function(){this.trigger("willopen")};o._onOpen=function(){this.opened=this._modal.opened;
this._giveModalFocus();this.trigger("open")};o._onWillClose=function(){this.trigger("willclose");
this._removeModalFocus()};o._onClose=function(){this.opened=this._modal.opened;
this.trigger("close")};o._giveModalFocus=function(){this.modalElement.setAttribute("aria-hidden","false");
this._activeElement=document.activeElement;this.closeButton.focus();this._circularTab.start()
};o._removeModalFocus=function(){this._circularTab.stop();this.modalElement.setAttribute("aria-hidden","true");
if(this._activeElement){this._activeElement.focus();this._activeElement=null}};
p.exports=k},{"@marcom/ac-accessibility/CircularTab":13,"@marcom/ac-event-emitter-micro":1,"@marcom/ac-modal-basic":61}],68:[function(l,k,n){var o=l("../Modal");
var i=l("@marcom/ac-modal-basic").classNames;var m={retainScrollPosition:true,renderer:{classNames:{documentElement:[i.documentElement].concat("has-modal-full-viewport"),modalElement:[i.modalElement].concat("modal-full-viewport")}}};
function j(a){var b=new o(m);if(a){b.appendContent(a)}return b}k.exports=j},{"../Modal":67,"@marcom/ac-modal-basic":61}],69:[function(q,r,p){var m=q("../Modal");
var o=q("@marcom/ac-modal-basic").classNames;var l=q("@marcom/ac-modal-basic").dataAttributes;
var s={add:q("@marcom/ac-classlist/add")};var k={renderer:{classNames:{documentElement:[o.documentElement].concat("has-modal-standard"),modalElement:[o.modalElement].concat("modal-standard")}}};
function n(d){var f=new m(k);if(d){f.appendContent(d)}var b=document.createElement("div");
var g=document.createElement("div");var a=document.createElement("div");var c=document.createElement("div");
s.add(b,"content-table");s.add(g,"content-cell");s.add(a,"content-wrapper");s.add(c,"content-padding","large-8","medium-10");
f.modalElement.setAttribute(l.close,"");a.setAttribute(l.close,"");g.setAttribute(l.close,"");
b.appendChild(g);g.appendChild(a);a.appendChild(c);f.modalElement.appendChild(b);
c.appendChild(f.contentElement);c.appendChild(f.closeButton);return f}r.exports=n
},{"../Modal":67,"@marcom/ac-classlist/add":23,"@marcom/ac-modal-basic":61}],70:[function(d,g,f){if(!Array.isArray){Array.isArray=function(a){return Object.prototype.toString.call(a)==="[object Array]"
}}},{}],71:[function(f,i,g){if(!Array.prototype.forEach){Array.prototype.forEach=function h(a,b){var c=Object(this);
var n;var m;if(typeof a!=="function"){throw new TypeError("No function object passed to forEach.")
}var d=this.length;for(n=0;n<d;n+=1){m=c[n];a.call(b,m,n,c)}}}},{}],72:[function(f,i,g){if(!Array.prototype.indexOf){Array.prototype.indexOf=function h(c,b){var a=b||0;
var d=0;if(a<0){a=this.length+b-1;if(a<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(d=0;d<this.length;d++){if(this[d]===c){return d}}return(-1)}}},{}],73:[function(d,g,f){(function(){var b=Array.prototype.slice;
try{b.call(document.documentElement)}catch(a){Array.prototype.slice=function(u,q){q=(typeof q!=="undefined")?q:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return b.call(this,u,q)
}var i,r=[],p,s=this.length;var t=u||0;t=(t>=0)?t:s+t;var c=(q)?q:s;if(q<0){c=s+q
}p=c-t;if(p>0){r=new Array(p);if(this.charAt){for(i=0;i<p;i++){r[i]=this.charAt(t+i)
}}else{for(i=0;i<p;i++){r[i]=this[t+i]}}}return r}}}())},{}],74:[function(f,i,g){if(document.createEvent){try{new window.CustomEvent("click")
}catch(h){window.CustomEvent=(function(){function a(c,b){b=b||{bubbles:false,cancelable:false,detail:undefined};
var d=document.createEvent("CustomEvent");d.initCustomEvent(c,b.bubbles,b.cancelable,b.detail);
return d}a.prototype=window.Event.prototype;return a}())}}},{}],75:[function(d,g,f){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;
if("document" in self){if(!("classList" in document.createElement("_"))){(function(t){if(!("Element" in t)){return
}var C="classList",x="prototype",b=t.Element[x],B=Object,s=String[x].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},A=Array[x].indexOf||function(h){var i=0,j=this.length;for(;i<j;i++){if(i in this&&this[i]===h){return i
}}return -1},a=function(i,h){this.name=i;this.code=DOMException[i];this.message=h
},w=function(h,i){if(i===""){throw new a("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(i)){throw new a("INVALID_CHARACTER_ERR","String contains an invalid character")
}return A.call(h,i)},z=function(h){var i=s.call(h.getAttribute("class")||""),j=i?i.split(/\s+/):[],k=0,l=j.length;
for(;k<l;k++){this.push(j[k])}this._updateClassName=function(){h.setAttribute("class",this.toString())
}},y=z[x]=[],u=function(){return new z(this)};a[x]=Error[x];y.item=function(h){return this[h]||null
};y.contains=function(h){h+="";return w(this,h)!==-1};y.add=function(){var h=arguments,i=0,k=h.length,j,l=false;
do{j=h[i]+"";if(w(this,j)===-1){this.push(j);l=true}}while(++i<k);if(l){this._updateClassName()
}};y.remove=function(){var h=arguments,i=0,l=h.length,j,m=false,k;do{j=h[i]+"";
k=w(this,j);while(k!==-1){this.splice(k,1);m=true;k=w(this,j)}}while(++i<l);if(m){this._updateClassName()
}};y.toggle=function(j,i){j+="";var k=this.contains(j),h=k?i!==true&&"remove":i!==false&&"add";
if(h){this[h](j)}if(i===true||i===false){return i}else{return !k}};y.toString=function(){return this.join(" ")
};if(B.defineProperty){var c={get:u,enumerable:true,configurable:true};try{B.defineProperty(b,C,c)
}catch(v){if(v.number===-2146823252){c.enumerable=false;B.defineProperty(b,C,c)
}}}else{if(B[x].__defineGetter__){b.__defineGetter__(C,u)}}}(self))}else{(function(){var b=document.createElement("_");
b.classList.add("c1","c2");if(!b.classList.contains("c2")){var a=function(j){var k=DOMTokenList.prototype[j];
DOMTokenList.prototype[j]=function(h){var i,m=arguments.length;for(i=0;i<m;i++){h=arguments[i];
k.call(this,h)}}};a("add");a("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(k,j){if(1 in arguments&&!this.contains(k)===!j){return j
}else{return c.call(this,k)}}}b=null}())}}},{}],76:[function(d,g,f){if(typeof Object.assign!="function"){Object.assign=function(a){if(a==null){throw new TypeError("Cannot convert undefined or null to object")
}a=Object(a);for(var i=1;i<arguments.length;i++){var b=arguments[i];if(b!=null){for(var c in b){if(Object.prototype.hasOwnProperty.call(b,c)){a[c]=b[c]
}}}}return a}}},{}],77:[function(d,g,f){arguments[4][49][0].apply(f,arguments)},{dup:49}],78:[function(d,g,f){arguments[4][50][0].apply(f,arguments)
},{dup:50}],79:[function(d,g,f){g.exports=9},{}],80:[function(d,g,f){arguments[4][51][0].apply(f,arguments)
},{dup:51}],81:[function(d,g,f){arguments[4][52][0].apply(f,arguments)},{dup:52}],82:[function(d,g,f){arguments[4][53][0].apply(f,arguments)
},{"../isNode":86,dup:53}],83:[function(d,g,f){arguments[4][54][0].apply(f,arguments)
},{"../COMMENT_NODE":77,"../DOCUMENT_FRAGMENT_NODE":78,"../ELEMENT_NODE":80,"../TEXT_NODE":81,"./isNodeType":82,dup:54}],84:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_FRAGMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_FRAGMENT_NODE":78,"./internal/isNodeType":82}],85:[function(d,g,f){arguments[4][55][0].apply(f,arguments)
},{"./ELEMENT_NODE":80,"./internal/isNodeType":82,dup:55}],86:[function(d,g,f){arguments[4][56][0].apply(f,arguments)
},{dup:56}],87:[function(d,g,f){arguments[4][57][0].apply(f,arguments)},{"./internal/validate":83,dup:57}],88:[function(d,g,f){g.exports=window.Element?(function(a){return a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector
}(Element.prototype)):null},{}],89:[function(z,C,x){z("@marcom/ac-polyfills/Array/prototype.indexOf");
var r=z("@marcom/ac-dom-nodes/isNode");var D=z("@marcom/ac-dom-nodes/COMMENT_NODE");
var v=z("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var w=z("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var y=z("@marcom/ac-dom-nodes/ELEMENT_NODE");var A=z("@marcom/ac-dom-nodes/TEXT_NODE");
var E=function(a,b){if(!r(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)};var t=[y,w,v];var s=" must be an Element, Document, or Document Fragment";
var q=[y,A,D];var u=" must be an Element, TextNode, or Comment";var B=" must be a string";
C.exports={parentNode:function(d,a,b,c){c=c||"node";if((d||a)&&!E(d,t)){throw new TypeError(b+": "+c+s)
}},childNode:function(d,a,b,c){c=c||"node";if(!d&&!a){return}if(!E(d,q)){throw new TypeError(b+": "+c+u)
}},selector:function(d,a,b,c){c=c||"selector";if((d||a)&&typeof d!=="string"){throw new TypeError(b+": "+c+B)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":77,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":78,"@marcom/ac-dom-nodes/DOCUMENT_NODE":79,"@marcom/ac-dom-nodes/ELEMENT_NODE":80,"@marcom/ac-dom-nodes/TEXT_NODE":81,"@marcom/ac-dom-nodes/isNode":86,"@marcom/ac-polyfills/Array/prototype.indexOf":72}],90:[function(p,o,q){var n=p("@marcom/ac-dom-nodes/isElement");
var l=p("./internal/validate");var k=p("./internal/nativeMatches");var m=p("./shims/matchesSelector");
o.exports=function j(a,b){l.selector(b,true,"matchesSelector");if(!n(a)){return false
}if(!k){return m(a,b)}return k.call(a,b)}},{"./internal/nativeMatches":88,"./internal/validate":89,"./shims/matchesSelector":92,"@marcom/ac-dom-nodes/isElement":85}],91:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.slice");
var k=i("./internal/validate");var l=i("./shims/querySelectorAll");var m=("querySelectorAll" in document);
o.exports=function n(b,a){a=a||document;k.parentNode(a,true,"querySelectorAll","context");
k.selector(b,true,"querySelectorAll");if(!m){return l(b,a)}return Array.prototype.slice.call(a.querySelectorAll(b))
}},{"./internal/validate":89,"./shims/querySelectorAll":93,"@marcom/ac-polyfills/Array/prototype.slice":73}],92:[function(k,j,g){var i=k("../querySelectorAll");
j.exports=function h(a,f){var b=a.parentNode||document;var d=i(f,b);var c;for(c=0;
c<d.length;c++){if(d[c]===a){return true}}return false}},{"../querySelectorAll":91}],93:[function(s,t,q){s("@marcom/ac-polyfills/Array/prototype.indexOf");
var m=s("@marcom/ac-dom-nodes/isElement");var o=s("@marcom/ac-dom-nodes/isDocumentFragment");
var l=s("@marcom/ac-dom-nodes/remove");var r="_ac_qsa_";var n=function(c,b){var a;
if(b===document){return true}a=c;while((a=a.parentNode)&&m(a)){if(a===b){return true
}}return false};var p=function(a){if("recalc" in a){a.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};t.exports=function u(b,g){var d=document.createElement("style");
var c=r+(Math.random()+"").slice(-6);var a=[];var f;g=g||document;document[c]=[];
if(o(g)){g.appendChild(d)}else{document.documentElement.firstChild.appendChild(d)
}d.styleSheet.cssText="*{display:recalc;}"+b+'{ac-qsa:expression(document["'+c+'"] && document["'+c+'"].push(this));}';
p(g);while(document[c].length){f=document[c].shift();f.style.removeAttribute("ac-qsa");
if(a.indexOf(f)===-1&&n(f,g)){a.push(f)}}document[c]=null;l(d);p(g);return a}},{"@marcom/ac-dom-nodes/isDocumentFragment":84,"@marcom/ac-dom-nodes/isElement":85,"@marcom/ac-dom-nodes/remove":87,"@marcom/ac-polyfills/Array/prototype.indexOf":72}],94:[function(d,g,f){g.exports.EventEmitter=d("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":95}],95:[function(r,s,q){var o="EventEmitter:propagation";
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
}}}return false};s.exports=l},{}],96:[function(d,g,f){g.exports={DOMEmitter:d("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":97}],97:[function(s,t,r){var q;var l=s("ac-event-emitter").EventEmitter,m=s("./DOMEmitterEvent"),p={addEventListener:s("@marcom/ac-dom-events/addEventListener"),removeEventListener:s("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:s("@marcom/ac-dom-events/dispatchEvent")},u={querySelectorAll:s("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:s("@marcom/ac-dom-traversal/matchesSelector")};
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
}};t.exports=o},{"./DOMEmitterEvent":98,"@marcom/ac-dom-events/addEventListener":99,"@marcom/ac-dom-events/dispatchEvent":100,"@marcom/ac-dom-events/removeEventListener":108,"@marcom/ac-dom-traversal/matchesSelector":90,"@marcom/ac-dom-traversal/querySelectorAll":91,"ac-event-emitter":94}],98:[function(h,m,i){var k={preventDefault:h("@marcom/ac-dom-events/preventDefault"),stopPropagation:h("@marcom/ac-dom-events/stopPropagation"),target:h("@marcom/ac-dom-events/target")};
var l;var j=function(a,b){this._domEmitter=b;this.originalEvent=a||{};this._originalTarget=k.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(a){this.data=this.originalEvent;this.originalEvent={}}}};l=j.prototype;
l.preventDefault=function(){k.preventDefault(this.originalEvent)};l.stopPropagation=function(){k.stopPropagation(this.originalEvent)
};l.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};l._isDOMEvent=function(a){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&a instanceof CustomEvent)){return true
}return false};m.exports=j},{"@marcom/ac-dom-events/preventDefault":107,"@marcom/ac-dom-events/stopPropagation":111,"@marcom/ac-dom-events/target":112}],99:[function(d,g,f){arguments[4][36][0].apply(f,arguments)
},{"./shared/getEventType":109,"./utils/addEventListener":113,dup:36}],100:[function(l,k,m){var i=l("./utils/dispatchEvent");
var h=l("./shared/getEventType");k.exports=function j(a,b,c){b=h(a,b);return i(a,b,c)
}},{"./shared/getEventType":109,"./utils/dispatchEvent":114}],101:[function(d,g,f){g.exports={addEventListener:d("./addEventListener"),dispatchEvent:d("./dispatchEvent"),preventDefault:d("./preventDefault"),removeEventListener:d("./removeEventListener"),stop:d("./stop"),stopPropagation:d("./stopPropagation"),target:d("./target")}
},{"./addEventListener":99,"./dispatchEvent":100,"./preventDefault":107,"./removeEventListener":108,"./stop":110,"./stopPropagation":111,"./target":112}],102:[function(d,g,f){arguments[4][37][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":103,"./shared/prefixHelper":104,"./shared/windowFallbackEventTypes":105,"./utils/eventTypeAvailable":106,dup:37}],103:[function(d,g,f){arguments[4][38][0].apply(f,arguments)
},{dup:38}],104:[function(d,g,f){arguments[4][39][0].apply(f,arguments)},{dup:39}],105:[function(d,g,f){arguments[4][40][0].apply(f,arguments)
},{dup:40}],106:[function(d,g,f){arguments[4][41][0].apply(f,arguments)},{dup:41}],107:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],108:[function(d,g,f){arguments[4][42][0].apply(f,arguments)
},{"./shared/getEventType":109,"./utils/removeEventListener":115,dup:42}],109:[function(d,g,f){arguments[4][43][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":102,dup:43}],110:[function(l,j,h){var i=l("./stopPropagation");
var m=l("./preventDefault");j.exports=function k(a){a=a||window.event;i(a);m(a);
a.stopped=true;a.returnValue=false}},{"./preventDefault":107,"./stopPropagation":111}],111:[function(i,h,f){h.exports=function g(a){a=a||window.event;
if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}}},{}],112:[function(d,g,f){arguments[4][44][0].apply(f,arguments)
},{dup:44}],113:[function(d,g,f){arguments[4][29][0].apply(f,arguments)},{dup:29}],114:[function(f,i,g){f("@marcom/ac-polyfills/CustomEvent");
i.exports=function h(a,b,c){var d;if(a.dispatchEvent){if(c){d=new CustomEvent(b,c)
}else{d=new CustomEvent(b)}a.dispatchEvent(d)}else{d=document.createEventObject();
if(c&&"detail" in c){d.detail=c.detail}a.fireEvent("on"+b,d)}return a}},{"@marcom/ac-polyfills/CustomEvent":74}],115:[function(d,g,f){arguments[4][30][0].apply(f,arguments)
},{dup:30}],116:[function(d,g,f){arguments[4][94][0].apply(f,arguments)},{"./ac-event-emitter/EventEmitter":117,dup:94}],117:[function(d,g,f){arguments[4][95][0].apply(f,arguments)
},{dup:95}],118:[function(j,i,k){var h=j("qs");i.exports=function g(b,c){var a=h.stringify(b,{strictNullHandling:true});
if(a&&c!==false){a="?"+a}return a}},{qs:119}],119:[function(h,l,i){var j=h("./stringify");
var m=h("./parse");var k={};l.exports={stringify:j,parse:m}},{"./parse":120,"./stringify":121}],120:[function(g,k,h){var i=g("./utils");
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
s=i.merge(s,t,a)}return i.compact(s)}},{"./utils":122}],121:[function(g,k,h){var i=g("./utils");
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
}return a.join(w)}},{"./utils":122}],122:[function(g,k,h){var i={};i.hexTable=new Array(256);
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
}},{}],123:[function(d,g,f){g.exports={clone:d("./clone"),create:d("./create"),defaults:d("./defaults"),extend:d("./extend"),getPrototypeOf:d("./getPrototypeOf"),isDate:d("./isDate"),isEmpty:d("./isEmpty"),isRegExp:d("./isRegExp"),toQueryParameters:d("./toQueryParameters")}
},{"./clone":124,"./create":125,"./defaults":126,"./extend":127,"./getPrototypeOf":128,"./isDate":129,"./isEmpty":130,"./isRegExp":131,"./toQueryParameters":132}],124:[function(o,n,i){o("@marcom/ac-polyfills/Array/isArray");
var k=o("./extend");var j=Object.prototype.hasOwnProperty;var m=function(c,b){var a;
for(a in b){if(j.call(b,a)){if(b[a]===null){c[a]=null}else{if(typeof b[a]==="object"){c[a]=Array.isArray(b[a])?[]:{};
m(c[a],b[a])}else{c[a]=b[a]}}}}return c};n.exports=function l(a,b){if(b){return m({},a)
}return k({},a)}},{"./extend":127,"@marcom/ac-polyfills/Array/isArray":70}],125:[function(d,g,f){arguments[4][31][0].apply(f,arguments)
},{dup:31}],126:[function(d,g,f){arguments[4][59][0].apply(f,arguments)},{"./extend":127,dup:59}],127:[function(d,g,f){arguments[4][60][0].apply(f,arguments)
},{"@marcom/ac-polyfills/Array/prototype.forEach":71,dup:60}],128:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(a){if(Object.getPrototypeOf){return Object.getPrototypeOf(a)
}else{if(typeof a!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return a.__proto__}else{var c=a.constructor;
var b;if(h.call(a,"constructor")){b=c;if(!(delete a.constructor)){return null}c=a.constructor;
a.constructor=b}return c?c.prototype:null}}}}},{}],129:[function(f,h,g){h.exports=function i(a){return Object.prototype.toString.call(a)==="[object Date]"
}},{}],130:[function(k,j,g){var h=Object.prototype.hasOwnProperty;j.exports=function i(b){var a;
if(typeof b!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(a in b){if(h.call(b,a)){return false}}return true}},{}],131:[function(i,h,f){h.exports=function g(a){return window.RegExp?a instanceof RegExp:false
}},{}],132:[function(k,i,g){var h=k("@marcom/ac-url/joinSearchParams");i.exports=function j(a){if(typeof a!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return h(a,false)}},{"@marcom/ac-url/joinSearchParams":118}],133:[function(d,g,f){g.exports={Routes:d("./ac-routes/Routes"),Route:d("./ac-routes/Route")}
},{"./ac-routes/Route":134,"./ac-routes/Routes":135}],134:[function(g,k,h){function i(c,a,d,b,f){this.path=c;
this.callback=a;this.context=d;this.greedy=b||false;this.priority=f||0;if(typeof this.priority!=="number"){throw new Error("Priority must be a Number.")
}this.identifierPattern="([a-zA-Z0-9\\-\\_]+)";this.tokensRe=new RegExp(":"+this.identifierPattern,"g");
this.matcher=this._createRouteMatcher(c)}var j=i.prototype;j._createRouteMatcher=function(c){if(c&&c.exec){return{pattern:c}
}else{if(c==="/"){return{pattern:/^\/$/}}else{if(typeof c!=="string"){throw new Error("path must be either a string or regex")
}}}var d=this._extractRouteTokens(c);var a=c.replace(this.tokensRe,this.identifierPattern);
var b=new RegExp(a,"g");return{pattern:b,routeTokens:d}};j._extractRouteTokens=function(a){var d=a.replace(this.tokensRe,":"+this.identifierPattern);
var b=new RegExp(d,"g");var c=b.exec(a);if(c&&c.length>1){c=c.slice(1)}else{c=null
}return c};j.match=function(c){this.matcher.pattern.lastIndex=0;var d=this.matcher.pattern.exec(c);
if(d){var b=(d.length)?d.slice(1):[];var a=this.callback;if(a&&typeof a==="function"){a.apply(this.context||this,b);
return true}}return false};k.exports=i},{}],135:[function(m,l,h){var j=m("./Route");
function i(a){this._routes={};if(a){this.addRoutes(a)}}var k=i.prototype;k._getIndex=function(b,a,c){if(this._routes[b]!==undefined){var d=this._routes[b].length;
while(--d>-1){if(this._routes[b][d].callback===a&&this._routes[b][d].context===c){return d
}}}return -1};k.match=function(a){var b,c;for(b in this._routes){c=this._routes[b].length;
while(--c>-1){if(this._routes[b][c].match(a)&&this._routes[b][c].greedy){break}}}};
k.add=function(b){if(this._routes[b.path]===undefined){this._routes[b.path]=[b]
}else{if(!this.get(b.path,b.callback,b.context)){var a,c=this._routes[b.path].length;
if(c>0){for(a=0;a<c;++a){if(this._routes[b.path][a].priority>b.priority){this._routes[b.path].splice(a,0,b);
return b}}}this._routes[b.path].push(b)}}return b};k.remove=function(b){var a=this._getIndex(b.path,b.callback,b.context);
if(a>-1){this._routes[b.path].splice(a,1);return b}return false};k.get=function(b,a,c){var d=this._getIndex(b,a,c);
if(d>-1){return this._routes[b][d]}return false};k.createRoute=function(c,a,d,b,f){var g=new j(c,a,d,b,f);
this.add(g);return g};k.addRoutes=function(c){if(c instanceof Array){var a,b,d=c.length;
for(a=0;a<d;++a){b=c[a];if(b&&typeof b==="object"){this.add(b)}}}else{throw new Error("routes must be an Array.")
}};k.removeRoutes=function(c){if(c instanceof Array){var a,b,d=c.length;for(a=0;
a<d;++a){b=c[a];if(b&&typeof b==="object"){this.remove(b)}}}else{throw new Error("routes must be an Array.")
}};k.getRoutes=function(a){if(this._routes[a]===undefined){return[]}return this._routes[a]
};l.exports=i},{"./Route":134}],136:[function(d,g,f){g.exports={Router:d("./ac-router/Router"),History:d("./ac-router/History"),Routes:d("@marcom/ac-routes").Routes,Route:d("@marcom/ac-routes").Route}
},{"./ac-router/History":137,"./ac-router/Router":138,"@marcom/ac-routes":133}],137:[function(q,o,j){var p=q("@marcom/ac-object").create;
var k=q("@marcom/ac-dom-events");var l=q("@marcom/ac-event-emitter").EventEmitter;
function m(a){a=a||{};this.history=window.history;this.rootStripper=/^\/+|\/+$/g;
this.root=a.root||"/";this.root=("/"+this.root+"/").replace(this.rootStripper,"/");
var b=typeof a.resolveInitialHash!=="boolean"?true:a.resolveInitialHash;this._pushState=typeof a.pushState!=="boolean"?true:a.pushState;
this._hashChange=a.hashChange||false;this._setUpdateVars(b);if(a.autoStart){this.start()
}}var n=m.prototype=p(l.prototype);n._isRoot=function(a){return("/"+a+"/").replace(this.rootStripper,"/")===this.root
};n._isPushStateSupported=function(){return(this.history&&this.history.pushState)
};n._isHashChangeSupported=function(){return("onhashchange" in window)};n._setUpdateVars=function(a){if(this._pushState&&this._isPushStateSupported()){if(a&&this._hashChange&&window.location.href.indexOf("#")!==-1){this.history.pushState({},document.title,window.location.href.replace("#",""))
}this._hashChange=false}else{if(a&&this._pushState&&this._hashChange&&window.location.href.indexOf("#")<0){if(!window.location.origin){window.location.origin=window.location.protocol+"//"+window.location.hostname;
window.location.origin+=(window.location.port?":"+window.location.port:"")}var b=window.location.href.substr(window.location.origin.length+this.root.length);
if(b.length){window.location=window.location.origin+this.root+"#"+b;return}}if(this._hashChange&&!this._isHashChangeSupported()){this._interval=50;
this._iframe=document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">');
this._iframe=document.body.appendChild(this._iframe).contentWindow;this._iframe.document.open().close()
}this._pushState=false}};n._checkUrl=function(){var a=this._iframe.location.hash.substr(1);
if(a.length===0){a="/"}if(this.fragment()!==a){window.location.hash="#"+a;this._ignoreHashChange=false;
this._handleHashChange()}};n._handlePopState=function(a){this.trigger("popstate",{fragment:this.fragment()})
};n._handleHashChange=function(a){if(this._ignoreHashChange){this._ignoreHashChange=false;
return}this.trigger("popstate",{fragment:this.fragment()})};n.canUpdate=function(){return this._pushState||this._hashChange
};n.start=function(){if(!this.started&&(this._pushState||this._hashChange)){this.started=true;
if(this._pushState){this._handlePopState=this._handlePopState.bind(this);k.addEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){this._handleHashChange=this._handleHashChange.bind(this);
k.addEventListener(window,"hashchange",this._handleHashChange)}else{this._iframe.location.hash=this.fragment();
this._checkUrl=this._checkUrl.bind(this);this._checkUrlInterval=setInterval(this._checkUrl,this._interval)
}}}}return this.started||false};n.stop=function(){if(this.started){this.started=false;
if(this._pushState){k.removeEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){k.removeEventListener(window,"hashchange",this._handleHashChange)
}else{if(this._checkUrlInterval){clearInterval(this._checkUrlInterval);this._checkUrlInterval=null
}}}}}};n.navigate=function(a,b){if(!this.started||!this.canUpdate()){return false
}b=b||{};var c=((this._isRoot(a)?"":this.root)+a).replace(/([^:])(\/\/)/g,"$1/");
if(this._pushState){this.history.pushState(b,document.title,c)}else{if(this._hashChange){this._ignoreHashChange=true;
window.location.hash="#"+a;if(!this._isHashChangeSupported()){this._iframe.document.open().close();
this._iframe.location.hash="#"+a}}}return true};n.fragment=function(){var a="";
if(this._pushState){a=(window.location.pathname).substr(this.root.length)}else{if(this._hashChange){a=window.location.hash.substr(1)
}}return a===""?"/":a};o.exports=m},{"@marcom/ac-dom-events":101,"@marcom/ac-event-emitter":116,"@marcom/ac-object":123}],138:[function(r,s,p){var n=r("@marcom/ac-object").create;
var l=r("@marcom/ac-dom-emitter").DOMEmitter;var q=r("./History");var m=r("@marcom/ac-routes").Route;
var u=r("@marcom/ac-routes").Routes;function t(a){a=a||{};this._intercept=a.intercept||"[data-route]";
this._interceptAttribute=a.attribute||"href";this._handleTrigger=this._handleTrigger.bind(this);
this.intercept(this._intercept);this.history=a.history||new q({root:a.root,autoStart:a.autoStart,pushState:a.pushState,hashChange:a.hashChange,resolveInitialHash:a.resolveInitialHash});
u.call(this,a.routes);if(a.autoStart){if(!this.history.started){this.history.start()
}this.start()}}var o=t.prototype=n(u.prototype);o._handleTrigger=function(a){if(!this.started){return
}var b=a.target.getAttribute(this._interceptAttribute);if(b){if(/^(http|https):\/\/+/.exec(b)&&this._interceptAttribute==="href"){b=b.substr(b.indexOf(this.history.root)+this.history.root.length)||"/"
}if(this.navigate(b)){a.preventDefault()}}};o._handlePopstate=function(a){this.navigate(a.fragment,true)
};o.start=function(){if(!this.started){this.started=true;this.history.start();this._handlePopstate=this._handlePopstate.bind(this);
this.history.on("popstate",this._handlePopstate);this.navigate(this.history.fragment(),true)
}};o.stop=function(){if(this.started){this.started=false;this.history.stop();this.history.off("popstate",this._handlePopstate)
}};o.navigate=function(a,b){if(this.history.fragment()===a&&!b){return this.history.canUpdate()
}if(a&&!b){if(!this.history.navigate(a)){return false}}this.match(a);return true
};o.intercept=function(a,c){var b=new l(c||document.body);b.on("click",a,this._handleTrigger)
};s.exports=t},{"./History":137,"@marcom/ac-dom-emitter":96,"@marcom/ac-object":123,"@marcom/ac-routes":133}],139:[function(f,i,g){var h={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
i.exports=f("./parseUserAgent")(h)},{"./parseUserAgent":142}],140:[function(d,g,f){g.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],141:[function(d,g,f){g.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(a){return(a.ua.indexOf("Edge")>-1||a.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
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
},{}],142:[function(r,s,p){var q=r("./defaults");var m=r("./dictionary");function n(a){return new RegExp(a+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function o(g,a){if(typeof g.parseVersion==="function"){return g.parseVersion(a)
}else{var d=g.version||g.userAgent;if(typeof d==="string"){d=[d]}var f=d.length;
var c;for(var b=0;b<f;b++){c=a.match(n(d[b]));if(c&&c.length>1){return c[1].replace(/_/g,".")
}}}}function k(a,d,g){var h=a.length;var f;var c;for(var i=0;i<h;i++){if(typeof a[i].test==="function"){if(a[i].test(g)===true){f=a[i].name
}}else{if(g.ua.indexOf(a[i].userAgent)>-1){f=a[i].name}}if(f){d[f]=true;c=o(a[i],g.ua);
if(typeof c==="string"){var b=c.split(".");d.version.name=c;if(b&&b.length>0){d.version.major=parseInt(b[0]||0);
d.version.minor=parseInt(b[1]||0);d.version.patch=parseInt(b[2]||0)}}else{if(f==="edge"){d.version.name="12.0.0";
d.version.major="12";d.version.minor="0";d.version.patch="0"}}if(typeof a[i].parseDocumentMode==="function"){d.version.documentMode=a[i].parseDocumentMode()
}return d}}return d}function l(a){var b={};b.browser=k(m.browser,q.browser,a);b.os=k(m.os,q.os,a);
return b}s.exports=l},{"./defaults":140,"./dictionary":141}],143:[function(d,g,f){arguments[4][14][0].apply(f,arguments)
},{"./../maps/focusableElement":149,dup:14}],144:[function(d,g,f){arguments[4][15][0].apply(f,arguments)
},{"./../maps/ariaMap":148,"./TabManager":143,"./setAttributes":146,dup:15}],145:[function(d,g,f){arguments[4][17][0].apply(f,arguments)
},{dup:17}],146:[function(d,g,f){arguments[4][18][0].apply(f,arguments)},{dup:18}],147:[function(d,g,f){arguments[4][19][0].apply(f,arguments)
},{"./../maps/ariaMap":148,"./removeAttributes":145,"./setAttributes":146,dup:19}],148:[function(d,g,f){arguments[4][21][0].apply(f,arguments)
},{dup:21}],149:[function(d,g,f){arguments[4][22][0].apply(f,arguments)},{dup:22}],150:[function(i,m,j){var l=i("./request/factory");
var n={complete:function(a,b){},error:function(a,b){},method:"GET",headers:{},success:function(b,c,a){},timeout:5000};
var k=function(){for(var a=1;a<arguments.length;a++){for(var b in arguments[a]){if(arguments[a].hasOwnProperty(b)){arguments[0][b]=arguments[a][b]
}}}return arguments[0]};var o={ajax:function(c,b){b=k({},n,b);if(c.substr(0,2)==="//"){c=window.location.protocol+c
}var a=l(c);a.open(b.method,c);a.setTransportHeaders(b.headers);a.setReadyStateChangeHandlers(b.complete,b.error,b.success);
a.setTimeout(b.timeout,b.error,b.complete);a.send(b.data);return a},get:function(b,a){a.method="GET";
return o.ajax(b,a)},head:function(b,a){a.method="HEAD";return o.ajax(b,a)},post:function(b,a){a.method="POST";
return o.ajax(b,a)}};m.exports=o},{"./request/factory":151}],151:[function(q,r,o){var k=q("./xmlhttprequest");
var l=q("./xdomainrequest");var m=/.*(?=:\/\/)/;var s=/^.*:\/\/|\/.+$/g;var p=window.XDomainRequest&&document.documentMode<10;
var n=function(a){if(!a.match(m)){return false}var b=a.replace(s,"");return b!==window.location.hostname
};r.exports=function(c,b){var a=p&&n(c)?l:k;return new a()}},{"./xdomainrequest":153,"./xmlhttprequest":154}],152:[function(f,h,g){var i=function(){};
i.create=function(){var a=function(){};a.prototype=i.prototype;return new a()};
i.prototype.open=function(a,b){a=a.toUpperCase();this.xhr.open(a,b)};i.prototype.send=function(a){this.xhr.send(a)
};i.prototype.setTimeout=function(a,b,c){this.xhr.ontimeout=function(){b(this.xhr,this.status);
c(this.xhr,this.status)}.bind(this)};i.prototype.setTransportHeaders=function(b){for(var a in b){this.xhr.setRequestHeader(a,b[a])
}};h.exports=i},{}],153:[function(h,k,i){var l=h("./request");var m=h("@marcom/ac-object/toQueryParameters");
var j=function(){this.xhr=new XDomainRequest()};j.prototype=l.create();j.prototype.setReadyStateChangeHandlers=function(c,b,a){this.xhr.onerror=function(){b(this.xhr,this.status);
c(this.xhr,this.status)}.bind(this);this.xhr.onload=function(){a(this.xhr.responseText,this.xhr.status,this.xhr);
c(this.xhr,this.status)}.bind(this)};j.prototype.send=function(a){if(a&&typeof a==="object"){a=m(a)
}this.xhr.send(a)};j.prototype.setTransportHeaders=function(a){};k.exports=j},{"./request":152,"@marcom/ac-object/toQueryParameters":218}],154:[function(g,j,h){var k=g("./request");
var i=function(){this.xhr=new XMLHttpRequest()};i.prototype=k.create();i.prototype.setReadyStateChangeHandlers=function(c,b,a){this.xhr.onreadystatechange=function(d){if(this.xhr.readyState===4){clearTimeout(this.timeout);
if(this.xhr.status>=200&&this.xhr.status<300){a(this.xhr.responseText,this.xhr.status,this.xhr);
c(this.xhr,this.status)}else{b(this.xhr,this.status);c(this.xhr,this.status)}}}.bind(this)
};j.exports=i},{"./request":152}],155:[function(d,g,f){g.exports={log:d("./ac-console/log")}
},{"./ac-console/log":156}],156:[function(l,k,h){var i="f7c9180f-5c45-47b4-8de4-428015f096c0";
var m=!!(function(){try{return window.localStorage.getItem(i)}catch(a){}}());k.exports=function j(){if(window.console&&typeof console.log!=="undefined"&&m){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],157:[function(d,g,f){arguments[4][36][0].apply(f,arguments)},{"./shared/getEventType":164,"./utils/addEventListener":165,dup:36}],158:[function(d,g,f){arguments[4][37][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":159,"./shared/prefixHelper":160,"./shared/windowFallbackEventTypes":161,"./utils/eventTypeAvailable":162,dup:37}],159:[function(d,g,f){arguments[4][38][0].apply(f,arguments)
},{dup:38}],160:[function(d,g,f){arguments[4][39][0].apply(f,arguments)},{dup:39}],161:[function(d,g,f){arguments[4][40][0].apply(f,arguments)
},{dup:40}],162:[function(d,g,f){arguments[4][41][0].apply(f,arguments)},{dup:41}],163:[function(d,g,f){arguments[4][42][0].apply(f,arguments)
},{"./shared/getEventType":164,"./utils/removeEventListener":166,dup:42}],164:[function(d,g,f){arguments[4][43][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":158,dup:43}],165:[function(d,g,f){arguments[4][29][0].apply(f,arguments)
},{dup:29}],166:[function(d,g,f){arguments[4][30][0].apply(f,arguments)},{dup:30}],167:[function(d,g,f){arguments[4][49][0].apply(f,arguments)
},{dup:49}],168:[function(d,g,f){arguments[4][50][0].apply(f,arguments)},{dup:50}],169:[function(d,g,f){arguments[4][79][0].apply(f,arguments)
},{dup:79}],170:[function(d,g,f){arguments[4][51][0].apply(f,arguments)},{dup:51}],171:[function(d,g,f){arguments[4][52][0].apply(f,arguments)
},{dup:52}],172:[function(d,g,f){arguments[4][53][0].apply(f,arguments)},{"../isNode":176,dup:53}],173:[function(d,g,f){arguments[4][54][0].apply(f,arguments)
},{"../COMMENT_NODE":167,"../DOCUMENT_FRAGMENT_NODE":168,"../ELEMENT_NODE":170,"../TEXT_NODE":171,"./isNodeType":172,dup:54}],174:[function(d,g,f){arguments[4][84][0].apply(f,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":168,"./internal/isNodeType":172,dup:84}],175:[function(d,g,f){arguments[4][55][0].apply(f,arguments)
},{"./ELEMENT_NODE":170,"./internal/isNodeType":172,dup:55}],176:[function(d,g,f){arguments[4][56][0].apply(f,arguments)
},{dup:56}],177:[function(d,g,f){arguments[4][57][0].apply(f,arguments)},{"./internal/validate":173,dup:57}],178:[function(d,g,f){arguments[4][89][0].apply(f,arguments)
},{"@marcom/ac-dom-nodes/COMMENT_NODE":167,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":168,"@marcom/ac-dom-nodes/DOCUMENT_NODE":169,"@marcom/ac-dom-nodes/ELEMENT_NODE":170,"@marcom/ac-dom-nodes/TEXT_NODE":171,"@marcom/ac-dom-nodes/isNode":176,"@marcom/ac-polyfills/Array/prototype.indexOf":221,dup:89}],179:[function(d,g,f){arguments[4][91][0].apply(f,arguments)
},{"./internal/validate":178,"./shims/querySelectorAll":180,"@marcom/ac-polyfills/Array/prototype.slice":222,dup:91}],180:[function(d,g,f){arguments[4][93][0].apply(f,arguments)
},{"@marcom/ac-dom-nodes/isDocumentFragment":174,"@marcom/ac-dom-nodes/isElement":175,"@marcom/ac-dom-nodes/remove":177,"@marcom/ac-polyfills/Array/prototype.indexOf":221,dup:93}],181:[function(C,D,A){var t;
var u=C("@marcom/ac-object/extend");var y=C("@marcom/ac-object/create");var s=C("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var E=C("@marcom/ac-dom-traversal/querySelectorAll");var w=C("@marcom/ac-dom-events/addEventListener");
var F=C("@marcom/ac-dom-events/removeEventListener");var G=C("@marcom/ac-console");
try{t=C("@marcom/ac-analytics")}catch(v){G.log(v.message)}var B={dataAttribute:"analytics-share",interactionEvents:["click"],autoEnable:true};
var r=function(a){a=a||{};this.options=u(B,a);s.call(this);this.elements=[];this.eventObserver=null;
this.publishShareClick=this.publishShareClick.bind(this);if(this.options.autoEnable){this.enable()
}};var x=s.prototype;var z=r.prototype=y(x);z.enable=function(){if(!t){return false
}this._createObserver();this.bindEventListener()};z.disable=function(){if(!t){return false
}this.unbindEventListener()};z.bindEventListener=function(){var a=0;this.elements=this.populateElements();
a=this.elements.length;for(var b=0;b<a;b++){w(this.elements[b],"click",this.publishShareClick)
}};z.unbindEventListener=function(){var a=(this.elements&&this.elements.length?this.elements.length:0);
for(var b=0;b<a;b++){F(this.elements[b],"click",this.publishShareClick)}};z.populateElements=function(){return E("[data-"+this.options.dataAttribute+"]",(this.options.context||document))
};z.publishShareClick=function(b){var a=b.currentTarget;var c=this.parseDataAttribute(a.getAttribute("data-"+this.options.dataAttribute));
if(typeof c==="object"){if(!c.title){console.log("data-"+this.options.dataAttribute+" attribute must have a `title` property");
return false}this.trigger("click",c)}};z.parseDataAttribute=function(a){var c={};
try{c=JSON.parse(a)}catch(b){console.log("data-"+this.options.dataAttribute+" must be a valid JSON string")
}return c};z.destroy=function(){this.disable();this.elements=[];this.eventObserver=null;
this.publishShareClick=null;this.options=null};z._createObserver=function(){if(!t||!t.observer||!t.observer.Event){return false
}this.eventObserver=new t.observer.Event(this,this.options)};D.exports=r},{"@marcom/ac-analytics":"@marcom/ac-analytics","@marcom/ac-console":155,"@marcom/ac-dom-events/addEventListener":157,"@marcom/ac-dom-events/removeEventListener":163,"@marcom/ac-dom-traversal/querySelectorAll":179,"@marcom/ac-event-emitter-micro":186,"@marcom/ac-object/create":216,"@marcom/ac-object/extend":217}],182:[function(i,h,f){var g=i("./../AnalyticsShare");
h.exports=function(a){return new g(a)}},{"./../AnalyticsShare":181}],183:[function(i,h,f){h.exports=function g(c){if(typeof c.select==="function"){var a=false;
a=c.select();if(!a){c.setSelectionRange(0,c.value.length)}}else{var d=document.createRange();
d.selectNodeContents(c);var b=window.getSelection();b.removeAllRanges();b.addRange(d)
}}},{}],184:[function(k,j,h){var l="f7c9180f-5c45-47b4-8de4-428015f096c0";var m=!!window.localStorage.getItem(l);
j.exports=function i(a){return function(){if(m&&typeof(window.console)==="object"){return console[a].apply(console,Array.prototype.slice.call(arguments,0))
}}}},{}],185:[function(d,g,f){g.exports=d("./internal/expose")("log")},{"./internal/expose":184}],186:[function(d,g,f){arguments[4][1][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":187,dup:1}],187:[function(d,g,f){arguments[4][2][0].apply(f,arguments)
},{dup:2}],188:[function(d,g,f){arguments[4][3][0].apply(f,arguments)},{dup:3}],189:[function(d,g,f){arguments[4][4][0].apply(f,arguments)
},{"./helpers/globals":188,"./touchAvailable":193,"@marcom/ac-function/once":209,dup:4}],190:[function(d,g,f){arguments[4][5][0].apply(f,arguments)
},{"./isDesktop":189,"./isTablet":192,"@marcom/ac-function/once":209,dup:5}],191:[function(g,k,h){var j=g("./helpers/globals");
k.exports=function i(){var a=j.getWindow();return("devicePixelRatio" in a&&a.devicePixelRatio>=1.5)
}},{"./helpers/globals":188}],192:[function(d,g,f){arguments[4][6][0].apply(f,arguments)
},{"./helpers/globals":188,"./isDesktop":189,"@marcom/ac-function/once":209,dup:6}],193:[function(d,g,f){arguments[4][7][0].apply(f,arguments)
},{"./helpers/globals":188,"@marcom/ac-function/once":209,dup:7}],194:[function(d,g,f){arguments[4][36][0].apply(f,arguments)
},{"./shared/getEventType":200,"./utils/addEventListener":201,dup:36}],195:[function(d,g,f){arguments[4][37][0].apply(f,arguments)
},{"./shared/camelCasedEventTypes":196,"./shared/prefixHelper":197,"./shared/windowFallbackEventTypes":198,"./utils/eventTypeAvailable":199,dup:37}],196:[function(d,g,f){arguments[4][38][0].apply(f,arguments)
},{dup:38}],197:[function(d,g,f){arguments[4][39][0].apply(f,arguments)},{dup:39}],198:[function(d,g,f){arguments[4][40][0].apply(f,arguments)
},{dup:40}],199:[function(d,g,f){arguments[4][41][0].apply(f,arguments)},{dup:41}],200:[function(d,g,f){arguments[4][43][0].apply(f,arguments)
},{"@marcom/ac-prefixer/getEventType":195,dup:43}],201:[function(d,g,f){arguments[4][29][0].apply(f,arguments)
},{dup:29}],202:[function(d,g,f){g.exports=d("./fullscreen")},{"./fullscreen":208}],203:[function(d,g,f){g.exports={STANDARD:"standard",IOS:"ios"}
},{}],204:[function(u,w,r){var s=u("@marcom/ac-dom-events/addEventListener");var o=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var y=u("./../events/types");var x=u("./../consts/modes");var v=new o();function p(a){v.trigger(y.ENTERFULLSCREEN,a)
}function n(a){v.trigger(y.EXITFULLSCREEN,a)}function t(a){if(v.fullscreenElement()){p(a)
}else{n(a)}}function q(){s(document,"fullscreenchange",t)}q();v.fullscreenEnabled=function(b){var a=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled;
return !!(a)};v.fullscreenElement=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitCurrentFullScreenElement
};v.exitFullscreen=function(b){var a;if(typeof document.exitFullscreen==="function"){a="exitFullscreen"
}else{if(typeof document.webkitExitFullscreen==="function"){a="webkitExitFullscreen"
}else{if(typeof document.webkitCancelFullScreen==="function"){a="webkitCancelFullScreen"
}else{if(typeof document.mozCancelFullScreen==="function"){a="mozCancelFullScreen"
}else{if(typeof document.msExitFullscreen==="function"){a="msExitFullscreen"}}}}}if(typeof document[a]==="function"){document[a].call(document)
}};v.requestFullscreen=function(b){var a;if(typeof b.requestFullscreen==="function"){a="requestFullscreen"
}else{if(typeof b.webkitRequestFullscreen==="function"){a="webkitRequestFullscreen"
}else{if(typeof b.webkitRequestFullScreen==="function"){a="webkitRequestFullScreen"
}else{if(typeof b.mozRequestFullScreen==="function"){a="mozRequestFullScreen"}else{if(typeof b.msRequestFullscreen==="function"){a="msRequestFullscreen"
}}}}}if(typeof b[a]==="function"){b[a].call(b)}};v.mode=x.STANDARD;w.exports=v},{"./../consts/modes":203,"./../events/types":207,"@marcom/ac-dom-events/addEventListener":194,"@marcom/ac-event-emitter-micro":186}],205:[function(k,j,h){var g=k("./ios");
var i=k("./desktop");j.exports={create:function(){var a=i;if("webkitEnterFullscreen" in document.createElement("video")&&!("webkitRequestFullScreen" in document.createElement("div"))){a=g
}return a}}},{"./desktop":204,"./ios":206}],206:[function(u,v,s){var t=u("@marcom/ac-dom-events/addEventListener");
var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;var y=u("./../events/types");
var w=u("./../consts/modes");var o;x();function x(){t(document,"webkitbeginfullscreen",p,true);
t(document,"webkitendfullscreen",q,true)}function p(a){r.trigger(y.ENTERFULLSCREEN,a)
}function q(a){o=undefined;r.trigger(y.EXITFULLSCREEN,a)}var r=new n();r.fullscreenEnabled=function(a){return !!(a.webkitSupportsFullscreen)
};r.fullscreenElement=function(){return o};r.exitFullscreen=function(a){if(a&&typeof a.webkitExitFullscreen==="function"){a.webkitExitFullscreen()
}};r.requestFullscreen=function(a){if(typeof a.webkitEnterFullscreen==="function"){a.webkitEnterFullscreen()
}};r.mode=w.IOS;v.exports=r},{"./../consts/modes":203,"./../events/types":207,"@marcom/ac-dom-events/addEventListener":194,"@marcom/ac-event-emitter-micro":186}],207:[function(d,g,f){g.exports={ENTERFULLSCREEN:"enterfullscreen",EXITFULLSCREEN:"exitfullscreen"}
},{}],208:[function(q,r,p){var l=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var m=q("./delegate/factory");var s="Error: Element missing. ac-fullscreen requires an element to be specified";
var o=m.create();function k(){throw new Error(s)}var n={};n.requestFullscreen=function(a){if(!a){k()
}return o.requestFullscreen(a)};n.fullscreenEnabled=function(a){if(!a){k()}return o.fullscreenEnabled(a)
};n.fullscreenElement=function(){return o.fullscreenElement()};n.exitFullscreen=function(a){if(!a){k()
}return o.exitFullscreen(a)};n.getMode=function(){return o.mode};n.on=function(){return o.on.apply(o,arguments)
};n.off=function(){return o.off.apply(o,arguments)};n.once=function(){return o.once.apply(o,arguments)
};r.exports=n},{"./delegate/factory":205,"@marcom/ac-event-emitter-micro":186}],209:[function(d,g,f){arguments[4][8][0].apply(f,arguments)
},{dup:8}],210:[function(f,i,g){i.exports=function h(c,a){var b=null;return function(){if(b===null){c.apply(this,arguments);
b=setTimeout(function(){b=null},a)}}}},{}],211:[function(d,g,f){arguments[4][29][0].apply(f,arguments)
},{dup:29}],212:[function(d,g,f){arguments[4][30][0].apply(f,arguments)},{dup:30}],213:[function(d,g,f){arguments[4][32][0].apply(f,arguments)
},{"./internal/KeyEvent":214,"@marcom/ac-dom-events/utils/addEventListener":211,"@marcom/ac-dom-events/utils/removeEventListener":212,"@marcom/ac-event-emitter-micro":186,"@marcom/ac-object/create":216,dup:32}],214:[function(d,g,f){arguments[4][34][0].apply(f,arguments)
},{dup:34}],215:[function(d,g,f){arguments[4][124][0].apply(f,arguments)},{"./extend":217,"@marcom/ac-polyfills/Array/isArray":219,dup:124}],216:[function(d,g,f){arguments[4][31][0].apply(f,arguments)
},{dup:31}],217:[function(d,g,f){arguments[4][60][0].apply(f,arguments)},{"@marcom/ac-polyfills/Array/prototype.forEach":220,dup:60}],218:[function(d,g,f){arguments[4][132][0].apply(f,arguments)
},{"@marcom/ac-url/joinSearchParams":278,dup:132}],219:[function(d,g,f){arguments[4][70][0].apply(f,arguments)
},{dup:70}],220:[function(d,g,f){arguments[4][71][0].apply(f,arguments)},{dup:71}],221:[function(d,g,f){arguments[4][72][0].apply(f,arguments)
},{dup:72}],222:[function(d,g,f){arguments[4][73][0].apply(f,arguments)},{dup:73}],223:[function(i,h,g){if(!Date.now){Date.now=function f(){return new Date().getTime()
}}},{}],224:[function(d,g,f){
/*! MIT License
 *
 * performance.now polyfill
 * copyright Paul Irish 2015
 *
 */
;
d("../Date/now");(function(){if("performance" in window==false){window.performance={}
}if("now" in window.performance==false){var a=Date.now();if(performance.timing&&performance.timing.navigationStart){a=performance.timing.navigationStart
}window.performance.now=function b(){return Date.now()-a}}})()},{"../Date/now":223}],225:[function(d,g,f){g.exports={SharedInstance:d("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":226}],226:[function(p,m,q){var l=window,n="AC",k="SharedInstance",o=l[n];
var j=(function(){var a={};return{get:function(c,d){var b=null;if(a[c]&&a[c][d]){b=a[c][d]
}return b},set:function(b,d,c){if(!a[b]){a[b]={}}if(typeof c==="function"){a[b][d]=new c()
}else{a[b][d]=c}return a[b][d]},share:function(b,d,c){var f=this.get(b,d);if(!f){f=this.set(b,d,c)
}return f},remove:function(c,d){var b=typeof d;if(b==="string"||b==="number"){if(!a[c]||!a[c][d]){return
}a[c][d]=null;return}if(a[c]){a[c]=null}}}}());if(!o){o=l[n]={}}if(!o[k]){o[k]=j
}m.exports=o[k]},{}],227:[function(o,m,i){var j=o("@marcom/ac-shared-instance").SharedInstance;
var l="ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",n="1.0.3";
var k=function(){this._currentID=0};k.prototype.getNewID=function(){this._currentID++;
return"raf:"+this._currentID};m.exports=j.share(l,n,k)},{"@marcom/ac-shared-instance":225}],228:[function(d,g,f){arguments[4][225][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":229,dup:225}],229:[function(d,g,f){arguments[4][226][0].apply(f,arguments)
},{dup:226}],230:[function(g,j,h){g("@marcom/ac-polyfills/performance/now");var i;
function k(a){a=a||{};this._reset();this._willRun=false;this._totalSubscribeCount=-1;
this._requestAnimationFrame=window.requestAnimationFrame;this._cancelAnimationFrame=window.cancelAnimationFrame;
this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);this._boundOnExternalAnimationFrame=this._onExternalAnimationFrame.bind(this)
}i=k.prototype;i.subscribe=function(b,a){this._totalSubscribeCount++;if(!this._nextFrameSubscribers[b.id]){if(a){this._nextFrameSubscribersOrder.unshift(b.id)
}else{this._nextFrameSubscribersOrder.push(b.id)}this._nextFrameSubscribers[b.id]=b;
this._nextFrameSubscriberArrayLength++;this._nextFrameSubscriberCount++;this._run()
}return this._totalSubscribeCount};i.unsubscribe=function(a){if(!this._nextFrameSubscribers[a.id]){return false
}this._nextFrameSubscribers[a.id]=null;this._nextFrameSubscriberCount--;if(this._nextFrameSubscriberCount===0){this._cancel()
}return true};i.trigger=function(a,b){var c;for(c=0;c<this._subscriberArrayLength;
c++){if(this._subscribers[this._subscribersOrder[c]]!==null&&this._subscribers[this._subscribersOrder[c]]._didDestroy===false){this._subscribers[this._subscribersOrder[c]].trigger(a,b)
}}};i.destroy=function(){var a=this._cancel();this._subscribers=null;this._subscribersOrder=null;
this._nextFrameSubscribers=null;this._nextFrameSubscribersOrder=null;this._rafData=null;
this._boundOnAnimationFrame=null;this._onExternalAnimationFrame=null;return a};
i.useExternalAnimationFrame=function(b){if(typeof b!=="boolean"){return}var a=this._isUsingExternalAnimationFrame;
if(b&&this._animationFrame){this._cancelAnimationFrame.call(window,this._animationFrame);
this._animationFrame=null}if(this._willRun&&!b&&!this._animationFrame){this._animationFrame=this._requestAnimationFrame.call(window,this._boundOnAnimationFrame)
}this._isUsingExternalAnimationFrame=b;if(b){return this._boundOnExternalAnimationFrame
}return a||false};i._run=function(){if(!this._willRun){this._willRun=true;if(this.lastFrameTime===0){this.lastFrameTime=performance.now()
}this._animationFrameActive=true;if(!this._isUsingExternalAnimationFrame){this._animationFrame=this._requestAnimationFrame.call(window,this._boundOnAnimationFrame)
}return true}};i._cancel=function(){var a=false;if(this._animationFrameActive){if(this._animationFrame){this._cancelAnimationFrame.call(window,this._animationFrame);
this._animationFrame=null}this._animationFrameActive=false;this._willRun=false;
a=true}if(!this._isRunning){this._reset()}return a};i._onSubscribersAnimationFrameStart=function(a){var b;
for(b=0;b<this._subscriberArrayLength;b++){if(this._subscribers[this._subscribersOrder[b]]!==null&&this._subscribers[this._subscribersOrder[b]]._didDestroy===false){this._subscribers[this._subscribersOrder[b]]._onAnimationFrameStart(a)
}}};i._onSubscribersAnimationFrameEnd=function(a){var b;for(b=0;b<this._subscriberArrayLength;
b++){if(this._subscribers[this._subscribersOrder[b]]!==null&&this._subscribers[this._subscribersOrder[b]]._didDestroy===false){this._subscribers[this._subscribersOrder[b]]._onAnimationFrameEnd(a)
}}};i._onAnimationFrame=function(a){this._subscribers=this._nextFrameSubscribers;
this._subscribersOrder=this._nextFrameSubscribersOrder;this._subscriberArrayLength=this._nextFrameSubscriberArrayLength;
this._subscriberCount=this._nextFrameSubscriberCount;this._nextFrameSubscribers={};
this._nextFrameSubscribersOrder=[];this._nextFrameSubscriberArrayLength=0;this._nextFrameSubscriberCount=0;
this._isRunning=true;this._willRun=false;this._didRequestNextRAF=false;this._rafData.delta=a-this.lastFrameTime;
this.lastFrameTime=a;this._rafData.fps=0;if(this._rafData.delta>=1000){this._rafData.delta=0
}if(this._rafData.delta!==0){this._rafData.fps=1000/this._rafData.delta}this._rafData.time=a;
this._rafData.naturalFps=this._rafData.fps;this._rafData.timeNow=Date.now();this._onSubscribersAnimationFrameStart(this._rafData);
this.trigger("update",this._rafData);this.trigger("external",this._rafData);this.trigger("draw",this._rafData);
this._onSubscribersAnimationFrameEnd(this._rafData);if(!this._willRun){this._reset()
}};i._onExternalAnimationFrame=function(a){if(!this._isUsingExternalAnimationFrame){return
}this._onAnimationFrame(a)};i._reset=function(){this._rafData={time:0,delta:0,fps:0,naturalFps:0,timeNow:0};
this._subscribers={};this._subscribersOrder=[];this._subscriberArrayLength=0;this._subscriberCount=0;
this._nextFrameSubscribers={};this._nextFrameSubscribersOrder=[];this._nextFrameSubscriberArrayLength=0;
this._nextFrameSubscriberCount=0;this._didEmitFrameData=false;this._animationFrame=null;
this._animationFrameActive=false;this._isRunning=false;this._shouldReset=false;
this.lastFrameTime=0};j.exports=k},{"@marcom/ac-polyfills/performance/now":224}],231:[function(o,l,i){var j=o("@marcom/ac-shared-instance").SharedInstance;
var k="ac-raf-executor:sharedRAFExecutorInstance",m="2.0.1";var n=o("./RAFExecutor");
l.exports=j.share(k,m,n)},{"./RAFExecutor":230,"@marcom/ac-shared-instance":228}],232:[function(o,n,p){var l;
var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;var q=o("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
var j=o("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
function k(a){a=a||{};m.call(this);this.id=j.getNewID();this.executor=a.executor||q;
this._reset();this._willRun=false;this._didDestroy=false}l=k.prototype=Object.create(m.prototype);
l.run=function(){if(!this._willRun){this._willRun=true}return this._subscribe()
};l.cancel=function(){this._unsubscribe();if(this._willRun){this._willRun=false
}this._reset()};l.destroy=function(){var a=this.willRun();this.cancel();this.executor=null;
m.prototype.destroy.call(this);this._didDestroy=true;return a};l.willRun=function(){return this._willRun
};l.isRunning=function(){return this._isRunning};l._subscribe=function(){return this.executor.subscribe(this)
};l._unsubscribe=function(){return this.executor.unsubscribe(this)};l._onAnimationFrameStart=function(a){this._isRunning=true;
this._willRun=false;if(!this._didEmitFrameData){this._didEmitFrameData=true;this.trigger("start",a)
}};l._onAnimationFrameEnd=function(a){if(!this._willRun){this.trigger("stop",a);
this._reset()}};l._reset=function(){this._didEmitFrameData=false;this._isRunning=false
};n.exports=k},{"@marcom/ac-event-emitter-micro":186,"@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance":227,"@marcom/ac-raf-executor/sharedRAFExecutorInstance":231}],233:[function(h,m,i){var l=h("./SingleCallRAFEmitter");
var j=function(a){this.rafEmitter=new l();this.rafEmitter.on(a,this._onRAFExecuted.bind(this));
this.requestAnimationFrame=this.requestAnimationFrame.bind(this);this.cancelAnimationFrame=this.cancelAnimationFrame.bind(this);
this._frameCallbacks=[];this._nextFrameCallbacks=[];this._currentFrameID=-1;this._cancelFrameIdx=-1;
this._frameCallbackLength=0;this._nextFrameCallbacksLength=0;this._frameCallbackIteration=0
};var k=j.prototype;k.requestAnimationFrame=function(a){this._currentFrameID=this.rafEmitter.run();
this._nextFrameCallbacks.push(this._currentFrameID,a);this._nextFrameCallbacksLength+=2;
return this._currentFrameID};k.cancelAnimationFrame=function(a){this._cancelFrameIdx=this._nextFrameCallbacks.indexOf(a);
if(this._cancelFrameIdx===-1){return}this._nextFrameCallbacks.splice(this._cancelFrameIdx,2);
this._nextFrameCallbacksLength-=2;if(this._nextFrameCallbacksLength===0){this.rafEmitter.cancel()
}};k._onRAFExecuted=function(a){this._frameCallbacks=this._nextFrameCallbacks;this._frameCallbackLength=this._nextFrameCallbacksLength;
this._nextFrameCallbacks=[];this._nextFrameCallbacksLength=0;for(this._frameCallbackIteration=0;
this._frameCallbackIteration<this._frameCallbackLength;this._frameCallbackIteration+=2){this._frameCallbacks[this._frameCallbackIteration+1](a.time,a)
}};m.exports=j},{"./SingleCallRAFEmitter":235}],234:[function(h,m,i){var j=h("./RAFInterface");
var k=function(){this.events={}};var l=k.prototype;l.requestAnimationFrame=function(a){if(!this.events[a]){this.events[a]=new j(a)
}return this.events[a].requestAnimationFrame};l.cancelAnimationFrame=function(a){if(!this.events[a]){this.events[a]=new j(a)
}return this.events[a].cancelAnimationFrame};m.exports=new k()},{"./RAFInterface":233}],235:[function(m,l,h){var i=m("./RAFEmitter");
var k=function(a){i.call(this,a)};var j=k.prototype=Object.create(i.prototype);
j._subscribe=function(){return this.executor.subscribe(this,true)};l.exports=k},{"./RAFEmitter":232}],236:[function(f,i,g){var h=f("./RAFInterfaceController");
i.exports=h.cancelAnimationFrame("draw")},{"./RAFInterfaceController":234}],237:[function(f,i,g){var h=f("./RAFInterfaceController");
i.exports=h.requestAnimationFrame("draw")},{"./RAFInterfaceController":234}],238:[function(d,g,f){g.exports={getContentDimensions:d("./getContentDimensions"),getDimensions:d("./getDimensions"),getPagePosition:d("./getPagePosition"),getPercentInViewport:d("./getPercentInViewport"),getPixelsInViewport:d("./getPixelsInViewport"),getPosition:d("./getPosition"),getScrollX:d("./getScrollX"),getScrollY:d("./getScrollY"),getViewportPosition:d("./getViewportPosition"),isInViewport:d("./isInViewport")}
},{"./getContentDimensions":239,"./getDimensions":240,"./getPagePosition":241,"./getPercentInViewport":242,"./getPixelsInViewport":243,"./getPosition":244,"./getScrollX":245,"./getScrollY":246,"./getViewportPosition":247,"./isInViewport":248}],239:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b=1;if(a){b=g(c).width/c.offsetWidth}return{width:c.scrollWidth*b,height:c.scrollHeight*b}
}},{"./utils/getBoundingClientRect":249}],240:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b;if(a){b=g(c);return{width:b.width,height:b.height}
}return{width:c.offsetWidth,height:c.offsetHeight}}},{"./utils/getBoundingClientRect":249}],241:[function(n,m,o){var q=n("./getDimensions");
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
}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}}},{"./getDimensions":240,"./utils/getBoundingClientRect":249}],245:[function(d,g,f){arguments[4][47][0].apply(f,arguments)
},{dup:47}],246:[function(d,g,f){arguments[4][48][0].apply(f,arguments)},{dup:48}],247:[function(n,m,o){var l=n("./getPagePosition");
var p=n("./utils/getBoundingClientRect");var q=n("./getScrollX");var j=n("./getScrollY");
m.exports=function k(c,f){var d;var a;var b;if(f){d=p(c);return{top:d.top,right:d.right,bottom:d.bottom,left:d.left}
}d=l(c);a=q();b=j();return{top:d.top-b,right:d.right-a,bottom:d.bottom-b,left:d.left-a}
}},{"./getPagePosition":241,"./getScrollX":245,"./getScrollY":246,"./utils/getBoundingClientRect":249}],248:[function(h,l,i){var j=h("./getPixelsInViewport");
var m=h("./getPercentInViewport");l.exports=function k(b,a,d){var c;d=d||0;if(typeof d==="string"&&d.slice(-2)==="px"){d=parseInt(d,10);
c=j(b,a)}else{c=m(b,a)}return(c>0&&c>=d)}},{"./getPercentInViewport":242,"./getPixelsInViewport":243}],249:[function(i,h,f){h.exports=function g(b){var a=b.getBoundingClientRect();
return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}
}},{}],250:[function(B,D,z){var v=B("@marcom/ac-event-emitter-micro");var G=B("@marcom/ac-dom-metrics");
var F=B("@marcom/ac-keyboard/Keyboard");var s={num:37,string:"ArrowLeft"};var r={num:38,string:"ArrowUp"};
var u={num:39,string:"ArrowRight"};var x={num:40,string:"ArrowDown"};var w=[s,u,x,u];
var C=function(c){if(c.which){return c.which}var b=(c.key)?c.key:c.code;var a=0;
var d=w.length;for(;a<d;a++){if(w[a].string===b){return w[a].num}}return -1};var E={min:0,max:1,step:1,value:0,orientation:"horizontal",renderedPosition:false,template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>',keyboardMaxStepPercentage:0.05,keyboardStepMultiplier:1.25};
var t=Object.keys(E);var A=function(b,c){this.options=Object.assign({},E,c);this.model=Object.create(this.options);
this.el=b;var a=(this.options.keyboardContext!==undefined)?this.options.keyboardContext:this.el;
if(a!==null){this._keyboard=new F(a);this._keyDown={}}b.className+=" ac-slider-container";
b.innerHTML=this.model.template;v.EventEmitterMicro.call(this);this.initialize()
};A.prototype=Object.create(v.EventEmitterMicro.prototype);var y=A.prototype;y.addEventListeners=function(){this.addEventListener(this.el,"mousedown",this.onMouseDown);
this.addEventListener(this.el,"touchstart",this.onTouchStart);this.addEventListener(this.el,"mouseover",this.onMouseOver);
this.addEventListener(this.el,"mouseleave",this.onMouseLeave);this.addEventListener(this.el,"touchend",this.onTouchEnd);
this.addEventListener(document,"touchend",this.onMouseUp);if(this._keyboard){if(this.model.orientation==="horizontal"){this._keyboard.onDown(u.num,this.stepUp);
this._keyboard.onDown(s.num,this.stepDown)}else{this._keyboard.onDown(x.num,this.stepDown);
this._keyboard.onDown(r.num,this.stepUp)}}};y.addEventListener=function(c,b,a){c.addEventListener(b,a)
};y.bindMethods=function(){this.stepDown=this.stepDown.bind(this);this.stepUp=this.stepUp.bind(this);
this._triggerRelease=this._triggerRelease.bind(this);this._preventDefault=this._preventDefault.bind(this);
this.onMouseDown=this.bindMethod(this.onMouseDown,this);this.onTouchStart=this.bindMethod(this.onTouchStart,this);
this.onMouseOver=this.bindMethod(this.onMouseOver,this);this.onMouseLeave=this.bindMethod(this.onMouseLeave,this);
this.onTouchEnd=this.bindMethod(this.onTouchEnd,this);this.onMouseUp=this.bindMethod(this.onMouseUp,this);
this.onMouseMove=this.bindMethod(this.onMouseMove,this);this.onTouchMove=this.bindMethod(this.onTouchMove,this)
};y.bindMethod=function(a,b){return a.bind(b)};y.correctValueMinMax=function(a,b,c){if(a>c){a=c
}if(a<b){a=b}return a};y.calculateStepsToValue=function(a,b){return Math.abs(a-b)
};y.calculateMaxSteps=function(a,b){return Math.abs(b-a)};y.calculateStepsEqualToPercentage=function(a,b){return(a/100)*b
};y.calculateNextStepInRange=function(a,g,h,b){var d=this.calculateMaxSteps(g,h);
var c=this.calculateStepsToValue(a,g);var f=g+(Math.floor(d/b)*b);a=Math.min(f,g+Math.round(c/b)*b);
return a};y.dispatchEvent=function(b,a){b.dispatchEvent(new CustomEvent(a))};y.disableUserControls=function(){this.removeEventListeners()
};y.enableUserControls=function(){this.addEventListeners()};y.getNextValue=function(a,c,d,b){a=this.correctValueMinMax(a,c,d);
if(b!=="auto"){a=this.calculateNextStepInRange(a,c,d,b)}return a};y.getOrientation=function(){return this.model.orientation
};y.getValue=function(){return this.model.value};y.getMin=function(){return this.model.min
};y.getMax=function(){return this.model.max};y.getStep=function(){return this.model.step
};y.getClientXValue=function(f,d){var a=this.getClientXFromEvent(f);var c=(d!==null)?G.getDimensions(d||this.thumbElement):{width:0,height:0};
var b=G.getDimensions(this.runnableTrackElement);var j=a-this.runnableTrackElement.getBoundingClientRect().left-Math.round(c.width/2);
var g=b.width-c.width;var k=j/(g)*100;var i=this.calculateMaxSteps(this.getMin(),this.getMax());
var h=this.calculateStepsEqualToPercentage(k,i);return this.getMin()+h};y.getClientYValue=function(f){var a=this.getClientYFromEvent(f);
var c=G.getDimensions(this.thumbElement);var b=G.getDimensions(this.runnableTrackElement);
var k=G.getViewportPosition(this.runnableTrackElement,this.model.renderedPosition);
var g=b.height-c.height;var d=g-(a-k.top-(c.height/2));var j=d/(b.height-c.height)*100;
var i=this.calculateMaxSteps(this.model.min,this.model.max);var h=this.calculateStepsEqualToPercentage(j,i);
return this.model.min+h};y.getClientValue=function(a){a=a.originalEvent||a;var b;
if(this.model.orientation==="horizontal"){b=this.getClientXValue(a)}else{b=this.getClientYValue(a)
}return b};y.getClientXFromEvent=function(a){return a.touches?a.touches[0].clientX:a.clientX
};y.getClientYFromEvent=function(a){return a.touches?a.touches[0].clientY:a.clientY
};y.initialize=function(){this.setNodeReferences();this.setValue(this.model.value);
this.bindMethods();this.addEventListeners()};y.onMouseLeave=function(){this.preventDocumentMouseUpDispatch=false
};y.onMouseDown=function(a){var b=this.getClientValue(a);this.addEventListener(document,"mouseup",this.onMouseUp);
this.addEventListener(document,"mousemove",this.onMouseMove);this.trigger("grab",this.getValue());
this.setValue(b)};y.onMouseUp=function(){this.removeEventListener(document,"mouseup",this.onMouseUp);
this.removeEventListener(document,"mousemove",this.onMouseMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"mouseup")}};
y.onMouseOver=function(){this.preventDocumentMouseUpDispatch=true};y.onTouchEnd=function(){this.removeEventListener(document,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchmove",this.onTouchMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"touchend")
}};y.onTouchStart=function(a){var b=this.getClientValue(a);this.addEventListener(document,"touchend",this.onMouseUp);
this.addEventListener(document,"touchmove",this.onTouchMove);this.trigger("grab",this.getValue());
this.setValue(b)};y.onMouseMove=function(a){var b=this.getClientValue(a);this.setValue(b)
};y.onTouchMove=function(a){if(a.preventDefault){a.preventDefault()}var b=this.getClientValue(a);
this.setValue(b)};y.getElementOrientationOffsetValue=function(a,b){if(b==="horizontal"){return G.getDimensions(a).width
}return G.getDimensions(a).height};y.getAvailableRunnableTrack=function(a,c){var b=this.getElementOrientationOffsetValue(this.thumbElement,c);
return a-b};y.getPercentageByValue=function(a,b){a=this.calculateStepsToValue(a,this.getMin());
b=this.calculateMaxSteps(this.getMin(),this.getMax());return(a/b)*100};y.getPercentageOfRunnableTrack=function(b){var f=this.getOrientation();
var a=this.getElementOrientationOffsetValue(this.runnableTrackElement,f);var g=this.getAvailableRunnableTrack(a,f);
var c=this.getPercentageByValue(b,this.getMax());var d=(c/100)*g;return(d/a)*100
};y.onChange=function(a){var b=this.getPercentageOfRunnableTrack(a);if(isNaN(b)){return
}if(this.getOrientation()==="horizontal"){this.thumbElement.style.left=b+"%"}else{this.thumbElement.style.bottom=b+"%"
}this.trigger("change",this.getValue())};y.removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchend",this.onMouseUp)};y.removeEventListener=function(c,b,a){c.removeEventListener(b,a)
};y.setNodeReferences=function(){this.runnableTrackElement=this.el.querySelector(".ac-slider-runnable-track");
this.thumbElement=this.el.querySelector(".ac-slider-thumb")};y.setOrientation=function(a){this.set("orientation",a)
};y._triggerRelease=function(a){this._preventDefault(a);this.trigger("release",this.getValue());
this._keyDown[C(a)]=0};y._preventDefault=function(a){a.preventDefault();a.stopPropagation()
};y._step=function(b,c){this._preventDefault(b);this.el.focus();var a=this._keyDown[C(b)]||0;
if(!a){this.trigger("grab",this.getValue());a=this.getStep();a=(a!=="auto")?a:this._cachedMaxStep;
if(!c){a*=-1}this._keyboard.onceUp(C(b),this._triggerRelease)}else{if(Math.abs(this._keyDown[C(b)])<(Math.abs(this.model.max*this.model.keyboardMaxStepPercentage))){a*=this.model.keyboardStepMultiplier
}}this._keyDown[C(b)]=a;this.setValue(this.getValue()+a)};y.stepUp=function(a){this._step(a,true)
};y.stepDown=function(a){this._step(a,false)};y.setValue=function(a){a=this.getNextValue(a,this.getMin(),this.getMax(),this.getStep());
this.set("value",a);this.el.setAttribute("aria-valuenow",a);this.onChange(a)};y.setMin=function(a){this.set("min",a);
this.el.setAttribute("aria-valuemin",a)};y.setMax=function(a){this.set("max",a);
this.el.setAttribute("aria-valuemax",a);this._cachedMaxStep=a/100};y.setStep=function(a){this.set("step",a)
};y.set=function(c,a){if(t.indexOf(c)>-1&&this.model[c]!==a){var b=this.model[c];
this.model[c]=a;this.trigger("change:model:"+c,{previous:b,current:a})}};y._removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchend",this.onMouseUp);if(this.model.orientation==="horizontal"){this._keyboard.offDown(u.num,this.stepUp);
this._keyboard.offDown(s.num,this.stepDown);this._keyboard.offUp(s.num,this._triggerRelease);
this._keyboard.offUp(u.num,this._triggerRelease)}else{this._keyboard.offDown(x.num,this.stepDown);
this._keyboard.offDown(r.num,this.stepUp);this._keyboard.offUp(x.num,this._triggerRelease);
this._keyboard.offUp(r.num,this._triggerRelease)}};y.destroy=function(){this._removeEventListeners();
if(this._keyboard){this._keyboard.destroy()}v.EventEmitterMicro.prototype.destroy.call(this)
};D.exports=A},{"@marcom/ac-dom-metrics":238,"@marcom/ac-event-emitter-micro":186,"@marcom/ac-keyboard/Keyboard":213}],251:[function(d,g,f){g.exports.Slider=d("./Slider")
},{"./Slider":250}],252:[function(d,g,f){g.exports=d("./lib/")},{"./lib/":253}],253:[function(d,g,f){arguments[4][119][0].apply(f,arguments)
},{"./parse":254,"./stringify":255,dup:119}],254:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000};j.parseValues=function(f,a){var s={};
var t=f.split(a.delimiter,a.parameterLimit===Infinity?undefined:a.parameterLimit);
for(var r=0,c=t.length;r<c;++r){var v=t[r];var d=v.indexOf("]=")===-1?v.indexOf("="):v.indexOf("]=")+1;
if(d===-1){s[i.decode(v)]=""}else{var b=i.decode(v.slice(0,d));var u=i.decode(v.slice(d+1));
if(!s.hasOwnProperty(b)){s[b]=u}else{s[b]=[].concat(s[b]).concat(u)}}}return s};
j.parseObject=function(b,q,c){if(!b.length){return q}var p=b.shift();var a={};if(p==="[]"){a=[];
a=a.concat(j.parseObject(b,q,c))}else{var d=p[0]==="["&&p[p.length-1]==="]"?p.slice(1,p.length-1):p;
var f=parseInt(d,10);var o=""+f;if(!isNaN(f)&&p!==d&&o===d&&f>=0&&f<=c.arrayLimit){a=[];
a[f]=j.parseObject(b,q,c)}else{a[d]=j.parseObject(b,q,c)}}return a};j.parseKeys=function(d,r,p){if(!d){return
}var c=/^([^\[\]]*)/;var q=/(\[[^\[\]]*\])/g;var a=c.exec(d);if(Object.prototype.hasOwnProperty(a[1])){return
}var b=[];if(a[1]){b.push(a[1])}var f=0;while((a=q.exec(d))!==null&&f<p.depth){++f;
if(!Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))){b.push(a[1])}}if(a){b.push("["+d.slice(a.index)+"]")
}return j.parseObject(b,r,p)};k.exports=function(q,a){if(q===""||q===null||typeof q==="undefined"){return{}
}a=a||{};a.delimiter=typeof a.delimiter==="string"||i.isRegExp(a.delimiter)?a.delimiter:j.delimiter;
a.depth=typeof a.depth==="number"?a.depth:j.depth;a.arrayLimit=typeof a.arrayLimit==="number"?a.arrayLimit:j.arrayLimit;
a.parameterLimit=typeof a.parameterLimit==="number"?a.parameterLimit:j.parameterLimit;
var f=typeof q==="string"?j.parseValues(q,a):q;var s={};var b=Object.keys(f);for(var r=0,d=b.length;
r<d;++r){var c=b[r];var t=j.parseKeys(c,f[c],a);s=i.merge(s,t)}return i.compact(s)
}},{"./utils":256}],255:[function(g,k,h){var i=g("./utils");var j={delimiter:"&",indices:true};
j.stringify=function(r,a,d){if(i.isBuffer(r)){r=r.toString()}else{if(r instanceof Date){r=r.toISOString()
}else{if(r===null){r=""}}}if(typeof r==="string"||typeof r==="number"||typeof r==="boolean"){return[encodeURIComponent(a)+"="+encodeURIComponent(r)]
}var f=[];if(typeof r==="undefined"){return f}var q=Object.keys(r);for(var b=0,p=q.length;
b<p;++b){var c=q[b];if(!d.indices&&Array.isArray(r)){f=f.concat(j.stringify(r[c],a,d))
}else{f=f.concat(j.stringify(r[c],a+"["+c+"]",d))}}return f};k.exports=function(r,d){d=d||{};
var f=typeof d.delimiter==="undefined"?j.delimiter:d.delimiter;d.indices=typeof d.indices==="boolean"?d.indices:j.indices;
var a=[];if(typeof r!=="object"||r===null){return""}var q=Object.keys(r);for(var b=0,p=q.length;
b<p;++b){var c=q[b];a=a.concat(j.stringify(r[c],c,d))}return a.join(f)}},{"./utils":256}],256:[function(f,i,g){var h={};
g.arrayToObject=function(b){var a={};for(var c=0,d=b.length;c<d;++c){if(typeof b[c]!=="undefined"){a[c]=b[c]
}}return a};g.merge=function(a,b){if(!b){return a}if(typeof b!=="object"){if(Array.isArray(a)){a.push(b)
}else{a[b]=true}return a}if(typeof a!=="object"){a=[a].concat(b);return a}if(Array.isArray(a)&&!Array.isArray(b)){a=g.arrayToObject(a)
}var d=Object.keys(b);for(var o=0,k=d.length;o<k;++o){var n=d[o];var c=b[n];if(!a[n]){a[n]=c
}else{a[n]=g.merge(a[n],c)}}return a};g.decode=function(a){try{return decodeURIComponent(a.replace(/\+/g," "))
}catch(b){return a}};g.compact=function(r,o){if(typeof r!=="object"||r===null){return r
}o=o||[];var a=o.indexOf(r);if(a!==-1){return o[a]}o.push(r);if(Array.isArray(r)){var q=[];
for(var c=0,p=r.length;c<p;++c){if(typeof r[c]!=="undefined"){q.push(r[c])}}return q
}var b=Object.keys(r);for(c=0,p=b.length;c<p;++c){var d=b[c];r[d]=g.compact(r[d],o)
}return r};g.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"
};g.isBuffer=function(a){if(a===null||typeof a==="undefined"){return false}return !!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))
}},{}],257:[function(d,g,f){g.exports={Link:d("./ac-social/Link"),Dialog:d("./ac-social/Dialog"),Focus:d("./ac-social/Focus"),Debug:d("./ac-social/Debug")}
},{"./ac-social/Debug":258,"./ac-social/Dialog":259,"./ac-social/Focus":260,"./ac-social/Link":261}],258:[function(m,l,h){var i=m("./NetworkActions");
function j(){this.types={};var a;for(a in i){if(i.hasOwnProperty(a)){k[a]=a;this.addType(a,i[a].getDialogDebugData.bind(i[a]))
}}}var k=j.prototype;k.create=function(c,a){a=a||{};var b=this.types[c];if(!b){return
}return b(a)};k.addType=function(b,a){this.types[b]=a;return this};k.removeType=function(){this.types[name]=null;
return this};l.exports=new j()},{"./NetworkActions":262}],259:[function(l,k,m){var i=l("./NetworkActions");
function h(){this.types={};var a;for(a in i){if(i.hasOwnProperty(a)){j[a]=a;this.addType(a,i[a].generateDialog.bind(i[a]))
}}}var j=h.prototype;j.create=function(c,a){a=a||{};var b=this.types[c];if(!b){return
}return b(a)};j.addType=function(b,a){this.types[b]=a;return this};j.removeType=function(){this.types[name]=null;
return this};k.exports=new h()},{"./NetworkActions":262}],260:[function(d,g,f){g.exports=function(a){if(window.getSelection){var b=window.getSelection();
var c=document.createRange();c.selectNodeContents(a);b.removeAllRanges();b.addRange(c)
}else{if(a.setSelectionRange){a.setSelectionRange(0,a.value.length)}else{if(document.body.createTextRange){var c=document.body.createTextRange();
c.moveToElementText(a);c.select()}}}}},{}],261:[function(m,l,o){var j=m("./NetworkActions"),i=m("./network-actions/DefaultNetworkAction");
function n(){this.types={};var a;for(a in j){if(j.hasOwnProperty(a)){k[a]=a;this.addType(a,j[a].generateLink.bind(j[a]))
}}}var k=n.prototype;k.create=function(c,a,d){a=a||{};var b=this.types[c];if(!b){return
}return b(a,d)};k.createFromAnchor=function(a){var c=a.getAttribute("data-network-action");
var b;for(b in j){if(j.hasOwnProperty(b)){if(c===j[b].id){j[b].enhanceLinkEngagement(a);
return}}}i.enhanceLinkEngagement(a)};k.addType=function(b,a){this.types[b]=a;return this
};k.removeType=function(){this.types[name]=null;return this};l.exports=new n()},{"./NetworkActions":262,"./network-actions/DefaultNetworkAction":263}],262:[function(B,C,z){var t=B("./network-actions/FacebookShare"),u=B("./network-actions/PinterestShare"),s=B("./network-actions/TumblrShare"),A=B("./network-actions/TwitterFavorite"),x=B("./network-actions/TwitterReply"),q=B("./network-actions/TwitterRetweet"),r=B("./network-actions/TwitterTweet"),v=B("./network-actions/WeiboShare"),D=B("./network-actions/QQWeiboShare"),w=B("./network-actions/QZoneShare"),y=B("./network-actions/RenrenShare"),E=B("./network-actions/EMailShare");
C.exports={FACEBOOK_SHARE:t,PINTEREST_SHARE:u,TUMBLR_SHARE:s,TWITTER_FAVORITE:A,TWITTER_REPLY:x,TWITTER_RETWEET:q,TWITTER_TWEET:r,WEIBO_SHARE:v,QQWEIBO_SHARE:D,QZONE_SHARE:w,RENREN_SHARE:y,EMAIL_SHARE:E}
},{"./network-actions/EMailShare":264,"./network-actions/FacebookShare":265,"./network-actions/PinterestShare":267,"./network-actions/QQWeiboShare":268,"./network-actions/QZoneShare":269,"./network-actions/RenrenShare":270,"./network-actions/TumblrShare":271,"./network-actions/TwitterFavorite":272,"./network-actions/TwitterReply":273,"./network-actions/TwitterRetweet":274,"./network-actions/TwitterTweet":275,"./network-actions/WeiboShare":276}],263:[function(k,j,h){var i=k("./NetworkAction");
var g=function(a){return a};j.exports=new i(g,{baseLinkPath:""})},{"./NetworkAction":266}],264:[function(k,j,h){var i=k("./NetworkAction");
var g=function(a){var b={url:a.url};if(a.title){b.subject=a.title}if(a.description){b.body=a.description+"\r\n\r\n"+a.url
}else{b.body=a.url}return b};j.exports=new i(g,{id:"email-share",baseLinkPath:"mailto:",preventDialog:true})
},{"./NetworkAction":266}],265:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){return{u:a.url}
};j.exports=new i(g,{id:"facebook-share",baseLinkPath:"https://www.facebook.com/sharer/sharer.php",dialogDimensions:{width:555,height:368}})
},{"./NetworkAction":266}],266:[function(m,l,h){var i=m("qs");var j;var k=function(a,b){b=b||{};
this.baseLinkPath=b.baseLinkPath;if(b.dialogDimensions){this.dialogDimensions=b.dialogDimensions
}if(b.id){this.id=b.id}if(b.preventDialog){this.preventDialog=b.preventDialog}this.normalizeData=a
};j=k.prototype;j.dataAttributeName="network-action";j.id="network-action";j.normalizeData=function(a){return a
};j.dialogDimensions={width:500,height:500};j.generateLinkURL=function(a){var b=this.normalizeData(a),c=i.stringify(b),d=this.baseLinkPath;
if(c.length>0){d=d+"?"+c}return d};j.generateLink=function(a,b){var c=this.generateLinkURL(a);
b=b||document.createElement("A");b.setAttribute("href",c);b.setAttribute("target","_blank");
b.setAttribute("data-"+this.dataAttributeName,this.id);this.enhanceLinkEngagement(b,c);
return b};j.generateDialog=function(a){var b=this.generateLinkURL(a);this._triggerDialog(b)
};j.enhanceLinkEngagement=function(a,c){var b=this||j;c=c||a.getAttribute("href");
a.addEventListener("click",this._onLinkEngaged.bind(this,c))};j.getDialogOptions=function(){var b,a="status=1",c={width:this.dialogDimensions.width,height:this.dialogDimensions.height};
c.top=(window.screen.availHeight-c.height)/2;c.left=(window.screen.availWidth-c.width)/2;
for(b in c){if(c.hasOwnProperty(b)){a+=", "+b+"="+c[b]}}return a};j.getDialogDebugData=function(a){return{data:this.normalizeData(a),dialogUrl:this.generateLinkURL(a)}
};j._triggerDialog=function(a){if(this.preventDialog){window.location.href=a;return
}window.open(a,"_blank",this.getDialogOptions())};j._onLinkEngaged=function(b,a){a.preventDefault();
this._triggerDialog(b)};l.exports=k},{qs:252}],267:[function(k,j,h){var i=k("./NetworkAction");
var g=function(a){var b={url:a.url,description:a.description};if(a.media){b.media=a.media
}return b};j.exports=new i(g,{id:"pinterest-share",baseLinkPath:"http://www.pinterest.com/pin/create/button",dialogDimensions:{width:750,height:450}})
},{"./NetworkAction":266}],268:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){return{url:a.url,title:a.title,pic:a.media}
};j.exports=new i(g,{id:"qq-weibo-share",baseLinkPath:"http://v.t.qq.com/share/share.php",dialogDimensions:{width:658,height:506}})
},{"./NetworkAction":266}],269:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){return{url:a.url,title:a.title,pics:a.media,summary:a.description}
};j.exports=new i(g,{id:"qzone-share",baseLinkPath:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",dialogDimensions:{width:620,height:645}})
},{"./NetworkAction":266}],270:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){return{url:a.url,title:a.title}
};j.exports=new i(g,{id:"renren-share",baseLinkPath:"http://www.connect.renren.com/share/sharer",dialogDimensions:{width:500,height:315}})
},{"./NetworkAction":266}],271:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){var b={clickthru:a.url,caption:a.description};
if(a.media){b.source=a.media}return b};j.exports=new i(g,{id:"tumblr-share",baseLinkPath:"http://www.tumblr.com/share/photo",dialogDimensions:{width:450,height:432}})
},{"./NetworkAction":266}],272:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){var b={tweet_id:a.messageId};
return b};j.exports=new i(g,{id:"twitter-favorite",baseLinkPath:"https://twitter.com/intent/favorite",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":266}],273:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){var b={in_reply_to:a.messageId};
if(a.hashtags){b.hashtags=a.hashtags}return b};j.exports=new i(g,{id:"twitter-reply",baseLinkPath:"https://twitter.com/intent/tweet",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":266}],274:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){var b={tweet_id:a.messageId};
return b};j.exports=new i(g,{id:"twitter-retweet",baseLinkPath:"https://twitter.com/intent/retweet",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":266}],275:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){var b={url:a.url,text:a.description};
if(a.hashtags){b.hashtags=a.hashtags}return b};j.exports=new i(g,{id:"twitter-tweet",baseLinkPath:"https://twitter.com/intent/tweet",dialogDimensions:{width:550,height:420}})
},{"./NetworkAction":266}],276:[function(k,j,h){var i=k("./NetworkAction");var g=function(a){return{url:a.url,title:a.title,pic:a.media}
};j.exports=new i(g,{id:"weibo-share",baseLinkPath:"http://service.weibo.com/share/share.php",dialogDimensions:{width:650,height:426}})
},{"./NetworkAction":266}],277:[function(f,i,g){i.exports=function h(a,b,c){if(!b){return a
}c=c||/{([^{}]*)}/g;return a.replace(c,function(l,m){var d=b[m];return(typeof d==="string"||typeof d==="number"||typeof d==="boolean")?d:l
})}},{}],278:[function(d,g,f){arguments[4][118][0].apply(f,arguments)},{dup:118,qs:279}],279:[function(d,g,f){arguments[4][119][0].apply(f,arguments)
},{"./parse":280,"./stringify":281,dup:119}],280:[function(d,g,f){arguments[4][120][0].apply(f,arguments)
},{"./utils":282,dup:120}],281:[function(d,g,f){arguments[4][121][0].apply(f,arguments)
},{"./utils":282,dup:121}],282:[function(d,g,f){arguments[4][122][0].apply(f,arguments)
},{dup:122}],283:[function(d,g,f){arguments[4][139][0].apply(f,arguments)},{"./parseUserAgent":286,dup:139}],284:[function(d,g,f){arguments[4][140][0].apply(f,arguments)
},{dup:140}],285:[function(d,g,f){arguments[4][141][0].apply(f,arguments)},{dup:141}],286:[function(d,g,f){arguments[4][142][0].apply(f,arguments)
},{"./defaults":284,"./dictionary":285,dup:142}],287:[function(g,k,h){var i=function(a){this.el=a
};var j=i.prototype;j.on=function(){this.el.addEventListener.apply(this.el,arguments)
};j.off=function(){this.el.removeEventListener.apply(this.el,arguments)};j.once=function(a,b){var c=function(){b();
this.off(a,c)}.bind(this);this.on(a,c)};j.trigger=function(b,a){var c=new CustomEvent(b,a);
this.el.dispatchEvent(c)};k.exports=i},{}],288:[function(i,n,j){var k=i("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var l=function(){k.call(this)};var o=k.prototype;l.prototype=Object.create(o);var m=l.prototype;
m.constructor=l;m.once=function(c,a,b){if(b){var d=function(){a.apply(b,arguments)
};o.once.apply(this,[c,d])}else{o.once.apply(this,arguments)}};m.on=function(c,a,d){if(arguments.length>2){if(!this._boundListeners){this._boundListeners={}
}if(!this._boundListeners[c]){this._boundListeners[c]=[]}var b=a.bind(d);this._boundListeners[c].push([a,d,b]);
return o.on.call(this,c,b)}else{return o.on.apply(this,arguments)}};m.off=function(a,f,b){if(arguments.length>2){try{var h=this._boundListeners[a];
var c=0;var d=h.length;for(;c<d;c++){if(h[c][0]===f&&h[c][1]===b){var r=h.splice(c,1)[0];
return o.off.call(this,a,r[2])}}}catch(g){}}else{return o.off.apply(this,arguments)
}};m.destroy=function(){this._boundListeners=undefined;o.destroy.call(this)};n.exports=l
},{"@marcom/ac-event-emitter-micro":186}],289:[function(d,g,f){g.exports=d("./utils/urlOptimizer/OptimizeVideoUrl")
},{"./utils/urlOptimizer/OptimizeVideoUrl":345}],290:[function(S,ah,O){var U=S("../event-emitter-shim/EventEmitterShim");
var G=S("../dom-emitter/DOMEmitterMicro");var ac=S("../video/VideoFactory").create;
var Q=S("@marcom/ac-useragent");var ab=S("@marcom/ac-fullscreen");var Z=S("../posterframe/PosterFrameFactory");
var K=S("@marcom/ac-feature/isRetina")();var aa=S("@marcom/ac-feature/isDesktop")();
var M=S("@marcom/ac-feature/isHandheld")();var R=Q.browser.safari&&Q.os.osx;var Y=Q.browser.safari&&Q.os.ios;
var ak=Q.browser.chrome;var L="user-hover";var af="mobile";var ai="initial-play";
var P="ac-video-live";var N="longform";var I=S("../ui/DefaultBreakpoints");var W=S("@marcom/ac-console/log");
var ae=S("./event/EventsToForward");var T=S("./event/ReadyStateChangeEvents");var ag=S("../utils/BreakpointDetect");
var ad=S("../ui/KeyboardControl");var V=S("@marcom/ac-accessibility/helpers/hide");
var X=S("@marcom/ac-accessibility/helpers/show");var H=function(b){b=b||{};this.el=b.el||document.createElement("div");
this._elementEmitter=new G(this.el);this.options=b;U.call(this);this._controlsFactory=b.controlsFactory;
this._urlOptimizer=b.urlOptimizer;try{var c=window.top;this._maxWidth=b.maxWidth||Math.min(window.innerWidth,1280)||Math.min(c.innerWidth,1280)
}catch(a){this._maxWidth=b.maxWidth||Math.min(window.innerWidth,1280)}this._lastResize=0;
this._lastMouseCoords={};this.el.classList.add("ac-video-player");this._isResponsive=b.responsive;
if(this._isResponsive){this._breakpointDetect=new ag({el:this.el,player:this,breakpoints:I,addClass:true})
}this._isLive=b.live;if(this._isLive){this._useLiveMode()}this._videoImpl=ac(b,this.el);
this._supportsInlineVideo=aa||!(M&&Y);this._cachedPiPMode=this.isPictureInPicture();
this._cachedReadyState=this.getReadyState();this._cachedVisibleTracksLength=0;this.el.appendChild(this._videoImpl.getMediaElement());
if(b.poster||typeof(b.poster)==="undefined"){this._initPoster(b.poster)}this._bindMethods();
this._addEventListeners();if(aa){this._keyboardControl=new ad({player:this,keyboardTarget:b.keyboardTarget})
}if(b.controls){this._initUIComponents()}if(b.parentElement){b.parentElement.appendChild(this.el)
}this.refreshSize=this.refreshSize.bind(this);setTimeout(this.refreshSize,0);window.addEventListener("DOMContentLoaded",this.refreshSize)
};H.LOADEDMETADATA=1;H.LOADEDDATA=2;H.CANPLAY=3;H.CANPLAYTHROUGH=4;var aj=U.prototype;
H.prototype=Object.create(aj);var J=H.prototype;J.constructor=H;J._bindMethods=function(){this._onStart=this._onStart.bind(this);
this._onEnded=this._onEnded.bind(this);this._onTimeUpdate=this._onTimeUpdate.bind(this);
this._onCaptionsChanged=this._onCaptionsChanged.bind(this);this._onPlay=this._onPlay.bind(this);
this._onFullscreenChange=this._onFullscreenChange.bind(this);this._forwardEvent=this._forwardEvent.bind(this);
this._onPresentationModeChanged=this._onPresentationModeChanged.bind(this);this._forwardFullScreenChangeEvent=this._forwardNamedEvent.bind(this,"fullscreen:change");
this._forwardEnterFullScreenEvent=this._forwardNamedEvent.bind(this,"enterfullscreen");
this._forwardExitFullScreenEvent=this._forwardNamedEvent.bind(this,"exitfullscreen");
this._onDurationChange=this._onDurationChange.bind(this);this._forwardReadyStateChange=this._forwardReadyStateChange.bind(this);
this._onFocusIn=this._onFocusIn.bind(this);this._onFocusOut=this._onFocusOut.bind(this);
this._showControls=this._showControls.bind(this);this._hideControls=this._hideControls.bind(this);
this._onClick=this._onClick.bind(this);this._onUserInteraction=this._onUserInteraction.bind(this);
this._onMouseLeave=this._onMouseLeave.bind(this);this._onMouseOut=this._onMouseOut.bind(this);
this._onPlayPromiseError=this._onPlayPromiseError.bind(this)};J._addEventListeners=function(){var a=0;
var b=ae.length;for(;a<b;a++){this._videoImpl.on(ae[a],this._forwardEvent)}a=0;
b=T.length;for(;a<b;a++){this._videoImpl.on(T[a],this._forwardReadyStateChange)
}this._videoImpl.on("timeupdate",this._onTimeUpdate);this._videoImpl.on("webkitpresentationmodechanged",this._onPresentationModeChanged);
this._videoImpl.on("durationchange",this._onDurationChange);this._videoImpl.on("addtrack",this._forwardEvent);
this._videoImpl.on("change",this._forwardEvent);this._videoImpl.on("change",this._onCaptionsChanged);
this._videoImpl.on("removetrack",this._forwardEvent);if(aa){ab.on("enterfullscreen",this._forwardEnterFullScreenEvent);
ab.on("exitfullscreen",this._forwardExitFullScreenEvent);ab.on("enterfullscreen",this._forwardFullScreenChangeEvent);
ab.on("exitfullscreen",this._forwardFullScreenChangeEvent)}else{if(Y){this._videoImpl.on("webkitbeginfullscreen",this._forwardEnterFullScreenEvent);
this._videoImpl.on("webkitendfullscreen",this._forwardExitFullScreenEvent);this._videoImpl.on("webkitbeginfullscreen",this._forwardFullScreenChangeEvent);
this._videoImpl.on("webkitendfullscreen",this._forwardFullScreenChangeEvent);if(M){this.on("fullscreen:change",this._onFullscreenChange)
}}}this._videoImpl.on("PlayPromiseError",this._onPlayPromiseError);this._elementEmitter.on("focusin",this._onFocusIn);
this._elementEmitter.on("focusout",this._onFocusOut);this.on("fullscreen:change",this._onFullscreenChange)
};J._removeEventListeners=function(){var a=0;var b=ae.length;for(;a<b;a++){this._videoImpl.off(ae[a],this._forwardEvent)
}a=0;b=T.length;for(;a<b;a++){this._videoImpl.off(T[a],this._forwardReadyStateChange)
}this._videoImpl.off("timeupdate",this._onTimeUpdate);this._videoImpl.off("webkitpresentationmodechanged",this._onPresentationModeChanged);
this._videoImpl.off("durationchange",this._onDurationChange);if(aa){ab.off("enterfullscreen",this._forwardEnterFullScreenEvent);
ab.off("exitfullscreen",this._forwardExitFullScreenEvent);ab.off("enterfullscreen",this._forwardFullScreenChangeEvent);
ab.off("exitfullscreen",this._forwardFullScreenChangeEvent)}else{if(Q.os.ios){this._videoImpl.off("webkitbeginfullscreen",this._forwardEnterFullScreenEvent);
this._videoImpl.off("webkitendfullscreen",this._forwardExitFullScreenEvent);this._videoImpl.off("webkitbeginfullscreen",this._forwardFullScreenChangeEvent);
this._videoImpl.off("webkitendfullscreen",this._forwardFullScreenChangeEvent)}}this._elementEmitter.off("focusin",this._onFocusIn);
this._elementEmitter.off("focusout",this._onFocusOut);this._elementEmitter.off("mouseenter",this._onUserInteraction);
if(this.controls){this.controls.el.removeEventListener("mousemove",this._onUserInteraction,true);
this.controls.el.removeEventListener("click",this._onUserInteraction,true)}if(this._blockade){this._blockade.off("mouseenter",this._onUserInteraction);
this._blockade.off("mousemove",this._onUserInteraction);this._blockade.off("click",this._onUserInteraction);
this._elementEmitter.off("click",this._onClick);if("onmouseleave" in this.el){this._blockade.off("mouseleave",this._onMouseLeave)
}else{this._blockade.off("mouseout",this._onMouseOut)}clearTimeout(this._userInteractionTimeout)
}if(this._keyboardControl){this._keyboardControl.off("keyboardinteraction",this._onUserInteraction)
}this.off("fullscreen:change",this._onFullscreenChange);this._videoImpl.off("PlayPromiseError",this._onPlayPromiseError);
clearTimeout(this._userInteractionTimeout)};J._forwardReadyStateChange=function(){var a=this.getReadyState();
if(a>this._cachedReadyState||a===0){this._cachedReadyState=a;this.trigger("readystatechange",{readyState:a})
}};J._forwardEvent=function(a){W(a.type+" time:"+this.getCurrentTime());this.trigger(a.type)
};J._forwardNamedEvent=function(a){W(a+" time:"+this.getCurrentTime());this.trigger(a)
};J._onPlayPromiseError=function(){W("play() Promise rejected, probably because the browser is blocking autoplay");
this.el.classList.add(ai);this._showStartState();this.once("play",this._onPlay)
};J._onCaptionsChanged=function(b){var a=this.getVisibleTextTracks().length;if(a>0&&this._cachedVisibleTracksLength===0){this.trigger("texttrackshow")
}else{if(a===0&&this._cachedVisibleTracksLength>0){this.trigger("texttrackhide")
}}this._cachedVisibleTracksLength=a};J._onTimeUpdate=function(){this.trigger("timeupdate",{currentTime:this.getCurrentTime()})
};J.load=function(b,c,d,f){this.refreshSize();if(!Array.isArray(b)){b=[b]}if(c&&!Array.isArray(c)){c=[{src:c}]
}this._cachedReadyState=0;if(!f){f=this.options}if(this._urlOptimizer){if(!c){c=b.map(this._urlOptimizer.getCaptionsSource).filter(function(i){return(!!i)
})}var g=this.getVisibleTextTracks();if(g&&g.length&&c&&c.length){c[0].mode="showing"
}var a=f.maxWidth||this._calcMaxWidth();b=b.map(function(i){return this._urlOptimizer.getVideoSource(i,a,null,{maxWidth:this._maxWidth})
}.bind(this))}var h=(f&&f.thumbnails)||(this._urlOptimizer&&this._urlOptimizer.getThumbnailImageSource(b[0]));
this.once("play",this._onPlay);if((this.options.autoplay&&aa)||this.getEnded()){this.once("loadstart",function(){this.play()
}.bind(this))}if(!f){f=this.options}if(f){this.setPoster(f.poster)}if(this._poster){this._poster.show()
}if(this.controls&&this.controls.sharingModule){if(f.sharing){this.controls.sharingModule.setData(f.sharing)
}else{this.controls.sharingModule.setData(null)}}if(f.live!==undefined){this._isLive=f.live;
this._useLiveMode()}this._hideEndState();this._videoImpl.load(b,c,d);if(this.controls&&this.controls.overlays){this.controls.overlays.setData(h)
}else{if(this.controls){this.once("controlsready",function(){this.controls.overlays&&this.controls.overlays.setData(h)
}.bind(this))}}if(this.controls&&this.controls.endState){this.controls.endState.setData(f.endState)
}else{if(this.controls){this.once("controlsready",function(){this.controls.endState&&this.controls.endState.setData(f.endState)
}.bind(this))}}};J._calcMaxWidth=function(){if(this.el.parentElement){return this.el.parentElement.clientWidth
}else{return this._maxWidth}};J._isActiveArea=function(a){while(a!==this.el){if(a.hasAttribute("data-acv-active-area")){return true
}a=a.parentNode}return false};J._onPresentationModeChanged=function(b){this._forwardEvent(b);
var a=this.isPictureInPicture();if(this._cachedPiPMode!==a){this._cachedPiPMode=a;
W("pictureinpicture:change to "+a);this.trigger("pictureinpicture:change")}};J._onDurationChange=function(a){if(this.getDuration()>3600){this.el.classList.add(N)
}};J.appendTo=function(a){a.appendChild(this.el);this.refreshSize()};J.getTextTracks=function(){return Array.prototype.slice.call(this._videoImpl.getTextTracks())
};J.getVisibleTextTracks=function(){var a=Array.prototype.slice.call(this._videoImpl.getTextTracks());
if(a&&a.length){a=a.filter(function(b){return b.mode==="showing"})}return a};J.getFullScreenElement=function(){if(!aa){return this.getMediaElement()
}else{return this.el}};J.getFullScreenEnabled=function(){return ab.fullscreenEnabled(this.getFullScreenElement())
};J.isFullscreen=function(){if(aa){return ab.fullscreenElement()===this.getFullScreenElement()
}else{return this._videoImpl.isFullscreen()}};J.requestFullscreen=function(){if(!this.isFullscreen()){if(this.controls){this.controls.el.display="none"
}this._hideControls();this.trigger("fullscreen:willenter",{type:"enter"});this._lastResize=Date.now();
if(ak){setTimeout(function(){this._lastResize=Date.now();ab.requestFullscreen(this.getFullScreenElement())
}.bind(this),300)}else{ab.requestFullscreen(this.getFullScreenElement())}}};J.exitFullscreen=function(){if(this.isFullscreen()){if(this.controls){this.controls.el.display="none"
}this._hideControls();this.trigger("fullscreen:willexit",{type:"exit"});if(ak){setTimeout(function(){ab.exitFullscreen(this.getFullScreenElement())
}.bind(this),300)}else{ab.exitFullscreen(this.getFullScreenElement())}}};J._onFullscreenChange=function(){this._lastResize=Date.now();
if(this.controls){this.controls.el.display=""}this._hideControls();this._preventUserInteraction=true;
setTimeout(function(){this._preventUserInteraction=false}.bind(this),750)};J.toggleFullscreen=function(){if(this.isFullscreen()){this.exitFullscreen()
}else{this.requestFullscreen()}};J._initUIComponents=function(){if(this._controlsFactory){this._instantiateDefaultCustomUIControls();
if(!aa){this.controls.el.classList.add(af);this.setControls(true)}else{this.el.appendChild(this._blockade.el)
}}else{this.setControls(true)}};J._onFocusIn=function(){clearTimeout(this._focusOutTimer);
this._focusOutTimer=null;this._hasFocus=true;if(aa){this._onUserInteraction()}};
J._onFocusOut=function(a){this._focusOutTimer=setTimeout(function(){if(this._hasFocus&&!this.el.contains(document.activeElement)){this._hasFocus=false;
this._hideControls()}}.bind(this),100)};J._showControls=function(){this.el.classList.remove(ai);
this.el.classList.add(L)};J._hideControls=function(){this.el.classList.remove(L)
};J._onControlsReady=function(){if(!this.options.autoplay||!aa){this._showStartState()
}};J._showStartState=function(){if(this.controls){this.controls.el.classList.add("start-state")
}if(this._poster){this._poster.show()}if(!aa){V(this.getMediaElement())}};J._hideStartState=function(){if(this.controls){this.controls.el.classList.remove("start-state")
}if(this._poster){this._poster.hide()}if(!aa){X(this.getMediaElement())}};J._showEndState=function(){if(this.controls){if(this.controls.mainControlsElement){if(this.controls.mainControlsElement.contains(document.activeElement)){this.controls.playButtonElement.focus()
}}else{if(this.el.contains(document.activeElement)&&!this.controls.sharingModule.el.contains(document.activeElement)){this.controls.playButtonElement.focus()
}}this.controls.el.classList.add("end-state")}if(this._poster){this._poster.show()
}V(this.getMediaElement())};J._hideEndState=function(){if(this.controls){this.controls.el.classList.remove("end-state")
}if(!aa){X(this.getMediaElement())}};J._instantiateDefaultCustomUIControls=function(){this.controls=this._controlsFactory.create({player:this,endState:this.options.endState,basePath:this.options.localizationBasePath,template:this.options.template,readyCallback:function(){if(!this.options.autoplay||!aa){this._showStartState()
}this.trigger("controlsready")}.bind(this)});if(this.controls.el.parentNode!==this.el){this.el.appendChild(this.controls.el)
}this._videoImpl.setControls(false);this._blockade=new G(document.createElement("div"));
this._blockade.el.classList.add("ac-video-blockade");if(aa){this.controls.el.addEventListener("mousemove",this._onUserInteraction,true);
this.controls.el.addEventListener("click",this._onUserInteraction,true);this._elementEmitter.on("click",this._onClick);
if("onmouseleave" in this.el){this.controls.el.addEventListener("mouseleave",this._onMouseLeave)
}else{this.controls.el.addEventListener("mouseout",this._onMouseOut,true)}if(this._keyboardControl){this._keyboardControl.on("keyboardinteraction",this._onUserInteraction)
}}return this.controls};J._onClick=function(){this._hasFocus=false};J._onMouseLeave=function(a){window.clearTimeout(this._userInteractionTimeout);
this._hideControls();this._lastMouseCoords={}};J._onMouseOut=function(a){if(!this.controls.el.contains(a.target)&&a.target!==this.controls.el){this._onMouseLeave()
}};J._onUserInteraction=function(a){this.controls.el.classList.remove("hide-cursor");
if(!this.getCurrentSrc()||this._preventUserInteraction||(a&&this._lastMouseCoords.x===a.screenX&&this._lastMouseCoords.y===a.screenY)){return
}if(a&&a.pageX){this._lastMouseCoords={x:a.screenX,y:a.screenY}}this._showControls();
window.clearTimeout(this._userInteractionTimeout);if(a&&a.target){if(this._isActiveArea(a.target)){return
}}this._userInteractionTimeout=window.setTimeout(function(){var b=this.getEnded();
if(!b){this.controls.el.classList.add("hide-cursor");this._hideControls()}}.bind(this),this.options.controlsTimeoutDuration)
};J._onPlay=function(){if(!R){this.once("timeupdate",this._onStart)}else{this.once("timeupdate",this._onStart,function(){return this.getCurrentTime()>0
}.bind(this))}};J._onStart=function(){this.el.classList.add(ai);if(this._poster){this._poster.hide()
}if(this.controls){this._hideStartState();this._hideEndState()}this.once("ended",this._onEnded)
};J._onEnded=function(){if(this.isFullscreen()){this.exitFullscreen()}if(this.controls){this._hideStartState();
this._showEndState()}this.once("timeupdate",this._onStart);if(this._poster){this._poster.show()
}};J._initPoster=function(a){this._poster=Z({player:this,video:this._videoImpl,useNativePoster:(this.options.controls===false),is2x:K,src:a});
if(this._poster.el){this.el.appendChild(this._poster.el)}if(!this.options.autoplay){this._poster.show()
}};J._useLiveMode=function(){if(this._isLive){this.el.classList.add(P)}else{this.el.classList.remove(P)
}};J.once=function(d,a,c){if(arguments.length<3||typeof c==="object"){aj.once.apply(this,arguments)
}else{var f=arguments;var b=Array.prototype.slice.call(arguments,2);var g=function(){if(b.every(function(h){return !!h()
})){f[1].apply(this,f);this.off(f[0],g)}}.bind(this);this.on(f[0],g)}};J.getMediaElement=function(){return this._videoImpl.getMediaElement()
};J.play=function(){W("play called");this._videoImpl.play()};J.pause=function(){this._videoImpl.pause()
};J.seek=function(a){this.setCurrentTime.apply(this,arguments)};J.addTextTrack=function(a){this._videoImpl.addTextTrack(a)
};J.getReadyState=function(){return this._videoImpl.getMediaElement().readyState
};J.getPreload=function(){return this._videoImpl.getPreload()};J.setPoster=function(a){this._poster.setSrc(a)
};J.getVolume=function(){return this._videoImpl.getVolume()};J.getMuted=function(){return this._videoImpl.getMuted()
};J.getCurrentTime=function(){return this._videoImpl.getCurrentTime()};J.getDuration=function(){return this._videoImpl.getDuration()
};J.getPaused=function(){return this._videoImpl.getPaused()};J.getEnded=function(){return this._videoImpl.getEnded()
};J.setCurrentTime=function(a){return this._videoImpl.setCurrentTime(a)};J.setVolume=function(a){this.trigger("uservolumechange");
return this._videoImpl.setVolume(a)};J.setMuted=function(a){this.trigger("uservolumechange");
this._videoImpl.setMuted(a)};J.setSrc=function(a){this._videoImpl.setSrc(a)};J.getCurrentSrc=function(){return this._videoImpl.getCurrentSrc()
};J.setControls=function(a){return this._videoImpl.setControls(a)};J.getMediaHeight=function(){return this._videoImpl.getMediaElement().videoHeight
};J.getMediaWidth=function(){return this._videoImpl.getMediaElement().videoWidth
};J.supportsPictureInPicture=function(){return this._videoImpl.supportsPictureInPicture()
};J.isPictureInPicture=function(){return this._videoImpl.isPictureInPicture()};
J.setPictureInPicture=function(a){return this._videoImpl.setPictureInPicture(a)
};J.supportsAirPlay=function(){return this._videoImpl.supportsAirPlay()};J.refreshSize=function(){if(this._breakpointDetect){this._breakpointDetect.refresh()
}else{this._currentBreakpoint&&this.el.classList.remove(this._currentBreakpoint.name);
this._currentBreakpoint=ag.getBreakpointFromElement(this.el,I);this.el.classList.add(this._currentBreakpoint.name)
}};J.destroy=function(){this._removeEventListeners();this._videoImpl.destroy();
if(this.controls){this.controls.destroy();this.controls=null}this._videoImpl=undefined;
this.el.innerHTML="";if(this._breakpointDetect){this._breakpointDetect.destroy()
}U.prototype.destroy.call(this)};ah.exports=H},{"../dom-emitter/DOMEmitterMicro":287,"../event-emitter-shim/EventEmitterShim":288,"../posterframe/PosterFrameFactory":296,"../ui/DefaultBreakpoints":305,"../ui/KeyboardControl":307,"../utils/BreakpointDetect":338,"../video/VideoFactory":347,"./event/EventsToForward":291,"./event/ReadyStateChangeEvents":292,"@marcom/ac-accessibility/helpers/hide":144,"@marcom/ac-accessibility/helpers/show":147,"@marcom/ac-console/log":185,"@marcom/ac-feature/isDesktop":189,"@marcom/ac-feature/isHandheld":190,"@marcom/ac-feature/isRetina":191,"@marcom/ac-fullscreen":202,"@marcom/ac-useragent":283}],291:[function(d,g,f){g.exports=["loadstart","progress","suspend","abort","error","emptied","stalled","play","pause","loadedmetadata","loadeddata","waiting","playing","canplay","canplaythrough","seeking","seeked","ended","ratechange","durationchange","volumechange","addtrack","change","removetrack"]
},{}],292:[function(d,g,f){g.exports=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","waiting","canplay","canplaythrough"]
},{}],293:[function(l,k,h){var m=l("../Player");var j=l("@marcom/ac-feature/isDesktop")();
k.exports=function i(c){if(!c){c={}}else{if(arguments.length>1){c=Object.assign.apply(null,Array.prototype.slice.apply(arguments))
}}if(!c.components){c.components=l("../../ui/DefaultComponents")}if(typeof c.controls==="undefined"){c.controls=true
}if(!c.controlsImplementation){c.controlsImplementation=l("../../ui/ControlBar")
}if(!c.controlsFactory){c.controlsFactory=l("../../ui/ControlsFactory")({controlsImplementation:c.controlsImplementation,components:c.components,template:c.controlsTemplate})
}if(typeof c.urlOptimizer!=="undefined"&&c.urlOptimizer===true||c.urlOptimizer==="true"){c.urlOptimizer=l("../../optimizeVideoUrl")
}if(!c.sources&&!c.src){c.sources=[]}else{c.sources=(c.sources)?c.sources:(c.src)?[c.src]:[]
}c.autoplay=(c.autoplay!==undefined)?c.autoplay:j;if(!c.controlsTimeoutDuration){c.controlsTimeoutDuration=3000
}var a=new m(c);var b={};if(c.sharing){b.sharing=Object.assign({},c.sharing)}if(c.thumbnails){b.thumbnails=Object.assign({},c.thumbnails)
}if(c.endState){b.endState=Object.assign({},c.endState)}if(c.sources&&c.sources.length){a.load(c.sources,c.textTracks,c.startTime,b)
}return a}},{"../../optimizeVideoUrl":289,"../../ui/ControlBar":303,"../../ui/ControlsFactory":304,"../../ui/DefaultComponents":306,"../Player":290,"@marcom/ac-feature/isDesktop":189}],294:[function(j,i,k){var g=j("./createPlayer");
i.exports=function h(a){if(arguments.length>1){a=Object.assign.apply(null,Array.prototype.slice.apply(arguments))
}if(a.localizationBasePath){a.sharing.basePath=a.localizationBasePath}return g(a)
}},{"./createPlayer":293}],295:[function(i,o,j){var k="ac-video-poster";var l="ac-video-poster-hide";
var n=function(a){this._defaultSrc=a.src;this._initialize(a)};var m=n.prototype;
m._initialize=function(b){var a=b.src;this.el=b.el||document.createElement("div");
this._imgElement=document.createElement("img");this._imgElement.src=a;this._currentSrc=a;
this._imgElement.alt="";this._imgElement.addEventListener("load",this._onLoad.bind(this));
this.el.appendChild(this._imgElement);this.hide();this.el.classList.add(k)};m.hide=function(){this.el.classList.add(l)
};m.show=function(){this.el.classList.remove(l)};m.setSrc=function(a){var b=a||this._defaultSrc;
if(b!==this._currentSrc){this._imgElement.style.display="none";this._imgElement.src=b;
this._currentSrc=b}};m._onLoad=function(){this._imgElement.style.display=""};o.exports=n
},{}],296:[function(m,l,h){var k=m("./PosterFrame");var j={"1x":"https://images.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480.jpg","2x":"https://images.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg"};
l.exports=function i(c){c.src=c.src||((c.is2x)?j["2x"]:j["1x"]);if(!c.useNativePoster){return new k(c)
}else{c.video.setPoster(c.src);var a=false;var b;return{show:function(){a=true;
if(b){c.video.setPoster(b);b=null}},hide:function(){a=false},setSrc:function(d){if(!a){b=d
}else{c.video.setPoster(d)}}}}}},{"./PosterFrame":295}],297:[function(p,n,j){var q=p("@marcom/ac-ajax-xhr");
var l=p("@marcom/ac-function/throttle");var o=p("./parseVTT");var k=function(b,a){this._view=b;
this._video=a.video;this._refreshTracks=this._refreshTracks.bind(this);this._throttledRefreshCurrentCaption=l(this._refreshCurrentCaption.bind(this),300);
this._addTrackListeners()};var m=k.prototype;m._addTrackListeners=function(){this._video.on("addtrack",this._refreshTracks);
this._video.on("removetrack",this._refreshTracks);this._video.on("change",this._refreshTracks)
};m._addVideoListeners=function(b){if(!b.cues){this._view.setText("");try{return q.get(b.src,{complete:function(c){b.cues=o(c.responseText);
this._addVideoListeners(b);this._refreshCurrentCaption()}.bind(this),error:function(c){}.bind(this)})
}catch(a){}}this._video.on("loadstart",this._refreshTracks);this._video.on("timeupdate",this._throttledRefreshCurrentCaption)
};m._removeVideoListeners=function(){this._video.off("loadstart",this._refreshTracks);
this._video.off("timeupdate",this._throttledRefreshCurrentCaption)};m._refreshTracks=function(){var a=this._video.getTextTracks();
if(a&&a.length){a=a.filter(function(b){return b.mode==="showing"})}if(a.length){this._activeTrack=a[0];
this._addVideoListeners(this._activeTrack)}else{this._activeTrack=null;this._removeVideoListeners()
}this._refreshCurrentCaption()};m._getCurrentCaptionText=function(f){var c=(this._activeTrack)?this._activeTrack.cues:null;
if(!c){return""}else{if(this._currentCaption&&this._currentCaption.startTime>=f&&this._currentCaption<=f){return this._currentCaption.text
}}var b=0;var d=c.length;var a;while(b<d){if(c[b].startTime<=f&&c[b].endTime>=f){a=c[b]
}else{if(c[b].startTime>=f){break}}b++}this._currentCaption=a;return(a)?a.text:""
};m._refreshCurrentCaption=function(){this._view.setText(this._getCurrentCaptionText(this._video.getCurrentTime()))
};m.destroy=function(){this._removeVideoListeners()};n.exports=k},{"./parseVTT":302,"@marcom/ac-ajax-xhr":150,"@marcom/ac-function/throttle":210}],298:[function(y,A,w){var p=y("../ui/factory/createComponents");
var x=y("./TextTracksBehavior");var t=y("../ui/elements/Label");var q=y("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var o='<div class="ac-video-player-text-track"></div>';var v="is-visible";var r="ac-video-player-text-track-container";
var s={textTracksPolyfill:{className:"ac-video-player-text-track",view:{classDef:t,options:{}},behavior:{classDef:x}}};
var z=function(a){q.call(this);this.container=a.container;this._video=a.video;this._initialize(a)
};var u=z.prototype=Object.create(q.prototype);u._initialize=function(a){this._onTrackChange=this._onTrackChange.bind(this);
this.el=document.createElement("div");this.el.innerHTML=a.template||o;this.el.classList.add(r);
this._tracks=a.tracks||[];this._textTrackComponent=p(this.el,s,{video:this._video})
};u._onTrackChange=function(){this.trigger("change");if(!this.el.parentElement){this._video.el.parentElement.appendChild(this.el);
this.el.firstElementChild.classList.add(v)}};u.addTrack=function(b){if(!this._tracks){this._tracks=[]
}var a=b.mode||"hidden";var c=this._onTrackChange;Object.defineProperty(b,"mode",{get:function(){return a
},set:function(d){a=d;c()},enumerable:true,configurable:true});this._tracks.push(b);
this.trigger("addtrack")};u.clearTracks=function(){this._tracks=[];this.trigger("removetrack");
this.trigger("change")};u.getTextTracks=function(){return this._tracks};u.trigger=function(b,a){return q.prototype.trigger.call(this,b,Object.assign({type:b},a||{}))
};u.destroy=function(){this._textTrackComponent.destroy();q.prototype.destroy.call(this)
};A.exports=z},{"../ui/elements/Label":322,"../ui/factory/createComponents":329,"./TextTracksBehavior":297,"@marcom/ac-event-emitter-micro":186}],299:[function(r,u,q){var m=r("@marcom/ac-useragent");
var l;if(m.browser.safari){l=function(b,a){b.track.mode=a}}else{l=function(b,a){b.mode=a
}}var p=function(c){var a;if(c instanceof HTMLElement){return this._videoElement.appendChild(c)
}var b=document.createElement("track");b.src=c.src;b.kind="captions";b.srclang=c.srclang;
if(b.srclang==="en"){b.label="English"}if(m.browser.firefox){a=this._videoElement.textTracks.length;
setTimeout(function(){this._videoElement.appendChild(b);l(this._videoElement.textTracks[a],c.mode||"hidden")
}.bind(this),0)}else{if(m.os.android){a=this._videoElement.textTracks.length;this._videoElement.appendChild(b);
l(this._videoElement.textTracks[a],c.mode||"hidden")}else{this._videoElement.appendChild(b);
l(b,c.mode||"hidden")}}};var s=function(){return this._videoElement.textTracks};
var o=function(){if(!this._textTracksEmitter){var a=r("../dom-emitter/DOMEmitterMicro");
this._textTracksEmitter=new a(this.getTextTracks())}return this._textTracksEmitter
};var t=function(d){var c=0;var b=d?d.length:0;for(;c<b;c++){var a=d[c];p.call(this,a)
}};var n=function(){};u.exports={create:t,add:p,get:s,getEmitter:o,destroy:n}},{"../dom-emitter/DOMEmitterMicro":287,"@marcom/ac-useragent":283}],300:[function(p,s,o){var q=p("./TextTracksDOM");
var l=function(b){if(!b){return}if(!this._textTracksPolyfill){this._textTracksPolyfill=new q({video:this,tracks:b,container:this._parentElement})
}else{this._textTracksPolyfill.clearTracks();var a=0;var c=b.length;for(;a<c;a++){this._textTracksPolyfill.addTrack(b[a])
}}};var n=function(a){return this._textTracksPolyfill.addTrack(a)};var r=function(){if(!this._textTracksPolyfill){this._createTextTrackTags([])
}return this._textTracksPolyfill.getTextTracks()};var m=function(){if(!this._textTracksPolyfill){this._createTextTrackTags([])
}return this._textTracksPolyfill};var k=function(){this._textTracksPolyfill.destroy();
this._textTracksPolyfill=null};s.exports={create:l,add:n,get:r,getEmitter:m,destroy:k}
},{"./TextTracksDOM":298}],301:[function(m,l,h){var j=m("@marcom/ac-useragent");
var k=!j.browser.ie&&!j.browser.edge;l.exports=function i(a){a=a||{};var b=(typeof a.useNativeCaptions==="undefined")?k:a.useNativeCaptions;
return(b)?m("./TextTracksNative"):m("./TextTracksPolyfill")}},{"./TextTracksNative":299,"./TextTracksPolyfill":300,"@marcom/ac-useragent":283}],302:[function(g,j,h){var i=g("../utils/Time");
j.exports=function k(r){var b=r.split(/\n/);var a=/([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( \-\-> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/;
var c=[];var f;var q;var d=0;var p=b.length;for(d;d<p;d++){q="";if(a.test(b[d])){f=b[d].split(" --> ");
f[0]=f[0].split(":").length<3?"00:"+f[0]:f[0];f[1]=f[1].split(":").length<3?"00:"+f[1]:f[1];
while(++d&&d<p&&!a.test(b[d])){if(b[d]!==""){q+=b[d]+"<br />"}}q=q.substr(0,q.length-6);
if(d<p){d--}c.push({startTime:i.stringToNumber(f[0].split(" ")[0]),endTime:i.stringToNumber(f[1].split(" ")[0]),text:q})
}}return c}},{"../utils/Time":339}],303:[function(z,B,x){var C=z("@marcom/ac-string/supplant");
var t=z("../utils/Time");var v=z("./localization/Localization");var q=z("./factory/createComponents");
var s="ac-video-controls";var A="control-bar-skin-default";var y=z("@marcom/ac-feature/isDesktop")();
var E=z("./overlays/OverlayContainer");var D=z("./end-state/EndStateItemContainer");
var r=z("../utils/merge");var u=function(a){this._initialize(a)};var w=u.prototype;
w._initialize=function(a){this.el=a.element||document.createElement("div");this._basePath=a.basePath;
this.el.style.display="none";this._template=a.template||'<div class="controls-container" >\n\n\t<div class="{elementClassPrefix}-social-tray hidden"></div>\n\n\t<div class="center-button-container {elementClassPrefix}-play-pause-button-container">\n\t\t<div class="button-wrapper">\n\t\t\t<button type="button" class="ac-video-icon centered-button {elementClassPrefix}-play-pause-button {elementClassPrefix}-button no-autoplay" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t</div>\n\t</div>\n\n\t<div class="main-controls-container" >\n\t\t<div class="ac-video-overlay-container" ></div>\n\t\t<div class="main-controls">\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<div class="main-controls-item controls-volume">\n\t\t\t\t\t<button type="button" class="ac-video-icon {elementClassPrefix}-toggle-mute-volume-button {elementClassPrefix}-button" value="{togglemutevolume}" aria-label="{togglemutevolume}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t\t\t<div class="{elementClassPrefix}-volume-level-indicator" tabindex="0" aria-valuemin="0" aria-valuemax="100" min="0" max="100" aria-label="{adjustvolume}" role="slider" aria-orientation="vertical" step="0.05" data-acv-active-area></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{captionscontrol}" aria-label="{captionscontrol}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="main-controls-item controls-progress">\n\t\t\t\t<div class="controls-progress-time controls-progress-time-1">\n\t\t\t\t\t<div class="{elementClassPrefix}-elapsed-time-indicator" role="text" tabindex="-1">\n\t\t\t\t\t\t<span class="label">{elapsed}</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-elapsed-time">00:00</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="controls-progress-bar">\n\t\t\t\t\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t\t\t\t\t<div class="{elementClassPrefix}-progress-indicator ac-slider-inactive" aria-label="progress-indicator" role="slider" precision="float" min="0" max="{max}" step="0.0005" value="0" tabindex="0" aria-valuemax="{max}" aria-valuemin="{min}" aria-valuenow="{value}" data-acv-active-area></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="controls-progress-time controls-progress-time-2">\n\t\t\t\t\t<div class="{elementClassPrefix}-remaining-time-indicator" role="text" tabindex="-1">\n\t\t\t\t\t\t<span class="label">{remaining}</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-remaining-time">-00:00</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="main-controls-item live-stream">\n\t\t\t\t<span class="live-stream-text">{livestream}</span>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-airplay-button {elementClassPrefix}-button airplay-unsupported" value="{airplay}" aria-label="{airplay}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-picture-in-picture-button {elementClassPrefix}-button picture-in-picture-unsupported" value="{pictureinpicture}" aria-label="{pictureinpicture}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class="end-state-wrapper">\n\t\t<div class="end-state-container"></div>\n\t</div>\n</div>\n';
this._templateData=a.templateData||Object.assign({elementClassPrefix:"controls"});
this._destroyed=false;this._localize().then(function(){if(!this._destroyed){this._initUIComponents(a);
this.el.style.display=""}if(typeof a.readyCallback==="function"){a.readyCallback()
}}.bind(this))};w._localize=function(){return new Promise(function(a){v.getTranslation({callback:function(b){a(b)
}.bind(this),basePath:this._basePath})}.bind(this)).then(function(a){this._templateData=Object.assign(this._templateData,a)
}.bind(this))};w._renderTemplateMarkup=function(){var a=C(this._template,this._templateData);
this.el.innerHTML=a};w._initDesktopControls=function(b,a){this._componentCollection=q(b,r(a,{elementClassPrefix:this._templateData.elementClassPrefix,elapsedTimeIndicator:{behavior:{observe:{source:this._player,events:["timeupdate","seeking","seeked","durationchange"],update:function(c){c.setText(t.formatTime(this._player.getCurrentTime(),this._player.getDuration()))
}.bind(this)}}},remainingTimeIndicator:{behavior:{observe:{source:this._player,events:["timeupdate","seeking","seeked","durationchange"],update:function(c){c.setText(t.formatTime(this._player.getCurrentTime()-this._player.getDuration(),this._player.getDuration()))
}.bind(this)}}},volumeLevel:{view:{options:{value:(this._player.getMuted())?0:(this._player.getVolume()*100)}}},playPauseContainer:{view:{options:{labels:{playing:this._templateData.pause,paused:this._templateData.play,ended:this._templateData.replay}}}},fullScreen:{view:{options:{labels:{initial:this._templateData.fullscreen,on:this._templateData.exitfullscreen,off:this._templateData.fullscreen}}}},pictureInPictureToggle:{view:{options:{labels:{initial:this._templateData.pictureinpicture,on:this._templateData.exitpictureinpicture,off:this._templateData.pictureinpicture}}}}}),{player:this._player,localization:this._templateData})
};w._initUIComponents=function(c){this._player=c.player;var d=this.el;var b=c.components;
d.classList.add(c.className||s);this._renderTemplateMarkup();var a=d.querySelector(".main-controls-container");
if(!y){a.parentElement.removeChild(a)}else{a.classList.add(A);this.mainControlsElement=a
}var f=d.querySelector(".end-state-container");this.endState=new D(Object.assign({},{el:f,player:this._player},c.endState));
this._initDesktopControls(d,b);this.sharingModule=this._componentCollection.components.socialShare[0].behavior.sharingModule;
if(this._componentCollection.components.progressBar.length){this.scrubberView=this._componentCollection.components.progressBar[0].view
}this.playButtonElement=this.el.querySelector(".controls-play-pause-button");if(y){this.overlays=new E({el:this.el.querySelector(".ac-video-overlay-container"),player:this._player})
}};w._setVolume=function(a){if(a){this._player.setMuted(false)}this._player.setVolume(a)
};w._thirySecondsBack=function(){var a=this._player.getCurrentTime();var b=a-30;
this._player.setCurrentTime((b<0)?0:b)};w.destroy=function(){if(this._componentCollection){this._componentCollection.destroy();
this._componentCollection=null}this._destroyed=true;this._player=null;this._templateData=null
};B.exports=u},{"../utils/Time":339,"../utils/merge":340,"./end-state/EndStateItemContainer":327,"./factory/createComponents":329,"./localization/Localization":332,"./overlays/OverlayContainer":334,"@marcom/ac-feature/isDesktop":189,"@marcom/ac-string/supplant":277}],304:[function(k,i,g){var j={components:k("./DefaultComponents"),controlsImplementation:k("./ControlBar")};
var h=function(b){b=b||{};var a=Object.assign({},j,b);return{create:function(c){var d=Object.assign({},a,c);
d.components=b.components||j.components;return new d.controlsImplementation(d)}}
};i.exports=h},{"./ControlBar":303,"./DefaultComponents":306}],305:[function(d,g,f){g.exports=[{name:"small",minWidth:0,maxWidth:479},{name:"medium",minWidth:480,maxWidth:779},{name:"large",minWidth:780,maxWidth:Infinity}]
},{}],306:[function(F,M,u){var B=F("./elements/Button");var C=F("./elements/StatefulButton");
var y=F("./elements/Label");var A=F("./elements/Slider");var z=F("./elements/Container");
var v=F("./behaviors/MuteButtonBehavior");var I=F("./behaviors/PlayPauseButtonBehavior");
var H=F("./behaviors/PictureInPictureButtonBehavior");var x=F("./behaviors/CaptionsButtonBehavior");
var D=F("./behaviors/FullScreenButtonBehavior");var G=F("./behaviors/ProgressBarSliderBehavior");
var E=F("./behaviors/VolumeSliderBehavior");var K=F("./behaviors/SharingButtonBehavior");
var L=F("./behaviors/SocialContainerBehavior");var J=F("./behaviors/AirPlayButtonBehavior");
var w=F("./elements/mixins/CursorPointer");M.exports={back30Seconds:{className:"back-30-seconds-button",view:{classDef:B}},fullScreen:{className:"full-screen-button",view:{classDef:C,options:{states:{initial:"fullscreen-unsupported",on:"is-fullscreen",off:""},labels:{initial:"fullscreen",on:"exitfullscreen",off:"fullscreen"}}},behavior:{classDef:D}},toggleMuteVolume:{className:"toggle-mute-volume-button",view:{classDef:C,options:{states:{initial:[],on:["is-muted"],off:[]}}},behavior:{classDef:v}},playPauseContainer:{className:"play-pause-button-container",view:{classDef:C,options:{states:{playing:["is-playing"],paused:[],ended:["is-ended"]}}},behavior:{classDef:I}},pictureInPictureToggle:{className:"picture-in-picture-button",view:{classDef:C,options:{states:{initial:["picture-in-picture-unsupported"],on:["is-picture-in-picture"],off:[]},labels:{initial:"pictureinpicture",on:"exitpictureinpicture",off:"pictureinpicture"}}},behavior:{classDef:H}},captionsToggle:{className:"text-tracks-toggle-button",view:{classDef:C,options:{states:{initial:["no-text-tracks"],on:["text-tracks-visible"],off:[]}}},behavior:{classDef:x}},airplayToggle:{className:"airplay-button",view:{classDef:C,options:{states:{initial:["airplay-unsupported"],on:["airplay-active"],off:[]}}},behavior:{classDef:J}},elapsedTimeIndicator:{className:"elapsed-time",view:{classDef:y}},remainingTimeIndicator:{className:"remaining-time",view:{classDef:y}},progressBar:{className:"progress-indicator",view:{classDef:A,options:{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-hover-track">\n\t\t<div class="ac-slider-hover-notch"></div>\n\t</div>\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background-wrapper">\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t</div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>',min:0,max:1,mixins:[w],orientation:"horizontal"}},behavior:{classDef:G}},volumeLevel:{className:"volume-level-indicator",view:{classDef:A,options:{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-background"></div>\n\t<div class="ac-slider-thumb-wrapper">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background-wrapper">\n\t\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>',min:0,max:100,mixins:[w],orientation:"vertical"}},behavior:{classDef:E}},sharing:{className:"sharing-button",view:{classDef:C,options:{states:{initial:["sharing-unsupported"],on:["is-sharing"],off:[]}}},behavior:{classDef:K}},socialShare:{className:"social-tray",view:{classDef:z,options:{}},behavior:{classDef:L}}}
},{"./behaviors/AirPlayButtonBehavior":308,"./behaviors/CaptionsButtonBehavior":311,"./behaviors/FullScreenButtonBehavior":312,"./behaviors/MuteButtonBehavior":313,"./behaviors/PictureInPictureButtonBehavior":314,"./behaviors/PlayPauseButtonBehavior":315,"./behaviors/ProgressBarSliderBehavior":316,"./behaviors/SharingButtonBehavior":317,"./behaviors/SocialContainerBehavior":318,"./behaviors/VolumeSliderBehavior":319,"./elements/Button":320,"./elements/Container":321,"./elements/Label":322,"./elements/Slider":323,"./elements/StatefulButton":324,"./elements/mixins/CursorPointer":325}],307:[function(w,y,v){var z=w("@marcom/ac-keyboard/Keyboard");
var o=w("@marcom/ac-event-emitter-micro").EventEmitterMicro;var s=32;var x=37;var p=38;
var t=39;var r=40;var A=function(a){o.call(this);this._player=a.player;this._target=a.keyboardTarget||this._player.el;
this._keyboard=new z(this._target);this._addEventListeners()};var q=o.prototype;
var u=A.prototype=Object.create(q);u._addEventListeners=function(){this._onLeftArrow=this._onLeftArrow.bind(this);
this._onRightArrow=this._onRightArrow.bind(this);this._onUpArrow=this._onUpArrow.bind(this);
this._onDownArrow=this._onDownArrow.bind(this);this._onSpaceBarUp=this._onSpaceBarUp.bind(this);
this._onSpaceBarDown=this._onSpaceBarDown.bind(this);this._onKeyboardInteraction=this._onKeyboardInteraction.bind(this);
this._onDurationChange=this._onDurationChange.bind(this);this._boundKeyboardInteraction={};
[s,x,t,p,r].forEach(function(a){this._boundKeyboardInteraction[a]=this._onKeyboardInteraction.bind(this,a);
this._keyboard.onDown(a,this._boundKeyboardInteraction[a])}.bind(this));this._keyboard.onDown(s,this._onSpaceBarDown);
this._keyboard.onDown(x,this._onLeftArrow);this._keyboard.onDown(t,this._onRightArrow);
this._keyboard.onDown(p,this._onUpArrow);this._keyboard.onDown(r,this._onDownArrow);
this._player.on("durationchange",this._onDurationChange)};u._onKeyboardInteraction=function(){this.trigger("keyboardinteraction")
};u._onDurationChange=function(){var a=this._player.getDuration();if(a>=60){this._interval=10
}else{if(a>=20){this._interval=5}else{this._interval=1}}};u._onLeftArrow=function(b){b.originalEvent.preventDefault();
b.originalEvent.stopPropagation();var a=this._player.getCurrentTime();if(!isNaN(a)){this._player.seek(Math.max(a-this._interval,0))
}};u._onRightArrow=function(b){b.originalEvent.preventDefault();b.originalEvent.stopPropagation();
var a=this._player.getCurrentTime();if(!isNaN(a)){this._player.seek(Math.min(a+this._interval,this._player.getDuration()))
}};u._onUpArrow=function(c){c.originalEvent.preventDefault();c.originalEvent.stopPropagation();
var b=this._player.getMuted()?0:this._player.getVolume();var a=Math.min(1,b+0.1);
this._player.setVolume(a);this._player.setMuted(false)};u._onDownArrow=function(c){c.originalEvent.preventDefault();
c.originalEvent.stopPropagation();var b=this._player.getMuted()?0:this._player.getVolume();
var a=Math.max(0,b-0.1);this._player.setVolume(a);this._player.setMuted(Math.round(a*10)===0)
};u._onSpaceBarDown=function(a){if(a.target.tagName==="BUTTON"){return}this._keyboard.offDown(s,this._onSpaceBarDown);
this._keyboard.onUp(s,this._onSpaceBarUp)};u._onSpaceBarUp=function(){this._keyboard.offUp(s,this._onSpaceBarUp);
if(this._player.getPaused()){this._player.play()}else{this._player.pause()}this._keyboard.onDown(s,this._onSpaceBarDown)
};u.destroy=function(){[s,x,t,p,r].forEach(function(a){this._keyboard.offDown(a,this._boundKeyboardInteraction[a])
}.bind(this));this._boundKeyboardInteraction=null;this._keyboard.offDown(s,this._onSpaceBarDown);
this._keyboard.offUp(s,this._onSpaceBarUp);this._keyboard.offDown(x,this._onLeftArrow);
this._keyboard.offDown(t,this._onRightArrow);this._keyboard.offDown(p,this._onUpArrow);
this._keyboard.offDown(r,this._onDownArrow);this._player.off("durationchange",this._onDurationChange);
this._keyboard.destroy();q.destroy.call(this)};y.exports=A},{"@marcom/ac-event-emitter-micro":186,"@marcom/ac-keyboard/Keyboard":213}],308:[function(i,l,j){var m=i("./ButtonBehavior");
var n=function(b,a){m.apply(this,arguments);if(this._player.supportsAirPlay()){this._airplayStateChange=this._airplayStateChange.bind(this);
this._player.getMediaElement().addEventListener("webkitplaybacktargetavailabilitychanged",this._airplayStateChange);
this._updateState=this._updateState.bind(this);this._player.getMediaElement().addEventListener("webkitcurrentplaybacktargetiswirelesschanged",this._updateState)
}};var o=m.prototype;var k=n.prototype=Object.create(o);k._airplayStateChange=function(a){if(a.availability==="available"){this._airplayAvailable=true
}else{this._airplayAvailable=false}this._updateState()};k._updateState=function(){if(this._player.getMediaElement().webkitCurrentPlaybackTargetIsWireless){this._view.setState("on")
}else{if(this._airplayAvailable){this._view.setState("off")}else{this._view.setState("initial")
}}};k._onClick=function(){this._player.getMediaElement().webkitShowPlaybackTargetPicker()
};k.destroy=function(){this._player.getMediaElement().removeEventListener("webkitplaybacktargetavailabilitychanged",this._airplayStateChange);
this._player.getMediaElement().removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",this._updateState)
};l.exports=n},{"./ButtonBehavior":310}],309:[function(i,h,f){var g=function(b,a){this._player=a.player;
this._view=b;if(this._addViewListeners){this._addViewListeners()}if(this._addPlayerListeners){this._addPlayerListeners()
}};h.exports=g},{}],310:[function(h,k,i){var l=h("./BaseBehavior");var m=function(b,a){this._onClick=this._onClick.bind(this);
l.apply(this,arguments)};var j=m.prototype=Object.create(l.prototype);j._addViewListeners=function(){this._view.on("click",this._onClick)
};j._clickHandler=function(a){a.preventDefault();this._onClick(a)};j._onClick=function(a){};
j.destroy=function(){this._view.off("click",this._onClick)};k.exports=m},{"./BaseBehavior":309}],311:[function(i,m,j){var n=i("./ButtonBehavior");
var k=function(b,a){n.apply(this,arguments);this._updateState()};var o=n.prototype;
var l=k.prototype=Object.create(o);l._updateState=function(){var a=this._player.getVisibleTextTracks();
var b=this._player.getTextTracks();if(a.length){this._view.setState("on")}else{if(b.length){this._view.setState("off")
}else{this._view.setState("initial")}}};l._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
this._player.on("addtrack",this._updateState);this._player.on("change",this._updateState);
this._player.on("removetrack",this._updateState)};l._onClick=function(){var a=this._player.getVisibleTextTracks();
var b=this._player.getTextTracks();if(a.length){b[0].mode="hidden"}else{b[0].mode="showing"
}};l.destroy=function(){this._player.off("addtrack",this._updateState);this._player.off("change",this._updateState);
this._player.off("removetrack",this._updateState);o.destroy.call(this)};m.exports=k
},{"./ButtonBehavior":310}],312:[function(i,l,j){var m=i("./ButtonBehavior");var n=function(b,a){m.apply(this,arguments);
if(this._player.getFullScreenEnabled()){this._updateState()}};var o=m.prototype;
var k=n.prototype=Object.create(o);k._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
this._player.on("fullscreen:change",this._updateState)};k._updateState=function(){this._view.setState((this._player.isFullscreen())?"on":"off")
};k._onClick=function(){this._player.toggleFullscreen(!this._player.isFullscreen())
};k.destroy=function(){this._player.off("fullscreen:change",this._updateState);
o.destroy.call(this)};l.exports=n},{"./ButtonBehavior":310}],313:[function(i,m,j){var n=i("./ButtonBehavior");
var k=function(b,a){n.apply(this,arguments);this._updateState()};var o=n.prototype;
var l=k.prototype=Object.create(o);l._updateState=function(){this._view.setState((this._player.getMuted())?"on":"off")
};l._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
this._player.on("volumechange",this._updateState)};l._onClick=function(){if(this._player.getMuted()){this._player.setMuted(false);
if(this._player.getVolume()===0){this._player.setVolume(0.1)}}else{this._player.setMuted(true)
}};l.destroy=function(){this._player.off("volumechange",this._updateState);o.destroy.call(this)
};m.exports=k},{"./ButtonBehavior":310}],314:[function(i,l,j){var m=i("./ButtonBehavior");
var n=function(b,a){m.apply(this,arguments);this._initialize()};var o=m.prototype;
var k=n.prototype=Object.create(o);k._initialize=function(){this._updateButtonState=this._updateButtonState.bind(this);
if(this._player.supportsPictureInPicture()){this._updateButtonState();this._player.on("webkitpresentationmodechanged",this._updateButtonState)
}};k._onClick=function(){this._player.setPictureInPicture(!this._player.isPictureInPicture())
};k._updateButtonState=function(){this._view.setState((this._player.isPictureInPicture())?"on":"off")
};k.destroy=function(){this._player.off("webkitpresentationmodechanged",this._updateButtonState);
o.destroy.call(this)};l.exports=n},{"./ButtonBehavior":310}],315:[function(i,m,j){var n=i("./ButtonBehavior");
var l=function(b,a){n.apply(this,arguments);this._setPlayingState()};var o=n.prototype;
var k=l.prototype=Object.create(o);k._addPlayerListeners=function(){this._setPlayingState=this._setPlayingState.bind(this);
this._player.on("play",this._setPlayingState);this._player.on("playing",this._setPlayingState);
this._player.on("pause",this._setPlayingState);this._player.on("ended",this._setPlayingState)
};k._onClick=function(){this._togglePlay()};k._setPlayingState=function(){this._view.setState((this._player.getEnded())?"ended":((this._player.getPaused())?"paused":"playing"))
};k._togglePlay=function(){if(this._player.getPaused()||this._player.getEnded()){this._player.play()
}else{this._player.pause()}};k.destroy=function(){this._player.off("play",this._setPlayingState);
this._player.off("pause",this._setPlayingState);this._player.off("playing",this._setPlayingState);
this._player.off("ended",this._setPlayingState);o.destroy.call(this)};m.exports=l
},{"./ButtonBehavior":310}],316:[function(r,t,p){var n=r("./BaseBehavior");var u=r("@marcom/ac-string/supplant");
var q="is-playing";var l=r("@marcom/ac-raf-emitter/draw");var s=r("@marcom/ac-raf-emitter/cancelDraw");
var m=function(b,a){n.apply(this,arguments);this._visible=false;this._ariaTextTemplate=a.localization.currenttimetext;
this._onDurationChange()};var o=m.prototype=Object.create(n.prototype);o._addViewListeners=function(){this._onSliderGrab=this._onSliderGrab.bind(this);
this._onSliderChange=this._onSliderChange.bind(this);this._onSliderRelease=this._onSliderRelease.bind(this);
this._view.on("grab",this._onSliderGrab)};o._addPlayerListeners=function(){this._onTimeUpdate=this._onTimeUpdate.bind(this);
this._onPlay=this._onPlay.bind(this);this._onPause=this._onPause.bind(this);this._onEnded=this._onEnded.bind(this);
this._onDurationChange=this._onDurationChange.bind(this);this._onRAF=this._onRAF.bind(this);
this._player.on("durationchange",this._onDurationChange);this._player.on("loadstart",this._onEnded);
this._player.on("ended",this._onEnded);this._player.on("timeupdate",this._onTimeUpdate);
this._player.on("play",this._onPlay);this._player.on("pause",this._onPause);this._player.on("ended",this._onEnded)
};o._setIsPlaying=function(a){if(a){this._view.setState(q)}else{this._view.clearState(q)
}};o._onPlay=function(){this._setIsPlaying(true);s(this._timeUpdateInterval);l(this._onRAF)
};o._onRAF=function(){this._onTimeUpdate();this._timeUpdateInterval=l(this._onRAF)
};o._onPause=function(){this._setIsPlaying(false);s(this._timeUpdateInterval);this._onTimeUpdate()
};o._onEnded=function(){this._onPause();this._updateSliderPosition(0)};o._onSliderGrab=function(){this._player.off("timeupdate",this._onTimeUpdate);
s(this._timeUpdateInterval);this._view.off("grab",this._onSliderGrab);this._view.on("change",this._onSliderChange);
this._view.on("release",this._onSliderRelease);this._onPause()};o._onSliderRelease=function(){this._view.off("change",this._onSliderChange);
this._view.off("release",this._onSliderRelease);this._view.on("grab",this._onSliderGrab);
this._player.on("timeupdate",this._onTimeUpdate);if(!this._player.getPaused()){this._onPlay()
}};o._getTimeAsPercent=function(){return this._player.getCurrentTime()/this._cachedDuration
};o._onDurationChange=function(){this._cachedDuration=this._player.getDuration();
this._updateSliderPosition(this._getTimeAsPercent());if(!this._player.getPaused()){this._onPlay()
}};o._onSliderChange=function(){var a=this._view.getValue();this._setPlayerCurrentTime(a*this._cachedDuration);
this._setAriaValueText(a*this._cachedDuration);this._updateScrubbedValue()};o._onTimeUpdate=function(){if(this._player.getPaused()){this._updateSliderPosition(this._getTimeAsPercent())
}else{this._updateSliderPosition(this._getTimeAsPercent())}};o._updateSliderPosition=function(a){this._view.setValue(a);
this._setAriaValueText(a*this._cachedDuration);this._updateScrubbedValue();if(!this._visible&&!isNaN(this._cachedDuration)){this._view.show();
this._visible=true}};o._setAriaValueText=function(b){var a=Math.floor(b/60);var c=Math.ceil(b%60);
this._view.setAriaValueText(u(this._ariaTextTemplate,{minutes:a,seconds:c}))};o._updateScrubbedValue=function(){this._view.setScrubbedValue()
};o._setPlayerCurrentTime=function(a){this._player.setCurrentTime(a)};o._removeEventListeners=function(){this._player.off("durationchange",this._onDurationChange);
this._player.off("loadstart",this._onEnded);this._player.off("ended",this._onEnded);
this._player.off("timeupdate",this._onTimeUpdate);this._view.off("change",this._onSliderChange);
this._view.off("release",this._onSliderRelease);this._view.off("grab",this._onSliderGrab);
this._player.off("play",this._onPlay);this._player.off("pause",this._onPause);this._player.off("ended",this._onPause)
};o.destroy=function(){this._removeEventListeners();s(this._timeUpdateInterval)
};t.exports=m},{"./BaseBehavior":309,"@marcom/ac-raf-emitter/cancelDraw":236,"@marcom/ac-raf-emitter/draw":237,"@marcom/ac-string/supplant":277}],317:[function(o,l,i){var m=o("./ButtonBehavior");
var j=function(b,a){m.apply(this,arguments);if(this._player.states){this._updateState()
}};var n=m.prototype;var k=j.prototype=Object.create(n);k._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
this._player.states&&this._player.states.on("statechange",this._updateState)};k._updateState=function(){this._stateChanging=false;
this._view.setState((this._player.states.getCurrentState()==="sharing")?"on":"off")
};k._onClick=function(){if(this._stateChanging){return}if(this._player.states.getCurrentState()==="sharing"){this._view.setState("off");
this._player.states.setState("none")}else{this._view.setState("on");this._player.states.setState("sharing")
}this._stateChanging=true};k.destroy=function(){this._player.states&&this._player.states.off("statechange",this._updateState);
n.destroy.call(this)};l.exports=j},{"./ButtonBehavior":310}],318:[function(q,o,j){var k=q("./BaseBehavior");
var l=q("../sharing/SharingModule");var m=function(b,a){k.apply(this,arguments);
this._updateState()};var p=k.prototype;var n=m.prototype=Object.create(p);n._updateState=function(){this.sharingModule=new l(Object.assign({},{player:this._player,parentView:this._view}));
this.sharingModule.setData(this._player.options.sharing);this._view.el.innerHTML="";
this._view.el.appendChild(this.sharingModule.el)};o.exports=m},{"../sharing/SharingModule":337,"./BaseBehavior":309}],319:[function(h,l,i){var m=h("./BaseBehavior");
var k=function(b,a){m.apply(this,arguments);this._hideVolume();this._updateSliderVolumeValue()
};var j=k.prototype=Object.create(m.prototype);j._addViewListeners=function(){this._showVolume=this._showVolume.bind(this);
this._hideVolume=this._hideVolume.bind(this);this._onSliderGrab=this._onSliderGrab.bind(this);
this._onSliderChange=this._onSliderChange.bind(this);this._onSliderRelease=this._onSliderRelease.bind(this);
this._onFocusChange=this._onFocusChange.bind(this);this._view.on("grab",this._onSliderGrab);
this._view.on("focuschange",this._onFocusChange)};j._addPlayerListeners=function(){this._updateSliderVolumeValue=this._updateSliderVolumeValue.bind(this);
this._onUserVolumeChange=this._onUserVolumeChange.bind(this);this._player.once("durationchange",this._updateSliderVolumeValue);
this._player.on("volumechange",this._updateSliderVolumeValue);this._player.on("uservolumechange",this._onUserVolumeChange)
};j._onSliderGrab=function(){this._cachedVolume=this._player.getVolume();this._player.off("volumechange",this._updateSliderVolumeValue);
this._view.off("grab",this._onSliderGrab);this._view.on("change",this._onSliderChange);
this._view.on("release",this._onSliderRelease)};j._onSliderRelease=function(){this._setPlayerVolume(this._view.getValue());
this._view.off("change",this._onSliderChange);this._view.off("release",this._onSliderRelease);
this._view.on("grab",this._onSliderGrab);this._player.on("volumechange",this._updateSliderVolumeValue)
};j._onSliderChange=function(){var a=this._view.getValue();this._setPlayerVolume(a);
this._view.setScrubbedValue()};j._setPlayerVolume=function(a){if(a){this._player.setMuted(false);
this._player.setVolume(a/100)}else{this._player.setMuted(true);this._player.setVolume(this._cachedVolume)
}};j._showVolume=function(){this._view.show()};j._hideVolume=function(){this._view.hide()
};j._onUserVolumeChange=function(){this._showVolume();clearTimeout(this._hideVolumeTimer);
if(!this._view.isFocused()){this._hideVolumeTimer=setTimeout(this._hideVolume,1000)
}};j._onFocusChange=function(){if(!this._view.isFocused()){this._hideVolume()}else{this._showVolume()
}};j._updateSliderVolumeValue=function(){if(this._player.getMuted()){this._view.setValue(0);
this._view.setScrubbedValue()}else{var a=this._player.getVolume();this._view.setValue(a*100);
this._view.setScrubbedValue()}};j._removeEventListeners=function(){this._player.off("durationchange",this._updateSliderVolumeValue);
this._player.off("volumechange",this._updateSliderVolumeValue);this._player.off("uservolumechange",this._onUserVolumeChange);
this._view.off("change",this._onSliderChange);this._view.off("release",this._onSliderRelease);
this._view.off("grab",this._onSliderGrab)};j.destroy=function(){this._removeEventListeners()
};l.exports=k},{"./BaseBehavior":309}],320:[function(k,j,g){var i=k("../../dom-emitter/DOMEmitterMicro");
var h=function(a){this.el=a};h.prototype=Object.create(i.prototype);j.exports=h
},{"../../dom-emitter/DOMEmitterMicro":287}],321:[function(k,j,g){var h=function(a){this.el=a
};var i=h.prototype;i.show=function(){this.el.classList.remove("hidden")};i.hide=function(){this.el.classList.add("hidden")
};i.destroy=function(a){};j.exports=h},{}],322:[function(g,k,h){var i=function(a){this.el=a
};var j=i.prototype;j.setText=function(a){this.el.innerHTML=a};k.exports=i},{}],323:[function(i,o,j){var m=i("@marcom/ac-slider").Slider;
var k="ac-slider-inactive";var n=function(a,b){this.el=a;this._min=b.min||0;this._max=b.max||1;
if(b.mixins){var c=b.mixins.slice(0);while(c.length){Object.assign(this,c.pop())
}}this._slider=new m(this.el,{template:b.template,min:this._min,max:this._max,step:isNaN(+this.el.getAttribute("step"))?this.el.getAttribute("step"):+this.el.getAttribute("step"),value:(b.value!==undefined)?b.value:(+this.el.getAttribute("value")),orientation:b.orientation,renderedPosition:true,keyboardContext:this.el});
this._onFocusChange=this._onFocusChange.bind(this);this._setHoveringValue=this._setHoveringValue.bind(this);
this._onMouseOver=this._onMouseOver.bind(this);this._onMouseLeave=this._onMouseLeave.bind(this);
this._slider.el.addEventListener("blur",this._onFocusChange);this._slider.el.addEventListener("focus",this._onFocusChange);
this._slider.el.addEventListener("mouseout",this._onFocusChange);this.forceCursorPointer=this.forceCursorPointer.bind(this);
this.disableForcedCursorPointer=this.disableForcedCursorPointer.bind(this);this._slider.on("grab",this.forceCursorPointer);
this._slider.on("release",this.disableForcedCursorPointer);this._scrubbedEl=this.el.querySelector(".ac-slider-scrubbed");
this._notchEl=this.el.querySelector(".ac-slider-hover-notch");if(this._notchEl){this._slider.el.addEventListener("mouseover",this._onMouseOver);
this._slider.el.addEventListener("mouseleave",this._onMouseLeave);this._slider.el.addEventListener("mousemove",this._setHoveringValue)
}if(b.value){requestAnimationFrame(function(){if(this._slider){this.setValue(b.value)
}}.bind(this))}};var l=n.prototype;l.on=function(){return this._slider.on.apply(this._slider,arguments)
};l.off=function(){return this._slider.off.apply(this._slider,arguments)};l.trigger=function(){return this._slider.trigger.apply(this._slider,arguments)
};l.setValue=function(a){return this._slider.setValue.call(this._slider,a)};l.setAriaValueText=function(a){this._slider.el.setAttribute("aria-valuetext",a)
};l.setMin=function(a){this._min=a;this._slider.setMin(a)};l.setMax=function(a){this._max=a;
this._slider.setMax(a)};l._onMouseOver=function(){this._slider.el.classList.add("hover")
};l._onMouseLeave=function(){this._slider.el.classList.remove("hover")};l._onFocusChange=function(){setTimeout(function(){this.trigger("focuschange")
}.bind(this),0)};l.isFocused=function(){return(this._slider.el===document.activeElement&&this._hasFocusOutline())
};l._hasFocusOutline=function(){return(getComputedStyle(this._slider.el).getPropertyValue("outline-style")!=="none")
};l.getValue=function(){return this._slider.getValue.apply(this._slider,arguments)
};l.getMax=function(){return this._max};l.setScrubbedValue=function(){if(this._slider.getOrientation()==="horizontal"){this._scrubbedEl.style.left=this._slider.thumbElement.style.left
}else{this._scrubbedEl.style.bottom=this._slider.thumbElement.style.bottom}};l._setHoveringValue=function(b){var a=this.getClientXValue(b,this._notchEl);
this._notchEl.style.left=((a/this.getMax())*100)+"%";this._setNotchColor(a)};l._setNotchColor=function(a){if(a>this.getValue()){this._notchEl.style.backgroundColor="#fff"
}else{this._notchEl.style.backgroundColor="#333"}};l.show=function(){this.el.classList.remove(k)
};l.hide=function(){this.el.classList.add(k)};l.setState=function(a){this.el.classList.add(a)
};l.clearState=function(a){this.el.classList.remove(a)};l.getClientXValue=function(b,a){return this._slider.getClientXValue(b,a)
};l.destroy=function(){this._slider.el.removeEventListener("mousemove",this._setHoveringValue);
this._slider.el.removeEventListener("mouseleave",this._onMouseOver);this._slider.el.removeEventListener("mouseout",this._onMouseLeave);
this._slider.el.removeEventListener("blur",this._onFocusChange);this._slider.el.removeEventListener("focus",this._onFocusChange);
this._slider.el.removeEventListener("mouseout",this._onFocusChange);this._slider.off("grab",this.forceCursorPointer);
this._slider.off("release",this.disableForcedCursorPointer);this._slider.destroy();
this._slider=null};o.exports=n},{"@marcom/ac-slider":251}],324:[function(m,l,h){var i=m("./Button");
var j=function(a,b){i.apply(this,arguments);this._states=b.states||{};this._labels=b.labels;
this._focusTarget=this.el.querySelector("button")||this.el;if(this._states&&this._states.initial){this.setState("initial")
}};var k=j.prototype=Object.create(i.prototype);k.setState=function(a){if(this._currentState&&this._currentState!==a&&this._states[this._currentState].length){this.el.classList.remove(this._states[this._currentState])
}this._currentState=a;if(this._labels&&this._labels[this._currentState]){this._focusTarget.value=this._labels[this._currentState];
this._focusTarget.setAttribute("aria-label",this._labels[this._currentState])}if(this._currentState==="on"){this._focusTarget.setAttribute("aria-pressed",true)
}else{this._focusTarget.setAttribute("aria-pressed",false)}if(this._states[a].length){this.el.classList.add(this._states[a])
}};l.exports=j},{"./Button":320}],325:[function(f,i,g){var h="cursor-pointer";i.exports={disableForcedCursorPointer:function(){document.body.classList.remove(h);
this.onSelectStartResumeDefault()},forceCursorPointer:function(){document.body.classList.add(h);
this.onSelectStartPreventDefault()},onSelectStartResumeDefault:function(){document.removeEventListener("selectstart",this.preventDefault)
},onSelectStartPreventDefault:function(){document.addEventListener("selectstart",this.preventDefault)
},preventDefault:function(a){a.preventDefault()}}},{}],326:[function(o,m,j){var n="hidden";
var l='<a class="end-state-link hidden"></a>\n';var i=function(a){this.el=a.el;
this.el.innerHTML=l;this._player=a.player;this._bindContent(a)};var k=i.prototype;
k._bindContent=function(b){if(b.type==="link"||b.type==="video"){var c=this.el.querySelector(".end-state-link");
var a=document.createElement("div");c.classList.remove(n);a.classList.add("end-state-text-container");
a.innerText=b.label||"";c.href=b.url||"";c.appendChild(a);if(b.type==="link"){c.classList.add("icon","icon-after","icon-chevronright")
}else{if(b.type==="video"){c.classList.add("icon","icon-after","icon-playcircle")
}}this._bindAction(this.el,b)}};k._bindAction=function(a,b){if(typeof b.onclick==="function"){a.onclick=function(c){c.preventDefault();
b.onclick.call(null,c)}.bind(this)}else{if(b.type==="video"&&b.url){a.onclick=function(c){c.preventDefault();
this._player.load(b.url,null,0,{})}.bind(this)}}};k.destroy=function(){};m.exports=i
},{}],327:[function(m,l,i){var h=m("./EndStateItem");var j=function(a){this.el=a.el;
this._player=a.player;this._addItems(a.items||[])};var k=j.prototype;k._addItems=function(a){this._items=[];
a.forEach(function(b){var d=document.createElement("div");d.classList.add("end-state-item");
var c=new h(Object.assign({},b,{el:d,player:this._player}));this.el.appendChild(d);
this._items.push(c)}.bind(this))};k.setData=function(a){while(this._items.length){this._items.pop().destroy()
}this.el.innerHTML="";if(a){this.el.classList.remove("hidden");this._addItems(a.items)
}else{this.el.classList.add("hidden")}};k.destroy=function(){while(this._items.length){this._items.pop().destroy()
}};l.exports=j},{"./EndStateItem":326}],328:[function(o,n,i){var j=function(c,a,b){return new a.classDef(c,Object.assign(a.options||{},b||{}))
};var l=function(a,b,c){return function(d){a[b](d,c)}};var k=function(E,F){var g=F.handlers||{};
var c={};for(var C in g){if(g.hasOwnProperty(C)){E.on(C,c[C]=l(g,C,E))}}var f=F.observe;
var H;if(f){var d=f.update;var A=f.source;var G=A.on.bind(A)||A.addEventListener;
var z=A.off.bind(A)||A.removeEventListener;var B=f.events;var b=0;var a=B.length;
var h=function(){d.call(f,E)};for(;b<a;b++){C=B[b];G(C,h)}H=function(){for(b=0;
b<a;b++){C=B[b];z(C,h)}}}var D=function(){for(var p in c){if(c.hasOwnProperty(p)){E.off(p,c[p])
}}if(H){H()}};return{destroy:D}};n.exports=function m(c,a,b){if(a.classDef){return j(c,a,b)
}else{return k(c,a,b)}}},{}],329:[function(r,t,p){var q=r("./createView");var s=r("./createBehavior");
var o=function(b,a){if(typeof a.destroy==="function"){a.destroy()}if(typeof b.destroy==="function"){b.destroy()
}};var n=function(a){while(a.length){a.shift().destroy()}};var l=function(b){for(var a in b){if(b.hasOwnProperty(a)){n(b[a]);
delete b[a]}}};var u=function(f,c,a){var b=q(f,c.view);var d=s(b,c.behavior,a);
return{view:b,behavior:d,destroy:o.bind(null,b,d)}};t.exports=function m(i,d,j){var b={};
for(var k in d){if(d.hasOwnProperty(k)&&typeof d[k]==="object"){var g=d[k];var h=(d.elementClassPrefix)?("."+d.elementClassPrefix+"-"+g.className):"."+g.className;
var f=i.querySelectorAll(h);b[k]=[];var c=0;var a=f.length;for(;c<a;c++){b[k].push(u(f[c],g,j))
}}}return{components:b,destroy:l.bind(null,b)}}},{"./createBehavior":328,"./createView":330}],330:[function(i,h,g){h.exports=function f(b,a){return new a.classDef(b,a.options)
}},{}],331:[function(d,g,f){g.exports={backthirtyseconds:"Back 30 Seconds",playpause:"Play/Pause",play:"Play",pause:"Pause",togglemutevolume:"Toggle Mute Volume",mutevolume:"Mute Volume",minvolume:"Minimum Volume",adjustvolume:"Adjust Volume",fastreverse:"Fast Reverse",fastforward:"Fast Forward",fullvolume:"Full Volume",fullscreen:"Full Screen",exitfullscreen:"Exit Full Screen",airplay:"AirPlay",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",subtitlescontrol:"Subtitles",subtitlesturnedon:"Subtitles On",subtitlesturnedoff:"Subtitles Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",share:"Share",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"https://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining",currenttimetext:"{minutes} minutes and {seconds} seconds",pictureinpicture:"Picture-in-Picture",exitpictureinpicture:"Exit Picture-in-Picture",closesharing:"Close Sharing",facebookshare:"Share to Facebook",twittershare:"Share to Twitter",copylink:"Copy Link",copyembed:"Copy Embed Code",copyarea:"Copy Link Text Area",selectlink:"Select Link Text",selectembed:"Select Embed Code",close:"Close",dismisscopy:"Dismiss Copy",replay:"Replay",livestream:"Live Streaming",newwindow:"Opens in New Window"}
},{}],332:[function(D,F,A){var v=D("./Translations");var z=D("./DefaultLabelStrings");
var B=window.document.documentElement;var C;try{C=window.top.document.documentElement
}catch(x){C=B}var m=D("@marcom/ac-ajax-xhr");var E="m";var u="/global/ac_"+E+"edia_player/scripts/ac_"+E+"edia_languages/";
var G="en-US";var w={};var s=function(b){var a;try{a=b||C.getAttribute("lang")}catch(d){a=B.getAttribute("lang")
}var c;if(!a){c=G}else{switch(a.toLowerCase()){case"es-418":c="es-LA";break;case"pt":c="pt-BR";
break;default:c=a;break}}return c};var y=function(a){a=s(a);return(w[a]!==undefined)
};var t=function(f){f=f||{};var c=s(f.lang);if(y(c)){if(f.callback){f.callback(w[c]);
return}else{return w[c]}}else{if(!f.callback){throw new Error("To use Localization.getTranslation you must either pass a callback or ensure the translation is ready via Localization.translationReady")
}}var d=f.basePath||u;var a=(v[c])?(d+v[c]):(d+v[G]);var b=z;m.get(a,{success:function(g){b=Object.assign(b,JSON.parse(g));
w[c]=b;f.callback(b)},error:function(){w[c]=b;f.callback(b)}})};F.exports={getLanguage:s,getTranslation:t,translationReady:y}
},{"./DefaultLabelStrings":331,"./Translations":333,"@marcom/ac-ajax-xhr":150}],333:[function(d,g,f){g.exports={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"}
},{}],334:[function(m,l,h){var j=m("./PopUp");var i=function(a){this.el=a.el;this._player=a.player;
this._popUp=new j(a);this.el.appendChild(this._popUp.el)};var k=i.prototype;k.setData=function(a){this._popUp.setData(a)
};k.show=function(){this.el.classList.remove("hidden")};k.hide=function(){this.el.classList.add("hidden")
};k.destroy=function(){};l.exports=i},{"./PopUp":335}],335:[function(t,u,r){var l='<div class="ac-video-trickplay hidden" aria-hidden="true">\n    <div class="ac-video-trickplay-image">\n    </div>\n    <div class="ac-video-trickplay-time"></div>\n</div>\n';
var p=t("../../utils/Time");var o=t("./ThumbnailHandler");var n=t("@marcom/ac-function/throttle");
var s=5;var m=function(a){this._player=a.player;this.el=document.createElement("div");
this.el.style.opacity="0";this.el.innerHTML=l;this._thumbnailHandler=new o({el:this.el.querySelector(".ac-video-trickplay-image"),player:this._player,numberOfImages:a.numberOfImages});
this._timeLabel=this.el.querySelector(".ac-video-trickplay-time");this._bindMethods();
this._addEventListeners()};var q=m.prototype;q._initPointerTracking=function(){this._scrubberView=this._player.controls.scrubberView;
if(!this._scrubberView){return}this._runnableTrack=this._scrubberView.el.querySelector(".ac-slider-runnable-track");
this._calcOffsets();this._scrubberView.el.addEventListener("mouseover",this._show);
this._scrubberView.el.addEventListener("mouseout",this._hide);this._scrubberView.el.addEventListener("mousedown",this._startScrubbing);
this._scrubberView.el.addEventListener("mouseup",this._endScrubbing);this._scrubberView.el.addEventListener("mousemove",this._onTrackerUpdate);
this._scrubberView.el.addEventListener("mousemove",this._setThumbnail);this._player.on("resize",this._calcOffsets);
window.addEventListener("resize",this._calcOffsets)};q._bindMethods=function(){this._show=this._show.bind(this);
this._hide=this._hide.bind(this);this._onDurationChange=this._onDurationChange.bind(this);
this._onLoadedMetaData=this._onLoadedMetaData.bind(this);this._startScrubbing=this._startScrubbing.bind(this);
this._endScrubbing=this._endScrubbing.bind(this);this._initPointerTracking=this._initPointerTracking.bind(this);
this._onTrackerUpdate=this._onTrackerUpdate.bind(this);this._setThumbnail=this._setThumbnail.bind(this);
this._calcOffsets=this._calcOffsets.bind(this);this._debouncedCalcOffsets=n(this._calcOffsets,30)
};q._startScrubbing=function(a){this._thumbnailHandler.el.classList.add("hidden");
this._scrubberView.el.removeEventListener("mousemove",this._setThumbnail);this._scrubberView.el.removeEventListener("mouseout",this._hide);
document.addEventListener("mouseup",this._endScrubbing);document.addEventListener("mousemove",this._onTrackerUpdate)
};q._endScrubbing=function(a){if(a.target===this._scrubberView.el){this._hide()
}this._scrubberView.el.addEventListener("mousemove",this._setThumbnail);this._scrubberView.el.addEventListener("mouseout",this._hide);
document.removeEventListener("mouseup",this._endScrubbing);document.removeEventListener("mousemove",this._onTrackerUpdate);
this._setThumbnail(a);this._thumbnailHandler.el.classList.remove("hidden")};q._calcOffsets=function(){this._onLoadedMetaData();
var a=this._player.el.getBoundingClientRect();this._offsetLeft=a.left;var b=this._runnableTrack.getBoundingClientRect();
this._leftBoundary=b.left-this._offsetLeft+s;this._rightBoundary=this._leftBoundary+b.width-s-2;
this._imgWidth=this.el.firstElementChild.getBoundingClientRect().width};q._onLoadedMetaData=function(){var b=this._player.getMediaElement().videoWidth;
var a=this._player.getMediaElement().videoHeight;var c=this._player.getMediaElement().src.indexOf("-tft-")!==-1;
this.el.classList.remove("square-video");this.el.classList.remove("vertical-video");
this.el.classList.remove("tft-video");if(c){this.el.classList.add("tft-video");
this._thumbnailHandler.setVertical(false)}else{if(b<a){this.el.classList.add("vertical-video");
this._thumbnailHandler.setVertical(true)}else{if(b===a){this.el.classList.add("square-video");
this._thumbnailHandler.setVertical(false)}else{this._thumbnailHandler.setVertical(false)
}}}};q._addEventListeners=function(){this._player.on("durationchange",this._onDurationChange);
this._player.once("controlsready",this._initPointerTracking);this._player.on("loadedmetadata",this._calcOffsets)
};q._removeEventListeners=function(){this._player.off("durationchange",this._onDurationChange);
this._player.off("controlsready",this._initPointerTracking);this._player.off("timeupdate",this._calcOffsets);
this._player.off("resize",this._debouncedCalcOffsets);window.removeEventListener("resize",this._debouncedCalcOffsets);
this._scrubberView.el.removeEventListener("mouseover",this._show);this._scrubberView.el.removeEventListener("mouseout",this._hide);
this._scrubberView.el.removeEventListener("mousemove",this._onTrackerUpdate);this._scrubberView.el.removeEventListener("mousemove",this._setThumbnail)
};q._onTrackerUpdate=function(a){this._calcOffsets();var b=Math.min(Math.max(a.clientX-this._offsetLeft,this._leftBoundary),this._rightBoundary);
this.el.firstElementChild.style.left=(b-(this._imgWidth/2))+"px";var c=this._scrubberView.getClientXValue(a);
if(this._player.getReadyState()<=2){this._cachedTrackerUpdate=a}else{this._cachedTrackerUpdate=null
}this._setTime(Math.max(c,0))};q._onDurationChange=function(a){this._cachedDuration=this._player.getDuration();
if(this._cachedTrackerUpdate){this._onTrackerUpdate(this._cachedTrackerUpdate);
this._setThumbnail()}this.el.style.opacity="1"};q._setThumbnail=function(a){this._thumbnailHandler.setTime(this._time,this._cachedDuration)
};q._setTime=function(b){var c=(b/this._scrubberView.getMax());this._time=Math.min(c*this._cachedDuration,this._cachedDuration);
var a=p.formatTime(Math.round(this._time),this._cachedDuration);this._timeLabel.innerHTML=a
};q.setData=function(a){this.el.style.opacity="0";if(this._canPlayThroughHander){this._player.off("canplaythrough",this._canPlayThroughHander);
this._player.off("playing",this._canPlayThroughHander);this._canPlayThroughHander=null
}if(a&&this._player.getReadyState()>2){this.el.style.opacity="1";this._thumbnailHandler.setData(a);
if(this._cachedTrackerUpdate){this._onTrackerUpdate(this._cachedTrackerUpdate);
this._setThumbnail()}}else{this._thumbnailHandler.setData(null);if(a){this._canPlayThroughHander=this.setData.bind(this,a);
this._player.on("canplaythrough",this._canPlayThroughHander);this._player.on("playing",this._canPlayThroughHander)
}else{this.el.style.opacity="1"}}this._onLoadedMetaData()};q._show=function(a){this._onTrackerUpdate(a);
this.el.firstElementChild.classList.remove("hidden")};q._hide=function(){this.el.firstElementChild.classList.add("hidden")
};q.destroy=function(){if(this._canPlayThroughHander){this._player.off("canplaythrough",this._canPlayThroughHander);
this._player.off("playing",this._canPlayThroughHander)}this._tracker.destroy()};
u.exports=m},{"../../utils/Time":339,"./ThumbnailHandler":336,"@marcom/ac-function/throttle":210}],336:[function(p,n,q){var o=120;
var k=144;var j=81;var m=function(a){this.el=a.el;this._player=a.player;this._imgWidth=a.imgWidth||k;
this.el.style.backgroundSize=(this._numberOfImages*100)+"% 100%"};var l=m.prototype;
l.setVertical=function(a){this._imgWidth=(a)?j:k};l.getWidth=function(){return this._imgWidth
};l.setData=function(b){if(!b){this._imgUrl=null;this.el.style.backgroundImage="";
return}else{if(b.url===this._imgUrl){return}}this._imgUrl=b.url;this._numberOfImages=parseInt(b.numberOfImages||o);
this.el.style.backgroundSize=(this._numberOfImages*100)+"% 100%";this.el.style.backgroundImage="";
this.el.classList.add("hidden");var a=this._loadImage(this._imgUrl).then(function(){if(this._imageLoadPromise!==a){return
}this.el.style.backgroundImage='url("'+this._imgUrl+'")';this._imageLoadPromise=null;
this.el.classList.remove("hidden")}.bind(this));this._imageLoadPromise=a};l._loadImage=function(a){return new Promise(function(b,c){var d=new Image();
d.onload=function(){b()};d.onerror=function(){c()};d.src=a})};l.setTime=function(f,d){var a=f/d;
var c=Math.min(Math.round(a*this._numberOfImages),this._numberOfImages-1);var b=(c/(this._numberOfImages-1))*100;
this.el.style.backgroundPositionX=b+"%"};l.destroy=function(){if(this._imageLoadPromise){this._imageLoadPromise.cancel()
}};n.exports=m},{}],337:[function(d,g,f){(function(L){var D=L("PGRpdiBjbGFzcz0ic2hhcmluZy1zdGF0ZSI+CiAgICA8ZGl2IGNsYXNzPSJjb250YWluZXIiIGRhdGEtYWN2LWFjdGl2ZS1hcmVhPgogICAgICAgIDxkaXYgY2xhc3M9InNoYXJpbmctY29udGFpbmVyIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2hhcmluZy1idXR0b24tY29udGFpbmVyIj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImZhY2Vib29rLXNoYXJlIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV9mYiIgYXJpYS1sYWJlbD0ie2ZhY2Vib29rc2hhcmV9LCB7bmV3d2luZG93fSI+PC9idXR0b24+CiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJ0d2l0dGVyLXNoYXJlIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV90d2l0dGVyIiBhcmlhLWxhYmVsPSJ7dHdpdHRlcnNoYXJlfSwge25ld3dpbmRvd30iPjwvYnV0dG9uPgogICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0iY29weS1saW5rIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV9saW5rIiBhcmlhLWxhYmVsPSJ7Y29weWxpbmt9Ij48L2J1dHRvbj4KICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImNvcHktZW1iZWQtY29kZSBhYy12aWRlby1pY29uIGljb24tc2hhcmVfZW1iZWQiIGFyaWEtbGFiZWw9Intjb3B5ZW1iZWR9Ij48L2J1dHRvbj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0idGV4dGFyZWEtY29udGFpbmVyIj4KICAgICAgICAgICAgPHNwYW4+CiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9ImNvcHktYXJlYSBmb3JtLXRleHRib3ggZm9ybS10ZXh0Ym94LXRleHQgZGlzYWJsZWQiIHR5cGU9InRleHQiIGlkPSJjb3B5LWxpbmsiIGFyaWEtbGFiZWw9Intjb3B5bGlua30iPjwvaW5wdXQ+CiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSJ0ZXh0aW5wdXQtY2xvc2UtYnV0dG9uIGFjLXZpZGVvLWljb24gaWNvbi1zaGFyZV9jbG9zZSIgYXJpYS1sYWJlbD0ie2Rpc21pc3Njb3B5fSI+PC9idXR0b24+CiAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2Pgo8L2Rpdj4K","base64").toString();
var H=L("PGlmcmFtZSBzcmM9IntlbWJlZENvZGVQYXRofXt2aWRlb2lkfXtleHRlbnNpb259IiB3aWR0aD0ie3dpZHRofSIgaGVpZ2h0PSJ7aGVpZ2h0fSIgdGl0bGU9Int0aXRsZX0iIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4K","base64").toString();
var a="https://www.apple.com/embed/";var E="Video Player";var G=d("@marcom/ac-console/log");
var z=d("@marcom/ac-clipboard/select");var K=d("@marcom/ac-social").Dialog;var y=d("@marcom/ac-string/supplant");
var b=d("../localization/Localization");var C=d("@marcom/ac-accessibility/helpers/TabManager");
var c;try{c=d("@marcom/ac-analytics-share/factory/create")}catch(J){G("ac-analytics-share failed to load, are you sure you've included it?")
}var x=d("@marcom/ac-useragent");var F=x.os;var B=F.ios||F.android;var M=735;var I=function(h){if(!this.el){this._initializeElement(h.el,h.template)
}this._player=h.player;this._parentView=h.parentView;this._clickedShareButton=null;
this._container=this.el.querySelector(".container");this._sharingButtonContainer=this.el.querySelector(".sharing-button-container");
this._facebookButton=this.el.querySelector(".facebook-share");this._twitterButton=this.el.querySelector(".twitter-share");
this._copyLinkButton=this.el.querySelector(".copy-link");this._copyEmbedCodeButton=this.el.querySelector(".copy-embed-code");
this._copyTextArea=this.el.querySelector(".copy-area");this._copyCloseButton=this.el.querySelector(".textinput-close-button");
this._closeButton=this.el.querySelector(".close-button");if(h.analytics===false){c=null
}if(B){this.el.firstChild.classList.add("mobile");this._player.on("loadstart",function(){if(this._getClientWidth()>M){this.el.firstChild.classList.add("mobile-large")
}}.bind(this))}this._bindMethods();this._addEventListeners();this._syncSocialShareHidden()
};var A=I.prototype;A._initializeElement=function(i,h){if(!i){this.el=document.createElement("div");
this._templateData=b.getTranslation();this.el.innerHTML=y((h||D).toString(),this._templateData)
}else{this.el=i}};A.setData=function(i){if(!i){this._parentView.hide();return}else{this._parentView.show()
}if(i.allowEmbed){this.el.firstChild.classList.add("embed-enabled")}this._sharingUrl=i.originatorUrl||window.location.href;
this._videoid=i.videoid;this._hideExtension=i.hideExtension;this._embedPath=i.embedpath||a;
this._hideFacebook=i.hideFacebookShare||false;this._hideTwitter=i.hideTwitterShare||false;
this._title=i.title||E;this._syncSocialShareHidden();this._container.classList.remove("textarea-active");
if(c&&i.analytics!==false&&i.videoid){try{this._initAnalyticsAttributes(i);if(!this._analyticsObserver){this._analyticsObserver=c({context:this.el})
}}catch(h){G("ac-analytics-share failed to load, are you sure you've included it?")
}}};A._bindMethods=function(){this._doFacebookShare=this._doSocialShare.bind(this,K.FACEBOOK_SHARE);
this._doTwitterShare=this._doSocialShare.bind(this,K.TWITTER_TWEET);this._copyUrl=this._copyUrl.bind(this);
this._copyEmbedCode=this._copyEmbedCode.bind(this);this._closeCopyArea=this._showTextArea.bind(this,false);
this._closeState=this._closeState.bind(this)};A._addEventListeners=function(){this._facebookButton&&this._facebookButton.addEventListener("click",this._doFacebookShare);
this._twitterButton&&this._twitterButton.addEventListener("click",this._doTwitterShare);
this._copyLinkButton&&this._copyLinkButton.addEventListener("click",this._copyUrl);
this._copyEmbedCodeButton&&this._copyEmbedCodeButton.addEventListener("click",this._copyEmbedCode);
this._copyCloseButton&&this._copyCloseButton.addEventListener("click",this._closeCopyArea);
this._closeButton&&this._closeButton.addEventListener("click",this._closeState)
};A._removeEventListeners=function(){this._facebookButton&&this._facebookButton.removeEventListener("click",this._doFacebookShare);
this._twitterButton&&this._twitterButton.removeEventListener("click",this._doTwitterShare);
this._copyLinkButton&&this._copyLinkButton.removeEventListener("click",this._copyUrl);
this._copyEmbedCodeButton&&this._copyEmbedCodeButton.removeEventListener("click",this._copyEmbedCode);
this._copyCloseButton&&this._copyCloseButton.removeEventListener("click",this._closeCopyArea);
this._closeButton&&this._closeButton.removeEventListener("click",this._closeState)
};A._syncSocialShareHidden=function(){if(this._facebookButton){if(this._hideFacebook){this._facebookButton.classList.add("hide-button")
}else{this._facebookButton.classList.remove("hide-button")}}if(this._twitterButton){if(this._hideTwitter){this._twitterButton.classList.add("hide-button")
}else{this._twitterButton.classList.remove("hide-button")}}};A._doSocialShare=function(h){this._clickedShareButton=null;
this._copyLinkButton.classList.remove("active");this._copyEmbedCodeButton.classList.remove("active");
this._showTextArea(false);K.create(h,{url:this._sharingUrl,title:this._title})};
A._showTextArea=function(h){if(h){this._container.classList.add("textarea-active");
z(this._copyTextArea);if(!B){this._copyTextArea.setAttribute("readonly","")}}else{this._container.classList.remove("textarea-active");
this._copyLinkButton.classList.remove("active");this._copyEmbedCodeButton.classList.remove("active");
this._copyTextArea.removeAttribute("readonly");if(this._clickedShareButton){this._clickedShareButton.focus()
}this._copyLinkButton.setAttribute("aria-label",this._templateData.copylink);this._copyEmbedCodeButton.setAttribute("aria-label",this._templateData.copyembed)
}};A._copyUrl=function(){this._clearTextArea();this._copyTextArea.value=this._sharingUrl;
this._copyLinkButton.classList.add("active");this._copyLinkButton.setAttribute("aria-label",this._templateData.selectlink);
this._showTextArea(true);this._clickedShareButton=this._copyLinkButton;this._copyTextArea.setAttribute("aria-label",this._templateData.copylink);
z(this._copyTextArea)};A._clearTextArea=function(){window.getSelection().removeAllRanges();
this._copyLinkButton.classList.remove("active");this._copyEmbedCodeButton.classList.remove("active");
this._copyTextArea.removeAttribute("readonly")};A._copyEmbedCode=function(){this._clearTextArea();
this._copyTextArea.value=y(H,{videoid:this._videoid,embedCodePath:this._embedPath,width:this._player.getMediaWidth(),height:this._player.getMediaHeight(),title:this._title,extension:this._hideExtension?"":".html"});
this._copyEmbedCodeButton.classList.add("active");this._copyEmbedCodeButton.setAttribute("aria-label",this._templateData.selectembed);
this._showTextArea(true);this._clickedShareButton=this._copyEmbedCodeButton;this._copyTextArea.setAttribute("aria-label",this._templateData.copyembed);
z(this._copyTextArea)};A._focusFirstButton=function(){if(!this._firstButton){this._firstButton=C.getTabbableElements(this._sharingButtonContainer)[0]
}this._firstButton.focus()};A.show=function(){return new Promise(function(i,h){requestAnimationFrame(function(){var j=function(){this.el.removeEventListener("transitionend",j);
if(focus){this._focusFirstButton()}i()}.bind(this);this.el.addEventListener("transitionend",j);
setTimeout(function(){this._container.classList.add("showing")}.bind(this))}.bind(this))
}.bind(this))};A.hide=function(){this._clickedShareButton=null;this._showTextArea(false);
return new Promise(function(i,j){var h=function(){this.el.removeEventListener("transitionend",h);
i()}.bind(this);this.el.addEventListener("transitionend",h);setTimeout(function(){this._container.classList.remove("showing")
}.bind(this))}.bind(this))};A._getClientHeight=function(){return this.el.clientHeight
};A._getClientWidth=function(){return this.el.clientWidth};A.destroy=function(){this._removeEventListeners()
};A._closeState=function(){this._showTextArea(false);if(this._player.getCurrentTime()===0||this._player.getEnded()){this._player.states.setState("initial")
}else{this._player.states.setState("none")}};A._getAnalyticsSource=function(){return"drawer"
};A._initAnalyticsAttributes=function(k){var m=[];this._facebookButton&&m.push({button:this._facebookButton,title:"facebook",events:"event85"});
this._twitterButton&&m.push({button:this._twitterButton,title:"twitter",events:"event84"});
this._copyLinkButton&&m.push({button:this._copyLinkButton,title:"copy-link",events:"event89"});
this._copyEmbedCodeButton&&m.push({button:this._copyEmbedCodeButton,title:"copy-embed-code",events:"event101"});
var j=(((k.url&&k.url.indexOf(".m3u8"))!==-1)?"m3u8":"mp4")+" via html5";var l=this._getAnalyticsSource();
var i=k.videoid;var h=document.head.querySelectorAll('meta[property="analytics-track"]');
h=h?(h[0].getAttribute("content")):"";m.forEach(function(n){n.button.setAttribute("data-analytics-click","");
n.button.setAttribute("data-analytics-share",JSON.stringify({title:i,events:n.events,prop2:h+" - "+i+" - "+n.title,prop18:j,eVar49:document.referrer,eVar54:document.location.href,eVar55:h+" - "+i,eVar70:l}))
}.bind(this))};g.exports=I}).call(this,d("buffer").Buffer)},{"../localization/Localization":332,"@marcom/ac-accessibility/helpers/TabManager":143,"@marcom/ac-analytics-share/factory/create":182,"@marcom/ac-clipboard/select":183,"@marcom/ac-console/log":185,"@marcom/ac-social":257,"@marcom/ac-string/supplant":277,"@marcom/ac-useragent":283,buffer:9}],338:[function(i,n,j){var k=i("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var l=function(a){k.call(this);this.el=a.el||document.body;this.breakpoints=a.breakpoints.sort(function(b,c){return b.minWidth-c.minWidth
});this._breakPointsLength=this.breakpoints.length;this._addClasses=a.addClass;
this._addEventListeners();this._onResize()};var o=k.prototype;var m=l.prototype=Object.create(o);
m.constructor=l;m._addEventListeners=function(){var a=this;this._boundOnResize=function(){a._onResize.apply(a,arguments)
};window.addEventListener("resize",this._boundOnResize);window.addEventListener("orientationchange",this._boundOnResize);
window.addEventListener("DOMContentLoaded",this._boundOnResize)};m._removeEventListeners=function(){window.removeEventListener("resize",this._boundOnResize);
window.removeEventListener("orientationchange",this._boundOnResize);window.addEventListener("DOMContentLoaded",this._boundOnResize)
};m._onResize=function(){var b=this.el.clientWidth;var c=this._currentBreakpoint;
if(c&&l.widthInBreakpoint(b,c)){return}var a=l.getBreakpointFromWidth(b,this.breakpoints,c,this._breakPointsLength);
if(this._addClasses){this._currentBreakpoint&&this.el.classList.remove(c.name);
this.el.classList.add(a.name)}this._currentBreakpoint=a;this.trigger("breakpointchange",a)
};m.getCurrentBreakpoint=function(){return this._currentBreakpoint};m.refresh=function(){this._onResize()
};m.destroy=function(){this._removeEventListeners();o.destroy.call(this)};l.getBreakpointFromElement=function(b,a){return l.getBreakpointFromWidth(b.clientWidth,a)
};l.getBreakpointFromWidth=function(g,a,h,f){var c=0;var d=f||a.length;for(;c<d;
c++){var b=a[c];if(b===h){continue}if(g>=b.minWidth&&g<=b.maxWidth){return b}}};
l.widthInBreakpoint=function(a,b){return(a>=b.minWidth&&a<=b.maxWidth)};n.exports=l
},{"@marcom/ac-event-emitter-micro":186}],339:[function(g,k,h){var i=g("@marcom/ac-string/supplant");
var j={addLeadingZero:function(a,b){b=b||2;if(a<10||b>2){a=String(a);while(a.length<b){a="0"+a
}}return a},formatTime:function(a,c,f){if(isNaN(a)){return"00:00"}a=this.splitTime(Math.floor(a),c,function(m){return this.addLeadingZero(m,f)
}.bind(this));var d;if(c>=3600){d="{PN}{hours}:{minutes}:{seconds}"}else{d="{PN}{minutes}:{seconds}"
}var b=i(d,{PN:a.negativeModifier,hours:a.hours,minutes:a.minutes,seconds:a.seconds});
return b},splitTime:function(a,f,d){d=d||function(m){return m};var b={negativeModifier:"",hours:0,minutes:0,seconds:0};
if(isNaN(a)){return b}b.negativeModifier=(a<0)?"-":"";a=Math.abs(a);b.hours=(f>=3600)?Math.floor(a/3600):0;
b.minutes=(b.hours)?Math.floor((a/60)%60):Math.floor(a/60);b.seconds=(a%60);for(var c in b){if(typeof b[c]!=="number"){continue
}if(c!=="hours"){b[c]=d(b[c])}}return b},stringToNumber:function(b){var a=0;var c=b.split(":");
while(c.length){if(c.length===3){a+=parseFloat(c.shift())*3600}else{if(c.length===2){a+=parseFloat(c.shift())*60
}else{a+=parseFloat(c.shift())}}}return a}};k.exports=j},{"@marcom/ac-string/supplant":277}],340:[function(g,k,h){var i=g("@marcom/ac-object/clone");
var j=function(){var c=Array.prototype.slice.call(arguments);if(c.length<2){return i(c[0])
}var d=i(c.shift(),true);var b=c.shift();for(var a in b){if(b.hasOwnProperty(a)){if(!d.hasOwnProperty(a)||typeof d[a]!=="object"){d[a]=b[a]
}else{if(typeof d[a]==="object"&&typeof b[a]==="object"){d[a]=j(d[a],b[a])}}}}if(c.length){return j.apply(null,[d].concat(c))
}else{return d}};k.exports=j},{"@marcom/ac-object/clone":215}],341:[function(d,g,f){g.exports=[{width:384,height:160,type:"baseline-high",suffix:"h"},{width:384,height:160,type:"small",suffix:"h"},{width:384,height:160,type:"baseline-low",suffix:"l"},{width:384,height:160,type:"baseline-medium",suffix:"m"},{width:480,height:200,type:"medium",suffix:"h"},{width:768,height:320,type:"large",suffix:""},{width:960,height:400,type:"large",suffix:""},{width:1536,height:640,type:"large",suffix:"h"},{width:1536,height:640,type:"large",suffix:"l"},{width:1920,height:800,type:"large",suffix:"l"},{width:1920,height:800,type:"large",suffix:"h"}]
},{}],342:[function(d,g,f){g.exports=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""},{width:960,height:540,type:"large",suffix:""},{width:1280,height:720,type:"large",suffix:"h"},{width:1280,height:720,type:"large",suffix:"l"},{width:1920,height:1080,type:"large",suffix:"l"},{width:1920,height:1080,type:"large",suffix:"h"}]
},{}],343:[function(d,g,f){g.exports=[{width:528,height:244,type:"baseline-high",suffix:"h"},{width:528,height:244,type:"small",suffix:"h"},{width:528,height:244,type:"baseline-low",suffix:"l"},{width:528,height:244,type:"baseline-medium",suffix:"m"},{width:812,height:375,type:"medium",suffix:"h"},{width:1082,height:500,type:"large",suffix:""},{width:1218,height:563,type:"large",suffix:""},{width:1624,height:750,type:"large",suffix:"h"},{width:1624,height:750,type:"large",suffix:"l"},{width:2436,height:1126,type:"large",suffix:"l"},{width:2436,height:1126,type:"large",suffix:"h"}]
},{}],344:[function(d,g,f){g.exports=[{width:360,height:360,type:"baseline-high",suffix:"h"},{width:360,height:360,type:"small",suffix:"h"},{width:360,height:360,type:"baseline-low",suffix:"l"},{width:480,height:480,type:"medium",suffix:""},{width:540,height:540,type:"medium",suffix:""},{width:720,height:720,type:"large",suffix:"h"},{width:720,height:720,type:"large",suffix:"l"},{width:1080,height:1080,type:"large",suffix:"l"},{width:1080,height:1080,type:"large",suffix:"h"}]
},{}],345:[function(K,S,j){var m=K("@marcom/ac-string/supplant");var U=/_r[0-9].+\.mov$/;
var P=/_[0-9]+x[0-9].+\.mp4$/;var J=/_([0-9]+)x([0-9]+)/;var O=/-tpl-.*-/;var M=/-cc-[a-z].*-/;
var I=/-tft-.*-/;var B="m";var F="_{width}x{height}{suffix}."+B+"p4";var Q="_{height}x{width}{suffix}."+B+"p4";
var A="j";var T="_thumbnails."+A+"pg";var D=K("./1X1AssetSizes");var G=K("./16X9AssetSizes");
var E=K("./12X5AssetSizes");var R=K("./19X9AssetSizes");var L=function(a,b){return a.find(function(c){return(c.width===b.width)&&(c.height=b.height)||((c.width===b.height)&&(c.height=b.width))
})};var C=function(k,f,b,h){var i;var g;J.test(k);var d={};var a;d.width=parseInt(RegExp.$1,10);
d.height=parseInt(RegExp.$2,10);if(k.match(I)){i=E;g=1536}else{if(d.width===d.height){i=D;
g=1080}else{if(k.match(U)||L(G,d)){i=G;g=1280}else{if(L(R,d)){i=R;g=1624}else{return k
}}}}if(d.width<d.height){a=true}var l=i[0].width;var n=(h&&h.maxWidth)?Math.max(h.maxWidth,l):g;
if(!k){throw"Must provide an url to optimize"}if(f===undefined||isNaN(f)){throw"Must provide a width"
}if(f===0){f=d.width}if(b){i=i.filter(function(p){return p.type===b})}if(n<1920){i=i.filter(function(p){return p.width<=n
})}var c;if(!a){c=i.reduce(function(q,p){return Math.abs(p.width-f)<Math.abs(q.width-f)?p:q
})}else{c=i.reduce(function(q,p){return Math.abs(p.height-f)<Math.abs(q.height-f)?p:q
})}var o=F;if(a){o=Q}if(k.match(P)){return k.replace(P,m(o,c))}else{if(k.match(U)){return k.replace(U,m(o,c))
}else{return k}}};var N=function(a){if(!a.match(M)){return null}if(a.match(P)){return{src:a.replace(P,"_cc.vtt"),srclang:"en"}
}else{if(a.match(U)){return{src:a.replace(U,"_cc.vtt"),srclang:"en"}}else{return null
}}};var H=function(a){if(!a.match(O)){return null}else{return{url:a.replace(P,T)}
}};S.exports={getVideoSource:C,getCaptionsSource:N,getThumbnailImageSource:H}},{"./12X5AssetSizes":341,"./16X9AssetSizes":342,"./19X9AssetSizes":343,"./1X1AssetSizes":344,"@marcom/ac-string/supplant":277}],346:[function(r,s,p){var n=r("../dom-emitter/DOMEmitterMicro");
var l=r("../texttracks/createTextTracks");var q=r("@marcom/ac-console/log");var m=window.document;
var k=function(a){this._videoElement=(a&&a.mediaElement)?a.mediaElement:m.createElement("video");
this.options=a||{};this._textTracks=l(a);this._initElement();n.apply(this,[this._videoElement]);
this._forwardCaptionEvent=this._forwardCaptionEvent.bind(this);this._textTracksEmitter=this.getTextTracksEventEmitter();
this._textTracksEmitter.on("addtrack",this._forwardCaptionEvent);this._textTracksEmitter.on("change",this._forwardCaptionEvent);
this._textTracksEmitter.on("removetrack",this._forwardCaptionEvent)};var o=k.prototype=Object.create(n.prototype);
o._initElement=function(){this._videoElement.classList.add("ac-video-media-controller");
if(this.options.crossorigin!==null){this._videoElement.setAttribute("crossorigin",(this.options.crossorigin)?this.options.crossorigin:"anonymous")
}this._videoElement.setAttribute("preload",this.options.preload||"auto");this._videoElement.setAttribute("x-webkit-airplay","")
};o._forwardCaptionEvent=function(a){this.trigger(a.type)};o.load=function(a,c,b){if(b){a=a.map(function(d){return d+"#t="+b
})}this._createSourceTags(a);this._createTextTrackTags(c);this._videoElement.load()
};o._createSourceTags=function(d){this._videoElement.removeAttribute("src");this._videoElement.innerHTML="";
var b=0;var c=d.length;if(c){this._videoElement.setAttribute("src",d[0])}for(;b<c;
b++){var a=m.createElement("source");a.src=d[b];this._videoElement.appendChild(a)
}};o.play=function(){try{var a=this._videoElement.play();if(a&&typeof a["catch"]==="function"){a["catch"](function(c){if(this._playPromise===a){this.trigger("PlayPromiseError")
}}.bind(this))}this._playPromise=a}catch(b){q(b)}};o.pause=function(){this._playPromise=null;
this._videoElement.pause()};o.addTextTrack=function(a){this._addTextTrackTag(a)
};o.removeTextTrack=function(a){this._removeTextTrackTag(a)};o.getMediaElement=function(){return this._videoElement
};o._createTextTrackTags=function(){return this._textTracks.create.apply(this,arguments)
};o._addTextTrackTag=function(){return this._textTracks.add.apply(this,arguments)
};o._removeTextTrackTag=function(){return this._textTracks.remove.apply(this,arguments)
};o.getTextTracks=function(){return this._textTracks.get.apply(this,arguments)};
o.getTextTracksEventEmitter=function(){return this._textTracks.getEmitter.apply(this,arguments)
};o.getReadyState=function(){return this._videoElement.readyState};o.getPreload=function(){return this._videoElement.preload
};o.setPreload=function(a){return this._videoElement.preload=a};o.setPoster=function(a){this._videoElement.poster=a
};o.getVolume=function(){return this._videoElement.volume};o.getMuted=function(){return this._videoElement.muted
};o.getPaused=function(){return this._videoElement.paused};o.getCurrentTime=function(){return this._videoElement.currentTime
};o.getDuration=function(){return this._videoElement.duration};o.setCurrentTime=function(a){return this._videoElement.currentTime=a
};o.setVolume=function(a){return this._videoElement.volume=a};o.setMuted=function(a){this._videoElement.muted=a
};o.getEnded=function(){return this._videoElement.ended};o.setSrc=function(a){if(!this._videoElement.childNodes.length||a!==this._getSrcNode().url){this._createSourceTags([a])
}};o.getCurrentSrc=function(){return this._getSrcNode()};o._getSrcNode=function(){return this._videoElement.childNodes[0]
};o.setControls=function(a){if(!a){this._videoElement.removeAttribute("controls");
this._videoElement.setAttribute("aria-hidden","true")}else{this._videoElement.setAttribute("controls","");
this._videoElement.removeAttribute("aria-hidden")}};o.isFullscreen=function(){return this._videoElement.webkitDisplayingFullscreen
};o.supportsPictureInPicture=function(){return(typeof this._videoElement.webkitSetPresentationMode==="function")
};o.isPictureInPicture=function(){return(this._videoElement.webkitPresentationMode==="picture-in-picture")
};o.setPictureInPicture=function(a){if(!this.supportsPictureInPicture()){return
}this._videoElement.webkitSetPresentationMode((a)?"picture-in-picture":"inline")
};o.supportsAirPlay=function(){return !!window.WebKitPlaybackTargetAvailabilityEvent
};o.destroy=function(){this._textTracks.destroy();this._textTracksEmitter.off("addtrack",this._forwardCaptionEvent);
this._textTracksEmitter.off("change",this._forwardCaptionEvent);this._textTracksEmitter.off("removetrack",this._forwardCaptionEvent);
this._textTracks=null;this._textTracksEmitter=null;this._videoElement=null};s.exports=k
},{"../dom-emitter/DOMEmitterMicro":287,"../texttracks/createTextTracks":301,"@marcom/ac-console/log":185}],347:[function(m,k,i){var l=m("./HTML5Video");
var h=function(){};var j=h.prototype;j.create=function(a,b){return new l(Object.assign({},a,{parentElement:b}))
};k.exports=Object.create(h.prototype)},{"./HTML5Video":346}],"@marcom/ac-films/AutoFilms":[function(o,p,n){o("@marcom/ac-polyfills/Object/assign");
var m="data-films-modal-link";var k="data-films-inline-target";var q=o("./factory/createFilms");
var s=true;var l;function r(h,j){if(!(this instanceof r)&&s){s=false;l=setTimeout(r,1);
return function(t,u){clearTimeout(l);return new r(t,u)}}h=h||document;var a=Array.prototype.slice.call(h.querySelectorAll("["+m+"]"));
var i=Array.prototype.slice.call(h.querySelectorAll("["+k+"]"));var f;if(a.length){f=q(a,Object.assign(j||{},{modal:true}))
}else{if(i.length){var d={};var g=0;var c=i.length;for(;g<c;g++){var v=i[g];var b=v.getAttribute(k);
if(!d[b]){d[b]=[]}d[b].push(v)}for(var w in d){if(d.hasOwnProperty(w)){f=q(d[w],Object.assign(j||{},{targetElement:h.querySelector("#"+w)}))
}}}}return f}p.exports=r()},{"./factory/createFilms":"@marcom/ac-films/factory/createFilms","@marcom/ac-polyfills/Object/assign":76}],"@marcom/ac-films/analytics/AnalyticsTranslator":[function(v,w,u){var q;
try{q=v("@marcom/ac-analytics")}catch(o){}var s=v("@marcom/ac-useragent").browser;
var r=s.ie||s.edge;var m=v("@marcom/ac-video/event-emitter-shim/EventEmitterShim");
var p=function(d,b,c){if(c){var a=function(){b.apply(c,arguments)};m.prototype.once.apply(this,[d,a])
}else{m.prototype.once.apply(this,arguments)}};function n(c,a,b){this.player=c;
this.sources={};this.currentStubPlayer=null;this.playerType="";this.videoType="";
this.options=a;if(b){this._bindAnchors(b)}}var t=n.prototype;t._bindAnchors=function(b){var c=0;
var a=b.length;for(;c<a;c++){this._bindAnchorForAnalytics(b[c])}};t.activate=function(){this._onPlay=this._onPlay.bind(this);
this._onEnded=this._onEnded.bind(this);this._onTimeupdate=this._onTimeupdate.bind(this);
this._onTexttrackshow=this._onTexttrackshow.bind(this);this._onLoadStart=this._onLoadStart.bind(this);
this.setCurrentStubPlayer=this.setCurrentStubPlayer.bind(this);if(r){this.player.on("playing",this._onPlay)
}else{this.player.on("play",this._onPlay)}this.player.on("ended",this._onEnded);
this.player.on("loadstart",this._onLoadStart);this.player.on("timeupdate",this._onTimeupdate);
this.player.on("texttrackshow",this._onTexttrackshow);this.player.on("durationchange",this.setCurrentStubPlayer)
};t.deactivate=function(){if(r){this.player.off("playing",this._onPlay)}else{this.player.off("play",this._onPlay)
}this.player.off("ended",this._onEnded);this.player.off("timeupdate",this._onTimeupdate);
this.player.off("texttrackshow",this._onTexttrackshow);this.player.off("durationchange",this.setCurrentStubPlayer)
};t._bindAnchorForAnalytics=function(a){var b;var c;if(a){if(this.sources[a.id]){return
}b=this._createStubPlayer(a);c=a.getAttribute("data-"+this.options.dataAttribute);
if(!c){b.videoId=a.id}this.sources[a.id]={stubPlayer:b,observer:this._createObserver(b)}
}};t.addSourceObject=t._bindAnchorForAnalytics;t.setCurrentStubPlayer=function(){var d;
var b=this.player.el;var c=b.getAttribute("data-"+this.options.dataAttribute);var a=this._getCurrentSourceObject(c);
if(a&&a.stubPlayer){this.currentStubPlayer=a.stubPlayer;this.playerType="html5";
d=this.player.getCurrentSrc();if(d&&d.attributes&&d.attributes.src){this.videoType=d.attributes.src.value.split(".").pop()
}}};t.destroy=function(){this.deactivate();this.player=null;this.sources=null;this.currentStubPlayer=null;
this.options=null};t._onPlay=function(){this.setCurrentStubPlayer();if(!this._started){this._proxyEvent("play");
this._started=true}};t._onLoadStart=function(){this._started=false};t._onEnded=function(){this._started=false;
this._proxyEvent("ended")};t._onTimeupdate=function(){this._proxyEvent("timeupdate");
if(this._started&&this.player.getCurrentTime()===0&&this.player.getPaused()){this._started=false
}};t._onTexttrackshow=function(){this._proxyEvent("captions-enabled")};t._getSourceObjectBySrcObjId=function(a){return this.sources[a]||null
};t._getCurrentSourceObject=function(a){var b;if(a){b=this._getSourceObjectBySrcObjId(a)
}return b};t._createStubPlayer=function(a){var b=new m();b.once=p;b.el=a;return b
};t._getEventData=function(){return{currentTime:this.player.getCurrentTime(),playerType:(this.playerType||"html5"),videoType:(this.videoType||null)}
};t._createObserver=function(b){var a;if(q&&q.observer&&q.observer.Video){a=new q.observer.Video(b,{dataAttribute:this.options.dataAttribute})
}return a};t._proxyEvent=function(a){if(this.currentStubPlayer){this.currentStubPlayer.trigger(a,this._getEventData())
}};w.exports=n},{"@marcom/ac-analytics":"@marcom/ac-analytics","@marcom/ac-useragent":139,"@marcom/ac-video/event-emitter-shim/EventEmitterShim":288}],"@marcom/ac-films/factory/bindAnchors":[function(y,C,w){var B=y("@marcom/ac-router").Router;
var A=y("@marcom/ac-video/player/factory/createShareablePlayer");var H=y("@marcom/ac-video/optimizeVideoUrl");
var s=y("@marcom/ac-useragent");var u=y("./bindAnchor");var G=y("./createClickHandler");
var x=y("./createModalLink");var D=y("./createHandheldModalLink");var v=y("./createInlineLink");
var I="data-films-options";var E=y("@marcom/ac-feature/isHandheld")();var z=s.os.ios;
var F={controls:true,urlOptimizer:H};C.exports=function t(i,b){b=b||{};b=Object.assign({},F,b);
var d;i.forEach(function(j){if(j.hasAttribute(I)){var k=JSON.parse(j.getAttribute(I));
if(k.closeOnEnd===false&&!b.closeOnEnd){b.closeOnEnd=false}}});if(!b.maxWidth){b.maxWidth=1280
}var a=A(b);var c;d=new B({hashChange:true,pushState:false});if(b.modal&&(!E||!z)){c=x(a,b)
}else{if(b.modal){c=D(a,document.body,b)}else{c=v(a,b)}}var f=c.play.bind(c);var g=function(k){var l=0;
var j=i.length;for(;l<j;l++){if(i[l].id===k||i[l]===k){f(i[l].href)}}};var h=G({player:a,playHandler:f,attr:"data-"+b.dataAttribute});
i.forEach(function(j){u(j,h,f,d)});d.start();return{play:g,player:a,modalVideo:c.modal}
}},{"./bindAnchor":"@marcom/ac-films/factory/bindAnchor","./createClickHandler":"@marcom/ac-films/factory/createClickHandler","./createHandheldModalLink":"@marcom/ac-films/factory/createHandheldModalLink","./createInlineLink":"@marcom/ac-films/factory/createInlineLink","./createModalLink":"@marcom/ac-films/factory/createModalLink","@marcom/ac-feature/isHandheld":5,"@marcom/ac-router":136,"@marcom/ac-useragent":139,"@marcom/ac-video/optimizeVideoUrl":289,"@marcom/ac-video/player/factory/createShareablePlayer":294}],"@marcom/ac-films/factory/bindAnchor":[function(q,p,j){var o=q("../windowload/windowLoad");
var m=q("../touchclick/TouchClick");var n=q("@marcom/ac-useragent");var k=(n.os.ios||n.os.android);
p.exports=function l(a,f,c,b){var d=m.create(a);d.on("click",function(){f(a)});
a.addEventListener("TriggerAnchor",function(){f(a)});if(b&&a.id){b.createRoute(a.id,function(){o(function(){f(a,!k)
})})}}},{"../touchclick/TouchClick":"@marcom/ac-films/touchclick/TouchClick","../windowload/windowLoad":"@marcom/ac-films/windowload/windowLoad","@marcom/ac-useragent":139}],"@marcom/ac-films/factory/createClickHandler":[function(n,m,o){var j="data-films-options";
var l="data-films-modal-label";var k="Video Player";m.exports=function i(a){return function(g,b){var f=g.getAttribute(j);
var c;if(f){c=JSON.parse(f)}else{c=null}if(c&&c.endState){c.endState.items.forEach(function(h){if(h.url&&h.url.indexOf("#")===0){var q=document.querySelector(h.url);
h.onclick=function(){q.dispatchEvent(new CustomEvent("TriggerAnchor"))}}})}if(c&&c.poster){a.player.setPoster(c.poster)
}else{a.player.setPoster(null)}var d=g.getAttribute(l)||(c&&c.modalLabel)||a.player.options.modalLabel||k;
a.player.el.setAttribute(a.attr,g.getAttribute(a.attr)||g.id);a.playHandler(g.href,c,b,d)
}}},{}],"@marcom/ac-films/factory/createFilms":[function(o,n,i){var l=o("./bindAnchors");
var m=o("../analytics/AnalyticsTranslator");var k={dataAttribute:"analytics-video-id",analytics:true};
n.exports=function j(b,c){c=c||{};c=Object.assign({},k,c);var a=l(b,c);if(c.analytics){var d=new m(a.player,c,b);
d.activate()}return a}},{"../analytics/AnalyticsTranslator":"@marcom/ac-films/analytics/AnalyticsTranslator","./bindAnchors":"@marcom/ac-films/factory/bindAnchors"}],"@marcom/ac-films/factory/createHandheldModalLink":[function(m,l,i){var h="ac-films-handheld-player";
var j="player-fullscreen";l.exports=function k(a,b,c){a.el.classList.add(h);var d=function(g,o){var f=function(){if(!a.getPaused()){a.pause()
}a.el.classList.remove(j)};a.el.classList.add(j);a.once("ended",f);a.once("exitfullscreen",f);
a.load(g);if(o!==false){a.play()}};b.appendChild(a.el);return{play:d,player:a}}
},{}],"@marcom/ac-films/factory/createInlineLink":[function(f,i,g){i.exports=function h(a,b){var c=b.targetElement;
var d=function(m,l){a.load(m,null,0,l);a.play()};b.playHandler=d;if(c){c.appendChild(a.el)
}return{play:d,player:a}}},{}],"@marcom/ac-films/factory/createModalLink":[function(r,t,p){var u=r("@marcom/ac-modal").createFullViewportModal;
var m=r("@marcom/ac-useragent");var s=m.os.ios||m.os.android;var o="ac-films-modal-mobile";
var l=r("./link/ModalLink");var n="ac-modal-video";t.exports=function q(f,a){a=a||{};
var b=document.createElement("div");b.classList.add("ac-player-container");if(s){b.classList.add(o)
}b.appendChild(f.el);var c=u(b);c.modalElement.classList.add(n);var d=new l({player:f,modal:c,closeOnEnd:a.closeOnEnd});
return d}},{"./link/ModalLink":"@marcom/ac-films/factory/link/ModalLink","@marcom/ac-modal":66,"@marcom/ac-useragent":139}],"@marcom/ac-films/factory/link/ModalLink":[function(C,J,t){var v="-tft-";
var B=/_([0-9]+)x([0-9]+)/;var E="ac-video-cinematic-aspect-ratio";var F="ac-video-square-aspect-ratio";
var A="ac-video-vertical-aspect-ratio";var w="ac-video-19x9-aspect-ratio";var z="ac-video-9x19-aspect-ratio";
var x="ac-modal-video-pip";var u="pictureinpicture:change";var G="has-modal";var H=C("../../resize/ResizeHandler");
var I=C("@marcom/ac-video/utils/urlOptimizer/19X9AssetSizes");var D=function(a,b){return a.find(function(c){return(c.width===b.width)&&(c.height=b.height)||((c.width===b.height)&&(c.height=b.width))
})};var K=function(a){this.modal=a.modal;this.player=a.player;this._resizeHandler=new H({player:this.player,modal:this.modal});
this._closeOnEnd=(a.closeOnEnd!==undefined)?a.closeOnEnd:true;this._ended=false;
this._pauseTime=0;this._playing=false;this._initialize()};var y=K.prototype;y._initialize=function(){this._bindMethods();
this.player.on("ended",this._onEnded);this.player.on("pause",this._onPaused);this.modal.on("open",this._onOpen);
if(this.player.supportsPictureInPicture()){this.player.on(u,this._onPipModeChanged)
}};y._bindMethods=function(){this._onEnded=this._onEnded.bind(this);this._onPipModeChanged=this._onPipModeChanged.bind(this);
this._onPaused=this._onPaused.bind(this);this._onModalWillClose=this._onModalWillClose.bind(this);
this._onOpen=this._onOpen.bind(this)};y._onOpen=function(){this.player.refreshSize()
};y._onPaused=function(){this._pauseTime=Date.now()};y._onEnded=function(){this._ended=true;
if(!this.player.isPictureInPicture()&&this._closeOnEnd){this.modal.close()}else{if(this.player.isPictureInPicture()){this.player.setPictureInPicture(false);
this.modal.modalElement.classList.remove(x);if(!this._closeOnEnd){this.modal.open();
this._bindWillClose()}}}};y._onPipModeChanged=function(){if(this._ended){return
}if(this.player.isPictureInPicture()&&this._isModalOpen()){this._unBindWillClose();
this.modal.modalElement.classList.add(x);this.modal.close()}else{if(!this._isModalOpen()){this.modal.modalElement.classList.remove(x);
if(!this._pauseTime||(Date.now()-this._pauseTime)>400){this._bindWillClose();this.modal.open()
}else{this._resetVideo()}}}};y._resetVideo=function(){this.player.pause();this.player.setCurrentTime(0)
};y._onModalWillClose=function(){this._unBindWillClose();this._resetVideo();this.player.setPictureInPicture(false);
this.modal.modalElement.classList.remove(x)};y._clearAspectRatio=function(){this.player.el.parentElement.classList.remove(E);
this.player.el.parentElement.classList.remove(F);this.player.el.parentElement.classList.remove(A);
this.player.el.parentElement.classList.remove(w);this.player.el.parentElement.classList.remove(z)
};y._set19X9Mode=function(){this.player.el.parentElement.classList.add(w)};y._set9X19Mode=function(){this.player.el.parentElement.classList.add(z)
};y._setCinematicMode=function(){this.player.el.parentElement.classList.add(E)};
y._setSquareVideo=function(){this.player.el.parentElement.classList.add(F)};y._setVerticalVideo=function(){this.player.el.parentElement.classList.add(A)
};y._resetPiPVideo=function(){var a=this.player.getVisibleTextTracks();a.forEach(function(b){b.mode="hidden"
});this._resetVideo();a.forEach(function(b){b.mode="showing"})};y.play=function(c,b,g,d){this._ended=false;
this._clearAspectRatio();if(c.match(v)){this._setCinematicMode()}else{if(B.test(c)){var a=parseInt(RegExp.$1,10);
var f=parseInt(RegExp.$2,10);if(D(I,{width:a,height:f})){if(f>a){this._set9X19Mode(true)
}else{this._set19X9Mode(true)}}else{if(f>a){this._setVerticalVideo(true)}else{if(f===a){this._setSquareVideo(true)
}}}}}this.modal.modalElement.setAttribute("aria-label",d);this.player.load(c,null,0,Object.assign({},b,{maxWidth:window.innerWidth}));
if(!this.player.isPictureInPicture()){this.modal.open();this._bindWillClose()}else{this._resetPiPVideo()
}if(g!==false){this.player.play()}};y._bindWillClose=function(){this.modal.on("willclose",this._onModalWillClose)
};y._unBindWillClose=function(){this.modal.off("willclose",this._onModalWillClose)
};y._isModalOpen=function(){return document.documentElement.classList.contains(G)
};y.destroy=function(){this.player.off("ended",this._onEnded);this.player.off("paused",this._onPaused);
this.player.off(u,this._onPipModeChanged);this._unBindWillClose();this._resizeHandler.destroy();
this.modal.destroy();this.player.destroy()};J.exports=K},{"../../resize/ResizeHandler":"@marcom/ac-films/resize/ResizeHandler","@marcom/ac-video/utils/urlOptimizer/19X9AssetSizes":343}],"@marcom/ac-films/internal/auto-films":[function(d,g,f){d("../AutoFilms")()
},{"../AutoFilms":"@marcom/ac-films/AutoFilms"}],"@marcom/ac-films/resize/ResizeHandler":[function(q,p,j){var l=/_([0-9]+)x([0-9]+)/;
var n=q("@marcom/ac-useragent");var k=(n.os.ios||n.os.android);function m(a){this._modal=a.modal;
this._player=a.player;this._mediaElement=a.player.getMediaElement();this._posterEl=this._player.el.querySelector(".ac-video-poster img");
this._playerContainer=this._player.el.parentElement;this._bindMethods();this._addEventListeners();
this._calcAspectRatio()}var o=m.prototype;o._bindMethods=function(){this._onLoadStart=this._onLoadStart.bind(this);
this._onResize=this._onResize.bind(this);this._fullScreenChange=this._fullScreenChange.bind(this);
this._calcAspectRatio=this._calcAspectRatio.bind(this);this._addResizeListeners=this._addResizeListeners.bind(this);
this._removeResizeListeners=this._removeResizeListeners.bind(this);this._onModalOpen=this._onModalOpen.bind(this)
};o._addEventListeners=function(){if(this._posterEl){this._posterEl.addEventListener("load",this._calcAspectRatio)
}this._modal.on("willopen",this._addResizeListeners);this._modal.on("open",this._onModalOpen);
this._modal.on("close",this._removeResizeListeners)};o._onModalOpen=function(){if(this._loadStarted){this._onResize();
this._player.el.style.display="";this._player.el.style.opacity=""}};o._addResizeListeners=function(){this._player.el.style.display="block";
this._player.el.style.opacity=0;window.addEventListener("resize",this._onResize);
window.addEventListener("orientationchange",this._onResize);this._player.on("loadstart",this._onLoadStart);
this._player.on("loadeddata",this._calcAspectRatio);this._player.on("fullscreen:change",this._fullScreenChange);
this._player.on("fullscreen:willenter",this._fullScreenChange);this._calcAspectRatio()
};o._removeResizeListeners=function(){this._onResize();window.removeEventListener("resize",this._onResize);
window.removeEventListener("orientationchange",this._onResize);this._player.off("loadstart",this._onLoadStart);
this._player.off("loadeddata",this._calcAspectRatio);this._player.off("fullscreen:change",this._fullScreenChange)
};o._removeEventListeners=function(){this._removeResizeListeners();this._modal.off("willopen",this._addResizeListeners);
this._modal.off("open",this._onModalOpen);this._modal.off("close",this._removeResizeListeners);
if(this._posterEl){this._posterEl.removeEventListener("load",this._calcAspectRatio)
}};o._onLoadStart=function(){this._loadStarted=false;requestAnimationFrame(function(){this._loadStarted=true;
this._onModalOpen()}.bind(this));this._calcAspectRatio()};o._calcAspectRatio=function(){this._aspectRatio=(this._player.getMediaWidth()/this._player.getMediaHeight());
if((isNaN(this._aspectRatio)||this._aspectRatio<=0)&&this._mediaElement.src){if(l.test(this._mediaElement.src)){this._aspectRatio=(parseInt(RegExp.$1,10)/parseInt(RegExp.$2,10))
}}if((isNaN(this._aspectRatio)||this._aspectRatio<=0)&&this._posterEl){this._aspectRatio=(this._posterEl.naturalWidth/this._posterEl.naturalHeight)
}this._onResize()};o._fullScreenChange=function(a){if(a&&a.type==="enter"){setTimeout(function(){this._isFullScreen=true;
this._onResize()}.bind(this),60);return}this._isFullScreen=this._player.isFullscreen();
this._onResize()};o.destroy=function(){this._removeEventListeners()};o._onResize=function(){var h=this._aspectRatio;
if(isNaN(h)){this._mediaElement.style.width="";this._mediaElement.style.height="";
return}var c=window.innerWidth;var f=window.innerHeight;var d=c/f;if(this._mediaElement.readyState<1){var i=parseInt(getComputedStyle(this._playerContainer).maxWidth.replace("px",""));
var a=i/h;var b=parseInt(getComputedStyle(this._playerContainer).minWidth.replace("px",""));
var g=(k)?parseInt(getComputedStyle(this._player.el).maxHeight.replace("px","")):a;
if(a>f||(g&&a>g)){i=(g||f)*h;a=Math.min(i/h,f)}if(i>c||i>(a*h)){a=Math.min((c/h),f);
i=a*h}this._mediaElement.style.width=i+"px";this._mediaElement.style.height=Math.min(a,f)+"px"
}else{this._mediaElement.style.width="";this._mediaElement.style.height=""}if(d>h&&!this._isFullScreen){this._playerContainer.parentElement.classList.add("center-horizontal")
}else{this._playerContainer.parentElement.classList.remove("center-horizontal")
}this._player.refreshSize()};p.exports=m},{"@marcom/ac-useragent":139}],"@marcom/ac-films/touchclick/TouchClick":[function(i,n,j){var l=i("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var o=i("@marcom/ac-feature/touchAvailable")();function k(a){a=a||{};this.el=a.el;
this._onTouchStart=this._onTouchStart.bind(this);this._onTouchMove=this._onTouchMove.bind(this);
this._onTouchEnd=this._onTouchEnd.bind(this);this._onClick=this._onClick.bind(this);
this._touchStart=false;l.call(this);this.activate()}var m=k.prototype=Object.create(l.prototype);
m._broadcastClick=function(a){this.trigger("click",{originalEvent:a})};m._onClick=function(a){a.stopPropagation();
a.preventDefault();if(!o){this._broadcastClick(a)}};m._onTouchStart=function(){this._touchStart=true
};m._onTouchEnd=function(a){if(this._touchStart===true){a.stopPropagation();a.preventDefault();
this._broadcastClick(a)}this._touchStart=false};m._onTouchMove=function(){this._touchStart=false
};m.activate=function(){if(o){this.el.addEventListener("touchstart",this._onTouchStart);
this.el.addEventListener("touchmove",this._onTouchMove);this.el.addEventListener("touchend",this._onTouchEnd)
}this.el.addEventListener("click",this._onClick)};m.deactivate=function(){this.el.removeEventListener("touchstart",this._onTouchStart);
this.el.removeEventListener("touchmove",this._onTouchMove);this.el.removeEventListener("touchend",this._onTouchEnd);
this.el.removeEventListener("click",this._onClick)};k.create=function(a,b){b=b||{};
return new k({el:a})};n.exports=k},{"@marcom/ac-event-emitter-micro":1,"@marcom/ac-feature/touchAvailable":7}],"@marcom/ac-films/windowload/windowLoad":[function(k,j,g){var h=false;
window.addEventListener("load",function(){h=true});function i(a){if(h){a()}else{window.addEventListener("load",a)
}}j.exports=i},{}],"@marcom/ac-films":[function(d,g,f){g.exports={create:d("./factory/createFilms")}
},{"./factory/createFilms":"@marcom/ac-films/factory/createFilms"}]},{},[]);