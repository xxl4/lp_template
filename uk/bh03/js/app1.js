document.addEventListener("DOMContentLoaded",(()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.target,o=document.getElementById(t);e.classList.toggle("is-active"),o.classList.toggle("is-active")}))})),document.addEventListener("mouseout",(function e(t){t.clientY<50&&(document.removeEventListener("mouseout",e),document.getElementById("popup1").classList.add("is-active"))}))})),$(document).ready((function(){let e=!$(".mobile-check").is(":visible");if(console.log(e),$("#popup1 .hide-overlay").click((function(){$("#popup1").css("display","none")})),e){let e=0,t=99999,o=0;$(window).scroll((function(n){0==e&&(scroll_new=$(window).scrollTop(),scroll_new>o&&(t=scroll_new),o=scroll_new,t-o>100&&scroll_new<100&&setTimeout((function(){e=1,$("#popup1").addClass("is-active")}),250))}))}}));