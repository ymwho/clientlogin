(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),c=t(19),i=t.n(c),a=t(12),u=t(4),s=t(44),d=t(36),l=t(16),b=t.n(l),j=t(2),f=t(3);function h(){var n=Object(f.a)(["\n  font-size: 1.2rem;\n  margin: 4rem 0;\n"]);return h=function(){return n},n}function p(){var n=Object(f.a)(["\n  font-size: 2rem;\n  font-weight: bold;\n  margin: 3rem 0;\n"]);return p=function(){return n},n}function m(){var n=Object(f.a)(["\n  width: 1280px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin: auto;\n  line-height: 2rem;\n"]);return m=function(){return n},n}var g=j.c.div(m()),O=j.c.div(p()),x=j.c.div(h()),v=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(g,{children:[Object(r.jsx)(O,{children:"\ud14c\uc2a4\ud2b8 \ud3ec\uc2a4\ud2b8 "}),Object(r.jsx)(x,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})})};function y(){var n=Object(f.a)(["\n  outline: none;\n  border: none;\n  font-weight: bold;\n  background-color: #934c47;\n  padding: 0.3rem 0.7rem;\n  color: white;\n  margin: 0 10rem;\n  cursor: pointer;\n"]);return y=function(){return n},n}function w(){var n=Object(f.a)(["\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin: 0 10rem;\n"]);return w=function(){return n},n}function k(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 2rem 0;\n  align-items: center;\n  box-shadow: 4px 5px 3px rgba(200, 200, 200, 0.5);\n"]);return k=function(){return n},n}var C=j.c.div(k()),z=j.c.div(w()),S=j.c.button(y()),F=function(n){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(C,{children:[Object(r.jsx)(z,{children:"M Y N O T E \ud83d\udcd5"}),Object(r.jsx)(S,{onClick:function(){b.a.get("/api/user/logout").then((function(e){e.data?n.history.push("/Login"):alert("\ub85c\uadf8\uc544\uc6c3 \uc2e4\ud328 \uc785\ub2c8\ub2e4.")}))},children:"\ub85c\uadf8\uc544\uc6c3"})]})})};function L(){var n=Object(d.a)(["\n  margin-top: 7rem;\n"]);return L=function(){return n},n}var I=j.c.div(L()),E=function(n){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F,Object(s.a)({},n)),Object(r.jsx)(I,{children:Object(r.jsx)(v,{})})]})},U=t(9),D=t(13),T="user_login",A="user_signup",H="user_auth";function P(){var n=b.a.get("/api/user/auth").then((function(n){return n.data}));return{type:H,payload:n}}function _(){var n=Object(f.a)(["\n  background-color: #11a8c7;\n  padding: 1rem;\n  text-align: center;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: bold;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);return _=function(){return n},n}function J(){var n=Object(f.a)(["\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: right;\n  margin-top: 2rem;\n"]);return J=function(){return n},n}function M(){var n=Object(f.a)(["\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  width: 18rem;\n  margin: 1rem 0%;\n  padding: 0.4rem 0;\n"]);return M=function(){return n},n}function N(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return N=function(){return n},n}function B(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return B=function(){return n},n}function W(){var n=Object(f.a)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  padding-top: 4rem;\n  padding-bottom: 2rem;\n"]);return W=function(){return n},n}function Y(){var n=Object(f.a)(["\n  background-color: white;\n  width: 35%;\n  height: 60%;\n  margin: 0 auto;\n"]);return Y=function(){return n},n}function q(){var n=Object(f.a)(["\n  background-color: #e9ecef;\n  padding-top: 10rem;\n  width: 100%;\n  height: 100vh;\n"]);return q=function(){return n},n}var G=j.c.div(q()),K=j.c.div(Y()),Q=j.c.h1(W()),R=j.c.div(B()),V=j.c.form(N()),X=j.c.input(M()),Z=Object(j.c)(a.b)(J()),$=j.c.button(_()),nn=function(n){var e=Object(D.b)(),t=Object(o.useState)(""),c=Object(U.a)(t,2),i=c[0],a=c[1],u=Object(o.useState)(""),s=Object(U.a)(u,2),d=s[0],l=s[1],j=function(n){"email"===n.target.id&&a(n.target.value),l(n.target.value)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(G,{children:Object(r.jsxs)(K,{children:[Object(r.jsx)(Q,{children:"\ub85c\uadf8\uc778"}),Object(r.jsx)(R,{children:Object(r.jsxs)(V,{onSubmit:function(t){t.preventDefault(),e(function(n){var e=b.a.post("/api/user/login",n).then((function(n){return n.data}));return{type:T,payload:e}}({email:i,password:d})).then((function(e){e.payload.loginUser?n.history.push("/Home"):(console.log(e.payload),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328 \ud558\uc168\uc2b5\ub2c8\ub2e4."))}))},children:[Object(r.jsx)(X,{type:"email",id:"email",onChange:j,autoComplete:"current-email",placeholder:"Email"}),Object(r.jsx)(X,{type:"password",id:"password",onChange:j,autoComplete:"current-password",placeholder:"Password"}),Object(r.jsx)("br",{}),Object(r.jsx)($,{children:"Login"}),Object(r.jsx)(Z,{to:"/Signup",children:"\ud68c\uc6d0\uac00\uc785"})]})})]})})})};function en(){var n=Object(f.a)(["\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n  font-size: 0.9rem;\n  text-align: right;\n  margin-top: 2rem;\n"]);return en=function(){return n},n}function tn(){var n=Object(f.a)(["\n  background-color: #11a8c7;\n  padding: 1rem;\n  text-align: center;\n  color: white;\n  font-size: 0.9rem;\n  font-weight: bold;\n  outline: none;\n  border: none;\n  cursor: pointer;\n"]);return tn=function(){return n},n}function rn(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return rn=function(){return n},n}function on(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return on=function(){return n},n}function cn(){var n=Object(f.a)(["\n  outline: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  width: 18rem;\n  margin: 0.7rem 0%;\n  padding: 0.4rem 0;\n"]);return cn=function(){return n},n}function an(){var n=Object(f.a)(["\n  text-align: center;\n  font-weight: bold;\n  font-size: 2rem;\n  padding-top: 3rem;\n  padding-bottom: 1rem;\n"]);return an=function(){return n},n}function un(){var n=Object(f.a)(["\n  background-color: white;\n  width: 35%;\n  height: 60%;\n  margin: 0 auto;\n"]);return un=function(){return n},n}function sn(){var n=Object(f.a)(["\n  background-color: #e9ecef;\n  padding-top: 10rem;\n  width: 100%;\n  height: 100vh;\n"]);return sn=function(){return n},n}var dn=j.c.div(sn()),ln=j.c.div(un()),bn=j.c.h1(an()),jn=j.c.input(cn()),fn=j.c.div(on()),hn=j.c.form(rn()),pn=j.c.button(tn()),mn=Object(j.c)(a.b)(en()),gn=function(n){var e=Object(D.b)(),t=Object(o.useState)(""),c=Object(U.a)(t,2),i=c[0],a=c[1],u=Object(o.useState)(""),s=Object(U.a)(u,2),d=s[0],l=s[1],j=Object(o.useState)(""),f=Object(U.a)(j,2),h=f[0],p=f[1],m=Object(o.useState)(""),g=Object(U.a)(m,2),O=g[0],x=g[1],v=function(n){"email"===n.target.id?a(n.target.value):"name"===n.target.id?l(n.target.value):"password"===n.target.id&&p(n.target.value),x(n.target.value)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(dn,{children:Object(r.jsxs)(ln,{children:[Object(r.jsx)(bn,{children:"\ud68c\uc6d0\uac00\uc785"}),Object(r.jsx)(fn,{children:Object(r.jsxs)(hn,{onSubmit:function(t){if(t.preventDefault(),h!==O)return alert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.");e(function(n){var e=b.a.post("/api/user/signup",n).then((function(n){return n.data}));return{type:A,payload:e}}({email:i,password:h,name:d})).then((function(e){e.payload.createUser?n.history.push("/"):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328 \ud558\uc168\uc2b5\ub2c8\ub2e4.")}))},children:[Object(r.jsx)(jn,{type:"email",id:"email",onChange:v,autoComplete:"current-email",placeholder:"Email"}),Object(r.jsx)(jn,{type:"text",id:"name",onChange:v,autoComplete:"current-name",placeholder:"Name"}),Object(r.jsx)(jn,{type:"password",id:"password",onChange:v,autoComplete:"current-password",placeholder:"Password"}),Object(r.jsx)(jn,{type:"password",id:"confirmpassword",onChange:v,autoComplete:"current-password",placeholder:"Confirmpassword"}),Object(r.jsx)("br",{}),Object(r.jsx)(pn,{type:"submit",children:"SignUp"}),Object(r.jsx)(mn,{to:"/Login",children:"\ub4a4\ub85c\uac00\uae30"})]})})]})})})},On=t(10);function xn(){var n=Object(f.a)([""]);return xn=function(){return n},n}function vn(){var n=Object(f.a)([""]);return vn=function(){return n},n}function yn(){var n=Object(f.a)([""]);return yn=function(){return n},n}function wn(){var n=Object(f.a)(["\n  margin: 2rem;\n  width: 1000px;\n  height: 300px;\n  resize: none;\n  border: none;\n  font-size: 0.9rem;\n\n  &::-webkit-input-placeholder {\n    font-size: 0.9rem;\n  }\n"]);return wn=function(){return n},n}function kn(){var n=Object(f.a)(["\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  outline: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 2rem;\n  width: 1000px;\n  height: 30px;\n  font-size: 1.3rem;\n\n  &::-webkit-input-placeholder {\n    font-size: 1.3rem;\n  }\n"]);return kn=function(){return n},n}function Cn(){var n=Object(f.a)(["\n  font-size: 2rem;\n  text-align: center;\n  font-weight: bold;\n  margin: 1.2rem 0;\n"]);return Cn=function(){return n},n}function zn(){var n=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return zn=function(){return n},n}function Sn(){var n=Object(f.a)(["\n  margin-top: 4rem;\n  display: flex;\n  justify-content: center;\n"]);return Sn=function(){return n},n}var Fn=j.c.div(Sn()),Ln=j.c.form(zn()),In=j.c.h1(Cn()),En=j.c.input(kn()),Un=j.c.textarea(wn()),Dn=j.c.div(yn()),Tn=Object(j.c)(a.b)(vn()),An=j.c.button(xn()),Hn=function(n){var e=Object(o.useState)(""),t=Object(U.a)(e,2),c=t[0],i=t[1],a=Object(o.useState)(""),u=Object(U.a)(a,2),s=u[0],d=u[1],l=function(n){"Title"===n.target.id?i(n.target.value):d(n.target.value)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(F,Object(On.a)({},n)),Object(r.jsx)(Fn,{children:Object(r.jsxs)(Ln,{onSubmit:function(n){n.preventDefault();i(""),d("")},children:[Object(r.jsx)(In,{children:"\uac8c\uc2dc\uae00 \uc791\uc131"}),Object(r.jsx)(En,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694",onChange:l,id:"Title",value:c}),Object(r.jsx)(Un,{name:"story",maxLength:"500",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574   \uc8fc\uc138\uc694",onChange:l,id:"Text",value:s}),Object(r.jsx)(An,{type:"submit",children:"\ud3ec\uc2a4\ud2b8\ub4f1\ub85d"})]})}),Object(r.jsx)(Dn,{children:Object(r.jsx)(Tn,{to:"/Home",children:"\ucde8\uc18c"})})]})},Pn=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;function c(c){var i=Object(D.b)();return Object(o.useEffect)((function(){i(P()).then((function(n){n.payload.isAuth?(t&&!n.payload.isAdmin||!1===e)&&c.history.push("/"):e&&(c.history.push("/"),alert("\ub85c\uadf8\uc778 \uc720\uc800\ub9cc \uc811\uadfc \uac00\ub2a5\ud569\ub2c8\ub2e4."))}))}),[]),Object(r.jsx)(n,Object(On.a)({},c))}return c},_n=function(){return Object(r.jsx)(a.a,{children:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/Home",exact:!0,component:Pn(E,!0)}),Object(r.jsx)(u.b,{path:"/Signup",component:Pn(gn,null)}),Object(r.jsx)(u.b,{path:"/WriteForm",component:Pn(Hn,!0)}),Object(r.jsx)(u.b,{path:"/",component:Pn(nn,!1)}),Object(r.jsx)(u.a,{from:"*",to:"/"})]})})})},Jn=t(41);function Mn(){var n=Object(f.a)(["\n\n","\n\n*{\n    margin:0px;\n    \n}\n\n\n"]);return Mn=function(){return n},n}var Nn=Object(j.a)(Mn(),Jn.a),Bn=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(_n,{}),Object(r.jsx)(Nn,{})]})},Wn=t(42),Yn=t.n(Wn),qn=t(43),Gn=t(17),Kn=Object(Gn.c)({user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return Object(On.a)(Object(On.a)({},n),{},{loginUser:e.payload});case A:return Object(On.a)(Object(On.a)({},n),{},{createUser:e.payload});case H:return Object(On.a)(Object(On.a)({},n),{},{userData:e.payload});default:return n}}}),Qn=Object(Gn.a)(Yn.a,qn.a)(Gn.d);i.a.render(Object(r.jsx)(D.a,{store:Qn(Kn),children:Object(r.jsx)(Bn,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.37264342.chunk.js.map