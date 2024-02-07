import{s as ne,j as ce,n as te}from"./scheduler.UsNOiup1.js";import{S as oe,i as fe,e as m,t as A,s as C,c as g,a as v,b as I,d as u,f as S,p as h,g as K,h as i,j,w as ue}from"./index.3yGfJt-g.js";import{e as ae}from"./each.6w4Ej4nR.js";import{u as he}from"./store.MIH45tLv.js";import{b as J}from"./paths.6OVLnlHr.js";function le(c,e,s){const t=c.slice();return t[3]=e[s],t}function se(c){let e,s;return{c(){e=m("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ce(e.src,s=J+"/check.svg")||h(e,"src",s),h(e,"alt",""),h(e,"class","svelte-eg8fb3")},m(t,l){K(t,e,l)},d(t){t&&u(e)}}}function re(c){let e,s=ae(c[0].data.gauges),t=[];for(let l=0;l<s.length;l+=1)t[l]=ie(le(c,s,l));return{c(){e=m("article");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=g(l,"ARTICLE",{class:!0});var r=v(e);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(u),this.h()},h(){h(e,"class","tags svelte-eg8fb3")},m(l,r){K(l,e,r);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(l,r){if(r&1){s=ae(l[0].data.gauges);let a;for(a=0;a<s.length;a+=1){const d=le(l,s,a);t[a]?t[a].p(d,r):(t[a]=ie(d),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=s.length}},d(l){l&&u(e),ue(t,l)}}}function ie(c){let e,s=c[3]+"",t,l;return{c(){e=m("span"),t=A(s),l=C(),this.h()},l(r){e=g(r,"SPAN",{class:!0});var a=v(e);t=I(a,s),l=S(a),a.forEach(u),this.h()},h(){h(e,"class","tag")},m(r,a){K(r,e,a),i(e,t),i(e,l)},p(r,a){a&1&&s!==(s=r[3]+"")&&j(t,s)},d(r){r&&u(e)}}}function de(c){let e,s,t,l=c[0].data.name+"",r,a,d,G,E,Z,Q,w,N=c[0].data.members.length+"",H,U,p,k,R,T=c[0].data.desc+"",L,W,b,q=c[0].data.county+"",M,X,D=c[0].data.region+"",O,Y,V,f=c[1]&&se(),n=c[0].data.gauges&&re(c);return{c(){e=m("a"),s=m("header"),t=m("h2"),r=A(l),a=C(),d=m("div"),f&&f.c(),G=C(),E=m("img"),Q=C(),w=m("span"),H=A(N),U=C(),p=m("section"),k=m("article"),R=m("p"),L=A(T),W=C(),b=m("p"),M=A(q),X=A(", "),O=A(D),Y=C(),n&&n.c(),this.h()},l(o){e=g(o,"A",{href:!0,class:!0});var _=v(e);s=g(_,"HEADER",{class:!0});var y=v(s);t=g(y,"H2",{});var $=v(t);r=I($,l),$.forEach(u),a=S(y),d=g(y,"DIV",{class:!0});var P=v(d);f&&f.l(P),G=S(P),E=g(P,"IMG",{src:!0,alt:!0,class:!0}),Q=S(P),w=g(P,"SPAN",{});var x=v(w);H=I(x,N),x.forEach(u),P.forEach(u),y.forEach(u),U=S(_),p=g(_,"SECTION",{class:!0});var z=v(p);k=g(z,"ARTICLE",{});var B=v(k);R=g(B,"P",{});var ee=v(R);L=I(ee,T),ee.forEach(u),W=S(B),b=g(B,"P",{class:!0});var F=v(b);M=I(F,q),X=I(F,", "),O=I(F,D),F.forEach(u),B.forEach(u),Y=S(z),n&&n.l(z),z.forEach(u),_.forEach(u),this.h()},h(){ce(E.src,Z=J+"/group.svg")||h(E,"src",Z),h(E,"alt",""),h(E,"class","svelte-eg8fb3"),h(d,"class","svelte-eg8fb3"),h(s,"class","svelte-eg8fb3"),h(b,"class","toned-down"),h(p,"class","svelte-eg8fb3"),h(e,"href",V=J+"/club/"+c[0].uid),h(e,"class","blob hoverable")},m(o,_){K(o,e,_),i(e,s),i(s,t),i(t,r),i(s,a),i(s,d),f&&f.m(d,null),i(d,G),i(d,E),i(d,Q),i(d,w),i(w,H),i(e,U),i(e,p),i(p,k),i(k,R),i(R,L),i(k,W),i(k,b),i(b,M),i(b,X),i(b,O),i(p,Y),n&&n.m(p,null)},p(o,[_]){_&1&&l!==(l=o[0].data.name+"")&&j(r,l),o[1]?f||(f=se(),f.c(),f.m(d,G)):f&&(f.d(1),f=null),_&1&&N!==(N=o[0].data.members.length+"")&&j(H,N),_&1&&T!==(T=o[0].data.desc+"")&&j(L,T),_&1&&q!==(q=o[0].data.county+"")&&j(M,q),_&1&&D!==(D=o[0].data.region+"")&&j(O,D),o[0].data.gauges?n?n.p(o,_):(n=re(o),n.c(),n.m(p,null)):n&&(n.d(1),n=null),_&1&&V!==(V=J+"/club/"+o[0].uid)&&h(e,"href",V)},i:te,o:te,d(o){o&&u(e),f&&f.d(),n&&n.d()}}}function _e(c,e,s){let t,{club:l}=e,r;return he.subscribe(a=>s(2,r=a)),c.$$set=a=>{"club"in a&&s(0,l=a.club)},c.$$.update=()=>{c.$$.dirty&5&&s(1,t=l.data.members.map(a=>a.id).includes(r==null?void 0:r.uid))},[l,t,r]}class Ee extends oe{constructor(e){super(),fe(this,e,_e,de,ne,{club:0})}}export{Ee as C};
