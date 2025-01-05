
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

  
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const favoritesContainer = document.getElementById('favorites');
function afficherFavorites() {
    favoritesContainer.innerHTML = ''; 

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>Vous n\'avez pas encore de Coups de Cœur.</p>';
        return;
    }

    favorites.forEach((produit, index) => {
        const produitDiv = document.createElement('div');
        produitDiv.classList.add('produit');
        produitDiv.innerHTML = `
            <img src="${produit.image}" alt="${produit.title}" style="width: 100px;">
            <h3>${produit.title}</h3>
            <p>Prix: ${produit.price}</p>
            <button class="remove-from-favorites" data-index="${index}">Supprimer</button>
        `;
        favoritesContainer.appendChild(produitDiv);
    });
    const removeButtons = document.querySelectorAll('.remove-from-favorites');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            favorites.splice(index, 1); 
            localStorage.setItem('favorites', JSON.stringify(favorites)); 
            afficherFavorites(); 
        });
    });
}
afficherFavorites();
