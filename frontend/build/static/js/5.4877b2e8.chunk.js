(this.webpackJsonpfacerecognition=this.webpackJsonpfacerecognition||[]).push([[5],{59:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(9);var c=function(e){var a=e.name,t=e.label,n=e.type,c=e.onChange,s=function(e,a){if(null==e)return{};var t,n,r=Object(l.a)(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["name","label","type","onChange"]);return r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:a},t),r.a.createElement("input",Object.assign({className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",name:a,type:n,onChange:c},s)))},s=function(e){var a=e.text;return a?r.a.createElement("span",{className:"db dark-red mb3"},a):null};a.a=function(e){var a=e.onChange,t=e.onSubmit,n=e.legend,l=e.error,m="Sign In"===n;return r.a.createElement("article",{className:"br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 absoluteCenter"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure",onSubmit:t},r.a.createElement("fieldset",{className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},n),m?null:r.a.createElement(c,{name:"name",label:"Name",type:"text",onChange:a,required:!0,title:"Alphabets letters only",pattern:"[a-zA-Z]+"}),r.a.createElement(c,{name:"email",label:"Email",type:"email",onChange:a}),r.a.createElement(c,{name:"password",label:"Password",type:"password",onChange:a})),r.a.createElement(s,{text:l}),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit"},n))),m?r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("a",{href:"/sign-up",className:"f6 link dim black db"},"Sign Up")):null))}},82:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(15),c=t(0),s=t.n(c),m=t(10),o=t(59);a.default=function(){var e=Object(c.useState)(""),a=Object(l.a)(e,2),t=a[0],n=a[1],i=Object(c.useState)(""),b=Object(l.a)(i,2),u=b[0],p=b[1],f=Object(c.useState)(null),g=Object(l.a)(f,2),h=g[0],d=g[1],v=Object(c.useContext)(m.a.Consumer).signIn;return s.a.createElement(o.a,{legend:"Sign In",error:h,onChange:function(e){var a=e.target;"email"===a.name?n(a.value):p(a.value)},onSubmit:function(e){var a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,r.a.awrap(v({email:t,password:u}));case 3:(a=n.sent)&&d(a);case 5:case"end":return n.stop()}}))}})}}}]);
//# sourceMappingURL=5.4877b2e8.chunk.js.map