import{r as m,o as p,c as d,a as f,b as _,d as v}from"./vendor.1a998ac1.js";const h=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};h();var y=(c,n)=>{for(const[s,o]of n)c[s]=o;return c};const E={};function j(c,n){const s=m("router-view");return p(),d(s)}var L=y(E,[["render",j]]);const P="modulepreload",a={},g="/project-team-vue/",i=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${g}${o}`,o in a)return;a[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":P,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((u,l)=>{r.addEventListener("load",u),r.addEventListener("error",l)})})).then(()=>n())},A=[{path:"/project-team-vue/",name:"Home",component:()=>i(()=>import("./Home.4252dd07.js"),["assets/Home.4252dd07.js","assets/Home.5508c747.css","assets/vendor.1a998ac1.js"])},{path:"/project-team-vue/about",name:"About",component:()=>i(()=>import("./About.d227e740.js"),["assets/About.d227e740.js","assets/About.7fa16e91.css","assets/vendor.1a998ac1.js"])},{path:"/project-team-vue/contact",name:"Contact",component:()=>i(()=>import("./Contact.e2d79589.js"),["assets/Contact.e2d79589.js","assets/vendor.1a998ac1.js"])},{path:"/project-team-vue/profolio",name:"Profolio",component:()=>i(()=>import("./Profolio.39d9ecd4.js"),["assets/Profolio.39d9ecd4.js","assets/vendor.1a998ac1.js"])},{path:"/project-team-vue/test",name:"Test",component:()=>i(()=>import("./Test.c674751c.js"),["assets/Test.c674751c.js","assets/vendor.1a998ac1.js"])}],O=f({history:_(),routes:A});v(L).use(O).mount("#app");export{y as _};