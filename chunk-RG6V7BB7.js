import{b as w}from"./chunk-GGFMQCNR.js";import{a as B,b as D,c as S}from"./chunk-3ND7P52C.js";import{D as U,E as j,x as A,y as $}from"./chunk-VQONN7EZ.js";import{Db as y,Hb as g,Ib as x,Jb as V,Ua as p,Va as l,bc as T,cc as k,ea as v,ja as _,jb as F,nb as h,ob as E,pb as n,qb as a,sa as c,sb as u,ta as m,ub as d,vb as f,ya as C}from"./chunk-DIOGFLLW.js";var I=(i,e)=>e.id;function M(i,e){if(i&1){let o=u();n(0,"div",1)(1,"app-card",3),d("onClickFavorite",function(){let t=c(o).$implicit,s=f();return m(s.removeFromFavorite(t))}),a()()}if(i&2){let o=e.$implicit;p(),F("imageUrl",o.image)("name",o.name)("species",o.species)("type",o.type)("favorited",!0)}}function P(i,e){if(i&1){let o=u();n(0,"app-no-data-found",4),d("onClickButton",function(){c(o);let t=f();return m(t.goToHome())}),a()}}var X=(()=>{let e=class e{constructor(r,t){this.store=r,this.router=t,this.destroy=v(C)}ngOnInit(){this.characters$=this.store.select(j).pipe(A(this.destroy))}removeFromFavorite(r){this.store.dispatch(U({id:r.id}))}goToHome(){this.router.navigateByUrl("inicio")}};e.\u0275fac=function(t){return new(t||e)(l($),l(w))},e.\u0275cmp=_({type:e,selectors:[["app-favorites"]],standalone:!0,features:[g],decls:7,vars:3,consts:[[1,"row"],[1,"col","mt-3"],["title","Parece que voc\xEA ainda n\xE3o tem favoritos","subtitle","Volte \xE0 p\xE1gina inicial e escolha os melhores para voc\xEA.","textButton","Voltar ao in\xEDcio"],[3,"onClickFavorite","imageUrl","name","species","type","favorited"],["title","Parece que voc\xEA ainda n\xE3o tem favoritos","subtitle","Volte \xE0 p\xE1gina inicial e escolha os melhores para voc\xEA.","textButton","Voltar ao in\xEDcio",3,"onClickButton"]],template:function(t,s){t&1&&(n(0,"app-title"),y(1,"Favoritos"),a(),n(2,"div",0),h(3,M,2,5,"div",1,I,!1,P,1,0,"app-no-data-found",2),x(6,"async"),a()),t&2&&(p(3),E(V(6,1,s.characters$)))},dependencies:[B,D,k,T,S]});let i=e;return i})();export{X as FavoritesComponent};
