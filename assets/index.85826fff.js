import{r as f,o as d,c as m,a as p,b as _,d as h}from"./vendor.091270f8.js";const v=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};v();var y=(c,n)=>{for(const[s,r]of n)c[s]=r;return c};const g={};function L(c,n){const s=f("router-view");return d(),m(s)}var b=y(g,[["render",L]]);const E="modulepreload",i={},A="/project-team-vue/",a=function(n,s){return!s||s.length===0?n():Promise.all(s.map(r=>{if(r=`${A}${r}`,r in i)return;i[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":E,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,l)=>{o.addEventListener("load",u),o.addEventListener("error",l)})})).then(()=>n())},O=[{path:"/project-team-vue/",name:"Home",component:()=>a(()=>import("./Home.2f260098.js"),["assets/Home.2f260098.js","assets/Home.728106b5.css","assets/vendor.091270f8.js"])},{path:"/project-team-vue/about",name:"About",component:()=>a(()=>import("./About.837cd8a2.js"),["assets/About.837cd8a2.js","assets/About.589fe636.css","assets/vendor.091270f8.js"])}],P=p({history:_(),routes:O});h(b).use(P).mount("#app");export{y as _};