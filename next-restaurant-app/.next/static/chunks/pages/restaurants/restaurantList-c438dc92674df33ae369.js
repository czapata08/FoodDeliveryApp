_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"2JCN":function(n,t,e){"use strict";e.r(t);var a,r=e("h4VS"),s=e("q1tI"),u=e.n(s),i=e("UYTu"),c=e("+TN3"),l=e("YFqc"),o=e.n(l),d=(e("QUNw"),e("JDnx")),f=e("+0BD"),p=u.a.createElement;t.default=function(n){var t=Object(s.useState)(0),e=(t[0],t[1]),l=Object(s.useContext)(d.a).cart,m=Object(s.useState)(l),N=(m[0],m[1],Object(i.a)(a||(a=Object(r.a)(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n      }\n    }\n  "])))),h=Object(c.a)(N),w=h.loading,_=h.error,b=h.data;if(w)return p("p",null,"Loading...");if(_)return p("p",null,"ERROR");if(!b)return p("p",null,"Not found");console.log("Query Data: ".concat(b.restaurants));var g=b.restaurants.filter((function(t){return t.name.toLowerCase().includes(n.search)}))||[];if(g[0]&&g[0].id,g.length>0){var j=g.map((function(n){return p(f.j,{xs:"12",md:"4",xl:"4",className:"p-0"},p(f.c,{key:n.id,className:"h-100"},p(f.e,{top:!0,className:"fluid",style:{height:180,minWidth:80},src:"http://localhost:1337"+n.image.url}),p(f.d,null,p(f.g,null,n.description)),p("div",{className:"card-footer"},p(o.a,{as:"/restaurants/"+n.id,href:"restaurants/[...id]"},p(f.b,{onClick:function(){return e(n.id)}},n.name)))))}));return p(u.a.Fragment,null,p(f.z,{className:"d-flex align-items-stretch"},j))}return p("h1",null," No Restaurants Found")}},p5bU:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/restaurants/restaurantList",function(){return e("2JCN")}])}},[["p5bU",0,1,3,2,4,7,9]]]);