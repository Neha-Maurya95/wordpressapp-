!function(){"use strict";var e={n:function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,{a:i}),i},d:function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,i=window.wp.element,n=window.wp.blockEditor,r=window.wp.components,s=window.wp.i18n,o=window.wp.serverSideRender,d=e.n(o),a=window.bp.blockData,l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bp/primary-nav","title":"Primary navigation","category":"widgets","icon":"buddicons-community","description":"Displays BuddyPress primary nav in the sidebar of your site. Make sure to use it as the first widget of the sidebar and only once.","keywords":["BuddyPress","navigation","community"],"textdomain":"buddypress","attributes":{"displayTitle":{"type":"boolean","default":true}},"supports":{"align":true},"editorScript":"file:index.js","style":"file:index.css"}');(0,t.registerBlockType)(l,{icon:{background:"#fff",foreground:"#d84800",src:"buddicons-community"},edit:({attributes:e,setAttributes:t,clientId:o})=>{const l=(0,n.useBlockProps)(),{displayTitle:u}=e,c=(0,a.getCurrentWidgetsSidebar)(o);return c&&c.id&&-1!==["sidebar-buddypress-members","sidebar-buddypress-groups"].indexOf(c.id)?(0,i.createElement)(r.Notice,{status:"error",isDismissible:!1},(0,i.createElement)("p",null,(0,s.__)("The BuddyPress Primary Navigation block shouldn't be used into this widget area. Please remove it.","buddypress"))):(0,i.createElement)("div",{...l},(0,i.createElement)(n.InspectorControls,null,(0,i.createElement)(r.PanelBody,{title:(0,s.__)("Settings","buddypress"),initialOpen:!0},(0,i.createElement)(r.ToggleControl,{label:(0,s.__)("Include navigation title","buddypress"),checked:!!u,onChange:()=>{t({displayTitle:!u})}}))),(0,i.createElement)(r.Disabled,null,(0,i.createElement)(d(),{block:"bp/primary-nav",attributes:e})))}})}();