(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var i,o=(i=t(7294))&&i.__esModule?i:{default:i},a=t(1063),s=t(4651),c=t(7426);var l={};function u(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var _=function(e){var n,t=!1!==e.prefetch,i=s.useRouter(),_=o.default.useMemo((function(){var n=a.resolveHref(i,e.href,!0),t=r(n,2),o=t[0],s=t[1];return{href:o,as:e.as?a.resolveHref(i,e.as):s||o}}),[i,e.href,e.as]),d=_.href,h=_.as,f=e.children,p=e.replace,g=e.shallow,m=e.scroll,b=e.locale;"string"===typeof f&&(f=o.default.createElement("a",null,f));var x=(n=o.default.Children.only(f))&&"object"===typeof n&&n.ref,v=c.useIntersection({rootMargin:"200px"}),j=r(v,2),y=j[0],w=j[1],O=o.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);o.default.useEffect((function(){var e=w&&t&&a.isLocalURL(d),n="undefined"!==typeof b?b:i&&i.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(i,d,h,{locale:n})}),[h,d,w,b,t,i]);var C={ref:O,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[i?"replace":"push"](t,r,{shallow:o,locale:c,scroll:s}))}(e,i,d,h,p,g,m,b)},onMouseEnter:function(e){a.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var P="undefined"!==typeof b?b:i&&i.locale,k=i&&i.isLocaleDomain&&a.getDomainLocale(h,P,i&&i.locales,i&&i.domainLocales);C.href=k||a.addBasePath(a.addLocale(h,P,i&&i.defaultLocale))}return o.default.cloneElement(n,C)};n.default=_},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=i.useRef(),l=i.useState(!1),u=r(l,2),_=u[0],d=u[1],h=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||_||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,_]);return i.useEffect((function(){if(!a&&!_){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[_]),[h,_]};var i=t(7294),o=t(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},3404:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{default:function(){return L}});t(5210);var i=t(7294),o=t(3940),a=t.n(o),s=t(1664),c=t(9206),l=t.n(c),u=t(5893);var _=function(e){return e.isVisible&&(0,u.jsxs)("div",{className:l().container,children:[(0,u.jsx)("p",{class:l().title,children:"Inicio de sesi\xf3n"}),(0,u.jsxs)("div",{class:"input-group",children:[(0,u.jsx)("span",{class:"input-group-append",children:(0,u.jsx)("span",{class:"input-group-text",children:(0,u.jsx)("i",{class:"bi bi-person-fill"})})}),(0,u.jsx)("input",{class:"form-control border-right-0",placeholder:"Usuario"})]}),(0,u.jsxs)("div",{class:"input-group",children:[(0,u.jsx)("span",{class:"input-group-append",children:(0,u.jsx)("span",{class:"input-group-text",children:(0,u.jsx)("i",{class:"bi bi-lock-fill"})})}),(0,u.jsx)("input",{class:"form-control border-right-0",type:"password",placeholder:"Contrase\xf1a"})]}),(0,u.jsx)("button",{class:l().submit,children:"Ingresar"})]})};var d=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1];return(0,u.jsxs)("div",{className:a().container,children:[(0,u.jsx)(s.default,{href:"/",children:(0,u.jsxs)("div",{className:a().nameContainer,children:[(0,u.jsx)("img",{className:a().logo,src:"https://i.imgur.com/BE3YfRF.png"}),(0,u.jsx)("h1",{children:"Mujeres Poderosas"})]})}),(0,u.jsx)("a",{id:a().title_login,onClick:function(){t(!n)},children:"Ingreso Admin"}),(0,u.jsx)(_,{isVisible:n})]})},h=(0,i.createContext)();function f(e){var n=e.children,t=(0,i.useState)({name:"",email:""}),r=t[0],o=t[1],a=(0,i.useState)(!1),s=a[0],c=a[1];return(0,i.useEffect)((function(){o(JSON.parse(localStorage.getItem("user")))}),[]),(0,u.jsx)(h.Provider,{value:{userLogged:r,setUserLogged:o,loading:s,setLoading:c},children:n})}var p=t(9963),g=t.n(p),m=t(7005),b=t.n(m),x=t(2913),v=t.n(x),j=t(2950),y=t.n(j),w=function(){var e=function(e){window.scrollTo(0,document.querySelector("."+e).offsetTop)};return(0,u.jsx)("div",{className:g().container,children:(0,u.jsxs)("div",{className:g().topBar,children:[(0,u.jsx)("a",{href:"#",onClick:function(){return e(b().container)},children:"\xbfQui\xe9nes somos?"}),(0,u.jsx)("a",{href:"#",onClick:function(){return e(v().container)},children:"Destacados"}),(0,u.jsx)("a",{href:"#",onClick:function(){return e(y().container)},children:"Equipo de trabajo"}),(0,u.jsx)("a",{href:"#",onClick:function(){return e(b().container)},children:"Informate"})]})})},O=t(534),C=t.n(O);var P=function(){return(0,u.jsxs)("div",{className:C().container,children:[(0,u.jsx)("div",{class:C().column1,children:(0,u.jsx)("img",{src:"https://i.imgur.com/KHRZxOv.png"})}),(0,u.jsxs)("div",{class:C().column2,children:[(0,u.jsx)("h4",{children:"Equipo de Desarrollo"}),(0,u.jsxs)("p",{children:["Andres Julian Bustos Castelblanco ",(0,u.jsx)("br",{}),"andres0613@utp.edu.co"]}),(0,u.jsxs)("p",{children:["Angelica Arrubla Hernandez ",(0,u.jsx)("br",{}),"ange.arrubla@gmail.com"]})]}),(0,u.jsxs)("div",{class:C().column3,children:[(0,u.jsxs)("p",{children:["Johanna Mahuth Tafur ",(0,u.jsx)("br",{}),"jmahuth@gmail.com"]}),(0,u.jsxs)("p",{children:["Tatiana Garc\xeda Grajales ",(0,u.jsx)("br",{}),"tatiana.g2@utp.edu.co"]}),(0,u.jsxs)("p",{children:["Sandra Yelitza Castelblanco Celis ",(0,u.jsx)("br",{}),"sandrayelitzacc@gmail.com"]})]}),(0,u.jsxs)("div",{class:C().column4,children:[(0,u.jsx)("h4",{children:"T\xe9rminos y Condiciones"}),(0,u.jsx)("a",{href:"https://docs.google.com/document/d/e/2PACX-1vRgr1Ox4ZTKiq2vxRRlmsO3KN5vsi776WI_vIkYaanGr592lLg7sd_J88owvIP9nA/pub",children:(0,u.jsx)("p",{children:"Descarga archivo para conocer t\xe9rminos y condiciones de la web"})})]}),(0,u.jsxs)("div",{class:C().column5,children:[(0,u.jsx)("h4",{children:"Ponte en Contacto"}),(0,u.jsxs)("div",{class:C().social,children:[(0,u.jsx)("a",{href:"https://t.me/joinchat/ga0oWIwc6kQ2OTFh",children:(0,u.jsx)("i",{class:"bi bi-telegram"})}),(0,u.jsx)("a",{href:"https://twitter.com/tic_senior",children:(0,u.jsx)("i",{class:"bi bi-twitter"})}),(0,u.jsx)("a",{href:"https://www.youtube.com/channel/UCirFzPbe8w920ojxp4bmdug",children:(0,u.jsx)("i",{class:"bi bi-youtube"})}),(0,u.jsx)("a",{href:"https://www.instagram.com/tic_senior/",children:(0,u.jsx)("i",{class:"bi bi-instagram"})}),(0,u.jsx)("a",{href:"mujeres.poderosas.ticsenior@gmail.com",children:(0,u.jsx)("i",{class:"bi bi-mailbox"})})]})]})]})};t(3497),t(5910);function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var L=function(e){var n=e.Component,t=e.pageProps;return(0,u.jsxs)(f,{children:[(0,u.jsx)(d,{}),(0,u.jsx)(w,{}),(0,u.jsx)(n,E({},t)),(0,u.jsx)(P,{})]})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(3404)}])},534:function(e){e.exports={container:"footer_container__4Fk13",column1:"footer_column1__27gg9",column4:"footer_column4__3ZQQu",column5:"footer_column5__35EK6",social:"footer_social__2ck2y"}},3940:function(e){e.exports={container:"header_container__2boq4",title_login:"header_title_login__z0fuc",nameContainer:"header_nameContainer__6-2lS",logo:"header_logo__ZHkcG"}},2913:function(e){e.exports={container:"highlights_container__3ntBs",embla:"highlights_embla__3yMpl",embla__viewport:"highlights_embla__viewport__2GNJ2","is-draggable":"highlights_is-draggable__1ENsq","is-dragging":"highlights_is-dragging__1s53p",embla__container:"highlights_embla__container__3r2-U",embla__slide:"highlights_embla__slide__1C3Id",embla__slide__inner:"highlights_embla__slide__inner___nVKr",embla__slide__img:"highlights_embla__slide__img__MQFfv",embla__button:"highlights_embla__button__2coM4",embla__button__svg:"highlights_embla__button__svg__Ilu10",embla__button__prev:"highlights_embla__button__prev__1Im8x",embla__button__next:"highlights_embla__button__next__23-49",embla__dots:"highlights_embla__dots__3gR9f",embla__dot:"highlights_embla__dot__3TgVA",embla__dot__isSelected:"highlights_embla__dot__isSelected__3mlLa"}},9206:function(e){e.exports={container:"login_container__iOJ7i",title:"login_title__2agQg",submit:"login_submit__29ojy"}},9963:function(e){e.exports={container:"navBar_container__3yNOd",topBar:"navBar_topBar__1JBXO",admin:"navBar_admin__3Se_h"}},2950:function(e){e.exports={container:"team_container__28tP_",container_images:"team_container_images__19uGL",container_image:"team_container_image__1Xvi1",container2:"team_container2__ALK3p",icon:"team_icon__15mSv"}},7005:function(e){e.exports={container:"whoWeAre_container__1AoCz",container_text:"whoWeAre_container_text__3oPxP",text:"whoWeAre_text__ueWrW",text_title:"whoWeAre_text_title__RTu3_"}},5910:function(){},3497:function(){},5210:function(){},1664:function(e,n,t){e.exports=t(2167)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);