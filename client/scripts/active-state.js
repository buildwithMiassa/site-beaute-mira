const menuItems = document.querySelector('[data-menu]');
const links = document.querySelectorAll('[data-nav-link]');


const href = window.location.pathname;
console.log(href);

links.forEach(link => {
  const targetLink = link.getAttribute('href');
  console.log('link = ', targetLink)
  if (href.includes(targetLink)) {
    const parentItem = link.closest('.navmenu__item');
    if (parentItem) {
      parentItem.classList.add('is-active');
    }
  }
});