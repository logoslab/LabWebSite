(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8831:function(e,n,t){"use strict";t.d(n,{HK:function(){return a},gP:function(){return s}});var r=t(7294);function u(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var o={};u(o,"SSRProvider",(()=>a)),u(o,"useSSRSafeId",(()=>s)),u(o,"useIsSSR",(()=>d));const i={prefix:String(Math.round(1e10*Math.random())),current:0},c=r.createContext(i);function a(e){let n=(0,r.useContext)(c),t=(0,r.useMemo)((()=>({prefix:n===i?"":`${n.prefix}-${++n.current}`,current:0})),[n]);return r.createElement(c.Provider,{value:t},e.children)}let f=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);function s(e){let n=(0,r.useContext)(c);return n!==i||f||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((()=>e||`react-aria${n.prefix}-${++n.current}`),[e])}function d(){let e=(0,r.useContext)(c)!==i,[n,t]=(0,r.useState)(e);return"undefined"!==typeof window&&e&&(0,r.useLayoutEffect)((()=>{t(!1)}),[]),n}},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(9382)}])},9382:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(5893),u=(t(906),t(8831).HK);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}var c=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsx)(u,{children:(0,r.jsx)(n,i({},t))})}},906:function(){}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6363),n(387)}));var t=e.O();_N_E=t}]);