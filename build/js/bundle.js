document.addEventListener("DOMContentLoaded",()=>{scrollNav(),fixedNav()});const fixedNav=function(){const e=document.querySelector(".header");new IntersectionObserver((function(t){t[0].isIntersecting?e.classList.remove("fixed"):e.classList.add("fixed")})).observe(document.querySelector(".about-fest"))},scrollNav=()=>{document.querySelectorAll(".main-navigation a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})}))}))};document.addEventListener("DOMContentLoaded",(function(){createGallery()}));const createGallery=function(){const e=document.querySelector(".img-gallery");for(let t=1;t<=12;t++){const n=document.createElement("IMG");n.src=`build/img/thumb/${t}.webp`,n.dataset.imageId=t,n.onclick=showImg;const o=document.createElement("LI");o.appendChild(n),e.appendChild(o)}},showImg=e=>{const t=parseInt(e.target.dataset.imageId),n=document.createElement("IMG");n.src=`build/img/grande/${t}.webp`;const o=document.createElement("DIV");o.appendChild(n),o.classList.add("overlay"),o.onclick=()=>o.remove();const c=document.createElement("P");c.textContent="X",c.classList.add("close-btn"),c.onclick=()=>o.remove(),o.appendChild(c);const d=document.querySelector("body");d.appendChild(o),d.classList.add("body-fixed")};
//# sourceMappingURL=bundle.js.map
