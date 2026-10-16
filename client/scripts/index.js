
// =============================================
// ============ testimonial section ============
// un carousel circulaire
const reviews = [
  {
    id: 1,
    message:
      "Institut très propre et ambiance apaisante. Le soin visage était adapté à ma peau et j’ai vu une différence dès la première séance",
    img: "images/index/picture-clients/Dounia-B-picture.webp",
    name: "Dounia B.",
  },
  {
    id: 2,
    message:
      "Je fais mes soins cheveux ici depuis plusieurs mois et le résultat est toujours au rendez-vous. Mes cheveux sont beaucoup plus doux et brillants.",
    img: "images/index/picture-clients/Leila-T-picture.webp",
    name: "Leila T.",
  },
  {
    id: 3,
    message:
      "Une vraie parenthèse de détente. Le massage corps était incroyable et l’équipe est très professionnelle. Je suis ressortie relaxée et ravie.",
    img: "images/index/picture-clients/Sandrine-H-picture.webp",
    name: "Sandrine H.",
  },
];

// select items

const message = document.querySelector('[data-testimonial="message"]');
const author = document.querySelector('[data-testimonial="author"]');
const picture = document.querySelector('[data-testimonial="picture"]');

const prevBtn = document.querySelector(".testimonials__btn--prev");
const nextBtn = document.querySelector(".testimonials__btn--next");
const rdBtn = document.querySelector(".rd-button");

// set starting item
let currentItem = 0;

// s’occupe UNIQUEMENT de l’affichage (DOM)
function showPerson(person) {
  const item = reviews[person];
  message.innerHTML = item.message;
  author.innerHTML = item.name;
  picture.src = item.img;
}
// load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

// les boutons changent l’état (currentItem)
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  // showPerson(currentItem);
  updateReview(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  updateReview(currentItem);
});

// Random button
// rdBtn.addEventListener("click", () => {
//   // comportement normal du random
//   let randomIndex = Math.floor(Math.random() * reviews.length);
//   // tant que le random est égal à currentItem → recommencer
//   while (currentItem === randomIndex) {
//     randomIndex = Math.floor(Math.random() * reviews.length);
//   }
//   currentItem = randomIndex;
//   console.log(currentItem)
//   showPerson(currentItem);
// })

const card = document.querySelector(".testimonials__cards .card");

function updateReview(index) {
  card.classList.add("fade-out");

  setTimeout(() => {
    showPerson(index);
    card.classList.remove("fade-out");
  }, 500);
}

// function updateReview(index) {
//   card.classList.add("fade-out");

//   card.addEventListener("transitionend", function handler() {
//     card.classList.remove("fade-out");
//     showPerson(index);
//     card.removeEventListener("transitionend", handler);
//   });
// }

// =========== SMOOTH SCROLL ============
const heroActions = document.querySelector(".header__hero-actions");
heroActions.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return; 

  const targetHref = btn.getAttribute('href');

  if (!targetHref || !targetHref.startsWith('#')) return;

  e.preventDefault();
  const section = document.querySelector(targetHref);
  if (!section) return;
  section.scrollIntoView({
    behavior: "smooth",
  });
});


// ============ LocalStorage ============
