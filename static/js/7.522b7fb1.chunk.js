(this["webpackJsonpreact-ilabs3.0"]=this["webpackJsonpreact-ilabs3.0"]||[]).push([[7],{276:function(t,e,i){"use strict";var a=i(38),n=i(0),o=i.n(n),r=i(75),l=i(76),c=i.n(l),s=i(4);i(277);function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(i,!0).forEach((function(e){Object(a.a)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m=function(t){var e=t.id,i=void 0===e?Object(s.c)():e,a=t.title,n=t.titleHeight,l=t.triggerRelativePosition;return o.a.createElement(r.d,{id:i,target:o.a.createElement("div",{className:"title-wrap"},o.a.createElement("div",{className:"title"},a)),animations:[{from:{height:0},to:{height:n}}],triggerRelativePosition:l})},p=function(t){var e=t.id,i=void 0===e?Object(s.c)():e,a=t.intro,n=t.isSubTitle,l=void 0===n?"":n,d=t.triggerRelativePosition;return o.a.createElement(r.d,{id:i,target:o.a.createElement("div",{className:c()("intro-wrap",{"sub-title":l})},a),animations:[{from:{opacity:0,top:"-60px"},to:{opacity:1,top:0},delay:.3}],triggerRelativePosition:d})};e.a=function(t){var e=t.layoutType,i=void 0===e?"left-text":e,a=t.id,n=void 0===a?Object(s.c)():a,l=t.title,d=void 0===l?"":l,u=t.subTitle,g=void 0===u?"":u,b=t.intro,y=void 0===b?"":b,h=t.titleStyle,f=void 0===h?{}:h,w=t.titleHeight,O=void 0===w?60:w,P=t.showLottie,E=void 0===P||P,j=t.showTitle,S=void 0===j||j,x=t.animateIcon,R=void 0===x?null:x,H=t.animateWidth,T=void 0===H?"auto":H,D=t.animateHeight,N=void 0===D?"auto":D,A=t.mobileAnimateWidth,k=void 0===A?"auto":A,C=t.mobileAnimateHeight,I=void 0===C?"auto":C,J=t.SubComponent,W=void 0===J?null:J,G=t.wrapMinHeight,L=void 0===G?"750px":G,M=t.animationStyle,Y=void 0===M?{}:M,q=t.mobileAnimationStyle,z=void 0===q?{}:q,B=t.wrapStyle,F=void 0===B?{}:B,K=t.triggerRelativePosition,Q=window.isPC;return o.a.createElement("div",{className:c()("text-animation-wrap",Q?i:"up-text panel",{"layout-1240":"up-text"!==i}),style:v({minHeight:L},F)},o.a.createElement("div",{className:"title-part",style:f},S?o.a.createElement(m,{id:n+"0",title:d,titleHeight:Q?O:O/60*.38+"rem",triggerRelativePosition:K}):null,g?o.a.createElement(p,{id:n+"1",intro:g,isSubTitle:g,triggerRelativePosition:K}):null,o.a.createElement(p,{id:n+"1",intro:y}),W?o.a.createElement(W,null):null),o.a.createElement("div",{className:"animation-part",style:Q?Y:z},E?o.a.createElement(r.c,{options:{animationData:R},width:Q?T:k,height:Q?N:I,triggerRelativePosition:K}):null))}},277:function(t,e,i){},500:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i.n(a),o=i(276);e.default=function(t){var e=t.GSData,i=window.isPC;return n.a.createElement(o.a,Object.assign({layoutType:"left-text"},e.progressive,{titleStyle:{width:"520px"},animateIcon:e.progressiveAnimation,animationStyle:{width:720,transform:"translateY(-150px)"},wrapStyle:i?{marginTop:"130px"}:{}}))}}}]);
//# sourceMappingURL=7.522b7fb1.chunk.js.map