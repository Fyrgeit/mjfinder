import{s as Oe,n as m,r as Ue}from"../chunks/scheduler.UsNOiup1.js";import{S as He,i as Ke,e as b,s as P,o as K,c as d,m as N,f as L,g as p,l as g,q as M,k as C,d as u,p as X,t as B,a as w,b as D,n as H,h as v,z as Ne,B as _e,j as Y,r as be,u as de,v as he,w as me,x as ke}from"../chunks/index.SfHOU22x.js";import{h as V,u as pe}from"../chunks/await_block.3Tv_SGXg.js";import{e as W}from"../chunks/each.6w4Ej4nR.js";import{a as qe,d as ze,u as Ie,f as Re,j as Fe}from"../chunks/firebase.b69GNaWb.js";import{g as Me}from"../chunks/entry.ek2OuyI0.js";import{u as Xe}from"../chunks/store.MIH45tLv.js";import{C as ve}from"../chunks/ClubPreview.8sN-Fkaa.js";function Be(c,e,o){const n=c.slice();return n[8]=e[o],n}function De(c,e,o){const n=c.slice();return n[8]=e[o],n}function Se(c,e,o){const n=c.slice();return n[8]=e[o],n}function Ge(c){let e,o="Du måste vara inloggad för att se din profil";return{c(){e=b("p"),e.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),N(e)!=="svelte-19ll8vg"&&(e.textContent=o)},m(n,t){p(n,e,t)},p:m,i:m,o:m,d(n){n&&u(e)}}}function Je(c){let e,o,n,t,a=c[0].data.username+"",l,i,r,f,k,h=c[0].email+"",E,q,z,I,Ce="Beskrivning",ce,S,ie,R,ue,Z,T,ge="Klubbar du har ansökt till",ee,te,G,O,Ee="Klubbar du är medlem i",le,ne,J,U,we="Klubbar du äger",re,oe,Q,A,xe="Logga ut",F,se,$e,x={ctx:c,current:null,token:null,hasCatch:!0,pending:Ze,then:Ve,catch:Qe,value:7,error:11,blocks:[,,,]};V(te=c[5](c[0].data.appliedClubs),x);let $={ctx:c,current:null,token:null,hasCatch:!0,pending:rt,then:tt,catch:et,value:7,error:11,blocks:[,,,]};V(ne=c[5](c[0].data.joinedClubs),$);let y={ctx:c,current:null,token:null,hasCatch:!0,pending:ut,then:at,catch:ot,value:7,error:11,blocks:[,,,]};return V(oe=c[5](c[0].data.ownedClubs),y),{c(){e=b("form"),o=b("p"),n=B(`Användarnamn
            `),t=b("span"),l=B(a),i=P(),r=b("p"),f=B(`E-mailadress
            `),k=b("span"),E=B(h),q=P(),z=b("p"),I=b("label"),I.textContent=Ce,ce=P(),S=b("textarea"),ie=P(),R=b("button"),ue=B("Spara ändringar"),Z=P(),T=b("h2"),T.textContent=ge,ee=P(),x.block.c(),G=P(),O=b("h2"),O.textContent=Ee,le=P(),$.block.c(),J=P(),U=b("h2"),U.textContent=we,re=P(),y.block.c(),Q=P(),A=b("button"),A.textContent=xe,this.h()},l(_){e=d(_,"FORM",{});var s=w(e);o=d(s,"P",{});var j=w(o);n=D(j,`Användarnamn
            `),t=d(j,"SPAN",{});var ye=w(t);l=D(ye,a),ye.forEach(u),j.forEach(u),i=L(s),r=d(s,"P",{});var fe=w(r);f=D(fe,`E-mailadress
            `),k=d(fe,"SPAN",{});var Pe=w(k);E=D(Pe,h),Pe.forEach(u),fe.forEach(u),q=L(s),z=d(s,"P",{});var ae=w(z);I=d(ae,"LABEL",{for:!0,"data-svelte-h":!0}),N(I)!=="svelte-1t48295"&&(I.textContent=Ce),ce=L(ae),S=d(ae,"TEXTAREA",{id:!0,cols:!0,rows:!0}),w(S).forEach(u),ae.forEach(u),ie=L(s),R=d(s,"BUTTON",{});var Le=w(R);ue=D(Le,"Spara ändringar"),Le.forEach(u),s.forEach(u),Z=L(_),T=d(_,"H2",{class:!0,"data-svelte-h":!0}),N(T)!=="svelte-2w7ga1"&&(T.textContent=ge),ee=L(_),x.block.l(_),G=L(_),O=d(_,"H2",{class:!0,"data-svelte-h":!0}),N(O)!=="svelte-cfmt0b"&&(O.textContent=Ee),le=L(_),$.block.l(_),J=L(_),U=d(_,"H2",{class:!0,"data-svelte-h":!0}),N(U)!=="svelte-cygkz0"&&(U.textContent=we),re=L(_),y.block.l(_),Q=L(_),A=d(_,"BUTTON",{class:!0,"data-svelte-h":!0}),N(A)!=="svelte-hhsspi"&&(A.textContent=xe),this.h()},h(){H(I,"for","input-description"),H(S,"id","input-description"),H(S,"cols","40"),H(S,"rows","3"),R.disabled=c[2],H(T,"class","svelte-1hmdrxy"),H(O,"class","svelte-1hmdrxy"),H(U,"class","svelte-1hmdrxy"),H(A,"class","hollow")},m(_,s){p(_,e,s),v(e,o),v(o,n),v(o,t),v(t,l),v(e,i),v(e,r),v(r,f),v(r,k),v(k,E),v(e,q),v(e,z),v(z,I),v(z,ce),v(z,S),Ne(S,c[1]),v(e,ie),v(e,R),v(R,ue),p(_,Z,s),p(_,T,s),p(_,ee,s),x.block.m(_,x.anchor=s),x.mount=()=>G.parentNode,x.anchor=G,p(_,G,s),p(_,O,s),p(_,le,s),$.block.m(_,$.anchor=s),$.mount=()=>J.parentNode,$.anchor=J,p(_,J,s),p(_,U,s),p(_,re,s),y.block.m(_,y.anchor=s),y.mount=()=>Q.parentNode,y.anchor=Q,p(_,Q,s),p(_,A,s),F=!0,se||($e=[_e(S,"input",c[6]),_e(e,"submit",c[3]),_e(A,"click",c[4])],se=!0)},p(_,s){c=_,(!F||s&1)&&a!==(a=c[0].data.username+"")&&Y(l,a),(!F||s&1)&&h!==(h=c[0].email+"")&&Y(E,h),s&2&&Ne(S,c[1]),(!F||s&4)&&(R.disabled=c[2]),x.ctx=c,s&1&&te!==(te=c[5](c[0].data.appliedClubs))&&V(te,x)||pe(x,c,s),$.ctx=c,s&1&&ne!==(ne=c[5](c[0].data.joinedClubs))&&V(ne,$)||pe($,c,s),y.ctx=c,s&1&&oe!==(oe=c[5](c[0].data.ownedClubs))&&V(oe,y)||pe(y,c,s)},i(_){F||(C(x.block),C($.block),C(y.block),F=!0)},o(_){for(let s=0;s<3;s+=1){const j=x.blocks[s];g(j)}for(let s=0;s<3;s+=1){const j=$.blocks[s];g(j)}for(let s=0;s<3;s+=1){const j=y.blocks[s];g(j)}F=!1},d(_){_&&(u(e),u(Z),u(T),u(ee),u(G),u(O),u(le),u(J),u(U),u(re),u(Q),u(A)),x.block.d(_),x.token=null,x=null,$.block.d(_),$.token=null,$=null,y.block.d(_),y.token=null,y=null,se=!1,Ue($e)}}}function Qe(c){let e,o,n=c[11]+"",t;return{c(){e=b("p"),o=B("Error: "),t=B(n)},l(a){e=d(a,"P",{});var l=w(e);o=D(l,"Error: "),t=D(l,n),l.forEach(u)},m(a,l){p(a,e,l),v(e,o),v(e,t)},p(a,l){l&1&&n!==(n=a[11]+"")&&Y(t,n)},i:m,o:m,d(a){a&&u(e)}}}function Ve(c){let e,o,n,t;const a=[Ye,We],l=[];function i(r,f){return r[7].length>0?0:1}return e=i(c),o=l[e]=a[e](c),{c(){o.c(),n=K()},l(r){o.l(r),n=K()},m(r,f){l[e].m(r,f),p(r,n,f),t=!0},p(r,f){let k=e;e=i(r),e===k?l[e].p(r,f):(X(),g(l[k],1,1,()=>{l[k]=null}),M(),o=l[e],o?o.p(r,f):(o=l[e]=a[e](r),o.c()),C(o,1),o.m(n.parentNode,n))},i(r){t||(C(o),t=!0)},o(r){g(o),t=!1},d(r){r&&u(n),l[e].d(r)}}}function We(c){let e,o="Du har inte ansökt någon klubb";return{c(){e=b("p"),e.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),N(e)!=="svelte-q47x0o"&&(e.textContent=o)},m(n,t){p(n,e,t)},p:m,i:m,o:m,d(n){n&&u(e)}}}function Ye(c){let e,o,n=W(c[7]),t=[];for(let l=0;l<n.length;l+=1)t[l]=Ae(Se(c,n,l));const a=l=>g(t[l],1,1,()=>{t[l]=null});return{c(){e=b("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=d(l,"UL",{});var i=w(e);for(let r=0;r<t.length;r+=1)t[r].l(i);i.forEach(u)},m(l,i){p(l,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null);o=!0},p(l,i){if(i&33){n=W(l[7]);let r;for(r=0;r<n.length;r+=1){const f=Se(l,n,r);t[r]?(t[r].p(f,i),C(t[r],1)):(t[r]=Ae(f),t[r].c(),C(t[r],1),t[r].m(e,null))}for(X(),r=n.length;r<t.length;r+=1)a(r);M()}},i(l){if(!o){for(let i=0;i<n.length;i+=1)C(t[i]);o=!0}},o(l){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);o=!1},d(l){l&&u(e),be(t,l)}}}function Ae(c){let e,o,n,t;return o=new ve({props:{club:c[8]}}),{c(){e=b("li"),de(o.$$.fragment),n=P()},l(a){e=d(a,"LI",{});var l=w(e);he(o.$$.fragment,l),n=L(l),l.forEach(u)},m(a,l){p(a,e,l),me(o,e,null),v(e,n),t=!0},p(a,l){const i={};l&1&&(i.club=a[8]),o.$set(i)},i(a){t||(C(o.$$.fragment,a),t=!0)},o(a){g(o.$$.fragment,a),t=!1},d(a){a&&u(e),ke(o)}}}function Ze(c){let e,o="Laddar klubbar...";return{c(){e=b("p"),e.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),N(e)!=="svelte-7ky9cp"&&(e.textContent=o)},m(n,t){p(n,e,t)},p:m,i:m,o:m,d(n){n&&u(e)}}}function et(c){let e,o,n=c[11]+"",t;return{c(){e=b("p"),o=B("Error: "),t=B(n)},l(a){e=d(a,"P",{});var l=w(e);o=D(l,"Error: "),t=D(l,n),l.forEach(u)},m(a,l){p(a,e,l),v(e,o),v(e,t)},p(a,l){l&1&&n!==(n=a[11]+"")&&Y(t,n)},i:m,o:m,d(a){a&&u(e)}}}function tt(c){let e,o,n,t;const a=[nt,lt],l=[];function i(r,f){return r[7].length>0?0:1}return e=i(c),o=l[e]=a[e](c),{c(){o.c(),n=K()},l(r){o.l(r),n=K()},m(r,f){l[e].m(r,f),p(r,n,f),t=!0},p(r,f){let k=e;e=i(r),e===k?l[e].p(r,f):(X(),g(l[k],1,1,()=>{l[k]=null}),M(),o=l[e],o?o.p(r,f):(o=l[e]=a[e](r),o.c()),C(o,1),o.m(n.parentNode,n))},i(r){t||(C(o),t=!0)},o(r){g(o),t=!1},d(r){r&&u(n),l[e].d(r)}}}function lt(c){let e,o="Du är inte medlem i någon klubb";return{c(){e=b("p"),e.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),N(e)!=="svelte-iyyj1h"&&(e.textContent=o)},m(n,t){p(n,e,t)},p:m,i:m,o:m,d(n){n&&u(e)}}}function nt(c){let e,o,n=W(c[7]),t=[];for(let l=0;l<n.length;l+=1)t[l]=je(De(c,n,l));const a=l=>g(t[l],1,1,()=>{t[l]=null});return{c(){e=b("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=d(l,"UL",{});var i=w(e);for(let r=0;r<t.length;r+=1)t[r].l(i);i.forEach(u)},m(l,i){p(l,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null);o=!0},p(l,i){if(i&33){n=W(l[7]);let r;for(r=0;r<n.length;r+=1){const f=De(l,n,r);t[r]?(t[r].p(f,i),C(t[r],1)):(t[r]=je(f),t[r].c(),C(t[r],1),t[r].m(e,null))}for(X(),r=n.length;r<t.length;r+=1)a(r);M()}},i(l){if(!o){for(let i=0;i<n.length;i+=1)C(t[i]);o=!0}},o(l){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);o=!1},d(l){l&&u(e),be(t,l)}}}function je(c){let e,o,n,t;return o=new ve({props:{club:c[8]}}),{c(){e=b("li"),de(o.$$.fragment),n=P()},l(a){e=d(a,"LI",{});var l=w(e);he(o.$$.fragment,l),n=L(l),l.forEach(u)},m(a,l){p(a,e,l),me(o,e,null),v(e,n),t=!0},p(a,l){const i={};l&1&&(i.club=a[8]),o.$set(i)},i(a){t||(C(o.$$.fragment,a),t=!0)},o(a){g(o.$$.fragment,a),t=!1},d(a){a&&u(e),ke(o)}}}function rt(c){let e,o="Laddar klubbar...";return{c(){e=b("p"),e.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),N(e)!=="svelte-7ky9cp"&&(e.textContent=o)},m(n,t){p(n,e,t)},p:m,i:m,o:m,d(n){n&&u(e)}}}function ot(c){let e,o,n=c[11]+"",t;return{c(){e=b("p"),o=B("Error: "),t=B(n)},l(a){e=d(a,"P",{});var l=w(e);o=D(l,"Error: "),t=D(l,n),l.forEach(u)},m(a,l){p(a,e,l),v(e,o),v(e,t)},p(a,l){l&1&&n!==(n=a[11]+"")&&Y(t,n)},i:m,o:m,d(a){a&&u(e)}}}function at(c){let e,o,n,t;const a=[it,ct],l=[];function i(r,f){return r[7].length>0?0:1}return e=i(c),o=l[e]=a[e](c),{c(){o.c(),n=K()},l(r){o.l(r),n=K()},m(r,f){l[e].m(r,f),p(r,n,f),t=!0},p(r,f){let k=e;e=i(r),e===k?l[e].p(r,f):(X(),g(l[k],1,1,()=>{l[k]=null}),M(),o=l[e],o?o.p(r,f):(o=l[e]=a[e](r),o.c()),C(o,1),o.m(n.parentNode,n))},i(r){t||(C(o),t=!0)},o(r){g(o),t=!1},d(r){r&&u(n),l[e].d(r)}}}function ct(c){let e,o="Du äger inte någon klubb";return{c(){e=b("p"),e.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),N(e)!=="svelte-3mryio"&&(e.textContent=o)},m(n,t){p(n,e,t)},p:m,i:m,o:m,d(n){n&&u(e)}}}function it(c){let e,o,n=W(c[7]),t=[];for(let l=0;l<n.length;l+=1)t[l]=Te(Be(c,n,l));const a=l=>g(t[l],1,1,()=>{t[l]=null});return{c(){e=b("ul");for(let l=0;l<t.length;l+=1)t[l].c()},l(l){e=d(l,"UL",{});var i=w(e);for(let r=0;r<t.length;r+=1)t[r].l(i);i.forEach(u)},m(l,i){p(l,e,i);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null);o=!0},p(l,i){if(i&33){n=W(l[7]);let r;for(r=0;r<n.length;r+=1){const f=Be(l,n,r);t[r]?(t[r].p(f,i),C(t[r],1)):(t[r]=Te(f),t[r].c(),C(t[r],1),t[r].m(e,null))}for(X(),r=n.length;r<t.length;r+=1)a(r);M()}},i(l){if(!o){for(let i=0;i<n.length;i+=1)C(t[i]);o=!0}},o(l){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);o=!1},d(l){l&&u(e),be(t,l)}}}function Te(c){let e,o,n,t;return o=new ve({props:{club:c[8]}}),{c(){e=b("li"),de(o.$$.fragment),n=P()},l(a){e=d(a,"LI",{});var l=w(e);he(o.$$.fragment,l),n=L(l),l.forEach(u)},m(a,l){p(a,e,l),me(o,e,null),v(e,n),t=!0},p(a,l){const i={};l&1&&(i.club=a[8]),o.$set(i)},i(a){t||(C(o.$$.fragment,a),t=!0)},o(a){g(o.$$.fragment,a),t=!1},d(a){a&&u(e),ke(o)}}}function ut(c){let e,o="Laddar klubbar...";return{c(){e=b("p"),e.textContent=o},l(n){e=d(n,"P",{"data-svelte-h":!0}),N(e)!=="svelte-7ky9cp"&&(e.textContent=o)},m(n,t){p(n,e,t)},p:m,i:m,o:m,d(n){n&&u(e)}}}function st(c){let e,o="Din profil",n,t,a,l,i;const r=[Je,Ge],f=[];function k(h,E){return h[0]?0:1}return t=k(c),a=f[t]=r[t](c),{c(){e=b("h1"),e.textContent=o,n=P(),a.c(),l=K()},l(h){e=d(h,"H1",{"data-svelte-h":!0}),N(e)!=="svelte-1x0vkfj"&&(e.textContent=o),n=L(h),a.l(h),l=K()},m(h,E){p(h,e,E),p(h,n,E),f[t].m(h,E),p(h,l,E),i=!0},p(h,[E]){let q=t;t=k(h),t===q?f[t].p(h,E):(X(),g(f[q],1,1,()=>{f[q]=null}),M(),a=f[t],a?a.p(h,E):(a=f[t]=r[t](h),a.c()),C(a,1),a.m(l.parentNode,l))},i(h){i||(C(a),i=!0)},o(h){g(a),i=!1},d(h){h&&(u(e),u(n),u(l)),f[t].d(h)}}}function ft(c,e,o){let n,t,a;Xe.subscribe(k=>{o(0,t=k)});async function l(){let k=qe(ze,"users",t.uid);await Ie(k,{description:a}),o(0,t.data.description=a,t)}async function i(){await Re.signOut(),Me("/")}async function r(k){return await Promise.all((k||[]).map(async h=>{const E=await Fe(h);if(E.data())return{uid:E.id,data:E.data()};throw new Error("Kunde inte hitta klubb")}))}function f(){a=this.value,o(1,a),o(0,t)}return c.$$.update=()=>{c.$$.dirty&1&&o(1,a=t==null?void 0:t.data.description),c.$$.dirty&3&&o(2,n=a==(t==null?void 0:t.data.description))},[t,a,n,l,i,r,f]}class Ct extends He{constructor(e){super(),Ke(this,e,ft,st,Oe,{})}}export{Ct as component};
