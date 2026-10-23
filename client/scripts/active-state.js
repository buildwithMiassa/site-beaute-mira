const menuItems = document.querySelector('[data-menu]');
const links = document.querySelectorAll('[data-nav-link]');


const currentPath = window.location.pathname;
links.forEach(link => {
  if (link.pathname === currentPath) {
    const parentItem = link.closest('.navmenu__item');
    if (parentItem) {
      parentItem.classList.add('is-active');
    }
  }
});