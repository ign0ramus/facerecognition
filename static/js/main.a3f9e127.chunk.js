(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[0],{10:function(e,n,t){"use strict";var r=t(1),a=t.n(r),c=t(15),s=t(0),u=t.n(s),o=t(8),i="https://sheltered-woodland-30586.herokuapp.com/",l="".concat(i,"/sign-in"),p="".concat(i,"/sign-up"),f="".concat(i,"/upload-image"),m="".concat(i,"/check-user"),d="".concat(i,"/sign-out"),b=t(11),v=function(e,n,t){var r;return a.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,a.a.awrap(fetch(n,{method:e,headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}));case 3:return r=c.sent,c.next=6,a.a.awrap(r.json());case 6:return c.abrupt("return",c.sent);case 9:c.prev=9,c.t0=c.catch(0),console.error(c.t0);case 12:case"end":return c.stop()}}),null,null,[[0,9]])},h=function(e,n){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(v("POST",e,n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},x=u.a.createContext();n.a={Provider:function(e){var n=Object(s.useState)(null),t=Object(c.a)(n,2),r=t[0],i=t[1],v=Object(o.g)();Object(s.useEffect)((function(){v.location.pathname!==b.a&&Boolean(r)&&v.push(b.a)}),[v,r]),Object(s.useEffect)((function(){!function(){var e;a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.a.awrap(h(m,{}));case 2:e=n.sent,i(e.user);case 4:case"end":return n.stop()}}))}()}),[]);var w=function(e){i(e),v.push(b.a)},g={user:r,signIn:function(e){var n;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(h(l,e));case 2:if(!(n=t.sent).error){t.next=5;break}return t.abrupt("return",n.error);case 5:w(n.user);case 6:case"end":return t.stop()}}))},signUp:function(e){var n;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(h(p,e));case 2:if(!(n=t.sent).error){t.next=5;break}return t.abrupt("return",n.error);case 5:w(n.user);case 6:case"end":return t.stop()}}))},uploadImage:function(e){var n;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(h(f,e));case 2:if(!(n=t.sent).error){t.next=5;break}return t.abrupt("return",n);case 5:return i(n.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}))},signOut:function(){return a.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return i(null),e.next=3,a.a.awrap(h(d,{}));case 3:case"end":return e.stop()}}))}};return u.a.createElement(x.Provider,{value:g},e.children)},Consumer:x}},11:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r="/",a="/sign-in"},19:function(e,n,t){"use strict";var r=t(0),a=t.n(r),c=t(23),s=t.n(c);t(57);n.a=function(e){var n=e.color;return a.a.createElement("div",{className:"absoluteCenter"},a.a.createElement(s.a,{type:"Triangle",color:"primary"===n?"#149df2":"#f5f542",height:200,width:200}))}},24:function(e,n,t){e.exports=t(58)},30:function(e,n,t){},31:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),s=t.n(c),u=(t(29),t(30),t(20)),o=t.n(u),i=t(7),l=(t(31),t(10)),p=function(){var e=Object(r.useContext)(l.a.Consumer),n=e.user,t=e.signOut;return n?a.a.createElement("nav",{className:"flex justify-end"},a.a.createElement(i.b,{onClick:t,to:"/sign-in",className:"link dim black f4 f3-ns underline pa3"},"Sign out")):a.a.createElement("nav",{className:"flex justify-center justify-end-ns"},a.a.createElement(i.b,{to:"/sign-in",className:"link dim black f4 f3-ns underline pa3"},"Sign In"),a.a.createElement(i.b,{to:"/sign-up",className:"link dim black f4 f3-ns underline pa3"},"Sign Up"))},f=t(1),m=t.n(f),d=t(8),b=t(19),v=Object(r.lazy)((function(){var e;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(Promise.all([Promise.all([t.e(3),t.e(4)]).then(t.bind(null,84)),new Promise((function(e){return setTimeout(e,500)}))]));case 2:return e=n.sent,n.abrupt("return",e[0]);case 4:case"end":return n.stop()}}))})),h=Object(r.lazy)((function(){var e;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(Promise.all([t.e(5).then(t.bind(null,82)),new Promise((function(e){return setTimeout(e,500)}))]));case 2:return e=n.sent,n.abrupt("return",e[0]);case 4:case"end":return n.stop()}}))})),x=Object(r.lazy)((function(){var e;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(Promise.all([t.e(6).then(t.bind(null,83)),new Promise((function(e){return setTimeout(e,500)}))]));case 2:return e=n.sent,n.abrupt("return",e[0]);case 4:case"end":return n.stop()}}))})),w=function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(b.a,{color:"secondary"})},a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",component:v}),a.a.createElement(d.b,{path:"/sign-in",component:h}),a.a.createElement(d.b,{path:"/sign-up",component:x})))},g={particles:{number:{value:100,density:{enable:!0,value_area:800}}}},y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(o.a,{className:"particles",params:g}),a.a.createElement(i.a,null,a.a.createElement(l.a.Provider,null,a.a.createElement(p,null),a.a.createElement(w,null))))};s.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a3f9e127.chunk.js.map