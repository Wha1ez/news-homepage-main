const menuBtn = document.querySelector('.nav-menu-button');
const exitBtn = document.querySelector('.nav-menu-close');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () =>{
    nav.classList.add('visible-nav');
})

exitBtn.addEventListener('click', () => {
    nav.classList.remove('visible-nav');
})