(this["webpackJsonpreact-ilabs3.0"]=this["webpackJsonpreact-ilabs3.0"]||[]).push([[17],{282:function(e,t,a){"use strict";var i=a(3),n=a(0),l=a.n(n),o=a(76),r=a(77),m=a.n(r),c=a(5),s=(a(283),function(e){var t=e.id,a=void 0===t?Object(c.c)():t,i=e.title,n=e.titleHeight,r=e.triggerRelativePosition;return l.a.createElement(o.d,{id:a,target:l.a.createElement("div",{className:"title-wrap"},l.a.createElement("div",{className:"title"},i)),animations:[{from:{height:0},to:{height:n}}],triggerRelativePosition:r})}),d=function(e){var t=e.id,a=void 0===t?Object(c.c)():t,i=e.intro,n=e.isSubTitle,r=void 0===n?"":n,s=e.triggerRelativePosition;return l.a.createElement(o.d,{id:a,target:l.a.createElement("div",{className:m()("intro-wrap",{"sub-title":r})},i),animations:[{from:{opacity:0,top:"-60px"},to:{opacity:1,top:0},delay:.3}],triggerRelativePosition:s})};t.a=function(e){var t=e.layoutType,a=void 0===t?"left-text":t,n=e.id,r=void 0===n?Object(c.c)():n,p=e.title,v=void 0===p?"":p,y=e.subTitle,g=void 0===y?"":y,u=e.intro,h=void 0===u?"":u,w=e.titleStyle,E=void 0===w?{}:w,f=e.titleHeight,b=void 0===f?60:f,x=e.showLottie,S=void 0===x||x,N=e.showTitle,T=void 0===N||N,j=e.animateIcon,L=void 0===j?null:j,P=e.animateWidth,O=void 0===P?"auto":P,H=e.animateHeight,I=void 0===H?"auto":H,R=e.mobileAnimateWidth,C=void 0===R?"auto":R,k=e.mobileAnimateHeight,A=void 0===k?"auto":k,D=e.SubComponent,W=void 0===D?null:D,B=e.wrapMinHeight,M=void 0===B?"750px":B,J=e.animationStyle,Y=void 0===J?{}:J,G=e.mobileAnimationStyle,Q=void 0===G?{}:G,q=e.wrapStyle,z=void 0===q?{}:q,F=e.triggerRelativePosition,K=window.isPC;return l.a.createElement("div",{className:m()("text-animation-wrap",K?a:"up-text panel",{"layout-1240":"up-text"!==a}),style:Object(i.a)({minHeight:M},z)},l.a.createElement("div",{className:"title-part",style:E},T?l.a.createElement(s,{id:r+"0",title:v,titleHeight:K?b:b/60*.38+"rem",triggerRelativePosition:F}):null,g?l.a.createElement(d,{id:r+"1",intro:g,isSubTitle:g,triggerRelativePosition:F}):null,l.a.createElement(d,{id:r+"1",intro:h}),W?l.a.createElement(W,null):null),l.a.createElement("div",{className:"animation-part",style:K?Y:Q},S?l.a.createElement(o.c,{options:{animationData:L},width:K?O:C,height:K?I:A,triggerRelativePosition:F}):null))}},283:function(e,t,a){},299:function(e,t,a){"use strict";var i=a(3),n=a(0),l=a.n(n),o=a(76),r=a(300),m=a.n(r),c=a(5),s=a(284),d=(a(301),window.isPC),p=function(e){var t=e.commentList,a=e.overlayStyle,n=void 0===a?{}:a;return t.map((function(e,t){return console.log("overlaystyle is",n),l.a.createElement("div",{className:"comment-card-item",key:t,style:Object(i.a)({},n)},l.a.createElement("img",{className:"card-star",src:m.a}),l.a.createElement("div",{className:"card-title"},e.title),l.a.createElement("div",{className:"card-content"},e.content),l.a.createElement("div",{className:"card-name"},e.name),l.a.createElement("div",{className:"card-date"},e.date))}))};t.a=d?function(e){var t=e.commentList,a=void 0===t?[]:t,i=e.id,n=void 0===i?Object(c.c)("comment-card"):i,r=e.overlayStyle,m=void 0===r?{}:r;return l.a.createElement("div",{className:"comment-card-wrap"},l.a.createElement(o.d,{id:n,target:l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("div",{className:"comment-card-list"},l.a.createElement(p,{commentList:a,overlayStyle:m}))),triggerRelativePosition:{top:"-100px"},animations:[{from:{opacity:0,top:"100px"},to:{opacity:1,top:0},duration:1.5}]}))}:function(e){var t=e.commentList,a=void 0===t?[]:t,i=e.overlayStyle,n=void 0===i?{}:i;return l.a.createElement("div",{className:"m-comment-card-wrap"},l.a.createElement(s.a,{list:p({commentList:a}),overlayStyle:n}))}},300:function(e,t,a){e.exports=a.p+"static/media/Star.728eb5be.svg"},301:function(e,t,a){},349:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(282),o=a(299),r=a(76);t.default=function(e){var t=e.GSData,a=window.isPC;return n.a.createElement("div",null,n.a.createElement(l.a,Object.assign({layoutType:"left-text"},t.designed,{titleStyle:{width:"520px"},animateIcon:t.other.disclouse,animationStyle:{width:720},wrapStyle:a?{padding:0}:{paddingTop:0},showTitle:!1})),n.a.createElement(l.a,Object.assign({layoutType:"left-text"},t.digDeeper,{titleStyle:{width:"520px"},animateIcon:t.other.deeper,animationStyle:{width:720,transform:"translateY(-50px)"}})),n.a.createElement(l.a,Object.assign({layoutType:"left-text"},t.higherQuality,{titleStyle:{width:"520px"},animateIcon:t.other.review,wrapStyle:a?{padding:"100px 0 50px"}:{},animationStyle:{width:720,transform:"translateY(-160px)"}})),n.a.createElement("div",{style:a?{height:750,marginBottom:70}:{height:"1.5rem"}},n.a.createElement(r.c,{options:{animationData:t.other.device},width:document.body.offsetWidth>1920?"1920px":"100vw"})),n.a.createElement("div",{className:"layout-1240"},n.a.createElement(l.a,{layoutType:"left-text",wrapMinHeight:450,title:t.typeface.title,intro:t.typeface.intro,titleStyle:{width:"586px"}}),n.a.createElement("div",{style:a?{height:550,display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"baseline"}:{padding:"0 0.25rem",height:"7.8rem"}},t.typeface.animationList.map((function(e,t){return n.a.createElement("div",{key:t,style:a?e.style:e.mobileStyle},n.a.createElement(r.d,{target:n.a.createElement("img",{src:!a&&e.mobileImg?e.mobileImg:e.img,style:{position:"relative"}}),delay:a?0:.2*t,animations:[{from:{opacity:0,top:"50px"},to:{opacity:1,top:0}}]}))})))),n.a.createElement("div",{className:"layout-1240"},n.a.createElement(l.a,{layoutType:"right-text",wrapMinHeight:a?450:"2.5rem",title:t.colors.title,intro:t.colors.intro,titleStyle:{width:"600px"},wrapStyle:{paddingBottom:0}}),n.a.createElement("div",{style:{height:654,display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:a?"-200px":"-0.5rem",marginBottom:105,padding:a?0:"0 0.25rem"}},t.colors.animationList.map((function(e,t){return n.a.createElement("div",{key:t,style:a?{width:264}:{width:"45%"}},n.a.createElement(r.c,{options:{animationData:e.img}}))})))),n.a.createElement(l.a,Object.assign({layoutType:"left-text"},t.grid,{titleStyle:{width:"243px"},animateIcon:t.other.grid,mobileAnimationStyle:{width:"100vw",marginLeft:"-0.25rem"}})),n.a.createElement("div",{className:"layout-1240",style:{marginBottom:50}},n.a.createElement(l.a,Object.assign({layoutType:"up-text"},t.sitemap,{titleStyle:{width:"600px"},wrapMinHeight:a?1020:"4.5rem",animateIcon:t.other.sitemap,mobileAnimationStyle:{width:"100vw",marginLeft:"-0.25rem"}}))),n.a.createElement(o.a,{commentList:t.commentList}))}}}]);
//# sourceMappingURL=17.650f55eb.chunk.js.map