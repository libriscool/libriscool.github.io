import{r as t,b as o,a as l,i as d}from"./index-a9f90031.js";const a="/libriscool_schema.jpg",r=["innerHTML"],n={key:1,class:"container py-4"},c=d('<div class="row align-items-md-stretch mb-4 rounded-3"><div class="col-md-6 py-5"><img class="img-fluid" src="'+a+'"></div><div class="col-md-6 p-5"><h1 class="display-5 fw-bold">Libris.Cool</h1><p class="col-md-8 fs-4">For every book there is a reader.</p><p class="fw-bold"></p><p class="col-md-8 fw-bold"><ul><li class="fw-bold">Books on Demand global platform</li></ul></p><p class="col-md-8">We will make it possible for every publisher, even the smallest, to sell all their books, including previously published ones, all over the world. </p><p class="col-md-8"><ul><li class="fw-bold">Books are printed when sold</li></ul></p><p class="col-md-8">Books will be printed only when sold. No stocks, no unsold books, no negative impact on the environment. Publisher gets money for each book sold. </p></div></div><div class="row align-items-md-stretch"><div class="col-md-6"><div class="h-100 p-5 text-white bg-dark rounded-3"><h2>Libris.Cool</h2><p>We help publishers meet readers</p></div></div><div class="col-md-6"><div class="h-100 p-5 bg-light border rounded-3"><h2>Libris.Cool</h2><p>Connecting the publisher with the reader.</p></div></div></div>',2),p=[c],b={__name:"libris-home",setup(h){const e=t('<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);"><div class="spinner-border"></div></div>');async function i(){let s=await fetch("home.html",{method:"GET"});e.value=s.ok?await s.text():void 0}return i(),(s,m)=>e.value?(l(),o("div",{key:0,innerHTML:e.value},null,8,r)):(l(),o("div",n,p))}};export{b as default};
