(function(t){function e(e){for(var i,a,s=e[0],l=e[1],c=e[2],d=0,f=[];d<s.length;d++)a=s[d],o[a]&&f.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3938:function(t,e,n){"use strict";var i=n("a336"),o=n.n(i);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"control-panel"},[n("md-button",{staticClass:"md-icon-button md-raised md-primary",on:{click:t.addNote}},[n("md-icon",[t._v("add")])],1),n("md-button",{staticClass:"md-icon-button md-raised md-primary",on:{click:t.saveNote}},[n("md-icon",[t._v("save")])],1)],1),t._l(t.list,function(t,e){return n("span",{key:e},[n("note",{ref:"note"+e,refInFor:!0,attrs:{initialTop:t.initialTop,initialLeft:t.initialLeft}})],1)})],2)},r=[],a=(n("ac6a"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("div",{staticClass:"entire-note",style:t.classObject},[n("div",{directives:[{name:"drag",rawName:"v-drag:header",arg:"header"}],staticClass:"notePosition",staticStyle:{position:"absolute"},on:{mousedown:t.Debug}},[n("div",{staticClass:"stick",attrs:{id:"header"}}),n("div",{staticClass:"note",attrs:{contenteditable:"true"}})])])])}),s=[],l=n("66b0"),c=n.n(l);function u(t){var e=t.getBoundingClientRect(),n=e.left,i=e.top,o=document.body.getBoundingClientRect(),r=o.left,a=o.top,s={left:n-r+1,top:i-a+1};return console.log(n,i),s}function d(t){var e=t.clientHeight,n=t.clientWidth;return{height:e,width:n}}var f={directives:{drag:c.a},props:["initialTop","initialLeft"],data:function(){return{text:"default",classObject:{position:"relative",top:this.initialTop+"px",left:this.initialLeft+"px"}}},methods:{Debug:function(t){console.log("(X:"+t.clientX+", Y:"+t.clientY+")")},getPosition:function(){return u(this.$el.getElementsByClassName("notePosition")[0])},getSize:function(){return d(this.$el.getElementsByClassName("note")[0])},getText:function(){return{text:this.$el.getElementsByClassName("note")[0].innerHTML}}}},p=f,h=(n("61e4"),n("2877")),v=Object(h["a"])(p,a,s,!1,null,"11d00fb1",null),g=v.exports,b=n("43f9"),m=n.n(b);n("51de"),n("e094");function y(t){return Math.floor(Math.random()*Math.floor(t))}function w(t){var e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=document.createElement("a");n.href=window.URL.createObjectURL(e),n.download="note.json",n.click()}i["default"].use(m.a);var j={components:{Note:g},data:function(){return{list:[]}},methods:{addNote:function(){var t=y(window.innerHeight-50)+25,e=y(window.innerWidth);this.list.push({initialTop:t,initialLeft:e})},saveNote:function(){for(var t=[],e=0;e<Object.keys(this.$refs).length;e++){var n=this.$refs["note"+e]["0"].getPosition(),i=this.$refs["note"+e]["0"].getSize(),o=this.$refs["note"+e]["0"].getText();t.push(Object.assign(o,n,i))}w(t)}}},O=j,x=(n("3938"),Object(h["a"])(O,o,r,!1,null,"53260bec",null)),_=x.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(_)}}).$mount("#app")},"61e4":function(t,e,n){"use strict";var i=n("ed9c"),o=n.n(i);o.a},a336:function(t,e,n){},ed9c:function(t,e,n){}});
//# sourceMappingURL=app.d547df20.js.map