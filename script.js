burger = document.querySelector('.burger');
navbar = document.querySelector('#N');
ul = document.querySelector("#UL");

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    ul.classList.toggle('v-class');
})