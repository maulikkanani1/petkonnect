(this.webpackJsonppetkonnect=this.webpackJsonppetkonnect||[]).push([[0],{101:function(e,s,c){},102:function(e,s,c){},103:function(e,s,c){},104:function(e,s,c){},105:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c.n(t),r=c(21),i=c.n(r),n=c(42),l=c(62),j=c(8),d=c(9),o=c(33),m=(c(67),c(11)),b=c(13),x=c.n(b),O=(c(56),"https://petkonnect.in/api");x.a.interceptors.request.use((function(e){var s=localStorage.getItem("token");return e.headers.Authorization="Bearer ".concat(s),e})),x.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response)return 403===e.response.status&&h(),Promise.reject(e)}));var h=function(){localStorage.removeItem("token"),window.location.reload()},u=function(e){return x.a.get("".concat(O,"/vendor/get_vendor_store/?vendorID=").concat(e))},g=function(){return x.a.post("".concat(O,"/user/view_cart"))},p=function(e){return x.a.post("".concat(O,"/user/update_cart"),{productIDs:e})},f=function(e){return x.a.post("".concat(O,"/vendorOrder/get_order_status"),{orderID:e})},N=c(110),v=c(113),_=c(115),y=c(112),w=c(0),k=function(){var e=Object(j.g)();return Object(w.jsxs)(N.a,{children:[Object(w.jsxs)(v.a,{bg:"light",expand:"lg",children:[Object(w.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(_.a,{className:"ml-auto",children:[Object(w.jsx)(_.a.Link,{href:"javascript:void(0)",children:"24 * 7 Support"}),Object(w.jsx)(d.b,{to:"/Profile",children:Object(w.jsx)("img",{src:"./../../img/profile_img_2.png",width:"30px",className:"pt-1"})}),Object(w.jsxs)(y.a,{title:"Hello User",id:"basic-nav-dropdown",children:[Object(w.jsx)(y.a.Item,{href:"javascript:void(0)",onClick:function(){return e.push("/OrderDetails")},children:"Order History"}),Object(w.jsx)(y.a.Item,{href:"javascript:void(0)",onClick:function(){return h()},children:"Logout"})]})]})})]}),Object(w.jsxs)(v.a,{className:"bg-white justify-content",children:[Object(w.jsx)("div",{children:Object(w.jsx)(v.a.Brand,{children:Object(w.jsx)("img",{src:"./../../img/logo new.png"})})}),Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)(_.a.Link,{className:"text-dark",href:"#",children:"Home"}),Object(w.jsx)(_.a.Link,{className:"text-dark",href:"#",children:"Feed"}),Object(w.jsx)(_.a.Link,{className:"text-primary",href:"/dashboard",children:"Store"}),Object(w.jsx)(_.a.Link,{className:"text-dark",href:"#",children:"Services"}),Object(w.jsx)(_.a.Link,{className:"text-dark",href:"#",children:"SOS"})]}),Object(w.jsx)("div",{className:"d-flex",children:Object(w.jsxs)(_.a.Link,{className:"text-primary",href:"/checkout",children:["Cart",Object(w.jsx)("i",{className:"fas fa-shopping-cart text-primary mr-3 cursor-pointer",onClick:function(){e.push("/checkout")}})]})})]})]})},C=function(){Object(j.g)();return Object(w.jsxs)("div",{className:"foot_bg p-2 mt-5 ",children:[Object(w.jsx)("h5",{className:"text-primary text-center mt-5",children:"  "}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("h5",{className:"text-primary text-center mt-5",children:"  "}),Object(w.jsx)("div",{className:"row my-5 mx-0",children:Object(w.jsx)("div",{className:"col-12 brand_container"})})]})},P=c(116),S=function(e){var s=e.store,c=Object(j.g)();return Object(w.jsx)("div",{className:"col-lg-3 col-md-3 col-sm-12",children:Object(w.jsxs)(P.a,{className:"w-100 store_card ",onClick:function(){return c.push("/store/".concat(s.storeName),{vendorId:s.id})},children:[Object(w.jsx)(P.a.Img,{variant:"top",src:s.storeImage}),Object(w.jsxs)(P.a.Body,{children:[Object(w.jsx)("h5",{children:s.storeName}),Object(w.jsx)("div",{className:"mb-2",children:Array.from({length:5},(function(e,c){return c+1>s.storeRating?Object(w.jsx)("i",{className:"far fa-star text-primary"}):Object(w.jsx)("i",{className:"fas fa-star text-primary"})}))}),Object(w.jsx)("small",{className:"text-muted",children:s.storeDescription}),Object(w.jsx)("br",{}),Object(w.jsxs)("small",{className:"text-muted",children:["Delivery Fee ",Object(w.jsx)("i",{className:"fas fa-rupee-sign text-muted ml-2"}),s.shippingCharges]}),Object(w.jsx)("div",{children:Object(w.jsx)("span",{className:"offer_text",children:s.offerText})})]})]},s.id)},s.id)},D=function(e){var s=e.category,c=Object(j.g)();return Object(w.jsxs)("div",{className:"category_card",onClick:function(){return function(e){c.push("/Products?category=".concat(e))}(s.name)},children:[Object(w.jsx)("img",{src:s.imageUrl}),Object(w.jsx)("h6",{className:"category_text",children:s.name})]})},I=function(e){var s=e.brand;return Object(w.jsxs)("div",{className:"brand_card",children:[Object(w.jsx)("img",{src:s.imageUrl}),Object(w.jsx)("h6",{className:"brand_text",children:s.name})]})},A=c(61),B=c.n(A),T=(c(98),function(){return Object(w.jsx)("div",{className:"main_silder_contanier",children:Object(w.jsxs)(B.a,{children:[Object(w.jsx)("div",{"data-src":"./../../img/banner_1.png"}),Object(w.jsx)("div",{"data-src":"./../../img/banner_2.png"})]})})}),Y=function(e){var s=e.product,c=e.id,t=Object(j.g)();return Object(w.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12 mb-3",children:Object(w.jsx)("a",{href:"javascript:void(0)",onClick:function(){return t.push("/ProductDetail",{data:s,id:c})},children:Object(w.jsxs)(P.a,{className:"w-100 product_card",children:[Object(w.jsx)(P.a.Img,{variant:"top",src:s.productImage[0]}),Object(w.jsxs)(P.a.Body,{children:[Object(w.jsx)("h5",{children:s.productName}),Object(w.jsx)("div",{className:"mb-2",children:Array.from({length:5},(function(e,c){return c+1>s.rating?Object(w.jsx)("i",{className:"far fa-star text-secondary"}):Object(w.jsx)("i",{className:"fas fa-star text-secondary"})}))}),Object(w.jsxs)("small",{className:"text-muted",children:["Brand : ",s.productBrand]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("small",{children:Object(w.jsx)("i",{className:"fas fa-rupee-sign text-primary mr-1"})}),Object(w.jsx)("span",{className:"amount",children:s.sellingPrice.toFixed(2)}),Object(w.jsxs)("small",{children:["+",Object(w.jsx)("i",{className:"fas fa-rupee-sign text-muted ml-2"})]}),Object(w.jsx)("small",{className:"text-muted ml-2",children:s.shippingCharges})]})]})]})})},s.id)},F=function(){var e=Object(t.useState)([]),s=Object(m.a)(e,2),c=s[0],a=s[1];return Object(t.useEffect)((function(){x.a.get("".concat(O,"/vendor/get_stores")).then((function(e){var s=e.data;a(s.vendors)}))}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{}),Object(w.jsx)(T,{}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)("h5",{className:"text-primary text-center mt-5",children:"Shop For My Pet"}),Object(w.jsx)("div",{className:"row mt-5 ",children:Object(w.jsx)("div",{className:"col-12 category_container",children:[{name:"Dog",imageUrl:"./../../img/dog_img_4.png"},{name:"Cat",imageUrl:"./../../img/cat_img_1.png"},{name:"Bird",imageUrl:"./../../img/bird_img_1.png"},{name:"Fish",imageUrl:"./../../img/fish_2.png"},{name:"Turtle",imageUrl:"./../../img/turtle_1.png"},{name:"Small pets",imageUrl:"./../../img/small_pets_1.png"}].map((function(e){return Object(w.jsx)(D,{category:e})}))})}),Object(w.jsx)("h5",{className:"text-primary text-center mt-5",children:"Shops Near for You"}),Object(w.jsx)("div",{className:"row mt-5",children:c.map((function(e,s){return Object(w.jsx)(S,{store:e})}))})]}),Object(w.jsxs)("div",{className:"brand_bg p-2 mt-5 ",children:[Object(w.jsx)("h5",{className:"text-primary text-center mt-5",children:"Best Selling Brands"}),Object(w.jsx)("div",{className:"row my-5 mx-0",children:Object(w.jsx)("div",{className:"col-12 brand_container",children:[{name:"Wild Earth",imageUrl:"./../../img/brand_img_1.png"},{name:"Pedigree",imageUrl:"./../../img/brand_img_2.png"},{name:"Royal Canin",imageUrl:"./../../img/brand_img_3.png"},{name:"Big Heart",imageUrl:"./../../img/brand_img_4.png"}].map((function(e){return Object(w.jsx)(I,{brand:e})}))})})]}),Object(w.jsx)(C,{})]})},U=function(){var e=Object(j.g)(),s=Object(t.useState)([]),c=Object(m.a)(s,2),a=c[0],r=c[1];Object(t.useEffect)((function(){g().then((function(e){var s=e.data;r(s.cart)}))}),[]);return Object(w.jsxs)("div",{className:"col-lg-4 product-menu",children:[Object(w.jsxs)(P.a,{children:[Object(w.jsx)(P.a.Header,{children:Object(w.jsx)("h5",{children:"Cart"})}),Object(w.jsx)(P.a.Body,{children:t.useState.length?a.map((function(e){var s=e.productID,c=s.productImage,t=s.productName,a=s.sellingPrice;return Object(w.jsxs)("div",{className:"d-flex w-100 justify-content-between align-items-center mb-3 mini_cart",children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:c[0]})}),Object(w.jsxs)("div",{className:"w-80",children:[Object(w.jsx)("span",{className:"product_name ml-3",children:t}),Object(w.jsxs)("div",{className:"ml-3",children:[Object(w.jsx)("span",{className:"mr-2",children:e.quantity}),Object(w.jsx)("i",{className:"fas fa-times mr-2"}),Object(w.jsx)("i",{className:"fas fa-rupee-sign  f-14"}),a]})]}),Object(w.jsx)("div",{children:Object(w.jsx)("i",{className:"far fa-times-circle text-danger ",onClick:function(){return function(e){var s=[];s.push(e),console.log("id=========",e),p(s).then((function(){g().then((function(e){var s=e.data;r(s.cart)}))})).catch((function(e){console.log(e)}))}(e.productID.id)}})})]})})):Object(w.jsx)(P.a.Text,{children:"No Products in the Cart"})})]}),Object(w.jsxs)(P.a,{className:"mt-4",children:[Object(w.jsx)(P.a.Header,{children:Object(w.jsx)("h5",{children:"Product Category"})}),Object(w.jsx)(P.a.Body,{children:[{name:"Food"},{name:"Treats"},{name:"Toys"},{name:"Leashes, Collars & Harness"},{name:"Clothing & Accessories"},{name:"Bowls & Feeders"},{name:"Beds"},{name:"Grooming & Hygiene"},{name:"Health & Wellness"},{name:"Carriers & Travel"},{name:"Crates, Pens & Gates"},{name:"Trees, Condos & Scratchers"},{name:"Aquarium"}].map((function(s){return Object(w.jsxs)("label",{className:"d-block mb-3",onClick:function(){return function(s){"Food"==s&&(s="Food"),"Cats"==s&&(s="Cat"),"Birds"==s&&(s="Bird"),"Rabbits"==s&&(s="Rabbit"),e.push("/Products?category=".concat(s))}(s.name)},children:["- ",s.name]})}))})]})]})},E=function(e){var s=e.title,c=e.route;return Object(w.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(w.jsx)("div",{className:"container d-flex  justify-content-center",children:Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{className:"display-4 text-center",children:s}),Object(w.jsx)("nav",{"aria-label":"breadcrumb ",children:Object(w.jsx)("ul",{className:"breadcrumb bg-transparent",children:c.map((function(e){return Object(w.jsx)("li",{className:"breadcrumb-item ",children:Object(w.jsx)(d.b,{className:e.isActive?"text-dark":"text-primary",to:e.to?e.to:"javascript:void(0)",children:e.title})})}))})})]})})})},L=function(){var e,s=Object(j.h)(),c=(Object(j.g)(),null===(e=s.state)||void 0===e?void 0:e.vendorId),a=Object(t.useState)([]),r=Object(m.a)(a,2),i=r[0],n=r[1];return Object(t.useEffect)((function(){c?u(c).then((function(e){var s=e.data;n(s.products)})):x.a.get("".concat(O,"/vendor/get_stores")).then((function(e){var s=e.data,c=[];s.vendors.map((function(e){return e.products.map((function(e){return c.push(e)}))})),n(c)}))}),[c]),Object(w.jsxs)("div",{className:"product_listing_page",children:[Object(w.jsx)(k,{}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(P.a,{className:"w-100  ",children:Object(w.jsxs)(P.a.Body,{className:"d-flex",children:[Object(w.jsxs)("div",{className:"w-50",children:[Object(w.jsx)("img",{className:"product_img"}),Object(w.jsx)("h6",{children:"Store img"}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("h6",{children:"storeName"}),Object(w.jsxs)("ul",{className:"list pl-3",children:[Object(w.jsx)("li",{className:"list_item",children:"Phone number"}),Object(w.jsx)("li",{className:"list_item",children:"email"}),Object(w.jsx)("li",{className:"list_item",children:"Address"})]})]}),Object(w.jsxs)("div",{className:"product_info p-3 w-50",children:[Object(w.jsx)("small",{className:"d-block mt-2"}),Object(w.jsxs)("div",{className:"total_contanier mt-4",children:[Object(w.jsx)("label",{className:"mr-5 mb-0"}),Object(w.jsx)("h4",{className:"text-primary mb-0 total"})]})]})]})}),Object(w.jsxs)("div",{className:"row mt-5 mb-5",children:[Object(w.jsx)("div",{className:"col-lg-8",children:Object(w.jsx)("div",{className:"row",children:i.map((function(e){return Object(w.jsx)(Y,{product:e,id:c})}))})}),Object(w.jsx)(U,{})]})]}),Object(w.jsx)(C,{})]})},H=c(60),q=c(114),M=function(){var e=Object(j.g)(),s=Object(j.h)(),c=s.state.data,a=s.state.id,r=c.productImage,i=c.productBrand,n=c.petType,l=c.productDescription,d=c.sellingPrice,o=c.productSubcategory,b=c.productName,h=c.rating,g=c.id,p=c.productCategory,f=Object(t.useState)([]),v=Object(m.a)(f,2),y=v[0],S=v[1],D=Object(t.useState)(1),I=Object(m.a)(D,2),A=I[0],B=I[1];Object(t.useEffect)((function(){a&&u(a).then((function(e){var s=e.data;S(s.products)}))}),[a]);return Object(w.jsxs)("div",{className:"product_details",children:[Object(w.jsx)(k,{}),Object(w.jsx)(N.a,{children:Object(w.jsxs)("div",{className:"row mt-5 mb-5",children:[Object(w.jsxs)("div",{className:"col-lg-8",children:[Object(w.jsx)(P.a,{className:"w-100  ",children:Object(w.jsxs)(P.a.Body,{className:"d-flex",children:[Object(w.jsxs)("div",{className:"w-50",children:[Object(w.jsx)("img",{src:r[0],className:"product_img"}),Object(w.jsx)("h6",{children:"Offers Available"}),Object(w.jsxs)("ul",{className:"list pl-3",children:[Object(w.jsx)("li",{className:"list_item",children:"Special 50% Offer with ABC Bank Credit Card"}),Object(w.jsx)("li",{className:"list_item",children:"Cashback 20% on the payment of Paytm"}),Object(w.jsx)("li",{className:"list_item",children:"Free Coupon Voucher for purchase of 2 items"})]})]}),Object(w.jsxs)("div",{className:"product_info p-3 w-50",children:[Object(w.jsxs)("h6",{className:"text-primary",children:[n," ",o]}),Object(w.jsx)("h5",{className:"text-dark font-weight-bold mt-2",children:b}),Array.from({length:5},(function(e,s){return s+1>h?Object(w.jsx)("i",{className:"far fa-star text-secondary"}):Object(w.jsx)("i",{className:"fas fa-star text-secondary"})})),Object(w.jsxs)("h4",{className:"text-primary amount mt-3",children:[Object(w.jsx)("i",{className:"fas fa-rupee-sign "}),d]}),Object(w.jsxs)("div",{className:"quantity_contanier mt-3",children:[Object(w.jsx)("label",{className:"mr-5 mb-0",children:"Quantity"}),Object(w.jsx)("i",{className:"fas fa-minus-circle cursor-pointer text-secondary mr-4",onClick:function(){return A>1&&B(A-1)}}),Object(w.jsx)("span",{className:"quantity_text mr-4",children:A}),Object(w.jsx)("i",{className:"fas fa-plus-circle cursor-pointer text-secondary ",onClick:function(){return B(A+1)}})]}),Object(w.jsxs)("div",{className:"total_contanier mt-4",children:[Object(w.jsx)("label",{className:"mr-5 mb-0",children:"Total"}),Object(w.jsxs)("h4",{className:"text-primary mb-0 total",children:[Object(w.jsx)("i",{className:"fas fa-rupee-sign "}),d*A]})]}),Object(w.jsxs)("div",{className:"d-flex w-100 mt-5",children:[Object(w.jsx)(H.a,{className:"w-50 mr-3",onClick:function(){var e;(e={productID:g,vendorID:a,quantity:A},x.a.put("".concat(O,"/user/add_to_cart"),e)).then((function(){window.location.reload()}))},variant:"outline-dark",children:"Add to Cart"}),Object(w.jsx)(H.a,{className:"w-50",variant:"secondary",onClick:function(){e.push("/checkout")},children:"Checkout"})]})]})]})}),Object(w.jsx)(q.a.Container,{id:"left-tabs-example",defaultActiveKey:"description",children:Object(w.jsxs)(P.a,{className:"mt-3",children:[Object(w.jsx)(P.a.Header,{className:"bg-transparent border-0",children:Object(w.jsxs)(_.a,{variant:"tab",children:[Object(w.jsx)(_.a.Item,{children:Object(w.jsx)(_.a.Link,{eventKey:"description",children:"Description"})}),Object(w.jsx)(_.a.Item,{children:Object(w.jsx)(_.a.Link,{eventKey:"reviews",children:"Reviews"})})]})}),Object(w.jsx)(P.a.Body,{children:Object(w.jsxs)(q.a.Content,{children:[Object(w.jsxs)(q.a.Pane,{eventKey:"description",children:[Object(w.jsx)("h5",{children:"Product Information"}),Object(w.jsx)("label",{className:"f-12 mb-0",children:"Brand :"}),Object(w.jsx)("label",{className:"f-12 font-weight-bold ml-2 mb-0",children:i}),Object(w.jsx)("br",{}),Object(w.jsx)("label",{className:"f-12",children:"Category :"}),Object(w.jsxs)("label",{className:"f-12 font-weight-bold ml-2  mb-0",children:[n," ",p]}),Object(w.jsx)("br",{}),Object(w.jsxs)("label",{className:"f-12",children:[p," Type :"]}),Object(w.jsx)("label",{className:"f-12 font-weight-bold ml-2  mb-0",children:o}),Object(w.jsx)("p",{children:l})]}),Object(w.jsx)(q.a.Pane,{eventKey:"reviews",children:Object(w.jsx)("h6",{children:"No Reviews yet"})})]})})]})}),Object(w.jsx)("h2",{className:"my-3",children:"You may also like"}),Object(w.jsx)("div",{className:"row mb-4 mt-3",children:y.map((function(e){return Object(w.jsx)(Y,{product:e,id:a})}))})]}),Object(w.jsx)(U,{})]})}),Object(w.jsx)(C,{})]})},R=c(111),K=(c(55),function(){var e=Object(t.useState)([]),s=Object(m.a)(e,2),c=s[0],a=s[1];Object(t.useEffect)((function(){g().then((function(e){var s=e.data;a(s.cart)}))}),[]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{}),Object(w.jsx)(E,{title:"Your Cart",route:[{title:"Home",to:"/"},{title:"Store",to:"/dashboard"},{title:"Your Cart",isActive:!0}]}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(P.a,{children:c&&c.length>0?Object(w.jsx)(P.a.Body,{children:Object(w.jsxs)(R.a,{className:"cart_tbl",children:[Object(w.jsx)("thead",{className:"bg-secondary text-dark ",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Product"}),Object(w.jsx)("th",{children:"Price"}),Object(w.jsx)("th",{children:"Quantity"}),Object(w.jsx)("th",{children:"Subtotal"})]})}),Object(w.jsx)("tbody",{children:c.map((function(e){console.log(e);var s=e.productID,c=s.productImage,t=s.productName,r=s.sellingPrice;s.id;return Object(w.jsxs)("tr",{children:[Object(w.jsxs)("td",{children:[Object(w.jsx)("img",{src:c[0]}),Object(w.jsx)("span",{className:"product_name ml-2",children:t})]}),Object(w.jsxs)("td",{children:[Object(w.jsx)("i",{className:"fas fa-rupee-sign mr-1 f-18"}),r]}),Object(w.jsxs)("td",{children:[Object(w.jsx)("i",{className:"fas fa-plus-circle text-secondary mr-4"}),Object(w.jsx)("span",{className:"mr-4",children:e.quantity}),Object(w.jsx)("i",{className:"fas fa-minus-circle text-secondary "})]}),Object(w.jsxs)("td",{children:[Object(w.jsx)("i",{className:"fas fa-rupee-sign mr-1 f-18"}),r*e.quantity,Object(w.jsx)("i",{className:"far fa-times-circle text-danger ml-3 cursor-pointer",onClick:function(){return function(e){var s=[];s.push(e),console.log("id=========",e),p(s).then((function(){g().then((function(e){var s=e.data;a(s.cart)}))})).catch((function(e){console.log(e)}))}(e.productID.id)}})]})]})}))})]})}):Object(w.jsx)("h1",{className:"text-center",children:"Your Cart is empty."})}),Object(w.jsxs)(P.a,{className:"mt-3 mb-5 cart_summary",children:[Object(w.jsx)(P.a.Header,{children:Object(w.jsx)("h5",{className:"font-weight-bold",children:"Cart Summary"})}),Object(w.jsx)(P.a.Footer,{className:"bg-transparent",children:Object(w.jsxs)("div",{className:"row mb-3",children:[Object(w.jsx)("div",{className:"offset-6 col-md-6"}),Object(w.jsx)("div",{className:"d-flex w-100 mt-3 justify-content-center",children:Object(w.jsx)(H.a,{className:"cart_btn",onClick:function(){x.a.post("".concat(O,"/order/confirm_order")).then((function(){window.location.reload()}))},variant:"secondary",children:"Checkout"})})]})})]})]}),Object(w.jsx)(C,{})]})}),J=function(e){var s=e.icon,c=e.title,t=e.description,a=e.date,r=e.time,i=e.isActive,n=void 0!==i&&i,l=e.trackActiveDot,j=void 0===l||l;return Object(w.jsxs)("div",{className:"track_card",children:[Object(w.jsx)("img",{className:"track_card_icon mr-5",src:s}),Object(w.jsx)("i",{className:"".concat(n?"fas":"far"," ")+"fa-circle text-primary mr-5 "+"".concat(j?"track_dot":"")}),Object(w.jsx)(P.a,{className:"w-100",children:Object(w.jsxs)(P.a.Body,{className:"d-flex pb-2 justify-content-between",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h5",{children:c}),Object(w.jsx)("label",{children:t})]}),Object(w.jsxs)("div",{className:"text-right",children:[Object(w.jsx)("h6",{className:"text-gray",children:a}),Object(w.jsx)("h6",{className:"text-gray",children:r})]})]})})]})},W=(c(99),c(22)),Q=c.n(W),V=function(){var e=Object(j.g)(),s=Object(j.i)(),c=Object(t.useState)(""),a=Object(m.a)(c,2),r=a[0],i=a[1];return Object(t.useEffect)((function(){s.id&&f(s.id).then((function(e){e.data.order&&(console.log("status",e.data),i(e.data.order))})).catch((function(e){console.log("error",e)}))}),[]),Object(w.jsxs)("div",{className:"track_order_page",children:[Object(w.jsx)(k,{}),Object(w.jsx)(E,{title:"Track Order",route:[{title:"Home",to:"/"},{title:"Order History",to:"/OrderDetails"},{title:"Track Order",isActive:!0}]}),Object(w.jsxs)(N.a,{children:[Object(w.jsx)(P.a,{className:"mb-5",children:Object(w.jsxs)(P.a.Body,{children:[Object(w.jsxs)("div",{className:"d-flex mb-5 justify-content-between",children:[Object(w.jsx)("h5",{children:"Track Order"}),Object(w.jsxs)("h5",{className:"text-primary ",children:["Order ID : ",r&&r.id]})]}),Object(w.jsxs)("div",{className:"p-5",children:[r&&"pending"==r.orderStatus?Object(w.jsx)(J,{icon:"./../../icons/order_placed.svg",title:"Order Placed",description:"We had received your order",date:Q()(r.updatedAt).format("DD-MM-YYYY"),time:Q()(r.updatedAt).format("hh:mm"),isActive:!0}):Object(w.jsx)(J,{icon:"./../../icons/order_placed.svg",title:"Order Placed"}),r&&"confirm"==r.orderStatus?Object(w.jsx)(J,{icon:"./../../icons/order_processed.svg",title:"Order Processed",description:"Order has been processed",date:Q()(r.updatedAt).format("DD-MM-YYYY"),time:Q()(r.updatedAt).format("hh:mm"),isActive:!0}):Object(w.jsx)(J,{icon:"./../../icons/order_processed.svg",title:"Order Processed"}),r&&"completed"==r.orderStatus?Object(w.jsx)(J,{icon:"./../../icons/out_for_delivery.svg",title:"Out for Delivery",description:"Your Order is dispatched",date:Q()(r.updatedAt).format("DD-MM-YYYY"),time:Q()(r.updatedAt).format("hh:mm"),isActive:!0}):Object(w.jsx)(J,{icon:"./../../icons/out_for_delivery.svg",title:"Out for Delivery"}),r&&"delivered"==r.orderStatus?Object(w.jsx)(J,{title:"Delivered Successfully",icon:"./../../icons/delivered_successfully.svg",description:"Your Order is delivered to the given address",date:Q()(r.updatedAt).format("DD-MM-YYYY"),time:Q()(r.updatedAt).format("hh:mm"),isActive:!0,trackActiveDot:!1}):Object(w.jsx)(J,{title:"Delivered Successfully",icon:"./../../icons/delivered_successfully.svg",trackActiveDot:!1})]}),Object(w.jsxs)("div",{className:"d-flex my-5 justify-content-between align-items-center",children:[Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)("img",{src:"./../../icons/delivered_address.svg"}),Object(w.jsx)("h5",{className:"ml-3 mb-0",children:"Delivery Address"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h6",{className:"font-weight-bold",children:"Home"}),Object(w.jsx)("label",{className:"delivered_address",children:"No.2, KK Road, T Nagar, Chennai 600026"})]})]})]})}),Object(w.jsxs)(P.a,{className:"mt-3 mb-5 cart_summary",children:[Object(w.jsx)(P.a.Body,{children:Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"offset-6 col-md-6",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-md-6 text-right",children:Object(w.jsx)("h5",{className:"font-weight-bold mb-3",children:"Total"})}),Object(w.jsx)("div",{className:"col-md-4 text-right",children:Object(w.jsxs)("h5",{className:"amount",children:[Object(w.jsx)("i",{className:"fas fa-rupee-sign mr-1 f-16"}),"1170.00"]})})]})})})}),Object(w.jsxs)(P.a.Footer,{className:"bg-transparent",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-6",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-md-6 ",children:Object(w.jsx)("h5",{className:"font-weight-bold mb-3",children:"Payment Type"})}),Object(w.jsx)("div",{className:"col-md-4",children:Object(w.jsx)("label",{className:"text-gray mb-0",children:"Cash On Delivery"})})]})})}),Object(w.jsx)("div",{className:"d-flex w-100 mt-5 mb-2 justify-content-center",children:Object(w.jsx)(H.a,{className:"track_order_btn",size:"lg",onClick:function(){e.push("/TrackOrder")},variant:"secondary",children:"Track Order"})})]})]})]}),Object(w.jsx)(C,{})]})},z=function(){var e=Object(t.useState)([]),s=Object(m.a)(e,2),c=s[0],a=s[1],r=Object(j.g)(),i=Object(j.i)(),n=Object(t.useState)(""),l=Object(m.a)(n,2);l[0],l[1];Object(t.useEffect)((function(){x.a.post("".concat(O,"/order/order_history")).then((function(e){var s=e.data;a(s)})),f(i.id).then((function(e){e.data.order&&console.log("status",e.data)}))}),[]);return Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{}),Object(w.jsx)(E,{title:"Order Details",route:[{title:"Home",to:"/"},{title:"Order History",isActive:!0}]}),Object(w.jsx)(N.a,{children:Object(w.jsx)(P.a,{children:Object(w.jsx)(P.a.Body,{children:Object(w.jsxs)(R.a,{className:"cart_tbl",children:[Object(w.jsx)("thead",{className:"bg-secondary text-dark",children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Product"}),Object(w.jsx)("th",{children:"Price"}),Object(w.jsx)("th",{children:"Quantity"}),Object(w.jsx)("th",{children:"Subtotal"})]})}),Object(w.jsx)("tbody",{children:c?c.map((function(e){return e.productIDs.map((function(s,c){return Object(w.jsxs)("tr",{onClick:function(){return s=e.id,void r.push("/TrackOrder/".concat(s));var s},children:[Object(w.jsxs)("td",{children:[Object(w.jsx)("img",{src:s.productImage[0]}),Object(w.jsx)("span",{className:"product_name ml-2",children:s.productName})]}),Object(w.jsxs)("td",{children:[Object(w.jsx)("i",{className:"fas fa-rupee-sign mr-1 f-18"}),s.sellingPrice]}),Object(w.jsx)("td",{children:Object(w.jsx)("span",{className:"mr-4",children:s.subUnit})}),Object(w.jsxs)("td",{children:[Object(w.jsx)("i",{className:"fas fa-rupee-sign mr-1 f-18"}),s.sellingPrice*s.subUnit]})]})}))})):Object(w.jsx)("h1",{children:"No Order details"})})]})})})}),Object(w.jsx)(C,{})]})},G=(c(101),[{path:"/dashboard",component:F},{path:"/store/:storeName?",component:L},{path:"/profile",component:function(){Object(j.h)(),Object(j.g)();return Object(t.useEffect)((function(){}),[]),Object(w.jsxs)("div",{className:"product_listing_page",children:[Object(w.jsx)(k,{}),Object(w.jsx)(E,{title:"Profile",route:[{title:"Home",to:"/"},{title:"Profile",isActive:!0}]}),Object(w.jsx)(N.a,{children:Object(w.jsx)("div",{className:"row mt-5 mb-5",children:Object(w.jsx)("div",{className:"col-lg-10 m-auto",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-md-8 profile_border m-2",children:[Object(w.jsx)("div",{children:"Profile"}),Object(w.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(w.jsx)("div",{className:"profile_name",children:"Jasmin_Jassie"}),Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:"./../../icons/add_post.svg",className:"profile_side_images"})}),Object(w.jsxs)("div",{className:"p-1",children:[Object(w.jsx)("img",{src:"./../../icons/message.svg",className:"profile_side_images"})," "]})]})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"position-relative",children:[Object(w.jsx)("img",{src:"./../../img/profile_img_2.png",className:"profile_image"}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:"./../../icons/edit.svg",className:"profile_edit"})})]}),Object(w.jsx)("div",{className:"name",children:"Jasmine Jassie"}),Object(w.jsx)("div",{children:Object(w.jsx)("a",{href:"www.petowner.com",className:"link",children:"www.petowner.com"})}),Object(w.jsx)("div",{children:"deepti@gmail.com"})]}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"count",children:"20"}),Object(w.jsx)("div",{className:"count_title",children:"Post"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"count",children:"783"}),Object(w.jsx)("div",{className:"count_title",children:"Follower"})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"count",children:"129"}),Object(w.jsx)("div",{className:"count_title",children:"Following"})]})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{className:"follow_button w-100 mt-2 ",children:"Edit Profile"})})]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{claaname:"story",children:"My pets"}),Object(w.jsxs)("div",{className:"d-flex",children:[Object(w.jsx)("div",{className:"p-2",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"story_img"})}),Object(w.jsx)("div",{className:"p-2",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"story_img"})}),Object(w.jsx)("div",{className:"p-2",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"story_img"})}),Object(w.jsx)("div",{className:"p-2",children:Object(w.jsx)("img",{src:"./../../img/add_post.png",className:"story_img"})})]})]}),Object(w.jsxs)("div",{className:"mt-2 d-flex",children:[Object(w.jsx)("div",{className:"tab_text",children:Object(w.jsx)("u",{children:"Posts"})}),Object(w.jsx)("div",{className:"tab_text",children:"Tags"}),Object(w.jsx)("div",{className:"tab_text",children:"Saved"})]}),Object(w.jsx)("div",{className:"w-100",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-md-4",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"post_img"})}),Object(w.jsx)("div",{className:"col-md-4",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"post_img"})}),Object(w.jsx)("div",{className:"col-md-4",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"post_img"})}),Object(w.jsx)("div",{className:"col-md-4",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"post_img"})}),Object(w.jsx)("div",{className:"col-md-4",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"post_img"})}),Object(w.jsx)("div",{className:"col-md-4",children:Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"post_img"})})]})})]}),Object(w.jsxs)("div",{className:"col-md-3 profile_border m-2",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"left-side-title",children:"Jasmine_Jassie"}),Object(w.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:"./../../icons/insights.svg",className:"profile_side_images"})}),Object(w.jsx)("div",{className:"p-1",children:"Insights"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:"./../../icons/my_orders.svg",className:"profile_side_images"})}),Object(w.jsx)("div",{className:"p-1",children:"My Orders"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:"./../../icons/my_store.svg",className:"profile_side_images"})}),Object(w.jsx)("div",{className:"p-1",children:"My Store"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:"./../../icons/account.svg",className:"profile_side_images"})}),Object(w.jsx)("div",{className:"p-1",children:"Account"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:"./../../icons/settings.svg",className:"profile_side_images"})}),Object(w.jsx)("div",{className:"p-1",children:"Settings"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[Object(w.jsx)("div",{className:"p-1",children:Object(w.jsx)("img",{src:"./../../icons/help.svg",className:"profile_side_images"})}),Object(w.jsx)("div",{className:"p-1",children:"Help"})]})]}),Object(w.jsx)("div",{className:"d-flex justify-content-center mt-3",children:Object(w.jsx)("div",{className:"suggested_profiles",children:"Suggested Profiles"})}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"suggested_profiles_img"}),Object(w.jsx)("span",{className:"profile_texts",children:"User1"}),"  "]}),Object(w.jsx)("div",{className:"follow_text",children:"Follow"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"suggested_profiles_img"}),Object(w.jsx)("span",{className:"profile_texts",children:"User1"}),"  "]}),Object(w.jsx)("div",{className:"follow_text",children:"Follow"})]}),Object(w.jsxs)("div",{className:"d-flex justify-content-between mt-3",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{src:"./../../img/store_img_2.png",className:"suggested_profiles_img"}),Object(w.jsx)("span",{className:"profile_texts",children:"User1"}),"  "]}),Object(w.jsx)("div",{className:"follow_text",children:"Follow"})]}),Object(w.jsx)("div",{className:"mt-5",children:Object(w.jsx)("div",{className:"m-auto",children:Object(w.jsx)("div",{className:"Explore",children:"Explore"})})})]})]})]})})})}),Object(w.jsx)(C,{})]})}},{path:"/ProductDetail",component:M},{path:"/Checkout",component:K},{path:"/OrderDetails",component:z},{path:"/TrackOrder/:id?",component:V},{path:"/Products",component:function(){var e=Object(j.h)(),s=new URLSearchParams(e.search),c=s.get("vendorId"),a=s.get("category"),r=Object(t.useState)([]),i=Object(m.a)(r,2),n=i[0],l=i[1];return Object(t.useEffect)((function(){c&&a?function(e,s){return x.a.get("".concat(O,"/vendor/get_vendor_store?pet_category=").concat(e,"&vendorID=").concat(s))}(a,c).then((function(e){var s=e.data;l(s.products)})):""!==a.trim()&&function(e){return x.a.get("".concat(O,"/inventory/get_all_products?pet_category=").concat(e))}(a).then((function(e){var s=e.data;l(s.products)})).catch((function(e){console.log(e)}))}),[c,a]),Object(w.jsxs)("div",{className:"product_listing_page",children:[Object(w.jsx)(k,{}),Object(w.jsx)(T,{}),Object(w.jsx)(N.a,{children:Object(w.jsxs)("div",{className:"row mt-5 mb-5",children:[Object(w.jsx)("div",{className:"col-lg-8",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-lg-12"}),n?n.map((function(e){return Object(w.jsx)(Y,{product:e,id:c})})):Object(w.jsx)("h1",{className:"text-center m-5",children:" Products not found. "})]})}),Object(w.jsx)(U,{})]})})]})}}]),X=(c(102),function(){var e=Object(j.g)();return Object(w.jsxs)("div",{className:"row login_contanier mx-0",children:[Object(w.jsxs)("div",{className:"col-lg-6 col-md-6 col-sm-12 pl-0 position-relative",children:[Object(w.jsx)("img",{src:"./../../img/bg_web-02.png",className:"login_main_img",alt:""}),Object(w.jsxs)("div",{className:"login_sec_div",children:[Object(w.jsx)("img",{src:"./../../img/Layer_2.png",className:"login_sec_img",alt:""}),Object(w.jsxs)("div",{className:"ml-5",children:[Object(w.jsx)("h1",{className:"heading",children:"FOR"}),Object(w.jsx)("h1",{className:"heading",children:"LOVE"}),Object(w.jsx)("h1",{className:"heading",children:"BEYOND"}),Object(w.jsx)("h1",{className:"heading",children:"WORDS"})]})]})]}),Object(w.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-12 ",children:Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsxs)("div",{className:"col-lg-6",children:[Object(w.jsx)("div",{className:"d-flex justify-content-center",children:Object(w.jsx)("img",{className:"mb-4",src:"./../../img/logo new.png",alt:""})}),Object(w.jsx)(q.a.Container,{id:"left-tabs-example",defaultActiveKey:"login",children:Object(w.jsxs)(P.a,{className:"mt-4",children:[Object(w.jsx)(P.a.Header,{className:"bg-transparent border-0",children:Object(w.jsxs)(_.a,{variant:"tab",children:[Object(w.jsx)(_.a.Item,{children:Object(w.jsx)(_.a.Link,{eventKey:"login",children:"Login"})}),Object(w.jsx)(_.a.Item,{children:Object(w.jsx)(_.a.Link,{eventKey:"register",children:"Register"})})]})}),Object(w.jsx)(P.a.Body,{children:Object(w.jsxs)(q.a.Content,{children:[Object(w.jsx)(q.a.Pane,{eventKey:"login",children:Object(w.jsxs)("form",{onSubmit:function(s){var c;s.preventDefault(),(c={email:s.target.email.value,password:s.target.password.value},x.a.post("".concat(O,"/user/login"),c)).then((function(s){var c=s.data;c.user?(localStorage.setItem("token",c.token),o.b.success("Login success"),e.push("/dashboard")):o.b.error(c)}))},className:"form_signin",children:[Object(w.jsx)("p",{className:"text-left mb-4",children:"Use your credentials to login into account."}),Object(w.jsx)("label",{className:"sr-only",children:"Email address"}),Object(w.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"Email address",required:!0}),Object(w.jsx)("label",{className:"sr-only",children:"Password"}),Object(w.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",required:!0}),Object(w.jsx)("div",{className:"checkbox text-left mb-3",children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",{type:"checkbox",name:"remember",defaultValue:"remember-me"})," Remember me"]})}),Object(w.jsx)("div",{className:"text-right mb-3",children:Object(w.jsx)("a",{className:"forgot_link",href:"#",children:"Forgot Password ?"})}),Object(w.jsx)("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",children:"Login"})]})}),Object(w.jsx)(q.a.Pane,{eventKey:"register",children:Object(w.jsxs)("form",{className:"form_signin",children:[Object(w.jsx)("p",{className:"text-left mb-4",children:"Enter your information to setup a new account."}),Object(w.jsx)("label",{className:"sr-only",children:"Username"}),Object(w.jsx)("input",{type:"text",name:"username",className:"form-control",placeholder:"Username",required:!0}),Object(w.jsx)("label",{className:"sr-only",children:"Email address"}),Object(w.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"Email address",required:!0}),Object(w.jsx)("label",{className:"sr-only",children:"Password"}),Object(w.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",required:!0}),Object(w.jsx)("button",{className:"btn btn-lg btn-primary btn-block",type:"submit",children:"Register"}),Object(w.jsx)("div",{className:"text-right mb-3",children:Object(w.jsx)("a",{className:"forgot_link",href:"#",children:"or login with"})})]})})]})})]})})]})})})]})}),Z=function(e){var s=e.component,c=Object(l.a)(e,["component"]);return Object(w.jsx)(j.b,Object(n.a)(Object(n.a)({},c),{},{render:function(e){return localStorage.getItem("token")?Object(w.jsx)(s,Object(n.a)({},e)):Object(w.jsx)(j.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var $=function(){return Object(w.jsxs)(d.a,{children:[Object(w.jsxs)(j.d,{children:[Object(w.jsx)(j.b,{path:"/login",component:X}),G.map((function(e){return Object(w.jsx)(Z,{path:e.path,component:e.component})})),Object(w.jsx)(j.a,{from:"/",to:"/dashboard"})]}),Object(w.jsx)(o.a,{hideProgressBar:!0,autoClose:3e3})]})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,117)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,r=s.getLCP,i=s.getTTFB;c(e),t(e),a(e),r(e),i(e)}))};c(103),c(104);i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)($,{})}),document.getElementById("root")),ee()},55:function(e,s,c){},99:function(e,s,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.eeac12fe.chunk.js.map