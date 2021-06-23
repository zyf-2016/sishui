(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wuc-tab/wuc-tab"],{"12bb":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,n){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};n.default=u},"28b3":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var r=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"3fe2":function(t,n,e){"use strict";var u=e("f57f"),r=e.n(u);r.a},"7bf7":function(t,n,e){"use strict";e.r(n);var u=e("28b3"),r=e("e032");for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);e("3fe2");var f,c=e("f0c5"),i=Object(c["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);n["default"]=i.exports},e032:function(t,n,e){"use strict";e.r(n);var u=e("12bb"),r=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=r.a},f57f:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wuc-tab/wuc-tab-create-component',
    {
        'components/wuc-tab/wuc-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7bf7"))
        })
    },
    [['components/wuc-tab/wuc-tab-create-component']]
]);
