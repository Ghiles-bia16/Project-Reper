let menuHumburger = document.querySelector('.menu-hamburger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.exit');
let page = document.querySelector('.page');
let inscrire = document.querySelector('.inscrire');
let backgroundLogin = document.querySelector('.background-login');
let inscription = document.querySelector('.inscription');
let connect = document.querySelector('.connect');
let connection = document.querySelector('.connection');
let modele = document.querySelector('.modele');
let btn = document.querySelector('.btn');
let overlayImage = document.querySelector('.overlay-image ');

menuHumburger.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    page.classList.add('page-active');
    document.body.classList.add('no-scroll');
    
});
close.addEventListener('click', () => {
    menu.classList.remove('menu-active');
    page.classList.remove('page-active');
    document.body.classList.remove('no-scroll');
});
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuHumburger.contains(event.target)) {
        menu.classList.remove('menu-active');
        page.classList.remove('page-active');
        document.body.classList.remove('no-scroll');
       
    }
});

  