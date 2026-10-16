// EXO 1- Ta tâche : écris une fonction qui reçoit un id (ex. 'face02') et retourne l'objet service correspondant,
// en utilisant .find(). Pas de boucle for, pas de forEach.

const services = [
  { id: 'hair01', name: 'Coupe signature', category: 'hair' },
  { id: 'face02', name: 'Soin visage luxe', category: 'face' },
  { id: 'body03', name: 'Massage balinais', category: 'wellness' },
  { id: 'hand04', name: 'Manucure prestige', category: 'hand-feet' },
];

function findServiceById(targetId) {
  const match = services.find(service => service.id === targetId);
  return match;
}
console.log(findServiceById('face02'));

function getCategoryName(targetId) {
  const match = services.find(service => service?.id === targetId);
  return match.category;
}
console.log(getCategoryName('face02'));

function storageId(targetId) {
  sessionStorage.setItem('idStore', targetId);
}

function getLastViewed() {
  const getId = sessionStorage.getItem('idStore');
  if (!getId) return;
  const match = services.find(service => service.id === getId);
  return match;
}
storageId('hand04');
getLastViewed();
