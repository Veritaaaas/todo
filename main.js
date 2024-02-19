(()=>{"use strict";var n,e,t,r,o,i,a,c,s,d,l,p,u,m,f={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),a.push([n.id,"body, html {\n    height: 100vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif; \n}\n\n.header {\n    height: 12%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 0;\n    border-bottom: 5px solid #EB5F1E;\n    font-size: 1.5rem;\n}\n\n.queue {\n    color: #EB5F1E;\n}\n\n.header i {\n    color: #EB5F1E;\n    margin-right: 0.5rem;\n}\n\n.header h1 {\n    margin: 0;\n}\n\n.content {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.sidebar {\n    width: 100%;\n    padding-top: 0.5rem !important;\n    font-size: 1.2rem;\n} \n\n.sidebar h2 {\n    margin-left: 0.5rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0;\n}\n\n.menus {\n    width: 100%;\n    margin-top: 0;\n    padding-top: 0.5rem;\n    border-top: 2px solid #EB5F1E;\n}\n\n.menus button{\n    width: 100%;\n    border: none;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    margin-top: 0;\n    font-size: 1rem;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 550;\n    margin-left: 0 !important;\n    margin: 1rem;\n    cursor: pointer; \n}\n\n.menus button:hover {\n    background-color: #F08756;\n    border-left: 4px solid #EB5F1E;\n}\n\n.menus button.active {\n    background-color: #F08756;\n    border-left: 4px solid #EB5F1E;\n}\n\n.menus img {\n    width: 1.7rem;\n    height: 1.7rem;\n    margin-right: 0.5rem;\n}\n\n.projects {\n    width: 100%;\n    margin-top: 0;\n}\n\n.projects-list {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-top: 0;\n    padding-top: 0.5rem;\n    border-top: 2px solid #EB5F1E;\n}\n\n.project {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0.5rem;\n    cursor: pointer;\n}\n\n.project i {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    cursor: pointer;\n}\n\n.project button {\n    border: none;\n    background-color: transparent;\n    display: flex;\n    justify-content: end;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.project button i {\n    margin-right: 0;\n\n}\n\n.project:hover {\n    background-color: #F08756;\n    border-left: 4px solid #EB5F1E;\n}\n\n#add-project {\n    width: 100%;\n    border: none;\n    display: flex;\n    align-items: center;\n    background-color: white;\n    font-size: 1rem;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 550;\n    cursor: pointer; \n}\n\n#add-project:hover {\n    background-color: #F08756;\n    border-left: 4px solid #EB5F1E;\n}\n\n.project-name {\n    height: 1rem;\n    margin: 0;\n}\n\n.btn-container {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.btn-container button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 4rem;\n    height: 2rem;\n    margin-left: 2rem !important;\n    margin-right: 2rem !important;\n    border-radius: 25px;\n}\n\n.add {\n    background-color: #84fa96 !important;\n}\n\n.cancel {\n    background-color: #ff7f7f !important;\n}\n\n.main {\n    background-color: #f4f4f4;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.task-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.task {\n    width: 100%;\n    display: flex;\n    flex-direction: initial;\n    align-items: center;\n}",""]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function g(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return f[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(72),e=g.n(n),t=g(825),r=g.n(t),o=g(659),i=g.n(o),a=g(56),c=g.n(a),s=g(540),d=g.n(s),l=g(113),p=g.n(l),u=g(208),(m={}).styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(u.A,m),u.A&&u.A.locals&&u.A.locals,document.querySelector("#add-project").addEventListener("click",(function(){!function(n){let e=document.querySelector(".add"),t=document.querySelector(".cancel");e.addEventListener("click",(function(){let{p:e,textField:t,btn_container:r}=n();console.log(t.value),e.innerHTML+=t.value,t.remove(),r.remove(),console.log("Project Added")})),t.addEventListener("click",(function(){document.querySelector(".project").remove()}))}(function(){let n=document.querySelector(".projects-list"),e=document.createElement("div"),t=document.createElement("p"),r=document.createElement("input"),o=document.createElement("button"),i=document.createElement("div"),a=document.createElement("button"),c=document.createElement("button");return t.innerHTML='<i class="fa-solid fa-bars"></i>',r.type="text",r.placeholder="Project Name",r.classList.add("project-name"),o.classList.add("settings"),o.innerHTML='<i class="fa-solid fa-ellipsis-vertical"></i>',i.classList.add("btn-container"),a.innerHTML="Add",a.classList.add("add"),c.innerHTML="Cancel",c.classList.add("cancel"),i.appendChild(a),i.appendChild(c),e.classList.add("project"),e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(i),n.appendChild(e),function(){return{p:t,textField:r,btn_container:i}}}())}))})();