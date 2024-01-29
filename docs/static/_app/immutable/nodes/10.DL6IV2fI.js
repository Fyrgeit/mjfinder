import{s as ye,n as _,c as Ee}from"../chunks/scheduler.UsNOiup1.js";import{S as He,i as Pe,o as T,g as s,d as u,e as h,t as b,c as p,a as y,b as m,h as d,s as P,f as U,n as H,m as S,r as Ce,B as ce}from"../chunks/index.SfHOU22x.js";import{h as oe,u as ue}from"../chunks/await_block.3Tv_SGXg.js";import{e as Z}from"../chunks/each.6w4Ej4nR.js";import{j as he,a as g,d as w,u as B,k as Y,l as re,e as pe}from"../chunks/firebase.b69GNaWb.js";import{u as Ue}from"../chunks/store.MIH45tLv.js";import{p as Ae}from"../chunks/stores.veLmwFHN.js";const Le="auto",ut=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"}));function de(r,e,n){const t=r.slice();return t[10]=e[n],t}function be(r,e,n){const t=r.slice();return t[14]=e[n],t}function Ne(r){let e,n=r[17]+"",t;return{c(){e=h("p"),t=b(n)},l(l){e=p(l,"P",{});var a=y(e);t=m(a,n),a.forEach(u)},m(l,a){s(l,e,a),d(e,t)},p:_,d(l){l&&u(e)}}}function Te(r){let e,n=r[9].name+"",t,l,a,c=r[9].desc+"",i,k,C,I=r[9].county+"",N,v,O=r[9].region+"",x,M,z,R,j,A,$,se=r[9].members.length+"",ee,te,K,V,L,le,ie=r[9].applicants.length+"",ne,ae,F,G;function fe(o,f){return o[0]?Se:Ie}let J=fe(r),E=J(r);function ge(o,f){return o[9].members.length>0?Me:De}let q=ge(r)(r);function we(o,f){return o[9].applicants.length>0?Fe:Ve}let D=we(r)(r);return{c(){e=h("h1"),t=b(n),l=P(),a=h("p"),i=b(c),k=P(),C=h("p"),N=b(I),v=b(", "),x=b(O),M=P(),z=h("br"),R=P(),E.c(),j=P(),A=h("h2"),$=b("Medlemmar ("),ee=b(se),te=b(")"),K=P(),q.c(),V=P(),L=h("h2"),le=b("Ansökande ("),ne=b(ie),ae=b(")"),F=P(),D.c(),G=T(),this.h()},l(o){e=p(o,"H1",{});var f=y(e);t=m(f,n),f.forEach(u),l=U(o),a=p(o,"P",{});var _e=y(a);i=m(_e,c),_e.forEach(u),k=U(o),C=p(o,"P",{class:!0});var Q=y(C);N=m(Q,I),v=m(Q,", "),x=m(Q,O),Q.forEach(u),M=U(o),z=p(o,"BR",{}),R=U(o),E.l(o),j=U(o),A=p(o,"H2",{class:!0});var W=y(A);$=m(W,"Medlemmar ("),ee=m(W,se),te=m(W,")"),W.forEach(u),K=U(o),q.l(o),V=U(o),L=p(o,"H2",{class:!0});var X=y(L);le=m(X,"Ansökande ("),ne=m(X,ie),ae=m(X,")"),X.forEach(u),F=U(o),D.l(o),G=T(),this.h()},h(){H(C,"class","toned-down"),H(A,"class","svelte-1hmdrxy"),H(L,"class","svelte-1hmdrxy")},m(o,f){s(o,e,f),d(e,t),s(o,l,f),s(o,a,f),d(a,i),s(o,k,f),s(o,C,f),d(C,N),d(C,v),d(C,x),s(o,M,f),s(o,z,f),s(o,R,f),E.m(o,f),s(o,j,f),s(o,A,f),d(A,$),d(A,ee),d(A,te),s(o,K,f),q.m(o,f),s(o,V,f),s(o,L,f),d(L,le),d(L,ne),d(L,ae),s(o,F,f),D.m(o,f),s(o,G,f)},p(o,f){J===(J=fe(o))&&E?E.p(o,f):(E.d(1),E=J(o),E&&(E.c(),E.m(j.parentNode,j))),q.p(o,f),D.p(o,f)},d(o){o&&(u(e),u(l),u(a),u(k),u(C),u(M),u(z),u(R),u(j),u(A),u(K),u(V),u(L),u(F),u(G)),E.d(o),q.d(o),D.d(o)}}}function Ie(r){let e,n="Logga in eller skapa konto för att gå med i klubbar";return{c(){e=h("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-1jor2c1"&&(e.textContent=n)},m(t,l){s(t,e,l)},p:_,d(t){t&&u(e)}}}function Se(r){let e,n,t;function l(i,k){var C,I,N,v,O;return k&1&&(e=null),k&1&&(n=null),i[9].owner.id===((C=i[0])==null?void 0:C.uid)?qe:(e==null&&(e=!!((N=i[9].members)!=null&&N.map(Ye).includes((I=i[0])==null?void 0:I.uid))),e?Oe:(n==null&&(n=!!((O=i[9].applicants)!=null&&O.map(Ze).includes((v=i[0])==null?void 0:v.uid))),n?Be:je))}let a=l(r,-1),c=a(r);return{c(){c.c(),t=T()},l(i){c.l(i),t=T()},m(i,k){c.m(i,k),s(i,t,k)},p(i,k){a===(a=l(i,k))&&c?c.p(i,k):(c.d(1),c=a(i),c&&(c.c(),c.m(t.parentNode,t)))},d(i){i&&u(t),c.d(i)}}}function je(r){let e,n="Skicka ansökan om medlemsskap",t,l;return{c(){e=h("button"),e.textContent=n},l(a){e=p(a,"BUTTON",{"data-svelte-h":!0}),S(e)!=="svelte-n45nq6"&&(e.textContent=n)},m(a,c){s(a,e,c),t||(l=ce(e,"click",r[5]),t=!0)},p:_,d(a){a&&u(e),t=!1,l()}}}function Be(r){let e,n="Dra tillbaka ansökan",t,l;return{c(){e=h("button"),e.textContent=n,this.h()},l(a){e=p(a,"BUTTON",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-gu89yo"&&(e.textContent=n),this.h()},h(){H(e,"class","hollow")},m(a,c){s(a,e,c),t||(l=ce(e,"click",r[6]),t=!0)},p:_,d(a){a&&u(e),t=!1,l()}}}function Oe(r){let e,n="Lämna klubb",t,l;return{c(){e=h("button"),e.textContent=n,this.h()},l(a){e=p(a,"BUTTON",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-120z1vb"&&(e.textContent=n),this.h()},h(){H(e,"class","hollow")},m(a,c){s(a,e,c),t||(l=ce(e,"click",r[4]),t=!0)},p:_,d(a){a&&u(e),t=!1,l()}}}function qe(r){let e,n;return{c(){e=h("a"),n=b("Hantera klubb"),this.h()},l(t){e=p(t,"A",{href:!0,class:!0});var l=y(e);n=m(l,"Hantera klubb"),l.forEach(u),this.h()},h(){H(e,"href","/club/"+r[2]+"/manage"),H(e,"class","button")},m(t,l){s(t,e,l),d(e,n)},p:_,d(t){t&&u(e)}}}function De(r){let e,n="Inga medlemmar :(";return{c(){e=h("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-1qi5aon"&&(e.textContent=n)},m(t,l){s(t,e,l)},p:_,d(t){t&&u(e)}}}function Me(r){let e,n=Z(r[9].members),t=[];for(let l=0;l<n.length;l+=1)t[l]=me(be(r,n,l));return{c(){e=h("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=p(l,"UL",{});var a=y(e);for(let c=0;c<t.length;c+=1)t[c].l(a);a.forEach(u)},m(l,a){s(l,e,a);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(l,a){if(a&136){n=Z(l[9].members);let c;for(c=0;c<n.length;c+=1){const i=be(l,n,c);t[c]?t[c].p(i,a):(t[c]=me(i),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=n.length}},d(l){l&&u(e),Ce(t,l)}}}function ze(r){return{c:_,l:_,m:_,p:_,d:_}}function Re(r){let e,n=r[13].username+"",t;return{c(){e=h("a"),t=b(n),this.h()},l(l){e=p(l,"A",{href:!0});var a=y(e);t=m(a,n),a.forEach(u),this.h()},h(){H(e,"href","/users/"+r[14].id)},m(l,a){s(l,e,a),d(e,t)},p:_,d(l){l&&u(e)}}}function Ke(r){let e,n;return{c(){e=h("a"),n=b("Hämtar användare..."),this.h()},l(t){e=p(t,"A",{href:!0});var l=y(e);n=m(l,"Hämtar användare..."),l.forEach(u),this.h()},h(){H(e,"href","/users/"+r[14].id)},m(t,l){s(t,e,l),d(e,n)},p:_,d(t){t&&u(e)}}}function me(r){let e,n,t={ctx:r,current:null,token:null,hasCatch:!1,pending:Ke,then:Re,catch:ze,value:13};return oe(r[7](r[14]),t),{c(){e=h("li"),t.block.c(),n=P()},l(l){e=p(l,"LI",{});var a=y(e);t.block.l(a),n=U(a),a.forEach(u)},m(l,a){s(l,e,a),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=n,d(e,n)},p(l,a){r=l,ue(t,r,a)},d(l){l&&u(e),t.block.d(),t.token=null,t=null}}}function Ve(r){let e,n="Inga ansökande :(";return{c(){e=h("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-evng5a"&&(e.textContent=n)},m(t,l){s(t,e,l)},p:_,d(t){t&&u(e)}}}function Fe(r){let e,n=Z(r[9].applicants),t=[];for(let l=0;l<n.length;l+=1)t[l]=ke(de(r,n,l));return{c(){e=h("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=p(l,"UL",{});var a=y(e);for(let c=0;c<t.length;c+=1)t[c].l(a);a.forEach(u)},m(l,a){s(l,e,a);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(e,null)},p(l,a){if(a&136){n=Z(l[9].applicants);let c;for(c=0;c<n.length;c+=1){const i=de(l,n,c);t[c]?t[c].p(i,a):(t[c]=ke(i),t[c].c(),t[c].m(e,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=n.length}},d(l){l&&u(e),Ce(t,l)}}}function Ge(r){return{c:_,l:_,m:_,p:_,d:_}}function Je(r){let e,n=r[13].username+"",t;return{c(){e=h("a"),t=b(n),this.h()},l(l){e=p(l,"A",{href:!0});var a=y(e);t=m(a,n),a.forEach(u),this.h()},h(){H(e,"href","/users/"+r[10].id)},m(l,a){s(l,e,a),d(e,t)},p:_,d(l){l&&u(e)}}}function Qe(r){let e,n;return{c(){e=h("a"),n=b("Hämtar användare..."),this.h()},l(t){e=p(t,"A",{href:!0});var l=y(e);n=m(l,"Hämtar användare..."),l.forEach(u),this.h()},h(){H(e,"href","/users/"+r[10].id)},m(t,l){s(t,e,l),d(e,n)},p:_,d(t){t&&u(e)}}}function ke(r){let e,n,t={ctx:r,current:null,token:null,hasCatch:!1,pending:Qe,then:Je,catch:Ge,value:13};return oe(r[7](r[10]),t),{c(){e=h("li"),t.block.c(),n=P()},l(l){e=p(l,"LI",{});var a=y(e);t.block.l(a),n=U(a),a.forEach(u)},m(l,a){s(l,e,a),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=n,d(e,n)},p(l,a){r=l,ue(t,r,a)},d(l){l&&u(e),t.block.d(),t.token=null,t=null}}}function We(r){let e,n="Laddar klubb...";return{c(){e=h("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),S(e)!=="svelte-uoqd7k"&&(e.textContent=n)},m(t,l){s(t,e,l)},p:_,d(t){t&&u(e)}}}function ve(r){let e,n={ctx:r,current:null,token:null,hasCatch:!0,pending:We,then:Te,catch:Ne,value:9,error:17};return oe(r[3](),n),{c(){e=T(),n.block.c()},l(t){e=T(),n.block.l(t)},m(t,l){s(t,e,l),n.block.m(t,n.anchor=l),n.mount=()=>e.parentNode,n.anchor=e},p(t,l){r=t,ue(n,r,l)},d(t){t&&u(e),n.block.d(t),n.token=null,n=null}}}function Xe(r){let e=r[1],n,t=ve(r);return{c(){t.c(),n=T()},l(l){t.l(l),n=T()},m(l,a){t.m(l,a),s(l,n,a)},p(l,[a]){a&2&&ye(e,e=l[1])?(t.d(1),t=ve(l),t.c(),t.m(n.parentNode,n)):t.p(l,a)},i:_,o:_,d(l){l&&u(n),t.d(l)}}}const Ye=r=>r.id,Ze=r=>r.id;function xe(r,e,n){let t;Ee(r,Ae,v=>n(8,t=v));let l=t.params.uid,a;Ue.subscribe(v=>n(0,a=v));let c=!1;async function i(){const v=(await he(g(w,"clubs",l))).data();if(v)return v;throw new Error("Kunde inte hitta klubb")}async function k(){await B(g(w,"clubs",l),{members:Y(g(w,"users",a.uid))}),await B(g(w,"users",a.uid),{joinedClubs:Y(g(w,"clubs",l))}),re(a.uid),n(1,c=!c)}async function C(){await B(g(w,"clubs",l),{applicants:pe(g(w,"users",a.uid))}),await B(g(w,"users",a.uid),{appliedClubs:pe(g(w,"clubs",l))}),re(a.uid),n(1,c=!c)}async function I(){await B(g(w,"clubs",l),{applicants:Y(g(w,"users",a.uid))}),await B(g(w,"users",a.uid),{appliedClubs:Y(g(w,"clubs",l))}),re(a.uid),n(1,c=!c)}async function N(v){return(await he(v)).data()}return[a,c,l,i,k,C,I,N]}class st extends He{constructor(e){super(),Pe(this,e,xe,Xe,ye,{})}}export{st as component,ut as universal};