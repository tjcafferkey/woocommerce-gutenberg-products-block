(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[8],{124:function(e,t,r){"use strict";var n=r(0);r(213),t.a=function(){return Object(n.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})}},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n,c=r(4),o=r.n(c),a=r(6);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e){e.ADD_EVENT_CALLBACK="add_event_callback",e.REMOVE_EVENT_CALLBACK="remove_event_callback"}(n||(n={}));var u={addEventCallback:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return{id:Object(a.uniqueId)(),type:n.ADD_EVENT_CALLBACK,eventType:e,callback:t,priority:r}},removeEventCallback:function(e,t){return{id:t,type:n.REMOVE_EVENT_CALLBACK,eventType:e}}},l={},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,r=t.type,c=t.eventType,a=t.id,s=t.callback,u=t.priority,b=e.hasOwnProperty(c)?new Map(e[c]):new Map;switch(r){case n.ADD_EVENT_CALLBACK:return b.set(a,{priority:u,callback:s}),i(i({},e),{},o()({},c,b));case n.REMOVE_EVENT_CALLBACK:return b.delete(a),i(i({},e),{},o()({},c,b))}}},141:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"a",(function(){return g}));var n=r(42),c=r.n(n),o=r(4),a=r.n(o),s=r(20),i=r.n(s),u=r(13),l=r.n(u),b=r(0),d=r(6),f=r(36),p=r.n(f);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e){var t=function(e,t){if("object"!==c()(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c()(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c()(t)?t:String(t)}var j=Object(b.createContext)({getValidationError:function(){return""},setValidationErrors:function(e){},clearValidationError:function(e){},clearAllValidationErrors:function(){},hideValidationError:function(){},showValidationError:function(){},showAllValidationErrors:function(){},hasValidationErrors:!1,getValidationErrorId:function(e){return e}}),h=function(){return Object(b.useContext)(j)},g=function(e){var t=e.children,r=Object(b.useState)({}),n=l()(r,2),c=n[0],o=n[1],s=Object(b.useCallback)((function(e){return c[e]}),[c]),u=Object(b.useCallback)((function(e){var t=c[e];return!t||t.hidden?"":"validate-error-".concat(e)}),[c]),f=Object(b.useCallback)((function(e){o((function(t){return t[e]?(t[e],i()(t,[e].map(v))):t}))}),[]),O=Object(b.useCallback)((function(){o({})}),[]),h=Object(b.useCallback)((function(e){e&&o((function(t){return e=Object(d.pickBy)(e,(function(e,r){return!("string"!=typeof e.message||t.hasOwnProperty(r)&&p()(t[r],e))})),0===Object.values(e).length?t:m(m({},t),e)}))}),[]),g=Object(b.useCallback)((function(e,t){o((function(r){if(!r.hasOwnProperty(e))return r;var n=m(m({},r[e]),t);return p()(r[e],n)?r:m(m({},r),{},a()({},e,n))}))}),[]),y={getValidationError:s,setValidationErrors:h,clearValidationError:f,clearAllValidationErrors:O,hideValidationError:Object(b.useCallback)((function(e){g(e,{hidden:!0})}),[g]),showValidationError:Object(b.useCallback)((function(e){g(e,{hidden:!1})}),[g]),showAllValidationErrors:Object(b.useCallback)((function(){o((function(e){var t={};return Object.keys(e).forEach((function(r){e[r].hidden&&(t[r]=m(m({},e[r]),{},{hidden:!1}))})),0===Object.values(t).length?e:m(m({},e),t)}))}),[]),hasValidationErrors:Object.keys(c).length>0,getValidationErrorId:u};return Object(b.createElement)(j.Provider,{value:y},t)}},212:function(e,t){},213:function(e,t){},214:function(e,t){},264:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),c=(r(2),r(141)),o=(r(214),function(e){var t=e.errorMessage,r=void 0===t?"":t,o=e.propertyName,a=void 0===o?"":o,s=e.elementId,i=void 0===s?"":s,u=Object(c.b)(),l=u.getValidationError,b=u.getValidationErrorId;if(!r||"string"!=typeof r){var d=l(a)||{};if(!d.message||d.hidden)return null;r=d.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:b(i)},r))})},344:function(e,t){},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(134),c=function(e,t){return function(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=n.a.addEventCallback(e,r,c);return t(o),function(){t(n.a.removeEventCallback(e,o.id))}}}},349:function(e,t,r){"use strict";t.a={showFormElements:{type:"boolean",default:!1},productId:{type:"number",default:0}}},350:function(e,t,r){"use strict";var n=r(0),c=(r(2),r(7)),o=r.n(c),a=r(13),s=r.n(a),i=r(1),u=r(69),l=r(807),b={status:"pristine",hasError:!1,quantity:1,processingResponse:null,requestParams:{}},d=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=e?"set_has_error":"set_no_error";return{type:t}},f=r(4),p=r.n(f);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v="idle",j=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,r=arguments.length>1?arguments[1]:void 0,n=r.quantity,c=r.type,o=r.data;switch(c){case"set_pristine":e=b;break;case"set_idle":e=t.status!==v?m(m({},t),{},{status:v}):t;break;case"set_disabled":e="disabled"!==t.status?m(m({},t),{},{status:"disabled"}):t;break;case"set_quantity":e=n!==t.quantity?m(m({},t),{},{quantity:n}):t;break;case"set_request_params":e=m(m({},t),{},{requestParams:m(m({},t.requestParams),o)});break;case"set_processing_response":e=m(m({},t),{},{processingResponse:o});break;case"set_processing":e=!1===(e="processing"!==t.status?m(m({},t),{},{status:"processing",hasError:!1}):t).hasError?e:m(m({},e),{},{hasError:!1});break;case"set_before_processing":e="before_processing"!==t.status?m(m({},t),{},{status:"before_processing",hasError:!1}):t;break;case"set_after_processing":e="after_processing"!==t.status?m(m({},t),{},{status:"after_processing"}):t;break;case"set_has_error":e=t.hasError?t:m(m({},t),{},{hasError:!0}),e="processing"===t.status||"before_processing"===t.status?m(m({},e),{},{status:v}):e;break;case"set_no_error":e=t.hasError?m(m({},t),{},{hasError:!1}):t}return e!==t&&"set_pristine"!==c&&"pristine"===e.status&&(e.status=v),e},h=r(134),g=r(348),y=function(e){return{onAddToCartAfterProcessingWithSuccess:Object(g.a)("add_to_cart_after_processing_with_success",e),onAddToCartProcessingWithError:Object(g.a)("add_to_cart_after_processing_with_error",e),onAddToCartBeforeProcessing:Object(g.a)("add_to_cart_before_processing",e)}},E=r(352),_=r(141),w=r(64),P=r(60),k=Object(n.createContext)({product:{},productType:"simple",productIsPurchasable:!0,productHasOptions:!1,supportsFormElements:!0,showFormElements:!1,quantity:0,minQuantity:1,maxQuantity:99,requestParams:{},isIdle:!1,isDisabled:!1,isProcessing:!1,isBeforeProcessing:!1,isAfterProcessing:!1,hasError:!1,eventRegistration:{onAddToCartAfterProcessingWithSuccess:function(e){},onAddToCartAfterProcessingWithError:function(e){},onAddToCartBeforeProcessing:function(e){}},dispatchActions:{resetForm:function(){},submitForm:function(){},setQuantity:function(e){},setHasError:function(e){},setAfterProcessing:function(e){},setRequestParams:function(e){}}}),C=function(){return Object(n.useContext)(k)},A=function(e){var t=e.children,r=e.product,c=e.showFormElements,o=Object(n.useReducer)(j,b),a=s()(o,2),f=a[0],p=a[1],O=Object(n.useReducer)(h.b,{}),m=s()(O,2),v=m[0],g=m[1],C=Object(u.a)(v),A=Object(w.a)(),S=A.addErrorNotice,x=A.removeNotices,D=Object(_.b)().setValidationErrors,N=Object(P.c)(),V=N.isSuccessResponse,R=N.isErrorResponse,T=N.isFailResponse,q=Object(n.useMemo)((function(){return{onAddToCartAfterProcessingWithSuccess:y(g).onAddToCartAfterProcessingWithSuccess,onAddToCartAfterProcessingWithError:y(g).onAddToCartAfterProcessingWithError,onAddToCartBeforeProcessing:y(g).onAddToCartBeforeProcessing}}),[g]),F=Object(n.useMemo)((function(){return{resetForm:function(){p({type:"set_pristine"})},submitForm:function(){p({type:"set_before_processing"})},setQuantity:function(e){p(function(e){return{type:"set_quantity",quantity:e}}(e))},setHasError:function(e){p(d(e))},setRequestParams:function(e){p(function(e){return{type:"set_request_params",data:e}}(e))},setAfterProcessing:function(e){p({type:"set_processing_response",data:e}),p({type:"set_after_processing"})}}}),[]);Object(n.useEffect)((function(){var e=f.status,t=!r.id||!Object(l.a)(r);"disabled"!==e||t?"disabled"!==e&&t&&p({type:"set_disabled"}):p({type:"set_idle"})}),[f.status,r,p]),Object(n.useEffect)((function(){"before_processing"===f.status&&(x("error"),Object(E.a)(C,"add_to_cart_before_processing",{}).then((function(e){!0!==e?(Array.isArray(e)&&e.forEach((function(e){var t=e.errorMessage,r=e.validationErrors;t&&S(t),r&&D(r)})),p({type:"set_idle"})):p({type:"set_processing"})})))}),[f.status,D,S,x,p,C]),Object(n.useEffect)((function(){if("after_processing"===f.status){var e={processingResponse:f.processingResponse},t=function(e){var t=!1;return e.forEach((function(e){var r=e.message,n=e.messageContext;(R(e)||T(e))&&r&&(t=!0,S(r,n?{context:n}:void 0))})),t};if(f.hasError)return void Object(E.b)(C,"add_to_cart_after_processing_with_error",e).then((function(r){if(!t(r)){var n,c=(null===(n=e.processingResponse)||void 0===n?void 0:n.message)||Object(i.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block");S(c,{id:"add-to-cart"})}p({type:"set_idle"})}));Object(E.b)(C,"add_to_cart_after_processing_with_success",e).then((function(e){t(e)?p(d(!0)):p({type:"set_idle"})}))}}),[f.status,f.hasError,f.processingResponse,F,S,R,T,V,C]);var B=Object(l.b)(r),I={product:r,productType:r.type||"simple",productIsPurchasable:Object(l.a)(r),productHasOptions:r.has_options||!1,supportsFormElements:B,showFormElements:c&&B,quantity:f.quantity,minQuantity:1,maxQuantity:r.quantity_limit||99,requestParams:f.requestParams,isIdle:"idle"===f.status,isDisabled:"disabled"===f.status,isProcessing:"processing"===f.status,isBeforeProcessing:"before_processing"===f.status,isAfterProcessing:"after_processing"===f.status,hasError:f.hasError,eventRegistration:q,dispatchActions:F};return Object(n.createElement)(k.Provider,{value:I},t)},S=r(19),x=r.n(S),D=r(28),N=r(56);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var R=function(){var e=C(),t=e.dispatchActions,r=e.product,c=e.quantity,o=e.eventRegistration,a=e.hasError,u=e.isProcessing,l=e.requestParams,b=Object(_.b)(),d=b.hasValidationErrors,f=b.showAllValidationErrors,O=Object(w.a)(),m=O.addErrorNotice,v=O.removeNotice,j=Object(N.a)().receiveCart,h=Object(n.useState)(!1),g=s()(h,2),y=g[0],E=g[1],P=!a&&u,k=Object(n.useCallback)((function(){return!d||(f(),{type:"error"})}),[d,f]);Object(n.useEffect)((function(){var e=o.onAddToCartBeforeProcessing(k,0);return function(){e()}}),[o,k]);var A=Object(n.useCallback)((function(){E(!0),v("add-to-cart");var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({id:r.id||0,quantity:c},l);x()({path:"/wc/store/cart/add-item",method:"POST",data:e,cache:"no-store",parse:!1}).then((function(e){x.a.setNonce(e.headers),e.json().then((function(r){e.ok?j(r):(r.body&&r.body.message?m(Object(D.decodeEntities)(r.body.message),{id:"add-to-cart"}):m(Object(i.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block"),{id:"add-to-cart"}),t.setHasError()),t.setAfterProcessing(r),E(!1)}))})).catch((function(e){e.json().then((function(e){var r;null!==(r=e.data)&&void 0!==r&&r.cart&&j(e.data.cart),t.setHasError(),t.setAfterProcessing(e),E(!1)}))}))}),[r,m,v,j,t,c,l]);return Object(n.useEffect)((function(){P&&!y&&A()}),[P,A,y]),null},T=function(e){var t=e.children,r=e.product,c=e.showFormElements;return Object(n.createElement)(_.a,null,Object(n.createElement)(A,{product:r,showFormElements:c},t,Object(n.createElement)(R,null)))},q=r(43),F=r(6),B=r(75),I=(r(344),r(99)),L=r(62),M=r(503),Q=r(72),W=r(728),H=function(e){var t=e.className,r=e.href,c=e.text,o=e.onClick;return Object(n.createElement)(I.a,{className:t,href:r,onClick:o,rel:"nofollow"},c)},K=function(e){var t=e.className,r=e.quantityInCart,c=e.isProcessing,o=e.isDisabled,a=e.isDone,s=e.onClick;return Object(n.createElement)(I.a,{className:t,disabled:o,showSpinner:c,onClick:s},a&&r>0?Object(i.sprintf)(
/* translators: %s number of products in cart. */
Object(i._n)("%d in cart","%d in cart",r,"woo-gutenberg-products-block"),r):Object(i.__)("Add to cart","woo-gutenberg-products-block"),!!a&&Object(n.createElement)(L.a,{srcElement:M.a,alt:Object(i.__)("Done","woo-gutenberg-products-block")}))},U=function(){var e=C(),t=e.showFormElements,r=e.productIsPurchasable,c=e.productHasOptions,o=e.product,a=e.productType,u=e.isDisabled,l=e.isProcessing,b=e.eventRegistration,d=e.hasError,f=e.dispatchActions,p=Object(q.useInnerBlockLayoutContext)().parentName,O=Object(Q.a)().dispatchStoreEvent,m=Object(W.a)(o.id||0).cartQuantity,v=Object(n.useState)(!1),j=s()(v,2),h=j[0],g=j[1],y=o.add_to_cart||{url:"",text:""};return Object(n.useEffect)((function(){var e=b.onAddToCartAfterProcessingWithSuccess((function(){return d||g(!0),!0}),0);return function(){e()}}),[b,d]),(t||!c&&"simple"===a)&&r?Object(n.createElement)(K,{className:"wc-block-components-product-add-to-cart-button",quantityInCart:m,isDisabled:u,isProcessing:l,isDone:h,onClick:function(){f.submitForm(),O("cart-add-item",{product:o,listName:p})}}):Object(n.createElement)(H,{className:"wc-block-components-product-add-to-cart-button",href:y.url,text:y.text||Object(i.__)("View Product","woo-gutenberg-products-block"),onClick:function(){O("product-view-link",{product:o,listName:p})}})},z=function(e){var t=e.disabled,r=e.min,c=e.max,o=e.value,a=e.onChange;return Object(n.createElement)("input",{className:"wc-block-components-product-add-to-cart-quantity",type:"number",value:o,min:r,max:c,hidden:1===c,disabled:t,onChange:function(e){a(e.target.value)}})},G=function(e){var t=e.reason,r=void 0===t?Object(i.__)("Sorry, this product cannot be purchased.","woo-gutenberg-products-block"):t;return Object(n.createElement)("div",{className:"wc-block-components-product-add-to-cart-unavailable"},r)},J=function(){var e=C(),t=e.product,r=e.quantity,c=e.minQuantity,o=e.maxQuantity,a=e.dispatchActions,s=e.isDisabled;return t.id&&!t.is_purchasable?Object(n.createElement)(G,null):t.id&&!t.is_in_stock?Object(n.createElement)(G,{reason:Object(i.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(z,{value:r,min:c,max:o,disabled:s,onChange:a.setQuantity}),Object(n.createElement)(U,null))},Y=(r(502),r(31)),X=r.n(Y),$=r(3),Z=r(8),ee=r(264),te={value:"",label:Object(i.__)("Select an option","woo-gutenberg-products-block")},re=function(e){var t=e.attributeName,r=e.options,c=void 0===r?[]:r,a=e.value,s=void 0===a?"":a,u=e.onChange,l=void 0===u?function(){}:u,b=e.errorMessage,d=void 0===b?Object(i.__)("Please select a value.","woo-gutenberg-products-block"):b,f=Object(_.b)(),O=f.getValidationError,m=f.setValidationErrors,v=f.clearValidationError,j=t,h=O(j)||{};return Object(Z.useEffect)((function(){s?v(j):m(p()({},j,{message:d,hidden:!0}))}),[s,j,d,v,m]),Object(Z.useEffect)((function(){return function(){v(j)}}),[j,v]),Object(n.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker__container"},Object(n.createElement)($.SelectControl,{label:Object(D.decodeEntities)(t),value:s||"",options:[te].concat(X()(c)),onChange:l,required:!0,className:o()("wc-block-components-product-add-to-cart-attribute-picker__select",{"has-error":h.message&&!h.hidden})}),Object(n.createElement)(ee.a,{propertyName:j,elementId:j}))};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=function(e,t,r){var n=Object.values(t).map((function(e){return e.id}));if(Object.values(r).every((function(e){return""===e})))return n;var c=Object.keys(e);return n.filter((function(e){return c.every((function(n){var c=r[n]||"",o=t["id:"+e].attributes[n];return""===c||null===o||o===c}))}))};function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){p()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=function(e){var t=e.attributes,r=e.variationAttributes,c=e.setRequestParams,o=Object(u.a)(t),a=Object(u.a)(r),i=Object(n.useState)(0),l=s()(i,2),b=l[0],d=l[1],f=Object(n.useState)({}),O=s()(f,2),m=O[0],v=O[1],j=Object(n.useMemo)((function(){return function(e,t,r){var n={},c=Object.keys(e),o=Object.values(r).filter(Boolean).length>0;return c.forEach((function(c){var a=e[c],s=ce(ce({},r),{},p()({},c,null)),i=o?oe(e,t,s):null,u=null!==i?i.map((function(e){return t["id:"+e].attributes[c]})):null;n[c]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return Object.values(e).map((function(e){var r=e.name,n=e.slug;return null===t||t.includes(null)||t.includes(n)?{value:n,label:Object(D.decodeEntities)(r)}:null})).filter(Boolean)}(a.terms,u)})),n}(o,a,m)}),[m,o,a]);return Object(n.useEffect)((function(){Object.values(m).filter((function(e){return""!==e})).length===Object.keys(o).length?d(function(e,t,r){return oe(e,t,r)[0]||0}(o,a,m)):b>0&&d(0)}),[m,b,o,a]),Object(n.useEffect)((function(){c({id:b,variation:Object.keys(m).map((function(e){return{attribute:e,value:m[e]}}))})}),[c,b,m]),Object(n.createElement)("div",{className:"wc-block-components-product-add-to-cart-attribute-picker"},Object.keys(o).map((function(e){return Object(n.createElement)(re,{key:e,attributeName:e,options:j[e],value:m[e],onChange:function(t){v(se(se({},m),{},p()({},e,t)))}})})))},ue=function(e){var t=e.product,r=e.dispatchers,c=function(e){return e?Object(F.keyBy)(Object.values(e).filter((function(e){return e.has_variations})),"name"):{}}(t.attributes),o=function(e){if(!e)return{};var t={};return e.forEach((function(e){var r=e.id,n=e.attributes;t["id:".concat(r)]={id:r,attributes:n.reduce((function(e,t){var r=t.name,n=t.value;return e[r]=n,e}),{})}})),t}(t.variations);return 0===Object.keys(c).length||0===o.length?null:Object(n.createElement)(ie,{attributes:c,variationAttributes:o,setRequestParams:r.setRequestParams})},le=function(){var e=C(),t=e.product,r=e.quantity,c=e.minQuantity,o=e.maxQuantity,a=e.dispatchActions,s=e.isDisabled;return t.id&&!t.is_purchasable?Object(n.createElement)(G,null):t.id&&!t.is_in_stock?Object(n.createElement)(G,{reason:Object(i.__)("This product is currently out of stock and cannot be purchased.","woo-gutenberg-products-block")}):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(ue,{product:t,dispatchers:a}),Object(n.createElement)(z,{value:r,min:c,max:o,disabled:s,onChange:a.setQuantity}),Object(n.createElement)(U,null))},be=function(){return Object(n.createElement)(U,null)},de=function(){return Object(n.createElement)($.Placeholder,{className:"wc-block-components-product-add-to-cart-group-list"},"This is a placeholder for the grouped products form element.")},fe=function(){return Object(n.createElement)(de,null)},pe=function(){var e=C(),t=e.showFormElements,r=e.productType;return t?"variable"===r?Object(n.createElement)(le,null):"grouped"===r?Object(n.createElement)(fe,null):"external"===r?Object(n.createElement)(be,null):"simple"===r||"variation"===r?Object(n.createElement)(J,null):null:Object(n.createElement)(U,null)};t.a=Object(B.withProductDataContext)((function(e){var t=e.className,r=e.showFormElements,c=Object(q.useProductDataContext)().product,a=o()(t,"wc-block-components-product-add-to-cart",{"wc-block-components-product-add-to-cart--placeholder":Object(F.isEmpty)(c)});return Object(n.createElement)(T,{product:c,showFormElements:r},Object(n.createElement)("div",{className:a},Object(n.createElement)(pe,null)))}))},352:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return p}));var n=r(42),c=r.n(n),o=r(30),a=r.n(o),s=r(10),i=r.n(s),u=function(e,t){return e[t]?Array.from(e[t].values()).sort((function(e,t){return e.priority-t.priority})):[]},l=r(60);function b(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return d(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(){var e=a()(i.a.mark((function e(t,r,n){var o,a,s,l,d,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=u(t,r),a=[],s=b(o),e.prev=3,s.s();case 5:if((l=s.n()).done){e.next=19;break}return d=l.value,e.prev=7,e.next=10,Promise.resolve(d.callback(n));case 10:f=e.sent,"object"===c()(f)&&a.push(f),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error(e.t0);case 17:e.next=5;break;case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(3),s.e(e.t1);case 24:return e.prev=24,s.f(),e.finish(24);case 27:return e.abrupt("return",!a.length||a);case 28:case"end":return e.stop()}}),e,null,[[3,21,24,27],[7,14]])})));return function(_x,t,r){return e.apply(this,arguments)}}(),p=function(){var e=a()(i.a.mark((function e(t,r,n){var o,a,s,d,f,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[],a=u(t,r),s=b(a),e.prev=3,s.s();case 5:if((d=s.n()).done){e.next=28;break}return f=d.value,e.prev=7,e.next=10,Promise.resolve(f.callback(n));case 10:if(p=e.sent,"object"===c()(p)&&null!==p){e.next=13;break}return e.abrupt("continue",26);case 13:if(p.hasOwnProperty("type")){e.next=15;break}throw new Error("Returned objects from event emitter observers must return an object with a type property");case 15:if(!Object(l.a)(p)&&!Object(l.b)(p)){e.next=18;break}return o.push(p),e.abrupt("return",o);case 18:o.push(p),e.next=26;break;case 21:return e.prev=21,e.t0=e.catch(7),console.error(e.t0),o.push({type:"error"}),e.abrupt("return",o);case 26:e.next=5;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(3),s.e(e.t1);case 33:return e.prev=33,s.f(),e.finish(33);case 36:return e.abrupt("return",o);case 37:case"end":return e.stop()}}),e,null,[[3,30,33,36],[7,21]])})));return function(t,r,n){return e.apply(this,arguments)}}()},502:function(e,t){},503:function(e,t,r){"use strict";var n=r(0),c=r(32),o=Object(n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(n.createElement)("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}));t.a=o},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return b}));var n,c,o=r(109);!function(e){e.SUCCESS="success",e.FAIL="failure",e.ERROR="error"}(n||(n={})),function(e){e.PAYMENTS="wc/payment-area",e.EXPRESS_PAYMENTS="wc/express-payment-area"}(c||(c={}));var a=function(e,t){return Object(o.b)(e)&&"type"in e&&e.type===t},s=function(e){return a(e,n.SUCCESS)},i=function(e){return a(e,n.ERROR)},u=function(e){return a(e,n.FAIL)},l=function(e){return!Object(o.b)(e)||void 0===e.retry||!0===e.retry},b=function(){return{responseTypes:n,noticeContexts:c,shouldRetry:l,isSuccessResponse:s,isErrorResponse:i,isFailResponse:u}}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0),c=r(36),o=r.n(c);function a(e){var t=Object(n.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},807:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var n=function(e){return e.is_purchasable||!1},c=function(e){return["simple","variable"].includes(e.type||"simple")}},823:function(e,t,r){"use strict";r.r(t);var n=r(820),c=r(350),o=r(349);t.default=Object(n.a)(o.a)(c.a)},99:function(e,t,r){"use strict";var n=r(11),c=r.n(n),o=r(20),a=r.n(o),s=r(0),i=r(208),u=r(7),l=r.n(u),b=r(124),d=(r(212),["className","showSpinner","children"]);t.a=function(e){var t=e.className,r=e.showSpinner,n=void 0!==r&&r,o=e.children,u=a()(e,d),f=l()("wc-block-components-button",t,{"wc-block-components-button--loading":n});return Object(s.createElement)(i.a,c()({className:f},u),n&&Object(s.createElement)(b.a,null),Object(s.createElement)("span",{className:"wc-block-components-button__text"},o))}}}]);