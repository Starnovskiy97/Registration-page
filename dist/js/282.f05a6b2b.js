"use strict";(self["webpackChunklogin"]=self["webpackChunklogin"]||[]).push([[282],{7282:function(s,e,t){t.r(e),t.d(e,{default:function(){return d}});var a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"users"},[s.loading?e("preloader"):s._e(),e("div",{staticClass:"users__main"},[e("nav-bar"),e("div",{staticClass:"users__container"},[e("ul",{staticClass:"users__list"},s._l(s.userList,(function(t,a){return e("li",{key:a},[s._v(" "+s._s(a+1)+" - "+s._s(t)+" ")])})),0),e("router-link",{staticClass:"users__link",attrs:{to:"/"}},[s._v(" Home ")])],1)],1)],1)},n=[],l=(t(7658),t(7470)),r=t(1510),i=t(6780),u={name:"usersPage",data(){return{userList:[],loading:!1}},components:{navBar:l.Z,preloader:r.Z},async mounted(){try{this.loading=!0;const s=(await i.Z.database().ref("users").once("value")).val();for(let e=0;e<Object.values(s).length;e++)this.userList.push(Object.values(s)[e].name);this.loading=!1}catch(s){console.log(s)}}},o=u,c=t(1001),_=(0,c.Z)(o,a,n,!1,null,null,null),d=_.exports}}]);
//# sourceMappingURL=282.f05a6b2b.js.map