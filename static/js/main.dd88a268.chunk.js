(this.webpackJsonpmemo=this.webpackJsonpmemo||[]).push([[0],{28:function(e,a,t){},29:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),i=t(21),n=t.n(i),s=(t(28),t(13)),o=t(3),l=t(5),d=t(4),m=t(22),u=(t(29),t(1)),h=function(e){var a=e.imageUrl,t=e.id,c=e.cardFound,r=e.clickCard,i=e.availableToPick;return Object(u.jsx)("div",{className:"scene",children:Object(u.jsxs)("div",{onClick:function(){r(t)},className:"card ".concat(c?"":"is-flipped"," ").concat(i?"":"notavailabletopick"),children:[Object(u.jsx)("div",{className:"card__face card__face--front",children:Object(u.jsx)("img",{src:a,alt:""})}),Object(u.jsx)("div",{className:"card__face card__face--back"})]})})},j=t(49),p=["https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leblanc.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leveled-katarina.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leveled-aphelios.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/karma.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leveled-zed.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/leona.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/diana.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=70,format=webp/images/cards/source/lucian.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-kindred.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/azir.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-lux.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/lee-sin.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-fiora.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/garen.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/darius.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/ashe.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-jinx.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-riven.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-shen.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-vi.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-miss-fortune.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/gangplank.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/leveled-braum.png","https://www.runeterrafire.com/cdn-cgi/image/sharpen=1.0,width=90,quality=85,format=webp/images/cards/source/nimble-poro.png"],b={12:{xs:6,sm:3},24:{xs:6,sm:2},48:{xs:6,sm:4,md:1}},g=function(e){var a=e.totalSeconds,t=e.cardsPerRowColumn,r=Object(o.g)(),i=Object(c.useState)(""),n=Object(l.a)(i,2),s=n[0],d=n[1];return Object(u.jsxs)("div",{className:"".concat(a?"wingame animate__animated animate__slideInLeft":"normalgame"," modal modal-content"),children:[Object(u.jsxs)("h1",{children:["Ganaste bro ",a]}),Object(u.jsxs)("h1",{children:["Terminaste en ",a]}),Object(u.jsx)("h1",{children:"Quieres guardar tu tiempo en los mejores tiempos?"}),Object(u.jsx)("input",{onChange:function(e){d(e.target.value)},value:s}),Object(u.jsx)("button",{onClick:function(){!function(e){var a=e.name,c=e.seconds,i=JSON.parse(localStorage.getItem("highScores"))||{12:[],24:[],48:[]};i[t].push({name:a,seconds:c}),localStorage.setItem("highScores",JSON.stringify(i)),r.replace("/")}({name:s,seconds:a})},children:"Guadar tiempo y regresar al menu principal"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),r.replace("/")},children:"Regresar al menu principal"})]})},w=function(e){var a=e.cardsPerRowColumn,t=e.context,r=e.totalSeconds,i=Object(c.useState)([]),n=Object(l.a)(i,2),s=n[0],o=n[1],w=Object(c.useState)({}),f=Object(l.a)(w,2),O=f[0],x=f[1],v=Object(c.useState)(!1),y=Object(l.a)(v,2),P=(y[0],y[1]);Object(c.useEffect)((function(){console.log("Entro al useeffect incial");for(var e=Array.from({length:a}),t=[],c=0;c<a/2;c++)t.push(p[c]);t.forEach((function(t,c){for(var r=0;r<2;){var i=Math.floor(Math.random()*a);e[i]||(e[i]={id:i,imageUrl:t,cardFound:!0,availableToPick:!1,pairNumber:c},r++)}})),o(Object(m.a)(e));var r=setTimeout((function(){console.log("Entro"),o((function(e){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{cardFound:!1,availableToPick:!0})}))}))}),7e3);return function(){clearTimeout(r)}}),[a]);var S=function(e){Object.keys(O).length?(o(s.map((function(a){return a.id===e?Object(d.a)(Object(d.a)({},a),{},{cardFound:!0,availableToPick:!1}):Object(d.a)(Object(d.a)({},a),{},{availableToPick:!1})}))),setTimeout((function(){console.log("Sisi");var c=!1;o((function(r){return r.map((function(r){return r.cardFound&&r.id!==e&&r.id!==O.id?r:r.id===e||r.id===O.id?O.pairNumber===s[e].pairNumber?(console.log(c),c||(t.addPair(),c=!0,t.correctPairs===a/2&&P(!0)),Object(d.a)(Object(d.a)({},r),{},{cardFound:!0,availableToPick:!1})):Object(d.a)(Object(d.a)({},r),{},{cardFound:!1,availableToPick:!0}):Object(d.a)(Object(d.a)({},r),{},{availableToPick:!0})}))})),x({})}),800)):(console.log(s[e]),x(s[e]),console.log(O),o(s.map((function(a){return a.id===e?Object(d.a)(Object(d.a)({},a),{},{cardFound:!0,availableToPick:!1}):a}))))};return Object(u.jsxs)("div",{style:{marginTop:"65px"},children:[Object(u.jsx)(j.a,{container:!0,children:s.length?s.map((function(e){var t=e.id,c={id:t,imageUrl:e.imageUrl,cardFound:e.cardFound,availableToPick:e.availableToPick,cardsPerRowColumn:a,clickCard:S};return Object(u.jsxs)(j.a,Object(d.a)(Object(d.a)({item:!0},b[a]),{},{children:[" ",Object(u.jsx)(h,Object(d.a)({},c),t)]}),t)})):[]}),Object(u.jsx)(g,{totalSeconds:r,cardsPerRowColumn:a})]})},f=r.a.createContext(),O=function(e){var a=Object(c.useState)(!1),t=Object(l.a)(a,2),r=(t[0],t[1]);return Object(u.jsx)(f.Provider,{value:{correctPairs:0,finishedGame:!1,win:function(){r(!0)},addPair:function(){this.correctPairs++}},children:e.children})},x=function(e){var a=e.cardsPerRowColumn,t=e.context,r=e.setTotalSeconds,i=Object(c.useState)(0),n=Object(l.a)(i,2),s=n[0],o=n[1];return Object(c.useEffect)((function(){var e=setInterval((function(){o((function(e){return e+1}))}),1e3);return t.correctPairs===a/2&&(clearInterval(e),r(s)),function(){return clearInterval(e)}}),[s]),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:s})})},v=function(e){var a=e.history.location.state.cardsPerRowColumn,t=Object(c.useState)(0),r=Object(l.a)(t,2),i=r[0],n=r[1];return Object(u.jsx)(O,{children:Object(u.jsx)(f.Consumer,{children:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{cardsPerRowColumn:a,context:e,setTotalSeconds:n}),Object(u.jsx)(w,{cardsPerRowColumn:a,context:e,totalSeconds:i}),"  "]})}})})},y=function(){var e=JSON.parse(localStorage.getItem("highScores"))||{12:[],24:[],48:[]};return Object(u.jsx)("div",{children:Object.entries(e).map((function(e){var a=Object(l.a)(e,2),t=a[0],c=a[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[t," cartas"]}),c.length?c.map((function(e){var a=e.name,t=e.seconds;return Object(u.jsx)("h1",{children:"".concat(a,"   ").concat(t,"s")})})):Object(u.jsx)("h1",{children:"N/A"})]})}))})};var P=function(e){var a=e.history,t=Object(c.useState)(12),r=Object(l.a)(t,2),i=r[0],n=r[1];return Object(u.jsxs)("div",{className:"difficulties",children:[[{name:"Pan comido",size:"4x4",cardsPerRowColumn:12,message:"Esta dificultad es lo mas facil que existe, es como quitarle un dulce a un bebe",imgUrl:"https://media-exp1.licdn.com/dms/image/C560BAQGUAafs66wjYA/company-logo_200_200/0/1519899823694?e=2159024400&v=beta&t=d834c9lZTFOJL-x9fS3Ll-hqeUGJWEliXHN_IS3hTPw"},{name:"Normalito",size:"6x6",cardsPerRowColumn:24,message:"Esta un poco mas dificil, pero aun es super pasable",imgUrl:"https://media-exp1.licdn.com/dms/image/C560BAQGUAafs66wjYA/company-logo_200_200/0/1519899823694?e=2159024400&v=beta&t=d834c9lZTFOJL-x9fS3Ll-hqeUGJWEliXHN_IS3hTPw"},{name:"Superhipermega dificil",size:"8x8",cardsPerRowColumn:48,message:"Esto ya es demasiado, quedaras traumado de tanta dificultad. God mode.",imgUrl:"https://media-exp1.licdn.com/dms/image/C560BAQGUAafs66wjYA/company-logo_200_200/0/1519899823694?e=2159024400&v=beta&t=d834c9lZTFOJL-x9fS3Ll-hqeUGJWEliXHN_IS3hTPw"}].map((function(e){return Object(u.jsxs)("div",{className:"".concat(i===e.cardsPerRowColumn?"selected":""," animate__animated animate__slideInLeft "),style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},onClick:function(a){console.log(e.name),n(e.cardsPerRowColumn)},children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{style:{height:"20vh",width:"20vh"},src:e.imgUrl})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("h1",{children:e.size}),Object(u.jsxs)("div",{className:"text-align-left tooltip",children:[Object(u.jsx)("i",{style:{color:"#48466d"},className:"fas fa-question-circle"}),Object(u.jsx)("span",{className:"tooltiptext",children:e.message})]})]})]})})),Object(u.jsx)("div",{className:"text-align-left",children:Object(u.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-angle-right",onClick:function(){a.replace("/memorama",{cardsPerRowColumn:i})}})}),Object(u.jsxs)("div",{className:"tooltip",style:{textAlign:"center",marginTop:"50px"},children:[Object(u.jsx)(s.b,{to:"/scores",children:Object(u.jsx)("i",{style:{fontSize:"2rem"},className:"fas fa-stopwatch"})}),Object(u.jsx)("div",{className:"tooltiptext bottom",children:Object(u.jsx)("span",{children:"Mejores tiempos"})})]})]})},S=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",component:P}),Object(u.jsx)(o.b,{exact:!0,path:"/scores",component:y}),Object(u.jsx)(o.a,{to:"/"})]})})})};function q(){return Object(u.jsx)(s.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/memorama",component:function(e){var a=e.history;return"REPLACE"!==a.action?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsx)(v,{history:a})}}),Object(u.jsx)(o.b,{path:"/",component:S})]})})})}var C=function(){return Object(u.jsx)(q,{})};n.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.dd88a268.chunk.js.map