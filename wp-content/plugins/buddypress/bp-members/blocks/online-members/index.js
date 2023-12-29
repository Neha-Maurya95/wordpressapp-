!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,n=window.wp.element,r=window.wp.blockEditor,o=window.wp.components,s=window.wp.i18n,i=window.wp.serverSideRender,l=e.n(i),a=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bp/online-members","title":"Online Members","category":"widgets","icon":"groups","description":"Profile photos of online users.","keywords":["BuddyPress","members","online","community"],"textdomain":"buddypress","attributes":{"title":{"type":"string","default":"Online Members"},"maxMembers":{"type":"number","default":5}},"supports":{"align":true},"editorScript":"file:index.js","style":"file:index.css"}');(0,t.registerBlockType)(a,{icon:{background:"#fff",foreground:"#d84800",src:"groups"},edit:({attributes:e,setAttributes:t})=>{const i=(0,r.useBlockProps)(),{title:a,maxMembers:u}=e;return(0,n.createElement)("div",{...i},(0,n.createElement)(r.InspectorControls,null,(0,n.createElement)(o.PanelBody,{title:(0,s.__)("Settings","buddypress"),initialOpen:!0},(0,n.createElement)(o.TextControl,{label:(0,s.__)("Title","buddypress"),value:a,onChange:e=>{t({title:e})}}),(0,n.createElement)(o.RangeControl,{label:(0,s.__)("Max members to show","buddypress"),value:u,onChange:e=>t({maxMembers:e}),min:1,max:15,required:!0}))),(0,n.createElement)(o.Disabled,null,(0,n.createElement)(l(),{block:"bp/online-members",attributes:e})))}})}();