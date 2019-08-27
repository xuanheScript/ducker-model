!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lodash/mapValues"),require("lodash/set"),require("lodash/get"),require("lodash/isNumber"),require("lodash/isString"),require("lodash/isArray"),require("lodash/isDate"),require("lodash/isBoolean"),require("manba"),require("lodash")):"function"==typeof define&&define.amd?define(["exports","lodash/mapValues","lodash/set","lodash/get","lodash/isNumber","lodash/isString","lodash/isArray","lodash/isDate","lodash/isBoolean","manba","lodash"],t):(e=e||self,t(e.ducker={},e._mapValues,e._set,e._get2,e._isNumber,e._isString,e._isArray,e._isDate,e._isBoolean,e._manba,e.lodash))}(this,function(e,t,r,a,o,u,n,i,l,s,c){"use strict";function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){h(e,t,r[t])})}return e}t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,a=a&&a.hasOwnProperty("default")?a.default:a,o=o&&o.hasOwnProperty("default")?o.default:o,u=u&&u.hasOwnProperty("default")?u.default:u,n=n&&n.hasOwnProperty("default")?n.default:n,i=i&&i.hasOwnProperty("default")?i.default:i,l=l&&l.hasOwnProperty("default")?l.default:l,s=s&&s.hasOwnProperty("default")?s.default:s;var v={S:10,B:100,Q:1e3,w:1e4},b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y(this,e),this._attributes=d({},t),this.replacedKeyFromPropertyName=d({},r)}return f(e,[{key:"objectWithKeyValues",value:function(e){return c.isPlainObject(e)||this.error("objectWithKeyValues: array dataSource type error"),this.parse(e)}},{key:"objectArrayWithKeyValuesArray",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(c.isArray(t))return t.map(function(t){return e.objectWithKeyValues(t)});this.error("objectArrayWithKeyValuesArray: array dataSource type error")}},{key:"parse",value:function(){var r=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this._attributes,function(t,o){var i,l,s,y,p,f,h=r.replacedKeyFromPropertyName[o];if(c.isPlainObject(t)){var d=t._modelTypeKey;if(!d)return new e(t,h).objectWithKeyValues(a);switch(d){case"valueForPath":f=new t.type,i=t.path;break;case"valueWithArray":f=new Array;break;case"valueForPathWithArray":f=new Array,i=t.path;break;default:r.error("modelTypeKey: [".concat(o,"] type error"))}}else c.isFunction(t)?f=new t:r.error("property: [".concat(o,"] type error"));h||i?u(h)?i=h:c.isPlainObject(h)&&(i=h.property,l=h.format,s=h.computed,y=h.unit,p=h.defaultValue):i=o,i||r.error("replacedKeyFromPropertyName: [".concat(o,"] type error")),f||r.error("property: [".concat(o,"] type error"));var v,b=r._get({data:a,path:i,computed:s});return v=Object.prototype.toString.call(b)===Object.prototype.toString.call(f)||n(i)?r.compose({distValue:b,type:f,unit:y,format:l,computed:s}):r.getDefaultValue(p,f),c.isArray(f)?c.isPlainObject(t.type)?new e(t.type,h.children).objectArrayWithKeyValuesArray(v):r.checkNoObjectChildren({type:t.type,data:v}):v})}},{key:"checkNoObjectChildren",value:function(e){var t=this,r=e.type;return e.data.map(function(e){var a=new r;return Object.prototype.toString.call(a)===Object.prototype.toString.call(e)?e:t.getDefaultValue(void 0,a)})}},{key:"traverse",value:function(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!a)return this;var o={};return t(this._attributes,function(t,u){var n=t.property,i=t.unit,l=new t.type,s=(t.format,a[u]);if(s){var c=e.discompose({sourceValue:s,unit:i,key:u,type:l});r(o,n,c)}}),o}},{key:"compose",value:function(e){var t=e.distValue,r=e.type,a=e.unit,o=e.format,u=void 0===o?"l":o,n=e.computed;return a&&(t=Number.parseFloat(t/v[a]).toFixed(2)),i(r)&&(t=s(parseFloat(t)).format(u)),n&&(t=n(t)),t}},{key:"discompose",value:function(e){var t=e.sourceValue,r=e.unit,a=e.key,o=e.type;return i(o)&&(t=s(t).time()),r&&(t*=v[r]),t||this.get(a)}},{key:"set",value:function(e,t){this[e]=t}},{key:"get",value:function(e,t){return this[e]}},{key:"_get",value:function(e){var t=e.data,r=e.path,o=e.computed;if(n(r)&&!o)return this.error("path定义为数组路径，computed属性必须定义");if(n(r)&&o){var u=[];return r.forEach(function(e,r){u.push(a(t,e))}),u}return n(r)?void 0:a(t,r)}},{key:"getDefaultValue",value:function(e,t){return void 0===e?this.setDefaultValue(t):e}},{key:"setDefaultValue",value:function(e){return o(e)?value=0:u(e)?value="":n(e)?value=[]:l(e)?value=!0:i(e)?value=Date.now():c.isPlainObject(e)?value=Date.now():c.isNull(e)&&(value=null),value}},{key:"error",value:function(e){throw new Error(e)}}]),e}(),m=function(e,t){return{_modelTypeKey:"valueForPath",type:e,path:t}},w=function(e){return{_modelTypeKey:"valueWithArray",type:e}},O=function(e,t){return{_modelTypeKey:"valueForPathWithArray",type:e,path:t}};e.default=b,e.valueForPath=m,e.valueForPathWithArray=O,e.valueWithArray=w,Object.defineProperty(e,"__esModule",{value:!0})});
