(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"29d43e35"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/todo-spa-vue-deploy/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v(" Tareas App ")]),n("v-list-item-subtitle",[t._v(" Justo DO IT ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),n("v-app-bar",{attrs:{app:"",color:"primary",src:"https://picsum.photos/1920/1080?random",dark:"","hide-on-scroll":"",prominent:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Cada vez más cerca de tus metas")]),n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},i=[],o={data:function(){return{drawer:null,items:[{title:"Dashboard",icon:"mdi-list-status",to:"/"},{title:"About",icon:"mdi-help-box",to:"/about"}]}}},s=o,c=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),p=n("40dc"),v=n("5bc1"),f=n("ce7e"),m=n("132d"),b=n("8860"),h=n("da13"),k=n("5d23"),y=n("34c3"),w=n("f6c4"),T=n("f774"),V=n("2fa4"),_=n("2a7f"),g=Object(c["a"])(s,r,i,!1,null,null,null),x=g.exports;u()(g,{VApp:d["a"],VAppBar:p["a"],VAppBarNavIcon:v["a"],VDivider:f["a"],VIcon:m["a"],VList:b["a"],VListItem:h["a"],VListItemContent:k["a"],VListItemIcon:y["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VMain:w["a"],VNavigationDrawer:T["a"],VSpacer:V["a"],VToolbarTitle:_["a"]});var L=n("f309");a["a"].use(L["a"]);var O=new L["a"]({}),I=n("bc3a"),j=n.n(I),C=n("2106"),P=n.n(C),S=(n("d3b7"),n("8c4f")),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home pa-4"},[n("v-text-field",{staticClass:"pa-2",attrs:{outlined:"",label:"Nueva Tarea","append-icon":"mdi-plus","hide-details":"",clearable:""},on:{"click:append":t.addTask,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)}},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}}),n("v-divider"),n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"475"}},[n("v-list",{attrs:{subheader:"",flat:""}},[n("v-subheader",[t._v("Listas de tareas To Do...")]),n("v-divider"),t._l(t.tareas,(function(e){return n("v-list-item",{key:e.id,class:{"blue lighten-5":e.done},on:{click:function(n){return t.doneTask(e.id)}},scopedSlots:t._u([{key:"default",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{class:{"text-decoration-line-through":e.done}},[t._v(" "+t._s(e.description)+" ")])],1),n("v-list-item-action",[n("v-checkbox",{attrs:{"input-value":e.done,color:"primary"}})],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return n.stopPropagation(),t.deleteTask(e.id)}}},[n("v-icon",{attrs:{color:"red lighten-1"}},[t._v("mdi-delete")])],1)],1)]},proxy:!0}],null,!0)})}))],2)],1)],1)},D=[],E=(n("4de4"),{name:"Home",data:function(){return{newTask:"",tareas:[{id:1,description:"Levantarse",done:!1}]}},methods:{addTask:function(){var t={id:Date.now(),description:this.newTask,done:!1};this.tareas.push(t),this.newTask=""},doneTask:function(t){var e=this.tareas.filter((function(e){return e.id===t}))[0];e.done=!e.done},deleteTask:function(t){this.tareas=this.tareas.filter((function(e){return e.id!==t}))}}}),M=E,B=n("8336"),J=n("b0af"),N=n("ac7c"),$=n("1800"),q=n("e0c7"),z=n("8654"),F=Object(c["a"])(M,A,D,!1,null,null,null),H=F.exports;u()(F,{VBtn:B["a"],VCard:J["a"],VCheckbox:N["a"],VDivider:f["a"],VIcon:m["a"],VList:b["a"],VListItem:h["a"],VListItemAction:$["a"],VListItemContent:k["a"],VListItemTitle:k["c"],VSubheader:q["a"],VTextField:z["a"]}),a["a"].use(S["a"]);var G=[{path:"/",name:"ToDo",component:H},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],K=new S["a"]({routes:G}),Q=K;a["a"].use(P.a,j.a),a["a"].config.productionTip=!1,new a["a"]({vuetify:O,router:Q,render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=app.b3c203c9.js.map