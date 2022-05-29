(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5,6,7],{247:function(n,e,t){"use strict";t.r(e),t.d(e,"Dictionary",(function(){return r})),t.d(e,"Chain",(function(){return c}));var l=t(133),o=t(134),r=(t(18),t(33),t(104),t(132),function(){function n(){Object(l.a)(this,n),this.keys=[],this.values=[]}return Object(o.a)(n,[{key:"set",value:function(n,e){if(null!=n){var t=this.keys.indexOf(n);-1!=t&&(this.values[t]=e),console.log("----------------------"),console.log("On set   key: ".concat(n,"  value: ").concat(e)),console.log(this.keys),console.log(this.values),console.log("----------------------")}}},{key:"push",value:function(n,e){if(null!=n){var t=this.keys.indexOf(n);-1==t?(this.keys.push(n),this.values.push(e)):this.values[t]=e,console.log("----------------------"),console.log("On push  key: ".concat(n,"  value: ").concat(e)),console.log(this.keys),console.log(this.values),console.log("----------------------")}}},{key:"join",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;if(e){var t=this.values.indexOf(e);if(null===t||-1==t)return"";for(var l="",i=0;i<t;i++)l="".concat(l).concat(n).concat(this.values[i]);return l}return this.values.join(n)}}]),n}()),c=Object(o.a)((function n(e,label,t){Object(l.a)(this,n),this.id="",this.inputValue="",this.label="",this.id=null!=e?e:"",this.label=null!=label?label:"",this.inputValue=null!=t?t:""}));c.names=new r},248:function(n,e,t){"use strict";t.r(e);t(43);var l=t(2),o=t(247),r=l.a.extend({name:"ChainFirst",data:function(){return{chain:new o.Chain("first-id","First","")}},methods:{InputFirstValue:function(n){o.Chain.names.set(this.$options.name,n.target.value)}},mounted:function(){o.Chain.names.push(this.$options.name,this.chain.inputValue)}}),c=t(42),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",[t("label",{attrs:{for:n.chain.id}},[n._v(n._s(n.chain.label))]),n._v(" "),t("span",[n._v(":")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.chain.inputValue,expression:"chain.inputValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{id:n.chain.id,type:"text"},domProps:{value:n.chain.inputValue},on:{input:[function(e){e.target.composing||n.$set(n.chain,"inputValue",e.target.value)},n.InputFirstValue]}})])}),[],!1,null,null,null);e.default=component.exports},249:function(n,e,t){"use strict";t.r(e);t(43);var l=t(248),o=t(247),r=l.default.extend({components:{ChainFirst:l.default},name:"ChainMiddle",data:function(){return{chain:new o.Chain("middle-id","Middle","")}},watch:{"chain.inputValue":function(){console.log("Chain middle name: ".concat(this.chain.inputValue)),o.Chain.names.set(this.$options.name,this.chain.inputValue)}},methods:{InputValueMiddle:function(n){console.log("Called ".concat(this.$options.name)),o.Chain.names.set(this.$options.name,n.target.value)}},mounted:function(){o.Chain.names.push(this.$options.name,this.chain.inputValue)}}),c=t(42),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",[t("chain-first"),n._v(" "),t("label",{attrs:{for:n.chain.id}},[n._v(n._s(n.chain.label))]),n._v(" "),t("span",[n._v(":")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.chain.inputValue,expression:"chain.inputValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{id:n.chain.id,type:"text"},domProps:{value:n.chain.inputValue},on:{input:[function(e){e.target.composing||n.$set(n.chain,"inputValue",e.target.value)},function(e){n.InputValueMiddle}]}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChainFirst:t(248).default})},250:function(n,e,t){"use strict";t.r(e);t(43),t(132);var l=t(249),o=t(247),r=l.default.extend({components:{ChainMiddle:l.default},name:"ChainLast",data:function(){return{chain:new o.Chain("chain-last","Last",""),fullName:""}},methods:{InputValue:function(n){o.Chain.names.set(this.$options.name,n.target.value)},SetName:function(){console.log("test"),this.$data.fullName=o.Chain.names.join("-")}},mounted:function(){o.Chain.names.push(this.$options.name,this.chain.inputValue)}}),c=t(42),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[t("chain-middle"),n._v(" "),t("label",{attrs:{for:n.chain.id}},[n._v(n._s(n.chain.label))]),n._v(" "),t("span",[n._v(":")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.chain.inputValue,expression:"chain.inputValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{id:n.chain.id,type:"text"},domProps:{value:n.chain.inputValue},on:{input:[function(e){e.target.composing||n.$set(n.chain,"inputValue",e.target.value)},n.InputValue]}})],1),n._v(" "),t("button",{staticClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",on:{click:n.SetName}},[n._v("\n    Set\n  ")]),n._v("\n  Name: "+n._s(n.fullName)+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChainMiddle:t(249).default})},271:function(n,e,t){"use strict";t.r(e);var l=t(2),o=t(250),r=l.a.extend({components:{ChainLast:o.default},name:"ChainPage"}),c=t(42),component=Object(c.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",{staticClass:"m-6 p-4 border-solid border-2 border-gray-600 rounded-md"},[t("h2",{staticClass:"font-bold text-purple-900"},[n._v("Chain data")]),n._v(" "),t("chain-last")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ChainLast:t(250).default})}}]);