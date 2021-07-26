(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  border: 2px solid red;\n  height: 100vh;\n  width: 100vw;\n}\n\nmain {\n  width: 90%;\n  flex-direction: column;\n}\n\nh1,\nlabel {\n  font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.add {\n  width: 100%;\n  padding: 0 1rem;\n}\n\n.head {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.red {\n  background-color: red;\n}\n\n.d-none {\n  display: none;\n}\n\n.d-inherit {\n  display: inherit;\n}\n\n.dynamicDeleteBtn {\n  width: 90%;\n  margin: 1rem;\n}\n\ninput[type='checkbox']:checked + label {\n  color: gray;\n  text-decoration: line-through;\n}\n\n.head button {\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  padding: 1rem;\n  color: gray;\n}\n\n.head button:hover {\n  color: black;\n}\n\n.center {\n  justify-content: center;\n  align-items: center;\n}\n\n.border {\n  border: 1px solid rgb(224, 224, 224);\n  padding: 1rem;\n  width: 100%;\n}\n\n.item {\n  border: 0.5px solid rgb(224, 224, 224);\n  width: 100%;\n  list-style: none;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.itemContent {\n  align-items: center;\n  width: 90%;\n  padding-left: 1rem;\n}\n\n.wrapper {\n  width: 50%;\n  flex-direction: column;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.space-right {\n  margin-right: 1rem;\n}\n\n.label {\n  padding: 1rem;\n  width: 100%;\n  display: inline-block;\n}\n\n.fa-ellipsis-v,\n.fa-trash-alt {\n  padding: 1rem 2rem;\n  cursor: move;\n}\n\n.dragging {\n  background-color: gray;\n}\n\n#getAdd {\n  width: 85%;\n  border: none;\n  font-size: 1rem;\n  font-style: italic;\n  padding: 1rem 0;\n}\n\n#getAdd:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n#getAdd-btn {\n  width: 15%;\n  border: none;\n  background-color: transparent;\n  color: rgb(199, 199, 199);\n  cursor: pointer;\n}\n\n#clearAllComp {\n  border: none;\n  font-family: 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-size: 1rem;\n  background-color: transparent;\n  color: gray;\n  padding: 1rem;\n  cursor: pointer;\n}\n\n#clearAllComp:hover {\n  color: red;\n}\n",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(a[d]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},d=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],s=o[c]||0,u="".concat(c," ").concat(s);o[c]=s+1;var m=t(u),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==m?(n[m].references++,n[m].updater(p)):n.push({identifier:u,updater:a(p,r),references:1}),d.push(u)}return d}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<o.length;d++){var i=t(o[d]);n[i].references--}for(var l=r(e,a),c=0;c<o.length;c++){var s=t(o[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),d=t.n(o),i=t(565),l=t.n(i),c=t(216),s=t.n(c),u=t(589),m=t.n(u),p=t(426),g={};function f(){document.querySelectorAll(".item").forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))}));const e=document.getElementById("show");e.addEventListener("dragover",(n=>{n.preventDefault();const t=function(e,n){return[...e.querySelectorAll(".item:not(.dragging)")].reduce(((e,t)=>{const r=t.getBoundingClientRect(),a=n-r.top-r.height/2;return a<0&&a>e.offset?{offset:a,element:t}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(e,n.clientY),r=document.querySelector(".dragging");null==t?e.appendChild(r):e.insertBefore(r,t)}))}g.styleTagTransform=m(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=s(),n()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;let h=[],b=h.length+1;function v(){const e=document.getElementById("getAdd"),n=document.getElementById("show"),t=document.createElement("li");t.classList.add("item"),t.classList.add("d-flex"),t.setAttribute("draggable","true");const r=document.createElement("input");r.type="checkbox",r.name="checkbox",0!=localStorage.length&&(b=h.length+1),r.id=`item${b}`,r.classList.add("space-right"),r.classList.add("checked");const a=document.createElement("label");a.htmlFor="checked",a.classList.add("label"),a.appendChild(document.createTextNode(e.value));const o=document.createElement("div");o.classList.add("itemContent"),o.classList.add("d-flex");const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-ellipsis-v"),n.appendChild(t),o.appendChild(r),o.appendChild(a),t.appendChild(o),t.appendChild(d)}function y(){const e=document.getElementById("getAdd");h.push({description:e.value,completed:!1,globalIndex:b}),e.value="",b+=1}function x(){h.forEach((e=>{localStorage.setItem(b-1,JSON.stringify(e))}))}function E(){h.length>0?h.forEach((e=>{let n=e.globalIndex;localStorage.setItem(n,JSON.stringify(e))})):localStorage.clear()}function L(e){const n=document.getElementById("show"),t=document.createElement("li");t.classList.add("item"),t.classList.add("d-flex"),t.setAttribute("draggable","true");const r=document.createElement("input");r.type="checkbox",r.name="checkbox",0!=localStorage.length&&(b=h.length+1),r.id=`item${e.globalIndex}`,e.completed&&(r.checked="checked"),r.classList.add("space-right"),r.classList.add("checked");const a=document.createElement("label");a.htmlFor="checked",a.classList.add("label"),a.appendChild(document.createTextNode(e.description));const o=document.createElement("div");o.classList.add("itemContent"),o.classList.add("d-flex");const d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-ellipsis-v"),n.appendChild(t),o.appendChild(r),o.appendChild(a),t.appendChild(o),t.appendChild(d)}function S(e){h.push({description:e.description,completed:e.completed,globalIndex:e.globalIndex})}if(document.getElementById("getAdd").addEventListener("keyup",(e=>{"Enter"===e.key&&(e.preventDefault(),v(),y(),x(),f())})),document.getElementById("getAdd-btn").addEventListener("click",(()=>{v(),y(),x(),f()})),document.addEventListener("click",(e=>{/item[0-9]+/g.test(e.target.id)&&function(e){const n=parseInt(e.id.match(/\d+/g)[0],10);!1===h[n-1].completed?h[n-1].completed=!0:h[n-1].completed=!1,localStorage.setItem(n,JSON.stringify(h[n-1]))}(e.target)})),document.addEventListener("dblclick",(e=>{if("fas fa-ellipsis-v"===e.target.classList.value){const n=e.target.previousSibling,t=e.target.parentElement,{firstChild:r}=t;"item d-flex red"===t.classList.value?t.classList.remove("red"):t.classList.add("red"),"item d-flex red"===t.classList.value?r.classList.add("d-none"):r.classList.remove("d-none"),"item d-flex red"===t.classList.value?t.insertBefore(function(){const e=document.createElement("input");return e.value="Delete",e.type="button",e.name="delBtn",e.classList.add("dynamicDeleteBtn"),e}(),e.target):"dynamicDeleteBtn"===n.classList.value&&n.remove()}})),document.addEventListener("click",(e=>{if("dynamicDeleteBtn"===e.target.classList.value){const n=+e.target.previousSibling.firstChild.id.match(/[0-9]+/g)[0];h=h.filter((e=>e.globalIndex!=n)),e.target.parentElement.remove();for(let e=0;e<h.length;e+=1)h[e].globalIndex=e+1;const t=document.querySelectorAll(".checked");for(let e=0;e<t.length;e+=1)t[e].id=`item${e+1}`;localStorage.clear(),E()}})),localStorage.length>0)for(let e=0;e<localStorage.length;e+=1){const n=JSON.parse(localStorage.getItem(e+1));L(n),S(n)}document.getElementById("clearAllComp").addEventListener("click",(()=>{const e=h.filter((e=>!1===e.completed));h=e;for(let e=0;e<h.length;e+=1)h[e].globalIndex=e+1;localStorage.clear(),E(),document.querySelectorAll(".checked").forEach((e=>{e.checked&&e.parentElement.parentElement.remove()}))}))})()})();