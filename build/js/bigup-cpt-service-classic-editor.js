(()=>{"use strict";(()=>{const e=setInterval((()=>{"complete"===document.readyState&&(clearInterval(e),(()=>{const e=".image-preview",t=".meta-image",r=document.querySelector(".image-upload"),l=document.querySelector(".image-remove");if(!r)return;let n;const i=e=>{for(;e.firstChild;)e.removeChild(e.lastChild)};r.addEventListener("click",(async a=>{a.preventDefault();const c=r.parentElement.parentElement.querySelector(e),o=r.parentElement.querySelector(t);n||(n=wp.media({title:"Select media to use as the profile image",button:{text:"Use this image"},multiple:!1}),n.on("select",(()=>{const e=n.state().get("selection").first().toJSON(),t=window.location.origin,r=e.url.replace(t,"");if(o.value=e.id,c.querySelector("img"))c.querySelector("img").setAttribute("src",r);else{const e=document.createElement("img");e.setAttribute("src",r),e.setAttribute("width","100px"),e.setAttribute("height","100px"),i(c),c.appendChild(e),l.style.display="block"}}))),n.open()})),l.addEventListener("click",(async r=>{r.preventDefault();const n=l.parentElement.parentElement.querySelector(e),a=l.parentElement.querySelector(t);i(n),a.value="",l.style.display="none"}))})())}),100)})()})();