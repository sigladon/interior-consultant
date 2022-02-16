const openBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn")
const menu = document.querySelector("#nav");
openBtn.addEventListener("click", function(){
    menu.classList.toggle("show-nav");
});
closeBtn.addEventListener("click", function(){
    menu.classList.remove("show-nav");
});


