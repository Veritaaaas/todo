(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),a.push([n.id,"body, html {\n    height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif; \n}\n\nbutton {\n    font-family: 'Roboto', sans-serif;\n\n}\n\n.header {\n    height: 12vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 0;\n    border-bottom: 5px solid #EB5F1E;\n    font-size: 1.5rem;\n}\n\n.queue {\n    color: #EB5F1E;\n}\n\n.header i {\n    color: #EB5F1E;\n    margin-right: 0.5rem;\n}\n\n.header h1 {\n    margin: 0;\n}\n\n.content {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.sidebar {\n    padding-top: 0.5rem !important;\n    padding: 1rem;\n    font-size: 1.2rem;\n} \n\n.sidebar h2 {\n    margin-left: 0.5rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0;\n}\n\n.menus {\n    width: 100%;\n    margin-top: 0;\n    padding-top: 0.5rem;\n    border-top: 2px solid #EB5F1E;\n}\n\n.menus button{\n    width: 100%;\n    border: none;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    margin-top: 0;\n    font-size: 1rem;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 550;\n    margin-left: 0 !important;\n    margin: 1rem;\n    cursor: pointer; \n}\n\n.menus button:hover {\n    background-color: #F08756;\n    border-left: 4px solid #EB5F1E;\n}\n\n.menus button.active {\n    background-color: #F08756;\n    border-left: 4px solid #EB5F1E;\n}\n\n.menus img {\n    width: 1.7rem;\n    height: 1.7rem;\n    margin-right: 0.5rem;\n}\n\n.projects {\n    width: 100%;\n    margin-top: 0;\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 0;\n    padding-top: 0.5rem;\n    border-top: 2px solid #EB5F1E;\n}\n\n.project {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0.5rem;\n    cursor: pointer;\n}\n\n.project i {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    cursor: pointer;\n}\n\n.project button {\n    border: none;\n    background-color: transparent;\n    display: flex;\n    justify-content: end;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.project button i {\n    margin-right: 0;\n\n}\n\n.project:hover {\n    border-left: 4px solid #EB5F1E;\n    background-color: #F08756;\n}\n\n.project.active {\n    border-left: 4px solid #EB5F1E;\n    background-color: #F08756;\n}\n\n#add-project {\n    width: 100%;\n    border: none;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    font-size: 1rem;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 550;\n    cursor: pointer; \n}\n\n#add-project:hover {\n    background-color: #F08756;\n    border-left: 4px solid #EB5F1E;\n}\n\n.project-name {\n    height: 1rem;\n    margin: 0;\n}\n\n.btn-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.btn-container button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4rem;\n    height: 2rem;\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n    border-radius: 25px;\n}\n\n.add {\n    background-color: #84fa96 !important;\n}\n\n.cancel {\n    background-color: #ff7f7f !important;\n}\n\n.setting-modal {\n    display: none;\n    justify-content: end;\n    z-index: 100;\n}\n\n.modal-menu {\n    display: flex;\n    flex-direction: column;\n    background-color: #f4f4f4;\n}\n\n.modal-menu button {\n    font-size: 0.8rem;\n    font-weight: 600;\n    display: flex;\n    background-color: none;\n    text-align: left;\n    border: none;\n    margin: 0.5rem;\n    cursor: pointer;\n}\n\n/* main content */\n\n.main {\n    background-color: #f4f4f4;\n    display: flex;\n    flex-direction: column;\n    height: calc(100vh - 12vh - 5px - 6rem);\n    padding: 3rem;\n}\n\n.main-header {\n    width: calc(100% - 1rem);\n    display: flex;\n    height: 10vh;\n    background-color: #EB5F1E;\n    padding: 0.5rem;\n    font-size: 1.5rem;\n    align-items: center;\n    color: white;\n}\n\n.task-list {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-top: 1rem;\n    align-items: center;\n}\n\n.task {\n    padding-top: 0.5rem;\n    padding-right: 0.5rem;\n    width:  calc(100% - 0.5rem);\n    display: grid;\n    grid-template-columns:  1fr  25fr;\n    grid-template-rows:  0.fr  0.5fr;\n    grid-template-areas:\n        \"checkbox header\"\n        \"checkbox description\";\n    border:  1px solid black;\n    border-radius: 10px;\n}\n\n.task:hover {\n    background-color: white;\n}\n\n.checkbox {\n    grid-area: checkbox;\n    display: flex;\n    justify-content: center;\n    padding-top: 0.3rem;\n}\n\n.checkbox input[type=\"checkbox\"] {\n    appearance: none;\n    border:  2px solid black;\n    border-radius:  50%;\n    position: relative;\n    width:  1.2rem;\n    height:  1.2rem;\n}\n\n.checkbox input[type=\"checkbox\"]:checked:after {\n    content: '';\n    width:  12px;\n    height:  12px;\n    border-radius:  50%;\n    position: absolute;\n    top:  50%;\n    left:  50%;\n    background-color: #00a2e8;\n    transform: translate(-50%, -50%);\n}\n\n.task-header {\n    grid-area:header;\n    display: grid;\n    grid-template-columns: 6fr 1fr;\n    grid-template-areas: \n        \"title details\";\n}\n\n.task-title {\n    grid-area: title;\n    font-size: 1rem;\n}\n\n.task-title h3 {\n    margin: 0;\n}\n\n.task-details {\n    grid-area: details;\n    display: flex;\n    justify-content: space-between;\n    font-size: 1rem;\n}\n\n.task-details p {\n    margin: 0;\n}\n\n.task-details img {\n    width: 1rem;\n    height: 1rem;\n    margin-right: 0.5rem;\n\n}\n\n.task-content {\n    grid-area: description;\n}\n\n#add-task {\n    display: none;\n    margin: 3rem;\n    border: none;\n    background-color: transparent;\n    justify-content: center;\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n#add-task-modal {\n    width: calc(100% - 4rem);\n    margin-top: 2rem;\n    display: none;\n    padding: 2rem;\n    background-color: white;\n    flex-direction: column;\n}\n\n#add-task-modal h3 {\n    margin: 0;\n}\n\n.modal-title {\n    width: 100%;\n}\n\n.modal-title input {\n    width: 100%;\n    height: 1.5rem;\n    display: flex;\n    align-items: center;\n    border: 2px solid black;\n    border-radius: 5px;\n    font-size: 1rem;\n    margin-bottom: 0.5rem;\n}\n\n.modal-content input {\n    width: 100%;\n    height: 1.5rem;\n    display: flex;\n    align-items: center;\n    border: 2px solid black;\n    border-radius: 5px;\n    font-size: 1rem;\n    margin-bottom: 0.5rem;\n}\n\n.modal-date input {\n    width: 100%;\n    height: 1.5rem;\n    display: flex;\n    align-items: center;\n    border: 2px solid black;\n    border-radius: 5px;\n    font-size: 1rem;\n    margin-bottom: 0.5rem;\n}\n\n.task-btn {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.task-btn button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-family: 'Roboto', sans-serif;\n    width: 5rem;\n    height: 2rem;\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n    border-radius: 5px;\n    color: white;\n    font-weight: bold;\n}\n\n#add-task-btn {\n    background-color: #29f848 !important;\n}\n\n#cancel-task-btn {\n    background-color: #f54444 !important;\n}",""]);const d=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],l=r.base?c[0]+r.base:c[0],s=i[l]||0,m="".concat(l," ").concat(s);i[l]=s+1;var p=t(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,r);r.byIndex=d,e.splice(d,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=t(i[a]);e[d].references--}for(var c=r(n,o),l=0;l<i.length;l++){var s=t(i[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),d=t(56),c=t.n(d),l=t(540),s=t.n(l),m=t(113),p=t.n(m),u=t(208),f={};function h(n){document.querySelectorAll(".menus button, .projects .project").forEach((n=>{n.classList.remove("active")})),n.classList.add("active")}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;let g=document.querySelector("#add-project");const b=document.querySelectorAll(".menu-btn"),y=document.querySelector(".main-header h2");b[0].classList.add("active"),g.addEventListener("click",(function(){let n=function(){let n=document.querySelector(".projects-list"),e=document.createElement("div"),t=document.createElement("p"),r=document.createElement("input"),o=document.createElement("button"),i=document.createElement("div"),a=document.createElement("button"),d=document.createElement("button"),c=document.createElement("div"),l=document.createElement("div"),s=document.createElement("button"),m=document.createElement("button");return t.innerHTML='<i class="fa-solid fa-bars"></i>',r.type="text",r.placeholder="Project Name",r.classList.add("project-name"),o.classList.add("settings"),o.innerHTML='<i class="fa-solid fa-ellipsis-vertical"></i>',i.classList.add("btn-container"),a.innerHTML="Add",a.classList.add("add"),d.innerHTML="Cancel",d.classList.add("cancel"),i.appendChild(a),i.appendChild(d),s.innerHTML="Edit",s.classList.add("edit"),m.innerHTML="Delete",m.classList.add("delete"),c.classList.add("setting-modal"),l.classList.add("modal-menu"),l.appendChild(s),l.appendChild(m),c.appendChild(l),e.classList.add("project"),e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(i),e.addEventListener("click",(function(){const n=document.querySelector(".main-header h2");h(e),n.textContent=t.textContent,document.querySelector("#add-task").style.display="flex"})),n.appendChild(c),n.appendChild(e),function(){return{edit:s,del:m,setting_modal:c,settings:o,add:a,cancel:d,p:t,project:e,textField:r,btn_container:i}}}();!function(n){console.log("Project Add Confirmation");let{edit:e,del:t,setting_modal:r,settings:o,add:i,cancel:a,p:d,project:c,textField:l,btn_container:s}=n();i.addEventListener("click",(function(){console.log(l.value),d.innerHTML+=l.value,l.remove(),s.remove(),console.log("Project Added")})),a.addEventListener("click",(function(){c.remove()}))}(n),function(n){let{edit:e,del:t,setting_modal:r,settings:o,add:i,cancel:a,p:d,project:c,textField:l,btn_container:s}=n();o.addEventListener("click",(function(){console.log("Settings Clicked"),"flex"===r.style.display?r.style.display="none":r.style.display="flex"})),e.addEventListener("click",(function(){let n=document.createElement("button"),e=document.createElement("button"),t=document.createElement("div");n.classList.add("add"),n.innerHTML="Confirm",e.classList.add("cancel"),e.innerHTML="Cancel",t.classList.add("btn-container");let o=document.createElement("input");o.value=d.textContent,o.classList.add("project-name"),d.innerHTML='<i class="fa-solid fa-bars"></i>',d.appendChild(o),t.appendChild(n),t.appendChild(e),c.appendChild(t),r.style.display="none",n.addEventListener("click",(function(){let n=document.createTextNode(o.value);d.appendChild(n),d.removeChild(o),t.remove()})),e.addEventListener("click",(function(){let n=document.createTextNode(o.value);d.appendChild(n),d.removeChild(o),t.remove()}))})),t.addEventListener("click",(function(){c.remove(),r.style.display="none"}))}(n)})),b.forEach((function(n){n.addEventListener("click",(function(){h(n),y.textContent=n.textContent}))})),function(){const n=document.querySelector("#add-task"),e=document.querySelector("#add-task-modal");n.addEventListener("click",(function(){console.log("Add Task"),e.style.display="flex"}))}()})()})();