(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{292:function(e,t,n){"use strict";n.r(t);var r=n(134),l=n(135),o=n(274),c=n(275),d=n(271),m=n(29),f=(n(74),n(18),n(272),n(273));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var l=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(e,t,n,desc){var r,l=arguments.length,o=l<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(o=(l<3?r(o):l>3?r(t,n,o):r(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o},x=function(e){Object(o.a)(n,e);var t=v(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).inputValue=null,e}return Object(l.a)(n,[{key:"input",value:function(){return this.inputValue}},{key:"WatchValue",value:function(){this.inputValue=this.value}},{key:"WatchInputValue",value:function(){this.input()}}]),n}(f.e);y([Object(f.c)()],x.prototype,"id",void 0),y([Object(f.c)()],x.prototype,"label",void 0),y([Object(f.c)()],x.prototype,"value",void 0),y([Object(f.c)({default:"text"})],x.prototype,"type",void 0),y([Object(f.c)()],x.prototype,"options",void 0),y([Object(f.c)()],x.prototype,"unit",void 0),y([Object(f.c)({default:"horizontal"})],x.prototype,"direction",void 0),y([Object(f.b)()],x.prototype,"input",null),y([Object(f.f)("value")],x.prototype,"WatchValue",null),y([Object(f.f)("inputValue")],x.prototype,"WatchInputValue",null);var V=x=y([Object(f.a)({name:"InputForm",components:{}})],x),h=n(23),component=Object(h.a)(V,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:"form-"+e.direction},[e.label?n("label",{staticClass:"w-16 pr-2",attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),e._v(" "),n("div",["checkbox"!==e.type||"text"!==e.type&&"number"!==e.type?"radio"!==e.type||"text"!==e.type&&"number"!==e.type?"text"===e.type||"number"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{id:e.id,type:e.type},domProps:{value:e.inputValue},on:{input:function(t){t.target.composing||(e.inputValue=t.target.value)}}}):"select"===e.type?n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"form-select appearance-none block m-0 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",attrs:{id:e.id},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputValue=t.target.multiple?n:n[0]}}},e._l(e.options,(function(option,t){return n("option",{key:t,domProps:{value:option}},[e._v("\n        "+e._s(option)+"\n      ")])})),0):e._e():n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{id:e.id,type:"radio"},domProps:{checked:e._q(e.inputValue,null)},on:{change:function(t){e.inputValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{id:e.id,type:"checkbox"},domProps:{checked:Array.isArray(e.inputValue)?e._i(e.inputValue,null)>-1:e.inputValue},on:{change:function(t){var n=e.inputValue,r=t.target,l=!!r.checked;if(Array.isArray(n)){var o=e._i(n,null);r.checked?o<0&&(e.inputValue=n.concat([null])):o>-1&&(e.inputValue=n.slice(0,o).concat(n.slice(o+1)))}else e.inputValue=l}}}),e._v(" "),e._t("side")],2)])}),[],!1,null,null,null);t.default=component.exports},295:function(e,t,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("606a1084",content,!0,{sourceMap:!1})},304:function(e,t,n){var r=n(2),l=n(305);r({target:"Number",stat:!0,forced:Number.parseInt!=l},{parseInt:l})},305:function(e,t,n){var r=n(5),l=n(4),o=n(3),c=n(13),d=n(276).trim,m=n(269),f=r.parseInt,v=r.Symbol,y=v&&v.iterator,x=/^[+-]?0x/i,V=o(x.exec),h=8!==f(m+"08")||22!==f(m+"0x16")||y&&!l((function(){f(Object(y))}));e.exports=h?function(e,t){var n=d(c(e));return f(n,t>>>0||(V(x,n)?16:10))}:f},307:function(e,t,n){"use strict";n(295)},308:function(e,t,n){var r=n(24)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.grid{\n  display:grid\n}\n.contents-group{\n  display:inline-flex;\n  height:100px;\n  place-items:center\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},325:function(e,t,n){"use strict";n.r(t);n(45),n(304),n(294);var r=n(1),l=n(292),o=r.default.extend({components:{InputForm:l.default},layout:"default",name:"ComponentPage",head:function(){return{title:this.$options.name,meta:[{hid:"description",name:"description",content:"入力コンポーネントサンプル"},{hid:"og:title",name:"og:title",content:this.$options.name},{hid:"og:description",name:"og:description",content:"入力コンポーネントサンプル"}]}},data:function(){return{textValue1:"",textValue2:"",numberValue1:0,numberValue2:0,result:0,selectValue1:null,selectValue2:null,options:["スコティッシュフォールド","アメリカンショートヘア","ラグドール","ブリティッシュショートヘア","ロシアンブルー","マンチカン","ベンガル猫","シャム猫"]}},methods:{onClickOpt:function(){this.result=Number.parseInt(this.numberValue1)+Number.parseInt(this.numberValue2)}}}),c=(n(307),n(23)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid mx-8 px-4 p-6 w-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},[n("div",{staticClass:"contents-group"},[n("input-form",{staticClass:"mx-4",attrs:{id:"input-text1",type:"text",label:"Text",direction:"horizontal"},model:{value:e.textValue1,callback:function(t){e.textValue1=t},expression:"textValue1"}}),e._v(" "),n("input-form",{staticClass:"mx-4",attrs:{id:"input-text2",type:"text",label:"Text",direction:"vertical"},model:{value:e.textValue2,callback:function(t){e.textValue2=t},expression:"textValue2"}})],1),e._v(" "),n("div",{staticClass:"contents-group"},[n("input-form",{staticClass:"mx-4",attrs:{id:"input-select1",type:"select",label:"Select",direction:"horizontal",options:e.options},model:{value:e.selectValue1,callback:function(t){e.selectValue1=t},expression:"selectValue1"}}),e._v(" "),n("input-form",{staticClass:"mx-4",attrs:{id:"input-select2",type:"select",label:"Select",direction:"vertical",options:e.options},model:{value:e.selectValue2,callback:function(t){e.selectValue2=t},expression:"selectValue2"}})],1),e._v(" "),n("div",{staticClass:"contents-group"},[n("input-form",{staticClass:"mx-4",attrs:{id:"input-number1",type:"number",label:"Addition"},model:{value:e.numberValue1,callback:function(t){e.numberValue1=t},expression:"numberValue1"}},[n("template",{slot:"side"},[n("span",{staticClass:"pl-8"},[e._v("+")])])],2),e._v(" "),n("input-form",{staticClass:"mx-4",attrs:{id:"input-number2",type:"number",label:""},model:{value:e.numberValue2,callback:function(t){e.numberValue2=t},expression:"numberValue2"}},[n("template",{slot:"side"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold my-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",attrs:{type:"button"},on:{click:e.onClickOpt}},[e._v("\n          =\n        ")])])],2),e._v(" "),n("span",[e._v(e._s(e.result))])],1),e._v(" "),n("input-form",{staticClass:"mx-4",attrs:{id:"input-number1",type:"number",label:"Number"}},[n("template",{slot:"side"},[n("span",{staticClass:"pl-8"},[e._v("cm")])])],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{InputForm:n(292).default})}}]);