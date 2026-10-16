const confirmationGreeting = document.querySelector('.confirmation__greeting');

// Recuperation des donnees sauvegardees 
function getReservation() {
  const getData = localStorage.getItem('reservation');
  const objectData = JSON.parse(getData);
  return objectData;
}

const dataFields = document.querySelectorAll('[data-field]');
console.log(dataFields)
function displayData(data) {
  dataFields.forEach(dataField => {
    const key = dataField.dataset.field;
    dataField.textContent = data[`${key}`];
  })
}


const reservationData = getReservation();
// dans le cas ou l'utilisateur arrive sur confirmation.html directement sans avoir soumis le formulaire 
if (!reservationData) {
  window.location.href = 'booking.html';
} else {
  displayData(reservationData);
  confirmationGreeting.innerHTML=`Merci ${reservationData.firstName}, <br>Votre demande de réservation a bien été reçue.`
}

