(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{191:function(e,t,r){var content=r(194);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("31685a02",content,!0,{sourceMap:!1})},192:function(e,t,r){var content=r(196);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(65).default)("6639c468",content,!0,{sourceMap:!1})},193:function(e,t,r){"use strict";var n=r(191);r.n(n).a},194:function(e,t,r){(t=r(64)(!1)).push([e.i,".card[data-v-b4f9f662]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;padding:1rem;margin:.25rem;border:.25rem solid #dcdcdc}",""]),e.exports=t},195:function(e,t,r){"use strict";var n=r(192);r.n(n).a},196:function(e,t,r){(t=r(64)(!1)).push([e.i,".header[data-v-f01abe60]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.cards[data-v-f01abe60]{display:flex;flex-wrap:wrap}",""]),e.exports=t},197:function(e,t,r){"use strict";r.r(t);r(66),r(22),r(23),r(50),r(17),r(18),r(11),r(126);var n=r(40),c=r(83),o=r(84),f=r(85),l=r(79),d=r(15),v=r(80),h=r(127);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},j=function(e){Object(o.a)(r,e);var t=y(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return r}(v.Vue);O([Object(v.Prop)()],j.prototype,"person",void 0);var _=j=O([Object(v.Component)({})],j),m=(r(193),r(39)),R=Object(m.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card"},[t("h2",[this._v(this._s(this.person.first_name+" "+this.person.last_name))]),this._v(" "),t("img",{attrs:{src:"https://robohash.org/"+this.person.first_name+"_"+this.person.last_name}})])}),[],!1,null,"b4f9f662",null).exports,w=r(21);function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var x=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},S=function(e){Object(o.a)(r,e);var t=D(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return r}(v.Vue);x([h.State],S.prototype,"people",void 0);var k=S=x([Object(v.Component)({components:{Card:R},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(w.e)("device-type",["isMobile","isTablet","isDesktop"]))})],S),C=(r(195),Object(m.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h1",{staticClass:"header"},[e._v("Nuxt TypeScript Starter")]),e._v(" "),r("dl",[r("dt",[e._v("Vuex Bind Check")]),e._v(" "),r("dd",[e._v("isMobile: "+e._s(e.isMobile))]),e._v(" "),r("dd",[e._v("isTablet: "+e._s(e.isTablet))]),e._v(" "),r("dd",[e._v("isDesktop: "+e._s(e.isDesktop))])]),e._v(" "),r("div",{staticClass:"cards"},e._l(e.people,(function(e){return r("Card",{key:e.id,attrs:{person:e}})})),1)])}),[],!1,null,"f01abe60",null));t.default=C.exports}}]);