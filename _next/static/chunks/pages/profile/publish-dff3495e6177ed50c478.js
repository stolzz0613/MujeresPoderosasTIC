(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[51],{823:function(e,t,n){"use strict";n.r(t);var i=n(4942),o=n(7294),a=n(1163),r=n(179),c=n.n(r),u=n(6455),l=n.n(u),s=n(9669),d=n.n(s),p=n(5893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=(0,a.useRouter)().query,t=(0,o.useState)(""),n=t[0],i=t[1],r=(0,o.useState)([]),u=r[0],s=r[1],f=(0,o.useState)(""),h=f[0],m=f[1],_=(0,o.useState)(0),g=_[0],v=_[1],j=(0,o.useState)({titulo:"",linkNoticia:"",linkImagen:"",categoria:"",estado:""}),x=j[0],k=j[1];(0,o.useEffect)((function(){(null===e||void 0===e?void 0:e.type)&&i("create"===e.type?"Crear publicaci\xf3n":"Editar o eliminar publicaci\xf3n")}),[e]),(0,o.useEffect)((function(){N(),v(window.innerWidth)}),[]),(0,o.useEffect)((function(){var e=u.filter((function(e){return e._id===h}))[0];e&&k({titulo:e.titulo,linkNoticia:e.linkNoticia,linkImagen:e.linkImagen,categoria:e.categoria,estado:e.estado})}),[h]);var N=function(){d().get("https://nameless-brushlands-25377.herokuapp.com/api/publicaciones").then((function(e){console.log(e.data),s(e.data)}))};return(0,p.jsxs)("div",{className:c().container,children:[(0,p.jsx)("h1",{children:n}),(0,p.jsxs)("div",{className:c().form,children:[(0,p.jsx)("label",{children:"Titulo"}),(0,p.jsx)("input",{value:x.titulo,onChange:function(e){return k(b(b({},x),{},{titulo:e.target.value}))}}),(0,p.jsx)("label",{children:"Categoria"}),(0,p.jsxs)("select",{value:x.categoria,onChange:function(e){return k(b(b({},x),{},{categoria:e.target.value}))},children:[(0,p.jsx)("option",{selected:!0,children:"Selecciona una categoria"}),(0,p.jsx)("option",{value:"noticia",children:"Noticias del sector"}),(0,p.jsx)("option",{value:"web",children:"Web recomendadas"}),(0,p.jsx)("option",{value:"cyb",children:"Convocatorias y becas"})]}),"edit"===(null===e||void 0===e?void 0:e.type)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("label",{children:"Publicaci\xf3n"}),(0,p.jsxs)("select",{value:h,onChange:function(e){return m(e.target.value)},children:[(0,p.jsx)("option",{selected:!0,children:"Selecciona una publicacion"}),u.map((function(e){return(0,p.jsx)("option",{value:e._id,children:g<=450&&e.titulo.length>30?e.titulo.slice(0,30)+"...":e.titulo})}))]})]}),(0,p.jsx)("label",{children:"Link"}),(0,p.jsx)("input",{value:x.linkNoticia,onChange:function(e){return k(b(b({},x),{},{linkNoticia:e.target.value}))}}),(0,p.jsx)("label",{children:"Imagen"}),(0,p.jsx)("input",{value:x.linkImagen,onChange:function(e){return k(b(b({},x),{},{linkImagen:e.target.value}))}}),(0,p.jsx)("label",{children:"Estado"}),(0,p.jsxs)("select",{value:x.estado,onChange:function(e){return k(b(b({},x),{},{estado:e.target.value}))},children:[(0,p.jsx)("option",{selected:!0,children:"Selecciona un estado"}),(0,p.jsx)("option",{value:"guardada",children:"Guardada"}),(0,p.jsx)("option",{value:"publicada",children:"Publicada"})]})]}),(0,p.jsx)("div",{className:c().button,children:"edit"===(null===e||void 0===e?void 0:e.type)?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:c().button_delete,onClick:function(){0===h.length?l().fire("Upss!","Debes seleccionar una publicacion para eliminar","error"):d().delete("https://nameless-brushlands-25377.herokuapp.com/api/publicaciones/"+h).then((function(){N(),k({titulo:"",linkNoticia:"",linkImagen:"",categoria:"",estado:""}),m("")})).then((function(){l().fire("Well!","La publicacion fue eliminada","success")})).catch((function(){l().fire("Upss!","Hubo un error, intenta de nuevo","error")}))},children:"Eliminar"}),(0,p.jsx)("button",{className:c().button_edit,onClick:function(){""===x.titulo||""===x.linkNoticia||""===x.linkImagen||""===x.categoria||""===x.estado||""===h?l().fire("Error","Te falta completar uno o varios campos","error"):d().put("https://nameless-brushlands-25377.herokuapp.com/api/publicaciones/"+h,x).then((function(){N()})).then((function(){l().fire("Well!","La publicacion fue Editada","success")})).catch((function(){l().fire("Upss!","Hubo un error, intenta de nuevo","error")}))},children:"Editar"})]}):(0,p.jsx)("button",{className:c().button_submit,onClick:function(){""===x.titulo||""===x.linkNoticia||""===x.linkImagen||""===x.categoria||""===x.estado?l().fire("Error","Te falta completar uno o varios campos","error"):d().post("https://nameless-brushlands-25377.herokuapp.com/api/publicaciones",x).then((function(e){l().fire("Well!","La publicacion fue creada","success")})).catch((function(e){l().fire("Upss!","Hubo un error, intenta de nuevo","error")}))},children:"Publicar"})})]})}},2393:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile/publish",function(){return n(823)}])},179:function(e){e.exports={container:"publish_form_container__1SE2A",form:"publish_form_form__XXIwc",button:"publish_form_button__aY564",button_submit:"publish_form_button_submit__2uplG",button_delete:"publish_form_button_delete__f5CrO",button_edit:"publish_form_button_edit__2pHaU"}}},function(e){e.O(0,[774,888,179],(function(){return t=2393,e(e.s=t);var t}));var t=e.O();_N_E=t}]);