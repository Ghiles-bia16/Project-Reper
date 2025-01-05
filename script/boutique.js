let menuHumburger = document.querySelector('.menu-hamburger');
let menu = document.querySelector('.menu');
let close = document.querySelector('.exit');
let page = document.querySelector('.page');
let produits = document.querySelectorAll('.produits');
let mainNav = document.querySelectorAll(".main-nav-item");

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

 mainNav.forEach((item) => {
   item.addEventListener('click', () => {
      menu.classList.remove('menu-active');
       page.classList.remove('page-active');
       document.body.classList.remove('no-scroll');
  })});

produits.forEach((produit) => {
    let image = produit.querySelector('.image');
    let btn = produit.querySelector('.btn '); 
    let overlayImage = produit.querySelector('.overlay-image');

    
    image.addEventListener('mouseover', () => {

        overlayImage.classList.add('overlay-image-active');
        btn.classList.add('btn-active');
    });


    image.addEventListener('mouseout', () => {
        overlayImage.classList.remove('overlay-image-active');
        btn.classList.remove('btn-active');
    });
});
function addToCart(id) {
    const title = document.getElementById(`title${id}`).textContent;
    const price = document.getElementById(`price${id}`).textContent;
    const image = document.getElementById(`image${id}`).src;

    let panier = JSON.parse(localStorage.getItem('panier')) || [];

    panier.push({ id, title, price, image });
    localStorage.setItem('panier', JSON.stringify(panier));

    alert(`${title} a été ajouté au panier !`);
}
function addToFavorites(id) {

    const title = document.getElementById(`title${id}`).textContent;
    const price = document.getElementById(`price${id}`).textContent;
    const image = document.getElementById(`image${id}`).src;
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(item => item.id === id);
    if (isFavorite) {
        alert(`${title} est déjà dans vos Coups de Cœur !`);
        return;
    }
    favorites.push({ id, title, price, image });
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${title} a été ajouté à vos Coups de Cœur !`);
}