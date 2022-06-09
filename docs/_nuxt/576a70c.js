(window.webpackJsonp=window.webpackJsonp||[]).push([[21,11,12],{266:function(e,t,n){"use strict";n.r(t);n(134),n(45),n(106);var r=n(2).default.extend({name:"InputFrame",props:{id:{type:String,required:!1},value:{type:String|Object,default:function(){return null},required:!1},label:{type:String,default:"",required:!1},type:{type:String,default:"text",required:!1},options:{type:Array,default:function(){return[]},required:!1}},data:function(){return{originValue:null}},watch:{value:function(e,t){console.log("watch value"),this.originValue=e}},computed:{ShowValue:function(){var e;return"checkbox"===this.type?null===(e=this.originValue)||void 0===e?void 0:e.map((function(e){return"".concat(e.label,": ").concat(e.checked)})).join("<br>"):(this.type,this.originValue)}},created:function(){this.originValue=this.value}}),o=n(42),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.id}},[e._v(e._s(e.label)+" ")]),e._v(" "),"text"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.originValue,expression:"originValue"}],staticClass:"border-solid border-2 border-gray-600 rounded-md",attrs:{type:"text"},domProps:{value:e.originValue},on:{input:function(t){t.target.composing||(e.originValue=t.target.value)}}}):"checkbox"===e.type?n("div",e._l(e.originValue,(function(t,r){return n("span",{key:r,staticClass:"form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"val.checked"}],attrs:{type:"checkbox",id:t.id},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:function(n){var r=t.checked,o=n.target,l=!!o.checked;if(Array.isArray(r)){var c=e._i(r,null);o.checked?c<0&&e.$set(t,"checked",r.concat([null])):c>-1&&e.$set(t,"checked",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(t,"checked",l)}}}),e._v(" "),n("label",{attrs:{for:t.id}},[e._v(e._s(t.label)+" ")])])})),0):"select"===e.type?n("dev",[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"mb-3 xl:w-96"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.originValue,expression:"originValue"}],staticClass:"\n            form-select\n            appearance-none\n            block\n            w-full\n            px-3\n            py-1.5\n            text-base\n            font-normal\n            text-gray-700\n            bg-white bg-clip-padding bg-no-repeat\n            border border-solid border-gray-300\n            rounded\n            transition\n            ease-in-out\n            m-0\n            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none\n          ",attrs:{"aria-label":"Default select example"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.originValue=t.target.multiple?n:n[0]}}},e._l(e.options,(function(option,t){return n("option",{key:t},[e._v(e._s(option))])})),0)])])]):e._e(),e._v(" "),n("div",[e._m(0),e._v(" "),n("br"),e._v("\n    Now value:\n    "),n("span",{domProps:{innerHTML:e._s(e.ShowValue)}})])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("\n      Init value:\n      "),n("span",{domProps:{innerHTML:e._s(e.ShowValue)}})])}],!1,null,null,null);t.default=component.exports},272:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(266),l=r.default.extend({components:{InputFrame:o.default},name:"Card",props:{inputText:{type:String,required:!0},inputCheckbox:{type:Array,required:!0}}}),c=n(42),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},[e._m(0),e._v(" "),n("input-frame",{attrs:{type:"text",label:"Inpu Text",value:e.inputText}}),e._v(" "),n("input-frame",{attrs:{type:"checkbox",label:"Inpu Checkbox",value:e.inputCheckbox}})],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h5",{staticClass:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},[e._v("Input values")])])}],!1,null,null,null);t.default=component.exports},293:function(e,t,n){"use strict";n.r(t);n(134),n(45),n(106);var r=n(2),o=n(272),l=r.default.extend({layout:"default",components:{Card:o.default},name:"Prop",computed:{ShowInputCheckbox:function(){var e;return null===(e=this.inputCheckbox)||void 0===e?void 0:e.map((function(e){return"<".concat(e.label,": ").concat(e.checked,">")})).join(" - ")}},data:function(){return{inputText:"Default text",inputCheckbox:[]}},mounted:function(){for(var i=1;i<5;i++)this.inputCheckbox.push({id:"value".concat(i),label:"Value".concat(i),checked:i%2==0})}}),c=n(42),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"m-6 p-4 border-solid border-2 border-gray-600 rounded-md"},[n("h2",{staticClass:"font-bold text-purple-900"},[e._v("Prop and Emit")]),e._v(" "),n("card",{attrs:{"input-text":e.inputText,inputCheckbox:e.inputCheckbox}})],1),e._v(" "),n("div",[n("h5",{staticClass:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},[e._v("Props values")]),e._v("\n    Text: "+e._s(e.inputText)+"\n    "),n("br"),e._v("\n    Checkbox: "+e._s(e.ShowInputCheckbox)+"\n    "),n("br")])])}),[],!1,null,null,null);t.default=component.exports}}]);