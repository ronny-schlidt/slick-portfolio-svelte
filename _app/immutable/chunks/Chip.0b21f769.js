import{s as p,f as C,l as P,g as q,h as w,m as S,d as b,j as o,P as d,a0 as u,i as j,I as E,J as _,p as I,n as m,u as J,o as M,U as f,q as U}from"./scheduler.bae0eb40.js";import{S as A,i as B}from"./index.cce7df92.js";function D(s){let e,i,n,h,c;return{c(){e=C("p"),i=P(s[0]),this.h()},l(l){e=q(l,"P",{class:!0,"data-size":!0});var t=w(e);i=S(t,s[0]),t.forEach(b),this.h()},h(){o(e,"class",n=d(`chip ${s[4]}`)+" svelte-7z0o8b"),o(e,"data-size",s[3]),u(e,"chip-active",s[1]),u(e,"chip-hoverable",s[2])},m(l,t){j(l,e,t),E(e,i),s[10](e),h||(c=[_(e,"click",s[6]),_(e,"keydown",s[7]),_(e,"keypress",s[8]),_(e,"keyup",s[9])],h=!0)},p(l,[t]){t&1&&I(i,l[0]),t&16&&n!==(n=d(`chip ${l[4]}`)+" svelte-7z0o8b")&&o(e,"class",n),t&8&&o(e,"data-size",l[3]),t&18&&u(e,"chip-active",l[1]),t&20&&u(e,"chip-hoverable",l[2])},i:m,o:m,d(l){l&&b(e),s[10](null),h=!1,J(c)}}}function F(s,e,i){let n,{label:h=""}=e,{active:c=!1}=e,{hoverable:l=!0}=e,{size:t="auto"}=e,{classes:r=""}=e;M(()=>{n.style.setProperty("--size",t)});function v(a){f.call(this,s,a)}function z(a){f.call(this,s,a)}function k(a){f.call(this,s,a)}function y(a){f.call(this,s,a)}function g(a){U[a?"unshift":"push"](()=>{n=a,i(5,n)})}return s.$$set=a=>{"label"in a&&i(0,h=a.label),"active"in a&&i(1,c=a.active),"hoverable"in a&&i(2,l=a.hoverable),"size"in a&&i(3,t=a.size),"classes"in a&&i(4,r=a.classes)},[h,c,l,t,r,n,v,z,k,y,g]}class K extends A{constructor(e){super(),B(this,e,F,D,p,{label:0,active:1,hoverable:2,size:3,classes:4})}}export{K as C};