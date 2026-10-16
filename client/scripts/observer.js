// ============ Animation Scroll Globale ============
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll('.reveal-element');

  const observerOptions = {
    threshold: 0.15 // Se déclenche quand 15% de l'élément est visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-reveal');
        observer.unobserve(entry.target); // Arrête d'observer une fois animé
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    observer.observe(element);
  });
});