(this["webpackJsonpparty-ify"]=this["webpackJsonpparty-ify"]||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a(1);a(17);function o(){return r.a.createElement("section",{className:"Intro"},r.a.createElement("h1",{className:"Intro__Title"},"Party-ify:"),r.a.createElement("p",{className:"Intro__Description"},"Instantly* bring the party to any* image. Guaranteed* to make you boring work Slack* fun."))}var i=a(3),s=a(6);function u(e){var t=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"file",id:"file-input",className:"FileSelector__Input",onChange:function(){var a,n;e.onFileSelected(null===(a=t.current)||void 0===a||null===(n=a.files)||void 0===n?void 0:n[0])},ref:t}),r.a.createElement("label",{htmlFor:"file-input",className:"Button FileSelector__Label"},"Pick an image..."))}function f(e){var t=e.onReady,a=e.onDestroy,l=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=l.current,n=null===e||void 0===e?void 0:e.getContext("2d");if(e&&n){var r=e.width,c=null===e||void 0===e?void 0:e.height,o=function(e,t,a){var l=Math.min(r/t,c/a),o=l*t,i=l*a,s=(r-o)/2,u=(c-i)/2;n.clearRect(0,0,r,c),n.drawImage(e,s,u,o,i)};return t(o),function(){a(o)}}}),[t,a]),r.a.createElement("figure",{className:"MessagePreview"},r.a.createElement("span",{role:"presentation",className:"MessagePreview__Avatar"}),r.a.createElement("p",{className:"MessagePreview__Text"},"@channel it's party time!"),r.a.createElement("canvas",{className:"MessagePreview__Emoji",ref:l,width:"22px",height:"22px"}))}var m={classic:"Classic",centered:"Centered",bounce:"Bounce/bop"},d={overlay:"Overlay",lighten:"Lighten",multiply:"Multiply"},g={classic:["#ff6968","#fe6cb7","#ff68f7","#ff8cff","#d78cff","#8bb5fe","#87ffff","#88ff89","#fed689","#ff8d8b"],kakapo:["#53752e","#678d31","#74a145","#94d64d","#97e346","#aaf757","#93d64b","#91bd62","#84b352","#48820a"],cockatoo:["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],galah:["#ff79f8","#ff57cb","#ff329a","#ff0968","#f60088","#fa31ff","#f72fa7","#f34bc6","#f48dff","#f2a2ff"],king:["#549310","#6bab12","#f2be03","#fc9e41","#f57118","#d17205","#fa8d2d","#ed881c","#e5cf24","#9aae04"],hyacinth:["#46f6ff","#007efe","#009fff","#0029c9","#3b4ee4","#5e72ff","#0095ff","#00b2ff","#00ccff","#00e2ff"]};var h={waveStyle:"classic",blendMode:"overlay",verticalCenter:1,magnitude:1,colourScheme:"classic",contrast:0,brightness:1},v=Object(i.a)(Object(i.a)({},{classic:"Classic",kakapo:"K\u0101k\u0101p\u014d green",cockatoo:"Cockatoo white",galah:"Galah pink",hyacinth:"Hyacinth blue",king:"King green+orange"}),{},{none:"None"});function p(e){var t,a=Object(n.useRef)(null),l=Object(n.useRef)(null),c=Object(n.useRef)(null),o=Object(n.useRef)(null),i=Object(n.useRef)(null),s=Object(n.useRef)(null),u=Object(n.useRef)(null),f=function(){var t,n,r,f,m,d,g,v,p,b,E,w,y,_,O={waveStyle:null!==(t=null===(n=a.current)||void 0===n?void 0:n.value)&&void 0!==t?t:h.waveStyle,blendMode:null!==(r=null===(f=o.current)||void 0===f?void 0:f.value)&&void 0!==r?r:h.blendMode,colourScheme:null!==(m=null===(d=i.current)||void 0===d?void 0:d.value)&&void 0!==m?m:h.colourScheme,verticalCenter:null!=(null===(g=l.current)||void 0===g?void 0:g.value)?Number.parseFloat(null===(v=l.current)||void 0===v?void 0:v.value):h.verticalCenter,magnitude:null!=(null===(p=c.current)||void 0===p?void 0:p.value)?Number.parseFloat(null===(b=c.current)||void 0===b?void 0:b.value):h.verticalCenter,contrast:null!=(null===(E=s.current)||void 0===E?void 0:E.value)?Number.parseFloat(null===(w=s.current)||void 0===w?void 0:w.value):h.contrast,brightness:null!=(null===(y=u.current)||void 0===y?void 0:y.value)?Number.parseFloat(null===(_=u.current)||void 0===_?void 0:_.value):h.brightness};e.onSettingsChanged(O)};return r.a.createElement("div",{className:"Settings SettingsContainer__Section"},r.a.createElement("h2",{className:"Heading Heading--2"},"2. Settings"),r.a.createElement("label",{className:"Settings__Label",htmlFor:"wave-select"},"Wavey style"),r.a.createElement("select",{className:"Settings__Input",id:"wave-select",ref:a,onChange:f},Object.keys(m).map((function(e){return r.a.createElement("option",{key:e,value:e},m[e])}))),r.a.createElement("label",{className:"Settings__Label",htmlFor:"magnitude-slider"},"Party magnitude"),r.a.createElement("input",{className:"Settings__Input",id:"magnitude-slider",type:"range",min:"0",max:"1.5",step:"0.05",ref:c,defaultValue:h.magnitude,onChange:f}),r.a.createElement("label",{className:"Settings__Label",htmlFor:"center-slider"},"Vertical center"),r.a.createElement("input",{className:"Settings__Input",id:"center-slider",type:"range",min:"-0.65",max:"2",step:"0.05",ref:l,defaultValue:h.verticalCenter,onChange:f}),r.a.createElement("label",{className:"Settings__Label",htmlFor:"colour-select"},"Rainbow colours"),r.a.createElement("select",{className:"Settings__Input",id:"colour-select",ref:i,onChange:f},Object.keys(v).map((function(e){return r.a.createElement("option",{key:e,value:e},v[e])}))),"none"!==(null===(t=i.current)||void 0===t?void 0:t.value)&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"Settings__Label",htmlFor:"contrast-slider"},"Contrast"),r.a.createElement("input",{className:"Settings__Input",id:"contrast-slider",type:"range",min:"-1",max:"1",step:"0.05",ref:s,defaultValue:h.contrast,onChange:f}),r.a.createElement("label",{className:"Settings__Label",htmlFor:"brightness-slider"},"Brightness"),r.a.createElement("input",{className:"Settings__Input",id:"brightness-slider",type:"range",min:"0",max:"2",step:"0.05",ref:u,defaultValue:h.brightness,onChange:f}),r.a.createElement("label",{className:"Settings__Label",htmlFor:"blend-select"},"Rainbow blend mode"),r.a.createElement("select",{className:"Settings__Input",id:"blend-select",ref:o,onChange:f},Object.keys(d).map((function(e){return r.a.createElement("option",{key:e,value:e},d[e])})))))}function b(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var a=t.getContext("2d");return a?(a.drawImage(e,0,0),function(e){for(var t,a=e.canvas.width,n=e.canvas.height,r=e.getImageData(0,0,a,n),l=r.data.length,c={top:n/2,left:a/2,right:a/2,bottom:n/2},o=0,i=0;i<l;i+=4)0!==r.data[i+3]&&(t=i/4%a,(o=~~(i/4/a))<c.top&&(c.top=o),t<c.left&&(c.left=t),t>c.right&&(c.right=t),o>c.bottom&&(c.bottom=o));return c.bottom+=1,c.right+=1,c}(a)):{top:0,left:0,right:e.width,bottom:e.height}}function E(e,t,a,n,r,l){var c,o=null!==(c=l[e%l.length])&&void 0!==c?c:[];t.globalCompositeOperation="source-over",t.clearRect(0,0,n.canvasWidth,n.canvasHeight),t.setTransform.apply(t,Object(s.a)(o)),t.globalCompositeOperation="source-over",t.drawImage(a,0,0),r.colourScheme in g&&(t.globalCompositeOperation=r.blendMode,t.fillStyle=g[r.colourScheme][e],t.fillRect(0,0,n.canvasWidth,n.canvasHeight)),t.globalCompositeOperation="destination-in",t.drawImage(a,0,0)}function w(e,t,a){e.putImageData(t,-a.left,-a.top)}function y(){var e=Object(n.useState)(Object(i.a)({},h)),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(new Image),m=Object(c.a)(o,1)[0],d=Object(n.useState)(document.createElement("canvas")),g=Object(c.a)(d,1)[0],v=Object(n.useState)({loaded:!1,width:0,height:0}),y=Object(c.a)(v,2),_=y[0],O=y[1],S=Object(n.useState)(0),j=Object(c.a)(S,2),N=j[0],C=j[1],I=Object(n.useState)(0),k=Object(c.a)(I,2),F=k[0],R=k[1],M=Object(n.useState)(null),x=Object(c.a)(M,2),H=x[0],P=x[1],L=Object(n.useState)([]),W=Object(c.a)(L,2),B=W[0],D=W[1],G=Object(n.useState)(),V=Object(c.a)(G,2),A=V[0],T=V[1],J=Object(n.useRef)(null),U=Object(n.useRef)(null),K=Object(n.useMemo)((function(){return function(e){D((function(t){return[].concat(Object(s.a)(t),[e])}))}}),[]),q=Object(n.useMemo)((function(){return function(e){D((function(t){return t.filter((function(t){return t!==e}))}))}}),[]);Object(n.useEffect)((function(){var e=g.getContext("2d"),t=J.current,n=null===t||void 0===t?void 0:t.getContext("2d");if(_.loaded&&e&&t&&n){var r=function(e){var t=e.width,a=e.height,n=Math.min(1,100/t,100/a);return{canvasWidth:200,canvasHeight:200,imageRegionWidth:t*n,imageRegionHeight:a*n}}(_),l=r.canvasWidth,c=r.canvasHeight;g.width=l,g.height=c,function(e,t,a,n){if(t.drawImage(a,0,0,a.width,a.height,(e.canvasWidth-e.imageRegionWidth)/2,(e.canvasHeight-e.imageRegionHeight)/2,e.imageRegionWidth,e.imageRegionHeight),"none"!==n.colourScheme){for(var r=t.getImageData(0,0,e.canvasWidth,e.canvasHeight),l=r.data,c=n.brightness,o=254*n.contrast,i=(255+o)/(255-o),s=0;s<l.length;s+=4){var u=c*(i*(.299*l[s]+.587*l[s+1]+.114*l[s+2]-128)+128);l[s]=u,l[s+1]=u,l[s+2]=u}t.putImageData(r,0,0)}}(r,e,m,a);var o=function(e,t,a){var n=document.createElement("canvas"),r=n.getContext("2d");if(!r)return null;var l=[];n.width=t.canvasWidth,n.height=t.canvasHeight;for(var c={top:n.height,left:n.width,right:0,bottom:0},o=function(e,t,a){switch(e){case"centered":return[[1,0,0,1,0,0],[1,0,.223*a,1-(1-.944)*a,-33.375*a,8.43*t*a],[1,0,.326*a,1-(1-.84)*a,-48.94*a,23.813*t*a],[1,0,.315*a,1-.25*a,-47.25*a,37.3*t*a],[1,0,.236*a,1-(1-.685)*a,-35.44*a,47.25*t*a],[1,0,0,1-(1-.66)*a,0,50*t*a],[1,0,-.236*a,1-(1-.685)*a,35.44*a,47.25*t*a],[1,0,-.315*a,1-.25*a,47.25*a,37.3*t*a],[1,0,-.326*a,1-(1-.84)*a,48.94*a,23.813*t*a],[1,0,-.223*a,1-(1-.944)*a,33.375*a,8.43*t*a]];case"bounce":return[[1-(1-.945)*a,0,0,1-(1-1.18)*a,5.48*a,-43.57*t*a],[1-(1-.945)*a,0,0,1-(1-1.17)*a,4.48*a,-37.37*t*a],[1-(1-.98)*a,0,0,1-(1-1.067)*a,1.99*a,-14.68*t*a],[1- -.125*a,0,0,1-.14*a,-12.46*a,20.2*t*a],[1-(1-1.215)*a,0,0,1-(1-.785)*a,-21.43*a,32.1*t*a],[1-(1-1.15)*a,0,0,1-(1-.82)*a,-15.28*a,27.71*t*a],[1-(1-1.097)*a,0,0,1-(1-.92)*a,-9.63*a,12.52*t*a],[1-(1-1.03)*a,0,0,1-(1-1.03)*a,-2.99*a,-5.46*t*a],[1-(1-.975)*a,0,0,1-(1-1.12)*a,2.49*a,-25.45*t*a],[1-(1-.95)*a,0,0,1-(1-1.19)*a,5.32*a,-43.67*t*a]];case"classic":return[[1,0,0,1,0,0],[1-(1-.99375)*a,0,.16679*a,1-(1-.95027)*a,-30.3727*a,7.245*t*a],[1-(1-1.04125)*a,0,.2315*a,1-(1-.8621)*a,-50.84534*a,20.088*t*a],[1-0*a,0,.28054*a,1-(1-.82325)*a,-51.28815*a,25.97*t*a],[1-(1-.94375)*a,0,.11371*a,1-(1-.80963)*a,-27.00883*a,27.8*t*a],[1-.08875*a,0,.04853*a,1-(1-.766)*a,9.24426*a,34.19*t*a],[1-(1-.9825)*a,0,-.17287*a,1-.29298*a,25.55122*a,42.85*t*a],[1-(1-1.02125)*a,0,-.2405*a,1-.22085*a,34.20272*a,32.26*t*a],[1-(1-1.02375)*a,0,-.28875*a,1-.1775*a,46.15469*a,26.16*t*a],[1-(1-.9975)*a,0,-.1975*a,1-(1-.91375)*a,30.20937*a,12.71*t*a]]}return[]}(e.waveStyle,e.verticalCenter,e.magnitude),i=0;i<10;i++){E(i,r,a,t,e,o);for(var s=r.getImageData(0,0,t.canvasWidth,t.canvasHeight),u=s.data,f=0;f<u.length;f+=4)0===u[f]&&0===u[f+1]&&0===u[f+2]&&0!==u[f+3]&&(u[f]=1,u[f+1]=1,u[f+2]=1);l.push(s);var m=b(n);c.top=Math.min(m.top,c.top),c.left=Math.min(m.left,c.left),c.right=Math.max(m.right,c.right),c.bottom=Math.max(m.bottom,c.bottom)}return{frames:l,crop:c}}(a,r,g);if(T(o),o){var i,s=t.width=o.crop.right-o.crop.left,u=t.height=o.crop.bottom-o.crop.top,f=N,d=F||performance.now(),h=d;return function e(){var a=performance.now(),r=a-d,l=a-h,c=Math.floor((r+l/2)/50);f=(f+c)%10,h=a,c>0&&(d=a,w(n,o.frames[f],o.crop),B.forEach((function(e){e(t,s,u)}))),i=window.requestAnimationFrame(e)}(),function(){i&&(window.cancelAnimationFrame(i),C(f),R(d))}}}}),[_,a]);return r.a.createElement("section",{className:"Creator"},r.a.createElement(u,{onFileSelected:function(e){m.src=URL.createObjectURL(e),m.onload=function(){O({loaded:!0,width:m.width,height:m.height})},P(null)}}),r.a.createElement("div",{className:"SettingsContainer"},r.a.createElement(p,{onSettingsChanged:l}),r.a.createElement("div",{className:"SettingsContainer__Section SettingsContainer__Section--secondary PreviewSection"},r.a.createElement("div",{className:"PreviewSection__Big"},r.a.createElement("canvas",{ref:J})),r.a.createElement(f,{onReady:K,onDestroy:q}))),r.a.createElement("button",{type:"button",className:"Button",onClick:function(){var e;if(A&&window.GIF){var t=document.createElement("canvas"),a=t.width=A.crop.right-A.crop.left,n=t.height=A.crop.bottom-A.crop.top,r=t.getContext("2d");if(r){var l=new window.GIF({workers:4,workerScript:"".concat("/party-ify","/vendor/gifjs/gif.worker.js"),width:a,height:n,transparent:0});l.on("finished",(function(e){P(URL.createObjectURL(e))}));for(var c=0;c<10;c++)w(r,A.frames[c],A.crop),l.addFrame(r,{delay:50,copy:!0});l.render(),null===(e=U.current)||void 0===e||e.scrollIntoView()}}}},"Generate GIF"),r.a.createElement("div",{className:"Output",ref:U},H&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Right click / long-press on the image below, choose save, and get the party started!"),r.a.createElement("img",{className:"Output__Image",alt:"",src:H}),r.a.createElement("p",null,"Please be considerate of others when using any images from here, particularly on platforms with no option to disable animated emoji."))))}var _=a(9);function O(e){return e.isOpen?r.a.createElement(_.a,null,r.a.createElement("div",{className:"Modal__Background"},r.a.createElement("div",{className:"Modal",role:"dialog","aria-modal":"true"},e.children({triggerClose:e.onClose})))):null}function S(e){return"partify:".concat(e)}function j(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("p",{className:"Footer__Paragraph"},"* None of this is true. not associated with Slack, can bring the party anywhere that supports custom emoji (MS Teams, you make it hard to love you). Inspired by"," ",r.a.createElement("a",{href:"https://cultofthepartyparrot.com/"},"Cult of the Party Parrot")),r.a.createElement("p",{className:"Footer__Paragraph"},"made with ",r.a.createElement("img",{src:"/heart.gif",alt:"love",className:"Footer__Icon"})," by"," ",r.a.createElement("a",{href:"https://twitter.com/Nathanielnw"},"Nate Watson")))}function N(){var e=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(S(e));return a?JSON.parse(a):t}catch(n){return t}})),r=Object(c.a)(a,2),l=r[0],o=r[1];return[l,function(t){try{o(t),window.localStorage.setItem(S(e),JSON.stringify(t))}catch(a){console.log(a)}}]}("hasSeenModal",!1),t=Object(c.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(!a),s=Object(c.a)(i,2),u=s[0],f=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{"aria-hidden":u?"true":void 0,className:"App__Main ".concat(u?"App__Main--modalOpen":"")},r.a.createElement(o,null),r.a.createElement(y,null),r.a.createElement(j,null)),r.a.createElement(O,{onClose:function(){f(!1),l(!0)},isOpen:u},(function(e){var t=e.triggerClose;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"Modal__Text"},"Hello! this site contains animations with flashing colours."),r.a.createElement("button",{className:"Button Button--secondary",type:"button",onClick:t},"OK, let me in"))})))}var C=document.getElementById("appcontainer");Object(l.render)(n.createElement(N,null),C)}},[[12,1,2]]]);
//# sourceMappingURL=main.8417afea.chunk.js.map