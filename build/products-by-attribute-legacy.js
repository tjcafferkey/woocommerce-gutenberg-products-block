this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["products-by-attribute"]=function(t){function e(e){for(var n,i,u=e[0],a=e[1],s=e[2],b=0,p=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(l&&l(e);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={21:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;return c.push([576,2,0,1]),r()}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e){!function(){t.exports=this.React}()},12:function(t,e){!function(){t.exports=this.wp.url}()},13:function(t,e){!function(){t.exports=this.regeneratorRuntime}()},14:function(t,e){!function(){t.exports=this.moment}()},21:function(t,e){!function(){t.exports=this.wp.editor}()},22:function(t,e){!function(){t.exports=this.wp.compose}()},24:function(t,e){!function(){t.exports=this.wp.blocks}()},26:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(13),o=r.n(n),c=r(23),i=r.n(c),u=function(){var t=i()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e.json){t.next=11;break}return t.prev=1,t.next=4,e.json();case 4:return r=t.sent,t.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{message:t.t0.message,type:"general"});case 11:return t.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},27:function(t,e,r){"use strict";r.d(e,"g",(function(){return p})),r.d(e,"d",(function(){return d})),r.d(e,"a",(function(){return g})),r.d(e,"h",(function(){return f})),r.d(e,"e",(function(){return O})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return j})),r.d(e,"f",(function(){return m}));var n=r(9),o=r.n(n),c=r(12),i=r(7),u=r.n(i),a=r(5),s=r(6);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,l=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=void 0===n?"":n,i=t.queryArgs,u=void 0===i?[]:i,a={per_page:s.f?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},l=[Object(c.addQueryArgs)("/wc/store/products",b({},a,{},u))];return s.f&&r.length&&l.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),l}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(l.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id").map((function(t){return b({},t,{parent:0})}))})).catch((function(t){throw t}))},d=function(t){return u()({path:"/wc/store/products/".concat(t)})},g=function(){return u()({path:"wc/store/products/attributes"})},f=function(t){return u()({path:"wc/store/products/attributes/".concat(t,"/terms")})},O=function(t){var e=t.selected,r=function(t){var e=t.selected,r=void 0===e?[]:e,n=t.search,o=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:s.g?100:0,orderby:s.g?"count":"name",order:s.g?"desc":"asc",search:n})];return s.g&&r.length&&o.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),o}({selected:void 0===e?[]:e,search:t.search});return Promise.all(r.map((function(t){return u()({path:t})}))).then((function(t){return Object(a.uniqBy)(Object(a.flatten)(t),"id")}))},h=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products/categories",b({per_page:0},t))})},j=function(t){return u()({path:"wc/store/products/categories/".concat(t)})},m=function(t){return u()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:t})})}},28:function(t,e){!function(){t.exports=this.wp.escapeHtml}()},29:function(t,e,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(28));e.a=function(t){var e,r,i,u=t.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(e=u).message,i=e.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},3:function(t,e){!function(){t.exports=this.wc.wcSettings}()},36:function(t,e){!function(){t.exports=this.wp.keycodes}()},4:function(t,e){!function(){t.exports=this.wp.components}()},42:function(t,e,r){"use strict";var n=r(9),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(4));function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.onChange,r=t.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return e(s({},r,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:o?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return e(s({},r,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return e(s({},r,{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return e(s({},r,{button:!n}))}}))}},48:function(t,e){!function(){t.exports=this.ReactDOM}()},49:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(5),i=(r(2),r(4)),u=r(6);e.a=function(t){var e=t.columns,r=t.rows,a=t.setAttributes,s=t.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:e,onChange:function(t){var e=Object(c.clamp)(t,u.j,u.h);a({columns:Object(c.isNaN)(e)?"":e})},min:u.j,max:u.h}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(t){var e=Object(c.clamp)(t,u.l,u.i);a({rows:Object(c.isNaN)(e)?"":e})},min:u.l,max:u.i}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:s?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},5:function(t,e){!function(){t.exports=this.lodash}()},50:function(t,e,r){"use strict";r.d(e,"a",(function(){return b}));var n=r(0),o=r(8),c=r.n(o),i=r(46),u=r.n(i),a=r(6);function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,c=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){return function(e){var r=e.attributes,o=r.align,i=r.contentVisibility,l=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:l},function(t,e){var r=t.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,l=r.orderby,b=r.products,p=r.columns||a.a,d=r.rows||a.c,g=new Map;switch(g.set("limit",d*p),g.set("columns",p),c&&c.length&&(g.set("category",c.join(",")),i&&"all"===i&&g.set("cat_operator","AND")),n&&n.length&&(g.set("terms",n.map((function(t){return t.id})).join(",")),g.set("attribute",n[0].attr_slug),o&&"all"===o&&g.set("terms_operator","AND")),l&&("price_desc"===l?(g.set("orderby","price"),g.set("order","DESC")):"price_asc"===l?(g.set("orderby","price"),g.set("order","ASC")):"date"===l?(g.set("orderby","date"),g.set("order","DESC")):g.set("orderby",l)),e){case"woocommerce/product-best-sellers":g.set("best_selling","1");break;case"woocommerce/product-top-rated":g.set("orderby","rating");break;case"woocommerce/product-on-sale":g.set("on_sale","1");break;case"woocommerce/product-new":g.set("orderby","date"),g.set("order","DESC");break;case"woocommerce/handpicked-products":if(!b.length)return"";g.set("ids",b.join(",")),g.set("limit",b.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var f,O="[products",h=s(g);try{for(h.s();!(f=h.n()).done;){var j=u()(f.value,2);O+=" "+j[0]+'="'+j[1]+'"'}}catch(t){h.e(t)}finally{h.f()}return O+="]"}(e,t))}}},51:function(t,e){!function(){t.exports=this.wp.viewport}()},56:function(t,e){!function(){t.exports=this.wp.hooks}()},565:function(t,e,r){},576:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),c=r(62),i=r(601),u=Object(n.createElement)(i.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z"}),Object(n.createElement)("circle",{cx:"11",cy:"9",r:"1"}),Object(n.createElement)("path",{d:"M5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"})),a=r(24),s=r(6),l=(r(565),r(16)),b=r.n(l),p=r(17),d=r.n(p),g=r(18),f=r.n(g),O=r(19),h=r.n(O),j=r(11),m=r.n(j),y=r(21),w=r(4),v=(r(2),r(42)),_=r(49),k=r(81),S=r.n(k),E=r(15),P=r.n(E),C=r(5),x=r(30),A=r(13),D=r.n(A),T=r(23),M=r.n(T),B=r(9),N=r.n(B),I=r(46),L=r.n(I),R=r(27),z=r(26);function V(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?V(Object(r),!0).forEach((function(e){N()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var F=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id";return e?Object(C.find)(e,[r,t]):null},Q=function(t){return function(e){var r=e.selected,o=Object(n.useState)([]),c=L()(o,2),i=c[0],u=c[1],a=Object(n.useState)(0),s=L()(a,2),l=s[0],b=s[1],p=Object(n.useState)({}),d=L()(p,2),g=d[0],f=d[1],O=Object(n.useState)(!0),h=L()(O,2),j=h[0],m=h[1],y=Object(n.useState)(!1),w=L()(y,2),v=w[0],_=w[1],k=Object(n.useState)(null),S=L()(k,2),E=S[0],C=S[1];return Object(n.useEffect)((function(){Object(R.a)().then((function(t){if(t=t.map((function(t){return H({},t,{parent:0})})),u(t),r.length>0){var e=i?F(r[0].attr_slug,t,"slug"):null;e&&b(e.id)}})).catch(function(){var t=M()(D.a.mark((function t(e){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=C,t.next=3,Object(z.a)(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){m(!1)}))}),[]),Object(n.useEffect)((function(){var t=i?F(l,i):null;t&&(_(!0),Object(R.h)(l).then((function(e){e=e.map((function(e){return H({},e,{parent:l,attr_slug:t.slug})})),f(H({},g,N()({},l,e)))})).catch(function(){var t=M()(D.a.mark((function t(e){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=C,t.next=3,Object(z.a)(e);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).finally((function(){_(!1)})))}),[l,i]),Object(n.createElement)(t,P()({},e,{attributes:i,error:E,expandedAttribute:l,onExpandAttribute:b,isLoading:j,termsAreLoading:v,termsList:g}))}},q=r(29),W=(r(566),function(t){var e=t.attributes,r=t.error,c=t.expandedAttribute,i=t.onChange,u=t.onExpandAttribute,a=t.onOperatorChange,s=t.isLoading,l=t.operator,b=t.selected,p=t.termsAreLoading,d=t.termsList,g=function(t){return function(){i([]),u(t.id)}},f=d[c]||[],O=[].concat(S()(e),S()(f)),h={clear:Object(o.__)("Clear all product attributes","woo-gutenberg-products-block"),list:Object(o.__)("Product Attributes","woo-gutenberg-products-block"),noItems:Object(o.__)("Your store doesn't have any product attributes.","woo-gutenberg-products-block"),search:Object(o.__)("Search for product attributes","woo-gutenberg-products-block"),selected:function(t){return Object(o.sprintf)(Object(o._n)("%d attribute selected","%d attributes selected",t,"woo-gutenberg-products-block"),t)},updated:Object(o.__)("Product attribute search results updated.","woo-gutenberg-products-block")};return r?Object(n.createElement)(q.a,{error:r}):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(x.a,{className:"woocommerce-product-attributes",list:O,isLoading:s,selected:b.map((function(t){var e=t.id;return Object(C.find)(O,{id:e})})).filter(Boolean),onChange:i,renderItem:function(t){var e=t.item,r=t.search,i=t.depth,u=void 0===i?0:i,a=["woocommerce-product-attributes__item","woocommerce-search-list__item"];return r.length&&a.push("is-searching"),0===u&&e.parent&&a.push("is-skip-level"),e.breadcrumbs.length?Object(n.createElement)(x.b,P()({className:a.join(" ")},t,{showCount:!0,"aria-label":"".concat(e.breadcrumbs[0],": ").concat(e.name)})):[Object(n.createElement)(x.b,P()({key:"attr-".concat(e.id)},t,{className:a.join(" "),isSelected:c===e.id,onSelect:g,isSingle:!0,disabled:"0"===e.count,"aria-expanded":c===e.id,"aria-label":Object(o.sprintf)(Object(o._n)("%s, has %d term","%s, has %d terms",e.count,"woo-gutenberg-products-block"),e.name,e.count)})),c===e.id&&p&&Object(n.createElement)("div",{key:"loading",className:"woocommerce-search-list__item woocommerce-product-attributes__itemdepth-1 is-loading is-not-active"},Object(n.createElement)(w.Spinner,null))]},messages:h,isHierarchical:!0}),!!a&&Object(n.createElement)("div",{className:b.length<2?"screen-reader-text":""},Object(n.createElement)(w.SelectControl,{className:"woocommerce-product-attributes__operator",label:Object(o.__)("Display products matching","woo-gutenberg-products-block"),help:Object(o.__)("Pick at least two attributes to use this setting.","woo-gutenberg-products-block"),value:l,onChange:a,options:[{label:Object(o.__)("Any selected attributes","woo-gutenberg-products-block"),value:"any"},{label:Object(o.__)("All selected attributes","woo-gutenberg-products-block"),value:"all"}]})))});W.defaultProps={operator:"any"};var U=Q(W),G=r(64),J=r(97);function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Y=function(t){f()(i,t);var e,r=(e=i,function(){var t,r=m()(e);if(X()){var n=m()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return h()(this,t)});function i(){return b()(this,i),r.apply(this,arguments)}return d()(i,[{key:"getInspectorControls",value:function(){var t=this.props.setAttributes,e=this.props.attributes,r=e.attributes,c=e.attrOperator,i=e.columns,u=e.contentVisibility,a=e.orderby,s=e.rows,l=e.alignButtons;return Object(n.createElement)(y.InspectorControls,{key:"inspector"},Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(_.a,{columns:i,rows:s,alignButtons:l,setAttributes:t})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(v.a,{settings:u,onChange:function(e){return t({contentVisibility:e})}})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Filter by Product Attribute","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(U,{selected:r,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));t({attributes:r})},operator:c,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return t({attrOperator:e})}})),Object(n.createElement)(w.PanelBody,{title:Object(o.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(G.a,{setAttributes:t,value:a})))}},{key:"renderEditMode",value:function(){var t=this.props,e=t.debouncedSpeak,r=t.setAttributes,i=this.props.attributes;return Object(n.createElement)(w.Placeholder,{icon:Object(n.createElement)(c.a,{srcElement:u}),label:Object(o.__)("Products by Attribute","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-by-attribute"},Object(o.__)("Display a grid of products from your selected attributes.","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-products-by-attribute__selection"},Object(n.createElement)(U,{selected:i.attributes,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.map((function(t){return{id:t.id,attr_slug:t.attr_slug}}));r({attributes:e})},operator:i.attrOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({attrOperator:t})}}),Object(n.createElement)(w.Button,{isDefault:!0,onClick:function(){r({editMode:!1}),e(Object(o.__)("Showing Products by Attribute block preview.","woo-gutenberg-products-block"))}},Object(o.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var t=this.props,e=t.attributes,r=t.name,c=t.setAttributes,i=e.editMode;return e.isPreview?J.a:Object(n.createElement)(n.Fragment,null,Object(n.createElement)(y.BlockControls,null,Object(n.createElement)(w.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:function(){return c({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(w.Disabled,null,Object(n.createElement)(y.ServerSideRender,{block:r,attributes:e})))}}]),i}(n.Component),$=Object(w.withSpokenMessages)(Y),K=r(50);Object(a.registerBlockType)("woocommerce/products-by-attribute",{title:Object(o.__)("Products by Attribute","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(c.a,{srcElement:u}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(o.__)("Display a grid of products with selected attributes.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:s.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:s.c},alignButtons:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},deprecated:[{attributes:{attributes:{type:"array",default:[]},attrOperator:{type:"string",default:"any"},columns:{type:"number",default:s.a},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},rows:{type:"number",default:s.c}},save:Object(K.a)("woocommerce/products-by-attribute")}],edit:function(t){return Object(n.createElement)($,t)},save:function(){return null}})},6:function(t,e,r){"use strict";r.d(e,"m",(function(){return l})),r.d(e,"n",(function(){return b})),r.d(e,"h",(function(){return p})),r.d(e,"j",(function(){return d})),r.d(e,"a",(function(){return g})),r.d(e,"i",(function(){return f})),r.d(e,"l",(function(){return O})),r.d(e,"c",(function(){return h})),r.d(e,"k",(function(){return j})),r.d(e,"b",(function(){return m})),r.d(e,"f",(function(){return y})),r.d(e,"g",(function(){return w})),r.d(e,"d",(function(){return v})),r.d(e,"e",(function(){return _})),r.d(e,"o",(function(){return k}));var n=r(9),o=r.n(n),c=r(7),i=r.n(c),u=r(3);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var s=Object(u.getSetting)("storeApiNonce");i.a.use((function(t,e){if(function(t){var e=t.url||t.path;return!(!e||!t.method||"GET"===t.method)&&null!==/wc\/store\//.exec(e)}(t)){var r=t.headers||{};t.headers=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r,{"X-WC-Store-API-Nonce":s})}return e(t,e)})),i.a.setNonce=function(t){var e=null==t?void 0:t.get("X-WC-Store-API-Nonce");e&&(s=e)};Object(u.getSetting)("currentUserIsAdmin",!1);var l=Object(u.getSetting)("reviewRatingsEnabled",!0),b=Object(u.getSetting)("showAvatars",!0),p=Object(u.getSetting)("max_columns",6),d=Object(u.getSetting)("min_columns",1),g=Object(u.getSetting)("default_columns",3),f=Object(u.getSetting)("max_rows",6),O=Object(u.getSetting)("min_rows",1),h=Object(u.getSetting)("default_rows",3),j=Object(u.getSetting)("min_height",500),m=Object(u.getSetting)("default_height",500),y=(Object(u.getSetting)("placeholderImgSrc",""),Object(u.getSetting)("thumbnail_size",300),Object(u.getSetting)("isLargeCatalog")),w=Object(u.getSetting)("limitTags"),v=(Object(u.getSetting)("hasProducts",!0),Object(u.getSetting)("hasTags",!0)),_=Object(u.getSetting)("homeUrl",""),k=(Object(u.getSetting)("couponsEnabled",!0),Object(u.getSetting)("shippingEnabled",!0),Object(u.getSetting)("taxesEnabled",!0),Object(u.getSetting)("displayItemizedTaxes",!1),Object(u.getSetting)("displayShopPricesIncludingTax",!1),Object(u.getSetting)("displayCartPricesIncludingTax",!1),Object(u.getSetting)("productCount",0),Object(u.getSetting)("attributes",[]),Object(u.getSetting)("isShippingCalculatorEnabled",!0),Object(u.getSetting)("isShippingCostHidden",!1),Object(u.getSetting)("wcBlocksAssetUrl","")),S=(Object(u.getSetting)("shippingCountries",{}),Object(u.getSetting)("allowedCountries",{}),Object(u.getSetting)("shippingStates",{}),Object(u.getSetting)("allowedStates",{}),Object(u.getSetting)("shippingMethodsExist",!1),{id:0,title:"",permalink:""}),E=Object(u.getSetting)("storePages",{shop:S,cart:S,checkout:S,privacy:S,terms:S});E.shop.permalink,E.checkout.id,E.checkout.permalink,E.privacy.permalink,E.privacy.title,E.terms.permalink,E.terms.title,E.cart.id,E.cart.permalink},60:function(t,e){!function(){t.exports=this.wp.htmlEntities}()},61:function(t,e){!function(){t.exports=this.wp.date}()},62:function(t,e,r){"use strict";var n=r(9),o=r.n(n),c=r(37),i=r.n(c),u=r(10);r(2);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}e.a=function(t){var e=t.srcElement,r=t.size,n=void 0===r?24:r,c=i()(t,["srcElement","size"]);return Object(u.isValidElement)(e)&&Object(u.cloneElement)(e,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({width:n,height:n},c))}},64:function(t,e,r){"use strict";var n=r(0),o=r(1),c=r(4);r(2);e.a=function(t){var e=t.value,r=t.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:e,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(t){return r({orderby:t})}})}},68:function(t,e){!function(){t.exports=this.wp.dom}()},7:function(t,e){!function(){t.exports=this.wp.apiFetch}()},72:function(t,e){},73:function(t,e){},74:function(t,e){},76:function(t,e){},77:function(t,e){},97:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(0),o=r(6),c=Object(n.createElement)("img",{src:o.o+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})}});