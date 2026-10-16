const btnsAction = document.querySelectorAll('.btn--light');
console.log(btnsAction);

btnsAction.forEach(btn => {
  btn.addEventListener('click', () => {
  const targetCategory = btn.dataset.target; 
  console.log(targetCategory);
  const storage = sessionStorage.setItem('category', targetCategory);
})
})
