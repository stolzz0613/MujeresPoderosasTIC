(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{7250:function(e,i,n){"use strict";function s(e,i,n,s,r,t,a){try{var o=e[t](a),l=o.value}catch(c){return void n(c)}o.done?i(l):Promise.resolve(l).then(s,r)}n.r(i),n.d(i,{default:function(){return p}});var r=n(7757),t=n.n(r),a=(n(7294),n(833)),o=n.n(a),l=n(5831),c=n(6455),d=n.n(c),u=n(9669),f=n.n(u),h=n(5893);var p=function(){var e=(0,l.b)(),i=function(){var i,n=(i=t().mark((function i(){var n,s;return t().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,d().fire({title:"Ingresa tu nuevo nombre",input:"text",showCancelButton:!0,inputValidator:function(e){if(!e)return"Debes ingresar un nombre!"}});case 2:n=i.sent,(s=n.value)&&f().put("https://nameless-brushlands-25377.herokuapp.com/api/usuarios/"+e.userLogged.email,{name:s}).then((function(i){var n={email:i.data.valor.email,name:i.data.valor.name,image:i.data.valor.image,logged:!0};d().fire("Good job!","Cambiaste tu nombre","success"),localStorage.setItem("userLogged_MP",JSON.stringify(n)),e.setUserLogged(n)})).catch((function(e){d().fire({title:"Error!",text:"Intenta de nuevo",icon:"error",confirmButtonText:"Cool"})}));case 5:case"end":return i.stop()}}),i)})),function(){var e=this,n=arguments;return new Promise((function(r,t){var a=i.apply(e,n);function o(e){s(a,r,t,o,l,"next",e)}function l(e){s(a,r,t,o,l,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,h.jsx)("div",{className:o().container,children:e.userLogged.logged?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:o().photo,children:(0,h.jsx)("img",{src:e.userLogged.image})}),(0,h.jsx)("div",{className:o().title,children:(0,h.jsx)("h1",{children:"Datos personales"})}),(0,h.jsxs)("div",{className:o().info,children:[(0,h.jsxs)("div",{className:o().data,children:[(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("i",{class:"bi bi-person-circle",style:{marginRight:"20px"}}),(0,h.jsxs)("p",{children:["Nombre y apellido: ",(0,h.jsx)("span",{children:e.userLogged.name})]})]}),(0,h.jsx)("i",{onClick:i,class:"bi bi-pen-fill",style:{alignSelf:"flex-end",color:"#C13B77"}})]}),(0,h.jsx)("div",{className:o().data,children:(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("i",{class:"bi bi-card-list",style:{marginRight:"20px"}}),(0,h.jsxs)("p",{children:["Identificaci\xf3n: ",(0,h.jsx)("span",{children:e.userLogged.cc})]})]})}),(0,h.jsx)("div",{className:o().data,children:(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("i",{class:"bi bi-mailbox",style:{marginRight:"20px"}}),(0,h.jsxs)("p",{children:["Correo electronico: ",(0,h.jsx)("span",{children:e.userLogged.email})]})]})})]}),(0,h.jsx)("div",{className:o().title,children:(0,h.jsx)("h1",{children:"Administraci\xf3n de publicaciones"})}),(0,h.jsxs)("div",{className:o().buttons,children:[(0,h.jsx)("button",{className:o().submit,children:"Crear publicaci\xf3n"}),(0,h.jsx)("button",{className:o().submit,children:"Editar o eliminar publicaci\xf3n"})]})]}):(0,h.jsx)("h1",{children:"Acceso Restringido"})})}},883:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(7250)}])},833:function(e){e.exports={container:"profile_container__3NVZV",photo:"profile_photo__1KGEG",title:"profile_title__3-a5g",info:"profile_info__3H9al",data:"profile_data__3Gfd7",buttons:"profile_buttons__dUc9N",submit:"profile_submit__1g1My"}}},function(e){e.O(0,[774,888,179],(function(){return i=883,e(e.s=i);var i}));var i=e.O();_N_E=i}]);