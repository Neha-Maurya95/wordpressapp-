"use strict";(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[3037],{2043:(t,e,o)=>{o.r(e),o.d(e,{Block:()=>u,default:()=>d});var n=o(9196),r=o(4184),l=o.n(r),a=o(2864),c=o(3611),s=o(5736),i=o(721);const u=t=>{const{textAlign:e}=t,o=(0,c.F)(t),{product:r}=(0,a.useProductDataContext)(),i=l()(o.className,"wc-block-components-product-average-rating",{[`has-text-align-${e}`]:e});return(0,n.createElement)("div",{className:i,style:o.style},Number(r.average_rating)>0?r.average_rating:(0,s.__)("No ratings","woocommerce"))},d=(0,i.withProductDataContext)(u)},3611:(t,e,o)=>{o.d(e,{F:()=>i});var n=o(4184),r=o.n(n),l=o(7884),a=o(2646),c=o(1473),s=o(2661);const i=t=>{const e=(t=>{const e=(0,l.Kn)(t)?t:{style:{}};let o=e.style;return(0,a.H)(o)&&(o=JSON.parse(o)||{}),(0,l.Kn)(o)||(o={}),{...e,style:o}})(t),o=(0,s.vc)(e),n=(0,s.l8)(e),i=(0,s.su)(e),u=(0,c.f)(e);return{className:r()(u.className,o.className,n.className,i.className),style:{...u.style,...o.style,...n.style,...i.style}}}},1473:(t,e,o)=>{o.d(e,{f:()=>l});var n=o(7884),r=o(2646);const l=t=>{const e=(0,n.Kn)(t.style.typography)?t.style.typography:{},o=(0,r.H)(e.fontFamily)?e.fontFamily:"";return{className:t.fontFamily?`has-${t.fontFamily}-font-family`:o,style:{fontSize:t.fontSize?`var(--wp--preset--font-size--${t.fontSize})`:e.fontSize,fontStyle:e.fontStyle,fontWeight:e.fontWeight,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,textDecoration:e.textDecoration,textTransform:e.textTransform}}}},2661:(t,e,o)=>{o.d(e,{l8:()=>d,su:()=>v,vc:()=>u});var n=o(4184),r=o.n(n),l=o(9784),a=o(2289),c=o(7884);function s(t={}){const e={};return(0,a.getCSSRules)(t,{selector:""}).forEach((t=>{e[t.key]=t.value})),e}function i(t,e){return t&&e?`has-${(0,l.o)(e)}-${t}`:""}function u(t){var e,o,n,l,a,u,d;const{backgroundColor:v,textColor:f,gradient:p,style:g}=t,y=i("background-color",v),m=i("color",f),b=function(t){if(t)return`has-${t}-gradient-background`}(p),h=b||(null==g||null===(e=g.color)||void 0===e?void 0:e.gradient);return{className:r()(m,b,{[y]:!h&&!!y,"has-text-color":f||(null==g||null===(o=g.color)||void 0===o?void 0:o.text),"has-background":v||(null==g||null===(n=g.color)||void 0===n?void 0:n.background)||p||(null==g||null===(l=g.color)||void 0===l?void 0:l.gradient),"has-link-color":(0,c.Kn)(null==g||null===(a=g.elements)||void 0===a?void 0:a.link)?null==g||null===(u=g.elements)||void 0===u||null===(d=u.link)||void 0===d?void 0:d.color:void 0}),style:s({color:(null==g?void 0:g.color)||{}})}}function d(t){var e;const o=(null===(e=t.style)||void 0===e?void 0:e.border)||{};return{className:function(t){var e;const{borderColor:o,style:n}=t,l=o?i("border-color",o):"";return r()({"has-border-color":!!o||!(null==n||null===(e=n.border)||void 0===e||!e.color),[l]:!!l})}(t),style:s({border:o})}}function v(t){var e;return{className:void 0,style:s({spacing:(null===(e=t.style)||void 0===e?void 0:e.spacing)||{}})}}},8519:(t,e,o)=>{o.d(e,{F:()=>n});const n=t=>null===t},7884:(t,e,o)=>{o.d(e,{$n:()=>l,Kn:()=>r});var n=o(8519);const r=t=>!(0,n.F)(t)&&t instanceof Object&&t.constructor===Object;function l(t,e){return r(t)&&e in t}},2646:(t,e,o)=>{o.d(e,{H:()=>n});const n=t=>"string"==typeof t},1290:(t,e,o)=>{o.d(e,{$:()=>l});var n=o(7582),r=o(307);function l(t,e){return void 0===e&&(e={}),(0,r.B)(t,(0,n.pi)({delimiter:"."},e))}},9562:(t,e,o)=>{function n(t){return t.toLowerCase()}o.d(e,{U:()=>n})},307:(t,e,o)=>{o.d(e,{B:()=>a});var n=o(9562),r=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],l=/[^A-Z0-9]+/gi;function a(t,e){void 0===e&&(e={});for(var o=e.splitRegexp,a=void 0===o?r:o,s=e.stripRegexp,i=void 0===s?l:s,u=e.transform,d=void 0===u?n.U:u,v=e.delimiter,f=void 0===v?" ":v,p=c(c(t,a,"$1\0$2"),i,"\0"),g=0,y=p.length;"\0"===p.charAt(g);)g++;for(;"\0"===p.charAt(y-1);)y--;return p.slice(g,y).split("\0").map(d).join(f)}function c(t,e,o){return e instanceof RegExp?t.replace(e,o):e.reduce((function(t,e){return t.replace(e,o)}),t)}},9784:(t,e,o)=>{o.d(e,{o:()=>l});var n=o(7582),r=o(1290);function l(t,e){return void 0===e&&(e={}),(0,r.$)(t,(0,n.pi)({delimiter:"-"},e))}},7582:(t,e,o)=>{o.d(e,{pi:()=>n});var n=function(){return n=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);