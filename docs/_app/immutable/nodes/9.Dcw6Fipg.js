import{s as Y,o as ee,n as I}from"../chunks/scheduler.UsNOiup1.js";import{S as te,i as le,e as C,s as P,n as x,c as L,m as Q,f as S,a as T,d,p as E,g as j,l as B,y as V,k as M,w as N,t as G,b as H,h as y,u as W,x as X,j as ne,z as se,A as re,B as ae,C as oe}from"../chunks/index.t5UJTB7O.js";import{e as A}from"../chunks/each.6w4Ej4nR.js";import{i as ce,c as ie,a as ue}from"../chunks/firebase.224fbcjl.js";import{C as fe}from"../chunks/ClubPreview.F0pW--TY.js";import{u as he}from"../chunks/store.MIH45tLv.js";import{r as U}from"../chunks/regionsAndCounties.34LWOHa2.js";import{b as _e}from"../chunks/paths.5CuYmM-u.js";const Z=["T","ZZ","Z","N","TT","HO","OO","S","O","L","1","G"];function D(r,t,l){const o=r.slice();return o[10]=t[l],o}function F(r,t,l){const o=r.slice();return o[13]=t[l],o[14]=t,o[15]=l,o}function q(r,t,l){const o=r.slice();return o[16]=t[l],o[17]=t,o[18]=l,o}function z(r){let t,l,o=r[16].name+"",_,u,c,p,f,s;function g(){r[6].call(c,r[16])}return{c(){t=C("p"),l=C("label"),_=G(o),u=P(),c=C("input"),p=P(),this.h()},l(m){t=L(m,"P",{class:!0});var e=T(t);l=L(e,"LABEL",{for:!0,class:!0});var a=T(l);_=H(a,o),a.forEach(d),u=S(e),c=L(e,"INPUT",{type:!0,id:!0,class:!0}),p=S(e),e.forEach(d),this.h()},h(){E(l,"for",r[16].regionCode),E(l,"class","svelte-1hn9txj"),E(c,"type","checkbox"),E(c,"id",r[16].regionCode),E(c,"class","svelte-1hn9txj"),E(t,"class","svelte-1hn9txj")},m(m,e){j(m,t,e),y(t,l),y(l,_),y(t,u),y(t,c),c.checked=r[0][r[16].name],y(t,p),f||(s=W(c,"change",g),f=!0)},p(m,e){r=m,e&1&&(c.checked=r[0][r[16].name])},d(m){m&&d(t),f=!1,s()}}}function J(r){let t,l,o,_,u,c,p,f;function s(){r[7].call(u,r[13])}return{c(){t=C("p"),l=C("label"),o=G(r[13]),_=P(),u=C("input"),c=P(),this.h()},l(g){t=L(g,"P",{class:!0});var m=T(t);l=L(m,"LABEL",{for:!0,class:!0});var e=T(l);o=H(e,r[13]),e.forEach(d),_=S(m),u=L(m,"INPUT",{type:!0,id:!0,class:!0}),c=S(m),m.forEach(d),this.h()},h(){E(l,"for",r[13]),E(l,"class","svelte-1hn9txj"),E(u,"type","checkbox"),E(u,"id",r[13]),E(u,"class","svelte-1hn9txj"),E(t,"class","svelte-1hn9txj")},m(g,m){j(g,t,m),y(t,l),y(l,o),y(t,_),y(t,u),u.checked=r[1][r[13]],y(t,c),p||(f=W(u,"change",s),p=!0)},p(g,m){r=g,m&2&&(u.checked=r[1][r[13]])},d(g){g&&d(t),p=!1,f()}}}function pe(r){let t,l="Laddar klubbar...";return{c(){t=C("p"),t.textContent=l},l(o){t=L(o,"P",{"data-svelte-h":!0}),Q(t)!=="svelte-7ky9cp"&&(t.textContent=l)},m(o,_){j(o,t,_)},p:I,i:I,o:I,d(o){o&&d(t)}}}function me(r){var m;let t,l=((m=r[2])==null?void 0:m.length)+"",o,_,u,c,p,f=A(r[2]),s=[];for(let e=0;e<f.length;e+=1)s[e]=K(D(r,f,e));const g=e=>B(s[e],1,1,()=>{s[e]=null});return{c(){t=C("p"),o=G(l),_=G(" klubbar matchar ditt urval"),u=P(),c=C("ul");for(let e=0;e<s.length;e+=1)s[e].c()},l(e){t=L(e,"P",{});var a=T(t);o=H(a,l),_=H(a," klubbar matchar ditt urval"),a.forEach(d),u=S(e),c=L(e,"UL",{});var b=T(c);for(let i=0;i<s.length;i+=1)s[i].l(b);b.forEach(d)},m(e,a){j(e,t,a),y(t,o),y(t,_),j(e,u,a),j(e,c,a);for(let b=0;b<s.length;b+=1)s[b]&&s[b].m(c,null);p=!0},p(e,a){var b;if((!p||a&4)&&l!==(l=((b=e[2])==null?void 0:b.length)+"")&&ne(o,l),a&4){f=A(e[2]);let i;for(i=0;i<f.length;i+=1){const O=D(e,f,i);s[i]?(s[i].p(O,a),M(s[i],1)):(s[i]=K(O),s[i].c(),M(s[i],1),s[i].m(c,null))}for(X(),i=f.length;i<s.length;i+=1)g(i);V()}},i(e){if(!p){for(let a=0;a<f.length;a+=1)M(s[a]);p=!0}},o(e){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)B(s[a]);p=!1},d(e){e&&(d(t),d(u),d(c)),N(s,e)}}}function K(r){let t,l,o,_;return l=new fe({props:{club:r[10]}}),{c(){t=C("li"),se(l.$$.fragment),o=P()},l(u){t=L(u,"LI",{});var c=T(t);re(l.$$.fragment,c),o=S(c),c.forEach(d)},m(u,c){j(u,t,c),ae(l,t,null),y(t,o),_=!0},p(u,c){const p={};c&4&&(p.club=u[10]),l.$set(p)},i(u){_||(M(l.$$.fragment,u),_=!0)},o(u){B(l.$$.fragment,u),_=!1},d(u){u&&d(t),oe(l)}}}function de(r){let t,l=`<h1>Klubbar</h1> <a href="${_e}/club/create" class="button">Skapa en klubb</a>`,o,_,u,c,p,f,s,g,m,e=A(U.regions),a=[];for(let n=0;n<e.length;n+=1)a[n]=z(q(r,e,n));let b=A(Z),i=[];for(let n=0;n<b.length;n+=1)i[n]=J(F(r,b,n));const O=[me,pe],w=[];function $(n,k){return n[2]?0:1}return f=$(r),s=w[f]=O[f](r),{c(){t=C("header"),t.innerHTML=l,o=P(),_=C("form");for(let n=0;n<a.length;n+=1)a[n].c();u=P(),c=C("form");for(let n=0;n<i.length;n+=1)i[n].c();p=P(),s.c(),g=x(),this.h()},l(n){t=L(n,"HEADER",{class:!0,"data-svelte-h":!0}),Q(t)!=="svelte-acxx3y"&&(t.innerHTML=l),o=S(n),_=L(n,"FORM",{class:!0});var k=T(_);for(let h=0;h<a.length;h+=1)a[h].l(k);k.forEach(d),u=S(n),c=L(n,"FORM",{class:!0});var v=T(c);for(let h=0;h<i.length;h+=1)i[h].l(v);v.forEach(d),p=S(n),s.l(n),g=x(),this.h()},h(){E(t,"class","svelte-1hn9txj"),E(_,"class","svelte-1hn9txj"),E(c,"class","svelte-1hn9txj")},m(n,k){j(n,t,k),j(n,o,k),j(n,_,k);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(_,null);j(n,u,k),j(n,c,k);for(let v=0;v<i.length;v+=1)i[v]&&i[v].m(c,null);j(n,p,k),w[f].m(n,k),j(n,g,k),m=!0},p(n,[k]){if(k&1){e=A(U.regions);let h;for(h=0;h<e.length;h+=1){const R=q(n,e,h);a[h]?a[h].p(R,k):(a[h]=z(R),a[h].c(),a[h].m(_,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=e.length}if(k&2){b=A(Z);let h;for(h=0;h<b.length;h+=1){const R=F(n,b,h);i[h]?i[h].p(R,k):(i[h]=J(R),i[h].c(),i[h].m(c,null))}for(;h<i.length;h+=1)i[h].d(1);i.length=b.length}let v=f;f=$(n),f===v?w[f].p(n,k):(X(),B(w[v],1,1,()=>{w[v]=null}),V(),s=w[f],s?s.p(n,k):(s=w[f]=O[f](n),s.c()),M(s,1),s.m(g.parentNode,g))},i(n){m||(M(s),m=!0)},o(n){B(s),m=!1},d(n){n&&(d(t),d(o),d(_),d(u),d(c),d(p),d(g)),N(a,n),N(i,n),w[f].d(n)}}}function ge(r,t,l){let o,_,u;he.subscribe(e=>e),ee(c);async function c(){let e=[];(await ce(ie(ue,"clubs"))).forEach(a=>{e.push({uid:a.id,data:a.data()})}),l(3,p=e)}let p=null,f={},s={};function g(e){f[e.name]=this.checked,l(0,f)}function m(e){s[e]=this.checked,l(1,s)}return r.$$.update=()=>{r.$$.dirty&1&&l(5,o=!Object.values(f).some(e=>e)),r.$$.dirty&2&&l(4,_=!Object.values(s).some(e=>e)),r.$$.dirty&59&&l(2,u=p==null?void 0:p.filter(e=>{var b,i;const a=[];return Object.keys(s).forEach(O=>{s[O]&&a.push(O)}),(o||f[(b=e==null?void 0:e.data)==null?void 0:b.region])&&(_||(((i=e==null?void 0:e.data)==null?void 0:i.gauges)||[]).some(O=>a.includes(O)))}))},[f,s,u,p,_,o,g,m]}class Oe extends te{constructor(t){super(),le(this,t,ge,de,Y,{})}}export{Oe as component};