// Hamburger menu
let hamburger = document.querySelector(".hamburger");
let headerNavMenu = document.querySelector(".header__navmenu");
let navLinks = document.querySelector(".navmenu__list");

let closeIcon = document.querySelector(".closeIcon");
let openIcon = document.querySelector(".openIcon");
let body = document.querySelector("body");

function openMenu() {
  headerNavMenu.classList.add("active");
  body.classList.add("active");
  hamburger.classList.add("active");
  hamburger.setAttribute("aria-expanded", true);
}

function closeMenu() {
  headerNavMenu.classList.remove("active");
  body.classList.remove("active");
  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", false);
}

function toggleMenu() {
  const isOpen = headerNavMenu.classList.contains("active");
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

// fermeture via le bouton burger
hamburger.addEventListener("click", toggleMenu);
// fermeture via les liens du menu
navLinks.addEventListener("click", (e) => {
  const link = e.target.closest(".navmenu__link");
  if (!link) return;
  closeMenu();
});
// fermeture avec esc(escape)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && headerNavMenu.classList.contains("active")) {
    closeMenu();
  }
});
