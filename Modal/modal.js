// Récupération du bouton "Voir détails" et de la modal
const btnDetails = document.querySelector('.btn-details');
const modal = document.querySelector('.modal');

// Récupération des éléments de la modal
const modalTitle = document.querySelector('.modal-content h2');
const modalPrice = document.querySelector('.modal-content .price');
const modalQuantity = document.querySelector('.modal-content #quantity');

// Fonction pour afficher la modal
function showModal() {
  // Affichage de la modal
  modal.style.display = 'block';

  // Récupération des données produit
  const productTitle = this.parentNode.querySelector('img').alt;
  const productPrice = this.parentNode.querySelector('.price').textContent;

  // Affichage des données dans la modal
  modalTitle.textContent = productTitle;
  modalPrice.textContent = productPrice;
}

// Fonction pour fermer la modal
function closeModal() {
  modal.style.display = 'none';
}

// Ajout d'un événement au bouton "Voir détails"
btnDetails.addEventListener('click', showModal);

// Ajout d'un événement au bouton "Fermer"
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);