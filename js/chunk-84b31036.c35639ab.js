(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84b31036"],{"16fe":function(t,s,i){"use strict";var e=i("ee24"),n=i.n(e);n.a},ee24:function(t,s,i){},f0e3:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("ul",{staticClass:"prod-list"},t._l(t.list,function(s,e){return i("li",{staticClass:"mb16",on:{click:function(t){}}},[i("div",{staticClass:"header ui-flex justify-space-between"},[i("div",[i("h2",[i("strong",[t._v("订单日期：")]),i("span",[t._v(t._s(s.date))])]),i("h4",[i("strong",[t._v("订单编号：")]),i("span",[t._v(t._s(s.orderNo))])])]),i("em",[t._v(t._s(s.statusDesc))])]),i("div",{staticClass:"list"},t._l(s.list,function(s,e){return i("dl",{staticClass:"ui-flex justify-start align-center",on:{click:function(i){return t.pageToDetail(s)}}},[i("dt",[i("img",{attrs:{src:s.img}})]),i("dd",[t._v(t._s(s.desc))])])}),0),i("div",{staticClass:"amount ui-flex justify-end align-center"},[i("span",[t._v("共"+t._s(s.count)+"件商品")]),i("em",[t._v("总金额：")]),i("strong",[t._v(t._s(s.account))])])])}),0)])},n=[],c=i("f8b7"),a={name:"OrderAll",data:function(){return{list:[]}},created:function(){this.list=Object(c["a"])()},methods:{pageToDetail:function(t){t.pid&&this.$router.push({path:"/productDetail/".concat(t.pid),query:{isHiddenFooter:!0}})}},components:{}},u=a,r=(i("16fe"),i("fc05")),o=Object(r["a"])(u,e,n,!1,null,"f29e3872",null);s["default"]=o.exports},f8b7:function(t,s,i){"use strict";var e=[{date:"2019/02/28  07:06",orderNo:"5181114893200493",status:1,statusDesc:"已收货",count:2,account:"1499元",list:[{img:"https://i1.mifile.cn/a1/pms_1537324049.78754265!180x1800.jpg",pid:"10000117",desc:"小米8 青春 全网通版 6GB内存 梦幻蓝 128GB"},{img:"https://i1.mifile.cn/a1/pms_1501236937.96732594!180x1800.jpg",pid:null,desc:"米粉卡日租卡"}]},{date:"2019/02/29  12:54",orderNo:"1171031331126934",status:2,statusDesc:"待付款",count:1,account:"3199元",list:[{img:"https://i8.mifile.cn/b2c-mimall-media/54a2e9f071bb886ce7447c56f095f398!360x360.jpg",pid:"10000122",desc:"黑鲨游戏手机 Helo 双液冷 骁龙845 一键Shark模式"}]},{date:"2019/02/29  08:22",orderNo:"1160630489485846",status:3,statusDesc:"待收货",count:1,account:"549元",list:[{img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aeda380e26cde12c8a8c259c6870c14d.jpg?thumb=1&w=720&h=610",pid:"10000110",desc:"红米6A 全网通 樱花粉 16GB"}]},{date:"2019/02/29  08:45",orderNo:"1160630489485345",status:3,statusDesc:"待收货",count:2,account:"1499元",list:[{img:"https://i1.mifile.cn/a1/pms_1537324049.78754265!180x1800.jpg",pid:"10000117",desc:"小米8 青春 全网通版 6GB内存 梦幻蓝 128GB"},{img:"https://i1.mifile.cn/a1/pms_1501236937.96732594!180x1800.jpg",pid:null,desc:"米粉卡日租卡"}]}],n=e;i.d(s,"a",function(){return c}),i.d(s,"b",function(){return a}),i.d(s,"c",function(){return u});var c=function(){return n},a=function(){return n.filter(function(t){return 2==t.status})},u=function(){return n.filter(function(t){return 3==t.status})}}}]);
//# sourceMappingURL=chunk-84b31036.c35639ab.js.map