burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightnav = document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-res');
    navList.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');
})