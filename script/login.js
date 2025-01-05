let menuHumburger = document.querySelector('.menu-hamburger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.exit');
let page = document.querySelector('.page');
let inscrire = document.querySelector('.inscrire');
let backgroundLogin = document.querySelector('.background-login');
let inscription = document.querySelector('.inscription');
let connect = document.querySelector('.connect');
let connection = document.querySelector('.connection');

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
inscrire.addEventListener('click', () => { 
    backgroundLogin.classList.add('background-login-active');
    inscription.classList.add('inscription-active');
     connection.classList.add('connection-active');
    
});


 connect.addEventListener('click', () => {
    
    backgroundLogin.classList.remove('background-login-active');
    inscription.classList.remove('inscription-active');
 connection.classList.remove('connection-active');   
 });
