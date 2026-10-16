const pricesCards = document.querySelectorAll('[data-category]');
const filterBtns = document.querySelector('.prices__filter');
const btns = document.querySelectorAll('.prices__filter-btn');


// 1. Initialisation au chargement
// Le bouton "Tous" est actif par défaut au chargement.
window.addEventListener('DOMContentLoaded', () => {
  const allBtn = document.querySelector('[data-filter="all"]');
  if (!allBtn) return;
  updateActiveBtn(allBtn);
  applyFilter('all');
})

/**
 * Fonction qui applique le filtre visuel sur les cartes
 **/
function applyFilter(category) {
  pricesCards.forEach(card => {
    const toShow = (category === 'all' || category === card.dataset.category);
    // if (toShow) {
    //   card.classList.remove('is-hidden');
    // } else { card.classList.add('is-hidden'); }
    card.classList.toggle('is-hidden', !toShow);
  })
}

/**
 * Fonction qui gère l'état visuel des boutons
 **/
function updateActiveBtn(targetBtn) {
  // Retirer is-active de tous les boutons
  btns.forEach(btn => {
    btn.classList.remove('is-active');
  })
  // Ajouter is-active sur le bouton cliqué
  targetBtn.classList.add('is-active');
}

// 2.a Gestion des clics - page services.html
filterBtns.addEventListener('click', (e) => {
  const targetElement = e.target.closest('.prices__filter-btn');
  if (!targetElement) return;

  updateActiveBtn(targetElement);

  // Filtrer les cartes
  const categoryElement = targetElement.dataset.filter;
  applyFilter(categoryElement);
})



