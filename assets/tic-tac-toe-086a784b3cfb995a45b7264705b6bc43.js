"use strict"
define("tic-tac-toe/app",["exports","@ember/application","ember-resolver","ember-load-initializers","tic-tac-toe/config/environment"],(function(e,t,r,i,n){function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(...e){super(...e),o(this,"modulePrefix",n.default.modulePrefix),o(this,"podModulePrefix",n.default.podModulePrefix),o(this,"Resolver",r.default)}}e.default=a,(0,i.default)(a,n.default.modulePrefix)})),define("tic-tac-toe/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("tic-tac-toe/components/app",["exports","@ember/component","@ember/component/template-only","@ember/template-factory"],(function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const n=(0,i.createTemplateFactory)({id:"DXCQo92+",block:'[[[8,[39,0],null,null,[["default"],[[[[1,"\\n    "],[18,1,null],[1,"\\n"]],[]]]]],[1,"\\n"],[10,"main"],[14,0,"mdl-layout__content"],[12],[1,"\\n    "],[10,0],[14,0,"page-content"],[12],[1,"\\n        "],[18,2,null],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],["&nav","&default"],false,["nav-bar","yield","main","div"]]',moduleName:"tic-tac-toe/components/app.hbs",isStrictMode:!1})
e.default=(0,t.setComponentTemplate)(n,(0,r.default)())})),define("tic-tac-toe/components/gameboard",["exports","@ember/component","@glimmer/component","@ember/object","@ember/template-factory"],(function(e,t,r,i,n){var o
function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,i,n){var o={}
return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer?(Object.defineProperty(e,t,o),null):o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const u=(0,n.createTemplateFactory)({id:"7QR5S5SZ",block:'[[[10,0],[14,0,"mdl-grid mdl-grid--no-spacing"],[14,1,"gameboard"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["cells"]]],null]],null],null,[[[42,[28,[37,2],[[28,[37,2],[[30,1]],null]],null],null,[[[1,"            "],[8,[39,3],null,[["@markerStyle","@cellStyle","@disabled","@icon","@onClick"],[[30,0,["markerStyle"]],[30,0,["cellStyle"]],[28,[30,0,["cellDisabled"]],[[30,3]],null],[28,[30,0,["cellIcon"]],[[30,3]],null],[28,[37,4],[[30,0,["placeMarker"]],[30,2],[30,4]],null]]],null],[1,"\\n"]],[3,4]],null]],[1,2]],null],[1,"\\n"],[41,[30,0,["status"]],[[[1,"        "],[8,[39,6],null,[["@status"],[[30,0,["status"]]]],null],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["gameOver"]],[[[1,"        "],[8,[39,7],null,[["@gameOver","@reset"],[[30,0,["gameOver"]],[30,0,["reset"]]]],null],[1,"\\n"]],[]],null],[13],[1,"\\n"]],["cells","i","cell","j"],false,["div","each","-track-array","gameboard/cell","fn","if","gameboard/status","gameboard/game-over"]]',moduleName:"tic-tac-toe/components/gameboard.hbs",isStrictMode:!1})
let c=e.default=(l((o=class extends r.default{constructor(...e){super(...e),a(this,"cellDisabled",(e=>!!this.args.gameOver||(this.args.current!=this.args.player||""!==e))),a(this,"cellIcon",(e=>"X"===e?"close":"O"===e?"circle":""))}get cells(){return this.args.cells}get status(){return this.args.status}get gameOver(){return this.args.gameOver}get player(){return this.args.player}get computer(){return this.args.computer}placeMarker(e,t){this.args.current==this.args.player&&(this.args.updateCell(e,t,this.args.player),this.args.update())}get cellStyle(){return`width: calc(100%/${this.args.M}); height: calc(100%/${this.args.N})`}get markerStyle(){return`font-size: min(100vw / ${this.args.M} - 1em, 100vh / ${this.args.N} - 1em`}reset(){location.reload()}}).prototype,"placeMarker",[i.action],Object.getOwnPropertyDescriptor(o.prototype,"placeMarker"),o.prototype),l(o.prototype,"reset",[i.action],Object.getOwnPropertyDescriptor(o.prototype,"reset"),o.prototype),o);(0,t.setComponentTemplate)(u,c)})),define("tic-tac-toe/components/gameboard/cell",["exports","@ember/component","@ember/component/template-only","@ember/template-factory"],(function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const n=(0,i.createTemplateFactory)({id:"+/fHr3zp",block:'[[[10,0],[14,0,"mdl-cell cell"],[15,5,[30,1]],[12],[1,"\\n    "],[11,"button"],[16,"disabled",[30,2]],[24,0,"mdl-button"],[24,4,"button"],[4,[38,2],["click",[30,3]],null],[12],[1,"\\n        "],[10,"i"],[15,5,[30,4]],[15,0,[29,["material-icons-outlined ",[30,5]]]],[12],[1,[30,5]],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],["@cellStyle","@disabled","@onClick","@markerStyle","@icon"],false,["div","button","on","i"]]',moduleName:"tic-tac-toe/components/gameboard/cell.hbs",isStrictMode:!1})
e.default=(0,t.setComponentTemplate)(n,(0,r.default)())})),define("tic-tac-toe/components/gameboard/game-over",["exports","@ember/component","@ember/component/template-only","@ember/template-factory"],(function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const n=(0,i.createTemplateFactory)({id:"BBl8dIhk",block:'[[[10,"dialog"],[14,0,"mdl-dialog"],[14,"open",""],[12],[1,"\\n  "],[10,0],[14,0,"mdl-dialog__content"],[12],[1,"\\n    "],[10,"h2"],[12],[1,[30,1]],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[14,0,"mdl-dialog__actions mdl-dialog__actions"],[12],[1,"\\n    "],[11,"button"],[24,0,"mdl-button"],[24,4,"button"],[4,[38,4],["click",[30,2]],null],[12],[1,"Play Again"],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["@gameOver","@reset"],false,["dialog","div","h2","button","on"]]',moduleName:"tic-tac-toe/components/gameboard/game-over.hbs",isStrictMode:!1})
e.default=(0,t.setComponentTemplate)(n,(0,r.default)())})),define("tic-tac-toe/components/gameboard/status",["exports","@ember/component","@ember/component/template-only","@ember/template-factory"],(function(e,t,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const n=(0,i.createTemplateFactory)({id:"95bfwVnv",block:'[[[10,0],[14,1,"status"],[12],[1,[30,1]],[13],[1,"\\n"]],["@status"],false,["div"]]',moduleName:"tic-tac-toe/components/gameboard/status.hbs",isStrictMode:!1})
e.default=(0,t.setComponentTemplate)(n,(0,r.default)())})),define("tic-tac-toe/components/nav-bar",["exports","@ember/component","@glimmer/component","@ember/object","tic-tac-toe/config/environment","@ember/template-factory"],(function(e,t,r,i,n,o){var a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const l=(0,o.createTemplateFactory)({id:"Dkj3RP9y",block:'[[[10,"header"],[14,0,"mdl-layout__header"],[12],[1,"\\n  "],[10,0],[14,0,"mdl-layout__header-row"],[12],[1,"\\n"],[1,"    "],[10,1],[14,0,"mdl-layout-title"],[12],[1,"Tic Tac Toe"],[13],[1,"\\n    "],[10,0],[14,0,"mdl-layout-spacer"],[12],[13],[1,"\\n\\n"],[1,"    "],[10,"nav"],[14,0,"mdl-navigation"],[12],[1,"\\n      "],[18,1,null],[1,"\\n\\n"],[1,"      "],[8,[39,5],[[24,0,"mdl-navigation__link"],[24,1,"newgame-nav"],[4,[38,6],["click",[30,0,["reload"]]],null]],[["@route"],["index"]],[["default"],[[[[1,"New Game"]],[]]]]],[1,"\\n      "],[8,[39,5],[[24,0,"mdl-navigation__link"],[24,1,"about-nav"]],[["@route"],["about"]],[["default"],[[[[1,"About"]],[]]]]],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["&default"],false,["header","div","span","nav","yield","link-to","on"]]',moduleName:"tic-tac-toe/components/nav-bar.hbs",isStrictMode:!1})
let u=e.default=(a=class extends r.default{reload(){"/"===window.location.pathname&&"test"!==n.default.environment&&location.reload()}},c=a.prototype,s="reload",d=[i.action],p=Object.getOwnPropertyDescriptor(a.prototype,"reload"),f=a.prototype,m={},Object.keys(p).forEach((function(e){m[e]=p[e]})),m.enumerable=!!m.enumerable,m.configurable=!!m.configurable,("value"in m||m.initializer)&&(m.writable=!0),m=d.slice().reverse().reduce((function(e,t){return t(c,s,e)||e}),m),f&&void 0!==m.initializer&&(m.value=m.initializer?m.initializer.call(f):void 0,m.initializer=void 0),void 0===m.initializer&&Object.defineProperty(c,s,m),a)
var c,s,d,p,f,m;(0,t.setComponentTemplate)(l,u)})),define("tic-tac-toe/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("tic-tac-toe/controllers/index",["exports","@ember/controller","@glimmer/tracking","@ember/object"],(function(e,t,r,i){var n,o,a,l,u,c,s,d,p,f,m,b,h
function v(e,t,r,i){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(i):void 0})}function g(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t,r,i,n){var o={}
return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,i){return i(e,t,r)||r}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer?(Object.defineProperty(e,t,o),null):o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(n=class extends t.default{constructor(...e){super(...e),v(this,"m",o,this),v(this,"n",a,this),v(this,"k",l,this),v(this,"M",u,this),v(this,"N",c,this),v(this,"K",s,this),v(this,"cells",d,this),v(this,"current",p,this),v(this,"player",f,this),v(this,"computer",m,this),v(this,"gameOver",b,this),v(this,"status",h,this),g(this,"offsets",[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]])}get unoccupiedCells(){return this.cells.map(((e,t)=>e.map(((e,r)=>[t,r,e])))).flat().filter((([,,e])=>!e))}updateCell(e,t,r){this.cells=this.cells.map(((i,n)=>i.map(((i,o)=>e===n&&t===o?r:i))))}update(e=!0){e&&this.passTurn(),this.gameOver=this.getGameProgress(),""!==this.gameOver?this.status="":this.current===this.player?this.status="It's your turn!":this.current===this.computer?this.status="Waiting for your opponent to make their move . . .":this.status="",document.title=this.status,""===this.gameOver&&this.current===this.computer&&this.computerTurn()}getGameProgress(){for(let e=0;e<this.cells.length;e++){const t=this.cells[e]
for(let r=0;r<t.length;r++){const t=this.cells[e][r]
if(""!==t)for(let i=0;i<this.offsets.length;i++){const n=this.offsets[i],o=this.checkForWinner([e,r],n,t)
if(null!=o)return o===this.player?"You Win!":"You Lost :("}}}return 0===this.unoccupiedCells.length?"Cat":""}checkForWinner(e,t,r,i=1){if(console.debug(typeof this.K),i===this.K)return r
const[n,o]=e,[a,l]=t,[u,c]=[n+a,o+l]
if(u<0||u>=this.cells.length)return null
if(c<0||c>=this.cells[u].length)return null
return this.cells[u][c]===r?this.checkForWinner([u,c],t,r,i+1):null}passTurn(){this.current="X"===this.current?"O":"X"}computerTurn(e=600){const t=this.unoccupiedCells
0!==t.length&&(this.computerBusy=setTimeout((()=>{const e=Math.floor(Math.random()*t.length),[r,i]=t[e]
this.updateCell(r,i,this.computer),this.update()}),e))}},o=y(n.prototype,"m",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),a=y(n.prototype,"n",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),l=y(n.prototype,"k",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),u=y(n.prototype,"M",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),c=y(n.prototype,"N",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),s=y(n.prototype,"K",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),d=y(n.prototype,"cells",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[[]]}}),p=y(n.prototype,"current",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=y(n.prototype,"player",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=y(n.prototype,"computer",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=y(n.prototype,"gameOver",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),h=y(n.prototype,"status",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),y(n.prototype,"updateCell",[i.action],Object.getOwnPropertyDescriptor(n.prototype,"updateCell"),n.prototype),y(n.prototype,"update",[i.action],Object.getOwnPropertyDescriptor(n.prototype,"update"),n.prototype),n)})),define("tic-tac-toe/data-adapter",["exports","@ember/array","@ember/debug/data-adapter","@ember/object/observers","@ember/service","@embroider/macros","@ember-data/request-utils/string","@ember-data/store"],(function(e,t,r,i,n,o,a,l){function u(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=Object.defineProperty;((e,t)=>{for(var r in t)c(e,r,{get:t[r],enumerable:!0})})({},{c:()=>h,f:()=>d,g:()=>p,i:()=>b,m:()=>f,n:()=>m,p:()=>v})
var s=new WeakMap
function d(e,t,r,i){return p(e.prototype,t,r,i)}function p(e,t,r,i){let n={configurable:!0,enumerable:!0,writable:!0,initializer:null}
i&&(n.initializer=i)
for(let o of r)n=o(e,t,n)||n
void 0===n.initializer?Object.defineProperty(e,t,n):function(e,t,r){let i=s.get(e)
i||(i=new Map,s.set(e,i)),i.set(t,r)}(e,t,n)}function f({prototype:e},t,r){return m(e,t,r)}function m(e,t,r){let i={...Object.getOwnPropertyDescriptor(e,t)}
for(let n of r)i=n(e,t,i)||i
void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(e):void 0,i.initializer=void 0),Object.defineProperty(e,t,i)}function b(e,t){let r=function(e,t){let r=e.prototype
for(;r;){let e=s.get(r)?.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(e):void 0})}function h(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function v(e,t){for(let[r,i,n]of t)"field"===r?g(e,i,n):m(e,i,n)
return e}function g(e,t,r){let i={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let n of r)i=n(e,t,i)||i
i.initializer&&(i.value=i.initializer.call(e),delete i.initializer),Object.defineProperty(e,t,i)}const y=new WeakMap
function O(){const e={},t=[],r=(0,l.recordIdentifierFor)(this),i=this.store.schema.fields(r),n={name:"Attributes",properties:["id"],expand:!0},o=n.properties,a=[n]
for(const l of i.values())switch(l.kind){case"attribute":o.push(l.name)
break
case"belongsTo":case"hasMany":{let r=e[l.kind]
void 0===r&&(r=e[l.kind]=[],a.push({name:l.kind,properties:r,expand:!0})),r.push(l.name),t.push(l.name)
break}}return a.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:a,expensiveProperties:t}}}var P=new WeakMap
class j extends r.default{constructor(...e){super(...e),u(this,P,void b(this,"store"))}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:r}=this,i=function(e){let t=y.get(e)
return void 0===t&&(t=new Map,y.set(e,t)),t}(r),n=r.notifications.subscribe("resource",((n,a)=>{"added"===a&&this.watchTypeIfUnseen(r,i,n.type,e,t,o)})),o=[()=>{r.notifications.unsubscribe(n)}]
Object.keys(r.identifierCache._cache.resourcesByType).forEach((e=>{i.set(e,!1)})),i.forEach(((n,a)=>{this.watchTypeIfUnseen(r,i,a,e,t,o)}))
const a=()=>{o.forEach((e=>e())),i.forEach(((e,t)=>{i.set(t,!1)})),this.releaseMethods.removeObject(a)}
return this.releaseMethods.pushObject(a),a}watchTypeIfUnseen(e,t,r,i,n,o){if(!0!==t.get(r)){const a=e.modelFor(r)
a.prototype._debugInfo=O
const l=this.wrapModelType(a,r)
o.push(this.observeModelType(r,n)),i([l]),t.set(r,!0)}}columnNameToDesc(e){return(0,a.capitalize)((0,a.underscore)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let r=0
return e.attributes.forEach(((e,i)=>{if(r++>this.attributeLimit)return!1
const n=this.columnNameToDesc(i)
t.push({name:i,desc:n})})),t}getRecords(e,t){if(arguments.length<2){const r=e._debugContainerKey
if(r){const e=r.match(/model:(.*)/)
null!==e&&(t=e[1])}}return!(0,o.macroCondition)((0,o.getGlobalConfig)().WarpDrive.env.DEBUG)||(e=>{if(!e)throw new Error("Cannot find model name. Please upgrade to Ember.js >= 1.13 for Ember Inspector support")})(!!t),this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const r={id:e.id}
return e.eachAttribute((i=>{if(t++>this.attributeLimit)return!1
r[i]=e[i]})),r}getRecordKeywords(e){const r=[e.id]
return e.eachAttribute((t=>{r.push(e[t])})),(0,t.A)(r)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const r=[],n=["id","isNew","hasDirtyAttributes"]
e.eachAttribute((e=>n.push(e))),n.forEach((n=>{const o=()=>{t(this.wrapRecord(e))};(0,i.addObserver)(e,n,o),r.push((function(){(0,i.removeObserver)(e,n,o)}))}))
return function(){r.forEach((e=>e()))}}}p(j.prototype,"store",[(0,n.inject)("store")])
e.default=(0,o.macroCondition)((0,o.getGlobalConfig)().WarpDrive.includeDataAdapter)?j:null})),define("tic-tac-toe/helpers/app-version",["exports","@ember/component/helper","tic-tac-toe/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,i){function n(e,t={}){const n=r.default.APP.version
let o=t.versionOnly||t.hideSha,a=t.shaOnly||t.hideVersion,l=null
return o&&(t.showExtended&&(l=n.match(i.versionExtendedRegExp)),l||(l=n.match(i.versionRegExp))),a&&(l=n.match(i.shaRegExp)),l?l[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
e.default=(0,t.helper)(n)})),define("tic-tac-toe/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("tic-tac-toe/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","tic-tac-toe/config/environment"],(function(e,t,r){let i,n
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(i=r.default.APP.name,n=r.default.APP.version)
e.default={name:"App Version",initialize:(0,t.default)(i,n)}})),define("tic-tac-toe/initializers/ember-data",["exports","@ember-data/request-utils/deprecation-support"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"ember-data",initialize(e){e.registerOptionsForType("serializer",{singleton:!1}),e.registerOptionsForType("adapter",{singleton:!1})}}})),define("tic-tac-toe/router",["exports","@ember/routing/router","tic-tac-toe/config/environment"],(function(e,t,r){function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{constructor(...e){super(...e),i(this,"location",r.default.locationType),i(this,"rootURL",r.default.rootURL)}}e.default=n,n.map((function(){this.route("about")}))})),define("tic-tac-toe/routes/index",["exports","@ember/routing/route"],(function(e,t){function r(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var i=r.call(e,t||"default")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class i extends t.default{constructor(...e){super(...e),r(this,"queryParams",{m:{refreshModel:!0},n:{refreshModel:!0},k:{refreshModel:!0}})}model(e){return{M:parseInt(e.m),N:parseInt(e.n),K:parseInt(e.k)}}setupController(e,t){e.set("M",t.M),e.set("N",t.N),e.set("K",t.K)
const r=[]
for(let o=0;o<t.M;o++){const e=[]
for(let r=0;r<t.N;r++)e.push("")
r.push(e)}e.set("cells",r)
const[i,n]=Math.random()<.5?["X","O"]:["O","X"]
e.set("player",i),e.set("computer",n),e.set("current","X"),e.computerBusy&&clearTimeout(e.computerBusy),e.set("status",""),e.set("gameOver",""),e.update(!1)}}e.default=i})),define("tic-tac-toe/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("tic-tac-toe/services/store",["exports","@ember/debug","ember-data/store"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.default}})})),define("tic-tac-toe/templates/about",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"JsCYOY4k",block:'[[[8,[39,0],null,null,[["nav","default"],[[[],[]],[[[1,"\\n        "],[10,"h2"],[14,1,"about"],[12],[1,"Tic-Tac-Toe project for FeedbackFruits :)"],[13],[1,"\\n    "]],[]]]]],[1,"\\n"]],[],false,["app",":nav",":default","h2"]]',moduleName:"tic-tac-toe/templates/about.hbs",isStrictMode:!1})})),define("tic-tac-toe/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"5AuDb1be",block:'[[[10,0],[14,0,"mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-drawer-button"],[12],[1,"\\n    "],[46,[28,[37,2],null,null],null,null,null],[1,"\\n"],[13],[1,"\\n"]],[],false,["div","component","-outlet"]]',moduleName:"tic-tac-toe/templates/application.hbs",isStrictMode:!1})})),define("tic-tac-toe/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=(0,t.createTemplateFactory)({id:"eLu1yJMI",block:'[[[8,[39,0],null,null,[["nav","default"],[[[[1,"\\n        "],[10,0],[14,0,"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"],[12],[1,"\\n          "],[8,[39,3],[[24,0,"mdl-textfield__input"],[24,"min","2"],[24,"max","100"],[24,"pattern","-?[0-9]*(\\\\.[0-9]+)?"],[24,1,"M"]],[["@value","@type"],[[30,0,["m"]],"number"]],null],[1,"\\n          "],[10,"label"],[14,0,"mdl-textfield__label"],[14,"for","M"],[12],[1,"M"],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"],[12],[1,"\\n          "],[8,[39,3],[[24,0,"mdl-textfield__input"],[24,"min","2"],[24,"max","100"],[24,"pattern","-?[0-9]*(\\\\.[0-9]+)?"],[24,1,"N"]],[["@value","@type"],[[30,0,["n"]],"number"]],null],[1,"\\n          "],[10,"label"],[14,0,"mdl-textfield__label"],[14,"for","N"],[12],[1,"N"],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"],[12],[1,"\\n          "],[8,[39,3],[[24,0,"mdl-textfield__input"],[24,"min","2"],[24,"max","100"],[24,"pattern","-?[0-9]*(\\\\.[0-9]+)?"],[24,1,"K"]],[["@value","@type"],[[30,0,["k"]],"number"]],null],[1,"\\n          "],[10,"label"],[14,0,"mdl-textfield__label"],[14,"for","K"],[12],[1,"K"],[13],[1,"\\n        "],[13],[1,"\\n    "]],[]],[[[1,"\\n        "],[8,[39,6],null,[["@M","@N","@K","@cells","@updateCell","@update","@player","@computer","@current","@status","@gameOver"],[[30,0,["M"]],[30,0,["N"]],[30,0,["K"]],[30,0,["cells"]],[30,0,["updateCell"]],[30,0,["update"]],[30,0,["player"]],[30,0,["computer"]],[30,0,["current"]],[30,0,["status"]],[30,0,["gameOver"]]]],null],[1,"\\n    "]],[]]]]],[1,"\\n"]],[],false,["app",":nav","div","input","label",":default","gameboard"]]',moduleName:"tic-tac-toe/templates/index.hbs",isStrictMode:!1})})),define("tic-tac-toe/transforms/boolean",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.BooleanTransform}})})),define("tic-tac-toe/transforms/date",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.DateTransform}})})),define("tic-tac-toe/transforms/number",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.NumberTransform}})})),define("tic-tac-toe/transforms/string",["exports","@ember/debug","@ember-data/serializer/transform"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.StringTransform}})})),define("tic-tac-toe/config/environment",[],(function(){try{var e="tic-tac-toe/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(i){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("tic-tac-toe/app").default.create({name:"tic-tac-toe",version:"0.0.0+b7b41620"})
