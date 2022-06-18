const advice = document.querySelector('.advice');
const hashNumber = document.querySelector('.advice-no span');
const button = document.querySelector('.dice-click');

const adviceSlip = async () => {
  await fetch('https://api.adviceslip.com/advice').then(response => response.json())
  .then(json => {
    advice.textContent = json.slip.advice;
    hashNumber.textContent = json.slip.id;
  })
  .catch(error => console.log('error'));
}

button.addEventListener('click', () => {
  adviceSlip();
});




