(this["webpackJsonpplant-shop"]=this["webpackJsonpplant-shop"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){var n={"./aperture-outline.svg":73,"./cart.svg":36,"./chevron-back-outline.svg":22,"./chevron-forward-outline.svg":37,"./fb-logo.svg":38,"./fiddle-leaf-fig.jpg":74,"./gift.png":75,"./insta-logo.svg":39,"./leaf.svg":40,"./plant-accessory.png":76,"./profile.svg":35,"./sunny-outline.svg":77,"./trash-outline.svg":41,"./water-outline.svg":78};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=17},,,,,function(e,t,a){e.exports=a.p+"static/media/chevron-back-outline.d9704d15.svg"},,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/profile.8cbbe6c3.svg"},function(e,t,a){e.exports=a.p+"static/media/cart.76237921.svg"},function(e,t,a){e.exports=a.p+"static/media/chevron-forward-outline.9e301916.svg"},function(e,t,a){e.exports=a.p+"static/media/fb-logo.3437099e.svg"},function(e,t,a){e.exports=a.p+"static/media/insta-logo.831e8fd5.svg"},function(e,t,a){e.exports=a.p+"static/media/leaf.b34c4f79.svg"},function(e,t,a){e.exports=a.p+"static/media/trash-outline.fa9ede80.svg"},,,,,,,,,,function(e,t,a){e.exports=a(97)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/aperture-outline.f86e1ed6.svg"},function(e,t,a){e.exports=a.p+"static/media/fiddle-leaf-fig.2b7c8bfb.jpg"},function(e,t,a){e.exports=a.p+"static/media/gift.5e74cac0.png"},function(e,t,a){e.exports=a.p+"static/media/plant-accessory.52e364c6.png"},function(e,t,a){e.exports=a.p+"static/media/sunny-outline.373d00e0.svg"},function(e,t,a){e.exports=a.p+"static/media/water-outline.6871c628.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(26),c=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(8),l=(a(56),a(6)),s=a.n(l),u=a(13),m=a(28),d=a(29),p=a(32),f=a(31),g=a(5),E=a(21),v=a.n(E);a(58),a(60);v.a.initializeApp({apiKey:"AIzaSyBWKYHBH1TWhmCKh9vU-X6bloD8yFKg_OI",authDomain:"planteen-c72b5.firebaseapp.com",databaseURL:"https://planteen-c72b5.firebaseio.com",projectId:"planteen-c72b5",storageBucket:"planteen-c72b5.appspot.com",messagingSenderId:"1085248095635",appId:"1:1085248095635:web:f0c5a82288456d0a301466"});var b=v.a.auth(),h=v.a.firestore(),y=new v.a.auth.GoogleAuthProvider;y.setCustomParameters({prompt:"select_account"});var O=new v.a.auth.FacebookAuthProvider;O.setCustomParameters({display:"popup"}),O.addScope("email");var N={google:y,facebook:O},C=function(){var e=Object(u.a)(s.a.mark((function e(t,a,n){var r,i,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.createUserWithEmailAndPassword(t,a);case 3:r=e.sent,i=r.user,c=i.uid,o=i.email,w(c,o,n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Failed to sign up with email:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{b.signInWithEmailAndPassword(t,a)}catch(n){console.log("Failed to sign in with email:",n)}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.signInWithPopup(N[t]);case 3:a=e.sent,n=a.user,r=n.uid,i=n.email,c=n.displayName,w(r,i,c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Failed to sign in with ".concat(t,":"),e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.doc("carts/".concat(t));case 2:return n=e.sent,e.prev=3,e.next=6,n.set({cartItems:JSON.stringify(a)});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log("Error in updating cart in storage:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.signOut();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Failed to sign out:",e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(s.a.mark((function e(t,a,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.doc("users/".concat(t));case 2:return r=e.sent,e.next=5,r.get();case 5:if(e.sent.exists){e.next=15;break}return e.prev=7,e.next=10,r.set({uid:t,email:a,displayName:n,createdAt:new Date});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.log("Error in firebase profile creation:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),I=(a(63),a(4)),S={SET_CURRENT_USER:"SET_CURRENT_USER"},q=a(15),T=Object(q.a)([function(e){return e.user}],(function(e){return e.currentUser})),A={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_CART_ITEM:"ADD_CART_ITEM",REMOVE_CART_ITEM:"REMOVE_CART_ITEM",CLEAR_CART_ITEM:"CLEAR_CART_ITEM",SET_CART:"SET_CART"},U=function(){return{type:A.TOGGLE_CART_HIDDEN}},R=function(e){return{type:A.ADD_CART_ITEM,item:e}},D=a(50),L=a(2),M=function(e,t,a){return a.map((function(a){return a.id===e?Object(L.a)(Object(L.a)({},a),{},{quantity:t}):a}))},P=function(e,t){e?k(e,t):localStorage.setItem("cartItems",JSON.stringify(t))},G=function(e){return Math.round(100*e)/100},F=function(e,t,a){var n=t.find((function(t){return t.id===e.id})),r=n?M(n.id,n.quantity+1,t):[].concat(Object(D.a)(t),[Object(L.a)(Object(L.a)({},e),{},{quantity:1})]);return P(a,r),r},H=function(e,t,a){var n=t.find((function(t){return t.id===e})),r=1===n.quantity?t.filter((function(t){return t.id!==e})):M(n.id,n.quantity-1,t);return P(a,r),r},W=function(e,t,a){var n=t.filter((function(t){return t.id!==e}));return P(a,n),n},B=function(e,t){var a=JSON.parse(JSON.stringify(e));return t.forEach((function(e){var t=a.find((function(t){return t.id===e.id}));t?t.quantity+=e.quantity:a.push(e)})),a},J=function(e){return e.cart},$=Object(q.a)([J],(function(e){return e.cartHidden})),K=Object(q.a)([J],(function(e){return e.cartItems})),V=Object(q.a)([K],(function(e){var t=G(e.reduce((function(e,t){return e+t.price*t.quantity}),0)),a=G(.13*t);return[t,a,t+a]})),z=a(12),Q=(a(68),Object(g.g)((function(e){var t=e.location;return r.a.createElement("nav",{className:"text-navigation"},r.a.createElement("ul",null,[["Plants","/shop/plants"],["Accessories","/shop/accessories"],["Gifts","/shop/gifts"],["Contact Us","/contact"]].map((function(e){var a=Object(z.a)(e,2),n=a[0],i=a[1];return r.a.createElement("li",{key:n,className:"nav-item ".concat(t.pathname===i?"nav-item--active":"")},r.a.createElement(o.b,{to:i},n))}))))}))),Y=a(14),X=(a(70),a(35)),Z=a.n(X),ee=a(36),te=a.n(ee),ae=Object(Y.d)(Object(I.b)(null,(function(e){return{toggleCartHidden:function(){return e(U())}}})),g.g)((function(e){var t=e.toggleCartHidden,a=e.location;return r.a.createElement("div",{className:"icon-navigation"},r.a.createElement(o.b,{to:"/sign-in-up"},r.a.createElement("img",{src:Z.a,alt:"Profile",className:["/sign-in-up","/welcome"].indexOf(a.pathname)>-1?"icon--active":""})),r.a.createElement("div",{onClick:t},r.a.createElement("img",{src:te.a,alt:"Cart",className:"/checkout"===a.pathname?"icon--active":""})))})),ne=(a(71),a(72),Object(g.g)((function(e){var t=e.label,a=e.linkUrl,n=e.handleClick,i=e.white,c=e.googleSignIn,o=e.facebookSignIn,l=e.history;return r.a.createElement("button",{className:"custom-btn ".concat(i?"btn--white":c?"btn-google":o?"btn-facebook":"btn--standard"),onClick:function(){a&&l.push(a),n&&n()}},r.a.createElement("span",null,t))}))),re=Object(I.b)((function(e){return{cartItems:K(e),cartHidden:$(e)}}),(function(e){return{toggleCartHidden:function(){return e(U())}}}))((function(e){var t=e.cartItems,n=e.toggleCartHidden,i=e.cartHidden;return r.a.createElement("div",{className:"cart-dropdown"},t.length?r.a.createElement("ul",null,t.map((function(e){var t=e.id,n=e.name,i=e.price,c=e.image,o=e.quantity;return r.a.createElement("li",{key:t,className:"dropdown__item"},r.a.createElement("img",{src:a(17)("./".concat(c)),alt:n}),r.a.createElement("div",{className:"item__info"},r.a.createElement("span",{className:"item__name"},n),r.a.createElement("span",null,o," x $",i)))}))):r.a.createElement("span",{className:"empty-message"},"Empty Cart..."),r.a.createElement(ne,{label:"GO TO CHECKOUT",linkUrl:"/checkout",handleClick:function(){i||n()}}))})),ie=(a(79),a(40)),ce=a.n(ie),oe=Object(I.b)((function(e){return{cartHidden:$(e)}}))((function(e){var t=e.cartHidden;return r.a.createElement("header",{className:"header"},r.a.createElement(o.b,{className:"header__branding",to:"/"},r.a.createElement("img",{src:ce.a,alt:"Leaf logo"}),r.a.createElement("h2",null,"Planteen")),r.a.createElement(Q,null),r.a.createElement(ae,null),t?"":r.a.createElement(re,null))})),le={gift:{title:"Give the Gift of a Unique Experience",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"gift.png",addClass:"end-with-pic",btn:{label:"Shop Gifts",linkUrl:"shop/gifts"}},plants:{title:"Browse through a Wide Collection of Plants",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"fiddle-leaf-fig.jpg",btn:{label:"Shop Plants",linkUrl:"shop/plants"}},accessories:{title:"Find the Right Accessories",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",image:"plant-accessory.png",btn:{label:"Shop Accessories",linkUrl:"shop/accessories"}}},se=(a(80),a(81),function(e){var t=e.title,n=e.info,i=e.image,c=e.addClass,o=e.btn;return r.a.createElement("section",{className:"section ".concat(c)},r.a.createElement("img",{className:"section__img",src:a(17)("./".concat(i)),alt:t}),r.a.createElement("div",{className:"section__info"},r.a.createElement("h2",null,t),r.a.createElement("p",null,n),r.a.createElement(ne,o)))}),ue=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(se,le.plants),r.a.createElement(se,le.gift),r.a.createElement(se,le.accessories))},me=(a(82),Object(g.g)((function(e){var t=e.id,n=e.name,i=e.price,c=e.image,o=e.match;return r.a.createElement("div",{className:"shop-item"},r.a.createElement("img",{className:"item__img",src:a(17)("./".concat(c)),alt:n}),r.a.createElement(ne,{label:"view details",white:!0,linkUrl:"".concat(o.url,"/").concat(t)}),r.a.createElement("div",{className:"item__details"},r.a.createElement("span",{className:"item__name"},n),r.a.createElement("span",{className:"item__price"},"$",i)))}))),de=function(e){return e.shop},pe=function(e,t){return Object(q.a)([de],(function(a){return a[e].items.find((function(e){return e.id===parseInt(t)}))}))},fe=(a(83),Object(I.b)((function(e,t){return{category:(a=t.match.params.category,Object(q.a)([de],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.category,a=t.title,n=t.items;return r.a.createElement("div",{className:"shoppage"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"shoppage__items"},n.map((function(e){return r.a.createElement(me,Object.assign({key:e.id},e))}))))}))),ge=(a(84),function(e){var t=e.id,n=e.care,i=["sunny-outline.svg","aperture-outline.svg","water-outline.svg"],c=["Sun","Light","Water"];return r.a.createElement("div",{className:"care-container"},n.map((function(e,n){return r.a.createElement("div",{key:"".concat(t,"-").concat(c[n]),className:"care__item"},r.a.createElement("img",{src:a(17)("./".concat(i[n])),alt:c[n]}),r.a.createElement("span",null,c[n],": ",e))})))}),Ee=(a(85),a(22)),ve=a.n(Ee),be=Object(I.b)((function(e,t){var a=t.match.params,n=a.category,r=a.id;return{productDetails:pe(n,r)(e)}}),(function(e){return{addCartItem:function(t){return e(R(t))}}}))((function(e){var t,n=e.productDetails,i=e.match,c=e.addCartItem,l=n.id,s=n.name,u=n.price,m=n.image,d=n.description,p=n.care,f=(t=i.params.category).charAt(0).toUpperCase()+t.slice(1);return r.a.createElement("div",{className:"productpage"},r.a.createElement(o.b,{className:"to-category",to:"/shop/".concat(i.params.category)},r.a.createElement("img",{src:ve.a,alt:"Back Icon"}),r.a.createElement("span",null,"Back to ",f)),r.a.createElement("div",{className:"product-container"},r.a.createElement("div",{className:"product__col--1"},r.a.createElement("img",{src:a(17)("./".concat(m)),alt:s})),r.a.createElement("div",{className:"product__col--2"},r.a.createElement("h2",null,s),r.a.createElement("p",null,d),p?r.a.createElement(ge,{id:l,care:p}):"",r.a.createElement(ne,{label:"Add To Cart - $".concat(u),handleClick:function(){return c({id:l,name:s,price:u,image:m})}}))))})),he=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).googleMapRef=Object(n.createRef)(),e.createGoogleMap=function(){return new window.google.maps.Map(e.googleMapRef.current,{zoom:17,center:{lat:43.641862,lng:-79.401674}})},e.createMarker=function(){return new window.google.maps.Marker({position:{lat:43.641862,lng:-79.401674},map:e.googleMap})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUi157ogKkqgAim3Tkt0wU3lWttlrjet0&libraries=places",document.body.appendChild(t),t.addEventListener("load",(function(){e.googleMap=e.createGoogleMap(),e.marker=e.createMarker()}))}},{key:"render",value:function(){return r.a.createElement("div",{ref:this.googleMapRef,style:{width:"350px",height:"450px"}})}}]),a}(n.Component),ye=(a(86),a(38)),Oe=a.n(ye),Ne=a(39),Ce=a.n(Ne),_e=function(){return r.a.createElement("div",{className:"contactpage"},r.a.createElement(he,null),r.a.createElement("div",{className:"contact-details"},r.a.createElement("div",{className:"location"},r.a.createElement("h3",null,"ADDRESS"),r.a.createElement("span",null,"Address Line 1"),r.a.createElement("span",null,"Address Line 2"),r.a.createElement("span",null,"Toronto, A1A 2B2 ON"),r.a.createElement("span",null,"Canada")),r.a.createElement("div",{className:"online"},r.a.createElement("h3",null,"CONTACT"),r.a.createElement("span",null,"Tel: 123 456 7890"),r.a.createElement("span",null,"Email: test@gmail.com")),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.facebook.com/"},r.a.createElement("img",{src:Oe.a,alt:"Facebook Link"})),r.a.createElement("a",{href:"https://www.instagram.com/"},r.a.createElement("img",{src:Ce.a,alt:"Instagram Link"})))))},xe=(a(87),a(88),a(41)),ke=a.n(xe),je=a(37),we=a.n(je),Ie=Object(I.b)(null,(function(e){return{removeCartItem:function(t){return e(function(e){return{type:A.REMOVE_CART_ITEM,id:e}}(t))},clearCartItem:function(t){return e(function(e){return{type:A.CLEAR_CART_ITEM,id:e}}(t))},addCartItem:function(t){return e(R(t))}}}))((function(e){var t=e.item,n=e.removeCartItem,i=e.addCartItem,c=e.clearCartItem,o=t.id,l=t.image,s=t.name,u=t.price,m=t.quantity;return r.a.createElement("li",{className:"checkout-item"},r.a.createElement("div",{className:"item__desc"},r.a.createElement("img",{src:a(17)("./".concat(l)),alt:"Product Item"}),r.a.createElement("span",null,s)),r.a.createElement("div",{className:"item__quantity"},r.a.createElement("img",{className:"clear-icon",src:ke.a,onClick:function(){return c(o)},alt:"Remove"}),r.a.createElement("div",null,r.a.createElement("img",{className:"update-icon",src:ve.a,alt:"Decrease",onClick:function(){return n(o)}}),r.a.createElement("span",null,m),r.a.createElement("img",{className:"update-icon",src:we.a,alt:"Increase",onClick:function(){return i(t)}}))),r.a.createElement("div",null,r.a.createElement("span",{className:"item__price"},"$",u)),r.a.createElement("div",null,r.a.createElement("span",{className:"item__subtotal"},"$",u*m)))})),Se=(a(89),Object(I.b)((function(e){return{cartTotals:V(e)}}))((function(e){var t=Object(z.a)(e.cartTotals,3),a=t[0],n=t[1],i=t[2];return r.a.createElement("div",{className:"order-summary"},r.a.createElement("span",null,"Total (excl. tax): $",a.toFixed(2)),r.a.createElement("span",null,"Tax: $",n.toFixed(2)),r.a.createElement("span",null,"Total (incl. tax): $",i.toFixed(2)))}))),qe=Object(I.b)((function(e){return{cartItems:K(e)}}))((function(e){var t=e.cartItems;return r.a.createElement("div",{className:"checkoutpage"},r.a.createElement("div",{className:"checkout__heading"},r.a.createElement("span",null,"Item"),r.a.createElement("span",null,"Quantity"),r.a.createElement("span",null,"Price"),r.a.createElement("span",null,"Subtotal")),t.length?r.a.createElement("div",{className:"checkout__container"},r.a.createElement("ul",{className:"container__list"},t.map((function(e){return r.a.createElement(Ie,{key:e.id,item:e})}))),r.a.createElement(Se,null),r.a.createElement(ne,{label:"PAY NOW",linkUrl:"/order-now"})):r.a.createElement("span",{className:"empty-checkout-msg"},"There are currently no items in the shopping cart..."))})),Te=(a(90),a(19)),Ae=(a(91),a(92),function(e){var t=e.label,a=e.placeholder,n=e.type,i=e.value,c=e.error,o=e.name,l=e.required,s=e.readOnly,u=e.handleChange;return r.a.createElement("div",{className:"form-input"},t?r.a.createElement("label",{className:"input__label"},t):"",r.a.createElement("div",{className:"input__error"},r.a.createElement("input",{name:o,value:i,type:n,placeholder:a,onChange:u,required:l,readOnly:s}),r.a.createElement("span",{className:"validation-error"},c||"")))}),Ue=function(e){var t=e.signup,a=e.toggleSignup,i=Object(n.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(z.a)(i,2),o=c[0],l=c[1],s=Object(n.useState)({confirmError:""}),u=Object(z.a)(s,2),m=u[0],d=u[1],p=o.displayName,f=o.email,g=o.password,E=o.confirmPassword,v=m.confirmError;Object(n.useEffect)((function(){h(),y()}),[t]);var b=function(e){var t=e.target,a=t.name,n=t.value;l(Object(L.a)(Object(L.a)({},o),{},Object(Te.a)({},a,n)))},h=function(){l({displayName:"",email:"",password:"",confirmPassword:""})},y=function(){d({confirmError:""})};return r.a.createElement("div",{className:"sign-in-up-email"},r.a.createElement("h2",null,t?"Setup an account now":"Sign in now"),r.a.createElement("form",{className:"email-form",onSubmit:function(e){e.preventDefault(),y(),t&&E&&d(Object(L.a)(Object(L.a)({},m),{},{confirmError:g!==E?"Passwords are not matching. Please try again":""})),v||(t?C(f,g,p):_(f,g),h())}},t?r.a.createElement(Ae,{name:"displayName",placeholder:"Display Name",type:"text",value:p,handleChange:b,required:!0}):"",r.a.createElement(Ae,{name:"email",placeholder:"Email",type:"email",value:f,handleChange:b,required:!0}),r.a.createElement(Ae,{name:"password",placeholder:"Password",type:"password",value:g,handleChange:b,required:!0}),t?r.a.createElement(Ae,{name:"confirmPassword",placeholder:"Confirm password",type:"password",value:E,handleChange:b,error:v,required:!0}):"",r.a.createElement(ne,{type:"submit",label:t?"Sign Up":"Sign In"})),r.a.createElement("span",{className:"change-sign-up-in-btn",onClick:a},t?"Back to Sign In":"Go to Sign Up"))},Re=function(){var e=Object(n.useState)(!1),t=Object(z.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{className:"sign-in-up"},r.a.createElement("div",{className:"social-acct-signinup"},r.a.createElement("div",{className:"sign-in-options"}),r.a.createElement(ne,{label:"Sign In With Google",googleSignIn:!0,handleClick:function(){return x("google")}}),r.a.createElement(ne,{label:"Sign In With Facebook",facebookSignIn:!0,handleClick:function(){return x("facebook")}})),r.a.createElement(Ue,{signup:a,toggleSignup:function(){return i(!a)}}))},De=(a(93),Object(I.b)((function(e){return{currentUser:T(e)}}))((function(e){var t=e.currentUser;return r.a.createElement("div",{className:"welcome-page"},r.a.createElement("h2",null,"Welcome ",t.displayName),r.a.createElement(ne,{label:"Logout",handleClick:j}))}))),Le=a(20),Me=(a(94),a(95),function(){var e=Object(n.useState)({fullName:"",addressLine1:"",addressLine2:"",city:"",postalCode:"",province:""}),t=Object(z.a)(e,2),a=t[0],i=t[1],c=a.fullName,o=a.addressLine1,l=a.addressLine2,s=a.city,u=a.postalCode,m=(a.province,function(e){var t=e.target,n=t.name,r=t.value;i(Object(L.a)(Object(L.a)({},a),{},Object(Te.a)({},n,r)))});return r.a.createElement("div",{className:"address-container"},r.a.createElement(Ae,{label:"Full Name",type:"text",value:c,name:"fullName",required:!0,handleChange:m}),r.a.createElement(Ae,{label:"Address Line 1",type:"text",value:o,name:"addressLine1",required:!0,handleChange:m}),r.a.createElement(Ae,{label:"Address Line 2",type:"text",value:l,name:"addressLine2",handleChange:m}),r.a.createElement(Ae,{label:"City",type:"text",value:s,name:"city",required:!0,handleChange:m}),r.a.createElement(Ae,{label:"Postal Code",type:"text",value:u,name:"postalCode",required:!0,handleChange:m}),r.a.createElement("div",{className:"address__province"},r.a.createElement("label",null,"Province"),r.a.createElement("select",{name:"province"},["NL","PE","NS","NB","QC","ON","MB","SK","AB","BC","YT","NT","NU"].map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(Ae,{type:"text",label:"Country",value:"Canada Only",name:"country",readOnly:!0}))}),Pe=Object(I.b)((function(e){return{totalInclTax:V(e)[2],cartItems:K(e)}}))((function(e){e.totalInclTax,e.cartItems,Object(Le.useStripe)(),Object(Le.useElements)();return r.a.createElement("div",{className:"orderpage"},r.a.createElement("section",null,r.a.createElement("div",{className:"shipping-address"},r.a.createElement("h2",null,"Shipping Address"),r.a.createElement(Me,null)),r.a.createElement("div",{className:"payment-info"},r.a.createElement("h2",null,"Payment Information"),r.a.createElement("div",{className:"test-credit-card"},r.a.createElement("span",null,"To test payments, use any of the test credit cards below, any CVC number, and a card expiry date in the future"),r.a.createElement("ul",null,r.a.createElement("li",null,"AMEX: 378282246310005"),r.a.createElement("li",null,"Visa: 4111111111111111"),r.a.createElement("li",null,"Mastercard: 5105105105105100"))),r.a.createElement(Le.CardElement,{options:{style:{base:{fontFamily:"Quicksand, sans-serif","::placeholder":{fontFamily:"Quicksand, sans-serif",fontWeight:"400"}}}}}))),r.a.createElement("section",{className:"summary-section"},r.a.createElement("h2",null,"Order Summary"),r.a.createElement(Se,null),r.a.createElement(ne,{label:"PLACE ORDER",handleClick:function(){}})))})),Ge=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"localCartInit",value:function(){localStorage.getItem("cartItems")||localStorage.setItem("cartItems",JSON.stringify([]))}},{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.setCurrentUser,n=t.setCart;this.localCartInit(),this.authUnsubscribe=b.onAuthStateChanged(function(){var t=Object(u.a)(s.a.mark((function t(r){var i,c,o,l;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=localStorage.getItem("cartItems"),!r){t.next=20;break}return t.prev=2,c=h.doc("users/".concat(r.uid)),e.snapshotUnsubscribe=c.onSnapshot((function(e){if(e.exists){var t=e.data(),n=t.email,r=t.displayName;a({uid:e.id,email:n,displayName:r})}})),t.next=7,h.doc("carts/".concat(r.uid)).get();case 7:o=t.sent,l=o.exists?JSON.parse(o.data().cartItems):[],l=B(JSON.parse(i),l),k(r.uid,l),n(l),localStorage.setItem("cartItems",JSON.stringify([])),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),console.log("Error in retrieving user profile data from firebase:",t.t0);case 18:t.next=22;break;case 20:a(null),n(JSON.parse(i));case 22:case"end":return t.stop()}}),t,null,[[2,15]])})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.authUnsubscribe(),this.snapshotUnsubscribe&&this.snapshotUnsubscribe()}},{key:"render",value:function(){var e=this.props.currentUser;return r.a.createElement("div",{className:"App"},r.a.createElement(oe,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:ue}),r.a.createElement(g.b,{path:"/shop/:category/:id",component:be}),r.a.createElement(g.b,{path:"/shop/:category",component:fe}),r.a.createElement(g.b,{path:"/checkout",component:qe}),r.a.createElement(g.b,{path:"/contact",component:_e}),r.a.createElement(g.b,{path:"/sign-in-up",render:function(){return e?r.a.createElement(g.a,{to:"/welcome"}):r.a.createElement(Re,null)}}),r.a.createElement(g.b,{path:"/welcome",render:function(){return e?r.a.createElement(De,null):r.a.createElement(g.a,{to:"/sign-in-up"})}}),r.a.createElement(g.b,{path:"/order-now",component:Pe})))}}]),a}(n.Component),Fe=Object(I.b)((function(e){return{currentUser:T(e),cartItems:K(e)}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:S.SET_CURRENT_USER,user:e}}(t))},setCart:function(t){return e(function(e){return{type:A.SET_CART,cartItems:e}}(t))}}}))(Ge),He={cartHidden:!0,cartItems:[],userUid:null},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.TOGGLE_CART_HIDDEN:return Object(L.a)(Object(L.a)({},e),{},{cartHidden:!e.cartHidden});case A.SET_CART:return Object(L.a)(Object(L.a)({},e),{},{cartItems:t.cartItems});case A.ADD_CART_ITEM:return Object(L.a)(Object(L.a)({},e),{},{cartItems:F(t.item,e.cartItems,e.userUid)});case A.REMOVE_CART_ITEM:return Object(L.a)(Object(L.a)({},e),{},{cartItems:H(t.id,e.cartItems,e.userUid)});case A.CLEAR_CART_ITEM:return Object(L.a)(Object(L.a)({},e),{},{cartItems:W(t.id,e.cartItems,e.userUid)});case S.SET_CURRENT_USER:return Object(L.a)(Object(L.a)({},e),{},{cartItems:t.user?e.cartItems:[],userUid:t.user?t.user.uid:null});default:return e}},Be={plants:{title:"PLANTS",items:[{id:0,name:"Fiddle Leaf Fig 0",price:30,image:"fiddle-leaf-fig.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",care:["direct","low","Once every week"]},{id:1,name:"Fiddle Leaf Fig 1",price:31,image:"fiddle-leaf-fig.jpg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",care:["direct","low","Once every week"]}]},accessories:{title:"ACCESSORIES",items:[{id:2,name:"Gardening Set 0",price:40,image:"plant-accessory.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:3,name:"Gardening Set 1",price:41,image:"plant-accessory.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:4,name:"Gardening Set 2",price:42,image:"plant-accessory.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{id:5,name:"Gardening Set 3",price:43,image:"plant-accessory.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},gifts:{title:"GIFTS",items:[{id:6,name:"Gift 0",price:40,image:"gift.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;return t.type,e},$e={currentUser:null},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.SET_CURRENT_USER:return Object(L.a)(Object(L.a)({},e),{},{currentUser:t.user});default:return e}},Ve=Object(Y.c)({cart:We,shop:Je,user:Ke});a(96);var ze=Object(Y.e)(Ve,Y.a.apply(void 0,[])),Qe=a(49),Ye=Object(Qe.a)("pk_test_ZOM7AmHB1TNHJWYqvmGvFtNG00LdPH6tS6");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,{store:ze},r.a.createElement(o.a,null,r.a.createElement(Le.Elements,{stripe:Ye},r.a.createElement(Fe,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,1,2]]]);
//# sourceMappingURL=main.0501a61c.chunk.js.map