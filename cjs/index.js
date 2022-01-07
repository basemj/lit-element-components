"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n,r,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e,t,n){return(l=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&s(i,n.prototype),i}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,a(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)})(e)}function h(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=u();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function f(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=v(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function _(t,n,r,i){var o,a=arguments.length,s=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,r):i;if("object"===("undefined"==typeof Reflect?"undefined":e(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,n,r,i);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(a<3?o(s):a>3?o(n,r,s):o(n,r))||s);return a>3&&s&&Object.defineProperty(n,r,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}var g="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,S=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==n;){var r=t.nextSibling;e.removeChild(t),t=r}},b="{{lit-".concat(String(Math.random()).slice(2),"}}"),w="\x3c!--".concat(b,"--\x3e"),k=new RegExp("".concat(b,"|").concat(w)),x=function e(t,r){n(this,e),this.parts=[],this.element=r;for(var i=[],o=[],a=document.createTreeWalker(r.content,133,null,!1),s=0,u=-1,l=0,c=t.strings,h=t.values.length;l<h;){var p=a.nextNode();if(null!==p){if(u++,1===p.nodeType){if(p.hasAttributes()){for(var d=p.attributes,f=d.length,v=0,y=0;y<f;y++)P(d[y].name,"$lit$")&&v++;for(;v-- >0;){var m=c[l],_=A.exec(m)[2],g=_.toLowerCase()+"$lit$",S=p.getAttribute(g);p.removeAttribute(g);var w=S.split(k);this.parts.push({type:"attribute",index:u,name:_,strings:w}),l+=w.length-1}}"TEMPLATE"===p.tagName&&(o.push(p),a.currentNode=p.content)}else if(3===p.nodeType){var x=p.data;if(x.indexOf(b)>=0){for(var N=p.parentNode,T=x.split(k),E=T.length-1,O=0;O<E;O++){var V=void 0,R=T[O];if(""===R)V=C();else{var U=A.exec(R);null!==U&&P(U[2],"$lit$")&&(R=R.slice(0,U.index)+U[1]+U[2].slice(0,-"$lit$".length)+U[3]),V=document.createTextNode(R)}N.insertBefore(V,p),this.parts.push({type:"node",index:++u})}""===T[E]?(N.insertBefore(C(),p),i.push(p)):p.data=T[E],l+=E}}else if(8===p.nodeType)if(p.data===b){var j=p.parentNode;null!==p.previousSibling&&u!==s||(u++,j.insertBefore(C(),p)),s=u,this.parts.push({type:"node",index:u}),null===p.nextSibling?p.data="":(i.push(p),u--),l++}else for(var M=-1;-1!==(M=p.data.indexOf(b,M+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var $=0,I=i;$<I.length;$++){var L=I[$];L.parentNode.removeChild(L)}},P=function(e,t){var n=e.length-t.length;return n>=0&&e.slice(n)===t},N=function(e){return-1!==e.index},C=function(){return document.createComment("")},A=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function T(e,t){for(var n=e.element.content,r=e.parts,i=document.createTreeWalker(n,133,null,!1),o=O(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++;var h=i.currentNode;for(h.previousSibling===c&&(c=null),t.has(h)&&(l.push(h),null===c&&(c=h)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=O(r,o)]}l.forEach((function(e){return e.parentNode.removeChild(e)}))}var E=function(e){for(var t=11===e.nodeType?0:1,n=document.createTreeWalker(e,133,null,!1);n.nextNode();)t++;return t},O=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=t+1;n<e.length;n++){var r=e[n];if(N(r))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var V=new WeakMap,R=function(e){return"function"==typeof e&&V.has(e)},U={},j={},M=function(){function e(t,r,i){n(this,e),this.__parts=[],this.template=t,this.processor=r,this.options=i}return i(e,[{key:"update",value:function(e){var t,n=0,r=m(this.__parts);try{for(r.s();!(t=r.n()).done;){var i=t.value;void 0!==i&&i.setValue(e[n]),n++}}catch(e){r.e(e)}finally{r.f()}var o,a=m(this.__parts);try{for(a.s();!(o=a.n()).done;){var s=o.value;void 0!==s&&s.commit()}}catch(e){a.e(e)}finally{a.f()}}},{key:"_clone",value:function(){for(var e,t=g?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1),o=0,a=0,s=i.nextNode();o<r.length;)if(e=r[o],N(e)){for(;a<e.index;)a++,"TEMPLATE"===s.nodeName&&(n.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=n.pop(),s=i.nextNode());if("node"===e.type){var u=this.processor.handleTextExpression(this.options);u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var l;(l=this.__parts).push.apply(l,f(this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options)))}o++}else this.__parts.push(void 0),o++;return g&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),$=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:function(e){return e}}),I=" ".concat(b," "),L=function(){function e(t,r,i,o){n(this,e),this.strings=t,this.values=r,this.type=i,this.processor=o}return i(e,[{key:"getHTML",value:function(){for(var e=this.strings.length-1,t="",n=!1,r=0;r<e;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1);var a=A.exec(i);t+=null===a?i+(n?I:w):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+b}return t+=this.strings[e]}},{key:"getTemplateElement",value:function(){var e=document.createElement("template"),t=this.getHTML();return void 0!==$&&(t=$.createHTML(t)),e.innerHTML=t,e}}]),e}(),q=function(t){return null===t||!("object"===e(t)||"function"==typeof t)},F=function(e){return Array.isArray(e)||!(!e||!e[Symbol.iterator])},z=function(){function t(e,r,i){n(this,t),this.dirty=!0,this.element=e,this.name=r,this.strings=i,this.parts=[];for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(t,[{key:"_createPart",value:function(){return new B(this)}},{key:"_getValue",value:function(){var t=this.strings,n=t.length-1,r=this.parts;if(1===n&&""===t[0]&&""===t[1]){var i=r[0].value;if("symbol"===e(i))return String(i);if("string"==typeof i||!F(i))return i}for(var o="",a=0;a<n;a++){o+=t[a];var s=r[a];if(void 0!==s){var u=s.value;if(q(u)||!F(u))o+="string"==typeof u?u:String(u);else{var l,c=m(u);try{for(c.s();!(l=c.n()).done;){var h=l.value;o+="string"==typeof h?h:String(h)}}catch(e){c.e(e)}finally{c.f()}}}}return o+=t[n]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),B=function(){function e(t){n(this,e),this.value=void 0,this.committer=t}return i(e,[{key:"setValue",value:function(e){e===U||q(e)&&e===this.value||(this.value=e,R(e)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;R(this.value);){var e=this.value;this.value=U,e(this)}this.value!==U&&this.committer.commit()}}]),e}(),H=function(){function e(t){n(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}return i(e,[{key:"appendInto",value:function(e){this.startNode=e.appendChild(C()),this.endNode=e.appendChild(C())}},{key:"insertAfterNode",value:function(e){this.startNode=e,this.endNode=e.nextSibling}},{key:"appendIntoPart",value:function(e){e.__insert(this.startNode=C()),e.__insert(this.endNode=C())}},{key:"insertAfterPart",value:function(e){e.__insert(this.startNode=C()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){if(null!==this.startNode.parentNode){for(;R(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=U,e(this)}var t=this.__pendingValue;t!==U&&(q(t)?t!==this.value&&this.__commitText(t):t instanceof L?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):F(t)?this.__commitIterable(t):t===j?(this.value=j,this.clear()):this.__commitText(t))}}},{key:"__insert",value:function(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function(e){var t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}},{key:"__commitTemplateResult",value:function(e){var t=this.options.templateFactory(e);if(this.value instanceof M&&this.value.template===t)this.value.update(e.values);else{var n=new M(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(t){Array.isArray(this.value)||(this.value=[],this.clear());var n,r,i=this.value,o=0,a=m(t);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0===(n=i[o])&&(n=new e(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(s),n.commit(),o++}}catch(e){a.e(e)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;S(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),D=function(){function e(t,r,i){if(n(this,e),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;R(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=U,e(this)}if(this.__pendingValue!==U){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=U}}}]),e}(),W=function(e){o(r,z);var t=p(r);function r(e,i,o){var a;return n(this,r),(a=t.call(this,e,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return i(r,[{key:"_createPart",value:function(){return new J(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:d(a(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),J=function(e){o(r,B);var t=p(r);function r(){return n(this,r),t.apply(this,arguments)}return r}(),G=!1;!function(){try{var e={get capture(){return G=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}}();var K=function(){function e(t,r,i){var o=this;n(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(e){return o.handleEvent(e)}}return i(e,[{key:"setValue",value:function(e){this.__pendingValue=e}},{key:"commit",value:function(){for(;R(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=U,e(this)}if(this.__pendingValue!==U){var t=this.__pendingValue,n=this.value,r=null==t||null!=n&&(t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive),i=null!=t&&(null==n||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Q(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=U}}},{key:"handleEvent",value:function(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),Q=function(e){return e&&(G?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function X(e){var t=Y.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Y.set(e.type,t));var n=t.stringsArray.get(e.strings);if(void 0!==n)return n;var r=e.strings.join(b);return void 0===(n=t.keyString.get(r))&&(n=new x(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}var Y=new Map,Z=new WeakMap,ee=new(function(){function e(){n(this,e)}return i(e,[{key:"handleAttributeExpressions",value:function(e,t,n,r){var i=t[0];return"."===i?new W(e,t.slice(1),n).parts:"@"===i?[new K(e,t.slice(1),r.eventContext)]:"?"===i?[new D(e,t.slice(1),n)]:new z(e,t,n).parts}},{key:"handleTextExpression",value:function(e){return new H(e)}}]),e}());
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");var te=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new L(e,n,"html",ee)},ne=function(e,t){return"".concat(e,"--").concat(t)},re=!0;void 0===window.ShadyCSS?re=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),re=!1);var ie=function(e){return function(t){var n=ne(t.type,e),r=Y.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Y.set(n,r));var i=r.stringsArray.get(t.strings);if(void 0!==i)return i;var o=t.strings.join(b);if(void 0===(i=r.keyString.get(o))){var a=t.getTemplateElement();re&&window.ShadyCSS.prepareTemplateDom(a,e),i=new x(t,a),r.keyString.set(o,i)}return r.stringsArray.set(t.strings,i),i}},oe=["html","svg"],ae=new Set,se=function(e,t,n){ae.add(e);var r=n?n.element:document.createElement("template"),i=t.querySelectorAll("style"),o=i.length;if(0!==o){for(var a=document.createElement("style"),s=0;s<o;s++){var u=i[s];u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(e){oe.forEach((function(t){var n=Y.get(ne(t,e));void 0!==n&&n.keyString.forEach((function(e){var t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach((function(e){n.add(e)})),T(e,n)}))}))}(e);var l=r.content;n?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.element.content,i=e.parts;if(null!=n)for(var o=document.createTreeWalker(r,133,null,!1),a=O(i),s=0,u=-1;o.nextNode();){for(u++,o.currentNode===n&&(s=E(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=O(i,a);return}a=O(i,a)}}else r.appendChild(t)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);var c=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){l.insertBefore(a,l.firstChild);var h=new Set;h.add(a),T(n,h)}}else window.ShadyCSS.prepareTemplateStyles(r,e)};window.JSCompiler_renameProperty=function(e,t){return e};var ue={toAttribute:function(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute:function(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},le=function(e,t){return t!==e&&(t==t||e==e)},ce={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:le},he=function(r){o(l,c(HTMLElement));var a,s,u=p(l);function l(){var e;return n(this,l),(e=u.call(this)).initialize(),e}return i(l,[{key:"initialize",value:function(){var e=this;this._updateState=0,this._updatePromise=new Promise((function(t){return e._enableUpdatingResolver=t})),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}},{key:"_saveInstanceProperties",value:function(){var e=this;this.constructor._classProperties.forEach((function(t,n){if(e.hasOwnProperty(n)){var r=e[n];delete e[n],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(n,r)}}))}},{key:"_applyInstanceProperties",value:function(){var e=this;this._instanceProperties.forEach((function(t,n){return e[n]=t})),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(e,t,n){t!==n&&this._attributeToProperty(e,n)}},{key:"_propertyToAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ce,r=this.constructor,i=r._attributeNameForProperty(e,n);if(void 0!==i){var o=r._propertyValueToAttribute(t,n);if(void 0===o)return;this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(e,t){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){var i=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}},{key:"requestUpdateInternal",value:function(e,t,n){var r=!0;if(void 0!==e){var i=this.constructor;n=n||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}},{key:"_enqueueUpdate",value:(a=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState=4|this._updateState,e.prev=1,e.next=4,this._updatePromise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:if(null==(t=this.performUpdate())){e.next=12;break}return e.next=12,t;case 12:return e.abrupt("return",!this._hasRequestedUpdate);case 13:case"end":return e.stop()}}),e,this,[[1,6]])})),s=function(){var e=this,n=arguments;return new Promise((function(r,i){var o=a.apply(e,n);function s(e){t(o,r,i,s,u,"next",e)}function u(e){t(o,r,i,s,u,"throw",e)}s(void 0)}))},function(){return s.apply(this,arguments)})},{key:"performUpdate",value:function(){if(this._hasRequestedUpdate){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(e){return!0}},{key:"update",value:function(e){var t=this;void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((function(e,n){return t._propertyToAttribute(n,t[n],e)})),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(e){}},{key:"firstUpdated",value:function(e){}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}}],[{key:"_ensureClassProperties",value:function(){var e=this;if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((function(t,n){return e._classProperties.set(n,t)}))}}},{key:"createProperty",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce;if(this._ensureClassProperties(),this._classProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"===e(t)?Symbol():"__".concat(t),i=this.getPropertyDescriptor(t,r,n);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}},{key:"getPropertyDescriptor",value:function(e,t,n){return{get:function(){return this[t]},set:function(r){var i=this[e];this[t]=r,this.requestUpdateInternal(e,i,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(e){return this._classProperties&&this._classProperties.get(e)||ce}},{key:"finalize",value:function(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t,n=this.properties,r=m([].concat(f(Object.getOwnPropertyNames(n)),f("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])));try{for(r.s();!(t=r.n()).done;){var i=t.value;this.createProperty(i,n[i])}}catch(e){r.e(e)}finally{r.f()}}}},{key:"_attributeNameForProperty",value:function(e,t){var n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:le;return n(e,t)}},{key:"_propertyValueFromAttribute",value:function(e,t){var n=t.type,r=t.converter||ue,i="function"==typeof r?r:r.fromAttribute;return i?i(e,n):e}},{key:"_propertyValueToAttribute",value:function(e,t){if(void 0!==t.reflect){var n=t.type,r=t.converter;return(r&&r.toAttribute||ue.toAttribute)(e,n)}}},{key:"observedAttributes",get:function(){var e=this;this.finalize();var t=[];return this._classProperties.forEach((function(n,r){var i=e._attributeNameForProperty(r,n);void 0!==i&&(e._attributeToPropertyMap.set(i,r),t.push(i))})),t}}]),l}();he.finalized=!0;function pe(e){return function(t,n){return void 0!==n?function(e,t,n){t.constructor.createProperty(n,e)}(e,t,n):function(e,t){return"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher:function(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function(n){n.createProperty(t.key,e)}}}(e,t)}}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var de=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),ve=function(){function e(t,r){if(n(this,e),r!==fe)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}return i(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(de?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),ye=function(e){if(e instanceof ve)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var me={},_e=function(e){o(r,he);var t=p(r);function r(){return n(this,r),t.apply(this,arguments)}return i(r,[{key:"initialize",value:function(){d(a(r.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?de?this.renderRoot.adoptedStyleSheets=e.map((function(e){return e instanceof CSSStyleSheet?e:e.styleSheet})):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((function(e){return e.cssText})),this.localName))}},{key:"connectedCallback",value:function(){d(a(r.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(e){var t=this,n=this.render();d(a(r.prototype),"update",this).call(this,e),n!==me&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((function(e){var n=document.createElement("style");n.textContent=e.cssText,t.renderRoot.appendChild(n)})))}},{key:"render",value:function(){return me}}],[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var e=this.getStyles();if(Array.isArray(e)){var t=function e(t,n){return t.reduceRight((function(t,n){return Array.isArray(n)?e(n,t):(t.add(n),t)}),n)}(e,new Set),n=[];t.forEach((function(e){return n.unshift(e)})),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((function(e){if(e instanceof CSSStyleSheet&&!de){var t=Array.prototype.slice.call(e.cssRules).reduce((function(e,t){return e+t.cssText}),"");return new ve(String(t),fe)}return e}))}}}]),r}();_e.finalized=!0,_e.render=function(t,n,r){if(!r||"object"!==e(r)||!r.scopeName)throw new Error("The `scopeName` option is required.");var i=r.scopeName,o=Z.has(n),a=re&&11===n.nodeType&&!!n.host,s=a&&!ae.has(i),u=s?document.createDocumentFragment():n;if(function(e,t,n){var r=Z.get(t);void 0===r&&(S(t,t.firstChild),Z.set(t,r=new H(Object.assign({templateFactory:X},n))),r.appendInto(t)),r.setValue(e),r.commit()}(t,u,Object.assign({templateFactory:ie(i)},r)),s){var l=Z.get(u);Z.delete(u);var c=l.value instanceof M?l.value.template:void 0;se(i,u,c),S(n,n.firstChild),n.appendChild(u),Z.set(n,l)}!o&&a&&window.ShadyCSS.styleElement(n.host)};const ge=(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n.reduce((function(t,n,r){return t+ye(n)+e[r+1]}),e[0]);return new ve(i,fe)})`
    :host(.primary) button {
        background-color: red;
        border: 0px solid transparent;
        border-radius: 10px;
        padding: 20px;
    }
    :host(.secondary) button {
        background-color: green;
        border: 0px solid transparent;
        border-radius: 10px;
        padding: 20px;
    }
`;class Se extends _e{constructor(){super(...arguments),this.label="Default text",this.eventListener="",this.value=0,this.myFunction=()=>{var e;if(null===(e=this.eventListener)||void 0===e?void 0:e.length){this.value++;const e=`Button clicked ${this.value} times`;this.dispatchEvent(new CustomEvent(this.eventListener,{bubbles:!0,composed:!0,detail:e}))}}}static get styles(){return ge}render(){return te`<button @click="${this.myFunction}">${this.label}</button>`}}_([pe({type:String})],Se.prototype,"label",void 0),_([pe({type:String})],Se.prototype,"eventListener",void 0);class be extends _e{constructor(){super(...arguments),this.navArray="[]"}render(){const e=((e,t)=>{try{const t=JSON.parse(e.replace(/&quot;/g,'"'));return Array.isArray(t)?t:[]}catch(e){return console.error(`Component Depot Error: Check array property at "${t}"`),[]}})(this.navArray,"navArray");return e.length?te`
      <nav>
        <ul>
          ${e.map((e=>te`
              <li class="${e.selected?"selected":""}">
                <a href="${e.url}">
                  ${e.icon&&te`<i class="${e.icon}"></i>`}
                  <span>${e.title}</span>
                </a>
              </li>
            `))}
        </ul>
      </nav>
    `:te`
      Navigation missing
    `}}_([pe({type:String})],be.prototype,"navArray",void 0);var we={cdButton:()=>{customElements.define("cd-button",Se)},cdListNav:()=>{customElements.define("cd-list-nav",be)}};module.exports=we;
//# sourceMappingURL=index.js.map