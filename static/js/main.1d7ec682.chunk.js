(this["webpackJsonpreact-google-map-picker-example"]=this["webpackJsonpreact-google-map-picker-example"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);a(5);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),i=a(1);var o="google-map-view-"+Math.random().toString(36).substr(2,9),s=function(e){var t=e.apiKey,a=e.defaultLocation,n=e.onChange,l=e.style,c=e.className,i=r.a.useRef(!1),s=r.a.useRef(null);function u(){if(n){var e=s.current.getPosition();n(e.lat(),e.lng())}}function p(){var e,t,n=window.google,r=new n.maps.Map(document.getElementById(o),{center:(e=a.lat,t=a.lng,Math.abs(e)<=90&&Math.abs(t)<=180?a:{lat:0,lng:0}),zoom:5});n.maps.event.addListener(r,"click",(function(e){var t=e.latLng;s.current?s.current.setPosition(t):(s.current=new n.maps.Marker({position:t,map:r,draggable:!0}),n.maps.event.addListener(s.current,"dragend",u)),u()}))}r.a.useEffect((function(){i.current||(function(e,t){var a=document.createElement("script");return a.setAttribute("async",""),a.setAttribute("id",t),a.src=e,document.querySelector("head").appendChild(a),new Promise((function(e){a.onload=function(){e()}}))}("https://maps.googleapis.com/maps/api/js?libraries=places&key="+t,"google-maps").then(p),i.current=!0)}),[]);var m=Object.assign({width:"100%",height:"600px"},l||{});return r.a.createElement("div",{id:o,style:m,className:c})},u=function(){var e=Object(n.useState)(10),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(20),o=Object(i.a)(c,2),u=o[0],p=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Latitute:"),r.a.createElement("input",{type:"text",value:a,disabled:!0}),r.a.createElement("label",null,"Longitute:"),r.a.createElement("input",{type:"text",value:u,disabled:!0}),r.a.createElement(s,{defaultLocation:{lat:a,lng:u},style:{height:"700px"},onChange:function(e,t){l(e),p(t)},apiKey:"AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"}))};c.a.render(r.a.createElement(u,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},5:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.1d7ec682.chunk.js.map