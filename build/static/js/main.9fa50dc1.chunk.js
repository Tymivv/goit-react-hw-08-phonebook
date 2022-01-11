(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{5:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return v}));var r=n(18),c=n(7),a=n.n(c),i=n(14),s=n.n(i),o=n(8);s.a.defaults.baseURL="https://connections-api.herokuapp.com";var u,l=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){s.a.defaults.headers.common.Authorization=""},b=Object(o.b)("auth/register",function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/signup",t);case 3:return n=e.sent,r=n.data,l(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),j=Object(o.b)("auth/login",function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/login",t);case 3:return n=e.sent,r=n.data,l(r.token),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),f=Object(o.b)("auth/logout",Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.post("/users/logout");case 3:d(),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))),h=Object(o.b)("auth/refresh",function(){var e=Object(r.a)(a.a.mark((function e(t,n){var r,c,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(c=r.auth.token)){e.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),e.abrupt("return",n.rejectWithValue());case 5:return l(c),e.prev=6,e.next=9,s.a.get("/users/current");case 9:return i=e.sent,o=i.data,e.abrupt("return",o);case 14:e.prev=14,e.t0=e.catch(6);case 16:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}()),p={register:b,logOut:f,logIn:j,fetchCurrentUser:h},O={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},g=n(19),v=Object(o.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(u={},Object(g.a)(u,p.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(g.a)(u,p.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(g.a)(u,p.logOut.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(g.a)(u,p.fetchCurrentUser.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(g.a)(u,p.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(g.a)(u,p.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),u)}).reducer},74:function(e,t,n){},76:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"chengeFilter",(function(){return w})),n.d(r,"default",(function(){return I}));var c=n(0),a=n.n(c),i=n(25),s=n.n(i),o=n(8),u=function(e){return function(e){return function(t){return t.payload&&console.log("%c ".concat(t.type,":"),"color: #6a0",t.payload),e(t)}}},l=n(5),d=n(17),b=n(31),j=n.n(b),f=n(45),h=n(10),p=n(18),O=n(7),g=n.n(O),v=n(14),x=n.n(v),m=Object(o.b)("contacts/getContactsStatus",Object(p.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/contacts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))),y=Object(o.b)("contacts/addContactStatus",function(){var e=Object(p.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("/contacts",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),k=Object(o.b)("contacts/deleteContactStatus",function(){var e=Object(p.a)(g.a.mark((function e(t){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("/contacts/".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),C=Object(o.c)({name:"contacts",initialState:{items:[],filter:""},reducers:{chengeFilter:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{filter:t.payload})}},extraReducers:function(e){e.addCase(m.fulfilled,(function(e,t){var n=t.payload;e.items=n})).addCase(y.fulfilled,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{items:[t.payload].concat(Object(f.a)(e.items))})})).addCase(k.fulfilled,(function(e,t){var n=t.payload,r=e.items.findIndex((function(e){return e.id===n.id}));e.items.splice(r,1)}))}}),w=C.actions.chengeFilter,I=C.reducer,L={key:"filter",storage:j.a,whitelist:["filter"]},F={key:"auth",storage:j.a,whitelist:["token"]},A=Object(o.a)({reducer:{contacts:Object(d.g)(L,I),auth:Object(d.g)(F,l.b)},middleware:function(e){return e({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}}).concat(u)},devTools:!1}),S=Object(d.h)(A),U=n(3),z=n(43),N=n(16),B=n(30),T=(n(74),n(1)),D=function(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(B.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(""),o=Object(B.a)(s,2),u=o[0],l=o[1];return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("form",{className:"heading",onSubmit:function(e){e.preventDefault(),t({name:a,number:u}),i(""),l("")},children:[Object(T.jsxs)("label",{children:["Name",Object(T.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:a,onChange:function(e){var t=e.target.value;i(t)}})]}),Object(T.jsxs)("label",{children:["Phone",Object(T.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:u,onChange:function(e){var t=e.target.value;l(t)}})]}),Object(T.jsx)("button",{className:"button8",type:"submit",children:"Add contact"})]})})},R=(n(76),function(e){var t=e.onDelete,n=Object(U.c)((function(e){return e.contacts.filter})),r=Object(U.c)((function(e){return e.contacts.items}));return Object(T.jsx)("ul",{className:"list",children:function(){var e=n.toLowerCase();return console.log(r),null===r||void 0===r?void 0:r.filter((function(t){var n=t.name;return null===n||void 0===n?void 0:n.toLowerCase().includes(e)}))}().map((function(e){var n=e.id,r=e.name,c=e.number;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("li",{className:"item",children:[r," : ",c]},n),Object(T.jsxs)("button",{className:"button9",type:"button",onClick:t(n),children:["Delete ",r]})]})}))})}),Z=function(e){e.onChange;var t=Object(U.c)((function(e){return e.contacts.filter})),n=Object(U.b)();return Object(T.jsxs)("label",{className:"heading",children:["Find contact by name",Object(T.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(e){return n(r.chengeFilter(e.target.value))}})]})},E=n(4),J={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},W=function(){var e=Object(U.c)(l.c.getIsLoggedIn);return Object(T.jsxs)("nav",{children:[Object(T.jsx)(N.b,{to:"/",exact:!0,style:J.link,activeStyle:J.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(N.b,{to:"/contacts",exact:!0,style:J.link,activeStyle:J.activeLink,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})})]})},q=n(44),M={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function P(){var e=Object(U.b)(),t=Object(U.c)(l.c.getUsername);return Object(T.jsxs)("div",{style:M.container,children:[Object(T.jsx)(q.a,{width:"32",style:M.avatar}),Object(T.jsxs)("span",{style:M.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t]}),Object(T.jsx)("button",{type:"button",onClick:function(){return e(l.a.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var $={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}};function V(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(N.b,{to:"/register",exact:!0,style:$.link,activeStyle:$.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(T.jsx)(N.b,{to:"/login",exact:!0,style:$.link,activeStyle:$.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var G={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function H(){var e=Object(U.c)(l.c.getIsLoggedIn);return Object(T.jsxs)("header",{style:G.header,children:[Object(T.jsx)(W,{}),e?Object(T.jsx)(P,{}):Object(T.jsx)(V,{})]})}var K=n(27),Q=["children","redirectTo"];function X(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(K.a)(e,Q),a=Object(U.c)(l.c.getIsLoggedIn);return Object(T.jsx)(E.b,Object(h.a)(Object(h.a)({},c),{},{children:a?t:Object(T.jsx)(E.a,{to:r})}))}var Y=["children","restricted","redirectTo"];function _(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,i=Object(K.a)(e,Y),s=Object(U.c)(l.c.getIsLoggedIn)&&r;return Object(T.jsx)(E.b,Object(h.a)(Object(h.a)({},i),{},{children:s?Object(T.jsx)(E.a,{to:a}):t}))}var ee=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,85))})),te=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,86))})),ne=function(){var e=Object(U.c)((function(e){return e.contacts.items})),t=Object(U.c)((function(e){return e.contacts.filter})),n=Object(U.b)(),r=Object(U.c)(l.c.getIsFetchingCurrent);Object(c.useEffect)((function(){n(l.a.fetchCurrentUser())}),[n]),Object(c.useEffect)((function(){n(m())}),[n]);return Object(T.jsx)("div",{children:r?Object(T.jsx)("h1",{children:"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c React Skeleton"}):Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(E.d,{children:Object(T.jsxs)(c.Suspense,{fallback:Object(T.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:[Object(T.jsx)(H,{}),Object(T.jsx)(_,{exact:!0,path:"/register",restricted:!0,children:Object(T.jsx)(ee,{})}),Object(T.jsx)(_,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(T.jsx)(te,{})}),Object(T.jsxs)(X,{path:"/contacts",redirectTo:"/login",children:[Object(T.jsx)("h1",{children:"Phonebooc"}),Object(T.jsx)(D,{onSubmit:function(t){var r=t.name,c=t.number;if(e.some((function(e){var t;return(null===(t=e.name)||void 0===t?void 0:t.toLowerCase())===r.toLowerCase()})))alert('name "'.concat(r,'" is already in list'));else{var a={name:r,number:c};console.log(a),n(y(a))}}}),Object(T.jsx)(Z,{onChange:function(e){return n=e.target.value,void t(n);var n}}),Object(T.jsx)(R,{onDelete:function(e){return function(){n(k(e))}}})]})]})})})})};s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(U.a,{store:A,children:Object(T.jsx)(z.a,{loading:null,persistor:S,children:Object(T.jsx)(N.a,{children:Object(T.jsx)(ne,{})})})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.9fa50dc1.chunk.js.map