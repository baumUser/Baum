(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(27),c=n.n(a),l=(n(87),n(88),n(11)),r=n(0),i=n(146),s=n(152),o=n(144),j=n(147),p=n(140),d=n(148),b=n(143),u=n(150),f=n(145),O=n(136),x=n(153),h=n(141),m=n(2),g={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,display:"flex",justifyContent:"center"},v=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("false"),v=Object(l.a)(c,2),y=v[0],C=v[1],w=Object(r.useState)(!1),S=Object(l.a)(w,2),I=S[0],F=S[1],k=Object(r.useState)(0),z=Object(l.a)(k,2),E=z[0],$=z[1],A=Object(r.useState)(1),B=Object(l.a)(A,2),D=B[0],J=B[1],L=Object(r.useState)(0),M=Object(l.a)(L,2),P=M[0],T=M[1],U=Object(r.useState)(1),N=Object(l.a)(U,2),W=N[0],q=N[1],G=Object(r.useState)("1"),H=Object(l.a)(G,2),K=H[0],Q=H[1],R=Object(r.useState)("1"),V=Object(l.a)(R,2),X=V[0],Y=V[1],Z=Object(r.useState)(0),_=Object(l.a)(Z,2),ee=_[0],te=_[1],ne=function(){var e=E<=400?{p1:12.45,p2:11.55,r:12.2}:E>400&&E<=500?{p1:13.57,p2:12.45,r:12.2}:E>500&&E<=600?{p1:14.68,p2:13.38,r:12.2}:E>600&&E<=700?{p1:16.04,p2:14.56,r:13.2}:E>700&&E<=800?{p1:17.43,p2:15.75,r:13.2}:E>800&&E<=900?{p1:18.9,p2:16.94,r:14.4}:E>900&&E<=1e3?{p1:20.32,p2:18.27,r:14.4}:E>1e3&&E<=1100?{p1:22.23,p2:19.99,r:15.4}:E>1100&&E<=1200?{p1:23.58,p2:21.19,r:18.8}:E>1200&&E<=1300?{p1:24.97,p2:22.38,r:18.8}:E>1300&&E<=1400?{p1:26.36,p2:23.56,r:19.8}:E>1400&&E<=1500?{p1:27.72,p2:24.76,r:19.8}:E>1500&&E<=1600?{p1:29.63,p2:26.46,r:21}:E>1600&&E<=1700?{p1:31,p2:27.66,r:21}:E>1700&&E<=1800?{p1:32.36,p2:28.83,r:22.1}:E>1800&&E<=1900?{p1:33.74,p2:30.03,r:23.1}:E>1900&&E<=2e3?{p1:35.26,p2:31.37,r:24.3}:E>2e3&&E<=2100?{p1:37.18,p2:33.09,r:24.3}:E>2100&&E<=2200?{p1:38.55,p2:34.28,r:26.5}:E>2200&&E<=2300?{p1:40.01,p2:35.47,r:27.6}:E>2300&&E<=2400?{p1:41.31,p2:36.67,r:30.87}:E>2400&&E<=2500?{p1:43.16,p2:38.18,r:33.1}:E>2500&&E<=2600?{p1:44.8,p2:39.72,r:35.3}:E>2600&&E<=2700?{p1:46.45,p2:41.27,r:37.5}:E>2700&&E<=2800?{p1:48.15,p2:42.77,r:39.7}:E>2800&&E<=2900?{p1:49.92,p2:44.3,r:43.1}:E>2900&&E<=3e3?{p1:51.63,p2:45.84,r:45.2}:E>3e3&&E<=3100?{p1:53.36,p2:46.25,r:47.3}:E>3100&&E<=3200?{p1:55.19,p2:48.88,r:49.6}:E>3200&&E<=3300?{p1:56.81,p2:50.4,r:52.5}:E>3300&&E<=3400?{p1:58.52,p2:51.93,r:55.1}:E>3400?{p1:60.24,p2:53.36,r:57.3}:void 0,t=e.p1,n=e.p2,a=e.r;if(1===W){if("1"===K&&"1"===X)return t;if("1"===K&&"2"===X)return t+a;if("2"===K&&"1"===X)return n;if("2"===K&&"2"===X)return n+a;if("3"===K&&"1"===X)return t+n;if("3"===K&&"2"===X)return t+n+a+a}else if(2===W){var c=t/100*40+t,l=n/100*40+n;if("1"===K&&"1"===X)return c;if("1"===K&&"2"===X)return c+a;if("2"===K&&"1"===X)return l;if("2"===K&&"2"===X)return l+a;if("3"===K&&"1"===X)return c+l;if("3"===K&&"2"===X)return c+l+a+a}else if(3===W){var r=t/100*80+t,i=n/100*80+n;if("1"===K&&"1"===X)return r;if("1"===K&&"2"===X)return r+a;if("2"===K&&"1"===X)return i;if("2"===K&&"2"===X)return i+a;if("3"===K&&"1"===X)return r+i;if("3"===K&&"2"===X)return r+i+a+a}};Object(r.useEffect)((function(){E>=3e3&&Y("2")}),[E]),Object(r.useEffect)((function(){var e=localStorage.getItem("dolar");e?J(+e):localStorage.setItem("dolar","1")}),[]);return Object(r.useEffect)((function(){var e=localStorage.getItem("admin");e?C(e):localStorage.setItem("admin","false")}),[]),Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:["false"===y?Object(m.jsx)(u.a,{onClick:function(){return F(!0)},children:"\u0412\u0445\u043e\u0434 \u0410\u0434\u043c\u0438\u043d"}):Object(m.jsx)(u.a,{onClick:function(){localStorage.setItem("admin","false"),C("false")},children:"\u0432\u044b\u0445\u043e\u0434"}),Object(m.jsx)("div",{style:{background:"rgb(149,144,222)",width:"100%",display:"flex",justifyContent:"center"},children:Object(m.jsx)("p",{style:{fontWeight:800,color:"white",size:"2em"},children:"BAUM.UA Manager"})}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"5%"},children:[Object(m.jsx)(i.a,{id:"outlined-number",label:"\u0428\u0438\u0440\u0438\u043d\u0430 (\u0441\u043c)",type:"number",style:{width:"45%"},value:E,onChange:function(e){$(e.target.value)}}),Object(m.jsx)(i.a,{id:"outlined-number",label:"\u0444\u0443\u0440\u043d\u0438\u0442\u0443\u0440\u0430 ($)",type:"number",style:{width:"45%"},value:P,onChange:function(e){T(e.target.value)}})]}),Object(m.jsxs)(j.a,{style:{width:200},children:[Object(m.jsx)(s.a,{id:"demo-simple-select-label",children:"\u0412\u044b\u0441\u043e\u0442\u0430"}),Object(m.jsxs)(p.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:W,label:"\u0432\u044b\u0441\u043e\u0442\u0430",onChange:function(e){q(e.target.value)},children:[Object(m.jsx)(o.a,{value:1,children:"\u0434\u043e 1700 \u0441\u043c. "}),Object(m.jsx)(o.a,{value:2,children:"1701 - 2500 \u0441\u043c."}),Object(m.jsx)(o.a,{value:3,children:"2501- 3500 \u0441\u043c."})]})]}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"5%"},children:[Object(m.jsxs)(j.a,{component:"fieldset",children:[Object(m.jsx)(O.a,{component:"legend",children:"\u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c"}),Object(m.jsxs)(f.a,{"aria-label":"complate",name:"radio-buttons-group",value:X,onChange:function(e,t){e.persist(),Y(t)},children:[Object(m.jsx)(d.a,{value:"1",control:Object(m.jsx)(b.a,{}),label:"\u0432\u0435\u0440\u0435\u0432\u043e\u0447\u043d\u044b\u0439"}),Object(m.jsx)(d.a,{value:"2",control:Object(m.jsx)(b.a,{}),label:"\u0440\u043e\u0442\u043e\u0440\u043d\u044b\u0439"})]})]}),Object(m.jsxs)(j.a,{component:"fieldset",children:[Object(m.jsx)(O.a,{component:"legend",children:"\u041d\u0430\u0431\u043e\u0440"}),Object(m.jsxs)(f.a,{"aria-label":"complate",name:"radio-buttons-group",value:K,onChange:function(e,t){e.persist(),Q(t)},children:[Object(m.jsx)(d.a,{value:"1",control:Object(m.jsx)(b.a,{}),label:"\u0428\u0442\u043e\u0440\u0430"}),Object(m.jsx)(d.a,{value:"2",control:Object(m.jsx)(b.a,{}),label:"\u0422\u044e\u043b\u044c"}),Object(m.jsx)(d.a,{value:"3",control:Object(m.jsx)(b.a,{}),label:"\u0428\u0442\u043e\u0440\u0430 + \u0422\u044e\u043b\u044c"})]})]})]}),Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"5%"},children:[Object(m.jsx)(i.a,{id:"outlined-number",label:"\u043a\u0443\u0440\u0441 \u0434\u043e\u043b\u0430\u0440\u0430",type:"number",style:{width:"45%"},value:D,onChange:function(e){localStorage.setItem("dolar","".concat(e.target.value)),J(e.target.value)}}),Object(m.jsx)(u.a,{variant:"contained",size:"large",onClick:function(){console.log(P),te((function(){return ne()+ +P}))},children:"\u041f\u0440\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})]}),"true"===y?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{style:{width:"250px",display:"flex",fontSize:"1.2em",justifyContent:"space-between"},children:[Object(m.jsx)("p",{children:"\u041f\u0440\u0430\u0439\u0441: "})," ",Object(m.jsxs)("p",{children:[ee.toFixed(2),"$"]})]}),Object(m.jsxs)("div",{style:{width:"250px",display:"flex",fontSize:"1.2em",justifyContent:"space-between"},children:[Object(m.jsx)("p",{children:"\u041f\u0440\u0430\u0439\u0441 + 55%: "})," ",Object(m.jsxs)("p",{children:[(ee/100*55+ee).toFixed(2),"$"]})]}),Object(m.jsxs)("div",{style:{width:"250px",display:"flex",fontSize:"1.2em",justifyContent:"space-between"},children:[Object(m.jsx)("p",{children:"\u041c\u0430\u0440\u0436\u0430: "})," ",Object(m.jsxs)("p",{children:[(ee/100*55).toFixed(2),"$"]})]})]}):null,Object(m.jsxs)("div",{style:{width:"250px",display:"flex",fontSize:"1.2em",justifyContent:"space-between",alignItems:"center"},children:[Object(m.jsxs)("p",{children:["\u0426\u0435\u043d\u0430 \u0434\u043b\u044f ",Object(m.jsx)("br",{}),"\u043a\u043b\u0438\u0435\u043d\u0442\u0430:"," "]})," ",Object(m.jsxs)("p",{children:[((ee/100*55+ee)*D).toFixed(2),"\u0433\u0440\u043d."]})]}),Object(m.jsx)(h.a,{open:I,onClose:function(){return F(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(m.jsxs)(x.a,{sx:g,children:[Object(m.jsx)("input",{type:"password",onChange:function(e){a(e.target.value)},value:n,placeholder:"password"}),Object(m.jsx)("input",{type:"button",onClick:function(){"admin1996baum"===n&&(C("true"),localStorage.setItem("admin","true"))},value:"\u0432\u0445\u043e\u0434"})]})})]})};var y=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(v,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),l(e),r(e)}))};c.a.render(Object(m.jsx)(y,{}),document.getElementById("root")),C()}},[[95,1,2]]]);
//# sourceMappingURL=main.8f4c05dd.chunk.js.map