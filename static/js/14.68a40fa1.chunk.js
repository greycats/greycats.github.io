(this["webpackJsonpreact-ilabs3.0"]=this["webpackJsonpreact-ilabs3.0"]||[]).push([[14,18],{282:function(t,e,i){"use strict";var n=i(3),o=i(0),a=i.n(o),r=i(76),l=i(77),c=i.n(l),u=i(5),s=(i(283),function(t){var e=t.id,i=void 0===e?Object(u.c)():e,n=t.title,o=t.titleHeight,l=t.triggerRelativePosition;return a.a.createElement(r.d,{id:i,target:a.a.createElement("div",{className:"title-wrap"},a.a.createElement("div",{className:"title"},n)),animations:[{from:{height:0},to:{height:o}}],triggerRelativePosition:l})}),v=function(t){var e=t.id,i=void 0===e?Object(u.c)():e,n=t.intro,o=t.isSubTitle,l=void 0===o?"":o,s=t.triggerRelativePosition;return a.a.createElement(r.d,{id:i,target:a.a.createElement("div",{className:c()("intro-wrap",{"sub-title":l})},n),animations:[{from:{opacity:0,top:"-60px"},to:{opacity:1,top:0},delay:.3}],triggerRelativePosition:s})};e.a=function(t){var e=t.layoutType,i=void 0===e?"left-text":e,o=t.id,l=void 0===o?Object(u.c)():o,d=t.title,p=void 0===d?"":d,f=t.subTitle,m=void 0===f?"":f,b=t.intro,g=void 0===b?"":b,h=t.titleStyle,y=void 0===h?{}:h,x=t.titleHeight,j=void 0===x?60:x,w=t.showLottie,O=void 0===w||w,S=t.showTitle,E=void 0===S||S,P=t.animateIcon,H=void 0===P?null:P,R=t.animateWidth,T=void 0===R?"auto":R,N=t.animateHeight,k=void 0===N?"auto":N,A=t.mobileAnimateWidth,C=void 0===A?"auto":A,L=t.mobileAnimateHeight,W=void 0===L?"auto":L,D=t.SubComponent,I=void 0===D?null:D,J=t.wrapMinHeight,M=void 0===J?"750px":J,F=t.animationStyle,G=void 0===F?{}:F,U=t.mobileAnimationStyle,_=void 0===U?{}:U,q=t.wrapStyle,z=void 0===q?{}:q,B=t.triggerRelativePosition,K=window.isPC;return a.a.createElement("div",{className:c()("text-animation-wrap",K?i:"up-text panel",{"layout-1240":"up-text"!==i}),style:Object(n.a)({minHeight:M},z)},a.a.createElement("div",{className:"title-part",style:y},E?a.a.createElement(s,{id:l+"0",title:p,titleHeight:K?j:j/60*.38+"rem",triggerRelativePosition:B}):null,m?a.a.createElement(v,{id:l+"1",intro:m,isSubTitle:m,triggerRelativePosition:B}):null,a.a.createElement(v,{id:l+"1",intro:g}),I?a.a.createElement(I,null):null),a.a.createElement("div",{className:"animation-part",style:K?G:_},O?a.a.createElement(r.c,{options:{animationData:H},width:K?T:C,height:K?k:W,triggerRelativePosition:B}):null))}},283:function(t,e,i){},302:function(t,e,i){var n=i(309).Symbol;t.exports=n},307:function(t,e,i){var n=i(308),o=i(313);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},308:function(t,e,i){var n=i(302),o=i(311),a=i(312),r=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r&&r in Object(t)?o(t):a(t)}},309:function(t,e,i){var n=i(310),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},310:function(t,e,i){(function(e){var i="object"==typeof e&&e&&e.Object===Object&&e;t.exports=i}).call(this,i(7))},311:function(t,e,i){var n=i(302),o=Object.prototype,a=o.hasOwnProperty,r=o.toString,l=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,l),i=t[l];try{t[l]=void 0;var n=!0}catch(c){}var o=r.call(t);return n&&(e?t[l]=i:delete t[l]),o}},312:function(t,e){var i=Object.prototype.toString;t.exports=function(t){return i.call(t)}},313:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},314:function(t,e,i){var n=i(315),o=i(316),a=i(317);t.exports=function(t){return t&&t.length?n(t,a,o):void 0}},315:function(t,e,i){var n=i(307);t.exports=function(t,e,i){for(var o=-1,a=t.length;++o<a;){var r=t[o],l=e(r);if(null!=l&&(void 0===c?l===l&&!n(l):i(l,c)))var c=l,u=r}return u}},316:function(t,e){t.exports=function(t,e){return t<e}},317:function(t,e){t.exports=function(t){return t}},347:function(t,e,i){"use strict";i.r(e);var n=i(53),o=i.n(n),a=i(78),r=i(10),l=i(0),c=i.n(l),u=i(282),s=i(79),v=i(314),d=i.n(v);e.default=function(t){var e=t.GSData,n=Object(l.useState)(null),v=Object(r.a)(n,2),p=v[0],f=v[1],m=function(){var t=Object(a.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=Object(s.b)("gs_presentation"),t.t0){t.next=5;break}return t.next=4,i.e(108).then(i.t.bind(null,384,3));case 4:t.t0=t.sent.default;case 5:e=t.t0,f(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(l.useEffect)((function(){m()}),[]);var b=window.isPC,g=(d()([document.body.offsetWidth,1920])-200)/2.45+350;return c.a.createElement(u.a,Object.assign({layoutType:"up-text"},e.presentation,{titleStyle:{width:"520px"},wrapMinHeight:b?g:"4.5rem",animateIcon:p,animationStyle:{position:"absolute",top:"300px",right:0,paddingLeft:200},mobileAnimationStyle:{width:"100vw",marginLeft:"-0.25rem"}}))}}}]);
//# sourceMappingURL=14.68a40fa1.chunk.js.map