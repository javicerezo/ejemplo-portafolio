!function(){const e=document.querySelector(".js-body"),t=document.querySelector(".js-header"),s=document.querySelector(".js-cuadro"),c=document.querySelector(".js-header__dark-mode"),o=document.querySelector(".js-header__burger i"),r=document.querySelector(".js-trabajos__ul"),d=document.querySelectorAll(".js-modal"),n=document.querySelector("#btn-enviar"),a=document.querySelector("#nombre"),i=document.querySelector("#correo"),l=document.querySelector("#asunto"),u=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,m=document.querySelector("#mensaje"),L=document.querySelector(".spinner"),h=document.querySelector("#formulario"),v=document.querySelector(".c-contacto__h3"),_=v.textContent.split("");v.innerText="",_.forEach(e=>{v.innerHTML=v.innerHTML+`\n            <div>\n                <span>${e}</span>\n                <span class="segunda-linea">${e}</span>\n            </div>\n        `});let f={nombre:"",correo:"",asunto:""};function p(e){d[e].classList.remove("c-modal--show")}function y(e){e.classList.remove("u-cursor--not-allowed","u-opacity--50"),e.disabled=!1}function g(e){e.classList.add("u-cursor--not-allowed","u-opacity--50"),e.disabled=!0}function b(e,t){e[t.target.name]=t.target.value.trim()}function q(e){return""!=e.nombre&&""!=e.correo&&""!=e.asunto}function j(e,t,s){if(0===e.childElementCount){const c=document.createElement("p");c.classList.add("u-mensaje"),c.textContent=s,"exito"===t&&c.classList.add("u-mensaje--"+t),"error"===t&&c.classList.add("u-mensaje--"+t),"alerta"===t&&c.classList.add("u-mensaje--"+t),e.appendChild(c),0==e.classList.contains("c-buscador__ul-buscar")&&setTimeout(t=>{!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(e)},3e3)}}window.addEventListener("DOMContentLoaded",()=>{var e;!function(){const e=window.matchMedia("(prefers-color-scheme: dark)");e.matches?document.body.classList.add("darkmode"):document.body.classList.remove("darkmode");e.addEventListener("change",()=>{e.matches?document.body.classList.add("darkmode"):document.body.classList.remove("darkmode")})}(),g(n),e=v,setInterval(()=>{let t=0;const s=setInterval(()=>{t<e.children.length?(e.children[t].classList.add("animacion"),t++):clearInterval(s)},100)},3e3),setInterval(()=>{let t=0;const s=setInterval(()=>{t<e.children.length?(e.children[t].classList.remove("animacion"),t++):clearInterval(s)},100)},3150)}),window.addEventListener("scroll",e=>{"0"==window.scrollY?(s.children[0].classList.remove("c-cuadro__sup--mod"),s.children[1].classList.remove("c-cuadro__der--mod"),s.children[2].classList.remove("c-cuadro__inf--mod"),s.children[3].classList.remove("c-cuadro__izq--mod"),t.classList.remove("c-header--mod"),s.children[2].children[0].classList.remove("c-cuadro__p--mod"),s.children[2].children[1].classList.add("c-cuadro__p--mod")):(s.children[0].classList.add("c-cuadro__sup--mod"),s.children[1].classList.add("c-cuadro__der--mod"),s.children[2].classList.add("c-cuadro__inf--mod"),s.children[3].classList.add("c-cuadro__izq--mod"),t.classList.add("c-header--mod"),s.children[2].children[0].classList.add("c-cuadro__p--mod"),s.children[2].children[1].classList.remove("c-cuadro__p--mod"))}),c.addEventListener("click",t=>{e.classList.toggle("darkmode")}),o.addEventListener("click",e=>{t.children[2].classList.toggle("c-header__nav--mod"),o.classList.toggle("fa-xmark"),o.classList.toggle("fa-bars")}),r.addEventListener("click",e=>{let t=parseInt(e.target.getAttribute("value"));!function(e){d[e].classList.add("c-modal--show")}(t),d[t].addEventListener("click",e=>{e.preventDefault(),e.target.classList.contains("fa-solid")&&p(t),e.target.classList.contains("js-modal")&&p(t)})}),a.addEventListener("input",e=>{b(f,e),q(f)?y(n):g(n)}),i.addEventListener("input",e=>{b(f,e),q(f)?y(n):g(n)}),l.addEventListener("input",e=>{b(f,e),q(f)?y(n):g(n)}),n.addEventListener("click",e=>{e.preventDefault(),function(e){let t=!1;return u.test(e)?(t=!0,t):t}(f.correo)?(L.classList.remove("u-display--none"),g(n),setTimeout(()=>{var e;L.classList.add("u-display--none"),j(m,"exito","Mensaje enviado correctamente"),(e=f).nombre="",e.correo="",e.asunto="",function(e){setTimeout(()=>{e.reset()},3e3)}(h)},3e3)):j(m,"error","El correo no es correcto")})}();
//# sourceMappingURL=bundle.js.map
