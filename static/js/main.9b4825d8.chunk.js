(this.webpackJsonpmemo=this.webpackJsonpmemo||[]).push([[0],[,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},,function(t,e,i){},function(t,e,i){"use strict";i.r(e);var a=i(1),n=i.n(a),r=i(5),c=i.n(r),f=(i(13),i(8)),o=i(6),s=i(7),l=(i(14),i(15),i(0)),u=function(t){var e=t.children;return Object(l.jsx)("div",{className:"board",children:e})},d=(i(17),function(t){var e=t.imageUrl,i=t.id,a=t.flipped,n=t.handleSelectCard;t.pairID;return Object(l.jsxs)("div",{onClick:function(){return n(i)},className:"card ".concat(a?"flipped":""),children:[Object(l.jsx)("div",{className:"overlay"}),Object(l.jsx)("img",{src:e,alt:""})]})}),p=i(20),x=["https://images.unsplash.com/photo-1531846802986-4942a5c3dd08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1561488111-5d800fd56b8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80","https://images.unsplash.com/photo-1516844113229-18646a422956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80","https://images.unsplash.com/photo-1550604602-7fae1adbe912?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80","https://images.unsplash.com/photo-1598797246294-7620e33a632f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80","https://images.unsplash.com/photo-1562595410-2cb999af24b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"],b=[].concat(x,x).map((function(t){return{url:t,id:Object(p.a)(),flipped:!1}})).map((function(t,e,i){var a=x.length;if(e>a-1){var n=i[e-a];t.pairID=n.id}else{var r=i[e+a];t.pairID=r.id}return t}));var m=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),i=e[0],n=e[1];function r(t){if(c().length>=2)alert("No puedes voltear m\xe1s de dos tarjetas en tu turno");else{var e=Object(o.a)(i);e.map((function(e){return e.id===t&&(e.flipped=!0),e})),n(e)}}function c(){return i.filter((function(t){return!!t.flipped}))}return Object(a.useEffect)((function(){n(b)}),[]),Object(a.useEffect)((function(){var t=c();2===t.length&&(t[0].pairID===t[1].id?alert("Encontraste el par!"):alert("Suerte en la pr\xf3xima ronda!"))}),[i]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Memory Game"}),Object(l.jsx)(u,{children:i.map((function(t){var e=t.id,i={id:e,imageUrl:t.url,flipped:t.flipped,handleSelectCard:r,pairID:t.pairID};return Object(l.jsx)(d,Object(f.a)({},i),e)}))})]})},h=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,21)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;i(t),a(t),n(t),r(t),c(t)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),h()}],[[18,1,2]]]);
//# sourceMappingURL=main.9b4825d8.chunk.js.map