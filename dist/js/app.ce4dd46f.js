(function(t){function a(a){for(var r,o,i=a[0],u=a[1],l=a[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(a);while(p.length)p.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,i=1;i<e.length;i++){var u=e[i];0!==n[u]&&(r=!1)}r&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var r={},n={app:0},s=[];function o(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)o.d(e,r,function(a){return t[a]}.bind(null,r));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var c=u;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("64a9"),n=e.n(r);n.a},3282:function(t,a,e){},"3c64":function(t,a,e){"use strict";var r=e("4b81"),n=e.n(r);n.a},"3f98":function(t,a,e){t.exports=e.p+"img/logo-senyum-indonesia-putih.b8bed0b8.png"},"4b81":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],o={name:"app"},i=o,u=(e("034f"),e("2877")),l=Object(u["a"])(i,n,s,!1,null,null,null),c=l.exports,d=(e("f9e3"),e("2dd8"),e("5f5b")),p=e("8c4f"),f=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"main-navbar"},[r("b-navbar",{staticClass:"nav-bound",attrs:{toggleable:"lg",type:"dark"}},[r("b-navbar-brand",{attrs:{href:"#"}},[r("div",{staticClass:"brand-senyum-indonesia"},[r("img",{staticClass:"logo",attrs:{src:e("3f98")}})])])],1)],1)},m=[],b={},g=b,h=(e("3c64"),Object(u["a"])(g,f,m,!1,null,"2cdca9ac",null)),v=h.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-div"},[e("nav-bar"),t.showMessage?e("alert",{attrs:{message:t.message}}):t._e(),e("div",{staticClass:"main-content"},[e("b-row",{staticClass:"main-row justify-content-md-center"},[e("b-col",{staticClass:"orang-baik",attrs:{sm:"4"}},[e("h2",[t._v("\n                    Hai #OrangBaik\n                ")]),e("p",{staticClass:"greeting"},[t._v("\n                    Selamat bergabung di Pondok Senyum Indonesia, rumah bagi adik-adik istimewa dari pelosok Jawa Barat\n                ")])]),e("b-col",{attrs:{sm:"4"}},[e("div",{staticClass:"form-box"},[e("h5",[t._v("\n                        Daftar Menjadi "),e("strong",[t._v("#OrangTuaAsuh")])]),e("p",{staticClass:"greeting-2"},[t._v("\n                        Selamat bergabung di Pondok Senyum Indonesia, rumah bagi adik-adik istimewa dari pelosok Jawa Barat\n                    ")]),t.show?e("b-form",{on:{submit:t.onSubmit}},[t.state_form?t._e():e("div",{staticClass:"state-0"},[e("b-form-group",{attrs:{id:"input-group-1"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-1",required:"",placeholder:"Nama Anda *"},model:{value:t.form.name,callback:function(a){t.$set(t.form,"name",a)},expression:"form.name"}})],1),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-2",required:"",placeholder:"Nomor WhatsApp Anda *"},model:{value:t.form.whatsapp,callback:function(a){t.$set(t.form,"whatsapp",a)},expression:"form.whatsapp"}})],1),e("b-form-group",{attrs:{id:"input-group-3b"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-3b",required:"",placeholder:"Usia Anda *"},model:{value:t.form.age,callback:function(a){t.$set(t.form,"age",a)},expression:"form.age"}})],1),e("b-form-group",{attrs:{id:"input-group-3"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-3",required:"",placeholder:"Alamat rumah Anda *"},model:{value:t.form.address,callback:function(a){t.$set(t.form,"address",a)},expression:"form.address"}})],1),e("b-form-group",{attrs:{id:"input-group-4"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-4",placeholder:"Alamat email Anda"},model:{value:t.form.email,callback:function(a){t.$set(t.form,"email",a)},expression:"form.email"}})],1),e("b-form-group",{attrs:{id:"input-group-5"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-5",placeholder:"ID instagram Anda"},model:{value:t.form.instagram,callback:function(a){t.$set(t.form,"instagram",a)},expression:"form.instagram"}})],1),e("b-form-group",{attrs:{id:"input-group-6"}},[e("b-form-select",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-6",options:t.infaq_option,required:""},model:{value:t.selected_infaq,callback:function(a){t.selected_infaq=a},expression:"selected_infaq"}})],1),"Isi sendiri"==t.selected_infaq?e("b-form-group",{attrs:{id:"input-group-6a"}},[e("currency-formatter",{model:{value:t.form.infaq,callback:function(a){t.$set(t.form,"infaq",a)},expression:"form.infaq"}})],1):t._e(),e("b-button",{staticStyle:{"background-color":"#d71149","border-color":"#d71149","border-radius":"3px"},attrs:{block:"",type:"submit"}},[t._v("DAFTAR")])],1),t.state_form?e("div",{staticClass:"state-1"},[e("b-form-group",{attrs:{label:"Tentukan password demi keamanan akun Anda",id:"input-group-7"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-7",required:"",type:"password",placeholder:"Password"},model:{value:t.form.password,callback:function(a){t.$set(t.form,"password",a)},expression:"form.password"}})],1),e("b-form-group",{attrs:{id:"input-group-8"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-8",required:"",type:"password",placeholder:"Confirm password"},model:{value:t.form.confirm_password,callback:function(a){t.$set(t.form,"confirm_password",a)},expression:"form.confirm_password"}})],1),e("b-button",{staticStyle:{"background-color":"#d71149","border-color":"#d71149","border-radius":"3px",padding:"0","padding-bottom":"0.9vh"},attrs:{block:"",type:"submit"}},[t.loading?e("div",[t._v("\n                                    SELESAI\n                                ")]):e("b-spinner",{staticStyle:{width:"1rem",height:"1rem"},attrs:{label:"Loading"}})],1)],1):t._e()]):t._e()],1)])],1)],1)],1)},k=[],w=(e("7f7f"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-input-group",{attrs:{prepend:"Rp"}},[e("b-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem","border-top-left-radius":"0","border-bottom-left-radius":"0"},attrs:{id:"input-6a",placeholder:"Jumlah infaq Anda"},on:{blur:function(a){t.isInputActive=!1},focus:function(a){t.isInputActive=!0}},model:{value:t.displayValue,callback:function(a){t.displayValue=a},expression:"displayValue"}})],1)],1)}),y=[],x=e("59ad"),S=e.n(x),q=(e("a481"),e("6b54"),{props:["value"],data:function(){return{isInputActive:!1}},computed:{displayValue:{get:function(){if(this.isInputActive)return this.value.toString();var t=(this.value/1).toFixed(2).replace(".",",");return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},set:function(t){var a=S()(t.replace(/[^\d\.]/g,""));isNaN(a)&&(a=0),this.$emit("input",a)}}}}),A=q,C=(e("db2d"),Object(u["a"])(A,w,y,!1,null,"59dcd339",null)),j=C.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-alert"},[e("b-alert",{attrs:{variant:"danger",show:""}},[e("div",{staticClass:"alert-bound"},[t._v("\n          "+t._s(t.message)+"\n      ")])])],1)},O=[],I={props:["message"]},z=I,P=(e("84c5"),Object(u["a"])(z,$,O,!1,null,"62e2d808",null)),M=P.exports,B=e("bc3a"),E=e.n(B),N={data:function(){return{form:{email:"",name:"",whatsapp:"",address:"",instagram:"",infaq:5e5,password:"",confirm_password:"",age:""},infaq_option:[{text:"Jumlah infaq rutin",value:null},"Rp100.000","Rp300.000","Rp500.000","Isi sendiri"],infaq_dict:{"Rp100.000":1e5,"Rp300.000":3e5,"Rp500.000":5e5},selected_infaq:null,show:!0,state_form:0,access_token:"",role:"",showMessage:!1,message:"",loading:!1}},watch:{access_token:function(t){localStorage.access_token=t},role:function(t){localStorage.role=t}},mounted:function(){localStorage.access_token&&(this.access_token=localStorage.access_token),localStorage.role&&(this.role=localStorage.role)},methods:{onSubmit:function(t){if(t.preventDefault(),this.state_form){if(this.form.password===this.form.confirm_password){var a={email:this.form.email,name:this.form.name,whatsapp:this.form.whatsapp,address:this.form.address,instagram:this.form.instagram,infaq:this.getInfaq(),password:this.form.password,role:"oka",born_year:this.getBornYear()};console.log(a),this.loading=!0,this.register(a)}}else this.state_form=1},register:function(t){var a=this,e="https://senyum-pondok-backend.herokuapp.com/user/register";E.a.post(e,t).then(function(t){console.log(t),a.access_token=t.data.data.access_token,a.role=t.data.data.role,a.$router.push("terimakasih")}).catch(function(t){a.state_form=0,a.message="Mohon maaf pendaftaran gagal, coba beberapa saat lagi.",a.showMessage=!0,console.log(t)})},getInfaq:function(){return"Isi sendiri"==this.selected_infaq?this.form.infaq:this.infaq_dict[this.selected_infaq]},getBornYear:function(){var t=(new Date).getFullYear();return t-this.form.age}},components:{NavBar:v,CurrencyFormatter:j,Alert:M}},R=N,T=(e("9588"),Object(u["a"])(R,_,k,!1,null,"a0f2edf4",null)),D=T.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-div"},[e("nav-bar"),e("div",{staticClass:"main-content"},[e("b-row",{staticClass:"main-row justify-content-md-center"},[e("b-col",{attrs:{sm:"4"}},[e("div",{staticClass:"form-box"},[e("h5",[t._v("\n                        Masuk ke akun Anda\n                    ")]),t.show?e("b-form",{on:{submit:t.onSubmit}},[e("b-form-group",{attrs:{id:"input-group-1"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-1",required:"",placeholder:"Nomor WhatsApp Anda"},model:{value:t.form.whatsapp,callback:function(a){t.$set(t.form,"whatsapp",a)},expression:"form.whatsapp"}})],1),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{staticStyle:{"border-radius":"3px","font-size":"0.9rem"},attrs:{id:"input-2",required:"",type:"password",placeholder:"Password"},model:{value:t.form.password,callback:function(a){t.$set(t.form,"password",a)},expression:"form.password"}})],1),e("b-button",{staticStyle:{"background-color":"#d71149","border-color":"#d71149","border-radius":"3px"},attrs:{block:"",type:"submit"}},[t._v("MASUK")]),e("p",{staticClass:"link-register-desc"},[t._v("\n                            Belum punya akun? "),e("a",{staticClass:"link-register",attrs:{href:"/register"}},[t._v("Daftar")])])],1):t._e()],1)])],1)],1)],1)},F=[],V=e("f499"),U=e.n(V),W={data:function(){return{form:{whatsapp:"",password:""},show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(U()(this.form))}},components:{NavBar:v}},Y=W,H=(e("c27c"),Object(u["a"])(Y,J,F,!1,null,"2a8845a5",null)),L=H.exports,K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-div"},[e("nav-bar"),e("div",{staticClass:"main-content"},[e("b-row",{staticClass:"main-row justify-content-md-center"},[e("b-col",{attrs:{sm:"4"}},[e("div",{staticClass:"form-box"},[e("h5",[t._v("\n                        Pendaftaran Sukses\n                    ")]),e("p",[t._v("\n                        Terima kasih telah menjadi "),e("strong",[t._v("#OrangTuaAsuh")]),t._v(" untuk adik-adik Pondok Senyum Indonesia. Semoga menjadi amal kebaikan yang terus mengalir bagi kita semua. Untuk sementara, Sistem Informasi saat ini hanya menerima pendaftaran, fitur-fitur lainnya Insya Allah akan segera menyusul. Hubungi kami di 082121908986 (WhatsApp).\n                    ")])])])],1)],1)],1)},G=[],Q={data:function(){return{}},components:{NavBar:v}},X=Q,Z=(e("8e3b"),Object(u["a"])(X,K,G,!1,null,"7c01139a",null)),tt=Z.exports,at=[{path:"/",component:v},{path:"/register",component:D},{path:"/login",component:L},{path:"/terimakasih",name:"terimakasih",component:tt}],et=new p["a"]({routes:at,mode:"history"}),rt=et;r["default"].config.productionTip=!1,r["default"].use(d["a"]),r["default"].use(p["a"]),new r["default"]({render:function(t){return t(c)},router:rt}).$mount("#app")},"64a9":function(t,a,e){},"6cc9":function(t,a,e){},"84c5":function(t,a,e){"use strict";var r=e("3282"),n=e.n(r);n.a},"8e3b":function(t,a,e){"use strict";var r=e("e288"),n=e.n(r);n.a},9588:function(t,a,e){"use strict";var r=e("ac62"),n=e.n(r);n.a},ac62:function(t,a,e){},c27c:function(t,a,e){"use strict";var r=e("c3fb"),n=e.n(r);n.a},c3fb:function(t,a,e){},db2d:function(t,a,e){"use strict";var r=e("6cc9"),n=e.n(r);n.a},e288:function(t,a,e){}});
//# sourceMappingURL=app.ce4dd46f.js.map