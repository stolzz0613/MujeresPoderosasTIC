(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),u=t(4651),i=t(7426);var l={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,g=i.useIntersection({rootMargin:"200px"}),L=r(g,2),M=L[0],w=L[1],k=a.default.useCallback((function(e){M(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,M]);a.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&s(o,d,p,{locale:n})}),[p,d,w,b,t,o]);var m={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,y,_,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof b?b:o&&o.locale,j=o&&o.isLocaleDomain&&c.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);m.href=j||c.addBasePath(c.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,m)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),l=o.useState(!1),s=r(l,2),f=s[0],d=s[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},6124:function(e,n,t){"use strict";t.r(n);var r=t(1664),o=t(5893);n.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Mujeres Poderosas"}),(0,o.jsx)(r.default,{href:"/courses",children:(0,o.jsx)("a",{children:"To cursos.."})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);