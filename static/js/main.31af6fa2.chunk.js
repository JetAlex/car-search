(this.webpackJsonpauto=this.webpackJsonpauto||[]).push([[0],{24:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r,n=a(0),c=a.n(n),s=a(18),l=a.n(s),i=(a(46),a(9)),o=a(12),u=(a(24),a(57)),j=a(54),b=a(38),f=a(55),d=a(56),m=["title","titleId"];function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function x(e,t){var a=e.title,c=e.titleId,s=O(e,m);return n.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-star",viewBox:"0 0 16 16",ref:t,"aria-labelledby":c},s),a?n.createElement("title",{id:c},a):null,r||(r=n.createElement("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})))}var v,p=n.forwardRef(x),g=(a.p,["title","titleId"]);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function y(e,t){var a=e.title,r=e.titleId,c=N(e,g);return n.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),a?n.createElement("title",{id:r},a):null,v||(v=n.createElement("path",{d:"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"})))}var k=n.forwardRef(y),P=(a.p,a(1));var w=function(e){var t=e.addCar,a=e.color,r=e.stockNumber,n=e.modelName,c=e.mileage,s=e.fuelType,l=e.pictureUrl,i=e.removeCar,o=e.showCarDetails,u=e.isFavorite;return Object(P.jsxs)(j.a,{className:"border mb-3 mx-0",children:[Object(P.jsx)(b.a,{sm:2,className:"py-3 px-3",children:Object(P.jsx)("div",{className:"s-image-4x5",children:Object(P.jsx)(f.a,{fluid:!0,src:l,className:"s-car-pic"})})}),Object(P.jsxs)(b.a,{sm:10,className:"py-3 px-3",children:[Object(P.jsxs)("h5",{className:"d-flex",children:[n,u?Object(P.jsx)(k,{className:"s-star-icon s-star-icon--filled px-1",onClick:i}):Object(P.jsx)(p,{className:"s-star-icon px-1",onClick:t})]}),Object(P.jsxs)("p",{children:["Stock #",r," - ",c.number," ",c.unit," - ",s," - ",a]}),Object(P.jsx)(d.a,{variant:"link",className:"p-0",onClick:o,children:"View details"})]})]})},S=a(59);var I=function(e){var t=e.colors,a=e.manufacturers,r=e.setPagesStatus,c=Object(n.useState)(z),s=Object(o.a)(c,2),l=s[0],u=s[1],j=Object(n.useState)(z),b=Object(o.a)(j,2),f=b[0],m=b[1];return Object(P.jsxs)(S.a,{className:"border p-4 mb-4",onSubmit:function(e){e.preventDefault(),r((function(e){return Object(i.a)(Object(i.a)({},e),{},{currentPage:1,filterColor:l!==z?l:"",filterManufacturer:f!==z?f:""})}))},children:[Object(P.jsxs)(S.a.Group,{controlId:"formGridColor",className:"mb-3",children:[Object(P.jsx)(S.a.Label,{className:"mb-2",children:"Color"}),Object(P.jsxs)(S.a.Control,{as:"select",defaultValue:"All car colors",value:l,onChange:function(e){var t=e.target.value;return u(t)},children:[Object(P.jsx)("option",{value:z,children:R.colors}),t.map((function(e){return Object(P.jsx)("option",{value:e,children:e},e)}))]})]}),Object(P.jsxs)(S.a.Group,{controlId:"formGridManufacturer",className:"mb-3",children:[Object(P.jsx)(S.a.Label,{className:"mb-2",children:"Manufacturer"}),Object(P.jsxs)(S.a.Control,{as:"select",defaultValue:"All manufacturers",value:f,onChange:function(e){var t=e.target.value;return m(t)},children:[Object(P.jsx)("option",{value:z,children:R.manufacturers}),a.map((function(e){var t=e.name;return Object(P.jsx)("option",{value:t,children:t},t)}))]})]}),Object(P.jsx)(S.a.Group,{className:"clearfix",children:Object(P.jsx)(d.a,{variant:"primary",type:"submit",className:"float-end px-5",children:"Filter"})})]})},L="https://auto1-mock-server.herokuapp.com/api",E=a(41),M=a(40),F=a(27),B=function(){var e=localStorage.getItem("favoriteCars")||"{}";return JSON.parse(e)};var A=function(e){var t=e.currentPage,a=e.setPagesStatus,r=e.totalPageCount,n=function(e){return a((function(t){return Object(i.a)(Object(i.a)({},t),{},{currentPage:e})}))},c=function(e){return"btn-link px-4".concat(e?" btn-link-disabled":"")};return Object(P.jsxs)("div",{className:"text-center",children:[Object(P.jsx)(d.a,{variant:"link",className:c(1===t),onClick:function(){return n(1)},children:"First"}),Object(P.jsx)(d.a,{variant:"link",className:c(1===t),onClick:function(){return n(t-1)},children:"Previous"}),Object(P.jsxs)(d.a,{variant:"link",className:c(!0),children:["Page ",t," of ",r]}),Object(P.jsx)(d.a,{variant:"link",className:c(t+1>r),onClick:function(){return n(t+1)},children:"Next"}),Object(P.jsx)(d.a,{variant:"link",className:c(t+1>r),onClick:function(){return n(r)},children:"Last"})]})},D=a(58);var T=function(e){var t=e.car,a=e.setCarDetails,r=e.addCar;return Object(P.jsx)(D.a,{show:!!t,onHide:a,size:"xl",children:t&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(D.a.Header,{closeButton:!0,children:Object(P.jsx)(D.a.Title,{children:t.modelName})}),Object(P.jsx)(D.a.Body,{children:Object(P.jsx)(u.a,{children:Object(P.jsxs)(j.a,{children:[Object(P.jsx)(b.a,{md:12,className:"float-center",children:Object(P.jsx)(f.a,{fluid:!0,src:t.pictureUrl,className:"d-block mx-auto mb-4"})}),Object(P.jsxs)(b.a,{md:8,children:[Object(P.jsx)("p",{className:"h2 mb-4",children:t.modelName}),Object(P.jsxs)("p",{className:"h4 mb-4",children:["Stock #",t.stockNumber," - ",t.mileage.number," ",t.mileage.unit," - ",t.fuelType," - ",t.color]}),Object(P.jsx)("p",{children:"This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions."})]}),Object(P.jsx)(b.a,{md:4,children:Object(P.jsxs)("div",{className:"border p-4",children:[Object(P.jsx)("p",{children:"If you like this car, click the button and save it in your collection of favourite items."}),Object(P.jsx)("div",{className:"clearfix",children:Object(P.jsx)(d.a,{variant:"primary",className:"float-end px-5",onClick:r,children:"Save"})})]})})]})})})]})})},G=a(61);var J=function(){return Object(P.jsx)(G.a,{variant:"light",className:"border-top mt-4",children:Object(P.jsx)(u.a,{className:"px-4 py-2",children:Object(P.jsx)("div",{className:"m-auto",children:"Copyright"})})})},z="all",R={colors:"All car colors",manufacturers:"All manufacturers"};var U=function(){var e=c.a.useState([]),t=Object(o.a)(e,2),a=t[0],r=t[1],n=c.a.useState({currentPage:1,totalCarsCount:0,totalPageCount:1,filterColor:"",filterManufacturer:""}),s=Object(o.a)(n,2),l=s[0],f=l.currentPage,d=l.filterColor,m=l.filterManufacturer,h=l.totalCarsCount,O=l.totalPageCount,x=s[1],v=c.a.useState([]),p=Object(o.a)(v,2),g=p[0],C=p[1],N=c.a.useState([]),y=Object(o.a)(N,2),k=y[0],S=y[1],D=c.a.useState(void 0),G=Object(o.a)(D,2),z=G[0],R=G[1],U=c.a.useState(B()),V=Object(o.a)(U,2),H=V[0],q=V[1],K=function(e){return q(function(e){return localStorage.setItem("favoriteCars",JSON.stringify(Object(i.a)(Object(i.a)({},B()),{},Object(F.a)({},e.stockNumber,e)))),B()}(e))},Q=function(e){return q(function(e){var t=B(),a=e.stockNumber,r=(t[a],Object(E.a)(t,[a].map(M.a)));return localStorage.setItem("favoriteCars",JSON.stringify(r)),B()}(e))};return c.a.useEffect((function(){var e;e=C,fetch("".concat(L,"/colors")).then((function(e){return e.json()})).then((function(t){var a=t.colors;return e(a)})),function(e){fetch("".concat(L,"/manufacturers")).then((function(e){return e.json()})).then((function(t){var a=t.manufacturers;return e(a)}))}(S)}),[]),c.a.useEffect((function(){(function(e){var t=e.currentPage,a=e.filterColor,r=e.filterManufacturer;return fetch("".concat(L,"/cars?").concat(new URLSearchParams([["page","".concat(t)],["color","".concat(a)],["manufacturer","".concat(r)]]))).then((function(e){return e.json()})).then((function(e){var t=e.cars,a=e.totalPageCount;return{cars:t,totalCarsCount:e.totalCarsCount,totalPageCount:a}}))})({currentPage:f,filterColor:d,filterManufacturer:m}).then((function(e){var t=e.cars,a=e.totalPageCount,n=e.totalCarsCount;r(t),x((function(e){return Object(i.a)(Object(i.a)({},e),{},{totalCarsCount:n,totalPageCount:a})}))}))}),[f,d,m]),Object(P.jsxs)("div",{className:"m-search-cars",children:[Object(P.jsx)(u.a,{className:"px-4",children:Object(P.jsxs)(j.a,{children:[Object(P.jsx)(b.a,{md:3,children:Object(P.jsx)(I,{setPagesStatus:x,colors:g,manufacturers:k})}),Object(P.jsxs)(b.a,{md:9,children:[Object(P.jsx)("h5",{children:"Available Cars"}),Object(P.jsxs)("p",{children:["Showing ",a.length," of ",h," results"]}),a.map((function(e){return Object(P.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{showCarDetails:function(){return R(e)},isFavorite:!!H[e.stockNumber],addCar:function(){return K(e)},removeCar:function(){return Q(e)}}),e.stockNumber)})),Object(P.jsx)(A,{setPagesStatus:x,currentPage:f,totalPageCount:O})]})]})}),Object(P.jsx)(T,{car:z,setCarDetails:function(){return R(void 0)},addCar:function(){return K(z)}}),Object(P.jsx)(J,{})]})},V=(a(51),a(60)),H=a.p+"static/media/logo.6ce24c58.svg";var q=function(){return Object(P.jsx)(G.a,{variant:"light",className:"border-bottom mb-4",children:Object(P.jsxs)(u.a,{className:"px-4 py-2",children:[Object(P.jsxs)(G.a.Brand,{href:"#home",children:[Object(P.jsx)("img",{alt:"",src:H,width:"30",height:"30",className:"d-inline-block align-top"})," ","React Bootstrap"]}),Object(P.jsxs)(V.a,{className:"ml-auto",children:[Object(P.jsx)(V.a.Link,{href:"#home",children:"Purchase"}),Object(P.jsx)(V.a.Link,{href:"#features",children:"My Orders"}),Object(P.jsx)(V.a.Link,{href:"#pricing",children:"Sell"})]})]})})};var K=function(){return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(q,{}),Object(P.jsx)(U,{})]})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};l.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(K,{})}),document.getElementById("root")),Q()}},[[52,1,2]]]);
//# sourceMappingURL=main.31af6fa2.chunk.js.map