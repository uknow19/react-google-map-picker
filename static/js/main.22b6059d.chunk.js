(this["webpackJsonpreact-google-map-picker-example"]=this["webpackJsonpreact-google-map-picker-example"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);n(6);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=n(4),i=n(1);var u="google-map-view-"+Math.random().toString(36).substr(2,9),s=function(e){var t=e.apiKey,n=e.defaultLocation,a=e.zoom,r=void 0===a?7:a,c=e.onChangeLocation,l=e.onChangeZoom,i=e.style,s=e.className,m=o.a.useRef(null),p=o.a.useRef(null);function g(){if(c){var e=p.current.getPosition();c(e.lat(),e.lng())}}function d(){l&&l(m.current.getZoom())}function f(){var e,t=window.google,a=(e=n)&&Math.abs(e.lat)<=90&&Math.abs(e.lng)<=180?n:{lat:0,lng:0};m.current=new t.maps.Map(document.getElementById(u),{center:a,zoom:r}),p.current?p.current.setPosition(a):(p.current=new t.maps.Marker({position:a,map:m.current,draggable:!0}),t.maps.event.addListener(p.current,"dragend",g)),m.current.addListener("click",(function(e){var t=e.latLng;p.current.setPosition(t),g()})),m.current.addListener("zoom_changed",d)}o.a.useEffect((function(){(function(e,t){var n=document.createElement("script");return n.setAttribute("async",""),n.setAttribute("id",t),n.src=e,document.querySelector("head").appendChild(n),new Promise((function(e){n.onload=function(){e()}}))})("https://maps.googleapis.com/maps/api/js?libraries=places&key="+t,"google-maps").then(f)}),[]),o.a.useEffect((function(){p.current&&(m.current.setCenter(n),p.current.setPosition(n))}),[n]),o.a.useEffect((function(){m.current&&m.current.setZoom(r)}),[r]);var b=Object.assign({width:"100%",height:"600px"},i||{});return o.a.createElement("div",{id:u,style:b,className:s})},m={lat:10,lng:106},p=function(){var e=Object(a.useState)(m),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(n),u=Object(i.a)(c,2),p=u[0],g=u[1],d=Object(a.useState)(10),f=Object(i.a)(d,2),b=f[0],h=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){r(Object(l.a)({},m)),h(10)}},"Reset Location"),o.a.createElement("label",null,"Latitute:"),o.a.createElement("input",{type:"text",value:p.lat,disabled:!0}),o.a.createElement("label",null,"Longitute:"),o.a.createElement("input",{type:"text",value:p.lng,disabled:!0}),o.a.createElement("label",null,"Zoom:"),o.a.createElement("input",{type:"text",value:b,disabled:!0}),o.a.createElement(s,{defaultLocation:n,zoom:b,style:{height:"700px"},onChangeLocation:function(e,t){g({lat:e,lng:t})},onChangeZoom:function(e){h(e)},apiKey:"AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"}))};c.a.render(o.a.createElement(p,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)},6:function(e,t,n){}},[[5,1,2]]]);
//# sourceMappingURL=main.22b6059d.chunk.js.map