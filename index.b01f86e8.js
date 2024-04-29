new Swiper(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0}}),window.addEventListener("hashchange",function(){"#slide-menu"===window.location.hash?document.body.classList.add("body__lock"):document.body.classList.remove("body__lock")}),// assign class when button clicked
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".materials__circle").forEach(function(e){var n=e.nextElementSibling;e.addEventListener("click",function(){n.classList.contains("clicked")?(n.classList.remove("clicked"),e.classList.remove("materials__circle--clicked")):(n.classList.add("clicked"),e.classList.add("materials__circle--clicked"))})})}),document.addEventListener("DOMContentLoaded",function(){document.getElementById("form").reset()}),window.addEventListener("resize",// reset swiper
function(){window.location.reload()});//# sourceMappingURL=index.b01f86e8.js.map

//# sourceMappingURL=index.b01f86e8.js.map
